import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// This is the corrected and simplified configuration for Vercel
export default defineConfig({
  plugins: [
    react(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"),
      "@shared": path.resolve(__dirname, "..", "shared"),
      "@assets": path.resolve(__dirname, "..", "attached_assets"),
    },
  },
  build: {
    // Vite will build into a "dist" folder inside the "client" root
    outDir: "dist",
    emptyOutDir: true,
  },
});