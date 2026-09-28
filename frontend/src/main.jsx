import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";
// PWA: `beforeinstallprompt` ni React chizilishidan OLDIN ushlash uchun
import "./utils/pwaInstall";
import { loadLang } from "./i18n/translations";
import { readStoredLang } from "./context/LangContext";

const container = document.getElementById("root");
const app = (
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);

/* SSR (scripts/prerender.mjs): #root da build vaqtida render qilingan bosh
   sahifa bor. Mehmon + o'zbekcha + "/" holatida (index.html dagi skript
   `ssr-off` qo'ymagan bo'lsa) React o'sha DOM'ga HYDRATE qiladi — sahifa
   almashtirilmaydi, LCP elementi o'zgarmaydi. Aks holda SSR HTML tozalanib,
   React noldan chizadi. */
const canHydrate =
  container.dataset.ssr === "1" && !document.documentElement.classList.contains("ssr-off");

// Saqlangan til ruscha bo'lsa — uning lug'ati (alohida bo'lak) chizishdan
// OLDIN yuklanadi. O'zbekcha allaqachon asosiy bo'lakda — kutish yo'q.
loadLang(readStoredLang()).finally(() => {
  if (canHydrate) {
    ReactDOM.hydrateRoot(container, app, {
      onRecoverableError(err) {
        // Mos kelmaslik bo'lsa React o'zi client render qiladi; sababini ko'rsatamiz
        console.warn("SSR hydration:", err && err.message);
      },
    });
    return;
  }
  container.textContent = "";
  delete container.dataset.ssr;
  ReactDOM.createRoot(container).render(app);
});
