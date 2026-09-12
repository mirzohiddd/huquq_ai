/**
 * Backend manzilini AVTOMATIK aniqlaydi — lokal va serverda bir xil kod.
 * (Batafsil izoh: frontend/src/utils/apiBase.js)
 *
 * localhost da ochilsa → lokal backend, aks holda → serverdagi backend.
 * Shuning uchun admin panelini test qilish uchun `.env` ni o'zgartirish
 * SHART EMAS.
 */

const DEFAULT_REMOTE = "https://huquq-ai-2gvs.onrender.com";
const DEFAULT_LOCAL = "http://localhost:3000";

const stripSlash = (u) => String(u || "").replace(/\/+$/, "");

function isLocalHost() {
  if (typeof window === "undefined") return false;
  const h = window.location.hostname;
  return h === "localhost" || h === "127.0.0.1" || h === "[::1]" || h === "::1";
}

export const API_ORIGIN = isLocalHost()
  ? stripSlash(import.meta.env.VITE_LOCAL_API_URL || DEFAULT_LOCAL)
  : stripSlash(import.meta.env.VITE_API_URL || DEFAULT_REMOTE);

export const API_BASE = `${API_ORIGIN}/api`;

export default API_ORIGIN;
