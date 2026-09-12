"use strict";
/** OILA MODULI — 4-DARS: NIKOH SHARTNOMASI. Moddalar: OK 29–33. */

const LESSON = {
  key: "nikoh-shartnoma",
  category: "family",
  level: "mid",
  order: 4040,
  title: "Nikoh shartnomasi",
  desc:
    "Nikoh shartnomasi nima, qanday tuziladi, unga nimalarni " +
    "kiritish mumkin va nimalarni mumkin emas.",
  objectives: [
    "Nikoh shartnomasi nimani tartibga solishini bilasiz",
    "Uning shakli va tuzish tartibini bilasiz",
    "Qanday shartlar haqiqiy emasligini ajrata olasiz",
    "Uni o'zgartirish va bekor qilish tartibini bilasiz",
  ],
  practicalSteps: [
    "Shartnomani faqat notarial tasdiqlang — boshqa shakl ishlamaydi",
    "Har bir bandni imzolashdan oldin o'qing va tushunmaganini so'rang",
    "Bolalarga oid shartlarni kiritmang — ular baribir ishlamaydi",
    "Qarzingiz bo'lsa kreditor oldidagi majburiyatni hisobga oling",
  ],
  sections: [
    {
      heading: "Nikoh shartnomasi nima",
      text:
        "Nikoh shartnomasi — er-xotinning nikohdagi " +
        "va ajralish holatidagi MULKIY " +
        "munosabatlarini belgilaydigan kelishuv.\n\n" +
        "U qonundagi standart rejimni (barcha " +
        "orttirilgan mulk umumiy) o'zgartirish " +
        "imkonini beradi: tomonlar mulk rejimini " +
        "o'zlari belgilaydi.\n\n" +
        "⚠️ U FAQAT mulkiy masalalarni qamraydi. " +
        "Shaxsiy munosabatlar shartnoma predmeti " +
        "emas.",
      example:
        "Tadbirkor nikohdan oldin shartnoma tuzib " +
        "biznesini shaxsiy mulk sifatida belgiladi " +
        "— ajralishda u bo'linish predmeti " +
        "bo'lmaydi.",
      keyPoints: [
        "Shartnoma mulkiy munosabatlarni belgilaydi",
        "U qonundagi standart rejimni o'zgartiradi",
        "Faqat mulkiy masalalarni qamraydi",
        "Nizoni oldindan oldini olish vositasi",
      ],
      warning:
        "Shartnoma tuzilmasa qonundagi standart " +
        "rejim avtomatik amal qiladi.",
      lawRefs: [{ code: "OK", article: "29" }],
    },
    {
      heading: "Shartnomani tuzish tartibi va shakli",
      text:
        "Nikoh shartnomasini nikohdan OLDIN ham, " +
        "nikoh davrida ham tuzish mumkin.\n\n" +
        "Nikohdan oldin tuzilgan shartnoma nikoh " +
        "qayd etilgan paytdan kuchga kiradi.\n\n" +
        "⚠️ SHAKL TALABI QAT'IY: shartnoma NOTARIAL " +
        "tasdiqlanishi shart. Oddiy yozma shakl " +
        "yetarli emas — bu talab bajarilmasa " +
        "shartnoma kuchga ega bo'lmaydi.",
      example:
        "Er-xotin shartnomani o'zaro yozib " +
        "imzoladi, notariusga bormadi. Nizo " +
        "chiqqanda bu hujjat hech qanday kuchga " +
        "ega emasligi ma'lum bo'ldi.",
      keyPoints: [
        "Nikohdan oldin va nikoh davrida tuzish mumkin",
        "Nikohdan oldingisi nikoh qayd etilgach kuchga kiradi",
        "Notarial tasdiq majburiy",
        "Oddiy yozma shakl ishlamaydi",
      ],
      warning:
        "Notarial tasdiqlanmagan \"nikoh " +
        "shartnomasi\" — oddiy qog'oz.",
      lawRefs: [{ code: "OK", article: "30" }],
    },
    {
      heading: "Shartnomaning mazmuni: nimani yozish mumkin",
      text:
        "Tomonlar shartnomada mulkiy rejimni " +
        "o'zlari belgilaydi.\n\n" +
        "Kiritish mumkin: qaysi mulk umumiy, " +
        "qaysi biri shaxsiy bo'lishi; ajralishda " +
        "qanday bo'linishi; kim kimga qanday " +
        "ta'minot berishi; daromadlarga nisbatan " +
        "rejim; oilaviy xarajatlarni taqsimlash " +
        "tartibi.\n\n" +
        "Rejim mavjud mulkka ham, kelajakda " +
        "orttiriladiganiga ham belgilanishi " +
        "mumkin.",
      example:
        "Shartnomada \"har birining ish haqi o'zining " +
        "shaxsiy mulki\" deb belgilandi. Bu " +
        "qonundagi standart rejimdan farq qiladi " +
        "va amal qiladi.",
      keyPoints: [
        "Mulk rejimini tomonlar o'zlari belgilaydi",
        "Mavjud va kelajakdagi mulkka nisbatan belgilash mumkin",
        "Ta'minot va xarajatlar tartibi ham kiritiladi",
        "Standart rejimdan farq qilishi mumkin",
      ],
      warning:
        "Shartlarni ANIQ yozing: \"adolatli " +
        "bo'linadi\" kabi noaniq ifoda nizo " +
        "keltiradi.",
      lawRefs: [{ code: "OK", article: "31" }],
    },
    {
      heading: "Nimalarni kiritish mumkin emas",
      text:
        "Shartnomaning QAT'IY CHEGARALARI bor.\n\n" +
        "Kiritib bo'lmaydi: shaxsiy nomulkiy " +
        "munosabatlar (kim uy ishini qiladi, kim " +
        "bilan muloqot qiladi); BOLALARGA " +
        "nisbatan huquq va majburiyatlar; " +
        "tomonlardan birining huquq layoqatini " +
        "yoki sudga murojaat huquqini " +
        "cheklaydigan shartlar.\n\n" +
        "⚠️ Bir tomonni O'TA NOQULAY ahvolga " +
        "soladigan shartlar ham haqiqiy emas deb " +
        "topilishi mumkin.",
      example:
        "Shartnomaga \"ajralishda bola ota bilan " +
        "qoladi\" deb yozildi. Bu shart " +
        "ishlamaydi — bola masalasini sud bola " +
        "manfaatidan kelib chiqib hal qiladi.",
      keyPoints: [
        "Shaxsiy nomulkiy munosabatlar kiritilmaydi",
        "Bolalarga oid shartlar ishlamaydi",
        "Huquq layoqatini cheklovchi shartlar haqiqiy emas",
        "O'ta noqulay ahvolga soluvchi shart bekor qilinadi",
      ],
      warning:
        "Bunday shart yozilsa u ishlamaydi, lekin " +
        "shartnomaning qolgan qismi amal qilishda " +
        "davom etishi mumkin.",
      lawRefs: [{ code: "OK", article: "31" }],
    },
    {
      heading: "Shartnomani o'zgartirish va bekor qilish",
      text:
        "Shartnomani keyinchalik o'zgartirish yoki " +
        "bekor qilish mumkin — lekin faqat " +
        "IKKALA tomonning roziligi bilan va " +
        "yana NOTARIAL shaklda.\n\n" +
        "⚠️ Bir tomonlama voz kechishga YO'L " +
        "QO'YILMAYDI.\n\n" +
        "Kelishuv bo'lmasa, shartnomani sud " +
        "tartibida o'zgartirish yoki bekor " +
        "qilishni talab qilish mumkin — qonunda " +
        "nazarda tutilgan asoslar bo'yicha.",
      example:
        "Er shartnoma shartlaridan norozi bo'lib " +
        "\"men endi rozimasman\" dedi. Bu yetarli " +
        "emas — o'zgartirish uchun xotinning " +
        "roziligi yoki sud qarori kerak.",
      keyPoints: [
        "O'zgartirish ikkala tomon roziligi bilan bo'ladi",
        "Notarial shakl bu yerda ham majburiy",
        "Bir tomonlama voz kechish mumkin emas",
        "Kelishuv bo'lmasa sudga murojaat qilinadi",
      ],
      warning:
        "Imzolashdan oldin o'ylang — keyin bir " +
        "tomonlama chiqib ketib bo'lmaydi.",
      lawRefs: [{ code: "OK", article: "32" }],
    },
    {
      heading: "Shartnomani haqiqiy emas deb topish",
      text:
        "Nikoh shartnomasi to'liq yoki qisman " +
        "haqiqiy emas deb topilishi mumkin.\n\n" +
        "Asoslar odatda: notarial shakl " +
        "buzilganligi; mazmun qonunga zidligi " +
        "(bolalarga oid shartlar, huquqni " +
        "cheklash); bir tomonni o'ta noqulay " +
        "ahvolga solishi; iroda erkin " +
        "bo'lmaganligi (aldov, tahdid, " +
        "majburlash).\n\n" +
        "Buni faqat SUD amalga oshiradi.\n\n" +
        "Qisman haqiqiy emas deb topilsa qolgan " +
        "qismi amal qilishda davom etadi.",
      example:
        "Shartnomada bir tomonga hech narsa " +
        "qolmaydigan shart bor edi. Sud aynan " +
        "shu bandni haqiqiy emas deb topdi, " +
        "qolgan qismi saqlanib qoldi.",
      keyPoints: [
        "Shartnoma to'liq yoki qisman bekor qilinishi mumkin",
        "Shakl, mazmun va iroda asosiy asoslar",
        "Buni faqat sud amalga oshiradi",
        "Qisman bekor qilinsa qolgani amal qiladi",
      ],
      warning:
        "Bosim ostida imzolangan shartnomani " +
        "e'tiroz qilish uchun dalil kerak: " +
        "guvohlar, yozishmalar.",
      lawRefs: [{ code: "OK", article: "33" }],
    },
    {
      heading: "Kreditorlar oldidagi majburiyat",
      text:
        "Nikoh shartnomasi kreditorlardan " +
        "qochish vositasi BO'LA OLMAYDI.\n\n" +
        "Qonun kreditorlar huquqlarining " +
        "kafolatlarini alohida belgilaydi: " +
        "shartnoma tuzilganda, o'zgartirilganda " +
        "yoki bekor qilinganda er-xotin " +
        "zimmasiga kreditorni XABARDOR QILISH " +
        "majburiyati yuklanishi mumkin.\n\n" +
        "Bu majburiyat bajarilmasa kreditor " +
        "shartnomadan qat'i nazar o'z talabini " +
        "qo'yishi mumkin.",
      example:
        "Er qarz oldi, keyin shartnoma tuzib " +
        "butun mulkni xotiniga o'tkazdi va " +
        "kreditorni xabardor qilmadi. Shartnoma " +
        "kreditorga qarshi ishlamaydi.",
      keyPoints: [
        "Shartnoma kreditordan qochish vositasi emas",
        "Kreditorni xabardor qilish majburiyati bo'lishi mumkin",
        "Bajarilmasa kreditor talabini baribir qo'yadi",
        "Kafolatlar alohida moddada belgilangan",
      ],
      warning:
        "Qarzingiz bo'lsa shartnoma tuzishdan " +
        "oldin kreditor oldidagi majburiyatni " +
        "aniqlashtiring.",
      lawRefs: [
        { code: "OK", article: "35" },
        { code: "OK", article: "34" },
      ],
    },
  ],
};

module.exports = { LESSON };
