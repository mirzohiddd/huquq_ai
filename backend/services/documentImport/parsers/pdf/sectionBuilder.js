"use strict";
const { slugify } = require("../../slugify");

/**
 * classifyHeadings() ishlagandan keyingi qatorlar ro'yxatini
 * bo'limlarga guruhlaydi.
 *
 * - Birinchi aniqlangan sarlavha darsning umumiy nomi (title) sifatida
 *   ajratiladi — bu alohida bo'lim ochmaydi.
 * - Undan keyingi har bir sarlavha yangi bo'lim boshlaydi.
 * - Sarlavhadan oldin (yoki umuman sarlavha topilmasa) kelgan matn
 *   "Kirish" degan bo'limga yig'iladi.
 * - Ikki qator orasidagi katta bo'shliq (yoki sahifa almashinuvi)
 *   yangi abzats sifatida talqin qilinadi; aks holda qatorlar bir xil
 *   abzatsga birlashtiriladi.
 */
function buildSections(lines) {
  const usedSlugs = new Set();
  let title = null;
  const sections = [];
  let current = null;
  let prevLine = null;

  function ensureCurrent() {
    if (current) return current;
    current = {
      heading: "Kirish",
      level: 2,
      anchor: slugify("kirish", usedSlugs),
      paragraphs: [],
      pages: new Set(),
    };
    return current;
  }

  for (const line of lines) {
    if (line.isHeading) {
      if (title === null) {
        title = line.text;
        prevLine = line;
        continue;
      }
      if (current) sections.push(current);
      current = {
        heading: line.text,
        level: line.level || 2,
        anchor: slugify(line.text, usedSlugs),
        paragraphs: [],
        pages: new Set(),
      };
      prevLine = line;
      continue;
    }

    ensureCurrent();
    current.pages.add(line.page);

    const isNewParagraph =
      !prevLine || prevLine.page !== line.page || Math.abs(prevLine.y - line.y) > line.fontSize * 1.9;

    if (isNewParagraph || current.paragraphs.length === 0) {
      current.paragraphs.push(line.text);
    } else {
      current.paragraphs[current.paragraphs.length - 1] += " " + line.text;
    }
    prevLine = line;
  }
  if (current) sections.push(current);

  return { title, sections };
}

module.exports = { buildSections };
