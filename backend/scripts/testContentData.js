"use strict";
/**
 * TESTLAR KONTENTI — mavjud testlarga qo'shiladigan savollar va yangi testlar.
 *
 * Bu fayl `scripts/expandTests.js` uchun manba. Server ishga tushganda
 * AVTOMATIK qo'llanmaydi (qo'lda ishga tushiriladi) — sabab: admin panel
 * orqali o'chirilgan savol har server qayta ishga tushganda qaytib
 * kelmasligi kerak.
 *
 * ⚠️ HUQUQIY ANIQLIK QOIDASI (loyihaning umumiy qoidasi):
 * savol va izohlarda ANIQ MODDA RAQAMI, MUDDAT yoki SUMMA ATAYLAB
 * yozilmagan — qonun tahriri o'zgarsa test noto'g'ri bo'lib qolardi va
 * foydalanuvchini chalg'itardi. O'rniga barqaror TAMOYILLAR tekshiriladi;
 * aniq raqam kerak bo'lganda foydalanuvchi Qonunlar kutubxonasiga yoki
 * AI yordamchiga murojaat qiladi.
 *
 * Tuzilma:
 *   match     — mavjud testni sarlavhasi bo'yicha topish (RegExp).
 *               Topilmasa YANGI test yaratiladi (`title`/`desc` bilan).
 *   questions — qo'shiladigan savollar. Matni bo'yicha mavjud savol bilan
 *               mos kelganlari QO'SHILMAYDI (skript qayta ishga
 *               tushirilsa takrorlanmasin).
 *
 * `correct` — to'g'ri javob indeksi (0 dan). Ataylab turli o'rinlarda:
 * eski savollarning HAMMASIDA to'g'ri javob 1-indeksda edi.
 */

const TEST_CONTENT = [
  /* ══════════════════════════════════════════════════════════════
     1. MEHNAT HUQUQI (mavjud test — savollar qo'shiladi)
     ══════════════════════════════════════════════════════════════ */
  {
    match: /mehnat/i,
    title: "Mehnat huquqi",
    desc: "Mehnat shartnomasi, ish vaqti, ta'til, ish haqi va ishdan bo'shatish.",
    order: 0,
    questions: [
      {
        q: "Sinov muddati haqida qaysi javob to'g'ri?",
        options: [
          "Sinov muddati barcha xodimlar uchun majburiy",
          "Sinov muddatida xodimning mehnat huquqlari amal qilmaydi",
          "Sinov muddati mehnat shartnomasida aniq ko'rsatilgan bo'lsagina qo'llaniladi",
          "Sinov muddati og'zaki belgilanadi",
        ],
        correct: 2,
        explain:
          "Sinov shartnomada ko'rsatilmagan bo'lsa, xodim sinovsiz qabul qilingan hisoblanadi. Sinov davrida ham xodim to'liq mehnat huquqlariga ega bo'ladi.",
      },
      {
        q: "Xodim o'z tashabbusi bilan ishdan bo'shamoqchi bo'lsa nima qilishi kerak?",
        options: [
          "Ish beruvchini belgilangan muddatda yozma ogohlantirishi",
          "Shunchaki ishga chiqmay qo'yishi",
          "Faqat bevosita rahbariga og'zaki aytishi",
          "Yil oxirini kutishi",
        ],
        correct: 0,
        explain:
          "Yozma ariza (nusxasi o'zida qolgan holda) — bo'shash tartibi buzilmaganini isbotlovchi asosiy hujjat.",
      },
      {
        q: "Ish vaqtidan tashqari ishlash qanday rasmiylashtirilishi kerak?",
        options: [
          "Rahbarning og'zaki iltimosi yetarli",
          "Umuman rasmiylashtirilmaydi",
          "Faqat xodimning xohishiga qoldiriladi",
          "Ish beruvchining hujjati bilan va oshirilgan haq to'lash bilan",
        ],
        correct: 3,
        explain:
          "Ish vaqtidan tashqari mehnat hujjat bilan qayd etiladi va unga oshirilgan miqdorda haq to'lanadi.",
      },
      {
        q: "Homilador ayollar va kichik yoshli bola tarbiyalayotgan xodimlarga nisbatan qoida qanday?",
        options: [
          "Ularga umumiy qoidalar hech qanday farqsiz qo'llanadi",
          "Ular uchun qo'shimcha kafolatlar va cheklovlar belgilangan",
          "Ularni istalgan vaqtda ishdan bo'shatish mumkin",
          "Ular ta'til olish huquqiga ega emas",
        ],
        correct: 1,
        explain:
          "Qonun bu toifadagi xodimlar uchun ishdan bo'shatish, tungi va qo'shimcha ishga jalb qilishda alohida kafolatlar nazarda tutadi.",
      },
      {
        q: "Mehnat nizosi kelib chiqsa, xodim qayerga murojaat qilishi mumkin?",
        options: [
          "Faqat ish beruvchining o'ziga",
          "Faqat ijtimoiy tarmoqlarga",
          "Mehnat sohasidagi nazorat organiga yoki sudga",
          "Hech qayerga — mehnat nizolari ko'rilmaydi",
        ],
        correct: 2,
        explain:
          "Mehnat nizolari mehnat bo'yicha davlat nazorati organi yoki sud orqali hal qilinadi.",
      },
      {
        q: "Ish beruvchi mehnat shartnomasining muhim shartlarini bir tomonlama o'zgartira oladimi?",
        options: [
          "Ha, istalgan vaqtda va ogohlantirishsiz",
          "Faqat ish haqini kamaytirishi mumkin",
          "Yo'q — xodim oldindan xabardor qilinadi va roziligi talab etiladi",
          "Faqat yangi xodimlarga nisbatan",
        ],
        correct: 2,
        explain:
          "Mehnat shartlarining o'zgarishi haqida xodim oldindan ogohlantiriladi; rozi bo'lmasa, oqibatlari qonunda belgilangan tartibda hal qilinadi.",
      },
      {
        q: "Mehnat shartnomasi rasmiylashtirilmasdan ishlash nimaga olib keladi?",
        options: [
          "Xodim ko'proq huquqqa ega bo'ladi",
          "Hech qanday oqibati yo'q",
          "Ish haqi avtomatik oshadi",
          "Ish staji, ta'til va ijtimoiy kafolatlar hujjat bilan tasdiqlanmay qoladi",
        ],
        correct: 3,
        explain:
          "Rasmiylashtirilmagan mehnat munosabatida nizo chiqqanda ishlagan davrni va kelishilgan ish haqini isbotlash juda qiyinlashadi.",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     2. OILA HUQUQI (mavjud test)
     ══════════════════════════════════════════════════════════════ */
  {
    match: /oila/i,
    title: "Oila huquqi",
    desc: "Nikoh, ajralish, mol-mulk, aliment va bolalar huquqlari.",
    order: 1,
    questions: [
      {
        q: "Nikoh tuzish uchun asosiy shartlardan biri nima?",
        options: [
          "Ikkala tomonning ixtiyoriy roziligi",
          "Qarindoshlarning yozma ruxsati",
          "Umumiy mulk mavjudligi",
          "To'y marosimi o'tkazilgani",
        ],
        correct: 0,
        explain:
          "Nikoh — ixtiyoriy ittifoq. Majburlash bilan tuzilgan nikoh haqiqiy emas deb topilishi mumkin.",
      },
      {
        q: "Nikoh shartnomasi asosan nimani belgilaydi?",
        options: [
          "Bolalar nechta bo'lishini",
          "Er-xotinning mulkiy huquq va majburiyatlarini",
          "Nikoh necha yil davom etishini",
          "Uy ishlarini kim bajarishini",
        ],
        correct: 1,
        explain:
          "Nikoh shartnomasi mulkiy munosabatlarni tartibga soladi; u shaxsiy huquqlarni cheklay olmaydi.",
      },
      {
        q: "Ajralish qayerda rasmiylashtiriladi?",
        options: [
          "Faqat notarial idorada",
          "Faqat mahallada",
          "FHDYo (ZAGS) yoki sud orqali",
          "Ish joyi ma'muriyati orqali",
        ],
        correct: 2,
        explain:
          "Tomonlar kelishgan va nizo bo'lmagan holatlar FHDYo orqali, nizoli holatlar sud tartibida hal qilinadi.",
      },
      {
        q: "Ota-onalar aliment miqdori bo'yicha kelisha olmasa, uni kim belgilaydi?",
        options: [
          "Mahalla qo'mitasi",
          "Ish beruvchi",
          "Ota-onalardan biri o'zi",
          "Sud",
        ],
        correct: 3,
        explain:
          "Kelishuv bo'lmasa, bolani ta'minlash majburiyati sud qarori bilan belgilanadi va majburiy ijro etiladi.",
      },
      {
        q: "Bola bilan alohida yashaydigan ota yoki onaning huquqi qanday?",
        options: [
          "U bola bilan muloqot qilish va tarbiyada ishtirok etish huquqini saqlaydi",
          "U hech qanday huquqqa ega emas",
          "U faqat pul to'laydi, boshqa huquqi yo'q",
          "U bola bilan faqat 18 yoshdan keyin ko'risha oladi",
        ],
        correct: 0,
        explain:
          "Alohida yashash ota-onalik huquqini bekor qilmaydi. Muloqotga to'sqinlik qilinsa, masala sud orqali hal qilinadi.",
      },
      {
        q: "Ajrashganda nikoh davomida orttirilgan umumiy mol-mulk qanday bo'linadi?",
        options: [
          "Umuman bo'linmaydi",
          "Kim ko'proq daromad topgan bo'lsa, o'shanga qoladi",
          "Umumiy qoida bo'yicha teng ulushlarda",
          "Har doim erkak kishiga ko'proq",
        ],
        correct: 2,
        explain:
          "Umumiy qoida — teng ulush. Sud bolalar manfaati kabi holatlarni hisobga olib ulushni o'zgartirishi mumkin.",
      },
      {
        q: "Voyaga yetmagan bolaga tegishli mulk bilan bitim tuzishda nima talab qilinadi?",
        options: [
          "Hech qanday ruxsat kerak emas",
          "Qo'shnilarning guvohligi",
          "Faqat bolaning og'zaki roziligi",
          "Vasiylik va homiylik organining roziligi",
        ],
        correct: 3,
        explain:
          "Bunday rozilik bolaning mulkiy manfaati zarar ko'rmasligi uchun talab qilinadi.",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     3. MEROS HUQUQI (mavjud test)
     ══════════════════════════════════════════════════════════════ */
  {
    match: /meros/i,
    title: "Meros huquqi",
    desc: "Vasiyatnoma, merosxo'rlar navbati, qarzlar va muddatlar.",
    order: 2,
    questions: [
      {
        q: "Vasiyatnoma qanday shaklda tuzilishi kerak?",
        options: [
          "Og'zaki, guvohlar oldida",
          "Yozma shaklda va notarial tasdiqlangan holda",
          "Xabar almashish orqali",
          "Oila davrasida e'lon qilinsa yetarli",
        ],
        correct: 1,
        explain:
          "Shakl talabi buzilgan vasiyatnoma haqiqiy emas deb topilishi mumkin.",
      },
      {
        q: "Vasiyat qiluvchi vasiyatnomani keyinchalik o'zgartira oladimi?",
        options: [
          "Yo'q, hech qachon",
          "Faqat merosxo'rlarning roziligi bilan",
          "Faqat bir marta",
          "Ha — istalgan vaqtda o'zgartirishi yoki bekor qilishi mumkin",
        ],
        correct: 3,
        explain:
          "Vasiyatnoma — bir tomonlama xohish ifodasi, uni tuzgan shaxs uni erkin o'zgartirishga haqli.",
      },
      {
        q: "Meros tarkibiga nima kiradi?",
        options: [
          "Faqat ko'chmas mulk",
          "Faqat pul mablag'lari",
          "Mol-mulk bilan birga vafot etgan shaxsning qarz majburiyatlari ham",
          "Faqat vasiyatnomada sanab o'tilgan narsalar",
        ],
        correct: 2,
        explain:
          "Merosni qabul qilgan merosxo'r qarzlar bo'yicha ham — qabul qilingan mulk qiymati doirasida — javob beradi.",
      },
      {
        q: "Merosxo'r merosdan voz kecha oladimi?",
        options: [
          "Ha — belgilangan muddat ichida rasmiy ravishda",
          "Yo'q, meros majburiy qabul qilinadi",
          "Faqat qarz bo'lmagan holatda",
          "Faqat boshqa merosxo'rlar rozi bo'lsa",
        ],
        correct: 0,
        explain:
          "Voz kechish rasmiylashtiriladi. Ayniqsa meros qarz bilan kelgan holatlarda bu muhim qaror.",
      },
      {
        q: "Qonun bo'yicha merosxo'rlar navbati nimani anglatadi?",
        options: [
          "Kim birinchi ariza bersa, o'sha meros oladi",
          "Yoshi kattaroq merosxo'r ustunlikka ega",
          "Merosxo'rlar qarindoshlik darajasiga qarab guruhlarga bo'linadi",
          "Faqat birga yashaganlar meros oladi",
        ],
        correct: 2,
        explain:
          "Oldingi navbat merosxo'rlari bo'lsa, keyingi navbatdagilar merosga chaqirilmaydi.",
      },
      {
        q: "Meros ochilgan joy deb qayer hisoblanadi?",
        options: [
          "Merosxo'r yashaydigan joy",
          "Vafot etgan shaxs tug'ilgan joy",
          "Notarius tanlagan joy",
          "Vafot etgan shaxsning oxirgi yashash joyi",
        ],
        correct: 3,
        explain:
          "Meros ishi aynan shu joydagi notarius tomonidan yuritiladi — ariza ham o'sha yerga beriladi.",
      },
      {
        q: "Merosxo'rlar o'rtasida nizo kelib chiqsa qayerga murojaat qilinadi?",
        options: [
          "Sudga",
          "Faqat notariusga",
          "Mahalla qo'mitasiga",
          "Hech qayerga — nizo ko'rilmaydi",
        ],
        correct: 0,
        explain:
          "Notarius nizoni hal qilmaydi; merosxo'rlar o'rtasidagi bahs sud tartibida ko'riladi.",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     4. ISTE'MOLCHI HUQUQLARI (mavjud test)
     ══════════════════════════════════════════════════════════════ */
  {
    match: /iste['ʼʻ’]?molchi/i,
    title: "Iste'molchi huquqlari",
    desc: "Sifatsiz tovar, kafolat, xizmatlar, qaytarish va onlayn xaridlar.",
    order: 3,
    questions: [
      {
        q: "Iste'molchi tovar haqida qanday ma'lumot olishga haqli?",
        options: [
          "Faqat narx haqida",
          "Faqat reklamada aytilgan ma'lumot",
          "Tovarning xususiyatlari, ishlab chiqaruvchisi va xavfsizligi haqida to'liq ma'lumot",
          "Hech qanday ma'lumot talab qila olmaydi",
        ],
        correct: 2,
        explain:
          "To'liq va ishonchli axborot olish — iste'molchining asosiy huquqlaridan biri.",
      },
      {
        q: "Sifatli, lekin o'lchami yoki rangi to'g'ri kelmagan tovarni almashtirish mumkinmi?",
        options: [
          "Yo'q, hech qachon",
          "Ha — belgilangan muddat ichida, tovar ishlatilmagan va ko'rinishi saqlangan bo'lsa",
          "Faqat sotuvchining xohishiga ko'ra",
          "Faqat oziq-ovqat mahsulotlarini",
        ],
        correct: 1,
        explain:
          "Bu huquq nooziq-ovqat tovarlariga tegishli; ayrim toifadagi tovarlar (gigiyena buyumlari kabi) bundan mustasno.",
      },
      {
        q: "Kafolat muddati nima uchun kerak?",
        options: [
          "Faqat reklama uchun",
          "Tovar narxini oshirish uchun",
          "Sotuvchini himoya qilish uchun",
          "Shu muddat ichida nuqson chiqsa, sotuvchi yoki ishlab chiqaruvchi javob berishi uchun",
        ],
        correct: 3,
        explain:
          "Kafolat muddati ichida aniqlangan nuqson uchun javobgarlik sotuvchi yoki ishlab chiqaruvchi zimmasida bo'ladi.",
      },
      {
        q: "Xizmat sifatsiz ko'rsatilgan bo'lsa, iste'molchi nima talab qilishi mumkin?",
        options: [
          "Kamchilikni bepul bartaraf etish, narxni kamaytirish yoki zararni qoplashni",
          "Faqat kechirim so'rashni",
          "Hech nimani",
          "Faqat yangi shartnoma tuzishni",
        ],
        correct: 0,
        explain:
          "Iste'molchi qonunda nazarda tutilgan talablardan birini o'zi tanlash huquqiga ega.",
      },
      {
        q: "Sotuvchi asosli talabni bajarishdan bosh tortsa, eng to'g'ri qadam qaysi?",
        options: [
          "Voz kechish",
          "Do'kon oldida norozilik bildirish",
          "Yozma da'vo qoldirib, keyin nazorat organi yoki sudga murojaat qilish",
          "Tovarni tashlab yuborish",
        ],
        correct: 2,
        explain:
          "Yozma da'vo va uning qabul qilinganini tasdiqlovchi belgi keyingi murojaatda asosiy dalil bo'ladi.",
      },
      {
        q: "Tovar nuqsoni bo'yicha ekspertiza xarajatini kim to'laydi?",
        options: [
          "Har doim iste'molchi",
          "Har doim davlat",
          "Hech kim — ekspertiza bepul",
          "Odatda sotuvchi; nuqson iste'molchi aybi bilan yuzaga kelgani aniqlansa — iste'molchi",
        ],
        correct: 3,
        explain:
          "Ekspertiza natijasi kimning haq ekanini ko'rsatadi va xarajat shunga qarab taqsimlanadi.",
      },
      {
        q: "Onlayn do'kon tovar haqida noto'g'ri ma'lumot bergan bo'lsa, iste'molchi nima qila oladi?",
        options: [
          "Faqat sharh yozishi mumkin",
          "Shartnomadan voz kechib, to'langan pulni qaytarishni talab qilishi mumkin",
          "Hech narsa qila olmaydi",
          "Faqat tovarni almashtirishi mumkin",
        ],
        correct: 1,
        explain:
          "Chalg'ituvchi yoki noto'g'ri axborot berilgan bo'lsa, iste'molchi bitimdan voz kechish huquqiga ega.",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     5. JINOIY KODEKS — qilmishning jinoiyligini istisno qiluvchi
        holatlar (mavjud test, mavzusi tor — savollar shu mavzuda)
     ══════════════════════════════════════════════════════════════ */
  {
    match: /jinoiy kodeks|jinoyat kodeks/i,
    title: "Jinoiy kodeks",
    desc: "Qilmishning jinoiyligini istisno qiladigan holatlar",
    order: 5,
    questions: [
      {
        q: "Zaruriy mudofaa nimani anglatadi?",
        options: [
          "Jinoyatchidan qasos olishni",
          "Har qanday janjalga kuch bilan javob berishni",
          "Ijtimoiy xavfli tajovuzdan himoyalanish chog'ida zarar yetkazishni",
          "Politsiyaga xabar bermaslikni",
        ],
        correct: 2,
        explain:
          "Zaruriy mudofaa — davom etayotgan tajovuzdan himoyalanish. Himoya tajovuz xarakteriga mos bo'lishi kerak.",
      },
      {
        q: "Zaruriy mudofaa chegarasidan chetga chiqish deganda nima tushuniladi?",
        options: [
          "Himoya choralari tajovuz xavfiga aniq nomutanosib bo'lishi",
          "Himoyaning umuman ko'rsatilmasligi",
          "Guvohsiz himoyalanish",
          "Politsiya kelguncha kutish",
        ],
        correct: 0,
        explain:
          "Nomutanosib himoya javobgarlikni istisno qilmaydi — bu alohida baholanadigan holat.",
      },
      {
        q: "Oxirgi zarurat holati nima?",
        options: [
          "Har qanday vaziyatda zarar yetkazish",
          "Kattaroq zararning oldini olish uchun kichikroq zarar yetkazish",
          "Jinoyat sodir etishga majburlash",
          "Faqat harbiy xizmatchilarga tegishli holat",
        ],
        correct: 1,
        explain:
          "Yetkazilgan zarar bartaraf etilgan zarardan kam bo'lishi va boshqa yo'l bo'lmasligi talab qilinadi.",
      },
      {
        q: "Kam ahamiyatli qilmish deganda nima tushuniladi?",
        options: [
          "Tunda sodir etilgan qilmish",
          "Guvohsiz sodir etilgan qilmish",
          "Birinchi marta sodir etilgan har qanday qilmish",
          "Rasman jinoyat belgilariga ega bo'lsa-da, ijtimoiy xavfi juda oz qilmish",
        ],
        correct: 3,
        explain:
          "Ijtimoiy xavflilik darajasi juda past bo'lgan qilmish jinoyat deb topilmaydi.",
      },
      {
        q: "Jismoniy yoki ruhiy majburlash ta'sirida sodir etilgan qilmish qanday baholanadi?",
        options: [
          "Har doim jazoni ikki barobar oshiradi",
          "Hech qanday ahamiyatga ega emas",
          "Shaxs o'z xatti-harakatini boshqara olmagan bo'lsa, javobgarlik istisno qilinishi mumkin",
          "Faqat sudda e'tiborga olinmaydi",
        ],
        correct: 2,
        explain:
          "Majburlash natijasida irodani boshqarish imkoni yo'qolgan bo'lsa, qilmish jinoiy deb topilmaydi.",
      },
      {
        q: "Jinoyat sodir etgan shaxsni ushlash chog'ida unga zarar yetkazish qanday baholanadi?",
        options: [
          "Ushlash uchun zarur bo'lgan chora doirasida bo'lsa — jinoiy hisoblanmaydi",
          "Har doim jinoyat hisoblanadi",
          "Faqat huquqni muhofaza qiluvchi organ xodimlariga ruxsat etiladi",
          "Hech qachon oqlanmaydi",
        ],
        correct: 0,
        explain:
          "Zarar ushlash maqsadiga va vaziyatga mutanosib bo'lishi shart.",
      },
      {
        q: "Oqilona (asosli) tavakkalchilikning asosiy sharti nima?",
        options: [
          "Tavakkal faqat tibbiyotda bo'lishi",
          "Har qanday tavakkal oqlanishi",
          "Tavakkal natijasi muvaffaqiyatli chiqishi",
          "Ijtimoiy foydali maqsad va zararning oldini olish choralarining ko'rilgani",
        ],
        correct: 3,
        explain:
          "Bu shartlar bajarilmasa, tavakkal asossiz deb topiladi va javobgarlik yuzaga keladi.",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     6. YER VA KO'CHMAS MULK (YANGI test — dars bor edi, test yo'q edi)
     ══════════════════════════════════════════════════════════════ */
  {
    match: /ko['ʼʻ’]?chmas mulk/i,
    title: "Yer va ko'chmas mulk",
    desc: "Ko'chmas mulk bitimlari, davlat ro'yxati, ijara va yerdan foydalanish.",
    order: 6,
    questions: [
      {
        q: "Ko'chmas mulkka bo'lgan huquq qachon yuzaga keladi?",
        options: [
          "Og'zaki kelishuvdan keyin",
          "Pul to'langan zahoti",
          "Belgilangan tartibda rasmiylashtirilib, davlat ro'yxatidan o'tkazilgandan keyin",
          "Kalit topshirilganda",
        ],
        correct: 2,
        explain:
          "Davlat ro'yxatidan o'tkazilmagan bitim mulk huquqini bermaydi — bu eng ko'p uchraydigan xato.",
      },
      {
        q: "Uy sotib olishdan oldin nimani tekshirish eng muhim?",
        options: [
          "Mulk kimga tegishli ekani va unda cheklov (garov, hibs) bor-yo'qligini",
          "Qo'shnilarning fikrini",
          "Uyning qurilish yilini",
          "Ko'cha nomini",
        ],
        correct: 0,
        explain:
          "Bu ma'lumot rasmiy reyestrdan olinadi. Cheklov mavjud bo'lsa, bitim ro'yxatdan o'tmaydi.",
      },
      {
        q: "Ko'chmas mulk oldi-sotdi shartnomasi qanday shaklda tuziladi?",
        options: [
          "Og'zaki kelishuv yetarli",
          "Faqat guvohlar oldida",
          "Xabar almashish orqali",
          "Yozma shaklda va belgilangan tartibda rasmiylashtirilgan holda",
        ],
        correct: 3,
        explain:
          "Shakl talabi buzilsa, bitim haqiqiy emas deb topilishi mumkin.",
      },
      {
        q: "Yer uchastkasidan foydalanuvchining asosiy majburiyati nima?",
        options: [
          "Uni istalgan maqsadda ishlatish",
          "Yerdan faqat berilgan maqsadga muvofiq foydalanish",
          "Har yili uchastkani sotish",
          "Hech qanday majburiyat yo'q",
        ],
        correct: 1,
        explain:
          "Maqsadli foydalanish talabi buzilsa, yerga bo'lgan huquq belgilangan tartibda to'xtatilishi mumkin.",
      },
      {
        q: "Ijara shartnomasida albatta nima aniq ko'rsatilishi kerak?",
        options: [
          "Faqat ijarachining ismi",
          "Faqat to'lov summasi",
          "Ob'ekt, ijara muddati va to'lov shartlari",
          "Qo'shnilarning roziligi",
        ],
        correct: 2,
        explain:
          "Bu shartlar aniq yozilmasa, keyinchalik to'lov va bo'shatish bo'yicha nizo kelib chiqadi.",
      },
      {
        q: "Umumiy mulk (masalan, er-xotinning uyi) bilan bitim tuzishda nima talab qilinadi?",
        options: [
          "Bitta egasining qarori yetarli",
          "Qo'shnilarning roziligi",
          "Faqat notariusning fikri",
          "Barcha ishtirokchi mulkdorlarning roziligi",
        ],
        correct: 3,
        explain:
          "Rozilik olinmasdan tuzilgan bitim sud tomonidan haqiqiy emas deb topilishi mumkin.",
      },
      {
        q: "Kadastr hujjatlari nima uchun kerak?",
        options: [
          "Ob'ektning chegarasi, maydoni va huquq egasini rasman tasdiqlash uchun",
          "Faqat arxiv uchun",
          "Faqat sotish paytida",
          "Ular ixtiyoriy hujjat",
        ],
        correct: 0,
        explain:
          "Chegara va maydon bo'yicha nizolarda aynan kadastr ma'lumotlari asos qilib olinadi.",
      },
      {
        q: "Qo'shnilar bilan chegara nizosi kelib chiqsa nima qilish kerak?",
        options: [
          "Chegarani o'zboshimchalik bilan ko'chirish",
          "Qurilishni davom ettiraverish",
          "Kadastr hujjatlariga tayanib kelishishga harakat qilish, kelishilmasa sudga murojaat qilish",
          "Hech narsa qilmaslik",
        ],
        correct: 2,
        explain:
          "O'zboshimchalik bilan qilingan harakat o'z navbatida javobgarlikka olib kelishi mumkin.",
      },
      {
        q: "Ruxsatsiz (o'zboshimchalik bilan) qurilgan ob'ekt qanday oqibatga olib keladi?",
        options: [
          "U avtomatik ravishda mulk bo'ladi",
          "Hech qanday oqibat yo'q",
          "Faqat kichik jarima bilan tugaydi",
          "Uni qonuniylashtirish talab qilinadi yoki buzib tashlanishi mumkin",
        ],
        correct: 3,
        explain:
          "Bunday ob'ektga mulk huquqi avtomatik yuzaga kelmaydi va uni sotish ham mumkin bo'lmaydi.",
      },
      {
        q: "Ko'chmas mulk garovga qo'yilganda nima o'zgaradi?",
        options: [
          "Mulk mulkdorda qoladi, lekin uni tasarruf etishda cheklov yuzaga keladi",
          "Mulk darhol kreditorga o'tadi",
          "Mulkdor barcha huquqini yo'qotadi",
          "Hech narsa o'zgarmaydi",
        ],
        correct: 0,
        explain:
          "Garov ro'yxatga olinadi va mulkni sotish yoki almashtirishda cheklov sifatida ko'rinadi.",
      },
      {
        q: "Turar joyni ijaraga berish shartnomasini yozma rasmiylashtirish nima uchun muhim?",
        options: [
          "Faqat soliq organi talab qilgani uchun",
          "Faqat ijarachi manfaati uchun",
          "Rasmiylashtirish umuman shart emas",
          "To'lov, muddat va javobgarlik bo'yicha nizoda asosiy dalil bo'lgani uchun",
        ],
        correct: 3,
        explain:
          "Og'zaki kelishuvda kim nima va'da qilgani isbotlanmaydi — zarar ikkala tomonga ham tegadi.",
      },
      {
        q: "Mulk davlat ehtiyojlari uchun olinganda mulkdorning huquqi qanday?",
        options: [
          "Hech qanday huquqi yo'q",
          "Unga qonunda belgilangan tartibda tovon to'lanishi kerak",
          "Faqat boshqa hududdan joy taklif qilinadi",
          "U faqat shikoyat qila oladi",
        ],
        correct: 1,
        explain:
          "Majburiy olib qo'yish faqat qonunda belgilangan asoslar va tovon to'lash sharti bilan amalga oshiriladi.",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     7. KONSTITUTSIYA ASOSLARI (YANGI — saytda alohida sahifa bor)
     ══════════════════════════════════════════════════════════════ */
  {
    match: /konstitutsiya/i,
    title: "Konstitutsiya asoslari",
    desc: "Konstitutsiyaviy tuzum, inson huquqlari, majburiyatlar va kafolatlar.",
    order: 7,
    questions: [
      {
        q: "Konstitutsiya huquqiy tizimda qanday o'rin tutadi?",
        options: [
          "Boshqa qonunlar bilan teng kuchga ega",
          "Faqat davlat organlari uchun majburiy",
          "Eng oliy yuridik kuchga ega va normalari to'g'ridan-to'g'ri amal qiladi",
          "Faqat tavsiyaviy hujjat",
        ],
        correct: 2,
        explain:
          "Boshqa hech bir hujjat Konstitutsiyaga zid bo'lishi mumkin emas.",
      },
      {
        q: "Davlat hokimiyati qanday tashkil etilgan?",
        options: [
          "Qonun chiqaruvchi, ijro etuvchi va sud hokimiyatiga bo'lingan",
          "Yagona organ qo'lida to'plangan",
          "Faqat mahalliy organlarda",
          "Faqat sud hokimiyatida",
        ],
        correct: 0,
        explain:
          "Hokimiyatning bo'linishi — konstitutsiyaviy tuzumning asosiy tamoyillaridan biri.",
      },
      {
        q: "Inson huquq va erkinliklari qachondan boshlab tegishli bo'ladi?",
        options: [
          "Pasport olingandan keyin",
          "Ish boshlaganda",
          "18 yoshdan",
          "Tug'ilgan paytdan",
        ],
        correct: 3,
        explain:
          "Asosiy huquq va erkinliklar tug'ilishdan tegishli bo'ladi va davlat tomonidan kafolatlanadi.",
      },
      {
        q: "Aybsizlik prezumpsiyasi nimani anglatadi?",
        options: [
          "Har bir ayblanuvchi aybdor deb hisoblanishini",
          "Aybi qonuniy kuchga kirgan sud hukmi bilan aniqlanmaguncha shaxs aybsiz hisoblanishini",
          "Aybning tergovchi qaroriga bog'liqligini",
          "Aybning guvohlar soniga bog'liqligini",
        ],
        correct: 1,
        explain:
          "Bartaraf etilmagan shubhalar ayblanuvchi foydasiga hal qilinadi.",
      },
      {
        q: "Sud himoyasi huquqi nimani bildiradi?",
        options: [
          "Sudga faqat davlat organlari murojaat qilishini",
          "Sudga murojaat faqat jinoyat ishlarida mumkinligini",
          "Har kim o'z huquq va erkinliklarini himoya qilish uchun sudga murojaat qila olishini",
          "Sudga murojaat uchun alohida ruxsat kerakligini",
        ],
        correct: 2,
        explain:
          "Sudga murojaat qilish huquqidan hech kim mahrum qilinmaydi.",
      },
      {
        q: "Har kimning mehnat qilish huquqi nimani o'z ichiga oladi?",
        options: [
          "Kasb va faoliyat turini erkin tanlashni",
          "Faqat davlat idorasida ishlashni",
          "Majburiy mehnatni",
          "Faqat bitta ish joyida ishlashni",
        ],
        correct: 0,
        explain:
          "Majburiy mehnat qonunda belgilangan alohida holatlardan tashqari taqiqlanadi.",
      },
      {
        q: "Shaxsiy hayotning daxlsizligi nimani anglatadi?",
        options: [
          "Uydan chiqmaslik huquqini",
          "Ijtimoiy tarmoqda yozmaslik majburiyatini",
          "Faqat mansabdorlarga tegishli qoidani",
          "Yozishmalar va shaxsiy ma'lumotlarga asossiz aralashishning taqiqlanishini",
        ],
        correct: 3,
        explain:
          "Yozishmalar sirini cheklash faqat qonunda belgilangan tartibda mumkin.",
      },
      {
        q: "Davlat organlariga murojaat qilish huquqi nimani bildiradi?",
        options: [
          "Ariza, taklif va shikoyat bilan murojaat qilish va belgilangan tartibda javob olishni",
          "Faqat og'zaki gapirishni",
          "Faqat sudga murojaat qilishni",
          "Faqat yozma murojaatni, javobsiz",
        ],
        correct: 0,
        explain:
          "Murojaatni ko'rib chiqish va javob berish davlat organining majburiyati hisoblanadi.",
      },
      {
        q: "Fuqaroning konstitutsiyaviy majburiyatlaridan biri qaysi?",
        options: [
          "Har doim davlat idorasida ishlash",
          "Konstitutsiya va qonunlarga rioya qilish, belgilangan soliqlarni to'lash",
          "Har yili ko'chib yurish",
          "Faqat bir tilda gapirish",
        ],
        correct: 1,
        explain: "Huquqlar majburiyatlar bilan birga amal qiladi.",
      },
      {
        q: "Oila, onalik, otalik va bolalik qanday maqomga ega?",
        options: [
          "Faqat oilaning ichki ishi",
          "Faqat mahalla nazoratidagi masala",
          "Davlat muhofazasida",
          "Qonun bilan tartibga solinmaydi",
        ],
        correct: 2,
        explain:
          "Shu sababli bolalar manfaatiga taalluqli masalalarda davlat organlari ishtirok etadi.",
      },
      {
        q: "Ta'lim olish huquqi bo'yicha qaysi javob to'g'ri?",
        options: [
          "Ta'lim faqat pullik asosda beriladi",
          "Ta'lim olish huquqi faqat bolalarga tegishli",
          "Ta'lim olish uchun alohida ruxsat kerak",
          "Har kim ta'lim olish huquqiga ega va davlat bepul umumiy ta'limni kafolatlaydi",
        ],
        correct: 3,
        explain:
          "Ta'lim olish huquqi asosiy konstitutsiyaviy huquqlardan biri hisoblanadi.",
      },
      {
        q: "Konstitutsiyaviy huquqlar cheklanishi mumkinmi?",
        options: [
          "Yo'q, hech qanday holatda",
          "Ha, istalgan mansabdor shaxs qaroriga ko'ra",
          "Faqat qonunda belgilangan hollarda va qonuniy maqsadda",
          "Faqat mahalliy organ qaroriga ko'ra",
        ],
        correct: 2,
        explain:
          "Cheklov faqat qonun asosida, boshqalarning huquqlarini va jamiyat manfaatlarini himoya qilish maqsadida joiz.",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     8. FUQAROLIK HUQUQI VA SHARTNOMALAR (YANGI)
     ══════════════════════════════════════════════════════════════ */
  {
    match: /fuqarolik huquqi|shartnoma/i,
    title: "Fuqarolik huquqi va shartnomalar",
    desc: "Bitimlar, shartnoma shartlari, majburiyatlar, qarz va zararni qoplash.",
    order: 8,
    questions: [
      {
        q: "Shartnoma qachon tuzilgan hisoblanadi?",
        options: [
          "Tomonlar barcha muhim shartlar bo'yicha kelishuvga erishganda",
          "Bir tomon shartnoma tuzishni o'ylaganda",
          "Guvohlar imzo chekkanda",
          "Faqat notarius tasdiqlaganda",
        ],
        correct: 0,
        explain:
          "Muhim shartlar (predmet, narx, muddat kabi) kelishilmagan bo'lsa, shartnoma tuzilmagan hisoblanadi.",
      },
      {
        q: "Yozma shakl talab qilingan shartnoma og'zaki tuzilsa nima bo'ladi?",
        options: [
          "Hech qanday muammo yuzaga kelmaydi",
          "Shartnoma ikki barobar kuchga ega bo'ladi",
          "Nizoda uni guvohlar ko'rsatuvi bilan tasdiqlash imkoniyati cheklanadi",
          "Sud uni avtomatik tasdiqlaydi",
        ],
        correct: 2,
        explain:
          "Shu sababli har qanday jiddiy kelishuvni yozma rasmiylashtirish maqsadga muvofiq.",
      },
      {
        q: "Shartnoma erkinligi tamoyili nimani anglatadi?",
        options: [
          "Shartnomani bajarmaslik mumkinligini",
          "Istalgan shartni, hatto qonunga zidini ham kiritish mumkinligini",
          "Shartnoma faqat og'zaki bo'lishi kerakligini",
          "Tomonlar shartnoma tuzish va shartlarini belgilashda erkin ekanini — qonun doirasida",
        ],
        correct: 3,
        explain:
          "Qonunga zid shart kiritilsa, u qismi haqiqiy emas deb topiladi.",
      },
      {
        q: "Majburiyat bajarilmasa qanday oqibat yuzaga keladi?",
        options: [
          "Hech qanday oqibat yo'q",
          "Zararni qoplash, penya yoki shartnomada belgilangan boshqa javobgarlik",
          "Shartnoma avtomatik uzayadi",
          "Faqat kechirim so'rash talab qilinadi",
        ],
        correct: 1,
        explain:
          "Javobgarlik chorasi shartnomada oldindan yozib qo'yilsa, uni qo'llash ancha oson bo'ladi.",
      },
      {
        q: "Ishonchnoma nima uchun beriladi?",
        options: [
          "Qarzni bekor qilish uchun",
          "Mulkni sovg'a qilish uchun",
          "Bir shaxs nomidan boshqa shaxs ish yuritishi uchun",
          "Nikohni rasmiylashtirish uchun",
        ],
        correct: 2,
        explain:
          "Ishonchnomada vakolat doirasi va amal qilish muddati aniq ko'rsatiladi.",
      },
      {
        q: "Da'vo muddati (da'vo qilish muddati) nimani anglatadi?",
        options: [
          "Buzilgan huquqni sud orqali himoya qilish uchun belgilangan muddatni",
          "Sud ishni ko'rib chiqish muddatini",
          "Shartnoma amal qilish muddatini",
          "Jarima to'lash muddatini",
        ],
        correct: 0,
        explain:
          "Muddat o'tkazib yuborilsa va uzrli sabab bo'lmasa, huquqni himoya qilish sezilarli qiyinlashadi.",
      },
      {
        q: "Qarz berishda nimani rasmiylashtirish maqsadga muvofiq?",
        options: [
          "Hech nimani — ishonch yetarli",
          "Faqat guvoh chaqirish",
          "Faqat og'zaki kelishuv",
          "Summa va qaytarish muddati ko'rsatilgan yozma shartnoma yoki tilxat",
        ],
        correct: 3,
        explain:
          "Tilxat qarz berilgani va shartlari bo'yicha asosiy yozma dalil hisoblanadi.",
      },
      {
        q: "Zararni qoplash odatda nimani o'z ichiga oladi?",
        options: [
          "Faqat ma'naviy zararni",
          "Real zararni va boy berilgan foydani",
          "Faqat hujjat xarajatlarini",
          "Hech nimani",
        ],
        correct: 1,
        explain:
          "Zarar hajmi hujjat va hisob-kitob bilan asoslanishi kerak.",
      },
      {
        q: "Bitim qaysi holatda haqiqiy emas deb topilishi mumkin?",
        options: [
          "Tomonlardan biri keyin pushaymon bo'lsa",
          "Bitim uzoq vaqt oldin tuzilgan bo'lsa",
          "Aldov, majburlash yoki qonunga zidlik aniqlansa",
          "Guvohlar soni kam bo'lsa",
        ],
        correct: 2,
        explain:
          "Bunday holatlar dalillar asosida sud tartibida aniqlanadi.",
      },
      {
        q: "Muomala layoqati nima?",
        options: [
          "O'z harakatlari bilan huquq va majburiyat olish qobiliyati",
          "Yozish va o'qish qobiliyati",
          "Daromad topish qobiliyati",
          "Sudda so'zga chiqish huquqi",
        ],
        correct: 0,
        explain:
          "To'liq muomala layoqati, qoida tariqasida, voyaga yetgandan keyin yuzaga keladi.",
      },
      {
        q: "Ko'chmas mulkni sovg'a qilish bo'yicha qaysi javob to'g'ri?",
        options: [
          "Sovg'a har doim qisman haq evaziga bo'ladi",
          "Sovg'a faqat qarindoshlarga qilinadi",
          "Sovg'ani rasmiylashtirish shart emas",
          "Sovg'a tekin bo'ladi va ko'chmas mulk sovg'asi belgilangan tartibda rasmiylashtiriladi",
        ],
        correct: 3,
        explain:
          "Rasmiylashtirilmagan sovg'a mulk huquqining o'tishiga olib kelmaydi.",
      },
      {
        q: "Shartnomani bir tomonlama bekor qilish mumkinmi?",
        options: [
          "Ha, istalgan vaqtda va sababsiz",
          "Faqat qonunda yoki shartnomada nazarda tutilgan hollarda",
          "Yo'q, hech qanday holatda",
          "Faqat notarius ruxsati bilan",
        ],
        correct: 1,
        explain:
          "Asossiz bir tomonlama bekor qilish majburiyatni buzish deb baholanadi va javobgarlikka olib keladi.",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     9. MA'MURIY JAVOBGARLIK (YANGI)
     ══════════════════════════════════════════════════════════════ */
  {
    match: /ma['ʼʻ’]?muriy javobgarlik/i,
    title: "Ma'muriy javobgarlik",
    desc: "Ma'muriy huquqbuzarlik, bayonnoma, jarima va shikoyat tartibi.",
    order: 9,
    questions: [
      {
        q: "Ma'muriy huquqbuzarlik jinoyatdan nimasi bilan farq qiladi?",
        options: [
          "Hech qanday farqi yo'q",
          "Uni faqat tashkilotlar sodir etadi",
          "Ijtimoiy xavflilik darajasi pastroq va boshqa javobgarlik choralari qo'llaniladi",
          "U faqat ogohlantirish bilan tugaydi",
        ],
        correct: 2,
        explain:
          "Ma'muriy huquqbuzarlik uchun asosan jarima kabi choralar qo'llaniladi, sudlanganlik holati yuzaga kelmaydi.",
      },
      {
        q: "Ma'muriy javobgarlikka tortishda asosiy hujjat nima?",
        options: [
          "Ma'muriy huquqbuzarlik to'g'risidagi bayonnoma",
          "Og'zaki ogohlantirish",
          "Guvohnoma",
          "Erkin shakldagi xat",
        ],
        correct: 0,
        explain:
          "Bayonnomada holat tavsiflanadi; unga izoh va e'tiroz yozish huquqi shaxsga tegishli.",
      },
      {
        q: "Bayonnoma tuzilayotganda shaxsning huquqi qanday?",
        options: [
          "Faqat imzo chekish",
          "Hech qanday huquqi yo'q",
          "Faqat jim turish",
          "Tushuntirish berish, e'tiroz yozish va nusxa olish",
        ],
        correct: 3,
        explain:
          "Aynan shu paytda yozilgan e'tiroz keyingi shikoyatda eng kuchli dalil bo'ladi.",
      },
      {
        q: "Bayonnomaga imzo chekmaslik nimani anglatadi?",
        options: [
          "Bayonnoma bekor bo'lishini",
          "Bu holat bayonnomada qayd etilishini, lekin ish baribir ko'rib chiqilishini",
          "Jarima ikki barobar oshishini",
          "Ishning avtomatik yopilishini",
        ],
        correct: 1,
        explain:
          "Imzodan bosh tortish javobgarlikdan ozod qilmaydi — e'tirozni yozib qoldirish ancha samarali.",
      },
      {
        q: "Ma'muriy jarima solingan bo'lsa, shaxs nima qila oladi?",
        options: [
          "Faqat to'lash",
          "E'tiborsiz qoldirish",
          "Belgilangan muddatda yuqori organ yoki sudga shikoyat qilish",
          "Hech narsa",
        ],
        correct: 2,
        explain:
          "Shikoyat muddati o'tkazib yuborilsa, qaror ijroga qaratiladi.",
      },
      {
        q: "Bir huquqbuzarlik uchun ikki marta javobgarlikka tortish mumkinmi?",
        options: [
          "Ha, mumkin",
          "Faqat jarima bo'lsa mumkin",
          "Faqat sud xohlasa mumkin",
          "Yo'q — bu huquqiy javobgarlikning umumiy tamoyiliga zid",
        ],
        correct: 3,
        explain:
          "Ayni bir qilmish uchun takroran jazolash taqiqlanadi.",
      },
      {
        q: "Voyaga yetmaganlar ma'muriy javobgarlik masalasida qanday holatda?",
        options: [
          "Ularga nisbatan alohida chora va tartib qo'llaniladi",
          "Ular umuman javobgar bo'lmaydi",
          "Ularga kattalar bilan bir xil chora qo'llanadi",
          "Yosh umuman hisobga olinmaydi",
        ],
        correct: 0,
        explain:
          "Javobgarlik qonunda belgilangan yoshdan boshlanadi va voyaga yetmaganlar ishi alohida tartibda ko'riladi.",
      },
      {
        q: "Ma'muriy ish yuritishda shaxs yuridik yordamdan foydalana oladimi?",
        options: [
          "Yo'q, faqat o'zi ishtirok etadi",
          "Faqat jarima katta bo'lsa",
          "Faqat sud bosqichida",
          "Ha — vakil yoki advokat yordamidan foydalanishi mumkin",
        ],
        correct: 3,
        explain:
          "Yuridik yordam olish huquqi ma'muriy ish yuritishda ham amal qiladi.",
      },
      {
        q: "Jarima to'langanini tasdiqlovchi hujjatni saqlash nima uchun muhim?",
        options: [
          "Faqat bank hisoboti uchun",
          "To'lov amalga oshirilganini isbotlovchi dalil bo'lgani uchun",
          "Faqat soliq organi talab qilgani uchun",
          "Saqlash shart emas",
        ],
        correct: 1,
        explain:
          "Ma'lumot tizimda yangilanmay qolgan holatda aynan shu hujjat to'lovni isbotlaydi.",
      },
      {
        q: "Huquqbuzarlik holati noto'g'ri qayd etilgan deb hisoblasangiz, eng to'g'ri qadam qaysi?",
        options: [
          "Jarimani indamay to'lash",
          "Ijtimoiy tarmoqda yozish",
          "Dalillarni (foto, video, guvoh) to'plab, belgilangan muddatda shikoyat berish",
          "Umuman e'tibor bermaslik",
        ],
        correct: 2,
        explain:
          "Dalil qanchalik tez to'plansa, shunchalik ishonchli bo'ladi; muddat esa qat'iy.",
      },
    ],
  },

  /* ══════════════════════════════════════════════════════════════
     10. SUDGA MUROJAAT VA HUJJATLAR (YANGI)
     ══════════════════════════════════════════════════════════════ */
  {
    match: /sudga murojaat|sud jarayoni/i,
    title: "Sudga murojaat va hujjatlar",
    desc: "Da'vo arizasi, dalillar, sud xarajatlari va shikoyat qilish tartibi.",
    order: 10,
    questions: [
      {
        q: "Fuqarolik nizosi bo'yicha sudga murojaat qilishning asosiy hujjati qaysi?",
        options: [
          "Da'vo arizasi",
          "Erkin shakldagi xat",
          "Tilxat",
          "Ishonchnoma",
        ],
        correct: 0,
        explain:
          "Da'vo arizasida talab va uni asoslovchi holatlar aniq bayon qilinadi.",
      },
      {
        q: "Da'vo arizasida nima ko'rsatilishi shart?",
        options: [
          "Faqat da'vogarning ismi",
          "Faqat sud nomi",
          "Tomonlar, talab mohiyati va uni tasdiqlovchi holatlar",
          "Faqat telefon raqami",
        ],
        correct: 2,
        explain:
          "Talablarga javob bermagan ariza harakatsiz qoldirilishi yoki qaytarilishi mumkin.",
      },
      {
        q: "Sudda dalil sifatida nimalar qabul qilinadi?",
        options: [
          "Faqat guvohlar ko'rsatuvi",
          "Faqat ekspert xulosasi",
          "Faqat og'zaki tushuntirishlar",
          "Hujjatlar, yozishmalar, foto va video, guvohlar ko'rsatuvi, ekspert xulosasi",
        ],
        correct: 3,
        explain:
          "Dalil qonuniy yo'l bilan olingan bo'lishi shart — aks holda u e'tiborga olinmaydi.",
      },
      {
        q: "Isbot yuki bo'yicha umumiy qoida qanday?",
        options: [
          "Sud barcha dalillarni o'zi topadi",
          "Har bir tomon o'z talab va e'tirozlari asosini isbotlaydi",
          "Isbot umuman talab qilinmaydi",
          "Faqat javobgar isbotlaydi",
        ],
        correct: 1,
        explain:
          "Shuning uchun sudga murojaatdan oldin hujjatlarni to'plash eng muhim tayyorgarlik hisoblanadi.",
      },
      {
        q: "Sud qaroridan norozi bo'lsangiz nima qilish mumkin?",
        options: [
          "Hech narsa qilib bo'lmaydi",
          "Xuddi shu talab bilan yangi da'vo berish",
          "Qarorni e'tiborsiz qoldirish",
          "Belgilangan muddatda yuqori sud instansiyasiga shikoyat berish",
        ],
        correct: 3,
        explain:
          "Shikoyat muddati o'tsa, qaror qonuniy kuchga kiradi va uni o'zgartirish ancha qiyinlashadi.",
      },
      {
        q: "Sud xarajatlari odatda kimning zimmasida qoladi?",
        options: [
          "Har doim da'vogar zimmasida",
          "Har doim davlat zimmasida",
          "Qoida tariqasida ishni yutqazgan tomon zimmasida",
          "Hech kim to'lamaydi",
        ],
        correct: 2,
        explain:
          "Xarajatlarni taqsimlash masalasi sud qarorida hal qilinadi.",
      },
      {
        q: "Vakil orqali ish yuritish uchun nima kerak?",
        options: [
          "Og'zaki iltimos",
          "Qarindoshlik hujjati",
          "Hech narsa",
          "Belgilangan tartibda rasmiylashtirilgan ishonchnoma",
        ],
        correct: 3,
        explain:
          "Ishonchnomada vakilning vakolat doirasi aniq ko'rsatilishi kerak.",
      },
      {
        q: "Sud majlisiga sababsiz kelmaslik nimaga olib kelishi mumkin?",
        options: [
          "Hech narsaga",
          "Ish sizsiz ko'rib chiqilishiga yoki arizani ko'rmasdan qoldirishga",
          "Ishning avtomatik yutilishiga",
          "Sudyaga jarima solinishiga",
        ],
        correct: 1,
        explain:
          "Kelolmaslik sababi hujjat bilan tasdiqlanib, oldindan sudga xabar qilinishi kerak.",
      },
      {
        q: "Yozishmalar va hujjatlarning nusxasini saqlash nima uchun muhim?",
        options: [
          "Faqat shaxsiy arxiv uchun",
          "Faqat soliq hisoboti uchun",
          "Ular nizoda asosiy dalil bo'lgani uchun",
          "Bu umuman muhim emas",
        ],
        correct: 2,
        explain:
          "Yozma dalil og'zaki tushuntirishga qaraganda ancha ishonchli hisoblanadi.",
      },
      {
        q: "Nizoni sudgacha hal qilish mumkinmi?",
        options: [
          "Ha — tomonlar kelishuvga erishishi mumkin, bu vaqt va xarajatni tejaydi",
          "Yo'q, har qanday nizo faqat sudda hal qilinadi",
          "Faqat jinoyat ishlarida",
          "Faqat sudya ruxsati bilan",
        ],
        correct: 0,
        explain:
          "Ko'p nizolar yozma da'vo va muzokara bosqichidayoq hal bo'ladi; ayrim toifadagi nizolarda sudgacha tartib majburiy hisoblanadi.",
      },
    ],
  },
];

module.exports = { TEST_CONTENT };
