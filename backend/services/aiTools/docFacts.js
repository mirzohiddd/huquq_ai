"use strict";
/**
 * HUJJAT TAHLILI — HUJJATNING O'ZIDAN FAKTLAR AJRATISH.
 *
 * Bu yerdagi har bir natija hujjat matnida YOZILGAN narsa: sana, summa,
 * foiz, modda havolasi, e'tibor talab qiladigan band. Hech narsa
 * taxmin qilinmaydi — topilmasa ro'yxat shunchaki bo'sh qoladi.
 */
const { sentences, words } = require("../localAI/text");

const TYPES = [
  { id: "claim", re: /da['ʼ‘’`]?vo ariza|исков\S* заявлен/i, uz: "Da'vo arizasi", ru: "Исковое заявление" },
  { id: "complaint", re: /shikoyat|жалоб/i, uz: "Shikoyat", ru: "Жалоба" },
  { id: "power", re: /ishonchnoma|доверенност/i, uz: "Ishonchnoma", ru: "Доверенность" },
  { id: "will", re: /vasiyatnoma|завещани/i, uz: "Vasiyatnoma", ru: "Завещание" },
  { id: "receipt", re: /tilxat|расписк/i, uz: "Tilxat (qarz tilxati)", ru: "Расписка" },
  { id: "labor", re: /mehnat shartnoma|трудов\S* договор/i, uz: "Mehnat shartnomasi", ru: "Трудовой договор" },
  { id: "lease", re: /ijara shartnoma|договор\S* аренд|найм/i, uz: "Ijara shartnomasi", ru: "Договор аренды" },
  { id: "sale", re: /oldi[- ]sotdi|купли[- ]продаж/i, uz: "Oldi-sotdi shartnomasi", ru: "Договор купли-продажи" },
  { id: "loan", re: /qarz shartnoma|договор\S* займ/i, uz: "Qarz shartnomasi", ru: "Договор займа" },
  { id: "contract", re: /shartnoma|договор/i, uz: "Shartnoma", ru: "Договор" },
  { id: "order", re: /\bbuyruq|приказ/i, uz: "Buyruq", ru: "Приказ" },
  { id: "decision", re: /hal qiluv qaror|ajrim|\bqaror|решени|постановлени|определени/i, uz: "Qaror / ajrim", ru: "Решение / постановление" },
  { id: "act", re: /dalolatnoma|\bакт\b/i, uz: "Dalolatnoma", ru: "Акт" },
  { id: "application", re: /ariza|заявлени/i, uz: "Ariza", ru: "Заявление" },
  { id: "law", re: /\d+[-‑]modda|статья \d+/i, uz: "Normativ-huquqiy hujjat", ru: "Нормативно-правовой акт" },
];

/* Hujjat turi → odatda tegishli kodekslar (qonun qidiruvini toraytirish uchun) */
const TYPE_CODES = {
  labor: ["MK"], lease: ["FK2", "UJK"], sale: ["FK2", "FK"], loan: ["FK2", "FK"], contract: ["FK", "FK2"],
  receipt: ["FK2", "FK"], will: ["FK2"], power: ["FK"], claim: ["FPK", "IPK"], complaint: ["MSK", "FPK"],
};

function detectType(text) {
  const head = text.slice(0, 1500);
  return TYPES.find((t) => t.re.test(head)) || TYPES.find((t) => t.re.test(text)) || null;
}

const uniq = (arr, max) => [...new Set(arr.map((s) => s.replace(/\s+/g, " ").trim()))].slice(0, max);
const all = (text, re) => [...text.matchAll(re)].map((m) => m[0]);

const MONTHS = "yanvar|fevral|mart|aprel|may|iyun|iyul|avgust|sentyabr|oktyabr|noyabr|dekabr|январ\\S*|феврал\\S*|март\\S*|апрел\\S*|мая|май|июн\\S*|июл\\S*|август\\S*|сентябр\\S*|октябр\\S*|ноябр\\S*|декабр\\S*";

function facts(text) {
  return {
    dates: uniq(
      [
        ...all(text, /\b\d{1,2}[./]\d{1,2}[./](?:19|20)\d{2}\b/g),
        ...all(text, new RegExp(`\\b(?:19|20)\\d{2}[- ]yil\\S*\\s+\\d{1,2}[- ]?(?:${MONTHS})\\S*`, "giu")),
        ...all(text, new RegExp(`\\b\\d{1,2}\\s+(?:${MONTHS})\\s+(?:19|20)\\d{2}`, "giu")),
      ],
      8,
    ),
    amounts: uniq(all(text, /\b\d[\d\s.,]{0,15}\d?\s?(?:so['ʼ‘’`]?m|сум\S*|UZS|AQSH dollari|долл\S*|\$|евро|EUR|USD)/giu), 8),
    percents: uniq(all(text, /\b\d+(?:[.,]\d+)?\s?(?:%|foiz|процент\S*)/giu), 6),
    periods: uniq(all(text, /\b\d+\s?(?:\(\S+\)\s?)?(?:kun|oy|yil|hafta|ish kuni|дн\S*|день|месяц\S*|год\S*|лет|недел\S*)\b/giu), 8),
  };
}

/* E'tibor talab qiladigan bandlar: javobgarlik, jarima, bir tomonlama
   bekor qilish, qaytarilmaydigan to'lov, avtomatik uzaytirish va h.k. */
const RISKS = [
  /jarima|penya|neustoyka|штраф|пен[ия]|неустойк/i,
  /bir tomonlama|одностороннем/i,
  /qaytarilmaydi|qaytarib berilmaydi|не возвраща/i,
  /javobgar emas|javobgarlikdan ozod|не несет ответственн|не несёт ответственн/i,
  /avtomatik\S* (uzaytir|davom)|автоматически продлева|пролонгир/i,
  /garov|kafil|залог|поручител/i,
  /oldindan to['ʼ‘’`]?lov|avans|предоплат|аванс/i,
  /sud(da)? .*hal qilin|arbitraj|подсудност|третейск/i,
  /maxfiy|oshkor qilinmaydi|конфиденциальн/i,
];

function riskClauses(text, max = 6) {
  const out = [];
  for (const s of sentences(text)) {
    if (s.length < 25 || s.length > 600) continue;
    if (RISKS.some((re) => re.test(s))) out.push(s);
    if (out.length >= max) break;
  }
  return out;
}

/** Ekstraktiv qisqa mazmun: eng ko'p uchraydigan ma'noli so'zlarga boy jumlalar. */
function summary(text, max = 4) {
  const sents = sentences(text).filter((s) => s.length >= 40 && s.length <= 400);
  if (!sents.length) return [];
  const freq = new Map();
  for (const w of words(text)) freq.set(w, (freq.get(w) || 0) + 1);
  const scored = sents.map((s, i) => {
    const ws = words(s);
    const score = ws.reduce((a, w) => a + Math.log(1 + (freq.get(w) || 0)), 0) / Math.sqrt(ws.length || 1);
    return { s, i, score: score * (i < 5 ? 1.25 : 1) };
  });
  return scored
    .sort((a, b) => b.score - a.score)
    .slice(0, max)
    .sort((a, b) => a.i - b.i)
    .map((x) => x.s);
}

/** Eng ko'p uchraydigan ma'noli so'zlar (qonun qidiruvi so'rovi uchun). */
function keywords(text, max = 8) {
  const freq = new Map();
  for (const w of words(text)) if (!/^\d+$/.test(w) && w.length >= 5) freq.set(w, (freq.get(w) || 0) + 1);
  return [...freq.entries()].sort((a, b) => b[1] - a[1]).slice(0, max).map(([w]) => w);
}

module.exports = { detectType, facts, riskClauses, summary, keywords, TYPE_CODES };
