"use strict";
/**
 * OILA HUQUQI — 4-QISM: AJRASHISH (31–40-mavzular)
 *
 * Foydalanuvchining so'roviga ko'ra: "oxirida ajrashish qanday
 * bo'ladi". Ketma-ketlik: nikoh qanday tugaydi → qaysi yo'l bilan
 * ajrashiladi (FHDYo yoki sud) → sud nimalarni hal qiladi →
 * qachon kuchga kiradi → familiya → nikohni haqiqiy emas deb topish.
 */

const SECTIONS = [
  /* ── 31 ────────────────────────────────────────────────────── */
  {
    heading: "Nikoh qanday tugaydi: asoslar",
    text:
      "Nikoh uch holatda tugaydi. Birinchisi — " +
      "er yoki xotinning VAFOTI. Ikkinchisi — " +
      "ulardan biri sud tomonidan VAFOT ETGAN " +
      "deb e'lon qilinishi. Uchinchisi — " +
      "NIKOHDAN AJRATISH, ya'ni ajralish.\n\n" +
      "Birinchi ikkisida alohida ariza kerak " +
      "emas: nikoh o'z-o'zidan tugaydi. " +
      "Uchinchisi esa tartib va ariza talab " +
      "qiladi — aynan shu qism bizni " +
      "qiziqtiradi.\n\n" +
      "Muhim tushuncha: \"amalda ajrashib " +
      "ketish\" degan huquqiy holat YO'Q. " +
      "Er-xotin yillar davomida alohida " +
      "yashashi mumkin, lekin nikoh rasman " +
      "tugatilmaguncha ular er-xotinligicha " +
      "qoladi.\n\n" +
      "Bu shuni anglatadi: alohida yashash " +
      "davrida orttirilgan mol-mulk ham baribir " +
      "umumiy mulk hisoblanishi mumkin, yangi " +
      "nikoh tuzib bo'lmaydi, meros huquqi " +
      "esa saqlanib qoladi.",
    example:
      "Er-xotin besh yil alohida yashadi, " +
      "hech qanday hujjat rasmiylashtirmadi. " +
      "Shu davrda er kvartira sotib oldi. " +
      "Rasman nikoh davom etayotgani uchun bu " +
      "kvartira umumiy mulk deb topilishi " +
      "mumkin.",
    keyPoints: [
      "Nikoh vafot, vafot deb e'lon qilish yoki ajralish bilan tugaydi",
      "\"Amalda ajrashish\" huquqiy holat emas",
      "Rasman ajrashmaguncha umumiy mulk rejimi davom etadi",
      "Yangi nikoh faqat rasmiy ajralishdan keyin tuziladi",
    ],
    warning:
      "Ajralishni cho'zish moddiy jihatdan " +
      "zarar keltirishi mumkin — alohida " +
      "yashash davridagi mulk ham bo'lish " +
      "predmetiga tushib qoladi.",
    lawRefs: [
      { code: "OK", article: "37" },
      { code: "OK", article: "48" },
    ],
  },

  /* ── 32 ────────────────────────────────────────────────────── */
  {
    heading: "Ajralish qanday bo'ladi: ikki yo'l",
    text:
      "Ajralishning IKKI yo'li bor: FHDYo " +
      "organi orqali va SUD orqali. Qaysi biri " +
      "qo'llanishi vaziyatga bog'liq va buni " +
      "tomonlar o'zi tanlay olmaydi.\n\n" +
      "FHDYo orqali — bu soddaroq va tezroq " +
      "yo'l. U asosan er-xotinning o'zaro " +
      "roziligi bo'lgan va VOYAGA YETMAGAN " +
      "BOLASI BO'LMAGAN holatlarda " +
      "qo'llaniladi.\n\n" +
      "SUD orqali — bu yo'l voyaga yetmagan " +
      "bolalar bo'lganda, tomonlardan biri " +
      "rozi bo'lmaganda yoki mulk bo'yicha " +
      "nizo bo'lganda qo'llaniladi.\n\n" +
      "Ya'ni asosiy ajratuvchi omillar: " +
      "voyaga yetmagan bolaning bor-yo'qligi, " +
      "rozilikning bor-yo'qligi va nizoning " +
      "bor-yo'qligi. Aniq shartlar quyidagi " +
      "qonun matnida.",
    example:
      "Er-xotin ikkalasi ham ajrashishga rozi, " +
      "lekin 8 yoshli bolasi bor. FHDYo yo'li " +
      "ishlamaydi — ish sudga boradi, chunki " +
      "bola bilan bog'liq masalalarni faqat " +
      "sud hal qila oladi.",
    keyPoints: [
      "Ajralishning ikki yo'li bor: FHDYo va sud",
      "Yo'lni tomonlar emas, vaziyat belgilaydi",
      "Voyaga yetmagan bola bo'lsa — sud yo'li",
      "Rozilik yoki nizo ham yo'lni aniqlaydi",
    ],
    warning:
      "Bolasi bor er-xotin FHDYo orqali " +
      "ajrasha olmaydi — bunday urinish vaqt " +
      "yo'qotishdan boshqa narsa bermaydi.",
    lawRefs: [
      { code: "OK", article: "38" },
      { code: "OK", article: "40" },
    ],
  },

  /* ── 33 ────────────────────────────────────────────────────── */
  {
    heading: "Erning ajralish talab qila olmaydigan holati",
    text:
      "Qonunda alohida himoya normasi bor: " +
      "muayyan davrda ER nikohdan ajratish " +
      "to'g'risida talab qo'ya olmaydi.\n\n" +
      "Bu davr xotinning HOMILADORLIGI va " +
      "bola tug'ilgandan keyingi belgilangan " +
      "muddat bilan bog'liq. Aniq muddat " +
      "quyidagi qonun matnida ko'rsatilgan.\n\n" +
      "Nima uchun bunday norma bor? Chunki " +
      "aynan shu davrda ayol eng zaif " +
      "holatda bo'ladi: mehnat qobiliyati " +
      "cheklangan, daromadi kam yoki yo'q, " +
      "chaqaloqqa qarash bilan band. Bunday " +
      "paytda ajralish jarayoni uni himoyasiz " +
      "qoldirardi.\n\n" +
      "Muhim: cheklov faqat ERGA nisbatan " +
      "amal qiladi. XOTIN esa istalgan paytda " +
      "ajralish talab qila oladi — bu norma " +
      "aynan uni himoya qilish uchun " +
      "yaratilgan.",
    example:
      "Xotin homilador, er ajrashish uchun " +
      "sudga ariza berdi. Sud arizani ko'rib " +
      "chiqmaydi. Lekin xuddi shu davrda " +
      "xotinning o'zi ariza bersa — u qabul " +
      "qilinadi.",
    keyPoints: [
      "Belgilangan davrda er ajralish talab qila olmaydi",
      "Davr homiladorlik va bola tug'ilgandan keyingi muddatni qamraydi",
      "Norma ayolni eng zaif paytda himoya qiladi",
      "Xotinga nisbatan bunday cheklov yo'q",
    ],
    warning:
      "Bu cheklov nikohni MUZLATMAYDI: davr " +
      "tugagach er ariza berishi mumkin. U " +
      "faqat vaqtincha himoya beradi.",
    lawRefs: [
      { code: "OK", article: "39" },
      { code: "OK", article: "38" },
    ],
  },

  /* ── 34 ────────────────────────────────────────────────────── */
  {
    heading: "O'zaro rozilik bilan FHDYo'da ajrashish",
    text:
      "Bu — eng oddiy yo'l. Er-xotinning " +
      "o'zaro roziligi bo'lsa va voyaga " +
      "yetmagan bolasi bo'lmasa, ajralish " +
      "FHDYo organida qayd etiladi.\n\n" +
      "Tartib: ikkala tomon birgalikda ariza " +
      "beradi, belgilangan muddat kutiladi va " +
      "shundan keyin ajralish qayd etiladi. " +
      "Kutish muddati bu yerda ham qarorni " +
      "o'ylab ko'rish uchun berilgan.\n\n" +
      "Muhim jihat: FHDYo organi ajralish " +
      "SABABINI so'ramaydi va tomonlarni " +
      "yarashtirishga urinmaydi. Bu sud " +
      "yo'lidan asosiy farqi.\n\n" +
      "Mulk bo'yicha nizo bo'lsa nima " +
      "bo'ladi? Nizo bo'lsa ish sudga " +
      "o'tadi. Lekin tomonlar mulkni " +
      "o'zaro kelishuv bilan bo'lsa — " +
      "FHDYo yo'li ochiq qoladi.",
    example:
      "Er-xotinning bolasi yo'q, mulkni " +
      "o'zaro kelishib bo'lishdi va " +
      "ikkalasi ham ajrashishga rozi. " +
      "Ular FHDYo organiga birgalikda " +
      "ariza berib, belgilangan muddatdan " +
      "keyin guvohnoma olishadi.",
    keyPoints: [
      "Eng oddiy yo'l — o'zaro rozilik va bolasizlik sharti bilan",
      "Ariza birgalikda beriladi",
      "FHDYo sabab so'ramaydi va yarashtirmaydi",
      "Mulk bo'yicha nizo chiqsa ish sudga o'tadi",
    ],
    warning:
      "Ariza berilgach kutish muddati " +
      "ichida tomonlardan biri fikridan " +
      "qaytsa, jarayon to'xtaydi.",
    lawRefs: [
      { code: "OK", article: "42" },
      { code: "OK", article: "218" },
    ],
  },

  /* ── 35 ────────────────────────────────────────────────────── */
  {
    heading: "Bir tomon arizasi bo'yicha FHDYo'da ajratish",
    text:
      "Alohida holat: ba'zan FHDYo organi " +
      "ikkinchi tomonning roziligisiz ham " +
      "ajralishni qayd etadi.\n\n" +
      "Bu istisno tor doirada qo'llaniladi va " +
      "ikkinchi tomonning huquqiy holati " +
      "bilan bog'liq. Masalan u sud tomonidan " +
      "bedarak yo'qolgan deb topilgan, " +
      "muomalaga layoqatsiz deb topilgan yoki " +
      "belgilangan muddatga ozodlikdan mahrum " +
      "qilingan bo'lsa.\n\n" +
      "Mantiq shundaki, bunday holatlarda " +
      "ikkinchi tomondan rozilik olish " +
      "obyektiv ravishda imkonsiz yoki " +
      "ma'nosiz bo'ladi.\n\n" +
      "Bunday hollarda ham voyaga yetmagan " +
      "bolalar bo'lishi FHDYo yo'lini " +
      "to'sib qo'ymaydi — lekin bola va " +
      "aliment bo'yicha masalalar alohida " +
      "hal qilinadi.",
    example:
      "Er bir necha yildan beri bedarak " +
      "yo'qolgan va sud uni shunday deb " +
      "topgan. Xotin FHDYo organiga yolg'iz " +
      "ariza berib ajralishni qayd ettirishi " +
      "mumkin.",
    keyPoints: [
      "Ba'zi holatlarda bir tomon arizasi yetarli",
      "Asoslar ikkinchi tomonning huquqiy holatiga bog'liq",
      "Sabab — rozilik olishning obyektiv imkonsizligi",
      "Bola va aliment masalalari alohida hal qilinadi",
    ],
    warning:
      "Bu yo'l uchun ikkinchi tomonning " +
      "holati SUD QARORI bilan tasdiqlangan " +
      "bo'lishi shart — shunchaki \"aloqa " +
      "yo'q\" degani yetarli emas.",
    lawRefs: [
      { code: "OK", article: "43" },
      { code: "OK", article: "219" },
    ],
  },

  /* ── 36 ────────────────────────────────────────────────────── */
  {
    heading: "Sud orqali ajrashish va yarashtirish muddati",
    text:
      "Sud yo'li ko'proq uchraydi, chunki " +
      "aksariyat oilalarda voyaga yetmagan " +
      "bola bo'ladi yoki nizo mavjud.\n\n" +
      "Sud nikohni ajratish uchun asos bor-" +
      "yo'qligini baholaydi. Asosiy mezon — " +
      "er-xotinning birgalikda yashashi va " +
      "oilani saqlab qolishi mumkin " +
      "emasligi.\n\n" +
      "Muhim xususiyat: sud tomonlarni " +
      "YARASHTIRISHGA harakat qilishi va " +
      "shu maqsadda muddat belgilashi " +
      "mumkin. Bu muddat ichida ish " +
      "ko'rilishi to'xtatib turiladi.\n\n" +
      "Yarashtirish muddati — rasmiyatchilik " +
      "emas. Amalda ko'p oilalar shu davrda " +
      "kelishib, arizani qaytarib olishadi. " +
      "Agar muddat tugagach tomonlar " +
      "fikridan qaytmasa, sud ajratish " +
      "haqida qaror chiqaradi.",
    example:
      "Xotin ajralish uchun ariza berdi. " +
      "Sud yarashtirish uchun muddat " +
      "belgiladi. Shu davrda er-xotin " +
      "kelishdi va ariza qaytarib olindi — " +
      "ish yopiladi.",
    keyPoints: [
      "Sud yo'li bola yoki nizo bo'lganda qo'llaniladi",
      "Mezon — birgalikda yashash imkoniyati qolgan-qolmagani",
      "Sud yarashtirish uchun muddat belgilashi mumkin",
      "Muddat tugagach fikr o'zgarmasa qaror chiqariladi",
    ],
    warning:
      "Sud majlisiga sababsiz kelmaslik " +
      "ishni cho'zadi va sizning " +
      "manfaatlaringiz hisobga olinmay " +
      "qolishiga olib kelishi mumkin.",
    lawRefs: [
      { code: "OK", article: "40" },
      { code: "OK", article: "41" },
    ],
  },

  /* ── 37 ────────────────────────────────────────────────────── */
  {
    heading: "Ajralishda sud hal qiladigan masalalar",
    text:
      "Sud nikohni ajratish haqida qaror " +
      "chiqarayotganda bir vaqtning o'zida " +
      "bir nechta masalani hal qiladi. Bu — " +
      "ajralish jarayonining eng muhim qismi.\n\n" +
      "Sud hal qiladigan asosiy masalalar: " +
      "voyaga yetmagan bolalar KIM BILAN " +
      "yashashi; ularni ta'minlash uchun " +
      "kimdan qancha aliment undirilishi; " +
      "talab bo'lsa — mehnatga layoqatsiz " +
      "er (xotin)ga ta'minot; talab bo'lsa " +
      "— umumiy mol-mulkni bo'lish.\n\n" +
      "Muhim: mulk va ta'minot masalalari " +
      "TALAB bo'lganda ko'riladi. Ya'ni " +
      "ularni ariza qilib so'ramasangiz, " +
      "sud o'zi ko'tarmaydi.\n\n" +
      "Bola bilan bog'liq masalalar esa " +
      "talabdan qat'i nazar hal qilinadi — " +
      "chunki bu yerda bolaning manfaati " +
      "himoya qilinadi, ota-onaning " +
      "so'rovi emas.",
    example:
      "Ajralish paytida xotin faqat bola " +
      "masalasini ko'tardi, mulk bo'yicha " +
      "talab qo'ymadi. Sud mulkni bo'lmaydi " +
      "— buning uchun keyinchalik alohida " +
      "da'vo qo'yishi kerak bo'ladi.",
    keyPoints: [
      "Sud bola, aliment, ta'minot va mulk masalalarini ko'radi",
      "Mulk va ta'minot faqat TALAB bo'lganda hal qilinadi",
      "Bola bilan bog'liq masalalar talabsiz ham hal qilinadi",
      "Barcha masalani bir ishda hal qilish vaqt va kuch tejaydi",
    ],
    warning:
      "Mulk talabini ajralish ishida " +
      "qo'ymaslik — eng ko'p uchraydigan " +
      "va eng qimmatga tushadigan xato.",
    lawRefs: [
      { code: "OK", article: "44" },
      { code: "OK", article: "45" },
    ],
  },

  /* ── 38 ────────────────────────────────────────────────────── */
  {
    heading: "Nikoh qachon tugagan hisoblanadi",
    text:
      "Sud qarori chiqdi — nikoh tugadimi? " +
      "Hali yo'q. Bu nuqta ko'p chalkashlik " +
      "tug'diradi va jiddiy oqibatlarga olib " +
      "keladi.\n\n" +
      "Sud tartibida ajratilganda nikoh " +
      "belgilangan huquqiy paytdan boshlab " +
      "tugagan hisoblanadi. FHDYo tartibida " +
      "esa ajralish QAYD ETILGAN kundan.\n\n" +
      "Nima uchun bu muhim? Chunki aynan shu " +
      "sanadan boshlab: umumiy mulk rejimi " +
      "to'xtaydi, meros huquqi yo'qoladi, " +
      "yangi nikoh tuzish mumkin bo'ladi.\n\n" +
      "Ajralish qayd etilgach tomonlarga " +
      "guvohnoma beriladi va hujjatlarga " +
      "tegishli belgi qo'yiladi. Bu " +
      "guvohnoma keyinchalik yangi nikoh " +
      "tuzishda va boshqa masalalarda " +
      "talab qilinadi.",
    example:
      "Sud qarori chiqdi, lekin tomonlar " +
      "guvohnomani olishga bormadi. Yangi " +
      "nikoh tuzmoqchi bo'lganda FHDYo " +
      "organi hujjat talab qildi — jarayon " +
      "to'xtadi.",
    keyPoints: [
      "Nikoh sud qarori chiqishi bilan darhol tugamaydi",
      "FHDYo tartibida — qayd etilgan kundan tugaydi",
      "Shu sanadan umumiy mulk va meros huquqi to'xtaydi",
      "Ajralish guvohnomasini olish shart",
    ],
    warning:
      "Guvohnomani olmaslik yangi nikoh " +
      "tuzishga to'sqinlik qiladi va " +
      "hujjatlarda chalkashlik keltirib " +
      "chiqaradi.",
    lawRefs: [
      { code: "OK", article: "47" },
      { code: "OK", article: "221" },
    ],
  },

  /* ── 39 ────────────────────────────────────────────────────── */
  {
    heading: "Ajralishdan keyin familiya",
    text:
      "Nikohda familiyasini o'zgartirgan tomon " +
      "ajralishdan keyin tanlov qiladi: " +
      "nikohdagi familiyani SAQLAB QOLISH yoki " +
      "nikohgacha bo'lgan familiyaga QAYTISH.\n\n" +
      "Bu — SHAXSIY huquq. Ikkinchi tomonning " +
      "roziligi kerak emas va u familiyani " +
      "qaytarishni TALAB QILA OLMAYDI.\n\n" +
      "Amalda ko'pchilik nikohdagi familiyani " +
      "saqlab qoladi — ayniqsa bolalar shu " +
      "familiyada bo'lsa yoki hujjatlarni " +
      "qayta rasmiylashtirish noqulay bo'lsa.\n\n" +
      "Tanlov ajralishni qayd etish paytida " +
      "bildiriladi. Keyinroq o'zgartirish " +
      "ham mumkin, lekin bu alohida tartibda " +
      "va alohida ariza bilan bo'ladi.",
    example:
      "Ajrashgandan keyin er sobiq xotinidan " +
      "familiyani qaytarishni talab qildi. " +
      "Bunday talabning huquqiy asosi yo'q — " +
      "qaror faqat familiyani olgan " +
      "tomonniki.",
    keyPoints: [
      "Familiyani saqlash yoki qaytarish — shaxsiy tanlov",
      "Ikkinchi tomonning roziligi talab qilinmaydi",
      "Tanlov ajralishni qayd etishda bildiriladi",
      "Keyinroq o'zgartirish alohida tartibda bo'ladi",
    ],
    warning:
      "Familiya qaytarilsa barcha hujjatni " +
      "yangilash kerak — pasport, mulk, " +
      "bank, mehnat hujjatlari.",
    lawRefs: [
      { code: "OK", article: "46" },
      { code: "OK", article: "220" },
    ],
  },

  /* ── 40 ────────────────────────────────────────────────────── */
  {
    heading: "Nikohni haqiqiy emas deb topish",
    text:
      "Bu ajralishdan BUTUNLAY boshqa narsa. " +
      "Ajralishda nikoh bor edi va tugadi. " +
      "Haqiqiy emas deb topishda esa nikoh " +
      "BOSHIDANOQ bo'lmagan deb hisoblanadi.\n\n" +
      "Asoslar: nikoh yoshi buzilgan; " +
      "ixtiyoriylik yo'q (majburlash); " +
      "monelik qiladigan holat mavjud " +
      "bo'lgan; nikoh SOXTA bo'lgan (ya'ni " +
      "oila qurish niyatisiz, boshqa maqsadda " +
      "tuzilgan).\n\n" +
      "Oqibatlari jiddiy: umumiy mulk rejimi " +
      "yuzaga kelmagan deb hisoblanadi, " +
      "ta'minot huquqi yo'qoladi, nikoh " +
      "shartnomasi haqiqiy emas deb " +
      "topiladi.\n\n" +
      "⚠️ Lekin BOLALAR himoyada qoladi. " +
      "Bunday nikohdan tug'ilgan bolalarning " +
      "huquqlari to'liq saqlanadi — ular " +
      "hech narsani yo'qotmaydi. " +
      "Shuningdek, aybsiz tomon uchun ham " +
      "qonun himoya choralarini nazarda " +
      "tutgan.",
    example:
      "Erkak faqat ro'yxatdan o'tish uchun " +
      "soxta nikoh tuzdi. Nikoh haqiqiy emas " +
      "deb topildi. Shu nikohdan tug'ilgan " +
      "bolaning ta'minot va meros huquqlari " +
      "esa to'liq saqlanadi.",
    keyPoints: [
      "Haqiqiy emas deb topish — ajralishdan boshqa narsa",
      "Nikoh boshidanoq bo'lmagan deb hisoblanadi",
      "Umumiy mulk va ta'minot huquqi yuzaga kelmaydi",
      "Bolalarning huquqlari to'liq saqlanadi",
    ],
    warning:
      "Faqat SUD nikohni haqiqiy emas deb " +
      "topa oladi. Boshqa hech qanday organ " +
      "yoki shaxs bunga vakolatli emas.",
    lawRefs: [
      { code: "OK", article: "49" },
      { code: "OK", article: "54" },
      { code: "OK", article: "56" },
    ],
  },
];

module.exports = { SECTIONS };
