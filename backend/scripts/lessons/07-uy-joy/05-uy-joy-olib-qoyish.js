"use strict";
/**
 * UY-JOY MODULI — 5-DARS: BUZISH VA KO'CHIRISH.
 * UJK 27–31, 70–74 + YK 37, 37-1, 86.
 */

const LESSON = {
  key: "uy-joy-olib-qoyish",
  category: "housing",
  level: "mid",
  order: 7050,
  title: "Uy-joyni buzish va davlat ehtiyoji uchun olib qo'yish",
  desc:
    "Yer uchastkasi jamoat ehtiyojlari uchun olib qo'yilganda " +
    "fuqarolarni turar joy bilan ta'minlash, tovon, yuridik " +
    "shaxslarga zararni qoplash hamda ko'chirish tartibi va " +
    "kafolatlari.",
  objectives: [
    "Olib qo'yish faqat qanday asoslarda mumkinligini bilasiz",
    "Turar joy bilan ta'minlash kafolatini bilasiz",
    "Tovon nimalarni qamrashini bilasiz",
    "Yakka tartibda qurish uchun yer olish huquqini bilasiz",
    "Ko'chirish tartibini va kafolatlarini bilasiz",
    "Boshqa turar joy berilmasdan ko'chirish holatlarini bilasiz",
  ],
  practicalSteps: [
    "Olib qo'yish to'g'risidagi qarorning nusxasini yozma talab qiling",
    "Mulkingizni mustaqil baholovchi orqali baholatib oling",
    "Barcha qurilish va yaxshilanishlarni hujjat bilan tasdiqlang",
    "Taklif qilingan turar joyni ko'rikdan o'tkazing va dalolatnoma tuzing",
    "Rozilik bermasdan oldin barcha shartlarni yozma oling",
  ],
  sections: [
    {
      heading: "Olib qo'yish: faqat qonuniy asos bilan",
      text:
        "Yer uchastkalari DAVLAT yoki JAMOAT ehtiyojlari " +
        "uchun olib qo'yilishi mumkin va bu holatda ular " +
        "ustidagi uylar hamda kvartiralar buzilishi " +
        "lozim bo'ladi.\n\n" +
        "⚠️ ENG MUHIM QOIDA: olib qo'yish faqat QONUNDA " +
        "nazarda tutilgan asoslarda, belgilangan " +
        "TARTIBDA va KOMPENSATSIYA evaziga amalga " +
        "oshiriladi.\n\n" +
        "Ya'ni bu jarayonda uchta narsa bo'lishi shart: " +
        "qonuniy asos, rasmiy qaror va tovon.\n\n" +
        "Ulardan biri bo'lmasa — harakat qonunga " +
        "xilof va uni nizolashtirish mumkin.\n\n" +
        "JAMOAT EHTIYOJLARI odatda yo'l, maktab, " +
        "shifoxona, muhandislik tarmoqlari kabi " +
        "umumiy manfaatga xizmat qiladigan " +
        "obyektlar bilan bog'liq bo'ladi.\n\n" +
        "QAYTA SOTIB OLISH: yer uchastkasini jamoat " +
        "ehtiyojlari uchun qayta sotib olish " +
        "tartibi alohida belgilangan.\n\n" +
        "⚠️ AMALIY BIRINCHI QADAM: sizga olib " +
        "qo'yish haqida aytilganda, DARHOL rasmiy " +
        "QARORNING nusxasini yozma so'rang.\n\n" +
        "Qarorda: kim qabul qilgan, qaysi asosda, " +
        "qaysi obyekt uchun, qanday tovon nazarda " +
        "tutilgan — bularning barchasi bo'lishi " +
        "kerak.\n\n" +
        "Og'zaki xabar asosida hech narsani " +
        "buzmang va hech qanday hujjatga " +
        "imzo qo'ymang.",
      example:
        "Olib qo'yish og'zaki aytildi, qaror " +
        "ko'rsatilmadi — mulkdor rasmiy hujjatni " +
        "talab qilishga haqli.",
      keyPoints: [
        "Olib qo'yish faqat qonuniy asosda bo'ladi",
        "Rasmiy qaror va tovon shart",
        "Uchtasidan biri bo'lmasa harakat qonunga xilof",
        "Qaror nusxasini yozma talab qiling",
      ],
      warning:
        "Og'zaki xabar asosida imzo qo'yish — " +
        "huquqlaringizdan voz kechish bo'lishi " +
        "mumkin.",
      lawRefs: [
        { code: "YK", article: "37" },
        { code: "YK", article: "37-1" },
      ],
    },
    {
      heading: "Fuqarolarni turar joy bilan ta'minlash",
      text:
        "Yer uchastkalari olib qo'yilishi munosabati bilan " +
        "uyi yoki kvartirasi buzilishi lozim bo'lgan " +
        "fuqarolar TURAR JOY BILAN TA'MINLANADI.\n\n" +
        "⚠️ BU ENG MUHIM KAFOLAT: fuqaro ko'chada qolib " +
        "ketmaydi. Turar joy berish yoki tovon to'lash " +
        "olib qo'yishning majburiy sharti.\n\n" +
        "TA'MINLASH SHAKLLARI odatda ikkita: boshqa " +
        "turar joy berish yoki mulk qiymatini pul " +
        "bilan qoplash.\n\n" +
        "TAKLIF QILINADIGAN TURAR JOY belgilangan " +
        "talablarga javob berishi kerak — u obod " +
        "bo'lishi va yashash uchun yaroqli " +
        "bo'lishi shart.\n\n" +
        "AMALIY MASLAHAT: taklif qilingan turar " +
        "joyni ALBATTA ko'rikdan o'tkazing va uning " +
        "holatini dalolatnoma hamda foto bilan " +
        "qayd eting.\n\n" +
        "Rozilik bergandan keyin kamchiliklarni " +
        "bartaraf etishni talab qilish ancha " +
        "qiyinlashadi.\n\n" +
        "YAKKA TARTIBDA UY-JOY QURISH UCHUN YER: " +
        "mulk huquqi asosida tegishli uylar " +
        "buzilganda fuqarolarga yakka tartibda " +
        "uy-joy qurish uchun yer uchastkasi " +
        "berilishi nazarda tutilgan.\n\n" +
        "Bu ayniqsa xususiy uyda yashovchilar " +
        "uchun muhim: kvartira o'rniga yer olish " +
        "imkoniyati mavjud.\n\n" +
        "⚠️ TANLOV SIZDA: sizga qaysi shakl " +
        "taklif qilinayotganini aniqlang va " +
        "muqobil variantlar borligini so'rang. " +
        "Birinchi taklifga darhol rozilik berish " +
        "shart emas.",
      example:
        "Xususiy uy buzilishi kerak edi — mulkdor " +
        "yakka tartibda qurish uchun yer olish " +
        "imkonini so'radi.",
      keyPoints: [
        "Fuqarolar turar joy bilan ta'minlanadi",
        "Ta'minlash turar joy yoki tovon shaklida bo'ladi",
        "Taklif qilingan joy obod bo'lishi kerak",
        "Yakka tartibda qurish uchun yer berilishi mumkin",
      ],
      warning:
        "Taklifni ko'rikdan o'tkazmasdan rozilik " +
        "bermang.",
      lawRefs: [
        { code: "UJK", article: "27" },
        { code: "UJK", article: "28" },
      ],
    },
    {
      heading: "Tovon va zararni qoplash",
      text:
        "Olib qo'yish natijasida yetkazilgan zarar " +
        "QOPLANADI.\n\n" +
        "YURIDIK SHAXSLARGA yetkazilgan zarar ham " +
        "qoplanadi — bu alohida tartibda amalga " +
        "oshiriladi.\n\n" +
        "⚠️ TOVON NIMALARNI QAMRASHI KERAK: mulkning " +
        "bozor qiymati; ko'chish bilan bog'liq " +
        "xarajatlar; yer uchastkasi qiymati (agar " +
        "mulk bo'lsa); yaxshilanishlar qiymati; boy " +
        "berilgan foyda (tadbirkorlik faoliyati " +
        "bo'lsa).\n\n" +
        "AMALDA ENG KO'P E'TIBORDAN CHETDA QOLADIGAN " +
        "QISM — YAXSHILANISHLAR VA QO'SHIMCHA " +
        "QURILISHLAR.\n\n" +
        "Agar siz uyga qo'shimcha xona qurgan, " +
        "kapital ta'mir qilgan yoki " +
        "obodonlashtirgan bo'lsangiz — ular ham " +
        "hisobga olinishi kerak. Lekin buning " +
        "uchun ular HUJJATLASHTIRILGAN bo'lishi " +
        "zarur.\n\n" +
        "⚠️ SHUNING UCHUN: ruxsatsiz qurilgan " +
        "qo'shimchalar tovon hisobiga " +
        "kiritilmasligi mumkin. Bu " +
        "o'zboshimchalik bilan qurishning yana " +
        "bir zararli oqibati.\n\n" +
        "BAHOLASH: taklif qilingan baho bilan " +
        "rozi bo'lmasangiz, MUSTAQIL baholovchi " +
        "xulosasini olishga va bahoni " +
        "nizolashtirishga haqlisiz.\n\n" +
        "AMALIY QADAM: baholash dalolatnomasini " +
        "diqqat bilan o'qing va unda barcha " +
        "obyektlar (uy, qo'shimchalar, daraxtlar, " +
        "to'siq, quduq) hisobga olinganini " +
        "tekshiring. Tushib qolgan har bir " +
        "obyekt — yo'qotilgan pul.",
      example:
        "Baholashda hovlidagi qo'shimcha imorat " +
        "hisobga olinmadi — mulkdor buni " +
        "nizolashtirishi mumkin.",
      keyPoints: [
        "Yetkazilgan zarar to'liq qoplanadi",
        "Tovon mulk qiymati va xarajatlarni qamraydi",
        "Yaxshilanishlar hujjatlashtirilgan bo'lishi kerak",
        "Baho bilan rozi bo'lmasangiz uni nizolashtiring",
      ],
      warning:
        "Baholash dalolatnomasini o'qimasdan " +
        "imzolash — kam tovon olishning asosiy " +
        "sababi.",
      lawRefs: [
        { code: "UJK", article: "29" },
        { code: "YK", article: "86" },
      ],
    },
    {
      heading: "Ko'chirish va yangi joyda qurish",
      text:
        "BUZILISHI LOZIM BO'LGAN uylar, imoratlar va " +
        "inshootlar KO'CHIRILISHI mumkin — ya'ni ular " +
        "buzilmasdan yangi joyga o'tkaziladi.\n\n" +
        "Bu variant ayrim holatlarda mulkdor uchun " +
        "foydali bo'lishi mumkin va u haqda " +
        "so'rashga haqlisiz.\n\n" +
        "YANGI JOYDA QURISH: uylari yoki kvartiralari " +
        "buzilishi lozim bo'lgan fuqarolar va " +
        "yuridik shaxslar uchun yangi joyda uylar " +
        "hamda imoratlar barpo etilishi nazarda " +
        "tutilgan.\n\n" +
        "⚠️ AMALIY MASALA — MUDDAT: eng ko'p muammo " +
        "yangi turar joy TAYYOR BO'LMAGAN holda " +
        "eskisini bo'shatishga majbur qilishdan " +
        "kelib chiqadi.\n\n" +
        "Shuning uchun kelishuvda ANIQ ketma-ketlik " +
        "yozilishi kerak: yangi turar joy qachon " +
        "tayyor bo'ladi, ko'chish qachon amalga " +
        "oshiriladi, oraliq davrda qayerda " +
        "yashaysiz va uni kim moliyalashtiradi.\n\n" +
        "Bu shartlarni og'zaki emas, YOZMA " +
        "shaklda kelishing.\n\n" +
        "KO'CHISH XARAJATLARI ham tovon tarkibiga " +
        "kirishi kerak — transport, yuk " +
        "ko'tarish, ulanish xarajatlari.\n\n" +
        "AMALIY XULOSA: kelishuv imzolashdan " +
        "oldin unda quyidagilar borligini " +
        "tekshiring — aniq manzil va maydon, " +
        "topshirish muddati, tovon summasi va " +
        "to'lash muddati, oraliq davr masalasi, " +
        "shart bajarilmasa nima bo'lishi.",
      example:
        "Yangi kvartira tayyor bo'lmasdan eski uy " +
        "buzildi — oraliq davr masalasi kelishuvda " +
        "yozilmagan edi.",
      keyPoints: [
        "Imoratlar ko'chirilishi mumkin",
        "Yangi joyda uy barpo etish nazarda tutilgan",
        "Ketma-ketlik va muddatlar yozma kelishilishi kerak",
        "Ko'chish xarajatlari ham qoplanadi",
      ],
      warning:
        "Yangi joy tayyor bo'lmasdan eskisini " +
        "bo'shatishga rozilik bermang.",
      lawRefs: [
        { code: "UJK", article: "30" },
        { code: "UJK", article: "31" },
      ],
    },
    {
      heading: "Turar joydan ko'chirish: umumiy qoidalar",
      text:
        "TURAR JOYDAN KO'CHIRISH qonunda ko'rsatilgan " +
        "asoslarda va odatda SUD tartibida amalga " +
        "oshiriladi.\n\n" +
        "⚠️ BU ASOSIY HIMOYA: hech kim o'zboshimchalik " +
        "bilan turar joydan chiqarib yuborilishi " +
        "mumkin emas. Sud qarorisiz ko'chirish " +
        "qonunga xilof.\n\n" +
        "KO'CHIRISH UCH SHAKLDA BO'LADI VA ULAR " +
        "OQIBATI BO'YICHA JIDDIY FARQ QILADI:\n\n" +
        "(1) BOSHQA OBOD TURAR JOY BERGAN HOLDA — " +
        "eng yaxshi variant. Bunda beriladigan " +
        "turar joy belgilangan talablarga javob " +
        "berishi kerak.\n\n" +
        "(2) BOSHQA TURAR JOY BERGAN HOLDA — " +
        "beriladigan joy \"obod\" talabidan " +
        "pastroq bo'lishi mumkin.\n\n" +
        "(3) BOSHQA TURAR JOY BERMASDAN — eng " +
        "og'ir variant va u faqat qonunda " +
        "ko'rsatilgan aniq holatlarda " +
        "qo'llaniladi.\n\n" +
        "HARBIY SHAHARCHALARDAN ko'chirish ham " +
        "boshqa obod turar joy berilgan holda " +
        "amalga oshiriladi.\n\n" +
        "AMALIY XULOSA: ko'chirish da'vosi " +
        "kelganda birinchi navbatda ikki narsani " +
        "aniqlang — QAYSI ASOSDA va QAYSI " +
        "SHAKLDA ko'chirilyapsiz.\n\n" +
        "Asos qonunda yo'q bo'lsa yoki noto'g'ri " +
        "shakl qo'llanilayotgan bo'lsa, buni " +
        "sudda e'tiroz sifatida bildiring.\n\n" +
        "Va albatta: sud majlisiga qatnashing. " +
        "Ishtirok etmaslik ish sizsiz hal " +
        "qilinishiga olib keladi.",
      example:
        "Ko'chirish da'vosi qo'yildi, javobgar sud " +
        "majlisiga kelmadi — ish usiz hal qilindi.",
      keyPoints: [
        "Ko'chirish odatda sud tartibida amalga oshiriladi",
        "Uch shakl bor va oqibatlari turlicha",
        "Obod turar joy berish eng yaxshi variant",
        "Turar joysiz ko'chirish faqat aniq holatlarda",
      ],
      warning:
        "Sud majlisiga qatnashmaslik — himoyadan " +
        "voz kechish demakdir.",
      lawRefs: [
        { code: "UJK", article: "70" },
        { code: "UJK", article: "71" },
        { code: "UJK", article: "73" },
      ],
    },
    {
      heading: "Boshqa turar joy bermasdan ko'chirish",
      text:
        "Bu — ko'chirishning eng og'ir shakli va u " +
        "faqat QONUNDA ANIQ KO'RSATILGAN holatlarda " +
        "qo'llaniladi.\n\n" +
        "⚠️ ODATIY ASOSLAR: turar joydan maqsadiga " +
        "zid foydalanish; uni muntazam buzish yoki " +
        "yaroqsiz holga keltirish; qo'shnilar bilan " +
        "birga yashashni imkonsiz qiladigan " +
        "xatti-harakatlar; to'lovlarni uzoq vaqt " +
        "uzrsiz to'lamaslik.\n\n" +
        "MUHIM: bu asoslar OGOHLANTIRISHDAN keyin " +
        "ham davom etgan bo'lishi kerak.\n\n" +
        "Ya'ni bir marta buzish darhol ko'chirishga " +
        "olib kelmaydi — avval buzilishni bartaraf " +
        "etish talab qilinadi.\n\n" +
        "AMALIY XULOSA IKKI TOMONGA:\n\n" +
        "YASHOVCHI uchun — ogohlantirishga darhol " +
        "munosabat bildiring. Buzilishni bartaraf " +
        "eting va buni hujjatlashtiring. Agar " +
        "to'lov masalasi bo'lsa, to'lov jadvalini " +
        "kelishing — hatto qisman to'lov ham " +
        "sizning vijdonliligingizni ko'rsatadi.\n\n" +
        "DA'VOGAR uchun — ogohlantirishlar va " +
        "buzilish dalillari yozma bo'lishi kerak. " +
        "Og'zaki e'tirozlar sudda qabul " +
        "qilinmaydi.\n\n" +
        "⚠️ ALOHIDA HIMOYA: voyaga yetmagan " +
        "bolalar ishtirok etadigan holatlarda " +
        "vasiylik va homiylik organi jalb " +
        "qilinadi va bolalar manfaati alohida " +
        "hisobga olinadi.\n\n" +
        "Bu ko'chirishni ancha murakkablashtiradi " +
        "va ko'p hollarda uni imkonsiz qiladi.",
      example:
        "Ogohlantirishdan keyin buzilish bartaraf " +
        "etildi — ko'chirish uchun asos yo'qoladi.",
      keyPoints: [
        "Bu shakl faqat qonunda ko'rsatilgan holatlarda",
        "Ogohlantirish va uning natijasi hisobga olinadi",
        "Buzilishni bartaraf etish asosni yo'qotadi",
        "Bolalar ishtirokida vasiylik organi jalb qilinadi",
      ],
      warning:
        "Ogohlantirishga javob bermaslik — " +
        "ko'chirish xavfini keskin oshiradi.",
      lawRefs: [{ code: "UJK", article: "74" }],
    },
  ],
};

module.exports = { LESSON };
