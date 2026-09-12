"use strict";
/** MEROS MODULI — 1-DARS: ASOSLAR VA QONUN BO'YICHA VORISLIK.
 *  FK2 1112–1119 (asoslar) va 1134–1140 (navbatlar).
 *  Vasiyatnoma (1120–1133) 2-darsda, majburiy ulush (1141–1143) 4-darsda. */

const LESSON = {
  key: "meros-qonun-boyicha",
  category: "inheritance",
  level: "basic",
  order: 5010,
  title: "Qonun bo'yicha meros: navbatlar",
  desc:
    "Meros nima, qachon va qayerda ochiladi, kim merosxo'r bo'ladi " +
    "va vasiyatnoma bo'lmaganda mol-mulk qanday taqsimlanadi.",
  objectives: [
    "Meros qachon va qayerda ochilishini bilasiz",
    "Meros tarkibiga nima kirishini va nima kirmasligini ajrata olasiz",
    "Merosxo'rlar navbatlari tizimini tushunasiz",
    "Taqdim qilish huquqi bo'yicha vorislikni bilasiz",
  ],
  practicalSteps: [
    "Vafot guvohnomasini olgan zahoti notariusga murojaat qiling",
    "Meros ochilgan JOYNI aniqlab, o'sha yerdagi notariusga boring",
    "Qarindoshlikni tasdiqlovchi hujjatlarni oldindan yig'ing",
    "Navbatingizni aniqlang — oldingi navbat bo'lsa siz meros olmaysiz",
  ],
  sections: [
    {
      heading: "Vorislik asoslari",
      text:
        "Meros (vorislik) — vafot etgan " +
        "shaxsning mol-mulki va ba'zi " +
        "huquq hamda majburiyatlarining " +
        "boshqa shaxslarga o'tishi.\n\n" +
        "Vorislikning IKKI asosi bor: " +
        "VASIYATNOMA bo'yicha va QONUN " +
        "bo'yicha.\n\n" +
        "Qoida: vasiyatnoma bo'lsa u " +
        "bo'yicha, bo'lmasa (yoki u " +
        "mol-mulkning bir qismini " +
        "qamrasa) — qolgan qismi qonun " +
        "bo'yicha taqsimlanadi.\n\n" +
        "⚠️ Meros UNIVERSAL huquqiy " +
        "vorislik: merosxo'r faqat " +
        "mol-mulkni emas, unga bog'liq " +
        "MAJBURIYATLARNI ham oladi.",
      example:
        "Otadan kvartira va bank krediti " +
        "qoldi. Kvartirani meros qilib " +
        "olgan farzand kreditga ham " +
        "javob beradi — ikkisini " +
        "ajratib olib bo'lmaydi.",
      keyPoints: [
        "Vorislikning ikki asosi: vasiyatnoma va qonun",
        "Vasiyatnoma birlamchi asos hisoblanadi",
        "Qamralmagan qism qonun bo'yicha taqsimlanadi",
        "Mol-mulk bilan birga majburiyatlar ham o'tadi",
      ],
      warning:
        "Merosni qabul qilishdan oldin " +
        "qarzlarni aniqlashtiring.",
      lawRefs: [{ code: "FK2", article: "1112" }],
    },
    {
      heading: "Meros tarkibi",
      text:
        "Merosga hamma narsa kirmaydi. " +
        "Qonun meros tarkibini aniq " +
        "belgilaydi.\n\n" +
        "MEROSGA KIRADI: meros " +
        "qoldiruvchiga tegishli " +
        "mol-mulk (uy, yer, avtomobil, " +
        "pul, omonat, qimmatli " +
        "qog'ozlar); mulkiy huquqlar; " +
        "mulkiy majburiyatlar " +
        "(qarzlar).\n\n" +
        "⚠️ MEROSGA KIRMAYDI: meros " +
        "qoldiruvchining SHAXSIGA " +
        "uzviy bog'liq huquq va " +
        "majburiyatlar — masalan " +
        "aliment olish yoki to'lash " +
        "huquqi, sog'liqqa " +
        "yetkazilgan zararni qoplash " +
        "huquqi, shaxsiy nomulkiy " +
        "huquqlar.",
      example:
        "Vafot etgan shaxsning kvartirasi " +
        "merosga kiradi. Uning " +
        "kelajakdagi aliment " +
        "majburiyati esa shaxsga " +
        "bog'liq va merosga kirmaydi.",
      keyPoints: [
        "Merosga mol-mulk, huquq va majburiyatlar kiradi",
        "Shaxsga uzviy bog'liq huquqlar o'tmaydi",
        "Aliment va sog'liq zarari huquqlari kirmaydi",
        "Tarkibni bilish qabul qilish qarori uchun asos",
      ],
      warning:
        "Meros tarkibini notarius orqali " +
        "rasmiy aniqlang — " +
        "qarindoshlarning so'ziga " +
        "tayanmang.",
      lawRefs: [{ code: "FK2", article: "1113" }],
    },
    {
      heading: "Umumiy birgalikdagi mulkni meros qilish",
      text:
        "⚠️ Bu — amalda eng ko'p " +
        "chalkashlik keltiradigan " +
        "mavzu.\n\n" +
        "Er-xotinning nikoh davrida " +
        "orttirgan mol-mulki UMUMIY " +
        "hisoblanadi. Ulardan biri " +
        "vafot etganda MEROSGA faqat " +
        "uning ULUSHI o'tadi — butun " +
        "mol-mulk emas.\n\n" +
        "Ya'ni avval tirik qolgan er " +
        "(xotin)ning ulushi AJRATIB " +
        "olinadi, qolgan qism esa " +
        "merosxo'rlar o'rtasida " +
        "taqsimlanadi.\n\n" +
        "Ko'p uchraydigan xato: butun " +
        "kvartirani meros deb hisoblab, " +
        "uni to'liq farzandlar " +
        "o'rtasida bo'lishga urinish.",
      example:
        "Er vafot etdi, nikohda olingan " +
        "kvartira bor. Avval xotinning " +
        "ulushi ajratiladi, faqat " +
        "erning ulushi taqsimlanadi.",
      keyPoints: [
        "Umumiy mulkdan faqat meros qoldiruvchining ulushi o'tadi",
        "Tirik qolgan er (xotin)ning ulushi avval ajratiladi",
        "Butun mol-mulkni meros deb hisoblash xato",
        "Bu eng ko'p uchraydigan chalkashlik",
      ],
      warning:
        "Mol-mulk nikoh davrida " +
        "olinganini hujjat bilan " +
        "tasdiqlang — ulushni ajratish " +
        "shunga bog'liq.",
      lawRefs: [{ code: "FK2", article: "1114" }],
    },
    {
      heading: "Yer uchastkasiga bo'lgan huquqni meros qilish",
      text:
        "Yer uchastkasi bilan bog'liq " +
        "meros alohida moddada tartibga " +
        "solingan, chunki yerning " +
        "huquqiy rejimi o'ziga xos.\n\n" +
        "Yerga bo'lgan huquq " +
        "merosxo'rlarga o'tadi — lekin " +
        "yer qonunchiligida " +
        "belgilangan qoidalarga " +
        "muvofiq.\n\n" +
        "⚠️ Amaliy jihat: yer uchastkasi " +
        "va undagi bino odatda " +
        "BIRGALIKDA qaraladi. Uyni " +
        "meros qilib olgan shaxs " +
        "yerga bo'lgan huquqni ham " +
        "oladi.\n\n" +
        "Bo'lish murakkabroq: yerni " +
        "bo'lish har doim ham mumkin " +
        "emas (eng kam o'lcham va " +
        "maqsadli foydalanish " +
        "talablari).",
      example:
        "Uch merosxo'r kichik yer " +
        "uchastkasini oldi. Uni uchga " +
        "bo'lish eng kam o'lcham " +
        "talabiga zid bo'lsa, ular " +
        "umumiy mulk sifatida egalik " +
        "qiladi.",
      keyPoints: [
        "Yerga bo'lgan huquq merosxo'rlarga o'tadi",
        "Yer qonunchiligi qoidalari ham qo'llaniladi",
        "Uy va yer odatda birgalikda o'tadi",
        "Yerni bo'lish har doim ham mumkin emas",
      ],
      warning:
        "Yer hujjatlarini tekshiring: " +
        "huquq turi (mulk, ijara, " +
        "foydalanish) meros tartibiga " +
        "ta'sir qiladi.",
      lawRefs: [{ code: "FK2", article: "1115" }],
    },
    {
      heading: "Merosning ochilishi",
      text:
        "Meros AVTOMATIK ochiladi — " +
        "buning uchun hech kimning " +
        "arizasi kerak emas.\n\n" +
        "Meros fuqaro VAFOT ETGANDA yoki " +
        "sud tomonidan VAFOT ETGAN DEB " +
        "E'LON QILINGANDA ochiladi.\n\n" +
        "⚠️ MEROS OCHILGAN KUN — eng " +
        "muhim sana. Undan boshlab: " +
        "qabul qilish muddati " +
        "hisoblanadi; merosxo'rlar " +
        "doirasi aniqlanadi; meros " +
        "tarkibi belgilanadi.\n\n" +
        "Bu sanani o'tkazib yuborish eng " +
        "ko'p uchraydigan va eng og'ir " +
        "xato — muddat o'tgach qabul " +
        "qilish faqat sud orqali " +
        "mumkin bo'ladi.",
      example:
        "Ota vafot etdi, farzandlar " +
        "\"keyinroq rasmiylashtiramiz\" " +
        "deb kutishdi. Muddat o'tgach " +
        "jarayon ancha murakkablashdi.",
      keyPoints: [
        "Meros vafot etganda avtomatik ochiladi",
        "Vafot etgan deb e'lon qilinish ham asos",
        "Ochilgan kundan muddat hisoblanadi",
        "Muddatni o'tkazib yuborish jarayonni murakkablashtiradi",
      ],
      warning:
        "Vafot guvohnomasini olgan " +
        "zahoti notariusga murojaat " +
        "qiling — muddat ketayotgan " +
        "bo'ladi.",
      lawRefs: [{ code: "FK2", article: "1116" }],
    },
    {
      heading: "Merosning ochilish joyi",
      text:
        "Meros ochilgan JOY ham qonunda " +
        "belgilangan va u amaliy " +
        "ahamiyatga ega.\n\n" +
        "Meros ochilgan joy — odatda " +
        "meros qoldiruvchining OXIRGI " +
        "YASHASH JOYI. U noma'lum " +
        "bo'lsa mol-mulkning yoki " +
        "uning asosiy qismining " +
        "joylashgan yeri hisobga " +
        "olinadi.\n\n" +
        "⚠️ Nima uchun muhim: aynan shu " +
        "joydagi notarius meros ishini " +
        "yuritadi va guvohnoma " +
        "beradi.\n\n" +
        "Noto'g'ri joyga murojaat qilish " +
        "vaqt yo'qotishga olib keladi " +
        "— ariza qaytariladi, muddat " +
        "esa ketaveradi.",
      example:
        "Meros qoldiruvchi Toshkentda " +
        "yashagan, uyi boshqa " +
        "viloyatda edi. Meros ishi " +
        "oxirgi yashash joyi bo'yicha " +
        "yuritiladi.",
      keyPoints: [
        "Meros ochilgan joy — oxirgi yashash joyi",
        "Noma'lum bo'lsa mol-mulk joyi hisobga olinadi",
        "Shu joydagi notarius ishni yuritadi",
        "Mol-mulk turli joyda bo'lsa ham ish bitta joyda ochiladi",
      ],
      warning:
        "Notariusga borishdan oldin " +
        "meros ochilgan joyni " +
        "aniqlashtiring.",
      lawRefs: [{ code: "FK2", article: "1117" }],
    },
    {
      heading: "Merosxo'rlar kimlar bo'lishi mumkin",
      text:
        "Kim merosxo'r bo'la oladi?\n\n" +
        "Merosxo'rlar bo'lishi mumkin: " +
        "meros ochilgan paytda TIRIK " +
        "bo'lgan fuqarolar; meros " +
        "qoldiruvchining hayotligida " +
        "HOMILAGA qolgan va meros " +
        "ochilgandan keyin TIRIK " +
        "TUG'ILGAN bolalar.\n\n" +
        "Vasiyatnoma bo'yicha doira " +
        "kengroq: yuridik shaxslar va " +
        "davlat ham merosxo'r bo'lishi " +
        "mumkin.\n\n" +
        "⚠️ HOMILA QOIDASI muhim: " +
        "meros qoldiruvchi vafot " +
        "etganda bolasi hali " +
        "tug'ilmagan bo'lsa-yu, " +
        "keyinchalik tirik tug'ilsa " +
        "— u merosxo'r hisoblanadi va " +
        "taqsimot kutiladi.",
      example:
        "Er vafot etganda xotini " +
        "homilador edi. Bola tirik " +
        "tug'ilgach u ham birinchi " +
        "navbatdagi merosxo'r " +
        "hisoblanadi.",
      keyPoints: [
        "Meros ochilganda tirik bo'lgan fuqarolar merosxo'r bo'ladi",
        "Homilaga qolgan va tirik tug'ilgan bola ham merosxo'r",
        "Vasiyatnoma bo'yicha yuridik shaxs ham bo'lishi mumkin",
        "Homila bo'lsa taqsimot kutiladi",
      ],
      warning:
        "Homila borligini notariusga " +
        "darhol xabar qiling — aks " +
        "holda taqsimot noto'g'ri " +
        "amalga oshiriladi.",
      lawRefs: [{ code: "FK2", article: "1118" }],
    },
    {
      heading: "Noloyiq merosxo'rlarni merosdan chetlatish",
      text:
        "Qarindosh bo'lish har doim ham " +
        "yetarli emas — qonun ayrim " +
        "shaxslarni merosdan " +
        "CHETLATADI.\n\n" +
        "Noloyiq merosxo'rlar deb odatda " +
        "quyidagilar topiladi: meros " +
        "qoldiruvchining yoki boshqa " +
        "merosxo'rlarning hayotiga " +
        "qarshi qasddan jinoyat sodir " +
        "etganlar; meros " +
        "qoldiruvchining oxirgi " +
        "irodasini amalga oshirishga " +
        "qasddan to'sqinlik " +
        "qilganlar; ota-onalik " +
        "huquqidan mahrum " +
        "qilinganlar; boqish " +
        "majburiyatidan qasddan bosh " +
        "tortganlar.\n\n" +
        "⚠️ Chetlatish AVTOMATIK emas " +
        "— u SUD tomonidan " +
        "tasdiqlanishi kerak.",
      example:
        "Farzand ota-onalik huquqidan " +
        "mahrum qilingan edi. Bolasi " +
        "vafot etganda u qonun " +
        "bo'yicha meros ololmaydi.",
      keyPoints: [
        "Ayrim shaxslar merosdan chetlatiladi",
        "Asoslar qonunda aniq belgilangan",
        "Ota-onalik huquqidan mahrumlik ham asos",
        "Chetlatish sud tomonidan tasdiqlanadi",
      ],
      warning:
        "Noloyiqlikni isbotlash uchun " +
        "sud qarori yoki hukm kerak — " +
        "\"u yomon edi\" degan dalil " +
        "yetarli emas.",
      lawRefs: [{ code: "FK2", article: "1119" }],
    },
    {
      heading: "Qonun bo'yicha vorislikning umumiy qoidalari",
      text:
        "Qonun bo'yicha vorislik " +
        "vasiyatnoma bo'lmaganda " +
        "ishlaydigan tartib.\n\n" +
        "U quyidagi hollarda " +
        "qo'llaniladi: vasiyatnoma " +
        "tuzilmagan; u mol-mulkning " +
        "bir qismini qamragan; " +
        "vasiyatnoma haqiqiy emas deb " +
        "topilgan; vasiyatnomadagi " +
        "merosxo'r merosni qabul " +
        "qilmagan yoki voz kechgan.\n\n" +
        "⚠️ ASOSIY TAMOYIL — NAVBAT " +
        "tizimi. Merosxo'rlar " +
        "navbatlarga bo'lingan va HAR " +
        "BIR KEYINGI navbat faqat " +
        "oldingisi YO'Q bo'lganda " +
        "meros oladi.\n\n" +
        "Bir navbat ichidagi " +
        "merosxo'rlar TENG ulush " +
        "oladi.",
      example:
        "Vafot etgan shaxsning ikki " +
        "farzandi va bir akasi bor. " +
        "Farzandlar birinchi navbatda " +
        "— butun meros ularga o'tadi, " +
        "aka hech narsa olmaydi.",
      keyPoints: [
        "Qonun bo'yicha vorislik vasiyatnoma bo'lmaganda ishlaydi",
        "Merosxo'rlar navbatlarga bo'lingan",
        "Keyingi navbat oldingisi yo'q bo'lgandagina meros oladi",
        "Bir navbat ichida ulushlar teng",
      ],
      warning:
        "\"Men ham qarindoshman\" degan " +
        "dalil yetarli emas — " +
        "navbatingizni aniqlang.",
      lawRefs: [{ code: "FK2", article: "1134" }],
    },
    {
      heading: "Birinchi navbatdagi vorislar",
      text:
        "Birinchi navbat — eng muhim va " +
        "amalda eng ko'p " +
        "qo'llaniladigan.\n\n" +
        "Unga odatda kiradi: meros " +
        "qoldiruvchining BOLALARI (shu " +
        "jumladan farzandlikka " +
        "olinganlar); ER (XOTIN); " +
        "OTA-ONASI.\n\n" +
        "⚠️ Muhim aniqliklar:\n\n" +
        "— Bolalar nikohda tug'ilganmi " +
        "yoki yo'qmi — FARQI YO'Q, " +
        "agar nasl-nasab belgilangan " +
        "bo'lsa;\n\n" +
        "— Farzandlikka olingan bola " +
        "o'z bolasi bilan TENG " +
        "huquqli;\n\n" +
        "— Er (xotin) faqat RASMIY " +
        "nikohda bo'lsa merosxo'r " +
        "bo'ladi. Diniy nikoh meros " +
        "huquqini BERMAYDI;\n\n" +
        "— Ajrashgan sobiq er (xotin) " +
        "merosxo'r EMAS.",
      example:
        "Vafot etgan shaxsning xotini, " +
        "ikki farzandi va onasi bor. " +
        "To'rttasi ham birinchi " +
        "navbatda va teng ulush " +
        "oladi.",
      keyPoints: [
        "Birinchi navbat: bolalar, er (xotin), ota-ona",
        "Nikohsiz tug'ilgan bola ham teng huquqli",
        "Faqat rasmiy nikohdagi er (xotin) merosxo'r bo'ladi",
        "Sobiq er (xotin) merosxo'r hisoblanmaydi",
      ],
      warning:
        "Diniy nikoh meros huquqini " +
        "BERMAYDI — bu eng og'ir " +
        "oqibatli xatolardan biri.",
      lawRefs: [{ code: "FK2", article: "1135" }],
    },
    {
      heading: "Ikkinchi va uchinchi navbatlar",
      text:
        "Birinchi navbatda merosxo'r " +
        "bo'lmasa keyingi navbatlar " +
        "chaqiriladi.\n\n" +
        "IKKINCHI navbatga odatda meros " +
        "qoldiruvchining to'liq va " +
        "noto'liq qondosh aka-ukalari " +
        "hamda opa-singillari, " +
        "shuningdek bobo va buvilari " +
        "kiradi.\n\n" +
        "UCHINCHI navbatga odatda " +
        "amakilar, tog'alar, ammalar " +
        "va xolalar kiradi.\n\n" +
        "⚠️ MUHIM QOIDA: navbat faqat " +
        "oldingisi TO'LIQ yo'q " +
        "bo'lganda chaqiriladi. " +
        "Birinchi navbatda hatto BITTA " +
        "merosxo'r bo'lsa ham, " +
        "ikkinchi navbat hech narsa " +
        "olmaydi.",
      example:
        "Vafot etgan shaxsning bolasi, " +
        "eri va ota-onasi yo'q, lekin " +
        "singlisi bor. Meros " +
        "singlisiga o'tadi.",
      keyPoints: [
        "Ikkinchi navbat: aka-uka, opa-singil, bobo-buvi",
        "Uchinchi navbat: amaki, tog'a, amma, xola",
        "Navbat oldingisi to'liq yo'q bo'lganda chaqiriladi",
        "Bitta merosxo'r bo'lsa ham keyingi navbat olmaydi",
      ],
      warning:
        "Birinchi navbatdagi merosxo'r " +
        "voz kechsa ham, boshqa " +
        "birinchi navbatdagi shaxs " +
        "bo'lsa keyingi navbat " +
        "chaqirilmaydi.",
      lawRefs: [
        { code: "FK2", article: "1136" },
        { code: "FK2", article: "1137" },
      ],
    },
    {
      heading: "To'rtinchi va beshinchi navbatlar",
      text:
        "Qonun qarindoshlik doirasini " +
        "yana kengaytiradi.\n\n" +
        "TO'RTINCHI va BESHINCHI " +
        "navbatlar uzoqroq " +
        "qarindoshlarni qamraydi. " +
        "Aniq tarkib qonun matnida " +
        "belgilangan.\n\n" +
        "⚠️ Tizimning mantig'i shu " +
        "yerda yaqqol ko'rinadi: " +
        "qonun qarindoshlik darajasi " +
        "uzoqlashgan sari keyingi " +
        "navbatga o'tadi va har " +
        "bosqichda mol-mulkni oiladan " +
        "chiqarmaslikka harakat " +
        "qiladi.\n\n" +
        "Faqat hech qanday merosxo'r " +
        "topilmagandagina mol-mulk " +
        "egasiz deb topiladi va " +
        "davlatga o'tadi.\n\n" +
        "Shu sababdan yolg'iz " +
        "shaxslar uchun VASIYATNOMA " +
        "ayniqsa muhim.",
      example:
        "Yolg'iz yashovchi shaxs " +
        "vasiyatnoma tuzmadi va " +
        "qarindoshi topilmadi. " +
        "Mol-mulk egasiz deb " +
        "topilib davlatga o'tadi.",
      keyPoints: [
        "To'rtinchi va beshinchi navbatlar uzoqroq qarindoshlarni qamraydi",
        "Maqsad — mol-mulkni oiladan chiqarmaslik",
        "Merosxo'r topilmasa mol-mulk davlatga o'tadi",
        "Yolg'iz shaxslar uchun vasiyatnoma ayniqsa muhim",
      ],
      warning:
        "Uzoq navbatda qarindoshlikni " +
        "isbotlash uchun sud orqali " +
        "faktni belgilash kerak " +
        "bo'lishi mumkin.",
      lawRefs: [
        { code: "FK2", article: "1138" },
        { code: "FK2", article: "1139" },
      ],
    },
    {
      heading: "Taqdim qilish huquqi bo'yicha vorislik",
      text:
        "⚠️ Bu — amalda juda muhim, " +
        "lekin kam ma'lum bo'lgan " +
        "institut.\n\n" +
        "Vaziyat: merosxo'r bo'lishi " +
        "kerak bo'lgan shaxs meros " +
        "qoldiruvchidan OLDIN yoki u " +
        "bilan BIR VAQTDA vafot " +
        "etgan.\n\n" +
        "Bunday holatda uning ulushi " +
        "yo'qolmaydi — u o'sha " +
        "shaxsning AVLODLARIGA " +
        "(bolalariga) o'tadi. Bu " +
        "taqdim qilish huquqi deb " +
        "ataladi.\n\n" +
        "MUHIM ANIQLIK: avlodlar o'z " +
        "ota-onasiga TEGISHLI bo'lgan " +
        "ulushni o'zaro TENG bo'lib " +
        "oladi — ya'ni har biri " +
        "alohida to'liq ulush " +
        "olmaydi.\n\n" +
        "Norma nevaralarni himoya " +
        "qiladi.",
      example:
        "Bobo vafot etdi. Ikki o'g'li " +
        "bor edi, biri avvalroq vafot " +
        "etgan va undan ikki farzand " +
        "qolgan. Tirik o'g'il yarmini, " +
        "ikki nevara esa otasining " +
        "yarmini teng bo'lib oladi.",
      keyPoints: [
        "Merosxo'r oldinroq vafot etsa ulushi avlodlariga o'tadi",
        "Bu taqdim qilish huquqi bo'yicha vorislik",
        "Avlodlar ota-onasining ulushini teng bo'lib oladi",
        "Norma nevaralarni himoya qiladi",
      ],
      warning:
        "Noloyiq deb topilgan shaxsning " +
        "avlodlari uchun bu huquq " +
        "cheklanishi mumkin.",
      lawRefs: [{ code: "FK2", article: "1140" }],
    },
  ],
};

module.exports = { LESSON };
