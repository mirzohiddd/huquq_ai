"use strict";
/**
 * LOKAL AI — DARS MAVZUSIDAN JAVOB (lessonTopics.js, intents.js).
 *
 * Javobning har bir qismi sayt darsidan olinadi: tushuntirish, hayotiy
 * misol, asosiy fikrlar, ogohlantirish. Qonun iqtiboslari — mavzuning
 * bazadan tekshirilgan `lawRefs` havolalari (jonli `LegalChunk` matni).
 * Hech narsa o'ylab topilmaydi.
 */
const { docHead, localText } = require("./compose");
const { pinText } = require("./composeSituation");

const TEXT_MAX = 1100;
const MAX_REFS = 3;

const T = {
  uz: { example: "Misol", points: "Asosiy fikrlar", lesson: "Mavzu saytdagi «Darslar» bo'limidagi dars asosida", related: "Bog'liq mavzular" },
  ru: { example: "Пример", points: "Главное", lesson: "Ответ основан на уроке из раздела «Уроки»", related: "Связанные темы" },
};

/** Matnni xatboshi chegarasida qisqartirish. */
function trimText(text = "") {
  const paras = String(text).split(/\n{2,}/).map((p) => p.trim()).filter(Boolean);
  let out = "";
  for (const p of paras) {
    if (out && out.length + p.length > TEXT_MAX) break;
    out += (out ? "\n\n" : "") + p;
  }
  return out.length > TEXT_MAX + 400 ? `${out.slice(0, TEXT_MAX).replace(/\s+\S*$/, "")}…` : out;
}

/**
 * @param {{ topic: object, state: object, lang: string, related?: object[] }} p
 */
function composeTopic({ topic, state, lang, related = [] }) {
  const L = localText(lang);
  const X = lang === "ru" ? T.ru : T.uz;
  const parts = [`**${topic.heading}**\n_${X.lesson}: «${topic.lesson}»_`, trimText(topic.text)];
  if (topic.example) parts.push(`**${X.example}:** ${topic.example}`);
  if (topic.keyPoints?.length) parts.push(`**${X.points}:**\n${topic.keyPoints.map((k) => `• ${k}`).join("\n")}`);
  if (topic.warning) parts.push(`⚠️ ${topic.warning}`);

  const docs = topic.lawRefs
    .map((r) => state.docs.findIndex((d) => d.lawCode === r.code && d.articleNumber === String(r.article)))
    .filter((i) => i >= 0)
    .slice(0, MAX_REFS);
  if (docs.length) {
    parts.push(`**${L.lawTitle}:**`);
    docs.forEach((d, i) => parts.push(`${docHead(state.docs[d], i + 1, lang, L)}\n${pinText(state.docs[d], lang)}`));
  }
  if (related.length) parts.push(`**${X.related}:** ${related.map((t) => `«${t.heading}»`).join(", ")}`);
  parts.push(L.more, L.note);
  return { answer: parts.join("\n\n"), found: true };
}

module.exports = { composeTopic };
