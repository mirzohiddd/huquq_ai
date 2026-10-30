"use strict";
/**
 * KURSLAR — yagona kirish nuqtasi: bazadan yuklash (kesh), ommaviy
 * ko'rinishlar, imtihon savollari va takrorlash kalitlari.
 *
 * Kalitlar: "Q:<dars>:<savol>" — dars savoli, "X:<dars>:<savol>" — bo'lim
 * imtihonidagi o'sha savol (boshqa tartibda aralashadi). Qo'lda yozilgan
 * «Hayotiy asoslar» kalitlari ikki qismli ("L:<id>", "X:<id>") — farqlanadi.
 * ⚠️ To'g'ri javoblar mijozga YUBORILMAYDI (javob serverda tekshiriladi).
 */
const { Lesson, Quiz } = require("../../../models");
const { build } = require("./build");
const M = require("./meta");
const Q = require("./questions");

const TTL = 10 * 60 * 1000; // admin darsni o'zgartirsa — 10 daqiqada yo'lda ko'rinadi
let state = null;
let loading = null;

/* Bazadagi darslar/testlar «izi»: soni + oxirgi o'zgarish vaqti. Ikkita
   yengil so'rov — qayta qurish (~1 s CPU, shu vaqt server boshqa so'rovlarga
   javob bermaydi) faqat haqiqatan o'zgarish bo'lsa bajariladi. */
async function fingerprint() {
  const one = (M) =>
    Promise.all([M.countDocuments({ published: true }), M.findOne({}).sort({ updatedAt: -1 }).select("updatedAt").lean()])
      .then(([n, last]) => `${n}:${last?.updatedAt?.getTime?.() || 0}`);
  const [a, b] = await Promise.all([one(Lesson), one(Quiz)]);
  return `${a}|${b}`;
}

async function load() {
  const fp = await fingerprint();
  if (state && state.fp === fp) {
    state.at = Date.now(); // o'zgarmagan — eski qurilgan holat ishlatiladi
    return state;
  }
  const [lessons, quizzes] = await Promise.all([
    Lesson.find({ published: true }).sort({ order: 1, createdAt: 1 }).select("title category level objectives practicalSteps sections").lean(),
    Quiz.find({ published: true }).sort({ order: 1, createdAt: 1 }).lean(),
  ]);
  state = build(lessons, quizzes);
  state.fp = fp;
  return state;
}

/** Kurslar holati. Birinchi so'rovda yuklanadi, keyin fonda yangilanadi. */
function ready() {
  const stale = !state || Date.now() - state.at > TTL;
  if (stale && !loading) {
    loading = load()
      .catch((err) => {
        console.error("Mini kurslar yuklanmadi:", err.message);
        return state;
      })
      .finally(() => (loading = null));
  }
  return state ? Promise.resolve(state) : loading.then((s) => s || { courses: [], units: [], unitByKey: new Map(), lessons: new Map() });
}

/* Variantlar tartibi kalitdan (to'g'ri javob o'rni A/B/C/D ga teng taqsimlanadi) */
function optionView(key, options) {
  const n = options.length;
  const right = options.findIndex((o) => o.ok);
  const r = Q.seeded(`opt:${key}`);
  const slot = Math.floor(r() * n);
  const rest = options.map((_, i) => i).filter((i) => i !== right).map((i) => [r(), i]).sort((a, b) => a[0] - b[0]).map((p) => p[1]);
  const perm = [...rest.slice(0, slot), right, ...rest.slice(slot)];
  return { texts: perm.map((i) => options[i].t), pick: (pub) => options[perm[Number(pub)]] || null, correct: slot };
}

const qKey = (id, i) => `Q:${id}:${i}`;
const xKey = (id, i) => `X:${id}:${i}`;

function publicLesson(l, unit) {
  return {
    id: l.id, kind: "course", unit: l.unit, course: l.course, level: unit?.level || "",
    title: l.title, lessonTitle: l.lessonTitle, part: l.part, goals: l.goals, steps: l.steps,
    cards: l.cards.map((c) => ({ heading: c.heading, text: c.text, example: c.example, keyPoints: c.keyPoints, warning: c.warning, refs: c.refs })),
    quiz: l.quiz.map((q, i) => ({ i, card: q.card, kind: q.kind, q: q.q, text: q.text || "", options: optionView(qKey(l.id, i), q.options).texts })),
  };
}

/** Bo'lim imtihoni: avval saytdagi test savollari, keyin har darsdan navbat bilan. */
function examItems(s, unit) {
  const ls = unit.lessons.map((id) => s.lessons.get(id));
  const tests = ls.flatMap((l) => l.quiz.map((q, i) => [l, i, q]).filter((x) => x[2].kind === "test"));
  const rest = [];
  const maxQ = Math.max(...ls.map((l) => l.quiz.length));
  for (let i = maxQ - 1; i >= 0; i--) ls.forEach((l) => l.quiz[i] && l.quiz[i].kind !== "test" && rest.push([l, i, l.quiz[i]]));
  const order = { case: 0, warn: 1, point: 2 }; // amaliy vaziyat savollari birinchi
  rest.sort((a, b) => order[a[2].kind] - order[b[2].kind]);
  return [...tests, ...rest].slice(0, M.EXAM_SIZE).map(([l, i, q]) => ({
    key: xKey(l.id, i), title: l.title, icon: unit.icon, text: q.text || "", q: q.q, options: q.options, refs: q.refs,
  }));
}

const passOf = (n) => Math.ceil(n * M.PASS_RATIO);

/** Takrorlash / imtihon uchun savol kaliti bo'yicha (faqat kurs kalitlari). */
function questionByKey(key, s = state) {
  if (!s) return null;
  const [kind, id, idx] = String(key).split(":");
  if ((kind !== "Q" && kind !== "X") || idx === undefined) return null;
  const l = s.lessons.get(id);
  const q = l?.quiz[Number(idx)];
  return q && { key, title: l.title, icon: s.unitByKey.get(l.unit)?.icon, text: q.text || "", q: q.q, options: q.options, refs: q.refs };
}

// Server ishga tushgach fonda yuklab qo'yiladi — birinchi foydalanuvchi kutmasin
setTimeout(() => ready().catch(() => {}), 8 * 1000).unref();

/** Kurs darsi va savoli — «Tushuntirib ber» uchun (yuklanmagan bo'lsa null). */
const lessonOf = (id) => state?.lessons.get(String(id)) || null;

module.exports = { ready, lessonOf, publicLesson, examItems, passOf, questionByKey, optionView, qKey, xKey, BASICS: M.BASICS };
