"use strict";
/**
 * JINOYAT JARAYONIDAGI HUQUQLAR (2-qism) — savol-javob. ⚠️ Matnda ANIQ MUDDAT, FOIZ, SUMMA yoki MODDA
 * RAQAMI yozilmaydi — ular `refs` orqali `LegalChunk` dan JONLI olinadi
 * (nusxalangan raqam qonun yangilanganda eskirardi). Batafsil: index.js
 */
module.exports = [
  {
    slug: "soroqda-qanday-huquqlarim-bor",
    area: "jinoyat",
    q: {
      uz: "So'roqda qanday huquqlarim bor?",
      ru: "Какие права у меня есть на допросе?",
    },
    short: {
      uz:
        "So'roq tartibi qonunda qat'iy belgilangan. Birinchi so'roqdan " +
        "OLDIN bajarilishi shart bo'lgan harakatlar bor — jumladan " +
        "huquqlarni tushuntirish.",
      ru:
        "Порядок допроса строго установлен законом. Есть действия, которые " +
        "должны быть выполнены ДО первого допроса, — в том числе " +
        "разъяснение прав.",
    },
    body: {
      uz: [
       
          "Bayonnomani imzolashdan oldin to'liq o'qib chiqing. Yozilgan " +
          "matn aytganingizga mos kelmasa — imzolashdan oldin izoh " +
          "yozdiring, keyin emas.",
       
          "Himoyachi ishtirokini talab qilish huquqingiz so'roq davomida " +
          "ham saqlanadi. Bu talabni bayonnomada qayd etish muhim.",
      ],
      ru: [
       
          "Полностью прочитайте протокол перед подписанием. Если записанный " +
          "текст не соответствует сказанному — внесите замечание до " +
          "подписания, а не после.",
       
          "Право требовать участия защитника сохраняется и в ходе допроса. " +
          "Важно, чтобы это требование было зафиксировано в протоколе.",
      ],
    },
    refs: [
      { code: "JPK", article: "109" },
      { code: "JPK", article: "111" },
    ],
  },
  {
    slug: "malakali-yuridik-yordam-huquqi",
    area: "jinoyat",
    q: {
      uz: "Malakali yuridik yordam olish huquqi qanday kafolatlanadi?",
      ru: "Как гарантируется право на квалифицированную юридическую помощь?",
    },
    short: {
      uz:
        "Bu huquq Konstitutsiya bilan kafolatlanadi. Qonunda nazarda " +
        "tutilgan hollarda yuridik yordam davlat hisobidan ko'rsatiladi — " +
        "ya'ni pul yo'qligi himoyasiz qolish sababi emas.",
      ru:
        "Это право гарантировано Конституцией. В случаях, предусмотренных " +
        "законом, юридическая помощь оказывается за счёт государства — то " +
        "есть отсутствие денег не является причиной остаться без защиты.",
    },
    body: {
      uz: [
       
          "Jinoyat jarayonida bu kafolat himoyachi instituti orqali amalga " +
          "oshiriladi: himoyachini taklif etish tartibi qonunda " +
          "belgilangan.",
       
          "Yuridik yordam so'rash — aybni tan olish emas. Aksincha, " +
          "huquqlaringizni bilmasdan bergan izohingiz keyinchalik sizga " +
          "qarshi ishlatilishi mumkin.",
      ],
      ru: [
       
          "В уголовном процессе эта гарантия реализуется через институт " +
          "защитника: порядок приглашения защитника установлен законом.",
       
          "Обращение за юридической помощью — не признание вины. Напротив, " +
          "объяснение, данное без знания своих прав, впоследствии может " +
          "быть использовано против вас.",
      ],
    },
    refs: [
      { code: "KONS", article: "29" },
      { code: "JPK", article: "50" },
    ],
  },
  {
    slug: "erkinlik-va-shaxsiy-daxlsizlik-huquqi",
    area: "jinoyat",
    q: {
      uz: "Erkinlik va shaxsiy daxlsizlik huquqi nimani anglatadi?",
      ru: "Что означает право на свободу и личную неприкосновенность?",
    },
    short: {
      uz:
        "Hech kim qonunga asoslanmagan holda hibsga olinishi, ushlab " +
        "turilishi mumkin emas. Insonning sha'ni va qadr-qimmati daxlsizdir " +
        "— bu Konstitutsiya darajasidagi kafolat.",
      ru:
        "Никто не может быть задержан или заключён под стражу без законного " +
        "основания. Честь и достоинство человека неприкосновенны — это " +
        "гарантия конституционного уровня.",
    },
    body: {
      uz: [
       
          "Ushlab turish yoki hibsga olish har doim qonunda ko'rsatilgan " +
          "asos va tartib bilan bo'ladi. Asos tushuntirilishini talab " +
          "qilish — sizning huquqingiz.",
       
          "Qiynoq, zo'ravonlik yoki qadr-qimmatni kamsitadigan muomala " +
          "mutlaqo taqiqlanadi. Bunday holatni zudlik bilan himoyachiga va " +
          "prokuraturaga xabar qiling.",
      ],
      ru: [
       
          "Задержание или заключение под стражу всегда происходит по " +
          "основанию и в порядке, указанным в законе. Требовать разъяснения " +
          "основания — ваше право.",
       
          "Пытки, насилие или унижающее достоинство обращение категорически " +
          "запрещены. О таком случае немедленно сообщите защитнику и в " +
          "прокуратуру.",
      ],
    },
    refs: [
      { code: "KONS", article: "27" },
      { code: "KONS", article: "26" },
    ],
  },
];
