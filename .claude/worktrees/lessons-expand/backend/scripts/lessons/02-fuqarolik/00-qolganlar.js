"use strict";
/**
 * MODUL 2 — FUQAROLIK HUQUQI ASOSLARI (10 dars)
 *
 * Manba: Fuqarolik kodeksi 1-qism (FK, 386 modda) va 2-qism
 * (FK2, 810 modda).
 *
 * Nima uchun bu modul katta: fuqarolik huquqi kundalik hayotning
 * eng ko'p qismini qamraydi — mulk, bitim, vakillik, zarar, muddat.
 * Boshqa modullar (shartnoma, meros, uy-joy) aynan shu asosga
 * tayanadi, shuning uchun bu modul ulardan OLDIN o'qilishi kerak.
 */

const LESSONS = [
  /* ═══════════════════════════════════════════════════════════════
     1. Fuqarolik huquqi asoslari  (MAVJUD KALIT — kengaytirildi)
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "fuqarolik-asoslari",
    category: "civil",
    level: "basic",
    order: 2010,
    title: "Fuqarolik huquqi asoslari",
    desc:
      "Fuqarolik huquqi nimani tartibga soladi, huquqni himoya " +
      "qilishning qanday usullari bor va ulardan qanday foydalaniladi.",
    objectives: [
      "Fuqarolik huquqi qanday munosabatlarni qamrashini aniq bilasiz",
      "Huquqni himoya qilishning barcha usullarini sanab bera olasiz",
      "O'z huquqingizni o'zingiz himoya qilish chegarasini tushunasiz",
      "Qaysi holatda sudga, qaysi holatda muzokaraga borish kerakligini bilasiz",
    ],
    practicalSteps: [
      "Nizoda avval o'zingizga savol bering: menga nima kerak — pul, narsa, yoki harakatni to'xtatish? Talab shundan kelib chiqadi",
      "Har qanday kelishuvni yozma shaklda tuzing, hatto tanish odam bilan ham",
      "Nizo boshlanganda barcha yozishmalarni (xabar, xat, kvitansiya) saqlab qo'ying",
      "Da'vo muddatini tekshiring — vaqt o'tib ketsa eng adolatli talab ham himoyasiz qolishi mumkin",
    ],
    sections: [
      {
        heading: "Fuqarolik huquqi nimani tartibga soladi",
        text:
          "Fuqarolik huquqi — teng huquqli ishtirokchilar o'rtasidagi " +
          "mulkiy va shu bilan bog'liq nomulkiy munosabatlarni " +
          "tartibga soluvchi soha. Bu yerdagi kalit so'z — TENGLIK. " +
          "Fuqarolik munosabatida bir tomon ikkinchisiga buyruq " +
          "bera olmaydi; ular kelishuv asosida ish yuritadi.\n\n" +
          "Shu jihat fuqarolik huquqini ma'muriy huquqdan " +
          "ajratadi. Soliq inspektori bilan munosabatingiz — " +
          "bo'ysunish munosabati (u qaror chiqaradi, siz " +
          "bajarasiz). Sotuvchi bilan munosabatingiz esa teng: " +
          "hech biri ikkinchisiga majburlay olmaydi, faqat " +
          "kelishishi mumkin.\n\n" +
          "Fuqarolik huquqi doirasiga nimalar kiradi: mulkka " +
          "egalik va uni tasarruf etish, shartnomalar, " +
          "zarar yetkazish natijasida yuzaga keladigan " +
          "majburiyatlar, meros, shaxsiy nomulkiy huquqlar " +
          "(sha'n, obro', ism).\n\n" +
          "Muhim tamoyil — fuqarolar va yuridik shaxslar o'z " +
          "fuqarolik huquqlarini o'z xohishiga ko'ra amalga " +
          "oshiradi. Ya'ni huquqdan foydalanish majburiy emas: " +
          "talab qo'yish yoki qo'ymaslik sizning tanlovingiz.",
        example:
          "Ikki tanish o'rtasida pul qarz berish kelishuvi " +
          "tuzildi. Bu — fuqarolik munosabati: ikkalasi ham " +
          "teng, shartlarni o'zlari belgilaydi. Agar qarz " +
          "qaytarilmasa, davlat o'z tashabbusi bilan aralashmaydi " +
          "— talabni qarz beruvchi o'zi qo'yishi kerak. Aynan " +
          "shu «o'z xohishiga ko'ra» tamoyilining amaliy " +
          "ko'rinishi.",
        keyPoints: [
          "Fuqarolik huquqi TENG ishtirokchilar munosabatini tartibga soladi",
          "Ma'muriy munosabatdan farqi: bo'ysunish emas, kelishuv",
          "Qamrovi: mulk, shartnoma, zarar, meros, shaxsiy nomulkiy huquqlar",
          "Huquqdan foydalanish sizning tanlovingiz, majburiyat emas",
        ],
        warning:
          "Fuqarolik nizosida davlat organi o'z tashabbusi bilan " +
          "sizni himoya qilmaydi. «Ular o'zi ko'rib chiqadi» degan " +
          "kutish bilan vaqt yo'qotish — eng ko'p uchraydigan xato.",
        lawRefs: [
          { code: "FK", article: "2" },
          { code: "FK", article: "9" },
        ],
      },
      {
        heading: "Huquqni himoya qilish usullari",
        text:
          "Fuqarolik kodeksi himoya usullarining aniq ro'yxatini " +
          "beradi va bu ro'yxatni bilish amalda juda foydali — " +
          "chunki da'vo arizasida aynan TALAB shakli natijani " +
          "belgilaydi.\n\n" +
          "Asosiy usullar: huquqni tan olish; huquq buzilishidan " +
          "oldingi holatni tiklash; huquqni buzuvchi " +
          "harakatlarni to'xtatish; bitimni haqiqiy emas deb " +
          "topish; majburiyatni aynan bajarishga undash; " +
          "zararni qoplash; neustoyka undirish; ma'naviy " +
          "zararni qoplash.\n\n" +
          "Bu ro'yxatning amaliy ma'nosi shundaki, bitta " +
          "vaziyatda bir necha usul mavjud bo'lishi mumkin va " +
          "ular turli natija beradi. Masalan shartnoma " +
          "buzilganda siz ikki yo'ldan birini tanlaysiz: " +
          "majburiyatni bajarishga undash (ish bajarilsin) " +
          "yoki zararni qoplash (pul to'lansin). Ikkisi bir " +
          "vaqtda ko'pincha mos kelmaydi.\n\n" +
          "Himoyaning asosiy shakli — sud. Lekin qonun boshqa " +
          "yo'llarni ham tan oladi: ba'zi holatlarda huquq " +
          "ma'muriy tartibda ham himoya qilinadi.",
        example:
          "Pudratchi ta'mirni sifatsiz bajardi. Buyurtmachi " +
          "oldida bir necha talab varianti bor: kamchilikni " +
          "tekin tuzatishni talab qilish, narxni " +
          "kamaytirishni talab qilish yoki boshqa " +
          "ustaga tuzattirib xarajatni undirish. Qaysi " +
          "biri foydali — vaziyatga bog'liq, lekin ARIZADA " +
          "bittasi aniq tanlanishi kerak.",
        keyPoints: [
          "Qonun himoya usullarining aniq ro'yxatini beradi",
          "Bitta vaziyatda bir necha usul bo'lishi mumkin, natija esa har xil",
          "Da'voda talab ANIQ shakllantirilishi kerak",
          "Asosiy himoya shakli — sud tartibi",
        ],
        warning:
          "«Adolat tiklanishini so'rayman» degan noaniq talab " +
          "bilan da'vo bermang. Sud faqat aniq talab bo'yicha " +
          "qaror chiqaradi; noaniq talab ish ko'rilmasdan " +
          "qaytishiga sabab bo'ladi.",
        lawRefs: [
          { code: "FK", article: "11" },
          { code: "FK", article: "10" },
        ],
      },
      {
        heading: "O'z huquqini o'zi himoya qilish",
        text:
          "Fuqarolik kodeksi shaxsning o'z huquqlarini o'zi " +
          "himoya qilishiga yo'l qo'yadi. Bu sudga bormasdan, " +
          "o'z harakatlari bilan huquqni himoya qilish " +
          "imkoniyati.\n\n" +
          "Lekin bu imkoniyat qat'iy chegaraga ega: himoya " +
          "usuli huquqbuzarlik xarakteriga va tavsifiga mos " +
          "bo'lishi kerak, huquqbuzarlikni bartaraf etish " +
          "uchun zarur bo'lgan doiradan chiqmasligi kerak.\n\n" +
          "Amaldagi ma'nosi: mutanosiblik talabi. Kichik " +
          "huquqbuzarlikka katta javob qaytarish o'zi " +
          "huquqbuzarlikka aylanadi. Masalan qarzini " +
          "qaytarmagan shaxsning mol-mulkini o'zboshimchalik " +
          "bilan olib qo'yish — himoya emas, mustaqil " +
          "huquqbuzarlik.\n\n" +
          "O'zini o'zi himoya qilishning qonuniy shakllari " +
          "ko'proq PASSIV bo'ladi: kelishuvni bajarishni " +
          "to'xtatib turish, tovarni qabul qilmaslik, " +
          "to'lovni kechiktirish (agar shartnoma bunga " +
          "asos bersa). Aktiv jismoniy harakatlar esa faqat " +
          "zaruriy mudofaa va o'ta zarurat chegarasida.",
        example:
          "Tovar shartnomaga mos kelmasa, xaridor uni qabul " +
          "qilmaslikka va to'lovni to'xtatib turishga haqli — " +
          "bu qonuniy o'z-o'zini himoya. Ammo tovarni olib " +
          "qolib, ustiga pulni ham to'lamaslik allaqachon " +
          "boshqa masala: bu holatda xaridor o'zi " +
          "majburiyatini buzgan bo'ladi.",
        keyPoints: [
          "O'z huquqini o'zi himoya qilishga qonun yo'l qo'yadi",
          "Asosiy shart — MUTANOSIBLIK: javob buzilishga mos bo'lishi kerak",
          "Zarur doiradan chiqqan «himoya» o'zi huquqbuzarlik bo'ladi",
          "Qonuniy shakllar ko'proq passiv: bajarishni to'xtatish, qabul qilmaslik",
        ],
        warning:
          "Qarzni «o'zim undirib olaman» deb boshqaning " +
          "mol-mulkini olib qo'yish jinoiy javobgarlikka olib " +
          "kelishi mumkin — hatto qarz haqiqatan mavjud " +
          "bo'lsa ham. Undirish yo'li faqat sud va ijro " +
          "tartibi.",
        lawRefs: [{ code: "FK", article: "13" }],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     2. Fuqarolik huquqi subyektlari
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "fuqarolik-subyektlar",
    category: "civil",
    level: "basic",
    order: 2020,
    title: "Kim huquq egasi bo'la oladi: shaxslar",
    desc:
      "Jismoniy shaxs va yuridik shaxs, huquq layoqati, yuridik " +
      "shaxsning javobgarligi va turlari.",
    objectives: [
      "Jismoniy va yuridik shaxs o'rtasidagi farqni aniq bilasiz",
      "Huquq layoqati nima ekanligini va u qachon paydo bo'lishini bilasiz",
      "Yuridik shaxs qarzi uchun kim javob berishini tushunasiz",
      "Shartnoma tuzishdan oldin kontragentni qanday tekshirishni bilasiz",
    ],
    practicalSteps: [
      "Yuridik shaxs bilan shartnoma tuzishdan oldin uning ro'yxatdan o'tganini tekshiring",
      "Shartnomani imzolayotgan shaxsning VAKOLATINI so'rang: ustav, buyruq yoki ishonchnoma",
      "Shartnomada tomonning to'liq nomi va rekvizitlarini aniq yozing — nizoda kimni sudga chaqirish shu bilan aniqlanadi",
      "Mas'uliyati cheklangan jamiyat bilan ishlaganda risk chegarasini tushunib turing",
    ],
    sections: [
      {
        heading: "Jismoniy shaxs va huquq layoqati",
        text:
          "Fuqarolik huquqida ikki asosiy subyekt bor: jismoniy " +
          "shaxs (fuqaro) va yuridik shaxs (tashkilot). Davlat " +
          "ham ayrim holatlarda fuqarolik munosabatida qatnashadi.\n\n" +
          "Jismoniy shaxsga nisbatan ikki tushuncha ishlatiladi " +
          "va ularni farqlash muhim. HUQUQ LAYOQATI — huquq va " +
          "burchlarga ega bo'lish qobiliyati; u barcha " +
          "fuqarolarda TENG va tug'ilish bilan paydo bo'ladi. " +
          "MUOMALA LAYOQATI — o'z harakatlari bilan huquqlarni " +
          "amalga oshirish qobiliyati; u yoshga va holatga " +
          "bog'liq.\n\n" +
          "Bu farqning amaliy natijasi katta. Yangi tug'ilgan " +
          "bola mulkdor bo'la oladi (huquq layoqati bor), lekin " +
          "o'zi uy sotib olmaydi (muomala layoqati yo'q) — " +
          "uning nomidan qonuniy vakil ish yuritadi.\n\n" +
          "Huquq layoqati mazmuni keng: mulkka ega bo'lish, " +
          "meros qoldirish va olish, tadbirkorlik faoliyati " +
          "bilan shug'ullanish, bitimlar tuzish, majburiyatlarda " +
          "qatnashish, ijod erkinligi. Huquq layoqatini va " +
          "muomala layoqatini cheklashga faqat qonunda " +
          "belgilangan hollarda va tartibda yo'l qo'yiladi.",
        example:
          "Bobo nevarasi nomiga uy hadya qildi. Nevara — " +
          "mulkdor, chunki huquq layoqati tug'ilishdan mavjud. " +
          "Ammo bu uyni sotish uchun uning o'z imzosi yetarli " +
          "emas: voyaga yetmagan bo'lsa qonuniy vakil " +
          "qatnashadi va qo'shimcha ruxsat talab qilinishi " +
          "mumkin.",
        keyPoints: [
          "Huquq layoqati — huquqqa EGA bo'lish qobiliyati, hammada teng",
          "Muomala layoqati — huquqni O'ZI amalga oshirish qobiliyati, yoshga bog'liq",
          "Bola mulkdor bo'la oladi, lekin o'zi tasarruf etmaydi",
          "Layoqatni cheklash faqat qonunda belgilangan hollarda mumkin",
        ],
        warning:
          "Voyaga yetmagan yoki muomala layoqati cheklangan " +
          "shaxs bilan tuzilgan bitim haqiqiy emas deb " +
          "topilishi mumkin. Shuning uchun qarshi tomonning " +
          "layoqatiga e'tibor bermaslik xaridor uchun ham " +
          "xavfli.",
        lawRefs: [
          { code: "FK", article: "17" },
          { code: "FK", article: "18" },
          { code: "FK", article: "23" },
        ],
      },
      {
        heading: "Yuridik shaxs nima va u qanday paydo bo'ladi",
        text:
          "Yuridik shaxs — mustaqil mol-mulkka ega, o'z nomidan " +
          "huquq va burchlarga ega bo'la oladigan, sudda da'vogar " +
          "va javobgar bo'la oladigan tashkilot. U o'zining " +
          "ta'sis hujjatlarida nazarda tutilgan faoliyat " +
          "maqsadlariga muvofiq huquq layoqatiga ega bo'ladi.\n\n" +
          "Eng muhim g'oya — AJRALGANLIK. Yuridik shaxs uni " +
          "tashkil etgan shaxslardan alohida subyekt: uning " +
          "mol-mulki muassislar mol-mulkidan ajratilgan, " +
          "majburiyatlari ham alohida.\n\n" +
          "Yuridik shaxs davlat ro'yxatidan o'tkazilgan " +
          "paytdan boshlab vujudga keladi. Ya'ni «tashkilot " +
          "ochdik» degan gap yetarli emas — ro'yxatdan " +
          "o'tmaguncha yuridik shaxs mavjud emas.\n\n" +
          "Har bir yuridik shaxs o'zining tashkiliy-huquqiy " +
          "shaklini bildiradigan nomiga va joylashgan yeriga " +
          "ega bo'ladi. Shakl nomda ko'rsatilishi — shakliy " +
          "talab emas: u qarshi tomonga siz kim bilan ish " +
          "yuritayotganingizni va risk darajasini bildiradi.",
        example:
          "Shartnomada tomon sifatida faqat «Ahmadjon aka» " +
          "yoki tashkilotning norasmiy nomi yozilgan bo'lsa, " +
          "nizoda kimga da'vo qo'yish kerakligi noaniq bo'lib " +
          "qoladi. To'g'ri yozuv — to'liq rasmiy nom, " +
          "tashkiliy-huquqiy shakl va rekvizitlar bilan.",
        keyPoints: [
          "Yuridik shaxs — muassislardan AJRALGAN mustaqil subyekt",
          "U davlat ro'yxatidan o'tkazilgan paytdan vujudga keladi",
          "Huquq layoqati ta'sis hujjatlaridagi maqsadlar bilan bog'liq",
          "Nomda tashkiliy-huquqiy shakl ko'rsatiladi",
        ],
        warning:
          "Ro'yxatdan o'tmagan tashkilot nomidan tuzilgan " +
          "shartnoma jiddiy xavf tug'diradi: nizo chiqsa " +
          "da'voni kimga qo'yish noaniq bo'ladi. Kontragentni " +
          "tekshirish shartnomadan OLDIN qilinadigan ish.",
        lawRefs: [
          { code: "FK", article: "41" },
          { code: "FK", article: "42" },
          { code: "FK", article: "46" },
        ],
      },
      {
        heading: "Yuridik shaxsning javobgarligi va turlari",
        text:
          "Yuridik shaxs o'z majburiyatlari bo'yicha o'ziga " +
          "qarashli butun mol-mulk bilan javob beradi. Bu " +
          "qoidaning teskari tomoni ham bor va u amalda " +
          "muhim: qarz uchun javobgarlik tashkilot mol-mulki " +
          "bilan cheklanadi.\n\n" +
          "Shu sababli tashkiliy-huquqiy shaklni bilish " +
          "kerak. Mas'uliyati cheklangan jamiyatda " +
          "ishtirokchilar jamiyat qarzlari uchun o'z shaxsiy " +
          "mol-mulki bilan javob bermaydi — ularning riski " +
          "qo'shgan hissasi bilan cheklangan. Boshqa " +
          "shakllarda javobgarlik hajmi boshqacha bo'lishi " +
          "mumkin.\n\n" +
          "Yuridik shaxslar ikki katta guruhga bo'linadi: " +
          "tijoratchi (asosiy maqsadi foyda olish) va " +
          "notijorat (foyda olish asosiy maqsad emas — " +
          "muassasalar, jamoat birlashmalari).\n\n" +
          "Tashkilot majburiyatlarini bajara olmasa, qonunda " +
          "belgilangan hollarda to'lovga qobiliyatsizlik " +
          "(bankrotlik) tartibi qo'llaniladi. Bu tartibda " +
          "kreditorlar talablari belgilangan navbat bilan " +
          "qondiriladi.",
        example:
          "Xaridor tashkilotga oldindan to'lov qildi, " +
          "tashkilot esa tovarni bermay, keyin faoliyatni " +
          "to'xtatdi. Agar tashkilotda mol-mulk qolmagan " +
          "bo'lsa, undirish amalda qiyin bo'ladi — " +
          "ishtirokchilarning shaxsiy uyi hisobidan " +
          "undirish umumiy qoida bo'yicha mumkin emas. " +
          "Aynan shu sababdan oldindan to'lov riski " +
          "shartnomada baholanishi kerak.",
        keyPoints: [
          "Yuridik shaxs o'z majburiyatlari uchun butun mol-mulki bilan javob beradi",
          "MChJ ishtirokchilarining riski qo'shgan hissasi bilan cheklangan",
          "Tijoratchi va notijorat tashkilotlar farqlanadi",
          "To'lovga qobiliyatsizlik holatida talablar navbat bilan qondiriladi",
        ],
        warning:
          "«Direktor shaxsan javob beradi» degan taxminga " +
          "tayanmang — umumiy qoida boshqacha. Katta " +
          "summali shartnomada ta'minot (garov, kafillik, " +
          "bosqichli to'lov) haqida oldindan o'ylash " +
          "ancha ishonchli.",
        lawRefs: [
          { code: "FK", article: "48" },
          { code: "FK", article: "62" },
          { code: "FK", article: "57" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     3. Muomala layoqati
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "muomala-layoqati",
    category: "civil",
    level: "mid",
    order: 2030,
    title: "Muomala layoqati: yosh va cheklovlar",
    desc:
      "Kim mustaqil bitim tuza oladi: yosh bosqichlari, " +
      "emansipatsiya, layoqatsizlik va vasiylik.",
    objectives: [
      "Yosh bosqichlariga qarab bitim tuzish imkoniyatini bilasiz",
      "Emansipatsiya nima ekanligini va qachon qo'llanilishini bilasiz",
      "Muomalaga layoqatsizlik va layoqatni cheklash farqini tushunasiz",
      "Vasiylik va homiylik qanday ishlashini bilasiz",
    ],
    practicalSteps: [
      "Voyaga yetmagan bilan bitim tuzayotgan bo'lsangiz, qonuniy vakilning yozma roziligini oling",
      "Bolangiz nomidagi mulkni tasarruf etishdan oldin qanday ruxsat kerakligini aniqlang",
      "Yaqiningiz o'z harakatlarini boshqara olmasa, vasiylik masalasini rasmiy yo'l bilan hal qiling",
      "Katta summali bitimda qarshi tomonning layoqatiga ishonch hosil qiling",
    ],
    sections: [
      {
        heading: "Yosh bosqichlari va bitim tuzish imkoniyati",
        text:
          "Muomala layoqati — fuqaroning o'z harakatlari bilan " +
          "fuqarolik huquqlariga ega bo'lish, ularni amalga " +
          "oshirish va o'zi uchun burchlar yaratish qobiliyati. " +
          "U to'liq hajmda voyaga yetish bilan yuzaga keladi.\n\n" +
          "Qonun voyaga yetmaganlarni ikki guruhga ajratadi va " +
          "ularning imkoniyatlari sezilarli farq qiladi.\n\n" +
          "Kichik yoshdagilar (o'n to'rt yoshga to'lmaganlar) " +
          "uchun bitimlarni asosan qonuniy vakillar " +
          "(ota-onalar, vasiylar) tuzadi. Ularning mustaqil " +
          "harakatlari juda tor doirada — kundalik maydakash " +
          "bitimlar darajasida.\n\n" +
          "O'n to'rtdan o'n sakkiz yoshgacha bo'lganlar " +
          "ancha keng imkoniyatga ega: ular ko'p bitimlarni " +
          "qonuniy vakillarning roziligi bilan tuzadi, " +
          "ba'zilarini esa mustaqil — masalan o'z ish haqi " +
          "va stipendiyasini tasarruf etish.\n\n" +
          "Amaliy xulosa: yosh shaxs bilan bitim tuzayotganda " +
          "rozilikni YOZMA olish kerak. Rozilik og'zaki " +
          "bo'lsa, keyin uni isbotlash deyarli imkonsiz.",
        example:
          "O'n olti yoshli o'quvchi o'zi ishlab topgan puliga " +
          "telefon sotib oldi — bu o'z daromadini tasarruf " +
          "etish doirasida. Ammo shu yoshdagi shaxs uy sotib " +
          "olsa yoki sotsa, vaziyat butunlay boshqacha: " +
          "bunday bitim qonuniy vakil ishtirokini va " +
          "qo'shimcha kafolatlarni talab qiladi.",
        keyPoints: [
          "To'liq muomala layoqati voyaga yetish bilan yuzaga keladi",
          "14 yoshgacha: bitimlarni asosan qonuniy vakillar tuzadi",
          "14-18 yosh: ko'p bitimlar rozilik bilan, ba'zilari mustaqil",
          "Rozilik har doim YOZMA olinishi kerak",
        ],
        warning:
          "Voyaga yetmagan shaxs tuzgan bitim, agar talab " +
          "qilinadigan rozilik olinmagan bo'lsa, haqiqiy emas " +
          "deb topilishi mumkin. Bunda tovarni ham, pulni ham " +
          "qaytarish masalasi ko'tariladi.",
        lawRefs: [
          { code: "FK", article: "22" },
          { code: "FK", article: "27" },
          { code: "FK", article: "29" },
        ],
      },
      {
        heading: "Emansipatsiya — muddatidan oldin to'liq layoqat",
        text:
          "Qonun ayrim holatlarda voyaga yetmagan shaxsni " +
          "to'liq muomala layoqatli deb tan olish imkonini " +
          "beradi. Bu institut emansipatsiya deb ataladi.\n\n" +
          "Asos ikki xil bo'lishi mumkin: shaxs mehnat " +
          "shartnomasi bo'yicha ishlayotgan bo'lsa yoki " +
          "ota-onasi hamda qonuniy vakillarining roziligi " +
          "bilan tadbirkorlik faoliyati bilan " +
          "shug'ullanayotgan bo'lsa.\n\n" +
          "Emansipatsiyaning mantig'i sodda: agar shaxs " +
          "amalda mustaqil iqtisodiy faoliyat yuritayotgan " +
          "bo'lsa, uni har bir bitim uchun rozilik " +
          "olishga majburlash faoliyatni imkonsiz qilib " +
          "qo'yadi.\n\n" +
          "Natijasi ham jiddiy: emansipatsiya qilingan " +
          "shaxs o'z majburiyatlari uchun MUSTAQIL javob " +
          "beradi. Ya'ni bu faqat huquq bermaydi, " +
          "javobgarlikni ham yuklaydi — ota-ona endi uning " +
          "bitimlari bo'yicha javobgar bo'lmaydi.\n\n" +
          "Shuning uchun emansipatsiya avtomatik afzallik " +
          "emas: u mustaqillik bilan birga risk ham " +
          "keltiradi.",
        example:
          "O'n olti yoshdan mehnat shartnomasi bilan " +
          "ishlayotgan shaxs mustaqil xarid qiladi va " +
          "xizmatlar uchun shartnoma tuzadi. Bunda " +
          "kelishuv buzilsa javobgarlik ham unda bo'ladi " +
          "— ota-onaga o'tmaydi. Bu emansipatsiyaning ikki " +
          "tomonli tabiatini ko'rsatadi.",
        keyPoints: [
          "Emansipatsiya — muddatidan oldin to'liq layoqat berish",
          "Asos: mehnat shartnomasi yoki rozilik bilan tadbirkorlik",
          "Natija: shaxs o'z majburiyatlari uchun mustaqil javob beradi",
          "Bu huquq bilan birga javobgarlikni ham yuklaydi",
        ],
        warning:
          "Emansipatsiya o'z-o'zidan sodir bo'lmaydi — u " +
          "belgilangan tartibda rasmiylashtiriladi. " +
          "«Ishlayapti, demak katta hisoblanadi» degan " +
          "taxmin bitim uchun yetarli asos emas.",
        lawRefs: [{ code: "FK", article: "28" }],
      },
      {
        heading: "Layoqatsizlik, cheklash va vasiylik",
        text:
          "Muomala layoqati faqat yosh bilan bog'liq emas. " +
          "Qonun ikki alohida holatni ham nazarda tutadi va " +
          "ularni farqlash muhim.\n\n" +
          "Birinchisi — MUOMALAGA LAYOQATSIZ deb topish. " +
          "Asos: ruhiy kasallik yoki aqli zaiflik oqibatida " +
          "shaxs o'z harakatlarining ahamiyatini tushunmasligi " +
          "yoki ularni boshqara olmasligi. Bu holat sud " +
          "tomonidan belgilanadi va shaxs nomidan " +
          "bitimlarni vasiy tuzadi.\n\n" +
          "Ikkinchisi — muomala layoqatini CHEKLASH. Asos " +
          "boshqacha: spirtli ichimliklarni yoki " +
          "giyohvandlik vositalarini suiiste'mol qilish " +
          "natijasida oilani og'ir moddiy ahvolga solish. " +
          "Bu yerda shaxs layoqatsiz deb topilmaydi — " +
          "uning layoqati faqat cheklanadi va u homiy " +
          "roziligi bilan ish yuritadi.\n\n" +
          "Vasiylik va homiylik aynan shu maqsadga xizmat " +
          "qiladi: muomalaga layoqatsiz yoki to'liq " +
          "layoqatli bo'lmagan fuqarolarning huquq va " +
          "manfaatlarini himoya qilish.\n\n" +
          "Ikkalasi ham FAQAT sud qarori bilan " +
          "belgilanadi — oila a'zolarining qarori bilan emas.",
        example:
          "Oila a'zosi mol-mulkni zarariga tasarruf " +
          "qilayotgani sababli qarindoshlar uning " +
          "bitimlarini «bekor qilishga» harakat qildi. " +
          "Bunday yo'l ishlamaydi: shaxsning layoqatini " +
          "cheklash uchun sudga murojaat qilish va " +
          "qonundagi asosni isbotlash kerak.",
        keyPoints: [
          "Layoqatsiz deb topish asosi — ruhiy holat, faqat sud belgilaydi",
          "Layoqatni cheklash asosi — suiiste'mol va oilaning og'ir ahvoli",
          "Layoqatsizda vasiy, cheklanganda homiy ishtirok etadi",
          "Ikkala holat ham faqat sud qarori bilan rasmiylashtiriladi",
        ],
        warning:
          "Sud qarori bo'lmaguncha shaxs to'liq layoqatli " +
          "hisoblanadi va uning bitimlari kuchda qoladi. " +
          "Shu sababli oilada bunday muammo bo'lsa, " +
          "rasmiy yo'lni kechiktirmaslik kerak.",
        lawRefs: [
          { code: "FK", article: "30" },
          { code: "FK", article: "31" },
          { code: "FK", article: "32" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     4. Mulk huquqi  (MAVJUD KALIT — kengaytirildi)
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "mulk-huquqi",
    category: "civil",
    level: "basic",
    order: 2040,
    title: "Mulk huquqi va uning chegaralari",
    desc:
      "Mulk huquqi nimani beradi, qanday paydo bo'ladi va bekor " +
      "bo'ladi, mulkdorning majburiyatlari nima.",
    objectives: [
      "Mulk huquqining uch vakolatini va ularning farqini bilasiz",
      "Mulk huquqi qanday asoslarda paydo bo'lishini bilasiz",
      "Mulk qanday hollarda olib qo'yilishi mumkinligini bilasiz",
      "Mulkdorning majburiyatlarini va foydalanish chegarasini tushunasiz",
    ],
    practicalSteps: [
      "Ko'chmas mulk bo'yicha huquqingiz ro'yxatdan o'tganini tekshirib ko'ring",
      "Xarid qilishda avvalgi egasining huquqi hujjat bilan tasdiqlanganini so'rang",
      "Mulkka oid barcha hujjatni bir joyda saqlang: nizoda birinchi so'raladigan narsa shu",
      "Mulkdan foydalanish qo'shnilarga zarar keltirmasligini oldindan hisobga oling",
    ],
    sections: [
      {
        heading: "Mulk huquqining mazmuni: uch vakolat",
        text:
          "Mulk huquqi — shaxsning o'ziga qarashli mol-mulkka " +
          "o'z xohishi bilan va o'z manfaatlarini ko'zlab " +
          "egalik qilish, undan foydalanish va uni tasarruf " +
          "etish huquqi.\n\n" +
          "Uchta vakolatni ajratib tushunish amalda muhim, " +
          "chunki ular ALOHIDA ham mavjud bo'lishi mumkin.\n\n" +
          "EGALIK QILISH — narsa sizning haqiqiy " +
          "hukmronligingizda bo'lishi. FOYDALANISH — narsadan " +
          "naf olish, uning xususiyatlarini ishlatish. " +
          "TASARRUF ETISH — narsaning taqdirini hal qilish: " +
          "sotish, hadya qilish, garovga qo'yish, yo'q qilish.\n\n" +
          "Aynan tasarruf etish vakolati mulkdorni boshqa " +
          "huquq egalaridan farqlaydi. Ijarachi narsaga " +
          "egalik qiladi va foydalanadi, lekin uni sota " +
          "olmaydi — tasarruf etish vakolati unda yo'q.\n\n" +
          "Mulk daxlsiz va qonun bilan qo'riqlanadi. " +
          "Daxlsizlik mulkdorga qarshi turgan barcha " +
          "subyektlarga qaratilgan: hech kim mulkdorning " +
          "huquqini o'zboshimchalik bilan buza olmaydi. " +
          "O'zbekistonda mulk xususiy va ommaviy shakllarda " +
          "bo'ladi.",
        example:
          "Uyni ijaraga bergan mulkdor egalik va " +
          "foydalanishni ijarachiga o'tkazdi, lekin " +
          "tasarruf etish o'zida qoldi. Shu sababli uyni " +
          "sotish huquqi mulkdorda, ijarachida esa yo'q — " +
          "hatto u yerda uzoq yashagan bo'lsa ham.",
        keyPoints: [
          "Mulk huquqi uch vakolatdan iborat: egalik, foydalanish, tasarruf etish",
          "Tasarruf etish vakolati mulkdorni boshqalardan farqlaydi",
          "Mulk daxlsiz va barcha subyektlarga qarshi qo'riqlanadi",
          "Mulk xususiy va ommaviy shakllarda bo'ladi",
        ],
        warning:
          "Uzoq muddat foydalanish o'z-o'zidan mulkdor " +
          "qilmaydi. Mulk huquqi hujjat va (ko'chmas mulkda) " +
          "ro'yxatga olish bilan tasdiqlanadi.",
        lawRefs: [
          { code: "FK", article: "164" },
          { code: "FK", article: "166" },
          { code: "FK", article: "167" },
        ],
      },
      {
        heading: "Mulk huquqi qanday paydo bo'ladi",
        text:
          "Fuqarolik kodeksi mulk huquqining paydo bo'lish " +
          "asoslarini sanaydi. Asosiylari: mehnat faoliyati; " +
          "yangi mol-mulk yaratish; bitimlar (oldi-sotdi, " +
          "ayirboshlash, hadya); meros; qonunda taqiqlanmagan " +
          "boshqa asoslar.\n\n" +
          "Amaliy jihatdan eng muhim savol — mulk huquqi " +
          "QACHON o'tadi. Umumiy qoida bo'yicha shartnoma " +
          "asosida mol-mulk oluvchida mulk huquqi narsa " +
          "topshirilgan paytdan boshlanadi, agar qonun yoki " +
          "shartnomada boshqacha belgilanmagan bo'lsa.\n\n" +
          "Ko'chmas mulkda esa qoida boshqacha va bu juda " +
          "muhim: ko'chmas mulkka egalik huquqi va boshqa " +
          "ashyoviy huquqlar davlat ro'yxatidan o'tkazilishi " +
          "kerak. Ya'ni uyni sotib olish uchun pul to'lash " +
          "va kalitni olish YETARLI EMAS — ro'yxatga " +
          "olinmaguncha huquq to'liq shakllanmagan " +
          "hisoblanadi.\n\n" +
          "Alohida asos — egalik qilish huquqini vujudga " +
          "keltiruvchi muddat: mulkdor bo'lmagan shaxs " +
          "mol-mulkka qonunda belgilangan uzoq muddat " +
          "davomida ochiq va uzluksiz egalik qilsa, " +
          "belgilangan shartlarda mulk huquqiga ega bo'lishi " +
          "mumkin.",
        example:
          "Xaridor uy uchun to'lovni to'liq amalga oshirdi, " +
          "kalitni oldi va ko'chib o'tdi, lekin hujjatni " +
          "ro'yxatdan o'tkazmadi. Bu holatda sotuvchining " +
          "kreditorlari yoki merosxo'rlari bilan nizo " +
          "chiqsa, xaridorning holati ancha zaif bo'ladi. " +
          "Ro'yxatga olish shakliy tafsilot emas — " +
          "himoyaning asosi.",
        keyPoints: [
          "Asoslar: mehnat, yaratish, bitim, meros va boshqalar",
          "Ko'char mulkda huquq odatda topshirish paytida o'tadi",
          "Ko'chmas mulkda DAVLAT RO'YXATIDAN o'tkazish talab qilinadi",
          "Uzoq va ochiq egalik ham qonundagi shartlarda asos bo'lishi mumkin",
        ],
        warning:
          "Ko'chmas mulk bitimini «keyin rasmiylashtiramiz» " +
          "deb qoldirish eng qimmat xatolardan biri. " +
          "Ro'yxatga olinmagan huquq uchinchi shaxslarga " +
          "qarshi kuchsiz bo'ladi.",
        lawRefs: [
          { code: "FK", article: "182" },
          { code: "FK", article: "185" },
          { code: "FK", article: "84" },
          { code: "FK", article: "187" },
        ],
      },
      {
        heading: "Mulk huquqining chegaralari va olib qo'yish",
        text:
          "Mulk huquqi keng, lekin cheksiz emas. Mulkdorning " +
          "o'z huquqlarini amalga oshirishi boshqa " +
          "shaxslarning huquqlarini va qonun bilan " +
          "qo'riqlanadigan manfaatlarini buzmasligi kerak.\n\n" +
          "Bundan tashqari mulkdorda MAJBURIYAT ham bor: " +
          "o'ziga qarashli mol-mulkni saqlash vazifasi va " +
          "uni saqlash xarajatlarini ko'tarish. Ya'ni mulk " +
          "faqat huquq bermaydi, yuk ham yuklaydi.\n\n" +
          "Mulk huquqining bekor bo'lish asoslari ham " +
          "belgilangan: mulkdorning ixtiyoriy tasarrufi, " +
          "mol-mulkning yo'q bo'lishi hamda qonunda " +
          "nazarda tutilgan hollarda majburiy olib qo'yish.\n\n" +
          "Majburiy olib qo'yishning asosiy shakllari: " +
          "majburiyatlar bo'yicha undirish (sud qarori " +
          "asosida), davlat ehtiyojlari uchun olib qo'yish, " +
          "musodara (jinoyat yoki huquqbuzarlik uchun sud " +
          "qarori bilan) va natsionalizatsiya.\n\n" +
          "Muhim kafolat: mulk huquqi bekor qilinganda " +
          "mol-mulk qiymatini aniqlash va zararlarni " +
          "undirib olish huquqi nazarda tutilgan. Ya'ni " +
          "davlat ehtiyoji uchun olib qo'yish tekin emas.",
        example:
          "Yer uchastkasi davlat ehtiyoji uchun olib " +
          "qo'yilishi kerak bo'ldi. Mulkdorning huquqi " +
          "olib qo'yishga qarshi turish emas, balki " +
          "ADOLATLI baholash va zararlar qoplanishini " +
          "talab qilish. Shuning uchun asosiy kurash " +
          "ko'pincha baho ustida boradi, olib qo'yish " +
          "fakti ustida emas.",
        keyPoints: [
          "Mulkdan foydalanish boshqalarning huquqini buzmasligi kerak",
          "Mulkdorda mol-mulkni saqlash va xarajat ko'tarish majburiyati bor",
          "Majburiy olib qo'yish faqat qonunda ko'rsatilgan hollarda",
          "Olib qo'yishda qiymatni to'lash va zararni qoplash huquqi mavjud",
        ],
        warning:
          "Sud qarori asosida undirish ham mulkni olib " +
          "qo'yish shakli. Shu sababli qarz majburiyatlarini " +
          "e'tiborsiz qoldirish oxir-oqibat mulkka " +
          "ta'sir qiladi.",
        lawRefs: [
          { code: "FK", article: "172" },
          { code: "FK", article: "174" },
          { code: "FK", article: "197" },
          { code: "FK", article: "205" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     5. Umumiy mulk
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "mulk-turlari",
    category: "civil",
    level: "mid",
    order: 2050,
    title: "Umumiy mulk: ulush va birgalikdagi mulk",
    desc:
      "Mol-mulk bir necha shaxsga tegishli bo'lsa: ulushni " +
      "aniqlash, tasarruf etish, taqsimlash va imtiyozli sotib olish.",
    objectives: [
      "Ulushli va birgalikdagi mulk farqini aniq bilasiz",
      "Umumiy mulkni tasarruf etish uchun nima kerakligini bilasiz",
      "Imtiyozli sotib olish huquqini tushunasiz va qo'llay olasiz",
      "Umumiy mulkni qanday taqsimlash mumkinligini bilasiz",
    ],
    practicalSteps: [
      "Umumiy mulkda ulushingiz hujjatda aniq ko'rsatilganini tekshiring",
      "Ulushni sotishdan oldin qolgan mulkdorlarni YOZMA xabardor qiling",
      "Umumiy mulkni tasarruf etish bo'yicha kelishuvni yozma shaklda tuzing",
      "Xarajatlarni kim to'laganini kvitansiyalar bilan qayd etib boring",
    ],
    sections: [
      {
        heading: "Ulushli va birgalikdagi mulk",
        text:
          "Ikki yoki undan ortiq shaxsning egaligida bo'lgan " +
          "mol-mulk ularga umumiy mulk huquqi asosida " +
          "tegishli bo'ladi. Umumiy mulk ikki turga " +
          "bo'linadi va bu farq amalda katta ahamiyatga ega.\n\n" +
          "ULUSHLI MULKDA har bir ishtirokchining ulushi " +
          "aniqlangan bo'ladi (masalan uchdan bir, ikkidan " +
          "bir). Ulush aniq bo'lgani uchun uni alohida " +
          "tasarruf etish, sotish yoki garovga qo'yish " +
          "mumkin.\n\n" +
          "BIRGALIKDAGI MULKDA ulushlar oldindan " +
          "aniqlanmagan. Bu shakl asosan qonunda " +
          "ko'rsatilgan hollarda uchraydi — masalan " +
          "er-xotinning nikoh davomida orttirgan mol-mulki.\n\n" +
          "Umumiy qoida: mol-mulk umumiy bo'lsa va " +
          "ulushlar qonun asosida yoki ishtirokchilar " +
          "kelishuvi bilan belgilanmagan bo'lsa, ulushlar " +
          "teng deb hisoblanadi.\n\n" +
          "Umumiy mulkdan keladigan hosil, mahsulot va " +
          "daromadlar ham umumiy hisoblanadi va odatda " +
          "ulushga muvofiq taqsimlanadi. Xuddi shunday, " +
          "har bir mulkdor umumiy mol-mulk bo'yicha " +
          "soliqlar va boshqa xarajatlarni o'z ulushiga " +
          "mos ravishda ko'taradi.",
        example:
          "Uch aka-uka merosga uy oldi va ulushlar " +
          "belgilanmadi. Bunday holatda ulushlar teng deb " +
          "hisoblanadi. Ammo agar bittasi ta'mirga ko'p " +
          "pul sarflagan bo'lsa, bu avtomatik ulushni " +
          "oshirmaydi — xarajat va ulush turli masalalar, " +
          "shuning uchun kelishuvni yozma qilish zarur.",
        keyPoints: [
          "Umumiy mulk ikki turda: ulushli va birgalikdagi",
          "Ulushli mulkda ulush aniq va alohida tasarruf etilishi mumkin",
          "Ulushlar belgilanmagan bo'lsa teng deb hisoblanadi",
          "Daromad ham, xarajat ham ulushga mos taqsimlanadi",
        ],
        warning:
          "Umumiy mulkka pul sarflaganingizni kvitansiya " +
          "bilan qayd etmasangiz, keyin taqsimlashda uni " +
          "hisobga olish qiyin bo'ladi. Og'zaki kelishuvga " +
          "tayanmang.",
        lawRefs: [
          { code: "FK", article: "216" },
          { code: "FK", article: "217" },
          { code: "FK", article: "220" },
          { code: "FK", article: "221" },
        ],
      },
      {
        heading: "Umumiy mulkni tasarruf etish va imtiyozli sotib olish",
        text:
          "Bu qism amalda eng ko'p nizo keltiradigan joy. " +
          "Asosiy qoida: ulushli mulkdagi mol-mulk uning " +
          "BARCHA ishtirokchilarining kelishuvi bilan " +
          "tasarruf etiladi.\n\n" +
          "Ya'ni umumiy uyni sotish uchun barcha " +
          "mulkdorlarning roziligi kerak. Bitta mulkdor " +
          "«mening ulushim ko'p» degan asos bilan boshqasini " +
          "chetlab o'ta olmaydi.\n\n" +
          "Egalik qilish va foydalanish tartibi ham " +
          "ishtirokchilar kelishuvi bilan belgilanadi, " +
          "kelishuvga erishilmasa — sud tartibida.\n\n" +
          "Bu qoidaning muhim istisnosi bor: har bir " +
          "ishtirokchi O'Z ULUSHINI mustaqil tasarruf " +
          "etishga haqli. Lekin bu yerda IMTIYOZLI SOTIB " +
          "OLISH huquqi ishga tushadi.\n\n" +
          "Mulkdorlardan biri o'z ulushini boshqa shaxsga " +
          "sotayotganda, qolgan mulkdorlar sotilayotgan " +
          "ulushni imtiyozli tarzda sotib olish huquqiga " +
          "ega. Amalda bu shuni bildiradi: ulushni begona " +
          "shaxsga sotishdan oldin qolgan mulkdorlarni " +
          "narx va shartlar haqida xabardor qilish shart. " +
          "Bu talab bajarilmasa, bitimga sudda e'tiroz " +
          "bildirish mumkin.",
        example:
          "To'rt mulkdorli uyda bittasi o'z ulushini " +
          "begona odamga sotdi va qolganlarni xabardor " +
          "qilmadi. Qolgan mulkdorlar imtiyozli sotib " +
          "olish huquqi buzilgani asosida sudga murojaat " +
          "qilib, o'zlarini xaridor o'rniga qo'yishni " +
          "talab qilishi mumkin.",
        keyPoints: [
          "Umumiy mol-mulkni tasarruf etish BARCHA ishtirokchilar kelishuvi bilan",
          "Har bir ishtirokchi o'z ULUSHINI mustaqil sotishi mumkin",
          "Ulush sotilganda qolgan mulkdorlarda imtiyozli sotib olish huquqi bor",
          "Xabardor qilish majburiyati bajarilmasa bitimga e'tiroz bildirish mumkin",
        ],
        warning:
          "Xabardor qilishni og'zaki qilmang. Yozma " +
          "xabarnoma (narx va shartlar ko'rsatilgan) " +
          "keyinchalik bitimni himoya qiladigan yagona " +
          "dalil bo'ladi.",
        lawRefs: [
          { code: "FK", article: "218" },
          { code: "FK", article: "219" },
          { code: "FK", article: "224" },
        ],
      },
      {
        heading: "Taqsimlash va ulush ajratish",
        text:
          "Umumiy mulk abadiy davom etishi shart emas. " +
          "Ulushli mulkdagi mol-mulk ishtirokchilar " +
          "o'rtasida ularning kelishuviga muvofiq " +
          "taqsimlanishi mumkin; ishtirokchilardan biri " +
          "esa umumiy mol-mulkdan o'z ulushini ajratib " +
          "olishni talab qilishga haqli.\n\n" +
          "Ikki tushunchani farqlash kerak. TAQSIMLASH — " +
          "umumiy mulk butunlay tugatiladi, har kim o'z " +
          "qismini oladi. ULUSH AJRATISH — bir ishtirokchi " +
          "chiqadi, qolganlar uchun umumiy mulk davom " +
          "etadi.\n\n" +
          "Kelishuvga erishilmasa, masala sud tartibida " +
          "hal qilinadi. Sud amaliyotidagi asosiy savol — " +
          "mol-mulkni ayni tabiatda bo'lish mumkinmi. " +
          "Ba'zi narsalar bo'linmaydi (masalan bir " +
          "xonali kvartira), bunda ulush pul bilan " +
          "qoplanishi mumkin.\n\n" +
          "Birgalikdagi mulkda esa taqsimlashdan oldin " +
          "avval ulushlar aniqlanadi, keyin bo'lish " +
          "amalga oshiriladi.\n\n" +
          "Alohida holat — kreditorning talabi: " +
          "ishtirokchining kreditori uning umumiy " +
          "mol-mulkdagi ulushiga undiruv qaratilishini " +
          "talab qilishi mumkin.",
        example:
          "Ikki merosxo'r uyni bo'lishmoqchi, lekin uy " +
          "jismonan bo'linmaydi. Yechim variantlari: " +
          "bittasi ikkinchisining ulushini pul bilan " +
          "sotib oladi, yoki uy sotilib pul ulushga mos " +
          "taqsimlanadi. Sud odatda mol-mulkning " +
          "xususiyatidan kelib chiqib eng amaliy " +
          "variantni tanlaydi.",
        keyPoints: [
          "Taqsimlash umumiy mulkni tugatadi, ulush ajratish esa faqat bir ishtirokchini chiqaradi",
          "Kelishuv bo'lmasa masala sud tartibida hal qilinadi",
          "Bo'linmaydigan mol-mulkda ulush pul bilan qoplanishi mumkin",
          "Kreditor ishtirokchining ulushiga undiruv qaratishni talab qilishi mumkin",
        ],
        warning:
          "Umumiy mulkni «amalda bo'lib olish» (kim qaysi " +
          "xonada yashashi) yuridik taqsimlash emas. " +
          "Hujjat o'zgarmasa, sotishda va merosda yana " +
          "umumiy mulk qoidalari qo'llaniladi.",
        lawRefs: [
          { code: "FK", article: "223" },
          { code: "FK", article: "226" },
          { code: "FK", article: "227" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     6. Mulkni himoya qilish
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "mulk-himoya",
    category: "civil",
    level: "advanced",
    order: 2060,
    title: "Mulkni himoya qilish: vindikatsiya va negator da'vo",
    desc:
      "Mol-mulk boshqa shaxsda qolib ketsa yoki foydalanishga " +
      "to'sqinlik qilinsa — qanday da'vo qo'yish kerak.",
    objectives: [
      "Vindikatsiya va negator da'vo o'rtasidagi farqni aniq bilasiz",
      "Vijdonli oluvchi tushunchasini va uning ta'sirini tushunasiz",
      "Qanday holatda qaysi da'vo turini tanlash kerakligini bilasiz",
      "Mulkdor bo'lmagan ega ham himoyaga haqli ekanini bilasiz",
    ],
    practicalSteps: [
      "Da'vo turini to'g'ri tanlang: narsa qo'ldan ketganmi (vindikatsiya) yoki foydalanishga xalaqit berilyaptimi (negator)",
      "Mulk huquqingizni tasdiqlovchi hujjatlarni oldindan to'plang — bu da'voning asosi",
      "Narsa kimda ekanini va qanday o'tganini aniqlashtiring: bu vijdonlilik masalasiga ta'sir qiladi",
      "Da'vo muddatiga e'tibor bering; ayrim talablarga esa u umuman qo'llanilmaydi",
    ],
    sections: [
      {
        heading: "Vindikatsiya: narsani qonunsiz egalikdan talab qilish",
        text:
          "Vindikatsiya da'vosi mulkdorning eng kuchli " +
          "quroli. Uning mohiyati: mulkdor o'z mol-mulkini " +
          "boshqa shaxsning qonunsiz egaligidan talab qilib " +
          "olishga haqli.\n\n" +
          "Bu da'vo qo'llanilishi uchun uchta shart bir " +
          "vaqtda bo'lishi kerak. Birinchisi — siz " +
          "mulkdorsiz (yoki qonuniy egasiz) va bunga " +
          "hujjatli asos bor. Ikkinchisi — narsa aynan " +
          "SAQLANIB TURGAN va aniqlanishi mumkin. " +
          "Uchinchisi — u boshqa shaxs egaligida qonuniy " +
          "asossiz turgan.\n\n" +
          "Ikkinchi shart amalda tez-tez e'tibordan " +
          "chetda qoladi. Agar narsa yo'q qilingan yoki " +
          "boshqa narsaga aylantirilgan bo'lsa, " +
          "vindikatsiya ishlamaydi — bu holatda talab " +
          "zararni qoplash bo'ladi.\n\n" +
          "Muhim tushuncha — VIJDONLI OLUVCHI. Bu narsani " +
          "sotib olayotganda uni sotishga haqli " +
          "bo'lmagan shaxsdan olganini bilmagan va " +
          "bilishi lozim bo'lmagan shaxs. Qonun bunday " +
          "oluvchini ma'lum darajada himoya qiladi va " +
          "shu sababli mulkdorning talabi har doim " +
          "avtomatik qondirilmaydi.\n\n" +
          "Narsa qaytarilganda daromadlar va xarajatlar " +
          "masalasi ham hal qilinadi: egalik davrida " +
          "olingan daromad va sarflangan zaruriy " +
          "xarajatlar hisobga olinadi.",
        example:
          "Shaxs avtomobilini vaqtincha tanishiga " +
          "foydalanishga berdi, u esa uni uchinchi " +
          "shaxsga sotdi. Mulkdor avtomobilni " +
          "qaytarishni talab qilishi mumkin, lekin " +
          "xaridor vijdonli oluvchi bo'lsa, natija " +
          "narsaning qanday chiqib ketganiga (mulkdor " +
          "o'zi bergani yoki o'g'irlanganiga) bog'liq " +
          "bo'ladi.",
        keyPoints: [
          "Vindikatsiya — narsani qonunsiz egalikdan talab qilib olish",
          "Uchta shart: mulkdorlik, narsaning saqlanib turishi, egalikning asossizligi",
          "Narsa yo'q bo'lgan bo'lsa vindikatsiya emas, zarar qoplash talab qilinadi",
          "Vijdonli oluvchi qonun tomonidan ma'lum darajada himoyalanadi",
        ],
        warning:
          "Narsani «o'zim borib olib kelaman» degan yo'l " +
          "xavfli: bu o'zboshimchalik hisoblanadi. " +
          "Qonuniy yo'l — da'vo va sud qarori asosida " +
          "ijro.",
        lawRefs: [
          { code: "FK", article: "228" },
          { code: "FK", article: "230" },
        ],
      },
      {
        heading: "Negator da'vo: foydalanishga to'sqinlikni bartaraf etish",
        text:
          "Ikkinchi asosiy himoya vositasi — negator " +
          "da'vo. U egalik qilishdan mahrum etish bilan " +
          "BOG'LIQ BO'LMAGAN huquqbuzarliklardan himoya " +
          "qiladi.\n\n" +
          "Ya'ni narsa sizda qolgan, siz uni yo'qotmagan, " +
          "lekin undan normal foydalanish imkonsiz " +
          "bo'lgan. Aynan shu holatda negator da'vo " +
          "qo'llaniladi.\n\n" +
          "Amaliy misollari ko'p: qo'shni sizning " +
          "yeringizga suv oqizadi, kirish yo'lini " +
          "to'sib qo'yadi, devor qurib yorug'likni " +
          "to'sadi, doimiy shovqin bilan yashashga " +
          "xalaqit beradi.\n\n" +
          "Negator da'voning talabi ham boshqacha " +
          "shakllanadi: siz narsani qaytarishni emas, " +
          "HARAKATNI TO'XTATISHNI yoki buzilishni " +
          "bartaraf etishni so'raysiz. Masalan: " +
          "«to'siqni olib tashlashni majburlang», " +
          "«suv oqizishni to'xtatishni majburlang».\n\n" +
          "Muhim jihat: mulkdor bo'lmagan ega ham " +
          "himoyaga haqli. Mol-mulkka meros qilib " +
          "qoldirish huquqi, xo'jalik yuritish yoki " +
          "boshqa asosda ega bo'lgan shaxs ham " +
          "o'z egaligini himoya qila oladi — hatto " +
          "mulkdorga qarshi ham.",
        example:
          "Qo'shni umumiy yo'lakka o'z narsalarini " +
          "qo'yib, kirishni qiyinlashtirdi. Bu " +
          "holatda mulkni «qaytarish» talab qilinmaydi " +
          "— talab to'sqinlikni bartaraf etish. " +
          "Shuning uchun bu negator da'vo va uning " +
          "isbot predmeti ham boshqacha: buzilish " +
          "davom etayotganini ko'rsatish kerak.",
        keyPoints: [
          "Negator da'vo — foydalanishga to'sqinlikni bartaraf etish",
          "Narsa sizda qoladi, lekin undan foydalanish buziladi",
          "Talab: harakatni to'xtatish yoki buzilishni bartaraf etish",
          "Mulkdor bo'lmagan qonuniy ega ham himoyaga haqli",
        ],
        warning:
          "Negator da'voda buzilish DAVOM etayotgani " +
          "muhim. O'tgan davrdagi noqulaylik uchun " +
          "talab boshqa turga — zarar qoplashga " +
          "kiradi.",
        lawRefs: [
          { code: "FK", article: "231" },
          { code: "FK", article: "232" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     7. Shaxsiy nomulkiy huquqlar
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "shaxsiy-huquqlar",
    category: "civil",
    level: "mid",
    order: 2070,
    title: "Sha'n, qadr-qimmat va ishchanlik obro'si",
    desc:
      "Nomulkiy huquqlar: yolg'on ma'lumot tarqatilsa, ism " +
      "noqonuniy ishlatilsa yoki obro'ga putur yetsa nima qilish kerak.",
    objectives: [
      "Shaxsiy nomulkiy huquqlar ro'yxatini bilasiz",
      "Yolg'on ma'lumotni rad etishni qanday talab qilishni bilasiz",
      "Ma'naviy zararni qoplash talabi qanday qo'yilishini tushunasiz",
      "Fikr va fakt o'rtasidagi huquqiy farqni ajrata olasiz",
    ],
    practicalSteps: [
      "Obro'ga putur yetkazgan ma'lumotni darhol qayd eting: skrinshot, havola, sana, guvohlar",
      "Avval tarqatgan shaxsdan yozma rad etishni talab qiling — bu ko'pincha sudsiz hal bo'ladi",
      "Da'voda aniq ko'rsating: qaysi ibora yolg'on va nima uchun",
      "Ma'naviy zarar talabini asoslang: qanday oqibat yuz berganini tushuntiring",
    ],
    sections: [
      {
        heading: "Nomulkiy ne'matlar va ularning himoyasi",
        text:
          "Fuqarolik huquqi faqat mulk bilan " +
          "shug'ullanmaydi. U shaxsiy nomulkiy huquqlarni " +
          "va nomoddiy ne'matlarni ham himoya qiladi: " +
          "shaxsning hayoti va sog'lig'i, sha'ni va " +
          "qadr-qimmati, shaxsiy daxlsizligi, ismi, " +
          "shaxsiy hayoti daxlsizligi va boshqalar.\n\n" +
          "Bu huquqlarning o'ziga xos xususiyati bor: " +
          "ular shaxsdan ajralmas va boshqa shaxsga " +
          "o'tkazilmaydi. Ularni sotish, hadya qilish " +
          "yoki garovga qo'yish mumkin emas.\n\n" +
          "Ikkinchi xususiyat amalda muhim: shaxsiy " +
          "nomulkiy huquqlarni himoya qilish " +
          "talablariga da'vo muddati qo'llanilmaydi. " +
          "Ya'ni vaqt o'tgani bilan bu huquqlarni " +
          "himoya qilish imkoniyati yo'qolmaydi.\n\n" +
          "Alohida himoya vositasi ismga tegishli: o'z " +
          "ismi bilan yashash huquqiga e'tiroz " +
          "bildirilayotgan yoki ismidan qonunsiz " +
          "foydalanilayotgan shaxs buzilishni " +
          "to'xtatishni talab qilishi mumkin.",
        example:
          "Tashkilot reklamada shaxsning ismini va " +
          "suratini uning roziligisiz ishlatdi. " +
          "Bu mulkiy zarar keltirmagan bo'lsa ham, " +
          "nomulkiy huquq buzilgan — shuning uchun " +
          "foydalanishni to'xtatish va zararni " +
          "qoplashni talab qilish uchun asos bor.",
        keyPoints: [
          "Nomulkiy ne'matlar: hayot, sog'liq, sha'n, ism, shaxsiy daxlsizlik",
          "Bu huquqlar shaxsdan ajralmas va o'tkazilmaydi",
          "Ularni himoya qilish talablariga da'vo muddati qo'llanilmaydi",
          "Ismdan qonunsiz foydalanish alohida himoya asosini beradi",
        ],
        warning:
          "Nomulkiy huquq buzilganini ISBOTLASH baribir " +
          "kerak. Da'vo muddati yo'qligi dalil " +
          "to'plash zarurligini bekor qilmaydi — " +
          "vaqt o'tgani sari dalil topish qiyinlashadi.",
        lawRefs: [
          { code: "FK", article: "99" },
          { code: "FK", article: "20" },
          { code: "FK", article: "163" },
        ],
      },
      {
        heading: "Yolg'on ma'lumotni rad etish va zararni qoplash",
        text:
          "Fuqaro o'zining sha'ni, qadr-qimmati yoki " +
          "ishchanlik obro'siga putur yetkazadigan " +
          "ma'lumotlar rad etilishini talab qilishga " +
          "haqli — agar bu ma'lumotlarni tarqatgan " +
          "shaxs ularning haqiqatga muvofiqligini " +
          "isbotlamasa.\n\n" +
          "Bu qoidada eng muhim jihat — ISBOT YUKI " +
          "TAQSIMOTI. Siz ma'lumot yolg'on ekanini " +
          "isbotlashingiz shart emas; tarqatgan shaxs " +
          "uning haqiqat ekanini isbotlashi kerak. " +
          "Bu himoyani ancha osonlashtiradi.\n\n" +
          "Ikkinchi muhim tushuncha — FAKT va FIKR " +
          "farqi. Faktni tekshirish mumkin («u pul " +
          "o'g'irlagan»), fikrni esa yo'q («menimcha " +
          "u yaxshi rahbar emas»). Rad etish talabi " +
          "asosan FAKT xarakteridagi bayonotlarga " +
          "qaratiladi.\n\n" +
          "Himoya usullari bir necha: ma'lumotni rad " +
          "etishni talab qilish (aynan shu tarzda va " +
          "shu joyda tarqatilishi), javob berish " +
          "huquqi, mulkiy zararni qoplash va ma'naviy " +
          "zararni qoplash.\n\n" +
          "Ma'naviy zararni qoplash pul shaklida " +
          "bo'ladi va uning miqdorini sud belgilaydi. " +
          "Shu sababli da'voda oqibatni tushuntirish " +
          "muhim: ish yo'qotildi, obro' tushdi, " +
          "sog'liq buzildi.",
        example:
          "Ijtimoiy tarmoqda tadbirkor haqida " +
          "«mijozlarni aldaydi» degan yozuv " +
          "tarqatildi, dalil yo'q. Tadbirkor " +
          "yozuvni rad etishni va obro' tufayli " +
          "yo'qotilgan daromadni qoplashni talab " +
          "qilishi mumkin. Yozuv muallifi esa " +
          "aytganini isbotlashi kerak bo'ladi.",
        keyPoints: [
          "Isbot yuki tarqatuvchida: u ma'lumot HAQIQAT ekanini isbotlaydi",
          "Fakt va fikr farqlanadi — rad etish asosan faktga qaratiladi",
          "Himoya usullari: rad etish, javob berish, mulkiy va ma'naviy zarar",
          "Ma'naviy zarar miqdorini sud belgilaydi, shuning uchun oqibatni asoslash kerak",
        ],
        warning:
          "Javob sifatida o'zingiz haqoratli yozuv " +
          "yozib qo'ysangiz, holat teskari aylanadi — " +
          "endi siz javobgar bo'lasiz. Reaksiyani " +
          "faqat huquqiy yo'lda bildirish " +
          "foydaliroq.",
        lawRefs: [
          { code: "FK", article: "100" },
          { code: "FK", article: "11" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     8. Vakillik va ishonchnoma
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "vakillik-ishonchnoma",
    category: "civil",
    level: "mid",
    order: 2080,
    title: "Vakillik va ishonchnoma",
    desc:
      "Boshqa shaxs nomidan ish yuritish: ishonchnoma shakli, " +
      "muddati, bekor qilish va vakolatsiz vakillik xavfi.",
    objectives: [
      "Vakillik nima ekanligini va qanday asoslarda paydo bo'lishini bilasiz",
      "Ishonchnoma qanday shaklda rasmiylashtirilishi kerakligini bilasiz",
      "Ishonchnomani bekor qilish tartibini va xabardor qilish majburiyatini bilasiz",
      "Vakolatsiz vakillik oqibatlarini tushunasiz",
    ],
    practicalSteps: [
      "Ishonchnomada vakolat doirasini ANIQ yozing: umumiy iboralar keyin nizo keltiradi",
      "Ko'chmas mulk va katta summali bitimlar uchun notarial shaklni tanlang",
      "Ishonchnomani bekor qilsangiz, vakilni VA uchinchi shaxslarni darhol xabardor qiling",
      "Sizga ishonchnoma ko'rsatilsa: muddatini, imzosini va vakolat doirasini tekshiring",
    ],
    sections: [
      {
        heading: "Vakillik va uning asoslari",
        text:
          "Vakillik — bir shaxs (vakil) boshqa shaxs " +
          "nomidan bitim tuzishi. Bunda huquq va burchlar " +
          "vakilda emas, VAKIL QILGAN SHAXSDA yuzaga " +
          "keladi. Bu vakillikning butun mohiyati.\n\n" +
          "Vakolat to'rt asosga tayanishi mumkin: " +
          "ishonchnoma, qonun, sud qarori yoki vakolatli " +
          "davlat organining hujjati.\n\n" +
          "Qonunga asoslangan vakillik alohida ahamiyatga " +
          "ega: ota-onalar voyaga yetmagan farzandlari " +
          "nomidan, vasiylar esa muomalaga layoqatsiz " +
          "shaxslar nomidan ish yuritadi. Bu holatda " +
          "ishonchnoma kerak emas — vakolat qonundan " +
          "kelib chiqadi.\n\n" +
          "Muomalaga layoqatli shaxslar esa o'zlari " +
          "tanlagan vakillar orqali bitimlar tuzishi " +
          "mumkin. Bu erkin tanlov: vakil qilish " +
          "majburiy emas.\n\n" +
          "Tadbirkorlik sohasida alohida tur mavjud — " +
          "tijorat vakilligi: tadbirkorlar nomidan " +
          "doimo va mustaqil suratda vakillik qiluvchi " +
          "shaxs.",
        example:
          "Chet elda bo'lgan shaxs O'zbekistondagi " +
          "uyini sotmoqchi. U vakil tayinlaydi va " +
          "ishonchnoma beradi. Shartnoma vakil " +
          "tomonidan imzolansa ham, sotuvchi sifatida " +
          "mulkdorning o'zi hisoblanadi va huquqiy " +
          "oqibatlar unga tegishli bo'ladi.",
        keyPoints: [
          "Vakillikda huquq va burchlar VAKIL QILGAN SHAXSDA yuzaga keladi",
          "Vakolat asoslari: ishonchnoma, qonun, sud qarori, davlat organi hujjati",
          "Ota-ona va vasiy vakolati qonundan kelib chiqadi, ishonchnoma kerak emas",
          "Tijorat vakilligi — tadbirkorlik uchun alohida tur",
        ],
        warning:
          "Vakil o'z manfaatida ish yuritishi mumkin " +
          "emas. Vakolat doirasini keng va noaniq " +
          "yozib qo'yish esa aynan bunday xavfni " +
          "oshiradi.",
        lawRefs: [
          { code: "FK", article: "129" },
          { code: "FK", article: "130" },
          { code: "FK", article: "131" },
        ],
      },
      {
        heading: "Ishonchnoma: shakl, muddat, bekor bo'lish",
        text:
          "Ishonchnoma — bir shaxs tomonidan ikkinchi " +
          "shaxsga uchinchi shaxslar oldida vakillik " +
          "qilish uchun beriladigan yozma vakolat.\n\n" +
          "Shakl talabi: ishonchnoma oddiy yozma yoki " +
          "notarial shaklda rasmiylashtiriladi. " +
          "Notarial shakl talab qilinadigan bitimlar " +
          "uchun ishonchnoma ham notarial bo'lishi " +
          "kerak. Ayrim holatlarda notarial shaklga " +
          "tenglashtirilgan ishonchnomalar ham " +
          "mavjud.\n\n" +
          "Alohida yengillik bor: xat-xabarlarni, pul " +
          "va posilkalarni olishga, ish haqi va mehnat " +
          "munosabatlari bilan bog'liq to'lovlarni " +
          "olishga ishonchnoma soddalashtirilgan " +
          "tartibda rasmiylashtirilishi mumkin.\n\n" +
          "Muddat: ishonchnoma qonunda belgilangan " +
          "eng ko'p muddatdan oshmasligi kerak. " +
          "Muddat ko'rsatilmagan bo'lsa, qonun " +
          "standart muddatni qo'llaydi.\n\n" +
          "Bekor bo'lish asoslari: muddat tugashi, " +
          "ishonch bildiruvchining bekor qilishi, " +
          "vakilning voz kechishi, tomonlardan " +
          "birining vafoti yoki layoqatini yo'qotishi, " +
          "yuridik shaxsning tugatilishi.\n\n" +
          "ENG MUHIM AMALIY QOIDA: ishonchnomani " +
          "bekor qilgan shaxs bu haqda vakilni VA " +
          "unga ma'lum bo'lgan uchinchi shaxslarni " +
          "xabardor qilishi shart. Xabardor " +
          "qilinmasa, vakilning bekor qilinishdan " +
          "keyingi harakatlari ham ma'lum shartlarda " +
          "kuchda qolishi mumkin.",
        example:
          "Mulkdor ishonchnomani bekor qildi, lekin " +
          "vakilga xabar bermadi va u shu ishonchnoma " +
          "bilan bitim tuzdi. Vijdonli uchinchi " +
          "shaxs bekor qilishni bilmagan bo'lsa, " +
          "bitim oqibatlari mulkdor uchun majburiy " +
          "bo'lib qolishi mumkin — shuning uchun " +
          "xabardor qilish shakliy emas, hal qiluvchi " +
          "qadam.",
        keyPoints: [
          "Ishonchnoma — YOZMA vakolat, og'zaki bo'lmaydi",
          "Notarial bitim uchun ishonchnoma ham notarial bo'lishi kerak",
          "Muddat va bekor bo'lish asoslari qonunda belgilangan",
          "Bekor qilinganda vakilni VA uchinchi shaxslarni xabardor qilish SHART",
        ],
        warning:
          "«Barcha ishlarni yuritish uchun» degan " +
          "umumiy ishonchnoma juda xavfli: u mulkni " +
          "tasarruf etish vakolatini ham qamrab " +
          "olishi mumkin. Vakolatni har doim " +
          "aniq va tor yozing.",
        lawRefs: [
          { code: "FK", article: "134" },
          { code: "FK", article: "135" },
          { code: "FK", article: "139" },
          { code: "FK", article: "141" },
          { code: "FK", article: "142" },
        ],
      },
      {
        heading: "Vakolatsiz vakillik",
        text:
          "Amalda tez-tez uchraydigan holat: shaxs " +
          "boshqa shaxs nomidan ish yuritdi, lekin " +
          "vakolati yo'q edi yoki vakolat doirasidan " +
          "chiqib ketdi.\n\n" +
          "Qonun bu holatga aniq javob beradi: vakil " +
          "qilinmagan shaxs tomonidan boshqa shaxs " +
          "nomidan tuzilgan yoki vakolatlardan " +
          "tashqari chiqib tuzilgan bitim, u " +
          "keyinchalik TASDIQLANMASA, vakil qilingan " +
          "shaxs uchun huquq va burchlar " +
          "keltirmaydi.\n\n" +
          "Ya'ni tasdiqlash mexanizmi mavjud: nomidan " +
          "ish yuritilgan shaxs bitimni keyinroq " +
          "tasdiqlashi mumkin va shunda u kuchga " +
          "kiradi. Tasdiqlamasa — bitim uning uchun " +
          "majburiy bo'lmaydi, oqibatlar esa " +
          "vakolatsiz harakat qilgan shaxsda " +
          "qoladi.\n\n" +
          "Shu bilan bog'liq yana bir qoida: agar " +
          "shaxsning bitim tuzish vakolatlari " +
          "shartnoma bilan yoki yuridik shaxsning " +
          "ta'sis hujjatlari bilan cheklangan " +
          "bo'lsa, bu cheklovlarning oqibatlari " +
          "alohida belgilanadi.\n\n" +
          "Amaliy xulosa: shartnoma imzolayotgan " +
          "shaxsning vakolatini tekshirish " +
          "SHARTNOMADAN OLDIN qilinadigan ish.",
        example:
          "Tashkilot nomidan shartnomani vakolati " +
          "bo'lmagan xodim imzoladi. Tashkilot " +
          "keyinroq bitimni tasdiqlamasa, qarshi " +
          "tomon og'ir holatda qoladi: pul " +
          "to'langan, tovar berilgan, lekin " +
          "shartnoma tashkilot uchun majburiy " +
          "emas. Aynan shu sababdan vakolat " +
          "hujjatini so'rash zarur.",
        keyPoints: [
          "Vakolatsiz tuzilgan bitim tasdiqlanmasa majburiy bo'lmaydi",
          "Tasdiqlash keyinroq amalga oshirilishi mumkin",
          "Tasdiqlanmagan bitim oqibatlari vakolatsiz shaxsda qoladi",
          "Vakolatni tekshirish shartnomadan OLDIN qilinadi",
        ],
        warning:
          "Katta summali shartnomada faqat muhr va " +
          "imzoga ishonish kifoya emas. Ustav, " +
          "buyruq yoki ishonchnoma nusxasini olib " +
          "qo'yish keyin himoyaning asosi bo'ladi.",
        lawRefs: [
          { code: "FK", article: "132" },
          { code: "FK", article: "126" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     9. Muddatlar va da'vo muddati
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "muddatlar-davo",
    category: "civil",
    level: "advanced",
    order: 2090,
    title: "Muddatlar va da'vo muddati",
    desc:
      "Da'vo muddati nima, qachondan boshlanadi, qanday " +
      "to'xtatiladi va tiklanadi — vaqtni boy bermaslik uchun.",
    objectives: [
      "Da'vo muddati tushunchasini va umumiy muddatni bilasiz",
      "Muddat qachondan boshlanishini aniqlay olasiz",
      "Muddatning to'xtatilishi, uzilishi va tiklanishi farqini bilasiz",
      "Qaysi talablarga da'vo muddati qo'llanilmasligini bilasiz",
    ],
    practicalSteps: [
      "Huquqingiz buzilgan sanani aniq belgilang — muddat hisobi shundan boshlanadi",
      "Muddat tugashiga yaqin bo'lsa, da'voni kechiktirmang: muzokara muddatni to'xtatmaydi",
      "Qarzdor qarzni yozma tan olsa — bu muddat hisobiga ta'sir qilishi mumkin, hujjatni saqlang",
      "Muddat o'tgan bo'lsa ham sudga murojaat qilish mumkin: uzrli sabab bo'lsa tiklanadi",
    ],
    sections: [
      {
        heading: "Da'vo muddati nima va u qanday hisoblanadi",
        text:
          "Da'vo muddati — shaxs o'zining buzilgan " +
          "huquqini da'vo qo'zg'atish yo'li bilan " +
          "himoya qilishi mumkin bo'lgan vaqt " +
          "davri. Umumiy da'vo muddati — uch yil.\n\n" +
          "Ayrim turdagi talablar uchun qonunchilikda " +
          "umumiy muddatga qaraganda qisqartirilgan " +
          "yoki uzaytirilgan maxsus muddatlar " +
          "belgilanadi. Shu sababli har bir " +
          "vaziyatda «uch yil» degan taxminga " +
          "tayanmaslik, tegishli qoidani tekshirish " +
          "kerak.\n\n" +
          "Muddat qachondan boshlanadi? Bu eng " +
          "muhim savol. Qoida: da'vo muddati shaxs " +
          "o'zining huquqi buzilganligini BILGAN " +
          "yoki BILISHI LOZIM BO'LGAN kundan " +
          "boshlanadi.\n\n" +
          "Ya'ni hisob buzilish sodir bo'lgan " +
          "kundan emas, siz bu haqda bilganingizdan " +
          "boshlanadi. Bu ayrim holatlarda muddatni " +
          "sezilarli uzaytiradi — masalan yashirin " +
          "kamchilik keyinroq aniqlansa.\n\n" +
          "Muddatlarning umumiy hisoblash qoidalari " +
          "ham belgilangan: muddat kalendar sana " +
          "bilan yoki vaqt davri bilan belgilanadi, " +
          "vaqt davri bilan belgilangan muddat " +
          "esa tegishli kundan keyingi kundan " +
          "boshlanadi.\n\n" +
          "Muhim qoida: da'vo muddatlari va ularni " +
          "hisoblash tartibi tomonlar kelishuvi " +
          "bilan o'zgartirilishi mumkin emas — " +
          "bunday kelishuv haqiqiy sanalmaydi.",
        example:
          "Xaridor sotib olgan uskunadagi yashirin " +
          "nuqsonni bir yildan keyin aniqladi. " +
          "Muddat hisobi xarid kunidan emas, " +
          "nuqson aniqlangan (yoki aniqlanishi " +
          "lozim bo'lgan) kundan boshlanadi. " +
          "Aynan shu sababdan «vaqt o'tib ketdi» " +
          "degan xulosani shoshib chiqarmaslik " +
          "kerak.",
        keyPoints: [
          "Umumiy da'vo muddati — uch yil, ayrim talablar uchun maxsus muddatlar bor",
          "Muddat huquq buzilganini BILGAN kundan boshlanadi",
          "Tomonlar kelishuvi bilan da'vo muddatini o'zgartirish mumkin emas",
          "Muddat hisoblash qoidalari qonunda aniq belgilangan",
        ],
        warning:
          "Da'vo muddati o'tgani sudga murojaat " +
          "qilishga to'sqinlik qilmaydi — ish " +
          "ko'rib chiqiladi. Lekin qarshi tomon " +
          "muddat o'tganini bildirsa, talab rad " +
          "etilishi mumkin.",
        lawRefs: [
          { code: "FK", article: "149" },
          { code: "FK", article: "150" },
          { code: "FK", article: "151" },
          { code: "FK", article: "154" },
        ],
      },
      {
        heading: "To'xtatilish, uzilish va tiklanish",
        text:
          "Qonun uch xil mexanizmni nazarda tutadi " +
          "va ularni farqlash amalda katta ahamiyatga " +
          "ega, chunki natijalari butunlay boshqacha.\n\n" +
          "TO'XTATILISH — muddat oqishi vaqtincha " +
          "to'xtaydi, keyin QOLGAN qismidan davom " +
          "etadi. Asoslar qonunda sanalgan: " +
          "yengib bo'lmaydigan kuch, ayrim rasmiy " +
          "cheklovlar va shunga o'xshash holatlar.\n\n" +
          "UZILISH — muddat oqishi uziladi va " +
          "BOSHIDAN qayta boshlanadi. Bu ancha " +
          "kuchli oqibat. Asoslar: belgilangan " +
          "tartibda da'vo qo'zg'atilishi, " +
          "shuningdek qarzdorning qarzni tan " +
          "olishini ko'rsatuvchi harakatlar.\n\n" +
          "Ikkinchi asos amalda juda foydali: " +
          "qarzdor qarzni yozma tan olsa yoki " +
          "qisman to'lasa, muddat qayta boshlanishi " +
          "mumkin. Shuning uchun qarzdordan " +
          "yozma tasdiq olish qarz beruvchi " +
          "uchun kuchli qadam.\n\n" +
          "TIKLANISH — muddat allaqachon o'tgan, " +
          "lekin sud o'tkazib yuborish sababini " +
          "uzrli deb topsa, buzilgan huquq " +
          "himoya qilinadi. Bu istisno tartib va " +
          "sababni asoslash kerak.\n\n" +
          "Muddat o'tganidan keyin majburiyatni " +
          "bajargan shaxs esa to'laganini " +
          "«muddat o'tgan edi» degan asos bilan " +
          "qaytarib olishga haqli emas.",
        example:
          "Qarzdor qarz haqida yozma xat yuborib, " +
          "«to'layman, muhlat bering» dedi. Bu " +
          "qarzni tan olish belgisi bo'lib, " +
          "da'vo muddati hisobiga ta'sir qilishi " +
          "mumkin. Shuning uchun bunday xatni " +
          "saqlab qo'yish — qarz beruvchi uchun " +
          "muhim dalil.",
        keyPoints: [
          "To'xtatilish: muddat vaqtincha to'xtaydi, keyin qolgan qismidan davom etadi",
          "Uzilish: muddat BOSHIDAN qayta boshlanadi",
          "Qarzni tan olish belgilari muddat uzilishiga asos bo'lishi mumkin",
          "Tiklanish — istisno tartib, uzrli sabab isbotlanishi kerak",
        ],
        warning:
          "Muzokara olib borish o'z-o'zidan " +
          "da'vo muddatini to'xtatmaydi. " +
          "«Gaplashib turibmiz» degan holatda " +
          "muddat oqishda davom etadi — bu " +
          "juda ko'p uchraydigan yo'qotish.",
        lawRefs: [
          { code: "FK", article: "156" },
          { code: "FK", article: "157" },
          { code: "FK", article: "159" },
          { code: "FK", article: "161" },
        ],
      },
      {
        heading: "Da'vo muddati qo'llanilmaydigan talablar",
        text:
          "Qonun ayrim talablarni da'vo muddati " +
          "doirasidan butunlay chiqarib qo'yadi. " +
          "Bu ro'yxatni bilish foydali, chunki " +
          "bunday holatlarda «vaqt o'tdi» degan " +
          "e'tiroz ishlamaydi.\n\n" +
          "Da'vo muddati qo'llanilmaydigan asosiy " +
          "talablar: shaxsiy nomulkiy huquqlarni " +
          "va boshqa nomoddiy ne'matlarni himoya " +
          "qilish to'g'risidagi talablar hamda " +
          "qonunda belgilangan boshqa holatlar.\n\n" +
          "Shu sababli sha'n va qadr-qimmatni " +
          "himoya qilish, ismdan qonunsiz " +
          "foydalanishni to'xtatish kabi " +
          "talablarda vaqt to'sqinlik qilmaydi.\n\n" +
          "Yana bir muhim qoida qo'shimcha " +
          "talablarga tegishli: asosiy talab " +
          "bo'yicha da'vo muddati o'tishi bilan " +
          "qo'shimcha talablar bo'yicha ham " +
          "muddat o'tgan hisoblanadi. Ya'ni " +
          "asosiy qarz bo'yicha muddat o'tsa, " +
          "unga hisoblangan penya va foizlar " +
          "bo'yicha ham imkoniyat yo'qoladi.\n\n" +
          "Amaliy xulosa: asosiy talab bo'yicha " +
          "muddatni kuzatib turish yetarli — " +
          "qo'shimcha talablar uni «kutib» " +
          "turmaydi.",
        example:
          "Yillar oldin tarqatilgan yolg'on " +
          "ma'lumot hozir ham internetda " +
          "turibdi. Sha'nni himoya qilish " +
          "talabiga da'vo muddati " +
          "qo'llanilmaganligi uchun, uni rad " +
          "etishni talab qilish imkoniyati " +
          "saqlanadi.",
        keyPoints: [
          "Nomulkiy huquqlarni himoya qilish talablariga da'vo muddati qo'llanilmaydi",
          "Asosiy talab muddati o'tsa, qo'shimcha talablar (penya, foiz) ham o'tgan hisoblanadi",
          "«Vaqt o'tdi» e'tirozi har doim ishlamaydi — talab turini tekshirish kerak",
          "Muddat qo'llanilmasligi dalil to'plash zarurligini bekor qilmaydi",
        ],
        warning:
          "Muddat qo'llanilmaydigan talab ham " +
          "isbotni talab qiladi. Vaqt o'tgani " +
          "sari guvoh va hujjat topish " +
          "qiyinlashadi, shuning uchun " +
          "kechiktirish baribir zarar keltiradi.",
        lawRefs: [
          { code: "FK", article: "163" },
          { code: "FK", article: "162" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     10. Zarar yetkazish  (MAVJUD KALIT — kengaytirildi)
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "zarar-qoplash",
    category: "civil",
    level: "mid",
    order: 2100,
    title: "Zarar yetkazish va uni qoplash",
    desc:
      "Sizga zarar yetkazilsa yoki siz zarar yetkazsangiz: " +
      "javobgarlik shartlari, hajmi va ma'naviy zarar.",
    objectives: [
      "Zarar uchun javobgarlik yuzaga kelishi shartlarini bilasiz",
      "Aybsiz javobgarlik hollarini (xavfli manba) tushunasiz",
      "Zarar hajmi qanday aniqlanishini bilasiz",
      "Ma'naviy zararni qoplash talabini qanday qo'yishni bilasiz",
    ],
    practicalSteps: [
      "Zarar yetkazilganda holatni darhol qayd eting: surat, video, guvohlar, ma'lumotnoma",
      "Xarajatlarni tasdiqlovchi barcha hujjatni saqlang — zarar hajmi shular bilan isbotlanadi",
      "Zarar yetkazgan shaxsdan yozma tushuntirish yoki tan olish olishga harakat qiling",
      "Sog'liqqa zarar bo'lsa tibbiy hujjatlarni to'liq to'plang: ular asosiy dalil",
    ],
    sections: [
      {
        heading: "Zarar uchun javobgarlikning shartlari",
        text:
          "Zarar yetkazish natijasida yuzaga keladigan " +
          "majburiyat fuqarolik huquqining alohida " +
          "sohasi. Uning asosiy qoidasi: zarar " +
          "yetkazgan shaxs zararni qoplashi shart.\n\n" +
          "Javobgarlik yuzaga kelishi uchun to'rt " +
          "element kerak. Birinchisi — ZARAR " +
          "mavjudligi (mulkiy yoki nomulkiy). " +
          "Ikkinchisi — g'ayriqonuniy XATTI-HARAKAT. " +
          "Uchinchisi — ular o'rtasidagi " +
          "SABABIY BOG'LANISH. To'rtinchisi — " +
          "AYB (umumiy qoida bo'yicha).\n\n" +
          "Ayb bo'yicha muhim xususiyat bor: " +
          "fuqarolik huquqida ayb PREZUMPSIYA " +
          "qilinadi. Ya'ni zarar yetkazgan shaxs " +
          "o'zining aybsizligini isbotlashi " +
          "kerak, jabrlanuvchi esa aybni " +
          "isbotlashi shart emas.\n\n" +
          "Bu jinoyat huquqidagi holatning " +
          "aksi: u yerda ayb isbotlanishi kerak, " +
          "bu yerda esa aybsizlik isbotlanadi. " +
          "Farqni bilish da'vo strategiyasini " +
          "belgilaydi.\n\n" +
          "Zarar jabrlanuvchining o'zining " +
          "qasddan qilgan harakati natijasida " +
          "yuzaga kelgan bo'lsa yoki uning " +
          "ehtiyotsizligi ta'sir qilgan bo'lsa, " +
          "javobgarlik hajmi o'zgarishi mumkin.",
        example:
          "Qo'shni kvartiradan suv oqib, " +
          "pastdagi kvartira ta'miriga zarar " +
          "yetdi. Jabrlanuvchi zararni va " +
          "sababiy bog'lanishni ko'rsatadi; " +
          "qo'shni esa aybsizligini isbotlashi " +
          "kerak (masalan buzilish ishlab " +
          "chiqaruvchi nuqsoni tufayli " +
          "yuzaga kelganini).",
        keyPoints: [
          "Zararni yetkazgan shaxs uni qoplashi shart",
          "Javobgarlik uchun to'rt element: zarar, g'ayriqonuniylik, sababiy bog'lanish, ayb",
          "Fuqarolik huquqida AYB PREZUMPSIYA qilinadi — aybsizlikni javobgar isbotlaydi",
          "Jabrlanuvchining o'z harakati javobgarlik hajmiga ta'sir qilishi mumkin",
        ],
        warning:
          "Dalil to'plamasdan «u aybdor» degan " +
          "da'vo natija bermaydi. Zarar " +
          "hajmini ham, sababiy bog'lanishni " +
          "ham hujjat bilan ko'rsatish kerak.",
        lawRefs: [
          { code: "FK2", article: "990" },
          { code: "FK2", article: "991" },
        ],
      },
      {
        heading: "Aybsiz javobgarlik va zarar hajmi",
        text:
          "Umumiy qoidadan muhim istisnolar bor: " +
          "ayrim holatlarda javobgarlik AYBDAN " +
          "QAT'I NAZAR yuzaga keladi.\n\n" +
          "Eng ko'p uchraydigani — atrofdagilar " +
          "uchun yuqori xavf tug'diruvchi " +
          "manbalar bilan bog'liq faoliyat: " +
          "transport vositalari, mexanizmlar, " +
          "yuqori kuchlanishli elektr energiyasi " +
          "va shunga o'xshashlar. Bunday " +
          "faoliyat egasi zararni aybi " +
          "bo'lmasa ham qoplaydi.\n\n" +
          "Bunday javobgarlikdan ozod qilish " +
          "asoslari juda tor: odatda yengib " +
          "bo'lmaydigan kuch yoki " +
          "jabrlanuvchining qasdi.\n\n" +
          "Zarar hajmi bo'yicha umumiy tamoyil — " +
          "TO'LIQ QOPLASH. Huquqi buzilgan " +
          "shaxs o'ziga yetkazilgan zararning " +
          "to'liq qoplanishini talab qilishi " +
          "mumkin, agar qonun yoki shartnomada " +
          "kamroq miqdor nazarda tutilmagan " +
          "bo'lsa.\n\n" +
          "Zarar tarkibiga ikki qism kiradi: " +
          "haqiqiy zarar (yo'qotilgan yoki " +
          "buzilgan narsa qiymati, tiklash " +
          "xarajatlari) va boy berilgan foyda " +
          "(oddiy sharoitda olinishi mumkin " +
          "bo'lgan daromad).\n\n" +
          "Qoplash usuli ikki xil: ayni " +
          "tabiatda (shunday narsa berish, " +
          "tuzatish) yoki pul bilan.",
        example:
          "Transport vositasi ishtirokidagi " +
          "hodisada zarar yetdi. Bu yerda " +
          "javobgarlik xavfli manba egasida " +
          "va u aybi bo'lmasa ham qoplashi " +
          "mumkin. Zarar hajmiga esa " +
          "ta'mirlash xarajati va " +
          "ishlatilmagan davr uchun boy " +
          "berilgan daromad ham kirishi " +
          "mumkin.",
        keyPoints: [
          "Yuqori xavf manbalari bilan bog'liq zararda javobgarlik AYBDAN QAT'I NAZAR",
          "Ozod qilish asoslari tor: yengib bo'lmaydigan kuch, jabrlanuvchining qasdi",
          "Umumiy tamoyil — zararni TO'LIQ qoplash",
          "Zarar = haqiqiy zarar + boy berilgan foyda",
        ],
        warning:
          "Boy berilgan foydani isbotlash " +
          "haqiqiy zararga qaraganda ancha " +
          "qiyin: taxminiy hisob yetarli " +
          "emas, real asos (shartnoma, " +
          "oldingi daromad ma'lumoti) " +
          "kerak.",
        lawRefs: [
          { code: "FK2", article: "993" },
          { code: "FK2", article: "994" },
          { code: "FK", article: "14" },
        ],
      },
      {
        heading: "Ma'naviy zarar",
        text:
          "Zarar har doim mulkiy bo'lmaydi. " +
          "Ma'naviy zarar — jismoniy yoki " +
          "ruhiy azob, iztirob shaklidagi " +
          "zarar.\n\n" +
          "Uning asosiy xususiyati shundaki, " +
          "u aniq raqam bilan o'lchanmaydi. " +
          "Shu sababli qoplash miqdorini SUD " +
          "belgilaydi va bunda bir necha " +
          "holatni hisobga oladi: " +
          "huquqbuzarlikning xarakteri, " +
          "aybning darajasi, jabrlanuvchining " +
          "individual xususiyatlari va " +
          "yuzaga kelgan oqibatlar.\n\n" +
          "Amaliy xulosa: da'voda faqat " +
          "summa yozib qo'yish yetarli emas. " +
          "OQIBATNI tushuntirish kerak — " +
          "nima yuz berdi, hayotingiz " +
          "qanday o'zgardi, qanday davolanish " +
          "kerak bo'ldi.\n\n" +
          "Ma'naviy zararni qoplash mulkiy " +
          "zarar qoplanishidan MUSTAQIL " +
          "amalga oshiriladi. Ya'ni " +
          "ta'mirlash xarajati qoplangani " +
          "ma'naviy zarar talabini bekor " +
          "qilmaydi.\n\n" +
          "Ba'zi holatlarda ma'naviy zarar " +
          "aybdan qat'i nazar ham " +
          "qoplanadi — qonunda ko'rsatilgan " +
          "hollarda.",
        example:
          "Sog'liqqa zarar yetkazilgan " +
          "shaxsning davolanish xarajati " +
          "qoplandi. Bu mulkiy qism. " +
          "Og'riq, uzoq davolanish va " +
          "hayot tarzining o'zgarishi esa " +
          "alohida — ma'naviy zarar " +
          "sifatida qo'shimcha talab " +
          "qilinishi mumkin.",
        keyPoints: [
          "Ma'naviy zarar — jismoniy yoki ruhiy azob shaklidagi zarar",
          "Miqdorni sud belgilaydi, aniq narx ro'yxati yo'q",
          "Da'voda OQIBATNI batafsil tushuntirish kerak",
          "Ma'naviy zarar mulkiy zarardan mustaqil qoplanadi",
        ],
        warning:
          "Juda katta va asossiz summa " +
          "so'rash da'voni kuchsizlashtiradi. " +
          "Miqdorni real oqibatlar bilan " +
          "asoslash ancha samarali.",
        lawRefs: [
          { code: "FK2", article: "1022" },
          { code: "FK2", article: "1012" },
        ],
      },
    ],
  },
];

module.exports = { LESSONS };
