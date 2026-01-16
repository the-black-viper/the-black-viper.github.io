import react from "@vitejs/plugin-react";
import { defineConfig } from "vite";
import { VitePluginRadar } from "vite-plugin-radar";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePluginRadar({
      analytics: {
        id: "G-62P26TQJEK",
      },
      gtm: { id: "GTM-PJ9D2D5F" },
    }),
  ],
  base: "/",
});
