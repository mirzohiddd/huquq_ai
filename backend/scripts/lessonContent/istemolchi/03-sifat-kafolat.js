"use strict";
/**
 * ISTE'MOLCHI HUQUQLARI — 3-QISM: SIFAT VA KAFOLAT (19–28-mavzular)
 *
 * Ketma-ketlik: sifat nima → kafolat va yaroqlilik muddatlari →
 * nuqson qachon hisobga olinadi → nuqsonli tovar bo'yicha
 * TALABLAR (almashtirish, ta'mirlash, narxni kamaytirish, qaytarish).
 */

const SECTIONS = [
  /* ── 19 ────────────────────────────────────────────────────── */
  {
    heading: "Tovar sifati nima demak",
    text:
      "\"Sifatsiz tovar\" — kundalik " +
      "ibora, lekin huquqda uning " +
      "aniq mazmuni bor.\n\n" +
      "Sotuvchi tovarni SHARTNOMAGA " +
      "muvofiq sifatda topshirishi " +
      "shart. Shartnomada sifat " +
      "shartlari yo'q bo'lsa, tovar " +
      "SHUNDAY TOVAR ODATDA " +
      "ISHLATILADIGAN maqsadlarga " +
      "yaroqli bo'lishi kerak.\n\n" +
      "Agar xaridor sotib olishda " +
      "tovarni sotib olishning ANIQ " +
      "maqsadini aytgan bo'lsa, " +
      "tovar o'sha maqsadga " +
      "yaroqli bo'lishi shart.\n\n" +
      "⚠️ Bu qoida juda foydali: " +
      "\"men buni mana shu ish " +
      "uchun olyapman\" deb " +
      "aytganingiz keyinchalik " +
      "talab uchun asos bo'ladi. " +
      "Shuning uchun maqsadni " +
      "aytish va imkoni bo'lsa " +
      "yozib qo'yish kerak.\n\n" +
      "Namuna bo'yicha sotishda " +
      "esa tovar namunaga mos " +
      "bo'lishi kerak.",
    example:
      "Xaridor \"bu bo'yoq " +
      "tashqi devor uchunmi?\" " +
      "deb so'radi, sotuvchi " +
      "\"ha\" dedi. Bo'yoq " +
      "yomg'irda ketib qoldi. " +
      "Aytilgan aniq maqsadga " +
      "yaroqsizlik — talab uchun " +
      "asos.",
    keyPoints: [
      "Sifat avvalo shartnoma bilan belgilanadi",
      "Shart yo'q bo'lsa — odatdagi maqsadga yaroqlilik",
      "Aytilgan aniq maqsad ham hisobga olinadi",
      "Namuna bo'yicha sotishda namunaga moslik talab qilinadi",
    ],
    warning:
      "Sotuvchining og'zaki " +
      "tasdig'ini yozishma yoki " +
      "guvoh bilan " +
      "mustahkamlang — aks holda " +
      "uni isbotlash qiyin.",
    lawRefs: [
      { code: "FK2", article: "402" },
      { code: "FK2", article: "429" },
    ],
  },

  /* ── 20 ────────────────────────────────────────────────────── */
  {
    heading: "Kafolat muddati",
    text:
      "Kafolat muddati — sotuvchi " +
      "(ishlab chiqaruvchi) tovar " +
      "sifatiga javob beradigan " +
      "davr.\n\n" +
      "Bu muddat shartnomada yoki " +
      "ishlab chiqaruvchi tomonidan " +
      "belgilanadi. Ishlab " +
      "chiqaruvchining kafillik " +
      "majburiyatlari alohida " +
      "moddada tartibga solingan.\n\n" +
      "Kafolat muddati odatda tovar " +
      "iste'molchiga TOPSHIRILGAN " +
      "kundan hisoblanadi. Aniq " +
      "hisoblash tartibi qonunda " +
      "belgilangan.\n\n" +
      "⚠️ ENG MUHIM AMALIY QOIDA: " +
      "kafolat muddati ichida " +
      "nuqson aniqlansa, ISBOT " +
      "YUKI odatda SOTUVCHIDA " +
      "bo'ladi — ya'ni u " +
      "nuqson xaridorning aybi " +
      "bilan yuzaga kelganini " +
      "isbotlashi kerak.\n\n" +
      "Muddat tugagach vaziyat " +
      "murakkablashadi, lekin " +
      "huquq butunlay " +
      "yo'qolmaydi — bu haqda " +
      "keyingi mavzularda.\n\n" +
      "Tovar ta'mirda turgan " +
      "davr uchun kafolat " +
      "muddati uzaytiriladi.",
    example:
      "Kafolat muddati ichida " +
      "texnika buzildi. Sotuvchi " +
      "\"siz noto'g'ri " +
      "ishlatgansiz\" deydi — " +
      "buni ISBOTLASH aynan " +
      "uning zimmasida.",
    keyPoints: [
      "Kafolat muddati shartnoma yoki ishlab chiqaruvchi tomonidan belgilanadi",
      "U odatda tovar topshirilgan kundan hisoblanadi",
      "Muddat ichida isbot yuki sotuvchida bo'ladi",
      "Ta'mir davri uchun muddat uzaytiriladi",
    ],
    warning:
      "Kafolat talonchasida sana, " +
      "muhr va tovar seriya " +
      "raqami bo'lishini " +
      "tekshiring — bularsiz " +
      "talon deyarli " +
      "foydasiz.",
    lawRefs: [
      { code: "FK2", article: "403" },
      { code: "FK2", article: "404" },
      { code: "IHQ", article: "11" },
    ],
  },

  /* ── 21 ────────────────────────────────────────────────────── */
  {
    heading: "Yaroqlilik muddati",
    text:
      "Kafolat muddatidan farq " +
      "qiladigan ikkinchi tushuncha " +
      "— YAROQLILIK muddati.\n\n" +
      "Yaroqlilik muddati — tovar " +
      "o'z maqsadi bo'yicha " +
      "ishlatilishi mumkin bo'lgan " +
      "davr. U ayrim tovarlar " +
      "uchun BELGILANISHI SHART " +
      "(oziq-ovqat, dori-darmon, " +
      "kosmetika va boshqalar).\n\n" +
      "Farqi nimada? Kafolat " +
      "muddati — sotuvchining " +
      "JAVOBGARLIK davri. " +
      "Yaroqlilik muddati — " +
      "tovarning ISHLATISH " +
      "davri.\n\n" +
      "⚠️ QAT'IY TAQIQ: yaroqlilik " +
      "muddati o'tgan tovarni " +
      "sotish taqiqlanadi. " +
      "Bunday tovar sotilgan " +
      "bo'lsa, bu bevosita " +
      "huquqbuzarlik va " +
      "iste'molchining talablari " +
      "shubhasiz asosli " +
      "bo'ladi.\n\n" +
      "Yaroqlilik muddatini " +
      "hisoblash tartibi ham " +
      "qonunda belgilangan — u " +
      "odatda ishlab chiqarilgan " +
      "sanadan yoki " +
      "belgilangan boshqa " +
      "paytdan boshlanadi.",
    example:
      "Do'konda yaroqlilik " +
      "muddati o'tgan " +
      "mahsulot sotilyapti. Bu " +
      "faqat qaytarish emas, " +
      "nazorat organiga " +
      "murojaat qilish uchun " +
      "ham asos.",
    keyPoints: [
      "Yaroqlilik muddati — tovarni ishlatish davri",
      "Kafolat muddati — sotuvchining javobgarlik davri",
      "Ayrim tovarlarda yaroqlilik muddati majburiy belgilanadi",
      "Muddati o'tgan tovarni sotish taqiqlanadi",
    ],
    warning:
      "Xarid paytida sanani " +
      "tekshiring. Muddati " +
      "o'tgan tovarni " +
      "sotganlik uchun " +
      "javobgarlik nazarda " +
      "tutilgan.",
    lawRefs: [
      { code: "FK2", article: "405" },
      { code: "FK2", article: "406" },
      { code: "IHQ", article: "6" },
    ],
  },

  /* ── 22 ────────────────────────────────────────────────────── */
  {
    heading: "Sotuvchi javobgar bo'ladigan kamchiliklar",
    text:
      "Har qanday nuqson uchun " +
      "sotuvchi javob berarmikan? " +
      "Yo'q — qonun aniq chegara " +
      "belgilaydi.\n\n" +
      "Sotuvchi tovar iste'molchiga " +
      "topshirilgunga QADAR yuzaga " +
      "kelgan yoki shu paytgacha " +
      "yuzaga kelgan sabablar " +
      "tufayli paydo bo'lgan " +
      "kamchiliklar uchun javob " +
      "beradi.\n\n" +
      "Ya'ni nuqson xaridorga " +
      "topshirilgandan keyin " +
      "uning O'Z aybi bilan " +
      "(noto'g'ri foydalanish, " +
      "saqlash, tashish yoki " +
      "uchinchi shaxslarning " +
      "harakati) yuzaga kelgan " +
      "bo'lsa — sotuvchi javob " +
      "bermaydi.\n\n" +
      "⚠️ ISBOT YUKI hal qiluvchi " +
      "ahamiyatga ega. Kafolat " +
      "muddati belgilangan " +
      "bo'lsa, sotuvchi " +
      "nuqsonning xaridor aybi " +
      "bilan yuzaga kelganini " +
      "isbotlashi kerak.\n\n" +
      "Nizoli holatlarda " +
      "EKSPERTIZA o'tkaziladi. " +
      "Uning natijasi " +
      "javobgarlikni " +
      "belgilaydi.",
    example:
      "Telefon kafolat muddati " +
      "ichida ishlamay qoldi. " +
      "Sotuvchi \"suv " +
      "tekkan\" deydi. Bu " +
      "da'voni ekspertiza bilan " +
      "isbotlash uning " +
      "zimmasida.",
    keyPoints: [
      "Sotuvchi topshirishgacha yuzaga kelgan kamchiliklar uchun javob beradi",
      "Xaridorning o'z aybi javobgarlikni istisno qiladi",
      "Kafolat muddatida isbot yuki sotuvchida",
      "Nizoda ekspertiza o'tkaziladi",
    ],
    warning:
      "Ekspertiza natijasiga " +
      "rozi bo'lmasangiz, " +
      "mustaqil ekspertiza " +
      "o'tkazish huquqingiz " +
      "bor.",
    lawRefs: [
      { code: "FK2", article: "409" },
      { code: "FK2", article: "408" },
      { code: "IHQ", article: "13" },
    ],
  },

  /* ── 23 ────────────────────────────────────────────────────── */
  {
    heading: "Nuqson qachon aniqlansa hisobga olinadi",
    text:
      "Vaqt omili — iste'molchi " +
      "nizolarida eng ko'p " +
      "yo'qotishga sabab " +
      "bo'ladigan masala.\n\n" +
      "Topshirilgan tovarning " +
      "kamchiliklarini aniqlash " +
      "muddatlari qonunda " +
      "belgilangan. Umumiy " +
      "mantiq shunday: xaridor " +
      "nuqsonni kafolat yoki " +
      "yaroqlilik muddati " +
      "ichida aniqlasa — talab " +
      "qo'yish huquqi aniq.\n\n" +
      "Bunday muddatlar " +
      "belgilanmagan bo'lsa, " +
      "qonun oqilona muddatni " +
      "nazarda tutadi.\n\n" +
      "⚠️ AMALIY QOIDA: nuqsonni " +
      "aniqlaganingiz zahoti " +
      "murojaat qiling va uni " +
      "YOZMA qayd eting. " +
      "\"Bir necha oy " +
      "ishlatdim, keyin " +
      "aytdim\" degan holat " +
      "sotuvchiga nuqson " +
      "keyinroq paydo bo'lgan " +
      "deb da'vo qilish " +
      "imkonini beradi.\n\n" +
      "Da'vo muddatlari ham " +
      "alohida tartibga " +
      "solingan — ular " +
      "o'tkazib yuborilsa " +
      "haqli talab ham " +
      "ko'rilmay qolishi " +
      "mumkin.",
    example:
      "Nuqson kafolat muddati " +
      "ichida paydo bo'ldi, " +
      "lekin xaridor uch oy " +
      "kutdi va muddat " +
      "tugagach murojaat " +
      "qildi. Endi nuqson " +
      "qachon paydo bo'lganini " +
      "isbotlash uning " +
      "zimmasiga o'tadi.",
    keyPoints: [
      "Kamchiliklarni aniqlash muddatlari qonunda belgilangan",
      "Kafolat muddati ichida talab qo'yish eng himoyalangan holat",
      "Nuqsonni aniqlagan zahoti yozma murojaat qiling",
      "Da'vo muddatlarini o'tkazib yubormang",
    ],
    warning:
      "Murojaat SANASI hal " +
      "qiluvchi. Yozma " +
      "arizangizda qabul " +
      "belgisi va sana " +
      "borligiga ishonch " +
      "hosil qiling.",
    lawRefs: [
      { code: "FK2", article: "410" },
      { code: "FK2", article: "1183" },
      { code: "IHQ", article: "13" },
    ],
  },

  /* ── 24 ────────────────────────────────────────────────────── */
  {
    heading: "Nuqsonli tovar sotilsa: qanday talablar qo'yish mumkin",
    text:
      "Bu — butun darslikning " +
      "eng amaliy mavzusi. " +
      "Nuqsonli tovar sotilganda " +
      "iste'molchi TANLOV " +
      "huquqiga ega.\n\n" +
      "Odatiy talablar to'plami:\n\n" +
      "(1) tovarni xuddi shunday " +
      "markadagi tovarga " +
      "ALMASHTIRIB berish;\n\n" +
      "(2) boshqa markadagi " +
      "tovarga narxni qayta " +
      "hisoblab almashtirish;\n\n" +
      "(3) nuqsonlarni BEPUL " +
      "bartaraf etish;\n\n" +
      "(4) xarid narxini " +
      "nuqsonga MUTANOSIB " +
      "kamaytirish;\n\n" +
      "(5) shartnomani BEKOR " +
      "qilib, to'langan pulni " +
      "qaytarib olish.\n\n" +
      "⚠️ ENG MUHIM NUQTA: " +
      "TANLOV ISTE'MOLCHIDA. " +
      "Sotuvchi \"biz faqat " +
      "ta'mirlaymiz\" deb " +
      "variantni o'zi " +
      "belgilay olmaydi.\n\n" +
      "Bundan tashqari " +
      "nuqsonli tovar tufayli " +
      "yetkazilgan zararni " +
      "qoplashni ham talab " +
      "qilish mumkin.",
    example:
      "Yangi texnika " +
      "ishlamadi. Sotuvchi " +
      "faqat ta'mirni taklif " +
      "qilyapti, xaridor esa " +
      "pulni qaytarishni " +
      "xohlaydi. Tanlov " +
      "xaridorda — sotuvchi " +
      "uni cheklay olmaydi.",
    keyPoints: [
      "Iste'molchi bir necha talabdan birini tanlaydi",
      "Almashtirish, ta'mirlash, narxni kamaytirish yoki qaytarish",
      "Tanlov huquqi sotuvchida emas, iste'molchida",
      "Zararni qoplash ham qo'shimcha talab qilinadi",
    ],
    warning:
      "Talabingizni ARIZADA " +
      "ANIQ yozing (masalan " +
      "\"pulni qaytarishni " +
      "so'rayman\"). Noaniq " +
      "ariza sotuvchiga " +
      "o'zi qulay variantni " +
      "tanlash imkonini " +
      "beradi.",
    lawRefs: [
      { code: "IHQ", article: "13" },
      { code: "FK2", article: "434" },
      { code: "FK2", article: "408" },
    ],
  },

  /* ── 25 ────────────────────────────────────────────────────── */
  {
    heading: "Nuqsonli tovarni almashtirib berish tartibi",
    text:
      "Almashtirish — eng ko'p " +
      "tanlanadigan talab. " +
      "Uning tartibi alohida " +
      "moddada belgilangan.\n\n" +
      "Sotuvchi tovarni " +
      "belgilangan muddat " +
      "ichida almashtirib " +
      "berishi kerak. Kerakli " +
      "tovar hozirda mavjud " +
      "bo'lmasa, qonun uzoqroq " +
      "muddat nazarda tutishi " +
      "mumkin.\n\n" +
      "Almashtirilgan tovar " +
      "uchun KAFOLAT MUDDATI " +
      "YANGIDAN hisoblanadi. " +
      "Bu muhim: yangi " +
      "tovarga eski tovarning " +
      "qolgan kafolati emas, " +
      "to'liq kafolat " +
      "beriladi.\n\n" +
      "⚠️ Almashtirish paytida " +
      "narxlar o'zgargan " +
      "bo'lsa nima bo'ladi? " +
      "Bu holat alohida " +
      "moddada tartibga " +
      "solingan — baholardagi " +
      "farqni to'lash " +
      "qoidalari mavjud.\n\n" +
      "Umumiy mantiq: " +
      "iste'molchi narx " +
      "o'zgarishidan zarar " +
      "ko'rmasligi kerak.\n\n" +
      "Tovarni tekshirish " +
      "yoki ekspertiza " +
      "kerak bo'lsa, bu " +
      "sotuvchi hisobidan " +
      "amalga oshiriladi.",
    example:
      "Xaridor nuqsonli " +
      "muzlatgichni " +
      "almashtirdi. Yangi " +
      "muzlatgichga to'liq " +
      "kafolat muddati " +
      "beriladi — eskisining " +
      "qolgan muddati emas.",
    keyPoints: [
      "Almashtirish belgilangan muddatda amalga oshiriladi",
      "Yangi tovarga kafolat muddati yangidan hisoblanadi",
      "Narx o'zgarishi alohida qoidalar bilan hal qilinadi",
      "Ekspertiza sotuvchi hisobidan o'tkaziladi",
    ],
    warning:
      "Almashtirishni " +
      "hujjatlashtiring: " +
      "qaysi tovar " +
      "qaytarildi, qaysi " +
      "berildi, qachon — " +
      "yangi kafolat aynan " +
      "shundan hisoblanadi.",
    lawRefs: [
      { code: "IHQ", article: "14" },
      { code: "FK2", article: "435" },
      { code: "IHQ", article: "17" },
    ],
  },

  /* ── 26 ────────────────────────────────────────────────────── */
  {
    heading: "Nuqsonni bepul bartaraf etish",
    text:
      "Ikkinchi variant — " +
      "tovarni ta'mirlash. Bu " +
      "iste'molchi uchun " +
      "BEPUL bo'lishi shart.\n\n" +
      "\"Bepul\" degani faqat " +
      "ehtiyot qism narxi " +
      "emas: ish haqi, " +
      "tashish va boshqa " +
      "bog'liq xarajatlar ham " +
      "sotuvchi (ishlab " +
      "chiqaruvchi) " +
      "zimmasida.\n\n" +
      "Nuqsonlarni bartaraf " +
      "etish belgilangan " +
      "muddat ichida amalga " +
      "oshirilishi kerak. " +
      "Muddat cho'zilib " +
      "ketsa, iste'molchi " +
      "BOSHQA talabga " +
      "o'tish huquqiga ega " +
      "bo'ladi.\n\n" +
      "⚠️ MUHIM: tovar " +
      "ta'mirda turgan davr " +
      "uchun kafolat muddati " +
      "UZAYTIRILADI. Ya'ni " +
      "ta'mirda o'tgan " +
      "kunlar sizning " +
      "kafolatingizni " +
      "yemaydi.\n\n" +
      "Yirik va og'ir " +
      "tovarlarni tashish " +
      "ham odatda sotuvchi " +
      "hisobidan amalga " +
      "oshiriladi — bu " +
      "ko'pincha " +
      "unutiladigan " +
      "huquq.",
    example:
      "Muzlatgich ta'mirga " +
      "olindi va ikki oy " +
      "turdi. Kafolat " +
      "muddati shu ikki " +
      "oyga uzaytirilishi " +
      "kerak.",
    keyPoints: [
      "Ta'mir iste'molchi uchun butunlay bepul",
      "Ish haqi va tashish ham sotuvchi zimmasida",
      "Muddat cho'zilsa boshqa talabga o'tish mumkin",
      "Ta'mir davri uchun kafolat uzaytiriladi",
    ],
    warning:
      "Tovarni ta'mirga " +
      "topshirganda hujjat " +
      "oling: qachon " +
      "topshirdingiz va " +
      "qanday nuqson qayd " +
      "etildi.",
    lawRefs: [
      { code: "IHQ", article: "15" },
      { code: "FK2", article: "404" },
      { code: "IHQ", article: "13" },
    ],
  },

  /* ── 27 ────────────────────────────────────────────────────── */
  {
    heading: "Narxni kamaytirish yoki shartnomani bekor qilish",
    text:
      "Uchinchi va to'rtinchi " +
      "variantlar — ko'pincha " +
      "eng qulay yechim.\n\n" +
      "NARXNI KAMAYTIRISH. Agar " +
      "nuqson jiddiy bo'lmasa " +
      "va tovardan " +
      "foydalanishni davom " +
      "ettirish mumkin bo'lsa, " +
      "xarid narxini nuqsonga " +
      "MUTANOSIB kamaytirishni " +
      "talab qilish mumkin. " +
      "Farq qaytariladi.\n\n" +
      "SHARTNOMANI BEKOR " +
      "QILISH. Iste'molchi " +
      "tovarni qaytarib, " +
      "to'langan pulni to'liq " +
      "olishi mumkin.\n\n" +
      "⚠️ Bekor qilishda " +
      "hisob-kitob qoidalari " +
      "muhim: tovar narxi " +
      "o'zgargan bo'lsa, " +
      "iste'molchiga zarar " +
      "yetmasligi kerak. Bu " +
      "alohida moddada " +
      "tartibga solingan.\n\n" +
      "Sotuvchi \"pulni " +
      "qaytarmaymiz, faqat " +
      "sertifikat beramiz\" " +
      "deb ayta olmaydi — " +
      "agar iste'molchi " +
      "pulni tanlagan " +
      "bo'lsa.\n\n" +
      "Har ikki holatda ham " +
      "zararni qoplash " +
      "talabi saqlanadi.",
    example:
      "Kiyimda kichik nuqson " +
      "topildi, lekin u " +
      "kiyishga xalaqit " +
      "bermaydi. Xaridor " +
      "narxni kamaytirishni " +
      "talab qilib, farqni " +
      "qaytarib olishi " +
      "mumkin.",
    keyPoints: [
      "Kichik nuqsonda narxni kamaytirish qulay yechim",
      "Shartnomani bekor qilib pulni to'liq olish mumkin",
      "Narx o'zgarganda iste'molchi zarar ko'rmasligi kerak",
      "Pul o'rniga sertifikatni majburlab bo'lmaydi",
    ],
    warning:
      "\"Faqat do'kon " +
      "sertifikati beramiz\" " +
      "degan taklifga rozi " +
      "bo'lish shart emas — " +
      "tanlov sizda.",
    lawRefs: [
      { code: "IHQ", article: "16" },
      { code: "IHQ", article: "17" },
      { code: "FK2", article: "435" },
    ],
  },

  /* ── 28 ────────────────────────────────────────────────────── */
  {
    heading: "Nuqsonli tovar tufayli yetkazilgan zarar",
    text:
      "Nuqsonli tovar faqat " +
      "o'zi buzilib qolmasligi " +
      "mumkin — u boshqa " +
      "zarar ham keltirishi " +
      "mumkin.\n\n" +
      "Qonun tovar (ish, " +
      "xizmat)ning nuqsonlari " +
      "tufayli yetkazilgan " +
      "zarar uchun MULKIY " +
      "JAVOBGARLIKNI nazarda " +
      "tutadi.\n\n" +
      "Zarar hayotga, " +
      "sog'liqqa yoki " +
      "mol-mulkka " +
      "yetkazilgan bo'lishi " +
      "mumkin va u TO'LIQ " +
      "hajmda qoplanishi " +
      "kerak.\n\n" +
      "⚠️ MUHIM: zararni " +
      "qoplash talabi " +
      "asosiy talablardan " +
      "(almashtirish, " +
      "ta'mirlash, qaytarish) " +
      "ALOHIDA va ularga " +
      "QO'SHIMCHA " +
      "hisoblanadi.\n\n" +
      "Ya'ni tovarni " +
      "qaytarib pul " +
      "olganingiz zararni " +
      "qoplash huquqini " +
      "yo'qotmaydi.\n\n" +
      "Fuqarolik kodeksi " +
      "zarar yetkazganlik " +
      "uchun javobgarlikning " +
      "umumiy asoslarini " +
      "belgilaydi — ular " +
      "bu yerda ham " +
      "qo'llaniladi.",
    example:
      "Nosoz kir yuvish " +
      "mashinasi suv " +
      "oqizib, uy " +
      "ta'mirini buzdi. " +
      "Xaridor mashina " +
      "narxidan tashqari " +
      "ta'mir zararini ham " +
      "talab qilishi " +
      "mumkin.",
    keyPoints: [
      "Nuqsonli tovar tufayli zarar to'liq qoplanadi",
      "Zarar hayot, sog'liq va mol-mulkka tegishli bo'lishi mumkin",
      "Bu talab asosiy talablarga qo'shimcha hisoblanadi",
      "Tovarni qaytarish zararni qoplash huquqini yo'qotmaydi",
    ],
    warning:
      "Zararni " +
      "HUJJATLASHTIRING: " +
      "suratga oling, " +
      "ekspertiza " +
      "o'tkazing, " +
      "ta'mir " +
      "xarajatlarini " +
      "cheklar bilan " +
      "tasdiqlang.",
    lawRefs: [
      { code: "IHQ", article: "20" },
      { code: "FK2", article: "985" },
      { code: "IHQ", article: "12" },
    ],
  },
];

module.exports = { SECTIONS };
