"use strict";
/**
 * AI DARS REJA GENERATORI — o'qituvchi uchun tayyor dars ishlanmasi.
 *
 * Tuzilma (an'anaviy dars bosqichlari): maqsadlar → jihozlar → bosqichlar
 * (vaqt bilan) → mustahkamlash savollari → uy vazifasi → baholash mezonlari.
 * Mazmun tekshirilgan darslardan (material.js); bosqich vaqtlari dars
 * davomiyligiga mutanosib taqsimlanadi.
 */
const { pickMaterial, lawState, resolveRefs, refLabel, clip, lead } = require("./material");
const { levelOf, gradeLabel, clampInt, localize } = require("./audience");

const T = {
  uz: {
    goals: { edu: "Ta'limiy", dev: "Rivojlantiruvchi", up: "Tarbiyaviy" },
    edu: (h) => `O'quvchilar «${h}» mazmunini tushuntirib bera oladi`,
    dev: "Huquqiy vaziyatni tahlil qilish va qonun manbasiga tayanib xulosa chiqarish ko'nikmasi rivojlanadi",
    up: "Qonunga hurmat, o'z huquq va burchlarini bilish hamda mas'uliyat hissi tarbiyalanadi",
    tools: ["Taqdimot (HuquqTech slayd generatori)", "Tarqatma: mavzu bo'yicha asosiy fikrlar", "Qonun matnlari (lex.uz yoki HuquqTech «Qonunchilik hujjatlari» bo'limi)", "Doska, marker"],
    stages: {
      org: ["Tashkiliy qism", "Salomlashish, davomatni aniqlash, dars maqsadi bilan tanishtirish."],
      check: ["O'tilgan mavzuni takrorlash", "Oldingi dars bo'yicha 2–3 ta savol; o'quvchilar javoblarini tinglash."],
      main: ["Yangi mavzu bayoni", "Quyidagi mavzular ketma-ket tushuntiriladi:"],
      case: ["Hayotiy vaziyat tahlili", "O'quvchilar guruhlarda vaziyatni muhokama qiladi va qonunga tayanib javob beradi:"],
      fix: ["Mustahkamlash", "Savol-javob va qisqa test (HuquqTech test generatori)."],
      end: ["Baholash va yakun", "Faol o'quvchilarni rag'batlantirish, uy vazifasini tushuntirish."],
    },
    homework: (h) => `«${h}» mavzusi bo'yicha hayotdan bitta misol topib, uni qonun nuqtai nazaridan qisqacha yozma tahlil qiling.`,
    criteria: ["Mavzu tushunchalarini to'g'ri izohlaydi", "Qonun manbasiga (moddaga) to'g'ri tayanadi", "Hayotiy vaziyatga qonunni qo'llay oladi", "Muhokamada faol ishtirok etadi"],
    ask: (h) => `«${h}» nima va u nimani anglatadi?`,
    source: "Manba: HuquqTech darslari va O'zbekiston Respublikasi qonunchiligi (lex.uz)",
  },
};

/* Bosqich vaqtlari (daqiqa) — 45 daqiqalik dars uchun ulushlar */
const SHARE = { org: 0.05, check: 0.1, main: 0.4, case: 0.2, fix: 0.15, end: 0.1 };

function minutesFor(total) {
  const m = {};
  let used = 0;
  for (const [k, v] of Object.entries(SHARE)) used += m[k] = Math.max(2, Math.round(total * v));
  m.main += total - used; // yaxlitlash farqi asosiy bosqichga
  return m;
}

/**
 * @param {{ topic: string, grade?: string, lang?: string, duration?: number }} p
 */
async function buildLessonPlan({ topic, grade = "9", lang = "uz", duration = 45 }) {
  const total = clampInt(duration, 30, 120, 45);
  const level = levelOf(grade);
  const mat = pickMaterial(topic, level === "junior" ? 3 : 4);
  if (!mat) return null;
  const state = await lawState();
  const X = T.uz;
  const min = minutesFor(total);
  const heads = mat.topics.map((t) => t.heading);
  const withExample = mat.topics.find((t) => t.example) || mat.topics[0];

  const refs = [];
  const seen = new Set();
  for (const t of mat.topics) {
    for (const r of resolveRefs(t.lawRefs, state, lang, 2)) {
      const k = `${r.code}:${r.article}`;
      if (!seen.has(k) && seen.add(k)) refs.push({ code: r.code, article: r.article, law: r.law, lawTitle: r.title, source: refLabel(r, lang) });
    }
  }

  const stage = (key, details = []) => ({ key, name: X.stages[key][0], minutes: min[key], text: X.stages[key][1], details });
  const plan = {
    title: clip(topic, 90),
    lesson: mat.lesson,
    grade: String(grade),
    gradeLabel: gradeLabel(grade, "uz"),
    duration: total,
    lang,
    goals: [
      { type: X.goals.edu, text: mat.objectives[0] || X.edu(heads[0]) },
      { type: X.goals.dev, text: X.dev },
      { type: X.goals.up, text: X.up },
    ],
    outcomes: mat.objectives.slice(0, 4),
    tools: X.tools,
    stages: [
      stage("org"),
      stage("check"),
      stage("main", mat.topics.map((t) => `${t.heading}: ${lead(t.text, level === "junior" ? 160 : 230)}`)),
      stage("case", withExample?.example ? [clip(withExample.example, 380)] : []),
      stage("fix", heads.map(X.ask)),
      stage("end"),
    ],
    keyPoints: mat.topics.flatMap((t) => (t.keyPoints || []).slice(0, 2)).slice(0, 8).map((k) => clip(k, 160)),
    laws: refs.slice(0, 6),
    homework: X.homework(heads[0]),
    criteria: X.criteria,
    source: X.source,
  };
  if (lang !== "ru") return { ...plan, partial: false };
  const { data, partial } = await localize(plan, "ru");
  data.gradeLabel = gradeLabel(grade, "ru");
  return { ...data, partial };
}

module.exports = { buildLessonPlan };
