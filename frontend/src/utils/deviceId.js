/**
 * QURILMA IDENTIFIKATORI.
 *
 * Nima uchun kerak: login himoyasi (brute-force) endi IP manzil emas,
 * QURILMA bo'yicha ishlaydi. Avval bitta odam parolni 5 marta xato
 * kiritsa, o'sha Wi-Fi tarmog'idagi HAMMA odam 15 daqiqaga kira olmay
 * qolardi (mobil operatorlarda esa minglab abonent bitta IP ortida —
 * ya'ni bitta xato butun operatorni bloklardi).
 *
 * Bu identifikator:
 *  - faqat SHU brauzerni belgilaydi, foydalanuvchi shaxsini emas;
 *  - hech qanday shaxsiy ma'lumot (ism, email, joylashuv) saqlamaydi;
 *  - bir marta yaratilib `localStorage` da qoladi.
 *
 * ⚠️ U yagona himoya EMAS — uni brauzerdan tozalash mumkin. Serverda
 * yana ikki qatlam bor: HISOB bo'yicha (10 urinish) va IP bo'yicha
 * (50 urinish) chegara. Batafsil: `backend/middleware/security.js`.
 */
const KEY = "deviceId";

/** Kriptografik tasodifiy 32 belgili identifikator. */
function generate() {
  try {
    const bytes = new Uint8Array(16);
    crypto.getRandomValues(bytes);
    return Array.from(bytes, (b) => b.toString(16).padStart(2, "0")).join("");
  } catch {
    // Juda eski brauzer — `crypto` yo'q bo'lsa ham ishlashi kerak
    return (
      Date.now().toString(36) + Math.random().toString(36).slice(2, 12)
    ).padEnd(24, "0");
  }
}

export function getDeviceId() {
  try {
    let id = localStorage.getItem(KEY);
    // Server faqat [a-zA-Z0-9_-]{8,64} shaklini qabul qiladi —
    // buzilgan qiymat bo'lsa yangisini yaratamiz.
    if (!id || !/^[a-zA-Z0-9_-]{8,64}$/.test(id)) {
      id = generate();
      localStorage.setItem(KEY, id);
    }
    return id;
  } catch {
    // Shaxsiy rejimda `localStorage` bloklangan bo'lishi mumkin —
    // sessiya davomida bitta qiymat yetarli.
    if (!globalThis.__deviceId) globalThis.__deviceId = generate();
    return globalThis.__deviceId;
  }
}
