import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./App";
import "./styles/global.css";
// PWA: `beforeinstallprompt` ni React chizilishidan OLDIN ushlash uchun
import "./utils/pwaInstall";

import { loadLang } from "./i18n/translations";
import { readStoredLang } from "./context/LangContext";

/* APP SHELL (index.html): statik hero ekranga CHIZILGUNCHA React uni
   almashtirmasligi kerak — aks holda LCP React hero'siga (ya'ni JS
   yuklanishiga) bog'lanib qoladi. Hero rasmi dekodlangach 2 kadr kutiladi;
   eng ko'pi 1,2 s (sekin tarmoqda interfeys kechikmasligi uchun). */
function shellPainted() {
  if (!document.documentElement.classList.contains("app-shell")) return Promise.resolve();
  const src = window.matchMedia("(max-width: 800px)").matches ? "/hero-800.webp" : "/hero-1600.webp";
  const img = new Image();
  img.src = src;
  const decoded = img.decode ? img.decode().catch(() => {}) : Promise.resolve();
  const cap = new Promise((r) => setTimeout(r, 1200));
  return Promise.race([decoded, cap]).then(
    () => new Promise((r) => requestAnimationFrame(() => requestAnimationFrame(r))),
  );
}

/* Asosiy CSS asinxron yuklanadi (vite.config.js → asyncMainCss). React
   uslub tayyor bo'lgach chizadi — uslubsiz lahza (FOUC) bo'lmasin. */
function cssReady() {
  const link = document.querySelector("link[data-app-css]");
  if (!link) return Promise.resolve();
  // `sheet` faqat uslub HAQIQATAN qo'llanganda paydo bo'ladi (preload
  // tugagach rel "stylesheet" ga o'tadi, uslub esa bir lahza keyin ulanadi)
  const applied = () => link.rel === "stylesheet" && link.sheet;
  if (applied()) return Promise.resolve();
  return new Promise((resolve) => {
    const started = Date.now();
    (function wait() {
      // zaxira: 4 s dan keyin tarmoq osilib qolsa ham sahifa ochilsin
      if (applied() || Date.now() - started > 4000) resolve();
      else setTimeout(wait, 16);
    })();
  });
}

// Saqlangan til ruscha bo'lsa — uning lug'ati (alohida bo'lak) chizishdan
// OLDIN yuklanadi. O'zbekcha allaqachon asosiy bo'lakda — kutish yo'q.
Promise.all([loadLang(readStoredLang()), shellPainted(), cssReady()]).finally(() => {
  ReactDOM.createRoot(document.getElementById("root")).render(
    <React.StrictMode>
      <BrowserRouter>
        <App />
      </BrowserRouter>
    </React.StrictMode>
  );
});
