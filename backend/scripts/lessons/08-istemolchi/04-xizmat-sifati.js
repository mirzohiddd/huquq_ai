"use strict";
/** ISTE'MOLCHI MODULI — 4-DARS: ISH VA XIZMAT SIFATI.
 *  IHQ 19, 20, 22 + FK2 647–650, 706.
 *  ⚠️ Pudrat shartnomasining UMUMIY qoidalari (FK2 631–646) shartnomalar
 *  modulida qoladi — bu yerda faqat SIFAT va JAVOBGARLIK moddalari. */

const LESSON = {
  key: "xizmat-sifati",
  category: "consumer",
  level: "mid",
  order: 8040,
  title: "Ish va xizmat sifati: talablar va javobgarlik",
  desc:
    "Ta'mir, quruvchilik, xizmat ko'rsatish sifatsiz bo'lsa nima " +
    "qilish kerak, zarar va ma'naviy zarar qanday qoplanadi.",
  objectives: [
    "Xizmat shartnomasi buzilganda huquqlaringizni bilasiz",
    "Ishning sifatiga qo'yiladigan talablarni bilasiz",
    "Ishga kafolat qoidalarini bilasiz",
    "Zarar va ma'naviy zararni qoplash yo'lini bilasiz",
  ],
  practicalSteps: [
    "Xizmatni og'zaki emas, YOZMA shartnoma bilan buyurtma qiling",
    "Ish qabul qilinganda kamchiliklarni dalolatnomaga yozdiring",
    "Nuqsonni suratga oling va ekspertiza imkonini saqlang",
    "Zararni hujjat bilan hisoblab chiqing",
  ],
  sections: [
    {
      heading: "Xizmat shartnomasi shartlari buzilganda",
      text:
        "Tovar bilan xizmat orasidagi " +
        "farq muhim: xizmatni " +
        "\"qaytarib bo'lmaydi\", " +
        "shuning uchun himoya " +
        "mexanizmi boshqacha " +
        "quriladi.\n\n" +
        "Ishni bajarish yoki xizmat " +
        "ko'rsatish shartnomasi " +
        "shartlari buzilganda " +
        "iste'molchining odatiy " +
        "huquqlari: kamchiliklarni " +
        "BEPUL bartaraf etishni talab " +
        "qilish; ish narxini " +
        "mutanosib KAMAYTIRISHNI " +
        "talab qilish; ishni QAYTA " +
        "bajarishni talab qilish; " +
        "shartnomani BEKOR qilib " +
        "to'langan pulni qaytarib " +
        "olish.\n\n" +
        "⚠️ Bu yerda ham TANLOV " +
        "iste'molchida.",
      example:
        "Kvartira ta'miri sifatsiz " +
        "bajarildi. Buyurtmachi " +
        "qayta bajarishni ham, " +
        "narxni kamaytirishni ham " +
        "talab qilishi mumkin — " +
        "tanlov unda.",
      keyPoints: [
        "Xizmat sifatsiz bo'lsa alohida talablar to'plami ishlaydi",
        "Bepul tuzatish, qayta bajarish yoki narxni kamaytirish",
        "Shartnomani bekor qilib pulni qaytarish mumkin",
        "Tanlov iste'molchida qoladi",
      ],
      warning:
        "Og'zaki kelishilgan xizmatda " +
        "\"nima va'da qilingani\"ni " +
        "isbotlash deyarli imkonsiz.",
      lawRefs: [{ code: "IHQ", article: "19" }],
    },
    {
      heading: "Ishning sifatiga qo'yiladigan talablar",
      text:
        "Bajarilgan ish qanday bo'lsa " +
        "\"sifatli\" hisoblanadi?\n\n" +
        "Umumiy qoida: ish sifati " +
        "SHARTNOMA shartlariga javob " +
        "berishi kerak. Shartnomada " +
        "sifat shartlari " +
        "belgilanmagan bo'lsa — ish " +
        "odatda shunday ishlarga " +
        "qo'yiladigan talablarga mos " +
        "bo'lishi lozim.\n\n" +
        "Bundan tashqari ish natijasi " +
        "shartnomada nazarda tutilgan " +
        "yoki odatiy MAQSADDA " +
        "foydalanishga yaroqli " +
        "bo'lishi kerak.\n\n" +
        "⚠️ Amaliy xulosa: shartnomada " +
        "sifat talablarini qanchalik " +
        "aniq yozsangiz, keyinchalik " +
        "shunchalik oson himoyalanasiz " +
        "— material turi, ish hajmi, " +
        "muddat va natija tavsifi " +
        "yozilishi kerak.",
      example:
        "Shartnomada faqat \"ta'mir " +
        "qilinadi\" deb yozilgan. " +
        "Sifat bo'yicha nizoda " +
        "nimaga tayanish noaniq " +
        "bo'lib qoladi.",
      keyPoints: [
        "Sifat avvalo shartnoma shartlari bilan belgilanadi",
        "Shart yo'q bo'lsa odatiy talablar qo'llaniladi",
        "Natija maqsadga yaroqli bo'lishi kerak",
        "Aniq yozilgan shartnoma himoyaning asosi",
      ],
      warning:
        "\"Yaxshi qilib bering\" " +
        "degan shart huquqiy " +
        "jihatdan hech narsani " +
        "anglatmaydi.",
      lawRefs: [{ code: "FK2", article: "647" }],
    },
    {
      heading: "Ishning sifatiga kafolat berish",
      text:
        "Tovarda bo'lgani kabi, " +
        "bajarilgan ISHGA ham kafolat " +
        "berilishi mumkin.\n\n" +
        "Kafolat qonun yoki shartnoma " +
        "bilan nazarda tutilgan " +
        "bo'lsa, ish natijasi kafolat " +
        "muddati davomida sifat " +
        "talablariga javob berishi " +
        "kerak.\n\n" +
        "⚠️ Bu ta'mir, qurilish va " +
        "montaj ishlarida ayniqsa " +
        "muhim: nuqson ko'pincha " +
        "darhol emas, bir necha " +
        "oydan keyin ko'rinadi " +
        "(devor namlanadi, plitka " +
        "ko'chadi, jihoz " +
        "buziladi).\n\n" +
        "Kafolatsiz bunday nuqsonlarni " +
        "ijrochiga bog'lash ancha " +
        "qiyin.",
      example:
        "Ta'mirdan uch oy keyin " +
        "plitka ko'cha boshladi. " +
        "Kafolat berilgan bo'lsa, " +
        "ijrochi uni bepul " +
        "tuzatishi kerak.",
      keyPoints: [
        "Ishga ham kafolat berilishi mumkin",
        "Kafolat qonun yoki shartnomada nazarda tutiladi",
        "Ta'mir va qurilishda kafolat ayniqsa muhim",
        "Kechroq chiqadigan nuqsonlar shu bilan qoplanadi",
      ],
      warning:
        "Shartnomada ishga kafolat " +
        "muddati yozilmagan bo'lsa — " +
        "uni qo'shishni talab qiling.",
      lawRefs: [{ code: "FK2", article: "648" }],
    },
    {
      heading: "Ish kafolati muddatini hisoblash",
      text:
        "Ish kafolatining boshlanish " +
        "nuqtasi tovardagidan " +
        "farq qiladi.\n\n" +
        "Umumiy qoida: kafolat muddati " +
        "ish natijasi buyurtmachi " +
        "tomonidan QABUL QILINGAN " +
        "paytdan boshlanadi.\n\n" +
        "⚠️ Bundan kelib chiqadigan " +
        "amaliy xulosa: ishni QABUL " +
        "QILISH sanasi " +
        "hujjatlashtirilishi kerak. " +
        "Aks holda kafolat qachon " +
        "boshlangani noaniq " +
        "qoladi.\n\n" +
        "Ish natijasidan buyurtmachiga " +
        "bog'liq bo'lmagan sabablarga " +
        "ko'ra foydalanib bo'lmagan " +
        "davr kafolat muddatiga " +
        "kirmaydi.",
      example:
        "Ta'mir tugagach hech qanday " +
        "hujjat imzolanmadi. Nizoda " +
        "kafolat qachondan " +
        "boshlangani isbotlanmaydi.",
      keyPoints: [
        "Ish kafolati qabul qilingan paytdan boshlanadi",
        "Qabul sanasi hujjatlashtirilishi kerak",
        "Foydalanib bo'lmagan davr kafolatga kirmaydi",
        "Hujjatsiz kafolat amalda ishlamaydi",
      ],
      warning:
        "Ishni qabul qilish " +
        "dalolatnomasini imzolang " +
        "va sanasini yozdiring.",
      lawRefs: [{ code: "FK2", article: "649" }],
    },
    {
      heading: "Ijrochining sifatsiz ish uchun javobgarligi",
      text:
        "Ish sifati lozim darajada " +
        "bo'lmasa pudratchi (ijrochi) " +
        "javobgar bo'ladi.\n\n" +
        "Buyurtmachining odatiy " +
        "talablari: kamchiliklarni " +
        "oqilona muddatda BEPUL " +
        "bartaraf etish; narxni " +
        "mutanosib kamaytirish; " +
        "kamchiliklarni tuzatish " +
        "uchun sarflagan xarajatlarni " +
        "qoplash.\n\n" +
        "⚠️ Kamchiliklar JIDDIY yoki " +
        "bartaraf etib bo'lmaydigan " +
        "bo'lsa, buyurtmachi " +
        "shartnomani BEKOR qilib " +
        "zararni qoplashni talab " +
        "qilishi mumkin.\n\n" +
        "Ya'ni engil va jiddiy nuqson " +
        "uchun oqibatlar bir xil " +
        "emas — jiddiy nuqson " +
        "shartnomani butunlay " +
        "bekor qilish yo'lini " +
        "ochadi.",
      example:
        "Qurilish ishi qoidalarni " +
        "buzib bajarildi va binoning " +
        "xavfsizligiga ta'sir qiladi. " +
        "Bu — jiddiy kamchilik.",
      keyPoints: [
        "Sifatsiz ish uchun ijrochi javobgar",
        "Bepul tuzatish, narxni kamaytirish yoki xarajatni qoplash",
        "Jiddiy kamchilikda shartnoma bekor qilinadi",
        "Zararni qoplash ham talab qilinishi mumkin",
      ],
      warning:
        "Kamchilikni o'zingiz " +
        "tuzatishdan oldin uni qayd " +
        "eting — aks holda \"nuqson " +
        "bor edi\"ni isbotlay " +
        "olmaysiz.",
      lawRefs: [{ code: "FK2", article: "650" }],
    },
    {
      heading: "Xizmat ko'rsatishda ijrochining javobgarligi",
      text:
        "Haq evaziga xizmat ko'rsatish " +
        "shartnomasi pudratdan farq " +
        "qiladi: bu yerda MODDIY " +
        "natija emas, jarayonning " +
        "o'zi muhim (ta'lim, tibbiy, " +
        "maslahat, transport " +
        "xizmatlari).\n\n" +
        "Shartnomani buzganlik uchun " +
        "ijrochining javobgarligi " +
        "alohida moddada " +
        "belgilangan.\n\n" +
        "⚠️ MUHIM NUQTA: xizmat " +
        "ko'rsatilmagan yoki lozim " +
        "darajada ko'rsatilmagan " +
        "bo'lsa, iste'molchi " +
        "to'langan pulni qaytarib " +
        "olish va zararni qoplashni " +
        "talab qilish huquqiga " +
        "ega.\n\n" +
        "Xizmat sohasida dalil " +
        "to'plash qiyinroq — shuning " +
        "uchun shartnoma, to'lov " +
        "hujjati va yozishmalar " +
        "ayniqsa qadrli.",
      example:
        "Kurs uchun to'liq to'lov " +
        "qilindi, lekin darslar " +
        "va'da qilingan hajmda " +
        "o'tilmadi. Pulni qaytarish " +
        "talab qilinishi mumkin.",
      keyPoints: [
        "Xizmatda natija emas, jarayon muhim",
        "Ijrochining javobgarligi alohida belgilangan",
        "To'lovni qaytarish va zararni qoplash mumkin",
        "Xizmat sohasida hujjat va yozishma hal qiluvchi",
      ],
      warning:
        "Xizmat rejasini (dars soni, " +
        "muddat, hajm) shartnomaga " +
        "yozdiring.",
      lawRefs: [{ code: "FK2", article: "706" }],
    },
    {
      heading: "Nuqsonlar tufayli yetkazilgan zarar",
      text:
        "Nuqsonli tovar (ish, xizmat) " +
        "shunchaki pulni bekor " +
        "sarflash emas — u ZARAR " +
        "keltirishi mumkin.\n\n" +
        "Qonun tovar (ish, xizmat) " +
        "nuqsonlari tufayli " +
        "yetkazilgan zarar uchun " +
        "MULKIY javobgarlikni " +
        "belgilaydi.\n\n" +
        "Zarar hayotga, sog'liqqa yoki " +
        "mol-mulkka yetkazilishi " +
        "mumkin va u TO'LIQ hajmda " +
        "qoplanishi kerak.\n\n" +
        "⚠️ ENG MUHIM QOIDA: zararni " +
        "qoplash talabi jabrlanuvchi " +
        "sotuvchi bilan SHARTNOMADA " +
        "bo'lishiga bog'liq emas. " +
        "Ya'ni tovarni sotib olmagan, " +
        "lekin undan zarar ko'rgan " +
        "shaxs ham talab qo'yishi " +
        "mumkin.",
      example:
        "Nosoz elektr jihoz yong'in " +
        "keltirib chiqardi va " +
        "qo'shni kvartiraga ham zarar " +
        "yetdi. Qo'shni ham talab " +
        "qo'yishi mumkin.",
      keyPoints: [
        "Nuqson tufayli yetkazilgan zarar to'liq qoplanadi",
        "Hayot, sog'liq va mol-mulk zarari qamraladi",
        "Talab shartnoma bo'lishiga bog'liq emas",
        "Zarar ko'rgan uchinchi shaxs ham himoyalanadi",
      ],
      warning:
        "Zararni hujjat bilan " +
        "hisoblang: baholash, " +
        "cheklar, tibbiy xulosa.",
      lawRefs: [{ code: "IHQ", article: "20" }],
    },
    {
      heading: "Ma'naviy zarar uchun haq to'lash",
      text:
        "Iste'molchi huquqi buzilganda " +
        "faqat pul yo'qotilmaydi — " +
        "vaqt, asab va ishonch ham " +
        "yo'qoladi. Qonun buni " +
        "e'tirof etadi.\n\n" +
        "Iste'molchi MA'NAVIY zarar " +
        "uchun haq to'lashni talab " +
        "qilish huquqiga ega.\n\n" +
        "⚠️ MUHIM XUSUSIYATLAR: " +
        "ma'naviy zarar mulkiy " +
        "zarardan MUSTAQIL " +
        "undiriladi — ya'ni ikkalasi " +
        "birga talab qilinishi " +
        "mumkin. Uning miqdorini " +
        "SUD belgilaydi va u tovar " +
        "narxiga bog'liq emas.\n\n" +
        "Ma'naviy zarar " +
        "huquqbuzarlikning " +
        "og'irligi, oqibatlari va " +
        "jabrlanuvchining " +
        "iztiroblari hisobga olinib " +
        "aniqlanadi.",
      example:
        "Sifatsiz tibbiy xizmat " +
        "tufayli bemor uzoq vaqt " +
        "azob chekdi. Davolanish " +
        "xarajatlari bilan birga " +
        "ma'naviy zarar ham talab " +
        "qilinadi.",
      keyPoints: [
        "Ma'naviy zarar alohida talab qilinadi",
        "U mulkiy zarardan mustaqil undiriladi",
        "Miqdorini sud belgilaydi",
        "Tovar narxi bilan chegaralanmaydi",
      ],
      warning:
        "Da'vo arizasida ma'naviy " +
        "zararni ALOHIDA band " +
        "sifatida yozing — aks " +
        "holda sud uni ko'rib " +
        "chiqmaydi.",
      lawRefs: [{ code: "IHQ", article: "22" }],
    },
  ],
};

module.exports = { LESSON };
