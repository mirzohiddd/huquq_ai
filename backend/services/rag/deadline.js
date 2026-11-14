"use strict";
/**
 * UMUMIY VAQT BYUDJETI (2026-11-14).
 *
 * Sabab (jonli saytda o'lchangan): sayt javobni 60 soniya kutadi, lekin
 * zanjirda umumiy chegara yo'q edi — tahlil + qidiruv + model (har biri o'z
 * timeout'i bilan, bir nechta model, qayta so'rash) qo'shilib 60 soniyadan
 * oshardi va foydalanuvchi "Server javob bermadi (vaqt tugadi)" ko'rardi.
 * Endi butun AI bosqichi bitta muddatga (`deadline`, ms) bo'ysunadi: vaqt
 * tugasa keyingi provayderga yoki AI'siz foydali zaxira javobga o'tiladi.
 */
const BUDGET_MS = Number(process.env.AI_BUDGET_MS) || 42 * 1000;

const left = (deadline) => (deadline ? deadline - Date.now() : Infinity);

/** `promise` muddatgacha tugamasa — xato (chaqiruvchi zaxiraga o'tadi). */
function within(promise, deadline, label = "AI") {
  const ms = left(deadline);
  if (ms === Infinity) return promise;
  const fail = () => new Error(`${label}: vaqt byudjeti tugadi`);
  if (ms < 1500) {
    promise.catch(() => {});
    return Promise.reject(fail());
  }
  let timer;
  const timeout = new Promise((_, rej) => {
    timer = setTimeout(() => rej(fail()), ms);
  });
  return Promise.race([promise, timeout]).finally(() => clearTimeout(timer));
}

/** Qolgan vaqtning `share` ulushidan oshmaydigan ichki muddat. */
const slice = (deadline, share, maxMs = Infinity) => (deadline ? Date.now() + Math.min(left(deadline) * share, maxMs) : deadline);

module.exports = { BUDGET_MS, left, within, slice };
