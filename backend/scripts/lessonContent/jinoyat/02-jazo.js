"use strict";
/**
 * JINOIY JAVOBGARLIK — 2-QISM: JAZO (11–22-mavzular)
 */

const SECTIONS = [
  /* ── 11 ────────────────────────────────────────────────────── */
  {
    heading: "Jazo tushunchasi va maqsadlari",
    text:
      "Jazo — sud hukmi " +
      "bilan tayinlanadigan " +
      "va jinoyat sodir " +
      "etishda aybdor deb " +
      "topilgan shaxsga " +
      "nisbatan " +
      "qo'llaniladigan " +
      "majburlov " +
      "chorasi.\n\n" +
      "⚠️ ENG MUHIM " +
      "KAFOLAT: jazoni " +
      "faqat SUD " +
      "tayinlaydi. " +
      "Hech qanday " +
      "boshqa organ " +
      "yoki shaxs " +
      "jinoiy jazo " +
      "qo'llash " +
      "huquqiga " +
      "ega emas.\n\n" +
      "Jazoning " +
      "maqsadlari " +
      "odatda: " +
      "ijtimoiy " +
      "adolatni " +
      "tiklash; " +
      "mahkumni " +
      "tuzatish; " +
      "yangi " +
      "jinoyatlarning " +
      "oldini " +
      "olish.\n\n" +
      "Muhim " +
      "nuqta: " +
      "jazo " +
      "MAQSADI " +
      "azob " +
      "berish " +
      "yoki " +
      "insonning " +
      "qadr-qimmatini " +
      "kamsitish " +
      "EMAS. " +
      "Bu " +
      "insonparvarlik " +
      "tamoyilidan " +
      "kelib " +
      "chiqadi.\n\n" +
      "Shuning " +
      "uchun " +
      "qiynoqqa " +
      "solish " +
      "va " +
      "g'ayriinsoniy " +
      "muomala " +
      "o'zi " +
      "alohida " +
      "jinoyat " +
      "hisoblanadi.",
    example:
      "Odam " +
      "\"o'z " +
      "qo'li " +
      "bilan " +
      "jazolamoqchi\" " +
      "bo'ldi. " +
      "Bu " +
      "o'zboshimchalik " +
      "hisoblanadi " +
      "va " +
      "o'zi " +
      "jinoiy " +
      "javobgarlikka " +
      "olib " +
      "keladi.",
    keyPoints: [
      "Jazoni faqat sud tayinlaydi",
      "Maqsad — adolatni tiklash, tuzatish va oldini olish",
      "Jazo azob berish maqsadini ko'zlamaydi",
      "Qiynoqqa solish alohida jinoyat hisoblanadi",
    ],
    warning:
      "O'z " +
      "qo'li " +
      "bilan " +
      "\"adolat " +
      "o'rnatish\" " +
      "— " +
      "o'zboshimchalik " +
      "jinoyati.",
    lawRefs: [
      { code: "JK", article: "42" },
      { code: "JK", article: "7" },
      { code: "JK", article: "229" },
      { code: "JK", article: "235" },
    ],
  },

  /* ── 12 ────────────────────────────────────────────────────── */
  {
    heading: "Jazo tizimi va uning turlari",
    text:
      "Qonun jazolarning " +
      "TO'LIQ " +
      "tizimini " +
      "belgilaydi va " +
      "sud faqat shu " +
      "ro'yxatdan " +
      "tanlaydi.\n\n" +
      "Asosiy " +
      "turlari " +
      "odatda: " +
      "JARIMA; " +
      "muayyan " +
      "HUQUQDAN " +
      "MAHRUM " +
      "qilish; " +
      "majburiy " +
      "JAMOAT " +
      "ISHLARI; " +
      "AXLOQ " +
      "TUZATISH " +
      "ishlari; " +
      "xizmat " +
      "bo'yicha " +
      "cheklash; " +
      "OZODLIKNI " +
      "CHEKLASH; " +
      "OZODLIKDAN " +
      "MAHRUM " +
      "QILISH; " +
      "umrbod " +
      "ozodlikdan " +
      "mahrum " +
      "qilish.\n\n" +
      "⚠️ Jazolar " +
      "yengildan " +
      "og'irga " +
      "qarab " +
      "joylashtirilgan. " +
      "Bu " +
      "tasodifiy " +
      "emas: " +
      "sud " +
      "eng " +
      "yengil " +
      "va " +
      "maqsadga " +
      "erishish " +
      "uchun " +
      "yetarli " +
      "jazoni " +
      "tanlashi " +
      "kerak.\n\n" +
      "Ozodlikdan " +
      "mahrum " +
      "qilish " +
      "— " +
      "eng " +
      "og'ir " +
      "choralardan " +
      "biri " +
      "va " +
      "u " +
      "faqat " +
      "boshqa " +
      "jazolar " +
      "yetarli " +
      "bo'lmaganda " +
      "qo'llaniladi.\n\n" +
      "Qo'shimcha " +
      "jazolar " +
      "ham " +
      "mavjud " +
      "(masalan " +
      "harbiy " +
      "yoki " +
      "maxsus " +
      "unvondan " +
      "mahrum " +
      "qilish).",
    example:
      "Uncha " +
      "og'ir " +
      "bo'lmagan " +
      "jinoyat " +
      "uchun " +
      "sud " +
      "ozodlikdan " +
      "mahrum " +
      "qilish " +
      "o'rniga " +
      "jarima " +
      "yoki " +
      "axloq " +
      "tuzatish " +
      "ishlarini " +
      "tayinlashi " +
      "mumkin.",
    keyPoints: [
      "Jazolar tizimi qonunda to'liq belgilangan",
      "Sud faqat shu ro'yxatdan tanlaydi",
      "Jazolar yengildan og'irga qarab joylashtirilgan",
      "Ozodlikdan mahrum qilish — oxirgi chora",
    ],
    warning:
      "Ro'yxatda " +
      "bo'lmagan " +
      "\"jazo\" " +
      "tayinlash " +
      "mumkin " +
      "emas.",
    lawRefs: [
      { code: "JK", article: "43" },
      { code: "JK", article: "44" },
      { code: "JK", article: "50" },
      { code: "JK", article: "45-1" },
    ],
  },

  /* ── 13 ────────────────────────────────────────────────────── */
  {
    heading: "Jazo tayinlashning umumiy asoslari",
    text:
      "Sud jazoni " +
      "\"o'z " +
      "xohishi\" " +
      "bilan " +
      "tayinlamaydi " +
      "— u " +
      "qat'iy " +
      "asoslarga " +
      "tayanadi.\n\n" +
      "Jazo " +
      "tayinlashda " +
      "hisobga " +
      "olinadi: " +
      "sodir " +
      "etilgan " +
      "jinoyatning " +
      "xarakteri " +
      "va " +
      "ijtimoiy " +
      "xavflilik " +
      "darajasi; " +
      "aybdorning " +
      "shaxsi; " +
      "jazoni " +
      "YENGILLASHTIRUVCHI " +
      "va " +
      "OG'IRLASHTIRUVCHI " +
      "holatlar; " +
      "jazoning " +
      "mahkumni " +
      "tuzatishga " +
      "ta'siri; " +
      "oilaviy " +
      "ahvoli.\n\n" +
      "⚠️ Jazo " +
      "Kodeksning " +
      "tegishli " +
      "moddasida " +
      "belgilangan " +
      "chegaralarda " +
      "tayinlanadi.\n\n" +
      "Ya'ni " +
      "sud " +
      "moddada " +
      "ko'rsatilgan " +
      "eng " +
      "yuqori " +
      "chegaradan " +
      "oshib " +
      "keta " +
      "olmaydi.\n\n" +
      "Alohida " +
      "hollarda " +
      "esa " +
      "moddada " +
      "belgilangandan " +
      "YENGILROQ " +
      "jazo " +
      "tayinlash " +
      "ham " +
      "mumkin " +
      "— " +
      "bu " +
      "alohida " +
      "moddada " +
      "nazarda " +
      "tutilgan.",
    example:
      "Sud " +
      "jinoyat " +
      "og'irligini, " +
      "ayblanuvchining " +
      "yosh " +
      "bolalari " +
      "borligini " +
      "va " +
      "zararni " +
      "qoplaganini " +
      "hisobga " +
      "olib " +
      "yengilroq " +
      "jazo " +
      "tayinladi.",
    keyPoints: [
      "Jazo qat'iy asoslar bo'yicha tayinlanadi",
      "Jinoyat xarakteri va shaxs hisobga olinadi",
      "Yengillashtiruvchi va og'irlashtiruvchi holatlar baholanadi",
      "Sud moddadagi chegaradan oshib keta olmaydi",
    ],
    warning:
      "Yengillashtiruvchi " +
      "holatlarni " +
      "sudga " +
      "HUJJAT " +
      "bilan " +
      "taqdim " +
      "eting " +
      "— " +
      "og'zaki " +
      "aytish " +
      "yetarli " +
      "emas.",
    lawRefs: [
      { code: "JK", article: "54" },
      { code: "JK", article: "57" },
      { code: "JK", article: "8" },
    ],
  },

  /* ── 14 ────────────────────────────────────────────────────── */
  {
    heading: "Jazoni yengillashtiruvchi holatlar",
    text:
      "Bu — himoya " +
      "uchun eng " +
      "muhim " +
      "moddalardan " +
      "biri.\n\n" +
      "Yengillashtiruvchi " +
      "holatlar " +
      "odatda " +
      "quyidagilarni " +
      "qamraydi: " +
      "ayb " +
      "iqrori " +
      "va " +
      "chin " +
      "ko'ngildan " +
      "pushaymon " +
      "bo'lish; " +
      "jinoyatni " +
      "ochishga " +
      "faol " +
      "yordam " +
      "berish; " +
      "yetkazilgan " +
      "zararni " +
      "ixtiyoriy " +
      "QOPLASH; " +
      "jabrlanuvchiga " +
      "yordam " +
      "ko'rsatish; " +
      "og'ir " +
      "shaxsiy " +
      "yoki " +
      "oilaviy " +
      "sharoit " +
      "ta'sirida " +
      "sodir " +
      "etish; " +
      "homiladorlik " +
      "yoki " +
      "yosh " +
      "bolalari " +
      "borligi; " +
      "voyaga " +
      "yetmaganlik.\n\n" +
      "⚠️ RO'YXAT " +
      "ODATDA " +
      "OCHIQ: " +
      "sud " +
      "unda " +
      "ko'rsatilmagan " +
      "boshqa " +
      "holatlarni " +
      "ham " +
      "yengillashtiruvchi " +
      "deb " +
      "topishi " +
      "mumkin.\n\n" +
      "AMALIY " +
      "XULOSA: " +
      "zararni " +
      "qoplash " +
      "va " +
      "jabrlanuvchi " +
      "bilan " +
      "munosabatni " +
      "tiklash " +
      "— " +
      "eng " +
      "samarali " +
      "yo'llardan " +
      "biri.",
    example:
      "Ayblanuvchi " +
      "yetkazilgan " +
      "zararni " +
      "to'liq " +
      "qopladi " +
      "va " +
      "jabrlanuvchidan " +
      "kechirim " +
      "so'radi. " +
      "Sud " +
      "buni " +
      "yengillashtiruvchi " +
      "holat " +
      "sifatida " +
      "hisobga " +
      "oldi.",
    keyPoints: [
      "Yengillashtiruvchi holatlar ro'yxati qonunda berilgan",
      "Zararni qoplash eng samarali holatlardan biri",
      "Ayb iqrori va faol yordam hisobga olinadi",
      "Ro'yxat odatda ochiq — boshqa holatlar ham hisobga olinishi mumkin",
    ],
    warning:
      "Zararni " +
      "qoplashni " +
      "HUJJATLASHTIRING " +
      "— " +
      "og'zaki " +
      "\"berdim\" " +
      "sudda " +
      "hisobga " +
      "olinmaydi.",
    lawRefs: [
      { code: "JK", article: "55" },
      { code: "JK", article: "57-1" },
      { code: "JK", article: "54" },
    ],
  },

  /* ── 15 ────────────────────────────────────────────────────── */
  {
    heading: "Jazoni og'irlashtiruvchi holatlar",
    text:
      "Teskari tomon " +
      "— jazoni " +
      "OG'IRLASHTIRUVCHI " +
      "holatlar.\n\n" +
      "Odatiy " +
      "holatlar: " +
      "jinoyatni " +
      "takroran " +
      "yoki " +
      "retsidiv " +
      "sifatida " +
      "sodir " +
      "etish; " +
      "bir " +
      "guruh " +
      "shaxslar " +
      "tomonidan " +
      "sodir " +
      "etish; " +
      "og'ir " +
      "oqibatlar " +
      "keltirib " +
      "chiqarish; " +
      "voyaga " +
      "yetmagan " +
      "yoki " +
      "himoyasiz " +
      "holatdagi " +
      "shaxsga " +
      "nisbatan " +
      "sodir " +
      "etish; " +
      "voyaga " +
      "yetmaganlarni " +
      "jalb " +
      "qilish; " +
      "alohida " +
      "shafqatsizlik " +
      "bilan " +
      "sodir " +
      "etish.\n\n" +
      "⚠️ MUHIM " +
      "FARQ: " +
      "og'irlashtiruvchi " +
      "holatlar " +
      "ro'yxati " +
      "odatda " +
      "YOPIQ " +
      "— " +
      "ya'ni " +
      "sud " +
      "unda " +
      "ko'rsatilmagan " +
      "holatni " +
      "og'irlashtiruvchi " +
      "deb " +
      "topa " +
      "olmaydi.\n\n" +
      "Bu " +
      "ataylab: " +
      "yengillashtirish " +
      "keng, " +
      "og'irlashtirish " +
      "esa " +
      "qat'iy " +
      "cheklangan " +
      "— " +
      "bu " +
      "insonparvarlik " +
      "tamoyilining " +
      "ifodasi.",
    example:
      "Sud " +
      "ayblanuvchining " +
      "\"o'tmishdagi " +
      "yomon " +
      "xulqi\" " +
      "ni " +
      "og'irlashtiruvchi " +
      "holat " +
      "deb " +
      "hisoblay " +
      "olmaydi " +
      "— " +
      "u " +
      "ro'yxatda " +
      "yo'q.",
    keyPoints: [
      "Og'irlashtiruvchi holatlar ro'yxati qonunda berilgan",
      "Guruh, retsidiv va og'ir oqibatlar asosiy holatlar",
      "Ro'yxat odatda yopiq hisoblanadi",
      "Bu insonparvarlik tamoyilining ifodasi",
    ],
    warning:
      "Ro'yxatda " +
      "yo'q " +
      "holat " +
      "og'irlashtiruvchi " +
      "deb " +
      "hisobga " +
      "olinsa " +
      "— " +
      "bu " +
      "hukmga " +
      "shikoyat " +
      "uchun " +
      "asos.",
    lawRefs: [
      { code: "JK", article: "56" },
      { code: "JK", article: "34" },
      { code: "JK", article: "127" },
    ],
  },

  /* ── 16 ────────────────────────────────────────────────────── */
  {
    heading: "Shartli hukm qilish",
    text:
      "Sud jazo " +
      "tayinlashi, " +
      "lekin uni " +
      "REAL " +
      "ijro " +
      "etmasligi " +
      "ham " +
      "mumkin — " +
      "bu " +
      "shartli " +
      "hukm.\n\n" +
      "Mohiyati: " +
      "sud " +
      "jazo " +
      "tayinlaydi, " +
      "lekin " +
      "mahkum " +
      "belgilangan " +
      "sinov " +
      "muddati " +
      "davomida " +
      "o'zini " +
      "tuzatsa " +
      "jazo " +
      "ijro " +
      "etilmaydi.\n\n" +
      "⚠️ Sinov " +
      "muddati " +
      "davomida " +
      "mahkum " +
      "zimmasiga " +
      "muayyan " +
      "majburiyatlar " +
      "yuklanishi " +
      "mumkin: " +
      "muntazam " +
      "ro'yxatdan " +
      "o'tish, " +
      "ish " +
      "yoki " +
      "o'qish " +
      "joyini " +
      "o'zgartirmaslik, " +
      "muayyan " +
      "joylarga " +
      "bormaslik " +
      "va " +
      "boshqalar.\n\n" +
      "Agar " +
      "mahkum " +
      "shartlarni " +
      "buzsa " +
      "yoki " +
      "yangi " +
      "jinoyat " +
      "sodir " +
      "etsa, " +
      "shartli " +
      "hukm " +
      "bekor " +
      "qilinib " +
      "jazo " +
      "REAL " +
      "ijro " +
      "etilishi " +
      "mumkin.\n\n" +
      "Shartli " +
      "hukm " +
      "— " +
      "ishonch, " +
      "kechirim " +
      "emas.",
    example:
      "Mahkum " +
      "shartli " +
      "hukm " +
      "oldi, " +
      "lekin " +
      "sinov " +
      "muddatida " +
      "belgilangan " +
      "majburiyatlarni " +
      "bajarmadi. " +
      "Shartli " +
      "hukm " +
      "bekor " +
      "qilinishi " +
      "mumkin.",
    keyPoints: [
      "Shartli hukmda jazo tayinlanadi, lekin ijro etilmaydi",
      "Sinov muddati belgilanadi",
      "Mahkum zimmasiga majburiyatlar yuklanishi mumkin",
      "Shartlar buzilsa jazo real ijro etiladi",
    ],
    warning:
      "Sinov " +
      "muddatidagi " +
      "majburiyatlarni " +
      "jiddiy " +
      "qabul " +
      "qiling " +
      "— " +
      "ularni " +
      "buzish " +
      "erkinlikni " +
      "yo'qotishga " +
      "olib " +
      "keladi.",
    lawRefs: [
      { code: "JK", article: "72" },
      { code: "JK", article: "54" },
    ],
  },

  /* ── 17 ────────────────────────────────────────────────────── */
  {
    heading: "Javobgarlikka tortish muddatlari",
    text:
      "Jinoyat " +
      "sodir " +
      "etilgan " +
      "bo'lsa " +
      "ham, " +
      "muayyan " +
      "muddat " +
      "o'tgach " +
      "javobgarlikka " +
      "tortish " +
      "mumkin " +
      "bo'lmay " +
      "qoladi.\n\n" +
      "Javobgarlikka " +
      "tortish " +
      "muddatining " +
      "o'tib " +
      "ketganligi " +
      "munosabati " +
      "bilan " +
      "javobgarlikdan " +
      "ozod " +
      "qilish " +
      "alohida " +
      "moddada " +
      "belgilangan.\n\n" +
      "⚠️ MUDDAT " +
      "JINOYAT " +
      "OG'IRLIGIGA " +
      "bog'liq: " +
      "og'irroq " +
      "jinoyat " +
      "— " +
      "uzoqroq " +
      "muddat.\n\n" +
      "Muddat " +
      "shaxs " +
      "tergovdan " +
      "yoki " +
      "suddan " +
      "yashiringan " +
      "bo'lsa " +
      "TO'XTATIB " +
      "TURILADI " +
      "— " +
      "ya'ni " +
      "yashirinish " +
      "orqali " +
      "\"kutib " +
      "chiqish\" " +
      "ishlamaydi.\n\n" +
      "Shuningdek " +
      "JAZONI " +
      "IJRO " +
      "ETISH " +
      "muddati " +
      "ham " +
      "mavjud: " +
      "hukm " +
      "chiqqan, " +
      "lekin " +
      "belgilangan " +
      "muddatda " +
      "ijro " +
      "etilmagan " +
      "bo'lsa " +
      "jazodan " +
      "ozod " +
      "qilish " +
      "mumkin.\n\n" +
      "Eng " +
      "og'ir " +
      "jinoyatlarga " +
      "nisbatan " +
      "istisnolar " +
      "bo'lishi " +
      "mumkin.",
    example:
      "Uncha " +
      "og'ir " +
      "bo'lmagan " +
      "jinoyat " +
      "bo'yicha " +
      "belgilangan " +
      "muddat " +
      "o'tdi " +
      "va " +
      "shaxs " +
      "yashirinmagan " +
      "edi. " +
      "U " +
      "javobgarlikdan " +
      "ozod " +
      "qilinishi " +
      "mumkin.",
    keyPoints: [
      "Muddat o'tgach javobgarlikka tortib bo'lmaydi",
      "Muddat jinoyat og'irligiga bog'liq",
      "Yashirinish muddatni to'xtatib turadi",
      "Jazoni ijro etish muddati ham mavjud",
    ],
    warning:
      "Muddat " +
      "avtomatik " +
      "ishlamaydi " +
      "— " +
      "u " +
      "protsessual " +
      "tartibda " +
      "qo'llaniladi " +
      "va " +
      "ariza " +
      "talab " +
      "qilishi " +
      "mumkin.",
    lawRefs: [
      { code: "JK", article: "64" },
      { code: "JK", article: "69" },
      { code: "JK", article: "63" },
    ],
  },

  /* ── 18 ────────────────────────────────────────────────────── */
  {
    heading: "Javobgarlikdan ozod qilish asoslari",
    text:
      "Jinoyat sodir " +
      "etilgan " +
      "bo'lsa " +
      "ham, " +
      "qonun " +
      "bir " +
      "necha " +
      "holatda " +
      "javobgarlikdan " +
      "OZOD " +
      "qilish " +
      "imkonini " +
      "beradi.\n\n" +
      "Asosiy " +
      "asoslar: " +
      "javobgarlikka " +
      "tortish " +
      "muddatining " +
      "o'tib " +
      "ketishi; " +
      "qilmish " +
      "yoki " +
      "shaxsning " +
      "ijtimoiy " +
      "xavfliligini " +
      "yo'qotishi; " +
      "aybdorning " +
      "o'z " +
      "qilmishiga " +
      "amalda " +
      "PUSHAYMON " +
      "bo'lishi; " +
      "YARASHUV; " +
      "kasallik; " +
      "AMNISTIYA " +
      "akti.\n\n" +
      "⚠️ ENG " +
      "AMALIY " +
      "IKKITASI " +
      "— " +
      "amalda " +
      "pushaymon " +
      "bo'lish " +
      "va " +
      "yarashuv.\n\n" +
      "Amalda " +
      "pushaymon " +
      "bo'lish " +
      "odatda " +
      "quyidagilarni " +
      "talab " +
      "qiladi: " +
      "ayb " +
      "iqrori; " +
      "jinoyatni " +
      "ochishga " +
      "faol " +
      "yordam; " +
      "yetkazilgan " +
      "zararni " +
      "qoplash.\n\n" +
      "Bu " +
      "institutlar " +
      "ataylab " +
      "yaratilgan: " +
      "ular " +
      "nizoni " +
      "hal " +
      "qilishga " +
      "va " +
      "zararni " +
      "qoplashga " +
      "rag'batlantiradi.",
    example:
      "Ayblanuvchi " +
      "aybini " +
      "tan " +
      "oldi, " +
      "tergovga " +
      "yordam " +
      "berdi " +
      "va " +
      "zararni " +
      "to'liq " +
      "qopladi. " +
      "Qonunda " +
      "belgilangan " +
      "shartlar " +
      "bajarilsa " +
      "u " +
      "javobgarlikdan " +
      "ozod " +
      "qilinishi " +
      "mumkin.",
    keyPoints: [
      "Javobgarlikdan ozod qilishning bir necha asosi bor",
      "Amalda pushaymon bo'lish va yarashuv eng amaliylari",
      "Zararni qoplash ko'p asoslarda talab qilinadi",
      "Amnistiya akti ham asos bo'lishi mumkin",
    ],
    warning:
      "Ozod " +
      "qilish " +
      "AVTOMATIK " +
      "emas " +
      "— " +
      "qonunda " +
      "belgilangan " +
      "barcha " +
      "shartlar " +
      "bajarilishi " +
      "kerak.",
    lawRefs: [
      { code: "JK", article: "65" },
      { code: "JK", article: "66" },
      { code: "JK", article: "67" },
      { code: "JK", article: "68" },
    ],
  },

  /* ── 19 ────────────────────────────────────────────────────── */
  {
    heading: "Yarashuv munosabati bilan ozod qilish",
    text:
      "Bu — " +
      "jabrlanuvchi " +
      "uchun ham, " +
      "ayblanuvchi " +
      "uchun ham " +
      "eng muhim " +
      "institutlardan " +
      "biri.\n\n" +
      "Yarashilganligi " +
      "munosabati " +
      "bilan " +
      "jinoiy " +
      "javobgarlikdan " +
      "ozod " +
      "qilish " +
      "alohida " +
      "moddada " +
      "nazarda " +
      "tutilgan.\n\n" +
      "Odatiy " +
      "shartlar: " +
      "jinoyat " +
      "qonunda " +
      "ko'rsatilgan " +
      "toifaga " +
      "kirishi; " +
      "jabrlanuvchi " +
      "bilan " +
      "YARASHISH; " +
      "yetkazilgan " +
      "zararni " +
      "QOPLASH.\n\n" +
      "⚠️ MUHIM: " +
      "yarashuv " +
      "faqat " +
      "MA'LUM " +
      "toifadagi " +
      "jinoyatlar " +
      "bo'yicha " +
      "mumkin. " +
      "Og'ir " +
      "jinoyatlarda " +
      "u " +
      "qo'llanilmaydi.\n\n" +
      "Jabrlanuvchi " +
      "uchun " +
      "afzalligi: " +
      "u " +
      "zararni " +
      "TEZ " +
      "va " +
      "TO'LIQ " +
      "oladi, " +
      "uzoq " +
      "sud " +
      "jarayonini " +
      "kutmaydi.\n\n" +
      "⚠️ Lekin " +
      "yarashuvga " +
      "MAJBURLASH " +
      "mumkin " +
      "emas — " +
      "bu " +
      "jabrlanuvchining " +
      "erkin " +
      "irodasi " +
      "bo'lishi " +
      "shart.",
    example:
      "Jabrlanuvchiga " +
      "zarar " +
      "to'liq " +
      "qoplandi " +
      "va " +
      "u " +
      "yarashishga " +
      "rozi " +
      "bo'ldi. " +
      "Qonunda " +
      "belgilangan " +
      "toifadagi " +
      "jinoyat " +
      "bo'lsa " +
      "ish " +
      "shu " +
      "asosda " +
      "tugatilishi " +
      "mumkin.",
    keyPoints: [
      "Yarashuv alohida moddada nazarda tutilgan",
      "Zararni qoplash majburiy shart",
      "U faqat ma'lum toifadagi jinoyatlarda qo'llaniladi",
      "Jabrlanuvchi uchun tez va to'liq qoplash imkoni",
    ],
    warning:
      "Yarashuvga " +
      "bosim " +
      "o'tkazish " +
      "qonunga " +
      "zid " +
      "— " +
      "bunday " +
      "holatda " +
      "tergov " +
      "organiga " +
      "yoki " +
      "sudga " +
      "xabar " +
      "bering.",
    lawRefs: [
      { code: "JK", article: "66-1" },
      { code: "JK", article: "66" },
      { code: "JK", article: "15" },
    ],
  },

  /* ── 20 ────────────────────────────────────────────────────── */
  {
    heading: "Jazodan ozod qilish va muddatidan ilgari ozod qilish",
    text:
      "Jazo " +
      "tayinlangandan " +
      "keyin ham " +
      "imkoniyatlar " +
      "tugamaydi.\n\n" +
      "JAZODAN " +
      "OZOD " +
      "QILISH " +
      "asoslari: " +
      "jazoni " +
      "ijro " +
      "etish " +
      "muddatining " +
      "o'tishi; " +
      "shaxsning " +
      "ijtimoiy " +
      "xavflilik " +
      "xususiyatini " +
      "yo'qotishi; " +
      "amalda " +
      "pushaymon " +
      "bo'lish; " +
      "kasallik " +
      "yoki " +
      "mehnat " +
      "qobiliyatini " +
      "yo'qotish; " +
      "amnistiya " +
      "yoki " +
      "AFV " +
      "etish.\n\n" +
      "⚠️ " +
      "ALOHIDA " +
      "MUHIM " +
      "INSTITUT " +
      "— " +
      "jazoni " +
      "o'tashdan " +
      "MUDDATIDAN " +
      "ILGARI " +
      "SHARTLI " +
      "OZOD " +
      "QILISH.\n\n" +
      "U " +
      "mahkum " +
      "jazoning " +
      "belgilangan " +
      "qismini " +
      "o'tab, " +
      "tuzalish " +
      "yo'liga " +
      "o'tganini " +
      "ko'rsatganda " +
      "qo'llaniladi.\n\n" +
      "Yaqin " +
      "institut " +
      "— " +
      "jazoni " +
      "YENGILROG'I " +
      "bilan " +
      "almashtirish " +
      "hamda " +
      "jazoni " +
      "o'tash " +
      "muddatini " +
      "qisqartirish.\n\n" +
      "Bularning " +
      "hammasi " +
      "SUD " +
      "tomonidan " +
      "hal " +
      "qilinadi.",
    example:
      "Mahkum " +
      "jazoning " +
      "belgilangan " +
      "qismini " +
      "o'tadi " +
      "va " +
      "ijobiy " +
      "tavsif " +
      "oldi. " +
      "U " +
      "muddatidan " +
      "ilgari " +
      "shartli " +
      "ozod " +
      "qilish " +
      "uchun " +
      "murojaat " +
      "qilishi " +
      "mumkin.",
    keyPoints: [
      "Jazo tayinlangandan keyin ham imkoniyatlar bor",
      "Muddatidan ilgari shartli ozod qilish asosiy institut",
      "Jazoni yengilrog'i bilan almashtirish ham mumkin",
      "Barchasi sud tomonidan hal qilinadi",
    ],
    warning:
      "Muddatidan " +
      "ilgari " +
      "ozod " +
      "qilish " +
      "uchun " +
      "jazoning " +
      "belgilangan " +
      "qismi " +
      "o'talgan " +
      "bo'lishi " +
      "shart.",
    lawRefs: [
      { code: "JK", article: "73" },
      { code: "JK", article: "74" },
      { code: "JK", article: "75" },
      { code: "JK", article: "76" },
    ],
  },

  /* ── 21 ────────────────────────────────────────────────────── */
  {
    heading: "Sudlanganlik va uning oqibatlari",
    text:
      "Jazo " +
      "o'talgach " +
      "ham " +
      "SUDLANGANLIK " +
      "holati " +
      "saqlanadi va " +
      "u huquqiy " +
      "oqibatlarga " +
      "ega.\n\n" +
      "Sudlanganlikning " +
      "huquqiy " +
      "ahamiyati " +
      "alohida " +
      "moddada " +
      "belgilangan. " +
      "U " +
      "ta'sir " +
      "qilishi " +
      "mumkin: " +
      "ayrim " +
      "lavozimlarni " +
      "egallash " +
      "imkoniyatiga; " +
      "ayrim " +
      "faoliyat " +
      "turlariga; " +
      "yangi " +
      "jinoyat " +
      "sodir " +
      "etilganda " +
      "retsidiv " +
      "sifatida " +
      "baholanishga.\n\n" +
      "⚠️ MUHIM " +
      "YAXSHI " +
      "XABAR: " +
      "sudlanganlik " +
      "ABADIY " +
      "emas. " +
      "U " +
      "ikki " +
      "yo'l " +
      "bilan " +
      "tugaydi:\n\n" +
      "(1) " +
      "TUGALLANISH " +
      "— " +
      "belgilangan " +
      "muddat " +
      "o'tgach " +
      "avtomatik;\n\n" +
      "(2) " +
      "OLIB " +
      "TASHLASH " +
      "— " +
      "sud " +
      "qarori " +
      "bilan " +
      "muddatdan " +
      "oldin.\n\n" +
      "Muddatlarni " +
      "hisoblash " +
      "tartibi " +
      "ham " +
      "alohida " +
      "moddada " +
      "belgilangan.\n\n" +
      "Sudlanganlik " +
      "tugagach " +
      "u " +
      "bilan " +
      "bog'liq " +
      "barcha " +
      "huquqiy " +
      "oqibatlar " +
      "bekor " +
      "bo'ladi.",
    example:
      "Shaxs " +
      "jazoni " +
      "o'tadi " +
      "va " +
      "belgilangan " +
      "muddat " +
      "o'tgach " +
      "sudlanganligi " +
      "tugallandi. " +
      "Endi " +
      "u " +
      "hujjatlarda " +
      "\"sudlanmagan\" " +
      "deb " +
      "hisoblanadi.",
    keyPoints: [
      "Sudlanganlik jazo o'talgach ham saqlanadi",
      "U lavozim va faoliyat imkoniyatlariga ta'sir qiladi",
      "Sudlanganlik muddat o'tgach tugallanadi",
      "Sud qarori bilan muddatdan oldin olib tashlanishi mumkin",
    ],
    warning:
      "Sudlanganlik " +
      "tugagach " +
      "uni " +
      "\"bor\" " +
      "deb " +
      "ko'rsatish " +
      "yoki " +
      "shu " +
      "asosda " +
      "huquqni " +
      "cheklash " +
      "qonunga " +
      "zid.",
    lawRefs: [
      { code: "JK", article: "77" },
      { code: "JK", article: "78" },
      { code: "JK", article: "79" },
      { code: "JK", article: "80" },
    ],
  },

  /* ── 22 ────────────────────────────────────────────────────── */
  {
    heading: "Voyaga yetmaganlarning javobgarligi",
    text:
      "Voyaga " +
      "yetmaganlarga " +
      "nisbatan " +
      "ALOHIDA, " +
      "yumshoqroq " +
      "tartib " +
      "amal " +
      "qiladi.\n\n" +
      "Kodeksda " +
      "ular " +
      "uchun " +
      "alohida " +
      "jazo " +
      "tizimi " +
      "belgilangan " +
      "va " +
      "jazolar " +
      "kattalarnikiga " +
      "qaraganda " +
      "cheklangan.\n\n" +
      "⚠️ ENG " +
      "MUHIM " +
      "IMKONIYAT " +
      "— " +
      "MAJBURLOV " +
      "CHORALARINI " +
      "qo'llagan " +
      "holda " +
      "javobgarlikdan " +
      "yoki " +
      "jazodan " +
      "OZOD " +
      "QILISH.\n\n" +
      "Ya'ni " +
      "voyaga " +
      "yetmaganga " +
      "nisbatan " +
      "jazo " +
      "o'rniga " +
      "tarbiyaviy " +
      "xarakterdagi " +
      "choralar " +
      "qo'llanilishi " +
      "mumkin.\n\n" +
      "Majburlov " +
      "choralarining " +
      "MAQSADI " +
      "— " +
      "jazolash " +
      "emas, " +
      "TARBIYALASH " +
      "va " +
      "tuzatish.\n\n" +
      "Shuningdek " +
      "voyaga " +
      "yetmaganlar " +
      "uchun " +
      "muddatidan " +
      "ilgari " +
      "ozod " +
      "qilish " +
      "va " +
      "jazoni " +
      "yengilrog'i " +
      "bilan " +
      "almashtirish " +
      "ham " +
      "alohida " +
      "tartibga " +
      "solingan.\n\n" +
      "Voyaga " +
      "yetmaganni " +
      "jinoyatga " +
      "JALB " +
      "QILISH " +
      "esa " +
      "o'zi " +
      "alohida " +
      "jinoyat " +
      "hisoblanadi.",
    example:
      "Voyaga " +
      "yetmagan " +
      "shaxs " +
      "uncha " +
      "og'ir " +
      "bo'lmagan " +
      "jinoyat " +
      "sodir " +
      "etdi. " +
      "Sud " +
      "jazo " +
      "o'rniga " +
      "tarbiyaviy " +
      "majburlov " +
      "choralarini " +
      "qo'llashi " +
      "mumkin.",
    keyPoints: [
      "Voyaga yetmaganlar uchun alohida jazo tizimi belgilangan",
      "Majburlov choralari jazo o'rnini bosishi mumkin",
      "Ularning maqsadi jazolash emas, tarbiyalash",
      "Voyaga yetmaganni jinoyatga jalb qilish alohida jinoyat",
    ],
    warning:
      "Voyaga " +
      "yetmagan " +
      "so'roq " +
      "qilinganda " +
      "qonuniy " +
      "vakil " +
      "va " +
      "himoyachi " +
      "ISHTIROKI " +
      "majburiy.",
    lawRefs: [
      { code: "JK", article: "81" },
      { code: "JK", article: "87" },
      { code: "JK", article: "88" },
      { code: "JK", article: "91" },
      { code: "JK", article: "127" },
    ],
  },
];

module.exports = { SECTIONS };
