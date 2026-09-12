"use strict";
/** MAXSUS MODUL — 4-DARS: YO'LOVCHI TASHISH (UMUMIY).
 *  FK2 709, 710, 712, 713, 714, 715, 717, 718, 720, 725, 993. */

const LESSON = {
  key: "yolovchi-tashish",
  category: "special",
  level: "basic",
  order: 13040,
  title: "Yo'lovchi tashish: umumiy qoidalar",
  desc:
    "Har qanday transportda yo'lovchi tashish: shartnoma, kira " +
    "haqi, muddatlar, javobgarlik va yo'lovchining huquqlari.",
  objectives: [
    "Yo'lovchi tashish shartnomasini tushunasiz",
    "Umumiy foydalanishdagi transport nima ekanini bilasiz",
    "Kechikish uchun javobgarlikni bilasiz",
    "Sog'liqqa zarar yetkazilganda huquqingizni bilasiz",
  ],
  practicalSteps: [
    "Chiptani safar tugagunga qadar saqlang",
    "Bagajni kvitansiya bilan topshiring",
    "Baxtsiz hodisa bo'lsa darhol qayd ettiring",
    "Zararni hujjat bilan tasdiqlang",
  ],
  sections: [
    {
      heading: "Tashishning umumiy qoidalari",
      text:
        "Yo'lovchi, bagaj va yuk " +
        "tashishning UMUMIY " +
        "qoidalari Fuqarolik " +
        "kodeksida " +
        "belgilangan.\n\n" +
        "Bu qoidalar BARCHA " +
        "transport turlariga " +
        "tegishli: avtomobil, " +
        "temir yo'l, havo, suv " +
        "transporti.\n\n" +
        "⚠️ QOIDALAR IERARXIYASI: " +
        "avval maxsus qonun " +
        "(masalan Havo " +
        "kodeksi), keyin " +
        "Fuqarolik " +
        "kodeksining umumiy " +
        "qoidalari " +
        "qo'llaniladi.\n\n" +
        "Shuning uchun " +
        "maxsus qonunda " +
        "javob topilmasa — " +
        "Fuqarolik kodeksiga " +
        "murojaat qilinadi. " +
        "Ikkalasi bir-birini " +
        "to'ldiradi.",
      example:
        "Avtobusda nizo yuzaga " +
        "keldi. Maxsus " +
        "qoidalar bo'lmasa " +
        "Fuqarolik kodeksining " +
        "umumiy qoidalari " +
        "qo'llaniladi.",
      keyPoints: [
        "Umumiy tashish qoidalari Fuqarolik kodeksida",
        "Ular barcha transport turlariga tegishli",
        "Avval maxsus qonun qo'llaniladi",
        "Ikkalasi bir-birini to'ldiradi",
      ],
      warning:
        "\"Bu avtobus, " +
        "u yerda qonun " +
        "yo'q\" degan " +
        "tasavvur " +
        "noto'g'ri.",
      lawRefs: [{ code: "FK2", article: "709" }],
    },
    {
      heading: "Yo'lovchi tashish shartnomasi",
      text:
        "Yo'lovchi tashish " +
        "shartnomasi bo'yicha " +
        "tashuvchi yo'lovchini " +
        "belgilangan joyga " +
        "eltib qo'yish " +
        "majburiyatini oladi, " +
        "yo'lovchi esa " +
        "belgilangan kira " +
        "haqini to'laydi.\n\n" +
        "Bagaj topshirilgan " +
        "bo'lsa tashuvchi uni " +
        "ham eltib qo'yishi " +
        "va topshirishi " +
        "kerak.\n\n" +
        "⚠️ SHARTNOMA CHIPTA " +
        "bilan " +
        "rasmiylashtiriladi, " +
        "bagaj esa BAGAJ " +
        "KVITANSIYASI " +
        "bilan.\n\n" +
        "Ya'ni chipta — " +
        "shunchaki kirish " +
        "ruxsati emas, u " +
        "shartnoma " +
        "tuzilganini " +
        "tasdiqlovchi " +
        "hujjat. Uni " +
        "safar tugagunga " +
        "qadar (ba'zan " +
        "keyin ham) " +
        "saqlash kerak.",
      example:
        "Yo'lovchi chiptani " +
        "yo'lda tashlab " +
        "yubordi. Nizo " +
        "chiqqanda " +
        "shartnoma " +
        "tuzilganini " +
        "isbotlash " +
        "qiyinlashdi.",
      keyPoints: [
        "Tashuvchi eltib qo'yish majburiyatini oladi",
        "Yo'lovchi kira haqini to'laydi",
        "Chipta shartnomani rasmiylashtiradi",
        "Bagaj kvitansiya bilan topshiriladi",
      ],
      warning:
        "Chiptani manzilga " +
        "yetguncha " +
        "saqlang.",
      lawRefs: [{ code: "FK2", article: "710" }],
    },
    {
      heading: "Charter (fraxtlash) shartnomasi",
      text:
        "CHARTER shartnomasi " +
        "bo'yicha bir tomon " +
        "ikkinchi tomonga " +
        "transport " +
        "vositasining butun " +
        "sig'imini yoki bir " +
        "qismini haq " +
        "evaziga beradi.\n\n" +
        "Bu odatdagi " +
        "yo'lovchi tashishdan " +
        "farq qiladi: bu " +
        "yerda alohida " +
        "yo'lovchi emas, " +
        "SIG'IM " +
        "fraxtlanadi.\n\n" +
        "⚠️ Amalda charter " +
        "avtobus, mikroavtobus " +
        "va samolyot " +
        "buyurtma " +
        "qilishda " +
        "uchraydi — " +
        "to'y, ekskursiya, " +
        "korporativ " +
        "safar.\n\n" +
        "AMALIY MASLAHAT: " +
        "charter " +
        "buyurtma " +
        "qilayotganda " +
        "shartnomani " +
        "YOZMA tuzing " +
        "va unda " +
        "marshrut, " +
        "vaqt, transport " +
        "turi va " +
        "javobgarlikni " +
        "aniq " +
        "ko'rsating.",
      example:
        "To'y uchun avtobus " +
        "og'zaki " +
        "buyurtma " +
        "qilindi va u " +
        "kelmadi — " +
        "hech qanday " +
        "dalil " +
        "qolmadi.",
      keyPoints: [
        "Charter — sig'imni fraxtlash shartnomasi",
        "Alohida yo'lovchi emas, sig'im beriladi",
        "Avtobus va samolyot buyurtmasida uchraydi",
        "Shartnoma yozma tuzilishi kerak",
      ],
      warning:
        "Og'zaki charter " +
        "kelishuvi " +
        "amalda " +
        "himoyasiz " +
        "qoldiradi.",
      lawRefs: [{ code: "FK2", article: "712" }],
    },
    {
      heading: "Har xil transportda tashish (aralash qatnov)",
      text:
        "Bitta yo'nalishda " +
        "HAR XIL " +
        "transportda tashish " +
        "alohida modda " +
        "bilan tartibga " +
        "solingan.\n\n" +
        "Bu — aralash " +
        "qatnov: masalan " +
        "temir yo'l bilan " +
        "boshlanib avtomobil " +
        "bilan " +
        "tugaydigan " +
        "safar.\n\n" +
        "⚠️ ASOSIY " +
        "MUAMMO: " +
        "muammo yuzaga " +
        "kelganda " +
        "KIM javob " +
        "beradi? " +
        "Aralash " +
        "qatnovda " +
        "tashuvchilar " +
        "bir nechta " +
        "bo'ladi va " +
        "har biri " +
        "o'z " +
        "qismi uchun " +
        "javob " +
        "beradi.\n\n" +
        "Shuning uchun " +
        "har bir " +
        "bosqichda " +
        "hujjat " +
        "saqlash " +
        "muhim — " +
        "muammo " +
        "qaysi " +
        "bosqichda " +
        "yuz " +
        "berganini " +
        "isbotlash " +
        "kerak " +
        "bo'ladi.",
      example:
        "Bagaj aralash " +
        "qatnovda " +
        "yo'qoldi. " +
        "Qaysi " +
        "bosqichda " +
        "yo'qolgani " +
        "isbotlanmasa " +
        "javobgarni " +
        "aniqlash " +
        "qiyin.",
      keyPoints: [
        "Aralash qatnov alohida tartibga solingan",
        "Unda bir necha tashuvchi qatnashadi",
        "Har biri o'z qismi uchun javob beradi",
        "Har bosqich hujjati saqlanishi kerak",
      ],
      warning:
        "Aralash " +
        "qatnovda " +
        "hujjatlarni " +
        "bosqichma-bosqich " +
        "saqlang.",
      lawRefs: [{ code: "FK2", article: "713" }],
    },
    {
      heading: "Umumiy foydalanishdagi transport",
      text:
        "⚠️ Bu tushuncha " +
        "yo'lovchi " +
        "uchun juda " +
        "foydali.\n\n" +
        "UMUMIY " +
        "FOYDALANISHDAGI " +
        "transport — " +
        "har qanday " +
        "murojaat " +
        "qiluvchini " +
        "tashishga " +
        "majbur " +
        "bo'lgan " +
        "transport " +
        "(avtobus, " +
        "metro, temir " +
        "yo'l, " +
        "muntazam " +
        "reyslar).\n\n" +
        "Bunday tashish " +
        "shartnomasi " +
        "OMMAVIY " +
        "shartnoma " +
        "hisoblanadi.\n\n" +
        "Bundan " +
        "kelib " +
        "chiqadigan " +
        "natijalar: " +
        "tashuvchi " +
        "asossiz " +
        "ravishda " +
        "tashishdan " +
        "BOSH " +
        "TORTA " +
        "olmaydi; " +
        "shartlar " +
        "hamma " +
        "uchun BIR " +
        "XIL " +
        "bo'lishi " +
        "kerak; " +
        "ayrim " +
        "yo'lovchilarga " +
        "afzallik " +
        "berish " +
        "taqiqlanadi " +
        "(qonunda " +
        "nazarda " +
        "tutilgan " +
        "imtiyozlardan " +
        "tashqari).",
      example:
        "Muntazam " +
        "avtobus " +
        "yo'lovchini " +
        "asossiz " +
        "ravishda " +
        "olmadi. Bu " +
        "ommaviy " +
        "shartnoma " +
        "qoidasini " +
        "buzish.",
      keyPoints: [
        "Umumiy foydalanishdagi transport har kimni tashiydi",
        "Bu ommaviy shartnoma hisoblanadi",
        "Asossiz bosh tortish taqiqlanadi",
        "Shartlar hamma uchun bir xil",
      ],
      warning:
        "Kamsitish " +
        "belgilari " +
        "bo'lsa " +
        "buni " +
        "guvohlar " +
        "bilan " +
        "qayd " +
        "eting.",
      lawRefs: [{ code: "FK2", article: "714" }],
    },
    {
      heading: "Kira haqi",
      text:
        "KIRA HAQI — " +
        "tashish uchun " +
        "to'lov va u " +
        "alohida modda " +
        "bilan tartibga " +
        "solingan.\n\n" +
        "Umumiy qoida: " +
        "kira haqi " +
        "tomonlarning " +
        "kelishuvi " +
        "bo'yicha " +
        "belgilanadi. " +
        "Lekin umumiy " +
        "foydalanishdagi " +
        "transportda u " +
        "TASDIQLANGAN " +
        "TARIFLAR " +
        "bo'yicha " +
        "olinadi.\n\n" +
        "⚠️ AMALIY " +
        "XULOSA: " +
        "muntazam " +
        "qatnovda " +
        "haydovchi " +
        "\"bugun " +
        "narx " +
        "boshqacha\" " +
        "deb " +
        "tasdiqlangan " +
        "tarifdan " +
        "ortiq " +
        "talab " +
        "qila " +
        "olmaydi.\n\n" +
        "Imtiyozli " +
        "toifalar " +
        "uchun " +
        "belgilangan " +
        "chegirmalar " +
        "ham " +
        "majburiy " +
        "hisoblanadi.",
      example:
        "Yo'lovchidan " +
        "tasdiqlangan " +
        "tarifdan " +
        "ortiq " +
        "haq " +
        "talab " +
        "qilindi — " +
        "bu " +
        "asossiz.",
      keyPoints: [
        "Kira haqi qonun bilan tartibga solinadi",
        "Umumiy transportda tasdiqlangan tarif amal qiladi",
        "Ortiq haq talab qilish asossiz",
        "Imtiyozli chegirmalar majburiy",
      ],
      warning:
        "Chekni yoki " +
        "chiptani " +
        "talab " +
        "qiling — " +
        "u " +
        "to'lov " +
        "dalili.",
      lawRefs: [{ code: "FK2", article: "715" }],
    },
    {
      heading: "Eltib qo'yish muddati",
      text:
        "Yo'lovchi, bagaj " +
        "va yukni ELTIB " +
        "QO'YISH " +
        "MUDDATI " +
        "alohida modda " +
        "bilan " +
        "belgilangan.\n\n" +
        "Umumiy qoida: " +
        "tashuvchi " +
        "yo'lovchini " +
        "(bagajni, " +
        "yukni) " +
        "belgilangan " +
        "muddatda " +
        "eltib " +
        "qo'yishi " +
        "shart. " +
        "Muddat " +
        "belgilanmagan " +
        "bo'lsa — " +
        "OQILONA " +
        "muddatda.\n\n" +
        "⚠️ MUHIM: " +
        "jadval " +
        "bo'yicha " +
        "qatnaydigan " +
        "transportda " +
        "muddat " +
        "JADVAL " +
        "bilan " +
        "belgilangan " +
        "hisoblanadi.\n\n" +
        "Shuning uchun " +
        "e'lon " +
        "qilingan " +
        "jadvaldan " +
        "sezilarli " +
        "chetlanish " +
        "majburiyat " +
        "buzilishi " +
        "hisoblanadi.",
      example:
        "Avtobus " +
        "jadvaldan " +
        "bir necha " +
        "soat " +
        "kechikdi va " +
        "yo'lovchi " +
        "muhim " +
        "uchrashuvni " +
        "o'tkazib " +
        "yubordi.",
      keyPoints: [
        "Eltib qo'yish muddati belgilangan",
        "Muddat yo'q bo'lsa oqilona muddat qo'llaniladi",
        "Jadval muddatni belgilaydi",
        "Jadvaldan chetlanish majburiyat buzilishi",
      ],
      warning:
        "Kechikishni " +
        "vaqt " +
        "belgisi " +
        "bilan " +
        "qayd " +
        "eting.",
      lawRefs: [{ code: "FK2", article: "717" }],
    },
    {
      heading: "Tashishdan kelib chiqadigan javobgarlik",
      text:
        "Tashishdan kelib " +
        "chiqadigan " +
        "majburiyatlar " +
        "bo'yicha " +
        "javobgarlikning " +
        "UMUMIY qoidasi " +
        "alohida modda " +
        "bilan " +
        "belgilangan.\n\n" +
        "⚠️ ENG MUHIM " +
        "QOIDA: " +
        "tashuvchining " +
        "javobgarligini " +
        "CHEKLASH yoki " +
        "BEKOR QILISH " +
        "to'g'risidagi " +
        "kelishuvlar " +
        "HAQIQIY " +
        "EMAS.\n\n" +
        "Ya'ni " +
        "shartnomada " +
        "yoki " +
        "chiptada " +
        "\"tashuvchi " +
        "javobgar " +
        "emas\" degan " +
        "band " +
        "yozilgan " +
        "bo'lsa — u " +
        "ishlamaydi.\n\n" +
        "Bu qoida " +
        "yo'lovchini " +
        "himoya " +
        "qiladi, " +
        "chunki " +
        "tashish " +
        "shartnomasi " +
        "odatda " +
        "tashuvchi " +
        "tayyorlagan " +
        "standart " +
        "shakl " +
        "bo'ladi va " +
        "yo'lovchi " +
        "uni " +
        "muhokama " +
        "qila " +
        "olmaydi.",
      example:
        "Chiptaning " +
        "orqasida " +
        "javobgarlikni " +
        "istisno " +
        "qiluvchi " +
        "matn bor " +
        "edi. U " +
        "huquqiy " +
        "kuchga " +
        "ega " +
        "emas.",
      keyPoints: [
        "Tashish javobgarligining umumiy qoidasi belgilangan",
        "Javobgarlikni cheklovchi kelishuv haqiqiy emas",
        "Chiptadagi bunday band ishlamaydi",
        "Qoida yo'lovchini himoya qiladi",
      ],
      warning:
        "Standart " +
        "shartnoma " +
        "shartlariga " +
        "ko'r-ko'rona " +
        "ishonmang.",
      lawRefs: [{ code: "FK2", article: "718" }],
    },
    {
      heading: "Jo'natish kechiktirilgani uchun javobgarlik",
      text:
        "Yo'lovchini " +
        "jo'natib " +
        "yuborish " +
        "KECHIKTIRILGANI " +
        "uchun " +
        "tashuvchining " +
        "javobgarligi " +
        "alohida modda " +
        "bilan " +
        "belgilangan.\n\n" +
        "Bu eng ko'p " +
        "uchraydigan " +
        "nizolardan " +
        "biri: reys " +
        "kechikdi, " +
        "avtobus " +
        "jo'namadi, " +
        "poyezd " +
        "ushlandi.\n\n" +
        "⚠️ Tashuvchi " +
        "javobgarlikdan " +
        "ozod " +
        "bo'lishi " +
        "mumkin, " +
        "agar " +
        "kechikish " +
        "unga " +
        "bog'liq " +
        "bo'lmagan " +
        "holatlar " +
        "tufayli " +
        "yuz " +
        "bergan " +
        "bo'lsa " +
        "(tabiiy " +
        "ofat, " +
        "yo'l " +
        "yopilishi).\n\n" +
        "Yo'lovchi " +
        "kechikish " +
        "tufayli " +
        "safardan " +
        "voz " +
        "kechsa, " +
        "to'langan " +
        "kira " +
        "haqi " +
        "qaytarilishi " +
        "kerak.",
      example:
        "Poyezd " +
        "uzoq " +
        "kechikdi " +
        "va " +
        "yo'lovchi " +
        "safardan " +
        "voz " +
        "kechdi — " +
        "kira " +
        "haqi " +
        "qaytariladi.",
      keyPoints: [
        "Jo'natishning kechiktirilishi uchun javobgarlik bor",
        "Tashuvchi ayrim hollarda ozod bo'ladi",
        "Sabab hujjat bilan tasdiqlanadi",
        "Voz kechilganda kira haqi qaytariladi",
      ],
      warning:
        "Kechikish " +
        "faktini " +
        "guvohlar " +
        "yoki " +
        "elektron " +
        "tablo " +
        "surati " +
        "bilan " +
        "qayd " +
        "eting.",
      lawRefs: [{ code: "FK2", article: "720" }],
    },
    {
      heading: "Hayot va sog'liqqa zarar uchun javobgarlik",
      text:
        "⚠️ Eng jiddiy " +
        "mavzu: " +
        "yo'lovchining " +
        "hayoti yoki " +
        "sog'lig'iga " +
        "shikast " +
        "yetkazilishi.\n\n" +
        "Tashuvchining " +
        "javobgarligi " +
        "alohida modda " +
        "bilan " +
        "belgilangan va " +
        "u " +
        "kuchaytirilgan " +
        "tabiatga " +
        "ega.\n\n" +
        "Sabab: " +
        "transport " +
        "vositasi " +
        "YUQORI XAVF " +
        "MANBAI " +
        "hisoblanadi. " +
        "Shuning uchun " +
        "javobgarlik " +
        "ko'p " +
        "hollarda " +
        "AYBDAN " +
        "QAT'I NAZAR " +
        "yuzaga " +
        "keladi.\n\n" +
        "Qoplanadigan " +
        "zarar: " +
        "davolanish " +
        "xarajatlari, " +
        "yo'qotilgan " +
        "daromad, " +
        "reabilitatsiya " +
        "xarajatlari; " +
        "og'ir " +
        "holatlarda " +
        "boquvchisini " +
        "yo'qotgan " +
        "shaxslarga " +
        "to'lovlar. " +
        "Ma'naviy " +
        "zarar " +
        "alohida " +
        "talab " +
        "qilinadi.",
      example:
        "Avtobusda " +
        "baxtsiz " +
        "hodisa yuz " +
        "berdi va " +
        "yo'lovchi " +
        "jarohat " +
        "oldi. " +
        "Zarar " +
        "qoplanishi " +
        "kerak.",
      keyPoints: [
        "Hayot va sog'liqqa zarar uchun javobgarlik kuchaytirilgan",
        "Transport yuqori xavf manbai hisoblanadi",
        "Javobgarlik ko'pincha aybdan qat'i nazar yuzaga keladi",
        "Ma'naviy zarar alohida talab qilinadi",
      ],
      warning:
        "Hodisani " +
        "darhol " +
        "rasmiy " +
        "qayd " +
        "ettiring " +
        "va " +
        "tibbiy " +
        "ko'rikdan " +
        "o'ting.",
      lawRefs: [
        { code: "FK2", article: "725" },
        { code: "FK2", article: "999" },
        { code: "FK2", article: "1006" },
      ],
    },
  ],
};

module.exports = { LESSON };
