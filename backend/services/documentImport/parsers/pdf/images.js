"use strict";
const { PNG } = require("pngjs");

const MAX_PIXELS = 4_000_000; // haddan tashqari katta rasmlarni o'tkazib yuborish
const MIN_DIMENSION = 20; // kichik ikonka/chiziqchalarni e'tiborsiz qoldirish

// pdfjs-dist ImageKind qiymatlari (pdfjsLib.ImageKind bilan bir xil,
// lekin dinamik import ichida qulay ishlatish uchun shu yerda takror
// yozilgan): GRAYSCALE_1BPP=1, RGB_24BPP=2, RGBA_32BPP=3
const KIND_GRAYSCALE = 1;
const KIND_RGBA = 3;

/**
 * Berilgan pdfjs sahifasidagi barcha tasvir XObject'larini chiqarib
 * oladi va PNG (base64 data URL) ko'rinishiga o'giradi.
 *
 * Muvaffaqiyatsiz bo'lgan alohida tasvir (noma'lum rang fazosi,
 * dekodlanmagan format va h.k.) butun importni to'xtatmaydi — shu
 * tasvir ogohlantirish bilan o'tkazib yuboriladi.
 */
async function extractImages(pdfjsLib, page, pageNumber, warnings) {
  const opList = await page.getOperatorList();
  const OPS = pdfjsLib.OPS;
  const images = [];

  for (let i = 0; i < opList.fnArray.length; i++) {
    if (opList.fnArray[i] !== OPS.paintImageXObject) continue;
    const objId = opList.argsArray[i][0];

    try {
      const img = await new Promise((resolve, reject) => {
        try {
          page.objs.get(objId, resolve);
        } catch (e) {
          reject(e);
        }
      });
      if (!img || !img.data || !img.width || !img.height) continue;
      if (img.width < MIN_DIMENSION || img.height < MIN_DIMENSION) continue;
      if (img.width * img.height > MAX_PIXELS) {
        warnings.push(`${pageNumber}-sahifadagi rasm juda katta, o'tkazib yuborildi.`);
        continue;
      }

      const dataUrl = encodeToPng(img);
      if (dataUrl) images.push({ page: pageNumber, dataUrl });
    } catch (err) {
      warnings.push(`${pageNumber}-sahifadagi rasm o'qilmadi: ${err.message}`);
    }
  }

  return images;
}

function encodeToPng(img) {
  const { width, height, data, kind } = img;
  const png = new PNG({ width, height });

  for (let p = 0; p < width * height; p++) {
    let r, g, b;
    let a = 255;
    if (kind === KIND_RGBA) {
      r = data[p * 4];
      g = data[p * 4 + 1];
      b = data[p * 4 + 2];
      a = data[p * 4 + 3];
    } else if (kind === KIND_GRAYSCALE) {
      r = g = b = data[p];
    } else {
      // RGB_24BPP (yoki noma'lum) — 3 baytli deb hisoblaymiz
      r = data[p * 3];
      g = data[p * 3 + 1];
      b = data[p * 3 + 2];
    }
    png.data[p * 4] = r || 0;
    png.data[p * 4 + 1] = g || 0;
    png.data[p * 4 + 2] = b || 0;
    png.data[p * 4 + 3] = a;
  }

  const buf = PNG.sync.write(png);
  return `data:image/png;base64,${buf.toString("base64")}`;
}

module.exports = { extractImages };
