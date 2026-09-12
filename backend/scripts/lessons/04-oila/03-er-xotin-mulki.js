"use strict";
/**
 * OILA MODULI — 3-DARS: ER-XOTINNING MULKI
 *
 * Qamrab olingan moddalar: OK 23–28 (umumiy va shaxsiy mulk,
 * bo'lish), 34–36 (kreditorlar, shartnomaviy munosabatlar), 12
 * (da'vo muddati). Nikoh shartnomasi ALOHIDA darsda (OK 29–33).
 */

const LESSON = {
  key: "er-xotin-mulki",
  category: "family",
  level: "mid",
  order: 4030,
  title: "Er-xotinning mulki va uni bo'lish",
  desc:
    "Qaysi mol-mulk umumiy, qaysi biri shaxsiy hisoblanadi, uni " +
    "kim tasarruf eta oladi va ajralishda qanday bo'linadi.",
  objectives: [
    "Umumiy va shaxsiy mulkni bir-biridan ajrata olasiz",
    "Umumiy mulkni tasarruf etishda kimning roziligi kerakligini bilasiz",
    "Mulk qanday bo'linishini va ulushlar qanday aniqlanishini tushunasiz",
    "Kreditorlar oldidagi javobgarlik qanday taqsimlanishini bilasiz",
  ],
  practicalSteps: [
    "Nikoh davrida olingan yirik mulk hujjatlarini yig'ib boring",
    "Shaxsiy mulkni tasdiqlovchi hujjatni (meros, hadya) alohida saqlang",
    "Ko'chmas mulk bitimlarida ikkinchi tomonning yozma roziligini oling",
    "Mulkni bo'lish talabini ajralish ishida BIRGA qo'ying",
  ],
  sections: [
    {
      heading: "Er va xotinning umumiy mulki",
      text:
        "Nikoh davrida orttirilgan mol-mulk " +
        "er-xotinning UMUMIY mulki hisoblanadi.\n\n" +
        "Unga kiradi: ish haqi va boshqa daromadlar; " +
        "ular hisobiga olingan ko'char va ko'chmas " +
        "mulk; qimmatli qog'ozlar; omonatlar; " +
        "tadbirkorlik daromadi.\n\n" +
        "⚠️ ENG MUHIM QOIDA: mulk KIMNING NOMIGA " +
        "rasmiylashtirilganidan qat'i nazar umumiy " +
        "hisoblanadi.\n\n" +
        "Uy ishlari bilan band bo'lgan yoki uzrli " +
        "sabab bilan daromadi bo'lmagan tomon ham " +
        "teng huquqli.",
      example:
        "Nikoh davrida er o'z nomiga kvartira va " +
        "avtomobil rasmiylashtirdi, xotin " +
        "ishlamagan. Ajralishda bu mol-mulk " +
        "baribir umumiy hisoblanadi.",
      keyPoints: [
        "Nikoh davrida orttirilgan mol-mulk umumiy",
        "Kimning nomiga rasmiylashtirilgani ahamiyatsiz",
        "Daromadi bo'lmagan tomon ham teng huquqli",
        "Daromad, mulk, omonat va qimmatli qog'ozlar kiradi",
      ],
      warning:
        "Mulkni bir tomonning nomiga " +
        "rasmiylashtirish uni \"shaxsiy\" qilib " +
        "qo'ymaydi — bu eng ko'p tarqalgan xato.",
      lawRefs: [{ code: "OK", article: "23" }],
    },
    {
      heading: "Umumiy mulkni tasarruf etish",
      text:
        "Umumiy mol-mulkka egalik qilish, undan " +
        "foydalanish va uni tasarruf etish " +
        "er-xotinning O'ZARO ROZILIGI bilan " +
        "amalga oshiriladi.\n\n" +
        "Kundalik mayda bitimlarda rozilik nazarda " +
        "tutilgan deb hisoblanadi.\n\n" +
        "⚠️ Lekin JIDDIY bitimlarda (ko'chmas " +
        "mulk, notarial tasdiqlanishi yoki " +
        "ro'yxatdan o'tishi shart bo'lgan " +
        "bitimlar) ikkinchi tomonning roziligi " +
        "ALOHIDA va aniq shaklda talab " +
        "qilinadi.\n\n" +
        "Rozilik olinmasdan tuzilgan bunday bitim " +
        "sud tartibida haqiqiy emas deb topilishi " +
        "mumkin.",
      example:
        "Er xotinining roziligisiz umumiy " +
        "kvartirani sotdi. Xotin bitimni sudda " +
        "e'tiroz bilan haqiqiy emas deb topishga " +
        "harakat qilishi mumkin.",
      keyPoints: [
        "Umumiy mulk o'zaro rozilik bilan tasarruf etiladi",
        "Kundalik bitimlarda rozilik nazarda tutiladi",
        "Ko'chmas mulk bitimlarida alohida rozilik shart",
        "Roziliqsiz bitim haqiqiy emas deb topilishi mumkin",
      ],
      warning:
        "Og'zaki rozilikni isbotlash deyarli " +
        "imkonsiz — jiddiy bitimlarda u yozma va " +
        "notarial bo'lsin.",
      lawRefs: [{ code: "OK", article: "24" }],
    },
    {
      heading: "Er va xotinning har birining shaxsiy mulki",
      text:
        "Hamma narsa umumiy emas. Qonun har " +
        "birining SHAXSIY mulkini alohida " +
        "ajratadi va u bo'linmaydi.\n\n" +
        "Shaxsiy mulkka odatda kiradi: nikohgacha " +
        "tegishli bo'lgan mol-mulk; nikoh davrida " +
        "MEROS yoki HADYA tariqasida olingan " +
        "mol-mulk.\n\n" +
        "⚠️ MUHIM ISTISNO: agar nikoh davrida " +
        "shaxsiy mulkning qiymati umumiy mablag' " +
        "yoki ikkinchi tomonning mehnati hisobiga " +
        "SEZILARLI oshgan bo'lsa, u umumiy mulk " +
        "deb topilishi mumkin.",
      example:
        "Erga otasidan meros uy qoldi — shaxsiy " +
        "mulk. Nikoh davrida umumiy pulga katta " +
        "ta'mir qilindi va qiymati sezilarli " +
        "oshdi — endi u umumiy deb topilishi " +
        "mumkin.",
      keyPoints: [
        "Nikohgacha bo'lgan mulk shaxsiy hisoblanadi",
        "Meros va hadya ham shaxsiy mulk",
        "Umumiy mablag' hisobiga qiymati oshsa umumiy bo'lishi mumkin",
        "Shaxsiy mulkni tasdiqlovchi hujjat saqlanishi shart",
      ],
      warning:
        "Og'zaki hadyani keyinchalik isbotlash " +
        "juda qiyin — yirik hadyalarni yozma " +
        "rasmiylashtiring.",
      lawRefs: [{ code: "OK", article: "25" }],
    },
    {
      heading: "Shaxsiy foydalanishdagi buyumlar",
      text:
        "Alohida guruh — shaxsiy foydalanishdagi " +
        "buyumlar. Kiyim-kechak, poyabzal, " +
        "gigiyena vositalari va shunga o'xshash " +
        "buyumlar umumiy mablag'ga olingan " +
        "bo'lsa ham, ulardan foydalangan " +
        "tomonning mulki hisoblanadi.\n\n" +
        "Mantiq oddiy: ularni bo'lish amaliy " +
        "jihatdan ma'nosiz va shaxsiy hayotga " +
        "aralashish bo'lardi.\n\n" +
        "⚠️ ISTISNO: zebu-ziynat va boshqa " +
        "hashamat buyumlari bu qoidaga " +
        "kirmaydi — ular umumiy mulk " +
        "hisoblanadi.",
      example:
        "Umumiy pulga olingan kundalik kiyimlar " +
        "bo'linmaydi. Xuddi shu pulga olingan " +
        "qimmatbaho zargarlik buyumlari esa " +
        "umumiy mulk va bo'linishi mumkin.",
      keyPoints: [
        "Shaxsiy foydalanishdagi buyumlar bo'linmaydi",
        "Ular umumiy pulga olingan bo'lsa ham foydalanuvchiniki",
        "Zebu-ziynat va hashamat buyumlari istisno",
        "Chegaradagi tortishuvlar sudda hal qilinadi",
      ],
      warning:
        "Qimmatbaho buyumlarning cheki va " +
        "hujjatini saqlang — nizoda ularning " +
        "qiymati va sanasi hal qiluvchi.",
      lawRefs: [{ code: "OK", article: "26" }],
    },
    {
      heading: "Umumiy mol-mulkni bo'lish",
      text:
        "Umumiy mol-mulkni bo'lishni nikoh " +
        "davrida ham, ajralishda ham, " +
        "ajrashgandan KEYIN ham amalga oshirish " +
        "mumkin.\n\n" +
        "Bo'lish ikki yo'l bilan: tomonlarning " +
        "KELISHUVI bo'yicha (afzalroq va tez) " +
        "yoki SUD tartibida.\n\n" +
        "Bo'lish tartibi: avval nima umumiy, " +
        "nima shaxsiy ekani aniqlanadi; so'ng " +
        "ulushlar belgilanadi; keyin mol-mulk " +
        "taqsimlanadi. Natura shaklida bo'lish " +
        "imkonsiz bo'lsa pul kompensatsiyasi " +
        "belgilanadi.",
      example:
        "Er-xotin kelishib kvartirani biriga, " +
        "avtomobil va omonatni ikkinchisiga " +
        "berdi. Bu sudsiz, tez va arzon hal " +
        "bo'ldi.",
      keyPoints: [
        "Bo'lish nikoh davrida, ajralishda va undan keyin mumkin",
        "Kelishuv yo'li sud yo'lidan afzalroq",
        "Avval umumiy va shaxsiy mulk ajratiladi",
        "Natura bo'lish imkonsiz bo'lsa kompensatsiya beriladi",
      ],
      warning:
        "Bo'lish kelishuvini YOZMA " +
        "rasmiylashtiring; ko'chmas mulk bo'lsa " +
        "notarial tasdiqlang.",
      lawRefs: [{ code: "OK", article: "27" }],
    },
    {
      heading: "Bo'lishda ulushlarni aniqlash",
      text:
        "Umumiy mol-mulkni bo'lishda er va " +
        "xotinning ulushlari TENG deb " +
        "topiladi.\n\n" +
        "⚠️ Lekin sud muayyan holatlarda ulushdan " +
        "CHEKINISHI mumkin — masalan voyaga " +
        "yetmagan bolalar manfaatini yoki " +
        "tomonlardan birining e'tiborga loyiq " +
        "manfaatini hisobga olib.\n\n" +
        "Ya'ni \"teng\" degani avtomatik 50/50 " +
        "degani emas: sud vaziyatni baholaydi.\n\n" +
        "Chekinish uchun asosni DALIL bilan " +
        "ko'rsatish kerak.",
      example:
        "Bolalar ona bilan qoladi va uning " +
        "boshqa turar joyi yo'q. Sud bolalar " +
        "manfaatini hisobga olib ulushdan " +
        "chekinishi mumkin.",
      keyPoints: [
        "Umumiy qoida — ulushlar teng",
        "Sud muayyan holatlarda chekinishi mumkin",
        "Bolalar manfaati asosiy asoslardan biri",
        "Chekinish uchun dalil kerak",
      ],
      warning:
        "Ulushdan chekinishni so'rasangiz uni " +
        "asoslang — shunchaki iltimos yetarli " +
        "emas.",
      lawRefs: [{ code: "OK", article: "28" }],
    },
    {
      heading: "Kreditorlar va haq undirish",
      text:
        "Er-xotinning qarzlari bo'lsa " +
        "kreditorlar qaysi mol-mulkka haq " +
        "undirishi mumkin?\n\n" +
        "Qonun haq undirishni er-xotinning " +
        "mol-mulkiga qaratish qoidalarini " +
        "belgilaydi.\n\n" +
        "Umumiy mantiq: bir tomonning shaxsiy " +
        "majburiyati bo'yicha avval uning " +
        "SHAXSIY mol-mulkiga haq undiriladi; " +
        "yetmasa umumiy mol-mulkdagi ULUSHIGA " +
        "qaratilishi mumkin.\n\n" +
        "Umumiy majburiyat bo'lsa qoidalar " +
        "boshqacha bo'ladi.",
      example:
        "Er shaxsiy qarz oldi va to'lay olmadi. " +
        "Kreditor avval uning shaxsiy mulkiga, " +
        "yetmasa umumiy mulkdagi ulushiga haq " +
        "undirishi mumkin.",
      keyPoints: [
        "Haq undirish qoidalari qonunda belgilangan",
        "Shaxsiy majburiyatda avval shaxsiy mulk hisobga olinadi",
        "Yetmasa umumiy mulkdagi ulushga qaratilishi mumkin",
        "Umumiy majburiyatda qoidalar boshqacha",
      ],
      warning:
        "Turmush o'rtog'ingiz nomidan qarz " +
        "olishga kafil bo'lishdan oldin " +
        "oqibatini hisoblang.",
      lawRefs: [{ code: "OK", article: "34" }],
    },
    {
      heading: "Kreditorlar huquqlarining kafolatlari",
      text:
        "Nikoh shartnomasi tuzilganda, " +
        "o'zgartirilganda yoki bekor " +
        "qilinganda kreditorlarning huquqlari " +
        "alohida kafolatlanadi.\n\n" +
        "Sabab aniq: aks holda er-xotin " +
        "shartnoma tuzib butun mol-mulkni bir " +
        "tomonga o'tkazishi va kreditordan " +
        "qochishi mumkin bo'lardi.\n\n" +
        "⚠️ Shuning uchun qonun er-xotin " +
        "zimmasiga kreditorni XABARDOR QILISH " +
        "majburiyatini yuklashi mumkin.\n\n" +
        "Bu majburiyat bajarilmasa kreditor " +
        "shartnomadan qat'i nazar o'z " +
        "talabini qo'yishi mumkin.",
      example:
        "Er qarz oldi, keyin nikoh shartnomasi " +
        "tuzib butun mulkni xotiniga o'tkazdi. " +
        "Kreditor xabardor qilinmagan bo'lsa " +
        "bu unga qarshi ishlamaydi.",
      keyPoints: [
        "Kreditorlarning huquqlari alohida kafolatlanadi",
        "Maqsad — shartnoma orqali qarzdan qochishning oldini olish",
        "Kreditorni xabardor qilish majburiyati bo'lishi mumkin",
        "Bajarilmasa kreditor talabini baribir qo'yadi",
      ],
      warning:
        "Qarzingiz bo'lsa nikoh shartnomasi " +
        "tuzishdan oldin kreditor oldidagi " +
        "majburiyatni hisobga oling.",
      lawRefs: [{ code: "OK", article: "35" }],
    },
    {
      heading: "Er-xotin o'rtasidagi mulkiy-shartnomaviy munosabatlar",
      text:
        "Er-xotin o'zaro shartnoma tuzishi " +
        "mumkinmi? Qonun er-xotin o'rtasidagi " +
        "mulkiy-shartnomaviy munosabatlarni " +
        "alohida moddada tartibga soladi.\n\n" +
        "Ular o'zaro oldi-sotdi, hadya, qarz " +
        "va boshqa bitimlar tuzishi mumkin — " +
        "umumiy fuqarolik qoidalariga " +
        "muvofiq.\n\n" +
        "⚠️ Amaliy jihat: bunday bitimlar " +
        "keyinchalik mulkni bo'lishda tortishuv " +
        "predmeti bo'lishi mumkin. Ayniqsa " +
        "ajralish arafasida tuzilgan bitimlar " +
        "shubha ostiga olinadi.",
      example:
        "Ajralish arafasida er umumiy " +
        "avtomobilni \"sotdi\". Bunday bitim " +
        "mulkni yashirish maqsadida tuzilgan " +
        "deb baholanishi va e'tiroz qilinishi " +
        "mumkin.",
      keyPoints: [
        "Er-xotin o'zaro bitim tuzishi mumkin",
        "Ular umumiy fuqarolik qoidalariga bo'ysunadi",
        "Bunday bitimlar bo'lishda tortishuv predmeti bo'lishi mumkin",
        "Ajralish arafasidagi bitimlar shubha ostiga olinadi",
      ],
      warning:
        "Ajralish arafasida mulkni uchinchi " +
        "shaxsga o'tkazish keyinchalik e'tiroz " +
        "qilinishi mumkin.",
      lawRefs: [{ code: "OK", article: "36" }],
    },
    {
      heading: "Mulkni bo'lish va da'vo muddati",
      text:
        "Ajrashgan er-xotinning mulkni bo'lish " +
        "talablariga DA'VO MUDDATI " +
        "qo'llaniladi.\n\n" +
        "⚠️ Bu shuni anglatadi: cheksiz kutib " +
        "bo'lmaydi. Muddat o'tgach haqli talab " +
        "ham ko'rilmay qolishi mumkin.\n\n" +
        "Oilaviy munosabatlarda da'vo muddatining " +
        "qo'llanilishi alohida moddada " +
        "belgilangan — barcha talablarga emas, " +
        "qonunda ko'rsatilganlariga.\n\n" +
        "Aniq muddat quyidagi qonun matnida.",
      example:
        "Er-xotin ajrashdi, lekin kvartirani " +
        "bo'lishmadi. Yillar o'tib xotin da'vo " +
        "qo'ymoqchi bo'ldi — muddat o'tib " +
        "ketgan bo'lishi mumkin.",
      keyPoints: [
        "Mulkni bo'lish talablariga da'vo muddati qo'llaniladi",
        "Muddat o'tgach haqli talab ham ko'rilmasligi mumkin",
        "Da'vo muddati barcha oilaviy talablarga emas",
        "Eng to'g'ri yo'l — mulkni ajralish bilan birga bo'lish",
      ],
      warning:
        "Mulkni bo'lishni keyinga qoldirish eng " +
        "qimmatga tushadigan xato: muddat o'tadi, " +
        "mulk sotiladi, dalil yo'qoladi.",
      lawRefs: [
        { code: "OK", article: "12" },
        { code: "OK", article: "27" },
      ],
    },
  ],
};

module.exports = { LESSON };
