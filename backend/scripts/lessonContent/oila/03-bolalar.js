"use strict";
/**
 * OILA HUQUQI — 3-QISM: BOLALAR (21–30-mavzular)
 *
 * Ketma-ketlik: bola tug'ilishi → uning ismi → kelib chiqishi
 * (nasl-nasab, otalik) → huquqlari → ota-onaning majburiyatlari →
 * bu huquqlarning yo'qotilishi va tiklanishi.
 *
 * Bu qism AJRASHISHDAN OLDIN turadi — ataylab. Ajrashishda bola
 * bilan bog'liq masalalarni tushunish uchun avval bolaning
 * huquqlari va ota-onalik majburiyatlari bilinishi kerak.
 */

const SECTIONS = [
  /* ── 21 ────────────────────────────────────────────────────── */
  {
    heading: "Bola tug'ilganda: qayd etish va muddat",
    text:
      "Bola tug'ilishi FHDYo organida qayd " +
      "etiladi. Bu bolaning huquqiy mavjudligini " +
      "rasmiylashtiradigan birinchi hujjat.\n\n" +
      "Qayd etish uchun belgilangan muddat bor va " +
      "uni o'tkazib yubormaslik kerak. Kechikish " +
      "keyinchalik qo'shimcha tartib va hujjat " +
      "talab qiladi.\n\n" +
      "Arizani odatda ota-ona beradi. Ota-ona " +
      "buni qila olmaydigan holatlarda qonun " +
      "boshqa shaxslar va muassasalarga ham bu " +
      "imkoniyatni beradi — ya'ni bola hech " +
      "qanday vaziyatda qayd etilmay qolmasligi " +
      "kerak.\n\n" +
      "Tug'ilganlik haqidagi guvohnoma keyinchalik " +
      "hamma joyda kerak bo'ladi: bog'cha, " +
      "maktab, tibbiy yordam, ijtimoiy to'lovlar, " +
      "meros. Shuning uchun uni kechiktirmasdan " +
      "olish muhim.",
    example:
      "Ota-ona guvohnomani olishni bir necha " +
      "oyga kechiktirdi. Bolani poliklinikaga " +
      "biriktirishda va nafaqani rasmiylashtirishda " +
      "muammo chiqdi — chunki har ikkalasida ham " +
      "tug'ilganlik guvohnomasi talab qilinadi.",
    keyPoints: [
      "Tug'ilish FHDYo organida qayd etiladi",
      "Qayd etish uchun belgilangan muddat bor",
      "Ota-ona bo'lmasa boshqa shaxslar ariza berishi mumkin",
      "Guvohnoma bolaning barcha huquqlari uchun asos bo'ladi",
    ],
    warning:
      "Qayd etishni kechiktirish bolani nafaqa, " +
      "tibbiy xizmat va ta'lim masalalarida " +
      "vaqtincha huquqsiz qoldiradi.",
    lawRefs: [
      { code: "OK", article: "205" },
      { code: "OK", article: "206" },
    ],
  },

  /* ── 22 ────────────────────────────────────────────────────── */
  {
    heading: "Bolaning ismi, ota ismi va familiyasi",
    text:
      "Har bir bola ism, ota ismi va familiya " +
      "olish huquqiga ega. Bu shaxsiy nomulkiy " +
      "huquq va u tug'ilishdanoq paydo bo'ladi.\n\n" +
      "Ism ota-onaning kelishuvi bilan beriladi. " +
      "Familiya odatda ota-onaning familiyasi " +
      "bo'yicha aniqlanadi — ular bir xil " +
      "familiyada bo'lsa muammo yo'q, har xil " +
      "bo'lsa kelishuv asosida.\n\n" +
      "Ota-ona kelisha olmasa, nizo vasiylik va " +
      "homiylik organi tomonidan hal qilinadi. " +
      "Ya'ni bu masala ham \"kim kuchli bo'lsa " +
      "o'shanikiga\" tashlab qo'yilmaydi.\n\n" +
      "Keyinchalik bolaning ismi yoki familiyasini " +
      "o'zgartirish mumkin, lekin bu alohida " +
      "tartibda va muayyan shartlar bilan amalga " +
      "oshiriladi. Bola ma'lum yoshga yetgan " +
      "bo'lsa, uning ham roziligi hisobga olinadi.",
    example:
      "Ajrashgandan keyin ona bolaning " +
      "familiyasini o'z familiyasiga " +
      "o'zgartirmoqchi. Bu avtomatik emas: " +
      "belgilangan tartib bor va otaning " +
      "pozitsiyasi hamda bola manfaati " +
      "hisobga olinadi.",
    keyPoints: [
      "Bola ism, ota ismi va familiya olish huquqiga ega",
      "Ism ota-onaning kelishuvi bilan beriladi",
      "Kelishmovchilikni vasiylik va homiylik organi hal qiladi",
      "Ismni o'zgartirishda bolaning fikri ham hisobga olinadi",
    ],
    warning:
      "Familiyani ikkinchi ota-onaning " +
      "xabarisiz o'zgartirishga urinish sudda " +
      "rad etiladi.",
    lawRefs: [
      { code: "OK", article: "69" },
      { code: "OK", article: "70" },
    ],
  },

  /* ── 23 ────────────────────────────────────────────────────── */
  {
    heading: "Nasl-nasabni belgilash: ota-onaning arizasi",
    text:
      "Bolaning nasl-nasabi — ya'ni kim uning " +
      "otasi va onasi ekani — huquqiy jihatdan " +
      "belgilanishi kerak. Aynan shundan bolaning " +
      "barcha huquqlari kelib chiqadi: ta'minot, " +
      "meros, familiya, fuqarolik.\n\n" +
      "Onaning kim ekani tug'ruq muassasasining " +
      "hujjati asosida belgilanadi. Otalik esa " +
      "vaziyatga qarab turlicha aniqlanadi.\n\n" +
      "Agar ota-ona nikohda bo'lsa, erning ota " +
      "ekani nazarda tutiladi — alohida ariza " +
      "kerak emas. Nikohda bo'lmaganlar uchun " +
      "esa asosiy yo'l — ota va onaning " +
      "BIRGALIKDAGI arizasi.\n\n" +
      "Bu arizani tug'ilishni qayd etish bilan " +
      "bir vaqtda ham, keyinroq ham berish " +
      "mumkin. Ikkinchi holatda tug'ilish " +
      "yozuviga tegishli o'zgartirish kiritiladi.",
    example:
      "Juftlik nikohda emas, bola tug'ildi. " +
      "Ota o'z ixtiyori bilan ona bilan " +
      "birgalikda ariza berdi — otalik " +
      "belgilandi va bola to'liq huquqqa ega " +
      "bo'ldi. Bu eng oddiy va tez yo'l.",
    keyPoints: [
      "Nasl-nasabdan bolaning barcha huquqlari kelib chiqadi",
      "Nikohdagi er ota deb nazarda tutiladi",
      "Nikohsiz holatda birgalikdagi ariza asosiy yo'l",
      "Ariza keyinroq ham berilishi mumkin",
    ],
    warning:
      "Otalik belgilanmasa bola ta'minot va " +
      "meros huquqidan mahrum qoladi — bu " +
      "faqat qog'ozdagi emas, real yo'qotish.",
    lawRefs: [
      { code: "OK", article: "60" },
      { code: "OK", article: "61" },
      { code: "OK", article: "208" },
    ],
  },

  /* ── 24 ────────────────────────────────────────────────────── */
  {
    heading: "Otalikni sud orqali belgilash",
    text:
      "Ota o'z ixtiyori bilan ariza bermasa " +
      "nima bo'ladi? Bunday holatda otalik SUD " +
      "tartibida belgilanadi.\n\n" +
      "Da'vo qo'yish huquqiga ega bo'lganlar " +
      "doirasi keng: ota-onadan biri, bolaning " +
      "vasiysi (homiysi), bola qaramog'ida " +
      "bo'lgan shaxs va bolaning o'zi (voyaga " +
      "yetgach).\n\n" +
      "Sud har qanday ishonchli dalilni ko'rib " +
      "chiqadi: birgalikda yashaganlik, umumiy " +
      "xo'jalik yuritganlik, otalikni tan " +
      "olganini ko'rsatuvchi holatlar, guvohlik " +
      "ko'rsatmalari va tibbiy ekspertiza " +
      "xulosalari.\n\n" +
      "Muhim: da'vo muddati bu turdagi ishlarda " +
      "odatda cheklanmaydi — otalikni bola " +
      "voyaga yetgandan keyin ham belgilash " +
      "mumkin.",
    example:
      "Ota bolani tan olmadi va ariza bermadi. " +
      "Ona sudga da'vo qo'ydi, ekspertiza " +
      "o'tkazildi va otalik belgilandi. Shundan " +
      "keyin aliment undirish uchun ham asos " +
      "paydo bo'ladi.",
    keyPoints: [
      "Ixtiyoriy ariza bo'lmasa otalik sud orqali belgilanadi",
      "Da'voni ona, vasiy yoki bolaning o'zi qo'yishi mumkin",
      "Sud har qanday ishonchli dalilni qabul qiladi",
      "Otalik belgilangach aliment undirish mumkin bo'ladi",
    ],
    warning:
      "Aliment otalik BELGILANGANIDAN keyin " +
      "undiriladi. Shuning uchun bu masalani " +
      "kechiktirish bevosita moddiy yo'qotish " +
      "demakdir.",
    lawRefs: [
      { code: "OK", article: "62" },
      { code: "OK", article: "64" },
    ],
  },

  /* ── 25 ────────────────────────────────────────────────────── */
  {
    heading: "Otalik to'g'risida e'tiroz bildirish",
    text:
      "Teskari holat ham bo'ladi: yozuvda ota " +
      "sifatida ko'rsatilgan shaxs bunga e'tiroz " +
      "bildirmoqchi. Qonun bunday imkoniyatni " +
      "ham beradi.\n\n" +
      "E'tiroz SUD tartibida ko'riladi. Da'vo " +
      "qo'yish huquqi yozuvda ota yoki ona " +
      "sifatida ko'rsatilgan shaxslarga, " +
      "bolaning haqiqiy ota-onasiga va ba'zi " +
      "boshqa shaxslarga tegishli.\n\n" +
      "Muhim cheklov mavjud: agar shaxs yozuv " +
      "kiritilayotgan paytda o'zining haqiqiy " +
      "ota emasligini BILGAN bo'lsa, uning " +
      "e'tirozi qanoatlantirilmaydi. Ya'ni " +
      "ongli ravishda otalikni tan olib, " +
      "keyinchalik undan voz kechib bo'lmaydi.\n\n" +
      "Bu qoida bolani himoya qiladi: u kattalar " +
      "o'rtasidagi munosabatlar o'zgargani " +
      "sababli otasidan ayrilib qolmasligi " +
      "kerak.",
    example:
      "Erkak bolaning o'ziniki emasligini " +
      "bilgan holda otalikni tan oldi. Yillar " +
      "o'tib ajralishayotganda e'tiroz " +
      "bildirmoqchi bo'ldi — sud rad etadi, " +
      "chunki u haqiqatni boshidanoq bilgan.",
    keyPoints: [
      "Otalikka e'tiroz faqat sud tartibida ko'riladi",
      "Da'vo huquqi cheklangan doiradagi shaxslarga tegishli",
      "Haqiqatni bilib turib tan olgan shaxsning e'tirozi qabul qilinmaydi",
      "Qoidaning maqsadi — bolani himoya qilish",
    ],
    warning:
      "Otalikni \"vaqtincha\" tan olib qo'yish " +
      "degan narsa yo'q — bu qaytarib bo'lmaydigan " +
      "huquqiy oqibatlarga olib keladi.",
    lawRefs: [
      { code: "OK", article: "63" },
      { code: "OK", article: "60" },
    ],
  },

  /* ── 26 ────────────────────────────────────────────────────── */
  {
    heading: "Nikohsiz tug'ilgan bolaning huquqlari",
    text:
      "Bu — juda muhim va ko'pincha noto'g'ri " +
      "tushuniladigan mavzu. O'zaro nikohda " +
      "bo'lmagan shaxslardan tug'ilgan bolalar " +
      "nikohda tug'ilgan bolalar bilan BIR XIL " +
      "huquq va majburiyatlarga ega.\n\n" +
      "Sharti bitta: nasl-nasab belgilangan " +
      "bo'lishi kerak. Ya'ni otalik yo " +
      "birgalikdagi ariza bilan, yo sud " +
      "tartibida aniqlangan bo'lsin.\n\n" +
      "Nasl-nasab belgilangach farq umuman " +
      "qolmaydi: bola ta'minot olish, meros " +
      "olish, familiya va ota ismini olish, " +
      "ota-onaning e'tiboridan bahramand " +
      "bo'lish huquqlariga ega.\n\n" +
      "Ijtimoiy jihatdan bunday bolalarga " +
      "nisbatan kamsitish uchraydi, lekin " +
      "huquqiy jihatdan bunga hech qanday " +
      "asos yo'q.",
    example:
      "Ota va ona nikohda emas edi, lekin " +
      "otalik ariza bilan belgilangan. Ota " +
      "vafot etganda bola meros olishda " +
      "boshqa farzandlar bilan teng huquqli " +
      "bo'ladi.",
    keyPoints: [
      "Nikohsiz tug'ilgan bola teng huquqqa ega",
      "Yagona shart — nasl-nasabning belgilanishi",
      "Ta'minot va meros huquqi to'liq saqlanadi",
      "Huquqiy jihatdan hech qanday kamsitish asosi yo'q",
    ],
    warning:
      "Tenglik AVTOMATIK emas — u nasl-nasab " +
      "rasmiy belgilangandan keyin ishlaydi. " +
      "Bu qadamni tashlab qo'ymang.",
    lawRefs: [
      { code: "OK", article: "64" },
      { code: "OK", article: "60" },
    ],
  },

  /* ── 27 ────────────────────────────────────────────────────── */
  {
    heading: "Bolaning asosiy huquqlari",
    text:
      "Bola — huquq obyekti emas, SUBYEKTI. " +
      "Ya'ni u ota-onaning \"mulki\" emas, o'z " +
      "huquqlariga ega shaxs.\n\n" +
      "Asosiy huquqlar: oilada yashash va " +
      "tarbiyalanish; ota-onasini bilish va " +
      "ular tomonidan g'amxo'rlik ko'rish; " +
      "ota-onasi va boshqa qarindoshlari bilan " +
      "ko'rishish; himoyaga bo'lgan huquq; o'z " +
      "fikrini ifoda etish.\n\n" +
      "Alohida to'xtalish kerak bo'lgan ikkita " +
      "huquq bor. Birinchisi — QARINDOSHLAR " +
      "BILAN KO'RISHISH. Bu huquq ota-ona " +
      "ajrashgan, alohida yashaydigan yoki " +
      "hatto turli davlatlarda bo'lgan holatda " +
      "ham saqlanadi.\n\n" +
      "Ikkinchisi — O'Z FIKRINI IFODA ETISH. " +
      "Bolaning fikri uning manfaatiga taalluqli " +
      "har qanday masalada hisobga olinadi, " +
      "ma'lum yoshdan keyin esa ba'zi masalalar " +
      "uning roziligisiz umuman hal qilinmaydi.",
    example:
      "Ajrashgandan keyin ona bolani otasi " +
      "bilan ko'rishtirmayapti. Bu ONANING " +
      "emas, BOLANING huquqini buzish — " +
      "shuning uchun sud bunday holatga " +
      "aralashadi va ko'rishish tartibini " +
      "belgilaydi.",
    keyPoints: [
      "Bola o'z huquqlariga ega mustaqil subyekt",
      "Ota-ona va qarindoshlar bilan ko'rishish — bolaning huquqi",
      "Bu huquq ajrashgandan keyin ham saqlanadi",
      "Bolaning fikri uning manfaatiga oid masalalarda hisobga olinadi",
    ],
    warning:
      "Bolani ikkinchi ota-onadan uzoqlashtirish " +
      "\"tarbiya\" emas, huquqbuzarlik — va u " +
      "sudda albatta hisobga olinadi.",
    lawRefs: [
      { code: "OK", article: "65" },
      { code: "OK", article: "66" },
      { code: "OK", article: "67" },
      { code: "OK", article: "68" },
    ],
  },

  /* ── 28 ────────────────────────────────────────────────────── */
  {
    heading: "Ota-onaning huquq va majburiyatlari",
    text:
      "Ota va onaning bolalarga nisbatan huquq " +
      "va majburiyatlari TENG. Ular ajrashgan " +
      "yoki alohida yashayotgan bo'lsa ham bu " +
      "tenglik saqlanadi.\n\n" +
      "Asosiy majburiyatlar: bolani tarbiyalash, " +
      "uning sog'lig'i, jismoniy, ruhiy va " +
      "axloqiy rivojlanishi haqida g'amxo'rlik " +
      "qilish, ta'lim olishini ta'minlash.\n\n" +
      "Ota-ona shuningdek bolaning huquq va " +
      "manfaatlarini himoya qiluvchi qonuniy " +
      "vakili hisoblanadi — maxsus vakolatnomasiz " +
      "sudda va boshqa organlarda uning nomidan " +
      "ish ko'radi.\n\n" +
      "Lekin bu huquqlar CHEKSIZ emas. Ota-onalik " +
      "huquqi bolaning manfaatlariga zid ravishda " +
      "amalga oshirilishi mumkin emas. Tarbiya " +
      "usullari bolaning sog'lig'iga va qadr-" +
      "qimmatiga zarar yetkazmasligi kerak.",
    example:
      "Ota bolani maktabga qo'ymayapti va " +
      "ishlashga majbur qilyapti. Bu ota-onalik " +
      "huquqini amalga oshirish emas, uni " +
      "SUISTE'MOL qilish — vasiylik organi " +
      "aralashish uchun asos bo'ladi.",
    keyPoints: [
      "Ota va onaning huquqlari teng va ajralishdan keyin ham saqlanadi",
      "Asosiy majburiyat — tarbiya, sog'liq va ta'lim",
      "Ota-ona bolaning qonuniy vakili hisoblanadi",
      "Huquqni bola manfaatiga zid amalga oshirish taqiqlanadi",
    ],
    warning:
      "Jismoniy jazo va qadr-qimmatni " +
      "kamsitadigan tarbiya usullari qonunga " +
      "zid va ota-onalik huquqini cheklash " +
      "uchun asos bo'ladi.",
    lawRefs: [
      { code: "OK", article: "71" },
      { code: "OK", article: "73" },
      { code: "OK", article: "74" },
      { code: "OK", article: "75" },
    ],
  },

  /* ── 29 ────────────────────────────────────────────────────── */
  {
    heading: "Ota-onalik huquqidan mahrum qilish",
    text:
      "Bu — eng og'ir chora va u faqat SUD " +
      "tomonidan qo'llaniladi. Vasiylik organi " +
      "yoki boshqa organ o'zi mahrum qila " +
      "olmaydi.\n\n" +
      "Asoslar qat'iy belgilangan va ular " +
      "og'ir hollarni qamrab oladi: ota-onalik " +
      "majburiyatlarini bajarishdan qochish " +
      "(shu jumladan alimentdan zimdan bosh " +
      "tortish), bolani suiiste'mol qilish, " +
      "bolaga nisbatan shafqatsizlik, surunkali " +
      "alkogolizm yoki giyohvandlik.\n\n" +
      "Oqibatlari juda jiddiy: mahrum qilingan " +
      "shaxs bola bilan bog'liq BARCHA " +
      "huquqlarni yo'qotadi — tarbiya, vakillik, " +
      "kelajakda o'sha boladan ta'minot olish " +
      "huquqi ham.\n\n" +
      "⚠️ Lekin MAJBURIYATLAR yo'qolmaydi. " +
      "Bolani ta'minlash majburiyati saqlanib " +
      "qoladi. Ya'ni mahrum qilish alimentdan " +
      "qutulish yo'li EMAS.",
    example:
      "Ota yillar davomida aliment to'lamadi va " +
      "bola hayotida umuman qatnashmadi. Sud " +
      "uni ota-onalik huquqidan mahrum qildi. " +
      "Shunga qaramay aliment to'lash " +
      "majburiyati bekor bo'lmaydi.",
    keyPoints: [
      "Mahrum qilish faqat sud tomonidan amalga oshiriladi",
      "Asoslar qonunda qat'iy belgilangan",
      "Barcha huquqlar yo'qoladi, jumladan kelajakdagi ta'minot huquqi",
      "Bolani ta'minlash majburiyati esa saqlanib qoladi",
    ],
    warning:
      "Ota-onalik huquqidan mahrum qilish " +
      "alimentni bekor qilmaydi — bu eng ko'p " +
      "uchraydigan noto'g'ri tushuncha.",
    lawRefs: [
      { code: "OK", article: "79" },
      { code: "OK", article: "80" },
      { code: "OK", article: "81" },
    ],
  },

  /* ── 30 ────────────────────────────────────────────────────── */
  {
    heading: "Ota-onalik huquqini cheklash va tiklash",
    text:
      "Mahrum qilish va cheklash — bu ikki " +
      "boshqa chora. CHEKLASH yumshoqroq va u " +
      "ko'pincha ota-onaning aybi bo'lmagan " +
      "holatlarda qo'llaniladi.\n\n" +
      "Masalan: ota-onaning og'ir kasalligi, " +
      "ruhiy holati yoki boshqa vaziyat tufayli " +
      "bolani u bilan qoldirish xavfli bo'lsa. " +
      "Bunda bola olinadi, lekin huquqlar " +
      "butunlay yo'qotilmaydi.\n\n" +
      "Cheklangan ota-ona bola bilan ko'rishishi " +
      "mumkin — agar bu bolaga salbiy ta'sir " +
      "qilmasa va vasiylik organi ruxsat bersa.\n\n" +
      "Eng muhimi — ikkala chora ham QAYTARIB " +
      "OLINISHI mumkin. Agar ota-ona xatti-" +
      "harakatini, turmush tarzini yoki bolaga " +
      "munosabatini o'zgartirgan bo'lsa, sud " +
      "huquqlarni tiklashi mumkin. Bunda ham " +
      "bolaning fikri va manfaati hisobga " +
      "olinadi.",
    example:
      "Ona og'ir kasal bo'lgani sababli " +
      "huquqlari cheklandi va bola vaqtincha " +
      "qarindoshga berildi. Sog'aygach ona " +
      "sudga murojaat qilib cheklovni bekor " +
      "qildirdi va bola qaytarildi.",
    keyPoints: [
      "Cheklash — mahrum qilishdan yengilroq chora",
      "U ota-onaning aybi bo'lmagan holatlarda ham qo'llaniladi",
      "Cheklangan ota-ona ruxsat bilan bola bilan ko'rishishi mumkin",
      "Ikkala chora ham sud orqali bekor qilinishi mumkin",
    ],
    warning:
      "Huquqni tiklash avtomatik emas: sudga " +
      "murojaat qilish va o'zgarishni dalil " +
      "bilan ko'rsatish kerak.",
    lawRefs: [
      { code: "OK", article: "82" },
      { code: "OK", article: "83" },
      { code: "OK", article: "84" },
      { code: "OK", article: "86" },
    ],
  },
];

module.exports = { SECTIONS };
