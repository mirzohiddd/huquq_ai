"use strict";
/** ISTE'MOLCHI MODULI — 1-DARS: ASOSIY HUQUQLAR VA AXBOROT.
 *  IHQ 1–9, 12 + FK2 425–427 (chakana savdo).
 *  Nuqsonli tovar (13–18) 2-darsda, kafolat (10–12-1) 3-darsda. */

const LESSON = {
  key: "istemolchi-asosiy-huquqlar",
  category: "consumer",
  level: "basic",
  order: 8010,
  title: "Iste'molchining asosiy huquqlari va axborot olish",
  desc:
    "Iste'molchi kim, qanday huquqlari bor, tovar va sotuvchi " +
    "haqida qanday ma'lumot berilishi shart.",
  objectives: [
    "Iste'molchi maqomini va uning ahamiyatini bilasiz",
    "Asosiy huquqlar ro'yxatini bilasiz",
    "Ma'lumot olish huquqining hajmini tushunasiz",
    "Noto'g'ri ma'lumot berilganda nima qilishni bilasiz",
  ],
  practicalSteps: [
    "Xarid hujjatini o'z nomingizga rasmiylashtiring",
    "Yorliq va narx yorlig'ini xariddan oldin suratga oling",
    "Sotuvchining rasmiy nomi va manzilini aniqlab oling",
    "Og'zaki va'dalarni yozishma bilan mustahkamlang",
  ],
  sections: [
    {
      heading: "Iste'molchi kim va qonun kimni himoya qiladi",
      text:
        "Iste'molchi — tovarni (ishni, " +
        "xizmatni) SHAXSIY, oilaviy yoki " +
        "uy-ro'zg'or ehtiyojlari uchun " +
        "sotib oladigan yoki buyurtma " +
        "qiladigan jismoniy shaxs.\n\n" +
        "⚠️ Ta'rifdagi hal qiluvchi so'z " +
        "— MAQSAD. Tovar tadbirkorlik " +
        "faoliyati uchun sotib olinsa, " +
        "xaridor iste'molchi " +
        "hisoblanmaydi va bu qonun " +
        "himoyasi unga tarqalmaydi.\n\n" +
        "Nima uchun muhim? Iste'molchiga " +
        "berilgan himoya oddiy " +
        "fuqarolik shartnomasidagidan " +
        "ANCHA KUCHLI: nuqsonli " +
        "tovarni qaytarish, " +
        "almashtirish, ma'naviy " +
        "zararni qoplash — bularning " +
        "hammasi shu maqomda beriladi.",
      example:
        "Odam o'ziga muzlatgich oldi — u " +
        "iste'molchi. Do'koni uchun " +
        "sanoat muzlatgichi olsa — " +
        "iste'molchi emas va nizoda " +
        "boshqa qoidalar qo'llaniladi.",
      keyPoints: [
        "Iste'molchi — shaxsiy ehtiyoj uchun sotib oluvchi jismoniy shaxs",
        "Tadbirkorlik uchun xarid bu maqomni bermaydi",
        "Iste'molchi himoyasi ancha kuchliroq",
        "Qarshi tomon — ishlab chiqaruvchi, sotuvchi yoki ijrochi",
      ],
      warning:
        "Chekni tashkilot nomiga " +
        "rasmiylashtirsangiz " +
        "iste'molchi maqomini " +
        "yo'qotishingiz mumkin.",
      lawRefs: [
        { code: "IHQ", article: "1" },
        { code: "IHQ", article: "2" },
      ],
    },
    {
      heading: "Iste'molchining asosiy huquqlari",
      text:
        "Qonun iste'molchining asosiy " +
        "huquqlarini ro'yxat bilan " +
        "belgilaydi — bu himoyaning " +
        "birinchi qadami.\n\n" +
        "Asosiy huquqlar odatda: tovar " +
        "(ish, xizmat)ni erkin tanlash; " +
        "ular haqida to'liq va ishonchli " +
        "MA'LUMOT olish; tovarning " +
        "XAVFSIZ bo'lishi; tegishli " +
        "SIFAT; nuqson aniqlanganda " +
        "TALABLAR qo'yish; yetkazilgan " +
        "zararning qoplanishi; " +
        "huquqlarni himoya qilish, shu " +
        "jumladan SUD orqali.\n\n" +
        "⚠️ Bu huquqlar SHARTNOMA bilan " +
        "cheklanmaydi — bu alohida " +
        "moddada mustahkamlangan.",
      example:
        "Do'kon devorida \"Sotib olingan " +
        "tovar qaytarilmaydi\" degan " +
        "e'lon osilgan. Bunday e'lonning " +
        "huquqiy kuchi yo'q.",
      keyPoints: [
        "Asosiy huquqlar qonunda ro'yxat bilan berilgan",
        "Ma'lumot, xavfsizlik va sifat — uchta ustun",
        "Shartnoma bu huquqlarni cheklay olmaydi",
        "Do'kondagi e'lon qonundan ustun emas",
      ],
      warning:
        "\"Imzoladingiz — demak " +
        "rozisiz\" degan dalil bu " +
        "yerda ishlamaydi.",
      lawRefs: [
        { code: "IHQ", article: "4" },
        { code: "IHQ", article: "21" },
      ],
    },
    {
      heading: "Sotuvchi va savdo qoidalari haqida ma'lumot",
      text:
        "Tovar haqidagi ma'lumotdan " +
        "tashqari SOTUVCHINING O'ZI " +
        "haqida ham ma'lumot berilishi " +
        "kerak.\n\n" +
        "Bunga odatda kiradi: " +
        "tashkilotning nomi va " +
        "joylashgan yeri; ish tartibi; " +
        "faoliyat litsenziya yoki ruxsat " +
        "talab qilsa — u haqda " +
        "ma'lumot; savdo va xizmat " +
        "ko'rsatish qoidalari.\n\n" +
        "⚠️ Nima uchun shunchalik " +
        "muhim? Nizoda birinchi savol " +
        "— DA'VONI KIMGA qo'yish " +
        "kerak. Sotuvchining rasmiy " +
        "nomi va manzili bo'lmasa, " +
        "da'vo qo'yadigan shaxs ham " +
        "topilmaydi.",
      example:
        "Ijtimoiy tarmoq sahifasidan " +
        "tovar olindi, pul jismoniy " +
        "shaxsga o'tkazildi. Tovar " +
        "nuqsonli chiqdi, sahifa " +
        "o'chirildi — da'vo qo'yish " +
        "uchun aniq shaxs qolmadi.",
      keyPoints: [
        "Sotuvchi o'zi haqida ma'lumot berishi shart",
        "Nom, manzil va ish tartibi ko'rsatiladi",
        "Da'vo qo'yish uchun sotuvchi aniq bo'lishi kerak",
        "Bozor va onlayn savdoda xavf yuqori",
      ],
      warning:
        "Karta orqali \"jismoniy " +
        "shaxsga\" pul o'tkazish eng " +
        "xavfli to'lov usuli.",
      lawRefs: [{ code: "IHQ", article: "5" }],
    },
    {
      heading: "Tovar haqida ma'lumot olish huquqi",
      text:
        "Ma'lumot olish — iste'molchining " +
        "eng kam qadrlanadigan, lekin " +
        "eng kuchli huquqlaridan " +
        "biri.\n\n" +
        "Sotuvchi tovar haqida zarur va " +
        "ishonchli ma'lumotni taqdim " +
        "etishi SHART: tovar nomi va " +
        "asosiy iste'mol xususiyatlari; " +
        "tarkibi; ishlab chiqarilgan " +
        "sanasi; yaroqlilik va kafolat " +
        "muddati; narxi va to'lash " +
        "shartlari; ishlab chiqaruvchi " +
        "haqida ma'lumot; foydalanish " +
        "qoidalari.\n\n" +
        "⚠️ Ma'lumot TUSHUNARLI shaklda " +
        "va davlat tilida berilishi " +
        "kerak — faqat chet tilidagi " +
        "yorliq bu talabni " +
        "bajarmaydi.",
      example:
        "Xaridor oziq-ovqat mahsuloti " +
        "oldi, tarkibi ko'rsatilmagan " +
        "edi va allergiya boshlandi. " +
        "Ma'lumot berilmagani mustaqil " +
        "asos hisoblanadi.",
      keyPoints: [
        "Zarur va ishonchli ma'lumot berish — sotuvchining majburiyati",
        "Tarkib, muddat, narx va foydalanish qoidalari kiradi",
        "Ma'lumot tushunarli shaklda taqdim etiladi",
        "Berilmasligi mustaqil huquqbuzarlik",
      ],
      warning:
        "Xariddan oldin yorliqni " +
        "suratga oling — nizoda " +
        "faqat shu javob beradi.",
      lawRefs: [
        { code: "IHQ", article: "6" },
        { code: "FK2", article: "427" },
      ],
    },
    {
      heading: "Noto'g'ri ma'lumot berilgan taqdirda",
      text:
        "Sotuvchi noto'g'ri yoki to'liq " +
        "bo'lmagan ma'lumot bergan " +
        "bo'lsa, iste'molchining " +
        "alohida huquqlari yuzaga " +
        "keladi.\n\n" +
        "Odatiy imkoniyatlar: shartnomani " +
        "bekor qilib to'langan pulni " +
        "qaytarib olish; yetkazilgan " +
        "zararning qoplanishini talab " +
        "qilish.\n\n" +
        "⚠️ MUHIM NUQTA: bu huquq tovar " +
        "NUQSONLI bo'lishidan " +
        "MUSTAQIL. Tovar mukammal " +
        "ishlayotgan bo'lsa ham, agar " +
        "u haqda noto'g'ri ma'lumot " +
        "berilgan bo'lsa — huquq " +
        "baribir yuzaga keladi.\n\n" +
        "Mantiq adolatli: iste'molchi " +
        "qaror qabul qilganda berilgan " +
        "ma'lumotga tayanadi.",
      example:
        "Xaridorga telefon \"suvga " +
        "chidamli\" deb sotildi, aslida " +
        "unday emas edi. Telefon " +
        "ishlayotgan bo'lsa ham xaridor " +
        "pulni qaytarib olishi mumkin.",
      keyPoints: [
        "Noto'g'ri ma'lumot mustaqil asos hisoblanadi",
        "Tovar nuqsonsiz bo'lsa ham huquq yuzaga keladi",
        "Shartnomani bekor qilish va zararni qoplash mumkin",
        "Qoida xizmatlarga ham tegishli",
      ],
      warning:
        "Reklama va og'zaki va'dalar " +
        "ham ma'lumot hisoblanadi — " +
        "ularni saqlab qo'ying.",
      lawRefs: [{ code: "IHQ", article: "7" }],
    },
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
        "⚠️ Amaliy ahamiyati katta: " +
        "tovarni joyida tekshirish " +
        "keyinchalik \"nuqson qachon " +
        "paydo bo'lgan\" degan " +
        "murakkab tortishuvning oldini " +
        "oladi.",
      example:
        "Xaridor maishiy texnikani quti " +
        "ochilmagan holda oldi. Uyda " +
        "ochganda but emasligi " +
        "aniqlandi — isbot " +
        "qiyinlashadi.",
      keyPoints: [
        "Sifatni tekshirish — iste'molchining huquqi",
        "Sotuvchi tekshirishga to'sqinlik qila olmaydi",
        "Butlikni joyida tekshirish kerak",
        "Bu keyingi tortishuvlarning oldini oladi",
      ],
      warning:
        "\"Kafolat buziladi\" degan " +
        "dalil bilan tekshirishga " +
        "to'sqinlik qilish odatda " +
        "asossiz.",
      lawRefs: [
        { code: "IHQ", article: "8" },
        { code: "FK2", article: "407" },
      ],
    },
    {
      heading: "Chakana savdo va ommaviy oferta",
      text:
        "Kundalik xaridlarimizning " +
        "aksariyati — CHAKANA " +
        "oldi-sotdi. Oldi-sotdi " +
        "shartnomalarining ayrim " +
        "turlari to'g'risidagi qoidalar " +
        "alohida moddada nazarda " +
        "tutilgan.\n\n" +
        "OMMAVIY OFERTA tushunchasi " +
        "muhim: vitrinada, javonda yoki " +
        "katalogda tovarning narxi " +
        "bilan ko'rsatilishi shartnoma " +
        "tuzish taklifi hisoblanadi.\n\n" +
        "⚠️ Amaliy natijasi juda aniq: " +
        "narx yorlig'ida bir summa " +
        "yozilgan bo'lsa, sotuvchi " +
        "kassada boshqa summani talab " +
        "qila olmaydi. \"Narxni " +
        "yangilashga ulgurmadik\" degan " +
        "dalil iste'molchiga tegishli " +
        "emas.",
      example:
        "Javonda tovar 100 000 so'm deb " +
        "turibdi, kassada 130 000 so'm " +
        "deyishdi. Xaridor yorliqdagi " +
        "narxni talab qilishga haqli.",
      keyPoints: [
        "Chakana savdo alohida qoidalarga bo'ysunadi",
        "Narx bilan ko'rsatilgan tovar — ommaviy oferta",
        "Kassadagi narx yorliqdagidan yuqori bo'lmaydi",
        "\"Yangilashga ulgurmadik\" — asos emas",
      ],
      warning:
        "Narx yorlig'ini suratga oling " +
        "— u darhol almashtiriladi.",
      lawRefs: [
        { code: "IHQ", article: "9" },
        { code: "FK2", article: "425" },
        { code: "FK2", article: "426" },
      ],
    },
    {
      heading: "Tovar va xizmatning xavfsiz bo'lishi",
      text:
        "Iste'molchi tovar (ish, xizmat) " +
        "XAVFSIZ bo'lishiga talab " +
        "qo'yish huquqiga ega. Bu " +
        "sifatdan alohida va undan " +
        "muhimroq talab.\n\n" +
        "Xavfsizlik degani: tovar odatiy " +
        "shartlarda foydalanilganda " +
        "hayotga, sog'liqqa, mol-mulkka " +
        "va atrof-muhitga zarar " +
        "yetkazmasligi kerak.\n\n" +
        "Talab faqat foydalanish davriga " +
        "emas, saqlash, tashish va " +
        "utilizatsiya qilishga ham " +
        "tegishli.\n\n" +
        "⚠️ Tovar xavfli ekani " +
        "aniqlansa, ishlab chiqaruvchi " +
        "(sotuvchi) uni muomaladan " +
        "olib qo'yish va " +
        "iste'molchilarni " +
        "ogohlantirish choralarini " +
        "ko'rishi shart.",
      example:
        "Elektr jihoz sotildi, lekin " +
        "xavfsiz foydalanish qoidalari " +
        "berilmadi va yong'in chiqdi. " +
        "Qoidalarni yetkazmaslik " +
        "sotuvchining javobgarligi " +
        "uchun asos.",
      keyPoints: [
        "Xavfsizlik sifatdan alohida va muhimroq talab",
        "U hayot, sog'liq, mol-mulk va atrof-muhitni qamraydi",
        "Saqlash va tashishga ham tegishli",
        "Xavfli tovar muomaladan olib qo'yiladi",
      ],
      warning:
        "Foydalanish qo'llanmasini " +
        "saqlang — \"qoidaga rioya " +
        "qilinmagan\" degan e'tirozga " +
        "javob shundan chiqadi.",
      lawRefs: [
        { code: "IHQ", article: "12" },
        { code: "IHQ", article: "26" },
      ],
    },
  ],
};

module.exports = { LESSON };
