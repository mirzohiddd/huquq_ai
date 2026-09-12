"use strict";
/**
 * ISTE'MOLCHI HUQUQLARI — 4-QISM: ISH VA XIZMATLAR (29–38-mavzular)
 *
 * Tovardan keyin XIZMATLAR: ular alohida tartibga solingan va
 * amalda tovarga qaraganda ko'proq nizo keltirib chiqaradi
 * (natijani o'lchash qiyinroq).
 */

const SECTIONS = [
  /* ── 29 ────────────────────────────────────────────────────── */
  {
    heading: "Ish bajarish va xizmat ko'rsatish shartnomasi",
    text:
      "Iste'molchi faqat tovar " +
      "sotib olmaydi — u ish " +
      "buyurtma qiladi va xizmat " +
      "oladi. Bular alohida " +
      "shartnoma turlari.\n\n" +
      "PUDRAT shartnomasi bo'yicha " +
      "pudratchi buyurtmachining " +
      "topshirig'iga muvofiq " +
      "muayyan ishni bajaradi va " +
      "NATIJASINI topshiradi " +
      "(masalan ta'mir, mebel " +
      "yasash, tikuvchilik).\n\n" +
      "HAQ EVAZIGA XIZMAT " +
      "KO'RSATISH shartnomasida " +
      "esa ijrochi muayyan " +
      "harakatlarni bajaradi " +
      "(masalan ta'lim, tibbiy, " +
      "maslahat, aloqa " +
      "xizmatlari).\n\n" +
      "⚠️ Farq amalda muhim: " +
      "pudratda NATIJA " +
      "topshiriladi va u " +
      "o'lchanadi; xizmatda esa " +
      "asosan JARAYON " +
      "baholanadi.\n\n" +
      "Iste'molchi bilan " +
      "tuzilgan pudrat " +
      "shartnomasi MAISHIY " +
      "pudrat deb ataladi va " +
      "unga qo'shimcha himoya " +
      "qoidalari qo'llaniladi.",
    example:
      "Uy ta'miri buyurtma " +
      "qilindi — bu maishiy " +
      "pudrat. Repetitor bilan " +
      "kelishuv esa haq evaziga " +
      "xizmat ko'rsatish " +
      "shartnomasi. Ularga " +
      "turli qoidalar " +
      "qo'llaniladi.",
    keyPoints: [
      "Pudratda natija, xizmatda jarayon asosiy",
      "Iste'molchi bilan pudrat — maishiy pudrat deb ataladi",
      "Maishiy pudratga qo'shimcha himoya qoidalari amal qiladi",
      "Har ikkalasida ham iste'molchi huquqlari saqlanadi",
    ],
    warning:
      "Shartnoma tuzayotganda " +
      "NATIJA aniq " +
      "belgilanganiga ishonch " +
      "hosil qiling — " +
      "\"ta'mir qilish\" " +
      "juda umumiy ifoda.",
    lawRefs: [
      { code: "FK2", article: "631" },
      { code: "FK2", article: "656" },
      { code: "FK2", article: "703" },
    ],
  },

  /* ── 30 ────────────────────────────────────────────────────── */
  {
    heading: "Ijrochi ogohlantirishi shart bo'lgan holatlar",
    text:
      "Pudratchining (ijrochining) " +
      "eng muhim majburiyatlaridan " +
      "biri — buyurtmachini " +
      "OGOHLANTIRISH.\n\n" +
      "Qonun ogohlantirish shart " +
      "bo'lgan holatlarni " +
      "belgilaydi. Odatda bunga " +
      "kiradi: buyurtmachi " +
      "bergan materialning " +
      "yaroqsizligi; " +
      "buyurtmachining " +
      "ko'rsatmalariga rioya " +
      "qilish ishning " +
      "yaroqliligiga salbiy " +
      "ta'sir qilishi; ishni " +
      "bajarishga to'sqinlik " +
      "qiladigan boshqa " +
      "holatlar.\n\n" +
      "⚠️ Ogohlantirmagan " +
      "pudratchi keyinchalik bu " +
      "holatlarga tayanib " +
      "javobgarlikdan qutula " +
      "OLMAYDI.\n\n" +
      "Bu qoida iste'molchi " +
      "uchun juda foydali: " +
      "mutaxassis siz emas, " +
      "shuning uchun xavfni " +
      "oldindan aytish uning " +
      "vazifasi.\n\n" +
      "Shuningdek pudratchi " +
      "buyurtmachiga zarur " +
      "AXBOROT berish " +
      "majburiyatiga ega — " +
      "ishning xususiyatlari va " +
      "foydalanish shartlari " +
      "haqida.",
    example:
      "Usta buyurtmachi olib " +
      "kelgan sifatsiz " +
      "material bilan ishladi " +
      "va natija yomon chiqdi. " +
      "U materialning " +
      "yaroqsizligi haqida " +
      "ogohlantirmagan " +
      "bo'lsa, javobgarlikdan " +
      "qutula olmaydi.",
    keyPoints: [
      "Ijrochi xavf va to'siqlar haqida ogohlantirishi shart",
      "Ogohlantirmagan ijrochi javobgarlikdan qutulmaydi",
      "Material va ko'rsatmalarning yaroqsizligi ham ogohlantiriladi",
      "Ijrochi zarur axborot berish majburiyatiga ega",
    ],
    warning:
      "Ogohlantirish og'zaki " +
      "bo'lsa uni yozib " +
      "qo'ying yoki " +
      "yozishmada " +
      "tasdiqlang — nizoda " +
      "bu hal qiluvchi " +
      "bo'ladi.",
    lawRefs: [
      { code: "FK2", article: "643" },
      { code: "FK2", article: "653" },
      { code: "FK2", article: "660" },
    ],
  },

  /* ── 31 ────────────────────────────────────────────────────── */
  {
    heading: "Ish sifatsiz bajarilsa",
    text:
      "Ish bajarildi, lekin " +
      "sifati past. Iste'molchining " +
      "huquqlari bu yerda ham " +
      "keng.\n\n" +
      "Ishni bajarish yoki xizmat " +
      "ko'rsatish to'g'risidagi " +
      "shartnoma shartlari " +
      "buzilganda odatiy " +
      "talablar to'plami:\n\n" +
      "(1) kamchiliklarni BEPUL " +
      "bartaraf etish;\n\n" +
      "(2) ishni qayta " +
      "bajarish;\n\n" +
      "(3) narxni MUTANOSIB " +
      "kamaytirish;\n\n" +
      "(4) kamchiliklarni " +
      "o'zi yoki uchinchi " +
      "shaxs orqali bartaraf " +
      "etib, XARAJATLARNI " +
      "qoplashni talab " +
      "qilish;\n\n" +
      "(5) shartnomani bekor " +
      "qilib, to'langan " +
      "summani qaytarib " +
      "olish.\n\n" +
      "⚠️ To'rtinchi variant " +
      "amalda juda qulay: " +
      "ijrochi bilan " +
      "cho'zilgan tortishuvni " +
      "kutmasdan boshqa " +
      "ustani chaqirasiz va " +
      "keyin xarajatni talab " +
      "qilasiz. Lekin bunda " +
      "xarajatni " +
      "hujjatlashtirish " +
      "shart.\n\n" +
      "Zararni qoplash talabi " +
      "ham saqlanadi.",
    example:
      "Ta'mirchi devorni " +
      "sifatsiz bo'yadi va " +
      "tuzatishdan bosh " +
      "tortdi. Buyurtmachi " +
      "boshqa ustani " +
      "chaqirib, xarajatni " +
      "birinchisidan talab " +
      "qilishi mumkin.",
    keyPoints: [
      "Sifatsiz ishda beshta talabdan biri tanlanadi",
      "Bepul tuzatish, qayta bajarish yoki narxni kamaytirish",
      "Xarajatni o'zi qoplab, keyin talab qilish ham mumkin",
      "Shartnomani bekor qilib pulni qaytarish huquqi bor",
    ],
    warning:
      "Boshqa ustani " +
      "chaqirishdan oldin " +
      "kamchilikni suratga " +
      "oling va yozma qayd " +
      "eting — aks holda " +
      "\"ish yaxshi edi\" " +
      "degan e'tirozga " +
      "javob bo'lmaydi.",
    lawRefs: [
      { code: "IHQ", article: "19" },
      { code: "FK2", article: "665" },
      { code: "FK2", article: "650" },
      { code: "FK2", article: "706" },
    ],
  },

  /* ── 32 ────────────────────────────────────────────────────── */
  {
    heading: "Ish jarayonini nazorat qilish huquqi",
    text:
      "Buyurtmachi ish tugashini " +
      "kutib o'tirishi shart " +
      "emas — u JARAYONNI " +
      "nazorat qilish huquqiga " +
      "ega.\n\n" +
      "Pudratchi ishni " +
      "bajarayotgan vaqtda " +
      "buyurtmachi ishning " +
      "borishini va sifatini " +
      "tekshirishi mumkin — " +
      "pudratchining " +
      "faoliyatiga aralashmagan " +
      "holda.\n\n" +
      "Agar pudratchi ishni " +
      "shartnomaga muvofiq " +
      "bajarmayotgani yoki " +
      "natija yaroqsiz " +
      "bo'lishi aniq " +
      "bo'lsa, buyurtmachi " +
      "kamchiliklarni " +
      "bartaraf etish uchun " +
      "oqilona muddat " +
      "belgilashi mumkin. " +
      "Muddat bajarilmasa — " +
      "shartnomani bekor " +
      "qilish yoki ishni " +
      "boshqaga topshirish " +
      "huquqi yuzaga " +
      "keladi.\n\n" +
      "⚠️ Bu huquqdan " +
      "FOYDALANING. Ta'mir " +
      "yoki qurilishda " +
      "muammoni oxirida " +
      "emas, jarayonda " +
      "topish ancha arzon " +
      "va oson.\n\n" +
      "Qurilish pudratida " +
      "nazorat qilish " +
      "huquqi alohida " +
      "moddada " +
      "mustahkamlangan.",
    example:
      "Buyurtmachi ta'mir " +
      "o'rtasida ish " +
      "sifatini tekshirdi va " +
      "xato aniqlandi. " +
      "Oqilona muddat " +
      "berib tuzattirish " +
      "— ta'mir tugagach " +
      "hammasini buzishdan " +
      "ko'ra ancha " +
      "samarali.",
    keyPoints: [
      "Buyurtmachi ish jarayonini tekshirish huquqiga ega",
      "Kamchilik aniqlansa oqilona muddat belgilash mumkin",
      "Muddat bajarilmasa shartnoma bekor qilinadi",
      "Ishni boshqa shaxsga topshirish ham mumkin",
    ],
    warning:
      "Nazorat qilish " +
      "huquqini shartnomada " +
      "cheklashga urinishlar " +
      "bo'lishi mumkin — " +
      "bunday bandlarga " +
      "e'tibor bering.",
    lawRefs: [
      { code: "FK2", article: "642" },
      { code: "FK2", article: "676" },
    ],
  },

  /* ── 33 ────────────────────────────────────────────────────── */
  {
    heading: "Shartnomani bekor qilish va materiallar",
    text:
      "Buyurtmachi ish tugagunga " +
      "qadar shartnomadan voz " +
      "kechishi mumkinmi? " +
      "Qonun bunday imkoniyatni " +
      "nazarda tutadi — lekin " +
      "shartlar bilan.\n\n" +
      "Odatda buyurtmachi " +
      "pudratchiga bajarilgan " +
      "ish qismi uchun haq " +
      "to'lashi va " +
      "shartnomani bekor " +
      "qilish natijasida " +
      "yetkazilgan zararni " +
      "qoplashi kerak " +
      "bo'ladi.\n\n" +
      "Haq evaziga xizmat " +
      "ko'rsatish " +
      "shartnomasini bekor " +
      "qilish uchun ham " +
      "alohida modda " +
      "mavjud.\n\n" +
      "⚠️ MATERIALLAR " +
      "masalasi alohida " +
      "e'tibor talab qiladi. " +
      "Buyurtmachi bergan " +
      "material va mol-mulk " +
      "saqlanmaganligi " +
      "uchun pudratchi " +
      "javobgar bo'ladi.\n\n" +
      "Shuningdek pudratchi " +
      "ba'zi hollarda " +
      "natijani USHLAB " +
      "QOLISH huquqiga ega " +
      "— masalan buyurtmachi " +
      "haq to'lamasa. Bu " +
      "haqda oldindan " +
      "bilish kerak.",
    example:
      "Buyurtmachi mebel " +
      "yasash uchun o'z " +
      "materialini berdi, " +
      "usta uni buzib " +
      "qo'ydi. Material " +
      "saqlanmagani uchun " +
      "javobgarlik ustada.",
    keyPoints: [
      "Shartnomadan voz kechish mumkin, lekin shartlari bor",
      "Bajarilgan ish uchun haq to'lanadi",
      "Berilgan material uchun ijrochi javobgar",
      "Ijrochi ba'zi hollarda natijani ushlab qolishi mumkin",
    ],
    warning:
      "Qimmat material " +
      "berayotganda uni " +
      "hujjat bilan " +
      "topshiring — " +
      "miqdori, holati va " +
      "sanasi ko'rsatilgan " +
      "dalolatnoma " +
      "tuzing.",
    lawRefs: [
      { code: "FK2", article: "641" },
      { code: "FK2", article: "639" },
      { code: "FK2", article: "707" },
    ],
  },

  /* ── 34 ────────────────────────────────────────────────────── */
  {
    heading: "Moliyaviy xizmatlar",
    text:
      "Kredit, mikroqarz, " +
      "sug'urta, bank " +
      "xizmatlari — bular ham " +
      "iste'molchi huquqlari " +
      "himoyasiga kiradi va " +
      "qonunda ALOHIDA modda " +
      "bor.\n\n" +
      "Moliyaviy xizmatlar " +
      "sohasida asosiy talab " +
      "— TO'LIQ VA ANIQ " +
      "MA'LUMOT. Iste'molchi " +
      "shartnoma tuzishdan " +
      "oldin quyidagilarni " +
      "bilishi kerak: umumiy " +
      "to'lov summasi; " +
      "foizlar; qo'shimcha " +
      "komissiyalar; " +
      "kechikish uchun " +
      "jarimalar; muddatidan " +
      "oldin to'lash " +
      "shartlari.\n\n" +
      "⚠️ ENG KO'P UCHRAYDIGAN " +
      "MUAMMO: e'lon " +
      "qilingan foiz va " +
      "haqiqiy umumiy to'lov " +
      "sezilarli farq " +
      "qiladi. Sabab — " +
      "komissiyalar, " +
      "sug'urta va boshqa " +
      "qo'shimcha " +
      "to'lovlar.\n\n" +
      "Shuning uchun " +
      "\"oyiga qancha\" " +
      "emas, \"JAMI " +
      "qancha\" degan " +
      "savolni bering va " +
      "javobni HUJJATDA " +
      "ko'ring.\n\n" +
      "Iste'molchi " +
      "huquqlarini " +
      "cheklaydigan shartlar " +
      "bu yerda ham haqiqiy " +
      "emas.",
    example:
      "Kredit \"yiliga 20 " +
      "foiz\" deb taklif " +
      "qilindi, lekin " +
      "komissiya va majburiy " +
      "sug'urta bilan " +
      "haqiqiy to'lov ancha " +
      "yuqori chiqdi. " +
      "Bularning hammasi " +
      "oldindan " +
      "aytilishi kerak edi.",
    keyPoints: [
      "Moliyaviy xizmatlar uchun alohida modda mavjud",
      "To'liq va aniq ma'lumot berish majburiy",
      "Komissiya va sug'urta umumiy to'lovni sezilarli oshiradi",
      "\"Jami qancha\" degan savolni hujjatda tekshiring",
    ],
    warning:
      "Shartnomani " +
      "uyda o'qib chiqish " +
      "uchun nusxasini " +
      "so'rang. " +
      "\"Hoziroq imzolang\" " +
      "degan bosim — " +
      "xavfli belgi.",
    lawRefs: [
      { code: "IHQ", article: "28" },
      { code: "IHQ", article: "6" },
      { code: "IHQ", article: "21" },
    ],
  },

  /* ── 35 ────────────────────────────────────────────────────── */
  {
    heading: "Iste'molchi huquqlarini cheklaydigan shartlar",
    text:
      "Bu — butun darslikdagi " +
      "eng kuchli himoya " +
      "normalaridan biri va " +
      "uni har bir iste'molchi " +
      "bilishi kerak.\n\n" +
      "Shartnomaning " +
      "iste'molchi " +
      "huquqlarini " +
      "CHEKLAB QO'YADIGAN " +
      "shartlari HAQIQIY " +
      "EMAS.\n\n" +
      "Ya'ni siz imzolagan " +
      "bo'lsangiz ham, " +
      "bunday shart " +
      "ishlamaydi. Sizga " +
      "qonun bergan huquq " +
      "saqlanadi.\n\n" +
      "Amalda uchraydigan " +
      "bunday shartlar: " +
      "\"tovar qaytarilmaydi " +
      "va almashtirilmaydi\"; " +
      "\"da'volar qabul " +
      "qilinmaydi\"; " +
      "\"kompaniya hech " +
      "qanday zarar uchun " +
      "javob bermaydi\"; " +
      "\"nizolar faqat " +
      "muzokara yo'li bilan " +
      "hal qilinadi\".\n\n" +
      "⚠️ Bunday shart " +
      "tufayli iste'molchiga " +
      "zarar yetkazilgan " +
      "bo'lsa, u to'liq " +
      "qoplanishi kerak.\n\n" +
      "Shuning uchun " +
      "\"shartnomada shunday " +
      "yozilgan\" degan " +
      "javobni yakuniy deb " +
      "qabul qilmang.",
    example:
      "Shartnomada " +
      "\"buyurtma bekor " +
      "qilinmaydi va oldindan " +
      "to'lov " +
      "qaytarilmaydi\" deb " +
      "yozilgan. Bu shart " +
      "iste'molchi huquqini " +
      "cheklaydi va shu " +
      "sababli haqiqiy " +
      "emas.",
    keyPoints: [
      "Huquqni cheklovchi shartnoma shartlari haqiqiy emas",
      "Imzolangan bo'lsa ham ular ishlamaydi",
      "Do'kondagi e'lonlar ham shunday",
      "Bunday shart tufayli zarar yetsa u qoplanadi",
    ],
    warning:
      "\"O'zingiz " +
      "imzolagansiz\" degan " +
      "dalilga berilmang — " +
      "qonun aynan shunday " +
      "holatlar uchun " +
      "yozilgan.",
    lawRefs: [
      { code: "IHQ", article: "21" },
      { code: "IHQ", article: "4" },
    ],
  },

  /* ── 36 ────────────────────────────────────────────────────── */
  {
    heading: "Ma'naviy zararni qoplash",
    text:
      "Moddiy zarardan tashqari " +
      "MA'NAVIY zarar ham " +
      "qoplanishi mumkin — " +
      "bu ko'pincha " +
      "e'tibordan chetda " +
      "qoladigan huquq.\n\n" +
      "Iste'molchi huquqlari " +
      "buzilishi natijasida " +
      "yetkazilgan ma'naviy " +
      "zarar uchun haq " +
      "to'lash alohida " +
      "moddada nazarda " +
      "tutilgan.\n\n" +
      "Ma'naviy zarar — " +
      "jismoniy yoki ruhiy " +
      "iztirob. Masalan: " +
      "sog'liqqa zarar " +
      "yetganda; uzoq " +
      "muddat davomida " +
      "haqli talab rad " +
      "etilganda; " +
      "iste'molchi " +
      "kamsitilganda.\n\n" +
      "⚠️ Muhim jihatlar: " +
      "ma'naviy zarar " +
      "moddiy zarardan " +
      "MUSTAQIL " +
      "qoplanadi; uning " +
      "miqdori SUD " +
      "tomonidan " +
      "belgilanadi; " +
      "qoplash usuli va " +
      "miqdori Fuqarolik " +
      "kodeksida ham " +
      "tartibga " +
      "solingan.\n\n" +
      "Talab qo'yishda " +
      "iztirobni " +
      "asoslash kerak: " +
      "tibbiy hujjatlar, " +
      "guvohlar, " +
      "yozishmalar.",
    example:
      "Nosoz tovar tufayli " +
      "odam jarohat oldi va " +
      "uzoq davolandi. " +
      "Tovar narxi va " +
      "davolanish " +
      "xarajatidan tashqari " +
      "ma'naviy zarar ham " +
      "talab qilinishi " +
      "mumkin.",
    keyPoints: [
      "Ma'naviy zarar iste'molchi nizolarida ham qoplanadi",
      "U moddiy zarardan mustaqil talab hisoblanadi",
      "Miqdorni sud belgilaydi",
      "Iztirobni hujjat bilan asoslash kerak",
    ],
    warning:
      "Ma'naviy zarar " +
      "talabini da'vo " +
      "arizasida ALOHIDA " +
      "band qilib yozing — " +
      "aks holda sud uni " +
      "ko'rib chiqmaydi.",
    lawRefs: [
      { code: "IHQ", article: "22" },
      { code: "FK2", article: "1022" },
    ],
  },

  /* ── 37 ────────────────────────────────────────────────────── */
  {
    heading: "Kommunal va aloqa xizmatlari",
    text:
      "Kundalik hayotda eng " +
      "ko'p ishlatiladigan " +
      "xizmatlar — suv, gaz, " +
      "elektr, issiqlik, " +
      "internet va aloqa. " +
      "Ular ham iste'molchi " +
      "huquqlari doirasiga " +
      "kiradi.\n\n" +
      "Bu yerda ham asosiy " +
      "talablar o'zgarmaydi: " +
      "xizmat SIFATLI va " +
      "XAVFSIZ bo'lishi; " +
      "narx va hisob-kitob " +
      "SHAFFOF bo'lishi; " +
      "iste'molchi to'liq " +
      "MA'LUMOT olishi.\n\n" +
      "⚠️ Amaldagi eng ko'p " +
      "muammo — hisob-kitob. " +
      "Iste'molchi " +
      "hisoblangan summa " +
      "qanday chiqarilganini " +
      "bilish huquqiga ega. " +
      "Tushunarsiz " +
      "\"qo'shimcha " +
      "hisoblash\" bo'lsa, " +
      "uni asoslashni " +
      "talab qiling.\n\n" +
      "Xizmat ko'rsatilmagan " +
      "yoki sifatsiz " +
      "ko'rsatilgan davr " +
      "uchun haq to'lash " +
      "masalasi ham " +
      "ko'tarilishi " +
      "mumkin — bu sifatsiz " +
      "xizmat bo'yicha " +
      "umumiy qoidalarga " +
      "asoslanadi.\n\n" +
      "Murojaat tartibi " +
      "odatiy: yozma ariza " +
      "→ tashkilot → " +
      "nazorat organi → " +
      "sud.",
    example:
      "Bir oy davomida " +
      "issiqlik berilmadi, " +
      "lekin to'liq summa " +
      "hisoblandi. " +
      "Iste'molchi " +
      "qayta hisoblashni " +
      "talab qilishi " +
      "mumkin — buning " +
      "uchun xizmat " +
      "yo'qligini qayd " +
      "ettirish kerak.",
    keyPoints: [
      "Kommunal va aloqa xizmatlari ham iste'molchi himoyasida",
      "Hisob-kitob shaffof va asoslangan bo'lishi kerak",
      "Ko'rsatilmagan xizmat uchun haq masalasi ko'tarilishi mumkin",
      "Tartib: yozma ariza → tashkilot → nazorat organi → sud",
    ],
    warning:
      "Xizmat " +
      "ko'rsatilmaganini " +
      "O'SHA PAYTDA qayd " +
      "ettiring " +
      "(dalolatnoma, " +
      "murojaat raqami) — " +
      "keyinchalik " +
      "isbotlash " +
      "imkonsiz.",
    lawRefs: [
      { code: "IHQ", article: "19" },
      { code: "IHQ", article: "6" },
      { code: "IHQ", article: "4" },
    ],
  },

  /* ── 38 ────────────────────────────────────────────────────── */
  {
    heading: "Kafillik majburiyatlari va ta'mirdan keyingi xizmat",
    text:
      "Ishlab chiqaruvchi " +
      "(ijrochi)ning kafillik " +
      "majburiyatlari alohida " +
      "moddada belgilangan va " +
      "ular sotuvchining " +
      "majburiyatlaridan " +
      "farq qiladi.\n\n" +
      "Ishlab chiqaruvchi " +
      "odatda quyidagilarni " +
      "ta'minlashi kerak: " +
      "kafolat muddati " +
      "davomida tovarni " +
      "ta'mirlash va texnik " +
      "xizmat ko'rsatish " +
      "imkoniyati; ehtiyot " +
      "qismlar bilan " +
      "ta'minlash.\n\n" +
      "⚠️ Bu iste'molchi " +
      "uchun muhim: " +
      "sotuvchi yopilib " +
      "ketgan bo'lsa ham, " +
      "ishlab " +
      "chiqaruvchining " +
      "kafillik " +
      "majburiyatlari " +
      "saqlanadi.\n\n" +
      "Ya'ni talabni " +
      "SOTUVCHIGA ham, " +
      "ISHLAB " +
      "CHIQARUVCHIGA ham " +
      "qo'yish mumkin — " +
      "bu tanlov " +
      "iste'molchida.\n\n" +
      "Xizmat " +
      "ko'rsatish " +
      "markazlari orqali " +
      "ta'mirlashda ham " +
      "hujjatlashtirish " +
      "muhim: qachon " +
      "topshirildi, " +
      "qanday nuqson qayd " +
      "etildi, qachon " +
      "qaytarildi.",
    example:
      "Tovarni sotgan " +
      "do'kon yopildi. " +
      "Xaridor kafolat " +
      "bo'yicha talabni " +
      "to'g'ridan-to'g'ri " +
      "ishlab " +
      "chiqaruvchining " +
      "vakolatli xizmat " +
      "markaziga qo'yishi " +
      "mumkin.",
    keyPoints: [
      "Ishlab chiqaruvchining kafillik majburiyatlari alohida",
      "Ta'mir va ehtiyot qismlar bilan ta'minlash kiradi",
      "Sotuvchi yopilsa ham bu majburiyat saqlanadi",
      "Talabni kimga qo'yishni iste'molchi tanlaydi",
    ],
    warning:
      "Xizmat markaziga " +
      "topshirganda " +
      "hujjat oling. " +
      "\"Og'zaki " +
      "topshirdim\" " +
      "degan holat " +
      "tovarni butunlay " +
      "yo'qotishga olib " +
      "kelishi mumkin.",
    lawRefs: [
      { code: "IHQ", article: "11" },
      { code: "IHQ", article: "15" },
      { code: "IHQ", article: "13" },
    ],
  },
];

module.exports = { SECTIONS };
