"use strict";
/**
 * OILA HUQUQI — 1-QISM: NIKOHGACHA (1–8-mavzular)
 *
 * Ketma-ketlik mantig'i: foydalanuvchi avval oila huquqi nimani
 * qamrab olishini biladi, so'ng "necha yoshdan turmush qurish
 * mumkin" degan eng birinchi amaliy savolga javob oladi, keyin
 * nikohga to'sqinlik qiladigan holatlar va nihoyat nikohni qanday
 * rasmiylashtirish tartibi keladi.
 *
 * ⚠️ ANIQ YOSH, MUDDAT VA SUMMA MATNDA YOZILMAYDI — ular `lawRefs`
 * orqali bazadagi JONLI qonun matnidan keladi (qarang:
 * `routes/lessons.js` → `attachLawQuotes`). Shuning uchun masalan
 * "Nikoh yoshi" mavzusida aniq yosh dars sahifasida ko'rinadi, lekin
 * qonun tahriri o'zgarsa u O'Z-O'ZIDAN yangilanadi.
 */

const SECTIONS = [
  /* ── 1 ─────────────────────────────────────────────────────── */
  {
    heading: "Oila huquqi nima va u nimani himoya qiladi",
    text:
      "Oila huquqi — bu nikoh, oila va qarindoshlik " +
      "munosabatlarini tartibga soluvchi qoidalar majmuasi. " +
      "Uning asosiy hujjati Oila kodeksi hisoblanadi.\n\n" +
      "Ko'p odam oila huquqini faqat ajralish bilan " +
      "bog'laydi. Aslida u ancha keng: nikoh tuzish, " +
      "er-xotinning mol-mulki, bolaning kelib chiqishi, " +
      "ota-onalik huquqlari, ta'minot (aliment), " +
      "farzandlikka olish, vasiylik — bularning " +
      "hammasi shu sohaga kiradi.\n\n" +
      "Eng muhimi shundaki, oila huquqi ZAIF TOMONNI " +
      "himoya qilishga qaratilgan. Oilada odatda bir " +
      "tomon iqtisodiy jihatdan kuchsizroq bo'ladi — " +
      "masalan bola tarbiyasi bilan band bo'lgani uchun " +
      "daromadi kam yoki umuman yo'q. Qonun aynan shuni " +
      "hisobga oladi.\n\n" +
      "Yana bir tamoyil — BOLA MANFAATI ustuvorligi. " +
      "Ota-ona o'rtasidagi har qanday nizoda sud avval " +
      "bolaning manfaatidan kelib chiqadi, ota-onaning " +
      "istagidan emas.",
    example:
      "Er-xotin ajrashayotganda ikkalasi ham bolani " +
      "o'ziga olmoqchi. Sud kimning \"haqli\" ekanini " +
      "emas, bola qayerda yaxshiroq o'sishini " +
      "baholaydi: kim bilan ko'proq bog'langan, turmush " +
      "sharoiti qanday, maktabi va do'stlari qayerda. " +
      "Ya'ni o'lchov — ota-ona emas, bola.",
    keyPoints: [
      "Oila huquqining asosiy hujjati — Oila kodeksi",
      "U nikoh, mulk, bolalar va ta'minot masalalarini qamrab oladi",
      "Qonun oiladagi zaifroq tomonni himoya qilishga qaratilgan",
      "Har qanday nizoda bola manfaati birinchi o'rinda turadi",
    ],
    warning:
      "\"Oila ishiga qonun aralashmaydi\" degan qarash " +
      "noto'g'ri. Aksincha — mulk, bola va ta'minot " +
      "masalalarida aynan qonun himoya beradi, lekin " +
      "faqat munosabat RASMIY bo'lganda.",
    lawRefs: [
      { code: "OK", article: "1" },
      { code: "OK", article: "5" },
    ],
  },

  /* ── 2 ─────────────────────────────────────────────────────── */
  {
    heading: "Nikoh yoshi: necha yoshdan turmush qurish mumkin",
    text:
      "Bu — eng ko'p beriladigan savol. Qonun nikoh " +
      "tuzish uchun eng kam yoshni belgilaydi va bu " +
      "yosh o'g'il bola hamda qiz bola uchun BIR XIL.\n\n" +
      "Nima uchun umuman yosh chegarasi bor? Chunki " +
      "nikoh — bu jiddiy huquqiy majburiyat: umumiy " +
      "mulk, bolalar oldidagi javobgarlik, ta'minot. " +
      "Buni ongli ravishda zimmasiga olish uchun " +
      "insonda yetarli yetuklik bo'lishi kerak.\n\n" +
      "Qonunda uzrli sabablar bo'lganda nikoh yoshini " +
      "pasaytirish imkoniyati ham nazarda tutilgan. " +
      "Lekin bu ISTISNO: u avtomatik emas, belgilangan " +
      "tartibda va vakolatli organning qarori bilan " +
      "amalga oshiriladi.\n\n" +
      "Pastdagi qonun matnida aniq yosh ko'rsatilgan. " +
      "U to'g'ridan-to'g'ri Oila kodeksidan olinadi, " +
      "shuning uchun qonun yangilansa bu yerdagi raqam " +
      "ham o'z-o'zidan yangilanadi.",
    example:
      "Yigit va qiz turmush qurmoqchi, lekin qizning " +
      "yoshi belgilangan chegaradan kichik. FHDYo " +
      "organi arizani shunchaki qabul qila olmaydi — " +
      "avval yoshni pasaytirish masalasi belgilangan " +
      "tartibda hal qilinishi kerak. Diniy marosim " +
      "o'tkazish esa bu talabni CHETLAB O'TMAYDI: " +
      "huquqiy ma'noda nikoh baribir mavjud bo'lmaydi.",
    keyPoints: [
      "Nikoh yoshi erkak va ayol uchun bir xil belgilangan",
      "Yosh chegarasi ongli javobgarlikni ta'minlash uchun kerak",
      "Uzrli sabab bo'lganda yoshni pasaytirish mumkin, lekin bu istisno",
      "Aniq yosh quyidagi qonun matnida ko'rsatilgan",
    ],
    warning:
      "Yosh chegarasiga yetmasdan o'tkazilgan diniy " +
      "marosim nikoh hisoblanmaydi va hech qanday " +
      "huquq bermaydi — na mulk, na meros, na ta'minot.",
    lawRefs: [
      { code: "OK", article: "15" },
      { code: "OK", article: "13" },
    ],
  },

  /* ── 3 ─────────────────────────────────────────────────────── */
  {
    heading: "Nikoh yoshiga yetmasdan tuzilgan nikoh",
    text:
      "Agar nikoh yosh chegarasi buzilgan holda " +
      "tuzilgan bo'lsa, u HAQIQIY EMAS deb topilishi " +
      "mumkin. Bu shunchaki jarima emas — nikoh " +
      "boshidanoq bo'lmagan deb hisoblanadi.\n\n" +
      "Lekin qonun bu yerda mexanik ishlamaydi. " +
      "Sud vaziyatni baholaydi: agar nikohni haqiqiy " +
      "emas deb topish voyaga yetmagan tomonning " +
      "manfaatlariga zid bo'lsa yoki u nikohni davom " +
      "ettirishni xohlasa, sud boshqacha qaror " +
      "chiqarishi mumkin.\n\n" +
      "Bu mantiq muhim: qonunning maqsadi yosh " +
      "tomonni JAZOLASH emas, uni HIMOYA QILISH. " +
      "Shuning uchun natija har doim shu tomonning " +
      "manfaatiga qarab hal qilinadi.\n\n" +
      "Amalda bunday holatlar ko'pincha diniy " +
      "marosim bilan boshlangan munosabatlarda " +
      "uchraydi va yillar o'tib, mulk yoki bola " +
      "masalasi ko'tarilganda yuzaga chiqadi.",
    example:
      "Nikoh yoshga yetmasdan tuzilgan, oradan " +
      "vaqt o'tib bola tug'ilgan. Endi nikohni " +
      "haqiqiy emas deb topish ona va bolani " +
      "himoyasiz qoldirishi mumkin. Sud aynan " +
      "shuni hisobga oladi — bolaning huquqlari " +
      "esa har qanday holatda saqlanib qoladi.",
    keyPoints: [
      "Yosh chegarasi buzilgan nikoh haqiqiy emas deb topilishi mumkin",
      "Sud voyaga yetmagan tomon manfaatini hisobga oladi",
      "Maqsad — yosh tomonni jazolash emas, himoya qilish",
      "Bolaning huquqlari har qanday holatda saqlanadi",
    ],
    warning:
      "Nikoh haqiqiy emas deb topilsa, undan kelib " +
      "chiqadigan mulkiy himoya ham yo'qoladi. " +
      "Shuning uchun \"keyin rasmiylashtiramiz\" " +
      "degan yondashuv juda xavfli.",
    lawRefs: [
      { code: "OK", article: "51" },
      { code: "OK", article: "49" },
    ],
  },

  /* ── 4 ─────────────────────────────────────────────────────── */
  {
    heading: "Nikoh ixtiyoriy bo'lishi shart",
    text:
      "Nikohning ikkinchi asosiy sharti — " +
      "IXTIYORIYLIK. Bo'lajak er va xotin o'z " +
      "roziligini SHAXSAN bildirishi kerak.\n\n" +
      "\"Shaxsan\" so'zi bu yerda hal qiluvchi " +
      "ahamiyatga ega. Rozilikni ota-ona, aka-uka, " +
      "sovchi yoki boshqa vakil orqali berish " +
      "MUMKIN EMAS. FHDYo organi ikkala tomonni " +
      "ham ko'rishi va roziligini eshitishi shart.\n\n" +
      "Agar nikoh majburlash, aldov yoki tahdid " +
      "ostida tuzilgan bo'lsa, u haqiqiy emas deb " +
      "topilishi uchun asos bo'ladi. Majburlash " +
      "jismoniy bo'lishi shart emas — ruhiy bosim, " +
      "shantaj yoki qattiq ta'sir ham shunga kiradi.\n\n" +
      "Bu qoida ayniqsa muhim, chunki amalda " +
      "\"oilaning qaroriga qarshi chiqib bo'lmaydi\" " +
      "degan bosim ko'p uchraydi. Qonun nuqtai " +
      "nazaridan bunday nikoh himoyasiz.",
    example:
      "Qiz oilasining qattiq bosimi ostida nikohga " +
      "rozi bo'ldi. Keyinchalik u nikohni majburlab " +
      "tuzilgan deb sudda e'tiroz bildirishi mumkin. " +
      "Bunda dalil muhim: guvohlar, yozishmalar, " +
      "murojaatlar. Shuning uchun bosim bo'lganda " +
      "uni hujjatlashtirib borish kerak.",
    keyPoints: [
      "Rozilik shaxsan bildiriladi — vakil orqali bo'lmaydi",
      "Majburlab tuzilgan nikoh haqiqiy emas deb topilishi mumkin",
      "Majburlash jismoniy bo'lishi shart emas: ruhiy bosim ham hisoblanadi",
      "E'tiroz uchun dalil kerak — guvoh, yozishma, murojaat",
    ],
    warning:
      "Ro'yxatga olish paytida jim turish ham " +
      "rozilik hisoblanadi. Rozi bo'lmasangiz — " +
      "aynan o'sha yerda, ochiq aytishingiz kerak.",
    lawRefs: [
      { code: "OK", article: "14" },
      { code: "OK", article: "53" },
    ],
  },

  /* ── 5 ─────────────────────────────────────────────────────── */
  {
    heading: "Nikohga monelik qiladigan holatlar",
    text:
      "Yosh va ixtiyoriylik shartlari bajarilgan " +
      "bo'lsa ham, ba'zi holatlarda nikoh tuzishga " +
      "YO'L QO'YILMAYDI. Bular \"monelik qiladigan " +
      "holatlar\" deb ataladi.\n\n" +
      "Asosiy to'rt guruh: (1) tomonlardan biri " +
      "allaqachon boshqa ro'yxatdan o'tgan nikohda " +
      "bo'lsa; (2) yaqin qarindoshlar o'rtasida; " +
      "(3) farzandlikka oluvchi va farzandlikka " +
      "olingan o'rtasida; (4) tomonlardan biri sud " +
      "tomonidan muomalaga layoqatsiz deb topilgan " +
      "bo'lsa.\n\n" +
      "Bu ro'yxat qat'iy va istisnosiz. FHDYo organi " +
      "bunday holatda nikohni qayd eta olmaydi, " +
      "qayd etilgan bo'lsa ham u keyinchalik haqiqiy " +
      "emas deb topiladi.\n\n" +
      "Sabab har birida boshqacha: birinchisi — bir " +
      "vaqtda ikkita nikoh bo'lishi mumkin emasligi; " +
      "ikkinchisi — sog'liq va axloqiy mulohazalar; " +
      "uchinchisi — bu munosabat huquqan ota-ona va " +
      "bola munosabatiga tenglashtirilgani.",
    example:
      "Erkak avvalgi nikohdan rasman ajrashmasdan " +
      "yangi nikoh tuzmoqchi. FHDYo organi arizani " +
      "rad etadi. Agar u ajrashganini yashirib " +
      "nikoh qayd ettirgan bo'lsa ham, bu nikoh " +
      "keyinchalik haqiqiy emas deb topiladi va " +
      "undan kelib chiqqan mulkiy da'volar barbod " +
      "bo'ladi.",
    keyPoints: [
      "Mavjud ro'yxatdan o'tgan nikoh yangi nikohga to'sqinlik qiladi",
      "Yaqin qarindoshlar o'rtasida nikoh tuzilmaydi",
      "Farzandlikka oluvchi va olingan o'rtasida ham taqiq amal qiladi",
      "Muomalaga layoqatsiz deb topilgan shaxs nikoh tuza olmaydi",
    ],
    warning:
      "Avvalgi nikohdan \"amalda ajrashib ketgan\" " +
      "bo'lish yetarli emas. Ajralish RASMAN qayd " +
      "etilmaguncha yangi nikoh tuzib bo'lmaydi.",
    lawRefs: [
      { code: "OK", article: "16" },
      { code: "OK", article: "52" },
    ],
  },

  /* ── 6 ─────────────────────────────────────────────────────── */
  {
    heading: "Qarindoshlik darajalari va nikoh",
    text:
      "Oldingi mavzuda \"yaqin qarindoshlik\" nikohga " +
      "to'sqinlik qilishini ko'rdik. Endi bu " +
      "tushuncha aniq nimani anglatishini ko'rib " +
      "chiqamiz — chunki amalda bu ko'p chalkashlik " +
      "tug'diradi.\n\n" +
      "Qonun qarindoshlikni ikki turga ajratadi: " +
      "YOT ARALASHMAGAN qarindoshlik (bir ota va bir " +
      "onadan bo'lgan) va YOT ARALASHGAN qarindoshlik " +
      "(faqat bir ota yoki faqat bir onadan bo'lgan). " +
      "Nikoh taqiqi ikkalasiga ham tegishli.\n\n" +
      "Alohida tushuncha — QAYIN-BO'YINCHILIK va " +
      "QUDA-ANDACHILIK. Bu qon-qarindoshlik emas, " +
      "nikoh orqali paydo bo'ladigan yaqinlik " +
      "(qaynona, kelin, kuyov va h.k.). Ularga " +
      "nisbatan qoidalar boshqacha.\n\n" +
      "Bu farqni bilish muhim, chunki oilaviy " +
      "an'analarda \"qarindosh\" so'zi juda keng " +
      "ishlatiladi, qonunda esa uning aniq huquqiy " +
      "chegarasi bor.",
    example:
      "Amakivachcha va ammavachchalar kundalik " +
      "tilda \"yaqin qarindosh\" deb ataladi, lekin " +
      "qonundagi taqiq ro'yxati aniq belgilangan " +
      "doiraga tegishli. Shuning uchun har qanday " +
      "shubhali holatda FHDYo organidan yozma " +
      "tushuntirish olish eng ishonchli yo'l.",
    keyPoints: [
      "Qarindoshlik yot aralashgan va aralashmagan turlarga bo'linadi",
      "Nikoh taqiqi ikkala turga ham tegishli",
      "Qayin-bo'yinchilik qon-qarindoshlik emas — qoidalari boshqacha",
      "Shubha bo'lsa FHDYo organidan tushuntirish olish kerak",
    ],
    warning:
      "\"Uzoq qarindosh\" degan tushuncha qonunda " +
      "yo'q. Muhimi — qarindoshlik DARAJASI; uni " +
      "taxmin qilmasdan aniqlashtirib olish kerak.",
    lawRefs: [
      { code: "OK", article: "57" },
      { code: "OK", article: "58" },
      { code: "OK", article: "59" },
    ],
  },

  /* ── 7 ─────────────────────────────────────────────────────── */
  {
    heading: "Nikohdan oldin tibbiy ko'rik",
    text:
      "Nikohlanuvchi shaxslar davlat sog'liqni " +
      "saqlash muassasalarida tibbiy ko'rikdan " +
      "o'tkaziladi. Bu bo'lajak oila va bolalar " +
      "sog'lig'i uchun nazarda tutilgan.\n\n" +
      "Ko'rikning maqsadi kimnidir nikohdan " +
      "chetlatish EMAS. Maqsad — tomonlar " +
      "bir-birining sog'lig'i haqida xabardor " +
      "bo'lishi va kelajakdagi bolalar uchun " +
      "mumkin bo'lgan xavflarni oldindan " +
      "bilishi.\n\n" +
      "Muhim jihat: ko'rik natijasi TIBBIY SIR " +
      "hisoblanadi. U faqat ko'rikdan o'tgan " +
      "shaxsning roziligi bilan boshqa tomonga " +
      "aytilishi mumkin.\n\n" +
      "Amaliy tomondan bu bosqichni " +
      "rasmiyatchilik deb qarash keng tarqalgan " +
      "xato. Aslida u nikohdan keyin yuzaga " +
      "chiqadigan eng og'ir muammolarning bir " +
      "qismini oldindan hal qilish imkonini beradi.",
    example:
      "Juftlik ko'rikdan o'tdi va biri irsiy " +
      "kasallik tashuvchisi ekani aniqlandi. " +
      "Bu nikohga to'sqinlik qilmaydi, lekin " +
      "ikkalasi ham vaziyatni bilgan holda qaror " +
      "qabul qiladi va kerak bo'lsa mutaxassis " +
      "kuzatuvida bo'ladi.",
    keyPoints: [
      "Ko'rik davlat sog'liqni saqlash muassasalarida o'tkaziladi",
      "Maqsad — chetlatish emas, xabardor qilish",
      "Natija tibbiy sir hisoblanadi",
      "Ma'lumot boshqa tomonga faqat rozilik bilan aytiladi",
    ],
    warning:
      "Sog'liq haqidagi ma'lumotni ataylab " +
      "yashirish keyinchalik nikohni haqiqiy emas " +
      "deb topish uchun asos bo'lishi mumkin.",
    lawRefs: [{ code: "OK", article: "17" }],
  },

  /* ── 8 ─────────────────────────────────────────────────────── */
  {
    heading: "Nikohni qayd etish: ariza, hujjatlar va muddat",
    text:
      "Nikoh FHDYo (fuqarolik holati dalolatnomalarini " +
      "qayd etish) organlarida tuziladi. Diniy marosim " +
      "shaxsning shaxsiy ishi, lekin u davlat " +
      "ro'yxatining O'RNINI BOSMAYDI.\n\n" +
      "Jarayon oddiy: ikkala tomon birgalikda ariza " +
      "beradi, kerakli hujjatlarni taqdim etadi va " +
      "belgilangan muddat o'tgach nikoh qayd " +
      "etiladi. Kutish muddati tasodifiy emas — u " +
      "qarorni o'ylab ko'rish uchun beriladi.\n\n" +
      "Odatda talab qilinadigan hujjatlar: shaxsni " +
      "tasdiqlovchi hujjat, avvalgi nikoh tugaganini " +
      "tasdiqlovchi hujjat (agar bo'lgan bo'lsa) va " +
      "tibbiy ko'rik bo'yicha ma'lumot. Aniq ro'yxat " +
      "quyidagi qonun matnida.\n\n" +
      "Alohida hollarda (masalan uzrli sabab bo'lganda) " +
      "qayd etish muddati o'zgartirilishi yoki nikoh " +
      "boshqa joyda qayd etilishi mumkin.",
    example:
      "Juftlik ariza berdi, lekin biri chet elga " +
      "uzoq muddatga ketishi kerak edi. Bunday " +
      "uzrli holatda muddatni qisqartirish masalasi " +
      "ko'riladi — lekin bu avtomatik emas, ariza " +
      "va asos talab qilinadi.",
    keyPoints: [
      "Nikoh faqat FHDYo organida rasmiy tuziladi",
      "Ariza ikkala tomon tomonidan birgalikda beriladi",
      "Kutish muddati qarorni o'ylab ko'rish uchun berilgan",
      "Uzrli sabab bo'lganda muddat va joy o'zgarishi mumkin",
    ],
    warning:
      "Faqat diniy marosim o'tkazilgan munosabatda " +
      "umumiy mulk rejimi, ta'minot olish va meros " +
      "huquqi UMUMAN yuzaga kelmaydi.",
    lawRefs: [
      { code: "OK", article: "13" },
      { code: "OK", article: "212" },
      { code: "OK", article: "213" },
    ],
  },
];

module.exports = { SECTIONS };
