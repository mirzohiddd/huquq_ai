"use strict";
/** VAZIYATLAR · Birinchi ish. Avvalgi 2 vaziyat `situations.js` da. */
const old = require("./situations");
const pick = (id) => old.find((s) => s.id === id);

module.exports = [
  pick("s-probation"),
  pick("s-vacation"),
  {
    id: "s-no-contract", icon: "FileX",
    ask: "Ish beruvchi meni mehnat shartnomasisiz, rasmiylashtirmasdan ishlatyapti, nima qilaman?",
    title: "Shartnomasiz ish",
    refs: [{ code: "MK", article: "106" }, { code: "MK", article: "127" }],
    steps: [
      { text: "Kafega ofitsiant bo'lib ishga kirdingiz. Egasi: «Shartnoma keyin, hozir ishlayver» dedi. Bir oy o'tdi — hech qanday hujjat yo'q.", q: "Hozir nima qilasiz?", options: [
        { t: "Yozma mehnat shartnomasi va ishga qabul buyrug'ini talab qilaman", ok: true, why: "To'g'ri. Mehnat shartnomasi yozma tuziladi va ish beruvchi ishga qabul haqida buyruq chiqarishi shart. Bu — maosh, ta'til va pensiya stajingiz kafolati." },
        { t: "Hech narsa demayman — maosh berilyapti-ku", ok: false, why: "Xato. Rasmiylashtirilmagan ishda staj hisoblanmaydi, ijtimoiy kafolatlar bo'lmaydi va nizo chiqsa, ish faktini isbotlash qiyin." },
        { t: "Darhol ishdan ketaman", ok: false, why: "Xato. Shoshilmang — avval huquqingizni talab qiling. Ishlagan kunlar uchun haq olish huquqingiz saqlanadi." },
      ] },
      { text: "Egasi: «Shartnoma talab qilsang, ishdan bo'shataman» dedi.", q: "Eng to'g'ri qadam?", options: [
        { t: "Ish faktini tasdiqlovchi dalillarni (smena jadvali, yozishmalar, guvohlar) to'plab, mehnat inspeksiyasiga murojaat qilaman", ok: true, why: "To'g'ri. Xodim amalda ishga qo'yilgan bo'lsa, mehnat munosabati vujudga kelgan hisoblanadi. Inspeksiya rasmiylashtirishni talab qiladi." },
        { t: "Tahdidga bo'ysunib, indamay ishlayveraman", ok: false, why: "Xato. Tahdid — huquqbuzarlik. Dalillarni hozirdan to'plab borish kerak." },
        { t: "Ijtimoiy tarmoqda kafeni yomonlayman", ok: false, why: "Xato. Bu huquqingizni tiklamaydi va tuhmat da'vosiga sabab bo'lishi mumkin." },
      ] },
    ],
  },
  {
    id: "s-minor", icon: "Sparkles",
    ask: "Necha yoshdan ishga kirish mumkin va o'smirlar uchun qanday cheklovlar bor?",
    title: "Yozgi ish o'smir uchun",
    refs: [{ code: "MK", article: "118" }],
    steps: [
      { text: "Ukangiz hali maktabda o'qiydi va yozgi ta'tilda do'konda ishlamoqchi. Do'kon egasi «yoshing kichik — hujjatsiz ishlaysan» dedi.", q: "Qaysi fikr to'g'ri?", options: [
        { t: "O'smirni ishga olish qonunda belgilangan yoshdan va kerakli hollarda ota-ona (vasiy) roziligi bilan, rasmiy tartibda mumkin", ok: true, why: "To'g'ri. Qonun ishga qabul qilish yoshini va o'smirlar uchun qo'shimcha kafolatlarni belgilaydi — hujjatsiz ishlatish ularni buzadi." },
        { t: "O'smirni faqat hujjatsiz ishlatish mumkin", ok: false, why: "Xato. Aksincha, o'smirlar mehnati qo'shimcha himoyada — rasmiylashtirish yanada muhim." },
        { t: "Maktab o'quvchisi umuman ishlay olmaydi", ok: false, why: "Xato. Qonunda belgilangan yoshdan va shartlarda o'quvdan bo'sh vaqtda yengil ish mumkin." },
      ] },
      { text: "Ukangizni og'ir yuklarni tashishga va kechki smenaga qo'yishmoqchi.", q: "Bunga qanday qaraysiz?", options: [
        { t: "Bu mumkin, chunki o'zi rozi", ok: false, why: "Xato. O'smirning roziligi qonundagi taqiqlarni bekor qilmaydi." },
        { t: "O'smirlarni og'ir, zararli ishlarga va tungi ishga jalb qilish cheklangan — buni rad etish kerak", ok: true, why: "To'g'ri. Voyaga yetmaganlar uchun ish vaqti qisqartirilgan va og'ir, zararli, tungi ishlar cheklangan." },
        { t: "Faqat ota-onasi qarshi bo'lsa taqiqlanadi", ok: false, why: "Xato. Taqiq ota-onaning fikriga bog'liq emas — u qonun bilan belgilangan." },
      ] },
    ],
  },
  {
    id: "s-study-work", icon: "BookOpen",
    ask: "Ishlab turib o'qiyotgan talabaga imtihon sessiyasi uchun ta'til beriladimi?",
    title: "Ish va sessiya",
    refs: [{ code: "MK", article: "386" }],
    steps: [
      { text: "Siz kunduzi ishlaysiz va sirtqi bo'limda o'qiysiz. Sessiya boshlanmoqda, rahbar «ta'til yo'q, ishla» dedi.", q: "Sizda qanday huquq bor?", options: [
        { t: "Hech qanday — o'qish shaxsiy ishingiz", ok: false, why: "Xato. Ishni o'qish bilan birga olib borayotgan xodimlar uchun qonun alohida kafolatlar beradi." },
        { t: "Ishni o'qish bilan qo'shib borayotgan xodimga qonunda belgilangan hollarda o'quv ta'tili va kafolatlar beriladi", ok: true, why: "To'g'ri. Belgilangan shartlarda o'quv ta'tili beriladi va ish joyi saqlanadi." },
        { t: "Faqat ish haqi saqlanmaydigan ta'til so'rash mumkin", ok: false, why: "Xato. Qonun o'quv ta'tilini alohida tartibda kafolatlaydi — faqat haqsiz ta'til bilan cheklanmaydi." },
      ] },
      { text: "Rahbar ta'tilga rozi bo'ldi, lekin «qaytganingda o'rning band bo'ladi» dedi.", q: "Bu qonuniymi?", options: [
        { t: "Ha, ta'til olganingiz uchun ish joyidan ayrilasiz", ok: false, why: "Xato. Ta'tilda bo'lgan davrda xodimning ish joyi va lavozimi saqlanadi." },
        { t: "Yo'q — o'quv ta'tili uchun ishdan bo'shatish yoki lavozimdan tushirish mumkin emas", ok: true, why: "To'g'ri. Qonuniy ta'tildan foydalanish — xodimni jazolash uchun asos emas." },
        { t: "Faqat ish beruvchi xohlasa joy saqlanadi", ok: false, why: "Xato. Ish joyini saqlash — qonuniy kafolat, ish beruvchining xohishi emas." },
      ] },
    ],
  },
];
