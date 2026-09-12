"use strict";
/**
 * MODUL 5 — MEROS HUQUQI (6 dars)
 *
 * Manba: Fuqarolik kodeksi 2-qism (FK2), meros bo'limi.
 *
 * ⚠️ MEROS FK EMAS, FK2 DA. Bu ilgari xatoga sabab bo'lgan:
 * `lessonPractice.js` dagi mavzu-kodeks xaritasi meros uchun FK ni
 * ko'rsatardi va AI topshiriqlari noto'g'ri kodeksdan qidirilardi.
 * Yangi darslar yozilganda ham shu xatoni takrorlamaslik kerak.
 *
 * Mavjud "Meros huquqi" darsi (`lessonContentData.js`, order: 40)
 * asoslarni beradi; bu yerdagilar tor mavzularni ochadi.
 */

const LESSONS = [
  /* ═══════════════════════════════════════════════════════════════
     1. Qonun bo'yicha meros
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "meros-qonun-boyicha",
    category: "inheritance",
    level: "basic",
    order: 5010,
    title: "Qonun bo'yicha meros: navbatlar",
    desc:
      "Vasiyat bo'lmasa meros kimga o'tadi: birinchidan beshinchi " +
      "navbatgacha, taqdim qilish huquqi va boqimlar.",
    objectives: [
      "Meros qachon va qayerda ochilishini bilasiz",
      "Qonun bo'yicha merosxo'rlar navbatlarini tartib bilan bilasiz",
      "Taqdim qilish huquqi bo'yicha vorislikni tushunasiz",
      "Kim noloyiq merosxo'r deb topilishini bilasiz",
    ],
    practicalSteps: [
      "Meros ochilgach notariusga murojaat qiling — muddatlar shu paytdan hisoblanadi",
      "Qarindoshlik darajasini tasdiqlovchi hujjatlarni to'plang: ular navbatni belgilaydi",
      "Meros qoldiruvchining oxirgi doimiy yashash joyini aniqlang — ish shu joyda yuritiladi",
      "Merosga kiradigan mol-mulk va qarzlar ro'yxatini tuzing",
    ],
    sections: [
      {
        heading: "Meros qachon ochiladi va nima merosga kiradi",
        text:
          "Vorislik ikki asosda amalga oshiriladi: " +
          "VASIYAT bo'yicha va QONUN bo'yicha. " +
          "Qonun bo'yicha vorislik vasiyat " +
          "bo'lmagan yoki u merosning bir qismini " +
          "qamramagan hollarda qo'llaniladi.\n\n" +
          "Meros fuqaroning o'limi yoki uning sud " +
          "tomonidan vafot etgan deb e'lon " +
          "qilinishi bilan ochiladi. Bu sana juda " +
          "muhim: barcha muddatlar shundan " +
          "hisoblanadi.\n\n" +
          "MEROSNING OCHILISH JOYI — meros " +
          "qoldiruvchining oxirgi doimiy yashab " +
          "turgan joyi. Meros ishi aynan shu " +
          "joydagi notariusda yuritiladi.\n\n" +
          "MEROS TARKIBI: meros ochilgan paytda " +
          "meros qoldiruvchiga tegishli bo'lgan " +
          "va uning o'limidan keyin ham bekor " +
          "bo'lmaydigan mol-mulk hamda huquqlar.\n\n" +
          "Muhim tushuncha: merosga faqat aktivlar " +
          "emas, QARZLAR ham kiradi. Bu ko'pincha " +
          "e'tibordan chetda qoladi va keyin " +
          "og'ir vaziyat yuzaga keladi.\n\n" +
          "Alohida holatlar ham tartibga " +
          "solingan: umumiy birgalikdagi mulk " +
          "bo'lgan mol-mulkni meros qilib olish " +
          "va yer uchastkasiga bo'lgan huquqni " +
          "meros qilib olish.\n\n" +
          "MEROSXO'RLAR: meros ochilgan paytda " +
          "hayot bo'lgan fuqarolar, shuningdek " +
          "meros qoldiruvchining hayotligida " +
          "homila holida bo'lib, keyin " +
          "tug'ilgan bolalar.",
        example:
          "Meros qoldiruvchi bir shaharda " +
          "ro'yxatda turgan, boshqasida " +
          "vaqtincha yashagan bo'lsa, meros " +
          "ishi OXIRGI DOIMIY yashash joyida " +
          "yuritiladi. Noto'g'ri joyga murojaat " +
          "qilish vaqt yo'qotishga olib " +
          "keladi.",
        keyPoints: [
          "Vorislik vasiyat yoki qonun bo'yicha amalga oshiriladi",
          "Meros o'lim bilan ochiladi va barcha muddatlar shundan hisoblanadi",
          "Ochilish joyi — oxirgi doimiy yashash joyi",
          "Merosga aktivlar bilan birga QARZLAR ham kiradi",
        ],
        warning:
          "Meros ochilganini bilib, hech " +
          "narsa qilmasdan kutish xavfli: " +
          "qabul qilish uchun belgilangan " +
          "muddat mavjud va uni o'tkazib " +
          "yuborish huquqni yo'qotishga olib " +
          "kelishi mumkin.",
        lawRefs: [
          { code: "FK2", article: "1112" },
          { code: "FK2", article: "1113" },
          { code: "FK2", article: "1116" },
          { code: "FK2", article: "1117" },
          { code: "FK2", article: "1118" },
        ],
      },
      {
        heading: "Navbatlar tizimi",
        text:
          "Qonun bo'yicha merosxo'rlar NAVBAT " +
          "bilan chaqiriladi. Tamoyil sodda: " +
          "oldingi navbatda hech bo'lmaganda " +
          "bitta merosxo'r bo'lsa, keyingi " +
          "navbat chaqirilmaydi.\n\n" +
          "BIRINCHI NAVBAT — meros " +
          "qoldiruvchining bolalari (shu " +
          "jumladan farzandlikka olinganlari), " +
          "turmush o'rtog'i va ota-onasi.\n\n" +
          "IKKINCHI NAVBAT — tug'ishgan hamda " +
          "ota yoki ona bir bo'lgan aka-uka va " +
          "opa-singillar, shuningdek bobo va " +
          "buvilar.\n\n" +
          "UCHINCHI NAVBAT — tug'ishgan amaki, " +
          "tog'a, amma va xolalar.\n\n" +
          "TO'RTINCHI NAVBAT — belgilangan " +
          "darajagacha bo'lgan boshqa " +
          "qarindoshlar.\n\n" +
          "BESHINCHI NAVBAT — meros " +
          "qoldiruvchining mehnatga " +
          "qobiliyatsiz boqimlari.\n\n" +
          "Bir navbatdagi merosxo'rlar " +
          "merosni TENG ulushlarda oladi " +
          "(qonunda boshqacha " +
          "belgilanmagan bo'lsa).\n\n" +
          "TAQDIM QILISH HUQUQI alohida " +
          "mexanizm: agar qonun bo'yicha " +
          "merosxo'r meros ochilgunga " +
          "qadar vafot etgan bo'lsa, " +
          "uning ulushi uning " +
          "avlodlariga o'tadi. Ya'ni " +
          "nevaralar ota yoki onasi " +
          "o'rniga meros oladi.\n\n" +
          "BOQIMLAR uchun alohida " +
          "qoida bor: meros " +
          "qoldiruvchining vafotiga " +
          "qadar belgilangan muddat " +
          "davomida uning " +
          "qaramog'ida bo'lgan " +
          "mehnatga qobiliyatsiz " +
          "shaxslar ham meros " +
          "olish huquqiga ega " +
          "bo'lishi mumkin.",
        example:
          "Meros qoldiruvchining ikki " +
          "farzandi bor edi, bittasi " +
          "undan oldin vafot etgan va " +
          "ikkita nevara qoldirgan. " +
          "Tirik farzand yarmini, " +
          "ikki nevara esa vafot " +
          "etgan ota-onasining " +
          "yarmini o'zaro bo'lib " +
          "oladi — bu taqdim qilish " +
          "huquqi.",
        keyPoints: [
          "Navbatlar ketma-ket chaqiriladi: oldingisi bo'lsa keyingisi chaqirilmaydi",
          "Birinchi navbat: bolalar, turmush o'rtog'i, ota-ona",
          "Bir navbatdagilar merosni TENG oladi",
          "Taqdim qilish huquqi bo'yicha nevaralar ota-onasi o'rniga meros oladi",
        ],
        warning:
          "Qarindoshlik hujjat bilan " +
          "tasdiqlanishi kerak. " +
          "Hujjat yo'q bo'lsa, uni " +
          "sud tartibida " +
          "belgilashga to'g'ri " +
          "keladi va bu jarayonni " +
          "sezilarli cho'zadi.",
        lawRefs: [
          { code: "FK2", article: "1134" },
          { code: "FK2", article: "1135" },
          { code: "FK2", article: "1136" },
          { code: "FK2", article: "1140" },
          { code: "FK2", article: "1141" },
        ],
      },
      {
        heading: "Noloyiq merosxo'rlar",
        text:
          "Qonun ayrim shaxslarni merosdan " +
          "CHETLATADI. Bu institut " +
          "«noloyiq merosxo'rlar» deb " +
          "ataladi va u adolat " +
          "tamoyiliga asoslanadi.\n\n" +
          "Asosiy asoslar: meros " +
          "qoldiruvchini yoki ehtimol " +
          "tutilgan merosxo'rlardan " +
          "birini qasddan o'ldirishga " +
          "urinish yoki o'ldirish, " +
          "shuningdek meros " +
          "qoldiruvchining oxirgi " +
          "irodasini amalga oshirishga " +
          "qarshi qasddan qilingan " +
          "harakatlar.\n\n" +
          "Ya'ni vasiyatnomani yashirish, " +
          "yo'q qilish yoki soxtalashtirish " +
          "ham chetlatish asosi bo'lishi " +
          "mumkin.\n\n" +
          "Boshqa asos oila " +
          "munosabatlariga tegishli: " +
          "ota-onalik huquqidan mahrum " +
          "qilinganlar va meros " +
          "qoldiruvchini boqish " +
          "majburiyatidan qasddan " +
          "bo'yin tovlaganlar ham " +
          "merosdan chetlatilishi " +
          "mumkin.\n\n" +
          "Muhim protsessual jihat: " +
          "chetlatish avtomatik " +
          "sodir bo'lmaydi — bu " +
          "manfaatdor shaxsning " +
          "talabi bo'yicha " +
          "belgilanadi.\n\n" +
          "Ya'ni «u ota-onasini " +
          "boqmagan» degan holat " +
          "bo'lsa ham, boshqa " +
          "merosxo'rlar bu " +
          "masalani ko'tarishi va " +
          "isbotlashi kerak.\n\n" +
          "Chetlatilgan " +
          "merosxo'rning ulushi " +
          "qolgan merosxo'rlar " +
          "o'rtasida taqsimlanadi.",
        example:
          "Merosxo'rlardan biri " +
          "yillar davomida " +
          "ota-onasini boqish " +
          "majburiyatidan bo'yin " +
          "tovlagan va bu sud " +
          "tartibida " +
          "belgilangan edi. " +
          "Boshqa merosxo'rlar " +
          "uni merosdan " +
          "chetlatish masalasini " +
          "ko'tarishi mumkin — " +
          "lekin buni ular " +
          "isbotlashi kerak.",
        keyPoints: [
          "Noloyiq merosxo'rlar merosdan chetlatiladi",
          "Asoslar: qasddan jinoiy harakatlar, vasiyat irodasiga qarshi harakatlar",
          "Boqish majburiyatidan qasddan bo'yin tovlash ham asos bo'lishi mumkin",
          "Chetlatish avtomatik emas — manfaatdor shaxs talab qilishi kerak",
        ],
        warning:
          "Chetlatish talabi kuchli " +
          "dalil talab qiladi. " +
          "Shaxsiy nizo yoki " +
          "«munosabatlar yomon " +
          "edi» degan asos " +
          "yetarli emas.",
        lawRefs: [
          { code: "FK2", article: "1119" },
          { code: "FK2", article: "1154" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     2. Vasiyatnoma
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "vasiyatnoma",
    category: "inheritance",
    level: "mid",
    order: 5020,
    title: "Vasiyatnoma: tuzish, o'zgartirish, bekor qilish",
    desc:
      "Vasiyat erkinligi va uning chegarasi, vasiyatnoma shakli, " +
      "sir saqlash, haqiqiy emasligi va vasiyat majburiyati.",
    objectives: [
      "Vasiyat erkinligini va uning chegarasini bilasiz",
      "Vasiyatnoma shakliga qo'yiladigan talablarni aniq bilasiz",
      "Vasiyatnomani o'zgartirish va bekor qilish tartibini bilasiz",
      "Vasiyat majburiyati nima ekanligini bilasiz",
    ],
    practicalSteps: [
      "Vasiyatnomani notarial tasdiqlatish eng ishonchli yo'l ekanini yodda tuting",
      "Vasiyatnomada mol-mulkni va merosxo'rlarni ANIQ ko'rsating: noaniqlik nizo keltiradi",
      "Majburiy ulush huquqiga ega shaxslar borligini hisobga oling",
      "Vasiyatnomani o'zgartirmoqchi bo'lsangiz, yangisini belgilangan tartibda tuzing",
    ],
    sections: [
      {
        heading: "Vasiyat erkinligi va uning chegarasi",
        text:
          "Fuqaro o'ziga tegishli mol-mulkni " +
          "yoki bu mol-mulkka nisbatan " +
          "huquqini vafot etgan taqdirda " +
          "tasarruf etish uchun vasiyatnoma " +
          "tuzishi mumkin.\n\n" +
          "Vasiyat erkinligi keng: vasiyat " +
          "qiluvchi mol-mulkini istalgan " +
          "shaxsga qoldirishi mumkin — " +
          "qarindoshiga ham, begonaga " +
          "ham, tashkilotga ham.\n\n" +
          "U merosxo'rlar ulushlarini " +
          "o'zi belgilashi, qonun " +
          "bo'yicha merosxo'rlardan " +
          "birini sababini " +
          "ko'rsatmasdan merosdan " +
          "mahrum qilishi ham " +
          "mumkin.\n\n" +
          "Qo'shimcha imkoniyatlar: " +
          "SHARTLI VASIYATNOMA " +
          "(merosning olinishi uchun " +
          "merosxo'r xulq-atvorining " +
          "xususiyatini belgilash) va " +
          "VORISDAN KEYINGI VORISLARNI " +
          "TAYINLASH (asosiy " +
          "merosxo'r meros ochilgunga " +
          "qadar vafot etsa, kim " +
          "olishini oldindan " +
          "ko'rsatish).\n\n" +
          "CHEGARA — majburiy ulush. " +
          "Meros qoldiruvchining " +
          "voyaga yetmagan yoki " +
          "mehnatga qobiliyatsiz " +
          "bolalari, shuningdek " +
          "mehnatga qobiliyatsiz " +
          "turmush o'rtog'i va " +
          "ota-onasi vasiyatnoma " +
          "mazmunidan qat'i nazar " +
          "ma'lum ulushga haqli.\n\n" +
          "Vasiyat qilinmagan " +
          "mol-mulk qismi esa " +
          "qonun bo'yicha " +
          "merosxo'rlarga o'tadi.",
        example:
          "Shaxs butun mol-mulkini " +
          "bitta farzandiga " +
          "vasiyat qildi, lekin " +
          "uning voyaga yetmagan " +
          "ikkinchi farzandi ham " +
          "bor edi. Voyaga " +
          "yetmagan farzand " +
          "majburiy ulush " +
          "huquqiga ega " +
          "bo'lgani uchun " +
          "vasiyat to'liq " +
          "amalga oshmaydi.",
        keyPoints: [
          "Vasiyat qiluvchi mol-mulkini istalgan shaxsga qoldirishi mumkin",
          "Sabab ko'rsatmasdan merosxo'rni mahrum qilish huquqi bor",
          "Shartli vasiyat va vorisdan keyingi vorisni tayinlash mumkin",
          "Chegara — MAJBURIY ULUSH huquqiga ega shaxslar",
        ],
        warning:
          "Vasiyatnoma tuzishdan " +
          "oldin majburiy ulush " +
          "huquqiga ega shaxslar " +
          "borligini tekshiring. " +
          "Aks holda vasiyat " +
          "kutilgandek amalga " +
          "oshmaydi.",
        lawRefs: [
          { code: "FK2", article: "1120" },
          { code: "FK2", article: "1121" },
          { code: "FK2", article: "1122" },
          { code: "FK2", article: "1123" },
        ],
      },
      {
        heading: "Shakl, sir saqlash va haqiqiy emaslik",
        text:
          "Vasiyatnoma shakliga qo'yiladigan " +
          "talablar juda qat'iy va bu " +
          "tasodifiy emas: vasiyat " +
          "qiluvchi vafot etgach uning " +
          "haqiqiy irodasini boshqa yo'l " +
          "bilan aniqlab bo'lmaydi.\n\n" +
          "Umumiy qoida: vasiyatnoma " +
          "yozilgan joyi va vaqti " +
          "ko'rsatilgan holda yozma " +
          "shaklda tuziladi.\n\n" +
          "Eng ishonchli shakl — " +
          "NOTARIAL TASDIQLANGAN " +
          "vasiyatnoma. Qonun " +
          "notarial tasdiqlangan " +
          "vasiyatnomalarga " +
          "TENGLASHTIRILGAN " +
          "vasiyatnomalar ro'yxatini " +
          "ham beradi — masalan " +
          "davolash muassasalarida " +
          "yoki boshqa maxsus " +
          "sharoitlarda tuzilganlar.\n\n" +
          "SIR SAQLASH: notarius, " +
          "vasiyatnomani tasdiqlovchi " +
          "boshqa mansabdor shaxs va " +
          "vasiyatnoma bilan " +
          "tanishgan shaxslar uning " +
          "mazmunini oshkor " +
          "qilishga haqli emas.\n\n" +
          "HAQIQIY EMASLIK: tegishli " +
          "shaklda tuzilmagan " +
          "vasiyatnoma haqiqiy emas. " +
          "Boshqa asoslar ham " +
          "mavjud — masalan " +
          "vasiyat qiluvchi o'z " +
          "harakatlarining " +
          "ahamiyatini tushunmagan " +
          "holatda tuzgan " +
          "bo'lsa.\n\n" +
          "Vasiyatni TALQIN QILISH " +
          "mexanizmi ham nazarda " +
          "tutilgan: matn noaniq " +
          "bo'lsa, u notarius, " +
          "vasiyatni ijro etuvchi " +
          "yoki sud tomonidan " +
          "talqin qilinadi. " +
          "Shuning uchun matnni " +
          "aniq yozish juda " +
          "muhim.",
        example:
          "Vasiyatnomada «uyimni " +
          "kattaga qoldiraman» " +
          "deb yozilgan, lekin " +
          "bir necha uy va bir " +
          "necha farzand bor. " +
          "Bunday noaniqlik " +
          "talqin qilishni va " +
          "ko'pincha sud " +
          "nizosini keltirib " +
          "chiqaradi.",
        keyPoints: [
          "Vasiyatnoma yozma, joyi va vaqti ko'rsatilgan holda tuziladi",
          "Eng ishonchli shakl — notarial tasdiqlangan",
          "Ayrim holatlarda tenglashtirilgan vasiyatnomalar tan olinadi",
          "Shaklga rioya qilinmasa vasiyatnoma haqiqiy emas",
        ],
        warning:
          "Uyda oddiy qog'ozga " +
          "yozilgan va hech kim " +
          "tomonidan " +
          "tasdiqlanmagan " +
          "vasiyatnoma ko'p " +
          "hollarda kuchga ega " +
          "bo'lmaydi va u " +
          "nizoning asosiy " +
          "manbaiga aylanadi.",
        lawRefs: [
          { code: "FK2", article: "1124" },
          { code: "FK2", article: "1125" },
          { code: "FK2", article: "1126" },
          { code: "FK2", article: "1128" },
          { code: "FK2", article: "1129" },
          { code: "FK2", article: "1130" },
        ],
      },
      {
        heading: "O'zgartirish, ijro va vasiyat majburiyati",
        text:
          "Vasiyat qiluvchi istalgan " +
          "vaqtda o'z vasiyatnomasini " +
          "to'liq yoki qisman bekor " +
          "qilishi yoxud " +
          "o'zgartirishi mumkin.\n\n" +
          "Bu huquq cheklanmaydi: " +
          "sabab ko'rsatish ham, " +
          "hech kimning roziligini " +
          "olish ham shart emas.\n\n" +
          "Amalda o'zgartirish odatda " +
          "yangi vasiyatnoma tuzish " +
          "orqali amalga oshiriladi. " +
          "Bu holatda oldingi " +
          "vasiyatnomaning yangisiga " +
          "zid qismlari kuchini " +
          "yo'qotadi.\n\n" +
          "IJRO ETISH: vasiyat " +
          "qiluvchi vasiyatnomaning " +
          "ijro etilishini " +
          "vasiyatnomada " +
          "ko'rsatilgan shaxsga " +
          "(vasiyatni ijro " +
          "etuvchiga) topshirishi " +
          "mumkin.\n\n" +
          "Bu murakkab meroslarda " +
          "juda foydali: ijro " +
          "etuvchi mol-mulkni " +
          "muhofaza qiladi va " +
          "vasiyat shartlarining " +
          "bajarilishini " +
          "ta'minlaydi.\n\n" +
          "VASIYAT MAJBURIYATI " +
          "alohida institut: " +
          "vasiyat qiluvchi " +
          "merosxo'r zimmasiga " +
          "bir yoki bir necha " +
          "shaxs foydasiga " +
          "biror majburiyatni " +
          "yuklashi mumkin.\n\n" +
          "Masalan uyni " +
          "merosxo'rga " +
          "qoldirib, unda " +
          "boshqa shaxsning " +
          "umrbod yashash " +
          "huquqini " +
          "belgilash.\n\n" +
          "MAJBURIYAT YUKLASH " +
          "ham mumkin: " +
          "merosxo'r zimmasiga " +
          "umumfoydali maqsad " +
          "uchun biron-bir " +
          "harakatni sodir " +
          "etish yuklanishi " +
          "mumkin.",
        example:
          "Vasiyat qiluvchi uyni " +
          "farzandiga qoldirdi, " +
          "lekin u yerda " +
          "yashayotgan " +
          "qarindoshining " +
          "umrbod yashash " +
          "huquqini belgiladi. " +
          "Merosxo'r uyni " +
          "oladi, lekin bu " +
          "majburiyat bilan " +
          "birga oladi.",
        keyPoints: [
          "Vasiyatnomani istalgan vaqtda bekor qilish yoki o'zgartirish mumkin",
          "Buning uchun sabab yoki hech kimning roziligi kerak emas",
          "Vasiyatni ijro etuvchi tayinlash mumkin",
          "Vasiyat majburiyati orqali merosxo'r zimmasiga majburiyat yuklanadi",
        ],
        warning:
          "Eski vasiyatnomani " +
          "yo'q qilib, yangisini " +
          "tuzmaslik xavfli: " +
          "bunday holatda meros " +
          "qonun bo'yicha " +
          "taqsimlanadi va bu " +
          "sizning irodangizga " +
          "mos kelmasligi " +
          "mumkin.",
        lawRefs: [
          { code: "FK2", article: "1127" },
          { code: "FK2", article: "1131" },
          { code: "FK2", article: "1132" },
          { code: "FK2", article: "1133" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     3. Merosni qabul qilish
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "merosni-qabul",
    category: "inheritance",
    level: "basic",
    order: 5030,
    title: "Merosni qabul qilish va voz kechish",
    desc:
      "Merosni qanday qabul qilish kerak, muddat, guvohnoma " +
      "olish va merosdan voz kechish oqibatlari.",
    objectives: [
      "Merosni qabul qilish usullarini bilasiz",
      "Merosga bo'lgan huquq to'g'risidagi guvohnomani qanday olishni bilasiz",
      "Merosdan voz kechish oqibatlarini tushunasiz",
      "Voz kechish huquqining cheklanishini bilasiz",
    ],
    practicalSteps: [
      "Meros ochilgach vaqtni yo'qotmasdan notariusga ariza bering",
      "Merosni amalda qabul qilgan bo'lsangiz (mol-mulkni boshqaryapsiz), buni hujjatlar bilan tasdiqlang",
      "Voz kechishdan oldin merosning qarzlarini ham hisoblab chiqing",
      "Voz kechish qaytarib olinmasligini yodda tuting — qaror yakuniy bo'ladi",
    ],
    sections: [
      {
        heading: "Merosni qabul qilish usullari va muddati",
        text:
          "Merosxo'r o'ziga tegishi lozim " +
          "bo'lgan merosni yoki uning bir " +
          "qismini olish uchun uni QABUL " +
          "QILISHI kerak. Meros " +
          "avtomatik ravishda " +
          "o'tmaydi.\n\n" +
          "Qabul qilishning ikki usuli " +
          "mavjud.\n\n" +
          "Birinchisi — RASMIY: meros " +
          "ochilgan joydagi notariusga " +
          "ariza berish. Bu eng aniq " +
          "va tavsiya etiladigan " +
          "yo'l.\n\n" +
          "Ikkinchisi — AMALDA qabul " +
          "qilish: merosxo'r meros " +
          "mol-mulkiga egalik qilishga " +
          "kirishgan, uni " +
          "boshqarayotgan, saqlash " +
          "choralarini ko'rayotgan, " +
          "meros qoldiruvchining " +
          "qarzlarini to'layotgan " +
          "bo'lsa.\n\n" +
          "Amalda qabul qilish ham " +
          "yuridik kuchga ega, lekin " +
          "uni ISBOTLASH kerak " +
          "bo'ladi. Shuning uchun " +
          "rasmiy yo'l ancha " +
          "xavfsiz.\n\n" +
          "Qabul qilish uchun " +
          "MUDDAT belgilangan va u " +
          "meros ochilgan kundan " +
          "hisoblanadi. Muddatni " +
          "o'tkazib yuborish " +
          "jiddiy oqibatlarga olib " +
          "keladi, lekin uzrli " +
          "sabab bo'lsa uni " +
          "tiklash imkoniyati " +
          "mavjud.\n\n" +
          "MEROSGA BO'LGAN HUQUQ " +
          "TO'G'RISIDA GUVOHNOMA " +
          "meros ochilgan joydagi " +
          "notarius tomonidan " +
          "merosxo'rning iltimosiga " +
          "binoan beriladi. Bu " +
          "hujjat mol-mulkni " +
          "o'z nomiga " +
          "rasmiylashtirish uchun " +
          "asos bo'ladi.",
        example:
          "Merosxo'r meros " +
          "qoldiruvchining uyida " +
          "yashab, kommunal " +
          "to'lovlarni to'lab " +
          "turdi, lekin notariusga " +
          "murojaat qilmadi. Bu " +
          "amalda qabul qilish " +
          "belgilariga ega, lekin " +
          "uyni sotish yoki " +
          "rasmiylashtirish uchun " +
          "baribir guvohnoma " +
          "kerak bo'ladi.",
        keyPoints: [
          "Meros avtomatik o'tmaydi — uni QABUL QILISH kerak",
          "Ikki usul: notariusga ariza yoki amalda qabul qilish",
          "Amalda qabul qilishni isbotlash kerak bo'ladi",
          "Guvohnoma mol-mulkni rasmiylashtirish uchun asos bo'ladi",
        ],
        warning:
          "Muddatni o'tkazib " +
          "yuborish eng ko'p " +
          "uchraydigan xato. " +
          "«Boshqa merosxo'r " +
          "yo'q, shoshilmasam ham " +
          "bo'ladi» degan fikr " +
          "keyin qo'shimcha sud " +
          "jarayoniga olib " +
          "keladi.",
        lawRefs: [
          { code: "FK2", article: "1145" },
          { code: "FK2", article: "1146" },
        ],
      },
      {
        heading: "Merosdan voz kechish",
        text:
          "Merosxo'r meros ochilgan " +
          "kundan e'tiboran istalgan " +
          "vaqtda merosdan voz " +
          "kechishga haqli.\n\n" +
          "Voz kechish ikki xil " +
          "bo'lishi mumkin: umuman " +
          "voz kechish yoki boshqa " +
          "merosxo'r foydasiga voz " +
          "kechish.\n\n" +
          "ENG MUHIM XUSUSIYAT: voz " +
          "kechish YAKUNIY. Uni " +
          "keyinchalik qaytarib " +
          "olish yoki o'zgartirish " +
          "mumkin emas. Shuning " +
          "uchun bu qaror " +
          "shoshilinch qabul " +
          "qilinmasligi kerak.\n\n" +
          "Voz kechishning eng " +
          "ko'p uchraydigan " +
          "sababi — QARZLAR. " +
          "Merosga qarzlar ham " +
          "kirgani uchun, " +
          "qarzlar aktivlardan " +
          "ko'p bo'lsa voz " +
          "kechish oqilona " +
          "bo'lishi mumkin.\n\n" +
          "Shu sababli voz " +
          "kechishdan OLDIN " +
          "meros tarkibini " +
          "hisoblab chiqish " +
          "kerak: qancha " +
          "mol-mulk va qancha " +
          "qarz bor.\n\n" +
          "VOZ KECHISH HUQUQINING " +
          "CHEKLANISHI: agar " +
          "merosxo'r vasiyatnoma " +
          "bo'yicha ham, qonun " +
          "bo'yicha ham " +
          "merosxo'r bo'lsa, " +
          "qonun voz kechish " +
          "imkoniyatiga " +
          "cheklovlar " +
          "belgilaydi.\n\n" +
          "Alohida holat — " +
          "VASIYAT " +
          "MAJBURIYATINI qabul " +
          "qilib olishdan voz " +
          "kechish: bu ham " +
          "mustaqil huquq " +
          "sifatida nazarda " +
          "tutilgan.\n\n" +
          "Voz kechilgan ulush " +
          "qolgan merosxo'rlar " +
          "o'rtasida " +
          "taqsimlanadi.",
        example:
          "Merosxo'r meros " +
          "tarkibida uy borligini " +
          "bilib qabul qildi, " +
          "keyin katta bank " +
          "qarzi ham borligi " +
          "ma'lum bo'ldi. Qabul " +
          "qilish allaqachon " +
          "amalga oshirilgani " +
          "uchun qarzlar ham " +
          "unga o'tadi — " +
          "shuning uchun " +
          "oldindan tekshirish " +
          "juda muhim.",
        keyPoints: [
          "Voz kechish umuman yoki boshqa merosxo'r foydasiga bo'lishi mumkin",
          "Voz kechish YAKUNIY — qaytarib olinmaydi",
          "Voz kechishdan oldin qarzlarni hisoblab chiqish kerak",
          "Ayrim holatlarda voz kechish huquqi cheklanadi",
        ],
        warning:
          "Merosni qabul " +
          "qilishdan oldin " +
          "qarzlarni " +
          "tekshirmaslik eng " +
          "og'ir xatolardan " +
          "biri: qabul " +
          "qilingandan keyin " +
          "orqaga qaytish " +
          "ancha qiyin " +
          "bo'ladi.",
        lawRefs: [
          { code: "FK2", article: "1147" },
          { code: "FK2", article: "1148" },
          { code: "FK2", article: "1149" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     4. Majburiy ulush
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "meros-majburiy-ulush",
    category: "inheritance",
    level: "advanced",
    order: 5040,
    title: "Majburiy ulush va turmush o'rtog'ining huquqi",
    desc:
      "Vasiyatga qaramay meros oladigan shaxslar va er-xotinning " +
      "umumiy mulkidagi ulush masalasi.",
    objectives: [
      "Kim majburiy ulush huquqiga ega ekanini bilasiz",
      "Majburiy ulush vasiyatga qanday ta'sir qilishini tushunasiz",
      "Turmush o'rtog'ining meros va umumiy mulkdagi huquqini ajrata olasiz",
      "Bu ikki huquq qanday birgalikda ishlashini bilasiz",
    ],
    practicalSteps: [
      "Vasiyat tuzishdan oldin majburiy ulush egalarini aniqlang",
      "Er-xotin umumiy mulkida avval ulushni ajratish kerakligini yodda tuting",
      "Nikoh davomida orttirilgan mol-mulk hujjatlarini saqlang",
      "Murakkab meros tarkibida notarius yoki advokat bilan maslahatlashing",
    ],
    sections: [
      {
        heading: "Majburiy ulush huquqi",
        text:
          "Vasiyat erkinligi keng, lekin " +
          "u mutlaq emas. Qonun ayrim " +
          "shaxslarni himoya qiladi va " +
          "ularga vasiyat mazmunidan " +
          "QAT'I NAZAR ulush beradi.\n\n" +
          "Majburiy ulush huquqiga ega " +
          "shaxslar: meros " +
          "qoldiruvchining voyaga " +
          "yetmagan yoki mehnatga " +
          "qobiliyatsiz bolalari, " +
          "shuningdek mehnatga " +
          "qobiliyatsiz turmush " +
          "o'rtog'i va ota-onasi.\n\n" +
          "Bu ro'yxatning mantig'i " +
          "sodda: qonun o'zini " +
          "mustaqil ta'minlay " +
          "olmaydigan yaqinlarni " +
          "himoyasiz " +
          "qoldirmaydi.\n\n" +
          "Majburiy ulush miqdori " +
          "qonun bo'yicha tegishli " +
          "bo'lgan ulushdan kelib " +
          "chiqib hisoblanadi.\n\n" +
          "Amaliy natijasi muhim: " +
          "agar vasiyat majburiy " +
          "ulush huquqini " +
          "hisobga olmagan " +
          "bo'lsa, u shu " +
          "qismda amalga " +
          "oshmaydi.\n\n" +
          "Shu sababli vasiyat " +
          "tuzayotgan shaxs " +
          "uchun eng amaliy " +
          "maslahat: " +
          "vasiyatnoma " +
          "tuzishdan oldin " +
          "majburiy ulush " +
          "egalari bor-yo'qligini " +
          "aniqlash.\n\n" +
          "Aks holda vasiyat " +
          "qisman bekor " +
          "bo'ladi va bu " +
          "ko'pincha " +
          "merosxo'rlar " +
          "o'rtasida nizoga " +
          "sabab bo'ladi.",
        example:
          "Vasiyat qiluvchi butun " +
          "mol-mulkni bir shaxsga " +
          "qoldirdi, lekin " +
          "mehnatga qobiliyatsiz " +
          "turmush o'rtog'i bor " +
          "edi. Turmush o'rtog'i " +
          "majburiy ulushga " +
          "haqli bo'lgani uchun " +
          "vasiyat to'liq amalga " +
          "oshmaydi — bu " +
          "qonunning himoya " +
          "mexanizmi.",
        keyPoints: [
          "Majburiy ulush vasiyat mazmunidan QAT'I NAZAR beriladi",
          "Egalari: voyaga yetmagan/mehnatga qobiliyatsiz bolalar, turmush o'rtog'i, ota-ona",
          "Miqdor qonun bo'yicha tegishli ulushdan kelib chiqib hisoblanadi",
          "Vasiyat bu huquqni hisobga olmasa, shu qismda amalga oshmaydi",
        ],
        warning:
          "«Vasiyat yozdim, " +
          "demak hammasi hal» " +
          "degan xulosa " +
          "noto'g'ri. " +
          "Majburiy ulush " +
          "huquqi vasiyatdan " +
          "kuchliroq " +
          "ishlaydi.",
        lawRefs: [
          { code: "FK2", article: "1142" },
          { code: "FK2", article: "1141" },
        ],
      },
      {
        heading: "Turmush o'rtog'ining ikki xil huquqi",
        text:
          "Bu bo'lim amalda eng ko'p " +
          "chalkashlik keltiradigan " +
          "masala va uni to'g'ri " +
          "tushunish katta ahamiyatga " +
          "ega.\n\n" +
          "Turmush o'rtog'ida IKKI " +
          "ALOHIDA huquq bor va " +
          "ular aralashtirilmasligi " +
          "kerak.\n\n" +
          "Birinchisi — UMUMIY " +
          "MULKDAGI ULUSH. Nikoh " +
          "davomida orttirilgan " +
          "mol-mulk er-xotinning " +
          "umumiy mulki " +
          "hisoblanadi. Turmush " +
          "o'rtog'ining bu " +
          "mulkdagi ulushi " +
          "MEROS EMAS — u " +
          "allaqachon uniki.\n\n" +
          "Ikkinchisi — MEROS " +
          "ULUSHI: meros " +
          "qoldiruvchining " +
          "ulushidan tegadigan " +
          "qism.\n\n" +
          "To'g'ri tartib " +
          "quyidagicha: avval " +
          "umumiy mulkdan " +
          "turmush o'rtog'ining " +
          "ulushi AJRATILADI, " +
          "keyin qolgan qism " +
          "meros sifatida " +
          "taqsimlanadi. " +
          "Turmush o'rtog'i " +
          "bu qismdan ham " +
          "birinchi navbatdagi " +
          "merosxo'r sifatida " +
          "ulush oladi.\n\n" +
          "Bu tartibni bilmaslik " +
          "juda ko'p nizolarga " +
          "sabab bo'ladi: " +
          "merosxo'rlar butun " +
          "mol-mulkni meros " +
          "deb hisoblab, uni " +
          "teng bo'lishga " +
          "harakat qiladi.\n\n" +
          "Meros qoldiruvchining " +
          "mol-mulkini muhofaza " +
          "qilish va boshqarish " +
          "mexanizmi ham " +
          "nazarda tutilgan — " +
          "bu meros " +
          "taqsimlangunga " +
          "qadar mol-mulk " +
          "yo'qolib " +
          "ketmasligi uchun.",
        example:
          "Er-xotin nikoh " +
          "davomida uy oldi, " +
          "er vafot etdi. " +
          "Uy to'liq meros " +
          "emas: avval " +
          "xotinning umumiy " +
          "mulkdagi ulushi " +
          "ajratiladi, " +
          "qolgan qismgina " +
          "meros bo'lib " +
          "taqsimlanadi va " +
          "xotin undan ham " +
          "ulush oladi.",
        keyPoints: [
          "Turmush o'rtog'ida IKKI alohida huquq bor",
          "Umumiy mulkdagi ulush MEROS EMAS — u allaqachon uniki",
          "Avval ulush ajratiladi, keyin qolgan qism meros sifatida taqsimlanadi",
          "Turmush o'rtog'i meros qismidan ham ulush oladi",
        ],
        warning:
          "Butun mol-mulkni " +
          "meros deb hisoblab " +
          "taqsimlash — eng " +
          "ko'p uchraydigan " +
          "xato va u " +
          "beva/bevaning " +
          "huquqlarini " +
          "sezilarli " +
          "kamaytiradi.",
        lawRefs: [
          { code: "FK2", article: "1143" },
          { code: "FK2", article: "1114" },
          { code: "FK2", article: "1144" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     5. Meros qarzlari
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "meros-qarzlar",
    category: "inheritance",
    level: "advanced",
    order: 5050,
    title: "Meros qarzlari va xarajatlar",
    desc:
      "Meros bilan o'tadigan qarzlar, kreditorlarning talablari " +
      "va meros hisobidan to'lanadigan xarajatlar.",
    objectives: [
      "Qanday qarzlar meros bilan o'tishini bilasiz",
      "Merosxo'r qarzlar uchun qay darajada javob berishini bilasiz",
      "Kreditorlar talablarini qanday qo'yishini bilasiz",
      "Meros hisobidan qanday xarajatlar to'lanishini bilasiz",
    ],
    practicalSteps: [
      "Merosni qabul qilishdan oldin qarzlarni tekshiring: bank, soliq, kommunal",
      "Qarzlar aktivlardan ko'p bo'lsa voz kechish variantini jiddiy ko'rib chiqing",
      "Kreditor talab qo'ysa, uning asosini va hujjatlarini so'rang",
      "Meros hisobidan qilingan xarajatlarni hujjat bilan qayd eting",
    ],
    sections: [
      {
        heading: "Qarzlar meros bilan o'tadi",
        text:
          "Bu modulning eng muhim " +
          "amaliy xulosasi: merosga " +
          "faqat mol-mulk emas, " +
          "meros qoldiruvchining " +
          "QARZLARI ham kiradi.\n\n" +
          "Meros qoldiruvchining " +
          "kreditorlari " +
          "merosxo'rlarga " +
          "talablarini qo'yish " +
          "huquqiga ega.\n\n" +
          "Muhim himoya mexanizmi " +
          "mavjud: merosxo'r " +
          "qarzlar uchun cheksiz " +
          "javob bermaydi — " +
          "javobgarlik unga o'tgan " +
          "meros mol-mulkining " +
          "qiymati doirasida " +
          "bo'ladi.\n\n" +
          "Ya'ni siz merosdan " +
          "olganingizdan " +
          "ko'proq to'lashingiz " +
          "shart emas. Bu " +
          "qoida merosxo'rni " +
          "himoya qiladi.\n\n" +
          "Lekin amalda buni " +
          "isbotlash uchun " +
          "meros tarkibi aniq " +
          "hujjatlashtirilgan " +
          "bo'lishi kerak — " +
          "shuning uchun " +
          "guvohnoma va " +
          "baholash hujjatlari " +
          "muhim.\n\n" +
          "Bir necha merosxo'r " +
          "bo'lsa, ular " +
          "qarzlar uchun " +
          "o'z ulushlariga " +
          "mos ravishda " +
          "javob beradi.\n\n" +
          "Amaliy strategiya: " +
          "merosni qabul " +
          "qilishdan oldin " +
          "qarzlarni " +
          "tekshirish. " +
          "Bank kreditlari, " +
          "soliq qarzlari, " +
          "kommunal " +
          "to'lovlar, " +
          "shaxsiy qarzlar " +
          "— barchasi " +
          "tekshirilishi " +
          "kerak.",
        example:
          "Merosxo'rga uy va " +
          "undan kattaroq " +
          "bank qarzi meros " +
          "bo'lib o'tdi. U " +
          "qarzni faqat " +
          "olgan mol-mulk " +
          "qiymati doirasida " +
          "to'laydi — o'z " +
          "shaxsiy mol-mulki " +
          "hisobidan " +
          "qoplashi shart " +
          "emas.",
        keyPoints: [
          "Merosga mol-mulk bilan birga QARZLAR ham kiradi",
          "Javobgarlik meros mol-mulki QIYMATI doirasida cheklangan",
          "Bir necha merosxo'r ulushlariga mos javob beradi",
          "Qabul qilishdan oldin qarzlarni tekshirish shart",
        ],
        warning:
          "Qarzlar borligini " +
          "bilmasdan merosni " +
          "qabul qilish keng " +
          "tarqalgan xato. " +
          "Tekshirish qabul " +
          "qilishdan OLDIN " +
          "qilinadi.",
        lawRefs: [
          { code: "FK2", article: "1156" },
          { code: "FK2", article: "1113" },
        ],
      },
      {
        heading: "Meros hisobidan to'lanadigan xarajatlar",
        text:
          "Meros vorislar o'rtasida " +
          "taqsimlanishidan OLDIN " +
          "ayrim xarajatlar meros " +
          "hisobidan qoplanadi.\n\n" +
          "Bunday xarajatlarga " +
          "odatda quyidagilar " +
          "kiradi: meros " +
          "qoldiruvchining " +
          "kasalligi davridagi " +
          "davolash xarajatlari, " +
          "dafn marosimi " +
          "xarajatlari, meros " +
          "mol-mulkini muhofaza " +
          "qilish va boshqarish " +
          "xarajatlari, meros " +
          "ishini yuritish " +
          "bilan bog'liq " +
          "xarajatlar.\n\n" +
          "Bu qoidaning amaliy " +
          "ma'nosi: agar " +
          "merosxo'rlardan biri " +
          "shu xarajatlarni o'z " +
          "hisobidan qilgan " +
          "bo'lsa, u ularni " +
          "meros hisobidan " +
          "qoplashni talab " +
          "qilishga haqli.\n\n" +
          "Lekin buning uchun " +
          "xarajatlar HUJJAT " +
          "bilan tasdiqlangan " +
          "bo'lishi kerak. " +
          "Og'zaki «men " +
          "shuncha sarfladim» " +
          "degan gap yetarli " +
          "emas.\n\n" +
          "Shuning uchun " +
          "amaliy maslahat: " +
          "meros ochilganidan " +
          "keyin qilingan " +
          "barcha " +
          "xarajatlarning " +
          "kvitansiya va " +
          "cheklarini " +
          "saqlash.\n\n" +
          "Bu ayniqsa " +
          "merosxo'rlar " +
          "o'rtasida " +
          "kelishmovchilik " +
          "bo'lgan " +
          "holatlarda " +
          "muhim: hujjat " +
          "bo'lsa, " +
          "hisob-kitob " +
          "adolatli " +
          "bo'ladi.\n\n" +
          "Xarajatlar " +
          "qoplangandan " +
          "keyingina qolgan " +
          "qism merosxo'rlar " +
          "o'rtasida " +
          "taqsimlanadi.",
        example:
          "Merosxo'rlardan " +
          "biri dafn va " +
          "mol-mulkni " +
          "saqlash " +
          "xarajatlarini o'z " +
          "hisobidan qildi. " +
          "Kvitansiyalar " +
          "saqlangani uchun " +
          "u bu summani " +
          "taqsimlashdan " +
          "oldin qoplab " +
          "olishi mumkin.",
        keyPoints: [
          "Ayrim xarajatlar taqsimlashdan OLDIN meros hisobidan qoplanadi",
          "Bunga davolash, dafn, muhofaza va ish yuritish xarajatlari kiradi",
          "Xarajatlar HUJJAT bilan tasdiqlanishi kerak",
          "Faqat shundan keyin qolgan qism taqsimlanadi",
        ],
        warning:
          "Kvitansiyasiz " +
          "qilingan " +
          "xarajatlarni " +
          "qoplatib olish " +
          "deyarli imkonsiz. " +
          "Har bir to'lovni " +
          "hujjatlashtiring.",
        lawRefs: [
          { code: "FK2", article: "1155" },
          { code: "FK2", article: "1144" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     6. Merosni taqsimlash
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "meros-taqsimlash",
    category: "inheritance",
    level: "advanced",
    order: 5060,
    title: "Merosni taqsimlash va imtiyozli huquqlar",
    desc:
      "Meros merosxo'rlar o'rtasida qanday bo'linadi, ayrim " +
      "merosxo'rlarning imtiyozli huquqi va korxonaga vorislik.",
    objectives: [
      "Merosni taqsimlash tartibini bilasiz",
      "Kim imtiyozli huquqqa ega ekanini bilasiz",
      "Bo'linmaydigan mol-mulk qanday taqsimlanishini bilasiz",
      "Hozir bo'lmagan merosxo'rlarning huquqlarini bilasiz",
    ],
    practicalSteps: [
      "Taqsimlashni iloji bo'lsa kelishuv bilan hal qiling — sud uzoq va qimmat",
      "Kelishuvni yozma rasmiylashtiring va belgilangan tartibda tasdiqlating",
      "Imtiyozli huquqqa da'vo qilsangiz, uning asosini hujjat bilan tasdiqlang",
      "Merosxo'rlar orasida joyi noma'lum shaxs bo'lsa, buni notariusga bildiring",
    ],
    sections: [
      {
        heading: "Taqsimlash tartibi",
        text:
          "Merosni qabul qilib olgan " +
          "qonun bo'yicha " +
          "merosxo'rlardan istalgan " +
          "biri merosni taqsimlashni " +
          "talab qilishi mumkin.\n\n" +
          "Taqsimlash ikki yo'l bilan " +
          "amalga oshiriladi: " +
          "merosxo'rlarning " +
          "KELISHUVI bilan yoki " +
          "kelishuvga " +
          "erishilmasa SUD " +
          "tartibida.\n\n" +
          "Kelishuv yo'li har " +
          "jihatdan afzal: u " +
          "tezroq, arzonroq va " +
          "munosabatlarni " +
          "saqlaydi. Sud yo'li " +
          "esa oylab davom " +
          "etishi, ekspertiza " +
          "va boj xarajatlarini " +
          "talab qilishi " +
          "mumkin.\n\n" +
          "Taqsimlashdagi asosiy " +
          "qiyinchilik — " +
          "BO'LINMAYDIGAN " +
          "mol-mulk. Uy, " +
          "avtomobil yoki " +
          "korxonani jismonan " +
          "bo'lib bo'lmaydi.\n\n" +
          "Bunday holatda " +
          "yechimlar: mol-mulk " +
          "bir merosxo'rga " +
          "beriladi va u " +
          "qolganlarga pul " +
          "kompensatsiyasini " +
          "to'laydi; yoki " +
          "mol-mulk sotilib, " +
          "pul ulushlarga mos " +
          "taqsimlanadi.\n\n" +
          "HOZIR BO'LMAGAN " +
          "MEROSXO'RLAR uchun " +
          "himoya mexanizmi " +
          "bor: agar " +
          "merosxo'rlar " +
          "orasida turgan joyi " +
          "noma'lum shaxslar " +
          "bo'lsa, ularning " +
          "huquqlarini " +
          "himoya qilish " +
          "choralari " +
          "ko'riladi.\n\n" +
          "Ya'ni qolganlar " +
          "merosni o'zaro " +
          "bo'lib olib, " +
          "yo'q shaxsni " +
          "chetlab o'ta " +
          "olmaydi.",
        example:
          "Uch merosxo'rga " +
          "bitta kvartira " +
          "meros bo'ldi. " +
          "Uni jismonan " +
          "uchga bo'lish " +
          "imkonsiz. " +
          "Amaliy yechim: " +
          "bittasi kvartirani " +
          "oladi va " +
          "qolgan ikkitasiga " +
          "ularning " +
          "ulushiga mos " +
          "pul to'laydi.",
        keyPoints: [
          "Taqsimlash kelishuv yoki sud tartibida amalga oshiriladi",
          "Kelishuv yo'li tezroq, arzonroq va munosabatlarni saqlaydi",
          "Bo'linmaydigan mol-mulk kompensatsiya yoki sotish orqali taqsimlanadi",
          "Joyi noma'lum merosxo'rlarning huquqlari himoyalanadi",
        ],
        warning:
          "Merosni rasmiy " +
          "taqsimlamasdan " +
          "«amalda bo'lib " +
          "olish» keyin " +
          "sotish va " +
          "meros paytida " +
          "yangi nizolar " +
          "keltiradi. " +
          "Hujjatni " +
          "oxirigacha " +
          "rasmiylashtiring.",
        lawRefs: [
          { code: "FK2", article: "1150" },
          { code: "FK2", article: "1151" },
        ],
      },
      {
        heading: "Imtiyozli huquqlar va korxonaga vorislik",
        text:
          "Qonun taqsimlashda ayrim " +
          "merosxo'rlarga IMTIYOZ " +
          "beradi. Bu adolat " +
          "tamoyiliga asoslanadi: " +
          "mol-mulk bilan haqiqiy " +
          "bog'liqligi bo'lgan " +
          "shaxsning manfaati " +
          "hisobga olinadi.\n\n" +
          "Imtiyozli huquq odatda " +
          "meros ochilgunga qadar " +
          "mol-mulk bilan bog'liq " +
          "bo'lgan merosxo'rlarga " +
          "beriladi — masalan " +
          "u bilan birga umumiy " +
          "mulkda bo'lganlar yoki " +
          "mol-mulkdan doimiy " +
          "foydalanganlar.\n\n" +
          "Amaliy natijasi: " +
          "bo'linmaydigan " +
          "mol-mulk " +
          "taqsimlanayotganda " +
          "shu merosxo'r uni " +
          "olishga ustunlikka " +
          "ega bo'ladi, " +
          "boshqalarga esa " +
          "kompensatsiya " +
          "to'laydi.\n\n" +
          "KORXONAGA VORISLIK " +
          "alohida tartibga " +
          "solingan. Korxona " +
          "yaxlit mulkiy " +
          "kompleks bo'lgani " +
          "uchun uni bo'lish " +
          "faoliyatni " +
          "to'xtatib qo'yishi " +
          "mumkin.\n\n" +
          "Shu sababli qonun " +
          "korxonani yaxlit " +
          "saqlash " +
          "imkoniyatlarini " +
          "nazarda tutadi: " +
          "u bir merosxo'rga " +
          "o'tishi va " +
          "qolganlar " +
          "kompensatsiya " +
          "olishi mumkin.\n\n" +
          "Bu tadbirkorlik " +
          "bilan " +
          "shug'ullanadigan " +
          "oilalar uchun " +
          "muhim: biznesni " +
          "meros orqali " +
          "parchalab " +
          "yuborish uni " +
          "yo'q qilishi " +
          "mumkin, shuning " +
          "uchun oldindan " +
          "vasiyat tuzish " +
          "ancha oqilona.",
        example:
          "Meros tarkibida " +
          "ishlab turgan " +
          "korxona bor va " +
          "uni uch " +
          "merosxo'rga " +
          "bo'lish " +
          "faoliyatni " +
          "to'xtatardi. " +
          "Qonun korxonani " +
          "yaxlit saqlash " +
          "imkonini beradi " +
          "— bu ham " +
          "biznes, ham " +
          "merosxo'rlar " +
          "manfaatiga " +
          "xizmat qiladi.",
        keyPoints: [
          "Ayrim merosxo'rlar taqsimlashda imtiyozli huquqqa ega",
          "Imtiyoz mol-mulk bilan haqiqiy bog'liqlikka asoslanadi",
          "Imtiyozdan foydalangan merosxo'r qolganlarga kompensatsiya to'laydi",
          "Korxona yaxlit saqlanishi uchun maxsus qoidalar mavjud",
        ],
        warning:
          "Biznes egasi " +
          "vasiyat " +
          "tuzmasa, meros " +
          "korxonani " +
          "parchalab " +
          "yuborishi va " +
          "faoliyatni " +
          "to'xtatishi " +
          "mumkin. Buni " +
          "oldindan hal " +
          "qilish kerak.",
        lawRefs: [
          { code: "FK2", article: "1152" },
          { code: "FK2", article: "1153" },
        ],
      },
    ],
  },
];

module.exports = { LESSONS };
