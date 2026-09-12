"use strict";
/**
 * MEHNAT HUQUQI — 3-QISM: ISH VAQTI VA DAM OLISH (15–22-mavzular)
 *
 * Ketma-ketlik: normal ish vaqti → uning istisnolari (qisqartirilgan,
 * to'liqsiz, tungi, qo'shimcha ish) → dam olish kunlari → ta'til
 * (turlari, davomiyligi, boshqarilishi).
 */

const SECTIONS = [
  /* ── 15 ────────────────────────────────────────────────────── */
  {
    heading: "Ish vaqti: normal davomiylik",
    text:
      "Ish vaqti — xodim mehnat " +
      "majburiyatlarini bajarishi lozim " +
      "bo'lgan vaqt. Qonun uning ENG KO'P " +
      "davomiyligini belgilaydi.\n\n" +
      "Bu chegara xodim uchun kafolat: " +
      "undan ortiq ishlatish faqat qonunda " +
      "nazarda tutilgan tartibda va " +
      "qo'shimcha haq to'lash bilan mumkin.\n\n" +
      "Ish vaqti REJIMI esa boshqa tushuncha " +
      "— u ish qachon boshlanishi va " +
      "tugashini, tanaffuslarni, smenalarni " +
      "belgilaydi. Rejim ichki hujjatlar " +
      "yoki shartnoma bilan o'rnatiladi.\n\n" +
      "⚠️ Ish beruvchining muhim majburiyati " +
      "— ish vaqtini HISOBGA OLISHNI tashkil " +
      "etish. Hisob yuritilmasa, xodim " +
      "qancha ishlaganini isbotlay olmaydi " +
      "va qo'shimcha ish uchun haq talab " +
      "qila olmaydi.",
    example:
      "Xodim har kuni ikki soat ortiqcha " +
      "qolyapti, lekin tabel yuritilmayapti. " +
      "Nizo chiqqanda u ortiqcha ishlaganini " +
      "isbotlay olmaydi. Shuning uchun o'z " +
      "hisobingizni yuritish muhim.",
    keyPoints: [
      "Ish vaqtining eng ko'p davomiyligi qonunda belgilangan",
      "Undan ortiq ishlash alohida tartib va haq talab qiladi",
      "Ish vaqti rejimi ichki hujjatlarda belgilanadi",
      "Ish vaqtini hisobga olish — ish beruvchining majburiyati",
    ],
    warning:
      "Kirish-chiqish vaqtingizni o'zingiz " +
      "ham yozib boring. Bu keyinchalik " +
      "yagona dalilingiz bo'lib qolishi " +
      "mumkin.",
    lawRefs: [
      { code: "MK", article: "181" },
      { code: "MK", article: "182" },
      { code: "MK", article: "191" },
      { code: "MK", article: "200" },
    ],
  },

  /* ── 16 ────────────────────────────────────────────────────── */
  {
    heading: "Qisqartirilgan va to'liqsiz ish vaqti",
    text:
      "Ikkita o'xshash, lekin BUTUNLAY " +
      "boshqa tushuncha bor va ularni " +
      "chalkashtirish qimmatga tushadi.\n\n" +
      "QISQARTIRILGAN ish vaqti — qonun " +
      "bilan belgilanadi va ish haqi TO'LIQ " +
      "to'lanadi. U ayrim toifadagi " +
      "xodimlarga beriladi: voyaga " +
      "yetmaganlar, nogironligi bo'lgan " +
      "shaxslar, zararli sharoitda " +
      "ishlovchilar, yuqori ruhiy zo'riqish " +
      "bilan bog'liq ish bajaruvchilar.\n\n" +
      "TO'LIQSIZ ish vaqti — tomonlarning " +
      "KELISHUVI bilan belgilanadi va ish " +
      "haqi ishlangan vaqtga MUTANOSIB " +
      "to'lanadi.\n\n" +
      "Ya'ni birinchisida siz kamroq " +
      "ishlab, to'liq haq olasiz; " +
      "ikkinchisida kamroq ishlab, kamroq " +
      "olasiz.\n\n" +
      "Muhim: to'liqsiz ish vaqti ta'til " +
      "davomiyligini va ish stajini " +
      "kamaytirmaydi.",
    example:
      "Ish beruvchi voyaga yetmagan " +
      "xodimga qisqartirilgan ish vaqti " +
      "belgiladi, lekin ish haqini " +
      "mutanosib kamaytirdi. Bu xato: " +
      "qisqartirilgan ish vaqtida haq " +
      "to'liq to'lanadi.",
    keyPoints: [
      "Qisqartirilgan ish vaqti — qonun bo'yicha, haq to'liq",
      "To'liqsiz ish vaqti — kelishuv bo'yicha, haq mutanosib",
      "Qisqartirilgan vaqt ayrim toifalarga majburiy beriladi",
      "To'liqsiz ish vaqti ta'til va stajni kamaytirmaydi",
    ],
    warning:
      "\"To'liqsiz stavka\" ga rozi " +
      "bo'lishdan oldin hisoblang: bu " +
      "ish haqingizni bevosita " +
      "kamaytiradi.",
    lawRefs: [
      { code: "MK", article: "183" },
      { code: "MK", article: "184" },
      { code: "MK", article: "186" },
      { code: "MK", article: "258" },
    ],
  },

  /* ── 17 ────────────────────────────────────────────────────── */
  {
    heading: "Tungi ish",
    text:
      "Tungi vaqtda ishlash alohida " +
      "tartibga solinadi, chunki u " +
      "sog'liqqa ko'proq yuk beradi.\n\n" +
      "Ikki asosiy qoida bor. Birinchisi " +
      "— tungi vaqtdagi ish davomiyligi " +
      "odatda QISQARTIRILADI. Ikkinchisi " +
      "— tungi mehnat uchun OSHIRILGAN " +
      "miqdorda haq to'lanadi.\n\n" +
      "Alohida himoya: ayrim toifadagi " +
      "xodimlarni tungi ishga jalb etish " +
      "TAQIQLANADI yoki faqat ularning " +
      "roziligi bilan mumkin. Bunga " +
      "homilador ayollar, kichik yoshli " +
      "bolasi bor shaxslar, voyaga " +
      "yetmaganlar va nogironligi bo'lgan " +
      "xodimlar kiradi.\n\n" +
      "Bu toifalar uchun rozilik ham " +
      "YOZMA bo'lishi va ular tungi " +
      "ishdan bosh tortish huquqiga ega " +
      "ekanidan xabardor qilinishi kerak.",
    example:
      "Kichik bolasi bor xodim tungi " +
      "smenaga qo'yildi. Uning yozma " +
      "roziligi olinmagan bo'lsa, bu " +
      "qonunga zid va u bosh tortish " +
      "huquqiga ega.",
    keyPoints: [
      "Tungi ish davomiyligi qisqartiriladi",
      "Tungi mehnat uchun oshirilgan haq to'lanadi",
      "Ayrim toifalarni tungi ishga jalb etish taqiqlanadi",
      "Rozilik yozma bo'lishi va xabardor qilish shart",
    ],
    warning:
      "Tungi ish uchun oshirilgan haq " +
      "to'lanmayotgan bo'lsa, bu ish " +
      "haqini to'liq to'lamaslik " +
      "hisoblanadi.",
    lawRefs: [
      { code: "MK", article: "188" },
      { code: "MK", article: "264" },
      { code: "MK", article: "396" },
      { code: "MK", article: "428" },
    ],
  },

  /* ── 18 ────────────────────────────────────────────────────── */
  {
    heading: "Ish vaqtidan tashqari ish",
    text:
      "Belgilangan ish vaqtidan ortiq " +
      "ishlash — bu ish vaqtidan tashqari " +
      "ish va u ALOHIDA qoidalarga " +
      "bo'ysunadi.\n\n" +
      "Birinchi qoida: bunday ishga jalb " +
      "etish odatda xodimning ROZILIGI " +
      "bilan amalga oshiriladi. Qonunda " +
      "istisno hollar ham belgilangan " +
      "(masalan favqulodda vaziyatlar).\n\n" +
      "Ikkinchi qoida: uning ENG KO'P " +
      "davomiyligi cheklangan — kunlik " +
      "va yillik chegaralar bor. Bu " +
      "chegaralarni oshirish qonunga zid.\n\n" +
      "Uchinchi qoida: ish vaqtidan " +
      "tashqari ish OSHIRILGAN miqdorda " +
      "to'lanadi.\n\n" +
      "⚠️ Ko'p uchraydigan xato: ish " +
      "beruvchi qo'shimcha ish uchun pul " +
      "o'rniga \"dam olish kuni\" taklif " +
      "qiladi. Bunday almashtirish faqat " +
      "qonunda nazarda tutilgan tartibda " +
      "va xodimning roziligi bilan " +
      "mumkin.",
    example:
      "Xodim oyiga muntazam 40 soat " +
      "ortiqcha ishlaydi, haq esa oddiy " +
      "miqdorda to'lanadi. Bu ikki " +
      "buzilish: chegara oshirilgan va " +
      "oshirilgan haq to'lanmagan.",
    keyPoints: [
      "Jalb etish odatda xodimning roziligi bilan bo'ladi",
      "Kunlik va yillik chegaralar belgilangan",
      "Oshirilgan miqdorda haq to'lanadi",
      "Pul o'rniga dam olish faqat rozilik bilan almashtiriladi",
    ],
    warning:
      "\"Bizda hamma shunday ishlaydi\" " +
      "degan dalil qonuniy asos emas — " +
      "chegaralar har bir xodim uchun " +
      "alohida amal qiladi.",
    lawRefs: [
      { code: "MK", article: "189" },
      { code: "MK", article: "190" },
      { code: "MK", article: "262" },
    ],
  },

  /* ── 19 ────────────────────────────────────────────────────── */
  {
    heading: "Dam olish kunlari va bayramlar",
    text:
      "Dam olish vaqti — xodim mehnat " +
      "majburiyatlaridan ozod bo'lgan va " +
      "uni o'z ixtiyoricha ishlatishi " +
      "mumkin bo'lgan vaqt.\n\n" +
      "Uning turlari: ish kuni davomidagi " +
      "tanaffuslar (dam olish va " +
      "ovqatlanish uchun); har kungi " +
      "(smenalar oralig'idagi) dam olish; " +
      "har haftalik uzluksiz dam olish; " +
      "ishlanmaydigan bayram kunlari; " +
      "ta'tillar.\n\n" +
      "⚠️ ASOSIY QOIDA: dam olish " +
      "kunlarida va bayram kunlarida " +
      "ishlash TAQIQLANADI. Qonun faqat " +
      "alohida hollarni istisno qiladi " +
      "va ular ro'yxat bilan " +
      "belgilangan.\n\n" +
      "Bunday kunlarda ishlatish " +
      "rasmiylashtirilishi (buyruq) va " +
      "OSHIRILGAN miqdorda to'lanishi " +
      "kerak. Xodimning roziligi ham " +
      "talab qilinadi — istisno hollardan " +
      "tashqari.",
    example:
      "Xodim bayram kuni chaqirildi va " +
      "oddiy kunlik haq to'landi, buyruq " +
      "ham chiqarilmadi. Ikki qoida " +
      "buzilgan: rasmiylashtirish va " +
      "oshirilgan haq.",
    keyPoints: [
      "Dam olish va bayram kunlarida ishlash taqiqlanadi",
      "Istisno hollar qonunda ro'yxat bilan berilgan",
      "Ishlatish buyruq bilan rasmiylashtiriladi",
      "Haq oshirilgan miqdorda to'lanadi",
    ],
    warning:
      "Dam olish huquqini cheklaydigan " +
      "ichki qoidalar yoki shartnoma " +
      "shartlari HAQIQIY EMAS deb " +
      "hisoblanadi.",
    lawRefs: [
      { code: "MK", article: "201" },
      { code: "MK", article: "207" },
      { code: "MK", article: "209" },
      { code: "MK", article: "263" },
    ],
  },

  /* ── 20 ────────────────────────────────────────────────────── */
  {
    heading: "Ta'til turlari va olish huquqi",
    text:
      "Ta'til — dam olish vaqtining eng " +
      "muhim shakli va u KAFOLATLANGAN " +
      "huquq.\n\n" +
      "Ta'tillar ikki katta guruhga " +
      "bo'linadi. MEHNAT ta'tillari: " +
      "har yilgi asosiy eng kam ta'til, " +
      "har yilgi asosiy uzaytirilgan " +
      "ta'til (ayrim toifalarga) va " +
      "har yilgi qo'shimcha ta'tillar " +
      "(zararli sharoit, uzoq staj va " +
      "boshqa asoslarga ko'ra).\n\n" +
      "IJTIMOIY ta'tillar: homiladorlik " +
      "va tug'ruq, bolani parvarish " +
      "qilish, o'qish bilan bog'liq, " +
      "ijodiy va boshqalar.\n\n" +
      "⚠️ ENG MUHIM KAFOLAT: ta'tilda " +
      "bo'lgan davrda xodimning ISH " +
      "O'RNI (lavozimi) SAQLANADI. Ta'til " +
      "davrida ish beruvchi tashabbusi " +
      "bilan ishdan bo'shatish " +
      "taqiqlanadi.\n\n" +
      "Ta'til huquqini cheklaydigan " +
      "har qanday hujjat qoidasi " +
      "haqiqiy emas.",
    example:
      "Xodim ta'tilda ekanida ish " +
      "beruvchi uni ishdan bo'shatish " +
      "buyrug'ini chiqardi. Bu qonunga " +
      "zid — ta'til davrida ish o'rni " +
      "saqlanadi.",
    keyPoints: [
      "Ta'tillar mehnat va ijtimoiy turlarga bo'linadi",
      "Har yilgi asosiy ta'til hammaga beriladi",
      "Ta'til davrida ish o'rni va lavozim saqlanadi",
      "Ta'til huquqini cheklovchi shartlar haqiqiy emas",
    ],
    warning:
      "\"Ta'tilga chiqsangiz o'rningizga " +
      "boshqa odam olamiz\" degan tahdid " +
      "huquqiy asosga ega emas.",
    lawRefs: [
      { code: "MK", article: "213" },
      { code: "MK", article: "214" },
      { code: "MK", article: "215" },
      { code: "MK", article: "203" },
    ],
  },

  /* ── 21 ────────────────────────────────────────────────────── */
  {
    heading: "Yillik ta'til: davomiyligi va navbati",
    text:
      "Har yilgi asosiy mehnat ta'tilining " +
      "ENG KAM davomiyligi qonunda " +
      "belgilangan. Ish beruvchi undan " +
      "kam bera olmaydi, ko'p berishi " +
      "esa mumkin.\n\n" +
      "Ayrim toifadagi xodimlarga " +
      "UZAYTIRILGAN ta'til beriladi, " +
      "shuningdek qo'shimcha ta'tillar " +
      "ham hisoblanadi. Ular asosiy " +
      "ta'tilga QO'SHILADI.\n\n" +
      "BIRINCHI ish yili uchun ta'til " +
      "olish alohida tartibga ega: u " +
      "belgilangan vaqt ishlagandan " +
      "keyin beriladi. Ikkinchi va " +
      "keyingi yillar uchun esa ta'til " +
      "navbat jadvaliga muvofiq " +
      "istalgan paytda berilishi " +
      "mumkin.\n\n" +
      "Ta'til davri uchun O'RTACHA ish " +
      "haqi to'lanadi va u ta'til " +
      "boshlanishidan oldin " +
      "beriladi.\n\n" +
      "Ayrim toifalarga (homilador " +
      "ayollar, bolali xodimlar) ta'til " +
      "navbatini tanlashda imtiyoz " +
      "beriladi.",
    example:
      "Xodim yarim yil ishlagach ta'til " +
      "so'radi. Birinchi ish yilida " +
      "ta'til belgilangan vaqt " +
      "ishlagandan keyin beriladi — " +
      "shuning uchun avval shu shartni " +
      "tekshirish kerak.",
    keyPoints: [
      "Eng kam davomiylik qonunda belgilangan",
      "Qo'shimcha ta'tillar asosiysiga qo'shiladi",
      "Birinchi ish yilida alohida tartib amal qiladi",
      "Ta'til puli ta'til boshlanishidan oldin to'lanadi",
    ],
    warning:
      "Ta'til pulini ta'tildan KEYIN " +
      "to'lash qonunga zid — u oldindan " +
      "berilishi kerak.",
    lawRefs: [
      { code: "MK", article: "217" },
      { code: "MK", article: "218" },
      { code: "MK", article: "227" },
      { code: "MK", article: "233" },
    ],
  },

  /* ── 22 ────────────────────────────────────────────────────── */
  {
    heading: "Ta'tilni bo'lish, ko'chirish va chaqirib olish",
    text:
      "Ta'til bilan bog'liq uch amaliy " +
      "vaziyat bor va har birining o'z " +
      "qoidasi mavjud.\n\n" +
      "BO'LISH. Ta'tilni qismlarga " +
      "bo'lish mumkin, lekin bir qismi " +
      "qonunda belgilangan eng kam " +
      "davomiylikdan kam bo'lmasligi " +
      "kerak. Bo'lish tomonlarning " +
      "kelishuvi bilan amalga " +
      "oshiriladi.\n\n" +
      "KO'CHIRISH va UZAYTIRISH. Ta'til " +
      "davrida xodim kasal bo'lsa yoki " +
      "qonunda nazarda tutilgan boshqa " +
      "holat yuzaga kelsa, ta'til " +
      "uzaytiriladi yoki boshqa " +
      "muddatga ko'chiriladi.\n\n" +
      "CHAQIRIB OLISH. Xodimni ta'tildan " +
      "chaqirib olish faqat uning " +
      "ROZILIGI bilan mumkin. " +
      "Foydalanilmagan qism keyinroq " +
      "beriladi.\n\n" +
      "PUL BILAN ALMASHTIRISH esa " +
      "cheklangan: ta'tilning faqat " +
      "ma'lum qismini kompensatsiya " +
      "bilan almashtirish mumkin — " +
      "ta'tilni butunlay pulga " +
      "aylantirib bo'lmaydi.",
    example:
      "Xodim ta'tilda kasal bo'ldi va " +
      "kasallik varaqasi oldi. Ta'til " +
      "shu kunlarga uzaytirilishi yoki " +
      "boshqa muddatga ko'chirilishi " +
      "kerak — kunlar shunchaki " +
      "yo'qolib ketmaydi.",
    keyPoints: [
      "Ta'tilni bo'lish mumkin, lekin bir qismi eng kam miqdordan kam bo'lmaydi",
      "Kasallik ta'tilni uzaytiradi yoki ko'chiradi",
      "Chaqirib olish faqat xodimning roziligi bilan",
      "Ta'tilni to'liq pul bilan almashtirib bo'lmaydi",
    ],
    warning:
      "Ta'tildan chaqirib olishga rozilik " +
      "YOZMA bo'lsin — og'zaki rozilik " +
      "keyinchalik inkor qilinishi " +
      "mumkin.",
    lawRefs: [
      { code: "MK", article: "229" },
      { code: "MK", article: "231" },
      { code: "MK", article: "232" },
      { code: "MK", article: "234" },
    ],
  },
];

module.exports = { SECTIONS };
