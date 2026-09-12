"use strict";
/** JINOYAT MODULI — 3-DARS: JINOIYLIKNI ISTISNO QILUVCHI HOLATLAR. JK 35–41-1. */

const LESSON = {
  key: "jinoiylikni-istisno",
  category: "criminal",
  level: "mid",
  order: 11030,
  title: "Zaruriy mudofaa va boshqa istisno holatlar",
  desc:
    "Qilmishning jinoiyligini istisno qiladigan holatlar: zaruriy " +
    "mudofaa va uning chegarasi, oxirgi zarurat, jinoyatchini " +
    "ushlashda zarar yetkazish, buyruqni ijro etish, asosli " +
    "tavakkalchilik hamda majburlash.",
  objectives: [
    "Zaruriy mudofaa shartlarini aniq bilasiz",
    "Mudofaa chegarasidan chetga chiqish nima ekanini bilasiz",
    "Oxirgi zaruratning mudofaadan farqini bilasiz",
    "Jinoyatchini ushlashda zarar yetkazish qoidasini bilasiz",
    "Buyruqni ijro etish javobgarligini bilasiz",
    "Asosli tavakkalchilik shartlarini bilasiz",
  ],
  practicalSteps: [
    "Hujum bo'lsa avval imkon qadar chetlanishga harakat qiling",
    "O'zingizni himoya qilganingizdan keyin darhol yordam chaqiring",
    "Jarohatlaringizni tibbiy muassasada qayd ettiring",
    "Guvohlar ma'lumotini darhol yozib oling",
    "Qonunga xilof buyruqni bajarmang",
  ],
  sections: [
    {
      heading: "Istisno holatlar tushunchasi",
      text:
        "QILMISHNING JINOIYLIGINI ISTISNO " +
        "QILADIGAN HOLATLAR — rasman jinoyat " +
        "belgilariga ega, lekin jinoyat " +
        "hisoblanmaydigan qilmishlar.\n\n" +
        "⚠️ MOHIYATI: bu holatlarda qilmish " +
        "jamiyat uchun ZARARLI emas, " +
        "aksincha FOYDALI yoki hech " +
        "bo'lmasa oqlanadigan bo'ladi.\n\n" +
        "Shuning uchun ular \"jazodan " +
        "ozod qilish\" emas — jinoyatning " +
        "O'ZI yo'q.\n\n" +
        "Bu farq juda muhim: jinoyat " +
        "bo'lmasa, sudlanganlik ham, " +
        "jazo ham bo'lmaydi.\n\n" +
        "RO'YXAT: zaruriy mudofaa; oxirgi " +
        "zarurat; ijtimoiy xavfli qilmish " +
        "sodir etgan shaxsni ushlash " +
        "vaqtida zarar yetkazish; buyruq " +
        "yoki boshqa vazifani ijro etish; " +
        "kasb yoki xo'jalik faoliyatiga " +
        "bog'liq asosli tavakkalchilik; " +
        "jismoniy yoki ruhiy majburlash " +
        "yoxud qo'rqitish.\n\n" +
        "KAM AHAMIYATLI QILMISHLAR ham " +
        "shu bo'limda tartibga " +
        "solingan — ular ijtimoiy xavf " +
        "tug'dirmagani uchun jinoyat " +
        "hisoblanmaydi.\n\n" +
        "⚠️ AMALIY XULOSA: bu asoslar " +
        "AVTOMATIK qo'llanmaydi — " +
        "ularni KO'TARISH va " +
        "ASOSLASH kerak.\n\n" +
        "Shuning uchun holat " +
        "tafsilotlarini (kim boshladi, " +
        "qanday tahdid bor edi, " +
        "boshqa yo'l bormidi) aniq " +
        "va izchil bayon eting.",
      example:
        "Qilmish istisno holatida sodir " +
        "etilgan edi, lekin bu asos " +
        "ko'tarilmadi — u hisobga " +
        "olinmadi.",
      keyPoints: [
        "Bu holatlarda jinoyatning o'zi yo'q",
        "Jazodan ozod qilishdan farq qiladi",
        "Ro'yxat kodeksda belgilangan",
        "Asoslarni o'zingiz ko'tarishingiz kerak",
      ],
      warning:
        "Asosni ko'tarmaslik — himoyaning " +
        "eng kuchli vositasini yo'qotish.",
      lawRefs: [
        { code: "JK", article: "35" },
        { code: "JK", article: "36" },
      ],
    },
    {
      heading: "Zaruriy mudofaa",
      text:
        "ZARURIY MUDOFAA — shaxsning o'zini, " +
        "boshqa shaxsni, jamiyat yoki davlat " +
        "manfaatlarini ijtimoiy xavfli " +
        "tajovuzdan himoya qilishda " +
        "tajovuzchiga zarar yetkazishi.\n\n" +
        "⚠️ ENG MUHIM QOIDA: zaruriy mudofaa " +
        "HUQUQI har bir shaxsga tegishli — " +
        "davlat organlariga murojaat " +
        "qilish imkoniyati bo'lgan " +
        "taqdirda ham.\n\n" +
        "Ya'ni \"militsiyani chaqirish " +
        "kerak edi\" degan e'tiroz " +
        "mudofaa huquqini yo'q " +
        "qilmaydi.\n\n" +
        "SHARTLARI: tajovuz HAQIQIY " +
        "bo'lishi (xayoliy emas); " +
        "tajovuz DAVOM ETAYOTGAN " +
        "bo'lishi (tugamagan yoki " +
        "boshlanmagan emas); zarar " +
        "TAJOVUZCHIGA yetkazilishi " +
        "(uchinchi shaxsga emas).\n\n" +
        "⚠️ CHEGARADAN CHETGA CHIQISH — " +
        "ENG NOZIK MASALA: mudofaa " +
        "tajovuz xarakteriga va " +
        "xavfliligiga aniq MOS " +
        "KELMASA, bu chegaradan chetga " +
        "chiqish hisoblanadi.\n\n" +
        "Bunday holatda javobgarlik " +
        "saqlanadi, lekin u odatdagidan " +
        "sezilarli YENGILROQ bo'ladi " +
        "(masalan zaruriy mudofaa " +
        "chegarasidan chetga chiqib " +
        "sodir etilgan qilmishlar " +
        "uchun alohida, yengilroq " +
        "moddalar mavjud).\n\n" +
        "AMALIY QADAM HIMOYADA: " +
        "tajovuzning xarakterini " +
        "batafsil bayon eting — " +
        "tajovuzchi qurollangan " +
        "edimi, nechta odam edi, " +
        "qanday tahdid bor edi, " +
        "chetlanish imkoni " +
        "bormidi.\n\n" +
        "Bu tafsilotlar " +
        "mutanosiblikni baholashda " +
        "hal qiluvchi bo'ladi.\n\n" +
        "AMALIY MASLAHAT: " +
        "himoyalangandan keyin " +
        "DARHOL yordam chaqiring va " +
        "jarohatlaringizni tibbiy " +
        "muassasada qayd ettiring.",
      example:
        "Hujumdan himoyalanish paytida " +
        "tajovuzchiga zarar yetkazildi — " +
        "chegara buzilmagan bo'lsa jinoyat " +
        "yo'q.",
      keyPoints: [
        "Mudofaa huquqi hammaga tegishli",
        "Tajovuz haqiqiy va davom etayotgan bo'lishi kerak",
        "Zarar tajovuzchiga yetkazilishi lozim",
        "Chegaradan chetga chiqishda javobgarlik yengilroq",
      ],
      warning:
        "Tajovuz tugagandan keyingi harakat " +
        "mudofaa emas, o'ch olish " +
        "hisoblanadi.",
      lawRefs: [{ code: "JK", article: "37" }],
    },
    {
      heading: "Oxirgi zarurat va ushlashda zarar yetkazish",
      text:
        "OXIRGI ZARURAT — kattaroq xavfni " +
        "bartaraf etish uchun zarar " +
        "yetkazish.\n\n" +
        "⚠️ MUDOFAADAN ASOSIY FARQI: " +
        "mudofaada zarar TAJOVUZCHIGA " +
        "yetkaziladi; oxirgi zaruratda " +
        "esa BEGONA (aybsiz) shaxsga " +
        "yoki uning mulkiga.\n\n" +
        "SHARTLARI: xavf haqiqiy va " +
        "bevosita bo'lishi; uni boshqa " +
        "vositalar bilan bartaraf etib " +
        "bo'lmasligi; yetkazilgan zarar " +
        "oldini olingan zarardan KAM " +
        "bo'lishi.\n\n" +
        "AMALIY MISOL: yong'inni " +
        "to'xtatish uchun qo'shni " +
        "devorni buzish; halokatdan " +
        "qochish uchun boshqa " +
        "avtomobilga zarar " +
        "yetkazish.\n\n" +
        "⚠️ UCHINCHI SHART ENG MUHIMI: " +
        "yetkazilgan zarar " +
        "OLDINI OLINGAN zarardan " +
        "KO'P bo'lsa — bu oxirgi " +
        "zarurat emas.\n\n" +
        "IJTIMOIY XAVFLI QILMISH SODIR " +
        "ETGAN SHAXSNI USHLASH " +
        "VAQTIDA ZARAR YETKAZISH " +
        "ham istisno holat " +
        "hisoblanadi.\n\n" +
        "SHARTLARI: shaxs haqiqatda " +
        "ijtimoiy xavfli qilmish " +
        "sodir etgan bo'lishi; " +
        "ushlash uchun zarar " +
        "yetkazishdan boshqa yo'l " +
        "bo'lmasligi; zarar zarur " +
        "chegaradan " +
        "oshmasligi.\n\n" +
        "⚠️ CHEGARADAN CHETGA CHIQISH " +
        "bu yerda ham javobgarlikka " +
        "olib keladi — lekin " +
        "yengilroq moddalar " +
        "bo'yicha.\n\n" +
        "AMALIY XULOSA: jinoyatchini " +
        "ushlash — fuqaroning " +
        "huquqi, lekin bu \"o'zi " +
        "jazolash\" degani emas.\n\n" +
        "Ushlangan shaxsni darhol " +
        "vakolatli organga " +
        "topshirish kerak.",
      example:
        "Yong'inni to'xtatish uchun qo'shni " +
        "mulkiga zarar yetkazildi — bu " +
        "oxirgi zarurat bo'lishi mumkin.",
      keyPoints: [
        "Oxirgi zaruratda zarar begona shaxsga yetkaziladi",
        "Yetkazilgan zarar oldini olingandan kam bo'lishi kerak",
        "Jinoyatchini ushlashda zarar yetkazish ham istisno",
        "Ushlangan shaxsni darhol organga topshiring",
      ],
      warning:
        "Ushlash bahonasida jazolash — " +
        "alohida jinoyat hisoblanadi.",
      lawRefs: [
        { code: "JK", article: "38" },
        { code: "JK", article: "39" },
      ],
    },
    {
      heading: "Buyruq, tavakkalchilik va majburlash",
      text:
        "BUYRUQ YOKI BOSHQA VAZIFANI IJRO " +
        "ETISH: majburiy buyruqni ijro " +
        "etish chog'ida zarar yetkazgan " +
        "shaxs jinoiy javobgarlikka " +
        "tortilmaydi.\n\n" +
        "⚠️ LEKIN QAT'IY CHEKLOV BOR: " +
        "BILA TURIB QONUNGA XILOF " +
        "buyruqni ijro etgan shaxs " +
        "javobgarlikdan ozod " +
        "QILINMAYDI.\n\n" +
        "Ya'ni \"menga buyurdilar\" degan " +
        "dalil har doim ham himoya " +
        "emas.\n\n" +
        "AMALIY XULOSA: buyruq aniq " +
        "qonunga xilof bo'lsa — uni " +
        "BAJARMANG.\n\n" +
        "Bajarmaganlik uchun intizomiy " +
        "javobgarlik bo'lishi mumkin, " +
        "lekin bajarganlik uchun " +
        "JINOIY javobgarlik ancha " +
        "og'irroq.\n\n" +
        "Qonunga xilof buyruq " +
        "bergan shaxs ham javobgar " +
        "bo'ladi.\n\n" +
        "ASOSLI TAVAKKALCHILIK: kasb " +
        "yoki xo'jalik faoliyatiga " +
        "bog'liq asosli tavakkalchilik " +
        "chog'ida zarar yetkazish " +
        "jinoyat hisoblanmaydi.\n\n" +
        "SHARTLARI: maqsad ijtimoiy " +
        "foydali bo'lishi; maqsadga " +
        "tavakkalchiliksiz erishib " +
        "bo'lmasligi; zararning " +
        "oldini olish uchun yetarli " +
        "choralar ko'rilgan " +
        "bo'lishi.\n\n" +
        "⚠️ AMALIY QO'LLANISHI: bu " +
        "asos tibbiyot, ilmiy " +
        "tadqiqot va yangi " +
        "texnologiyalarni joriy " +
        "etishda muhim — aks holda " +
        "har qanday muvaffaqiyatsiz " +
        "yangilik jinoyatga " +
        "aylanardi.\n\n" +
        "JISMONIY YOKI RUHIY " +
        "MAJBURLASH YOXUD " +
        "QO'RQITISH ta'sirida " +
        "sodir etilgan qilmish " +
        "ham alohida tartibga " +
        "solingan.\n\n" +
        "Agar shaxs majburlash " +
        "tufayli o'z harakatlarini " +
        "boshqara olmagan bo'lsa, " +
        "javobgarlik yuzaga " +
        "kelmasligi mumkin.",
      example:
        "Aniq qonunga xilof buyruq " +
        "bajarildi — \"buyurdilar\" degan " +
        "dalil himoya bo'lmadi.",
      keyPoints: [
        "Majburiy buyruqni ijro etish istisno holat",
        "Bila turib qonunga xilof buyruq himoya emas",
        "Asosli tavakkalchilik shartlari qat'iy",
        "Majburlash ta'siridagi qilmish alohida baholanadi",
      ],
      warning:
        "Qonunga xilof buyruqni bajarish " +
        "sizni ham javobgar qiladi.",
      lawRefs: [
        { code: "JK", article: "40" },
        { code: "JK", article: "41" },
        { code: "JK", article: "41-1" },
      ],
    },
  ],
};

module.exports = { LESSON };
