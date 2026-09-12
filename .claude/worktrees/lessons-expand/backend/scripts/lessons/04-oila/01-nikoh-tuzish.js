"use strict";
/**
 * OILA MODULI — 1-DARS: NIKOHNI TUZISH
 *
 * Mavzular soni QONUN BILAN belgilangan: Oila kodeksida aynan
 * nikoh tuzishga oid moddalar (13–18, 51–53, 57–59, 212–217)
 * qamrab olindi. Boshqa darslarning moddalari (ajralish, mulk,
 * aliment) BU YERGA OLIB KELINMAGAN — ular o'z darslarida.
 */

const LESSON = {
  key: "nikoh-tuzish",
  category: "family",
  level: "basic",
  order: 4010,
  title: "Nikohni tuzish: shartlar va tartib",
  desc:
    "Nikoh qayerda va qanday tuziladi, qanday shartlar talab " +
    "qilinadi, qanday hujjatlar kerak va nikohga monelik " +
    "qiladigan holatlar qaysilar.",
  objectives: [
    "Nikoh qayerda rasmiy tuzilishini va diniy marosim maqomini bilasiz",
    "Nikoh yoshi, ixtiyoriylik va tibbiy ko'rik talablarini bilasiz",
    "Nikohga monelik qiladigan holatlarni sanab bera olasiz",
    "Qanday hujjat kerakligini va guvohnoma nima berishini bilasiz",
  ],
  practicalSteps: [
    "Nikohni FHDYo organida rasmiy ro'yxatdan o'tkazing",
    "Ariza berishdan oldin kerakli hujjatlar ro'yxatini aniqlashtiring",
    "Familiya tanlash masalasini oldindan hal qiling",
    "Nikoh guvohnomasini xavfsiz joyda saqlang va raqamli nusxasini oling",
  ],
  sections: [
    {
      heading: "Nikoh qayerda tuziladi",
      text:
        "Oila kodeksi bu masalada aniq: nikoh fuqarolik " +
        "holati dalolatnomalarini qayd etish (FHDYo) " +
        "organlarida tuziladi.\n\n" +
        "Diniy marosim shaxsning shaxsiy ishi, lekin u " +
        "davlat ro'yxatining O'RNINI BOSMAYDI.\n\n" +
        "Amaliy oqibati jiddiy: ro'yxatdan o'tmagan " +
        "munosabatda er-xotinning umumiy mulki rejimi, " +
        "bir-biridan ta'minot olish va meros huquqi " +
        "UMUMAN yuzaga kelmaydi.",
      example:
        "Juftlik faqat diniy marosim o'tkazdi va yillar " +
        "davomida mol-mulk orttirdi. Ajralishda bu " +
        "mol-mulk umumiy mulk qoidalari bo'yicha " +
        "bo'linmaydi — huquqiy ma'noda nikoh yo'q edi.",
      keyPoints: [
        "Nikoh FHDYo organida tuziladi — yagona rasmiy yo'l",
        "Diniy marosim davlat ro'yxatining o'rnini bosmaydi",
        "Ro'yxatsiz umumiy mulk va meros huquqi yuzaga kelmaydi",
        "Bolalarning huquqlari esa bunga bog'liq emas",
      ],
      warning:
        "\"Keyin rasmiylashtiramiz\" degan yondashuv " +
        "yillarga cho'ziladi va muammo eng og'ir paytda " +
        "chiqadi.",
      lawRefs: [
        { code: "OK", article: "13" },
        { code: "OK", article: "18" },
      ],
    },
    {
      heading: "Nikoh tuzishning ixtiyoriyligi",
      text:
        "Nikoh tuzish IXTIYORIY va bo'lajak er-xotin " +
        "o'z roziligini SHAXSAN bildirishi kerak.\n\n" +
        "\"Shaxsan\" so'zi hal qiluvchi: rozilikni " +
        "ota-ona, aka-uka yoki vakil orqali berish " +
        "mumkin emas. FHDYo organi ikkala tomonni " +
        "ko'rishi va roziligini eshitishi shart.\n\n" +
        "Majburlash jismoniy bo'lishi shart emas — " +
        "ruhiy bosim, shantaj va qattiq ta'sir ham " +
        "shunga kiradi.",
      example:
        "Qiz oilasining bosimi ostida rozi bo'ldi. " +
        "Keyinchalik u nikohni majburlab tuzilgan deb " +
        "sudda e'tiroz bildirishi mumkin — buning " +
        "uchun guvohlar va yozishmalar kerak.",
      keyPoints: [
        "Rozilik shaxsan bildiriladi, vakil orqali bo'lmaydi",
        "Ikkala tomon FHDYo organida shaxsan hozir bo'ladi",
        "Ruhiy bosim ham majburlash hisoblanadi",
        "Bosim bo'lsa uni hujjatlashtirib borish kerak",
      ],
      warning:
        "Ro'yxatga olish paytida jim turish rozilik " +
        "hisoblanadi. Rozi bo'lmasangiz — o'sha yerda " +
        "ochiq ayting.",
      lawRefs: [{ code: "OK", article: "14" }],
    },
    {
      heading: "Nikoh yoshi",
      text:
        "Qonun nikoh tuzish uchun eng kam yoshni " +
        "belgilaydi va u erkak hamda ayol uchun BIR " +
        "XIL.\n\n" +
        "Nima uchun chegara bor? Nikoh jiddiy huquqiy " +
        "majburiyat: umumiy mulk, bolalar oldidagi " +
        "javobgarlik, ta'minot. Buni ongli zimmasiga " +
        "olish uchun yetuklik kerak.\n\n" +
        "Uzrli sabab bo'lganda yoshni pasaytirish " +
        "imkoniyati ham bor, lekin bu ISTISNO va " +
        "belgilangan tartibda amalga oshiriladi.\n\n" +
        "Aniq yosh quyidagi qonun matnida.",
      example:
        "Yigit va qiz turmush qurmoqchi, lekin biri " +
        "chegaradan kichik. FHDYo arizani shunchaki " +
        "qabul qila olmaydi — avval yoshni pasaytirish " +
        "masalasi hal qilinishi kerak.",
      keyPoints: [
        "Nikoh yoshi erkak va ayol uchun bir xil",
        "Chegara ongli javobgarlikni ta'minlash uchun kerak",
        "Uzrli sabab bo'lganda pasaytirish mumkin",
        "Bu istisno, avtomatik emas",
      ],
      warning:
        "Yoshga yetmasdan o'tkazilgan diniy marosim " +
        "hech qanday huquq bermaydi.",
      lawRefs: [{ code: "OK", article: "15" }],
    },
    {
      heading: "Nikohga monelik qiladigan holatlar",
      text:
        "Yosh va ixtiyoriylik shartlari bajarilsa ham, " +
        "ba'zi holatlarda nikoh tuzishga YO'L " +
        "QO'YILMAYDI.\n\n" +
        "Asosiy guruhlar: tomonlardan biri allaqachon " +
        "ro'yxatdan o'tgan nikohda bo'lsa; yaqin " +
        "qarindoshlar o'rtasida; farzandlikka oluvchi " +
        "va olingan o'rtasida; tomonlardan biri sud " +
        "tomonidan muomalaga layoqatsiz deb topilgan " +
        "bo'lsa.\n\n" +
        "Ro'yxat qat'iy va istisnosiz.",
      example:
        "Erkak avvalgi nikohdan rasman ajrashmasdan " +
        "yangi nikoh tuzmoqchi. FHDYo rad etadi; " +
        "yashirib qayd ettirilsa ham nikoh " +
        "keyinchalik haqiqiy emas deb topiladi.",
      keyPoints: [
        "Mavjud ro'yxatdan o'tgan nikoh to'sqinlik qiladi",
        "Yaqin qarindoshlar o'rtasida nikoh tuzilmaydi",
        "Farzandlikka oluvchi va olingan o'rtasida taqiq bor",
        "Muomalaga layoqatsiz shaxs nikoh tuza olmaydi",
      ],
      warning:
        "Avvalgi nikohdan \"amalda ajrashib ketish\" " +
        "yetarli emas — ajralish RASMAN qayd " +
        "etilishi shart.",
      lawRefs: [{ code: "OK", article: "16" }],
    },
    {
      heading: "Qarindoshlik darajalari",
      text:
        "\"Yaqin qarindoshlik\" aniq nimani anglatadi? " +
        "Qonun qarindoshlikni ikki turga ajratadi: YOT " +
        "ARALASHMAGAN (bir ota va bir onadan) va YOT " +
        "ARALASHGAN (faqat bir ota yoki faqat bir " +
        "onadan). Nikoh taqiqi ikkalasiga ham " +
        "tegishli.\n\n" +
        "Alohida tushuncha — QAYIN-BO'YINCHILIK va " +
        "QUDA-ANDACHILIK. Bu qon-qarindoshlik emas, " +
        "nikoh orqali paydo bo'ladigan yaqinlik va " +
        "unga nisbatan qoidalar boshqacha.",
      example:
        "Kundalik tilda \"qarindosh\" so'zi juda keng " +
        "ishlatiladi. Qonunda esa uning aniq huquqiy " +
        "chegarasi bor — shubha bo'lsa FHDYo " +
        "organidan yozma tushuntirish olish kerak.",
      keyPoints: [
        "Qarindoshlik yot aralashgan va aralashmagan turlarga bo'linadi",
        "Nikoh taqiqi ikkala turga ham tegishli",
        "Qayin-bo'yinchilik qon-qarindoshlik emas",
        "Shubhali holatda yozma tushuntirish so'rang",
      ],
      warning:
        "\"Uzoq qarindosh\" degan tushuncha qonunda " +
        "yo'q — muhimi qarindoshlik DARAJASI.",
      lawRefs: [
        { code: "OK", article: "57" },
        { code: "OK", article: "58" },
        { code: "OK", article: "59" },
      ],
    },
    {
      heading: "Nikohlanuvchilarni tibbiy ko'rikdan o'tkazish",
      text:
        "Nikohlanuvchi shaxslar davlat sog'liqni " +
        "saqlash muassasalarida tibbiy ko'rikdan " +
        "o'tkaziladi.\n\n" +
        "Maqsad kimnidir nikohdan chetlatish EMAS. " +
        "Maqsad — tomonlar bir-birining sog'lig'i " +
        "haqida xabardor bo'lishi va kelajakdagi " +
        "bolalar uchun mumkin bo'lgan xavflarni " +
        "oldindan bilishi.\n\n" +
        "Muhim: ko'rik natijasi TIBBIY SIR " +
        "hisoblanadi va faqat ko'rikdan o'tgan " +
        "shaxsning roziligi bilan boshqa tomonga " +
        "aytilishi mumkin.",
      example:
        "Juftlik ko'rikdan o'tdi va biri irsiy " +
        "kasallik tashuvchisi ekani aniqlandi. Bu " +
        "nikohga to'sqinlik qilmaydi, lekin " +
        "ikkalasi vaziyatni bilgan holda qaror " +
        "qabul qiladi.",
      keyPoints: [
        "Ko'rik davlat sog'liqni saqlash muassasalarida o'tkaziladi",
        "Maqsad chetlatish emas, xabardor qilish",
        "Natija tibbiy sir hisoblanadi",
        "Boshqa tomonga faqat rozilik bilan aytiladi",
      ],
      warning:
        "Sog'liq haqidagi ma'lumotni ataylab yashirish " +
        "keyinchalik nikohni haqiqiy emas deb topish " +
        "uchun asos bo'lishi mumkin.",
      lawRefs: [{ code: "OK", article: "17" }],
    },
    {
      heading: "Nikohni qayd etish joyi va vaqti",
      text:
        "Nikoh tuzilganligini qayd etish joyi va " +
        "vaqti alohida moddada belgilangan.\n\n" +
        "Umumiy tartib: tomonlar birgalikda ariza " +
        "beradi, belgilangan muddat kutiladi va " +
        "shundan keyin nikoh qayd etiladi. Kutish " +
        "muddati tasodifiy emas — u qarorni o'ylab " +
        "ko'rish uchun beriladi.\n\n" +
        "Alohida hollarda (uzrli sabab bo'lganda) " +
        "muddat va joy o'zgarishi mumkin — bu ham " +
        "alohida moddada nazarda tutilgan.",
      example:
        "Juftlik ariza berdi, lekin biri chet elga " +
        "uzoq muddatga ketishi kerak edi. Bunday " +
        "uzrli holatda muddatni qisqartirish " +
        "masalasi ko'riladi — lekin ariza va asos " +
        "talab qilinadi.",
      keyPoints: [
        "Ariza ikkala tomon tomonidan birgalikda beriladi",
        "Kutish muddati qarorni o'ylab ko'rish uchun berilgan",
        "Uzrli sabab bo'lganda muddat o'zgarishi mumkin",
        "Alohida hollarda qayd etish joyi ham boshqacha bo'ladi",
      ],
      warning:
        "Muddatni qisqartirish avtomatik emas — " +
        "yozma ariza va asosni tasdiqlovchi hujjat " +
        "kerak.",
      lawRefs: [
        { code: "OK", article: "212" },
        { code: "OK", article: "217" },
      ],
    },
    {
      heading: "Qanday hujjatlar taqdim etiladi",
      text:
        "Nikohni qayd etish uchun taqdim etiladigan " +
        "hujjatlar ro'yxati alohida moddada " +
        "belgilangan.\n\n" +
        "Odatda talab qilinadi: shaxsni tasdiqlovchi " +
        "hujjat; avvalgi nikoh tugaganini tasdiqlovchi " +
        "hujjat (agar bo'lgan bo'lsa); tibbiy ko'rik " +
        "bo'yicha ma'lumot; belgilangan boshqa " +
        "hujjatlar.\n\n" +
        "Aniq ro'yxat quyidagi qonun matnida — uni " +
        "oldindan tekshirish vaqt tejaydi.",
      example:
        "Tomonlardan biri avval nikohda bo'lgan, " +
        "lekin ajralish guvohnomasini olmagan edi. " +
        "Hujjat yo'qligi sababli ariza qabul " +
        "qilinmadi.",
      keyPoints: [
        "Hujjatlar ro'yxati qonunda belgilangan",
        "Shaxsni tasdiqlovchi hujjat majburiy",
        "Avvalgi nikoh tugaganini tasdiqlash kerak",
        "Ro'yxatni oldindan tekshirish vaqt tejaydi",
      ],
      warning:
        "Avvalgi ajralish guvohnomasini oldindan " +
        "olib qo'ying — usiz yangi nikoh qayd " +
        "etilmaydi.",
      lawRefs: [{ code: "OK", article: "213" }],
    },
    {
      heading: "Nikohga kirayotganda familiya tanlash",
      text:
        "Nikoh qayd etilayotganda tomonlar familiya " +
        "masalasini hal qiladi va bu huquq " +
        "ikkalasiga ham TENG beriladi.\n\n" +
        "Odatiy variantlar: birining familiyasini " +
        "umumiy qilib olish; har biri o'z " +
        "familiyasida qolish; qonunda nazarda " +
        "tutilgan boshqa tartibda familiya olish.\n\n" +
        "Tanlov guvohnomaga yoziladi. Keyinchalik " +
        "o'zgartirish mumkin, lekin bu alohida " +
        "tartibda va alohida ariza bilan bo'ladi.",
      example:
        "Xotin erining familiyasini oldi, lekin " +
        "kvartira hujjati eski familiyada qoldi. " +
        "Bitim tuzmoqchi bo'lganda familiya " +
        "o'zgarganini tasdiqlovchi hujjat talab " +
        "qilindi.",
      keyPoints: [
        "Familiya tanlash huquqi ikkala tomonga teng",
        "Har biri o'z familiyasida qolishi mumkin",
        "Tanlov nikoh qayd etilayotganda amalga oshiriladi",
        "O'zgartirilsa boshqa hujjatlarni ham yangilash kerak",
      ],
      warning:
        "Familiya o'zgartirilgach mulk va bank " +
        "hujjatlarini yangilamaslik keyinchalik " +
        "bitimga to'sqinlik qiladi.",
      lawRefs: [
        { code: "OK", article: "214" },
        { code: "OK", article: "20" },
      ],
    },
    {
      heading: "Nikoh tuzilganligi to'g'risidagi guvohnoma",
      text:
        "Nikoh qayd etilgach tomonlarga guvohnoma " +
        "beriladi. Bu oilaviy holatni tasdiqlovchi " +
        "ASOSIY hujjat.\n\n" +
        "U kerak bo'ladigan holatlar ko'p: mulkni " +
        "rasmiylashtirishda, bola tug'ilganda, meros " +
        "masalasida, bank va notarial harakatlarda, " +
        "ijtimoiy to'lovlarni rasmiylashtirishda.\n\n" +
        "Guvohnoma yo'qolsa FHDYo organida qayd " +
        "yozuvi saqlanadi va takroriy guvohnoma " +
        "olish mumkin — lekin bu vaqt oladi.",
      example:
        "Er-xotin kvartira sotib olmoqchi. Notarius " +
        "umumiy mulk rejimini aniqlash uchun nikoh " +
        "guvohnomasini so'radi; hujjat bo'lmagani " +
        "uchun bitim to'xtadi.",
      keyPoints: [
        "Guvohnoma oilaviy holatni tasdiqlovchi asosiy hujjat",
        "U mulk, meros va bank masalalarida talab qilinadi",
        "Yo'qolsa takroriy nusxa olish mumkin",
        "Raqamli nusxa saqlash vaqt tejaydi",
      ],
      warning:
        "Guvohnoma nusxasini ishonchsiz shaxslarga " +
        "bermang — u shaxsiy ma'lumotlaringizni " +
        "o'z ichiga oladi.",
      lawRefs: [
        { code: "OK", article: "215" },
        { code: "OK", article: "202" },
      ],
    },
    {
      heading: "Er-xotin huquq va majburiyatlarining vujudga kelishi",
      text:
        "Er-xotinning huquq va majburiyatlari nikoh " +
        "FHDYo organida qayd etilgan KUNDAN boshlab " +
        "vujudga keladi.\n\n" +
        "Bu sana juda muhim: keyinchalik mulkni " +
        "bo'lishda aynan shundan hisoblanadi.\n\n" +
        "Shu kundan boshlab paydo bo'ladi: umumiy " +
        "mulk rejimi; bir-biridan ta'minot olish " +
        "imkoniyati; meros huquqi (er-xotin " +
        "sifatida); nikoh shartnomasi tuzish " +
        "imkoniyati.",
      example:
        "Nikohdan bir hafta oldin olingan avtomobil " +
        "— shaxsiy mulk. Bir hafta keyin olingani " +
        "esa umumiy mulk. Farq ikki haftada, oqibat " +
        "butunlay boshqacha.",
      keyPoints: [
        "Huquqlar nikoh qayd etilgan kundan boshlanadi",
        "Bu sana mulkni bo'lishda hal qiluvchi",
        "Umumiy mulk rejimi shu kundan amal qiladi",
        "Birga yashash boshlangan sana hisobga olinmaydi",
      ],
      warning:
        "Nikoh guvohnomasidagi SANAGA e'tibor " +
        "bering — u ko'p masalada asosiy dalil " +
        "bo'ladi.",
      lawRefs: [{ code: "OK", article: "18" }],
    },
    {
      heading: "Fuqaroligi bo'lmagan shaxslar bilan nikoh",
      text:
        "Chet el fuqarolari va fuqaroligi bo'lmagan " +
        "shaxslar bilan nikoh tuzish alohida " +
        "moddada tartibga solingan.\n\n" +
        "Umumiy qoidalar saqlanadi (yosh, " +
        "ixtiyoriylik, monelik), lekin qo'shimcha " +
        "hujjatlar talab qilinishi mumkin: " +
        "shaxsning oilaviy holati to'g'risida " +
        "o'z davlatidan ma'lumotnoma, " +
        "legalizatsiya yoki apostil, notarial " +
        "tasdiqlangan tarjima.\n\n" +
        "Bunday nikoh ham FHDYo organida qayd " +
        "etiladi.",
      example:
        "Chet el fuqarosi bilan nikoh tuzilmoqchi. " +
        "Uning o'z davlatida boshqa nikohda " +
        "emasligini tasdiqlovchi hujjat talab " +
        "qilindi va u legalizatsiya qilinishi " +
        "kerak bo'ldi.",
      keyPoints: [
        "Chet el fuqarolari bilan nikoh alohida tartibga solingan",
        "Umumiy shartlar (yosh, monelik) saqlanadi",
        "Qo'shimcha hujjatlar talab qilinishi mumkin",
        "Hujjatlar legalizatsiya va tarjima talab qilishi mumkin",
      ],
      warning:
        "Chet el hujjatlarini tayyorlash oylar " +
        "olishi mumkin — jarayonni oldindan " +
        "boshlang.",
      lawRefs: [
        { code: "OK", article: "216" },
        { code: "OK", article: "234" },
      ],
    },
    {
      heading: "Nikoh yoshiga yetmasdan tuzilgan nikoh",
      text:
        "Yosh chegarasi buzilgan holda tuzilgan " +
        "nikoh HAQIQIY EMAS deb topilishi mumkin.\n\n" +
        "Lekin qonun mexanik ishlamaydi: sud " +
        "vaziyatni baholaydi. Agar haqiqiy emas " +
        "deb topish voyaga yetmagan tomonning " +
        "manfaatlariga zid bo'lsa yoki u nikohni " +
        "davom ettirishni xohlasa, sud boshqacha " +
        "qaror chiqarishi mumkin.\n\n" +
        "Mantiq muhim: qonunning maqsadi yosh " +
        "tomonni jazolash emas, HIMOYA QILISH.",
      example:
        "Nikoh yoshga yetmasdan tuzilgan, oradan " +
        "vaqt o'tib bola tug'ilgan. Haqiqiy emas " +
        "deb topish ona va bolani himoyasiz " +
        "qoldirishi mumkin — sud shuni hisobga " +
        "oladi.",
      keyPoints: [
        "Yosh buzilgan nikoh haqiqiy emas deb topilishi mumkin",
        "Sud voyaga yetmagan tomon manfaatini hisobga oladi",
        "Maqsad jazolash emas, himoya qilish",
        "Bolalarning huquqlari har qanday holatda saqlanadi",
      ],
      warning:
        "Nikoh haqiqiy emas deb topilsa mulkiy " +
        "himoya ham yo'qoladi.",
      lawRefs: [
        { code: "OK", article: "51" },
        { code: "OK", article: "49" },
      ],
    },
    {
      heading: "Majburlab va monelik bilan tuzilgan nikoh",
      text:
        "Nikoh tuzish shartlari buzilganda uni " +
        "haqiqiy emas deb topish uchun alohida " +
        "moddalar mavjud.\n\n" +
        "MAJBURLAB tuzilgan nikoh — ixtiyoriylik " +
        "sharti buzilgan holat. MONELIK qiladigan " +
        "holat mavjud bo'lganda tuzilgan nikoh " +
        "esa taqiq buzilgan holat.\n\n" +
        "Har ikkalasida ham nikohni haqiqiy emas " +
        "deb topishni faqat SUD amalga " +
        "oshiradi.\n\n" +
        "Bunday nikoh BOSHIDANOQ bo'lmagan deb " +
        "hisoblanadi — bu ajralishdan butunlay " +
        "boshqa narsa.",
      example:
        "Erkak avvalgi nikohini yashirib yangi " +
        "nikoh qayd ettirdi. Monelik qiladigan " +
        "holat mavjud bo'lgani uchun nikoh " +
        "haqiqiy emas deb topilishi mumkin.",
      keyPoints: [
        "Majburlab tuzilgan nikoh haqiqiy emas deb topiladi",
        "Monelik buzilgan nikoh ham shunday",
        "Buni faqat sud amalga oshiradi",
        "Nikoh boshidanoq bo'lmagan deb hisoblanadi",
      ],
      warning:
        "Bu ajralish EMAS: haqiqiy emas deb " +
        "topilganda umumiy mulk rejimi umuman " +
        "yuzaga kelmagan hisoblanadi.",
      lawRefs: [
        { code: "OK", article: "52" },
        { code: "OK", article: "53" },
        { code: "OK", article: "50" },
      ],
    },
  ],
};

module.exports = { LESSON };
