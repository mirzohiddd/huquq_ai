"use strict";
/** MEROS MODULI — 3-DARS: MEROSNI QABUL QILISH. FK2 1145–1149, 1183. */

const LESSON = {
  key: "merosni-qabul",
  category: "inheritance",
  level: "basic",
  order: 5030,
  title: "Merosni qabul qilish va voz kechish",
  desc:
    "Merosni qanday qabul qilish kerak, muddatlar, guvohnoma olish " +
    "va merosdan voz kechish qoidalari.",
  objectives: [
    "Merosni qabul qilishning ikki usulini bilasiz",
    "Muddatlarni va ularni tiklash imkoniyatini bilasiz",
    "Meros huquqi guvohnomasi nima uchun kerakligini bilasiz",
    "Voz kechishning oqibatlari va cheklovlarini bilasiz",
  ],
  practicalSteps: [
    "Meros ochilgan joydagi notariusga muddat ichida ariza bering",
    "Qabul qilishdan OLDIN meros tarkibi va qarzlarni aniqlang",
    "Guvohnomani olgach mulkni davlat ro'yxatidan o'tkazing",
    "Voz kechishdan oldin oqibatini hisoblang — u qaytarilmaydi",
  ],
  sections: [
    {
      heading: "Merosni qabul qilishning umumiy qoidalari",
      text:
        "Meros o'z-o'zidan o'tmaydi — uni " +
        "QABUL QILISH kerak.\n\n" +
        "Qabul qilishning IKKI usuli " +
        "bor:\n\n" +
        "(1) RASMIY — notariusga ariza " +
        "berish (merosni qabul qilish " +
        "yoki meros huquqi to'g'risida " +
        "guvohnoma berish " +
        "haqida);\n\n" +
        "(2) AMALDA — meros mol-mulkiga " +
        "egalik qilishga kirishish: " +
        "unda yashash, saqlash " +
        "choralarini ko'rish, " +
        "xarajatlarini to'lash, " +
        "qarzlarini qoplash.\n\n" +
        "⚠️ Yana bir qoida: meros QISMAN " +
        "qabul qilinmaydi. Uni qabul " +
        "qilgan shaxs butun ulushni — " +
        "qarzlari bilan birga — oladi.",
      example:
        "Farzand otasining uyida yashashda " +
        "davom etdi va kommunal " +
        "to'lovlarni to'ladi, lekin " +
        "notariusga bormadi. Bu amalda " +
        "qabul qilish belgisi bo'lishi " +
        "mumkin — lekin uni isbotlash " +
        "kerak.",
      keyPoints: [
        "Meros qabul qilinishi shart",
        "Ikki usul: notariusga ariza yoki amalda egalik qilish",
        "Merosni qisman qabul qilib bo'lmaydi",
        "Qarzlar ham ulush bilan birga o'tadi",
      ],
      warning:
        "Amalda qabul qilish ham isbot " +
        "talab qiladi — eng ishonchli " +
        "yo'l notariusga yozma ariza.",
      lawRefs: [{ code: "FK2", article: "1145" }],
    },
    {
      heading: "Merosni qabul qilish muddati",
      text:
        "⚠️ MUDDAT — meros ishlarida eng " +
        "ko'p yo'qotishga sabab " +
        "bo'ladigan masala.\n\n" +
        "Merosni qabul qilish belgilangan " +
        "muddat ichida amalga " +
        "oshirilishi kerak va u meros " +
        "OCHILGAN KUNDAN " +
        "hisoblanadi.\n\n" +
        "Aniq muddat qonun matnida.\n\n" +
        "Muddat o'tkazib yuborilsa uni " +
        "tiklash faqat SUD orqali va " +
        "UZRLI sabab bo'lganda mumkin " +
        "— masalan og'ir kasallik, " +
        "uzoq safar, meros " +
        "ochilganini bilmaslik.\n\n" +
        "\"Vaqtim bo'lmadi\" degan sabab " +
        "uzrli hisoblanmaydi.",
      example:
        "Merosxo'r chet elda edi va " +
        "otasining vafotidan kech xabar " +
        "topdi. Buni hujjat bilan " +
        "tasdiqlab muddatni sud orqali " +
        "tiklashi mumkin.",
      keyPoints: [
        "Qabul qilish muddati qonunda belgilangan",
        "U meros ochilgan kundan hisoblanadi",
        "Muddat sud orqali tiklanishi mumkin",
        "Buning uchun uzrli sabab kerak",
      ],
      warning:
        "Muddatni tiklash uchun ham " +
        "alohida muddat bor — sabab " +
        "bartaraf bo'lgach darhol " +
        "murojaat qiling.",
      lawRefs: [
        { code: "FK2", article: "1145" },
        { code: "FK2", article: "1183" },
      ],
    },
    {
      heading: "Meros huquqi to'g'risida guvohnoma",
      text:
        "Merosni qabul qilganingizni " +
        "TASDIQLOVCHI hujjat — meros " +
        "huquqi to'g'risida " +
        "guvohnoma.\n\n" +
        "Uni meros ochilgan joydagi " +
        "notarius beradi.\n\n" +
        "⚠️ Bu hujjatsiz amalda hech " +
        "narsa qilib bo'lmaydi: " +
        "ko'chmas mulkni o'z " +
        "nomingizga rasmiylashtirish; " +
        "bank omonatini olish; " +
        "avtomobilni qayta ro'yxatdan " +
        "o'tkazish — hammasi shu " +
        "guvohnomani talab qiladi.\n\n" +
        "Olish uchun odatda kerak: vafot " +
        "guvohnomasi; qarindoshlikni " +
        "tasdiqlovchi hujjatlar (yoki " +
        "vasiyatnoma); oxirgi yashash " +
        "joyi haqida ma'lumot; " +
        "mol-mulkka bo'lgan huquqni " +
        "tasdiqlovchi hujjatlar.",
      example:
        "Merosxo'r kvartirani sotmoqchi " +
        "bo'ldi, lekin guvohnoma yo'q " +
        "edi. Bitim rasmiylashtirilmadi " +
        "— avval guvohnoma olish " +
        "kerak.",
      keyPoints: [
        "Guvohnomani meros ochilgan joydagi notarius beradi",
        "Usiz mulkni rasmiylashtirib bo'lmaydi",
        "Vafot guvohnomasi va qarindoshlik hujjatlari kerak",
        "U birgalikda yoki alohida berilishi mumkin",
      ],
      warning:
        "Guvohnoma olgach mulkni DAVLAT " +
        "RO'YXATIDAN ham o'tkazing — " +
        "guvohnomaning o'zi yetarli " +
        "emas.",
      lawRefs: [{ code: "FK2", article: "1146" }],
    },
    {
      heading: "Merosdan voz kechish huquqi",
      text:
        "Merosxo'r merosdan VOZ KECHISHI " +
        "mumkin — bu to'liq qonuniy " +
        "huquq.\n\n" +
        "Nima uchun kimdir voz kechadi? " +
        "Odatiy sabablar: meros " +
        "qarzlari mol-mulk qiymatidan " +
        "ko'p; boshqa merosxo'r " +
        "foydasiga kelishuv; " +
        "mol-mulkni saqlash " +
        "xarajatlari og'ir.\n\n" +
        "Voz kechish IKKI shaklda: " +
        "shunchaki voz kechish (ulush " +
        "boshqa merosxo'rlar o'rtasida " +
        "taqsimlanadi) va MUAYYAN SHAXS " +
        "foydasiga voz kechish.\n\n" +
        "⚠️ ENG MUHIM OGOHLANTIRISH: " +
        "voz kechish QAYTARIB " +
        "OLINMAYDI. Fikringizdan " +
        "qaytsangiz ham merosni qayta " +
        "talab qila olmaysiz.",
      example:
        "Merosxo'r otasining qarzlari " +
        "mol-mulkidan ko'p ekanini " +
        "bilib merosdan voz kechdi. " +
        "Shu tufayli qarzlar unga " +
        "o'tmadi.",
      keyPoints: [
        "Merosdan voz kechish qonuniy huquq",
        "Shunchaki yoki muayyan shaxs foydasiga voz kechiladi",
        "Voz kechish qaytarib olinmaydi",
        "U belgilangan muddat ichida rasmiylashtiriladi",
      ],
      warning:
        "Voz kechishdan OLDIN meros " +
        "tarkibini va qarzlarni " +
        "aniqlang — keyin " +
        "o'zgartirib bo'lmaydi.",
      lawRefs: [{ code: "FK2", article: "1147" }],
    },
    {
      heading: "Voz kechish huquqining cheklanishi",
      text:
        "Voz kechish huquqi mutlaq emas — " +
        "qonun unga cheklovlar " +
        "qo'yadi.\n\n" +
        "Odatiy cheklovlar: MAJBURIY " +
        "ULUSH olish huquqidan boshqa " +
        "shaxs foydasiga voz kechib " +
        "bo'lmaydi; vasiyat qilingan " +
        "mol-mulkdan vasiyatnomada " +
        "ko'rsatilmagan shaxs foydasiga " +
        "voz kechish cheklanadi; " +
        "SHARTLI yoki QISMAN voz " +
        "kechishga yo'l " +
        "qo'yilmaydi.\n\n" +
        "⚠️ Oxirgi qoida muhim: " +
        "\"kvartiradan voz kechaman, " +
        "lekin avtomobilni olaman\" " +
        "degan variant ishlamaydi.\n\n" +
        "Voyaga yetmagan yoki muomala " +
        "layoqati cheklangan merosxo'r " +
        "nomidan voz kechish uchun " +
        "vasiylik va homiylik " +
        "organining ruxsati talab " +
        "qilinadi.",
      example:
        "Ota voyaga yetmagan farzandi " +
        "nomidan merosdan voz " +
        "kechmoqchi bo'ldi. Vasiylik " +
        "organining ruxsati shart.",
      keyPoints: [
        "Voz kechish huquqi cheklovlarga ega",
        "Shartli va qisman voz kechishga yo'l qo'yilmaydi",
        "Majburiy ulushdan boshqa shaxs foydasiga voz kechib bo'lmaydi",
        "Bola nomidan voz kechish uchun vasiylik organi ruxsati kerak",
      ],
      warning:
        "Bola nomidan ruxsatsiz voz " +
        "kechish keyinchalik bekor " +
        "qilinishi mumkin.",
      lawRefs: [{ code: "FK2", article: "1148" }],
    },
    {
      heading: "Vasiyat majburiyatini qabul qilishdan voz kechish",
      text:
        "Alohida holat: vasiyat " +
        "majburiyati bo'yicha biror " +
        "narsa olish huquqiga ega " +
        "bo'lgan shaxs (legatariy) " +
        "undan VOZ KECHISHI mumkin.\n\n" +
        "Bu huquq muhim: hech kimni " +
        "biror narsani olishga " +
        "majburlab bo'lmaydi.\n\n" +
        "⚠️ Voz kechish ba'zan mantiqiy " +
        "bo'ladi: masalan olinadigan " +
        "narsa bilan birga og'ir yuk " +
        "(soliq, saqlash xarajati) " +
        "kelsa.\n\n" +
        "Voz kechilgan taqdirda " +
        "majburiyat merosxo'r " +
        "zimmasidan soqit bo'ladi va " +
        "tegishli mol-mulk meros " +
        "tarkibida qoladi.\n\n" +
        "Voz kechish rasmiy shaklda " +
        "bildirilishi kerak.",
      example:
        "Legatariyga uzoq hududdagi eski " +
        "uyda yashash huquqi berildi, " +
        "lekin u boshqa shaharda " +
        "yashaydi va saqlash xarajati " +
        "katta. U voz kechishi mumkin.",
      keyPoints: [
        "Vasiyat majburiyatidan voz kechish mumkin",
        "Hech kimni biror narsa olishga majburlab bo'lmaydi",
        "Voz kechish rasmiy shaklda bildiriladi",
        "Majburiyat merosxo'r zimmasidan soqit bo'ladi",
      ],
      warning:
        "Voz kechishdan oldin " +
        "oqibatlarini hisoblang — " +
        "qaytarib olish odatda mumkin " +
        "emas.",
      lawRefs: [{ code: "FK2", article: "1149" }],
    },
    {
      heading: "Amaliy ketma-ketlik: meros ochilgach nima qilish kerak",
      text:
        "Butun darsni amaliy algoritmga " +
        "yig'amiz.\n\n" +
        "1-QADAM. Vafot guvohnomasini " +
        "oling — muddat shu sanadan " +
        "boshlanadi.\n\n" +
        "2-QADAM. Vasiyatnoma " +
        "bor-yo'qligini aniqlang " +
        "(notariat orqali tekshirish " +
        "mumkin).\n\n" +
        "3-QADAM. Meros tarkibini va " +
        "QARZLARNI aniqlang — bu " +
        "qabul qilish yoki voz kechish " +
        "qarorining asosi.\n\n" +
        "4-QADAM. Meros ochilgan " +
        "JOYDAGI notariusga ariza " +
        "bering.\n\n" +
        "5-QADAM. Hujjatlarni yig'ing: " +
        "qarindoshlik, mulk " +
        "hujjatlari, baholash.\n\n" +
        "6-QADAM. Meros huquqi " +
        "guvohnomasini oling.\n\n" +
        "7-QADAM. Mulkni DAVLAT " +
        "RO'YXATIDAN o'tkazing.\n\n" +
        "⚠️ Nizo bo'lsa avval " +
        "kelishuvga harakat qiling.",
      example:
        "Merosxo'rlar shu ketma-ketlikni " +
        "bajarib meros ishini sudsiz " +
        "yakunladi — muddat buzilmadi " +
        "va taqsimot kelishuv bilan " +
        "hal qilindi.",
      keyPoints: [
        "Avval vafot guvohnomasi va vasiyatnomani tekshiring",
        "Meros tarkibi va qarzlarni aniqlang",
        "Muddat ichida notariusga ariza bering",
        "Guvohnomadan keyin mulkni ro'yxatdan o'tkazing",
      ],
      warning:
        "Eng ko'p uchraydigan xato — " +
        "kutish. Meros ochilgan kundan " +
        "muddat ketayotgan bo'ladi.",
      lawRefs: [
        { code: "FK2", article: "1145" },
        { code: "FK2", article: "1146" },
        { code: "FK2", article: "1117" },
      ],
    },
  ],
};

module.exports = { LESSON };
