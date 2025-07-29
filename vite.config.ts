import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path"; // ✅ Needed for alias resolution

export default defineConfig({
  plugins: [react()],
  base: "/eliza-portfolio-dcs/", // ✅ For GitHub Pages
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src"), // ✅ Enables @/components, @/hooks, etc.
    },
  },
  server: {
    fs: {
      allow: [".."],
    },
  },
});
