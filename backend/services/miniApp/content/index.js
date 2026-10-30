"use strict";
/**
 * MINI APP KONTENTI — yagona kirish nuqtasi.
 *
 * ⚠️ To'g'ri javoblar mijozga YUBORILMAYDI (`publicLesson`): reyting XP'ga
 * qurilgani uchun javob serverda tekshiriladi. Yuklanishda tuzilma
 * tekshiriladi — xato bo'lsa dars jim yo'qolmasin, darhol xato bersin.
 */
const LESSONS = [...require("./lessonsA"), ...require("./lessonsB")];
const SITUATIONS = require("./situations");

const UNITS = [
  { key: "consumer", title: "Xaridor huquqlari" },
  { key: "labor", title: "Ish joyida" },
  { key: "family", title: "Oila" },
  { key: "online", title: "Internet va xavfsizlik" },
];

(function validate() {
  const ids = new Set();
  for (const l of [...LESSONS, ...SITUATIONS]) {
    if (ids.has(l.id)) throw new Error(`miniApp: takror id ${l.id}`);
    ids.add(l.id);
    if (!UNITS.some((u) => u.key === l.unit)) throw new Error(`miniApp: noma'lum bo'lim ${l.id}`);
    if (!l.refs?.length) throw new Error(`miniApp: havolasiz ${l.id}`);
    if (!l.ask) throw new Error(`miniApp: "Tushuntirib ber" so'rovi yo'q ${l.id}`);
  }
  for (const l of LESSONS) {
    if (l.choice.options.filter((x) => x.ok).length !== 1) throw new Error(`miniApp: ${l.id} — bitta to'g'ri javob kerak`);
    if (l.game.type === "order" && l.game.items.length < 3) throw new Error(`miniApp: ${l.id} — o'yin qisqa`);
    if (l.game.type === "spot" && !l.game.lines[l.game.answer]) throw new Error(`miniApp: ${l.id} — spot javobi yo'q`);
  }
  for (const s of SITUATIONS) {
    for (const st of s.steps) if (st.options.filter((x) => x.ok).length !== 1) throw new Error(`miniApp: ${s.id} — qadam javobi`);
  }
})();

const lessonById = new Map(LESSONS.map((l) => [l.id, l]));
const situationById = new Map(SITUATIONS.map((s) => [s.id, s]));

/* Seed'li aralashtirish — bir dars har safar bir xil tartibda ko'rinadi. */
function seeded(seed) {
  let h = 2166136261;
  for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return () => ((h = Math.imul(h ^ (h >>> 13), 3266489909)) >>> 0) / 4294967296;
}
function shuffled(n, seed) {
  const r = seeded(seed);
  let a;
  do a = [...Array(n).keys()].map((i) => [r(), i]).sort((x, y) => x[0] - y[0]).map((p) => p[1]);
  while (n > 1 && a.every((v, i) => v === i)); // to'g'ri tartib ko'rinib qolmasin
  return a;
}

function publicLesson(l) {
  const game =
    l.game.type === "order"
      ? { type: "order", prompt: l.game.prompt, items: shuffled(l.game.items.length, l.id).map((i) => ({ id: i, t: l.game.items[i] })) }
      : { type: "spot", prompt: l.game.prompt, title: l.game.title, lines: l.game.lines };
  return {
    id: l.id,
    unit: l.unit,
    title: l.title,
    story: l.story,
    choice: { q: l.choice.q, options: l.choice.options.map((x) => x.t) },
    game,
  };
}

function publicSituation(s) {
  return {
    id: s.id,
    unit: s.unit,
    title: s.title,
    steps: s.steps.map((st) => ({ text: st.text, q: st.q, options: st.options.map((x) => x.t) })),
  };
}

/* Takrorlash kaliti: "L:<dars>" (tanlov) yoki "S:<vaziyat>:<qadam>". */
function questionByKey(key) {
  const [kind, id, idx] = String(key).split(":");
  if (kind === "L") {
    const l = lessonById.get(id);
    return l && { key, title: l.title, text: l.story, q: l.choice.q, options: l.choice.options, refs: l.refs };
  }
  const s = situationById.get(id);
  const st = s?.steps[Number(idx)];
  return st && { key, title: s.title, text: st.text, q: st.q, options: st.options, refs: s.refs };
}

module.exports = { UNITS, LESSONS, SITUATIONS, lessonById, situationById, publicLesson, publicSituation, questionByKey };
