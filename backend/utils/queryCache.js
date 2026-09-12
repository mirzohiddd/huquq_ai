/**
 * Og'ir DB o'qishlari uchun kichik TTL kesh.
 *
 * NIMA UCHUN KERAK (2026-08-23 da o'lchangan):
 * MongoDB Atlas **M0 (bepul tier)** shared CPU'da ishlaydi va bitta
 * kodeksning modda ro'yxatini o'qish sezilarli vaqt oladi — Railway
 * serveridan ~265 ms, sovuq holatda ~2 s. Kutubxona sahifasi har
 * ochilganda 581-810 ta modda QAYTA o'qilardi, holbuki bu ma'lumot
 * kuniga bir marta (lex.uz ingest'ida) o'zgaradi.
 *
 * ⚠️ FAQAT XOM DB NATIJASI keshlanadi — tayyor javob EMAS.
 * Tarjima, saralash va tuzilma yasash har so'rovda qaytadan
 * bajariladi. Sabab: tarjima fon rejimida to'ldiriladi
 * (`pendingTranslation` + frontend qayta so'raydi) — tayyor javob
 * keshlansa, yangi kelgan tarjima foydalanuvchiga hech qachon
 * ko'rinmay qolardi. Tarjimani qo'llash keshdan o'qiladi va tez.
 */

const store = new Map();

/** Kesh hajmi chegarasi — xotira cheksiz o'smasligi uchun. */
const MAX_ENTRIES = 200;

/**
 * @param {string} key
 * @param {number} ttlMs
 * @returns {any|null} muddati o'tmagan qiymat yoki null
 */
function getCached(key, ttlMs) {
  const hit = store.get(key);
  if (!hit) return null;
  // `>=` — ttlMs = 0 berilsa kesh butunlay o'chiriladi (sinov yoki
  // vaqtincha o'chirish uchun); `>` bo'lganda bir xil millisekundda
  // kelgan so'rov baribir keshdan o'qib qolardi.
  if (Date.now() - hit.at >= ttlMs) {
    store.delete(key);
    return null;
  }
  return hit.value;
}

/**
 * @param {string} key
 * @param {any} value
 */
function setCached(key, value) {
  // Eng eski yozuvni chiqarib tashlash (Map tartibni saqlaydi).
  if (store.size >= MAX_ENTRIES) {
    const oldest = store.keys().next().value;
    if (oldest !== undefined) store.delete(oldest);
  }
  store.set(key, { value, at: Date.now() });
}

/**
 * Kesh yozuvlarini tozalaydi.
 *
 * Ingest (lex.uz'dan yangilash) tugagach chaqiriladi — aks holda
 * yangilangan qonun matni kesh muddati o'tguncha ko'rinmasdi.
 *
 * @param {string} [prefix] berilsa, faqat shu bilan boshlanadigan
 *   kalitlar o'chiriladi; berilmasa — hammasi.
 * @returns {number} o'chirilgan yozuvlar soni
 */
function clearCache(prefix) {
  if (!prefix) {
    const n = store.size;
    store.clear();
    return n;
  }
  let n = 0;
  for (const key of store.keys()) {
    if (key.startsWith(prefix)) {
      store.delete(key);
      n++;
    }
  }
  return n;
}

module.exports = { getCached, setCached, clearCache };
