"use strict";
/**
 * PAROL SIYOSATI — yagona joyda.
 *
 * ⚠️ Avval talab faqat `password.length < 6` edi. Bu amalda "123456",
 * "qwerty", "parol1" kabi parollarga ruxsat berardi — ular hujumchining
 * lug'atida birinchi qatorda turadi va bunday hisob soniyalar ichida
 * ochiladi. Endi uzunlik 8 ga oshirildi va eng ko'p tarqalgan
 * naqshlar rad etiladi.
 *
 * ⚠️ ATAYLAB TALAB QILINMAYDI: majburiy "katta harf + raqam + belgi"
 * kombinatsiyasi. Zamonaviy tavsiyalar (NIST SP 800-63B) bunday
 * qoidalar foydalanuvchini "Parol123!" kabi taxmin qilinadigan
 * naqshlarga majburlashini ko'rsatadi. Uzunlik va lug'at tekshiruvi
 * ancha samaraliroq.
 */

const MIN_LENGTH = 8;
const MAX_LENGTH = 128;

/* Eng ko'p ishlatiladigan parollar va ularning o'zbekcha/ruscha
   variantlari. Ro'yxat qisqa — maqsad to'liq lug'atni almashtirish
   emas, balki eng ochiq holatlarni to'sish. */
const COMMON = new Set([
  "12345678", "123456789", "1234567890", "password", "password1",
  "qwerty123", "qwertyuiop", "11111111", "00000000", "abc12345",
  "iloveyou", "admin123", "administrator", "welcome1", "letmein1",
  "parol123", "parolim1", "uzbekistan", "toshkent1", "salom123",
  "parol1234", "qwerty1234", "1q2w3e4r", "zxcvbnm1", "asdfghjk",
]);

/**
 * @returns {{ok: true} | {ok: false, error: string}}
 */
function validatePassword(password, { username = "", email = "" } = {}) {
  const pwd = String(password || "");

  if (pwd.length < MIN_LENGTH) {
    return {
      ok: false,
      error: `Parol kamida ${MIN_LENGTH} ta belgidan iborat bo'lsin`,
    };
  }
  if (pwd.length > MAX_LENGTH) {
    // Juda uzun parol — bcrypt uchun keraksiz yuk (DoS vektori)
    return { ok: false, error: "Parol juda uzun" };
  }
  if (/^\s|\s$/.test(pwd)) {
    return {
      ok: false,
      error: "Parol boshida yoki oxirida bo'sh joy bo'lmasin",
    };
  }

  const low = pwd.toLowerCase();

  if (COMMON.has(low)) {
    return {
      ok: false,
      error: "Bu parol juda ko'p ishlatiladi — boshqasini tanlang",
    };
  }

  // Faqat bitta belgidan iborat ("aaaaaaaa")
  if (/^(.)\1+$/.test(pwd)) {
    return { ok: false, error: "Parol takrorlanuvchi belgilardan iborat" };
  }

  // Ketma-ket raqam yoki harf ("12345678", "abcdefgh")
  if (isSequential(low)) {
    return {
      ok: false,
      error: "Parol ketma-ket belgilardan iborat — boshqasini tanlang",
    };
  }

  // Username yoki email nomi parol ichida bo'lmasin
  const uname = String(username || "").toLowerCase().trim();
  const mailName = String(email || "").toLowerCase().split("@")[0];
  for (const part of [uname, mailName]) {
    if (part && part.length >= 3 && low.includes(part)) {
      return {
        ok: false,
        error: "Parol ichida login yoki email nomi bo'lmasin",
      };
    }
  }

  return { ok: true };
}

/** "12345678" / "abcdefgh" / "87654321" kabi ketma-ketlik. */
function isSequential(s) {
  if (s.length < 4) return false;
  let asc = true;
  let desc = true;
  for (let i = 1; i < s.length; i++) {
    const diff = s.charCodeAt(i) - s.charCodeAt(i - 1);
    if (diff !== 1) asc = false;
    if (diff !== -1) desc = false;
    if (!asc && !desc) return false;
  }
  return asc || desc;
}

module.exports = { validatePassword, MIN_LENGTH };
