"use strict";
/**
 * PDF fayldan test savollarini chiqarib oladi (dars PDF parseridan
 * mustaqil — u sarlavha/bo'lim tuzilmasini, bu esa savol/variant/
 * to'g'ri javob tuzilmasini qidiradi).
 *
 * Kutilayotgan PDF formati (admin shu ko'rinishda tayyorlashi kerak):
 *   1. Savol matni?
 *   A) Birinchi variant
 *   B) Ikkinchi variant
 *   C) Uchinchi variant
 *   Javob: B
 *   Izoh: ixtiyoriy tushuntirish
 *
 * PDF ichida NECHTA shunday savol bo'lsa, hammasi aniqlanib qaytariladi
 * (soni qattiq belgilanmagan) — admin qayta PDF yuklasa, oldingi
 * savollar yangisi bilan almashadi.
 */
const { buildLines } = require("./textExtraction");
const { stripHeaderFooter } = require("./headerFooter");

const MAX_PAGES = 200;

const QUESTION_RE = /^(\d{1,3})[.)]\s*(.+)$/;
const OPTION_RE = /^([A-Fa-f])[.)]\s*(.+)$/;
const ANSWER_RE = /^(?:to'?g'?ri\s*javob|javob(?:i)?)\s*[:\-]\s*([A-Fa-f]|\d+)\.?\s*$/i;
const EXPLAIN_RE = /^(?:izoh|tushuntirish)\s*[:\-]\s*(.+)$/i;
const TRAILING_CORRECT_MARK_RE = /\s*(\*|\(to'?g'?ri\)|\[to'?g'?ri\])\s*$/i;

function letterToIndex(letter) {
  return "abcdef".indexOf(letter.toLowerCase());
}

async function extractLines(buffer, warnings) {
  const pdfjsLib = await import("pdfjs-dist/legacy/build/pdf.mjs");
  const data = new Uint8Array(buffer);
  const doc = await pdfjsLib.getDocument({
    data,
    disableWorker: true,
    useSystemFonts: true,
    isEvalSupported: false,
  }).promise;

  const pageCount = Math.min(doc.numPages, MAX_PAGES);
  if (doc.numPages > MAX_PAGES) {
    warnings.push(
      `Hujjat ${doc.numPages} sahifadan iborat, faqat birinchi ${MAX_PAGES} tasi qayta ishlandi.`,
    );
  }

  const pagesLines = [];
  for (let pageNum = 1; pageNum <= pageCount; pageNum++) {
    const page = await doc.getPage(pageNum);
    const viewport = page.getViewport({ scale: 1 });
    const content = await page.getTextContent();
    pagesLines.push(buildLines(content.items, viewport.height, pageNum));
    page.cleanup();
  }
  await doc.destroy();

  const cleanedPages = stripHeaderFooter(pagesLines, pageCount);
  return { lines: cleanedPages.flat(), pageCount: doc.numPages };
}

function finalizeQuestion(current, index, warnings) {
  const options = current.options.map((o) => o.text.trim()).filter(Boolean);
  if (!current.q.trim() || options.length < 2) {
    warnings.push(`${index}-savol o'tkazib yuborildi — matn yoki variantlar yetarli emas.`);
    return null;
  }

  let correct = current.correct;
  if (correct == null) {
    const marked = current.options.findIndex((o) => o.marked);
    correct = marked >= 0 ? marked : 0;
    if (marked < 0) {
      warnings.push(
        `${index}-savol: to'g'ri javob aniqlanmadi, birinchi variant vaqtincha belgilandi — tekshirib qo'ying.`,
      );
    }
  }
  if (correct < 0 || correct >= options.length) correct = 0;

  return {
    q: current.q.trim(),
    options,
    correct,
    explain: current.explain.trim(),
  };
}

/**
 * `lines` — {text}[] (sahifalar bo'ylab ketma-ket, header/footer olib
 * tashlangan) — savol/variant/javob/izoh qatorlarini aniqlab, tuzilgan
 * savollar ro'yxatiga aylantiradi. Sof funksiya — pdfjs'ga bog'liq
 * emas, shu sabab alohida test qilinishi mumkin.
 */
function parseQuestionsFromLines(lines, warnings) {
  const questions = [];
  let current = null;
  let lastTarget = null; // "q"|"option"|"explain" — davomi kelgan qatorni qayerga qo'shishni bilish uchun
  let titleLine = "";

  function pushCurrent() {
    if (!current) return;
    const q = finalizeQuestion(current, questions.length + 1, warnings);
    if (q) questions.push(q);
    current = null;
    lastTarget = null;
  }

  for (const line of lines) {
    const text = line.text.trim();
    if (!text) continue;

    const qMatch = text.match(QUESTION_RE);
    const oMatch = text.match(OPTION_RE);
    const aMatch = text.match(ANSWER_RE);
    const eMatch = text.match(EXPLAIN_RE);

    if (qMatch) {
      // Yangi savol boshlanmoqda (birinchi savoldan oldingi matn — sarlavha).
      pushCurrent();
      current = { q: qMatch[2], options: [], correct: null, explain: "" };
      lastTarget = "q";
      continue;
    }

    if (!current) {
      // Hali birinchi savol boshlanmagan — bu sarlavha bo'lishi mumkin.
      if (!titleLine) titleLine = text;
      continue;
    }

    if (oMatch) {
      const raw = oMatch[2];
      const marked = TRAILING_CORRECT_MARK_RE.test(raw);
      const clean = raw.replace(TRAILING_CORRECT_MARK_RE, "").trim();
      current.options.push({ text: clean, marked });
      lastTarget = "option";
      continue;
    }

    if (aMatch) {
      const raw = aMatch[1];
      let idx;
      if (/^\d+$/.test(raw)) {
        idx = parseInt(raw, 10) - 1;
      } else {
        idx = letterToIndex(raw);
      }
      current.correct = idx;
      lastTarget = null;
      continue;
    }

    if (eMatch) {
      current.explain = eMatch[1];
      lastTarget = "explain";
      continue;
    }

    // Ajratuvchi qatorga tegishli emas — oldingi element davomi
    // (ko'p qatorli savol/variant matni) deb hisoblanadi.
    if (lastTarget === "q") {
      current.q += " " + text;
    } else if (lastTarget === "option" && current.options.length) {
      const last = current.options[current.options.length - 1];
      last.text += " " + text;
    } else if (lastTarget === "explain") {
      current.explain += " " + text;
    }
  }
  pushCurrent();

  return { title: titleLine, questions };
}

/**
 * @returns {Promise<{title: string, questions: object[], meta: object}>}
 */
async function parseTestPdf(buffer, warnings) {
  const { lines, pageCount } = await extractLines(buffer, warnings);
  if (!lines.length) {
    throw new Error(
      "PDF ichidan matn topilmadi. Hujjat skanerlangan rasmlardan iborat bo'lishi mumkin — bunday hujjatlar hozircha qo'llab-quvvatlanmaydi.",
    );
  }

  const { title, questions } = parseQuestionsFromLines(lines, warnings);

  if (!questions.length) {
    throw new Error(
      "PDF ichidan birorta ham test savoli aniqlanmadi. Format: \"1. Savol matni\", so'ng \"A) variant\" qatorlari va \"Javob: B\" qatori bo'lishi kerak.",
    );
  }

  return {
    title: title || "Nomsiz test",
    questions,
    meta: { pageCount },
  };
}

module.exports = { parseTestPdf, parseQuestionsFromLines };
