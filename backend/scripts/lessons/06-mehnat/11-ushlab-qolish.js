"use strict";
/** MEHNAT MODULI — 11-DARS: USHLAB QOLISH VA QO'SHIMCHA TO'LOVLAR.
 *  MK 258–294. Ish haqining o'zi (243–257) 10-darsda. */

const LESSON = {
  key: "ushlab-qolish",
  category: "labor",
  level: "mid",
  order: 6110,
  title: "Ish haqidan ushlab qolish va kompensatsiya to'lovlari",
  desc:
    "Ish haqidan nima uchun va qancha ushlab qolish mumkin, " +
    "qo'shimcha ish uchun to'lovlar, kafolatli va kompensatsiya " +
    "to'lovlari.",
  objectives: [
    "Ushlab qolish asoslarini va miqdor chegarasini bilasiz",
    "Qo'shimcha va maxsus sharoitdagi ish uchun to'lovlarni bilasiz",
    "Kafolatli va kompensatsiya to'lovlarini ajrata olasiz",
    "Xizmat safari to'lovlarini talab qilishni bilasiz",
  ],
  practicalSteps: [
    "Hisob-kitob varaqasini har oy olib, ushlab qolishlarni tekshiring",
    "\"Jarima\" ushlab qolinsa qaytarishni yozma talab qiling",
    "Tungi, bayram va qo'shimcha ish uchun oshirilgan haq hisoblang",
    "Xizmat safari xarajatlarini chek bilan hujjatlashtiring",
  ],
  sections: [
    {
      heading: "Ish haqidan ushlab qolishni cheklash",
      text:
        "Ish beruvchi ish haqidan xohlagancha " +
        "ushlab qola olmaydi — bu qat'iy " +
        "cheklangan.\n\n" +
        "Birinchi cheklov ASOSLAR bo'yicha: " +
        "ushlab qolish faqat qonunda " +
        "nazarda tutilgan hollarda mumkin " +
        "— soliqlar va majburiy to'lovlar; " +
        "ijro hujjatlari bo'yicha (masalan " +
        "aliment); qonunda ko'rsatilgan " +
        "boshqa asoslar.\n\n" +
        "⚠️ ENG KO'P UCHRAYDIGAN NOQONUNIY " +
        "AMALIYOT — \"jarima\" ushlab " +
        "qolish. Kechikkani, xatoga yo'l " +
        "qo'ygani yoki rejani " +
        "bajarmagani uchun ish haqidan " +
        "pul ushlab qolish qonunda " +
        "nazarda tutilmagan.",
      example:
        "Kompaniya kechikkan xodimlardan " +
        "\"jarima\" ushlab qolyapti. " +
        "Bunday asos qonunda yo'q — bu " +
        "ish haqini to'liq to'lamaslik.",
      keyPoints: [
        "Ushlab qolish faqat qonundagi asoslarda mumkin",
        "Soliq va ijro hujjati asosiy asoslar",
        "\"Jarima\" ushlab qolish qonunda yo'q",
        "Bunday amaliyot huquqbuzarlik hisoblanadi",
      ],
      warning:
        "Oldindan yozma rozilik bergan " +
        "bo'lsangiz ham qonunga zid ushlab " +
        "qolish haqiqiy emas.",
      lawRefs: [{ code: "MK", article: "269" }],
    },
    {
      heading: "Ushlab qolish miqdorlarining chegarasi",
      text:
        "Ikkinchi cheklov — MIQDOR bo'yicha.\n\n" +
        "Har bir to'lovda ushlab qolinadigan " +
        "umumiy summa belgilangan foizdan " +
        "OSHMASLIGI kerak.\n\n" +
        "⚠️ Bu shuni anglatadi: bir necha " +
        "asos bo'yicha ushlab qolish " +
        "bo'lsa ham (masalan aliment va " +
        "zarar), umumiy summa chegaradan " +
        "oshmaydi.\n\n" +
        "Ayrim hollarda (masalan aliment " +
        "bo'yicha) chegara yuqoriroq " +
        "bo'lishi mumkin — bu qonunda " +
        "alohida belgilangan.\n\n" +
        "Aniq foizlar quyidagi qonun " +
        "matnida.",
      example:
        "Xodimdan bir vaqtda aliment va " +
        "zarar undirilmoqchi edi va " +
        "umumiy summa ish haqining katta " +
        "qismini tashkil qildi. Chegara " +
        "amal qiladi.",
      keyPoints: [
        "Ushlab qolish miqdori foiz bilan cheklangan",
        "Bir necha asos bo'lsa ham umumiy chegara amal qiladi",
        "Ayrim hollarda chegara yuqoriroq bo'ladi",
        "Aniq foizlar qonunda ko'rsatilgan",
      ],
      warning:
        "Hisob varaqasida ushlab qolish " +
        "umumiy summasini hisoblang — " +
        "chegaradan oshsa e'tiroz " +
        "bildiring.",
      lawRefs: [{ code: "MK", article: "270" }],
    },
    {
      heading: "Ish haqini tasarruf etish",
      text:
        "Xodim o'z ish haqini XOHISHIGA " +
        "ko'ra tasarruf etishi mumkin — bu " +
        "alohida moddada nazarda " +
        "tutilgan.\n\n" +
        "Masalan u ish haqining bir qismini " +
        "boshqa hisobga o'tkazishni yoki " +
        "muayyan to'lovga yo'naltirishni " +
        "so'rashi mumkin.\n\n" +
        "⚠️ MUHIM FARQ: bu XODIMNING " +
        "xohishi bilan bo'ladi va uni " +
        "ushlab qolish bilan " +
        "chalkashtirmaslik kerak.\n\n" +
        "Ish beruvchi \"siz shunday " +
        "so'ragansiz\" deb asossiz ushlab " +
        "qolishni oqlashga urinsa, " +
        "yozma arizangiz bor-yo'qligini " +
        "so'rang.",
      example:
        "Ish beruvchi ish haqidan pul " +
        "ushlab qolib \"o'zingiz " +
        "so'ragansiz\" dedi. Xodimning " +
        "yozma arizasi bo'lmasa bu " +
        "asossiz.",
      keyPoints: [
        "Xodim ish haqini o'z xohishiga ko'ra tasarruf etadi",
        "Bu ushlab qolishdan farq qiladi",
        "Xodimning yozma arizasi bo'lishi kerak",
        "Arizasiz ushlab qolish asossiz",
      ],
      warning:
        "Ish haqingizni yo'naltirish " +
        "haqidagi har qanday arizani " +
        "nusxasi bilan saqlang.",
      lawRefs: [{ code: "MK", article: "271" }],
    },
    {
      heading: "Qisqartirilgan va to'liqsiz ish vaqtida haq to'lash",
      text:
        "Ish vaqti turi haq to'lashga " +
        "bevosita ta'sir qiladi.\n\n" +
        "QISQARTIRILGAN ish vaqtida haq " +
        "TO'LIQ to'lanadi — chunki bu " +
        "qonun bilan berilgan imtiyoz.\n\n" +
        "TO'LIQSIZ ish vaqtida haq " +
        "ishlangan vaqtga MUTANOSIB " +
        "to'lanadi — chunki bu " +
        "kelishuv.\n\n" +
        "⚠️ Ayrim toifadagi xodimlar " +
        "(masalan belgilangan guruh " +
        "nogironligi bo'lganlar) uchun " +
        "qisqartirilgan ish vaqtida haq " +
        "to'lash alohida moddada " +
        "belgilangan.\n\n" +
        "Bu ikkisini chalkashtirish " +
        "bevosita moddiy yo'qotishga " +
        "olib keladi.",
      example:
        "Nogironligi bo'lgan xodimga " +
        "qisqartirilgan ish vaqti " +
        "belgilandi, lekin haq mutanosib " +
        "kamaytirildi — bu xato.",
      keyPoints: [
        "Qisqartirilgan ish vaqtida haq to'liq to'lanadi",
        "To'liqsiz ish vaqtida haq mutanosib to'lanadi",
        "Ayrim toifalar uchun alohida modda amal qiladi",
        "Ikkisini chalkashtirish moddiy yo'qotishga olib keladi",
      ],
      warning:
        "Ish vaqtingiz qaysi turga " +
        "kirishini shartnomadan " +
        "tekshiring.",
      lawRefs: [
        { code: "MK", article: "258" },
        { code: "MK", article: "431" },
      ],
    },
    {
      heading: "Qo'shimcha ish va turli malaka uchun haq",
      text:
        "Asosiy ishdan tashqari bajarilgan " +
        "ish uchun QO'SHIMCHA haq " +
        "to'lanadi.\n\n" +
        "Bu quyidagi hollarni qamraydi: bir " +
        "necha kasbda (lavozimda) ishlash; " +
        "xizmat ko'rsatish doirasining " +
        "kengayishi; ish hajmining " +
        "ko'payishi; vaqtincha yo'q " +
        "xodimning majburiyatlarini " +
        "bajarish.\n\n" +
        "Alohida holat — HAR XIL MALAKA " +
        "talab etiladigan ishlar " +
        "bajarilganda haq to'lash. U ham " +
        "alohida moddada tartibga " +
        "solingan.\n\n" +
        "⚠️ Qo'shimcha vazifa og'zaki " +
        "yuklansa haq to'lanmay qolishi " +
        "mumkin — buyruq talab qiling.",
      example:
        "Xodim ta'tildagi hamkasbining " +
        "vazifasini ham bajardi, lekin " +
        "qo'shimcha haq to'lanmadi. Bu " +
        "huquqbuzarlik.",
      keyPoints: [
        "Qo'shimcha ish uchun qo'shimcha haq to'lanadi",
        "Bir necha kasbda ishlash va hajm ko'payishi qamraladi",
        "Har xil malaka talab etiladigan ish alohida to'lanadi",
        "Qo'shimcha vazifa buyruq bilan rasmiylashtiriladi",
      ],
      warning:
        "Og'zaki yuklangan qo'shimcha " +
        "vazifani bajarishdan oldin " +
        "buyruq va haq miqdorini " +
        "so'rang.",
      lawRefs: [
        { code: "MK", article: "259" },
        { code: "MK", article: "260" },
      ],
    },
    {
      heading: "Qo'shimcha, tungi va bayram kunlaridagi ish uchun haq",
      text:
        "Maxsus sharoitdagi ish OSHIRILGAN " +
        "miqdorda to'lanadi.\n\n" +
        "Uch asosiy holat:\n\n" +
        "(1) ISH VAQTIDAN TASHQARI ish " +
        "uchun haq;\n\n" +
        "(2) DAM OLISH KUNLARIDA yoki " +
        "ISHLANMAYDIGAN BAYRAM kunlarida " +
        "mehnat uchun haq;\n\n" +
        "(3) TUNGI vaqtdagi mehnat uchun " +
        "haq.\n\n" +
        "⚠️ Har biri ALOHIDA moddada " +
        "tartibga solingan va ular " +
        "bir-birini almashtirmaydi: " +
        "bayram kunidagi tungi ish " +
        "ikkala asos bo'yicha " +
        "hisoblanishi mumkin.\n\n" +
        "Aniq miqdorlar qonun matnida.",
      example:
        "Xodim bayram kuni tungi smenada " +
        "ishladi, lekin faqat oddiy haq " +
        "to'landi. Ikkala asos bo'yicha " +
        "oshirilgan haq hisoblanishi " +
        "kerak edi.",
      keyPoints: [
        "Maxsus sharoitdagi ish oshirilgan haq bilan to'lanadi",
        "Qo'shimcha, bayram va tungi ish alohida moddalarda",
        "Ular bir-birini almashtirmaydi",
        "Aniq miqdorlar qonunda ko'rsatilgan",
      ],
      warning:
        "Bunday kunlarda ishlaganingizni " +
        "tabelda qayd etilganini " +
        "tekshiring.",
      lawRefs: [
        { code: "MK", article: "262" },
        { code: "MK", article: "263" },
        { code: "MK", article: "264" },
      ],
    },
    {
      heading: "Norma bajarilmaganda va bekor turganda haq",
      text:
        "Xodimning aybisiz ish bajarilmasa " +
        "nima bo'ladi?\n\n" +
        "Qonun bir necha holatni ajratadi:\n\n" +
        "(1) MEHNAT NORMALARI yoki mehnat " +
        "(lavozim) majburiyatlari " +
        "bajarilmaganda haq to'lash;\n\n" +
        "(2) BEKOR TURIB QOLINGAN vaqt " +
        "uchun haq to'lash;\n\n" +
        "(3) YAROQSIZ mahsulot " +
        "tayyorlanganda haq to'lash.\n\n" +
        "⚠️ Har birida hal qiluvchi savol " +
        "bitta: AYB kimda? Xodimning " +
        "aybi bo'lmasa haq odatda " +
        "saqlanadi yoki qisman " +
        "to'lanadi.\n\n" +
        "Ish beruvchining aybi bilan " +
        "bekor turish esa alohida " +
        "baholanadi.",
      example:
        "Ishlab chiqarish material " +
        "yetkazilmagani uchun to'xtadi va " +
        "xodimlarga haq to'lanmadi. " +
        "Xodimlarning aybi yo'q — bekor " +
        "turgan vaqt uchun to'lov " +
        "qoidalari amal qiladi.",
      keyPoints: [
        "Norma bajarilmaganda haq to'lash tartibi belgilangan",
        "Bekor turgan vaqt uchun to'lov nazarda tutilgan",
        "Yaroqsiz mahsulot uchun ham qoida bor",
        "Hal qiluvchi savol — ayb kimda",
      ],
      warning:
        "Bekor turish sababini YOZMA qayd " +
        "ettiring — ayb kimda ekani shu " +
        "hujjatga bog'liq.",
      lawRefs: [
        { code: "MK", article: "265" },
        { code: "MK", article: "266" },
        { code: "MK", article: "267" },
      ],
    },
    {
      heading: "Kafolatli to'lovlar",
      text:
        "KAFOLATLI to'lovlar — xodim " +
        "ishlamagan, lekin qonun bo'yicha " +
        "haq saqlanadigan davrlar uchun.\n\n" +
        "Tushuncha va ish beruvchining bu " +
        "to'lovlarni amalga oshirish " +
        "majburiyati alohida moddalarda " +
        "belgilangan.\n\n" +
        "Odatiy holatlar: davlat va jamoat " +
        "majburiyatlarini bajarish; qon va " +
        "uning tarkibiy qismlarini " +
        "topshirish; ta'til davri; qonunda " +
        "nazarda tutilgan boshqa " +
        "davrlar.\n\n" +
        "Kafolatli QO'SHIMCHA to'lovlar ham " +
        "alohida nazarda tutilgan.\n\n" +
        "Moliyalashtirish manbalari ham " +
        "belgilangan.",
      example:
        "Xodim sudga guvoh sifatida " +
        "chaqirildi va ishga bora olmadi. " +
        "Bu davlat majburiyatini bajarish " +
        "— kafolatli to'lov beriladi.",
      keyPoints: [
        "Kafolatli to'lov ishlamagan davr uchun beriladi",
        "Davlat majburiyatlari va qon topshirish qamraladi",
        "Qo'shimcha kafolatli to'lovlar ham mavjud",
        "Moliyalashtirish manbalari belgilangan",
      ],
      warning:
        "Sudga yoki boshqa organga " +
        "chaqirilsangiz chaqiruv qog'ozini " +
        "saqlang — to'lov shunga " +
        "asoslanadi.",
      lawRefs: [
        { code: "MK", article: "279" },
        { code: "MK", article: "280" },
        { code: "MK", article: "282" },
        { code: "MK", article: "283" },
      ],
    },
    {
      heading: "Kompensatsiya to'lovlari",
      text:
        "KOMPENSATSIYA to'lovlari — xodim " +
        "mehnat majburiyatlari bilan " +
        "bog'liq XARAJAT qilganda uni " +
        "qoplash.\n\n" +
        "⚠️ FARQ MUHIM: kafolatli to'lov " +
        "yo'qotilgan daromad o'rniga, " +
        "kompensatsiya esa qilingan " +
        "xarajat o'rniga beriladi.\n\n" +
        "Shu sababdan kompensatsiya " +
        "daromad hisoblanmaydi — u " +
        "xodimga foyda keltirmaydi, " +
        "faqat xarajatini qoplaydi.\n\n" +
        "Tushuncha va ish beruvchining " +
        "majburiyati alohida moddalarda " +
        "belgilangan.",
      example:
        "Xodim shaxsiy avtomobilini ish " +
        "uchun ishlatdi. Yoqilg'i " +
        "xarajati kompensatsiya sifatida " +
        "qoplanishi kerak.",
      keyPoints: [
        "Kompensatsiya qilingan xarajatni qoplaydi",
        "Kafolatli to'lovdan farq qiladi",
        "U daromad hisoblanmaydi",
        "Ish beruvchining majburiyati qonunda belgilangan",
      ],
      warning:
        "Xarajatni hujjatlashtiring — " +
        "cheksiz kompensatsiya talab " +
        "qilib bo'lmaydi.",
      lawRefs: [
        { code: "MK", article: "285" },
        { code: "MK", article: "286" },
      ],
    },
    {
      heading: "Xizmat safari va sayyor ish kompensatsiyalari",
      text:
        "Eng ko'p uchraydigan kompensatsiya " +
        "turlari.\n\n" +
        "XIZMAT SAFARLARI chog'idagi " +
        "kompensatsiya to'lovlari alohida " +
        "moddada belgilangan: yo'l " +
        "xarajatlari, turar joy, kunlik " +
        "xarajatlar.\n\n" +
        "Ish SAYYOR va KO'CHIB YURISH " +
        "xususiyatiga ega bo'lganda, " +
        "shuningdek dala sharoitlarida " +
        "va VAXTA usulida ishlanganda ham " +
        "kompensatsiya nazarda " +
        "tutilgan.\n\n" +
        "⚠️ Xizmat safarida xodim IKKI " +
        "narsani oladi: safar davri uchun " +
        "o'rtacha ish haqi (kafolatli " +
        "to'lov) VA xarajatlar " +
        "kompensatsiyasi. Bittasi " +
        "ikkinchisini almashtirmaydi.",
      example:
        "Xodimga xizmat safarida faqat " +
        "yo'l puli berildi, safar davri " +
        "uchun ish haqi to'lanmadi. " +
        "Ikkalasi ham berilishi kerak " +
        "edi.",
      keyPoints: [
        "Xizmat safari xarajatlari kompensatsiya qilinadi",
        "Sayyor va vaxta usulidagi ish uchun ham to'lov bor",
        "Xodim ish haqi va kompensatsiyani birga oladi",
        "Bittasi ikkinchisini almashtirmaydi",
      ],
      warning:
        "Safar xarajatlarini chek va bilet " +
        "bilan hujjatlashtiring — aks " +
        "holda qoplash talabini isbotlash " +
        "qiyin.",
      lawRefs: [
        { code: "MK", article: "287" },
        { code: "MK", article: "288" },
      ],
    },
    {
      heading: "Baxtsiz hodisada xarajatlarni kompensatsiya qilish",
      text:
        "Ishlab chiqarishdagi baxtsiz hodisa " +
        "yoki kasb kasalligi natijasida " +
        "xodimda vaqtincha mehnatga " +
        "qobiliyatsizlik yuz berganda " +
        "xarajatlar kompensatsiya " +
        "qilinadi.\n\n" +
        "Bu alohida moddada belgilangan va " +
        "u xodim uchun muhim himoya.\n\n" +
        "⚠️ AMALIY KETMA-KETLIK: hodisani " +
        "darhol xabar qiling → tibbiy " +
        "yordam oling → hodisani RASMIY " +
        "qayd ettiring → tekshiruv " +
        "dalolatnomasini oling.\n\n" +
        "Dalolatnoma barcha keyingi " +
        "to'lovlar uchun asos bo'ladi. " +
        "Usiz kompensatsiya olish " +
        "deyarli imkonsiz.",
      example:
        "Xodim ish joyida jarohat oldi, " +
        "ish beruvchi \"kelishaylik, " +
        "rasmiylashtirmaylik\" dedi. " +
        "Keyinchalik asorat chiqqanda " +
        "hujjat bo'lmagani uchun hech " +
        "narsa talab qilib bo'lmadi.",
      keyPoints: [
        "Baxtsiz hodisa xarajatlari kompensatsiya qilinadi",
        "Bu vaqtincha mehnatga qobiliyatsizlikni qamraydi",
        "Hodisani rasmiy qayd ettirish shart",
        "Dalolatnoma barcha to'lovlar uchun asos",
      ],
      warning:
        "Hodisani rasmiylashtirmaslikka " +
        "ROZI BO'LMANG — asorat yillar " +
        "o'tib chiqishi mumkin.",
      lawRefs: [{ code: "MK", article: "291" }],
    },
  ],
};

module.exports = { LESSON };
