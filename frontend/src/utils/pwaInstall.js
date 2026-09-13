/* ── Ilovani o'rnatish (PWA) ──
   React Native / Flutter o'rniga sayt O'ZI ilova sifatida o'rnatiladi:
   manifest (`public/site.webmanifest`) + service worker (`public/sw.js`).

   ⚠️ `beforeinstallprompt` sahifa ochilishi bilan, React hali chizilmasdan
   kelishi mumkin. Shu sabab tinglovchi komponentda EMAS, shu modul
   yuklanishida (`main.jsx` import qiladi) ulanadi — aks holda hodisa
   o'tkazib yuborilib, tugma native oynani hech qachon ocha olmasdi. */

let deferred = null;
const listeners = new Set();

function emit() {
  listeners.forEach((fn) => fn());
}

export function isStandalone() {
  if (typeof window === "undefined") return false;
  return (
    window.matchMedia?.("(display-mode: standalone)").matches ||
    window.navigator.standalone === true
  );
}

/* iPadOS 13+ o'zini "MacIntel" deb ko'rsatadi — sensorli ekran bilan ajratiladi */
export function detectPlatform() {
  const ua = navigator.userAgent || "";
  const ios =
    /iPad|iPhone|iPod/.test(ua) ||
    (navigator.platform === "MacIntel" && navigator.maxTouchPoints > 1);
  if (/Instagram|FBAN|FBAV|Telegram|Line\//i.test(ua)) return "inapp";
  if (ios) return "ios";
  if (/Android/i.test(ua)) return "android";
  return "desktop";
}

export function canPromptInstall() {
  return deferred !== null;
}

/* Native o'rnatish oynasini ochadi. `false` qaytsa — brauzer bunday
   oynani bermaydi va foydalanuvchiga qo'llanma ko'rsatilishi kerak. */
export async function promptInstall() {
  if (!deferred) return false;
  const evt = deferred;
  deferred = null; // hodisa faqat BIR MARTA ishlatiladi
  emit();
  evt.prompt();
  try {
    await evt.userChoice;
  } catch {
    /* foydalanuvchi oynani yopdi — xato emas */
  }
  return true;
}

export function subscribeInstall(fn) {
  listeners.add(fn);
  return () => listeners.delete(fn);
}

/* Brauzer o'rnatish oynasini hali tayyorlamagan bo'lishi mumkin (sahifa
   endigina ochilgan). Qo'llanma ko'rsatishdan oldin qisqa kutamiz.
   ⚠️ Kutish 2,5 s dan oshmasin — `prompt()` foydalanuvchi bosgandan
   keyin ~5 s ichida chaqirilishi shart, aks holda brauzer rad etadi. */
export function waitForPrompt(ms = 2500) {
  if (deferred) return Promise.resolve(true);
  return new Promise((resolve) => {
    const timer = setTimeout(() => {
      off();
      resolve(false);
    }, ms);
    const off = subscribeInstall(() => {
      if (!deferred) return;
      clearTimeout(timer);
      off();
      resolve(true);
    });
  });
}

export function isAndroid() {
  return /Android/i.test(navigator.userAgent || "");
}

/* Telegram/Instagram ichki brauzeridan saytni haqiqiy brauzerda ochadi
   (`?install=1` bilan — u yerda tugma ajratib ko'rsatiladi).
   Android: intent orqali Chrome (Chrome yo'q bo'lsa standart brauzer).
   iOS 17+: `x-safari-https://` sxemasi Safari'ni ochadi; eski iOS'da
   hech narsa bo'lmaydi va qo'llanma ko'rinib turadi. */
export function openInRealBrowser() {
  const url = new URL(window.location.href);
  url.searchParams.set("install", "1");
  if (isAndroid()) {
    const fallback = encodeURIComponent(url.href);
    window.location.href =
      `intent://${url.host}${url.pathname}${url.search}#Intent;scheme=https;` +
      `package=com.android.chrome;S.browser_fallback_url=${fallback};end`;
    return true;
  }
  window.location.href = `x-safari-${url.href}`;
  return false;
}

if (typeof window !== "undefined") {
  window.addEventListener("beforeinstallprompt", (e) => {
    e.preventDefault(); // brauzerning o'z mini-bannerini emas, bizning tugmani ishlatamiz
    deferred = e;
    emit();
  });
  window.addEventListener("appinstalled", () => {
    deferred = null;
    emit();
  });

  /* Faqat production'da: dev rejimida SW Vite HMR bilan aralashishi mumkin */
  if (import.meta.env.PROD && "serviceWorker" in navigator) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").catch(() => {
        /* SW bo'lmasa ham sayt to'liq ishlaydi — faqat oflayn sahifa yo'q */
      });
    });
  }
}
