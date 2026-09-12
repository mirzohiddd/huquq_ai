"use strict";
/**
 * YER VA KO'CHMAS MULK — 1-QISM: YER ASOSLARI (1–10-mavzular)
 *
 * Manbalar: Yer kodeksi (YK), Uy-joy kodeksi (UJK), Fuqarolik
 * kodeksi 2-qism (FK2, ko'chmas mulkni sotish).
 *
 * ⚠️ Uch manba ataylab: yer huquqi YK da, turar joy UJK da,
 * bitimlar esa FK2 da. Faqat bittasiga tayanish darsni yarim
 * qoldirardi — foydalanuvchi uchun bular bitta amaliy masala.
 */

const SECTIONS = [
  /* ── 1 ─────────────────────────────────────────────────────── */
  {
    heading: "Yer huquqi nima va u nimani tartibga soladi",
    text:
      "Yer huquqi — yerga egalik " +
      "qilish, undan foydalanish va " +
      "uni tasarruf etish " +
      "munosabatlarini tartibga " +
      "soluvchi qoidalar. Asosiy " +
      "hujjat — Yer kodeksi.\n\n" +
      "Yer oddiy mol-mulk emas: u " +
      "cheklangan, ko'paytirib " +
      "bo'lmaydigan va tiklanishi " +
      "qiyin resurs. Shuning uchun " +
      "unga nisbatan qoidalar " +
      "boshqa mulkka qaraganda " +
      "ancha qat'iy.\n\n" +
      "Asosiy tamoyillar odatda: " +
      "yerdan oqilona foydalanish; " +
      "yerni muhofaza qilish; " +
      "yerning maqsadli " +
      "foydalanilishi; yerga " +
      "bo'lgan huquqlarning " +
      "himoya qilinishi.\n\n" +
      "⚠️ MAQSADLI FOYDALANISH " +
      "tamoyili amalda eng " +
      "muhimi: yer qaysi maqsad " +
      "uchun berilgan bo'lsa, " +
      "aynan shu maqsadda " +
      "ishlatilishi kerak. " +
      "Buzilishi huquqni bekor " +
      "qilishgacha olib kelishi " +
      "mumkin.",
    example:
      "Qishloq xo'jaligi uchun " +
      "berilgan yerda ruxsatsiz " +
      "savdo obyekti qurildi. " +
      "Bu maqsadli foydalanish " +
      "tamoyilining buzilishi va " +
      "yerni olib qo'yish uchun " +
      "asos bo'lishi mumkin.",
    keyPoints: [
      "Asosiy hujjat — Yer kodeksi",
      "Yer cheklangan resurs, qoidalar qat'iyroq",
      "Maqsadli foydalanish — eng muhim tamoyil",
      "Buzilish huquqni bekor qilishga olib kelishi mumkin",
    ],
    warning:
      "Yer sotib olishdan yoki " +
      "ijaraga olishdan oldin " +
      "uning MAQSADINI " +
      "aniqlashtiring — keyin " +
      "o'zgartirish murakkab " +
      "jarayon.",
    lawRefs: [
      { code: "YK", article: "1" },
      { code: "YK", article: "2" },
    ],
  },

  /* ── 2 ─────────────────────────────────────────────────────── */
  {
    heading: "Yerga bo'lgan mulkchilik",
    text:
      "Eng ko'p savol tug'diradigan " +
      "masala: yer kimniki?\n\n" +
      "O'zbekiston Respublikasida " +
      "yerga bo'lgan mulkchilik " +
      "masalasi alohida moddada " +
      "belgilangan. Umumiy qoida " +
      "sifatida yer davlat mulki " +
      "hisoblanadi, lekin qonunda " +
      "belgilangan hollarda " +
      "yuridik va jismoniy " +
      "shaxslarning yer " +
      "uchastkalariga bo'lgan " +
      "mulk huquqi vujudga " +
      "kelishi ham nazarda " +
      "tutilgan.\n\n" +
      "⚠️ Bu shuni anglatadi: " +
      "\"mening yerim\" degan " +
      "ibora huquqiy jihatdan " +
      "har doim ham MULK " +
      "huquqini bildirmaydi. " +
      "Ko'p hollarda bu " +
      "FOYDALANISH yoki IJARA " +
      "huquqi bo'ladi.\n\n" +
      "Farqni bilish hal " +
      "qiluvchi: mulk huquqi " +
      "sotish, hadya qilish va " +
      "meros qoldirish " +
      "imkonini beradi; " +
      "foydalanish huquqi esa " +
      "ancha cheklangan.\n\n" +
      "Shuning uchun har qanday " +
      "bitimdan oldin " +
      "hujjatdagi HUQUQ TURINI " +
      "o'qing.",
    example:
      "Odam yerni \"sotib " +
      "oldim\" deb o'ylardi, " +
      "aslida unga doimiy " +
      "foydalanish huquqi " +
      "berilgan edi. Uni " +
      "sotmoqchi bo'lganda " +
      "bunday huquq bitim " +
      "predmeti bo'la " +
      "olmasligi ma'lum " +
      "bo'ldi.",
    keyPoints: [
      "Yerga mulkchilik masalasi alohida moddada belgilangan",
      "\"Mening yerim\" har doim mulk huquqini bildirmaydi",
      "Foydalanish va ijara huquqi mulkdan farq qiladi",
      "Bitimdan oldin hujjatdagi huquq turini tekshiring",
    ],
    warning:
      "Huquq turi noto'g'ri " +
      "tushunilgan bitim " +
      "keyinchalik haqiqiy " +
      "emas deb topilishi " +
      "mumkin.",
    lawRefs: [
      { code: "YK", article: "16" },
      { code: "YK", article: "17" },
      { code: "YK", article: "18" },
    ],
  },

  /* ── 3 ─────────────────────────────────────────────────────── */
  {
    heading: "Yer fondi toifalari",
    text:
      "Barcha yerlar TOIFALARGA " +
      "bo'lingan va har bir " +
      "toifaning o'z huquqiy " +
      "rejimi bor.\n\n" +
      "Asosiy toifalar odatda: " +
      "qishloq xo'jaligiga " +
      "mo'ljallangan yerlar; " +
      "aholi punktlari " +
      "(shaharlar, posyolkalar, " +
      "qishloqlar) yerlari; " +
      "sanoat, transport, " +
      "aloqa, mudofaa va boshqa " +
      "maqsadlarga mo'ljallangan " +
      "yerlar; tabiatni muhofaza " +
      "qilish, sog'lomlashtirish " +
      "va rekreatsiya yerlari; " +
      "o'rmon fondi yerlari; " +
      "suv fondi yerlari; " +
      "zaxira yerlar.\n\n" +
      "⚠️ Toifa yerdan qanday " +
      "foydalanish " +
      "mumkinligini " +
      "BELGILAYDI. Qishloq " +
      "xo'jaligi yerida " +
      "sanoat obyekti qurish " +
      "toifani o'zgartirmasdan " +
      "mumkin emas.\n\n" +
      "Yerlarni bir toifadan " +
      "boshqasiga o'tkazish " +
      "alohida tartibda va " +
      "vakolatli organlar " +
      "qarori bilan amalga " +
      "oshiriladi.\n\n" +
      "Bu jarayon uzoq va " +
      "har doim ham " +
      "muvaffaqiyatli " +
      "bo'lmaydi.",
    example:
      "Xaridor arzon yer " +
      "oldi va zavod " +
      "qurmoqchi bo'ldi. " +
      "Yer qishloq xo'jaligi " +
      "toifasida ekani " +
      "ma'lum bo'ldi — " +
      "loyiha to'xtadi.",
    keyPoints: [
      "Barcha yerlar toifalarga bo'lingan",
      "Har bir toifaning o'z huquqiy rejimi bor",
      "Toifa yerdan foydalanish imkonini belgilaydi",
      "Toifani o'zgartirish alohida tartibda amalga oshiriladi",
    ],
    warning:
      "Yer toifasini " +
      "kadastr hujjatidan " +
      "tekshiring — " +
      "sotuvchining " +
      "so'ziga " +
      "tayanmang.",
    lawRefs: [
      { code: "YK", article: "8" },
      { code: "YK", article: "9" },
    ],
  },

  /* ── 4 ─────────────────────────────────────────────────────── */
  {
    heading: "Yer uchastkasi nima",
    text:
      "Yer uchastkasi — " +
      "chegaralari belgilangan " +
      "yer qismi. U huquq " +
      "obyekti bo'lishi uchun " +
      "aniq CHEGARALANGAN " +
      "bo'lishi kerak.\n\n" +
      "Yer uchastkasining " +
      "asosiy tavsiflari: " +
      "joylashgan yeri " +
      "(manzil); maydoni; " +
      "chegaralari; kadastr " +
      "raqami; toifasi; " +
      "ruxsat etilgan " +
      "foydalanish turi.\n\n" +
      "⚠️ KADASTR RAQAMI — " +
      "yer uchastkasining " +
      "\"pasporti\". Har " +
      "qanday hujjatda va " +
      "bitimda aynan shu " +
      "raqam ko'rsatiladi. " +
      "Usiz uchastkani aniq " +
      "identifikatsiya qilib " +
      "bo'lmaydi.\n\n" +
      "Yer uchastkasi " +
      "bo'linishi mumkin " +
      "yoki bo'linmas " +
      "bo'lishi mumkin — bu " +
      "eng kam o'lcham va " +
      "maqsadli foydalanish " +
      "talablariga " +
      "bog'liq.\n\n" +
      "Bo'linmas uchastkani " +
      "bir necha shaxs " +
      "o'rtasida bo'lish " +
      "mumkin emas — faqat " +
      "umumiy mulk " +
      "sifatida egalik " +
      "qilinadi.",
    example:
      "Ikki merosxo'r " +
      "kichik yer " +
      "uchastkasini " +
      "bo'lmoqchi bo'ldi. " +
      "Eng kam o'lcham " +
      "talabi tufayli " +
      "bo'lish mumkin " +
      "emas — ular " +
      "umumiy mulk " +
      "sifatida egalik " +
      "qiladi.",
    keyPoints: [
      "Yer uchastkasi chegaralangan bo'lishi kerak",
      "Kadastr raqami — uning asosiy identifikatori",
      "Toifa va ruxsat etilgan foydalanish turi ko'rsatiladi",
      "Uchastka bo'linadigan yoki bo'linmas bo'lishi mumkin",
    ],
    warning:
      "Kadastr raqamisiz " +
      "\"yer sotib olish\" " +
      "— eng xavfli " +
      "bitim turlaridan " +
      "biri.",
    lawRefs: [
      { code: "YK", article: "10" },
      { code: "YK", article: "32" },
      { code: "YK", article: "15" },
    ],
  },

  /* ── 5 ─────────────────────────────────────────────────────── */
  {
    heading: "Ruxsat etilgan foydalanish turlari",
    text:
      "Toifadan tashqari yana " +
      "bir muhim tushuncha " +
      "bor — RUXSAT ETILGAN " +
      "FOYDALANISH turi.\n\n" +
      "Toifa umumiy doirani " +
      "belgilasa, ruxsat " +
      "etilgan foydalanish " +
      "turi ANIQ nima qilish " +
      "mumkinligini " +
      "ko'rsatadi.\n\n" +
      "Qonun uch turni " +
      "ajratadi: ASOSIY tur " +
      "(qo'shimcha ruxsatsiz " +
      "amalga oshiriladi); " +
      "SHARTLI ruxsat " +
      "etilgan tur (alohida " +
      "ruxsatnoma talab " +
      "qiladi); YORDAMCHI " +
      "tur (asosiy turga " +
      "qo'shimcha " +
      "sifatida).\n\n" +
      "⚠️ Amaliy ahamiyati " +
      "juda katta: qurilish " +
      "boshlashdan oldin " +
      "yer uchastkangizning " +
      "ruxsat etilgan " +
      "foydalanish turini " +
      "bilishingiz shart. " +
      "Aks holda qurilgan " +
      "obyekt qonuniy " +
      "bo'lmay qolishi " +
      "mumkin.\n\n" +
      "Shartli tur uchun " +
      "ruxsatnoma olish " +
      "tartibi ham " +
      "alohida belgilangan.",
    example:
      "Yer uchastkasida " +
      "yashash uyi qurish " +
      "asosiy tur, " +
      "do'kon ochish esa " +
      "shartli tur " +
      "bo'lishi mumkin. " +
      "Ikkinchisi uchun " +
      "alohida ruxsatnoma " +
      "kerak.",
    keyPoints: [
      "Ruxsat etilgan foydalanish turi aniq imkoniyatni belgilaydi",
      "Uch turi bor: asosiy, shartli va yordamchi",
      "Asosiy tur qo'shimcha ruxsatsiz amalga oshiriladi",
      "Shartli tur uchun ruxsatnoma talab qilinadi",
    ],
    warning:
      "Qurilishni " +
      "boshlashdan " +
      "OLDIN ruxsat " +
      "etilgan " +
      "foydalanish " +
      "turini " +
      "tekshiring.",
    lawRefs: [
      { code: "YK", article: "10-1" },
      { code: "YK", article: "10-2" },
      { code: "YK", article: "10-3" },
      { code: "YK", article: "10-6" },
    ],
  },

  /* ── 6 ─────────────────────────────────────────────────────── */
  {
    heading: "Foydalanish turini o'zgartirish",
    text:
      "Yer uchastkasidan " +
      "ruxsat etilgan " +
      "foydalanish turini " +
      "o'zgartirish mumkin " +
      "— lekin belgilangan " +
      "TARTIBDA.\n\n" +
      "Bu jarayon o'z-o'zidan " +
      "bo'lmaydi va " +
      "\"amalda shunday " +
      "ishlatib turibman\" " +
      "degan dalil ishlamaydi.\n\n" +
      "Odatiy bosqichlar: " +
      "vakolatli organga " +
      "ariza berish; " +
      "hujjatlarni taqdim " +
      "etish; ko'rib " +
      "chiqish; qaror qabul " +
      "qilish; " +
      "o'zgartirishni " +
      "ro'yxatga olish.\n\n" +
      "⚠️ MUHIM: " +
      "o'zgartirish har " +
      "doim ham mumkin " +
      "emas. Shaharsozlik " +
      "hujjatlari, " +
      "ekologik va boshqa " +
      "talablar cheklov " +
      "qo'yishi mumkin.\n\n" +
      "Ayniqsa qat'iy " +
      "cheklovlar sug'oriladigan " +
      "va alohida " +
      "qimmatga ega " +
      "unumdor yerlarga " +
      "nisbatan " +
      "qo'llaniladi — " +
      "ularni boshqa " +
      "toifaga o'tkazish " +
      "alohida tartibga " +
      "bo'ysunadi.\n\n" +
      "Shuning uchun " +
      "\"keyin " +
      "o'zgartiramiz\" " +
      "degan hisobga " +
      "tayanmang.",
    example:
      "Xaridor " +
      "sug'oriladigan " +
      "qishloq xo'jaligi " +
      "yerini olib, " +
      "keyin qurilish " +
      "uchun " +
      "o'zgartirmoqchi " +
      "bo'ldi. Bunday " +
      "yerlarga nisbatan " +
      "cheklovlar " +
      "juda qat'iy va " +
      "ruxsat " +
      "berilmadi.",
    keyPoints: [
      "Foydalanish turini o'zgartirish belgilangan tartibda bo'ladi",
      "Amaldagi holat huquqiy asos bermaydi",
      "O'zgartirish har doim ham mumkin emas",
      "Sug'oriladigan yerlarga cheklovlar qat'iyroq",
    ],
    warning:
      "\"Keyin " +
      "o'zgartiramiz\" " +
      "degan hisobga " +
      "tayanib yer " +
      "sotib olmang — " +
      "bu eng " +
      "qimmatga " +
      "tushadigan " +
      "xatolardan " +
      "biri.",
    lawRefs: [
      { code: "YK", article: "10-5" },
      { code: "YK", article: "9" },
      { code: "YK", article: "44-1" },
    ],
  },

  /* ── 7 ─────────────────────────────────────────────────────── */
  {
    heading: "Yer uchastkalariga bo'lgan huquqlar turlari",
    text:
      "Yer uchastkasiga " +
      "nisbatan bir necha " +
      "xil huquq bo'lishi " +
      "mumkin va ularni " +
      "farqlash — bu " +
      "darslikning eng " +
      "amaliy qismi.\n\n" +
      "Asosiy turlari " +
      "odatda: MULK " +
      "huquqi (eng keng); " +
      "DOIMIY " +
      "foydalanish " +
      "huquqi; MEROS " +
      "QILIB " +
      "QOLDIRILADIGAN " +
      "UMRBOD egalik " +
      "qilish huquqi; " +
      "IJARA huquqi; " +
      "VAQTINCHA " +
      "foydalanish " +
      "huquqi; SERVITUT " +
      "(cheklangan " +
      "foydalanish).\n\n" +
      "⚠️ Har birining " +
      "imkoniyati " +
      "boshqacha:\n\n" +
      "— mulk huquqi " +
      "sotish, hadya, " +
      "meros va garovga " +
      "qo'yish " +
      "imkonini beradi;\n\n" +
      "— ijara huquqi " +
      "muddat bilan " +
      "cheklangan va " +
      "shartnoma " +
      "shartlariga " +
      "bo'ysunadi;\n\n" +
      "— foydalanish " +
      "huquqi odatda " +
      "tasarruf etish " +
      "imkonini " +
      "bermaydi.\n\n" +
      "Shuning uchun " +
      "har qanday " +
      "bitimda " +
      "birinchi savol " +
      "— \"qanday " +
      "huquq " +
      "o'tkazilyapti?\"",
    example:
      "Sotuvchi " +
      "ijara " +
      "huquqidagi " +
      "yerni " +
      "\"sotmoqchi\" " +
      "bo'ldi. " +
      "Aslida u " +
      "faqat ijara " +
      "huquqini " +
      "belgilangan " +
      "tartibda " +
      "o'tkazishi " +
      "mumkin — " +
      "mulkni " +
      "emas.",
    keyPoints: [
      "Yerga nisbatan bir necha xil huquq bo'ladi",
      "Mulk huquqi eng keng imkoniyat beradi",
      "Ijara muddat va shartnoma bilan cheklangan",
      "Foydalanish huquqi odatda tasarruf etishga ruxsat bermaydi",
    ],
    warning:
      "Bitimda " +
      "\"qanday " +
      "huquq " +
      "o'tkazilyapti\" " +
      "degan " +
      "savolga " +
      "hujjatdan " +
      "javob " +
      "toping.",
    lawRefs: [
      { code: "YK", article: "17" },
      { code: "YK", article: "20" },
      { code: "YK", article: "24" },
    ],
  },

  /* ── 8 ─────────────────────────────────────────────────────── */
  {
    heading: "Doimiy foydalanish huquqi",
    text:
      "Doimiy foydalanish " +
      "huquqi — muddat " +
      "bilan " +
      "cheklanmagan, " +
      "lekin mulkdan " +
      "farq qiladigan " +
      "huquq.\n\n" +
      "Uning asosiy " +
      "xususiyati: yerdan " +
      "belgilangan " +
      "maqsadda " +
      "foydalanish " +
      "mumkin, lekin " +
      "uni tasarruf " +
      "etish (sotish, " +
      "hadya qilish) " +
      "imkoniyati " +
      "cheklangan.\n\n" +
      "⚠️ Qonun ayrim " +
      "imkoniyatlarni " +
      "alohida " +
      "belgilaydi: " +
      "masalan doimiy " +
      "foydalanish " +
      "huquqi asosida " +
      "berilgan yer " +
      "uchastkalarini " +
      "IJARAGA berish " +
      "alohida " +
      "moddada " +
      "tartibga " +
      "solingan.\n\n" +
      "Bu shuni " +
      "anglatadi: " +
      "huquq " +
      "cheklangan " +
      "bo'lsa ham " +
      "undan iqtisodiy " +
      "foyda olish " +
      "yo'llari " +
      "mavjud — " +
      "lekin faqat " +
      "qonunda " +
      "ko'rsatilgan " +
      "doirada.\n\n" +
      "Huquq " +
      "egasining " +
      "asosiy " +
      "majburiyati — " +
      "yerdan " +
      "maqsadli va " +
      "oqilona " +
      "foydalanish.",
    example:
      "Tashkilotga " +
      "doimiy " +
      "foydalanish " +
      "huquqi " +
      "asosida yer " +
      "berilgan. " +
      "U yerni " +
      "sota " +
      "olmaydi, " +
      "lekin " +
      "belgilangan " +
      "tartibda " +
      "ijaraga " +
      "berishi " +
      "mumkin.",
    keyPoints: [
      "Doimiy foydalanish muddat bilan cheklanmagan",
      "Tasarruf etish imkoniyati cheklangan",
      "Ijaraga berish alohida moddada tartibga solingan",
      "Asosiy majburiyat — maqsadli foydalanish",
    ],
    warning:
      "Doimiy " +
      "foydalanish " +
      "huquqini " +
      "\"mulk\" " +
      "deb " +
      "sotishga " +
      "urinishlar " +
      "uchraydi — " +
      "hujjatni " +
      "diqqat " +
      "bilan " +
      "o'qing.",
    lawRefs: [
      { code: "YK", article: "20" },
      { code: "YK", article: "24-1" },
      { code: "YK", article: "40" },
    ],
  },

  /* ── 9 ─────────────────────────────────────────────────────── */
  {
    heading: "Yer uchastkasi ijarasi",
    text:
      "Ijara — yerdan " +
      "foydalanishning " +
      "eng keng " +
      "tarqalgan " +
      "shakllaridan " +
      "biri.\n\n" +
      "Ijara " +
      "shartnomasida " +
      "odatda " +
      "belgilanadi: " +
      "yer " +
      "uchastkasi " +
      "(kadastr " +
      "raqami bilan); " +
      "maqsad; " +
      "muddat; ijara " +
      "haqi va " +
      "to'lash " +
      "tartibi; " +
      "tomonlarning " +
      "huquq va " +
      "majburiyatlari.\n\n" +
      "⚠️ MUDDAT " +
      "masalasi " +
      "muhim: " +
      "shartnomani " +
      "yangi " +
      "muddatga " +
      "uzaytirish " +
      "alohida " +
      "moddada " +
      "tartibga " +
      "solingan. " +
      "Ijarachi " +
      "muayyan " +
      "shartlarda " +
      "uzaytirishga " +
      "ustunlik " +
      "huquqiga " +
      "ega " +
      "bo'lishi " +
      "mumkin.\n\n" +
      "Qishloq " +
      "xo'jaligi " +
      "yerlari " +
      "uchun " +
      "IKKILAMCHI " +
      "ijara va " +
      "huquqlarni " +
      "boshqa " +
      "shaxsga " +
      "o'tkazish " +
      "ham " +
      "alohida " +
      "tartibga " +
      "solingan.\n\n" +
      "Ijara " +
      "huquqi " +
      "ham " +
      "davlat " +
      "ro'yxatidan " +
      "o'tkazilishi " +
      "kerak.",
    example:
      "Ijarachi " +
      "muddat " +
      "tugashiga " +
      "yaqin " +
      "uzaytirish " +
      "haqida " +
      "ariza " +
      "bermadi. " +
      "Shartnoma " +
      "tugadi " +
      "va u " +
      "yerdan " +
      "foydalanish " +
      "huquqini " +
      "yo'qotdi.",
    keyPoints: [
      "Ijara shartnomasi muddat va maqsadni belgilaydi",
      "Uzaytirish alohida moddada tartibga solingan",
      "Qishloq xo'jaligi yerlarida ikkilamchi ijara qoidalari bor",
      "Ijara huquqi davlat ro'yxatidan o'tkaziladi",
    ],
    warning:
      "Ijara " +
      "muddati " +
      "tugashini " +
      "oldindan " +
      "kuzating " +
      "— " +
      "uzaytirish " +
      "uchun " +
      "ariza " +
      "muddati " +
      "bo'ladi.",
    lawRefs: [
      { code: "YK", article: "24" },
      { code: "YK", article: "24-4" },
      { code: "YK", article: "24-5" },
    ],
  },

  /* ── 10 ────────────────────────────────────────────────────── */
  {
    heading: "Huquqni tasdiqlovchi hujjatlar va ro'yxatga olish",
    text:
      "Yerga bo'lgan " +
      "huquq HUJJAT " +
      "bilan " +
      "tasdiqlanadi va " +
      "DAVLAT " +
      "RO'YXATIDAN " +
      "o'tkaziladi.\n\n" +
      "⚠️ ENG MUHIM " +
      "QOIDA: " +
      "ro'yxatdan " +
      "o'tkazilmagan " +
      "huquq uchinchi " +
      "shaxslar uchun " +
      "mavjud emas " +
      "hisoblanadi. " +
      "Ya'ni siz " +
      "shartnoma " +
      "imzolagan " +
      "bo'lsangiz " +
      "ham, " +
      "ro'yxatdan " +
      "o'tkazilmaguncha " +
      "huquqingiz " +
      "to'liq " +
      "himoyalanmaydi.\n\n" +
      "Bu " +
      "quyidagilarga " +
      "olib " +
      "keladi: " +
      "yerni " +
      "sotish, " +
      "garovga " +
      "qo'yish " +
      "yoki " +
      "meros " +
      "qoldirish " +
      "mumkin " +
      "bo'lmaydi; " +
      "nizoda " +
      "huquqingizni " +
      "isbotlash " +
      "qiyinlashadi.\n\n" +
      "Davlat yer " +
      "kadastri " +
      "yer " +
      "uchastkalari " +
      "haqidagi " +
      "ma'lumotlarni " +
      "saqlaydi — " +
      "u yerdan " +
      "ma'lumot " +
      "olish " +
      "mumkin.\n\n" +
      "Sotib " +
      "olishdan " +
      "oldin " +
      "kadastrdan " +
      "ma'lumot " +
      "olish " +
      "— eng " +
      "muhim " +
      "himoya " +
      "chorasi.",
    example:
      "Xaridor " +
      "yer " +
      "uchastkasini " +
      "oldi, " +
      "lekin " +
      "huquqni " +
      "ro'yxatdan " +
      "o'tkazmadi. " +
      "Sotuvchi " +
      "uni " +
      "boshqa " +
      "shaxsga " +
      "ham " +
      "sotdi " +
      "— " +
      "ro'yxatdan " +
      "o'tkazgan " +
      "ikkinchi " +
      "xaridor " +
      "kuchliroq " +
      "pozitsiyada " +
      "bo'ladi.",
    keyPoints: [
      "Yerga bo'lgan huquq hujjat bilan tasdiqlanadi",
      "Davlat ro'yxatidan o'tkazish majburiy",
      "Ro'yxatsiz huquq to'liq himoyalanmaydi",
      "Kadastrdan ma'lumot olish asosiy himoya chorasi",
    ],
    warning:
      "Bitimdan " +
      "keyin " +
      "ro'yxatdan " +
      "o'tkazishni " +
      "KECHIKTIRMANG " +
      "— bu " +
      "eng " +
      "xavfli " +
      "davr.",
    lawRefs: [
      { code: "YK", article: "33" },
      { code: "YK", article: "35" },
      { code: "YK", article: "15" },
      { code: "YK", article: "31" },
    ],
  },
];

module.exports = { SECTIONS };
