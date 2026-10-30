"use strict";
/** 4-BO'LIM · Oila (o'rta). Avvalgi 3 dars `lessonsB.js` da. */
const old = require("./lessonsB");
const pick = (id, icon) => ({ ...old.find((l) => l.id === id), icon });

module.exports = [
  pick("marriage", "Gem"),
  pick("alimony", "Baby"),
  pick("child", "Users"),
  {
    id: "common-property", icon: "Car",
    ask: "Nikoh davomida er nomiga olingan mashina ajrashganda kimga qoladi?",
    title: "Kimning nomida — o'shaniki?",
    story: "Nikoh davomida oila pulini yig'ib mashina oldingiz, lekin u eringiz nomiga rasmiylashtirilgan. Endi ajrashish haqida gap ketmoqda.",
    choice: {
      q: "Mashina kimga tegishli?",
      options: [
        { t: "Faqat erga — hujjatda uning nomi yozilgan", ok: false, why: "Xato. Nikoh davomida orttirilgan mol-mulk, kimning nomiga rasmiylashtirilganidan qat'i nazar, er-xotinning umumiy mulki hisoblanadi." },
        { t: "Er-xotinning umumiy mulki — bo'lishda ulushlar, odatda, teng hisoblanadi", ok: true, why: "To'g'ri. Nikoh shartnomasida boshqacha kelishilmagan bo'lsa, umumiy mulk bo'linadi va ulushlar teng deb olinadi." },
        { t: "Kim ko'proq pul topgan bo'lsa, o'shaniki", ok: false, why: "Xato. Uy ishlari, bola tarbiyasi bilan band bo'lgan er yoki xotin ham umumiy mulkka teng huquqqa ega." },
      ],
    },
    game: {
      type: "spot",
      prompt: "Qaysi mulk shaxsiy (umumiy emas)?",
      title: "OILA MULKI RO'YXATI",
      lines: ["Nikohdan keyin sotib olingan kvartira", "Nikoh davomida olingan mashina", "Xotinning nikohdan oldin olgan uchastkasi", "Er-xotinning birgalikdagi omonati"],
      answer: 2,
      why: "Nikohdan oldin bo'lgan, shuningdek sovg'a yoki meros sifatida olingan mulk — har birining shaxsiy mulki.",
    },
    takeaway: "Nikoh davomida orttirilgan mulk — umumiy, kimning nomida bo'lishidan qat'i nazar. Nikohdan oldingi, sovg'a va meros — shaxsiy.",
    refs: [{ code: "OK", article: "23" }, { code: "OK", article: "25" }, { code: "OK", article: "28" }],
  },
  {
    id: "divorce-way", icon: "Scale",
    ask: "Ajrashish FHDYo orqalimi yoki sud orqalimi, qanday farqi bor?",
    title: "FHDYo yoki sud?",
    story: "Er-xotin ajrashishga rozi, ammo ularning voyaga yetmagan farzandi bor. Ular FHDYo bo'limiga borishmoqchi.",
    choice: {
      q: "Ular qayerda ajrashadi?",
      options: [
        { t: "FHDYo bo'limida — ikkalasi ham rozi-ku", ok: false, why: "Xato. FHDYo orqali soddalashtirilgan tartib faqat o'zaro rozilik bo'lib, voyaga yetmagan umumiy farzand bo'lmaganda qo'llanadi." },
        { t: "Sud tartibida — voyaga yetmagan farzand borligi sababli", ok: true, why: "To'g'ri. Voyaga yetmagan farzand bo'lsa, nikoh sud orqali bekor qilinadi: sud bolaning manfaatini, aliment va yashash joyini hal qiladi." },
        { t: "Mahalla yig'inida — u rozilik bersa yetarli", ok: false, why: "Xato. Mahalla yarashtirishga harakat qilishi mumkin, lekin nikohni bekor qilish vakolati faqat FHDYo yoki sudda." },
      ],
    },
    game: {
      type: "order",
      prompt: "Sud orqali ajrashish bosqichlarini tartiblang",
      items: ["Sudga da'vo arizasi beriladi", "Sud yarashtirish choralarini ko'radi", "Sud nikohni bekor qilish haqida hal qiluv qarori chiqaradi", "Qaror FHDYo organida qayd etiladi"],
      why: "Ariza → yarashtirish → qaror → FHDYoda qayd. Nikoh FHDYoda qayd etilgach bekor bo'lgan hisoblanadi.",
    },
    takeaway: "O'zaro rozilik va voyaga yetmagan farzand bo'lmasa — FHDYo. Farzand bo'lsa yoki biri rozi bo'lmasa — sud.",
    refs: [{ code: "OK", article: "38" }, { code: "OK", article: "40" }, { code: "OK", article: "42" }],
  },
];
