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
    outDir: '../docs', // Changed to directly target docs/library from main-web root
    emptyOutDir: true,             // Added to empty the directory before build
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      },
      output: {
        manualChunks: {
          // Separate heavy dependencies into their own chunks
          'vendor-ui': ['@radix-ui/react-tabs', '@radix-ui/react-dialog', '@radix-ui/react-accordion', '@radix-ui/react-popover'],
          'vendor-charts': ['recharts'],
          'vendor-query': ['@tanstack/react-query'],
          'vendor-icons': ['lucide-react'],
          'vendor-router': ['react-router-dom']
        }
      }
    }
  },
}));
