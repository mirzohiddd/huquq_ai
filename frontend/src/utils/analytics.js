/**
 * SAYT ANALITIKASI (2026-10-15) — admin panelidagi "Analitika" uchun.
 *
 * Har bir sahifa o'tishida bitta yengil so'rov (`/analytics/hit`) va sahifa
 * yopilganda `sendBeacon` (o'tirgan vaqt uchun). Brauzer `deviceId` bilan
 * tanilsa ham shaxsiy ma'lumot yuborilmaydi. Token bo'lsa `api` uni o'zi
 * qo'shadi — shunda server "ro'yxatdan o'tdi / a'zo" ekanini biladi.
 *
 * ⚠️ Faqat `useEffect` ichida ishlaydi (SSR'da `window` yo'q). Xato
 * hech qachon foydalanuvchiga ko'rinmaydi.
 */
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
import api from "./api";
import { API_BASE } from "./apiBase";
import { getDeviceId } from "./deviceId";

let lastPath = "";
let leaveBound = false;

function idle(fn) {
  if (typeof window.requestIdleCallback === "function") window.requestIdleCallback(fn, { timeout: 3000 });
  else setTimeout(fn, 800);
}

function sendHit(path) {
  const first = !lastPath;
  lastPath = path;
  const params = new URLSearchParams(window.location.search);
  api
    .post("/analytics/hit", {
      vid: getDeviceId(),
      path,
      // Referrer faqat birinchi sahifada — ichki o'tishlar manbani buzmasin
      ref: first ? document.referrer || "" : "",
      utm: first ? params.get("utm_source") || "" : "",
    })
    .catch(() => {});
}

function bindLeave() {
  if (leaveBound) return;
  leaveBound = true;
  document.addEventListener("visibilitychange", () => {
    if (document.visibilityState !== "hidden" || !navigator.sendBeacon) return;
    try {
      const body = new Blob([JSON.stringify({ vid: getDeviceId() })], { type: "text/plain" });
      navigator.sendBeacon(`${API_BASE}/analytics/leave`, body);
    } catch {
      /* jim */
    }
  });
}

/** Router ichida bir marta chaqiriladi (App.jsx → AppRoutes). */
export function usePageTracking() {
  const { pathname } = useLocation();
  useEffect(() => {
    if (/^(localhost|127\.0\.0\.1)$/.test(window.location.hostname)) return;
    if (pathname === lastPath) return;
    idle(() => {
      bindLeave();
      sendHit(pathname);
    });
  }, [pathname]);
}
