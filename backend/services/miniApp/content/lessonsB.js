"use strict";
/**
 * MINI APP DARSLARI — 3–4-bo'lim (oila, internet va xavfsizlik).
 * Qoidalar lessonsA.js dagi bilan bir xil.
 */
module.exports = [
  {
    id: "marriage", ask: "Nikoh qayerda tuziladi?",
    unit: "family",
    title: "Faqat nikoh o'qitildi",
    story: "Do'sting aytdi: «Bizga faqat masjidda nikoh o'qildi, FHDYoga borish shart emas».",
    choice: {
      q: "Do'stingga nima deysan?",
      options: [
        { t: "Nikoh FHDYo organida qayd etilishi kerak — faqat diniy nikoh huquqiy kuchga ega emas", ok: true, why: "To'g'ri. Nikoh fuqarolik holati dalolatnomalarini qayd etish organlarida tuziladi. Diniy rasm-rusumga binoan tuzilgan nikoh huquqiy ahamiyatga ega emas — er-xotinning mulk, meros va aliment huquqlari shundan boshlanadi." },
        { t: "To'g'ri, diniy nikoh yetarli", ok: false, why: "Xato. Qonun faqat davlat organida qayd etilgan nikohni tan oladi." },
        { t: "Farzand tug'ilganda qayd ettirsa bo'ladi", ok: false, why: "Xato. Qayd etilmaguncha nikoh qonun oldida mavjud emas va ayolning huquqlari himoyasiz qoladi." },
      ],
    },
    game: {
      type: "order",
      prompt: "Nikohdan o'tish bosqichlarini tartiblang",
      items: [
        "Ikkala tomon ixtiyoriy rozilik beradi",
        "FHDYo organiga birgalikda ariza topshiriladi",
        "Belgilangan kuni nikoh qayd etiladi",
        "Nikoh guvohnomasi olinadi",
      ],
      why: "Nikoh ixtiyoriylikdan boshlanadi va faqat qayd etilgach huquqiy kuchga kiradi.",
    },
    takeaway: "Nikoh — ixtiyoriy va FHDYoda qayd etilgan bo'lishi shart. Nikoh yoshi qonunda belgilangan.",
    refs: [{ code: "OK", article: "13" }, { code: "OK", article: "14" }, { code: "OK", article: "15" }],
  },
  {
    id: "alimony", ask: "Aliment qanday undiriladi?",
    unit: "family",
    title: "Aliment kelishuvi",
    story: "Ajrashgan ota-ona bolaga aliment haqida kelishmoqchi. Ota: «Og'zaki aytaman, yetadi», deydi.",
    choice: {
      q: "Ona uchun eng ishonchli yo'l qaysi?",
      options: [
        { t: "Kelishuvni yozma tuzish yoki kelishilmasa sudga murojaat qilish", ok: true, why: "To'g'ri. Ota-ona aliment tartibini o'zaro kelishishi mumkin. Kelishuv bo'lmasa, aliment sud tomonidan undiriladi — miqdori qonunda belgilangan." },
        { t: "Og'zaki va'daga ishonish", ok: false, why: "Xato. Og'zaki va'da bajarilmasa, uni isbotlash va majburan undirish deyarli imkonsiz." },
        { t: "Bolani otasiga ko'rsatmaslik", ok: false, why: "Xato. Aliment va bola bilan ko'rishish — alohida huquqlar. Biri ikkinchisiga «garov» bo'la olmaydi." },
      ],
    },
    game: {
      type: "spot",
      prompt: "Kelishuvdagi qaysi qator eng muhim?",
      title: "ALIMENT TO'LASH TO'G'RISIDA KELISHUV",
      lines: ["Taraflar: ota va ona", "Bola: Ali, 2019-yilda tug'ilgan", "Aliment miqdori va to'lash tartibi", "Kelishuv tuzilgan joy", "Taraflar imzosi"],
      answer: 2,
      why: "Kelishuvning mohiyati — miqdor va to'lash tartibi. Bu aniq yozilmasa, kelishuv bahsni hal qilmaydi.",
    },
    takeaway: "Aliment — bolaning huquqi. Kelishuv yozma bo'lsin, kelishilmasa sud undiradi.",
    refs: [{ code: "OK", article: "98" }, { code: "OK", article: "99" }],
  },
  {
    id: "child", ask: "Ajrashganda bola kim bilan qoladi?",
    unit: "family",
    title: "Ajrimdan keyin bola kim bilan?",
    story: "Er-xotin ajrashmoqda va har biri «bola men bilan qoladi» deb turib olgan.",
    choice: {
      q: "Bu masalani kim hal qiladi?",
      options: [
        { t: "Kelisha olmasalar — sud, bolaning manfaatini hisobga olib", ok: true, why: "To'g'ri. Nikohdan sud tartibida ajratishda sud voyaga yetmagan bolalar kim bilan yashashini ham hal qiladi. Asosiy mezon — bolaning manfaati." },
        { t: "Doim ona bilan qoladi", ok: false, why: "Xato. Qonunda «avtomatik» qoida yo'q — sud har bir holatni alohida ko'radi." },
        { t: "Ko'proq pul topadigan ota-ona bilan", ok: false, why: "Xato. Daromad — mezonlardan faqat biri. Bolaning manfaati, tarbiya sharoiti va bolaning bog'liqligi ham ko'riladi." },
      ],
    },
    game: {
      type: "order",
      prompt: "Bolaning manfaatini himoya qilish yo'lini tartiblang",
      items: [
        "Avval o'zaro kelishishga harakat qilinadi",
        "Kelishilmasa, masala sudga beriladi",
        "Sud bolaning manfaati va sharoitini o'rganadi",
        "Sud qaroriga ko'ra bola yashash joyi belgilanadi",
      ],
      why: "Kelishuv eng yaxshi yo'l; bo'lmasa sud bolaning manfaatidan kelib chiqib hal qiladi.",
    },
    takeaway: "Bola «kimning mulki» emas. Kelishilmasa sud bolaning manfaatiga qarab hal qiladi.",
    refs: [{ code: "OK", article: "44" }],
  },
  {
    id: "insult", ask: "Ijtimoiy tarmoqda meni haqorat qilishdi, nima qilaman?",
    unit: "online",
    title: "Ijtimoiy tarmoqdagi haqorat",
    story: "Kimdir ijtimoiy tarmoqda sening suratingga haqoratli izoh yozdi.",
    choice: {
      q: "Birinchi nima qilasan?",
      options: [
        { t: "Izohni skrinshot qilaman va havolasini saqlayman", ok: true, why: "To'g'ri. Haqorat va tuhmat uchun javobgarlik bor — internet ham bundan istisno emas. Lekin post o'chirilsa, dalilsiz isbotlash qiyin. Avval dalil." },
        { t: "Javobiga men ham haqorat yozaman", ok: false, why: "Xato. Javob tariqasida haqorat qilish sizni ham javobgarlikka tortadi." },
        { t: "Sahifamni yopaman va unutaman", ok: false, why: "Bu sizning tanlovingiz, lekin huquqingizni himoya qilmoqchi bo'lsangiz — avval dalilni saqlang." },
      ],
    },
    game: {
      type: "order",
      prompt: "Haqoratga qarshi harakatlarni tartiblang",
      items: [
        "Izohni sana va muallif ko'ringan holda skrinshot qilaman",
        "Sahifa va izoh havolasini saqlayman",
        "Ichki ishlar organiga ariza beraman",
        "Ma'naviy zararni qoplash uchun sudga murojaat qilishim mumkin",
      ],
      why: "Dalil birinchi kuni saqlanadi; ariza va da'vo shu dalilga tayanadi.",
    },
    takeaway: "Internetdagi haqorat ham javobgarlikka sabab. Dalilni birinchi kuni saqlang.",
    refs: [{ code: "MJK", article: "41" }, { code: "MJK", article: "40" }, { code: "JK", article: "140" }],
  },
  {
    id: "fraud", ask: "Firibgarlar kartamdan pul yechib olishdi, nima qilaman?",
    unit: "online",
    title: "«Kartangiz bloklandi» SMS",
    story: "Telefoningga bankdan kelgandek SMS keldi: karta bloklangan, kodni yuborish so'ralmoqda.",
    choice: {
      q: "Qanday javob berasan?",
      options: [
        { t: "Hech qanday kod yubormayman va bankning rasmiy raqamiga o'zim qo'ng'iroq qilaman", ok: true, why: "To'g'ri. Bank hech qachon SMS kodni so'ramaydi. Aldash yo'li bilan o'zganing mulkini qo'lga kiritish — firibgarlik, jinoyat." },
        { t: "Tezroq kodni yuboraman, karta ochilsin", ok: false, why: "Xato. Kod — kartangiz kaliti. Uni olgan odam pulingizni yechib oladi." },
        { t: "SMSdagi havolani ochib tekshiraman", ok: false, why: "Xato. Bunday havolalar soxta saytga olib boradi va karta ma'lumotlarini o'g'irlaydi." },
      ],
    },
    game: {
      type: "spot",
      prompt: "SMSdagi qaysi qator firibgarlik belgisi?",
      title: "SMS · 0000",
      lines: ["Hurmatli mijoz!", "Kartangiz vaqtincha bloklandi.", "Blokdan chiqarish uchun SMS kodni shu raqamga yuboring.", "Bank xizmati", "Rahmat"],
      answer: 2,
      why: "Kodni so'rash — firibgarlikning eng aniq belgisi. Haqiqiy bank kod so'ramaydi.",
    },
    takeaway: "SMS kod — hech kimga. Pul yechilsa, darhol bankka qo'ng'iroq qilib, kartani bloklang va ariza bering.",
    refs: [{ code: "JK", article: "168" }],
  },
  {
    id: "detained", ask: "Ushlab turilganda qanday huquqlarim bor?",
    unit: "online",
    title: "Ko'chada ushlab qolishdi",
    story: "Ichki ishlar xodimi seni ko'chada to'xtatib, bo'limga olib ketmoqchi.",
    choice: {
      q: "O'zingni qanday tutasan?",
      options: [
        { t: "Xotirjam turaman, nima sababdan ushlanayotganimni so'rayman va himoyachi talab qilaman", ok: true, why: "To'g'ri. Hech kim qonunga asoslanmagan holda ushlab turilmaydi. Gumon qilingan shaxs nimada gumon qilinayotganini bilish va himoyachiga ega bo'lish huquqiga ega." },
        { t: "Qochib ketaman", ok: false, why: "Xato. Qarshilik va qochish vaziyatni og'irlashtiradi va alohida javobgarlikka sabab bo'lishi mumkin." },
        { t: "Bergan hamma qog'ozni o'qimay imzolayman", ok: false, why: "Xato. O'qimagan hujjatni imzolamang — bayonnomaga e'tirozingizni yozish huquqingiz bor." },
      ],
    },
    game: {
      type: "order",
      prompt: "To'g'ri harakatlar tartibi",
      items: [
        "Xotirjam turaman va qarshilik qilmayman",
        "Ushlash sababi va xodimning kimligini so'rayman",
        "Himoyachi (advokat) talab qilaman",
        "Hujjatlarni o'qib chiqmaguncha imzolamayman",
      ],
      why: "Xotirjamlik — xavfsizlik; savol va himoyachi — huquqingiz; o'qimasdan imzolamaslik — himoyangiz.",
    },
    takeaway: "Ushlanganda: xotirjamlik, sababni so'rash, himoyachi va o'qilmagan hujjatga imzo yo'q.",
    refs: [{ code: "KONS", article: "27" }, { code: "JPK", article: "48" }, { code: "JPK", article: "221" }],
  },
];
