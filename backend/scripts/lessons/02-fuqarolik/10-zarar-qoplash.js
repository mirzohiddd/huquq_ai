"use strict";
/**
 * FUQAROLIK MODULI — 10-DARS: ZARAR YETKAZISH. FK2 985–1020.
 *
 * ⚠️ FK2 999 va 1006 maxsus modulda (yo'lovchi tashish) ham
 * uchraydi — u yerda TRANSPORT kontekstida, bu yerda esa umumiy
 * delikt qoidasi sifatida. Rakurs boshqa, takror emas.
 */

const LESSON = {
  key: "zarar-qoplash",
  category: "civil",
  level: "advanced",
  order: 2100,
  title: "Zarar yetkazish va uni qoplash",
  desc:
    "Zarar uchun javobgarlikning umumiy asoslari, xodim va " +
    "voyaga yetmaganlar yetkazgan zarar, oshiqcha xavf manbai, " +
    "sog'liqqa va hayotga yetkazilgan zarar hamda nuqsonli tovar " +
    "zarari.",
  objectives: [
    "Javobgarlikning to'rtta shartini bilasiz",
    "Ayb prezumpsiyasi nima ekanini tushunasiz",
    "Kim boshqaning harakati uchun javob berishini bilasiz",
    "Oshiqcha xavf manbai qoidasini bilasiz",
    "Sog'liq va hayot zarari qanday hisoblanishini bilasiz",
    "Nuqsonli tovar zarari uchun kimga da'vo qilishni bilasiz",
  ],
  practicalSteps: [
    "Zarar yuzaga kelganda uni darhol qayd eting: foto, dalolatnoma, guvohlar",
    "Tibbiy yordamga murojaat qiling va barcha hujjatlarni saqlang",
    "Daromadingizni tasdiqlovchi hujjatlarni to'plang",
    "Zarar yetkazuvchi kim ekanini aniqlang — ko'pincha bu xodim emas, tashkilot",
    "Tovar nuqsoni bo'lsa chek va kafolat talonini albatta saqlang",
  ],
  sections: [
    {
      heading: "Javobgarlikning umumiy asoslari",
      text:
        "Fuqaroning shaxsiga yoki mol-mulkiga, shuningdek yuridik " +
        "shaxsning mol-mulkiga yetkazilgan zarar uni yetkazgan " +
        "shaxs tomonidan TO'LIQ hajmda qoplanishi lozim.\n\n" +
        "⚠️ TO'RTTA SHART BIR VAQTDA BO'LISHI KERAK:\n\n" +
        "(1) ZARAR mavjudligi;\n" +
        "(2) harakatning QONUNGA XILOFLIGI;\n" +
        "(3) harakat va zarar o'rtasidagi SABABIY BOG'LANISH;\n" +
        "(4) zarar yetkazuvchining AYBI.\n\n" +
        "AYB PREZUMPSIYASI — eng muhim amaliy qoida: zarar " +
        "yetkazgan shaxs zarar O'Z AYBI BILAN yetkazilmaganini " +
        "isbotlasa, javobgarlikdan ozod qilinadi.\n\n" +
        "Ya'ni AYB BOR deb taxmin qilinadi va aybsizligini " +
        "javobgar isbotlaydi. Jabrlanuvchi esa faqat qolgan " +
        "uchta shartni isbotlashi kerak.\n\n" +
        "Bu jabrlanuvchi uchun sezilarli yengillik — lekin " +
        "zarar, qonunga xiloflik va bog'lanish baribir " +
        "isbotlanishi kerak.\n\n" +
        "Qonunda nazarda tutilgan hollarda AYBSIZ ham " +
        "javobgarlik yuzaga kelishi mumkin.",
      example:
        "Ta'mirlash paytida qo'shni kvartira suv bosdi — " +
        "ta'mirlovchi aybsizligini o'zi isbotlashi kerak.",
      keyPoints: [
        "Zarar to'liq hajmda qoplanadi",
        "To'rtta shart bir vaqtda bo'lishi kerak",
        "Ayb mavjud deb taxmin qilinadi",
        "Aybsizlikni zarar yetkazuvchi isbotlaydi",
      ],
      warning:
        "Zararni qayd etmasdan qoldirish — talabning rad " +
        "etilishiga olib keladi.",
      lawRefs: [{ code: "FK2", article: "985" }],
    },
    {
      heading: "Zararning oldini olish va uni to'xtatish",
      text:
        "Zarar yetkazish XAVFI ham huquqiy ahamiyatga ega: bunday " +
        "xavf tug'diruvchi faoliyatni TAQIQLASH to'g'risida " +
        "da'vo qo'yish mumkin.\n\n" +
        "⚠️ YA'NI ZARAR YETKAZILISHINI KUTISH SHART EMAS. Bu " +
        "qoida ko'pchilikka noma'lum, lekin u eng samarali " +
        "himoya vositalaridan biri.\n\n" +
        "Amaliy misollar: qo'shni bino qulash xavfini " +
        "tug'diryapti; qurilish ishlari sizning binongizga " +
        "yoriq keltirmoqda; xavfli faoliyat sanitariya " +
        "talablarini buzmoqda.\n\n" +
        "Agar zarar allaqachon yetkazilayotgan bo'lsa, sud " +
        "javobgarni faoliyatni TO'XTATISHGA majbur qilishi " +
        "mumkin.\n\n" +
        "MUHIM ISTISNO: sud faoliyatni to'xtatish to'g'risidagi " +
        "da'voni rad etishi mumkin, agar to'xtatish jamiyat " +
        "manfaatlariga zid bo'lsa. Bunday holatda zararni " +
        "qoplash majburiyati saqlanadi.\n\n" +
        "AMALIY QADAM: xavfni qayd eting (ekspert xulosasi, " +
        "foto, organ dalolatnomasi) va yozma ogohlantirish " +
        "yuboring — bu keyingi da'voning asosi bo'ladi.",
      example:
        "Qo'shni uchastkadagi ishlar devorda yoriq keltirdi — " +
        "ishlarni to'xtatish talab qilinishi mumkin.",
      keyPoints: [
        "Zarar xavfi ham da'vo asosi bo'ladi",
        "Zarar yetkazilishini kutish shart emas",
        "Sud faoliyatni to'xtatishi mumkin",
        "Jamiyat manfaati bo'lsa to'xtatish rad etilishi mumkin",
      ],
      warning:
        "Xavfni hujjatlashtirmasdan da'vo qo'yish natija " +
        "bermaydi.",
      lawRefs: [{ code: "FK2", article: "986" }],
    },
    {
      heading: "Zaruriy mudofaa va oxirgi zarurat",
      text:
        "Ikki holat javobgarlikni istisno qiladi yoki " +
        "o'zgartiradi.\n\n" +
        "ZARURIY MUDOFAA holatida yetkazilgan zarar QOPLANMAYDI " +
        "— agar uning chegaralari buzilmagan bo'lsa. Ya'ni " +
        "hujumdan himoyalanayotganda hujumchiga yetkazilgan " +
        "zarar uchun javobgarlik yuzaga kelmaydi.\n\n" +
        "⚠️ CHEGARA MUHIM: mudofaa hujum xarakteriga mos " +
        "bo'lishi kerak. Chegara buzilsa javobgarlik " +
        "saqlanadi.\n\n" +
        "OXIRGI ZARURAT holatida — ya'ni zarar boshqa " +
        "kattaroq xavfni bartaraf etish uchun yetkazilganda — " +
        "qoida BOSHQACHA: zarar QOPLANISHI kerak.\n\n" +
        "Sabab: bu yerda zarar ko'rgan shaxs aybdor emas " +
        "(mudofaadan farqli). Lekin sud holatlarni hisobga " +
        "olib, zararni manfaati uchun harakat qilingan " +
        "uchinchi shaxs zimmasiga yuklashi yoki qoplashdan " +
        "qisman hamda to'liq ozod qilishi mumkin.\n\n" +
        "AMALIY FARQ: mudofaada zarar HUJUMCHIGA, oxirgi " +
        "zaruratda esa BEGONA shaxsga yetkaziladi — shuning " +
        "uchun qoidalar boshqacha.",
      example:
        "Yong'inni to'xtatish uchun qo'shni mulkka zarar " +
        "yetkazildi — bu oxirgi zarurat va zarar qoplanishi " +
        "kerak.",
      keyPoints: [
        "Zaruriy mudofaada zarar qoplanmaydi",
        "Mudofaa chegarasi buzilsa javobgarlik saqlanadi",
        "Oxirgi zaruratda zarar qoplanadi",
        "Sud qoplash yukini boshqa shaxsga yuklashi mumkin",
      ],
      warning:
        "Mudofaa chegarasi masalasi ko'pincha ekspertiza va " +
        "guvohlar bilan hal qilinadi.",
      lawRefs: [
        { code: "FK2", article: "987" },
        { code: "FK2", article: "988" },
      ],
    },
    {
      heading: "Xodim yetkazgan zarar uchun javobgarlik",
      text:
        "Yuridik shaxs yoki fuqaro O'Z XODIMI tomonidan mehnat " +
        "(xizmat) vazifalarini bajarish chog'ida yetkazilgan " +
        "zararni qoplaydi.\n\n" +
        "⚠️ BU JABRLANUVCHI UCHUN JUDA MUHIM: da'vo XODIMGA " +
        "emas, TASHKILOTGA qo'yiladi.\n\n" +
        "Sabab amaliy: tashkilotning to'lov qobiliyati odatda " +
        "yuqoriroq va uni topish osonroq. Tashkilot " +
        "keyinchalik xodimga nisbatan regress talabini " +
        "qo'yishi mumkin — lekin bu sizning masalangiz " +
        "emas.\n\n" +
        "AMALIY XATO: ko'p odam kuryerga, haydovchiga yoki " +
        "ustaga shaxsan da'vo qiladi. To'g'ri javobgar — " +
        "ularni ishga olgan tashkilot.\n\n" +
        "SHART: zarar mehnat vazifalarini BAJARISH CHOG'IDA " +
        "yetkazilgan bo'lishi kerak. Xodim ish vaqtidan " +
        "tashqarida shaxsiy maqsadda harakat qilgan bo'lsa, " +
        "u o'zi javob beradi.\n\n" +
        "DAVLAT ORGANLARI va ularning mansabdor shaxslari " +
        "yetkazgan zarar ham alohida tartibda qoplanadi — " +
        "javobgar tegishli budjet bo'ladi.\n\n" +
        "TERGOV, SURISHTIRUV, PROKURATURA VA SUD organlarining " +
        "qonunga xilof harakatlari tufayli yetkazilgan zarar " +
        "uchun esa maxsus qoida amal qiladi va u ayrim " +
        "hollarda AYBDAN QAT'I NAZAR qoplanadi.",
      example:
        "Yetkazib berish paytida kuryer mulkka zarar yetkazdi " +
        "— da'vo uni ishga olgan tashkilotga qo'yiladi.",
      keyPoints: [
        "Xodim zarari uchun tashkilot javob beradi",
        "Da'vo tashkilotga qo'yiladi",
        "Zarar mehnat vazifasini bajarish chog'ida bo'lishi kerak",
        "Davlat organlari zarari budjet hisobidan qoplanadi",
      ],
      warning:
        "Xodimga shaxsan qo'yilgan da'vo rad etilishi va vaqt " +
        "yo'qolishi mumkin.",
      lawRefs: [
        { code: "FK2", article: "989" },
        { code: "FK2", article: "990" },
        { code: "FK2", article: "991" },
      ],
    },
    {
      heading: "Voyaga yetmaganlar yetkazgan zarar",
      text:
        "Yosh guruhiga qarab javobgarlik boshqa-boshqa shaxsga " +
        "yuklanadi.\n\n" +
        "O'N TO'RT YOSHGACHA bo'lgan bola yetkazgan zarar uchun " +
        "uning OTA-ONASI, farzandlikka oluvchilari yoki vasiysi " +
        "javob beradi — agar zarar o'z aybi bilan " +
        "yetkazilmaganini isbotlay olmasa.\n\n" +
        "Bola ta'lim yoki tibbiy muassasa NAZORATIDA bo'lgan " +
        "paytda zarar yetkazgan bo'lsa, o'sha muassasa javob " +
        "beradi.\n\n" +
        "⚠️ MUHIM QOIDA: bolaning javobgarligi keyinchalik " +
        "voyaga yetishi bilan ota-onadan olib tashlanmaydi — " +
        "ya'ni majburiyat saqlanadi.\n\n" +
        "O'N TO'RTDAN O'N SAKKIZ YOSHGACHA bo'lganlar zarar " +
        "uchun O'ZLARI javob beradi. Ularda mablag' yetarli " +
        "bo'lmasa, yetishmagan qism ota-onasi yoki homiysi " +
        "tomonidan qoplanadi (aybsizligini isbotlamasa).\n\n" +
        "OTA-ONALIK HUQUQIDAN MAHRUM ETILGAN ota-ona ham " +
        "qonunda belgilangan muddat ichida bola yetkazgan " +
        "zarar uchun javobgar bo'lishi mumkin — agar bolaning " +
        "xatti-harakati tarbiyadagi nuqson natijasi " +
        "bo'lsa.\n\n" +
        "AMALIY XULOSA: da'vo qo'yishdan oldin zarar " +
        "yetkazuvchining yoshini va o'sha paytda kimning " +
        "nazoratida bo'lganini aniqlang.",
      example:
        "Maktabdagi tanaffusda bola boshqa bolaga zarar " +
        "yetkazdi — nazorat muassasada bo'lgani uchun javobgar " +
        "masalasi shu asosda hal qilinadi.",
      keyPoints: [
        "O'n to'rt yoshgacha — ota-ona yoki vasiy javob beradi",
        "Muassasa nazoratida bo'lsa muassasa javob beradi",
        "O'n to'rtdan o'n sakkizgacha — o'zi javob beradi",
        "Mablag' yetmasa ota-ona qo'shimcha javob beradi",
      ],
      warning:
        "Voyaga yetish ota-onaning oldingi majburiyatini bekor " +
        "qilmaydi.",
      lawRefs: [
        { code: "FK2", article: "993" },
        { code: "FK2", article: "994" },
        { code: "FK2", article: "995" },
      ],
    },
    {
      heading: "Layoqatsiz va o'z harakatini tushunmaydigan shaxslar",
      text:
        "MUOMALAGA LAYOQATSIZ deb topilgan fuqaro yetkazgan zarar " +
        "uchun uning VASIYSI yoki uni nazorat qilishga majbur " +
        "bo'lgan tashkilot javob beradi — aybsizligini " +
        "isbotlamasa.\n\n" +
        "MUOMALA LAYOQATI CHEKLANGAN fuqaro esa zarar uchun " +
        "O'ZI javob beradi. Bu farq muhim: cheklash layoqatni " +
        "butunlay olib tashlamaydi.\n\n" +
        "O'Z HARAKATLARINING AHAMIYATINI TUSHUNA OLMAYDIGAN " +
        "holatda bo'lgan muomalaga layoqatli fuqaro yetkazgan " +
        "zarar umumiy qoida bo'yicha qoplanmaydi.\n\n" +
        "⚠️ LEKIN ISTISNOLAR BOR: agar shaxs o'zini bunday " +
        "holatga SPIRTLI ICHIMLIK yoki giyohvandlik vositalari " +
        "bilan solgan bo'lsa, u javobgarlikdan ozod " +
        "qilinmaydi.\n\n" +
        "Bu juda muhim amaliy qoida: mastlik javobgarlikni " +
        "yengillashtirmaydi, aksincha uni saqlab qoladi.\n\n" +
        "Shuningdek sud jabrlanuvchi va zarar yetkazuvchining " +
        "mulkiy holatini hisobga olib, qoplash majburiyatini " +
        "to'liq yoki qisman zarar yetkazuvchi zimmasiga " +
        "yuklashi mumkin.",
      example:
        "Mast holatda mulkka zarar yetkazgan shaxs " +
        "\"tushunmadim\" degan dalil bilan javobgarlikdan " +
        "qutula olmaydi.",
      keyPoints: [
        "Layoqatsiz shaxs zarari uchun vasiy javob beradi",
        "Layoqati cheklangan shaxs o'zi javob beradi",
        "Tushunmaydigan holatdagi zarar odatda qoplanmaydi",
        "Mastlik javobgarlikdan ozod qilmaydi",
      ],
      warning:
        "\"Esimda yo'q\" degan dalil ixtiyoriy mastlikda " +
        "ishlamaydi.",
      lawRefs: [
        { code: "FK2", article: "996" },
        { code: "FK2", article: "997" },
        { code: "FK2", article: "998" },
      ],
    },
    {
      heading: "Oshiqcha xavf tug'diradigan faoliyat",
      text:
        "Tevarak-atrofdagilarga OSHIQCHA XAVF tug'diradigan " +
        "faoliyat bilan shug'ullanuvchi shaxslar yetkazilgan " +
        "zararni AYBIDAN QAT'I NAZAR qoplashi shart.\n\n" +
        "⚠️ BU ENG MUHIM ISTISNO: bu yerda ayb prezumpsiyasi " +
        "emas, AYBSIZ javobgarlik qo'llaniladi.\n\n" +
        "OSHIQCHA XAVF MANBALARIGA misollar: transport " +
        "vositalari, mexanizmlar, yuqori kuchlanishli elektr " +
        "energiyasi, portlovchi moddalar, kuchli ta'sir " +
        "etuvchi zaharlar, qurilish faoliyati.\n\n" +
        "JAVOBGAR — manbaga EGALIK QILUVCHI shaxs: mulkdor, " +
        "ijarachi yoki boshqa qonuniy asosda egalik " +
        "qiluvchi.\n\n" +
        "OZOD QILISH ASOSLARI juda tor: zarar yengib " +
        "bo'lmaydigan kuch yoki jabrlanuvchining qasdi " +
        "oqibatida yuzaga kelgan bo'lsa.\n\n" +
        "MUHIM QO'SHIMCHA: manba qonunga xilof ravishda " +
        "egalikdan chiqib ketgan bo'lsa (masalan o'g'irlangan " +
        "bo'lsa), javobgarlik uni qonunga xilof egallagan " +
        "shaxsga o'tadi.\n\n" +
        "UY HAYVONLARI yetkazgan zarar uchun ham alohida " +
        "qoida mavjud va javobgarlik hayvon egasiga " +
        "yuklanadi.",
      example:
        "Texnik nosozlik tufayli zarar yetkazildi — egalik " +
        "qiluvchi aybi bo'lmasa ham javob beradi.",
      keyPoints: [
        "Oshiqcha xavf manbai uchun aybsiz javobgarlik",
        "Javobgar — manbaga qonuniy egalik qiluvchi",
        "Ozod qilish asoslari juda tor",
        "Manba o'g'irlangan bo'lsa javobgarlik o'tadi",
      ],
      warning:
        "Bunday faoliyatda sug'urta — ixtiyoriy emas, amaliy " +
        "zarurat.",
      lawRefs: [
        { code: "FK2", article: "999" },
        { code: "FK2", article: "1002" },
      ],
    },
    {
      heading: "Birgalikda yetkazilgan zarar va regress",
      text:
        "Bir necha shaxs BIRGALIKDA zarar yetkazgan bo'lsa, ular " +
        "jabrlanuvchi oldida SOLIDAR javob beradi.\n\n" +
        "⚠️ JABRLANUVCHI UCHUN BU KATTA AFZALLIK: u istalgan " +
        "bir shaxsdan zararning TO'LIQ summasini talab qilishi " +
        "mumkin. Ular o'zaro qanday hisoblashishi — sizning " +
        "masalangiz emas.\n\n" +
        "Ya'ni to'lov qobiliyati eng yuqori bo'lgan shaxsni " +
        "tanlash mumkin.\n\n" +
        "Jabrlanuvchining arizasiga binoan va uning " +
        "manfaatlarini ko'zlab sud ulushli javobgarlikni ham " +
        "belgilashi mumkin.\n\n" +
        "REGRESS HUQUQI: zararni qoplagan shaxs (agar u zarar " +
        "yetkazuvchining o'zi bo'lmasa) aybdorga nisbatan " +
        "to'langan summa miqdorida qaytarib talab qilish " +
        "huquqiga ega.\n\n" +
        "MISOLLAR: xodim zarari uchun to'lagan tashkilot " +
        "xodimga; solidar javobgarlardan biri to'lagan bo'lsa " +
        "qolganlariga; zararni to'lagan davlat mansabdor " +
        "shaxsga.\n\n" +
        "MUHIM ISTISNO: ayrim toifadagi shaxslar (masalan " +
        "voyaga yetmaganlar uchun to'lagan ota-ona) regress " +
        "huquqiga ega bo'lmaydi.",
      example:
        "Bir necha shaxs birgalikda mulkka zarar yetkazdi — " +
        "jabrlanuvchi to'liq summani bittasidan talab qilishi " +
        "mumkin.",
      keyPoints: [
        "Birgalikda yetkazilgan zararda javobgarlik solidar",
        "To'liq summa istalgan javobgardan talab qilinadi",
        "Zararni qoplagan shaxsda regress huquqi bor",
        "Ayrim hollarda regress huquqi yuzaga kelmaydi",
      ],
      warning:
        "Solidar javobgarlardan birini tanlashda uning haqiqiy " +
        "mol-mulkini baholang.",
      lawRefs: [
        { code: "FK2", article: "1000" },
        { code: "FK2", article: "1001" },
      ],
    },
    {
      heading: "Qoplash usullari va jabrlanuvchining aybi",
      text:
        "Zararning o'rnini qoplash ikki usulda amalga " +
        "oshiriladi: NATURA holida (xuddi shunday ashyoni " +
        "berish, buzilganini tuzatish) yoki YETKAZILGAN " +
        "ZARARLARNI to'lash.\n\n" +
        "Usulni sud holatlarga qarab belgilaydi.\n\n" +
        "⚠️ JABRLANUVCHINING AYBI QOPLASH MIQDORIGA TA'SIR " +
        "QILADI:\n\n" +
        "Zararning yuzaga kelishiga jabrlanuvchining QASDI " +
        "sabab bo'lgan bo'lsa, zarar QOPLANMAYDI.\n\n" +
        "Jabrlanuvchining QO'POL EHTIYOTSIZLIGI zararning " +
        "yuzaga kelishiga yoki ko'payishiga yordam bergan " +
        "bo'lsa, qoplash miqdori KAMAYTIRILADI.\n\n" +
        "MULKIY HOLAT: sud zarar yetkazgan fuqaroning mulkiy " +
        "holatini hisobga olib qoplash miqdorini kamaytirishi " +
        "mumkin — lekin zarar qasddan yetkazilgan bo'lsa bu " +
        "qoida qo'llanilmaydi.\n\n" +
        "AMALIY XULOSA: o'z harakatlaringiz zararni " +
        "ko'paytirmaganini ko'rsata olish muhim. Masalan " +
        "hodisadan keyin zararni kamaytirish uchun oqilona " +
        "choralar ko'rgan bo'lsangiz, buni " +
        "hujjatlashtiring.",
      example:
        "Jabrlanuvchi ogohlantirishga qaramay xavfli hududga " +
        "kirdi — qoplash miqdori kamaytirilishi mumkin.",
      keyPoints: [
        "Qoplash natura holida yoki pul bilan amalga oshiriladi",
        "Jabrlanuvchining qasdi bo'lsa zarar qoplanmaydi",
        "Qo'pol ehtiyotsizlik miqdorni kamaytiradi",
        "Mulkiy holat hisobga olinishi mumkin",
      ],
      warning:
        "Zararni kamaytirish choralarini ko'rmaslik qoplashni " +
        "kamaytirishi mumkin.",
      lawRefs: [
        { code: "FK2", article: "1003" },
        { code: "FK2", article: "1004" },
      ],
    },
    {
      heading: "Sog'liqqa yetkazilgan zararni qoplash",
      text:
        "Fuqaroning sog'lig'iga shikast yetkazilganda qoplanadigan " +
        "zarar ikki qismdan iborat.\n\n" +
        "BIRINCHISI — YO'QOTILGAN ISH HAQI (daromad), ya'ni " +
        "jabrlanuvchi olayotgan yoki aniq olishi mumkin bo'lgan " +
        "daromad.\n\n" +
        "IKKINCHISI — SOG'LIQNI TIKLASH bilan bog'liq qo'shimcha " +
        "xarajatlar: davolanish, qo'shimcha ovqatlanish, " +
        "dori-darmon, protezlash, begona shaxs parvarishi, " +
        "sanatoriy-kurort davolanishi, maxsus transport " +
        "vositalarini sotib olish, boshqa kasbga " +
        "tayyorlash.\n\n" +
        "⚠️ QO'SHIMCHA XARAJATLAR SHARTI: ular ZARUR ekani va " +
        "jabrlanuvchi ularni tekinga olish huquqiga ega " +
        "emasligi aniqlansa qoplanadi.\n\n" +
        "YO'QOTILGAN DAROMADNI ANIQLASH qoidalari qonunda " +
        "batafsil belgilangan va hisob odatda hodisagacha " +
        "bo'lgan davr daromadiga tayanadi.\n\n" +
        "MUHIM: nafaqa, pensiya va boshqa to'lovlar odatda " +
        "qoplash hisobiga kiritilmaydi — ya'ni ular zararni " +
        "kamaytirmaydi.\n\n" +
        "VOYAGA YETMAGAN shaxsning sog'lig'iga shikast " +
        "yetkazilganda alohida qoida amal qiladi va u " +
        "kelajakdagi mehnat qobiliyatini hisobga oladi.",
      example:
        "Baxtsiz hodisadan keyin uzoq davolanish talab qilindi " +
        "— daromad va davolanish xarajatlari birga qoplanadi.",
      keyPoints: [
        "Yo'qotilgan daromad va qo'shimcha xarajatlar qoplanadi",
        "Qo'shimcha xarajat zarur ekani aniqlanishi kerak",
        "Nafaqa va pensiya qoplashni kamaytirmaydi",
        "Voyaga yetmaganlar uchun alohida qoida bor",
      ],
      warning:
        "Har bir xarajatni chek va tibbiy tavsiya bilan " +
        "tasdiqlang.",
      lawRefs: [
        { code: "FK2", article: "1005" },
        { code: "FK2", article: "1006" },
        { code: "FK2", article: "1007" },
        { code: "FK2", article: "1008" },
      ],
    },
    {
      heading: "Boquvchi vafot etganda zararni qoplash",
      text:
        "Boquvchi vafot etgan taqdirda zararni qoplash huquqiga " +
        "ega bo'lgan shaxslar doirasi qonunda belgilangan: " +
        "vafot etganning qaramog'ida bo'lgan yoki uning vafoti " +
        "kunigacha undan ta'minot olish huquqiga ega bo'lgan " +
        "mehnatga layoqatsiz shaxslar, uning vafotidan keyin " +
        "tug'ilgan bolasi va boshqa qonunda ko'rsatilgan " +
        "shaxslar.\n\n" +
        "⚠️ MIQDOR: zarar ko'rgan shaxslarga vafot etganning " +
        "daromadidan ular olayotgan yoki olish huquqiga ega " +
        "bo'lgan ulush miqdorida to'lanadi.\n\n" +
        "MUDDATLAR ham qonunda belgilangan va ular shaxsning " +
        "toifasiga bog'liq (voyaga yetmaganlar, pensiya " +
        "yoshidagilar, nogironligi bo'lganlar, parvarish " +
        "qiluvchilar uchun turlicha).\n\n" +
        "DAFN ETISH XARAJATLARI dafn etish uchun zarur " +
        "xarajatlarni ko'targan shaxsga qoplanadi.\n\n" +
        "TO'LOVLARNI O'ZGARTIRISH: mehnat qobiliyati " +
        "o'zgarganda yoki turmush qiymati hamda bazaviy " +
        "hisoblash miqdori oshganda qoplash miqdori " +
        "o'zgartirilishi mumkin — ya'ni to'lov \"muzlatilgan\" " +
        "emas.\n\n" +
        "YURIDIK SHAXS TUGATILGANDA to'lovlar to'xtab " +
        "qolmasligi uchun alohida tartib nazarda tutilgan; " +
        "zarar yetkazgan shaxsning MEROSXO'RLARI ham qonunda " +
        "belgilangan doirada javob berishi mumkin.",
      example:
        "Boquvchi vafot etgach qaramog'idagi shaxslar to'lov " +
        "olish huquqiga ega bo'ladi.",
      keyPoints: [
        "Qaramog'idagi mehnatga layoqatsiz shaxslar huquqqa ega",
        "To'lov vafot etganning daromadidagi ulush bo'yicha",
        "Dafn xarajatlari qoplanadi",
        "To'lovlar keyinchalik oshirilishi mumkin",
      ],
      warning:
        "To'lovni indeksatsiya qilish uchun alohida murojaat " +
        "talab qilinishi mumkin.",
      lawRefs: [
        { code: "FK2", article: "1009" },
        { code: "FK2", article: "1010" },
        { code: "FK2", article: "1011" },
        { code: "FK2", article: "1012" },
        { code: "FK2", article: "1013" },
        { code: "FK2", article: "1014" },
        { code: "FK2", article: "1015" },
        { code: "FK2", article: "1016" },
      ],
    },
    {
      heading: "Nuqsonli tovar, ish va xizmat zarari",
      text:
        "Tovarning, ishning yoki xizmatning KONSTRUKTIV, " +
        "RETSEPTURAVIY yoxud boshqa NUQSONLARI oqibatida " +
        "fuqaroning hayoti, sog'lig'i yoki mol-mulkiga " +
        "yetkazilgan zarar TO'LIQ qoplanishi kerak.\n\n" +
        "⚠️ IKKI JIDDIY AFZALLIK BOR:\n\n" +
        "BIRINCHISI: zarar SHARTNOMA MUNOSABATIDA bo'lgan-" +
        "bo'lmaganidan qat'i nazar qoplanadi. Ya'ni tovarni " +
        "siz sotib olmagan bo'lsangiz ham (masalan sovg'a " +
        "qilingan bo'lsa) talab qo'yishga haqlisiz.\n\n" +
        "IKKINCHISI: javobgarlik AYBDAN QAT'I NAZAR yuzaga " +
        "keladi.\n\n" +
        "KIMGA DA'VO QILISH: jabrlanuvchi TANLASH huquqiga " +
        "ega — sotuvchiga yoki ishlab chiqaruvchiga. Ish va " +
        "xizmat bo'yicha esa uni bajargan shaxsga.\n\n" +
        "MUDDATLAR: zarar tovarning YAROQLILIK yoki XIZMAT " +
        "muddati davomida yuzaga kelgan bo'lsa qoplanadi; " +
        "bunday muddat belgilanmagan bo'lsa qonunda " +
        "ko'rsatilgan davr ichida.\n\n" +
        "OZOD QILISH ASOSLARI: zarar yengib bo'lmaydigan kuch " +
        "yoki iste'molchi tomonidan tovardan foydalanish, " +
        "saqlash qoidalarining buzilishi oqibatida yuzaga " +
        "kelgani isbotlansa.\n\n" +
        "AMALIY XULOSA: chek, kafolat taloni va foydalanish " +
        "yo'riqnomasini saqlash — bu talabning asosi.",
      example:
        "Nosoz maishiy texnika yong'inga sabab bo'ldi — zarar " +
        "sotuvchi yoki ishlab chiqaruvchidan talab qilinadi.",
      keyPoints: [
        "Nuqson zarari shartnomadan qat'i nazar qoplanadi",
        "Javobgarlik aybdan qat'i nazar yuzaga keladi",
        "Sotuvchi yoki ishlab chiqaruvchini tanlash mumkin",
        "Foydalanish qoidalari buzilsa javobgarlik yuzaga kelmaydi",
      ],
      warning:
        "Yo'riqnomani buzib foydalanish javobgarlikni bekor " +
        "qiladi — buni isbotlash yuki sotuvchida bo'lsa ham.",
      lawRefs: [
        { code: "FK2", article: "1017" },
        { code: "FK2", article: "1018" },
        { code: "FK2", article: "1019" },
        { code: "FK2", article: "1020" },
      ],
    },
    {
      heading: "Sug'urta va asossiz boyish",
      text:
        "Dars yakunida ikki qo'shni institutni ko'rib " +
        "chiqamiz.\n\n" +
        "SUG'URTA: o'z javobgarligini sug'urtalagan shaxs " +
        "zarar yetkazgan bo'lsa, zarar sug'urta orqali " +
        "qoplanadi. Sug'urta qoplamasi zararni to'liq " +
        "qoplamasa, farqni zarar yetkazuvchi to'laydi.\n\n" +
        "⚠️ AMALIY XULOSA: sug'urta bo'lsa ham talabni faqat " +
        "sug'urta summasi bilan cheklab qo'ymang — farq " +
        "undirilishi mumkin.\n\n" +
        "ASOSSIZ ORTTIRILGAN BOYLIK: qonunda yoki bitimda " +
        "asos bo'lmagan holda boshqa shaxs hisobidan " +
        "mol-mulk orttirgan yoki tejab qolgan shaxs uni " +
        "QAYTARISHI shart.\n\n" +
        "Bu zarardan farq qiladi: bu yerda huquqbuzarlik va " +
        "ayb talab qilinmaydi — asosning YO'QLIGI yetarli.\n\n" +
        "TIPIK MISOLLAR: xato o'tkazilgan pul; bekor " +
        "qilingan shartnoma bo'yicha olingan bo'nak; ikki " +
        "marta to'langan summa.\n\n" +
        "Mol-mulk asl holida qaytariladi; bu imkonsiz " +
        "bo'lsa uning qiymati to'lanadi. Jabrlanuvchiga " +
        "olinmagan daromadlar ham to'lanishi mumkin.\n\n" +
        "QAYTARILMAYDIGAN holatlar ham bor — ular qonunda " +
        "aniq ko'rsatilgan (masalan hayrixohlik tariqasida " +
        "berilgan mablag'lar kabi ayrim toifalar).",
      example:
        "Pul xato hisob raqamiga o'tkazildi — uni olgan shaxs " +
        "qaytarishi shart.",
      keyPoints: [
        "Sug'urta yetmasa farqni zarar yetkazuvchi to'laydi",
        "Asossiz boyishda ayb talab qilinmaydi",
        "Asosning yo'qligi qaytarish uchun yetarli",
        "Imkonsiz bo'lsa qiymati to'lanadi",
      ],
      warning:
        "Xato o'tkazmani \"o'zi kelgan\" deb ushlab qolish " +
        "qaytarish majburiyatini bekor qilmaydi.",
      lawRefs: [
        { code: "FK2", article: "992" },
        { code: "FK2", article: "1023" },
        { code: "FK2", article: "1025" },
        { code: "FK2", article: "1026" },
        { code: "FK2", article: "1028" },
        { code: "FK2", article: "1030" },
      ],
    },
  ],
};

module.exports = { LESSON };
