"use strict";
/**
 * O'RGANISH REJIMI — O'ZINI TEKSHIRISH SAVOLLARI.
 *
 * ⚠️ Savollar AI'dan so'ralmaydi va javoblar to'qilmaydi. Ikki tur:
 *
 *  1) "article" — moddaning RASMIY matnidan parcha beriladi, to'g'ri javob
 *     — shu moddaning nomi, qolgan variantlar — shu hujjatning boshqa
 *     moddalari nomlari. Ya'ni to'g'ri javob har doim manbaning o'zi.
 *  2) "case" (mini-vaziyat) — darslardagi "Hayotdan misol" matni; to'g'ri
 *     javob — o'sha mavzuning bazadan TEKSHIRILGAN modda havolasi
 *     (`lawRefs`, verifyLessonRefs.js). Faqat o'zbek tilida (darslar
 *     o'zbekcha), rus tilida faqat 1-tur.
 */
const { articlesOf, titleOf } = require("./docView");
const { importantArticles } = require("./explain");
const { getTopicIndex } = require("../localAI/lessonTopics");

function shuffle(arr, seed) {
  const a = [...arr];
  let s = seed || Date.now();
  for (let i = a.length - 1; i > 0; i--) {
    s = (s * 9301 + 49297) % 233280;
    const j = Math.floor((s / 233280) * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}

/* Matndan savol uchun parcha: birinchi mazmunli jumla, 220 belgigacha. */
function fragment(text = "") {
  const first = String(text).split("\n").find((s) => s.trim().length > 40) || text;
  const t = first.trim();
  return t.length > 220 ? t.slice(0, 220).replace(/\s+\S*$/, "") + "…" : t;
}

function optionsFor(correct, pool, seed) {
  const others = shuffle(pool.filter((p) => p.num !== correct.num && p.title), seed).slice(0, 3);
  return shuffle([correct, ...others], seed + 7).map((o) => ({ num: o.num, title: o.title }));
}

async function buildQuiz(code, { lang = "uz", size = 8, seed } = {}) {
  const arts = (await articlesOf(code)).filter((d) => titleOf(d, lang));
  if (arts.length < 4) return [];
  const pool = arts.map((d) => ({ num: d.articleNumber, title: titleOf(d, lang), d }));
  const byNum = new Map(pool.map((p) => [p.num, p]));
  const s = Number(seed) || Date.now();
  const out = [];

  /* 2-tur: mini-vaziyatlar (darslardan). */
  if (lang === "uz") {
    const cases = getTopicIndex().topics.filter(
      (t) => t.example && (t.lawRefs || []).length === 1 && t.lawRefs[0].code === code && byNum.has(String(t.lawRefs[0].article)),
    );
    for (const t of shuffle(cases, s).slice(0, Math.ceil(size / 3))) {
      const correct = byNum.get(String(t.lawRefs[0].article));
      out.push({
        type: "case",
        prompt: t.example,
        topic: t.heading,
        answer: correct.num,
        options: optionsFor(correct, pool, s + out.length),
      });
    }
  }

  /* 1-tur: rasmiy matndan parcha — muhim moddalar ustun. */
  const important = importantArticles(code, 40).filter((n) => byNum.has(n));
  const order = [...shuffle(important, s), ...shuffle(pool.map((p) => p.num), s + 1)];
  const used = new Set(out.map((q) => q.answer));
  for (const num of order) {
    if (out.length >= size) break;
    if (used.has(num)) continue;
    const p = byNum.get(num);
    const text = lang === "ru" && p.d.textRu ? p.d.textRu : p.d.text;
    const frag = fragment(text);
    if (frag.length < 40) continue;
    used.add(num);
    out.push({ type: "article", prompt: frag, answer: num, options: optionsFor(p, pool, s + out.length) });
  }
  return shuffle(out, s + 3);
}

module.exports = { buildQuiz };
