"use strict";
/**
 * MODUL 11 — JINOYAT HUQUQI (11 dars)
 *
 * Manbalar: Jinoyat kodeksi (JK, 404 modda), Jinoyat-ijroiya
 * kodeksi (JIK).
 *
 * ⚠️ BU MODUL ATAYLAB TA'LIM MAQSADIDA YOZILGAN. Maqsad — fuqaro
 * o'z huquqlarini va javobgarlik chegaralarini bilishi. Darslarda
 * jazo muddatlari va jarima miqdorlari YOZILMAGAN: ular tahrirdan
 * tahrirga o'zgaradi va aniq raqam kerak bo'lganda foydalanuvchi
 * Qonunlar kutubxonasidagi amaldagi matnga yo'naltiriladi.
 *
 * Mavjud "Jinoiy javobgarlik asoslari" darsi (`lessonContentData.js`,
 * order: 60) umumiy kirish beradi.
 */

const LESSONS = [
  /* ═══════════════════════════════════════════════════════════════
     1. Jinoyat tushunchasi
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "jinoyat-tushunchasi",
    category: "criminal",
    level: "basic",
    order: 11010,
    title: "Jinoyat tushunchasi va prinsiplari",
    desc:
      "Jinoyat nima, uning belgilari, jinoyat huquqi prinsiplari " +
      "va qonunning vaqt bo'yicha amal qilishi.",
    objectives: [
      "Jinoyat tushunchasining barcha belgilarini bilasiz",
      "Jinoyat huquqi prinsiplarini bilasiz",
      "Qonunning vaqt bo'yicha amal qilishini tushunasiz",
      "Kam ahamiyatli qilmish tushunchasini bilasiz",
    ],
    practicalSteps: [
      "Ayblov qo'yilsa, qaysi modda va qaysi belgilar bo'yicha ekanini aniqlang",
      "Qilmish sodir etilgan paytdagi qonun tahririni tekshiring",
      "Ayb elementi mavjudligini baholang — bu majburiy belgi",
      "Murakkab holatda advokat yordamiga darhol murojaat qiling",
    ],
    sections: [
      {
        heading: "Jinoyatning belgilari",
        text:
          "JINOYAT — Jinoyat kodeksi bilan " +
          "taqiqlangan, aybli ijtimoiy " +
          "xavfli qilmish (harakat yoki " +
          "harakatsizlik).\n\n" +
          "Ta'rifda to'rt belgi bor va " +
          "ularning HAR BIRI bo'lishi " +
          "shart.\n\n" +
          "IJTIMOIY XAVFLILIK — qilmish " +
          "haqiqiy zarar keltiradi yoki " +
          "zarar xavfini tug'diradi.\n\n" +
          "G'AYRIHUQUQIYLIK — qilmish " +
          "aynan Jinoyat kodeksida " +
          "taqiqlangan bo'lishi kerak.\n\n" +
          "AYBLILIK — ayb bo'lmasa " +
          "jinoyat ham yo'q.\n\n" +
          "JAZOGA SAZOVORLIK — qilmish " +
          "uchun jazo nazarda " +
          "tutilgan.\n\n" +
          "PRINSIPLAR tizimi ham " +
          "muhim va ular " +
          "himoyaning asosi " +
          "bo'lib xizmat qiladi.\n\n" +
          "QONUNIYLIK — qilmishning " +
          "jinoiyligi faqat " +
          "Jinoyat kodeksi bilan " +
          "belgilanadi. " +
          "O'xshashlik bo'yicha " +
          "qo'llash mumkin " +
          "emas.\n\n" +
          "TENGLIK — jinoyat sodir " +
          "etgan shaxslar jinsi, " +
          "irqi, millati va " +
          "boshqa holatlaridan " +
          "qat'i nazar qonun " +
          "oldida teng.\n\n" +
          "INSONPARVARLIK — jazo " +
          "jismoniy azob berish " +
          "yoki inson " +
          "qadr-qimmatini " +
          "kamsitish maqsadini " +
          "ko'zlamaydi.\n\n" +
          "AYB UCHUN JAVOBGARLIK " +
          "— shaxs faqat aybi " +
          "isbotlangan qilmish " +
          "uchun javob " +
          "beradi.",
        example:
          "Shaxsga qilmish " +
          "uchun ayblov " +
          "qo'yildi, lekin " +
          "voqea uning " +
          "irodasidan " +
          "tashqarida yuz " +
          "bergan edi. " +
          "Ayb jinoyat " +
          "tarkibining " +
          "majburiy " +
          "elementi " +
          "bo'lgani uchun " +
          "bu holat " +
          "asosiy himoya " +
          "yo'nalishi " +
          "bo'ladi.",
        keyPoints: [
          "Jinoyat belgilari: ijtimoiy xavflilik, g'ayriqonuniylik, ayblilik, jazoga sazovorlik",
          "Belgilarning HAR BIRI bo'lishi shart",
          "Qilmishning jinoiyligi faqat Jinoyat kodeksi bilan belgilanadi",
          "O'xshashlik bo'yicha jinoiy javobgarlik qo'llash mumkin emas",
        ],
        warning:
          "Jinoiy ish " +
          "bo'yicha " +
          "o'z-o'zini " +
          "himoya " +
          "qilishga " +
          "urinmang. " +
          "Advokat " +
          "yordami " +
          "jarayonning " +
          "har " +
          "bosqichida " +
          "kafolatlangan.",
        lawRefs: [
          { code: "JK", article: "14" },
          { code: "JK", article: "3" },
          { code: "JK", article: "4" },
          { code: "JK", article: "5" },
          { code: "JK", article: "7" },
          { code: "JK", article: "9" },
        ],
      },
      {
        heading: "Vaqt bo'yicha amal qilish va kam ahamiyatlilik",
        text:
          "QONUNNING VAQT BO'YICHA " +
          "AMAL QILISHI — amaliy " +
          "jihatdan juda muhim " +
          "qoida.\n\n" +
          "Qilmishning jinoiyligi " +
          "va jazoga " +
          "sazovorligi u sodir " +
          "etilgan paytda " +
          "amalda bo'lgan " +
          "qonun bilan " +
          "belgilanadi.\n\n" +
          "Ya'ni bugungi " +
          "qonun kechagi " +
          "harakatingizni " +
          "jinoyatga " +
          "aylantirib " +
          "qo'ya olmaydi.\n\n" +
          "Bu Konstitutsiyadagi " +
          "kafolat bilan mos: " +
          "rasmiy e'lon " +
          "qilinmagan qonun " +
          "asosida hukm " +
          "qilish mumkin " +
          "emas.\n\n" +
          "Teskari holat ham " +
          "muhim: agar " +
          "yangi qonun " +
          "javobgarlikni " +
          "yengillashtirsa, " +
          "u odatda " +
          "orqaga qarab " +
          "ham " +
          "qo'llanilishi " +
          "mumkin.\n\n" +
          "KAM AHAMIYATLI " +
          "QILMISHLAR — " +
          "alohida " +
          "institut. " +
          "Garchi qilmish " +
          "kodeksda " +
          "nazarda " +
          "tutilgan " +
          "bo'lsa ham, " +
          "kam " +
          "ahamiyatliligi " +
          "sababli " +
          "ijtimoiy " +
          "xavfli " +
          "bo'lmasa, " +
          "u jinoyat " +
          "hisoblanmaydi.\n\n" +
          "Bu qoida " +
          "amalda " +
          "muhim: " +
          "rasmiy " +
          "belgilar " +
          "mos " +
          "kelishi " +
          "yetarli " +
          "emas — " +
          "haqiqiy " +
          "ijtimoiy " +
          "xavflilik " +
          "ham " +
          "baholanadi.\n\n" +
          "AQLI " +
          "RASOLIK " +
          "ham " +
          "majburiy " +
          "shart: " +
          "shaxs " +
          "jinoyat " +
          "sodir " +
          "etish " +
          "vaqtida " +
          "o'z " +
          "harakatlarining " +
          "ahamiyatini " +
          "anglashi " +
          "kerak.",
        example:
          "Shaxsga " +
          "qo'yilgan " +
          "ayblov " +
          "rasmiy " +
          "belgilarga " +
          "mos " +
          "keldi, " +
          "lekin " +
          "haqiqiy " +
          "zarar " +
          "juda " +
          "kichik " +
          "edi. " +
          "Kam " +
          "ahamiyatlilik " +
          "instituti " +
          "aynan " +
          "bunday " +
          "holatlar " +
          "uchun " +
          "nazarda " +
          "tutilgan.",
        keyPoints: [
          "Qilmish sodir etilgan paytdagi qonun qo'llaniladi",
          "Yangi qonun javobgarlikni yengillashtirsa, orqaga qarab qo'llanilishi mumkin",
          "Kam ahamiyatli qilmish jinoyat hisoblanmaydi",
          "Aqli rasolik javobgarlikning majburiy sharti",
        ],
        warning:
          "Mastlik " +
          "holati " +
          "javobgarlikdan " +
          "ozod " +
          "qilmaydi — " +
          "bu " +
          "alohida " +
          "moddada " +
          "belgilangan.",
        lawRefs: [
          { code: "JK", article: "13" },
          { code: "JK", article: "36" },
          { code: "JK", article: "18" },
          { code: "JK", article: "19" },
          { code: "KONS", article: "30" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     2. Jinoyat tarkibi va ayb
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "jinoyat-tarkibi",
    category: "criminal",
    level: "mid",
    order: 11020,
    title: "Ayb shakllari va jinoyatlarni tasniflash",
    desc:
      "Qasd va ehtiyotsizlik, murakkab ayb, aybsiz zarar yetkazish " +
      "va jinoyatlarning og'irligi bo'yicha tasnifi.",
    objectives: [
      "Ayb shakllarini aniq farqlay olasiz",
      "Aybsiz zarar yetkazish tushunchasini bilasiz",
      "Jinoyatlar tasnifini va uning ahamiyatini bilasiz",
      "Takroriylik va retsidiv tushunchalarini bilasiz",
    ],
    practicalSteps: [
      "Ayblov qasd yoki ehtiyotsizlik bo'yicha ekanini aniqlang — bu jazoga ta'sir qiladi",
      "Jinoyat qaysi toifaga kirishini tekshiring: bu ko'p masalani belgilaydi",
      "Aybsizlik yoki ehtiyotsizlik dalillarini to'plang",
      "Tasnif noto'g'ri bo'lsa, buni himoya yo'nalishi sifatida ko'taring",
    ],
    sections: [
      {
        heading: "Ayb shakllari",
        text:
          "AYB — jinoyat tarkibining " +
          "markaziy elementi. U " +
          "ikki asosiy shaklda " +
          "bo'ladi.\n\n" +
          "QASDDAN sodir etilgan " +
          "jinoyat: shaxs o'z " +
          "qilmishining " +
          "ijtimoiy xavfli " +
          "xususiyatini " +
          "anglagan, " +
          "oqibatlarni " +
          "oldindan ko'rgan " +
          "va ularni " +
          "xohlagan yoki " +
          "ularga ongli " +
          "ravishda yo'l " +
          "qo'ygan.\n\n" +
          "EHTIYOTSIZLIK " +
          "orqasida sodir " +
          "etilgan jinoyat " +
          "ikki turga " +
          "bo'linadi: " +
          "o'z-o'ziga " +
          "ishonish " +
          "(oqibatni " +
          "ko'rgan, " +
          "lekin oldini " +
          "olishga " +
          "ishongan) va " +
          "beparvolik " +
          "(oqibatni " +
          "ko'rmagan, " +
          "lekin " +
          "ko'rishi " +
          "kerak va " +
          "mumkin " +
          "edi).\n\n" +
          "Bu farq " +
          "amalda " +
          "juda " +
          "muhim: " +
          "jazo " +
          "sezilarli " +
          "farq " +
          "qiladi.\n\n" +
          "MURAKKAB " +
          "AYBLI " +
          "jinoyat: " +
          "qasddan " +
          "sodir " +
          "etilgan " +
          "jinoyat " +
          "natijasida " +
          "ehtiyotsizlik " +
          "orqasida " +
          "og'irroq " +
          "oqibat " +
          "yuzaga " +
          "kelgan " +
          "holat.\n\n" +
          "AYBSIZ " +
          "HOLDA " +
          "ZARAR " +
          "YETKAZISH — " +
          "eng muhim " +
          "himoya " +
          "instituti: " +
          "shaxs " +
          "qilmishining " +
          "xavfliligini " +
          "anglamagan " +
          "va anglashi " +
          "mumkin ham " +
          "bo'lmagan " +
          "bo'lsa, " +
          "javobgarlik " +
          "yuzaga " +
          "kelmaydi.",
        example:
          "Hodisa " +
          "natijasida " +
          "zarar " +
          "yetdi, " +
          "lekin " +
          "shaxs " +
          "oqibatni " +
          "oldindan " +
          "ko'ra " +
          "olmasdi " +
          "va " +
          "ko'rishi " +
          "shart " +
          "ham " +
          "emas " +
          "edi. " +
          "Bunday " +
          "holat " +
          "aybsiz " +
          "zarar " +
          "yetkazish " +
          "belgilariga " +
          "ega " +
          "bo'lishi " +
          "mumkin.",
        keyPoints: [
          "Ayb ikki shaklda: qasd va ehtiyotsizlik",
          "Ehtiyotsizlik o'z-o'ziga ishonish va beparvolikka bo'linadi",
          "Ayb shakli jazoga sezilarli ta'sir qiladi",
          "Aybsiz zarar yetkazishda javobgarlik yuzaga kelmaydi",
        ],
        warning:
          "Ayb " +
          "shaklini " +
          "noto'g'ri " +
          "belgilash " +
          "jazoni " +
          "sezilarli " +
          "oshirishi " +
          "mumkin. " +
          "Bu " +
          "himoyaning " +
          "asosiy " +
          "yo'nalishlaridan " +
          "biri.",
        lawRefs: [
          { code: "JK", article: "20" },
          { code: "JK", article: "21" },
          { code: "JK", article: "22" },
          { code: "JK", article: "23" },
          { code: "JK", article: "24" },
        ],
      },
      {
        heading: "Tasnif, takroriylik va retsidiv",
        text:
          "JINOYATLARNI TASNIFLASH " +
          "— jinoyatlar o'z " +
          "xususiyati va " +
          "ijtimoiy " +
          "xavflilik " +
          "darajasiga ko'ra " +
          "toifalarga " +
          "bo'linadi.\n\n" +
          "Tasnif shakliy " +
          "emas: u ko'p " +
          "masalani " +
          "belgilaydi — " +
          "jazo turi, " +
          "javobgarlikdan " +
          "ozod qilish " +
          "imkoniyati, " +
          "muddatlar, " +
          "sudlanganlik " +
          "holati.\n\n" +
          "Shu sababli " +
          "himoyada " +
          "birinchi " +
          "tekshiriladigan " +
          "narsalardan " +
          "biri — " +
          "qilmish " +
          "to'g'ri " +
          "toifalanganmi.\n\n" +
          "TAKRORAN " +
          "JINOYAT " +
          "SODIR " +
          "ETISH — " +
          "kodeksning " +
          "aynan bir " +
          "moddasida " +
          "nazarda " +
          "tutilgan " +
          "jinoyatni " +
          "qayta " +
          "sodir " +
          "etish.\n\n" +
          "JINOYATLAR " +
          "MAJMUI — " +
          "turli " +
          "moddalarda " +
          "nazarda " +
          "tutilgan " +
          "bir necha " +
          "jinoyat.\n\n" +
          "RETSIDIV — " +
          "ilgari " +
          "qasddan " +
          "sodir " +
          "etilgan " +
          "jinoyat " +
          "uchun " +
          "sudlanganidan " +
          "keyin " +
          "yangi " +
          "qasddan " +
          "jinoyat " +
          "sodir " +
          "etish.\n\n" +
          "Bu " +
          "tushunchalar " +
          "jazoni " +
          "og'irlashtiradi, " +
          "shuning " +
          "uchun " +
          "ular " +
          "to'g'ri " +
          "qo'llanilganini " +
          "tekshirish " +
          "muhim.\n\n" +
          "SUDLANGANLIK " +
          "abadiy " +
          "emas: " +
          "uning " +
          "tugallanish " +
          "va olib " +
          "tashlash " +
          "muddatlari " +
          "belgilangan.",
        example:
          "Shaxsning " +
          "avvalgi " +
          "sudlanganligi " +
          "allaqachon " +
          "tugagan " +
          "edi, " +
          "lekin u " +
          "retsidiv " +
          "asosida " +
          "hisobga " +
          "olindi. " +
          "Sudlanganlik " +
          "tugallangan " +
          "bo'lsa, " +
          "u " +
          "huquqiy " +
          "oqibat " +
          "keltirmaydi " +
          "— bu " +
          "tekshirilishi " +
          "kerak.",
        keyPoints: [
          "Tasnif jazo, ozod qilish va muddatlarni belgilaydi",
          "Takroriylik, majmu va retsidiv turli tushunchalar",
          "Ular jazoni og'irlashtiradi — to'g'ri qo'llanilganini tekshiring",
          "Sudlanganlik holati abadiy emas, muddatlari belgilangan",
        ],
        warning:
          "Tugagan " +
          "sudlanganlikni " +
          "hisobga " +
          "olish " +
          "noto'g'ri. " +
          "Muddatlarni " +
          "tekshirish " +
          "himoyaning " +
          "muhim " +
          "qismi.",
        lawRefs: [
          { code: "JK", article: "15" },
          { code: "JK", article: "32" },
          { code: "JK", article: "33" },
          { code: "JK", article: "34" },
          { code: "JK", article: "77" },
          { code: "JK", article: "78" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     3. Jinoiylikni istisno qiluvchi holatlar
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "jinoiylikni-istisno",
    category: "criminal",
    level: "mid",
    order: 11030,
    title: "Zaruriy mudofaa va boshqa istisno holatlar",
    desc:
      "Qilmishning jinoiyligini istisno qiladigan holatlar: " +
      "zaruriy mudofaa, oxirgi zarurat, ushlash, buyruq, tavakkalchilik.",
    objectives: [
      "Zaruriy mudofaa shartlarini aniq bilasiz",
      "Oxirgi zarurat tushunchasini bilasiz",
      "Buyruqni ijro etish qanday baholanishini bilasiz",
      "Mutanosiblik talabini tushunasiz",
    ],
    practicalSteps: [
      "Mudofaa holatida bo'lgan bo'lsangiz, voqeani darhol batafsil yozib qo'ying",
      "Guvohlar ma'lumotlarini va tibbiy hujjatlarni to'plang",
      "Mutanosiblik masalasini oldindan baholang — bu asosiy savol bo'ladi",
      "Bunday holatda advokat bilan ishlash ayniqsa zarur",
    ],
    sections: [
      {
        heading: "Zaruriy mudofaa va oxirgi zarurat",
        text:
          "Qonun ayrim holatlarda " +
          "qilmishning " +
          "JINOIYLIGINI ISTISNO " +
          "qiladi — ya'ni " +
          "harakat sodir " +
          "etilgan bo'lsa " +
          "ham, u jinoyat " +
          "hisoblanmaydi.\n\n" +
          "ZARURIY MUDOFAA — " +
          "eng ko'p " +
          "uchraydigan " +
          "holat: " +
          "mudofaalanuvchi " +
          "yoki boshqa " +
          "shaxsning " +
          "huquqlarini " +
          "ijtimoiy " +
          "xavfli " +
          "tajovuzdan " +
          "himoya " +
          "qilish.\n\n" +
          "Asosiy shart — " +
          "MUTANOSIBLIK. " +
          "Himoya " +
          "tajovuz " +
          "xarakteriga " +
          "va " +
          "xavfliligiga " +
          "mos " +
          "bo'lishi " +
          "kerak.\n\n" +
          "Mutanosiblikdan " +
          "chiqish " +
          "(mudofaa " +
          "chegarasini " +
          "oshirish) " +
          "o'zi " +
          "javobgarlik " +
          "asosiga " +
          "aylanadi, " +
          "lekin " +
          "odatda " +
          "yengilroq " +
          "javobgarlik " +
          "bo'ladi.\n\n" +
          "OXIRGI " +
          "ZARURAT — " +
          "shaxsning " +
          "yoki " +
          "boshqalarning " +
          "manfaatlariga " +
          "tahdid " +
          "soluvchi " +
          "xavfni " +
          "bartaraf " +
          "etish " +
          "uchun " +
          "zarar " +
          "yetkazish.\n\n" +
          "Bu yerda " +
          "shart " +
          "boshqacha: " +
          "yetkazilgan " +
          "zarar " +
          "oldini " +
          "olingan " +
          "zarardan " +
          "KAM " +
          "bo'lishi " +
          "kerak.\n\n" +
          "Farqi " +
          "muhim: " +
          "zaruriy " +
          "mudofaada " +
          "zarar " +
          "TAJOVUZKORGA " +
          "yetkaziladi, " +
          "oxirgi " +
          "zaruratda " +
          "esa " +
          "ko'pincha " +
          "uchinchi " +
          "shaxsga.",
        example:
          "Shaxs " +
          "hujumdan " +
          "himoyalanib " +
          "tajovuzkorga " +
          "zarar " +
          "yetkazdi. " +
          "Asosiy " +
          "savol " +
          "mutanosiblik " +
          "bo'ladi: " +
          "himoya " +
          "tajovuz " +
          "xavfiga " +
          "mos " +
          "bo'lganmi " +
          "— " +
          "javob " +
          "shu " +
          "yerda " +
          "hal " +
          "qilinadi.",
        keyPoints: [
          "Istisno holatlarda qilmish jinoyat hisoblanmaydi",
          "Zaruriy mudofaada asosiy shart — MUTANOSIBLIK",
          "Oxirgi zaruratda yetkazilgan zarar oldini olingandan KAM bo'lishi kerak",
          "Zaruriy mudofaada zarar tajovuzkorga yetkaziladi",
        ],
        warning:
          "Tajovuz " +
          "tugagandan " +
          "keyin " +
          "qilingan " +
          "harakat " +
          "mudofaa " +
          "hisoblanmaydi " +
          "— u " +
          "o'ch " +
          "olish " +
          "deb " +
          "baholanishi " +
          "mumkin.",
        lawRefs: [
          { code: "JK", article: "35" },
          { code: "JK", article: "37" },
          { code: "JK", article: "38" },
        ],
      },
      {
        heading: "Ushlash, buyruq va asosli tavakkalchilik",
        text:
          "IJTIMOIY XAVFLI " +
          "QILMISH SODIR " +
          "ETGAN SHAXSNI " +
          "USHLASH " +
          "vaqtida zarar " +
          "yetkazish ham " +
          "istisno " +
          "holatlar " +
          "qatoriga " +
          "kiradi.\n\n" +
          "Bu yerda ham " +
          "mutanosiblik " +
          "talabi " +
          "amal " +
          "qiladi: " +
          "ushlash " +
          "uchun " +
          "zarur " +
          "bo'lgan " +
          "doiradan " +
          "chiqmaslik " +
          "kerak.\n\n" +
          "BUYRUQ YOKI " +
          "BOSHQA " +
          "VAZIFANI " +
          "IJRO " +
          "ETISH: " +
          "shaxsning " +
          "buyruqni " +
          "ijro " +
          "etishi " +
          "ma'lum " +
          "shartlarda " +
          "javobgarlikni " +
          "istisno " +
          "qiladi.\n\n" +
          "Lekin bu " +
          "cheksiz " +
          "emas: " +
          "aniq " +
          "noqonuniy " +
          "buyruqni " +
          "ijro " +
          "etish " +
          "javobgarlikdan " +
          "ozod " +
          "qilmaydi.\n\n" +
          "Amaliy " +
          "xulosa: " +
          "«menga " +
          "shunday " +
          "buyurishdi» " +
          "degan " +
          "asos " +
          "har " +
          "doim " +
          "ishlamaydi.\n\n" +
          "ASOSLI " +
          "TAVAKKALCHILIK " +
          "— kasb " +
          "yoki " +
          "xo'jalik " +
          "faoliyatiga " +
          "bog'liq " +
          "holat: " +
          "ijtimoiy " +
          "foydali " +
          "maqsadga " +
          "erishish " +
          "uchun " +
          "qilingan " +
          "asosli " +
          "tavakkalchilik.\n\n" +
          "Bu " +
          "institut " +
          "tadbirkorlar " +
          "va " +
          "mutaxassislar " +
          "uchun " +
          "muhim: " +
          "har " +
          "qanday " +
          "muvaffaqiyatsiz " +
          "qaror " +
          "jinoyat " +
          "emas.\n\n" +
          "Lekin " +
          "tavakkalchilik " +
          "ASOSLI " +
          "bo'lishi " +
          "va " +
          "zarur " +
          "choralar " +
          "ko'rilgan " +
          "bo'lishi " +
          "kerak.",
        example:
          "Mutaxassis " +
          "asosli " +
          "hisob-kitob " +
          "va " +
          "ehtiyot " +
          "choralari " +
          "bilan " +
          "qaror " +
          "qabul " +
          "qildi, " +
          "lekin " +
          "natija " +
          "salbiy " +
          "chiqdi. " +
          "Asosli " +
          "tavakkalchilik " +
          "instituti " +
          "aynan " +
          "shunday " +
          "holatlar " +
          "uchun.",
        keyPoints: [
          "Ushlash vaqtida zarar yetkazishda ham mutanosiblik talab qilinadi",
          "Buyruqni ijro etish ma'lum shartlarda javobgarlikni istisno qiladi",
          "Aniq noqonuniy buyruq javobgarlikdan ozod qilmaydi",
          "Asosli tavakkalchilik kasb va xo'jalik faoliyati uchun muhim himoya",
        ],
        warning:
          "Tavakkalchilik " +
          "asosli " +
          "bo'lishi " +
          "uchun " +
          "hisob-kitob " +
          "va " +
          "ehtiyot " +
          "choralari " +
          "HUJJATLASHTIRILGAN " +
          "bo'lishi " +
          "kerak.",
        lawRefs: [
          { code: "JK", article: "39" },
          { code: "JK", article: "40" },
          { code: "JK", article: "41" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     4. Jazo tizimi
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "jazo-turlari",
    category: "criminal",
    level: "mid",
    order: 11040,
    title: "Jazo turlari va tayinlash asoslari",
    desc:
      "Jazoning maqsadi, jazo tizimi, tayinlashning umumiy " +
      "asoslari, yengillashtiruvchi va og'irlashtiruvchi holatlar.",
    objectives: [
      "Jazoning maqsadini va tizimini bilasiz",
      "Jazo tayinlashning umumiy asoslarini bilasiz",
      "Yengillashtiruvchi holatlarni bilasiz",
      "Yengilroq jazo tayinlash imkoniyatini bilasiz",
    ],
    practicalSteps: [
      "Yengillashtiruvchi holatlarni to'plang va ularni hujjat bilan asoslang",
      "Zararni ixtiyoriy qoplash imkoniyatini ko'rib chiqing — bu muhim holat",
      "Shaxsingizga oid ijobiy ma'lumotnomalarni taqdim eting",
      "Jazo tayinlashda asoslar to'g'ri qo'llanilganini tekshiring",
    ],
    sections: [
      {
        heading: "Jazo maqsadi va tizimi",
        text:
          "JAZO — jinoyat sodir " +
          "etishda aybli deb " +
          "topilgan shaxsga " +
          "nisbatan sud " +
          "tomonidan " +
          "qo'llaniladigan " +
          "chora.\n\n" +
          "MAQSADI qonunda " +
          "belgilangan va " +
          "u faqat jazolash " +
          "emas: aybdorni " +
          "axloqan " +
          "tuzatish, " +
          "yangi " +
          "jinoyatlarning " +
          "oldini " +
          "olish.\n\n" +
          "Insonparvarlik " +
          "prinsipiga " +
          "muvofiq jazo " +
          "jismoniy azob " +
          "berish yoki " +
          "qadr-qimmatni " +
          "kamsitish " +
          "maqsadini " +
          "ko'zlamaydi.\n\n" +
          "JAZO TIZIMI " +
          "qonunda " +
          "sanalgan " +
          "va u " +
          "yengilroqdan " +
          "og'irroqqa " +
          "qarab " +
          "joylashtirilgan.\n\n" +
          "Asosiy " +
          "turlar " +
          "qatorida: " +
          "jarima, " +
          "muayyan " +
          "huquqdan " +
          "mahrum " +
          "qilish, " +
          "axloq " +
          "tuzatish " +
          "ishlari, " +
          "ozodlikni " +
          "cheklash, " +
          "ozodlikdan " +
          "mahrum " +
          "qilish.\n\n" +
          "Eng " +
          "og'iri " +
          "— " +
          "umrbod " +
          "ozodlikdan " +
          "mahrum " +
          "qilish " +
          "va u " +
          "favqulodda " +
          "jazo " +
          "chorasi " +
          "sifatida " +
          "belgilangan.\n\n" +
          "Muhim " +
          "eslatma: " +
          "Konstitutsiyaga " +
          "muvofiq " +
          "O'zbekistonda " +
          "o'lim " +
          "jazosi " +
          "TAQIQLANGAN.",
        example:
          "Sud jazo " +
          "tayinlashda " +
          "faqat " +
          "qilmishga " +
          "emas, " +
          "shaxsning " +
          "tuzalish " +
          "imkoniyatiga " +
          "ham " +
          "qaraydi. " +
          "Shuning " +
          "uchun " +
          "ijobiy " +
          "tavsiflar " +
          "va " +
          "zararni " +
          "qoplash " +
          "haqiqiy " +
          "ahamiyatga " +
          "ega.",
        keyPoints: [
          "Jazo maqsadi — axloqan tuzatish va yangi jinoyatlar oldini olish",
          "Jazo azob berish yoki qadr-qimmatni kamsitish maqsadini ko'zlamaydi",
          "Jazo tizimi yengilroqdan og'irroqqa qarab joylashtirilgan",
          "O'zbekistonda o'lim jazosi taqiqlangan",
        ],
        warning:
          "Jazo " +
          "faqat " +
          "SUD " +
          "tomonidan " +
          "tayinlanadi. " +
          "Boshqa " +
          "organ " +
          "jinoiy " +
          "jazo " +
          "qo'llash " +
          "vakolatiga " +
          "ega " +
          "emas.",
        lawRefs: [
          { code: "JK", article: "42" },
          { code: "JK", article: "43" },
          { code: "JK", article: "44" },
          { code: "JK", article: "50" },
          { code: "JK", article: "51" },
          { code: "KONS", article: "25" },
        ],
      },
      {
        heading: "Tayinlash asoslari va yengillashtiruvchi holatlar",
        text:
          "JAZO TAYINLASHNING " +
          "UMUMIY ASOSLARI: " +
          "sud jazoni " +
          "qonunda " +
          "belgilangan " +
          "doirada, " +
          "jinoyatning " +
          "ijtimoiy " +
          "xavflilik " +
          "darajasini, " +
          "aybdorning " +
          "shaxsini va " +
          "boshqa " +
          "holatlarni " +
          "hisobga olgan " +
          "holda " +
          "tayinlaydi.\n\n" +
          "Ya'ni jazo " +
          "avtomatik " +
          "emas — u " +
          "individuallashtiriladi.\n\n" +
          "YENGILLASHTIRUVCHI " +
          "HOLATLAR " +
          "qonunda " +
          "sanalgan.\n\n" +
          "Odatda ularga " +
          "kiradi: " +
          "birinchi " +
          "marta " +
          "jinoyat " +
          "sodir " +
          "etish, " +
          "chin " +
          "ko'ngildan " +
          "pushaymon " +
          "bo'lish, " +
          "aybga " +
          "iqror " +
          "bo'lish, " +
          "zararni " +
          "ixtiyoriy " +
          "qoplash, " +
          "jinoyatni " +
          "ochishda " +
          "faol " +
          "yordam " +
          "berish, " +
          "voyaga " +
          "yetmaganlik " +
          "va " +
          "boshqalar.\n\n" +
          "Amaliy " +
          "xulosa: " +
          "ZARARNI " +
          "QOPLASH " +
          "eng " +
          "ta'sirchan " +
          "holatlardan " +
          "biri " +
          "va u " +
          "hujjat " +
          "bilan " +
          "tasdiqlanishi " +
          "kerak.\n\n" +
          "OG'IRLASHTIRUVCHI " +
          "holatlar " +
          "ham " +
          "belgilangan.\n\n" +
          "YENGILROQ " +
          "JAZO " +
          "TAYINLASH: " +
          "sud " +
          "alohida " +
          "holatlarni " +
          "hisobga " +
          "olib " +
          "qonunda " +
          "belgilangandan " +
          "yengilroq " +
          "jazo " +
          "tayinlashi " +
          "mumkin.\n\n" +
          "Bir " +
          "necha " +
          "jinoyat " +
          "yoki " +
          "bir " +
          "necha " +
          "hukm " +
          "bo'yicha " +
          "jazo " +
          "tayinlash " +
          "qoidalari " +
          "ham " +
          "alohida " +
          "belgilangan.",
        example:
          "Ayblanuvchi " +
          "zararni " +
          "to'liq " +
          "qopladi " +
          "va " +
          "buni " +
          "hujjat " +
          "bilan " +
          "tasdiqladi. " +
          "Bu " +
          "yengillashtiruvchi " +
          "holat " +
          "sifatida " +
          "hisobga " +
          "olinadi " +
          "va " +
          "jazoga " +
          "sezilarli " +
          "ta'sir " +
          "qilishi " +
          "mumkin.",
        keyPoints: [
          "Jazo individuallashtiriladi — u avtomatik emas",
          "Yengillashtiruvchi holatlar qonunda sanalgan",
          "Zararni ixtiyoriy qoplash eng ta'sirchan holatlardan biri",
          "Sud qonunda belgilangandan yengilroq jazo tayinlashi mumkin",
        ],
        warning:
          "Yengillashtiruvchi " +
          "holatlar " +
          "o'z-o'zidan " +
          "hisobga " +
          "olinmasligi " +
          "mumkin — " +
          "ularni " +
          "hujjat " +
          "bilan " +
          "taqdim " +
          "etish " +
          "kerak.",
        lawRefs: [
          { code: "JK", article: "54" },
          { code: "JK", article: "55" },
          { code: "JK", article: "56" },
          { code: "JK", article: "57" },
          { code: "JK", article: "59" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     5. Javobgarlikdan ozod qilish
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "javobgarlikdan-ozod",
    category: "criminal",
    level: "advanced",
    order: 11050,
    title: "Javobgarlik va jazodan ozod qilish",
    desc:
      "Muddat o'tishi, pushaymonlik, kasallik, amnistiya, shartli " +
      "hukm va muddatidan ilgari shartli ozod qilish.",
    objectives: [
      "Javobgarlikdan ozod qilish asoslarini bilasiz",
      "Jazodan ozod qilish asoslarini bilasiz",
      "Shartli hukm qilish nima ekanligini bilasiz",
      "Muddatidan ilgari shartli ozod qilish shartlarini bilasiz",
    ],
    practicalSteps: [
      "Javobgarlikka tortish muddati o'tmaganini tekshiring",
      "Amalda pushaymon bo'lish shartlarini (iqror, zarar qoplash, yordam) bajaring",
      "Shartli hukmda belgilangan majburiyatlarni qat'iy bajaring",
      "Muddatidan ilgari ozod qilish shartlarini oldindan aniqlang",
    ],
    sections: [
      {
        heading: "Javobgarlikdan ozod qilish",
        text:
          "Qonun jinoyat sodir " +
          "etilgan bo'lsa ham, " +
          "ayrim holatlarda " +
          "javobgarlikdan " +
          "OZOD QILISH " +
          "imkoniyatini " +
          "beradi.\n\n" +
          "MUDDATNING O'TIB " +
          "KETISHI: " +
          "javobgarlikka " +
          "tortish " +
          "muddati " +
          "o'tgan " +
          "bo'lsa, " +
          "shaxs " +
          "javobgarlikdan " +
          "ozod " +
          "qilinadi.\n\n" +
          "Bu birinchi " +
          "tekshiriladigan " +
          "masalalardan " +
          "biri " +
          "bo'lishi " +
          "kerak.\n\n" +
          "IJTIMOIY " +
          "XAVFLILIKNI " +
          "YO'QOTISH: " +
          "qilmish " +
          "yoki " +
          "shaxs " +
          "ijtimoiy " +
          "xavfliligini " +
          "yo'qotgan " +
          "bo'lsa.\n\n" +
          "AMALDA " +
          "PUSHAYMON " +
          "BO'LISH — " +
          "amaliy " +
          "jihatdan " +
          "eng " +
          "muhim " +
          "asoslardan " +
          "biri.\n\n" +
          "U odatda " +
          "quyidagilarni " +
          "talab " +
          "qiladi: " +
          "aybga " +
          "iqror " +
          "bo'lish, " +
          "jinoyatni " +
          "ochishda " +
          "faol " +
          "yordam " +
          "berish " +
          "va " +
          "yetkazilgan " +
          "zararni " +
          "qoplash.\n\n" +
          "KASALLIK " +
          "tufayli " +
          "ozod " +
          "qilish " +
          "va " +
          "AMNISTIYA " +
          "akti " +
          "asosida " +
          "ozod " +
          "qilish " +
          "ham " +
          "nazarda " +
          "tutilgan.\n\n" +
          "Bu " +
          "asoslarni " +
          "bilish " +
          "muhim: " +
          "ular " +
          "himoya " +
          "strategiyasini " +
          "butunlay " +
          "o'zgartirishi " +
          "mumkin.",
        example:
          "Ayblanuvchi " +
          "aybga " +
          "iqror " +
          "bo'ldi, " +
          "zararni " +
          "qopladi " +
          "va " +
          "tergovga " +
          "yordam " +
          "berdi. " +
          "Bu " +
          "shartlar " +
          "birgalikda " +
          "amalda " +
          "pushaymon " +
          "bo'lish " +
          "asosini " +
          "shakllantirishi " +
          "mumkin.",
        keyPoints: [
          "Javobgarlikka tortish muddati o'tishi ozod qilish asosi",
          "Amalda pushaymon bo'lish: iqror, faol yordam, zararni qoplash",
          "Kasallik va amnistiya ham ozod qilish asoslari qatorida",
          "Bu asoslar himoya strategiyasini butunlay o'zgartirishi mumkin",
        ],
        warning:
          "Amalda " +
          "pushaymon " +
          "bo'lish " +
          "shartlari " +
          "TO'LIQ " +
          "bajarilishi " +
          "kerak. " +
          "Faqat " +
          "iqror " +
          "bo'lish " +
          "yetarli " +
          "bo'lmasligi " +
          "mumkin.",
        lawRefs: [
          { code: "JK", article: "64" },
          { code: "JK", article: "65" },
          { code: "JK", article: "66" },
          { code: "JK", article: "67" },
          { code: "JK", article: "68" },
        ],
      },
      {
        heading: "Jazodan ozod qilish va shartli hukm",
        text:
          "JAZODAN OZOD QILISH " +
          "javobgarlikdan " +
          "ozod qilishdan " +
          "farq qiladi: bu " +
          "yerda " +
          "javobgarlik " +
          "belgilangan, " +
          "lekin jazo " +
          "o'talmaydi " +
          "yoki " +
          "yengillashtiriladi.\n\n" +
          "Asoslari: jazoni " +
          "ijro etish " +
          "muddatining " +
          "o'tib " +
          "ketishi, " +
          "shaxsning " +
          "ijtimoiy " +
          "xavfliligini " +
          "yo'qotishi, " +
          "amalda " +
          "pushaymon " +
          "bo'lish, " +
          "kasallik, " +
          "amnistiya " +
          "yoki afv " +
          "etish.\n\n" +
          "SHARTLI " +
          "HUKM " +
          "QILISH — " +
          "amalda " +
          "juda " +
          "muhim " +
          "institut: " +
          "sud " +
          "jazoni " +
          "tayinlaydi, " +
          "lekin " +
          "uni " +
          "haqiqatda " +
          "qo'llamaydi " +
          "va " +
          "sinov " +
          "muddati " +
          "belgilaydi.\n\n" +
          "Bu " +
          "davrda " +
          "shaxs " +
          "belgilangan " +
          "majburiyatlarni " +
          "bajarishi " +
          "kerak. " +
          "Ularni " +
          "buzish " +
          "jazoni " +
          "haqiqatda " +
          "qo'llashga " +
          "olib " +
          "kelishi " +
          "mumkin.\n\n" +
          "MUDDATIDAN " +
          "ILGARI " +
          "SHARTLI " +
          "OZOD " +
          "QILISH: " +
          "jazoning " +
          "belgilangan " +
          "qismini " +
          "o'tagan " +
          "shaxs " +
          "shartlarga " +
          "javob " +
          "bersa, " +
          "muddatidan " +
          "oldin " +
          "ozod " +
          "qilinishi " +
          "mumkin.\n\n" +
          "JAZONI " +
          "YENGILROG'I " +
          "BILAN " +
          "ALMASHTIRISH " +
          "imkoniyati " +
          "ham " +
          "mavjud.\n\n" +
          "Bu " +
          "institutlar " +
          "mahkumning " +
          "xulq-atvoriga " +
          "bog'liq " +
          "— " +
          "shuning " +
          "uchun " +
          "jazoni " +
          "o'tash " +
          "davridagi " +
          "xatti-harakat " +
          "amaliy " +
          "ahamiyatga " +
          "ega.",
        example:
          "Shartli " +
          "hukm " +
          "qilingan " +
          "shaxs " +
          "sinov " +
          "muddatida " +
          "belgilangan " +
          "majburiyatlarni " +
          "bajarmadi. " +
          "Bu " +
          "shartli " +
          "hukmni " +
          "bekor " +
          "qilib, " +
          "jazoni " +
          "haqiqatda " +
          "qo'llashga " +
          "asos " +
          "bo'lishi " +
          "mumkin.",
        keyPoints: [
          "Jazodan ozod qilishda javobgarlik belgilangan, lekin jazo o'talmaydi",
          "Shartli hukmda sinov muddati va majburiyatlar belgilanadi",
          "Majburiyatlarni buzish jazoni haqiqatda qo'llashga olib keladi",
          "Muddatidan ilgari shartli ozod qilish xulq-atvorga bog'liq",
        ],
        warning:
          "Shartli " +
          "hukm " +
          "«jazo " +
          "yo'q» " +
          "degani " +
          "emas. " +
          "Sinov " +
          "muddatidagi " +
          "majburiyatlar " +
          "qat'iy " +
          "bajarilishi " +
          "kerak.",
        lawRefs: [
          { code: "JK", article: "69" },
          { code: "JK", article: "70" },
          { code: "JK", article: "71" },
          { code: "JK", article: "72" },
          { code: "JK", article: "73" },
          { code: "JK", article: "74" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     6. Voyaga yetmaganlar
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "voyaga-etmaganlar-javobgarligi",
    category: "criminal",
    level: "mid",
    order: 11060,
    title: "Voyaga yetmaganlarning javobgarligi",
    desc:
      "Yosh chegaralari, voyaga yetmaganlar uchun jazo tizimi va " +
      "qo'shimcha kafolatlar.",
    objectives: [
      "Javobgarlikka tortilish yoshini bilasiz",
      "Voyaga yetmaganlar uchun jazo tizimini bilasiz",
      "Qo'shimcha kafolatlarni bilasiz",
      "Ota-onalar va vakillar rolini bilasiz",
    ],
    practicalSteps: [
      "Voyaga yetmagan shaxsga nisbatan ish yuritilsa, qonuniy vakil ishtirokini ta'minlang",
      "Advokat ishtiroki bu toifada ayniqsa muhim ekanini yodda tuting",
      "Yosh va tarbiya sharoitlari haqidagi hujjatlarni taqdim eting",
      "Tarbiyaviy ta'sir choralari imkoniyatini ko'rib chiqing",
    ],
    sections: [
      {
        heading: "Yosh va javobgarlik",
        text:
          "Jinoiy javobgarlikka " +
          "tortilish yoshi " +
          "qonunda " +
          "belgilangan " +
          "va u " +
          "jinoyat " +
          "turiga " +
          "qarab " +
          "farq " +
          "qilishi " +
          "mumkin.\n\n" +
          "Umumiy qoida " +
          "bo'yicha " +
          "belgilangan " +
          "yoshga " +
          "to'lgan " +
          "shaxs " +
          "javobgar " +
          "bo'ladi.\n\n" +
          "Ayrim " +
          "og'irroq " +
          "jinoyatlar " +
          "uchun " +
          "yosh " +
          "chegarasi " +
          "pastroq " +
          "bo'lishi " +
          "mumkin.\n\n" +
          "Bu " +
          "farqni " +
          "bilish " +
          "muhim: " +
          "yosh " +
          "chegarasi " +
          "javobgarlikning " +
          "mavjudligini " +
          "butunlay " +
          "belgilaydi.\n\n" +
          "VOYAGA " +
          "YETMAGANLIK " +
          "yengillashtiruvchi " +
          "holat " +
          "sifatida " +
          "ham " +
          "hisobga " +
          "olinadi.\n\n" +
          "Qonunchilikning " +
          "bu " +
          "yondashuvi " +
          "tushunarli: " +
          "voyaga " +
          "yetmagan " +
          "shaxsning " +
          "shaxsiyati " +
          "hali " +
          "shakllanmagan " +
          "va " +
          "tuzatish " +
          "imkoniyati " +
          "yuqori.\n\n" +
          "Shu " +
          "sababli " +
          "bu " +
          "toifaga " +
          "nisbatan " +
          "asosiy " +
          "urg'u " +
          "jazolashga " +
          "emas, " +
          "tarbiyaviy " +
          "ta'sirga " +
          "qaratilgan.",
        example:
          "Voyaga " +
          "yetmagan " +
          "shaxsga " +
          "nisbatan " +
          "ish " +
          "yuritilganda " +
          "uning " +
          "yoshi, " +
          "tarbiya " +
          "sharoitlari " +
          "va " +
          "atrofdagilar " +
          "ta'siri " +
          "hisobga " +
          "olinadi. " +
          "Bu " +
          "ma'lumotlarni " +
          "taqdim " +
          "etish " +
          "himoyaning " +
          "muhim " +
          "qismi.",
        keyPoints: [
          "Javobgarlikka tortilish yoshi qonunda belgilangan",
          "Ayrim jinoyatlar uchun yosh chegarasi pastroq bo'lishi mumkin",
          "Voyaga yetmaganlik yengillashtiruvchi holat sifatida hisobga olinadi",
          "Asosiy urg'u jazolashga emas, tarbiyaviy ta'sirga qaratilgan",
        ],
        warning:
          "Voyaga " +
          "yetmagan " +
          "shaxs " +
          "so'roq " +
          "qilinganda " +
          "qonuniy " +
          "vakil " +
          "va " +
          "advokat " +
          "ishtiroki " +
          "ta'minlanishi " +
          "kerak.",
        lawRefs: [
          { code: "JK", article: "17" },
          { code: "JK", article: "55" },
          { code: "JK", article: "16" },
        ],
      },
      {
        heading: "Voyaga yetmaganlar uchun jazo tizimi",
        text:
          "Voyaga yetmaganlar " +
          "uchun ALOHIDA " +
          "jazo tizimi " +
          "belgilangan.\n\n" +
          "O'n sakkiz " +
          "yoshga " +
          "to'lmasdan " +
          "jinoyat " +
          "sodir " +
          "etgan " +
          "shaxslarga " +
          "nisbatan " +
          "qo'llaniladigan " +
          "jazo " +
          "turlari " +
          "ro'yxati " +
          "kattalarnikidan " +
          "TOR.\n\n" +
          "Bu " +
          "ataylab: " +
          "eng " +
          "og'ir " +
          "choralar " +
          "bu " +
          "toifaga " +
          "qo'llanilmaydi.\n\n" +
          "Jarima " +
          "bo'yicha " +
          "alohida " +
          "qoidalar, " +
          "axloq " +
          "tuzatish " +
          "ishlari " +
          "bo'yicha " +
          "cheklovlar " +
          "va " +
          "ozodlikdan " +
          "mahrum " +
          "qilish " +
          "bo'yicha " +
          "maxsus " +
          "qoidalar " +
          "belgilangan.\n\n" +
          "Amaliy " +
          "xulosa " +
          "oila " +
          "uchun: " +
          "voyaga " +
          "yetmagan " +
          "farzandga " +
          "nisbatan " +
          "ish " +
          "yuritilsa, " +
          "birinchi " +
          "qadam — " +
          "ADVOKAT " +
          "jalb " +
          "qilish.\n\n" +
          "Ikkinchi " +
          "qadam — " +
          "qonuniy " +
          "vakil " +
          "sifatida " +
          "jarayonda " +
          "qatnashish.\n\n" +
          "Uchinchi " +
          "qadam — " +
          "shaxsni " +
          "ijobiy " +
          "tavsiflovchi " +
          "hujjatlarni " +
          "(o'quv " +
          "muassasasi, " +
          "mahalla) " +
          "to'plash.\n\n" +
          "Bu " +
          "hujjatlar " +
          "jazo " +
          "tayinlashda " +
          "va " +
          "tarbiyaviy " +
          "ta'sir " +
          "choralarini " +
          "qo'llash " +
          "masalasida " +
          "haqiqiy " +
          "ahamiyatga " +
          "ega.",
        example:
          "Voyaga " +
          "yetmagan " +
          "shaxs " +
          "birinchi " +
          "marta " +
          "og'ir " +
          "bo'lmagan " +
          "jinoyat " +
          "sodir " +
          "etdi. " +
          "Bunday " +
          "holatda " +
          "eng " +
          "og'ir " +
          "jazo " +
          "emas, " +
          "yengilroq " +
          "choralar " +
          "va " +
          "tarbiyaviy " +
          "ta'sir " +
          "imkoniyati " +
          "ko'rib " +
          "chiqiladi.",
        keyPoints: [
          "Voyaga yetmaganlar uchun jazo turlari ro'yxati TORROQ",
          "Eng og'ir choralar bu toifaga qo'llanilmaydi",
          "Advokat va qonuniy vakil ishtiroki hal qiluvchi ahamiyatga ega",
          "Ijobiy tavsiflar jazo tayinlashda haqiqiy ta'sir qiladi",
        ],
        warning:
          "Voyaga " +
          "yetmagan " +
          "shaxsni " +
          "advokatsiz " +
          "va " +
          "qonuniy " +
          "vakilsiz " +
          "so'roq " +
          "qilishga " +
          "yo'l " +
          "qo'ymang — " +
          "bu " +
          "protsessual " +
          "buzilish.",
        lawRefs: [
          { code: "JK", article: "81" },
          { code: "JK", article: "82" },
          { code: "JK", article: "83" },
          { code: "JK", article: "85" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     7. Mulkka qarshi jinoyatlar
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "mulkka-qarshi",
    category: "criminal",
    level: "basic",
    order: 11070,
    title: "Mulkka qarshi jinoyatlar",
    desc:
      "O'g'rilik, firibgarlik, talonchilik, bosqinchilik va " +
      "tovlamachilik — farqlari va belgilari.",
    objectives: [
      "Talon-taroj shakllarini farqlay olasiz",
      "O'g'rilik va firibgarlik farqini bilasiz",
      "Talonchilik va bosqinchilik farqini bilasiz",
      "Jabrlanuvchi sifatida qanday harakat qilishni bilasiz",
    ],
    practicalSteps: [
      "Mulkingizga qarshi jinoyat sodir etilsa, darhol arizani YOZMA bering",
      "Zarar hajmini hujjat bilan asoslang: chek, baholash, surat",
      "Guvohlar ma'lumotlarini yozib oling",
      "Firibgarlik holatida barcha yozishmalar va to'lov hujjatlarini saqlang",
    ],
    sections: [
      {
        heading: "Talon-taroj shakllari",
        text:
          "Mulkka qarshi " +
          "jinoyatlarning " +
          "asosiy guruhi — " +
          "TALON-TAROJ " +
          "qilish. Uning " +
          "shakllari " +
          "USULIGA qarab " +
          "farqlanadi.\n\n" +
          "O'G'RILIK — " +
          "o'zganing " +
          "mol-mulkini " +
          "YASHIRIN " +
          "ravishda " +
          "talon-toroj " +
          "qilish.\n\n" +
          "TALONCHILIK — " +
          "o'zganing " +
          "mulkini " +
          "OCHIQDAN-OCHIQ " +
          "talon-toroj " +
          "qilish.\n\n" +
          "BOSQINCHILIK — " +
          "talon-toroj " +
          "maqsadida " +
          "hujum " +
          "qilish " +
          "bilan " +
          "bog'liq " +
          "shakl.\n\n" +
          "FIRIBGARLIK — " +
          "ALDASH " +
          "yoki " +
          "ishonchni " +
          "suiiste'mol " +
          "qilish " +
          "yo'li " +
          "bilan " +
          "mulkni " +
          "egallash.\n\n" +
          "TOVLAMACHILIK — " +
          "jabrlanuvchiga " +
          "yoki " +
          "uning " +
          "yaqinlariga " +
          "zo'rlik " +
          "yoki " +
          "boshqa " +
          "tahdid " +
          "ishlatib " +
          "mulk " +
          "talab " +
          "qilish.\n\n" +
          "Bu " +
          "farqlarni " +
          "bilish " +
          "amalda " +
          "muhim, " +
          "chunki " +
          "har " +
          "bir " +
          "shakl " +
          "uchun " +
          "javobgarlik " +
          "darajasi " +
          "har " +
          "xil.\n\n" +
          "Bundan " +
          "tashqari " +
          "mulkni " +
          "qasddan " +
          "nobud " +
          "qilish " +
          "yoki " +
          "unga " +
          "zarar " +
          "yetkazish " +
          "ham " +
          "alohida " +
          "jinoyat.",
        example:
          "Shaxs " +
          "onlayn " +
          "e'lon " +
          "orqali " +
          "oldindan " +
          "to'lov " +
          "qildi, " +
          "tovar " +
          "kelmadi " +
          "va " +
          "sotuvchi " +
          "yo'qoldi. " +
          "Bunday " +
          "holat " +
          "aldash " +
          "yo'li " +
          "bilan " +
          "mulkni " +
          "egallash " +
          "belgilariga " +
          "ega " +
          "bo'lishi " +
          "mumkin.",
        keyPoints: [
          "Talon-taroj shakllari USULGA qarab farqlanadi",
          "O'g'rilik — yashirin, talonchilik — ochiq",
          "Firibgarlik — aldash yoki ishonchni suiiste'mol qilish",
          "Tovlamachilik — tahdid bilan mulk talab qilish",
        ],
        warning:
          "Onlayn " +
          "firibgarlikda " +
          "vaqt " +
          "hal " +
          "qiluvchi: " +
          "qanchalik " +
          "tez " +
          "murojaat " +
          "qilsangiz, " +
          "mablag'ni " +
          "kuzatish " +
          "imkoniyati " +
          "shunchalik " +
          "yuqori " +
          "bo'ladi.",
        lawRefs: [
          { code: "JK", article: "164" },
          { code: "JK", article: "165" },
          { code: "JK", article: "166" },
          { code: "JK", article: "168" },
          { code: "JK", article: "169" },
          { code: "JK", article: "173" },
        ],
      },
      {
        heading: "Jabrlanuvchi sifatida harakat",
        text:
          "Mulkka qarshi " +
          "jinoyat sodir " +
          "etilganda " +
          "harakat " +
          "ketma-ketligi " +
          "natijaga " +
          "sezilarli " +
          "ta'sir " +
          "qiladi.\n\n" +
          "BIRINCHI " +
          "QADAM — " +
          "darhol " +
          "murojaat " +
          "qilish. " +
          "Vaqt " +
          "o'tishi " +
          "bilan " +
          "iz va " +
          "dalillar " +
          "yo'qoladi.\n\n" +
          "IKKINCHI " +
          "QADAM — " +
          "arizani " +
          "YOZMA " +
          "berish " +
          "va " +
          "ro'yxatga " +
          "olinganini " +
          "tasdiqlovchi " +
          "hujjat " +
          "olish.\n\n" +
          "UCHINCHI " +
          "QADAM — " +
          "zararni " +
          "asoslash: " +
          "xarid " +
          "hujjatlari, " +
          "baholash, " +
          "suratlar, " +
          "kafolat " +
          "talonlari.\n\n" +
          "Zarar " +
          "hajmi " +
          "muhim: " +
          "u " +
          "qilmishning " +
          "tasnifiga " +
          "ta'sir " +
          "qilishi " +
          "mumkin.\n\n" +
          "TO'RTINCHI " +
          "QADAM — " +
          "guvohlar. " +
          "Ularning " +
          "ma'lumotlarini " +
          "darhol " +
          "yozib " +
          "oling.\n\n" +
          "FIRIBGARLIK " +
          "holatida " +
          "alohida " +
          "e'tibor: " +
          "barcha " +
          "yozishmalar, " +
          "e'lon " +
          "skrinshotlari, " +
          "to'lov " +
          "hujjatlari " +
          "va " +
          "aloqa " +
          "ma'lumotlari " +
          "saqlanishi " +
          "kerak.\n\n" +
          "Shuningdek " +
          "jinoiy " +
          "yo'l " +
          "bilan " +
          "topilgan " +
          "mulkni " +
          "olish " +
          "yoki " +
          "o'tkazish " +
          "ham " +
          "jinoyat " +
          "hisoblanadi — " +
          "shubhali " +
          "arzon " +
          "taklifda " +
          "buni " +
          "yodda " +
          "tuting.",
        example:
          "Jabrlanuvchi " +
          "arizani " +
          "og'zaki " +
          "berdi " +
          "va " +
          "hech " +
          "qanday " +
          "hujjat " +
          "olmadi. " +
          "Keyin " +
          "murojaat " +
          "qilganini " +
          "va " +
          "sanasini " +
          "isbotlash " +
          "qiyin " +
          "bo'ldi — " +
          "yozma " +
          "ariza " +
          "bu " +
          "muammoni " +
          "yechardi.",
        keyPoints: [
          "Darhol murojaat qilish — iz va dalillar tez yo'qoladi",
          "Arizani YOZMA berib, ro'yxat hujjatini oling",
          "Zarar hajmini hujjat bilan asoslang — u tasnifga ta'sir qiladi",
          "Firibgarlikda barcha yozishmalar va to'lov hujjatlarini saqlang",
        ],
        warning:
          "Shubhali " +
          "darajada " +
          "arzon " +
          "tovar " +
          "sotib " +
          "olish " +
          "jinoiy " +
          "yo'l " +
          "bilan " +
          "topilgan " +
          "mulkni " +
          "olish " +
          "bilan " +
          "bog'liq " +
          "javobgarlikka " +
          "olib " +
          "kelishi " +
          "mumkin.",
        lawRefs: [
          { code: "JK", article: "171" },
          { code: "JK", article: "172" },
          { code: "JK", article: "168" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     8. Shaxsga qarshi jinoyatlar
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "shaxsga-qarshi",
    category: "criminal",
    level: "mid",
    order: 11080,
    title: "Shaxsga qarshi jinoyatlar",
    desc:
      "Hayot va sog'liqqa qarshi jinoyatlar, ularning belgilari " +
      "va jabrlanuvchining huquqlari.",
    objectives: [
      "Shaxsga qarshi jinoyatlar guruhini bilasiz",
      "Ayb shakli bu toifada nega hal qiluvchi ekanini tushunasiz",
      "Tibbiy hujjatlarning ahamiyatini bilasiz",
      "Jabrlanuvchi sifatida huquqlaringizni bilasiz",
    ],
    practicalSteps: [
      "Jismoniy zarar yetsa, DARHOL tibbiy muassasaga murojaat qiling",
      "Tibbiy hujjatlarni to'liq saqlang — ular asosiy dalil",
      "Jarohatlarni suratga oling va sanani qayd eting",
      "Arizani kechiktirmang: vaqt o'tishi bilan ekspertiza natijasi kuchsizlanadi",
    ],
    sections: [
      {
        heading: "Guruh tavsifi va ayb masalasi",
        text:
          "Shaxsga qarshi " +
          "jinoyatlar " +
          "Jinoyat " +
          "kodeksining " +
          "eng muhim " +
          "bo'limlaridan " +
          "biri, chunki " +
          "ular eng " +
          "oliy " +
          "qadriyatni — " +
          "inson " +
          "hayoti va " +
          "sog'lig'ini " +
          "himoya " +
          "qiladi.\n\n" +
          "Konstitutsiya " +
          "ham buni " +
          "ta'kidlaydi: " +
          "inson " +
          "hayotiga " +
          "suiqasd " +
          "eng og'ir " +
          "jinoyat " +
          "deb " +
          "belgilangan.\n\n" +
          "Bu " +
          "toifada " +
          "AYB " +
          "SHAKLI " +
          "hal " +
          "qiluvchi " +
          "ahamiyatga " +
          "ega.\n\n" +
          "Bir xil " +
          "oqibat " +
          "(masalan " +
          "sog'liqqa " +
          "zarar) " +
          "qasddan " +
          "yoki " +
          "ehtiyotsizlik " +
          "orqasida " +
          "yuzaga " +
          "kelganiga " +
          "qarab " +
          "butunlay " +
          "boshqa " +
          "modda " +
          "va " +
          "boshqa " +
          "javobgarlik " +
          "qo'llaniladi.\n\n" +
          "Shuning " +
          "uchun " +
          "himoyada " +
          "ham, " +
          "jabrlanuvchi " +
          "tomonda " +
          "ham " +
          "asosiy " +
          "savol: " +
          "ayb " +
          "qanday " +
          "shaklda " +
          "edi.\n\n" +
          "Ikkinchi " +
          "muhim " +
          "masala — " +
          "OG'IRLIK " +
          "DARAJASI. " +
          "Sog'liqqa " +
          "yetkazilgan " +
          "zarar " +
          "darajasi " +
          "tibbiy " +
          "ekspertiza " +
          "bilan " +
          "belgilanadi " +
          "va u " +
          "tasnifga " +
          "bevosita " +
          "ta'sir " +
          "qiladi.\n\n" +
          "Aynan " +
          "shu " +
          "sababdan " +
          "tibbiy " +
          "hujjatlar " +
          "eng " +
          "muhim " +
          "dalil " +
          "hisoblanadi.",
        example:
          "Jabrlanuvchi " +
          "shifokorga " +
          "murojaat " +
          "qilmadi " +
          "va " +
          "faqat " +
          "bir " +
          "necha " +
          "kundan " +
          "keyin " +
          "ariza " +
          "berdi. " +
          "Ekspertiza " +
          "jarohat " +
          "darajasini " +
          "aniq " +
          "belgilay " +
          "olmadi — " +
          "bu " +
          "tasnifga " +
          "ta'sir " +
          "qildi.",
        keyPoints: [
          "Bu toifa inson hayoti va sog'lig'ini himoya qiladi",
          "AYB SHAKLI (qasd yoki ehtiyotsizlik) tasnifni butunlay o'zgartiradi",
          "Sog'liqqa zarar darajasi tibbiy ekspertiza bilan belgilanadi",
          "Tibbiy hujjatlar eng muhim dalil hisoblanadi",
        ],
        warning:
          "Tibbiy " +
          "yordamga " +
          "kech " +
          "murojaat " +
          "qilish " +
          "zarar " +
          "darajasini " +
          "aniqlashni " +
          "qiyinlashtiradi " +
          "va " +
          "ishga " +
          "bevosita " +
          "ta'sir " +
          "qiladi.",
        lawRefs: [
          { code: "JK", article: "97" },
          { code: "JK", article: "20" },
          { code: "KONS", article: "25" },
        ],
      },
      {
        heading: "Jabrlanuvchining huquqlari va zararni qoplash",
        text:
          "Jinoiy ishda " +
          "jabrlanuvchi " +
          "shunchaki " +
          "«guvoh» " +
          "emas — u " +
          "protsessual " +
          "maqomga " +
          "va " +
          "huquqlarga " +
          "ega.\n\n" +
          "Asosiy " +
          "huquqlar: " +
          "ish " +
          "materiallari " +
          "bilan " +
          "tanishish, " +
          "dalillar " +
          "taqdim " +
          "etish, " +
          "iltimosnoma " +
          "kiritish, " +
          "vakil " +
          "yordamidan " +
          "foydalanish, " +
          "qarorlar " +
          "ustidan " +
          "shikoyat " +
          "qilish.\n\n" +
          "ZARARNI " +
          "QOPLASH " +
          "alohida " +
          "va " +
          "amalda " +
          "eng " +
          "muhim " +
          "masala.\n\n" +
          "Jinoiy " +
          "ish " +
          "doirasida " +
          "fuqarolik " +
          "da'vosi " +
          "qo'yish " +
          "imkoniyati " +
          "mavjud. " +
          "Bu " +
          "qulay: " +
          "alohida " +
          "sud " +
          "jarayoni " +
          "boshlash " +
          "shart " +
          "emas.\n\n" +
          "Zarar " +
          "ikki " +
          "turda " +
          "bo'lishi " +
          "mumkin: " +
          "MULKIY " +
          "(davolanish " +
          "xarajatlari, " +
          "boy " +
          "berilgan " +
          "daromad) " +
          "va " +
          "MA'NAVIY " +
          "(jismoniy " +
          "va " +
          "ruhiy " +
          "azob).\n\n" +
          "Har " +
          "ikkisi " +
          "ham " +
          "asoslanishi " +
          "kerak: " +
          "chek, " +
          "retsept, " +
          "tibbiy " +
          "xulosa, " +
          "ish " +
          "haqi " +
          "ma'lumotnomasi.\n\n" +
          "Aybdorning " +
          "zararni " +
          "IXTIYORIY " +
          "qoplashi " +
          "unga " +
          "ham " +
          "foydali: " +
          "bu " +
          "yengillashtiruvchi " +
          "holat " +
          "hisoblanadi.\n\n" +
          "Shu " +
          "sababli " +
          "ko'p " +
          "holatda " +
          "kelishuv " +
          "ikki " +
          "tomon " +
          "uchun " +
          "ham " +
          "maqbul " +
          "yechim " +
          "bo'ladi.",
        example:
          "Jabrlanuvchi " +
          "davolanish " +
          "xarajatlarini " +
          "cheklarsiz " +
          "talab " +
          "qildi. " +
          "Hujjat " +
          "bo'lmagani " +
          "uchun " +
          "summani " +
          "asoslash " +
          "qiyin " +
          "bo'ldi — " +
          "har " +
          "bir " +
          "xarajatni " +
          "saqlash " +
          "zarur " +
          "edi.",
        keyPoints: [
          "Jabrlanuvchi protsessual maqomga va huquqlarga ega",
          "Jinoiy ish doirasida fuqarolik da'vosi qo'yish mumkin",
          "Zarar mulkiy va ma'naviy bo'ladi, ikkalasi ham asoslanishi kerak",
          "Zararni ixtiyoriy qoplash aybdor uchun yengillashtiruvchi holat",
        ],
        warning:
          "Ma'naviy " +
          "zarar " +
          "miqdorini " +
          "asossiz " +
          "yuqori " +
          "so'rash " +
          "da'voni " +
          "kuchsizlashtiradi. " +
          "Uni " +
          "real " +
          "oqibatlar " +
          "bilan " +
          "asoslang.",
        lawRefs: [
          { code: "JPK", article: "54" },
          { code: "FK2", article: "1022" },
          { code: "JK", article: "55" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     9. Korrupsiya va mansab jinoyatlari
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "korrupsiya",
    category: "criminal",
    level: "advanced",
    order: 11090,
    title: "Korrupsiya va mansab jinoyatlari",
    desc:
      "Pora olish va berish, vositachilik, mansab soxtakorligi va " +
      "mansabga sovuqqonlik bilan qarash.",
    objectives: [
      "Mansab jinoyatlari guruhini bilasiz",
      "Pora olish, berish va vositachilik farqini bilasiz",
      "Nodavlat tashkilotlardagi javobgarlikni bilasiz",
      "Pora talab qilinganda nima qilish kerakligini bilasiz",
    ],
    practicalSteps: [
      "Pora talab qilinsa, uni bermang — bu ikki tomon uchun ham javobgarlik",
      "Talab holatini qayd eting: sana, joy, kim, nima talab qildi",
      "Vakolatli organga murojaat qiling",
      "Rasmiy xizmatlar uchun to'lov faqat rasmiy rekvizitlar orqali amalga oshiriladi",
    ],
    sections: [
      {
        heading: "Pora bilan bog'liq jinoyatlar",
        text:
          "Korrupsiya bilan " +
          "bog'liq " +
          "jinoyatlar " +
          "guruhida " +
          "uchta asosiy " +
          "tarkib " +
          "bor va " +
          "ular " +
          "ALOHIDA " +
          "javobgarlikni " +
          "keltiradi.\n\n" +
          "PORA OLISH — " +
          "davlat " +
          "organi, " +
          "davlat " +
          "ishtirokidagi " +
          "tashkilot " +
          "yoki " +
          "fuqarolarning " +
          "o'zini " +
          "o'zi " +
          "boshqarish " +
          "organi " +
          "xodimining " +
          "o'z " +
          "xizmat " +
          "vazifasi " +
          "bilan " +
          "bog'liq " +
          "harakat " +
          "uchun " +
          "noqonuniy " +
          "moddiy " +
          "boylik " +
          "olishi.\n\n" +
          "PORA " +
          "BERISH — " +
          "shunday " +
          "boylikni " +
          "berish.\n\n" +
          "VOSITACHILIK " +
          "— pora " +
          "olish-berishda " +
          "vositachilik " +
          "qilish.\n\n" +
          "MUHIM " +
          "AMALIY " +
          "XULOSA: " +
          "pora " +
          "berish " +
          "ham " +
          "JINOYAT.\n\n" +
          "Ya'ni " +
          "«mendan " +
          "talab " +
          "qilishdi, " +
          "men " +
          "faqat " +
          "berdim» " +
          "degan " +
          "asos " +
          "javobgarlikdan " +
          "ozod " +
          "qilmaydi.\n\n" +
          "Boshqa " +
          "mansab " +
          "jinoyatlari: " +
          "MANSAB " +
          "SOXTAKORLIGI " +
          "(hujjatlarga " +
          "bila " +
          "turib " +
          "yolg'on " +
          "ma'lumot " +
          "kiritish) " +
          "va " +
          "MANSABGA " +
          "SOVUQQONLIK " +
          "BILAN " +
          "QARASH.\n\n" +
          "Nodavlat " +
          "tijorat " +
          "va " +
          "boshqa " +
          "nodavlat " +
          "tashkilotlardagi " +
          "mansabdor " +
          "shaxslar " +
          "uchun " +
          "ham " +
          "alohida " +
          "javobgarlik " +
          "nazarda " +
          "tutilgan.",
        example:
          "Fuqarodan " +
          "rasmiy " +
          "xizmat " +
          "uchun " +
          "«tezlashtirish» " +
          "evaziga " +
          "pul " +
          "talab " +
          "qilindi. " +
          "Uni " +
          "berish " +
          "muammoni " +
          "hal " +
          "qilmaydi, " +
          "balki " +
          "fuqaroni " +
          "ham " +
          "javobgarlik " +
          "doirasiga " +
          "kiritadi.",
        keyPoints: [
          "Uch alohida tarkib: pora olish, pora berish, vositachilik",
          "Pora BERISH ham jinoyat hisoblanadi",
          "«Mendan talab qilishdi» degan asos ozod qilmaydi",
          "Nodavlat tashkilotlar uchun ham alohida javobgarlik bor",
        ],
        warning:
          "Rasmiy " +
          "xizmat " +
          "uchun " +
          "«tezlashtirish » " +
          "to'lovi " +
          "degan " +
          "narsa " +
          "yo'q. " +
          "Har " +
          "qanday " +
          "to'lov " +
          "rasmiy " +
          "rekvizitlar " +
          "orqali " +
          "amalga " +
          "oshiriladi.",
        lawRefs: [
          { code: "JK", article: "210" },
          { code: "JK", article: "211" },
          { code: "JK", article: "212" },
          { code: "JK", article: "209" },
          { code: "JK", article: "207" },
          { code: "JK", article: "192-11" },
        ],
      },
      {
        heading: "Pora talab qilinganda nima qilish kerak",
        text:
          "Bu bo'lim " +
          "amaliy " +
          "yo'riqnoma.\n\n" +
          "BIRINCHI " +
          "QOIDA: " +
          "bermang. " +
          "Pora " +
          "berish " +
          "muammoni " +
          "hal " +
          "qilmaydi " +
          "va " +
          "sizni " +
          "ham " +
          "javobgarlik " +
          "ostiga " +
          "qo'yadi.\n\n" +
          "Bundan " +
          "tashqari " +
          "bir " +
          "marta " +
          "berilgan " +
          "pora " +
          "odatda " +
          "oxirgisi " +
          "bo'lmaydi.\n\n" +
          "IKKINCHI " +
          "QADAM: " +
          "talabni " +
          "rasmiy " +
          "yo'lga " +
          "burish. " +
          "«Bu " +
          "xizmat " +
          "uchun " +
          "rasmiy " +
          "to'lov " +
          "qancha " +
          "va " +
          "qaysi " +
          "rekvizitlarga " +
          "to'lanadi?» " +
          "degan " +
          "savol " +
          "ko'p " +
          "holatda " +
          "vaziyatni " +
          "o'zgartiradi.\n\n" +
          "UCHINCHI " +
          "QADAM: " +
          "rad " +
          "javobini " +
          "YOZMA " +
          "so'rash. " +
          "Rasmiy " +
          "hujjat " +
          "talab " +
          "qilinganda " +
          "noqonuniy " +
          "talab " +
          "ko'pincha " +
          "to'xtaydi.\n\n" +
          "TO'RTINCHI " +
          "QADAM: " +
          "vakolatli " +
          "organga " +
          "murojaat " +
          "qilish.\n\n" +
          "MUHIM: " +
          "o'zingiz " +
          "«dalil " +
          "yig'ish» " +
          "uchun " +
          "provokatsiya " +
          "uyushtirishga " +
          "urinmang " +
          "— bu " +
          "sizni " +
          "murakkab " +
          "huquqiy " +
          "holatga " +
          "solib " +
          "qo'yishi " +
          "mumkin.\n\n" +
          "To'g'ri " +
          "yo'l — " +
          "vaziyatni " +
          "qayd " +
          "etib " +
          "(sana, " +
          "joy, " +
          "shaxs, " +
          "talab " +
          "mazmuni) " +
          "vakolatli " +
          "organga " +
          "xabar " +
          "berish.\n\n" +
          "Qonun " +
          "ayrim " +
          "hollarda " +
          "ixtiyoriy " +
          "xabar " +
          "bergan " +
          "shaxs " +
          "uchun " +
          "yengilliklar " +
          "ham " +
          "nazarda " +
          "tutadi.",
        example:
          "Tadbirkordan " +
          "ruxsatnoma " +
          "uchun " +
          "noqonuniy " +
          "to'lov " +
          "talab " +
          "qilindi. " +
          "U " +
          "rasmiy " +
          "to'lov " +
          "rekvizitlarini " +
          "va " +
          "rad " +
          "javobini " +
          "yozma " +
          "so'radi. " +
          "Rasmiylashtirish " +
          "talabi " +
          "ko'p " +
          "holatda " +
          "noqonuniy " +
          "talabni " +
          "to'xtatadi.",
        keyPoints: [
          "Birinchi qoida — pora bermang",
          "Talabni rasmiy yo'lga buring: rekvizit va yozma rad javobini so'rang",
          "Vakolatli organga murojaat qiling",
          "O'zingiz provokatsiya uyushtirmang — bu holatingizni murakkablashtiradi",
        ],
        warning:
          "Vositachi " +
          "orqali " +
          "«masalani " +
          "hal " +
          "qilish» " +
          "takliflaridan " +
          "saqlaning: " +
          "vositachilik " +
          "ham " +
          "mustaqil " +
          "jinoyat " +
          "tarkibi.",
        lawRefs: [
          { code: "JK", article: "211" },
          { code: "JK", article: "212" },
          { code: "JK", article: "66" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     10. Jazoni ijro etish  (MAVJUD KALIT — kengaytirildi)
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "jazoni-ijro",
    category: "criminal",
    level: "advanced",
    order: 11100,
    title: "Jazoni ijro etish va mahkumlar huquqlari",
    desc:
      "Jazoni o'tash tartibi, mahkumning huquq va majburiyatlari, " +
      "murojaat qilish va rag'batlantirish choralari.",
    objectives: [
      "Jazoni ijro etish tizimining asoslarini bilasiz",
      "Mahkumning huquqlarini bilasiz",
      "Murojaat qilish imkoniyatlarini bilasiz",
      "Rag'batlantirish va jazo choralarini bilasiz",
    ],
    practicalSteps: [
      "Mahkumning huquqlari saqlanishini yodda tuting — u huquq subyekti bo'lib qoladi",
      "Murojaat qilish huquqidan foydalaning va nusxalarni saqlang",
      "Muddatidan ilgari ozod qilish shartlarini oldindan aniqlang",
      "Yaqinlaringiz bilan aloqa huquqlarini biling",
    ],
    sections: [
      {
        heading: "Jazoni ijro etish tizimi va huquqlar",
        text:
          "Jazoni ijro " +
          "etish Jinoyat-" +
          "ijroiya " +
          "kodeksi " +
          "bilan " +
          "tartibga " +
          "solinadi.\n\n" +
          "ASOSIY G'OYA: " +
          "mahkum " +
          "huquqlaridan " +
          "TO'LIQ " +
          "mahrum " +
          "bo'lmaydi. " +
          "U huquq " +
          "subyekti " +
          "bo'lib " +
          "qoladi va " +
          "faqat " +
          "hukm " +
          "bilan " +
          "belgilangan " +
          "cheklovlar " +
          "qo'llaniladi.\n\n" +
          "Konstitutsiya " +
          "bu yerda " +
          "ham amal " +
          "qiladi: " +
          "hech kim " +
          "qiynoqqa " +
          "solinishi " +
          "yoki " +
          "shafqatsiz, " +
          "insoniylikka " +
          "zid " +
          "muomalaga " +
          "duchor " +
          "etilishi " +
          "mumkin " +
          "emas — " +
          "bu " +
          "taqiq " +
          "istisnosiz " +
          "va u " +
          "jazoni " +
          "o'tash " +
          "davriga " +
          "ham " +
          "tegishli.\n\n" +
          "MAHKUMNING " +
          "HUQUQLARI " +
          "kodeksda " +
          "belgilangan: " +
          "shaxsiy " +
          "xavfsizlik, " +
          "sog'liqni " +
          "saqlash, " +
          "tibbiy " +
          "yordam, " +
          "murojaat " +
          "qilish, " +
          "yuridik " +
          "yordam " +
          "olish, " +
          "yaqinlari " +
          "bilan " +
          "aloqa.\n\n" +
          "MAJBURIYATLAR " +
          "ham " +
          "bor: " +
          "belgilangan " +
          "tartibga " +
          "rioya " +
          "qilish, " +
          "ma'muriyat " +
          "qonuniy " +
          "talablarini " +
          "bajarish.\n\n" +
          "Bu " +
          "muvozanat " +
          "muhim: " +
          "huquqlar " +
          "saqlanadi, " +
          "lekin " +
          "rejim " +
          "talablari " +
          "ham " +
          "bajarilishi " +
          "kerak.",
        example:
          "Mahkumning " +
          "tibbiy " +
          "yordam " +
          "olish " +
          "so'rovi " +
          "e'tiborsiz " +
          "qoldirildi. " +
          "Sog'liqni " +
          "saqlash " +
          "huquqi " +
          "jazoni " +
          "o'tash " +
          "davrida " +
          "ham " +
          "saqlanadi — " +
          "bu " +
          "murojaat " +
          "uchun " +
          "asos " +
          "bo'ladi.",
        keyPoints: [
          "Mahkum huquq subyekti bo'lib qoladi",
          "Faqat hukm bilan belgilangan cheklovlar qo'llaniladi",
          "Qiynoq va shafqatsiz muomala taqig'i istisnosiz amal qiladi",
          "Huquqlar bilan birga rejim majburiyatlari ham mavjud",
        ],
        warning:
          "Huquq " +
          "buzilishi " +
          "haqidagi " +
          "murojaatni " +
          "yozma " +
          "qiling " +
          "va " +
          "ro'yxatga " +
          "olinganini " +
          "tasdiqlang.",
        lawRefs: [
          { code: "JIK", article: "9" },
          { code: "JIK", article: "69" },
          { code: "KONS", article: "26" },
        ],
      },
      {
        heading: "Rag'batlantirish, jazo va ozod qilish",
        text:
          "Jazoni o'tash " +
          "davrida " +
          "mahkumning " +
          "xulq-atvori " +
          "huquqiy " +
          "ahamiyatga " +
          "ega.\n\n" +
          "RAG'BATLANTIRISH " +
          "CHORALARI " +
          "nazarda " +
          "tutilgan: " +
          "ijobiy " +
          "xulq-atvor " +
          "va " +
          "mehnatga " +
          "vijdonan " +
          "munosabat " +
          "uchun " +
          "yengilliklar " +
          "berilishi " +
          "mumkin.\n\n" +
          "INTIZOMIY " +
          "JAZO " +
          "CHORALARI " +
          "ham " +
          "belgilangan: " +
          "rejimni " +
          "buzganlik " +
          "uchun.\n\n" +
          "Bu ikki " +
          "mexanizm " +
          "birgalikda " +
          "ishlaydi " +
          "va " +
          "ular " +
          "eng " +
          "muhim " +
          "masalaga " +
          "— " +
          "MUDDATIDAN " +
          "ILGARI " +
          "OZOD " +
          "QILISHGA " +
          "bevosita " +
          "ta'sir " +
          "qiladi.\n\n" +
          "Jinoyat " +
          "kodeksi " +
          "muddatidan " +
          "ilgari " +
          "shartli " +
          "ozod " +
          "qilish " +
          "va " +
          "jazoni " +
          "yengilrog'i " +
          "bilan " +
          "almashtirish " +
          "imkoniyatlarini " +
          "nazarda " +
          "tutadi.\n\n" +
          "Ular " +
          "uchun " +
          "odatda " +
          "ikki " +
          "shart " +
          "kerak: " +
          "jazoning " +
          "belgilangan " +
          "qismini " +
          "o'tash " +
          "va " +
          "ijobiy " +
          "xulq-atvor.\n\n" +
          "Amaliy " +
          "xulosa " +
          "mahkum " +
          "va " +
          "uning " +
          "oilasi " +
          "uchun: " +
          "intizomiy " +
          "jazolar " +
          "kelajakdagi " +
          "ozod " +
          "qilish " +
          "imkoniyatini " +
          "kamaytiradi.\n\n" +
          "OZOD " +
          "QILISH " +
          "tartibi " +
          "va " +
          "ozod " +
          "qilingandan " +
          "keyingi " +
          "yordam " +
          "masalalari " +
          "ham " +
          "kodeksda " +
          "tartibga " +
          "solingan.",
        example:
          "Mahkum " +
          "jazoni " +
          "o'tash " +
          "davrida " +
          "ijobiy " +
          "tavsifga " +
          "ega " +
          "bo'ldi " +
          "va " +
          "intizomiy " +
          "jazosi " +
          "yo'q " +
          "edi. " +
          "Bu " +
          "muddatidan " +
          "ilgari " +
          "shartli " +
          "ozod " +
          "qilish " +
          "masalasini " +
          "ko'tarish " +
          "uchun " +
          "asosiy " +
          "shartlardan " +
          "biri.",
        keyPoints: [
          "Rag'batlantirish va intizomiy jazo choralari birgalikda ishlaydi",
          "Xulq-atvor muddatidan ilgari ozod qilishga bevosita ta'sir qiladi",
          "Shartlar: jazoning belgilangan qismini o'tash va ijobiy xulq-atvor",
          "Intizomiy jazolar ozod qilish imkoniyatini kamaytiradi",
        ],
        warning:
          "Muddatidan " +
          "ilgari " +
          "ozod " +
          "qilish " +
          "avtomatik " +
          "emas — " +
          "u " +
          "belgilangan " +
          "tartibda " +
          "ko'rib " +
          "chiqiladi " +
          "va " +
          "hujjatlar " +
          "tayyorlanishi " +
          "kerak.",
        lawRefs: [
          { code: "JIK", article: "163" },
          { code: "JIK", article: "164" },
          { code: "JIK", article: "111" },
          { code: "JK", article: "73" },
          { code: "JK", article: "74" },
        ],
      },
    ],
  },
];

module.exports = { LESSONS };
