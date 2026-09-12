"use strict";
/**
 * MEHNAT HUQUQI — 1-QISM: ISHGA KIRISHDAN OLDIN (1–6-mavzular)
 *
 * Ketma-ketlik: soha nima → asosiy erkinlik → tomonlar kim →
 * ishga joylashish huquqi → yosh chegarasi → rad etish qoidalari.
 *
 * ⚠️ Aniq yosh, muddat, foiz va summa MATNDA yozilmaydi — ular
 * `lawRefs` orqali bazadagi JONLI qonun matnidan keladi.
 */

const SECTIONS = [
  /* ── 1 ─────────────────────────────────────────────────────── */
  {
    heading: "Mehnat huquqi nima va u kimga taalluqli",
    text:
      "Mehnat huquqi — xodim bilan ish beruvchi " +
      "o'rtasidagi munosabatlarni tartibga soluvchi " +
      "qoidalar. Asosiy hujjat — Mehnat kodeksi.\n\n" +
      "Eng muhim savol: bu qoidalar KIMGA " +
      "tegishli? Javob — mehnat shartnomasi " +
      "asosida ishlayotgan har bir xodimga. " +
      "Tashkilot davlatniki yoki xususiymi, " +
      "katta yoki kichikmi — farqi yo'q.\n\n" +
      "⚠️ Muhim chegara: fuqarolik-huquqiy " +
      "shartnoma (pudrat, xizmat ko'rsatish) " +
      "bo'yicha ishlash mehnat munosabati EMAS. " +
      "U yerda ta'til, kasallik varaqasi va " +
      "ishdan bo'shash kafolatlari ishlamaydi.\n\n" +
      "Lekin qonun aldashning oldini oladi: agar " +
      "shartnoma nomi \"pudrat\" bo'lsa-yu, " +
      "amalda odam kunda ishga chiqib, ish " +
      "tartibiga bo'ysunib ishlayotgan bo'lsa, " +
      "bunday munosabat MEHNAT munosabati deb " +
      "e'tirof etilishi mumkin.",
    example:
      "Odam ikki yildan beri kunda soat 9 dan " +
      "18 gacha ofisda ishlaydi, lekin " +
      "\"xizmat ko'rsatish shartnomasi\" tuzilgan. " +
      "Ta'til berilmaydi, kasallik to'lanmaydi. " +
      "Bu munosabatni mehnat munosabati deb " +
      "e'tirof ettirish uchun asos bor.",
    keyPoints: [
      "Asosiy hujjat — Mehnat kodeksi",
      "Qoidalar mehnat shartnomasi bo'yicha ishlovchi hammaga tegishli",
      "Pudrat shartnomasida mehnat kafolatlari ishlamaydi",
      "Amalda mehnat munosabati bo'lsa, shartnoma nomi uni yashira olmaydi",
    ],
    warning:
      "Shartnoma turini imzolashdan OLDIN " +
      "aniqlang. Keyinchalik uni qayta " +
      "kvalifikatsiya qildirish uzoq va " +
      "murakkab jarayon.",
    lawRefs: [
      { code: "MK", article: "1" },
      { code: "MK", article: "11" },
      { code: "MK", article: "33" },
    ],
  },

  /* ── 2 ─────────────────────────────────────────────────────── */
  {
    heading: "Mehnat erkinligi va majburiy mehnat taqiqi",
    text:
      "Mehnat huquqining birinchi tamoyili — " +
      "MEHNAT ERKINLIGI. Har kim o'z mehnat " +
      "qobiliyatini erkin tasarruf etadi, kasb " +
      "va faoliyat turini o'zi tanlaydi.\n\n" +
      "Bundan kelib chiqadigan ikkinchi tamoyil " +
      "— MAJBURIY MEHNAT TAQIQLANADI. Hech kim " +
      "o'z roziligisiz ishlashga majbur " +
      "qilinmaydi.\n\n" +
      "Amaliy natijalari juda aniq: xodimni " +
      "shartnomada ko'rsatilmagan ishni " +
      "bajarishga majburlab bo'lmaydi; ishdan " +
      "bo'shashga to'sqinlik qilib bo'lmaydi; " +
      "hujjatlarni (mehnat daftarchasi, diplom) " +
      "garovga olib ushlab turish mumkin emas.\n\n" +
      "Uchinchi tamoyil — KAMSITISH TAQIQI. Jinsi, " +
      "yoshi, irqi, tili, dini, ijtimoiy kelib " +
      "chiqishi yoki boshqa ishga aloqasi yo'q " +
      "belgilar bo'yicha huquqlarni cheklash " +
      "taqiqlanadi.",
    example:
      "Ish beruvchi ishdan bo'shamoqchi bo'lgan " +
      "xodimning mehnat daftarchasini " +
      "\"qarzingiz bor\" deb bermayapti. Bu " +
      "qonunga zid: hujjatni ushlab qolish " +
      "orqali odamni ishlashga majburlash " +
      "mumkin emas.",
    keyPoints: [
      "Har kim kasbini va ish joyini erkin tanlaydi",
      "Majburiy mehnat taqiqlanadi",
      "Hujjatlarni garovga ushlab turish qonunga zid",
      "Ishga aloqasi yo'q belgilar bo'yicha kamsitish taqiqlanadi",
    ],
    warning:
      "\"Bir yil ishlamasangiz o'qishingiz " +
      "pulini qaytarasiz\" kabi shartlar faqat " +
      "qonunda nazarda tutilgan doirada " +
      "ishlaydi — har qanday shart amal " +
      "qilavermaydi.",
    lawRefs: [
      { code: "MK", article: "5" },
      { code: "MK", article: "4" },
    ],
  },

  /* ── 3 ─────────────────────────────────────────────────────── */
  {
    heading: "Xodim va ish beruvchi: kimning qanday huquqi bor",
    text:
      "Mehnat munosabatining ikki tomoni bor: " +
      "XODIM va ISH BERUVCHI. Ikkalasining ham " +
      "huquqlari va majburiyatlari qonunda " +
      "aniq yozilgan.\n\n" +
      "Xodimning asosiy huquqlari: shartnoma " +
      "tuzish, o'zgartirish va bekor qilish; " +
      "shartnomada shart qilingan ishni olish; " +
      "xavfsiz mehnat sharoiti; o'z vaqtida va " +
      "to'liq ish haqi; dam olish va ta'til; " +
      "kasaba uyushmasiga birlashish; o'z " +
      "huquqlarini himoya qilish.\n\n" +
      "Xodimning majburiyatlari: mehnat " +
      "vazifalarini vijdonan bajarish; ichki " +
      "mehnat tartibiga rioya qilish; mehnat " +
      "intizomini saqlash; xavfsizlik " +
      "talablariga amal qilish; ish beruvchining " +
      "mol-mulkiga ehtiyot bo'lish.\n\n" +
      "Ish beruvchi esa ishni tashkil etishi, " +
      "xavfsiz sharoit yaratishi, ish haqini " +
      "o'z vaqtida to'lashi va qonun " +
      "talablariga rioya qilishi shart.",
    example:
      "Xodim shartnomada yozilgan ishni " +
      "bajarmoqchi, lekin ish beruvchi unga " +
      "butunlay boshqa vazifa yuklayapti. " +
      "Xodimning \"shart qilingan ishni olish\" " +
      "huquqi buzilyapti — bu shikoyat uchun " +
      "asos.",
    keyPoints: [
      "Tomonlar — xodim va ish beruvchi",
      "Xodimning huquqlari qonunda ro'yxat bilan berilgan",
      "Majburiyatlar ham ikki tomonlama",
      "Shartnomada shart qilingan ishni olish — xodimning huquqi",
    ],
    warning:
      "Huquqlarni bilmaslik ularni yo'qotish " +
      "demak. Mehnat kodeksining shu ikki " +
      "moddasini bir marta o'qib chiqish " +
      "ko'p nizoning oldini oladi.",
    lawRefs: [
      { code: "MK", article: "19" },
      { code: "MK", article: "21" },
      { code: "MK", article: "22" },
      { code: "MK", article: "25" },
    ],
  },

  /* ── 4 ─────────────────────────────────────────────────────── */
  {
    heading: "Ishga joylashish huquqi va davlat kafolatlari",
    text:
      "Har bir fuqaro ishga joylashish huquqiga " +
      "ega. Bu shunchaki e'lon emas — davlat " +
      "zimmasiga aniq kafolatlar yuklangan.\n\n" +
      "Davlat kafolatlari: bandlikka ko'maklashish " +
      "bo'yicha bepul xizmatlar; kasbga " +
      "tayyorlash va qayta tayyorlash; ishsizlik " +
      "bo'yicha ijtimoiy himoya; bo'sh ish " +
      "o'rinlari haqida ma'lumot.\n\n" +
      "Alohida e'tibor — IJTIMOIY EHTIYOJMAND " +
      "TOIFALARGA. Ular uchun qo'shimcha " +
      "kafolatlar nazarda tutilgan, jumladan " +
      "belgilangan eng kam ish o'rinlari " +
      "hisobiga ishga joylashtirish " +
      "mexanizmi.\n\n" +
      "Bu toifaga odatda yoshlar, nogironligi " +
      "bo'lgan shaxslar, uzoq muddat ishsiz " +
      "yurganlar va shunga o'xshash guruhlar " +
      "kiradi. Aniq ro'yxat qonun matnida.",
    example:
      "Nogironligi bo'lgan shaxs ishga " +
      "joylasha olmayapti. U bandlikka " +
      "ko'maklashish organiga murojaat qilib, " +
      "belgilangan eng kam ish o'rinlari " +
      "hisobiga joylashtirish imkoniyatidan " +
      "foydalanishi mumkin.",
    keyPoints: [
      "Ishga joylashish — konstitutsiyaviy huquq",
      "Davlat bepul ko'maklashish xizmatlarini kafolatlaydi",
      "Ijtimoiy ehtiyojmand toifalarga qo'shimcha kafolatlar bor",
      "Eng kam ish o'rinlari mexanizmi ishlaydi",
    ],
    warning:
      "Kafolatlardan foydalanish uchun rasmiy " +
      "ro'yxatdan o'tish kerak — o'z-o'zidan " +
      "hech narsa berilmaydi.",
    lawRefs: [
      { code: "MK", article: "94" },
      { code: "MK", article: "95" },
      { code: "MK", article: "96" },
      { code: "MK", article: "99" },
    ],
  },

  /* ── 5 ─────────────────────────────────────────────────────── */
  {
    heading: "Necha yoshdan ishlash mumkin",
    text:
      "Qonun ishga qabul qilish uchun eng kam " +
      "yoshni belgilaydi. Bu chegara bolaning " +
      "sog'lig'i va ta'lim olish huquqini " +
      "himoya qilish uchun kerak.\n\n" +
      "Asosiy qoida bitta yoshni belgilaydi, " +
      "lekin qonunda undan pastroq yoshda " +
      "ishlash imkoniyati ham nazarda tutilgan " +
      "— qat'iy shartlar bilan.\n\n" +
      "Bu shartlar odatda quyidagilarni o'z " +
      "ichiga oladi: ota-onadan birining " +
      "(yoki ularning o'rnini bosuvchi " +
      "shaxsning) YOZMA roziligi; ish " +
      "yengil bo'lishi; sog'liqqa zarar " +
      "yetkazmasligi; o'qishga to'sqinlik " +
      "qilmasligi.\n\n" +
      "Voyaga yetmagan xodimlar uchun " +
      "qonunda alohida himoya choralari " +
      "ham bor: qisqartirilgan ish vaqti, " +
      "tungi va ish vaqtidan tashqari " +
      "ishlarga jalb etish taqiqi, majburiy " +
      "tibbiy ko'rik.",
    example:
      "Maktab o'quvchisi yozgi ta'tilda " +
      "ishlamoqchi. Yoshi asosiy chegaradan " +
      "kichik bo'lsa, ota-onasining yozma " +
      "roziligi va ish yengil bo'lishi " +
      "shart. Rozilik og'zaki bo'lsa — " +
      "ishga qabul qilish qonunga zid.",
    keyPoints: [
      "Ishga qabul qilish uchun eng kam yosh belgilangan",
      "Pastroq yoshda ishlash faqat qat'iy shartlar bilan mumkin",
      "Ota-onaning roziligi YOZMA bo'lishi shart",
      "Voyaga yetmaganlar uchun alohida himoya choralari amal qiladi",
    ],
    warning:
      "Voyaga yetmagan xodimni tungi ishga " +
      "yoki ish vaqtidan tashqari ishga " +
      "jalb etish taqiqlanadi — uning " +
      "roziligi bo'lsa ham.",
    lawRefs: [
      { code: "MK", article: "118" },
      { code: "MK", article: "31" },
      { code: "MK", article: "183" },
    ],
  },

  /* ── 6 ─────────────────────────────────────────────────────── */
  {
    heading: "Ishga qabul qilishni rad etish: qachon qonuniy",
    text:
      "Ish beruvchi kimni ishga olishni o'zi " +
      "tanlaydi — bu uning huquqi. Lekin bu " +
      "huquq CHEKSIZ emas.\n\n" +
      "Qonunga XILOF rad etish taqiqlanadi. " +
      "Bunga kiradi: ishga aloqasi bo'lmagan " +
      "belgilar bo'yicha rad etish (jinsi, " +
      "yoshi, millati, dini, ijtimoiy kelib " +
      "chiqishi); homiladorlik yoki bola " +
      "borligi sababli rad etish; qonunda " +
      "nazarda tutilgan kafolatlarga ega " +
      "shaxslarga asossiz rad etish.\n\n" +
      "Qonuniy rad etish esa ISHGA OID " +
      "sabablarga tayanadi: malaka " +
      "yetishmasligi, tajriba yo'qligi, " +
      "lavozim talablariga mos kelmaslik.\n\n" +
      "Muhim huquq: rad etilgan shaxs " +
      "sababni YOZMA shaklda talab qilishi " +
      "mumkin. Qonunga xilof rad etish esa " +
      "sudda e'tiroz qilinadi va sud ish " +
      "beruvchi zimmasiga shartnoma tuzish " +
      "majburiyatini yuklashi mumkin.",
    example:
      "Ayol suhbatdan muvaffaqiyatli o'tdi, " +
      "lekin homilador ekani ma'lum " +
      "bo'lgach rad javobi berildi. Bu " +
      "qonunga xilof rad etish — sudga " +
      "murojaat qilish uchun asos bor.",
    keyPoints: [
      "Ish beruvchi tanlash huquqiga ega, lekin u cheksiz emas",
      "Ishga aloqasi yo'q belgilar bo'yicha rad etish taqiqlanadi",
      "Rad etish sababini yozma talab qilish mumkin",
      "Sud shartnoma tuzish majburiyatini yuklashi mumkin",
    ],
    warning:
      "Og'zaki rad javobini isbotlash qiyin. " +
      "Sababni YOZMA so'rang — bu keyinchalik " +
      "asosiy dalil bo'ladi.",
    lawRefs: [
      { code: "MK", article: "119" },
      { code: "MK", article: "120" },
      { code: "MK", article: "32" },
    ],
  },
];

module.exports = { SECTIONS };
