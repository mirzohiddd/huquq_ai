"use strict";
/**
 * MEROS HUQUQI — 2-QISM: VASIYATNOMA (9–23-mavzular)
 *
 * Vasiyatnoma ATAYLAB qonun bo'yicha vorislikdan OLDIN turadi:
 * qonun bo'yicha vorislik faqat vasiyatnoma bo'lmaganda (yoki
 * mol-mulkning bir qismini qamraganda) qo'llaniladi — ya'ni
 * vasiyatnoma birlamchi asos.
 */

const SECTIONS = [
  /* ── 9 ─────────────────────────────────────────────────────── */
  {
    heading: "Vasiyatnoma nima va u nima beradi",
    text:
      "Vasiyatnoma — fuqaroning " +
      "vafotidan keyin " +
      "mol-mulki taqdirini " +
      "belgilaydigan bir " +
      "tomonlama bitim.\n\n" +
      "U beradigan imkoniyat " +
      "juda keng: mol-mulkni " +
      "ISTALGAN shaxsga " +
      "vasiyat qilish " +
      "(qarindosh bo'lishi " +
      "shart emas); " +
      "ulushlarni O'ZI " +
      "belgilash; " +
      "merosxo'rlarni " +
      "merosdan mahrum " +
      "qilish.\n\n" +
      "⚠️ MUHIM: vasiyatnoma " +
      "SHAXSAN tuziladi. " +
      "Uni vakil orqali " +
      "tuzib bo'lmaydi.\n\n" +
      "Vasiyatnoma tuzish " +
      "uchun fuqaro " +
      "muomala layoqatiga " +
      "ega bo'lishi kerak " +
      "— aynan " +
      "vasiyatnoma " +
      "tuzilayotgan " +
      "paytda.\n\n" +
      "Vasiyat erkinligi " +
      "cheklangan " +
      "yagona holat — " +
      "MAJBURIY ULUSH " +
      "(bu haqda " +
      "keyingi qismda). " +
      "Ya'ni siz " +
      "hamma narsani " +
      "istalgan " +
      "kishiga " +
      "yozsangiz ham, " +
      "ayrim " +
      "shaxslarning " +
      "ulushi " +
      "saqlanadi.",
    example:
      "Odam butun " +
      "mol-mulkini " +
      "do'stiga vasiyat " +
      "qildi. Bu " +
      "qonuniy, lekin " +
      "uning voyaga " +
      "yetmagan " +
      "bolasi " +
      "majburiy ulush " +
      "olish huquqini " +
      "saqlab qoladi.",
    keyPoints: [
      "Vasiyatnoma — bir tomonlama bitim",
      "Mol-mulkni istalgan shaxsga vasiyat qilish mumkin",
      "Vasiyatnoma faqat shaxsan tuziladi",
      "Vasiyat erkinligi majburiy ulush bilan cheklanadi",
    ],
    warning:
      "Vakolatnoma " +
      "orqali " +
      "tuzilgan " +
      "\"vasiyatnoma\" " +
      "haqiqiy emas — " +
      "bu qat'iy " +
      "qoida.",
    lawRefs: [
      { code: "FK2", article: "1120" },
      { code: "FK2", article: "1142" },
    ],
  },

  /* ── 10 ────────────────────────────────────────────────────── */
  {
    heading: "Vasiyatnomaning shakli",
    text:
      "Vasiyatnoma SHAKLI — " +
      "eng ko'p nizoga " +
      "sabab bo'ladigan " +
      "masala. Shakl " +
      "buzilsa vasiyatnoma " +
      "HAQIQIY EMAS deb " +
      "topiladi.\n\n" +
      "Umumiy qoida: " +
      "vasiyatnoma YOZMA " +
      "shaklda tuziladi " +
      "va notarial " +
      "tasdiqlanadi.\n\n" +
      "Vasiyatnomada " +
      "bo'lishi kerak " +
      "bo'lgan " +
      "elementlar: " +
      "tuzilgan joy va " +
      "sana; vasiyat " +
      "qiluvchining " +
      "imzosi; " +
      "notarial " +
      "tasdiq.\n\n" +
      "⚠️ SANA hal " +
      "qiluvchi " +
      "ahamiyatga ega: " +
      "bir necha " +
      "vasiyatnoma " +
      "bo'lsa, " +
      "OXIRGISI amal " +
      "qiladi.\n\n" +
      "Vasiyat qiluvchi " +
      "jismoniy " +
      "nuqson yoki " +
      "boshqa sabab " +
      "bilan o'zi " +
      "imzolay " +
      "olmasa, qonun " +
      "belgilagan " +
      "tartibda boshqa " +
      "shaxs imzolashi " +
      "mumkin — lekin " +
      "bu ham qat'iy " +
      "qoidalarga " +
      "bo'ysunadi.",
    example:
      "Odam " +
      "vasiyatnomani " +
      "qo'lda yozdi, " +
      "lekin notariusga " +
      "bormadi. Bunday " +
      "hujjat notarial " +
      "shakl talabini " +
      "bajarmagani " +
      "uchun haqiqiy " +
      "emas deb " +
      "topilishi " +
      "mumkin.",
    keyPoints: [
      "Vasiyatnoma yozma shaklda va notarial tasdiqlanadi",
      "Joy, sana va imzo majburiy elementlar",
      "Bir necha vasiyatnomada oxirgisi amal qiladi",
      "Shakl buzilsa vasiyatnoma haqiqiy emas deb topiladi",
    ],
    warning:
      "Notarial " +
      "tasdiqsiz " +
      "\"vasiyat " +
      "xati\" " +
      "ko'pincha " +
      "hech qanday " +
      "huquqiy " +
      "kuchga ega " +
      "bo'lmaydi.",
    lawRefs: [
      { code: "FK2", article: "1124" },
      { code: "FK2", article: "1125" },
    ],
  },

  /* ── 11 ────────────────────────────────────────────────────── */
  {
    heading: "Notarial tasdiqlangan vasiyatnoma",
    text:
      "Asosiy va eng " +
      "ishonchli shakl — " +
      "notarial " +
      "tasdiqlangan " +
      "vasiyatnoma.\n\n" +
      "Tartib: vasiyat " +
      "qiluvchi " +
      "notariusga " +
      "shaxsan boradi; " +
      "notarius uning " +
      "shaxsini va " +
      "muomala " +
      "layoqatini " +
      "tekshiradi; " +
      "vasiyatnoma " +
      "yoziladi yoki " +
      "vasiyat " +
      "qiluvchi " +
      "so'zlaridan " +
      "yozib olinadi; " +
      "o'qib " +
      "eshittiriladi va " +
      "imzolanadi.\n\n" +
      "⚠️ Notariusning " +
      "roli faqat " +
      "muhr bosish " +
      "emas: u " +
      "vasiyat " +
      "qiluvchining " +
      "irodasi ERKIN " +
      "ekanini va u " +
      "hujjat " +
      "mazmunini " +
      "tushunayotganini " +
      "tekshiradi.\n\n" +
      "Aynan shu " +
      "sababdan " +
      "notarial " +
      "vasiyatnomani " +
      "sudda " +
      "e'tiroz " +
      "qilish " +
      "ancha " +
      "qiyin.\n\n" +
      "Vasiyatnoma " +
      "notariusda " +
      "saqlanadi, " +
      "ya'ni " +
      "yo'qolib " +
      "ketmaydi — " +
      "bu " +
      "qo'lda " +
      "yozilgan " +
      "hujjatdan " +
      "yana bir " +
      "afzalligi.",
    example:
      "Merosxo'rlar " +
      "vasiyatnomani " +
      "topa olmadi. " +
      "Notarial " +
      "tasdiqlangan " +
      "bo'lsa, uni " +
      "notariat " +
      "reyestridan " +
      "topish mumkin.",
    keyPoints: [
      "Notarial shakl — eng ishonchli variant",
      "Notarius shaxsni va muomala layoqatini tekshiradi",
      "Irodaning erkinligi ham baholanadi",
      "Vasiyatnoma notariusda saqlanadi va yo'qolmaydi",
    ],
    warning:
      "Notariusga " +
      "boshqa " +
      "shaxslarsiz " +
      "boring — " +
      "yonida " +
      "manfaatdor " +
      "odam " +
      "bo'lishi " +
      "keyinchalik " +
      "\"bosim " +
      "bo'lgan\" " +
      "degan " +
      "e'tirozga " +
      "asos " +
      "beradi.",
    lawRefs: [
      { code: "FK2", article: "1125" },
      { code: "FK2", article: "1128" },
    ],
  },

  /* ── 12 ────────────────────────────────────────────────────── */
  {
    heading: "Tenglashtirilgan vasiyatnomalar",
    text:
      "Ba'zan notariusga " +
      "borish imkonsiz " +
      "bo'ladi — " +
      "kasalxona, " +
      "harbiy xizmat, " +
      "uzoq safar. " +
      "Qonun bunday " +
      "holatlar uchun " +
      "yechim beradi.\n\n" +
      "Notarial " +
      "tasdiqlangan " +
      "vasiyatnomalarga " +
      "TENGLASHTIRILGAN " +
      "vasiyatnomalar " +
      "mavjud. Ular " +
      "muayyan " +
      "mansabdor " +
      "shaxslar " +
      "tomonidan " +
      "tasdiqlanadi.\n\n" +
      "Odatiy holatlar: " +
      "davolash " +
      "muassasalarida " +
      "bosh shifokor " +
      "yoki navbatchi " +
      "shifokor " +
      "tomonidan; " +
      "harbiy " +
      "qismlarda " +
      "qo'mondon " +
      "tomonidan; " +
      "ozodlikdan " +
      "mahrum qilish " +
      "joylarida " +
      "boshliq " +
      "tomonidan.\n\n" +
      "⚠️ Bunday " +
      "vasiyatnomalar " +
      "notarial " +
      "tasdiqlangan " +
      "bilan TENG " +
      "kuchga ega — " +
      "ya'ni ular " +
      "\"ikkinchi " +
      "darajali\" " +
      "hujjat " +
      "emas.\n\n" +
      "Aniq ro'yxat " +
      "va tartib " +
      "qonun matnida.",
    example:
      "Bemor og'ir " +
      "ahvolda " +
      "kasalxonada " +
      "yotibdi va " +
      "notariusga " +
      "bora " +
      "olmaydi. " +
      "Bosh shifokor " +
      "tomonidan " +
      "tasdiqlangan " +
      "vasiyatnoma " +
      "to'liq " +
      "huquqiy " +
      "kuchga " +
      "ega.",
    keyPoints: [
      "Notariusga borish imkonsiz bo'lganda muqobil shakl bor",
      "Muayyan mansabdor shaxslar tasdiqlashi mumkin",
      "Kasalxona, harbiy qism va boshqa holatlar qamralgan",
      "Bunday vasiyatnoma notarial bilan teng kuchga ega",
    ],
    warning:
      "Tenglashtirilgan " +
      "vasiyatnomani " +
      "tasdiqlash " +
      "huquqi " +
      "faqat " +
      "qonunda " +
      "ko'rsatilgan " +
      "shaxslarda " +
      "— boshqa " +
      "rahbar " +
      "tasdiqlagan " +
      "hujjat " +
      "ishlamaydi.",
    lawRefs: [
      { code: "FK2", article: "1126" },
      { code: "FK2", article: "1124" },
    ],
  },

  /* ── 13 ────────────────────────────────────────────────────── */
  {
    heading: "Shartli vasiyatnoma",
    text:
      "Vasiyatnomada " +
      "SHART qo'yish " +
      "mumkinmi? Qonun " +
      "bunday " +
      "imkoniyatni " +
      "nazarda " +
      "tutadi.\n\n" +
      "Shartli " +
      "vasiyatnomada " +
      "merosxo'rning " +
      "meros olishi " +
      "muayyan " +
      "shartning " +
      "bajarilishiga " +
      "bog'lanadi.\n\n" +
      "⚠️ Lekin har " +
      "qanday shart " +
      "qo'yib " +
      "bo'lmaydi. " +
      "Qonunga yoki " +
      "axloq " +
      "normalariga " +
      "zid " +
      "shartlar, " +
      "shuningdek " +
      "merosxo'rning " +
      "huquq va " +
      "erkinliklarini " +
      "cheklaydigan " +
      "shartlar " +
      "HAQIQIY " +
      "EMAS.\n\n" +
      "Masalan " +
      "\"turmushga " +
      "chiqmaslik " +
      "sharti bilan\" " +
      "yoki " +
      "\"muayyan " +
      "dinni " +
      "tanlash " +
      "sharti " +
      "bilan\" " +
      "degan " +
      "shartlar " +
      "shaxsning " +
      "asosiy " +
      "huquqlarini " +
      "cheklaydi.\n\n" +
      "Shart " +
      "haqiqiy emas " +
      "deb " +
      "topilsa, " +
      "vasiyatnoma " +
      "odatda " +
      "shartsiz " +
      "amal " +
      "qiladi.",
    example:
      "Vasiyatnomada " +
      "\"o'g'lim " +
      "oliy " +
      "ma'lumot " +
      "olsa " +
      "meros " +
      "oladi\" " +
      "deb " +
      "yozildi. " +
      "Bunday " +
      "shart " +
      "ko'rib " +
      "chiqilishi " +
      "mumkin, " +
      "lekin " +
      "asosiy " +
      "huquqni " +
      "cheklovchi " +
      "shartlar " +
      "haqiqiy " +
      "emas.",
    keyPoints: [
      "Vasiyatnomada shart qo'yish mumkin",
      "Qonunga va axloqqa zid shartlar haqiqiy emas",
      "Asosiy huquqlarni cheklovchi shartlar ishlamaydi",
      "Shart bekor qilinsa vasiyatnoma odatda amal qiladi",
    ],
    warning:
      "Shart " +
      "qo'yishdan " +
      "oldin " +
      "notarius " +
      "bilan " +
      "maslahatlashing " +
      "— " +
      "noto'g'ri " +
      "shart " +
      "butun " +
      "niyatingizni " +
      "buzishi " +
      "mumkin.",
    lawRefs: [
      { code: "FK2", article: "1121" },
      { code: "FK2", article: "1130" },
    ],
  },

  /* ── 14 ────────────────────────────────────────────────────── */
  {
    heading: "Vorisdan keyingi vorislarni tayinlash",
    text:
      "Vasiyat qiluvchi " +
      "ehtiyot chorasini " +
      "ko'rishi " +
      "mumkin: asosiy " +
      "merosxo'r " +
      "meros ololmasa " +
      "kim olishini " +
      "oldindan " +
      "belgilash.\n\n" +
      "Bu — vorisdan " +
      "keyingi " +
      "vorisni " +
      "tayinlash " +
      "(zaxira " +
      "merosxo'r).\n\n" +
      "Bunday tayinlash " +
      "quyidagi " +
      "holatlarda " +
      "ishlaydi: " +
      "asosiy " +
      "merosxo'r " +
      "meros " +
      "ochilgunga " +
      "qadar vafot " +
      "etsa; merosni " +
      "qabul " +
      "qilmasa; " +
      "merosdan voz " +
      "kechsa; " +
      "noloyiq " +
      "merosxo'r " +
      "deb " +
      "topilsa.\n\n" +
      "⚠️ Bu juda " +
      "foydali " +
      "vosita: " +
      "usiz " +
      "asosiy " +
      "merosxo'r " +
      "tushib " +
      "qolganda " +
      "mol-mulk " +
      "qonun " +
      "bo'yicha " +
      "taqsimlanib " +
      "ketadi — " +
      "ya'ni " +
      "vasiyat " +
      "qiluvchining " +
      "irodasidan " +
      "boshqacha.\n\n" +
      "Shuning " +
      "uchun " +
      "vasiyatnoma " +
      "tuzayotganda " +
      "zaxira " +
      "variantni " +
      "ham " +
      "o'ylab " +
      "ko'ring.",
    example:
      "Vasiyatnomada " +
      "\"mol-mulkim " +
      "akamga, " +
      "u meros " +
      "ololmasa " +
      "— " +
      "jiyanimga\" " +
      "deb " +
      "yozildi. " +
      "Aka vafot " +
      "etganda " +
      "mol-mulk " +
      "jiyanga " +
      "o'tadi.",
    keyPoints: [
      "Zaxira merosxo'r tayinlash mumkin",
      "U asosiy merosxo'r tushib qolganda ishlaydi",
      "Vafot, voz kechish va noloyiqlik holatlarini qamraydi",
      "Usiz mol-mulk qonun bo'yicha taqsimlanib ketadi",
    ],
    warning:
      "Zaxira " +
      "merosxo'r " +
      "belgilamaslik " +
      "— " +
      "vasiyatnomadagi " +
      "eng " +
      "ko'p " +
      "uchraydigan " +
      "kamchilik.",
    lawRefs: [
      { code: "FK2", article: "1122" },
      { code: "FK2", article: "1123" },
    ],
  },

  /* ── 15 ────────────────────────────────────────────────────── */
  {
    heading: "Mol-mulkning vasiyat qilinmagan qismi",
    text:
      "Vasiyatnoma " +
      "mol-mulkning " +
      "faqat BIR " +
      "QISMINI " +
      "qamragan " +
      "bo'lsa nima " +
      "bo'ladi?\n\n" +
      "Javob aniq: " +
      "vasiyat " +
      "qilinmagan " +
      "qism QONUN " +
      "bo'yicha " +
      "taqsimlanadi.\n\n" +
      "Ya'ni ikki " +
      "asos bir " +
      "vaqtda " +
      "ishlashi " +
      "mumkin: " +
      "vasiyatnomada " +
      "ko'rsatilgan " +
      "mol-mulk " +
      "vasiyat " +
      "bo'yicha, " +
      "qolgani " +
      "esa qonun " +
      "bo'yicha.\n\n" +
      "⚠️ Amaliy " +
      "muhim " +
      "nuqta: " +
      "vasiyatnomada " +
      "\"kvartiram " +
      "o'g'limga\" " +
      "deb " +
      "yozilgan " +
      "bo'lsa, " +
      "bank " +
      "omonati va " +
      "avtomobil " +
      "qonun " +
      "bo'yicha " +
      "barcha " +
      "merosxo'rlar " +
      "o'rtasida " +
      "taqsimlanadi.\n\n" +
      "Bu " +
      "ko'pincha " +
      "kutilmagan " +
      "natija " +
      "beradi — " +
      "vasiyat " +
      "qiluvchi " +
      "buni " +
      "nazarda " +
      "tutmagan " +
      "bo'lishi " +
      "mumkin.\n\n" +
      "Shuning " +
      "uchun " +
      "vasiyatnomada " +
      "\"barcha " +
      "mol-mulkim\" " +
      "degan " +
      "umumiy " +
      "ifoda " +
      "ishlatish " +
      "ham bir " +
      "yechim.",
    example:
      "Vasiyatnomada " +
      "faqat uy " +
      "ko'rsatilgan " +
      "edi. " +
      "Vafotdan " +
      "keyin " +
      "bank " +
      "hisobida " +
      "katta " +
      "summa " +
      "borligi " +
      "aniqlandi " +
      "— u " +
      "qonun " +
      "bo'yicha " +
      "taqsimlanadi.",
    keyPoints: [
      "Vasiyat qilinmagan qism qonun bo'yicha taqsimlanadi",
      "Ikki asos bir vaqtda ishlashi mumkin",
      "Bu ko'pincha kutilmagan natija beradi",
      "\"Barcha mol-mulkim\" ifodasi bu muammoni hal qiladi",
    ],
    warning:
      "Vasiyatnoma " +
      "tuzgach " +
      "yangi " +
      "mol-mulk " +
      "orttirsangiz " +
      "— uni " +
      "ham " +
      "qamrab " +
      "olishini " +
      "tekshiring.",
    lawRefs: [
      { code: "FK2", article: "1123" },
      { code: "FK2", article: "1134" },
    ],
  },

  /* ── 16 ────────────────────────────────────────────────────── */
  {
    heading: "Vasiyatnomani bekor qilish va o'zgartirish",
    text:
      "Vasiyatnoma " +
      "abadiy emas — " +
      "vasiyat " +
      "qiluvchi " +
      "uni " +
      "ISTALGAN " +
      "PAYTDA " +
      "o'zgartirishi " +
      "yoki bekor " +
      "qilishi " +
      "mumkin.\n\n" +
      "⚠️ ENG MUHIM " +
      "NUQTA: buning " +
      "uchun hech " +
      "kimning " +
      "roziligi " +
      "KERAK EMAS " +
      "va sababni " +
      "tushuntirish " +
      "ham shart " +
      "emas.\n\n" +
      "Bekor qilish " +
      "yoki " +
      "o'zgartirish " +
      "usullari: " +
      "yangi " +
      "vasiyatnoma " +
      "tuzish " +
      "(oldingisi " +
      "to'liq " +
      "yoki " +
      "qisman " +
      "kuchini " +
      "yo'qotadi); " +
      "vasiyatnomani " +
      "bekor " +
      "qilish " +
      "to'g'risida " +
      "alohida " +
      "ariza " +
      "berish.\n\n" +
      "Aynan " +
      "shu " +
      "sababdan " +
      "vasiyatnomadagi " +
      "SANA " +
      "shunchalik " +
      "muhim — " +
      "bir " +
      "necha " +
      "hujjat " +
      "bo'lsa " +
      "oxirgisi " +
      "amal " +
      "qiladi.\n\n" +
      "Vasiyat " +
      "qiluvchi " +
      "tirikligida " +
      "hech " +
      "kim " +
      "vasiyatnomaga " +
      "e'tiroz " +
      "bildira " +
      "olmaydi — " +
      "u " +
      "faqat " +
      "meros " +
      "ochilgandan " +
      "keyin " +
      "e'tiroz " +
      "qilinishi " +
      "mumkin.",
    example:
      "Ota " +
      "vasiyatnomani " +
      "o'zgartirdi " +
      "va yangi " +
      "hujjat " +
      "tuzdi. " +
      "Eski " +
      "vasiyatnomani " +
      "qo'lida " +
      "ushlab " +
      "turgan " +
      "merosxo'r " +
      "unga " +
      "tayana " +
      "olmaydi.",
    keyPoints: [
      "Vasiyatnomani istalgan paytda bekor qilish mumkin",
      "Buning uchun hech kimning roziligi kerak emas",
      "Yangi vasiyatnoma eskisining kuchini yo'qotadi",
      "Bir necha hujjatda oxirgisi amal qiladi",
    ],
    warning:
      "Vasiyatnoma " +
      "tirikligida " +
      "e'tiroz " +
      "qilinmaydi " +
      "— " +
      "shuning " +
      "uchun " +
      "\"roziman/" +
      "rozimasman\" " +
      "degan " +
      "bahslar " +
      "ma'nosiz.",
    lawRefs: [
      { code: "FK2", article: "1127" },
      { code: "FK2", article: "1124" },
    ],
  },

  /* ── 17 ────────────────────────────────────────────────────── */
  {
    heading: "Vasiyatnomaning sir saqlanishi",
    text:
      "Vasiyatnoma " +
      "mazmuni SIR " +
      "hisoblanadi va " +
      "bu qonun " +
      "bilan " +
      "himoyalangan.\n\n" +
      "Notarius, " +
      "vasiyatnomani " +
      "tasdiqlagan " +
      "boshqa " +
      "shaxs, " +
      "guvohlar va " +
      "vasiyatnoma " +
      "mazmunini " +
      "bilgan " +
      "boshqalar " +
      "meros " +
      "ochilgunga " +
      "qadar uning " +
      "mazmunini " +
      "oshkor " +
      "qilishga " +
      "haqli " +
      "emas.\n\n" +
      "⚠️ Nima " +
      "uchun bu " +
      "muhim? " +
      "Chunki " +
      "vasiyatnoma " +
      "mazmuni " +
      "ma'lum " +
      "bo'lsa, " +
      "vasiyat " +
      "qiluvchiga " +
      "BOSIM " +
      "o'tkazish " +
      "xavfi " +
      "paydo " +
      "bo'ladi.\n\n" +
      "Sir " +
      "saqlash " +
      "qoidasi " +
      "buzilsa, " +
      "vasiyat " +
      "qiluvchi " +
      "o'z " +
      "huquqlarini " +
      "himoya " +
      "qilishga " +
      "haqli.\n\n" +
      "Amaliy " +
      "maslahat: " +
      "vasiyatnoma " +
      "tuzganingizni " +
      "keng " +
      "e'lon " +
      "qilmang — " +
      "bu oilaviy " +
      "ziddiyatning " +
      "eng " +
      "keng " +
      "tarqalgan " +
      "manbai.",
    example:
      "Notarius " +
      "vasiyatnoma " +
      "mazmunini " +
      "qarindoshga " +
      "aytib " +
      "qo'ydi. " +
      "Bu sir " +
      "saqlash " +
      "qoidasini " +
      "buzish " +
      "hisoblanadi.",
    keyPoints: [
      "Vasiyatnoma mazmuni sir hisoblanadi",
      "Notarius va guvohlar uni oshkor qila olmaydi",
      "Sir meros ochilgunga qadar saqlanadi",
      "Qoida vasiyat qiluvchini bosimdan himoya qiladi",
    ],
    warning:
      "Vasiyatnoma " +
      "haqida " +
      "gapirish " +
      "sizni " +
      "bosim " +
      "ostiga " +
      "qo'yishi " +
      "mumkin " +
      "— " +
      "ehtiyot " +
      "bo'ling.",
    lawRefs: [
      { code: "FK2", article: "1128" },
      { code: "FK2", article: "1125" },
    ],
  },

  /* ── 18 ────────────────────────────────────────────────────── */
  {
    heading: "Vasiyatni talqin qilish",
    text:
      "Vasiyatnoma " +
      "matni " +
      "noaniq " +
      "bo'lsa — " +
      "bu " +
      "amalda " +
      "tez-tez " +
      "uchraydi — " +
      "u TALQIN " +
      "qilinadi.\n\n" +
      "Talqin " +
      "qilishning " +
      "asosiy " +
      "qoidasi: " +
      "so'zlarning " +
      "va " +
      "iboralarning " +
      "HAQIQIY " +
      "MA'NOSI " +
      "hisobga " +
      "olinadi.\n\n" +
      "Ma'no " +
      "noaniq " +
      "bo'lsa, " +
      "vasiyatnomaning " +
      "boshqa " +
      "qismlari " +
      "bilan " +
      "solishtiriladi " +
      "va " +
      "vasiyat " +
      "qiluvchining " +
      "IRODASI " +
      "eng " +
      "to'liq " +
      "amalga " +
      "oshishi " +
      "ta'minlanadi.\n\n" +
      "⚠️ Talqinni " +
      "notarius, " +
      "vasiyatnomani " +
      "ijro " +
      "etuvchi " +
      "yoki SUD " +
      "amalga " +
      "oshiradi.\n\n" +
      "Amaliy " +
      "xulosa: " +
      "vasiyatnomani " +
      "iloji " +
      "boricha " +
      "ANIQ " +
      "yozing. " +
      "Mol-mulkni " +
      "aniq " +
      "belgilang " +
      "(manzil, " +
      "raqam, " +
      "tavsif), " +
      "shaxslarni " +
      "to'liq " +
      "nomi " +
      "bilan " +
      "ko'rsating.\n\n" +
      "\"Katta " +
      "o'g'limga " +
      "uyimni\" " +
      "degan " +
      "ifoda " +
      "bir " +
      "nechta " +
      "uy " +
      "bo'lsa " +
      "nizoga " +
      "sabab " +
      "bo'ladi.",
    example:
      "Vasiyatnomada " +
      "\"shahardagi " +
      "uyim " +
      "qizimga\" " +
      "deb " +
      "yozilgan, " +
      "lekin " +
      "shaharda " +
      "ikkita " +
      "uy bor " +
      "edi. " +
      "Bu " +
      "talqin " +
      "va nizo " +
      "predmetiga " +
      "aylanadi.",
    keyPoints: [
      "Noaniq vasiyatnoma talqin qilinadi",
      "So'zlarning haqiqiy ma'nosi asos bo'ladi",
      "Vasiyat qiluvchining irodasi eng to'liq amalga oshiriladi",
      "Talqinni notarius, ijrochi yoki sud amalga oshiradi",
    ],
    warning:
      "Mol-mulkni " +
      "ANIQ " +
      "belgilang: " +
      "manzil, " +
      "kadastr " +
      "raqami, " +
      "hisob " +
      "raqami. " +
      "Umumiy " +
      "ifodalar " +
      "nizo " +
      "keltiradi.",
    lawRefs: [
      { code: "FK2", article: "1129" },
      { code: "FK2", article: "1131" },
    ],
  },

  /* ── 19 ────────────────────────────────────────────────────── */
  {
    heading: "Vasiyatnoma haqiqiy emas deb topilishi",
    text:
      "Vasiyatnomani " +
      "e'tiroz " +
      "qilish " +
      "mumkinmi? " +
      "Ha — " +
      "lekin " +
      "faqat " +
      "meros " +
      "ochilgandan " +
      "KEYIN va " +
      "faqat " +
      "SUD " +
      "orqali.\n\n" +
      "Haqiqiy " +
      "emas deb " +
      "topish " +
      "asoslari " +
      "odatda: " +
      "SHAKL " +
      "talablarining " +
      "buzilishi; " +
      "vasiyat " +
      "qiluvchining " +
      "muomala " +
      "layoqatsizligi; " +
      "irodaning " +
      "erkin " +
      "bo'lmasligi " +
      "(aldov, " +
      "tahdid, " +
      "zo'rlik); " +
      "mazmunning " +
      "qonunga " +
      "zidligi.\n\n" +
      "⚠️ MUHIM " +
      "ANIQLIK: " +
      "vasiyatnoma " +
      "TO'LIQ " +
      "yoki " +
      "QISMAN " +
      "haqiqiy " +
      "emas deb " +
      "topilishi " +
      "mumkin. " +
      "Qisman " +
      "bo'lsa, " +
      "qolgan " +
      "qismi " +
      "amal " +
      "qilishda " +
      "davom " +
      "etadi.\n\n" +
      "Yana " +
      "bir " +
      "muhim " +
      "qoida: " +
      "mayda, " +
      "irodani " +
      "buzmaydigan " +
      "kamchiliklar " +
      "(masalan " +
      "imlo " +
      "xatosi) " +
      "vasiyatnomani " +
      "bekor " +
      "qilish " +
      "uchun " +
      "asos " +
      "bo'lmaydi.\n\n" +
      "Isbot " +
      "yuki " +
      "e'tiroz " +
      "bildirayotgan " +
      "shaxsda " +
      "bo'ladi.",
    example:
      "Merosxo'r " +
      "vasiyatnoma " +
      "tuzilganda " +
      "otasi " +
      "og'ir " +
      "kasal " +
      "va o'z " +
      "harakatlarini " +
      "anglay " +
      "olmagan " +
      "deb " +
      "da'vo " +
      "qildi. " +
      "Buni " +
      "tibbiy " +
      "hujjat " +
      "va " +
      "ekspertiza " +
      "bilan " +
      "isbotlash " +
      "kerak.",
    keyPoints: [
      "E'tiroz faqat meros ochilgandan keyin va sud orqali",
      "Shakl, layoqat, iroda va mazmun asos bo'ladi",
      "Vasiyatnoma to'liq yoki qisman bekor qilinishi mumkin",
      "Mayda kamchiliklar bekor qilish uchun asos emas",
    ],
    warning:
      "E'tiroz " +
      "uchun " +
      "dalil " +
      "kerak: " +
      "tibbiy " +
      "hujjat, " +
      "guvohlar, " +
      "ekspertiza. " +
      "Shubha " +
      "o'zi " +
      "yetarli " +
      "emas.",
    lawRefs: [
      { code: "FK2", article: "1130" },
      { code: "FK2", article: "1124" },
    ],
  },

  /* ── 20 ────────────────────────────────────────────────────── */
  {
    heading: "Vasiyatnomani ijro etish",
    text:
      "Vasiyatnoma " +
      "yozildi — " +
      "kim uni " +
      "IJRO " +
      "etadi?\n\n" +
      "Odatda " +
      "vasiyatnomani " +
      "merosxo'rlarning " +
      "o'zi ijro " +
      "etadi. " +
      "Lekin " +
      "vasiyat " +
      "qiluvchi " +
      "maxsus " +
      "IJROCHI " +
      "(vasiy) " +
      "tayinlashi " +
      "mumkin.\n\n" +
      "Ijrochi " +
      "merosxo'r " +
      "bo'lishi " +
      "shart " +
      "emas — bu " +
      "uchinchi " +
      "shaxs ham " +
      "bo'lishi " +
      "mumkin. " +
      "Uning " +
      "roziligi " +
      "talab " +
      "qilinadi.\n\n" +
      "Ijrochining " +
      "vazifalari " +
      "odatda: " +
      "meros " +
      "mol-mulkini " +
      "muhofaza " +
      "qilish va " +
      "boshqarish; " +
      "merosxo'rlarga " +
      "yetkazib " +
      "berish; " +
      "vasiyat " +
      "majburiyatlarining " +
      "bajarilishini " +
      "ta'minlash.\n\n" +
      "⚠️ Ijrochi " +
      "tayinlash " +
      "ayniqsa " +
      "foydali " +
      "bo'lgan " +
      "holatlar: " +
      "merosxo'rlar " +
      "o'rtasida " +
      "ziddiyat " +
      "kutilsa; " +
      "voyaga " +
      "yetmagan " +
      "merosxo'rlar " +
      "bo'lsa; " +
      "mol-mulk " +
      "murakkab " +
      "boshqaruvni " +
      "talab " +
      "qilsa " +
      "(biznes, " +
      "qimmatli " +
      "qog'ozlar).",
    example:
      "Vasiyat " +
      "qiluvchi " +
      "farzandlari " +
      "o'rtasida " +
      "nizo " +
      "chiqishini " +
      "bilgani " +
      "uchun " +
      "ishonchli " +
      "yurist " +
      "do'stini " +
      "vasiyatnoma " +
      "ijrochisi " +
      "qilib " +
      "tayinladi.",
    keyPoints: [
      "Odatda vasiyatnomani merosxo'rlar ijro etadi",
      "Maxsus ijrochi tayinlash mumkin",
      "Ijrochi merosxo'r bo'lishi shart emas",
      "Uning roziligi talab qilinadi",
    ],
    warning:
      "Ijrochini " +
      "tayinlashdan " +
      "oldin " +
      "uning " +
      "roziligini " +
      "oling — " +
      "aks " +
      "holda " +
      "u " +
      "bosh " +
      "tortishi " +
      "mumkin.",
    lawRefs: [
      { code: "FK2", article: "1131" },
      { code: "FK2", article: "1144" },
    ],
  },

  /* ── 21 ────────────────────────────────────────────────────── */
  {
    heading: "Vasiyat majburiyati (legat)",
    text:
      "Vasiyat " +
      "qiluvchi " +
      "merosxo'r " +
      "zimmasiga " +
      "uchinchi " +
      "shaxs " +
      "foydasiga " +
      "muayyan " +
      "majburiyat " +
      "yuklashi " +
      "mumkin. " +
      "Bu — " +
      "vasiyat " +
      "majburiyati.\n\n" +
      "Mohiyati: " +
      "merosxo'r " +
      "merosni " +
      "oladi, " +
      "lekin " +
      "uning " +
      "hisobidan " +
      "boshqa " +
      "shaxsga " +
      "biror " +
      "narsa " +
      "berishi " +
      "yoki " +
      "qilishi " +
      "kerak " +
      "bo'ladi.\n\n" +
      "Odatiy " +
      "misollar: " +
      "meros " +
      "qilib " +
      "olingan " +
      "uyda " +
      "muayyan " +
      "shaxsning " +
      "umrbod " +
      "yashash " +
      "huquqini " +
      "ta'minlash; " +
      "muayyan " +
      "summa " +
      "to'lash; " +
      "biror " +
      "buyumni " +
      "berish.\n\n" +
      "⚠️ MUHIM " +
      "CHEKLOV: " +
      "vasiyat " +
      "majburiyati " +
      "meros " +
      "qiymati " +
      "doirasida " +
      "bajariladi. " +
      "Merosxo'r " +
      "o'z " +
      "hisobidan " +
      "qo'shimcha " +
      "to'lashi " +
      "shart " +
      "emas.\n\n" +
      "Bu " +
      "vosita " +
      "juda " +
      "foydali: " +
      "u " +
      "mol-mulkni " +
      "bo'lib " +
      "yubormasdan " +
      "boshqa " +
      "shaxsning " +
      "manfaatini " +
      "ham " +
      "himoya " +
      "qiladi.",
    example:
      "Ota uyni " +
      "o'g'liga " +
      "vasiyat " +
      "qildi, " +
      "lekin " +
      "opasining " +
      "shu uyda " +
      "umrbod " +
      "yashash " +
      "huquqini " +
      "shart " +
      "qilib " +
      "qo'ydi. " +
      "O'g'il " +
      "uy " +
      "egasi " +
      "bo'ladi, " +
      "opa " +
      "esa " +
      "yashash " +
      "huquqini " +
      "saqlaydi.",
    keyPoints: [
      "Merosxo'r zimmasiga uchinchi shaxs foydasiga majburiyat yuklanadi",
      "Umrbod yashash huquqi eng ko'p uchraydigan misol",
      "Majburiyat meros qiymati doirasida bajariladi",
      "Merosxo'r o'z hisobidan qo'shimcha to'lamaydi",
    ],
    warning:
      "Vasiyat " +
      "majburiyatini " +
      "aniq " +
      "yozing: " +
      "kimga, " +
      "nima, " +
      "qancha " +
      "muddat. " +
      "Noaniqlik " +
      "uni " +
      "ishlamas " +
      "holga " +
      "keltiradi.",
    lawRefs: [
      { code: "FK2", article: "1132" },
      { code: "FK2", article: "1131" },
    ],
  },

  /* ── 22 ────────────────────────────────────────────────────── */
  {
    heading: "Majburiyat yuklash",
    text:
      "Vasiyat " +
      "majburiyatiga " +
      "yaqin, " +
      "lekin " +
      "undan " +
      "farq " +
      "qiladigan " +
      "institut — " +
      "MAJBURIYAT " +
      "YUKLASH.\n\n" +
      "Vasiyat " +
      "qiluvchi " +
      "merosxo'r " +
      "zimmasiga " +
      "umumfoydali " +
      "maqsadga " +
      "qaratilgan " +
      "biror " +
      "harakatni " +
      "bajarish " +
      "majburiyatini " +
      "yuklashi " +
      "mumkin.\n\n" +
      "Farqi " +
      "nimada? " +
      "Vasiyat " +
      "majburiyatida " +
      "aniq " +
      "SHAXS " +
      "manfaatdor " +
      "bo'ladi " +
      "va u " +
      "bajarishni " +
      "talab " +
      "qila " +
      "oladi. " +
      "Majburiyat " +
      "yuklashda " +
      "esa " +
      "maqsad " +
      "ko'proq " +
      "umumiy " +
      "xarakterga " +
      "ega.\n\n" +
      "Misollar: " +
      "kutubxonani " +
      "ilmiy " +
      "muassasaga " +
      "berish; " +
      "uy " +
      "hayvonlarini " +
      "parvarish " +
      "qilish; " +
      "muayyan " +
      "xayriya " +
      "ishini " +
      "amalga " +
      "oshirish.\n\n" +
      "⚠️ Ijro " +
      "etilishini " +
      "talab " +
      "qilish " +
      "huquqi " +
      "manfaatdor " +
      "shaxslarda " +
      "va " +
      "vasiyatnoma " +
      "ijrochisida " +
      "bo'ladi.",
    example:
      "Vasiyat " +
      "qiluvchi " +
      "kitob " +
      "to'plamini " +
      "meros " +
      "qilib " +
      "olgan " +
      "shaxs " +
      "zimmasiga " +
      "uni " +
      "mahalliy " +
      "kutubxonaga " +
      "topshirish " +
      "majburiyatini " +
      "yukladi.",
    keyPoints: [
      "Majburiyat yuklash umumfoydali maqsadga qaratiladi",
      "Vasiyat majburiyatidan farqi — aniq manfaatdor shaxs yo'q",
      "Ijroni manfaatdor shaxslar talab qilishi mumkin",
      "Vasiyatnoma ijrochisi ham nazorat qiladi",
    ],
    warning:
      "Bajarish " +
      "imkonsiz " +
      "yoki " +
      "noaniq " +
      "majburiyat " +
      "yuklamang " +
      "— u " +
      "amalda " +
      "ishlamaydi.",
    lawRefs: [
      { code: "FK2", article: "1133" },
      { code: "FK2", article: "1132" },
    ],
  },

  /* ── 23 ────────────────────────────────────────────────────── */
  {
    heading: "Vasiyat majburiyatidan voz kechish",
    text:
      "Vasiyat " +
      "majburiyati " +
      "bo'yicha " +
      "biror " +
      "narsa " +
      "olish " +
      "huquqiga " +
      "ega " +
      "bo'lgan " +
      "shaxs " +
      "(legatariy) " +
      "undan " +
      "VOZ " +
      "KECHISHI " +
      "mumkin.\n\n" +
      "Bu " +
      "huquq " +
      "muhim: " +
      "hech " +
      "kimni " +
      "biror " +
      "narsani " +
      "olishga " +
      "majburlab " +
      "bo'lmaydi.\n\n" +
      "⚠️ Voz " +
      "kechish " +
      "ba'zan " +
      "mantiqiy " +
      "bo'ladi: " +
      "masalan " +
      "olinadigan " +
      "narsa " +
      "bilan " +
      "birga " +
      "og'ir " +
      "yuk " +
      "(soliq, " +
      "saqlash " +
      "xarajati) " +
      "kelsa.\n\n" +
      "Voz " +
      "kechish " +
      "odatda " +
      "muayyan " +
      "shaxs " +
      "foydasiga " +
      "emas, " +
      "shunchaki " +
      "voz " +
      "kechish " +
      "sifatida " +
      "amalga " +
      "oshiriladi.\n\n" +
      "Voz " +
      "kechilgan " +
      "taqdirda " +
      "majburiyat " +
      "merosxo'r " +
      "zimmasidan " +
      "soqit " +
      "bo'ladi " +
      "va " +
      "tegishli " +
      "mol-mulk " +
      "meros " +
      "tarkibida " +
      "qoladi.\n\n" +
      "Voz " +
      "kechish " +
      "rasmiy " +
      "shaklda " +
      "bildirilishi " +
      "kerak.",
    example:
      "Legatariyga " +
      "uzoq " +
      "hududdagi " +
      "eski " +
      "uyda " +
      "yashash " +
      "huquqi " +
      "berildi, " +
      "lekin " +
      "u " +
      "boshqa " +
      "shaharda " +
      "yashaydi " +
      "va " +
      "uyni " +
      "saqlash " +
      "xarajati " +
      "katta. " +
      "U " +
      "voz " +
      "kechishi " +
      "mumkin.",
    keyPoints: [
      "Vasiyat majburiyatidan voz kechish mumkin",
      "Hech kimni biror narsa olishga majburlab bo'lmaydi",
      "Voz kechish rasmiy shaklda bildiriladi",
      "Majburiyat merosxo'r zimmasidan soqit bo'ladi",
    ],
    warning:
      "Voz " +
      "kechishdan " +
      "oldin " +
      "oqibatlarini " +
      "hisoblang " +
      "— " +
      "qaytarib " +
      "olish " +
      "odatda " +
      "mumkin " +
      "emas.",
    lawRefs: [
      { code: "FK2", article: "1149" },
      { code: "FK2", article: "1132" },
    ],
  },
];

module.exports = { SECTIONS };
