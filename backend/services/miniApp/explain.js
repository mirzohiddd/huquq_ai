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

/** @returns {Promise<{ answer: string, quotes: object[] } | null>} */
async function explain(params, lang = "uz") {
  const t = targetOf(params);
  if (!t) return null;
  const { getLegalAdvice } = require("../legalAI"); // og'ir modul — faqat kerak bo'lganda
  /* ⚠️ Hikoya matni so'rov sifatida YUBORILMAYDI: sinovda u mavzudan chetga
     chiqardi (tuhmat haqidagi vaziyatga "qarz" javobi). Har dars/vaziyatda
     AI aniq taniydigan, qo'lda tanlangan va tekshirilgan savol bor (`ask`). */
  const msg = t.ask;
  let answer = "";
  try {
    const r = await getLegalAdvice(msg, [], null, "image/jpeg", lang);
    answer = String(r?.answer || "");
  } catch (err) {
    console.error("Mini app tushuntirish:", err.message);
  }
  // AI topa olmasa ham foydalanuvchi bo'sh qolmasin — darsning o'z izohi
  if (!answer || /topilmadi|не найден/i.test(answer.slice(0, 200))) answer = "";
  // Darsning o'z izohi har doim birinchi — so'ngra AI'ning kengroq tushuntirishi
  return { right: t.right, why: t.why, answer, quotes: await quotesOf(t.refs) };
}

module.exports = { explain, quotesOf };
