"use strict";
/**
 * DARSDAGI "BU JOYNI TUSHUNTIRIB BER" SAVOLI (2026-10-28).
 *
 * Darslar sahifasi (frontend/src/pages/Lessons.jsx → buildExplainPrompt)
 * chatga uzun matn yuboradi: ko'rsatma + "Dars: …" + "Bo'lim: …" + bo'lim
 * matni. Oddiy qidiruv bunday uzun matnda ishonchli mavzu topa olmay
 * "topilmadi" qaytarardi — vaholanki o'sha mavzu darslar indeksida bor.
 * Endi bo'lim sarlavhasi bo'yicha AYNAN o'sha mavzu olinadi.
 */
const { getTopicIndex, searchTopics } = require("./lessonTopics");
const crypto = require("crypto");
const { normalize } = require("./text");

const HEAD_RE = /(?:^|\n)\s*(?:Bo['‘’ʻʼ`]?lim|Раздел)\s*:\s*(.+)/i;
const LESSON_RE = /(?:^|\n)\s*(?:Dars|Урок)\s*:\s*(.+)/i;

const norm = (s = "") => normalize(s).replace(/\s+/g, " ").trim();

/** Savol darsdagi tushuntirish so'rovimi — bo'lsa { lesson, heading, body } */
function parseExplain(msg = "") {
  const h = HEAD_RE.exec(msg);
  if (!h) return null;
  const l = LESSON_RE.exec(msg);
  const body = msg.slice(h.index + h[0].length).trim();
  return { lesson: l ? l[1].trim() : "", heading: h[1].trim(), body };
}

/* Rus tilida dars sarlavhasi TARJIMA qilingan keladi — asl o'zbekcha
   sarlavha tarjima keshidan (Translation: hash = sha1(asl matn)) topiladi. */
let byHash = null;
async function fromTranslation(heading) {
  if (!/[а-яё]/i.test(heading)) return null;
  try {
    const { Translation } = require("../../models");
    const row = await Translation.findOne({ lang: "ru", text: heading }).select("hash").lean();
    if (!row) return null;
    if (!byHash) {
      byHash = new Map();
      for (const t of getTopicIndex().topics) {
        const h = crypto.createHash("sha1").update(t.heading, "utf8").digest("hex");
        if (!byHash.has(h)) byHash.set(h, t);
      }
    }
    return byHash.get(row.hash) || null;
  } catch {
    return null; // baza bo'lmasa — oddiy qidiruvga o'tiladi
  }
}

/** Mos dars mavzusi (topilmasa null) */
async function findExplainTopic(msg) {
  const p = parseExplain(msg);
  if (!p) return null;
  const { topics } = getTopicIndex();
  const head = norm(p.heading);
  const lesson = norm(p.lesson);
  const same = topics.filter((t) => norm(t.heading) === head);
  if (same.length) return same.find((t) => norm(t.lesson) === lesson) || same[0];

  const tr = await fromTranslation(p.heading);
  if (tr) return tr;

  // Sarlavha o'zgargan/tarjima qilingan bo'lsa — sarlavha + matn boshi bo'yicha
  const hits = searchTopics(`${p.heading} ${p.body.slice(0, 300)}`, 3);
  const [best, next] = hits;
  // Matnning deyarli hammasi bitta mavzuda va u boshqalardan aniq ajralib turadi
  if (best && best.coverage >= 0.8 && (!next || best.score >= 1.8 * next.score)) return best.topic;
  return null;
}

module.exports = { parseExplain, findExplainTopic };
