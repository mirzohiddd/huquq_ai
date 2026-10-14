"use strict";
/**
 * Hujjat matnidan TEST SAVOLLARI va JAVOBLAR KALITINI ajratish (docQA.js uchun).
 * Qo'llab-quvvatlanadigan shakllar: "1." / "1)" savol, "A)" / "A." / "А)"
 * (kirill) variant — alohida qatorda yoki bitta qatorda ketma-ket.
 */
const LETTERS = "ABCDEF";
const CYR = { А: "A", Б: "B", В: "C", Г: "D", Д: "E" };
const letterOf = (c) => CYR[c.toUpperCase()] || c.toUpperCase();

const Q_START = /^\s*(\d{1,3})\s*[.)]\s*(.*)$/;
const OPT = /^\s*([A-Fa-fА-Да-д])\s*[).]\s*(.+)$/;

/** Hujjat matnidan raqamlangan savollar va A)/B)… variantlarini ajratadi. */
function parseQuestions(text) {
  const out = [];
  let cur = null;
  const lines = String(text || "")
    .split("\n")
    .flatMap((l) => l.split(/\s+(?=[A-FА-Д]\s*\)\s)/));
  for (const raw of lines) {
    const line = raw.trim();
    if (!line) continue;
    const opt = OPT.exec(line);
    const q = Q_START.exec(line);
    if (opt && cur) cur.options.push({ key: letterOf(opt[1]), text: opt[2].trim() });
    else if (q && (!cur || cur.options.length || !cur.q)) {
      cur = { n: +q[1], q: q[2].trim(), options: [] };
      out.push(cur);
    } else if (cur && !cur.options.length) cur.q = `${cur.q} ${line}`.trim();
    else if (cur) cur.options[cur.options.length - 1].text += ` ${line}`;
  }
  return out.filter((x) => x.q && x.options.length >= 2);
}

/** Hujjatdagi javoblar kaliti: "Javoblar: 1-B, 2-A" / "Ответы: 1) В". */
function answerKey(text) {
  const m = /(javoblar|javob kaliti|kalit|to.g.ri javoblar|ответы|ключ)\s*[:\-]?([\s\S]{0,4000})$/i.exec(text);
  if (!m) return {};
  const key = {};
  for (const x of m[2].matchAll(/(\d{1,3})\s*[-–.)]\s*([A-FА-Д])\b/g)) key[+x[1]] = letterOf(x[2]);
  return key;
}

// Test variantlaridagi qisqartmalar → qonundagi atama ("FHDYo organi" → OK 13-modda)
const ABBR = {
  fhdyo: "fuqarolik holati dalolatnomalarini qayd etish organi", zags: "fuqarolik holati dalolatnomalarini qayd etish organi",
  iib: "ichki ishlar organi", iiv: "ichki ishlar vazirligi", dxx: "davlat xavfsizlik xizmati", mib: "majburiy ijro byurosi",
};
const expand = (t) => t.replace(/[A-Za-zА-Яа-я']+/g, (w) => ABBR[w.toLowerCase().replace(/'/g, "")] || w);

/** Haqiqiy testmi: shartnomadagi "1. … a) … b)" bandlari emas — savollarning ko'pi "?" bilan tugaydi. */
const isTestLike = (qs) => qs.length >= 2 && qs.filter((q) => /\?\s*$/.test(q.q)).length >= qs.length / 2;

module.exports = { parseQuestions, answerKey, expand, letterOf, isTestLike };
