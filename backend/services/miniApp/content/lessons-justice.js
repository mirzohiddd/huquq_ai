"use strict";
/** 7-BO'LIM · Politsiya va sud (juda qiyin). "Ushlab turish" darsi `lessonsB.js` da. */
const old = require("./lessonsB");

module.exports = [
  { ...old.find((l) => l.id === "detained"), icon: "ShieldAlert" },
  {
    id: "search", icon: "Search",
    ask: "Uyimda tintuv qanday tartibda o'tkaziladi, kimlar ishtirok etishi shart?",
    title: "Uyda tintuv",
    story: "Eshik taqilladi: «Tintuv o'tkazamiz». Xodimlar hech qanday hujjat ko'rsatmasdan ichkariga kirmoqchi. Uyda faqat siz bormisiz.",
    choice: {
      q: "Eng to'g'ri xatti-harakat qaysi?",
      options: [
        { t: "Eshikni ochmayman va jismonan qarshilik ko'rsataman", ok: false, why: "Xato. Jismoniy qarshilik alohida javobgarlikka sabab bo'lishi mumkin. Huquqlaringizni so'z bilan va yozma talab qiling." },
        { t: "Tintuv asosini (qaror yoki ruxsatni) ko'rsatishni, xolislar ishtirokini talab qilaman va bayonnomaga e'tirozlarimni yozaman", ok: true, why: "To'g'ri. Tintuv qonunda belgilangan asos va tartibda, xolislar hamda uy egasi ishtirokida o'tkaziladi. Bayonnomaga e'tiroz yozish — keyingi shikoyat uchun dalil." },
        { t: "Hujjat so'ramayman — so'rasam, gumon kuchayadi", ok: false, why: "Xato. Tintuv asosini ko'rish — qonuniy huquqingiz. Bu gumonni kuchaytirmaydi." },
        { t: "Faqat advokat kelguncha kutishlarini talab qilaman, aks holda tintuv bekor", ok: false, why: "Xato. Himoyachini chaqirish huquqingiz bor, lekin uning yo'qligi tintuvni o'z-o'zidan bekor qilmaydi. Asos va xolislarni talab qilish muhimroq." },
      ],
    },
    game: {
      type: "spot",
      prompt: "Bayonnomadagi qonunbuzarlik belgisini toping",
      title: "TINTUV BAYONNOMASI",
      lines: ["Asos: tergovchining qarori (ilova qilingan)", "Ishtirokchilar: tergovchi, tezkor xodim — xolislar ishtirok etmadi", "Olib qo'yildi: noutbuk, 1 dona", "Uy egasi bayonnoma bilan tanishtirildi"],
      answer: 1,
      why: "Tintuv xolislar ishtirokisiz o'tkazilishi — tartib buzilganining jiddiy belgisi. Bunday dalillar qabul qilinmasligi mumkin.",
    },
    takeaway: "Tintuvda: asosni ko'rsatishni, xolislar ishtirokini talab qiling, bayonnomani o'qib, e'tirozingizni yozing.",
    refs: [{ code: "JPK", article: "158" }, { code: "JPK", article: "160" }, { code: "JPK", article: "161" }],
  },
  {
    id: "witness", icon: "Eye",
    ask: "Guvoh sifatida chaqirildim, yaqin qarindoshimga qarshi ko'rsatuv berishim shartmi?",
    title: "Guvoh va qarindosh",
    story: "Tergovchi sizni akangizga qarshi ochilgan ish bo'yicha guvoh sifatida chaqirdi. Siz akangiz haqida gapirishni xohlamaysiz.",
    choice: {
      q: "Qaysi javob qonunga eng aniq mos?",
      options: [
        { t: "Guvoh har doim ko'rsatuv berishi shart, aks holda jinoiy javobgarlik", ok: false, why: "Xato. Umumiy qoida shunday, lekin yaqin qarindoshlar uchun alohida istisno bor." },
        { t: "Yaqin qarindoshga oid ishda guvoh faqat o'z roziligi bilan so'roq qilinishi mumkin", ok: true, why: "To'g'ri. Qonun yaqin qarindoshlarni ularning roziligisiz bir-biriga qarshi guvoh sifatida so'roq qilishga yo'l qo'ymaydi. Rozi bo'lsangiz — rost gapirishingiz shart." },
        { t: "Ko'rsatuv berishim mumkin, lekin yolg'on gapirsam ham javobgarlik yo'q", ok: false, why: "Xato. Rozi bo'lib ko'rsatuv bersangiz, bila turib yolg'on ko'rsatuv uchun javobgar bo'lasiz." },
        { t: "Kasallik yoki band bo'lishni bahona qilib chaqiruvga umuman bormaslik mumkin", ok: false, why: "Xato. Chaqiruvga uzrsiz kelmaslik javobgarlikka olib kelishi mumkin; bahona bilan ko'rsatuvdan bosh tortishga yo'l qo'yilmaydi." },
      ],
    },
    game: {
      type: "order",
      prompt: "Chaqiruvdan keyingi to'g'ri tartib",
      items: ["Chaqiruv qog'ozini olib, belgilangan vaqtda kelaman", "Qarindoshlik munosabatimni aytaman", "Ko'rsatuv berishdan voz kechish yoki rozilik haqidagi qarorimni bildiraman", "Bayonnomani o'qib, to'g'riligini tekshirib imzolayman"],
      why: "Kelish majburiy, ko'rsatuv berish esa yaqin qarindosh uchun ixtiyoriy. Imzolashdan oldin bayonnomani o'qish — eng muhim himoya.",
    },
    takeaway: "Yaqin qarindoshingizga qarshi ko'rsatuv berish — faqat roziligingiz bilan. Rozi bo'lsangiz, rost gapirish majburiy.",
    refs: [{ code: "JPK", article: "116" }, { code: "JPK", article: "115" }, { code: "JPK", article: "117" }],
  },
  {
    id: "lawyer", icon: "Briefcase",
    ask: "Gumon qilinuvchi qachondan boshlab advokat olish huquqiga ega va pul bo'lmasa nima bo'ladi?",
    title: "Advokatga huquq",
    story: "Do'stingiz ushlab turilgan. Tergovchi: «Advokat keyin, avval tushuntirish yozib bersin» demoqda. Oilada advokatga pul yo'q.",
    choice: {
      q: "Eng aniq javob qaysi?",
      options: [
        { t: "Advokat faqat sud bosqichida ishtirok etadi", ok: false, why: "Xato. Himoyachi ishga ushlab turilgan, gumon qilinuvchi deb e'lon qilingan paytdan boshlab jalb qilinishi mumkin." },
        { t: "Himoyachi ushlab turilgan paytdan boshlab ishtirok etishi mumkin; qonunda nazarda tutilgan hollarda yuridik yordam davlat hisobidan ko'rsatiladi", ok: true, why: "To'g'ri. Malakali yuridik yordam olish huquqi Konstitutsiya bilan kafolatlangan; ayrim hollarda himoyachi ishtiroki majburiy va davlat hisobidan." },
        { t: "Avval tushuntirish yozish shart, keyin advokat so'rash mumkin", ok: false, why: "Xato. Gumon qilinuvchi birinchi so'roqdan oldin himoyachi bilan uchrashish huquqiga ega." },
        { t: "Pul bo'lmasa, advokatsiz qolishga majbur", ok: false, why: "Xato. Qonunda belgilangan hollarda yuridik yordam bepul — davlat hisobidan ko'rsatiladi." },
      ],
    },
    game: {
      type: "spot",
      prompt: "Qaysi gap huquqni buzadi?",
      title: "TERGOVCHINING GAPLARI",
      lines: ["«Sizga huquqlaringiz tushuntiriladi»", "«Himoyachi kelguncha so'roqni boshlamaymiz»", "«Advokat so'rasangiz, ishingiz og'irlashadi»", "«Bayonnomani o'qib chiqing»"],
      answer: 2,
      why: "Himoyachi so'raganlik uchun tahdid qilish — himoyaga bo'lgan huquqni buzish. Bunday gaplarni eslab qoling va shikoyat qiling.",
    },
    takeaway: "Ushlab turilgan paytdan boshlab himoyachi so'rash huquqingiz bor. Pul bo'lmasa — qonunda belgilangan hollarda bepul.",
    refs: [{ code: "KONS", article: "29" }, { code: "JPK", article: "49" }, { code: "JPK", article: "51" }],
  },
  {
    id: "complaint", icon: "Megaphone",
    ask: "Tergovchining noqonuniy harakati ustidan qayerga shikoyat qilish mumkin?",
    title: "Tergovchi ustidan shikoyat",
    story: "Tergovchi sizning so'rovingizni sababsiz rad etdi va hujjatlar bilan tanishtirmadi. Siz uning harakatidan norozisiz.",
    choice: {
      q: "Qaysi yo'l qonunga mos?",
      options: [
        { t: "Shikoyat faqat ish sudga kelgandan keyin beriladi", ok: false, why: "Xato. Protsessual harakatlar va qarorlar ustidan istalgan bosqichda shikoyat qilish huquqi bor." },
        { t: "Tergovchining harakati ustidan prokurorga yoki qonunda nazarda tutilgan hollarda sudga shikoyat qilish mumkin", ok: true, why: "To'g'ri. Tergovchi va prokurorning harakatlari va qarorlari ustidan shikoyat berish huquqi protsessning asosiy kafolatlaridan biri." },
        { t: "Faqat o'sha tergovchining o'ziga ariza berish mumkin", ok: false, why: "Xato. Shikoyat yuqori turuvchi yoki nazorat qiluvchi organga — prokurorga, ayrim hollarda sudga beriladi." },
        { t: "Shikoyat berilsa, tergov avtomatik to'xtaydi", ok: false, why: "Xato. Shikoyat berish, odatda, shikoyat qilinayotgan harakatning ijrosini to'xtatmaydi." },
      ],
    },
    game: {
      type: "order",
      prompt: "Shikoyatni to'g'ri tuzish tartibi",
      items: ["Qaysi harakat yoki qaror ustidan ekanini aniq yozaman", "Qaysi huquqim buzilganini ko'rsataman", "Dalillarni ilova qilaman", "Shikoyatni prokurorga yoki sudga topshirib, qabul qilinganini qayd ettiraman"],
      why: "Aniq predmet, buzilgan huquq, dalil va qabul qilinganlik belgisi — shikoyat ko'rib chiqilishining kaliti.",
    },
    takeaway: "Tergovchining har bir harakati ustidan shikoyat qilish mumkin — prokurorga, ayrim hollarda sudga.",
    refs: [{ code: "JPK", article: "27" }, { code: "JPK", article: "358" }],
  },
];
