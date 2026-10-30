"use strict";
/** VAZIYATLAR · Ijara va uy-joy. */
module.exports = [
  {
    id: "s-deposit", icon: "PiggyBank",
    ask: "Ijara tugagach uy egasi kafolat pulini qaytarmayapti, nima qilaman?",
    title: "Kafolat puli qaytmadi",
    refs: [{ code: "FK2", article: "535" }, { code: "FK", article: "107" }],
    steps: [
      { text: "Ijara boshida uy egasiga «kafolat puli» berdingiz. Endi chiqyapsiz, u «uyda tirnalgan joy bor» deb pulni bermayapti.", q: "Birinchi navbatda nima muhim?", options: [
        { t: "Shartnomada kafolat puli va qaytarish sharti yozilganmi — shuni tekshiraman", ok: true, why: "To'g'ri. Yozma shartnoma va tilxat — kafolat pulini qaytarish talabining asosi." },
        { t: "Kalitlarni bermay turaman", ok: false, why: "Xato. Kalitni ushlab qolish nizoni chuqurlashtiradi va sizni shartnomani buzgan tarafga aylantirishi mumkin." },
        { t: "Bunday pul hech qachon qaytarilmaydi", ok: false, why: "Xato. Shartnomada kelishilgan bo'lsa, asossiz ushlab qolish mumkin emas." },
      ] },
      { text: "Uy egasi zarar summasini aytmasdan, butun pulni ushlab qolmoqchi.", q: "To'g'ri yo'l?", options: [
        { t: "Uyni topshirish dalolatnomasini (suratlar bilan) tuzishni va zararni hujjat bilan asoslashni talab qilaman", ok: true, why: "To'g'ri. Uy qanday holatda topshirilganini qayd etish — nizoda eng kuchli dalil." },
        { t: "Butun pulni berishga rozi bo'laman", ok: false, why: "Xato. Zarar isbotlanmagan bo'lsa, ushlab qolish asossiz." },
        { t: "Uy egasini qo'rqitaman", ok: false, why: "Xato. Bu sizga qarshi ishlaydi." },
      ] },
    ],
  },
  {
    id: "s-landlord-visit", icon: "DoorClosed",
    ask: "Uy egasi ijaradagi kvartiraga mening ruxsatimsiz kirib turadi, bu qonuniymi?",
    title: "Uy egasi ruxsatsiz kiradi",
    refs: [{ code: "KONS", article: "31" }, { code: "UJK", article: "49" }],
    steps: [
      { text: "Ishdan qaytsangiz, uy egasi kvartirada narsalaringizni ko'zdan kechirib yuribdi. U «uy meniki» demoqda.", q: "Bu holat qanday baholanadi?", options: [
        { t: "Mulkdor xohlagan paytda kirishi mumkin", ok: false, why: "Xato. Ijaraga bergan mulkdor turar joydan foydalanish huquqini ijarachiga o'tkazgan." },
        { t: "Ijara davrida ijarachining shaxsiy hayoti va turar joydan foydalanish huquqi himoyalangan — kirish kelishilgan tartibda bo'lishi kerak", ok: true, why: "To'g'ri. Shaxsiy hayot daxlsiz; ijaraga beruvchi shartnoma bo'yicha majburiyatlarini bajaradi, o'zboshimchalik bilan kirib yurmaydi." },
        { t: "Faqat narsalarga tegmasa kirishi mumkin", ok: false, why: "Xato. Ruxsatsiz kirishning o'zi muammo." },
      ] },
      { text: "Uy egasi «tekshirib turaman» deb kalitni qaytarmayapti.", q: "Eng to'g'ri qadam?", options: [
        { t: "Kirish tartibini (oldindan kelishib, ijarachi ishtirokida) shartnomaga qo'shishni yozma taklif qilaman", ok: true, why: "To'g'ri. Shartnomada kirish tartibi aniq yozilsa, nizolar oldi olinadi." },
        { t: "Qulfni almashtirib, uy egasiga aytmayman", ok: false, why: "Xato. Mulkka o'zgartirish kiritish shartnomani buzish hisoblanishi mumkin." },
        { t: "Ijarani to'lamay qo'yaman", ok: false, why: "Xato. To'lovni to'xtatish sizni aybdor tarafga aylantiradi." },
      ] },
    ],
  },
  {
    id: "s-rent-repair", icon: "Wrench",
    ask: "Ijaradagi kvartirada quvur yorildi, ta'mirni kim qiladi?",
    title: "Quvur yorildi",
    refs: [{ code: "FK2", article: "542" }],
    steps: [
      { text: "Ijaradagi kvartirada eski quvur yorilib, suv oqmoqda. Uy egasi telefonni ko'tarmayapti.", q: "Darhol nima qilasiz?", options: [
        { t: "Suvni yopib, zararni kamaytiraman, hammasini suratga olaman va uy egasiga yozma xabar beraman", ok: true, why: "To'g'ri. Zararni kamaytirish va dalil to'plash — har ikki tomonning manfaati." },
        { t: "Hech narsa qilmayman, bu uy egasining ishi", ok: false, why: "Xato. Zararni kamaytirish choralarini ko'rmaslik javobgarlikni sizga ham yuklashi mumkin." },
        { t: "Uydan chiqib ketaman", ok: false, why: "Xato. Shoshilinch holatda harakatsizlik zararni oshiradi." },
      ] },
      { text: "Usta chaqirdingiz. Uy egasi «pul bermayman» dedi.", q: "Xarajat kimniki?", options: [
        { t: "Ijaraga beruvchi kamchilik uchun javob beradi — xabardor qilib, xarajatni ijara haqidan ushlab qolish talab qilinishi mumkin", ok: true, why: "To'g'ri. Yashirin kamchilik uchun ijaraga beruvchi javobgar; xarajat hujjati va xabarnoma kerak." },
        { t: "Doim ijarachiniki", ok: false, why: "Xato. Kamchilik ijarachi aybi bilan bo'lmasa, javobgarlik ijaraga beruvchida." },
        { t: "Qo'shnilarniki", ok: false, why: "Xato. Qo'shnilar faqat ular aybdor bo'lsa javob beradi." },
      ] },
    ],
  },
  {
    id: "s-flood", icon: "Droplets",
    ask: "Yuqori qavatdagi qo'shni kvartiramni suv bosdi, zararni kim to'laydi?",
    title: "Qo'shni suv bosdi",
    refs: [{ code: "FK2", article: "985" }],
    steps: [
      { text: "Yuqori qavatdagi qo'shnining kir yuvish mashinasi buzilib, sizning shiftingiz va mebelingiz shikastlandi.", q: "Birinchi qadam?", options: [
        { t: "Zararni suratga olib, uy-joy boshqaruv tashkiloti bilan dalolatnoma tuzaman", ok: true, why: "To'g'ri. Dalolatnoma — zarar sababi va hajmini tasdiqlovchi asosiy hujjat." },
        { t: "Darhol o'zim ta'mirlab qo'yaman", ok: false, why: "Xato. Dalilsiz ta'mir zararni isbotlashni qiyinlashtiradi." },
        { t: "Qo'shni bilan janjallashaman", ok: false, why: "Xato. Bu masalani hal qilmaydi." },
      ] },
      { text: "Qo'shni «men atayin qilmadim, to'lamayman» demoqda.", q: "Kim javobgar?", options: [
        { t: "Hech kim, chunki atayin qilinmagan", ok: false, why: "Xato. Zarar yetkazgan shaxs, odatda, ehtiyotsizlik bilan ham javobgar bo'ladi." },
        { t: "Zarar yetkazgan qo'shni, agar u o'zining aybi yo'qligini isbotlay olmasa, zararni to'liq qoplaydi", ok: true, why: "To'g'ri. Zarar yetkazganlik uchun javobgarlikning umumiy asoslari: zarar yetkazgan shaxs to'liq qoplaydi, aybsizligini isbotlasa ozod bo'ladi." },
        { t: "Faqat sug'urta kompaniyasi", ok: false, why: "Xato. Sug'urta bo'lsa yordam beradi, lekin asosiy javobgar — zarar yetkazgan shaxs." },
      ] },
    ],
  },
  {
    id: "s-rent-out", icon: "CalendarX",
    ask: "Uy egasi ijara muddati tugamay ijara haqini oshirib, rozi bo'lmasam chiqib ketishimni talab qilyapti",
    title: "Ijara haqi oshirildi",
    refs: [{ code: "FK2", article: "551" }, { code: "FK2", article: "577" }],
    steps: [
      { text: "Bir yillik shartnomaning yarmi o'tdi. Uy egasi: «Keyingi oydan ancha qimmat to'laysan, bo'lmasa chiq» dedi.", q: "Uy egasi bunga haqlimi?", options: [
        { t: "Ha, narxni mulkdor belgilaydi", ok: false, why: "Xato. Ijara haqi shartnomada belgilanadi va bir tomonlama o'zgartirilmaydi." },
        { t: "Shartnomada boshqacha kelishilmagan bo'lsa, ijara haqi kelishilgan davr ichida bir tomonlama o'zgartirilmaydi", ok: true, why: "To'g'ri. Ijara haqini o'zgartirish tartibi shartnoma va qonun bilan belgilanadi — bir tomonlama talab kuchga ega emas." },
        { t: "Ha, agar bir oy oldin ogohlantirsa", ok: false, why: "Xato. Ogohlantirish o'z-o'zidan ijara haqini o'zgartirish huquqini bermaydi." },
      ] },
      { text: "Siz rozi bo'lmadingiz. Uy egasi «sudga beraman, chiqarib yuboraman» dedi.", q: "Qanday javob berasiz?", options: [
        { t: "Shartnomani buzmaganimni va to'lovlarni o'z vaqtida qilganimni hujjatlar bilan tayyorlab qo'yaman", ok: true, why: "To'g'ri. Ijarachi shartnomani buzmagan bo'lsa, muddatidan oldin bekor qilishga asos yo'q." },
        { t: "Qo'rqib, darhol chiqib ketaman", ok: false, why: "Xato. Shartnoma sizni himoya qiladi." },
        { t: "To'lovni umuman to'xtataman", ok: false, why: "Xato. Shunda uy egasida haqiqiy asos paydo bo'ladi." },
      ] },
    ],
  },
];
