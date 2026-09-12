"use strict";
/** FUQAROLIK MODULI — 5-DARS: UMUMIY MULK. FK 216–227. */

const LESSON = {
  key: "mulk-turlari",
  category: "civil",
  level: "mid",
  order: 2050,
  title: "Umumiy mulk: ulush va birgalikdagi mulk",
  desc:
    "Umumiy mulk qanday vujudga keladi, ulushli va birgalikdagi mulk " +
    "farqi, umumiy mulkni tasarruf etish, imtiyozli sotib olish " +
    "huquqi, taqsimlash va ulush ajratish.",
  objectives: [
    "Ulushli va birgalikdagi mulk farqini aniq bilasiz",
    "Umumiy mulkni kim va qanday tasarruf etishini bilasiz",
    "Imtiyozli sotib olish huquqidan foydalanishni bilasiz",
    "Xarajatlar qanday taqsimlanishini bilasiz",
    "Ulush ajratish va taqsimlash yo'llarini bilasiz",
    "Ulushga undiruv qaratilishini tushunasiz",
  ],
  practicalSteps: [
    "Umumiy mulkka oid har qanday kelishuvni yozma rasmiylashtiring",
    "Ulushingizni sotishdan oldin qolgan mulkdorlarni yozma xabardor qiling",
    "Umumiy mulkka qilgan xarajatlaringizni hujjat bilan qayd eting",
    "Yaxshilanish kiritishdan oldin boshqa mulkdorlar roziligini oling",
    "Kelishuvga erishilmasa taqsimlashni sud orqali talab qiling",
  ],
  sections: [
    {
      heading: "Umumiy mulk nima va u qanday vujudga keladi",
      text:
        "Mol-mulk ikki yoki undan ortiq shaxsning mulkida bo'lsa, " +
        "u ularning UMUMIY MULKI hisoblanadi.\n\n" +
        "Umumiy mulk ikki turda bo'ladi: har bir ishtirokchining " +
        "ULUSHI aniqlangan (ulushli mulk) va ulushlar aniqlanmagan " +
        "(birgalikdagi mulk).\n\n" +
        "⚠️ UMUMIY QOIDA — ULUSHLI MULK. Birgalikdagi mulk faqat " +
        "qonunda nazarda tutilgan hollarda vujudga keladi (masalan " +
        "er-xotinning nikoh davrida orttirgan mol-mulki).\n\n" +
        "Ya'ni ikki do'st birgalikda mashina sotib olsa, bu " +
        "ULUSHLI mulk bo'ladi — ular \"birgalikdagi mulk\" " +
        "shartini o'zlari o'ylab topa olmaydi.\n\n" +
        "VUJUDGA KELISH ASOSLARI: bo'linmaydigan ashyoning ikki " +
        "shaxsga tegishli bo'lishi, birgalikda sotib olish, meros, " +
        "shartnoma va qonunda nazarda tutilgan boshqa asoslar.\n\n" +
        "Birgalikdagi mulk ishtirokchilarining kelishuvi bilan " +
        "ulushli mulkka aylantirilishi mumkin.",
      example:
        "Ikki aka-uka merosga uy oldi — ular ulushli mulkdorlar " +
        "bo'ladi va har birining ulushi aniqlanadi.",
      keyPoints: [
        "Umumiy mulk — ikki yoki undan ortiq shaxs mulki",
        "U ulushli va birgalikdagi turlarga bo'linadi",
        "Umumiy qoida — ulushli mulk",
        "Birgalikdagi mulk faqat qonunda ko'rsatilgan hollarda",
      ],
      warning:
        "Birgalikda mulk sotib olayotganda ulushlarni darhol " +
        "hujjatda aniqlang.",
      lawRefs: [{ code: "FK", article: "216" }],
    },
    {
      heading: "Ulushlarni aniqlash va ularni o'zgartirish",
      text:
        "Ulushli mulkda ishtirokchilarning ulushlari qonun yoki " +
        "kelishuv bilan belgilanadi. Belgilanmagan bo'lsa, ulushlar " +
        "TENG deb hisoblanadi.\n\n" +
        "⚠️ BU JUDA MUHIM AMALIY QOIDA: hujjatda ulush " +
        "ko'rsatilmagan bo'lsa, ko'proq pul to'lagan shaxs ham " +
        "avtomatik ko'proq ulushga ega bo'lmaydi — teng deb " +
        "hisoblanadi.\n\n" +
        "Shuning uchun hissalar teng bo'lmasa, buni SHARTNOMADA " +
        "aniq yozish shart.\n\n" +
        "ULUSHNI OSHIRISH: umumiy mol-mulkka AJRALMAS " +
        "yaxshilanishlar kiritgan ishtirokchi ulushini oshirishni " +
        "talab qilishga haqli — LEKIN yaxshilanish belgilangan " +
        "tartibda, ya'ni boshqa mulkdorlar roziligi bilan " +
        "kiritilgan bo'lishi kerak.\n\n" +
        "AJRALADIGAN yaxshilanishlar esa uni kiritgan " +
        "ishtirokchining mulki bo'ladi.\n\n" +
        "AMALIY XULOSA: ta'mirlashni boshlashdan oldin yozma " +
        "rozilik oling — aks holda sarflangan pul ulushni " +
        "oshirmaydi.",
      example:
        "Bir mulkdor uyni roziliksiz kapital ta'mirladi — u " +
        "ulushni oshirishni talab qila olmasligi mumkin.",
      keyPoints: [
        "Ulush aniqlanmagan bo'lsa teng deb hisoblanadi",
        "Teng bo'lmagan hissa shartnomada yozilishi kerak",
        "Ajralmas yaxshilanish ulushni oshirishi mumkin",
        "Yaxshilanish uchun oldindan rozilik kerak",
      ],
      warning:
        "Roziliksiz kiritilgan yaxshilanish uchun pul qaytmasligi " +
        "mumkin.",
      lawRefs: [{ code: "FK", article: "217" }],
    },
    {
      heading: "Umumiy mol-mulkni tasarruf etish",
      text:
        "Ulushli mulkdagi mol-mulk barcha ishtirokchilarning " +
        "KELISHUVI bilan tasarruf etiladi.\n\n" +
        "⚠️ BU QOIDA QAT'IY: ko'pchilik ovoz yetarli emas. Uch " +
        "mulkdordan ikkitasi rozi bo'lsa ham, uchinchisining " +
        "roziligisiz umumiy mol-mulkni sotib bo'lmaydi.\n\n" +
        "Kelishuvga erishilmasa, nizo SUD tartibida hal " +
        "qilinadi.\n\n" +
        "MUHIM FARQ: har bir ishtirokchi O'Z ULUSHINI mustaqil " +
        "tasarruf etishi mumkin — sotishi, hadya qilishi, " +
        "vasiyat qilishi, garovga qo'yishi. Buning uchun " +
        "boshqalarning roziligi kerak emas (lekin imtiyozli sotib " +
        "olish qoidasi amal qiladi — keyingi mavzuga qarang).\n\n" +
        "Ya'ni chegara aniq: UMUMIY MOL-MULK — kelishuv bilan, " +
        "O'Z ULUSHI — mustaqil.\n\n" +
        "Bu farqni tushunmaslik umumiy mulkka oid nizolarning " +
        "eng ko'p tarqalgan sababi.",
      example:
        "Ikki mulkdor uyni sotmoqchi, uchinchisi rozi emas — " +
        "sotish uchun kelishuv yoki sud qarori kerak.",
      keyPoints: [
        "Umumiy mol-mulk barcha ishtirokchilar kelishuvi bilan tasarruf etiladi",
        "Ko'pchilik ovoz yetarli emas",
        "Har kim o'z ulushini mustaqil tasarruf etadi",
        "Kelishuv bo'lmasa nizo sudda hal qilinadi",
      ],
      warning:
        "Boshqa mulkdor roziligisiz tuzilgan bitim haqiqiy emas " +
        "deb topilishi mumkin.",
      lawRefs: [{ code: "FK", article: "218" }],
    },
    {
      heading: "Egalik qilish va foydalanish tartibi",
      text:
        "Ulushli mulkdagi umumiy mol-mulkka EGALIK QILISH va undan " +
        "FOYDALANISH ham ishtirokchilarning kelishuvi bilan, " +
        "kelishilmasa — sud belgilagan tartibda amalga " +
        "oshiriladi.\n\n" +
        "⚠️ AMALDA ENG KO'P NIZO SHU YERDA: kim qaysi xonada " +
        "yashaydi, kim qaysi qismdan foydalanadi, kim " +
        "qo'shimchani ishlatadi.\n\n" +
        "Har bir ishtirokchi o'z ulushiga MUTANOSIB qismni " +
        "egallashni talab qilishga haqli. Bu amalda imkonsiz " +
        "bo'lsa (masalan xonalar soni mos kelmasa), u boshqa " +
        "ishtirokchilardan tegishli TOVON to'lashni talab " +
        "qilishi mumkin.\n\n" +
        "AMALIY MASLAHAT: foydalanish tartibini YOZMA kelishuv " +
        "bilan belgilash — bu keyinchalik uzoq nizolarni oldini " +
        "oladi. Kelishuvda kim qaysi qismdan foydalanishi, " +
        "kommunal to'lovlar qanday bo'linishi va mehmonlar " +
        "masalasi yozilishi mumkin.\n\n" +
        "Kelishuv bo'lmasa, har bir kichik masala uchun sudga " +
        "murojaat qilishga to'g'ri keladi.",
      example:
        "Ulushi kichik mulkdorga mos xona topilmadi — u tovon " +
        "to'lashni talab qilishi mumkin.",
      keyPoints: [
        "Foydalanish tartibi kelishuv yoki sud bilan belgilanadi",
        "Har kim ulushiga mutanosib qismni talab qila oladi",
        "Imkonsiz bo'lsa tovon talab qilinadi",
        "Yozma kelishuv nizolarni oldini oladi",
      ],
      warning:
        "Og'zaki kelishuv yillar o'tib butunlay boshqacha " +
        "eslanadi — yozib qo'ying.",
      lawRefs: [{ code: "FK", article: "219" }],
    },
    {
      heading: "Hosil, daromad va saqlash xarajatlari",
      text:
        "Umumiy mol-mulkdan foydalanish natijasida keladigan HOSIL, " +
        "MAHSULOT va DAROMADLAR umumiy mulk tarkibiga kiradi va " +
        "ishtirokchilar o'rtasida ULUSHLARIGA MUTANOSIB " +
        "taqsimlanadi — kelishuvda boshqacha belgilanmagan " +
        "bo'lsa.\n\n" +
        "XARAJATLAR ham xuddi shu tamoyil bo'yicha: har bir " +
        "ishtirokchi umumiy mol-mulk bo'yicha soliqlar, " +
        "yig'imlar va boshqa to'lovlarda, shuningdek uni " +
        "saqlash va asrash xarajatlarida O'Z ULUSHIGA " +
        "MUTANOSIB ravishda qatnashishi shart.\n\n" +
        "⚠️ ENG KENG TARQALGAN NIZO: bir mulkdor xarajatni " +
        "to'liq ko'taradi, boshqalari esa qatnashmaydi.\n\n" +
        "Bunday holatda to'lagan shaxs boshqalardan ULUSHIGA " +
        "MUTANOSIB qismni talab qilishga haqli — lekin buning " +
        "uchun xarajat HUJJAT bilan tasdiqlanishi kerak.\n\n" +
        "AMALIY QOIDA: umumiy mulk uchun qilingan har bir " +
        "to'lovda chek, shartnoma va dalolatnomani saqlang. " +
        "\"Men ta'mirlashga ko'p pul sarfladim\" degan og'zaki " +
        "dalil sudda ishlamaydi.",
      example:
        "Umumiy uyni ijaraga berishdan tushgan daromad bir " +
        "mulkdorda qoldi — qolganlar ulushiga mutanosib qismni " +
        "talab qilishi mumkin.",
      keyPoints: [
        "Hosil va daromad ulushga mutanosib taqsimlanadi",
        "Xarajatlar ham ulushga mutanosib ko'tariladi",
        "To'lagan shaxs boshqalardan ulushni talab qila oladi",
        "Xarajat hujjat bilan tasdiqlanishi shart",
      ],
      warning:
        "Cheksiz to'lovlar keyinchalik qaytarilmaydi — hujjat " +
        "saqlang.",
      lawRefs: [
        { code: "FK", article: "220" },
        { code: "FK", article: "221" },
      ],
    },
    {
      heading: "Imtiyozli sotib olish huquqi",
      text:
        "Ulushli mulk ishtirokchisi o'z ulushini begona shaxsga " +
        "sotmoqchi bo'lsa, qolgan ishtirokchilar uni sotilayotgan " +
        "narxda va boshqa teng shartlarda IMTIYOZLI SOTIB OLISH " +
        "huquqiga ega.\n\n" +
        "⚠️ TARTIBI QAT'IY: sotuvchi qolgan ishtirokchilarni " +
        "ulushni sotish niyati, narxi va boshqa shartlari haqida " +
        "YOZMA XABARDOR qilishi shart.\n\n" +
        "Ular belgilangan muddat ichida sotib olmasa yoki bosh " +
        "tortsa, sotuvchi ulushni istalgan shaxsga sotishi mumkin " +
        "— lekin AYNAN O'SHA shartlarda.\n\n" +
        "QOIDA BUZILSA: boshqa ishtirokchi uch oy ichida sud " +
        "orqali xaridor huquq va burchlarini O'ZIGA O'TKAZISHNI " +
        "talab qilishga haqli. Ya'ni bitim bekor qilinmaydi, " +
        "xaridor ALMASHTIRILADI.\n\n" +
        "MUHIM ISTISNO: imtiyozli sotib olish huquqi HADYA va " +
        "MEROS holatlarida qo'llanilmaydi — u faqat SOTISHGA " +
        "tegishli. Aynan shuning uchun ba'zan sotish \"hadya\" " +
        "sifatida rasmiylashtiriladi; bunday bitim " +
        "ko'zbo'yamachilik sifatida haqiqiy emas deb topilishi " +
        "mumkin.",
      example:
        "Ulush qolgan mulkdorlarni xabardor qilmasdan sotildi — " +
        "ular uch oy ichida xaridor o'rniga o'tishni talab qilishi " +
        "mumkin.",
      keyPoints: [
        "Qolgan mulkdorlar imtiyozli sotib olish huquqiga ega",
        "Yozma xabar berish shart",
        "Qoida buzilsa xaridor huquqi o'ziga o'tkaziladi",
        "Hadya va merosda bu huquq qo'llanilmaydi",
      ],
      warning:
        "Sotishni hadya sifatida rasmiylashtirish bitimni " +
        "haqiqiy emas deb topilishiga olib kelishi mumkin.",
      lawRefs: [
        { code: "FK", article: "222" },
        { code: "FK", article: "224" },
      ],
    },
    {
      heading: "Umumiy mulkni taqsimlash va ulush ajratish",
      text:
        "Ulushli mulkdagi mol-mulk ishtirokchilarning KELISHUVI " +
        "bilan ular o'rtasida taqsimlanishi mumkin. Har bir " +
        "ishtirokchi esa umumiy mol-mulkdan O'Z ULUSHINI " +
        "AJRATIB olishni talab qilishga haqli.\n\n" +
        "TAQSIMLASH va ULUSH AJRATISH farqi: taqsimlashda umumiy " +
        "mulk butunlay tugaydi; ulush ajratganda esa bitta " +
        "ishtirokchi chiqadi, qolganlari uchun umumiy mulk " +
        "saqlanadi.\n\n" +
        "Kelishuvga erishilmasa, ishtirokchi ulushini natura " +
        "holida ajratib berishni SUD orqali talab qilishga " +
        "haqli.\n\n" +
        "⚠️ NATURA HOLIDA AJRATISH HAR DOIM MUMKIN EMAS: " +
        "mol-mulk bo'linmas bo'lsa yoki bo'lish uning maqsadiga " +
        "nomutanosib zarar yetkazsa, ulush o'rniga PUL TOVONI " +
        "to'lanadi.\n\n" +
        "Tovon to'langanidan keyin shaxs umumiy mulkdagi " +
        "huquqini yo'qotadi.\n\n" +
        "AMALIY MASLAHAT: taqsimlash sudda uzoq davom etadi va " +
        "ekspertiza talab qiladi. Kelishuv har doim tezroq va " +
        "arzonroq yo'l.",
      example:
        "Uyni ikkiga bo'lish texnik jihatdan imkonsiz — bir " +
        "mulkdor ikkinchisiga pul tovoni to'lab, uyni to'liq " +
        "oladi.",
      keyPoints: [
        "Taqsimlash umumiy mulkni tugatadi",
        "Ulush ajratishda qolganlar uchun umumiy mulk saqlanadi",
        "Kelishuv bo'lmasa sud orqali talab qilinadi",
        "Natura holida bo'lish imkonsiz bo'lsa pul tovoni to'lanadi",
      ],
      warning:
        "Bo'linmas mol-mulkda \"ulushimni beringlar\" degan talab " +
        "avtomatik natura holida bajarilmaydi.",
      lawRefs: [{ code: "FK", article: "223" }],
    },
    {
      heading: "Birgalikdagi mulk: egalik, foydalanish va taqsimlash",
      text:
        "BIRGALIKDAGI MULKDA ulushlar oldindan aniqlanmagan " +
        "bo'ladi. Ishtirokchilar mol-mulkka BIRGALIKDA egalik " +
        "qiladi va undan birgalikda foydalanadi.\n\n" +
        "⚠️ ENG MUHIM QOIDA — ROZILIK PREZUMPSIYASI. Mol-mulkni " +
        "tasarruf etish barcha ishtirokchilarning roziligi bilan " +
        "amalga oshiriladi va bu ROZILIK MAVJUD deb taxmin " +
        "qilinadi — bitimni ishtirokchilardan qaysi biri " +
        "tuzayotganidan qat'i nazar.\n\n" +
        "Ya'ni uchinchi shaxs har safar barcha ishtirokchilardan " +
        "rozilik so'rashi shart emas.\n\n" +
        "LEKIN: rozilik bo'lmagan holda tuzilgan bitim boshqa " +
        "ishtirokchi talabi bilan haqiqiy emas deb topilishi " +
        "mumkin — agar bitimning ikkinchi tomoni rozilik " +
        "yo'qligini BILGANI yoki bilishi kerakligi isbotlansa.\n\n" +
        "TAQSIMLASH: birgalikdagi mulkni taqsimlash yoki undan " +
        "ulush ajratish uchun avval har bir ishtirokchining " +
        "ULUSHI ANIQLANADI. Ulushlar odatda teng deb tan " +
        "olinadi, qonun yoki kelishuv boshqacha belgilamasa.\n\n" +
        "Ko'chmas mulk bitimlarida ehtiyot uchun barcha " +
        "ishtirokchilarning yozma roziligini olish odatiy " +
        "amaliyot hisoblanadi.",
      example:
        "Birgalikdagi mulk bitta ishtirokchi tomonidan sotildi — " +
        "xaridor rozilik yo'qligini bilgan bo'lsa, bitim nizoli " +
        "bo'ladi.",
      keyPoints: [
        "Birgalikdagi mulkda ulushlar oldindan aniqlanmagan",
        "Tasarruf etishda rozilik mavjud deb taxmin qilinadi",
        "Rozilik yo'qligi bilingan bo'lsa bitim nizoli bo'ladi",
        "Taqsimlashdan oldin ulushlar aniqlanadi",
      ],
      warning:
        "Er-xotin mulkini sotib olayotganda ikkinchi tomonning " +
        "yozma roziligini so'rang.",
      lawRefs: [
        { code: "FK", article: "225" },
        { code: "FK", article: "226" },
      ],
    },
    {
      heading: "Umumiy mol-mulkdagi ulushga undiruv qaratish",
      text:
        "Ishtirokchining kreditori uning umumiy mol-mulkdagi " +
        "ULUSHIGA undiruv qaratishni talab qilishi mumkin — agar " +
        "qarzdorning boshqa mol-mulki yetarli bo'lmasa.\n\n" +
        "⚠️ TARTIB QAT'IY VA U BOSHQA MULKDORLARNI HIMOYA QILADI. " +
        "Kreditor to'g'ridan-to'g'ri butun mol-mulkka undiruv " +
        "qarata olmaydi — faqat qarzdorning ulushiga.\n\n" +
        "Kreditor avval qarzdorning ulushini AJRATIB berishni " +
        "talab qiladi. Natura holida ajratish imkonsiz bo'lsa " +
        "yoki qolgan ishtirokchilar qarshi bo'lsa, kreditor " +
        "ulushni qolgan ishtirokchilarga BOZOR NARXIDA sotib " +
        "olishni taklif qilishi mumkin.\n\n" +
        "Ular sotib olishdan bosh tortsa, ulush kimoshdi " +
        "savdosida sotiladi.\n\n" +
        "AMALIY MA'NOSI IKKI TOMONLAMA: qarzdorning oilasi butun " +
        "uydan bir zumda mahrum bo'lmaydi; kreditor esa " +
        "\"umumiy mulk\" bahonasi bilan butunlay to'siqqa " +
        "uchramaydi.\n\n" +
        "Shuning uchun umumiy mulkka sherik tanlashda uning " +
        "moliyaviy holatini ham hisobga olish kerak.",
      example:
        "Bir mulkdorning qarzi uchun kreditor uning ulushini " +
        "ajratishni talab qildi — qolgan mulkdorlar uni sotib " +
        "olish imkoniga ega.",
      keyPoints: [
        "Undiruv faqat qarzdorning ulushiga qaratiladi",
        "Avval ulushni ajratish talab qilinadi",
        "Qolgan mulkdorlar ulushni bozor narxida sotib olishi mumkin",
        "Bosh tortilsa ulush kimoshdi savdosida sotiladi",
      ],
      warning:
        "Sherigingizning qarzlari sizning umumiy mulkingizga ham " +
        "ta'sir qilishi mumkin.",
      lawRefs: [{ code: "FK", article: "227" }],
    },
  ],
};

module.exports = { LESSON };
