"use strict";
/**
 * SEMANTIK (VEKTOR) QIDIRUV — yengil va chidamli variant (2026-11-14).
 *
 * `legalRetrieval.js` dagi funksiya chat uchun ikki sabab bilan yaroqsiz edi:
 *   1. Mistral embedding ba'zan 429 ("Not enough capacity") qaytaradi —
 *      bitta urinish yiqilsa semantik qidiruv JIM o'chib, faqat so'zma-so'z
 *      qidiruv qolardi (o'lchangan: aynan shikoyat qilingan savolda);
 *   2. u har so'rovda og'ir hujjatlarni (matn + embedding yonida) o'qiydi va
 *      regex bilan butun kolleksiyani skanerlaydi.
 * Bu yerda: embedding uchun qayta urinish + xotira keshi, bazadan esa faqat
 * (kodeks, modda raqami, ball) olinadi — matn xotiradagi indeksdan.
 * `legalRetrieval.js` ga TEGILMADI (uni darslar amaliyoti ishlatadi).
 */
const { LegalChunk } = require("../../models");
const { embedText, isConfigured } = require("../embeddings");
const { VECTOR_INDEX_NAME } = require("../legalRetrieval");

const RETRIES = 2;
const RETRY_DELAY_MS = 350;
const cache = new Map(); // so'rov → vektor (200 ta)

const sleep = (ms) => new Promise((r) => setTimeout(r, ms));

async function embed(query) {
  const key = query.toLowerCase().slice(0, 600);
  if (cache.has(key)) return cache.get(key);
  let lastErr;
  for (let i = 0; i <= RETRIES; i++) {
    try {
      const vec = await embedText(query);
      cache.set(key, vec);
      if (cache.size > 200) cache.delete(cache.keys().next().value);
      return vec;
    } catch (err) {
      lastErr = err;
      if (!/\(429\)|\(5\d\d\)|fetch failed|network/i.test(err.message)) break;
      await sleep(RETRY_DELAY_MS * (i + 1));
    }
  }
  throw lastErr;
}

/**
 * @param {string} query — NORMALLASHTIRILGAN savol (rag/understand.js)
 * @param {{ limit?: number, timeoutMs?: number }} opts
 * @returns {Promise<{ hits: { lawCode, articleNumber, score }[], error?: string }>}
 *   Hech qachon xato tashlamaydi — yiqilsa `error` bilan bo'sh ro'yxat.
 */
async function vectorSearch(query, { limit = 8, timeoutMs = 3000 } = {}) {
  if (!isConfigured) return { hits: [], error: "MISTRAL_API_KEY yo'q" };
  const run = (async () => {
    const queryVector = await embed(query);
    return LegalChunk.aggregate([
      { $vectorSearch: { index: VECTOR_INDEX_NAME, path: "embedding", queryVector, numCandidates: 200, limit } },
      { $project: { _id: 0, lawCode: 1, articleNumber: 1, score: { $meta: "vectorSearchScore" } } },
    ]);
  })();
  const timer = new Promise((_, rej) => setTimeout(() => rej(new Error("vektor qidiruv timeout")), timeoutMs));
  try {
    const rows = await Promise.race([run, timer]);
    return { hits: rows.map((r) => ({ lawCode: r.lawCode, articleNumber: String(r.articleNumber), score: r.score })) };
  } catch (err) {
    run.catch(() => {});
    return { hits: [], error: String(err.message).slice(0, 120) };
  }
}

module.exports = { vectorSearch };
