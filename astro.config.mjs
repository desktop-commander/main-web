import { defineConfig } from 'astro/config';
import react from '@astrojs/react';
import tailwind from '@astrojs/tailwind';

// Determine if we should use a base path
// Check for explicit BASE_PATH env var, or detect GitHub Pages deployment
const isGitHubPages = process.env.GITHUB_ACTIONS === 'true' || process.env.BASE_PATH === '/main-web-astro';
const base = isGitHubPages ? '/main-web-astro/' : '/';

console.log(`Building with base path: ${base}`);

// Built scripts and styles get a 10 character content hash instead of Vite's 8.
// Why: builds reuse a file name whenever its content returns to an earlier state,
// and Cloudflare kept cached 404s for some 8 character names after the broken
// Pages build on 16 Sep 2026 (index.BR_dh4GY.js, the React bundle). With the
// longer hash, every URL is one that has never been served as a 404.
// Client build: all JS and assets. Server build: only assetFileNames (that is
// where Astro emits the CSS); its chunk naming must stay Astro's own.
const HASHED = 'assets/[name].[hash:10]';
const assetNames = {
  name: 'dc-asset-names',
  hooks: {
    'astro:build:setup': ({ target, updateConfig }) => {
      const output = target === 'client'
        ? { entryFileNames: `${HASHED}.js`, chunkFileNames: `${HASHED}.js`, assetFileNames: `${HASHED}[extname]` }
        : { assetFileNames: `${HASHED}[extname]` };
      updateConfig({ build: { rollupOptions: { output } } });
    },
  },
};

// https://astro.build/config
export default defineConfig({
  // Site URL - important for canonical URLs and sitemaps
  site: 'https://desktopcommander.app',
  
  // Base path - use trailing slash for cleaner URLs
  base: base,
  
  // Astro pages source
  srcDir: './astro-src',
  publicDir: './public',
  
  // Output to docs folder for GitHub Pages
  outDir: './docs',
  
  integrations: [
    react(),
    tailwind({
      configFile: './tailwind.config.ts',
      applyBaseStyles: false,
    }),
    assetNames,
  ],
  
  output: 'static',
  
  build: {
    format: 'directory', // URLs like /about/ instead of /about.html
    assets: 'assets' // Assets folder name
  },
  
  vite: {
    resolve: {
      alias: {
        '@': '/src',
      },
    },
  },
  
  // Ensure trailing slashes for consistent routing
  trailingSlash: 'always',
});
