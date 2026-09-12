"use strict";
/** MEHNAT MODULI — 6-DARS: ISH VAQTI. MK 181–200.
 *  Dam olish vaqti (201–212) 7-darsda. */

const LESSON = {
  key: "ish-vaqti",
  category: "labor",
  level: "basic",
  order: 6060,
  title: "Ish vaqti va uning rejimlari",
  desc:
    "Ish vaqtining turlari va davomiyligi, qisqartirilgan va " +
    "to'liqsiz ish vaqti, tungi hamda qo'shimcha ish qoidalari.",
  objectives: [
    "Ish vaqtining normal davomiyligini va chegaralarini bilasiz",
    "Qisqartirilgan va to'liqsiz ish vaqtini ajrata olasiz",
    "Tungi va ish vaqtidan tashqari ish qoidalarini bilasiz",
    "Ish vaqti rejimlari va hisobga olish tartibini tushunasiz",
  ],
  practicalSteps: [
    "Kirish-chiqish vaqtingizni o'zingiz ham yozib boring",
    "Ortiqcha ishlagan soatlarni oyma-oy hisoblab boring",
    "Tungi va qo'shimcha ish uchun oshirilgan haq to'langanini tekshiring",
    "Ish vaqti rejimi ichki hujjatda belgilanganini ko'ring",
  ],
  sections: [
    {
      heading: "Ish vaqti tushunchasi va turlari",
      text:
        "Ish vaqti — xodim mehnat " +
        "majburiyatlarini bajarishi lozim " +
        "bo'lgan vaqt.\n\n" +
        "Qonun uning turlarini ajratadi: " +
        "NORMAL davomiylik; QISQARTIRILGAN " +
        "davomiylik; TO'LIQSIZ ish " +
        "vaqti.\n\n" +
        "Bu uch tur bir-biridan jiddiy farq " +
        "qiladi — ayniqsa HAQ TO'LASH " +
        "jihatidan. Ularni chalkashtirish " +
        "xodim uchun bevosita moddiy " +
        "yo'qotish demakdir.\n\n" +
        "Har birining o'z asosi va tartibi " +
        "bor.",
      example:
        "Xodimga \"qisqartirilgan ish vaqti\" " +
        "deyildi, lekin haq mutanosib " +
        "kamaytirildi. Aslida bu to'liqsiz " +
        "ish vaqti edi — atamalar " +
        "chalkashtirilgan.",
      keyPoints: [
        "Ish vaqti — mehnat majburiyatlarini bajarish vaqti",
        "Uch turi bor: normal, qisqartirilgan va to'liqsiz",
        "Ular haq to'lash jihatidan farq qiladi",
        "Atamalarni chalkashtirish moddiy yo'qotishga olib keladi",
      ],
      warning:
        "Shartnomada qaysi tur " +
        "ko'rsatilganini aniq tekshiring.",
      lawRefs: [{ code: "MK", article: "181" }],
    },
    {
      heading: "Ish vaqtining normal davomiyligi",
      text:
        "Qonun ish vaqtining NORMAL " +
        "davomiyligini belgilaydi — bu eng " +
        "ko'p chegara.\n\n" +
        "⚠️ Bu chegara xodim uchun KAFOLAT: " +
        "undan ortiq ishlatish faqat " +
        "qonunda nazarda tutilgan tartibda " +
        "va QO'SHIMCHA HAQ to'lash bilan " +
        "mumkin.\n\n" +
        "Aniq davomiylik quyidagi qonun " +
        "matnida.\n\n" +
        "Har kungi ish (smena) davomiyligi " +
        "ham alohida moddada tartibga " +
        "solingan — u umumiy haftalik " +
        "normadan kelib chiqadi.",
      example:
        "Xodim har kuni normadan ikki soat " +
        "ortiq ishlaydi va bu oddiy " +
        "hisoblanadi. Aslida bu ish " +
        "vaqtidan tashqari ish va " +
        "oshirilgan haq talab qiladi.",
      keyPoints: [
        "Normal davomiylik eng ko'p chegara hisoblanadi",
        "Undan ortiq ishlash alohida tartib talab qiladi",
        "Qo'shimcha haq to'lanishi shart",
        "Har kungi ish davomiyligi ham belgilangan",
      ],
      warning:
        "\"Bizda hamma shunday ishlaydi\" " +
        "degan dalil qonuniy asos emas.",
      lawRefs: [
        { code: "MK", article: "182" },
        { code: "MK", article: "185" },
      ],
    },
    {
      heading: "Qisqartirilgan ish vaqti",
      text:
        "QISQARTIRILGAN ish vaqti QONUN " +
        "bilan belgilanadi va ish haqi " +
        "TO'LIQ to'lanadi.\n\n" +
        "U ayrim toifadagi xodimlarga " +
        "beriladi: voyaga yetmaganlar; " +
        "nogironligi bo'lgan shaxslar; " +
        "zararli yoki xavfli sharoitda " +
        "ishlovchilar; ishi yuqori darajadagi " +
        "ruhiy, aqliy va asabiy zo'riqish " +
        "bilan bog'liq xodimlar.\n\n" +
        "⚠️ ENG MUHIM: qisqartirilgan ish " +
        "vaqtida haq KAMAYTIRILMAYDI. Bu " +
        "imtiyoz, jazo emas.",
      example:
        "I guruh nogironligi bo'lgan xodimga " +
        "qisqartirilgan ish vaqti belgilandi, " +
        "lekin ish haqi mutanosib " +
        "kamaytirildi. Bu xato.",
      keyPoints: [
        "Qisqartirilgan ish vaqti qonun bilan belgilanadi",
        "Ish haqi to'liq to'lanadi",
        "U ayrim toifadagi xodimlarga beriladi",
        "Bu imtiyoz, haqni kamaytirish asosi emas",
      ],
      warning:
        "Qisqartirilgan ish vaqtida haq " +
        "kamaytirilsa bu ish haqini to'liq " +
        "to'lamaslik hisoblanadi.",
      lawRefs: [
        { code: "MK", article: "183" },
        { code: "MK", article: "184" },
      ],
    },
    {
      heading: "To'liqsiz ish vaqti",
      text:
        "TO'LIQSIZ ish vaqti tomonlarning " +
        "KELISHUVI bilan belgilanadi va haq " +
        "ishlangan vaqtga MUTANOSIB " +
        "to'lanadi.\n\n" +
        "Ya'ni qisqartirilgan ish vaqtidan " +
        "farqli o'laroq, bu yerda kamroq " +
        "ishlab kamroq olasiz.\n\n" +
        "⚠️ MUHIM KAFOLAT: to'liqsiz ish " +
        "vaqti ta'til davomiyligini va ish " +
        "stajini KAMAYTIRMAYDI.\n\n" +
        "Ayrim toifadagi xodimlar talabiga " +
        "ko'ra ish beruvchi to'liqsiz ish " +
        "vaqtini belgilashi SHART — " +
        "masalan homilador ayollar va " +
        "kichik bolali xodimlar.",
      example:
        "Kichik bolasi bor xodim to'liqsiz " +
        "ish vaqtini so'radi va rad javobi " +
        "oldi. Belgilangan toifaga kirsa " +
        "ish beruvchi buni ta'minlashi " +
        "shart.",
      keyPoints: [
        "To'liqsiz ish vaqti kelishuv bilan belgilanadi",
        "Haq ishlangan vaqtga mutanosib to'lanadi",
        "Ta'til va stajni kamaytirmaydi",
        "Ayrim toifalar talabiga ko'ra belgilanishi shart",
      ],
      warning:
        "To'liqsiz stavkaga rozi bo'lishdan " +
        "oldin daromadingiz qancha " +
        "kamayishini hisoblang.",
      lawRefs: [
        { code: "MK", article: "186" },
        { code: "MK", article: "398" },
      ],
    },
    {
      heading: "Bayram arafasidagi va tungi ish",
      text:
        "Ishlanmaydigan bayram kunlari " +
        "ARAFASIDAGI ish davomiyligi " +
        "QISQARTIRILADI — bu alohida " +
        "moddada belgilangan.\n\n" +
        "TUNGI vaqtdagi ish ham alohida " +
        "tartibga solinadi: uning " +
        "davomiyligi odatda qisqartiriladi " +
        "va u OSHIRILGAN miqdorda " +
        "to'lanadi.\n\n" +
        "⚠️ Ayrim toifadagi xodimlarni " +
        "tungi ishga jalb etish " +
        "TAQIQLANADI yoki faqat ularning " +
        "YOZMA roziligi bilan mumkin — " +
        "homilador ayollar, kichik bolali " +
        "shaxslar, voyaga yetmaganlar, " +
        "nogironligi bo'lgan xodimlar.",
      example:
        "Kichik bolasi bor xodim tungi " +
        "smenaga qo'yildi, yozma roziligi " +
        "olinmadi. Bu qonunga zid.",
      keyPoints: [
        "Bayram arafasidagi ish qisqartiriladi",
        "Tungi ish davomiyligi qisqartiriladi",
        "Tungi mehnat oshirilgan haq bilan to'lanadi",
        "Ayrim toifalarni jalb etish taqiqlanadi yoki rozilik talab qiladi",
      ],
      warning:
        "Tungi ish uchun oshirilgan haq " +
        "to'lanmasa bu huquqbuzarlik.",
      lawRefs: [
        { code: "MK", article: "187" },
        { code: "MK", article: "188" },
        { code: "MK", article: "264" },
      ],
    },
    {
      heading: "Ish vaqtidan tashqari ish",
      text:
        "Belgilangan ish vaqtidan ortiq " +
        "ishlash — ish vaqtidan tashqari " +
        "ish va u ALOHIDA qoidalarga " +
        "bo'ysunadi.\n\n" +
        "Birinchi qoida: bunday ishga jalb " +
        "etish odatda xodimning ROZILIGI " +
        "bilan amalga oshiriladi (qonunda " +
        "istisno hollar ham bor).\n\n" +
        "Ikkinchi qoida: uning ENG KO'P " +
        "davomiyligi CHEKLANGAN — kunlik " +
        "va yillik chegaralar mavjud.\n\n" +
        "Uchinchi qoida: u OSHIRILGAN " +
        "miqdorda to'lanadi.\n\n" +
        "⚠️ Pul o'rniga dam olish kuni " +
        "berish faqat qonunda nazarda " +
        "tutilgan tartibda va rozilik " +
        "bilan mumkin.",
      example:
        "Xodim oyiga muntazam 40 soat " +
        "ortiqcha ishlaydi, haq esa oddiy " +
        "miqdorda. Ikki buzilish: chegara " +
        "oshirilgan va oshirilgan haq " +
        "to'lanmagan.",
      keyPoints: [
        "Jalb etish odatda xodim roziligi bilan bo'ladi",
        "Kunlik va yillik chegaralar belgilangan",
        "Oshirilgan miqdorda haq to'lanadi",
        "Pul o'rniga dam olish faqat rozilik bilan almashtiriladi",
      ],
      warning:
        "Ortiqcha ishlagan soatlaringizni " +
        "o'zingiz yozib boring — tabel " +
        "yuritilmasa bu yagona " +
        "dalilingiz.",
      lawRefs: [
        { code: "MK", article: "189" },
        { code: "MK", article: "190" },
        { code: "MK", article: "262" },
      ],
    },
    {
      heading: "Ish vaqti rejimi tushunchasi",
      text:
        "Ish vaqti REJIMI — ish qachon " +
        "boshlanishi va tugashi, " +
        "tanaffuslar, smenalar va dam " +
        "olish kunlarining tartibi.\n\n" +
        "U ichki mehnat tartibi qoidalari, " +
        "jamoa shartnomasi yoki mehnat " +
        "shartnomasi bilan " +
        "belgilanadi.\n\n" +
        "⚠️ Rejim va DAVOMIYLIK — turli " +
        "narsa. Davomiylik qancha " +
        "ishlashni, rejim esa qachon " +
        "ishlashni belgilaydi.\n\n" +
        "Rejim shartnomada ko'rsatilishi " +
        "kerak bo'lgan majburiy " +
        "shartlardan biri.",
      example:
        "Xodim ishga kirdi, lekin ish " +
        "boshlanish va tugash vaqti hech " +
        "qayerda yozilmagan. Bu majburiy " +
        "shartning yo'qligi.",
      keyPoints: [
        "Rejim ish qachon boshlanib tugashini belgilaydi",
        "U ichki hujjat yoki shartnomada belgilanadi",
        "Rejim va davomiylik turli tushunchalar",
        "Rejim shartnomaning majburiy sharti",
      ],
      warning:
        "Rejim yozilmagan bo'lsa ish " +
        "beruvchi uni istagancha " +
        "o'zgartirishi mumkin bo'lib " +
        "qoladi.",
      lawRefs: [{ code: "MK", article: "191" }],
    },
    {
      heading: "Smenali va moslashuvchan ish rejimi",
      text:
        "Qonun bir necha maxsus rejimni " +
        "nazarda tutadi.\n\n" +
        "SMENALI ish — ishlab chiqarish " +
        "uzluksiz bo'lganda qo'llaniladi. " +
        "Smenalar jadvali oldindan " +
        "tuziladi va xodimlar u bilan " +
        "tanishtiriladi.\n\n" +
        "MOSLASHUVCHAN rejim — ish " +
        "boshlanish va tugash vaqti " +
        "o'zgaruvchan bo'lishi mumkin, " +
        "lekin umumiy norma " +
        "bajariladi.\n\n" +
        "Ish kuni QISMLARGA BO'LINGAN " +
        "rejim ham alohida moddada " +
        "tartibga solingan.\n\n" +
        "⚠️ Ketma-ket ikki smenada " +
        "ishlash odatda taqiqlanadi.",
      example:
        "Xodim kechki smenani tugatib " +
        "darhol tungi smenaga qoldirildi. " +
        "Ketma-ket ikki smenada ishlash " +
        "taqiqlanadi.",
      keyPoints: [
        "Smenali ish uzluksiz ishlab chiqarishda qo'llaniladi",
        "Smenalar jadvali oldindan tuziladi",
        "Moslashuvchan rejimda vaqt o'zgaruvchan bo'ladi",
        "Ketma-ket ikki smenada ishlash taqiqlanadi",
      ],
      warning:
        "Smenalar jadvali bilan oldindan " +
        "tanishtirilishingiz shart.",
      lawRefs: [
        { code: "MK", article: "192" },
        { code: "MK", article: "193" },
        { code: "MK", article: "194" },
      ],
    },
    {
      heading: "Xizmat safari va alohida toifalar rejimi",
      text:
        "Ish vaqti rejimi ayrim holatlarda " +
        "o'ziga xos bo'ladi.\n\n" +
        "XIZMAT SAFARIDAGI ish vaqti rejimi " +
        "alohida moddada tartibga " +
        "solingan.\n\n" +
        "Xodim BOSHQA ISH BERUVCHIGA " +
        "vaqtincha xizmat safariga " +
        "yuborilganda rejim yana boshqacha " +
        "belgilanadi.\n\n" +
        "AYRIM TOIFADAGI xodimlar (masalan " +
        "transport, aloqa, tibbiyot " +
        "sohasi) uchun ham o'ziga xos " +
        "xususiyatlar nazarda " +
        "tutilgan.\n\n" +
        "⚠️ Bu o'ziga xosliklar qonun " +
        "kafolatlarini bekor qilmaydi — " +
        "ular faqat tartibni moslashtiradi.",
      example:
        "Xodim xizmat safarida edi va " +
        "\"safar vaqti hisoblanmaydi\" " +
        "deyildi. Safar davri uchun " +
        "alohida qoidalar mavjud.",
      keyPoints: [
        "Xizmat safarida rejim alohida tartibga solingan",
        "Boshqa ish beruvchiga yuborilganda rejim boshqacha",
        "Ayrim toifalar uchun o'ziga xosliklar bor",
        "O'ziga xoslik qonun kafolatlarini bekor qilmaydi",
      ],
      warning:
        "Xizmat safari davri uchun to'lov " +
        "va kompensatsiya alohida " +
        "hisoblanadi — ularni talab " +
        "qiling.",
      lawRefs: [
        { code: "MK", article: "195" },
        { code: "MK", article: "196" },
        { code: "MK", article: "197" },
      ],
    },
    {
      heading: "Ish vaqtini hisobga olish",
      text:
        "⚠️ Bu — xodim uchun eng muhim " +
        "amaliy mavzulardan biri.\n\n" +
        "Ish vaqtini hisobga olish " +
        "tushunchasi va turlari qonunda " +
        "belgilangan: kunlik, haftalik va " +
        "JAMLAB hisobga olish.\n\n" +
        "Jamlab hisobga olish uzluksiz " +
        "ishlab chiqarishda qo'llaniladi: " +
        "norma bir kun emas, hisob davri " +
        "bo'yicha bajariladi.\n\n" +
        "⚠️ ISH BERUVCHINING MAJBURIYATI: " +
        "u ish vaqtini hisobga olishni " +
        "TASHKIL ETISHI shart.\n\n" +
        "Hisob yuritilmasa xodim qancha " +
        "ishlaganini isbotlay olmaydi va " +
        "qo'shimcha ish uchun haq talab " +
        "qila olmaydi.",
      example:
        "Xodim har kuni ikki soat ortiqcha " +
        "qoladi, lekin tabel yuritilmaydi. " +
        "Nizoda u ortiqcha ishlaganini " +
        "isbotlay olmadi.",
      keyPoints: [
        "Hisobga olish kunlik, haftalik va jamlab bo'ladi",
        "Jamlab hisobga olishda norma hisob davri bo'yicha bajariladi",
        "Hisobni tashkil etish — ish beruvchining majburiyati",
        "Hisob yo'q bo'lsa xodim ortiqcha ishni isbotlay olmaydi",
      ],
      warning:
        "O'zingizning kirish-chiqish " +
        "vaqtingizni yozib boring — bu " +
        "keyinchalik yagona " +
        "dalilingiz bo'lishi mumkin.",
      lawRefs: [
        { code: "MK", article: "198" },
        { code: "MK", article: "200" },
      ],
    },
  ],
};

module.exports = { LESSON };
