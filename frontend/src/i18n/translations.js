/**
 * TARJIMALAR — YUKLASH MANTIG'I.
 *
 * ⚠️ TEZLIK (2026-09-28, PageSpeed): ikkala til bitta faylda bo'lganda har
 * bir tashrifda ~130 KB tarjima yuklanardi, holbuki foydalanuvchi faqat bitta
 * tilni ko'radi. Endi o'zbekcha (standart) asosiy bo'lakda, ruscha — alohida
 * bo'lak: faqat rus tili tanlanganda yuklanadi (main.jsx sahifani chizishdan
 * OLDIN kutadi, shuning uchun ruscha foydalanuvchida o'zbekcha "miltillamaydi").
 */
import uz from "./uz";

export const defaultLang = "uz";
export const SUPPORTED_LANGS = ["uz", "ru"];

const loaded = { uz };

/** Yuklangan lug'at (yuklanmagan bo'lsa — undefined). */
export function getDict(lang) {
  return loaded[lang];
}

/** Tilni yuklash (bir marta); noma'lum til — standart til. */
export function loadLang(lang) {
  if (loaded[lang]) return Promise.resolve(loaded[lang]);
  if (lang === "ru") {
    return import("./ru").then((m) => (loaded.ru = m.default));
  }
  return Promise.resolve(loaded[defaultLang]);
}
