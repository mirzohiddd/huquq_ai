"use strict";
/** MAXSUS MODUL — 6-DARS: AVIATSIYA XAVFSIZLIGI.
 *  HK 85–95, 92-1. */

const LESSON = {
  key: "aviatsiya-xavfsizligi",
  category: "special",
  level: "mid",
  order: 13060,
  title: "Aviatsiya xavfsizligi va yo'lovchi majburiyatlari",
  desc:
    "Parvoz xavfsizligi nazorati, tekshiruv, havo kemasi ichidagi " +
    "yurish-turish qoidalari va javobgarlik turlari.",
  objectives: [
    "Parvoz xavfsizligi qanday nazorat qilinishini bilasiz",
    "Tekshiruvda huquq va majburiyatlaringizni bilasiz",
    "Havo kemasi ichidagi qoidalarni bilasiz",
    "Javobgarlik turlarini farqlay olasiz",
  ],
  practicalSteps: [
    "Taqiqlangan buyumlar ro'yxatini oldindan ko'ring",
    "Tekshiruvda ekipaj talabini bajaring",
    "Bortda ekipaj ko'rsatmalariga qat'iy amal qiling",
    "Nizo bo'lsa uni bortda emas, yerda hal qiling",
  ],
  sections: [
    {
      heading: "Parvoz xavfsizligi ustidan nazorat",
      text:
        "Aviatsiyada eng oliy " +
        "qadriyat — XAVFSIZLIK. " +
        "Boshqa barcha qoidalar " +
        "shunga bo'ysunadi.\n\n" +
        "Havo kemalari " +
        "parvozining xavfsizligi " +
        "ustidan NAZORAT " +
        "alohida modda bilan " +
        "belgilangan.\n\n" +
        "Nazorat davlat " +
        "organlari tomonidan " +
        "amalga oshiriladi va " +
        "u texnik holat, " +
        "ekipaj tayyorgarligi, " +
        "aerodrom holati va " +
        "tashkiliy jarayonlarni " +
        "qamraydi.\n\n" +
        "⚠️ YO'LOVCHI UCHUN " +
        "XULOSA: xavfsizlik " +
        "sababli qabul " +
        "qilingan qaror " +
        "(reysni kechiktirish, " +
        "bekor qilish, " +
        "yo'lovchini " +
        "chiqarmaslik) " +
        "muhokama " +
        "predmeti emas — u " +
        "hayotni himoya " +
        "qiladi.",
      example:
        "Texnik nosozlik " +
        "aniqlanib parvoz " +
        "kechiktirildi. " +
        "Bu — xavfsizlik " +
        "talabi.",
      keyPoints: [
        "Parvoz xavfsizligi davlat nazoratida",
        "Nazorat texnika, ekipaj va aerodromni qamraydi",
        "Xavfsizlik boshqa manfaatlardan ustun",
        "Xavfsizlik qarori muhokama qilinmaydi",
      ],
      warning:
        "Xavfsizlik " +
        "sababli kechikish " +
        "— muammo emas, " +
        "himoya.",
      lawRefs: [{ code: "HK", article: "85" }],
    },
    {
      heading: "Tekshirishni tashkil qilish va o'tkazish",
      text:
        "Aviatsiya sohasida " +
        "TEKSHIRISHLAR " +
        "muntazam " +
        "o'tkaziladi va " +
        "ularning tartibi " +
        "alohida modda bilan " +
        "belgilangan.\n\n" +
        "Tekshirish " +
        "quyidagilarni " +
        "qamrashi mumkin: " +
        "havo kemalarining " +
        "texnik holati; " +
        "ekipajning " +
        "tayyorgarligi va " +
        "hujjatlari; " +
        "aerodrom va " +
        "yerdagi " +
        "xizmatlar; " +
        "tashkilotlarning " +
        "qoidalarga rioya " +
        "etishi.\n\n" +
        "⚠️ NIMA UCHUN " +
        "MUHIM: aviatsiyada " +
        "xavfsizlik " +
        "voqeadan KEYIN " +
        "emas, OLDIN " +
        "ta'minlanadi. " +
        "Muntazam " +
        "tekshiruv " +
        "halokatning " +
        "oldini olishning " +
        "asosiy " +
        "vositasi.",
      example:
        "Rejali tekshiruv " +
        "paytida " +
        "nosozlik " +
        "aniqlandi va " +
        "havo kemasi " +
        "parvozdan " +
        "chetlashtirildi.",
      keyPoints: [
        "Tekshirishlar tartibi qonunda belgilangan",
        "Ular texnika, ekipaj va xizmatlarni qamraydi",
        "Xavfsizlik oldindan ta'minlanadi",
        "Tekshiruv halokat oldini oladi",
      ],
      warning:
        "Tekshiruv " +
        "natijasida " +
        "reys " +
        "o'zgarishi " +
        "mumkin — bu " +
        "normal " +
        "holat.",
      lawRefs: [{ code: "HK", article: "86" }],
    },
    {
      heading: "Halokat haqida xabar berish",
      text:
        "Aviatsiya halokati " +
        "yoki baxtsiz hodisa " +
        "haqida XABAR BERISH " +
        "alohida modda bilan " +
        "tartibga " +
        "solingan.\n\n" +
        "Hodisa haqida " +
        "belgilangan " +
        "organlarga " +
        "DARHOL xabar " +
        "berilishi kerak.\n\n" +
        "⚠️ NIMA UCHUN " +
        "TEZLIK MUHIM: " +
        "qutqaruv " +
        "ishlarining " +
        "samaradorligi " +
        "birinchi " +
        "daqiqalarga " +
        "bog'liq. " +
        "Bundan tashqari " +
        "hodisa joyi " +
        "va dalillar " +
        "tez " +
        "o'zgaradi.\n\n" +
        "Xabar berish " +
        "majburiyati " +
        "faqat " +
        "ekipajga " +
        "emas, hodisa " +
        "haqida " +
        "bilgan " +
        "boshqa " +
        "shaxslarga " +
        "ham " +
        "tegishli " +
        "bo'lishi " +
        "mumkin.",
      example:
        "Hodisa guvohi " +
        "darhol " +
        "tegishli " +
        "xizmatga " +
        "xabar berdi — " +
        "qutqaruv " +
        "guruhi tez " +
        "yetib bordi.",
      keyPoints: [
        "Halokat haqida darhol xabar berish shart",
        "Tezlik qutqaruv samaradorligini belgilaydi",
        "Dalillar tez o'zgaradi",
        "Majburiyat keng doiradagi shaxslarga tegishli",
      ],
      warning:
        "Hodisa " +
        "haqida " +
        "xabar " +
        "bermaslik " +
        "og'ir " +
        "oqibatga " +
        "olib " +
        "keladi.",
      lawRefs: [{ code: "HK", article: "87" }],
    },
    {
      heading: "Ashyoviy dalillarni saqlash",
      text:
        "Hodisadan keyin " +
        "eng muhim " +
        "vazifalardan biri " +
        "— ASHYOVIY " +
        "DALILLARNI " +
        "saqlash.\n\n" +
        "Qonun ularni " +
        "saqlash " +
        "majburiyatini " +
        "alohida modda " +
        "bilan " +
        "belgilaydi.\n\n" +
        "⚠️ SABABI " +
        "aniq: " +
        "halokat " +
        "SABABINI " +
        "aniqlash " +
        "faqat " +
        "dalillar " +
        "asosida " +
        "mumkin. " +
        "Dalil " +
        "yo'qolsa " +
        "sabab " +
        "hech " +
        "qachon " +
        "aniqlanmasligi " +
        "va shunday " +
        "halokat " +
        "TAKRORLANISHI " +
        "mumkin.\n\n" +
        "Shuning uchun " +
        "hodisa " +
        "joyidagi " +
        "narsalarga " +
        "tegish, " +
        "ularni " +
        "surish " +
        "yoki olib " +
        "ketish " +
        "taqiqlanadi.",
      example:
        "Hodisa " +
        "joyidan " +
        "buyumlar " +
        "olib " +
        "ketilsa " +
        "tekshiruv " +
        "natijasi " +
        "noto'g'ri " +
        "bo'lishi " +
        "mumkin.",
      keyPoints: [
        "Ashyoviy dalillarni saqlash majburiy",
        "Sabab faqat dalillar asosida aniqlanadi",
        "Dalil yo'qolsa halokat takrorlanishi mumkin",
        "Hodisa joyiga tegish taqiqlanadi",
      ],
      warning:
        "Hodisa " +
        "joyidan " +
        "hech " +
        "narsa " +
        "olmang " +
        "va " +
        "hech " +
        "narsani " +
        "surmang.",
      lawRefs: [{ code: "HK", article: "88" }],
    },
    {
      heading: "Halokat joyidagi ishlar va ularni moliyalashtirish",
      text:
        "Aviatsiya halokati " +
        "ro'y bergan " +
        "joydagi ishlar " +
        "hamda " +
        "tekshirish " +
        "bilan bog'liq " +
        "ishlarni " +
        "MABLAG' bilan " +
        "ta'minlash " +
        "alohida " +
        "moddalar " +
        "bilan " +
        "tartibga " +
        "solingan.\n\n" +
        "Hodisa " +
        "joyida " +
        "bajariladigan " +
        "ishlar: " +
        "qutqaruv; " +
        "hududni " +
        "qo'riqlash; " +
        "dalillarni " +
        "qayd " +
        "etish; " +
        "tekshirish; " +
        "oqibatlarni " +
        "bartaraf " +
        "etish.\n\n" +
        "⚠️ MOLIYAVIY " +
        "MASALA " +
        "oldindan " +
        "hal " +
        "qilingani " +
        "muhim: " +
        "aks holda " +
        "tekshiruv " +
        "\"kim " +
        "to'laydi\" " +
        "degan " +
        "bahs " +
        "tufayli " +
        "kechikardi. " +
        "Xarajatlarni " +
        "qoplash " +
        "tartibi " +
        "belgilangan.",
      example:
        "Qutqaruv " +
        "va " +
        "tekshiruv " +
        "ishlari " +
        "darhol " +
        "boshlandi — " +
        "moliyalashtirish " +
        "masalasi " +
        "oldindan " +
        "hal " +
        "qilingan " +
        "edi.",
      keyPoints: [
        "Hodisa joyidagi ishlar tartibi belgilangan",
        "Qutqaruv, qo'riqlash va tekshirish kiradi",
        "Ishlarni moliyalashtirish oldindan hal qilingan",
        "Xarajatlarni qoplash tartibi mavjud",
      ],
      warning:
        "Hodisa " +
        "hududi " +
        "qo'riqlanadi " +
        "— " +
        "ruxsatsiz " +
        "kirish " +
        "taqiqlangan.",
      lawRefs: [
        { code: "HK", article: "89" },
        { code: "HK", article: "90" },
      ],
    },
    {
      heading: "G'ayriqonuniy aralashuvlardan himoya",
      text:
        "AVIATSIYA " +
        "XAVFSIZLIGINING " +
        "ikkinchi " +
        "yo'nalishi — " +
        "g'ayriqonuniy " +
        "aralashuvlardan " +
        "himoya " +
        "(terrorizm, " +
        "havo " +
        "kemasini " +
        "egallash, " +
        "diversiya).\n\n" +
        "Qonun bunday " +
        "aralashuvlardan " +
        "himoya " +
        "qilishning " +
        "CHORA-TADBIRLARINI " +
        "belgilaydi.\n\n" +
        "Odatiy choralar: " +
        "aeroport " +
        "hududini " +
        "qo'riqlash; " +
        "kirish " +
        "nazorati; " +
        "yo'lovchi va " +
        "bagajni " +
        "tekshirish; " +
        "havo " +
        "kemasini " +
        "qo'riqlash; " +
        "maxsus " +
        "xizmatlar " +
        "bilan " +
        "hamkorlik.\n\n" +
        "⚠️ Aynan " +
        "shu " +
        "moddadan " +
        "aeroportdagi " +
        "barcha " +
        "\"noqulay\" " +
        "protseduralar " +
        "kelib " +
        "chiqadi — " +
        "ular " +
        "sizni " +
        "himoya " +
        "qiladi.",
      example:
        "Aeroportga " +
        "kirishda " +
        "hujjat va " +
        "yuk " +
        "tekshiriladi " +
        "— bu " +
        "himoya " +
        "chorasi.",
      keyPoints: [
        "G'ayriqonuniy aralashuvlardan himoya choralari belgilangan",
        "Qo'riqlash va nazorat asosiy vositalar",
        "Tekshiruv shu choralar tarkibiga kiradi",
        "Choralar yo'lovchilarni himoya qiladi",
      ],
      warning:
        "Xavfsizlik " +
        "protsedurasiga " +
        "qarshilik " +
        "ko'rsatish " +
        "javobgarlikka " +
        "olib " +
        "keladi.",
      lawRefs: [{ code: "HK", article: "91" }],
    },
    {
      heading: "Yo'lovchi, qo'l yuki va bagajni tekshirish",
      text:
        "⚠️ Bu — har bir " +
        "yo'lovchi " +
        "shaxsan " +
        "duch " +
        "keladigan " +
        "protsedura.\n\n" +
        "Yo'lovchilarni, " +
        "qo'l yuki va " +
        "bagajni " +
        "TEKSHIRISH " +
        "alohida modda " +
        "bilan " +
        "tartibga " +
        "solingan.\n\n" +
        "Tekshiruv " +
        "MAJBURIY " +
        "va undan " +
        "bosh " +
        "tortish " +
        "parvozga " +
        "qo'yilmaslikka " +
        "olib " +
        "keladi.\n\n" +
        "Tekshiruv " +
        "maqsadi — " +
        "taqiqlangan " +
        "buyumlarni " +
        "(qurol, " +
        "portlovchi, " +
        "yonuvchi " +
        "moddalar, " +
        "o'tkir " +
        "buyumlar, " +
        "belgilangan " +
        "hajmdan " +
        "ortiq " +
        "suyuqlik) " +
        "aniqlash.\n\n" +
        "Tekshiruv " +
        "qonunda " +
        "belgilangan " +
        "tartibda " +
        "va " +
        "shaxs " +
        "qadr-qimmatini " +
        "hurmat " +
        "qilgan " +
        "holda " +
        "o'tkazilishi " +
        "kerak.",
      example:
        "Yo'lovchining " +
        "qo'l " +
        "yukida " +
        "taqiqlangan " +
        "buyum " +
        "topildi va " +
        "u olib " +
        "qo'yildi.",
      keyPoints: [
        "Tekshiruv majburiy protsedura",
        "Undan bosh tortish parvozdan mahrum qiladi",
        "Maqsad — taqiqlangan buyumlarni aniqlash",
        "Tekshiruv qadr-qimmatni hurmat qilgan holda o'tkaziladi",
      ],
      warning:
        "Taqiqlangan " +
        "buyumlar " +
        "ro'yxati " +
        "o'zgarib " +
        "turadi — " +
        "safardan " +
        "oldin " +
        "tekshiring.",
      lawRefs: [{ code: "HK", article: "92" }],
    },
    {
      heading: "Havo kemasi ichidagi yurish-turish qoidalari",
      text:
        "Yo'lovchining " +
        "havo kemasi " +
        "ICHIDAGI " +
        "yurish-turish " +
        "qoidalari " +
        "alohida modda " +
        "bilan " +
        "belgilangan.\n\n" +
        "Odatiy talablar: " +
        "ekipaj " +
        "ko'rsatmalariga " +
        "so'zsiz " +
        "amal qilish; " +
        "xavfsizlik " +
        "kamarini " +
        "taqish; " +
        "taqiqlangan " +
        "joylarda " +
        "chekmaslik; " +
        "boshqa " +
        "yo'lovchilarga " +
        "xalaqit " +
        "bermaslik; " +
        "uskunalarga " +
        "zarar " +
        "yetkazmaslik; " +
        "spirtli " +
        "ichimlik " +
        "iste'moliga " +
        "doir " +
        "cheklovlar.\n\n" +
        "⚠️ ENG MUHIM " +
        "QOIDA: " +
        "havo " +
        "kemasida " +
        "KOMANDIR " +
        "ko'rsatmasi " +
        "barcha " +
        "uchun " +
        "majburiy. " +
        "Bu " +
        "bahs " +
        "predmeti " +
        "emas — " +
        "parvozda " +
        "xavfsizlik " +
        "uchun " +
        "yagona " +
        "javobgar " +
        "shaxs " +
        "u.",
      example:
        "Yo'lovchi " +
        "ekipaj " +
        "ko'rsatmasini " +
        "bajarmadi " +
        "va " +
        "boshqa " +
        "yo'lovchilarga " +
        "xavf " +
        "tug'dirdi.",
      keyPoints: [
        "Bortdagi yurish-turish qoidalari belgilangan",
        "Ekipaj ko'rsatmasi majburiy",
        "Xavfsizlik kamari va cheklovlar amal qiladi",
        "Komandir parvoz xavfsizligi uchun javobgar",
      ],
      warning:
        "Bortdagi " +
        "tartibsizlik " +
        "reysning " +
        "majburiy " +
        "qo'nishiga " +
        "va katta " +
        "zararga " +
        "olib " +
        "kelishi " +
        "mumkin.",
      lawRefs: [{ code: "HK", article: "92-1" }],
    },
    {
      heading: "Javobgarlik turlari",
      text:
        "Aviatsiya " +
        "qonunchiligini " +
        "buzganlik " +
        "uchun " +
        "JAVOBGARLIK " +
        "TURLARI " +
        "alohida modda " +
        "bilan " +
        "belgilangan.\n\n" +
        "Javobgarlik " +
        "quyidagi " +
        "turlarda " +
        "bo'lishi " +
        "mumkin: " +
        "intizomiy; " +
        "fuqarolik-huquqiy " +
        "(zararni " +
        "qoplash); " +
        "ma'muriy " +
        "(jarima, " +
        "boshqa " +
        "choralar); " +
        "JINOIY " +
        "(og'ir " +
        "holatlarda).\n\n" +
        "⚠️ " +
        "YO'LOVCHI " +
        "UCHUN " +
        "MUHIM: " +
        "bortdagi " +
        "huquqbuzarlik " +
        "\"kichik " +
        "janjal\" " +
        "emas. " +
        "Parvoz " +
        "sharoitida " +
        "u " +
        "ko'plab " +
        "odamlarning " +
        "hayotiga " +
        "xavf " +
        "tug'diradi " +
        "va " +
        "shunga " +
        "yarasha " +
        "baholanadi.\n\n" +
        "Bundan " +
        "tashqari " +
        "tashuvchi " +
        "yetkazilgan " +
        "zararni " +
        "(majburiy " +
        "qo'nish " +
        "xarajatlari) " +
        "undirishi " +
        "mumkin.",
      example:
        "Bortdagi " +
        "tartibsizlik " +
        "tufayli " +
        "reys " +
        "majburiy " +
        "qo'ndi. " +
        "Xarajatlar " +
        "aybdordan " +
        "undirilishi " +
        "mumkin.",
      keyPoints: [
        "Javobgarlik turlari qonunda belgilangan",
        "Intizomiy, fuqarolik, ma'muriy va jinoiy javobgarlik",
        "Bortdagi huquqbuzarlik og'ir baholanadi",
        "Zarar aybdordan undiriladi",
      ],
      warning:
        "\"Shunchaki " +
        "janjal\" " +
        "deb " +
        "hisoblangan " +
        "harakat " +
        "jinoiy " +
        "ish " +
        "bilan " +
        "tugashi " +
        "mumkin.",
      lawRefs: [{ code: "HK", article: "93" }],
    },
    {
      heading: "Tashish qoidalari va asosiy tushunchalar",
      text:
        "Havo " +
        "transportida " +
        "TASHISH va " +
        "aviatsiya " +
        "ishlarini " +
        "bajarish " +
        "QOIDALARI " +
        "hamda " +
        "asosiy " +
        "ta'riflar " +
        "alohida " +
        "moddalar " +
        "bilan " +
        "belgilangan.\n\n" +
        "Bu qoidalar " +
        "tashuvchi va " +
        "yo'lovchi " +
        "o'rtasidagi " +
        "munosabatlarning " +
        "amaliy " +
        "tafsilotlarini " +
        "aniqlaydi: " +
        "ro'yxatdan " +
        "o'tish " +
        "tartibi, " +
        "bagaj " +
        "me'yorlari, " +
        "o'tirgizish, " +
        "xizmat " +
        "standartlari.\n\n" +
        "⚠️ AMALIY " +
        "XULOSA: " +
        "nizoda " +
        "faqat " +
        "kodeksga " +
        "emas, " +
        "TASHISH " +
        "QOIDALARIGA " +
        "ham " +
        "havola " +
        "qilish " +
        "kerak — " +
        "aniq " +
        "me'yorlar " +
        "(masalan " +
        "bagaj " +
        "og'irligi) " +
        "aynan " +
        "o'sha " +
        "yerda " +
        "yozilgan.\n\n" +
        "Qoidalar " +
        "tashuvchi " +
        "tomonidan " +
        "e'lon " +
        "qilinishi " +
        "kerak.",
      example:
        "Yo'lovchi " +
        "bagaj " +
        "me'yori " +
        "bo'yicha " +
        "nizolashdi. " +
        "Javob " +
        "tashish " +
        "qoidalarida " +
        "edi.",
      keyPoints: [
        "Tashish qoidalari alohida hujjat bilan belgilanadi",
        "Ular amaliy tafsilotlarni aniqlaydi",
        "Nizoda ularga havola qilish kerak",
        "Qoidalar e'lon qilinishi shart",
      ],
      warning:
        "Tashuvchi " +
        "qoidalarni " +
        "e'lon " +
        "qilmagan " +
        "bo'lsa, " +
        "ularga " +
        "tayanib " +
        "sizni " +
        "cheklay " +
        "olmaydi.",
      lawRefs: [
        { code: "HK", article: "94" },
        { code: "HK", article: "95" },
      ],
    },
  ],
};

module.exports = { LESSON };
