/**
 * Sayt haqidagi barcha SEO/AEO/GEO/LLMO/SMO ma'lumotlarining YAGONA manbasi.
 *
 * Nega alohida fayl?
 *  — domen, ijtimoiy havolalar va tashkilot nomi ilgari `index.html`,
 *    `Seo.jsx`, `sitemap.xml` va `robots.txt` da ALOHIDA-ALOHIDA yozilgan
 *    edi. Domen o'zgarganda bir joyi unutilsa, qidiruv tizimi noto'g'ri
 *    (404 qaytaradigan) manzilni indekslab qolardi — aynan shunday holat
 *    2026-08-04 da bo'lgan. Endi JS tomonidagi hamma narsa shu yerdan
 *    oladi. Statik fayllar (`public/*`) esa `scripts/buildSeoFiles.js`
 *    orqali shu qiymatlardan GENERATSIYA qilinadi.
 */

export const SITE_URL = (
  import.meta.env?.VITE_SITE_URL || "https://huquq-ai-xi.vercel.app"
).replace(/\/$/, "");

export const SITE_NAME = "Huquq AI";
export const SITE_LEGAL_NAME = "Huquq AI — huquqiy ta'lim platformasi";

/** Ijtimoiy tarmoq va rasmiy profillar — schema.org `sameAs` uchun. */
export const SOCIAL_LINKS = [
  "https://t.me/mening_huquqlarim_bot",
  "https://www.instagram.com/tox1roff_18/",
];

export const CONTACT = {
  email: "toxirovi82@gmail.com",
  telegram: "https://t.me/mening_huquqlarim_bot",
};

/**
 * Ijtimoiy tarmoqda ulashilganda ko'rinadigan rasm (1200×630 — Telegram,
 * Facebook, LinkedIn va X uchun standart o'lcham).
 *
 * ⚠️ Logo o'rniga ALOHIDA banner ishlatiladi: `logo.png` kvadrat (600×600)
 * va ulashuvda u qirqilib yoki kichkina bo'lib ko'rinardi. Har til uchun
 * o'z varianti bor — ruscha havola ulashilganda o'zbekcha matnli rasm
 * chiqmasligi kerak.
 */
export const OG_IMAGE = `${SITE_URL}/og-image.jpg`;
export const OG_IMAGE_BY_LANG = {
  uz: `${SITE_URL}/og-image.jpg`,
  ru: `${SITE_URL}/og-image-ru.jpg`,
};
export const OG_IMAGE_W = 1200;
export const OG_IMAGE_H = 630;
export const LOGO_URL = `${SITE_URL}/logo.png`;

/** Qo'llab-quvvatlanadigan tillar (ingliz tili 2026-08-07 da olib tashlangan). */
export const LOCALES = ["uz", "ru"];
export const DEFAULT_LOCALE = "uz";
export const OG_LOCALE = { uz: "uz_UZ", ru: "ru_RU" };
/** hreflang uchun to'liq kod — "uz" emas, "uz-UZ" aniqroq signal beradi. */
export const HREFLANG = { uz: "uz-UZ", ru: "ru-UZ" };

/** Xizmat ko'rsatiladigan hudud — GEO signali. */
export const GEO = {
  country: "UZ",
  countryName: "Uzbekistan",
  region: "UZ-TK",
  placename: "Tashkent",
  latitude: "41.311081",
  longitude: "69.240562",
};

/**
 * AI qidiruv tizimlari (ChatGPT, Perplexity, Claude, Gemini) saytni
 * to'g'ri tavsiflashi uchun qisqa, faktik ta'rif. GEO/LLMO da eng ko'p
 * ishlatiladigan matn — shuning uchun u qisqa va aniq bo'lishi kerak.
 */
export const AI_SUMMARY = {
  uz:
    "Huquq AI — O'zbekiston qonunchiligiga asoslangan sun'iy intellekt huquqiy " +
    "maslahat va ta'lim platformasi. Har bir javob lex.uz dagi amaldagi 20 ta " +
    "kodeks va Konstitutsiya matnidan olinadi.",
  ru:
    "Huquq AI — платформа юридических консультаций и обучения на основе " +
    "искусственного интеллекта и законодательства Узбекистана. Каждый ответ " +
    "опирается на действующие 20 кодексов и Конституцию с lex.uz.",
};

/**
 * Server tomonda chiziladigan OCHIQ sahifalar (React marshruti EMAS).
 *
 * ⚠️ Ular `<Link>` bilan emas, oddiy `<a>` bilan ochiladi — `<Link>`
 * ularni SPA ichida topmay, bosh sahifaga qaytarib yuborardi.
 * Manba: backend `routes/publicSeo.js` va `routes/publicQa.js`,
 * Vercel rewrite orqali asosiy domenda ko'rinadi.
 *
 * ⚠️ Bu yerda ilgari `SECTIONS` massivi bor edi (`/#pricing`, `/#faq`
 * kabi anchor manzillar bilan). U HECH QAYERDA ishlatilmasdi va
 * chalg'ituvchi edi: anchor manzillar sitemap'dan ATAYLAB olib
 * tashlangan (fragment — sahifaning qismi, alohida sahifa emas).
 */
export const OPEN_PAGES = {
  laws: "/qonunlar",
  qa: "/savollar",
  method: "/metodologiya",
};

/** Platforma qamrab olgan huquq sohalari — entity signali (GEO/AEO). */
export const LEGAL_AREAS = [
  "Mehnat huquqi",
  "Oila huquqi",
  "Meros huquqi",
  "Yer va ko'chmas mulk huquqi",
  "Iste'molchi huquqlari",
  "Jinoyat huquqi",
  "Fuqarolik huquqi",
  "Soliq huquqi",
  "Ma'muriy huquq",
  "Uy-joy huquqi",
];
