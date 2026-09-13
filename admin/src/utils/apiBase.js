/**
 * Backend manzilini AVTOMATIK aniqlaydi — lokal va serverda bir xil kod.
 * (Batafsil izoh: frontend/src/utils/apiBase.js)
 *
 * localhost da ochilsa → lokal backend, aks holda → serverdagi backend.
 * Shuning uchun admin panelini test qilish uchun `.env` ni o'zgartirish
 * SHART EMAS.
 */

/* 2026-08-22: hosting Render'dan Railway'ga ko'chirildi. */
const DEFAULT_REMOTE = "https://huquq-ai-7v7a.onrender.com";
const DEFAULT_LOCAL = "http://localhost:3000";

/** Hostname haqiqiy domenga o'xshaydimi (yaroqsiz bo'lsa standart manzil
 *  ishlatiladi). Batafsil: frontend/src/utils/apiBase.js */
function isValidOrigin(u) {
  try {
    const { hostname } = new URL(u);
    return hostname.length > 0 && !/[^a-z0-9.\-[\]:]/i.test(hostname);
  } catch {
    return false;
  }
}

/**
 * Oxiridagi `/` olib tashlanadi VA protokol qo'shiladi — `.env` da
 * manzil `https://` siz yozilsa (Railway dashboard shu ko'rinishda
 * ko'rsatadi), so'rovlar nisbiy yo'lga aylanib backendga umuman
 * yetib bormasdi.
 *
 * ⚠️ Nom prefiksi (`VITE_API_URL=https://...`) va tirnoqlar ham
 * tozalanadi — 2026-08-23 da aynan shu qiymat butun saytni yiqitgan.
 * Batafsil: frontend/src/utils/apiBase.js
 */
const normalize = (u) => {
  const v = String(u || "")
    .trim()
    .replace(/^['"]|['"]$/g, "")
    .replace(/^[A-Za-z_][A-Za-z0-9_]*\s*=\s*/, "")
    .trim()
    .replace(/\/+$/, "");
  if (!v) return "";
  const withProto = /^https?:\/\//i.test(v)
    ? v
    : /^(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$/i.test(v)
      ? `http://${v}`
      : `https://${v}`;
  return isValidOrigin(withProto) ? withProto : "";
};

function isLocalHost() {
  if (typeof window === "undefined") return false;
  const h = window.location.hostname;
  return h === "localhost" || h === "127.0.0.1" || h === "[::1]" || h === "::1";
}

export const API_ORIGIN = isLocalHost()
  ? normalize(import.meta.env.VITE_LOCAL_API_URL) || DEFAULT_LOCAL
  : normalize(import.meta.env.VITE_API_URL) || DEFAULT_REMOTE;

export const API_BASE = `${API_ORIGIN}/api`;

export default API_ORIGIN;
