"use strict";
/**
 * UY-JOY MODULI — 6-DARS: YER UCHASTKASIGA HUQUQLAR.
 * YK 1–24, 31–36, 38.
 */

const LESSON = {
  key: "yer-uchastka",
  category: "housing",
  level: "mid",
  order: 7060,
  title: "Yer uchastkasiga bo'lgan huquqlar",
  desc:
    "Yer qonunchiligining prinsiplari, yer fondi toifalari, ruxsat " +
    "etilgan foydalanish turlari, yerga bo'lgan huquq turlari, " +
    "ijara, huquqni tasdiqlovchi hujjatlar va uning bekor qilinishi.",
  objectives: [
    "Yer qonunchiligining asosiy prinsiplarini bilasiz",
    "Yer fondi toifalarini va ularning ahamiyatini bilasiz",
    "Ruxsat etilgan foydalanish turlarini tushunasiz",
    "Yerga bo'lgan huquq turlarini ajrata olasiz",
    "Yer ijarasi qoidalarini bilasiz",
    "Huquqni tasdiqlovchi hujjatlarni bilasiz",
  ],
  practicalSteps: [
    "Yer uchastkasi haqidagi ma'lumotni davlat kadastridan tekshiring",
    "Uchastkaning toifasi va ruxsat etilgan foydalanish turini aniqlang",
    "Chegaralar joyning o'zida belgilanganini tekshiring",
    "Ijara shartnomasida muddat va uzaytirish tartibini yozing",
    "Huquqni tasdiqlovchi hujjatni ro'yxatdan o'tkazing",
  ],
  sections: [
    {
      heading: "Yer qonunchiligining prinsiplari",
      text:
        "YER TO'G'RISIDAGI QONUNCHILIK yerdan oqilona " +
        "foydalanish, uni muhofaza qilish va yer " +
        "egalarining huquqlarini himoya qilish " +
        "vazifalarini bajaradi.\n\n" +
        "ASOSIY PRINSIPLARI: yerdan maqsadli " +
        "foydalanish; yerni muhofaza qilishning " +
        "ustuvorligi; qishloq xo'jaligiga mo'ljallangan " +
        "yerlardan foydalanishning ustuvorligi; " +
        "yerdan foydalanganlik uchun haq to'lash; " +
        "yer huquqlarining kafolatlanishi.\n\n" +
        "⚠️ \"MAQSADLI FOYDALANISH\" PRINSIPI AMALDA ENG " +
        "MUHIMI: yer uchastkasidan faqat u ajratilgan " +
        "maqsadda foydalanish mumkin.\n\n" +
        "Ya'ni qishloq xo'jaligi uchun berilgan yerda " +
        "ruxsatsiz qurilish qilish yoki bog'dorchilik " +
        "uchastkasida sanoat faoliyati yuritish " +
        "qonunbuzarlik hisoblanadi.\n\n" +
        "Buning oqibati og'ir: yer uchastkasi olib " +
        "qo'yilishi mumkin.\n\n" +
        "BOSHQARUV: yer munosabatlarini tartibga " +
        "solishda hukumat, viloyat, tuman va shahar " +
        "davlat hokimiyati organlari ishtirok " +
        "etadi — har birining o'z vakolati bor.\n\n" +
        "AMALIY XULOSA: yer masalasida murojaat " +
        "qilishdan oldin qaysi organ vakolatli " +
        "ekanini aniqlang. Yer ajratish odatda " +
        "tuman yoki shahar hokimligi vakolatida " +
        "bo'ladi.",
      example:
        "Qishloq xo'jaligi yerida ruxsatsiz imorat " +
        "qurildi — bu maqsadli foydalanish " +
        "prinsipini buzish hisoblanadi.",
      keyPoints: [
        "Yerdan maqsadli foydalanish — asosiy prinsip",
        "Yerni muhofaza qilish ustuvor hisoblanadi",
        "Foydalanganlik uchun haq to'lanadi",
        "Har bir organning o'z vakolati bor",
      ],
      warning:
        "Maqsadli foydalanishni buzish yerni olib " +
        "qo'yishga olib kelishi mumkin.",
      lawRefs: [
        { code: "YK", article: "1" },
        { code: "YK", article: "2" },
        { code: "YK", article: "3" },
        { code: "YK", article: "6" },
        { code: "YK", article: "7" },
      ],
    },
    {
      heading: "Yer fondi toifalari va yer uchastkasi",
      text:
        "Yer fondi maqsadiga ko'ra TOIFALARGA bo'linadi: " +
        "qishloq xo'jaligiga mo'ljallangan yerlar; " +
        "aholi punktlari yerlari; sanoat, transport, " +
        "aloqa, mudofaa va boshqa maqsadlarga " +
        "mo'ljallangan yerlar; tabiatni muhofaza " +
        "qilish, sog'lomlashtirish, rekreatsiya " +
        "maqsadlariga mo'ljallangan va tarixiy-" +
        "madaniy ahamiyatga molik yerlar; o'rmon " +
        "fondi yerlari; suv fondi yerlari; zaxira " +
        "yerlar.\n\n" +
        "⚠️ TOIFA — ENG MUHIM XUSUSIYAT: u yerdan " +
        "qanday foydalanish mumkinligini belgilaydi " +
        "va uni o'zgartirish alohida tartibda " +
        "amalga oshiriladi.\n\n" +
        "Amalda bu shuni bildiradi: qishloq " +
        "xo'jaligi toifasidagi yerda uy qurish " +
        "uchun avval toifani o'zgartirish kerak — " +
        "va bu har doim ham mumkin bo'lmaydi.\n\n" +
        "YER UCHASTKASI — belgilangan chegaralarga " +
        "ega yer maydoni. U kadastrda hisobga " +
        "olinadi va o'z identifikatorига ega " +
        "bo'ladi.\n\n" +
        "RAYONLASHTIRISH, YER TUZISH, YER " +
        "MONITORINGI va DAVLAT YER KADASTRI — " +
        "yer to'g'risidagi ma'lumotlarni " +
        "shakllantirish va yuritish tizimlari.\n\n" +
        "AMALIY MASLAHAT: yer uchastkasini sotib " +
        "olish yoki ijaraga olishdan oldin " +
        "KADASTR ma'lumotini tekshiring — u " +
        "yerda maydon, chegaralar, toifa, " +
        "ruxsat etilgan foydalanish turi va " +
        "yuklamalar ko'rsatiladi.",
      example:
        "Qishloq xo'jaligi toifasidagi yer uy qurish " +
        "uchun sotib olindi — toifani o'zgartirish " +
        "imkonsiz bo'lib chiqdi.",
      keyPoints: [
        "Yer fondi maqsadiga ko'ra toifalarga bo'linadi",
        "Toifa foydalanish imkoniyatini belgilaydi",
        "Toifani o'zgartirish alohida tartibda bo'ladi",
        "Kadastr ma'lumotini oldindan tekshiring",
      ],
      warning:
        "Toifani tekshirmasdan yer olish — eng keng " +
        "tarqalgan va eng qimmat xato.",
      lawRefs: [
        { code: "YK", article: "8" },
        { code: "YK", article: "9" },
        { code: "YK", article: "10" },
        { code: "YK", article: "12" },
        { code: "YK", article: "14" },
        { code: "YK", article: "15" },
      ],
    },
    {
      heading: "Ruxsat etilgan foydalanish turlari",
      text:
        "Yer uchastkalaridan RUXSAT ETILGAN FOYDALANISH " +
        "TURLARI belgilanadi va ular uch guruhga " +
        "bo'linadi.\n\n" +
        "ASOSIY tur — uchastkadan foydalanishning " +
        "asosiy yo'nalishi. U qo'shimcha ruxsatsiz " +
        "amalga oshiriladi.\n\n" +
        "SHARTLI ruxsat etilgan tur — u uchun alohida " +
        "RUXSATNOMA olish kerak. Ruxsatnoma olish " +
        "tartibi qonunda belgilangan.\n\n" +
        "YORDAMCHI tur — asosiy yoki shartli turga " +
        "qo'shimcha va faqat ular bilan birga " +
        "amalga oshiriladi.\n\n" +
        "⚠️ AMALIY MA'NOSI JUDA KATTA: uchastkada " +
        "nima qilish mumkinligi aynan shu tur " +
        "bilan belgilanadi.\n\n" +
        "Masalan turar joy quruvchi tur " +
        "belgilangan bo'lsa, u yerda savdo " +
        "obyektini qurish uchun shartli ruxsat " +
        "kerak bo'lishi mumkin.\n\n" +
        "O'ZGARTIRISH: ruxsat etilgan foydalanish " +
        "turlarini o'zgartirish qonunda " +
        "belgilangan tartibda amalga oshiriladi.\n\n" +
        "MUHIM ISTISNO: belgilangan asosiy turdan " +
        "qat'i nazar yer uchastkalaridan " +
        "foydalanishning ayrim holatlari qonunda " +
        "alohida nazarda tutilgan.\n\n" +
        "AMALIY XULOSA: qurilish yoki biznes " +
        "rejalashtirayotgan bo'lsangiz, avval " +
        "uchastkaning ruxsat etilgan foydalanish " +
        "turini aniqlang va rejangiz unga mos " +
        "kelishini tekshiring.\n\n" +
        "Mos kelmasa — o'zgartirish tartibini va " +
        "uning real imkoniyatini oldindan " +
        "baholang.",
      example:
        "Uchastkada savdo obyekti qurilmoqchi " +
        "bo'ldi — ruxsat etilgan tur bunga imkon " +
        "bermadi.",
      keyPoints: [
        "Foydalanish turlari asosiy, shartli va yordamchi",
        "Shartli tur uchun ruxsatnoma kerak",
        "Tur uchastkada nima qilish mumkinligini belgilaydi",
        "O'zgartirish belgilangan tartibda amalga oshiriladi",
      ],
      warning:
        "Ruxsat etilgan turga zid faoliyat to'xtatish " +
        "talabiga olib keladi.",
      lawRefs: [
        { code: "YK", article: "10-1" },
        { code: "YK", article: "10-2" },
        { code: "YK", article: "10-3" },
        { code: "YK", article: "10-4" },
        { code: "YK", article: "10-5" },
        { code: "YK", article: "10-6" },
        { code: "YK", article: "10-7" },
      ],
    },
    {
      heading: "Yerga bo'lgan huquq turlari",
      text:
        "Yuridik va jismoniy shaxslar yer uchastkalariga " +
        "nisbatan turli huquqlarga ega bo'lishi " +
        "mumkin.\n\n" +
        "ASOSIY TURLAR: MULK huquqi; DOIMIY " +
        "foydalanish huquqi; MEROS QILIB " +
        "QOLDIRILADIGAN UMRBOD EGALIK QILISH " +
        "huquqi; IJARA huquqi; VAQTINCHA " +
        "foydalanish huquqi.\n\n" +
        "⚠️ FARQ AMALDA JUDA MUHIM: bu huquqlar " +
        "hajmi bo'yicha sezilarli farq qiladi.\n\n" +
        "MULK huquqi eng keng: uchastkani sotish, " +
        "hadya qilish, meros qoldirish va garovga " +
        "qo'yish mumkin.\n\n" +
        "DOIMIY FOYDALANISH huquqi muddatsiz, " +
        "lekin tasarruf etish imkoni cheklangan.\n\n" +
        "IJARA huquqi muddatli va shartnoma " +
        "shartlariga bog'liq.\n\n" +
        "MULK HUQUQINING VUJUDGA KELISHI qonunda " +
        "belgilangan asoslarda amalga " +
        "oshiriladi.\n\n" +
        "BIRGALIKDA EGALIK: yer uchastkalari " +
        "birgalikda egalik qilinishi yoki " +
        "foydalanilishi mumkin.\n\n" +
        "HUQUQNING O'TISHI: yer uchastkasiga " +
        "bo'lgan huquq boshqa shaxsga qonunda " +
        "belgilangan tartibda o'tadi.\n\n" +
        "⚠️ AMALIY QOIDA: uchastka sotib " +
        "olayotganda sotuvchida QAYSI HUQUQ " +
        "borligini aniq bilib oling. Ijara " +
        "huquqini \"mulk\" deb sotish holatlari " +
        "uchraydi — bunda siz mulkdor " +
        "bo'lmaysiz.",
      example:
        "Ijara huquqi mulk sifatida taklif " +
        "qilindi — xaridor faqat ijarachi " +
        "bo'lardi.",
      keyPoints: [
        "Yerga bir necha huquq turi mavjud",
        "Ular hajmi bo'yicha sezilarli farq qiladi",
        "Mulk huquqi eng keng imkoniyat beradi",
        "Sotuvchida qaysi huquq borligini aniqlang",
      ],
      warning:
        "Huquq turini aniqlamasdan pul to'lash " +
        "juda xavfli.",
      lawRefs: [
        { code: "YK", article: "16" },
        { code: "YK", article: "17" },
        { code: "YK", article: "18" },
        { code: "YK", article: "20" },
        { code: "YK", article: "21" },
        { code: "YK", article: "22" },
        { code: "YK", article: "23" },
      ],
    },
    {
      heading: "Yer uchastkasi ijarasi",
      text:
        "YER UCHASTKASI IJARASI shartnoma asosida amalga " +
        "oshiriladi va u eng keng tarqalgan " +
        "shakllardan biri.\n\n" +
        "DOIMIY FOYDALANISH huquqi asosida berilgan " +
        "yer uchastkalarining ijarasi ham alohida " +
        "tartibga solingan.\n\n" +
        "IKKILAMCHI IJARA: qishloq xo'jaligiga " +
        "mo'ljallangan yerlarni ikkilamchi ijaraga " +
        "berish qoidalari belgilangan.\n\n" +
        "⚠️ MUDDATNI UZAYTIRISH — AMALDA ENG MUHIM " +
        "MASALA: ijara shartnomasini yangi muddatga " +
        "uzaytirish tartibi qonunda belgilangan.\n\n" +
        "Uzaytirish uchun odatda MUDDATDA murojaat " +
        "qilish kerak. Muddatni o'tkazib yuborish " +
        "uchastkani yo'qotishga olib kelishi " +
        "mumkin.\n\n" +
        "Shuning uchun ijara tugash sanasini " +
        "eslatma sifatida belgilab qo'ying va " +
        "kamida bir necha oy oldin murojaat " +
        "qiling.\n\n" +
        "HUQUQLARNI O'TKAZISH: qishloq " +
        "xo'jaligiga mo'ljallangan yer " +
        "uchastkasiga nisbatan huquq va " +
        "majburiyatlarni boshqa shaxsga " +
        "o'tkazish (qayta ijaraga berish) " +
        "alohida tartibda amalga oshiriladi.\n\n" +
        "VAQTINCHA FOYDALANISH: yer uchastkasini " +
        "unga bo'lgan meros qilib qoldiriladigan " +
        "umrbod egalik qilish, ijara yoki mulk " +
        "huquqini SAQLAB QOLGAN holda vaqtincha " +
        "foydalanishga berish mumkin.\n\n" +
        "Bu foydali imkoniyat: huquqingizni " +
        "yo'qotmasdan uchastkani boshqa shaxsga " +
        "berishingiz mumkin.",
      example:
        "Ijara muddati tugadi, uzaytirish uchun " +
        "murojaat qilinmadi — uchastka boshqa " +
        "shaxsga berildi.",
      keyPoints: [
        "Yer ijarasi shartnoma asosida amalga oshiriladi",
        "Uzaytirish tartibi qonunda belgilangan",
        "Muddatni o'tkazish uchastkani yo'qotishga olib keladi",
        "Huquqni saqlab vaqtincha berish mumkin",
      ],
      warning:
        "Ijara tugash sanasini kuzatib bormaslik — " +
        "uchastkani yo'qotishning asosiy sababi.",
      lawRefs: [
        { code: "YK", article: "24" },
        { code: "YK", article: "24-1" },
        { code: "YK", article: "24-2" },
        { code: "YK", article: "24-3" },
        { code: "YK", article: "24-4" },
        { code: "YK", article: "24-5" },
      ],
    },
    {
      heading: "Huquqni rasmiylashtirish va bekor qilish",
      text:
        "VUJUDGA KELISHI: yer uchastkasiga bo'lgan huquq " +
        "vakolatli organ qarori, bitim yoki qonunda " +
        "nazarda tutilgan boshqa asoslarda vujudga " +
        "keladi.\n\n" +
        "PLAN VA CHEGARALAR: yer uchastkasining plani " +
        "tuziladi va chegaralari JOYNING O'ZIDA " +
        "belgilanadi.\n\n" +
        "⚠️ CHEGARANI JOYDA BELGILASH — ENG KO'P " +
        "E'TIBORDAN CHETDA QOLADIGAN QADAM. Uni " +
        "bajarmaslik qo'shnilar bilan nizoning " +
        "asosiy sababi bo'ladi.\n\n" +
        "Chegara belgilanganda dalolatnoma " +
        "tuziladi va unga qo'shnilar ham imzo " +
        "qo'yadi. Bu keyinchalik nizolarni " +
        "oldini oladi.\n\n" +
        "HUJJATLAR: huquqni tasdiqlovchi hujjatlar " +
        "qonunda belgilangan va ular davlat " +
        "ro'yxatidan o'tkaziladi.\n\n" +
        "RO'YXATGA OLISH huquqni rasman " +
        "tasdiqlaydi va uchinchi shaxslar uchun " +
        "kuchga ega qiladi.\n\n" +
        "BEKOR QILINISHI: yer uchastkalariga " +
        "bo'lgan huquqlar qonunda ko'rsatilgan " +
        "asoslarda bekor qilinadi — ixtiyoriy " +
        "voz kechish, muddat tugashi, maqsadli " +
        "foydalanishni buzish va boshqa " +
        "hollarda.\n\n" +
        "⚠️ QONUNCHILIK BUZILGANDA OLIB QO'YISH: " +
        "yer to'g'risidagi qonunchilik " +
        "buzilganda yer uchastkasi olib " +
        "qo'yilishi mumkin.\n\n" +
        "Bu odatda bir necha bosqichdan iborat " +
        "bo'ladi: buzilish aniqlanadi, uni " +
        "bartaraf etish talab qilinadi va " +
        "faqat bajarilmasa olib qo'yish " +
        "masalasi ko'riladi.\n\n" +
        "Shuning uchun ogohlantirishga darhol " +
        "munosabat bildirish juda muhim.",
      example:
        "Chegara joyda belgilanmagan edi — " +
        "qo'shni bilan uzoq nizo yuzaga keldi.",
      keyPoints: [
        "Chegaralar joyning o'zida belgilanadi",
        "Huquq davlat ro'yxatidan o'tkaziladi",
        "Huquq qonuniy asoslarda bekor qilinadi",
        "Qonunbuzarlikda avval bartaraf etish talab qilinadi",
      ],
      warning:
        "Chegarani belgilamaslik — qo'shni nizosining " +
        "eng keng tarqalgan sababi.",
      lawRefs: [
        { code: "YK", article: "31" },
        { code: "YK", article: "32" },
        { code: "YK", article: "33" },
        { code: "YK", article: "35" },
        { code: "YK", article: "36" },
        { code: "YK", article: "38" },
      ],
    },
  ],
};

module.exports = { LESSON };
