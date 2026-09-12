"use strict";
/** SHARTNOMALAR MODULI — 13-DARS: HADYA, AYIRBOSHLASH, RENTA. FK2 497–534. */

const LESSON = {
  key: "hadya-renta",
  category: "contracts",
  level: "mid",
  order: 3130,
  title: "Hadya, ayirboshlash va renta",
  desc:
    "Ayirboshlash shartnomasi, hadya va uni bekor qilish asoslari, " +
    "xayr-ehson, renta turlari, doimiy va umrbod renta hamda " +
    "umrbod ta'minlash sharti bilan uy-joyni berish.",
  objectives: [
    "Ayirboshlash shartnomasining qoidalarini bilasiz",
    "Hadya shartnomasining shakli va cheklovlarini bilasiz",
    "Hadyani bekor qilish asoslarini bilasiz",
    "Renta turlarini ajrata olasiz",
    "Renta to'lashni ta'minlash mexanizmini bilasiz",
    "Umrbod ta'minlash shartnomasining xavflarini bilasiz",
  ],
  practicalSteps: [
    "Ko'chmas mulk hadyasini notarial tasdiqlab, ro'yxatdan o'tkazing",
    "Hadya qilishdan oldin uning bekor qilinishi mumkin bo'lgan holatlarni bilib oling",
    "Renta shartnomasida to'lov miqdori va muddatini aniq yozing",
    "Umrbod ta'minlash shartnomasida ta'minot mazmunini batafsil yozing",
    "Renta oluvchi sifatida mulkning garovda ekanini tekshiring",
  ],
  sections: [
    {
      heading: "Ayirboshlash shartnomasi",
      text:
        "AYIRBOSHLASH shartnomasi bo'yicha har bir tomon " +
        "ikkinchi tomonning mulkiga bir tovarni berish va " +
        "evaziga boshqa tovarni olish majburiyatini " +
        "oladi.\n\n" +
        "⚠️ ASOSIY QOIDA: ayirboshlashga OLDI-SOTDI " +
        "qoidalari qo'llaniladi. Har bir tomon ayni " +
        "vaqtda ham SOTUVCHI, ham SOTIB OLUVCHI " +
        "hisoblanadi.\n\n" +
        "Ya'ni sifat, butlik, uchinchi shaxs huquqlari " +
        "bo'yicha barcha qoidalar amal qiladi.\n\n" +
        "BAHO: tovarlar TENG QIYMATLI deb taxmin " +
        "qilinadi — shartnomada boshqacha nazarda " +
        "tutilmagan bo'lsa. Baho farqi bo'lsa, " +
        "arzonroq tovar bergan tomon farqni " +
        "to'laydi.\n\n" +
        "XARAJATLAR: tovarni topshirish va qabul " +
        "qilish xarajatlarini har bir tomon o'z " +
        "majburiyati doirasida ko'taradi.\n\n" +
        "MULK HUQUQINING O'TISHI — ENG MUHIM " +
        "QOIDA: ayirboshlanadigan tovarlarga mulk " +
        "huquqi ikkala tomonga ham tegishli " +
        "majburiyatlar BAJARILGANDAN keyin bir " +
        "vaqtda o'tadi.\n\n" +
        "Ya'ni bir tomon tovarni bergani bilan mulk " +
        "huquqi hali o'tmaydi — ikkinchisi ham " +
        "berishi kerak.\n\n" +
        "OLIB QO'YISH: ayirboshlash bo'yicha olingan " +
        "tovar uchinchi shaxs tomonidan olib " +
        "qo'yilsa, jabrlangan tomon o'zi bergan " +
        "tovarni qaytarishni va zararni qoplashni " +
        "talab qilishga haqli.\n\n" +
        "Bu oldi-sotdidan farq: u yerda pul " +
        "qaytariladi, bu yerda esa tovarning o'zi.",
      example:
        "Ayirboshlangan tovar uchinchi shaxs tomonidan " +
        "olib qo'yildi — jabrlangan tomon o'z tovarini " +
        "qaytarishni talab qiladi.",
      keyPoints: [
        "Ayirboshlashga oldi-sotdi qoidalari qo'llaniladi",
        "Har bir tomon ham sotuvchi, ham xaridor",
        "Tovarlar teng qiymatli deb taxmin qilinadi",
        "Mulk huquqi ikki tomon bajargandan keyin o'tadi",
      ],
      warning:
        "Ayirboshlashda ham tovar sifati va huquqiy " +
        "tozaligini tekshirish shart.",
      lawRefs: [
        { code: "FK2", article: "497" },
        { code: "FK2", article: "498" },
        { code: "FK2", article: "499" },
        { code: "FK2", article: "500" },
        { code: "FK2", article: "501" },
      ],
    },
    {
      heading: "Hadya shartnomasi: tushunchasi va shakli",
      text:
        "HADYA shartnomasi bo'yicha bir tomon (hadya " +
        "qiluvchi) ikkinchi tomonga (hadya oluvchiga) " +
        "ashyoni yoki mulkiy huquqni TEKINGA beradi " +
        "yoxud uni mulkiy majburiyatdan ozod " +
        "qiladi.\n\n" +
        "⚠️ \"TEKINGA\" SO'ZI HAL QILUVCHI: agar qarshi " +
        "topshirish yoki qarshi majburiyat bo'lsa, bu " +
        "hadya EMAS. Bunday shartnoma " +
        "KO'ZBO'YAMACHILIK deb baholanishi va haqiqiy " +
        "emas deb topilishi mumkin.\n\n" +
        "Amalda bu tez-tez uchraydi: sotish hadya " +
        "sifatida rasmiylashtiriladi (masalan " +
        "imtiyozli sotib olish huquqini chetlab " +
        "o'tish yoki soliqni kamaytirish uchun) — " +
        "bunday bitim xavfli.\n\n" +
        "SHAKL: ko'chmas mulkni hadya qilish " +
        "shartnomasi qonunda belgilangan tartibda " +
        "rasmiylashtiriladi va davlat ro'yxatidan " +
        "o'tkaziladi.\n\n" +
        "Kelajakda hadya qilish VA'DASI ham yozma " +
        "shaklda bo'lishi kerak — og'zaki va'da " +
        "majburiyat yaratmaydi.\n\n" +
        "QABUL QILISHNI RAD ETISH: hadya oluvchi " +
        "ashyo unga berilgunga qadar hadyani qabul " +
        "qilishdan istalgan paytda BOSH TORTISHGA " +
        "haqli.\n\n" +
        "Bu muhim: hadya majburiy emas. Hadya " +
        "shartnomasi yozma tuzilgan bo'lsa, rad " +
        "etish ham yozma bo'lishi kerak.",
      example:
        "Sotish hadya sifatida rasmiylashtirildi — " +
        "bitim ko'zbo'yamachilik sifatida " +
        "nizolashtirilishi mumkin.",
      keyPoints: [
        "Hadya har doim tekin bo'ladi",
        "Qarshi majburiyat bo'lsa bu hadya emas",
        "Ko'chmas mulk hadyasi ro'yxatdan o'tkaziladi",
        "Hadya oluvchi qabul qilishdan bosh tortishi mumkin",
      ],
      warning:
        "Sotishni hadya deb rasmiylashtirish ikkala " +
        "tomon uchun ham xavfli.",
      lawRefs: [
        { code: "FK2", article: "502" },
        { code: "FK2", article: "503" },
        { code: "FK2", article: "504" },
        { code: "FK2", article: "510" },
      ],
    },
    {
      heading: "Hadyani cheklash va bajarishdan bosh tortish",
      text:
        "Hadya erkinligi cheklanmagan emas — qonun bir " +
        "necha cheklov belgilaydi.\n\n" +
        "CHEKLOVLAR: xo'jalik yuritish yoki operativ " +
        "boshqarish huquqidagi mol-mulkni hadya " +
        "qilish mulkdor roziligi bilan amalga " +
        "oshiriladi; umumiy birgalikdagi mulkni " +
        "hadya qilish barcha ishtirokchilar roziligi " +
        "bilan bo'ladi; vakil ishonchnoma asosida " +
        "hadya qilishi uchun ishonchnomada hadya " +
        "oluvchi va hadya predmeti ko'rsatilishi " +
        "kerak.\n\n" +
        "⚠️ OXIRGI QOIDA JUDA MUHIM: umumiy " +
        "ishonchnoma bo'yicha (\"barcha bitimlarni " +
        "tuzish huquqi\") hadya qilib bo'lmaydi. " +
        "Bunday bitim nizoli bo'ladi.\n\n" +
        "BAJARISHDAN BOSH TORTISH: kelajakda hadya " +
        "qilishni va'da qilgan shaxs quyidagi " +
        "hollarda bajarishdan bosh tortishi " +
        "mumkin:\n\n" +
        "— uning mulkiy yoki oilaviy holati " +
        "shunchalik o'zgargan bo'lsaki, hadyani " +
        "bajarish uning turmush darajasini " +
        "sezilarli pasaytirsa;\n\n" +
        "— hadyani bekor qilish uchun asos " +
        "bo'lgan holatlar yuzaga kelsa.\n\n" +
        "Bunday bosh tortish hadya oluvchiga " +
        "zararni qoplash huquqini bermaydi.\n\n" +
        "KAMCHILIKLI MOL-MULK: hadya qilingan " +
        "ashyoning kamchiliklari hadya oluvchining " +
        "hayoti, sog'lig'i yoki mol-mulkiga zarar " +
        "yetkazsa, hadya qiluvchi javob beradi — " +
        "kamchiliklar hadya qilishdan oldin " +
        "yuzaga kelgan, hadya qiluvchi ular " +
        "haqida bilgan va hadya oluvchini " +
        "ogohlantirmagan bo'lsa.",
      example:
        "Umumiy ishonchnoma bo'yicha mulk hadya " +
        "qilindi — bunday bitim nizoli bo'ladi.",
      keyPoints: [
        "Umumiy mulkni hadya qilishda rozilik kerak",
        "Ishonchnomada hadya oluvchi va predmet ko'rsatiladi",
        "Holat keskin o'zgarsa va'dadan bosh tortish mumkin",
        "Xavfli kamchilik uchun hadya qiluvchi javob beradi",
      ],
      warning:
        "Ishonchnomada aniq ko'rsatilmagan hadya " +
        "keyinchalik bekor qilinishi mumkin.",
      lawRefs: [
        { code: "FK2", article: "505" },
        { code: "FK2", article: "506" },
        { code: "FK2", article: "509" },
      ],
    },
    {
      heading: "Hadyani bekor qilish",
      text:
        "Bu — ko'pchilikka noma'lum, lekin juda muhim " +
        "qoida: HADYA QILINGAN MOL-MULKNI QAYTARISH " +
        "MUMKIN.\n\n" +
        "BEKOR QILISH ASOSLARI:\n\n" +
        "(1) hadya oluvchi hadya qiluvchining, uning " +
        "oila a'zolari yoki yaqin qarindoshlarining " +
        "HAYOTIGA SUIQASD qilsa yoki ularga qasddan " +
        "TAN JAROHATI yetkazsa;\n\n" +
        "(2) hadya oluvchining hadya qilingan ashyo " +
        "bilan MUOMALASI uning YO'QOLIB KETISHI " +
        "xavfini tug'dirsa — bu ashyo hadya " +
        "qiluvchi uchun katta NOMULKIY QIYMATGA " +
        "ega bo'lsa;\n\n" +
        "(3) shartnomada hadya qiluvchi hadya " +
        "oluvchidan uzoq umr ko'rgan taqdirda " +
        "bekor qilish sharti nazarda tutilgan " +
        "bo'lsa.\n\n" +
        "⚠️ UCHINCHI ASOS AMALDA JUDA FOYDALI: hadya " +
        "shartnomasiga \"hadya oluvchi hadya " +
        "qiluvchidan oldin vafot etsa, mol-mulk " +
        "qaytariladi\" degan shart kiritish " +
        "mumkin.\n\n" +
        "Bu ayniqsa oilaviy hadyalarda mulkning " +
        "begonalarga o'tib ketishining oldini " +
        "oladi.\n\n" +
        "OQIBATI: hadya bekor qilinganda hadya " +
        "oluvchi hadya qilingan ashyoni natura " +
        "holida QAYTARISHI shart — u bekor " +
        "qilish paytida saqlanib qolgan " +
        "bo'lsa.\n\n" +
        "MUMKIN BO'LMAGAN HOLLAR: oddiy " +
        "sovg'alarga nisbatan bekor qilish " +
        "qoidalari qo'llanilmaydi.",
      example:
        "Hadya shartnomasiga qaytarish sharti " +
        "kiritildi — hadya oluvchi oldin vafot " +
        "etganda mulk qaytariladi.",
      keyPoints: [
        "Hadya qonunda ko'rsatilgan asoslarda bekor qilinadi",
        "Suiqasd va tan jarohati asos bo'ladi",
        "Shartnomada qaytarish sharti yozilishi mumkin",
        "Bekor qilinganda ashyo natura holida qaytariladi",
      ],
      warning:
        "Oilaviy hadyada qaytarish shartini yozib " +
        "qo'yish keyingi nizolarni oldini oladi.",
      lawRefs: [
        { code: "FK2", article: "507" },
        { code: "FK2", article: "508" },
      ],
    },
    {
      heading: "Xayr-ehson",
      text:
        "XAYR-EHSON — umumfoydali maqsadlarda ashyoni yoki " +
        "huquqni hadya qilish.\n\n" +
        "⚠️ ODDIY HADYADAN ASOSIY FARQI — MAQSAD " +
        "BELGILANISHI: xayr-ehson qiluvchi mol-mulkdan " +
        "MUAYYAN MAQSADDA foydalanish shartini " +
        "qo'yishi mumkin.\n\n" +
        "Fuqaroga xayr-ehson qilinganda bunday shart " +
        "ko'rsatilishi kerak; aks holda u oddiy hadya " +
        "hisoblanadi.\n\n" +
        "HISOB YURITISH: maqsad belgilangan " +
        "xayr-ehsonni qabul qilgan yuridik shaxs " +
        "shunday mol-mulk bo'yicha alohida hisob " +
        "yuritishi shart.\n\n" +
        "MAQSADNI O'ZGARTIRISH: o'zgargan sharoit " +
        "tufayli mol-mulkdan belgilangan maqsadda " +
        "foydalanish imkonsiz bo'lib qolsa, maqsad " +
        "xayr-ehson qiluvchining roziligi bilan, " +
        "u vafot etgan yoki tugatilgan bo'lsa esa " +
        "SUD qarori bilan o'zgartirilishi " +
        "mumkin.\n\n" +
        "BEKOR QILISH: mol-mulkdan belgilangan " +
        "maqsaddan boshqa maqsadda foydalanilsa " +
        "yoki maqsad belgilangan tartibni buzgan " +
        "holda o'zgartirilsa, xayr-ehson qiluvchi " +
        "(uning vorislari) xayr-ehsonni bekor " +
        "qilishni talab qilishga haqli.\n\n" +
        "AMALIY XULOSA: xayr-ehson qilayotganda " +
        "maqsadni ANIQ yozing va hisobot berish " +
        "majburiyatini shartnomaga kiriting — bu " +
        "mablag' o'z maqsadiga yetishini " +
        "ta'minlaydi.",
      example:
        "Belgilangan maqsad uchun berilgan mablag' " +
        "boshqa yo'nalishga sarflandi — xayr-ehson " +
        "bekor qilinishi mumkin.",
      keyPoints: [
        "Xayr-ehson umumfoydali maqsadlarda qilinadi",
        "Maqsad belgilanishi mumkin va u majburiy bo'ladi",
        "Maqsadli mol-mulk bo'yicha alohida hisob yuritiladi",
        "Maqsad buzilsa xayr-ehson bekor qilinadi",
      ],
      warning:
        "Maqsad yozilmagan xayr-ehson oddiy hadyaga " +
        "aylanadi va nazorat imkoni yo'qoladi.",
      lawRefs: [{ code: "FK2", article: "511" }],
    },
    {
      heading: "Renta shartnomasi: umumiy qoidalar",
      text:
        "RENTA shartnomasi bo'yicha bir tomon (renta " +
        "oluvchi) mol-mulkni ikkinchi tomon (renta " +
        "to'lovchi) mulkiga beradi, u esa evaziga " +
        "DAVRIY ravishda muayyan summa to'lash yoki " +
        "boshqa shaklda ta'minot berish majburiyatini " +
        "oladi.\n\n" +
        "TURLARI: DOIMIY renta (muddatsiz) va UMRBOD " +
        "renta (renta oluvchining umri davomida). " +
        "Umrbod rentaning maxsus turi — UMRBOD " +
        "TA'MINLASH sharti bilan uy-joyni berish.\n\n" +
        "⚠️ SHAKL TALABI QAT'IY: renta shartnomasi " +
        "NOTARIAL tasdiqlanishi shart, ko'chmas " +
        "mulk berilganda esa davlat ro'yxatidan " +
        "ham o'tkaziladi.\n\n" +
        "Rioya qilmaslik shartnomani HAQIQIY EMAS " +
        "qiladi.\n\n" +
        "BERISH SHARTLARI: mol-mulk HAQ EVAZIGA " +
        "yoki TEKINGA berilishi mumkin. Haq " +
        "evaziga berilsa oldi-sotdi, tekinga " +
        "berilsa hadya qoidalari qo'shimcha " +
        "ravishda qo'llaniladi.\n\n" +
        "TA'MINOT — RENTA OLUVCHI UCHUN ENG MUHIM " +
        "HIMOYA: ko'chmas mulk renta to'lash " +
        "sharti bilan berilganda, renta oluvchi " +
        "shu mol-mulkka GAROV huquqini oladi.\n\n" +
        "Ya'ni renta to'lanmasa, mol-mulk " +
        "hisobidan undirish mumkin.\n\n" +
        "KECHIKTIRISH UCHUN JAVOBGARLIK: renta " +
        "to'lovchi to'lovni kechiktirsa, qonunda " +
        "yoki shartnomada belgilangan foizlarni " +
        "to'laydi.",
      example:
        "Renta shartnomasi notarial " +
        "tasdiqlanmadi — u haqiqiy emas deb " +
        "topiladi.",
      keyPoints: [
        "Renta — mol-mulk evaziga davriy to'lov",
        "Turlari: doimiy, umrbod va umrbod ta'minlash",
        "Shartnoma notarial tasdiqlanishi shart",
        "Ko'chmas mulkda renta oluvchi garov huquqini oladi",
      ],
      warning:
        "Notarial tasdiqlanmagan renta shartnomasi " +
        "hech qanday himoya bermaydi.",
      lawRefs: [
        { code: "FK2", article: "512" },
        { code: "FK2", article: "513" },
        { code: "FK2", article: "514" },
        { code: "FK2", article: "515" },
        { code: "FK2", article: "516" },
        { code: "FK2", article: "517" },
      ],
    },
    {
      heading: "Doimiy renta",
      text:
        "DOIMIY RENTA muddatsiz to'lanadi va uni olish " +
        "huquqi meros bo'yicha yoki huquqiy vorislik " +
        "tartibida boshqa shaxsga o'tishi mumkin.\n\n" +
        "OLUVCHILAR: doimiy renta oluvchilar " +
        "fuqarolar hamda qonunda nazarda tutilgan " +
        "notijorat tashkilotlari bo'lishi mumkin.\n\n" +
        "SHAKL VA MIQDOR: renta pul shaklida yoki " +
        "ashyolar berish, ish bajarish, xizmat " +
        "ko'rsatish shaklida to'lanishi mumkin. " +
        "Miqdor shartnomada belgilanadi va " +
        "qonunda nazarda tutilgan tartibda " +
        "oshirib boriladi.\n\n" +
        "⚠️ SOTIB OLISH — DOIMIY RENTANING ASOSIY " +
        "MEXANIZMI:\n\n" +
        "TO'LOVCHI rentani sotib olish yo'li bilan " +
        "majburiyatdan ozod bo'lishga haqli. " +
        "Buning uchun u renta oluvchini oldindan " +
        "yozma ogohlantirishi kerak. Bu huquqdan " +
        "voz kechish haqidagi shart HAQIQIY " +
        "EMAS.\n\n" +
        "OLUVCHI ham qonunda ko'rsatilgan " +
        "hollarda sotib olishni talab qilishga " +
        "haqli: to'lovchi rentani jiddiy " +
        "kechiktirsa; to'lovni ta'minlash " +
        "majburiyatini bajarmasa; to'lovchining " +
        "to'lov qobiliyati yo'qolsa; ko'chmas " +
        "mulk bir necha shaxs mulkiga o'tsa.\n\n" +
        "SOTIB OLISH BAHOSI shartnomada " +
        "belgilanadi; belgilanmagan bo'lsa " +
        "qonunda ko'rsatilgan tartibda " +
        "hisoblanadi.\n\n" +
        "XAVF: doimiy renta to'lash sharti bilan " +
        "TEKINGA berilgan mol-mulk tasodifan " +
        "nobud bo'lsa, xavf odatda TO'LOVCHIDA " +
        "qoladi — ya'ni u to'lashda davom " +
        "etadi.",
      example:
        "Renta to'lovchi majburiyatdan ozod " +
        "bo'lish uchun sotib olish huquqidan " +
        "foydalandi.",
      keyPoints: [
        "Doimiy renta muddatsiz to'lanadi",
        "U meros bo'yicha o'tishi mumkin",
        "To'lovchi rentani sotib olishga haqli",
        "Bu huquqdan voz kechish haqiqiy emas",
      ],
      warning:
        "Tekinga berilgan mol-mulk nobud bo'lsa " +
        "ham renta to'lash davom etishi mumkin.",
      lawRefs: [
        { code: "FK2", article: "518" },
        { code: "FK2", article: "519" },
        { code: "FK2", article: "520" },
        { code: "FK2", article: "521" },
        { code: "FK2", article: "522" },
        { code: "FK2", article: "523" },
        { code: "FK2", article: "524" },
      ],
    },
    {
      heading: "Umrbod renta",
      text:
        "UMRBOD RENTA mol-mulkni bergan fuqaroning yoki " +
        "u ko'rsatgan boshqa fuqaroning UMRI DAVOMIDA " +
        "to'lanadi.\n\n" +
        "Renta bir necha fuqaro foydasiga ham " +
        "belgilanishi mumkin — bunda ularning " +
        "ulushlari teng deb hisoblanadi (shartnomada " +
        "boshqacha nazarda tutilmagan bo'lsa).\n\n" +
        "⚠️ MUHIM QOIDA: ulardan biri vafot etsa, " +
        "uning ulushi qolgan oluvchilarga o'tadi; " +
        "oxirgisi vafot etganda esa majburiyat " +
        "bekor bo'ladi.\n\n" +
        "MIQDOR: shartnomada belgilanadi. U qonunda " +
        "belgilangan eng kam miqdordan past " +
        "bo'lmasligi va belgilangan tartibda " +
        "oshirib borilishi kerak.\n\n" +
        "TO'LASH MUDDATLARI: umrbod renta odatda " +
        "har oy oxirida to'lanadi — shartnomada " +
        "boshqacha nazarda tutilmagan bo'lsa.\n\n" +
        "BEKOR QILISH — OLUVCHI UCHUN ASOSIY " +
        "HIMOYA: to'lovchi shartnomani JIDDIY " +
        "buzsa, renta oluvchi rentani sotib " +
        "olishni yoki shartnomani bekor qilib " +
        "zararni qoplashni talab qilishga " +
        "haqli.\n\n" +
        "Agar mol-mulk tekinga berilgan bo'lsa, " +
        "oluvchi uni QAYTARISHNI talab qilishi " +
        "mumkin.\n\n" +
        "⚠️ XAVF QOIDASI: umrbod renta to'lash " +
        "sharti bilan berilgan mol-mulkning " +
        "tasodifan nobud bo'lishi to'lovchini " +
        "majburiyatdan OZOD QILMAYDI.\n\n" +
        "Ya'ni uy yonib ketsa ham renta " +
        "to'lanadi. Bu to'lovchi uchun jiddiy " +
        "xavf va shuning uchun mol-mulkni " +
        "sug'urtalash zarur.",
      example:
        "Renta to'lovlari to'xtatildi — oluvchi " +
        "shartnomani bekor qilib mulkni " +
        "qaytarishni talab qilishi mumkin.",
      keyPoints: [
        "Umrbod renta oluvchining umri davomida to'lanadi",
        "Oxirgi oluvchi vafot etganda majburiyat bekor bo'ladi",
        "Jiddiy buzilishda mulkni qaytarish talab qilinadi",
        "Mol-mulk nobud bo'lsa ham to'lov davom etadi",
      ],
      warning:
        "Renta to'lovchi sifatida mol-mulkni " +
        "albatta sug'urtalang.",
      lawRefs: [
        { code: "FK2", article: "525" },
        { code: "FK2", article: "526" },
        { code: "FK2", article: "527" },
        { code: "FK2", article: "528" },
        { code: "FK2", article: "529" },
      ],
    },
    {
      heading: "Umrbod ta'minlash sharti bilan uy-joyni berish",
      text:
        "Bu shartnoma bo'yicha fuqaro uy-joyni (kvartirani) " +
        "boshqa shaxsning mulkiga beradi, u esa evaziga " +
        "fuqaroni umrbod TA'MINLASH majburiyatini " +
        "oladi.\n\n" +
        "⚠️ UMRBOD RENTADAN FARQI: bu yerda to'lov " +
        "asosan PUL EMAS, balki natura shaklida " +
        "beriladi — yashash uchun sharoit, oziq-ovqat, " +
        "kiyim-kechak, parvarish, zarur yordam, " +
        "davolash.\n\n" +
        "Shartnomada dafn marosimi xarajatlarini " +
        "to'lash ham nazarda tutilishi mumkin.\n\n" +
        "SHARTNOMADA TA'MINOT MAZMUNI ANIQ " +
        "BELGILANISHI SHART va uning umumiy " +
        "qiymati oyiga hisoblanadi. Bu majburiy " +
        "talab — aks holda nima berilishi kerakligi " +
        "bo'yicha nizo muqarrar.\n\n" +
        "TASARRUF ETISH CHEKLOVI — ENG MUHIM " +
        "HIMOYA: to'lovchi olingan uy-joyni " +
        "begonalashtirish, garovga qo'yish yoki " +
        "boshqa yo'l bilan yuklash uchun renta " +
        "oluvchining ROZILIGINI olishi shart.\n\n" +
        "Bu qoida keksa odamning uy-joydan " +
        "ayrilib qolishining oldini oladi.\n\n" +
        "TA'MINOTNI PULGA ALMASHTIRISH: tomonlar " +
        "kelishuvi bilan natura shaklidagi " +
        "ta'minot davriy pul to'lovlari bilan " +
        "almashtirilishi mumkin.\n\n" +
        "BEKOR QILISH: to'lovchi majburiyatlarini " +
        "JIDDIY buzsa, renta oluvchi uy-joyni " +
        "QAYTARISHNI yoki sotib olish bahosini " +
        "to'lashni talab qilishga haqli. Bunda " +
        "to'lovchi qilingan xarajatlarni " +
        "qoplashni talab qila olmaydi.\n\n" +
        "BEKOR BO'LISHI: majburiyat renta " +
        "oluvchining vafoti bilan bekor bo'ladi. " +
        "Vorislarga o'tish masalasi qonunda " +
        "alohida tartibga solingan.",
      example:
        "Ta'minot mazmuni shartnomada aniq " +
        "yozilmadi — nima berilishi kerakligi " +
        "bo'yicha uzoq nizo chiqdi.",
      keyPoints: [
        "Ta'minot asosan natura shaklida beriladi",
        "Ta'minot mazmuni va oylik qiymati yozilishi shart",
        "Uy-joyni tasarruf etish uchun rozilik kerak",
        "Jiddiy buzilishda uy-joy qaytariladi",
      ],
      warning:
        "Bu shartnomani imzolashdan oldin " +
        "mustaqil maslahat oling — u keksa " +
        "odamlar uchun eng xavfli bitimlardan " +
        "biri.",
      lawRefs: [
        { code: "FK2", article: "530" },
        { code: "FK2", article: "531" },
        { code: "FK2", article: "532" },
        { code: "FK2", article: "533" },
        { code: "FK2", article: "534" },
      ],
    },
  ],
};

module.exports = { LESSON };
