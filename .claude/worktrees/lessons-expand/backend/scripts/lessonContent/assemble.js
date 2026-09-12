"use strict";
/**
 * DARSLIKNI QISMLARDAN YIG'ISH — umumiy yordamchi.
 *
 * NIMA UCHUN AJRATILDI: har bir darslik 50 ta mavzudan iborat va
 * qismlarga bo'lingan. Yig'ish hamda tekshirish mantig'i oltita
 * darslikda bir xil — uni har bir `index.js` ga nusxalash bitta
 * xatoni oltita joyda tuzatishga majbur qilardi.
 *
 * ⚠️ TEKSHIRUVLAR MODUL YUKLANISHIDA ishlaydi va xato bo'lsa
 * DARHOL to'xtatadi. Sabab: bu xatolar "jim" turadi — dars
 * shunchaki qisqarib qoladi yoki mundarijada bir xil ikkita
 * qator paydo bo'ladi, lekin hech qanday ogohlantirish
 * chiqmaydi va buni sezish deyarli imkonsiz.
 */

const EXPECTED_TOPICS = 50;

/**
 * @param {string} name    darslik nomi (xato xabarida ko'rinadi)
 * @param {string[]} parts qism fayllariga nisbiy yo'llar
 * @param {Function} req   chaqiruvchi modulning `require` funksiyasi
 *                         — nisbiy yo'l O'SHA fayl joylashuviga
 *                         nisbatan hal qilinishi kerak
 */
function assembleLesson(name, parts, req) {
  const sections = parts.flatMap((f) => req(f).SECTIONS);

  if (sections.length !== EXPECTED_TOPICS) {
    throw new Error(
      `"${name}" darsligida ${sections.length} ta mavzu bor, ` +
        `${EXPECTED_TOPICS} ta bo'lishi kerak.`,
    );
  }

  const seen = new Set();
  const dupes = [];
  for (const s of sections) {
    if (seen.has(s.heading)) dupes.push(s.heading);
    seen.add(s.heading);
  }
  if (dupes.length) {
    throw new Error(
      `"${name}" darsligida takroriy mavzu sarlavhasi: ${dupes.join(", ")}`,
    );
  }

  /* Har bir mavzuda to'rt element bo'lishi kerak: matn, asosiy
     fikrlar va qonun havolasi. Bittasi tushib qolsa dars sahifasida
     o'sha blok jimgina ko'rinmay qoladi. */
  const incomplete = sections
    .map((s, i) => ({ i: i + 1, s }))
    .filter(
      ({ s }) => !s.heading || !s.text || !s.keyPoints?.length || !s.lawRefs?.length,
    )
    .map(({ i, s }) => `${i}. ${s.heading || "(sarlavhasiz)"}`);
  if (incomplete.length) {
    throw new Error(
      `"${name}" darsligida to'liqsiz mavzu: ${incomplete.join(", ")}`,
    );
  }

  return sections;
}

module.exports = { assembleLesson, EXPECTED_TOPICS };
