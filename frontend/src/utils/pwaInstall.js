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
