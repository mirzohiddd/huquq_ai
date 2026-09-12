"use strict";
/** ISTE'MOLCHI MODULI — 2-DARS: NUQSONLI TOVAR. IHQ 13–18 + FK2 408–410, 434–435. */

const LESSON = {
  key: "nuqsonli-tovar",
  category: "consumer",
  level: "basic",
  order: 8020,
  title: "Nuqsonli tovar: talablaringiz va tartib",
  desc:
    "Nuqsonli tovar sotilganda qanday talab qo'yish mumkin, " +
    "almashtirish, ta'mirlash, narxni kamaytirish va qaytarish " +
    "tartibi.",
  objectives: [
    "Nuqsonli tovar bo'yicha talablar ro'yxatini bilasiz",
    "Tanlov kimda ekanini bilasiz",
    "Almashtirish va ta'mirlash tartibini bilasiz",
    "Hisob-kitob va baholardagi farq qoidasini bilasiz",
  ],
  practicalSteps: [
    "Talabingizni arizada ANIQ va bitta qilib yozing",
    "Nuqsonni suratga va videoga olib qo'ying",
    "Tovarni ta'mirga topshirganda hujjat oling",
    "Almashtirilgan tovarga kafolat yangidan boshlanishini tekshiring",
  ],
  sections: [
    {
      heading: "Nuqsonli tovar sotilganda huquqlaringiz",
      text:
        "⚠️ Bu — butun darslikning eng " +
        "amaliy mavzusi.\n\n" +
        "Nuqsonli tovar sotilganda " +
        "iste'molchi TANLOV huquqiga " +
        "ega. Odatiy talablar " +
        "to'plami:\n\n" +
        "(1) tovarni xuddi shunday " +
        "markadagi tovarga " +
        "ALMASHTIRIB berish;\n\n" +
        "(2) boshqa markadagi tovarga " +
        "narxni qayta hisoblab " +
        "almashtirish;\n\n" +
        "(3) nuqsonlarni BEPUL bartaraf " +
        "etish;\n\n" +
        "(4) xarid narxini nuqsonga " +
        "MUTANOSIB kamaytirish;\n\n" +
        "(5) shartnomani BEKOR qilib " +
        "pulni qaytarib olish.\n\n" +
        "ENG MUHIM NUQTA: TANLOV " +
        "ISTE'MOLCHIDA. Sotuvchi " +
        "\"biz faqat ta'mirlaymiz\" " +
        "deb variantni o'zi belgilay " +
        "olmaydi.",
      example:
        "Yangi texnika ishlamadi. " +
        "Sotuvchi faqat ta'mirni " +
        "taklif qilyapti, xaridor esa " +
        "pulni qaytarishni xohlaydi. " +
        "Tanlov xaridorda.",
      keyPoints: [
        "Iste'molchi bir necha talabdan birini tanlaydi",
        "Almashtirish, ta'mirlash, narxni kamaytirish yoki qaytarish",
        "Tanlov huquqi iste'molchida",
        "Zararni qoplash ham qo'shimcha talab qilinadi",
      ],
      warning:
        "Talabingizni arizada ANIQ " +
        "yozing — noaniq ariza " +
        "sotuvchiga o'ziga qulay " +
        "variantni tanlash imkonini " +
        "beradi.",
      lawRefs: [
        { code: "IHQ", article: "13" },
        { code: "FK2", article: "434" },
      ],
    },
    {
      heading: "Sotuvchi javobgar bo'ladigan kamchiliklar",
      text:
        "Har qanday nuqson uchun sotuvchi " +
        "javob berarmikan? Qonun aniq " +
        "chegara belgilaydi.\n\n" +
        "Sotuvchi tovar iste'molchiga " +
        "TOPSHIRILGUNGA QADAR yuzaga " +
        "kelgan yoki shu paytgacha " +
        "yuzaga kelgan sabablar " +
        "tufayli paydo bo'lgan " +
        "kamchiliklar uchun javob " +
        "beradi.\n\n" +
        "Ya'ni nuqson topshirilgandan " +
        "keyin xaridorning O'Z aybi " +
        "bilan (noto'g'ri foydalanish, " +
        "saqlash, tashish) yuzaga " +
        "kelgan bo'lsa — sotuvchi " +
        "javob bermaydi.\n\n" +
        "⚠️ ISBOT YUKI hal qiluvchi: " +
        "kafolat muddati belgilangan " +
        "bo'lsa, sotuvchi nuqsonning " +
        "xaridor aybi bilan yuzaga " +
        "kelganini isbotlashi kerak.",
      example:
        "Telefon kafolat muddati ichida " +
        "ishlamay qoldi. Sotuvchi \"suv " +
        "tekkan\" deydi — bu da'voni " +
        "ekspertiza bilan isbotlash " +
        "uning zimmasida.",
      keyPoints: [
        "Sotuvchi topshirishgacha yuzaga kelgan kamchiliklar uchun javob beradi",
        "Xaridorning o'z aybi javobgarlikni istisno qiladi",
        "Kafolat muddatida isbot yuki sotuvchida",
        "Nizoda ekspertiza o'tkaziladi",
      ],
      warning:
        "Ekspertiza natijasiga rozi " +
        "bo'lmasangiz mustaqil " +
        "ekspertiza o'tkazish " +
        "huquqingiz bor.",
      lawRefs: [
        { code: "FK2", article: "409" },
        { code: "FK2", article: "408" },
      ],
    },
    {
      heading: "Nuqsonni aniqlash muddatlari",
      text:
        "Vaqt omili — iste'molchi " +
        "nizolarida eng ko'p " +
        "yo'qotishga sabab bo'ladigan " +
        "masala.\n\n" +
        "Topshirilgan tovarning " +
        "kamchiliklarini aniqlash " +
        "muddatlari qonunda " +
        "belgilangan.\n\n" +
        "Umumiy mantiq: xaridor nuqsonni " +
        "kafolat yoki yaroqlilik " +
        "muddati ichida aniqlasa — " +
        "talab qo'yish huquqi aniq. " +
        "Bunday muddatlar " +
        "belgilanmagan bo'lsa qonun " +
        "oqilona muddatni nazarda " +
        "tutadi.\n\n" +
        "⚠️ AMALIY QOIDA: nuqsonni " +
        "aniqlaganingiz zahoti " +
        "murojaat qiling va uni YOZMA " +
        "qayd eting. \"Bir necha oy " +
        "ishlatdim, keyin aytdim\" " +
        "degan holat sotuvchiga " +
        "nuqson keyinroq paydo " +
        "bo'lgan deb da'vo qilish " +
        "imkonini beradi.",
      example:
        "Nuqson kafolat muddati ichida " +
        "paydo bo'ldi, lekin xaridor " +
        "uch oy kutdi. Endi nuqson " +
        "qachon paydo bo'lganini " +
        "isbotlash uning zimmasiga " +
        "o'tadi.",
      keyPoints: [
        "Kamchiliklarni aniqlash muddatlari qonunda belgilangan",
        "Kafolat muddati ichida talab qo'yish eng himoyalangan holat",
        "Nuqsonni aniqlagan zahoti yozma murojaat qiling",
        "Murojaat sanasi hal qiluvchi ahamiyatga ega",
      ],
      warning:
        "Yozma arizangizda qabul " +
        "belgisi va sana borligiga " +
        "ishonch hosil qiling.",
      lawRefs: [{ code: "FK2", article: "410" }],
    },
    {
      heading: "Nuqsonli tovarni almashtirib berish tartibi",
      text:
        "Almashtirish — eng ko'p " +
        "tanlanadigan talab va uning " +
        "tartibi alohida moddada " +
        "belgilangan.\n\n" +
        "Sotuvchi tovarni belgilangan " +
        "muddat ichida almashtirib " +
        "berishi kerak. Kerakli tovar " +
        "hozirda mavjud bo'lmasa " +
        "qonun uzoqroq muddat nazarda " +
        "tutishi mumkin.\n\n" +
        "⚠️ MUHIM: almashtirilgan tovar " +
        "uchun KAFOLAT MUDDATI " +
        "YANGIDAN hisoblanadi.\n\n" +
        "Ya'ni yangi tovarga eski " +
        "tovarning qolgan kafolati " +
        "emas, TO'LIQ kafolat " +
        "beriladi.\n\n" +
        "Tovarni tekshirish yoki " +
        "ekspertiza kerak bo'lsa, bu " +
        "sotuvchi hisobidan amalga " +
        "oshiriladi.",
      example:
        "Xaridor nuqsonli muzlatgichni " +
        "almashtirdi. Yangi muzlatgichga " +
        "to'liq kafolat muddati " +
        "beriladi — eskisining qolgan " +
        "muddati emas.",
      keyPoints: [
        "Almashtirish belgilangan muddatda amalga oshiriladi",
        "Yangi tovarga kafolat yangidan hisoblanadi",
        "Kerakli tovar bo'lmasa muddat uzayishi mumkin",
        "Ekspertiza sotuvchi hisobidan o'tkaziladi",
      ],
      warning:
        "Almashtirishni " +
        "hujjatlashtiring: qaysi tovar " +
        "qaytarildi, qaysi berildi, " +
        "qachon — yangi kafolat " +
        "shundan hisoblanadi.",
      lawRefs: [{ code: "IHQ", article: "14" }],
    },
    {
      heading: "Nuqsonni bepul bartaraf etish",
      text:
        "Ikkinchi variant — tovarni " +
        "ta'mirlash. Bu iste'molchi " +
        "uchun BEPUL bo'lishi " +
        "shart.\n\n" +
        "\"Bepul\" degani faqat ehtiyot " +
        "qism narxi emas: ish haqi, " +
        "tashish va boshqa bog'liq " +
        "xarajatlar ham sotuvchi " +
        "(ishlab chiqaruvchi) " +
        "zimmasida.\n\n" +
        "Nuqsonlarni bartaraf etish " +
        "belgilangan muddat ichida " +
        "amalga oshirilishi kerak. " +
        "Muddat cho'zilib ketsa, " +
        "iste'molchi BOSHQA talabga " +
        "o'tish huquqiga ega " +
        "bo'ladi.\n\n" +
        "⚠️ MUHIM: tovar ta'mirda " +
        "turgan davr uchun kafolat " +
        "muddati UZAYTIRILADI — " +
        "ta'mirda o'tgan kunlar " +
        "kafolatingizni yemaydi.",
      example:
        "Muzlatgich ta'mirga olindi va " +
        "ikki oy turdi. Kafolat " +
        "muddati shu ikki oyga " +
        "uzaytirilishi kerak.",
      keyPoints: [
        "Ta'mir iste'molchi uchun butunlay bepul",
        "Ish haqi va tashish ham sotuvchi zimmasida",
        "Muddat cho'zilsa boshqa talabga o'tish mumkin",
        "Ta'mir davri uchun kafolat uzaytiriladi",
      ],
      warning:
        "Tovarni ta'mirga topshirganda " +
        "hujjat oling: qachon " +
        "topshirdingiz va qanday " +
        "nuqson qayd etildi.",
      lawRefs: [{ code: "IHQ", article: "15" }],
    },
    {
      heading: "Narxni kamaytirish yoki shartnomani bekor qilish",
      text:
        "Uchinchi va to'rtinchi " +
        "variantlar — ko'pincha eng " +
        "qulay yechim.\n\n" +
        "NARXNI KAMAYTIRISH: nuqson " +
        "jiddiy bo'lmasa va tovardan " +
        "foydalanishni davom ettirish " +
        "mumkin bo'lsa, xarid narxini " +
        "nuqsonga MUTANOSIB " +
        "kamaytirishni talab qilish " +
        "mumkin. Farq qaytariladi.\n\n" +
        "SHARTNOMANI BEKOR QILISH: " +
        "iste'molchi tovarni " +
        "qaytarib, to'langan pulni " +
        "to'liq olishi mumkin.\n\n" +
        "⚠️ Sotuvchi \"pulni " +
        "qaytarmaymiz, faqat " +
        "sertifikat beramiz\" deb " +
        "ayta olmaydi — agar " +
        "iste'molchi pulni tanlagan " +
        "bo'lsa.",
      example:
        "Kiyimda kichik nuqson topildi, " +
        "lekin u kiyishga xalaqit " +
        "bermaydi. Xaridor narxni " +
        "kamaytirishni talab qilib " +
        "farqni qaytarib olishi " +
        "mumkin.",
      keyPoints: [
        "Kichik nuqsonda narxni kamaytirish qulay yechim",
        "Shartnomani bekor qilib pulni to'liq olish mumkin",
        "Tanlov iste'molchida qoladi",
        "Pul o'rniga sertifikatni majburlab bo'lmaydi",
      ],
      warning:
        "\"Faqat do'kon sertifikati " +
        "beramiz\" degan taklifga " +
        "rozi bo'lish shart emas.",
      lawRefs: [{ code: "IHQ", article: "16" }],
    },
    {
      heading: "Hisob-kitob va baholardagi farq",
      text:
        "Nuqsonli tovar sotilgan taqdirda " +
        "iste'molchi bilan hisob-kitob " +
        "qilish alohida moddada " +
        "belgilangan.\n\n" +
        "⚠️ ASOSIY MASALA: narxlar " +
        "o'zgargan bo'lsa nima " +
        "bo'ladi?\n\n" +
        "Fuqarolik kodeksi tovarni " +
        "almashtirganda, xarid narxini " +
        "kamaytirganda va sifatsiz " +
        "tovarni qaytarganda " +
        "baholardagi farqni to'lash " +
        "qoidalarini belgilaydi.\n\n" +
        "Umumiy mantiq: iste'molchi narx " +
        "o'zgarishidan ZARAR " +
        "ko'rmasligi kerak.\n\n" +
        "Ya'ni tovar qimmatlashgan " +
        "bo'lsa, iste'molchi eski " +
        "narxda qolib ketmasligi " +
        "kerak.",
      example:
        "Xaridor bir yil oldin olgan " +
        "texnikani qaytardi, lekin uning " +
        "narxi oshgan edi. Baholardagi " +
        "farq qoidalari qo'llaniladi.",
      keyPoints: [
        "Hisob-kitob tartibi qonunda belgilangan",
        "Narx o'zgarishi alohida qoidalar bilan hal qilinadi",
        "Iste'molchi narx o'zgarishidan zarar ko'rmasligi kerak",
        "Bu almashtirish va qaytarishda ham qo'llaniladi",
      ],
      warning:
        "Xarid narxini tasdiqlovchi " +
        "hujjatni saqlang — " +
        "hisob-kitob shunga " +
        "asoslanadi.",
      lawRefs: [
        { code: "IHQ", article: "17" },
        { code: "FK2", article: "435" },
      ],
    },
    {
      heading: "Maqbul sifatli tovarni almashtirish",
      text:
        "Tovar mutlaqo soz, lekin " +
        "yaramadi — rangi, o'lchami " +
        "yoki fasoni mos kelmadi. " +
        "Bunday holatda ham huquq " +
        "bor.\n\n" +
        "Qonun MAQBUL SIFATLI tovarni " +
        "almashtirib olish huquqini " +
        "beradi — ya'ni tovarda hech " +
        "qanday nuqson bo'lmasa " +
        "ham.\n\n" +
        "⚠️ Bu huquq SHARTLAR bilan " +
        "beriladi: belgilangan muddat " +
        "ichida murojaat qilish; tovar " +
        "ISHLATILMAGAN bo'lishi; " +
        "ko'rinishi, iste'mol " +
        "xususiyatlari, plombalari va " +
        "yorliqlari saqlangan " +
        "bo'lishi; xaridni " +
        "tasdiqlovchi hujjat " +
        "bo'lishi.\n\n" +
        "Mos tovar bo'lmasa iste'molchi " +
        "shartnomani bekor qilib pulni " +
        "qaytarib olishi mumkin.",
      example:
        "Xaridor kiyim oldi, uyda " +
        "o'lchami mos kelmadi. " +
        "Yorliqlari joyida va chek bor " +
        "bo'lsa, muddat ichida " +
        "almashtirish talab qilinishi " +
        "mumkin.",
      keyPoints: [
        "Nuqsonsiz tovarni ham almashtirish mumkin",
        "Tovar ishlatilmagan va yorliqlari saqlangan bo'lishi kerak",
        "Mos tovar bo'lmasa pul qaytariladi",
        "Almashtirilmaydigan tovarlar ro'yxati mavjud",
      ],
      warning:
        "Yorliq va plombalarni " +
        "yechmang — aynan ular " +
        "almashtirish huquqining " +
        "sharti.",
      lawRefs: [
        { code: "IHQ", article: "18" },
        { code: "FK2", article: "433" },
      ],
    },
  ],
};

module.exports = { LESSON };
