"use strict";
/**
 * pdfjs-dist'ning page.getTextContent() natijasidagi xom "item"lar
 * ro'yxatini (har biri bitta so'z yoki matn parchasi) o'qish qulay
 * bo'lgan "qatorlar" ro'yxatiga aylantiradi.
 *
 * Har bir qatorda: matn, o'sha qatordagi eng katta shrift o'lchami,
 * sahifadagi vertikal koordinata (PDF tizimida pastdan yuqoriga) va
 * sahifaning tepasidan necha foiz pastda joylashganligi (0=tepa,
 * 1=past) — bu keyinchalik header/footer aniqlash uchun kerak.
 */
function buildLines(items, viewportHeight, pageNumber) {
  const lines = [];
  let current = null;

  for (const item of items) {
    // pdfjs ba'zan pozitsiya belgilash uchun mutlaqo bo'sh ("") item
    // qaytaradi — bular haqiqiy matn emas, tashlab yuboriladi. Oddiy
    // probel (" ") esa haqiqiy so'zlar orasidagi ajratuvchi bo'lishi
    // mumkin, shuning uchun SAQLANADI.
    if (item.str === "") continue;

    const fontSize = Math.hypot(item.transform[2], item.transform[3]) || 1;
    const x = item.transform[4];
    const y = item.transform[5];

    if (current && Math.abs(y - current.y) < fontSize * 0.5) {
      // Bir xil qatorda davom etmoqda — kerak bo'lsa so'zlar orasiga
      // probel qo'shamiz (matnning o'zida allaqachon probel bo'lsa
      // ikkilanmasligi uchun tekshiramiz).
      let glue = "";
      if (!current.text.endsWith(" ") && !item.str.startsWith(" ")) {
        const gap = x - current.lastX;
        if (gap > fontSize * 0.12) glue = " ";
      }
      current.text += glue + item.str;
      current.maxFontSize = Math.max(current.maxFontSize, fontSize);
      current.lastX = x + (item.width || 0);
    } else {
      if (current) lines.push(finalizeLine(current, viewportHeight, pageNumber));
      current = { text: item.str, y, maxFontSize: fontSize, lastX: x + (item.width || 0) };
    }
  }
  if (current) lines.push(finalizeLine(current, viewportHeight, pageNumber));

  return lines.filter((l) => l.text.trim().length > 0);
}

function finalizeLine(line, viewportHeight, pageNumber) {
  return {
    text: line.text.trim(),
    fontSize: line.maxFontSize,
    y: line.y,
    yRatioFromTop: viewportHeight ? 1 - line.y / viewportHeight : 0,
    page: pageNumber,
  };
}

module.exports = { buildLines };
