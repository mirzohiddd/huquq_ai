"use strict";
/** VAZIYATLAR · Internetdagi huquqlar. Avvalgi 2 vaziyat `situations.js` da. */
const old = require("./situations");
const pick = (id) => old.find((s) => s.id === id);

module.exports = [
  pick("s-gossip"),
  pick("s-bankcall"),
  {
    id: "s-fake-shop", icon: "Store",
    ask: "Instagramdagi do'konga pul o'tkazdim, tovar kelmadi va meni bloklashdi",
    title: "Instagram do'kon g'oyib bo'ldi",
    refs: [{ code: "JK", article: "168" }, { code: "IHQ", article: "12-1" }],
    steps: [
      { text: "Instagramdagi sahifada arzon krossovka ko'rdingiz. Oldindan to'liq to'lov so'rashdi.", q: "Xavfsiz yo'l qaysi?", options: [
        { t: "To'lovni kartadan kartaga darhol o'tkazaman — narx juda qulay", ok: false, why: "Xato. Notanish sotuvchiga to'liq oldindan to'lov — firibgarlikning eng keng tarqalgan yo'li." },
        { t: "Sotuvchi haqida ma'lumot, sharhlar va yetkazib berishda to'lash imkonini tekshiraman", ok: true, why: "To'g'ri. Rasmiy ma'lumot, haqiqiy sharhlar va qo'lga olganda to'lash — eng yaxshi himoya." },
        { t: "Faqat sotuvchi yuborgan «chek» rasmiga ishonaman", ok: false, why: "Xato. Chek rasmini soxtalashtirish oson — u kafolat emas." },
      ] },
      { text: "Pulni o'tkazdingiz. Tovar kelmadi, sahifa sizni bloklab qo'ydi.", q: "Endi nima qilasiz?", options: [
        { t: "Yozishmalar va to'lov chekini saqlab, ichki ishlar organiga firibgarlik haqida ariza beraman va bankka xabar qilaman", ok: true, why: "To'g'ri. Aldov yo'li bilan pulni egallash — firibgarlik. Tez harakat qilsangiz, bank va tergov pul izini topishi osonroq." },
        { t: "Boshqa sahifa ochib, ularga yozib qo'rqitaman", ok: false, why: "Xato. Bu natija bermaydi va dalillarni yo'qotishingiz mumkin." },
        { t: "Endi hech narsa qilib bo'lmaydi", ok: false, why: "Xato. Karta raqami, telefon va yozishmalar orqali aybdorni aniqlash mumkin." },
      ] },
    ],
  },
  {
    id: "s-blackmail", icon: "Lock",
    ask: "Kimdir mening shaxsiy suratlarimni tarqatish bilan qo'rqitib pul talab qilyapti",
    title: "Surat bilan qo'rqitish",
    refs: [{ code: "JK", article: "165" }, { code: "JK", article: "141-3" }],
    steps: [
      { text: "Notanish akkaunt: «Shaxsiy suratlaring menda. Pul tashlamasang, hammaga tarqataman» deb yozdi.", q: "Birinchi qadamingiz?", options: [
        { t: "Darhol pul yuboraman, toki tarqatmasin", ok: false, why: "Xato. To'lov tovlamachini to'xtatmaydi — odatda talablar ko'payadi." },
        { t: "Yozishmani o'chirmay skrinshot qilaman va javob bermayman", ok: true, why: "To'g'ri. Dalil — eng muhimi. Tovlamachi bilan muzokara qilmang." },
        { t: "Uni o'zim haqorat qilib, qo'rqitaman", ok: false, why: "Xato. Bu sizni ham huquqbuzarga aylantirishi mumkin." },
      ] },
      { text: "Tovlamachi yana yozmoqda va vaqt belgilab berdi.", q: "Qaysi yo'l to'g'ri?", options: [
        { t: "Ichki ishlar organiga tovlamachilik haqida ariza beraman va platformaga shikoyat qilaman", ok: true, why: "To'g'ri. Qo'rqitish bilan pul talab qilish — tovlamachilik, sha'nni kamsituvchi ma'lumotni tarqatish ham alohida jinoyat." },
        { t: "Telefonni o'chirib, hammasini unutaman", ok: false, why: "Xato. Muammo yo'qolmaydi, tovlamachi esa boshqalarni ham aldashda davom etadi." },
        { t: "Pulning yarmini yuborib, kelishaman", ok: false, why: "Xato. Har qanday to'lov — tovlamachilikni rag'batlantirish." },
      ] },
    ],
  },
  {
    id: "s-data", icon: "Database",
    ask: "Ilova mening shaxsiy ma'lumotlarimni roziligimsiz uchinchi shaxslarga berdi, nima qilaman?",
    title: "Ma'lumotlar sotildi",
    refs: [{ code: "MJK", article: "46-2" }],
    steps: [
      { text: "Bir ilovada ro'yxatdan o'tdingiz. Endi sizga notanish kompaniyalar ismingiz bilan qo'ng'iroq qilishyapti.", q: "Bu nimani anglatishi mumkin?", options: [
        { t: "Oddiy tasodif", ok: false, why: "Xato. Ism va raqamingiz bilan kelgan qo'ng'iroqlar ma'lumotlaringiz uzatilganidan dalolat beradi." },
        { t: "Ma'lumotlarim roziligimsiz uchinchi shaxslarga berilgan bo'lishi mumkin — bu qonunchilik buzilishi", ok: true, why: "To'g'ri. Shaxsga doir ma'lumotlarni roziliksiz uchinchi shaxsga berish — javobgarlikka sabab." },
        { t: "Ro'yxatdan o'tganim uchun hamma narsaga rozi bo'lganman", ok: false, why: "Xato. Rozilik aniq maqsadlar uchun beriladi; uni cheksiz tarqatishga ruxsat deb bo'lmaydi." },
      ] },
      { text: "Siz ilovaga yozdingiz, ular javob bermayapti.", q: "Keyingi qadam?", options: [
        { t: "Ma'lumotlarimni o'chirishni yozma talab qilaman va vakolatli organga shikoyat beraman", ok: true, why: "To'g'ri. Siz o'z ma'lumotlaringizni o'chirishni talab qilishga haqlisiz; e'tiborsiz qolsa — vakolatli organ." },
        { t: "Telefon raqamimni almashtiraman, boshqa hech narsa qilmayman", ok: false, why: "Xato. Bu muammoni yashiradi, lekin buzilish uchun javobgarlik va ma'lumotlarning tarqalishi davom etadi." },
        { t: "Ilovaga yomon baho qo'yaman, yetarli", ok: false, why: "Xato. Baho qo'yish huquqiy chora emas." },
      ] },
    ],
  },
];
