"use strict";
/**
 * HUJJAT / RASM TAHLILI — lokal, faqat hujjat matni va sayt qonun bazasidan.
 *
 * Natija chatda AI javobi sifatida ko'rsatiladigan Markdown matn:
 *   hujjat turi va hajmi → qisqa mazmun → hujjatdagi muhim ma'lumotlar
 *   (sanalar, summalar, foizlar, muddatlar) → e'tibor talab qiladigan
 *   bandlar → hujjatda tilga olingan moddalar → mavzuga oid qonun moddalari.
 */
const { detectType, facts, riskClauses, summary, keywords, TYPE_CODES } = require("./docFacts");
const { lawState, clip } = require("./material");
const { searchLaws } = require("../localAI/search");
const { detectSituation, pinnedDocs } = require("../localAI/situations");
const { parseArticleNumbers, parseLawCodes } = require("../articleLookup");

const T = {
  uz: {
    title: "Hujjat tahlili", imgTitle: "Rasm tahlili", type: "Hujjat turi", unknown: "aniqlanmadi",
    size: (w, p) => `Hajmi: ~${w} so'z${p ? `, ${p} sahifa` : ""}`, summary: "Qisqa mazmun",
    facts: "Hujjatdagi muhim ma'lumotlar", dates: "Sanalar", amounts: "Summalar", percents: "Foizlar", periods: "Muddatlar",
    risks: "E'tibor bering (diqqat talab qiladigan bandlar)", cited: "Hujjatda tilga olingan moddalar",
    laws: "Mavzuga oid qonun moddalari (sayt bazasidan)", art: "modda",
    empty: "Fayldan matn ajratib bo'lmadi. Hujjat skanerlangan bo'lsa, uni rasm (JPG/PNG) sifatida yuklang yoki matnni nusxalab yuboring.",
    imgNoText: "Rasmda o'qiladigan matn topilmadi.", imgSeen: "Rasmda", ocrNote: "Matn rasmdan avtomatik o'qildi — muhim joylarni asl hujjat bilan solishtiring.",
    note: "_Tahlil faqat hujjat matni va saytdagi rasmiy qonun matnlari asosida tuzildi. Bu yuridik xulosa emas — muhim qaror oldidan advokat bilan maslahatlashing._",
  },
  ru: {
    title: "Анализ документа", imgTitle: "Анализ изображения", type: "Тип документа", unknown: "не определён",
    size: (w, p) => `Объём: ~${w} слов${p ? `, ${p} стр.` : ""}`, summary: "Краткое содержание",
    facts: "Важные данные из документа", dates: "Даты", amounts: "Суммы", percents: "Проценты", periods: "Сроки",
    risks: "Обратите внимание (пункты, требующие внимания)", cited: "Статьи, упомянутые в документе",
    laws: "Статьи закона по теме (из базы сайта)", art: "статья",
    empty: "Не удалось извлечь текст из файла. Если документ отсканирован, загрузите его как изображение (JPG/PNG) или вставьте текст.",
    imgNoText: "На изображении не найден читаемый текст.", imgSeen: "На изображении", ocrNote: "Текст распознан с изображения автоматически — сверьте важные места с оригиналом.",
    note: "_Анализ составлен только по тексту документа и официальным текстам законов на сайте. Это не юридическое заключение — перед важным решением проконсультируйтесь с адвокатом._",
  },
};

function head(doc, lang, L) {
  const ru = lang === "ru" && doc.textRu;
  const name = ru ? doc.lawNameRu : doc.lawName;
  const title = (ru ? doc.titleRu : doc.title) || "";
  const num = lang === "ru" ? `${L.art} ${doc.articleNumber}` : `${doc.articleNumber}-${L.art}`;
  return `${name}, ${num}${title ? ` — ${title}` : ""}`;
}

async function relatedLaws(text, type, state, lang) {
  if (!state) return [];
  // Hujjat turi aniq bo'lsa — faqat o'sha sohaning kodekslaridan (ijara shartnomasiga
  // "ijara haqi" so'zi tufayli Mehnat kodeksining ish haqi moddalari chiqib qolmasin)
  const codes = TYPE_CODES[type?.id] || null;
  const sit = detectSituation(text.slice(0, 4000));
  if (sit && (!codes || (sit.codes || []).some((c) => codes.includes(c)))) {
    return pinnedDocs(sit, state).slice(0, 4).map((p) => state.docs[p.idx]);
  }
  const kw = keywords(text);
  if (!kw.length) return [];
  try {
    const { hits } = await searchLaws(kw.join(" "), { lang, codes, onlyCodes: !!codes, limit: 4 });
    return hits.filter((h) => h.coverage >= 0.35).map((h) => state.docs[h.docIdx]);
  } catch {
    return [];
  }
}

function citedArticles(text, state) {
  if (!state) return [];
  const out = [];
  // Hujjatda "Mehnat kodeksining 106-moddasi" kabi havolalar — har bir qator alohida
  for (const line of text.split(/\n+/)) {
    const nums = parseArticleNumbers(line);
    const codes = parseLawCodes(line);
    if (!nums.length || !codes.length) continue;
    for (const n of nums) {
      const doc = state.docs.find((d) => codes.includes(d.lawCode) && d.articleNumber === n);
      if (doc && !out.includes(doc)) out.push(doc);
    }
    if (out.length >= 6) break;
  }
  return out;
}

/**
 * @param {{ text: string, lang?: string, kind?: string, pages?: number,
 *           fileName?: string, description?: string }} p
 * @returns {Promise<{ answer: string, data: object }>}
 */
async function analyzeDocument({ text = "", lang = "uz", kind = "pdf", pages, fileName = "", description = "" }) {
  const L = lang === "ru" ? T.ru : T.uz;
  const clean = String(text).replace(/\r/g, "").trim();
  const title = `**${kind === "image" ? L.imgTitle : L.title}${fileName ? `: ${fileName}` : ""}**`;
  if (clean.length < 20) {
    const body = kind === "image" ? `${L.imgNoText}${description ? `\n\n${L.imgSeen}: ${description}` : ""}` : L.empty;
    return { answer: `${title}\n\n${body}`, data: { empty: true } };
  }

  const state = await lawState();
  const type = detectType(clean);
  const wordsCount = clean.split(/\s+/).length;
  const f = facts(clean);
  const risks = riskClauses(clean);
  const sum = summary(clean);
  const cited = citedArticles(clean, state);
  const laws = (await relatedLaws(clean, type, state, lang)).filter((d) => !cited.includes(d));

  const parts = [title, `**${L.type}:** ${type ? type[lang === "ru" ? "ru" : "uz"] : L.unknown}\n${L.size(wordsCount, pages)}`];
  if (kind === "image") parts.push(`_${L.ocrNote}_`);
  if (sum.length) parts.push(`**${L.summary}:**\n${sum.map((s) => `• ${clip(s, 300)}`).join("\n")}`);
  const factLines = [
    [L.dates, f.dates], [L.amounts, f.amounts], [L.percents, f.percents], [L.periods, f.periods],
  ].filter(([, v]) => v.length).map(([k, v]) => `• **${k}:** ${v.join("; ")}`);
  if (factLines.length) parts.push(`**${L.facts}:**\n${factLines.join("\n")}`);
  if (risks.length) parts.push(`**⚠️ ${L.risks}:**\n${risks.map((s) => `• ${clip(s, 320)}`).join("\n")}`);
  if (cited.length) parts.push(`**${L.cited}:**\n${cited.map((d) => `• ${head(d, lang, L)}`).join("\n")}`);
  if (laws.length) {
    parts.push(`**📖 ${L.laws}:**\n${laws.map((d) => `• ${head(d, lang, L)}\n  ${clip(lang === "ru" && d.textRu ? d.textRu : d.text, 260)}`).join("\n")}`);
  }
  parts.push(L.note);

  return {
    answer: parts.join("\n\n"),
    data: { type: type?.id || null, words: wordsCount, pages: pages || null, facts: f, risks: risks.length, cited: cited.length, laws: laws.length },
  };
}

module.exports = { analyzeDocument };
