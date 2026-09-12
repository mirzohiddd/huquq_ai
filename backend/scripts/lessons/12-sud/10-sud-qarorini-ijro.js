"use strict";
/**
 * SUD MODULI — 10-DARS: SUD QARORINI IJRO ETISH.
 * FPK 355–372, 440–462.
 */

const LESSON = {
  key: "sud-qarorini-ijro",
  category: "process",
  level: "mid",
  order: 12100,
  title: "Sud qarorini ijro etish",
  desc:
    "Ijro varaqasi va uni olish, ijroga taqdim etish muddatlari, " +
    "ijroni kechiktirish va bo'lib ijro etish, ijro ishini " +
    "to'xtatish, qaytarma ijro, hakamlik va chet el qarorlarini " +
    "ijroga qaratish hamda yangi holatlar bo'yicha qayta ko'rish.",
  objectives: [
    "Ijro varaqasini qanday olishni bilasiz",
    "Ijroga taqdim etish muddatini bilasiz",
    "Muddat o'tsa nima qilishni bilasiz",
    "Ijroni kechiktirish imkonini bilasiz",
    "Qaytarma ijro nima ekanini bilasiz",
    "Yangi holatlar bo'yicha qayta ko'rishni bilasiz",
  ],
  practicalSteps: [
    "Qaror kuchga kirgach darhol ijro varaqasini oling",
    "Ijro varaqasini muddat ichida ijro organiga bering",
    "Qarzdorning mol-mulki haqidagi ma'lumotni ijrochiga taqdim eting",
    "Ijro yurishini muntazam nazorat qiling",
    "To'lay olmasangiz kechiktirishni yoki bo'lib to'lashni so'rang",
  ],
  sections: [
    {
      heading: "Ijro varaqasi: qarorni ishga solish",
      text:
        "SUD HUJJATLARINI IJROGA QARATISH — " +
        "butun sud jarayonining yakuniy va " +
        "eng amaliy bosqichi.\n\n" +
        "⚠️ ENG MUHIM HAQIQAT: sud qarori " +
        "O'Z-O'ZIDAN IJRO ETILMAYDI.\n\n" +
        "Ko'p odam qarorni olib, uni " +
        "\"g'alaba\" deb hisoblaydi va " +
        "keyingi qadamni qilmaydi.\n\n" +
        "Natijada qaror qog'ozda qoladi " +
        "va hech narsa undirilmaydi.\n\n" +
        "IJRO VARAQASI — qarorni majburiy " +
        "ijro etish uchun asos " +
        "bo'ladigan hujjat.\n\n" +
        "BERISH: ijro varaqasi qaror " +
        "qonuniy kuchga kirgach " +
        "beriladi.\n\n" +
        "AMALIY QADAM: qaror kuchga " +
        "kirganini tekshiring va DARHOL " +
        "ijro varaqasi berishni " +
        "so'rang.\n\n" +
        "SUD TOMONIDAN YUBORISH: qonunda " +
        "nazarda tutilgan hollarda sud " +
        "ijro varaqasini o'zi ijro " +
        "organiga yuboradi.\n\n" +
        "DUBLIKAT: ijro varaqasi yoki " +
        "sud buyrug'i YO'QOLSA, " +
        "DUBLIKAT berilishi mumkin.\n\n" +
        "⚠️ BU MUHIM: varaqani " +
        "yo'qotish hamma narsani " +
        "yo'qotish degani emas — " +
        "dublikat so'rang.\n\n" +
        "AMALIY XULOSA: ijro " +
        "varaqasini olgach uni " +
        "IJRO ORGANIGA taqdim eting " +
        "va arizada qarzdor haqida " +
        "bilgan barcha ma'lumotni " +
        "yozing — ish joyi, bank " +
        "hisobi, mol-mulki, " +
        "transporti.\n\n" +
        "Ijrochi bu ma'lumotni " +
        "o'zi qidiradi, lekin " +
        "sizning ma'lumotingiz " +
        "jarayonni sezilarli " +
        "tezlashtiradi.",
      example:
        "Qaror olindi, lekin ijro varaqasi " +
        "so'ralmadi — undiruv umuman " +
        "boshlanmadi.",
      keyPoints: [
        "Sud qarori o'z-o'zidan ijro etilmaydi",
        "Ijro varaqasi qaror kuchga kirgach beriladi",
        "Yo'qolgan varaqaning dublikati beriladi",
        "Qarzdor haqidagi ma'lumotni ijrochiga bering",
      ],
      warning:
        "Ijro varaqasini olmaslik — butun " +
        "sud jarayonini behuda qiladi.",
      lawRefs: [
        { code: "FPK", article: "446" },
        { code: "FPK", article: "447" },
        { code: "FPK", article: "448" },
        { code: "FPK", article: "449" },
        { code: "FPK", article: "450" },
      ],
    },
    {
      heading: "Ijroga taqdim etish muddatlari",
      text:
        "IJRO VARAQASINI IJROGA TAQDIM " +
        "ETISH MUDDATI qonunda " +
        "belgilangan.\n\n" +
        "⚠️ MUDDAT O'TSA — IJRO VARAQASI " +
        "IJROGA QABUL QILINMAYDI.\n\n" +
        "Ya'ni yutgan ishingiz bor, " +
        "lekin uni ijro ettirish " +
        "imkoni yo'qoladi.\n\n" +
        "Bu eng achinarli holatlardan " +
        "biri va u ko'pincha oddiy " +
        "e'tiborsizlik tufayli yuzaga " +
        "keladi.\n\n" +
        "MUDDATNING UZILISHI: muddat " +
        "qonunda ko'rsatilgan " +
        "harakatlar bilan UZILADI — " +
        "masalan ijro varaqasi ijroga " +
        "taqdim etilganda yoki " +
        "qarzdor qisman ijro " +
        "etganda.\n\n" +
        "⚠️ AMALIY MA'NOSI: uzilishdan " +
        "keyin muddat QAYTADAN " +
        "boshlanadi.\n\n" +
        "Shuning uchun qarzdordan " +
        "qisman to'lov olsangiz — buni " +
        "hujjatlashtiring, u muddatni " +
        "yangilaydi.\n\n" +
        "MUDDATNI TIKLASH: o'tkazib " +
        "yuborilgan muddat UZRLI " +
        "sabab bo'lganda " +
        "TIKLANADI.\n\n" +
        "AMALIY QADAM: muddatni " +
        "o'tkazib yuborsangiz DARHOL " +
        "tiklash to'g'risida ariza " +
        "bering va uzrli sababni " +
        "hujjat bilan " +
        "tasdiqlang — kasallik, " +
        "safar, qarzdorni topib " +
        "bo'lmagani.\n\n" +
        "IJRO VARAQASINI QAYTARIB " +
        "OLISH va yangi ijro " +
        "varaqasi berish ham " +
        "nazarda tutilgan.\n\n" +
        "AMALIY MASLAHAT: ijro " +
        "varaqasini olgach uni " +
        "\"keyinroq beraman\" deb " +
        "qoldirmang.\n\n" +
        "Muddat oyma-oy o'tadi va " +
        "qarzdorning mol-mulki ham " +
        "shu davrda kamayib " +
        "boradi.",
      example:
        "Ijro varaqasi yillar davomida " +
        "berilmadi — muddat o'tib, undirish " +
        "imkoni yo'qoldi.",
      keyPoints: [
        "Ijroga taqdim etish muddati belgilangan",
        "Muddat o'tsa varaqa qabul qilinmaydi",
        "Qisman ijro muddatni uzadi",
        "Uzrli sabab bo'lsa muddat tiklanadi",
      ],
      warning:
        "Ijro varaqasini kechiktirish — uni " +
        "butunlay yo'qotish xavfi.",
      lawRefs: [
        { code: "FPK", article: "451" },
        { code: "FPK", article: "452" },
        { code: "FPK", article: "453" },
        { code: "FPK", article: "457" },
      ],
    },
    {
      heading: "Ijroni kechiktirish va to'xtatish",
      text:
        "Ijro jarayoni har doim ham to'xtovsiz " +
        "kechmaydi.\n\n" +
        "⚠️ QARZDOR UCHUN MUHIM IMKONIYAT: " +
        "hal qiluv qarorining ijrosini " +
        "KECHIKTIRISH yoki uni " +
        "BO'LIB-BO'LIB ijro etish, " +
        "shuningdek ijro etish USULI va " +
        "TARTIBINI o'zgartirish " +
        "mumkin.\n\n" +
        "AMALIY MA'NOSI: agar siz " +
        "qarzdor bo'lsangiz va butun " +
        "summani bir yo'la to'lay " +
        "olmasangiz — sudga ariza " +
        "bering.\n\n" +
        "Arizada moliyaviy " +
        "ahvolingizni hujjat bilan " +
        "asoslang va aniq to'lov " +
        "jadvalini taklif qiling.\n\n" +
        "Bu \"qochish\" emas — " +
        "aksincha, vijdonli " +
        "yondashuv va u odatda " +
        "ijobiy qabul qilinadi.\n\n" +
        "Aks holda undiruv majburiy " +
        "va ancha og'irroq shaklda " +
        "amalga oshiriladi.\n\n" +
        "IJRO ISHINI YURITISHNI " +
        "TO'XTATIB TURISH va " +
        "TUGATISH asoslari qonunda " +
        "belgilangan.\n\n" +
        "IJRO ISHINI YURITISH " +
        "TIKLANADI — asos yo'qolgach " +
        "jarayon davom etadi.\n\n" +
        "⚠️ KREDITOR UCHUN AMALIY " +
        "MASLAHAT: ijro yurishini " +
        "MUNTAZAM nazorat qiling.\n\n" +
        "Ijrochidan ish holati " +
        "haqida ma'lumot so'rang, " +
        "qarzdorning yangi mol-mulki " +
        "haqida bilsangiz " +
        "xabar bering.\n\n" +
        "Passiv kutish — ijro " +
        "jarayonining " +
        "cho'zilishining eng " +
        "keng tarqalgan sababi.\n\n" +
        "YO'QOLGAN IJRO ISHINI " +
        "YURITISHNI TIKLASH ham " +
        "nazarda tutilgan.",
      example:
        "Qarzdor to'lov jadvalini taklif " +
        "qildi — ijro bo'lib-bo'lib amalga " +
        "oshirildi.",
      keyPoints: [
        "Ijroni kechiktirish va bo'lib ijro etish mumkin",
        "Moliyaviy ahvolni hujjat bilan asoslang",
        "Ijro ishi to'xtatilishi va tiklanishi mumkin",
        "Kreditor ijro yurishini nazorat qilishi kerak",
      ],
      warning:
        "Passiv kutish ijro jarayonini " +
        "cho'zadi.",
      lawRefs: [
        { code: "FPK", article: "454" },
        { code: "FPK", article: "455" },
        { code: "FPK", article: "456" },
        { code: "FPK", article: "462" },
      ],
    },
    {
      heading: "Qaytarma ijro",
      text:
        "QAYTARMA IJRO — kam ma'lum, lekin " +
        "juda muhim institut.\n\n" +
        "⚠️ MOHIYATI: agar qaror ijro " +
        "etilgan bo'lsa-yu, keyinchalik u " +
        "BEKOR QILINSA — undirilgan " +
        "narsa QAYTARILADI.\n\n" +
        "Ya'ni qaror bo'yicha to'lagan " +
        "pulingiz, olib qo'yilgan " +
        "mol-mulkingiz sizga " +
        "qaytariladi.\n\n" +
        "AMALIY MA'NOSI QARZDORGA: " +
        "qaror ijro etilib bo'lgani " +
        "shikoyat qilishdan voz " +
        "kechish uchun sabab " +
        "emas.\n\n" +
        "Shikoyat qiling — qaror " +
        "bekor qilinsa qaytarma ijro " +
        "orqali undirilgan narsani " +
        "qaytarib olasiz.\n\n" +
        "HAL QILISH TARTIBI: qaytarma " +
        "ijro to'g'risidagi masala " +
        "BIRINCHI INSTANSIYA sudi " +
        "tomonidan hal qilinadi.\n\n" +
        "Shuningdek uni apellyatsiya, " +
        "kassatsiya yoki taftish " +
        "instansiyasi sudi ham hal " +
        "qilishi mumkin.\n\n" +
        "⚠️ ALOHIDA TOIFADAGI ISHLAR " +
        "bo'yicha qaytarma ijroning " +
        "o'ziga xos jihatlari " +
        "belgilangan.\n\n" +
        "Bu odatda ijtimoiy " +
        "xarakterdagi to'lovlarga " +
        "tegishli — masalan " +
        "aliment yoki ish haqi " +
        "bo'yicha undirilgan " +
        "summalar ayrim hollarda " +
        "qaytarilmaydi.\n\n" +
        "AMALIY QADAM: qaror bekor " +
        "qilingach qaytarma ijro " +
        "to'g'risida ARIZA bering — " +
        "u avtomatik amalga " +
        "oshirilmaydi.\n\n" +
        "Arizada nima " +
        "undirilgani va uni " +
        "tasdiqlovchi hujjatlarni " +
        "ko'rsating.",
      example:
        "Qaror ijro etilgach bekor " +
        "qilindi — qaytarma ijro orqali " +
        "summa qaytarildi.",
      keyPoints: [
        "Bekor qilingan qaror bo'yicha undirilgan narsa qaytariladi",
        "Ijro etilgani shikoyatdan voz kechish sababi emas",
        "Masala birinchi instansiya sudida hal qilinadi",
        "Qaytarma ijro uchun ariza berish kerak",
      ],
      warning:
        "Ayrim toifadagi to'lovlar " +
        "qaytarilmasligi mumkin.",
      lawRefs: [
        { code: "FPK", article: "458" },
        { code: "FPK", article: "459" },
        { code: "FPK", article: "460" },
        { code: "FPK", article: "461" },
      ],
    },
    {
      heading: "Hakamlik va chet el qarorlarini ijroga qaratish",
      text:
        "HAKAMLIK SUDI QARORI davlat sudi " +
        "orqali majburiy ijro etilishi " +
        "mumkin.\n\n" +
        "Buning uchun IJRO VARAQASI berish " +
        "to'g'risida ariza beriladi.\n\n" +
        "Arizaning shakli, mazmuni va uni " +
        "ko'rib chiqish tartibi " +
        "belgilangan.\n\n" +
        "⚠️ RAD ETISH ASOSLARI ham " +
        "belgilangan — masalan hakamlik " +
        "kelishuvi haqiqiy emasligi yoki " +
        "tomon tegishli tarzda xabardor " +
        "qilinmagani.\n\n" +
        "MEDIATIV KELISHUV ham majburiy " +
        "ijro etish uchun ijro varaqasi " +
        "olish orqali " +
        "kuchaytirilishi mumkin.\n\n" +
        "AMALIY MA'NOSI: mediatsiya " +
        "orqali erishilgan kelishuv " +
        "shunchaki \"og'zaki va'da\" " +
        "emas — u sud orqali " +
        "majburiy ijro etilishi " +
        "mumkin.\n\n" +
        "Bu mediatsiyani ancha " +
        "jiddiy vositaga " +
        "aylantiradi.\n\n" +
        "CHET DAVLAT SUDLARI VA " +
        "ARBITRAJLARINING qarorlari " +
        "TAN OLINADI va IJROGA " +
        "QARATILADI.\n\n" +
        "Ariza berish, uning shakli " +
        "va mazmuni, ilova " +
        "hujjatlar, qaytarish va " +
        "ko'rib chiqish tartibi " +
        "belgilangan.\n\n" +
        "⚠️ RAD ETISH ASOSLARI: chet " +
        "el qarorini tan olish va " +
        "ijroga qaratish qonunda " +
        "ko'rsatilgan asoslarda rad " +
        "etilishi mumkin.\n\n" +
        "CHET EL FUQAROLARI VA " +
        "TASHKILOTLARINING " +
        "protsessual huquqlari " +
        "kafolatlangan — ular " +
        "milliy shaxslar bilan teng " +
        "huquqlarga ega.\n\n" +
        "AMALIY XULOSA: xalqaro " +
        "shartnoma tuzayotganda " +
        "nizolarni hal qilish " +
        "bandini diqqat bilan " +
        "yozing — qaysi sud yoki " +
        "arbitraj, qaysi huquq " +
        "qo'llaniladi va qaror " +
        "qayerda ijro etiladi.",
      example:
        "Mediativ kelishuv bo'yicha ijro " +
        "varaqasi olindi — u majburiy ijro " +
        "etildi.",
      keyPoints: [
        "Hakamlik qarori ijro varaqasi orqali ijro etiladi",
        "Mediativ kelishuv ham majburiy ijro etilishi mumkin",
        "Chet el qarorlari tan olinadi va ijroga qaratiladi",
        "Rad etish asoslari qonunda belgilangan",
      ],
      warning:
        "Xalqaro shartnomada nizo bandini " +
        "noaniq yozish — qarorni ijro " +
        "ettirishni imkonsiz qilishi mumkin.",
      lawRefs: [
        { code: "FPK", article: "355" },
        { code: "FPK", article: "356" },
        { code: "FPK", article: "357" },
        { code: "FPK", article: "358" },
        { code: "FPK", article: "358-1" },
        { code: "FPK", article: "358-3" },
        { code: "FPK", article: "359" },
        { code: "FPK", article: "364" },
        { code: "FPK", article: "365" },
        { code: "FPK", article: "366" },
        { code: "FPK", article: "369" },
        { code: "FPK", article: "370" },
        { code: "FPK", article: "372" },
      ],
    },
    {
      heading: "Yangi holatlar bo'yicha qayta ko'rish",
      text:
        "Ba'zan qaror qonuniy kuchga kirgach " +
        "YANGI holatlar aniqlanadi.\n\n" +
        "⚠️ BUNDAY HOLATDA SUD HUJJATINI " +
        "QAYTA KO'RISH mumkin — bu " +
        "apellyatsiya yoki kassatsiyadan " +
        "ALOHIDA yo'l.\n\n" +
        "TIPIK ASOSLAR: ish uchun " +
        "ahamiyatga ega, lekin " +
        "arizachiga ma'lum bo'lmagan va " +
        "ma'lum bo'lishi mumkin " +
        "bo'lmagan holatlar; guvohning " +
        "yolg'on ko'rsatuvi yoki " +
        "ekspertning bila turib soxta " +
        "xulosasi; hujjatlarning " +
        "qalbakiligi; qarorga asos " +
        "bo'lgan boshqa sud hujjatining " +
        "bekor qilinishi.\n\n" +
        "AMALIY MA'NOSI: agar qaror " +
        "chiqarilgandan keyin siz " +
        "yangi hujjat topsangiz yoki " +
        "guvoh yolg'on aytgani " +
        "aniqlansa — bu qayta ko'rish " +
        "uchun asos bo'ladi.\n\n" +
        "⚠️ MUHIM CHEKLOV: bu \"men " +
        "yangi dalil topdim\" degan " +
        "har qanday holat emas.\n\n" +
        "Holat ARIZACHIGA MA'LUM " +
        "BO'LMAGAN va ma'lum " +
        "bo'lishi MUMKIN BO'LMAGAN " +
        "bo'lishi kerak.\n\n" +
        "Ya'ni siz uni topishingiz " +
        "mumkin bo'lgan-u, lekin " +
        "qidirmagan bo'lsangiz — bu " +
        "asos emas.\n\n" +
        "ARIZA BERISH MUDDATI " +
        "hisoblanadi va u odatda " +
        "holat aniqlangan kundan " +
        "boshlanadi.\n\n" +
        "ARIZANING SHAKLI VA " +
        "MAZMUNI belgilangan; ariza " +
        "ko'rib chiqiladi va " +
        "natijasi bo'yicha AJRIM " +
        "chiqariladi.\n\n" +
        "Ajrim ustidan SHIKOYAT " +
        "qilish mumkin.\n\n" +
        "⚠️ QANOATLANTIRISH " +
        "OQIBATLARI: ariza " +
        "qanoatlantirilsa oldingi " +
        "sud hujjati bekor " +
        "qilinadi va ish qayta " +
        "ko'riladi.\n\n" +
        "AMALIY QADAM: yangi holat " +
        "aniqlansa DARHOL harakat " +
        "qiling — muddat qisqa va " +
        "u holat aniqlangan " +
        "kundan hisoblanadi.",
      example:
        "Guvohning yolg'on ko'rsatuvi " +
        "aniqlandi — qaror qayta ko'rish " +
        "uchun asos yuzaga keldi.",
      keyPoints: [
        "Yangi holatlar bo'yicha qayta ko'rish alohida yo'l",
        "Holat ma'lum bo'lishi mumkin bo'lmagan bo'lishi kerak",
        "Muddat holat aniqlangan kundan hisoblanadi",
        "Qanoatlantirilsa oldingi hujjat bekor qilinadi",
      ],
      warning:
        "\"Qidirmaganim uchun bilmadim\" " +
        "degan holat asos bo'lmaydi.",
      lawRefs: [
        { code: "FPK", article: "440" },
        { code: "FPK", article: "441" },
        { code: "FPK", article: "442" },
        { code: "FPK", article: "443" },
        { code: "FPK", article: "444" },
        { code: "FPK", article: "445" },
      ],
    },
  ],
};

module.exports = { LESSON };
