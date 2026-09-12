"use strict";
/**
 * QONUN HUJJATLARI REYESTRI — yagona kirish nuqtasi.
 *
 * Avval kuzatiladigan qonunlar ro'yxati `config/laws.js` da QATTIQ
 * yozilgan edi: yangi kodeks qo'shish uchun kodni tahrirlab, qayta
 * deploy qilish kerak bo'lardi. Endi ro'yxat bazada (`LawSource`) va
 * admin panelidan boshqariladi.
 *
 * `config/laws.js` esa "zavod sozlamalari" bo'lib qoladi — kolleksiya
 * bo'sh bo'lsa, shu ro'yxat bir marta bazaga ko'chiriladi.
 *
 * ⚠️ Barcha chaqiruvchilar (`routes/library.js`, `scripts/ingestLaws.js`)
 * endi SHU MODUL orqali ishlaydi, `config/laws.js` ni to'g'ridan-to'g'ri
 * o'qimaydi — aks holda admin qo'shgan kodeks ba'zi joylarda ko'rinib,
 * ba'zi joylarda ko'rinmay qolardi.
 */
const { LawSource } = require("../models");
const { TRACKED_LAWS } = require("../config/laws");

/* Ro'yxat qisqa muddatga keshlanadi: u har bir kutubxona so'rovida
   kerak bo'ladi, lekin juda kam o'zgaradi. Admin o'zgartirish kiritsa
   kesh darhol tozalanadi (`invalidateCache`). */
const CACHE_MS = 60 * 1000;
let cache = null;
let cacheAt = 0;

function invalidateCache() {
  cache = null;
  cacheAt = 0;
}

/** Bazadagi yozuvni chaqiruvchilar kutgan shaklga keltiradi */
function toPlain(doc) {
  return {
    code: doc.code,
    name: doc.name,
    nameI18n: { ru: doc.nameRu || "" },
    docId: doc.docId || "",
    url: doc.url,
    urlRu: doc.urlRu || "",
    enabled: doc.enabled !== false,
    // Eski yozuvlarda bu maydon yo'q — `undefined !== false` → true,
    // ya'ni mavjud kodekslar avvalgidek kutubxonada ko'rinadi.
    showInLibrary: doc.showInLibrary !== false,
    order: doc.order ?? 999,
  };
}

/**
 * Kolleksiya BO'SH bo'lsa `config/laws.js` dan to'ldiradi.
 * Mavjud yozuvlarga TEGMAYDI — admin o'zgartirgan ma'lumot har server
 * qayta ishga tushganda seed bilan bosib ketilmasligi kerak.
 */
async function seedLawSources() {
  const count = await LawSource.countDocuments();
  if (count > 0) return { seeded: 0, existing: count };

  const docs = TRACKED_LAWS.map((l) => ({
    code: l.code,
    name: l.name,
    nameRu: l.nameI18n?.ru || "",
    docId: l.docId || "",
    url: l.url,
    urlRu: l.urlRu || "",
    enabled: true,
    showInLibrary: l.showInLibrary !== false,
    order: l.order ?? 999,
  }));
  await LawSource.insertMany(docs, { ordered: false });
  invalidateCache();
  console.log(`⚖️  Qonunlar reyestri to'ldirildi: ${docs.length} ta hujjat`);
  return { seeded: docs.length, existing: 0 };
}

/**
 * `config/laws.js` da bor, lekin bazada YO'Q hujjatlarni qo'shadi.
 * Seed'dan farqi: kolleksiya bo'sh bo'lmasa ham ishlaydi — ya'ni kodga
 * yangi kodeks qo'shilsa, u mavjud o'rnatmalarga ham yetib boradi.
 * Admin O'CHIRGAN hujjat qaytarilmasligi uchun faqat `POST /sync`
 * orqali, qo'lda chaqiriladi.
 */
async function syncFromConfig() {
  const existing = new Set(
    (await LawSource.find().select("code").lean()).map((l) => l.code),
  );
  const missing = TRACKED_LAWS.filter((l) => !existing.has(l.code));
  if (!missing.length) return { added: 0, codes: [] };

  await LawSource.insertMany(
    missing.map((l) => ({
      code: l.code,
      name: l.name,
      nameRu: l.nameI18n?.ru || "",
      docId: l.docId || "",
      url: l.url,
    urlRu: l.urlRu || "",
      enabled: true,
      showInLibrary: l.showInLibrary !== false,
      order: l.order ?? 999,
    })),
    { ordered: false },
  );
  invalidateCache();
  return { added: missing.length, codes: missing.map((l) => l.code) };
}

/**
 * Kuzatiladigan hujjatlar ro'yxati.
 * @param {boolean} includeDisabled — o'chirilganlarini ham qaytarish
 *   (admin paneli uchun; foydalanuvchi tomonida faqat yoqilganlari)
 */
async function getLaws({ includeDisabled = false } = {}) {
  const now = Date.now();
  if (!includeDisabled && cache && now - cacheAt < CACHE_MS) return cache;

  const filter = includeDisabled ? {} : { enabled: true };
  const docs = await LawSource.find(filter).sort({ order: 1, code: 1 }).lean();
  const list = docs.map(toPlain);

  if (!includeDisabled) {
    cache = list;
    cacheAt = now;
  }
  return list;
}

/** Bitta hujjat (kod bo'yicha) */
async function getLaw(code) {
  const laws = await getLaws({ includeDisabled: true });
  return laws.find((l) => l.code === String(code).toUpperCase()) || null;
}

module.exports = {
  seedLawSources,
  syncFromConfig,
  getLaws,
  getLaw,
  invalidateCache,
};
