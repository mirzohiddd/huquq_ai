"use strict";
/** MEHNAT MODULI — 10-DARS: ISH HAQI. Moddalar: MK 243–257.
 *  Ushlab qolish va kompensatsiya (258–294) 11-darsda. */

const LESSON = {
  key: "ish-haqi",
  category: "labor",
  level: "basic",
  order: 6100,
  title: "Ish haqi: tuzilishi, to'lash muddatlari va shakllari",
  desc:
    "Ish haqi nima, u nimalardan tashkil topadi, qanday va qachon " +
    "to'lanadi hamda o'rtacha ish haqi qayerda ishlatiladi.",
  objectives: [
    "Ish haqi bo'yicha asosiy kafolatlarni bilasiz",
    "Eng kam miqdor qoidasini va uning chegarasini tushunasiz",
    "Ish haqining qismlarini ajrata olasiz",
    "O'rtacha ish haqi nimaga ta'sir qilishini bilasiz",
  ],
  practicalSteps: [
    "Shartnomada ASOSIY qism miqdorini aniq yozdiring",
    "To'lov sanasi ichki hujjatda belgilanganini tekshiring",
    "Hisob-kitob varaqalarini saqlab boring",
    "Norasmiy to'lovga rozi bo'lishdan oldin yo'qotishni hisoblang",
  ],
  sections: [
    {
      heading: "Mehnatga haq to'lash va ish haqi tushunchalari",
      text:
        "Ish haqi — xodimning bajargan mehnati " +
        "uchun oladigan haqi. Bu mehnat " +
        "munosabatining markaziy elementi.\n\n" +
        "Qonun \"mehnatga haq to'lash\" va \"ish " +
        "haqi\" tushunchalarini alohida " +
        "moddada belgilaydi — ular bir-biriga " +
        "yaqin, lekin ayni narsa emas.\n\n" +
        "Ish haqi miqdori xodimning malakasi, " +
        "bajarilgan ishning murakkabligi, " +
        "miqdori va sifatiga bog'liq bo'lib, " +
        "ENG KO'P miqdori bilan " +
        "cheklanmaydi.\n\n" +
        "Ya'ni yuqori chegara yo'q, faqat " +
        "pastki chegara bor.",
      example:
        "Ikki xodim bir xil lavozimda, bir xil " +
        "ish bajaradi, lekin haq turlicha va " +
        "farqning ishga oid asosi yo'q — bu " +
        "kamsitish hisoblanadi.",
      keyPoints: [
        "Ish haqi mehnat munosabatining markaziy elementi",
        "Miqdor malaka, murakkablik va sifatga bog'liq",
        "Eng ko'p miqdor cheklanmaydi",
        "Faqat pastki chegara belgilangan",
      ],
      warning:
        "Ish haqini \"konvert\"da olish stajni, " +
        "ta'til pulini va pensiyani " +
        "kamaytiradi.",
      lawRefs: [{ code: "MK", article: "243" }],
    },
    {
      heading: "Mehnatga haq to'lash sohasidagi asosiy kafolatlar",
      text:
        "Qonun ish haqi bo'yicha bir qator " +
        "KAFOLATNI belgilaydi.\n\n" +
        "Odatiy kafolatlar: mehnatga haq " +
        "to'lashning eng kam miqdori " +
        "belgilanishi; ish haqi o'z vaqtida " +
        "va to'liq to'lanishi; undan ushlab " +
        "qolish cheklanishi; kamsitish " +
        "taqiqlanishi.\n\n" +
        "⚠️ Bu kafolatlar shartnoma bilan " +
        "PASAYTIRIB bo'lmaydi — ular " +
        "minimal daraja hisoblanadi.\n\n" +
        "Shartnoma ularni yaxshilashi mumkin, " +
        "yomonlashtirishi mumkin emas.",
      example:
        "Shartnomada \"ish haqi kechiktirilsa " +
        "xodim da'vo qilmaydi\" deb yozilgan " +
        "edi. Bunday shart haqiqiy emas — " +
        "kafolat saqlanadi.",
      keyPoints: [
        "Ish haqi bo'yicha kafolatlar qonunda belgilangan",
        "Ular minimal daraja hisoblanadi",
        "Shartnoma ularni pasaytira olmaydi",
        "Yaxshilash esa ruxsat etiladi",
      ],
      warning:
        "Kafolatni cheklovchi shartnoma bandi " +
        "imzolangan bo'lsa ham ishlamaydi.",
      lawRefs: [{ code: "MK", article: "244" }],
    },
    {
      heading: "Eng kam ish haqi",
      text:
        "Mehnatga haq to'lashning ENG KAM " +
        "miqdori davlat tomonidan belgilanadi " +
        "va u barcha ish beruvchilar uchun " +
        "majburiy.\n\n" +
        "Qoida: to'liq ish vaqti normasini " +
        "ishlab bergan va mehnat " +
        "majburiyatlarini bajargan xodimning " +
        "ish haqi belgilangan eng kam " +
        "miqdordan PAST bo'lishi mumkin " +
        "emas.\n\n" +
        "⚠️ Chegara TO'LIQ norma ishlab " +
        "berilganda qo'llaniladi. To'liqsiz " +
        "ish vaqtida haq ishlangan vaqtga " +
        "mutanosib to'lanadi.",
      example:
        "Xodim to'liq oy ishladi, barcha " +
        "vazifani bajardi, lekin ish haqi " +
        "belgilangan eng kam miqdordan past " +
        "— bu bevosita qonun buzilishi.",
      keyPoints: [
        "Eng kam miqdor davlat tomonidan belgilanadi",
        "U barcha ish beruvchilar uchun majburiy",
        "Chegara to'liq norma ishlab berilganda qo'llaniladi",
        "To'liqsiz ish vaqtida haq mutanosib to'lanadi",
      ],
      warning:
        "Eng kam miqdor vaqti-vaqti bilan " +
        "o'zgaradi — joriy qiymatni " +
        "tekshiring.",
      lawRefs: [{ code: "MK", article: "245" }],
    },
    {
      heading: "Haq to'lash shartlarini belgilash va o'zgartirish",
      text:
        "Mehnatga haq to'lash shartlari va " +
        "miqdori shartnoma, jamoa shartnomasi " +
        "va ichki hujjatlar bilan " +
        "belgilanadi.\n\n" +
        "⚠️ ENG MUHIM QOIDA: haq to'lash " +
        "shartlarini O'ZGARTIRISH alohida " +
        "moddada tartibga solingan va u " +
        "bir tomonlama amalga oshirilmaydi.\n\n" +
        "Ish beruvchi ish haqini o'zboshimchalik " +
        "bilan kamaytira olmaydi — bu " +
        "shartnomaning muhim sharti va " +
        "uni o'zgartirish uchun tartib " +
        "bor (oldindan ogohlantirish, " +
        "rozilik yoki qonundagi asos).",
      example:
        "Ish beruvchi ish haqini bir tomonlama, " +
        "ogohlantirishsiz kamaytirdi. Bu " +
        "qonunga zid — shart kelishuvsiz " +
        "o'zgartirilmaydi.",
      keyPoints: [
        "Haq to'lash shartlari shartnoma va ichki hujjatlarda belgilanadi",
        "O'zgartirish alohida tartibga bo'ysunadi",
        "Bir tomonlama kamaytirish qonunga zid",
        "Oldindan ogohlantirish talab qilinadi",
      ],
      warning:
        "Ish haqi kamaytirilsa YOZMA e'tiroz " +
        "bildiring — jim rozilik deb " +
        "talqin qilinishi mumkin.",
      lawRefs: [
        { code: "MK", article: "246" },
        { code: "MK", article: "247" },
      ],
    },
    {
      heading: "Ish haqining tuzilishi",
      text:
        "\"Ish haqi\" bitta raqam emas — u bir " +
        "necha qismdan iborat va bu farqni " +
        "bilish amaliy jihatdan juda " +
        "muhim.\n\n" +
        "ASOSIY qism — tarif stavkasi yoki " +
        "lavozim maoshi. Barqaror va " +
        "kafolatlangan.\n\n" +
        "KOMPENSATSIYA xarakteridagi to'lovlar " +
        "— maxsus sharoitlar uchun.\n\n" +
        "RAG'BATLANTIRISH to'lovlari — mukofot, " +
        "ustama.\n\n" +
        "⚠️ Mukofot ko'pincha KAFOLATLANMAGAN " +
        "qism: ish beruvchi uni bir tomonlama " +
        "kamaytirishi mumkin.",
      example:
        "Xodimga \"maosh 5 million\" deyildi, " +
        "lekin shartnomada asosiy qism juda " +
        "kam edi. Mukofot to'xtatilgach " +
        "daromad keskin tushdi, shartnoma " +
        "esa buzilmadi.",
      keyPoints: [
        "Ish haqi asosiy, kompensatsiya va rag'batlantirish qismlaridan iborat",
        "Asosiy qism barqaror va kafolatlangan",
        "Mukofot ko'pincha kafolatlanmagan",
        "Shartnomada asosiy qism miqdori muhim",
      ],
      warning:
        "Ishga kirayotganda \"jami qancha\" " +
        "emas, \"ASOSIY qism qancha\" degan " +
        "savolni bering.",
      lawRefs: [{ code: "MK", article: "248" }],
    },
    {
      heading: "Mehnatga haq to'lash tizimlari",
      text:
        "Mehnatga haq to'lash tizimi va uni " +
        "belgilash tartibi qonunda " +
        "ko'rsatilgan.\n\n" +
        "Asosiy turlari: TARIFLI tizim " +
        "(malaka darajasi va tarif " +
        "stavkalariga asoslanadi) va TARIFSIZ " +
        "tizim (boshqa mezonlarga " +
        "asoslanadi).\n\n" +
        "Shuningdek ISHBAY tizim ham " +
        "qo'llaniladi — bunda haq bajarilgan " +
        "ish hajmiga qarab hisoblanadi va " +
        "narxlar belgilangan tartibda " +
        "aniqlanadi.\n\n" +
        "Tizim ish beruvchi tomonidan " +
        "belgilanadi, lekin u qonun " +
        "kafolatlariga zid bo'lmasligi kerak.",
      example:
        "Ishbay tizimda ishlaydigan xodim " +
        "normani bajardi, lekin narx " +
        "o'zboshimchalik bilan pasaytirildi. " +
        "Narxlar belgilangan tartibda " +
        "aniqlanishi kerak.",
      keyPoints: [
        "Tarifli va tarifsiz tizimlar mavjud",
        "Ishbay tizimda haq ish hajmiga qarab hisoblanadi",
        "Narxlar belgilangan tartibda aniqlanadi",
        "Tizim qonun kafolatlariga zid bo'lmasligi kerak",
      ],
      warning:
        "Ishbay narxlar o'zgartirilsa buni " +
        "yozma asoslash talab qiling.",
      lawRefs: [
        { code: "MK", article: "249" },
        { code: "MK", article: "250" },
        { code: "MK", article: "251" },
      ],
    },
    {
      heading: "Ish haqini to'lash muddatlari",
      text:
        "Ish haqi qonunda belgilangan " +
        "muddatlarda MUNTAZAM to'lanadi.\n\n" +
        "Muddat ichki hujjatlarda yoki " +
        "shartnomada ANIQ ko'rsatilishi " +
        "kerak — \"oy oxirida\" kabi noaniq " +
        "ifoda yetarli emas.\n\n" +
        "⚠️ Aniq sana bo'lmasa kechikishni " +
        "isbotlash qiyinlashadi: qaysi " +
        "kundan kechikish boshlangani " +
        "noma'lum bo'lib qoladi.\n\n" +
        "Shuning uchun ishga kirayotganda " +
        "to'lov sanasini aniqlashtiring.",
      example:
        "Ish beruvchi ish haqini har oy " +
        "turli kunlarda to'ladi va aniq " +
        "sana belgilanmagan. Xodim " +
        "kechikishni isbotlay olmadi.",
      keyPoints: [
        "Ish haqi belgilangan muddatlarda muntazam to'lanadi",
        "Muddat ichki hujjat yoki shartnomada aniq bo'ladi",
        "Noaniq ifoda kechikishni isbotlashni qiyinlashtiradi",
        "To'lov sanasini oldindan aniqlashtiring",
      ],
      warning:
        "To'lov sanasi hujjatda yo'q bo'lsa " +
        "uni yozma ravishda aniqlashtirishni " +
        "so'rang.",
      lawRefs: [{ code: "MK", article: "253" }],
    },
    {
      heading: "Shartnoma bekor qilinganda hisob-kitob muddatlari",
      text:
        "Ishdan bo'shashda hisob-kitob " +
        "muddatlari alohida moddada " +
        "belgilangan va u QISQA.\n\n" +
        "Xodimga tegishli barcha summalar " +
        "belgilangan muddatda to'lanadi: ish " +
        "haqi qarzi; foydalanilmagan ta'til " +
        "uchun kompensatsiya; qonunda " +
        "nazarda tutilgan boshqa " +
        "to'lovlar.\n\n" +
        "⚠️ Kechiktirilsa ish beruvchi " +
        "moddiy javobgarlikka tortiladi — " +
        "bu alohida moddada nazarda " +
        "tutilgan.",
      example:
        "Xodim bo'shadi, lekin hisob-kitob " +
        "ikki oy kechiktirildi. Bu " +
        "kechiktirish uchun qo'shimcha " +
        "to'lov talab qilish asosidir.",
      keyPoints: [
        "Bo'shashda hisob-kitob qisqa muddatda amalga oshiriladi",
        "Ish haqi qarzi va ta'til kompensatsiyasi to'lanadi",
        "Kechiktirilsa moddiy javobgarlik yuzaga keladi",
        "Muddat qonunda belgilangan",
      ],
      warning:
        "Hisob-kitob va hujjatlarni " +
        "olmasdan \"da'volarim yo'q\" degan " +
        "tilxatga imzo chekmang.",
      lawRefs: [
        { code: "MK", article: "254" },
        { code: "MK", article: "333" },
      ],
    },
    {
      heading: "Vafot etgan xodimning olinmagan ish haqi",
      text:
        "Xodim vafot etsa uning olinmagan ish " +
        "haqi YO'QOLMAYDI.\n\n" +
        "Qonun uni kimga berish " +
        "kerakligini alohida moddada " +
        "belgilaydi — odatda oila a'zolari " +
        "yoki qonunda ko'rsatilgan boshqa " +
        "shaxslarga.\n\n" +
        "Bu norma amalda ko'pincha " +
        "e'tibordan chetda qoladi: oila " +
        "a'zolari bu summani talab qilish " +
        "huquqi borligini bilmaydi.\n\n" +
        "Talab uchun vafot guvohnomasi va " +
        "qarindoshlikni tasdiqlovchi hujjat " +
        "kerak bo'ladi.",
      example:
        "Xodim vafot etdi, ikki oylik ish " +
        "haqi olinmagan edi. Oila a'zolari " +
        "bu summani talab qilish huquqiga " +
        "ega.",
      keyPoints: [
        "Vafot etgan xodimning ish haqi yo'qolmaydi",
        "U qonunda ko'rsatilgan shaxslarga beriladi",
        "Odatda oila a'zolari talab qilishi mumkin",
        "Vafot guvohnomasi va qarindoshlik hujjati kerak",
      ],
      warning:
        "Bu huquq ko'pincha bilinmaydi — " +
        "murojaat qilmaslik summani " +
        "yo'qotish demak.",
      lawRefs: [{ code: "MK", article: "255" }],
    },
    {
      heading: "To'lash shakllari va joyi",
      text:
        "Ish haqi PUL shaklida to'lanadi. " +
        "Natura shaklidagi to'lov faqat " +
        "qonunda nazarda tutilgan doirada va " +
        "cheklangan ulushda mumkin.\n\n" +
        "To'lash joyi ham tartibga solingan — " +
        "odatda ish joyida yoki xodimning " +
        "bank hisob raqamiga o'tkazish yo'li " +
        "bilan.\n\n" +
        "⚠️ Ish haqini to'liq mahsulot yoki " +
        "xizmat bilan almashtirish qonunga " +
        "zid.\n\n" +
        "Bank kartasiga o'tkazish xodim uchun " +
        "qulay: u to'lov izini qoldiradi va " +
        "nizoda dalil bo'ladi.",
      example:
        "Ish beruvchi ish haqi o'rniga " +
        "korxona mahsulotini berdi. Bu " +
        "faqat qonunda ko'rsatilgan doirada " +
        "va cheklangan ulushda mumkin.",
      keyPoints: [
        "Ish haqi pul shaklida to'lanadi",
        "Natura shaklidagi to'lov cheklangan",
        "To'lash joyi va usuli tartibga solingan",
        "Bank o'tkazmasi to'lov izini qoldiradi",
      ],
      warning:
        "Naqd to'lovda hisob-kitob " +
        "varaqasini va imzoli vedomostni " +
        "talab qiling.",
      lawRefs: [{ code: "MK", article: "256" }],
    },
    {
      heading: "O'rtacha ish haqi",
      text:
        "O'rtacha ish haqi — ko'p " +
        "hisob-kitoblarda ishlatiladigan " +
        "asosiy ko'rsatkich. Uni tushunmasdan " +
        "o'z to'lovlaringizni tekshirib " +
        "bo'lmaydi.\n\n" +
        "U qo'llaniladi: ta'til puli; ishdan " +
        "bo'shash nafaqasi; xizmat safari " +
        "davri; davlat va jamoat " +
        "majburiyatlarini bajarish davri; " +
        "noqonuniy bo'shatilganda majburiy " +
        "ishlamaslik davri uchun to'lov.\n\n" +
        "⚠️ Amaliy natija: ish haqingizning " +
        "bir qismi rasmiy hisobga " +
        "olinmagan bo'lsa, o'rtacha ish " +
        "haqi ham PAST chiqadi — ya'ni " +
        "ta'til puli va nafaqa " +
        "kamayadi.",
      example:
        "Xodimning rasmiy ish haqi kam, " +
        "qolgani norasmiy edi. Ta'tilga " +
        "chiqqanda ta'til puli faqat rasmiy " +
        "qismdan hisoblandi.",
      keyPoints: [
        "O'rtacha ish haqi ko'p to'lovlar uchun asos",
        "Ta'til puli va bo'shash nafaqasi shundan hisoblanadi",
        "Hisoblash tartibi qonunda belgilangan",
        "Norasmiy to'lov o'rtacha ish haqini pasaytiradi",
      ],
      warning:
        "Norasmiy ish haqi qisqa muddatda " +
        "foydali ko'rinadi, lekin ta'til, " +
        "nafaqa va pensiyada yo'qotishga " +
        "aylanadi.",
      lawRefs: [{ code: "MK", article: "257" }],
    },
  ],
};

module.exports = { LESSON };
