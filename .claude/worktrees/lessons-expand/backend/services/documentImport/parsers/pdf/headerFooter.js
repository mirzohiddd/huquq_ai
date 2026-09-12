"use strict";
/**
 * Sahifalarning yuqori/pastki chekkalarida takrorlanadigan
 * header/footer matnini (masalan "Huquq AI — Ichki hujjat") va sahifa
 * raqamlarini ("3", "3 / 20", "- 3 -") asosiy matndan olib tashlaydi.
 *
 * Mantiq:
 *  1. Har bir sahifaning yuqori/pastki ~10% zonasidagi qatorlar
 *     "chekka zona" hisoblanadi.
 *  2. Chekka zonadagi matnlar raqamlari "#" bilan almashtirilib
 *     normallashtiriladi (shunda "3-bet" va "12-bet" bir xil naqsh
 *     sifatida ko'rinadi).
 *  3. Naqsh sahifalarning katta qismida (kamida 60%) takrorlansa —
 *     header/footer deb topilib olib tashlanadi.
 *  4. Takrorlanishdan qat'i nazar, chekka zonada FAQAT raqamlardan
 *     iborat har qanday qator sahifa raqami sifatida olib tashlanadi.
 */
const EDGE_ZONE = 0.1;
const REPEAT_THRESHOLD = 0.6;
const MIN_PAGES_FOR_REPEAT_CHECK = 2;

function normalizePattern(text) {
  return text.trim().toLowerCase().replace(/\d+/g, "#");
}

function isPageNumberLike(text) {
  return /^[-–—\s]*\d+([\s/]{1,3}\d+)?[-–—\s]*$/.test(text.trim());
}

function stripHeaderFooter(pagesLines, totalPages) {
  const edgePatternPages = new Map(); // normallashtirilgan naqsh -> Set(sahifa raqamlari)

  for (const lines of pagesLines) {
    for (const line of lines) {
      const inEdge = line.yRatioFromTop <= EDGE_ZONE || line.yRatioFromTop >= 1 - EDGE_ZONE;
      if (!inEdge) continue;
      const pattern = normalizePattern(line.text);
      if (!pattern) continue;
      if (!edgePatternPages.has(pattern)) edgePatternPages.set(pattern, new Set());
      edgePatternPages.get(pattern).add(line.page);
    }
  }

  const boilerplatePatterns = new Set();
  if (totalPages >= MIN_PAGES_FOR_REPEAT_CHECK) {
    for (const [pattern, pages] of edgePatternPages) {
      if (pages.size / totalPages >= REPEAT_THRESHOLD) boilerplatePatterns.add(pattern);
    }
  }

  return pagesLines.map((lines) =>
    lines.filter((line) => {
      const inEdge = line.yRatioFromTop <= EDGE_ZONE || line.yRatioFromTop >= 1 - EDGE_ZONE;
      if (!inEdge) return true;
      if (isPageNumberLike(line.text)) return false;
      return !boilerplatePatterns.has(normalizePattern(line.text));
    }),
  );
}

module.exports = { stripHeaderFooter };
