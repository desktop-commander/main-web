# AI Workflow Instructions

## Repository Overview
This repository contains the Desktop Commander website - a static site built from React/Vite source code and hosted on GitHub Pages from the `docs/` folder.

## Important: This repo contains BOTH source AND built files
- Source code: `root/` and `prompt-library/` directories
- Built static files: `docs/` directory (committed to git for GitHub Pages)
- The `docs/` folder must be rebuilt and committed whenever source changes are made

## Workflow Rules

### 1. Always Start with a New Branch
```bash
# Fetch latest changes
git fetch origin
git checkout main
git pull origin main

# Create new feature branch from remote main
git checkout -b feature/your-feature-name
```

### 2. Static Build Management
This repo requires special handling because it hosts static files on GitHub Pages:

- **CRITICAL**: After making source code changes, you MUST rebuild and commit static files
- Use the provided npm script: `npm run commit-static`
- This script:
  - Removes old build files from git tracking
  - Rebuilds the static site
  - Commits new build files with timestamp

```bash
# After making source code changes:
npm run commit-static
```

### 3. Preview Locally
For testing your changes:

```bash
# Development preview (hot reload, not compiled)
cd root && npm run dev
# Runs on http://localhost:8082

# Production preview (see actual built version)  
npm run serve
# Runs on http://localhost:3000
```

### 4. Large Features: Use Pull Requests
For significant changes that need review:

```bash
# Install GitHub CLI if not already installed
# brew install gh (macOS) or equivalent

# Create PR from your feature branch
gh pr create --title "Your feature title" --body "Description of changes"

# Or push and create PR via GitHub web interface
git push origin feature/your-feature-name
```

### 5. Small Changes: Direct to Main
For minor updates, bug fixes, or content changes:

```bash
# Make your changes
# Run commit-static to rebuild
npm run commit-static

# Push to main (will auto-deploy via GitHub Pages)
git push origin main
```

## Complete Example Workflow

### Small Change Example:
```bash
git checkout main
git pull origin main
git checkout -b fix/update-hero-text

# Make changes to source files
# ... edit files ...

# Rebuild and commit static files
npm run commit-static

# Commit your source changes
git add .
git commit -m "Update hero text"

# Merge to main and push
git checkout main
git merge fix/update-hero-text
git push origin main

# Delete feature branch
git branch -d fix/update-hero-text
```

### Large Feature Example:
```bash
git checkout main
git pull origin main
git checkout -b feature/new-pricing-section

# Make changes
# ... edit files ...

# Rebuild and commit static files
npm run commit-static

# Commit source changes
git add .
git commit -m "Add new pricing section"

# Push feature branch and create PR
git push origin feature/new-pricing-section
gh pr create --title "Add pricing section" --body "New pricing page with comparison table"

# Wait for review and merge via GitHub
```

## Key Points to Remember
1. **Always branch from remote main**
2. **Always run `npm run commit-static` after source changes**
3. **Preview locally before committing**
4. **Use PRs for large features, direct merge for small changes**
5. **GitHub Pages auto-deploys from main branch `docs/` folder**

## File Structure
```
main-web/
├── root/                    # Main React app source
├── prompt-library/          # Documentation source  
├── docs/                    # Built static files (committed to git)
├── package.json             # Contains commit-static script
└── AI_WORKFLOW.md          # This file
```
