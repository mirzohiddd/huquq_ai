"use strict";
/**
 * SHARTNOMALAR MODULI — 9-DARS: IJARA. FK2 535–599, 617–630.
 *
 * ⚠️ FK2 600–616 (UY-JOYNI ijaraga berish) BU YERGA KIRMAYDI —
 * ular UY-JOY moduliga (07) tegishli.
 */

const LESSON = {
  key: "ijara-shartnoma",
  category: "contracts",
  level: "mid",
  order: 3090,
  title: "Ijara shartnomasi (mulk yollash)",
  desc:
    "Mulk ijarasining umumiy qoidalari, tomonlar majburiyatlari, " +
    "muddatidan oldin bekor qilish, yaxshilanishlar, prokat, " +
    "transport, bino va korxona ijarasi, lizing hamda tekin " +
    "foydalanish.",
  objectives: [
    "Ijara shartnomasining muhim shartlarini bilasiz",
    "Ijaraga beruvchi va oluvchining majburiyatlarini ajrata olasiz",
    "Shartnomani muddatidan oldin bekor qilish asoslarini bilasiz",
    "Yaxshilanishlar uchun pul olish shartini bilasiz",
    "Lizing nima ekanini va uning xavfini bilasiz",
    "Tekin foydalanishning ijaradan farqini bilasiz",
  ],
  practicalSteps: [
    "Ijara predmetini shartnomada aniq belgilang (raqam, manzil, holat)",
    "Topshirish va qaytarish paytida dalolatnoma tuzing va foto oling",
    "Yaxshilanish kiritishdan oldin ijaraga beruvchining yozma roziligini oling",
    "Ijara haqi va uni oshirish tartibini shartnomada aniq yozing",
    "Muddat tugashidan oldin uzaytirish niyatini yozma bildiring",
  ],
  sections: [
    {
      heading: "Mulk ijarasi: tushunchasi va obyektlari",
      text:
        "MULK IJARASI shartnomasi bo'yicha ijaraga beruvchi " +
        "ijaraga oluvchiga mol-mulkni HAQ EVAZIGA vaqtincha " +
        "egalik qilish va foydalanish uchun beradi.\n\n" +
        "⚠️ ENG MUHIM VA ENG FOYDALI QOIDA: ijaraga olingan " +
        "mol-mulkdan foydalanish natijasida olingan " +
        "MAHSULOT, MEVA va DAROMADLAR ijaraga oluvchining " +
        "MULKI hisoblanadi.\n\n" +
        "Ya'ni ijaraga olingan yerda yetishtirilgan hosil " +
        "yoki ijaraga olingan uskunada ishlab chiqarilgan " +
        "mahsulot ijarachiga tegishli.\n\n" +
        "OBYEKTLARI: yer uchastkalari, korxonalar, binolar, " +
        "inshootlar, uskunalar, transport vositalari va " +
        "foydalanish jarayonida o'z tabiiy xususiyatlarini " +
        "YO'QOTMAYDIGAN boshqa ashyolar.\n\n" +
        "Ya'ni ISTE'MOL QILINADIGAN ashyo (yoqilg'i, " +
        "oziq-ovqat, xomashyo) ijara predmeti bo'la " +
        "olmaydi — chunki uni qaytarib bo'lmaydi.\n\n" +
        "IJARAGA BERUVCHI mol-mulk mulkdori yoki qonun " +
        "hamda mulkdor vakolat bergan shaxs bo'lishi " +
        "mumkin.\n\n" +
        "MUHIM SHART: shartnomada ijaraga topshiriladigan " +
        "mol-mulkni aniq belgilash imkonini beruvchi " +
        "ma'lumotlar ko'rsatilishi kerak. Aks holda " +
        "shartnoma tuzilmagan hisoblanadi.",
      example:
        "Ijara shartnomasida uskuna raqami ko'rsatilmadi — " +
        "nizoda qaysi uskuna nazarda tutilgani bahsga " +
        "aylandi.",
      keyPoints: [
        "Ijara — haq evaziga vaqtincha foydalanish",
        "Foydalanish natijasidagi daromad ijarachiga tegishli",
        "Iste'mol qilinadigan ashyo ijara predmeti bo'la olmaydi",
        "Predmet aniq belgilanishi muhim shart",
      ],
      warning:
        "Predmet noaniq bo'lsa shartnoma tuzilmagan " +
        "hisoblanadi.",
      lawRefs: [
        { code: "FK2", article: "535" },
        { code: "FK2", article: "536" },
        { code: "FK2", article: "537" },
        { code: "FK2", article: "538" },
      ],
    },
    {
      heading: "Shakl, muddat va topshirish",
      text:
        "SHAKL: shartnoma qonunda belgilangan hollarda yozma " +
        "shaklda tuziladi; ko'chmas mulk ijarasi qonunda " +
        "nazarda tutilgan hollarda davlat ro'yxatidan " +
        "o'tkaziladi.\n\n" +
        "MUDDAT: shartnomada belgilanadi. Muddat " +
        "ko'rsatilmagan bo'lsa, shartnoma NOMUAYYAN " +
        "muddatga tuzilgan hisoblanadi.\n\n" +
        "⚠️ NOMUAYYAN MUDDATLI SHARTNOMANI har bir tomon " +
        "istalgan paytda bekor qilishi mumkin — ikkinchi " +
        "tomonni qonunda belgilangan muddatda oldindan " +
        "ogohlantirgan holda.\n\n" +
        "Bu ijarachi uchun jiddiy xavf: uzoq muddatli " +
        "rejalar tuzib bo'lmaydi. Shuning uchun " +
        "muddatni albatta yozing.\n\n" +
        "TOPSHIRISH: ijaraga beruvchi mol-mulkni " +
        "shartnoma shartlariga va mol-mulk maqsadiga " +
        "muvofiq holatda topshirishi shart — barcha " +
        "mansub ashyolari va hujjatlari bilan.\n\n" +
        "TOPSHIRILMASA: ijaraga oluvchi mol-mulkni " +
        "talab qilib olishga va zararni qoplashni " +
        "yoki shartnomani bekor qilib zararni " +
        "qoplashni talab qilishga haqli.\n\n" +
        "AMALIY MASLAHAT: topshirish paytida " +
        "DALOLATNOMA tuzing va mol-mulk holatini " +
        "foto bilan qayd eting — bu qaytarish " +
        "paytidagi nizolarni oldini oladi.",
      example:
        "Ijara muddati yozilmadi — ijaraga beruvchi " +
        "ogohlantirish bilan shartnomani bekor qildi.",
      keyPoints: [
        "Muddat yozilmasa shartnoma nomuayyan muddatli bo'ladi",
        "Nomuayyan muddatli shartnoma ogohlantirish bilan bekor qilinadi",
        "Mol-mulk maqsadga muvofiq holatda topshiriladi",
        "Topshirish dalolatnomasi keyingi nizolarni oldini oladi",
      ],
      warning:
        "Dalolatnomasiz qabul qilingan mol-mulk " +
        "qaytarishda muammo tug'diradi.",
      lawRefs: [
        { code: "FK2", article: "539" },
        { code: "FK2", article: "540" },
        { code: "FK2", article: "541" },
      ],
    },
    {
      heading: "Kamchiliklar va uchinchi shaxs huquqlari",
      text:
        "KAMCHILIKLAR UCHUN JAVOBGARLIK: ijaraga beruvchi " +
        "topshirilgan mol-mulkning foydalanishga to'liq " +
        "yoki qisman to'sqinlik qiladigan kamchiliklari " +
        "uchun javob beradi — shartnoma tuzayotganda ular " +
        "haqida bilmagan bo'lsa ham.\n\n" +
        "⚠️ IJARACHI HUQUQLARI KENG: kamchilikni tekin " +
        "bartaraf etishni; ijara haqini mutanosib " +
        "kamaytirishni; bartaraf etish xarajatlarini " +
        "qoplashni yoki ularni ijara haqidan ushlab " +
        "qolishni (ijaraga beruvchini xabardor qilgan " +
        "holda); shartnomani muddatidan oldin bekor " +
        "qilishni talab qilishi mumkin.\n\n" +
        "ISTISNO: shartnoma tuzayotganda ijaraga beruvchi " +
        "kamchiliklarni AYTIB QO'YGAN bo'lsa yoki ular " +
        "ijarachiga oldindan ma'lum bo'lgan yoxud " +
        "ko'rikda aniqlanishi kerak bo'lgan bo'lsa, " +
        "javobgarlik yuzaga kelmaydi.\n\n" +
        "UCHINCHI SHAXSLAR HUQUQLARI: mol-mulkni ijaraga " +
        "berish uchinchi shaxslarning unga bo'lgan " +
        "huquqlarini (garov, servitut va boshqalar) " +
        "bekor qilmaydi.\n\n" +
        "Ijaraga beruvchi shartnoma tuzayotganda " +
        "ijarachini bunday huquqlar haqida XABARDOR " +
        "qilishi shart. Aks holda ijarachi ijara " +
        "haqini kamaytirishni yoki shartnomani bekor " +
        "qilib zararni qoplashni talab qilishga " +
        "haqli.\n\n" +
        "AMALIY XULOSA: ijaraga olishdan oldin " +
        "mol-mulkni ko'rikdan o'tkazing va uning " +
        "yuklamalari haqida so'rang.",
      example:
        "Ijaraga olingan bino garovda ekani keyin ma'lum " +
        "bo'ldi — ijarachi shartnomani bekor qilishi " +
        "mumkin.",
      keyPoints: [
        "Ijaraga beruvchi kamchiliklar uchun javob beradi",
        "Ijarachi bir necha huquqni tanlashi mumkin",
        "Oldindan aytilgan kamchilik uchun javobgarlik yo'q",
        "Uchinchi shaxs huquqlari haqida xabar berish shart",
      ],
      warning:
        "Ko'rikda aniqlanishi mumkin bo'lgan kamchilik " +
        "uchun keyin talab qo'yish qiyin.",
      lawRefs: [
        { code: "FK2", article: "542" },
        { code: "FK2", article: "543" },
      ],
    },
    {
      heading: "Ijara haqi va foydalanish qoidalari",
      text:
        "IJARA HAQI shartnomada belgilanadi. U pul " +
        "shaklida, mahsulot ulushi shaklida, xizmat " +
        "ko'rsatish yoki mol-mulkni yaxshilash " +
        "shaklida ham bo'lishi mumkin.\n\n" +
        "⚠️ HAQNI OSHIRISH: shartnomada boshqacha " +
        "nazarda tutilmagan bo'lsa, ijara haqi " +
        "qonunda belgilangan chastotadan ko'p " +
        "bo'lmagan tarzda o'zgartirilishi mumkin.\n\n" +
        "Ya'ni ijaraga beruvchi haqni istagan " +
        "paytda oshirib bo'lmaydi. Shartnomada " +
        "oshirish tartibi aniq yozilishi kerak.\n\n" +
        "FOYDALANISH: ijarachi mol-mulkdan shartnoma " +
        "shartlariga, ular yo'q bo'lsa mol-mulk " +
        "maqsadiga muvofiq foydalanishi shart. " +
        "Buzsa — ijaraga beruvchi shartnomani bekor " +
        "qilishni va zararni qoplashni talab " +
        "qilishi mumkin.\n\n" +
        "TASARRUF ETISH: ijarachi ijaraga beruvchining " +
        "ROZILIGI bilan mol-mulkni ikkilamchi " +
        "ijaraga berishi, huquqlarini boshqa shaxsga " +
        "o'tkazishi yoki tekin foydalanishga " +
        "berishi mumkin.\n\n" +
        "Roziliksiz bunday harakat shartnomani " +
        "buzish hisoblanadi.\n\n" +
        "SAQLASH: ijaraga beruvchi odatda KAPITAL " +
        "ta'mirni, ijarachi esa JORIY ta'mirni va " +
        "saqlash xarajatlarini o'z zimmasiga " +
        "oladi — shartnomada boshqacha " +
        "belgilanmagan bo'lsa.",
      example:
        "Ijarachi roziliksiz binoni boshqa shaxsga " +
        "berdi — bu shartnomani bekor qilish asosi " +
        "bo'ladi.",
      keyPoints: [
        "Ijara haqi turli shaklda bo'lishi mumkin",
        "Haqni oshirish tartibi shartnomada yozilishi kerak",
        "Ikkilamchi ijara uchun rozilik shart",
        "Kapital ta'mir odatda ijaraga beruvchi zimmasida",
      ],
      warning:
        "Ta'mir majburiyatini shartnomada aniq " +
        "taqsimlamaslik — nizoning asosiy sababi.",
      lawRefs: [
        { code: "FK2", article: "544" },
        { code: "FK2", article: "545" },
        { code: "FK2", article: "546" },
        { code: "FK2", article: "547" },
        { code: "FK2", article: "548" },
      ],
    },
    {
      heading: "Muddatidan oldin bekor qilish",
      text:
        "Shartnomani muddatidan oldin bekor qilish har ikki " +
        "tomon uchun ham nazarda tutilgan, lekin asoslar " +
        "boshqa-boshqa.\n\n" +
        "IJARAGA BERUVCHI TALABI BILAN: ijarachi mol-mulkdan " +
        "shartnoma shartlarini yoki maqsadini jiddiy buzgan " +
        "holda foydalansa; mol-mulkni sezilarli " +
        "yomonlashtirsa; ijara haqini belgilangan muddatda " +
        "takroran to'lamasa; kapital ta'mirni bajarish " +
        "majburiyati unda bo'lsa-yu bajarmasa.\n\n" +
        "IJARACHI TALABI BILAN: ijaraga beruvchi mol-mulkni " +
        "topshirmasa yoki foydalanishga to'sqinlik qilsa; " +
        "mol-mulk foydalanishga yaroqsiz holatga kelsa " +
        "(ijarachi aybisiz); kamchiliklar bartaraf " +
        "etilmasa; kapital ta'mir bajarilmasa.\n\n" +
        "⚠️ MAJBURIY QADAM: ijaraga beruvchi shartnomani " +
        "bekor qilishni talab qilishdan oldin ijarachiga " +
        "majburiyatlarini oqilona muddatda bajarish " +
        "haqida YOZMA OGOHLANTIRISH yuborishi shart.\n\n" +
        "Ogohlantirmasdan qo'yilgan da'vo rad etilishi " +
        "mumkin.\n\n" +
        "IKKILAMCHI IJARA: asosiy shartnoma muddatidan " +
        "oldin bekor qilinsa, ikkilamchi ijara ham " +
        "bekor bo'ladi.\n\n" +
        "IMTIYOZLI HUQUQ: majburiyatlarini lozim " +
        "darajada bajargan ijarachi muddat tugagach " +
        "yangi muddatga shartnoma tuzishda IMTIYOZLI " +
        "huquqqa ega — bu haqda muddatda yozma xabar " +
        "bergan bo'lsa.",
      example:
        "Ijara haqi bir necha marta to'lanmadi — ijaraga " +
        "beruvchi avval yozma ogohlantirish yuborishi " +
        "kerak.",
      keyPoints: [
        "Bekor qilish asoslari har ikki tomon uchun bor",
        "Ijaraga beruvchi avval yozma ogohlantiradi",
        "Asosiy shartnoma bekor bo'lsa ikkilamchi ijara ham bekor bo'ladi",
        "Vijdonli ijarachida imtiyozli huquq bor",
      ],
      warning:
        "Imtiyozli huquqni yo'qotmaslik uchun niyatingizni " +
        "muddatda yozma bildiring.",
      lawRefs: [
        { code: "FK2", article: "550" },
        { code: "FK2", article: "551" },
        { code: "FK2", article: "552" },
        { code: "FK2", article: "553" },
      ],
    },
    {
      heading: "Qaytarish, yaxshilanishlar va sotib olish",
      text:
        "QAYTARISH: shartnoma tugagach ijarachi mol-mulkni " +
        "OLINGAN HOLATDA — normal eskirishni hisobga " +
        "olgan holda — qaytarishi shart.\n\n" +
        "Kechiktirsa: ijaraga beruvchi butun kechikish " +
        "davri uchun ijara haqini talab qilishga haqli. " +
        "Haq zararni qoplamasa, farqni ham talab qilishi " +
        "mumkin.\n\n" +
        "⚠️ YAXSHILANISHLAR — ENG KO'P NIZO CHIQADIGAN " +
        "MASALA:\n\n" +
        "AJRALADIGAN yaxshilanishlar ijarachining MULKI " +
        "hisoblanadi va u ularni olib ketishi mumkin.\n\n" +
        "AJRALMAS yaxshilanishlar uchun esa qoida " +
        "boshqacha: ijarachi ularning qiymatini " +
        "qoplashni faqat ijaraga beruvchining " +
        "ROZILIGI bilan kiritilgan bo'lsa talab " +
        "qilishi mumkin.\n\n" +
        "ROZILIKSIZ kiritilgan ajralmas yaxshilanishlar " +
        "qiymati QOPLANMAYDI.\n\n" +
        "Bu qoida amalda juda ko'p pul yo'qotilishiga " +
        "sabab bo'ladi: ijarachi binoni kapital " +
        "ta'mirlaydi, keyin esa hech narsa " +
        "ololmaydi.\n\n" +
        "AMALIY QOIDA: har qanday jiddiy " +
        "yaxshilanishdan oldin YOZMA rozilik oling va " +
        "unda qoplash tartibini ham yozing.\n\n" +
        "SOTIB OLISH: shartnomada mol-mulk muddat " +
        "tugagach yoki sotib olish bahosi to'langach " +
        "ijarachi mulkiga o'tishi nazarda tutilishi " +
        "mumkin.",
      example:
        "Ijarachi binoni roziliksiz kapital ta'mirladi — " +
        "sarflangan mablag' qoplanmasligi mumkin.",
      keyPoints: [
        "Mol-mulk normal eskirish bilan qaytariladi",
        "Ajraladigan yaxshilanish ijarachida qoladi",
        "Ajralmas yaxshilanish faqat rozilik bilan qoplanadi",
        "Shartnomada sotib olish sharti bo'lishi mumkin",
      ],
      warning:
        "Roziliksiz ta'mir — eng ko'p uchraydigan " +
        "moliyaviy yo'qotish.",
      lawRefs: [
        { code: "FK2", article: "554" },
        { code: "FK2", article: "555" },
        { code: "FK2", article: "556" },
        { code: "FK2", article: "549" },
      ],
    },
    {
      heading: "Prokat va transport vositasi ijarasi",
      text:
        "PROKAT SHARTNOMASI — ijaraga beruvchi doimiy " +
        "tadbirkorlik faoliyati sifatida mol-mulkni " +
        "ijaraga beradi va u odatda iste'mol " +
        "maqsadlarida ishlatiladi.\n\n" +
        "⚠️ IJARACHI UCHUN QULAY QOIDALAR: prokat " +
        "shartnomasi ommaviy shartnoma hisoblanadi; " +
        "ijarachi shartnomani istalgan paytda bekor " +
        "qilishga haqli (qonunda belgilangan muddatda " +
        "ogohlantirgan holda); kamchiliklar " +
        "belgilangan qisqa muddatda tekin bartaraf " +
        "etiladi yoki mol-mulk almashtiriladi.\n\n" +
        "Ijarachi prokatga olingan mol-mulkni " +
        "ikkilamchi ijaraga bera olmaydi va " +
        "huquqlarini boshqa shaxsga o'tkaza " +
        "olmaydi.\n\n" +
        "TRANSPORT VOSITASI IJARASI ikki turda " +
        "bo'ladi:\n\n" +
        "XIZMAT KO'RSATISH BILAN — ijaraga beruvchi " +
        "boshqarish va texnik foydalanish " +
        "xizmatlarini ham ko'rsatadi. Bunda " +
        "uchinchi shaxslarga transport vositasi " +
        "bilan yetkazilgan zarar uchun IJARAGA " +
        "BERUVCHI javob beradi.\n\n" +
        "XIZMAT KO'RSATMASDAN — ijarachi transport " +
        "vositasini o'zi boshqaradi va ekspluatatsiya " +
        "qiladi. Bunda uchinchi shaxslarga " +
        "yetkazilgan zarar uchun IJARACHI javob " +
        "beradi.\n\n" +
        "⚠️ BU FARQ MOLIYAVIY JIHATDAN JUDA MUHIM — " +
        "shartnoma turini aniq belgilang va sug'urta " +
        "masalasini yozing.",
      example:
        "Ijaraga olingan avtomobil uchinchi shaxsga " +
        "zarar yetkazdi — javobgar shartnoma turiga " +
        "qarab aniqlanadi.",
      keyPoints: [
        "Prokat — ommaviy shartnoma va ijarachi uchun qulay",
        "Prokat mol-mulkini ikkilamchi ijaraga berib bo'lmaydi",
        "Transport ijarasi ikki turda bo'ladi",
        "Zarar uchun javobgarlik tur bo'yicha aniqlanadi",
      ],
      warning:
        "Transport ijarasida sug'urta kim tomonidan " +
        "qilinishini albatta yozing.",
      lawRefs: [
        { code: "FK2", article: "558" },
        { code: "FK2", article: "561" },
        { code: "FK2", article: "563" },
        { code: "FK2", article: "564" },
        { code: "FK2", article: "566" },
        { code: "FK2", article: "568" },
        { code: "FK2", article: "570" },
        { code: "FK2", article: "571" },
      ],
    },
    {
      heading: "Bino, inshoot va korxona ijarasi",
      text:
        "BINO YOKI INSHOOTNI IJARAGA BERISH shartnomasi " +
        "YOZMA shaklda, tomonlar imzolagan yagona hujjat " +
        "tuzish yo'li bilan amalga oshiriladi. Shaklga " +
        "rioya qilmaslik uni HAQIQIY EMAS qiladi.\n\n" +
        "Qonunda nazarda tutilgan hollarda shartnoma " +
        "davlat ro'yxatidan o'tkaziladi.\n\n" +
        "⚠️ YER MASALASI ENG MUHIMI: bino yoki inshootni " +
        "ijaraga berishda ijarachiga bino joylashgan " +
        "va foydalanish uchun zarur bo'lgan YER " +
        "UCHASTKASIDAN foydalanish huquqi ham o'tadi.\n\n" +
        "Bundan tashqari, yer uchastkasi boshqa " +
        "shaxsga sotilsa ham, bino ijarachisida " +
        "yerdan foydalanish huquqi SAQLANADI — bu " +
        "muhim himoya.\n\n" +
        "IJARA HAQI bino yoki inshoot ijarasida MUHIM " +
        "SHART hisoblanadi: u ko'rsatilmagan bo'lsa " +
        "shartnoma tuzilmagan hisoblanadi. Haq odatda " +
        "yerdan foydalanish haqini ham o'z ichiga " +
        "oladi.\n\n" +
        "TOPSHIRISH: bino topshirish DALOLATNOMASI " +
        "bo'yicha topshiriladi — bu majburiy talab.\n\n" +
        "KORXONANI IJARAGA BERISH: korxona yaxlit " +
        "mulkiy kompleks sifatida ijaraga beriladi. " +
        "Bu murakkab shartnoma: unga yer, binolar, " +
        "uskunalar, xomashyo, huquq va qarzlar " +
        "kiradi.\n\n" +
        "Korxona ijarasida kreditorlar huquqlari " +
        "alohida himoyalanadi va shartnoma davlat " +
        "ro'yxatidan o'tkaziladi.",
      example:
        "Bino ijara shartnomasida haq ko'rsatilmadi — " +
        "shartnoma tuzilmagan hisoblanadi.",
      keyPoints: [
        "Bino ijarasi yagona hujjat shaklida tuziladi",
        "Ijarachiga yerdan foydalanish huquqi ham o'tadi",
        "Ijara haqi — muhim shart",
        "Topshirish dalolatnoma bilan rasmiylashtiriladi",
      ],
      warning:
        "Bino ijarasida haqni yozmaslik — shartnomani " +
        "butunlay yo'qqa chiqaradi.",
      lawRefs: [
        { code: "FK2", article: "573" },
        { code: "FK2", article: "574" },
        { code: "FK2", article: "575" },
        { code: "FK2", article: "576" },
        { code: "FK2", article: "577" },
        { code: "FK2", article: "578" },
        { code: "FK2", article: "579" },
        { code: "FK2", article: "580" },
      ],
    },
    {
      heading: "Lizing shartnomasi",
      text:
        "LIZING shartnomasi bo'yicha lizing beruvchi lizing " +
        "oluvchi KO'RSATGAN mol-mulkni KO'RSATGAN " +
        "sotuvchidan sotib olib, uni lizing oluvchiga " +
        "haq evaziga vaqtincha egalik qilish va " +
        "foydalanish uchun beradi.\n\n" +
        "⚠️ ODDIY IJARADAN ENG MUHIM FARQI: mol-mulkni " +
        "va sotuvchini LIZING OLUVCHI tanlaydi. " +
        "Shuning uchun lizing beruvchi odatda " +
        "mol-mulk tanlovi uchun javob BERMAYDI.\n\n" +
        "Bu amalda katta ahamiyatga ega: uskuna mos " +
        "kelmasa, aybni lizing kompaniyasiga " +
        "yuklab bo'lmaydi.\n\n" +
        "LIZING OLUVCHI HUQUQLARI: u to'g'ridan-" +
        "to'g'ri SOTUVCHIGA nisbatan oldi-sotdi " +
        "shartnomasidan kelib chiqadigan talablarni " +
        "qo'yishga haqli — sifat, butlik, " +
        "yetkazib berish muddati bo'yicha.\n\n" +
        "Ya'ni nosoz uskuna bo'yicha da'vo " +
        "sotuvchiga qo'yiladi.\n\n" +
        "XAVF: mol-mulkning tasodifan nobud bo'lish " +
        "yoki buzilish xavfi odatda LIZING " +
        "OLUVCHIGA o'tadi — shartnomada boshqacha " +
        "nazarda tutilmagan bo'lsa.\n\n" +
        "LIZING TO'LOVI shartnomada belgilanadi va " +
        "u odatda mol-mulk qiymatini hamda lizing " +
        "beruvchining daromadini qamrab oladi.\n\n" +
        "AMALIY XULOSA: lizing — bu ijara emas, " +
        "moliyalashtirish vositasi. Shartnomani " +
        "imzolashdan oldin umumiy to'lov summasini " +
        "va muddatidan oldin tugatish shartlarini " +
        "hisoblang.",
      example:
        "Lizingga olingan uskuna nosoz chiqdi — da'vo " +
        "lizing kompaniyasiga emas, sotuvchiga " +
        "qo'yiladi.",
      keyPoints: [
        "Mol-mulk va sotuvchini lizing oluvchi tanlaydi",
        "Lizing beruvchi tanlov uchun javob bermaydi",
        "Talablar to'g'ridan-to'g'ri sotuvchiga qo'yiladi",
        "Xavf odatda lizing oluvchida bo'ladi",
      ],
      warning:
        "Lizing — uzoq muddatli moliyaviy majburiyat, " +
        "uni ijara deb baholamang.",
      lawRefs: [
        { code: "FK2", article: "587" },
        { code: "FK2", article: "588" },
        { code: "FK2", article: "590" },
        { code: "FK2", article: "593" },
        { code: "FK2", article: "594" },
        { code: "FK2", article: "595" },
        { code: "FK2", article: "598" },
      ],
    },
    {
      heading: "Tekin foydalanish (ssuda) shartnomasi",
      text:
        "TEKIN FOYDALANISH shartnomasi bo'yicha ssuda " +
        "beruvchi ashyoni ssuda oluvchiga TEKINGA " +
        "vaqtincha foydalanish uchun beradi, ssuda " +
        "oluvchi esa uni olingan holatda (normal " +
        "eskirishni hisobga olib) qaytarishi shart.\n\n" +
        "⚠️ IJARADAN ASOSIY FARQI — HAQ YO'Q. Aynan " +
        "shuning uchun qoidalar ham ssuda beruvchi " +
        "foydasiga yumshoqroq.\n\n" +
        "KAMCHILIKLAR UCHUN JAVOBGARLIK CHEKLANGAN: " +
        "ssuda beruvchi faqat QASDAN yoki QO'POL " +
        "EHTIYOTSIZLIK bilan aytmagan kamchiliklari " +
        "uchun javob beradi.\n\n" +
        "Ya'ni tekinga olingan ashyoda kamchilik " +
        "chiqsa, talab qo'yish ancha qiyin.\n\n" +
        "XAVF: ashyoning tasodifan nobud bo'lish " +
        "yoki buzilish xavfi qonunda belgilangan " +
        "hollarda SSUDA OLUVCHIDA bo'ladi — " +
        "masalan u ashyodan shartnomaga zid " +
        "foydalangan yoki uni roziliksiz uchinchi " +
        "shaxsga bergan bo'lsa.\n\n" +
        "UCHINCHI SHAXSGA ZARAR: ashyodan " +
        "foydalanish natijasida uchinchi shaxsga " +
        "yetkazilgan zarar uchun odatda SSUDA " +
        "BERUVCHI javob beradi — zarar ssuda " +
        "oluvchining qasdi yoki qo'pol " +
        "ehtiyotsizligi tufayli yuzaga kelganini " +
        "isbotlamasa.\n\n" +
        "VOZ KECHISH: nomuayyan muddatga tuzilgan " +
        "shartnomadan har bir tomon ogohlantirish " +
        "bilan voz kechishi mumkin.\n\n" +
        "AMALIY XULOSA: qarindosh yoki do'stga " +
        "ashyo berayotganda ham shartnomani yozma " +
        "qiling — bu munosabatni buzmaydi, aksincha " +
        "saqlaydi.",
      example:
        "Tekinga berilgan uskuna shartnomaga zid " +
        "ishlatilib nobud bo'ldi — xavf ssuda " +
        "oluvchida bo'ladi.",
      keyPoints: [
        "Tekin foydalanishda haq to'lanmaydi",
        "Ssuda beruvchining javobgarligi cheklangan",
        "Shartnomaga zid foydalanishda xavf oluvchida",
        "Uchinchi shaxsga zarar uchun odatda beruvchi javob beradi",
      ],
      warning:
        "Tekin berilgan ashyoni boshqa shaxsga " +
        "roziliksiz berish xavfni sizga o'tkazadi.",
      lawRefs: [
        { code: "FK2", article: "617" },
        { code: "FK2", article: "621" },
        { code: "FK2", article: "623" },
        { code: "FK2", article: "624" },
        { code: "FK2", article: "625" },
        { code: "FK2", article: "626" },
        { code: "FK2", article: "628" },
        { code: "FK2", article: "630" },
      ],
    },
  ],
};

module.exports = { LESSON };
