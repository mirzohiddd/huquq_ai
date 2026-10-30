/**
 * TELEGRAM WEBAPP YORDAMCHILARI (mini app).
 *
 * `telegram-web-app.js` faqat /tg sahifasida yuklanadi — saytning qolgan
 * qismi uni tortmaydi. Telegram tashqarisida ochilsa (`initData` bo'sh)
 * ilova "Telegram ichida oching" ekranini ko'rsatadi.
 */
const SRC = "https://telegram.org/js/telegram-web-app.js";
let loading = null;

export function loadTelegram() {
  if (typeof window === "undefined") return Promise.resolve(null);
  if (window.Telegram?.WebApp) return Promise.resolve(window.Telegram.WebApp);
  if (!loading) {
    loading = new Promise((resolve) => {
      // index.html /tg da tegni oldindan qo'shadi — bor bo'lsa o'shani kutamiz
      const s = document.getElementById("tg-sdk") || document.createElement("script");
      s.addEventListener("load", () => resolve(window.Telegram?.WebApp || null));
      s.addEventListener("error", () => resolve(null));
      if (!s.src) {
        s.src = SRC;
        s.async = true;
        document.head.appendChild(s);
      }
      setTimeout(() => resolve(window.Telegram?.WebApp || null), 4000); // tarmoq osilib qolmasin
    });
  }
  return loading;
}

export const wa = () => (typeof window !== "undefined" ? window.Telegram?.WebApp : null);

/** Ochilish: to'liq ekran, sayt ranglari (navy sarlavha). */
export function setupApp(app) {
  if (!app) return;
  try {
    app.ready();
    app.expand();
    app.setHeaderColor?.("#101a2e");
    app.setBackgroundColor?.("#f8f6f1");
    app.disableVerticalSwipes?.(); // o'yinda surish ilovani yopib yubormasin
  } catch {
    /* eski Telegram versiyasi — e'tiborsiz */
  }
}

/** Tebranish: "success" | "error" | "light" */
export function haptic(kind = "light") {
  const h = wa()?.HapticFeedback;
  if (!h) return;
  try {
    if (kind === "success" || kind === "error") h.notificationOccurred(kind);
    else h.impactOccurred(kind);
  } catch {
    /* qo'llab-quvvatlanmaydi */
  }
}

/** Telegram'ning "Orqaga" tugmasi — `fn` null bo'lsa yashiriladi. */
export function backButton(fn) {
  const b = wa()?.BackButton;
  if (!b) return () => {};
  if (!fn) {
    b.hide();
    return () => {};
  }
  b.show();
  b.onClick(fn);
  return () => {
    b.offClick(fn);
    b.hide();
  };
}

export function openLink(url) {
  const app = wa();
  if (url.startsWith("https://t.me/") && app?.openTelegramLink) app.openTelegramLink(url);
  else if (app?.openLink) app.openLink(url);
  else window.open(url, "_blank", "noopener");
}
