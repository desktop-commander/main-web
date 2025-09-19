import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },
  // GitHub Pages needs /main-web/ base path, local dev needs /
  base: process.env.NODE_ENV === 'production' ? '/main-web/' : '/',
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
    build: {
    outDir: './docs', // Build to docs folder within the repository
    emptyOutDir: true,             // Added to empty the directory before build
    rollupOptions: {
      input: {
        main: path.resolve(__dirname, 'index.html')
      }
    }
  },
}));
