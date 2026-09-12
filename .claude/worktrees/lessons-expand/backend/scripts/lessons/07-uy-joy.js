"use strict";
/**
 * MODUL 7 — UY-JOY, YER VA KO'CHMAS MULK (9 dars)
 *
 * Manbalar: Uy-joy kodeksi (UJK), Yer kodeksi (YK), Shaharsozlik
 * kodeksi (SHK), Fuqarolik kodeksi (FK — mulk va ro'yxatga olish).
 *
 * Bu modul ataylab uch kodeksni birlashtiradi: foydalanuvchi uchun
 * "uy sotib olish" bitta masala, qonunchilikda esa u uch hujjatga
 * bo'lingan (turar joy — UJK, yer — YK, qurilish — SHK). Darslar
 * shu bo'linishga emas, HAYOTIY VAZIYATGA qarab tuzilgan.
 */

const LESSONS = [
  /* ═══════════════════════════════════════════════════════════════
     1. Uy-joy huquqi  (MAVJUD KALIT — kengaytirildi)
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "uy-joy-huquqi",
    category: "housing",
    level: "basic",
    order: 7010,
    title: "Uy-joy huquqi asoslari",
    desc:
      "Uy-joy fondi, turar joy turlari, mulk huquqi va mulkdorning " +
      "huquq hamda majburiyatlari.",
    objectives: [
      "Uy-joy fondi turlarini va turar joy tushunchasini bilasiz",
      "Turar joyga mulk huquqi qanday vujudga kelishini bilasiz",
      "Mulkdorning huquq va majburiyatlarini bilasiz",
      "Turar joyni boshqa maqsadga o'tkazish qoidalarini bilasiz",
    ],
    practicalSteps: [
      "Uy-joy hujjatlaringiz to'liq va ro'yxatdan o'tganini tekshiring",
      "Turar joyni yashash uchun mo'ljallanmagan joyga o'tkazmoqchi bo'lsangiz, ruxsat tartibini aniqlang",
      "Kommunal to'lovlar va umumiy mulk xarajatlarini o'z vaqtida to'lang",
      "Qo'shnilar bilan nizoda avval yozma murojaat, keyin mahalla, so'ng sud yo'lidan boring",
    ],
    sections: [
      {
        heading: "Uy-joy fondi va turar joy",
        text:
          "UY-JOY FONDI — inson yashashi uchun " +
          "yaroqli bo'lgan turar joylar " +
          "majmui. U ikki turga bo'linadi: " +
          "XUSUSIY va DAVLAT uy-joy " +
          "fondlari.\n\n" +
          "Bu bo'linish shakliy emas: " +
          "har bir fondga o'z qoidalari " +
          "qo'llaniladi. Xususiy fondda " +
          "mulkdor keng huquqlarga ega, " +
          "davlat fondida esa ijaraga " +
          "berish va foydalanish " +
          "qoidalari qat'iyroq.\n\n" +
          "TURAR JOY — fuqarolarning " +
          "doimiy yashashiga " +
          "mo'ljallangan, belgilangan " +
          "talablarga javob beradigan " +
          "joy.\n\n" +
          "Turar joylarga uylar, ko'p " +
          "kvartirali uylardagi " +
          "kvartiralar va boshqa " +
          "turlar kiradi.\n\n" +
          "Muhim qoida: turar joydan " +
          "MAQSADIGA MUVOFIQ " +
          "foydalanilishi kerak. " +
          "Ya'ni uni ishlab chiqarish " +
          "yoki boshqa maqsadda " +
          "ishlatish uchun alohida " +
          "tartib mavjud.\n\n" +
          "TURAR JOYNI YASHASH UCHUN " +
          "MO'LJALLANMAGAN JOYGA " +
          "O'TKAZISH mumkin, lekin " +
          "belgilangan tartibda va " +
          "ruxsat asosida.\n\n" +
          "Uylar va turar joylar " +
          "eskirganligi yoki " +
          "avariya holatida " +
          "ekanligi sababli " +
          "uy-joy fondidan " +
          "chiqarilishi ham " +
          "mumkin.",
        example:
          "Kvartira egasi uni " +
          "do'kon sifatida " +
          "ishlatishni boshladi, " +
          "hech qanday ruxsat " +
          "olmadi. Turar joyni " +
          "boshqa maqsadga " +
          "o'tkazish belgilangan " +
          "tartibda amalga " +
          "oshiriladi — aks " +
          "holda bu buzilish " +
          "hisoblanadi va " +
          "qo'shnilar e'tiroz " +
          "bildirishi mumkin.",
        keyPoints: [
          "Uy-joy fondi xususiy va davlat fondlariga bo'linadi",
          "Turar joy doimiy yashash uchun mo'ljallangan va talablarga javob berishi kerak",
          "Turar joydan maqsadiga muvofiq foydalanish kerak",
          "Boshqa maqsadga o'tkazish belgilangan tartibda amalga oshiriladi",
        ],
        warning:
          "Avariya holatidagi " +
          "uyda yashashni davom " +
          "ettirish xavfli va " +
          "bunday holatda " +
          "davlat tomonidan " +
          "uy-joy berish " +
          "asoslari mavjud — " +
          "bu masalani rasmiy " +
          "ko'tarish kerak.",
        lawRefs: [
          { code: "UJK", article: "7" },
          { code: "UJK", article: "8" },
          { code: "UJK", article: "9" },
          { code: "UJK", article: "10" },
          { code: "UJK", article: "15" },
          { code: "UJK", article: "18" },
        ],
      },
      {
        heading: "Mulk huquqi va mulkdorning majburiyatlari",
        text:
          "Turar joy xususiy yoki davlat " +
          "mulki bo'lishi mumkin. " +
          "Fuqarolar va yuridik " +
          "shaxslarning turar joyni " +
          "xususiy mulk qilib olishi " +
          "asoslari qonunda " +
          "belgilangan.\n\n" +
          "ENG MUHIM TALAB: turar " +
          "joyga bo'lgan mulk " +
          "huquqi, boshqa ashyoviy " +
          "huquqlar hamda turar " +
          "joyga oid bitimlar " +
          "DAVLAT RO'YXATIDAN " +
          "o'tkaziladi.\n\n" +
          "Bu talab bajarilmasa, " +
          "huquq to'liq " +
          "shakllanmagan " +
          "hisoblanadi. Amalda " +
          "bu shuni bildiradi: " +
          "pul to'langan va " +
          "kalit olingan " +
          "bo'lsa ham, " +
          "ro'yxatga olinmagan " +
          "huquq uchinchi " +
          "shaxslarga qarshi " +
          "kuchsiz bo'ladi.\n\n" +
          "MULKDORNING " +
          "HUQUQLARI keng: " +
          "egalik qilish, " +
          "foydalanish, " +
          "tasarruf etish, " +
          "ijaraga berish, " +
          "almashtirish.\n\n" +
          "MAJBURIYATLAR ham " +
          "bor va ular " +
          "ko'pincha " +
          "e'tibordan chetda " +
          "qoladi: turar " +
          "joyni saqlash, " +
          "sanitariya va " +
          "texnik holatini " +
          "ta'minlash, " +
          "kommunal " +
          "to'lovlarni " +
          "amalga " +
          "oshirish, " +
          "qo'shnilarning " +
          "huquqlarini " +
          "hurmat " +
          "qilish.\n\n" +
          "Turar joyni " +
          "ALMASHTIRISH " +
          "imkoniyati ham " +
          "nazarda " +
          "tutilgan, lekin " +
          "u barcha voyaga " +
          "yetgan " +
          "yashovchilarning " +
          "roziligini talab " +
          "qiladi.",
        example:
          "Uy sotib olingan, " +
          "pul to'langan, " +
          "lekin hujjat " +
          "ro'yxatdan " +
          "o'tkazilmagan. " +
          "Sotuvchi vafot " +
          "etgach uning " +
          "merosxo'rlari " +
          "uyni meros deb " +
          "da'vo qildi. " +
          "Ro'yxatga olish " +
          "aynan shunday " +
          "holatlarda " +
          "himoya beradi.",
        keyPoints: [
          "Turar joyga mulk huquqi DAVLAT RO'YXATIDAN o'tkaziladi",
          "Ro'yxatga olinmagan huquq uchinchi shaxslarga qarshi kuchsiz",
          "Mulkdorning saqlash va kommunal to'lov majburiyatlari bor",
          "Almashtirish barcha voyaga yetgan yashovchilar roziligini talab qiladi",
        ],
        warning:
          "«Ishonchnoma " +
          "bilan sotish» " +
          "sxemasi keng " +
          "tarqalgan, lekin " +
          "u mulk huquqini " +
          "o'tkazmaydi. " +
          "Bunday " +
          "bitimda " +
          "xaridor " +
          "himoyasiz " +
          "qoladi.",
        lawRefs: [
          { code: "UJK", article: "11" },
          { code: "UJK", article: "13" },
          { code: "UJK", article: "22" },
          { code: "UJK", article: "24" },
          { code: "UJK", article: "26" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     2. Uy-joyda yashovchilar huquqlari
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "uy-joy-yashovchilar",
    category: "housing",
    level: "mid",
    order: 7020,
    title: "Oila a'zolari va yashovchilarning huquqlari",
    desc:
      "Mulkdor oila a'zolari, doimiy yashovchilar, ko'chirib " +
      "kiritish va foydalanish huquqini yo'qotish.",
    objectives: [
      "Mulkdor oila a'zolarining huquqlarini bilasiz",
      "Kimni turar joyga ko'chirib kiritish mumkinligini bilasiz",
      "Foydalanish huquqini yo'qotish asoslarini bilasiz",
      "Vaqtincha bo'lmaganda turar joy saqlanishini bilasiz",
    ],
    practicalSteps: [
      "Turar joyga kimnidir ko'chirib kiritishdan oldin huquqiy oqibatlarini aniqlang",
      "Yashash huquqingizni tasdiqlovchi hujjatlarni saqlang",
      "Uzoq vaqt boshqa joyda bo'lsangiz, bu haqda tegishli organni xabardor qiling",
      "Nizoda avval yozma murojaat qiling, keyin sud yo'liga o'ting",
    ],
    sections: [
      {
        heading: "Oila a'zolari va doimiy yashovchilar",
        text:
          "Turar joyda faqat mulkdor " +
          "emas, boshqa shaxslar ham " +
          "yashaydi va ularning " +
          "huquqiy holati alohida " +
          "tartibga solingan.\n\n" +
          "Mulkdor OILA A'ZOLARINING, " +
          "shuningdek u bilan doimiy " +
          "yashayotgan fuqarolarning " +
          "huquq va majburiyatlari " +
          "qonunda belgilangan.\n\n" +
          "Bu qoidaning amaliy " +
          "ma'nosi katta: turar " +
          "joyda qonuniy asosda " +
          "yashayotgan shaxs " +
          "shunchaki «mehmon» " +
          "emas — uning " +
          "foydalanish huquqi " +
          "bor.\n\n" +
          "KO'CHIRIB KIRITISH " +
          "masalasi shu sababdan " +
          "jiddiy: turar joyga " +
          "boshqa fuqarolarni " +
          "ko'chirib kiritish " +
          "belgilangan tartibda " +
          "amalga oshiriladi va " +
          "u huquqiy " +
          "oqibatlarga ega.\n\n" +
          "Ijaraga oluvchining " +
          "turar joyga oila " +
          "a'zolari va boshqa " +
          "fuqarolarni " +
          "ko'chirib kiritish " +
          "huquqi ham alohida " +
          "tartibga " +
          "solingan.\n\n" +
          "VAQTINCHA " +
          "BO'LMAGANLIK: " +
          "fuqaro uzoq vaqt " +
          "turar joyda " +
          "bo'lmasa ham, " +
          "uning turar joyi " +
          "belgilangan " +
          "muddatlarda " +
          "SAQLANADI.\n\n" +
          "Bu kafolat " +
          "muhim: ishga " +
          "yoki " +
          "davolanishga " +
          "ketgan shaxs " +
          "uy-joyidan " +
          "avtomatik " +
          "mahrum " +
          "bo'lmaydi.",
        example:
          "Fuqaro bir necha " +
          "yil boshqa " +
          "shaharda ishladi. " +
          "Qaytgach unga " +
          "«siz bu yerda " +
          "yashamaysiz» " +
          "deyildi. Qonun " +
          "vaqtincha " +
          "bo'lmaganlikda " +
          "turar joy " +
          "saqlanishini " +
          "nazarda tutadi — " +
          "bu huquq " +
          "avtomatik " +
          "yo'qolmaydi.",
        keyPoints: [
          "Mulkdor oila a'zolari va doimiy yashovchilarning huquqlari qonunda belgilangan",
          "Qonuniy asosda yashovchi shaxsning foydalanish huquqi bor",
          "Ko'chirib kiritish huquqiy oqibatlarga ega",
          "Vaqtincha bo'lmaganda turar joy belgilangan muddatlarda saqlanadi",
        ],
        warning:
          "Kimnidir " +
          "«vaqtincha» " +
          "ro'yxatga qo'yish " +
          "keyin uni " +
          "chiqarishni " +
          "qiyinlashtirishi " +
          "mumkin. " +
          "Oqibatlarni " +
          "oldindan " +
          "aniqlang.",
        lawRefs: [
          { code: "UJK", article: "32" },
          { code: "UJK", article: "50" },
          { code: "UJK", article: "51" },
          { code: "UJK", article: "52" },
          { code: "UJK", article: "55" },
        ],
      },
      {
        heading: "Foydalanish huquqini yo'qotish",
        text:
          "Turar joydan foydalanish " +
          "huquqi abadiy emas: " +
          "qonun uni yo'qotish " +
          "asoslarini " +
          "belgilaydi.\n\n" +
          "Fuqarolarni turar " +
          "joydan foydalanish " +
          "huquqini yo'qotgan " +
          "deb topish " +
          "belgilangan tartibda " +
          "amalga oshiriladi.\n\n" +
          "ENG MUHIM " +
          "PROTSESSUAL " +
          "KAFOLAT: bu " +
          "masala SUD " +
          "tartibida hal " +
          "qilinadi.\n\n" +
          "Ya'ni mulkdor " +
          "o'z qarori bilan " +
          "birovni " +
          "«huquqini " +
          "yo'qotgan» deb " +
          "e'lon qila " +
          "olmaydi va " +
          "o'zboshimchalik " +
          "bilan chiqarib " +
          "yubora " +
          "olmaydi.\n\n" +
          "Bu Konstitutsiyadagi " +
          "kafolat bilan " +
          "bog'liq: hech " +
          "kim sudning " +
          "qarorisiz " +
          "uy-joyidan " +
          "mahrum " +
          "etilishi " +
          "mumkin " +
          "emas.\n\n" +
          "Ijaraga berish " +
          "shartnomasi " +
          "shartlarining " +
          "haqiqiy " +
          "emasligi " +
          "masalasi ham " +
          "tartibga " +
          "solingan — " +
          "ya'ni " +
          "shartnomaga " +
          "yozilgan har " +
          "qanday " +
          "shart " +
          "ishlamaydi.\n\n" +
          "Amaliy " +
          "xulosa: " +
          "uy-joy " +
          "nizosida " +
          "asosiy " +
          "yo'l — " +
          "sud, va " +
          "unga " +
          "tayyorgarlik " +
          "hujjat " +
          "to'plashdan " +
          "boshlanadi.",
        example:
          "Uy egasi " +
          "ijarachining " +
          "narsalarini " +
          "chiqarib, " +
          "qulfni " +
          "almashtirdi. " +
          "Shartnoma " +
          "tugagan " +
          "bo'lsa ham, " +
          "bu " +
          "o'zboshimchalik " +
          "hisoblanadi — " +
          "chiqarish " +
          "sud qarori " +
          "asosida " +
          "amalga " +
          "oshiriladi.",
        keyPoints: [
          "Foydalanish huquqini yo'qotish SUD tartibida belgilanadi",
          "Mulkdor o'zboshimchalik bilan chiqarib yubora olmaydi",
          "Bu Konstitutsiyadagi uy-joy kafolati bilan bog'liq",
          "Shartnomadagi qonunga zid shartlar ishlamaydi",
        ],
        warning:
          "O'zboshimchalik " +
          "bilan chiqarib " +
          "yuborish " +
          "mulkdorni " +
          "javobgar " +
          "qilib " +
          "qo'yishi va " +
          "zararni " +
          "qoplashga " +
          "majbur " +
          "etishi " +
          "mumkin.",
        lawRefs: [
          { code: "UJK", article: "54" },
          { code: "UJK", article: "37" },
          { code: "KONS", article: "47" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     3. Turar joyni ijaraga berish
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "uy-joy-ijara",
    category: "housing",
    level: "basic",
    order: 7030,
    title: "Turar joyni ijaraga berish va olish",
    desc:
      "Xususiy va davlat uy-joy fondida ijara: shartnoma shartlari, " +
      "muddat, haq va tomonlar majburiyatlari.",
    objectives: [
      "Xususiy va davlat fondidagi ijara farqini bilasiz",
      "Ijara shartnomasiga nima yozilishi kerakligini bilasiz",
      "Ijara haqi va uni oshirish masalasini tushunasiz",
      "Tomonlarning majburiyatlarini bilasiz",
    ],
    practicalSteps: [
      "Ijara shartnomasini YOZMA tuzing va uy-joy holatini dalolatnoma bilan qayd eting",
      "Mulkdorning huquq hujjatini tekshiring — u haqiqiy mulkdormi",
      "Ijara haqi, uni oshirish tartibi va kommunal to'lovlar kim zimmasida ekanini yozing",
      "To'lovlarni hujjatlashtiring: tilxat yoki bank o'tkazmasi",
    ],
    sections: [
      {
        heading: "Xususiy fondda ijara",
        text:
          "Fuqarolar va yuridik " +
          "shaxslarga tegishli " +
          "uylar hamda " +
          "kvartiralardagi turar " +
          "joylarni ijaraga va " +
          "arendaga berish " +
          "qonunda tartibga " +
          "solingan.\n\n" +
          "Xususiy fondda " +
          "tomonlar erkinroq: " +
          "ijara haqi va " +
          "ko'p shartlar " +
          "KELISHUV bilan " +
          "belgilanadi.\n\n" +
          "Lekin bu erkinlik " +
          "cheksiz emas — " +
          "shartnoma " +
          "qonun " +
          "talablariga " +
          "javob berishi " +
          "kerak.\n\n" +
          "Fuqaroga mulk " +
          "huquqi asosida " +
          "tegishli bo'lgan " +
          "turar joyni " +
          "ijaraga berish " +
          "shartlari va " +
          "haqi alohida " +
          "moddalarda " +
          "belgilangan.\n\n" +
          "AMALIY " +
          "MASLAHATLAR " +
          "ijarachi " +
          "uchun.\n\n" +
          "Birinchidan, " +
          "mulkdorning " +
          "huquq " +
          "hujjatini " +
          "tekshiring. " +
          "Ijaraga " +
          "berish " +
          "huquqi " +
          "mulk " +
          "egasiga " +
          "tegishli.\n\n" +
          "Ikkinchidan, " +
          "shartnomani " +
          "yozma " +
          "tuzing va " +
          "unda " +
          "muddatni, " +
          "haqni, " +
          "haqni " +
          "oshirish " +
          "tartibini " +
          "va " +
          "kommunal " +
          "to'lovlarni " +
          "kim " +
          "to'lashini " +
          "aniq " +
          "yozing.\n\n" +
          "Uchinchidan, " +
          "kirish " +
          "paytida " +
          "uy-joy " +
          "holatini " +
          "dalolatnoma " +
          "va " +
          "suratlar " +
          "bilan " +
          "qayd " +
          "eting.",
        example:
          "Ijarachi " +
          "chiqayotganda " +
          "mulkdor " +
          "«devorni " +
          "buzgansiz» " +
          "deb " +
          "zakalatni " +
          "qaytarmadi. " +
          "Kirish " +
          "paytida " +
          "suratlar " +
          "olingan " +
          "bo'lsa, " +
          "holatni " +
          "solishtirish " +
          "va " +
          "da'voni " +
          "rad " +
          "etish " +
          "oson " +
          "bo'lardi.",
        keyPoints: [
          "Xususiy fondda ijara shartlari asosan kelishuv bilan belgilanadi",
          "Ijaraga berish huquqi mulk egasiga tegishli — hujjatni tekshiring",
          "Shartnomada muddat, haq, oshirish tartibi va kommunal to'lovlar yozilsin",
          "Kirish paytida holatni dalolatnoma va suratlar bilan qayd eting",
        ],
        warning:
          "Og'zaki " +
          "ijara " +
          "kelishuvi " +
          "ikki " +
          "tomon " +
          "uchun " +
          "ham " +
          "xavfli. " +
          "Nizoda " +
          "hech " +
          "kim " +
          "hech " +
          "narsani " +
          "isbotlay " +
          "olmaydi.",
        lawRefs: [
          { code: "UJK", article: "25" },
          { code: "UJK", article: "33" },
          { code: "UJK", article: "34" },
          { code: "FK2", article: "606" },
        ],
      },
      {
        heading: "Davlat uy-joy fondida ijara",
        text:
          "Davlat uy-joy fondidagi " +
          "ijara butunlay " +
          "boshqacha tartibga " +
          "bo'ysunadi va u " +
          "ancha " +
          "qat'iyroq.\n\n" +
          "Turar joyni " +
          "ijaraga berish " +
          "SHARTNOMASI " +
          "belgilangan " +
          "shaklda " +
          "tuziladi; " +
          "uning " +
          "MUDDATI ham " +
          "qonunda " +
          "tartibga " +
          "solingan.\n\n" +
          "Turar joy " +
          "berish uchun " +
          "asos — TURAR " +
          "JOY HUJJATI " +
          "(order). U " +
          "belgilangan " +
          "tartibda " +
          "beriladi va " +
          "haqiqiy emas " +
          "deb topilishi " +
          "asoslari " +
          "hamda " +
          "oqibatlari " +
          "ham " +
          "belgilangan.\n\n" +
          "MUHTOJLIK: " +
          "fuqarolarni " +
          "uy-joy " +
          "sharoitlarini " +
          "yaxshilashga " +
          "muhtoj deb " +
          "topish " +
          "asoslari " +
          "qonunda " +
          "sanalgan.\n\n" +
          "Bu " +
          "ro'yxatga " +
          "kirish " +
          "uchun " +
          "asos " +
          "bo'ladi — " +
          "shuning " +
          "uchun " +
          "shartlarni " +
          "aniq " +
          "bilish " +
          "foydali.\n\n" +
          "IJTIMOIY " +
          "NORMA: " +
          "uy-joy " +
          "maydonining " +
          "ijtimoiy " +
          "normasi " +
          "belgilangan " +
          "va u " +
          "beriladigan " +
          "turar joy " +
          "hajmini " +
          "aniqlashda " +
          "ishlatiladi.\n\n" +
          "TOMONLAR " +
          "MAJBURIYATLARI " +
          "ham " +
          "belgilangan: " +
          "ijaraga " +
          "beruvchi " +
          "turar " +
          "joyni " +
          "saqlash " +
          "va " +
          "ta'mirlash " +
          "bo'yicha " +
          "majburiyatlarga " +
          "ega.",
        example:
          "Fuqaro " +
          "uy-joy " +
          "sharoitini " +
          "yaxshilashga " +
          "muhtoj " +
          "deb " +
          "hisoblaydi, " +
          "lekin " +
          "ro'yxatga " +
          "olish " +
          "uchun " +
          "murojaat " +
          "qilmagan. " +
          "Huquq " +
          "avtomatik " +
          "amalga " +
          "oshmaydi — " +
          "ariza " +
          "berish " +
          "va " +
          "shartlarni " +
          "tasdiqlash " +
          "kerak.",
        keyPoints: [
          "Davlat fondida ijara qoidalari ancha qat'iy va rasmiylashtirilgan",
          "Turar joy berish uchun asos — turar joy hujjati (order)",
          "Muhtoj deb topish asoslari qonunda sanalgan",
          "Uy-joy maydonining ijtimoiy normasi belgilangan",
        ],
        warning:
          "Turar " +
          "joy " +
          "hujjati " +
          "(order) " +
          "haqiqiy " +
          "emas " +
          "deb " +
          "topilishi " +
          "mumkin. " +
          "Uni " +
          "olishda " +
          "barcha " +
          "shartlarga " +
          "rioya " +
          "qilinganini " +
          "tekshiring.",
        lawRefs: [
          { code: "UJK", article: "35" },
          { code: "UJK", article: "36" },
          { code: "UJK", article: "38" },
          { code: "UJK", article: "42" },
          { code: "UJK", article: "45" },
          { code: "UJK", article: "49" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     4. Ko'p kvartirali uy
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "kop-kvartirali-uy",
    category: "housing",
    level: "mid",
    order: 7040,
    title: "Ko'p kvartirali uy va umumiy mulk",
    desc:
      "Umumiy mol-mulk nima, u kimga tegishli, xarajatlar qanday " +
      "taqsimlanadi va qo'shnilar bilan nizolar.",
    objectives: [
      "Ko'p kvartirali uydagi umumiy mulk tarkibini bilasiz",
      "Umumiy mulk kimga tegishli ekanini bilasiz",
      "Xarajatlar qanday taqsimlanishini bilasiz",
      "Yashash uchun mo'ljallanmagan joylardan foydalanish qoidalarini bilasiz",
    ],
    practicalSteps: [
      "Umumiy mulkka o'zboshimchalik bilan o'zgartirish kiritmang — bu barcha mulkdorlar mulki",
      "Uy boshqaruvi qarorlarida qatnashing: xarajatlar shu yerda hal qilinadi",
      "Qo'shni umumiy hududni egallasa, avval yozma murojaat, keyin sud yo'lidan boring",
      "Kommunal va umumiy mulk to'lovlarini o'z vaqtida to'lang",
    ],
    sections: [
      {
        heading: "Umumiy mulk va uning tarkibi",
        text:
          "Ko'p kvartirali uyda " +
          "har bir mulkdorda " +
          "ikki narsa bor: o'z " +
          "kvartirasi va " +
          "UMUMIY MOL-MULKDAGI " +
          "ULUSH.\n\n" +
          "Ko'p kvartirali " +
          "uydagi turar " +
          "joylar va yashash " +
          "uchun " +
          "mo'ljallanmagan " +
          "joylar " +
          "mulkdorlarining " +
          "umumiy mol-mulki " +
          "qonunda " +
          "belgilangan.\n\n" +
          "Umumiy mol-mulkka " +
          "odatda " +
          "quyidagilar " +
          "kiradi: " +
          "yo'laklar, " +
          "zinapoyalar, " +
          "liftlar, " +
          "tomlar, " +
          "poydevorlar, " +
          "muhandislik " +
          "tarmoqlari va " +
          "uyga xizmat " +
          "qiladigan " +
          "boshqa " +
          "obyektlar.\n\n" +
          "MUHIM QOIDA: " +
          "umumiy " +
          "mol-mulk " +
          "barcha " +
          "mulkdorlarga " +
          "birgalikda " +
          "tegishli va " +
          "uni alohida " +
          "sotib " +
          "bo'lmaydi. " +
          "Ulush " +
          "kvartiradan " +
          "ajratilmaydi: " +
          "kvartira " +
          "sotilsa, " +
          "ulush ham " +
          "u bilan " +
          "o'tadi.\n\n" +
          "XARAJATLAR: " +
          "har bir " +
          "mulkdor " +
          "umumiy " +
          "mol-mulkni " +
          "saqlash " +
          "xarajatlarini " +
          "o'z " +
          "ulushiga " +
          "mos " +
          "ravishda " +
          "ko'taradi.\n\n" +
          "Shu sababli " +
          "«men " +
          "liftdan " +
          "foydalanmayman, " +
          "to'lamayman» " +
          "degan asos " +
          "ishlamaydi — " +
          "to'lov " +
          "foydalanishga " +
          "emas, " +
          "mulkka " +
          "bog'liq.",
        example:
          "Birinchi " +
          "qavat " +
          "yashovchisi " +
          "lift " +
          "xarajatini " +
          "to'lashdan " +
          "bosh " +
          "tortdi. " +
          "Lift " +
          "umumiy " +
          "mol-mulk " +
          "bo'lgani " +
          "va " +
          "xarajat " +
          "ulushga " +
          "mos " +
          "taqsimlangani " +
          "uchun " +
          "bu " +
          "asos " +
          "huquqiy " +
          "jihatdan " +
          "kuchsiz.",
        keyPoints: [
          "Har bir mulkdorda kvartira va umumiy mulkdagi ulush bor",
          "Umumiy mol-mulk alohida sotilmaydi — u kvartira bilan o'tadi",
          "Xarajatlar ulushga mos ravishda taqsimlanadi",
          "To'lov foydalanishga emas, mulkka bog'liq",
        ],
        warning:
          "Umumiy " +
          "yo'lakni " +
          "yoki " +
          "hovlini " +
          "o'zboshimchalik " +
          "bilan " +
          "egallash " +
          "boshqa " +
          "mulkdorlarning " +
          "huquqini " +
          "buzadi " +
          "va " +
          "sud " +
          "orqali " +
          "bartaraf " +
          "etilishi " +
          "mumkin.",
        lawRefs: [
          { code: "FK", article: "211" },
          { code: "FK", article: "221" },
          { code: "UJK", article: "16" },
          { code: "UJK", article: "16-1" },
        ],
      },
      {
        heading: "Qo'shnilar bilan nizolar",
        text:
          "Ko'p kvartirali uyda " +
          "eng ko'p uchraydigan " +
          "nizolar uch " +
          "turkumga " +
          "bo'linadi.\n\n" +
          "Birinchisi — " +
          "UMUMIY MULKKA " +
          "aralashish: " +
          "yo'lakni " +
          "egallash, " +
          "umumiy " +
          "tarmoqlarga " +
          "ruxsatsiz " +
          "ulanish, " +
          "tomga " +
          "chiqish.\n\n" +
          "Ikkinchisi — " +
          "FOYDALANISHGA " +
          "TO'SQINLIK: " +
          "shovqin, " +
          "suv " +
          "oqishi, " +
          "hid.\n\n" +
          "Uchinchisi — " +
          "QURILISH " +
          "va qayta " +
          "rejalashtirish: " +
          "ruxsatsiz " +
          "devor " +
          "buzish, " +
          "balkonni " +
          "kengaytirish.\n\n" +
          "Har uch " +
          "holatda " +
          "himoya " +
          "vositasi " +
          "bir xil " +
          "— " +
          "NEGATOR " +
          "DA'VO: " +
          "buzilishni " +
          "bartaraf " +
          "etishni " +
          "talab " +
          "qilish.\n\n" +
          "Amaliy " +
          "ketma-ketlik: " +
          "yozma " +
          "murojaat " +
          "→ uy " +
          "boshqaruvi " +
          "yoki " +
          "mahalla " +
          "→ " +
          "tegishli " +
          "nazorat " +
          "organi " +
          "→ " +
          "sud.\n\n" +
          "Dalil " +
          "to'plash " +
          "muhim: " +
          "suratlar, " +
          "videolar, " +
          "guvohlar, " +
          "o'lchov " +
          "natijalari.\n\n" +
          "Yashash " +
          "uchun " +
          "mo'ljallanmagan " +
          "joylardan " +
          "foydalanish " +
          "ham " +
          "tartibga " +
          "solingan " +
          "— " +
          "ular " +
          "uydagi " +
          "yashovchilarga " +
          "xalaqit " +
          "bermasligi " +
          "kerak.",
        example:
          "Qo'shni " +
          "kvartirasini " +
          "ofisga " +
          "aylantirdi " +
          "va " +
          "kun " +
          "bo'yi " +
          "mijozlar " +
          "kelib " +
          "ketdi. " +
          "Turar " +
          "joydan " +
          "maqsadiga " +
          "muvofiq " +
          "foydalanish " +
          "talabi " +
          "buzilgani " +
          "uchun " +
          "boshqa " +
          "mulkdorlar " +
          "e'tiroz " +
          "bildirishi " +
          "mumkin.",
        keyPoints: [
          "Asosiy nizolar: umumiy mulkka aralashish, to'sqinlik, ruxsatsiz qurilish",
          "Himoya vositasi — buzilishni bartaraf etishni talab qilish",
          "Ketma-ketlik: yozma murojaat → boshqaruv/mahalla → nazorat organi → sud",
          "Dalil to'plash (surat, video, guvoh) hal qiluvchi ahamiyatga ega",
        ],
        warning:
          "Javob " +
          "sifatida " +
          "o'zingiz " +
          "ham " +
          "qoidani " +
          "buzsangiz " +
          "(masalan " +
          "yo'lakni " +
          "to'sib " +
          "qo'yish), " +
          "sudda " +
          "sizning " +
          "holatingiz " +
          "ham " +
          "zaiflashadi.",
        lawRefs: [
          { code: "FK", article: "231" },
          { code: "UJK", article: "16" },
          { code: "UJK", article: "24" },
          { code: "FK", article: "172" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     5. Uy-joyni olib qo'yish
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "uy-joy-olib-qoyish",
    category: "housing",
    level: "advanced",
    order: 7050,
    title: "Uy-joyni buzish va davlat ehtiyoji uchun olib qo'yish",
    desc:
      "Yer uchastkasi davlat ehtiyoji uchun olib qo'yilganda uy-joy " +
      "egalarining huquqlari, kompensatsiya va yangi uy-joy berish.",
    objectives: [
      "Olib qo'yish qanday asoslarda amalga oshirilishini bilasiz",
      "Mulkdorning kompensatsiya huquqini bilasiz",
      "Yangi uy-joy berish qoidalarini bilasiz",
      "Baholash bilan rozi bo'lmasangiz nima qilish kerakligini bilasiz",
    ],
    practicalSteps: [
      "Olib qo'yish haqidagi qarorni yozma oling va uning asosini tekshiring",
      "Mustaqil baholash o'tkazing — taklif qilingan summa bilan solishtirish uchun",
      "Barcha yaxshilash va qurilish xarajatlarini hujjat bilan tasdiqlang",
      "Baho bilan rozi bo'lmasangiz, sud tartibida e'tiroz bildirish yo'li ochiq",
    ],
    sections: [
      {
        heading: "Olib qo'yish asoslari va tartibi",
        text:
          "Yer uchastkalari davlat " +
          "yoki jamoat ehtiyojlari " +
          "uchun olib qo'yilishi " +
          "mumkin va bu holatda " +
          "uy-joy egalarining " +
          "huquqlari alohida " +
          "tartibga " +
          "solingan.\n\n" +
          "Bu institut " +
          "murakkab, chunki " +
          "unda ikki manfaat " +
          "to'qnashadi: " +
          "jamoat ehtiyoji " +
          "va shaxsning " +
          "mulk huquqi.\n\n" +
          "Qonun " +
          "muvozanatni " +
          "shunday " +
          "topadi: olib " +
          "qo'yish " +
          "mumkin, lekin " +
          "faqat " +
          "belgilangan " +
          "asoslarda va " +
          "faqat " +
          "TO'LIQ " +
          "KOMPENSATSIYA " +
          "bilan.\n\n" +
          "Fuqarolar va " +
          "yuridik " +
          "shaxslar " +
          "uchun " +
          "oqibatlar " +
          "alohida " +
          "moddalarda " +
          "belgilangan.\n\n" +
          "BUZILISHI " +
          "LOZIM " +
          "BO'LGAN " +
          "uylar, " +
          "imoratlar " +
          "va " +
          "inshootlarning " +
          "ko'chirilishi " +
          "ham " +
          "tartibga " +
          "solingan.\n\n" +
          "Amaliy " +
          "jihatdan " +
          "eng " +
          "muhim " +
          "qadam: " +
          "qarorni " +
          "YOZMA " +
          "olish " +
          "va " +
          "uning " +
          "asosini " +
          "tekshirish. " +
          "Olib " +
          "qo'yish " +
          "haqiqiy " +
          "davlat " +
          "yoki " +
          "jamoat " +
          "ehtiyoji " +
          "bilan " +
          "bog'liq " +
          "bo'lishi " +
          "kerak.\n\n" +
          "Konstitutsiya " +
          "ham " +
          "kafolat " +
          "beradi: " +
          "hech " +
          "kim " +
          "sudning " +
          "qarorisiz " +
          "va " +
          "qonunga " +
          "zid " +
          "tarzda " +
          "uy-joyidan " +
          "mahrum " +
          "etilishi " +
          "mumkin " +
          "emas.",
        example:
          "Hududda " +
          "qurilish " +
          "rejalashtirilgani " +
          "sababli " +
          "uy " +
          "buzilishi " +
          "kerak " +
          "deb " +
          "aytildi, " +
          "lekin " +
          "rasmiy " +
          "qaror " +
          "ko'rsatilmadi. " +
          "Yozma " +
          "qaror " +
          "va " +
          "uning " +
          "asosi " +
          "bo'lmasa, " +
          "hech " +
          "qanday " +
          "harakat " +
          "qonuniy " +
          "bo'lmaydi.",
        keyPoints: [
          "Olib qo'yish faqat belgilangan asoslarda va kompensatsiya bilan",
          "Fuqarolar va yuridik shaxslar uchun oqibatlar alohida belgilangan",
          "Qarorni YOZMA olish va asosini tekshirish birinchi qadam",
          "Sud qarorisiz uy-joydan mahrum qilish mumkin emas",
        ],
        warning:
          "Og'zaki " +
          "«uyingiz " +
          "buziladi» " +
          "degan " +
          "xabarga " +
          "asoslanib " +
          "hech " +
          "narsaga " +
          "rozilik " +
          "bermang " +
          "va " +
          "hujjat " +
          "imzolamang.",
        lawRefs: [
          { code: "UJK", article: "27" },
          { code: "UJK", article: "28" },
          { code: "UJK", article: "29" },
          { code: "UJK", article: "30" },
          { code: "KONS", article: "47" },
        ],
      },
      {
        heading: "Kompensatsiya va yangi uy-joy",
        text:
          "Olib qo'yishda asosiy " +
          "masala — " +
          "KOMPENSATSIYA " +
          "hajmi. Amaldagi " +
          "nizolarning " +
          "aksariyati aynan " +
          "shu yerda " +
          "chiqadi.\n\n" +
          "Uylari " +
          "(kvartiralari) " +
          "buzilishi lozim " +
          "bo'lgan " +
          "fuqarolar va " +
          "yuridik " +
          "shaxslar uchun " +
          "yangi uy-joy " +
          "berish " +
          "masalasi " +
          "qonunda " +
          "tartibga " +
          "solingan.\n\n" +
          "Fuqarolik " +
          "kodeksi ham " +
          "umumiy " +
          "qoidani " +
          "beradi: " +
          "mol-mulkni " +
          "olib " +
          "qo'yish " +
          "chog'ida " +
          "uning " +
          "qiymatini " +
          "aniqlash va " +
          "zararlarni " +
          "undirib " +
          "olish " +
          "huquqi " +
          "mavjud.\n\n" +
          "Amaliy " +
          "strategiya:\n\n" +
          "Birinchidan, " +
          "MUSTAQIL " +
          "BAHOLASH " +
          "o'tkazing. " +
          "Taklif " +
          "qilingan " +
          "summa " +
          "adolatli " +
          "ekanini " +
          "faqat " +
          "solishtirish " +
          "orqali " +
          "bilish " +
          "mumkin.\n\n" +
          "Ikkinchidan, " +
          "zararlarni " +
          "hisoblang: " +
          "ko'chish " +
          "xarajatlari, " +
          "vaqtincha " +
          "turar " +
          "joy, " +
          "yaxshilashlar.\n\n" +
          "Uchinchidan, " +
          "barcha " +
          "hujjatlarni " +
          "to'plang: " +
          "qurilish " +
          "va " +
          "ta'mir " +
          "xarajatlari " +
          "kompensatsiyaga " +
          "ta'sir " +
          "qiladi.\n\n" +
          "To'rtinchidan, " +
          "rozi " +
          "bo'lmasangiz " +
          "SUD " +
          "yo'li " +
          "ochiq. " +
          "Kurash " +
          "odatda " +
          "olib " +
          "qo'yish " +
          "fakti " +
          "ustida " +
          "emas, " +
          "BAHO " +
          "ustida " +
          "boradi.",
        example:
          "Mulkdorga " +
          "taklif " +
          "qilingan " +
          "kompensatsiya " +
          "bozor " +
          "narxidan " +
          "past " +
          "edi. " +
          "Mustaqil " +
          "baholash " +
          "va " +
          "yaxshilash " +
          "hujjatlari " +
          "asosida " +
          "u " +
          "summani " +
          "qayta " +
          "ko'rib " +
          "chiqishni " +
          "talab " +
          "qildi — " +
          "bu " +
          "qonuniy " +
          "yo'l.",
        keyPoints: [
          "Olib qo'yishda qiymatni aniqlash va zararlarni undirish huquqi bor",
          "Mustaqil baholash — taklifni tekshirishning yagona ishonchli yo'li",
          "Zararlarga ko'chish, vaqtincha turar joy va yaxshilashlar kiradi",
          "Baho bilan rozi bo'lmasangiz sud yo'li ochiq",
        ],
        warning:
          "Kompensatsiya " +
          "hujjatiga " +
          "«da'vom " +
          "yo'q» " +
          "deb " +
          "imzo " +
          "qo'yishdan " +
          "oldin " +
          "summani " +
          "yaxshilab " +
          "tekshiring: " +
          "keyin " +
          "qo'shimcha " +
          "talab " +
          "qo'yish " +
          "qiyin " +
          "bo'ladi.",
        lawRefs: [
          { code: "UJK", article: "31" },
          { code: "FK", article: "205" },
          { code: "FK", article: "199" },
          { code: "YK", article: "37" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     6. Yer uchastkasiga huquqlar
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "yer-uchastka",
    category: "housing",
    level: "mid",
    order: 7060,
    title: "Yer uchastkasiga bo'lgan huquqlar",
    desc:
      "Yerga mulkchilik, foydalanish, ijara va merosga qoldiriladigan " +
      "egalik, servitut hamda huquqni tasdiqlovchi hujjatlar.",
    objectives: [
      "Yerga bo'lgan huquq turlarini farqlay olasiz",
      "Yer uchastkasiga huquq qanday vujudga kelishini bilasiz",
      "Servitut nima ekanligini tushunasiz",
      "Huquqni tasdiqlovchi hujjatlarni va ro'yxatga olishni bilasiz",
    ],
    practicalSteps: [
      "Yer uchastkangizga bo'lgan huquq turini aniq bilib oling — bu vakolatlaringizni belgilaydi",
      "Huquqni tasdiqlovchi hujjat va davlat ro'yxati ma'lumotlarini tekshiring",
      "Uchastka chegaralari joyning o'zida belgilanganini tekshiring",
      "Qo'shni orqali o'tish zarur bo'lsa, servitutni rasmiy rasmiylashtiring",
    ],
    sections: [
      {
        heading: "Yerga bo'lgan huquq turlari",
        text:
          "Yer O'zbekistonda " +
          "umummilliy boylik deb " +
          "e'lon qilingan va " +
          "yerga bo'lgan " +
          "munosabatlar " +
          "alohida tartibga " +
          "solingan.\n\n" +
          "Yuridik va jismoniy " +
          "shaxslarning yer " +
          "uchastkalariga " +
          "bo'lgan huquqlari " +
          "bir necha turda " +
          "bo'ladi.\n\n" +
          "MULK HUQUQI — eng " +
          "keng huquq, " +
          "lekin uning " +
          "vujudga kelish " +
          "asoslari " +
          "qonunda " +
          "cheklangan.\n\n" +
          "DOIMIY " +
          "FOYDALANISH " +
          "HUQUQI — yer " +
          "uchastkalari " +
          "belgilangan " +
          "tartibda " +
          "beriladi.\n\n" +
          "IJARA — yer " +
          "uchastkasiga " +
          "ijara " +
          "shartnomasi " +
          "shartlari " +
          "asosida.\n\n" +
          "BIRGALIKDA " +
          "EGALIK " +
          "QILINADIGAN " +
          "yoki " +
          "foydalaniladigan " +
          "uchastkalar " +
          "uchun " +
          "alohida " +
          "qoidalar " +
          "mavjud.\n\n" +
          "MUHIM " +
          "AMALIY " +
          "QOIDA: " +
          "korxonaga, " +
          "binoga, " +
          "inshootga " +
          "bo'lgan " +
          "huquq " +
          "boshqa " +
          "shaxsga " +
          "o'tganda " +
          "yer " +
          "uchastkasiga " +
          "bo'lgan " +
          "huquq " +
          "ham " +
          "o'tadi.\n\n" +
          "Ya'ni " +
          "uy " +
          "sotib " +
          "olsangiz, " +
          "yer " +
          "masalasi " +
          "ham " +
          "hal " +
          "bo'ladi — " +
          "lekin " +
          "buni " +
          "hujjatda " +
          "tekshirish " +
          "kerak.\n\n" +
          "RUXSAT " +
          "ETILGAN " +
          "FOYDALANISH " +
          "TURLARI " +
          "ham " +
          "belgilangan: " +
          "uchastkadan " +
          "faqat " +
          "belgilangan " +
          "maqsadda " +
          "foydalanish " +
          "mumkin.",
        example:
          "Xaridor " +
          "yer " +
          "uchastkasini " +
          "olib, " +
          "unga " +
          "ishlab " +
          "chiqarish " +
          "binosi " +
          "qurmoqchi " +
          "bo'ldi, " +
          "lekin " +
          "uchastka " +
          "boshqa " +
          "maqsad " +
          "uchun " +
          "belgilangan " +
          "edi. " +
          "Ruxsat " +
          "etilgan " +
          "foydalanish " +
          "turini " +
          "oldindan " +
          "tekshirish " +
          "shart.",
        keyPoints: [
          "Yerga huquq turlari: mulk, doimiy foydalanish, ijara va boshqalar",
          "Bino huquqi o'tganda yer uchastkasiga huquq ham o'tadi",
          "Uchastkadan faqat ruxsat etilgan maqsadda foydalanish mumkin",
          "Foydalanish turini o'zgartirish belgilangan tartibda amalga oshiriladi",
        ],
        warning:
          "Yer " +
          "uchastkasini " +
          "sotib " +
          "olishdan " +
          "oldin " +
          "ruxsat " +
          "etilgan " +
          "foydalanish " +
          "turini " +
          "tekshirmaslik " +
          "eng " +
          "qimmat " +
          "xatolardan " +
          "biri.",
        lawRefs: [
          { code: "YK", article: "17" },
          { code: "YK", article: "18" },
          { code: "YK", article: "20" },
          { code: "YK", article: "22" },
          { code: "YK", article: "24" },
          { code: "YK", article: "10-1" },
        ],
      },
      {
        heading: "Servitut, hujjatlar va ro'yxatga olish",
        text:
          "SERVITUT — o'zganing " +
          "yer uchastkasidan " +
          "cheklangan tarzda " +
          "foydalanish " +
          "huquqi.\n\n" +
          "Amalda bu juda " +
          "foydali " +
          "institut: " +
          "masalan " +
          "uchastkangizga " +
          "kirish uchun " +
          "qo'shni " +
          "yerdan o'tish " +
          "zarur " +
          "bo'lsa.\n\n" +
          "Servitut " +
          "belgilanganda " +
          "haq " +
          "to'lash " +
          "masalasi " +
          "ham " +
          "tartibga " +
          "solingan.\n\n" +
          "Servitutni " +
          "rasmiy " +
          "rasmiylashtirish " +
          "muhim: " +
          "og'zaki " +
          "kelishuv " +
          "qo'shni " +
          "o'zgarganda " +
          "yoki " +
          "munosabat " +
          "buzilganda " +
          "ishlamay " +
          "qoladi.\n\n" +
          "HUJJATLAR: " +
          "yer " +
          "uchastkasiga " +
          "bo'lgan " +
          "huquqni " +
          "tasdiqlovchi " +
          "hujjatlar " +
          "qonunda " +
          "belgilangan.\n\n" +
          "CHEGARALAR: " +
          "yer " +
          "uchastkasining " +
          "plani " +
          "tuziladi " +
          "va " +
          "chegaralari " +
          "joyning " +
          "o'zida " +
          "belgilanadi. " +
          "Bu " +
          "qo'shnilar " +
          "bilan " +
          "nizolarning " +
          "oldini " +
          "oladi.\n\n" +
          "DAVLAT " +
          "RO'YXATI: " +
          "yer " +
          "uchastkalariga " +
          "bo'lgan " +
          "huquqlar " +
          "davlat " +
          "ro'yxatidan " +
          "o'tkaziladi. " +
          "Davlat " +
          "yer " +
          "kadastri " +
          "yerlarning " +
          "huquqiy " +
          "rejimi " +
          "haqidagi " +
          "ma'lumotlarni " +
          "o'z " +
          "ichiga " +
          "oladi.\n\n" +
          "Huquqlar " +
          "KAFOLATLANADI: " +
          "yer " +
          "egalari " +
          "va " +
          "foydalanuvchilarning " +
          "huquqlari " +
          "himoya " +
          "qilinadi.",
        example:
          "Ikki " +
          "qo'shni " +
          "yillar " +
          "davomida " +
          "og'zaki " +
          "kelishuv " +
          "asosida " +
          "bir " +
          "yo'ldan " +
          "foydalandi. " +
          "Uchastka " +
          "sotilgach " +
          "yangi " +
          "egasi " +
          "o'tishni " +
          "taqiqladi. " +
          "Rasmiy " +
          "servitut " +
          "bo'lganida " +
          "huquq " +
          "saqlanib " +
          "qolardi.",
        keyPoints: [
          "Servitut — o'zganing yeridan cheklangan foydalanish huquqi",
          "Servitutni rasmiy rasmiylashtirish kerak, og'zaki kelishuv yetarli emas",
          "Uchastka chegaralari plan asosida joyning o'zida belgilanadi",
          "Huquqlar davlat ro'yxatidan o'tkaziladi va kadastrda qayd etiladi",
        ],
        warning:
          "Chegaralar " +
          "aniq " +
          "belgilanmagan " +
          "uchastka " +
          "qo'shnilar " +
          "bilan " +
          "uzoq " +
          "nizoga " +
          "sabab " +
          "bo'ladi. " +
          "Xariddan " +
          "oldin " +
          "chegaralarni " +
          "tekshiring.",
        lawRefs: [
          { code: "YK", article: "30" },
          { code: "YK", article: "32" },
          { code: "YK", article: "33" },
          { code: "YK", article: "35" },
          { code: "YK", article: "41" },
          { code: "FK", article: "173-3" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     7. Yerdan foydalanish
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "yerdan-foydalanish",
    category: "housing",
    level: "mid",
    order: 7070,
    title: "Yerdan foydalanish: huquq, majburiyat va bekor qilish",
    desc:
      "Yer egasining huquq va majburiyatlari, yer uchun haq, " +
      "huquqning bekor qilinishi va olib qo'yish asoslari.",
    objectives: [
      "Yer egasi va foydalanuvchining huquqlarini bilasiz",
      "Majburiyatlarni va ularni buzish oqibatini bilasiz",
      "Yer uchun haq to'lash tizimini bilasiz",
      "Huquq qanday hollarda bekor qilinishini bilasiz",
    ],
    practicalSteps: [
      "Yer uchun to'lovlarni o'z vaqtida amalga oshiring — qarz huquqni bekor qilish asosi bo'lishi mumkin",
      "Uchastkadan belgilangan maqsadda foydalaning",
      "Uchastkani ishlatmasdan tashlab qo'ymang: bu ham bekor qilish asosi bo'lishi mumkin",
      "Huquq bekor qilinishi haqida xabarnoma kelsa, muddat ichida javob bering",
    ],
    sections: [
      {
        heading: "Huquqlar va majburiyatlar",
        text:
          "Yer egasi, yerdan " +
          "foydalanuvchi, " +
          "ijarachi va yer " +
          "uchastkasi " +
          "mulkdorining " +
          "huquqlari qonunda " +
          "belgilangan.\n\n" +
          "Bu huquqlar odatda " +
          "quyidagilarni " +
          "qamraydi: " +
          "uchastkadan " +
          "belgilangan " +
          "maqsadda " +
          "foydalanish, " +
          "unda " +
          "yetishtirilgan " +
          "mahsulotga " +
          "egalik " +
          "qilish, " +
          "belgilangan " +
          "tartibda " +
          "imorat " +
          "qurish.\n\n" +
          "MAJBURIYATLAR " +
          "ham aniq " +
          "belgilangan " +
          "va ular " +
          "e'tibordan " +
          "chetda " +
          "qolmasligi " +
          "kerak: " +
          "yerdan " +
          "maqsadli " +
          "foydalanish, " +
          "uni " +
          "muhofaza " +
          "qilish, " +
          "tuproq " +
          "unumdorligini " +
          "saqlash, " +
          "qo'shnilarning " +
          "huquqlarini " +
          "buzmaslik, " +
          "to'lovlarni " +
          "amalga " +
          "oshirish.\n\n" +
          "YER " +
          "UCHASTKASINI " +
          "SAQLASH " +
          "vazifasi " +
          "alohida " +
          "belgilangan.\n\n" +
          "YER UCHUN " +
          "HAQ " +
          "TO'LASH: " +
          "yer " +
          "uchastkalarini " +
          "olganlik " +
          "va " +
          "yerdan " +
          "foydalanganlik " +
          "uchun " +
          "haq " +
          "to'lanadi.\n\n" +
          "IMORAT " +
          "QURISH " +
          "uchun " +
          "yer " +
          "uchastkalaridan " +
          "foydalanish " +
          "va " +
          "fuqarolarga " +
          "yakka " +
          "tartibda " +
          "uy-joy " +
          "qurish " +
          "uchun " +
          "uchastka " +
          "berish " +
          "alohida " +
          "tartibga " +
          "solingan.",
        example:
          "Uchastka " +
          "qishloq " +
          "xo'jaligi " +
          "maqsadi " +
          "uchun " +
          "berilgan " +
          "edi, " +
          "lekin " +
          "egasi " +
          "unga " +
          "ombor " +
          "qurdi. " +
          "Maqsadli " +
          "foydalanish " +
          "majburiyati " +
          "buzilgani " +
          "uchun " +
          "bu " +
          "huquqiy " +
          "oqibatlarga " +
          "olib " +
          "kelishi " +
          "mumkin.",
        keyPoints: [
          "Huquqlar: maqsadli foydalanish, mahsulotga egalik, belgilangan tartibda qurish",
          "Majburiyatlar: maqsadli foydalanish, muhofaza, to'lovlar, qo'shnilar huquqi",
          "Yer uchastkasini saqlash alohida vazifa sifatida belgilangan",
          "Yerdan foydalanganlik uchun haq to'lanadi",
        ],
        warning:
          "Maqsadli " +
          "foydalanishni " +
          "buzish " +
          "va " +
          "to'lovlarni " +
          "amalga " +
          "oshirmaslik " +
          "yer " +
          "huquqini " +
          "bekor " +
          "qilish " +
          "asoslari " +
          "qatoriga " +
          "kiradi.",
        lawRefs: [
          { code: "YK", article: "39" },
          { code: "YK", article: "40" },
          { code: "YK", article: "29" },
          { code: "YK", article: "28" },
          { code: "YK", article: "26" },
          { code: "YK", article: "27" },
        ],
      },
      {
        heading: "Huquqning bekor qilinishi va olib qo'yish",
        text:
          "Yer uchastkalariga " +
          "bo'lgan huquqlar " +
          "bekor qilinishi " +
          "mumkin va " +
          "asoslari qonunda " +
          "belgilangan.\n\n" +
          "Bekor qilish " +
          "butun " +
          "uchastkaga " +
          "yoki uning " +
          "bir " +
          "qismiga " +
          "nisbatan " +
          "amalga " +
          "oshirilishi " +
          "mumkin.\n\n" +
          "Ikkita asosiy " +
          "yo'nalish " +
          "bor.\n\n" +
          "Birinchisi — " +
          "JAMOAT " +
          "EHTIYOJLARI " +
          "uchun olib " +
          "qo'yish. Bu " +
          "holatda " +
          "KOMPENSATSIYA " +
          "to'lanadi va " +
          "bu asosiy " +
          "kafolat.\n\n" +
          "Ikkinchisi — " +
          "QONUNCHILIK " +
          "BUZILGANDA " +
          "olib " +
          "qo'yish. " +
          "Bu " +
          "jazo " +
          "xarakteriga " +
          "ega " +
          "va " +
          "u " +
          "maqsadli " +
          "foydalanish " +
          "buzilishi, " +
          "yerni " +
          "ishlatmaslik " +
          "kabi " +
          "holatlarda " +
          "qo'llaniladi.\n\n" +
          "Farq " +
          "amaliy: " +
          "birinchi " +
          "holatda " +
          "kompensatsiya " +
          "olasiz, " +
          "ikkinchisida " +
          "esa " +
          "yo'q " +
          "yoki " +
          "cheklangan.\n\n" +
          "Shuning " +
          "uchun " +
          "majburiyatlarni " +
          "bajarish " +
          "faqat " +
          "shakliy " +
          "talab " +
          "emas — " +
          "u " +
          "huquqingizni " +
          "saqlab " +
          "qoladi.\n\n" +
          "HUQUQLARNING " +
          "KAFOLATLARI: " +
          "yer " +
          "egalari " +
          "va " +
          "foydalanuvchilarning " +
          "huquqlari " +
          "himoya " +
          "qilinadi " +
          "va " +
          "buzilgan " +
          "huquq " +
          "tiklanishi " +
          "kerak.",
        example:
          "Uchastka " +
          "bir " +
          "necha " +
          "yil " +
          "umuman " +
          "ishlatilmadi " +
          "va " +
          "to'lovlar " +
          "ham " +
          "amalga " +
          "oshirilmadi. " +
          "Bunday " +
          "holatda " +
          "huquqni " +
          "bekor " +
          "qilish " +
          "uchun " +
          "asos " +
          "yuzaga " +
          "keladi — " +
          "va " +
          "bu " +
          "kompensatsiyasiz " +
          "bo'lishi " +
          "mumkin.",
        keyPoints: [
          "Bekor qilish asoslari qonunda belgilangan",
          "Jamoat ehtiyoji uchun olib qo'yishda KOMPENSATSIYA to'lanadi",
          "Qonunchilik buzilganda olib qo'yish jazo xarakteriga ega",
          "Majburiyatlarni bajarish huquqni saqlab qolishning asosiy sharti",
        ],
        warning:
          "Yer " +
          "huquqi " +
          "bekor " +
          "qilinishi " +
          "haqida " +
          "xabarnoma " +
          "kelsa, " +
          "javobsiz " +
          "qoldirmang: " +
          "muddat " +
          "ichida " +
          "e'tiroz " +
          "bildirish " +
          "yagona " +
          "imkoniyat " +
          "bo'lishi " +
          "mumkin.",
        lawRefs: [
          { code: "YK", article: "36" },
          { code: "YK", article: "37" },
          { code: "YK", article: "38" },
          { code: "YK", article: "42" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     8. Shaharsozlik  (MAVJUD KALIT — kengaytirildi)
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "shaharsozlik",
    category: "housing",
    level: "advanced",
    order: 7080,
    title: "Shaharsozlik va qurilish qoidalari",
    desc:
      "Qurilish uchun ruxsat, shaharsozlik hujjatlari, qurilish " +
      "nazorati va ruxsatsiz qurilish oqibatlari.",
    objectives: [
      "Shaharsozlik faoliyati nima ekanligini bilasiz",
      "Qurilish uchun qanday hujjatlar kerakligini bilasiz",
      "Ruxsatsiz qurilish oqibatlarini bilasiz",
      "Qurilish nazorati qanday amalga oshirilishini bilasiz",
    ],
    practicalSteps: [
      "Qurilishni boshlashdan OLDIN barcha ruxsat hujjatlarini oling",
      "Loyihani belgilangan tartibda tasdiqlating",
      "Qo'shnilar huquqiga ta'sir qiladigan qurilishda ularning holatini hisobga oling",
      "Ruxsatsiz qurilgan obyektni keyin rasmiylashtirish qiyin va qimmat ekanini yodda tuting",
    ],
    sections: [
      {
        heading: "Shaharsozlik faoliyati va hujjatlar",
        text:
          "SHAHARSOZLIK FAOLIYATI — " +
          "hududlarni " +
          "rejalashtirish, " +
          "qurilish, qayta " +
          "qurish va " +
          "obodonlashtirish " +
          "bo'yicha " +
          "faoliyat.\n\n" +
          "U qat'iy " +
          "tartibga " +
          "solingan, " +
          "chunki bir " +
          "shaxsning " +
          "qurilishi " +
          "boshqalarning " +
          "huquqlariga " +
          "va umumiy " +
          "muhitga " +
          "ta'sir " +
          "qiladi.\n\n" +
          "Shaharsozlik " +
          "hujjatlari " +
          "tizimi " +
          "mavjud: " +
          "hududiy " +
          "rejalashtirish " +
          "hujjatlari, " +
          "shaharsozlik " +
          "zonalari, " +
          "loyiha " +
          "hujjatlari.\n\n" +
          "Fuqaro " +
          "uchun eng " +
          "muhim " +
          "amaliy " +
          "savol: " +
          "qurish " +
          "uchun " +
          "nima " +
          "kerak.\n\n" +
          "Umumiy " +
          "javob: " +
          "yer " +
          "uchastkasiga " +
          "huquq, " +
          "ruxsat " +
          "etilgan " +
          "foydalanish " +
          "turiga " +
          "moslik, " +
          "tasdiqlangan " +
          "loyiha " +
          "va " +
          "qurilish " +
          "uchun " +
          "ruxsat.\n\n" +
          "Shaharsozlik " +
          "faoliyatini " +
          "alohida " +
          "tartibga " +
          "solish " +
          "holatlari " +
          "ham " +
          "nazarda " +
          "tutilgan " +
          "— " +
          "masalan " +
          "maxsus " +
          "hududlarda.\n\n" +
          "Amaliy " +
          "maslahat: " +
          "hujjatlarni " +
          "qurilishdan " +
          "OLDIN " +
          "yig'ing. " +
          "Qurilgandan " +
          "keyin " +
          "rasmiylashtirish " +
          "ancha " +
          "qiyin, " +
          "qimmat " +
          "va " +
          "ba'zan " +
          "umuman " +
          "imkonsiz.",
        example:
          "Uy egasi " +
          "hovlisiga " +
          "qo'shimcha " +
          "qavat " +
          "qurdi, " +
          "ruxsat " +
          "olmadi. " +
          "Keyin " +
          "uni " +
          "sotmoqchi " +
          "bo'lganda " +
          "hujjatlashtirilmagan " +
          "qurilish " +
          "bitimga " +
          "to'siq " +
          "bo'ldi.",
        keyPoints: [
          "Shaharsozlik faoliyati qat'iy tartibga solingan",
          "Qurish uchun: yerga huquq, ruxsat etilgan tur, loyiha va ruxsat kerak",
          "Hujjatlarni qurilishdan OLDIN yig'ish kerak",
          "Keyin rasmiylashtirish qiyin, qimmat va ba'zan imkonsiz",
        ],
        warning:
          "«Hamma " +
          "shunday " +
          "qurgan» " +
          "degan " +
          "asos " +
          "himoya " +
          "bermaydi. " +
          "Ruxsatsiz " +
          "qurilish " +
          "har " +
          "doim " +
          "risk " +
          "ostida " +
          "qoladi.",
        lawRefs: [
          { code: "SHK", article: "4" },
          { code: "SHK", article: "10" },
          { code: "SHK", article: "11" },
          { code: "SHK", article: "15" },
        ],
      },
      {
        heading: "Qurilish nazorati va ruxsatsiz qurilish",
        text:
          "Qurilish jarayoni " +
          "NAZORAT ostida " +
          "bo'ladi. Nazorat " +
          "turli " +
          "bosqichlarda " +
          "amalga " +
          "oshiriladi va " +
          "u qurilish " +
          "sifati hamda " +
          "xavfsizligini " +
          "ta'minlashga " +
          "qaratilgan.\n\n" +
          "Bu nazorat " +
          "faqat " +
          "byurokratiya " +
          "emas: " +
          "qoidalarga " +
          "rioya " +
          "qilinmagan " +
          "bino " +
          "yashovchilar " +
          "hayoti " +
          "uchun " +
          "xavf " +
          "tug'diradi.\n\n" +
          "RUXSATSIZ " +
          "QURILISH " +
          "oqibatlari " +
          "jiddiy va " +
          "ular bir " +
          "necha " +
          "yo'nalishda " +
          "bo'ladi.\n\n" +
          "Birinchidan, " +
          "ma'muriy " +
          "javobgarlik.\n\n" +
          "Ikkinchidan, " +
          "obyektni " +
          "buzish " +
          "yoki " +
          "dastlabki " +
          "holatga " +
          "keltirish " +
          "majburiyati.\n\n" +
          "Uchinchidan, " +
          "va amalda " +
          "eng " +
          "sezilarlisi " +
          "— " +
          "MULKIY " +
          "OQIBATLAR: " +
          "ruxsatsiz " +
          "qurilgan " +
          "obyekt " +
          "ro'yxatga " +
          "olinmaydi, " +
          "ya'ni " +
          "uni " +
          "sotish, " +
          "hadya " +
          "qilish, " +
          "garovga " +
          "qo'yish " +
          "yoki " +
          "meros " +
          "sifatida " +
          "rasmiylashtirish " +
          "imkonsiz " +
          "bo'lib " +
          "qoladi.\n\n" +
          "Shu " +
          "sababli " +
          "ruxsatsiz " +
          "qurilish " +
          "ko'pincha " +
          "«tejash» " +
          "emas, " +
          "kelajakdagi " +
          "katta " +
          "xarajat " +
          "bo'lib " +
          "chiqadi.",
        example:
          "Oila " +
          "ruxsatsiz " +
          "qurilgan " +
          "uyda " +
          "yillar " +
          "yashadi. " +
          "Meros " +
          "ochilganda " +
          "uni " +
          "merosxo'rlar " +
          "nomiga " +
          "rasmiylashtirib " +
          "bo'lmadi, " +
          "chunki " +
          "obyekt " +
          "ro'yxatda " +
          "yo'q " +
          "edi.",
        keyPoints: [
          "Qurilish nazorati sifat va xavfsizlikni ta'minlashga qaratilgan",
          "Ruxsatsiz qurilish ma'muriy javobgarlikka olib keladi",
          "Obyektni buzish yoki dastlabki holatga keltirish talab qilinishi mumkin",
          "Eng og'ir oqibat — obyektni ro'yxatga olib bo'lmasligi",
        ],
        warning:
          "Ruxsatsiz " +
          "qurilgan " +
          "obyektni " +
          "sotib " +
          "olish " +
          "ham " +
          "xavfli: " +
          "xaridor " +
          "barcha " +
          "muammolarni " +
          "meros " +
          "qilib " +
          "oladi.",
        lawRefs: [
          { code: "SHK", article: "26" },
          { code: "SHK", article: "27" },
          { code: "SHK", article: "31" },
          { code: "SHK", article: "33" },
          { code: "SHK", article: "78" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     9. Ko'chmas mulk bitimlari
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "kochmas-mulk-bitim",
    category: "housing",
    level: "advanced",
    order: 7090,
    title: "Ko'chmas mulk bitimlari: xavfsiz xarid",
    desc:
      "Uy sotib olishdan oldin nimani tekshirish kerak, ro'yxatga " +
      "olish, kadastr va eng ko'p uchraydigan xavflar.",
    objectives: [
      "Ko'chmas mulk bitimi bosqichlarini bilasiz",
      "Xariddan oldin nimani tekshirish kerakligini aniq bilasiz",
      "Ro'yxatga olishning huquqiy ma'nosini tushunasiz",
      "Eng ko'p uchraydigan xavflarni tanib olasiz",
    ],
    practicalSteps: [
      "Sotuvchining mulk huquqini va hujjatlarini birinchi navbatda tekshiring",
      "Garov, hibs va boshqa cheklovlar bor-yo'qligini rasman so'rang",
      "Uyda ro'yxatda turgan va yashash huquqiga ega shaxslarni aniqlang",
      "Bitimni oxirigacha rasmiylashtiring: notarial tasdiq va davlat ro'yxati",
    ],
    sections: [
      {
        heading: "Xariddan oldin nimani tekshirish kerak",
        text:
          "Ko'chmas mulk xaridi " +
          "aksariyat oilalar " +
          "uchun hayotdagi " +
          "eng katta bitim. " +
          "Shuning uchun " +
          "tekshiruv " +
          "ro'yxati " +
          "bo'lishi " +
          "kerak.\n\n" +
          "BIRINCHI: MULK " +
          "HUQUQI. " +
          "Sotuvchi " +
          "haqiqiy " +
          "mulkdormi? " +
          "Huquq " +
          "hujjati va " +
          "davlat " +
          "ro'yxati " +
          "ma'lumotlari " +
          "solishtirilishi " +
          "kerak.\n\n" +
          "IKKINCHI: " +
          "CHEKLOVLAR. " +
          "Obyekt " +
          "garovda, " +
          "hibsda " +
          "yoki " +
          "boshqa " +
          "cheklov " +
          "ostida " +
          "emasmi? " +
          "Garov " +
          "mulk " +
          "huquqi " +
          "o'tganda " +
          "ham " +
          "SAQLANADI " +
          "— " +
          "ya'ni " +
          "xaridor " +
          "uni " +
          "meros " +
          "qilib " +
          "oladi.\n\n" +
          "UCHINCHI: " +
          "UCHINCHI " +
          "SHAXSLAR " +
          "HUQUQI. " +
          "Uyda " +
          "yashash " +
          "huquqiga " +
          "ega " +
          "shaxslar " +
          "bormi? " +
          "Voyaga " +
          "yetmagan " +
          "bolalar " +
          "yoki " +
          "boshqa " +
          "himoyalangan " +
          "toifalar " +
          "bo'lsa, " +
          "bitim " +
          "murakkablashadi.\n\n" +
          "TO'RTINCHI: " +
          "ER-XOTIN " +
          "ROZILIGI. " +
          "Nikoh " +
          "davomida " +
          "orttirilgan " +
          "mulk " +
          "umumiy " +
          "bo'lgani " +
          "uchun " +
          "ikkinchi " +
          "tomonning " +
          "roziligi " +
          "masalasi " +
          "yuzaga " +
          "keladi.\n\n" +
          "BESHINCHI: " +
          "QURILISH " +
          "hujjatlari. " +
          "Ruxsatsiz " +
          "qurilish " +
          "yoki " +
          "qayta " +
          "rejalashtirish " +
          "bormi?",
        example:
          "Xaridor " +
          "uy " +
          "sotib " +
          "oldi, " +
          "keyin " +
          "unda " +
          "yashash " +
          "huquqiga " +
          "ega " +
          "qarindosh " +
          "borligi " +
          "ma'lum " +
          "bo'ldi " +
          "va " +
          "u " +
          "chiqishdan " +
          "bosh " +
          "tortdi. " +
          "Xariddan " +
          "oldin " +
          "yashovchilarni " +
          "tekshirish " +
          "shu " +
          "muammoni " +
          "oldini " +
          "olardi.",
        keyPoints: [
          "Tekshirish ro'yxati: mulk huquqi, cheklovlar, uchinchi shaxslar, rozilik, qurilish",
          "Garov mulk huquqi o'tganda ham SAQLANADI",
          "Uyda yashash huquqiga ega shaxslar bitimga jiddiy ta'sir qiladi",
          "Nikoh davomidagi mulkda ikkinchi tomon roziligi masalasi yuzaga keladi",
        ],
        warning:
          "Bozor " +
          "narxidan " +
          "sezilarli " +
          "past " +
          "taklif " +
          "deyarli " +
          "har " +
          "doim " +
          "yashirin " +
          "muammoni " +
          "bildiradi. " +
          "Bunday " +
          "holatda " +
          "tekshiruvni " +
          "kuchaytiring.",
        lawRefs: [
          { code: "FK", article: "84" },
          { code: "FK", article: "284" },
          { code: "UJK", article: "13" },
          { code: "OK", article: "24" },
        ],
      },
      {
        heading: "Rasmiylashtirish va ro'yxatga olish",
        text:
          "Bitimni " +
          "rasmiylashtirish " +
          "bir necha " +
          "bosqichdan " +
          "iborat va " +
          "ularning " +
          "hech biri " +
          "o'tkazib " +
          "yuborilmasligi " +
          "kerak.\n\n" +
          "BIRINCHI " +
          "BOSQICH — " +
          "shartnoma " +
          "tuzish. " +
          "Ko'chmas " +
          "mulk " +
          "bitimlari " +
          "uchun " +
          "shakl " +
          "talablari " +
          "qat'iy.\n\n" +
          "IKKINCHI " +
          "BOSQICH — " +
          "notarial " +
          "tasdiqlash " +
          "(talab " +
          "qilingan " +
          "hollarda).\n\n" +
          "UCHINCHI " +
          "BOSQICH — " +
          "DAVLAT " +
          "RO'YXATIDAN " +
          "O'TKAZISH. " +
          "Bu " +
          "eng " +
          "muhim " +
          "bosqich " +
          "va " +
          "aynan " +
          "u " +
          "ko'pincha " +
          "kechiktiriladi.\n\n" +
          "Ko'chmas " +
          "mulkka " +
          "egalik " +
          "huquqi, " +
          "boshqa " +
          "ashyoviy " +
          "huquqlar " +
          "va " +
          "bu " +
          "huquqlarning " +
          "o'tishi " +
          "davlat " +
          "ro'yxatidan " +
          "o'tkaziladi.\n\n" +
          "Ro'yxatga " +
          "olishning " +
          "amaliy " +
          "ma'nosi: " +
          "u " +
          "sizning " +
          "huquqingizni " +
          "BARCHAGA " +
          "qarshi " +
          "kuchga " +
          "keltiradi. " +
          "Ro'yxatsiz " +
          "esa " +
          "siz " +
          "faqat " +
          "sotuvchiga " +
          "qarshi " +
          "talab " +
          "qo'ya " +
          "olasiz.\n\n" +
          "KADASTR " +
          "ma'lumotlari " +
          "obyekt " +
          "haqidagi " +
          "rasmiy " +
          "manba " +
          "hisoblanadi " +
          "va " +
          "ular " +
          "bilan " +
          "tanishish " +
          "xarid " +
          "qarorining " +
          "asosi " +
          "bo'lishi " +
          "kerak.",
        example:
          "Ikki " +
          "tomon " +
          "shartnoma " +
          "tuzdi, " +
          "pul " +
          "to'landi, " +
          "lekin " +
          "ro'yxatga " +
          "olish " +
          "keyinga " +
          "qoldirildi. " +
          "Shu " +
          "davrda " +
          "sotuvchiga " +
          "nisbatan " +
          "undiruv " +
          "boshlandi " +
          "va " +
          "uy " +
          "hibsga " +
          "olindi — " +
          "xaridor " +
          "og'ir " +
          "holatda " +
          "qoldi.",
        keyPoints: [
          "Bosqichlar: shartnoma → notarial tasdiq → DAVLAT RO'YXATI",
          "Ro'yxatga olish huquqni BARCHAGA qarshi kuchga keltiradi",
          "Ro'yxatsiz huquq faqat sotuvchiga qarshi ishlaydi",
          "Kadastr ma'lumotlari obyekt haqidagi rasmiy manba",
        ],
        warning:
          "Ro'yxatga " +
          "olishni " +
          "kechiktirish " +
          "eng " +
          "xavfli " +
          "bosqich. " +
          "Bu " +
          "davrda " +
          "obyekt " +
          "hibsga " +
          "olinishi " +
          "yoki " +
          "boshqasiga " +
          "sotilishi " +
          "mumkin.",
        lawRefs: [
          { code: "FK", article: "84" },
          { code: "FK", article: "111" },
          { code: "FK", article: "185" },
          { code: "YK", article: "35" },
        ],
      },
    ],
  },
];

module.exports = { LESSONS };
