"use strict";
/**
 * ═══════════════════════════════════════════════════════════════════
 *  DARSLAR KONTENTI — kengaytirilgan, "haqiqiy dars" darajasida
 * ═══════════════════════════════════════════════════════════════════
 *
 * NIMA UCHUN QAYTA YOZILDI
 * Avvalgi darslar o'rtacha 1618 belgi edi (3 ta qisqa bo'lim) — bu
 * ~2 daqiqalik o'qish, ya'ni dars emas, qisqacha eslatma. Ustiga dars
 * sahifasidagi "maslahat" va "asosiy fikrlar" bloklari matnni
 * JUMLALARGA BO'LIB yasalardi va natijada matnning o'zini takrorlardi.
 *
 * QANDAY YOZILGAN
 * Har bir bo'lim to'rt qismdan iborat:
 *   · tushuntirish — sodda til, huquqiy jargonsiz
 *   · misol        — kundalik hayotdan aniq vaziyat (tushunish kaliti)
 *   · keyPoints    — bo'limdan chiqadigan xulosalar
 *   · warning      — ko'p uchraydigan xato
 * Dars boshida `objectives` (nima o'rganasiz), oxirida
 * `practicalSteps` (nima qilish kerak) turadi.
 *
 * ⚠️ HUQUQIY ANIQLIK QOIDASI
 * Matnda ANIQ MODDA RAQAMI, MUDDAT yoki SUMMA ATAYLAB yozilmagan.
 * Sabab: qonun tahriri o'zgarsa dars eskirib qoladi va foydalanuvchini
 * chalg'itadi. Buning o'rniga barqaror TAMOYILLAR va JARAYON
 * tushuntiriladi, aniq raqam kerak bo'lganda foydalanuvchi Qonunlar
 * kutubxonasiga yoki AI yordamchiga yo'naltiriladi (dars oxiridagi
 * amaliy qadamlarda shu yozilgan).
 */

const LESSONS = [
  /* ═══════════════════════════════════════════════════════════════
     1. MEHNAT HUQUQI
     ═══════════════════════════════════════════════════════════════ */
  {
    match: /mehnat/i,
    order: 10,
    desc:
      "Ishga kirishdan tortib ishdan bo'shashgacha — 50 ta " +
      "mavzu ketma-ket, sodda tilda.",
    objectives: [
      "Mehnat shartnomasi qanday tuzilishini va nimalarga e'tibor berish kerakligini bilasiz",
      "Ish vaqti, ta'til va dam olish huquqlaringizni aniq ajrata olasiz",
      "Ish haqi, ushlab qolish va kompensatsiya qoidalarini tushunasiz",
      "Ishdan bo'shatish qonuniymi yoki yo'qligini baholay olasiz va nima qilishni bilasiz",
    ],
    practicalSteps: [
      "Mehnat shartnomangizning O'Z NUSXANGIZNI oling va saqlang",
      "Ish vaqtingizni va ortiqcha ishlagan soatlaringizni o'zingiz ham yozib boring",
      "Har qanday nizoda avval YOZMA murojaat qiling va qabul belgisini oling",
      "Aniq muddat va foiz kerak bo'lsa mavzudagi qonun iqtibosiga yoki Qonunlar kutubxonasiga qarang",
    ],
    /* ⚠️ 50 ta mavzu ALOHIDA modulda — `lessonContent/mehnat/`.
       Ular bu yerga ko'chirilsa fayl bir necha ming qatorga
       cho'zilib, qolgan darslar orasida yo'qolib ketardi. */
    sections: require("./lessonContent/mehnat").SECTIONS,
  },

  /* ═══════════════════════════════════════════════════════════════
     2. OILA HUQUQI
     ═══════════════════════════════════════════════════════════════ */
  {
    match: /oila/i,
    order: 20,
    desc:
      "Nikoh yoshidan tortib ajrimdan keyingi aliment va mulk " +
      "bo'lishigacha — 50 ta mavzu ketma-ket, sodda tilda.",
    objectives: [
      "Necha yoshdan turmush qurish mumkinligini va nikohga monelik qiladigan holatlarni bilasiz",
      "Nikohdan keyin qanday huquqlar paydo bo'lishini va mulk qanday taqsimlanishini tushunasiz",
      "Bolaning huquqlarini hamda ota-onalik majburiyatlarini ajrata olasiz",
      "Ajrashish qanday kechishini va ajrimdan keyin bola, aliment, mulk masalalari qanday hal qilinishini bilasiz",
    ],
    practicalSteps: [
      "Nikoh guvohnomasi va muhim hujjatlar nusxasini alohida joyda saqlang",
      "Nikoh davrida olingan yirik mulk hujjatlarini (kvitansiya, shartnoma) yig'ib boring",
      "Aliment va mulk bo'yicha kelishuvni notarial rasmiylashtiring — og'zaki kelishuv ijroga berilmaydi",
      "Aniq yosh, muddat va foiz kerak bo'lsa har bir mavzudagi qonun iqtibosiga yoki Qonunlar kutubxonasiga qarang",
    ],
    /* ⚠️ 50 ta mavzu ALOHIDA modulda — `lessonContent/oila/`.
       Ular bu yerga ko'chirilsa fayl ~1700 qatorga cho'zilib,
       qolgan 5 ta dars orasida yo'qolib ketardi. */
    sections: require("./lessonContent/oila").SECTIONS,
  },

  /* ═══════════════════════════════════════════════════════════════
     3. ISTE'MOLCHI HUQUQLARI
     ═══════════════════════════════════════════════════════════════ */
  {
    match: /iste|tovar|xarid/i,
    order: 30,
    desc:
      "Xariddan tortib sud orqali himoyagacha — 50 ta mavzu " +
      "ketma-ket, sodda tilda.",
    objectives: [
      "Iste'molchi sifatida qanday huquqlaringiz borligini aniq bilasiz",
      "Kafolat va yaroqlilik muddatlarining farqini tushunasiz",
      "Nuqsonli tovar bo'yicha qaysi talabni qo'yishni o'zingiz tanlay olasiz",
      "Yozma da'vo yozishni va huquqingizni bosqichma-bosqich himoya qilishni bilasiz",
    ],
    practicalSteps: [
      "Chek va kafolat talonchasini suratga oling — issiqlik qog'ozidagi yozuv o'chib ketadi",
      "Nuqson aniqlaganingiz zahoti YOZMA da'vo bering va qabul belgisini oling",
      "Talabingizni aniq va bitta qilib yozing: masalan pulni qaytarishni so'rash",
      "Natija bo'lmasa Iste'molchilar huquqlarini himoya qilish agentligiga murojaat qiling",
    ],
    /* ⚠️ 50 ta mavzu ALOHIDA modulda — `lessonContent/istemolchi/`.
       Ular bu yerga ko'chirilsa fayl bir necha ming qatorga
       cho'zilib, qolgan darslar orasida yo'qolib ketardi. */
    sections: require("./lessonContent/istemolchi").SECTIONS,
  },

  /* ═══════════════════════════════════════════════════════════════
     4. MEROS HUQUQI
     ═══════════════════════════════════════════════════════════════ */
  {
    match: /meros/i,
    order: 40,
    desc:
      "Meros ochilishidan tortib mulkni ro'yxatdan o'tkazishgacha " +
      "— 50 ta mavzu ketma-ket, sodda tilda.",
    objectives: [
      "Meros qachon va qayerda ochilishini hamda muddatlarni bilasiz",
      "Vasiyatnoma qanday tuzilishini va uning chegaralarini tushunasiz",
      "Qonun bo'yicha vorislik navbatlarini va majburiy ulushni ajrata olasiz",
      "Merosni qabul qilish, voz kechish va qarzlar masalasini to'g'ri hal qila olasiz",
    ],
    practicalSteps: [
      "Vafot guvohnomasini olgan zahoti notariusga murojaat qiling — muddat shu kundan ketadi",
      "Merosni qabul qilishdan OLDIN meros tarkibini va qarzlarni aniqlang",
      "Meros huquqi guvohnomasini olgach mulkni davlat ro'yxatidan ham o'tkazing",
      "Vasiyatnoma tuzayotgan bo'lsangiz majburiy ulushni hisobga oling",
    ],
    /* ⚠️ 50 ta mavzu ALOHIDA modulda — `lessonContent/meros/`.
       Ular bu yerga ko'chirilsa fayl bir necha ming qatorga
       cho'zilib, qolgan darslar orasida yo'qolib ketardi. */
    sections: require("./lessonContent/meros").SECTIONS,
  },

  /* ═══════════════════════════════════════════════════════════════
     5. YER VA KO'CHMAS MULK
     ═══════════════════════════════════════════════════════════════ */
  {
    match: /yer|ko.?chmas/i,
    order: 50,
    desc:
      "Yer toifasidan tortib xavfsiz bitim tuzishgacha — 50 ta " +
      "mavzu ketma-ket, sodda tilda.",
    objectives: [
      "Yer toifalari va ruxsat etilgan foydalanish turlarini ajrata olasiz",
      "Yerga bo'lgan qaysi huquq turi berilganini hujjatdan aniqlay olasiz",
      "Turar joy mulkdorining huquq va majburiyatlarini bilasiz",
      "Ko'chmas mulk sotib olishdan oldin nimani tekshirish kerakligini bilasiz",
    ],
    practicalSteps: [
      "Bitimdan oldin reyestrdan ko'chirma va kadastr ma'lumotini oling",
      "Obyektni JOYIDA ko'ring: chegaralar va amaldagi holat hujjatga mos kelishi kerak",
      "Kim ro'yxatda turganini, turmush o'rtog'i roziligini va qarzlarni tekshiring",
      "Bitimdan keyin huquqni davlat ro'yxatidan o'tkazishni kechiktirmang",
    ],
    /* ⚠️ 50 ta mavzu ALOHIDA modulda — `lessonContent/yer/`.
       Ular bu yerga ko'chirilsa fayl bir necha ming qatorga
       cho'zilib, qolgan darslar orasida yo'qolib ketardi. */
    sections: require("./lessonContent/yer").SECTIONS,
  },

  /* ═══════════════════════════════════════════════════════════════
     6. JINOIY JAVOBGARLIK ASOSLARI
     ═══════════════════════════════════════════════════════════════ */
  {
    match: /jinoi|jinoy/i,
    order: 60,
    desc:
      "Jinoyat tushunchasidan tortib o'z huquqingizni himoya " +
      "qilishgacha — 50 ta mavzu ketma-ket, sodda tilda.",
    objectives: [
      "Qilmish qachon jinoyat hisoblanishini va ayb nima ekanini tushunasiz",
      "Zaruriy mudofaa va javobgarlikni istisno qiladigan holatlarni bilasiz",
      "Jazo turlari, yengillashtiruvchi holatlar va ozod qilish asoslarini ajrata olasiz",
      "Jabrlanuvchi yoki ayblanuvchi sifatida qanday huquqlaringiz borligini bilasiz",
    ],
    practicalSteps: [
      "Himoyachi kelgunga qadar ko'rsatma bermang — bu sizning huquqingiz",
      "Har qanday hujjatni imzolashdan OLDIN to'liq o'qing, kerak bo'lsa e'tiroz yozing",
      "Jarohat yoki zararni darhol tibbiy hujjat bilan qayd ettiring",
      "Arizani ikki nusxada bering va qabul belgisini oling; muddatlarni nazorat qiling",
    ],
    /* ⚠️ 50 ta mavzu ALOHIDA modulda — `lessonContent/jinoyat/`.
       Ular bu yerga ko'chirilsa fayl bir necha ming qatorga
       cho'zilib, qolgan darslar orasida yo'qolib ketardi. */
    sections: require("./lessonContent/jinoyat").SECTIONS,
  },
];

module.exports = { LESSONS };
