"use strict";
/**
 * LOKAL AI — TOPILGAN MODDALARDAN JAVOB YIG'ISH.
 *
 * ⚠️ ASOSIY QOIDA: javobdagi har bir huquqiy gap — saytdagi qonun
 * matnidan olingan IQTIBOS yoki saytning tayyor savol-javobidan olingan
 * matn. Hech narsa o'ylab topilmaydi: muddat, summa, modda raqami faqat
 * moddaning o'zida bo'lsa ko'rinadi. Mos modda topilmasa — halol
 * "topilmadi" javobi qaytadi.
 *
 * Moddadan butun matn emas, SAVOLGA ENG MOS jumlalar olinadi (savol
 * o'zaklari eng ko'p uchragan jumlalar, asl tartibida). Savolda aniq
 * modda so'ralgan bo'lsa — matn to'liqroq beriladi.
 */
const { words, sentences } = require("./text");

const EXCERPT_MAX = 700;
const DIRECT_MAX = 1800;
const MIN_COVERAGE = 0.5;
const RELATIVE_CUTOFF = 0.45;

const T = {
  uz: {
    intro: "Savolingiz bo'yicha sayt bazasidagi qonun hujjatlaridan quyidagilar topildi:",
    qaTitle: "Qisqa javob",
    lawTitle: "Qonunchilikda nima deyilgan",
    article: "modda",
    more:
      "📖 Moddalarning to'liq matni saytning «Qonunchilik hujjatlari» va «Qonunlar kutubxonasi» bo'limlarida.",
    note:
      "_Javob faqat saytdagi rasmiy qonun matnlaridan olindi. Aniq vaziyatingiz bo'yicha yakuniy qaror uchun advokat bilan maslahatlashing._",
    notFound:
      "Kechirasiz, sayt bazasidagi qonun hujjatlaridan bu savolga aniq mos modda topilmadi. " +
      "Men javobni o'zimdan to'qib chiqarmayman — faqat saytdagi qonun matnlariga tayanaman.\n\n" +
      "Savolni asosiy tushunchalar bilan qayta yozib ko'ring, masalan:\n" +
      "• «mehnat shartnomasini bekor qilish»\n• «aliment undirish»\n" +
      "• «sudga da'vo arizasi berish muddati»\n• «Jinoyat-protsessual kodeksi 46-modda»",
    image:
      "Rasmdagi hujjatni tahlil qilish hozircha mavjud emas — javoblar faqat saytdagi qonun matnlari asosida beriladi. " +
      "Iltimos, savolingizni matn ko'rinishida yozing.",
  },
  ru: {
    intro: "По вашему вопросу в законодательной базе сайта найдено следующее:",
    qaTitle: "Краткий ответ",
    lawTitle: "Что говорит закон",
    article: "статья",
    more: "📖 Полный текст статей — в разделах «Законодательные акты» и «Библиотека законов» на сайте.",
    note:
      "_Ответ составлен только из официальных текстов законов, размещённых на сайте. Для окончательного решения по вашей ситуации проконсультируйтесь с адвокатом._",
    notFound:
      "К сожалению, в законодательной базе сайта не найдено статьи, точно подходящей к вопросу. " +
      "Я не придумываю ответы — опираюсь только на тексты законов на сайте.\n\n" +
      "Попробуйте переформулировать вопрос ключевыми понятиями, например:\n" +
      "• «расторжение трудового договора»\n• «взыскание алиментов»\n" +
      "• «срок подачи искового заявления»\n• «УПК статья 46»",
    image:
      "Анализ документов на изображениях пока недоступен — ответы даются только на основе текстов законов сайта. " +
      "Пожалуйста, напишите вопрос текстом.",
  },
};

const pickLang = (lang) => (lang === "ru" ? T.ru : T.uz);

/** Moddadan savolga eng mos jumlalar (`terms` — savol prefikslari). */
function excerpt(text, terms, max) {
  const parts = sentences(text);
  if (!parts.length) return "";
  const scored = parts.map((s, i) => {
    const ws = words(s);
    const n = terms.filter((p) => ws.some((w) => w.startsWith(p))).length;
    return { s, i, n };
  });
  const best = scored
    .filter((x) => x.n > 0)
    .sort((a, b) => b.n - a.n || a.i - b.i)
    .slice(0, 3)
    .sort((a, b) => a.i - b.i);
  const chosen = best.length ? best : scored.slice(0, 2);

  let out = "";
  for (const { s } of chosen) {
    if (out.length + s.length > max) {
      if (!out) out = `${s.slice(0, max)}…`;
      break;
    }
    out += (out ? " … " : "") + s;
  }
  return out;
}

function renderDoc(doc, n, lang, terms, direct, L) {
  const ru = lang === "ru" && doc.textRu;
  const name = ru ? doc.lawNameRu : doc.lawName;
  const title = (ru ? doc.titleRu : doc.title) || "";
  const body = ru ? doc.textRu : doc.text;
  const text = direct
    ? body.length > DIRECT_MAX
      ? `${body.slice(0, DIRECT_MAX)}…`
      : body
    : excerpt(body, terms, EXCERPT_MAX);
  const num = lang === "ru" ? `${L.article} ${doc.articleNumber}` : `${doc.articleNumber}-${L.article}`;
  const head = `**${n}. ${name}, ${num}${title ? ` — ${title}` : ""}**`;
  return `${head}\n${text}`;
}

/**
 * @param {{ hits: object[], state: object, terms: string[], qa: object|null,
 *           lang: string, minCoverage?: number, minMatched?: number }} p
 * @returns {{ answer: string, found: boolean }}
 */
function composeAnswer({ hits, state, terms, qa, lang, minCoverage = MIN_COVERAGE, minMatched = 1 }) {
  const L = pickLang(lang);
  const top = hits[0]?.score || 0;
  let good = hits.filter(
    (h) =>
      h.direct ||
      (h.coverage >= minCoverage && h.matched >= minMatched && h.score >= top * RELATIVE_CUTOFF),
  );

  // Tayyor savol-javobning qonun havolalari birinchi o'ringa qo'yiladi
  if (qa) {
    const refIdx = qa.q.refs
      .map((r) => state.docs.findIndex((d) => d.lawCode === r.code && d.articleNumber === String(r.article)))
      .filter((i) => i >= 0)
      .slice(0, 2);
    const rest = good.filter((h) => !refIdx.includes(h.docIdx));
    good = [...refIdx.map((i) => ({ docIdx: i, score: top, coverage: 1 })), ...rest];
  }
  good = good.slice(0, 3);

  if (!good.length && !qa) return { answer: L.notFound, found: false };

  const parts = [L.intro];
  if (qa) {
    const pick = (v) => (lang === "ru" ? v.ru : v.uz);
    parts.push(`**${L.qaTitle}**\n${pick(qa.q.short)}\n\n${pick(qa.q.body).join("\n\n")}`);
  }
  if (good.length) {
    parts.push(`**${L.lawTitle}:**`);
    good.forEach((h, i) => {
      parts.push(renderDoc(state.docs[h.docIdx], i + 1, lang, terms, h.direct, L));
    });
  }
  parts.push(L.more, L.note);
  return { answer: parts.join("\n\n"), found: true };
}

module.exports = { composeAnswer, localText: pickLang };
