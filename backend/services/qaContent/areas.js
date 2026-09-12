"use strict";
/**
 * SAVOL-JAVOB MARKAZINING HUQUQ SOHALARI.
 *
 * Har bir soha bitta asosiy kodeksga bog'langan: sohaning savollar
 * ro'yxati sahifasidan foydalanuvchi to'g'ridan-to'g'ri o'sha kodeksning
 * ochiq matniga o'tishi mumkin. Bu ichki havolalar tarmog'ini hosil
 * qiladi — qidiruv roboti uchun savol sahifasi va qonun sahifasi
 * bir-birini kuchaytiradi.
 */
const AREAS = [
  { key: "mehnat", law: "MK", uz: "Mehnat huquqi", ru: "Трудовое право" },
  { key: "oila", law: "OK", uz: "Oila huquqi", ru: "Семейное право" },
  { key: "meros", law: "FK2", uz: "Meros huquqi", ru: "Наследственное право" },
  {
    key: "uy-joy",
    law: "UJK",
    uz: "Uy-joy va yer huquqi",
    ru: "Жилищное и земельное право",
  },
  {
    key: "istemolchi",
    law: "IHQ",
    uz: "Iste'molchi huquqlari",
    ru: "Права потребителей",
  },
  {
    key: "shartnoma",
    law: "FK",
    uz: "Shartnoma va fuqarolik huquqi",
    ru: "Договорное и гражданское право",
  },
  {
    key: "jinoyat",
    law: "JPK",
    uz: "Jinoyat jarayonidagi huquqlar",
    ru: "Права в уголовном процессе",
  },
  {
    key: "mamuriy",
    law: "MJK",
    uz: "Ma'muriy javobgarlik",
    ru: "Административная ответственность",
  },
  { key: "soliq", law: "SK", uz: "Soliq huquqi", ru: "Налоговое право" },
  {
    key: "konstitutsiya",
    law: "KONS",
    uz: "Konstitutsiyaviy huquqlar",
    ru: "Конституционные права",
  },
];

const nameOfArea = (area, lang) => (lang === "ru" ? area.ru : area.uz);

module.exports = { AREAS, nameOfArea };
