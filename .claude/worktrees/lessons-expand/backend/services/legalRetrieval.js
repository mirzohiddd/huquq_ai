"use strict";
/**
 * RAG qidiruvi — foydalanuvchi savoliga eng mos qonun moddalarini
 * MongoDB Atlas Vector Search orqali topadi. Natija legalAI.js'da
 * system promptga "tekshirilgan manba" sifatida qo'shiladi — AI faqat
 * shu asosda javob berishga yo'naltiriladi, ichki qidiruv jarayoni esa
 * foydalanuvchiga hech qachon ko'rsatilmaydi (buni prompt qoidasi
 * ta'minlaydi, bu yerda emas).
 */
const { LegalChunk } = require("../models");
const { embedText, isConfigured, EMBEDDING_DIMENSIONS } = require("./embeddings");

const VECTOR_INDEX_NAME = "legal_vector_index";
const MIN_SCORE = 0.3; // shu balldan pastini "aloqasiz" deb hisoblaymiz

// `lawCode` (ixtiyoriy) berilsa — vektor qidiruv shu kodeks doirasida
// ISHLAYDI (masalan "MK", "OK"). Buning sababi: bir xil modda raqami
// (masalan "107-modda") HAR BIR kodeksda mavjud va butunlay boshqa
// mavzuga tegishli bo'ladi (masalan 107-modda Mehnat kodeksida mehnat
// shartnomasi haqida, Oila kodeksida esa aliment haqida) — savol
// mavzusi aniq bo'lsa (legalAI.js'dagi kategoriya aniqlanishi orqali),
// qidiruvni shu kodeksga cheklash boshqa kodeksdan chalkash/aloqasiz
// modda kelib qolishining oldini oladi. Kategoriya noaniq bo'lsa,
// `lawCode` berilmaydi va barcha kodekslar bo'yicha qidiriladi (avvalgi
// xatti-harakat saqlanadi).
/* ═══════════════ SO'ZLASHUV → HUQUQIY ATAMA ═══════════════
   Foydalanuvchi savolni kundalik tilda yozadi ("ajrim bo'lsa bola kimda
   qoladi"), qonun matni esa rasmiy atamalar bilan yozilgan ("nikohdan
   ajratish", "bolalar kim bilan yashashi"). Vektor qidiruv shu farq
   tufayli mutlaqo boshqa moddalarni qaytarishi mumkin — haqiqiy holat:
   "ajrim, bola 12 yoshda, kimda qoladi" so'roviga farzandlikka olish va
   aliment MIQDORI haqidagi moddalar chiqdi, kerakli 44-modda esa
   ("bolalari kim bilan yashashi") umuman tushmadi.

   Yechim: so'rovga rasmiy atamalar QO'SHILADI (almashtirilmaydi —
   asl matn ham qoladi), shunda embedding to'g'ri yo'nalishga suriladi. */
const TERM_HINTS = [
  { re: /ajrim|ajrash|ajral|развод/i, add: "nikohdan ajratish, nikohni bekor qilish" },
  { re: /bola.*(kimda|kim bilan|qoladi|qolad)|kimda qoladi/i, add: "bolalar kim bilan yashashi, bolaning turar joyi, sud hal qiladigan masalalar" },
  { re: /aliment|nafaqa/i, add: "taʼminot berish, aliment undirish" },
  { re: /ishdan (bo.shat|hayda|chiqar)|уволил/i, add: "mehnat shartnomasini bekor qilish, ishga tiklash" },
  { re: /ish haqi|maosh|oylik/i, add: "mehnatga haq toʻlash, ish haqini toʻlash muddati" },
  { re: /ta.til|otpusk/i, add: "mehnat taʼtili, taʼtil berish tartibi" },
  { re: /meros|наслед/i, add: "merosni qabul qilish, merosxoʻrlar navbati, vasiyatnoma" },
  { re: /uy|kvartira|ko.chmas mulk/i, add: "koʻchmas mulkka boʻlgan huquq, davlat roʻyxatidan oʻtkazish" },
  { re: /tovar|mahsulot|qaytar/i, add: "isteʼmolchi huquqlari, sifatsiz tovar, tovarni almashtirish" },
  { re: /shartnoma/i, add: "shartnoma tuzish, shartnomani bekor qilish" },
  { re: /\bur(di|ib|yapti)|kaltakla|zo.rla/i, add: "shaxsga qarshi jinoyat, jismoniy shikast yetkazish" },
];

function expandQuery(query = "") {
  const extras = TERM_HINTS.filter((h) => h.re.test(query))
    .map((h) => h.add)
    .join(", ");
  return extras ? `${query}. ${extras}` : query;
}

/* ── Kalit so'z bo'yicha zaxira qidiruv ──
   Vektor qidiruv "sirpanib ketgan" holatda ham to'g'ri modda topilishi
   uchun: savoldagi eng ma'noli so'zlar bo'yicha matn ichidan qidiramiz.
   Bu vektor natijalarini ALMASHTIRMAYDI, ularga qo'shiladi. */
const STOP_WORDS = new Set([
  "agar","bo'lsa","bolsa","hali","qanday","qilib","uchun","kerak","mumkin",
  "nima","kim","qaysi","yoki","ham","bilan","meni","mening","men","siz",
  "bu","shu","va","the","and","что","как","если",
]);

/* `lawCode` bitta satr ham, MASSIV ham bo'lishi mumkin.

   Massiv kerak bo'ldi, chunki bitta mavzu bir nechta kodeksga tegishli
   bo'lishi mumkin: fuqarolik savollari FK (umumiy qoidalar) va FK2
   (shartnoma turlari, meros) o'rtasida taqsimlangan, ko'chmas mulk esa
   YK/UJK/SHK ga. Avval faqat bitta kod berilardi va savolning yarmi
   qidiruvdan tashqarida qolardi. */
function lawCodeFilter(lawCode) {
  if (!lawCode) return null;
  const list = (Array.isArray(lawCode) ? lawCode : [lawCode]).filter(Boolean);
  if (!list.length) return null;
  return list.length === 1 ? { $eq: list[0] } : { $in: list };
}

async function keywordSearch(query, topK, lawCode) {
  const words = String(query)
    .toLowerCase()
    .replace(/[^\p{L}\p{N}\s']/gu, " ")
    .split(/\s+/)
    .filter((w) => w.length >= 5 && !STOP_WORDS.has(w))
    .slice(0, 6);
  if (!words.length) return [];

  // O'zbek apostrof variantlari bir-biriga moslashtiriladi
  const patterns = words.map(
    (w) => new RegExp(w.replace(/['ʻʼ`]/g, "['ʻʼ`]?").slice(0, 24), "i"),
  );
  const filter = { $or: [{ title: { $in: patterns } }, { text: { $in: patterns } }] };
  const kwCodeFilter = lawCodeFilter(lawCode);
  if (kwCodeFilter) filter.lawCode = kwCodeFilter;

  return LegalChunk.find(filter)
    .select("lawCode lawName articleNumber title text sourceUrl")
    .limit(topK)
    .lean();
}

async function retrieveLegalContext(query, topK = 5, lawCode = null) {
  if (!isConfigured) return { context: "", chunks: [] };
  try {
    const queryVector = await embedText(expandQuery(query));
    const vectorSearchStage = {
      index: VECTOR_INDEX_NAME,
      path: "embedding",
      queryVector,
      numCandidates: 150,
      limit: topK,
    };
    const codeFilter = lawCodeFilter(lawCode);
    if (codeFilter) {
      vectorSearchStage.filter = { lawCode: codeFilter };
    }
    const results = await LegalChunk.aggregate([
      { $vectorSearch: vectorSearchStage },
      {
        $project: {
          _id: 0,
          lawCode: 1,
          lawName: 1,
          articleNumber: 1,
          title: 1,
          text: 1,
          sourceUrl: 1,
          score: { $meta: "vectorSearchScore" },
        },
      },
    ]);

    const relevant = results.filter((r) => r.score >= MIN_SCORE);

    // Kalit so'z bo'yicha topilganlarni qo'shamiz (dublikatsiz) — vektor
    // qidiruv mavzuni "sirpanib" o'tkazib yuborgan holat uchun zaxira.
    let merged = relevant;
    try {
      const byKeyword = await keywordSearch(query, 4, lawCode);
      const seen = new Set(relevant.map((r) => `${r.lawCode}:${r.articleNumber}`));
      for (const k of byKeyword) {
        const key = `${k.lawCode}:${k.articleNumber}`;
        if (!seen.has(key)) {
          seen.add(key);
          merged = merged.concat({ ...k, score: 0 });
        }
      }
    } catch (e) {
      console.warn("keywordSearch xato:", e.message);
    }

    if (!merged.length) return { context: "", chunks: [] };

    const context = merged
      .map(
        (r) =>
          `[${r.lawName}, ${r.articleNumber}-modda${r.title ? ": " + r.title : ""}]\n${r.text}`,
      )
      .join("\n\n");

    return { context, chunks: merged };
  } catch (err) {
    // Vektor qidiruv ishlamasa (masalan indeks hali yaratilmagan) — jim
    // fallback: AI o'z bilim bazasi bilan javob beradi, so'rov bloklanmaydi.
    console.warn("legalRetrieval xato:", err.message);
    return { context: "", chunks: [] };
  }
}

/** Indeks mavjud emasligini birinchi ishga tushirishda yaratadi (idempotent). */
async function ensureVectorIndex() {
  try {
    const existing = await LegalChunk.collection.listSearchIndexes(VECTOR_INDEX_NAME).toArray();
    if (existing.length) return;
  } catch {
    // listSearchIndexes ishlamasa ham, createSearchIndex quyida sinab ko'radi
  }
  try {
    await LegalChunk.collection.createSearchIndex({
      name: VECTOR_INDEX_NAME,
      type: "vectorSearch",
      definition: {
        fields: [
          {
            type: "vector",
            path: "embedding",
            numDimensions: EMBEDDING_DIMENSIONS,
            similarity: "cosine",
          },
          { type: "filter", path: "lawCode" },
        ],
      },
    });
    console.log(`✅ ${VECTOR_INDEX_NAME} vektor indeksi yaratildi`);
  } catch (err) {
    console.warn(`⚠️  Vektor indeks yaratilmadi (${err.message}) — RAG qidiruvi ishlamasligi mumkin`);
  }
}

module.exports = { retrieveLegalContext, ensureVectorIndex, VECTOR_INDEX_NAME };
