"use strict";
/** MEHNAT MODULI — 1-DARS: MEHNAT SHARTNOMASI. Moddalar: MK 103–117.
 *  Ishga qabul tartibi (122–132) 2-darsda, o'zgartirish (133–150) 3-darsda. */

const LESSON = {
  key: "mehnat-shartnomasi",
  category: "labor",
  level: "basic",
  order: 6010,
  title: "Mehnat shartnomasi: mazmuni va muddati",
  desc:
    "Mehnat shartnomasi nima, unda nima yozilishi shart, qanday " +
    "shaklda tuziladi va muddatli shartnoma qachon mumkin.",
  objectives: [
    "Mehnat shartnomasining majburiy shartlarini bilasiz",
    "Yozma shakl nima uchun hal qiluvchi ekanini tushunasiz",
    "Muddatli va muddatsiz shartnomani ajrata olasiz",
    "Qanday shartlar haqiqiy emasligini bilasiz",
  ],
  practicalSteps: [
    "Shartnomaning O'Z NUSXANGIZNI olmasdan ishga chiqmang",
    "Ish haqi aniq raqam bilan yozilganini tekshiring",
    "Muddatli shartnoma taklif qilinsa uning ASOSINI so'rang",
    "Ish bilan bog'liq hujjat nusxalarini talab qilish huquqingizdan foydalaning",
  ],
  sections: [
    {
      heading: "Mehnat shartnomasi va uning taraflari",
      text:
        "Mehnat shartnomasi — xodim bilan ish " +
        "beruvchi o'rtasidagi kelishuv. Aynan u " +
        "mehnat munosabatining ASOSI bo'ladi.\n\n" +
        "Taraflar: XODIM (mehnat vazifasini " +
        "shaxsan bajaradi) va ISH BERUVCHI " +
        "(ishni tashkil etadi va haq to'laydi).\n\n" +
        "⚠️ Xodim mehnat vazifasini SHAXSAN " +
        "bajaradi — buni boshqa shaxsga " +
        "topshirib bo'lmaydi. Bu mehnat " +
        "shartnomasini fuqarolik-huquqiy " +
        "shartnomadan ajratuvchi asosiy " +
        "belgilardan biri.",
      example:
        "Odam \"o'rniga boshqa odam yuboraman\" " +
        "dedi. Mehnat shartnomasida bu mumkin " +
        "emas — vazifa shaxsan bajariladi.",
      keyPoints: [
        "Shartnoma mehnat munosabatining asosi",
        "Taraflar — xodim va ish beruvchi",
        "Xodim vazifani shaxsan bajaradi",
        "Bu fuqarolik shartnomasidan asosiy farq",
      ],
      warning:
        "Shartnoma turini imzolashdan oldin " +
        "aniqlang — pudratda mehnat kafolatlari " +
        "ishlamaydi.",
      lawRefs: [{ code: "MK", article: "103" }],
    },
    {
      heading: "Shartnomaning mazmuni: majburiy shartlar",
      text:
        "Qonun shartnomaning MAJBURIY shartlarini " +
        "belgilaydi.\n\n" +
        "Odatda bo'lishi shart: taraflar haqida " +
        "ma'lumot; ish joyi; mehnat vazifasi " +
        "(lavozim, kasb, mutaxassislik); ishning " +
        "boshlanish sanasi; mehnatga haq to'lash " +
        "shartlari va miqdori; ish vaqti va dam " +
        "olish vaqti rejimi; mehnat sharoitlari " +
        "tavsifi; shartnoma muddati.\n\n" +
        "⚠️ Ish haqi ANIQ RAQAM bilan " +
        "ko'rsatilishi kerak — \"kelishuv " +
        "bo'yicha\" degan ifoda nizoda hech " +
        "narsani isbotlamaydi.",
      example:
        "Shartnomada ish haqi \"kelishuvga " +
        "muvofiq\" deb yozilgan edi. Ish beruvchi " +
        "kam to'lay boshlaganda xodim kelishilgan " +
        "miqdorni isbotlay olmadi.",
      keyPoints: [
        "Majburiy shartlar qonunda ro'yxat bilan berilgan",
        "Ish joyi, lavozim va ish haqi majburiy",
        "Ish haqi aniq raqam bilan yoziladi",
        "Ish vaqti rejimi ham ko'rsatiladi",
      ],
      warning:
        "Majburiy shart yozilmagan shartnomani " +
        "imzolamang — keyinchalik uni " +
        "to'ldirtirish qiyin.",
      lawRefs: [{ code: "MK", article: "104" }],
    },
    {
      heading: "Shartnoma shartlarining haqiqiy emasligi",
      text:
        "Shartnomaga istalgan shartni yozib " +
        "bo'lmaydi.\n\n" +
        "⚠️ ASOSIY QOIDA: shartnoma xodimning " +
        "ahvolini QONUNGA NISBATAN " +
        "YOMONLASHTIRA olmaydi. Bunday shartlar " +
        "HAQIQIY EMAS va ularning o'rniga qonun " +
        "normasi qo'llaniladi.\n\n" +
        "Ya'ni \"ta'til berilmaydi\" yoki \"ish " +
        "haqi eng kam miqdordan past\" degan " +
        "shart imzolangan bo'lsa ham " +
        "ishlamaydi.\n\n" +
        "Aksincha, xodim uchun qonundan " +
        "YAXSHIROQ shart belgilash mumkin — bu " +
        "ruxsat etiladi.",
      example:
        "Shartnomada \"xodim yillik ta'tildan voz " +
        "kechadi\" deb yozilgan va imzolangan. " +
        "Bu shart haqiqiy emas — ta'til huquqi " +
        "saqlanadi.",
      keyPoints: [
        "Xodim ahvolini yomonlashtiruvchi shartlar haqiqiy emas",
        "Ularning o'rniga qonun normasi qo'llaniladi",
        "Imzolangan bo'lsa ham ishlamaydi",
        "Qonundan yaxshiroq shart belgilash mumkin",
      ],
      warning:
        "\"O'zingiz imzolagansiz\" degan dalil bu " +
        "yerda ishlamaydi.",
      lawRefs: [
        { code: "MK", article: "105" },
        { code: "MK", article: "8" },
      ],
    },
    {
      heading: "Shartnomaning shakli",
      text:
        "⚠️ SHAKL TALABI HAL QILUVCHI: mehnat " +
        "shartnomasi YOZMA shaklda tuziladi va " +
        "ikki nusxada imzolanadi. Bir nusxa " +
        "XODIMDA qoladi.\n\n" +
        "Bu talabni yengil qabul qilish eng keng " +
        "tarqalgan xato. Yozma shartnomasiz " +
        "xodim isbotlay olmaydi: qancha ish haqi " +
        "kelishilgani, qanday lavozimda " +
        "ishlagani, qachondan beri " +
        "ishlayotgani.\n\n" +
        "Shartnoma REKVIZITLARI ham qonunda " +
        "belgilangan — ular hujjatning to'liq " +
        "bo'lishini ta'minlaydi.",
      example:
        "Odam uch oy ishladi, shartnoma " +
        "imzolanmadi va ish haqi to'lanmadi. " +
        "Ish beruvchi \"u bizda ishlamagan\" " +
        "dedi — xodim dalil to'plashga majbur " +
        "bo'ldi.",
      keyPoints: [
        "Shartnoma yozma shaklda tuziladi",
        "Ikki nusxa imzolanadi, biri xodimda qoladi",
        "Rekvizitlar qonunda belgilangan",
        "Yozma shartnomasiz shartlarni isbotlash qiyin",
      ],
      warning:
        "O'Z NUSXANGIZNI olmasdan ishga " +
        "chiqmang. \"Keyin beramiz\" degan " +
        "va'da nizoda qiymatsiz.",
      lawRefs: [
        { code: "MK", article: "106" },
        { code: "MK", article: "107" },
      ],
    },
    {
      heading: "Shartnoma qachon kuchga kiradi",
      text:
        "Shartnoma odatda imzolangan kundan " +
        "kuchga kiradi, lekin unda ishning " +
        "boshlanish sanasi alohida " +
        "ko'rsatilishi mumkin.\n\n" +
        "Bu sana muhim: aynan shundan boshlab " +
        "staj hisoblanadi va ish haqi hisoblab " +
        "boriladi.\n\n" +
        "⚠️ Alohida holat — HAQIQATDA ISHGA " +
        "QO'YISH. Agar xodim ish beruvchining " +
        "bilishi yoki topshirig'i bilan amalda " +
        "ishlay boshlagan bo'lsa, shartnoma " +
        "tuzilgan hisoblanadi — hujjat keyinroq " +
        "rasmiylashtirilsa ham.",
      example:
        "Xodim dushanba kuni ishga chiqdi, " +
        "shartnoma juma kuni imzolandi. Mehnat " +
        "munosabati dushanbadan boshlangan " +
        "hisoblanadi.",
      keyPoints: [
        "Shartnoma odatda imzolangan kundan kuchga kiradi",
        "Ishning boshlanish sanasi alohida ko'rsatilishi mumkin",
        "Staj va ish haqi shu sanadan hisoblanadi",
        "Haqiqatda ishga qo'yilish ham munosabatni keltirib chiqaradi",
      ],
      warning:
        "Rasmiylashtirilmasdan ishga chiqqan " +
        "bo'lsangiz birinchi kundan dalil " +
        "to'plang.",
      lawRefs: [
        { code: "MK", article: "108" },
        { code: "MK", article: "128" },
      ],
    },
    {
      heading: "Shartnomani ro'yxatdan o'tkazish",
      text:
        "Mehnat shartnomasi belgilangan tartibda " +
        "RO'YXATDAN o'tkaziladi.\n\n" +
        "Ro'yxatga olish xodim uchun qo'shimcha " +
        "himoya: u mehnat munosabatining rasmiy " +
        "izini qoldiradi va staj hisobida asos " +
        "bo'ladi.\n\n" +
        "Ma'lumotlar \"Yagona milliy mehnat " +
        "tizimi\"ga ham kiritiladi — bu " +
        "daftarcha yo'qolsa ham ma'lumot " +
        "saqlanishini ta'minlaydi.\n\n" +
        "Vaqti-vaqti bilan tizimda o'z " +
        "ma'lumotlaringizni tekshirib turish " +
        "foydali.",
      example:
        "Odam yillar davomida ishladi, lekin " +
        "ma'lumot tizimga kiritilmagan edi. " +
        "Pensiya rasmiylashtirishda bu yillar " +
        "staj sifatida hisobga olinmadi.",
      keyPoints: [
        "Shartnoma belgilangan tartibda ro'yxatdan o'tkaziladi",
        "Ro'yxat xodim uchun qo'shimcha himoya",
        "Ma'lumot raqamli tizimga ham kiritiladi",
        "Tizimdagi ma'lumotni tekshirib turish foydali",
      ],
      warning:
        "Staj yozilmagan yillar pensiya " +
        "hisobiga kirmaydi — buni erta " +
        "tekshiring.",
      lawRefs: [
        { code: "MK", article: "109" },
        { code: "MK", article: "125" },
      ],
    },
    {
      heading: "Shartnoma muddati: ikki tur",
      text:
        "Shartnomaning ikki turi bor va " +
        "ular o'rtasidagi farq jiddiy.\n\n" +
        "MUDDATSIZ (noaniq muddatga) — asosiy " +
        "va standart tur. Tugash sanasi " +
        "ko'rsatilmasdan tuziladi va xodim " +
        "uchun eng himoyalangan variant.\n\n" +
        "MUDDATLI — belgilangan muddatga " +
        "tuziladi. Uni tugatish ancha oson, " +
        "shuning uchun xodimning himoyasi " +
        "zaifroq.\n\n" +
        "Muddatni belgilash USULLARI ham " +
        "qonunda ko'rsatilgan: aniq sana, " +
        "muddat yoki ish tugashi bilan.",
      example:
        "Doimiy lavozimga har yili yangi bir " +
        "yillik shartnoma tuzilyapti — bu " +
        "muddatlilikning asosliligini shubha " +
        "ostiga qo'yadi.",
      keyPoints: [
        "Standart tur — muddatsiz shartnoma",
        "Muddatli shartnomada himoya zaifroq",
        "Muddatni belgilash usullari qonunda ko'rsatilgan",
        "Muddat aniq sana yoki ish tugashi bilan belgilanadi",
      ],
      warning:
        "Muddatli shartnoma taklif qilinsa " +
        "uning ASOSINI so'rang.",
      lawRefs: [
        { code: "MK", article: "110" },
        { code: "MK", article: "114" },
      ],
    },
    {
      heading: "Muddatli shartnoma qachon asosli",
      text:
        "⚠️ ENG MUHIM QOIDA: muddatli " +
        "shartnomani ISTAGAN PAYTDA tuzib " +
        "bo'lmaydi.\n\n" +
        "Qonun uni tuzish ASOSLILIGINI talab " +
        "qiladi va tuzilishi SHART bo'lgan " +
        "hamda tuzilishi MUMKIN bo'lgan " +
        "hollarni alohida belgilaydi.\n\n" +
        "Odatiy asoslar: vaqtincha yo'q " +
        "xodim o'rniga; mavsumiy ish; aniq " +
        "muddatli loyiha; qonunda " +
        "ko'rsatilgan boshqa hollar.\n\n" +
        "Agar ish DOIMIY xarakterga ega " +
        "bo'lsa-yu, muddatli shartnoma " +
        "tuzilsa — bu qonunni chetlab " +
        "o'tish hisoblanadi.",
      example:
        "Xodim doimiy lavozimda ishlaydi, " +
        "lekin har yili muddatli shartnoma " +
        "qayta tuziladi. Bunday shartnoma " +
        "muddatsiz deb e'tirof etilishi " +
        "mumkin.",
      keyPoints: [
        "Muddatli shartnoma asosli bo'lishi shart",
        "Tuzilishi shart va mumkin bo'lgan hollar ajratilgan",
        "Vaqtincha yo'q xodim va mavsumiy ish odatiy asoslar",
        "Doimiy ishda muddatlilik qonunni chetlab o'tish",
      ],
      warning:
        "Asos qonundagi ro'yxatga kirmasa — " +
        "bu e'tiroz uchun jiddiy sabab.",
      lawRefs: [
        { code: "MK", article: "111" },
        { code: "MK", article: "112" },
        { code: "MK", article: "113" },
      ],
    },
    {
      heading: "Shart qilinmagan ishni talab qilish taqiqi",
      text:
        "Ish beruvchi xodimdan shartnomada " +
        "SHART QILIB KO'RSATILMAGAN ishni " +
        "bajarishni talab qila " +
        "OLMAYDI.\n\n" +
        "Bu qoida mehnat erkinligi " +
        "tamoyilidan kelib chiqadi: xodim " +
        "aynan kelishilgan vazifani " +
        "bajaradi.\n\n" +
        "Amalda bu ko'p buziladi: xodimga " +
        "asta-sekin boshqa vazifalar " +
        "yuklanadi va u \"rad etsam " +
        "ishdan bo'shatishadi\" deb " +
        "rozi bo'ladi.\n\n" +
        "⚠️ Qo'shimcha ish yuklanishi " +
        "ALOHIDA rasmiylashtiriladi va " +
        "unga haq to'lanadi.",
      example:
        "Buxgalterga omborchi vazifasi " +
        "ham yuklandi, qo'shimcha haq " +
        "to'lanmadi. Bu shartnomada shart " +
        "qilinmagan ishni talab qilish " +
        "hisoblanadi.",
      keyPoints: [
        "Shart qilinmagan ishni talab qilish taqiqlanadi",
        "Xodim kelishilgan vazifani bajaradi",
        "Qo'shimcha ish alohida rasmiylashtiriladi",
        "Unga qo'shimcha haq to'lanadi",
      ],
      warning:
        "Yangi vazifaga rozi bo'lsangiz uni " +
        "YOZMA rasmiylashtiring — aks " +
        "holda haqsiz bajarasiz.",
      lawRefs: [{ code: "MK", article: "115" }],
    },
    {
      heading: "Bir necha kasbda ishlash va qo'shimcha ish",
      text:
        "Qonun qo'shimcha ish " +
        "shakllarini alohida " +
        "belgilaydi: bir necha kasbda " +
        "(lavozimda) ishlash; xizmat " +
        "ko'rsatish doirasini " +
        "kengaytirish; ish hajmini " +
        "ko'paytirish; vaqtincha yo'q " +
        "xodimning majburiyatlarini " +
        "bajarish.\n\n" +
        "Muhimi: bularning hammasi " +
        "asosiy ishdan OZOD " +
        "ETILMAGAN holda " +
        "bajariladi.\n\n" +
        "⚠️ Har bir shakl uchun " +
        "QO'SHIMCHA HAQ to'lanishi " +
        "kerak — bu alohida moddada " +
        "belgilangan.",
      example:
        "Xodim ta'tildagi hamkasbining " +
        "vazifasini ham bajardi, lekin " +
        "qo'shimcha haq to'lanmadi. " +
        "Bu huquqbuzarlik.",
      keyPoints: [
        "Qo'shimcha ish shakllari qonunda belgilangan",
        "Ular asosiy ishdan ozod etilmagan holda bajariladi",
        "Har bir shakl uchun qo'shimcha haq to'lanadi",
        "Rozilik va rasmiylashtirish talab qilinadi",
      ],
      warning:
        "Qo'shimcha vazifani og'zaki " +
        "kelishuv bilan olmang — buyruq " +
        "va haq miqdori bo'lsin.",
      lawRefs: [
        { code: "MK", article: "116" },
        { code: "MK", article: "259" },
      ],
    },
    {
      heading: "Ish bilan bog'liq hujjatlarni olish huquqi",
      text:
        "Xodim ish bilan bog'liq " +
        "hujjatlarning va ularning " +
        "ko'chirma nusxalarining " +
        "berilishini TALAB QILISH " +
        "huquqiga ega.\n\n" +
        "Ish beruvchi buni belgilangan " +
        "muddatda bajarishi shart.\n\n" +
        "Talab qilish mumkin: shartnoma " +
        "nusxasi; buyruqlar nusxasi; " +
        "ish haqi haqidagi " +
        "ma'lumotnoma; staj haqidagi " +
        "ma'lumotnoma; mehnat " +
        "daftarchasidan ko'chirma.\n\n" +
        "⚠️ Bu huquqdan MUNTAZAM " +
        "foydalaning — ishdan " +
        "bo'shagandan keyin hujjat " +
        "olish ancha qiyinlashadi.",
      example:
        "Xodim kredit olish uchun ish " +
        "haqi ma'lumotnomasi so'radi va " +
        "rad javobini oldi. Bu qonunga " +
        "zid — hujjat berilishi shart.",
      keyPoints: [
        "Xodim hujjat nusxalarini talab qilish huquqiga ega",
        "Ish beruvchi belgilangan muddatda berishi shart",
        "Shartnoma, buyruq va ma'lumotnomalar kiradi",
        "Bu huquqdan muntazam foydalanish kerak",
      ],
      warning:
        "Hujjat so'rovini YOZMA qiling " +
        "va qabul belgisini oling — " +
        "og'zaki so'rov e'tiborsiz " +
        "qoldirilishi mumkin.",
      lawRefs: [{ code: "MK", article: "117" }],
    },
  ],
};

module.exports = { LESSON };
