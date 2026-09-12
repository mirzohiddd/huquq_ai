"use strict";
/**
 * SUD MODULI — 11-DARS: ADVOKAT VA VAKILLIK.
 * FPK 51–70 + JPK 49–53 (himoyachi vakolatlari).
 */

const LESSON = {
  key: "advokat-yuridik-yordam",
  category: "process",
  level: "basic",
  order: 12110,
  title: "Advokat va malakali yuridik yordam",
  desc:
    "Vakillik turlari, vakilning vakolatlarini rasmiylashtirish va " +
    "uning doirasi, kim vakil bo'la olmaydi, prokuror va davlat " +
    "organlarining ishtiroki hamda jinoyat ishida himoyachi.",
  objectives: [
    "Vakillik turlarini bilasiz",
    "Vakolatlarni qanday rasmiylashtirishni bilasiz",
    "Qaysi vakolatlar alohida yozilishi kerakligini bilasiz",
    "Kim vakil bo'la olmasligini bilasiz",
    "Prokuror va organlarning rolini bilasiz",
    "Jinoyat ishida himoyachi huquqlarini bilasiz",
  ],
  practicalSteps: [
    "Advokat bilan yozma shartnoma tuzing",
    "Ishonchnomada maxsus vakolatlarni aniq yozing",
    "To'lovni rasmiy tarzda amalga oshirib hujjatini saqlang",
    "Advokatdan ish holati haqida muntazam hisobot so'rang",
    "Jinoyat ishida birinchi so'roqdan oldin himoyachi talab qiling",
  ],
  sections: [
    {
      heading: "Vakillik turlari",
      text:
        "VAKILLAR ORQALI ISH YURITISH — sud " +
        "jarayonida keng qo'llaniladigan " +
        "imkoniyat.\n\n" +
        "⚠️ VAKIL SIZNI ALMASHTIRMAYDI — u " +
        "sizning nomingizdan ish " +
        "ko'radi va uning harakatlari " +
        "SIZ UCHUN oqibat keltiradi.\n\n" +
        "Shuning uchun vakil tanlash " +
        "jiddiy qaror.\n\n" +
        "QONUNIY VAKILLIK: voyaga " +
        "yetmaganlar, muomalaga " +
        "layoqatsiz yoki layoqati " +
        "cheklangan shaxslarning " +
        "manfaatlarini ota-onalari, " +
        "farzandlikka oluvchilari, " +
        "vasiylari yoki homiylari " +
        "ifodalaydi.\n\n" +
        "Bunday vakillik QONUNDAN " +
        "kelib chiqadi va ishonchnoma " +
        "talab qilmaydi — vakolat " +
        "tug'ilish haqidagi guvohnoma " +
        "yoki vasiylik hujjati bilan " +
        "tasdiqlanadi.\n\n" +
        "SHARTNOMA BO'YICHA (IXTIYORIY) " +
        "VAKILLIK: shaxs o'zi " +
        "tanlagan vakil orqali ish " +
        "yuritadi.\n\n" +
        "⚠️ AMALIY XULOSA: vakil " +
        "bo'lish uchun ALBATTA " +
        "advokat bo'lish shart " +
        "emas — qonunda ko'rsatilgan " +
        "boshqa shaxslar ham vakil " +
        "bo'la oladi.\n\n" +
        "LEKIN murakkab ishlarda " +
        "malakali advokat " +
        "afzal — u protsessual " +
        "qoidalarni biladi va " +
        "muddatlarni o'tkazib " +
        "yubormaydi.\n\n" +
        "AMALIY MASLAHAT: advokat " +
        "tanlayotganda uning shu " +
        "toifadagi ishlar bo'yicha " +
        "tajribasini so'rang va " +
        "YOZMA shartnoma tuzing.\n\n" +
        "Shartnomada xizmat hajmi, " +
        "narxi va hisobot berish " +
        "tartibi yozilishi kerak.",
      example:
        "Advokat bilan og'zaki kelishildi — " +
        "keyin xizmat hajmi bo'yicha " +
        "nizo chiqdi.",
      keyPoints: [
        "Vakil sizning nomingizdan ish ko'radi",
        "Qonuniy vakillik ishonchnoma talab qilmaydi",
        "Ixtiyoriy vakillik shartnoma asosida bo'ladi",
        "Advokat bilan yozma shartnoma tuzing",
      ],
      warning:
        "Vakilning harakatlari sizning " +
        "oqibatingiz bo'ladi.",
      lawRefs: [
        { code: "FPK", article: "65" },
        { code: "FPK", article: "66" },
        { code: "FPK", article: "67" },
      ],
    },
    {
      heading: "Vakolatlarni rasmiylashtirish va ularning doirasi",
      text:
        "VAKILNING VAKOLATLARI belgilangan " +
        "tartibda rasmiylashtiriladi — " +
        "odatda ISHONCHNOMA orqali.\n\n" +
        "⚠️ ENG MUHIM AMALIY QOIDA: " +
        "vakilning ayrim vakolatlari " +
        "ishonchnomada ALOHIDA " +
        "ko'rsatilishi kerak.\n\n" +
        "BUNGA ODATDA KIRADI: da'vo " +
        "arizasini imzolash; ishni " +
        "hakamlik sudiga topshirish; " +
        "talablardan TO'LIQ yoki " +
        "QISMAN VOZ KECHISH; da'vo " +
        "predmeti yoki asosini " +
        "o'zgartirish; talablarni TAN " +
        "OLISH; KELISHUV BITIMI " +
        "tuzish; vakolatlarni boshqa " +
        "shaxsga o'tkazish; SHIKOYAT " +
        "berish; ijro varaqasini " +
        "olish; undirilgan mol-mulk " +
        "yoki pulni OLISH.\n\n" +
        "⚠️ NIMA UCHUN BU MUHIM: bu " +
        "vakolatlar yozilmagan " +
        "bo'lsa — vakil bunday " +
        "harakatlarni amalga oshira " +
        "OLMAYDI.\n\n" +
        "Ya'ni advokatingiz kelishuv " +
        "bitimini tuza olmaydi yoki " +
        "shikoyat bera olmaydi.\n\n" +
        "TESKARI TOMONI HAM BOR: " +
        "ularning barchasini " +
        "yozib berish — vakilga juda " +
        "keng huquq berish " +
        "demakdir.\n\n" +
        "AMALIY QOIDA: faqat " +
        "KERAKLI vakolatlarni " +
        "yozing.\n\n" +
        "Masalan \"undirilgan pulni " +
        "olish\" vakolatini bermaslik " +
        "va pulni o'z hisobingizga " +
        "olish xavfsizroq.\n\n" +
        "VAKOLATLARNI TEKSHIRISH: " +
        "sud vakolatlarni " +
        "tekshiradi.\n\n" +
        "KIM VAKIL BO'LA OLMAYDI: " +
        "sudda vakillik qilishi " +
        "mumkin bo'lmagan shaxslar " +
        "doirasi qonunda " +
        "belgilangan.\n\n" +
        "Bunga odatda sudyalar, " +
        "tergovchilar, prokurorlar " +
        "va muomalaga layoqatsiz " +
        "shaxslar kiradi.",
      example:
        "Ishonchnomada shikoyat berish " +
        "vakolati yozilmagan edi — advokat " +
        "shikoyat bera olmadi va muddat " +
        "o'tdi.",
      keyPoints: [
        "Vakolatlar ishonchnoma bilan rasmiylashtiriladi",
        "Ayrim vakolatlar alohida ko'rsatilishi shart",
        "Yozilmagan vakolat amalga oshirilmaydi",
        "Faqat kerakli vakolatlarni bering",
      ],
      warning:
        "Barcha vakolatlarni berish — nazorat " +
        "yo'qotish xavfini oshiradi.",
      lawRefs: [
        { code: "FPK", article: "68" },
        { code: "FPK", article: "69" },
        { code: "FPK", article: "70" },
        { code: "IPK", article: "62" },
        { code: "IPK", article: "63" },
        { code: "IPK", article: "64" },
        { code: "IPK", article: "65" },
      ],
    },
    {
      heading: "Prokuror va davlat organlarining ishtiroki",
      text:
        "Sizning manfaatlaringizni ayrim " +
        "hollarda DAVLAT organlari ham " +
        "himoya qilishi mumkin.\n\n" +
        "PROKURORNING ISHTIROKI: prokuror " +
        "qonunda ko'rsatilgan hollarda " +
        "ishda ishtirok etadi va uning " +
        "protsessual huquq hamda " +
        "majburiyatlari belgilangan.\n\n" +
        "⚠️ AMALIY MA'NOSI: prokuror " +
        "ayrim toifadagi ishlarda " +
        "fuqaro manfaatlarini himoya " +
        "qilib da'vo qo'yishi " +
        "mumkin — masalan " +
        "himoyalanmagan toifadagi " +
        "shaxslar nomidan.\n\n" +
        "BOSHQA SHAXSLARNING " +
        "HUQUQLARINI HIMOYA QILAYOTGAN " +
        "DAVLAT BOSHQARUVI ORGANLARI, " +
        "TASHKILOTLAR va AYRIM " +
        "FUQAROLAR ham protsessda " +
        "ishtirok etishi mumkin.\n\n" +
        "Ularning protsessual huquq va " +
        "majburiyatlari " +
        "belgilangan.\n\n" +
        "⚠️ AMALIY XULOSA: agar siz " +
        "advokat yollashga imkoniyati " +
        "yo'q, himoyaga muhtoj " +
        "toifadagi shaxs " +
        "bo'lsangiz — prokuraturaga " +
        "yoki tegishli davlat " +
        "organiga murojaat qilish " +
        "imkonini ko'rib chiqing.\n\n" +
        "Bu ayniqsa mehnat huquqlari, " +
        "bolalar manfaatlari va " +
        "ijtimoiy himoya " +
        "masalalarida ishlaydi.\n\n" +
        "ODIL SUDLOVNI AMALGA " +
        "OSHIRISHGA KO'MAKLASHUVCHI " +
        "SHAXSLAR ham protsessda " +
        "ishtirok etadi — sud " +
        "majlisi kotibi, guvoh, " +
        "ekspert, mutaxassis, " +
        "tarjimon.\n\n" +
        "Ularning har birining " +
        "huquq va majburiyatlari " +
        "belgilangan.",
      example:
        "Prokuror himoyaga muhtoj shaxs " +
        "manfaatida da'vo qo'ydi.",
      keyPoints: [
        "Prokuror ayrim hollarda ishda ishtirok etadi",
        "Davlat organlari boshqa shaxs huquqlarini himoya qilishi mumkin",
        "Bu ijtimoiy himoya masalalarida ayniqsa ishlaydi",
        "Ko'maklashuvchi shaxslarning huquqlari belgilangan",
      ],
      warning:
        "Advokat yollash imkoni bo'lmasa — " +
        "davlat organlariga murojaat " +
        "imkonini ko'rib chiqing.",
      lawRefs: [
        { code: "FPK", article: "51" },
        { code: "FPK", article: "52" },
        { code: "FPK", article: "53" },
        { code: "FPK", article: "54" },
        { code: "FPK", article: "55" },
        { code: "FPK", article: "56" },
      ],
    },
    {
      heading: "Jinoyat ishida himoyachi",
      text:
        "Jinoyat ishida himoyachining roli " +
        "fuqarolik ishidagi vakildan ancha " +
        "kengroq va muhimroq.\n\n" +
        "HIMOYACHI — gumon qilinuvchi, " +
        "ayblanuvchi va sudlanuvchining " +
        "huquq hamda manfaatlarini " +
        "himoya qiluvchi shaxs.\n\n" +
        "⚠️ HIMOYACHI ISHTIROK ETISHI " +
        "SHART BO'LGAN HOLLAR qonunda " +
        "belgilangan.\n\n" +
        "Bunday hollarda himoyachisiz " +
        "o'tkazilgan protsessual " +
        "harakatlar qonunga xilof " +
        "hisoblanadi va ularning " +
        "natijalari nizolashtirilishi " +
        "mumkin.\n\n" +
        "TAKLIF ETISH: himoyachini " +
        "shaxsning o'zi, qonuniy " +
        "vakillari yoki boshqa " +
        "shaxslar taklif qilishi " +
        "mumkin.\n\n" +
        "VOZ KECHISH: himoyachidan voz " +
        "kechish tartibi " +
        "belgilangan.\n\n" +
        "⚠️ AMALIY OGOHLANTIRISH: voz " +
        "kechish IXTIYORIY bo'lishi " +
        "kerak.\n\n" +
        "\"Advokat kerak emas, tez " +
        "hal qilamiz\" degan gap " +
        "asosida voz kechish " +
        "keyinchalik " +
        "nizolashtirilishi " +
        "mumkin — lekin buni " +
        "isbotlash qiyin.\n\n" +
        "Shuning uchun eng to'g'ri " +
        "yo'l — voz kechmaslik.\n\n" +
        "HIMOYACHINING HUQUQLARI " +
        "keng: himoyalanuvchi bilan " +
        "MAXFIY uchrashish; ish " +
        "materiallari bilan " +
        "tanishish; dalillar taqdim " +
        "etish; iltimosnomalar " +
        "berish; protsessual " +
        "harakatlarda ishtirok " +
        "etish; savollar berish; " +
        "shikoyat qilish.\n\n" +
        "⚠️ ENG MUHIM AMALIY " +
        "MASLAHAT: himoyachini " +
        "BIRINCHI SO'ROQDAN OLDIN " +
        "jalb qiling.\n\n" +
        "Birinchi so'roqda berilgan " +
        "ko'rsatuvlar butun ishning " +
        "yo'nalishini belgilaydi va " +
        "ularni keyinchalik " +
        "o'zgartirish juda " +
        "qiyin.\n\n" +
        "AMALIY QADAM: sizni " +
        "ushlab turishsa yoki " +
        "so'roqqa chaqirishsa — " +
        "darhol advokat talab " +
        "qiling va u kelgunga " +
        "qadar ko'rsatuv " +
        "berishdan tiyiling.\n\n" +
        "Bu sizning " +
        "huquqingiz.",
      example:
        "Advokat birinchi so'roqdan oldin " +
        "jalb qilindi — himoya strategiyasi " +
        "boshidanoq to'g'ri qurildi.",
      keyPoints: [
        "Himoyachi ishtiroki ayrim hollarda majburiy",
        "Himoyachi bilan maxfiy uchrashish huquqi bor",
        "Voz kechish ixtiyoriy bo'lishi kerak",
        "Advokatni birinchi so'roqdan oldin jalb qiling",
      ],
      warning:
        "Advokat kelgunga qadar ko'rsatuv " +
        "berishga shoshilmang.",
      lawRefs: [
        { code: "JPK", article: "49" },
        { code: "JPK", article: "50" },
        { code: "JPK", article: "51" },
        { code: "JPK", article: "52" },
        { code: "JPK", article: "53" },
      ],
    },
  ],
};

module.exports = { LESSON };
