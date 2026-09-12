"use strict";
/**
 * MA'MURIY JAVOBGARLIK — savol-javob. ⚠️ Matnda ANIQ MUDDAT, FOIZ, SUMMA yoki MODDA
 * RAQAMI yozilmaydi — ular `refs` orqali `LegalChunk` dan JONLI olinadi
 * (nusxalangan raqam qonun yangilanganda eskirardi). Batafsil: index.js
 */
module.exports = [
  {
    slug: "mamuriy-jarima-qanday-rasmiylashtiriladi",
    area: "mamuriy",
    q: {
      uz: "Ma'muriy jarima qanday rasmiylashtiriladi?",
      ru: "Как оформляется административный штраф?",
    },
    short: {
      uz:
        "Ma'muriy huquqbuzarlik to'g'risida BAYONNOMA tuziladi. " +
        "Bayonnomaning mazmuni va uni tuzishga vakolatli shaxslar qonunda " +
        "aniq belgilangan.",
      ru:
        "О правонарушении составляется ПРОТОКОЛ. Содержание протокола и " +
        "лица, уполномоченные его составлять, прямо определены законом.",
    },
    body: {
      uz: [
       
          "Bayonnoma tuzilmaydigan hollar ham alohida belgilangan. " +
          "Bayonnomani imzolashdan oldin uni to'liq o'qing va rozi " +
          "bo'lmagan qismingizga izoh yozing.",
       
          "Bayonnomada huquqlaringiz tushuntirilgani qayd etilishi kerak. " +
          "Nusxa olish huquqingiz bor — usiz shikoyat tayyorlash qiyin " +
          "bo'ladi.",
      ],
      ru: [
       
          "Случаи, когда протокол не составляется, также определены " +
          "отдельно. Перед подписанием полностью прочитайте протокол и " +
          "внесите замечание в той части, с которой не согласны.",
       
          "В протоколе должно быть зафиксировано разъяснение ваших прав. Вы " +
          "вправе получить копию — без неё подготовить жалобу будет сложно.",
      ],
    },
    refs: [
      { code: "MJK", article: "279" },
      { code: "MJK", article: "281" },
      { code: "MJK", article: "283" },
    ],
  },
  {
    slug: "jarimaga-qanday-shikoyat-qilinadi",
    area: "mamuriy",
    q: {
      uz: "Jarimaga qanday shikoyat qilinadi?",
      ru: "Как обжаловать штраф?",
    },
    short: {
      uz:
        "Ma'muriy huquqbuzarlik to'g'risidagi ish yuzasidan chiqarilgan " +
        "qaror xususida shikoyat berish huquqi qonunda mustahkamlangan. " +
        "Tartib va muddat alohida moddalarda belgilangan.",
      ru:
        "Право на обжалование постановления по делу об административном " +
        "правонарушении закреплено законом. Порядок и срок установлены " +
        "отдельными статьями.",
    },
    body: {
      uz: [
       
          "Eng ko'p yo'qotiladigan narsa — MUDDAT. Shikoyat muddati qonunda " +
          "belgilangan va u qaror topshirilgan kundan hisoblanadi, shuning " +
          "uchun topshirilgan sanani qayd eting.",
       
          "Shikoyat ko'rib chiqilgach chiqariladigan qaror ham qonunda " +
          "belgilangan. Undan keyingi bosqich — apellyatsiya shikoyati, " +
          "uning tartibi va muddati ham alohida yozilgan.",
      ],
      ru: [
       
          "Чаще всего теряют именно СРОК. Срок обжалования установлен " +
          "законом и исчисляется со дня вручения постановления, поэтому " +
          "фиксируйте дату вручения.",
       
          "Решение, выносимое по результатам рассмотрения жалобы, также " +
          "определено законом. Следующий этап — апелляционная жалоба, её " +
          "порядок и срок изложены отдельно.",
      ],
    },
    refs: [
      { code: "MJK", article: "314" },
      { code: "MJK", article: "315" },
      { code: "MJK", article: "316" },
    ],
  },
  {
    slug: "mamuriy-jazo-turlari",
    area: "mamuriy",
    q: {
      uz: "Ma'muriy jazoning qanday turlari bor?",
      ru: "Какие виды административного взыскания существуют?",
    },
    short: {
      uz:
        "Ma'muriy jazo turlari qonunda to'liq sanab o'tilgan: " +
        "ogohlantirish, jarima, maxsus huquqdan mahrum qilish, ma'muriy " +
        "qamoq va boshqalar. Ro'yxat yopiq.",
      ru:
        "Виды административных взысканий полностью перечислены в законе: " +
        "предупреждение, штраф, лишение специального права, " +
        "административный арест и другие. Перечень закрытый.",
    },
    body: {
      uz: [
       
          "Jazolar asosiy va qo'shimcha turlarga bo'linadi — bu farq amaliy " +
          "ahamiyatga ega, chunki qo'shimcha jazo yolg'iz qo'llanilmaydi.",
       
          "Ma'muriy jazo qo'llanilishining umumiy qoidalari alohida moddada " +
          "belgilangan: jazo qonunda ko'rsatilgan doirada va huquqbuzarlik " +
          "xususiyatiga qarab tayinlanadi.",
      ],
      ru: [
       
          "Взыскания делятся на основные и дополнительные — это различие " +
          "имеет практическое значение, поскольку дополнительное взыскание " +
          "не применяется самостоятельно.",
       
          "Общие правила применения административного взыскания установлены " +
          "отдельной статьёй: взыскание назначается в пределах, указанных " +
          "законом, и с учётом характера правонарушения.",
      ],
    },
    refs: [
      { code: "MJK", article: "23" },
      { code: "MJK", article: "24" },
      { code: "MJK", article: "30" },
    ],
  },
  {
    slug: "mamuriy-jazo-qollash-muddatlari",
    area: "mamuriy",
    q: {
      uz: "Ma'muriy jazo qo'llash muddati o'tib ketsa nima bo'ladi?",
      ru: "Что если срок применения административного взыскания истёк?",
    },
    short: {
      uz:
        "Ma'muriy jazo qo'llash muddatlari qonunda belgilangan. Muddat " +
        "o'tgan bo'lsa, jazo qo'llanilmaydi — bu shikoyat uchun mustaqil va " +
        "kuchli asos.",
      ru:
        "Сроки применения административного взыскания установлены законом. " +
        "При истечении срока взыскание не применяется — это самостоятельное " +
        "и сильное основание для жалобы.",
    },
    body: {
      uz: [
       
          "Alohida modda tugaganidan so'ng shaxs ma'muriy jazoga " +
          "tortilmagan deb hisoblanadigan muddatni ham belgilaydi — ya'ni " +
          "jazo abadiy \"osilib\" qolmaydi.",
       
          "Javobgarlikni yengillashtiruvchi va og'irlashtiruvchi holatlar " +
          "ham qonunda sanab o'tilgan; yengilroq jazo qo'llanilishi mumkin " +
          "bo'lgan hollar alohida belgilangan.",
      ],
      ru: [
       
          "Отдельная статья устанавливает и срок, по истечении которого " +
          "лицо считается не подвергавшимся административному взысканию — " +
          "то есть взыскание не «висит» бессрочно.",
       
          "Обстоятельства, смягчающие и отягчающие ответственность, также " +
          "перечислены в законе; случаи применения более мягкого взыскания " +
          "определены отдельно.",
      ],
    },
    refs: [
      { code: "MJK", article: "36" },
      { code: "MJK", article: "37" },
      { code: "MJK", article: "31" },
    ],
  },
];
