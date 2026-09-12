"use strict";
/**
 * ISTE'MOLCHI HUQUQLARI — 2-QISM: XARID QILISH (9–18-mavzular)
 *
 * Ketma-ketlik: shartnoma nima → chakana savdo qoidalari →
 * narx va to'lov → maxsus sotish usullari → onlayn savdo.
 */

const SECTIONS = [
  /* ── 9 ─────────────────────────────────────────────────────── */
  {
    heading: "Oldi-sotdi shartnomasi nima",
    text:
      "Har bir xarid — bu SHARTNOMA. " +
      "Do'konda non olsangiz ham " +
      "shartnoma tuzgan bo'lasiz, " +
      "hujjat imzolamasangiz ham.\n\n" +
      "Oldi-sotdi shartnomasi bo'yicha " +
      "sotuvchi tovarni xaridorning " +
      "mulkiga topshirish, xaridor esa " +
      "tovarni qabul qilib, uning " +
      "haqini to'lash majburiyatini " +
      "oladi.\n\n" +
      "Bu tushunchani anglash muhim, " +
      "chunki undan MAJBURIYATLAR " +
      "kelib chiqadi. Sotuvchi " +
      "tovarni: kelishilgan " +
      "MIQDORDA, kelishilgan " +
      "SIFATDA, kelishilgan " +
      "ASSORTIMENTDA, BUT holda va " +
      "tegishli IDISHDA topshirishi " +
      "kerak.\n\n" +
      "Bularning har biri buzilganda " +
      "iste'molchining ALOHIDA " +
      "huquqlari yuzaga keladi — " +
      "keyingi mavzularda har birini " +
      "ko'rib chiqamiz.\n\n" +
      "Shuningdek sotuvchi tovarni " +
      "uchinchi shaxslarning " +
      "huquqlaridan ozod holda " +
      "topshirishi shart.",
    example:
      "Xaridor ikkinchi qo'l avtomobil " +
      "oldi, keyin u garovda ekani " +
      "ma'lum bo'ldi. Sotuvchi tovarni " +
      "uchinchi shaxs huquqlaridan " +
      "ozod topshirish majburiyatini " +
      "buzgan.",
    keyPoints: [
      "Har bir xarid — oldi-sotdi shartnomasi",
      "Hujjat imzolanmasa ham shartnoma tuzilgan hisoblanadi",
      "Sotuvchi miqdor, sifat, assortiment va butlikka javob beradi",
      "Tovar uchinchi shaxs huquqlaridan ozod bo'lishi kerak",
    ],
    warning:
      "Ikkinchi qo'l qimmat tovar " +
      "olayotganda uning garovda " +
      "yoki hibsda emasligini " +
      "tekshiring — bu keyinchalik " +
      "tovarni olib qo'yishga olib " +
      "kelishi mumkin.",
    lawRefs: [
      { code: "FK2", article: "386" },
      { code: "FK2", article: "388" },
      { code: "FK2", article: "393" },
    ],
  },

  /* ── 10 ────────────────────────────────────────────────────── */
  {
    heading: "Chakana savdo va ommaviy oferta",
    text:
      "Kundalik xaridlarimizning " +
      "aksariyati — CHAKANA oldi-sotdi. " +
      "Uning o'ziga xos qoidalari bor.\n\n" +
      "Chakana shartnomada sotuvchi " +
      "tadbirkorlik faoliyatini " +
      "amalga oshiruvchi shaxs bo'ladi " +
      "va tovarni shaxsiy ehtiyoj " +
      "uchun sotadi.\n\n" +
      "OMMAVIY OFERTA tushunchasi " +
      "muhim: vitrinada, javonda " +
      "yoki katalogda tovarning " +
      "narxi bilan ko'rsatilishi " +
      "shartnoma tuzish taklifi " +
      "hisoblanadi.\n\n" +
      "⚠️ Amaliy natijasi juda aniq: " +
      "agar narx yorlig'ida bir " +
      "summa yozilgan bo'lsa, " +
      "sotuvchi kassada boshqa " +
      "summani talab qila olmaydi. " +
      "\"Narxni yangilashga " +
      "ulgurmadik\" degan dalil " +
      "iste'molchiga tegishli " +
      "emas.\n\n" +
      "Bu qoidani bilish oddiy " +
      "do'kon nizolarining katta " +
      "qismini hal qiladi.",
    example:
      "Javonda tovar 100 000 so'm deb " +
      "turibdi, kassada 130 000 so'm " +
      "deyishdi. Xaridor yorliqdagi " +
      "narxni talab qilishga haqli.",
    keyPoints: [
      "Chakana savdo alohida qoidalarga bo'ysunadi",
      "Narx bilan ko'rsatilgan tovar — ommaviy oferta",
      "Kassadagi narx yorliqdagidan yuqori bo'lishi mumkin emas",
      "\"Yangilashga ulgurmadik\" — iste'molchiga tegishli dalil emas",
    ],
    warning:
      "Narx yorlig'ini suratga oling " +
      "— nizoda bu yagona dalil " +
      "bo'lib qolishi mumkin, chunki " +
      "yorliq darhol almashtiriladi.",
    lawRefs: [
      { code: "FK2", article: "425" },
      { code: "FK2", article: "426" },
      { code: "IHQ", article: "9" },
    ],
  },

  /* ── 11 ────────────────────────────────────────────────────── */
  {
    heading: "Narx va to'lash tartibi",
    text:
      "Tovarning bahosi va uni to'lash " +
      "tartibi shartnomaning muhim " +
      "sharti hisoblanadi.\n\n" +
      "Umumiy qoida: xaridor tovarni " +
      "qabul qilgandan keyin darhol " +
      "to'laydi — agar boshqacha " +
      "kelishilmagan bo'lsa.\n\n" +
      "To'lash SHAKLI ham tartibga " +
      "solingan: naqd pul, plastik " +
      "karta yoki qonunda nazarda " +
      "tutilgan boshqa usullar. " +
      "Sotuvchi qonuniy to'lov " +
      "usulini asossiz rad eta " +
      "olmaydi.\n\n" +
      "⚠️ Diqqat qiling: to'lov " +
      "usuliga qarab NARXNI " +
      "oshirish (masalan karta " +
      "bilan to'laganda qo'shimcha " +
      "foiz olish) alohida qoidalarga " +
      "bo'ysunadi va ko'p hollarda " +
      "asossiz bo'ladi.\n\n" +
      "Tovar haqini OLDINDAN to'lash, " +
      "NASIYAGA va BO'LIB-BO'LIB " +
      "to'lash uchun alohida " +
      "moddalar mavjud — bular " +
      "keyingi mavzuda.",
    example:
      "Do'kon karta bilan to'laganda " +
      "narxni 3 foizga oshirdi. " +
      "Bunday amaliyot asosli " +
      "bo'lishi uchun qonuniy asos " +
      "kerak — aks holda u " +
      "iste'molchi huquqini buzadi.",
    keyPoints: [
      "Narx va to'lov tartibi — shartnomaning muhim sharti",
      "Odatda tovar qabul qilingach darhol to'lanadi",
      "Qonuniy to'lov usulini asossiz rad etib bo'lmaydi",
      "To'lov usuliga qarab narx oshirish alohida qoidalarga bo'ysunadi",
    ],
    warning:
      "To'lov hujjatini (chek, " +
      "kvitansiya, bank tasdig'i) " +
      "har doim oling — bu xaridni " +
      "isbotlovchi asosiy dalil.",
    lawRefs: [
      { code: "IHQ", article: "10" },
      { code: "FK2", article: "418" },
      { code: "FK2", article: "419" },
      { code: "FK2", article: "432" },
    ],
  },

  /* ── 12 ────────────────────────────────────────────────────── */
  {
    heading: "Nasiyaga va bo'lib-bo'lib to'lash",
    text:
      "Tovarni darhol to'liq to'lamasdan " +
      "olish ikki shaklda bo'ladi va " +
      "ular huquqiy jihatdan " +
      "farqlanadi.\n\n" +
      "NASIYAGA sotish — tovar " +
      "topshiriladi, haqi esa " +
      "kelishilgan muddatdan keyin " +
      "to'lanadi.\n\n" +
      "BO'LIB-BO'LIB to'lash — haq " +
      "belgilangan davrlar bo'yicha " +
      "qismlarga bo'lib to'lanadi. " +
      "Bunda shartnomada tovar " +
      "bahosi, to'lovlar tartibi, " +
      "muddatlari va miqdorlari " +
      "ko'rsatilishi kerak.\n\n" +
      "⚠️ Bu shartlar YOZMA aniq " +
      "belgilanmasa, keyinchalik " +
      "qancha va qachon to'lash " +
      "kerakligi bo'yicha nizo " +
      "chiqadi.\n\n" +
      "Alohida e'tibor: \"muddatli " +
      "to'lov\" ko'pincha kredit " +
      "yoki mikroqarz bilan " +
      "rasmiylashtiriladi. Bu " +
      "butunlay BOSHQA shartnoma va " +
      "unda foiz, jarima hamda " +
      "moliyaviy xizmatlar " +
      "qoidalari qo'llaniladi.\n\n" +
      "Shuning uchun nimaga imzo " +
      "chekayotganingizni aniq " +
      "biling.",
    example:
      "Xaridor \"bo'lib-bo'lib " +
      "to'lash\" deb o'ylab, aslida " +
      "bank krediti shartnomasiga " +
      "imzo chekdi. Umumiy to'lov " +
      "e'lon qilingan narxdan " +
      "sezilarli yuqori chiqdi.",
    keyPoints: [
      "Nasiya va bo'lib-bo'lib to'lash — turli tushunchalar",
      "To'lov tartibi, muddati va miqdori yozma belgilanadi",
      "\"Muddatli to'lov\" ko'pincha kredit shartnomasi bo'ladi",
      "Kreditda foiz va jarima qoidalari qo'llaniladi",
    ],
    warning:
      "Imzolashdan oldin JAMI qancha " +
      "to'lashingizni so'rang va uni " +
      "hujjatda ko'ring — oylik " +
      "to'lov kichik ko'rinishi " +
      "mumkin.",
    lawRefs: [
      { code: "FK2", article: "421" },
      { code: "FK2", article: "422" },
      { code: "FK2", article: "420" },
    ],
  },

  /* ── 13 ────────────────────────────────────────────────────── */
  {
    heading: "Namuna bo'yicha va yetkazib berish sharti bilan sotish",
    text:
      "Ba'zan tovar joyida emas, " +
      "namuna yoki katalog bo'yicha " +
      "tanlanadi. Bunday sotishning " +
      "o'z qoidalari bor.\n\n" +
      "NAMUNA BO'YICHA sotishda " +
      "xaridor tovarning namunasi " +
      "yoki tavsifi bilan tanishadi " +
      "va shu asosda tanlaydi. " +
      "Topshirilgan tovar namunaga " +
      "MOS bo'lishi shart.\n\n" +
      "YETKAZIB BERISH sharti bilan " +
      "sotishda sotuvchi tovarni " +
      "kelishilgan joyga va " +
      "kelishilgan muddatda " +
      "yetkazishi kerak.\n\n" +
      "⚠️ Muddat buzilsa iste'molchining " +
      "alohida huquqlari yuzaga " +
      "keladi — bu haqda alohida " +
      "modda mavjud.\n\n" +
      "Yana bir usul — tovarni " +
      "xaridor tomonidan belgilangan " +
      "muddatda qabul qilinishi " +
      "sharti bilan sotish. Bunda " +
      "tovar boshqa xaridorga " +
      "sotilmaydi va belgilangan " +
      "muddat kutiladi.\n\n" +
      "Avtomatdan tovar sotish ham " +
      "alohida tartibga solingan.",
    example:
      "Mebel katalogdagi namuna " +
      "bo'yicha buyurtma qilindi, " +
      "yetkazilgan mahsulot rangi va " +
      "o'lchami boshqacha chiqdi. " +
      "Tovar namunaga mos emas — " +
      "bu talab qo'yish uchun asos.",
    keyPoints: [
      "Namuna bo'yicha sotishda tovar namunaga mos bo'lishi shart",
      "Yetkazib berish joyi va muddati kelishiladi",
      "Muddat buzilsa alohida huquqlar yuzaga keladi",
      "Belgilangan muddatda qabul qilish sharti bilan sotish ham mumkin",
    ],
    warning:
      "Namuna yoki katalogdagi " +
      "rasmni saqlab qo'ying — " +
      "\"mos emas\" degan talabni " +
      "aynan shu bilan " +
      "isbotlaysiz.",
    lawRefs: [
      { code: "FK2", article: "429" },
      { code: "FK2", article: "431" },
      { code: "FK2", article: "428" },
      { code: "FK2", article: "430" },
    ],
  },

  /* ── 14 ────────────────────────────────────────────────────── */
  {
    heading: "Onlayn xarid",
    text:
      "Axborot tizimlaridan foydalangan " +
      "holda savdo — bugungi kunda " +
      "eng tez o'sayotgan soha va " +
      "qonunda uning uchun ALOHIDA " +
      "modda bor.\n\n" +
      "Onlayn savdoda iste'molchining " +
      "huquqlari saqlanadi: ma'lumot " +
      "olish, sifat, xavfsizlik, " +
      "nuqsonli tovarni qaytarish. " +
      "Ya'ni \"internetdan olgansiz, " +
      "biz javob bermaymiz\" degan " +
      "dalil ishlamaydi.\n\n" +
      "Onlayn savdoning o'ziga xos " +
      "muammosi — xaridor tovarni " +
      "OLDINDAN ko'ra olmaydi. " +
      "Shuning uchun sotuvchining " +
      "ma'lumot berish majburiyati " +
      "bu yerda ayniqsa muhim.\n\n" +
      "⚠️ Amaliy xavflar: sotuvchi " +
      "aniq emas (faqat sahifa yoki " +
      "telefon raqami); to'lov " +
      "jismoniy shaxs kartasiga " +
      "o'tkaziladi; hech qanday " +
      "hujjat berilmaydi.\n\n" +
      "Himoya choralari: rasmiy " +
      "platformalardan xarid " +
      "qiling; sotuvchining rekvizitlarini " +
      "tekshiring; yozishmalarni va " +
      "e'lon skrinshotlarini " +
      "saqlang; to'lovni " +
      "hujjatlashtiring.",
    example:
      "Ijtimoiy tarmoqdan tovar " +
      "buyurtma qilindi, pul " +
      "oldindan o'tkazildi, tovar " +
      "kelmadi. Sotuvchi haqida " +
      "faqat telefon raqami bor — " +
      "da'vo qo'yish uchun shaxsni " +
      "aniqlash kerak bo'ladi.",
    keyPoints: [
      "Onlayn savdo uchun alohida modda mavjud",
      "Iste'molchining barcha huquqlari saqlanadi",
      "Sotuvchining rekvizitlarini oldindan tekshiring",
      "Yozishmalar va skrinshotlar dalil bo'ladi",
    ],
    warning:
      "Oldindan to'liq to'lov eng " +
      "xavfli variant. Imkoni " +
      "bo'lsa yetkazib berishda " +
      "to'lash usulini tanlang.",
    lawRefs: [
      { code: "IHQ", article: "28-1" },
      { code: "IHQ", article: "6" },
      { code: "IHQ", article: "5" },
    ],
  },

  /* ── 15 ────────────────────────────────────────────────────── */
  {
    heading: "Tovar topshirish muddati buzilsa",
    text:
      "Pul to'landi, tovar esa " +
      "kelmadi — bu eng ko'p " +
      "uchraydigan vaziyatlardan " +
      "biri va qonunda uning uchun " +
      "alohida norma bor.\n\n" +
      "Oldi-sotdi shartnomasi " +
      "bo'yicha tovarni topshirish " +
      "muddati buzilganda " +
      "iste'molchining huquqlari " +
      "yuzaga keladi. Odatiy " +
      "imkoniyatlar: yangi muddat " +
      "belgilash; shartnomani bekor " +
      "qilib to'langan summani " +
      "qaytarib olish; yetkazilgan " +
      "zararni qoplashni talab " +
      "qilish.\n\n" +
      "Fuqarolik kodeksi ham " +
      "sotuvchi tovarni " +
      "topshirishdan bosh " +
      "tortishining oqibatlarini " +
      "belgilaydi.\n\n" +
      "⚠️ Amaliy qadam: talabni " +
      "YOZMA bildiring va yangi " +
      "muddatni aniq ko'rsating. " +
      "Og'zaki \"qachon " +
      "olib kelasiz?\" degan " +
      "savollar cheksiz " +
      "cho'zilishi mumkin va " +
      "keyinchalik hech qanday " +
      "iz qoldirmaydi.\n\n" +
      "Yozma talab da'vo " +
      "muddatini hisoblashda ham " +
      "asos bo'ladi.",
    example:
      "Mebel uchun oldindan " +
      "to'landi, yetkazib berish " +
      "muddati ikki marta " +
      "buzildi. Xaridor yozma " +
      "talab yuborib, shartnomani " +
      "bekor qilishi va pulni " +
      "qaytarishni so'rashi " +
      "mumkin.",
    keyPoints: [
      "Topshirish muddati buzilsa alohida huquqlar yuzaga keladi",
      "Yangi muddat belgilash yoki shartnomani bekor qilish mumkin",
      "Zararni qoplash ham talab qilinadi",
      "Talab yozma bildirilishi kerak",
    ],
    warning:
      "Oldindan to'lov qilgan " +
      "bo'lsangiz, muddat " +
      "buzilishi bilan darhol " +
      "yozma murojaat qiling — " +
      "kutish holatni " +
      "yomonlashtiradi.",
    lawRefs: [
      { code: "IHQ", article: "12-1" },
      { code: "FK2", article: "396" },
      { code: "FK2", article: "389" },
    ],
  },

  /* ── 16 ────────────────────────────────────────────────────── */
  {
    heading: "Miqdor va assortiment buzilsa",
    text:
      "Tovar keldi, lekin kelishilgan " +
      "MIQDORDA emas yoki boshqa " +
      "ASSORTIMENTDA. Bularning " +
      "har biri alohida buzilish " +
      "hisoblanadi.\n\n" +
      "MIQDOR kam bo'lsa: xaridor " +
      "yetishmayotgan miqdorni " +
      "topshirishni talab qilishi " +
      "yoki tovarni va to'langan " +
      "pulni qaytarishni so'rashi " +
      "mumkin. Miqdor ORTIQ " +
      "bo'lsa ham qoidalar bor — " +
      "xaridor bu haqda sotuvchini " +
      "xabardor qilishi kerak.\n\n" +
      "ASSORTIMENT buzilganda " +
      "(masalan boshqa rang, " +
      "o'lcham, model) xaridor " +
      "tovarni qabul qilishdan " +
      "bosh tortishi yoki uni " +
      "almashtirishni talab " +
      "qilishi mumkin.\n\n" +
      "⚠️ MUHIM SHART: shartnoma " +
      "tegishli darajada " +
      "bajarilmagani haqida " +
      "sotuvchini XABARDOR QILISH " +
      "kerak. Bu majburiyat " +
      "alohida moddada " +
      "belgilangan.\n\n" +
      "Xabardor qilmaslik " +
      "keyinchalik talab qo'yish " +
      "imkoniyatini cheklashi " +
      "mumkin — shuning uchun " +
      "kechiktirmang.",
    example:
      "10 dona buyurtma qilindi, " +
      "8 dona keltirildi. Xaridor " +
      "yetishmagan 2 donani " +
      "topshirishni yoki tegishli " +
      "summani qaytarishni talab " +
      "qilishi mumkin — lekin " +
      "avval xabardor qilishi " +
      "kerak.",
    keyPoints: [
      "Miqdor va assortiment — alohida shartlar",
      "Har birining buzilishi alohida huquqlar beradi",
      "Sotuvchini xabardor qilish majburiy",
      "Kechikish talab qo'yish imkonini cheklashi mumkin",
    ],
    warning:
      "Tovarni qabul qilganda " +
      "darhol sanang va " +
      "tekshiring. Nomuvofiqlikni " +
      "o'sha zahoti yozma qayd " +
      "eting.",
    lawRefs: [
      { code: "FK2", article: "398" },
      { code: "FK2", article: "399" },
      { code: "FK2", article: "400" },
      { code: "FK2", article: "401" },
      { code: "FK2", article: "416" },
    ],
  },

  /* ── 17 ────────────────────────────────────────────────────── */
  {
    heading: "Butlik (komplektlik) va o'ram",
    text:
      "Ikki ko'pincha e'tibordan " +
      "chetda qoladigan, lekin " +
      "amalda muhim talab.\n\n" +
      "BUTLIK. Tovar shartnomada " +
      "belgilangan butlikda " +
      "topshirilishi kerak — ya'ni " +
      "barcha qismlari, " +
      "aksessuarlari va " +
      "hujjatlari bilan. But " +
      "bo'lmagan tovar " +
      "topshirilganda xaridor " +
      "butlashtirishni yoki " +
      "narxni kamaytirishni talab " +
      "qilishi mumkin.\n\n" +
      "Shuningdek sotuvchi tovarga " +
      "mansub ashyolarni va " +
      "HUJJATLARNI (texnik pasport, " +
      "qo'llanma, kafolat " +
      "talonchasi) topshirishi " +
      "shart. Bu majburiyat " +
      "bajarilmasa ham oqibatlari " +
      "bor.\n\n" +
      "IDISH VA O'RAM. Tovar " +
      "tegishli idishda va " +
      "o'ralgan holda " +
      "topshirilishi kerak — " +
      "agar tovar tabiatiga ko'ra " +
      "bu talab qilinsa. Buzilsa " +
      "xaridor tegishli idishga " +
      "joylashni yoki almashtirishni " +
      "talab qilishi mumkin.",
    example:
      "Maishiy texnika sotildi, " +
      "lekin qo'llanma va kafolat " +
      "talonchasi berilmadi. Bu " +
      "hujjatlarni topshirish " +
      "majburiyatining buzilishi " +
      "va talab qo'yish uchun " +
      "asos.",
    keyPoints: [
      "Tovar but holda topshirilishi kerak",
      "Hujjatlar ham tovarning ajralmas qismi",
      "But bo'lmasa butlashtirish yoki narxni kamaytirish talab qilinadi",
      "Idish va o'ram talablari ham majburiy",
    ],
    warning:
      "Kafolat talonchasini " +
      "olishni unutmang va unda " +
      "sana hamda muhr borligini " +
      "tekshiring — bo'sh talon " +
      "kafolat bermaydi.",
    lawRefs: [
      { code: "FK2", article: "411" },
      { code: "FK2", article: "413" },
      { code: "FK2", article: "397" },
      { code: "FK2", article: "415" },
    ],
  },

  /* ── 18 ────────────────────────────────────────────────────── */
  {
    heading: "Maqbul sifatli tovarni almashtirish",
    text:
      "Tovar mutlaqo soz, lekin " +
      "yaramadi — rangi, o'lchami " +
      "yoki fasoni mos kelmadi. " +
      "Bunday holatda ham " +
      "iste'molchining huquqi bor.\n\n" +
      "Qonun MAQBUL SIFATLI tovarni " +
      "almashtirib olish huquqini " +
      "beradi. Ya'ni tovarda hech " +
      "qanday nuqson bo'lmasa " +
      "ham.\n\n" +
      "⚠️ Bu huquq SHARTLAR bilan " +
      "beriladi. Odatiy shartlar: " +
      "belgilangan muddat ichida " +
      "murojaat qilish; tovar " +
      "ishlatilmagan bo'lishi; " +
      "tovar ko'rinishi, iste'mol " +
      "xususiyatlari, plombalari " +
      "va yorliqlari saqlangan " +
      "bo'lishi; xaridni " +
      "tasdiqlovchi hujjat " +
      "bo'lishi.\n\n" +
      "Almashtirish uchun mos " +
      "tovar bo'lmasa, iste'molchi " +
      "shartnomani bekor qilib " +
      "pulni qaytarib olishi " +
      "mumkin.\n\n" +
      "Muhim istisno: qonunchilikda " +
      "almashtirilmaydigan " +
      "tovarlar ro'yxati mavjud " +
      "(masalan ayrim gigiyena, " +
      "parfyumeriya va oziq-ovqat " +
      "mahsulotlari).",
    example:
      "Xaridor kiyim oldi, uyda " +
      "o'lchami mos kelmadi. " +
      "Yorliqlari joyida va chek " +
      "bor bo'lsa, belgilangan " +
      "muddat ichida almashtirish " +
      "yoki pulni qaytarish " +
      "talab qilinishi mumkin.",
    keyPoints: [
      "Nuqsonsiz tovarni ham almashtirish mumkin",
      "Tovar ishlatilmagan va yorliqlari saqlangan bo'lishi kerak",
      "Mos tovar bo'lmasa pul qaytariladi",
      "Almashtirilmaydigan tovarlar ro'yxati mavjud",
    ],
    warning:
      "Yorliq va plombalarni " +
      "yechmang, o'ramni " +
      "buzmang — aynan shular " +
      "almashtirish huquqining " +
      "sharti hisoblanadi.",
    lawRefs: [
      { code: "IHQ", article: "18" },
      { code: "FK2", article: "433" },
    ],
  },
];

module.exports = { SECTIONS };
