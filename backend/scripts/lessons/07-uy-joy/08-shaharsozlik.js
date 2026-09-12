"use strict";
/** UY-JOY MODULI — 8-DARS: SHAHARSOZLIK VA QURILISH. SHK. */

const LESSON = {
  key: "shaharsozlik",
  category: "housing",
  level: "mid",
  order: 7080,
  title: "Shaharsozlik va qurilish qoidalari",
  desc:
    "Shaharsozlik faoliyatining prinsiplari, fuqarolarning qulay " +
    "muhitga huquqi, ruxsatnomalar, qurilish nazorati, obyektni " +
    "qabul qilish, hududiy zonalar va jamoatchilik nazorati.",
  objectives: [
    "Shaharsozlik faoliyatining prinsiplarini bilasiz",
    "Qulay hayot faoliyati muhitiga huquqingizni bilasiz",
    "Qurilish uchun qanday hujjatlar kerakligini bilasiz",
    "Qurilish nazorati turlarini bilasiz",
    "Obyektni qabul qilish tartibini bilasiz",
    "Bosh reja muhokamasida ishtirok etish huquqini bilasiz",
  ],
  practicalSteps: [
    "Qurilish boshlashdan oldin ruxsatnoma va loyihani rasmiylashtiring",
    "Hududiy zona va qurish qoidalarini oldindan aniqlang",
    "Bosh reja muhokamasi e'lonlarini kuzatib boring",
    "Qonunbuzar qurilish haqida nazorat inspeksiyasiga yozma xabar bering",
    "Obyektni qabul qilish dalolatnomasini saqlang",
  ],
  sections: [
    {
      heading: "Shaharsozlik faoliyati va uning prinsiplari",
      text:
        "SHAHARSOZLIK FAOLIYATI — hududlarni " +
        "rejalashtirish, aholi punktlarini qurish va " +
        "rivojlantirish bo'yicha faoliyat.\n\n" +
        "ASOSIY PRINSIPLARI: aholi uchun qulay hayot " +
        "faoliyati muhitini yaratish; hududlarning " +
        "barqaror rivojlanishi; tarixiy-madaniy " +
        "merosni saqlash; ekologik xavfsizlik; " +
        "jamoatchilik manfaatlarini hisobga olish.\n\n" +
        "⚠️ FUQARONING QULAY HAYOT FAOLIYATI MUHITIGA " +
        "BO'LGAN HUQUQI — bu darsdagi eng muhim " +
        "qoida va u ko'pchilikka noma'lum.\n\n" +
        "Bu huquq shuni bildiradi: yashash joyingiz " +
        "atrofidagi qurilish va faoliyat sizning " +
        "yashash sharoitingizni yomonlashtirmasligi " +
        "kerak.\n\n" +
        "Amalda bundan kelib chiqadi: qurilish " +
        "yorug'likni to'sib qo'ymasligi; sanitariya " +
        "normalari buzilmasligi; ijtimoiy " +
        "infratuzilma (maktab, bog'cha) hisobga " +
        "olinishi; yashil hududlar saqlanishi.\n\n" +
        "MAJBURIYATLAR: yuridik va jismoniy shaxslar " +
        "shaharsozlik faoliyatini amalga oshirishda " +
        "belgilangan majburiyatlarni bajaradi.\n\n" +
        "TALABLAR: shaharsozlik faoliyatiga doir " +
        "asosiy talablar va shaharsozlik normalari " +
        "hamda qoidalari belgilangan.\n\n" +
        "AMALIY XULOSA: yoningizdagi qurilish " +
        "huquqingizni buzayotgan bo'lsa, bu " +
        "shunchaki noqulaylik emas — bu huquqiy " +
        "asosga ega shikoyat mavzusi.",
      example:
        "Yangi bino yorug'likni butunlay to'sib " +
        "qo'ydi — bu qulay muhit huquqini buzish " +
        "sifatida baholanishi mumkin.",
      keyPoints: [
        "Shaharsozlik hududlarni rejalashtirish faoliyati",
        "Fuqaroning qulay muhitga huquqi kafolatlangan",
        "Qurilish yashash sharoitini yomonlashtirmasligi kerak",
        "Faoliyat belgilangan norma va qoidalarga bo'ysunadi",
      ],
      warning:
        "Qo'shni qurilishga e'tiroz bildirish uchun " +
        "muddatlar qisqa — kechiktirmang.",
      lawRefs: [
        { code: "SHK", article: "1" },
        { code: "SHK", article: "4" },
        { code: "SHK", article: "6" },
        { code: "SHK", article: "8" },
        { code: "SHK", article: "9" },
        { code: "SHK", article: "10" },
        { code: "SHK", article: "11" },
      ],
    },
    {
      heading: "Shaharsozlik faoliyati subyektlari",
      text:
        "SHAHARSOZLIK FAOLIYATI SUBYEKTLARI — bu " +
        "jarayonda ishtirok etadigan shaxslar " +
        "doirasi.\n\n" +
        "BUYURTMACHI — qurilishni tashkil etuvchi va " +
        "moliyalashtiruvchi shaxs.\n\n" +
        "SHAHARSOZLIK HUJJATLARINI ISHLAB " +
        "CHIQUVCHILAR — loyihachilar va loyiha " +
        "tashkilotlari.\n\n" +
        "PUDRATCHILAR — obyektlarni qurish bo'yicha " +
        "ishlarni bajaruvchi tashkilotlar.\n\n" +
        "⚠️ AMALIY XULOSA: qurilishda muammo " +
        "yuzaga kelganda KIMGA da'vo qo'yishni " +
        "aniqlash uchun bu rollarni bilish " +
        "kerak.\n\n" +
        "Masalan loyihadagi xato uchun " +
        "loyihachi, ish sifati uchun pudratchi, " +
        "umumiy tashkillashtirish uchun " +
        "buyurtmachi javob beradi.\n\n" +
        "SHAHARSOZLIK FAOLIYATI OBYEKTLARI: " +
        "hududlar, aholi punktlari, ularning " +
        "qismlari, binolar va inshootlar.\n\n" +
        "DAVLAT BOSHQARUVI: shaharsozlik " +
        "faoliyati sohasida davlat boshqaruvi " +
        "amalga oshiriladi. Unda hukumat, " +
        "maxsus vakolatli davlat organi va " +
        "mahalliy ijro etuvchi hokimiyat " +
        "organlari ishtirok etadi.\n\n" +
        "EKSPERTIZA: shaharsozlik hujjatlari " +
        "ekspertizadan o'tkaziladi. Ekspert " +
        "tashkilotlarining vakolatlari va " +
        "ekspertlarning huquq hamda " +
        "majburiyatlari belgilangan.\n\n" +
        "AMALIY MASLAHAT: qurilish shartnomasi " +
        "tuzayotganda har bir tomonning " +
        "roli va javobgarligini aniq yozing.",
      example:
        "Qurilishda nuqson yuzaga keldi — u " +
        "loyihaga yoki ishga tegishli ekanini " +
        "aniqlash kerak bo'ldi.",
      keyPoints: [
        "Buyurtmachi, loyihachi va pudratchi rollari ajratilgan",
        "Javobgarlik rolga qarab belgilanadi",
        "Davlat boshqaruvi bir necha darajada amalga oshiriladi",
        "Hujjatlar ekspertizadan o'tkaziladi",
      ],
      warning:
        "Rollar aniq yozilmasa javobgarni " +
        "aniqlash qiyinlashadi.",
      lawRefs: [
        { code: "SHK", article: "13" },
        { code: "SHK", article: "14" },
        { code: "SHK", article: "15" },
        { code: "SHK", article: "16" },
        { code: "SHK", article: "17" },
        { code: "SHK", article: "18" },
        { code: "SHK", article: "23" },
        { code: "SHK", article: "24" },
      ],
    },
    {
      heading: "Qurilish uchun ruxsatnoma va hujjatlar",
      text:
        "OBYEKTLARNI QURISH uchun MAXSUS RUXSATNOMALAR " +
        "olinadi.\n\n" +
        "⚠️ RUXSATNOMASIZ QURILISH — eng keng " +
        "tarqalgan va eng og'ir oqibatli " +
        "qonunbuzarlik.\n\n" +
        "Oqibatlari: obyekt o'zboshimchalik bilan " +
        "qurilgan deb topiladi; unga mulk huquqi " +
        "yuzaga kelmaydi; uni sotib, garovga " +
        "qo'yib va meros qoldirib bo'lmaydi; u " +
        "buzib tashlanishi mumkin.\n\n" +
        "SHAHARSOZLIK HUJJATLARI tarkibi qonunda " +
        "belgilangan. Ular ishlab chiqiladi, " +
        "kelishib olinadi va tasdiqlanadi.\n\n" +
        "LOYIHAOLDI va LOYIHA HUJJATLARI — " +
        "qurilishning asosi bo'ladi.\n\n" +
        "QURISH QOIDALARI va HUDUDLARNING " +
        "ZONALASHTIRILISHI — uchastkada aynan " +
        "nima qurish mumkinligini belgilaydi.\n\n" +
        "YER UCHASTKALARIGA DOIR TALABLAR: aholi " +
        "punktlarida yer uchastkalaridan " +
        "foydalanishga doir shaharsozlik " +
        "talablari belgilangan.\n\n" +
        "REKONSTRUKSIYA: obyektlarni " +
        "rekonstruksiya qilish jarayonida yer " +
        "uchastkalariga, bino va inshootlarga " +
        "qo'yiladigan talablar mavjud.\n\n" +
        "AMALIY KETMA-KETLIK: (1) uchastka " +
        "huquqi; (2) zona va qurish qoidalari; " +
        "(3) loyiha hujjatlari; (4) " +
        "ekspertiza; (5) ruxsatnoma; (6) " +
        "qurilish; (7) qabul qilish.\n\n" +
        "Har bir bosqichni hujjat bilan " +
        "yakunlang.",
      example:
        "Ruxsatnomasiz qurilgan bino sotilmoqchi " +
        "bo'ldi — hujjat rasmiylashtirilmagani " +
        "sababli bitim to'xtadi.",
      keyPoints: [
        "Qurish uchun maxsus ruxsatnoma kerak",
        "Ruxsatnomasiz obyektga mulk huquqi yuzaga kelmaydi",
        "Loyiha hujjatlari ekspertizadan o'tadi",
        "Zona va qurish qoidalari cheklov belgilaydi",
      ],
      warning:
        "\"Keyin rasmiylashtiramiz\" degan " +
        "yondashuv ko'pincha ishlamaydi.",
      lawRefs: [
        { code: "SHK", article: "44" },
        { code: "SHK", article: "45" },
        { code: "SHK", article: "46" },
        { code: "SHK", article: "47" },
        { code: "SHK", article: "59" },
        { code: "SHK", article: "60" },
        { code: "SHK", article: "61" },
        { code: "SHK", article: "78" },
        { code: "SHK", article: "79" },
        { code: "SHK", article: "80" },
      ],
    },
    {
      heading: "Qurilish nazorati va uning turlari",
      text:
        "Qurilish sifati bir necha darajada nazorat " +
        "qilinadi va bu tizimni bilish foydali.\n\n" +
        "DAVLAT NAZORATI: qurilish va uy-joy " +
        "kommunal xo'jaligi sohasida nazorat " +
        "qiluvchi inspeksiya hamda uning " +
        "hududiy bo'linmalari tomonidan amalga " +
        "oshiriladi.\n\n" +
        "⚠️ AMALIY XULOSA: qonunbuzar qurilish " +
        "haqida aynan shu inspeksiyaga murojaat " +
        "qilish kerak. Murojaatni YOZMA qiling " +
        "va nusxasini saqlang.\n\n" +
        "TEXNIK NAZORAT — buyurtmachi tomonidan " +
        "ishlarning sifati va hajmini " +
        "tekshirish.\n\n" +
        "MUALLIFLIK NAZORATI — loyihachi " +
        "tomonidan loyihaga muvofiqlikni " +
        "tekshirish.\n\n" +
        "ICHKI NAZORAT — pudratchining o'z " +
        "ishlari ustidan nazorati.\n\n" +
        "⚠️ BUYURTMACHI UCHUN AMALIY MASLAHAT: " +
        "texnik nazoratni mustaqil mutaxassisga " +
        "topshirish qimmat ko'rinishi mumkin, " +
        "lekin u keyinchalik ancha katta " +
        "yo'qotishlarning oldini oladi.\n\n" +
        "Nazoratsiz qurilishda yashirin nuqson " +
        "faqat foydalanish paytida ma'lum " +
        "bo'ladi — o'shanda tuzatish bir necha " +
        "barobar qimmatga tushadi.\n\n" +
        "QURILISH ISHLARINI TASHKIL ETISH va " +
        "AMALGA OSHIRISH tartibi belgilangan.\n\n" +
        "MATERIALLARGA TALABLAR: qurilish " +
        "materiallari, buyumlari va " +
        "konstruksiyalariga qo'yiladigan " +
        "talablar hamda ularni hujjatlarga " +
        "kiritish shartlari mavjud.\n\n" +
        "SUG'URTA: shaharsozlik faoliyatini " +
        "sug'urta qilish nazarda tutilgan.",
      example:
        "Qurilishda texnik nazorat yo'q edi — " +
        "yashirin nuqson foydalanish paytida " +
        "aniqlandi.",
      keyPoints: [
        "Nazorat davlat, texnik, mualliflik va ichki turlarga bo'linadi",
        "Qonunbuzarlik haqida inspeksiyaga yozma murojaat qiling",
        "Texnik nazorat buyurtmachini himoya qiladi",
        "Materiallarga alohida talablar qo'yiladi",
      ],
      warning:
        "Nazoratsiz qurilishdagi nuqsonni " +
        "keyinchalik tuzatish qimmatga tushadi.",
      lawRefs: [
        { code: "SHK", article: "26" },
        { code: "SHK", article: "27" },
        { code: "SHK", article: "28" },
        { code: "SHK", article: "29" },
        { code: "SHK", article: "30" },
        { code: "SHK", article: "31" },
        { code: "SHK", article: "33" },
        { code: "SHK", article: "34" },
      ],
    },
    {
      heading: "Obyektni qabul qilish va foydalanishga topshirish",
      text:
        "OBYEKTLARNI QABUL QILISH va ularni " +
        "FOYDALANISHGA TOPSHIRISH belgilangan " +
        "tartibda amalga oshiriladi.\n\n" +
        "⚠️ BU BOSQICHNI O'TKAZIB YUBORISH JIDDIY " +
        "OQIBATLARGA OLIB KELADI: obyekt rasman " +
        "\"mavjud emas\" bo'lib qoladi.\n\n" +
        "Ya'ni: uni ro'yxatdan o'tkazib " +
        "bo'lmaydi; kommunal tarmoqlarga rasmiy " +
        "ulanib bo'lmaydi; uni sotish, garovga " +
        "qo'yish yoki meros qoldirish imkonsiz.\n\n" +
        "Amalda ko'p odam binoni qurib, unda " +
        "yashay boshlaydi va bu bosqichni " +
        "\"keyinroq\" deb qoldiradi — natijada " +
        "yillar davomida hujjatsiz qoladi.\n\n" +
        "QABUL QILISH JARAYONIDA obyektning " +
        "loyihaga va normativ talablarga " +
        "muvofiqligi tekshiriladi.\n\n" +
        "AMALIY MASLAHAT XARIDORGA: tayyor " +
        "uy yoki kvartira sotib olayotganda " +
        "obyekt FOYDALANISHGA TOPSHIRILGANINI " +
        "tasdiqlovchi hujjatni so'rang.\n\n" +
        "Bu hujjat bo'lmasa — obyekt rasman " +
        "tugallanmagan va u bilan bog'liq " +
        "barcha xavf sizga o'tadi.\n\n" +
        "SHAHARSOZLIK KADASTRI: davlat " +
        "shaharsozlik kadastri yuritiladi va " +
        "unda hududlar hamda obyektlar " +
        "haqidagi ma'lumotlar saqlanadi.\n\n" +
        "MOLIYALASHTIRISH: shaharsozlik " +
        "faoliyatini moliyalashtirish " +
        "manbalari qonunda belgilangan.",
      example:
        "Uy qurib bitkazildi, lekin " +
        "foydalanishga topshirilmadi — uni " +
        "ro'yxatdan o'tkazib bo'lmadi.",
      keyPoints: [
        "Obyekt belgilangan tartibda qabul qilinadi",
        "Bu bosqichsiz obyekt rasman mavjud emas",
        "Xarid oldidan topshirish hujjatini so'rang",
        "Ma'lumotlar shaharsozlik kadastrida saqlanadi",
      ],
      warning:
        "Topshirish hujjatisiz uy sotib olish — " +
        "hujjatsiz mulk sotib olish demakdir.",
      lawRefs: [
        { code: "SHK", article: "32" },
        { code: "SHK", article: "48" },
        { code: "SHK", article: "83" },
      ],
    },
    {
      heading: "Hududiy zonalar va qurilish cheklovlari",
      text:
        "Aholi punktlari hududlari ZONALARGA " +
        "bo'linadi va har bir zonada nima qurish " +
        "mumkinligi belgilanadi.\n\n" +
        "ZONA TURLARI: turar joy zonalari; " +
        "ijtimoiy-amaliy zonalar; ishlab chiqarish " +
        "zonalari; muhandislik va transportga oid " +
        "infratuzilma zonalari; rekreatsiya " +
        "zonalari; qishloq xo'jaligi maqsadlarida " +
        "foydalaniladigan zonalar; maxsus " +
        "maqsadlarga mo'ljallangan zonalar; " +
        "harbiy obyektlar va rejimli hududlar " +
        "zonalari; shahar atrofi zonalari.\n\n" +
        "⚠️ AMALIY MA'NOSI: uchastkangiz qaysi " +
        "zonada joylashganini bilmasdan qurilish " +
        "rejasi tuzish — vaqt va pulni " +
        "yo'qotish.\n\n" +
        "Masalan ishlab chiqarish zonasida turar " +
        "joy qurish yoki rekreatsiya zonasida " +
        "sanoat obyekti joylashtirish odatda " +
        "mumkin emas.\n\n" +
        "ALOHIDA TARTIBGA SOLISH: ayrim " +
        "obyektlar va hududlar uchun " +
        "shaharsozlik faoliyati ALOHIDA " +
        "tartibga solinadi.\n\n" +
        "Bunga umumdavlat va mahalliy " +
        "ahamiyatga molik obyektlar hamda " +
        "favqulodda vaziyatlar ta'siriga " +
        "duchor bo'lgan hududlar kiradi.\n\n" +
        "SERVITUTLAR: shaharsozlik faoliyatini " +
        "amalga oshirishda yer uchastkalariga " +
        "doir servitutlar va huquqlarni " +
        "saqlash vazifalari belgilangan.\n\n" +
        "OLIB QO'YISH: yer uchastkalarini " +
        "kompensatsiya evaziga jamoat " +
        "ehtiyojlari uchun olib qo'yish " +
        "shaharsozlik kontekstida ham " +
        "tartibga solingan.\n\n" +
        "AMALIY QADAM: uchastka olishdan " +
        "oldin uning zonasini va qurish " +
        "qoidalarini hokimlikning " +
        "shaharsozlik bo'limidan " +
        "aniqlashtiring.",
      example:
        "Ishlab chiqarish zonasidagi uchastkada " +
        "turar joy qurish rejasi rad etildi.",
      keyPoints: [
        "Hududlar zonalarga bo'linadi",
        "Har bir zonada qurish qoidalari boshqacha",
        "Ayrim obyektlar alohida tartibga solinadi",
        "Zonani oldindan aniqlashtiring",
      ],
      warning:
        "Zona talabiga zid loyiha tasdiqdan " +
        "o'tmaydi.",
      lawRefs: [
        { code: "SHK", article: "62" },
        { code: "SHK", article: "63" },
        { code: "SHK", article: "64" },
        { code: "SHK", article: "65" },
        { code: "SHK", article: "66" },
        { code: "SHK", article: "67" },
        { code: "SHK", article: "68" },
        { code: "SHK", article: "72" },
        { code: "SHK", article: "74" },
        { code: "SHK", article: "75" },
        { code: "SHK", article: "81" },
        { code: "SHK", article: "82" },
      ],
    },
    {
      heading: "Jamoatchilik nazorati va bosh reja muhokamasi",
      text:
        "Bu — fuqaro uchun eng foydali, lekin eng kam " +
        "ishlatiladigan mexanizm.\n\n" +
        "JAMOATCHILIK NAZORATI shaharsozlik " +
        "faoliyati sohasida amalga oshiriladi va " +
        "uning shakllari hamda subyektlari " +
        "qonunda belgilangan.\n\n" +
        "⚠️ ASOSIY IMKONIYAT — BOSH REJA " +
        "MUHOKAMASI: aholi punktlarining bosh " +
        "rejalari JAMOATCHILIK MUHOKAMASIDAN " +
        "o'tkaziladi.\n\n" +
        "Ya'ni sizning mahallangizda nima " +
        "qurilishi, qaysi hudud qanday " +
        "ishlatilishi hal qilinayotganda siz " +
        "fikr bildirishga haqlisiz.\n\n" +
        "Bosh reja TASDIQLANGANLIGI to'g'risidagi " +
        "axborot e'lon qilinadi — ya'ni bu " +
        "ma'lumot ochiq bo'lishi kerak.\n\n" +
        "SHIKOYAT QILISH: muhokamani o'tkazish " +
        "tartibi buzilgan bo'lsa, buning " +
        "ustidan shikoyat berish mumkin.\n\n" +
        "JAMOATCHILIK EKSPERTIZASI: bosh " +
        "rejalarning jamoatchilik ekspertizasi " +
        "o'tkazilishi mumkin.\n\n" +
        "TAKLIF KIRITISH: jamoatchilik nazorati " +
        "subyektlari tasdiqlangan bosh rejaga " +
        "o'zgartirishlar kiritish to'g'risida " +
        "TAKLIF kiritishga haqli.\n\n" +
        "MUQOBIL BOSH REJA ishlab chiqish " +
        "tartibi ham nazarda tutilgan.\n\n" +
        "AMALIY XULOSA: mahallangizda " +
        "noqulay obyekt qurilishi rejalashtirilsa, " +
        "buni QURILISH BOSHLANGANDAN KEYIN " +
        "to'xtatish deyarli imkonsiz.\n\n" +
        "Shuning uchun bosh reja muhokamasi " +
        "e'lonlarini kuzatib boring va " +
        "fikringizni AYNAN O'SHA bosqichda " +
        "bildiring. Bu eng samarali payt.\n\n" +
        "JAVOBGARLIK: shaharsozlik to'g'risidagi " +
        "qonun hujjatlarini buzganlik uchun " +
        "javobgarlik belgilangan; nizolar " +
        "belgilangan tartibda hal etiladi.",
      example:
        "Bosh reja muhokamasida ishtirok " +
        "etilmadi — qurilish boshlangach " +
        "e'tiroz natija bermadi.",
      keyPoints: [
        "Bosh rejalar jamoatchilik muhokamasidan o'tadi",
        "Fuqarolar fikr bildirishga haqli",
        "Rejaga o'zgartirish taklifi kiritilishi mumkin",
        "Eng samarali payt — muhokama bosqichi",
      ],
      warning:
        "Qurilish boshlangandan keyin e'tiroz " +
        "bildirish deyarli natija bermaydi.",
      lawRefs: [
        { code: "SHK", article: "35" },
        { code: "SHK", article: "36" },
        { code: "SHK", article: "37" },
        { code: "SHK", article: "38" },
        { code: "SHK", article: "39" },
        { code: "SHK", article: "40" },
        { code: "SHK", article: "41" },
        { code: "SHK", article: "42" },
        { code: "SHK", article: "43" },
        { code: "SHK", article: "84" },
        { code: "SHK", article: "85" },
      ],
    },
  ],
};

module.exports = { LESSON };
