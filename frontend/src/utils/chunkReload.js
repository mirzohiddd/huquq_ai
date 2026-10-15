/* YANGI DEPLOY'DAN KEYIN ESKI BO'LAK (2026-10-15).
   Sahifa eski build bilan ochiq turganda yangi deploy chiqsa, lazy
   bo'lak (masalan ChatDrawer-xxxx.js) so'ralganda server index.html
   qaytaradi → "Failed to fetch dynamically imported module" va oq ekran.
   Vite bunday holatda `vite:preloadError` chiqaradi — sahifani BIR MARTA
   yangilaymiz, shunda brauzer yangi index.html va yangi bo'laklarni oladi.
   Cheksiz qayta yuklash bo'lmasligi uchun 30 soniyada bir martadan ko'p emas. */
const KEY = "chunkReloadAt";

if (typeof window !== "undefined") {
  window.addEventListener("vite:preloadError", (e) => {
    let last = 0;
    try {
      last = Number(sessionStorage.getItem(KEY)) || 0;
    } catch {
      /* sessionStorage yopiq */
    }
    if (Date.now() - last < 30000) return; // yangilash yordam bermadi — xatoni ko'rsatamiz
    e.preventDefault();
    try {
      sessionStorage.setItem(KEY, String(Date.now()));
    } catch {
      /* jim */
    }
    window.location.reload();
  });
}
