/**
 * Backend manzilini AVTOMATIK aniqlaydi — lokal va serverda bir xil kod.
 *
 * MUAMMO: avval har bir fayl `import.meta.env.VITE_API_URL` ni to'g'ridan-
 * to'g'ri o'qirdi (12 ta joyda). Shu sabab lokalda test qilish uchun
 * `.env` ni `http://localhost:3000` ga o'zgartirish, deploy oldidan esa
 * yana hosting manziliga qaytarish kerak bo'lardi — biri unutilsa,
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

/* 2026-08-22: hosting Render'dan Railway'ga ko'chirildi. */
const DEFAULT_REMOTE = "https://huquq-ai-production.up.railway.app";
const DEFAULT_LOCAL = "http://localhost:3000";

/**
 * Manzil haqiqiy domenga o'xshaydimi? Hostname'da faqat harf, raqam,
 * nuqta, chiziqcha va port belgilari bo'lishi mumkin.
 *
 * ⚠️ Bu tekshiruv YAROQSIZ qiymat standart manzilni bosib ketmasligi
 * uchun kerak: qaytarilgan bo'sh satr `|| DEFAULT_REMOTE` ga tushadi,
 * ya'ni sozlama noto'g'ri bo'lsa ham sayt ishlashda davom etadi.
 */
function isValidOrigin(u) {
  try {
    const { hostname } = new URL(u);
    return hostname.length > 0 && !/[^a-z0-9.\-[\]:]/i.test(hostname);
  } catch {
    return false;
  }
}

/**
 * Manzilni tozalaydi: oxiridagi `/` olib tashlanadi VA protokol
 * qo'shiladi.
 *
 * ⚠️ Protokol tekshiruvi ATAYLAB qo'shildi: `.env` ga manzil
 * `huquq-ai-production.up.railway.app` shaklida (https:// siz) yozilsa,
 * `API_BASE` nisbiy yo'lga aylanib qolardi — axios uni Vercel domeniga
 * nisbatan hisoblab, har bir so'rovni backend o'rniga frontendga
 * yuborardi va butun sayt jim ishlamay qolardi.
 *
 * ⚠️ 2026-08-23: HAQIQIY NOSOZLIK — hosting panelidagi (Vercel) o'zgaruvchi
 * qiymatiga butun satr nusxalangan edi: `VITE_API_URL=huquq-ai-...`.
 * Protokol qo'shilgach manzil `https://vite_api_url=huquq-ai-...` bo'lib
 * chiqdi va BARCHA so'rovlar `ERR_NAME_NOT_RESOLVED` bilan yiqildi — sayt
 * butunlay ishlamay qoldi. Endi nom prefiksi va tirnoqlar tozalanadi.
 */
const normalize = (u) => {
  const v = String(u || "")
    .trim()
    // Tirnoq ichida yozilgan qiymat: "https://..." yoki 'https://...'
    .replace(/^['"]|['"]$/g, "")
    // Nom prefiksi: `VITE_API_URL=https://...` → `https://...`
    .replace(/^[A-Za-z_][A-Za-z0-9_]*\s*=\s*/, "")
    .trim()
    .replace(/\/+$/, "");
  if (!v) return "";
  const withProto = /^https?:\/\//i.test(v)
    ? v
    : // localhost yoki 127.0.0.1 — http, qolgan hammasi https
      /^(localhost|127\.0\.0\.1|\[::1\])(:\d+)?$/i.test(v)
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

/** `/api` prefiksi bilan — so'rovlar shu manzilga yuboriladi */
export const API_BASE = `${API_ORIGIN}/api`;

export default API_ORIGIN;
