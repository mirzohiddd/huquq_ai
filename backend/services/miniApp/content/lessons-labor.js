"use strict";
/** 3-BO'LIM · Ish joyida (o'rta). Avvalgi 3 dars `lessonsA.js` da. */
const old = require("./lessonsA");
const pick = (id, icon) => ({ ...old.find((l) => l.id === id), icon });

module.exports = [
  pick("contract", "FileText"),
  pick("salary", "Wallet"),
  pick("probation", "Hourglass"),
  {
    id: "vacation-pay", icon: "Palmtree",
    ask: "Ish beruvchi mehnat ta'tilini pul bilan almashtirishni taklif qilyapti, bu qonuniymi?",
    title: "Ta'til o'rniga pul",
    story: "Rahbar: «Bu yil ta'tilga chiqma, o'rniga pulini to'laymiz» dedi. Siz hali ishdan bo'shamoqchi emassiz.",
    choice: {
      q: "Qonun bo'yicha qaysi javob to'g'ri?",
      options: [
        { t: "Har qanday ta'tilni to'liq pulga almashtirish mumkin — kelishsak bo'ldi", ok: false, why: "Xato. Har yilgi asosiy eng kam ta'til dam olish uchun beriladi va ishlab turgan xodimga uni to'liq pul bilan almashtirib bo'lmaydi." },
        { t: "Eng kam asosiy ta'til berilishi shart; faqat undan ortiq qismini xodim roziligi bilan pulga almashtirish mumkin", ok: true, why: "To'g'ri. Qonun eng kam ta'tilni himoya qiladi. Pul kompensatsiyasi faqat ortiqcha qismi uchun yoki ishdan bo'shaganda foydalanilmagan ta'til uchun to'lanadi." },
        { t: "Ta'til faqat ish beruvchi xohlasa beriladi", ok: false, why: "Xato. Har yilgi mehnat ta'tili — xodimning qonuniy huquqi, ish beruvchining marhamati emas." },
      ],
    },
    game: {
      type: "spot",
      prompt: "Buyruqdagi qonunga zid qatorni toping",
      title: "BUYRUQ",
      lines: ["Xodim: Karimov A., buxgalter", "Ta'til jadvali bo'yicha: iyul", "Asosiy eng kam ta'til to'liq pul kompensatsiyasi bilan almashtirilsin", "Asos: xodimning arizasi"],
      answer: 2,
      why: "Ishlab turgan xodimning eng kam asosiy ta'tilini to'liq pulga almashtirish mumkin emas — aynan shu qator qonunga zid.",
    },
    takeaway: "Ta'tilning eng kam qismi — dam olish uchun. Faqat ortiqcha qismi xodim roziligi bilan pulga almashtirilishi mumkin.",
    refs: [{ code: "MK", article: "217" }, { code: "MK", article: "234" }],
  },
  {
    id: "fired", icon: "DoorOpen",
    ask: "Ish beruvchi ogohlantirmasdan meni ishdan bo'shatdi, bu qonuniymi?",
    title: "Ogohlantirmasdan bo'shatish",
    story: "Dushanba kuni rahbar: «Ertadan kelmang, sizga ehtiyoj qolmadi» dedi. Hech qanday hujjat yoki ogohlantirish bo'lmagan.",
    choice: {
      q: "Eng aniq huquqiy baho qaysi?",
      options: [
        { t: "Ish beruvchi xohlagan paytda bo'shatishi mumkin — u egasi", ok: false, why: "Xato. Ish beruvchi tashabbusi bilan bo'shatish faqat qonunda sanab o'tilgan asoslar bo'yicha va belgilangan tartibda mumkin." },
        { t: "Faqat og'zaki aytilgan, shuning uchun men ishdan bo'shaganman", ok: false, why: "Xato. Og'zaki gap mehnat shartnomasini bekor qilmaydi — buyruq va qonuniy asos kerak." },
        { t: "Qonuniy asos, oldindan yozma ogohlantirish va buyruq bo'lmasa — bo'shatish noqonuniy, ishga tiklanishni talab qilish mumkin", ok: true, why: "To'g'ri. Asos va tartib buzilgan bo'lsa, xodim ishga tiklanish va majburiy progul davri uchun haq to'lashni talab qilishi mumkin." },
      ],
    },
    game: {
      type: "order",
      prompt: "Ishga tiklanish yo'lini tartiblang",
      items: ["Bo'shatish haqidagi buyruq nusxasini yozma so'rayman", "Ish beruvchiga e'tiroz xati yuboraman", "Mehnat inspeksiyasiga murojaat qilaman", "Belgilangan muddatda sudga da'vo beraman"],
      why: "Hujjat → e'tiroz → inspeksiya → sud. Mehnat nizolarida muddatlar qisqa, shuning uchun kechiktirmang.",
    },
    takeaway: "Ishdan bo'shatish uchun qonuniy asos, oldindan yozma ogohlantirish va buyruq kerak. Aks holda ishga tiklanish mumkin.",
    refs: [{ code: "MK", article: "161" }, { code: "MK", article: "165" }],
  },
];
