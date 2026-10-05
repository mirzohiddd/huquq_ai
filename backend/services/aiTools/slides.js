"use strict";
/**
 * AI SLAYD GENERATOR — mavzu, sinf, til va slayd soni bo'yicha taqdimot.
 *
 * Tuzilma: sarlavha → reja → mazmun slaydlari (har biri bitta dars
 * mavzusidan: qisqa tushuntirish, asosiy fikrlar, hayotiy misol, qonun
 * havolasi) → "Qonun nima deydi" (rasmiy matndan iqtibos) → xulosa →
 * muhokama savollari. Hammasi tekshirilgan darslardan (material.js).
 */
const { pickMaterial, lawState, resolveRefs, clip, lead } = require("./material");
const { LEVELS, levelOf, gradeLabel, clampInt, localize } = require("./audience");

const T = {
  uz: { agenda: "Dars rejasi", law: "Qonun nima deydi", summary: "Xulosa", questions: "Muhokama uchun savollar", example: "Hayotiy misol", source: "Manba: HuquqTech darslari va O'zbekiston Respublikasi qonunchiligi (lex.uz)", ask: (h) => `«${h}» deganda nimani tushunasiz?`, why: (h) => `Nima uchun «${h}» har bir fuqaro uchun muhim?`, act: "Bunday vaziyatda o'zingiz qanday yo'l tutgan bo'lardingiz?" },
  ru: { agenda: "План урока", law: "Что говорит закон", summary: "Выводы", questions: "Вопросы для обсуждения", example: "Пример из жизни", source: "Источник: уроки HuquqTech и законодательство Республики Узбекистан (lex.uz)", ask: (h) => `Что вы понимаете под «${h}»?`, why: (h) => `Почему «${h}» важно для каждого гражданина?`, act: "Как бы вы поступили в такой ситуации?" },
};

function contentSlide(topic, level, state) {
  const cfg = LEVELS[level];
  const refs = resolveRefs(topic.lawRefs, state, "uz", 2);
  return {
    type: "content",
    title: topic.heading,
    text: lead(topic.text, level === "junior" ? 180 : 260),
    bullets: (topic.keyPoints || []).slice(0, cfg.bullets).map((k) => clip(k, 140)),
    note: topic.example ? clip(topic.example, level === "junior" ? 200 : 260) : "",
    refs: refs.map((r) => ({ code: r.code, article: r.article, law: r.law, lawTitle: r.title })),
  };
}

/**
 * @param {{ topic: string, grade?: string, lang?: string, count?: number }} p
 */
async function buildSlides({ topic, grade = "9", lang = "uz", count = 10 }) {
  const n = clampInt(count, 5, 20, 10);
  const level = levelOf(grade);
  const withLaw = LEVELS[level].quote && n >= 7;
  const contentCount = n - 4 - (withLaw ? 1 : 0);
  const mat = pickMaterial(topic, contentCount + 1); // +1 — qonun slaydi chiqmasa o'rniga
  if (!mat) return null;

  const state = await lawState();
  const X = T.uz;
  const contents = mat.topics.slice(0, contentCount).map((t) => contentSlide(t, level, state));
  const slides = [
    { type: "title", title: clip(topic, 90), subtitle: mat.lesson },
    { type: "agenda", title: X.agenda, items: contents.map((c) => c.title) },
    ...contents,
  ];

  if (withLaw) {
    const seen = new Set();
    const refs = mat.topics.flatMap((t) => t.lawRefs).filter((r) => {
      const k = `${r.code}:${r.article}`;
      return seen.has(k) ? false : seen.add(k);
    });
    const quotes = resolveRefs(refs, state, lang, 2).filter((r) => r.text);
    if (quotes.length) {
      slides.push({
        type: "law",
        title: X.law,
        quotes: quotes.map((r) => ({ code: r.code, article: r.article, law: r.law, lawTitle: r.title, quote: clip(r.text, 360) })),
      });
    }
  }

  const keyPoints = mat.topics.slice(0, contentCount).map((t) => t.keyPoints?.[0]).filter(Boolean);
  slides.push({ type: "summary", title: X.summary, bullets: keyPoints.slice(0, 5).map((k) => clip(k, 150)) });
  const heads = contents.map((c) => c.title);
  slides.push({
    type: "questions",
    title: X.questions,
    items: [X.ask(heads[0]), heads[1] ? X.why(heads[1]) : X.why(heads[0]), X.act].filter(Boolean),
  });

  // So'ralgan son aniq bajarilsin (qonun slaydi topilmagan bo'lsa ham)
  let next = contents.length;
  while (slides.length < n && mat.topics[next]) {
    slides.splice(slides.length - 2, 0, contentSlide(mat.topics[next++], level, state));
  }
  slides[1].items = slides.filter((s) => s.type === "content").map((s) => s.title);

  const deck = {
    title: clip(topic, 90),
    lesson: mat.lesson,
    grade: String(grade),
    gradeLabel: gradeLabel(grade, "uz"),
    lang,
    source: X.source,
    labels: { example: X.example },
    slides: slides.slice(0, n),
  };
  if (lang !== "ru") return { ...deck, partial: false };

  // Ruscha: kontent tarjimasi + ruscha UI yorliqlari (qonun matni rasmiy rus tilida)
  const R = T.ru;
  const { data, partial } = await localize(deck, "ru");
  data.gradeLabel = gradeLabel(grade, "ru");
  data.source = R.source;
  data.labels = { example: R.example };
  for (const s of data.slides) {
    if (s.type === "agenda") s.title = R.agenda;
    if (s.type === "law") s.title = R.law;
    if (s.type === "summary") s.title = R.summary;
    if (s.type === "questions") s.title = R.questions;
    for (const r of s.refs || []) r.law = resolveRefs([r], state, "ru", 1)[0]?.law || r.law;
  }
  return { ...data, partial };
}

module.exports = { buildSlides };
