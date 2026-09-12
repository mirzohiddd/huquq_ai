"use strict";
/** MEHNAT MODULI — 2-DARS: ISHGA QABUL QILISH. Moddalar: MK 118–132. */

const LESSON = {
  key: "ishga-qabul",
  category: "labor",
  level: "basic",
  order: 6020,
  title: "Ishga qabul qilish va dastlabki sinov",
  desc:
    "Necha yoshdan ishlash mumkin, qanday hujjat kerak, ishga " +
    "qabul qilish bosqichlari va dastlabki sinov qoidalari.",
  objectives: [
    "Ishga qabul qilishga yo'l qo'yiladigan yoshni bilasiz",
    "Qanday hujjat talab qilinishi mumkinligini bilasiz",
    "Rad etish qachon qonuniy, qachon qonunga xilof ekanini ajrata olasiz",
    "Dastlabki sinov qoidalarini va uning chegaralarini bilasiz",
  ],
  practicalSteps: [
    "Hujjat ASLINI qoldirmang — nusxa bering",
    "Rad javobini YOZMA so'rang, sababi ko'rsatilishini talab qiling",
    "Tanishtirish tartib-taomilida imzo qo'yayotganingizni o'qing",
    "Sinov shartnomada yozilganini tekshiring — yozilmasa u yo'q",
  ],
  sections: [
    {
      heading: "Ishga qabul qilishga yo'l qo'yiladigan yosh",
      text:
        "Qonun ishga qabul qilish uchun eng kam " +
        "yoshni belgilaydi. Bu chegara bolaning " +
        "sog'lig'i va ta'lim olish huquqini " +
        "himoya qiladi.\n\n" +
        "Asosiy qoida bitta yoshni belgilaydi, " +
        "lekin undan pastroq yoshda ishlash " +
        "imkoniyati ham qat'iy shartlar bilan " +
        "nazarda tutilgan.\n\n" +
        "⚠️ Shartlardan biri — ota-onadan " +
        "birining (yoki o'rnini bosuvchi " +
        "shaxsning) YOZMA roziligi. Og'zaki " +
        "rozilik yetarli emas.",
      example:
        "Maktab o'quvchisi yozgi ta'tilda " +
        "ishlamoqchi. Yoshi asosiy chegaradan " +
        "kichik bo'lsa ota-onasining yozma " +
        "roziligi va ishning yengil bo'lishi " +
        "shart.",
      keyPoints: [
        "Ishga qabul qilish uchun eng kam yosh belgilangan",
        "Pastroq yoshda ishlash qat'iy shartlar bilan mumkin",
        "Ota-onaning roziligi yozma bo'lishi shart",
        "Ish yengil va o'qishga to'sqinlik qilmasligi kerak",
      ],
      warning:
        "Voyaga yetmagan xodimni tungi va ish " +
        "vaqtidan tashqari ishga jalb etish " +
        "taqiqlanadi — uning roziligi bo'lsa " +
        "ham.",
      lawRefs: [
        { code: "MK", article: "118" },
        { code: "MK", article: "31" },
      ],
    },
    {
      heading: "Ishga qabul qilishni qonunga xilof rad etish",
      text:
        "Ish beruvchi kimni ishga olishni o'zi " +
        "tanlaydi — lekin bu huquq CHEKSIZ " +
        "emas.\n\n" +
        "Qonunga XILOF rad etish taqiqlanadi. " +
        "Bunga kiradi: ishga aloqasi bo'lmagan " +
        "belgilar bo'yicha rad etish (jinsi, " +
        "yoshi, millati, tili, dini, ijtimoiy " +
        "kelib chiqishi); homiladorlik yoki " +
        "bolasi borligi sababli rad etish.\n\n" +
        "Qonuniy rad etish esa ISHGA OID " +
        "sabablarga tayanadi: malaka " +
        "yetishmasligi, tajriba yo'qligi, " +
        "lavozim talablariga mos kelmaslik.",
      example:
        "Ayol suhbatdan muvaffaqiyatli o'tdi, " +
        "lekin homilador ekani ma'lum " +
        "bo'lgach rad javobi berildi. Bu " +
        "qonunga xilof rad etish.",
      keyPoints: [
        "Ish beruvchining tanlash huquqi cheksiz emas",
        "Ishga aloqasi yo'q belgilar bo'yicha rad etish taqiqlanadi",
        "Homiladorlik sababli rad etish qonunga zid",
        "Qonuniy rad etish malaka va talablarga tayanadi",
      ],
      warning:
        "Og'zaki rad javobini isbotlash qiyin — " +
        "sababni YOZMA so'rang.",
      lawRefs: [{ code: "MK", article: "119" }],
    },
    {
      heading: "Qonunga xilof rad etishning oqibatlari",
      text:
        "Rad etish qonunga xilof bo'lsa nima " +
        "qilish mumkin?\n\n" +
        "Qonun aniq oqibatlarni belgilaydi. " +
        "Rad etilgan shaxs sudga murojaat " +
        "qilishi mumkin va sud ish beruvchi " +
        "zimmasiga MEHNAT SHARTNOMASI TUZISH " +
        "majburiyatini yuklashi mumkin.\n\n" +
        "⚠️ Shuningdek qonunga xilof rad etish " +
        "natijasida yetkazilgan zararni " +
        "qoplash masalasi ham ko'tarilishi " +
        "mumkin.\n\n" +
        "Bu norma \"ish beruvchi xohlaganini " +
        "qiladi\" degan tasavvurni " +
        "buzadi.",
      example:
        "Nomzod millati sababli rad etilgani " +
        "yozma dalil bilan isbotlandi. Sud " +
        "ish beruvchi zimmasiga shartnoma " +
        "tuzish majburiyatini yuklashi " +
        "mumkin.",
      keyPoints: [
        "Qonunga xilof rad etish sudda e'tiroz qilinadi",
        "Sud shartnoma tuzish majburiyatini yuklashi mumkin",
        "Zararni qoplash masalasi ham ko'tariladi",
        "Isbot uchun yozma dalil kerak",
      ],
      warning:
        "Suhbat va yozishmalarni saqlang — " +
        "ular rad etish sababini isbotlaydi.",
      lawRefs: [
        { code: "MK", article: "120" },
        { code: "MK", article: "32" },
      ],
    },
    {
      heading: "Qarindoshlarning birga xizmat qilishi cheklovi",
      text:
        "Davlat tashkilotlarida qarindoshlarning " +
        "birga xizmat qilishi CHEKLANADI.\n\n" +
        "Cheklov odatda bevosita bo'ysunuv yoki " +
        "nazorat munosabatida bo'lgan " +
        "qarindoshlarga tegishli.\n\n" +
        "Maqsad — manfaatlar to'qnashuvining " +
        "va korrupsiya xavfining oldini " +
        "olish.\n\n" +
        "⚠️ Bu cheklov barcha tashkilotlarga " +
        "emas, qonunda ko'rsatilgan doiraga " +
        "tegishli — shuning uchun aniq " +
        "holatni tekshirish kerak.",
      example:
        "Ota davlat tashkilotida bo'lim " +
        "boshlig'i, o'g'li shu bo'limga ishga " +
        "kirmoqchi. Bevosita bo'ysunuv " +
        "bo'lgani uchun cheklov qo'llaniladi.",
      keyPoints: [
        "Davlat tashkilotlarida cheklov mavjud",
        "U bevosita bo'ysunuv munosabatiga tegishli",
        "Maqsad — manfaatlar to'qnashuvining oldini olish",
        "Cheklov doirasi qonunda belgilangan",
      ],
      warning:
        "Cheklov buzilgan holda ishga qabul " +
        "qilish keyinchalik shartnomani bekor " +
        "qilishga olib kelishi mumkin.",
      lawRefs: [{ code: "MK", article: "121" }],
    },
    {
      heading: "Ishga qabul qilish bosqichlari",
      text:
        "Ishga qabul qilish bir imzo emas — " +
        "ketma-ket bosqichlardan iborat " +
        "jarayon va har biri qonunda " +
        "belgilangan.\n\n" +
        "Umumiy tartib: hujjatlarni taqdim " +
        "etish → tanishtirish tartib-taomili " +
        "→ shartnoma shartlari bo'yicha " +
        "kelishuvga erishish → shartnomani " +
        "imzolash → buyruq chiqarish → ishga " +
        "qo'yish.\n\n" +
        "Bosqichlarni bilish muhim: ularning " +
        "birortasi tashlab ketilsa " +
        "keyinchalik nizoda bu sizning " +
        "foydangizga ishlaydi.",
      example:
        "Xodim buyruqsiz va shartnomasiz " +
        "ishlay boshladi. Nizo chiqqanda " +
        "bosqichlar bajarilmagani ish " +
        "beruvchining zaif tomoniga " +
        "aylandi.",
      keyPoints: [
        "Ishga qabul qilish bir necha bosqichdan iborat",
        "Har bir bosqich qonunda belgilangan",
        "Tartib: hujjat → tanishtirish → shartnoma → buyruq",
        "Bosqich tashlab ketilsa nizoda hisobga olinadi",
      ],
      warning:
        "Bosqichlar tugamasdan ishga " +
        "chiqmang — bu keyinchalik isbot " +
        "muammosini keltiradi.",
      lawRefs: [{ code: "MK", article: "122" }],
    },
    {
      heading: "Tanishtirish tartib-taomili",
      text:
        "Ish beruvchi xodimni ishga qabul " +
        "qilishdan OLDIN bir qator narsa " +
        "bilan tanishtirishi SHART.\n\n" +
        "Odatda tanishtiriladi: bajariladigan " +
        "ish; mehnat sharoitlari; ichki " +
        "mehnat tartibi qoidalari; jamoa " +
        "shartnomasi; mehnat muhofazasi va " +
        "xavfsizlik talablari.\n\n" +
        "⚠️ Bu rasmiyatchilik EMAS: " +
        "keyinchalik \"men bilmasdim\" degan " +
        "dalil aynan shu bosqich " +
        "hujjatlashtirilgan-hujjatlashtirilmaganiga " +
        "qarab baholanadi.",
      example:
        "Xodim ichki tartib qoidasini buzgani " +
        "uchun jazolandi, lekin u bu qoidalar " +
        "bilan tanishtirilganini tasdiqlovchi " +
        "imzo yo'q edi — jazo asossiz bo'lib " +
        "qoldi.",
      keyPoints: [
        "Tanishtirish ishga qabul qilishdan oldin o'tkaziladi",
        "Ish, sharoit, ichki qoidalar va xavfsizlik tanishtiriladi",
        "Tanishtirilgani imzo bilan tasdiqlanadi",
        "Imzosiz jazo asossiz bo'lib qolishi mumkin",
      ],
      warning:
        "Nima bilan tanishayotganingizni " +
        "O'QING — imzongiz keyinchalik " +
        "sizga qarshi ishlatilishi mumkin.",
      lawRefs: [{ code: "MK", article: "123" }],
    },
    {
      heading: "Qanday hujjatlar talab qilinadi",
      text:
        "Ishga qabul qilishda talab " +
        "qilinadigan hujjatlar ro'yxati " +
        "qonunda BELGILANGAN. Bu ro'yxatdan " +
        "tashqari hujjat talab qilish " +
        "qonunga zid.\n\n" +
        "Odatiy ro'yxat: shaxsni tasdiqlovchi " +
        "hujjat; mehnat daftarchasi (birinchi " +
        "marta ishga kirayotganlardan " +
        "tashqari); ta'lim yoki malaka " +
        "to'g'risidagi hujjat (ish maxsus " +
        "bilim talab qilsa); harbiy hisobga " +
        "oid hujjat; ayrim ishlarda tibbiy " +
        "ko'rik natijasi.\n\n" +
        "Uy-joy ma'lumotnomasi yoki " +
        "qarindoshlar haqidagi ma'lumot kabi " +
        "hujjatlar talab qilinmaydi.",
      example:
        "Ish beruvchi nomzoddan to'liq tibbiy " +
        "tarixni so'radi. Ish maxsus ko'rikni " +
        "talab qilmasa bunday talab qonunga " +
        "zid.",
      keyPoints: [
        "Hujjatlar ro'yxati qonunda belgilangan",
        "Ro'yxatdan tashqari hujjat talab qilinmaydi",
        "Shaxs hujjati va mehnat daftarchasi asosiy",
        "Ta'lim hujjati ish talabiga qarab so'raladi",
      ],
      warning:
        "Hujjat ASLINI qoldirib ketmang — " +
        "nusxa berish kifoya, asli sizda " +
        "qolishi kerak.",
      lawRefs: [{ code: "MK", article: "124" }],
    },
    {
      heading: "Mehnat daftarchasi",
      text:
        "Mehnat daftarchasi — xodimning mehnat " +
        "faoliyati va ish stajini tasdiqlovchi " +
        "ASOSIY hujjat.\n\n" +
        "Unga kiritiladi: ishga qabul qilish; " +
        "boshqa ishga o'tkazish; " +
        "rag'batlantirishlar; ishdan " +
        "bo'shatish va uning asosi.\n\n" +
        "⚠️ Staj PENSIYA hisoblashda hal " +
        "qiluvchi ahamiyatga ega. Daftarchaga " +
        "yozuv kiritilmagan yillar " +
        "keyinchalik staj sifatida hisobga " +
        "olinmasligi mumkin.\n\n" +
        "Ma'lumotlar raqamli tizimga ham " +
        "kiritiladi — bu qo'shimcha himoya.",
      example:
        "Odam bir necha yil ishladi, lekin " +
        "daftarchaga yozuv kiritilmadi. " +
        "Pensiya rasmiylashtirishda bu yillar " +
        "hisobga olinmadi va sud orqali " +
        "tiklashga to'g'ri keldi.",
      keyPoints: [
        "Daftarcha mehnat faoliyati va stajni tasdiqlaydi",
        "Qabul, o'tkazish va bo'shatish yoziladi",
        "Staj pensiya hisoblashda hal qiluvchi",
        "Ma'lumot raqamli tizimga ham kiritiladi",
      ],
      warning:
        "Har ish joyidan chiqayotganda " +
        "daftarchadagi yozuvni TEKSHIRING — " +
        "xatoni o'sha payt tuzatish oson.",
      lawRefs: [{ code: "MK", article: "125" }],
    },
    {
      heading: "Kelishuvga erishish va shartnomani imzolash",
      text:
        "Shartnoma shartlari bo'yicha " +
        "taraflarning KELISHUVGA erishishi va " +
        "shartnomaning imzolanishi alohida " +
        "moddada tartibga solingan.\n\n" +
        "Kelishuv erkin bo'lishi kerak: " +
        "hech kim majburlanmaydi va har " +
        "bir shart muhokama qilinishi " +
        "mumkin.\n\n" +
        "Amalda ko'pincha tayyor shartnoma " +
        "beriladi va \"imzolang\" deyiladi. " +
        "Lekin shartlarni muhokama qilish " +
        "sizning huquqingiz.\n\n" +
        "⚠️ Imzolashdan oldin O'QING: " +
        "ayniqsa ish haqi, ish vaqti va " +
        "muddat bandlarini.",
      example:
        "Nomzodga tayyor shartnoma berildi va " +
        "\"hamma shunday imzolaydi\" deyildi. " +
        "U shartlarni o'qib chiqib bir bandni " +
        "aniqlashtirishni so'radi — bu uning " +
        "huquqi.",
      keyPoints: [
        "Kelishuv erkin bo'lishi kerak",
        "Har bir shartni muhokama qilish mumkin",
        "Tayyor shartnomani ham o'qish shart",
        "Ish haqi, vaqt va muddat bandlariga e'tibor bering",
      ],
      warning:
        "\"Hamma shunday imzolaydi\" — huquqiy " +
        "dalil emas.",
      lawRefs: [{ code: "MK", article: "126" }],
    },
    {
      heading: "Ishga qabul qilish buyrug'i",
      text:
        "Shartnoma imzolangach ish beruvchi " +
        "xodimni ishga qabul qilish " +
        "to'g'risida BUYRUQ chiqaradi.\n\n" +
        "Buyruq mazmuni shartnomaga MOS " +
        "kelishi kerak — lavozim, ish haqi, " +
        "boshlanish sanasi.\n\n" +
        "Xodim buyruq bilan tanishtiriladi va " +
        "uning nusxasini olishi mumkin.\n\n" +
        "Shuningdek ma'lumotlar mehnat " +
        "daftarchasiga va \"Yagona milliy " +
        "mehnat tizimi\"ga kiritiladi.",
      example:
        "Buyruqda ish haqi shartnomadagidan " +
        "past ko'rsatilgan edi. Xodim buni " +
        "tanishayotganda payqab, tuzatishni " +
        "talab qildi.",
      keyPoints: [
        "Ishga qabul qilish buyruq bilan rasmiylashtiriladi",
        "Buyruq shartnomaga mos kelishi kerak",
        "Xodim buyruq bilan tanishtiriladi",
        "Ma'lumot daftarcha va raqamli tizimga kiritiladi",
      ],
      warning:
        "Buyruq bilan shartnoma orasidagi " +
        "farqni O'SHA PAYT tuzattiring.",
      lawRefs: [{ code: "MK", article: "127" }],
    },
    {
      heading: "Xodimni haqiqatda ishga qo'yish",
      text:
        "Alohida va juda muhim norma: xodim " +
        "ish beruvchining bilishi yoki " +
        "topshirig'i bilan HAQIQATDA ishga " +
        "qo'yilgan bo'lsa, mehnat " +
        "shartnomasi tuzilgan " +
        "hisoblanadi.\n\n" +
        "Ya'ni hujjat rasmiylashtirilmagan " +
        "bo'lsa ham mehnat munosabati " +
        "vujudga keladi.\n\n" +
        "⚠️ Bu norma xodimni himoya qiladi: " +
        "ish beruvchi rasmiylashtirishni " +
        "cho'zib, keyinchalik \"siz bizda " +
        "ishlamagansiz\" deb ayta " +
        "olmaydi.\n\n" +
        "Lekin isbot yuki xodimda bo'ladi — " +
        "shuning uchun dalil to'plash muhim.",
      example:
        "Odam ikki hafta ishladi, keyin " +
        "\"sizni olmaymiz\" deyildi va haq " +
        "to'lanmadi. Haqiqatda ishga " +
        "qo'yilganini propusk, yozishma va " +
        "guvohlar bilan isbotlash mumkin.",
      keyPoints: [
        "Haqiqatda ishga qo'yilish shartnoma tuzilgan deb hisoblanadi",
        "Hujjat bo'lmasa ham munosabat vujudga keladi",
        "Norma xodimni himoya qiladi",
        "Isbot yuki xodimda — dalil to'plang",
      ],
      warning:
        "Rasmiylashtirilmasdan ishga " +
        "chiqsangiz birinchi kundan dalil " +
        "yig'ing: propusk, topshiriq, " +
        "yozishma, guvoh.",
      lawRefs: [{ code: "MK", article: "128" }],
    },
    {
      heading: "Dastlabki sinov: qachon belgilanadi",
      text:
        "Ish beruvchi xodimning ishga " +
        "mosligini tekshirish uchun DASTLABKI " +
        "SINOV belgilashi mumkin.\n\n" +
        "⚠️ ASOSIY QOIDA: sinov faqat " +
        "SHARTNOMADA yozilgan bo'lsa amal " +
        "qiladi. Shartnomada u haqda hech " +
        "narsa yozilmagan bo'lsa, xodim " +
        "SINOVSIZ ishga qabul qilingan " +
        "hisoblanadi.\n\n" +
        "Ayrim toifadagi xodimlarga sinov " +
        "belgilash umuman taqiqlanadi — " +
        "masalan homilador ayollar va " +
        "voyaga yetmaganlar.",
      example:
        "Ish beruvchi og'zaki \"uch oy sinov\" " +
        "dedi, shartnomada yozilmadi. Sinov " +
        "amal qilmaydi — xodim sinovsiz " +
        "qabul qilingan hisoblanadi.",
      keyPoints: [
        "Sinov faqat shartnomada yozilgan bo'lsa amal qiladi",
        "Yozilmasa xodim sinovsiz qabul qilingan hisoblanadi",
        "Ayrim toifalarga sinov belgilash taqiqlanadi",
        "Og'zaki kelishuv sinov o'rnatmaydi",
      ],
      warning:
        "Shartnomada sinov bandi bor-yo'qligini " +
        "imzolashdan oldin tekshiring.",
      lawRefs: [{ code: "MK", article: "129" }],
    },
    {
      heading: "Sinov muddati va uning davomida amal qiladigan qoidalar",
      text:
        "Sinov muddati qonunda CHEKLANGAN — " +
        "uni cheksiz uzaytirib bo'lmaydi. " +
        "Aniq muddat quyidagi qonun " +
        "matnida.\n\n" +
        "⚠️ ENG MUHIM QOIDA: sinov davrida " +
        "xodimga mehnat to'g'risidagi " +
        "qonunchilik TO'LIQ tatbiq " +
        "etiladi.\n\n" +
        "Ya'ni ish haqi kamaytirilmaydi, " +
        "ta'til huquqi hisoblanadi, barcha " +
        "kafolatlar ishlaydi va staj " +
        "hisoblanadi.\n\n" +
        "\"Sinovdasiz, shuning uchun kamroq " +
        "to'laymiz\" degan amaliyot qonunga " +
        "zid.",
      example:
        "Ish beruvchi sinov davrida ish haqini " +
        "yarim miqdorda to'ladi. Bu qonunga " +
        "zid — sinov ish haqini kamaytirish " +
        "uchun asos emas.",
      keyPoints: [
        "Sinov muddati qonunda cheklangan",
        "Sinov davrida barcha mehnat kafolatlari ishlaydi",
        "Ish haqi kamaytirilmaydi",
        "Staj va ta'til huquqi hisoblanadi",
      ],
      warning:
        "Sinov davrida kam to'lash — ish " +
        "haqini to'liq to'lamaslik " +
        "hisoblanadi.",
      lawRefs: [
        { code: "MK", article: "130" },
        { code: "MK", article: "131" },
      ],
    },
    {
      heading: "Sinov natijasi",
      text:
        "Sinov muddati tugagach natija " +
        "baholanadi.\n\n" +
        "Natija QONIQARLI bo'lsa xodim " +
        "oddiy tartibda ishlashda davom " +
        "etadi — alohida hujjat " +
        "rasmiylashtirish shart emas.\n\n" +
        "Natija QONIQARSIZ bo'lsa ish " +
        "beruvchi shartnomani bekor qilishi " +
        "mumkin — lekin buni ASOSLASHI va " +
        "belgilangan tartibga rioya qilishi " +
        "shart.\n\n" +
        "⚠️ \"Sinovdan o'tmadingiz\" degan " +
        "quruq ibora yetarli emas: qanday " +
        "talablarga javob bermagani " +
        "ko'rsatilishi kerak.",
      example:
        "Xodimga \"sinovdan o'tmadingiz\" " +
        "deyildi, hech qanday asos " +
        "ko'rsatilmadi va hujjat berilmadi. " +
        "Bunday bo'shatishga e'tiroz " +
        "bildirish mumkin.",
      keyPoints: [
        "Qoniqarli natijada xodim oddiy tartibda ishlaydi",
        "Qoniqarsiz natijada shartnoma bekor qilinishi mumkin",
        "Bo'shatish asoslangan bo'lishi shart",
        "Belgilangan tartibga rioya qilinadi",
      ],
      warning:
        "Sinov natijasi bo'yicha bo'shatilsangiz " +
        "ASOSNI yozma so'rang — u qonuniy " +
        "bo'lishi kerak.",
      lawRefs: [{ code: "MK", article: "132" }],
    },
  ],
};

module.exports = { LESSON };
