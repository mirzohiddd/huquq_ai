"use strict";
/**
 * UY-JOY MODULI — 7-DARS: YERDAN FOYDALANISH.
 * YK 25–30, 39–42, 43–78, 79–85, 87–91-1.
 */

const LESSON = {
  key: "yerdan-foydalanish",
  category: "housing",
  level: "mid",
  order: 7070,
  title: "Yerdan foydalanish: huquq, majburiyat va bekor qilish",
  desc:
    "Yerdan imorat qurish uchun foydalanish, servitut, yer egasining " +
    "huquq va majburiyatlari, yer toifalari bo'yicha qoidalar, " +
    "yerlarni muhofaza qilish, nazorat va nizolarni hal etish.",
  objectives: [
    "Yerdan imorat qurish uchun foydalanish qoidalarini bilasiz",
    "Servitut nima ekanini va uni qanday belgilashni bilasiz",
    "Yer egasining huquq va majburiyatlarini bilasiz",
    "Aholi punktlari yerlarining tartibini bilasiz",
    "Yerni muhofaza qilish talablarini bilasiz",
    "Yer nizolarini hal etish yo'lini bilasiz",
  ],
  practicalSteps: [
    "Qurilishni boshlashdan oldin barcha ruxsat hujjatlarini oling",
    "Qo'shni uchastkadan foydalanish zarur bo'lsa servitutni yozma rasmiylashtiring",
    "Yerdan foydalanish haqini o'z vaqtida to'lang",
    "Yer bilan bog'liq nizoda avval yozma murojaat qiling",
    "O'zboshimchalik bilan yer egallamang — oqibati og'ir",
  ],
  sections: [
    {
      heading: "Yerdan qidiruv va imorat qurish uchun foydalanish",
      text:
        "QIDIRUV ISHLARI uchun yer uchastkalaridan " +
        "foydalanish alohida tartibda amalga " +
        "oshiriladi va u odatda vaqtincha bo'ladi.\n\n" +
        "IMORAT QURISH uchun yer uchastkalaridan " +
        "foydalanish qonunda belgilangan tartibda " +
        "amalga oshiriladi.\n\n" +
        "⚠️ QURILISHNING HUQUQIY KETMA-KETLIGI: (1) " +
        "yer uchastkasiga huquqni rasmiylashtirish; " +
        "(2) uchastkaning ruxsat etilgan foydalanish " +
        "turi qurilishga imkon berishini tekshirish; " +
        "(3) loyiha hujjatlarini tayyorlash; (4) " +
        "qurilish uchun ruxsatnoma olish; (5) " +
        "qurish; (6) obyektni qabul qilib " +
        "foydalanishga topshirish.\n\n" +
        "Bosqichlardan birini o'tkazib yuborish " +
        "obyektni O'ZBOSHIMCHALIK BILAN QURILGAN " +
        "deb topilishiga olib keladi.\n\n" +
        "YAKKA TARTIBDA UY-JOY QURISH uchun " +
        "fuqarolarga yer uchastkalari " +
        "belgilangan tartibda beriladi (realizatsiya " +
        "qilinadi).\n\n" +
        "YER UCHUN HAQ TO'LASH: yerdan " +
        "foydalanganlik uchun haq to'lanadi — bu " +
        "yer solig'i yoki ijara haqi shaklida " +
        "bo'ladi.\n\n" +
        "SAQLASH VAZIFASI: yer uchastkasini " +
        "saqlash va uning holatini yomonlashtirmaslik " +
        "majburiyati mavjud.\n\n" +
        "AMALIY XULOSA: qurilishni ruxsatsiz " +
        "boshlash — keyinchalik hujjatlashtirishni " +
        "juda qiyinlashtiradi va buzish talabiga " +
        "olib kelishi mumkin.",
      example:
        "Uy ruxsatsiz qurildi — uni ro'yxatdan " +
        "o'tkazish va sotish imkonsiz bo'lib qoldi.",
      keyPoints: [
        "Qurilishning aniq huquqiy ketma-ketligi bor",
        "Bosqichni o'tkazish o'zboshimchalik hisoblanadi",
        "Yakka tartibda qurish uchun yer beriladi",
        "Yerdan foydalanganlik uchun haq to'lanadi",
      ],
      warning:
        "Ruxsatsiz qurilgan obyektni keyin " +
        "rasmiylashtirish har doim ham mumkin emas.",
      lawRefs: [
        { code: "YK", article: "25" },
        { code: "YK", article: "26" },
        { code: "YK", article: "27" },
        { code: "YK", article: "28" },
        { code: "YK", article: "29" },
      ],
    },
    {
      heading: "Servitut: o'zganing yeridan foydalanish",
      text:
        "SERVITUT — o'zganing yer uchastkasidan CHEKLANGAN " +
        "tarzda foydalanish huquqi.\n\n" +
        "U qachon kerak bo'ladi: uchastkangizga yagona " +
        "o'tish yo'li qo'shni yer orqali bo'lsa; suv, " +
        "gaz yoki elektr tarmog'ini o'tkazish zarur " +
        "bo'lsa; boshqa ehtiyojlarni ta'minlash " +
        "uchun.\n\n" +
        "SHARTNOMA: servitut to'g'risidagi shartnoma " +
        "tuziladi va unda foydalanish shartlari " +
        "belgilanadi.\n\n" +
        "ISHTIROKCHILAR HUQUQ VA MAJBURIYATLARI " +
        "qonunda belgilangan: servitutdan " +
        "foydalanuvchi uchastkaga zarar " +
        "yetkazmasligi, uchastka egasi esa " +
        "foydalanishga to'sqinlik qilmasligi " +
        "kerak.\n\n" +
        "⚠️ ENG MUHIM XUSUSIYAT: yer uchastkasiga " +
        "bo'lgan huquq boshqa shaxsga o'tkazilganda " +
        "SERVITUT SAQLANADI.\n\n" +
        "Ya'ni qo'shni uchastkani sotsa ham, sizning " +
        "o'tish huquqingiz yo'qolmaydi.\n\n" +
        "HAQ: servitut uchun haq to'lash nazarda " +
        "tutilgan.\n\n" +
        "OMMAVIY SERVITUT: jamoat ehtiyojlari uchun " +
        "o'zganing yer uchastkasidan cheklangan " +
        "tarzda foydalanish huquqi alohida " +
        "belgilanadi.\n\n" +
        "BEKOR QILISH: servitut ehtiyoj yo'qolganda " +
        "yoki qonunda ko'rsatilgan boshqa " +
        "asoslarda bekor qilinadi.\n\n" +
        "AMALIY MASLAHAT: servitutni og'zaki " +
        "kelishuv bilan qoldirmang. Qo'shni " +
        "o'zgarganda yoki munosabat buzilganda " +
        "yozma hujjat yagona himoyangiz bo'ladi.",
      example:
        "Qo'shni uchastka sotildi, lekin servitut " +
        "rasmiylashtirilgan edi — o'tish huquqi " +
        "saqlandi.",
      keyPoints: [
        "Servitut — o'zganing yeridan cheklangan foydalanish",
        "U shartnoma bilan rasmiylashtiriladi",
        "Mulkdor o'zgarsa servitut saqlanadi",
        "Servitut uchun haq to'lanadi",
      ],
      warning:
        "Og'zaki kelishuv qo'shni o'zgarganda " +
        "ishlamaydi.",
      lawRefs: [
        { code: "YK", article: "30" },
        { code: "YK", article: "30-1" },
        { code: "YK", article: "30-2" },
        { code: "YK", article: "30-3" },
        { code: "YK", article: "30-4" },
        { code: "YK", article: "30-5" },
        { code: "YK", article: "30-6" },
      ],
    },
    {
      heading: "Yer egasining huquq va majburiyatlari",
      text:
        "YER EGASI, YERDAN FOYDALANUVCHI, IJARACHI va " +
        "MULKDORNING huquqlari qonunda " +
        "belgilangan.\n\n" +
        "ASOSIY HUQUQLAR: uchastkadan belgilangan " +
        "maqsadda foydalanish; yetishtirilgan " +
        "mahsulot va olingan daromadga egalik " +
        "qilish; qonunda nazarda tutilgan " +
        "tartibda imoratlar qurish; sug'orish " +
        "va melioratsiya ishlarini olib borish; " +
        "huquqini himoya qilish.\n\n" +
        "⚠️ MAJBURIYATLAR HAM ANIQ BELGILANGAN: " +
        "yerdan MAQSADLI foydalanish; yerni " +
        "muhofaza qilish choralarini ko'rish; " +
        "unumdorlikni saqlash; ekologik " +
        "talablarga rioya qilish; haqni o'z " +
        "vaqtida to'lash; qo'shnilar " +
        "huquqlariga putur yetkazmaslik; " +
        "chegaralarni buzmaslik.\n\n" +
        "KAFOLATLAR: yer uchastkalariga bo'lgan " +
        "huquqlar qonun bilan kafolatlanadi — " +
        "ular faqat qonunda ko'rsatilgan " +
        "asoslarda bekor qilinadi.\n\n" +
        "CHEKLANISHI: huquqlar qonunda nazarda " +
        "tutilgan hollarda cheklanishi mumkin — " +
        "masalan muhofaza zonalari, servitutlar " +
        "yoki maxsus rejim bilan.\n\n" +
        "AMALIY XULOSA: uchastka sotib " +
        "olayotganda unga qanday cheklovlar " +
        "qo'yilganini albatta tekshiring. " +
        "Muhofaza zonasi yoki quvur o'tgan " +
        "bo'lsa, u yerda qurilish imkonsiz " +
        "bo'lishi mumkin.\n\n" +
        "Bu ma'lumot kadastr hujjatlarida va " +
        "shaharsozlik hujjatlarida " +
        "ko'rsatiladi.",
      example:
        "Uchastka ustidan yuqori kuchlanishli liniya " +
        "o'tgan edi — qurilish uchun cheklov " +
        "belgilangan.",
      keyPoints: [
        "Yer egasining aniq huquqlari bor",
        "Maqsadli foydalanish va muhofaza — asosiy majburiyat",
        "Huquqlar qonun bilan kafolatlanadi",
        "Cheklovlarni oldindan tekshiring",
      ],
      warning:
        "Muhofaza zonasidagi qurilish buzish " +
        "talabiga olib keladi.",
      lawRefs: [
        { code: "YK", article: "39" },
        { code: "YK", article: "40" },
        { code: "YK", article: "41" },
        { code: "YK", article: "42" },
      ],
    },
    {
      heading: "Qishloq xo'jaligiga mo'ljallangan yerlar",
      text:
        "QISHLOQ XO'JALIGIGA MO'LJALLANGAN YERLAR — eng " +
        "himoyalangan toifa.\n\n" +
        "TARKIBI: haydaladigan yerlar, ko'p yillik " +
        "daraxtzorlar, pichanzorlar, yaylovlar va " +
        "boshqa qishloq xo'jaligi maydonlari.\n\n" +
        "SUG'ORILADIGAN YERLAR alohida tartibga " +
        "solingan. ALOHIDA QIMMATGA EGA UNUMDOR " +
        "sug'oriladigan yerlar esa eng yuqori " +
        "himoyaga ega.\n\n" +
        "⚠️ TOIFANI O'ZGARTIRISH JUDA CHEKLANGAN: " +
        "sug'oriladigan yerlarni boshqa toifaga " +
        "yoki sug'orilmaydigan yerlarga o'tkazish " +
        "alohida va qat'iy tartibda amalga " +
        "oshiriladi.\n\n" +
        "Bu shuni bildiradi: sug'oriladigan " +
        "yerda uy qurish rejasi ko'p hollarda " +
        "amalga oshmaydi.\n\n" +
        "BERISH: qishloq xo'jaligiga mo'ljallangan " +
        "yerlar qonunda belgilangan tartibda " +
        "beriladi. Bo'sh turgan uchastkalar va " +
        "ularning ajratiladigan o'lchamlari " +
        "alohida tartibga solingan.\n\n" +
        "KIMGA BERILADI: fermer xo'jaligi, dehqon " +
        "xo'jaligi, jamoa bog'dorchiligi, " +
        "qishloq xo'jaligi kooperativlari, " +
        "ilmiy va o'quv muassasalari.\n\n" +
        "MAJBURIYATLAR: qishloq xo'jaligi " +
        "yerlaridan foydalanuvchilar " +
        "unumdorlikni saqlash, tuproqni " +
        "muhofaza qilish va agrotexnik " +
        "talablarga rioya qilish " +
        "majburiyatlarini oladi.\n\n" +
        "XO'JALIK ICHIDA TAQSIMLASH va OILA " +
        "(JAMOA) PUDRATI ham nazarda " +
        "tutilgan.",
      example:
        "Sug'oriladigan yer uy qurish uchun sotib " +
        "olindi — toifani o'zgartirish rad etildi.",
      keyPoints: [
        "Qishloq xo'jaligi yerlari eng himoyalangan toifa",
        "Sug'oriladigan yerlar alohida himoyada",
        "Toifani o'zgartirish juda cheklangan",
        "Foydalanuvchilarda unumdorlikni saqlash majburiyati bor",
      ],
      warning:
        "Sug'oriladigan yerda qurilish rejasi " +
        "ko'pincha amalga oshmaydi.",
      lawRefs: [
        { code: "YK", article: "43" },
        { code: "YK", article: "44" },
        { code: "YK", article: "44-1" },
        { code: "YK", article: "45" },
        { code: "YK", article: "45-1" },
        { code: "YK", article: "46" },
        { code: "YK", article: "48" },
        { code: "YK", article: "53" },
        { code: "YK", article: "55" },
        { code: "YK", article: "56" },
      ],
    },
    {
      heading: "Aholi punktlari va boshqa toifadagi yerlar",
      text:
        "SHAHARLAR VA POSYOLKALAR YERLARI tarkibiga " +
        "qurilish yerlari, umumiy foydalanishdagi " +
        "yerlar, daraxtzorlar va boshqa maqsadlarga " +
        "mo'ljallangan yerlar kiradi.\n\n" +
        "CHEGARA: aholi punktlarining chegarasi va " +
        "shahar atrofi zonalari belgilanadi.\n\n" +
        "BERISH TARTIBI: shaharlar va posyolkalarda " +
        "yer uchastkalarini berish, olib qo'yish " +
        "va qayta sotib olish alohida tartibda " +
        "amalga oshiriladi.\n\n" +
        "⚠️ KO'P KVARTIRALI UYLAR ATROFIDAGI YER " +
        "UCHASTKALARI — amalda juda muhim masala: " +
        "ular alohida tartibga solingan va odatda " +
        "uy mulkdorlarining umumiy mol-mulkiga " +
        "kiradi.\n\n" +
        "Shuning uchun hovlini o'zboshimchalik " +
        "bilan egallash, u yerga garaj yoki " +
        "to'siq qurish boshqa mulkdorlar " +
        "huquqini buzish hisoblanadi.\n\n" +
        "UMUMIY FOYDALANISHDAGI YERLAR (ko'chalar, " +
        "maydonlar, bog'lar) hammaning " +
        "foydalanishida bo'ladi va ularni " +
        "xususiylashtirish mumkin emas.\n\n" +
        "BOSHQA TOIFALAR: sanoat, transport, " +
        "aloqa, mudofaa yerlari; tabiatni " +
        "muhofaza qilish, sog'lomlashtirish va " +
        "rekreatsiya yerlari; tarixiy-madaniy " +
        "ahamiyatga molik yerlar; o'rmon va suv " +
        "fondi yerlari; zaxira yerlar.\n\n" +
        "⚠️ TARIXIY-MADANIY yerlar va MUHOFAZA " +
        "qilinadigan hududlarda faoliyat qattiq " +
        "cheklangan — bu yerlarda har qanday " +
        "ish maxsus ruxsat talab qiladi.\n\n" +
        "QISHLOQ AHOLI PUNKTLARI yerlari ham " +
        "alohida tartibga solingan.",
      example:
        "Ko'p kvartirali uy hovlisiga ruxsatsiz " +
        "garaj qurildi — boshqa mulkdorlar buni " +
        "nizolashtirishi mumkin.",
      keyPoints: [
        "Aholi punktlari yerlari alohida tartibga solingan",
        "Uy atrofidagi yer umumiy mol-mulkka kiradi",
        "Umumiy foydalanishdagi yerlar xususiylashtirilmaydi",
        "Muhofaza qilinadigan yerlarda faoliyat cheklangan",
      ],
      warning:
        "Umumiy hovlini egallash boshqa " +
        "mulkdorlar huquqini buzadi.",
      lawRefs: [
        { code: "YK", article: "59" },
        { code: "YK", article: "60" },
        { code: "YK", article: "61" },
        { code: "YK", article: "62" },
        { code: "YK", article: "63" },
        { code: "YK", article: "64" },
        { code: "YK", article: "68" },
        { code: "YK", article: "69" },
        { code: "YK", article: "71" },
        { code: "YK", article: "75" },
        { code: "YK", article: "76" },
        { code: "YK", article: "77" },
        { code: "YK", article: "78" },
      ],
    },
    {
      heading: "Yerlarni muhofaza qilish va ekologik talablar",
      text:
        "YERLARNI MUHOFAZA QILISH — tuproq " +
        "unumdorligini saqlash, yer resurslarini " +
        "buzilishdan va ifloslanishdan himoya " +
        "qilish bo'yicha chora-tadbirlar tizimi.\n\n" +
        "EKOLOGIK TALABLAR: obyektlarni " +
        "joylashtirish, loyihalash, qurish va " +
        "ulardan foydalanishda ekologik talablarga " +
        "rioya qilish shart.\n\n" +
        "⚠️ AMALIY XULOSA TADBIRKORGA: qurilish " +
        "yoki ishlab chiqarish boshlashdan oldin " +
        "ekologik talablar va zarur ekspertizalar " +
        "ro'yxatini aniqlang.\n\n" +
        "Ular bajarilmasa faoliyat to'xtatilishi " +
        "va jarima solinishi mumkin.\n\n" +
        "IFLOSLANGAN YERLAR: kimyoviy yoki " +
        "radioaktiv moddalar bilan ifloslangan " +
        "yerlardan foydalanish alohida tartibda " +
        "va cheklovlar bilan amalga oshiriladi.\n\n" +
        "RAG'BATLANTIRISH: yerlardan oqilona " +
        "foydalanish va ularni muhofaza qilish " +
        "iqtisodiy jihatdan " +
        "rag'batlantiriladi — bu imtiyozlar " +
        "shaklida bo'lishi mumkin.\n\n" +
        "NAZORAT: yer uchastkalarini ajratish, " +
        "ulardan foydalanish va ularni " +
        "muhofaza qilish ustidan DAVLAT hamda " +
        "JAMOATCHILIK nazorati amalga " +
        "oshiriladi.\n\n" +
        "⚠️ JAMOATCHILIK NAZORATI — kam " +
        "ma'lum, lekin foydali vosita: " +
        "fuqarolar va jamoat birlashmalari " +
        "yerdan noto'g'ri foydalanish " +
        "holatlarini aniqlash va bu haqda " +
        "xabar berishga haqli.\n\n" +
        "Ya'ni qo'shningiz yerni buzayotgan " +
        "yoki ifloslantirayotgan bo'lsa, " +
        "buni nazorat organiga bildirish " +
        "huquqingiz bor.",
      example:
        "Uchastkada ekologik talablar " +
        "buzilgani aniqlandi — faoliyat " +
        "to'xtatildi.",
      keyPoints: [
        "Yerlarni muhofaza qilish majburiy",
        "Qurilishda ekologik talablar bajariladi",
        "Ifloslangan yerlardan foydalanish cheklangan",
        "Davlat va jamoatchilik nazorati mavjud",
      ],
      warning:
        "Ekologik ekspertizasiz faoliyat " +
        "to'xtatilishi mumkin.",
      lawRefs: [
        { code: "YK", article: "79" },
        { code: "YK", article: "80" },
        { code: "YK", article: "81" },
        { code: "YK", article: "82" },
        { code: "YK", article: "83" },
        { code: "YK", article: "83-1" },
        { code: "YK", article: "84" },
        { code: "YK", article: "85" },
      ],
    },
    {
      heading: "Zararni qoplash, nizolar va o'zboshimchalik",
      text:
        "ZARARNI QOPLASH: yer egalari, yerdan " +
        "foydalanuvchilar, ijarachilar va " +
        "mulkdorlarga yetkazilgan zarar " +
        "qoplanadi.\n\n" +
        "NOBUDGARCHILIKLARNI QOPLASH: qishloq " +
        "xo'jaligi va o'rmon xo'jaligi ishlab " +
        "chiqarishi nobudgarchiliklarining " +
        "o'rni qoplanadi va bu mablag'lardan " +
        "foydalanish tartibi belgilangan.\n\n" +
        "⚠️ AMALIY MA'NOSI: yeringiz boshqa " +
        "shaxs harakati tufayli zarar ko'rsa " +
        "(masalan qurilish, ifloslanish, " +
        "suv toshqini), zararni talab qilish " +
        "huquqingiz bor.\n\n" +
        "Buning uchun zararni DARHOL qayd " +
        "eting: foto, dalolatnoma, " +
        "mutaxassis xulosasi.\n\n" +
        "NIZOLARNI HAL ETISH: yer xususidagi " +
        "nizolar qonunda belgilangan tartibda " +
        "hal etiladi — ma'muriy va SUD " +
        "tartibida.\n\n" +
        "JAVOBGARLIK: yer to'g'risidagi " +
        "qonunchilikni buzganlik uchun " +
        "javobgarlik belgilangan.\n\n" +
        "⚠️ O'ZBOSHIMCHALIK BILAN YER " +
        "EGALLASH — ENG OG'IR OQIBATLI " +
        "QONUNBUZARLIK:\n\n" +
        "O'zboshimchalik bilan egallab " +
        "olingan yerlar QAYTARILADI. Bunda " +
        "egallab olgan shaxsga qurilish " +
        "yoki yaxshilanish xarajatlari " +
        "QOPLANMAYDI.\n\n" +
        "Ya'ni siz o'zboshimchalik bilan " +
        "egallangan yerda uy qursangiz — " +
        "yerni ham, uyni ham, sarflangan " +
        "pulni ham yo'qotishingiz mumkin.\n\n" +
        "AMALIY QOIDA: \"hech kim " +
        "ishlatmayapti\", \"yillar davomida " +
        "shu yerda turibmiz\" degan " +
        "dalillar mulk huquqini " +
        "yaratmaydi. Har qanday " +
        "foydalanishni rasmiylashtiring.",
      example:
        "Yillar davomida foydalanilgan yer " +
        "rasmiylashtirilmagan edi — u " +
        "qaytarib olindi va xarajatlar " +
        "qoplanmadi.",
      keyPoints: [
        "Yetkazilgan zarar qoplanadi",
        "Nizolar ma'muriy va sud tartibida hal etiladi",
        "O'zboshimchalik bilan egallangan yer qaytariladi",
        "Bunda xarajatlar qoplanmaydi",
      ],
      warning:
        "Rasmiylashtirilmagan foydalanish " +
        "hech qanday huquq yaratmaydi.",
      lawRefs: [
        { code: "YK", article: "87" },
        { code: "YK", article: "88" },
        { code: "YK", article: "89" },
        { code: "YK", article: "90" },
        { code: "YK", article: "91" },
        { code: "YK", article: "91-1" },
      ],
    },
  ],
};

module.exports = { LESSON };
