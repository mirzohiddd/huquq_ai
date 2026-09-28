import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

/* TEZLIK (2026-09-28, PageSpeed FCP): asosiy CSS render'ni bloklamasin.
   Bosh sahifaning statik hero'si (index.html, app shell) o'z uslubi bilan
   darhol chiziladi; React esa CSS yuklanguncha kutadi (main.jsx →
   `cssReady`), shuning uchun uslubsiz sahifa (FOUC) hech qachon ko'rinmaydi.
   JS o'chirilgan brauzer uchun <noscript> da oddiy havola qoladi. */
function asyncMainCss() {
  return {
    name: "async-main-css",
    apply: "build",
    enforce: "post",
    transformIndexHtml(html) {
      return html.replace(
        /<link rel="stylesheet"( crossorigin)? href="(\/assets\/index-[^"]+\.css)">/,
        (_, co = "", href) =>
          `<link rel="preload" as="style"${co} href="${href}" data-app-css onload="this.onload=null;this.rel='stylesheet'">` +
          `<noscript><link rel="stylesheet"${co} href="${href}"></noscript>`,
      );
    },
  };
}

export default defineConfig({
  plugins: [react(), asyncMainCss()],
  server: {
    port: 5173,
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
