"use strict";
/**
 * OILA HUQUQI — 5-QISM: AJRIMDAN KEYIN (41–50-mavzular)
 *
 * Foydalanuvchining so'roviga ko'ra: "ajrimdan so'ng nima bo'ladi".
 * Ketma-ketlik: bola kim bilan qoladi → ko'rishish tartibi →
 * aliment (kim, qancha, qanday undiriladi) → mulkni bo'lish.
 *
 * Mulkni bo'lish ATAYLAB oxirida turadi: u eng murakkab mavzu va
 * uni tushunish uchun 2-qismdagi umumiy/shaxsiy mulk qoidalari
 * allaqachon o'zlashtirilgan bo'lishi kerak.
 */

const SECTIONS = [
  /* ── 41 ────────────────────────────────────────────────────── */
  {
    heading: "Bola kim bilan qoladi",
    text:
      "Ajralishdan keyingi eng og'riqli savol. " +
      "Javob bitta tamoyilga tayanadi: BOLA " +
      "MANFAATI.\n\n" +
      "Ota-ona kelisha olsa, sud kelishuvni " +
      "tasdiqlaydi. Kelisha olmasa — sud o'zi " +
      "hal qiladi va bir qator holatni " +
      "baholaydi.\n\n" +
      "Sud e'tiborga oladigan omillar: bolaning " +
      "har bir ota-onaga bog'liqligi; ota-" +
      "onaning shaxsiy fazilatlari; ular " +
      "bilan bo'lgan munosabat; bolaning yoshi; " +
      "turmush va tarbiya sharoitlari yaratish " +
      "imkoniyati (mashg'ulot turi, ish " +
      "rejimi, moddiy va oilaviy ahvol).\n\n" +
      "Bolaning O'Z FIKRI ham hisobga olinadi. " +
      "Ma'lum yoshdan keyin uning fikri " +
      "ayniqsa jiddiy vazn kasb etadi.\n\n" +
      "Muhim: sud avtomatik ravishda onani " +
      "tanlamaydi. Amalda bolalar ko'pincha " +
      "ona bilan qoladi, lekin bu qonundagi " +
      "qoida emas — har bir ish alohida " +
      "baholanadi.",
    example:
      "Ota moddiy jihatdan ancha yaxshi " +
      "ta'minlangan, lekin doimiy safarlarda. " +
      "Ona daromadi kamroq, ammo bola bilan " +
      "kunda birga va u maktabga o'rgangan. " +
      "Sud ko'pincha barqarorlikni tanlaydi — " +
      "chunki o'lchov pul emas, bolaning " +
      "manfaati.",
    keyPoints: [
      "Yagona o'lchov — bolaning manfaati",
      "Ota-ona kelishuvi bo'lsa sud uni tasdiqlaydi",
      "Bog'liqlik, yosh, sharoit va munosabat baholanadi",
      "Qonunda \"bola onaga beriladi\" degan qoida yo'q",
    ],
    warning:
      "Ikkinchi ota-onani bolaga yomon " +
      "ko'rsatishga urinish sudda SIZGA " +
      "qarshi dalil bo'ladi — bu bola " +
      "manfaatiga zid xatti-harakat.",
    lawRefs: [
      { code: "OK", article: "44" },
      { code: "OK", article: "68" },
    ],
  },

  /* ── 42 ────────────────────────────────────────────────────── */
  {
    heading: "Alohida yashovchi ota (ona)ning huquqlari",
    text:
      "Bola bir ota-ona bilan qoldi. Ikkinchisi " +
      "huquqlarini yo'qotadimi? YO'Q. Bu — eng " +
      "muhim tushunchalardan biri.\n\n" +
      "Boladan alohida yashayotgan ota (ona) " +
      "quyidagi huquqlarni saqlab qoladi: bola " +
      "bilan MULOQOT qilish; uning tarbiyasida " +
      "QATNASHISH; ta'lim olish masalalarini " +
      "hal qilishda ishtirok etish; bola " +
      "haqidagi ma'lumotni (tibbiy, ta'lim) " +
      "olish.\n\n" +
      "Bola bilan yashayotgan ota-ona bu " +
      "muloqotga TO'SQINLIK QILA OLMAYDI — " +
      "agar muloqot bolaning jismoniy va " +
      "ruhiy sog'lig'iga, axloqiy rivojlanishiga " +
      "zarar yetkazmasa.\n\n" +
      "Ota-ona muloqot tartibini o'zaro " +
      "kelishib olishi mumkin, eng yaxshisi " +
      "— yozma ravishda. Kelisha olmasa " +
      "tartibni sud belgilaydi.",
    example:
      "Ona bolani otasi bilan " +
      "ko'rishtirmayapti. Ota sudga murojaat " +
      "qilib ko'rishish tartibini belgilatishi " +
      "mumkin: qaysi kunlar, qancha vaqt, " +
      "qayerda. Qaror bajarilishi majburiy.",
    keyPoints: [
      "Alohida yashash huquqlarni yo'qotmaydi",
      "Muloqot, tarbiya va ta'limda ishtirok huquqi saqlanadi",
      "To'sqinlik qilish faqat bolaga zarar bo'lgandagina asosli",
      "Kelishilmasa tartibni sud belgilaydi",
    ],
    warning:
      "Sud belgilagan ko'rishish tartibini " +
      "bajarmaslik majburiy ijro choralariga " +
      "va jiddiyroq oqibatlarga olib keladi.",
    lawRefs: [
      { code: "OK", article: "76" },
      { code: "OK", article: "66" },
      { code: "OK", article: "78" },
    ],
  },

  /* ── 43 ────────────────────────────────────────────────────── */
  {
    heading: "Bobo-buvi va qarindoshlar bilan ko'rishish",
    text:
      "Ajralish ko'pincha bolani nafaqat " +
      "ikkinchi ota-onadan, balki butun bir " +
      "qarindoshlar doirasidan uzib qo'yadi. " +
      "Qonun buni ham hisobga olgan.\n\n" +
      "Bobo, buvi, aka-uka, opa-singil va " +
      "boshqa yaqin qarindoshlar bola bilan " +
      "ko'rishib turish huquqiga ega.\n\n" +
      "Bu — qarindoshlarning shaxsiy istagi " +
      "emas, avvalo BOLANING huquqi: u o'z " +
      "qarindoshlarini bilishi va ular bilan " +
      "muloqotda bo'lishi kerak.\n\n" +
      "Ota-ona bunga to'sqinlik qilsa, " +
      "qarindoshlar vasiylik va homiylik " +
      "organiga yoki sudga murojaat qilishi " +
      "mumkin. Organ ko'rishish tartibini " +
      "belgilashi mumkin.",
    example:
      "Ajrashgandan keyin ona bolani otasining " +
      "ota-onasi bilan ko'rishtirmayapti. " +
      "Bobo va buvi vasiylik organiga murojaat " +
      "qilib, ko'rishish tartibini " +
      "belgilatishi mumkin.",
    keyPoints: [
      "Yaqin qarindoshlar bola bilan ko'rishish huquqiga ega",
      "Bu avvalo bolaning o'z huquqi",
      "To'sqinlikda vasiylik organiga yoki sudga murojaat qilinadi",
      "Organ ko'rishish tartibini belgilashi mumkin",
    ],
    warning:
      "Bolani qarindoshlardan uzoqlashtirish " +
      "sudda ota-onaning tarbiya sifatini " +
      "baholashda salbiy hisobga olinadi.",
    lawRefs: [
      { code: "OK", article: "77" },
      { code: "OK", article: "66" },
    ],
  },

  /* ── 44 ────────────────────────────────────────────────────── */
  {
    heading: "Bola tarbiyasi nizolari: vasiylik organi va ijro",
    text:
      "Bolalar tarbiyasi bilan bog'liq nizolar " +
      "sudda ko'rilganda VASIYLIK VA HOMIYLIK " +
      "ORGANI majburiy ishtirok etadi.\n\n" +
      "Organ nima qiladi? U turmush " +
      "sharoitlarini tekshiradi, ikkala " +
      "ota-onaning imkoniyatlarini baholaydi " +
      "va sudga o'z xulosasini taqdim etadi. " +
      "Sud bu xulosani hisobga oladi.\n\n" +
      "Bu qoida muhim, chunki u sudni faqat " +
      "tomonlarning so'zlariga tayanishdan " +
      "himoya qiladi — mustaqil, joyida " +
      "tekshirilgan ma'lumot bo'ladi.\n\n" +
      "Qaror chiqqach uni IJRO ETISH masalasi " +
      "turadi. Bola bilan bog'liq qarorlarni " +
      "ijro etish alohida, ehtiyotkorlik " +
      "talab qiladigan tartibda amalga " +
      "oshiriladi — chunki bu yerda bolaning " +
      "ruhiy holati ham hisobga olinishi " +
      "kerak.",
    example:
      "Sud ishni ko'rishdan oldin vasiylik " +
      "organi ikkala ota-onaning uyiga borib " +
      "sharoitni tekshirdi va dalolatnoma " +
      "tuzdi. Aynan shu hujjat sud qarorida " +
      "muhim asos bo'ldi.",
    keyPoints: [
      "Vasiylik organi bola nizolarida majburiy ishtirok etadi",
      "U turmush sharoitini joyida tekshiradi",
      "Xulosa sud uchun muhim dalil hisoblanadi",
      "Bola bilan bog'liq qarorlar alohida tartibda ijro etiladi",
    ],
    warning:
      "Vasiylik organi tekshiruviga " +
      "tayyorgarlik ko'rish kerak: sharoit, " +
      "hujjatlar va bolaning kundalik " +
      "tartibi baholanadi.",
    lawRefs: [
      { code: "OK", article: "88" },
      { code: "OK", article: "89" },
    ],
  },

  /* ── 45 ────────────────────────────────────────────────────── */
  {
    heading: "Aliment: kim, kimga va qachon to'laydi",
    text:
      "Aliment — bu jazо emas, bolani " +
      "TA'MINLASH majburiyati. Ota-ona o'z " +
      "voyaga yetmagan bolalarini ta'minlashi " +
      "SHART.\n\n" +
      "Bu majburiyat ikkala ota-ona uchun ham " +
      "TENG. U ajralishga, nikoh bo'lgan-" +
      "bo'lmaganiga yoki ota-onaning bir-" +
      "biriga munosabatiga BOG'LIQ EMAS.\n\n" +
      "Aliment odatda boladan alohida " +
      "yashayotgan ota-onadan undiriladi. " +
      "Lekin ikkalasi ham alohida yashasa " +
      "(bola qarindoshda yoki muassasada " +
      "bo'lsa), ikkalasidan ham undiriladi.\n\n" +
      "Aliment ikki yo'l bilan to'lanadi: " +
      "IXTIYORIY (kelishuv asosida yoki o'z " +
      "xohishi bilan) va MAJBURIY (sud " +
      "qarori asosida). Ixtiyoriy yo'l " +
      "har doim afzal — u tez, arzon va " +
      "kamroq ziddiyat keltiradi.",
    example:
      "Ota-ona ajrashdi, bola ona bilan " +
      "qoldi. Ota ixtiyoriy ravishda har oy " +
      "pul o'tkazib turibdi. Lekin bu " +
      "hujjatlashtirilmagan — keyinchalik " +
      "nizo chiqsa, to'laganini isbotlash " +
      "qiyin bo'ladi.",
    keyPoints: [
      "Aliment — jazo emas, ta'minlash majburiyati",
      "Majburiyat ikkala ota-ona uchun teng",
      "U ajralish yoki nikohning bor-yo'qligiga bog'liq emas",
      "Ixtiyoriy va majburiy yo'llar mavjud",
    ],
    warning:
      "Ixtiyoriy to'lovlarni hujjatlashtiring " +
      "(o'tkazma izohi, tilxat). Aks holda " +
      "keyinchalik \"to'lanmagan\" deb " +
      "hisoblanishi mumkin.",
    lawRefs: [
      { code: "OK", article: "96" },
      { code: "OK", article: "97" },
      { code: "OK", article: "98" },
    ],
  },

  /* ── 46 ────────────────────────────────────────────────────── */
  {
    heading: "Aliment miqdori qanday belgilanadi",
    text:
      "Aliment miqdori ikki usulda " +
      "belgilanadi.\n\n" +
      "Birinchisi va asosiysi — DAROMADGA " +
      "NISBATAN ULUSH. Miqdor bolalar soniga " +
      "qarab o'zgaradi. Aniq ulushlar " +
      "quyidagi qonun matnida ko'rsatilgan.\n\n" +
      "Ikkinchisi — QAT'IY PUL SUMMASI. Bu " +
      "usul daromadi nomuntazam bo'lganda, " +
      "natura shaklida olinganda, chet el " +
      "valyutasida bo'lganda yoki umuman " +
      "rasmiy daromadi bo'lmaganda " +
      "qo'llaniladi.\n\n" +
      "Aliment qanday daromaddan undiriladi? " +
      "Ro'yxat keng: ish haqi, mukofot, " +
      "nafaqa, stipendiya, tadbirkorlik " +
      "daromadi va boshqalar.\n\n" +
      "Alohida holat — QO'SHIMCHA XARAJATLAR. " +
      "Bolaning og'ir kasalligi, jarohati " +
      "yoki boshqa alohida holatlarda " +
      "asosiy alimentdan tashqari qo'shimcha " +
      "xarajatlarni undirish mumkin.",
    example:
      "Ota rasmiy ish joyisiz, daromadi " +
      "o'zgaruvchan. Sud ulush emas, qat'iy " +
      "summa belgiladi — bu bolaning " +
      "ta'minotini barqaror qiladi.",
    keyPoints: [
      "Asosiy usul — daromadga nisbatan ulush",
      "Ulush bolalar soniga qarab o'zgaradi",
      "Nomuntazam daromadda qat'iy summa belgilanadi",
      "Og'ir holatlarda qo'shimcha xarajat ham undiriladi",
    ],
    warning:
      "Daromadni yashirish uzoq muddatda " +
      "ishlamaydi: sud daromad manbalarini " +
      "aniqlash va qat'iy summa belgilash " +
      "imkoniyatiga ega.",
    lawRefs: [
      { code: "OK", article: "99" },
      { code: "OK", article: "102" },
      { code: "OK", article: "103" },
      { code: "OK", article: "104" },
    ],
  },

  /* ── 47 ────────────────────────────────────────────────────── */
  {
    heading: "Aliment to'lash to'g'risida kelishuv",
    text:
      "Sudga bormasdan ham aliment masalasini " +
      "hal qilish mumkin — bu KELISHUV yo'li " +
      "va u ko'p hollarda eng yaxshi variant.\n\n" +
      "Kelishuv aliment to'laydigan shaxs va " +
      "uni oluvchi o'rtasida tuziladi. Unda " +
      "miqdor, to'lash usuli va tartibi " +
      "belgilanadi.\n\n" +
      "⚠️ SHAKL TALABI HAL QILUVCHI: kelishuv " +
      "yozma shaklda tuzilishi va NOTARIAL " +
      "tasdiqlanishi kerak. Notarial " +
      "tasdiqlangan kelishuv IJRO HUJJATI " +
      "kuchiga ega — ya'ni to'lanmasa, " +
      "sudga bormasdan majburiy ijroga " +
      "berish mumkin.\n\n" +
      "Muhim cheklov: kelishuvdagi miqdor " +
      "sud tartibida undiriladigan " +
      "miqdordan KAM bo'lishi mumkin emas. " +
      "Aks holda kelishuv bolaning " +
      "manfaatlarini buzgan hisoblanadi.\n\n" +
      "Kelishuvni keyinchalik o'zgartirish " +
      "yoki bekor qilish mumkin — lekin " +
      "yana o'sha notarial shaklda.",
    example:
      "Ota-ona notarial kelishuv tuzdi va " +
      "ota har oy belgilangan summani " +
      "to'laydi. To'lash to'xtaganda ona " +
      "yangi sud jarayonisiz to'g'ridan-" +
      "to'g'ri majburiy ijroga bera oladi.",
    keyPoints: [
      "Kelishuv sud jarayonisiz masalani hal qiladi",
      "Yozma shakl va notarial tasdiq majburiy",
      "Notarial kelishuv ijro hujjati kuchiga ega",
      "Miqdor sud belgilaydiganidan kam bo'lmasligi kerak",
    ],
    warning:
      "Oddiy qo'l bilan yozilgan yoki og'zaki " +
      "\"kelishuv\" hech qanday kuchga ega " +
      "emas — u ijroga berilmaydi.",
    lawRefs: [
      { code: "OK", article: "130" },
      { code: "OK", article: "131" },
      { code: "OK", article: "133" },
    ],
  },

  /* ── 48 ────────────────────────────────────────────────────── */
  {
    heading: "Alimentni majburiy undirish va qarz",
    text:
      "Ixtiyoriy to'lanmasa va kelishuv " +
      "bo'lmasa, aliment SUD tartibida " +
      "undiriladi.\n\n" +
      "Sud qarori chiqqach ijro jarayoni " +
      "boshlanadi. Bunda ISH BERUVCHI muhim " +
      "rol o'ynaydi: u ijro hujjati asosida " +
      "aliment summasini ish haqidan ushlab " +
      "qolib, oluvchiga o'tkazishi SHART.\n\n" +
      "Aliment to'lovchining yana bir " +
      "majburiyati bor: u ish joyi, o'qish " +
      "joyi yoki turar joyi o'zgarganini " +
      "XABAR QILISHI kerak. Bu majburiyatni " +
      "bajarmaslik ijroni qiyinlashtiradi " +
      "va oqibatlarga olib keladi.\n\n" +
      "To'lanmagan aliment QARZ sifatida " +
      "yig'ilib boradi. Qarz miqdori " +
      "belgilangan tartibda hisoblanadi va " +
      "u avtomatik ravishda \"kechirilmaydi\". " +
      "Qarzni undirish uchun ham majburiy " +
      "ijro choralari qo'llaniladi.",
    example:
      "Ota ishdan bo'shab, yangi joyni xabar " +
      "qilmadi. Aliment to'xtadi va qarz " +
      "yig'ildi. Yangi ish joyi aniqlangach " +
      "qarz to'liq undirila boshlandi — u " +
      "yo'qolib ketmaydi.",
    keyPoints: [
      "Kelishuv bo'lmasa aliment sud orqali undiriladi",
      "Ish beruvchi alimentni ushlab qolishi shart",
      "Ish va turar joy o'zgarishi haqida xabar berish majburiy",
      "To'lanmagan aliment qarz bo'lib yig'iladi va kechirilmaydi",
    ],
    warning:
      "Ishdan bo'shash aliment majburiyatini " +
      "to'xtatmaydi — qarz baribir yig'ilib " +
      "boraveradi.",
    lawRefs: [
      { code: "OK", article: "136" },
      { code: "OK", article: "137" },
      { code: "OK", article: "138" },
      { code: "OK", article: "139" },
    ],
  },

  /* ── 49 ────────────────────────────────────────────────────── */
  {
    heading: "Aliment to'lanmasa: javobgarlik",
    text:
      "Aliment to'lashdan bosh tortish " +
      "JAVOBGARLIKKA olib keladi va bu " +
      "javobgarlik bir necha darajada " +
      "bo'ladi.\n\n" +
      "Birinchi daraja — MULKIY javobgarlik. " +
      "Alimentni o'z vaqtida to'lamaganlik " +
      "uchun qonunda alohida javobgarlik " +
      "nazarda tutilgan.\n\n" +
      "Ikkinchi daraja — OTA-ONALIK " +
      "HUQUQIDAN MAHRUM QILISH. Alimentdan " +
      "zimdan bosh tortish buning asoslaridan " +
      "biri hisoblanadi.\n\n" +
      "Uchinchi daraja — qonunda nazarda " +
      "tutilgan boshqa javobgarlik choralari, " +
      "shu jumladan chet elga chiqishni " +
      "cheklash kabi choralar.\n\n" +
      "Muhim: aliment miqdorini " +
      "o'zgartirish yoki to'lashdan ozod " +
      "qilish MUMKIN, lekin faqat SUD " +
      "orqali va asosli sabab bo'lganda " +
      "(masalan moddiy yoki oilaviy " +
      "ahvolning jiddiy o'zgarishi). " +
      "Shunchaki to'lashni to'xtatib qo'yish " +
      "esa huquqbuzarlik.",
    example:
      "Ota daromadi keskin kamaydi. To'g'ri " +
      "yo'l — sudga murojaat qilib miqdorni " +
      "qayta ko'rib chiqtirish. Noto'g'ri " +
      "yo'l — shunchaki to'lashni to'xtatish, " +
      "bu qarz va javobgarlikka olib keladi.",
    keyPoints: [
      "Aliment to'lamaslik javobgarlikka olib keladi",
      "Zimdan bosh tortish ota-onalik huquqidan mahrum qilish asosi",
      "Chet elga chiqishni cheklash kabi choralar qo'llanilishi mumkin",
      "Miqdorni faqat sud o'zgartira oladi",
    ],
    warning:
      "\"Bola bilan ko'rishtirmayapti, " +
      "shuning uchun to'lamayman\" — bu " +
      "asos EMAS. Ikki masala huquqan " +
      "bir-biriga bog'liq emas.",
    lawRefs: [
      { code: "OK", article: "116" },
      { code: "OK", article: "142" },
      { code: "OK", article: "146" },
    ],
  },

  /* ── 50 ────────────────────────────────────────────────────── */
  {
    heading: "Mulkni bo'lish va da'vo muddati",
    text:
      "Yakuniy mavzu — umumiy mol-mulkni " +
      "bo'lish. Uni nikoh davrida ham, " +
      "ajralish paytida ham, ajrashgandan " +
      "KEYIN ham amalga oshirish mumkin.\n\n" +
      "Asosiy qoida: er-xotinning umumiy " +
      "mol-mulkidagi ulushlari TENG deb " +
      "topiladi. Lekin sud muayyan holatlarda " +
      "ulushdan chekinishi mumkin — masalan " +
      "voyaga yetmagan bolalar manfaatini " +
      "yoki tomonlardan birining e'tiborga " +
      "loyiq manfaatini hisobga olib.\n\n" +
      "Bo'lish tartibi: avval nima umumiy, " +
      "nima shaxsiy ekani aniqlanadi, so'ng " +
      "ulushlar belgilanadi va mol-mulk " +
      "taqsimlanadi. Natura shaklida " +
      "bo'lish imkonsiz bo'lsa, pul " +
      "kompensatsiyasi belgilanadi.\n\n" +
      "⚠️ DA'VO MUDDATI. Ajrashgan " +
      "er-xotinning mulkni bo'lish " +
      "talablariga da'vo muddati qo'llaniladi. " +
      "Ya'ni cheksiz kutib bo'lmaydi — " +
      "muddat o'tgach talab qo'yish " +
      "imkoniyati yo'qoladi. Aniq muddat " +
      "quyidagi qonun matnida.",
    example:
      "Er-xotin ajrashdi, lekin kvartirani " +
      "bo'lishmadi. Yillar o'tib xotin " +
      "da'vo qo'ymoqchi bo'ldi — ammo " +
      "muddat o'tib ketgan bo'lishi mumkin. " +
      "Shuning uchun mulk masalasini " +
      "ajralish bilan BIRGA hal qilish " +
      "eng to'g'ri yo'l.",
    keyPoints: [
      "Mulkni nikoh davrida, ajralishda va undan keyin bo'lish mumkin",
      "Ulushlar teng deb topiladi",
      "Bola manfaati uchun sud ulushdan chekinishi mumkin",
      "Da'vo muddati mavjud — cheksiz kutib bo'lmaydi",
    ],
    warning:
      "Mulkni bo'lishni keyinga qoldirish " +
      "eng qimmatga tushadigan xato: " +
      "muddat o'tadi, mulk sotiladi va " +
      "dalil yo'qoladi.",
    lawRefs: [
      { code: "OK", article: "27" },
      { code: "OK", article: "28" },
      { code: "OK", article: "12" },
    ],
  },
];

module.exports = { SECTIONS };
