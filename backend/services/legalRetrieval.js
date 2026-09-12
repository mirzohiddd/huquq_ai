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
const { findArticlesByNumber } = require("./articleLookup");
const {
  expandQuery,
  keywordSearch,
  lawCodeFilter,
} = require("./legalRetrievalQuery");

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

/* Konteks matnini yig'ish. Aniq so'ralgan modda ALOHIDA belgilanadi —
   aks holda u tasodifiy topilgan 4 ta modda orasida yo'qolib ketardi
   va model qaysi biri savolga tegishli ekanini ajrata olmasdi. */
function buildContext(chunks) {
  return chunks
    .map((r) => {
      const head = `[${r.lawName}, ${r.articleNumber}-modda${r.title ? ": " + r.title : ""}]`;
      const mark = r.direct ? " ← FOYDALANUVCHI AYNAN SHU MODDANI SO'RADI" : "";
      return `${head}${mark}\n${r.text}`;
    })
    .join("\n\n");
}

async function retrieveLegalContext(query, topK = 5, lawCode = null) {
  /* ⚠️ ANIQ MODDA QIDIRUVI VEKTOR QIDIRUVDAN OLDIN va undan MUSTAQIL.
     Sabab: "168-moddani tushuntir" savolining ma'nosi modda matniga
     yaqin emas, shuning uchun vektor qidiruv uni HECH QACHON topmasdi
     (o'lchangan: JK ichida 16, 23, 31, 163, 36 qaytardi). Embedding
     xizmati sozlanmagan bo'lsa ham bu yo'l ishlaydi — shu sabab
     `isConfigured` tekshiruvidan YUQORIDA turadi. */
  const direct = await findArticlesByNumber(query, lawCode);

  if (!isConfigured) {
    return direct.length
      ? { context: buildContext(direct), chunks: direct }
      : { context: "", chunks: [] };
  }
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

    // Aniq so'ralgan modda(lar) BIRINCHI o'rinda turadi, vektor natijalari
    // esa uning atrofidagi kontekst sifatida qo'shiladi (dublikatsiz).
    const seen = new Set(direct.map((r) => `${r.lawCode}:${r.articleNumber}`));
    let merged = direct.slice();
    for (const r of relevant) {
      const key = `${r.lawCode}:${r.articleNumber}`;
      if (!seen.has(key)) {
        seen.add(key);
        merged.push(r);
      }
    }

    // Kalit so'z bo'yicha topilganlarni qo'shamiz (dublikatsiz) — vektor
    // qidiruv mavzuni "sirpanib" o'tkazib yuborgan holat uchun zaxira.
    // ⚠️ Aniq modda topilgan bo'lsa BU ZAXIRA KERAK EMAS: kerakli matn
    // allaqachon qo'lda, kalit so'z qidiruvi esa bunday savolda ("jinoyat
    // kodeksining 168-moddasi") faqat shovqin qaytaradi — o'lchangan:
    // JK 1, 2, 3, 4 (kodeksning kirish moddalari), ya'ni savolga hech
    // qanday aloqasi yo'q matn promptga "ishonchli manba" bo'lib tushardi.
    if (!direct.length) {
      try {
        const byKeyword = await keywordSearch(query, 4, lawCode);
        for (const k of byKeyword) {
          const key = `${k.lawCode}:${k.articleNumber}`;
          if (!seen.has(key)) {
            seen.add(key);
            merged.push({ ...k, score: 0 });
          }
        }
      } catch (e) {
        console.warn("keywordSearch xato:", e.message);
      }
    }

    if (!merged.length) return { context: "", chunks: [] };

    return { context: buildContext(merged), chunks: merged };
  } catch (err) {
    // Vektor qidiruv ishlamasa (masalan indeks hali yaratilmagan) — jim
    // fallback: aniq topilgan modda bo'lsa u baribir beriladi, aks holda
    // AI o'z bilim bazasi bilan javob beradi, so'rov bloklanmaydi.
    console.warn("legalRetrieval xato:", err.message);
    return direct.length
      ? { context: buildContext(direct), chunks: direct }
      : { context: "", chunks: [] };
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
