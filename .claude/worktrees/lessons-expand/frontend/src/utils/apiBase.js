/**
 * Backend manzilini AVTOMATIK aniqlaydi — lokal va serverda bir xil kod.
 *
 * MUAMMO: avval har bir fayl `import.meta.env.VITE_API_URL` ni to'g'ridan-
 * to'g'ri o'qirdi (12 ta joyda). Shu sabab lokalda test qilish uchun
 * `.env` ni `http://localhost:3000` ga o'zgartirish, deploy oldidan esa
 * yana Render manziliga qaytarish kerak bo'lardi — biri unutilsa,
 * sayt ishlamay qolardi (aynan shu bo'ldi: `.env` production manzilida
 * qolgani uchun lokal frontend production backendga so'rov yuborardi).
 *
 * YECHIM: manzil sahifa qayerda ochilganiga qarab tanlanadi:
 *   - localhost/127.0.0.1 da ochilgan bo'lsa → lokal backend
 *   - boshqa har qanday domenda (Vercel) → serverdagi backend
 * Endi bitta build ikkala muhitda ham to'g'ri ishlaydi va `.env` ni
 * o'zgartirish SHART EMAS.
 *
 * Kerak bo'lsa qo'lda boshqarish (`frontend/.env`):
 *   VITE_API_URL        — serverdagi backend manzili
 *   VITE_LOCAL_API_URL  — lokal backend manzili (masalan boshqa port),
 *                         yoki lokalda ham production backendni sinash uchun
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

/** `/api` prefiksi bilan — so'rovlar shu manzilga yuboriladi */
export const API_BASE = `${API_ORIGIN}/api`;

export default API_ORIGIN;
