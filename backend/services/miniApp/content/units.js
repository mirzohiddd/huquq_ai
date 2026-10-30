"use strict";
/**
 * Bo'limlar (har biri 5 dars) — tartib bo'yicha qiyinlashadi:
 * 1-bo'lim oson, oxirgilari mutaxassis darajasida.
 * Vaziyat toifalari (har biri 5 vaziyat).
 */
const UNITS = [
  { key: "consumer", title: "Xaridor huquqlari", level: "Oson", icon: "ShoppingBag" },
  { key: "online", title: "Internet va xavfsizlik", level: "Oson", icon: "Shield" },
  { key: "labor", title: "Ish joyida", level: "O'rta", icon: "Briefcase" },
  { key: "family", title: "Oila", level: "O'rta", icon: "Heart" },
  { key: "housing", title: "Uy-joy va ijara", level: "Qiyin", icon: "House" },
  { key: "contracts", title: "Qarz va shartnomalar", level: "Juda qiyin", icon: "FileSignature" },
  { key: "justice", title: "Politsiya va sud", level: "Juda qiyin", icon: "Gavel" },
  { key: "inherit", title: "Meros", level: "Ekspert", icon: "Landmark" },
];

const SIT_CATS = [
  { key: "work", title: "Birinchi ish", desc: "Ishga qabul, mehnat shartnomasi va ishdagi huquqlar.", icon: "Briefcase" },
  { key: "online", title: "Internetdagi huquqlar", desc: "Onlayn xavfsizlik, shaxsiy ma'lumotlar va huquqlaringiz.", icon: "Laptop" },
  { key: "shop", title: "Xarid va kafolat", desc: "Mahsulot sifati, kafolat va tadbirkor bilan munosabatlar.", icon: "ShoppingCart" },
  { key: "edu", title: "Ta'lim", desc: "Talaba huquqlari, shartnoma va o'qish bilan bog'liq masalalar.", icon: "GraduationCap" },
  { key: "home", title: "Ijara va uy-joy", desc: "Ijara shartnomasi, to'lovlar va uy-joydagi huquqlar.", icon: "House" },
];

module.exports = { UNITS, SIT_CATS };
