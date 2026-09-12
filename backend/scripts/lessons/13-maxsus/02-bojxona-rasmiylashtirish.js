"use strict";
/** MAXSUS MODUL — 2-DARS: BOJXONA RASMIYLASHTIRUVI.
 *  BJK 246–256, 259–261, 264, 265, 271, 274, 275 + MSK 4, 6. */

const LESSON = {
  key: "bojxona-rasmiylashtirish",
  category: "special",
  level: "mid",
  order: 13020,
  title: "Bojxona rasmiylashtirish va nazorat",
  desc:
    "Rasmiylashtirish bosqichlari, deklaratsiya turlari, deklarantning " +
    "huquqlari va bojxona qarorlari ustidan shikoyat.",
  objectives: [
    "Rasmiylashtirish qachon boshlanib qachon tugashini bilasiz",
    "Deklaratsiya turlarini farqlay olasiz",
    "Deklarantning huquq va majburiyatlarini bilasiz",
    "Bojxona qarori ustidan shikoyat yo'lini bilasiz",
  ],
  practicalSteps: [
    "Hujjatlar ro'yxatini oldindan tayyorlang",
    "Deklaratsiyani to'ldirishda xatoni darhol tuzating",
    "Chiqarib yuborish qarorini yozma oling",
    "Rozi bo'lmasangiz belgilangan muddatda shikoyat qiling",
  ],
  sections: [
    {
      heading: "Rasmiylashtiruv nima va qanday amalga oshiriladi",
      text:
        "BOJXONA RASMIYLASHTIRUVI — " +
        "tovar va transport " +
        "vositasini muayyan bojxona " +
        "rejimiga joylashtirish " +
        "bo'yicha harakatlar " +
        "majmui.\n\n" +
        "Oddiy tilda: tovar " +
        "chegaradan qonuniy " +
        "o'tishi uchun " +
        "bajariladigan barcha " +
        "rasmiy harakatlar.\n\n" +
        "⚠️ Rasmiylashtiruv " +
        "NAZORATDAN farq qiladi: " +
        "rasmiylashtiruv — " +
        "hujjatlar va " +
        "protsedura, nazorat esa " +
        "— tekshirish " +
        "faoliyati. Ular birga " +
        "boradi, lekin bir xil " +
        "narsa emas.\n\n" +
        "Rasmiylashtiruv barcha " +
        "uchun majburiy: ham " +
        "tashkilot, ham jismoniy " +
        "shaxs uchun (faqat " +
        "hajmi turlicha).",
      example:
        "Tashkilot yuk olib keldi. " +
        "Hujjat topshirish, " +
        "deklaratsiya va chiqarib " +
        "yuborish — hammasi " +
        "rasmiylashtiruv.",
      keyPoints: [
        "Rasmiylashtiruv — rasmiy harakatlar majmui",
        "U tovarni bojxona rejimiga joylashtiradi",
        "Nazoratdan farq qiladi",
        "Barcha shaxslar uchun majburiy",
      ],
      warning:
        "Rasmiylashtiruvsiz olib " +
        "o'tilgan tovar " +
        "qonunga zid " +
        "hisoblanadi.",
      lawRefs: [{ code: "BJK", article: "246" }],
    },
    {
      heading: "Rasmiylashtiruv joyi va vaqti",
      text:
        "Rasmiylashtiruv istalgan " +
        "joyda va istalgan paytda " +
        "amalga oshirilmaydi — " +
        "qonun JOY va VAQTNI " +
        "belgilaydi.\n\n" +
        "Umumiy qoida: rasmiylashtiruv " +
        "bojxona organining " +
        "joylashgan yerida va " +
        "uning ish vaqtida " +
        "o'tkaziladi.\n\n" +
        "⚠️ Asoslantirilgan " +
        "hollarda boshqa joyda " +
        "yoki ish vaqtidan " +
        "tashqarida " +
        "rasmiylashtirishga " +
        "ruxsat berilishi " +
        "mumkin — buning uchun " +
        "murojaat qilinadi.\n\n" +
        "Bu tez buziladigan " +
        "tovarlar, tirik " +
        "hayvonlar va shoshilinch " +
        "yuklar uchun muhim.",
      example:
        "Tez buziladigan oziq-ovqat " +
        "yuki keldi. Ish vaqtidan " +
        "tashqari rasmiylashtirish " +
        "so'ralishi mumkin.",
      keyPoints: [
        "Rasmiylashtiruv joyi va vaqti belgilangan",
        "Odatda bojxona organi joyida o'tkaziladi",
        "Alohida hollarda boshqa joy va vaqt mumkin",
        "Buning uchun murojaat qilinadi",
      ],
      warning:
        "Shoshilinch yuk bo'lsa " +
        "oldindan murojaat " +
        "qiling — keyin " +
        "kechikish zarariga " +
        "olib keladi.",
      lawRefs: [{ code: "BJK", article: "247" }],
    },
    {
      heading: "Rasmiylashtiruvning boshlanishi va tugallanishi",
      text:
        "Rasmiylashtiruv qachon " +
        "BOSHLANADI va qachon " +
        "TUGAYDI — bu savol " +
        "amalda juda muhim, " +
        "chunki undan " +
        "majburiyatlar va " +
        "muddatlar hisoblanadi.\n\n" +
        "Umumiy mantiq: " +
        "rasmiylashtiruv " +
        "deklaratsiya yoki zarur " +
        "hujjatlar topshirilgan " +
        "paytdan boshlanadi.\n\n" +
        "Tugallanishi esa — " +
        "tovarni chiqarib " +
        "yuborish yoki " +
        "tanlangan bojxona " +
        "rejimini qo'llash " +
        "uchun zarur harakatlar " +
        "bajarilishi bilan.\n\n" +
        "⚠️ Rasmiylashtiruv " +
        "tugallanmaguncha " +
        "tovardan erkin " +
        "foydalanish va uni " +
        "tasarruf etish " +
        "mumkin emas.",
      example:
        "Deklaratsiya topshirildi, " +
        "lekin chiqarib yuborish " +
        "qarori hali yo'q. Tovarni " +
        "sotish mumkin emas.",
      keyPoints: [
        "Rasmiylashtiruv hujjat topshirilganda boshlanadi",
        "Chiqarib yuborish bilan tugallanadi",
        "Undan muddatlar hisoblanadi",
        "Tugallanmaguncha tovar erkin emas",
      ],
      warning:
        "Chiqarib yuborilmagan " +
        "tovarni ishlatish " +
        "huquqbuzarlik " +
        "hisoblanadi.",
      lawRefs: [{ code: "BJK", article: "248" }],
    },
    {
      heading: "Zarur hujjatlar va ma'lumotlar",
      text:
        "Rasmiylashtiruv uchun ZARUR " +
        "bo'lgan hujjatlar va " +
        "ma'lumotlar qonunda " +
        "belgilangan.\n\n" +
        "Odatiy hujjatlar: tashqi " +
        "savdo shartnomasi; " +
        "invoys (hisob-faktura); " +
        "transport hujjatlari; " +
        "kelib chiqish " +
        "sertifikati; ruxsat " +
        "beruvchi hujjatlar " +
        "(litsenziya, " +
        "sertifikat).\n\n" +
        "⚠️ ENG KO'P UCHRAYDIGAN " +
        "MUAMMO — hujjatlar " +
        "orasidagi NOMUVOFIQLIK: " +
        "shartnomada bir narsa, " +
        "invoysda boshqa narsa, " +
        "transport hujjatida " +
        "uchinchi narsa " +
        "yozilgan bo'ladi.\n\n" +
        "Bunday nomuvofiqlik " +
        "rasmiylashtiruvni " +
        "to'xtatib qo'yadi va " +
        "tekshiruvga sabab " +
        "bo'ladi.",
      example:
        "Invoysdagi tovar nomi " +
        "shartnomadagidan farq " +
        "qildi. Rasmiylashtirish " +
        "to'xtatilib tushuntirish " +
        "so'raldi.",
      keyPoints: [
        "Zarur hujjatlar ro'yxati qonunda belgilangan",
        "Shartnoma, invoys va transport hujjatlari asosiy",
        "Hujjatlar bir-biriga mos bo'lishi shart",
        "Nomuvofiqlik jarayonni to'xtatadi",
      ],
      warning:
        "Hujjatlarni oldindan " +
        "solishtiring — bitta " +
        "harf farqi ham " +
        "kechikishga sabab " +
        "bo'ladi.",
      lawRefs: [{ code: "BJK", article: "249" }],
    },
    {
      heading: "Vakolatli shaxslarning hozir bo'lishi",
      text:
        "Rasmiylashtiruv " +
        "amalga oshirilayotganda " +
        "VAKOLATLI SHAXSLARNING " +
        "hozir bo'lishi alohida " +
        "modda bilan tartibga " +
        "solingan.\n\n" +
        "Bu shuni anglatadi: " +
        "deklarant yoki uning " +
        "vakili ko'rik va boshqa " +
        "harakatlar paytida " +
        "ishtirok etish " +
        "huquqiga ega.\n\n" +
        "⚠️ NIMA UCHUN MUHIM: " +
        "ishtirok — himoya " +
        "vositasi. Ko'rik " +
        "paytida hozir bo'lgan " +
        "shaxs tovarning " +
        "holatini ko'radi, " +
        "izohlarini bildiradi " +
        "va dalolatnomaga " +
        "e'tiroz yozdirishi " +
        "mumkin.\n\n" +
        "Ayrim hollarda bojxona " +
        "organi ishtirokni " +
        "TALAB qilishi ham " +
        "mumkin.",
      example:
        "Ko'rik paytida yuk " +
        "shikastlandi. Egasi " +
        "hozir bo'lgani uchun " +
        "buni darhol " +
        "dalolatnomaga yozdirdi.",
      keyPoints: [
        "Deklarant ko'rikda ishtirok etish huquqiga ega",
        "Ishtirok himoya vositasi hisoblanadi",
        "E'tirozlar dalolatnomaga yoziladi",
        "Ba'zan ishtirok talab ham qilinadi",
      ],
      warning:
        "Ko'rikda ishtirok " +
        "etmasangiz keyingi " +
        "e'tirozingiz kuchsiz " +
        "bo'ladi.",
      lawRefs: [{ code: "BJK", article: "250" }],
    },
    {
      heading: "Soddalashtirilgan rasmiylashtiruv",
      text:
        "Ayrim tovarlar bojxona " +
        "rasmiylashtiruvining " +
        "SODDALASHTIRILGAN " +
        "tartibi nazarda " +
        "tutilgan.\n\n" +
        "Bu odatda quyidagilarga " +
        "qo'llaniladi: tez " +
        "buziladigan tovarlar; " +
        "tirik hayvonlar; " +
        "gumanitar yordam; " +
        "favqulodda vaziyat " +
        "yuklari; ayrim " +
        "toifadagi " +
        "shaxslarning " +
        "yuklari.\n\n" +
        "⚠️ Soddalashtirish " +
        "TEZLIKKA qaratilgan: " +
        "bunday tovarlar " +
        "kechikishdan jiddiy " +
        "zarar ko'radi yoki " +
        "umuman yaroqsiz " +
        "bo'lib qoladi.\n\n" +
        "Lekin bu " +
        "javobgarlikni " +
        "kamaytirmaydi — " +
        "hujjatlar keyinroq " +
        "to'liq taqdim " +
        "etilishi kerak.",
      example:
        "Dori-darmon yuki " +
        "gumanitar yordam " +
        "sifatida keldi va " +
        "soddalashtirilgan " +
        "tartibda tez " +
        "rasmiylashtirildi.",
      keyPoints: [
        "Ayrim tovarlar uchun soddalashtirilgan tartib bor",
        "U tezlikka qaratilgan",
        "Tez buziladigan va shoshilinch yuklarga qo'llaniladi",
        "Hujjatlar keyinroq to'liq taqdim etiladi",
      ],
      warning:
        "Soddalashtirilgan tartib " +
        "hujjatlardan butunlay " +
        "ozod qilmaydi.",
      lawRefs: [{ code: "BJK", article: "251" }],
    },
    {
      heading: "Nimalar deklaratsiyalanishi shart",
      text:
        "DEKLARATSIYALASH — " +
        "rasmiylashtiruvning " +
        "markaziy bo'g'ini.\n\n" +
        "Qonun deklaratsiyalanishi " +
        "LOZIM bo'lgan tovarlar " +
        "va (yoki) transport " +
        "vositalarini " +
        "belgilaydi.\n\n" +
        "Umumiy qoida: bojxona " +
        "chegarasidan olib " +
        "o'tiladigan tovarlar " +
        "deklaratsiyalanadi. " +
        "Bojxona rejimi " +
        "o'zgarganda ham " +
        "deklaratsiyalash " +
        "talab qilinadi.\n\n" +
        "⚠️ AMALIY QOIDA: " +
        "\"deklaratsiyalash " +
        "kerakmi?\" degan " +
        "savolga javob " +
        "noaniq bo'lsa — " +
        "DEKLARATSIYALANG. " +
        "Ortiqcha e'lon qilish " +
        "jazolanmaydi, " +
        "e'lon qilmaslik esa " +
        "jazolanadi.",
      example:
        "Tashkilot vaqtincha olib " +
        "kirilgan uskunani rejim " +
        "o'zgarganda qayta " +
        "deklaratsiyalashi kerak " +
        "edi.",
      keyPoints: [
        "Deklaratsiyalanishi lozim tovarlar qonunda belgilangan",
        "Chegaradan o'tuvchi tovarlar deklaratsiyalanadi",
        "Rejim o'zgarganda ham deklaratsiya talab qilinadi",
        "Shubha bo'lsa deklaratsiyalang",
      ],
      warning:
        "Deklaratsiyalamaslik " +
        "yashirish sifatida " +
        "baholanishi mumkin.",
      lawRefs: [{ code: "BJK", article: "252" }],
    },
    {
      heading: "Deklaratsiyalash joyi va shakli",
      text:
        "Deklaratsiya QAYERGA va " +
        "QANDAY shaklda " +
        "beriladi?\n\n" +
        "JOY: deklaratsiyalash " +
        "vakolatli bojxona " +
        "organiga amalga " +
        "oshiriladi. Ayrim " +
        "tovarlar uchun maxsus " +
        "belgilangan joylar " +
        "bo'lishi mumkin.\n\n" +
        "SHAKL: deklaratsiyalash " +
        "yozma, elektron yoki " +
        "boshqa shaklda " +
        "bo'lishi mumkin.\n\n" +
        "⚠️ Bugungi kunda ELEKTRON " +
        "deklaratsiyalash asosiy " +
        "shaklga aylandi — bu " +
        "jarayonni tezlashtiradi " +
        "va inson omilini " +
        "kamaytiradi.\n\n" +
        "Jismoniy shaxslar " +
        "uchun \"yo'lak " +
        "tanlash\" ham " +
        "deklaratsiyalash " +
        "shakli hisoblanadi.",
      example:
        "Tashkilot deklaratsiyani " +
        "elektron tarzda " +
        "topshirdi — bu " +
        "jarayonni bir necha " +
        "soatga qisqartirdi.",
      keyPoints: [
        "Deklaratsiya vakolatli organga beriladi",
        "Shakli yozma, elektron yoki boshqacha bo'lishi mumkin",
        "Elektron shakl asosiy bo'lib bormoqda",
        "Yo'lak tanlash ham deklaratsiyalash hisoblanadi",
      ],
      warning:
        "Yashil yo'lakni tanlash " +
        "— \"deklaratsiyalanadigan " +
        "narsam yo'q\" degan " +
        "rasmiy bayonot.",
      lawRefs: [
        { code: "BJK", article: "253" },
        { code: "BJK", article: "254" },
      ],
    },
    {
      heading: "Bojxona deklaratsiyasi va uning turlari",
      text:
        "BOJXONA DEKLARATSIYASI — " +
        "tovar haqidagi " +
        "ma'lumotlar yozilgan " +
        "rasmiy hujjat.\n\n" +
        "Qonun deklaratsiyalarning " +
        "bir necha TURINI " +
        "belgilaydi: bojxona yuk " +
        "deklaratsiyasi; " +
        "transport vositasi " +
        "uchun deklaratsiya; " +
        "tranzit deklaratsiyasi; " +
        "yo'lovchi bojxona " +
        "deklaratsiyasi.\n\n" +
        "⚠️ Oddiy fuqaro uchun " +
        "eng muhimi — " +
        "YO'LOVCHI BOJXONA " +
        "DEKLARATSIYASI. Aynan " +
        "u chegarani kesib " +
        "o'tayotgan jismoniy " +
        "shaxs tomonidan " +
        "to'ldiriladi.\n\n" +
        "Har bir tur o'z " +
        "shakli va " +
        "to'ldirilish " +
        "qoidalariga ega.",
      example:
        "Yo'lovchi valyuta olib " +
        "o'tayotgani uchun " +
        "yo'lovchi bojxona " +
        "deklaratsiyasini " +
        "to'ldirdi.",
      keyPoints: [
        "Deklaratsiya — tovar haqidagi rasmiy hujjat",
        "Uning bir necha turi mavjud",
        "Yo'lovchi deklaratsiyasi fuqarolar uchun asosiy",
        "Har tur o'z qoidalariga ega",
      ],
      warning:
        "Deklaratsiyani boshqa " +
        "odam nomidan " +
        "to'ldirmang — " +
        "javobgarlik imzo " +
        "qo'ygan shaxsda.",
      lawRefs: [
        { code: "BJK", article: "255" },
        { code: "BJK", article: "256" },
        { code: "BJK", article: "259" },
      ],
    },
    {
      heading: "Deklaratsiyani berish muddati va qabul qilinishi",
      text:
        "Deklaratsiya " +
        "cheklanmagan vaqtda " +
        "berilmaydi — MUDDAT " +
        "belgilangan.\n\n" +
        "Muddat buzilsa bu " +
        "mustaqil huquqbuzarlik " +
        "hisoblanadi, hatto " +
        "tovarning o'zi " +
        "qonuniy bo'lsa " +
        "ham.\n\n" +
        "QABUL QILINISHI ham " +
        "muhim: bojxona organi " +
        "deklaratsiyani qabul " +
        "qiladi va shu paytdan " +
        "u YURIDIK AHAMIYATGA " +
        "ega hujjatga " +
        "aylanadi.\n\n" +
        "⚠️ Qabul qilingan " +
        "deklaratsiyadagi " +
        "ma'lumotlar uchun " +
        "deklarant javob " +
        "beradi — shuning " +
        "uchun topshirishdan " +
        "oldin tekshirish " +
        "shart.",
      example:
        "Deklaratsiya muddatidan " +
        "kechikib topshirildi. " +
        "Tovar qonuniy bo'lsa " +
        "ham muddat buzilgani " +
        "uchun javobgarlik " +
        "yuzaga keldi.",
      keyPoints: [
        "Deklaratsiya berish muddati belgilangan",
        "Muddatni buzish mustaqil huquqbuzarlik",
        "Qabul qilingandan keyin hujjat yuridik kuch oladi",
        "Ma'lumotlar uchun deklarant javob beradi",
      ],
      warning:
        "Topshirishdan oldin " +
        "har bir raqamni " +
        "tekshiring — keyin " +
        "tuzatish " +
        "murakkablashadi.",
      lawRefs: [
        { code: "BJK", article: "261" },
        { code: "BJK", article: "264" },
      ],
    },
    {
      heading: "Deklaratsiyani o'zgartirish va qaytarib olish",
      text:
        "Xato qilindi — nima " +
        "qilish kerak? Qonun " +
        "buni ham nazarda " +
        "tutgan.\n\n" +
        "Bojxona deklaratsiyasini " +
        "O'ZGARTIRISH, unga " +
        "QO'SHIMCHA kiritish, " +
        "uni QAYTA " +
        "rasmiylashtirish, " +
        "QAYTARIB OLISH va " +
        "BEKOR QILISH " +
        "mumkin.\n\n" +
        "⚠️ MUHIM SHART: bu " +
        "harakatlar " +
        "belgilangan tartibda " +
        "va odatda tovar " +
        "chiqarib " +
        "yuborilgunga qadar " +
        "amalga oshiriladi.\n\n" +
        "AMALIY XULOSA: xatoni " +
        "O'ZINGIZ topib " +
        "tuzatish — bojxona " +
        "organi topgandan " +
        "ko'ra ANCHA yaxshi. " +
        "Birinchi holat " +
        "odatiy tuzatish, " +
        "ikkinchisi esa " +
        "huquqbuzarlik " +
        "tekshiruvi bo'lishi " +
        "mumkin.",
      example:
        "Deklarant tovar miqdorida " +
        "xato ketganini o'zi " +
        "aniqlab, tuzatish " +
        "kiritish uchun murojaat " +
        "qildi.",
      keyPoints: [
        "Deklaratsiyani o'zgartirish va bekor qilish mumkin",
        "Bu belgilangan tartibda amalga oshiriladi",
        "Odatda chiqarib yuborishdan oldin",
        "Xatoni o'zingiz topib tuzatish afzal",
      ],
      warning:
        "Xatoni yashirish " +
        "uni tuzatishdan " +
        "ko'ra ancha og'ir " +
        "oqibatga olib " +
        "keladi.",
      lawRefs: [{ code: "BJK", article: "265" }],
    },
    {
      heading: "Tovarlarni chiqarib yuborish",
      text:
        "CHIQARIB YUBORISH — " +
        "rasmiylashtiruvning " +
        "yakuniy va eng " +
        "kutilgan bosqichi. " +
        "Shundan keyingina " +
        "tovardan erkin " +
        "foydalanish mumkin.\n\n" +
        "Qonun chiqarib " +
        "yuborish ASOSLARINI " +
        "belgilaydi: zarur " +
        "hujjatlar taqdim " +
        "etilgan; " +
        "deklaratsiya qabul " +
        "qilingan; bojxona " +
        "to'lovlari " +
        "to'langan yoki " +
        "ta'minlangan; " +
        "taqiq va cheklovlar " +
        "bajarilgan.\n\n" +
        "⚠️ Ayrim hollarda " +
        "tovar deklaratsiya " +
        "to'liq " +
        "rasmiylashtirilgunga " +
        "qadar ham chiqarib " +
        "yuborilishi mumkin — " +
        "lekin bu maxsus " +
        "shartlar bilan " +
        "beriladi.",
      example:
        "Barcha shartlar " +
        "bajarilgach yuk " +
        "chiqarib yuborildi " +
        "va tashkilot undan " +
        "erkin foydalana " +
        "boshladi.",
      keyPoints: [
        "Chiqarib yuborish — yakuniy bosqich",
        "Uning asoslari qonunda belgilangan",
        "To'lov va hujjatlar shart",
        "Ayrim hollarda muddatidan oldin chiqarish mumkin",
      ],
      warning:
        "Chiqarib yuborish " +
        "qarorini yozma " +
        "shaklda oling.",
      lawRefs: [{ code: "BJK", article: "271" }],
    },
    {
      heading: "Deklarant kim va uning huquqlari",
      text:
        "DEKLARANT — " +
        "deklaratsiyani " +
        "topshirayotgan yoki " +
        "uning nomidan " +
        "topshirilayotgan " +
        "shaxs.\n\n" +
        "Qonun deklarantga " +
        "qo'yiladigan " +
        "TALABLARNI va uning " +
        "HUQUQLARINI " +
        "belgilaydi.\n\n" +
        "Deklarantning odatiy " +
        "huquqlari: tovarni " +
        "deklaratsiyalashdan " +
        "oldin ko'zdan " +
        "kechirish va " +
        "o'lchash; namuna " +
        "olish (ruxsat " +
        "bilan); ko'rikda " +
        "ishtirok etish; " +
        "bojxona organidan " +
        "ma'lumot olish.\n\n" +
        "⚠️ ENG MUHIM HUQUQ — " +
        "deklaratsiyadan " +
        "OLDIN tovarni " +
        "ko'rish. Bu " +
        "noto'g'ri " +
        "ma'lumot berish " +
        "xavfini keskin " +
        "kamaytiradi.",
      example:
        "Deklarant yukni " +
        "deklaratsiyadan oldin " +
        "ko'zdan kechirdi va " +
        "hujjatdagi " +
        "nomuvofiqlikni " +
        "aniqladi.",
      keyPoints: [
        "Deklarant — deklaratsiyani topshiruvchi shaxs",
        "Unga qo'yiladigan talablar belgilangan",
        "Uning huquqlari ham qonunda yozilgan",
        "Tovarni oldindan ko'rish eng muhim huquq",
      ],
      warning:
        "Deklarant " +
        "ma'lumotlarning " +
        "to'g'riligi uchun " +
        "shaxsan javob " +
        "beradi.",
      lawRefs: [
        { code: "BJK", article: "274" },
        { code: "BJK", article: "275" },
      ],
    },
    {
      heading: "Bojxona qarori ustidan shikoyat",
      text:
        "Bojxona organining " +
        "qarori bilan rozi " +
        "emassiz — nima " +
        "qilish mumkin?\n\n" +
        "Bojxona organlarining " +
        "qarorlari, harakati " +
        "yoki harakatsizligi " +
        "ustidan SHIKOYAT " +
        "qilish mumkin. Bu " +
        "ma'muriy sud " +
        "ishlarining odatiy " +
        "predmeti.\n\n" +
        "Ikki yo'l: yuqori " +
        "turuvchi organga " +
        "shikoyat berish yoki " +
        "SUDGA murojaat " +
        "qilish.\n\n" +
        "⚠️ MUHIM: shikoyat " +
        "uchun MUDDAT " +
        "belgilangan va u " +
        "qisqa. Muddat " +
        "o'tkazib " +
        "yuborilsa, qaror " +
        "haqiqatan " +
        "noqonuniy bo'lsa " +
        "ham uni bekor " +
        "qildirish " +
        "murakkablashadi.",
      example:
        "Tashkilot bojxona " +
        "qiymatini aniqlash " +
        "qarori bilan rozi " +
        "bo'lmadi va sudga " +
        "murojaat qildi.",
      keyPoints: [
        "Bojxona qarorlari ustidan shikoyat qilish mumkin",
        "Yuqori organ yoki sudga murojaat qilinadi",
        "Bu ma'muriy sud ishlari predmeti",
        "Shikoyat muddati qisqa",
      ],
      warning:
        "Qarorni olganingizda " +
        "shikoyat muddatini " +
        "DARHOL aniqlang.",
      lawRefs: [
        { code: "MSK", article: "4" },
        { code: "MSK", article: "6" },
      ],
    },
  ],
};

module.exports = { LESSON };
