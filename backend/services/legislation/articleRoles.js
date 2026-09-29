"use strict";
/**
 * MODDA MATNIDAN AJRATIB OLINADIGAN BLOKLAR — "Huquqlar", "Majburiyatlar",
 * "Javobgarlik", "Kimlarga tegishli", "Tegishli moddalar/qonunlar".
 *
 * ⚠️ Bu yerda HECH NARSA YOZILMAYDI — faqat RASMIY matnning o'z
 * jumlalari tanlanadi (huquq/majburiyat/javobgarlik belgisi bor
 * jumla). Frontend buni "rasmiy matndan ajratilgan" deb ko'rsatadi,
 * ya'ni foydalanuvchi platforma izohi bilan qonun matnini adashtirmaydi.
 */

const RULES = {
  uz: {
    rights: /huquq(i|l)|haqli|huquqiga ega|mumkin\b/i,
    duties: /\bshart\b|majbur|lozim\b|kerak\b|zarur\b|bajarishi|taqiqlan/i,
    liability: /javobgar|jarima|jazo|ozodlikdan mahrum|axloq tuzatish|undiril|hibs/i,
  },
  ru: {
    rights: /вправе|имеет право|имеют право|может|могут|праве/i,
    duties: /обязан|должен|должны|необходимо|запрещ|не допуска/i,
    liability: /ответственност|штраф|наказыва|лишени(е|ем) свободы|исправительн|арест|взыскан/i,
  },
};

/* Matnda tilga olingan subyektlar (kimlarga tegishli). O'zak bo'yicha. */
const SUBJECTS = [
  ["fuqaro", "Fuqarolar", "граждан", "Граждане"],
  ["xodim", "Xodimlar", "работник", "Работники"],
  ["ish beruvchi", "Ish beruvchilar", "работодател", "Работодатели"],
  ["er-xotin", "Er va xotin", "супруг", "Супруги"],
  ["ota-ona", "Ota-onalar", "родител", "Родители"],
  ["voyaga yetmagan", "Voyaga yetmaganlar", "несовершеннолетн", "Несовершеннолетние"],
  ["bola", "Bolalar", "ребен", "Дети"],
  ["iste'molchi", "Iste'molchilar", "потребител", "Потребители"],
  ["sotuvchi", "Sotuvchilar", "продав", "Продавцы"],
  ["soliq to'lovchi", "Soliq to'lovchilar", "налогоплательщик", "Налогоплательщики"],
  ["yuridik shaxs", "Yuridik shaxslar", "юридическ", "Юридические лица"],
  ["tadbirkor", "Tadbirkorlar", "предпринимател", "Предприниматели"],
  ["mansabdor", "Mansabdor shaxslar", "должностн", "Должностные лица"],
  ["davlat organ", "Davlat organlari", "государственн", "Государственные органы"],
  ["sud", "Sudlar", "суд", "Суды"],
  ["prokuror", "Prokuratura", "прокурор", "Прокуратура"],
  ["gumon qilinuvchi", "Gumon qilinuvchilar", "подозреваем", "Подозреваемые"],
  ["ayblanuvchi", "Ayblanuvchilar", "обвиняем", "Обвиняемые"],
  ["jabrlanuvchi", "Jabrlanuvchilar", "потерпевш", "Потерпевшие"],
  ["chet el fuqaro", "Chet el fuqarolari", "иностранн", "Иностранные граждане"],
  ["merosxo'r", "Merosxo'rlar", "наследник", "Наследники"],
  ["voris", "Vorislar", "наследник", "Наследники"],
  ["mulkdor", "Mulkdorlar", "собственник", "Собственники"],
];

const norm = (s = "") => s.toLowerCase().replace(/[’ʻʼ‘`]/g, "'");

function splitSentences(text = "") {
  return String(text)
    .split(/\n+|(?<=[.;:])\s+(?=[A-ZА-ЯЎҚҒҲ0-9«"(])/u)
    .map((s) => s.trim())
    .filter((s) => s.length > 15);
}

/** { rights[], duties[], liability[] } — har birida ko'pi bilan 4 jumla. */
function extractRoles(text, lang = "uz") {
  const r = RULES[lang] || RULES.uz;
  const out = { rights: [], duties: [], liability: [] };
  for (const s of splitSentences(text)) {
    if (r.liability.test(s)) out.liability.push(s);
    else if (r.duties.test(s)) out.duties.push(s);
    else if (r.rights.test(s)) out.rights.push(s);
  }
  for (const k of Object.keys(out)) out[k] = out[k].slice(0, 4);
  return out;
}

function extractSubjects(text, lang = "uz") {
  const t = norm(text);
  const seen = new Set();
  for (const [uzStem, uz, ruStem, ru] of SUBJECTS) {
    const hit = lang === "ru" ? t.includes(ruStem) : new RegExp(`(^|[^a-z'])${uzStem}`).test(t);
    if (hit) seen.add(lang === "ru" ? ru : uz);
  }
  return [...seen].slice(0, 8);
}

/**
 * Shu hujjatning boshqa moddalariga havolalar (o'zi bundan mustasno).
 * uz: "23-moddasi", "23 va 25-moddalar"; ru: "статьей 23", "статьи 23".
 */
function crossRefs(text, own, existing) {
  const nums = new Set();
  const add = (n) => n && n !== own && existing.has(n) && nums.add(n);
  for (const m of String(text).matchAll(/(\d+(?:-\d+)?)-modda/gi)) add(m[1]);
  for (const m of String(text).matchAll(/стать[а-я]*\s+(\d+(?:-\d+)?)/gi)) add(m[1]);
  return [...nums].slice(0, 12);
}

/* Matnda boshqa hujjat nomi tilga olinsa — "Tegishli boshqa qonunlar". */
function relatedLaws(text, laws, ownCode) {
  const t = norm(text);
  const out = [];
  for (const law of laws) {
    if (law.code === ownCode) continue;
    const key = norm(law.name).replace(/\s*\(.*\)\s*/g, "").trim();
    const keyRu = norm(law.nameI18n?.ru || "").replace(/\s*\(.*\)\s*/g, "").trim();
    /* So'zlar qo'shimcha bilan kelishi mumkin ("Mehnat kodeksida") —
       har bir so'zning boshi olinadi. */
    const esc = (w) => w.slice(0, 6).replace(/[.*+?^${}()|[\]\\]/g, "\\$&");
    const re = (k) => new RegExp(k.split(/\s+/).map(esc).join("\\S*\\s+"), "u");
    if ((key && re(key).test(t)) || (keyRu && re(keyRu).test(t))) {
      out.push(law.code);
    }
  }
  return out;
}

module.exports = { extractRoles, extractSubjects, crossRefs, relatedLaws };
