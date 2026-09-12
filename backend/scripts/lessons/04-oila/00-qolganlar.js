"use strict";
/**
 * MODUL 4 — OILA HUQUQI (10 dars)
 *
 * Manba: Oila kodeksi (OK, 220 modda).
 *
 * ⚠️ MAVJUD "Oila huquqi" DARSI BU YERDA EMAS. U `lessonContentData.js`
 * orqali boshqariladi (libraryKey'siz, order: 20) va shu modulda
 * birinchi bo'lib ko'rinadi. Bu yerdagi darslar uni TO'LDIRADI —
 * takrorlamaydi, shuning uchun ular ancha tor mavzularga ajratilgan
 * (nikoh tuzish, ajralish, mulk, aliment, ota-onalik huquqi…).
 */

const LESSONS = [
  /* ═══════════════════════════════════════════════════════════════
     1. Nikoh tuzish
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "nikoh-tuzish",
    category: "family",
    level: "basic",
    order: 4010,
    title: "Nikohni tuzish: shartlar va tartib",
    desc:
      "Nikoh qayerda va qanday tuziladi, qanday shartlar talab " +
      "qilinadi, nikohga monelik qiladigan holatlar qaysilar.",
    objectives: [
      "Nikoh qayerda rasmiy tuzilishini va diniy marosim maqomini bilasiz",
      "Nikoh yoshi va ixtiyoriylik talabini bilasiz",
      "Nikohga monelik qiladigan holatlarni sanab bera olasiz",
      "Nikohdan kelib chiqadigan huquq va majburiyatlarni bilasiz",
    ],
    practicalSteps: [
      "Nikohni fuqarolik holati dalolatnomalarini qayd etish organida rasmiy ro'yxatdan o'tkazing",
      "Nikohdan oldin tibbiy ko'rikdan o'tish imkoniyatidan foydalaning",
      "Familiya tanlash masalasini oldindan hal qiling: nikoh vaqtida bu huquq beriladi",
      "Nikoh guvohnomasini va boshqa hujjatlarni xavfsiz joyda saqlang",
    ],
    sections: [
      {
        heading: "Nikoh qayerda tuziladi",
        text:
          "Oila kodeksi bu masalada juda aniq: nikoh " +
          "fuqarolik holati dalolatnomalarini qayd etish " +
          "organlarida tuziladi.\n\n" +
          "Diniy rasm-rusumlarning huquqiy ahamiyati " +
          "alohida belgilangan va bu nuqtani tushunish " +
          "juda muhim. Diniy marosim o'tkazilishi " +
          "shaxsning shaxsiy ishi, lekin u davlat " +
          "ro'yxatidan o'tishning O'RNINI BOSMAYDI.\n\n" +
          "Amaliy oqibatlari jiddiy. Rasmiy ro'yxatdan " +
          "o'tmagan munosabatda quyidagilar YUZAGA " +
          "KELMAYDI: er-xotinning umumiy mulki rejimi, " +
          "bir-biridan ta'minot olish huquqi, meros " +
          "huquqi (er-xotin sifatida), nikoh " +
          "shartnomasi imkoniyati.\n\n" +
          "Ya'ni nizo yoki vafot holatida rasmiy " +
          "ro'yxatdan o'tmagan tomon juda zaif " +
          "holatda qoladi. Bu ayniqsa ayollar uchun " +
          "jiddiy xavf hisoblanadi.\n\n" +
          "Er-xotinning huquq va majburiyatlari " +
          "aynan nikoh fuqarolik holati " +
          "dalolatnomalarini qayd etish organida " +
          "qayd etilgan kundan boshlab vujudga " +
          "keladi.\n\n" +
          "Bolalarning huquqlari esa bunga " +
          "bog'liq emas: bola ota-onasi nikohda " +
          "bo'lgan-bo'lmaganidan qat'i nazar " +
          "himoyalanadi va nasl-nasab alohida " +
          "tartibda belgilanadi.",
        example:
          "Juftlik faqat diniy marosim o'tkazdi va " +
          "yillar davomida birga yashadi, mol-mulk " +
          "orttirdi. Ajralish holatida bu mol-mulk " +
          "er-xotinning umumiy mulki qoidalari " +
          "bo'yicha bo'linmaydi — chunki huquqiy " +
          "ma'noda nikoh mavjud emas edi. Bu " +
          "eng ko'p uchraydigan va eng og'ir " +
          "oqibatli xatolardan biri.",
        keyPoints: [
          "Nikoh FHDYo organida tuziladi — bu yagona rasmiy yo'l",
          "Diniy marosim davlat ro'yxatining o'rnini bosmaydi",
          "Ro'yxatdan o'tmasa umumiy mulk, ta'minot va meros huquqi yuzaga kelmaydi",
          "Er-xotin huquqlari nikoh qayd etilgan kundan boshlanadi",
        ],
        warning:
          "«Keyin rasmiylashtiramiz» degan yondashuv " +
          "yillar davomida cho'zilib ketadi va " +
          "muammo aynan eng og'ir paytda — nizo " +
          "yoki vafot holatida — yuzaga chiqadi.",
        lawRefs: [
          { code: "OK", article: "13" },
          { code: "OK", article: "18" },
        ],
      },
      {
        heading: "Nikoh shartlari: ixtiyoriylik va yosh",
        text:
          "Nikoh tuzish uchun ikkita asosiy shart " +
          "bor.\n\n" +
          "Birinchisi — IXTIYORIYLIK. Nikoh tuzish " +
          "ixtiyoriydir va bo'lajak er-xotin o'z " +
          "roziligini shaxsan bildirishi kerak. " +
          "Majburlab tuzilgan nikoh haqiqiy emas " +
          "deb topilishi uchun asos bo'ladi.\n\n" +
          "Rozilik SHAXSAN bildirilishi talabi " +
          "muhim: uni qarindoshlar yoki vakil " +
          "orqali berish mumkin emas.\n\n" +
          "Ikkinchisi — NIKOH YOSHI. Kodeks nikoh " +
          "yoshini erkaklar va ayollar uchun bir " +
          "xil qilib belgilaydi. Uzrli sabablar " +
          "bo'lganda uni pasaytirish imkoniyati " +
          "ham nazarda tutilgan, lekin bu " +
          "belgilangan tartibda va istisno " +
          "sifatida amalga oshiriladi.\n\n" +
          "Uchinchi element — TIBBIY KO'RIK. " +
          "Nikohlanuvchi shaxslar davlat " +
          "sog'liqni saqlash tizimi muassasalarida " +
          "tibbiy ko'rikdan o'tkaziladi. Bu " +
          "kelajakdagi oila va bolalar sog'lig'i " +
          "uchun muhim qadam.\n\n" +
          "Nikoh tuzilgach er va xotin oilada " +
          "TENG huquqlardan foydalanadi va teng " +
          "majburiyatlarga ega bo'ladi. Har " +
          "biri mashg'ulot turi, kasb va turar " +
          "joyni erkin tanlash huquqini " +
          "saqlaydi — nikoh bu huquqlarni " +
          "cheklamaydi.",
        example:
          "Nikohdan keyin bir tomon " +
          "ikkinchisining ishlashini " +
          "taqiqlamoqchi bo'ldi. Oila kodeksi " +
          "bo'yicha har bir er-xotin " +
          "mashg'ulot turi va kasbni erkin " +
          "tanlash huquqiga ega — bu huquq " +
          "nikoh bilan cheklanmaydi.",
        keyPoints: [
          "Rozilik SHAXSAN va erkin bildirilishi kerak",
          "Nikoh yoshi erkak va ayol uchun bir xil belgilangan",
          "Nikohlanuvchilar tibbiy ko'rikdan o'tkaziladi",
          "Nikoh kasb, mashg'ulot va turar joy tanlash huquqini cheklamaydi",
        ],
        warning:
          "Majburlab nikohga kiritish nafaqat " +
          "nikohni haqiqiy emas qiladi, balki " +
          "alohida javobgarlik asosi ham " +
          "bo'lishi mumkin.",
        lawRefs: [
          { code: "OK", article: "14" },
          { code: "OK", article: "15" },
          { code: "OK", article: "17" },
          { code: "OK", article: "19" },
          { code: "OK", article: "22" },
        ],
      },
      {
        heading: "Nikohga monelik qiladigan holatlar",
        text:
          "Qonun nikoh tuzishga to'sqinlik " +
          "qiladigan holatlarni aniq " +
          "belgilaydi. Bu ro'yxat yopiq — " +
          "unda ko'rsatilmagan sabab bilan " +
          "nikohni rad etib bo'lmaydi.\n\n" +
          "Asosiy moneliklar: shaxslardan " +
          "loaqal bittasi ro'yxatga olingan " +
          "boshqa nikohda turgan bo'lsa; " +
          "yaqin qarindoshlik mavjud bo'lsa; " +
          "farzandlikka oluvchi va " +
          "farzandlikka olingan o'rtasida; " +
          "shaxslardan biri sud tomonidan " +
          "muomalaga layoqatsiz deb " +
          "topilgan bo'lsa.\n\n" +
          "Monelik mavjud bo'lgan holda " +
          "tuzilgan nikoh HAQIQIY EMAS deb " +
          "topilishi mumkin. Bu faqat sud " +
          "tartibida amalga oshiriladi.\n\n" +
          "Nikohni haqiqiy emas deb topish " +
          "asoslari kengroq: nikoh yoshiga " +
          "yetmaganlik, monelik holatlari, " +
          "shuningdek soxta nikoh (oila " +
          "qurish niyati bo'lmagan holda " +
          "tuzilgan nikoh).\n\n" +
          "Oqibati jiddiy: haqiqiy emas " +
          "deb topilgan nikoh TUZILGAN " +
          "VAQTIDAN boshlab haqiqiy emas " +
          "hisoblanadi. Ya'ni er-xotinlik " +
          "huquqlari umuman yuzaga " +
          "kelmagan deb qaraladi.\n\n" +
          "Muhim istisno — BOLALAR. " +
          "Nikohning haqiqiy emas deb " +
          "topilishi bunday nikohda " +
          "tug'ilgan bolalarning " +
          "huquqlariga ta'sir qilmaydi.",
        example:
          "Shaxs oldingi nikohini rasmiy " +
          "bekor qilmasdan yangi nikoh " +
          "tuzdi. Ikkinchi nikoh haqiqiy " +
          "emas deb topilishi mumkin va " +
          "undan kelib chiqadigan mulkiy " +
          "oqibatlar butunlay boshqacha " +
          "bo'ladi — lekin bolalarning " +
          "huquqlari saqlanadi.",
        keyPoints: [
          "Monelik holatlari ro'yxati yopiq va aniq belgilangan",
          "Boshqa ro'yxatga olingan nikohda turish asosiy moneliklardan biri",
          "Nikohni haqiqiy emas deb topish FAQAT sud tartibida",
          "Bolalarning huquqlariga bu ta'sir qilmaydi",
        ],
        warning:
          "Oldingi nikohni rasmiy tugatmasdan " +
          "yangisini tuzish — huquqiy jihatdan " +
          "eng xavfli holatlardan biri va u " +
          "mulkiy nizolarni juda " +
          "murakkablashtiradi.",
        lawRefs: [
          { code: "OK", article: "16" },
          { code: "OK", article: "49" },
          { code: "OK", article: "50" },
          { code: "OK", article: "55" },
          { code: "OK", article: "56" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     2. Nikohni bekor qilish
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "nikoh-bekor",
    category: "family",
    level: "basic",
    order: 4020,
    title: "Nikohdan ajratish (ajralish)",
    desc:
      "Nikoh qanday tugatiladi, sud tartibi, ajralishda sud " +
      "hal qiladigan masalalar va nikoh qachon tugagan hisoblanadi.",
    objectives: [
      "Nikohning tugatilish asoslarini bilasiz",
      "Ajralish jarayoni qanday kechishini bilasiz",
      "Sud ajralishda qanday masalalarni hal qilishini bilasiz",
      "Nikoh qaysi paytdan tugagan hisoblanishini bilasiz",
    ],
    practicalSteps: [
      "Ajralishdan oldin mulk, bolalar va ta'minot masalalarini kelishishga harakat qiling — sud vaqtini tejaydi",
      "Nikoh davomida orttirilgan mol-mulk ro'yxatini hujjatlar bilan tayyorlang",
      "Bolalar bilan bog'liq masalada ularning manfaatini birinchi o'ringa qo'ying — sud ham shunday qiladi",
      "Sud qarori kuchga kirgach, ajralishni belgilangan tartibda qayd ettiring",
    ],
    sections: [
      {
        heading: "Nikoh qanday tugatiladi",
        text:
          "Nikohning tugatilish asoslari qonunda " +
          "sanalgan: er-xotindan birining vafoti, " +
          "sud tomonidan ulardan birini vafot " +
          "etgan deb e'lon qilinishi, shuningdek " +
          "nikohdan ajratish.\n\n" +
          "Ajratish tartibi ikki xil bo'lishi " +
          "mumkin: sud tartibida va qonunda " +
          "nazarda tutilgan hollarda fuqarolik " +
          "holati dalolatnomalarini qayd etish " +
          "organida.\n\n" +
          "Umumiy qoida — SUD TARTIBI. Bu " +
          "tasodifiy emas: sud faqat nikohni " +
          "tugatibgina qolmay, u bilan bog'liq " +
          "boshqa masalalarni ham hal qiladi.\n\n" +
          "Ajralish to'g'risidagi ishlar " +
          "fuqarolik sud ishlarini yuritish " +
          "tartibida ko'riladi.\n\n" +
          "Amaliy jihatdan muhim nuqta: " +
          "ajralish jarayoni tomonlar " +
          "kelishuvga kelgan holatda ancha " +
          "tez va oson kechadi. Nizoli " +
          "masalalar (mulk, bolalar, " +
          "ta'minot) qancha ko'p bo'lsa, " +
          "jarayon shuncha uzoq " +
          "davom etadi.\n\n" +
          "Shuning uchun eng amaliy maslahat: " +
          "sudga borishdan oldin kelishishga " +
          "harakat qilish. Kelishuv sudda " +
          "tasdiqlanishi mumkin va bu ikki " +
          "tomon uchun ham vaqt hamda " +
          "xarajatni tejaydi.",
        example:
          "Er-xotin mulk va bolalar masalasini " +
          "oldindan kelishib, sudga tayyor " +
          "kelishuv bilan keldi. Ish ancha " +
          "tez ko'rildi. Aksincha, har bir " +
          "masalada nizo bo'lganda " +
          "ekspertizalar va qo'shimcha " +
          "so'rovlar tufayli jarayon " +
          "sezilarli cho'ziladi.",
        keyPoints: [
          "Tugatish asoslari: vafot, vafot etgan deb e'lon qilish, ajratish",
          "Umumiy tartib — SUD tartibi",
          "Ish fuqarolik sud ishlarini yuritish qoidalari bo'yicha ko'riladi",
          "Oldindan kelishuv jarayonni sezilarli tezlashtiradi",
        ],
        warning:
          "Ajralish jarayonida hujjatlarni " +
          "yashirish yoki mulkni " +
          "boshqalarga o'tkazib qo'yish " +
          "keyinchalik aniqlanadi va " +
          "holatni faqat yomonlashtiradi.",
        lawRefs: [
          { code: "OK", article: "37" },
          { code: "OK", article: "38" },
          { code: "OK", article: "40" },
        ],
      },
      {
        heading: "Sud ajralishda qanday masalalarni hal qiladi",
        text:
          "Bu bo'lim amaliy jihatdan eng " +
          "muhim: ajralish faqat «nikohni " +
          "bekor qilish» emas.\n\n" +
          "Nikohdan ajratish to'g'risida hal " +
          "qiluv qarori chiqarish vaqtida sud " +
          "bir qator masalalarni hal etadi: " +
          "voyaga yetmagan bolalar kim bilan " +
          "yashashi, ularning ta'minoti " +
          "(aliment), er-xotinning umumiy " +
          "mol-mulkini bo'lish, mehnatga " +
          "layoqatsiz tomonning ta'minoti.\n\n" +
          "Bolalar masalasida asosiy mezon — " +
          "BOLANING MANFAATI. Sud ota-onaning " +
          "moddiy holatini, bolaga " +
          "bog'liqligini, tarbiya sharoitini " +
          "va boshqa holatlarni hisobga " +
          "oladi.\n\n" +
          "Bolaning o'z fikri ham hisobga " +
          "olinadi: oilada bolaning " +
          "manfaatlariga taalluqli masala hal " +
          "qilinayotganda u o'z fikrini " +
          "ifoda etish huquqiga ega.\n\n" +
          "Muhim tushuncha: alohida " +
          "yashayotgan ota yoki ona " +
          "OTA-ONALIK HUQUQINI " +
          "YO'QOTMAYDI. U bola bilan " +
          "ko'rishish, tarbiyada " +
          "qatnashish va bolaning " +
          "ta'limi haqidagi masalalarda " +
          "ishtirok etish huquqini " +
          "saqlaydi.\n\n" +
          "Familiya masalasi ham hal " +
          "qilinadi: nikohga kirish " +
          "vaqtida familiyasini " +
          "o'zgartirgan tomon ajralishda " +
          "uni saqlab qolish yoki " +
          "avvalgisiga qaytish huquqiga " +
          "ega.",
        example:
          "Ajralishdan keyin bola bilan " +
          "yashamayotgan ota-onaga " +
          "bolani ko'rishga to'sqinlik " +
          "qilindi. Bu qonuniy emas: " +
          "alohida yashash ota-onalik " +
          "huquqini bekor qilmaydi va " +
          "ko'rishish tartibi kelishuv " +
          "yoki sud orqali " +
          "belgilanishi mumkin.",
        keyPoints: [
          "Sud bolalar, aliment, mulk va ta'minot masalalarini birga hal qiladi",
          "Bolalar masalasida asosiy mezon — BOLANING MANFAATI",
          "Bolaning o'z fikri ham hisobga olinadi",
          "Alohida yashovchi ota-ona ota-onalik huquqini saqlaydi",
        ],
        warning:
          "Bolani ikkinchi ota-onaga " +
          "qarshi qo'yish yoki ko'rishishga " +
          "to'sqinlik qilish sudda " +
          "salbiy baholanadi va " +
          "ko'pincha to'sqinlik " +
          "qilayotgan tomonga zarar " +
          "keltiradi.",
        lawRefs: [
          { code: "OK", article: "44" },
          { code: "OK", article: "46" },
          { code: "OK", article: "47" },
          { code: "OK", article: "68" },
          { code: "OK", article: "76" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     3. Er-xotinning mulki
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "er-xotin-mulki",
    category: "family",
    level: "mid",
    order: 4030,
    title: "Er-xotinning mulki va uni bo'lish",
    desc:
      "Qaysi mol-mulk umumiy, qaysi biri shaxsiy, umumiy mulk " +
      "qanday tasarruf etiladi va ajralishda qanday bo'linadi.",
    objectives: [
      "Umumiy va shaxsiy mulk chegarasini aniq bilasiz",
      "Umumiy mulkni tasarruf etish qoidalarini bilasiz",
      "Mulkni bo'lishda ulushlar qanday aniqlanishini bilasiz",
      "Qanday hujjatlar mulkiy huquqni himoya qilishini bilasiz",
    ],
    practicalSteps: [
      "Nikohgacha bo'lgan mulkni tasdiqlovchi hujjatlarni saqlang — bu shaxsiy mulk dalili",
      "Meros va hadya hujjatlarini alohida saqlang: ular umumiy mulkka kirmaydi",
      "Katta xaridlarda hujjatlarni to'g'ri rasmiylashtiring va kvitansiyalarni saqlang",
      "Ko'chmas mulk bitimlarida ikkinchi tomonning roziligi masalasini e'tibordan qoldirmang",
    ],
    sections: [
      {
        heading: "Umumiy mulk va shaxsiy mulk",
        text:
          "Oila kodeksi mulkni ikki toifaga " +
          "ajratadi va bu chegara ajralish " +
          "holatida hal qiluvchi ahamiyatga " +
          "ega.\n\n" +
          "UMUMIY MULK — er va xotinning nikoh " +
          "davomida orttirgan mol-mulki. Bu " +
          "birgalikdagi mulk rejimi: ulushlar " +
          "oldindan aniqlanmagan.\n\n" +
          "Muhim jihat: mol-mulk kimning " +
          "nomiga rasmiylashtirilganidan yoki " +
          "kim ko'proq daromad " +
          "topganidan qat'i nazar u umumiy " +
          "hisoblanadi. Uy yurituvchi va " +
          "bolalarni tarbiyalayotgan tomon " +
          "ham teng huquqqa ega.\n\n" +
          "SHAXSIY MULK — er va xotinning har " +
          "birining alohida mulki. Unga " +
          "kiradi: nikohga qadar o'ziga " +
          "tegishli bo'lgan mol-mulk, " +
          "shuningdek nikoh davrida meros " +
          "yoki hadya tariqasida olingan " +
          "mol-mulk.\n\n" +
          "Alohida qoida shaxsiy " +
          "foydalanishdagi buyumlarga " +
          "tegishli: qimmatbaho buyumlar va " +
          "zeb-ziynatlardan boshqa shaxsiy " +
          "foydalanish buyumlari o'sha " +
          "shaxsning mulki hisoblanadi.\n\n" +
          "Amaliy xulosa: meros va hadya " +
          "hujjatlarini saqlash juda muhim. " +
          "Hujjat bo'lmasa, mol-mulk " +
          "umumiy deb hisoblanishi va " +
          "bo'linishi mumkin.",
        example:
          "Nikoh davomida bir tomon " +
          "ota-onasidan uy meros oldi. " +
          "Bu shaxsiy mulk hisoblanadi " +
          "va ajralishda bo'linmaydi — " +
          "lekin meros hujjati saqlangan " +
          "bo'lishi kerak. Hujjat " +
          "bo'lmasa, uning meros " +
          "ekanini isbotlash qiyin " +
          "bo'ladi.",
        keyPoints: [
          "Nikoh davomida orttirilgan mol-mulk — UMUMIY mulk",
          "Kimning nomiga rasmiylashtirilgani ahamiyatsiz",
          "Nikohgacha bo'lgan mulk, meros va hadya — SHAXSIY mulk",
          "Meros va hadya hujjatlarini saqlash hal qiluvchi ahamiyatga ega",
        ],
        warning:
          "Shaxsiy mulkka umumiy " +
          "mablag' hisobidan katta " +
          "sarmoya kiritilsa (masalan " +
          "kapital ta'mir), uning " +
          "maqomi bo'yicha nizo " +
          "chiqishi mumkin. Xarajat " +
          "hujjatlarini saqlang.",
        lawRefs: [
          { code: "OK", article: "23" },
          { code: "OK", article: "25" },
          { code: "OK", article: "26" },
        ],
      },
      {
        heading: "Umumiy mulkni tasarruf etish va bo'lish",
        text:
          "Er va xotin umumiy mol-mulkka " +
          "egalik qiladi, undan foydalanadi " +
          "va uni ularning o'zaro roziligi " +
          "bilan tasarruf etadi.\n\n" +
          "Kundalik bitimlarda ikkinchi " +
          "tomonning roziligi taxmin " +
          "qilinadi. Lekin ko'chmas mulk " +
          "kabi jiddiy bitimlarda rozilikka " +
          "alohida talablar qo'yiladi — " +
          "bu ikkala tomonni ham himoya " +
          "qiladi.\n\n" +
          "Amaliy natijasi: agar bir tomon " +
          "ikkinchisining roziligisiz " +
          "umumiy uyni sotib yuborsa, " +
          "bunday bitimga e'tiroz bildirish " +
          "uchun asos bo'lishi mumkin.\n\n" +
          "MULKNI BO'LISH er va xotindan " +
          "birining talabi bo'yicha " +
          "amalga oshiriladi. Bo'lish " +
          "nikoh davomida ham, ajralish " +
          "vaqtida ham, ajralishdan keyin " +
          "ham mumkin.\n\n" +
          "Ulushlarni aniqlashda umumiy " +
          "qoida — TENGLIK. Lekin sud " +
          "ayrim holatlarda ulushdan " +
          "chetga chiqishi mumkin: " +
          "masalan voyaga yetmagan " +
          "bolalar manfaatlarini yoki " +
          "tomonlardan birining " +
          "e'tiborga loyiq " +
          "manfaatlarini hisobga " +
          "olgan holda.\n\n" +
          "Bo'lishda faqat aktivlar " +
          "emas, umumiy QARZLAR ham " +
          "hisobga olinadi — bu " +
          "ko'pincha unutiladi.",
        example:
          "Ajralishda bir tomon uyni " +
          "talab qildi, ikkinchisi esa " +
          "avtomobil va jamg'armani. " +
          "Sud umumiy qiymatni " +
          "hisoblab, teng ulushga " +
          "moslashtiradi: kimdir " +
          "qimmatroq narsa olsa, " +
          "farqni pul bilan " +
          "qoplaydi.",
        keyPoints: [
          "Umumiy mulk o'zaro rozilik bilan tasarruf etiladi",
          "Ko'chmas mulk bitimlarida rozilik talablari qat'iyroq",
          "Bo'lishda umumiy qoida — ulushlar TENG",
          "Bolalar manfaati va boshqa holatlar ulushga ta'sir qilishi mumkin",
        ],
        warning:
          "Ajralishdan oldin mol-mulkni " +
          "qarindoshlar nomiga " +
          "o'tkazib qo'yish keng " +
          "tarqalgan, lekin xavfli " +
          "yo'l: bunday bitim qalbaki " +
          "deb topilishi mumkin.",
        lawRefs: [
          { code: "OK", article: "24" },
          { code: "OK", article: "27" },
          { code: "OK", article: "28" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     4. Nikoh shartnomasi
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "nikoh-shartnoma",
    category: "family",
    level: "mid",
    order: 4040,
    title: "Nikoh shartnomasi",
    desc:
      "Er-xotin mulkiy munosabatlarini oldindan kelishish: " +
      "shartnoma qachon tuziladi, nima yozilishi mumkin va mumkin emas.",
    objectives: [
      "Nikoh shartnomasi nima ekanligini va qachon tuzilishini bilasiz",
      "Unga nima yozish mumkin va nima mumkin emasligini bilasiz",
      "Shartnomani o'zgartirish va bekor qilish tartibini bilasiz",
      "Kreditorlar huquqlari qanday himoyalanishini bilasiz",
    ],
    practicalSteps: [
      "Nikoh shartnomasini nikohdan oldin ham, keyin ham tuzish mumkinligini yodda tuting",
      "Shartnomada faqat MULKIY masalalarni yozing — shaxsiy munosabatlar predmet bo'lolmaydi",
      "Har ikki tomon uchun adolatli shartlar tuzing: nomutanosib shartnoma bekor qilinishi mumkin",
      "Shartnoma tuzganingizda kreditorlarni xabardor qilish majburiyatini unutmang",
    ],
    sections: [
      {
        heading: "Nikoh shartnomasi nima va qachon tuziladi",
        text:
          "Nikoh shartnomasi — nikohlanuvchi " +
          "shaxslarning yoki er-xotinning " +
          "nikohda bo'lgan davrida va " +
          "ajralish holatidagi mulkiy " +
          "huquq va majburiyatlarini " +
          "belgilaydigan kelishuv.\n\n" +
          "Tuzish vaqti erkin: nikoh davlat " +
          "ro'yxatiga olinguniga qadar ham, " +
          "nikoh davomida ham tuzish " +
          "mumkin.\n\n" +
          "Nikohgacha tuzilgan shartnoma " +
          "nikoh qayd etilgan paytdan " +
          "kuchga kiradi — ya'ni nikoh " +
          "tuzilmasa, shartnoma ham " +
          "ishlamaydi.\n\n" +
          "Nikoh shartnomasining asosiy " +
          "foydasi: er-xotin qonunda " +
          "belgilangan birgalikdagi " +
          "umumiy mulk rejimini " +
          "o'zgartirishi mumkin. " +
          "Masalan ayrim mol-mulkni " +
          "ulushli mulk yoki har " +
          "birining alohida mulki deb " +
          "belgilash.\n\n" +
          "Bu tadbirkorlik bilan " +
          "shug'ullanadigan oilalarda " +
          "ayniqsa foydali: biznes " +
          "riskini oilaviy mol-mulkdan " +
          "ajratish imkonini beradi.\n\n" +
          "Jamiyatda nikoh shartnomasiga " +
          "ba'zan «ishonchsizlik " +
          "belgisi» sifatida qaraladi. " +
          "Aslida u aksincha ishlaydi: " +
          "oldindan aniqlik nizolarni " +
          "kamaytiradi.",
        example:
          "Tadbirkorlik bilan " +
          "shug'ullanadigan oilada nikoh " +
          "shartnomasi tuzilib, biznes " +
          "aktivlari va oilaviy uy-joy " +
          "rejimi ajratildi. Biznesda " +
          "muammo yuzaga kelganda " +
          "oilaviy uy-joyning holati " +
          "ancha aniqroq bo'ladi.",
        keyPoints: [
          "Nikoh shartnomasi mulkiy huquq va majburiyatlarni belgilaydi",
          "Nikohgacha ham, nikoh davomida ham tuzilishi mumkin",
          "Nikohgacha tuzilgani nikoh qayd etilganda kuchga kiradi",
          "U qonundagi umumiy mulk rejimini o'zgartirish imkonini beradi",
        ],
        warning:
          "Nikoh shartnomasi shaklga " +
          "qat'iy talab qo'yadi. " +
          "Shaklga rioya qilinmasa, u " +
          "yuridik kuchga ega " +
          "bo'lmaydi — ya'ni umuman " +
          "ishlamaydi.",
        lawRefs: [
          { code: "OK", article: "29" },
          { code: "OK", article: "30" },
        ],
      },
      {
        heading: "Mazmuni, o'zgartirish va cheklovlar",
        text:
          "Nikoh shartnomasiga nima yozish " +
          "mumkin? Er va xotin unga ko'ra " +
          "birgalikdagi umumiy mulkning " +
          "qonunda belgilangan rejimini " +
          "o'zgartirishi, mol-mulkning " +
          "ayrim turlariga nisbatan " +
          "alohida rejim belgilashi " +
          "mumkin.\n\n" +
          "Nima yozib bo'lmaydi? Nikoh " +
          "shartnomasi faqat MULKIY " +
          "munosabatlarni tartibga " +
          "soladi. Unga shaxsiy " +
          "nomulkiy munosabatlarni " +
          "(kim uy ishlarini qiladi, " +
          "qanday munosabatda " +
          "bo'ladi) yozish predmetdan " +
          "tashqarida.\n\n" +
          "Shuningdek shartnoma " +
          "tomonlardan birini o'ta " +
          "noqulay ahvolga solmasligi " +
          "kerak — bunday shartlar " +
          "e'tiroz uchun asos " +
          "bo'ladi.\n\n" +
          "O'ZGARTIRISH va BEKOR " +
          "QILISH: nikoh shartnomasi " +
          "er-xotinning kelishuvi " +
          "bilan istalgan vaqtda " +
          "o'zgartirilishi yoki bekor " +
          "qilinishi mumkin. " +
          "Bir tomonlama voz kechish " +
          "esa mumkin emas.\n\n" +
          "Shartnoma sud tomonidan " +
          "haqiqiy emas deb topilishi " +
          "ham mumkin — bunda " +
          "Fuqarolik kodeksining " +
          "bitimlar haqidagi qoidalari " +
          "qo'llaniladi.\n\n" +
          "KREDITORLAR HIMOYASI muhim " +
          "mexanizm: er yoki xotin " +
          "nikoh shartnomasini " +
          "tuzganligi, o'zgartirgani " +
          "yoki bekor qilgani haqida " +
          "o'z kreditorlarini " +
          "xabardor qilishi kerak. " +
          "Aks holda shartnoma " +
          "ularga qarshi qo'llanilmaydi.",
        example:
          "Qarzi bo'lgan shaxs nikoh " +
          "shartnomasi tuzib, butun " +
          "mol-mulkni turmush " +
          "o'rtog'i nomiga o'tkazdi " +
          "va kreditorni xabardor " +
          "qilmadi. Bunday holatda " +
          "shartnoma kreditorga " +
          "qarshi ishlamaydi — " +
          "qonun bu yo'lni " +
          "oldindan to'sib qo'ygan.",
        keyPoints: [
          "Shartnoma faqat MULKIY munosabatlarni tartibga soladi",
          "Bir tomonni o'ta noqulay ahvolga soluvchi shartlar e'tiroz asosidir",
          "O'zgartirish va bekor qilish faqat o'zaro kelishuv bilan",
          "Kreditorlarni xabardor qilish MAJBURIY",
        ],
        warning:
          "Nikoh shartnomasi orqali " +
          "qarzlardan qutulishga " +
          "urinish ishlamaydi va u " +
          "qo'shimcha huquqiy " +
          "muammolar keltirishi " +
          "mumkin.",
        lawRefs: [
          { code: "OK", article: "31" },
          { code: "OK", article: "32" },
          { code: "OK", article: "33" },
          { code: "OK", article: "35" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     5. Aliment — bolalar
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "aliment-bolalar",
    category: "family",
    level: "basic",
    order: 4050,
    title: "Aliment: bolalar ta'minoti",
    desc:
      "Ota-onaning bolalarga ta'minot berish majburiyati: " +
      "kelishuv, sud tartibi, miqdor, qarz va javobgarlik.",
    objectives: [
      "Ota-onaning ta'minot berish majburiyatini aniq bilasiz",
      "Aliment kelishuv va sud tartibida qanday belgilanishini bilasiz",
      "Aliment qarzi qanday undirilishini bilasiz",
      "To'lamaslik uchun javobgarlikni bilasiz",
    ],
    practicalSteps: [
      "Iloji bo'lsa aliment to'lash to'g'risida YOZMA kelishuv tuzing — bu sudsiz yo'l",
      "Kelishuv bo'lmasa sudga murojaat qiling; kechiktirish bolaning zarariga ishlaydi",
      "Aliment to'lasangiz — to'lovni hujjatlashtiring, naqd pulni tilxatsiz bermang",
      "To'lovchining ish joyi o'zgarsa, bu haqda xabar berish majburiyatini unutmang",
    ],
    sections: [
      {
        heading: "Ta'minot berish majburiyati",
        text:
          "Ota-ona voyaga yetmagan bolalariga " +
          "ta'minot berishi shart. Bu " +
          "majburiyat ota-onalik huquqiga " +
          "bog'liq emas: hatto ota-onalik " +
          "huquqidan mahrum qilingan shaxs " +
          "ham ta'minot berish " +
          "majburiyatidan ozod bo'lmaydi.\n\n" +
          "Majburiyat TENG: voyaga yetmagan " +
          "bolalariga aliment to'lashda " +
          "ota-onaning majburiyatlari teng " +
          "hisoblanadi.\n\n" +
          "Majburiyat faqat voyaga " +
          "yetmaganlar bilan cheklanmaydi. " +
          "Ota-ona voyaga yetgan mehnatga " +
          "layoqatsiz, yordamga muhtoj " +
          "bolalariga ham ta'minot berishi " +
          "kerak.\n\n" +
          "Ta'minotning ikki yo'li bor va " +
          "birinchisi ancha afzal.\n\n" +
          "KELISHUV yo'li: aliment to'lash " +
          "to'g'risidagi kelishuv " +
          "(miqdori, shartlari va tartibi " +
          "haqida) tuziladi. U YOZMA " +
          "shaklda bo'lishi kerak va " +
          "belgilangan tartibda " +
          "rasmiylashtiriladi.\n\n" +
          "SUD yo'li: kelishuv bo'lmasa, " +
          "aliment sud tartibida " +
          "undiriladi. Aliment olish " +
          "huquqiga ega bo'lgan shaxs " +
          "sudga murojaat qilishi " +
          "mumkin.\n\n" +
          "Miqdor qonunda belgilangan " +
          "tartibda aniqlanadi va u " +
          "bolalar soniga hamda " +
          "to'lovchining daromadiga " +
          "bog'liq bo'ladi.",
        example:
          "Ota-ona ajrashgach og'zaki " +
          "kelishdi: «har oy shuncha " +
          "beraman». Bir necha oydan " +
          "keyin to'lovlar to'xtadi. " +
          "Og'zaki kelishuv " +
          "ijro etilmaydi — yozma " +
          "kelishuv yoki sud qarori " +
          "bo'lsa, davlat ijrochisi " +
          "orqali undirish mumkin " +
          "edi.",
        keyPoints: [
          "Ta'minot majburiyati ota-onalik huquqidan mahrum qilinganda ham saqlanadi",
          "Ota va onaning majburiyatlari TENG",
          "Voyaga yetgan mehnatga layoqatsiz bolalarga ham ta'minot beriladi",
          "Ikki yo'l: yozma kelishuv yoki sud tartibi",
        ],
        warning:
          "Og'zaki kelishuvga tayanmang. " +
          "U bajarilmasa, hech qanday " +
          "majburlash mexanizmi " +
          "ishlamaydi va yo'qotilgan " +
          "vaqt qaytmaydi.",
        lawRefs: [
          { code: "OK", article: "96" },
          { code: "OK", article: "97" },
          { code: "OK", article: "98" },
          { code: "OK", article: "100" },
          { code: "OK", article: "130" },
          { code: "OK", article: "131" },
        ],
      },
      {
        heading: "Undirish, qarz va javobgarlik",
        text:
          "Aliment undirish mexanizmi " +
          "amalda quyidagicha ishlaydi.\n\n" +
          "Sud qarori yoki kelishuv " +
          "asosida ish beruvchi " +
          "(tashkilot ma'muriyati) " +
          "alimentni ushlab qolish " +
          "majburiyatiga ega bo'ladi. " +
          "Ya'ni to'lov ish haqidan " +
          "to'g'ridan-to'g'ri " +
          "ushlanadi.\n\n" +
          "Shu sababli to'lovchining " +
          "ish, o'qish joyi va turar " +
          "joyi o'zgarganligi haqida " +
          "XABAR QILISH majburiyati " +
          "belgilangan. Bu " +
          "majburiyatni bajarmaslik " +
          "undirishni qiyinlashtiradi " +
          "va javobgarlikka olib " +
          "keladi.\n\n" +
          "ALIMENT QARZI alohida " +
          "institut: to'lanmagan " +
          "summalar yig'ilib qarzga " +
          "aylanadi. Qarz miqdorini " +
          "davlat ijrochisi sud " +
          "qarori asosida " +
          "belgilaydi va u " +
          "to'lovchining ish haqi " +
          "hamda boshqa " +
          "daromadlaridan " +
          "undiriladi.\n\n" +
          "Muhim himoya qoidasi: " +
          "alimentni hisobga " +
          "o'tkazishga va qaytarib " +
          "olishga yo'l qo'yilmaydi. " +
          "Ya'ni «u menga qarzdor " +
          "edi, shuning uchun " +
          "alimentni " +
          "to'lamayman» degan " +
          "asos ishlamaydi.\n\n" +
          "Aliment " +
          "INDEKSATSIYA " +
          "qilinadi — qat'iy " +
          "summada belgilangan " +
          "to'lovlar vaqt " +
          "o'tishi bilan " +
          "moslashtiriladi.\n\n" +
          "To'lashdan bosh " +
          "tortganlik uchun " +
          "javobgarlik nazarda " +
          "tutilgan va u " +
          "jiddiy oqibatlarga " +
          "olib kelishi mumkin.",
        example:
          "To'lovchi ishdan " +
          "bo'shab, yangi joyni " +
          "bildirmadi va bir " +
          "necha yil to'lamadi. " +
          "Qarz yig'ilib bordi " +
          "va u indeksatsiya " +
          "bilan birga " +
          "undiriladi — " +
          "«bilmadim» degan " +
          "asos qarzni bekor " +
          "qilmaydi.",
        keyPoints: [
          "Aliment ish haqidan to'g'ridan-to'g'ri ushlab qolinadi",
          "Ish va turar joy o'zgarishi haqida xabar berish MAJBURIY",
          "To'lanmagan summalar qarzga aylanadi va indeksatsiya qilinadi",
          "Alimentni boshqa qarz hisobiga o'tkazish mumkin emas",
        ],
        warning:
          "Alimentni naqd va " +
          "tilxatsiz to'lash " +
          "to'lovchi uchun " +
          "xavfli: keyin " +
          "to'laganini isbotlay " +
          "olmaydi va qarz " +
          "hisoblanib qolishi " +
          "mumkin.",
        lawRefs: [
          { code: "OK", article: "137" },
          { code: "OK", article: "138" },
          { code: "OK", article: "139" },
          { code: "OK", article: "143" },
          { code: "OK", article: "144" },
          { code: "OK", article: "116" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     6. Aliment — boshqa oila a'zolari
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "aliment-oila",
    category: "family",
    level: "mid",
    order: 4060,
    title: "Ta'minot: er-xotin va boshqa qarindoshlar",
    desc:
      "Er-xotinning bir-birini, bolalarning ota-onasini, " +
      "qarindoshlarning bir-birini ta'minlash majburiyati.",
    objectives: [
      "Er-xotinning o'zaro ta'minot majburiyatini bilasiz",
      "Ajralishdan keyin ta'minot olish huquqi qachon yuzaga kelishini bilasiz",
      "Bolalarning ota-onani ta'minlash majburiyatini bilasiz",
      "Boshqa qarindoshlarning majburiyatlarini bilasiz",
    ],
    practicalSteps: [
      "Ta'minot talabi uchun mehnatga layoqatsizlik va muhtojlikni hujjat bilan tasdiqlang",
      "Sudga murojaat qilishdan oldin o'zaro kelishuv imkoniyatini ko'rib chiqing",
      "Daromad va sog'liq holati haqidagi hujjatlarni oldindan to'plang",
      "Ta'minot majburiyati bir necha shaxsda bo'lsa, buni arizada ko'rsating",
    ],
    sections: [
      {
        heading: "Er-xotinning o'zaro ta'minot majburiyati",
        text:
          "Er-xotin bir-biriga moddiy yordam " +
          "berishi shart. Bu majburiyat " +
          "nikoh davomida amal qiladi va " +
          "ayrim hollarda ajralishdan keyin " +
          "ham saqlanadi.\n\n" +
          "Yetarli mablag'ga ega bo'lgan " +
          "tomondan ta'minot talab qilish " +
          "huquqi ma'lum shartlarda " +
          "yuzaga keladi. Odatda bu " +
          "mehnatga layoqatsizlik va " +
          "yordamga muhtojlik bilan " +
          "bog'liq.\n\n" +
          "Ajralishdan keyin ham sobiq " +
          "er yoki xotin ta'minot olish " +
          "huquqiga ega bo'lishi mumkin " +
          "— qonunda belgilangan " +
          "shartlarda.\n\n" +
          "Miqdor sud tartibida " +
          "belgilanganda tomonlarning " +
          "moddiy va oilaviy holati " +
          "hisobga olinadi.\n\n" +
          "Qonun ozod qilish " +
          "imkoniyatini ham nazarda " +
          "tutadi: ayrim holatlarda " +
          "sud er yoki xotinni " +
          "ta'minot berish " +
          "majburiyatidan ozod qilishi " +
          "yoki bu majburiyatni " +
          "muayyan muddat bilan " +
          "cheklashi mumkin.\n\n" +
          "Ta'minot olish huquqining " +
          "tugash asoslari ham " +
          "belgilangan.",
        example:
          "Uzoq yillik nikohdan keyin " +
          "ajralish yuz berdi va bir " +
          "tomon sog'lig'i sababli " +
          "ishlay olmaydi. Bunday " +
          "holatda ta'minot talab " +
          "qilish uchun asos bo'lishi " +
          "mumkin — lekin mehnatga " +
          "layoqatsizlik hujjat " +
          "bilan tasdiqlanishi kerak.",
        keyPoints: [
          "Er-xotin bir-biriga moddiy yordam berishi shart",
          "Ajralishdan keyin ham ta'minot huquqi saqlanishi mumkin",
          "Miqdor tomonlarning moddiy va oilaviy holatiga qarab belgilanadi",
          "Sud ozod qilish yoki muddat bilan cheklash huquqiga ega",
        ],
        warning:
          "Ta'minot talabi avtomatik " +
          "qanoatlantirilmaydi. " +
          "Muhtojlik va layoqatsizlik " +
          "hujjat bilan " +
          "isbotlanmasa, talab rad " +
          "etilishi mumkin.",
        lawRefs: [
          { code: "OK", article: "117" },
          { code: "OK", article: "118" },
          { code: "OK", article: "119" },
          { code: "OK", article: "120" },
          { code: "OK", article: "121" },
        ],
      },
      {
        heading: "Bolalar, qarindoshlar va o'gay ota-onalar",
        text:
          "Oila kodeksi ta'minot " +
          "majburiyatini keng doiraga " +
          "yoyadi va bu ko'pincha " +
          "bilinmaydi.\n\n" +
          "BOLALARNING MAJBURIYATI: " +
          "voyaga yetgan, mehnatga " +
          "layoqatli bolalar o'z " +
          "ota-onasini ta'minlashi " +
          "shart. Miqdor va tartib " +
          "qonunda belgilangan.\n\n" +
          "Bundan tashqari ota-onaning " +
          "ta'minoti uchun qo'shimcha " +
          "xarajatlarga jalb qilish " +
          "ham nazarda tutilgan " +
          "(masalan og'ir kasallik " +
          "holatida).\n\n" +
          "Muhim istisno: agar sud " +
          "ota-onaning ota-onalik " +
          "majburiyatlarini " +
          "bajarmaganini aniqlasa, " +
          "bolalar bu majburiyatdan " +
          "ozod qilinishi mumkin.\n\n" +
          "BOSHQA QARINDOSHLAR: " +
          "bobo va buvining " +
          "nevaralariga hamda " +
          "nevaralarning bobo-buviga " +
          "ta'minot berish " +
          "majburiyati; aka-uka va " +
          "opa-singillarning " +
          "bir-biriga majburiyati.\n\n" +
          "Bu majburiyatlar " +
          "SUBSIDIAR xarakterga " +
          "ega: ular odatda asosiy " +
          "majburiyat egalari " +
          "(ota-ona, bolalar) " +
          "bo'lmagan yoki " +
          "ta'minot bera " +
          "olmaydigan holatlarda " +
          "yuzaga keladi.\n\n" +
          "O'GAY OTA-ONALAR va " +
          "o'gay farzandlar " +
          "o'rtasidagi majburiyat " +
          "ham nazarda tutilgan, " +
          "shuningdek doimiy " +
          "tarbiyada bo'lganlarning " +
          "o'z tarbiyachilariga " +
          "ta'minot berish " +
          "majburiyati.",
        example:
          "Yolg'iz keksa shaxsning " +
          "voyaga yetgan farzandlari " +
          "bor, lekin ular yordam " +
          "bermayapti. Qonun bu " +
          "holatda ta'minot talab " +
          "qilish imkoniyatini " +
          "beradi — bu axloqiy " +
          "emas, huquqiy majburiyat.",
        keyPoints: [
          "Voyaga yetgan mehnatga layoqatli bolalar ota-onasini ta'minlashi shart",
          "Ota-onalik majburiyatini bajarmagan ota-ona bu huquqdan mahrum bo'lishi mumkin",
          "Bobo-buvi, nevaralar, aka-uka va opa-singillar majburiyati subsidiar",
          "O'gay ota-onalar va tarbiyachilar bo'yicha ham qoidalar mavjud",
        ],
        warning:
          "Qarindoshlardan ta'minot " +
          "talab qilishda ularning " +
          "moddiy holati ham " +
          "hisobga olinadi — " +
          "majburiyat cheksiz " +
          "emas.",
        lawRefs: [
          { code: "OK", article: "109" },
          { code: "OK", article: "110" },
          { code: "OK", article: "113" },
          { code: "OK", article: "123" },
          { code: "OK", article: "124" },
          { code: "OK", article: "127" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     7. Ota-onalik huquqlari
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "ota-ona-huquqlari",
    category: "family",
    level: "mid",
    order: 4070,
    title: "Ota-onalik huquq va majburiyatlari",
    desc:
      "Tarbiyalash huquqi va majburiyati, huquqdan mahrum qilish " +
      "va cheklash, tiklash — qanday asoslarda va qanday tartibda.",
    objectives: [
      "Ota-onalik huquq va majburiyatlarining mazmunini bilasiz",
      "Ota-onalik huquqidan mahrum qilish asoslarini bilasiz",
      "Mahrum qilish va cheklash farqini tushunasiz",
      "Huquqni tiklash imkoniyatini bilasiz",
    ],
    practicalSteps: [
      "Bola bilan ko'rishish tartibida nizo bo'lsa, uni kelishuv yoki sud orqali rasmiylashtiring",
      "Bolaning huquqi buzilayotgan bo'lsa vasiylik va homiylik organiga murojaat qiling",
      "Sud jarayonida bolaning manfaati nuqtai nazaridan dalil tayyorlang",
      "Ota-onalik huquqidan mahrum qilish oxirgi chora ekanini yodda tuting",
    ],
    sections: [
      {
        heading: "Ota-onalik huquqining mazmuni",
        text:
          "Ota-ona o'z bolalariga nisbatan " +
          "TENG huquq va majburiyatlarga " +
          "ega. Bu huquqlar bir vaqtning " +
          "o'zida majburiyat hamdir — " +
          "aynan shu jihat ota-onalik " +
          "huquqini boshqa huquqlardan " +
          "farqlaydi.\n\n" +
          "Asosiy mazmuni: bolalarni " +
          "tarbiyalash, ularning " +
          "sog'lig'i, jismoniy, ruhiy va " +
          "ma'naviy rivojlanishi haqida " +
          "g'amxo'rlik qilish, ta'lim " +
          "olishini ta'minlash, " +
          "huquq va manfaatlarini " +
          "himoya qilish.\n\n" +
          "MUHIM CHEGARA: ota-onalik " +
          "huquqi bolalar manfaatlariga " +
          "ZID tarzda amalga " +
          "oshirilishi mumkin emas. " +
          "Ya'ni bu huquq bola ustidan " +
          "hokimiyat emas, bola " +
          "manfaatiga xizmat " +
          "qiladigan vosita.\n\n" +
          "Ota-ona bolani qonunga " +
          "asoslanmasdan ushlab turgan " +
          "har qanday shaxsdan qaytarib " +
          "olishni talab qilish " +
          "huquqiga ega.\n\n" +
          "Alohida yashayotgan ota yoki " +
          "ona bola bilan ko'rishish, " +
          "tarbiyada qatnashish " +
          "huquqini saqlaydi.\n\n" +
          "Bobo, buvi, aka-uka, " +
          "opa-singil va boshqa yaqin " +
          "qarindoshlar ham bola " +
          "bilan ko'rishib turish " +
          "huquqiga ega — bu " +
          "ko'pincha bilinmaydi.",
        example:
          "Ajralishdan keyin bola " +
          "bilan yashayotgan tomon " +
          "buvi va bobo bilan " +
          "ko'rishishga to'sqinlik " +
          "qildi. Qonun yaqin " +
          "qarindoshlarning " +
          "ko'rishish huquqini " +
          "alohida tan oladi, " +
          "shuning uchun bu " +
          "masalani vasiylik " +
          "organi yoki sud orqali " +
          "hal qilish mumkin.",
        keyPoints: [
          "Ota-onalik huquqi bir vaqtning o'zida MAJBURIYAT hamdir",
          "Huquq bolalar manfaatlariga zid amalga oshirilishi mumkin emas",
          "Alohida yashovchi ota-ona ko'rishish va tarbiyada qatnashish huquqini saqlaydi",
          "Yaqin qarindoshlarning ham bola bilan ko'rishish huquqi bor",
        ],
        warning:
          "Bolani ikkinchi ota-onadan " +
          "yashirish yoki uni " +
          "ko'rishga to'sqinlik " +
          "qilish sudda jiddiy " +
          "salbiy baholanadi.",
        lawRefs: [
          { code: "OK", article: "71" },
          { code: "OK", article: "73" },
          { code: "OK", article: "74" },
          { code: "OK", article: "75" },
          { code: "OK", article: "77" },
          { code: "OK", article: "78" },
        ],
      },
      {
        heading: "Mahrum qilish, cheklash va tiklash",
        text:
          "Qonun ota-onalik huquqiga " +
          "aralashishning ikki darajasini " +
          "nazarda tutadi va ularni " +
          "farqlash muhim.\n\n" +
          "MAHRUM QILISH — eng qattiq " +
          "chora. Asoslari qonunda aniq " +
          "sanalgan va ular jiddiy: " +
          "ota-onalik majburiyatlarini " +
          "bajarmaslik, huquqlarni " +
          "suiiste'mol qilish, bolaga " +
          "shafqatsiz munosabatda " +
          "bo'lish va shunga o'xshash " +
          "holatlar.\n\n" +
          "Mahrum qilish FAQAT sud " +
          "tartibida amalga oshiriladi.\n\n" +
          "Oqibati: mahrum qilingan " +
          "ota-ona bolaga bog'liq " +
          "huquqlarni yo'qotadi. " +
          "Lekin TA'MINOT BERISH " +
          "MAJBURIYATI saqlanadi — " +
          "bu juda muhim nuqta.\n\n" +
          "CHEKLASH — yumshoqroq " +
          "chora. Sud bolaning eng " +
          "ustun manfaatlarini " +
          "hisobga olgan holda " +
          "ota-onani bola bilan " +
          "birga yashashdan " +
          "cheklashi mumkin. " +
          "Cheklash mahrum qilishga " +
          "yetarli asos " +
          "bo'lmaganda yoki " +
          "vaziyat vaqtinchalik " +
          "bo'lganda " +
          "qo'llaniladi.\n\n" +
          "TIKLASH imkoniyati " +
          "mavjud: ota-ona o'z " +
          "xulq-atvorini, turmush " +
          "tarzini va bolaga " +
          "munosabatini " +
          "o'zgartirgan bo'lsa, " +
          "huquqlar tiklanishi " +
          "mumkin. Xuddi shunday " +
          "cheklash ham bekor " +
          "qilinishi mumkin.\n\n" +
          "Favqulodda holat uchun " +
          "alohida mexanizm bor: " +
          "bolaning hayoti yoki " +
          "sog'lig'i bevosita xavf " +
          "ostida qolganda bolani " +
          "darhol olish nazarda " +
          "tutilgan.",
        example:
          "Ota-ona vaqtincha og'ir " +
          "holatda bo'lgani uchun " +
          "bolani tarbiyalay " +
          "olmadi. Bunday holatda " +
          "mahrum qilish emas, " +
          "cheklash " +
          "qo'llanilishi mumkin " +
          "— chunki vaziyat " +
          "o'zgarsa huquqlarni " +
          "tiklash yo'li ochiq " +
          "qoladi.",
        keyPoints: [
          "Mahrum qilish — eng qattiq chora, faqat sud tartibida",
          "Mahrum qilinganda ham TA'MINOT majburiyati saqlanadi",
          "Cheklash yumshoqroq va ko'pincha vaqtinchalik chora",
          "Ikkalasi ham tiklanishi/bekor qilinishi mumkin",
        ],
        warning:
          "Ota-onalik huquqidan " +
          "mahrum qilishni " +
          "ikkinchi tomonga " +
          "bosim vositasi " +
          "sifatida ishlatishga " +
          "urinish natija " +
          "bermaydi: sud " +
          "faqat bola " +
          "manfaatidan kelib " +
          "chiqadi.",
        lawRefs: [
          { code: "OK", article: "79" },
          { code: "OK", article: "80" },
          { code: "OK", article: "81" },
          { code: "OK", article: "82" },
          { code: "OK", article: "83" },
          { code: "OK", article: "87" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     8. Bola huquqlari
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "bola-himoyasi",
    category: "family",
    level: "basic",
    order: 4080,
    title: "Bolaning huquqlari va himoyasi",
    desc:
      "Oilada yashash, fikr bildirish, ism olish, mulkiy " +
      "huquqlar va himoya — bola qanday huquqlarga ega.",
    objectives: [
      "Bolaning shaxsiy huquqlarini sanab bera olasiz",
      "Bolaning mulkiy huquqlarini va ularni boshqarish tartibini bilasiz",
      "Bola o'z huquqini qanday himoya qila olishini bilasiz",
      "Vasiylik va homiylik organining rolini bilasiz",
    ],
    practicalSteps: [
      "Bolaning nomiga mulk rasmiylashtirsangiz, uni tasarruf etish qoidalarini oldindan aniqlang",
      "Bola huquqi buzilayotganini ko'rsangiz vasiylik va homiylik organiga xabar bering",
      "Bolaga taalluqli qarorlarda uning fikrini so'rang — bu qonuniy talab",
      "Bolaning hujjatlarini (tug'ilganlik guvohnomasi va h.k.) tartibli saqlang",
    ],
    sections: [
      {
        heading: "Bolaning shaxsiy huquqlari",
        text:
          "Oila kodeksi bolani huquq " +
          "subyekti sifatida ko'radi — " +
          "ya'ni u ota-onaning " +
          "«mulki» emas, o'z " +
          "huquqlariga ega shaxs.\n\n" +
          "Asosiy huquqlar quyidagilar.\n\n" +
          "OILADA YASHASH VA " +
          "TARBIYALANISH huquqi: har " +
          "bir bola oilada yashash, " +
          "o'z ota-onasini bilish, " +
          "ular tomonidan " +
          "g'amxo'rlik ko'rish " +
          "huquqiga ega.\n\n" +
          "KO'RISHISH huquqi: bola " +
          "otasi, onasi, bobosi, " +
          "buvisi, aka-uka va " +
          "opa-singillari hamda " +
          "boshqa qarindoshlari " +
          "bilan ko'rishish " +
          "huquqiga ega. Bu huquq " +
          "ota-onaning ajralishiga " +
          "bog'liq emas.\n\n" +
          "HIMOYAGA bo'lgan huquq: " +
          "bola o'z huquqi va " +
          "qonuniy manfaatlarini " +
          "himoya qilish huquqiga " +
          "ega. Muhim tafsilot — " +
          "bola ota-onasining " +
          "suiiste'moli holatida " +
          "vasiylik va homiylik " +
          "organiga mustaqil " +
          "murojaat qilishi " +
          "mumkin.\n\n" +
          "O'Z FIKRINI IFODA ETISH " +
          "huquqi: oilada " +
          "bolaning manfaatlariga " +
          "taalluqli har qanday " +
          "masala hal " +
          "qilinayotganda uning " +
          "fikri hisobga " +
          "olinadi.\n\n" +
          "ISM, OTA ISMI VA " +
          "FAMILIYA olish " +
          "huquqi ham " +
          "kafolatlangan.",
        example:
          "Ota-ona bolaning ta'lim " +
          "yo'nalishini u bilan " +
          "maslahatlashmasdan " +
          "hal qilmoqchi bo'ldi. " +
          "Qonun bolaning " +
          "manfaatiga taalluqli " +
          "masalada uning " +
          "fikrini so'rashni " +
          "talab qiladi — bu " +
          "shakliy emas, " +
          "haqiqiy huquq.",
        keyPoints: [
          "Bola — huquq subyekti, ota-onaning «mulki» emas",
          "Qarindoshlar bilan ko'rishish huquqi ajralishga bog'liq emas",
          "Bola vasiylik va homiylik organiga mustaqil murojaat qilishi mumkin",
          "Bolaning fikri unga taalluqli masalalarda hisobga olinadi",
        ],
        warning:
          "Bolani ota-onadan " +
          "biriga qarshi " +
          "qo'yish uning ruhiy " +
          "holatiga zarar " +
          "yetkazadi va sud " +
          "tomonidan salbiy " +
          "baholanadi.",
        lawRefs: [
          { code: "OK", article: "65" },
          { code: "OK", article: "66" },
          { code: "OK", article: "67" },
          { code: "OK", article: "68" },
          { code: "OK", article: "69" },
        ],
      },
      {
        heading: "Bolaning mulkiy huquqlari",
        text:
          "Bu qism ko'pincha " +
          "e'tibordan chetda qoladi, " +
          "lekin amalda juda muhim.\n\n" +
          "Asosiy qoida: ota-ona va " +
          "bolalarning ALOHIDA-ALOHIDA " +
          "mulki bo'lishi mumkin. " +
          "Ya'ni bola mulkdor bo'la " +
          "oladi va uning mulki " +
          "ota-onaning mulki " +
          "hisoblanmaydi.\n\n" +
          "Ota-ona hayotligida " +
          "bolalar ularning " +
          "mol-mulkiga nisbatan " +
          "avtomatik huquqqa ega " +
          "bo'lmaydi — bu ham " +
          "teskari tomondan " +
          "to'g'ri.\n\n" +
          "Voyaga yetmagan bolalar " +
          "qonunda belgilangan " +
          "tartibda xususiy mulkka " +
          "ega bo'lishi mumkin: " +
          "meros, hadya, o'z " +
          "mehnati bilan " +
          "topilgan mablag'.\n\n" +
          "BOSHQARISH VA TASARRUF " +
          "ETISH masalasi eng " +
          "muhim: voyaga yetmagan " +
          "bolalarning xususiy " +
          "mulkini ota-ona yoki " +
          "farzandlikka oluvchi " +
          "boshqaradi, lekin " +
          "belgilangan " +
          "cheklovlar doirasida.\n\n" +
          "Amaliy natijasi: bola " +
          "nomidagi ko'chmas " +
          "mulkni sotish yoki " +
          "garovga qo'yish " +
          "qo'shimcha ruxsatlarni " +
          "talab qiladi. Bu " +
          "bolaning manfaatini " +
          "himoya qilish " +
          "mexanizmi.\n\n" +
          "Ota-ona va bolalar " +
          "o'rtasidagi mulkiy " +
          "nizolar ham qonunda " +
          "tartibga solingan.",
        example:
          "Bola nomiga uy " +
          "rasmiylashtirilgan " +
          "edi, ota-ona uni " +
          "sotmoqchi bo'ldi. " +
          "Bunday bitim " +
          "qo'shimcha ruxsatsiz " +
          "amalga oshirilmaydi — " +
          "bu bolaning mulkini " +
          "himoya qiladi va " +
          "xaridor uchun ham " +
          "muhim tekshiruv " +
          "nuqtasi.",
        keyPoints: [
          "Ota-ona va bolaning mulki ALOHIDA bo'lishi mumkin",
          "Bola meros, hadya va o'z mehnati bilan mulkdor bo'la oladi",
          "Bolaning mulkini ota-ona cheklovlar doirasida boshqaradi",
          "Bola nomidagi ko'chmas mulk bitimlari qo'shimcha ruxsat talab qiladi",
        ],
        warning:
          "Bola nomiga mulk " +
          "rasmiylashtirish " +
          "soliq yoki " +
          "kreditorlardan " +
          "yashirish yo'li " +
          "sifatida " +
          "ishlatilmasligi " +
          "kerak: keyin uni " +
          "sotish uchun " +
          "ruxsat olish " +
          "qiyin bo'ladi.",
        lawRefs: [
          { code: "OK", article: "90" },
          { code: "OK", article: "91" },
          { code: "OK", article: "93" },
          { code: "OK", article: "94" },
          { code: "OK", article: "95" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     9. Otalikni belgilash
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "otalikni-belgilash",
    category: "family",
    level: "mid",
    order: 4090,
    title: "Nasl-nasabni belgilash va otalik",
    desc:
      "Bolaning nasl-nasabi qanday belgilanadi, otalikni ixtiyoriy " +
      "tan olish va sud tartibida belgilash, e'tiroz bildirish.",
    objectives: [
      "Nasl-nasab qanday asoslarda belgilanishini bilasiz",
      "Otalikni ixtiyoriy tan olish tartibini bilasiz",
      "Otalikni sud tartibida belgilash imkoniyatini bilasiz",
      "Otalik to'g'risida e'tiroz bildirish tartibini bilasiz",
    ],
    practicalSteps: [
      "Bola tug'ilganda nasl-nasabni darhol rasmiylashtiring — keyinchalik bu qiyinlashadi",
      "Nikohda bo'lmagan holatda otalikni ixtiyoriy tan olish arizasini bering",
      "Sud tartibida belgilash kerak bo'lsa, barcha dalillarni oldindan to'plang",
      "Nasl-nasab rasmiylashtirilmasa aliment va meros huquqi ham yuzaga kelmasligini yodda tuting",
    ],
    sections: [
      {
        heading: "Nasl-nasab qanday belgilanadi",
        text:
          "Bolaning nasl-nasabini " +
          "belgilash — huquqiy jihatdan " +
          "hal qiluvchi qadam. Undan " +
          "ta'minot, meros va boshqa " +
          "ko'p huquqlar kelib " +
          "chiqadi.\n\n" +
          "ONALIK odatda sodda " +
          "belgilanadi: bolaning shu " +
          "onadan tug'ilganligi " +
          "fuqarolik holati " +
          "dalolatnomalarini qayd " +
          "etish organida " +
          "tasdiqlanadi.\n\n" +
          "OTALIK ikki yo'l bilan " +
          "belgilanishi mumkin.\n\n" +
          "Birinchisi — IXTIYORIY " +
          "TAN OLISH: bolaning onasi " +
          "bilan nikohda bo'lmagan " +
          "shaxs ariza berish " +
          "orqali otalikni tan " +
          "olishi mumkin. Bu eng " +
          "sodda va tez yo'l.\n\n" +
          "Ikkinchisi — SUD " +
          "TARTIBIDA belgilash: " +
          "o'zaro nikohda " +
          "bo'lmagan ota-onadan " +
          "bola tug'ilgan " +
          "taqdirda, otalik sud " +
          "tartibida " +
          "belgilanishi mumkin.\n\n" +
          "Sud tartibida ish " +
          "ko'rilganda turli " +
          "dalillar hisobga " +
          "olinadi: birga " +
          "yashash, umumiy " +
          "xo'jalik yuritish, " +
          "bolani birgalikda " +
          "tarbiyalash yoki " +
          "ta'minlash, " +
          "shuningdek otalikni " +
          "tasdiqlovchi boshqa " +
          "dalillar.\n\n" +
          "Amaliy jihatdan eng " +
          "muhimi: nasl-nasab " +
          "rasmiylashtirilmasa, " +
          "bola aliment va meros " +
          "huquqidan mahrum " +
          "bo'lib qolishi mumkin.",
        example:
          "Ota-ona rasmiy nikohda " +
          "bo'lmagan va bola " +
          "tug'ilganda otalik " +
          "rasmiylashtirilmadi. " +
          "Yillar o'tib aliment " +
          "talab qilmoqchi " +
          "bo'lganda, avval " +
          "otalikni belgilash " +
          "kerak bo'ladi — bu " +
          "esa qo'shimcha vaqt " +
          "va dalil talab " +
          "qiladi.",
        keyPoints: [
          "Nasl-nasabdan ta'minot, meros va boshqa huquqlar kelib chiqadi",
          "Otalik ixtiyoriy tan olish yoki sud tartibida belgilanadi",
          "Sudda birga yashash, umumiy xo'jalik va tarbiya dalillari hisobga olinadi",
          "Rasmiylashtirmaslik bolani huquqlardan mahrum qilishi mumkin",
        ],
        warning:
          "Otalikni belgilashni " +
          "keyinga qoldirish " +
          "bolaning zarariga " +
          "ishlaydi. Vaqt " +
          "o'tgani sari dalil " +
          "to'plash " +
          "qiyinlashadi.",
        lawRefs: [
          { code: "OK", article: "60" },
          { code: "OK", article: "61" },
          { code: "OK", article: "62" },
        ],
      },
      {
        heading: "E'tiroz bildirish va oqibatlari",
        text:
          "Tug'ilishni yozish " +
          "daftaridagi yozuvga " +
          "e'tiroz bildirish " +
          "imkoniyati mavjud, lekin " +
          "u belgilangan tartibda " +
          "va qonundagi shartlar " +
          "asosida amalga " +
          "oshiriladi.\n\n" +
          "E'tiroz bildirish " +
          "huquqiga ega bo'lgan " +
          "shaxslar doirasi " +
          "qonunda belgilangan.\n\n" +
          "Muhim cheklov mavjud: " +
          "otalikni tan olishda " +
          "ma'lum holatlarni " +
          "bilgan shaxsning " +
          "keyinchalik e'tiroz " +
          "bildirish imkoniyati " +
          "cheklanishi mumkin. " +
          "Bu bolaning barqaror " +
          "huquqiy holatini " +
          "himoya qilish uchun.\n\n" +
          "Amaliy jihatdan bu " +
          "shuni bildiradi: " +
          "otalikni tan olish " +
          "jiddiy va uzoq " +
          "muddatli huquqiy " +
          "oqibatlarga ega " +
          "qadam. Uni " +
          "shoshilinch yoki " +
          "bosim ostida " +
          "qilish tavsiya " +
          "etilmaydi.\n\n" +
          "Nasl-nasab " +
          "belgilangach, bola " +
          "va ota o'rtasida " +
          "to'liq huquqiy " +
          "aloqa yuzaga " +
          "keladi: ta'minot " +
          "majburiyati, meros " +
          "huquqi, familiya va " +
          "boshqalar.\n\n" +
          "Nizo sudda hal " +
          "etilgunga qadar " +
          "aliment undirish " +
          "imkoniyati ham " +
          "nazarda tutilgan — " +
          "bu bolani " +
          "jarayon davomida " +
          "himoyasiz " +
          "qoldirmaslik uchun.",
        example:
          "Otalik " +
          "belgilanishi " +
          "bo'yicha sud ishi " +
          "uzoq davom etmoqda. " +
          "Qonun bu davrda " +
          "ham bolani " +
          "ta'minotsiz " +
          "qoldirmaslik " +
          "uchun mexanizm " +
          "nazarda tutgan — " +
          "bu bolaning " +
          "manfaatiga " +
          "qaratilgan " +
          "qoida.",
        keyPoints: [
          "Tug'ilish yozuviga e'tiroz bildirish belgilangan tartibda amalga oshiriladi",
          "E'tiroz huquqiga ega shaxslar doirasi qonunda belgilangan",
          "Ayrim holatlarda e'tiroz bildirish imkoniyati cheklanadi",
          "Nizo hal etilgunga qadar aliment undirish mexanizmi mavjud",
        ],
        warning:
          "Otalikni tan olish " +
          "arizasini bosim " +
          "ostida yoki " +
          "shoshilinch " +
          "imzolash keyin " +
          "jiddiy huquqiy " +
          "oqibatlarga olib " +
          "keladi va uni " +
          "bekor qilish " +
          "oson emas.",
        lawRefs: [
          { code: "OK", article: "63" },
          { code: "OK", article: "112" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     10. Farzandlikka olish va vasiylik
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "farzandlikka-olish",
    category: "family",
    level: "advanced",
    order: 4100,
    title: "Farzandlikka olish, vasiylik va patronat",
    desc:
      "Ota-ona qaramog'idan mahrum bolalarni joylashtirish " +
      "shakllari: farzandlikka olish, vasiylik, homiylik, patronat.",
    objectives: [
      "Farzandlikka olishning shartlarini va tartibini bilasiz",
      "Farzandlikka olishning huquqiy oqibatlarini bilasiz",
      "Vasiylik va homiylik farqini bilasiz",
      "Patronat (oilaga tarbiyaga berish) nima ekanligini bilasiz",
    ],
    practicalSteps: [
      "Farzandlikka olish jarayonini vasiylik va homiylik organidan boshlang",
      "Bolaning roziligi talab qilinadigan yoshni hisobga oling",
      "Farzandlikka olish sirini saqlash qonun bilan himoyalanganini yodda tuting",
      "Har bir shaklning huquqiy oqibatlari boshqacha ekanini oldindan tushunib oling",
    ],
    sections: [
      {
        heading: "Farzandlikka olish: shartlar va tartib",
        text:
          "Farzandlikka olishga faqat " +
          "voyaga yetmagan bolalarga " +
          "nisbatan va faqat ularning " +
          "manfaatlarini ko'zlab yo'l " +
          "qo'yiladi. Bu asosiy " +
          "tamoyil.\n\n" +
          "Farzandlikka olishi mumkin " +
          "bo'lgan shaxslar doirasi " +
          "qonunda belgilangan: voyaga " +
          "yetgan erkak yoki ayol " +
          "fuqarolar. Ayrim toifadagi " +
          "shaxslar esa farzandlikka " +
          "ololmaydi.\n\n" +
          "USTUNLIK HUQUQI belgilangan: " +
          "qonun ayrim shaxslarga " +
          "(masalan bolaning " +
          "qarindoshlariga) ustunlik " +
          "beradi.\n\n" +
          "BOLANING ROZILIGI: " +
          "belgilangan yoshga " +
          "yetgan bolani " +
          "farzandlikka olish " +
          "uning roziligi bilan " +
          "amalga oshiriladi. " +
          "Ayrim istisno " +
          "holatlarda rozilik " +
          "talab qilinmasligi " +
          "mumkin.\n\n" +
          "OTA-ONANING ROZILIGI " +
          "ham talab qilinadi, " +
          "lekin qonunda " +
          "sanalgan hollarda " +
          "(masalan ota-onalik " +
          "huquqidan mahrum " +
          "qilinganda) rozilik " +
          "shart emas.\n\n" +
          "SIR SAQLASH: " +
          "farzandlikka olishni " +
          "sir saqlash qonun " +
          "bilan himoya " +
          "qilinadi. Bu " +
          "bolaning ruhiy " +
          "farovonligini " +
          "himoya qilish " +
          "mexanizmi.\n\n" +
          "Farzandlikka olish " +
          "sud tartibida " +
          "amalga oshiriladi " +
          "va tug'ilishni qayd " +
          "etish daftariga " +
          "tegishli " +
          "o'zgartirish " +
          "kiritiladi.",
        example:
          "Er-xotin turmush " +
          "o'rtog'ining oldingi " +
          "nikohdan bo'lgan " +
          "bolasini " +
          "farzandlikka olmoqchi. " +
          "Bunday holatda " +
          "ikkinchi turmush " +
          "o'rtog'ining " +
          "roziligi masalasi " +
          "va bolaning fikri " +
          "hisobga olinadi.",
        keyPoints: [
          "Farzandlikka olish faqat voyaga yetmagan bolalarga va ular manfaatini ko'zlab",
          "Belgilangan yoshga yetgan bolaning roziligi talab qilinadi",
          "Ota-onaning roziligi kerak, lekin qonundagi hollarda shart emas",
          "Farzandlikka olishni sir saqlash qonun bilan himoyalanadi",
        ],
        warning:
          "Farzandlikka olish " +
          "jarayonini " +
          "vositachilar orqali " +
          "«tezlashtirish» " +
          "urinishlari " +
          "qonunga zid va " +
          "jiddiy " +
          "javobgarlikka " +
          "olib keladi.",
        lawRefs: [
          { code: "OK", article: "151" },
          { code: "OK", article: "152" },
          { code: "OK", article: "153" },
          { code: "OK", article: "154" },
          { code: "OK", article: "155" },
          { code: "OK", article: "159" },
        ],
      },
      {
        heading: "Oqibatlar, vasiylik, homiylik va patronat",
        text:
          "FARZANDLIKKA OLISHNING " +
          "HUQUQIY OQIBATI eng " +
          "kuchli: farzandlikka " +
          "olingan bolalar barcha " +
          "shaxsiy va mulkiy " +
          "huquqlarda " +
          "farzandlikka " +
          "oluvchilarning o'z " +
          "farzandlariga " +
          "tenglashtiriladi.\n\n" +
          "Ya'ni bu doimiy va " +
          "to'liq huquqiy " +
          "aloqa. Farzandlikka " +
          "olishni bekor " +
          "qilish mumkin, " +
          "lekin faqat sud " +
          "tartibida va " +
          "qonunda sanalgan " +
          "asoslarda.\n\n" +
          "VASIYLIK VA " +
          "HOMIYLIK boshqacha " +
          "mexanizm. Ular " +
          "yetim bolalarni va " +
          "ota-ona " +
          "qaramog'idan " +
          "mahrum bo'lgan " +
          "bolalarni tarbiyalash, " +
          "ularning huquq va " +
          "manfaatlarini " +
          "himoya qilish " +
          "maqsadida " +
          "belgilanadi.\n\n" +
          "Ikkisining farqi " +
          "YOSHDA: vasiylik " +
          "kichikroq " +
          "yoshdagilarga, " +
          "homiylik esa " +
          "kattaroq " +
          "yoshdagilarga " +
          "nisbatan " +
          "qo'llaniladi.\n\n" +
          "Vasiylik va " +
          "homiylik tuman " +
          "yoki shahar hokimi " +
          "qarori bilan " +
          "belgilanadi — " +
          "ya'ni sud tartibi " +
          "emas, ma'muriy " +
          "tartib.\n\n" +
          "PATRONAT (oilaga " +
          "tarbiyaga berish) — " +
          "uchinchi shakl: " +
          "ota-ona " +
          "qaramog'idan " +
          "mahrum bolalar " +
          "maxsus kelishuv " +
          "asosida oilaga " +
          "tarbiyaga " +
          "beriladi.\n\n" +
          "Uch shaklning " +
          "farqi amalda " +
          "muhim: " +
          "farzandlikka " +
          "olishda to'liq " +
          "huquqiy aloqa " +
          "yuzaga keladi, " +
          "vasiylik va " +
          "patronatda esa " +
          "aloqa " +
          "cheklangan va " +
          "ko'pincha " +
          "vaqtinchalik " +
          "bo'ladi.",
        example:
          "Yaqin qarindoshi " +
          "vafot etgach, " +
          "shaxs bolani o'z " +
          "tarbiyasiga olishni " +
          "xohladi. Uning " +
          "oldida uch variant " +
          "bor: farzandlikka " +
          "olish (to'liq va " +
          "doimiy aloqa), " +
          "vasiylik yoki " +
          "patronat. Tanlov " +
          "vaziyatga va " +
          "bolaning " +
          "manfaatiga " +
          "bog'liq.",
        keyPoints: [
          "Farzandlikka olingan bola o'z farzandga TENGLASHTIRILADI",
          "Vasiylik va homiylik yoshga qarab farqlanadi",
          "Vasiylik/homiylik hokim qarori bilan, farzandlikka olish sud bilan belgilanadi",
          "Patronat — oilaga tarbiyaga berishning kelishuvga asoslangan shakli",
        ],
        warning:
          "Har bir shaklning " +
          "meros va ta'minot " +
          "bo'yicha oqibatlari " +
          "turlicha. Tanlashdan " +
          "oldin bu " +
          "farqlarni aniq " +
          "bilib olish " +
          "kerak.",
        lawRefs: [
          { code: "OK", article: "165" },
          { code: "OK", article: "169" },
          { code: "OK", article: "171" },
          { code: "OK", article: "173" },
          { code: "OK", article: "174" },
          { code: "OK", article: "194" },
        ],
      },
    ],
  },
];

module.exports = { LESSONS };
