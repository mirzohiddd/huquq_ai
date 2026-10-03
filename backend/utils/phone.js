"use strict";
/**
 * TELEFON RAQAMI — normallashtirish va tekshirish.
 *
 * Bir xil raqam turli ko'rinishda kelishi mumkin: "90 123 45 67",
 * "+998901234567", "998 (90) 123-45-67", Telegram kontaktidan esa
 * "998901234567" (plyussiz). Bazada HAR DOIM bitta shakl saqlanadi —
 * "+998901234567" — aks holda admin qidiruvi va bot orqali moslash
 * bir raqamni ikki xil deb hisoblardi.
 *
 * O'zbekiston raqamlari asosiy holat (9 xonali milliy raqam → +998),
 * lekin chet el raqamlari ham qabul qilinadi (10–15 xona, E.164).
 */

/** @returns {string} "+998901234567" yoki "" (noto'g'ri bo'lsa) */
function normalizePhone(raw) {
  let d = String(raw || "").replace(/\D/g, "");
  if (!d) return "";
  // 9 xona — O'zbekiston milliy raqami ("901234567"), kod qo'shiladi
  if (d.length === 9) d = `998${d}`;
  if (d.length < 10 || d.length > 15) return "";
  // O'zbekiston: 998 + 9 xona — aniq uzunlik talab qilinadi
  if (d.startsWith("998") && d.length !== 12) return "";
  return `+${d}`;
}

/** "+998901234567" → "+998 90 123 45 67" (faqat ko'rsatish uchun) */
function formatPhone(p) {
  const m = /^\+998(\d{2})(\d{3})(\d{2})(\d{2})$/.exec(p || "");
  return m ? `+998 ${m[1]} ${m[2]} ${m[3]} ${m[4]}` : p || "";
}

/** Ism/familiya: harflar, bo'shliq, apostrof va chiziqcha; 2–40 belgi. */
function cleanName(raw) {
  const v = String(raw || "").replace(/\s+/g, " ").trim().slice(0, 40);
  if (v.length < 2) return "";
  return /^[\p{L}\p{M}' ʻʼ`‘’.-]+$/u.test(v) ? v : "";
}

module.exports = { normalizePhone, formatPhone, cleanName };
