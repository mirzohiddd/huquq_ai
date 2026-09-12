"use strict";
/**
 * MODUL 9 — SOLIQ VA TADBIRKORLIK (9 dars)
 *
 * Manbalar: Soliq kodeksi (SK, 500 modda), Budjet kodeksi (BK),
 * Fuqarolik kodeksi (yuridik shaxslar).
 *
 * ⚠️ HUQUQIY ANIQLIK bu modulda ayniqsa muhim: soliq stavkalari va
 * miqdorlari TEZ-TEZ o'zgaradi. Shu sababli darslarda hech qanday
 * FOIZ, STAVKA yoki SUMMA yozilmagan — faqat tizim, huquqlar va
 * jarayon tushuntiriladi. Aniq raqam kerak bo'lganda foydalanuvchi
 * Qonunlar kutubxonasidagi amaldagi matnga yo'naltiriladi.
 */

const LESSONS = [
  /* ═══════════════════════════════════════════════════════════════
     1. Soliq asoslari  (MAVJUD KALIT — kengaytirildi)
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "soliq-asoslari",
    category: "tax",
    level: "basic",
    order: 9010,
    title: "Soliq tizimi asoslari",
    desc:
      "Soliq nima, qanday prinsiplarga asoslanadi, soliq turlari " +
      "va soliq to'lovchining haqligi prezumpsiyasi.",
    objectives: [
      "Soliq va yig'im tushunchalarini farqlay olasiz",
      "Soliq solish prinsiplarini bilasiz",
      "Soliq to'lovchining haqligi prezumpsiyasini tushunasiz",
      "Soliq turlarini va maxsus rejimlarni bilasiz",
    ],
    practicalSteps: [
      "O'zingizga tegishli soliq turlarini aniqlang — bu birinchi qadam",
      "Soliq organining rasmiy shaxsiy kabinetidan foydalaning",
      "Qonun matnida noaniqlik bo'lsa, bu sizning foydangizga talqin qilinishini yodda tuting",
      "Amaldagi stavkalarni har doim rasmiy manbadan tekshiring — ular o'zgarib turadi",
    ],
    sections: [
      {
        heading: "Soliq, yig'im va soliq solish prinsiplari",
        text:
          "SOLIQ — Soliq kodeksida belgilangan, " +
          "davlat budjetiga majburiy tarzda " +
          "to'lanadigan to'lov. YIG'IM esa " +
          "odatda muayyan harakat yoki xizmat " +
          "bilan bog'liq bo'ladi.\n\n" +
          "Soliq to'g'risidagi qonunchilik " +
          "Soliq kodeksidan va unga muvofiq " +
          "qabul qilinadigan hujjatlardan " +
          "iborat.\n\n" +
          "SOLIQ SOLISH PRINSIPLARI tizimning " +
          "asosini tashkil etadi va ular " +
          "soliq to'lovchi uchun himoya " +
          "vositasi sifatida ishlaydi.\n\n" +
          "MAJBURIYLIK — soliq to'lash " +
          "majburiy.\n\n" +
          "ANIQLIK — soliqning barcha " +
          "elementlari aniq belgilanishi " +
          "kerak. Noaniq qoida asosida " +
          "majburiyat yuklash to'g'ri " +
          "emas.\n\n" +
          "ADOLATLILIK — soliqlar va " +
          "yig'imlar kamsitish " +
          "xususiyatiga ega bo'lmasligi " +
          "kerak.\n\n" +
          "OSHKORALIK — soliq " +
          "qonunchiligi hujjatlari " +
          "rasman e'lon qilinishi " +
          "shart. E'lon qilinmagan " +
          "hujjat asosida " +
          "majburiyat " +
          "yuklanmaydi.\n\n" +
          "HAMKORLIK — soliq " +
          "organlari soliq " +
          "to'lovchilar bilan " +
          "hamkorlik qilishi " +
          "kerak.\n\n" +
          "Konstitutsiya ham shu " +
          "yo'nalishda: soliqlar " +
          "qonun bilan " +
          "belgilanishi va " +
          "adolatli bo'lishi " +
          "kerak.",
        example:
          "Fuqarodan qonunda " +
          "ko'rsatilmagan " +
          "«yig'im» talab " +
          "qilindi. Soliq va " +
          "yig'im faqat " +
          "qonun bilan " +
          "belgilanadi — " +
          "shuning uchun " +
          "bunday talabning " +
          "asosini so'rash " +
          "to'liq o'rinli.",
        keyPoints: [
          "Soliq va yig'im faqat Soliq kodeksi bilan belgilanadi",
          "Prinsiplar: majburiylik, aniqlik, adolatlilik, oshkoralik, hamkorlik",
          "Soliqning barcha elementlari aniq belgilanishi kerak",
          "E'lon qilinmagan hujjat asosida majburiyat yuklanmaydi",
        ],
        warning:
          "Soliq stavkalari va " +
          "imtiyozlari tez-tez " +
          "o'zgaradi. Har " +
          "yili amaldagi " +
          "qoidalarni rasmiy " +
          "manbadan " +
          "tekshiring.",
        lawRefs: [
          { code: "SK", article: "2" },
          { code: "SK", article: "7" },
          { code: "SK", article: "10" },
          { code: "SK", article: "12" },
          { code: "SK", article: "16" },
          { code: "KONS", article: "63" },
        ],
      },
      {
        heading: "Haqlik prezumpsiyasi va soliq turlari",
        text:
          "SOLIQ TO'LOVCHINING HAQLIGI " +
          "PREZUMPSIYASI — bu modulning " +
          "eng foydali qoidasi.\n\n" +
          "Uning mohiyati: soliq " +
          "to'g'risidagi qonunchilik " +
          "hujjatlaridagi bartaraf " +
          "etib bo'lmaydigan " +
          "ziddiyatlar va " +
          "noaniqliklar SOLIQ " +
          "TO'LOVCHI foydasiga " +
          "talqin qilinadi.\n\n" +
          "Amaliy ma'nosi katta: " +
          "agar qoida ikki xil " +
          "tushunilishi mumkin " +
          "bo'lsa, siz o'zingiz " +
          "uchun qulay talqinni " +
          "asoslashga " +
          "haqlisiz.\n\n" +
          "Bu prinsip nizoda " +
          "kuchli argument " +
          "bo'ladi va uni " +
          "bilish soliq " +
          "organi bilan " +
          "muloqotda " +
          "foydali.\n\n" +
          "SOLIQ TURLARI " +
          "qonunda sanalgan. " +
          "Ular umumiy " +
          "tarzda ikki " +
          "guruhga " +
          "bo'linadi: " +
          "yuridik " +
          "shaxslarga " +
          "tegishli " +
          "soliqlar va " +
          "jismoniy " +
          "shaxslarga " +
          "tegishli " +
          "soliqlar, " +
          "ba'zilari " +
          "esa " +
          "ikkalasiga " +
          "ham " +
          "tegishli.\n\n" +
          "MAXSUS SOLIQ " +
          "REJIMLARI ham " +
          "mavjud: soliq " +
          "to'lovchilarning " +
          "ayrim " +
          "toifalari " +
          "uchun " +
          "soddalashtirilgan " +
          "tartib " +
          "belgilanishi " +
          "mumkin.\n\n" +
          "Bu kichik " +
          "biznes " +
          "uchun " +
          "muhim: " +
          "to'g'ri " +
          "rejimni " +
          "tanlash " +
          "soliq " +
          "yukini " +
          "sezilarli " +
          "o'zgartiradi.\n\n" +
          "BITIMLARNING " +
          "IQTISODIY " +
          "MAZMUNI " +
          "prinsipi " +
          "ham " +
          "muhim: " +
          "soliq " +
          "solishda " +
          "bitimning " +
          "haqiqiy " +
          "mazmuni " +
          "hisobga " +
          "olinadi.",
        example:
          "Soliq organi " +
          "qoidani bir " +
          "xil, soliq " +
          "to'lovchi " +
          "boshqacha " +
          "tushundi va " +
          "matn " +
          "haqiqatan " +
          "noaniq edi. " +
          "Bunday " +
          "holatda " +
          "haqlik " +
          "prezumpsiyasi " +
          "soliq " +
          "to'lovchi " +
          "foydasiga " +
          "ishlaydi.",
        keyPoints: [
          "Noaniqlik va ziddiyatlar SOLIQ TO'LOVCHI foydasiga talqin qilinadi",
          "Bu nizoda kuchli argument bo'ladi",
          "Soliq turlari qonunda sanalgan",
          "Maxsus rejimlar kichik biznes uchun soliq yukini o'zgartiradi",
        ],
        warning:
          "Haqlik " +
          "prezumpsiyasi " +
          "har qanday " +
          "e'tirozni " +
          "oqlamaydi. " +
          "U faqat " +
          "haqiqatan " +
          "noaniq " +
          "qoidalarga " +
          "nisbatan " +
          "qo'llanadi.",
        lawRefs: [
          { code: "SK", article: "13" },
          { code: "SK", article: "17" },
          { code: "SK", article: "18" },
          { code: "SK", article: "14" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     2. Soliq to'lovchining huquqlari
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "soliq-tolovchi-huquqlari",
    category: "tax",
    level: "basic",
    order: 9020,
    title: "Soliq to'lovchining huquq va majburiyatlari",
    desc:
      "Soliq to'lovchi nimalarga haqli, nima qilishi shart va " +
      "soliq organlarining vakolatlari qanday.",
    objectives: [
      "Soliq to'lovchining huquqlarini bilasiz",
      "Majburiyatlaringizni aniq bilasiz",
      "Soliq organlarining huquq va majburiyatlarini bilasiz",
      "Vakil orqali ish yuritish imkoniyatini bilasiz",
    ],
    practicalSteps: [
      "Soliq organidan bepul axborot va tushuntirish olish huquqingizdan foydalaning",
      "Barcha murojaat va javoblarni yozma shaklda saqlang",
      "Soliq organi harakatlari bilan rozi bo'lmasangiz, shikoyat qilish huquqingiz bor",
      "Murakkab masalada vakil (buxgalter, maslahatchi) jalb qilishingiz mumkin",
    ],
    sections: [
      {
        heading: "Soliq to'lovchining huquqlari",
        text:
          "Soliq to'lovchilar — zimmasiga " +
          "belgilangan soliqlar hamda " +
          "yig'imlarni to'lash " +
          "majburiyati yuklangan " +
          "shaxslar.\n\n" +
          "Ularning HUQUQLARI qonunda " +
          "sanalgan va bu ro'yxatni " +
          "bilish soliq organi bilan " +
          "muloqotni butunlay " +
          "o'zgartiradi.\n\n" +
          "Asosiy huquqlar odatda " +
          "quyidagilarni qamraydi: " +
          "soliq organlaridan " +
          "amaldagi soliqlar " +
          "to'g'risida bepul " +
          "axborot olish; soliq " +
          "qonunchiligini " +
          "qo'llash bo'yicha " +
          "tushuntirishlar olish; " +
          "imtiyozlardan " +
          "foydalanish; ortiqcha " +
          "to'langan summalarni " +
          "hisobga olish yoki " +
          "qaytarish; soliq " +
          "tekshiruvi " +
          "materiallari " +
          "bilan tanishish; " +
          "soliq organlari " +
          "va ularning " +
          "mansabdor " +
          "shaxslari " +
          "qarorlari hamda " +
          "harakatlari " +
          "ustidan " +
          "SHIKOYAT " +
          "QILISH.\n\n" +
          "Oxirgi huquq " +
          "ayniqsa muhim: " +
          "soliq organi " +
          "qarori " +
          "e'tirozsiz " +
          "emas.\n\n" +
          "VAKILLIK: soliq " +
          "to'lovchi o'z " +
          "vakillari " +
          "orqali ish " +
          "yuritishi " +
          "mumkin. " +
          "Murakkab " +
          "masalalarda " +
          "bu " +
          "amaliy " +
          "yechim.\n\n" +
          "SHAXSIY " +
          "KABINET — " +
          "soliq " +
          "organining " +
          "rasmiy " +
          "veb-saytidagi " +
          "elektron " +
          "xizmat. " +
          "U orqali " +
          "hujjat " +
          "almashish " +
          "va " +
          "ma'lumot " +
          "olish " +
          "mumkin.",
        example:
          "Soliq " +
          "to'lovchi " +
          "qonun " +
          "qoidasini " +
          "qanday " +
          "qo'llashni " +
          "bilmadi. " +
          "Taxmin " +
          "qilish " +
          "o'rniga " +
          "soliq " +
          "organidan " +
          "yozma " +
          "tushuntirish " +
          "so'radi — " +
          "bu " +
          "keyinchalik " +
          "himoya " +
          "vositasi " +
          "ham " +
          "bo'ladi.",
        keyPoints: [
          "Soliq to'lovchining huquqlari qonunda sanalgan",
          "Bepul axborot va yozma tushuntirish olish huquqi bor",
          "Soliq organi qarorlari va harakatlari ustidan shikoyat qilish mumkin",
          "Vakil orqali ish yuritish va shaxsiy kabinetdan foydalanish mumkin",
        ],
        warning:
          "Og'zaki " +
          "tushuntirishga " +
          "tayanib " +
          "qaror " +
          "qabul " +
          "qilmang. " +
          "Yozma " +
          "javob " +
          "keyin " +
          "sizni " +
          "himoya " +
          "qiladi.",
        lawRefs: [
          { code: "SK", article: "20" },
          { code: "SK", article: "21" },
          { code: "SK", article: "24" },
          { code: "SK", article: "56" },
        ],
      },
      {
        heading: "Majburiyatlar va soliq organlari",
        text:
          "Soliq to'lovchilarning " +
          "MAJBURIYATLARI ham " +
          "qonunda belgilangan.\n\n" +
          "Asosiylari: belgilangan " +
          "soliqlar va " +
          "yig'imlarni to'lash; " +
          "hisobga qo'yilish; " +
          "hisob hujjatlarini " +
          "yuritish; soliq " +
          "hisobotini taqdim " +
          "etish; hujjatlarni " +
          "belgilangan " +
          "muddat davomida " +
          "saqlash; soliq " +
          "organlarining " +
          "qonuniy " +
          "talablarini " +
          "bajarish.\n\n" +
          "Bu majburiyatlar " +
          "ro'yxati amalda " +
          "muhim: ularning " +
          "har biri " +
          "buzilganda " +
          "alohida " +
          "javobgarlik " +
          "yuzaga " +
          "kelishi " +
          "mumkin.\n\n" +
          "SOLIQ " +
          "ORGANLARINING " +
          "HUQUQLARI: " +
          "soliq " +
          "to'lovchilardan " +
          "va uchinchi " +
          "shaxslardan " +
          "hujjatlarni " +
          "talab " +
          "qilib " +
          "olish, " +
          "tekshiruvlar " +
          "o'tkazish " +
          "va boshqa " +
          "vakolatlar.\n\n" +
          "Lekin ularning " +
          "MAJBURIYATLARI " +
          "ham bor va " +
          "bu ko'pincha " +
          "unutiladi: " +
          "qonunchilikka " +
          "rioya etish, " +
          "soliq " +
          "to'lovchilarning " +
          "huquqlarini " +
          "hurmat " +
          "qilish, " +
          "axborot " +
          "berish, " +
          "sirni " +
          "saqlash.\n\n" +
          "Muvozanat " +
          "shundaki: " +
          "soliq " +
          "organi " +
          "vakolatli, " +
          "lekin " +
          "uning " +
          "vakolati " +
          "ham " +
          "qonun " +
          "bilan " +
          "cheklangan.\n\n" +
          "Amaliy " +
          "xulosa: " +
          "har " +
          "qanday " +
          "talab " +
          "qo'yilganda " +
          "«bu " +
          "qaysi " +
          "normaga " +
          "asoslangan?» " +
          "degan " +
          "savol " +
          "o'rinli.",
        example:
          "Soliq " +
          "organi " +
          "hujjatlarni " +
          "talab " +
          "qildi, " +
          "lekin " +
          "asosini " +
          "ko'rsatmadi. " +
          "Soliq " +
          "to'lovchi " +
          "talabning " +
          "huquqiy " +
          "asosini " +
          "va " +
          "hujjat " +
          "ro'yxatini " +
          "yozma " +
          "so'rashga " +
          "haqli.",
        keyPoints: [
          "Majburiyatlar: to'lash, hisobga qo'yilish, hisobot, hujjatlarni saqlash",
          "Har bir majburiyat buzilishi alohida javobgarlik keltirishi mumkin",
          "Soliq organlarining vakolati ham qonun bilan cheklangan",
          "«Bu qaysi normaga asoslangan?» — har doim o'rinli savol",
        ],
        warning:
          "Soliq " +
          "organi " +
          "talabini " +
          "e'tiborsiz " +
          "qoldirish " +
          "holatni " +
          "og'irlashtiradi. " +
          "Rozi " +
          "bo'lmasangiz " +
          "ham " +
          "RASMIY " +
          "e'tiroz " +
          "bildiring.",
        lawRefs: [
          { code: "SK", article: "22" },
          { code: "SK", article: "26" },
          { code: "SK", article: "27" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     3. Soliq majburiyati
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "soliq-majburiyati",
    category: "tax",
    level: "mid",
    order: 9030,
    title: "Soliq majburiyati: bajarish, muddat va qarz",
    desc:
      "Soliq majburiyati qachon yuzaga keladi va tugaydi, " +
      "muddatni o'zgartirish, ortiqcha to'langan soliqni qaytarish.",
    objectives: [
      "Soliq majburiyati qanday bajarilishini bilasiz",
      "Muddatni kechiktirish yoki bo'lib to'lash imkoniyatini bilasiz",
      "Ortiqcha to'langan soliqni qaytarish tartibini bilasiz",
      "Soliq qarzi bo'yicha da'vo muddatlarini bilasiz",
    ],
    practicalSteps: [
      "To'lov muddatlarini kalendarga qo'ying — kechikish penya keltiradi",
      "To'lash imkoni bo'lmasa, muddatni o'zgartirish uchun OLDINDAN murojaat qiling",
      "Ortiqcha to'lov borligini tekshiring: uni qaytarish yoki hisobga o'tkazish mumkin",
      "Barcha to'lov hujjatlarini saqlang",
    ],
    sections: [
      {
        heading: "Majburiyatni bajarish va muddatni o'zgartirish",
        text:
          "SOLIQ MAJBURIYATI — soliq " +
          "qonunchiligi bilan soliq " +
          "to'lovchi zimmasiga " +
          "yuklangan majburiyat.\n\n" +
          "Uni bajarish tartibi va " +
          "muddati qonunda " +
          "belgilangan. Soliq " +
          "to'lovchi majburiyatini " +
          "mustaqil bajaradi — " +
          "ya'ni eslatma kutish " +
          "shart emas.\n\n" +
          "MAJBURIYATNING " +
          "TUGATILISHI asoslari " +
          "ham belgilangan: " +
          "to'lash, qonunda " +
          "ko'rsatilgan boshqa " +
          "holatlar.\n\n" +
          "Alohida holatlar " +
          "tartibga solingan: " +
          "yuridik shaxs " +
          "tugatilganda yoki " +
          "qayta tashkil " +
          "etilganda, " +
          "jismoniy shaxs " +
          "vafot etganda, " +
          "bedarak " +
          "yo'qolgan yoki " +
          "muomalaga " +
          "layoqatsiz " +
          "deb topilganda " +
          "majburiyat " +
          "qanday " +
          "bajarilishi.\n\n" +
          "MUDDATNI " +
          "O'ZGARTIRISH " +
          "amalda juda " +
          "foydali " +
          "mexanizm. " +
          "Qonun " +
          "soliqlarni " +
          "to'lash " +
          "muddatlarini " +
          "o'zgartirish " +
          "shartlarini " +
          "belgilaydi: " +
          "kechiktirish " +
          "yoki " +
          "bo'lib-bo'lib " +
          "to'lash " +
          "imkoniyati.\n\n" +
          "Bu " +
          "imkoniyat " +
          "OLDINDAN " +
          "murojaat " +
          "qilishni " +
          "talab " +
          "qiladi. " +
          "Muddat " +
          "o'tib " +
          "ketgach " +
          "murojaat " +
          "qilish " +
          "penyani " +
          "to'xtatmaydi.\n\n" +
          "Muddatni " +
          "o'zgartirishni " +
          "ISTISNO " +
          "etadigan " +
          "holatlar " +
          "ham " +
          "belgilangan.",
        example:
          "Tadbirkor " +
          "vaqtinchalik " +
          "moliyaviy " +
          "qiyinchilikka " +
          "tushdi. " +
          "To'lovni " +
          "shunchaki " +
          "to'xtatib " +
          "qo'yish " +
          "o'rniga " +
          "muddatni " +
          "o'zgartirish " +
          "uchun " +
          "murojaat " +
          "qilish " +
          "ancha " +
          "to'g'ri " +
          "yo'l — " +
          "bu " +
          "penya " +
          "yig'ilishining " +
          "oldini " +
          "oladi.",
        keyPoints: [
          "Soliq to'lovchi majburiyatini MUSTAQIL bajaradi",
          "Majburiyatning tugatilishi asoslari qonunda belgilangan",
          "Muddatni kechiktirish yoki bo'lib to'lash imkoniyati mavjud",
          "Bu imkoniyat OLDINDAN murojaat qilishni talab qiladi",
        ],
        warning:
          "To'lovni " +
          "shunchaki " +
          "to'xtatib " +
          "qo'yish " +
          "eng " +
          "yomon " +
          "tanlov: " +
          "penya " +
          "yig'iladi " +
          "va " +
          "majburiy " +
          "undirish " +
          "choralari " +
          "qo'llaniladi.",
        lawRefs: [
          { code: "SK", article: "85" },
          { code: "SK", article: "86" },
          { code: "SK", article: "87" },
          { code: "SK", article: "97" },
          { code: "SK", article: "98" },
          { code: "SK", article: "100" },
        ],
      },
      {
        heading: "Ortiqcha to'lov, qarz va da'vo muddatlari",
        text:
          "ORTIQCHA TO'LANGAN yoki " +
          "ortiqcha undirilgan " +
          "soliqlarni hisobga " +
          "olish hamda qaytarish " +
          "tartibi qonunda " +
          "belgilangan.\n\n" +
          "Bu huquq ko'pincha " +
          "bilinmaydi: agar " +
          "kerakligidan " +
          "ko'proq to'lagan " +
          "bo'lsangiz, summa " +
          "yo'qolmaydi — " +
          "uni qaytarib " +
          "olish yoki " +
          "keyingi " +
          "to'lovlarga " +
          "hisobga " +
          "o'tkazish " +
          "mumkin.\n\n" +
          "Ortiqcha " +
          "to'langan va " +
          "ortiqcha " +
          "UNDIRILGAN " +
          "soliq " +
          "uchun " +
          "tartib " +
          "biroz " +
          "farq " +
          "qiladi — " +
          "ikkinchisida " +
          "soliq " +
          "organi " +
          "xatosi " +
          "bo'ladi.\n\n" +
          "TA'MINOT " +
          "USULLARI: " +
          "soliq " +
          "majburiyatining " +
          "bajarilishini " +
          "ta'minlash " +
          "usullari " +
          "belgilangan — " +
          "mol-mulk " +
          "garovi, " +
          "kafillik, " +
          "bank " +
          "kafolati, " +
          "penya.\n\n" +
          "PENYA " +
          "to'lov " +
          "muddati " +
          "buzilganda " +
          "hisoblanadi " +
          "va u " +
          "vaqt " +
          "o'tgan " +
          "sari " +
          "o'sib " +
          "boradi.\n\n" +
          "Qattiqroq " +
          "chora — " +
          "MOL-MULKNI " +
          "XATLASH: " +
          "u soliq " +
          "organi " +
          "tomonidan " +
          "belgilangan " +
          "hollarda " +
          "qo'llaniladi.\n\n" +
          "DA'VO " +
          "MUDDATLARI: " +
          "soliq " +
          "majburiyati " +
          "bo'yicha " +
          "da'vo " +
          "qilish " +
          "muddatlari " +
          "belgilangan. " +
          "Ya'ni " +
          "soliq " +
          "organi " +
          "ham " +
          "cheksiz " +
          "muddatda " +
          "talab " +
          "qo'ya " +
          "olmaydi.\n\n" +
          "Undirilishi " +
          "umidsiz " +
          "deb " +
          "e'tirof " +
          "etilgan " +
          "qarz " +
          "instituti " +
          "ham " +
          "mavjud.",
        example:
          "Soliq " +
          "to'lovchi " +
          "hisobotni " +
          "to'g'rilagach " +
          "ortiqcha " +
          "to'lov " +
          "aniqlandi. " +
          "U " +
          "summani " +
          "qaytarish " +
          "yoki " +
          "keyingi " +
          "davr " +
          "to'lovlariga " +
          "hisobga " +
          "o'tkazishni " +
          "so'rashga " +
          "haqli.",
        keyPoints: [
          "Ortiqcha to'langan soliqni qaytarish yoki hisobga o'tkazish mumkin",
          "Ta'minot usullari: garov, kafillik, bank kafolati, penya",
          "Penya vaqt o'tgan sari o'sib boradi",
          "Soliq majburiyati bo'yicha da'vo muddatlari belgilangan",
        ],
        warning:
          "Penya " +
          "asosiy " +
          "qarzdan " +
          "ham " +
          "katta " +
          "bo'lib " +
          "ketishi " +
          "mumkin. " +
          "Kichik " +
          "qarzni " +
          "ham " +
          "kechiktirmang.",
        lawRefs: [
          { code: "SK", article: "103" },
          { code: "SK", article: "104" },
          { code: "SK", article: "105" },
          { code: "SK", article: "106" },
          { code: "SK", article: "110" },
          { code: "SK", article: "88" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     4. Soliq hisoboti
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "soliq-hisoboti",
    category: "tax",
    level: "mid",
    order: 9040,
    title: "Hisobga olish va soliq hisoboti",
    desc:
      "Hisob hujjatlari, soliq hisobotini tuzish va taqdim etish, " +
      "xatoni to'g'rilash va saqlash muddatlari.",
    objectives: [
      "Hisob hujjatlariga qo'yiladigan talablarni bilasiz",
      "Soliq hisoboti qanday taqdim etilishini bilasiz",
      "Xato topilganda uni qanday to'g'rilashni bilasiz",
      "Hujjatlarni saqlash muddatini bilasiz",
    ],
    practicalSteps: [
      "Hisob hujjatlarini tartibli yuriting: bu tekshiruvda asosiy himoyangiz",
      "Hisobotni muddat ichida taqdim eting, hatto faoliyat bo'lmasa ham",
      "Xato topsangiz, tuzatishni O'ZINGIZ kiriting — bu holatni yengillashtiradi",
      "Hujjatlarni belgilangan muddat davomida saqlang",
    ],
    sections: [
      {
        heading: "Hisob hujjatlari va hisobot",
        text:
          "Soliq solish maqsadlarida " +
          "hisobga olish va hisob " +
          "hujjatlari qonunda " +
          "tartibga solingan.\n\n" +
          "Hisob hujjatlariga " +
          "qo'yiladigan talablar " +
          "belgilangan: ular " +
          "qog'ozda va (yoki) " +
          "elektron shaklda " +
          "tuzilishi mumkin.\n\n" +
          "Nima uchun bu muhim: " +
          "soliq tekshiruvida " +
          "asosiy dalil aynan " +
          "hisob " +
          "hujjatlaridir. " +
          "Hujjat tartibli " +
          "bo'lsa, tekshiruv " +
          "tez va " +
          "muammosiz " +
          "o'tadi.\n\n" +
          "SOLIQ HISOBOTI " +
          "har bir soliq " +
          "turi bo'yicha " +
          "shakllantiriladi " +
          "va tuziladi.\n\n" +
          "TAQDIM ETISH " +
          "tartibi " +
          "belgilangan: " +
          "hisobot " +
          "soliq " +
          "to'lovchi " +
          "hisobga " +
          "olingan " +
          "joyda " +
          "taqdim " +
          "etiladi.\n\n" +
          "Muhim " +
          "amaliy " +
          "qoida: " +
          "faoliyat " +
          "yuritilmagan " +
          "davr " +
          "uchun " +
          "ham " +
          "hisobot " +
          "topshirish " +
          "talabi " +
          "bo'lishi " +
          "mumkin. " +
          "«Ish " +
          "bo'lmadi, " +
          "demak " +
          "hisobot " +
          "ham " +
          "kerak " +
          "emas» " +
          "degan " +
          "taxmin " +
          "xato.\n\n" +
          "SAQLASH " +
          "MUDDATI: " +
          "soliq " +
          "to'lovchilar " +
          "va soliq " +
          "agentlari " +
          "hujjatlarni " +
          "belgilangan " +
          "muddat " +
          "davomida " +
          "saqlashi " +
          "shart.",
        example:
          "Tadbirkor " +
          "faoliyat " +
          "yuritmagani " +
          "uchun " +
          "hisobot " +
          "topshirmadi. " +
          "Keyinchalik " +
          "unga " +
          "hisobotni " +
          "taqdim " +
          "etmaganlik " +
          "uchun " +
          "javobgarlik " +
          "qo'llanildi — " +
          "faoliyatsizlik " +
          "hisobotdan " +
          "ozod " +
          "qilmaydi.",
        keyPoints: [
          "Hisob hujjatlari qog'ozda va (yoki) elektron shaklda yuritiladi",
          "Tekshiruvda asosiy dalil — hisob hujjatlari",
          "Hisobot hisobga olingan joyda taqdim etiladi",
          "Faoliyat bo'lmagan davr uchun ham hisobot talab qilinishi mumkin",
        ],
        warning:
          "Hujjatlarni " +
          "muddatidan " +
          "oldin " +
          "yo'q " +
          "qilish " +
          "tekshiruvda " +
          "sizni " +
          "himoyasiz " +
          "qoldiradi " +
          "va " +
          "alohida " +
          "javobgarlik " +
          "asosi " +
          "bo'lishi " +
          "mumkin.",
        lawRefs: [
          { code: "SK", article: "76" },
          { code: "SK", article: "79" },
          { code: "SK", article: "81" },
          { code: "SK", article: "82" },
          { code: "SK", article: "84" },
        ],
      },
      {
        heading: "Xatoni to'g'rilash",
        text:
          "Soliq hisobotida xato " +
          "topilishi normal " +
          "holat. Muhimi — " +
          "unga qanday " +
          "munosabatda " +
          "bo'lish.\n\n" +
          "Qonun o'zi ilgari " +
          "taqdim etgan " +
          "soliq hisobotida " +
          "xatolikni " +
          "aniqlagan soliq " +
          "to'lovchiga " +
          "O'ZGARTIRISH " +
          "KIRITISH " +
          "imkoniyatini " +
          "beradi.\n\n" +
          "Bu mexanizmning " +
          "amaliy qiymati " +
          "juda katta.\n\n" +
          "Agar xatoni " +
          "SIZ " +
          "topib, " +
          "o'zingiz " +
          "tuzatsangiz, " +
          "holat " +
          "butunlay " +
          "boshqacha " +
          "baholanadi.\n\n" +
          "Agar xatoni " +
          "tekshiruv " +
          "topsa, " +
          "oqibatlar " +
          "ancha " +
          "og'irroq " +
          "bo'ladi: " +
          "qo'shimcha " +
          "hisoblash, " +
          "penya va " +
          "javobgarlik.\n\n" +
          "Shu " +
          "sababli " +
          "amaliy " +
          "strategiya " +
          "aniq: " +
          "hisobotni " +
          "davriy " +
          "ravishda " +
          "o'zingiz " +
          "tekshirib " +
          "boring va " +
          "xato " +
          "topilsa " +
          "darhol " +
          "tuzating.\n\n" +
          "Buni " +
          "kechiktirish " +
          "faqat " +
          "penyani " +
          "oshiradi.\n\n" +
          "Shuningdek " +
          "«balki " +
          "sezilmas» " +
          "degan " +
          "umid " +
          "asossiz: " +
          "elektron " +
          "tizimlar " +
          "nomuvofiqliklarni " +
          "avtomatik " +
          "aniqlaydi.",
        example:
          "Buxgalter " +
          "o'tgan " +
          "davr " +
          "hisobotida " +
          "xato " +
          "topdi. " +
          "Tuzatish " +
          "kiritib, " +
          "farqni " +
          "to'lash " +
          "tekshiruvni " +
          "kutishdan " +
          "ancha " +
          "yaxshi: " +
          "bu " +
          "javobgarlik " +
          "masalasini " +
          "yengillashtiradi.",
        keyPoints: [
          "Taqdim etilgan hisobotga o'zgartirish kiritish mumkin",
          "Xatoni O'ZINGIZ tuzatish holatni sezilarli yengillashtiradi",
          "Tekshiruv topgan xato ancha og'irroq oqibat keltiradi",
          "Kechiktirish faqat penyani oshiradi",
        ],
        warning:
          "«Sezilmas» " +
          "degan " +
          "umidga " +
          "tayanmang: " +
          "elektron " +
          "tizimlar " +
          "nomuvofiqlikni " +
          "avtomatik " +
          "aniqlaydi.",
        lawRefs: [
          { code: "SK", article: "83" },
          { code: "SK", article: "110" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     5. Soliq tekshiruvi
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "soliq-tekshiruvi",
    category: "tax",
    level: "advanced",
    order: 9050,
    title: "Soliq tekshiruvi: huquqlaringiz",
    desc:
      "Soliq nazorati shakllari, tekshiruv turlari, mansabdor " +
      "shaxslarning vakolatlari va tekshiruv paytidagi huquqlaringiz.",
    objectives: [
      "Soliq nazorati shakllarini va tekshiruv turlarini bilasiz",
      "Tekshiruvchining vakolatlarini va ularning chegarasini bilasiz",
      "Tekshiruv paytidagi huquqlaringizni bilasiz",
      "Natijalar qanday rasmiylashtirilishini bilasiz",
    ],
    practicalSteps: [
      "Tekshiruv boshlanganda uning asosini va turini aniqlashtiring",
      "Hujjatlarni ro'yxat asosida va tilxat bilan topshiring",
      "Bayonnomalar bilan tanishing va rozi bo'lmagan qismga izoh yozing",
      "Natijalar bilan tanishish va e'tiroz bildirish huquqingizdan foydalaning",
    ],
    sections: [
      {
        heading: "Nazorat shakllari va tekshiruv turlari",
        text:
          "SOLIQ NAZORATI — vakolatli " +
          "organlarning soliq " +
          "to'lovchilar faoliyatini " +
          "nazorat qilishi.\n\n" +
          "Nazorat SHAKLLARI qonunda " +
          "belgilangan va soliq " +
          "tekshiruvlari ulardan " +
          "biri.\n\n" +
          "TEKSHIRUV TURLARI " +
          "farqlanadi va bu " +
          "farqni bilish " +
          "muhim.\n\n" +
          "KAMERAL SOLIQ " +
          "TEKSHIRUVI — soliq " +
          "to'lovchi taqdim " +
          "etgan hisobot va " +
          "hujjatlar asosida, " +
          "soliq organining " +
          "joyida " +
          "o'tkaziladi. " +
          "U kam " +
          "aralashuvli " +
          "shakl.\n\n" +
          "SAYYOR SOLIQ " +
          "TEKSHIRUVI — " +
          "soliq " +
          "to'lovchining " +
          "hududida " +
          "o'tkaziladi " +
          "va ancha " +
          "keng " +
          "qamrovli " +
          "bo'ladi.\n\n" +
          "Mansabdor " +
          "shaxslarning " +
          "soliq " +
          "to'lovchi " +
          "hududiga " +
          "kirishi " +
          "alohida " +
          "tartibga " +
          "solingan — " +
          "ya'ni " +
          "bu " +
          "cheksiz " +
          "vakolat " +
          "emas.\n\n" +
          "Tekshiruv " +
          "davomida " +
          "amalga " +
          "oshiriladigan " +
          "harakatlar " +
          "ham " +
          "belgilangan: " +
          "hududni va " +
          "binolarni " +
          "ko'zdan " +
          "kechirish, " +
          "hujjatlarni " +
          "talab " +
          "qilib " +
          "olish, " +
          "hujjat va " +
          "buyumlarni " +
          "olib " +
          "qo'yish.\n\n" +
          "Har bir " +
          "harakat " +
          "uchun " +
          "shartlar " +
          "va " +
          "tartib " +
          "mavjud — " +
          "ular " +
          "bajarilmasa " +
          "natija " +
          "e'tirozga " +
          "sabab " +
          "bo'ladi.",
        example:
          "Tekshiruvchi " +
          "hujjatlarni " +
          "ro'yxatsiz " +
          "olib " +
          "ketdi. " +
          "Hujjatlarni " +
          "olib " +
          "qo'yish " +
          "belgilangan " +
          "tartibda " +
          "va " +
          "rasmiylashtirish " +
          "bilan " +
          "amalga " +
          "oshiriladi — " +
          "shuning " +
          "uchun " +
          "ro'yxat " +
          "va " +
          "tilxat " +
          "talab " +
          "qilish " +
          "o'rinli.",
        keyPoints: [
          "Soliq nazorati shakllari qonunda belgilangan",
          "Kameral tekshiruv — hisobot asosida, sayyor — soliq to'lovchi hududida",
          "Hududga kirish va hujjat olib qo'yish alohida tartibga solingan",
          "Tartib buzilishi natijaga e'tiroz uchun asos bo'ladi",
        ],
        warning:
          "Hujjatlarni " +
          "ro'yxatsiz " +
          "va " +
          "tilxatsiz " +
          "topshirmang. " +
          "Keyin " +
          "ular " +
          "qaytarilmasa " +
          "yoki " +
          "yo'qolsa, " +
          "isbotlash " +
          "imkonsiz " +
          "bo'ladi.",
        lawRefs: [
          { code: "SK", article: "135" },
          { code: "SK", article: "136" },
          { code: "SK", article: "137" },
          { code: "SK", article: "138" },
          { code: "SK", article: "139" },
          { code: "SK", article: "144" },
        ],
      },
      {
        heading: "Tekshiruv paytidagi huquqlar va natijalar",
        text:
          "Tekshiruv jarayonida " +
          "soliq to'lovchining " +
          "huquqlari saqlanadi " +
          "va ularni bilish " +
          "muhim.\n\n" +
          "PROTSESSUAL " +
          "KAFOLATLAR: " +
          "ekspertiza " +
          "o'tkazilishi, " +
          "mutaxassis va " +
          "tarjimon jalb " +
          "etilishi, " +
          "guvohning " +
          "ishtiroki " +
          "qonunda " +
          "tartibga " +
          "solingan.\n\n" +
          "XOLISLIK: soliq " +
          "nazoratini " +
          "amalga " +
          "oshirishga " +
          "doir " +
          "harakatlarning " +
          "xolisligini " +
          "ta'minlash " +
          "talablari " +
          "belgilangan.\n\n" +
          "BAYONNOMA: " +
          "nazorat " +
          "doirasidagi " +
          "harakatlar " +
          "bayonnoma " +
          "bilan " +
          "rasmiylashtiriladi " +
          "va unga " +
          "qo'yiladigan " +
          "talablar " +
          "bor.\n\n" +
          "Amaliy " +
          "maslahat: " +
          "bayonnomani " +
          "diqqat " +
          "bilan " +
          "o'qing. " +
          "Rozi " +
          "bo'lmagan " +
          "qismga " +
          "izoh " +
          "yozib " +
          "qo'ying — " +
          "keyin " +
          "bu " +
          "e'tirozingizning " +
          "asosi " +
          "bo'ladi.\n\n" +
          "NATIJALARNI " +
          "RASMIYLASHTIRISH: " +
          "soliq " +
          "auditi " +
          "natijalariga " +
          "ko'ra " +
          "hujjat " +
          "tuziladi " +
          "va " +
          "materiallar " +
          "belgilangan " +
          "tartibda " +
          "ko'rib " +
          "chiqiladi.\n\n" +
          "Bu " +
          "bosqichda " +
          "soliq " +
          "to'lovchi " +
          "o'z " +
          "e'tirozlarini " +
          "taqdim " +
          "etishi " +
          "mumkin.\n\n" +
          "ZARAR: " +
          "tekshiruv " +
          "chog'ida " +
          "g'ayriqonuniy " +
          "harakatlar " +
          "orqali " +
          "zarar " +
          "yetkazilishi " +
          "masalasi " +
          "ham " +
          "tartibga " +
          "solingan.",
        example:
          "Tekshiruv " +
          "natijalari " +
          "bo'yicha " +
          "hujjat " +
          "tuzildi, " +
          "soliq " +
          "to'lovchi " +
          "esa " +
          "e'tiroz " +
          "bildirmadi " +
          "va " +
          "muddat " +
          "o'tdi. " +
          "E'tiroz " +
          "bildirish " +
          "bosqichi " +
          "eng " +
          "samarali " +
          "himoya " +
          "imkoniyati " +
          "edi.",
        keyPoints: [
          "Tekshiruvda ekspertiza, mutaxassis, tarjimon va guvoh ishtiroki tartibga solingan",
          "Harakatlar bayonnoma bilan rasmiylashtiriladi",
          "Bayonnomaga rozi bo'lmagan qism uchun izoh yozing",
          "Natijalar bo'yicha e'tiroz bildirish bosqichi eng samarali himoya",
        ],
        warning:
          "E'tiroz " +
          "bildirish " +
          "muddatini " +
          "o'tkazib " +
          "yubormang. " +
          "Keyingi " +
          "bosqichlarda " +
          "e'tiroz " +
          "bildirish " +
          "ancha " +
          "qiyinlashadi.",
        lawRefs: [
          { code: "SK", article: "149" },
          { code: "SK", article: "150" },
          { code: "SK", article: "153" },
          { code: "SK", article: "154" },
          { code: "SK", article: "156" },
          { code: "SK", article: "158" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     6. Soliq javobgarligi
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "soliq-javobgarlik",
    category: "tax",
    level: "advanced",
    order: 9060,
    title: "Soliqqa oid huquqbuzarliklar va javobgarlik",
    desc:
      "Qanday harakatlar huquqbuzarlik hisoblanadi, ishlar qanday " +
      "ko'riladi va qarorlar ustidan shikoyat qilish.",
    objectives: [
      "Soliqqa oid asosiy huquqbuzarliklarni bilasiz",
      "Ishlarni ko'rib chiqish tartibini bilasiz",
      "Qaror ustidan shikoyat qilish yo'llarini bilasiz",
      "Ta'minlash choralarini bilasiz",
    ],
    practicalSteps: [
      "Qaror bilan tanishing va uning asosini tekshiring",
      "Shikoyat muddatini birinchi navbatda aniqlang",
      "Shikoyatda faqat «rozi emasman» emas, ANIQ huquqiy asos ko'rsating",
      "Yuqori organ natija bermasa, sud yo'li ochiq",
    ],
    sections: [
      {
        heading: "Huquqbuzarliklar va ishlarni ko'rib chiqish",
        text:
          "Soliqqa oid " +
          "huquqbuzarliklar " +
          "to'g'risidagi ishlarni " +
          "ko'rib chiqish tartibi " +
          "qonunda belgilangan.\n\n" +
          "Eng ko'p uchraydigan " +
          "huquqbuzarliklar " +
          "guruhlari: soliq " +
          "organida hisobga " +
          "qo'yish tartibini " +
          "buzish; hisobotni " +
          "taqdim etmaslik " +
          "yoki " +
          "kechiktirish; " +
          "soliqni " +
          "kam " +
          "hisoblash; " +
          "hujjatlarni " +
          "rasmiylashtirish " +
          "tartibini " +
          "buzish.\n\n" +
          "Har bir " +
          "guruh " +
          "uchun " +
          "alohida " +
          "javobgarlik " +
          "belgilangan.\n\n" +
          "ISHLARNI " +
          "KO'RIB " +
          "CHIQISH " +
          "tartibi " +
          "muhim: " +
          "soliq " +
          "auditi " +
          "va " +
          "sayyor " +
          "tekshiruv " +
          "materiallari " +
          "belgilangan " +
          "tartibda " +
          "ko'riladi " +
          "va " +
          "natijalar " +
          "bo'yicha " +
          "qaror " +
          "qabul " +
          "qilinadi.\n\n" +
          "Bu " +
          "bosqichda " +
          "soliq " +
          "to'lovchining " +
          "ishtirok " +
          "etish va " +
          "tushuntirish " +
          "berish " +
          "imkoniyati " +
          "bo'ladi.\n\n" +
          "TA'MINLASH " +
          "CHORALARI: " +
          "tekshiruv " +
          "natijalari " +
          "bo'yicha " +
          "qaror " +
          "qabul " +
          "qilingandan " +
          "so'ng " +
          "ta'minlash " +
          "choralari " +
          "qo'llanilishi " +
          "mumkin.\n\n" +
          "Qarorlarni " +
          "ijro " +
          "etishning " +
          "o'ziga " +
          "xos " +
          "xususiyatlari " +
          "ham " +
          "belgilangan.",
        example:
          "Tadbirkor " +
          "materiallarni " +
          "ko'rib " +
          "chiqish " +
          "majlisiga " +
          "bormadi va " +
          "tushuntirish " +
          "bermadi. " +
          "Qaror " +
          "faqat " +
          "soliq " +
          "organi " +
          "materiallari " +
          "asosida " +
          "chiqdi — " +
          "ishtirok " +
          "etish " +
          "imkoniyatini " +
          "boy " +
          "berish " +
          "xato " +
          "edi.",
        keyPoints: [
          "Huquqbuzarliklar: hisobga qo'yish, hisobot, kam hisoblash, rasmiylashtirish",
          "Materiallar belgilangan tartibda ko'rib chiqiladi",
          "Soliq to'lovchi ishtirok etish va tushuntirish berish imkoniyatiga ega",
          "Qarordan keyin ta'minlash choralari qo'llanilishi mumkin",
        ],
        warning:
          "Materiallarni " +
          "ko'rib " +
          "chiqishda " +
          "ishtirok " +
          "etmaslik " +
          "eng " +
          "samarali " +
          "himoya " +
          "imkoniyatini " +
          "yo'qotadi.",
        lawRefs: [
          { code: "SK", article: "157" },
          { code: "SK", article: "158" },
          { code: "SK", article: "159" },
          { code: "SK", article: "161" },
          { code: "SK", article: "219" },
        ],
      },
      {
        heading: "Shikoyat qilish",
        text:
          "Soliq organi qarori " +
          "yakuniy emas — " +
          "shikoyat qilish " +
          "huquqi soliq " +
          "to'lovchining " +
          "asosiy " +
          "huquqlaridan " +
          "biri.\n\n" +
          "Umumiy sxema ikki " +
          "bosqichli: avval " +
          "yuqori soliq " +
          "organiga, " +
          "keyin " +
          "sudga.\n\n" +
          "Yuqori organga " +
          "shikoyat " +
          "afzalligi: " +
          "u tezroq va " +
          "arzonroq. " +
          "Ko'p " +
          "holatlar " +
          "shu " +
          "bosqichda " +
          "hal " +
          "bo'ladi, " +
          "chunki " +
          "xato " +
          "ko'pincha " +
          "texnik " +
          "bo'ladi.\n\n" +
          "SHIKOYAT " +
          "MAZMUNI hal " +
          "qiluvchi " +
          "ahamiyatga " +
          "ega.\n\n" +
          "Kuchsiz " +
          "shikoyat: " +
          "«qaror " +
          "adolatsiz, " +
          "rozi " +
          "emasman».\n\n" +
          "Kuchli " +
          "shikoyat: " +
          "«qarorda " +
          "shu " +
          "summa " +
          "shu " +
          "asosda " +
          "hisoblangan, " +
          "ammo " +
          "amaldagi " +
          "qoidaga " +
          "ko'ra " +
          "hisob " +
          "boshqacha " +
          "bo'lishi " +
          "kerak; " +
          "ilova " +
          "qilingan " +
          "hujjatlar " +
          "buni " +
          "tasdiqlaydi».\n\n" +
          "Ya'ni " +
          "shikoyatda " +
          "aniq " +
          "raqam, " +
          "aniq " +
          "norma va " +
          "aniq " +
          "hujjat " +
          "bo'lishi " +
          "kerak.\n\n" +
          "MUDDATLAR " +
          "qat'iy: " +
          "shikoyat " +
          "muddati " +
          "o'tib " +
          "ketsa, " +
          "eng " +
          "asosli " +
          "e'tiroz " +
          "ham " +
          "ko'rilmasligi " +
          "mumkin.\n\n" +
          "Tekshiruv " +
          "chog'ida " +
          "g'ayriqonuniy " +
          "harakatlar " +
          "bilan " +
          "zarar " +
          "yetkazilgan " +
          "bo'lsa, " +
          "uni " +
          "qoplash " +
          "masalasi " +
          "ham " +
          "ko'tarilishi " +
          "mumkin.",
        example:
          "Soliq " +
          "to'lovchi " +
          "shikoyatda " +
          "faqat " +
          "«noto'g'ri » " +
          "deb " +
          "yozdi, " +
          "hujjat " +
          "ilova " +
          "qilmadi. " +
          "Shikoyat " +
          "rad " +
          "etildi. " +
          "Hisob-kitob " +
          "va " +
          "hujjatlar " +
          "bilan " +
          "asoslangan " +
          "shikoyat " +
          "butunlay " +
          "boshqacha " +
          "natija " +
          "berardi.",
        keyPoints: [
          "Sxema ikki bosqichli: yuqori soliq organi → sud",
          "Yuqori organga shikoyat tezroq va arzonroq",
          "Shikoyatda aniq raqam, aniq norma va hujjat bo'lishi kerak",
          "Muddatlar qat'iy — ularni o'tkazib yubormang",
        ],
        warning:
          "Shikoyat " +
          "berish " +
          "o'z-o'zidan " +
          "qarorning " +
          "ijrosini " +
          "to'xtatmasligi " +
          "mumkin. " +
          "Bu " +
          "masalani " +
          "alohida " +
          "aniqlashtiring.",
        lawRefs: [
          { code: "SK", article: "21" },
          { code: "SK", article: "155" },
          { code: "SK", article: "162" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     7. Jismoniy shaxs soliqlari
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "jismoniy-shaxs-soliq",
    category: "tax",
    level: "basic",
    order: 9070,
    title: "Jismoniy shaxslar uchun soliqlar",
    desc:
      "Daromad solig'i, mol-mulk va yer soliqlari, rezidentlik " +
      "va daromad manbalari.",
    objectives: [
      "Jismoniy shaxsga tegishli asosiy soliqlarni bilasiz",
      "Daromad solig'i to'lovchisi kim ekanini bilasiz",
      "Rezidentlik tushunchasini bilasiz",
      "Qaysi daromadlar soliqqa tortilishini umumiy tushunasiz",
    ],
    practicalSteps: [
      "Ish beruvchi soliqni ushlab qolayotganini hisob varaqasida tekshiring",
      "Qo'shimcha daromadlaringiz bo'lsa, ular bo'yicha majburiyatni aniqlang",
      "Mol-mulk va yer soliqlari bo'yicha xabarnomalarni e'tiborsiz qoldirmang",
      "Imtiyozga haqli bo'lsangiz, uni rasman rasmiylashtiring",
    ],
    sections: [
      {
        heading: "Daromad solig'i va rezidentlik",
        text:
          "Jismoniy shaxslar — " +
          "O'zbekiston " +
          "Respublikasining " +
          "fuqarolari, chet " +
          "davlatlarning " +
          "fuqarolari va " +
          "fuqaroligi " +
          "bo'lmagan " +
          "shaxslar.\n\n" +
          "Jismoniy " +
          "shaxslardan " +
          "olinadigan " +
          "daromad " +
          "solig'ining " +
          "to'lovchilari " +
          "alohida " +
          "belgilangan.\n\n" +
          "Aksariyat " +
          "yollanib " +
          "ishlovchilar " +
          "uchun bu " +
          "soliq " +
          "AVTOMATIK " +
          "ushlab " +
          "qolinadi: " +
          "ish " +
          "beruvchi " +
          "soliq " +
          "agenti " +
          "sifatida " +
          "ish " +
          "haqidan " +
          "ushlab, " +
          "budjetga " +
          "o'tkazadi.\n\n" +
          "Shuning " +
          "uchun " +
          "ko'pchilik " +
          "bu " +
          "soliqni " +
          "sezmaydi. " +
          "Lekin " +
          "hisob " +
          "varaqasini " +
          "tekshirish " +
          "foydali: " +
          "ushlab " +
          "qolingan " +
          "summa " +
          "ko'rsatilgan " +
          "bo'lishi " +
          "kerak.\n\n" +
          "REZIDENTLIK " +
          "tushunchasi " +
          "muhim: " +
          "u " +
          "qaysi " +
          "daromadlar " +
          "soliqqa " +
          "tortilishini " +
          "belgilaydi.\n\n" +
          "O'zbekiston " +
          "Respublikasidagi " +
          "manbalardan " +
          "olinadigan " +
          "daromadlar " +
          "alohida " +
          "moddada " +
          "belgilangan.\n\n" +
          "Amaliy " +
          "xulosa: " +
          "chet " +
          "eldan " +
          "daromad " +
          "olayotgan " +
          "yoki " +
          "chet " +
          "elda " +
          "ishlayotgan " +
          "shaxslar " +
          "uchun " +
          "bu " +
          "masalani " +
          "alohida " +
          "aniqlashtirish " +
          "kerak.",
        example:
          "Shaxs " +
          "asosiy " +
          "ish " +
          "joyidan " +
          "tashqari " +
          "qo'shimcha " +
          "daromad " +
          "oldi va " +
          "u " +
          "bo'yicha " +
          "hech " +
          "narsa " +
          "qilmadi. " +
          "Ish " +
          "beruvchi " +
          "faqat " +
          "o'zi " +
          "to'lagan " +
          "summadan " +
          "soliq " +
          "ushlaydi — " +
          "qolgan " +
          "daromadlar " +
          "bo'yicha " +
          "majburiyat " +
          "shaxsning " +
          "o'zida " +
          "qolishi " +
          "mumkin.",
        keyPoints: [
          "Yollanib ishlovchilarda soliq ish beruvchi tomonidan ushlab qolinadi",
          "Hisob varaqasida ushlab qolingan summa ko'rsatilishi kerak",
          "Rezidentlik qaysi daromadlar soliqqa tortilishini belgilaydi",
          "Qo'shimcha daromadlar bo'yicha majburiyatni alohida aniqlang",
        ],
        warning:
          "Ish " +
          "haqi " +
          "«konvertda» " +
          "berilsa, " +
          "undan " +
          "soliq " +
          "ham, " +
          "ijtimoiy " +
          "to'lovlar " +
          "ham " +
          "o'tmaydi. " +
          "Bu " +
          "pensiya " +
          "va " +
          "nafaqaga " +
          "bevosita " +
          "ta'sir " +
          "qiladi.",
        lawRefs: [
          { code: "SK", article: "30" },
          { code: "SK", article: "43" },
          { code: "SK", article: "364" },
        ],
      },
      {
        heading: "Mol-mulk, yer soliqlari va imtiyozlar",
        text:
          "Jismoniy shaxslar uchun " +
          "daromad solig'idan " +
          "tashqari MULKKA " +
          "bog'liq soliqlar " +
          "ham mavjud.\n\n" +
          "Ular odatda " +
          "ko'chmas mulk " +
          "va yer " +
          "uchastkalariga " +
          "tegishli " +
          "bo'ladi.\n\n" +
          "Bu soliqlarning " +
          "xususiyati " +
          "shundaki, " +
          "ular " +
          "MULKKA " +
          "bog'liq — " +
          "ya'ni " +
          "mulkdan " +
          "foydalanmaslik " +
          "soliqdan " +
          "ozod " +
          "qilmaydi.\n\n" +
          "Amaliy " +
          "xulosa: " +
          "meros " +
          "bo'lib " +
          "o'tgan " +
          "yoki " +
          "ishlatilmayotgan " +
          "mulk " +
          "bo'yicha " +
          "ham " +
          "majburiyat " +
          "yuzaga " +
          "keladi.\n\n" +
          "IMTIYOZLAR " +
          "tizimi " +
          "mavjud " +
          "va " +
          "ayrim " +
          "toifadagi " +
          "shaxslar " +
          "uchun " +
          "yengilliklar " +
          "belgilanishi " +
          "mumkin.\n\n" +
          "Muhim " +
          "amaliy " +
          "nuqta: " +
          "imtiyoz " +
          "avtomatik " +
          "qo'llanilmasligi " +
          "mumkin — " +
          "uni " +
          "rasmiylashtirish " +
          "va " +
          "hujjat " +
          "taqdim " +
          "etish " +
          "kerak " +
          "bo'ladi.\n\n" +
          "XABARNOMALAR: " +
          "soliq " +
          "organi " +
          "hisoblangan " +
          "summa " +
          "haqida " +
          "xabar " +
          "yuboradi. " +
          "Uni " +
          "e'tiborsiz " +
          "qoldirish " +
          "penya " +
          "yig'ilishiga " +
          "olib " +
          "keladi.\n\n" +
          "Xabarnomadagi " +
          "ma'lumot " +
          "noto'g'ri " +
          "bo'lsa " +
          "(masalan " +
          "mulk " +
          "allaqachon " +
          "sotilgan), " +
          "buni " +
          "rasman " +
          "bildirish " +
          "kerak — " +
          "o'z-o'zidan " +
          "tuzatilmaydi.",
        example:
          "Shaxs " +
          "uyini " +
          "sotdi, " +
          "lekin " +
          "soliq " +
          "xabarnomasi " +
          "kelishda " +
          "davom " +
          "etdi. " +
          "Ma'lumot " +
          "bazasidagi " +
          "yozuv " +
          "o'z-o'zidan " +
          "yangilanmaydi — " +
          "rasmiy " +
          "murojaat " +
          "bilan " +
          "tuzatish " +
          "kerak.",
        keyPoints: [
          "Mulkka bog'liq soliqlar mulkdan foydalanmaslikda ham to'lanadi",
          "Imtiyozlar mavjud, lekin ular avtomatik qo'llanilmasligi mumkin",
          "Xabarnomani e'tiborsiz qoldirish penya yig'ilishiga olib keladi",
          "Noto'g'ri ma'lumotni rasman bildirib tuzattirish kerak",
        ],
        warning:
          "Kichik " +
          "summali " +
          "soliq " +
          "qarzi " +
          "ham " +
          "vaqt " +
          "o'tishi " +
          "bilan " +
          "penya " +
          "hisobiga " +
          "sezilarli " +
          "o'sadi " +
          "va " +
          "undirish " +
          "choralariga " +
          "olib " +
          "keladi.",
        lawRefs: [
          { code: "SK", article: "21" },
          { code: "SK", article: "22" },
          { code: "SK", article: "110" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     8. Tadbirkorlikni boshlash
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "tadbirkorlik-boshlash",
    category: "tax",
    level: "mid",
    order: 9080,
    title: "Tadbirkorlikni boshlash: shakl tanlash",
    desc:
      "Yakka tartibdagi tadbirkorlik va yuridik shaxs, mas'uliyat " +
      "farqi, ro'yxatdan o'tish va soliq rejimini tanlash.",
    objectives: [
      "Tadbirkorlik shakllarini va ularning farqini bilasiz",
      "Mas'uliyat qanday taqsimlanishini tushunasiz",
      "Ro'yxatdan o'tish bosqichlarini bilasiz",
      "Soliq rejimini tanlash mezonlarini bilasiz",
    ],
    practicalSteps: [
      "Shakl tanlashdan oldin MAS'ULIYAT masalasini hal qiling — bu asosiy farq",
      "Faoliyat turingiz uchun litsenziya yoki ruxsat kerakmi, tekshiring",
      "Soliq rejimini oldindan hisoblab tanlang",
      "Buxgalteriya hisobini boshidanoq to'g'ri yo'lga qo'ying",
    ],
    sections: [
      {
        heading: "Shakl tanlash va mas'uliyat",
        text:
          "Tadbirkorlikni boshlashda " +
          "birinchi qaror — " +
          "SHAKL tanlash. Bu " +
          "qaror keyingi " +
          "hamma narsaga " +
          "ta'sir qiladi.\n\n" +
          "Asosiy farq " +
          "MAS'ULIYATDA.\n\n" +
          "Yakka tartibdagi " +
          "tadbirkorlikda " +
          "jismoniy shaxs " +
          "o'z " +
          "majburiyatlari " +
          "bo'yicha " +
          "SHAXSIY " +
          "mol-mulki " +
          "bilan " +
          "javob " +
          "beradi.\n\n" +
          "Yuridik shaxs " +
          "esa " +
          "muassislardan " +
          "AJRALGAN " +
          "subyekt: u " +
          "o'z " +
          "majburiyatlari " +
          "bo'yicha " +
          "o'ziga " +
          "qarashli " +
          "mol-mulk " +
          "bilan " +
          "javob " +
          "beradi.\n\n" +
          "Mas'uliyati " +
          "cheklangan " +
          "jamiyatda " +
          "ishtirokchilarning " +
          "riski " +
          "qo'shgan " +
          "hissasi " +
          "bilan " +
          "cheklangan.\n\n" +
          "Amaliy " +
          "xulosa: " +
          "riski " +
          "yuqori " +
          "yoki " +
          "katta " +
          "summali " +
          "faoliyat " +
          "uchun " +
          "yuridik " +
          "shaxs " +
          "shakli " +
          "xavfsizroq.\n\n" +
          "Kichik " +
          "va " +
          "oddiy " +
          "faoliyat " +
          "uchun " +
          "yakka " +
          "tartibdagi " +
          "shakl " +
          "soddaroq " +
          "va " +
          "arzonroq " +
          "bo'lishi " +
          "mumkin.\n\n" +
          "Yuridik " +
          "shaxs " +
          "DAVLAT " +
          "RO'YXATIDAN " +
          "o'tkazilgan " +
          "paytdan " +
          "vujudga " +
          "keladi — " +
          "ya'ni " +
          "ro'yxatsiz " +
          "u " +
          "mavjud " +
          "emas.",
        example:
          "Tadbirkor " +
          "yakka " +
          "tartibda " +
          "faoliyat " +
          "yuritib, " +
          "katta " +
          "qarz " +
          "yig'di. " +
          "Bunday " +
          "shaklda " +
          "javobgarlik " +
          "shaxsiy " +
          "mol-mulkka " +
          "ham " +
          "yoyiladi — " +
          "yuridik " +
          "shaxs " +
          "shaklida " +
          "bu " +
          "risk " +
          "boshqacha " +
          "bo'lardi.",
        keyPoints: [
          "Asosiy farq — MAS'ULIYAT hajmida",
          "Yakka tartibda javobgarlik shaxsiy mol-mulkka ham yoyiladi",
          "Yuridik shaxs muassislardan ajralgan subyekt",
          "Yuridik shaxs davlat ro'yxatidan o'tgach vujudga keladi",
        ],
        warning:
          "Shaklni " +
          "«hammasi " +
          "shunday " +
          "qiladi» " +
          "deb " +
          "tanlamang. " +
          "Faoliyat " +
          "riskini " +
          "baholab " +
          "qaror " +
          "qiling.",
        lawRefs: [
          { code: "FK", article: "41" },
          { code: "FK", article: "42" },
          { code: "FK", article: "48" },
          { code: "FK", article: "62" },
        ],
      },
      {
        heading: "Ro'yxat, soliq rejimi va hisob",
        text:
          "Ro'yxatdan o'tgach " +
          "keyingi qadam — " +
          "SOLIQ HISOBIGA " +
          "qo'yilish.\n\n" +
          "Bu majburiyat " +
          "va uni " +
          "buzish " +
          "alohida " +
          "javobgarlik " +
          "keltiradi.\n\n" +
          "SOLIQ REJIMI " +
          "tanlash " +
          "moliyaviy " +
          "jihatdan " +
          "eng " +
          "muhim " +
          "qarorlardan " +
          "biri.\n\n" +
          "Qonun " +
          "soliq " +
          "to'lovchilarning " +
          "ayrim " +
          "toifalari " +
          "uchun " +
          "MAXSUS " +
          "SOLIQ " +
          "REJIMLARINI " +
          "nazarda " +
          "tutadi.\n\n" +
          "Ular " +
          "odatda " +
          "kichik " +
          "biznes " +
          "uchun " +
          "soddalashtirilgan " +
          "hisob " +
          "va " +
          "hisobot " +
          "imkonini " +
          "beradi.\n\n" +
          "Tanlashda " +
          "hisoblab " +
          "ko'rish " +
          "kerak: " +
          "aylanma, " +
          "xarajatlar " +
          "tarkibi " +
          "va " +
          "faoliyat " +
          "turi " +
          "natijaga " +
          "ta'sir " +
          "qiladi.\n\n" +
          "HISOB " +
          "YURITISH " +
          "boshidanoq " +
          "to'g'ri " +
          "yo'lga " +
          "qo'yilishi " +
          "kerak. " +
          "Keyinchalik " +
          "tartibsiz " +
          "hujjatlarni " +
          "tiklash " +
          "ancha " +
          "qimmat " +
          "va " +
          "vaqt " +
          "talab " +
          "qiladi.\n\n" +
          "SHAXSIY " +
          "KABINET " +
          "orqali " +
          "hisobot " +
          "topshirish " +
          "va " +
          "ma'lumot " +
          "olish " +
          "vaqtni " +
          "tejaydi.\n\n" +
          "Alohida " +
          "e'tibor: " +
          "ayrim " +
          "faoliyat " +
          "turlari " +
          "litsenziya " +
          "yoki " +
          "ruxsat " +
          "talab " +
          "qiladi. " +
          "Ularsiz " +
          "faoliyat " +
          "yuritish " +
          "javobgarlikka " +
          "olib " +
          "keladi.",
        example:
          "Yangi " +
          "tadbirkor " +
          "soliq " +
          "rejimini " +
          "hisoblab " +
          "ko'rmasdan " +
          "tanladi. " +
          "Yil " +
          "oxirida " +
          "boshqa " +
          "rejimda " +
          "soliq " +
          "yuki " +
          "ancha " +
          "kam " +
          "bo'lishi " +
          "mumkinligi " +
          "ma'lum " +
          "bo'ldi — " +
          "oldindan " +
          "hisob " +
          "buni " +
          "hal " +
          "qilardi.",
        keyPoints: [
          "Ro'yxatdan keyin soliq hisobiga qo'yilish MAJBURIY",
          "Maxsus soliq rejimlari kichik biznes uchun soddalashtirish beradi",
          "Rejimni hisoblab tanlash kerak — aylanma va xarajatlar ta'sir qiladi",
          "Ayrim faoliyat turlari litsenziya yoki ruxsat talab qiladi",
        ],
        warning:
          "Hisobni " +
          "«keyin " +
          "yo'lga " +
          "qo'yamiz» " +
          "deb " +
          "kechiktirish " +
          "eng " +
          "ko'p " +
          "uchraydigan " +
          "xato: " +
          "tiklash " +
          "har " +
          "doim " +
          "qimmatroq " +
          "bo'ladi.",
        lawRefs: [
          { code: "SK", article: "18" },
          { code: "SK", article: "22" },
          { code: "SK", article: "56" },
          { code: "SK", article: "219" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     9. Budjet tizimi  (MAVJUD KALIT — kengaytirildi)
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "budjet-tizimi",
    category: "tax",
    level: "basic",
    order: 9090,
    title: "Budjet tizimi: soliqlaringiz qayerga ketadi",
    desc:
      "Budjet nima, uning darajalari, daromad va xarajatlar, " +
      "budjet jarayoni va ochiqlik.",
    objectives: [
      "Budjet tizimi tuzilishini bilasiz",
      "Budjet daromadlari qayerdan kelishini bilasiz",
      "Budjet jarayoni bosqichlarini bilasiz",
      "Budjet ochiqligi nimani anglatishini bilasiz",
    ],
    practicalSteps: [
      "Mahalliy budjet muhokamasida qatnashish imkoniyatidan foydalaning",
      "Hududingizdagi budjet xarajatlari haqida ma'lumot so'rash huquqingiz bor",
      "Soliq va budjet o'rtasidagi bog'liqlikni tushunib turing",
      "Budjet mablag'lari noto'g'ri ishlatilayotgan bo'lsa, murojaat qilish yo'li ochiq",
    ],
    sections: [
      {
        heading: "Budjet tizimi va daromadlar",
        text:
          "BUDJET — davlatning " +
          "moliyaviy rejasi: " +
          "qancha daromad " +
          "kutilmoqda va u " +
          "nimaga " +
          "sarflanadi.\n\n" +
          "Budjet tizimi " +
          "darajalardan " +
          "iborat: " +
          "respublika " +
          "budjeti va " +
          "mahalliy " +
          "budjetlar.\n\n" +
          "Bu bo'linish " +
          "amalda " +
          "muhim: " +
          "ayrim " +
          "masalalar " +
          "respublika, " +
          "boshqalari " +
          "mahalliy " +
          "darajada " +
          "hal " +
          "qilinadi.\n\n" +
          "Shuning " +
          "uchun " +
          "hududiy " +
          "masala " +
          "bo'yicha " +
          "murojaat " +
          "mahalliy " +
          "organga " +
          "yuborilishi " +
          "kerak.\n\n" +
          "BUDJET " +
          "DAROMADLARI " +
          "asosan " +
          "soliqlar " +
          "va " +
          "yig'imlardan " +
          "shakllanadi.\n\n" +
          "Bu " +
          "bog'liqlikni " +
          "tushunish " +
          "muhim: " +
          "soliq " +
          "to'lash — " +
          "ta'lim, " +
          "tibbiyot, " +
          "nafaqa " +
          "va " +
          "infratuzilmaning " +
          "moddiy " +
          "asosi.\n\n" +
          "Konstitutsiya " +
          "ham " +
          "soliqlarni " +
          "fuqarolarning " +
          "konstitutsiyaviy " +
          "huquqlarini " +
          "ta'minlash " +
          "bilan " +
          "bog'laydi.\n\n" +
          "BUDJET " +
          "XARAJATLARI " +
          "yo'nalishlari " +
          "belgilangan " +
          "va ular " +
          "budjet " +
          "hujjatlarida " +
          "aks " +
          "ettiriladi.",
        example:
          "Hududda " +
          "yo'l " +
          "ta'mirlash " +
          "masalasi " +
          "ko'tarildi. " +
          "Bu " +
          "odatda " +
          "mahalliy " +
          "budjet " +
          "doirasidagi " +
          "masala — " +
          "shuning " +
          "uchun " +
          "murojaatni " +
          "mahalliy " +
          "organga " +
          "yo'naltirish " +
          "to'g'riroq.",
        keyPoints: [
          "Budjet tizimi respublika va mahalliy budjetlardan iborat",
          "Daromadlar asosan soliqlar va yig'imlardan shakllanadi",
          "Hududiy masalalar mahalliy budjet doirasida hal qilinadi",
          "Soliqlar ijtimoiy kafolatlarning moddiy asosi",
        ],
        warning:
          "Mahalliy " +
          "masalani " +
          "respublika " +
          "darajasiga " +
          "yuborish " +
          "javobni " +
          "tezlashtirmaydi — " +
          "u " +
          "odatda " +
          "yana " +
          "mahalliy " +
          "organga " +
          "qaytariladi.",
        lawRefs: [
          { code: "BK", article: "6" },
          { code: "BK", article: "7" },
          { code: "BK", article: "8" },
          { code: "BK", article: "12" },
          { code: "KONS", article: "63" },
        ],
      },
      {
        heading: "Budjet jarayoni va ochiqlik",
        text:
          "BUDJET JARAYONI bir " +
          "necha bosqichdan " +
          "iborat: " +
          "loyihani " +
          "tayyorlash, " +
          "ko'rib chiqish " +
          "va tasdiqlash, " +
          "ijro etish, " +
          "hisobot va " +
          "nazorat.\n\n" +
          "Har bir " +
          "bosqichda " +
          "vakolatli " +
          "organlar " +
          "belgilangan.\n\n" +
          "Fuqaro uchun " +
          "eng " +
          "qiziqarli " +
          "jihat — " +
          "OCHIQLIK " +
          "va " +
          "QATNASHISH " +
          "imkoniyati.\n\n" +
          "Budjet " +
          "ma'lumotlari " +
          "ochiq " +
          "bo'lishi " +
          "va " +
          "jamoatchilikka " +
          "yetkazilishi " +
          "kutiladi.\n\n" +
          "Bu " +
          "Konstitutsiyadagi " +
          "davlat " +
          "ishlarini " +
          "boshqarishda " +
          "qatnashish " +
          "huquqi " +
          "bilan " +
          "bog'liq.\n\n" +
          "Amaliy " +
          "imkoniyatlar: " +
          "mahalliy " +
          "budjet " +
          "muhokamalarida " +
          "qatnashish, " +
          "hududiy " +
          "loyihalar " +
          "bo'yicha " +
          "fikr " +
          "bildirish, " +
          "xarajatlar " +
          "haqida " +
          "ma'lumot " +
          "so'rash.\n\n" +
          "NAZORAT " +
          "tizimi " +
          "ham " +
          "mavjud: " +
          "budjet " +
          "mablag'laridan " +
          "foydalanish " +
          "ustidan " +
          "nazorat " +
          "amalga " +
          "oshiriladi.\n\n" +
          "Budjet " +
          "qonunchiligini " +
          "buzganlik " +
          "uchun " +
          "javobgarlik " +
          "nazarda " +
          "tutilgan.\n\n" +
          "Ya'ni " +
          "budjet " +
          "mablag'lari " +
          "noto'g'ri " +
          "ishlatilayotgani " +
          "haqida " +
          "murojaat " +
          "qilish " +
          "asossiz " +
          "emas — " +
          "buning " +
          "huquqiy " +
          "asosi " +
          "bor.",
        example:
          "Fuqarolar " +
          "hududda " +
          "budjet " +
          "hisobidan " +
          "bajarilgan " +
          "ish " +
          "sifatiga " +
          "e'tiroz " +
          "bildirmoqchi. " +
          "Budjet " +
          "mablag'laridan " +
          "foydalanish " +
          "nazorat " +
          "ostida " +
          "bo'lgani " +
          "uchun " +
          "bunday " +
          "murojaat " +
          "qonuniy " +
          "asosga " +
          "ega.",
        keyPoints: [
          "Budjet jarayoni: loyiha → tasdiqlash → ijro → hisobot va nazorat",
          "Budjet ma'lumotlari ochiq bo'lishi kutiladi",
          "Fuqaro mahalliy budjet muhokamalarida qatnashishi mumkin",
          "Budjet qonunchiligini buzganlik uchun javobgarlik nazarda tutilgan",
        ],
        warning:
          "Budjet " +
          "masalalari " +
          "bo'yicha " +
          "murojaatda " +
          "aniq " +
          "obyekt " +
          "va " +
          "aniq " +
          "savol " +
          "ko'rsating — " +
          "umumiy " +
          "shikoyat " +
          "umumiy " +
          "javob " +
          "oladi.",
        lawRefs: [
          { code: "BK", article: "16" },
          { code: "BK", article: "166-1" },
          { code: "BK", article: "190-1" },
          { code: "KONS", article: "36" },
        ],
      },
    ],
  },
];

module.exports = { LESSONS };
