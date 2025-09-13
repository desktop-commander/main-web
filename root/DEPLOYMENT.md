# Desktop Commander Website Deployment Guide

## 🚨 **CRITICAL: Dual Environment Configuration**

This project is configured to work in **both local development AND GitHub Pages** environments. The configuration automatically detects the environment and adjusts accordingly.

### **The Problem That Keeps Recurring**

Every new chat session, these issues happen:
1. ❌ **Local server shows black screen** - routing conflicts
2. ❌ **GitHub Pages not updating** - configuration mismatches  
3. ❌ **Assets not loading** - base path issues

### **Root Cause**

GitHub Pages requires `/main-web/` base path, but local development needs `/` (root). Without proper dual environment configuration, one will always break.

## ✅ **THE PERMANENT FIX**

### **1. Vite Configuration (vite.config.ts)**
```typescript
// ✅ CORRECT - Dual environment support
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // 🔑 KEY: Different base paths for different environments
  base: process.env.NODE_ENV === 'production' ? '/main-web/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));

// ❌ WRONG - Will break GitHub Pages
base: '/', // Only works locally

// ❌ WRONG - Will break local development  
base: '/main-web/', // Only works on GitHub Pages
```

### **2. React Router Configuration (src/App.tsx)**
```typescript
// ✅ CORRECT - Dynamic basename detection
const basename = import.meta.env.PROD ? '/main-web' : '';

const App = () => (
  <BrowserRouter basename={basename}>
    {/* routes */}
  </BrowserRouter>
);

// ❌ WRONG - Static configurations will break one environment
<BrowserRouter basename="/main-web"> // Breaks local
<BrowserRouter> // Breaks GitHub Pages
```

### **3. GitHub Workflow (.github/workflows/deploy.yml)**
The workflow is correctly configured and should NOT be modified unless needed. It:
- ✅ Builds with `npm run build` (uses production environment)  
- ✅ Deploys to GitHub Pages automatically on main branch pushes
- ✅ Uses proper NODE_ENV=production for correct base path
- ✅ **CRITICAL**: Sets `working-directory: ./root` because project is in subdirectory
- ✅ **CRITICAL**: Uses `cache-dependency-path: './root/package-lock.json'`
- ✅ **CRITICAL**: Uploads artifact from `'./root/dist'` path

**Common Workflow Issues:**
- ❌ Missing `working-directory: ./root` → npm commands fail
- ❌ Wrong `cache-dependency-path` → dependency installation fails  
- ❌ Incorrect artifact `path` → empty or wrong files deployed

## 🔄 **STANDARD WORKFLOW**

### **Local Development**
```bash
npm run dev
# ✅ Serves on http://localhost:8080/
# ✅ Uses basename="" (root)
# ✅ All assets load from /
```

### **Production Deployment**
```bash
git add .
git commit -m "your changes"
git push origin main
# ✅ GitHub Actions automatically builds
# ✅ Uses basename="/main-web" 
# ✅ Deploys to https://desktop-commander.github.io/main-web/
```

## 🛠️ **DEBUGGING CHECKLIST**

### **If Local Development Shows Black Screen:**
1. ✅ Check `vite.config.ts` has `base: process.env.NODE_ENV === 'production' ? '/main-web/' : '/'`
2. ✅ Check `App.tsx` has `const basename = import.meta.env.PROD ? '/main-web' : '';`
3. ✅ Restart dev server: `npm run dev`

### **If GitHub Pages Not Updating:**
1. ✅ Verify GitHub Actions workflow ran successfully at https://github.com/desktop-commander/main-web/actions
2. ✅ Check workflow uses `working-directory: ./root` (project is in subdirectory)
3. ✅ Confirm GitHub repository Settings > Pages is set to "GitHub Actions"
4. ✅ Verify production build uses correct base path
5. ✅ Wait 2-3 minutes for CDN cache to clear
6. ✅ Check artifact upload path is `./root/dist` not just `./dist`

### **If Assets Not Loading:**
1. ✅ Verify all asset paths use `getAssetPath()` helper function
2. ✅ Check public folder contains all referenced images
3. ✅ Ensure no hardcoded `/` paths that should be relative

## 📊 **ENVIRONMENT DETECTION**

| Environment | `import.meta.env.PROD` | `process.env.NODE_ENV` | Base Path | Basename |
|-------------|------------------------|------------------------|-----------|----------|
| Local Dev   | `false` | `'development'` | `/` | `''` |
| Production  | `true` | `'production'` | `/main-web/` | `'/main-web'` |

## 🚨 **NEVER DO THIS**

❌ **Don't hardcode paths:**
```typescript
// WRONG - Will break in one environment
<BrowserRouter basename="/main-web">
base: '/main-web/'
```

❌ **Don't remove environment detection:**
```typescript
// WRONG - Removes dual environment support
const basename = '/main-web'; // Static value
```

❌ **Don't modify the GitHub workflow** unless you understand the deployment implications.

## ✅ **VALIDATION COMMANDS**

After any configuration changes, test both environments:

```bash
# Test local development
npm run dev
# Should work at http://localhost:8080/

# Test production build locally  
npm run build
npm run preview
# Should work at http://localhost:4173/main-web/

# Deploy to production
git push origin main
# Should work at https://desktop-commander.github.io/main-web/
```

## 📝 **COMMIT TEMPLATE**

When fixing deployment issues, use this commit structure:

```bash
git commit -m "fix: Configure dual environment support for local dev + GitHub Pages

✅ LOCAL: basename='' base='/' for development
✅ PRODUCTION: basename='/main-web' base='/main-web/' for GitHub Pages  
✅ WORKFLOW: Automatic environment detection
🔧 Prevents recurring black screen and deployment issues"
```

---

## 🔗 **Important URLs**

- **Local Development**: http://localhost:8080/
- **Production**: https://desktop-commander.github.io/main-web/
- **GitHub Actions**: https://github.com/desktop-commander/main-web/actions
- **Repository Settings**: https://github.com/desktop-commander/main-web/settings/pages

**Remember**: Both environments MUST work. Never sacrifice one for the other!