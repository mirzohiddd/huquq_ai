"use strict";
/**
 * MINI APP KONTENTI — yagona kirish nuqtasi.
 *
 * 8 bo'lim × 5 dars; qiyinlik bo'limdan bo'limga oshadi. Vaziyatlar —
 * 5 toifa × 5 ta. ⚠️ To'g'ri javoblar mijozga YUBORILMAYDI: reyting XP'ga
 * qurilgani uchun javob serverda tekshiriladi. Variantlar tartibi har savol
 * uchun seed bilan aralashtiriladi (`optionView`) — to'g'ri javob doim "A"
 * bo'lib qolmasin. Yuklanishda tuzilma tekshiriladi — xato darhol chiqsin.
 */
const { UNITS, SIT_CATS } = require("./units");
const LESSONS = UNITS.flatMap((u) => require(`./lessons-${u.key}`).map((l) => ({ ...l, unit: u.key })));
const SITUATIONS = SIT_CATS.flatMap((c) => require(`./sit-${c.key}`).map((s) => ({ ...s, cat: c.key })));

(function validate() {
  const ids = new Set();
  const one = (opts, id) => {
    if (opts.filter((x) => x.ok).length !== 1 || opts.length < 3) throw new Error(`miniApp: ${id} — 3+ variant, bitta to'g'ri`);
  };
  for (const l of [...LESSONS, ...SITUATIONS]) {
    if (ids.has(l.id)) throw new Error(`miniApp: takror id ${l.id}`);
    ids.add(l.id);
    if (!l.refs?.length) throw new Error(`miniApp: havolasiz ${l.id}`);
    if (!l.ask) throw new Error(`miniApp: "Tushuntirib ber" so'rovi yo'q ${l.id}`);
  }
  for (const u of UNITS) {
    if (LESSONS.filter((l) => l.unit === u.key).length !== 5) throw new Error(`miniApp: ${u.key} — 5 ta dars kerak`);
  }
  for (const l of LESSONS) {
    one(l.choice.options, l.id);
    if (l.game.type === "order" && l.game.items.length < 3) throw new Error(`miniApp: ${l.id} — o'yin qisqa`);
    if (l.game.type === "spot" && !l.game.lines[l.game.answer]) throw new Error(`miniApp: ${l.id} — spot javobi yo'q`);
  }
  for (const s of SITUATIONS) for (const st of s.steps) one(st.options, s.id);
})();

const lessonById = new Map(LESSONS.map((l) => [l.id, l]));
const situationById = new Map(SITUATIONS.map((s) => [s.id, s]));

/* Seed'li tasodif — bir savol har safar bir xil tartibda ko'rinadi. */
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

/**
 * Variantlar ko'rinishi: `perm[ko'rinadigan] = asl indeks`. To'g'ri javob
 * o'rni kalitdan hisoblanadi (A/B/C/D teng taqsimlanadi), qolganlari aralash.
 * Kalit takrorlashdagi kalit bilan bir xil ("L:<id>", "S:<id>:<qadam>") —
 * xato qilingan savol takrorlashda ham o'sha tartibda chiqadi.
 */
function optionView(key, options) {
  const n = options.length;
  const right = options.findIndex((o) => o.ok);
  const r = seeded(`opt:${key}`);
  const slot = Math.floor(r() * n);
  const rest = options.map((_, i) => i).filter((i) => i !== right).map((i) => [r(), i]).sort((a, b) => a[0] - b[0]).map((p) => p[1]);
  const perm = [...rest.slice(0, slot), right, ...rest.slice(slot)];
  return {
    texts: perm.map((i) => options[i].t),
    pick: (pub) => options[perm[Number(pub)]] || null, // ko'rinadigan indeks → variant
    correct: slot,
  };
}

const lessonKey = (id) => `L:${id}`;
const stepKey = (id, i) => `S:${id}:${i}`;

function publicLesson(l) {
  const game =
    l.game.type === "order"
      ? { type: "order", prompt: l.game.prompt, items: shuffled(l.game.items.length, l.id).map((i) => ({ id: i, t: l.game.items[i] })) }
      : { type: "spot", prompt: l.game.prompt, title: l.game.title, lines: l.game.lines };
  const unit = UNITS.find((u) => u.key === l.unit);
  return {
    id: l.id,
    unit: l.unit,
    level: unit.level,
    icon: l.icon || unit.icon,
    title: l.title,
    story: l.story,
    choice: { q: l.choice.q, options: optionView(lessonKey(l.id), l.choice.options).texts },
    game,
  };
}

function publicSituation(s) {
  return {
    id: s.id,
    cat: s.cat,
    icon: s.icon || SIT_CATS.find((c) => c.key === s.cat).icon,
    title: s.title,
    steps: s.steps.map((st, i) => ({ text: st.text, q: st.q, options: optionView(stepKey(s.id, i), st.options).texts })),
  };
}

/* Takrorlash kaliti: "L:<dars>" (tanlov) yoki "S:<vaziyat>:<qadam>". */
function questionByKey(key) {
  const [kind, id, idx] = String(key).split(":");
  if (kind === "L") {
    const l = lessonById.get(id);
    return l && { key, title: l.title, icon: l.icon, text: l.story, q: l.choice.q, options: l.choice.options, refs: l.refs };
  }
  const s = situationById.get(id);
  const st = s?.steps[Number(idx)];
  return st && { key, title: s.title, icon: s.icon, text: st.text, q: st.q, options: st.options, refs: s.refs };
}

module.exports = {
  UNITS, SIT_CATS, LESSONS, SITUATIONS, lessonById, situationById,
  publicLesson, publicSituation, questionByKey, optionView, lessonKey, stepKey,
};
