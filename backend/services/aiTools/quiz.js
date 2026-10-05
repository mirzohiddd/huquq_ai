"use strict";
/**
 * AI TEST GENERATOR — mavzu bo'yicha test savollari (javob kaliti va izoh bilan).
 *
 * Savol turlari (hammasi tekshirilgan dars va qonun bazasidan):
 *   • "point"   — qaysi fikr shu mavzuga tegishli? To'g'ri javob — mavzuning
 *                 asosiy fikri, chalg'ituvchilar — BOSHQA sohadagi darslarning
 *                 asosiy fikrlari (ular ham to'g'ri gaplar, lekin boshqa mavzu).
 *   • "article" — «modda sarlavhasi» qaysi moddada belgilangan? Variantlar —
 *                 shu darsda uchraydigan boshqa moddalar.
 *   • "example" — hayotiy misol qaysi mavzuga tegishli?
 * Hech qanday fakt o'ylab topilmaydi — shuning uchun savol matnida ham,
 * variantlarda ham muddat yoki summa yozilmaydi.
 */
const { pickMaterial, foreignTopics, lawState, resolveRefs, refLabel, clip } = require("./material");
const { clampInt, gradeLabel, localize } = require("./audience");

const Q = {
  uz: {
    point: (h) => `Quyidagi fikrlardan qaysi biri «${h}» mavzusiga tegishli?`,
    article: (t) => `«${t}» qaysi moddada belgilangan?`,
    example: "Quyidagi vaziyat qaysi mavzuga tegishli?",
    why: (h) => `To'g'ri javob «${h}» mavzusidan.`,
  },
  ru: {
    point: (h) => `Какое из утверждений относится к теме «${h}»?`,
    article: (t) => `В какой статье установлено «${t}»?`,
    example: "К какой теме относится следующая ситуация?",
    why: (h) => `Правильный ответ — из темы «${h}».`,
  },
};

/* Deterministik aralashtirish — bir xil so'rov bir xil testni beradi,
   `seed` o'zgarsa (qayta generatsiya) boshqa tartib va savollar. */
function rng(seed) {
  let x = (seed % 233280) + 1;
  return () => (x = (x * 9301 + 49297) % 233280) / 233280;
}
function shuffle(arr, rand) {
  const a = arr.slice();
  for (let i = a.length - 1; i > 0; i--) {
    const j = Math.floor(rand() * (i + 1));
    [a[i], a[j]] = [a[j], a[i]];
  }
  return a;
}
function withOptions(question, correct, wrong, rand, explain, extra = {}) {
  const opts = shuffle([correct, ...wrong], rand);
  return { question, options: opts, correct: opts.indexOf(correct), explain, ...extra };
}

/**
 * @param {{ topic: string, grade?: string, lang?: string, count?: number,
 *           difficulty?: "easy"|"medium"|"hard", seed?: number }} p
 */
async function buildQuiz({ topic, grade = "9", lang = "uz", count = 10, difficulty = "medium", seed = 1 }) {
  const n = clampInt(count, 3, 30, 10);
  const nOpt = difficulty === "easy" ? 3 : 4;
  const mat = pickMaterial(topic, Math.max(n, 12));
  if (!mat) return null;
  const rand = rng(clampInt(seed, 1, 1e6, 1) * 7919);
  const state = await lawState();
  const X = Q.uz;
  const topics = shuffle(mat.topics.filter((t) => t.keyPoints?.length), rand);
  const foreign = foreignTopics(mat.lesson, n * 4, clampInt(seed, 1, 1e6, 1));
  let f = 0;
  const nextForeign = () => foreign[f++ % foreign.length];

  // Darsdagi barcha moddalar (modda savollari variantlari uchun)
  const refs = [];
  const seen = new Set();
  for (const t of mat.topics) {
    for (const r of resolveRefs(t.lawRefs, state, "uz", 5)) {
      const k = `${r.code}:${r.article}`;
      if (r.title && !seen.has(k)) seen.add(k) && refs.push({ ...r, heading: t.heading });
    }
  }

  const questions = [];
  const kinds = difficulty === "hard" ? ["article", "point", "example"] : difficulty === "easy" ? ["point", "example"] : ["point", "article", "example"];
  let ti = 0;
  let ri = 0;
  for (let guard = 0; questions.length < n && guard < n * 6; guard++) {
    const kind = kinds[guard % kinds.length];
    if (kind === "article" && refs.length >= nOpt) {
      const r = refs[ri++ % refs.length];
      if (ri > refs.length) continue;
      const others = shuffle(refs.filter((o) => o !== r), rand).slice(0, nOpt - 1);
      questions.push(withOptions(X.article(r.title), refLabel(r, "uz"), others.map((o) => refLabel(o, "uz")), rand, X.why(r.heading), { kind, code: r.code, article: r.article }));
      continue;
    }
    const t = topics[ti++ % Math.max(1, topics.length)];
    if (!t || ti > topics.length * 2) continue;
    if (kind === "example" && t.example) {
      const wrong = [];
      for (let g = 0; wrong.length < nOpt - 1 && g < 40; g++) {
        const o = nextForeign();
        if (o && !wrong.includes(o.heading) && o.heading !== t.heading) wrong.push(o.heading);
      }
      if (wrong.length < nOpt - 1) continue;
      questions.push(withOptions(`${X.example}\n${clip(t.example, 320)}`, t.heading, wrong, rand, X.why(t.heading), { kind }));
      continue;
    }
    const kp = t.keyPoints[ti % t.keyPoints.length];
    const wrong = [];
    for (let g = 0; wrong.length < nOpt - 1 && g < 40; g++) {
      const p = nextForeign()?.keyPoints?.[0];
      if (p && !wrong.includes(clip(p, 160))) wrong.push(clip(p, 160));
    }
    if (wrong.length < nOpt - 1) continue;
    questions.push(withOptions(X.point(t.heading), clip(kp, 160), wrong, rand, X.why(t.heading), { kind: "point" }));
  }

  // Bir xil savol takrorlanmasin
  const uniq = [];
  const qs = new Set();
  for (const q of questions) if (!qs.has(q.question) && qs.add(q.question)) uniq.push(q);

  const quiz = { title: clip(topic, 90), lesson: mat.lesson, grade: String(grade), gradeLabel: gradeLabel(grade, "uz"), difficulty, lang, questions: uniq.slice(0, n) };
  if (lang !== "ru") return { ...quiz, partial: false };
  const { data, partial } = await localize(quiz, "ru");
  data.gradeLabel = gradeLabel(grade, "ru");
  // Modda variantlari — rasmiy ruscha nom bilan qayta yoziladi
  data.questions.forEach((q, i) => {
    if (q.kind !== "article") return;
    const src = quiz.questions[i];
    q.options = src.options.map((o) => {
      const r = refs.find((x) => refLabel(x, "uz") === o);
      return r ? refLabel(resolveRefs([r], state, "ru", 1)[0], "ru") : o;
    });
    const r = refs.find((x) => x.code === src.code && x.article === src.article);
    const ru = r && resolveRefs([r], state, "ru", 1)[0];
    if (ru?.title) q.question = Q.ru.article(ru.title);
  });
  return { ...data, partial };
}

module.exports = { buildQuiz };
