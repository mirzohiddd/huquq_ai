"use strict";
/**
 * OVOZ UCHUN MATN TAYYORLASH (2026-10-14).
 *
 * Foydalanuvchi: "ovoz robotga yoki tili chuchuk odamga o'xshaydi".
 * O'lchab topilgan sabablar (Edge audiosi Whisper bilan qayta matnga
 * aylantirib solishtirildi):
 *   1. ODDIY APOSTROF — "to'lash" → "talaş", "O'g'il" → "Agil": o'zbek
 *      ovozi `'` ni oʻ/gʻ belgisi deb tanimaydi va "o" o'rniga "a" o'qiydi.
 *      Rasmiy belgi `ʻ` (U+02BB) bilan "tolaş", "Oghul" — to'g'ri.
 *   2. "253-modda" raqam sifatida o'qiladi — tartib son ("ikki yuz ellik
 *      uchinchi") bo'lishi kerak.
 *   3. Markdown, «», "…", izoh satrlari va pauzasiz qator uzilishlari —
 *      gap ohangi uzilib, "robot" kabi bir tekis o'qilardi.
 */

const ONES = ["", "bir", "ikki", "uch", "toʻrt", "besh", "olti", "yetti", "sakkiz", "toʻqqiz"];
const TENS = ["", "oʻn", "yigirma", "oʻttiz", "qirq", "ellik", "oltmish", "yetmish", "sakson", "toʻqson"];

function numWords(n) {
  if (n === 0) return "nol";
  const parts = [];
  const th = Math.floor(n / 1000);
  if (th) parts.push(th === 1 ? "bir ming" : `${numWords(th)} ming`);
  const h = Math.floor((n % 1000) / 100);
  if (h) parts.push(h === 1 ? "bir yuz" : `${ONES[h]} yuz`);
  const t = Math.floor((n % 100) / 10);
  if (t) parts.push(TENS[t]);
  if (n % 10) parts.push(ONES[n % 10]);
  return parts.join(" ");
}

/** 253 → "ikki yuz ellik uchinchi" */
function ordinalWords(n) {
  const w = numWords(n);
  return /[aeiouʻ]$/i.test(w) ? `${w}nchi` : `${w}inchi`;
}

/** Oʻzbek lotin yozuvidagi apostroflarni rasmiy belgilarga keltiradi. */
function fixApostrophes(s) {
  return s
    .replace(/([oOgG])['’`‘ʼ´]/g, "$1ʻ")
    .replace(/([A-Za-zʻ])['’`‘´](?=[A-Za-z])/g, "$1ʼ");
}

/**
 * @param {string} text  AI javobi (markdown)
 * @param {string} lang  "uz" | "ru"
 */
function prepareSpeech(text, lang = "uz") {
  let lines = String(text || "")
    .split("\n")
    .map((l) => l.trim())
    .filter((l) => l && l !== "…" && !/^📖/.test(l) && !/^_.*_$/.test(l));

  lines = lines.map((l) => {
    let x = l
      .replace(/\*\*/g, "")
      .replace(/^[•\-–]\s*/, "")
      .replace(/^(\d+)\.\s+/, "")
      .replace(/[«»"“”]/g, "")
      .replace(/\s*[—–]\s*/g, ", ")
      .replace(/…/g, ".")
      .replace(/⚠️|✅|📌|📝/gu, "")
      .trim();
    // Satr oxirida tinish belgisi bo'lmasa — nuqta (tabiiy pauza va ohang tushishi)
    if (x && !/[.!?:;,]$/.test(x)) x += ".";
    return x;
  });

  let out = lines.join("\n");
  if (lang === "uz") {
    out = fixApostrophes(out)
      // "253-modda", "15-moddasida", "2-bob" → tartib son
      .replace(/\b(\d{1,4})-(?=[a-zʻ])/gi, (_, n) => `${ordinalWords(+n)} `);
  }
  return out.replace(/[ \t]{2,}/g, " ");
}

module.exports = { prepareSpeech, ordinalWords, numWords, fixApostrophes };
