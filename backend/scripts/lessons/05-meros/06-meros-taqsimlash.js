"use strict";
/** MEROS MODULI — 6-DARS: MEROSNI TAQSIMLASH. FK2 1150–1154. */

const LESSON = {
  key: "meros-taqsimlash",
  category: "inheritance",
  level: "mid",
  order: 5060,
  title: "Merosni taqsimlash va imtiyozli huquqlar",
  desc:
    "Meros merosxo'rlar o'rtasida qanday taqsimlanadi, kimning " +
    "imtiyozi bor va ulushlar qanday o'zgaradi.",
  objectives: [
    "Merosni taqsimlashning ikki yo'lini bilasiz",
    "Hozir bo'lmagan merosxo'rlarning huquqini bilasiz",
    "Imtiyozli huquq kimga tegishli ekanini bilasiz",
    "Ulushlarning ortishi qanday yuz berishini bilasiz",
  ],
  practicalSteps: [
    "Taqsimot kelishuvini YOZMA rasmiylashtiring",
    "Ko'chmas mulk bo'lsa kelishuvni notarial tasdiqlang",
    "Homila yoki noma'lum merosxo'r borligini notariusga ayting",
    "Imtiyozli huquq asosini hujjat bilan tasdiqlang",
  ],
  sections: [
    {
      heading: "Merosning taqsimlanishi",
      text:
        "Bir necha merosxo'r bo'lsa, " +
        "meros ular o'rtasida " +
        "TAQSIMLANADI.\n\n" +
        "Qabul qilingan meros dastlab " +
        "merosxo'rlarning UMUMIY " +
        "ULUSHLI mulki hisoblanadi. " +
        "Keyin u taqsimlanadi.\n\n" +
        "Taqsimlash IKKI yo'l bilan: " +
        "merosxo'rlarning KELISHUVI " +
        "bo'yicha (eng afzal va tez " +
        "yo'l) yoki kelishuv " +
        "bo'lmasa SUD tartibida.\n\n" +
        "⚠️ Kelishuv bo'yicha " +
        "taqsimlashda merosxo'rlar " +
        "ulushlarni O'ZLARI " +
        "belgilashi mumkin — ular " +
        "qonundagi teng ulushdan " +
        "farq qilishi mumkin.\n\n" +
        "Kelishuv yozma " +
        "rasmiylashtiriladi va " +
        "ko'chmas mulk bo'lsa " +
        "notarial tasdiqlanadi.",
      example:
        "Uch merosxo'r kelishib " +
        "kvartirani biriga, avtomobilni " +
        "ikkinchisiga, bank omonatini " +
        "uchinchisiga berdi. Sudsiz, " +
        "tez va arzon hal bo'ldi.",
      keyPoints: [
        "Qabul qilingan meros avval umumiy ulushli mulk bo'ladi",
        "Taqsimlash kelishuv yoki sud orqali amalga oshiriladi",
        "Kelishuvda ulushlar qonundagidan farq qilishi mumkin",
        "Kelishuv yozma rasmiylashtiriladi",
      ],
      warning:
        "Og'zaki kelishuv ishlamaydi — " +
        "taqsimot kelishuvini YOZMA va " +
        "notarial rasmiylashtiring.",
      lawRefs: [{ code: "FK2", article: "1150" }],
    },
    {
      heading: "Hozir bo'lmagan merosxo'rlarning huquqlari",
      text:
        "Merosxo'rlardan biri hozir " +
        "bo'lmasa (uzoqda, noma'lum " +
        "joyda yoki hali tug'ilmagan " +
        "bo'lsa) taqsimot qanday " +
        "amalga oshiriladi?\n\n" +
        "Qonun bunday merosxo'rlarning " +
        "huquqlarini himoya " +
        "qiladi.\n\n" +
        "⚠️ ENG MUHIM HOLAT — HOMILA. " +
        "Agar merosxo'r hali " +
        "tug'ilmagan bo'lsa, meros " +
        "taqsimoti u tug'ilgunga qadar " +
        "TO'XTATIB TURILADI.\n\n" +
        "Bu mantiqiy: aks holda " +
        "taqsimot noto'g'ri bo'lardi " +
        "va uni keyinchalik qayta " +
        "ko'rib chiqishga to'g'ri " +
        "kelardi.\n\n" +
        "Boshqa hozir bo'lmagan " +
        "merosxo'rlar uchun ham " +
        "himoya choralari nazarda " +
        "tutilgan — ularning ulushi " +
        "ajratib qo'yiladi.",
      example:
        "Meros ochilganda meros " +
        "qoldiruvchining xotini " +
        "homilador edi. Taqsimot bola " +
        "tug'ilgunga qadar kutiladi.",
      keyPoints: [
        "Hozir bo'lmagan merosxo'rlarning huquqlari himoyalanadi",
        "Homila bo'lsa taqsimot to'xtatib turiladi",
        "Bu keyingi qayta taqsimlashning oldini oladi",
        "Uzoqdagi merosxo'rlar uchun ulush ajratiladi",
      ],
      warning:
        "Homila yoki noma'lum " +
        "merosxo'r borligini " +
        "yashirib taqsimlash " +
        "keyinchalik bekor qilinadi.",
      lawRefs: [{ code: "FK2", article: "1151" }],
    },
    {
      heading: "Ayrim merosxo'rlarning imtiyozli huquqi",
      text:
        "Taqsimlashda ba'zi merosxo'rlar " +
        "IMTIYOZLI huquqqa ega " +
        "bo'ladi.\n\n" +
        "Bu shuni anglatadi: muayyan " +
        "mol-mulk aynan o'sha " +
        "merosxo'rga berilishi " +
        "ustunlik qiladi.\n\n" +
        "Odatiy asoslar: merosxo'r o'sha " +
        "mol-mulkning umumiy " +
        "mulkdorlaridan biri bo'lsa; " +
        "u mol-mulkdan doimiy " +
        "foydalanib kelgan bo'lsa; " +
        "turar joyda yashab kelgan va " +
        "boshqa turar joyi bo'lmasa.\n\n" +
        "⚠️ MUHIM: imtiyozli huquq " +
        "\"tekin olish\" degani EMAS. " +
        "Agar olingan mol-mulk " +
        "qiymati ulushdan ortiq " +
        "bo'lsa, boshqa " +
        "merosxo'rlarga " +
        "KOMPENSATSIYA to'lanadi.",
      example:
        "Merosxo'rlardan biri meros " +
        "qolgan uyda yashab kelgan va " +
        "boshqa turar joyi yo'q. U " +
        "uyni olishda imtiyozli " +
        "huquqqa ega, lekin " +
        "boshqalarga kompensatsiya " +
        "to'laydi.",
      keyPoints: [
        "Ayrim merosxo'rlar imtiyozli huquqqa ega",
        "Umumiy mulkdorlik va doimiy foydalanish asos bo'ladi",
        "Imtiyoz tekin olish degani emas",
        "Ortiq qism kompensatsiya bilan qoplanadi",
      ],
      warning:
        "Imtiyozli huquq asosini hujjat " +
        "bilan tasdiqlang: propiska, " +
        "to'lovlar, mulk hujjati.",
      lawRefs: [{ code: "FK2", article: "1153" }],
    },
    {
      heading: "Meros ulushlarining ortishi",
      text:
        "Merosxo'rlardan biri tushib " +
        "qolsa uning ulushi qayerga " +
        "ketadi?\n\n" +
        "Qoida: bunday ulush qolgan " +
        "merosxo'rlar o'rtasida " +
        "taqsimlanadi va ularning " +
        "ulushlari ORTADI.\n\n" +
        "Merosxo'r tushib qolishi " +
        "mumkin bo'lgan holatlar: " +
        "merosni qabul qilmasa; voz " +
        "kechsa (muayyan shaxs " +
        "foydasiga emas); noloyiq deb " +
        "topilsa; meros ochilgunga " +
        "qadar vafot etsa (taqdim " +
        "qilish huquqi " +
        "qo'llanilmasa).\n\n" +
        "⚠️ ISTISNO: agar voz kechish " +
        "MUAYYAN SHAXS foydasiga " +
        "bo'lgan bo'lsa, ulush aynan " +
        "o'sha shaxsga o'tadi — " +
        "qolganlar o'rtasida " +
        "taqsimlanmaydi.",
      example:
        "Uch merosxo'rdan biri merosdan " +
        "voz kechdi (hech kim " +
        "foydasiga emas). Uning ulushi " +
        "qolgan ikkalasi o'rtasida " +
        "teng taqsimlanadi.",
      keyPoints: [
        "Tushib qolgan merosxo'rning ulushi qolganlarga taqsimlanadi",
        "Bu ularning ulushlarini oshiradi",
        "Taqsimot mutanosib amalga oshiriladi",
        "Muayyan shaxs foydasiga voz kechishda ulush o'shanga o'tadi",
      ],
      warning:
        "Voz kechayotganda \"kim " +
        "foydasiga\" degan savolga " +
        "aniq javob bering — natija " +
        "butunlay boshqacha bo'ladi.",
      lawRefs: [{ code: "FK2", article: "1154" }],
    },
    {
      heading: "Taqsimotdagi amaliy muammolar",
      text:
        "Taqsimotda eng ko'p " +
        "uchraydigan qiyinchiliklar " +
        "va ularni hal qilish " +
        "yo'llari.\n\n" +
        "(1) MOL-MULK BO'LINMAYDI " +
        "(kvartira, avtomobil) — " +
        "yechim: biri oladi va " +
        "boshqalarga kompensatsiya " +
        "to'laydi.\n\n" +
        "(2) QIYMAT BO'YICHA NIZO — " +
        "yechim: mustaqil baholash " +
        "o'tkazish.\n\n" +
        "(3) BIR MEROSXO'R " +
        "KELISHMAYDI — yechim: sud " +
        "tartibida taqsimlash.\n\n" +
        "(4) MOL-MULK TURLI " +
        "JOYLARDA — meros ishi " +
        "baribir bitta joyda " +
        "yuritiladi.\n\n" +
        "⚠️ Umumiy tavsiya: " +
        "KELISHUVGA harakat qiling. " +
        "Sud tartibida taqsimlash " +
        "yillarga cho'zilishi, " +
        "qimmatga tushishi va " +
        "oilaviy munosabatlarni " +
        "butunlay buzishi mumkin.",
      example:
        "Merosxo'rlar kvartira qiymati " +
        "bo'yicha kelisha olmadi. " +
        "Mustaqil baholash o'tkazilib " +
        "masala kelishuv bilan hal " +
        "qilindi.",
      keyPoints: [
        "Bo'linmaydigan mol-mulk kompensatsiya bilan hal qilinadi",
        "Qiymat nizosida mustaqil baholash yordam beradi",
        "Kelishuv bo'lmasa sud tartibida taqsimlanadi",
        "Kelishuv har doim tez va arzonroq",
      ],
      warning:
        "Sud tartibidagi taqsimot " +
        "yillarga cho'zilishi va " +
        "oilaviy munosabatlarni " +
        "buzishi mumkin.",
      lawRefs: [
        { code: "FK2", article: "1150" },
        { code: "FK2", article: "1153" },
      ],
    },
  ],
};

module.exports = { LESSON };
