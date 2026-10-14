"use strict";
/**
 * YUKLANGAN HUJJATDAGI TEST — JAVOBLAR VARAQASI (2026-10-14).
 *
 * Foydalanuvchi: "hujjat tashladim, shuni tahlil qilib javoblar varaqasini
 * ber" → avval "topilmadi" javobi kelardi: hujjat matni chatga umuman
 * yetib bormasdi (docChat.js endi uni suhbatga bog'laydi).
 *
 * Har bir savolning javobi uch manbadan, ishonchlilik tartibida:
 *   1. Hujjatning O'ZIDAGI javoblar kaliti ("Javoblar: 1-B, 2-A…");
 *   2. Saytning test bazasidagi xuddi shu savol (to'g'ri javobi ma'lum);
 *   3. Sayt dars mavzulari va qonun moddalariga solishtirish — har variant
 *      matni topilgan manbalarda qanchalik tasdiqlanishi hisoblanadi.
 * Hech qaysi manba aniq ko'rsatmasa — taxmin "past ishonch" deb ochiq
 * belgilanadi (javob to'qilmaydi va ishonchli qilib ko'rsatilmaydi).
 */
const { queryPrefixes, normalize } = require("../localAI/text");
const { searchLaws } = require("../localAI/search");
const { searchTopics } = require("../localAI/lessonTopics");
const { getIndex } = require("../localAI/lawIndex");
const { numWords } = require("../voiceText");
const { Quiz } = require("../../models");
const { parseQuestions, answerKey, expand, isTestLike } = require("./docQAParse");
const { localLegalAnswer } = require("../localAI");
const { parseAnswer } = require("../localAI/answerStyle");

const prefSet = (t) => new Set(queryPrefixes(t));
const withNumberWords = (t) => expand(t).replace(/\d{1,4}/g, (n) => `${n} ${numWords(+n)}`);

function overlap(a, bSet) {
  if (!a.length) return 0;
  return a.filter((p) => bSet.has(p)).length / a.length;
}

let bank = null;
async function quizBank() {
  if (bank && Date.now() - bank.at < 10 * 60 * 1000) return bank.items;
  const quizzes = await Quiz.find({ published: true }).select("questions").lean();
  const items = quizzes.flatMap((z) => z.questions.map((q) => ({ p: prefSet(q.q), right: q.options[q.correct] || "" })));
  bank = { at: Date.now(), items };
  return items;
}

/** Sayt test bazasida xuddi shu savol bo'lsa — uning to'g'ri javobiga mos variant. */
function fromBank(q, items) {
  const own = [...prefSet(q.q)];
  let best = null;
  for (const it of items) {
    const inter = own.filter((p) => it.p.has(p)).length;
    const sim = inter / Math.max(own.length, it.p.size, 1);
    if (sim >= 0.75 && (!best || sim > best.sim)) best = { sim, it };
  }
  if (!best) return null;
  const right = prefSet(best.it.right);
  const scored = q.options.map((o) => ({ o, s: overlap([...prefSet(o.text)], right) }));
  scored.sort((a, b) => b.s - a.s);
  return scored[0].s >= 0.6 ? scored[0].o : null;
}

/** Dars mavzulari va qonun moddalaridan dalil — variant qanchalik tasdiqlanadi. */
async function fromSources(q) {
  const passages = [];
  searchTopics(q.q, 3).forEach((t, i) => {
    const tp = t.topic;
    const body = [tp.heading, tp.text, ...(tp.keyPoints || []), tp.example || ""].join(" ");
    passages.push({ set: prefSet(body), norm: normalize(body), w: 1 / (i + 1), ref: tp.lawRefs?.[0] ? `${tp.lawRefs[0].code} ${tp.lawRefs[0].article}-modda` : `«${tp.heading}» darsi` });
  });
  try {
    const state = await getIndex();
    const { hits } = await searchLaws(q.q, { limit: 4 });
    hits.forEach((h, i) => {
      const d = state.docs[h.docIdx];
      const body = `${d.title || ""} ${d.text || ""}`;
      passages.push({ set: prefSet(body), norm: normalize(body), w: 0.8 / (i + 1), ref: `${d.lawName}, ${d.articleNumber}-modda` });
    });
  } catch {
    /* indeks hali tayyor emas — faqat darslar */
  }
  /* Chat AI'ning to'liq zanjiri (vaziyat → niyat → dars → qonun) eng aniq
     moddani topadi — uning javobi eng kuchli dalil. Masalan "jinoiy javobgarlik
     necha yoshdan" oddiy qidiruvda Fuqarolik kodeksiga tushardi. */
  try {
    const r = await localLegalAnswer({ msg: q.q, lang: "uz" });
    if (r.found) {
      const p = parseAnswer(r.answer);
      const body = [p.title, ...p.summary, ...p.points, ...p.laws.map((l) => l.full || l.text)].join(" ");
      passages.push({ set: prefSet(body), norm: normalize(body), w: 1.3, main: true, ref: p.laws[0]?.name || p.title });
    }
  } catch {
    /* ixtiyoriy dalil */
  }
  const qSet = prefSet(q.q);
  const all = q.options.map((o) => [...prefSet(withNumberWords(o.text))]);
  // Barcha variantlarda yoki savolning o'zida bor so'zlar ajratuvchi emas
  const common = new Set(all[0].filter((p) => all.every((a) => a.includes(p))));
  const numRe = (o) => (o.text.match(/\d{1,4}/g) || []).map((n) => {
    const w = normalize(numWords(+n));
    return new RegExp(`(^|\\s)(${+n >= 1000 ? `${n}|${w}` : w})(\\s|$)`);
  });
  /* Raqamli variantlar asosiy dalilda (chat AI topgan modda) uchrasa — faqat
     o'sha matn hisobga olinadi: kuchsiz manbalardagi tasodifiy sonlar
     ("o'n to'rt" boshqa darsda) to'g'ri javobni bosib ketardi. */
  const main = passages.find((x) => x.main);
  const numericInMain = main && q.options.some((o) => numRe(o).some((re) => re.test(main.norm)));
  const scored = q.options.map((o, k) => {
    const own = all[k].filter((p) => !common.has(p) && !qSet.has(p));
    let s = 0;
    let ref = "";
    let top = 0;
    /* Raqamli variant ("18 yosh") — qonunda son SO'Z bilan yoziladi ("oʻn
       sakkiz yosh"). Bo'lak so'zlar ("bir", "ikki") deyarli har matnda bor,
       shuning uchun sonning TO'LIQ iborasi yoki raqamning o'zi qidiriladi. */
    /* 1000 dan kichik son faqat SO'Z shaklida: qonun matnida raqamlar asosan
       modda havolalari ("97, 98, 104-moddalari") — ular soxta moslik beradi. */
    const nums = (o.text.match(/\d{1,4}/g) || []).map((n) => {
      const w = normalize(numWords(+n));
      return [+n >= 1000 ? n : w, w];
    });
    let pos = Infinity;
    for (const ps of nums.length && numericInMain ? [main] : passages) {
      const v = (nums.length
        ? nums.filter(([d, w]) => new RegExp(`(^|\\s)(${d}|${w})(\\s|$)`).test(ps.norm)).length / nums.length
        : overlap(own, ps.set)) * ps.w;
      s += v;
      if (v > top) (top = v), (ref = ps.ref);
      // Eng kuchli dalildagi o'rni — teng holatda umumiy qoida (avval yozilgani) ustun
      if (nums.length && v > 0 && ps.w >= 1) {
        const at = ps.norm.search(new RegExp(`(^|\\s)(${nums[0][0]}|${nums[0][1]})(\\s|$)`));
        if (at >= 0) pos = Math.min(pos, at);
      }
    }
    return { o, s, ref, pos };
  });
  scored.sort((a, b) => (Math.abs(b.s - a.s) > 1e-9 ? b.s - a.s : a.pos - b.pos));
  const [a, b] = scored;
  if (!a || a.s === 0) return null;
  const margin = (a.s - (b?.s || 0)) / a.s;
  // Teng ball asosiy moddadagi tartib bilan hal qilingan (umumiy qoida avval yoziladi)
  const byOrder = margin < 0.2 && numericInMain && a.pos < (b?.pos ?? Infinity);
  const level = a.s >= 0.6 && margin >= 0.4 ? "high" : margin >= 0.2 || byOrder ? "mid" : "low";
  return { o: a.o, level, ref: a.ref };
}

const LV = {
  uz: { key: "Hujjatdagi kalit", bank: "Sayt test bazasi", high: "Yuqori", mid: "O'rta", low: "Past", none: "Aniqlanmadi" },
  ru: { key: "Ключ в документе", bank: "База тестов сайта", high: "Высокая", mid: "Средняя", low: "Низкая", none: "Не определено" },
};

/** @returns {Promise<string|null>} Markdown javob yoki null (savollar topilmasa). */
async function answerSheet(text, fileName, lang = "uz") {
  const qs = parseQuestions(text).slice(0, 80);
  if (!isTestLike(qs)) return null;
  const L = LV[lang] || LV.uz;
  const key = answerKey(text);
  const items = await quizBank().catch(() => []);
  const rows = [];
  for (const q of qs) {
    const k = key[q.n] && q.options.find((o) => o.key === key[q.n]);
    if (k) { rows.push({ q, o: k, conf: L.key, ref: "" }); continue; }
    const b = fromBank(q, items);
    if (b) { rows.push({ q, o: b, conf: L.bank, ref: "" }); continue; }
    const r = await fromSources(q);
    rows.push(r ? { q, o: r.o, conf: L[r.level], ref: r.ref } : { q, o: null, conf: L.none, ref: "" });
  }
  const ru = lang === "ru";
  const cell = (s) => String(s).replace(/\|/g, "/").slice(0, 90);
  const table = rows.map((r) => `| ${r.q.n} | ${r.o ? `**${r.o.key}**) ${cell(r.o.text)}` : "—"} | ${r.conf} | ${cell(r.ref) || "—"} |`);
  const low = rows.filter((r) => !r.o || r.conf === L.low || r.conf === L.none).map((r) => r.q.n);
  return [
    `**${ru ? "Лист ответов" : "Javoblar varaqasi"}${fileName ? ` — ${fileName}` : ""}**`,
    ru ? `Найдено вопросов: ${rows.length}.` : `Hujjatda ${rows.length} ta test savoli topildi.`,
    `**${ru ? "Кратко" : "Qisqa varaq"}:** ${rows.map((r) => `${r.q.n}-${r.o ? r.o.key : "?"}`).join(", ")}`,
    // Jadval sarlavhasi va qatorlari BITTA blokda (bo'sh qator jadvalni buzadi)
    `${ru ? "| № | Ответ | Надёжность | Основание |" : "| № | Javob | Ishonch | Asos |"}\n|---|---|---|---|\n${table.join("\n")}`,
    low.length
      ? (ru ? `⚠️ Вопросы ${low.join(", ")} — низкая надёжность: сверьте с текстом закона.` : `⚠️ ${low.join(", ")}-savollar — ishonch past: ularni qonun matni bilan tekshiring.`)
      : "",
    ru
      ? "_Ответы определены по ключу в документе, базе тестов сайта и официальным текстам законов. Это помощь в подготовке — проверяйте спорные ответы._"
      : "_Javoblar hujjatdagi kalit, sayt test bazasi va rasmiy qonun matnlariga solishtirib aniqlandi. Bu tayyorgarlik uchun yordam — shubhali javoblarni tekshiring._",
  ].filter(Boolean).join("\n\n");
}

module.exports = { answerSheet, parseQuestions, answerKey, isTestLike };
