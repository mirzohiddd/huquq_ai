"use strict";
/**
 * SOLIQ HUQUQI — savol-javob. ⚠️ Matnda ANIQ MUDDAT, FOIZ, SUMMA yoki MODDA
 * RAQAMI yozilmaydi — ular `refs` orqali `LegalChunk` dan JONLI olinadi
 * (nusxalangan raqam qonun yangilanganda eskirardi). Batafsil: index.js
 */
module.exports = [
  {
    slug: "soliq-tolovchining-huquqlari",
    area: "soliq",
    q: {
      uz: "Soliq to'lovchining qanday huquqlari bor?",
      ru: "Какие права есть у налогоплательщика?",
    },
    short: {
      uz:
        "Soliq to'lovchilarning huquqlari qonunda alohida moddada sanab " +
        "o'tilgan: ma'lumot olish, imtiyozlardan foydalanish, hujjatlar " +
        "bilan tanishish va qarorlar ustidan shikoyat qilish.",
      ru:
        "Права налогоплательщиков перечислены в отдельной статье закона: " +
        "получать информацию, пользоваться льготами, знакомиться с " +
        "документами и обжаловать решения.",
    },
    body: {
      uz: [
       
          "Bu huquqlar soliq organi bilan har qanday muloqotda amal qiladi " +
          "— tekshiruv paytida ham, hisobot topshirishda ham.",
       
          "Huquqlaringizni bilish amaliy foyda beradi: masalan, hujjatlarni " +
          "talab qilish tartibi qonunda belgilangan va undan tashqari " +
          "talablar qonuniy emas.",
      ],
      ru: [
       
          "Эти права действуют при любом взаимодействии с налоговым органом " +
          "— как при проверке, так и при сдаче отчётности.",
       
          "Знание прав даёт практическую пользу: например, порядок " +
          "истребования документов установлен законом, и требования сверх " +
          "него незаконны.",
      ],
    },
    refs: [
      { code: "SK", article: "21" },
    ],
  },
  {
    slug: "yillik-daromad-deklaratsiyasi",
    area: "soliq",
    q: {
      uz: "Jami yillik daromad to'g'risidagi deklaratsiyani kim topshiradi?",
      ru: "Кто подаёт декларацию о совокупном годовом доходе?",
    },
    short: {
      uz:
        "Deklaratsiya asosida soliq solinadigan daromadlar qonunda aniq " +
        "belgilangan. Agar daromadingiz shu ro'yxatga tushsa, deklaratsiya " +
        "topshirish MAJBURIY.",
      ru:
        "Доходы, облагаемые налогом на основании декларации, прямо " +
        "определены законом. Если ваш доход попадает в этот перечень, " +
        "подача декларации ОБЯЗАТЕЛЬНА.",
    },
    body: {
      uz: [
       
          "Deklaratsiyani taqdim etish tartibi va u bo'yicha soliq to'lash " +
          "tartibi alohida moddalarda belgilangan.",
       
          "Muddatni o'tkazib yubormang: kechikish uchun javobgarlik nazarda " +
          "tutilgan. Daromadni tasdiqlovchi hujjatlarni yil davomida " +
          "to'plab boring.",
      ],
      ru: [
       
          "Порядок представления декларации и порядок уплаты налога по ней " +
          "установлены отдельными статьями.",
       
          "Не пропускайте срок: за просрочку предусмотрена ответственность. " +
          "Собирайте подтверждающие доход документы в течение всего года.",
      ],
    },
    refs: [
      { code: "SK", article: "393" },
      { code: "SK", article: "396" },
      { code: "SK", article: "397" },
    ],
  },
  {
    slug: "soliq-tekshiruvi-turlari",
    area: "soliq",
    q: {
      uz: "Soliq tekshiruvining qanday turlari bor?",
      ru: "Какие бывают виды налоговых проверок?",
    },
    short: {
      uz:
        "Soliq tekshiruvlarining turlari qonunda belgilangan — kameral va " +
        "sayyor tekshiruv asosiylari. Har birining o'z tartibi va " +
        "cheklovlari bor.",
      ru:
        "Виды налоговых проверок установлены законом — основные это " +
        "камеральная и выездная. У каждой свой порядок и свои ограничения.",
    },
    body: {
      uz: [
       
          "Tekshiruv chog'ida hujjatlarni talab qilib olish tartibi alohida " +
          "moddada belgilangan — bu talabning chegarasini bilish muhim.",
       
          "Qonun tekshiruv paytida g'ayriqonuniy harakatlar orqali zarar " +
          "yetkazilishiga yo'l qo'ymaslikni alohida nazarda tutgan.",
      ],
      ru: [
       
          "Порядок истребования документов в ходе проверки установлен " +
          "отдельной статьёй — важно знать границы этого требования.",
       
          "Закон отдельно предусматривает недопущение причинения вреда " +
          "незаконными действиями при проведении проверки.",
      ],
    },
    refs: [
      { code: "SK", article: "137" },
      { code: "SK", article: "146" },
      { code: "SK", article: "155" },
    ],
  },
  {
    slug: "soliq-organi-qaroriga-shikoyat",
    area: "soliq",
    q: {
      uz: "Soliq organining qaroriga qanday shikoyat qilinadi?",
      ru: "Как обжаловать решение налогового органа?",
    },
    short: {
      uz:
        "Soliq tekshiruvi natijalari bo'yicha qabul qilingan qaror ustidan " +
        "yuqori turuvchi soliq organiga shikoyat berish tartibi va " +
        "muddatlari qonunda belgilangan.",
      ru:
        "Порядок и сроки подачи жалобы в вышестоящий налоговый орган на " +
        "решение по результатам налоговой проверки установлены законом.",
    },
    body: {
      uz: [
       
          "Qarorning kuchga kirishi ham alohida moddada belgilangan — " +
          "shikoyat muddatini aynan shu sanadan hisoblang.",
       
          "Tekshiruv materiallarini ko'rib chiqish tartibi qonunda " +
          "yozilgan: siz o'z e'tirozlaringizni taqdim etish huquqiga " +
          "egasiz, bundan foydalaning.",
      ],
      ru: [
       
          "Вступление решения в силу также установлено отдельной статьёй — " +
          "исчисляйте срок жалобы именно с этой даты.",
       
          "Порядок рассмотрения материалов проверки изложен в законе: вы " +
          "вправе представить свои возражения — воспользуйтесь этим.",
      ],
    },
    refs: [
      { code: "SK", article: "232" },
      { code: "SK", article: "160" },
      { code: "SK", article: "158" },
    ],
  },
];
