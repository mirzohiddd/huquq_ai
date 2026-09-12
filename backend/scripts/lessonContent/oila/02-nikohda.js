"use strict";
/**
 * OILA HUQUQI — 2-QISM: NIKOHDAN KEYIN (9–20-mavzular)
 *
 * Foydalanuvchining so'roviga ko'ra: "turmushdan keyin nimalar
 * bo'lishi kerak". Ketma-ketlik — guvohnoma → paydo bo'ladigan
 * huquqlar → shaxsiy huquqlar → mulk rejimi → nikoh shartnomasi.
 *
 * ⚠️ Mulk mavzulari ajralishdan OLDIN beriladi (ajralish 4-qismda):
 * mulk qoidalarini bilmasdan turib ajralish tartibini tushunish
 * mumkin emas — sud aynan shu qoidalar bo'yicha bo'lib beradi.
 */

const SECTIONS = [
  /* ── 9 ─────────────────────────────────────────────────────── */
  {
    heading: "Nikoh guvohnomasi va uning ahamiyati",
    text:
      "Nikoh qayd etilgach tomonlarga guvohnoma " +
      "beriladi. Bu shunchaki xotira hujjati emas — " +
      "u sizning oilaviy holatingizni tasdiqlovchi " +
      "ASOSIY dalil.\n\n" +
      "Guvohnoma kerak bo'ladigan holatlar ko'p: " +
      "mulkni rasmiylashtirishda, bola tug'ilganda, " +
      "meros masalasida, bank va notarial " +
      "harakatlarda, ijtimoiy to'lovlarni " +
      "rasmiylashtirishda.\n\n" +
      "Guvohnoma yo'qolsa vahima qilish shart emas: " +
      "FHDYo organida qayd yozuvi saqlanadi va " +
      "takroriy guvohnoma olish mumkin. Lekin bu " +
      "vaqt oladi, shuning uchun asl nusxani " +
      "ehtiyot qilish afzal.\n\n" +
      "Amaliy maslahat: guvohnomaning nusxasini " +
      "raqamli ko'rinishda ham saqlang va uni " +
      "boshqa muhim hujjatlar bilan birga alohida " +
      "joyda ushlang.",
    example:
      "Er-xotin kvartira sotib olmoqchi. Notarius " +
      "umumiy mulk rejimini aniqlash uchun nikoh " +
      "guvohnomasini so'raydi. Hujjat bo'lmasa " +
      "jarayon to'xtaydi — takroriy guvohnoma " +
      "olinmaguncha bitim rasmiylashtirilmaydi.",
    keyPoints: [
      "Guvohnoma oilaviy holatni tasdiqlovchi asosiy hujjat",
      "U mulk, meros, bola va bank masalalarida talab qilinadi",
      "Yo'qolsa FHDYo organidan takroriy nusxa olinadi",
      "Raqamli nusxa saqlash vaqtni tejaydi",
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

  /* ── 10 ────────────────────────────────────────────────────── */
  {
    heading: "Nikohdan keyin qanday huquqlar paydo bo'ladi",
    text:
      "Er-xotinning huquq va majburiyatlari nikoh " +
      "FHDYo organida qayd etilgan KUNDAN boshlab " +
      "vujudga keladi. Bu sana juda muhim — " +
      "keyinchalik mulk bo'lishida aynan shundan " +
      "hisoblanadi.\n\n" +
      "Nikohdan keyin uch guruh huquq paydo " +
      "bo'ladi. SHAXSIY huquqlar: familiya tanlash, " +
      "kasb va turar joy tanlash erkinligi, oila " +
      "masalalarini birgalikda hal qilish.\n\n" +
      "MULKIY huquqlar: nikoh davrida orttirilgan " +
      "mol-mulkka nisbatan umumiy mulk rejimi, " +
      "uni tasarruf etishda ikkinchi tomonning " +
      "roziligi talabi.\n\n" +
      "TA'MINOT huquqlari: muayyan shartlar " +
      "mavjud bo'lganda bir-biridan moddiy " +
      "yordam talab qilish imkoniyati. Bu huquq " +
      "ba'zi hollarda ajrashgandan keyin ham " +
      "saqlanib qoladi.",
    example:
      "Nikohdan bir hafta oldin sotib olingan " +
      "avtomobil — shaxsiy mulk. Nikohdan bir " +
      "hafta KEYIN sotib olingani esa umumiy " +
      "mulk. Farq atigi ikki haftada, oqibat " +
      "esa butunlay boshqacha. Shuning uchun " +
      "qayd etilgan sana muhim.",
    keyPoints: [
      "Huquqlar nikoh qayd etilgan kundan boshlanadi",
      "Shaxsiy, mulkiy va ta'minot huquqlari paydo bo'ladi",
      "Qayd etilgan sana mulk bo'lishida hal qiluvchi ahamiyatga ega",
      "Ta'minot huquqi ba'zan ajrashgandan keyin ham saqlanadi",
    ],
    warning:
      "Birga yashash boshlangan sana emas, aynan " +
      "QAYD ETILGAN sana hisobga olinadi. Bu ikkisi " +
      "ko'pincha bir-biridan ancha farq qiladi.",
    lawRefs: [
      { code: "OK", article: "18" },
      { code: "OK", article: "23" },
    ],
  },

  /* ── 11 ────────────────────────────────────────────────────── */
  {
    heading: "Er va xotinning tengligi",
    text:
      "Oilaviy munosabatlarda ayol va erkak teng " +
      "huquqqa ega. Bu shunchaki e'lon emas — " +
      "undan aniq amaliy natijalar kelib chiqadi.\n\n" +
      "Tenglik quyidagilarda ko'rinadi: oila " +
      "masalalari birgalikda hal qilinadi; " +
      "mol-mulkka bo'lgan huquq teng; bolalarni " +
      "tarbiyalash bo'yicha huquq va majburiyatlar " +
      "teng; hech kim ikkinchisining kasbi yoki " +
      "turar joyini belgilay olmaydi.\n\n" +
      "Muhim nuqta: uy ishlari va bola tarbiyasi " +
      "bilan shug'ullangan tomonning MULKIY huquqi " +
      "kamaymaydi. Ya'ni \"pul topmagan\" degan " +
      "dalil mulkni bo'lishda ishlamaydi.\n\n" +
      "Bu qoida ayniqsa muhim, chunki amalda " +
      "\"kim topgan bo'lsa, o'shaniki\" degan " +
      "noto'g'ri qarash keng tarqalgan.",
    example:
      "Xotin yillar davomida ishlamay bola " +
      "tarbiyalagan, er esa daromad topgan. " +
      "Ajralishda er \"hammasini men olganman\" " +
      "deydi. Bu dalil o'tmaydi: nikoh davrida " +
      "orttirilgan mol-mulk baribir umumiy " +
      "hisoblanadi.",
    keyPoints: [
      "Er va xotin oilada teng huquqqa ega",
      "Oila masalalari birgalikda hal qilinadi",
      "Uy ishlari bilan band bo'lish mulkiy huquqni kamaytirmaydi",
      "\"Kim topgan — o'shaniki\" qoidasi qonunda yo'q",
    ],
    warning:
      "Tenglik faqat RASMIY nikohda amal qiladi. " +
      "Ro'yxatdan o'tmagan munosabatda bu himoya " +
      "umuman ishlamaydi.",
    lawRefs: [
      { code: "OK", article: "19" },
      { code: "OK", article: "2" },
    ],
  },

  /* ── 12 ────────────────────────────────────────────────────── */
  {
    heading: "Familiya tanlash",
    text:
      "Nikoh tuzayotganda tomonlar familiya " +
      "masalasini hal qiladi. Tanlov erkin va bu " +
      "huquq ikkalasiga ham teng beriladi.\n\n" +
      "Odatda uch variant bo'ladi: birining " +
      "familiyasini umumiy qilib olish; har biri " +
      "o'z familiyasida qolish; yoki qonunda " +
      "nazarda tutilgan boshqa tartibda birlashgan " +
      "familiya olish.\n\n" +
      "Tanlov nikoh qayd etilayotganda amalga " +
      "oshiriladi va guvohnomaga yoziladi. " +
      "Keyinchalik uni o'zgartirish mumkin, lekin " +
      "bu alohida tartibda va alohida ariza " +
      "bilan bo'ladi.\n\n" +
      "Amaliy jihat: familiya o'zgartirilsa, " +
      "boshqa hujjatlarni ham yangilash kerak " +
      "bo'ladi — pasport, bank, mehnat daftarchasi, " +
      "mulk hujjatlari.",
    example:
      "Xotin erining familiyasini oldi, lekin " +
      "kvartira hujjati eski familiyada qolgan. " +
      "Bitim tuzmoqchi bo'lganda notarius " +
      "familiya o'zgarganini tasdiqlovchi hujjat " +
      "so'raydi. Bu holat oldindan hujjatlarni " +
      "yangilamaslikdan kelib chiqadi.",
    keyPoints: [
      "Familiya tanlash huquqi ikkala tomonga teng beriladi",
      "Tanlov nikoh qayd etilayotganda amalga oshiriladi",
      "Har biri o'z familiyasida qolishi mumkin",
      "O'zgartirilsa boshqa hujjatlarni ham yangilash kerak",
    ],
    warning:
      "Familiya o'zgartirilgach mulk hujjatlarini " +
      "yangilamaslik keyinchalik bitim va meros " +
      "masalalarida jiddiy to'siq bo'ladi.",
    lawRefs: [
      { code: "OK", article: "20" },
      { code: "OK", article: "214" },
    ],
  },

  /* ── 13 ────────────────────────────────────────────────────── */
  {
    heading: "Kasb, mashg'ulot va turar joy tanlash erkinligi",
    text:
      "Er va xotinning har biri mashg'ulot turini, " +
      "kasbini va turar joyini MUSTAQIL tanlaydi. " +
      "Bu huquq nikoh bilan cheklanmaydi.\n\n" +
      "Amalda bu shuni anglatadi: bir tomon " +
      "ikkinchisiga ishlashni yoki ishlamaslikni " +
      "majburlay olmaydi; kasb tanlashga " +
      "aralasha olmaydi; qayerda yashashni " +
      "bir tomonlama belgilay olmaydi.\n\n" +
      "Albatta, amalda oila birgalikda qaror " +
      "qabul qiladi va bu tabiiy. Lekin huquqiy " +
      "jihatdan bu KELISHUV bo'lishi kerak, " +
      "buyruq emas.\n\n" +
      "Bu norma ayniqsa ayollarning mehnat " +
      "huquqlari uchun muhim: ishga chiqish " +
      "uchun erning yozma roziligi kabi talablar " +
      "qonunga zid.",
    example:
      "Er xotiniga ishdan bo'shashni talab qildi. " +
      "Huquqiy jihatdan bunday talabning majburiy " +
      "kuchi yo'q — xotin o'z kasbini o'zi " +
      "tanlaydi. Ish beruvchi ham erning " +
      "roziligini so'ray olmaydi.",
    keyPoints: [
      "Kasb va mashg'ulot turi mustaqil tanlanadi",
      "Turar joyni bir tomon bir tomonlama belgilay olmaydi",
      "Oilaviy qarorlar kelishuv bo'lishi kerak, buyruq emas",
      "Ishga chiqish uchun er-xotinning roziligi talab qilinmaydi",
    ],
    warning:
      "Bu erkinlikni cheklovchi \"kelishuvlar\" " +
      "(masalan nikoh shartnomasidagi ishlash " +
      "taqiqi) huquqiy kuchga ega bo'lmaydi.",
    lawRefs: [
      { code: "OK", article: "22" },
      { code: "OK", article: "19" },
    ],
  },

  /* ── 14 ────────────────────────────────────────────────────── */
  {
    heading: "Oila masalalarini birgalikda hal qilish",
    text:
      "Bolalar tarbiyasi va oila turmushining " +
      "boshqa masalalari er-xotin tomonidan " +
      "BIRGALIKDA hal qilinadi. Bu tenglik " +
      "tamoyilining amaliy davomi.\n\n" +
      "\"Birgalikda\" degani — ikkalasining ham " +
      "fikri hisobga olinishi. Bir tomon " +
      "ikkinchisining roziligisiz bolaning " +
      "maktabini, davolanish usulini yoki " +
      "yashash joyini o'zgartira olmaydi.\n\n" +
      "Kelishmovchilik chiqsa nima bo'ladi? " +
      "Qonun bunday holatda vasiylik va homiylik " +
      "organiga yoki sudga murojaat qilish " +
      "imkoniyatini beradi. Ya'ni tortishuvni " +
      "kuch bilan emas, tartib bilan hal qilish " +
      "yo'li mavjud.\n\n" +
      "Bolaga taalluqli har qanday masalada " +
      "yana o'sha asosiy o'lchov ishlaydi — " +
      "bolaning manfaati.",
    example:
      "Ota bolani boshqa shaharga ko'chirib " +
      "o'qitmoqchi, ona rozi emas. Bu masalani " +
      "ota bir o'zi hal qila olmaydi. " +
      "Kelishuvga erishilmasa — vasiylik va " +
      "homiylik organi yoki sud aralashadi.",
    keyPoints: [
      "Oila va bola masalalari birgalikda hal qilinadi",
      "Bir tomon muhim qarorni yolg'iz qabul qila olmaydi",
      "Kelishmovchilikda vasiylik organi yoki sudga murojaat qilinadi",
      "Yakuniy o'lchov — bolaning manfaati",
    ],
    warning:
      "Bolani ikkinchi ota-onaning roziligisiz " +
      "olib ketish keyinchalik sudda jiddiy " +
      "salbiy dalil bo'lib xizmat qiladi.",
    lawRefs: [
      { code: "OK", article: "21" },
      { code: "OK", article: "68" },
    ],
  },

  /* ── 15 ────────────────────────────────────────────────────── */
  {
    heading: "Umumiy mulk: nikohda orttirilgan hamma narsa",
    text:
      "Bu — oila huquqidagi eng muhim mavzulardan " +
      "biri. Nikoh davrida orttirilgan mol-mulk " +
      "er-xotinning UMUMIY mulki hisoblanadi.\n\n" +
      "Umumiy mulkka nimalar kiradi: ish haqi va " +
      "boshqa daromadlar, ular hisobiga sotib " +
      "olingan ko'char va ko'chmas mulk, qimmatli " +
      "qog'ozlar, omonatlar, tadbirkorlik " +
      "faoliyatidan olingan daromadlar.\n\n" +
      "Eng muhim qoida: mulk KIMNING NOMIGA " +
      "rasmiylashtirilganidan qat'i nazar umumiy " +
      "hisoblanadi. Kvartira faqat erning nomida " +
      "bo'lsa ham, u nikoh davrida olingan bo'lsa " +
      "— umumiy.\n\n" +
      "Shuningdek, uy ishlari bilan band bo'lgan " +
      "yoki uzrli sabab bilan mustaqil daromadi " +
      "bo'lmagan tomon ham umumiy mulkka teng " +
      "huquqli.",
    example:
      "Nikoh davrida er o'z nomiga avtomobil va " +
      "kvartira rasmiylashtirdi. Xotin ishlamagan. " +
      "Ajralishda bu mol-mulk baribir umumiy " +
      "hisoblanadi va bo'linishi kerak — " +
      "hujjatdagi ism buni o'zgartirmaydi.",
    keyPoints: [
      "Nikoh davrida orttirilgan mol-mulk umumiy hisoblanadi",
      "Kimning nomiga rasmiylashtirilgani ahamiyatsiz",
      "Daromadi bo'lmagan tomon ham teng huquqli",
      "Umumiy mulkka daromad, mulk, omonat va qimmatli qog'ozlar kiradi",
    ],
    warning:
      "Mulkni faqat bir tomonning nomiga " +
      "rasmiylashtirish uni \"shaxsiy\" qilib " +
      "qo'ymaydi. Bu eng ko'p tarqalgan xato.",
    lawRefs: [
      { code: "OK", article: "23" },
      { code: "OK", article: "28" },
    ],
  },

  /* ── 16 ────────────────────────────────────────────────────── */
  {
    heading: "Umumiy mulkni tasarruf etish: kimning roziligi kerak",
    text:
      "Umumiy mulk bo'lgach, uni bir tomon " +
      "yolg'iz sotib yubora oladimi? Qoida " +
      "shunday: umumiy mol-mulkka egalik qilish, " +
      "undan foydalanish va uni tasarruf etish " +
      "er-xotinning O'ZARO ROZILIGI bilan " +
      "amalga oshiriladi.\n\n" +
      "Kundalik mayda bitimlarda rozilik " +
      "nazarda tutilgan deb hisoblanadi — har " +
      "safar do'kondan non olishga rozilik " +
      "so'ralmaydi.\n\n" +
      "Lekin JIDDIY bitimlarda (ko'chmas mulk, " +
      "notarial tasdiqlanishi yoki ro'yxatdan " +
      "o'tishi shart bo'lgan bitimlar) ikkinchi " +
      "tomonning roziligi ALOHIDA va aniq " +
      "shaklda talab qilinadi.\n\n" +
      "Rozilik olinmasdan tuzilgan bunday bitim " +
      "sud tartibida haqiqiy emas deb topilishi " +
      "mumkin.",
    example:
      "Er xotinining roziligisiz umumiy " +
      "kvartirani sotdi. Xotin bitimni sudda " +
      "e'tiroz bilan haqiqiy emas deb topishga " +
      "haraka qilishi mumkin. Aynan shu sababdan " +
      "notariuslar bunday bitimlarda ikkinchi " +
      "tomonning roziligini talab qiladi.",
    keyPoints: [
      "Umumiy mulk o'zaro rozilik bilan tasarruf etiladi",
      "Kundalik mayda bitimlarda rozilik nazarda tutiladi",
      "Ko'chmas mulk bitimlarida alohida rozilik shart",
      "Roziliqsiz bitim haqiqiy emas deb topilishi mumkin",
    ],
    warning:
      "Og'zaki rozilikni keyinchalik isbotlash " +
      "deyarli imkonsiz. Jiddiy bitimlarda " +
      "rozilik yozma va notarial bo'lishi kerak.",
    lawRefs: [
      { code: "OK", article: "24" },
      { code: "OK", article: "23" },
    ],
  },

  /* ── 17 ────────────────────────────────────────────────────── */
  {
    heading: "Shaxsiy mulk: nima bo'linmaydi",
    text:
      "Hamma narsa ham umumiy emas. Qonun " +
      "er-xotinning har birining SHAXSIY mulkini " +
      "alohida ajratadi va u bo'linmaydi.\n\n" +
      "Shaxsiy mulkka odatda quyidagilar kiradi: " +
      "nikohgacha tegishli bo'lgan mol-mulk; " +
      "nikoh davrida MEROS yoki HADYA tariqasida " +
      "olingan mol-mulk; shaxsiy foydalanishdagi " +
      "buyumlar.\n\n" +
      "Lekin muhim istisno bor: agar nikoh " +
      "davrida shaxsiy mulkning qiymati umumiy " +
      "mablag' yoki ikkinchi tomonning mehnati " +
      "hisobiga SEZILARLI darajada oshgan bo'lsa, " +
      "u umumiy mulk deb topilishi mumkin.\n\n" +
      "Shu sababli shaxsiy mulkni tasdiqlovchi " +
      "hujjatlarni (hadya shartnomasi, meros " +
      "guvohnomasi, sotib olish sanasi) saqlab " +
      "qo'yish juda muhim.",
    example:
      "Erga otasidan meros uy qoldi — bu shaxsiy " +
      "mulk. Lekin nikoh davrida umumiy pulga " +
      "uyga katta ta'mir qilindi va qiymati " +
      "sezilarli oshdi. Endi bu uy umumiy mulk " +
      "deb topilishi mumkin.",
    keyPoints: [
      "Nikohgacha bo'lgan mulk shaxsiy hisoblanadi",
      "Meros va hadya — shaxsiy mulk, bo'linmaydi",
      "Umumiy mablag' hisobiga qiymati oshsa umumiy bo'lib qolishi mumkin",
      "Shaxsiy mulkni tasdiqlovchi hujjatlarni saqlash shart",
    ],
    warning:
      "Hadya og'zaki bo'lsa, uni keyinchalik " +
      "isbotlash juda qiyin. Yirik hadyalarni " +
      "yozma rasmiylashtirish kerak.",
    lawRefs: [
      { code: "OK", article: "25" },
      { code: "OK", article: "26" },
    ],
  },

  /* ── 18 ────────────────────────────────────────────────────── */
  {
    heading: "Shaxsiy foydalanishdagi buyumlar",
    text:
      "Alohida turadigan guruh — shaxsiy " +
      "foydalanishdagi buyumlar. Kiyim-kechak, " +
      "poyabzal, gigiyena vositalari va shunga " +
      "o'xshash buyumlar umumiy mablag'ga " +
      "olingan bo'lsa ham, ulardan foydalangan " +
      "tomonning mulki hisoblanadi.\n\n" +
      "Mantiq oddiy: bunday buyumlarni bo'lish " +
      "ham amaliy jihatdan ma'nosiz, ham " +
      "insonning shaxsiy hayotiga aralashish " +
      "bo'lardi.\n\n" +
      "Lekin bu yerda ham istisno bor: " +
      "ZEBU-ZIYNAT buyumlari va boshqa " +
      "hashamat buyumlari bu qoidaga " +
      "kirmaydi. Ular umumiy mablag'ga " +
      "olingan bo'lsa — umumiy mulk.\n\n" +
      "Amalda tortishuv aynan shu chegara " +
      "atrofida bo'ladi: qaysi buyum " +
      "\"shaxsiy foydalanish\", qaysi biri " +
      "\"hashamat\" degan savol ko'pincha " +
      "sudda hal qilinadi.",
    example:
      "Umumiy pulga olingan kundalik kiyimlar " +
      "bo'linmaydi. Lekin xuddi shu pulga " +
      "olingan qimmatbaho zargarlik buyumlari " +
      "umumiy mulk hisoblanadi va bo'linishi " +
      "mumkin.",
    keyPoints: [
      "Shaxsiy foydalanishdagi buyumlar bo'linmaydi",
      "Ular umumiy pulga olingan bo'lsa ham foydalanuvchiniki",
      "Zebu-ziynat va hashamat buyumlari bu qoidaga kirmaydi",
      "Chegaradagi tortishuvlar sudda hal qilinadi",
    ],
    warning:
      "Qimmatbaho buyumlarning cheki va " +
      "hujjatini saqlang — nizoda ularning " +
      "qiymati va olingan sanasi hal qiluvchi " +
      "bo'ladi.",
    lawRefs: [
      { code: "OK", article: "26" },
      { code: "OK", article: "25" },
    ],
  },

  /* ── 19 ────────────────────────────────────────────────────── */
  {
    heading: "Nikoh shartnomasi nima va kimga kerak",
    text:
      "Nikoh shartnomasi — er-xotinning nikohdagi " +
      "va ajralish holatidagi MULKIY " +
      "munosabatlarini belgilaydigan kelishuv.\n\n" +
      "Uni nikohdan oldin ham, nikoh davrida ham " +
      "tuzish mumkin. Nikohdan oldin tuzilgan " +
      "shartnoma nikoh qayd etilgan paytdan " +
      "kuchga kiradi.\n\n" +
      "Shartnoma NOTARIAL tasdiqlanishi shart. " +
      "Oddiy yozma shakl yetarli emas — bu talab " +
      "bajarilmasa shartnoma kuchga ega bo'lmaydi.\n\n" +
      "Kimga kerak? Ayniqsa: tadbirkorlik bilan " +
      "shug'ullanuvchilarga, nikohgacha jiddiy " +
      "mulki bo'lganlarga, takroriy nikohga " +
      "kirayotganlarga va oldingi nikohdan " +
      "bolasi borlarga. Shartnoma nizoni " +
      "oldini oladi, chunki qoidalar " +
      "OLDINDAN kelishib olinadi.",
    example:
      "Tadbirkor nikohdan oldin shartnoma tuzib, " +
      "biznesini shaxsiy mulk sifatida " +
      "belgiladi. Ajralish holatida biznes " +
      "bo'linish predmeti bo'lmaydi — bu " +
      "ikkala tomon uchun ham aniqlik beradi.",
    keyPoints: [
      "Nikoh shartnomasi faqat mulkiy munosabatlarni belgilaydi",
      "Nikohdan oldin ham, nikoh davrida ham tuzilishi mumkin",
      "Notarial tasdiqlanishi majburiy",
      "Nizoni oldindan oldini olish uchun eng samarali vosita",
    ],
    warning:
      "Notarial tasdiqlanmagan \"nikoh " +
      "shartnomasi\" hech qanday huquqiy kuchga " +
      "ega emas — u oddiy qog'oz bo'lib qoladi.",
    lawRefs: [
      { code: "OK", article: "29" },
      { code: "OK", article: "30" },
    ],
  },

  /* ── 20 ────────────────────────────────────────────────────── */
  {
    heading: "Nikoh shartnomasining mazmuni va chegaralari",
    text:
      "Nikoh shartnomasida nimalarni yozish " +
      "mumkin? Tomonlar mulkiy rejimni o'zlari " +
      "belgilaydi: qaysi mulk umumiy, qaysi biri " +
      "shaxsiy bo'lishini, ajralishda qanday " +
      "bo'linishini, kim kimga qanday ta'minot " +
      "berishini.\n\n" +
      "Lekin shartnomaning QAT'IY CHEGARALARI " +
      "bor. Unga quyidagilarni kirita bo'lmaydi: " +
      "shaxsiy nomulkiy munosabatlar (kim uy " +
      "ishini qiladi, kim bilan muloqot qiladi); " +
      "bolalarga nisbatan huquq va majburiyatlar; " +
      "tomonlardan birining huquq layoqatini " +
      "cheklaydigan shartlar.\n\n" +
      "Bir tomonni o'ta noqulay ahvolga soladigan " +
      "shartlar ham haqiqiy emas deb topilishi " +
      "mumkin.\n\n" +
      "Shartnomani keyinchalik o'zgartirish yoki " +
      "bekor qilish mumkin — lekin faqat ikkala " +
      "tomonning roziligi bilan va yana notarial " +
      "shaklda. Bir tomonlama voz kechishga " +
      "yo'l qo'yilmaydi.",
    example:
      "Shartnomaga \"ajralishda bola ota bilan " +
      "qoladi\" deb yozildi. Bu shart ishlamaydi " +
      "— bola masalasi nikoh shartnomasi " +
      "predmeti emas va uni sud bola manfaatidan " +
      "kelib chiqib hal qiladi.",
    keyPoints: [
      "Shartnoma faqat mulkiy masalalarni tartibga soladi",
      "Bolalarga oid masalalarni unga kiritish mumkin emas",
      "Bir tomonni o'ta noqulay ahvolga soluvchi shartlar bekor qilinadi",
      "O'zgartirish ikkala tomon roziligi va notarial shaklda bo'ladi",
    ],
    warning:
      "Shartnomani bir tomonlama bekor qilib " +
      "bo'lmaydi. Imzolashdan oldin har bir " +
      "bandni sinchiklab o'qing va tushunmagan " +
      "joyini notariusdan so'rang.",
    lawRefs: [
      { code: "OK", article: "31" },
      { code: "OK", article: "32" },
      { code: "OK", article: "33" },
    ],
  },
];

module.exports = { SECTIONS };
