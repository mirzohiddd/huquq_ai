"use strict";
/**
 * MINI APP DARSLARI — 1–2-bo'lim (xaridor, ish joyi).
 *
 * Har bir dars: qisqa voqea → tanlov (3 javob + izoh) → o'yin (ketma-ketlik
 * yoki hujjatdagi muhim joy) → yakun. ⚠️ Matnda aniq muddat, summa yoki foiz
 * YOZILMAGAN — ular `refs` orqali bazadagi modda matnidan jonli ko'rsatiladi
 * (havolalar LegalChunk bilan tekshirilgan, 2026-10-30).
 * `order.items` — TO'G'RI tartibda; mijozga aralashtirib yuboriladi.
 */
module.exports = [
  {
    id: "headphones", ask: "Internetdan olgan tovarim nuqsonli chiqdi, nima qilaman?",
    unit: "consumer",
    title: "Internetdan nuqsonli quloqchin",
    story: "Internetdan quloqchin olding. Yetib keldi, lekin bir tomoni ishlamaydi.",
    choice: {
      q: "Birinchi nima qilasan?",
      options: [
        { t: "Sotuvchiga yozaman: nuqsonni aytaman, buyurtma va to'lov chekini saqlab qo'yaman", ok: true, why: "To'g'ri. Nuqson haqida avval sotuvchiga talab qo'yiladi. Qonun xaridorga tanlash huquqini beradi: almashtirish, tuzattirish, narxni kamaytirish yoki pulni qaytarish." },
        { t: "O'zim ochib, simini ulab ko'raman", ok: false, why: "Xato. Tovarni o'zingiz ochsangiz, nuqson kimning aybi bilan paydo bo'lganini isbotlash qiyinlashadi va sotuvchi buni rad etishga bahona qiladi." },
        { t: "Hech narsa qilmayman — arzon narsa edi", ok: false, why: "Xato. Narxi qanday bo'lishidan qat'i nazar, nuqsonli tovar sotilgan bo'lsa xaridor talab qilishga haqli." },
      ],
    },
    game: {
      type: "order",
      prompt: "Harakatlarni to'g'ri ketma-ketlikda joylashtiring",
      items: [
        "Nuqsonni video yoki suratga olaman",
        "Buyurtma raqami va to'lov chekini saqlayman",
        "Sotuvchiga yozma talab yuboraman",
        "Javob bo'lmasa, iste'molchilar huquqlarini himoya qilish organiga yoki sudga murojaat qilaman",
      ],
      why: "Avval dalil, keyin sotuvchiga talab, eng oxirida rasmiy murojaat. Dalilsiz talabni rad etish oson.",
    },
    takeaway: "Internet orqali olingan tovar ham do'kondagi kabi himoyalangan. Avval dalil, keyin sotuvchiga yozma talab.",
    refs: [{ code: "IHQ", article: "13" }, { code: "IHQ", article: "28-1" }],
  },
  {
    id: "exchange", ask: "Sotib olgan kiyimim o'lchami to'g'ri kelmadi, almashtirsa bo'ladimi?",
    unit: "consumer",
    title: "Sifatli, lekin to'g'ri kelmagan kiyim",
    story: "Do'kondan ko'ylak olding. Uyda kiyib ko'rsang, o'lchami kichik ekan. Hali yorlig'i ham turibdi.",
    choice: {
      q: "Do'konga borganda nima deysan?",
      options: [
        { t: "O'lchami to'g'ri kelmadi, chek va yorlig'i bor — almashtirib bering", ok: true, why: "To'g'ri. Maqbul sifatli tovar ham o'lchami, shakli yoki rangi to'g'ri kelmasa, qonunda belgilangan muddat ichida almashtirilishi mumkin — tovar ko'rinishi va cheki saqlangan bo'lsa." },
        { t: "Ko'ylak sifatsiz, pulimni qaytaring", ok: false, why: "Xato. Ko'ylak sifatli — uni nuqsonli deyish yolg'on bo'ladi va nizoni chigallashtiradi. Bu yerda boshqa asos bor: maqbul sifatli tovarni almashtirish huquqi." },
        { t: "Hech narsa demayman, chunki sifatli tovar qaytarilmaydi", ok: false, why: "Xato. Sifatli tovarni ham almashtirish huquqi bor, lekin ayrim tovarlar bundan istisno qilingan — ro'yxati qonunda." },
      ],
    },
    game: {
      type: "spot",
      prompt: "Chekdagi qaysi qator almashtirish uchun eng muhim?",
      title: "KASSA CHEKI",
      lines: ["«Moda» do'koni", "Ko'ylak, ko'k rang, M o'lcham", "Xarid sanasi va vaqti", "Kassir: Dilnoza", "Rahmat, yana keling!"],
      answer: 2,
      why: "Almashtirish muddati xarid kunidan hisoblanadi — shuning uchun chekdagi xarid sanasi eng muhim dalil.",
    },
    takeaway: "Sifatli tovar to'g'ri kelmasa ham almashtirsa bo'ladi: muddat, yorliq va chek muhim.",
    refs: [{ code: "IHQ", article: "18" }],
  },
  {
    id: "warranty", ask: "Kafolatdagi telefon ta'mirdan qaytmayapti, nima qilaman?",
    unit: "consumer",
    title: "Kafolatdagi telefon",
    story: "Telefoning kafolat muddatida buzildi. Servis markazi «tuzatamiz» dedi, lekin ancha vaqt o'tdi, telefon hamon qaytmadi.",
    choice: {
      q: "Endi nima qilasan?",
      options: [
        { t: "Sotuvchiga yozma talab berib, qonundagi muddat buzilganini aytaman", ok: true, why: "To'g'ri. Kafolat muddatida topilgan nuqson qonunda belgilangan muddat ichida bepul tuzatilishi shart. Muddat buzilsa, xaridor narxni kamaytirish yoki shartnomani bekor qilishni talab qila oladi." },
        { t: "Yangi telefon sotib olaman, eskisini unutaman", ok: false, why: "Xato. Sotuvchi o'z majburiyatini bajarmagan — huquqingizdan voz kechishingiz shart emas." },
        { t: "Servisga ta'mir pulini o'zim to'layman", ok: false, why: "Xato. Kafolat muddatida aniqlangan nuqson bepul bartaraf etiladi." },
      ],
    },
    game: {
      type: "order",
      prompt: "Talab qilish tartibini tiklang",
      items: [
        "Kafolat taloni va chekni topaman",
        "Telefon qachon topshirilganini ko'rsatuvchi hujjatni olaman",
        "Sotuvchiga muddat buzilgani haqida yozma talab beraman",
        "Rad etilsa, narxni kamaytirish yoki pulni qaytarishni talab qilaman",
      ],
      why: "Hujjatlar muddatni hisoblash uchun kerak; talab yozma bo'lsa, keyin uni isbotlash oson.",
    },
    takeaway: "Kafolat — bepul ta'mir va aniq muddat degani. Topshirish hujjatini albatta oling.",
    refs: [{ code: "IHQ", article: "15" }, { code: "IHQ", article: "16" }],
  },
  {
    id: "contract", ask: "Mehnat shartnomasi yozma tuzilishi shartmi?",
    unit: "labor",
    title: "Shartnomasiz ish",
    story: "Yangi ishga kirding. Rahbar: «Shartnoma keyin, hozircha ishlayvering», dedi.",
    choice: {
      q: "Qanday yo'l tutasan?",
      options: [
        { t: "Mehnat shartnomasini yozma tuzib, bir nusxasini menga berishlarini so'rayman", ok: true, why: "To'g'ri. Mehnat shartnomasi yozma shaklda, kamida ikki nusxada tuziladi va bir nusxasi xodimga beriladi. Bu sizning ish haqi va vazifalaringiz kafolati." },
        { t: "Mayli, og'zaki kelishuv ham yetarli", ok: false, why: "Xato. Og'zaki kelishuvda ish haqi, lavozim yoki ish vaqti haqidagi nizoda o'z gapingizni isbotlash juda qiyin." },
        { t: "Darhol ishdan ketaman", ok: false, why: "Shart emas. Avval qonuniy talabni — yozma shartnomani so'rang. Ko'p ish beruvchi buni bajaradi." },
      ],
    },
    game: {
      type: "spot",
      prompt: "Shartnomadagi qaysi band sizning maoshingizni belgilaydi?",
      title: "MEHNAT SHARTNOMASI",
      lines: ["1. Taraflar: «Baraka» MChJ va xodim", "2. Lavozim: sotuv menejeri", "3. Ish joyi: Toshkent sh., bosh ofis", "4. Mehnatga haq to'lash shartlari", "5. Shartnoma imzolangan sana"],
      answer: 3,
      why: "Mehnatga haq to'lash shartlari — shartnomaga kiritilishi shart bo'lgan asosiy shartlardan biri. Imzolashdan oldin shu bandni albatta o'qing.",
    },
    takeaway: "Ish — yozma shartnoma bilan. Imzolashdan oldin lavozim, ish joyi va ish haqi bandlarini o'qing.",
    refs: [{ code: "MK", article: "106" }, { code: "MK", article: "104" }],
  },
  {
    id: "salary", ask: "Maosh 2 oy berilmadi, nima qilaman?",
    unit: "labor",
    title: "Maosh kechikdi",
    story: "Ikki oydan beri maoshing berilmayapti. Buxgalter «pul yo'q, kuting» deydi.",
    choice: {
      q: "Birinchi qadaming qanday?",
      options: [
        { t: "Ish beruvchiga yozma ariza beraman va qarzni talab qilaman", ok: true, why: "To'g'ri. Ish haqi belgilangan muddatlarda to'lanishi shart. Kechiktirgan ish beruvchi moddiy javobgar bo'ladi — qarzni kompensatsiya bilan to'lashi kerak." },
        { t: "Ishga chiqmay qo'yaman", ok: false, why: "Xato. O'zboshimchalik bilan ishga chiqmaslik sizni intizomiy javobgarlikka qo'yishi mumkin — avval qonuniy yo'l." },
        { t: "Ijtimoiy tarmoqda rahbarni haqoratlayman", ok: false, why: "Xato. Haqorat qilish o'zingizni javobgarlikka tortadi va asosiy nizoni hal qilmaydi." },
      ],
    },
    game: {
      type: "order",
      prompt: "Maoshni undirish yo'lini tartiblang",
      items: [
        "Ishlaganimni ko'rsatuvchi hujjatlarni yig'aman (shartnoma, buyruq, tabel)",
        "Ish beruvchiga yozma ariza beraman va nusxasiga qabul belgisini olaman",
        "Mehnat inspeksiyasiga murojaat qilaman",
        "Hal bo'lmasa, sudga da'vo bilan boraman",
      ],
      why: "Dalil → yozma talab → nazorat organi → sud. Har bosqich keyingisi uchun dalil bo'ladi.",
    },
    takeaway: "Maoshni «pul yo'q» bahonasi bilan kechiktirish mumkin emas. Har talabni yozma bering.",
    refs: [{ code: "MK", article: "253" }, { code: "MK", article: "333" }],
  },
  {
    id: "probation", ask: "Sinov muddatida ish haqi to'lanadimi?",
    unit: "labor",
    title: "Sinov muddatida maosh",
    story: "Ish beruvchi: «Sinov muddatida pul to'lamaymiz, bu amaliyot», dedi.",
    choice: {
      q: "Bu gap to'g'rimi?",
      options: [
        { t: "Yo'q, sinov davrida ham mehnat qonunchiligi to'liq amal qiladi va ish haqi to'lanadi", ok: true, why: "To'g'ri. Dastlabki sinov davrida xodimga mehnat to'g'risidagi qonunchilik to'liq tatbiq etiladi — demak, ish haqi ham to'lanadi." },
        { t: "Ha, sinov — bepul ish", ok: false, why: "Xato. Qonunda bunday qoida yo'q: sinov — ishga yaroqlilikni tekshirish, bepul mehnat emas." },
        { t: "Faqat yarmi to'lanadi", ok: false, why: "Xato. Sinov davrida ish haqini kamaytirish haqida umumiy qoida yo'q — shartnomadagi ish haqi to'lanadi." },
      ],
    },
    game: {
      type: "spot",
      prompt: "Shartnomadagi qaysi band sinov muddatini belgilaydi?",
      title: "MEHNAT SHARTNOMASI",
      lines: ["1. Lavozim: kassir", "2. Ish vaqti: besh kunlik ish haftasi", "3. Dastlabki sinov sharti va muddati", "4. Ish kiyimi beriladi", "5. Taraflar imzosi"],
      answer: 2,
      why: "Sinov faqat shartnomada yozilgan bo'lsa qo'llanadi. Bu band bo'lmasa — xodim sinovsiz qabul qilingan.",
    },
    takeaway: "Sinov muddati — maoshsiz ish emas. Sinov sharti shartnomada yozilishi kerak.",
    refs: [{ code: "MK", article: "131" }, { code: "MK", article: "129" }],
  },
];
