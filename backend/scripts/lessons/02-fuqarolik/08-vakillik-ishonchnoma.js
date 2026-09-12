"use strict";
/** FUQAROLIK MODULI — 8-DARS: VAKILLIK VA ISHONCHNOMA. FK 129–144. */

const LESSON = {
  key: "vakillik-ishonchnoma",
  category: "civil",
  level: "mid",
  order: 2080,
  title: "Vakillik va ishonchnoma",
  desc:
    "Vakillik qanday ishlaydi, vakolatsiz vakillik oqibatlari, " +
    "ishonchnoma turlari va shakli, muddati, ishonchnomani boshqa " +
    "shaxsga o'tkazish hamda uni bekor qilish.",
  objectives: [
    "Vakillik nima ekanini va u qanday vujudga kelishini bilasiz",
    "Vakil qilishi mumkin bo'lmagan harakatlarni bilasiz",
    "Vakolatsiz vakillik oqibatlarini tushunasiz",
    "Ishonchnoma shakliga qo'yiladigan talablarni bilasiz",
    "Ishonchnoma muddati va uni bekor qilishni bilasiz",
    "Ishonchnomani boshqa shaxsga o'tkazish qoidasini bilasiz",
  ],
  practicalSteps: [
    "Ishonchnomada vakolatlarni aniq va cheklangan ro'yxat bilan yozing",
    "Ko'chmas mulk va notarial bitimlar uchun notarial ishonchnoma rasmiylashtiring",
    "Ishonchnoma sanasini albatta ko'rsating — sanasiz ishonchnoma haqiqiy emas",
    "Ishonchnomani bekor qilsangiz vakilni va uchinchi shaxslarni yozma xabardor qiling",
    "Kontragent vakilidan ishonchnoma aslini yoki tasdiqlangan nusxasini so'rang",
  ],
  sections: [
    {
      heading: "Vakillik nima va u qanday vujudga keladi",
      text:
        "VAKILLIK — bir shaxs (vakil) boshqa shaxs (vakil qilingan) " +
        "NOMIDAN va uning MANFAATLARIDA bitim tuzishi.\n\n" +
        "Vakil tuzgan bitim bo'yicha huquq va burchlar to'g'ridan-" +
        "to'g'ri VAKIL QILINGAN SHAXSDA yuzaga keladi — vakilda " +
        "emas.\n\n" +
        "⚠️ BU ASOSIY QOIDA. Vakil shartnoma bo'yicha javob " +
        "bermaydi, chunki u tomon emas. Shuning uchun " +
        "shartnomada kim tomon ekanini aniq ko'rsatish kerak: " +
        "\"Falonchi, falonchi nomidan ishonchnoma asosida\".\n\n" +
        "VAKILLIK ASOSLARI: ishonchnoma, qonun (masalan ota-ona " +
        "voyaga yetmagan bola nomidan) va vakolatli davlat " +
        "organining hujjati.\n\n" +
        "Vakolat vaziyatdan ham kelib chiqishi mumkin: savdo " +
        "joyidagi sotuvchi, kassir kabi shaxslar odatda " +
        "ishonchnomasiz ham vakolatli deb qaraladi.",
      example:
        "Shartnomani vakil imzoladi — majburiyat vakil qilingan " +
        "shaxs zimmasiga tushadi, vakil shaxsan javob bermaydi.",
      keyPoints: [
        "Vakil boshqa shaxs nomidan va uning manfaatida ish ko'radi",
        "Huquq va burchlar vakil qilingan shaxsda yuzaga keladi",
        "Asoslar: ishonchnoma, qonun, organ hujjati",
        "Shartnomada vakillik asosi ko'rsatilishi kerak",
      ],
      warning:
        "Shartnomada vakillik ko'rsatilmasa, imzolagan shaxs " +
        "shaxsan javobgar deb qaralishi mumkin.",
      lawRefs: [{ code: "FK", article: "129" }],
    },
    {
      heading: "Vakil qila olmaydigan harakatlar",
      text:
        "Vakillikning aniq chegaralari bor.\n\n" +
        "BIRINCHI TAQIQ: vakil vakil qilingan shaxs nomidan " +
        "O'ZIGA NISBATAN bitim tuza olmaydi. Ya'ni ishonchnoma " +
        "bilan uy sotish topshirilgan vakil uni O'ZIGA sota " +
        "olmaydi.\n\n" +
        "IKKINCHI TAQIQ: vakil ayni vaqtda vakili bo'lgan boshqa " +
        "shaxsga nisbatan ham bitim tuza olmaydi — ya'ni " +
        "ikkala tomonni bir vaqtda ifodalash mumkin emas " +
        "(tijorat vakilligi holatlaridan tashqari).\n\n" +
        "⚠️ SABABI MANFAATLAR TO'QNASHUVI: bunday holatda vakil " +
        "kimning manfaatini ko'zlashi noaniq bo'lib qoladi.\n\n" +
        "UCHINCHI CHEGARA: o'z tabiatiga ko'ra faqat shaxsan " +
        "bajarilishi mumkin bo'lgan bitimlarni vakil orqali " +
        "tuzib bo'lmaydi (masalan vasiyatnoma).\n\n" +
        "TIJORAT VAKILLIGI alohida institut: tadbirkorlik " +
        "faoliyatida doimiy va mustaqil ravishda shartnomalar " +
        "tuzishda vakillik qilish; u yerda ikkala tomonni " +
        "ifodalash tomonlar roziligi bilan mumkin.",
      example:
        "Ishonchnoma bo'yicha sotish topshirilgan vakil mulkni " +
        "o'z nomiga rasmiylashtirdi — bunday bitim nizoli.",
      keyPoints: [
        "Vakil o'ziga nisbatan bitim tuza olmaydi",
        "Ikkala tomonni bir vaqtda ifodalash mumkin emas",
        "Shaxsan bajariladigan bitimlarda vakillik yo'q",
        "Tijorat vakilligi alohida qoidalarga ega",
      ],
      warning:
        "Ishonchnoma bergan shaxs vakil harakatlarini nazorat " +
        "qilib borishi kerak.",
      lawRefs: [
        { code: "FK", article: "129" },
        { code: "FK", article: "133" },
      ],
    },
    {
      heading: "Layoqatli va layoqatsiz shaxslar nomidan vakillik",
      text:
        "Kodeks vakillikning ikki asosiy manbaini ajratadi.\n\n" +
        "MUOMALAGA LAYOQATLI SHAXSLAR nomidan vakillik odatda " +
        "ISHONCHNOMA yoki shartnoma asosida amalga oshiriladi — " +
        "ya'ni shaxsning O'Z IXTIYORI bilan.\n\n" +
        "MUOMALAGA LAYOQATSIZ SHAXSLAR nomidan vakillik esa " +
        "QONUN asosida yuzaga keladi: ota-ona, farzandlikka " +
        "oluvchi, vasiy. Bunday vakillik QONUNIY vakillik " +
        "deyiladi.\n\n" +
        "⚠️ FARQ AMALIY: qonuniy vakil ishonchnoma taqdim etmaydi " +
        "— u vakolatini tug'ilish haqidagi guvohnoma yoki " +
        "vasiylik hujjati bilan tasdiqlaydi.\n\n" +
        "MUHIM CHEKLOV: qonuniy vakil ham cheklovsiz emas. " +
        "Vasiylikdagi shaxs mol-mulkini begonalashtirish yoki " +
        "uning huquqlarini kamaytiruvchi bitimlar uchun " +
        "VASIYLIK VA HOMIYLIK ORGANI roziligi talab qilinadi.\n\n" +
        "AMALIY XULOSA: voyaga yetmagan mulkdor ishtirok " +
        "etadigan bitimda ikki hujjat kerak: vakillikni " +
        "tasdiqlovchi hujjat va organ roziligi.",
      example:
        "Bolaga tegishli kvartira ota-ona tomonidan sotildi, " +
        "lekin organ roziligi olinmadi — bitim nizoli.",
      keyPoints: [
        "Layoqatlilar nomidan vakillik ishonchnoma bilan",
        "Layoqatsizlar nomidan vakillik qonun bilan",
        "Qonuniy vakil ishonchnoma taqdim etmaydi",
        "Mulkiy bitimlarda organ roziligi zarur",
      ],
      warning:
        "Voyaga yetmagan mulkdor bo'lgan bitimda faqat ota-ona " +
        "imzosi yetarli emas.",
      lawRefs: [
        { code: "FK", article: "130" },
        { code: "FK", article: "131" },
      ],
    },
    {
      heading: "Vakolatsiz vakillik va uni ma'qullash",
      text:
        "Shaxs boshqa shaxs nomidan VAKOLATSIZ yoki VAKOLATIDAN " +
        "OSHIB ketgan holda bitim tuzsa, bitim vakil qilingan " +
        "shaxs uchun huquq va burch yaratmaydi — u bitimni " +
        "MA'QULLAMAGAN bo'lsa.\n\n" +
        "⚠️ MA'QULLASH — KALIT TUSHUNCHA. Keyinchalik berilgan " +
        "ma'qullash bitimni BOSHIDAN haqiqiy qiladi. Ma'qullash " +
        "yozma bo'lishi shart emas: to'lovni qabul qilish, " +
        "tovarni olish, bajarishga kirishish ham ma'qullash " +
        "sifatida baholanishi mumkin.\n\n" +
        "MA'QULLANMASA: bitim bo'yicha shaxsan VAKOLATSIZ " +
        "harakat qilgan shaxs javob beradi.\n\n" +
        "AMALIY XULOSA IKKI TOMONGA:\n\n" +
        "Kontragent uchun — vakolatni OLDINDAN tekshirish " +
        "shart. Ishonchnomani ko'rmasdan bitim tuzish " +
        "keyinchalik \"biz bunday shartnomani bilmaymiz\" degan " +
        "javobga olib keladi.\n\n" +
        "Vakil qilingan shaxs uchun — vakolatdan oshib ketilgan " +
        "bitimga munosabatni TEZ bildirish kerak. Jimlik va " +
        "bajarishga kirishish ma'qullash deb baholanishi mumkin.",
      example:
        "Xodim vakolatidan oshib shartnoma imzoladi, tashkilot " +
        "esa tovarni qabul qilib to'lovni amalga oshirdi — bu " +
        "ma'qullash hisoblanadi.",
      keyPoints: [
        "Vakolatsiz bitim ma'qullanmaguncha kuchga ega emas",
        "Ma'qullash bitimni boshidan haqiqiy qiladi",
        "Bajarishga kirishish ham ma'qullash bo'lishi mumkin",
        "Ma'qullanmasa vakolatsiz shaxs shaxsan javob beradi",
      ],
      warning:
        "Vakolatdan oshgan bitimni bilib turib jim qolish — uni " +
        "qabul qilish degani.",
      lawRefs: [{ code: "FK", article: "132" }],
    },
    {
      heading: "Ishonchnoma: tushunchasi va shakli",
      text:
        "ISHONCHNOMA — bir shaxs tomonidan boshqa shaxsga uchinchi " +
        "shaxslar oldida vakillik qilish uchun beriladigan YOZMA " +
        "vakolat.\n\n" +
        "Ya'ni ishonchnoma har doim YOZMA bo'ladi — og'zaki " +
        "ishonchnoma mavjud emas.\n\n" +
        "⚠️ NOTARIAL TASDIQLASH QACHON SHART: notarial shaklda " +
        "tuzilishi kerak bo'lgan bitimlarni tuzish uchun " +
        "beriladigan ishonchnoma, shuningdek qonunda nazarda " +
        "tutilgan boshqa hollarda notarial tasdiqlanishi " +
        "kerak.\n\n" +
        "AMALIY QOIDA SODDA: bitim notarial bo'lsa, ishonchnoma " +
        "ham notarial bo'ladi. Ko'chmas mulk bitimlarida bu " +
        "deyarli har doim shunday.\n\n" +
        "YURIDIK SHAXSNING ISHONCHNOMASI rahbar yoki ta'sis " +
        "hujjatlariga muvofiq vakolatli boshqa shaxs imzosi " +
        "bilan beriladi.\n\n" +
        "AYRIM ISHONCHNOMALAR notarial tasdiqlanganga " +
        "TENGLASHTIRILADI — masalan davolash muassasasida, " +
        "harbiy qismda yoki ozodlikdan mahrum qilish joyida " +
        "tasdiqlangan ishonchnomalar. Bu qoida shaxs notariusga " +
        "bora olmaydigan holatlar uchun.",
      example:
        "Uy sotish uchun oddiy yozma ishonchnoma berildi — u " +
        "notarial bitim uchun yetarli emas.",
      keyPoints: [
        "Ishonchnoma har doim yozma bo'ladi",
        "Notarial bitim uchun notarial ishonchnoma kerak",
        "Yuridik shaxs ishonchnomasi rahbar imzosi bilan beriladi",
        "Ayrim ishonchnomalar notarialga tenglashtiriladi",
      ],
      warning:
        "Shaklga rioya qilmaslik ishonchnomani kuchsiz qiladi va " +
        "bitim to'xtab qoladi.",
      lawRefs: [
        { code: "FK", article: "134" },
        { code: "FK", article: "135" },
        { code: "FK", article: "136" },
        { code: "FK", article: "137" },
        { code: "FK", article: "138" },
      ],
    },
    {
      heading: "Ishonchnoma muddati va sana masalasi",
      text:
        "Ishonchnomaning amal qilish muddati qonunda belgilangan " +
        "eng ko'p muddatdan oshmasligi kerak. Muddat " +
        "ko'rsatilmagan bo'lsa, ishonchnoma qonunda belgilangan " +
        "muddat davomida kuchda bo'ladi.\n\n" +
        "⚠️ ENG MUHIM VA ENG KO'P E'TIBORDAN CHETDA QOLADIGAN " +
        "QOIDA: BERILGAN SANA KO'RSATILMAGAN ishonchnoma HAQIQIY " +
        "EMAS.\n\n" +
        "Bu qat'iy qoida va istisnosi yo'q. Sanasiz ishonchnoma " +
        "— bu umuman ishonchnoma emas, chunki uning qachon " +
        "boshlangani va qachon tugashini aniqlab bo'lmaydi.\n\n" +
        "AMALIY XULOSA IKKI TOMONGA: ishonchnoma yozayotganda " +
        "sanani albatta qo'ying; ishonchnoma qabul qilayotganda " +
        "esa birinchi navbatda sanaga qarang.\n\n" +
        "NOTARIAL TASDIQLANGAN ishonchnoma bo'yicha berilgan " +
        "va chet elda amalga oshirish uchun mo'ljallangan " +
        "ishonchnomalar uchun alohida qoidalar bo'lishi mumkin.\n\n" +
        "MUDDAT TUGAGACH ishonchnoma o'z kuchini yo'qotadi va " +
        "undan keyingi harakatlar vakolatsiz vakillik " +
        "hisoblanadi.",
      example:
        "Ishonchnomada faqat imzo bor, sana yozilmagan — bunday " +
        "hujjat bo'yicha bitim tuzib bo'lmaydi.",
      keyPoints: [
        "Muddat qonunda belgilangan chegaradan oshmaydi",
        "Sanasiz ishonchnoma haqiqiy emas",
        "Muddat ko'rsatilmasa qonuniy muddat qo'llaniladi",
        "Muddat tugagach vakolat yo'qoladi",
      ],
      warning:
        "Ishonchnomani qabul qilishda avval sanani, keyin " +
        "vakolatlarni tekshiring.",
      lawRefs: [{ code: "FK", article: "139" }],
    },
    {
      heading: "Ishonchnomani boshqa shaxsga o'tkazish",
      text:
        "Ishonchnoma olgan shaxs unda ko'rsatilgan harakatlarni " +
        "SHAXSAN bajarishi kerak.\n\n" +
        "U vakolatlarni boshqa shaxsga faqat ikki holatda " +
        "o'tkazishi mumkin: (1) ishonchnomada bunga VAKOLAT " +
        "berilgan bo'lsa; (2) vakil qilingan shaxs manfaatlarini " +
        "himoya qilish uchun sharoit MAJBUR qilsa.\n\n" +
        "⚠️ MAJBURIY TALAB: vakolatlarni boshqa shaxsga bergan " +
        "shaxs bu haqda vakil qilingan shaxsni XABARDOR qilishi " +
        "va yangi vakil haqida zarur ma'lumotlarni berishi " +
        "shart.\n\n" +
        "XABAR BERMASLIK OQIBATI JIDDIY: bu majburiyatni " +
        "bajarmagan shaxs yangi vakilning harakatlari uchun " +
        "XUDDI O'Z HARAKATLARI KABI javob beradi.\n\n" +
        "SHAKL: boshqa shaxsga berilgan ishonchnoma notarial " +
        "tasdiqlanishi kerak va uning muddati asosiy " +
        "ishonchnoma muddatidan oshmasligi lozim.\n\n" +
        "AMALIY MASLAHAT: ishonchnoma yozayotganda \"boshqa " +
        "shaxsga o'tkazish huquqisiz\" degan bandni aniq " +
        "kiritish nazoratni saqlashning oddiy va samarali " +
        "yo'li.",
      example:
        "Vakil vakolatni boshqa shaxsga berdi va xabar " +
        "bermadi — u endi o'sha shaxsning harakatlari uchun " +
        "javob beradi.",
      keyPoints: [
        "Vakil harakatlarni shaxsan bajarishi kerak",
        "O'tkazish faqat ikki holatda mumkin",
        "Xabar berish majburiy",
        "Xabar berilmasa vakil o'zi javob beradi",
      ],
      warning:
        "O'tkazish huquqi cheklanmagan ishonchnoma nazoratni " +
        "yo'qotish xavfini oshiradi.",
      lawRefs: [{ code: "FK", article: "140" }],
    },
    {
      heading: "Ishonchnomaning bekor bo'lishi",
      text:
        "Ishonchnoma quyidagi hollarda bekor bo'ladi: muddat " +
        "tugashi; ishonchnoma bergan shaxsning uni BEKOR " +
        "QILISHI; vakilning undan VOZ KECHISHI; ishonchnoma " +
        "bergan yoki olgan yuridik shaxsning tugatilishi; " +
        "ularning vafot etishi, muomalaga layoqatsiz yoki " +
        "bedarak yo'qolgan deb topilishi.\n\n" +
        "⚠️ ENG MUHIM HUQUQ: ishonchnoma bergan shaxs uni " +
        "ISTALGAN PAYTDA bekor qilishga haqli va bu huquqdan " +
        "voz kechish HAQIQIY EMAS.\n\n" +
        "Ya'ni ishonchnomada \"bekor qilinmaydi\" deb yozilgan " +
        "bo'lsa ham, uni bekor qilish mumkin. Bu qoida " +
        "ishonchnoma bergan shaxsni himoya qiladi.\n\n" +
        "XABAR BERISH MAJBURIYATI: bekor qilgan shaxs vakilni " +
        "va unga ma'lum bo'lgan uchinchi shaxslarni xabardor " +
        "qilishi SHART.\n\n" +
        "NIMA UCHUN BU MUHIM: vakil bekor qilinganini " +
        "BILMASDAN tuzgan bitim, agar uchinchi shaxs ham " +
        "bilmagan bo'lsa, ishonchnoma bergan shaxs uchun " +
        "kuchini saqlaydi.\n\n" +
        "QAYTARISH: ishonchnoma bekor bo'lgach vakil uni " +
        "qaytarishi shart.",
      example:
        "Ishonchnoma bekor qilindi, lekin vakil xabardor " +
        "qilinmadi — u tuzgan bitim kuchda qolishi mumkin.",
      keyPoints: [
        "Ishonchnomani istalgan paytda bekor qilish mumkin",
        "Bu huquqdan voz kechish haqiqiy emas",
        "Vakil va uchinchi shaxslarni xabardor qilish shart",
        "Bekor bo'lgach ishonchnoma qaytariladi",
      ],
      warning:
        "Xabar bermasdan bekor qilish — bekor qilmaganday " +
        "natija beradi.",
      lawRefs: [
        { code: "FK", article: "141" },
        { code: "FK", article: "142" },
        { code: "FK", article: "143" },
        { code: "FK", article: "144" },
      ],
    },
  ],
};

module.exports = { LESSON };
