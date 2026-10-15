"use strict";
/**
 * O'QITUVCHI REJIMI — dars qadami, ovozli javobni tushunish va baholash.
 *
 * Bir qadam: mavzuni qisqa tushuntirish (+ misol) → savol (A/B/C/D).
 * Foydalanuvchi "B", "ikkinchi", variant matni bilan javob beradi yoki
 * ekrandagi tugmani bosadi. Qo'shimcha buyruqlar: "keyingi", "qaytar",
 * "to'xta". Tushunilmasa — savol saqlanadi va aniqlashtirish so'raladi.
 */
const { getIndex } = require("../localAI/lawIndex");
const { AREA, topicAt, questionFor, questionById } = require("./tutorBank");
const { takeSentences, plain } = require("./speech");

const LETTERS = ["A", "B", "C", "D", "E"];
const pick = (arr) => arr[Math.floor(Math.random() * arr.length)];

const SAY = {
  intro: (area, n) => `${area}. ${n}-mavzu.`,
  example: "Misol:",
  question: "Endi savol.",
  answerHint: "Javobingizni A, B, C yoki D deb ayting.",
  right: ["Barakalla! To'g'ri javob.", "Zo'r, to'ppa-to'g'ri!", "Ajoyib, siz haqsiz!"],
  streak: (n) => `Ketma-ket ${n} ta to'g'ri javob — zo'r natija!`,
  wrong: ["Afsus, bu safar noto'g'ri.", "Unchalik emas.", "Yo'q, bu to'g'ri emas, lekin xafa bo'lmang."],
  correctIs: (l, t) => `To'g'ri javob — ${l}: ${t}.`,
  next: "Keyingi mavzuga o'tish uchun «keyingi» deng.",
  notUnderstood: "Javobingizni tushunmadim. Iltimos, A, B, C yoki D deb ayting yoki «qaytar» deng.",
  stop: (c, t) => `Dars tugadi. Siz ${t} ta savoldan ${c} tasiga to'g'ri javob berdingiz. Yana davom ettirmoqchi bo'lsangiz, dars rejimini yoqing.`,
};

const CMD = {
  next: /(keyingi|davom|o'?tamiz|keyin|дальше|следующ|продолж)/i,
  repeat: /(qaytar|takror|yana bir|tushunmadim|qayta ayt|повтор)/i,
  stop: /(to'?xta|tugat|bas\b|yetarli|хватит|стоп|законч)/i,
};
const ORDINALS = [
  /^(a\b|а\b|ey\b|birinch|bir\b|перв|один\b|1\b)/i,
  /^(b\b|б\b|bi\b|be\b|би\b|бэ\b|ikkinch|ikki\b|втор|два\b|2\b)/i,
  /^(c\b|с\b|si\b|ts\b|си\b|uchinch|uch\b|трет|три\b|3\b)/i,
  /^(d\b|д\b|di\b|ди\b|дэ\b|to'?rtinch|to'?rt\b|четв|четыре\b|4\b)/i,
];
function words(s) {
  return String(s).toLowerCase().replace(/[^\p{L}\p{N}' ]/gu, " ").split(/\s+/).filter((w) => w.length > 2);
}

/** Ovozli javobdan variant raqami; topilmasa -1. */
function parseChoice(text, options = []) {
  const t = String(text || "").toLowerCase().replace(/^(javob|javobim|menimcha|variant|вариант|ответ)\s*[:\-]?\s*/i, "").trim();
  const clean = t.replace(/[.,!?;:)"«»]/g, " ").trim();
  for (let i = 0; i < Math.min(options.length, ORDINALS.length); i++) {
    if (ORDINALS[i].test(clean)) return i;
  }
  // Variant matni bilan: so'zlar mosligi ≥ 50%
  const said = new Set(words(t));
  let best = -1;
  let bestScore = 0;
  options.forEach((o, i) => {
    const w = words(o);
    if (!w.length) return;
    const score = w.filter((x) => said.has(x)).length / w.length;
    if (score > bestScore) [best, bestScore] = [i, score];
  });
  return bestScore >= 0.5 ? best : -1;
}

function intentOf(text) {
  if (CMD.stop.test(text)) return "stop";
  if (CMD.repeat.test(text)) return "repeat";
  if (CMD.next.test(text) && text.split(/\s+/).length <= 5) return "next";
  return "answer";
}

async function refLabels(refs = []) {
  if (!refs.length) return [];
  const state = await getIndex().catch(() => null);
  const map = new Map((state?.docs || []).map((d) => [`${d.lawCode}:${d.articleNumber}`, d]));
  return refs.slice(0, 3).map((r) => {
    const d = map.get(`${r.code}:${r.article}`);
    return { code: r.code, article: r.article, label: d ? `${d.lawName}, ${r.article}-modda — ${d.title}` : `${r.code} ${r.article}-modda` };
  });
}

/* Darslardagi urg'u uchun BOSH HARFLI so'zlar ("ASOSI", "XODIM") ovozda
   harfma-harf yoki g'alati o'qiladi — kichik harfga o'tkaziladi.
   Qisqartmalar (MK, ZAGS, IIB…) o'zgarmaydi. */
const ABBR = new Set(["ZAGS", "IIB", "DXX", "QQS", "JSHSHIR", "STIR", "BMT", "MK", "JK", "OK", "FK", "YK", "SK", "UJK", "MJK", "JPK", "FPK", "IPK", "MSK", "IHQ", "KONS", "AQSH", "IT"]);
function forSpeech(text) {
  return String(text)
    .replace(/[A-ZʻʼO'G]{2,}(?:[ʻʼ'][A-Z]+)*/g, (w) => (ABBR.has(w.toUpperCase()) ? w : w.toLowerCase()))
    .replace(/\s+/g, " ");
}

function readOptions(q) {
  return q.options.map((o, i) => `${LETTERS[i]}: ${String(o).replace(/[.]+$/, "")}.`).join(" ");
}

/** Dars qadami: mavzu kartasi + savol + aytiladigan matn. */
async function buildStep(area, pos) {
  const { area: key, topic, index, total } = topicAt(area, pos);
  const q = await questionFor(area, pos);
  const body = plain(String(topic.text).replace(/⚠️/gu, ""));
  const areaLabel = AREA.get(key)?.uz || "";
  const speech = [
    SAY.intro(areaLabel, index + 1),
    `${topic.heading}.`,
    takeSentences(forSpeech(body), 340),
    topic.example ? `${SAY.example} ${takeSentences(forSpeech(topic.example), 170)}` : "",
    SAY.question,
    q.q,
    readOptions(q),
  ].filter(Boolean).join(" ");
  return {
    kind: "lesson",
    emotion: "happy",
    speech,
    lesson: {
      area: key,
      areaLabel,
      index: index + 1,
      total,
      lessonTitle: topic.lesson,
      heading: topic.heading,
      text: body,
      example: topic.example || "",
      keyPoints: topic.keyPoints || [],
      warning: topic.warning ? plain(topic.warning) : "",
      refs: await refLabels(topic.lawRefs),
    },
    question: { id: q.id, q: q.q, options: q.options },
  };
}

/** Javobni baholash: tugma (`choice`) yoki ovoz matni (`text`). */
async function grade({ qid, choice, text, streak = 0 }) {
  const q = await questionById(qid);
  if (!q) return { kind: "clarify", emotion: "confused", speech: SAY.notUnderstood };
  const idx = Number.isInteger(choice) ? choice : parseChoice(text, q.options);
  if (idx < 0 || idx >= q.options.length) {
    return { kind: "clarify", emotion: "confused", speech: SAY.notUnderstood, question: { id: q.id, q: q.q, options: q.options } };
  }
  const ok = idx === q.correct;
  const s = ok ? streak + 1 : 0;
  const right = `${LETTERS[q.correct]}) ${q.options[q.correct]}`;
  const parts = ok
    ? [pick(SAY.right), s >= 3 && s % 3 === 0 ? SAY.streak(s) : "", q.explain]
    : [pick(SAY.wrong), SAY.correctIs(LETTERS[q.correct], q.options[q.correct]), q.explain];
  parts.push(SAY.next);
  return {
    kind: "graded",
    emotion: ok ? "happy" : "sad",
    correct: ok,
    chosen: idx,
    correctIndex: q.correct,
    explain: q.explain,
    rightText: right,
    speech: parts.filter(Boolean).join(" "),
  };
}

module.exports = { buildStep, grade, intentOf, parseChoice, SAY };
