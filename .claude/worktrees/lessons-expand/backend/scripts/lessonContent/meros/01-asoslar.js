"use strict";
/**
 * MEROS HUQUQI — 1-QISM: ASOSLAR (1–8-mavzular)
 *
 * Manba: Fuqarolik kodeksi 2-qism (FK2), vorislik bo'limi.
 *
 * ⚠️ MEROS FK EMAS, FK2 DA. Bu loyihada avval xato qilingan:
 * meros moddalari Fuqarolik kodeksining BIRINCHI qismidan
 * qidirilardi. Vorislik normalari IKKINCHI qismda (FK2 1112+).
 */

const SECTIONS = [
  /* ── 1 ─────────────────────────────────────────────────────── */
  {
    heading: "Meros nima va u qanday o'tadi",
    text:
      "Meros (vorislik) — vafot etgan " +
      "shaxsning mol-mulki va ba'zi " +
      "huquq hamda majburiyatlarining " +
      "boshqa shaxslarga o'tishi.\n\n" +
      "Vorislikning IKKI asosi bor: " +
      "VASIYATNOMA bo'yicha va QONUN " +
      "bo'yicha.\n\n" +
      "Qoida oddiy: agar vasiyatnoma " +
      "bo'lsa — u bo'yicha, bo'lmasa " +
      "(yoki u mol-mulkning bir " +
      "qismini qamrasa) — qolgan " +
      "qismi qonun bo'yicha " +
      "taqsimlanadi.\n\n" +
      "⚠️ Muhim tushuncha: meros " +
      "UNIVERSAL huquqiy vorislik " +
      "hisoblanadi. Ya'ni " +
      "merosxo'r faqat mol-mulkni " +
      "emas, unga bog'liq " +
      "MAJBURIYATLARNI ham oladi.\n\n" +
      "Bu shuni anglatadi: qarzi " +
      "bor merosni qabul qilgan " +
      "shaxs o'sha qarzga ham " +
      "javob beradi. Shuning uchun " +
      "\"qabul qilaymi yoki voz " +
      "kechaymi\" degan savol " +
      "juda jiddiy.",
    example:
      "Ota vafot etdi, undan " +
      "kvartira va bank krediti " +
      "qoldi. Kvartirani meros " +
      "qilib olgan farzand " +
      "kreditga ham javob beradi " +
      "— ikkisini ajratib olib " +
      "bo'lmaydi.",
    keyPoints: [
      "Vorislikning ikki asosi: vasiyatnoma va qonun",
      "Vasiyatnoma bo'lmasa qonun bo'yicha taqsimlanadi",
      "Meros — universal huquqiy vorislik",
      "Mol-mulk bilan birga majburiyatlar ham o'tadi",
    ],
    warning:
      "Merosni qabul qilishdan " +
      "oldin qarzlarni " +
      "aniqlashtiring — keyin " +
      "\"bilmagandim\" degan " +
      "dalil ishlamaydi.",
    lawRefs: [
      { code: "FK2", article: "1112" },
      { code: "FK2", article: "1113" },
    ],
  },

  /* ── 2 ─────────────────────────────────────────────────────── */
  {
    heading: "Meros tarkibi: nima o'tadi, nima o'tmaydi",
    text:
      "Merosga hamma narsa " +
      "kirmaydi. Qonun meros " +
      "tarkibini aniq " +
      "belgilaydi.\n\n" +
      "MEROSGA KIRADI: meros " +
      "qoldiruvchiga tegishli " +
      "bo'lgan mol-mulk (uy, " +
      "yer, avtomobil, pul, " +
      "omonat, qimmatli " +
      "qog'ozlar); mulkiy " +
      "huquqlar; mulkiy " +
      "majburiyatlar (qarzlar).\n\n" +
      "⚠️ MEROSGA KIRMAYDI: " +
      "meros qoldiruvchining " +
      "SHAXSIGA uzviy bog'liq " +
      "huquq va majburiyatlar. " +
      "Masalan: aliment olish " +
      "yoki to'lash huquqi; " +
      "sog'liqqa yetkazilgan " +
      "zararni qoplash huquqi; " +
      "shaxsiy nomulkiy " +
      "huquqlar.\n\n" +
      "Bu farq amalda muhim: " +
      "vafot etgan shaxsning " +
      "aliment qarzi " +
      "merosxo'rga " +
      "avtomatik o'tmaydi, " +
      "lekin allaqachon " +
      "yig'ilgan qarz " +
      "boshqacha " +
      "baholanishi mumkin.\n\n" +
      "Meros tarkibini aniq " +
      "bilish qabul qilish " +
      "yoki voz kechish " +
      "qarorining asosi " +
      "bo'ladi.",
    example:
      "Vafot etgan shaxsning " +
      "kvartirasi va " +
      "avtomobili merosga " +
      "kiradi. Uning " +
      "bolasiga to'lashi " +
      "kerak bo'lgan " +
      "kelajakdagi aliment " +
      "majburiyati esa " +
      "shaxsga bog'liq va " +
      "meros tarkibiga " +
      "kirmaydi.",
    keyPoints: [
      "Merosga mol-mulk, mulkiy huquq va majburiyatlar kiradi",
      "Shaxsga uzviy bog'liq huquqlar meros bo'lmaydi",
      "Aliment va sog'liq zarari huquqlari o'tmaydi",
      "Tarkibni bilish qabul qilish qarori uchun asos",
    ],
    warning:
      "Meros tarkibini " +
      "notarius orqali " +
      "rasmiy aniqlang — " +
      "qarindoshlarning " +
      "so'ziga tayanmang.",
    lawRefs: [
      { code: "FK2", article: "1113" },
      { code: "FK2", article: "1112" },
    ],
  },

  /* ── 3 ─────────────────────────────────────────────────────── */
  {
    heading: "Meros qachon ochiladi",
    text:
      "Meros AVTOMATIK ochiladi " +
      "— buning uchun hech " +
      "kimning arizasi kerak " +
      "emas.\n\n" +
      "Meros fuqaro VAFOT " +
      "ETGANDA yoki sud " +
      "tomonidan VAFOT ETGAN " +
      "DEB E'LON QILINGANDA " +
      "ochiladi.\n\n" +
      "⚠️ MEROS OCHILGAN KUN " +
      "— eng muhim sana. " +
      "Undan boshlab: " +
      "merosni qabul qilish " +
      "muddati hisoblanadi; " +
      "merosxo'rlar doirasi " +
      "aniqlanadi; meros " +
      "tarkibi " +
      "belgilanadi.\n\n" +
      "Bu sanani o'tkazib " +
      "yuborish eng ko'p " +
      "uchraydigan va eng " +
      "og'ir xato. Muddat " +
      "o'tgach merosni " +
      "qabul qilish faqat " +
      "alohida tartibda " +
      "(uzrli sabab " +
      "bo'lganda) " +
      "mumkin bo'ladi.\n\n" +
      "Vafot etgan deb " +
      "e'lon qilingan " +
      "holatda esa sud " +
      "qarorida " +
      "ko'rsatilgan sana " +
      "asos bo'ladi.",
    example:
      "Ota vafot etdi, " +
      "farzandlar " +
      "\"keyinroq " +
      "rasmiylashtiramiz\" " +
      "deb kutishdi. " +
      "Belgilangan muddat " +
      "o'tgach merosni " +
      "qabul qilish ancha " +
      "murakkab jarayonga " +
      "aylandi.",
    keyPoints: [
      "Meros vafot etganda avtomatik ochiladi",
      "Vafot etgan deb e'lon qilinish ham asos bo'ladi",
      "Ochilgan kundan qabul qilish muddati hisoblanadi",
      "Muddatni o'tkazib yuborish jarayonni murakkablashtiradi",
    ],
    warning:
      "Vafot guvohnomasini " +
      "olgan zahoti " +
      "notariusga murojaat " +
      "qiling — muddat " +
      "shu kundan " +
      "ketayotgan bo'ladi.",
    lawRefs: [
      { code: "FK2", article: "1116" },
      { code: "FK2", article: "1145" },
    ],
  },

  /* ── 4 ─────────────────────────────────────────────────────── */
  {
    heading: "Meros qayerda ochiladi",
    text:
      "Meros ochilgan JOY ham " +
      "qonunda belgilangan va " +
      "u amaliy ahamiyatga " +
      "ega.\n\n" +
      "Meros ochilgan joy — " +
      "odatda meros " +
      "qoldiruvchining oxirgi " +
      "yashash joyi. Agar u " +
      "noma'lum bo'lsa, " +
      "mol-mulkning yoki " +
      "uning asosiy qismining " +
      "joylashgan yeri " +
      "hisobga olinadi.\n\n" +
      "⚠️ Nima uchun bu " +
      "muhim? Chunki aynan " +
      "shu joydagi notarius " +
      "meros ishini " +
      "yuritadi va meros " +
      "huquqi to'g'risida " +
      "guvohnoma beradi.\n\n" +
      "Noto'g'ri joyga " +
      "murojaat qilish " +
      "vaqt yo'qotishga " +
      "olib keladi — " +
      "ariza qaytariladi " +
      "va muddat esa " +
      "ketaveradi.\n\n" +
      "Mol-mulk turli " +
      "joylarda bo'lsa " +
      "ham meros ishi " +
      "BITTA joyda " +
      "yuritiladi — bu " +
      "jarayonni " +
      "soddalashtiradi.",
    example:
      "Meros qoldiruvchi " +
      "Toshkentda " +
      "yashagan, uyi esa " +
      "boshqa viloyatda " +
      "edi. Meros ishi " +
      "oxirgi yashash " +
      "joyi bo'yicha " +
      "yuritiladi.",
    keyPoints: [
      "Meros ochilgan joy — oxirgi yashash joyi",
      "Yashash joyi noma'lum bo'lsa mol-mulk joyi hisobga olinadi",
      "Shu joydagi notarius meros ishini yuritadi",
      "Mol-mulk turli joyda bo'lsa ham ish bitta joyda ochiladi",
    ],
    warning:
      "Notariusga " +
      "borishdan oldin " +
      "meros ochilgan " +
      "joyni " +
      "aniqlashtiring — " +
      "aks holda ariza " +
      "qaytariladi va " +
      "vaqt " +
      "yo'qotasiz.",
    lawRefs: [
      { code: "FK2", article: "1117" },
      { code: "FK2", article: "1146" },
    ],
  },

  /* ── 5 ─────────────────────────────────────────────────────── */
  {
    heading: "Merosxo'rlar kimlar bo'lishi mumkin",
    text:
      "Kim merosxo'r bo'la " +
      "oladi? Qonun bunga " +
      "aniq javob beradi.\n\n" +
      "Merosxo'rlar bo'lishi " +
      "mumkin: meros " +
      "ochilgan paytda TIRIK " +
      "bo'lgan fuqarolar; " +
      "meros qoldiruvchining " +
      "hayotligida " +
      "HOMILAGA qolgan va " +
      "meros ochilgandan " +
      "keyin TIRIK " +
      "tug'ilgan " +
      "bolalar.\n\n" +
      "Vasiyatnoma bo'yicha " +
      "esa doira kengroq: " +
      "yuridik shaxslar va " +
      "davlat ham " +
      "merosxo'r bo'lishi " +
      "mumkin.\n\n" +
      "⚠️ HOMILA QOIDASI " +
      "muhim: agar meros " +
      "qoldiruvchi vafot " +
      "etganda uning " +
      "bolasi hali " +
      "tug'ilmagan " +
      "bo'lsa-yu, " +
      "keyinchalik tirik " +
      "tug'ilsa — u " +
      "merosxo'r " +
      "hisoblanadi.\n\n" +
      "Shu sababli bunday " +
      "holatda meros " +
      "taqsimoti bola " +
      "tug'ilgunga qadar " +
      "kutiladi.",
    example:
      "Er vafot etganda " +
      "xotini homilador " +
      "edi. Bola tirik " +
      "tug'ilgach, u ham " +
      "birinchi navbatdagi " +
      "merosxo'r " +
      "hisoblanadi va " +
      "ulush oladi.",
    keyPoints: [
      "Meros ochilganda tirik bo'lgan fuqarolar merosxo'r bo'ladi",
      "Homilaga qolgan va tirik tug'ilgan bola ham merosxo'r",
      "Vasiyatnoma bo'yicha yuridik shaxs ham merosxo'r bo'lishi mumkin",
      "Homila bo'lsa taqsimot tug'ilgunga qadar kutiladi",
    ],
    warning:
      "Homila borligini " +
      "notariusga darhol " +
      "xabar qiling — aks " +
      "holda taqsimot " +
      "noto'g'ri amalga " +
      "oshirilishi mumkin.",
    lawRefs: [
      { code: "FK2", article: "1118" },
      { code: "FK2", article: "1151" },
    ],
  },

  /* ── 6 ─────────────────────────────────────────────────────── */
  {
    heading: "Noloyiq merosxo'rlar",
    text:
      "Ba'zan qarindosh " +
      "bo'lish yetarli " +
      "emas — qonun ayrim " +
      "shaxslarni merosdan " +
      "CHETLATADI.\n\n" +
      "Noloyiq merosxo'rlar " +
      "deb odatda " +
      "quyidagilar " +
      "topiladi: meros " +
      "qoldiruvchining yoki " +
      "boshqa " +
      "merosxo'rlarning " +
      "hayotiga qarshi " +
      "qasddan jinoyat " +
      "sodir etganlar; " +
      "meros " +
      "qoldiruvchining " +
      "oxirgi irodasini " +
      "amalga oshirishga " +
      "qasddan to'sqinlik " +
      "qilganlar; " +
      "ota-onalik " +
      "huquqidan mahrum " +
      "qilinganlar (o'z " +
      "bolalaridan meros " +
      "olishda); meros " +
      "qoldiruvchini " +
      "boqish " +
      "majburiyatidan " +
      "qasddan bosh " +
      "tortganlar.\n\n" +
      "⚠️ Chetlatish " +
      "AVTOMATIK emas — u " +
      "SUD tomonidan " +
      "tasdiqlanishi " +
      "kerak.\n\n" +
      "Bu norma adolat " +
      "tamoyiliga " +
      "asoslanadi: meros " +
      "qoldiruvchiga " +
      "zarar yetkazgan " +
      "shaxs undan " +
      "foyda " +
      "ko'rmasligi " +
      "kerak.",
    example:
      "Farzand ota-onalik " +
      "huquqidan mahrum " +
      "qilingan edi. " +
      "Bolasi vafot " +
      "etganda u qonun " +
      "bo'yicha meros " +
      "ololmaydi — chunki " +
      "noloyiq merosxo'r " +
      "hisoblanadi.",
    keyPoints: [
      "Ayrim shaxslar merosdan chetlatiladi",
      "Asoslar qonunda aniq belgilangan",
      "Ota-onalik huquqidan mahrumlik ham asos bo'ladi",
      "Chetlatish sud tomonidan tasdiqlanadi",
    ],
    warning:
      "Noloyiqlikni " +
      "isbotlash uchun " +
      "sud qarori yoki " +
      "hukm kerak — " +
      "shunchaki " +
      "\"u yomon " +
      "edi\" degan " +
      "dalil " +
      "yetarli emas.",
    lawRefs: [
      { code: "FK2", article: "1119" },
      { code: "FK2", article: "1118" },
    ],
  },

  /* ── 7 ─────────────────────────────────────────────────────── */
  {
    heading: "Umumiy birgalikdagi mulkni meros qilish",
    text:
      "Bu — amalda eng ko'p " +
      "chalkashlik " +
      "keltiradigan " +
      "mavzulardan biri.\n\n" +
      "Er-xotinning nikoh " +
      "davrida orttirgan " +
      "mol-mulki UMUMIY " +
      "hisoblanadi. Ulardan " +
      "biri vafot " +
      "etganda MEROSGA " +
      "faqat uning " +
      "ULUSHI o'tadi — " +
      "butun mol-mulk " +
      "emas.\n\n" +
      "Ya'ni avval umumiy " +
      "mulkdan tirik " +
      "qolgan er " +
      "(xotin)ning ulushi " +
      "AJRATIB olinadi, " +
      "qolgan qismi esa " +
      "merosxo'rlar " +
      "o'rtasida " +
      "taqsimlanadi.\n\n" +
      "⚠️ Ko'p " +
      "uchraydigan " +
      "xato: butun " +
      "kvartirani meros " +
      "deb hisoblab, uni " +
      "to'liq " +
      "farzandlar " +
      "o'rtasida " +
      "bo'lishga " +
      "urinish. Bu " +
      "tirik qolgan " +
      "er (xotin)ning " +
      "huquqini " +
      "buzadi.\n\n" +
      "Meros olishda " +
      "er (xotin)ning " +
      "huquqi alohida " +
      "moddada ham " +
      "mustahkamlangan.",
    example:
      "Er vafot etdi, " +
      "nikoh davrida " +
      "olingan kvartira " +
      "bor. Avval " +
      "xotinning ulushi " +
      "ajratiladi, " +
      "faqat erning " +
      "ulushi " +
      "merosxo'rlar " +
      "(shu jumladan " +
      "xotin) o'rtasida " +
      "taqsimlanadi.",
    keyPoints: [
      "Umumiy mulkdan faqat meros qoldiruvchining ulushi merosga o'tadi",
      "Tirik qolgan er (xotin)ning ulushi avval ajratiladi",
      "Butun mol-mulkni meros deb hisoblash xato",
      "Er (xotin)ning huquqi alohida kafolatlangan",
    ],
    warning:
      "Notariusda " +
      "mol-mulk nikoh " +
      "davrida " +
      "olinganini " +
      "hujjat bilan " +
      "tasdiqlang — " +
      "ulushni " +
      "ajratish " +
      "shunga " +
      "bog'liq.",
    lawRefs: [
      { code: "FK2", article: "1114" },
      { code: "FK2", article: "1143" },
    ],
  },

  /* ── 8 ─────────────────────────────────────────────────────── */
  {
    heading: "Yer uchastkasiga bo'lgan huquqni meros qilish",
    text:
      "Yer uchastkasi bilan " +
      "bog'liq meros " +
      "alohida moddada " +
      "tartibga solingan, " +
      "chunki yer huquqiy " +
      "rejimi o'ziga xos.\n\n" +
      "Yer uchastkasiga " +
      "bo'lgan huquq " +
      "merosxo'rlarga " +
      "o'tadi — lekin " +
      "yer " +
      "qonunchiligida " +
      "belgilangan " +
      "qoidalarga " +
      "muvofiq.\n\n" +
      "⚠️ Amaliy jihat: " +
      "yer uchastkasi va " +
      "undagi bino " +
      "odatda birgalikda " +
      "qaraladi. Uyni " +
      "meros qilib " +
      "olgan shaxs " +
      "yerga bo'lgan " +
      "huquqni ham " +
      "oladi.\n\n" +
      "Bo'linish " +
      "masalasi " +
      "murakkabroq: " +
      "yer uchastkasini " +
      "bo'lish har " +
      "doim ham mumkin " +
      "emas (eng kam " +
      "o'lcham va " +
      "maqsadli " +
      "foydalanish " +
      "talablari).\n\n" +
      "Bunday holatda " +
      "merosxo'rlar " +
      "umumiy ulushli " +
      "mulk sifatida " +
      "egalik qilishi " +
      "yoki " +
      "kompensatsiya " +
      "yo'li bilan " +
      "hal qilishi " +
      "mumkin.",
    example:
      "Uch merosxo'r " +
      "kichik yer " +
      "uchastkasini " +
      "meros qilib " +
      "oldi. Uni uchga " +
      "bo'lish eng kam " +
      "o'lcham " +
      "talabiga zid " +
      "bo'lsa, ular " +
      "umumiy mulk " +
      "sifatida " +
      "egalik qiladi.",
    keyPoints: [
      "Yerga bo'lgan huquq merosxo'rlarga o'tadi",
      "Yer qonunchiligi qoidalari ham qo'llaniladi",
      "Uy va yer odatda birgalikda o'tadi",
      "Yerni bo'lish har doim ham mumkin emas",
    ],
    warning:
      "Yer hujjatlarini " +
      "oldindan " +
      "tekshiring: " +
      "huquq turi " +
      "(mulk, ijara, " +
      "foydalanish) " +
      "meros " +
      "tartibiga " +
      "ta'sir " +
      "qiladi.",
    lawRefs: [
      { code: "FK2", article: "1115" },
      { code: "FK2", article: "1150" },
    ],
  },
];

module.exports = { SECTIONS };
