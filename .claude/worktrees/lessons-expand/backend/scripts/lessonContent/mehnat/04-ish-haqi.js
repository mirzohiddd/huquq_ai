"use strict";
/**
 * MEHNAT HUQUQI — 4-QISM: ISH HAQI VA MEHNAT SHARTLARI (23–34-mavzular)
 *
 * Ketma-ketlik: ish haqi nima → eng kam miqdor → tuzilishi →
 * to'lash tartibi → o'rtacha ish haqi → ushlab qolish → qo'shimcha
 * to'lovlar → kechiktirilsa nima bo'ladi → mehnat shartlarining
 * o'zgarishi (o'tkazish, chetlashtirish).
 */

const SECTIONS = [
  /* ── 23 ────────────────────────────────────────────────────── */
  {
    heading: "Ish haqi tushunchasi va asosiy kafolatlar",
    text:
      "Ish haqi — xodimning bajargan " +
      "mehnati uchun oladigan haqi. Bu " +
      "mehnat munosabatining markaziy " +
      "elementi va qonun uni alohida " +
      "himoya qiladi.\n\n" +
      "Asosiy kafolatlar: mehnatga haq " +
      "to'lashning eng kam miqdori " +
      "belgilanadi; ish haqi o'z vaqtida " +
      "va to'liq to'lanadi; undan ushlab " +
      "qolish cheklanadi; kamsitish " +
      "taqiqlanadi — teng qiymatdagi " +
      "mehnat uchun teng haq to'lanishi " +
      "kerak.\n\n" +
      "Muhim tamoyil: ish haqi miqdori " +
      "xodimning malakasi, bajarilgan " +
      "ishning murakkabligi, miqdori va " +
      "sifatiga bog'liq bo'lib, ENG KO'P " +
      "miqdori bilan cheklanmaydi.\n\n" +
      "Ya'ni yuqori chegara yo'q, faqat " +
      "pastki chegara bor — bu xodim " +
      "foydasiga ishlaydigan qoida.",
    example:
      "Bir xil lavozimda, bir xil ish " +
      "bajarayotgan ikki xodimga turli " +
      "miqdorda haq to'lanyapti va " +
      "farqning ishga oid asosi yo'q. " +
      "Bu kamsitish hisoblanadi.",
    keyPoints: [
      "Ish haqi — mehnat munosabatining markaziy elementi",
      "Eng kam miqdor belgilanadi, eng ko'p miqdor cheklanmaydi",
      "Teng qiymatdagi mehnat uchun teng haq to'lanadi",
      "O'z vaqtida va to'liq to'lash — kafolat",
    ],
    warning:
      "Ish haqini \"konvert\"da olish " +
      "sizni himoyasiz qoldiradi: staj, " +
      "pensiya va nizoda isbot — " +
      "hammasi rasmiy miqdordan " +
      "hisoblanadi.",
    lawRefs: [
      { code: "MK", article: "243" },
      { code: "MK", article: "244" },
      { code: "MK", article: "4" },
    ],
  },

  /* ── 24 ────────────────────────────────────────────────────── */
  {
    heading: "Eng kam ish haqi",
    text:
      "Mehnatga haq to'lashning ENG KAM " +
      "miqdori davlat tomonidan " +
      "belgilanadi. Bu — barcha ish " +
      "beruvchilar uchun majburiy " +
      "chegara.\n\n" +
      "Qoida oddiy: to'liq ish vaqti " +
      "normasini ishlab bergan va mehnat " +
      "majburiyatlarini bajargan " +
      "xodimning ish haqi belgilangan eng " +
      "kam miqdordan PAST bo'lishi mumkin " +
      "emas.\n\n" +
      "⚠️ Muhim aniqlik: bu chegara TO'LIQ " +
      "norma ishlab berilganda qo'llaniladi. " +
      "To'liqsiz ish vaqtida ishlayotgan " +
      "xodimga haq ishlangan vaqtga " +
      "mutanosib to'lanadi.\n\n" +
      "Aniq miqdorlar va ularni belgilash " +
      "tartibi qonun matnida va tegishli " +
      "hujjatlarda. Ular vaqti-vaqti " +
      "bilan qayta ko'rib chiqiladi, " +
      "shuning uchun joriy raqamni har " +
      "doim tekshirib olish kerak.",
    example:
      "Xodim to'liq oy ishladi, barcha " +
      "vazifalarni bajardi, lekin ish " +
      "haqi belgilangan eng kam miqdordan " +
      "past. Bu bevosita qonun buzilishi " +
      "va inspeksiyaga murojaat uchun " +
      "asos.",
    keyPoints: [
      "Eng kam miqdor davlat tomonidan belgilanadi",
      "U barcha ish beruvchilar uchun majburiy",
      "Chegara to'liq norma ishlab berilganda qo'llaniladi",
      "To'liqsiz ish vaqtida haq mutanosib to'lanadi",
    ],
    warning:
      "Eng kam miqdor vaqti-vaqti bilan " +
      "o'zgaradi — joriy qiymatni " +
      "tekshirmasdan hisob-kitob " +
      "qilmang.",
    lawRefs: [
      { code: "MK", article: "245" },
      { code: "MK", article: "246" },
    ],
  },

  /* ── 25 ────────────────────────────────────────────────────── */
  {
    heading: "Ish haqining tuzilishi",
    text:
      "\"Ish haqi\" bitta raqam emas — u " +
      "bir necha qismdan iborat va bu " +
      "farqni bilish muhim.\n\n" +
      "Odatda uch qism ajratiladi. " +
      "ASOSIY qism — tarif stavkasi yoki " +
      "lavozim maoshi. Bu barqaror va " +
      "kafolatlangan qism.\n\n" +
      "KOMPENSATSIYA xarakteridagi " +
      "to'lovlar — maxsus sharoitlar " +
      "uchun (zararli mehnat, tungi ish, " +
      "ish vaqtidan tashqari ish).\n\n" +
      "RAG'BATLANTIRISH to'lovlari — " +
      "mukofot, ustama, qo'shimcha " +
      "to'lovlar. Ular odatda ma'lum " +
      "shartlar bajarilganda beriladi.\n\n" +
      "⚠️ Amaliy ahamiyati: mukofot " +
      "ko'pincha KAFOLATLANMAGAN qism " +
      "bo'ladi. Agar ish haqingizning " +
      "katta qismi mukofotdan iborat " +
      "bo'lsa, ish beruvchi uni bir " +
      "tomonlama kamaytirishi mumkin. " +
      "Shuning uchun shartnomada asosiy " +
      "qismning aniq miqdori muhim.",
    example:
      "Xodimga \"maosh 2 million\" deb " +
      "aytilgan, lekin shartnomada " +
      "asosiy qism juda kam, qolgani " +
      "mukofot. Ish beruvchi mukofotni " +
      "to'xtatdi va daromad keskin " +
      "tushdi — shartnoma esa buzilmadi.",
    keyPoints: [
      "Ish haqi asosiy, kompensatsiya va rag'batlantirish qismlaridan iborat",
      "Asosiy qism barqaror va kafolatlangan",
      "Mukofot ko'pincha kafolatlanmagan bo'ladi",
      "Shartnomada asosiy qismning aniq miqdori muhim",
    ],
    warning:
      "Shartnoma imzolashda \"jami " +
      "qancha\" emas, \"ASOSIY qism " +
      "qancha\" degan savolni bering.",
    lawRefs: [
      { code: "MK", article: "248" },
      { code: "MK", article: "249" },
      { code: "MK", article: "250" },
    ],
  },

  /* ── 26 ────────────────────────────────────────────────────── */
  {
    heading: "Ish haqini to'lash muddati va shakli",
    text:
      "Ish haqi qonunda belgilangan " +
      "muddatlarda muntazam to'lanadi. " +
      "Muddat ichki hujjatlarda yoki " +
      "shartnomada aniq ko'rsatilishi " +
      "kerak.\n\n" +
      "To'lash SHAKLI: ish haqi pul " +
      "shaklida to'lanadi. Natura " +
      "shaklidagi to'lov faqat qonunda " +
      "nazarda tutilgan doirada va " +
      "cheklangan ulushda mumkin.\n\n" +
      "To'lash JOYI ham tartibga " +
      "solingan — odatda ish joyida " +
      "yoki xodimning bank hisob " +
      "raqamiga o'tkazish yo'li bilan.\n\n" +
      "Alohida holat — XODIM VAFOT " +
      "ETGANDA olinmagan ish haqi. U " +
      "yo'qolmaydi: qonunda belgilangan " +
      "shaxslarga beriladi.\n\n" +
      "Shartnoma bekor qilinganda esa " +
      "hisob-kitob alohida, " +
      "qisqartirilgan muddatda amalga " +
      "oshiriladi — bu haqda keyingi " +
      "qismda batafsil.",
    example:
      "Ish beruvchi ish haqini oyiga bir " +
      "marta, kechikish bilan to'layapti " +
      "va aniq sana belgilanmagan. " +
      "Muddat ichki hujjatda aniq " +
      "belgilanishi shart — bu talab " +
      "qilish uchun asos.",
    keyPoints: [
      "To'lash muddati belgilangan va muntazam bo'lishi kerak",
      "Ish haqi pul shaklida to'lanadi",
      "Natura shaklidagi to'lov cheklangan",
      "Vafot etgan xodimning ish haqi qonunda belgilangan shaxslarga beriladi",
    ],
    warning:
      "To'lov sanasi shartnomada yoki " +
      "ichki hujjatda yo'q bo'lsa, " +
      "kechikishni isbotlash " +
      "qiyinlashadi — buni oldindan " +
      "aniqlashtiring.",
    lawRefs: [
      { code: "MK", article: "253" },
      { code: "MK", article: "256" },
      { code: "MK", article: "255" },
    ],
  },

  /* ── 27 ────────────────────────────────────────────────────── */
  {
    heading: "O'rtacha ish haqi va u qayerda ishlatiladi",
    text:
      "O'rtacha ish haqi — ko'p " +
      "hisob-kitoblarda ishlatiladigan " +
      "asosiy ko'rsatkich. Uni " +
      "tushunmasdan o'z to'lovlaringizni " +
      "tekshirib bo'lmaydi.\n\n" +
      "U quyidagi hollarda qo'llaniladi: " +
      "ta'til puli; ishdan bo'shash " +
      "nafaqasi; xizmat safari davri; " +
      "davlat va jamoat majburiyatlarini " +
      "bajarish davri; noqonuniy " +
      "bo'shatilganda majburiy " +
      "ishlamaslik davri uchun to'lov.\n\n" +
      "Hisoblash tartibi qonunda " +
      "belgilangan va u ma'lum davrdagi " +
      "haqiqiy to'lovlarga asoslanadi.\n\n" +
      "⚠️ Amaliy natija: agar ish " +
      "haqingizning bir qismi rasmiy " +
      "hisobga olinmagan bo'lsa, " +
      "o'rtacha ish haqi ham PAST " +
      "chiqadi. Ya'ni ta'til puli, " +
      "bo'shash nafaqasi va boshqa " +
      "to'lovlarning hammasi kamayadi.",
    example:
      "Xodimning rasmiy ish haqi kam, " +
      "qolgani norasmiy. Ta'tilga " +
      "chiqqanda ta'til puli faqat " +
      "rasmiy qismdan hisoblandi va " +
      "kutilganidan ancha kam bo'ldi.",
    keyPoints: [
      "O'rtacha ish haqi ko'p to'lovlar uchun asos bo'ladi",
      "Ta'til puli va bo'shash nafaqasi shundan hisoblanadi",
      "Hisoblash tartibi qonunda belgilangan",
      "Norasmiy to'lovlar o'rtacha ish haqini pasaytiradi",
    ],
    warning:
      "Norasmiy ish haqi qisqa muddatda " +
      "foydali ko'rinadi, lekin ta'til, " +
      "nafaqa va pensiyada bevosita " +
      "yo'qotishga aylanadi.",
    lawRefs: [
      { code: "MK", article: "257" },
      { code: "MK", article: "233" },
      { code: "MK", article: "282" },
    ],
  },

  /* ── 28 ────────────────────────────────────────────────────── */
  {
    heading: "Ish haqidan ushlab qolish chegaralari",
    text:
      "Ish beruvchi ish haqidan xohlagancha " +
      "ushlab qola olmaydi — bu qat'iy " +
      "cheklangan.\n\n" +
      "Birinchi cheklov — ASOSLAR bo'yicha. " +
      "Ushlab qolish faqat qonunda nazarda " +
      "tutilgan hollarda mumkin: soliqlar " +
      "va majburiy to'lovlar; ijro " +
      "hujjatlari bo'yicha (masalan " +
      "aliment); qonunda ko'rsatilgan " +
      "boshqa asoslar.\n\n" +
      "Ikkinchi cheklov — MIQDOR bo'yicha. " +
      "Har bir to'lovda ushlab qolinadigan " +
      "umumiy summa belgilangan foizdan " +
      "oshmasligi kerak. Aniq chegaralar " +
      "qonun matnida.\n\n" +
      "⚠️ Ko'p uchraydigan noqonuniy " +
      "amaliyot: \"jarima\" ushlab qolish. " +
      "Kechikkani, xatoga yo'l qo'ygani " +
      "yoki rejani bajarmagani uchun ish " +
      "haqidan pul ushlab qolish qonunda " +
      "nazarda tutilmagan. Intizomiy jazo " +
      "choralari ro'yxati alohida " +
      "belgilangan va u yerda jarima " +
      "yo'q.",
    example:
      "Kompaniya kechikkan xodimlardan " +
      "\"jarima\" ushlab qolyapti. Bunday " +
      "ushlab qolishning qonuniy asosi " +
      "yo'q — bu ish haqini to'liq " +
      "to'lamaslik hisoblanadi.",
    keyPoints: [
      "Ushlab qolish faqat qonunda ko'rsatilgan asoslarda mumkin",
      "Miqdor belgilangan foiz bilan cheklangan",
      "Ish haqidan \"jarima\" ushlab qolish qonunda yo'q",
      "Intizomiy jazo choralari alohida ro'yxatda berilgan",
    ],
    warning:
      "Ushlab qolishga oldindan yozma " +
      "rozilik bergan bo'lsangiz ham, " +
      "qonunga zid ushlab qolish " +
      "baribir haqiqiy emas.",
    lawRefs: [
      { code: "MK", article: "269" },
      { code: "MK", article: "270" },
      { code: "MK", article: "312" },
    ],
  },

  /* ── 29 ────────────────────────────────────────────────────── */
  {
    heading: "Kafolatli va kompensatsiya to'lovlari",
    text:
      "Ish haqidan tashqari yana ikki " +
      "turdagi to'lov bor va ular " +
      "chalkashtirilmasligi kerak.\n\n" +
      "KAFOLATLI to'lovlar — xodim " +
      "ishlamagan, lekin qonun bo'yicha " +
      "haq saqlanadigan davrlar uchun. " +
      "Masalan: davlat va jamoat " +
      "majburiyatlarini bajarish; qon " +
      "topshirish; malaka oshirish; " +
      "ta'til davri.\n\n" +
      "KOMPENSATSIYA to'lovlari — xodim " +
      "mehnat majburiyatlari bilan " +
      "bog'liq XARAJAT qilganda uni " +
      "qoplash. Masalan: xizmat safari " +
      "xarajatlari; ish sayyor " +
      "xususiyatga ega bo'lganda; " +
      "shaxsiy mol-mulkdan foydalanish.\n\n" +
      "Farq muhim: birinchisi — " +
      "yo'qotilgan daromad o'rniga, " +
      "ikkinchisi — qilingan xarajat " +
      "o'rniga.\n\n" +
      "Kompensatsiya to'lovlari daromad " +
      "hisoblanmaydi, chunki ular " +
      "xodimga foyda keltirmaydi — " +
      "faqat xarajatini qoplaydi.",
    example:
      "Xodim xizmat safariga yuborildi. " +
      "Unga safar davri uchun o'rtacha " +
      "ish haqi (kafolatli to'lov) va " +
      "yo'l hamda turar joy xarajatlari " +
      "(kompensatsiya) berilishi kerak — " +
      "ikkalasi ham, biri emas.",
    keyPoints: [
      "Kafolatli to'lov — yo'qotilgan daromad o'rniga",
      "Kompensatsiya — qilingan xarajat o'rniga",
      "Xizmat safarida ikkalasi ham beriladi",
      "Kompensatsiya xodimga daromad hisoblanmaydi",
    ],
    warning:
      "Xizmat safari xarajatlarini " +
      "hujjatlashtiring (chek, bilet) — " +
      "aks holda qoplash talabini " +
      "isbotlash qiyin bo'ladi.",
    lawRefs: [
      { code: "MK", article: "279" },
      { code: "MK", article: "285" },
      { code: "MK", article: "286" },
      { code: "MK", article: "287" },
    ],
  },

  /* ── 30 ────────────────────────────────────────────────────── */
  {
    heading: "Ish haqi kechiktirilsa nima qilish kerak",
    text:
      "Ish haqini kechiktirish — eng " +
      "ko'p uchraydigan mehnat " +
      "huquqbuzarligi. Qonun bunda " +
      "xodim tomonida turadi.\n\n" +
      "Ish beruvchi ish haqini yoki " +
      "boshqa to'lovlarni kechiktirsa, " +
      "u MODDIY JAVOBGARLIKKA tortiladi. " +
      "Ya'ni asosiy qarzdan tashqari " +
      "kechiktirilgani uchun ham " +
      "qo'shimcha to'lov nazarda " +
      "tutilgan.\n\n" +
      "Amaliy qadamlar ketma-ketligi: " +
      "(1) ish beruvchiga YOZMA murojaat " +
      "qiling va nusxasini o'zingizda " +
      "saqlang; (2) natija bo'lmasa " +
      "davlat mehnat inspeksiyasiga " +
      "murojaat qiling; (3) kasaba " +
      "uyushmasi bo'lsa unga ham; " +
      "(4) sudga da'vo qo'ying.\n\n" +
      "⚠️ Dalil to'plang: shartnoma " +
      "nusxasi, hisob-kitob varaqalari, " +
      "bank ko'chirmalari, yozishmalar. " +
      "Nizoda aynan shular hal qiladi.",
    example:
      "Ish haqi ikki oy to'lanmadi. " +
      "Xodim yozma ariza berdi va uning " +
      "qabul qilinganini tasdiqlovchi " +
      "belgi oldi. Bu hujjat keyinchalik " +
      "inspeksiya va sudda asosiy dalil " +
      "bo'ladi.",
    keyPoints: [
      "Kechiktirish uchun ish beruvchi moddiy javobgar bo'ladi",
      "Avval yozma murojaat, keyin inspeksiya va sud",
      "Murojaat nusxasini o'zingizda saqlang",
      "Shartnoma va hisob-kitob hujjatlari asosiy dalil",
    ],
    warning:
      "Og'zaki talab qilib vaqt " +
      "yo'qotmang. Nizoda faqat YOZMA " +
      "hujjat ishlaydi.",
    lawRefs: [
      { code: "MK", article: "333" },
      { code: "MK", article: "254" },
      { code: "MK", article: "534" },
    ],
  },

  /* ── 31 ────────────────────────────────────────────────────── */
  {
    heading: "Mehnat shartlari va ularni o'zgartirish",
    text:
      "Mehnat shartlari — ish joyi, " +
      "lavozim, ish haqi, ish vaqti " +
      "rejimi va shunga o'xshash " +
      "elementlar.\n\n" +
      "⚠️ ASOSIY QOIDA: mehnat shartlarini " +
      "o'zgartirish odatda tomonlarning " +
      "KELISHUVI bilan amalga oshiriladi. " +
      "Ish beruvchi ularni bir tomonlama " +
      "o'zgartira olmaydi.\n\n" +
      "Qonunda istisno ham bor: " +
      "belgilangan hollarda ish beruvchi " +
      "xodimning roziligisiz ba'zi " +
      "shartlarni o'zgartirishi mumkin. " +
      "Lekin bunda qat'iy tartib amal " +
      "qiladi — jumladan xodimni " +
      "OLDINDAN ogohlantirish.\n\n" +
      "Xodimning ham o'z huquqi bor: u " +
      "mehnat shartlarini o'zgartirishni " +
      "taklif qilishi mumkin.\n\n" +
      "Har qanday o'zgarish YOZMA " +
      "rasmiylashtirilishi kerak. " +
      "Qonunga xilof o'zgartirish esa " +
      "huquqiy oqibatlarga olib keladi " +
      "va bekor qilinishi mumkin.",
    example:
      "Ish beruvchi xodimning ish haqini " +
      "bir tomonlama, ogohlantirishsiz " +
      "kamaytirdi. Bu qonunga zid: ish " +
      "haqi shartnomaning muhim sharti " +
      "va uni kelishuvsiz o'zgartirib " +
      "bo'lmaydi.",
    keyPoints: [
      "Mehnat shartlari kelishuv bilan o'zgartiriladi",
      "Bir tomonlama o'zgartirish faqat qonundagi hollarda mumkin",
      "Bunda oldindan ogohlantirish shart",
      "Har qanday o'zgarish yozma rasmiylashtiriladi",
    ],
    warning:
      "Yangi shartlarga rozi " +
      "bo'lmasangiz, hujjatni " +
      "\"tanishdim\" deb emas, " +
      "e'tirozingizni yozib imzolang.",
    lawRefs: [
      { code: "MK", article: "134" },
      { code: "MK", article: "135" },
      { code: "MK", article: "137" },
      { code: "MK", article: "150" },
    ],
  },

  /* ── 32 ────────────────────────────────────────────────────── */
  {
    heading: "Boshqa ishga o'tkazish",
    text:
      "O'tkazish — mehnat shartlarining " +
      "eng jiddiy o'zgarishi. Shuning " +
      "uchun u alohida tartibga " +
      "solingan.\n\n" +
      "Umumiy qoida: xodimni boshqa " +
      "doimiy ishga o'tkazish uning " +
      "ROZILIGI bilan amalga oshiriladi. " +
      "Rozilik yozma bo'lishi kerak.\n\n" +
      "VAQTINCHA o'tkazish alohida " +
      "qoidalarga ega. U ikki xil " +
      "bo'ladi: tomonlarning kelishuviga " +
      "ko'ra va ish beruvchi tashabbusiga " +
      "ko'ra (qonunda ko'rsatilgan " +
      "hollarda va cheklangan muddatga).\n\n" +
      "Alohida holat — SOG'LIQ holatiga " +
      "ko'ra o'tkazish. Tibbiy xulosaga " +
      "muvofiq xodim boshqa ishga " +
      "o'tkazilishi kerak bo'lsa, ish " +
      "beruvchi buni ta'minlashi " +
      "shart.\n\n" +
      "⚠️ Ish JOYINI o'zgartirish " +
      "(masalan boshqa bo'linmaga " +
      "ko'chirish) o'tkazish " +
      "hisoblanmasligi mumkin — bu " +
      "shartnomada ish joyi qanday " +
      "yozilganiga bog'liq.",
    example:
      "Xodim buxgalter edi, uni " +
      "roziligisiz omborchi qilib " +
      "o'tkazishdi. Bu doimiy o'tkazish " +
      "— yozma rozilik shart, aks holda " +
      "u qonunga zid.",
    keyPoints: [
      "Doimiy o'tkazish yozma rozilik bilan bo'ladi",
      "Vaqtincha o'tkazish alohida qoidalarga ega",
      "Sog'liq bo'yicha o'tkazishni ish beruvchi ta'minlashi shart",
      "Ish joyining o'zgarishi har doim ham o'tkazish emas",
    ],
    warning:
      "Roziligingizsiz o'tkazilsangiz, " +
      "yangi ishni boshlamasdan avval " +
      "yozma e'tiroz bildiring.",
    lawRefs: [
      { code: "MK", article: "138" },
      { code: "MK", article: "140" },
      { code: "MK", article: "141" },
      { code: "MK", article: "143" },
    ],
  },

  /* ── 33 ────────────────────────────────────────────────────── */
  {
    heading: "Ishdan chetlashtirish",
    text:
      "Chetlashtirish — ishdan bo'shatish " +
      "EMAS. Bu vaqtincha chora: xodim " +
      "shtatda qoladi, lekin ishga " +
      "qo'yilmaydi.\n\n" +
      "Chetlashtirish faqat qonunda " +
      "belgilangan hollarda qo'llaniladi. " +
      "Odatiy asoslar: mast holatda ishga " +
      "kelish; majburiy tibbiy ko'rikdan " +
      "yoki xavfsizlik bo'yicha " +
      "o'qishdan o'tmaganlik; vakolatli " +
      "organlarning talabi.\n\n" +
      "⚠️ Ro'yxat YOPIQ. Ish beruvchi " +
      "\"tekshiruv davrida\" yoki " +
      "\"nizo hal bo'lguncha\" deb " +
      "o'zboshimchalik bilan " +
      "chetlashtira olmaydi.\n\n" +
      "Chetlashtirish davrida ish haqi " +
      "odatda hisoblanmaydi — lekin " +
      "qonunda istisnolar bor. " +
      "Chetlashtirish buyruq bilan " +
      "rasmiylashtiriladi.\n\n" +
      "Qonunga xilof chetlashtirish " +
      "huquqiy oqibatlarga olib keladi: " +
      "xodim ishga qaytariladi va " +
      "unga tegishli to'lov beriladi.",
    example:
      "Ish beruvchi xodimni \"ichki " +
      "tekshiruv tugaguncha\" ishdan " +
      "chetlashtirdi va ish haqini " +
      "to'xtatdi. Bunday asos qonunda " +
      "yo'q — chetlashtirish noqonuniy.",
    keyPoints: [
      "Chetlashtirish — vaqtincha chora, bo'shatish emas",
      "Asoslar ro'yxati qonunda yopiq shaklda berilgan",
      "Buyruq bilan rasmiylashtiriladi",
      "Noqonuniy chetlashtirishda xodim ishga qaytariladi",
    ],
    warning:
      "Chetlashtirish buyrug'ining " +
      "nusxasini talab qiling — unda " +
      "ko'rsatilgan asos qonundagi " +
      "ro'yxatga kirishi kerak.",
    lawRefs: [
      { code: "MK", article: "151" },
      { code: "MK", article: "152" },
      { code: "MK", article: "153" },
      { code: "MK", article: "154" },
    ],
  },

  /* ── 34 ────────────────────────────────────────────────────── */
  {
    heading: "O'zgarishlarni rasmiylashtirish",
    text:
      "Mehnat munosabatidagi har qanday " +
      "o'zgarish HUJJAT bilan " +
      "rasmiylashtirilishi kerak. Bu " +
      "shakliy talab emas — aynan " +
      "hujjat nizoda hal qiladi.\n\n" +
      "Odatiy tartib: tomonlar yozma " +
      "kelishuv (shartnomaga qo'shimcha " +
      "bitim) tuzadi → ish beruvchi " +
      "buyruq chiqaradi → xodim buyruq " +
      "bilan tanishtiriladi va imzo " +
      "qo'yadi.\n\n" +
      "Xodimning huquqi: u ish bilan " +
      "bog'liq hujjatlarning va ularning " +
      "ko'chirma nusxalarining berilishini " +
      "talab qilishi mumkin. Ish beruvchi " +
      "buni belgilangan muddatda " +
      "bajarishi shart.\n\n" +
      "Bu huquqdan MUNTAZAM foydalaning: " +
      "shartnoma nusxasi, buyruqlar " +
      "nusxasi, hisob-kitob varaqalari, " +
      "staj haqidagi ma'lumotnoma.\n\n" +
      "Qonunga xilof o'zgartirish " +
      "huquqiy oqibatlarga olib keladi " +
      "— o'zgarish bekor qilinishi va " +
      "xodimga zarar qoplanishi mumkin.",
    example:
      "Xodimning lavozimi va ish haqi " +
      "o'zgardi, lekin hech qanday " +
      "hujjat imzolanmadi. Nizo " +
      "chiqqanda tomonlar butunlay " +
      "boshqa-boshqa shartlarni da'vo " +
      "qilishadi va isbot yuki " +
      "murakkablashadi.",
    keyPoints: [
      "Har qanday o'zgarish hujjat bilan rasmiylashtiriladi",
      "Kelishuv, buyruq va tanishtirish — uch bosqich",
      "Xodim hujjat nusxalarini talab qilish huquqiga ega",
      "Ish beruvchi ularni belgilangan muddatda berishi shart",
    ],
    warning:
      "Har bir muhim hujjatning " +
      "nusxasini o'zingizda saqlang. " +
      "Ishdan bo'shagandan keyin " +
      "ularni olish ancha qiyinlashadi.",
    lawRefs: [
      { code: "MK", article: "149" },
      { code: "MK", article: "150" },
      { code: "MK", article: "117" },
    ],
  },
];

module.exports = { SECTIONS };
