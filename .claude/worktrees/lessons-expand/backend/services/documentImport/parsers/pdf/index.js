"use strict";
const { buildLines } = require("./textExtraction");
const { stripHeaderFooter } = require("./headerFooter");
const { classifyHeadings } = require("./headings");
const { buildSections } = require("./sectionBuilder");
const { extractImages } = require("./images");
const { escapeHtml } = require("../../htmlUtils");

const MAX_PAGES = 200; // haddan tashqari katta hujjatlardan himoya

/**
 * PDF buferini o'qib, strukturaga ajratilgan dars ma'lumotini
 * qaytaradi: { title, sections: [{heading, level, anchor, html}] }.
 *
 * `warnings` — chaqiruvchi tomonidan berilgan massiv, ishlov berish
 * davomida yuzaga kelgan (lekin importni to'xtatmaydigan) muammolar
 * shu yerga qo'shiladi (masalan o'qilmagan rasm).
 */
async function parsePdf(buffer, warnings) {
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
  const allImages = [];

  for (let pageNum = 1; pageNum <= pageCount; pageNum++) {
    const page = await doc.getPage(pageNum);
    const viewport = page.getViewport({ scale: 1 });
    const content = await page.getTextContent();
    pagesLines.push(buildLines(content.items, viewport.height, pageNum));

    const images = await extractImages(pdfjsLib, page, pageNum, warnings);
    allImages.push(...images);

    page.cleanup();
  }
  await doc.destroy();

  const cleanedPages = stripHeaderFooter(pagesLines, pageCount);
  const allLines = cleanedPages.flat();

  if (!allLines.length) {
    throw new Error(
      "PDF ichidan matn topilmadi. Hujjat skanerlangan rasmlardan iborat bo'lishi mumkin — bunday hujjatlar hozircha qo'llab-quvvatlanmaydi.",
    );
  }

  classifyHeadings(allLines);
  const { title, sections } = buildSections(allLines);

  attachImages(sections, allImages);

  // Ikkita sarlavha ketma-ket kelib qolsa (masalan "I BOB. ..." darhol
  // "1-modda"dan oldin, orasida matn bo'lmasa), birinchisi uchun matni
  // yo'q ("bo'sh") bo'lim yaratilib qolardi — bunday bo'lim keyinchalik
  // saqlashda "bo'lim matni bo'sh bo'lmasin" xatosiga sabab bo'lardi.
  // Bo'sh bo'limlarni tashlab, sarlavhasini KEYINGI bo'limning
  // sarlavhasi oldiga qo'shib qo'yamiz — shunda bob nomi yo'qolmaydi.
  const nonEmptySections = [];
  let pendingPrefix = "";
  for (const sec of sections) {
    const hasContent = sec.paragraphs.length > 0 || (sec.images && sec.images.length > 0);
    if (!hasContent) {
      pendingPrefix = pendingPrefix ? `${pendingPrefix} — ${sec.heading}` : sec.heading;
      warnings.push(`"${sec.heading}" bo'limida matn topilmadi, sarlavha keyingi bo'limga qo'shildi.`);
      continue;
    }
    nonEmptySections.push({
      ...sec,
      heading: pendingPrefix ? `${pendingPrefix} — ${sec.heading}` : sec.heading,
    });
    pendingPrefix = "";
  }
  // Agar hujjat MUTLAQO oxirgi sarlavhadan keyin matn bo'lmay tugasa
  // (juda kamdan-kam holat), yig'ilgan sarlavhani alohida bo'sh
  // bo'lim sifatida emas, kamida bitta joy egallovchi matn bilan
  // saqlaymiz — bo'sh sections massivi qaytarilib ketmasligi uchun.
  if (pendingPrefix && nonEmptySections.length) {
    const last = nonEmptySections[nonEmptySections.length - 1];
    last.heading = `${last.heading} — ${pendingPrefix}`;
  }

  return {
    title: title || "Nomsiz dars",
    sections: nonEmptySections.map((sec) => ({
      heading: sec.heading,
      level: sec.level,
      anchor: sec.anchor,
      html: renderSectionHtml(sec),
    })),
    meta: { pageCount: doc.numPages },
  };
}

// Sahifadagi rasmni o'sha sahifadan matn olgan OXIRGI bo'limga
// biriktiradi — pdfjs matn va rasm ma'lumotlarini alohida so'rovlar
// orqali beradi, shuning uchun ularning aniq ketma-ketligini piksel
// darajasida moslashtirish mumkin emas; bu — oqilona yaqinlashtirish.
function attachImages(sections, images) {
  if (!images.length || !sections.length) return;
  for (const img of images) {
    let target = null;
    for (const sec of sections) {
      if (sec.pages.has(img.page)) target = sec;
    }
    if (!target) target = sections[sections.length - 1];
    if (!target.images) target.images = [];
    target.images.push(img);
  }
}

function renderSectionHtml(section) {
  const parts = section.paragraphs.map((para) => `<p>${escapeHtml(para)}</p>`);
  for (const img of section.images || []) {
    parts.push(`<img src="${img.dataUrl}" alt="${escapeHtml(section.heading)}" loading="lazy" />`);
  }
  return parts.join("\n");
}

module.exports = { parsePdf };
