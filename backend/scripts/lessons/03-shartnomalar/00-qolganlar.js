"use strict";
/**
 * MODUL 3 — BITIM VA SHARTNOMALAR (14 dars)
 *
 * Manba: Fuqarolik kodeksi 1-qism (FK — bitimlar, majburiyatlar,
 * shartnomaning umumiy qoidalari) va 2-qism (FK2 — shartnomalarning
 * alohida turlari).
 *
 * Modul ikki qismga bo'lingan:
 *   1-7  dars — UMUMIY qoidalar (har qanday shartnomaga tegishli)
 *   8-14 dars — ALOHIDA turlar (oldi-sotdi, ijara, pudrat, qarz…)
 *
 * Bu tartib ataylab: umumiy qoidalarni bilmasdan alohida turni
 * o'rganish samarasiz — masalan «shartnoma qanday bekor qilinadi»
 * degan savolga javob umumiy qismda, tur bo'yicha darsda esa faqat
 * o'ziga xos qo'shimchalar bo'ladi.
 */

const LESSONS = [
  /* ═══════════════════════════════════════════════════════════════
     1. Shartnoma huquqi  (MAVJUD KALIT — kengaytirildi)
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "shartnoma-huquqi",
    category: "contracts",
    level: "basic",
    order: 3010,
    title: "Shartnoma: tushunchasi va erkinligi",
    desc:
      "Shartnoma nima, tuzish erkinligi nimani beradi va nimani " +
      "cheklaydi, muhim shartlar va baho masalasi.",
    objectives: [
      "Shartnoma tushunchasini va uning majburiy kuchini bilasiz",
      "Shartnoma erkinligi prinsipini va uning chegarasini tushunasiz",
      "Muhim shartlar nima ekanligini va nega ular kritik ekanini bilasiz",
      "Shartnomada baho ko'rsatilmasa nima bo'lishini bilasiz",
    ],
    practicalSteps: [
      "Har qanday kelishuvni yozma tuzing — hatto qonun og'zaki shaklga ruxsat bergan holatda ham",
      "Shartnomada uch narsani aniq yozing: nima, qancha, qachon",
      "Imzolashdan oldin butun matnni o'qing, ayniqsa javobgarlik va bekor qilish bandlarini",
      "O'z nusxangizni imzolangan holda oling — nusxasi yo'q shartnoma amalda yo'q shartnomaga teng",
    ],
    sections: [
      {
        heading: "Shartnoma nima va u qanday kuchga ega",
        text:
          "Shartnoma — ikki yoki bir necha shaxsning fuqarolik " +
          "huquqlari va burchlarini vujudga keltirish, o'zgartirish " +
          "yoki bekor qilish haqidagi kelishuvi.\n\n" +
          "Eng muhim jihat — shartnoma tuzilgan paytidan boshlab " +
          "kuchga kiradi va taraflar uchun MAJBURIY bo'lib qoladi. " +
          "Ya'ni siz imzolagan hujjat sizga qonun kabi majburiy: " +
          "keyin «men bunga rozi emasman» degan gap uni bekor " +
          "qilmaydi.\n\n" +
          "Bu qoidadan ikkita amaliy natija chiqadi. Birinchisi — " +
          "imzolashdan OLDIN o'qish. Imzo qo'yilgandan keyin " +
          "shartlarni o'zgartirish faqat ikkinchi tomonning " +
          "roziligi bilan mumkin. Ikkinchisi — majburiyatni " +
          "bajarishdan bir tomonlama bosh tortishga yo'l " +
          "qo'yilmaydi (qonun yoki shartnomada bunday huquq " +
          "ko'rsatilgan hollardan tashqari).\n\n" +
          "Shartnomalar haq evaziga va tekinga tuziladi. Haq " +
          "evaziga tuzilganida taraf o'z burchlarini " +
          "bajarganligi uchun haq oladi; tekin shartnomada esa " +
          "(masalan hadya) bunday haq bo'lmaydi.\n\n" +
          "Shartnoma matni noaniq bo'lsa, sud uni sharhlaydi: " +
          "avval so'z va iboralarning asl ma'nosi e'tiborga " +
          "olinadi. Shu sababli noaniq ibora yozib qo'yish " +
          "keyin sizga qarshi ishlashi mumkin.",
        example:
          "Ikki tomon xizmat ko'rsatish bo'yicha kelishdi, " +
          "shartnomada «ishlar o'z vaqtida bajariladi» deb " +
          "yozildi. Nizo chiqqanda «o'z vaqtida» qancha " +
          "ekanini hech kim isbotlay olmadi. To'g'ri yozuv — " +
          "aniq sana yoki aniq muddat: shundagina uni " +
          "buzganlikni ko'rsatish mumkin.",
        keyPoints: [
          "Shartnoma tuzilgan paytdan taraflar uchun MAJBURIY kuchga ega",
          "Bir tomonlama bosh tortish umumiy qoida bo'yicha mumkin emas",
          "Shartnomalar haq evaziga yoki tekinga tuzilishi mumkin",
          "Noaniq ibora sudda siz kutgandek sharhlanmasligi mumkin",
        ],
        warning:
          "«Keyin gaplashib olamiz» degan yondashuv bilan " +
          "muhim shartlarni bo'sh qoldirmang. Nizo aynan shu " +
          "bo'shliqlarda tug'iladi va u paytda kelishish " +
          "ancha qiyin bo'ladi.",
        lawRefs: [
          { code: "FK", article: "353" },
          { code: "FK", article: "357" },
          { code: "FK", article: "237" },
          { code: "FK", article: "363" },
        ],
      },
      {
        heading: "Shartnoma tuzish erkinligi va uning chegarasi",
        text:
          "Fuqarolar va yuridik shaxslar shartnoma tuzishda " +
          "erkindirlar. Shartnoma tuzishga majburlashga yo'l " +
          "qo'yilmaydi. Bu erkinlik uch qismdan iborat: " +
          "shartnoma tuzish yoki tuzmaslik, kontragentni " +
          "tanlash, shartlarni belgilash.\n\n" +
          "Lekin erkinlikning chegaralari ham bor va ularni " +
          "bilish muhim.\n\n" +
          "Birinchi chegara — OMMAVIY SHARTNOMA. Tashkilot o'z " +
          "faoliyati xususiyatiga ko'ra murojaat qilgan har " +
          "kimga xizmat ko'rsatishi shart bo'lgan hollarda, u " +
          "asossiz rad eta olmaydi. Bunday shartnomalarda " +
          "shartlar barcha uchun bir xil bo'lishi kerak.\n\n" +
          "Ikkinchi chegara — MAJBURIY tartibda shartnoma " +
          "tuzish: qonunga muvofiq shartnoma tuzish majburiy " +
          "bo'lgan holatlar mavjud.\n\n" +
          "Uchinchi chegara — QO'SHILISH SHARTNOMASI. " +
          "Shartlarini bir taraf standart shaklda tayyorlagan " +
          "va ikkinchi taraf faqat qo'shilishi mumkin bo'lgan " +
          "shartnomalar. Bunda kuchsiz tomon uchun qo'shimcha " +
          "himoya nazarda tutilgan — aniq nomutanosib " +
          "shartlarga e'tiroz bildirish mumkin.\n\n" +
          "Shuningdek shartnomada namunaviy shartlarga havola " +
          "berilishi mumkin — bu holatda ular ham shartnoma " +
          "qismi bo'lib qoladi.",
        example:
          "Kommunal xizmat yoki ommaviy transport kabi " +
          "sohalarda tashkilot murojaat qilgan mijozga " +
          "«men xohlamayman» deb rad eta olmaydi — bu " +
          "ommaviy shartnoma toifasiga kiradi. Aksincha, " +
          "oddiy tadbirkor esa kim bilan ishlashni o'zi " +
          "tanlashga haqli.",
        keyPoints: [
          "Shartnoma erkinligi: tuzish, kontragent tanlash, shartlarni belgilash",
          "Ommaviy shartnomada asossiz rad etish mumkin emas",
          "Ayrim hollarda qonun shartnoma tuzishni majburiy qiladi",
          "Qo'shilish shartnomasida kuchsiz tomon qo'shimcha himoyaga ega",
        ],
        warning:
          "Standart shakldagi shartnomani «hamma shunday " +
          "imzolaydi» deb o'qimasdan imzolash xavfli. Aynan " +
          "bunday matnlarda bir tomonga qulay bandlar " +
          "yashiringan bo'ladi.",
        lawRefs: [
          { code: "FK", article: "354" },
          { code: "FK", article: "358" },
          { code: "FK", article: "360" },
          { code: "FK", article: "359" },
        ],
      },
      {
        heading: "Muhim shartlar va baho",
        text:
          "Shartnoma tuzilgan hisoblanishi uchun taraflar " +
          "uning BARCHA MUHIM SHARTLARI yuzasidan kelishuvga " +
          "erishishi kerak. Bu shakliy talab emas: muhim " +
          "shart bo'yicha kelishuv yo'q bo'lsa, shartnoma " +
          "tuzilmagan hisoblanadi.\n\n" +
          "Muhim shartlar uch guruhdan iborat. Birinchisi — " +
          "shartnoma PREDMETI (nima haqida kelishildi). " +
          "Ikkinchisi — qonunda shu tur shartnoma uchun " +
          "muhim deb ko'rsatilgan shartlar. Uchinchisi — " +
          "taraflardan biri muhim deb bildirgan shartlar.\n\n" +
          "Uchinchi guruh amalda foydali: agar siz uchun " +
          "biror shart hal qiluvchi bo'lsa (masalan aniq " +
          "yetkazib berish sanasi), uni muhim deb bildirish " +
          "va shartnomaga kiritish mumkin.\n\n" +
          "Baho masalasi alohida e'tiborga loyiq. Umumiy " +
          "qoida: shartnomani bajarganlik uchun taraflar " +
          "kelishuvi bilan belgilangan bahoda haq " +
          "to'lanadi. Baho ko'rsatilmagan bo'lsa, qonun " +
          "bo'shliqni to'ldirish mexanizmini beradi — " +
          "shunga o'xshash sharoitlarda odatda olinadigan " +
          "baho qo'llaniladi.\n\n" +
          "Lekin bu mexanizmga tayanish yaxshi strategiya " +
          "emas: «odatdagi baho» ni isbotlash qiyin va " +
          "natija kutilganidan farq qilishi mumkin.",
        example:
          "Ta'mirlash ishlari bo'yicha kelishuvda faqat " +
          "«ta'mir qilinadi» deb yozilgan, ishlar hajmi " +
          "va narxi ko'rsatilmagan. Nizo chiqqanda " +
          "buyurtmachi «hammasi kelishilgan narxga " +
          "kiradi» deydi, pudratchi esa «qo'shimcha " +
          "ishlar» deb hisoblaydi. Predmet va bahoni " +
          "aniq yozish shu nizoni butunlay oldini olardi.",
        keyPoints: [
          "Muhim shartlar bo'yicha kelishuv bo'lmasa shartnoma tuzilmagan hisoblanadi",
          "Muhim shartlar: predmet, qonundagi shartlar, taraf muhim deb bildirgan shartlar",
          "Siz uchun kritik shartni «muhim» deb bildirib kiritish mumkin",
          "Baho ko'rsatilmasa odatdagi baho qo'llaniladi, lekin uni isbotlash qiyin",
        ],
        warning:
          "Shartnomada ishlar HAJMINI aniq yozmaslik eng " +
          "ko'p nizo keltiradigan xato. «Qo'shimcha ish» " +
          "bo'yicha kelishmovchilik aynan shu " +
          "noaniqlikdan tug'iladi.",
        lawRefs: [
          { code: "FK", article: "364" },
          { code: "FK", article: "356" },
          { code: "FK", article: "355" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     2. Bitim shakli
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "bitim-shakli",
    category: "contracts",
    level: "basic",
    order: 3020,
    title: "Bitim shakli: og'zaki, yozma, notarial",
    desc:
      "Qaysi bitim og'zaki bo'lishi mumkin, qaysi biri yozma " +
      "shaklni talab qiladi va shaklga rioya qilmaslik nimaga olib keladi.",
    objectives: [
      "Bitim turlarini va shakl talablarini bilasiz",
      "Qaysi holatda notarial tasdiqlash zarurligini bilasiz",
      "Shaklga rioya qilmaslik oqibatlarini tushunasiz",
      "Davlat ro'yxatidan o'tkazish qachon talab qilinishini bilasiz",
    ],
    practicalSteps: [
      "Summasi katta har qanday kelishuvni yozma tuzing, hatto qonun talab qilmasa ham",
      "Ko'chmas mulk bilan bog'liq bitimlarda notarial shakl va ro'yxatga olishni oxirigacha bajaring",
      "Yozma shartnomada tomonlar rekvizitlari, sana va imzolarni tekshiring",
      "Og'zaki kelishuv bo'lsa, uni yozma xabar bilan tasdiqlab qo'ying — bu keyin dalil bo'ladi",
    ],
    sections: [
      {
        heading: "Bitim nima va uning turlari",
        text:
          "Bitimlar — fuqarolar va yuridik shaxslarning " +
          "fuqarolik huquq va burchlarini belgilash, " +
          "o'zgartirish yoki bekor qilishga qaratilgan " +
          "harakatlari.\n\n" +
          "Bitimlar bir taraflama, ikki taraflama yoki " +
          "ko'p taraflama bo'lishi mumkin. Ikki va ko'p " +
          "taraflama bitimlar SHARTNOMA deb ataladi.\n\n" +
          "Bir taraflama bitim uchun bitta shaxsning " +
          "irodasi yetarli va u shu shaxs uchun burchlar " +
          "keltirib chiqaradi. Klassik misollar: " +
          "vasiyatnoma, ishonchnoma, merosni qabul " +
          "qilishdan voz kechish.\n\n" +
          "Alohida tur — SHARTLI BITIM: taraflar huquq va " +
          "burchlarning kelib chiqishini yuz berishi yoki " +
          "bermasligi noma'lum bo'lgan holatga bog'lashi " +
          "mumkin.\n\n" +
          "Bitimning shakli haqidagi umumiy qoida: " +
          "bitimlar og'zaki yoki yozma (oddiy yoki notarial " +
          "tasdiqlangan) shaklda tuziladi. Sukut saqlash " +
          "esa faqat qonunchilikda ko'rsatilgan hollarda " +
          "iroda ifodasi hisoblanadi.\n\n" +
          "Oxirgi qoida amalda muhim: jim turish odatda " +
          "«roziman» degani EMAS. Shu sababli «javob " +
          "bermasangiz rozi hisoblanasiz» degan shartlarga " +
          "e'tibor bering.",
        example:
          "Ishonchnoma berish — bir taraflama bitim: uni " +
          "berish uchun vakilning roziligi shart emas. " +
          "Oldi-sotdi esa ikki taraflama: sotuvchi ham, " +
          "xaridor ham rozi bo'lishi kerak. Farq amaliy: " +
          "bir taraflama bitimni bekor qilish tartibi " +
          "ham boshqacha.",
        keyPoints: [
          "Bitim bir, ikki yoki ko'p taraflama bo'ladi; ikki va ko'p taraflamasi — shartnoma",
          "Bir taraflama bitimga misollar: vasiyat, ishonchnoma, voz kechish",
          "Shakl: og'zaki, oddiy yozma yoki notarial",
          "Sukut saqlash faqat qonunda ko'rsatilgan hollarda rozilik hisoblanadi",
        ],
        warning:
          "Shartli bitimda shart noaniq yozilsa, u " +
          "bajarilgan-bajarilmaganini aniqlash imkonsiz " +
          "bo'ladi. Shartni tekshirib bo'ladigan " +
          "shaklda yozing.",
        lawRefs: [
          { code: "FK", article: "101" },
          { code: "FK", article: "102" },
          { code: "FK", article: "103" },
          { code: "FK", article: "104" },
          { code: "FK", article: "105" },
        ],
      },
      {
        heading: "Yozma shakl va notarial tasdiqlash",
        text:
          "Og'zaki shakl faqat qonunchilikda yoki " +
          "taraflarning kelishuvida yozma shakl " +
          "belgilanmagan bitimlar uchun mumkin — asosan " +
          "tuzilayotgan paytda bajarilib qo'yiladigan " +
          "bitimlar.\n\n" +
          "Yozma shaklda tuzilgan bitim taraflar tomonidan " +
          "imzolanishi kerak. Qonun oddiy yozma shakl " +
          "talab qiladigan bitimlar doirasini belgilaydi — " +
          "bunga yuridik shaxslar o'rtasidagi bitimlar va " +
          "summasi belgilangan miqdordan oshadigan " +
          "fuqarolar o'rtasidagi bitimlar kiradi.\n\n" +
          "Notarial tasdiqlash yuqori darajadagi shakl. " +
          "Notarius bitim mazmunini, taraflar irodasini va " +
          "layoqatini tekshiradi — shu sababli notarial " +
          "bitimga keyinchalik e'tiroz bildirish ancha " +
          "qiyin bo'ladi. Bu himoya vositasi, ortiqcha " +
          "byurokratiya emas.\n\n" +
          "Uchinchi element — DAVLAT RO'YXATIDAN " +
          "O'TKAZISH. Yer uchastkalari va boshqa ko'chmas " +
          "mol-mulk bilan bog'liq bitimlar ro'yxatdan " +
          "o'tkazilishi kerak.\n\n" +
          "Bu uch talabni ARALASHTIRMASLIK kerak: yozma " +
          "shakl, notarial tasdiqlash va ro'yxatga olish — " +
          "uchta alohida qadam. Ko'chmas mulk bitimida " +
          "ko'pincha uchalasi ham talab qilinadi va " +
          "bittasini bajarish qolganlarini bekor qilmaydi.",
        example:
          "Uy sotib olishda tomonlar shartnomani yozma " +
          "tuzdi va notariusda tasdiqlatdi, lekin " +
          "ro'yxatga olishni keyinga qoldirdi. Bu " +
          "holatda huquqning o'tishi to'liq " +
          "yakunlanmagan bo'lib qoladi — uchinchi " +
          "shaxslar bilan nizoda xaridorning holati " +
          "zaif bo'ladi.",
        keyPoints: [
          "Og'zaki shakl faqat qonun yozma shaklni talab qilmagan bitimlarda",
          "Notarial tasdiqlash — himoya vositasi, e'tiroz bildirishni qiyinlashtiradi",
          "Ko'chmas mulk bitimlari davlat ro'yxatidan o'tkaziladi",
          "Yozma shakl, notarial tasdiq va ro'yxatga olish — UCHTA alohida qadam",
        ],
        warning:
          "Notarial tasdiqlangani bitimning avtomatik " +
          "«hech qachon buzilmasligi» degani emas. " +
          "Mazmuni qonunga zid bo'lsa, notarial bitim " +
          "ham haqiqiy emas deb topilishi mumkin.",
        lawRefs: [
          { code: "FK", article: "106" },
          { code: "FK", article: "107" },
          { code: "FK", article: "108" },
          { code: "FK", article: "110" },
          { code: "FK", article: "111" },
        ],
      },
      {
        heading: "Shaklga rioya qilmaslik oqibatlari",
        text:
          "Bu qism amalda eng ko'p yo'qotishga sabab " +
          "bo'ladigan joy, chunki oqibatlar shakl " +
          "turiga qarab BUTUNLAY boshqacha.\n\n" +
          "ODDIY YOZMA shaklga rioya qilmaslik odatda " +
          "bitimni haqiqiy emas qilib qo'ymaydi. Lekin " +
          "u jiddiy protsessual oqibat keltiradi: nizo " +
          "chiqqanda bitim mavjudligini va shartlarini " +
          "isbotlash imkoniyati cheklanadi.\n\n" +
          "Ya'ni bitim bor, lekin siz uni ISBOTLAY " +
          "olmaysiz. Amalda bu bitimning yo'qligi bilan " +
          "deyarli barobar natija beradi.\n\n" +
          "NOTARIAL shakl va RO'YXATGA OLISH talabiga " +
          "rioya qilmaslik esa ancha og'ir: bunday " +
          "hollarda qonun bitimning haqiqiy emasligini " +
          "nazarda tutadi.\n\n" +
          "Umumiy qoida: bitimning qonun talab qiladigan " +
          "shakliga rioya etmaslik qonunda to'g'ridan-" +
          "to'g'ri ko'rsatilgan oqibatlarga olib " +
          "keladi.\n\n" +
          "Amaliy xulosa juda sodda: shakl bo'yicha " +
          "«tejash» qilmaslik kerak. Notarial xarajat " +
          "yoki ro'yxat bojidan tejalgan mablag' " +
          "keyinchalik yo'qotilgan mulk bilan " +
          "solishtirilganda hech narsa emas.",
        example:
          "Ikki tanish katta summani og'zaki qarzga " +
          "berdi, tilxat olinmadi. Qarzdor qarzni tan " +
          "olmasa, qarz beruvchi og'ir holatda qoladi: " +
          "kelishuv bo'lgan, lekin uni ko'rsatadigan " +
          "hujjat yo'q. Oddiy tilxat bu muammoni " +
          "butunlay yechardi.",
        keyPoints: [
          "Oddiy yozma shaklni buzish — bitim kuchda, lekin isbotlash cheklanadi",
          "Notarial shakl va ro'yxatga olish talabini buzish haqiqiy emaslikka olib keladi",
          "«Bitim bor, lekin isbotlay olmayman» amalda bitim yo'qligiga teng",
          "Shakl bo'yicha tejash keyin ancha qimmatga tushadi",
        ],
        warning:
          "Guvohlar har doim yechim emas: ayrim " +
          "holatlarda yozma shakl buzilganda guvohlik " +
          "ko'rsatmasiga tayanish imkoniyati " +
          "cheklanadi. Yozma hujjat eng ishonchli yo'l.",
        lawRefs: [
          { code: "FK", article: "109" },
          { code: "FK", article: "112" },
          { code: "FK", article: "115" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     3. Bitimning haqiqiy emasligi
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "bitim-haqiqiy-emas",
    category: "contracts",
    level: "advanced",
    order: 3030,
    title: "Bitim haqiqiy emas deb topilishi",
    desc:
      "Aldash, yanglishish, majburlash, qalbaki bitim: qanday " +
      "asoslarda bitimni bekor qilish mumkin va oqibati nima.",
    objectives: [
      "Nizoli va o'z-o'zidan haqiqiy bo'lmagan bitim farqini bilasiz",
      "Haqiqiy emaslikning asosiy asoslarini sanab bera olasiz",
      "Yanglishish va aldash o'rtasidagi farqni tushunasiz",
      "Bitim haqiqiy emas deb topilganda nima bo'lishini bilasiz",
    ],
    practicalSteps: [
      "Bitim tuzishdan oldin predmetni o'zingiz tekshiring: aldashga qarshi eng yaxshi himoya shu",
      "Bosim ostida hech narsa imzolamang — imzolangan hujjatni keyin bekor qilish ancha qiyin",
      "Aldash yoki majburlash bo'lsa, dalilni darhol to'plang: yozishmalar, guvohlar, sanalar",
      "Bitimni bekor qilish uchun sudga murojaat qiling: o'zingizni «bekor qildim» deb hisoblash yetarli emas",
    ],
    sections: [
      {
        heading: "Nizoli va o'z-o'zidan haqiqiy bo'lmagan bitimlar",
        text:
          "Qonun bitimlarning haqiqiy emasligini ikki " +
          "toifaga bo'ladi va bu farq amalda hal " +
          "qiluvchi ahamiyatga ega.\n\n" +
          "NIZOLI bitim — sud tomonidan haqiqiy emas deb " +
          "topilishi mumkin bo'lgan bitim. Ya'ni u " +
          "sudning qarori CHIQQUNCHA kuchda bo'lib " +
          "turadi. Manfaatdor shaxs sudga murojaat " +
          "qilmasa, bitim amal qilishda davom etadi.\n\n" +
          "O'Z-O'ZIDAN HAQIQIY BO'LMAGAN bitim esa sud " +
          "qarorisiz ham haqiqiy emas — u boshidan " +
          "yuridik kuchga ega bo'lmaydi.\n\n" +
          "Amaliy xulosa: nizoli bitim bo'lsa, kutib " +
          "o'tirish mumkin emas — sudga murojaat " +
          "qilish kerak, aks holda bitim kuchda " +
          "qoladi.\n\n" +
          "Yana bir muhim tushuncha — bitimning bir " +
          "QISMI haqiqiy emasligi. Bunday holatda " +
          "butun bitim emas, faqat o'sha qism kuchini " +
          "yo'qotadi (agar bitim shu qismsiz ham " +
          "mavjud bo'la olsa).\n\n" +
          "Haqiqiy emas deb topilgan bitim, umumiy " +
          "qoida bo'yicha, u TUZILGAN PAYTDAN boshlab " +
          "haqiqiy emas hisoblanadi — ya'ni oqibat " +
          "orqaga qarab ishlaydi.",
        example:
          "Shartnomada bitta band qonunga zid ekani " +
          "aniqlandi (masalan javobgarlikni butunlay " +
          "yo'q qiladigan shart). Bu butun " +
          "shartnomani bekor qilmaydi — faqat o'sha " +
          "band ishlamaydi, qolgan shartlar kuchda " +
          "qoladi.",
        keyPoints: [
          "Nizoli bitim SUD QARORIGACHA kuchda bo'ladi",
          "O'z-o'zidan haqiqiy bo'lmagan bitim boshidan kuchga ega emas",
          "Bitimning bir qismi haqiqiy emasligi butun bitimni bekor qilmasligi mumkin",
          "Haqiqiy emaslik oqibati bitim tuzilgan paytdan boshlanadi",
        ],
        warning:
          "«Bu shartnoma qonunga zid, shuning uchun " +
          "bajarmayman» degan yondashuv xavfli. " +
          "Nizoli bitim bo'lsa, sud qarorisiz siz " +
          "majburiyatni buzgan tomon bo'lib " +
          "qolasiz.",
        lawRefs: [
          { code: "FK", article: "113" },
          { code: "FK", article: "114" },
          { code: "FK", article: "127" },
          { code: "FK", article: "128" },
        ],
      },
      {
        heading: "Yanglishish, aldash va majburlash",
        text:
          "Bu uch asos amalda eng ko'p uchraydi va " +
          "ularni farqlash muhim, chunki isbot " +
          "predmeti boshqacha.\n\n" +
          "YANGLISHISH — shaxs bitim tuzayotganda " +
          "jiddiy ahamiyatga ega bo'lgan holat " +
          "yuzasidan xato tasavvurda bo'lgan. Bu " +
          "yerda hech kim ataylab aldamagan: xato " +
          "shaxsning o'zida yuzaga kelgan. Muhim " +
          "shart — yanglishish JIDDIY bo'lishi " +
          "kerak; kichik xato asos bo'lmaydi.\n\n" +
          "ALDASH — qarshi tomon ataylab noto'g'ri " +
          "ma'lumot bergan yoki muhim ma'lumotni " +
          "yashirgan. Bu yerda qasd bor va shuning " +
          "uchun oqibatlar ham qattiqroq.\n\n" +
          "ZO'RLIK va QO'RQITISH — bitim erkin " +
          "iroda bilan emas, bosim ostida tuzilgan. " +
          "Shu guruhga og'ir holatlar yuz berganda " +
          "(o'z manfaati uchun boshqaning og'ir " +
          "ahvolidan foydalanish) tuzilgan bitimlar " +
          "ham kiradi.\n\n" +
          "Alohida asos — QALBAKI va " +
          "KO'ZBO'YAMACHILIK uchun tuzilgan bitim. " +
          "Qalbaki bitimda taraflar yuridik oqibat " +
          "keltirishni umuman xohlamaydi (masalan " +
          "mol-mulkni undirishdan yashirish uchun " +
          "«sotish»). Ko'zbo'yamachilik bitimida esa " +
          "bir bitim boshqasini yashirish uchun " +
          "tuziladi.\n\n" +
          "Layoqat bilan bog'liq asoslar ham bor: " +
          "voyaga yetmagan, muomalaga layoqatsiz " +
          "yoki o'z harakatlarining ahamiyatini " +
          "tushunmaydigan holatda bo'lgan shaxs " +
          "tuzgan bitim.",
        example:
          "Xaridor uy sotib oldi, sotuvchi esa uyda " +
          "boshqa shaxslarning yashash huquqi " +
          "borligini aytmadi. Bu ma'lumotni " +
          "yashirish aldash belgilariga ega bo'lishi " +
          "mumkin — chunki u xaridorning qarorini " +
          "o'zgartiradigan muhim holat edi.",
        keyPoints: [
          "Yanglishish — o'z xatosi, JIDDIY bo'lishi kerak",
          "Aldash — qarshi tomonning qasddan noto'g'ri ma'lumot berishi yoki yashirishi",
          "Zo'rlik va qo'rqitish erkin irodani yo'q qiladi",
          "Qalbaki bitimda taraflar yuridik oqibat xohlamaydi",
        ],
        warning:
          "«Men tushunmagan edim» degan gap o'z-o'zidan " +
          "yanglishish emas. Sud jiddiy ahamiyatga ega " +
          "holat yuzasidan xato tasavvur bo'lganini " +
          "talab qiladi — bu isbotlanishi kerak.",
        lawRefs: [
          { code: "FK", article: "122" },
          { code: "FK", article: "123" },
          { code: "FK", article: "124" },
          { code: "FK", article: "121" },
        ],
      },
      {
        heading: "Haqiqiy emaslik oqibatlari",
        text:
          "Bitim haqiqiy emas deb topilgandan keyin " +
          "asosiy savol tug'iladi: berilgan narsa va " +
          "to'langan pul bilan nima bo'ladi?\n\n" +
          "Umumiy qoida — TARAFLARNI DASTLABKI " +
          "HOLATGA QAYTARISH. Ya'ni har bir taraf " +
          "bitim bo'yicha olganini qaytaradi. " +
          "Ayni tabiatda qaytarish imkonsiz bo'lsa, " +
          "qiymati pul bilan qoplanadi.\n\n" +
          "Bu qoidaning amaliy natijasi muhim: " +
          "bitimni bekor qilish «pulni qaytarib " +
          "olish va narsani ham olib qolish» " +
          "degani EMAS. Ikki tomon ham qaytaradi.\n\n" +
          "Ayrim asoslar uchun qonun qo'shimcha " +
          "oqibatlar nazarda tutadi — masalan " +
          "aybdor tomonning zararni qoplashi. " +
          "Bunda aldagan yoki majburlagan tomon " +
          "og'irroq holatda qoladi.\n\n" +
          "Amaliy strategiya bo'yicha muhim nuqta: " +
          "bitimni bekor qilish har doim eng " +
          "foydali yo'l emas. Ba'zan narxni " +
          "kamaytirishni yoki kamchilikni " +
          "tuzatishni talab qilish qulayroq " +
          "bo'ladi — chunki bekor qilishda siz ham " +
          "olganingizni qaytarishga to'g'ri " +
          "keladi.\n\n" +
          "Shu sababli da'vo turini tanlashdan " +
          "oldin natijani hisoblab ko'rish kerak.",
        example:
          "Xaridor uskunani qaytarib, pulini olishni " +
          "talab qildi. Bitim haqiqiy emas deb " +
          "topilsa, u pulni oladi, lekin uskunani " +
          "ham qaytaradi. Agar uskuna allaqachon " +
          "ishlatilib eskirgan bo'lsa, bu masala " +
          "ham hisobga olinadi — shuning uchun " +
          "ba'zan narxni kamaytirish talabi " +
          "foydaliroq bo'ladi.",
        keyPoints: [
          "Asosiy oqibat — taraflarni dastlabki holatga qaytarish",
          "Har bir taraf olganini qaytaradi, imkonsiz bo'lsa qiymatini to'laydi",
          "Ayrim asoslarda aybdor tomon zararni ham qoplaydi",
          "Bekor qilish har doim eng foydali yo'l emas — natijani hisoblang",
        ],
        warning:
          "Bitimni bekor qilish talabi bilan bir " +
          "vaqtda uni bajarishni talab qilish " +
          "mumkin emas — bu bir-biriga zid " +
          "talablar. Da'voda bittasini aniq " +
          "tanlash kerak.",
        lawRefs: [
          { code: "FK", article: "114" },
          { code: "FK", article: "11" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     4. Shartnoma tuzish tartibi
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "shartnoma-tuzish",
    category: "contracts",
    level: "mid",
    order: 3040,
    title: "Shartnoma qanday tuziladi: oferta va aksept",
    desc:
      "Taklif va rozilik mexanizmi, shartnoma qachon tuzilgan " +
      "hisoblanadi, kimoshdi savdosi va shartnoma oldidan nizolar.",
    objectives: [
      "Oferta va aksept nima ekanligini va ular qanday ishlashini bilasiz",
      "Shartnoma qaysi paytda tuzilgan hisoblanishini aniqlay olasiz",
      "Boshqa shartlar bilan javob berishning oqibatini bilasiz",
      "Kimoshdi savdosi qoidalarini asosiy darajada bilasiz",
    ],
    practicalSteps: [
      "Taklifingizni yozma va aniq yuboring: predmet, narx, muddat va javob berish muddati bilan",
      "Kelgan taklifga shartlarni o'zgartirib javob bersangiz — bu qabul emas, yangi taklif ekanini yodda tuting",
      "Shartnoma tuzilgan sanani hujjatda aniq qayd eting: muddatlar shundan hisoblanadi",
      "Elektron yozishmalarni saqlang — ular ko'pincha shartnoma tuzilganini ko'rsatuvchi dalil bo'ladi",
    ],
    sections: [
      {
        heading: "Oferta: taklif qanday bo'lishi kerak",
        text:
          "Shartnoma tuzish ikki bosqichdan iborat: " +
          "OFERTA (taklif) va AKSEPT (qabul qilish).\n\n" +
          "Oferta — bir yoki bir necha muayyan shaxsga " +
          "yuborilgan, yetarli darajada ANIQ bo'lgan " +
          "va taklif kiritgan shaxsning shartnoma " +
          "tuzish irodasini ifodalaydigan taklif.\n\n" +
          "«Yetarli darajada aniq» degan talab muhim: " +
          "oferta shartnomaning muhim shartlarini o'z " +
          "ichiga olishi kerak. Aks holda u oferta " +
          "emas, shunchaki taklif qilishga " +
          "chaqiruv bo'ladi (masalan reklama).\n\n" +
          "Bu farq amalda ko'p nizo keltiradi: " +
          "reklamada ko'rsatilgan narx odatda " +
          "oferta emas, shu sababli sotuvchi uni " +
          "o'zgartirishi mumkin.\n\n" +
          "Muhim qoida: qabul qiluvchi taraf olgan " +
          "oferta uni akseptlash uchun belgilangan " +
          "muddat mobaynida chaqirib olinishi " +
          "mumkin emas (agar ofertaning o'zida " +
          "boshqacha ko'rsatilmagan bo'lsa).\n\n" +
          "Ya'ni taklif yuborgan shaxs javob " +
          "muddati ichida so'zidan qaytib " +
          "keta olmaydi — bu qarshi tomonga " +
          "o'ylash uchun ishonchli vaqt beradi.",
        example:
          "Tashkilot mijozga narx va shartlar " +
          "ko'rsatilgan tijorat taklifini yuborib, " +
          "javob uchun muddat belgiladi. Bu oferta " +
          "va u muddat ichida chaqirib olinmaydi. " +
          "Aksincha, saytdagi umumiy narx ro'yxati " +
          "odatda oferta emas — u shartnoma " +
          "tuzishga chaqiruv.",
        keyPoints: [
          "Oferta muayyan shaxsga yuboriladi va muhim shartlarni o'z ichiga oladi",
          "Yetarli darajada aniq bo'lmagan taklif oferta hisoblanmaydi",
          "Reklama odatda oferta emas, taklif qilishga chaqiruv",
          "Oferta belgilangan javob muddati ichida chaqirib olinmaydi",
        ],
        warning:
          "Aniq narx va shartlar bilan yuborilgan " +
          "yozma taklif sizni bog'lab qo'yishi " +
          "mumkin. Shu sababli «hozircha " +
          "taxminiy» degan izohni yozib qo'yish " +
          "foydali.",
        lawRefs: [
          { code: "FK", article: "367" },
          { code: "FK", article: "368" },
        ],
      },
      {
        heading: "Aksept va shartnomaning tuzilish payti",
        text:
          "Aksept — ofertani qabul qilish. Asosiy " +
          "qoida: oferta yo'llagan shaxs uning " +
          "AKSEPTINI OLGAN paytda shartnoma " +
          "tuzilgan hisoblanadi.\n\n" +
          "Bu qoida amalda muhim: shartnoma " +
          "roziligingizni YUBORGAN paytda emas, " +
          "qarshi tomon uni OLGAN paytda " +
          "tuziladi.\n\n" +
          "Aksept muddati bo'yicha ikki holat " +
          "farqlanadi. Ofertada muddat " +
          "ko'rsatilgan bo'lsa, aksept shu muddat " +
          "ichida olinishi kerak. Muddat " +
          "ko'rsatilmagan bo'lsa, qonun oddiy " +
          "zarur vaqt mezonini qo'llaydi.\n\n" +
          "ENG MUHIM QOIDA — boshqa shartlar " +
          "asosidagi javob. Ofertada taklif " +
          "qilinganidan BOSHQACHA shartlar " +
          "asosida shartnoma tuzishga rozilik " +
          "bildirish AKSEPT HISOBLANMAYDI. " +
          "Bunday javob YANGI OFERTA sifatida " +
          "qaraladi.\n\n" +
          "Amaliy natijasi: siz kelgan " +
          "shartnomaga bitta raqamni " +
          "o'zgartirib imzolab yuborsangiz, " +
          "shartnoma tuzilmagan bo'ladi — endi " +
          "javob berish navbati qarshi tomonda.\n\n" +
          "Shartnomaning tuzilgan joyi ham " +
          "belgilanadi: ko'rsatilmagan bo'lsa, " +
          "u oferta yo'llagan shaxsning " +
          "joylashgan yeri hisoblanadi.",
        example:
          "Kompaniya shartnoma loyihasini " +
          "yubordi, ikkinchi tomon to'lov " +
          "muddatini o'zgartirib imzoladi va " +
          "qaytardi. Ular shartnoma tuzilgan " +
          "deb hisobladi, aslida esa bu yangi " +
          "oferta edi. Birinchi tomon " +
          "javob bermasa, shartnoma umuman " +
          "yo'q — bu ko'p uchraydigan xato.",
        keyPoints: [
          "Shartnoma aksept OLINGAN paytda tuzilgan hisoblanadi",
          "Boshqa shartlar bilan javob — aksept emas, YANGI OFERTA",
          "Aksept muddati ofertada ko'rsatiladi yoki oddiy zarur vaqt qo'llaniladi",
          "Tuzilgan joy ko'rsatilmasa oferta yuboruvchining joyi hisoblanadi",
        ],
        warning:
          "Shartnomaga «tuzatish kiritib imzolash» " +
          "eng xavfli amaliyot. Ikki tomon " +
          "o'zini bog'langan deb hisoblaydi, " +
          "huquqiy jihatdan esa kelishuv yo'q. " +
          "O'zgarishni alohida kelishib, " +
          "yakuniy matnni imzolash to'g'ri.",
        lawRefs: [
          { code: "FK", article: "365" },
          { code: "FK", article: "372" },
          { code: "FK", article: "373" },
          { code: "FK", article: "375" },
          { code: "FK", article: "376" },
        ],
      },
      {
        heading: "Kimoshdi savdosi va majburiy shartnoma",
        text:
          "Ayrim hollarda shartnoma odatdagi " +
          "muzokara emas, maxsus tartibda " +
          "tuziladi.\n\n" +
          "KIMOSHDI SAVDOSI (auksion va tanlov) " +
          "orqali shartnoma tuzilganda g'olib " +
          "bilan shartnoma tuzilishi shart. " +
          "Auksionlar va tanlovlar ochiq yoki " +
          "yopiq bo'lishi mumkin.\n\n" +
          "Farqi: auksionda g'olib eng yaxshi " +
          "NARX taklif qilgan shaxs, tanlovda " +
          "esa eng yaxshi SHARTLARNI taklif " +
          "qilgan shaxs.\n\n" +
          "Muhim himoya mexanizmi bor: qonunda " +
          "belgilangan qoidalar buzib " +
          "o'tkazilgan kimoshdi savdosi " +
          "manfaatdor shaxsning da'vosi bo'yicha " +
          "haqiqiy emas deb topilishi mumkin. " +
          "Ya'ni savdo natijasiga e'tiroz " +
          "bildirish yo'li ochiq.\n\n" +
          "MAJBURIY TARTIBDA shartnoma tuzish — " +
          "boshqa mexanizm: qonunga muvofiq " +
          "shartnoma tuzish majburiy bo'lgan " +
          "holatlarda taraf ofertani ko'rib " +
          "chiqishi va javob berishi kerak.\n\n" +
          "SHARTNOMA OLDIDAN BO'LADIGAN NIZOLAR " +
          "esa alohida institut: shartnoma " +
          "tuzish chog'ida yuzaga kelgan " +
          "kelishmovchiliklar belgilangan " +
          "tartibda hal qilinadi.",
        example:
          "Davlat xaridi tanlovida qatnashuvchi " +
          "qoidalar buzilganini aniqladi " +
          "(masalan ariza asossiz rad etildi). " +
          "U tanlov natijasini haqiqiy emas deb " +
          "topish uchun sudga murojaat qilishi " +
          "mumkin — savdo natijasi " +
          "e'tirozsiz emas.",
        keyPoints: [
          "Auksionda g'olib eng yaxshi narx, tanlovda eng yaxshi shartlarni taklif qilgan",
          "Qoidalar buzib o'tkazilgan savdo haqiqiy emas deb topilishi mumkin",
          "Ayrim hollarda qonun shartnoma tuzishni majburiy qiladi",
          "Shartnoma oldidan nizolar belgilangan tartibda hal qilinadi",
        ],
        warning:
          "Savdo natijasiga e'tiroz uchun " +
          "muddatlar qisqa bo'lishi mumkin. " +
          "Qoidabuzarlik aniqlanishi bilan " +
          "darhol harakat qilish kerak — " +
          "kechikish imkoniyatni yo'qotadi.",
        lawRefs: [
          { code: "FK", article: "379" },
          { code: "FK", article: "380" },
          { code: "FK", article: "381" },
          { code: "FK", article: "377" },
          { code: "FK", article: "378" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     5. Majburiyatlarni bajarish
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "shartnoma-majburiyat",
    category: "contracts",
    level: "mid",
    order: 3050,
    title: "Majburiyatlarni bajarish",
    desc:
      "Majburiyat nima, kim kimga bajaradi, qachon va qanday " +
      "bajariladi, bajarilganini qanday tasdiqlash kerak.",
    objectives: [
      "Majburiyat tushunchasini va taraflarini bilasiz",
      "Majburiyat qanday tartibda bajarilishi kerakligini bilasiz",
      "Uchinchi shaxs majburiyatni bajarishi mumkinligini tushunasiz",
      "Bajarilganini tasdiqlashning ahamiyatini bilasiz",
    ],
    practicalSteps: [
      "To'lov qilganda har doim tilxat, kvitansiya yoki bank hujjatini oling",
      "Majburiyat bajarilgach, qarz hujjatini qaytarib olishni yoki unga izoh yozdirishni talab qiling",
      "Boshqa shaxs orqali to'lov qilsangiz, to'lov maqsadi hujjatda aniq ko'rsatilsin",
      "Muddati ko'rsatilmagan majburiyatda yozma talab yuborib, muddatni o'zingiz aniqlashtiring",
    ],
    sections: [
      {
        heading: "Majburiyat tushunchasi va taraflari",
        text:
          "Majburiyat — fuqarolik huquqiy munosabati " +
          "bo'lib, unga asosan bir shaxs (qarzdor) " +
          "boshqa shaxs (kreditor) foydasiga muayyan " +
          "harakatni bajarishi shart: mol-mulk " +
          "topshirish, ish bajarish, pul to'lash yoki " +
          "ma'lum harakatdan tiyilish.\n\n" +
          "Taraflar — kreditor va qarzdor. Muhim " +
          "nuqta: ko'p shartnomalarda har bir taraf " +
          "AYNI PAYTDA ikkalasi ham bo'ladi. " +
          "Masalan oldi-sotdida sotuvchi tovar " +
          "bo'yicha qarzdor, pul bo'yicha esa " +
          "kreditor.\n\n" +
          "Bu tushuncha amalda foydali: nizoda " +
          "«kim nima qarzdor» degan savolga aniq " +
          "javob berish uchun har bir majburiyatni " +
          "alohida ko'rib chiqish kerak.\n\n" +
          "Majburiyatlar shartnoma shartlariga va " +
          "qonunchilik talablariga muvofiq " +
          "bajarilishi kerak; bunday shartlar va " +
          "talablar bo'lmasa — odatda qo'yiladigan " +
          "talablarga muvofiq.\n\n" +
          "Majburiyat bir necha kreditor yoki bir " +
          "necha qarzdor ishtirokida ham bo'lishi " +
          "mumkin. Bunda ulushli va birdamlik " +
          "majburiyatlari farqlanadi: birdamlik " +
          "majburiyatda kreditor to'liq summani " +
          "istalgan qarzdordan talab qilishi " +
          "mumkin.",
        example:
          "Ikki shaxs birgalikda qarz oldi va " +
          "shartnomada birdamlik javobgarligi " +
          "ko'rsatildi. Qarz beruvchi butun " +
          "summani ikkisidan biriga qo'yishi " +
          "mumkin — «mening ulushim yarmi» degan " +
          "e'tiroz bu holatda ishlamaydi. Ular " +
          "keyin o'zaro hisob-kitob qiladi.",
        keyPoints: [
          "Majburiyatda qarzdor kreditor foydasiga muayyan harakatni bajaradi",
          "Ko'p shartnomalarda har bir taraf ham kreditor, ham qarzdor bo'ladi",
          "Bajarish shartnoma va qonun talablariga muvofiq amalga oshiriladi",
          "Birdamlik majburiyatda to'liq summa istalgan qarzdordan talab qilinadi",
        ],
        warning:
          "Shartnomada javobgarlik turi (ulushli " +
          "yoki birdamlik) ko'rsatilmasa, keyin " +
          "kim qancha to'lashi bo'yicha nizo " +
          "chiqadi. Buni oldindan yozib qo'yish " +
          "muhim.",
        lawRefs: [
          { code: "FK", article: "234" },
          { code: "FK", article: "235" },
          { code: "FK", article: "236" },
          { code: "FK", article: "251" },
        ],
      },
      {
        heading: "Kim va qachon bajaradi",
        text:
          "Majburiyat kimga bajarilishi kerak? " +
          "Umumiy qoida: majburiyat kreditorga " +
          "yoki u vakil qilgan shaxsga " +
          "bajariladi. Shu sababli to'lovni " +
          "«qarindoshiga berib qo'ydim» degan " +
          "yo'l xavfli — vakolat bo'lmasa, " +
          "majburiyat bajarilmagan hisoblanishi " +
          "mumkin.\n\n" +
          "Boshqa tomondan, majburiyatni " +
          "bajarishni UCHINCHI SHAXS zimmasiga " +
          "yuklash mumkin: qarzdor majburiyatni " +
          "o'zi bajarishi shart bo'lmagan " +
          "hollarda uni boshqa shaxs orqali " +
          "bajarishi mumkin. Kreditor bunday " +
          "ijroni qabul qilishi kerak.\n\n" +
          "Muddat masalasi ham muhim. Muddat " +
          "belgilangan bo'lsa — shu muddatda " +
          "bajariladi. Muddat ko'rsatilmagan " +
          "yoki talab qilib olish payti bilan " +
          "belgilangan bo'lsa, kreditor " +
          "istalgan vaqtda bajarishni talab " +
          "qilishi mumkin va qarzdorga " +
          "qonunda belgilangan oqilona vaqt " +
          "beriladi.\n\n" +
          "Muddatidan ilgari bajarish har " +
          "doim mumkin emas: bu qonunda yoki " +
          "shartnomada nazarda tutilgan " +
          "bo'lishi yoxud majburiyat " +
          "mohiyatidan kelib chiqishi kerak. " +
          "Tadbirkorlik munosabatlarida bu " +
          "qoida ayniqsa muhim — muddatidan " +
          "oldin yetkazib berish kreditorga " +
          "noqulaylik keltirishi mumkin.",
        example:
          "Qarzdor to'lovni muddatdan bir oy " +
          "oldin amalga oshirmoqchi bo'ldi, " +
          "lekin shartnomada foizlar oylik " +
          "hisoblangan edi. Muddatidan ilgari " +
          "bajarish kreditor manfaatiga ta'sir " +
          "qilishi mumkin — shuning uchun bu " +
          "imkoniyatni shartnomada oldindan " +
          "kelishib qo'yish kerak.",
        keyPoints: [
          "Majburiyat kreditorga yoki uning vakiliga bajariladi",
          "Uchinchi shaxs orqali bajarish odatda mumkin",
          "Muddat ko'rsatilmasa kreditor talab qilishi va oqilona vaqt berilishi kerak",
          "Muddatidan ilgari bajarish har doim ruxsat etilmaydi",
        ],
        warning:
          "To'lovni noto'g'ri shaxsga o'tkazish " +
          "sizni majburiyatdan ozod qilmaydi. " +
          "Rekvizitlarni har doim shartnomadan " +
          "tekshirib, o'zgarishni yozma " +
          "tasdiq bilan qabul qiling.",
        lawRefs: [
          { code: "FK", article: "240" },
          { code: "FK", article: "241" },
          { code: "FK", article: "242" },
          { code: "FK", article: "243" },
        ],
      },
      {
        heading: "Bajarilganini tasdiqlash",
        text:
          "Bu dars bo'limi amalda eng ko'p pul " +
          "tejaydigan qismlardan biri, chunki " +
          "nizolarning katta qismi «to'landimi " +
          "yoki yo'qmi» degan savolga borib " +
          "taqaladi.\n\n" +
          "Qonun kreditorga majburiyat " +
          "bajarilganini tasdiqlash " +
          "majburiyatini yuklaydi: kreditor " +
          "tilxat berishdan yoki qarz " +
          "hujjatini qaytarishdan bosh " +
          "tortsa, qarzdor uchun huquqiy " +
          "oqibatlar nazarda tutilgan.\n\n" +
          "Amaliy tarjimasi: siz to'lov " +
          "qilganingizda tasdiq olishga " +
          "HAQLISIZ, bu iltimos emas. " +
          "Kreditor tasdiq bermasa, siz " +
          "bajarishni to'xtatib turishga " +
          "haqli bo'lishingiz mumkin.\n\n" +
          "Tasdiqning uch shakli eng " +
          "ishonchli: tilxat (kim, kimga, " +
          "qancha, qachon, nima uchun " +
          "yozilgan), bank hujjati (to'lov " +
          "maqsadi ko'rsatilgan holda) va " +
          "qarz hujjatining qaytarilishi.\n\n" +
          "Eng ko'p uchraydigan xato — " +
          "to'lov maqsadini yozmaslik. " +
          "«O'tkazma qildim» degan bank " +
          "chiqindisi o'zi qaysi majburiyat " +
          "bo'yicha to'langanini " +
          "ko'rsatmaydi, shu sababli " +
          "qarshi tomon uni boshqa qarzga " +
          "hisoblab qo'yishi mumkin.",
        example:
          "Qarzdor bir necha shartnoma " +
          "bo'yicha qarzdor edi va to'lovni " +
          "maqsadini ko'rsatmasdan " +
          "o'tkazdi. Kreditor to'lovni eng " +
          "eski qarzga hisobladi, qarzdor " +
          "esa yangisi uchun to'lagan deb " +
          "hisoblardi. Natijada penya " +
          "hisobi bo'yicha nizo chiqdi — " +
          "to'lov maqsadini bir qatorda " +
          "yozish bu muammoni bartaraf " +
          "etardi.",
        keyPoints: [
          "Majburiyat bajarilganini tasdiqlash — qarzdorning HUQUQI",
          "Kreditor tasdiq berishdan bosh tortsa huquqiy oqibatlar yuzaga keladi",
          "Ishonchli tasdiq shakllari: tilxat, bank hujjati, qarz hujjatining qaytarilishi",
          "To'lov MAQSADINI yozmaslik ko'p nizo keltiradi",
        ],
        warning:
          "«Tanish odam, tilxat so'rash " +
          "noqulay» degan fikr eng qimmat " +
          "xatolardan biri. Tilxat " +
          "ishonchsizlik belgisi emas — " +
          "u ikki tomonni ham himoya " +
          "qiladi.",
        lawRefs: [{ code: "FK", article: "258" }],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     6. Majburiyat ta'minoti
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "shartnoma-taminot",
    category: "contracts",
    level: "advanced",
    order: 3060,
    title: "Majburiyat ta'minoti: neustoyka, garov, kafillik",
    desc:
      "Majburiyat bajarilishini qanday kafolatlash mumkin: " +
      "penya va jarima, garov, kafillik, zakalat, ushlab qolish.",
    objectives: [
      "Ta'minot usullarining barchasini sanab bera olasiz",
      "Neustoyka (jarima va penya) qanday ishlashini bilasiz",
      "Garov shartnomasi talablarini bilasiz",
      "Zakalat va avansning farqini tushunasiz",
    ],
    practicalSteps: [
      "Katta summali shartnomada ta'minot usulini oldindan kelishib oling",
      "Neustoyka to'g'risidagi kelishuvni ALBATTA yozma shaklda tuzing",
      "Garovni rasmiylashtirishda shartnoma shakli va ro'yxatga olish talabini bajaring",
      "Oldindan to'lov berayotganda uning zakalat yoki avans ekanini hujjatda aniq yozing",
    ],
    sections: [
      {
        heading: "Ta'minot usullari va neustoyka",
        text:
          "Majburiyatning bajarilishi bir necha " +
          "usul bilan ta'minlanadi: neustoyka, " +
          "garov, qarzdorning mol-mulkini ushlab " +
          "qolish, kafillik, kafolat, zakalat va " +
          "qonunda yoki shartnomada nazarda " +
          "tutilgan boshqa usullar.\n\n" +
          "Ta'minotning maqsadi sodda: " +
          "majburiyatni buzish qarzdor uchun " +
          "foydasiz bo'lishini ta'minlash yoki " +
          "kreditorga qo'shimcha manba berish.\n\n" +
          "NEUSTOYKA — qonunchilik yoki " +
          "shartnoma bilan belgilangan, qarzdor " +
          "majburiyatni bajarmagan yoki lozim " +
          "darajada bajarmagan holda to'lashi " +
          "kerak bo'lgan pul summasi.\n\n" +
          "Neustoyka ikki shaklda bo'ladi: " +
          "JARIMA (bir martalik summa yoki " +
          "foiz) va PENYA (kechikkan har bir " +
          "davr uchun hisoblanadigan summa).\n\n" +
          "Muhim shakl talabi: neustoyka " +
          "to'g'risidagi kelishuv YOZMA " +
          "shaklda tuzilishi kerak. Og'zaki " +
          "kelishuv ishlamaydi.\n\n" +
          "Neustoyka qonuniy ham bo'lishi " +
          "mumkin: ayrim hollarda kreditor uni " +
          "talab qilishga haqli, taraflar " +
          "kelishuvida ko'rsatilgan-ko'rsatilmaganidan " +
          "qat'i nazar.",
        example:
          "Shartnomada «kechikkan har bir kun " +
          "uchun penya» belgilandi va bu yozma " +
          "qayd etildi. Kechikish yuz " +
          "berganda kreditor zararni " +
          "isbotlamasdan penyani talab qila " +
          "oladi — bu neustoykaning asosiy " +
          "afzalligi. Zararni isbotlash esa " +
          "ancha qiyin ish.",
        keyPoints: [
          "Ta'minot usullari: neustoyka, garov, ushlab qolish, kafillik, kafolat, zakalat",
          "Neustoyka ikki shaklda: jarima (bir martalik) va penya (davriy)",
          "Neustoyka kelishuvi YOZMA bo'lishi shart",
          "Neustoyka talab qilish uchun zararni isbotlash shart emas",
        ],
        warning:
          "Juda katta neustoyka belgilash ham " +
          "xavfli: agar u buzilish " +
          "oqibatlariga nomutanosib bo'lsa, " +
          "sud uni kamaytirishi mumkin.",
        lawRefs: [
          { code: "FK", article: "259" },
          { code: "FK", article: "260" },
          { code: "FK", article: "261" },
          { code: "FK", article: "262" },
          { code: "FK", article: "263" },
        ],
      },
      {
        heading: "Garov: eng kuchli ta'minot",
        text:
          "Garov — ta'minotning eng ishonchli " +
          "shakli, chunki u kreditorga aniq " +
          "mol-mulkka nisbatan huquq beradi.\n\n" +
          "Mohiyati: majburiyat bajarilmasa, " +
          "kreditor garovga qo'yilgan " +
          "mol-mulkka undiruv qaratilishini " +
          "talab qilishi mumkin.\n\n" +
          "Garovga qo'yuvchi qarzdorning o'zi " +
          "ham, uchinchi shaxs ham bo'lishi " +
          "mumkin. Muhim shart: ashyoning " +
          "mulkdori ashyoni garovga qo'yishga " +
          "haqli — ya'ni o'zganing mulkini " +
          "garovga qo'yish mumkin emas.\n\n" +
          "Garov to'g'risidagi shartnomada " +
          "garov narsasi, uning bahosi, " +
          "ta'minlanadigan majburiyatning " +
          "mohiyati va miqdori ko'rsatilishi " +
          "kerak. Shakl va ro'yxatga olish " +
          "talablari ham belgilangan.\n\n" +
          "Garovning muhim xususiyati — u " +
          "mol-mulkka «yopishib» qoladi: " +
          "garovga qo'yilgan mol-mulkka " +
          "mulk huquqi boshqa shaxsga " +
          "o'tganida garov SAQLANADI.\n\n" +
          "Bu xaridorlar uchun jiddiy " +
          "ogohlantirish: garovda turgan " +
          "mol-mulkni sotib olsangiz, " +
          "garov bilan birga olasiz.\n\n" +
          "Lombardda garov — alohida tur: " +
          "fuqarolardan shaxsiy iste'molga " +
          "mo'ljallangan ko'char mol-mulkni " +
          "qisqa muddatli qarz ta'minoti " +
          "sifatida qabul qilish.",
        example:
          "Xaridor avtomobil sotib oldi, " +
          "lekin u bank garovida ekanini " +
          "tekshirmadi. Qarz to'lanmasa, " +
          "bank undiruvni shu avtomobilga " +
          "qaratishi mumkin — xaridor " +
          "vijdonli bo'lsa ham garov " +
          "saqlanadi. Shuning uchun xariddan " +
          "oldin garov holatini tekshirish " +
          "shart.",
        keyPoints: [
          "Garov kreditorga aniq mol-mulkka nisbatan huquq beradi",
          "Faqat mulkdor o'z ashyosini garovga qo'yishi mumkin",
          "Garov shartnomasida narsa, baho va majburiyat ko'rsatiladi",
          "Mulk huquqi o'tganda GAROV SAQLANADI — xaridor uchun katta xavf",
        ],
        warning:
          "Ko'chmas mulk yoki avtomobil " +
          "sotib olishdan oldin garov va " +
          "cheklovlarni tekshirmaslik eng " +
          "qimmat xatolardan biri. " +
          "Tekshirish arzon, natijasi esa " +
          "hal qiluvchi.",
        lawRefs: [
          { code: "FK", article: "266" },
          { code: "FK", article: "271" },
          { code: "FK", article: "284" },
          { code: "FK", article: "289" },
        ],
      },
      {
        heading: "Zakalat, kafillik va ushlab qolish",
        text:
          "ZAKALAT — shartnoma tuzayotgan " +
          "taraflardan biri shartnoma " +
          "tuzilganligini isbotlash va uning " +
          "bajarilishini ta'minlash uchun " +
          "beradigan pul summasi.\n\n" +
          "Zakalatning avansdan farqi hal " +
          "qiluvchi va u ko'p nizo " +
          "keltiradi. AVANS — shunchaki " +
          "oldindan to'lov: shartnoma " +
          "bajarilmasa qaytariladi. ZAKALAT " +
          "esa ta'minot funksiyasini " +
          "bajaradi va shartnomani buzgan " +
          "tomon uchun salbiy oqibat " +
          "keltiradi.\n\n" +
          "Shu sababli hujjatda to'lov " +
          "TURINI aniq yozish kerak. " +
          "«Oldindan to'lov» deb yozilsa, u " +
          "avans deb talqin qilinishi " +
          "mumkin.\n\n" +
          "KAFILLIK va KAFOLAT — uchinchi " +
          "shaxs majburiyat bajarilishi " +
          "uchun javob berishni o'z " +
          "zimmasiga oladi. Kreditor " +
          "uchun bu qo'shimcha manba: " +
          "qarzdorda pul bo'lmasa, kafil " +
          "javob beradi.\n\n" +
          "Kafilning to'lagan summasini " +
          "asosiy qarzdordan regress " +
          "tartibida talab qilish huquqi " +
          "bor — ya'ni u tekin to'lamaydi.\n\n" +
          "USHLAB QOLISH — kreditor " +
          "qarzdorning ixtiyoridagi " +
          "ashyoni majburiyat " +
          "bajarilmaguncha ushlab turishi. " +
          "Masalan pudratchining " +
          "buyurtmachi mol-mulkini ushlab " +
          "qolish huquqi.",
        example:
          "Uy sotib olishda xaridor " +
          "«zakalat» deb pul berdi, " +
          "keyin xaridni bekor qildi. " +
          "Hujjatda to'lov turi aniq " +
          "yozilgan bo'lsa, oqibat " +
          "zakalat qoidalari bo'yicha " +
          "hal qiladi. «Oldindan to'lov» " +
          "deb yozilgan bo'lsa, xaridor " +
          "pulni qaytarib olish uchun " +
          "kuchliroq asosga ega bo'ladi.",
        keyPoints: [
          "Zakalat ta'minot funksiyasini bajaradi, avans esa shunchaki oldindan to'lov",
          "Hujjatda to'lov TURINI aniq yozish kerak",
          "Kafil qarzdor o'rniga javob beradi va keyin regress talabiga ega",
          "Ushlab qolish — kreditorning qarzdor ashyosini ushlab turish huquqi",
        ],
        warning:
          "Kafil bo'lishga rozilik berish " +
          "juda jiddiy qadam: siz " +
          "boshqaning qarzi uchun o'z " +
          "mol-mulkingiz bilan javob " +
          "berishga rozilik bildirasiz. " +
          "Shartlarni to'liq o'qing.",
        lawRefs: [
          { code: "FK", article: "311" },
          { code: "FK", article: "310" },
          { code: "FK", article: "259" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     7. Shartnoma buzilishi
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "shartnoma-buzilishi",
    category: "contracts",
    level: "mid",
    order: 3070,
    title: "Shartnoma buzilganda: javobgarlik, o'zgartirish, bekor qilish",
    desc:
      "Majburiyat buzilganda javobgarlik asoslari, neustoyka va " +
      "zarar nisbati, shartnomani o'zgartirish va bekor qilish tartibi.",
    objectives: [
      "Majburiyatni buzganlik uchun javobgarlik asoslarini bilasiz",
      "Neustoyka va zarar qanday nisbatda undirilishini tushunasiz",
      "Shartnomani bekor qilish asoslarini va tartibini bilasiz",
      "Vaziyat jiddiy o'zgarganda nima qilish mumkinligini bilasiz",
    ],
    practicalSteps: [
      "Buzilish yuz berganda darhol yozma da'vo (pretenziya) yuboring va nusxasini saqlang",
      "Zararni hisoblab, hujjatlar bilan asoslang: taxminiy raqam sudda ishlamaydi",
      "Shartnomani bekor qilishni bir tomonlama e'lon qilmang — tartibga rioya qiling",
      "Bekor qilish to'g'risidagi kelishuvni shartnoma tuzilgan shaklda rasmiylashtiring",
    ],
    sections: [
      {
        heading: "Buzganlik uchun javobgarlik",
        text:
          "Umumiy qoida: qarzdor aybi bo'lgan " +
          "taqdirda majburiyatni bajarmaganligi " +
          "yoki lozim darajada bajarmaganligi " +
          "uchun javobgar bo'ladi.\n\n" +
          "Fuqarolik huquqidagi muhim xususiyat — " +
          "aybsizlikni ISBOTLASH YUKI qarzdorda. " +
          "Ya'ni kreditor aybni isbotlashi shart " +
          "emas; qarzdor o'zining aybsizligini " +
          "ko'rsatishi kerak.\n\n" +
          "Tadbirkorlik faoliyatida javobgarlik " +
          "qattiqroq: ayrim hollarda tadbirkor " +
          "aybi bo'lmasa ham javob beradi va " +
          "faqat yengib bo'lmaydigan kuch " +
          "javobgarlikdan ozod qiladi.\n\n" +
          "Alohida qoida pul majburiyatlariga " +
          "tegishli: boshqa shaxslarning pul " +
          "mablag'larini g'ayriqonuniy ushlab " +
          "qolish uchun javobgarlik nazarda " +
          "tutilgan. Ya'ni pulni kechiktirib " +
          "to'lash o'zi alohida javobgarlik " +
          "asosidir.\n\n" +
          "Yana bir foydali mexanizm: " +
          "majburiyatni qarzdor hisobidan " +
          "bajarish. Qarzdor ish bajarmasa, " +
          "kreditor uni boshqa shaxsga " +
          "bajartirib, xarajatni qarzdordan " +
          "undirishi mumkin.",
        example:
          "Pudratchi ishni bajarmadi va " +
          "muddat o'tdi. Buyurtmachi boshqa " +
          "ustani chaqirib ishni bajartirdi. " +
          "U sarflagan qo'shimcha xarajatni " +
          "birinchi pudratchidan undirishi " +
          "mumkin — lekin buning uchun " +
          "xarajat hujjatlari va " +
          "kechikish dalili kerak.",
        keyPoints: [
          "Aybsizlikni ISBOTLASH YUKI qarzdorda",
          "Tadbirkorlik faoliyatida javobgarlik qattiqroq bo'lishi mumkin",
          "Pulni g'ayriqonuniy ushlab qolish alohida javobgarlik asosi",
          "Kreditor majburiyatni qarzdor hisobidan bajartirishi mumkin",
        ],
        warning:
          "Boshqa ijrochini chaqirishdan " +
          "oldin buzilishni YOZMA qayd " +
          "eting va qarzdorga muhlat " +
          "bering. Aks holda u «menga " +
          "imkon bermadingiz» degan " +
          "e'tirozni qo'yadi.",
        lawRefs: [
          { code: "FK", article: "333" },
          { code: "FK", article: "327" },
          { code: "FK", article: "328" },
        ],
      },
      {
        heading: "Neustoyka va zarar: qanday nisbatda",
        text:
          "Bu savol amalda ko'p chalkashtiriladi: " +
          "penyani ham, zararni ham to'liq " +
          "olish mumkinmi?\n\n" +
          "Qonun neustoyka va zarar nisbatini " +
          "belgilaydi. Umumiy holatda " +
          "neustoyka to'langanida zarar " +
          "uning qoplanmagan qismida " +
          "undiriladi — ya'ni ikkisi " +
          "to'liq qo'shilmaydi.\n\n" +
          "Shartnomada boshqacha tartib " +
          "belgilanishi mumkin va bu " +
          "muhim imkoniyat: taraflar " +
          "neustoyka zarardan mustaqil " +
          "undirilishini kelishib olishi " +
          "mumkin.\n\n" +
          "Ikkinchi muhim qoida — " +
          "NEUSTOYKANI KAMAYTIRISH. Agar " +
          "to'lanishi lozim bo'lgan " +
          "neustoyka kreditorning " +
          "majburiyatini buzish " +
          "oqibatlariga nomutanosib " +
          "bo'lsa, sud uni kamaytirishi " +
          "mumkin.\n\n" +
          "Bu ikki tomon uchun ham " +
          "muhim. Qarzdor uchun — " +
          "kamaytirishni so'rash " +
          "imkoniyati bor. Kreditor " +
          "uchun — juda katta penya " +
          "belgilash kafolat bermaydi, " +
          "shuning uchun oqilona " +
          "miqdor tanlash amaliyroq.\n\n" +
          "Zarar hajmi bo'yicha umumiy " +
          "tamoyil o'zgarmaydi: " +
          "haqiqiy zarar va boy " +
          "berilgan foyda qoplanadi, " +
          "lekin ikkalasi ham " +
          "isbotlanishi kerak.",
        example:
          "Shartnomada juda yuqori kunlik " +
          "penya belgilangan va kechikish " +
          "uzoq davom etgani uchun penya " +
          "asosiy summadan bir necha " +
          "barobar oshib ketdi. Sud " +
          "bunday holatda penyani " +
          "kamaytirishi mumkin — " +
          "nomutanosiblik aniq " +
          "ko'rinadi.",
        keyPoints: [
          "Umumiy holatda zarar neustoykaning qoplanmagan qismida undiriladi",
          "Shartnomada boshqacha nisbat belgilanishi mumkin",
          "Nomutanosib neustoykani sud kamaytirishi mumkin",
          "Zarar (haqiqiy va boy berilgan foyda) isbotlanishi kerak",
        ],
        warning:
          "Penyani hisoblab, uni " +
          "hujjatda ko'rsatmasdan " +
          "«umumiy summa» sifatida " +
          "talab qilmang. Hisob-kitobni " +
          "ochiq ko'rsatish da'voni " +
          "ancha kuchli qiladi.",
        lawRefs: [
          { code: "FK", article: "325" },
          { code: "FK", article: "326" },
          { code: "FK", article: "14" },
        ],
      },
      {
        heading: "Shartnomani o'zgartirish va bekor qilish",
        text:
          "Asosiy qoida: shartnoma taraflar " +
          "kelishuvi bilan o'zgartiriladi " +
          "yoki bekor qilinadi. Bir " +
          "tomonlama bekor qilish faqat " +
          "qonunda yoki shartnomada " +
          "nazarda tutilgan hollarda " +
          "mumkin.\n\n" +
          "Sud tartibida bekor qilish " +
          "asosi — bir tomonning " +
          "shartnomani JIDDIY buzishi. " +
          "«Jiddiy» degani muhim: kichik " +
          "kamchilik bekor qilish uchun " +
          "yetarli emas.\n\n" +
          "Alohida institut — VAZIYAT " +
          "JIDDIY O'ZGARISHI. Shartnoma " +
          "tuzishda taraflar hisobga " +
          "olmagan holatlar shunday " +
          "o'zgargan bo'lsa, shartnomani " +
          "o'zgartirish yoki bekor " +
          "qilish mumkin. Bu istisno " +
          "mexanizm va uning shartlari " +
          "qat'iy — bozor narxining " +
          "oddiy o'zgarishi bu asosga " +
          "kirmaydi.\n\n" +
          "SHAKL TALABI juda muhim va " +
          "tez-tez buziladi: shartnoma " +
          "qanday shaklda tuzilgan " +
          "bo'lsa, uni o'zgartirish " +
          "yoki bekor qilish ham SHU " +
          "SHAKLDA amalga oshiriladi. " +
          "Ya'ni notarial shartnomani " +
          "oddiy xat bilan bekor " +
          "qilish ishlamaydi.\n\n" +
          "Oqibatlari: shartnoma " +
          "o'zgartirilganda " +
          "majburiyatlar o'zgargan " +
          "shaklda davom etadi, bekor " +
          "qilinganda esa " +
          "majburiyatlar tugaydi.",
        example:
          "Ijara shartnomasi notarial " +
          "tuzilgan edi, tomonlar esa " +
          "uni telefon orqali " +
          "«bekor qildik» deb " +
          "hisobladi. Huquqiy jihatdan " +
          "shartnoma kuchda qoldi va " +
          "ijara haqi hisoblanishda " +
          "davom etdi. Shakl talabini " +
          "bajarmaslik aynan shunday " +
          "yo'qotish keltiradi.",
        keyPoints: [
          "Asosiy yo'l — taraflar kelishuvi bilan o'zgartirish yoki bekor qilish",
          "Sud tartibida bekor qilish uchun buzilish JIDDIY bo'lishi kerak",
          "Vaziyat jiddiy o'zgarishi — istisno mexanizm, shartlari qat'iy",
          "O'zgartirish va bekor qilish shartnoma tuzilgan SHAKLDA amalga oshiriladi",
        ],
        warning:
          "Shartnomani «bajarishni " +
          "to'xtatib» amalda bekor " +
          "qilishga urinish xavfli: " +
          "rasmiy bekor qilish " +
          "bo'lmasa, siz buzgan tomon " +
          "hisoblanasiz va penya " +
          "hisoblanishda davom etadi.",
        lawRefs: [
          { code: "FK", article: "382" },
          { code: "FK", article: "383" },
          { code: "FK", article: "384" },
          { code: "FK", article: "385" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     8. Oldi-sotdi
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "oldi-sotdi",
    category: "contracts",
    level: "basic",
    order: 3080,
    title: "Oldi-sotdi shartnomasi",
    desc:
      "Tovar sotish va sotib olish: sotuvchi majburiyatlari, " +
      "tovar sifati, nuqson topilganda xabardor qilish, chakana savdo.",
    objectives: [
      "Oldi-sotdi shartnomasining mohiyatini va tomonlar majburiyatlarini bilasiz",
      "Tovar sifati bo'yicha talablarni bilasiz",
      "Nuqson topilganda qanday harakat qilish kerakligini bilasiz",
      "Chakana oldi-sotdining o'ziga xos xususiyatlarini bilasiz",
    ],
    practicalSteps: [
      "Qimmatbaho tovar sotib olganda shartnoma yoki chekni saqlab qo'ying",
      "Tovarni qabul qilishda tekshiring: keyin yashirin bo'lmagan nuqson uchun talab qo'yish qiyinlashadi",
      "Nuqson topilsa sotuvchini DARHOL va YOZMA xabardor qiling",
      "Talabingizni aniq shakllantiring: almashtirish, tuzatish, narxni kamaytirish yoki qaytarish",
    ],
    sections: [
      {
        heading: "Oldi-sotdi: mohiyati va majburiyatlar",
        text:
          "Oldi-sotdi shartnomasi bo'yicha bir " +
          "taraf (sotuvchi) tovarni boshqa " +
          "tarafning (sotib oluvchining) mulk " +
          "huquqiga o'tkazish majburiyatini " +
          "oladi, sotib oluvchi esa tovarni " +
          "qabul qilib, uning uchun belgilangan " +
          "pul summasini to'lash majburiyatini " +
          "oladi.\n\n" +
          "Bu eng ko'p tarqalgan shartnoma turi " +
          "va uning tuzilishi soddaligi bilan " +
          "aldamchi: nizolar ko'pincha " +
          "tafsilotlarda tug'iladi.\n\n" +
          "Sotuvchining asosiy majburiyatlari: " +
          "tovarni topshirish, uni belgilangan " +
          "sifatda va miqdorda berish, " +
          "uchinchi shaxslarning huquqlaridan " +
          "xoli tovar topshirish.\n\n" +
          "Oxirgi majburiyat ko'pincha " +
          "e'tibordan chetda qoladi va " +
          "eng jiddiy muammolarni keltiradi: " +
          "tovar garovda, hibsda yoki " +
          "boshqa shaxs huquqi ostida " +
          "bo'lsa, sotuvchi bu haqda " +
          "xabardor qilishi kerak.\n\n" +
          "Sotib oluvchining majburiyatlari: " +
          "tovarni qabul qilish va haq " +
          "to'lash. Qabul qilish ham " +
          "majburiyat ekanini yodda tutish " +
          "kerak — asossiz qabul qilmaslik " +
          "buzilish hisoblanadi.\n\n" +
          "Mulk huquqi o'tishi payti " +
          "alohida masala: umumiy qoida " +
          "bo'yicha topshirish paytida, " +
          "ko'chmas mulkda esa ro'yxatga " +
          "olish bilan.",
        example:
          "Xaridor avtomobil sotib oldi, " +
          "keyin unga hibs qo'yilgani " +
          "aniqlandi. Sotuvchi tovarni " +
          "uchinchi shaxslar huquqlaridan " +
          "xoli topshirish majburiyatini " +
          "buzgan — bu xaridor uchun " +
          "shartnomani bekor qilish yoki " +
          "zararni qoplashni talab qilish " +
          "asosi bo'ladi.",
        keyPoints: [
          "Sotuvchi tovarni mulk huquqiga o'tkazadi, xaridor qabul qilib to'laydi",
          "Tovar uchinchi shaxslar huquqlaridan XOLI bo'lishi kerak",
          "Tovarni qabul qilish ham xaridorning majburiyati",
          "Mulk huquqi odatda topshirishda, ko'chmas mulkda ro'yxatga olishda o'tadi",
        ],
        warning:
          "Ko'chmas mulk yoki avtomobil " +
          "xaridida garov, hibs va " +
          "cheklovlarni tekshirmaslik — " +
          "eng qimmat xato. Tekshirish " +
          "shartnomadan OLDIN qilinadi.",
        lawRefs: [
          { code: "FK2", article: "386" },
          { code: "FK", article: "185" },
        ],
      },
      {
        heading: "Tovar sifati va nuqson topilganda",
        text:
          "Tovar sifati shartnomada " +
          "belgilangan talablarga muvofiq " +
          "bo'lishi kerak. Shartnomada " +
          "sifat shartlari ko'rsatilmagan " +
          "bo'lsa, tovar odatda shu " +
          "maqsadda ishlatiladigan " +
          "tovarga qo'yiladigan " +
          "talablarga javob berishi " +
          "kerak.\n\n" +
          "Nuqson topilganda ENG MUHIM " +
          "qadam — XABARDOR QILISH. " +
          "Qonun sotib oluvchiga " +
          "shartnoma tegishli darajada " +
          "bajarilmagani haqida " +
          "sotuvchini xabardor qilish " +
          "majburiyatini yuklaydi.\n\n" +
          "Bu majburiyatni bajarmaslik " +
          "jiddiy oqibat keltiradi: " +
          "sotuvchi keyinchalik " +
          "xaridorning talablarini " +
          "to'liq yoki qisman rad " +
          "etish uchun asosga ega " +
          "bo'lishi mumkin.\n\n" +
          "Amaliy xulosa: nuqson " +
          "topilganda «keyin " +
          "aytaman» degan yo'l " +
          "huquqni yo'qotadi. Xabar " +
          "yozma bo'lishi va sanasi " +
          "qayd etilishi kerak.\n\n" +
          "Xabardor qilishdan keyin " +
          "talab turini tanlash " +
          "kerak: kamchilikni tekin " +
          "tuzatish, narxni " +
          "kamaytirish, tovarni " +
          "almashtirish yoki " +
          "shartnomani bekor qilib " +
          "pulni qaytarish.\n\n" +
          "Tanlov erkin emas: ayrim " +
          "talablar faqat jiddiy " +
          "nuqson bo'lganda " +
          "qo'yiladi.",
        example:
          "Xaridor uskunani oldi, bir " +
          "hafta ishlatdi va nuqsonni " +
          "aniqladi, lekin sotuvchiga " +
          "faqat bir necha oydan keyin " +
          "aytdi. Sotuvchi «nuqson " +
          "ishlatish natijasida yuzaga " +
          "kelgan» deb e'tiroz " +
          "bildirishi mumkin — " +
          "kechikish xaridorning " +
          "holatini zaiflashtiradi.",
        keyPoints: [
          "Sifat shartnomaga, ko'rsatilmasa odatdagi talablarga muvofiq bo'ladi",
          "Nuqson topilganda sotuvchini XABARDOR QILISH majburiyati bor",
          "Xabardor qilmaslik talab qo'yish imkoniyatini cheklaydi",
          "Talab turlari: tuzatish, narxni kamaytirish, almashtirish, bekor qilish",
        ],
        warning:
          "Nuqsonni o'zingiz tuzatib, " +
          "keyin xarajatni talab " +
          "qilish har doim ishlamaydi. " +
          "Avval sotuvchiga " +
          "xabar berib, unga " +
          "imkoniyat berish " +
          "to'g'riroq yo'l.",
        lawRefs: [
          { code: "FK2", article: "416" },
          { code: "FK2", article: "425" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     9. Ijara (mulk yollash)
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "ijara-shartnoma",
    category: "contracts",
    level: "mid",
    order: 3090,
    title: "Ijara shartnomasi (mulk yollash)",
    desc:
      "Mol-mulkni ijaraga berish va olish: kim ijaraga bera oladi, " +
      "ta'mirlash kimning zimmasida, muddatidan oldin bekor qilish.",
    objectives: [
      "Ijara shartnomasining tomonlari va asosiy majburiyatlarini bilasiz",
      "Joriy va kapital ta'mirlash kimning zimmasida ekanini bilasiz",
      "Muddatidan oldin bekor qilish asoslarini bilasiz",
      "Yaxshilash xarajatlarini qoplash masalasini tushunasiz",
    ],
    practicalSteps: [
      "Ijaraga olishdan oldin ijaraga beruvchining mulk huquqini tekshiring",
      "Topshirish dalolatnomasini tuzing: mol-mulk holatini yozib, surat oling",
      "Shartnomada ta'mirlash majburiyatini kim ko'tarishini aniq yozing",
      "Yaxshilash ishlarini ijaraga beruvchining YOZMA roziligi bilan bajaring",
    ],
    sections: [
      {
        heading: "Kim ijaraga bera oladi va nima topshiriladi",
        text:
          "Ijara (mulk yollash) shartnomasi " +
          "bo'yicha ijaraga beruvchi " +
          "mol-mulkni ijaraga oluvchiga " +
          "haq to'lash asosida vaqtincha " +
          "egalik qilish va foydalanishga " +
          "topshiradi.\n\n" +
          "Birinchi va eng muhim savol: " +
          "kim ijaraga berishga haqli? " +
          "Qonun aniq javob beradi — " +
          "mol-mulkni ijaraga berish " +
          "huquqi shu mol-mulk EGASIGA " +
          "tegishli. Qonun yoki mulkdor " +
          "vakolat bergan shaxslar ham " +
          "ijaraga berishi mumkin.\n\n" +
          "Amaliy xulosa: ijaraga " +
          "olayotganda mulk hujjatini " +
          "so'rash to'liq o'rinli. Aks " +
          "holda haqiqiy mulkdor paydo " +
          "bo'lib, sizni chiqarib " +
          "yuborishi mumkin.\n\n" +
          "Ijaraga beruvchi mol-mulkni " +
          "shartnoma shartlariga va " +
          "mol-mulkning tayinlanishiga " +
          "muvofiq holatda topshirishi " +
          "kerak. Topshirilgan " +
          "mol-mulkdagi kamchiliklar " +
          "uchun u javobgar bo'ladi.\n\n" +
          "Muhim qoida: mol-mulkning " +
          "ijaraga topshirilishi " +
          "uchinchi shaxslarning shu " +
          "mol-mulkka bo'lgan " +
          "huquqlarini bekor qilmaydi. " +
          "Ya'ni garov yoki boshqa " +
          "huquqlar saqlanadi.\n\n" +
          "Ijaraga oluvchi mol-mulkdan " +
          "olinadigan mahsulot, meva va " +
          "daromadlarga mulk huquqiga " +
          "ega bo'ladi (agar shartnomada " +
          "boshqacha belgilanmagan " +
          "bo'lsa).",
        example:
          "Shaxs kvartirani ijaraga " +
          "oldi, keyin ma'lum bo'ldiki " +
          "ijaraga bergan odam faqat " +
          "qarindoshi bo'lib, mulkdor " +
          "emas edi. Haqiqiy mulkdor " +
          "shartnomani tan olmasa, " +
          "ijarachi og'ir holatda " +
          "qoladi — shuning uchun " +
          "hujjat tekshirish shart.",
        keyPoints: [
          "Ijaraga berish huquqi mol-mulk EGASIGA tegishli",
          "Ijaraga beruvchi mol-mulkdagi kamchiliklar uchun javobgar",
          "Ijaraga berish uchinchi shaxslar huquqlarini bekor qilmaydi",
          "Mol-mulkdan olingan daromad odatda ijaraga oluvchiga tegishli",
        ],
        warning:
          "Topshirish dalolatnomasi " +
          "tuzilmasa, chiqishda " +
          "«mol-mulkni buzdingiz» " +
          "degan da'voga qarshi " +
          "himoyangiz bo'lmaydi. " +
          "Suratlar va yozma tavsif " +
          "juda foydali.",
        lawRefs: [
          { code: "FK2", article: "538" },
          { code: "FK2", article: "541" },
          { code: "FK2", article: "542" },
          { code: "FK2", article: "543" },
          { code: "FK2", article: "536" },
        ],
      },
      {
        heading: "Foydalanish, ta'mirlash va yaxshilash",
        text:
          "Ijaraga oluvchi mol-mulkdan " +
          "shartnoma shartlariga muvofiq " +
          "foydalanishi kerak; shartlar " +
          "ko'rsatilmagan bo'lsa — " +
          "mol-mulkning tayinlanishiga " +
          "muvofiq.\n\n" +
          "Ta'mirlash majburiyati " +
          "taqsimoti amalda eng ko'p " +
          "nizo keltiradigan masala. " +
          "Qonun bu majburiyatni " +
          "ijaraga beruvchi va ijaraga " +
          "oluvchi o'rtasida taqsimlaydi " +
          "va shartnomada boshqacha " +
          "belgilash imkonini beradi.\n\n" +
          "Shu sababli eng amaliy " +
          "maslahat: shartnomada " +
          "«kapital ta'mirlash kimda, " +
          "joriy ta'mirlash kimda» " +
          "degan bandni aniq yozish.\n\n" +
          "Ijaraga olingan mol-mulkni " +
          "TASARRUF QILISH masalasi " +
          "ham muhim: ijaraga oluvchi " +
          "mol-mulkni subijaraga " +
          "berish yoki huquqlarini " +
          "o'tkazish uchun odatda " +
          "ijaraga beruvchining " +
          "roziligi kerak.\n\n" +
          "YAXSHILASH bo'yicha qoida " +
          "muhim: ajratilishi mumkin " +
          "bo'lgan yaxshilashlar " +
          "ijaraga oluvchida qoladi. " +
          "Ajratilmaydigan " +
          "yaxshilashlar esa " +
          "xarajatlari faqat ijaraga " +
          "beruvchining roziligi " +
          "bo'lganda qoplanadi.\n\n" +
          "Amaliy natijasi juda " +
          "aniq: rozilik olmasdan " +
          "katta ta'mir qilsangiz, " +
          "xarajatni qaytarib olish " +
          "imkoniyati yo'qoladi.",
        example:
          "Ijarachi do'kon binosida " +
          "katta ta'mir qildi, " +
          "rozilikni yozma olmadi. " +
          "Shartnoma tugagach " +
          "xarajatni qaytarishni " +
          "so'radi, lekin ijaraga " +
          "beruvchi rad etdi. " +
          "Ajratilmaydigan " +
          "yaxshilash uchun rozilik " +
          "shart bo'lgani uchun " +
          "ijarachining holati " +
          "zaif bo'ldi.",
        keyPoints: [
          "Foydalanish shartnomaga yoki mol-mulk tayinlanishiga muvofiq bo'ladi",
          "Ta'mirlash majburiyatini shartnomada ANIQ taqsimlash kerak",
          "Subijara uchun odatda ijaraga beruvchining roziligi zarur",
          "Ajratilmaydigan yaxshilash xarajati faqat rozilik bo'lsa qoplanadi",
        ],
        warning:
          "«Og'zaki ruxsat berdi» " +
          "degan asos yaxshilash " +
          "xarajatini qoplash uchun " +
          "yetarli emas. Rozilikni " +
          "yozma olish — ta'mir " +
          "boshlashdan oldingi " +
          "birinchi qadam.",
        lawRefs: [
          { code: "FK2", article: "545" },
          { code: "FK2", article: "546" },
          { code: "FK2", article: "547" },
          { code: "FK2", article: "548" },
          { code: "FK2", article: "555" },
        ],
      },
      {
        heading: "Muddatidan oldin bekor qilish va sotib olish",
        text:
          "Ijara shartnomasi muddatidan " +
          "oldin bekor qilinishi mumkin, " +
          "lekin bu ikki tomon uchun " +
          "ham ASOSLI bo'lishi kerak.\n\n" +
          "Ijaraga beruvchining talabi " +
          "bo'yicha bekor qilish " +
          "asoslari qonunda sanalgan: " +
          "mol-mulkdan shartnoma " +
          "shartlarini buzib " +
          "foydalanish, mol-mulkni " +
          "yaroqsiz holga keltirish, " +
          "ijara haqini muntazam " +
          "to'lamaslik va shunga " +
          "o'xshash holatlar.\n\n" +
          "Ijaraga oluvchining talabi " +
          "bo'yicha bekor qilish " +
          "asoslari ham bor: ijaraga " +
          "beruvchi mol-mulkni " +
          "topshirmasa, foydalanishga " +
          "to'sqinlik qilsa, " +
          "mol-mulkda foydalanishga " +
          "imkon bermaydigan " +
          "kamchiliklar bo'lsa.\n\n" +
          "Muhim tafsilot: bekor " +
          "qilish odatda avval " +
          "OGOHLANTIRISHNI talab " +
          "qiladi. Ya'ni darhol " +
          "sudga borish emas, avval " +
          "buzilishni bartaraf etish " +
          "uchun muhlat berish.\n\n" +
          "Alohida imkoniyat — " +
          "ijaraga olingan mol-mulkni " +
          "SOTIB OLISH: shartnomada " +
          "ijara muddati tugagach " +
          "mol-mulk ijaraga " +
          "oluvchining mulkiga " +
          "o'tishi nazarda " +
          "tutilishi mumkin.\n\n" +
          "Bu band ijarachi uchun " +
          "juda qulay bo'lishi mumkin, " +
          "lekin u SHARTNOMADA " +
          "yozilishi kerak — " +
          "o'z-o'zidan yuzaga " +
          "kelmaydi.",
        example:
          "Ijaraga beruvchi ijara " +
          "haqi kechikkani uchun " +
          "shartnomani darhol bekor " +
          "qildi va ijarachini " +
          "chiqarib yubordi. " +
          "Ogohlantirish va muhlat " +
          "berilmagani uchun bu " +
          "harakat tartibga zid " +
          "bo'lishi mumkin — " +
          "ijarachi zararni " +
          "qoplashni talab qilishi " +
          "mumkin.",
        keyPoints: [
          "Bekor qilish asoslari ikki tomon uchun ham qonunda belgilangan",
          "Bekor qilishdan oldin odatda ogohlantirish va muhlat berish kerak",
          "Mol-mulkni ijara oxirida sotib olish sharti shartnomada yozilishi kerak",
          "Bir tomonlama o'zboshimchalik bilan chiqarib yuborish qonuniy emas",
        ],
        warning:
          "Ijarachini qulfni " +
          "almashtirib chiqarib " +
          "yuborish — o'zboshimchalik " +
          "va u ijaraga beruvchini " +
          "javobgar qilib qo'yishi " +
          "mumkin. Bekor qilish " +
          "tartibiga rioya qilish " +
          "arzonroq.",
        lawRefs: [
          { code: "FK2", article: "551" },
          { code: "FK2", article: "552" },
          { code: "FK2", article: "556" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     10. Pudrat
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "pudrat",
    category: "contracts",
    level: "mid",
    order: 3100,
    title: "Pudrat shartnomasi: qurilish va ta'mirlash",
    desc:
      "Ish bajarish bo'yicha shartnoma: smeta, muddat, " +
      "buyurtmachi nazorati, pudratchining ogohlantirish majburiyati.",
    objectives: [
      "Pudrat shartnomasining mohiyatini va xizmat ko'rsatishdan farqini bilasiz",
      "Smeta va tejam masalasini tushunasiz",
      "Buyurtmachining nazorat huquqini bilasiz",
      "Pudratchi qachon ogohlantirishi shartligini bilasiz",
    ],
    practicalSteps: [
      "Shartnomaga ishlar hajmini batafsil yozing yoki smeta ilova qiling",
      "Bosqichma-bosqich to'lov tartibini belgilang: butun summani oldindan bermang",
      "Ish jarayonini suratga oling va oraliq qabul dalolatnomalarini imzolang",
      "Pudratchi ogohlantirsa — javobni YOZMA bering, keyin javobgarlik masalasi shunga bog'lanadi",
    ],
    sections: [
      {
        heading: "Pudrat nima va u qanday ishlaydi",
        text:
          "Pudrat shartnomasi bo'yicha bir " +
          "taraf (pudratchi) ikkinchi " +
          "tarafning (buyurtmachining) " +
          "topshirig'iga binoan muayyan " +
          "ishni bajarish va uning " +
          "natijasini topshirish " +
          "majburiyatini oladi, buyurtmachi " +
          "esa ishni qabul qilib, haq " +
          "to'lash majburiyatini oladi.\n\n" +
          "Pudratning xizmat ko'rsatishdan " +
          "asosiy farqi — NATIJA. Pudratda " +
          "moddiy natija topshiriladi " +
          "(qurilgan bino, ta'mirlangan " +
          "uskuna, tayyorlangan ashyo). " +
          "Xizmat ko'rsatishda esa " +
          "jarayonning o'zi qadrli.\n\n" +
          "Bu farq amalda muhim: pudratda " +
          "«ishladim, lekin natija " +
          "chiqmadi» degan asos to'lov " +
          "uchun yetarli emas.\n\n" +
          "Pudrat shartnomasi ashyoni " +
          "tayyorlash yoki uni qayta " +
          "ishlash, shuningdek boshqa " +
          "ishlarni bajarish uchun " +
          "tuziladi.\n\n" +
          "Baho va smeta masalasi " +
          "alohida e'tiborga loyiq. " +
          "Pudratchining amaldagi " +
          "xarajatlari smeta " +
          "tuzilayotgandagi hisobdan " +
          "kam bo'lsa, TEJAM masalasi " +
          "yuzaga keladi va qonun uning " +
          "kimga tegishli ekanini " +
          "belgilaydi.\n\n" +
          "Pudratchida ushlab qolish " +
          "huquqi ham bor: buyurtmachi " +
          "haq to'lamasa, pudratchi " +
          "ish natijasini yoki " +
          "buyurtmachining mol-mulkini " +
          "ushlab turishi mumkin.",
        example:
          "Ta'mir uchun shartnoma " +
          "tuzildi, lekin ishlar " +
          "ro'yxati yozilmadi. " +
          "Pudratchi devorni bo'yadi, " +
          "buyurtmachi esa elektr " +
          "ishlari ham kirishini " +
          "kutgan edi. Smeta " +
          "ilova qilinganida bu nizo " +
          "umuman bo'lmasdi.",
        keyPoints: [
          "Pudratda NATIJA topshiriladi, xizmat ko'rsatishda jarayon qadrli",
          "Ishlar hajmini shartnomada yoki smetada aniq belgilash kerak",
          "Tejam masalasi qonunda tartibga solingan",
          "Pudratchida haq to'lanmaganda ushlab qolish huquqi bor",
        ],
        warning:
          "Butun summani oldindan " +
          "to'lash pudratda eng katta " +
          "xavf: to'lovdan keyin " +
          "buyurtmachining ta'sir " +
          "vositasi qolmaydi. " +
          "Bosqichli to'lov ancha " +
          "xavfsiz.",
        lawRefs: [
          { code: "FK2", article: "631" },
          { code: "FK2", article: "632" },
          { code: "FK2", article: "637" },
          { code: "FK2", article: "639" },
        ],
      },
      {
        heading: "Nazorat, ogohlantirish va xavf",
        text:
          "Buyurtmachi pudratchining " +
          "faoliyatiga aralashmagan holda " +
          "ish borishini va sifatini " +
          "tekshirishga haqli. Bu " +
          "muvozanat muhim: nazorat bor, " +
          "lekin ishga aralashuv yo'q.\n\n" +
          "Amaliy tarjimasi: siz ishni " +
          "kuzatishingiz, kamchilikni " +
          "ko'rsatishingiz mumkin, lekin " +
          "pudratchiga «qanday qilishni» " +
          "buyurish uning javobgarligini " +
          "kamaytiradi.\n\n" +
          "PUDRATCHINING OGOHLANTIRISH " +
          "MAJBURIYATI — bu bo'limning " +
          "eng muhim qismi. Pudratchi " +
          "ma'lum holatlarni aniqlagan " +
          "taqdirda buyurtmachini DARHOL " +
          "ogohlantirishi shart: " +
          "materialning yaroqsizligi, " +
          "buyurtmachi ko'rsatmalarining " +
          "salbiy oqibatlari, ishni " +
          "bajarishga to'sqinlik " +
          "qiladigan holatlar.\n\n" +
          "Bu majburiyat ikki tomonni " +
          "ham himoya qiladi. Pudratchi " +
          "ogohlantirmasa — oqibat " +
          "uning zimmasida qoladi. " +
          "Ogohlantirgan, buyurtmachi " +
          "esa e'tibor bermagan " +
          "bo'lsa — javobgarlik " +
          "buyurtmachiga o'tadi.\n\n" +
          "Shuning uchun " +
          "ogohlantirishni YOZMA " +
          "shaklda berish va javobni " +
          "ham yozma olish har ikki " +
          "tomon uchun foydali.\n\n" +
          "XAVF taqsimoti alohida " +
          "masala: pudrat obyekti " +
          "tasodifan nobud bo'lsa " +
          "yoki shikastlansa, qonun " +
          "xavfni kim ko'tarishini " +
          "belgilaydi.",
        example:
          "Buyurtmachi o'zi sotib " +
          "olgan materialni berdi, " +
          "pudratchi uning " +
          "yaroqsizligini ko'rdi-yu " +
          "hech narsa demay ishlatdi. " +
          "Natija sifatsiz chiqdi. " +
          "Ogohlantirish majburiyati " +
          "bajarilmagani uchun " +
          "javobgarlik pudratchida " +
          "qoladi.",
        keyPoints: [
          "Buyurtmachi ARALASHMASDAN nazorat qilishga haqli",
          "Pudratchi to'siqlar va salbiy oqibatlar haqida DARHOL ogohlantirishi shart",
          "Ogohlantirish yozma bo'lsa javobgarlik masalasi aniq bo'ladi",
          "Obyektning tasodifan nobud bo'lish xavfi qonunda taqsimlangan",
        ],
        warning:
          "Buyurtmachi sifatida " +
          "ishning har bosqichini " +
          "qabul qilib borish " +
          "muhim. Oxirida " +
          "«hammasini qayta " +
          "qildiring» deyish " +
          "amalda ancha qiyin " +
          "bo'ladi.",
        lawRefs: [
          { code: "FK2", article: "642" },
          { code: "FK2", article: "643" },
          { code: "FK2", article: "667" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     11. Qarz va kredit
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "qarz-kredit",
    category: "contracts",
    level: "basic",
    order: 3110,
    title: "Qarz, kredit va bank omonati",
    desc:
      "Pul qarz berish va olish: shakl talabi, foizlar, " +
      "kredit shartnomasi va bank omonati.",
    objectives: [
      "Qarz shartnomasining shakl talabini aniq bilasiz",
      "Foizlar qanday belgilanishini va sukut holatini bilasiz",
      "Qarz va kredit shartnomasi farqini tushunasiz",
      "Bank omonati turlarini va foiz hisobini bilasiz",
    ],
    practicalSteps: [
      "Har qanday qarzni yozma rasmiylashtiring: kim, kimga, qancha, qachon qaytaradi",
      "Tilxatda summani raqam va SO'Z bilan yozing, sana va imzoni qo'ying",
      "Foiz shartini aniq yozing: yillikmi, oylikmi, qaysi summadan hisoblanadi",
      "Qarz qaytarilganda tilxatni qaytarib oling yoki unga «to'liq olindi» deb yozdiring",
    ],
    sections: [
      {
        heading: "Qarz shartnomasi va uning shakli",
        text:
          "Qarz shartnomasi bo'yicha bir " +
          "taraf (qarz beruvchi) ikkinchi " +
          "tarafga (qarz oluvchiga) pul " +
          "yoki turga xos belgilari " +
          "bilan belgilanadigan ashyolarni " +
          "beradi, qarz oluvchi esa " +
          "xuddi shunday summani yoki " +
          "shunday miqdordagi ashyolarni " +
          "qaytarish majburiyatini " +
          "oladi.\n\n" +
          "Shakl talabi amalda eng muhim " +
          "masala. Fuqarolar o'rtasidagi " +
          "qarz shartnomasi summasi " +
          "qonunda belgilangan miqdordan " +
          "oshsa yozma shaklda " +
          "tuzilishi kerak.\n\n" +
          "Yozma shakl bo'lmasa, qarz " +
          "mavjudligini isbotlash " +
          "jiddiy qiyinlashadi — bu " +
          "aynan «tanish odamga " +
          "ishonib berdim» degan " +
          "holatlarda ko'p " +
          "uchraydigan yo'qotish.\n\n" +
          "Eng sodda va ishonchli " +
          "hujjat — TILXAT. Unda " +
          "bo'lishi kerak: kim " +
          "kimdan olgani, summa " +
          "(raqam va so'z bilan), " +
          "qaytarish muddati, " +
          "foiz sharti (bo'lsa), " +
          "sana va imzo.\n\n" +
          "FOIZLAR bo'yicha muhim " +
          "qoida: qonunda yoki " +
          "shartnomada boshqacha " +
          "tartib nazarda tutilmagan " +
          "bo'lsa, qarz shartnomasi " +
          "bo'yicha foizlar masalasi " +
          "qonun qoidalari asosida " +
          "hal qilinadi.\n\n" +
          "Shuning uchun foiz sharti " +
          "kutilayotgan bo'lsa, uni " +
          "ALBATTA yozib qo'yish " +
          "kerak — keyin og'zaki " +
          "kelishuvni isbotlash " +
          "deyarli imkonsiz.",
        example:
          "Shaxs tanishiga katta " +
          "summa berdi va faqat " +
          "telefon xabarlarida " +
          "kelishdi. Qarzdor qarzni " +
          "tan olmadi. Xabarlar " +
          "ba'zan dalil bo'ladi, " +
          "lekin oddiy imzolangan " +
          "tilxat ancha kuchli va " +
          "uni tayyorlash bir " +
          "daqiqa vaqt oladi.",
        keyPoints: [
          "Qarzda xuddi shunday summa yoki miqdordagi ashyo qaytariladi",
          "Belgilangan miqdordan oshadigan qarz YOZMA rasmiylashtiriladi",
          "Tilxatda summa raqam va so'z bilan, sana va imzo bo'lishi kerak",
          "Foiz sharti yozilmasa, uni keyin talab qilish qiyin",
        ],
        warning:
          "Qarzni naqd berganda " +
          "guvoh bo'lgani yetarli " +
          "emas. Pulni bank orqali " +
          "o'tkazish yoki tilxat " +
          "olish — ikkalasi ham " +
          "oddiy va ikkalasi ham " +
          "himoya beradi.",
        lawRefs: [
          { code: "FK2", article: "732" },
          { code: "FK2", article: "733" },
          { code: "FK2", article: "734" },
        ],
      },
      {
        heading: "Kredit shartnomasi va bank omonati",
        text:
          "Kredit shartnomasi bo'yicha " +
          "bir taraf — bank yoki boshqa " +
          "kredit tashkiloti (kreditor) " +
          "ikkinchi tarafga (qarz " +
          "oluvchiga) shartnomada " +
          "nazarda tutilgan miqdorda " +
          "va shartlarda pul mablag'lari " +
          "berish majburiyatini oladi.\n\n" +
          "Kreditning oddiy qarzdan " +
          "farqi: kreditor faqat bank " +
          "yoki kredit tashkiloti " +
          "bo'lishi mumkin, va " +
          "shartnoma har doim haq " +
          "evaziga (foizli) bo'ladi.\n\n" +
          "SHAKL TALABI qat'iy: kredit " +
          "shartnomasi yozma shaklda " +
          "tuzilishi SHART. Yozma " +
          "shaklga rioya qilmaslik " +
          "kredit shartnomasi uchun " +
          "jiddiy oqibat keltiradi.\n\n" +
          "Kredit olishdan oldin " +
          "e'tibor berish kerak " +
          "bo'lgan nuqtalar: " +
          "haqiqiy yillik foiz " +
          "stavkasi, qo'shimcha " +
          "komissiyalar, kechikish " +
          "uchun penya, muddatidan " +
          "oldin to'lash sharti va " +
          "ta'minot (garov, " +
          "kafillik) talablari.\n\n" +
          "BANK OMONATI shartnomasi " +
          "bo'yicha bank omonatchidan " +
          "qabul qilib olgan summani " +
          "qaytarish va unga foizlar " +
          "to'lash majburiyatini " +
          "oladi. Omonat shartnomasi " +
          "ham yozma shaklda " +
          "tuzilishi kerak.\n\n" +
          "Omonatlar turlari: talab " +
          "qilinguncha saqlanadigan " +
          "va muddatli. Farqi " +
          "amaliy: muddatli omonatni " +
          "muddatdan oldin olish " +
          "odatda foiz yo'qotishga " +
          "olib keladi.",
        example:
          "Mijoz kredit oldi va " +
          "faqat oylik to'lov " +
          "summasiga qaradi. " +
          "Shartnomadagi " +
          "komissiyalar va sug'urta " +
          "to'lovlari hisobga " +
          "olinganda haqiqiy " +
          "xarajat ancha yuqori " +
          "chiqdi. Imzolashdan " +
          "oldin UMUMIY to'lanadigan " +
          "summani so'rash eng " +
          "foydali savol.",
        keyPoints: [
          "Kreditor faqat bank yoki kredit tashkiloti bo'lishi mumkin",
          "Kredit shartnomasi YOZMA shaklda tuzilishi shart",
          "Imzolashdan oldin umumiy to'lanadigan summani aniqlang",
          "Muddatli omonatni erta olish odatda foiz yo'qotishga olib keladi",
        ],
        warning:
          "Kredit shartnomasini " +
          "o'qimasdan imzolash — " +
          "eng keng tarqalgan moliyaviy " +
          "xato. Nusxangizni " +
          "olib, uyda diqqat bilan " +
          "o'qib chiqing: " +
          "majburiyat uzoq yillarga " +
          "cho'ziladi.",
        lawRefs: [
          { code: "FK2", article: "744" },
          { code: "FK2", article: "745" },
          { code: "FK2", article: "759" },
          { code: "FK2", article: "761" },
          { code: "FK2", article: "762" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     12. Xizmat ko'rsatish
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "xizmat-korsatish",
    category: "contracts",
    level: "basic",
    order: 3120,
    title: "Haq evaziga xizmat ko'rsatish shartnomasi",
    desc:
      "Ta'lim, tibbiyot, maslahat, aloqa va boshqa xizmatlar: " +
      "ijrochi majburiyatlari, javobgarlik va bekor qilish.",
    objectives: [
      "Xizmat ko'rsatish shartnomasining mohiyatini bilasiz",
      "Xizmatni shaxsan bajarish talabini tushunasiz",
      "Shartnomani bekor qilish shartlarini bilasiz",
      "Xizmat sifatsiz bo'lsa qanday talab qo'yishni bilasiz",
    ],
    practicalSteps: [
      "Xizmat shartnomasida natija mezonini yozing: nima bajariladi va qanday baholanadi",
      "To'lovni bosqichlarga bo'ling, ayniqsa uzoq muddatli xizmatlarda",
      "Xizmat sifatsiz bo'lsa yozma da'vo yuboring va muhlat bering",
      "Bekor qilishda qilingan xarajatlarni hisoblab, hujjat bilan tasdiqlang",
    ],
    sections: [
      {
        heading: "Xizmat ko'rsatish shartnomasi",
        text:
          "Haq evaziga xizmat ko'rsatish " +
          "shartnomasi bo'yicha ijrochi " +
          "buyurtmachining topshirig'iga " +
          "binoan xizmat ko'rsatish " +
          "majburiyatini oladi, " +
          "buyurtmachi esa bu " +
          "xizmatlar uchun haq to'lash " +
          "majburiyatini oladi.\n\n" +
          "Bu shartnoma turi juda keng " +
          "doirani qamraydi: ta'lim, " +
          "tibbiy xizmat, maslahat, " +
          "audit, aloqa, turizm va " +
          "boshqalar.\n\n" +
          "Pudratdan asosiy farqi " +
          "yuqorida aytilgan edi: " +
          "bu yerda moddiy natija " +
          "emas, xizmatning O'ZI " +
          "predmet hisoblanadi.\n\n" +
          "Muhim qoida — SHAXSAN " +
          "BAJARISH: shartnomada " +
          "boshqa ko'rsatmalar " +
          "bo'lmasa, ijrochi " +
          "xizmatlarni shaxsan " +
          "ko'rsatishi kerak.\n\n" +
          "Bu amalda muhim: siz " +
          "muayyan mutaxassisni " +
          "tanlagan bo'lsangiz, u " +
          "ishni boshqasiga " +
          "o'tkazib yuborishi " +
          "avtomatik ruxsat " +
          "etilmaydi.\n\n" +
          "Haq to'lash tartibi " +
          "shartnomada belgilanadi. " +
          "Shartnomada boshqacha " +
          "belgilanmagan bo'lsa, " +
          "pudrat to'g'risidagi " +
          "umumiy qoidalar ham " +
          "qo'llanilishi mumkin.",
        example:
          "Buyurtmachi ma'lum bir " +
          "mutaxassis bilan maslahat " +
          "xizmati bo'yicha " +
          "shartnoma tuzdi, ammo " +
          "xizmatni boshqa xodim " +
          "ko'rsatdi. Shartnomada " +
          "boshqasiga o'tkazishga " +
          "ruxsat berilmagan bo'lsa, " +
          "bu shartnoma buzilishi " +
          "hisoblanishi mumkin.",
        keyPoints: [
          "Predmet — xizmatning o'zi, moddiy natija emas",
          "Qamrovi keng: ta'lim, tibbiyot, maslahat, aloqa, turizm",
          "Ijrochi odatda xizmatni SHAXSAN ko'rsatishi kerak",
          "Ayrim masalalarda pudrat qoidalari ham qo'llaniladi",
        ],
        warning:
          "Xizmat shartnomasida " +
          "natijani o'lchash mezoni " +
          "bo'lmasa, sifat bo'yicha " +
          "nizoni isbotlash juda " +
          "qiyin. Kutilayotgan " +
          "natijani yozib qo'ying.",
        lawRefs: [
          { code: "FK2", article: "703" },
          { code: "FK2", article: "704" },
          { code: "FK2", article: "705" },
          { code: "FK2", article: "708" },
        ],
      },
      {
        heading: "Javobgarlik va bekor qilish",
        text:
          "Ijrochi shartnomani " +
          "buzganlik uchun javobgar " +
          "bo'ladi. Javobgarlik " +
          "shartlari va hajmi " +
          "qonunda hamda " +
          "shartnomada " +
          "belgilanadi.\n\n" +
          "Amalda eng ko'p " +
          "uchraydigan holat — " +
          "xizmat sifatsiz " +
          "ko'rsatilgani. Bunda " +
          "harakat ketma-ketligi " +
          "muhim: avval yozma " +
          "da'vo (pretenziya), " +
          "unda kamchilik va " +
          "talab aniq " +
          "ko'rsatiladi, so'ng " +
          "muhlat beriladi.\n\n" +
          "BEKOR QILISH bo'yicha " +
          "bu shartnoma turida " +
          "o'ziga xos qoida bor " +
          "va u ikki tomon uchun " +
          "ham foydali.\n\n" +
          "Buyurtmachi " +
          "shartnomani bekor " +
          "qilishga haqli, lekin " +
          "ijrochining haqiqatda " +
          "qilgan xarajatlarini " +
          "to'lashi kerak. " +
          "Ijrochi ham bekor " +
          "qilishi mumkin, lekin " +
          "unda buyurtmachiga " +
          "zararlarni qoplash " +
          "masalasi yuzaga " +
          "keladi.\n\n" +
          "Amaliy xulosa: " +
          "shartnomadan chiqish " +
          "mumkin, lekin u " +
          "tekin emas. Shuning " +
          "uchun uzoq muddatli " +
          "xizmatlarda " +
          "bosqichli to'lov " +
          "tanlash foydali — " +
          "bekor qilganda " +
          "hisob-kitob " +
          "soddaroq bo'ladi.\n\n" +
          "Xarajatlarni " +
          "isbotlash ijrochining " +
          "zimmasida bo'ladi, " +
          "shuning uchun ular " +
          "hujjat bilan " +
          "tasdiqlanishi kerak.",
        example:
          "Buyurtmachi uzoq " +
          "muddatli maslahat " +
          "shartnomasini yarim " +
          "yo'lda bekor qildi. " +
          "U butun summani " +
          "qaytarishni kutdi, " +
          "lekin ijrochi " +
          "allaqachon qilgan " +
          "ishlar uchun haq " +
          "olishga haqli " +
          "bo'ldi. Bosqichli " +
          "to'lov bo'lganida " +
          "hisob-kitob aniq " +
          "bo'lardi.",
        keyPoints: [
          "Sifatsiz xizmatda avval yozma da'vo va muhlat berish kerak",
          "Buyurtmachi bekor qilishga haqli, lekin haqiqiy xarajatlarni to'laydi",
          "Ijrochi bekor qilsa zararlarni qoplash masalasi yuzaga keladi",
          "Bosqichli to'lov bekor qilishdagi hisob-kitobni soddalashtiradi",
        ],
        warning:
          "Xizmat uchun to'liq " +
          "oldindan to'lov " +
          "qilish keyin " +
          "pulni qaytarib " +
          "olishni " +
          "qiyinlashtiradi. " +
          "Uzoq muddatli " +
          "shartnomalarda " +
          "bundan saqlaning.",
        lawRefs: [
          { code: "FK2", article: "706" },
          { code: "FK2", article: "707" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     13. Hadya, ayirboshlash, renta
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "hadya-renta",
    category: "contracts",
    level: "mid",
    order: 3130,
    title: "Hadya, ayirboshlash va renta",
    desc:
      "Tekin berish va umrbod ta'minot: hadya shakli va bekor " +
      "qilinishi, ayirboshlash, renta shartnomasi.",
    objectives: [
      "Hadya shartnomasining shaklini va cheklovlarini bilasiz",
      "Hadyani qanday hollarda bekor qilish mumkinligini bilasiz",
      "Ayirboshlash shartnomasining qoidalarini bilasiz",
      "Renta shartnomasining mohiyatini va xavflarini tushunasiz",
    ],
    practicalSteps: [
      "Ko'chmas mulkni hadya qilishda notarial shakl va ro'yxatga olishni bajaring",
      "Renta shartnomasini imzolashdan oldin albatta mustaqil yuridik maslahat oling",
      "Renta shartnomasida to'lov miqdori va tartibini juda aniq yozing",
      "Hadya qilishdan oldin oqibatlarni o'ylang: qaytarib olish asoslari juda tor",
    ],
    sections: [
      {
        heading: "Hadya shartnomasi",
        text:
          "Hadya shartnomasiga muvofiq bir " +
          "taraf (hadya qiluvchi) boshqa " +
          "tarafga (hadya oluvchiga) " +
          "ashyoni TEKIN beradi yoki " +
          "berish majburiyatini oladi.\n\n" +
          "«Tekin» — kalit belgi. Agar " +
          "qarshi ijro bo'lsa (pul, " +
          "xizmat, biror majburiyat), " +
          "bu hadya emas, boshqa " +
          "shartnoma turi bo'ladi.\n\n" +
          "SHAKL: hadya qilish, ayni " +
          "paytda hadyani topshirish " +
          "bilan birga og'zaki amalga " +
          "oshirilishi mumkin. Lekin " +
          "ayrim hollarda yozma yoki " +
          "notarial shakl talab " +
          "qilinadi — xususan ko'chmas " +
          "mulk hadyasida.\n\n" +
          "Hadya oluvchi hadyani qabul " +
          "qilishni rad etishga haqli " +
          "— hadya majburiy emas.\n\n" +
          "HADYANI BEKOR QILISH " +
          "asoslari tor va aniq. " +
          "Asosiy asos: hadya oluvchi " +
          "hadya qiluvchining, uning " +
          "oila a'zolari yoki yaqin " +
          "qarindoshlarining hayoti " +
          "yoki sog'lig'iga suiqasd " +
          "qilsa.\n\n" +
          "Bundan tashqari hadya " +
          "qiluvchining moddiy ahvoli " +
          "jiddiy o'zgargan hollarda " +
          "shartnomani bajarishdan " +
          "bosh tortish imkoniyati " +
          "ham nazarda tutilgan.\n\n" +
          "Amaliy xulosa juda muhim: " +
          "hadya qilingan mulkni " +
          "«fikrim o'zgardi» degan " +
          "asos bilan qaytarib olib " +
          "bo'lmaydi.",
        example:
          "Ota-ona uyni farzandiga " +
          "hadya qildi, keyin " +
          "munosabatlar buzildi va " +
          "qaytarib olishni xohladi. " +
          "Qonundagi asoslar juda " +
          "tor bo'lgani uchun bu " +
          "amalda deyarli imkonsiz. " +
          "Shu sababli hadyadan " +
          "oldin oqibatlarni " +
          "o'ylash zarur.",
        keyPoints: [
          "Hadya — TEKIN berish; qarshi ijro bo'lsa bu hadya emas",
          "Ko'chmas mulk hadyasida shakl talablari qat'iy",
          "Hadya oluvchi qabul qilishni rad etishga haqli",
          "Bekor qilish asoslari juda tor — «fikrim o'zgardi» asos emas",
        ],
        warning:
          "Hadya orqali soliq yoki " +
          "kreditorlardan mol-mulkni " +
          "yashirishga urinish " +
          "xavfli: bunday bitim " +
          "qalbaki deb topilishi " +
          "mumkin.",
        lawRefs: [
          { code: "FK2", article: "502" },
          { code: "FK2", article: "503" },
          { code: "FK2", article: "504" },
          { code: "FK2", article: "506" },
          { code: "FK2", article: "507" },
        ],
      },
      {
        heading: "Ayirboshlash va renta",
        text:
          "AYIRBOSHLASH shartnomasiga " +
          "muvofiq har bir taraf " +
          "boshqa tarafga bir tovarni " +
          "boshqa tovarga almashtirish " +
          "majburiyatini oladi.\n\n" +
          "Bu yerda pul emas, tovar " +
          "tovarga almashtiriladi. " +
          "Har bir taraf ayni paytda " +
          "ham sotuvchi, ham xaridor " +
          "hisoblanadi va shu sababli " +
          "oldi-sotdi qoidalari " +
          "ko'p jihatdan " +
          "qo'llaniladi.\n\n" +
          "Tovarlar qiymati teng " +
          "deb hisoblanadi (agar " +
          "shartnomadan boshqacha " +
          "kelib chiqmasa); farq " +
          "bo'lsa, uni to'lash " +
          "tartibi shartnomada " +
          "belgilanadi.\n\n" +
          "RENTA shartnomasi ancha " +
          "murakkab va u alohida " +
          "ehtiyotkorlikni talab " +
          "qiladi. Unga muvofiq " +
          "bir taraf (renta " +
          "oluvchi) ko'chmas yoki " +
          "ko'char mol-mulkni " +
          "boshqa tarafga " +
          "(renta to'lovchiga) " +
          "beradi, to'lovchi esa " +
          "evaziga davriy " +
          "to'lovlar amalga " +
          "oshirish majburiyatini " +
          "oladi.\n\n" +
          "Amalda bu ko'pincha " +
          "keksa shaxs uyini " +
          "berib, umrbod " +
          "ta'minot olishi " +
          "shaklida uchraydi.\n\n" +
          "SHAKL TALABI qat'iy: " +
          "renta shartnomasi " +
          "notarial " +
          "tasdiqlanishi kerak, " +
          "ko'chmas mulk " +
          "berilganda esa " +
          "ro'yxatga olish ham " +
          "talab qilinadi.\n\n" +
          "Renta oluvchi uchun " +
          "himoya mexanizmlari " +
          "bor: to'lashni " +
          "ta'minlash choralari " +
          "va kechiktirilganlik " +
          "uchun javobgarlik " +
          "nazarda tutilgan.",
        example:
          "Keksa shaxs uyini " +
          "renta shartnomasi " +
          "asosida berdi, " +
          "to'lovchi esa " +
          "vaqt o'tib " +
          "majburiyatlarini " +
          "bajarmay qo'ydi. " +
          "Qonun bunday " +
          "holatda renta " +
          "oluvchiga himoya " +
          "beradi, lekin " +
          "shartnomada " +
          "majburiyatlar " +
          "aniq yozilgan " +
          "bo'lishi kerak.",
        keyPoints: [
          "Ayirboshlashda tovar tovarga almashtiriladi, oldi-sotdi qoidalari qo'llaniladi",
          "Rentada mol-mulk beriladi va evaziga davriy to'lovlar olinadi",
          "Renta shartnomasi NOTARIAL tasdiqlanishi shart",
          "Renta oluvchi uchun ta'minot va javobgarlik mexanizmlari mavjud",
        ],
        warning:
          "Renta shartnomasi " +
          "keksa va yolg'iz " +
          "shaxslar uchun " +
          "eng ko'p " +
          "suiiste'mol " +
          "qilinadigan " +
          "shartnoma " +
          "turlaridan biri. " +
          "Imzolashdan oldin " +
          "MUSTAQIL " +
          "maslahat olish " +
          "shart.",
        lawRefs: [
          { code: "FK2", article: "497" },
          { code: "FK2", article: "498" },
          { code: "FK2", article: "512" },
          { code: "FK2", article: "513" },
          { code: "FK2", article: "517" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     14. Topshiriq va sug'urta
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "topshiriq-sugurta",
    category: "contracts",
    level: "advanced",
    order: 3140,
    title: "Topshiriq, ishonchli boshqaruv va sug'urta",
    desc:
      "Boshqa shaxs nomidan ish yuritish shartnomalari va " +
      "sug'urta: ixtiyoriy va majburiy, sug'urta manfaati.",
    objectives: [
      "Topshiriq shartnomasini va uning bekor bo'lishini bilasiz",
      "Ishonchli boshqaruvning mohiyatini tushunasiz",
      "Ixtiyoriy va majburiy sug'urta farqini bilasiz",
      "Qanday manfaatlarni sug'urtalash mumkin emasligini bilasiz",
    ],
    practicalSteps: [
      "Topshiriq shartnomasida vakolat doirasini va haq masalasini aniq yozing",
      "Sug'urta shartnomasini imzolashdan oldin to'lov RAD ETILADIGAN hollar ro'yxatini o'qing",
      "Sug'urta hodisasi yuz berganda belgilangan muddatda xabar bering",
      "Sug'urta hujjatlarini va to'lov kvitansiyalarini alohida saqlang",
    ],
    sections: [
      {
        heading: "Topshiriq va ishonchli boshqaruv",
        text:
          "Topshiriq shartnomasi " +
          "bo'yicha bir taraf (vakil) " +
          "ikkinchi tarafning " +
          "(topshiriq beruvchining) " +
          "nomidan va uning hisobidan " +
          "muayyan yuridik " +
          "harakatlarni bajarish " +
          "majburiyatini oladi.\n\n" +
          "Vakillik bilan bog'liqligi " +
          "aniq: topshiriq " +
          "shartnomasi ko'pincha " +
          "ishonchnoma bilan birga " +
          "ishlaydi. Farqi shundaki, " +
          "topshiriq shartnomasi " +
          "IKKI TOMONLAMA kelishuv, " +
          "ishonchnoma esa bir " +
          "taraflama bitim.\n\n" +
          "Haq to'lash masalasi " +
          "qonunda yoki shartnomada " +
          "belgilanadi.\n\n" +
          "Topshiriq shartnomasining " +
          "BEKOR BO'LISHI o'ziga " +
          "xos: topshiriq beruvchi " +
          "topshiriqni bekor " +
          "qilishi, vakil esa undan " +
          "voz kechishi mumkin. " +
          "Ya'ni bu shartnoma " +
          "ishonchga asoslangani " +
          "uchun undan chiqish " +
          "nisbatan oson.\n\n" +
          "ISHONCHLI BOSHQARUV " +
          "boshqacha mexanizm: " +
          "mol-mulk boshqaruvchiga " +
          "topshiriladi, u esa uni " +
          "mulkdor yoki " +
          "ko'rsatilgan shaxs " +
          "manfaatida boshqaradi.\n\n" +
          "Muhim jihat: ishonchli " +
          "boshqaruvga topshirilgan " +
          "mol-mulk " +
          "boshqaruvchining o'z " +
          "mol-mulkidan AJRATIB " +
          "ko'rsatiladi — ya'ni u " +
          "boshqaruvchining " +
          "mulkiga aylanmaydi. " +
          "Boshqaruvchi mol-mulkni " +
          "odatda shaxsan " +
          "boshqaradi va o'z " +
          "harakatlari uchun " +
          "javobgar bo'ladi.",
        example:
          "Chet elga ketayotgan " +
          "shaxs kvartirasini " +
          "ishonchli boshqaruvga " +
          "topshirdi. Boshqaruvchi " +
          "uni ijaraga berib, " +
          "daromadni mulkdorga " +
          "o'tkazadi. Kvartira " +
          "boshqaruvchining " +
          "mulki bo'lib qolmaydi " +
          "va uning shaxsiy " +
          "qarzlari uchun " +
          "undirilmaydi.",
        keyPoints: [
          "Topshiriqda vakil topshiriq beruvchi NOMIDAN yuridik harakatlar bajaradi",
          "Topshiriq shartnomasi ikki tomonlama, ishonchnoma esa bir taraflama bitim",
          "Topshiriqdan ikki tomon ham chiqishi mumkin",
          "Ishonchli boshqaruvdagi mol-mulk boshqaruvchi mulkidan ajratiladi",
        ],
        warning:
          "Topshiriq bekor " +
          "qilinganda vakil " +
          "allaqachon bajargan " +
          "ishlar va qilgan " +
          "xarajatlar " +
          "bo'yicha hisob-kitob " +
          "masalasi qoladi. " +
          "Buni shartnomada " +
          "oldindan yozib " +
          "qo'yish foydali.",
        lawRefs: [
          { code: "FK2", article: "817" },
          { code: "FK2", article: "818" },
          { code: "FK2", article: "823" },
          { code: "FK2", article: "855" },
          { code: "FK2", article: "857" },
        ],
      },
      {
        heading: "Sug'urta: ixtiyoriy va majburiy",
        text:
          "Sug'urta — fuqaro yoki " +
          "yuridik shaxs (sug'urta " +
          "qildiruvchi) sug'urta " +
          "tashkiloti bilan " +
          "munosabatga kirishib, " +
          "ma'lum hodisa yuz " +
          "berganda to'lov olish " +
          "huquqiga ega " +
          "bo'ladigan tizim.\n\n" +
          "Sug'urta ixtiyoriy va " +
          "majburiy bo'ladi. " +
          "Majburiy sug'urta " +
          "qonunda ko'rsatilgan " +
          "hollarda talab " +
          "qilinadi; ixtiyoriysi " +
          "esa tomonlar " +
          "kelishuviga " +
          "asoslanadi.\n\n" +
          "Sug'urtalovchi bo'lish " +
          "uchun maxsus talab " +
          "bor: bu tijorat " +
          "tashkiloti bo'lib, " +
          "tegishli turdagi " +
          "sug'urtani amalga " +
          "oshirishga " +
          "litsenziyasi bo'lishi " +
          "kerak.\n\n" +
          "Amaliy maslahat: " +
          "shartnoma tuzishdan " +
          "oldin tashkilotning " +
          "litsenziyasini " +
          "tekshirish o'rinli.\n\n" +
          "MUHIM CHEKLOV: " +
          "g'ayriqonuniy " +
          "manfaatlarni " +
          "sug'urtalashga yo'l " +
          "qo'yilmaydi. " +
          "Shuningdek qimor va " +
          "shunga o'xshash " +
          "manfaatlar ham " +
          "sug'urtalanmaydi.\n\n" +
          "Sug'urtada eng ko'p " +
          "nizo TO'LOVDAN RAD " +
          "ETISH bo'yicha " +
          "chiqadi. Shartnomada " +
          "«sug'urta hodisasi " +
          "hisoblanmaydigan " +
          "hollar» ro'yxati " +
          "bo'ladi va aynan " +
          "shu ro'yxat " +
          "imzolashdan oldin " +
          "diqqat bilan " +
          "o'qilishi kerak.\n\n" +
          "Ikkinchi ko'p " +
          "uchraydigan sabab — " +
          "hodisa haqida " +
          "belgilangan " +
          "muddatda xabar " +
          "bermaslik.",
        example:
          "Sug'urta hodisasi yuz " +
          "berdi, lekin mijoz " +
          "sug'urtalovchini bir " +
          "necha hafta o'tgach " +
          "xabardor qildi. " +
          "Shartnomada xabar " +
          "berish muddati " +
          "belgilangan bo'lsa, " +
          "kechikish to'lovni " +
          "rad etish uchun " +
          "asos bo'lishi " +
          "mumkin.",
        keyPoints: [
          "Sug'urta ixtiyoriy va majburiy bo'ladi",
          "Sug'urtalovchida tegishli LITSENZIYA bo'lishi shart",
          "G'ayriqonuniy manfaatlarni sug'urtalash mumkin emas",
          "Rad etish asoslari va xabar berish muddati eng muhim bandlar",
        ],
        warning:
          "Sug'urta " +
          "shartnomasining " +
          "«istisnolar» " +
          "bo'limini " +
          "o'qimaslik — eng " +
          "ko'p uchraydigan " +
          "xato. Aynan shu " +
          "ro'yxat to'lov " +
          "olasizmi yoki " +
          "yo'qmi degan " +
          "savolni hal " +
          "qiladi.",
        lawRefs: [
          { code: "FK2", article: "914" },
          { code: "FK2", article: "916" },
          { code: "FK2", article: "925" },
        ],
      },
    ],
  },
];

module.exports = { LESSONS };
