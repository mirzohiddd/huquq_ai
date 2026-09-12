"use strict";
/**
 * JINOYAT JARAYONIDAGI HUQUQLAR (1-qism) — savol-javob. ⚠️ Matnda ANIQ MUDDAT, FOIZ, SUMMA yoki MODDA
 * RAQAMI yozilmaydi — ular `refs` orqali `LegalChunk` dan JONLI olinadi
 * (nusxalangan raqam qonun yangilanganda eskirardi). Batafsil: index.js
 */
module.exports = [
  {
    slug: "gumon-qilinuvchining-huquqlari",
    area: "jinoyat",
    q: {
      uz: "Gumon qilinuvchining qanday huquqlari bor?",
      ru: "Какие права есть у подозреваемого?",
    },
    short: {
      uz:
        "Gumon qilinuvchining huquq va majburiyatlari qonunda alohida " +
        "moddada sanab o'tilgan. Eng muhimi — nimada gumon qilinayotganini " +
        "bilish va himoyachiga ega bo'lish huquqi.",
      ru:
        "Права и обязанности подозреваемого перечислены в отдельной статье " +
        "закона. Главное — право знать, в чём он подозревается, и право на " +
        "защитника.",
    },
    body: {
      uz: [
       
          "Kim gumon qilinuvchi hisoblanishi ham qonunda aniq belgilangan — " +
          "bu maqom bilan birga huquqlar to'plami avtomatik yuzaga keladi.",
       
          "Huquqlaringiz tushuntirilganini bayonnomada tekshiring va " +
          "imzolashdan oldin matnni to'liq o'qing. Rozi bo'lmagan " +
          "joyingizga izoh yozish huquqingiz bor.",
      ],
      ru: [
       
          "Кто считается подозреваемым, также прямо определено законом — " +
          "вместе с этим статусом автоматически возникает набор прав.",
       
          "Проверьте в протоколе, что вам разъяснены права, и полностью " +
          "прочитайте текст перед подписанием. Вы вправе внести замечание в " +
          "той части, с которой не согласны.",
      ],
    },
    refs: [
      { code: "JPK", article: "47" },
      { code: "JPK", article: "48" },
    ],
  },
  {
    slug: "advokat-qachon-shart",
    area: "jinoyat",
    q: {
      uz: "Himoyachi (advokat) qachon ishtirok etishi shart?",
      ru: "Когда участие защитника (адвоката) обязательно?",
    },
    short: {
      uz:
        "Himoyachi ishtirok etishi SHART bo'lgan hollar qonunda alohida " +
        "sanab o'tilgan. Bundan tashqari, har kim istalgan vaqtda o'z " +
        "himoyachisini taklif etishga haqli.",
      ru:
        "Случаи, когда участие защитника ОБЯЗАТЕЛЬНО, прямо перечислены в " +
        "законе. Кроме того, каждый вправе в любое время пригласить своего " +
        "защитника.",
    },
    body: {
      uz: [
       
          "Himoyachini taklif etish tartibi va undan voz kechish alohida " +
          "moddalarda tartibga solingan. Voz kechish erkin va majburlashsiz " +
          "bo'lishi kerak.",
       
          "Himoyachining huquq va majburiyatlari ham qonunda belgilangan — " +
          "u ish materiallari bilan tanishish, iltimosnoma berish va tergov " +
          "harakatlarida qatnashish huquqiga ega.",
      ],
      ru: [
       
          "Порядок приглашения защитника и отказ от него урегулированы " +
          "отдельными статьями. Отказ должен быть свободным и без " +
          "принуждения.",
       
          "Права и обязанности защитника также установлены законом — он " +
          "вправе знакомиться с материалами дела, заявлять ходатайства и " +
          "участвовать в следственных действиях.",
      ],
    },
    refs: [
      { code: "JPK", article: "49" },
      { code: "JPK", article: "51" },
      { code: "JPK", article: "53" },
    ],
  },
  {
    slug: "aybsizlik-prezumpsiyasi",
    area: "jinoyat",
    q: {
      uz: "Aybsizlik prezumpsiyasi nimani anglatadi?",
      ru: "Что означает презумпция невиновности?",
    },
    short: {
      uz:
        "Shaxs aybi qonunda nazarda tutilgan tartibda va sudning qonuniy " +
        "kuchga kirgan hukmi bilan aniqlanmaguncha aybsiz hisoblanadi. " +
        "Shubhalar ayblanuvchi foydasiga hal qilinadi.",
      ru:
        "Лицо считается невиновным, пока его вина не установлена в " +
        "предусмотренном законом порядке вступившим в законную силу " +
        "приговором суда. Сомнения толкуются в пользу обвиняемого.",
    },
    body: {
      uz: [
       
          "Bu tamoyil Konstitutsiyada ham, jinoyat-protsessual " +
          "qonunchiligida ham mustahkamlangan — ya'ni u eng yuqori " +
          "darajadagi kafolat.",
       
          "Amaliy ma'nosi: aybini isbotlash ayblov tomonining zimmasida, " +
          "ayblanuvchi o'z aybsizligini isbotlashga MAJBUR EMAS.",
      ],
      ru: [
       
          "Этот принцип закреплён и в Конституции, и в уголовно- " +
          "процессуальном законодательстве — то есть это гарантия высшего " +
          "уровня.",
       
          "Практический смысл: бремя доказывания вины лежит на стороне " +
          "обвинения, обвиняемый НЕ ОБЯЗАН доказывать свою невиновность.",
      ],
    },
    refs: [
      { code: "KONS", article: "28" },
      { code: "JPK", article: "23" },
      { code: "JPK", article: "24" },
    ],
  },
  {
    slug: "jabrlanuvchining-huquqlari",
    area: "jinoyat",
    q: {
      uz: "Jabrlanuvchining qanday huquqlari bor?",
      ru: "Какие права есть у потерпевшего?",
    },
    short: {
      uz:
        "Jabrlanuvchining huquq va majburiyatlari qonunda alohida " +
        "belgilangan: ish materiallari bilan tanishish, dalil taqdim etish, " +
        "iltimosnoma berish va vakil orqali ishtirok etish.",
      ru:
        "Права и обязанности потерпевшего установлены законом отдельно: " +
        "знакомиться с материалами дела, представлять доказательства, " +
        "заявлять ходатайства и участвовать через представителя.",
    },
    body: {
      uz: [
       
          "Kim jabrlanuvchi deb tan olinishi ham qonunda belgilangan — bu " +
          "maqom rasmiy qaror bilan beriladi va usiz huquqlardan foydalanib " +
          "bo'lmaydi.",
       
          "Jabrlanuvchining vakili bo'lishi mumkin. Yetkazilgan zararni " +
          "qoplash talabini jinoyat ishi doirasida ham qo'yish mumkin — " +
          "buni kechiktirmang.",
      ],
      ru: [
       
          "Кто признаётся потерпевшим, также определено законом — этот " +
          "статус придаётся официальным решением, без него правами " +
          "воспользоваться нельзя.",
       
          "У потерпевшего может быть представитель. Требование о возмещении " +
          "причинённого вреда можно заявить и в рамках уголовного дела — не " +
          "откладывайте это.",
      ],
    },
    refs: [
      { code: "JPK", article: "54" },
      { code: "JPK", article: "55" },
      { code: "JPK", article: "62" },
    ],
  },
];
