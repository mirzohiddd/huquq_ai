"use strict";
/**
 * "MENGA ... HAQIDA TEST TUZIB BER" — MAVZU BO'YICHA TEST (2026-10-30).
 *
 * ⚠️ Nima uchun: "menga testlar tuzib ber ijtimoiy tarmoq to'g'risida"
 * so'rovi oddiy huquqiy savol deb qidirilib, so'zlari tasodifan mos kelgan
 * modda (MK 41 — "ijtimoiy sheriklik… tarmoq") bilan javob berilardi;
 * siteHelp esa faqat "Testlar bo'limiga o'ting" derdi. Foydalanuvchi esa
 * TEST so'ragan.
 *
 * Savollar TO'QILMAYDI — faqat sayt ma'lumotidan:
 *  1) test bazasi (`Quiz`) — mavzuga mos savollar, o'z izohi bilan;
 *  2) dars mavzulari — "bu vaziyat qaysi mavzuga oid?" (darsdagi haqiqiy
 *     misol) va "qaysi fikr shu mavzuga oid?" (darsdagi asosiy fikr).
 *     Noto'g'ri variantlar — BOSHQA darslardagi mavzu nomlari/fikrlari,
 *     shuning uchun to'g'ri javob har doim bir ma'noli.
 * Material yetmasa — halol javob, aloqasiz savol qo'shilmaydi.
 */
const { normalize, queryPrefixes, isUzCyrillic, uzCyrToLatin } = require("./text");
const { searchTopics, getTopicIndex } = require("./lessonTopics");

const TEST = /(^|\s)(test\S*|тест\S*|viktorina\S*|викторин\S*)(\s|$)/;
const QUESTIONS = /(^|\s)(savol(lar)?\S*|вопрос\S*)(\s|$)/;
const MAKE = /(^|\s)(tuz\S*|yarat\S*|tayyorla\S*|ber|bering|beri|berin|qil|qilib|qiling|ishla\S*|olib|состав\S*|сделай\S*|придума\S*|дай\S*|подготов\S*|созда\S*|напиш\S*)(\s|$)/;
const STRONG_MAKE = /(^|\s)(tuz\S*|yarat\S*|tayyorla\S*|состав\S*|придума\S*|подготов\S*|созда\S*)(\s|$)/;
const FILLER = new Set(("menga meni men bizga iltimos ham uchun haqida togrisida tugrisida boyicha buyicha mavzu mavzusida mavzuda " +
  "bilan oid bir nechta ta dona kerak edi yaxshi qiyin oson huquq huquqiy savol savollar savollari test testlar testlarni testni " +
  "testlari tuzib tuz tuzing yaratib yarat tayyorlab ber bering qilib qil olib berasanmi bera beraolasanmi " +
  "мне нужен нужна нужно хочу пожалуйста про по теме тему о об на для тест тесты тестов тестик вопросы вопросов составь сделай придумай дай напиши юридический").split(" "));
const SOFT = /(test\S*|тест\S*)\s+(\S+\s+)?(ber|bering|beri|berin|kerak|дай\S*|сделай\S*|напиш\S*|нужен)(\s|$)|(дай\S*|сделай\S*|нужен|нужны)\s+(\S+\s+)?тест/;
const TOPIC_MARK = /(^|\s)(haqida|togrisida|tugrisida|boyicha|buyicha|mavzu\S*|про|по|о|об)(\s|$)/;

/** So'rov test tuzish haqidami — mavzu va savollar soni bilan. */
function parseQuizRequest(msg = "") {
  const raw = isUzCyrillic(msg) ? uzCyrToLatin(msg) : msg;
  const text = normalize(raw).replace(/\s+/g, " ").trim();
  if (!text || text.split(" ").length > 16) return null;
  const isTest = TEST.test(text) || (QUESTIONS.test(text) && STRONG_MAKE.test(text));
  // "test qilib ko'rdi", "DNK test qildirish" — so'rov emas: kuchli fe'l, "test(lar) ber",
  // "дай тест" yoki "… haqida/bo'yicha" + fe'l bo'lishi shart
  const asked = STRONG_MAKE.test(text) || SOFT.test(text) || (TOPIC_MARK.test(text) && (MAKE.test(text) || /(test\S*|тест\S*)$/.test(text))) || /\d+\s*ta\s+(test|testlar|testni)(\s|$)/.test(text);
  if (!isTest || !asked) return null;
  const num = Number((text.match(/(\d{1,2})\s*(ta|dona|savol|test|вопрос|тест)/) || [])[1]) || 5;
  const topic = text.split(" ").filter((w) => !FILLER.has(w) && !/\d/.test(w) && !TEST.test(` ${w} `) && !MAKE.test(` ${w} `) && w.length > 1).join(" ");
  return { topic, count: Math.min(10, Math.max(3, num)) };
}

/* Seed'li tasodif — bir xil so'rov bir xil testni beradi. */
function rng(seed) {
  let h = 2166136261;
  for (const c of seed) h = Math.imul(h ^ c.charCodeAt(0), 16777619);
  return () => ((h = Math.imul(h ^ (h >>> 13), 3266489909)) >>> 0) / 4294967296;
}
const shuffle = (a, r) => a.map((x) => [r(), x]).sort((p, q) => p[0] - q[0]).map((p) => p[1]);
const ref = (t) => t.lawRefs.slice(0, 2).map((x) => `${x.code} ${x.article}-modda`).join(", ");
const SELF = (kp) => kp.split(/\s+/).length >= 4 && !/^(bu|u|ular|shu|bunda|unda)\b/i.test(kp);

/* Test bazasidagi savollar — savol so'zlarining ko'pchiligi mos kelsa. */
let quizCache = { at: 0, list: [] };
async function bankQuestions(topic) {
  if (Date.now() - quizCache.at > 10 * 60 * 1000) {
    try {
      const { Quiz } = require("../../models");
      const docs = await Quiz.find({ published: true }).select("questions").lean().maxTimeMS(4000);
      quizCache = { at: Date.now(), list: docs.flatMap((d) => d.questions || []) };
    } catch {
      quizCache.at = Date.now() - 9 * 60 * 1000; // baza ishlamasa — darslar yetarli, 1 daqiqadan keyin qayta
    }
  }
  const fits = matcher(topic);
  return quizCache.list.filter((q) => fits(`${q.situation} ${q.q} ${q.options[q.correct] || ""}`)).map((q) => {
    // Bo'sh variant ("D) ") chiqmasin — to'g'ri javob indeksi qayta hisoblanadi
    const keep = q.options.map((o, i) => [String(o || "").trim(), i]).filter(([o]) => o);
    return { situation: q.situation, q: q.q, options: keep.map(([o]) => o), correct: keep.findIndex(([, i]) => i === q.correct), explain: q.explain };
  }).filter((q) => q.correct >= 0 && q.options.length >= 2);
}

/* Matn mavzuga mosmi: savol so'zlarining hammasi (1–2 so'z) yoki ko'pchiligi. */
function matcher(topic) {
  const own = queryPrefixes(topic);
  const need = own.length <= 2 ? own.length : Math.ceil(own.length * 0.67);
  return (text) => {
    const words = normalize(text || "").split(/\s+/);
    return own.length > 0 && own.filter((p) => words.some((w) => w.startsWith(p))).length >= need;
  };
}

/* Noto'g'ri variantlar — boshqa darslardagi mavzular (bir ma'noli bo'lsin). */
function others(topic, r, pick) {
  const all = getTopicIndex().topics;
  const out = [];
  for (let i = 0; out.length < 3 && i < 200; i++) {
    const t = all[Math.floor(r() * all.length)];
    const v = t && t.lesson !== topic.lesson && pick(t);
    if (v && v.length < 160 && !out.includes(v)) out.push(v);
  }
  return out.length === 3 ? out : null;
}

/* Mavzu qidiruvda mos kelsa ham, savolning O'ZI mavzuga tegishli bo'lishi kerak
   (aks holda "ijtimoiy tarmoq" testiga qarzdor mulki haqidagi vaziyat tushardi). */
function topicQuestions(t, r, fits) {
  const qs = [];
  if (t.example && t.example.length >= 30 && t.example.length <= 450 && fits(`${t.heading} ${t.example}`)) {
    const wrong = others(t, r, (o) => o.heading !== t.heading && o.heading);
    if (wrong) {
      const options = shuffle([t.heading, ...wrong], r);
      qs.push({ situation: t.example, q: "Bu vaziyat qaysi huquqiy mavzuga oid?", options, correct: options.indexOf(t.heading), explain: t.warning || t.keyPoints?.[0] || "", base: ref(t) });
    }
  }
  const fact = (t.keyPoints || []).find(SELF);
  if (fact && fits(`${t.heading} ${fact}`)) {
    const wrong = others(t, r, (o) => (o.keyPoints || []).find(SELF));
    if (wrong) {
      const options = shuffle([fact, ...wrong], r);
      qs.push({ q: `«${t.heading}» mavzusiga oid to'g'ri fikrni belgilang.`, options, correct: options.indexOf(fact), explain: t.keyPoints.filter((k) => k !== fact).slice(0, 2).join(". "), base: ref(t) });
    }
  }
  return qs;
}

const T = {
  uz: {
    title: (x, n) => `**«${x}» mavzusida test — ${n} ta savol**\n_Savollar saytdagi darslar va test bazasidan olingan._`,
    sit: "Vaziyat", answers: "Javoblar va izohlar", base: "Asos",
    tail: "Avval o'zingiz yeching, keyin javoblar bilan solishtiring. Har javobdan keyin izoh ko'rsatiladigan interaktiv testlar: [Testlar bo'limi](/tests)",
    none: (x) => `«${x}» mavzusida saytda test tuzish uchun yetarli material topilmadi — to'qib chiqarilgan savol bermayman.\n\nMavzuni boshqacharoq yozib ko'ring (masalan: "tuhmat va haqorat", "mehnat shartnomasi", "aliment"), yoki tayyor testlarni oching: [Testlar bo'limi](/tests)`,
    ask: "Qaysi mavzuda test tuzay? Masalan: \"mehnat shartnomasi haqida test tuzib ber\", \"aliment bo'yicha 5 ta test\".\n\nTayyor testlar: [Testlar bo'limi](/tests)",
  },
  ru: {
    title: (x, n) => `**Тест по теме «${x}» — ${n} вопросов**\n_Вопросы взяты из уроков и базы тестов сайта (материалы на узбекском языке)._`,
    sit: "Ситуация", answers: "Ответы и пояснения", base: "Основание",
    tail: "Сначала решите сами, затем сверьтесь с ответами. Интерактивные тесты с пояснениями: [Раздел тестов](/tests)",
    none: (x) => `По теме «${x}» на сайте недостаточно материалов для теста — придуманные вопросы я не даю.\n\nУточните тему или откройте готовые тесты: [Раздел тестов](/tests)`,
    ask: "По какой теме составить тест? Например: «составь тест про трудовой договор».\n\nГотовые тесты: [Раздел тестов](/tests)",
  },
};

/** @returns {Promise<{answer:string, category:string, provider:string, found:boolean}|null>} */
async function makeQuiz(msg, lang = "uz") {
  const req = parseQuizRequest(msg);
  if (!req) return null;
  const L = T[lang === "ru" && !isUzCyrillic(msg) ? "ru" : "uz"];
  const done = (answer, found) => ({ answer, category: "boshqa", provider: "local", found });
  if (!queryPrefixes(req.topic).length) return done(L.ask, false);

  const r = rng(normalize(req.topic));
  const list = await bankQuestions(req.topic);
  const topics = searchTopics(req.topic, 12).filter((t) => t.coverage >= 0.99 || (t.coverage >= 0.5 && (t.headFit >= 0.5 || t.phrase >= 0.5)));
  // Har mavzudan avval bitta savol (xilma-xillik), keyin ikkinchisi
  const fits = matcher(req.topic);
  const per = topics.map((t) => topicQuestions(t.topic, r, fits));
  for (let round = 0; round < 2; round++) for (const qs of per) if (qs[round]) list.push(qs[round]);
  const quiz = list.slice(0, req.count);
  if (quiz.length < 3) return done(L.none(req.topic), false);

  const letter = (i) => "ABCD"[i] || String(i + 1);
  const body = quiz.map((q, i) => [
    `**${i + 1}.** ${q.situation ? `_${L.sit}:_ ${q.situation}\n` : ""}${q.q}`,
    q.options.map((o, k) => `${letter(k)}) ${o}`).join("\n"),
  ].join("\n")).join("\n\n");
  const keys = quiz.map((q, i) => `**${i + 1} — ${letter(q.correct)}.** ${q.explain || ""}${q.base ? ` _(${L.base}: ${q.base})_` : ""}`.trim()).join("\n");
  return done(`${L.title(req.topic, quiz.length)}\n\n${body}\n\n---\n**${L.answers}**\n${keys}\n\n${L.tail}`, true);
}

module.exports = { makeQuiz, parseQuizRequest };
