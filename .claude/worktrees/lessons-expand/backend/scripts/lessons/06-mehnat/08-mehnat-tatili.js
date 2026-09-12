"use strict";
/** MEHNAT MODULI — 8-DARS: MEHNAT TA'TILI. MK 213–235.
 *  Ijtimoiy ta'tillar (236–242) 9-darsda. */

const LESSON = {
  key: "mehnat-tatili",
  category: "labor",
  level: "basic",
  order: 6080,
  title: "Mehnat ta'tili: turlari va berish tartibi",
  desc:
    "Ta'til turlari, davomiyligi, berish navbati, uni bo'lish, " +
    "ko'chirish, chaqirib olish va pul bilan almashtirish qoidalari.",
  objectives: [
    "Ta'til turlarini va ularning farqini bilasiz",
    "Ta'til davomiyligi qanday hisoblanishini tushunasiz",
    "Ta'tilni bo'lish, ko'chirish va chaqirib olish qoidalarini bilasiz",
    "Ta'til puli qachon to'lanishini bilasiz",
  ],
  practicalSteps: [
    "Ta'til navbati jadvalini oldindan ko'ring",
    "Ta'til puli ta'til boshlanishidan OLDIN to'langanini tekshiring",
    "Ta'tilda kasal bo'lsangiz varaqani saqlang — ta'til uzaytiriladi",
    "Chaqirib olishga rozilikni YOZMA bering",
  ],
  sections: [
    {
      heading: "Ta'tillarning turlari",
      text:
        "Ta'til — dam olish vaqtining eng " +
        "muhim shakli va u KAFOLATLANGAN " +
        "huquq.\n\n" +
        "Ta'tillar ikki katta guruhga " +
        "bo'linadi:\n\n" +
        "MEHNAT ta'tillari — har yilgi asosiy " +
        "eng kam ta'til; har yilgi asosiy " +
        "uzaytirilgan ta'til; har yilgi " +
        "qo'shimcha ta'tillar.\n\n" +
        "IJTIMOIY ta'tillar — homiladorlik va " +
        "tug'ruq, bolani parvarish qilish, " +
        "o'qish bilan bog'liq va boshqalar " +
        "(alohida darsda).\n\n" +
        "Bu farq muhim: ular turlicha " +
        "beriladi va turlicha to'lanadi.",
      example:
        "Xodim \"ta'tilim bor\" deb o'yladi, " +
        "lekin bu ish haqi saqlanmaydigan " +
        "ijtimoiy ta'til edi. Tur " +
        "to'lovga bevosita ta'sir qiladi.",
      keyPoints: [
        "Ta'tillar mehnat va ijtimoiy turlarga bo'linadi",
        "Mehnat ta'tili asosiy va qo'shimcha bo'ladi",
        "Uzaytirilgan ta'til ayrim toifalarga beriladi",
        "Tur to'lov tartibiga ta'sir qiladi",
      ],
      warning:
        "Ariza yozayotganda qaysi ta'tilni " +
        "so'rayotganingizni aniq ko'rsating.",
      lawRefs: [
        { code: "MK", article: "213" },
        { code: "MK", article: "216" },
      ],
    },
    {
      heading: "Ta'til olish huquqi va ish o'rni kafolati",
      text:
        "Xodimning ta'til olish huquqi " +
        "KAFOLATLANADI — bu alohida moddada " +
        "belgilangan.\n\n" +
        "⚠️ ENG MUHIM KAFOLAT: ta'tilda " +
        "bo'lgan davrda xodimning ISH O'RNI " +
        "(lavozimi) SAQLANADI.\n\n" +
        "Bundan kelib chiqadi: ta'til davrida " +
        "ish beruvchi tashabbusi bilan " +
        "bo'shatish taqiqlanadi; ta'tildan " +
        "qaytgan xodim o'z lavozimiga " +
        "qaytadi.\n\n" +
        "Ta'til huquqini cheklaydigan har " +
        "qanday hujjat qoidasi HAQIQIY " +
        "EMAS.",
      example:
        "Xodim ta'tilda ekanida bo'shatish " +
        "buyrug'i chiqarildi. Bu qonunga " +
        "zid — ta'til davrida ish o'rni " +
        "saqlanadi.",
      keyPoints: [
        "Ta'til olish huquqi kafolatlanadi",
        "Ta'til davrida ish o'rni saqlanadi",
        "Bu davrda bo'shatish taqiqlanadi",
        "Huquqni cheklovchi qoidalar haqiqiy emas",
      ],
      warning:
        "\"Ta'tilga chiqsangiz o'rningizga " +
        "boshqa odam olamiz\" — huquqiy " +
        "asosga ega bo'lmagan tahdid.",
      lawRefs: [
        { code: "MK", article: "214" },
        { code: "MK", article: "215" },
        { code: "MK", article: "203" },
      ],
    },
    {
      heading: "Har yilgi asosiy ta'til davomiyligi",
      text:
        "Har yilgi asosiy mehnat ta'tilining " +
        "ENG KAM davomiyligi qonunda " +
        "belgilangan.\n\n" +
        "Ish beruvchi undan KAM bera olmaydi, " +
        "KO'P berishi esa mumkin — bu " +
        "shartnoma yoki jamoa shartnomasi " +
        "bilan belgilanadi.\n\n" +
        "Ayrim toifadagi xodimlarga " +
        "UZAYTIRILGAN ta'til beriladi — " +
        "masalan yoshi, mehnat sharoiti yoki " +
        "ish xarakteriga qarab.\n\n" +
        "Aniq davomiylik quyidagi qonun " +
        "matnida.",
      example:
        "Ish beruvchi \"bizda ta'til 10 kun\" " +
        "dedi. Qonundagi eng kam miqdordan " +
        "kam bo'lsa bu talab qonunga zid.",
      keyPoints: [
        "Eng kam davomiylik qonunda belgilangan",
        "Undan kam berish mumkin emas",
        "Ko'p berish ruxsat etiladi",
        "Ayrim toifalarga uzaytirilgan ta'til beriladi",
      ],
      warning:
        "Shartnomada ta'til davomiyligi " +
        "qonundagidan kam ko'rsatilgan " +
        "bo'lsa u shart haqiqiy emas.",
      lawRefs: [
        { code: "MK", article: "217" },
        { code: "MK", article: "218" },
      ],
    },
    {
      heading: "Qo'shimcha ta'tillar",
      text:
        "Asosiy ta'tildan tashqari QO'SHIMCHA " +
        "ta'tillar ham beriladi.\n\n" +
        "Odatiy asoslar: zararli yoki xavfli " +
        "mehnat sharoitlari; ish " +
        "xarakterining o'ziga xosligi; bitta " +
        "tashkilotda yoki tarmoqda ko'p " +
        "yillik ish staji; qonunda " +
        "ko'rsatilgan boshqa asoslar.\n\n" +
        "⚠️ Qo'shimcha ta'til asosiyga " +
        "QO'SHILADI — uni almashtirmaydi.\n\n" +
        "Jamlash tartibi alohida moddada " +
        "belgilangan.",
      example:
        "Xodim zararli sharoitda ishlaydi va " +
        "20 yillik staji bor. Ikkala asos " +
        "bo'yicha qo'shimcha ta'til asosiy " +
        "ta'tilga qo'shiladi.",
      keyPoints: [
        "Qo'shimcha ta'til bir necha asos bo'yicha beriladi",
        "Zararli sharoit va uzoq staj asosiy asoslar",
        "U asosiy ta'tilga qo'shiladi",
        "Jamlash tartibi qonunda belgilangan",
      ],
      warning:
        "Qo'shimcha ta'tilga huquqingiz " +
        "borligini kadrlar bo'limidan " +
        "yozma so'rab bilib oling.",
      lawRefs: [
        { code: "MK", article: "219" },
        { code: "MK", article: "220" },
        { code: "MK", article: "222" },
      ],
    },
    {
      heading: "Ta'til davomiyligini hisoblab chiqarish",
      text:
        "Ta'til davomiyligini hisoblash " +
        "tartibi qonunda belgilangan.\n\n" +
        "Ayrim hollarda ta'til ISHLAB " +
        "BERILGAN VAQTGA MUTANOSIB " +
        "hisoblanadi — ya'ni to'liq yil " +
        "ishlanmagan bo'lsa ta'til ham " +
        "mutanosib beriladi.\n\n" +
        "Bunday hollar va hisoblash tartibi " +
        "alohida moddalarda ko'rsatilgan.\n\n" +
        "⚠️ Ta'til huquqini beradigan ish " +
        "STAJI ham alohida hisoblanadi: " +
        "unga qaysi davrlar kiradi va " +
        "qaysilari kirmasligi qonunda " +
        "belgilangan.",
      example:
        "Xodim yil o'rtasida ishga kirdi va " +
        "ta'tilga chiqmoqchi. Ta'til " +
        "ishlagan vaqtiga mutanosib " +
        "hisoblanadi.",
      keyPoints: [
        "Hisoblash tartibi qonunda belgilangan",
        "Ayrim hollarda ta'til mutanosib hisoblanadi",
        "Ta'til huquqini beradigan staj alohida hisoblanadi",
        "Qaysi davrlar stajga kirishi belgilangan",
      ],
      warning:
        "Ta'til kunlari hisobini kadrlar " +
        "bo'limidan yozma ma'lumotnoma " +
        "bilan oling.",
      lawRefs: [
        { code: "MK", article: "221" },
        { code: "MK", article: "223" },
        { code: "MK", article: "224" },
        { code: "MK", article: "226" },
      ],
    },
    {
      heading: "Birinchi ish yili uchun ta'til",
      text:
        "BIRINCHI ish yili uchun ta'til olish " +
        "alohida tartibga ega.\n\n" +
        "U odatda belgilangan vaqt ishlagandan " +
        "keyin beriladi — ya'ni ishga " +
        "kirgan zahoti ta'tilga chiqib " +
        "bo'lmaydi.\n\n" +
        "⚠️ Lekin qonunda ISTISNO toifalar " +
        "bor: ayrim xodimlarga ta'til " +
        "belgilangan vaqt kutmasdan ham " +
        "berilishi mumkin.\n\n" +
        "IKKINCHI va keyingi ish yillari " +
        "uchun ta'til navbat jadvaliga " +
        "muvofiq istalgan paytda berilishi " +
        "mumkin.",
      example:
        "Xodim ishga kirgach uch oydan keyin " +
        "ta'til so'radi. Birinchi ish yilida " +
        "belgilangan shart bajarilganini " +
        "tekshirish kerak.",
      keyPoints: [
        "Birinchi ish yilida alohida tartib amal qiladi",
        "Ta'til belgilangan vaqt ishlagandan keyin beriladi",
        "Ayrim toifalar uchun istisno bor",
        "Ikkinchi yildan navbat jadvali bo'yicha beriladi",
      ],
      warning:
        "Istisno toifaga kirasizmi — buni " +
        "oldindan aniqlang, bu ta'til " +
        "vaqtiga ta'sir qiladi.",
      lawRefs: [
        { code: "MK", article: "227" },
        { code: "MK", article: "228" },
      ],
    },
    {
      heading: "Ta'tilni uzaytirish va boshqa muddatga ko'chirish",
      text:
        "Ta'til davrida kutilmagan holat yuz " +
        "bersa nima bo'ladi?\n\n" +
        "Qonun ta'tilni UZAYTIRISH yoki boshqa " +
        "muddatga KO'CHIRISH imkoniyatini " +
        "beradi.\n\n" +
        "Odatiy asoslar: xodimning vaqtincha " +
        "mehnatga qobiliyatsizligi " +
        "(kasallik); davlat yoki jamoat " +
        "majburiyatlarini bajarish; qonunda " +
        "nazarda tutilgan boshqa holatlar.\n\n" +
        "⚠️ Ya'ni ta'tilda kasal bo'lsangiz " +
        "kunlar YO'QOLMAYDI — ular " +
        "uzaytiriladi yoki ko'chiriladi.",
      example:
        "Xodim ta'tilda kasal bo'ldi va " +
        "kasallik varaqasi oldi. Ta'til shu " +
        "kunlarga uzaytirilishi yoki boshqa " +
        "muddatga ko'chirilishi kerak.",
      keyPoints: [
        "Ta'til uzaytirilishi yoki ko'chirilishi mumkin",
        "Kasallik asosiy asoslardan biri",
        "Ta'til kunlari yo'qolmaydi",
        "Asoslar qonunda belgilangan",
      ],
      warning:
        "Ta'tilda kasal bo'lsangiz kasallik " +
        "varaqasini olib, ish beruvchiga " +
        "rasmiy taqdim eting.",
      lawRefs: [{ code: "MK", article: "229" }],
    },
    {
      heading: "Ta'tilni keyingi yilga ko'chirish va qismlarga bo'lish",
      text:
        "Ta'tilning bir qismini KEYINGI ish " +
        "yiliga ko'chirish mumkin — lekin " +
        "belgilangan tartibda va " +
        "cheklovlar bilan.\n\n" +
        "Ta'tilni QISMLARGA BO'LISH ham " +
        "mumkin. Bunda muhim shart bor: " +
        "qismlardan biri qonunda " +
        "belgilangan eng kam davomiylikdan " +
        "KAM bo'lmasligi kerak.\n\n" +
        "⚠️ Bo'lish tomonlarning KELISHUVI " +
        "bilan amalga oshiriladi — ish " +
        "beruvchi uni bir tomonlama " +
        "belgilay olmaydi.\n\n" +
        "Ta'tilni yillar davomida " +
        "to'plab borish esa cheklangan.",
      example:
        "Ish beruvchi ta'tilni bir tomonlama " +
        "5 kunlik bo'laklarga bo'ldi. " +
        "Bo'lish kelishuv bilan bo'ladi va " +
        "bir qism eng kam miqdordan kam " +
        "bo'lmasligi kerak.",
      keyPoints: [
        "Ta'tilning bir qismini keyingi yilga ko'chirish mumkin",
        "Qismlarga bo'lish kelishuv bilan amalga oshiriladi",
        "Bir qism eng kam miqdordan kam bo'lmaydi",
        "Yillar davomida to'plash cheklangan",
      ],
      warning:
        "Ta'tilni to'plab borish o'rniga " +
        "uni har yili oling — aks holda " +
        "huquqingiz cheklanishi mumkin.",
      lawRefs: [
        { code: "MK", article: "230" },
        { code: "MK", article: "231" },
      ],
    },
    {
      heading: "Ta'tildan chaqirib olish",
      text:
        "Ish beruvchi xodimni ta'tildan " +
        "chaqirib olishi mumkinmi?\n\n" +
        "⚠️ Faqat xodimning ROZILIGI bilan. " +
        "Rozilik bo'lmasa chaqirib olish " +
        "qonunga zid.\n\n" +
        "Chaqirib olinganda foydalanilmagan " +
        "qism yo'qolmaydi: u keyinroq " +
        "beriladi yoki xodimning " +
        "xohishiga ko'ra boshqa muddatga " +
        "ko'chiriladi.\n\n" +
        "Rozilikni YOZMA berish muhim — " +
        "og'zaki rozilik keyinchalik inkor " +
        "qilinishi mumkin.",
      example:
        "Xodim ta'tilda edi, ish beruvchi " +
        "qo'ng'iroq qilib chaqirdi. U rozi " +
        "bo'lmasa chiqmaslikka haqli.",
      keyPoints: [
        "Chaqirib olish faqat xodim roziligi bilan",
        "Rozilik bo'lmasa bu qonunga zid",
        "Foydalanilmagan qism yo'qolmaydi",
        "Rozilikni yozma berish kerak",
      ],
      warning:
        "Chaqirib olinganda qolgan kunlar " +
        "qachon berilishini YOZMA " +
        "kelishing.",
      lawRefs: [{ code: "MK", article: "232" }],
    },
    {
      heading: "Ta'til puli",
      text:
        "Xodimga har yilgi mehnat ta'tilida " +
        "bo'lgan vaqti uchun O'RTACHA ish " +
        "haqi to'lanadi.\n\n" +
        "⚠️ ENG MUHIM QOIDA: ta'til puli " +
        "ta'til BOSHLANISHIDAN OLDIN " +
        "to'lanadi.\n\n" +
        "Ta'tildan keyin to'lash qonunga " +
        "zid — chunki ta'tilning maqsadi " +
        "dam olish, buning uchun esa " +
        "mablag' oldindan kerak.\n\n" +
        "Ta'til puli O'RTACHA ish haqidan " +
        "hisoblangani uchun norasmiy " +
        "to'lovlar uni bevosita " +
        "kamaytiradi.",
      example:
        "Ish beruvchi ta'til pulini ta'til " +
        "tugagach to'ladi. Bu qonunga zid " +
        "— u oldindan berilishi kerak edi.",
      keyPoints: [
        "Ta'til davri uchun o'rtacha ish haqi to'lanadi",
        "Ta'til puli ta'til boshlanishidan oldin beriladi",
        "Keyin to'lash qonunga zid",
        "Norasmiy ish haqi ta'til pulini kamaytiradi",
      ],
      warning:
        "Ta'til puli berilmasa ta'tilga " +
        "chiqishni kechiktirishni yozma " +
        "so'rashingiz mumkin.",
      lawRefs: [{ code: "MK", article: "233" }],
    },
    {
      heading: "Ta'tilni pul bilan almashtirish",
      text:
        "Ta'tilni pulli kompensatsiya bilan " +
        "almashtirish mumkinmi?\n\n" +
        "⚠️ Faqat CHEKLANGAN doirada. Qonun " +
        "ta'tilning ma'lum qismini " +
        "kompensatsiya bilan almashtirishga " +
        "ruxsat berishi mumkin, lekin " +
        "ta'tilni BUTUNLAY pulga " +
        "aylantirib bo'lmaydi.\n\n" +
        "Sabab aniq: ta'tilning maqsadi " +
        "dam olish va sog'liqni " +
        "tiklash — pul buni " +
        "almashtirmaydi.\n\n" +
        "Shartnoma bekor qilinganda esa " +
        "foydalanilmagan ta'til uchun " +
        "kompensatsiya to'lanadi — bu " +
        "alohida holat.",
      example:
        "Xodim \"ta'tilga chiqmayman, pulini " +
        "bering\" dedi. Bu faqat qonunda " +
        "ruxsat etilgan qism doirasida " +
        "mumkin.",
      keyPoints: [
        "Ta'tilni to'liq pulga almashtirib bo'lmaydi",
        "Faqat ma'lum qism kompensatsiya bilan almashtiriladi",
        "Sabab — ta'tilning maqsadi dam olish",
        "Bo'shashda foydalanilmagan ta'til kompensatsiya qilinadi",
      ],
      warning:
        "Bo'shayotganda foydalanilmagan " +
        "ta'til kompensatsiyasini talab " +
        "qiling — u ko'pincha unutiladi.",
      lawRefs: [
        { code: "MK", article: "234" },
        { code: "MK", article: "235" },
      ],
    },
  ],
};

module.exports = { LESSON };
