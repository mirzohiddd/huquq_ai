"use strict";
/**
 * Har bir qatorni sarlavha yoki oddiy paragraf sifatida tasniflaydi.
 *
 * Asosiy mezon — shrift o'lchami (asosiy matn medianasiga nisbatan
 * sezilarli kattaligi). Qo'shimcha mezon — raqamlangan/harflangan
 * sarlavha naqshlari ("1.", "1.1)", "I.", "Bo'lim 1", "Chapter 2"),
 * ular shrift bir xil bo'lsa ham (masalan oddiy .docx->PDF eksportida)
 * sarlavhani aniqlash imkonini beradi.
 *
 * Aniqlangan sarlavhalar shrift o'lchami bo'yicha 2 darajaga
 * bo'linadi (level 2 — eng katta, level 3 — qolganlari), chunki
 * bo'limlar ro'yxati (Lesson.sections) tekis tuzilishga ega — daraja
 * faqat ko'rinish (h2/h3) uchun ishlatiladi.
 */
const NUMBERED_HEADING_RE =
  /^(\d+([.\-]\d+)*[.)]|[IVXLC]+[.)]|bo['ʻʼ]?lim\s+\d+|глава\s+\d+|chapter\s+\d+|раздел\s+\d+)\s*\S/i;

function median(nums) {
  if (!nums.length) return 12;
  const sorted = [...nums].sort((a, b) => a - b);
  const mid = Math.floor(sorted.length / 2);
  return sorted.length % 2 ? sorted[mid] : (sorted[mid - 1] + sorted[mid]) / 2;
}

function classifyHeadings(allLines) {
  const bodyFontSize = median(allLines.map((l) => l.fontSize));
  const headingSizes = new Set();

  for (const line of allLines) {
    const isShort = line.text.length <= 120;
    const isBig = line.fontSize >= bodyFontSize * 1.15;
    const isNumbered = isShort && NUMBERED_HEADING_RE.test(line.text);
    line.isHeading = isShort && (isBig || isNumbered);
    if (line.isHeading) headingSizes.add(Math.round(line.fontSize));
  }

  // Eng katta sarlavha shrift o'lchami — level 2, qolganlari — level 3
  const sortedSizes = [...headingSizes].sort((a, b) => b - a);
  const topSize = sortedSizes[0];
  for (const line of allLines) {
    if (line.isHeading) line.level = Math.round(line.fontSize) === topSize ? 2 : 3;
  }

  return { bodyFontSize };
}

module.exports = { classifyHeadings };
