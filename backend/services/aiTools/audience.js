"use strict";
/**
 * AI VOSITALAR — AUDITORIYA (SINF) VA TIL BO'YICHA MOSLASHTIRISH.
 *
 * Sinf darajasi kontent HAJMINI va uslubini belgilaydi: kichik sinflarga
 * kamroq band, ko'proq misol; yuqori sinf, talaba va kattalarga — qonun
 * iqtiboslari va chuqurroq tafsilot. Kontentning o'zi o'zgarmaydi
 * (u tekshirilgan darslardan keladi).
 */
const { translateMany, translateManyCached } = require("../translator");
const { isUzCyrillic, uzCyrToLatin } = require("../localAI/text");

/* Darslar bilim bazasi o'zbek (lotin) tilida. Mavzu kirill o'zbekcha bo'lsa —
   lotinga o'giriladi, ruscha bo'lsa — qidiruv uchun o'zbekchaga tarjima
   qilinadi (kesh + AI, 8 s chegara; bo'lmasa asl matn bilan qidiriladi). */
/* Tarjima xizmati ishlamasa — eng ko'p uchraydigan huquqiy atamalar lug'ati */
const RU_UZ = [
  [/труд/, "mehnat"], [/договор/, "shartnoma"], [/брак/, "nikoh"], [/конституц/, "konstitutsiya"],
  [/наслед|завещ/, "meros"], [/налог/, "soliq"], [/потребител/, "iste'molchi"], [/сем[ьей]/, "oila"],
  [/земл/, "yer"], [/жил/, "uy-joy"], [/уголов|преступ/, "jinoyat"], [/администр/, "ma'muriy"],
  [/алимент/, "aliment"], [/развод|расторжен/, "ajrashish"], [/прав/, "huquqlari"], [/зарплат|заработ/, "ish haqi"],
  [/отпуск/, "ta'til"], [/увольн/, "ishdan bo'shatish"], [/наказан/, "jazo"], [/суд/, "sud"], [/гражданств/, "fuqarolik"],
];
const byDictionary = (t) => RU_UZ.filter(([re]) => re.test(t.toLowerCase())).map(([, w]) => w).join(" ");

async function topicToUz(topic) {
  if (!/[а-яё]/i.test(topic)) return topic;
  if (isUzCyrillic(topic)) return uzCyrToLatin(topic);
  try {
    const r = await Promise.race([translateMany([topic], "uz"), new Promise((res) => setTimeout(() => res(null), 8000))]);
    if (r?.[0] && r[0] !== topic) return r[0];
  } catch {
    /* lug'atga o'tiladi */
  }
  return byDictionary(topic) || topic;
}

const LEVELS = {
  junior: { bullets: 3, quote: false, label: { uz: "boshlang'ich", ru: "начальный" } },
  middle: { bullets: 3, quote: true, label: { uz: "o'rta", ru: "средний" } },
  senior: { bullets: 4, quote: true, label: { uz: "yuqori", ru: "старший" } },
  adult: { bullets: 4, quote: true, label: { uz: "kattalar", ru: "взрослые" } },
};

/** "5".."11" | "student" | "adult" → daraja */
function levelOf(grade) {
  const g = String(grade || "").toLowerCase();
  const n = parseInt(g, 10);
  if (n >= 1 && n <= 7) return "junior";
  if (n >= 8 && n <= 9) return "middle";
  if (n >= 10 && n <= 11) return "senior";
  return "adult";
}

/** Auditoriya nomi: "9-sinf" / "9 класс" / "Talabalar" … */
function gradeLabel(grade, lang) {
  const g = String(grade || "").toLowerCase();
  const n = parseInt(g, 10);
  if (n >= 1 && n <= 11) return lang === "ru" ? `${n} класс` : `${n}-sinf`;
  if (g === "student") return lang === "ru" ? "Студенты" : "Talabalar";
  return lang === "ru" ? "Взрослая аудитория" : "Kattalar auditoriyasi";
}

const clampInt = (v, min, max, def) => {
  const n = parseInt(v, 10);
  return Number.isFinite(n) ? Math.min(max, Math.max(min, n)) : def;
};

/* Tarjima qilinmaydigan maydonlar — kodlar, raqamlar va rasmiy rus
   matni allaqachon kelgan qonun iqtiboslari. */
const SKIP = new Set(["code", "article", "law", "lawTitle", "quote", "id", "type", "layout", "grade", "lang", "correct", "minutes", "source"]);

function collect(node, out, key) {
  if (typeof node === "string") {
    if (!SKIP.has(key) && node.trim()) out.push(node);
    return;
  }
  if (Array.isArray(node)) node.forEach((v) => collect(v, out, key));
  else if (node && typeof node === "object") for (const [k, v] of Object.entries(node)) collect(v, out, k);
}

function apply(node, map, key) {
  if (typeof node === "string") return !SKIP.has(key) && map.has(node) ? map.get(node) : node;
  if (Array.isArray(node)) return node.map((v) => apply(v, map, key));
  if (node && typeof node === "object") {
    const o = {};
    for (const [k, v] of Object.entries(node)) o[k] = apply(v, map, k);
    return o;
  }
  return node;
}

/**
 * Ruscha so'ralsa — dars matnlari tarjima qilinadi (kesh + AI tarjima).
 * Tarjima kechiksa yoki ishlamasa, keshdagisi bilan qaytadi va
 * `partial: true` belgilanadi (UI buni halol ko'rsatadi).
 */
async function localize(obj, lang, timeoutMs = 12000) {
  if (lang !== "ru") return { data: obj, partial: false };
  const texts = [];
  collect(obj, texts, "");
  const uniq = [...new Set(texts)];
  if (!uniq.length) return { data: obj, partial: false };
  const full = translateMany(uniq, "ru").then((r) => ({ r, partial: false }));
  const timer = new Promise((res) =>
    setTimeout(async () => {
      const { result } = await translateManyCached(uniq, "ru").catch(() => ({ result: uniq }));
      res({ r: result, partial: true });
    }, timeoutMs),
  );
  const { r, partial } = await Promise.race([full, timer]).catch(() => ({ r: uniq, partial: true }));
  const map = new Map(uniq.map((s, i) => [s, r[i] || s]));
  const changed = uniq.filter((s, i) => r[i] && r[i] !== s).length;
  return { data: apply(obj, map, ""), partial: partial || changed < uniq.length * 0.6 };
}

module.exports = { LEVELS, levelOf, gradeLabel, clampInt, localize, topicToUz };
