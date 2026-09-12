"use strict";
/** FUQAROLIK MODULI — 2-DARS: SUBYEKTLAR.
 *  Jismoniy shaxs: FK 16–18, 21, 24–26-1.
 *  Yuridik shaxs:  FK 39–80.
 *
 *  ⚠️ MUOMALA LAYOQATI (FK 22, 23, 27–38) BU YERGA KIRMAYDI —
 *  u 3-darsning butun mavzusi. Bu darsda "kim subyekt bo'la
 *  oladi", u yerda "u mustaqil harakat qila oladimi" degan
 *  savolga javob beriladi.
 */

const LESSON = {
  key: "fuqarolik-subyektlar",
  category: "civil",
  level: "basic",
  order: 2020,
  title: "Kim huquq egasi bo'la oladi: shaxslar",
  desc:
    "Jismoniy shaxs va yuridik shaxs, huquq layoqati, yuridik " +
    "shaxsning javobgarligi va turlari.",
  objectives: [
    "Huquq layoqati qachon paydo bo'lib qachon tugashini bilasiz",
    "Jismoniy shaxs qanday hollarda o'z mol-mulki bilan javob berishini tushunasiz",
    "Yuridik shaxs qanday tashkil etilishini va qachon mavjud bo'lishini bilasiz",
    "Tashkilot majburiyati uchun kim javob berishini aniqlay olasiz",
    "Tashkiliy-huquqiy shakllarni farqlay olasiz",
  ],
  practicalSteps: [
    "Kontragentingiz yuridik shaxsmi yoki yakka tartibdagi tadbirkormi — avval aniqlang",
    "Shartnoma imzolashdan oldin tashkilotning davlat ro'yxatidan o'tganini tekshiring",
    "Imzolayotgan shaxsning vakolatini ta'sis hujjati yoki ishonchnoma bilan tasdiqlang",
    "Filial bilan ish yuritsangiz shartnomani bosh tashkilot nomiga rasmiylashtiring",
    "Yirik bitimdan oldin kontragentning tugatish jarayonida emasligini tekshiring",
  ],
  sections: [
    {
      heading: "Fuqaro (jismoniy shaxs) tushunchasi",
      text:
        "Fuqarolik huquqining birinchi va asosiy subyekti — " +
        "FUQARO, ya'ni jismoniy shaxs.\n\n" +
        "Bu tushunchaga faqat mamlakat fuqarolari emas, " +
        "balki chet el fuqarolari va fuqaroligi bo'lmagan " +
        "shaxslar ham kiradi. Ya'ni fuqarolik huquqi " +
        "ma'nosida «fuqaro» — bu inson, davlatga " +
        "mansublik emas.\n\n" +
        "Bu keng qamrov muhim: mamlakat hududida bo'lgan " +
        "har qanday inson bitim tuzishi, mol-mulkka ega " +
        "bo'lishi va o'z huquqini himoya qilishi mumkin.\n\n" +
        "Fuqaroni individuallashtiruvchi belgilar — ism " +
        "va yashash joyi. Aynan ular orqali shaxs " +
        "huquqiy munosabatlarda aniqlanadi.",
      example:
        "Chet el fuqarosi mamlakatda kvartira sotib " +
        "olmoqchi. Fuqarolik huquqi ma'nosida u ham " +
        "jismoniy shaxs va bitim subyekti bo'la oladi.",
      keyPoints: [
        "Jismoniy shaxs — fuqarolik huquqining asosiy subyekti",
        "Tushuncha chet el fuqarolarini ham qamraydi",
        "Individuallashtiruvchi belgilar — ism va yashash joyi",
        "Davlatga mansublik subyekt bo'lishning sharti emas",
      ],
      warning:
        "Ayrim toifadagi mol-mulk bo'yicha chet el " +
        "fuqarolari uchun alohida qoidalar bo'lishi " +
        "mumkin. Yirik bitimdan oldin shu masalani " +
        "alohida tekshiring.",
      lawRefs: [{ code: "FK", article: "16" }],
    },
    {
      heading: "Huquq layoqati: qachon boshlanadi va qachon tugaydi",
      text:
        "HUQUQ LAYOQATI — fuqarolik huquqlariga ega " +
        "bo'lish va burchlarni zimmasiga olish " +
        "qobiliyati. U barcha fuqarolar uchun TENG " +
        "tan olinadi.\n\n" +
        "Boshlanish payti — TUG'ILISH. Tugash payti — " +
        "VAFOT. Ya'ni huquq layoqati insonning butun " +
        "hayoti davomida uzluksiz mavjud bo'ladi.\n\n" +
        "Muhim: huquq layoqati yoshga bog'liq EMAS. " +
        "Yangi tug'ilgan chaqaloq ham huquq layoqatiga " +
        "ega — u mol-mulkka ega bo'lishi, meros olishi " +
        "mumkin. Faqat bu huquqlarni uning o'rniga " +
        "qonuniy vakili amalga oshiradi.\n\n" +
        "Aynan shu yerda ko'p chalkashlik bo'ladi: " +
        "huquq layoqati (huquqqa EGA BO'LISH) va " +
        "muomala layoqati (huquqni O'ZI AMALGA " +
        "OSHIRISH) — ikki boshqa tushuncha.",
      example:
        "Chaqaloq nomiga meros qoldirildi. U huquq " +
        "layoqatiga ega bo'lgani uchun mulkdor bo'la " +
        "oladi, lekin mol-mulkni tasarruf etishni " +
        "uning qonuniy vakili amalga oshiradi.",
      keyPoints: [
        "Huquq layoqati tug'ilish bilan boshlanadi",
        "U vafot bilan tugaydi",
        "Barcha fuqarolar uchun teng tan olinadi",
        "Huquq layoqati va muomala layoqati — boshqa tushunchalar",
      ],
      warning:
        "«Bola nomiga mulk rasmiylashtirib bo'lmaydi» " +
        "degan gap noto'g'ri. Rasmiylashtirish mumkin — " +
        "faqat uni tasarruf etish tartibi boshqacha.",
      lawRefs: [{ code: "FK", article: "17" }],
    },
    {
      heading: "Huquq layoqatining mazmuni: nimalarga haqlisiz",
      text:
        "Kodeks huquq layoqatining mazmunini ochib " +
        "beradi — ya'ni fuqaro nimalarga ega bo'lishi " +
        "mumkinligini sanaydi.\n\n" +
        "Fuqarolar mol-mulkka EGALIK QILISH; uni meros " +
        "qilib olish va vasiyat qilish; mamlakat " +
        "hududida erkin harakatlanish va yashash joyini " +
        "tanlash huquqiga ega.\n\n" +
        "Shuningdek: qonun taqiqlamagan har qanday " +
        "faoliyat bilan shug'ullanish; yuridik shaxslar " +
        "tuzish; bitimlar tuzish va majburiyatlarda " +
        "ishtirok etish; ijod va ixtiro natijalariga " +
        "huquqqa ega bo'lish.\n\n" +
        "Ro'yxat YOPIQ emas — fuqaro qonunga zid " +
        "bo'lmagan boshqa mulkiy va shaxsiy nomulkiy " +
        "huquqlarga ham ega bo'lishi mumkin.\n\n" +
        "Amaliy foydasi: biror imkoniyat qonunda " +
        "alohida yozilmagan bo'lsa ham, u taqiqlanmagan " +
        "bo'lsa — sizga ochiq.",
      example:
        "Fuqaro yangi turdagi faoliyat bilan " +
        "shug'ullanmoqchi. U qonunda alohida " +
        "ko'rsatilmagan bo'lsa ham, taqiqlanmagan " +
        "ekan — bu huquq layoqati doirasiga kiradi.",
      keyPoints: [
        "Mol-mulkka egalik va uni meros qilish huquqi",
        "Faoliyat turi va yashash joyini tanlash erkinligi",
        "Yuridik shaxs tuzish va bitim tuzish imkoni",
        "Ro'yxat yopiq emas — taqiqlanmagani ochiq",
      ],
      warning:
        "Ayrim faoliyat turlari uchun litsenziya yoki " +
        "ruxsat talab qilinadi. Huquq layoqatiga ega " +
        "bo'lish — bunday talablardan ozod qilmaydi.",
      lawRefs: [{ code: "FK", article: "18" }],
    },
    {
      heading: "Yashash joyi va uning huquqiy ahamiyati",
      text:
        "Fuqaroning YASHASH JOYI — u doimiy yoki asosan " +
        "yashaydigan joy. Bu shunchaki manzil emas, " +
        "huquqiy ahamiyatga ega tushuncha.\n\n" +
        "Nima uchun muhim: yashash joyi bo'yicha " +
        "majburiyat bajarilish joyi aniqlanadi, " +
        "meros ochilish joyi belgilanadi, sudga " +
        "murojaat qilish joyi hal qilinadi va " +
        "rasmiy xabarnomalar shu manzilga " +
        "yuboriladi.\n\n" +
        "Voyaga yetmagan va vasiylikdagi shaxslar " +
        "uchun alohida qoida ishlaydi: ularning " +
        "yashash joyi qonuniy vakillarining yashash " +
        "joyi hisoblanadi.\n\n" +
        "Amaliy xulosa: manzilingiz o'zgarganda " +
        "buni tegishli hujjatlarda yangilash zarur. " +
        "Aks holda sizga yuborilgan xabarnoma " +
        "yetib bormasa ham, qonun bo'yicha " +
        "yuborilgan hisoblanishi mumkin.",
      example:
        "Fuqaro ko'chib o'tdi, lekin shartnomadagi " +
        "manzilni yangilamadi. Bildirishnoma eski " +
        "manzilga yuborildi va u muddatni o'tkazib " +
        "yubordi — oqibat uning zimmasiga tushadi.",
      keyPoints: [
        "Yashash joyi — doimiy yoki asosan yashaydigan joy",
        "U majburiyat bajarilishi va sud joyini belgilaydi",
        "Voyaga yetmaganlarning yashash joyi — vakilinikiga bog'liq",
        "Manzil o'zgarsa hujjatlarda yangilash zarur",
      ],
      warning:
        "Shartnomalarda ko'rsatilgan manzil xabar " +
        "yuborish uchun rasmiy hisoblanadi. Uni " +
        "o'zgartirganingizni ikkinchi tarafga YOZMA " +
        "xabar qiling.",
      lawRefs: [{ code: "FK", article: "21" }],
    },
    {
      heading: "Fuqaroning tadbirkorlik faoliyati",
      text:
        "Fuqaro yuridik shaxs tashkil etmasdan ham " +
        "TADBIRKORLIK faoliyati bilan shug'ullanishi " +
        "mumkin — buning uchun belgilangan tartibda " +
        "ro'yxatdan o'tish talab qilinadi.\n\n" +
        "Bu — yakka tartibdagi tadbirkorlik. Uning " +
        "afzalligi soddaligida: alohida tashkilot " +
        "tuzish, ustav kapitali va murakkab " +
        "boshqaruv talab qilinmaydi.\n\n" +
        "Muhim qoida: fuqarolarning tadbirkorlik " +
        "faoliyatiga, agar qonunda boshqacha " +
        "belgilanmagan bo'lsa, tijorat tashkilotlari " +
        "faoliyatini tartibga soluvchi qoidalar " +
        "qo'llaniladi.\n\n" +
        "Ya'ni «men yuridik shaxs emasman» degan " +
        "asos tadbirkorga qo'yiladigan talablardan " +
        "ozod qilmaydi.",
      example:
        "Yakka tartibdagi tadbirkor «men oddiy " +
        "fuqaroman» deb tadbirkorlik majburiyatidan " +
        "qochmoqchi bo'ldi. Faoliyati tadbirkorlik " +
        "bo'lgani uchun unga tegishli qoidalar " +
        "qo'llaniladi.",
      keyPoints: [
        "Tadbirkorlik yuridik shaxssiz ham mumkin",
        "Buning uchun ro'yxatdan o'tish talab qilinadi",
        "Tijorat tashkilotlari qoidalari qo'llaniladi",
        "Yuridik shaxs emasligi talablardan ozod qilmaydi",
      ],
      warning:
        "Ro'yxatdan o'tmasdan muntazam tadbirkorlik " +
        "qilish alohida javobgarlik keltiradi. " +
        "Faoliyat muntazam tus olganda maqomni " +
        "rasmiylashtiring.",
      lawRefs: [{ code: "FK", article: "24" }],
    },
    {
      heading: "Fuqaroning mulkiy javobgarligi",
      text:
        "Bu — jismoniy shaxs uchun eng jiddiy va eng " +
        "kam bilinadigan qoidalardan biri: fuqaro o'z " +
        "majburiyatlari bo'yicha O'ZIGA TEGISHLI " +
        "BARCHA mol-mulki bilan javob beradi.\n\n" +
        "Ya'ni javobgarlik faqat bitimda ishtirok " +
        "etgan mol-mulk bilan cheklanmaydi — " +
        "undiruv boshqa mol-mulkka ham " +
        "qaratilishi mumkin.\n\n" +
        "Istisno bor: qonunga muvofiq undiruv " +
        "qaratilishi mumkin bo'lmagan mol-mulk " +
        "ro'yxati alohida belgilanadi. Bu ro'yxat " +
        "insonning eng zarur ehtiyojlarini " +
        "himoya qiladi.\n\n" +
        "Amaliy xulosa: yakka tartibdagi tadbirkor " +
        "uchun bu qoida ayniqsa muhim — biznes " +
        "qarzi shaxsiy mol-mulkka ham " +
        "yetib borishi mumkin. Aynan shu " +
        "yuridik shaxs tuzishning asosiy " +
        "sabablaridan biri.",
      example:
        "Yakka tartibdagi tadbirkorning biznes " +
        "qarzi qoldi. Undiruv faqat biznesda " +
        "ishlatilgan asbob-uskuna bilan " +
        "cheklanmaydi — uning boshqa mol-mulkiga " +
        "ham qaratilishi mumkin.",
      keyPoints: [
        "Fuqaro barcha mol-mulki bilan javob beradi",
        "Javobgarlik bitim predmeti bilan cheklanmaydi",
        "Undiruv qaratilmaydigan mol-mulk ro'yxati mavjud",
        "Bu qoida yakka tadbirkorlar uchun ayniqsa muhim",
      ],
      warning:
        "Yirik majburiyat olishdan oldin shaxsiy " +
        "javobgarlik hajmini baholang. Yuridik " +
        "shaxs tuzish bu xavfni sezilarli " +
        "kamaytiradi.",
      lawRefs: [{ code: "FK", article: "25" }],
    },
    {
      heading: "Tadbirkor maqomi va to'lovga qobiliyatsizlik",
      text:
        "Kodeks yakka tartibdagi tadbirkor maqomini " +
        "olish va uni YO'QOTISH masalasini alohida " +
        "tartibga soladi.\n\n" +
        "Maqom ro'yxatdan o'tish bilan olinadi va " +
        "belgilangan asoslar bo'yicha tugatiladi. " +
        "Maqomning tugashi esa avval olingan " +
        "majburiyatlarni BEKOR QILMAYDI — bu " +
        "muhim va ko'pincha e'tibordan chetda " +
        "qoladigan jihat.\n\n" +
        "Alohida institut — jismoniy shaxsning " +
        "TO'LOVGA QOBILIYATSIZLIGI. U qarzdor " +
        "majburiyatlarini bajara olmay qolgan " +
        "holat uchun tartib belgilaydi.\n\n" +
        "Bu institutning maqsadi ikki tomonlama: " +
        "kreditorlar talablarini adolatli " +
        "taqsimlash va qarzdorga huquqiy " +
        "yechim berish. Tartib va oqibatlari " +
        "alohida qonunchilikda batafsil " +
        "belgilanadi.",
      example:
        "Tadbirkor faoliyatini to'xtatib maqomdan " +
        "chiqdi, lekin yetkazib beruvchi oldidagi " +
        "qarzi qoldi. Maqomning tugashi bu " +
        "qarzni bekor qilmaydi.",
      keyPoints: [
        "Maqom ro'yxatdan o'tish bilan olinadi",
        "Maqomning tugashi majburiyatlarni bekor qilmaydi",
        "Jismoniy shaxs uchun to'lovga qobiliyatsizlik instituti bor",
        "Uning tartibi alohida qonunchilikda belgilanadi",
      ],
      warning:
        "Faoliyatni to'xtatishdan oldin barcha " +
        "majburiyatlarni ro'yxatga oling. " +
        "Rasmiy yopilish qarzdan ozod qilmaydi " +
        "va keyinchalik kutilmagan talab " +
        "kelib chiqishi mumkin.",
      lawRefs: [
        { code: "FK", article: "26" },
        { code: "FK", article: "26-1" },
      ],
    },
    {
      heading: "Yuridik shaxs tushunchasi va uning belgilari",
      text:
        "YURIDIK SHAXS — o'z mulkiga ega bo'lgan, " +
        "o'z majburiyatlari bo'yicha shu mulk " +
        "bilan javob beradigan, o'z nomidan " +
        "huquqlarga ega bo'lib majburiyatlarni " +
        "zimmasiga oladigan va sudda ishtirok " +
        "etadigan tashkilot.\n\n" +
        "Ta'rifdan to'rtta BELGI kelib chiqadi: " +
        "tashkiliy yaxlitlik, alohida mol-mulk, " +
        "mustaqil mulkiy javobgarlik va o'z " +
        "nomidan chiqish.\n\n" +
        "Eng muhim natija — MULKNING AJRALGANLIGI. " +
        "Yuridik shaxsning mulki uning " +
        "ta'sischilari mulkidan alohida. Aynan " +
        "shu sabab tashkilot qarzi uchun " +
        "ta'sischi shaxsan javob bermaydi.\n\n" +
        "Bu tamoyilni tushunish tadbirkorlik " +
        "uchun hal qiluvchi ahamiyatga ega.",
      example:
        "Tashkilot yetkazib beruvchiga qarzdor " +
        "bo'lib qoldi. Talab tashkilotga " +
        "qo'yiladi — ta'sischining shaxsiy " +
        "mol-mulkiga emas.",
      keyPoints: [
        "Yuridik shaxs — mustaqil huquq subyekti",
        "To'rt belgi: yaxlitlik, alohida mulk, javobgarlik, o'z nomi",
        "Tashkilot mulki ta'sischi mulkidan ajralgan",
        "Ta'sischi tashkilot qarzi uchun shaxsan javob bermaydi",
      ],
      warning:
        "Mulkning ajralganligi mutlaq emas — " +
        "qonunda nazarda tutilgan ayrim " +
        "hollarda ta'sischi qo'shimcha " +
        "javobgarlikka tortilishi mumkin.",
      lawRefs: [{ code: "FK", article: "39" }],
    },
    {
      heading: "Yuridik shaxslarning turlari: tijorat va notijorat",
      text:
        "Yuridik shaxslar ikki katta guruhga " +
        "bo'linadi va bu bo'linish ularning " +
        "MAQSADIGA asoslanadi.\n\n" +
        "TIJORAT tashkilotlari — asosiy maqsadi " +
        "foyda olish bo'lgan tashkilotlar. Ular " +
        "olingan foydani ishtirokchilar " +
        "o'rtasida taqsimlashi mumkin.\n\n" +
        "NOTIJORAT tashkilotlari — foyda olishni " +
        "asosiy maqsad qilib qo'ymaydigan " +
        "tashkilotlar. Ular daromad olishi " +
        "mumkin, lekin uni ishtirokchilar " +
        "o'rtasida taqsimlamaydi — daromad " +
        "ustav maqsadlariga yo'naltiriladi.\n\n" +
        "Amaliy ahamiyati: tashkilotning turi " +
        "uning nima qila olishini, qanday " +
        "soliq rejimida ishlashini va qanday " +
        "boshqarilishini belgilaydi.",
      example:
        "Jamoat fondi tadbirkorlik faoliyatidan " +
        "daromad oldi. Bu mumkin, lekin daromad " +
        "ta'sischilar o'rtasida bo'linmaydi — " +
        "u ustav maqsadlariga sarflanadi.",
      keyPoints: [
        "Bo'linish maqsadga asoslanadi",
        "Tijorat tashkiloti foydani taqsimlay oladi",
        "Notijorat tashkilot daromadni maqsadga yo'naltiradi",
        "Tur tashkilotning imkoniyatlarini belgilaydi",
      ],
      warning:
        "Notijorat tashkilot orqali foyda " +
        "taqsimlashga urinish — eng ko'p " +
        "uchraydigan buzilishlardan biri va " +
        "u jiddiy oqibatlarga olib keladi.",
      lawRefs: [{ code: "FK", article: "40" }],
    },
    {
      heading: "Yuridik shaxsning huquq layoqati",
      text:
        "Yuridik shaxs o'zining ta'sis hujjatlarida " +
        "nazarda tutilgan faoliyat MAQSADLARIGA " +
        "muvofiq huquqlarga ega bo'lishi mumkin.\n\n" +
        "Bu jismoniy shaxsdan muhim farq: inson " +
        "taqiqlanmagan hamma narsani qila oladi, " +
        "tashkilot esa o'z maqsadlari doirasida " +
        "harakat qiladi.\n\n" +
        "Huquq layoqati tashkilot tuzilgan " +
        "paytdan boshlanadi va uning tugatilishi " +
        "tugallangan paytda tugaydi.\n\n" +
        "Ayrim faoliyat turlari bilan " +
        "shug'ullanish uchun maxsus ruxsat " +
        "(litsenziya) talab qilinadi — bunday " +
        "holatda huquq aynan ruxsat olingan " +
        "paytdan paydo bo'ladi.\n\n" +
        "Amaliy xulosa: kontragent bilan " +
        "shartnoma tuzishdan oldin uning " +
        "ustavidagi faoliyat doirasini " +
        "ko'rish foydali.",
      example:
        "Tashkilot ustavida ko'rsatilmagan va " +
        "litsenziya talab qiladigan faoliyat " +
        "bo'yicha shartnoma tuzdi. Bunday " +
        "bitim keyinchalik talashilishi " +
        "mumkin.",
      keyPoints: [
        "Huquq layoqati ta'sis maqsadlari bilan bog'liq",
        "U tashkilot tuzilganda boshlanadi",
        "Tugatish tugallanganda tugaydi",
        "Ayrim faoliyatlar uchun litsenziya shart",
      ],
      warning:
        "Litsenziyasiz tuzilgan bitim keyinchalik " +
        "haqiqiy emas deb topilishi mumkin. " +
        "Yirik shartnomada kontragentning " +
        "ruxsatini tekshiring.",
      lawRefs: [{ code: "FK", article: "41" }],
    },
    {
      heading: "Yuridik shaxs qanday vujudga keladi",
      text:
        "Yuridik shaxs ta'sis etiladi va DAVLAT " +
        "RO'YXATIDAN O'TKAZILADI. Ro'yxatdan " +
        "o'tkazish — shakliy tadbir emas, " +
        "tashkilot aynan shu paytdan mavjud " +
        "hisoblanadi.\n\n" +
        "Bu qoidaning amaliy ma'nosi katta: " +
        "ro'yxatdan o'tmagan tashkilot yuridik " +
        "shaxs emas, ya'ni u nomidan tuzilgan " +
        "bitimlar bo'yicha javobgarlik " +
        "tashkilotga emas, uni tuzganlarga " +
        "tushadi.\n\n" +
        "Ro'yxatdan o'tkazish tartibi va rad " +
        "etish asoslari qonunchilikda " +
        "belgilanadi. Rad etish ustidan sudga " +
        "shikoyat qilish mumkin.\n\n" +
        "Ro'yxatga olingan ma'lumotlar ochiq " +
        "bo'ladi — bu kontragentni tekshirish " +
        "imkonini beradi.",
      example:
        "Hujjatlari topshirilgan, lekin hali " +
        "ro'yxatdan o'tmagan tashkilot nomidan " +
        "shartnoma imzolandi. Bunday holatda " +
        "javobgarlik uni imzolagan shaxslarga " +
        "tushishi mumkin.",
      keyPoints: [
        "Tashkilot davlat ro'yxatidan o'tkaziladi",
        "U aynan shu paytdan mavjud hisoblanadi",
        "Ro'yxatdan o'tmagan tashkilot subyekt emas",
        "Rad etish ustidan sudga shikoyat qilinadi",
      ],
      warning:
        "Shartnoma imzolashdan oldin " +
        "kontragentning ro'yxatdan o'tganini " +
        "va faoliyati to'xtatilmaganini " +
        "tekshiring. Bu bir necha daqiqalik " +
        "ish, lekin katta xavfdan saqlaydi.",
      lawRefs: [
        { code: "FK", article: "42" },
        { code: "FK", article: "44" },
      ],
    },
    {
      heading: "Ta'sis hujjatlari — tashkilotning asosiy qonuni",
      text:
        "Yuridik shaxs USTAV yoki ta'sis shartnomasi " +
        "asosida, ba'zi hollarda esa ikkalasi " +
        "asosida faoliyat yuritadi.\n\n" +
        "Ta'sis hujjatlarida tashkilotning nomi, " +
        "joylashgan yeri, boshqaruv tartibi va " +
        "faoliyat predmeti hamda maqsadlari " +
        "ko'rsatiladi.\n\n" +
        "Nima uchun bu sizga muhim: aynan ta'sis " +
        "hujjati kim tashkilot nomidan imzo " +
        "qo'yishi mumkinligini va uning " +
        "vakolat chegarasini belgilaydi.\n\n" +
        "Amaliy tavsiya: yirik bitimda " +
        "kontragentdan ustav nusxasini so'rash " +
        "odatiy va o'rinli talab. Rad etish " +
        "o'zi ogohlantiruvchi belgi.",
      example:
        "Shartnomani direktor o'rinbosari " +
        "imzoladi. Ustavda uning bunday " +
        "vakolati yo'q bo'lsa, bitim " +
        "keyinchalik talashilishi mumkin.",
      keyPoints: [
        "Asosiy hujjat — ustav yoki ta'sis shartnomasi",
        "Unda nom, manzil, maqsad va boshqaruv yoziladi",
        "Imzo vakolati aynan shu hujjatdan kelib chiqadi",
        "Yirik bitimda ustavni ko'rish o'rinli",
      ],
      warning:
        "Ustavning ESKI tahririga tayanmang. " +
        "Unga o'zgartirish kiritilgan bo'lishi " +
        "mumkin — amaldagi tahrirni so'rang.",
      lawRefs: [{ code: "FK", article: "43" }],
    },
    {
      heading: "Yuridik shaxsning organlari va kim imzo qo'yadi",
      text:
        "Yuridik shaxs fuqarolik huquqlarini o'z " +
        "ORGANLARI orqali oladi va majburiyatlarni " +
        "zimmasiga oladi.\n\n" +
        "Organlar tarkibi va vakolatlari qonun " +
        "hamda ta'sis hujjatlari bilan " +
        "belgilanadi. Odatda bu — oliy organ " +
        "(ishtirokchilar yig'ilishi) va " +
        "ijroiya organ (direktor).\n\n" +
        "Amaliy jihatdan eng muhim savol: kim " +
        "ISHONCHNOMASIZ tashkilot nomidan " +
        "harakat qila oladi? Odatda bu — " +
        "ijroiya organ rahbari. Qolganlar " +
        "ishonchnoma asosida ish yuritadi.\n\n" +
        "Tashkilot nomidan harakat qiluvchi " +
        "shaxs uning manfaatlarida INSOF va " +
        "OQILLIK bilan ish tutishi shart.",
      example:
        "Bitimni bo'lim boshlig'i imzoladi. " +
        "Uning ishonchnomasi bo'lmasa, " +
        "tashkilot keyinchalik bitimni " +
        "tan olmasligi mumkin.",
      keyPoints: [
        "Tashkilot organlari orqali harakat qiladi",
        "Vakolatlar qonun va ustav bilan belgilanadi",
        "Ishonchnomasiz odatda faqat rahbar ish yuritadi",
        "Rahbar insof va oqillik bilan harakat qilishi shart",
      ],
      warning:
        "Imzolovchining lavozimi emas, " +
        "VAKOLATI muhim. Ishonchnomaning " +
        "amal qilish muddatini ham " +
        "tekshiring.",
      lawRefs: [{ code: "FK", article: "45" }],
    },
    {
      heading: "Tashkilotning nomi va joylashgan yeri",
      text:
        "Yuridik shaxs o'z NOMIGA ega bo'ladi va " +
        "unda tashkiliy-huquqiy shakli " +
        "ko'rsatiladi.\n\n" +
        "Tijorat tashkilotining nomi FIRMA NOMI " +
        "deb ataladi va u ro'yxatdan " +
        "o'tkazilganda tashkilot unga nisbatan " +
        "mutlaq huquqqa ega bo'ladi.\n\n" +
        "Ya'ni boshqa shaxs shu nomni " +
        "qonunsiz ishlatsa, uni to'xtatishni " +
        "va yetkazilgan zararni qoplashni " +
        "talab qilish mumkin.\n\n" +
        "Joylashgan yer — odatda davlat " +
        "ro'yxatidan o'tkazilgan joy bo'yicha " +
        "aniqlanadi. U sud joyi va rasmiy " +
        "xabarlar manzili uchun ahamiyatli.",
      example:
        "Boshqa tashkilot deyarli bir xil " +
        "firma nomi bilan faoliyat boshladi " +
        "va mijozlar chalkashdi. Nomga " +
        "bo'lgan huquq asosida uni " +
        "to'xtatishni talab qilish mumkin.",
      keyPoints: [
        "Nomda tashkiliy-huquqiy shakl ko'rsatiladi",
        "Firma nomiga mutlaq huquq beriladi",
        "Nomni qonunsiz ishlatishni to'xtatish mumkin",
        "Joylashgan yer sud va xabar uchun muhim",
      ],
      warning:
        "Nom tanlashda mavjud tashkilotlar " +
        "bilan chalkashish xavfini " +
        "tekshiring — keyinchalik nomni " +
        "o'zgartirish qimmatga tushadi.",
      lawRefs: [{ code: "FK", article: "46" }],
    },
    {
      heading: "Vakolatxona va filial — ular yuridik shaxs emas",
      text:
        "Yuridik shaxs o'z joylashgan yeridan " +
        "tashqarida VAKOLATXONA va FILIAL " +
        "tashkil etishi mumkin.\n\n" +
        "VAKOLATXONA tashkilot manfaatlarini " +
        "ifodalaydi va himoya qiladi. FILIAL " +
        "esa tashkilot funksiyalarini to'liq " +
        "yoki qisman bajaradi.\n\n" +
        "⚠️ ENG MUHIM QOIDA: ularning ikkalasi " +
        "ham YURIDIK SHAXS EMAS. Ular " +
        "tashkilotning alohida bo'linmasi " +
        "bo'lib, uning mol-mulki bilan " +
        "ta'minlanadi va u tasdiqlagan nizom " +
        "asosida ish yuritadi.\n\n" +
        "Amaliy natija: shartnoma filial bilan " +
        "emas, BOSH TASHKILOT bilan " +
        "tuziladi. Filial rahbari esa " +
        "ishonchnoma asosida harakat qiladi.",
      example:
        "Shartnoma filial nomiga " +
        "rasmiylashtirildi va nizo chiqdi. " +
        "Da'vo baribir bosh tashkilotga " +
        "qo'yiladi — filial mustaqil javob " +
        "bermaydi.",
      keyPoints: [
        "Vakolatxona manfaatni ifodalaydi va himoya qiladi",
        "Filial funksiyalarni bajaradi",
        "Ikkalasi ham yuridik shaxs emas",
        "Shartnoma bosh tashkilot nomiga tuziladi",
      ],
      warning:
        "Filial rahbarining ishonchnomasi " +
        "chegaralangan bo'lishi mumkin. " +
        "Shartnoma summasi vakolat " +
        "doirasiga sig'ishini tekshiring.",
      lawRefs: [{ code: "FK", article: "47" }],
    },
    {
      heading: "Yuridik shaxsning javobgarligi",
      text:
        "Yuridik shaxs o'z majburiyatlari " +
        "bo'yicha O'ZIGA TEGISHLI BARCHA " +
        "mol-mulki bilan javob beradi.\n\n" +
        "Umumiy qoida ikki tomonlama ishlaydi: " +
        "ta'sischi tashkilot majburiyatlari " +
        "bo'yicha javob bermaydi, tashkilot " +
        "ham ta'sischi majburiyatlari bo'yicha " +
        "javob bermaydi.\n\n" +
        "Bu — cheklangan javobgarlik tamoyili " +
        "va u tadbirkorlikning asosiy " +
        "himoyalaridan biri.\n\n" +
        "Lekin ISTISNOLAR bor: qonunda yoki " +
        "ta'sis hujjatlarida nazarda tutilgan " +
        "hollarda ta'sischi qo'shimcha " +
        "javobgarlikka tortilishi mumkin. " +
        "Ayrim tashkiliy shakllarda bu " +
        "javobgarlik shaklning o'ziga xos " +
        "belgisidir.",
      example:
        "Tashkilot qarzdor bo'lib qoldi. " +
        "Umumiy qoida bo'yicha undiruv " +
        "tashkilot mol-mulkiga qaratiladi, " +
        "ta'sischining shaxsiy mol-mulkiga " +
        "emas.",
      keyPoints: [
        "Tashkilot barcha mol-mulki bilan javob beradi",
        "Ta'sischi tashkilot qarzi uchun javob bermaydi",
        "Tashkilot ham ta'sischi qarzi uchun javob bermaydi",
        "Qonunda nazarda tutilgan istisnolar mavjud",
      ],
      warning:
        "Cheklangan javobgarlik suiiste'mol " +
        "qilinsa (masalan mol-mulkni ataylab " +
        "chiqarib yuborish) qo'shimcha " +
        "javobgarlik masalasi ko'tarilishi " +
        "mumkin.",
      lawRefs: [{ code: "FK", article: "48" }],
    },
    {
      heading: "Qayta tashkil etish va huquqiy vorislik",
      text:
        "Yuridik shaxs QAYTA TASHKIL ETILISHI " +
        "mumkin: qo'shilish, birlashish, " +
        "bo'linish, ajralib chiqish yoki " +
        "o'zgartirish shaklida.\n\n" +
        "Eng muhim natija — HUQUQIY VORISLIK. " +
        "Qayta tashkil etilganda huquq va " +
        "majburiyatlar yangi tashkilotga " +
        "o'tadi.\n\n" +
        "Ya'ni «tashkilot o'zgardi, demak " +
        "qarz yo'qoldi» degan xulosa " +
        "NOTO'G'RI. Majburiyat vorisga " +
        "o'tadi.\n\n" +
        "Huquq va majburiyatlarning o'tishi " +
        "TOPSHIRISH HUJJATI yoki TAQSIMLASH " +
        "BALANSI bilan rasmiylashtiriladi. " +
        "Bu hujjatlarda barcha majburiyatlar " +
        "bo'yicha huquqiy vorislik " +
        "ko'rsatilishi shart.",
      example:
        "Qarzdor tashkilot boshqasiga " +
        "qo'shildi. Kreditor talabini " +
        "huquqiy vorisga qo'yadi — qarz " +
        "yo'qolmaydi.",
      keyPoints: [
        "Beshta shakl: qo'shilish, birlashish, bo'linish, ajralish, o'zgartirish",
        "Huquq va majburiyatlar vorisga o'tadi",
        "Qayta tashkil etish qarzni bekor qilmaydi",
        "Vorislik topshirish hujjati yoki balans bilan rasmiylashtiriladi",
      ],
      warning:
        "Taqsimlash balansida majburiyat kim " +
        "zimmasiga o'tgani aniq " +
        "ko'rsatilmasa, tashkilotlar " +
        "birgalikda javob berishi mumkin.",
      lawRefs: [
        { code: "FK", article: "49" },
        { code: "FK", article: "50" },
        { code: "FK", article: "51" },
      ],
    },
    {
      heading: "Qayta tashkil etishda kreditorlar himoyasi",
      text:
        "Qayta tashkil etish kreditorlar uchun " +
        "xavf tug'diradi: majburiyat kuchsizroq " +
        "tashkilotga o'tkazilishi mumkin. " +
        "Shuning uchun kodeks alohida " +
        "KAFOLATLAR beradi.\n\n" +
        "Birinchisi — XABAR BERISH majburiyati. " +
        "Qayta tashkil etish to'g'risida qaror " +
        "qabul qilgan shaxs kreditorlarni " +
        "yozma ravishda xabardor qilishi " +
        "shart.\n\n" +
        "Ikkinchisi — kreditorning huquqi: u " +
        "majburiyat BAJARILISHINI yoki BEKOR " +
        "QILINISHINI hamda zararlarning " +
        "qoplanishini talab qilishi mumkin.\n\n" +
        "Amaliy xulosa: kontragentingiz qayta " +
        "tashkil etilayotgani haqida xabar " +
        "olsangiz — bu e'tiborsiz " +
        "qoldiriladigan xat emas. Unga " +
        "javob berish muddati bor.",
      example:
        "Kreditor qayta tashkil etish " +
        "haqidagi xabarni e'tiborsiz " +
        "qoldirdi. Keyinchalik majburiyat " +
        "mol-mulki kam bo'lgan tashkilotga " +
        "o'tgani ma'lum bo'ldi — talab " +
        "qo'yish imkoni esa boy berilgan.",
      keyPoints: [
        "Kreditorlarga yozma xabar berish shart",
        "Kreditor majburiyatni bajarishni talab qila oladi",
        "U bekor qilish va zarar qoplashni ham talab qilishi mumkin",
        "Xabarga javob berish muddati chegaralangan",
      ],
      warning:
        "Qayta tashkil etish haqidagi " +
        "xabarni olganingizda darhol " +
        "harakat qiling. Muddat o'tgach " +
        "himoya imkoniyati sezilarli " +
        "toraydi.",
      lawRefs: [{ code: "FK", article: "52" }],
    },
    {
      heading: "Yuridik shaxsni tugatish va uning tartibi",
      text:
        "TUGATISH — qayta tashkil etishdan " +
        "tubdan farq qiladi: bunda huquq va " +
        "majburiyatlar boshqa shaxsga " +
        "vorislik tartibida O'TMAYDI.\n\n" +
        "Tashkilot ta'sischilarining qarori " +
        "bilan yoki sud qarori bilan " +
        "tugatilishi mumkin.\n\n" +
        "Tugatish to'g'risida qaror qabul " +
        "qilgan shaxsning burchlari aniq " +
        "belgilangan: bu haqda xabar " +
        "berish, tugatish komissiyasini " +
        "tayinlash va tugatish tartibi " +
        "hamda muddatlarini belgilash.\n\n" +
        "Tugatish komissiyasi kreditorlarni " +
        "aniqlaydi, talablarni qabul " +
        "qiladi, mol-mulkni sotadi va " +
        "hisob-kitob qiladi. Ya'ni bu " +
        "tartiblangan, bosqichli jarayon — " +
        "shunchaki «yopish» emas.",
      example:
        "Tashkilot faoliyatini to'xtatdi, " +
        "lekin rasmiy tugatish tartibidan " +
        "o'tmadi. Bu holda u yuridik " +
        "jihatdan mavjud bo'lib qolaveradi " +
        "va majburiyatlari saqlanadi.",
      keyPoints: [
        "Tugatishda vorislik tartibida o'tish bo'lmaydi",
        "Asos — ta'sischilar qarori yoki sud qarori",
        "Tugatish komissiyasi tayinlanadi",
        "Jarayon bosqichli va muddatlari belgilangan",
      ],
      warning:
        "Faoliyatni to'xtatish bilan " +
        "tugatishni chalkashtirmang. " +
        "Rasmiy tugatishdan o'tmagan " +
        "tashkilot hisobot va majburiyat " +
        "yukini ko'tarishda davom etadi.",
      lawRefs: [
        { code: "FK", article: "53" },
        { code: "FK", article: "54" },
        { code: "FK", article: "55" },
      ],
    },
    {
      heading: "Kreditorlar talablarini qanoatlantirish navbati",
      text:
        "Tugatilayotgan tashkilotning mol-mulki " +
        "barcha talablarni qoplashga yetmasligi " +
        "mumkin. Shuning uchun kodeks qat'iy " +
        "NAVBAT belgilaydi.\n\n" +
        "Navbat tamoyili: birinchi navbatdagi " +
        "talablar to'liq qanoatlantirilgandan " +
        "keyingina keyingi navbatga " +
        "o'tiladi.\n\n" +
        "Umumiy mantiq shunday — avval " +
        "insonning hayoti va sog'lig'iga " +
        "yetkazilgan zarar, keyin mehnat " +
        "bilan bog'liq to'lovlar, so'ngra " +
        "majburiy to'lovlar, oxirida " +
        "qolgan kreditorlar.\n\n" +
        "Agar navbat ichida mol-mulk " +
        "yetmasa, u shu navbatdagi " +
        "kreditorlar o'rtasida talablari " +
        "MUTANOSIB ravishda taqsimlanadi.\n\n" +
        "Amaliy xulosa: kreditor sifatida " +
        "qaysi navbatda ekaningizni bilish " +
        "real kutilmani belgilaydi.",
      example:
        "Tugatilayotgan tashkilotda mol-mulk " +
        "kam qoldi. Oxirgi navbatdagi " +
        "kreditor talabining faqat bir " +
        "qismini olishi mumkin.",
      keyPoints: [
        "Talablar qat'iy navbat bo'yicha qanoatlantiriladi",
        "Keyingi navbat oldingisi to'lagach boshlanadi",
        "Navbat ichida taqsimot mutanosib bo'ladi",
        "Navbatingizni bilish real kutilmani belgilaydi",
      ],
      warning:
        "Talabingizni belgilangan muddatda " +
        "e'lon qilmasangiz, u kechikkan " +
        "talab sifatida oxirgi o'rinda " +
        "ko'rib chiqiladi yoki umuman " +
        "qanoatlantirilmaydi.",
      lawRefs: [{ code: "FK", article: "56" }],
    },
    {
      heading: "Yuridik shaxsning to'lovga qobiliyatsizligi",
      text:
        "Tashkilot kreditorlar talablarini " +
        "qanoatlantira olmay qolsa, TO'LOVGA " +
        "QOBILIYATSIZLIK instituti ishga " +
        "tushadi.\n\n" +
        "Bu — alohida huquqiy tartib bo'lib, " +
        "uning maqsadi ikki tomonlama: " +
        "kreditorlar manfaatini adolatli " +
        "himoya qilish va imkon bo'lsa " +
        "tashkilotni tiklash.\n\n" +
        "Muhim jihat: bu tartib boshlanganda " +
        "alohida kreditorning mustaqil " +
        "undiruv imkoniyati cheklanadi — " +
        "talablar umumiy tartibda ko'rib " +
        "chiqiladi. Aks holda tez harakat " +
        "qilgan kreditor hammasini olib, " +
        "qolganlarga hech nima " +
        "qolmasdi.\n\n" +
        "Tartib va oqibatlari alohida " +
        "qonunchilikda batafsil " +
        "belgilanadi.",
      example:
        "Kreditor mustaqil undiruv " +
        "boshlamoqchi bo'ldi, lekin " +
        "tashkilotga nisbatan " +
        "to'lovga qobiliyatsizlik " +
        "tartibi allaqachon " +
        "boshlangan edi — talab " +
        "umumiy tartibda ko'rib " +
        "chiqiladi.",
      keyPoints: [
        "Institut talablarni qanoatlantira olmaslikda qo'llanadi",
        "Maqsad — adolatli taqsimot va imkon bo'lsa tiklash",
        "Mustaqil undiruv imkoniyati cheklanadi",
        "Batafsil tartib alohida qonunchilikda",
      ],
      warning:
        "Kontragentga nisbatan bunday " +
        "tartib boshlanganini " +
        "kechikib bilish — talabni " +
        "boy berishning keng " +
        "tarqalgan sababi. Yirik " +
        "qarzdorni davriy tekshirib " +
        "turing.",
      lawRefs: [{ code: "FK", article: "57" }],
    },
    {
      heading: "Xo'jalik shirkatlari va jamiyatlari",
      text:
        "Tijorat tashkilotlarining eng keng " +
        "tarqalgan guruhi — XO'JALIK " +
        "SHIRKATLARI va JAMIYATLARI. Ular " +
        "ta'sischilarning ulushlarga " +
        "bo'lingan ustav fondiga ega " +
        "bo'ladi.\n\n" +
        "Ishtirokchilarning umumiy huquqlari: " +
        "boshqaruvda qatnashish, faoliyat " +
        "haqida ma'lumot olish, hujjatlar " +
        "bilan tanishish, foyda " +
        "taqsimotida ishtirok etish va " +
        "tugatishda qolgan mol-mulkning " +
        "bir qismini olish.\n\n" +
        "Umumiy burchlari: ta'sis " +
        "hujjatlari talablariga rioya " +
        "qilish, badallarni belgilangan " +
        "tartibda kiritish va tijorat " +
        "sirini oshkor qilmaslik.\n\n" +
        "Bu huquqlar «qog'ozdagi» emas — " +
        "ular buzilganda sudda himoya " +
        "qilinadi.",
      example:
        "Ishtirokchiga tashkilot moliyaviy " +
        "hujjatlari ko'rsatilmadi. " +
        "Ma'lumot olish huquqi qonunda " +
        "belgilangani uchun uni talab " +
        "qilish mumkin.",
      keyPoints: [
        "Ustav fondi ulushlarga bo'linadi",
        "Ishtirokchi boshqaruvda qatnashish huquqiga ega",
        "Ma'lumot va hujjat bilan tanishish huquqi bor",
        "Badal kiritish va sirni saqlash — burch",
      ],
      warning:
        "Ma'lumot so'rovingizni YOZMA " +
        "shaklda rasmiylashtiring. " +
        "Og'zaki so'rov rad etilganini " +
        "keyinchalik isbotlab " +
        "bo'lmaydi.",
      lawRefs: [
        { code: "FK", article: "58" },
        { code: "FK", article: "59" },
      ],
    },
    {
      heading: "To'liq shirkat va kommandit shirkat",
      text:
        "SHIRKAT — shaxslarning birlashuviga " +
        "asoslangan shakl. Bu yerda " +
        "ishtirokchilarning shaxsiy " +
        "ishtiroki va ishonchi hal " +
        "qiluvchi ahamiyatga ega.\n\n" +
        "TO'LIQ SHIRKATDA ishtirokchilar " +
        "shirkat majburiyatlari bo'yicha " +
        "o'zlariga tegishli barcha " +
        "mol-mulki bilan SOLIDAR " +
        "javobgar bo'ladilar.\n\n" +
        "Ya'ni bu yerda cheklangan " +
        "javobgarlik tamoyili " +
        "ISHLAMAYDI — bu shaklning " +
        "eng muhim xususiyati.\n\n" +
        "KOMMANDIT SHIRKATDA ikki toifa " +
        "ishtirokchi bo'ladi: to'liq " +
        "javobgar sheriklar va " +
        "faqat o'z badali doirasida " +
        "xavf ko'taradigan " +
        "hissadorlar.\n\n" +
        "Tanlov mantiqi: yuqori ishonch " +
        "va shaxsiy ishtirok bo'lsa " +
        "shirkat, kapital jalb qilish " +
        "kerak bo'lsa jamiyat " +
        "qulayroq.",
      example:
        "To'liq shirkat qarzdor bo'lib " +
        "qoldi va mol-mulki yetmadi. " +
        "Kreditor talabini " +
        "ishtirokchilarning shaxsiy " +
        "mol-mulkiga ham qarata " +
        "oladi.",
      keyPoints: [
        "Shirkat shaxsiy ishtirok va ishonchga asoslanadi",
        "To'liq shirkatda javobgarlik shaxsiy mol-mulkka yetadi",
        "Javobgarlik solidar bo'ladi",
        "Kommanditda hissadorlar badal doirasida xavf ko'taradi",
      ],
      warning:
        "To'liq shirkatga ishtirokchi " +
        "bo'lishdan oldin javobgarlik " +
        "hajmini aniq tushuning — u " +
        "kiritilgan badal bilan " +
        "cheklanmaydi.",
      lawRefs: [
        { code: "FK", article: "60" },
        { code: "FK", article: "61" },
      ],
    },
    {
      heading: "Mas'uliyati cheklangan jamiyat va aksiyadorlik jamiyati",
      text:
        "Eng keng tarqalgan ikki shakl — " +
        "MAS'ULIYATI CHEKLANGAN JAMIYAT " +
        "va AKSIYADORLIK JAMIYATI.\n\n" +
        "MCHJ ustav fondi ulushlarga " +
        "bo'lingan jamiyat bo'lib, " +
        "ishtirokchilari uning " +
        "majburiyatlari bo'yicha javob " +
        "bermaydi va faqat qo'shgan " +
        "badallari doirasida xavf " +
        "ko'taradi.\n\n" +
        "Aynan shu — «cheklangan " +
        "mas'uliyat» iborasining " +
        "ma'nosi va bu shaklning eng " +
        "katta afzalligi.\n\n" +
        "AKSIYADORLIK JAMIYATIDA ustav " +
        "fondi AKSIYALARGA bo'linadi. " +
        "Aksiyadorlar ham jamiyat " +
        "majburiyatlari bo'yicha " +
        "javob bermaydi va o'z " +
        "aksiyalari qiymati " +
        "doirasida xavf " +
        "ko'taradi.\n\n" +
        "Farq asosan kapitalni jalb " +
        "qilish va ulushni " +
        "o'tkazish tartibida.",
      example:
        "MChJ qarzdor bo'lib qoldi. " +
        "Ishtirokchi faqat kiritgan " +
        "badali doirasida yo'qotadi — " +
        "shaxsiy uyi undiruvga " +
        "tushmaydi.",
      keyPoints: [
        "MChJ ustav fondi ulushlarga bo'linadi",
        "Ishtirokchi badali doirasida xavf ko'taradi",
        "AJ da ustav fondi aksiyalarga bo'linadi",
        "Aksiyador aksiyalari qiymati doirasida xavf ko'taradi",
      ],
      warning:
        "Cheklangan mas'uliyat badal " +
        "TO'LIQ kiritilgan bo'lsa " +
        "to'liq ishlaydi. Kiritilmagan " +
        "qism bo'yicha javobgarlik " +
        "saqlanib qolishi mumkin.",
      lawRefs: [
        { code: "FK", article: "62" },
        { code: "FK", article: "64" },
      ],
    },
    {
      heading: "Shu'ba va qaram xo'jalik jamiyatlari",
      text:
        "Jamiyatlar bir-biriga bog'liq " +
        "bo'lishi mumkin va kodeks " +
        "bunday bog'liqlikning ikki " +
        "shaklini ajratadi.\n\n" +
        "SHU'BA jamiyat — boshqa jamiyat " +
        "ustunlik qiluvchi ishtirok " +
        "yoki tuzilgan shartnoma " +
        "tufayli uning qarorlarini " +
        "belgilash imkoniga ega " +
        "bo'lgan jamiyat.\n\n" +
        "QARAM jamiyat — boshqa " +
        "jamiyat uning ustav " +
        "fondida belgilangan " +
        "darajadan ortiq ulushga " +
        "ega bo'lgan jamiyat.\n\n" +
        "Nima uchun bu muhim: asosiy " +
        "jamiyat shu'ba jamiyatga " +
        "majburiy ko'rsatma berish " +
        "huquqiga ega bo'lsa, ayrim " +
        "hollarda uning " +
        "majburiyatlari bo'yicha " +
        "javobgarlikka tortilishi " +
        "mumkin.\n\n" +
        "Ya'ni bu yerda cheklangan " +
        "mas'uliyat tamoyiliga " +
        "istisno paydo bo'ladi.",
      example:
        "Shu'ba jamiyat asosiy " +
        "jamiyatning ko'rsatmasi " +
        "bilan bitim tuzdi va " +
        "qarzdor bo'lib qoldi. " +
        "Bunday holatda asosiy " +
        "jamiyatning javobgarligi " +
        "masalasi ko'tarilishi " +
        "mumkin.",
      keyPoints: [
        "Shu'ba jamiyat qarorlari boshqa jamiyat tomonidan belgilanadi",
        "Qaram jamiyat ulush miqdori bo'yicha aniqlanadi",
        "Asosiy jamiyat javobgarlikka tortilishi mumkin",
        "Bu cheklangan mas'uliyatga istisno",
      ],
      warning:
        "Guruh ichidagi tashkilot " +
        "bilan shartnoma tuzayotganda " +
        "uning mustaqilligini " +
        "baholang — qaror qabul " +
        "qiluvchi boshqa tashkilot " +
        "bo'lishi mumkin.",
      lawRefs: [
        { code: "FK", article: "67" },
        { code: "FK", article: "68" },
      ],
    },
    {
      heading: "Kooperativlar: ishlab chiqarish va matlubot",
      text:
        "KOOPERATIV — a'zolarning ixtiyoriy " +
        "birlashmasi bo'lib, u a'zolik " +
        "asosida tashkil etiladi.\n\n" +
        "ISHLAB CHIQARISH KOOPERATIVI " +
        "fuqarolarning birgalikdagi " +
        "ishlab chiqarish yoki boshqa " +
        "xo'jalik faoliyati uchun " +
        "tuziladi. Uning o'ziga xos " +
        "belgisi — a'zolarning " +
        "shaxsiy MEHNAT ishtiroki.\n\n" +
        "MATLUBOT KOOPERATIVI esa " +
        "a'zolarning moddiy va boshqa " +
        "ehtiyojlarini qondirish " +
        "uchun tuziladi va notijorat " +
        "tashkilot hisoblanadi.\n\n" +
        "Kooperativning jamiyatdan " +
        "asosiy farqi — bu yerda " +
        "kapital emas, SHAXS va " +
        "uning ishtiroki markazda " +
        "turadi. Odatda ovoz berish " +
        "ham ulushga emas, a'zolikka " +
        "qarab amalga oshiriladi.",
      example:
        "Kooperativ a'zosi «men eng " +
        "katta badal qo'shganman, " +
        "demak ovozim ham katta» " +
        "dedi. Kooperativda ovoz " +
        "odatda a'zolikka bog'liq, " +
        "badal hajmiga emas.",
      keyPoints: [
        "Kooperativ a'zolik asosida tuziladi",
        "Ishlab chiqarish kooperativida mehnat ishtiroki muhim",
        "Matlubot kooperativi notijorat tashkilot",
        "Markazda kapital emas, shaxs turadi",
      ],
      warning:
        "Kooperativ a'zosining " +
        "javobgarligi ustavda " +
        "belgilanadi va u jamiyat " +
        "ishtirokchisinikidan " +
        "kengroq bo'lishi mumkin — " +
        "ustavni diqqat bilan " +
        "o'qing.",
      lawRefs: [
        { code: "FK", article: "69" },
        { code: "FK", article: "73" },
      ],
    },
    {
      heading: "Notijorat tashkilotlar: birlashma, fond, muassasa",
      text:
        "Notijorat sohada bir necha " +
        "tashkiliy shakl mavjud va " +
        "ular maqsadi hamda mol-mulk " +
        "manbai bilan farqlanadi.\n\n" +
        "JAMOAT BIRLASHMASI — " +
        "fuqarolarning umumiy " +
        "manfaatlari asosida " +
        "ixtiyoriy birlashuvi.\n\n" +
        "JAMOAT FONDI — a'zolikka ega " +
        "bo'lmagan, ixtiyoriy mulkiy " +
        "badallar asosida tuziladigan " +
        "va ijtimoiy foydali " +
        "maqsadlarni ko'zlaydigan " +
        "tashkilot.\n\n" +
        "MUASSASA — mulkdor tomonidan " +
        "boshqaruv yoki " +
        "ijtimoiy-madaniy " +
        "funksiyalarni amalga " +
        "oshirish uchun tuzilgan va " +
        "u tomonidan to'liq yoki " +
        "qisman moliyalashtiriladigan " +
        "tashkilot.\n\n" +
        "Yuridik shaxslar o'z " +
        "faoliyatini muvofiqlashtirish " +
        "uchun BIRLASHMALAR " +
        "(assotsiatsiya, ittifoq) " +
        "tuzishi ham mumkin.",
      example:
        "Guruh fuqarolar umumiy " +
        "maqsad uchun birlashmoqchi. " +
        "A'zolik muhim bo'lsa jamoat " +
        "birlashmasi, mol-mulk " +
        "badallari asosida ishlash " +
        "kerak bo'lsa fond " +
        "qulayroq.",
      keyPoints: [
        "Jamoat birlashmasi — umumiy manfaat asosidagi ixtiyoriy birlashuv",
        "Fond a'zolikka ega emas, badallar asosida ishlaydi",
        "Muassasa mulkdor tomonidan moliyalashtiriladi",
        "Yuridik shaxslar birlashma tuzishi mumkin",
      ],
      warning:
        "Notijorat tashkilot " +
        "tadbirkorlik bilan " +
        "shug'ullanishi ustav " +
        "maqsadlariga xizmat qilishi " +
        "sharti bilan mumkin. Bu " +
        "chegaradan chiqish jiddiy " +
        "oqibat keltiradi.",
      lawRefs: [
        { code: "FK", article: "74" },
        { code: "FK", article: "75" },
        { code: "FK", article: "76" },
        { code: "FK", article: "77" },
      ],
    },
    {
      heading: "Davlat va o'zini o'zi boshqarish organlarining ishtiroki",
      text:
        "Fuqarolik munosabatlarida faqat " +
        "fuqarolar va tashkilotlar emas, " +
        "DAVLAT ham ishtirok etadi.\n\n" +
        "Eng muhim qoida: davlat " +
        "fuqarolik munosabatlarida " +
        "boshqa ishtirokchilar bilan " +
        "TENG ASOSDA qatnashadi. Ya'ni " +
        "bu yerda u hokimiyat sifatida " +
        "emas, oddiy taraf sifatida " +
        "chiqadi.\n\n" +
        "Bu — juda muhim himoya. Davlat " +
        "organi bilan shartnoma " +
        "tuzganingizda u sizga buyruq " +
        "bera olmaydi va shartnomani " +
        "bir tomonlama o'zgartira " +
        "olmaydi.\n\n" +
        "Fuqarolarning o'zini o'zi " +
        "boshqarish organlari ham " +
        "fuqarolik munosabatlarining " +
        "ishtirokchisi bo'la oladi.\n\n" +
        "Alohida qoida davlat va " +
        "yuridik shaxslar " +
        "javobgarligini FARQLAB " +
        "qo'yadi: davlat tuzgan " +
        "tashkilotning qarzi uchun " +
        "davlat avtomatik javob " +
        "bermaydi.",
      example:
        "Davlat organi bilan tuzilgan " +
        "shartnoma sharti bir " +
        "tomonlama o'zgartirilmoqchi " +
        "bo'ldi. Fuqarolik " +
        "munosabatida taraflar teng — " +
        "bunday o'zgartirish rozilik " +
        "talab qiladi.",
      keyPoints: [
        "Davlat fuqarolik munosabatlarida teng asosda qatnashadi",
        "U bu yerda hokimiyat sifatida chiqmaydi",
        "O'zini o'zi boshqarish organlari ham ishtirokchi bo'ladi",
        "Davlat va u tuzgan tashkilot javobgarligi farqlanadi",
      ],
      warning:
        "Davlat organi bilan " +
        "shartnomada byudjet " +
        "cheklovlariga oid maxsus " +
        "shartlar bo'lishi mumkin. " +
        "To'lov tartibi bandini " +
        "alohida diqqat bilan " +
        "o'qing.",
      lawRefs: [
        { code: "FK", article: "78" },
        { code: "FK", article: "79" },
        { code: "FK", article: "80" },
      ],
    },
  ],
};

module.exports = { LESSON };
