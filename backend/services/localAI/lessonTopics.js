"use strict";
/**
 * LOKAL AI — SAYT DARSLARIDAGI MAVZULARDAN JAVOB TOPISH.
 *
 * ⚠️ Nima uchun (2026-09-28): faqat qonun matni bo'yicha so'z qidiruvi
 * kundalik savollarda professional javob bermadi — "qo'shnim uyimni suv
 * bosdi" savoliga Soliq kodeksi, "otalikni belgilash" savoliga Uy-joy
 * kodeksi chiqdi. Saytning o'zida esa tayyor bilim bazasi bor: darslar
 * (124 dars + 6 darslik ≈ 1369 mavzu). Har bir mavzu oddiy tilda yozilgan,
 * misol, asosiy fikrlar, ogohlantirish va BAZADAN TEKSHIRILGAN qonun
 * havolalari (`lawRefs`, `verifyLessonRefs.js`) bilan.
 *
 * Savol mavzular bilan BM25 bo'yicha solishtiriladi: mavzu SARLAVHASI va
 * asosiy fikrlar eng og'ir vaznga ega (ular mavzuning mohiyati), matn —
 * yengilroq. Mavzu faqat savol so'zlarining ko'pchiligi mos kelsa
 * tanlanadi — aks holda qonun matni bo'yicha qidiruvga o'tiladi.
 *
 * Mavzular faqat O'ZBEK tilida — ruscha savol uchun ishlatilmaydi.
 */
const { tokenize, queryPrefixes } = require("./text");
const { byPrefix, fuzzy } = require("./search");

const K1 = 1.2;
const B = 0.75;
const W = { heading: 5, keyPoints: 2, lesson: 1, text: 1 };

/* scripts/lessonContentData.js darsliklarining nomi (u yerda nom `match`
   regex ko'rinishida — sarlavha bazada admin tomonidan beriladi). */
const BOOK_TITLES = [
  "Mehnat huquqi", "Oila huquqi", "Iste'molchi huquqlari",
  "Meros huquqi", "Yer va ko'chmas mulk", "Jinoiy javobgarlik",
];

let idx = null;

function loadTopics() {
  const out = [];
  const push = (lesson, s) => out.push({ lesson, ...s, lawRefs: s.lawRefs || [] });
  try {
    for (const l of require("../../scripts/lessons").NEW_LESSONS) {
      for (const s of l.sections) push(l.title, s);
    }
  } catch (err) {
    console.error("Darslar kutubxonasi yuklanmadi:", err.message);
  }
  try {
    require("../../scripts/lessonContentData").LESSONS.forEach((l, i) => {
      for (const s of l.sections) push(BOOK_TITLES[i] || "", s);
    });
  } catch (err) {
    console.error("Darsliklar yuklanmadi:", err.message);
  }
  return out;
}

function build() {
  const topics = loadTopics();
  const postings = new Map();
  const docLen = [];
  topics.forEach((t, i) => {
    const tf = new Map();
    let len = 0;
    const add = (text, w) => {
      for (const tok of tokenize(text)) {
        tf.set(tok, (tf.get(tok) || 0) + w);
        len += w;
      }
    };
    add(t.heading, W.heading);
    add((t.keyPoints || []).join(" "), W.keyPoints);
    add(t.lesson, W.lesson);
    add(t.text, W.text);
    docLen[i] = len;
    for (const [term, n] of tf) {
      if (!postings.has(term)) postings.set(term, []);
      postings.get(term).push(i, n);
    }
    t._head = new Set(tokenize(t.heading));
  });
  const avgLen = docLen.reduce((a, b) => a + b, 0) / (docLen.length || 1);
  return { topics, postings, docLen, avgLen, vocab: [...postings.keys()].sort() };
}

function getTopicIndex() {
  if (!idx) idx = build();
  return idx;
}

/**
 * @returns {{ topic: object, score: number, coverage: number, headFit: number }[]}
 */
function searchTopics(query, limit = 3) {
  const I = getTopicIndex();
  const own = queryPrefixes(query);
  if (!own.length) return [];
  const N = I.topics.length;
  const scores = new Map();
  const matched = new Map();
  const head = new Map();

  for (const prefix of own) {
    let terms = byPrefix(I.vocab, prefix);
    let w = 1;
    if (!terms.length) {
      terms = fuzzy(prefix, I.vocab);
      w = 0.7;
    }
    if (!terms.length) continue;
    const tfByDoc = new Map();
    for (const term of terms) {
      const list = I.postings.get(term);
      for (let k = 0; k < list.length; k += 2) tfByDoc.set(list[k], (tfByDoc.get(list[k]) || 0) + list[k + 1]);
    }
    const df = tfByDoc.size;
    const idf = Math.log(1 + (N - df + 0.5) / (df + 0.5));
    for (const [d, tf] of tfByDoc) {
      const norm = tf + K1 * (1 - B + (B * I.docLen[d]) / I.avgLen);
      scores.set(d, (scores.get(d) || 0) + w * idf * ((tf * (K1 + 1)) / norm));
      matched.set(d, (matched.get(d) || 0) + 1);
      if (terms.some((t) => I.topics[d]._head.has(t))) head.set(d, (head.get(d) || 0) + 1);
    }
  }

  const ranked = [];
  for (const [d, raw] of scores) {
    const coverage = matched.get(d) / own.length;
    const headFit = (head.get(d) || 0) / own.length;
    ranked.push({ topic: I.topics[d], score: raw * (0.4 + coverage) * (1 + headFit), coverage, headFit, matched: matched.get(d) });
  }
  ranked.sort((a, b) => b.score - a.score);

  /* IBORA MOSLIGI: savoldagi YONMA-YON so'zlar mavzuda ham yonma-yon kelsa
     ("ikkinchi xotin", "fuqarolikdan chiqish", "soliq to'lamaslik") —
     bu alohida so'zlarning tasodifan uchrashidan ancha kuchli signal. */
  const pairs = own.slice(1).map((p, i) => [own[i], p]);
  const top = ranked.slice(0, RERANK);
  for (const r of top) {
    r.phrase = pairs.length ? phraseHits(r.topic, pairs) / pairs.length : 0;
    r.score *= 1 + PHRASE_BONUS * r.phrase;
  }
  top.sort((a, b) => b.score - a.score);
  return top.slice(0, limit);
}

const RERANK = 30;
const PHRASE_BONUS = 1.2;

function phraseHits(topic, pairs) {
  if (!topic._seq) {
    topic._seq = tokenize(`${topic.heading} ${(topic.keyPoints || []).join(" ")} ${topic.text}`);
  }
  const seq = topic._seq;
  let hits = 0;
  for (const [a, b] of pairs) {
    for (let i = 0; i + 1 < seq.length; i++) {
      if (seq[i].startsWith(a) && seq[i + 1].startsWith(b)) {
        hits++;
        break;
      }
    }
  }
  return hits;
}

module.exports = { searchTopics, getTopicIndex };
