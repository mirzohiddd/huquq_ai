"use strict";
/**
 * SHARTNOMA VA FUQAROLIK HUQUQI (1-qism) — savol-javob. ⚠️ Matnda ANIQ MUDDAT, FOIZ, SUMMA yoki MODDA
 * RAQAMI yozilmaydi — ular `refs` orqali `LegalChunk` dan JONLI olinadi
 * (nusxalangan raqam qonun yangilanganda eskirardi). Batafsil: index.js
 */
module.exports = [
  {
    slug: "shartnoma-qachon-tuzilgan-hisoblanadi",
    area: "shartnoma",
    q: {
      uz: "Shartnoma qachon tuzilgan hisoblanadi?",
      ru: "Когда договор считается заключённым?",
    },
    short: {
      uz:
        "Shartnoma taraflar barcha muhim shartlar bo'yicha kelishuvga " +
        "erishganda va bu kelishuv talab qilinadigan shaklda " +
        "rasmiylashtirilganda tuzilgan hisoblanadi.",
      ru:
        "Договор считается заключённым, когда стороны достигли соглашения " +
        "по всем существенным условиям и это соглашение оформлено в " +
        "требуемой форме.",
    },
    body: {
      uz: [
       
          "Jarayon ikki bosqichdan iborat: oferta (taklif) va aksept " +
          "(rozilik). Ularning muddatlari va oqibatlari alohida moddalarda " +
          "batafsil yozilgan.",
       
          "Shartnoma tuzish erkinligi asosiy tamoyil: hech kim shartnoma " +
          "tuzishga majburlanmaydi, faqat qonunda ko'rsatilgan hollar " +
          "bundan mustasno.",
      ],
      ru: [
       
          "Процесс состоит из двух этапов: оферта (предложение) и акцепт " +
          "(согласие). Их сроки и последствия подробно изложены в отдельных " +
          "статьях.",
       
          "Свобода договора — основной принцип: никто не может быть " +
          "принуждён к заключению договора, кроме случаев, указанных в " +
          "законе.",
      ],
    },
    refs: [
      { code: "FK", article: "365" },
      { code: "FK", article: "367" },
      { code: "FK", article: "370" },
    ],
  },
  {
    slug: "shartnoma-yozma-shaklda-bolishi-shartmi",
    area: "shartnoma",
    q: {
      uz: "Shartnoma yozma shaklda bo'lishi shartmi?",
      ru: "Обязательна ли письменная форма договора?",
    },
    short: {
      uz:
        "Har doim emas, lekin ko'p hollarda ha. Bitimning oddiy yozma " +
        "shakli qonunda belgilangan hollarda majburiy; unga rioya " +
        "qilmaslikning aniq oqibatlari bor.",
      ru:
        "Не всегда, но во многих случаях да. Простая письменная форма " +
        "сделки обязательна в случаях, установленных законом; несоблюдение " +
        "формы имеет конкретные последствия.",
    },
    body: {
      uz: [
       
          "Eng muhim oqibat: yozma shaklga rioya qilinmasa, nizo chiqqanda " +
          "GUVOHLAR KO'RSATUVIGA tayanish imkoni cheklanadi. Ya'ni pul " +
          "berganingizni guvoh bilan isbotlash qiyinlashadi.",
       
          "Ayrim bitimlar notarial tasdiqlanishi yoki davlat ro'yxatidan " +
          "o'tkazilishi shart — bu talablarga rioya qilmaslikning " +
          "oqibatlari ham alohida belgilangan.",
      ],
      ru: [
       
          "Важнейшее последствие: при несоблюдении письменной формы в споре " +
          "ограничивается возможность ссылаться на СВИДЕТЕЛЬСКИЕ ПОКАЗАНИЯ. " +
          "То есть доказать передачу денег свидетелем становится сложно.",
       
          "Отдельные сделки подлежат нотариальному удостоверению или " +
          "государственной регистрации — последствия несоблюдения этих " +
          "требований также установлены отдельно.",
      ],
    },
    refs: [
      { code: "FK", article: "107" },
      { code: "FK", article: "108" },
      { code: "FK", article: "109" },
    ],
  },
  {
    slug: "qarz-berganda-tilxat-kerakmi",
    area: "shartnoma",
    q: {
      uz: "Qarz berganda tilxat kerakmi?",
      ru: "Нужна ли расписка при передаче денег в долг?",
    },
    short: {
      uz:
        "Ha, qat'iy tavsiya etiladi. Qarz shartnomasining shakli qonunda " +
        "belgilangan va yozma hujjat — qarz berilganini isbotlashning eng " +
        "ishonchli yo'li.",
      ru:
        "Да, настоятельно рекомендуется. Форма договора займа установлена " +
        "законом, и письменный документ — самый надёжный способ доказать " +
        "передачу займа.",
    },
    body: {
      uz: [
       
          "Tilxatda kim kimga, qancha, qachon berdi va qachon qaytariladi — " +
          "shu to'rt narsa aniq yozilishi kerak. Foizlar to'g'risidagi " +
          "qoidalar alohida moddada belgilangan.",
       
          "Qarz oluvchi shartnomani buzgan taqdirdagi oqibatlar ham qonunda " +
          "nazarda tutilgan. Pulni bank orqali o'tkazish esa qo'shimcha va " +
          "juda kuchli dalil beradi.",
      ],
      ru: [
       
          "В расписке должны быть чётко указаны четыре вещи: кто кому, " +
          "сколько, когда передал и когда возвращает. Правила о процентах " +
          "установлены отдельной статьёй.",
       
          "Последствия нарушения договора заёмщиком также предусмотрены " +
          "законом. Перевод денег через банк даёт дополнительное и очень " +
          "сильное доказательство.",
      ],
    },
    refs: [
      { code: "FK2", article: "732" },
      { code: "FK2", article: "733" },
      { code: "FK2", article: "735" },
    ],
  },
  {
    slug: "davo-muddati-nima",
    area: "shartnoma",
    q: {
      uz: "Da'vo muddati nima va u qachondan boshlanadi?",
      ru: "Что такое исковая давность и с какого момента она течёт?",
    },
    short: {
      uz:
        "Da'vo muddati — buzilgan huquqni sud orqali himoya qilish uchun " +
        "berilgan vaqt. U odatda shaxs huquqi buzilganini bilgan yoki " +
        "bilishi lozim bo'lgan kundan boshlanadi.",
      ru:
        "Исковая давность — время, предоставленное для судебной защиты " +
        "нарушенного права. Обычно она начинается со дня, когда лицо узнало " +
        "или должно было узнать о нарушении права.",
    },
    body: {
      uz: [
       
          "Umumiy da'vo muddati qonunda belgilangan; ayrim talablar uchun " +
          "maxsus muddatlar amal qiladi. Muddat o'tishi to'xtatilishi yoki " +
          "uzilishi mumkin.",
       
          "Muddat o'tkazib yuborilgan bo'lsa ham, sud uni uzrli sabab bilan " +
          "tiklashi mumkin. Lekin bunga tayanmang: huquqingiz buzilgani " +
          "aniqlangan zahoti harakat boshlang.",
      ],
      ru: [
       
          "Общий срок исковой давности установлен законом; для отдельных " +
          "требований действуют специальные сроки. Течение срока может " +
          "приостанавливаться или прерываться.",
       
          "Даже при пропуске срока суд может восстановить его при " +
          "уважительной причине. Но не рассчитывайте на это: начинайте " +
          "действовать сразу, как узнали о нарушении права.",
      ],
    },
    refs: [
      { code: "FK", article: "149" },
      { code: "FK", article: "150" },
      { code: "FK", article: "154" },
    ],
  },
];
