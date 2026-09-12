"use strict";
/**
 * SHARTNOMALAR MODULI — 7-DARS: SHARTNOMA BUZILISHI.
 * FK 313–324, 328–352, 382–385.
 *
 * ⚠️ FK 325–327 (neustoyka va zarar nisbati) ATAYLAB 6-darsda —
 * u yerda neustoyka to'liq bir mavzu sifatida beriladi va uni
 * ikkiga bo'lish o'quvchini chalkashtirardi.
 */

const LESSON = {
  key: "shartnoma-buzilishi",
  category: "contracts",
  level: "mid",
  order: 3070,
  title: "Shartnoma buzilganda: javobgarlik, o'zgartirish, bekor qilish",
  desc:
    "Talab va qarzni boshqa shaxsga o'tkazish, javobgarlik asoslari " +
    "va uning chegaralari, kreditor aybi, majburiyatning bekor " +
    "bo'lish asoslari hamda shartnomani o'zgartirish va bekor qilish.",
  objectives: [
    "Talabdan voz kechish va qarzni o'tkazish farqini bilasiz",
    "Javobgarlikning asoslari va aybsiz javobgarlikni bilasiz",
    "Yengib bo'lmaydigan kuch nima ekanini aniq bilasiz",
    "Kreditor aybi javobgarlikka qanday ta'sir qilishini bilasiz",
    "Majburiyat qanday asoslarda bekor bo'lishini bilasiz",
    "Vaziyat jiddiy o'zgarganda nima qilishni bilasiz",
  ],
  practicalSteps: [
    "Talabni sotib olayotganda asosiy shartnoma va hujjatlarni to'liq oling",
    "Qarzni boshqa shaxsga o'tkazishda kreditor roziligini yozma oling",
    "Yengib bo'lmaydigan kuch holatini vakolatli organ hujjati bilan tasdiqlang",
    "Shartnomani bekor qilish taklifini yozma yuboring va javob muddatini ko'rsating",
    "Hisobga o'tkazish uchun yozma ariza bering va uni qayd eting",
  ],
  sections: [
    {
      heading: "Kreditor huquqlarining boshqa shaxsga o'tishi",
      text:
        "Kreditorga majburiyat bo'yicha tegishli huquq boshqa " +
        "shaxsga BITIM bo'yicha (talabdan voz kechish) yoki " +
        "QONUN asosida o'tishi mumkin.\n\n" +
        "⚠️ ENG MUHIM QOIDA: talabdan boshqa shaxs foydasiga voz " +
        "kechish uchun QARZDORNING ROZILIGI TALAB QILINMAYDI — " +
        "qonun yoki shartnomada boshqacha nazarda tutilmagan " +
        "bo'lsa.\n\n" +
        "Lekin qarzdorni YOZMA XABARDOR qilish kerak. Xabar " +
        "berilmasa, qarzdor dastlabki kreditorga qilgan ijro " +
        "bilan majburiyatdan ozod bo'ladi — ya'ni yangi " +
        "kreditor zarar ko'radi.\n\n" +
        "O'TMAYDIGAN HUQUQLAR: shaxs bilan uzviy bog'liq " +
        "huquqlar (aliment, sog'liqqa yetkazilgan zarar " +
        "bo'yicha talablar) boshqa shaxsga o'tmaydi.\n\n" +
        "HAJMI: yangi kreditorga huquq oldingi kreditordagi " +
        "HAJMDA va SHARTLARDA o'tadi — ta'minot huquqlari " +
        "(garov, kafillik) bilan birga.\n\n" +
        "QARZDOR E'TIROZLARI: qarzdor yangi kreditorga qarshi " +
        "dastlabki kreditorga qarshi bo'lgan e'tirozlarini " +
        "bildirishga haqli.\n\n" +
        "JAVOBGARLIK: talabdan voz kechgan kreditor talabning " +
        "HAQIQIYLIGI uchun javob beradi, lekin qarzdorning " +
        "uni BAJARISHI uchun javob bermaydi — kafillikni " +
        "o'z zimmasiga olmagan bo'lsa.",
      example:
        "Qarz boshqa shaxsga o'tkazildi, qarzdor xabardor " +
        "qilinmadi va eski kreditorga to'ladi — u " +
        "majburiyatdan ozod bo'ladi.",
      keyPoints: [
        "Talab o'tkazish uchun qarzdor roziligi kerak emas",
        "Qarzdorni yozma xabardor qilish shart",
        "Shaxs bilan bog'liq huquqlar o'tmaydi",
        "Huquq ta'minot bilan birga o'tadi",
      ],
      warning:
        "Talabni sotib olayotganda uning haqiqiyligini va " +
        "muddatini tekshiring.",
      lawRefs: [
        { code: "FK", article: "313" },
        { code: "FK", article: "314" },
        { code: "FK", article: "315" },
        { code: "FK", article: "317" },
        { code: "FK", article: "319" },
        { code: "FK", article: "321" },
      ],
    },
    {
      heading: "Qarzni boshqa shaxsga o'tkazish",
      text:
        "Qarzdor o'z qarzini boshqa shaxsga o'tkazishi mumkin — " +
        "LEKIN faqat KREDITORNING ROZILIGI bilan.\n\n" +
        "⚠️ BU ASIMMETRIYA MANTIQIY: talab o'tkazilganda " +
        "qarzdor uchun hech narsa o'zgarmaydi (u qancha " +
        "to'lashi kerak bo'lsa shuncha to'laydi); qarz " +
        "o'tkazilganda esa kreditor uchun ko'p narsa " +
        "o'zgaradi — yangi qarzdorning to'lov qobiliyati " +
        "butunlay boshqa bo'lishi mumkin.\n\n" +
        "Shuning uchun kreditor roziligisiz qarzni " +
        "o'tkazish MUMKIN EMAS va bunday kelishuv unga " +
        "nisbatan kuchga ega bo'lmaydi.\n\n" +
        "SHAKL: qarzni o'tkazish asosiy bitim uchun " +
        "belgilangan shaklda amalga oshiriladi.\n\n" +
        "YANGI QARZDOR dastlabki qarzdorning kreditorga " +
        "qarshi e'tirozlarini bildirishga haqli.\n\n" +
        "TA'MINOT MASALASI JUDA MUHIM: qarz boshqa shaxsga " +
        "o'tganda kafillik va uchinchi shaxs bergan garov " +
        "odatda BEKOR BO'LADI — kafil yoki garovga " +
        "qo'yuvchi yangi qarzdor uchun javob berishga rozi " +
        "bo'lmasa.\n\n" +
        "Bu kreditor uchun jiddiy xavf: qarzni o'tkazishga " +
        "rozilik berayotganda ta'minot saqlanishini ham " +
        "alohida rasmiylashtirish kerak.\n\n" +
        "IJRONI BIR PAYTDA O'TKAZISH holati ham qonunda " +
        "alohida tartibga solingan.",
      example:
        "Qarz kreditor roziligi bilan boshqa shaxsga " +
        "o'tkazildi, lekin kafil rozi bo'lmadi — kafillik " +
        "bekor bo'ladi.",
      keyPoints: [
        "Qarzni o'tkazish kreditor roziligi bilan bo'ladi",
        "Roziliksiz kelishuv kreditorga qarshi kuchsiz",
        "Yangi qarzdor eski e'tirozlarni bildira oladi",
        "Ta'minot rozilik bo'lmasa bekor bo'ladi",
      ],
      warning:
        "Rozilik berayotganda ta'minotni saqlash haqida " +
        "alohida yozing.",
      lawRefs: [
        { code: "FK", article: "322" },
        { code: "FK", article: "323" },
      ],
    },
    {
      heading: "Javobgarlik asoslari va aybsiz javobgarlik",
      text:
        "Majburiyatni bajarmagan yoki lozim darajada " +
        "bajarmagan shaxs AYBI bo'lsa javobgar bo'ladi.\n\n" +
        "⚠️ AYB PREZUMPSIYASI: shaxs aybsizligini O'ZI " +
        "isbotlaydi. Ya'ni kreditor aybni isbotlashi shart " +
        "emas.\n\n" +
        "AYBSIZLIK MEZONI: shaxs majburiyatni lozim " +
        "darajada bajarish uchun o'zidan talab qilinadigan " +
        "barcha choralarni ko'rgan bo'lsa aybsiz " +
        "hisoblanadi.\n\n" +
        "TADBIRKORLIK FAOLIYATIDA QOIDA ANCHA QATTIQ: " +
        "tadbirkorlik faoliyatini amalga oshirishda " +
        "majburiyatni bajarmagan shaxs AYBIDAN QAT'I " +
        "NAZAR javob beradi — bajarish YENGIB " +
        "BO'LMAYDIGAN KUCH tufayli imkonsiz bo'lganini " +
        "isbotlamasa.\n\n" +
        "YENGIB BO'LMAYDIGAN KUCH — muayyan sharoitlarda " +
        "favqulodda va oldini olib bo'lmaydigan holat. " +
        "Bunga KIRMAYDI: kontragentlarning majburiyatni " +
        "buzishi; bozorda kerakli tovar yo'qligi; " +
        "qarzdorda zarur pul mablag'lari yo'qligi.\n\n" +
        "BU RO'YXAT AMALDA JUDA MUHIM — \"pulim yo'q edi\" " +
        "yoki \"yetkazib beruvchim aldadi\" degan sabablar " +
        "javobgarlikdan ozod qilmaydi.\n\n" +
        "UCHINCHI SHAXSLAR HARAKATI: qarzdor bajarish " +
        "yuklangan uchinchi shaxslarning harakatlari " +
        "uchun ham javob beradi.",
      example:
        "Yetkazib beruvchi mahsulot bermadi va shu sabab " +
        "shartnoma bajarilmadi — bu javobgarlikdan ozod " +
        "qilmaydi.",
      keyPoints: [
        "Ayb mavjud deb taxmin qilinadi",
        "Tadbirkorlikda javobgarlik aybdan qat'i nazar",
        "Yengib bo'lmaydigan kuch — favqulodda va oldini olib bo'lmas holat",
        "Pul yo'qligi va kontragent aybi uzr emas",
      ],
      warning:
        "Favqulodda holatni vakolatli organ hujjati bilan " +
        "tasdiqlang — og'zaki tushuntirish yetarli emas.",
      lawRefs: [
        { code: "FK", article: "333" },
        { code: "FK", article: "334" },
      ],
    },
    {
      heading: "Javobgarlikning shakllari va chegaralari",
      text:
        "MAJBURIYATNI ASL HOLIDA BAJARISH: neustoyka to'lash " +
        "va zararni qoplash majburiyatni ASL HOLIDA " +
        "bajarishdan ozod qilmaydi — qonun yoki shartnomada " +
        "boshqacha nazarda tutilmagan bo'lsa.\n\n" +
        "⚠️ YA'NI \"JARIMANI TO'LADIM, ENDI BAJARMASAM HAM " +
        "BO'LADI\" DEGAN YONDASHUV NOTO'G'RI.\n\n" +
        "Lekin bajarmaganlik uchun zarar qoplangan bo'lsa, " +
        "qarzdor asl holida bajarishdan ozod bo'ladi.\n\n" +
        "QARZDOR HISOBIDAN BAJARISH: qarzdor ishni bajarish " +
        "yoki xizmat ko'rsatish majburiyatini bajarmasa, " +
        "kreditor uni oqilona muddatda uchinchi shaxsga " +
        "topshirishga yoki o'zi bajarishga va zararni " +
        "qarzdordan undirishga haqli.\n\n" +
        "Bu juda samarali vosita: kutish o'rniga ishni " +
        "boshqasiga qildirib, farqni undirish mumkin.\n\n" +
        "XUSUSIY BELGILI ASHYO: uni topshirish " +
        "majburiyati bajarilmasa, kreditor ashyoni " +
        "qarzdordan olib qo'yishni talab qilishga " +
        "haqli.\n\n" +
        "SUBSIDIAR JAVOBGARLIK: qonun yoki shartnomada " +
        "nazarda tutilgan hollarda asosiy qarzdordan " +
        "keyin qo'shimcha javobgar shaxsga murojaat " +
        "qilish mumkin. Lekin avval ASOSIY qarzdorga " +
        "talab qo'yilishi kerak.\n\n" +
        "JAVOBGARLIKNI CHEKLASH: qonunda ayrim " +
        "majburiyatlar bo'yicha javobgarlik hajmini " +
        "cheklash nazarda tutilishi mumkin. Iste'molchi " +
        "bilan tuzilgan shartnomada esa javobgarlikni " +
        "cheklovchi kelishuv odatda haqiqiy emas.",
      example:
        "Pudratchi ishni bajarmadi — buyurtmachi boshqa " +
        "ustaga qildirib, narx farqini undirishi mumkin.",
      keyPoints: [
        "Neustoyka to'lash asl holida bajarishdan ozod qilmaydi",
        "Kreditor ishni uchinchi shaxsga topshirib zararni undira oladi",
        "Xususiy belgili ashyoni olib qo'yish talab qilinadi",
        "Subsidiar javobgarlikda avval asosiy qarzdorga murojaat qilinadi",
      ],
      warning:
        "Iste'molchi huquqini cheklovchi javobgarlik bandi " +
        "ishlamaydi.",
      lawRefs: [
        { code: "FK", article: "328" },
        { code: "FK", article: "329" },
        { code: "FK", article: "330" },
        { code: "FK", article: "331" },
        { code: "FK", article: "332" },
        { code: "FK", article: "324" },
      ],
    },
    {
      heading: "Kreditor aybi va ijroni kechiktirish",
      text:
        "Javobgarlik faqat qarzdorda emas — kreditorning " +
        "xatti-harakati ham hisobga olinadi.\n\n" +
        "KREDITORNING AYBI: majburiyat bajarilmasligiga " +
        "kreditorning aybi ham sabab bo'lsa, sud " +
        "javobgarlik miqdorini MUTANOSIB ravishda " +
        "kamaytiradi.\n\n" +
        "Shuningdek kreditor ataylab yoki ehtiyotsizlik " +
        "bilan zararning ko'payishiga yordam bergan " +
        "bo'lsa yoki uni kamaytirish uchun oqilona " +
        "choralar ko'rmagan bo'lsa ham javobgarlik " +
        "kamaytiriladi.\n\n" +
        "⚠️ AMALIY XULOSA KREDITORGA: zarar yuzaga " +
        "kelganda uni KAMAYTIRISH uchun chora ko'ring va " +
        "buni hujjatlashtiring. \"Kutdim, zarar o'sib " +
        "ketdi\" degan pozitsiya sizga qarshi ishlaydi.\n\n" +
        "KREDITORNING IJRONI KECHIKTIRISHI: kreditor " +
        "qarzdor taklif etgan lozim darajadagi ijroni " +
        "qabul qilishdan bosh tortsa yoki o'zidan " +
        "talab qilinadigan harakatlarni qilmasa " +
        "(hujjat bermasa, joy tayyorlamasa), U " +
        "kechiktirgan hisoblanadi.\n\n" +
        "OQIBATLARI: qarzdor kechiktirish bilan " +
        "yetkazilgan zararni qoplashni talab qilishga " +
        "haqli; pul majburiyati bo'yicha qarzdordan " +
        "kechiktirish davri uchun foizlar " +
        "undirilmaydi; qarzdor javobgarlikdan ozod " +
        "bo'ladi.\n\n" +
        "IKKI TARAFLAMA SHARTNOMA: bir tomon o'z " +
        "majburiyatini bajarmasa, ikkinchisi o'z " +
        "ijrosini to'xtatib turishga yoki shartnomadan " +
        "voz kechishga haqli bo'lishi mumkin.",
      example:
        "Buyurtmachi obyektga kirishni ta'minlamadi — ish " +
        "kechikkani uchun pudratchiga javobgarlik " +
        "yuklanmaydi.",
      keyPoints: [
        "Kreditor aybi javobgarlikni kamaytiradi",
        "Zararni kamaytirmaslik ham hisobga olinadi",
        "Kreditor ijroni kechiktirsa qarzdor javobgar emas",
        "Ikki taraflama shartnomada ijroni to'xtatish mumkin",
      ],
      warning:
        "Kreditor sifatida passiv turish javobgarlikni " +
        "sizga o'tkazishi mumkin.",
      lawRefs: [
        { code: "FK", article: "335" },
        { code: "FK", article: "336" },
        { code: "FK", article: "337" },
        { code: "FK", article: "338" },
        { code: "FK", article: "339" },
      ],
    },
    {
      heading: "Majburiyatning bekor bo'lish asoslari",
      text:
        "Majburiyat quyidagi asoslarda bekor bo'ladi.\n\n" +
        "BAJARILISH — asosiy va eng odatiy asos. Lozim " +
        "darajada bajarilgan majburiyat bekor bo'ladi.\n\n" +
        "VOZ KECHISH HAQI — tomonlar kelishuvi bilan " +
        "qarzdor pul yoki boshqa mol-mulk berib " +
        "majburiyatdan ozod bo'lishi mumkin.\n\n" +
        "HISOBGA O'TKAZISH — bu amalda eng foydali " +
        "vositalardan biri. Bir jinsli qarshi talablar " +
        "muddati kelgan bo'lsa, majburiyat to'liq yoki " +
        "qisman hisobga o'tkazish yo'li bilan bekor " +
        "bo'ladi. Buning uchun BIR tomonning arizasi " +
        "yetarli.\n\n" +
        "⚠️ HISOBGA O'TKAZISHGA YO'L QO'YILMAYDIGAN " +
        "HOLATLAR bor: hayot va sog'liqqa yetkazilgan " +
        "zarar, aliment, umrbod ta'minot bo'yicha " +
        "talablar hamda da'vo muddati o'tgan " +
        "talablar.\n\n" +
        "QARZDOR VA KREDITOR BIR SHAXS bo'lib " +
        "qolganda majburiyat bekor bo'ladi.\n\n" +
        "YANGILANISH (novatsiya) — tomonlar dastlabki " +
        "majburiyatni boshqa majburiyat bilan " +
        "almashtirishi.\n\n" +
        "QARZDAN VOZ KECHISH — kreditor qarzdorni " +
        "majburiyatdan ozod qilishi.\n\n" +
        "BAJARISH IMKONSIZLIGI, DAVLAT ORGANI " +
        "HUJJATI, FUQARONING VAFOTI (shaxsan bog'liq " +
        "majburiyatlarda) va YURIDIK SHAXSNING " +
        "TUGATILISHI ham asos bo'ladi.",
      example:
        "Ikki tashkilotning bir-biriga qarzi bor edi — " +
        "biri yozma ariza berib qarzlarni hisobga " +
        "o'tkazdi.",
      keyPoints: [
        "Asosiy asos — majburiyatning bajarilishi",
        "Hisobga o'tkazish uchun bir tomon arizasi yetarli",
        "Ayrim talablarni hisobga o'tkazib bo'lmaydi",
        "Novatsiya, voz kechish va imkonsizlik ham asos",
      ],
      warning:
        "Hisobga o'tkazish arizasini yozma bering va " +
        "yetkazilganini tasdiqlang.",
      lawRefs: [
        { code: "FK", article: "340" },
        { code: "FK", article: "341" },
        { code: "FK", article: "342" },
        { code: "FK", article: "343" },
        { code: "FK", article: "344" },
        { code: "FK", article: "346" },
        { code: "FK", article: "347" },
        { code: "FK", article: "348" },
        { code: "FK", article: "349" },
        { code: "FK", article: "351" },
        { code: "FK", article: "352" },
      ],
    },
    {
      heading: "Shartnomani o'zgartirish va bekor qilish asoslari",
      text:
        "Shartnomani o'zgartirish va bekor qilish uch yo'l " +
        "bilan amalga oshiriladi.\n\n" +
        "BIRINCHI — TOMONLAR KELISHUVI. Bu eng oddiy va " +
        "eng tez yo'l.\n\n" +
        "IKKINCHI — SUD QARORI. U ikki asosda mumkin: " +
        "shartnoma ikkinchi tomon tomonidan JIDDIY " +
        "BUZILGANDA yoki qonun hamda shartnomada nazarda " +
        "tutilgan boshqa hollarda.\n\n" +
        "⚠️ JIDDIY BUZILISH TA'RIFI MUHIM: shartnoma bir " +
        "tomon tomonidan shunday buzilishiki, ikkinchi " +
        "tomon shartnoma tuzayotganda ishonishi mumkin " +
        "bo'lgan narsadan sezilarli darajada mahrum " +
        "bo'ladi.\n\n" +
        "Ya'ni har qanday kichik buzilish shartnomani " +
        "bekor qilish uchun asos emas.\n\n" +
        "UCHINCHI — BIR TOMONLAMA VOZ KECHISH. Bu faqat " +
        "qonun yoki shartnomada nazarda tutilgan hollarda " +
        "mumkin. Bunday holatda shartnoma bekor qilingan " +
        "hisoblanadi.\n\n" +
        "AMALIY XULOSA: shartnoma tuzayotganda bir " +
        "tomonlama voz kechish shartlarini yozib qo'ying — " +
        "aks holda sudsiz chiqib bo'lmaydi.",
      example:
        "Tovar takroran sifatsiz yetkazildi — bu jiddiy " +
        "buzilish sifatida baholanishi va shartnomani " +
        "bekor qilish asosi bo'lishi mumkin.",
      keyPoints: [
        "O'zgartirish kelishuv, sud yoki bir tomonlama voz kechish bilan",
        "Sud yo'li uchun jiddiy buzilish kerak",
        "Jiddiy buzilish — kutilgan narsadan mahrum bo'lish",
        "Bir tomonlama voz kechish qonun yoki shartnomada yozilishi kerak",
      ],
      warning:
        "Shartnomada chiqish sharti bo'lmasa, undan " +
        "chiqish faqat sud orqali bo'ladi.",
      lawRefs: [{ code: "FK", article: "382" }],
    },
    {
      heading: "Vaziyat jiddiy o'zgarganda",
      text:
        "Bu — kam ma'lum, lekin favqulodda holatlarda juda " +
        "muhim qoida.\n\n" +
        "Tomonlar shartnoma tuzayotganda asos qilib olgan " +
        "VAZIYAT JIDDIY O'ZGARGANDA shartnoma " +
        "o'zgartirilishi yoki bekor qilinishi mumkin.\n\n" +
        "O'ZGARISH JIDDIY hisoblanadi, agar tomonlar buni " +
        "oldindan ko'ra bilganida shartnomani umuman " +
        "tuzmagan yoki sezilarli boshqa shartlarda " +
        "tuzgan bo'lardi.\n\n" +
        "⚠️ SUD ORQALI BEKOR QILISH UCHUN BIR NECHA SHART " +
        "BIR VAQTDA BO'LISHI KERAK: shartnoma tuzilayotganda " +
        "tomonlar bunday o'zgarish bo'lmasligini nazarda " +
        "tutgan bo'lishi; o'zgarishni manfaatdor tomon " +
        "yenga olmasligi; bajarish tomonlar manfaatlari " +
        "muvozanatini shunchalik buzishi; xavf manfaatdor " +
        "tomon zimmasida ekani shartnoma odatlaridan " +
        "kelib chiqmasligi.\n\n" +
        "Bu shartlar ATAYLAB QATTIQ: aks holda har " +
        "qanday tomon noqulay shartnomadan osongina " +
        "chiqib ketardi va shartnoma barqarorligi " +
        "yo'qolardi.\n\n" +
        "AMALIY XULOSA: bozor narxining o'zgarishi yoki " +
        "biznesning yomonlashishi odatda YETARLI ASOS " +
        "EMAS — bu tijorat xavfi. Shuning uchun uzoq " +
        "muddatli shartnomalarda narxni qayta ko'rib " +
        "chiqish mexanizmini oldindan yozib qo'yish " +
        "ancha ishonchli yo'l.",
      example:
        "Uzoq muddatli shartnomada narx qayta ko'rib " +
        "chiqish bandi yo'q edi — sharoit o'zgarganda " +
        "uni o'zgartirish qiyin bo'ldi.",
      keyPoints: [
        "Vaziyat jiddiy o'zgarsa shartnoma o'zgartirilishi mumkin",
        "Shartlar ataylab qattiq belgilangan",
        "Oddiy tijorat xavfi asos bo'lmaydi",
        "Narxni qayta ko'rib chiqish bandini oldindan yozing",
      ],
      warning:
        "\"Sharoit o'zgardi\" degan dalil sudda deyarli " +
        "har doim yetarli emas.",
      lawRefs: [{ code: "FK", article: "383" }],
    },
    {
      heading: "O'zgartirish va bekor qilishning tartibi va oqibatlari",
      text:
        "TARTIB: shartnomani o'zgartirish yoki bekor qilish " +
        "shartnoma tuzilgan SHAKLDA amalga oshiriladi — " +
        "qonun, shartnoma yoki ish muomalasi odatlaridan " +
        "boshqacha kelib chiqmasa.\n\n" +
        "⚠️ SUDGACHA TARTIB MAJBURIY: shartnomani " +
        "o'zgartirish yoki bekor qilish to'g'risidagi " +
        "talab sudga faqat ikkinchi tomondan RAD JAVOBI " +
        "olingandan keyin yoki taklifda ko'rsatilgan " +
        "muddat (u yo'q bo'lsa qonunda belgilangan " +
        "muddat) ichida javob olinmagandan keyin " +
        "qo'yilishi mumkin.\n\n" +
        "Ya'ni to'g'ridan-to'g'ri sudga borish mumkin " +
        "emas — avval yozma taklif yuborish kerak. Bu " +
        "bosqichni o'tkazib yuborish arizaning " +
        "qaytarilishiga olib keladi.\n\n" +
        "OQIBATLARI: shartnoma o'zgartirilganda " +
        "majburiyatlar o'zgartirilgan ko'rinishda " +
        "saqlanadi; bekor qilinganda esa majburiyatlar " +
        "bekor bo'ladi.\n\n" +
        "PAYTI: majburiyatlar kelishuv tuzilgan paytdan " +
        "yoki sud qarori qonuniy kuchga kirgan paytdan " +
        "o'zgartirilgan yoki bekor qilingan hisoblanadi.\n\n" +
        "MUHIM QOIDA: tomonlar shartnoma " +
        "o'zgartirilgunga yoki bekor qilingunga qadar " +
        "majburiyat bo'yicha BAJARILGAN narsani " +
        "qaytarishni talab qilishga haqli emas — qonun " +
        "yoki tomonlar kelishuvida boshqacha nazarda " +
        "tutilmagan bo'lsa.\n\n" +
        "JAVOBGARLIK SAQLANADI: shartnoma jiddiy " +
        "buzilgani sabab bekor qilingan bo'lsa, " +
        "ikkinchi tomon zararni qoplashni talab " +
        "qilishga haqli.",
      example:
        "Shartnomani bekor qilish talabi to'g'ridan-" +
        "to'g'ri sudga berildi — ariza sudgacha tartib " +
        "bajarilmagani uchun qaytarildi.",
      keyPoints: [
        "O'zgartirish shartnoma shaklida rasmiylashtiriladi",
        "Sudgacha yozma taklif yuborish majburiy",
        "Bajarilgan narsa odatda qaytarilmaydi",
        "Jiddiy buzilishda zarar talab qilinadi",
      ],
      warning:
        "Sudgacha tartibni o'tkazib yuborish — vaqt " +
        "yo'qotishning eng oson yo'li.",
      lawRefs: [
        { code: "FK", article: "384" },
        { code: "FK", article: "385" },
      ],
    },
  ],
};

module.exports = { LESSON };
