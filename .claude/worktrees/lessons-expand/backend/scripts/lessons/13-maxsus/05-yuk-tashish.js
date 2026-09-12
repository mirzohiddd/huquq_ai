"use strict";
/** MAXSUS MODUL — 5-DARS: YUK TASHISH.
 *  FK2 711, 716, 719, 721, 722, 723, 724, 726–731 + IPK 149. */

const LESSON = {
  key: "yuk-tashish",
  category: "special",
  level: "mid",
  order: 13050,
  title: "Yuk tashish shartnomasi",
  desc:
    "Yuk tashish: shartnoma va hujjatlar, transport vositasini " +
    "berish, yo'qotish va shikastlanish, ekspeditsiya va da'vo.",
  objectives: [
    "Yuk tashish shartnomasini tushunasiz",
    "Yuk yo'qolganda javobgarlikni bilasiz",
    "Ekspeditsiya shartnomasini farqlay olasiz",
    "Da'vo qo'yish tartibini bilasiz",
  ],
  practicalSteps: [
    "Yuk xatini to'g'ri va to'liq rasmiylashtiring",
    "Yuk qiymatini e'lon qilish imkoniyatidan foydalaning",
    "Qabul qilishda kamchilikni dalolatnomaga yozdiring",
    "Sudga chiqishdan oldin talab qo'ying",
  ],
  sections: [
    {
      heading: "Yuk tashish shartnomasi nima",
      text:
        "Yuk tashish shartnomasi " +
        "bo'yicha tashuvchi " +
        "jo'natuvchi topshirgan " +
        "yukni belgilangan joyga " +
        "eltib borish va uni " +
        "olishga vakolatli " +
        "shaxsga (oluvchiga) " +
        "topshirish " +
        "majburiyatini oladi. " +
        "Jo'natuvchi esa " +
        "belgilangan haqni " +
        "to'laydi.\n\n" +
        "⚠️ MUHIM XUSUSIYAT: " +
        "shartnomada UCH " +
        "shaxs qatnashadi — " +
        "jo'natuvchi, " +
        "tashuvchi va " +
        "OLUVCHI.\n\n" +
        "Oluvchi shartnomani " +
        "imzolamagan bo'lsa " +
        "ham unga muayyan " +
        "huquq va " +
        "majburiyatlar " +
        "tegishli bo'ladi. " +
        "Bu yuk tashishni " +
        "boshqa " +
        "shartnomalardan " +
        "ajratib turadi.",
      example:
        "Toshkentdagi tashkilot " +
        "Samarqanddagi " +
        "xaridorga yuk " +
        "jo'natdi. Oluvchi " +
        "shartnomani " +
        "imzolamagan, lekin " +
        "yukni qabul qilish " +
        "huquqiga ega.",
      keyPoints: [
        "Tashuvchi yukni eltib borish majburiyatini oladi",
        "Shartnomada uch shaxs qatnashadi",
        "Oluvchi ham huquq va majburiyatga ega",
        "Jo'natuvchi tashish haqini to'laydi",
      ],
      warning:
        "Oluvchi " +
        "ma'lumotlarini " +
        "aniq yozing — " +
        "xato yuk " +
        "yetkazilmasligiga " +
        "olib keladi.",
      lawRefs: [{ code: "FK2", article: "711" }],
    },
    {
      heading: "Transport vositasini berish va yuk ortish",
      text:
        "Tashish jarayoni " +
        "hujjatdan emas, " +
        "TRANSPORT VOSITASI " +
        "berilishidan " +
        "boshlanadi.\n\n" +
        "Tashuvchi jo'natuvchiga " +
        "belgilangan muddatda " +
        "YUK ORTISHGA " +
        "YAROQLI transport " +
        "vositasini berishi " +
        "shart.\n\n" +
        "⚠️ \"Yaroqli\" " +
        "degani muhim: " +
        "transport vositasi " +
        "aynan shu yuk " +
        "turini tashishga " +
        "mos bo'lishi kerak " +
        "(harorat rejimi, " +
        "toza yuk xonasi, " +
        "kerakli " +
        "moslamalar).\n\n" +
        "Jo'natuvchi esa " +
        "yaroqsiz transport " +
        "vositasidan bosh " +
        "tortish huquqiga " +
        "ega — bu keyingi " +
        "nizolarning oldini " +
        "oladi.\n\n" +
        "Yuk ortish va " +
        "tushirish " +
        "tartibi " +
        "shartnomada " +
        "belgilanadi.",
      example:
        "Oziq-ovqat uchun " +
        "sovutgichli " +
        "transport kerak " +
        "edi, oddiy furgon " +
        "keldi. " +
        "Jo'natuvchi bosh " +
        "tortishi mumkin.",
      keyPoints: [
        "Tashuvchi yaroqli transport vositasini berishi shart",
        "Yaroqlilik yuk turiga bog'liq",
        "Jo'natuvchi yaroqsiz vositadan bosh tortadi",
        "Ortish tartibi shartnomada belgilanadi",
      ],
      warning:
        "Yaroqsiz " +
        "transportga yuk " +
        "ortsangiz " +
        "keyingi " +
        "buzilish " +
        "sizning " +
        "javobgarligingizga " +
        "aylanadi.",
      lawRefs: [{ code: "FK2", article: "716" }],
    },
    {
      heading: "Transport vositasi berilmagani uchun javobgarlik",
      text:
        "Shartnoma tuzildi, " +
        "lekin transport " +
        "kelmadi — yoki " +
        "aksincha, transport " +
        "keldi-yu yuk " +
        "tayyor emas.\n\n" +
        "Qonun ikkala " +
        "holatni ham " +
        "nazarda tutgan: " +
        "tashuvchining " +
        "transport " +
        "vositalarini " +
        "BERMAGANLIK, " +
        "jo'natuvchining " +
        "esa berilgan " +
        "transport " +
        "vositalaridan " +
        "FOYDALANMAGANLIK " +
        "uchun " +
        "javobgarligi.\n\n" +
        "⚠️ Ya'ni " +
        "javobgarlik " +
        "IKKI " +
        "TOMONLAMA. " +
        "Ko'pincha " +
        "jo'natuvchilar " +
        "buni " +
        "unutadi va " +
        "transport " +
        "bekor " +
        "turgani " +
        "uchun " +
        "to'lov " +
        "talab " +
        "qilinganda " +
        "hayron " +
        "bo'ladi.\n\n" +
        "Tomonlar " +
        "o'zlariga " +
        "bog'liq " +
        "bo'lmagan " +
        "holatlarda " +
        "javobgarlikdan " +
        "ozod " +
        "bo'lishi " +
        "mumkin.",
      example:
        "Transport " +
        "kelgan, lekin " +
        "ombor " +
        "yopiq " +
        "bo'lgani " +
        "uchun yuk " +
        "ortilmadi — " +
        "bekor " +
        "turish " +
        "uchun to'lov " +
        "talab " +
        "qilinishi " +
        "mumkin.",
      keyPoints: [
        "Javobgarlik ikki tomonlama",
        "Tashuvchi transport bermasa javob beradi",
        "Jo'natuvchi foydalanmasa ham javob beradi",
        "Bog'liq bo'lmagan holatlarda ozod bo'lish mumkin",
      ],
      warning:
        "Transport " +
        "kelish " +
        "vaqtini " +
        "aniq " +
        "kelishing " +
        "va " +
        "tayyorgarlikni " +
        "ta'minlang.",
      lawRefs: [{ code: "FK2", article: "719" }],
    },
    {
      heading: "Yuk yo'qolganligi va shikastlanganligi",
      text:
        "⚠️ Bu — yuk " +
        "tashishdagi ENG " +
        "MUHIM mavzu.\n\n" +
        "Yuk yoki bagaj " +
        "YO'QOLGANLIGI, " +
        "KAM CHIQQANLIGI " +
        "va ularga " +
        "SHIKAST " +
        "yetkazilganligi " +
        "uchun " +
        "tashuvchining " +
        "javobgarligi " +
        "alohida modda " +
        "bilan " +
        "belgilangan.\n\n" +
        "Umumiy qoida: " +
        "tashuvchi yukni " +
        "qabul " +
        "qilgandan " +
        "topshirgunga " +
        "qadar uning " +
        "butligi uchun " +
        "javob " +
        "beradi.\n\n" +
        "Tashuvchi " +
        "javobgarlikdan " +
        "ozod " +
        "bo'lishi " +
        "mumkin, agar " +
        "yo'qotish " +
        "yoki " +
        "shikast " +
        "unga " +
        "bog'liq " +
        "bo'lmagan " +
        "holatlar " +
        "tufayli " +
        "yuz bergan " +
        "bo'lsa — " +
        "va buni " +
        "ISBOTLASH " +
        "aynan " +
        "TASHUVCHI " +
        "zimmasida.",
      example:
        "Yuk yo'lda " +
        "shikastlandi. " +
        "Tashuvchi " +
        "\"biz " +
        "aybdor " +
        "emasmiz\" " +
        "desa, buni " +
        "o'zi " +
        "isbotlashi " +
        "kerak.",
      keyPoints: [
        "Tashuvchi yukning butligi uchun javob beradi",
        "Javobgarlik qabul qilishdan topshirishgacha",
        "Ozod bo'lish uchun asos isbotlanishi kerak",
        "Isbot yuki tashuvchida",
      ],
      warning:
        "Yukni qabul " +
        "qilishda " +
        "darhol " +
        "tekshiring — " +
        "imzo " +
        "qo'ygandan " +
        "keyin " +
        "e'tiroz " +
        "qiyinlashadi.",
      lawRefs: [{ code: "FK2", article: "721" }],
    },
    {
      heading: "Tashishni tashkil etish shartnomalari",
      text:
        "Doimiy hamkorlar " +
        "har safar yangi " +
        "shartnoma " +
        "tuzmaydi — buning " +
        "uchun TASHISHNI " +
        "TASHKIL ETISH " +
        "shartnomasi " +
        "mavjud.\n\n" +
        "Bunday shartnoma " +
        "bo'yicha tomonlar " +
        "muayyan davr " +
        "davomida " +
        "muntazam " +
        "tashishlarni " +
        "amalga oshirish " +
        "majburiyatini " +
        "oladi: " +
        "tashuvchi " +
        "transport " +
        "berishni, " +
        "jo'natuvchi " +
        "esa yuk " +
        "topshirishni.\n\n" +
        "⚠️ AMALIY " +
        "FOYDASI: " +
        "shartlar bir " +
        "marta " +
        "kelishiladi, " +
        "keyin har " +
        "bir tashish " +
        "soddalashtirilgan " +
        "tartibda " +
        "rasmiylashtiriladi.\n\n" +
        "Bu " +
        "muntazam " +
        "yuk " +
        "yuboradigan " +
        "tadbirkorlar " +
        "uchun " +
        "vaqt va " +
        "xarajatni " +
        "tejaydi.",
      example:
        "Ishlab " +
        "chiqaruvchi " +
        "har hafta " +
        "mahsulot " +
        "jo'natadi. " +
        "Yillik " +
        "tashkil " +
        "etish " +
        "shartnomasi " +
        "tuzilgan.",
      keyPoints: [
        "Muntazam tashish uchun alohida shartnoma turi bor",
        "U muayyan davrga tuziladi",
        "Shartlar bir marta kelishiladi",
        "Har bir tashish soddalashtirilgan tartibda bo'ladi",
      ],
      warning:
        "Doimiy " +
        "hamkorlik " +
        "bo'lsa " +
        "og'zaki " +
        "kelishuvda " +
        "qolmang.",
      lawRefs: [
        { code: "FK2", article: "722" },
        { code: "FK2", article: "723" },
      ],
    },
    {
      heading: "Talab va da'vo qo'yish",
      text:
        "Yuk tashishga " +
        "nisbatan TALAB " +
        "va DA'VOLAR " +
        "alohida modda " +
        "bilan tartibga " +
        "solingan.\n\n" +
        "⚠️ ASOSIY " +
        "PROTSESSUAL " +
        "QOIDA: yuk " +
        "tashish " +
        "nizolarida " +
        "sudga " +
        "murojaat " +
        "qilishdan " +
        "OLDIN " +
        "tashuvchiga " +
        "TALAB " +
        "qo'yish " +
        "SHART.\n\n" +
        "Bu " +
        "majburiy " +
        "tartib. " +
        "Talab " +
        "qo'yilmasdan " +
        "berilgan " +
        "da'vo sud " +
        "tomonidan " +
        "qaytariladi " +
        "va vaqt " +
        "yo'qoladi.\n\n" +
        "Talab " +
        "qo'yish " +
        "va da'vo " +
        "muddatlari " +
        "ham " +
        "belgilangan — " +
        "ular " +
        "odatdagi " +
        "fuqarolik " +
        "da'vosi " +
        "muddatlaridan " +
        "QISQAROQ " +
        "bo'ladi.",
      example:
        "Tashkilot " +
        "to'g'ridan " +
        "sudga " +
        "murojaat " +
        "qildi va " +
        "da'vo " +
        "talab " +
        "tartibi " +
        "bajarilmagani " +
        "uchun " +
        "qaytarildi.",
      keyPoints: [
        "Yuk tashishda talab qo'yish majburiy",
        "U sudga chiqishdan oldin amalga oshiriladi",
        "Bajarilmasa da'vo qaytariladi",
        "Muddatlar odatdagidan qisqaroq",
      ],
      warning:
        "Talabni " +
        "yozma " +
        "yuboring " +
        "va " +
        "yuborilganini " +
        "tasdiqlovchi " +
        "hujjat " +
        "oling.",
      lawRefs: [{ code: "FK2", article: "724" }],
    },
    {
      heading: "Transport ekspeditsiyasi shartnomasi",
      text:
        "Yuk tashish bilan " +
        "TRANSPORT " +
        "EKSPEDITSIYASI — " +
        "ikki xil " +
        "shartnoma va " +
        "ularni " +
        "adashtirish " +
        "keng " +
        "tarqalgan " +
        "xato.\n\n" +
        "Ekspeditsiya " +
        "shartnomasi " +
        "bo'yicha " +
        "ekspeditor " +
        "yukni " +
        "O'ZI " +
        "tashimasligi " +
        "mumkin — u " +
        "tashish " +
        "bilan " +
        "bog'liq " +
        "XIZMATLARNI " +
        "ko'rsatadi " +
        "yoki " +
        "tashkil " +
        "qiladi.\n\n" +
        "Odatiy " +
        "xizmatlar: " +
        "tashuvchini " +
        "tanlash va " +
        "shartnoma " +
        "tuzish; " +
        "hujjatlarni " +
        "rasmiylashtirish; " +
        "yukni " +
        "jo'natish " +
        "va qabul " +
        "qilish; " +
        "bojxona " +
        "protseduralari; " +
        "saqlash.\n\n" +
        "⚠️ NIMA " +
        "UCHUN " +
        "MUHIM: " +
        "javobgarlik " +
        "hajmi " +
        "farq " +
        "qiladi. " +
        "Kimga " +
        "da'vo " +
        "qo'yishni " +
        "bilish " +
        "uchun " +
        "shartnoma " +
        "turini " +
        "aniqlash " +
        "kerak.",
      example:
        "Buyurtmachi " +
        "ekspeditor " +
        "bilan " +
        "shartnoma " +
        "tuzgan " +
        "edi, " +
        "lekin " +
        "da'voni " +
        "tashuvchiga " +
        "qo'ydi — " +
        "javobgar " +
        "noto'g'ri " +
        "aniqlandi.",
      keyPoints: [
        "Ekspeditsiya va tashish — turli shartnomalar",
        "Ekspeditor xizmat ko'rsatadi yoki tashkil qiladi",
        "U yukni o'zi tashimasligi mumkin",
        "Javobgarlik hajmi farq qiladi",
      ],
      warning:
        "Shartnoma " +
        "nomiga " +
        "emas, " +
        "MAZMUNIGA " +
        "qarang.",
      lawRefs: [
        { code: "FK2", article: "726" },
        { code: "FK2", article: "727" },
      ],
    },
    {
      heading: "Ekspeditorning javobgarligi va hujjatlar",
      text:
        "Ekspeditorning " +
        "javobgarligi " +
        "hamda unga " +
        "beriladigan " +
        "hujjatlar " +
        "alohida " +
        "moddalar " +
        "bilan " +
        "tartibga " +
        "solingan.\n\n" +
        "Umumiy qoida: " +
        "ekspeditor " +
        "majburiyatini " +
        "bajarmagani " +
        "yoki lozim " +
        "darajada " +
        "bajarmagani " +
        "uchun javob " +
        "beradi.\n\n" +
        "⚠️ MUHIM " +
        "TAFSILOT: " +
        "buyurtmachi " +
        "ekspeditorga " +
        "yuk haqida " +
        "TO'LIQ va " +
        "ANIQ " +
        "ma'lumot " +
        "berishi " +
        "shart.\n\n" +
        "Ma'lumot " +
        "noto'g'ri " +
        "yoki " +
        "to'liqsiz " +
        "bo'lsa, " +
        "kelib " +
        "chiqadigan " +
        "oqibatlar " +
        "buyurtmachi " +
        "zimmasiga " +
        "tushadi.\n\n" +
        "Ekspeditor " +
        "majburiyatni " +
        "uchinchi " +
        "shaxsga " +
        "topshirishi " +
        "mumkin, " +
        "lekin " +
        "javobgarlikdan " +
        "ozod " +
        "bo'lmaydi.",
      example:
        "Buyurtmachi " +
        "yukning " +
        "xavfli " +
        "ekanini " +
        "aytmadi. " +
        "Yuz " +
        "bergan " +
        "zarar " +
        "uchun u " +
        "javob " +
        "beradi.",
      keyPoints: [
        "Ekspeditor majburiyatini buzganlik uchun javob beradi",
        "Buyurtmachi to'liq ma'lumot berishi shart",
        "Noto'g'ri ma'lumot oqibati buyurtmachida",
        "Uchinchi shaxsni jalb qilish javobgarlikni bekor qilmaydi",
      ],
      warning:
        "Yukning " +
        "xususiyatlarini " +
        "(xavfli, " +
        "mo'rt, " +
        "harorat) " +
        "yozma " +
        "bildiring.",
      lawRefs: [
        { code: "FK2", article: "728" },
        { code: "FK2", article: "729" },
        { code: "FK2", article: "730" },
      ],
    },
    {
      heading: "Ekspeditsiya shartnomasidan bosh tortish",
      text:
        "Ekspeditsiya " +
        "shartnomasidan " +
        "BOSH TORTISH " +
        "alohida modda " +
        "bilan " +
        "tartibga " +
        "solingan.\n\n" +
        "Umumiy " +
        "qoida: " +
        "har " +
        "qaysi " +
        "tomon " +
        "shartnomadan " +
        "bosh " +
        "tortishi " +
        "mumkin, " +
        "lekin " +
        "buning " +
        "haqida " +
        "oldindan " +
        "OGOHLANTIRISHI " +
        "va " +
        "yetkazilgan " +
        "zararni " +
        "qoplashi " +
        "kerak.\n\n" +
        "⚠️ Bu " +
        "boshqa " +
        "shartnomalardan " +
        "farq " +
        "qiladi: " +
        "bu " +
        "yerda " +
        "bir " +
        "tomonlama " +
        "bosh " +
        "tortish " +
        "MUMKIN, " +
        "lekin u " +
        "tekin " +
        "emas.\n\n" +
        "Amaliy " +
        "xulosa: " +
        "bosh " +
        "tortishni " +
        "yozma " +
        "rasmiylashtiring " +
        "va " +
        "ogohlantirish " +
        "muddatini " +
        "bajaring — " +
        "aks " +
        "holda " +
        "zarar " +
        "hajmi " +
        "oshadi.",
      example:
        "Buyurtmachi " +
        "oxirgi " +
        "kunda " +
        "bosh " +
        "tortdi. " +
        "Ekspeditor " +
        "allaqachon " +
        "transport " +
        "buyurtma " +
        "qilgan " +
        "edi.",
      keyPoints: [
        "Ekspeditsiya shartnomasidan bosh tortish mumkin",
        "Oldindan ogohlantirish shart",
        "Zarar qoplanishi kerak",
        "Bosh tortish yozma rasmiylashtiriladi",
      ],
      warning:
        "Oxirgi " +
        "daqiqadagi " +
        "bosh " +
        "tortish " +
        "eng " +
        "qimmatga " +
        "tushadi.",
      lawRefs: [{ code: "FK2", article: "731" }],
    },
    {
      heading: "Da'vo arizasi qanday yoziladi",
      text:
        "Talab " +
        "qo'yildi, " +
        "lekin " +
        "natija " +
        "bo'lmadi — " +
        "endi sud.\n\n" +
        "Da'vo " +
        "arizasining " +
        "SHAKLI va " +
        "MAZMUNI " +
        "protsessual " +
        "qonunda " +
        "belgilangan " +
        "va bu " +
        "talablar " +
        "QAT'IY.\n\n" +
        "Odatda " +
        "ko'rsatiladi: " +
        "sud nomi; " +
        "tomonlar " +
        "ma'lumotlari; " +
        "da'vo " +
        "summasi; " +
        "holatlar " +
        "bayoni; " +
        "dalillar; " +
        "aniq " +
        "talab; " +
        "ilova " +
        "qilinadigan " +
        "hujjatlar " +
        "ro'yxati.\n\n" +
        "⚠️ ENG " +
        "KO'P " +
        "UCHRAYDIGAN " +
        "XATO: " +
        "talabning " +
        "noaniq " +
        "yozilishi. " +
        "Sud faqat " +
        "SO'RALGAN " +
        "narsani " +
        "hal " +
        "qiladi — " +
        "so'ralmagan " +
        "summa " +
        "undirilmaydi.",
      example:
        "Da'voda " +
        "faqat " +
        "yuk " +
        "qiymati " +
        "so'ralgan, " +
        "neustoyka " +
        "yozilmagan " +
        "edi — sud " +
        "uni " +
        "undirmadi.",
      keyPoints: [
        "Da'vo arizasi talablari qonunda belgilangan",
        "Holatlar, dalillar va aniq talab yoziladi",
        "Ilova hujjatlar ro'yxati ko'rsatiladi",
        "Sud faqat so'ralgan narsani hal qiladi",
      ],
      warning:
        "Barcha " +
        "talablarni " +
        "(asosiy " +
        "summa, " +
        "neustoyka, " +
        "xarajatlar) " +
        "arizada " +
        "yozing.",
      lawRefs: [{ code: "IPK", article: "149" }],
    },
  ],
};

module.exports = { LESSON };
