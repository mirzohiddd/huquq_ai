"use strict";
/**
 * YUKLANGAN HUJJAT BO'YICHA DAVOM SAVOLLARI (2026-10-14).
 *
 * Avval hujjat `/ai-tools/analyze` da tahlil qilinardi-yu, matni hech
 * qayerda saqlanmasdi: keyingi "shu hujjatdagi testga javob ber" xabari
 * oddiy chatga borib, "bazada topilmadi" javobini olardi. Endi hujjat
 * matni suhbatga (`Chat.docContext`) bog'lanadi va hujjatga ishora qilgan
 * savollarga shu matn asosida javob beriladi:
 *   • test javoblari / javoblar varaqasi → docQA.answerSheet
 *   • qisqa mazmun                        → docFacts.summary
 *   • hujjatdagi aniq joy                 → hujjat bo'laklari bo'yicha qidiruv
 * Hujjatga aloqasi yo'q savol oddiy huquqiy AI'ga o'tadi.
 */
const { answerSheet, parseQuestions, isTestLike } = require("./docQA");
const { summary } = require("./docFacts");
const { queryPrefixes } = require("../localAI/text");

const MAX_STORE = 60000;
const FRESH_MS = 6 * 60 * 60 * 1000;

const DOC_REF = /hujjat|fayl|varaq|test|savol(lar)?(ni|ga|ning)|javob(lar)?(ni|ini|i)\b|yech|tahlil|shu(ni|nda|ning|ndagi)\b|ichida|matn(i|da|dagi)|документ|файл|тест|ответ|вопрос|в нем|в нём|реши|текст/i;
const SHEET = /javob(lar)?\s*(varaq|kalit)|javoblar(ini|ni)?\b|yech(ib|ish|ing|ib ber)|to.g.ri javob|test(ni|ning)?\s*javob|ответ(ы|ов)|реши|ключ/i;
const SUMMARY = /xulosa|mazmun|qisqacha|nima haqida|asosiy (fikr|g.oya)|о ч[её]м|кратк|содержан|резюме/i;

/** Tahlildan keyin suhbatga yoziladi (routes/aiTools.js). */
function attachDoc(chat, extracted, fileName) {
  const text = String(extracted?.text || "").slice(0, MAX_STORE);
  if (!text.trim()) return;
  chat.docContext = { name: fileName || "", text, at: new Date() };
}

function searchInDoc(text, msg, lang) {
  const own = queryPrefixes(msg).filter((p) => p.length >= 3);
  if (!own.length) return null;
  const chunks = String(text).split(/\n{2,}|(?<=[.!?])\s+(?=[A-ZА-ЯЎҚҒҲ0-9])/).map((c) => c.trim()).filter((c) => c.length > 25);
  const ranked = chunks
    .map((c) => {
      const set = new Set(queryPrefixes(c));
      return { c, s: own.filter((p) => set.has(p)).length / own.length };
    })
    .filter((x) => x.s >= 0.34)
    .sort((a, b) => b.s - a.s)
    .slice(0, 3);
  if (!ranked.length) return null;
  const head = lang === "ru" ? "**В документе по вашему вопросу сказано:**" : "**Hujjatda savolingizga oid joylar:**";
  return [head, ...ranked.map((r) => `> ${r.c.slice(0, 600)}`)].join("\n\n");
}

/**
 * @returns {Promise<string|null>} hujjatga oid javob yoki null (oddiy AI'ga o'tadi)
 */
/** Savol yuklangan (yangi) hujjatga ishora qiladimi — services/llm/docLlm.js uchun. */
function isDocQuestion(chat, msg) {
  const ctx = chat?.docContext;
  if (!ctx?.text || !DOC_REF.test(msg)) return false;
  return !(ctx.at && Date.now() - new Date(ctx.at).getTime() > FRESH_MS);
}

async function docAnswer(chat, msg, lang = "uz") {
  const ctx = chat?.docContext;
  if (!ctx?.text || !DOC_REF.test(msg)) return null;
  if (ctx.at && Date.now() - new Date(ctx.at).getTime() > FRESH_MS) return null;
  const ru = lang === "ru";

  if (SHEET.test(msg)) {
    const sheet = await answerSheet(ctx.text, ctx.name, lang);
    if (sheet) return sheet;
    return ru
      ? `В документе «${ctx.name}» не найдено пронумерованных тестовых вопросов с вариантами (1. … A) … B) …). Если это не тест — задайте вопрос по содержанию документа.`
      : `«${ctx.name}» hujjatida raqamlangan test savollari (1. … A) … B) …) topilmadi. Bu test bo'lmasa — hujjat mazmuni bo'yicha savol bering, masalan: «hujjatda muddat qancha deyilgan?»`;
  }
  if (SUMMARY.test(msg)) {
    // Test hujjati — gaplar emas, savollar soni va mavzulari
    const qs = parseQuestions(ctx.text);
    if (qs.length >= 3 && isTestLike(qs)) {
      const head = ru ? `**«${ctx.name}» — тест из ${qs.length} вопросов.** Темы вопросов:` : `**«${ctx.name}» — ${qs.length} ta savoldan iborat test.** Savollar mavzusi:`;
      const tail = ru ? "_Чтобы получить ответы, напишите «лист ответов»._" : "_Javoblarni olish uchun «javoblar varaqasini ber» deb yozing._";
      return [head, qs.slice(0, 8).map((q) => `${q.n}. ${q.q}`).join("\n"), tail].join("\n\n");
    }
    const lines = summary(ctx.text, 5);
    if (lines?.length) return [`**${ru ? "Краткое содержание" : "Qisqa mazmun"} — ${ctx.name}**`, ...lines.map((l) => `• ${l}`)].join("\n");
  }
  return searchInDoc(ctx.text, msg, lang);
}

module.exports = { attachDoc, docAnswer, isDocQuestion };
