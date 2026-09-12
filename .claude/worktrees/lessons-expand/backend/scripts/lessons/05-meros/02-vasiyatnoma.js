"use strict";
/** MEROS MODULI — 2-DARS: VASIYATNOMA. FK2 1120–1133.
 *  Majburiy ulush (1141–1143) 4-darsda. */

const LESSON = {
  key: "vasiyatnoma",
  category: "inheritance",
  level: "mid",
  order: 5020,
  title: "Vasiyatnoma: tuzish, o'zgartirish, bekor qilish",
  desc:
    "Vasiyatnoma nima beradi, qanday shaklda tuziladi, uni qanday " +
    "o'zgartirish mumkin va u qachon haqiqiy emas deb topiladi.",
  objectives: [
    "Vasiyat erkinligini va uning chegarasini bilasiz",
    "Vasiyatnoma shakliga qo'yiladigan talablarni bilasiz",
    "Uni o'zgartirish va bekor qilish tartibini bilasiz",
    "Vasiyat majburiyati va ijrochi institutini tushunasiz",
  ],
  practicalSteps: [
    "Vasiyatnomani notarial tasdiqlang — boshqa shakl ishlamaydi",
    "Mol-mulkni ANIQ belgilang (manzil, kadastr raqami, hisob raqami)",
    "Zaxira merosxo'r tayinlashni o'ylab ko'ring",
    "Majburiy ulushga huquqli shaxslarni hisobga oling",
  ],
  sections: [
    {
      heading: "Vasiyatnoma va vasiyat erkinligi",
      text:
        "Vasiyatnoma — fuqaroning " +
        "vafotidan keyin mol-mulki " +
        "taqdirini belgilaydigan bir " +
        "tomonlama bitim.\n\n" +
        "U beradigan imkoniyat keng: " +
        "mol-mulkni ISTALGAN shaxsga " +
        "vasiyat qilish (qarindosh " +
        "bo'lishi shart emas); " +
        "ulushlarni O'ZI belgilash; " +
        "merosxo'rlarni merosdan " +
        "mahrum qilish.\n\n" +
        "⚠️ Vasiyatnoma SHAXSAN " +
        "tuziladi — uni vakil orqali " +
        "tuzib bo'lmaydi.\n\n" +
        "Tuzuvchi vasiyatnoma " +
        "tuzilayotgan paytda muomala " +
        "layoqatiga ega bo'lishi " +
        "kerak.\n\n" +
        "Vasiyat erkinligining yagona " +
        "jiddiy cheklovi — MAJBURIY " +
        "ULUSH (alohida darsda).",
      example:
        "Odam butun mol-mulkini do'stiga " +
        "vasiyat qildi. Bu qonuniy, " +
        "lekin voyaga yetmagan bolasi " +
        "majburiy ulush olish huquqini " +
        "saqlaydi.",
      keyPoints: [
        "Vasiyatnoma — bir tomonlama bitim",
        "Mol-mulkni istalgan shaxsga vasiyat qilish mumkin",
        "U faqat shaxsan tuziladi",
        "Yagona jiddiy cheklov — majburiy ulush",
      ],
      warning:
        "Vakolatnoma orqali tuzilgan " +
        "\"vasiyatnoma\" haqiqiy emas.",
      lawRefs: [{ code: "FK2", article: "1120" }],
    },
    {
      heading: "Shartli vasiyatnoma",
      text:
        "Vasiyatnomada SHART qo'yish " +
        "mumkinmi? Qonun bunday " +
        "imkoniyatni nazarda " +
        "tutadi.\n\n" +
        "Shartli vasiyatnomada " +
        "merosxo'rning meros olishi " +
        "muayyan shartning " +
        "bajarilishiga bog'lanadi.\n\n" +
        "⚠️ Lekin har qanday shart " +
        "qo'yib bo'lmaydi. Qonunga " +
        "yoki axloq normalariga zid " +
        "shartlar, shuningdek " +
        "merosxo'rning huquq va " +
        "erkinliklarini cheklaydigan " +
        "shartlar HAQIQIY EMAS.\n\n" +
        "Masalan \"turmushga chiqmaslik " +
        "sharti bilan\" yoki " +
        "\"muayyan dinni tanlash " +
        "sharti bilan\" degan " +
        "shartlar asosiy huquqlarni " +
        "cheklaydi.\n\n" +
        "Shart bekor qilinsa " +
        "vasiyatnoma odatda shartsiz " +
        "amal qiladi.",
      example:
        "Vasiyatnomada \"qizim turmushga " +
        "chiqmasa meros oladi\" deb " +
        "yozildi. Bunday shart asosiy " +
        "huquqni cheklaydi va haqiqiy " +
        "emas.",
      keyPoints: [
        "Vasiyatnomada shart qo'yish mumkin",
        "Qonunga va axloqqa zid shartlar haqiqiy emas",
        "Asosiy huquqlarni cheklovchi shartlar ishlamaydi",
        "Shart bekor qilinsa vasiyatnoma amal qiladi",
      ],
      warning:
        "Shart qo'yishdan oldin " +
        "notarius bilan maslahatlashing " +
        "— noto'g'ri shart butun " +
        "niyatingizni buzishi mumkin.",
      lawRefs: [{ code: "FK2", article: "1121" }],
    },
    {
      heading: "Vorisdan keyingi vorislarni tayinlash",
      text:
        "Vasiyat qiluvchi ehtiyot " +
        "chorasini ko'rishi mumkin: " +
        "asosiy merosxo'r meros ololmasa " +
        "kim olishini oldindan " +
        "belgilash.\n\n" +
        "Bu — vorisdan keyingi vorisni " +
        "tayinlash (zaxira " +
        "merosxo'r).\n\n" +
        "U quyidagi hollarda ishlaydi: " +
        "asosiy merosxo'r meros " +
        "ochilgunga qadar vafot etsa; " +
        "merosni qabul qilmasa; undan " +
        "voz kechsa; noloyiq merosxo'r " +
        "deb topilsa.\n\n" +
        "⚠️ Bu juda foydali vosita: " +
        "usiz asosiy merosxo'r tushib " +
        "qolganda mol-mulk QONUN " +
        "bo'yicha taqsimlanib ketadi " +
        "— ya'ni vasiyat " +
        "qiluvchining irodasidan " +
        "boshqacha.",
      example:
        "Vasiyatnomada \"mol-mulkim " +
        "akamga, u ololmasa — " +
        "jiyanimga\" deb yozildi. Aka " +
        "vafot etganda mol-mulk " +
        "jiyanga o'tadi.",
      keyPoints: [
        "Zaxira merosxo'r tayinlash mumkin",
        "U asosiy merosxo'r tushib qolganda ishlaydi",
        "Vafot, voz kechish va noloyiqlik qamraladi",
        "Usiz mol-mulk qonun bo'yicha taqsimlanadi",
      ],
      warning:
        "Zaxira merosxo'r belgilamaslik " +
        "— vasiyatnomadagi eng ko'p " +
        "uchraydigan kamchilik.",
      lawRefs: [{ code: "FK2", article: "1122" }],
    },
    {
      heading: "Vasiyat qilinmagan qismni meros qilib olish",
      text:
        "Vasiyatnoma mol-mulkning faqat " +
        "BIR QISMINI qamragan bo'lsa " +
        "nima bo'ladi?\n\n" +
        "Javob aniq: vasiyat qilinmagan " +
        "qism QONUN bo'yicha " +
        "taqsimlanadi.\n\n" +
        "Ya'ni ikki asos bir vaqtda " +
        "ishlashi mumkin.\n\n" +
        "⚠️ AMALIY MUHIM NUQTA: " +
        "vasiyatnomada \"kvartiram " +
        "o'g'limga\" deb yozilgan " +
        "bo'lsa, bank omonati va " +
        "avtomobil qonun bo'yicha " +
        "BARCHA merosxo'rlar " +
        "o'rtasida taqsimlanadi.\n\n" +
        "Bu ko'pincha kutilmagan " +
        "natija beradi — shuning " +
        "uchun vasiyatnomada \"barcha " +
        "mol-mulkim\" degan umumiy " +
        "ifoda ishlatish ham bir " +
        "yechim.",
      example:
        "Vasiyatnomada faqat uy " +
        "ko'rsatilgan edi. Vafotdan " +
        "keyin bank hisobida katta " +
        "summa borligi aniqlandi — u " +
        "qonun bo'yicha taqsimlanadi.",
      keyPoints: [
        "Vasiyat qilinmagan qism qonun bo'yicha taqsimlanadi",
        "Ikki asos bir vaqtda ishlashi mumkin",
        "Bu ko'pincha kutilmagan natija beradi",
        "\"Barcha mol-mulkim\" ifodasi muammoni hal qiladi",
      ],
      warning:
        "Vasiyatnoma tuzgach yangi " +
        "mol-mulk orttirsangiz uni " +
        "ham qamrab olishini " +
        "tekshiring.",
      lawRefs: [{ code: "FK2", article: "1123" }],
    },
    {
      heading: "Vasiyatnoma shakliga doir umumiy qoidalar",
      text:
        "⚠️ SHAKL — vasiyatnomadagi eng " +
        "ko'p nizoga sabab bo'ladigan " +
        "masala. Shakl buzilsa " +
        "vasiyatnoma HAQIQIY EMAS deb " +
        "topiladi.\n\n" +
        "Umumiy qoida: vasiyatnoma YOZMA " +
        "shaklda tuziladi va notarial " +
        "tasdiqlanadi.\n\n" +
        "Unda bo'lishi kerak: tuzilgan " +
        "JOY va SANA; vasiyat " +
        "qiluvchining IMZOSI; " +
        "notarial tasdiq.\n\n" +
        "SANA hal qiluvchi: bir necha " +
        "vasiyatnoma bo'lsa OXIRGISI " +
        "amal qiladi.\n\n" +
        "Vasiyat qiluvchi jismoniy " +
        "nuqson yoki boshqa sabab " +
        "bilan o'zi imzolay olmasa, " +
        "qonun belgilagan tartibda " +
        "boshqa shaxs imzolashi " +
        "mumkin.",
      example:
        "Odam vasiyatnomani qo'lda " +
        "yozdi, lekin notariusga " +
        "bormadi. Bunday hujjat " +
        "notarial shakl talabini " +
        "bajarmagani uchun haqiqiy " +
        "emas deb topilishi mumkin.",
      keyPoints: [
        "Vasiyatnoma yozma shaklda va notarial tasdiqlanadi",
        "Joy, sana va imzo majburiy elementlar",
        "Bir necha vasiyatnomada oxirgisi amal qiladi",
        "Shakl buzilsa vasiyatnoma haqiqiy emas",
      ],
      warning:
        "Notarial tasdiqsiz \"vasiyat " +
        "xati\" ko'pincha hech qanday " +
        "huquqiy kuchga ega " +
        "bo'lmaydi.",
      lawRefs: [{ code: "FK2", article: "1124" }],
    },
    {
      heading: "Notarial tasdiqlangan vasiyatnoma",
      text:
        "Asosiy va eng ishonchli shakl.\n\n" +
        "Tartib: vasiyat qiluvchi " +
        "notariusga SHAXSAN boradi; " +
        "notarius uning shaxsini va " +
        "muomala layoqatini " +
        "tekshiradi; vasiyatnoma " +
        "yoziladi yoki uning " +
        "so'zlaridan yozib olinadi; " +
        "o'qib eshittiriladi va " +
        "imzolanadi.\n\n" +
        "⚠️ Notariusning roli faqat " +
        "muhr bosish emas: u vasiyat " +
        "qiluvchining irodasi ERKIN " +
        "ekanini va u hujjat " +
        "mazmunini tushunayotganini " +
        "tekshiradi.\n\n" +
        "Aynan shu sababdan notarial " +
        "vasiyatnomani sudda e'tiroz " +
        "qilish ancha qiyin.\n\n" +
        "Vasiyatnoma notariusda " +
        "saqlanadi — ya'ni yo'qolib " +
        "ketmaydi.",
      example:
        "Merosxo'rlar vasiyatnomani " +
        "topa olmadi. Notarial " +
        "tasdiqlangan bo'lsa uni " +
        "notariat reyestridan topish " +
        "mumkin.",
      keyPoints: [
        "Notarial shakl eng ishonchli variant",
        "Notarius shaxs va muomala layoqatini tekshiradi",
        "Irodaning erkinligi ham baholanadi",
        "Vasiyatnoma notariusda saqlanadi",
      ],
      warning:
        "Notariusga manfaatdor " +
        "shaxslarsiz boring — yonida " +
        "ular bo'lishi \"bosim " +
        "bo'lgan\" degan e'tirozga " +
        "asos beradi.",
      lawRefs: [{ code: "FK2", article: "1125" }],
    },
    {
      heading: "Tenglashtirilgan vasiyatnomalar",
      text:
        "Ba'zan notariusga borish " +
        "imkonsiz bo'ladi — kasalxona, " +
        "harbiy xizmat, uzoq safar.\n\n" +
        "Qonun bunday holatlar uchun " +
        "yechim beradi: notarial " +
        "tasdiqlangan vasiyatnomalarga " +
        "TENGLASHTIRILGAN " +
        "vasiyatnomalar.\n\n" +
        "Ular muayyan mansabdor " +
        "shaxslar tomonidan " +
        "tasdiqlanadi — odatda " +
        "davolash muassasalarida bosh " +
        "yoki navbatchi shifokor; " +
        "harbiy qismlarda qo'mondon; " +
        "ozodlikdan mahrum qilish " +
        "joylarida boshliq.\n\n" +
        "⚠️ Bunday vasiyatnomalar " +
        "notarial tasdiqlangan bilan " +
        "TENG kuchga ega — ular " +
        "\"ikkinchi darajali\" hujjat " +
        "emas.",
      example:
        "Bemor og'ir ahvolda va " +
        "notariusga bora olmaydi. Bosh " +
        "shifokor tomonidan " +
        "tasdiqlangan vasiyatnoma " +
        "to'liq huquqiy kuchga ega.",
      keyPoints: [
        "Notariusga borish imkonsiz bo'lganda muqobil shakl bor",
        "Muayyan mansabdor shaxslar tasdiqlaydi",
        "Kasalxona va harbiy qism holatlari qamralgan",
        "Bunday vasiyatnoma notarial bilan teng kuchga ega",
      ],
      warning:
        "Tasdiqlash huquqi faqat " +
        "qonunda ko'rsatilgan " +
        "shaxslarda — boshqa rahbar " +
        "tasdiqlagan hujjat " +
        "ishlamaydi.",
      lawRefs: [{ code: "FK2", article: "1126" }],
    },
    {
      heading: "Vasiyatnomani bekor qilish va o'zgartirish",
      text:
        "Vasiyatnoma abadiy emas — " +
        "vasiyat qiluvchi uni ISTALGAN " +
        "PAYTDA o'zgartirishi yoki " +
        "bekor qilishi mumkin.\n\n" +
        "⚠️ ENG MUHIM NUQTA: buning " +
        "uchun hech kimning roziligi " +
        "KERAK EMAS va sababni " +
        "tushuntirish ham shart " +
        "emas.\n\n" +
        "Usullari: yangi vasiyatnoma " +
        "tuzish (oldingisi to'liq yoki " +
        "qisman kuchini yo'qotadi); " +
        "bekor qilish to'g'risida " +
        "alohida ariza berish.\n\n" +
        "Aynan shu sababdan " +
        "vasiyatnomadagi SANA " +
        "shunchalik muhim.\n\n" +
        "Vasiyat qiluvchi tirikligida " +
        "hech kim vasiyatnomaga " +
        "e'tiroz bildira olmaydi.",
      example:
        "Ota vasiyatnomani o'zgartirdi " +
        "va yangi hujjat tuzdi. Eski " +
        "vasiyatnomani qo'lida ushlab " +
        "turgan merosxo'r unga tayana " +
        "olmaydi.",
      keyPoints: [
        "Vasiyatnomani istalgan paytda bekor qilish mumkin",
        "Hech kimning roziligi kerak emas",
        "Yangi vasiyatnoma eskisining kuchini yo'qotadi",
        "Tirikligida e'tiroz bildirib bo'lmaydi",
      ],
      warning:
        "\"Roziman/rozimasman\" degan " +
        "bahslar vasiyat qiluvchi " +
        "tirikligida ma'nosiz.",
      lawRefs: [{ code: "FK2", article: "1127" }],
    },
    {
      heading: "Vasiyatnomaning sir saqlanishi",
      text:
        "Vasiyatnoma mazmuni SIR " +
        "hisoblanadi va bu qonun bilan " +
        "himoyalanadi.\n\n" +
        "Notarius, vasiyatnomani " +
        "tasdiqlagan boshqa shaxs, " +
        "guvohlar va mazmunini bilgan " +
        "boshqalar meros ochilgunga " +
        "qadar uni oshkor qilishga " +
        "haqli emas.\n\n" +
        "⚠️ Nima uchun muhim: " +
        "vasiyatnoma mazmuni ma'lum " +
        "bo'lsa, vasiyat qiluvchiga " +
        "BOSIM o'tkazish xavfi paydo " +
        "bo'ladi.\n\n" +
        "Sir saqlash qoidasi buzilsa " +
        "vasiyat qiluvchi o'z " +
        "huquqlarini himoya qilishga " +
        "haqli.\n\n" +
        "Amaliy maslahat: vasiyatnoma " +
        "tuzganingizni keng e'lon " +
        "qilmang.",
      example:
        "Notarius vasiyatnoma mazmunini " +
        "qarindoshga aytib qo'ydi. Bu " +
        "sir saqlash qoidasini buzish " +
        "hisoblanadi.",
      keyPoints: [
        "Vasiyatnoma mazmuni sir hisoblanadi",
        "Notarius va guvohlar uni oshkor qila olmaydi",
        "Sir meros ochilgunga qadar saqlanadi",
        "Qoida vasiyat qiluvchini bosimdan himoya qiladi",
      ],
      warning:
        "Vasiyatnoma haqida gapirish " +
        "sizni bosim ostiga qo'yishi " +
        "mumkin.",
      lawRefs: [{ code: "FK2", article: "1128" }],
    },
    {
      heading: "Vasiyatni talqin qilish",
      text:
        "Vasiyatnoma matni noaniq bo'lsa " +
        "— bu amalda tez-tez uchraydi " +
        "— u TALQIN qilinadi.\n\n" +
        "Asosiy qoida: so'zlarning va " +
        "iboralarning HAQIQIY MA'NOSI " +
        "hisobga olinadi.\n\n" +
        "Ma'no noaniq bo'lsa " +
        "vasiyatnomaning boshqa " +
        "qismlari bilan solishtiriladi " +
        "va vasiyat qiluvchining " +
        "IRODASI eng to'liq amalga " +
        "oshishi ta'minlanadi.\n\n" +
        "Talqinni notarius, " +
        "vasiyatnomani ijro etuvchi " +
        "yoki SUD amalga oshiradi.\n\n" +
        "⚠️ AMALIY XULOSA: " +
        "vasiyatnomani iloji boricha " +
        "ANIQ yozing — mol-mulkni " +
        "manzil, kadastr raqami yoki " +
        "hisob raqami bilan " +
        "belgilang.",
      example:
        "Vasiyatnomada \"shahardagi uyim " +
        "qizimga\" deb yozilgan, lekin " +
        "shaharda ikkita uy bor edi. " +
        "Bu talqin va nizo predmetiga " +
        "aylanadi.",
      keyPoints: [
        "Noaniq vasiyatnoma talqin qilinadi",
        "So'zlarning haqiqiy ma'nosi asos bo'ladi",
        "Vasiyat qiluvchining irodasi ta'minlanadi",
        "Talqinni notarius, ijrochi yoki sud amalga oshiradi",
      ],
      warning:
        "\"Katta o'g'limga uyimni\" kabi " +
        "umumiy ifodalar nizo " +
        "keltiradi — aniq yozing.",
      lawRefs: [{ code: "FK2", article: "1129" }],
    },
    {
      heading: "Vasiyatnomaning haqiqiy emasligi",
      text:
        "Vasiyatnomani e'tiroz qilish " +
        "mumkinmi? Ha — lekin faqat " +
        "meros ochilgandan KEYIN va " +
        "faqat SUD orqali.\n\n" +
        "Asoslar odatda: SHAKL " +
        "talablarining buzilishi; " +
        "vasiyat qiluvchining muomala " +
        "layoqatsizligi; irodaning " +
        "erkin bo'lmasligi (aldov, " +
        "tahdid, zo'rlik); mazmunning " +
        "qonunga zidligi.\n\n" +
        "⚠️ MUHIM ANIQLIK: vasiyatnoma " +
        "TO'LIQ yoki QISMAN haqiqiy " +
        "emas deb topilishi mumkin. " +
        "Qisman bo'lsa qolgan qismi " +
        "amal qilishda davom " +
        "etadi.\n\n" +
        "Mayda, irodani buzmaydigan " +
        "kamchiliklar (imlo xatosi) " +
        "bekor qilish uchun asos " +
        "bo'lmaydi.",
      example:
        "Merosxo'r vasiyatnoma " +
        "tuzilganda otasi og'ir kasal " +
        "va o'z harakatlarini anglay " +
        "olmagan deb da'vo qildi. " +
        "Buni tibbiy hujjat va " +
        "ekspertiza bilan isbotlash " +
        "kerak.",
      keyPoints: [
        "E'tiroz meros ochilgandan keyin va sud orqali",
        "Shakl, layoqat, iroda va mazmun asos bo'ladi",
        "Vasiyatnoma to'liq yoki qisman bekor qilinadi",
        "Mayda kamchiliklar asos bo'lmaydi",
      ],
      warning:
        "E'tiroz uchun dalil kerak: " +
        "tibbiy hujjat, guvohlar, " +
        "ekspertiza. Shubha yetarli " +
        "emas.",
      lawRefs: [{ code: "FK2", article: "1130" }],
    },
    {
      heading: "Vasiyatnomani ijro etish",
      text:
        "Vasiyatnoma yozildi — kim uni " +
        "IJRO etadi?\n\n" +
        "Odatda merosxo'rlarning o'zi. " +
        "Lekin vasiyat qiluvchi maxsus " +
        "IJROCHI tayinlashi mumkin.\n\n" +
        "Ijrochi merosxo'r bo'lishi " +
        "shart emas — bu uchinchi " +
        "shaxs ham bo'lishi mumkin. " +
        "Uning roziligi talab " +
        "qilinadi.\n\n" +
        "Vazifalari odatda: meros " +
        "mol-mulkini muhofaza qilish " +
        "va boshqarish; " +
        "merosxo'rlarga yetkazib " +
        "berish; vasiyat " +
        "majburiyatlarining " +
        "bajarilishini " +
        "ta'minlash.\n\n" +
        "⚠️ Ijrochi ayniqsa foydali: " +
        "merosxo'rlar o'rtasida " +
        "ziddiyat kutilsa; voyaga " +
        "yetmagan merosxo'rlar " +
        "bo'lsa; mol-mulk murakkab " +
        "boshqaruvni talab qilsa.",
      example:
        "Vasiyat qiluvchi farzandlari " +
        "o'rtasida nizo chiqishini " +
        "bilgani uchun ishonchli " +
        "yurist do'stini ijrochi qilib " +
        "tayinladi.",
      keyPoints: [
        "Odatda vasiyatnomani merosxo'rlar ijro etadi",
        "Maxsus ijrochi tayinlash mumkin",
        "Ijrochi merosxo'r bo'lishi shart emas",
        "Uning roziligi talab qilinadi",
      ],
      warning:
        "Ijrochini tayinlashdan oldin " +
        "uning roziligini oling.",
      lawRefs: [{ code: "FK2", article: "1131" }],
    },
    {
      heading: "Vasiyat majburiyati (legat)",
      text:
        "Vasiyat qiluvchi merosxo'r " +
        "zimmasiga uchinchi shaxs " +
        "foydasiga majburiyat yuklashi " +
        "mumkin — bu vasiyat " +
        "majburiyati.\n\n" +
        "Mohiyati: merosxo'r merosni " +
        "oladi, lekin uning hisobidan " +
        "boshqa shaxsga biror narsa " +
        "berishi yoki qilishi kerak " +
        "bo'ladi.\n\n" +
        "Odatiy misollar: meros qilib " +
        "olingan uyda muayyan " +
        "shaxsning umrbod yashash " +
        "huquqini ta'minlash; muayyan " +
        "summa to'lash; biror buyumni " +
        "berish.\n\n" +
        "⚠️ MUHIM CHEKLOV: majburiyat " +
        "meros QIYMATI DOIRASIDA " +
        "bajariladi. Merosxo'r o'z " +
        "hisobidan qo'shimcha " +
        "to'lashi shart emas.",
      example:
        "Ota uyni o'g'liga vasiyat " +
        "qildi, lekin opasining shu " +
        "uyda umrbod yashash huquqini " +
        "shart qilib qo'ydi.",
      keyPoints: [
        "Merosxo'r zimmasiga uchinchi shaxs foydasiga majburiyat yuklanadi",
        "Umrbod yashash huquqi eng ko'p uchraydigan misol",
        "Majburiyat meros qiymati doirasida bajariladi",
        "Merosxo'r o'z hisobidan qo'shimcha to'lamaydi",
      ],
      warning:
        "Vasiyat majburiyatini aniq " +
        "yozing: kimga, nima, qancha " +
        "muddat.",
      lawRefs: [{ code: "FK2", article: "1132" }],
    },
    {
      heading: "Majburiyat yuklash",
      text:
        "Vasiyat majburiyatiga yaqin, " +
        "lekin undan farq qiladigan " +
        "institut — MAJBURIYAT " +
        "YUKLASH.\n\n" +
        "Vasiyat qiluvchi merosxo'r " +
        "zimmasiga UMUMFOYDALI " +
        "maqsadga qaratilgan biror " +
        "harakatni bajarish " +
        "majburiyatini yuklashi " +
        "mumkin.\n\n" +
        "⚠️ FARQI: vasiyat " +
        "majburiyatida aniq SHAXS " +
        "manfaatdor bo'ladi va u " +
        "bajarishni talab qila oladi. " +
        "Majburiyat yuklashda esa " +
        "maqsad ko'proq umumiy " +
        "xarakterga ega.\n\n" +
        "Misollar: kutubxonani ilmiy " +
        "muassasaga berish; uy " +
        "hayvonlarini parvarish " +
        "qilish; muayyan xayriya " +
        "ishini amalga oshirish.\n\n" +
        "Ijroni manfaatdor shaxslar " +
        "va vasiyatnoma ijrochisi " +
        "talab qilishi mumkin.",
      example:
        "Vasiyat qiluvchi kitob " +
        "to'plamini meros qilib olgan " +
        "shaxs zimmasiga uni mahalliy " +
        "kutubxonaga topshirish " +
        "majburiyatini yukladi.",
      keyPoints: [
        "Majburiyat yuklash umumfoydali maqsadga qaratiladi",
        "Vasiyat majburiyatidan farqi — aniq manfaatdor shaxs yo'q",
        "Ijroni manfaatdor shaxslar talab qilishi mumkin",
        "Vasiyatnoma ijrochisi ham nazorat qiladi",
      ],
      warning:
        "Bajarish imkonsiz yoki noaniq " +
        "majburiyat yuklamang — u " +
        "amalda ishlamaydi.",
      lawRefs: [{ code: "FK2", article: "1133" }],
    },
  ],
};

module.exports = { LESSON };
