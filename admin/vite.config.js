import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    port: 5174,
    proxy: {
      "/api": {
        // Dev proxy — lokal backend (VITE_API_URL absolyut manzil
        // ishlatilgani uchun odatda kerak emas, zaxira sifatida turadi)
        target: process.env.VITE_LOCAL_API_URL || "http://localhost:3000",
        changeOrigin: true,
      },
    },
  },
  build: {
    outDir: "dist",
    sourcemap: false,
  },
});
