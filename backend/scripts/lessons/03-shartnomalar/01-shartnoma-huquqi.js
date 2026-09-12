"use strict";
/** SHARTNOMALAR MODULI — 1-DARS: SHARTNOMA HUQUQI. FK 353–363. */

const LESSON = {
  key: "shartnoma-huquqi",
  category: "contracts",
  level: "basic",
  order: 3010,
  title: "Shartnoma: tushunchasi va erkinligi",
  desc:
    "Shartnoma nima, shartnoma erkinligi va uning chegaralari, baho, " +
    "ommaviy shartnoma, qo'shilish shartnomasi, dastlabki shartnoma " +
    "va shartnomani sharhlash qoidalari.",
  objectives: [
    "Shartnoma nima ekanini va u qachon tuzilgan hisoblanishini bilasiz",
    "Shartnoma erkinligining chegaralarini bilasiz",
    "Ommaviy shartnomada sizga qanday himoya berilishini bilasiz",
    "Qo'shilish shartnomasida qanday huquqingiz borligini bilasiz",
    "Dastlabki shartnoma nima uchun kerakligini tushunasiz",
    "Nizoda shartnoma qanday sharhlanishini bilasiz",
  ],
  practicalSteps: [
    "Shartnomani imzolashdan oldin muhim shartlar (predmet, baho, muddat) borligini tekshiring",
    "Tayyor shakldagi shartnomada tushunarsiz bandlarni yozma so'rab aniqlashtiring",
    "Kelajakdagi bitim uchun dastlabki shartnoma tuzing va uning muddatini yozing",
    "Bahoni aniq raqam yoki aniq hisoblash formulasi bilan yozing",
    "Barcha kelishuvlarni shartnoma matniga kiriting — og'zaki va'dalar hisobga olinmaydi",
  ],
  sections: [
    {
      heading: "Shartnoma nima va u qachon tuzilgan hisoblanadi",
      text:
        "SHARTNOMA — ikki yoki bir necha shaxsning fuqarolik huquq va " +
        "burchlarini vujudga keltirish, o'zgartirish yoki bekor " +
        "qilish haqidagi KELISHUVI.\n\n" +
        "Ya'ni shartnoma — bu hujjat emas, KELISHUV. Hujjat esa " +
        "kelishuvning shaklidan biri xolos. Shuning uchun og'zaki " +
        "shartnoma ham shartnoma hisoblanadi (qonun yozma shaklni " +
        "talab qilmagan hollarda).\n\n" +
        "⚠️ SHARTNOMA MUHIM SHARTLAR bo'yicha kelishuvga erishilgan " +
        "paytdan TUZILGAN hisoblanadi.\n\n" +
        "MUHIM SHARTLAR uchta guruhga bo'linadi: (1) shartnoma " +
        "PREDMETI to'g'risidagi shart; (2) qonunda o'sha tur " +
        "shartnoma uchun muhim deb ko'rsatilgan shartlar; (3) " +
        "TOMONLARDAN BIRI kelishuvga erishilishi zarur deb bildirgan " +
        "har qanday shart.\n\n" +
        "UCHINCHI GURUH ENG KAM MA'LUM VA ENG FOYDALI: agar siz " +
        "biror shart siz uchun printsipial ekanini bildirsangiz, u " +
        "ham muhim shartga aylanadi va u bo'yicha kelishilmasa " +
        "shartnoma tuzilmagan hisoblanadi.",
      example:
        "Tomonlar predmet bo'yicha kelishdi, lekin muddat " +
        "printsipial ekani aytilgan edi va u kelishilmadi — " +
        "shartnoma tuzilmagan hisoblanadi.",
      keyPoints: [
        "Shartnoma — hujjat emas, kelishuv",
        "U muhim shartlar bo'yicha kelishilganda tuzilgan hisoblanadi",
        "Predmet har doim muhim shart",
        "Tomon bildirgan har qanday shart muhimga aylanadi",
      ],
      warning:
        "Muhim shart kelishilmasa shartnoma umuman tuzilmagan " +
        "hisoblanadi — bu bekor qilishdan boshqa narsa.",
      lawRefs: [{ code: "FK", article: "353" }],
    },
    {
      heading: "Shartnoma tuzish erkinligi va uning chegaralari",
      text:
        "Fuqarolar va yuridik shaxslar shartnoma tuzishda ERKIN.\n\n" +
        "Erkinlik uch qismdan iborat: (1) shartnoma tuzish yoki " +
        "tuzmaslikni tanlash; (2) SHERIKNI tanlash; (3) " +
        "SHARTLARNI belgilash.\n\n" +
        "Shartnoma tuzishga majbur qilishga YO'L QO'YILMAYDI — " +
        "qonunda yoki ixtiyoriy olingan majburiyatda nazarda " +
        "tutilgan hollardan tashqari.\n\n" +
        "⚠️ TOMONLAR QONUNDA NAZARDA TUTILGAN VA TUTILMAGAN " +
        "shartnomani ham tuza oladi. Ya'ni \"bunday shartnoma turi " +
        "kodeksda yo'q\" degan e'tiroz o'z-o'zidan asos emas.\n\n" +
        "Shuningdek turli shartnomalar elementlarini o'z ichiga " +
        "olgan ARALASH shartnoma tuzish mumkin — bunda har bir " +
        "qismga tegishli qoidalar qo'llaniladi.\n\n" +
        "CHEGARA: shartnoma shartlari qonunning MAJBURIY " +
        "qoidalariga zid bo'lmasligi kerak. Zid bo'lsa, o'sha " +
        "shart amal qilmaydi va uning o'rniga qonun qoidasi " +
        "qo'llaniladi.\n\n" +
        "Shuning uchun \"shartnomada shunday yozilgan\" degan " +
        "dalil har doim ham yetarli emas.",
      example:
        "Shartnomada iste'molchining qonuniy huquqini cheklovchi " +
        "shart yozildi — bunday shart amal qilmaydi.",
      keyPoints: [
        "Shartnoma tuzish, sherik va shartlarni tanlash erkin",
        "Tuzishga majbur qilish faqat qonunda ko'rsatilgan hollarda",
        "Kodeksda nazarda tutilmagan shartnoma ham tuzilishi mumkin",
        "Qonunning majburiy qoidasiga zid shart amal qilmaydi",
      ],
      warning:
        "Shartnoma erkinligi qonundan ustun emas — majburiy " +
        "qoidalar har doim kuchli.",
      lawRefs: [{ code: "FK", article: "354" }],
    },
    {
      heading: "Haq evaziga va tekin shartnomalar, baho masalasi",
      text:
        "Shartnoma HAQ EVAZIGA yoki TEKINGA tuzilishi mumkin. " +
        "Umumiy qoida: shartnoma haq evaziga deb taxmin qilinadi — " +
        "qonun, shartnoma mazmuni yoki mohiyatidan boshqacha kelib " +
        "chiqmasa.\n\n" +
        "BAHO tomonlar kelishuvi bilan belgilanadi. Qonunda " +
        "nazarda tutilgan hollarda davlat tomonidan belgilanadigan " +
        "yoki tartibga solinadigan narxlar qo'llaniladi.\n\n" +
        "⚠️ BAHO KO'RSATILMAGAN BO'LSA: shartnomani bajarish " +
        "odatda o'xshash sharoitlarda shunga o'xshash tovar, ish " +
        "yoki xizmat uchun odatda olinadigan baho bo'yicha " +
        "to'lanadi.\n\n" +
        "LEKIN BU QOIDAGA TAYANMANG: \"odatdagi baho\"ni sudda " +
        "isbotlash uchun ekspertiza va bozor tahlili kerak " +
        "bo'ladi, bu esa uzoq va qimmat.\n\n" +
        "BAHONI O'ZGARTIRISH: shartnoma bajarilgandan keyin " +
        "bahoni o'zgartirishga qonun yoki shartnomada nazarda " +
        "tutilgan hollarda yo'l qo'yiladi.\n\n" +
        "AMALIY MASLAHAT: bahoni aniq raqam bilan yoki aniq " +
        "hisoblash formulasi bilan yozing. \"Kelishuv bo'yicha\" " +
        "degan yozuv bahoni belgilamaydi.",
      example:
        "Shartnomada baho yozilmadi — nizoda uni isbotlash uchun " +
        "ekspert xulosasi talab qilindi.",
      keyPoints: [
        "Shartnoma odatda haq evaziga deb taxmin qilinadi",
        "Baho tomonlar kelishuvi bilan belgilanadi",
        "Baho yozilmasa odatdagi baho qo'llaniladi",
        "Bahoni aniq raqam yoki formula bilan yozing",
      ],
      warning:
        "\"Odatdagi baho\" qoidasiga tayanish nizoni uzaytiradi va " +
        "qimmatga tushadi.",
      lawRefs: [
        { code: "FK", article: "355" },
        { code: "FK", article: "356" },
      ],
    },
    {
      heading: "Shartnomaning amal qilishi",
      text:
        "Shartnoma tuzilgan paytdan kuchga kiradi va tomonlar uchun " +
        "MAJBURIY bo'ladi.\n\n" +
        "⚠️ QONUN O'ZGARSA NIMA BO'LADI: shartnoma tuzilganidan " +
        "keyin qabul qilingan va boshqacha qoidalar belgilaydigan " +
        "qonun tuzilgan shartnoma shartlariga umumiy qoida bo'yicha " +
        "ta'sir qilmaydi — qonunning o'zida orqaga qaytish " +
        "belgilanmagan bo'lsa.\n\n" +
        "Bu tomonlar uchun barqarorlik kafolati: shartnoma " +
        "tuzayotganda amal qilgan qoidalarga tayanish mumkin.\n\n" +
        "AMAL QILISH MUDDATI: tomonlar shartnomada uning " +
        "shartlari shartnoma tuzilgunga qadar yuzaga kelgan " +
        "munosabatlarga qo'llanilishini belgilashlari mumkin.\n\n" +
        "MUHIM AMALIY QOIDA: shartnomaning amal qilish muddati " +
        "tugashi tomonlarni undan kelib chiqadigan " +
        "MAJBURIYATLARDAN va JAVOBGARLIKDAN ozod qilmaydi — " +
        "qonun yoki shartnomada boshqacha nazarda tutilmagan " +
        "bo'lsa.\n\n" +
        "Ya'ni \"shartnoma muddati tugadi, endi hech narsa " +
        "qarzim yo'q\" degan dalil noto'g'ri: muddat tugagunga " +
        "qadar yuzaga kelgan qarz saqlanadi.",
      example:
        "Shartnoma muddati tugadi, lekin bajarilmagan to'lov bor " +
        "edi — bu majburiyat saqlanadi.",
      keyPoints: [
        "Shartnoma tuzilgan paytdan majburiy bo'ladi",
        "Keyingi qonun odatda tuzilgan shartnomaga ta'sir qilmaydi",
        "Shartlar o'tmishdagi munosabatlarga tatbiq etilishi mumkin",
        "Muddat tugashi majburiyat va javobgarlikni bekor qilmaydi",
      ],
      warning:
        "Muddat tugagach ham bajarilmagan majburiyat bo'yicha " +
        "da'vo qo'yish mumkin.",
      lawRefs: [{ code: "FK", article: "357" }],
    },
    {
      heading: "Ommaviy shartnoma: eng kuchli himoya",
      text:
        "OMMAVIY SHARTNOMA — tijorat tashkiloti tomonidan tuzilgan " +
        "va uning o'z faoliyati xususiyatiga ko'ra MUROJAAT " +
        "QILGAN HAR BIR SHAXSGA nisbatan amalga oshirishi kerak " +
        "bo'lgan tovar sotish, ish bajarish yoki xizmat ko'rsatish " +
        "bo'yicha majburiyatlarini belgilaydigan shartnoma.\n\n" +
        "Misollar: chakana savdo, umumiy foydalanishdagi " +
        "transportda tashish, aloqa xizmatlari, energiya " +
        "ta'minoti, tibbiy va mehmonxona xizmatlari.\n\n" +
        "⚠️ UCHTA KUCHLI QOIDA:\n\n" +
        "(1) Tashkilot shartnoma tuzishdan BOSH TORTISHGA haqli " +
        "emas — imkoniyati bo'lsa;\n\n" +
        "(2) Shartnoma bahosi va boshqa shartlari BARCHA " +
        "iste'molchilar uchun BIR XIL belgilanadi (qonunda " +
        "nazarda tutilgan imtiyozlardan tashqari);\n\n" +
        "(3) Ayrim iste'molchilarga USTUNLIK berishga yo'l " +
        "qo'yilmaydi.\n\n" +
        "BOSH TORTILSA: iste'molchi shartnoma tuzishga majbur " +
        "qilishni sud orqali talab qilishi va yetkazilgan " +
        "zararni undirishi mumkin.\n\n" +
        "Bu qoidalarga zid shartlar HAQIQIY EMAS.",
      example:
        "Xizmat ko'rsatuvchi tashkilot asossiz ravishda shartnoma " +
        "tuzishdan bosh tortdi — bu ommaviy shartnoma qoidasini " +
        "buzish hisoblanadi.",
      keyPoints: [
        "Ommaviy shartnoma har bir murojaat qilgan shaxs bilan tuziladi",
        "Bosh tortishga imkoniyat bo'lsa yo'l qo'yilmaydi",
        "Shartlar barcha uchun bir xil bo'ladi",
        "Bosh tortilsa sud orqali majbur qilish mumkin",
      ],
      warning:
        "Rad javobini yozma olishga harakat qiling — u da'voning " +
        "asosiy dalili bo'ladi.",
      lawRefs: [{ code: "FK", article: "358" }],
    },
    {
      heading: "Qo'shilish shartnomasi: tayyor shakldagi shartnoma",
      text:
        "QO'SHILISH SHARTNOMASI — shartlari tomonlardan biri " +
        "tomonidan FORMULYAR yoki boshqa standart shakllarda " +
        "belgilangan va ikkinchi tomon uni faqat butunligicha " +
        "QABUL QILISH yo'li bilan tuzishi mumkin bo'lgan " +
        "shartnoma.\n\n" +
        "Misollar: bank xizmatlari, aloqa operatorlari, sug'urta, " +
        "onlayn xizmatlar shartlari.\n\n" +
        "⚠️ HIMOYA QOIDASI: qo'shilgan tomon shartnomani " +
        "O'ZGARTIRISH yoki BEKOR QILISHNI talab qilishga haqli, " +
        "agar shartnoma:\n\n" +
        "— unga odatda beriladigan huquqlardan mahrum qilsa;\n" +
        "— ikkinchi tomonning javobgarligini istisno etsa yoki " +
        "cheklasa;\n" +
        "— qo'shilgan tomon uchun aniq og'ir bo'lgan boshqa " +
        "shartlarni o'z ichiga olsa.\n\n" +
        "AMALIY XULOSA: \"men imzoladim, demak roziman\" degan " +
        "dalil bunday shartnomalarda mutlaq emas. Aniq og'ir " +
        "shartlar sudda nizolashtirilishi mumkin.\n\n" +
        "NAMUNAVIY SHARTLAR: tomonlar shartnomada nashr etilgan " +
        "namunaviy shartlar qo'llanilishini nazarda tutishlari " +
        "mumkin — bu shartnoma matnini qisqartiradi, lekin " +
        "namunaviy shartlarni ham o'qish kerak.",
      example:
        "Standart shartnomada xizmat ko'rsatuvchining " +
        "javobgarligi butunlay istisno qilingan edi — bu shart " +
        "nizolashtirilishi mumkin.",
      keyPoints: [
        "Qo'shilish shartnomasi standart shaklda tuziladi",
        "Qo'shilgan tomon uni o'zgartirishni talab qila oladi",
        "Javobgarlikni istisno etuvchi shartlar nizoli",
        "Namunaviy shartlar ham shartnoma qismi bo'ladi",
      ],
      warning:
        "Tadbirkorlik faoliyatida bu himoya cheklangan bo'lishi " +
        "mumkin — shartlarni oldindan o'qing.",
      lawRefs: [
        { code: "FK", article: "359" },
        { code: "FK", article: "360" },
      ],
    },
    {
      heading: "Dastlabki shartnoma",
      text:
        "DASTLABKI SHARTNOMA bo'yicha tomonlar kelajakda mol-mulkni " +
        "topshirish, ish bajarish yoki xizmat ko'rsatish " +
        "to'g'risida ASOSIY SHARTNOMA tuzish majburiyatini " +
        "oladilar.\n\n" +
        "TALABLARI: dastlabki shartnoma asosiy shartnoma uchun " +
        "belgilangan SHAKLDA tuziladi; unda asosiy shartnomaning " +
        "PREDMETI va boshqa muhim shartlarini aniqlash imkonini " +
        "beruvchi shartlar bo'lishi kerak; asosiy shartnoma " +
        "tuziladigan MUDDAT ko'rsatiladi.\n\n" +
        "Muddat ko'rsatilmagan bo'lsa, asosiy shartnoma qonunda " +
        "belgilangan muddat ichida tuzilishi lozim.\n\n" +
        "⚠️ ENG MUHIM AMALIY QOIDA: tomonlardan biri asosiy " +
        "shartnomani tuzishdan bo'yin tovlasa, ikkinchi tomon " +
        "SUDGA murojaat qilib shartnoma tuzishga MAJBUR " +
        "qilishni va zararni qoplashni talab qilishi mumkin.\n\n" +
        "BEKOR BO'LISHI: belgilangan muddat ichida asosiy " +
        "shartnoma tuzilmasa yoki taklif yuborilmasa, dastlabki " +
        "shartnomadagi majburiyatlar bekor bo'ladi.\n\n" +
        "AMALIY QO'LLANISHI: ko'chmas mulk xaridi, katta " +
        "uskuna buyurtmasi, hujjatlar tayyorlanishini kutish " +
        "kerak bo'lgan holatlar.",
      example:
        "Uy xaridi bo'yicha dastlabki shartnoma tuzildi, sotuvchi " +
        "keyin bo'yin tovladi — xaridor tuzishga majbur qilishni " +
        "talab qilishi mumkin.",
      keyPoints: [
        "Dastlabki shartnoma asosiy shartnoma tuzish majburiyatini beradi",
        "Predmet va muddat ko'rsatilishi kerak",
        "Bo'yin tovlansa sud orqali majbur qilish mumkin",
        "Muddat o'tsa majburiyat bekor bo'ladi",
      ],
      warning:
        "Dastlabki shartnomada muddatni yozmaslik — himoyani " +
        "sezilarli zaiflashtiradi.",
      lawRefs: [{ code: "FK", article: "361" }],
    },
    {
      heading: "Uchinchi shaxs foydasiga shartnoma",
      text:
        "UCHINCHI SHAXS FOYDASIGA TUZILGAN SHARTNOMA — tomonlar " +
        "qarzdor majburiyatni kreditorga emas, shartnomada " +
        "ko'rsatilgan yoki ko'rsatilmagan UCHINCHI SHAXSGA " +
        "bajarishi belgilangan shartnoma.\n\n" +
        "Uchinchi shaxs qarzdordan majburiyatni o'z foydasiga " +
        "bajarishni TALAB QILISH huquqiga ega bo'ladi.\n\n" +
        "⚠️ MUHIM CHEKLOV: uchinchi shaxs qarzdorga o'z huquqidan " +
        "foydalanish niyatini bildirgan paytdan boshlab tomonlar " +
        "uning roziligisiz shartnomani BEKOR QILA yoki " +
        "O'ZGARTIRA olmaydi.\n\n" +
        "Ya'ni uchinchi shaxs bir marta \"men bu huquqni " +
        "olaman\" desa, u endi himoyalanadi.\n\n" +
        "AMALIY MISOLLAR: bolaning foydasiga tuzilgan omonat " +
        "shartnomasi; naf oluvchi ko'rsatilgan sug'urta " +
        "shartnomasi; yuk oluvchi foydasiga tashish " +
        "shartnomasi.\n\n" +
        "AGAR UCHINCHI SHAXS huquqidan voz kechsa, kreditor bu " +
        "huquqdan o'zi foydalanishi mumkin — qonun yoki " +
        "shartnomada boshqacha nazarda tutilmagan bo'lsa.",
      example:
        "Sug'urta shartnomasida naf oluvchi ko'rsatildi va u " +
        "huquqini bildirdi — endi shartnomani uning roziligisiz " +
        "o'zgartirib bo'lmaydi.",
      keyPoints: [
        "Bajarish uchinchi shaxsga qaratilishi mumkin",
        "Uchinchi shaxs bajarishni talab qila oladi",
        "Niyat bildirilgach shartnoma uning roziligisiz o'zgarmaydi",
        "Voz kechsa huquqdan kreditor foydalanadi",
      ],
      warning:
        "Naf oluvchini almashtirish niyati bo'lsa, uni huquqini " +
        "bildirishidan oldin qiling.",
      lawRefs: [{ code: "FK", article: "362" }],
    },
    {
      heading: "Korporativ shartnoma",
      text:
        "KORPORATIV SHARTNOMA — xo'jalik jamiyati ishtirokchilari " +
        "o'rtasida tuziladigan va ularning korporativ huquqlarini " +
        "amalga oshirish tartibini belgilaydigan shartnoma.\n\n" +
        "Unda ishtirokchilar o'z huquqlarini muayyan tarzda " +
        "amalga oshirishi yoki ularni amalga oshirishdan tiyilishi " +
        "belgilanishi mumkin: ovoz berishda muvofiqlashtirish, " +
        "ulushni belgilangan narxda sotib olish yoki " +
        "begonalashtirish, ma'lum holatlargacha ulushni " +
        "sotmaslik.\n\n" +
        "⚠️ AMALDA NIMA UCHUN KERAK: jamiyat ustavi hamma uchun " +
        "umumiy hujjat va u har bir sherikning shaxsiy " +
        "kelishuvini o'z ichiga ololmaydi. Korporativ shartnoma " +
        "aynan shu bo'shliqni to'ldiradi.\n\n" +
        "Bu ayniqsa ozchilik ulushga ega ishtirokchi uchun " +
        "muhim: ustav bo'yicha u qarorga ta'sir qila olmasligi " +
        "mumkin, korporativ shartnoma esa unga qo'shimcha " +
        "kafolat beradi.\n\n" +
        "MUHIM CHEKLOV: korporativ shartnoma boshqaruv " +
        "organlarining vakolatlarini belgilab bera olmaydi va " +
        "qonunning majburiy qoidalariga zid bo'la olmaydi.\n\n" +
        "AMALIY MASLAHAT: birgalikda biznes boshlashda uni " +
        "boshidanoq tuzing — nizo chiqqach kelishish ancha " +
        "qiyin bo'ladi.",
      example:
        "Ikki sherik ulushni uchinchi shaxsga sotishdan oldin " +
        "bir-biriga taklif qilish majburiyatini kelishib oldi.",
      keyPoints: [
        "Korporativ shartnoma ishtirokchilar o'rtasida tuziladi",
        "U ovoz berish va ulush bilan bog'liq qoidalarni belgilaydi",
        "Ozchilik ulush egasi uchun qo'shimcha kafolat beradi",
        "Qonunning majburiy qoidalariga zid bo'la olmaydi",
      ],
      warning:
        "Bunday shartnomani biznes boshlanishida tuzing — keyin " +
        "kelishish qiyinlashadi.",
      lawRefs: [{ code: "FK", article: "358-1" }],
    },
    {
      heading: "Shartnomani sharhlash",
      text:
        "Nizo chiqqanda sud shartnomani QANDAY tushunadi — bu " +
        "amalda hal qiluvchi masala.\n\n" +
        "BIRINCHI QOIDA: sud shartnoma shartlarining SO'ZMA-SO'Z " +
        "ma'nosini hisobga oladi. Ya'ni birinchi navbatda matnda " +
        "nima yozilgani muhim, tomon nimani nazarda tutgani " +
        "emas.\n\n" +
        "⚠️ SHUNING UCHUN \"BIZ BOSHQACHA KELISHGAN EDIK\" DEGAN " +
        "DALIL KUCHSIZ. Matnga kirmagan kelishuv amalda mavjud " +
        "emas.\n\n" +
        "IKKINCHI QOIDA: shartning so'zma-so'z ma'nosi noaniq " +
        "bo'lsa, u shartnomaning BOSHQA SHARTLARI va umumiy " +
        "MAZMUNI bilan taqqoslash yo'li bilan aniqlanadi.\n\n" +
        "UCHINCHI QOIDA: bu ham natija bermasa, tomonlarning " +
        "HAQIQIY UMUMIY IRODASI aniqlanadi. Bunda barcha " +
        "holatlar hisobga olinadi: shartnoma oldidan bo'lgan " +
        "muzokaralar va yozishmalar, tomonlarning o'zaro " +
        "munosabatlarida o'rnatilgan amaliyot, ish muomalasi " +
        "odatlari, tomonlarning keyingi xatti-harakati.\n\n" +
        "AMALIY XULOSA: yozishmalarni saqlang — ular uchinchi " +
        "bosqichda hal qiluvchi dalil bo'lishi mumkin.",
      example:
        "Shartnomada noaniq ibora bor edi — sud yozishmalar va " +
        "tomonlarning keyingi harakatlariga tayanib ma'noni " +
        "aniqladi.",
      keyPoints: [
        "Avval so'zma-so'z ma'no hisobga olinadi",
        "Keyin shartnomaning boshqa shartlari va mazmuni",
        "Oxirida tomonlarning haqiqiy umumiy irodasi",
        "Muzokara va yozishmalar dalil bo'ladi",
      ],
      warning:
        "Og'zaki kelishuvni matnga kiritmaslik — nizodagi eng " +
        "keng tarqalgan yo'qotish sababi.",
      lawRefs: [{ code: "FK", article: "363" }],
    },
  ],
};

module.exports = { LESSON };
