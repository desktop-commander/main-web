import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // Relative base path works with both GitHub Pages subdirectory and custom domain
  // Preview mode uses relative paths for PR previews
  base: mode === 'production' ? './' : mode === 'preview' ? './' : '/',
  plugins: [react()],
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
      }
    }
  },
}));
