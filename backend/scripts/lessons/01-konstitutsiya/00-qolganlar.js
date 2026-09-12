"use strict";
/**
 * MODUL 1 — KONSTITUTSIYA VA DAVLAT (8 dars)
 *
 * Manba: O'zbekiston Respublikasi Konstitutsiyasi (KONS, 155 modda,
 * 2023-yil 30-aprel tahriri).
 *
 * Nima uchun kutubxona shu moduldan boshlanadi: Konstitutsiya boshqa
 * barcha qonunlarning asosi. Foydalanuvchi "mening huquqim bormi?"
 * degan savolga javobni aynan shu yerdan topadi, qolgan kodekslar esa
 * shu huquqlarni tafsilotlashtiradi.
 *
 * ⚠️ KONSTITUTSIYA MODDALARIDA SARLAVHA YO'Q — bu normal holat
 * (Konstitutsiyada modda nomlari bo'lmaydi). Shuning uchun `lawRefs`
 * moddalar MATNI bo'yicha tanlangan va tekshirilgan.
 */

const LESSONS = [
  /* ═══════════════════════════════════════════════════════════════
     1. Konstitutsiya nima
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "konstitutsiya-nima",
    category: "constitution",
    level: "basic",
    order: 1010,
    title: "Konstitutsiya nima va nega u eng kuchli hujjat",
    desc:
      "Qonunlar ierarxiyasi: nega Konstitutsiya boshqa hamma qoidadan " +
      "ustun turadi va bu sizga amalda qanday foyda beradi.",
    objectives: [
      "Konstitutsiya bilan oddiy qonun o'rtasidagi farqni aniq tushunasiz",
      "Hujjatlar ierarxiyasini bilasiz: qaysi hujjat qaysinisidan ustun",
      "Qonunga zid qaror chiqarilganda nimaga tayanish kerakligini bilasiz",
      "Konstitutsiya matnini o'zingiz mustaqil o'qib, kerakli qoidani topa olasiz",
    ],
    practicalSteps: [
      "Konstitutsiya sahifasini ochib, «Inson va fuqaroning asosiy huquqlari» bo'limini bir marta to'liq o'qib chiqing — u uzun emas",
      "Sizga tegishli 3-4 ta moddani belgilab qo'ying, ular kelajakda ko'p ishga yaraydi",
      "Biror organ huquqingizni cheklasa, avval «bu cheklov qaysi qonunga asoslangan?» degan savolni yozma ravishda bering",
      "Cheklov faqat idoraviy buyruqqa asoslansa — bu kuchsiz asos, shikoyatda aynan shuni ko'rsating",
    ],
    sections: [
      {
        heading: "Konstitutsiya — huquq tizimining poydevori",
        text:
          "Konstitutsiya — davlatning asosiy qonuni. Uni boshqa " +
          "hujjatlardan ajratib turadigan asosiy xususiyat — eng yuqori " +
          "yuridik kuch. Bu shuni bildiradi: agar biror qonun, qaror, " +
          "buyruq yoki nizom Konstitutsiyaga zid bo'lsa, amalda " +
          "Konstitutsiya qoidasi qo'llaniladi, zid hujjat esa yuridik kuchga " +
          "ega bo'lmaydi.\n\n" +
          "Konstitutsiya ikkita vazifani bajaradi. Birinchisi — davlatni " +
          "tashkil qilish: hokimiyat qanday bo'linadi, kim qanday " +
          "vakolatga ega, organlar bir-birini qanday nazorat qiladi. " +
          "Ikkinchisi, va bu siz uchun muhimrog'i — inson huquqlarini " +
          "belgilash va davlat oldiga ularni ta'minlash majburiyatini " +
          "qo'yish.\n\n" +
          "Yana bir muhim jihat: Konstitutsiya to'g'ridan-to'g'ri amal " +
          "qiladi. Ya'ni undagi huquqdan foydalanish uchun «bu huquqni " +
          "aniqlashtiruvchi alohida qonun bormi?» degan savolni kutib " +
          "o'tirish shart emas — huquqning o'zi Konstitutsiyada " +
          "yozilganligi yetarli asos.",
        example:
          "Aytaylik, biror idora ichki buyruq bilan fuqarolarning " +
          "murojaatini «faqat shu idoraning o'z blankasida» qabul " +
          "qilishni joriy qildi va boshqa shakldagi arizani rad etdi. " +
          "Murojaat qilish huquqi Konstitutsiyada kafolatlangani uchun, " +
          "ichki buyruq bu huquqni amalda yo'q qiladigan darajada " +
          "cheklab qo'ya olmaydi — shikoyatda aynan shu qarama-qarshilikka " +
          "tayanish mumkin.",
        keyPoints: [
          "Konstitutsiya — eng yuqori yuridik kuchga ega hujjat, unga zid qoida qo'llanilmaydi",
          "Konstitutsiya to'g'ridan-to'g'ri amal qiladi — qo'shimcha qonunni kutish shart emas",
          "U ham davlat tuzilishini, ham inson huquqlarini belgilaydi",
          "Konstitutsiya va qonunlarning ustunligi prinsipi so'zsiz tan olinadi",
        ],
        warning:
          "Ko'p uchraydigan xato — idoraviy buyruq yoki «ichki tartib» " +
          "qonundan kuchli deb o'ylash. Aslida ierarxiya teskari: " +
          "Konstitutsiya → qonun → hukumat qarori → idoraviy hujjat. " +
          "Quyi hujjat yuqorisiga zid bo'lsa, u qo'llanilmaydi.",
        lawRefs: [
          { code: "KONS", article: "15" },
          { code: "KONS", article: "16" },
        ],
      },
      {
        heading: "Huquqlar «berilmaydi» — tan olinadi",
        text:
          "Konstitutsiyaning muhim g'oyasi shundaki, inson huquqlari " +
          "davlat tomonidan sovg'a qilinmaydi. Ular insonda tug'ilishidan " +
          "bor deb hisoblanadi, davlat esa ularni tan oladi, ta'minlaydi " +
          "va himoya qiladi. Matnda bu «e'tirof etiladi va kafolatlanadi» " +
          "degan ibora bilan ifodalangan.\n\n" +
          "Bu nazariy tafsilot emas, amaliy natijasi bor. Agar huquq " +
          "davlat sovg'asi bo'lsa, uni xohlagan paytda qaytarib olish " +
          "mumkin bo'lardi. Tan olingan huquqni esa faqat qonun bilan va " +
          "faqat asosli sabab bilan cheklash mumkin — ya'ni cheklovni " +
          "har doim ASOSLASH kerak, huquqni esa asoslash kerak emas.\n\n" +
          "Shu bilan birga Konstitutsiya fuqaro va davlat munosabatini " +
          "ikki tomonlama deb belgilaydi: fuqaroning huquqlari bilan " +
          "birga burchlari ham bor, davlatning esa vakolatlari bilan " +
          "birga majburiyatlari ham bor. Ya'ni bu tenglar o'rtasidagi " +
          "munosabat, bir tomonning ikkinchisiga buyrug'i emas.\n\n" +
          "Inson huquq va erkinliklari xalqaro huquqning umume'tirof " +
          "etilgan normalariga muvofiq tan olinadi — bu O'zbekiston " +
          "qonunchiligini xalqaro standartlar bilan bog'laydi.",
        example:
          "Ikki holatni solishtiring. Birinchisida siz «menga bu " +
          "huquqni kim berdi?» degan savolga javob izlashingiz kerak. " +
          "Ikkinchisida esa cheklovni joriy qilgan organ «bu cheklov " +
          "qaysi qonunga asoslangan va nima uchun zarur?» degan savolga " +
          "javob berishi kerak. O'zbekiston Konstitutsiyasi ikkinchi " +
          "modelni tanlagan — isbot yuki cheklovchi tomonda.",
        keyPoints: [
          "Huquqlar tan olinadi, sovg'a qilinmaydi — shuning uchun ularni asoslash kerak emas",
          "Cheklovni esa har doim asoslash kerak: qaysi qonun va nima uchun",
          "Fuqaro va davlat o'zaro huquq va majburiyatlar bilan bog'langan",
          "Huquqlar xalqaro huquq normalariga muvofiq e'tirof etiladi",
        ],
        warning:
          "«Qonunda ruxsat berilmagan — demak taqiqlangan» degan " +
          "yondashuv fuqaroga nisbatan ishlamaydi. Aksincha: fuqaroga " +
          "qonun taqiqlamagan narsa mumkin, davlat organiga esa faqat " +
          "vakolat berilgan narsa mumkin.",
        lawRefs: [
          { code: "KONS", article: "19" },
          { code: "KONS", article: "20" },
        ],
      },
      {
        heading: "Huquqni cheklash: qachon mumkin, qachon mumkin emas",
        text:
          "Hech bir huquq tizimida barcha huquqlar mutlaq emas. " +
          "Masalan, so'z erkinligi boshqa insonning sha'nini " +
          "haqoratlashga ruxsat bermaydi, harakatlanish erkinligi esa " +
          "maxsus rejim o'rnatilgan hududga kirishga asos bo'lmaydi. " +
          "Savol shundaki — cheklov qanday shartlar bilan haqli " +
          "hisoblanadi.\n\n" +
          "Konstitutsiya bu yerda aniq chegara qo'yadi: shaxsga uning " +
          "roziligisiz qonunchilikda belgilanmagan majburiyat " +
          "yuklatilishi mumkin emas. Ya'ni cheklovning manbasi — QONUN. " +
          "Mansabdor shaxsning og'zaki ko'rsatmasi, idoraviy xat yoki " +
          "«shunday tartib bor» degan tushuntirish yetarli asos " +
          "bo'lmaydi.\n\n" +
          "Ikkinchi chegara — vaqt. Rasmiy e'lon qilinmagan qonun " +
          "asosida hech kim jazoga tortilishi, mol-mulkidan yoki " +
          "biror huquqidan mahrum etilishi mumkin emas. Bu qoida " +
          "qonunning orqaga qarab ishlamasligini ta'minlaydi: kechagi " +
          "harakatingiz bugun chiqqan qoida bilan baholanmaydi.\n\n" +
          "Uchinchi chegara — mazmun. Konstitutsiyaning birinchi " +
          "bo'limidagi asosiy prinsiplarga zid tarzda hech qanday " +
          "qoida talqin qilinishi mumkin emas.",
        example:
          "Xodimdan «korxona ichki tartibiga ko'ra» dam olish kunida " +
          "haq to'lanmagan ishga chiqishni talab qilishdi va rad " +
          "etganda jazo qo'llashdi. Bunday majburiyat qonundan " +
          "kelib chiqmasa va xodim rozilik bermagan bo'lsa, u yuridik " +
          "asosga ega emas — ichki hujjat qonun o'rnini bosa olmaydi.",
        keyPoints: [
          "Har qanday majburiyat va cheklov QONUNGA asoslanishi shart",
          "Rasmiy e'lon qilinmagan qoida asosida jazolash mumkin emas",
          "Cheklov Konstitutsiyaning asosiy prinsiplariga zid bo'lmasligi kerak",
          "Rozilik bilan olingan majburiyat va majburlab yuklangan majburiyat — turli narsa",
        ],
        warning:
          "«Boshqalar ham shunday qiladi» yoki «har doim shunday " +
          "bo'lgan» — cheklov uchun huquqiy asos emas. Asos faqat " +
          "amaldagi qonun matni bo'lishi mumkin.",
        lawRefs: [
          { code: "KONS", article: "21" },
          { code: "KONS", article: "30" },
        ],
      },
      {
        heading: "Konstitutsiya matnini o'zingiz o'qishni o'rganish",
        text:
          "Konstitutsiya yuristlar uchun emas, fuqarolar uchun " +
          "yozilgan hujjat — uning tili boshqa kodekslarga qaraganda " +
          "ancha sodda. Shuning uchun uni o'qish yuridik ma'lumot " +
          "talab qilmaydi, faqat tuzilishini bilish kifoya.\n\n" +
          "Hujjat bo'limlarga, bo'limlar boblarga, boblar moddalarga " +
          "bo'lingan. Sizga eng ko'p kerak bo'ladigan qism — inson va " +
          "fuqaroning asosiy huquqlari haqidagi bo'lim. Uning ichida " +
          "huquqlar guruhlarga ajratilgan: shaxsiy huquqlar (hayot, " +
          "erkinlik, daxlsizlik), siyosiy huquqlar (saylash, " +
          "birlashish, murojaat), iqtisodiy-ijtimoiy-madaniy huquqlar " +
          "(mehnat, mulk, ta'lim, sog'liq) va alohida bob — huquqlar " +
          "kafolatlari.\n\n" +
          "O'qish uslubi: avval bobning nomiga qarang, keyin kerakli " +
          "moddani toping. Modda bir necha xatboshidan iborat bo'lsa, " +
          "har biri alohida qoida — ular birgalikda emas, alohida ham " +
          "ishlaydi.\n\n" +
          "Muhim ko'nikma: moddadagi «qonunda belgilangan tartibda» " +
          "iborasini payqash. Bu ibora huquq mavjud, lekin uning " +
          "amalga oshirish tartibi alohida qonunda yozilgan degan " +
          "ma'noni beradi — ya'ni tafsilotni tegishli kodeksdan " +
          "izlash kerak.",
        example:
          "«Sud orqali himoya qilish huquqi» Konstitutsiyada " +
          "kafolatlangan, lekin da'vo arizasi qanday yozilishi, qaysi " +
          "sudga berilishi va qancha boj to'lanishi u yerda yozilmagan. " +
          "Bu tafsilotlar protsessual kodekslarda. Ya'ni Konstitutsiya " +
          "«sizda bu huquq bor» deydi, kodeks esa «uni shunday amalga " +
          "oshirasiz» deb ko'rsatadi.",
        keyPoints: [
          "Konstitutsiya tili sodda — uni o'qish uchun yuridik ma'lumot shart emas",
          "Huquqlar guruhlarga bo'lingan: shaxsiy, siyosiy, iqtisodiy-ijtimoiy",
          "«Qonunda belgilangan tartibda» — tafsilotni tegishli kodeksdan izlash signali",
          "Konstitutsiya huquqni beradi, kodeks uni amalga oshirish yo'lini ko'rsatadi",
        ],
        warning:
          "Internetdagi «Konstitutsiya sharhlari» va forum " +
          "javoblariga tayanmang — ular eski tahrirga asoslangan " +
          "bo'lishi mumkin. Har doim rasmiy matnni o'qing: platformadagi " +
          "Konstitutsiya sahifasi lex.uz manbasidan avtomatik " +
          "yangilanadi.",
        lawRefs: [{ code: "KONS", article: "55" }],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     2. Shaxsiy huquq va erkinliklar  (MAVJUD KALIT — kengaytirildi)
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "konstitutsiya-huquqlar",
    category: "constitution",
    level: "basic",
    order: 1020,
    title: "Shaxsiy huquq va erkinliklaringiz",
    desc:
      "Hayot, erkinlik, shaxsiy daxlsizlik, uy-joy va yozishmalar siri, " +
      "vijdon va so'z erkinligi — eng asosiy huquqlar amalda qanday ishlaydi.",
    objectives: [
      "Shaxsiy huquqlar ro'yxatini va ularning chegaralarini bilasiz",
      "Ushlab turish, tintuv va so'roq paytidagi huquqlaringizni aniq bilasiz",
      "Shaxsiy hayot va yozishmalar sirini kim, qachon buzishi mumkinligini tushunasiz",
      "Ayblanayotgan shaxs huquqlarini (aybsizlik prezumpsiyasi) tushuntirib bera olasiz",
    ],
    practicalSteps: [
      "Ushlab turilsangiz birinchi so'zingiz — advokat talab qilish va sababni yozma ko'rsatishni so'rash bo'lsin",
      "Har qanday bayonnomani o'qimasdan imzolamang; rozi bo'lmagan qismga izoh yozib qo'ying",
      "Uyingizga kirishni talab qilganlarda asos hujjatini (qaror, ajrim) ko'rsatishni so'rang va rekvizitlarini yozib oling",
      "Huquqingiz buzilgan bo'lsa, voqeani sana va guvohlar bilan darhol yozib qo'ying — keyin eslash qiyin bo'ladi",
    ],
    sections: [
      {
        heading: "Yashash huquqi va qadr-qimmat daxlsizligi",
        text:
          "Huquqlar ro'yxati yashash huquqidan boshlanadi — u ajralmas " +
          "huquq deb belgilangan va qonun bilan muhofaza qilinadi. " +
          "Inson hayotiga suiqasd eng og'ir jinoyat deb tan olingan, " +
          "o'lim jazosi esa taqiqlangan.\n\n" +
          "Ikkinchi asosiy qoida — sha'n va qadr-qimmatning daxlsizligi. " +
          "Konstitutsiya buni juda qat'iy ifodalaydi: hech narsa " +
          "insonning qadr-qimmatini kamsitish uchun asos bo'lishi " +
          "mumkin emas. Ya'ni na sodir etgan qilmishi, na ijtimoiy " +
          "holati, na tergov ostida bo'lishi — hech biri kamsitishni " +
          "oqlamaydi.\n\n" +
          "Bundan qat'iy taqiq kelib chiqadi: hech kim qiynoqqa " +
          "solinishi, zo'ravonlikka, shafqatsiz yoki insoniylikka zid " +
          "muomalaga duchor etilishi mumkin emas. Bu taqiqning muhim " +
          "xususiyati — u istisnosiz. Ya'ni «jinoyat og'ir edi» yoki " +
          "«boshqa yo'l qolmadi» kabi sabablar bu taqiqni " +
          "yumshatmaydi.\n\n" +
          "Shuningdek, insonda uning roziligisiz tibbiy yoki ilmiy " +
          "tajribalar o'tkazish taqiqlanadi — rozilik esa erkin va " +
          "xabardor holda berilgan bo'lishi kerak.",
        example:
          "Tergov paytida shaxsdan «tan olish» bayonnomasi bosim " +
          "ostida olingan bo'lsa, bu nafaqat noto'g'ri, balki " +
          "Konstitutsiyaning eng qat'iy taqig'ini buzish hisoblanadi. " +
          "Bunday yo'l bilan olingan ma'lumot dalil sifatida " +
          "ishlatilishi mumkin emas va bu haqda sudga bayonot berish " +
          "huquqi bor.",
        keyPoints: [
          "Yashash huquqi ajralmas, o'lim jazosi taqiqlangan",
          "Qadr-qimmatni kamsitish uchun HECH QANDAY asos bo'lishi mumkin emas",
          "Qiynoq va shafqatsiz muomala taqig'i istisnosiz amal qiladi",
          "Tibbiy va ilmiy tajriba faqat shaxsning xabardor roziligi bilan",
        ],
        warning:
          "Qiynoq faqat jismoniy ta'sir emas. Uzoq uxlatmaslik, " +
          "qo'rqitish, yaqinlariga tahdid qilish ham shu taqiq " +
          "doirasiga kiradi va ular haqida ham shikoyat qilish mumkin.",
        lawRefs: [
          { code: "KONS", article: "25" },
          { code: "KONS", article: "26" },
        ],
      },
      {
        heading: "Erkinlik va shaxsiy daxlsizlik: ushlab turish qoidalari",
        text:
          "Har kim erkinlik va shaxsiy daxlsizlik huquqiga ega. " +
          "Buning amaliy ma'nosi: hech kim qonunga asoslanmagan holda " +
          "hibsga olinishi, ushlab turilishi, qamoqqa olinishi yoki " +
          "ozodligi boshqa yo'l bilan cheklanishi mumkin emas.\n\n" +
          "Bu yerda eng muhim ko'nikma — ushlab turishning ASOSINI " +
          "so'rash. Har qanday ozodlikni cheklash aniq huquqiy asosga " +
          "va rasmiylashtirilgan hujjatga tayanishi kerak. Sababni " +
          "bilish sizning huquqingiz, uni tushuntirish esa mansabdor " +
          "shaxsning majburiyati.\n\n" +
          "Ikkinchi muhim huquq — malakali yuridik yordam. Konstitutsiya " +
          "buni har kimga kafolatlaydi va alohida ta'kidlaydi: shaxs " +
          "jinoyat protsessining har qanday bosqichida advokat yordamiga " +
          "ega bo'lish huquqiga ega. Qonunda nazarda tutilgan hollarda " +
          "yuridik yordam davlat hisobidan ko'rsatiladi — ya'ni to'lash " +
          "imkoni yo'qligi advokatsiz qolish uchun sabab emas.\n\n" +
          "Uchinchisi — o'ziga qarshi guvohlik berishga majburlashning " +
          "taqiqlanishi. Jim turish huquqi ayb belgisi hisoblanmaydi.",
        example:
          "Shaxs ko'chada ushlab turildi va «tekshiruv uchun» " +
          "bo'limga olib borildi, sabab tushuntirilmadi, telefon " +
          "qilishga ruxsat berilmadi. Bu holatda kamida uchta huquq " +
          "buzilgan: asosni bilish, yuridik yordam olish va yaqinlarni " +
          "xabardor qilish. Har biri shikoyat uchun mustaqil asos.",
        keyPoints: [
          "Ozodlikni cheklash faqat qonuniy asos va rasmiy hujjat bilan",
          "Advokat huquqi jinoyat protsessining HAR QANDAY bosqichida amal qiladi",
          "Yuridik yordam qonunda belgilangan hollarda davlat hisobidan ko'rsatiladi",
          "O'ziga qarshi guvohlik berishga majburlash taqiqlanadi",
        ],
        warning:
          "«Avval suhbatlashamiz, keyin advokat chaqirasiz» degan " +
          "taklifga rozi bo'lmang. Advokatgacha bo'lgan «norasmiy " +
          "suhbat» keyin bayonnomaga aylanib qolishi mumkin.",
        lawRefs: [
          { code: "KONS", article: "27" },
          { code: "KONS", article: "29" },
        ],
      },
      {
        heading: "Aybsizlik prezumpsiyasi",
        text:
          "Bu tamoyil huquqiy davlatning asosiy belgisi. Jinoyat sodir " +
          "etganlikda ayblanayotgan shaxs, uning aybi qonunda nazarda " +
          "tutilgan tartibda oshkora sud muhokamasi yo'li bilan " +
          "isbotlanmaguncha va sudning qonuniy kuchga kirgan hukmi " +
          "bo'lmaguncha, aybdor hisoblanmaydi.\n\n" +
          "Bundan bir necha amaliy natija kelib chiqadi. Birinchisi — " +
          "isbot yuki taqsimoti: siz aybsizligingizni isbotlashingiz " +
          "SHART EMAS, ayblov tomoni aybni isbotlashi shart. " +
          "Ikkinchisi — shubha talqini: bartaraf etilmagan shubhalar " +
          "ayblanuvchining foydasiga hal qilinadi.\n\n" +
          "Uchinchisi — muomala: hukm chiqmaguncha shaxsga aybdor " +
          "sifatida munosabatda bo'lish mumkin emas. Bu ommaviy " +
          "bayonotlarga ham tegishli: tergov davomida shaxsni " +
          "«jinoyatchi» deb atash prezumpsiyani buzadi.\n\n" +
          "To'rtinchisi — dalillar sifati. Qonun buzilgan holda " +
          "olingan ma'lumot dalil sifatida ishlatilmaydi, ya'ni " +
          "protsedura buzilishi ayblovni kuchsizlantiradi.",
        example:
          "Ish yuzasidan matbuotda «shaxs pul o'g'irlagani aniqlandi» " +
          "deb xabar berildi, holbuki sud hukmi hali yo'q. To'g'ri " +
          "shakl — «shaxs ayblanmoqda» yoki «shubha qilinmoqda». " +
          "Bu shunchaki so'z tanlash emas: hukmgacha aybdorlikni " +
          "e'lon qilish sha'nni himoya qilish uchun asos bo'ladi.",
        keyPoints: [
          "Ayb faqat sudning qonuniy kuchga kirgan hukmi bilan belgilanadi",
          "Aybsizligini isbotlash ayblanuvchining vazifasi EMAS",
          "Bartaraf etilmagan shubha ayblanuvchi foydasiga hal qilinadi",
          "Qonun buzib olingan ma'lumot dalil bo'la olmaydi",
        ],
        warning:
          "Aybsizlik prezumpsiyasi jinoyat ishlariga tegishli. " +
          "Fuqarolik ishlarida (masalan zarar qoplash da'vosida) " +
          "isbot qoidalari boshqacha — u yerda har bir tomon o'z " +
          "talabining asosini o'zi isbotlaydi.",
        lawRefs: [{ code: "KONS", article: "28" }],
      },
      {
        heading: "Shaxsiy hayot, uy-joy va yozishmalar siri",
        text:
          "Har bir inson shaxsiy hayotining daxlsizligi, shaxsiy va " +
          "oilaviy sirga ega bo'lish, o'z sha'ni va qadr-qimmatini " +
          "himoya qilish huquqiga ega. Bu huquq uchta amaliy sohani " +
          "qamrab oladi.\n\n" +
          "Birinchisi — aloqa siri. Yozishmalar, telefon so'zlashuvlari " +
          "va boshqa xabarlar siri qonun bilan qo'riqlanadi. Ularni " +
          "cheklash faqat qonunda belgilangan tartibda, ya'ni " +
          "vakolatli organ qarori asosida mumkin — mansabdor shaxsning " +
          "shaxsiy qiziqishi bilan emas.\n\n" +
          "Ikkinchisi — uy-joy daxlsizligi. Shaxsning turar joyiga " +
          "uning xohishiga qarshi kirish faqat qonuniy asos va tegishli " +
          "hujjat bilan mumkin. «Bir daqiqaga ko'rib chiqamiz» degan " +
          "og'zaki taklif hujjat o'rnini bosmaydi.\n\n" +
          "Uchinchisi — shaxsga doir ma'lumotlar. Sizning " +
          "ma'lumotlaringizni yig'ish, saqlash va tarqatish qoidalarga " +
          "bo'ysunadi; ularni oshkor qilish uchun asos kerak. Sha'n va " +
          "obro'ga yetkazilgan zararni esa fuqarolik tartibida " +
          "qoplashni talab qilish mumkin.",
        example:
          "Ish beruvchi xodimning shaxsiy telefonidagi xabarlarini " +
          "«tekshirish uchun» ko'rishni talab qildi. Mehnat " +
          "munosabati bunday vakolat bermaydi: aloqa siri xodim " +
          "sifatida emas, INSON sifatida tegishli huquq va u ish " +
          "shartnomasi bilan bekor qilinmaydi.",
        keyPoints: [
          "Yozishmalar va telefon so'zlashuvlari siri qonun bilan qo'riqlanadi",
          "Turar joyga kirish faqat qonuniy asos va hujjat bilan",
          "Shaxsga doir ma'lumotlarni oshkor qilish uchun asos zarur",
          "Sha'n va obro'ga yetkazilgan zarar fuqarolik tartibida qoplanadi",
        ],
        warning:
          "Ijtimoiy tarmoqqa o'zingiz ochiq joylagan ma'lumot " +
          "«shaxsiy sir» himoyasini yo'qotadi. Shuning uchun " +
          "hujjatlar, manzil va bolalar haqidagi ma'lumotni ommaviy " +
          "joylashda ehtiyot bo'ling.",
        lawRefs: [{ code: "KONS", article: "31" }],
      },
      {
        heading: "Fikr, vijdon va harakatlanish erkinligi",
        text:
          "Har kim fikrlash, so'z va e'tiqod erkinligi huquqiga ega. " +
          "Bu huquq ikki qismdan iborat: fikrga ega bo'lish va uni " +
          "ifodalash. Bundan tashqari har kim istalgan axborotni " +
          "izlash, olish va tarqatish huquqiga ega — ya'ni ma'lumot " +
          "olish ham erkinlikning bir qismi.\n\n" +
          "Vijdon erkinligi hamma uchun kafolatlanadi: har kim " +
          "xohlagan dinga e'tiqod qilish yoki hech qaysi dinga " +
          "e'tiqod qilmaslik huquqiga ega. Muhim jihat — bu ikki " +
          "tanlov teng himoyalangan; e'tiqod qilmaslik ham huquq " +
          "hisoblanadi. Diniy qarashlarni majburan singdirish " +
          "taqiqlanadi.\n\n" +
          "Harakatlanish erkinligi qonuniy asosda mamlakatda bo'lib " +
          "turgan har kimga tegishli: mamlakat bo'ylab erkin " +
          "harakatlanish, turar va yashash joyini tanlash, chiqib " +
          "ketish va qaytib kelish huquqi. Cheklovlar faqat qonunda " +
          "belgilangan hollarda qo'llaniladi.\n\n" +
          "Bu erkinliklarning umumiy chegarasi bir: ular boshqa " +
          "shaxslarning huquqlarini buzishga yoki qonun bilan " +
          "qo'riqlanadigan manfaatlarga zarar yetkazishga asos " +
          "bo'lmaydi.",
        example:
          "Fuqaro davlat organi faoliyatini ijtimoiy tarmoqda " +
          "tanqid qildi. Tanqid — fikr ifodalash erkinligining " +
          "o'zagi va u o'z-o'zidan huquqbuzarlik emas. Chegara " +
          "boshqa joyda: aniq shaxsni yolg'on ayblash yoki " +
          "haqoratlash — bu allaqachon boshqa insonning huquqiga " +
          "tegish hisoblanadi.",
        keyPoints: [
          "So'z erkinligi axborot izlash, olish va tarqatishni ham qamraydi",
          "E'tiqod qilish va e'tiqod qilmaslik — teng himoyalangan tanlov",
          "Turar joyni tanlash va mamlakatdan chiqib-kirish erkinligi kafolatlangan",
          "Erkinlikning chegarasi — boshqa shaxslarning huquqlari",
        ],
        warning:
          "Fikr bildirish erkinligi anonimlik kafolati bermaydi. " +
          "Aniq shaxsga qaratilgan yolg'on ayblov uchun javobgarlik " +
          "internetdagi yozuvga ham tegishli.",
        lawRefs: [
          { code: "KONS", article: "33" },
          { code: "KONS", article: "35" },
          { code: "KONS", article: "32" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     3. Siyosiy huquqlar
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "konstitutsiya-siyosiy-huquqlar",
    category: "constitution",
    level: "basic",
    order: 1030,
    title: "Siyosiy huquqlar: murojaat, saylov, birlashish",
    desc:
      "Davlat ishlarida qatnashish, murojaat qilib javob olish, " +
      "birlashmalar tuzish va tinch yig'ilishlar huquqi.",
    objectives: [
      "Davlat ishlarini boshqarishda qatnashishning aniq shakllarini bilasiz",
      "Murojaat qilish huquqi va davlat organining javob berish majburiyatini tushunasiz",
      "Birlashish va yig'ilish erkinligining chegaralarini bilasiz",
      "Davlat xizmatiga kirishda teng huquqlilik nimani bildirishini bilasiz",
    ],
    practicalSteps: [
      "Murojaatni har doim YOZMA shaklda va nusxasini saqlab bering — og'zaki murojaatni keyin isbotlash qiyin",
      "Murojaatda aniq talab yozing: «yordam bering» emas, «shu hujjatni bering» yoki «shu qarorni bekor qiling»",
      "Javob kelmasa yoki qoniqtirmasa — yuqori organga, so'ng sudga murojaat yo'li ochiq",
      "Murojaatni ro'yxatga olish raqamini so'rab oling: bu keyin javob muddatini hisoblash uchun asos",
    ],
    sections: [
      {
        heading: "Davlat ishlarini boshqarishda qatnashish",
        text:
          "Fuqarolar jamiyat va davlat ishlarini boshqarishda " +
          "bevosita hamda o'z vakillari orqali ishtirok etish huquqiga " +
          "ega. «Bevosita» — o'zingiz qatnashasiz (referendum, " +
          "murojaat, jamoatchilik muhokamasi), «vakillar orqali» — " +
          "saylangan deputatlar sizning nomingizdan qaror qabul " +
          "qiladi.\n\n" +
          "Bu huquqning amaliy qiymati shundaki, u davlat qarorlarini " +
          "«boshqalarning ishi» emas, o'z ishingiz deb qarash asosini " +
          "beradi. Qonun loyihalari muhokamasi, mahalliy budjet " +
          "masalalari, hudud rivoji bo'yicha qarorlar — bularda " +
          "fikr bildirish qatnashishning bir shakli.\n\n" +
          "Alohida qoida — davlat xizmatiga kirishda teng huquqlilik. " +
          "Fuqarolar davlat xizmatiga kirishda teng huquqqa ega, " +
          "cheklovlar esa faqat qonun bilan belgilanadi. Ya'ni tanlov " +
          "mezoni malaka bo'lishi kerak; qonunda yozilmagan qo'shimcha " +
          "talab qo'yish teng huquqlilikni buzadi.\n\n" +
          "Yana bir muhim tamoyil — xotin-qizlar va erkaklarning teng " +
          "huquqliligi. Davlat jamiyat va davlat ishlarini boshqarishda " +
          "ularga teng imkoniyatlar ta'minlaydi.",
        example:
          "Bo'sh lavozimga tanlov e'lon qilindi, lekin talablar " +
          "ro'yxatiga lavozim vazifasiga aloqasi bo'lmagan shart " +
          "kiritilgan. Bunday shart qonunda belgilanmagan bo'lsa, " +
          "u nomzodlar doirasini asossiz toraytiradi va teng " +
          "huquqlilik prinsipiga zid bo'ladi.",
        keyPoints: [
          "Qatnashish ikki shaklda: bevosita va saylangan vakillar orqali",
          "Davlat xizmatiga kirishda barcha fuqarolar teng huquqqa ega",
          "Cheklovlar faqat qonun bilan belgilanadi, idoraviy talab bilan emas",
          "Xotin-qizlar va erkaklar boshqaruvda teng imkoniyatga ega",
        ],
        warning:
          "Qatnashish huquqi — imkoniyat, avtomatik natija emas. " +
          "Fikringiz hisobga olinishi uchun u belgilangan tartibda va " +
          "muddatda RASMIY tarzda bildirilishi kerak.",
        lawRefs: [
          { code: "KONS", article: "36" },
          { code: "KONS", article: "37" },
          { code: "KONS", article: "58" },
        ],
      },
      {
        heading: "Murojaat qilish huquqi — eng ko'p ishlatiladigan quroling",
        text:
          "Bu huquq amalda kundalik hayotda eng foydali bo'lgan " +
          "huquqlardan biri. Konstitutsiya davlat organlari va " +
          "tashkilotlari, fuqarolarning o'zini o'zi boshqarish " +
          "organlari va ularning mansabdor shaxslari oldiga aniq " +
          "majburiyat qo'yadi: har kimga o'z huquqlari va qonuniy " +
          "manfaatlariga daxldor hujjatlar hamda ma'lumotlar bilan " +
          "tanishish imkoniyatini berish.\n\n" +
          "Bundan ikkita amaliy natija chiqadi. Birinchisi — siz " +
          "o'zingizga tegishli hujjatni so'rashga haqlisiz va bu " +
          "iltimos emas, huquq. Ikkinchisi — organ javob berishi " +
          "shart; javobsiz qoldirish o'z-o'zidan huquqbuzarlik.\n\n" +
          "Murojaatning kuchi uning SHAKLIDA. Yozma murojaat " +
          "ro'yxatga olinadi, unga raqam beriladi va javob muddati " +
          "shu sanadan boshlanadi. Og'zaki suhbat esa hech qanday iz " +
          "qoldirmaydi — keyin «murojaat qilganman» deganingizni " +
          "isbotlay olmaysiz.\n\n" +
          "Murojaat matnining sifati ham natijaga ta'sir qiladi: " +
          "voqeani qisqa va sanalar bilan bayon qiling, so'ng ANIQ " +
          "talabni yozing. «Ko'rib chiqishingizni so'rayman» — kuchsiz " +
          "talab; «shu qarorni bekor qilishingizni so'rayman» — aniq " +
          "talab va javob ham aniq bo'ladi.",
        example:
          "Fuqaro o'ziga nisbatan chiqarilgan qarorning nusxasini " +
          "so'radi, ammo «bu ichki hujjat» deb rad etildi. Qaror " +
          "aynan shu fuqaroning huquqlariga daxldor bo'lsa, u bilan " +
          "tanishish huquqi Konstitutsiyada kafolatlangan — rad etish " +
          "yozma va qonun ko'rsatilgan holda asoslanishi kerak.",
        keyPoints: [
          "O'z huquqlaringizga daxldor hujjat bilan tanishish — huquq, iltimos emas",
          "Davlat organi javob berishi SHART, javobsiz qoldirish huquqbuzarlik",
          "Yozma murojaat ro'yxat raqamiga ega bo'ladi — bu isbot va muddat boshlanishi",
          "Aniq talab aniq javob keltiradi; umumiy iltimos umumiy javob oladi",
        ],
        warning:
          "Murojaat nusxasini va topshirish dalilini (ro'yxat raqami, " +
          "pochta kvitansiyasi, elektron tasdiq) saqlang. Keyingi " +
          "bosqichda — yuqori organ yoki sudda — birinchi so'raladigan " +
          "narsa aynan shu.",
        lawRefs: [
          { code: "KONS", article: "34" },
          { code: "KONS", article: "55" },
        ],
      },
      {
        heading: "Birlashish va tinch yig'ilishlar erkinligi",
        text:
          "Fuqarolar kasaba uyushmalari, siyosiy partiyalar va boshqa " +
          "jamoat birlashmalariga uyushish, ommaviy harakatlarda " +
          "qatnashish huquqiga ega. Birlashish erkinligining ma'nosi " +
          "shundaki, umumiy manfaatni yolg'iz emas, jamoa bo'lib " +
          "himoya qilish mumkin — bu ko'pincha ancha samarali.\n\n" +
          "Ikkinchi shakl — ijtimoiy faollikni mitinglar, yig'ilishlar " +
          "va namoyishlar orqali amalga oshirish. Bu huquq qonunlarga " +
          "muvofiq amalga oshiriladi, ya'ni tartibi qonunda " +
          "belgilangan: joy, vaqt va xabardor qilish talablari bor. " +
          "Talablarga rioya qilish huquqni yo'qotmaydi — u faqat " +
          "amalga oshirish tartibini belgilaydi.\n\n" +
          "Fuqarolik jamiyati institutlari — nodavlat notijorat " +
          "tashkilotlar, mahalla, ommaviy axborot vositalari — " +
          "Konstitutsiyada alohida tan olingan. Ular davlat va fuqaro " +
          "o'rtasidagi bo'g'in bo'lib xizmat qiladi va inson " +
          "huquqlarini himoya qilish shakllarini to'ldiradi.\n\n" +
          "Mehnat sohasida bu huquqning eng amaliy ko'rinishi — " +
          "kasaba uyushmasi: u xodimlar nomidan jamoa muzokarasi olib " +
          "boradi va jamoa shartnomasi tuzadi.",
        example:
          "Korxonada ish sharoitlari bo'yicha kelishmovchilik " +
          "chiqdi. Bitta xodimning arizasi ko'pincha e'tiborsiz " +
          "qoladi, jamoa vakili orqali qo'yilgan masala esa rasmiy " +
          "muzokara tartibiga tushadi — bu birlashish huquqining " +
          "amaliy foydasi.",
        keyPoints: [
          "Birlashish huquqi umumiy manfaatni jamoa bo'lib himoya qilish imkonini beradi",
          "Tinch yig'ilish huquqi bor, lekin uning tartibi qonunda belgilangan",
          "Fuqarolik jamiyati institutlari Konstitutsiyada alohida tan olingan",
          "Kasaba uyushmasi mehnat sohasida jamoa vakili bo'la oladi",
        ],
        warning:
          "Tartibga rioya qilmaslik huquqni himoyasiz qoldiradi: " +
          "xabardor qilish talabi bajarilmagan tadbir " +
          "huquqbuzarlik sifatida baholanishi mumkin. Shakl talabini " +
          "e'tiborsiz qoldirmang.",
        lawRefs: [
          { code: "KONS", article: "38" },
          { code: "KONS", article: "69" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     4. Iqtisodiy va ijtimoiy huquqlar
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "konstitutsiya-ijtimoiy-huquqlar",
    category: "constitution",
    level: "basic",
    order: 1040,
    title: "Iqtisodiy, ijtimoiy va ekologik huquqlar",
    desc:
      "Mulk, mehnat, dam olish, uy-joy, ta'lim, sog'liq, ijtimoiy " +
      "ta'minot va qulay atrof-muhit huquqi.",
    objectives: [
      "Mulkdor bo'lish huquqi va uning kafolatlarini bilasiz",
      "Mehnat va dam olish huquqining konstitutsiyaviy asosini tushunasiz",
      "Ijtimoiy ta'minot qanday hollarda kafolatlanganini bilasiz",
      "Ta'lim, sog'liq va ekologik huquqlaringizni ayta olasiz",
    ],
    practicalSteps: [
      "Mulkingizga oid hujjatlarni bir joyga to'plang — huquqni himoya qilish hujjatdan boshlanadi",
      "Mehnat shartnomangizdagi ish vaqti va ta'til shartlarini Mehnat kodeksidagi kafolat bilan solishtiring",
      "Ijtimoiy nafaqa yoki yordamga haqli bo'lsangiz, shartlarini tegishli organdan YOZMA so'rab oling",
      "Atrof-muhit holati haqidagi ma'lumotni so'rash huquqingiz bor — bundan foydalaning",
    ],
    sections: [
      {
        heading: "Mulkdor bo'lish huquqi",
        text:
          "Har bir shaxs mulkdor bo'lishga haqli. Bu huquq bilan " +
          "birga bir necha kafolat beriladi: bank operatsiyalarining, " +
          "omonatlarning va hisobvaraqlarning sir tutilishi hamda " +
          "meros huquqi qonun bilan kafolatlanadi.\n\n" +
          "Mulk huquqining mazmuni uch vakolatdan iborat: egalik " +
          "qilish (narsa sizda), foydalanish (undan naf olish) va " +
          "tasarruf etish (sotish, hadya qilish, garovga qo'yish). " +
          "Mulkdor mol-mulkiga o'z xohishicha egalik qiladi, undan " +
          "foydalanadi va uni tasarruf etadi.\n\n" +
          "Lekin mulk huquqi cheksiz emas. Konstitutsiya aniq chegara " +
          "belgilaydi: mol-mulkdan foydalanish atrof-muhitga zarar " +
          "yetkazmasligi, boshqa shaxslarning, jamiyat va davlatning " +
          "huquqlarini hamda qonun bilan qo'riqlanadigan " +
          "manfaatlarini buzmasligi kerak.\n\n" +
          "Iqtisodiyot negizini xilma-xil shakldagi mulk tashkil " +
          "etadi — ya'ni xususiy mulk davlat mulkiga qaraganda " +
          "«ikkinchi darajali» emas, ikkalasi ham teng himoyalanadi.",
        example:
          "Uy egasi hovlisida qurilish boshladi va bu qo'shni " +
          "uchastkaga suv oqishiga sabab bo'ldi. Mulkdorning " +
          "o'z yeridan foydalanish huquqi bor, lekin u qo'shnining " +
          "huquqini buzmaslik chegarasi bilan cheklangan — shuning " +
          "uchun qo'shni buzilishni bartaraf etishni talab qila oladi.",
        keyPoints: [
          "Mulk huquqi uch vakolatni beradi: egalik, foydalanish, tasarruf etish",
          "Omonat va hisobvaraq siri hamda meros huquqi kafolatlangan",
          "Mulkdan foydalanish boshqalarning huquqlarini buzmasligi kerak",
          "Barcha mulk shakllari teng himoyalanadi",
        ],
        warning:
          "Mulk huquqi ko'chmas mulkda ro'yxatga olish bilan " +
          "tasdiqlanadi. Faqat pul to'lash yoki kalitni olish " +
          "mulkdor qilmaydi — hujjatni oxirigacha rasmiylashtirish " +
          "shart.",
        lawRefs: [
          { code: "KONS", article: "41" },
          { code: "KONS", article: "66" },
          { code: "KONS", article: "65" },
        ],
      },
      {
        heading: "Mehnat va dam olish huquqi",
        text:
          "Har kim munosib mehnat qilish, kasb va faoliyat turini " +
          "erkin tanlash, xavfsizlik va gigiyena talablariga javob " +
          "beradigan qulay mehnat sharoitlarida ishlash huquqiga ega. " +
          "«Erkin tanlash» — mehnat erkinligining o'zagi: sizni " +
          "majburan biror ishga jalb qilish mumkin emas.\n\n" +
          "Shu bilan bog'liq qat'iy qoida: sud qarori bilan " +
          "tayinlangan jazoni ijro etish tartibidan yoki qonunda " +
          "nazarda tutilgan boshqa hollardan tashqari majburiy mehnat " +
          "taqiqlanadi. Bolalar mehnatining bola sog'lig'iga zarar " +
          "yetkazadigan shakllari ham taqiqlangan.\n\n" +
          "Dam olish huquqi mehnat huquqining ajralmas juftligi. " +
          "Konstitutsiya uni qanday ta'minlanishini ham ko'rsatadi: " +
          "ish vaqtining davomiyligini belgilash, dam olish va " +
          "ishlanmaydigan bayram kunlari hamda haq to'lanadigan " +
          "yillik ta'til orqali.\n\n" +
          "Davlat esa bandlikni ta'minlash, ishsizlikdan himoya " +
          "qilish va kasbiy tayyorgarlik choralarini ko'radi.",
        example:
          "Xodimga «bo'sh vaqtingda ham chiqib turasan, hisobga " +
          "olinmaydi» deyildi. Bu dam olish huquqiga tegadi: " +
          "belgilangan ish vaqtidan tashqari ish alohida " +
          "rasmiylashtirilishi va haq to'lanishi kerak, aks holda " +
          "u qonuniy asossiz mehnat bo'lib qoladi.",
        keyPoints: [
          "Kasb va faoliyat turini erkin tanlash — mehnat erkinligining o'zagi",
          "Majburiy mehnat taqiqlanadi (jazoni ijro etish va qonundagi hollardan tashqari)",
          "Dam olish huquqi ish vaqti chegarasi, bayram kunlari va yillik ta'til bilan ta'minlanadi",
          "Davlat bandlikni ta'minlash va ishsizlikdan himoya choralarini ko'radi",
        ],
        warning:
          "Konstitutsiya mehnat huquqining ASOSINI beradi, " +
          "tafsilotlarni esa Mehnat kodeksi belgilaydi. Aniq " +
          "muddat, to'lov va tartib kerak bo'lsa — Mehnat huquqi " +
          "modulidagi darslarga o'ting.",
        lawRefs: [
          { code: "KONS", article: "42" },
          { code: "KONS", article: "44" },
          { code: "KONS", article: "45" },
          { code: "KONS", article: "43" },
        ],
      },
      {
        heading: "Ijtimoiy ta'minot, uy-joy va sog'liq",
        text:
          "Ijtimoiy huquqlarning mohiyati — inson o'zidan " +
          "mustaqil sabablarga ko'ra daromadsiz qolganda yolg'iz " +
          "qoldirilmasligi. Konstitutsiya aniq holatlarni " +
          "sanaydi: qariganda, mehnat qobiliyatini yo'qotganda, " +
          "ishsizlikda, boquvchisini yo'qotganda va qonunda " +
          "nazarda tutilgan boshqa hollarda ijtimoiy ta'minot " +
          "huquqi mavjud.\n\n" +
          "Alohida e'tibor beriladigan toifalar ham belgilangan: " +
          "mehnatga layoqatsiz va yolg'iz keksalar, nogironligi " +
          "bo'lgan shaxslar hamda aholining ijtimoiy jihatdan " +
          "ehtiyojmand boshqa toifalari huquqlari davlat " +
          "himoyasida.\n\n" +
          "Uy-joy huquqi ikki qismdan iborat: uy-joyli bo'lish " +
          "huquqi va uy-joydan mahrum etilmaslik kafolati. " +
          "Ikkinchisi juda muhim: hech kim sudning qarorisiz va " +
          "qonunga zid tarzda uy-joyidan mahrum etilishi mumkin " +
          "emas. Ya'ni chiqarib yuborish faqat sud qarori " +
          "asosida.\n\n" +
          "Sog'liqni saqlash sohasida har kim malakali tibbiy " +
          "xizmatdan foydalanish huquqiga ega, fuqarolar esa " +
          "tibbiy yordamning kafolatlangan hajmini qonunda " +
          "belgilangan tartibda oladi.",
        example:
          "Ijara shartnomasi tugagach uy egasi qulfni almashtirib, " +
          "yashovchining narsalarini tashqariga chiqarib qo'ydi. " +
          "Shartnoma tugagan bo'lsa ham, uy-joydan mahrum qilishning " +
          "yo'li — sud tartibi. O'zboshimchalik bilan chiqarib " +
          "yuborish qonuniy emas va bu harakat ustidan shikoyat " +
          "qilish mumkin.",
        keyPoints: [
          "Ijtimoiy ta'minot huquqi aniq holatlar uchun kafolatlangan",
          "Uy-joydan mahrum qilish FAQAT sud qarori bilan mumkin",
          "Malakali tibbiy xizmatdan foydalanish — har kimning huquqi",
          "Ehtiyojmand toifalar huquqlari alohida davlat himoyasida",
        ],
        warning:
          "Nafaqa yoki yordamga haqlilik avtomatik amalga " +
          "oshmaydi — hujjat topshirish va shartlarni tasdiqlash " +
          "kerak. Shartlarni tegishli organdan yozma so'rab olish " +
          "eng ishonchli yo'l.",
        lawRefs: [
          { code: "KONS", article: "46" },
          { code: "KONS", article: "47" },
          { code: "KONS", article: "48" },
          { code: "KONS", article: "57" },
        ],
      },
      {
        heading: "Ta'lim va ekologik huquqlar",
        text:
          "Har kim ta'lim olish huquqiga ega. Davlat uzluksiz " +
          "ta'lim tizimi, uning turli turlari va shakllari, davlat " +
          "va nodavlat ta'lim tashkilotlarining rivojlanishini " +
          "ta'minlaydi. Fuqarolar davlat ta'lim tashkilotlarida " +
          "tanlov asosida davlat hisobidan oliy ma'lumot olishga " +
          "haqli — bu yerdagi kalit so'z «tanlov asosida», ya'ni " +
          "huquq imkoniyatni beradi, natijani kafolatlamaydi.\n\n" +
          "Ekologik huquqlar Konstitutsiyaning yangi tahririda " +
          "aniq ifodalangan: har kim qulay atrof-muhitga va uning " +
          "holati to'g'risidagi ISHONCHLI AXBOROTGA ega bo'lish " +
          "huquqiga ega.\n\n" +
          "Ikkinchi qism amalda kuchli qurol: agar hududda havo, " +
          "suv yoki tuproq holati bo'yicha xavotiringiz bo'lsa, " +
          "tegishli organdan ma'lumot so'rash huquqingiz bor va " +
          "bu ma'lumot ishonchli bo'lishi kerak.\n\n" +
          "Ekologik huquqning burch tomoni ham bor: fuqarolar " +
          "atrof tabiiy muhitga ehtiyotkorona munosabatda bo'lishga " +
          "majburdirlar. Ya'ni bu sohada huquq va burch bir " +
          "vaqtning o'zida yuklanadi.",
        example:
          "Yaqin atrofda ishlab chiqarish obyekti ochilib, " +
          "aholida havo sifati bo'yicha savol paydo bo'ldi. " +
          "Fuqarolar tegishli organdan o'lchov natijalarini yozma " +
          "so'rashga haqli; «ma'lumot yo'q» degan javob esa " +
          "asoslanishi kerak, chunki axborot olish huquqi " +
          "konstitutsiyaviy darajada kafolatlangan.",
        keyPoints: [
          "Ta'lim olish — har kimning huquqi, oliy ta'lim davlat hisobidan tanlov asosida",
          "Qulay atrof-muhit va uning holati haqida ishonchli axborot olish huquqi bor",
          "Ekologik sohada huquq bilan birga ehtiyotkorlik burchi ham yuklanadi",
          "Nodavlat ta'lim tashkilotlari ham tizimning tan olingan qismi",
        ],
        warning:
          "«Tanlov asosida» degan shart e'tibordan qolmasligi " +
          "kerak: davlat hisobidan ta'lim huquqi barcha uchun " +
          "joy kafolati emas, balki tanlovda teng qatnashish " +
          "kafolatidir.",
        lawRefs: [
          { code: "KONS", article: "50" },
          { code: "KONS", article: "51" },
          { code: "KONS", article: "49" },
          { code: "KONS", article: "62" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     5. Huquqlar kafolati
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "konstitutsiya-kafolatlar",
    category: "constitution",
    level: "mid",
    order: 1050,
    title: "Huquqlaringiz kafolati: himoya yo'llari",
    desc:
      "Huquq buzilganda nima qilish kerak — himoya usullari, " +
      "murojaat zanjiri, sud va Konstitutsiyaviy sud.",
    objectives: [
      "Huquqni himoya qilishning barcha yo'llarini ketma-ketlikda bilasiz",
      "Qaysi bosqichda qaysi organga murojaat qilish kerakligini tushunasiz",
      "Sud himoyasi huquqining chegarasi yo'qligini bilasiz",
      "Konstitutsiyaviy sud nima qilishini va nima qilmasligini bilasiz",
    ],
    practicalSteps: [
      "Har qanday nizoda avval yozma murojaat bosqichidan o'ting — sud ko'pincha shu hujjatlarga qaraydi",
      "Har bir bosqichda hujjat nusxasi va javoblarni papkaga yig'ing: sana bo'yicha tartiblangan hujjat eng kuchli dalil",
      "Muddatlarga e'tibor bering — kechiktirilgan murojaat asosli bo'lsa ham rad etilishi mumkin",
      "Murakkab holatda advokat bilan maslahatlashing; qonunda belgilangan hollarda yordam davlat hisobidan",
    ],
    sections: [
      {
        heading: "Himoya qilishning umumiy tamoyili",
        text:
          "Konstitutsiyaning eng foydali qoidalaridan biri shu: " +
          "har kim o'z huquq va erkinliklarini qonunda " +
          "TAQIQLANMAGAN barcha usullar bilan himoya qilishga " +
          "haqli. E'tibor bering — «ruxsat berilgan usullar» emas, " +
          "«taqiqlanmagan usullar». Bu ancha keng imkoniyat: " +
          "himoya usuli qonunda alohida sanab o'tilishi shart " +
          "emas, taqiqlanmagan bo'lsa yetarli.\n\n" +
          "Shu moddada asosiy himoya yo'llari ham ko'rsatilgan: " +
          "sud orqali himoya, davlat organlariga murojaat, " +
          "shuningdek xalqaro organlarga murojaat qilish " +
          "imkoniyati.\n\n" +
          "Umumiy tamoyil — inson huquq va erkinliklarini " +
          "ta'minlash davlatning OLIY MAQSADI deb belgilangan. " +
          "Bu shunchaki shior emas: mansabdor shaxs o'z " +
          "vakolatini talqin qilganda shu maqsaddan kelib chiqishi " +
          "kerak, ikkiga bo'linadigan holatda huquq foydasiga " +
          "hal qilish kutiladi.\n\n" +
          "Himoya tizimini to'ldiruvchi organlar ham bor: inson " +
          "huquqlari bo'yicha milliy institutlar mavjud himoya " +
          "shakllari va vositalarini to'ldiradi.",
        example:
          "Fuqaro qarorga rozi bo'lmadi. Uning oldida bir necha " +
          "yo'l bir vaqtda ochiq: qaror chiqargan organga e'tiroz " +
          "berish, yuqori organga shikoyat qilish, prokuraturaga " +
          "murojaat qilish va sudga da'vo berish. Bittasi " +
          "boshqasini avtomatik bekor qilmaydi — lekin muddatlarni " +
          "hisobga olish kerak.",
        keyPoints: [
          "Himoya usuli qonunda TAQIQLANMAGAN bo'lsa — qo'llash mumkin",
          "Asosiy yo'llar: sud, davlat organlariga murojaat, xalqaro organlar",
          "Inson huquqlarini ta'minlash — davlatning oliy maqsadi deb belgilangan",
          "Milliy inson huquqlari institutlari himoyani to'ldiradi",
        ],
        warning:
          "«Taqiqlanmagan usul» degani har qanday harakat " +
          "degani emas. Boshqa shaxsning huquqini buzadigan " +
          "yoki qonunni buzadigan «himoya» o'zi huquqbuzarlikka " +
          "aylanadi va vaziyatni yomonlashtiradi.",
        lawRefs: [
          { code: "KONS", article: "55" },
          { code: "KONS", article: "54" },
          { code: "KONS", article: "56" },
        ],
      },
      {
        heading: "Murojaat zanjiri: to'g'ri ketma-ketlik",
        text:
          "Amalda ko'p vaqt va kuch aynan noto'g'ri ketma-ketlik " +
          "tufayli yo'qoladi. Umumiy mantiq quyidagicha.\n\n" +
          "Birinchi bosqich — qaror chiqargan organning O'ZI. " +
          "Ko'p holatlar shu yerda hal bo'ladi, chunki xato " +
          "ko'pincha texnik bo'ladi. Bu bosqich hujjat to'plash " +
          "uchun ham foydali: organning yozma javobi keyingi " +
          "bosqichda asosiy dalilga aylanadi.\n\n" +
          "Ikkinchi bosqich — yuqori organ. Bu yerda siz " +
          "«qaror noto'g'ri» deganingizni allaqachon yozma " +
          "javob bilan ko'rsata olasiz.\n\n" +
          "Uchinchi bosqich — sud. Sud himoyasi huquqi hech " +
          "narsa bilan cheklanmagan: yuqori organ javobi " +
          "qoniqtirmasa ham, umuman javob bermasa ham sudga " +
          "murojaat qilish mumkin.\n\n" +
          "Yonma-yon yo'llar ham bor: prokuratura qonun " +
          "ijrosini nazorat qiladi, inson huquqlari bo'yicha " +
          "institutlar esa alohida murojaat qabul qiladi.\n\n" +
          "Muhim: hujjatlar bilan tanishish huquqi har bosqichda " +
          "amal qiladi — o'zingizga tegishli hujjat nusxasini " +
          "so'rashga haqlisiz.",
        example:
          "Fuqaroga xizmatni ko'rsatish rad etildi. To'g'ri yo'l: " +
          "rad etish sababini YOZMA so'rash → sabab qonunga " +
          "asoslanmagan bo'lsa yuqori organga shikoyat → natija " +
          "bo'lmasa sudga. Har bir bosqichda javob nusxasi " +
          "saqlanadi va oxirida sudga to'liq hujjat to'plami " +
          "taqdim etiladi.",
        keyPoints: [
          "Ketma-ketlik: qaror chiqargan organ → yuqori organ → sud",
          "Har bosqichdagi yozma javob keyingi bosqich uchun dalil",
          "Sud himoyasiga murojaat huquqi cheklanmagan",
          "Prokuratura va inson huquqlari institutlari — yonma-yon yo'llar",
        ],
        warning:
          "Faqat og'zaki murojaat bilan bosqichlardan o'tmang. " +
          "Sudda «men bordim, aytdim» degan gap dalil emas — " +
          "ro'yxat raqami va yozma javob dalildir.",
        lawRefs: [
          { code: "KONS", article: "34" },
          { code: "KONS", article: "55" },
        ],
      },
      {
        heading: "Konstitutsiyaviy sud va qonunning teskari kuchi",
        text:
          "Konstitutsiyaviy sud alohida vazifani bajaradi: qonun " +
          "chiqaruvchi va ijro etuvchi hokimiyat hujjatlarining " +
          "Konstitutsiyaga muvofiqligi to'g'risidagi ishlarni " +
          "ko'radi. Ya'ni u aniq nizoni (kim kimga qancha " +
          "to'lashi kerak) hal qilmaydi — u QOIDANING O'ZINI " +
          "baholaydi.\n\n" +
          "Buni tushunish amalda muhim: agar qaror sizga " +
          "noto'g'ri qo'llanilgan bo'lsa, bu oddiy sud ishi. " +
          "Agar QOIDANING O'ZI Konstitutsiyaga zid bo'lsa — " +
          "bu konstitutsiyaviy nazorat masalasi.\n\n" +
          "Ikkinchi muhim kafolat — qonunning orqaga qarab " +
          "ishlamasligi. Hech kim rasmiy e'lon qilinmagan qonun " +
          "asosida hukm qilinishi, jazoga tortilishi, mol-mulkidan " +
          "yoki biror huquqidan mahrum etilishi mumkin emas. " +
          "Ya'ni bugungi qoida kechagi harakatingizni " +
          "huquqbuzarlikka aylantirib qo'ymaydi.\n\n" +
          "Uchinchisi — sud tili: sud ishlarini yuritish tilini " +
          "bilmaydigan shaxslar tarjimon orqali ishtirok etish " +
          "va ona tilida so'zlash huquqiga ega. Bu shakliy " +
          "tafsilot emas — tushunmasdan qatnashish himoyasiz " +
          "qatnashish bilan barobar.",
        example:
          "Fuqaroga nisbatan chiqarilgan qaror amalda o'zi " +
          "chiqmagan davrdagi voqeaga tayanadi. Bu holatda " +
          "avvalo qonunning vaqt bo'yicha qo'llanilishiga " +
          "e'tiroz bildirish kerak: e'lon qilinmagan qoida " +
          "asosida huquqdan mahrum qilish taqiqlanadi.",
        keyPoints: [
          "Konstitutsiyaviy sud aniq nizoni emas, QOIDANING Konstitutsiyaga muvofiqligini ko'radi",
          "E'lon qilinmagan qonun asosida jazolash yoki huquqdan mahrum qilish mumkin emas",
          "Sud tilini bilmaslik huquqni yo'qotmaydi: tarjimon va ona tilida so'zlash huquqi bor",
          "Qoida noto'g'ri qo'llanilishi va qoidaning o'zi noto'g'ri bo'lishi — turli yo'llar",
        ],
        warning:
          "Konstitutsiyaviy sudga har qanday fuqaro to'g'ridan-" +
          "to'g'ri murojaat qila olmaydi — murojaat tartibi " +
          "qonun bilan belgilangan. Shuning uchun oddiy nizoda " +
          "asosiy yo'l umumiy sud tartibi bo'lib qoladi.",
        lawRefs: [
          { code: "KONS", article: "132" },
          { code: "KONS", article: "30" },
          { code: "KONS", article: "139" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     6. Fuqarolarning burchlari
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "konstitutsiya-burchlar",
    category: "constitution",
    level: "basic",
    order: 1060,
    title: "Fuqaroning burchlari",
    desc:
      "Qonunga rioya qilish, soliq to'lash, meros va tabiatni " +
      "asrash, mudofaa — burchlar va ular bajarilmasa nima bo'ladi.",
    objectives: [
      "Fuqaroning barcha konstitutsiyaviy burchlarini bilasiz",
      "Burch va majburiyat o'rtasidagi farqni tushunasiz",
      "Soliq to'lash burchining adolatlilik shartini bilasiz",
      "Harbiy va muqobil xizmat masalasida yo'lni tushunasiz",
    ],
    practicalSteps: [
      "Soliq majburiyatlaringizni yiliga bir marta tekshirib chiqing — bilmaslik javobgarlikdan ozod qilmaydi",
      "Sizga yuklangan majburiyat qonunga asoslanganini har doim tekshiring",
      "Rasmiy xabarnomalarni (soliq, harbiy hisob) e'tiborsiz qoldirmang: javobsizlik holatni og'irlashtiradi",
      "Burch bajarilganini tasdiqlovchi hujjatlarni (kvitansiya, ma'lumotnoma) saqlab qo'ying",
    ],
    sections: [
      {
        heading: "Qonunga va boshqalarning huquqiga rioya qilish",
        text:
          "Birinchi va eng umumiy burch — Konstitutsiya va " +
          "qonunlarga rioya etish, boshqa insonlarning huquqlari, " +
          "erkinliklari, sha'ni va qadr-qimmatini hurmat qilish.\n\n" +
          "Bu burchning tuzilishi qiziq: u ikki qismdan iborat. " +
          "Birinchisi davlat bilan munosabatga tegishli (qonunga " +
          "rioya qilish), ikkinchisi esa boshqa FUQAROLAR bilan " +
          "munosabatga (ularning huquqlarini hurmat qilish). " +
          "Ya'ni burch faqat davlat oldida emas, jamiyat " +
          "a'zolari oldida ham mavjud.\n\n" +
          "Amaliy natija: o'z huquqingizdan foydalanish " +
          "boshqaning huquqini buzish darajasiga yetganda, u " +
          "endi huquqdan foydalanish emas, huquqbuzarlik " +
          "hisoblanadi. Aynan shu joyda ko'p nizolar tug'iladi.\n\n" +
          "Yana bir burch — O'zbekiston xalqining tarixiy, " +
          "ma'naviy, madaniy, ilmiy va tabiiy merosini asrab-" +
          "avaylash. Bu meros davlat tomonidan muhofaza " +
          "qilinadi.",
        example:
          "Qo'shni kechasi baland ovozda musiqa qo'ydi va " +
          "«bu mening uyim, xohlaganimni qilaman» dedi. Mulkdan " +
          "foydalanish huquqi bor, lekin u boshqa shaxslarning " +
          "dam olish huquqi bilan chegaralangan — shuning uchun " +
          "bu holat huquq emas, huquqbuzarlik doirasiga o'tadi.",
        keyPoints: [
          "Burch ikki tomonli: qonunga rioya qilish va boshqalarning huquqini hurmat qilish",
          "O'z huquqidan foydalanish boshqaning huquqi bilan chegaralanadi",
          "Tarixiy, madaniy va tabiiy merosni asrash — konstitutsiyaviy burch",
          "Sha'n va qadr-qimmatni hurmat qilish majburiyati hammaga tegishli",
        ],
        warning:
          "«Bilmaganim uchun javobgar emasman» degan asos " +
          "ishlamaydi. Rasmiy e'lon qilingan qonunni bilish " +
          "kutiladi — shuning uchun o'zingizga tegishli " +
          "sohadagi asosiy qoidalarni bilib olish o'zingizga " +
          "foyda.",
        lawRefs: [
          { code: "KONS", article: "60" },
          { code: "KONS", article: "61" },
        ],
      },
      {
        heading: "Soliq to'lash burchi va uning sharti",
        text:
          "Fuqarolar qonun bilan belgilangan soliqlar va " +
          "yig'imlarni to'lashi shart. Bu burchning ifodasida " +
          "ikkita muhim shart bor va ular ko'pincha " +
          "e'tibordan chetda qoladi.\n\n" +
          "Birinchi shart — «QONUN BILAN BELGILANGAN». Ya'ni " +
          "soliq yoki yig'im qonunda belgilangan bo'lishi " +
          "kerak. Idoraviy hujjat yoki mahalliy qaror bilan " +
          "yangi to'lov majburiyati yuklash bu shartga zid.\n\n" +
          "Ikkinchi shart — ADOLATLILIK. Konstitutsiya soliq va " +
          "yig'imlar adolatli bo'lishi hamda fuqarolarning " +
          "konstitutsiyaviy huquqlarini amalga oshirishga " +
          "to'sqinlik qilmasligi kerakligini alohida " +
          "ta'kidlaydi.\n\n" +
          "Bu ikki shart amalda kuchli asos beradi: sizdan " +
          "to'lov talab qilinganda «bu qaysi qonun bilan " +
          "belgilangan?» degan savol butunlay o'rinli va " +
          "javob berilishi kerak.\n\n" +
          "Soliq burchining ijobiy tomoni ham bor: to'langan " +
          "soliqlar budjetga tushadi va ijtimoiy " +
          "majburiyatlarni (ta'lim, tibbiyot, nafaqa) " +
          "moliyalashtiradi — ya'ni bu burch ijtimoiy " +
          "huquqlarning moddiy asosi.",
        example:
          "Tashkilot fuqarodan xizmat uchun qo'shimcha " +
          "«yig'im» to'lashni talab qildi, lekin bu to'lov " +
          "hech qanday qonunda ko'rsatilmagan. Bunday talab " +
          "konstitutsiyaviy shartga javob bermaydi — to'lov " +
          "majburiyatining manbasi faqat qonun bo'lishi " +
          "mumkin.",
        keyPoints: [
          "Soliq va yig'im FAQAT qonun bilan belgilanadi",
          "Soliqlar adolatli bo'lishi va huquqlarni amalga oshirishga to'sqinlik qilmasligi shart",
          "«Bu qaysi qonunga asoslangan?» — har doim o'rinli savol",
          "Soliqlar ijtimoiy kafolatlarning moddiy asosini tashkil etadi",
        ],
        warning:
          "Soliq majburiyatini e'tiborsiz qoldirish qarzni " +
          "o'stiradi: asosiy summaga qo'shimcha to'lovlar " +
          "qo'shiladi. Nizoli holatda ham majburiyatni " +
          "muzlatib qo'yish emas, rasmiy e'tiroz yo'lidan " +
          "borish to'g'riroq.",
        lawRefs: [{ code: "KONS", article: "63" }],
      },
      {
        heading: "Mudofaa burchi va tabiatga munosabat",
        text:
          "O'zbekiston Respublikasini himoya qilish har bir " +
          "fuqaroning burchi deb belgilangan. Fuqarolar qonunda " +
          "belgilangan tartibda harbiy yoki muqobil xizmatni " +
          "o'tashi shart.\n\n" +
          "«Muqobil xizmat» iborasi muhim: qonunchilik harbiy " +
          "xizmatning yagona shakl emasligini tan oladi va " +
          "belgilangan hollarda boshqa shakl imkonini beradi. " +
          "Tartib va shartlar esa alohida qonunda yozilgan.\n\n" +
          "Ekologik burch alohida moddada berilgan: fuqarolar " +
          "atrof tabiiy muhitga ehtiyotkorona munosabatda " +
          "bo'lishga majburdirlar. Bu burch ekologik huquq " +
          "bilan juftlikda ishlaydi — qulay atrof-muhitga " +
          "huquqingiz bor, lekin uni saqlash majburiyati ham " +
          "sizda.\n\n" +
          "Umumiy xulosa: Konstitutsiyada burchlar soni " +
          "ko'p emas va ularning hammasi bir mantiqqa " +
          "asoslangan — jamiyatda yashash boshqalarning " +
          "huquqlarini hisobga olishni talab qiladi. Huquq va " +
          "burch bir-birining teskarisi emas, bir tizimning " +
          "ikki tomoni.",
        example:
          "Harbiy hisobga olish bo'yicha xabarnoma kelgan " +
          "fuqaro uni e'tiborsiz qoldirdi. Bu to'g'ri yo'l " +
          "emas: agar asosli sabab (sog'liq, ta'lim, oilaviy " +
          "holat) bo'lsa, u RASMIY tarzda hujjat bilan " +
          "bildirilishi kerak. Javobsiz qolish esa masalani " +
          "hal qilmaydi, faqat og'irlashtiradi.",
        keyPoints: [
          "Mamlakatni himoya qilish — har bir fuqaroning burchi",
          "Harbiy xizmat bilan bir qatorda muqobil xizmat imkoniyati ham tan olingan",
          "Tabiatga ehtiyotkorona munosabat — konstitutsiyaviy majburiyat",
          "Huquq va burch bir tizimning ikki tomoni",
        ],
        warning:
          "Burchdan ozod qilish yoki kechiktirish asoslari " +
          "qonunda aniq belgilangan. Ularni «tanishlar orqali» " +
          "hal qilishga urinish alohida javobgarlikka olib " +
          "keladigan xatolardan biri.",
        lawRefs: [
          { code: "KONS", article: "64" },
          { code: "KONS", article: "62" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     7. Davlat tuzilishi  (MAVJUD KALIT — kengaytirildi)
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "konstitutsiya-davlat",
    category: "constitution",
    level: "mid",
    order: 1070,
    title: "Davlat qanday tuzilgan",
    desc:
      "Hokimiyatning bo'linishi, Oliy Majlis, Prezident, Vazirlar " +
      "Mahkamasi, mahalliy hokimiyat va sud tizimi — kim nima qiladi.",
    objectives: [
      "Hokimiyat bo'linishi prinsipini va uning ma'nosini tushunasiz",
      "Qonun kim tomonidan chiqarilishini va qanday yo'l bosishini bilasiz",
      "Ijro hokimiyati tizimini va mahalliy hokimiyatni farqlay olasiz",
      "Muammoingiz bilan qaysi organga borish kerakligini aniqlay olasiz",
    ],
    practicalSteps: [
      "Muammoingiz turini aniqlang: qoida yoqmaydimi (qonun chiqaruvchi), ijro yomonmi (ijro organi), yoki nizo bormi (sud)",
      "Mahalliy masalalarni avval tuman/shahar darajasida hal qilishga harakat qiling — bu tezroq yo'l",
      "Murojaatni to'g'ri organga yuboring: noto'g'ri manzil vaqt yo'qotadi",
      "Organning vakolat doirasini tekshiring — vakolatsiz organdan javob talab qilish natija bermaydi",
    ],
    sections: [
      {
        heading: "Hokimiyatning bo'linishi",
        text:
          "Davlat hokimiyati tizimi bitta prinsipga asoslanadi: " +
          "hokimiyatning qonun chiqaruvchi, ijro etuvchi va sud " +
          "hokimiyatiga bo'linishi. Bu tartib tasodifiy emas — " +
          "uning maqsadi hokimiyatning bir qo'lda to'planishini " +
          "oldini olish.\n\n" +
          "Har bir shoxning o'z ishi bor. Qonun chiqaruvchi " +
          "hokimiyat QOIDA yaratadi. Ijro etuvchi hokimiyat " +
          "qoidani AMALGA OSHIRADI. Sud hokimiyati esa " +
          "qoidaning qanday qo'llanilishi bo'yicha NIZONI HAL " +
          "QILADI.\n\n" +
          "Fuqaro uchun bu bo'linishning amaliy foydasi katta: " +
          "u sizga «kimga borishim kerak?» degan savolga javob " +
          "beradi. Qoida o'zi noto'g'ri bo'lsa — bu qonun " +
          "chiqaruvchi darajadagi masala. Qoida to'g'ri, lekin " +
          "noto'g'ri qo'llanilgan bo'lsa — ijro organi yoki " +
          "sud. Nizo bo'lsa — sud.\n\n" +
          "Xalq hokimiyatchiligi prinsipi bo'yicha davlat " +
          "hokimiyatining manbai xalq hisoblanadi va uning " +
          "nomidan faqat saylangan vakillik organlari hamda " +
          "Prezident ish yuritishi mumkin.",
        example:
          "Fuqaro biror to'lov miqdorini adolatsiz deb " +
          "hisoblaydi. Agar miqdor qonunda yozilgan bo'lsa, " +
          "sud uni «adolatsiz» deb o'zgartira olmaydi — bu " +
          "qonun chiqaruvchi vakolati. Ammo miqdor noto'g'ri " +
          "HISOBLANGAN bo'lsa, bu sud ko'radigan nizo. " +
          "To'g'ri manzilni tanlash natijani belgilaydi.",
        keyPoints: [
          "Hokimiyat uchga bo'linadi: qonun chiqaruvchi, ijro etuvchi, sud",
          "Bo'linishning maqsadi — hokimiyatning bir qo'lda to'planishini oldini olish",
          "«Kimga borishim kerak?» savoliga javob shu bo'linishdan kelib chiqadi",
          "Hokimiyat manbai — xalq, uning nomidan faqat vakillik organlari ish yuritadi",
        ],
        warning:
          "Ko'p uchraydigan xato — har qanday muammo bilan " +
          "sudga yugurish. Sud NIZONI hal qiladi; qoidani " +
          "o'zgartirish yoki xizmat ko'rsatish uning ishi " +
          "emas. Noto'g'ri organga murojaat qilish faqat " +
          "vaqt yo'qotadi.",
        lawRefs: [
          { code: "KONS", article: "11" },
          { code: "KONS", article: "7" },
        ],
      },
      {
        heading: "Oliy Majlis — qonunlar shu yerda tug'iladi",
        text:
          "Oliy Majlis oliy davlat vakillik organi bo'lib, " +
          "qonun chiqaruvchi hokimiyatni amalga oshiradi. U ikki " +
          "palatadan iborat: Qonunchilik palatasi va Senat.\n\n" +
          "Ikki palatali tuzilmaning mantig'i bor. Qonunchilik " +
          "palatasi butun mamlakat aholisini vakillik qiladi va " +
          "qonun loyihasini birinchi bo'lib ko'rib chiqadi. Senat " +
          "hududlar vakilligini ta'minlaydi va qabul qilingan " +
          "qonunni qayta ko'rib chiqadi. Ya'ni qonun ikki " +
          "bosqichli filtrdan o'tadi — shoshilinch va " +
          "o'ylanmagan qoidalar ehtimoli kamayadi.\n\n" +
          "Fuqaro uchun eng foydali jihat: qonun loyihalari " +
          "muhokamasi. Loyihalar ommaviy muhokamaga qo'yilganda " +
          "fikr bildirish — davlat ishlarini boshqarishda " +
          "qatnashish huquqining aynan amaliy shakli.\n\n" +
          "Deputatga murojaat qilish ham real yo'l: u sizning " +
          "hududingizdan saylangan vakil va murojaatlarni ko'rib " +
          "chiqish uning vazifasiga kiradi.",
        example:
          "Bir soha bo'yicha qoidada ziddiyat borligi " +
          "aniqlandi. Sud bunday holatda mavjud qoidalarni " +
          "talqin qiladi, lekin ziddiyatni butunlay yo'q qilish " +
          "uchun qonunga o'zgartirish kerak — bu esa Oliy " +
          "Majlis vakolati. Shuning uchun bunday masalada " +
          "deputatga yoki tegishli komissiyaga murojaat " +
          "mantiqan to'g'ri yo'l.",
        keyPoints: [
          "Oliy Majlis — qonun chiqaruvchi organ, ikki palatadan iborat",
          "Ikki bosqichli ko'rib chiqish qonun sifatini oshirishga qaratilgan",
          "Qonun loyihalari muhokamasida qatnashish — fuqaroning real imkoniyati",
          "Deputatga murojaat qilish qonuniy va ishlaydigan yo'l",
        ],
        warning:
          "Oliy Majlis aniq fuqaroning nizosini hal qilmaydi. " +
          "Unga «mening ishimni ko'rib chiqing» deb murojaat " +
          "qilish natija bermaydi — u faqat QOIDA darajasidagi " +
          "masalalar bilan ishlaydi.",
        lawRefs: [{ code: "KONS", article: "91" }],
      },
      {
        heading: "Prezident va Vazirlar Mahkamasi",
        text:
          "Prezident davlat boshlig'i bo'lib, davlat hokimiyati " +
          "organlarining kelishilgan holda faoliyat yuritishini " +
          "hamda hamkorligini ta'minlaydi. Ya'ni uning o'rni " +
          "shoxlar orasidagi muvozanatni saqlash bilan " +
          "bog'liq.\n\n" +
          "Vazirlar Mahkamasi ijro etuvchi hokimiyatni amalga " +
          "oshiradi. Amalda fuqaro davlat bilan eng ko'p " +
          "aynan shu tizim orqali muomala qiladi: vazirliklar, " +
          "agentliklar, inspeksiyalar, xizmat ko'rsatish " +
          "markazlari — bularning hammasi ijro hokimiyati " +
          "tizimiga kiradi.\n\n" +
          "Ijro organlarining hujjatlari — qarorlar, buyruqlar, " +
          "nizomlar — qonundan PASTDA turadi. Bu juda muhim " +
          "amaliy qoida: idoraviy hujjat qonunga zid bo'lsa, " +
          "qonun qo'llaniladi.\n\n" +
          "Shuning uchun sizga «bizning nizomimizda shunday " +
          "yozilgan» deb tushuntirilganda, keyingi savol " +
          "o'rinli bo'ladi: «bu nizom qaysi qonunga " +
          "asoslangan?» Agar nizom qonunda yo'q majburiyat " +
          "yuklayotgan bo'lsa, uning asosi kuchsiz.",
        example:
          "Xizmat ko'rsatish markazi hujjatlar ro'yxatiga " +
          "qonunda ko'rsatilmagan qo'shimcha hujjat kiritdi " +
          "va uni talab qildi. Ijro organi hujjati qonun " +
          "talablarini KENGAYTIRA olmaydi — bu holatda " +
          "yuqori organga shikoyat uchun aniq asos bor.",
        keyPoints: [
          "Prezident — davlat boshlig'i, hokimiyat shoxlari muvozanatini ta'minlaydi",
          "Vazirlar Mahkamasi ijro hokimiyatini amalga oshiradi",
          "Idoraviy hujjatlar qonundan pastda turadi va unga zid bo'lolmaydi",
          "«Bu nizom qaysi qonunga asoslangan?» — kuchli savol",
        ],
        warning:
          "Idoraviy hujjatning qonunga zidligini o'zingiz " +
          "e'lon qila olmaysiz — uni faqat vakolatli organ " +
          "yoki sud bekor qiladi. Shuning uchun to'lov yoki " +
          "talabni shunchaki bajarmasdan qo'yish emas, " +
          "rasmiy e'tiroz bildirish to'g'ri.",
        lawRefs: [
          { code: "KONS", article: "105" },
          { code: "KONS", article: "114" },
        ],
      },
      {
        heading: "Mahalliy hokimiyat va sud tizimi",
        text:
          "Mahalliy darajada ikki tur organ ishlaydi. Xalq " +
          "deputatlari Kengashlari — viloyat, tuman va " +
          "shaharlardagi davlat hokimiyati vakillik organlari. " +
          "Ijro etuvchi hokimiyatga esa viloyat, tuman va " +
          "shahar hokimi boshchilik qiladi.\n\n" +
          "Bundan tashqari fuqarolarning o'zini o'zi boshqarish " +
          "organlari — mahalla — Konstitutsiyada tan olingan. " +
          "Ular davlat organi emas, lekin ko'p masalalarda " +
          "birinchi murojaat nuqtasi bo'lib xizmat qiladi.\n\n" +
          "Amaliy maslahat: aksariyat kundalik masalalar " +
          "(kommunal, hudud obodonchiligi, ijtimoiy yordam) " +
          "mahalliy darajada hal bo'ladi va bu ancha tez yo'l. " +
          "Respublika darajasidagi organga darhol murojaat " +
          "qilish odatda masalani tezlashtirmaydi — u ko'pincha " +
          "yana mahalliy organga yuboriladi.\n\n" +
          "Sud tizimi alohida turadi va uning tartibi qonun " +
          "bilan belgilanadi. Sudyalar hamjamiyatining " +
          "mustaqil organi — Sudyalar oliy kengashi — sudyalar " +
          "korpusi shakllantirilishini va sud hokimiyati " +
          "mustaqilligiga rioya etilishini ta'minlaydi.",
        example:
          "Ko'p kvartirali uyda umumiy hududni obodonlashtirish " +
          "masalasi ko'tarildi. To'g'ri ketma-ketlik: uy " +
          "boshqaruvi → mahalla → tuman hokimligi. Bu " +
          "masalani respublika vazirligiga yuborish esa " +
          "javobni tezlashtirmaydi, chunki hal qilish " +
          "vakolati mahalliy darajada.",
        keyPoints: [
          "Mahalliy darajada Kengashlar (vakillik) va hokim (ijro) ishlaydi",
          "Mahalla — o'zini o'zi boshqarish organi, davlat organi emas",
          "Kundalik masalalar mahalliy darajada tezroq hal bo'ladi",
          "Sud mustaqilligi Sudyalar oliy kengashi orqali ta'minlanadi",
        ],
        warning:
          "Bir masalani bir vaqtda barcha organlarga " +
          "yuborish samarani oshirmaydi: murojaatlar " +
          "ko'pincha bir joyga — vakolatli organga — " +
          "qaytariladi va faqat vaqt ketadi.",
        lawRefs: [
          { code: "KONS", article: "120" },
          { code: "KONS", article: "121" },
          { code: "KONS", article: "131" },
          { code: "KONS", article: "135" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     8. Fuqarolik
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "konstitutsiya-fuqarolik",
    category: "constitution",
    level: "mid",
    order: 1080,
    title: "Fuqarolik: mazmuni va kafolatlari",
    desc:
      "Fuqarolik nima beradi, yagona fuqarolik prinsipi, chet " +
      "davlatda himoya va chet el fuqarolarining huquqlari.",
    objectives: [
      "Fuqarolik nima ekanligini va u qanday huquqlar berishini bilasiz",
      "Yagona fuqarolik prinsipining ma'nosini tushunasiz",
      "Chet davlatda bo'lganda davlat himoyasi qanday ishlashini bilasiz",
      "Chet el fuqarolari va fuqaroligi bo'lmagan shaxslarning holatini bilasiz",
    ],
    practicalSteps: [
      "Chet davlatga chiqishdan oldin O'zbekiston diplomatik vakolatxonasi manzilini yozib oling",
      "Hujjatlaringiz nusxasini elektron shaklda saqlang — yo'qotilganda tiklash osonlashadi",
      "Fuqarolik masalasi bo'yicha faqat rasmiy organlarga murojaat qiling, vositachilarga emas",
      "Chet elda huquqingiz buzilsa, avval vakolatxonaga xabar bering",
    ],
    sections: [
      {
        heading: "Yagona fuqarolik va kelib chiqishning ahamiyatsizligi",
        text:
          "O'zbekiston Respublikasining butun hududida yagona " +
          "fuqarolik o'rnatiladi. Bu prinsipning ikki natijasi " +
          "bor.\n\n" +
          "Birinchisi — hududiy: mamlakatning qaysi qismida " +
          "yashashingizdan qat'i nazar, fuqarolik bir xil " +
          "hajmda huquq beradi. Ya'ni bir hududda yashovchi " +
          "fuqaro ikkinchisiga qaraganda «kamroq fuqaro» " +
          "bo'lmaydi.\n\n" +
          "Ikkinchisi va amaliy jihatdan muhimrog'i — " +
          "fuqarolik qanday asoslarda olinganidan qat'i nazar, " +
          "u teng huquqlarni beradi. Tug'ilish bilan olingan " +
          "fuqarolik ham, keyinchalik qabul qilingan fuqarolik " +
          "ham bir xil hajmdagi huquq va majburiyatlarni " +
          "keltiradi. Bu kamsitishning muhim bir turini " +
          "to'sib qo'yadi.\n\n" +
          "Fuqarolikni olish va yo'qotish asoslari hamda " +
          "tartibi alohida qonun bilan belgilanadi — " +
          "Konstitutsiya bu yerda faqat asosiy prinsipni " +
          "qo'yadi.",
        example:
          "Fuqarolikni keyinchalik qabul qilgan shaxsdan biror " +
          "huquqni amalga oshirishda «siz tug'ilgandan " +
          "fuqaromisiz?» degan savol asosida qo'shimcha talab " +
          "qo'yildi. Bu yagona fuqarolik prinsipiga zid: " +
          "huquqlar hajmi fuqarolikni olish asosiga bog'liq " +
          "emas.",
        keyPoints: [
          "Butun hududda yagona fuqarolik amal qiladi",
          "Fuqarolik qanday olinganidan qat'i nazar huquqlar teng",
          "Yashash hududi fuqarolik huquqlari hajmiga ta'sir qilmaydi",
          "Olish va yo'qotish tartibi alohida qonunda belgilangan",
        ],
        warning:
          "Fuqarolik masalalari faqat vakolatli davlat " +
          "organlari orqali hal qilinadi. «Tezlashtirib " +
          "beraman» degan vositachilar bilan ishlash — " +
          "hujjatlarni ham, pulni ham yo'qotishning eng " +
          "keng tarqalgan yo'li.",
        lawRefs: [{ code: "KONS", article: "22" }],
      },
      {
        heading: "Davlat himoyasi: hududda ham, tashqarisida ham",
        text:
          "Konstitutsiya aniq majburiyat oladi: O'zbekiston " +
          "Respublikasi o'z hududida ham, uning tashqarisida " +
          "ham o'z fuqarolarini himoya qilish va ularga " +
          "homiylik ko'rsatishni kafolatlaydi.\n\n" +
          "«Tashqarisida ham» degan qism amalda juda muhim. " +
          "Chet davlatda bo'lganingizda siz o'sha davlat " +
          "qonunlariga bo'ysunasiz, lekin O'zbekiston " +
          "fuqarosi sifatida diplomatik himoya olish " +
          "huquqingiz saqlanadi. Bu himoya diplomatik " +
          "vakolatxonalar va konsullik muassasalari orqali " +
          "amalga oshiriladi.\n\n" +
          "Amaliy holatlar: hujjat yo'qolgani, hibsga " +
          "olinganlik, og'ir kasallik, mahalliy organlar " +
          "tomonidan huquq buzilishi. Bunday vaziyatda " +
          "birinchi qadam — vakolatxonaga xabar berish.\n\n" +
          "Muhim tafsilot: diplomatik himoya chet davlat " +
          "qonunlaridan ozod qilmaydi. Ya'ni u sizni " +
          "javobgarlikdan qutqarmaydi, lekin protsedura " +
          "adolatli o'tishini, tarjimon va yuridik yordam " +
          "olishni ta'minlashga yordam beradi.",
        example:
          "Fuqaro chet davlatda ushlab turildi. Diplomatik " +
          "himoya bu yerda ishning natijasini o'zgartirmaydi, " +
          "lekin vakolatxona xabardor qilinsa — advokat va " +
          "tarjimon bilan ta'minlanish, yaqinlarni xabardor " +
          "qilish va ish yuritilishini kuzatish imkoni " +
          "paydo bo'ladi.",
        keyPoints: [
          "Davlat fuqarolarini o'z hududida ham, chet elda ham himoya qiladi",
          "Chet elda himoya diplomatik vakolatxona orqali amalga oshiriladi",
          "Diplomatik himoya chet davlat qonunlaridan ozod qilmaydi",
          "Birinchi qadam — vakolatxonani xabardor qilish",
        ],
        warning:
          "Chet davlatda muammo yuzaga kelganda kutib " +
          "turish eng yomon tanlov. Vakolatxonaga qanchalik " +
          "erta xabar berilsa, yordam imkoniyati shunchalik " +
          "keng bo'ladi.",
        lawRefs: [{ code: "KONS", article: "23" }],
      },
      {
        heading: "Chet el fuqarolari va fuqaroligi bo'lmagan shaxslar",
        text:
          "Konstitutsiya O'zbekiston hududidagi chet el " +
          "fuqarolarining va fuqaroligi bo'lmagan shaxslarning " +
          "huquq va erkinliklari xalqaro huquq normalariga " +
          "muvofiq ta'minlanishini belgilaydi. Ular " +
          "O'zbekiston Respublikasi qonunlariga rioya " +
          "etishlari shart.\n\n" +
          "Bu qoidadan muhim xulosa chiqadi: asosiy inson " +
          "huquqlari fuqarolikka bog'liq EMAS. Yashash " +
          "huquqi, qadr-qimmat daxlsizligi, qiynoq taqiqi, " +
          "sud himoyasi, yuridik yordam — bular «har kim» " +
          "uchun kafolatlangan huquqlar.\n\n" +
          "Farq siyosiy huquqlarda: saylash va saylanish, " +
          "davlat xizmatiga kirish kabi huquqlar " +
          "Konstitutsiyada «FUQAROLAR» uchun deb " +
          "belgilangan. Shu sababli Konstitutsiya matnini " +
          "o'qiganda «har kim» va «fuqarolar» iboralarining " +
          "farqiga e'tibor berish kerak — bu tasodifiy " +
          "so'z tanlash emas, huquq doirasini ko'rsatadi.\n\n" +
          "Harakatlanish erkinligi ham «qonuniy asoslarda " +
          "hududda bo'lib turgan har kim» uchun " +
          "kafolatlangan — ya'ni bu ham fuqarolikka " +
          "bog'lanmagan.",
        example:
          "Konstitutsiya matnida bir modda «Har kim…» deb, " +
          "boshqasi «O'zbekiston Respublikasi fuqarolari…» " +
          "deb boshlanadi. Birinchisi hududdagi barchaga " +
          "tegishli, ikkinchisi faqat fuqarolarga. Shu " +
          "farqni payqash Konstitutsiyani to'g'ri o'qishning " +
          "eng foydali ko'nikmalaridan biri.",
        keyPoints: [
          "Asosiy inson huquqlari fuqarolikka bog'liq emas",
          "Siyosiy huquqlar (saylov, davlat xizmati) — fuqarolar uchun",
          "«Har kim» va «fuqarolar» iboralari huquq doirasini ko'rsatadi",
          "Chet el fuqarolari O'zbekiston qonunlariga rioya etishi shart",
        ],
        warning:
          "Chet el fuqarosi sud himoyasidan foydalanish " +
          "huquqiga ega — bu ko'pincha bilinmaydi. Nizoda " +
          "«men fuqaro emasman, sudga bora olmayman» degan " +
          "fikr noto'g'ri.",
        lawRefs: [
          { code: "KONS", article: "24" },
          { code: "KONS", article: "32" },
        ],
      },
    ],
  },
];

module.exports = { LESSONS };
