"use strict";
/**
 * ISTE'MOLCHI HUQUQLARI — 1-QISM: ASOSLAR (1–8-mavzular)
 *
 * Ketma-ketlik: iste'molchi kim → qanday huquqlari bor →
 * ma'lumot olish → xavfsizlik → shartnoma tuzish.
 *
 * Manbalar: Iste'molchilarning huquqlarini himoya qilish
 * to'g'risidagi qonun (IHQ) va Fuqarolik kodeksi 2-qism (FK2).
 */

const SECTIONS = [
  /* ── 1 ─────────────────────────────────────────────────────── */
  {
    heading: "Iste'molchi kim va qonun kimni himoya qiladi",
    text:
      "Iste'molchi — tovarni (ishni, " +
      "xizmatni) SHAXSIY, oilaviy yoki " +
      "uy-ro'zg'or ehtiyojlari uchun " +
      "sotib oladigan yoki " +
      "buyurtma qiladigan jismoniy " +
      "shaxs.\n\n" +
      "⚠️ Bu ta'rifda hal qiluvchi so'z — " +
      "MAQSAD. Agar tovar tadbirkorlik " +
      "faoliyati uchun sotib olinsa, " +
      "xaridor iste'molchi hisoblanmaydi " +
      "va bu qonun himoyasi unga " +
      "tarqalmaydi.\n\n" +
      "Nima uchun bu muhim? Chunki " +
      "iste'molchiga berilgan himoya " +
      "oddiy fuqarolik shartnomasidagidan " +
      "ANCHA KUCHLI: nuqsonli tovarni " +
      "qaytarish, almashtirish, ma'naviy " +
      "zararni qoplash kabi huquqlar " +
      "faqat shu maqomda beriladi.\n\n" +
      "Qarshi tomon — ishlab chiqaruvchi, " +
      "sotuvchi yoki ijrochi. Ular " +
      "tadbirkor bo'lishi va tovar " +
      "(xizmat)ni doimiy faoliyat " +
      "sifatida taklif qilishi kerak.",
    example:
      "Odam o'ziga muzlatgich oldi — u " +
      "iste'molchi. Xuddi shu odam " +
      "do'koni uchun sanoat muzlatgichi " +
      "olsa — iste'molchi emas, va " +
      "nizoda boshqa qoidalar amal " +
      "qiladi.",
    keyPoints: [
      "Iste'molchi — shaxsiy ehtiyoj uchun sotib oluvchi jismoniy shaxs",
      "Tadbirkorlik uchun xarid iste'molchi maqomini bermaydi",
      "Iste'molchi himoyasi oddiy shartnomadagidan kuchliroq",
      "Qarshi tomon — ishlab chiqaruvchi, sotuvchi yoki ijrochi",
    ],
    warning:
      "Chekni tashkilot nomiga " +
      "rasmiylashtirsangiz iste'molchi " +
      "maqomini yo'qotishingiz mumkin — " +
      "shaxsiy xaridni o'z nomingizga " +
      "rasmiylashtiring.",
    lawRefs: [
      { code: "IHQ", article: "1" },
      { code: "IHQ", article: "2" },
    ],
  },

  /* ── 2 ─────────────────────────────────────────────────────── */
  {
    heading: "Iste'molchining asosiy huquqlari",
    text:
      "Qonun iste'molchining asosiy " +
      "huquqlarini ro'yxat bilan " +
      "belgilaydi. Bu ro'yxatni bilish " +
      "— himoyaning birinchi qadami.\n\n" +
      "Asosiy huquqlar odatda " +
      "quyidagilarni qamrab oladi: " +
      "tovar (ish, xizmat)ni erkin " +
      "tanlash; ular haqida to'liq va " +
      "ishonchli MA'LUMOT olish; " +
      "tovarning XAVFSIZ bo'lishi; " +
      "tegishli SIFAT; nuqson " +
      "aniqlanganda tegishli TALABLAR " +
      "qo'yish; yetkazilgan zararning " +
      "qoplanishi; huquqlarni himoya " +
      "qilish, jumladan SUD orqali.\n\n" +
      "Bu huquqlar SHARTNOMA bilan " +
      "cheklanmaydi. Ya'ni sotuvchi " +
      "\"biz qaytarib olmaymiz\" deb " +
      "e'lon osib qo'ysa yoki " +
      "shartnomaga shunday band " +
      "kiritsa ham, huquqlaringiz " +
      "saqlanadi.\n\n" +
      "Bu tamoyilning o'zi alohida " +
      "moddada mustahkamlangan — " +
      "iste'molchi huquqlarini " +
      "cheklaydigan shartnoma shartlari " +
      "haqiqiy emas.",
    example:
      "Do'kon devorida \"Sotib olingan " +
      "tovar qaytarilmaydi va " +
      "almashtirilmaydi\" degan e'lon " +
      "osilgan. Bunday e'lonning " +
      "huquqiy kuchi yo'q — u qonunni " +
      "bekor qila olmaydi.",
    keyPoints: [
      "Asosiy huquqlar qonunda ro'yxat bilan belgilangan",
      "Ma'lumot, xavfsizlik va sifat — uchta ustun",
      "Shartnoma bu huquqlarni cheklay olmaydi",
      "Do'kondagi e'lon qonundan ustun emas",
    ],
    warning:
      "\"Imzoladingiz — demak rozisiz\" " +
      "degan dalil bu yerda ishlamaydi: " +
      "huquqni cheklovchi shart " +
      "imzolangan bo'lsa ham haqiqiy " +
      "emas.",
    lawRefs: [
      { code: "IHQ", article: "4" },
      { code: "IHQ", article: "21" },
    ],
  },

  /* ── 3 ─────────────────────────────────────────────────────── */
  {
    heading: "Tovar haqida ma'lumot olish huquqi",
    text:
      "Ma'lumot olish — iste'molchining " +
      "eng kam qadrlanadigan, lekin eng " +
      "kuchli huquqlaridan biri.\n\n" +
      "Sotuvchi tovar haqida zarur va " +
      "ishonchli ma'lumotni taqdim " +
      "etishi SHART. Odatda bu " +
      "ma'lumotga kiradi: tovar nomi va " +
      "asosiy iste'mol xususiyatlari; " +
      "tarkibi; ishlab chiqarilgan " +
      "sanasi; yaroqlilik va kafolat " +
      "muddati; narxi va to'lash " +
      "shartlari; ishlab chiqaruvchi " +
      "haqida ma'lumot; foydalanish " +
      "qoidalari.\n\n" +
      "⚠️ Ma'lumot TUSHUNARLI shaklda " +
      "va davlat tilida berilishi " +
      "kerak. Faqat chet tilidagi " +
      "yorliq bu talabni bajarmaydi.\n\n" +
      "Bu huquqning kuchi shundaki: " +
      "agar ma'lumot berilmagan bo'lsa, " +
      "iste'molchi tovar nuqsonli " +
      "ekanini isbotlashi shart emas — " +
      "unga ma'lumot berilmagani " +
      "o'zi mustaqil asos bo'ladi.",
    example:
      "Xaridor oziq-ovqat mahsuloti " +
      "oldi, tarkibi ko'rsatilmagan " +
      "edi va allergiya boshlandi. " +
      "Ma'lumot berilmagani sotuvchi " +
      "javobgarligi uchun mustaqil " +
      "asos hisoblanadi.",
    keyPoints: [
      "Zarur va ishonchli ma'lumot berish — sotuvchining majburiyati",
      "Ma'lumot tushunarli shaklda taqdim etiladi",
      "Tarkib, muddat, narx va foydalanish qoidalari kiradi",
      "Ma'lumot berilmasligi mustaqil huquqbuzarlik",
    ],
    warning:
      "Xariddan oldin yorliqni " +
      "suratga oling. Nizo chiqqanda " +
      "\"o'shanda nima yozilgan edi\" " +
      "degan savolga faqat shu javob " +
      "beradi.",
    lawRefs: [
      { code: "IHQ", article: "6" },
      { code: "FK2", article: "427" },
    ],
  },

  /* ── 4 ─────────────────────────────────────────────────────── */
  {
    heading: "Sotuvchi haqida ma'lumot",
    text:
      "Tovar haqidagi ma'lumotdan " +
      "tashqari, SOTUVCHINING O'ZI " +
      "haqida ham ma'lumot berilishi " +
      "kerak.\n\n" +
      "Bunga odatda kiradi: tashkilotning " +
      "nomi va joylashgan yeri; ish " +
      "tartibi; faoliyat turi litsenziya " +
      "yoki ruxsat talab qilsa — u " +
      "haqda ma'lumot; savdo va xizmat " +
      "ko'rsatish qoidalari.\n\n" +
      "Nima uchun bu shunchalik " +
      "muhim? Chunki nizo chiqqanda " +
      "birinchi savol — DA'VONI KIMGA " +
      "QO'YISH kerak. Sotuvchining " +
      "rasmiy nomi va manzili " +
      "bo'lmasa, da'vo qo'yadigan " +
      "shaxs ham topilmaydi.\n\n" +
      "Bozorlarda va onlayn savdoda bu " +
      "muammo ayniqsa keskin: pul " +
      "to'lanadi, tovar olinadi, " +
      "lekin kimdan olingani noma'lum " +
      "bo'lib qoladi.\n\n" +
      "Shuning uchun xarid " +
      "hujjatlashtirilgan bo'lishi " +
      "shart.",
    example:
      "Ijtimoiy tarmoq sahifasidan " +
      "tovar olindi, pul karta orqali " +
      "jismoniy shaxsga o'tkazildi. " +
      "Tovar nuqsonli chiqdi, sahifa " +
      "esa o'chirildi. Da'vo qo'yish " +
      "uchun aniq shaxs qolmadi.",
    keyPoints: [
      "Sotuvchi o'zi haqida ma'lumot berishi shart",
      "Nom, manzil va ish tartibi ko'rsatiladi",
      "Da'vo qo'yish uchun sotuvchi aniq bo'lishi kerak",
      "Onlayn va bozor savdosida bu xavf yuqori",
    ],
    warning:
      "Karta orqali \"jismoniy shaxsga\" " +
      "pul o'tkazish eng xavfli to'lov " +
      "usuli — rasmiy sotuvchisi " +
      "bo'lmagan xaridni himoya qilish " +
      "deyarli imkonsiz.",
    lawRefs: [
      { code: "IHQ", article: "5" },
      { code: "IHQ", article: "1" },
    ],
  },

  /* ── 5 ─────────────────────────────────────────────────────── */
  {
    heading: "Noto'g'ri ma'lumot berilgan taqdirda",
    text:
      "Sotuvchi noto'g'ri yoki to'liq " +
      "bo'lmagan ma'lumot bergan " +
      "bo'lsa, iste'molchining alohida " +
      "huquqlari yuzaga keladi.\n\n" +
      "Odatiy imkoniyatlar: shartnomani " +
      "bekor qilib, to'langan pulni " +
      "qaytarib olish; yetkazilgan " +
      "zararning qoplanishini talab " +
      "qilish.\n\n" +
      "⚠️ Muhim nuqta: bu huquq tovar " +
      "NUQSONLI bo'lishidan MUSTAQIL. " +
      "Ya'ni tovar mukammal ishlayotgan " +
      "bo'lsa ham, agar u haqda " +
      "noto'g'ri ma'lumot berilgan " +
      "bo'lsa — huquq baribir " +
      "yuzaga keladi.\n\n" +
      "Bu mantiq adolatli: iste'molchi " +
      "qaror qabul qilganda o'ziga " +
      "berilgan ma'lumotga tayanadi. " +
      "Ma'lumot noto'g'ri bo'lsa, " +
      "uning tanlovi ham buzilgan " +
      "bo'ladi.\n\n" +
      "Xuddi shu qoida xizmatlarga ham " +
      "tegishli.",
    example:
      "Xaridorga telefon \"suvga " +
      "chidamli\" deb sotildi, aslida " +
      "unday emas edi. Telefon " +
      "ishlayotgan bo'lsa ham, xaridor " +
      "shartnomani bekor qilib pulni " +
      "qaytarib olishi mumkin.",
    keyPoints: [
      "Noto'g'ri ma'lumot mustaqil asos hisoblanadi",
      "Tovar nuqsonsiz bo'lsa ham huquq yuzaga keladi",
      "Shartnomani bekor qilish va zararni qoplash mumkin",
      "Qoida xizmatlarga ham tegishli",
    ],
    warning:
      "Reklama va sotuvchining og'zaki " +
      "va'dalari ham ma'lumot " +
      "hisoblanadi — ularni suratga " +
      "olib yoki saqlab qo'ying.",
    lawRefs: [
      { code: "IHQ", article: "7" },
      { code: "IHQ", article: "6" },
    ],
  },

  /* ── 6 ─────────────────────────────────────────────────────── */
  {
    heading: "Tovar va xizmatning xavfsiz bo'lishi",
    text:
      "Iste'molchi tovar (ish, xizmat) " +
      "XAVFSIZ bo'lishiga talab qo'yish " +
      "huquqiga ega. Bu — sifatdan " +
      "alohida va undan muhimroq " +
      "talab.\n\n" +
      "Xavfsizlik degani: tovar odatiy " +
      "shartlarda foydalanilganda " +
      "hayotga, sog'liqqa, mol-mulkka " +
      "va atrof-muhitga zarar " +
      "yetkazmasligi kerak.\n\n" +
      "Talab faqat foydalanish davriga " +
      "emas, saqlash, tashish va " +
      "utilizatsiya qilishga ham " +
      "tegishli.\n\n" +
      "⚠️ Agar tovar xavfli ekani " +
      "aniqlansa, ishlab chiqaruvchi " +
      "(sotuvchi) uni muomaladan olib " +
      "qo'yish va iste'molchilarni " +
      "ogohlantirish choralarini " +
      "ko'rishi shart.\n\n" +
      "Xavfsizlikni ta'minlash uchun " +
      "maxsus qoidalar talab " +
      "qilinadigan tovarlarda bu " +
      "qoidalar iste'molchiga " +
      "yetkazilishi kerak — aks " +
      "holda javobgarlik sotuvchida " +
      "qoladi.",
    example:
      "Elektr jihoz sotildi, lekin " +
      "xavfsiz foydalanish qoidalari " +
      "berilmadi va yong'in chiqdi. " +
      "Qoidalarni yetkazmaslik " +
      "sotuvchining javobgarligi " +
      "uchun asos bo'ladi.",
    keyPoints: [
      "Xavfsizlik — sifatdan alohida va muhimroq talab",
      "U hayot, sog'liq, mol-mulk va atrof-muhitni qamraydi",
      "Saqlash va tashishga ham tegishli",
      "Xavfli tovar muomaladan olib qo'yilishi kerak",
    ],
    warning:
      "Foydalanish qo'llanmasini " +
      "saqlang — nizoda \"qoidaga " +
      "rioya qilinmagan\" degan " +
      "e'tirozga javob aynan shundan " +
      "chiqadi.",
    lawRefs: [
      { code: "IHQ", article: "12" },
      { code: "IHQ", article: "26" },
    ],
  },

  /* ── 7 ─────────────────────────────────────────────────────── */
  {
    heading: "Shartnoma tuzish va sifatni tekshirish huquqi",
    text:
      "Iste'molchi savdo va xizmat " +
      "ko'rsatish sohasida shartnoma " +
      "tuzish, shuningdek sotib " +
      "olinayotgan tovarning sifatini " +
      "TEKSHIRISH huquqiga ega.\n\n" +
      "Amalda bu shuni anglatadi: " +
      "xaridor tovarni ko'rishi, " +
      "ishlashini sinab ko'rishi, " +
      "butligini tekshirishi mumkin. " +
      "Sotuvchi bunga to'sqinlik qila " +
      "olmaydi.\n\n" +
      "Fuqarolik kodeksi ham xuddi " +
      "shu masalani tartibga soladi: " +
      "tovar sifatini tekshirish " +
      "tartibi va uning oqibatlari " +
      "belgilangan.\n\n" +
      "⚠️ Amaliy ahamiyati katta: " +
      "tovarni joyida tekshirish " +
      "keyinchalik \"nuqson qachon " +
      "paydo bo'lgan\" degan " +
      "murakkab tortishuvning oldini " +
      "oladi.\n\n" +
      "Shuning uchun \"uyga borib " +
      "ochasiz\" degan taklifga rozi " +
      "bo'lmang — texnika va butlik " +
      "talab qiladigan tovarlarni " +
      "joyida tekshiring.",
    example:
      "Xaridor maishiy texnikani " +
      "quti ochilmagan holda oldi. " +
      "Uyda ochganda but emasligi " +
      "aniqlandi. Sotuvchi \"bizdan " +
      "chiqqanda but edi\" deydi — " +
      "isbot qiyinlashadi.",
    keyPoints: [
      "Sotib olishdan oldin sifatni tekshirish — iste'molchining huquqi",
      "Sotuvchi tekshirishga to'sqinlik qila olmaydi",
      "Butlikni joyida tekshirish kerak",
      "Bu keyingi tortishuvlarning oldini oladi",
    ],
    warning:
      "Qimmat texnikani ochib " +
      "tekshirishni so'rang. " +
      "\"Kafolat buziladi\" degan " +
      "dalil odatda to'g'ri emas.",
    lawRefs: [
      { code: "IHQ", article: "8" },
      { code: "FK2", article: "407" },
    ],
  },

  /* ── 8 ─────────────────────────────────────────────────────── */
  {
    heading: "Chek va hujjat: nima uchun hal qiluvchi",
    text:
      "Nizoda birinchi savol — XARID " +
      "BO'LGANINI qanday isbotlaysiz? " +
      "Javob: hujjat bilan.\n\n" +
      "Odatiy hujjatlar: kassa cheki, " +
      "tovar cheki, kafolat " +
      "talonchasi, shartnoma, to'lov " +
      "kvitansiyasi yoki bank " +
      "ko'chirmasi.\n\n" +
      "⚠️ MUHIM VA KO'PCHILIK " +
      "BILMAYDIGAN NUQTA: chekning " +
      "yo'qolishi iste'molchini " +
      "huquqidan MAHRUM QILMAYDI. " +
      "Xarid boshqa dalillar bilan " +
      "ham isbotlanishi mumkin — " +
      "guvohlik ko'rsatmalari, bank " +
      "operatsiyasi, kafolat " +
      "talonchasi, video yozuv.\n\n" +
      "Shunga qaramay chek eng " +
      "oddiy va ishonchli dalil " +
      "bo'lib qoladi.\n\n" +
      "Amaliy maslahat: chekni " +
      "suratga oling. Issiqlik " +
      "qog'ozidagi cheklar bir " +
      "necha oyda o'chib ketadi va " +
      "aynan kafolat muddati " +
      "tugashiga yaqin o'qib " +
      "bo'lmaydigan holga keladi.",
    example:
      "Xaridor chekni yo'qotdi, " +
      "lekin karta bilan to'lagan " +
      "edi. Bank ko'chirmasi va " +
      "kafolat talonchasi xaridni " +
      "tasdiqlovchi dalil bo'lib " +
      "xizmat qiladi.",
    keyPoints: [
      "Xarid hujjat bilan tasdiqlanadi",
      "Chekning yo'qolishi huquqni yo'qotmaydi",
      "Bank ko'chirmasi va guvohlar ham dalil bo'ladi",
      "Chekni suratga olish eng oddiy himoya",
    ],
    warning:
      "\"Cheksiz gaplashmaymiz\" " +
      "degan javob qonuniy emas — " +
      "lekin dalilsiz nizoni " +
      "yuritish ancha qiyinlashadi.",
    lawRefs: [
      { code: "IHQ", article: "17" },
      { code: "IHQ", article: "10" },
    ],
  },
];

module.exports = { SECTIONS };
