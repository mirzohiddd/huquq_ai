"use strict";
/** VAZIYATLAR · Xarid va kafolat. Avvalgi 2 vaziyat `situations.js` da. */
const old = require("./situations");
const pick = (id) => old.find((s) => s.id === id);

module.exports = [
  pick("s-phone"),
  pick("s-wrongitem"),
  {
    id: "s-late-delivery", icon: "Truck",
    ask: "Oldindan to'lagan tovarimni sotuvchi kelishilgan muddatda yetkazmadi, nima qilaman?",
    title: "Yetkazish kechikdi",
    refs: [{ code: "IHQ", article: "12-1" }],
    steps: [
      { text: "Divanni oldindan to'liq to'lab, yetkazishni kelishdingiz. Muddat o'tdi — divan yo'q, sotuvchi «yana kutib turing» demoqda.", q: "Sizning huquqingiz?", options: [
        { t: "Kutishdan boshqa iloj yo'q", ok: false, why: "Xato. Topshirish muddati buzilganda xaridor yangi muddat belgilash yoki pulni qaytarishni talab qilishi mumkin." },
        { t: "Yangi muddat belgilashni yoki to'langan pulni qaytarishni talab qilaman, kechikish uchun javobgarlikni ham", ok: true, why: "To'g'ri. Oldindan to'langan tovarni topshirish muddati buzilsa, qonun xaridorga tanlash huquqini beradi." },
        { t: "Faqat sudga borish mumkin, sotuvchiga talab qo'yish befoyda", ok: false, why: "Xato. Avval sotuvchiga yozma talab qo'yiladi — ko'pincha shu yetarli." },
      ] },
      { text: "Siz pulni qaytarishni talab qildingiz. Sotuvchi «pul faqat bir oydan keyin qaytadi» dedi.", q: "Qanday javob berasiz?", options: [
        { t: "Rozi bo'laman, chunki u shunday qoida qo'ygan", ok: false, why: "Xato. Pulni qaytarish muddati sotuvchining ichki qoidasi bilan emas, qonun bilan belgilanadi." },
        { t: "Yozma talab yuborib, qonunda belgilangan muddatda qaytarishni, aks holda iste'molchilar huquqlarini himoya qilish organiga murojaatni bildiraman", ok: true, why: "To'g'ri. Yozma talab — muddatni boshlaydi va nizoda dalil bo'ladi." },
        { t: "Divanning o'rniga boshqa narsani olaman, pul shart emas", ok: false, why: "Xato. Bu sizning tanlovingiz bo'lishi mumkin, lekin majburiy emas — pulni qaytarish huquqingiz bor." },
      ] },
    ],
  },
  {
    id: "s-price", icon: "Receipt",
    ask: "Sotuvchi tovar haqida noto'g'ri ma'lumot berdi, men aldanib oldim, nima qilaman?",
    title: "«Original» deb sotishdi",
    refs: [{ code: "IHQ", article: "6" }, { code: "IHQ", article: "7" }],
    steps: [
      { text: "Sotuvchi «bu original, kafolatli» deb soat sotdi. Keyin ma'lum bo'ldiki, u nusxa ekan.", q: "Bu qanday holat?", options: [
        { t: "Xaridor o'zi tekshirishi kerak edi — sotuvchi javob bermaydi", ok: false, why: "Xato. Sotuvchi tovar haqida to'g'ri va to'liq ma'lumot berishi shart." },
        { t: "Noto'g'ri ma'lumot berilgan — shartnomani bekor qilib pulni qaytarish va zararni qoplashni talab qilish mumkin", ok: true, why: "To'g'ri. Tovar haqida noto'g'ri ma'lumot berilsa, iste'molchi shartnomani bekor qilish va zararni qoplashni talab qilishga haqli." },
        { t: "Faqat narxning bir qismini qaytarish mumkin", ok: false, why: "Xato. Qonun to'liq bekor qilish va zararni qoplash imkonini beradi." },
      ] },
      { text: "Sotuvchi «chek yo'q — isbotlay olmaysan» demoqda.", q: "Eng yaxshi dalil?", options: [
        { t: "Karta to'lovi tarixi, yozishmalar va sotuvchi «original» degan e'lon", ok: true, why: "To'g'ri. Chek bo'lmasa ham, to'lov va kelishuvni tasdiqlovchi boshqa dalillar bilan talab qo'yish mumkin." },
        { t: "Hech qanday — chek bo'lmasa, talab qilib bo'lmaydi", ok: false, why: "Xato. Chekning yo'qligi talab qilish huquqidan mahrum qilmaydi." },
        { t: "Faqat do'stimning so'zi", ok: false, why: "Xato. Guvohlik foydali, lekin yozma va elektron dalillar kuchliroq." },
      ] },
    ],
  },
  {
    id: "s-no-return", icon: "BadgeAlert",
    ask: "Do'konda «sotilgan tovar qaytarilmaydi» degan yozuv bor, bu qonuniymi?",
    title: "«Tovar qaytarilmaydi»",
    refs: [{ code: "IHQ", article: "21" }, { code: "IHQ", article: "14" }],
    steps: [
      { text: "Kassada: «Sotilgan tovar qaytarilmaydi va almashtirilmaydi». Siz olgan dazmol birinchi kuni ishlamay qoldi.", q: "Bu yozuv kuchga egami?", options: [
        { t: "Ha — sotib olayotganda ko'rganman, demak roziman", ok: false, why: "Xato. Iste'molchi huquqlarini qonunga nisbatan cheklaydigan shartlar haqiqiy emas." },
        { t: "Yo'q — qonundagi iste'molchi huquqlarini cheklovchi shartlar haqiqiy emas, nuqsonli tovar almashtiriladi", ok: true, why: "To'g'ri. Do'kon e'loni qonunni bekor qila olmaydi. Nuqsonli tovarni almashtirish yoki pulni qaytarish talab qilinadi." },
        { t: "Faqat kafolat talonida yozilgan bo'lsa haqiqiy", ok: false, why: "Xato. Qaysi hujjatda yozilganidan qat'i nazar, huquqni cheklovchi shart kuchga ega emas." },
      ] },
      { text: "Sotuvchi baribir rad etmoqda.", q: "Qanday qilasiz?", options: [
        { t: "Yozma talab yuboraman, rad etsa iste'molchilar huquqlarini himoya qilish organiga yoki sudga murojaat qilaman", ok: true, why: "To'g'ri. Yozma talab va rad javobi — keyingi bosqich uchun asosiy dalil." },
        { t: "Dazmolni o'zim tuzataman", ok: false, why: "Xato. Mustaqil ta'mir sotuvchiga kafolatdan bosh tortishga bahona beradi." },
        { t: "Kassirni haqorat qilaman", ok: false, why: "Xato. Bu sizni javobgarlikka olib keladi." },
      ] },
    ],
  },
];
