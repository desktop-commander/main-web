import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { visualizer } from 'rollup-plugin-visualizer';

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "localhost",
    port: 8080,
  },
  // Base path for unified SPA - use absolute paths from root
  // This ensures assets load from /assets/ regardless of route depth
  base: mode === 'production' ? '/' : mode === 'preview' ? './' : '/',
  plugins: [
    react(),
    ...(mode === 'production' ? [
      visualizer({
        filename: '../bundle-analysis.html',
        open: false,
        gzipSize: true
      })
    ] : [])
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
    build: {
    outDir: '../docs',
    emptyOutDir: true,
    // Optimize build settings for better performance
    target: 'es2022', // Modern browsers only - reduces bundle size
    minify: 'esbuild', // Use esbuild instead of terser for faster builds
    sourcemap: false, // Disable sourcemaps for smaller builds
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      },
      output: {
        // Better chunk splitting for faster loading
        manualChunks: (id) => {
          // Core React libraries
          if (id.includes('react') || id.includes('react-dom')) {
            return 'vendor-react';
          }
          // UI components
          if (id.includes('@radix-ui')) {
            return 'vendor-ui';
          }
          // Charts (heavy dependency)
          if (id.includes('recharts') || id.includes('d3')) {
            return 'vendor-charts';
          }
          // Icons (frequently used)
          if (id.includes('lucide-react')) {
            return 'vendor-icons';
          }
          // Router
          if (id.includes('react-router')) {
            return 'vendor-router';
          }
          // Query libraries
          if (id.includes('@tanstack/react-query')) {
            return 'vendor-query';
          }
          // Other node_modules
          if (id.includes('node_modules')) {
            return 'vendor';
          }
        },
        // Optimize chunk filenames with better hashing
        chunkFileNames: 'assets/[name]-[hash].js',
        entryFileNames: 'assets/[name]-[hash].js',
        assetFileNames: 'assets/[name]-[hash].[ext]'
      }
    }
  },
}));
