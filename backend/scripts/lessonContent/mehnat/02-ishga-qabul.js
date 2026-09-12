"use strict";
/**
 * MEHNAT HUQUQI — 2-QISM: ISHGA QABUL QILISH (7–14-mavzular)
 *
 * Ketma-ketlik amaliy tartibda: bosqichlar → hujjatlar →
 * shartnoma (shakli, mazmuni, muddati) → buyruq va daftarcha →
 * dastlabki sinov → shartnoma qachon kuchga kiradi.
 */

const SECTIONS = [
  /* ── 7 ─────────────────────────────────────────────────────── */
  {
    heading: "Ishga qabul qilish bosqichlari",
    text:
      "Ishga qabul qilish — bir imzo emas, " +
      "ketma-ket bosqichlardan iborat " +
      "jarayon. Har bir bosqich qonunda " +
      "belgilangan.\n\n" +
      "Umumiy tartib shunday: hujjatlarni " +
      "taqdim etish → ish beruvchining " +
      "tanishtirish tartib-taomilini " +
      "o'tkazishi → shartnoma shartlari " +
      "bo'yicha kelishuvga erishish → " +
      "shartnomani imzolash → buyruq " +
      "chiqarish → ishga qo'yish.\n\n" +
      "TANISHTIRISH tartib-taomili alohida " +
      "e'tiborga loyiq. Ish beruvchi xodimni " +
      "ishga qabul qilishdan OLDIN quyidagilar " +
      "bilan tanishtirishi shart: bajariladigan " +
      "ish, mehnat sharoitlari, ichki mehnat " +
      "tartibi qoidalari, jamoa shartnomasi va " +
      "xavfsizlik talablari.\n\n" +
      "Bu shunchaki rasmiyatchilik emas: " +
      "keyinchalik \"men bilmasdim\" degan " +
      "dalil aynan shu bosqich hujjatlashtirilgan-" +
      "hujjatlashtirilmaganiga qarab baholanadi.",
    example:
      "Xodim intizomiy jazoga tortildi, " +
      "chunki ichki tartib qoidasini buzgan. " +
      "Lekin uni bu qoidalar bilan " +
      "tanishtirilganini tasdiqlovchi imzo " +
      "yo'q. Jazo asossiz bo'lib qoladi.",
    keyPoints: [
      "Ishga qabul qilish bir necha bosqichdan iborat",
      "Tanishtirish shartnoma imzolashdan OLDIN o'tkaziladi",
      "Ichki qoidalar va xavfsizlik talablari tanishtiriladi",
      "Tanishtirilgani imzo bilan tasdiqlanadi",
    ],
    warning:
      "Bo'sh qog'ozga yoki tarkibini " +
      "o'qimasdan imzo qo'ymang — " +
      "keyinchalik u sizga qarshi dalil " +
      "bo'lishi mumkin.",
    lawRefs: [
      { code: "MK", article: "122" },
      { code: "MK", article: "123" },
    ],
  },

  /* ── 8 ─────────────────────────────────────────────────────── */
  {
    heading: "Qanday hujjatlar talab qilinadi",
    text:
      "Ishga qabul qilishda talab qilinadigan " +
      "hujjatlar ro'yxati qonunda BELGILANGAN. " +
      "Bu ro'yxatdan tashqari hujjat talab " +
      "qilish qonunga zid.\n\n" +
      "Odatiy ro'yxat: shaxsni tasdiqlovchi " +
      "hujjat; mehnat daftarchasi (birinchi " +
      "marta ishga kirayotganlardan tashqari); " +
      "ta'lim yoki malaka to'g'risidagi hujjat " +
      "(agar ish maxsus bilim talab qilsa); " +
      "harbiy hisobga oid hujjat; ayrim " +
      "ishlarda tibbiy ko'rik natijasi.\n\n" +
      "Ish beruvchi qo'shimcha ravishda ro'yxatda " +
      "yo'q hujjatlarni (masalan uy-joy " +
      "ma'lumotnomasi, qarindoshlar haqidagi " +
      "ma'lumot) talab qila olmaydi.\n\n" +
      "⚠️ Shaxsga doir ma'lumotlar alohida " +
      "himoyalangan. Ish beruvchi ularni faqat " +
      "mehnat munosabati uchun zarur bo'lgan " +
      "hajmda yig'ishi va uchinchi shaxsga " +
      "xodimning roziligisiz bermasligi shart.",
    example:
      "Ish beruvchi nomzoddan sog'liq " +
      "to'g'risidagi to'liq tibbiy tarixni " +
      "so'rayapti. Ish maxsus tibbiy ko'rikni " +
      "talab qilmasa, bunday talab qonunga " +
      "zid va shaxsiy ma'lumotlar himoyasini " +
      "buzadi.",
    keyPoints: [
      "Hujjatlar ro'yxati qonunda belgilangan",
      "Ro'yxatdan tashqari hujjat talab qilib bo'lmaydi",
      "Shaxsga doir ma'lumotlar alohida himoyalangan",
      "Ma'lumotni uchinchi shaxsga berish uchun rozilik kerak",
    ],
    warning:
      "Hujjat ASLINI ish beruvchiga qoldirib " +
      "ketmang — nusxa berish kifoya, asli " +
      "sizda qolishi kerak.",
    lawRefs: [
      { code: "MK", article: "124" },
      { code: "MK", article: "175" },
      { code: "MK", article: "178" },
    ],
  },

  /* ── 9 ─────────────────────────────────────────────────────── */
  {
    heading: "Mehnat shartnomasi nima va uning shakli",
    text:
      "Mehnat shartnomasi — xodim bilan ish " +
      "beruvchi o'rtasidagi kelishuv. Aynan u " +
      "mehnat munosabatining ASOSI bo'ladi.\n\n" +
      "⚠️ SHAKL TALABI HAL QILUVCHI: mehnat " +
      "shartnomasi YOZMA shaklda tuziladi va " +
      "ikki nusxada imzolanadi. Bir nusxa " +
      "xodimda qoladi.\n\n" +
      "Bu talabni yengil qabul qilish eng " +
      "keng tarqalgan va eng qimmatga " +
      "tushadigan xato. Yozma shartnomasiz " +
      "ishlagan odam nizo chiqqanda " +
      "quyidagilarni isbotlay olmaydi: qancha " +
      "ish haqi kelishilgani, qanday lavozimda " +
      "ishlagani, qachondan beri ishlayotgani.\n\n" +
      "Shu bilan birga qonun xodimni " +
      "himoyasiz qoldirmaydi: shartnoma " +
      "rasmiylashtirilmagan bo'lsa ham, " +
      "xodim ish beruvchining bilishi bilan " +
      "HAQIQATDA ishga qo'yilgan bo'lsa, " +
      "mehnat munosabati vujudga kelgan " +
      "hisoblanadi.",
    example:
      "Odam uch oy ishladi, shartnoma " +
      "imzolanmadi va ish haqi to'lanmadi. " +
      "Ish beruvchi \"u bizda ishlamagan\" " +
      "deydi. Xodim haqiqatda ishga " +
      "qo'yilganini dalillar bilan " +
      "(o'tkazmalar, yozishmalar, guvohlar) " +
      "isbotlab, huquqlarini tiklashi mumkin.",
    keyPoints: [
      "Shartnoma YOZMA shaklda tuziladi",
      "Ikki nusxa imzolanadi, biri xodimda qoladi",
      "Yozma shartnomasiz shartlarni isbotlash juda qiyin",
      "Haqiqatda ishga qo'yilish ham munosabatni vujudga keltiradi",
    ],
    warning:
      "Shartnomaning O'Z NUSXANGIZNI " +
      "olmasdan ishga chiqmang. \"Keyin " +
      "beramiz\" degan va'da nizo paytida " +
      "hech qanday qiymatga ega emas.",
    lawRefs: [
      { code: "MK", article: "103" },
      { code: "MK", article: "106" },
      { code: "MK", article: "128" },
    ],
  },

  /* ── 10 ────────────────────────────────────────────────────── */
  {
    heading: "Shartnoma mazmuni: nima yozilishi shart",
    text:
      "Shartnomani imzolashdan oldin nimaga " +
      "e'tibor berish kerak? Qonun uning " +
      "MAJBURIY shartlarini belgilaydi.\n\n" +
      "Odatda quyidagilar bo'lishi shart: " +
      "tomonlar haqida ma'lumot; ish joyi; " +
      "lavozim (kasb, mutaxassislik); ishning " +
      "boshlanish sanasi; mehnatga haq to'lash " +
      "shartlari va miqdori; ish vaqti va dam " +
      "olish vaqti rejimi; mehnat sharoitlari " +
      "tavsifi; shartnoma muddati.\n\n" +
      "⚠️ ENG MUHIM QOIDA: shartnoma xodimning " +
      "ahvolini QONUNGA NISBATAN " +
      "YOMONLASHTIRA olmaydi. Bunday shartlar " +
      "HAQIQIY EMAS deb hisoblanadi va " +
      "ularning o'rniga qonun normasi " +
      "qo'llaniladi.\n\n" +
      "Ya'ni \"ta'til berilmaydi\" yoki " +
      "\"ish haqi eng kam miqdordan past\" " +
      "degan shart imzolangan bo'lsa ham " +
      "ishlamaydi. Aksincha, shartnoma " +
      "xodim uchun qonundan YAXSHIROQ " +
      "shart belgilashi mumkin — bu " +
      "ruxsat etiladi.",
    example:
      "Shartnomada \"xodim yillik ta'tildan " +
      "voz kechadi\" deb yozilgan va xodim " +
      "imzolagan. Bu shart haqiqiy emas — " +
      "ta'til huquqi baribir saqlanadi.",
    keyPoints: [
      "Majburiy shartlar qonunda ro'yxat bilan belgilangan",
      "Ish haqi miqdori shartnomada aniq ko'rsatilishi kerak",
      "Xodim ahvolini yomonlashtiruvchi shartlar haqiqiy emas",
      "Qonundan yaxshiroq shart belgilash mumkin",
    ],
    warning:
      "Ish haqi \"kelishuv bo'yicha\" deb " +
      "yozilgan shartnomaga imzo qo'ymang — " +
      "aniq raqam bo'lishi shart, aks holda " +
      "nizoda hech narsani isbotlay olmaysiz.",
    lawRefs: [
      { code: "MK", article: "104" },
      { code: "MK", article: "105" },
      { code: "MK", article: "107" },
      { code: "MK", article: "8" },
    ],
  },

  /* ── 11 ────────────────────────────────────────────────────── */
  {
    heading: "Muddatli va muddatsiz shartnoma",
    text:
      "Shartnomaning ikki turi bor va " +
      "ular o'rtasidagi farq juda jiddiy.\n\n" +
      "MUDDATSIZ (noaniq muddatga) — asosiy " +
      "va standart tur. U tugash sanasi " +
      "ko'rsatilmasdan tuziladi va xodim " +
      "uchun eng himoyalangan variant.\n\n" +
      "MUDDATLI — belgilangan muddatga " +
      "tuziladi. ⚠️ Muhim: uni ISTAGAN " +
      "PAYTDA tuzib bo'lmaydi. Qonun " +
      "muddatli shartnoma tuzish mumkin " +
      "bo'lgan hollarni ANIQ ro'yxat bilan " +
      "belgilaydi — masalan vaqtincha yo'q " +
      "xodim o'rniga, mavsumiy ish, aniq " +
      "muddatli loyiha.\n\n" +
      "Agar ish doimiy xarakterga ega " +
      "bo'lsa-yu, ish beruvchi shunday " +
      "asossiz muddatli shartnoma tuzsa, " +
      "bu qonunni chetlab o'tish hisoblanadi " +
      "— chunki muddatli shartnomani " +
      "tugatish ancha oson va xodim " +
      "kafolatlardan mahrum bo'ladi.",
    example:
      "Doimiy lavozimga har yili yangi " +
      "bir yillik shartnoma tuzilyapti. " +
      "Bu muddatlilikning asosliligini " +
      "shubha ostiga qo'yadi — bunday " +
      "shartnoma muddatsiz deb e'tirof " +
      "etilishi mumkin.",
    keyPoints: [
      "Standart tur — muddatsiz shartnoma",
      "Muddatli shartnoma faqat qonunda ko'rsatilgan hollarda tuziladi",
      "Asossiz muddatlilik qonunni chetlab o'tish hisoblanadi",
      "Muddatli shartnomada xodimning himoyasi zaifroq",
    ],
    warning:
      "Muddatli shartnoma taklif qilinsa, " +
      "uning ASOSINI so'rang. Asos " +
      "qonundagi ro'yxatga kirmasa — bu " +
      "e'tiroz uchun jiddiy sabab.",
    lawRefs: [
      { code: "MK", article: "110" },
      { code: "MK", article: "111" },
      { code: "MK", article: "112" },
      { code: "MK", article: "113" },
    ],
  },

  /* ── 12 ────────────────────────────────────────────────────── */
  {
    heading: "Buyruq, mehnat daftarchasi va ro'yxatga olish",
    text:
      "Shartnoma imzolangach uch narsa " +
      "rasmiylashtirilishi kerak.\n\n" +
      "Birinchisi — BUYRUQ. Ish beruvchi " +
      "xodimni ishga qabul qilish " +
      "to'g'risida buyruq chiqaradi. Xodim " +
      "bu buyruq bilan tanishtirilishi " +
      "va uning nusxasini olishi mumkin.\n\n" +
      "Ikkinchisi — MEHNAT DAFTARCHASI. " +
      "Ishga qabul qilish haqidagi " +
      "ma'lumot unga kiritiladi. Daftarcha " +
      "— ish stajini tasdiqlovchi asosiy " +
      "hujjat va u pensiya hisoblashda " +
      "hal qiluvchi ahamiyatga ega.\n\n" +
      "Uchinchisi — RAQAMLI TIZIM. " +
      "Ma'lumotlar \"Yagona milliy mehnat " +
      "tizimi\"ga ham kiritiladi. Bu xodim " +
      "uchun qo'shimcha himoya: daftarcha " +
      "yo'qolsa ham ma'lumot tizimda " +
      "qoladi.\n\n" +
      "Shuningdek mehnat shartnomasi " +
      "belgilangan tartibda ro'yxatdan " +
      "o'tkaziladi.",
    example:
      "Odam yillar davomida ishladi, lekin " +
      "ma'lumot na daftarchaga, na tizimga " +
      "kiritilgan. Pensiya rasmiylashtirishda " +
      "bu yillar staj sifatida hisobga " +
      "olinmaydi — buni keyinchalik sud " +
      "orqali tiklash kerak bo'ladi.",
    keyPoints: [
      "Ishga qabul qilish buyruq bilan rasmiylashtiriladi",
      "Ma'lumot mehnat daftarchasiga kiritiladi",
      "Raqamli tizim qo'shimcha himoya beradi",
      "Staj pensiya hisoblashda hal qiluvchi ahamiyatga ega",
    ],
    warning:
      "Vaqti-vaqti bilan raqamli tizimda " +
      "o'z ma'lumotlaringizni tekshirib " +
      "turing — xatoni erta topish uni " +
      "tuzatishni osonlashtiradi.",
    lawRefs: [
      { code: "MK", article: "127" },
      { code: "MK", article: "125" },
      { code: "MK", article: "109" },
    ],
  },

  /* ── 13 ────────────────────────────────────────────────────── */
  {
    heading: "Dastlabki sinov muddati",
    text:
      "Ish beruvchi xodimning ishga " +
      "mosligini tekshirish uchun dastlabki " +
      "sinov belgilashi mumkin.\n\n" +
      "⚠️ ASOSIY QOIDA: sinov faqat " +
      "SHARTNOMADA yozilgan bo'lsa amal " +
      "qiladi. Shartnomada sinov haqida " +
      "hech narsa yozilmagan bo'lsa, xodim " +
      "sinovsiz ishga qabul qilingan " +
      "hisoblanadi.\n\n" +
      "Sinov muddati qonunda cheklangan — " +
      "uni cheksiz uzaytirib bo'lmaydi. " +
      "Aniq muddat qonun matnida.\n\n" +
      "Sinov davrida xodimga mehnat " +
      "to'g'risidagi qonunchilik TO'LIQ " +
      "tatbiq etiladi. Ya'ni ish haqi " +
      "kamaytirilmaydi, ta'til huquqi " +
      "hisoblanadi, kafolatlar ishlaydi.\n\n" +
      "Sinov natijasi qoniqarsiz bo'lsa, " +
      "ish beruvchi shartnomani bekor " +
      "qilishi mumkin — lekin buni " +
      "ASOSLASHI va belgilangan tartibga " +
      "rioya qilishi shart.",
    example:
      "Ish beruvchi sinov davrida ish " +
      "haqini yarim miqdorda to'layapti. " +
      "Bu qonunga zid: sinov davri ish " +
      "haqini kamaytirish uchun asos " +
      "emas.",
    keyPoints: [
      "Sinov faqat shartnomada yozilgan bo'lsa amal qiladi",
      "Muddati qonunda cheklangan",
      "Sinov davrida barcha mehnat kafolatlari ishlaydi",
      "Salbiy natija asoslangan bo'lishi kerak",
    ],
    warning:
      "Ayrim toifadagi xodimlarga (masalan " +
      "homilador ayollar, voyaga yetmaganlar) " +
      "sinov belgilash umuman taqiqlanadi.",
    lawRefs: [
      { code: "MK", article: "129" },
      { code: "MK", article: "130" },
      { code: "MK", article: "131" },
      { code: "MK", article: "132" },
    ],
  },

  /* ── 14 ────────────────────────────────────────────────────── */
  {
    heading: "Shartnoma qachon kuchga kiradi",
    text:
      "Shartnoma imzolandi — ishlash " +
      "boshlandimi? Bu ikki narsa har " +
      "doim ham bir vaqtda bo'lmaydi.\n\n" +
      "Shartnoma odatda imzolangan kundan " +
      "kuchga kiradi, lekin unda ishning " +
      "boshlanish sanasi alohida " +
      "ko'rsatilishi mumkin. Bu sana " +
      "muhim: aynan shundan boshlab staj " +
      "hisoblanadi va ish haqi hisoblab " +
      "boriladi.\n\n" +
      "Alohida holat — HAQIQATDA ISHGA " +
      "QO'YISH. Agar xodim ish beruvchining " +
      "bilishi yoki topshirig'i bilan " +
      "amalda ishlay boshlagan bo'lsa, " +
      "shartnoma tuzilgan hisoblanadi — " +
      "hujjat keyinroq rasmiylashtirilsa " +
      "ham.\n\n" +
      "Bu norma xodimni himoya qiladi: " +
      "ish beruvchi rasmiylashtirishni " +
      "cho'zib, keyinchalik \"siz bizda " +
      "ishlamagansiz\" deb ayta olmaydi.",
    example:
      "Xodim dushanba kuni ishga chiqdi, " +
      "shartnoma esa faqat juma kuni " +
      "imzolandi. Mehnat munosabati " +
      "dushanbadan boshlangan hisoblanadi " +
      "va o'sha kunlar ham to'lanishi " +
      "kerak.",
    keyPoints: [
      "Shartnoma odatda imzolangan kundan kuchga kiradi",
      "Ishning boshlanish sanasi alohida ko'rsatilishi mumkin",
      "Staj va ish haqi shu sanadan hisoblanadi",
      "Haqiqatda ishga qo'yilish shartnoma tuzilgan deb hisoblanadi",
    ],
    warning:
      "Rasmiylashtirilmasdan ishga " +
      "chiqqan bo'lsangiz, birinchi " +
      "kundan dalil to'plang: yozishmalar, " +
      "propusk, guvohlar, topshiriqlar.",
    lawRefs: [
      { code: "MK", article: "108" },
      { code: "MK", article: "128" },
      { code: "MK", article: "26" },
    ],
  },
];

module.exports = { SECTIONS };
