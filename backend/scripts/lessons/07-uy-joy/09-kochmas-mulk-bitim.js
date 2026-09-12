"use strict";
/**
 * UY-JOY MODULI — 9-DARS: KO'CHMAS MULK BITIMLARI.
 * FK2 479–496 + UJK 26, 105–115.
 */

const LESSON = {
  key: "kochmas-mulk-bitim",
  category: "housing",
  level: "advanced",
  order: 7090,
  title: "Ko'chmas mulk bitimlari: xavfsiz xarid",
  desc:
    "Ko'chmas mulkni sotish shartnomasi, shakl va ro'yxatdan " +
    "o'tkazish, yer masalasi, baho va topshirish, uy-joy sotishning " +
    "xususiyatlari, korxonani sotish hamda turar joyni almashtirish.",
  objectives: [
    "Ko'chmas mulk sotish shartnomasining shaklini bilasiz",
    "Muhim shartlarni va ularning yo'qligi oqibatini bilasiz",
    "Yerga bo'lgan huquq qanday o'tishini bilasiz",
    "Uy-joy sotishning maxsus shartini bilasiz",
    "Topshirish dalolatnomasining ahamiyatini bilasiz",
    "Turar joyni almashtirish tartibini bilasiz",
  ],
  practicalSteps: [
    "Sotuvchining huquqini va mulkdagi yuklamalarni ro'yxatdan tekshiring",
    "Kvartirada kim ro'yxatda turganini va kim yashayotganini aniqlang",
    "Shartnomada haqiqiy narxni yozing — past summa sizga qarshi ishlaydi",
    "Topshirishni dalolatnoma bilan rasmiylashtiring",
    "Ro'yxatdan o'tkazishni to'lov bilan bir vaqtda amalga oshiring",
  ],
  sections: [
    {
      heading: "Ko'chmas mulkni sotish shartnomasi va shakli",
      text:
        "KO'CHMAS MULKNI SOTISH shartnomasi bo'yicha " +
        "sotuvchi yer uchastkasini, binoni, inshootni, " +
        "kvartirani yoki boshqa ko'chmas mulkni sotib " +
        "oluvchining mulkiga berish majburiyatini " +
        "oladi.\n\n" +
        "⚠️ SHAKL TALABI QAT'IY: shartnoma yozma " +
        "shaklda, tomonlar imzolagan YAGONA HUJJAT " +
        "tuzish yo'li bilan amalga oshiriladi.\n\n" +
        "Ya'ni xat almashish yoki alohida hujjatlar " +
        "yetarli emas — bitta hujjat bo'lishi " +
        "kerak.\n\n" +
        "Shaklga rioya qilmaslik shartnomani HAQIQIY " +
        "EMAS qiladi.\n\n" +
        "RO'YXATDAN O'TKAZISH: ko'chmas mulkka " +
        "bo'lgan MULK HUQUQINING boshqa shaxsga " +
        "o'tganligi davlat ro'yxatidan " +
        "o'tkaziladi.\n\n" +
        "⚠️ ENG MUHIM AMALIY QOIDA: mulk huquqi " +
        "aynan RO'YXATDAN O'TKAZILGAN paytdan " +
        "o'tadi.\n\n" +
        "Shartnoma imzolangani, pul to'langani va " +
        "kalit olingani bu paytni " +
        "yaqinlashtirmaydi.\n\n" +
        "Ro'yxatgacha bo'lgan oraliqda mulk " +
        "rasman sotuvchida qoladi va unga " +
        "sotuvchining qarzi uchun undiruv " +
        "qaratilishi yoki u ikkinchi marta " +
        "sotilishi mumkin.\n\n" +
        "AMALIY QOIDA: to'lov va ro'yxatdan " +
        "o'tkazish orasidagi vaqtni imkon " +
        "qadar QISQARTIRING. Eng xavfsizi — " +
        "ularni bir vaqtda amalga oshirish.",
      example:
        "To'lov qilindi, ro'yxatdan o'tkazish " +
        "kechiktirildi — shu oraliqda mulkka " +
        "hibs qo'yildi.",
      keyPoints: [
        "Shartnoma yagona hujjat shaklida tuziladi",
        "Shaklga rioya qilmaslik uni haqiqiy emas qiladi",
        "Mulk huquqi ro'yxatdan o'tkazilganda o'tadi",
        "To'lov va ro'yxat orasini qisqartiring",
      ],
      warning:
        "Ro'yxatdan o'tkazilmagan xarid — himoyasiz " +
        "xarid.",
      lawRefs: [
        { code: "FK2", article: "479" },
        { code: "FK2", article: "480" },
        { code: "FK2", article: "481" },
      ],
    },
    {
      heading: "Muhim shartlar: predmet va baho",
      text:
        "Ko'chmas mulk sotish shartnomasida IKKI shart " +
        "MUHIM hisoblanadi va ularsiz shartnoma " +
        "tuzilmagan deb qaraladi.\n\n" +
        "BIRINCHISI — PREDMET: shartnomada sotiladigan " +
        "ko'chmas mulkni ANIQ belgilash imkonini " +
        "beruvchi ma'lumotlar bo'lishi kerak — " +
        "joylashuvi, maydoni, kadastr raqami, " +
        "boshqa xususiyatlari.\n\n" +
        "IKKINCHISI — BAHO: ko'chmas mulk bahosi " +
        "shartnomada ko'rsatilishi SHART.\n\n" +
        "⚠️ ODDIY OLDI-SOTDIDAN FARQI SHU: u yerda " +
        "baho ko'rsatilmasa \"odatdagi baho\" " +
        "qoidasi qo'llanadi; ko'chmas mulkda esa " +
        "bunday qoida ISHLAMAYDI — shartnoma " +
        "tuzilmagan hisoblanadi.\n\n" +
        "⚠️ ENG XAVFLI AMALIYOT — PAST NARX YOZISH: " +
        "ba'zan soliqni kamaytirish maqsadida " +
        "shartnomada haqiqiy narxdan past summa " +
        "ko'rsatiladi.\n\n" +
        "BU XARIDOR UCHUN JIDDIY XAVF: agar bitim " +
        "keyinchalik bekor qilinsa yoki haqiqiy " +
        "emas deb topilsa, sizga faqat " +
        "SHARTNOMADA YOZILGAN summa " +
        "qaytariladi.\n\n" +
        "Qolgan pulni qaytarish uchun uni " +
        "berganingizni isbotlashingiz kerak " +
        "bo'ladi — bu deyarli imkonsiz.\n\n" +
        "AMALIY QOIDA: shartnomada HAQIQIY " +
        "narxni yozing. Soliq bo'yicha tejam " +
        "yo'qotish xavfiga arzimaydi.\n\n" +
        "Bino yoki inshoot bahosi odatda unga " +
        "tegishli yer uchastkasi qiymatini ham " +
        "o'z ichiga oladi — shartnomada " +
        "boshqacha nazarda tutilmagan bo'lsa.",
      example:
        "Shartnomada past narx yozildi, bitim " +
        "bekor qilindi — xaridorga faqat yozilgan " +
        "summa qaytarildi.",
      keyPoints: [
        "Predmet va baho — muhim shartlar",
        "Ularsiz shartnoma tuzilmagan hisoblanadi",
        "Ko'chmas mulkda \"odatdagi baho\" qoidasi ishlamaydi",
        "Past narx yozish xaridor uchun xavfli",
      ],
      warning:
        "Shartnomadagi soxta summa — sizga " +
        "qarshi tayyor dalil.",
      lawRefs: [
        { code: "FK2", article: "484" },
        { code: "FK2", article: "485" },
      ],
    },
    {
      heading: "Yerga bo'lgan huquq masalasi",
      text:
        "Bu — ko'chmas mulk bitimlaridagi eng ko'p " +
        "e'tibordan chetda qoladigan masala.\n\n" +
        "BINO SOTILGANDA: bino, inshoot yoki boshqa " +
        "ko'chmas mulk sotilganda sotib oluvchiga " +
        "ular joylashgan YER UCHASTKASIGA bo'lgan " +
        "huquq ham o'tadi.\n\n" +
        "⚠️ SABABI MANTIQIY: bino yerdan ajratilgan " +
        "holda mavjud bo'la olmaydi. Shuning uchun " +
        "qonun ularning taqdirini bog'laydi.\n\n" +
        "Lekin O'TADIGAN HUQUQ HAJMI sotuvchida " +
        "qanday huquq borligiga bog'liq: mulk " +
        "huquqi bo'lsa mulk huquqi, ijara bo'lsa " +
        "ijara huquqi o'tadi.\n\n" +
        "AMALIY XULOSA: uy sotib olayotganda " +
        "SOTUVCHIDA YERGA QANDAY HUQUQ borligini " +
        "aniqlang.\n\n" +
        "Agar u faqat ijarachi bo'lsa, siz ham " +
        "faqat ijarachi bo'lasiz — va ijara " +
        "muddati tugaganda muammo yuzaga " +
        "kelishi mumkin.\n\n" +
        "YER SOTILGANDA: yer uchastkasi sotilganda " +
        "undagi ko'chmas mulkka bo'lgan huquq " +
        "masalasi ham qonunda tartibga " +
        "solingan.\n\n" +
        "⚠️ ENG XAVFLI HOLAT: bino bir shaxsga, " +
        "yer boshqa shaxsga tegishli bo'lishi. " +
        "Bunda doimiy nizo ehtimoli yuqori.\n\n" +
        "Shuning uchun xariddan oldin ikkala " +
        "obyekt (bino va yer) bo'yicha ham " +
        "hujjatlarni tekshiring va ular bir " +
        "shaxsga tegishli ekaniga ishonch " +
        "hosil qiling.",
      example:
        "Uy sotib olindi, lekin yer boshqa " +
        "shaxsning ijarasida ekani keyin ma'lum " +
        "bo'ldi.",
      keyPoints: [
        "Bino sotilganda yerga huquq ham o'tadi",
        "O'tadigan huquq hajmi sotuvchidagiga teng",
        "Sotuvchida yerga qanday huquq borligini aniqlang",
        "Bino va yer bir shaxsga tegishli ekanini tekshiring",
      ],
      warning:
        "Yerga huquqni tekshirmaslik — kelajakdagi " +
        "nizoning kafolati.",
      lawRefs: [
        { code: "FK2", article: "482" },
        { code: "FK2", article: "483" },
      ],
    },
    {
      heading: "Uy-joy sotishning maxsus sharti",
      text:
        "Uy-joy binolarini sotishning alohida " +
        "xususiyati bor va u xaridor uchun hal " +
        "qiluvchi ahamiyatga ega.\n\n" +
        "⚠️ MAXSUS MUHIM SHART: turar joy sotish " +
        "shartnomasida bu turar joydan " +
        "FOYDALANISH HUQUQINI SAQLAB QOLADIGAN " +
        "shaxslar ro'yxati va ularning " +
        "huquqlari ko'rsatilishi SHART.\n\n" +
        "Bunday shaxslar bo'lsa-yu, ular " +
        "shartnomada ko'rsatilmagan bo'lsa — " +
        "shartnoma TUZILMAGAN hisoblanadi.\n\n" +
        "KIMLAR BUNDAY SHAXS BO'LISHI MUMKIN: " +
        "umrbod foydalanish huquqiga ega " +
        "shaxslar (vasiyat majburiyati yoki " +
        "umrbod ta'minlash shartnomasi " +
        "bo'yicha); ijara shartnomasi bo'yicha " +
        "yashovchilar; ayrim hollarda oila " +
        "a'zolari.\n\n" +
        "AMALIY XULOSA: bu qoida aynan xaridorni " +
        "himoya qilish uchun kiritilgan. " +
        "Sotuvchi yashovchilarni yashirsa, " +
        "shartnoma tuzilmagan bo'lib qoladi.\n\n" +
        "LEKIN BUNGA TAYANIB QOLMANG: shartnomani " +
        "bekor qilish uzoq sud jarayoni " +
        "bo'ladi.\n\n" +
        "⚠️ AMALIY TEKSHIRUV RO'YXATI: (1) " +
        "ro'yxatdan ma'lumotnoma oling; (2) " +
        "kvartirada kim ro'yxatda turganini " +
        "aniqlang; (3) kvartirani SHAXSAN " +
        "ko'ring va kim yashayotganini " +
        "bilib oling; (4) sotuvchining " +
        "oilaviy holatini aniqlang — er-xotin " +
        "mulki bo'lsa ikkinchi tomon roziligi " +
        "kerak; (5) voyaga yetmagan mulkdor " +
        "bo'lsa vasiylik organi roziligini " +
        "so'rang.\n\n" +
        "Bu beshta qadam xaridlarning " +
        "aksariyat muammolarini oldini oladi.",
      example:
        "Kvartirada umrbod yashash huquqiga ega " +
        "shaxs bor edi, u shartnomada " +
        "ko'rsatilmadi.",
      keyPoints: [
        "Foydalanish huquqini saqlaydigan shaxslar ko'rsatilishi shart",
        "Ko'rsatilmasa shartnoma tuzilmagan hisoblanadi",
        "Bu qoida xaridorni himoya qiladi",
        "Beshta tekshiruv qadamini bajaring",
      ],
      warning:
        "Kvartirani shaxsan ko'rmasdan sotib " +
        "olish — eng xavfli qadam.",
      lawRefs: [{ code: "FK2", article: "488" }],
    },
    {
      heading: "Topshirish va sifat masalasi",
      text:
        "KO'CHMAS MULKNI TOPSHIRISH tomonlar " +
        "imzolaydigan TOPSHIRISH DALOLATNOMASI " +
        "yoki boshqa hujjat bo'yicha amalga " +
        "oshiriladi.\n\n" +
        "⚠️ DALOLATNOMA SHAKLIYATCHILIK EMAS: " +
        "sotuvchining topshirish majburiyati " +
        "aynan shu hujjat imzolanganda " +
        "bajarilgan hisoblanadi.\n\n" +
        "Undan oldin mulkning tasodifan nobud " +
        "bo'lish xavfi ham odatda sotuvchida " +
        "qoladi.\n\n" +
        "DALOLATNOMADA nima yozilishi kerak: " +
        "topshirish sanasi; mulkning holati; " +
        "hisoblash asboblari ko'rsatkichlari; " +
        "topshirilgan kalitlar va hujjatlar; " +
        "aniqlangan kamchiliklar.\n\n" +
        "⚠️ KAMCHILIKLARNI DALOLATNOMAGA YOZISH " +
        "JUDA MUHIM: agar siz kamchilikni " +
        "bilgan holda dalolatnomani \"da'volarim " +
        "yo'q\" deb imzolasangiz, keyinchalik " +
        "talab qo'yish qiyinlashadi.\n\n" +
        "SIFAT: tegishli darajada sifatli " +
        "bo'lmagan ko'chmas mulk topshirilganda " +
        "sotib oluvchi qonunda nazarda tutilgan " +
        "huquqlardan foydalanadi.\n\n" +
        "AMALIY MASLAHAT: kvartirani qabul " +
        "qilishdan oldin uni sinchiklab " +
        "ko'ring — kommunikatsiyalar ishlashini, " +
        "hisoblash asboblari holatini, " +
        "kommunal to'lovlar bo'yicha qarz " +
        "yo'qligini tekshiring.\n\n" +
        "QARZ MASALASI ALOHIDA MUHIM: oldingi " +
        "mulkdorning kommunal qarzi bo'lsa, " +
        "bu keyinchalik sizga muammo " +
        "keltiradi. Shuning uchun " +
        "ta'minotchilardan qarz yo'qligi " +
        "haqida ma'lumotnoma so'rang.",
      example:
        "Dalolatnoma \"da'volarim yo'q\" deb " +
        "imzolandi — keyin aniqlangan nuqson " +
        "bo'yicha talab qiyinlashdi.",
      keyPoints: [
        "Topshirish dalolatnoma bilan rasmiylashtiriladi",
        "Majburiyat shu hujjat bilan bajarilgan hisoblanadi",
        "Kamchiliklarni dalolatnomaga yozing",
        "Kommunal qarz yo'qligini tekshiring",
      ],
      warning:
        "Tekshirmasdan dalolatnoma imzolash — " +
        "talablardan voz kechish.",
      lawRefs: [
        { code: "FK2", article: "486" },
        { code: "FK2", article: "487" },
      ],
    },
    {
      heading: "Korxonani sotish",
      text:
        "KORXONANI SOTISH shartnomasi bo'yicha " +
        "sotuvchi korxonani YAXLIT MULKIY " +
        "KOMPLEKS sifatida sotib oluvchining " +
        "mulkiga berish majburiyatini oladi.\n\n" +
        "TARKIBI: yer uchastkalari, binolar, " +
        "inshootlar, uskunalar, xomashyo, " +
        "mahsulot, talab qilish huquqlari, " +
        "qarzlar va boshqa mulkiy huquqlar.\n\n" +
        "SHAKL: shartnoma yozma shaklda, yagona " +
        "hujjat tuzish yo'li bilan amalga " +
        "oshiriladi va davlat ro'yxatidan " +
        "o'tkaziladi.\n\n" +
        "TARKIBNI ANIQLASH va QIYMATNI " +
        "BAHOLASH: bu bosqich majburiy va u " +
        "inventarizatsiya hamda audit orqali " +
        "amalga oshiriladi.\n\n" +
        "⚠️ KREDITORLAR HUQUQLARI ALOHIDA " +
        "HIMOYALANADI: korxona sotilayotgani " +
        "haqida kreditorlar XABARDOR qilinishi " +
        "kerak.\n\n" +
        "Ular majburiyatni muddatidan ilgari " +
        "bajarishni va zararni qoplashni yoki " +
        "shartnomani haqiqiy emas deb topishni " +
        "talab qilishga haqli.\n\n" +
        "AMALIY XULOSA XARIDORGA: korxona " +
        "sotib olayotganda uning QARZLARI ham " +
        "sizga o'tishi mumkin.\n\n" +
        "Shuning uchun bu bitimda eng muhim " +
        "bosqich — mustaqil audit va " +
        "yashirin majburiyatlarni aniqlash.\n\n" +
        "TOPSHIRISH va MULK HUQUQINING " +
        "O'TISHI alohida tartibda amalga " +
        "oshiriladi.\n\n" +
        "KAMCHILIKLAR BILAN TOPSHIRISH " +
        "oqibatlari hamda haqiqiy emaslik va " +
        "shartnomani o'zgartirish qoidalarini " +
        "qo'llash ham tartibga solingan.",
      example:
        "Sotib olingan korxonaning yashirin " +
        "qarzlari keyin ma'lum bo'ldi — audit " +
        "o'tkazilmagan edi.",
      keyPoints: [
        "Korxona yaxlit mulkiy kompleks sifatida sotiladi",
        "Tarkib aniqlanadi va qiymat baholanadi",
        "Kreditorlar xabardor qilinishi shart",
        "Qarzlar ham xaridorga o'tishi mumkin",
      ],
      warning:
        "Auditsiz korxona sotib olish — yashirin " +
        "qarzlarni sotib olish demakdir.",
      lawRefs: [
        { code: "FK2", article: "489" },
        { code: "FK2", article: "490" },
        { code: "FK2", article: "491" },
        { code: "FK2", article: "492" },
        { code: "FK2", article: "493" },
        { code: "FK2", article: "494" },
        { code: "FK2", article: "495" },
        { code: "FK2", article: "496" },
      ],
    },
    {
      heading: "Turar joyni almashtirish",
      text:
        "TURAR JOYNI ALMASHTIRISH — uy-joy " +
        "munosabatlaridagi alohida institut.\n\n" +
        "PREDMET: almashtirish predmeti bo'lishi " +
        "mumkin bo'lgan turar joylar qonunda " +
        "belgilangan.\n\n" +
        "TARTIB: almashtirish yozma ariza asosida " +
        "rasmiylashtiriladi. Buni amalga " +
        "oshiruvchi organlar qonunda " +
        "belgilangan.\n\n" +
        "⚠️ ROZILIK MASALASI ENG MUHIMI: " +
        "almashtirish uchun turar joyda " +
        "yashovchi voyaga yetgan oila " +
        "a'zolarining ROZILIGI kerak.\n\n" +
        "Rozilik bo'lmagan taqdirda masala " +
        "qonunda belgilangan tartibda hal " +
        "qilinadi.\n\n" +
        "HOMIYLIK YOKI VASIYLIKKA OLINGAN " +
        "shaxsning turar joyini almashtirish " +
        "alohida tartibda — vasiylik va " +
        "homiylik organi roziligi bilan " +
        "amalga oshiriladi.\n\n" +
        "YO'L QO'YILMAYDIGAN HOLATLAR: " +
        "almashtirishga yo'l qo'yilmaydigan " +
        "shart-sharoitlar qonunda " +
        "belgilangan — masalan almashtirish " +
        "natijasida yashash sharoiti " +
        "belgilangan normadan yomonlashsa.\n\n" +
        "IJRO ETISH: almashtirish to'g'risidagi " +
        "shartnoma belgilangan tartibda ijro " +
        "etiladi.\n\n" +
        "HAQIQIY EMAS DEB TOPISH: almashtirish " +
        "qonunda ko'rsatilgan asoslarda " +
        "haqiqiy emas deb topilishi " +
        "mumkin — masalan aldash yoki " +
        "qonunbuzarlik aniqlansa.\n\n" +
        "AYIRBOSHLASH: turar joyni " +
        "ayirboshlash ham alohida tartibga " +
        "solingan va u fuqarolik huquqidagi " +
        "ayirboshlash qoidalariga " +
        "yaqin.\n\n" +
        "AMALIY MASLAHAT: almashtirishda " +
        "ikkala turar joyning ham " +
        "hujjatlarini bir xil sinchkovlik " +
        "bilan tekshiring — bu ikki xarid " +
        "bilan barobar.",
      example:
        "Almashtirishda ikkinchi kvartira " +
        "hujjatlari tekshirilmadi — yuklama " +
        "borligi keyin ma'lum bo'ldi.",
      keyPoints: [
        "Almashtirish yozma ariza asosida rasmiylashtiriladi",
        "Yashovchilarning roziligi talab qilinadi",
        "Yo'l qo'yilmaydigan holatlar qonunda belgilangan",
        "Almashtirish haqiqiy emas deb topilishi mumkin",
      ],
      warning:
        "Almashtirish — ikkita bitim, ikkala " +
        "mulkni ham tekshiring.",
      lawRefs: [
        { code: "UJK", article: "26" },
        { code: "UJK", article: "105" },
        { code: "UJK", article: "106" },
        { code: "UJK", article: "107" },
        { code: "UJK", article: "108" },
        { code: "UJK", article: "109" },
        { code: "UJK", article: "110" },
        { code: "UJK", article: "111" },
        { code: "UJK", article: "112" },
        { code: "UJK", article: "113" },
        { code: "UJK", article: "114" },
        { code: "UJK", article: "115" },
      ],
    },
  ],
};

module.exports = { LESSON };
