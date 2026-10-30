"use strict";
/**
 * "TUSHUNTIRIB BER" — dars yoki vaziyat ichidagi AYNAN o'sha savol bo'yicha.
 *
 * AI'ga dars mavzusidagi tekshirilgan savol (`ask`) yuboriladi, javob saytning odatdagi zanjiridan keladi (`getLegalAdvice`:
 * lokal AI → tarifga qarab Gemini/OpenAI, faqat Lex.uz bazasidagi moddalar).
 * Qo'shimcha ravishda darsning tekshirilgan moddalari matni beriladi.
 */
const content = require("./content");
const { attachLawQuotes } = require("../lessonQuotes");

function targetOf({ kind, id, step }) {
  if (kind === "lesson") {
    const l = content.lessonById.get(String(id));
    if (!l) return null;
    const right = l.choice.options.find((o) => o.ok);
    return { ask: l.ask, title: l.title, right: right.t, why: right.why, refs: l.refs };
  }
  const s = content.situationById.get(String(id));
  const st = s?.steps[Number(step) || 0];
  if (!st) return null;
  const right = st.options.find((o) => o.ok);
  return { ask: s.ask, title: s.title, right: right.t, why: right.why, refs: s.refs };
}

async function quotesOf(refs) {
  const holder = { sections: [{ lawRefs: refs }] };
  try {
    await attachLawQuotes(holder);
  } catch (err) {
    console.error("Mini app iqtiboslari:", err.message);
  }
  return (holder.sections[0].lawQuotes || []).map((q) => ({
    code: q.code,
    article: q.articleNumber,
    title: q.title,
    text: q.text.length > 420 ? `${q.text.slice(0, 420).trim()}…` : q.text,
  }));
}

const { MiniExplain } = require("../../models/miniApp");
const WAIT_MS = 12000; // foydalanuvchi shuncha kutadi, AI esa fonda davom etib keshga yozadi
const pending = new Map(); // bir savolga parallel so'rovlar bitta AI chaqiruviga birlashadi

async function generate(key, ask, lang) {
  const { getLegalAdvice } = require("../legalAI"); // og'ir modul — faqat kerak bo'lganda
  let answer = "";
  try {
    const r = await getLegalAdvice(ask, [], null, "image/jpeg", lang);
    answer = String(r?.answer || "");
  } catch (err) {
    console.error("Mini app tushuntirish:", err.message);
    return ""; // tarmoq/provayder xatosi keshlanmaydi — keyingi safar qayta urinadi
  }
  if (/topilmadi|не найден/i.test(answer.slice(0, 200))) answer = "";
  // Bo'sh natija ham keshlanadi: bazada mos modda yo'q bo'lsa, har safar AI kutilmaydi
  // (oynada baribir to'g'ri javob, izoh va darsning qonun iqtiboslari ko'rinadi)
  await MiniExplain.updateOne({ key }, { $set: { answer, at: new Date() } }, { upsert: true }).catch(() => {});
  return answer;
}

/** @returns {Promise<{ right, why, answer, quotes, pending? } | null>} */
async function explain(params, lang = "uz") {
  const t = targetOf(params);
  if (!t) return null;
  const key = `${params.kind}:${params.id}:${lang}`; // `ask` dars/vaziyat bo'yicha bitta — qadamga bog'liq emas
  const quotes = await quotesOf(t.refs);
  const base = { right: t.right, why: t.why, quotes };
  const cached = await MiniExplain.findOne({ key }).lean().catch(() => null);
  if (cached) return { ...base, answer: cached.answer || "" };
  /* ⚠️ Hikoya matni so'rov sifatida YUBORILMAYDI: sinovda u mavzudan chetga
     chiqardi (tuhmat haqidagi vaziyatga "qarz" javobi). Har dars/vaziyatda
     AI aniq taniydigan, qo'lda tanlangan va tekshirilgan savol bor (`ask`). */
  if (!pending.has(key)) pending.set(key, generate(key, t.ask, lang).finally(() => pending.delete(key)));
  const answer = await Promise.race([pending.get(key), new Promise((r) => setTimeout(() => r(null), WAIT_MS))]);
  // Vaqt yetmasa — darsning o'z izohi darhol, AI javobi fonda keshga tushadi
  return answer === null ? { ...base, answer: "", pending: true } : { ...base, answer };
}

module.exports = { explain, quotesOf };
