"use strict";
/**
 * MODUL 13 — MAXSUS SOHALAR (6 dars)
 *
 * Manbalar: Bojxona kodeksi (BJK), Havo kodeksi (HK), Fuqarolik
 * kodeksi 2-qism (tashish shartnomalari).
 *
 * Bu modul kundalik hayotda kamroq uchraydigan, lekin kerak
 * bo'lganda darhol javob talab qiladigan sohalarni qamraydi:
 * chegaradan o'tish, aviatashish, yuk tashish.
 */

const LESSONS = [
  /* ═══════════════════════════════════════════════════════════════
     1. Bojxona qoidalari  (MAVJUD KALIT — kengaytirildi)
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "bojxona-qoidalari",
    category: "special",
    level: "basic",
    order: 13010,
    title: "Bojxona qoidalari: chegaradan nima olib o'tish mumkin",
    desc:
      "Jismoniy shaxslar tomonidan notijorat maqsadlarda tovar olib " +
      "o'tish, soddalashtirilgan tartib va bojxona to'lovlari.",
    objectives: [
      "Notijorat maqsadda olib o'tish nima ekanligini bilasiz",
      "Soddalashtirilgan tartib qanday ishlashini bilasiz",
      "Deklaratsiya qachon talab qilinishini bilasiz",
      "Chet ellik va O'zbekiston fuqarolari uchun farqni bilasiz",
    ],
    practicalSteps: [
      "Safardan oldin amaldagi normalarni rasmiy manbadan tekshiring",
      "Qimmatbaho buyumlar uchun xarid hujjatlarini saqlang",
      "Shubha bo'lsa, deklaratsiya to'ldiring — bu xavfsizroq yo'l",
      "Dori-darmon va maxsus tovarlar uchun alohida talablarni aniqlang",
    ],
    sections: [
      {
        heading: "Notijorat maqsadda olib o'tish",
        text:
          "Bojxona qoidalarida " +
          "asosiy farq — " +
          "tovar TIJORAT " +
          "yoki NOTIJORAT " +
          "maqsadda olib " +
          "o'tilayotganida.\n\n" +
          "Jismoniy shaxslar " +
          "tomonidan " +
          "notijorat " +
          "maqsadlarda olib " +
          "o'tiladigan " +
          "tovarlar uchun " +
          "alohida tartib " +
          "belgilangan.\n\n" +
          "«Notijorat » " +
          "degani — " +
          "shaxsiy, " +
          "oilaviy " +
          "ehtiyoj " +
          "uchun, " +
          "tadbirkorlik " +
          "faoliyati " +
          "bilan " +
          "bog'liq " +
          "bo'lmagan " +
          "holda.\n\n" +
          "Maqsadni " +
          "aniqlashda " +
          "tovarning " +
          "TURI, " +
          "MIQDORI " +
          "va " +
          "takrorlanishi " +
          "hisobga " +
          "olinadi.\n\n" +
          "Amaliy " +
          "xulosa: " +
          "bir " +
          "xil " +
          "tovarni " +
          "ko'p " +
          "miqdorda " +
          "olib " +
          "o'tish " +
          "shaxsiy " +
          "ehtiyoj " +
          "deb " +
          "baholanmasligi " +
          "mumkin.\n\n" +
          "SODDALASHTIRILGAN " +
          "TARTIB " +
          "jismoniy " +
          "shaxslar " +
          "uchun " +
          "nazarda " +
          "tutilgan " +
          "va u " +
          "rasmiylashtirishni " +
          "yengillashtiradi.\n\n" +
          "BOJXONA " +
          "TO'LOVLARI " +
          "bo'yicha " +
          "ham " +
          "alohida " +
          "qoidalar " +
          "mavjud: " +
          "belgilangan " +
          "normalar " +
          "doirasida " +
          "yengilliklar " +
          "bo'lishi " +
          "mumkin.\n\n" +
          "Chet " +
          "ellik " +
          "jismoniy " +
          "shaxslar " +
          "va " +
          "O'zbekiston " +
          "fuqarolari " +
          "uchun " +
          "qoidalar " +
          "alohida " +
          "moddalarda " +
          "belgilangan.",
        example:
          "Yo'lovchi " +
          "sovg'a " +
          "sifatida " +
          "bir " +
          "xil " +
          "tovardan " +
          "ko'p " +
          "miqdorda " +
          "olib " +
          "o'tmoqchi " +
          "bo'ldi. " +
          "Miqdor " +
          "shaxsiy " +
          "ehtiyojdan " +
          "oshsa, " +
          "bu " +
          "tijorat " +
          "partiyasi " +
          "deb " +
          "baholanishi " +
          "va " +
          "boshqa " +
          "tartib " +
          "qo'llanilishi " +
          "mumkin.",
        keyPoints: [
          "Asosiy farq — tijorat yoki notijorat maqsad",
          "Maqsadni aniqlashda tovar turi, miqdori va takrorlanishi hisobga olinadi",
          "Jismoniy shaxslar uchun soddalashtirilgan tartib mavjud",
          "Chet ellik va mahalliy fuqarolar uchun qoidalar alohida belgilangan",
        ],
        warning:
          "Normalar " +
          "va " +
          "ro'yxatlar " +
          "o'zgarib " +
          "turadi. " +
          "Safardan " +
          "oldin " +
          "amaldagi " +
          "qoidalarni " +
          "rasmiy " +
          "manbadan " +
          "tekshiring.",
        lawRefs: [
          { code: "BJK", article: "155" },
          { code: "BJK", article: "156" },
          { code: "BJK", article: "157" },
          { code: "BJK", article: "158" },
          { code: "BJK", article: "160" },
        ],
      },
      {
        heading: "Deklaratsiya va javobgarlik",
        text:
          "DEKLARATSIYA — " +
          "bojxona " +
          "chegarasidan " +
          "o'tkazilayotgan " +
          "tovarlar " +
          "haqida " +
          "ma'lumot " +
          "berish.\n\n" +
          "U ba'zi " +
          "holatlarda " +
          "majburiy, " +
          "ba'zilarida " +
          "esa " +
          "ixtiyoriy " +
          "bo'lishi " +
          "mumkin.\n\n" +
          "AMALIY " +
          "QOIDA: " +
          "shubha " +
          "bo'lsa, " +
          "deklaratsiya " +
          "to'ldiring.\n\n" +
          "Sabab " +
          "sodda: " +
          "deklaratsiya " +
          "qilingan " +
          "tovar " +
          "bo'yicha " +
          "eng " +
          "yomon " +
          "holat " +
          "— " +
          "qo'shimcha " +
          "to'lov. " +
          "Deklaratsiya " +
          "qilinmagan " +
          "tovar " +
          "bo'yicha " +
          "esa " +
          "javobgarlik " +
          "masalasi " +
          "ko'tariladi.\n\n" +
          "ALOHIDA " +
          "E'TIBOR " +
          "talab " +
          "qiladigan " +
          "toifalar: " +
          "valyuta " +
          "qimmatliklari, " +
          "dori-darmonlar, " +
          "qimmatbaho " +
          "metallar " +
          "va " +
          "toshlar, " +
          "madaniy " +
          "boyliklar, " +
          "qurol " +
          "va " +
          "maxsus " +
          "vositalar.\n\n" +
          "Bu " +
          "toifalar " +
          "uchun " +
          "alohida " +
          "talablar " +
          "va " +
          "ruxsatlar " +
          "belgilanishi " +
          "mumkin.\n\n" +
          "TRANSPORT " +
          "VOSITALARI " +
          "uchun " +
          "ham " +
          "alohida " +
          "qoidalar " +
          "bor: " +
          "vaqtincha " +
          "olib " +
          "kirish " +
          "va " +
          "olib " +
          "chiqish " +
          "tartibi " +
          "belgilangan.\n\n" +
          "Amaliy " +
          "maslahat: " +
          "qimmatbaho " +
          "shaxsiy " +
          "buyumlar " +
          "(kompyuter, " +
          "kamera, " +
          "zeb-ziynat) " +
          "uchun " +
          "xarid " +
          "hujjatlarini " +
          "saqlang — " +
          "bu " +
          "ular " +
          "sizniki " +
          "ekanini " +
          "ko'rsatadi.",
        example:
          "Yo'lovchi " +
          "qimmatbaho " +
          "texnikani " +
          "olib " +
          "o'tayotib, " +
          "uni " +
          "shaxsiy " +
          "buyum " +
          "deb " +
          "hisobladi. " +
          "Xarid " +
          "hujjati " +
          "bo'lganda " +
          "uning " +
          "shaxsiy " +
          "ekanini " +
          "ko'rsatish " +
          "ancha " +
          "oson " +
          "bo'lardi.",
        keyPoints: [
          "Shubha bo'lsa — deklaratsiya to'ldirish xavfsizroq",
          "Deklaratsiya qilinmagan tovar bo'yicha javobgarlik ko'tariladi",
          "Valyuta, dori, qimmatbaho metallar uchun alohida talablar bor",
          "Qimmatbaho shaxsiy buyumlar uchun xarid hujjatini saqlang",
        ],
        warning:
          "«Bilmagan " +
          "edim» " +
          "degan " +
          "asos " +
          "bojxona " +
          "qoidalarini " +
          "buzganlik " +
          "uchun " +
          "javobgarlikdan " +
          "ozod " +
          "qilmaydi.",
        lawRefs: [
          { code: "BJK", article: "161" },
          { code: "BJK", article: "162" },
          { code: "BJK", article: "163" },
          { code: "BJK", article: "159" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     2. Bojxona rasmiylashtirish
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "bojxona-rasmiylashtirish",
    category: "special",
    level: "advanced",
    order: 13020,
    title: "Bojxona rasmiylashtirish va nazorat",
    desc:
      "Tovarlarni bojxonada rasmiylashtirish bosqichlari, nazorat " +
      "shakllari va deklarantning huquqlari.",
    objectives: [
      "Rasmiylashtirish bosqichlarini bilasiz",
      "Bojxona nazorati shakllarini bilasiz",
      "Deklarantning huquq va majburiyatlarini bilasiz",
      "Nizolarda qanday harakat qilishni bilasiz",
    ],
    practicalSteps: [
      "Import yoki eksport rejalashtirsangiz, tovar kodini oldindan aniqlang",
      "Barcha tovar hujjatlarini (invoys, shartnoma, sertifikat) tayyorlang",
      "Bojxona qarori bilan rozi bo'lmasangiz, shikoyat yo'lidan boring",
      "Murakkab holatda bojxona sohasi bo'yicha mutaxassis jalb qiling",
    ],
    sections: [
      {
        heading: "Rasmiylashtirish va nazorat",
        text:
          "BOJXONA " +
          "RASMIYLASHTIRISH " +
          "— tovarlarni " +
          "bojxona " +
          "rejimiga " +
          "joylashtirish " +
          "bilan " +
          "bog'liq " +
          "harakatlar " +
          "majmui.\n\n" +
          "Tadbirkorlik " +
          "faoliyati " +
          "yuritayotganlar " +
          "uchun " +
          "bu " +
          "jarayonni " +
          "bilish " +
          "amaliy " +
          "zarurat.\n\n" +
          "Umumiy " +
          "mantiq: " +
          "tovar " +
          "chegaradan " +
          "o'tadi, " +
          "deklaratsiya " +
          "beriladi, " +
          "hujjatlar " +
          "tekshiriladi, " +
          "to'lovlar " +
          "hisoblanadi " +
          "va " +
          "tovar " +
          "chiqariladi.\n\n" +
          "BOJXONA " +
          "NAZORATI " +
          "shakllari " +
          "belgilangan: " +
          "hujjatlarni " +
          "tekshirish, " +
          "tovarlarni " +
          "ko'rikdan " +
          "o'tkazish, " +
          "hisobni " +
          "tekshirish " +
          "va " +
          "boshqalar.\n\n" +
          "Nazorat " +
          "tovar " +
          "chiqarilgandan " +
          "keyin " +
          "ham " +
          "amalga " +
          "oshirilishi " +
          "mumkin.\n\n" +
          "Bu " +
          "muhim: " +
          "hujjatlarni " +
          "belgilangan " +
          "muddat " +
          "davomida " +
          "saqlash " +
          "kerak.\n\n" +
          "AMALIY " +
          "MASLAHATLAR:\n\n" +
          "Birinchidan, " +
          "tovar " +
          "kodini " +
          "to'g'ri " +
          "aniqlang — " +
          "to'lov " +
          "miqdori " +
          "shundan " +
          "kelib " +
          "chiqadi.\n\n" +
          "Ikkinchidan, " +
          "hujjatlar " +
          "to'plamini " +
          "oldindan " +
          "tayyorlang: " +
          "shartnoma, " +
          "invoys, " +
          "transport " +
          "hujjatlari, " +
          "kerak " +
          "bo'lsa " +
          "sertifikatlar.\n\n" +
          "Uchinchidan, " +
          "qiymatni " +
          "to'g'ri " +
          "ko'rsating: " +
          "past " +
          "ko'rsatish " +
          "keyin " +
          "jiddiy " +
          "muammo " +
          "keltiradi.",
        example:
          "Import " +
          "qiluvchi " +
          "tovar " +
          "kodini " +
          "noto'g'ri " +
          "ko'rsatdi " +
          "va " +
          "to'lov " +
          "kam " +
          "hisoblandi. " +
          "Keyingi " +
          "tekshiruvda " +
          "farq " +
          "aniqlanib, " +
          "qo'shimcha " +
          "to'lov " +
          "va " +
          "javobgarlik " +
          "masalasi " +
          "yuzaga " +
          "keldi.",
        keyPoints: [
          "Rasmiylashtirish — tovarni bojxona rejimiga joylashtirish harakatlari",
          "Nazorat shakllari qonunda belgilangan",
          "Nazorat tovar chiqarilgandan keyin ham amalga oshirilishi mumkin",
          "Tovar kodi va qiymatini to'g'ri ko'rsatish hal qiluvchi",
        ],
        warning:
          "Tovar " +
          "qiymatini " +
          "past " +
          "ko'rsatish " +
          "«tejash» " +
          "emas: " +
          "keyingi " +
          "tekshiruvda " +
          "u " +
          "aniqlanadi " +
          "va " +
          "oqibatlari " +
          "ancha " +
          "qimmat " +
          "bo'ladi.",
        lawRefs: [
          { code: "BJK", article: "252" },
          { code: "BJK", article: "253" },
          { code: "BJK", article: "254" },
          { code: "BJK", article: "166" },
        ],
      },
      {
        heading: "Huquqlar va nizolar",
        text:
          "Bojxona " +
          "munosabatlarida " +
          "ham " +
          "deklarant " +
          "huquqlarga " +
          "ega — " +
          "bu " +
          "ko'pincha " +
          "unutiladi.\n\n" +
          "Asosiy " +
          "huquqlar " +
          "qatorida: " +
          "bojxona " +
          "qoidalari " +
          "haqida " +
          "ma'lumot " +
          "olish, " +
          "hujjatlar " +
          "bilan " +
          "tanishish, " +
          "qarorlar " +
          "va " +
          "harakatlar " +
          "ustidan " +
          "shikoyat " +
          "qilish.\n\n" +
          "SHIKOYAT " +
          "yo'li " +
          "odatdagi " +
          "sxema " +
          "bo'yicha: " +
          "qaror " +
          "chiqargan " +
          "organ " +
          "yoki " +
          "yuqori " +
          "organ, " +
          "keyin " +
          "sud.\n\n" +
          "Bojxona " +
          "organi " +
          "qarori " +
          "ustidan " +
          "sudga " +
          "murojaat " +
          "qilish " +
          "ma'muriy " +
          "sud " +
          "tartibida " +
          "amalga " +
          "oshirilishi " +
          "mumkin — " +
          "chunki " +
          "bu " +
          "davlat " +
          "organi " +
          "qarori.\n\n" +
          "Bu " +
          "yerda " +
          "10-moduldagi " +
          "qoida " +
          "ishlaydi: " +
          "isbot " +
          "yuki " +
          "odatda " +
          "davlat " +
          "organida " +
          "bo'ladi.\n\n" +
          "AMALIY " +
          "STRATEGIYA:\n\n" +
          "Birinchidan, " +
          "qarorni " +
          "YOZMA " +
          "oling " +
          "va " +
          "asosini " +
          "tekshiring.\n\n" +
          "Ikkinchidan, " +
          "hisob-kitobni " +
          "o'zingiz " +
          "ham " +
          "qiling: " +
          "ko'p " +
          "nizo " +
          "aynan " +
          "hisobda " +
          "chiqadi.\n\n" +
          "Uchinchidan, " +
          "muddatlarni " +
          "kuzating.\n\n" +
          "To'rtinchidan, " +
          "murakkab " +
          "holatda " +
          "soha " +
          "mutaxassisini " +
          "jalb " +
          "qiling: " +
          "bojxona " +
          "qonunchiligi " +
          "texnik " +
          "va " +
          "tez " +
          "o'zgaruvchan.",
        example:
          "Bojxona " +
          "organi " +
          "tovar " +
          "qiymatini " +
          "qayta " +
          "belgiladi " +
          "va " +
          "qo'shimcha " +
          "to'lov " +
          "hisobladi. " +
          "Import " +
          "qiluvchi " +
          "shartnoma " +
          "va " +
          "to'lov " +
          "hujjatlari " +
          "bilan " +
          "qiymatni " +
          "asoslab, " +
          "qarorga " +
          "e'tiroz " +
          "bildirishi " +
          "mumkin.",
        keyPoints: [
          "Deklarant ma'lumot olish va shikoyat qilish huquqiga ega",
          "Shikoyat yo'li: organ → yuqori organ → sud",
          "Bojxona organi qarori ma'muriy sud tartibida ko'rilishi mumkin",
          "Hisob-kitobni mustaqil tekshirish ko'p nizoni hal qiladi",
        ],
        warning:
          "Bojxona " +
          "qonunchiligi " +
          "tez " +
          "o'zgaradi " +
          "va " +
          "texnik. " +
          "Muhim " +
          "operatsiyalarda " +
          "amaldagi " +
          "qoidalarni " +
          "har " +
          "safar " +
          "tekshiring.",
        lawRefs: [
          { code: "BJK", article: "162" },
          { code: "MSK", article: "4" },
          { code: "MSK", article: "6" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     3. Havo transporti  (MAVJUD KALIT — kengaytirildi)
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "havo-transporti",
    category: "special",
    level: "basic",
    order: 13030,
    title: "Havo transporti: yo'lovchi huquqlari",
    desc:
      "Tashish shartnomasi, chipta, kechikish va bekor qilish, " +
      "bagaj va tashuvchining javobgarligi.",
    objectives: [
      "Havo transportida tashish shartnomasini bilasiz",
      "Chipta va hujjatlarning huquqiy ahamiyatini bilasiz",
      "Reys bekor qilinganda huquqlaringizni bilasiz",
      "Bagaj bilan bog'liq masalalarni bilasiz",
    ],
    practicalSteps: [
      "Chipta va posadka talonini safardan keyin ham saqlang",
      "Kechikish yoki bekor qilishda tasdiqlovchi hujjat so'rang",
      "Bagaj yo'qolsa yoki shikastlansa, DARHOL aeroportda dalolatnoma rasmiylashtiring",
      "Da'voni belgilangan muddat ichida yozma bering",
    ],
    sections: [
      {
        heading: "Tashish shartnomasi va hujjatlar",
        text:
          "HAVO TRANSPORTIDA " +
          "TASHISH " +
          "SHARTNOMASIGA " +
          "binoan " +
          "tashuvchi " +
          "yo'lovchini " +
          "va uning " +
          "bagajini " +
          "belgilangan " +
          "manzilga " +
          "olib " +
          "borish " +
          "majburiyatini " +
          "oladi.\n\n" +
          "Bu shartnoma " +
          "chipta " +
          "sotib " +
          "olinganda " +
          "tuzilgan " +
          "hisoblanadi " +
          "— " +
          "ya'ni " +
          "chipta " +
          "shunchaki " +
          "kirish " +
          "hujjati " +
          "emas, " +
          "SHARTNOMA " +
          "dalili.\n\n" +
          "TASHISHGA " +
          "DOIR " +
          "HUJJATLAR " +
          "qonunda " +
          "belgilangan: " +
          "chipta, " +
          "qo'l " +
          "yuki " +
          "pattasi, " +
          "yuk " +
          "xati " +
          "va " +
          "boshqalar.\n\n" +
          "Amaliy " +
          "xulosa: " +
          "chipta " +
          "va " +
          "posadka " +
          "talonini " +
          "saqlang. " +
          "Ular " +
          "har " +
          "qanday " +
          "da'voning " +
          "asosi " +
          "bo'ladi.\n\n" +
          "JOY " +
          "BAND " +
          "QILIB " +
          "QO'YISH " +
          "tartibi " +
          "ham " +
          "belgilangan.\n\n" +
          "CHARTER " +
          "shartnomasi " +
          "alohida " +
          "tur: " +
          "havo " +
          "kemasini " +
          "kira " +
          "qilish.\n\n" +
          "XIZMATLAR " +
          "VA " +
          "IMTIYOZLAR: " +
          "tashuvchi " +
          "yo'lovchilarga " +
          "belgilangan " +
          "xizmatlarni " +
          "ko'rsatadi " +
          "va " +
          "ayrim " +
          "toifalar " +
          "uchun " +
          "imtiyozlar " +
          "nazarda " +
          "tutilishi " +
          "mumkin.\n\n" +
          "Tashish " +
          "qoidalari " +
          "alohida " +
          "belgilanadi " +
          "va " +
          "ular " +
          "shartnomaning " +
          "bir " +
          "qismi " +
          "hisoblanadi.",
        example:
          "Yo'lovchi " +
          "chiptani " +
          "yo'qotdi " +
          "va " +
          "keyin " +
          "kechikish " +
          "bo'yicha " +
          "da'vo " +
          "qo'ymoqchi " +
          "bo'ldi. " +
          "Shartnoma " +
          "mavjudligini " +
          "ko'rsatuvchi " +
          "hujjat " +
          "bo'lmagani " +
          "uchun " +
          "da'voni " +
          "asoslash " +
          "qiyinlashdi.",
        keyPoints: [
          "Chipta — shartnoma dalili, shunchaki kirish hujjati emas",
          "Tashishga doir hujjatlar qonunda belgilangan",
          "Chipta va posadka talonini saqlang — ular da'vo asosi",
          "Tashish qoidalari shartnomaning bir qismi hisoblanadi",
        ],
        warning:
          "Elektron " +
          "chiptada " +
          "ham " +
          "tasdiqlovchi " +
          "hujjatni " +
          "(elektron " +
          "xat, " +
          "posadka " +
          "taloni) " +
          "saqlash " +
          "kerak.",
        lawRefs: [
          { code: "HK", article: "98" },
          { code: "HK", article: "99" },
          { code: "HK", article: "100" },
          { code: "HK", article: "101" },
          { code: "HK", article: "102" },
        ],
      },
      {
        heading: "Kechikish, bekor qilish va javobgarlik",
        text:
          "Eng ko'p " +
          "uchraydigan " +
          "muammolar " +
          "— " +
          "kechikish, " +
          "bekor " +
          "qilish " +
          "va " +
          "bagaj " +
          "bilan " +
          "bog'liq " +
          "holatlar.\n\n" +
          "SHARTNOMANI " +
          "BEKOR " +
          "QILISH " +
          "ikki " +
          "tomondan " +
          "bo'lishi " +
          "mumkin.\n\n" +
          "Tashuvchi " +
          "tashabbusi " +
          "bilan " +
          "bekor " +
          "qilish " +
          "asoslari " +
          "va " +
          "oqibatlari " +
          "qonunda " +
          "belgilangan.\n\n" +
          "Yo'lovchi " +
          "tashabbusi " +
          "bilan " +
          "bekor " +
          "qilish " +
          "ham " +
          "tartibga " +
          "solingan " +
          "— " +
          "bunda " +
          "summani " +
          "qaytarish " +
          "masalasi " +
          "yuzaga " +
          "keladi.\n\n" +
          "KECHIKISH " +
          "uchun " +
          "javobgarlik " +
          "Fuqarolik " +
          "kodeksida " +
          "ham " +
          "belgilangan: " +
          "yo'lovchini " +
          "jo'natib " +
          "yuborish " +
          "kechiktirilgani " +
          "uchun " +
          "tashuvchi " +
          "javobgar " +
          "bo'ladi.\n\n" +
          "BAGAJ " +
          "bilan " +
          "bog'liq " +
          "holatlar: " +
          "yo'qolish, " +
          "shikastlanish " +
          "yoki " +
          "kechikish.\n\n" +
          "AMALDA " +
          "ENG " +
          "MUHIM " +
          "QADAM: " +
          "bagaj " +
          "yo'qolsa " +
          "yoki " +
          "shikastlansa, " +
          "aeroportdan " +
          "chiqishdan " +
          "OLDIN " +
          "dalolatnoma " +
          "rasmiylashtiring.\n\n" +
          "Aeroportdan " +
          "chiqib " +
          "ketgach " +
          "buni " +
          "isbotlash " +
          "ancha " +
          "qiyinlashadi.\n\n" +
          "YO'LOVCHI " +
          "HAYOTI " +
          "VA " +
          "SOG'LIG'IGA " +
          "shikast " +
          "yetkazilganligi " +
          "uchun " +
          "tashuvchining " +
          "javobgarligi " +
          "alohida " +
          "belgilangan.\n\n" +
          "DA'VO " +
          "tartibi: " +
          "avval " +
          "tashuvchiga " +
          "yozma " +
          "da'vo, " +
          "keyin " +
          "sud.",
        example:
          "Yo'lovchining " +
          "bagaji " +
          "shikastlangan " +
          "edi, " +
          "lekin " +
          "u " +
          "aeroportda " +
          "hech " +
          "narsa " +
          "rasmiylashtirmadi " +
          "va " +
          "uyga " +
          "ketdi. " +
          "Keyin " +
          "shikast " +
          "aynan " +
          "parvoz " +
          "davomida " +
          "yuz " +
          "berganini " +
          "isbotlash " +
          "deyarli " +
          "imkonsiz " +
          "bo'ldi.",
        keyPoints: [
          "Shartnomani bekor qilish ikki tomondan bo'lishi mumkin",
          "Kechikish uchun tashuvchining javobgarligi nazarda tutilgan",
          "Bagaj muammosida aeroportdan chiqishdan OLDIN dalolatnoma tuzing",
          "Da'vo tartibi: avval tashuvchiga yozma da'vo, keyin sud",
        ],
        warning:
          "Aviatashishda " +
          "da'vo " +
          "muddatlari " +
          "qisqa " +
          "bo'lishi " +
          "mumkin. " +
          "Muammo " +
          "yuz " +
          "berishi " +
          "bilan " +
          "darhol " +
          "harakat " +
          "qiling.",
        lawRefs: [
          { code: "HK", article: "103" },
          { code: "HK", article: "104" },
          { code: "HK", article: "105" },
          { code: "FK2", article: "720" },
          { code: "FK2", article: "725" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     4. Yo'lovchi tashish (umumiy)
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "yolovchi-tashish",
    category: "special",
    level: "basic",
    order: 13040,
    title: "Yo'lovchi tashish: umumiy qoidalar",
    desc:
      "Har qanday transportda yo'lovchi tashish: shartnoma, " +
      "muddatlar, javobgarlik va yo'lovchining huquqlari.",
    objectives: [
      "Yo'lovchi tashish shartnomasini bilasiz",
      "Eltib qo'yish muddati talabini bilasiz",
      "Tashuvchining javobgarligini bilasiz",
      "Da'vo qo'yish tartibini bilasiz",
    ],
    practicalSteps: [
      "Chipta va to'lov hujjatlarini safar davomida va keyin ham saqlang",
      "Kechikish yoki muammo bo'lsa, uni yozma qayd ettiring",
      "Jismoniy zarar yetsa, tibbiy hujjatlarni darhol rasmiylashtiring",
      "Da'voni belgilangan muddat ichida tashuvchiga yozma bering",
    ],
    sections: [
      {
        heading: "Tashish shartnomasi va muddatlar",
        text:
          "Yo'lovchi, bagaj " +
          "va yuk " +
          "tashishning " +
          "umumiy " +
          "qoidalari " +
          "Fuqarolik " +
          "kodeksida " +
          "belgilangan " +
          "va ular " +
          "barcha " +
          "transport " +
          "turlariga " +
          "tegishli.\n\n" +
          "YO'LOVCHI " +
          "TASHISH " +
          "SHARTNOMASI " +
          "bo'yicha " +
          "tashuvchi " +
          "yo'lovchini " +
          "belgilangan " +
          "manzilga " +
          "olib " +
          "borish " +
          "majburiyatini " +
          "oladi; " +
          "yo'lovchi " +
          "bagaj " +
          "topshirgan " +
          "bo'lsa, " +
          "uni " +
          "ham " +
          "yetkazish " +
          "kerak.\n\n" +
          "Yo'lovchi " +
          "esa " +
          "belgilangan " +
          "haqni " +
          "to'laydi.\n\n" +
          "ELTIB " +
          "QO'YISH " +
          "MUDDATI: " +
          "tashuvchi " +
          "yo'lovchi, " +
          "bagaj " +
          "yoki " +
          "yukni " +
          "belgilangan " +
          "manzilga " +
          "transport " +
          "qonunchiligida " +
          "nazarda " +
          "tutilgan " +
          "muddatda " +
          "yetkazishi " +
          "shart.\n\n" +
          "Bu " +
          "qoida " +
          "muhim: " +
          "kechikish " +
          "shartnoma " +
          "buzilishi " +
          "hisoblanadi.\n\n" +
          "Umumiy " +
          "qoidalar " +
          "ustiga " +
          "har " +
          "bir " +
          "transport " +
          "turi " +
          "uchun " +
          "MAXSUS " +
          "qoidalar " +
          "qo'llaniladi " +
          "(masalan " +
          "havo " +
          "transporti " +
          "uchun " +
          "Havo " +
          "kodeksi).\n\n" +
          "Shuning " +
          "uchun " +
          "aniq " +
          "holatda " +
          "ikkala " +
          "manbani " +
          "ham " +
          "tekshirish " +
          "kerak.",
        example:
          "Yo'lovchi " +
          "kechikish " +
          "tufayli " +
          "muhim " +
          "uchrashuvga " +
          "ulgurmadi. " +
          "Kechikish " +
          "shartnoma " +
          "buzilishi " +
          "hisoblanadi, " +
          "lekin " +
          "zararni " +
          "talab " +
          "qilish " +
          "uchun " +
          "uni " +
          "hujjat " +
          "bilan " +
          "asoslash " +
          "kerak " +
          "bo'ladi.",
        keyPoints: [
          "Tashishning umumiy qoidalari barcha transport turlariga tegishli",
          "Tashuvchi belgilangan muddatda yetkazishi SHART",
          "Kechikish shartnoma buzilishi hisoblanadi",
          "Har bir transport turi uchun maxsus qoidalar ham qo'llaniladi",
        ],
        warning:
          "Umumiy " +
          "qoidalar " +
          "va " +
          "maxsus " +
          "transport " +
          "qonunchiligi " +
          "birga " +
          "ishlaydi. " +
          "Faqat " +
          "bittasiga " +
          "tayanmang.",
        lawRefs: [
          { code: "FK2", article: "709" },
          { code: "FK2", article: "710" },
          { code: "FK2", article: "717" },
          { code: "HK", article: "95" },
        ],
      },
      {
        heading: "Javobgarlik va da'vo",
        text:
          "Tashuvchining " +
          "javobgarligi " +
          "bir necha " +
          "yo'nalishda " +
          "yuzaga " +
          "keladi.\n\n" +
          "BIRINCHI: " +
          "yo'lovchini " +
          "jo'natib " +
          "yuborish " +
          "kechiktirilgani " +
          "uchun.\n\n" +
          "IKKINCHI: " +
          "bagaj " +
          "yoki " +
          "yukning " +
          "yo'qolishi, " +
          "kam " +
          "chiqishi " +
          "yoki " +
          "shikastlanishi " +
          "uchun.\n\n" +
          "UCHINCHI " +
          "va eng " +
          "jiddiysi: " +
          "yo'lovchining " +
          "HAYOTI " +
          "YOKI " +
          "SOG'LIG'IGA " +
          "shikast " +
          "yetkazilganligi " +
          "uchun " +
          "javobgarlik.\n\n" +
          "Oxirgi " +
          "holatda " +
          "javobgarlik " +
          "qoidalari " +
          "qattiqroq, " +
          "chunki " +
          "transport " +
          "yuqori " +
          "xavf " +
          "manbai " +
          "hisoblanadi " +
          "va " +
          "bu " +
          "yerda " +
          "aybdan " +
          "qat'i " +
          "nazar " +
          "javobgarlik " +
          "qoidalari " +
          "qo'llanilishi " +
          "mumkin.\n\n" +
          "DA'VO " +
          "TARTIBI: " +
          "yuk " +
          "tashishdan " +
          "kelib " +
          "chiqadigan " +
          "da'vo " +
          "qo'zg'atishdan " +
          "oldin " +
          "tashuvchiga " +
          "DA'VO " +
          "(pretenziya) " +
          "taqdim " +
          "etish " +
          "talab " +
          "qilinadi.\n\n" +
          "Bu " +
          "muhim " +
          "protsessual " +
          "shart: " +
          "uni " +
          "o'tkazib " +
          "yuborish " +
          "arizaning " +
          "qaytarilishiga " +
          "olib " +
          "kelishi " +
          "mumkin.\n\n" +
          "Amaliy " +
          "ketma-ketlik: " +
          "voqeani " +
          "joyida " +
          "hujjatlashtirish " +
          "→ " +
          "tashuvchiga " +
          "yozma " +
          "da'vo " +
          "→ " +
          "javob " +
          "bo'lmasa " +
          "yoki " +
          "qoniqtirmasa " +
          "sudga " +
          "murojaat.",
        example:
          "Yuk " +
          "yetkazib " +
          "berishda " +
          "shikast " +
          "aniqlandi. " +
          "Qabul " +
          "qiluvchi " +
          "buni " +
          "hujjatda " +
          "qayd " +
          "etmasdan " +
          "qabul " +
          "qildi. " +
          "Keyin " +
          "shikast " +
          "tashish " +
          "davomida " +
          "yuz " +
          "berganini " +
          "isbotlash " +
          "qiyin " +
          "bo'ldi.",
        keyPoints: [
          "Javobgarlik: kechikish, bagaj/yuk, hayot va sog'liq",
          "Transport yuqori xavf manbai — javobgarlik qattiqroq bo'lishi mumkin",
          "Yuk tashishda sudgacha DA'VO taqdim etish talab qilinadi",
          "Bu shartni o'tkazib yuborish arizaning qaytarilishiga olib keladi",
        ],
        warning:
          "Yukni " +
          "tekshirmasdan " +
          "qabul " +
          "qilish " +
          "va " +
          "hujjatga " +
          "izoh " +
          "yozmaslik " +
          "keyingi " +
          "da'voni " +
          "deyarli " +
          "imkonsiz " +
          "qiladi.",
        lawRefs: [
          { code: "FK2", article: "720" },
          { code: "FK2", article: "724" },
          { code: "FK2", article: "725" },
          { code: "FK2", article: "993" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     5. Yuk tashish
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "yuk-tashish",
    category: "special",
    level: "mid",
    order: 13050,
    title: "Yuk tashish shartnomasi",
    desc:
      "Yuk tashish: shartnoma, hujjatlar, muddatlar va yuk " +
      "yo'qolgan yoki shikastlanganda harakat tartibi.",
    objectives: [
      "Yuk tashish shartnomasini bilasiz",
      "Tashish hujjatlarining ahamiyatini bilasiz",
      "Yuk shikastlanganda nima qilish kerakligini bilasiz",
      "Da'vo muddatlarini va tartibini bilasiz",
    ],
    practicalSteps: [
      "Yukni topshirishda va qabul qilishda holatini hujjatda qayd eting",
      "Qadoq va yuk holatini suratga oling",
      "Kamchilik topilsa, DARHOL hujjatga izoh yozing",
      "Da'voni belgilangan muddat ichida yozma bering",
    ],
    sections: [
      {
        heading: "Shartnoma va hujjatlar",
        text:
          "YUK TASHISH " +
          "SHARTNOMASI " +
          "bo'yicha " +
          "tashuvchi " +
          "yuk " +
          "jo'natuvchi " +
          "ishonib " +
          "topshirgan " +
          "yukni " +
          "belgilangan " +
          "manzilga " +
          "yetkazish " +
          "va " +
          "uni " +
          "olishga " +
          "vakolatli " +
          "shaxsga " +
          "topshirish " +
          "majburiyatini " +
          "oladi.\n\n" +
          "Uch " +
          "ishtirokchi " +
          "bor: " +
          "jo'natuvchi, " +
          "tashuvchi " +
          "va " +
          "qabul " +
          "qiluvchi.\n\n" +
          "Bu " +
          "tuzilma " +
          "muhim: " +
          "qabul " +
          "qiluvchi " +
          "shartnomani " +
          "imzolamagan " +
          "bo'lsa " +
          "ham, " +
          "unda " +
          "ma'lum " +
          "huquq " +
          "va " +
          "majburiyatlar " +
          "yuzaga " +
          "keladi.\n\n" +
          "TASHISH " +
          "HUJJATLARI " +
          "asosiy " +
          "dalil " +
          "hisoblanadi: " +
          "yuk " +
          "xati " +
          "va " +
          "boshqa " +
          "hujjatlar " +
          "yukning " +
          "turi, " +
          "miqdori " +
          "va " +
          "holatini " +
          "qayd " +
          "etadi.\n\n" +
          "AMALIY " +
          "QOIDA: " +
          "yukni " +
          "topshirishda " +
          "ham, " +
          "qabul " +
          "qilishda " +
          "ham " +
          "HOLATNI " +
          "qayd " +
          "eting.\n\n" +
          "Qadoq " +
          "buzilgan, " +
          "belgilar " +
          "yo'q " +
          "yoki " +
          "og'irlik " +
          "farq " +
          "qilsa — " +
          "bularning " +
          "hammasi " +
          "hujjatda " +
          "aks " +
          "etishi " +
          "kerak.\n\n" +
          "Suratga " +
          "olish " +
          "ham " +
          "juda " +
          "foydali " +
          "va " +
          "hech " +
          "narsa " +
          "turmaydi.\n\n" +
          "MUDDATLAR: " +
          "yuk " +
          "belgilangan " +
          "muddatda " +
          "yetkazilishi " +
          "kerak.",
        example:
          "Yuk " +
          "qadog'i " +
          "buzilgan " +
          "holda " +
          "yetib " +
          "keldi, " +
          "lekin " +
          "qabul " +
          "qiluvchi " +
          "hujjatga " +
          "«e'tirozsiz " +
          "qabul " +
          "qilindi» " +
          "deb " +
          "imzo " +
          "qo'ydi. " +
          "Keyingi " +
          "da'vo " +
          "shu " +
          "yozuv " +
          "tufayli " +
          "kuchsizlandi.",
        keyPoints: [
          "Yuk tashishda uch ishtirokchi: jo'natuvchi, tashuvchi, qabul qiluvchi",
          "Tashish hujjatlari asosiy dalil hisoblanadi",
          "Topshirish va qabul qilishda HOLATNI qayd etish shart",
          "Suratga olish oddiy va juda foydali chora",
        ],
        warning:
          "«E'tirozsiz " +
          "qabul " +
          "qilindi» " +
          "degan " +
          "yozuvga " +
          "yukni " +
          "tekshirmasdan " +
          "imzo " +
          "qo'ymang.",
        lawRefs: [
          { code: "FK2", article: "711" },
          { code: "FK2", article: "709" },
          { code: "FK2", article: "717" },
        ],
      },
      {
        heading: "Yo'qotish, shikastlanish va da'vo",
        text:
          "Yuk yo'qolgan, " +
          "kam chiqqan " +
          "yoki " +
          "shikastlangan " +
          "holatda " +
          "harakat " +
          "ketma-ketligi " +
          "hal " +
          "qiluvchi.\n\n" +
          "BIRINCHI " +
          "QADAM: " +
          "holatni " +
          "TOPSHIRISH " +
          "JOYIDA " +
          "hujjatlashtirish. " +
          "Dalolatnoma " +
          "yoki " +
          "yuk " +
          "hujjatidagi " +
          "izoh " +
          "shakli " +
          "bo'lishi " +
          "mumkin.\n\n" +
          "IKKINCHI " +
          "QADAM: " +
          "zararni " +
          "hisoblash " +
          "va " +
          "asoslash. " +
          "Yuk " +
          "qiymatini " +
          "tasdiqlovchi " +
          "hujjatlar " +
          "(invoys, " +
          "shartnoma, " +
          "hisob-faktura) " +
          "kerak " +
          "bo'ladi.\n\n" +
          "UCHINCHI " +
          "QADAM: " +
          "tashuvchiga " +
          "YOZMA " +
          "DA'VO " +
          "(pretenziya) " +
          "berish.\n\n" +
          "Qonun " +
          "tashuvchiga " +
          "nisbatan " +
          "yuk " +
          "tashishdan " +
          "kelib " +
          "chiqadigan " +
          "da'voni " +
          "qo'zg'atishdan " +
          "oldin " +
          "unga " +
          "da'vo " +
          "taqdim " +
          "etishni " +
          "talab " +
          "qiladi.\n\n" +
          "Bu " +
          "MAJBURIY " +
          "bosqich " +
          "— " +
          "uni " +
          "o'tkazib " +
          "yuborsangiz " +
          "sud " +
          "arizani " +
          "qaytarishi " +
          "mumkin.\n\n" +
          "TO'RTINCHI " +
          "QADAM: " +
          "javob " +
          "bo'lmasa " +
          "yoki " +
          "qoniqtirmasa " +
          "sudga " +
          "murojaat.\n\n" +
          "Tadbirkorlik " +
          "subyektlari " +
          "o'rtasidagi " +
          "nizo " +
          "bo'lsa, " +
          "bu " +
          "iqtisodiy " +
          "sud " +
          "tartibida " +
          "ko'riladi.\n\n" +
          "MUDDATLAR " +
          "bu " +
          "sohada " +
          "odatda " +
          "QISQA " +
          "bo'ladi, " +
          "shuning " +
          "uchun " +
          "kechiktirmaslik " +
          "kerak.",
        example:
          "Kompaniya " +
          "yuk " +
          "yo'qolgani " +
          "bo'yicha " +
          "to'g'ridan-to'g'ri " +
          "sudga " +
          "murojaat " +
          "qildi, " +
          "tashuvchiga " +
          "da'vo " +
          "yubormadi. " +
          "Sudgacha " +
          "tartib " +
          "bajarilmagani " +
          "uchun " +
          "ariza " +
          "qaytarildi " +
          "va " +
          "vaqt " +
          "yo'qotildi.",
        keyPoints: [
          "Holatni TOPSHIRISH JOYIDA hujjatlashtirish shart",
          "Zararni yuk qiymati hujjatlari bilan asoslang",
          "Tashuvchiga sudgacha DA'VO berish MAJBURIY bosqich",
          "Bu sohada muddatlar odatda qisqa",
        ],
        warning:
          "Sudgacha " +
          "da'vo " +
          "tartibini " +
          "o'tkazib " +
          "yuborish " +
          "eng " +
          "ko'p " +
          "uchraydigan " +
          "protsessual " +
          "xato. " +
          "Uni " +
          "birinchi " +
          "navbatda " +
          "bajaring.",
        lawRefs: [
          { code: "FK2", article: "724" },
          { code: "FK2", article: "711" },
          { code: "IPK", article: "149" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     6. Aviatsiya xavfsizligi
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "aviatsiya-xavfsizligi",
    category: "special",
    level: "mid",
    order: 13060,
    title: "Aviatsiya xavfsizligi va yo'lovchi majburiyatlari",
    desc:
      "Parvoz xavfsizligi choralari, tekshiruv, taqiqlar va " +
      "yo'lovchining majburiyatlari.",
    objectives: [
      "Xavfsizlik choralarining maqsadini bilasiz",
      "Tekshiruv tartibini va uning asosini bilasiz",
      "Yo'lovchining majburiyatlarini bilasiz",
      "Qoidabuzarlik oqibatlarini bilasiz",
    ],
    practicalSteps: [
      "Taqiqlangan buyumlar ro'yxatini safardan oldin tekshiring",
      "Tekshiruvda hamkorlik qiling — bu barcha yo'lovchilar xavfsizligi uchun",
      "Dori-darmon olib o'tsangiz, retsept yoki tibbiy hujjatni yoningizda saqlang",
      "Bortda ekipaj ko'rsatmalariga rioya qiling — bu huquqiy majburiyat",
    ],
    sections: [
      {
        heading: "Xavfsizlik choralari va tekshiruv",
        text:
          "Aviatsiyani " +
          "g'ayriqonuniy " +
          "aralashuvlardan " +
          "himoya " +
          "qilishning " +
          "chora-tadbirlari " +
          "qonunda " +
          "belgilangan.\n\n" +
          "Bu " +
          "choralar " +
          "yo'lovchilar " +
          "uchun " +
          "noqulaylik " +
          "emas, " +
          "balki " +
          "xavfsizlik " +
          "tizimining " +
          "bir " +
          "qismi.\n\n" +
          "YO'LOVCHILARNI, " +
          "QO'L " +
          "YUKI " +
          "VA " +
          "BAGAJNI " +
          "TEKSHIRISH " +
          "parvoz " +
          "xavfsizligini " +
          "ta'minlash " +
          "maqsadida " +
          "amalga " +
          "oshiriladi.\n\n" +
          "Bu " +
          "tekshiruvning " +
          "huquqiy " +
          "asosi " +
          "bor " +
          "va " +
          "undan " +
          "bosh " +
          "tortish " +
          "parvozga " +
          "qo'yilmaslikka " +
          "olib " +
          "kelishi " +
          "mumkin.\n\n" +
          "Amaliy " +
          "maslahat: " +
          "taqiqlangan " +
          "va " +
          "cheklangan " +
          "buyumlar " +
          "ro'yxatini " +
          "OLDINDAN " +
          "tekshiring.\n\n" +
          "Eng " +
          "ko'p " +
          "uchraydigan " +
          "muammolar: " +
          "suyuqlik " +
          "hajmi, " +
          "o'tkir " +
          "buyumlar, " +
          "batareyalar, " +
          "dori-darmon.\n\n" +
          "DORI-DARMON " +
          "olib " +
          "o'tayotganda " +
          "retsept " +
          "yoki " +
          "tibbiy " +
          "hujjatni " +
          "yoningizda " +
          "saqlash " +
          "ko'p " +
          "savolni " +
          "hal " +
          "qiladi.\n\n" +
          "AVIATSIYA " +
          "HALOKATI " +
          "(baxtsiz " +
          "hodisa)ni " +
          "tekshirish " +
          "tartibi " +
          "ham " +
          "alohida " +
          "tartibga " +
          "solingan.",
        example:
          "Yo'lovchi " +
          "retseptsiz " +
          "ko'p " +
          "miqdorda " +
          "dori " +
          "olib " +
          "o'tmoqchi " +
          "bo'ldi " +
          "va " +
          "tekshiruvda " +
          "savol " +
          "tug'ildi. " +
          "Tibbiy " +
          "hujjat " +
          "bo'lganda " +
          "bu " +
          "masala " +
          "bir " +
          "daqiqada " +
          "hal " +
          "bo'lardi.",
        keyPoints: [
          "Xavfsizlik choralari qonunda belgilangan va huquqiy asosga ega",
          "Yo'lovchi, qo'l yuki va bagaj tekshiruvi majburiy",
          "Taqiqlangan buyumlar ro'yxatini oldindan tekshiring",
          "Dori-darmon uchun tibbiy hujjatni yoningizda saqlang",
        ],
        warning:
          "Tekshiruvdan " +
          "bosh " +
          "tortish " +
          "parvozga " +
          "qo'yilmaslikka " +
          "olib " +
          "kelishi " +
          "mumkin " +
          "va " +
          "bunda " +
          "chipta " +
          "summasini " +
          "qaytarish " +
          "masalasi " +
          "murakkablashadi.",
        lawRefs: [
          { code: "HK", article: "91" },
          { code: "HK", article: "92" },
          { code: "HK", article: "90" },
        ],
      },
      {
        heading: "Yo'lovchi majburiyatlari va javobgarlik",
        text:
          "Yo'lovchining " +
          "faqat " +
          "huquqlari " +
          "emas, " +
          "MAJBURIYATLARI " +
          "ham " +
          "bor " +
          "va " +
          "ular " +
          "huquqiy " +
          "xarakterga " +
          "ega.\n\n" +
          "Asosiy " +
          "majburiyatlar: " +
          "tashish " +
          "qoidalariga " +
          "rioya " +
          "qilish, " +
          "xavfsizlik " +
          "talablarini " +
          "bajarish, " +
          "ekipaj " +
          "ko'rsatmalariga " +
          "amal " +
          "qilish, " +
          "boshqa " +
          "yo'lovchilarga " +
          "xalaqit " +
          "bermaslik.\n\n" +
          "JAVOBGARLIK: " +
          "Havo " +
          "kodeksi " +
          "talablarini " +
          "buzganlikda " +
          "aybdor " +
          "bo'lganlar " +
          "belgilangan " +
          "tartibda " +
          "javobgar " +
          "bo'ladi.\n\n" +
          "Bortda " +
          "tartibbuzarlik " +
          "jiddiy " +
          "oqibatlarga " +
          "olib " +
          "kelishi " +
          "mumkin: " +
          "ma'muriy " +
          "javobgarlik, " +
          "ayrim " +
          "holatlarda " +
          "esa " +
          "jinoiy " +
          "javobgarlik.\n\n" +
          "Bundan " +
          "tashqari " +
          "tashuvchi " +
          "shartnomani " +
          "bekor " +
          "qilishi " +
          "va " +
          "yetkazilgan " +
          "zararni " +
          "talab " +
          "qilishi " +
          "mumkin.\n\n" +
          "Amaliy " +
          "xulosa: " +
          "bortda " +
          "nizo " +
          "chiqqanda " +
          "eng " +
          "to'g'ri " +
          "yo'l " +
          "— " +
          "ko'rsatmalarga " +
          "rioya " +
          "qilish " +
          "va " +
          "e'tirozni " +
          "KEYIN, " +
          "yozma " +
          "shaklda " +
          "bildirish.\n\n" +
          "Bortdagi " +
          "bahs " +
          "hech " +
          "qachon " +
          "yo'lovchi " +
          "foydasiga " +
          "hal " +
          "bo'lmaydi " +
          "va " +
          "u " +
          "faqat " +
          "vaziyatni " +
          "og'irlashtiradi.\n\n" +
          "Xizmat " +
          "sifatiga " +
          "e'tiroz " +
          "bo'lsa, " +
          "tashuvchiga " +
          "yozma " +
          "da'vo " +
          "berish " +
          "ancha " +
          "samarali.",
        example:
          "Yo'lovchi " +
          "bortda " +
          "ekipaj " +
          "ko'rsatmasiga " +
          "rioya " +
          "qilmadi " +
          "va " +
          "nizo " +
          "kelib " +
          "chiqdi. " +
          "Bu " +
          "javobgarlikka " +
          "olib " +
          "keldi. " +
          "E'tirozni " +
          "keyin " +
          "yozma " +
          "bildirish " +
          "ancha " +
          "samarali " +
          "yo'l " +
          "edi.",
        keyPoints: [
          "Yo'lovchining majburiyatlari huquqiy xarakterga ega",
          "Ekipaj ko'rsatmalariga rioya qilish majburiy",
          "Tartibbuzarlik ma'muriy yoki jinoiy javobgarlikka olib kelishi mumkin",
          "E'tirozni bortda emas, KEYIN yozma bildirish samaraliroq",
        ],
        warning:
          "Bortdagi " +
          "tartibbuzarlik " +
          "keyingi " +
          "parvozlarga " +
          "ham " +
          "ta'sir " +
          "qilishi " +
          "mumkin. " +
          "Nizoni " +
          "huquqiy " +
          "yo'lda " +
          "hal " +
          "qiling.",
        lawRefs: [
          { code: "HK", article: "93" },
          { code: "HK", article: "94" },
          { code: "HK", article: "113" },
          { code: "HK", article: "116" },
        ],
      },
    ],
  },
];

module.exports = { LESSONS };
