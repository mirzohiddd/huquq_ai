"use strict";
/**
 * MODUL 6 — MEHNAT HUQUQI (16 dars)
 *
 * Manba: Mehnat kodeksi (MK, 581 modda, 2022-yilgi yangi tahrir).
 *
 * Nima uchun bu modul eng katta: mehnat munosabati aholining eng
 * katta qismiga tegishli va u yerda huquqbuzarlik ham eng ko'p
 * uchraydi. Shu sababli modul juda tor mavzularga bo'lingan —
 * foydalanuvchi aynan o'z holatiga oid darsni topa olsin.
 *
 * ⚠️ Mavjud "Mehnat huquqi asoslari" darsi (`lessonContentData.js`,
 * order: 10) umumiy kirish beradi va shu modulda birinchi ko'rinadi.
 */

const LESSONS = [
  /* ═══════════════════════════════════════════════════════════════
     1. Mehnat shartnomasi
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "mehnat-shartnomasi",
    category: "labor",
    level: "basic",
    order: 6010,
    title: "Mehnat shartnomasi: mazmuni va muddati",
    desc:
      "Mehnat shartnomasiga nima kirishi shart, qanday shaklda " +
      "tuziladi, muddatli va nomuayyan muddatli shartnoma farqi.",
    objectives: [
      "Mehnat shartnomasiga kiritilishi SHART bo'lgan shartlarni bilasiz",
      "Shartnoma shakli va nusxalar masalasini bilasiz",
      "Muddatli va nomuayyan muddatli shartnoma farqini tushunasiz",
      "Qanday shartlar haqiqiy emasligini bilasiz",
    ],
    practicalSteps: [
      "Shartnomani imzolashdan oldin barcha shartlarni o'qing, ayniqsa ish haqi va ish vaqtini",
      "O'z nusxangizni imzolangan va muhrlangan holda ALBATTA oling",
      "Muddatli shartnoma taklif qilinsa — uning ASOSINI so'rang, u qonunda ko'rsatilgan bo'lishi kerak",
      "Shartnomada yo'q vazifani bajarishga majburlashsa, bu talab qonuniy emasligini yodda tuting",
    ],
    sections: [
      {
        heading: "Shartnoma mazmuni: nima yozilishi shart",
        text:
          "Mehnat shartnomasi — xodim va ish beruvchi " +
          "o'rtasidagi kelishuv. Uning huquqiy " +
          "kuchi shundaki, u ikkala tomon uchun " +
          "ham majburiy bo'ladi.\n\n" +
          "Qonun shartnomaga kiritilishi SHART " +
          "bo'lgan shartlarni belgilaydi. Bularga " +
          "odatda quyidagilar kiradi: ish joyi, " +
          "mehnat funksiyasi (lavozim, kasb, " +
          "mutaxassislik), ishning boshlanish " +
          "sanasi, mehnatga haq to'lash shartlari, " +
          "ish vaqti va dam olish vaqti rejimi.\n\n" +
          "Bu shartlarning yozilishi shakliy talab " +
          "emas. Ular yozilmasa, nizo chiqqanda " +
          "«nima kelishilgan edi?» degan savolga " +
          "javob topilmaydi va isbot yuki " +
          "xodimga tushib qolishi mumkin.\n\n" +
          "SHAKL bo'yicha muhim qoida: mehnat " +
          "shartnomasi bir xil kuchga ega " +
          "bo'lgan kamida ikki nusxada " +
          "tuziladi. Ya'ni bitta nusxa SIZDA " +
          "qolishi kerak.\n\n" +
          "Amalda eng ko'p uchraydigan xato — " +
          "shartnomani imzolab, nusxasini " +
          "olmaslik. Keyin nizo chiqqanda " +
          "xodimda hech qanday hujjat " +
          "bo'lmaydi.\n\n" +
          "REKVIZITLAR ham muhim: shartnomada " +
          "tuzilgan sana va boshqa zaruriy " +
          "ma'lumotlar ko'rsatiladi.\n\n" +
          "Shartnoma kuchga kirish va ishning " +
          "boshlanish sanasi ham alohida " +
          "belgilanadi — bu ikki sana " +
          "har doim ham bir xil bo'lmaydi.",
        example:
          "Xodim ishga qabul qilindi, ish haqi " +
          "og'zaki kelishildi va shartnomada " +
          "faqat eng kam miqdor yozildi. Bir " +
          "necha oydan keyin to'lov kamaydi. " +
          "Xodim og'zaki kelishuvni isbotlay " +
          "olmadi — chunki shartnomada boshqa " +
          "raqam turardi.",
        keyPoints: [
          "Qonun shartnomaga kiritilishi SHART bo'lgan shartlar ro'yxatini belgilaydi",
          "Shartnoma kamida IKKI nusxada tuziladi — bittasi xodimda qoladi",
          "Ish haqi va ish vaqti aniq yozilishi kerak, og'zaki kelishuv ishlamaydi",
          "Kuchga kirish va ish boshlanish sanasi alohida ko'rsatiladi",
        ],
        warning:
          "Bo'sh blankaga yoki to'ldirilmagan " +
          "shartnomaga imzo qo'ymang. Keyin " +
          "u sizga qarshi to'ldirilishi " +
          "mumkin va buni isbotlash deyarli " +
          "imkonsiz.",
        lawRefs: [
          { code: "MK", article: "103" },
          { code: "MK", article: "104" },
          { code: "MK", article: "106" },
          { code: "MK", article: "107" },
          { code: "MK", article: "108" },
        ],
      },
      {
        heading: "Muddatli va nomuayyan muddatli shartnoma",
        text:
          "Mehnat shartnomasi nomuayyan muddatga " +
          "yoki belgilangan muddatga tuzilishi " +
          "mumkin. Bu farq xodim uchun juda " +
          "muhim.\n\n" +
          "NOMUAYYAN MUDDATLI shartnoma — " +
          "asosiy va xodim uchun eng " +
          "qulay shakl. U o'z-o'zidan " +
          "tugamaydi; uni bekor qilish uchun " +
          "qonunda ko'rsatilgan asos kerak.\n\n" +
          "MUDDATLI shartnoma esa muddat " +
          "tugashi bilan bekor qilinishi " +
          "mumkin — ya'ni qo'shimcha asos " +
          "talab qilinmaydi.\n\n" +
          "Aynan shu sababdan qonun muddatli " +
          "shartnomani ERKIN ishlatishga " +
          "ruxsat bermaydi. Muddatli " +
          "shartnoma tuzishning ASOSLILIGI " +
          "talab qilinadi va u qanday " +
          "hollarda tuzilishi mumkinligi " +
          "qonunda belgilangan.\n\n" +
          "Bu xodim uchun kuchli himoya: agar " +
          "ish doimiy xarakterga ega bo'lsa " +
          "va muddatli shartnoma uchun asos " +
          "bo'lmasa, bunday shartnomaga " +
          "e'tiroz bildirish mumkin.\n\n" +
          "Muddat belgilash usullari ham " +
          "qonunda ko'rsatilgan: aniq sana, " +
          "muayyan ishning bajarilishi yoki " +
          "boshqa usul.\n\n" +
          "Muddatli shartnoma muddatidan " +
          "oldin bekor qilinganda neustoyka " +
          "to'lash masalasi ham nazarda " +
          "tutilgan.",
        example:
          "Doimiy lavozimga har yili qayta-qayta " +
          "bir yillik shartnoma tuzilyapti. " +
          "Ish doimiy xarakterda bo'lsa va " +
          "qonundagi asoslar mavjud " +
          "bo'lmasa, bunday amaliyot " +
          "asosliligini so'rash va e'tiroz " +
          "bildirish uchun asos bo'ladi.",
        keyPoints: [
          "Nomuayyan muddatli shartnoma xodim uchun eng himoyalangan shakl",
          "Muddatli shartnoma ASOSLI bo'lishi kerak — u erkin ishlatilmaydi",
          "Qonun muddatli shartnoma tuziladigan hollarni belgilaydi",
          "Muddat aniq sana yoki ish bajarilishi bilan belgilanishi mumkin",
        ],
        warning:
          "«Avval muddatli tuzamiz, keyin " +
          "doimiyga o'tkazamiz» degan " +
          "va'daga tayanmang. Yozma " +
          "kelishuv bo'lmasa, u hech " +
          "qanday majburiyat " +
          "keltirmaydi.",
        lawRefs: [
          { code: "MK", article: "110" },
          { code: "MK", article: "111" },
          { code: "MK", article: "112" },
          { code: "MK", article: "113" },
          { code: "MK", article: "114" },
        ],
      },
      {
        heading: "Haqiqiy bo'lmagan shartlar va qo'shimcha ish",
        text:
          "Mehnat shartnomasiga istalgan " +
          "shartni yozib bo'lmaydi. Qonun " +
          "aniq chegara qo'yadi: xodimning " +
          "holatini qonunchilikka nisbatan " +
          "yomonlashtiradigan shartlar " +
          "HAQIQIY EMAS.\n\n" +
          "Bu juda muhim himoya mexanizmi. " +
          "Uning amaliy ma'nosi: siz " +
          "imzolagan bo'lsangiz ham, " +
          "qonundagi kafolatlardan past " +
          "shart ishlamaydi.\n\n" +
          "Masalan qonunda belgilangan " +
          "ta'til davomiyligidan kam " +
          "ta'til, kafolatlangan " +
          "to'lovlardan voz kechish " +
          "yoki javobgarlikni asossiz " +
          "kengaytirish — bunday " +
          "shartlar kuchga ega " +
          "bo'lmaydi.\n\n" +
          "Ikkinchi muhim qoida — " +
          "shartnomada SHART QILIB " +
          "KO'RSATILMAGAN ishning " +
          "bajarilishini talab qilish " +
          "taqiqlanadi.\n\n" +
          "Ya'ni sizga shartnomada " +
          "yozilmagan vazifani " +
          "majburan yuklab bo'lmaydi. " +
          "Bu ko'p uchraydigan " +
          "muammoning yechimi: " +
          "«bu ham sizning " +
          "ishingiz» degan talabga " +
          "qarshi aniq huquqiy asos.\n\n" +
          "Shu bilan birga qonun " +
          "qo'shimcha ish " +
          "imkoniyatini ham nazarda " +
          "tutadi: bir necha kasbda " +
          "(lavozimda) ishlash, " +
          "xizmat ko'rsatish " +
          "doirasini kengaytirish, " +
          "ish hajmini oshirish " +
          "mumkin — lekin bu " +
          "ALOHIDA rasmiylashtiriladi " +
          "va qo'shimcha haq " +
          "to'lanadi.",
        example:
          "Xodimga «vaqtincha» " +
          "boshqa bo'limning ishi " +
          "ham yuklandi, qo'shimcha " +
          "haq to'lanmadi va hech " +
          "narsa rasmiylashtirilmadi. " +
          "Bu holat qonuniy emas: " +
          "qo'shimcha ish alohida " +
          "kelishuv va qo'shimcha " +
          "haq to'lashni talab " +
          "qiladi.",
        keyPoints: [
          "Xodim holatini qonunga nisbatan yomonlashtiradigan shartlar HAQIQIY EMAS",
          "Imzolangan bo'lsa ham, qonundan past shart ishlamaydi",
          "Shartnomada ko'rsatilmagan ishni talab qilish taqiqlanadi",
          "Qo'shimcha ish alohida rasmiylashtiriladi va haq to'lanadi",
        ],
        warning:
          "Qo'shimcha vazifani " +
          "«yordam sifatida» " +
          "rasmiylashtirmasdan " +
          "bajarish odatga " +
          "aylanadi va keyin uni " +
          "to'xtatish qiyin " +
          "bo'ladi. Boshidanoq " +
          "yozma " +
          "rasmiylashtirishni " +
          "so'rang.",
        lawRefs: [
          { code: "MK", article: "105" },
          { code: "MK", article: "115" },
          { code: "MK", article: "116" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     2. Ishga qabul qilish
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "ishga-qabul",
    category: "labor",
    level: "basic",
    order: 6020,
    title: "Ishga qabul qilish va dastlabki sinov",
    desc:
      "Ishga qabul bosqichlari, talab qilinadigan hujjatlar, " +
      "qonunga xilof rad etish va sinov muddati qoidalari.",
    objectives: [
      "Ishga qabul qilish bosqichlarini bilasiz",
      "Qanday hujjatlar talab qilinishi mumkinligini bilasiz",
      "Qonunga xilof rad etish nima ekanligini va oqibatini bilasiz",
      "Dastlabki sinov qoidalarini va uning chegarasini bilasiz",
    ],
    practicalSteps: [
      "Ishga qabul qilishda buyruq chiqarilganini va u bilan tanishtirilganingizni tekshiring",
      "Rad etilsangiz sababni YOZMA so'rang — bu keyin e'tiroz uchun asos bo'ladi",
      "Sinov muddati belgilansa, u shartnomada aniq yozilganini tekshiring",
      "Sinov davrida ham barcha mehnat huquqlaringiz amal qilishini yodda tuting",
    ],
    sections: [
      {
        heading: "Qabul qilish bosqichlari va hujjatlar",
        text:
          "Ishga qabul qilish bir necha " +
          "bosqichdan iborat va ular qonunda " +
          "belgilangan: shartnoma tuzish, " +
          "buyruq chiqarish, tanishtirish " +
          "va ishga haqiqatda qo'yish.\n\n" +
          "Har bir bosqich muhim. Ayniqsa " +
          "TANISHTIRISH TARTIB-TAOMILI: " +
          "ish beruvchi xodimni ichki " +
          "hujjatlar, mehnat sharoitlari va " +
          "mehnatni muhofaza qilish " +
          "talablari bilan tanishtirishi " +
          "kerak.\n\n" +
          "Bu shakliy emas: keyin " +
          "«men bilmagan edim» degan " +
          "holat yuzaga kelmasligi va " +
          "javobgarlik masalasi aniq " +
          "bo'lishi uchun.\n\n" +
          "HUJJATLAR ro'yxati qonunda " +
          "belgilangan. Bu ro'yxat " +
          "muhim, chunki u YOPIQ: " +
          "unda ko'rsatilmagan hujjatni " +
          "talab qilish qonuniy emas.\n\n" +
          "Amaliy natijasi: sizdan " +
          "qonunda nazarda tutilmagan " +
          "ma'lumot yoki hujjat " +
          "talab qilinsa, buning " +
          "asosini so'rashga " +
          "haqlisiz.\n\n" +
          "BUYRUQ chiqarish va u " +
          "bilan tanishtirish ham " +
          "majburiy. Buyruq " +
          "bo'lmasa, mehnat " +
          "munosabati " +
          "rasmiylashtirilmagan " +
          "hisoblanadi.\n\n" +
          "Alohida holat — xodimni " +
          "HAQIQATDA ISHGA " +
          "QO'YISH: vakolatli " +
          "mansabdor shaxs " +
          "tomonidan ishga " +
          "qo'yilgan bo'lsa, bu " +
          "mehnat munosabati " +
          "boshlanganini " +
          "ko'rsatadi — hatto " +
          "hujjat " +
          "rasmiylashtirilmagan " +
          "bo'lsa ham.",
        example:
          "Shaxs ishga chiqib, bir " +
          "oy ishladi, lekin " +
          "shartnoma " +
          "rasmiylashtirilmadi. " +
          "Vakolatli shaxs uni " +
          "ishga qo'ygan bo'lsa, " +
          "mehnat munosabati " +
          "boshlangan hisoblanadi " +
          "va bu haqiqat huquqiy " +
          "himoya uchun asos " +
          "bo'ladi.",
        keyPoints: [
          "Qabul qilish bosqichlari qonunda belgilangan",
          "Ish beruvchi ichki hujjatlar va sharoitlar bilan tanishtirishi shart",
          "Talab qilinadigan hujjatlar ro'yxati YOPIQ",
          "Vakolatli shaxs ishga qo'ysa, mehnat munosabati boshlangan hisoblanadi",
        ],
        warning:
          "Rasmiylashtirilmagan " +
          "ishga chiqish juda " +
          "xavfli: ish haqi, " +
          "ta'til va staj " +
          "bo'yicha huquqlarni " +
          "isbotlash keyin " +
          "juda qiyin " +
          "bo'ladi.",
        lawRefs: [
          { code: "MK", article: "122" },
          { code: "MK", article: "123" },
          { code: "MK", article: "124" },
          { code: "MK", article: "127" },
          { code: "MK", article: "128" },
        ],
      },
      {
        heading: "Qonunga xilof rad etish",
        text:
          "Ishga qabul qilishni qonunga " +
          "xilof ravishda rad etishga yo'l " +
          "qo'yilmaydi. Bu qoida " +
          "kamsitishga qarshi asosiy " +
          "himoya vositasi.\n\n" +
          "Rad etish faqat ishchanlik " +
          "sifatlari va malaka bilan " +
          "bog'liq sabablarga " +
          "asoslanishi kerak.\n\n" +
          "Ya'ni jinsi, yoshi, irqi, " +
          "millati, tili, dini, " +
          "ijtimoiy kelib chiqishi, " +
          "e'tiqodi kabi belgilar " +
          "bo'yicha rad etish " +
          "qonuniy emas.\n\n" +
          "Bu ayniqsa ayollar uchun " +
          "muhim: homiladorlik yoki " +
          "bolalari borligi sababli " +
          "rad etish qonunga " +
          "xilof.\n\n" +
          "Qonun rad etishning " +
          "huquqiy OQIBATLARINI " +
          "ham belgilaydi — ya'ni " +
          "bu shunchaki taqiq " +
          "emas, uni buzganlik " +
          "uchun javobgarlik " +
          "mavjud.\n\n" +
          "Amaliy qadam: rad " +
          "etilsangiz sababni " +
          "YOZMA so'rash. " +
          "Yozma sabab bo'lsa, " +
          "uning qonuniyligini " +
          "baholash va e'tiroz " +
          "bildirish mumkin.\n\n" +
          "Ayrim toifadagi " +
          "shaxslar uchun " +
          "ishga joylashtirish " +
          "sohasida qo'shimcha " +
          "kafolatlar ham " +
          "belgilangan — ular " +
          "uchun ish o'rinlari " +
          "ajratilishi " +
          "mumkin.\n\n" +
          "Ishga qabul " +
          "qilishga yo'l " +
          "qo'yiladigan yosh " +
          "ham qonunda " +
          "belgilangan.",
        example:
          "Nomzodga «bizga " +
          "ayol kishi kerak " +
          "emas» deb rad " +
          "javobi berildi. " +
          "Bu ishchanlik " +
          "sifatlariga aloqasi " +
          "bo'lmagan sabab " +
          "bo'lgani uchun " +
          "qonunga xilof " +
          "hisoblanadi va " +
          "e'tiroz bildirish " +
          "uchun asos beradi.",
        keyPoints: [
          "Rad etish faqat ishchanlik sifatlari va malakaga asoslanishi kerak",
          "Jins, yosh, millat, din kabi belgilar bo'yicha rad etish taqiqlanadi",
          "Qonun rad etishning huquqiy oqibatlarini belgilaydi",
          "Rad etish sababini YOZMA so'rash huquqingiz bor",
        ],
        warning:
          "Og'zaki rad javobi " +
          "hech qanday iz " +
          "qoldirmaydi. " +
          "E'tiroz bildirmoqchi " +
          "bo'lsangiz, yozma " +
          "sabab olish " +
          "birinchi qadam.",
        lawRefs: [
          { code: "MK", article: "118" },
          { code: "MK", article: "119" },
          { code: "MK", article: "120" },
          { code: "MK", article: "101" },
        ],
      },
      {
        heading: "Dastlabki sinov",
        text:
          "Mehnat shartnomasi tuzishda " +
          "dastlabki sinov belgilanishi " +
          "mumkin. Uning maqsadi — " +
          "xodimning topshirilayotgan " +
          "ishga muvofiqligini " +
          "tekshirish.\n\n" +
          "Sinov MAJBURIY emas: u " +
          "tomonlar kelishuvi bilan " +
          "belgilanadi va shartnomada " +
          "aniq yozilishi kerak.\n\n" +
          "Agar shartnomada sinov " +
          "haqida yozilmagan bo'lsa, " +
          "xodim sinovsiz qabul " +
          "qilingan hisoblanadi. Bu " +
          "muhim: keyin «siz " +
          "sinovdasiz» deb aytish " +
          "asossiz bo'ladi.\n\n" +
          "MUDDAT qonunda cheklangan " +
          "va u toifaga qarab " +
          "farqlanadi.\n\n" +
          "ENG MUHIM QOIDA: sinov " +
          "davrida xodimga " +
          "nisbatan mehnat " +
          "to'g'risidagi " +
          "qonunchilik TO'LIQ " +
          "amal qiladi.\n\n" +
          "Ya'ni sinovdagi xodim " +
          "ham to'liq ish haqi " +
          "olish, dam olish, " +
          "mehnat muhofazasi va " +
          "boshqa huquqlarga " +
          "ega. «Sinovdasiz, " +
          "shuning uchun kamroq " +
          "to'laymiz» degan " +
          "yondashuv qonuniy " +
          "emas.\n\n" +
          "SINOV NATIJASI: " +
          "muddat tugaguniga " +
          "qadar taraflarning " +
          "har biri ikkinchi " +
          "tomonni ogohlantirib, " +
          "shartnomani bekor " +
          "qilishi mumkin. " +
          "Ya'ni bu huquq ikki " +
          "tomonda ham bor.\n\n" +
          "Muddat tugagach xodim " +
          "sinovdan o'tgan " +
          "hisoblanadi.",
        example:
          "Xodimga sinov " +
          "davrida ish haqining " +
          "yarmi to'landi. " +
          "Bu qonuniy emas: " +
          "sinov davrida " +
          "mehnat " +
          "qonunchiligi to'liq " +
          "amal qiladi va ish " +
          "haqi shartnomada " +
          "belgilangan " +
          "miqdorda " +
          "to'lanishi kerak.",
        keyPoints: [
          "Sinov majburiy emas — u shartnomada yozilishi kerak",
          "Shartnomada yozilmasa, xodim sinovsiz qabul qilingan hisoblanadi",
          "Sinov davrida mehnat qonunchiligi TO'LIQ amal qiladi",
          "Muddat tugaguniga qadar ikki tomon ham shartnomani bekor qilishi mumkin",
        ],
        warning:
          "Sinov muddati " +
          "tugaganidan keyin " +
          "«sinovdan " +
          "o'tmadingiz» deb " +
          "bo'shatish " +
          "qonuniy emas — " +
          "muddat tugashi " +
          "bilan xodim " +
          "sinovdan o'tgan " +
          "hisoblanadi.",
        lawRefs: [
          { code: "MK", article: "129" },
          { code: "MK", article: "130" },
          { code: "MK", article: "131" },
          { code: "MK", article: "132" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     3. Shartnomani o'zgartirish
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "mehnat-shartnoma-ozgartirish",
    category: "labor",
    level: "mid",
    order: 6030,
    title: "Mehnat shartnomasini o'zgartirish va boshqa ishga o'tkazish",
    desc:
      "Mehnat shartlarini o'zgartirish tartibi, vaqtincha boshqa " +
      "ishga o'tkazish, ish joyini o'zgartirish va ishdan chetlashtirish.",
    objectives: [
      "Mehnat shartlarini o'zgartirish tartibini bilasiz",
      "Rozilik qachon talab qilinishini va qachon talab qilinmasligini bilasiz",
      "Vaqtincha boshqa ishga o'tkazish qoidalarini bilasiz",
      "Ishdan chetlashtirish nima ekanligini va uning oqibatini bilasiz",
    ],
    practicalSteps: [
      "Shart o'zgarishi haqidagi xabarnomani yozma oling va sanasini qayd eting",
      "Rozi bo'lmasangiz, buni ham YOZMA bildiring — jimlik rozilik deb talqin qilinishi mumkin",
      "Vaqtincha o'tkazishda muddat va haq to'lash shartlarini aniqlashtiring",
      "Ishdan chetlashtirilsangiz, asosini va davrini yozma so'rang",
    ],
    sections: [
      {
        heading: "Mehnat shartlarini o'zgartirish",
        text:
          "MEHNAT SHARTLARI deganda ish " +
          "beruvchi bilan tuzilgan mehnat " +
          "shartnomasidagi shartlar " +
          "tushuniladi: mehnat funksiyasi, " +
          "ish joyi, ish vaqti, haq to'lash " +
          "va boshqalar.\n\n" +
          "Umumiy qoida sodda va xodim " +
          "foydasiga: mehnat shartnomasi " +
          "shartlari tomonlar KELISHUVI " +
          "bilan o'zgartiriladi.\n\n" +
          "Ya'ni ish beruvchi bir tomonlama " +
          "sizning ish haqingizni " +
          "kamaytira, lavozimingizni " +
          "o'zgartira olmaydi.\n\n" +
          "Lekin qonun istisnolarni ham " +
          "nazarda tutadi: ayrim " +
          "hollarda ish beruvchi " +
          "mehnat shartlarini xodimning " +
          "roziligisiz o'zgartirish " +
          "huquqiga ega bo'ladi — " +
          "masalan tashkiliy yoki " +
          "texnologik o'zgarishlar " +
          "bilan bog'liq holatlarda.\n\n" +
          "Bunday holatlarda ham " +
          "TARTIB mavjud: xodim " +
          "oldindan xabardor " +
          "qilinishi kerak.\n\n" +
          "Xodimning o'zi ham mehnat " +
          "shartlarini o'zgartirish " +
          "huquqiga ega — qonunda " +
          "nazarda tutilgan " +
          "hollarda taklif " +
          "kiritishi mumkin.\n\n" +
          "O'zgartirish RASMIYLASHTIRILADI: " +
          "ish beruvchi tegishli " +
          "hujjat chiqaradi.\n\n" +
          "Qonunga xilof " +
          "o'zgartirishning huquqiy " +
          "oqibatlari ham " +
          "belgilangan — ya'ni " +
          "noqonuniy o'zgartirish " +
          "bekor qilinishi mumkin.",
        example:
          "Ish beruvchi og'zaki " +
          "«ertadan boshqa " +
          "lavozimda ishlaysiz» " +
          "dedi va ish haqini " +
          "kamaytirdi. Bu " +
          "shartlarni bir " +
          "tomonlama o'zgartirish " +
          "bo'lib, kelishuv " +
          "va rasmiylashtirish " +
          "bo'lmasa qonuniy " +
          "emas.",
        keyPoints: [
          "Umumiy qoida — shartlar KELISHUV bilan o'zgartiriladi",
          "Ayrim hollarda ish beruvchi rozilik olmasdan o'zgartirishi mumkin",
          "Bunday holatlarda ham oldindan xabardor qilish talab qilinadi",
          "O'zgartirish rasmiy hujjat bilan rasmiylashtiriladi",
        ],
        warning:
          "O'zgarishga rozi " +
          "bo'lmasangiz, buni " +
          "yozma bildiring. " +
          "Yangi shartlarda " +
          "ishlashni davom " +
          "ettirish rozilik " +
          "deb talqin " +
          "qilinishi mumkin.",
        lawRefs: [
          { code: "MK", article: "133" },
          { code: "MK", article: "134" },
          { code: "MK", article: "135" },
          { code: "MK", article: "136" },
          { code: "MK", article: "149" },
          { code: "MK", article: "150" },
        ],
      },
      {
        heading: "Boshqa ishga o'tkazish va ishdan chetlashtirish",
        text:
          "VAQTINCHA BOSHQA ISHGA " +
          "O'TKAZISH ikki asosda " +
          "bo'lishi mumkin.\n\n" +
          "Birinchisi — TARAFLARNING " +
          "KELISHUVIGA ko'ra. Bu " +
          "eng oddiy holat: ikki " +
          "tomon rozi.\n\n" +
          "Ikkinchisi — ISH " +
          "BERUVCHINING " +
          "TASHABBUSIGA ko'ra. Bu " +
          "faqat qonunda " +
          "ko'rsatilgan holatlarda " +
          "va belgilangan " +
          "cheklovlar doirasida " +
          "mumkin — masalan " +
          "ishlab chiqarish " +
          "zaruriyati bilan " +
          "bog'liq holatlarda.\n\n" +
          "Bunday o'tkazishda " +
          "muddat va haq to'lash " +
          "masalasi qonunda " +
          "tartibga solingan.\n\n" +
          "ISH JOYINI " +
          "O'ZGARTIRISH alohida " +
          "masala: qonun ish " +
          "joyi tushunchasini " +
          "belgilaydi va uni " +
          "o'zgartirish " +
          "tartibini nazarda " +
          "tutadi.\n\n" +
          "ISHDAN CHETLASHTIRISH " +
          "butunlay boshqa " +
          "institut va uni " +
          "ishdan bo'shatish " +
          "bilan " +
          "ARALASHTIRMASLIK " +
          "kerak.\n\n" +
          "Chetlashtirish — " +
          "xodimni mehnat " +
          "majburiyatlarini " +
          "bajarishdan " +
          "VAQTINCHA ozod " +
          "qilish. Mehnat " +
          "munosabati saqlanadi, " +
          "shartnoma bekor " +
          "qilinmaydi.\n\n" +
          "Chetlashtirish " +
          "hollari qonunda " +
          "aniq belgilangan — " +
          "ya'ni ish beruvchi " +
          "xohlagan paytda " +
          "chetlashtira " +
          "olmaydi.\n\n" +
          "Chetlashtirish " +
          "davrida ish haqini " +
          "hisoblash masalasi " +
          "ham alohida " +
          "tartibga " +
          "solingan.",
        example:
          "Xodim ishdan " +
          "chetlashtirildi va " +
          "unga «ishdan " +
          "bo'shatildingiz» " +
          "deb tushuntirildi. " +
          "Bu ikki turli " +
          "narsa: " +
          "chetlashtirishda " +
          "mehnat munosabati " +
          "saqlanadi va " +
          "uning asosi " +
          "qonunda " +
          "ko'rsatilgan " +
          "bo'lishi kerak.",
        keyPoints: [
          "Vaqtincha o'tkazish kelishuv yoki qonundagi asosda amalga oshiriladi",
          "Ish beruvchi tashabbusi bilan o'tkazish cheklovlarga bo'ysunadi",
          "Ishdan chetlashtirish — VAQTINCHA chora, bo'shatish emas",
          "Chetlashtirish hollari qonunda aniq belgilangan",
        ],
        warning:
          "Chetlashtirish " +
          "davrida hujjatlarni " +
          "to'plang va " +
          "asosini yozma " +
          "so'rang. Bu " +
          "keyinchalik " +
          "noqonuniy " +
          "bo'shatishga " +
          "aylanib ketishi " +
          "mumkin.",
        lawRefs: [
          { code: "MK", article: "141" },
          { code: "MK", article: "145" },
          { code: "MK", article: "148" },
          { code: "MK", article: "151" },
          { code: "MK", article: "152" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     4. Ishdan bo'shatish asoslari
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "ishdan-boshatish-asoslari",
    category: "labor",
    level: "mid",
    order: 6040,
    title: "Ishdan bo'shatish asoslari",
    desc:
      "Mehnat shartnomasi qanday asoslarda bekor qilinadi: " +
      "kelishuv, xodim tashabbusi, ish beruvchi tashabbusi va taqiqlar.",
    objectives: [
      "Bo'shatishning barcha asosiy guruhlarini bilasiz",
      "O'z arizangiz bilan bo'shash tartibini bilasiz",
      "Ish beruvchi tashabbusidagi asoslarni bilasiz",
      "Qachon bo'shatish TAQIQLANISHINI bilasiz",
    ],
    practicalSteps: [
      "Arizani o'zingiz yozsangiz, sanasi va ro'yxat raqamini qayd eting",
      "Bosim ostida ariza yozishga rozi bo'lmang — bu keyin «o'z xohishi» deb talqin qilinadi",
      "Bo'shatish asosini buyruqda aniq ko'rsatishni talab qiling",
      "Bo'shatish noqonuniy deb hisoblasangiz, muddatlarni yodda tutib darhol harakat qiling",
    ],
    sections: [
      {
        heading: "Bo'shatish asoslarining guruhlari",
        text:
          "Mehnat shartnomasini bekor qilish " +
          "asoslari qonunda belgilangan va " +
          "ular bir necha guruhga " +
          "bo'linadi.\n\n" +
          "TARAFLARNING KELISHUVIGA ko'ra: " +
          "eng tinch yo'l. Ikki tomon " +
          "rozi bo'lsa, shartnoma " +
          "istalgan paytda bekor " +
          "qilinishi mumkin.\n\n" +
          "MUDDAT TUGASHI munosabati " +
          "bilan: muddatli shartnoma " +
          "uchun.\n\n" +
          "XODIMNING TASHABBUSIGA ko'ra: " +
          "nomuayyan muddatga tuzilgan " +
          "shartnomani xodim o'z " +
          "arizasi bilan bekor qilishi " +
          "mumkin. Bu xodimning " +
          "so'zsiz huquqi — sabab " +
          "ko'rsatish shart emas, " +
          "faqat ogohlantirish " +
          "muddatiga rioya qilinadi.\n\n" +
          "ISH BERUVCHINING " +
          "TASHABBUSIGA ko'ra: bu " +
          "eng cheklangan guruh. " +
          "Asoslar qonunda aniq " +
          "sanalgan va ularning " +
          "ro'yxati YOPIQ.\n\n" +
          "TARAFLARNING " +
          "XOHISH-IRODASIGA " +
          "BOG'LIQ BO'LMAGAN " +
          "holatlarga ko'ra: " +
          "masalan qonunda " +
          "ko'rsatilgan " +
          "obyektiv holatlar.\n\n" +
          "Alohida asos — yangi " +
          "muddatga saylanmaganlik " +
          "yoki tanlovdan " +
          "o'tmaganlik.\n\n" +
          "Tashkilotning mulkdori " +
          "almashishi yoki qayta " +
          "tashkil etilishi " +
          "bo'yicha ham alohida " +
          "qoidalar mavjud — " +
          "muhimi shundaki, bu " +
          "o'z-o'zidan barcha " +
          "xodimlarni bo'shatish " +
          "asosi emas.",
        example:
          "Tashkilot boshqa " +
          "kompaniyaga " +
          "qo'shilgach xodimlarga " +
          "«hammani " +
          "bo'shatamiz» deyildi. " +
          "Qayta tashkil etish " +
          "o'z-o'zidan barcha " +
          "shartnomalarni bekor " +
          "qilish asosi emas — " +
          "qonunda bu holat " +
          "alohida tartibga " +
          "solingan.",
        keyPoints: [
          "Bo'shatish asoslari qonunda belgilangan va guruhlarga bo'lingan",
          "Xodim o'z arizasi bilan bo'shashda sabab ko'rsatishi shart emas",
          "Ish beruvchi tashabbusidagi asoslar ro'yxati YOPIQ",
          "Qayta tashkil etish o'z-o'zidan bo'shatish asosi emas",
        ],
        warning:
          "«O'z xohishi bilan» " +
          "ariza yozishga " +
          "majburlash keng " +
          "tarqalgan. Bunday " +
          "ariza yozmang: " +
          "keyin uni bekor " +
          "qilish va bosimni " +
          "isbotlash juda " +
          "qiyin.",
        lawRefs: [
          { code: "MK", article: "155" },
          { code: "MK", article: "156" },
          { code: "MK", article: "157" },
          { code: "MK", article: "158" },
          { code: "MK", article: "160" },
          { code: "MK", article: "168" },
        ],
      },
      {
        heading: "Ish beruvchi tashabbusi va taqiqlar",
        text:
          "Ish beruvchining tashabbusiga " +
          "ko'ra bo'shatish eng " +
          "nazorat ostidagi guruh, " +
          "chunki bu yerda xodim " +
          "kuchsizroq tomon " +
          "hisoblanadi.\n\n" +
          "Asoslar qonunda sanalgan va " +
          "ular odatda ikki " +
          "yo'nalishda: xodimning " +
          "xatti-harakati bilan " +
          "bog'liq (mehnat " +
          "majburiyatlarini buzish) " +
          "va tashkiliy sabablar " +
          "(shtat qisqartirish, " +
          "texnologiya " +
          "o'zgarishi).\n\n" +
          "Qonun mehnat " +
          "majburiyatlarini " +
          "buzishning qanday " +
          "turlari bo'shatishga " +
          "olib kelishi " +
          "mumkinligini ham " +
          "belgilaydi.\n\n" +
          "ENG MUHIM HIMOYA — " +
          "TAQIQLAR. Qonun " +
          "ayrim holatlarda ish " +
          "beruvchining " +
          "tashabbusiga ko'ra " +
          "bo'shatishni " +
          "TAQIQLAYDI.\n\n" +
          "Bunga odatda " +
          "quyidagilar kiradi: " +
          "xodim vaqtincha " +
          "mehnatga layoqatsiz " +
          "bo'lgan davr, " +
          "ta'tilda bo'lgan " +
          "davr va qonunda " +
          "ko'rsatilgan boshqa " +
          "holatlar.\n\n" +
          "Homilador ayollar " +
          "uchun alohida " +
          "kafolatlar " +
          "belgilangan — " +
          "bu himoyaning " +
          "eng kuchli " +
          "qismlaridan biri.\n\n" +
          "O'n sakkiz yoshgacha " +
          "bo'lgan xodimlar " +
          "uchun ham " +
          "qo'shimcha " +
          "kafolatlar " +
          "mavjud.\n\n" +
          "KASABA UYUSHMASI " +
          "roli: ayrim " +
          "hollarda bo'shatish " +
          "kasaba uyushmasi " +
          "qo'mitasi bilan " +
          "kelishilishi " +
          "kerak.",
        example:
          "Xodim kasallik " +
          "varaqasida " +
          "bo'lgan davrda " +
          "ishdan " +
          "bo'shatildi. " +
          "Vaqtincha mehnatga " +
          "layoqatsizlik " +
          "davrida ish " +
          "beruvchi " +
          "tashabbusi bilan " +
          "bo'shatish " +
          "taqiqlangani " +
          "uchun bu qaror " +
          "noqonuniy " +
          "hisoblanadi.",
        keyPoints: [
          "Ish beruvchi tashabbusidagi asoslar qonunda aniq sanalgan",
          "Ayrim davrlarda bo'shatish TAQIQLANADI",
          "Homilador ayollar va yosh xodimlar uchun qo'shimcha kafolatlar bor",
          "Ayrim hollarda kasaba uyushmasi bilan kelishish talab qilinadi",
        ],
        warning:
          "Bo'shatish " +
          "buyrug'ida asos " +
          "aniq " +
          "ko'rsatilmagan " +
          "bo'lsa, bu " +
          "jiddiy " +
          "protsessual " +
          "buzilish va " +
          "e'tiroz uchun " +
          "kuchli asos " +
          "bo'ladi.",
        lawRefs: [
          { code: "MK", article: "161" },
          { code: "MK", article: "162" },
          { code: "MK", article: "163" },
          { code: "MK", article: "164" },
          { code: "MK", article: "408" },
          { code: "MK", article: "421" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     5. Bo'shatish tartibi
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "ishdan-boshatish-tartibi",
    category: "labor",
    level: "mid",
    order: 6050,
    title: "Bo'shatish tartibi, hisob-kitob va nafaqa",
    desc:
      "Ogohlantirish muddati, rasmiylashtirish, mehnat daftarchasi, " +
      "yakuniy hisob-kitob va ishdan bo'shatish nafaqasi.",
    objectives: [
      "Ogohlantirish talabini va uning ma'nosini bilasiz",
      "Bo'shatish qanday rasmiylashtirilishini bilasiz",
      "Yakuniy hisob-kitobga nima kirishini bilasiz",
      "Ishdan bo'shatish nafaqasi qachon to'lanishini bilasiz",
    ],
    practicalSteps: [
      "Bo'shatish kunida mehnat daftarchangizni va buyruq nusxasini oling",
      "Yakuniy hisob-kitobni tekshiring: ish haqi, ishlatilmagan ta'til kompensatsiyasi, nafaqa",
      "Hisob-kitob to'liq bo'lmasa, YOZMA da'vo bering va nusxasini saqlang",
      "Kelishmovchilik bo'lsa muddatlarni yodda tuting — mehnat nizolarida ular qisqa",
    ],
    sections: [
      {
        heading: "Ogohlantirish va rasmiylashtirish",
        text:
          "Bo'shatish tartibi qonunda " +
          "batafsil tartibga solingan " +
          "va uning har bir bosqichi " +
          "xodim uchun himoya " +
          "vazifasini bajaradi.\n\n" +
          "OGOHLANTIRISH: ish " +
          "beruvchining tashabbusiga " +
          "ko'ra bo'shatishda xodim " +
          "oldindan ogohlantirilishi " +
          "kerak. Ogohlantirish " +
          "muddati qonunda " +
          "belgilangan.\n\n" +
          "Ogohlantirishning maqsadi " +
          "amaliy: xodimga yangi ish " +
          "izlash uchun vaqt " +
          "berish.\n\n" +
          "Texnologiya, ishlab " +
          "chiqarish va mehnatni " +
          "tashkil etish " +
          "o'zgarishi bilan bog'liq " +
          "holatlar uchun alohida " +
          "qoidalar mavjud.\n\n" +
          "RASMIYLASHTIRISH: " +
          "bo'shatish ishga qabul " +
          "qilish huquqiga ega " +
          "bo'lgan shaxs tomonidan " +
          "buyruq bilan " +
          "rasmiylashtiriladi.\n\n" +
          "Buyruqda asos ANIQ " +
          "ko'rsatilishi kerak. " +
          "Bu muhim: keyingi " +
          "nizoda aynan shu asos " +
          "tekshiriladi.\n\n" +
          "MEHNAT DAFTARCHASI va " +
          "buyruq ko'chirma " +
          "nusxasini berish " +
          "majburiyati alohida " +
          "belgilangan.\n\n" +
          "Amaliy qoida: " +
          "bo'shatish kunida " +
          "hujjatlaringizni " +
          "oling. Keyin ularni " +
          "olish uchun qayta-qayta " +
          "borish kerak " +
          "bo'ladi va bu yangi " +
          "ishga joylashishni " +
          "kechiktiradi.",
        example:
          "Xodim bo'shatildi, " +
          "lekin mehnat " +
          "daftarchasi " +
          "berilmadi va " +
          "shu sababli u " +
          "yangi ishga " +
          "joylasha " +
          "olmadi. Hujjatni " +
          "berish " +
          "majburiyati " +
          "qonunda " +
          "belgilangan va " +
          "uni bajarmaslik " +
          "javobgarlikka " +
          "olib keladi.",
        keyPoints: [
          "Ish beruvchi tashabbusidagi bo'shatishda oldindan ogohlantirish talab qilinadi",
          "Bo'shatish buyruq bilan rasmiylashtiriladi va asos aniq ko'rsatiladi",
          "Mehnat daftarchasi va buyruq nusxasini berish majburiy",
          "Hujjatlarni bo'shatish kunida olish kerak",
        ],
        warning:
          "Buyruq bilan " +
          "tanishtirilganda " +
          "rozi " +
          "bo'lmasangiz, " +
          "imzo yonida " +
          "«rozi emasman» " +
          "deb yozib " +
          "qo'ying — bu " +
          "keyingi " +
          "e'tiroz uchun " +
          "muhim.",
        lawRefs: [
          { code: "MK", article: "165" },
          { code: "MK", article: "167" },
          { code: "MK", article: "170" },
          { code: "MK", article: "171" },
        ],
      },
      {
        heading: "Hisob-kitob va nafaqa",
        text:
          "Mehnat shartnomasi bekor " +
          "qilinganda xodim bilan " +
          "HISOB-KITOB qilinadi. " +
          "Bu majburiyat qonunda " +
          "aniq belgilangan.\n\n" +
          "Hisob-kitobga odatda " +
          "quyidagilar kiradi: " +
          "ishlangan davr uchun " +
          "ish haqi, " +
          "ishlatilmagan ta'til " +
          "uchun pul " +
          "kompensatsiyasi va " +
          "qonunda nazarda " +
          "tutilgan boshqa " +
          "to'lovlar.\n\n" +
          "ISHLATILMAGAN TA'TIL " +
          "KOMPENSATSIYASI " +
          "ko'pincha " +
          "e'tibordan chetda " +
          "qoladi. Qonun " +
          "shartnoma bekor " +
          "qilinganda " +
          "ta'tilni pulli " +
          "kompensatsiya bilan " +
          "almashtirish " +
          "imkoniyatini " +
          "nazarda tutadi.\n\n" +
          "Muqobil variant ham " +
          "bor: bo'shatish " +
          "chog'ida xodimga " +
          "ta'til berish.\n\n" +
          "ISHDAN BO'SHATISH " +
          "NAFAQASI alohida " +
          "to'lov. U mehnat " +
          "shartnomasi " +
          "ALOHIDA asoslar " +
          "bo'yicha bekor " +
          "qilinganda " +
          "to'lanadi — ya'ni " +
          "har qanday " +
          "bo'shatishda " +
          "emas.\n\n" +
          "Shuning uchun " +
          "bo'shatish asosini " +
          "bilish moliyaviy " +
          "jihatdan ham " +
          "muhim: asos " +
          "nafaqa olish " +
          "huquqini " +
          "belgilaydi.\n\n" +
          "Ayrim asoslar " +
          "bo'yicha " +
          "bo'shatilgan " +
          "xodimlarga " +
          "o'rtacha oylik " +
          "ish haqini " +
          "saqlash va qayta " +
          "ishga " +
          "joylashtirish " +
          "bo'yicha " +
          "qo'shimcha " +
          "kafolatlar ham " +
          "nazarda " +
          "tutilgan.\n\n" +
          "To'lovni " +
          "kechiktirganlik " +
          "uchun ish " +
          "beruvchining " +
          "javobgarligi " +
          "belgilangan.",
        example:
          "Xodim bo'shatildi, " +
          "lekin " +
          "ishlatilmagan " +
          "ta'til uchun " +
          "kompensatsiya " +
          "to'lanmadi. Bu " +
          "hisob-kitobning " +
          "majburiy qismi " +
          "bo'lgani uchun " +
          "uni yozma talab " +
          "qilish va " +
          "olinmasa mehnat " +
          "nizosi " +
          "tartibida " +
          "undirish " +
          "mumkin.",
        keyPoints: [
          "Bo'shatishda xodim bilan hisob-kitob qilish MAJBURIY",
          "Hisob-kitobga ishlatilmagan ta'til kompensatsiyasi ham kiradi",
          "Bo'shatish nafaqasi faqat ALOHIDA asoslar bo'yicha to'lanadi",
          "To'lovni kechiktirganlik uchun javobgarlik nazarda tutilgan",
        ],
        warning:
          "Hisob-kitob " +
          "qog'ozini " +
          "tekshirmasdan " +
          "imzolamang. " +
          "«Da'vom yo'q» " +
          "degan yozuvga " +
          "imzo qo'ysangiz, " +
          "keyin talab " +
          "qo'yish " +
          "qiyinlashadi.",
        lawRefs: [
          { code: "MK", article: "172" },
          { code: "MK", article: "173" },
          { code: "MK", article: "234" },
          { code: "MK", article: "235" },
          { code: "MK", article: "100" },
          { code: "MK", article: "333" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     6. Ish vaqti
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "ish-vaqti",
    category: "labor",
    level: "basic",
    order: 6060,
    title: "Ish vaqti va uning rejimlari",
    desc:
      "Ish vaqtining normal va qisqartirilgan davomiyligi, ish " +
      "vaqtidan tashqari ish, rejimlar va hisobga olish.",
    objectives: [
      "Ish vaqtining turlarini va davomiyligini bilasiz",
      "Kim qisqartirilgan ish vaqtiga haqli ekanini bilasiz",
      "Ish vaqtidan tashqari ish qoidalarini va cheklovlarini bilasiz",
      "Ish vaqtini hisobga olish turlarini bilasiz",
    ],
    practicalSteps: [
      "Haqiqiy ish vaqtingizni o'zingiz ham yozib boring — nizoda bu foydali bo'ladi",
      "Ish vaqtidan tashqari ishga chiqishda uning rasmiylashtirilishini talab qiling",
      "Ish jadvali (grafik) bilan tanishtirilganingizni tekshiring",
      "Qisqartirilgan ish vaqtiga haqli bo'lsangiz, buni hujjat bilan tasdiqlang",
    ],
    sections: [
      {
        heading: "Ish vaqtining turlari va davomiyligi",
        text:
          "Ish vaqti — xodim ichki mehnat " +
          "tartib qoidalariga muvofiq " +
          "mehnat majburiyatlarini " +
          "bajarishi kerak bo'lgan " +
          "vaqt.\n\n" +
          "Qonun ish vaqtining bir necha " +
          "turini belgilaydi.\n\n" +
          "NORMAL DAVOMIYLIK — asosiy " +
          "shakl. U besh kunlik yoki " +
          "olti kunlik ish haftasi " +
          "asosida belgilanadi va " +
          "qonunda eng ko'p miqdori " +
          "ko'rsatilgan.\n\n" +
          "QISQARTIRILGAN DAVOMIYLIK — " +
          "ayrim toifadagi xodimlar " +
          "uchun ularning yoshi, " +
          "sog'lig'i va mehnat " +
          "sharoitlari hisobga olingan " +
          "holda belgilanadi.\n\n" +
          "Bu muhim kafolat: " +
          "qisqartirilgan ish vaqti " +
          "ish haqining " +
          "kamayishiga olib " +
          "kelmasligi kerak.\n\n" +
          "Kim haqli: o'n sakkiz " +
          "yoshgacha bo'lgan " +
          "xodimlar, nogironligi " +
          "bo'lgan ayrim toifadagi " +
          "xodimlar va noqulay " +
          "mehnat sharoitlarida " +
          "ishlovchilar.\n\n" +
          "ISH VAQTI REJIMI — " +
          "muayyan kalendar davr " +
          "mobaynida ish vaqtining " +
          "taqsimlanishi. Rejim " +
          "ichki hujjatlar yoki " +
          "shartnoma bilan " +
          "belgilanadi.\n\n" +
          "Moslashuvchan rejim, " +
          "smenali ish va boshqa " +
          "shakllar ham nazarda " +
          "tutilgan.\n\n" +
          "Zamonaviy shakl — " +
          "MASOFADAN TURIB " +
          "ISHLASH ham qonunda " +
          "tartibga solingan.",
        example:
          "O'n sakkiz yoshgacha " +
          "bo'lgan xodimga " +
          "kattalar bilan bir xil " +
          "ish vaqti belgilandi. " +
          "Qonun bu toifa uchun " +
          "qisqartirilgan " +
          "davomiylikni talab " +
          "qiladi va bu " +
          "kafolatdan voz " +
          "kechish mumkin emas.",
        keyPoints: [
          "Normal davomiylik besh yoki olti kunlik ish haftasi asosida belgilanadi",
          "Qisqartirilgan ish vaqti yosh, sog'liq va sharoitga qarab beriladi",
          "Qisqartirish ish haqining kamayishiga olib kelmasligi kerak",
          "Rejim ichki hujjatlar yoki shartnoma bilan belgilanadi",
        ],
        warning:
          "Ish jadvalidan " +
          "tashqarida doimiy " +
          "«bir oz qolib " +
          "ketish» " +
          "rasmiylashtirilmasa, " +
          "u hech qachon " +
          "to'lanmaydi. " +
          "Boshidanoq talab " +
          "qiling.",
        lawRefs: [
          { code: "MK", article: "181" },
          { code: "MK", article: "182" },
          { code: "MK", article: "183" },
          { code: "MK", article: "191" },
          { code: "MK", article: "454" },
        ],
      },
      {
        heading: "Ish vaqtidan tashqari ish va hisobga olish",
        text:
          "ISH VAQTIDAN TASHQARI ISH — " +
          "ish beruvchi tomonidan " +
          "xodimni belgilangan ish " +
          "vaqti davomiyligidan " +
          "tashqari ishga jalb " +
          "qilish.\n\n" +
          "Bu institut qat'iy " +
          "tartibga solingan, " +
          "chunki u dam olish " +
          "huquqiga bevosita " +
          "ta'sir qiladi.\n\n" +
          "Birinchidan, u " +
          "belgilangan tartibda " +
          "rasmiylashtirilishi " +
          "kerak — og'zaki " +
          "«bugun qolasiz» " +
          "yetarli emas.\n\n" +
          "Ikkinchidan, qonun ish " +
          "vaqtidan tashqari " +
          "ishning ENG KO'P " +
          "DAVOMIYLIGINI " +
          "cheklaydi. Ya'ni uni " +
          "cheksiz " +
          "qo'llash mumkin " +
          "emas.\n\n" +
          "Uchinchidan, bunday " +
          "ish uchun oshirilgan " +
          "haq to'lanadi.\n\n" +
          "DAM OLISH KUNLARIDA " +
          "va ishlanmaydigan " +
          "BAYRAM KUNLARIDA " +
          "ishlash umumiy qoida " +
          "bo'yicha " +
          "TAQIQLANADI. " +
          "Istisnolar qonunda " +
          "belgilangan va ular " +
          "tor.\n\n" +
          "ISH VAQTINI HISOBGA " +
          "OLISH — ish " +
          "beruvchining " +
          "majburiyati. " +
          "Hisobga olishning " +
          "turlari mavjud, " +
          "shu jumladan " +
          "JAMLAB hisobga " +
          "olish (ishlab " +
          "chiqarish " +
          "sharoitlari " +
          "talab qilganda).\n\n" +
          "Jamlab hisobga " +
          "olishda ish vaqti " +
          "uzunroq davr " +
          "bo'yicha " +
          "o'rtachalashtiriladi " +
          "— lekin bu ham " +
          "belgilangan " +
          "tartibda joriy " +
          "qilinadi.",
        example:
          "Xodim har hafta " +
          "bir necha soat " +
          "ortiqcha ishladi, " +
          "lekin bu " +
          "hujjatlashtirilmadi. " +
          "Nizoda ish " +
          "beruvchi «bunday " +
          "ish bo'lmagan» " +
          "dedi. Xodim o'z " +
          "yozuvlarini va " +
          "guvohlarni " +
          "keltirishga " +
          "majbur bo'ldi — " +
          "rasmiylashtirish " +
          "bu muammoni " +
          "oldini olardi.",
        keyPoints: [
          "Ish vaqtidan tashqari ish rasmiylashtirilishi kerak",
          "Uning eng ko'p davomiyligi qonunda cheklangan",
          "Dam olish va bayram kunlarida ishlash umumiy qoida bo'yicha taqiqlanadi",
          "Ish vaqtini hisobga olish — ish beruvchining majburiyati",
        ],
        warning:
          "Ish vaqti " +
          "hisobi faqat " +
          "ish beruvchida " +
          "bo'lsa, nizoda " +
          "siz zaif " +
          "holatda " +
          "qolasiz. O'z " +
          "hisobingizni " +
          "yuritish oddiy " +
          "va foydali " +
          "odat.",
        lawRefs: [
          { code: "MK", article: "189" },
          { code: "MK", article: "190" },
          { code: "MK", article: "209" },
          { code: "MK", article: "198" },
          { code: "MK", article: "199" },
          { code: "MK", article: "262" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     7. Dam olish vaqti
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "dam-olish-vaqti",
    category: "labor",
    level: "basic",
    order: 6070,
    title: "Dam olish vaqti: tanaffuslar va dam olish kunlari",
    desc:
      "Ish kuni davomidagi tanaffuslar, kunlik va haftalik dam " +
      "olish, bayram kunlari.",
    objectives: [
      "Dam olish vaqtining turlarini bilasiz",
      "Tanaffuslar qanday beriladi va ular ish vaqtiga kiradimi — bilasiz",
      "Har haftalik uzluksiz dam olish talabini bilasiz",
      "Dam olish huquqini cheklaydigan hujjatlar ishlamasligini bilasiz",
    ],
    practicalSteps: [
      "Tanaffus vaqti ichki tartib qoidalarida belgilanganini tekshiring",
      "Tanaffusdan foydalanishga to'sqinlik qilinsa, buni yozma qayd eting",
      "Haftalik dam olish kuningiz jadvalda ko'rsatilganini tekshiring",
      "Dam olish kunida ishga chaqirilsangiz, uning rasmiylashtirilishini talab qiling",
    ],
    sections: [
      {
        heading: "Tanaffuslar va kunlik dam olish",
        text:
          "Dam olish vaqti — xodim mehnat " +
          "majburiyatlarini bajarishdan " +
          "ozod bo'lgan va uni o'z " +
          "ixtiyoriga ko'ra " +
          "ishlatishi mumkin bo'lgan " +
          "vaqt.\n\n" +
          "Muhim tafsilot: barcha " +
          "«ishlamayotgan» davrlar " +
          "dam olish vaqti " +
          "hisoblanmaydi. Qonun " +
          "xodimni mehnat " +
          "majburiyatlaridan ozod " +
          "etishning dam olish " +
          "vaqti BO'LMAGAN " +
          "davrlarini ham " +
          "belgilaydi.\n\n" +
          "DAM OLISH VA OVQATLANISH " +
          "UCHUN TANAFFUS: ish " +
          "kuni (smena) davomida " +
          "xodimga beriladi. " +
          "Uning davomiyligi va " +
          "berilish vaqti ichki " +
          "hujjatlar yoki " +
          "shartnoma bilan " +
          "belgilanadi.\n\n" +
          "Ayrim holatlarda ish " +
          "kuni davomida " +
          "QO'SHIMCHA " +
          "TANAFFUSLAR ham " +
          "beriladi — masalan " +
          "mehnat sharoitlari " +
          "talab qilganda.\n\n" +
          "HAR KUNGI (smenalar " +
          "oralig'idagi) DAM " +
          "OLISH: ishning " +
          "tugashi va keyingi " +
          "ish kuni boshlanishi " +
          "o'rtasidagi vaqt " +
          "qonunda belgilangan " +
          "eng kam " +
          "davomiylikdan kam " +
          "bo'lmasligi " +
          "kerak.\n\n" +
          "Bu qoida ayniqsa " +
          "smenali ishda " +
          "muhim: xodimni " +
          "ketma-ket ikki " +
          "smenaga qo'yish " +
          "buzilish " +
          "hisoblanadi.",
        example:
          "Xodim kechki " +
          "smenani " +
          "tugatib, ertalab " +
          "yana ishga " +
          "chaqirildi va " +
          "oradagi vaqt " +
          "juda qisqa " +
          "bo'ldi. Har " +
          "kungi dam " +
          "olishning eng " +
          "kam " +
          "davomiyligi " +
          "buzilgani " +
          "uchun bu " +
          "jadval " +
          "qonuniy " +
          "emas.",
        keyPoints: [
          "Dam olish vaqti — xodim o'z ixtiyoriga ko'ra ishlatadigan vaqt",
          "Ish kuni davomida dam olish va ovqatlanish tanaffusi beriladi",
          "Ayrim sharoitlarda qo'shimcha tanaffuslar ham beriladi",
          "Smenalar oralig'idagi dam olishning eng kam davomiyligi belgilangan",
        ],
        warning:
          "«Tanaffusda " +
          "ham telefon " +
          "javob bering» " +
          "degan talab " +
          "tanaffusni " +
          "dam olish " +
          "vaqti " +
          "bo'lmay " +
          "qolishiga " +
          "olib keladi. " +
          "Buni qayd " +
          "eting.",
        lawRefs: [
          { code: "MK", article: "201" },
          { code: "MK", article: "202" },
          { code: "MK", article: "204" },
          { code: "MK", article: "205" },
          { code: "MK", article: "206" },
        ],
      },
      {
        heading: "Haftalik dam olish va bayram kunlari",
        text:
          "Xodimlarga har haftada " +
          "DAM OLISH KUNLARI " +
          "beriladi. Bu har " +
          "haftalik uzluksiz dam " +
          "olish deb ataladi.\n\n" +
          "Dam olish kunlari " +
          "ichki mehnat tartib " +
          "qoidalari yoki " +
          "smenalar jadvali " +
          "bilan belgilanadi.\n\n" +
          "DAM OLISH VA BAYRAM " +
          "KUNLARIDA ISHLASH " +
          "umumiy qoida " +
          "bo'yicha " +
          "TAQIQLANADI.\n\n" +
          "Istisnolar qonunda " +
          "aniq belgilangan " +
          "va ular tor " +
          "doirada: masalan " +
          "to'xtatib " +
          "bo'lmaydigan " +
          "ishlab chiqarish, " +
          "favqulodda " +
          "holatlar.\n\n" +
          "Bunday ish " +
          "belgilangan " +
          "tartibda " +
          "rasmiylashtiriladi " +
          "va u uchun " +
          "oshirilgan haq " +
          "to'lanadi yoki " +
          "boshqa dam " +
          "olish kuni " +
          "beriladi.\n\n" +
          "ENG MUHIM HIMOYA " +
          "QOIDASI: xodimning " +
          "qonunchilik bilan " +
          "kafolatlangan dam " +
          "olish huquqini " +
          "CHEKLAYDIGAN " +
          "hujjatlar " +
          "qoidalari " +
          "ishlamaydi.\n\n" +
          "Ya'ni ichki " +
          "nizom, buyruq " +
          "yoki shartnoma " +
          "bandida dam " +
          "olish huquqini " +
          "cheklaydigan " +
          "qoida bo'lsa, " +
          "u yuridik " +
          "kuchga ega " +
          "bo'lmaydi — " +
          "hatto siz " +
          "imzolagan " +
          "bo'lsangiz " +
          "ham.\n\n" +
          "Bu qoida " +
          "xodim uchun " +
          "juda kuchli " +
          "himoya " +
          "vositasi.",
        example:
          "Ichki nizomda " +
          "«zarurat " +
          "bo'lganda " +
          "xodim dam " +
          "olish kunida " +
          "chaqirilishi " +
          "mumkin va " +
          "qo'shimcha " +
          "haq " +
          "to'lanmaydi» " +
          "deb yozilgan. " +
          "Bunday qoida " +
          "dam olish " +
          "huquqini " +
          "cheklagani " +
          "uchun " +
          "ishlamaydi.",
        keyPoints: [
          "Har haftada uzluksiz dam olish kunlari beriladi",
          "Dam olish va bayram kunlarida ishlash umumiy qoida bo'yicha taqiqlanadi",
          "Istisno holatda ish rasmiylashtiriladi va oshirilgan haq to'lanadi",
          "Dam olish huquqini cheklaydigan ichki qoidalar YURIDIK KUCHGA EGA EMAS",
        ],
        warning:
          "Dam olish " +
          "kunida " +
          "ishlaganingizni " +
          "hujjatlashtirmasangiz, " +
          "qo'shimcha " +
          "haq yoki " +
          "muqobil dam " +
          "olish kunini " +
          "talab qilish " +
          "qiyin " +
          "bo'ladi.",
        lawRefs: [
          { code: "MK", article: "207" },
          { code: "MK", article: "209" },
          { code: "MK", article: "203" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     8. Ta'til
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "mehnat-tatili",
    category: "labor",
    level: "basic",
    order: 6080,
    title: "Mehnat ta'tili: turlari va berish tartibi",
    desc:
      "Yillik asosiy va qo'shimcha ta'tillar, ta'til stajini " +
      "hisoblash, ko'chirish, qismlarga bo'lish va chaqirib olish.",
    objectives: [
      "Ta'til turlarini va ularning farqini bilasiz",
      "Ta'til huquqi qanday paydo bo'lishini va staj hisobini bilasiz",
      "Ta'tilni ko'chirish va qismlarga bo'lish qoidalarini bilasiz",
      "Ta'tildan chaqirib olish shartlarini bilasiz",
    ],
    practicalSteps: [
      "Ta'til jadvalini ko'ring va o'z ta'til vaqtingizni oldindan bilib oling",
      "Ta'til uchun ariza bering va uning qabul qilinganini qayd eting",
      "Ta'til pulini ta'tilgacha olishingiz kerakligini yodda tuting",
      "Ta'tilingiz ko'chirilsa, buning asosini va yangi muddatini yozma oling",
    ],
    sections: [
      {
        heading: "Ta'til turlari va davomiyligi",
        text:
          "Qonun ta'tillarni bir necha " +
          "turga ajratadi.\n\n" +
          "HAR YILGI MEHNAT TA'TILI — " +
          "asosiy tur. U dam olish " +
          "va ishlash qobiliyatini " +
          "tiklash uchun beriladi.\n\n" +
          "U ham o'z ichida bo'linadi: " +
          "har yilgi ASOSIY eng kam " +
          "ta'til, har yilgi asosiy " +
          "UZAYTIRILGAN ta'til va " +
          "har yilgi QO'SHIMCHA " +
          "ta'tillar.\n\n" +
          "Uzaytirilgan ta'til " +
          "yoshi va sog'lig'i " +
          "holati hisobga olingan " +
          "holda ayrim toifadagi " +
          "xodimlarga beriladi.\n\n" +
          "Qo'shimcha ta'tillar " +
          "turli asoslarda " +
          "beriladi, shu " +
          "jumladan bitta " +
          "tashkilotda yoki " +
          "tarmoqda ko'p yillik " +
          "ish staji uchun.\n\n" +
          "Asosiy va qo'shimcha " +
          "ta'tillar JAMLANADI " +
          "— ya'ni ular " +
          "birlashtirilib " +
          "beriladi.\n\n" +
          "TA'TIL STAJI: har " +
          "yilgi ta'tilni olish " +
          "huquqini beradigan " +
          "ish staji qonunda " +
          "belgilangan tartibda " +
          "hisoblanadi.\n\n" +
          "Birinchi ish yili " +
          "uchun ta'til " +
          "berish tartibi " +
          "alohida " +
          "belgilangan; " +
          "ikkinchi va " +
          "keyingi yillar " +
          "uchun tartib " +
          "boshqacha.\n\n" +
          "KAFOLAT: ta'tilda " +
          "bo'lgan davrda " +
          "xodimning ish " +
          "o'rni (lavozimi) " +
          "saqlanadi.",
        example:
          "Xodim birinchi " +
          "ish yilida " +
          "ta'til so'radi " +
          "va «bir yil " +
          "ishlamaguningizcha " +
          "ta'til yo'q» " +
          "degan javob " +
          "oldi. Qonun " +
          "birinchi ish " +
          "yili uchun " +
          "ta'til berish " +
          "tartibini " +
          "alohida " +
          "belgilaydi — " +
          "shuning uchun " +
          "bu javob " +
          "avtomatik " +
          "to'g'ri emas.",
        keyPoints: [
          "Ta'tillar: asosiy eng kam, asosiy uzaytirilgan va qo'shimcha",
          "Uzaytirilgan ta'til yosh va sog'liq holatiga qarab beriladi",
          "Asosiy va qo'shimcha ta'tillar jamlanadi",
          "Ta'til davrida ish o'rni va lavozim saqlanadi",
        ],
        warning:
          "Ta'til " +
          "berilmasligi " +
          "uzoq davom " +
          "etsa, u " +
          "yig'ilib " +
          "boradi va bu " +
          "ish beruvchi " +
          "uchun " +
          "javobgarlik " +
          "asosi " +
          "bo'ladi. " +
          "Har yili " +
          "ta'tilni " +
          "rasmiy " +
          "so'rang.",
        lawRefs: [
          { code: "MK", article: "213" },
          { code: "MK", article: "216" },
          { code: "MK", article: "217" },
          { code: "MK", article: "218" },
          { code: "MK", article: "219" },
          { code: "MK", article: "215" },
        ],
      },
      {
        heading: "Berish, ko'chirish va chaqirib olish",
        text:
          "Ta'til berish tartibi " +
          "amalda ko'p savol " +
          "tug'diradi.\n\n" +
          "KO'CHIRISH VA " +
          "UZAYTIRISH: qonun " +
          "ta'tilni uzaytirish " +
          "yoki boshqa muddatga " +
          "ko'chirish " +
          "asoslarini " +
          "belgilaydi — " +
          "masalan xodim " +
          "ta'til davrida " +
          "kasal bo'lib " +
          "qolsa.\n\n" +
          "Bu muhim kafolat: " +
          "kasallik ta'tilni " +
          "«yeb qo'ymaydi».\n\n" +
          "Ta'tilning bir " +
          "qismini keyingi " +
          "ish yiliga " +
          "ko'chirish ham " +
          "mumkin, lekin " +
          "belgilangan " +
          "shartlar " +
          "doirasida.\n\n" +
          "QISMLARGA BO'LISH: " +
          "xodim va ish " +
          "beruvchi " +
          "o'rtasidagi " +
          "kelishuvga ko'ra " +
          "ta'til qismlarga " +
          "bo'linishi " +
          "mumkin. Muhim " +
          "so'z — " +
          "KELISHUV: ish " +
          "beruvchi buni " +
          "bir tomonlama " +
          "hal qila " +
          "olmaydi.\n\n" +
          "CHAQIRIB OLISH: " +
          "xodimni " +
          "ta'tildan " +
          "chaqirib olish " +
          "qonunda " +
          "belgilangan " +
          "tartibda " +
          "amalga " +
          "oshiriladi va " +
          "u ham odatda " +
          "xodimning " +
          "roziligini " +
          "talab " +
          "qiladi.\n\n" +
          "TA'TIL PULI: " +
          "xodimga har " +
          "yilgi mehnat " +
          "ta'tilida " +
          "bo'lgan vaqti " +
          "uchun o'rtacha " +
          "ish haqi " +
          "to'lanadi.\n\n" +
          "KOMPENSATSIYA: " +
          "ta'tilni pulli " +
          "kompensatsiya " +
          "bilan " +
          "almashtirish " +
          "imkoniyati " +
          "cheklangan — " +
          "asosan " +
          "shartnoma " +
          "bekor " +
          "qilinganda.",
        example:
          "Xodim ta'til " +
          "davrida " +
          "kasal bo'lib " +
          "qoldi va " +
          "kasallik " +
          "varaqasi " +
          "oldi. Qonun " +
          "bunday " +
          "holatda " +
          "ta'tilni " +
          "uzaytirish " +
          "yoki " +
          "ko'chirish " +
          "imkoniyatini " +
          "beradi — " +
          "ta'til " +
          "shunchaki " +
          "yo'qolib " +
          "ketmaydi.",
        keyPoints: [
          "Kasallik holatida ta'til uzaytiriladi yoki ko'chiriladi",
          "Ta'tilni qismlarga bo'lish KELISHUV bilan amalga oshiriladi",
          "Ta'tildan chaqirib olish belgilangan tartibda va odatda rozilik bilan",
          "Ta'til vaqti uchun o'rtacha ish haqi to'lanadi",
        ],
        warning:
          "Ta'tilni pul " +
          "bilan " +
          "almashtirish " +
          "imkoniyati " +
          "cheklangan. " +
          "«Ta'tilga " +
          "chiqmang, " +
          "pulini " +
          "beramiz» " +
          "degan taklif " +
          "ko'p " +
          "holatlarda " +
          "qonuniy " +
          "emas.",
        lawRefs: [
          { code: "MK", article: "227" },
          { code: "MK", article: "229" },
          { code: "MK", article: "230" },
          { code: "MK", article: "231" },
          { code: "MK", article: "232" },
          { code: "MK", article: "233" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     9. Ijtimoiy ta'tillar
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "ijtimoiy-tatil",
    category: "labor",
    level: "mid",
    order: 6090,
    title: "Ijtimoiy ta'tillar",
    desc:
      "Onalik, bolani parvarishlash, ta'lim olish uchun ta'tillar " +
      "va ish haqi saqlanmaydigan ta'til.",
    objectives: [
      "Ijtimoiy ta'til nima ekanligini va mehnat ta'tilidan farqini bilasiz",
      "Qanday ijtimoiy ta'tillar mavjudligini bilasiz",
      "Ish haqi saqlanmaydigan ta'til qoidalarini bilasiz",
      "Ijtimoiy ta'til davrida ish o'rni saqlanishini bilasiz",
    ],
    practicalSteps: [
      "Ijtimoiy ta'tilga haqli bo'lsangiz, arizani hujjatlar bilan birga bering",
      "Bolani parvarishlash ta'tilida ish o'rningiz saqlanishini yodda tuting",
      "Ta'lim ta'tili uchun o'quv muassasasidan ma'lumotnoma oling",
      "Ish haqi saqlanmaydigan ta'tilga majburlashga rozi bo'lmang",
    ],
    sections: [
      {
        heading: "Ijtimoiy ta'tillar va ularning turlari",
        text:
          "IJTIMOIY TA'TILLAR mehnat " +
          "ta'tilidan maqsadi " +
          "bilan farq qiladi. " +
          "Mehnat ta'tili dam " +
          "olish uchun, ijtimoiy " +
          "ta'til esa maxsus " +
          "hayotiy holat uchun " +
          "beriladi.\n\n" +
          "Qonunga muvofiq " +
          "xodimlarga onalik, " +
          "bolalarni " +
          "parvarishlash va " +
          "ta'lim olish uchun " +
          "ta'tillar beriladi.\n\n" +
          "MUHIM FARQ: ijtimoiy " +
          "ta'til mehnat " +
          "ta'tilini " +
          "almashtirmaydi va " +
          "uni kamaytirmaydi. " +
          "Ya'ni bola " +
          "parvarishlash " +
          "ta'tilida " +
          "bo'lgan xodim " +
          "keyin mehnat " +
          "ta'tili huquqini " +
          "ham saqlaydi.\n\n" +
          "Ijtimoiy " +
          "ta'tillar " +
          "berish asoslari " +
          "va ulardan " +
          "foydalanishning " +
          "o'ziga xos " +
          "xususiyatlari " +
          "qonunda " +
          "belgilangan.\n\n" +
          "Jamoa kelishuvlari, " +
          "jamoa shartnomasi " +
          "yoki boshqa " +
          "huquqiy " +
          "hujjatlarda " +
          "QO'SHIMCHA " +
          "ijtimoiy " +
          "ta'tillar ham " +
          "nazarda " +
          "tutilishi " +
          "mumkin — bu " +
          "qonundagi " +
          "kafolatlarni " +
          "yaxshilash " +
          "yo'li.\n\n" +
          "Ayrim hollarda " +
          "ish haqi " +
          "QISMAN " +
          "saqlanadigan " +
          "ta'til ham " +
          "beriladi.",
        example:
          "Bolani " +
          "parvarishlash " +
          "ta'tilidan " +
          "qaytgan " +
          "xodimga " +
          "«ta'tilda " +
          "bo'lgan " +
          "davringiz " +
          "uchun mehnat " +
          "ta'tili " +
          "yo'q» " +
          "deyildi. " +
          "Ijtimoiy " +
          "ta'til " +
          "mehnat " +
          "ta'tilining " +
          "o'rnini " +
          "bosmaydi — " +
          "bu ikki " +
          "alohida " +
          "huquq.",
        keyPoints: [
          "Ijtimoiy ta'til maxsus hayotiy holat uchun beriladi",
          "Turlari: onalik, bolani parvarishlash, ta'lim olish",
          "Ijtimoiy ta'til mehnat ta'tilini almashtirmaydi",
          "Jamoa hujjatlarida qo'shimcha ijtimoiy ta'tillar belgilanishi mumkin",
        ],
        warning:
          "Ijtimoiy " +
          "ta'tilga " +
          "chiqqan " +
          "xodimni " +
          "bo'shatish " +
          "yoki " +
          "lavozimini " +
          "o'zgartirish " +
          "bo'yicha " +
          "cheklovlar " +
          "mavjud. " +
          "Bunday " +
          "holatda " +
          "darhol " +
          "huquqiy " +
          "yordam " +
          "so'rang.",
        lawRefs: [
          { code: "MK", article: "236" },
          { code: "MK", article: "237" },
          { code: "MK", article: "238" },
          { code: "MK", article: "239" },
          { code: "MK", article: "240" },
        ],
      },
      {
        heading: "Ish haqi saqlanmaydigan ta'til",
        text:
          "ISH HAQI SAQLANMAYDIGAN " +
          "TA'TIL — xodimga " +
          "shaxsiy sabablarga " +
          "ko'ra beriladigan, " +
          "lekin haq " +
          "to'lanmaydigan " +
          "ta'til.\n\n" +
          "Uning berilishining " +
          "umumiy tartibi " +
          "qonunda " +
          "belgilangan.\n\n" +
          "ASOSIY QOIDA: bunday " +
          "ta'til xodimning " +
          "ARIZASI asosida " +
          "beriladi. Ya'ni u " +
          "xodimning " +
          "tashabbusi bilan " +
          "boshlanadi.\n\n" +
          "Bu juda muhim " +
          "amaliy nuqta. " +
          "Ish beruvchi " +
          "xodimni bunday " +
          "ta'tilga " +
          "MAJBURLAY " +
          "olmaydi.\n\n" +
          "Amalda ko'p " +
          "uchraydigan " +
          "buzilish: ish " +
          "hajmi " +
          "kamayganda " +
          "xodimlarni " +
          "«o'z " +
          "hisobidan " +
          "ta'til» ga " +
          "chiqarish. " +
          "Bu qonuniy " +
          "emas.\n\n" +
          "To'g'ri yo'l " +
          "boshqacha: " +
          "ishlab " +
          "chiqarish " +
          "to'xtaganda " +
          "yoki ish " +
          "hajmi " +
          "kamayganda " +
          "qonun " +
          "boshqa " +
          "mexanizmlarni " +
          "nazarda " +
          "tutadi va " +
          "ular " +
          "odatda " +
          "to'lov " +
          "bilan " +
          "bog'liq.\n\n" +
          "Shu sababli " +
          "sizdan " +
          "«o'z " +
          "arizangiz " +
          "bilan» " +
          "haq " +
          "to'lanmaydigan " +
          "ta'tilga " +
          "chiqish " +
          "so'ralsa, " +
          "bunga rozi " +
          "bo'lish " +
          "shart " +
          "emas.",
        example:
          "Korxonada " +
          "buyurtma " +
          "kamaydi va " +
          "xodimlarga " +
          "«ikki oy " +
          "o'z " +
          "hisobingizdan " +
          "ta'tilga " +
          "chiqing» " +
          "deyildi. " +
          "Bunday " +
          "ta'til " +
          "faqat " +
          "xodimning " +
          "o'z " +
          "arizasi " +
          "bilan " +
          "beriladi — " +
          "majburlash " +
          "qonuniy " +
          "emas.",
        keyPoints: [
          "Ish haqi saqlanmaydigan ta'til xodim ARIZASI bilan beriladi",
          "Ish beruvchi bunday ta'tilga MAJBURLAY olmaydi",
          "Ish hajmi kamayganda qonun boshqa mexanizmlarni nazarda tutadi",
          "Bunday ta'tilga rozi bo'lmaslik huquqingiz bor",
        ],
        warning:
          "«O'z " +
          "hisobidan » " +
          "ariza " +
          "yozsangiz, " +
          "keyin bu " +
          "davr uchun " +
          "haq talab " +
          "qilish " +
          "deyarli " +
          "imkonsiz " +
          "bo'ladi — " +
          "hujjat " +
          "sizning " +
          "xohishingizni " +
          "ko'rsatadi.",
        lawRefs: [
          { code: "MK", article: "241" },
          { code: "MK", article: "240" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     10. Ish haqi
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "ish-haqi",
    category: "labor",
    level: "basic",
    order: 6100,
    title: "Ish haqi: tuzilishi, to'lash muddatlari va shakllari",
    desc:
      "Ish haqi nimalardan iborat, qachon va qanday to'lanadi, " +
      "eng kam miqdor va kechiktirish uchun javobgarlik.",
    objectives: [
      "Ish haqining tuzilishini bilasiz",
      "To'lash muddatlari va shakllarini bilasiz",
      "Eng kam miqdor kafolatini bilasiz",
      "To'lovni kechiktirganlik uchun javobgarlikni bilasiz",
    ],
    practicalSteps: [
      "Har oy ish haqi hisob varaqasini oling va tekshiring",
      "To'lov kechiksa, YOZMA da'vo bering va nusxasini saqlang",
      "Ish haqi naqd berilsa, tilxat olishni unutmang",
      "Hisoblangan va qo'lga tekkan summa farqini tushunib turing",
    ],
    sections: [
      {
        heading: "Ish haqi tuzilishi va eng kam miqdor",
        text:
          "ISH HAQI asosiy (bazaviy) " +
          "va qo'shimcha " +
          "(o'zgaruvchan) " +
          "qismlardan iborat " +
          "bo'ladi.\n\n" +
          "Asosiy qism — lavozim " +
          "maoshi yoki tarif " +
          "stavkasi. Qo'shimcha " +
          "qism — mukofotlar, " +
          "ustamalar, " +
          "qo'shimcha " +
          "to'lovlar.\n\n" +
          "Bu tuzilmani " +
          "bilish muhim: " +
          "qo'shimcha qism " +
          "ko'pincha " +
          "shartli bo'ladi " +
          "va uni " +
          "kamaytirish " +
          "osonroq. " +
          "Shuning uchun " +
          "shartnomada " +
          "asosiy qism " +
          "qanday " +
          "belgilanganiga " +
          "e'tibor " +
          "bering.\n\n" +
          "MEHNATGA HAQ " +
          "TO'LASHNING ENG " +
          "KAM MIQDORI " +
          "davlat " +
          "tomonidan " +
          "belgilanadi. " +
          "Bu asosiy " +
          "kafolat: " +
          "to'liq ish " +
          "vaqti " +
          "ishlagan " +
          "xodimning ish " +
          "haqi undan " +
          "kam " +
          "bo'lmasligi " +
          "kerak.\n\n" +
          "Mehnatga haq " +
          "to'lash " +
          "tizimi va " +
          "uni " +
          "belgilash " +
          "tartibi " +
          "qonunda " +
          "nazarda " +
          "tutilgan. " +
          "Tizim " +
          "vaqtbay, " +
          "ishbay yoki " +
          "aralash " +
          "bo'lishi " +
          "mumkin.\n\n" +
          "Ishbay " +
          "tizimda " +
          "narxlarni " +
          "aniqlash " +
          "va mehnat " +
          "normalari " +
          "alohida " +
          "tartibga " +
          "solingan.",
        example:
          "Xodimning " +
          "shartnomasida " +
          "asosiy maosh " +
          "juda past, " +
          "qolgan qismi " +
          "«mukofot» " +
          "sifatida " +
          "belgilangan " +
          "edi. Ish " +
          "beruvchi " +
          "mukofotni " +
          "to'xtatganda " +
          "daromad " +
          "keskin " +
          "kamaydi. " +
          "Shartnomadagi " +
          "tuzilma " +
          "aynan shu " +
          "riskni " +
          "belgilaydi.",
        keyPoints: [
          "Ish haqi asosiy va qo'shimcha qismlardan iborat",
          "Qo'shimcha qism ko'pincha shartli — uni kamaytirish osonroq",
          "Eng kam miqdor davlat tomonidan belgilanadi va kafolatlanadi",
          "Haq to'lash tizimi vaqtbay, ishbay yoki aralash bo'lishi mumkin",
        ],
        warning:
          "Shartnomada " +
          "«ish haqi " +
          "kelishuv " +
          "bo'yicha» " +
          "degan " +
          "ibora " +
          "yetarli " +
          "emas. " +
          "Aniq " +
          "raqam " +
          "yozilishi " +
          "kerak.",
        lawRefs: [
          { code: "MK", article: "248" },
          { code: "MK", article: "245" },
          { code: "MK", article: "249" },
          { code: "MK", article: "277" },
        ],
      },
      {
        heading: "To'lash muddatlari, shakllari va kechikish",
        text:
          "ISH HAQINI TO'LASH " +
          "MUDDATLARI jamoa " +
          "shartnomasida yoki " +
          "ichki hujjatlarda " +
          "belgilanadi.\n\n" +
          "Muhimi shundaki, " +
          "muddat BELGILANGAN " +
          "bo'lishi kerak — " +
          "«pul tushganda " +
          "beramiz» degan " +
          "yondashuv " +
          "qonuniy emas.\n\n" +
          "TO'LASH SHAKLLARI " +
          "va joyi ham " +
          "tartibga " +
          "solingan. Asosiy " +
          "qoida: ish haqi " +
          "milliy valyutada " +
          "(so'mda) " +
          "to'lanadi.\n\n" +
          "Ya'ni ish haqini " +
          "tovar bilan yoki " +
          "boshqa shaklda " +
          "to'lash umumiy " +
          "qoida bo'yicha " +
          "cheklangan.\n\n" +
          "KECHIKTIRISH " +
          "UCHUN " +
          "JAVOBGARLIK " +
          "alohida " +
          "belgilangan: " +
          "xodimga ish " +
          "haqi va unga " +
          "to'lanishi " +
          "lozim bo'lgan " +
          "boshqa " +
          "to'lovlarni " +
          "kechiktirganlik " +
          "uchun ish " +
          "beruvchi " +
          "javobgar " +
          "bo'ladi.\n\n" +
          "Bu qoidaning " +
          "amaliy " +
          "ma'nosi: " +
          "kechiktirilgan " +
          "ish haqi " +
          "bo'yicha siz " +
          "faqat asosiy " +
          "summani emas, " +
          "qo'shimcha " +
          "to'lovni ham " +
          "talab qilishga " +
          "haqli " +
          "bo'lishingiz " +
          "mumkin.\n\n" +
          "Amaliy " +
          "ketma-ketlik: " +
          "yozma da'vo " +
          "→ mehnat " +
          "nizolari " +
          "bo'yicha " +
          "komissiya " +
          "yoki sud → " +
          "davlat " +
          "mehnat " +
          "inspeksiyasiga " +
          "murojaat.\n\n" +
          "Xodimning " +
          "pulga oid " +
          "talablarini " +
          "qanoatlantirish " +
          "bo'yicha " +
          "ham alohida " +
          "qoida " +
          "mavjud.",
        example:
          "Ish haqi " +
          "bir necha " +
          "oy " +
          "kechiktirildi. " +
          "Xodim " +
          "faqat " +
          "og'zaki " +
          "so'radi va " +
          "hech qanday " +
          "iz " +
          "qolmadi. " +
          "Yozma " +
          "da'vo " +
          "bergan " +
          "bo'lsa, " +
          "kechikish " +
          "sanasi " +
          "va " +
          "summasi " +
          "qayd " +
          "etilgan " +
          "bo'lardi.",
        keyPoints: [
          "To'lash muddatlari oldindan belgilanishi shart",
          "Ish haqi milliy valyutada to'lanadi",
          "Kechiktirganlik uchun ish beruvchining javobgarligi belgilangan",
          "Da'voni YOZMA berish keyingi bosqichlar uchun asos bo'ladi",
        ],
        warning:
          "Ish haqi " +
          "«konvertda» " +
          "berilsa, " +
          "u rasman " +
          "mavjud " +
          "emas: " +
          "nizoda, " +
          "ta'tilda " +
          "va " +
          "pensiya " +
          "hisobida " +
          "faqat " +
          "rasmiy " +
          "summa " +
          "hisobga " +
          "olinadi.",
        lawRefs: [
          { code: "MK", article: "253" },
          { code: "MK", article: "256" },
          { code: "MK", article: "333" },
          { code: "MK", article: "546" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     11. Ushlab qolish va kompensatsiya
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "ushlab-qolish",
    category: "labor",
    level: "mid",
    order: 6110,
    title: "Ish haqidan ushlab qolish va kompensatsiya to'lovlari",
    desc:
      "Ish haqidan qanday hollarda va qancha ushlab qolish mumkin, " +
      "kafolatli va kompensatsiya to'lovlari.",
    objectives: [
      "Ushlab qolish qachon qonuniy ekanini bilasiz",
      "Ushlab qolish miqdorining chegarasini bilasiz",
      "Kafolatli qo'shimcha to'lovlarni bilasiz",
      "Kompensatsiya to'lovlari nima ekanligini bilasiz",
    ],
    practicalSteps: [
      "Ish haqidan ushlab qolinsa, uning asosini yozma so'rang",
      "Rozilik so'ralsa, nima uchun va qancha ekanini aniq bilib rozilik bering",
      "Ushlab qolish chegarasi buzilgan bo'lsa, buni hisob varaqasi bilan ko'rsating",
      "Xizmat safari va ko'chib o'tish xarajatlari uchun hujjatlarni saqlang",
    ],
    sections: [
      {
        heading: "Ushlab qolish qoidalari va chegaralari",
        text:
          "Ish haqidan ushlab qolish " +
          "qat'iy tartibga " +
          "solingan, chunki ish " +
          "haqi xodimning asosiy " +
          "daromad manbai.\n\n" +
          "Umumiy qoidaga ko'ra " +
          "ushlab qolish " +
          "xodimning YOZMA " +
          "ROZILIGI bilan " +
          "amalga oshiriladi.\n\n" +
          "Ya'ni ish beruvchi " +
          "o'z qarori bilan " +
          "ish haqidan " +
          "istalgan summani " +
          "ushlab qola " +
          "olmaydi.\n\n" +
          "Qonunda belgilangan " +
          "hollarda esa " +
          "ushlab qolish " +
          "rozilikdan qat'i " +
          "nazar amalga " +
          "oshiriladi — " +
          "masalan sud " +
          "qarori asosida " +
          "(aliment kabi).\n\n" +
          "MIQDOR CHEGARASI " +
          "alohida " +
          "belgilangan: " +
          "har bir to'lov " +
          "chog'ida ish " +
          "haqidan " +
          "ushlab " +
          "qolinadigan " +
          "summa " +
          "qonunda " +
          "ko'rsatilgan " +
          "foizdan " +
          "oshmasligi " +
          "kerak.\n\n" +
          "Bu kafolat " +
          "xodimni " +
          "daromadsiz " +
          "qoldirmaslik " +
          "uchun " +
          "o'ylab " +
          "topilgan.\n\n" +
          "Amaliy " +
          "maslahat: " +
          "hisob " +
          "varaqasini " +
          "har oy " +
          "tekshiring. " +
          "Ushlab " +
          "qolish " +
          "bo'lsa, " +
          "uning " +
          "asosi va " +
          "miqdori " +
          "ko'rsatilgan " +
          "bo'lishi " +
          "kerak.",
        example:
          "Ish " +
          "beruvchi " +
          "xodimning " +
          "aybi bilan " +
          "yuzaga " +
          "kelgan " +
          "zararni " +
          "to'liq " +
          "bir oyda " +
          "ushlab " +
          "qoldi. " +
          "Har bir " +
          "to'lovda " +
          "ushlab " +
          "qolish " +
          "chegarasi " +
          "belgilangani " +
          "uchun bu " +
          "harakat " +
          "qonuniy " +
          "emas.",
        keyPoints: [
          "Umumiy qoida — ushlab qolish xodimning YOZMA roziligi bilan",
          "Qonunda belgilangan hollarda rozilik talab qilinmaydi",
          "Har bir to'lovda ushlab qolish miqdori cheklangan",
          "Hisob varaqasida ushlab qolish asosi ko'rsatilishi kerak",
        ],
        warning:
          "«Kelasi " +
          "oydan " +
          "ushlab " +
          "qolamiz» " +
          "degan " +
          "og'zaki " +
          "xabarga " +
          "rozilik " +
          "bermang. " +
          "Rozilik " +
          "yozma va " +
          "aniq " +
          "summa " +
          "bilan " +
          "bo'lishi " +
          "kerak.",
        lawRefs: [
          { code: "MK", article: "269" },
          { code: "MK", article: "270" },
        ],
      },
      {
        heading: "Kafolatli va kompensatsiya to'lovlari",
        text:
          "Qonun ish haqidan " +
          "tashqari ikki tur " +
          "to'lovni nazarda " +
          "tutadi va ularni " +
          "farqlash " +
          "foydali.\n\n" +
          "KAFOLATLI " +
          "QO'SHIMCHA " +
          "TO'LOVLAR: ish " +
          "beruvchining " +
          "xodimga " +
          "kafolatli " +
          "qo'shimcha " +
          "to'lovlarni " +
          "amalga oshirish " +
          "majburiyati " +
          "qonunda " +
          "belgilangan.\n\n" +
          "Bular xodim " +
          "ishlamagan, " +
          "lekin qonun " +
          "bo'yicha " +
          "daromadi " +
          "saqlanishi " +
          "kerak bo'lgan " +
          "davrlarga " +
          "tegishli.\n\n" +
          "KOMPENSATSIYA " +
          "TO'LOVLARI " +
          "boshqacha: " +
          "ular xodim " +
          "ish bilan " +
          "bog'liq " +
          "XARAJAT " +
          "qilganda " +
          "uning " +
          "o'rnini " +
          "qoplaydi.\n\n" +
          "Misollar: " +
          "boshqa " +
          "joydagi " +
          "ishga " +
          "ko'chib " +
          "o'tish " +
          "bilan " +
          "bog'liq " +
          "xarajatlar; " +
          "xodimga " +
          "tegishli " +
          "mol-mulkdan " +
          "ish " +
          "beruvchi " +
          "manfaatlarini " +
          "ko'zlab " +
          "foydalanilganda " +
          "xarajatlarni " +
          "qoplash.\n\n" +
          "Farqi " +
          "amaliy: " +
          "kompensatsiya " +
          "— bu " +
          "daromad " +
          "emas, " +
          "sarflangan " +
          "pulning " +
          "qaytarilishi. " +
          "Shuning " +
          "uchun " +
          "uni " +
          "talab " +
          "qilish " +
          "uchun " +
          "XARAJAT " +
          "hujjati " +
          "kerak.\n\n" +
          "Shu " +
          "sababli " +
          "xizmat " +
          "safari, " +
          "ko'chib " +
          "o'tish " +
          "yoki " +
          "shaxsiy " +
          "mol-mulkdan " +
          "foydalanish " +
          "holatlarida " +
          "barcha " +
          "cheklarni " +
          "saqlash " +
          "kerak.",
        example:
          "Xodim " +
          "ish " +
          "uchun " +
          "o'z " +
          "avtomobilidan " +
          "muntazam " +
          "foydalandi, " +
          "lekin " +
          "hech " +
          "qanday " +
          "kelishuv " +
          "va " +
          "hujjat " +
          "yo'q " +
          "edi. " +
          "Kompensatsiya " +
          "talab " +
          "qilish " +
          "uchun " +
          "avval " +
          "foydalanish " +
          "faktini " +
          "va " +
          "xarajatni " +
          "ko'rsatish " +
          "kerak.",
        keyPoints: [
          "Kafolatli to'lovlar — ishlanmagan, lekin daromad saqlanadigan davrlar uchun",
          "Kompensatsiya — ish bilan bog'liq XARAJATNI qoplash",
          "Kompensatsiya daromad emas, sarflangan pulning qaytarilishi",
          "Uni talab qilish uchun xarajat hujjati kerak",
        ],
        warning:
          "Shaxsiy " +
          "mol-mulkni " +
          "ish " +
          "uchun " +
          "ishlatishni " +
          "oldindan " +
          "yozma " +
          "kelishib " +
          "oling. " +
          "Aks " +
          "holda " +
          "xarajatni " +
          "qoplatib " +
          "olish " +
          "qiyin " +
          "bo'ladi.",
        lawRefs: [
          { code: "MK", article: "281" },
          { code: "MK", article: "285" },
          { code: "MK", article: "289" },
          { code: "MK", article: "293" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     12. Mehnat intizomi
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "mehnat-intizomi",
    category: "labor",
    level: "mid",
    order: 6120,
    title: "Mehnat intizomi va intizomiy javobgarlik",
    desc:
      "Intizomiy qilmish nima, qanday jazo choralari mavjud, " +
      "qo'llash tartibi, muddatlari va jazoni olib tashlash.",
    objectives: [
      "Intizomiy javobgarlik asosini bilasiz",
      "Qanday intizomiy jazo choralari mavjudligini bilasiz",
      "Jazo qo'llash TARTIBINI va uning bosqichlarini bilasiz",
      "Jazo muddatlarini va olib tashlash tartibini bilasiz",
    ],
    practicalSteps: [
      "Tushuntirish so'ralsa, uni YOZMA bering va nusxasini saqlang",
      "Jazo buyrug'i bilan tanishtirilishingiz kerakligini yodda tuting",
      "Rozi bo'lmasangiz, imzo yonida «rozi emasman» deb yozing",
      "Tartib buzilgan bo'lsa (tushuntirish so'ralmagan, muddat o'tgan) — bu e'tiroz uchun asos",
    ],
    sections: [
      {
        heading: "Intizomiy javobgarlik va jazo turlari",
        text:
          "INTIZOMIY JAVOBGARLIK xodim " +
          "tomonidan intizomiy qilmish " +
          "sodir etilgani uchun " +
          "yuzaga keladi.\n\n" +
          "Intizomiy qilmish — mehnat " +
          "majburiyatlarini aybli " +
          "ravishda bajarmaslik " +
          "yoki lozim darajada " +
          "bajarmaslik.\n\n" +
          "«AYBLI» so'zi juda " +
          "muhim: agar xodim " +
          "majburiyatni obyektiv " +
          "sabablarga ko'ra " +
          "bajara olmagan " +
          "bo'lsa (masalan " +
          "kerakli sharoit " +
          "yaratilmagan), " +
          "intizomiy javobgarlik " +
          "yuzaga kelmaydi.\n\n" +
          "JAZO CHORALARI qonunda " +
          "aniq sanalgan va " +
          "bu ro'yxat YOPIQ.\n\n" +
          "Ya'ni qonunda " +
          "ko'rsatilmagan " +
          "«jazo» qo'llash " +
          "mumkin emas. " +
          "Amalda tez-tez " +
          "uchraydigan " +
          "noqonuniy " +
          "«jazolar»: ish " +
          "haqini kesish, " +
          "jarima solish, " +
          "ta'tildan mahrum " +
          "qilish, qo'shimcha " +
          "ish yuklash.\n\n" +
          "Bularning hech " +
          "biri qonuniy " +
          "intizomiy jazo " +
          "emas.\n\n" +
          "Ayrim toifadagi " +
          "xodimlar uchun " +
          "intizom " +
          "to'g'risidagi " +
          "ustavlar va " +
          "nizomlar " +
          "qo'llanilishi " +
          "mumkin.",
        example:
          "Xodim kechikkani " +
          "uchun undan " +
          "ish haqidan " +
          "jarima " +
          "ushlab " +
          "qolindi. " +
          "Jarima " +
          "qonundagi " +
          "intizomiy " +
          "jazo " +
          "choralari " +
          "ro'yxatida " +
          "yo'q — " +
          "shuning uchun " +
          "bunday " +
          "ushlab " +
          "qolish " +
          "qonuniy " +
          "emas.",
        keyPoints: [
          "Intizomiy javobgarlik AYBLI qilmish uchun yuzaga keladi",
          "Jazo choralari ro'yxati qonunda belgilangan va YOPIQ",
          "Ish haqini kesish yoki jarima solish qonuniy jazo emas",
          "Obyektiv sabab bo'lsa javobgarlik yuzaga kelmaydi",
        ],
        warning:
          "«Jarima " +
          "tizimi» " +
          "joriy " +
          "qilgan " +
          "ichki " +
          "hujjatlar " +
          "qonunga " +
          "zid " +
          "bo'ladi " +
          "va ular " +
          "asosida " +
          "ushlab " +
          "qolingan " +
          "summani " +
          "qaytarishni " +
          "talab " +
          "qilish " +
          "mumkin.",
        lawRefs: [
          { code: "MK", article: "300" },
          { code: "MK", article: "312" },
          { code: "MK", article: "297" },
          { code: "MK", article: "301" },
        ],
      },
      {
        heading: "Jazo qo'llash tartibi va muddatlari",
        text:
          "Intizomiy jazoning " +
          "qonuniyligi ko'p " +
          "hollarda TARTIBGA " +
          "bog'liq bo'ladi. " +
          "Ya'ni qilmish " +
          "bo'lgan taqdirda " +
          "ham, tartib " +
          "buzilsa jazo " +
          "bekor qilinishi " +
          "mumkin.\n\n" +
          "Jazo choralari " +
          "ishga qabul " +
          "qilish huquqi " +
          "berilgan " +
          "shaxs " +
          "tomonidan " +
          "qo'llaniladi — " +
          "ya'ni har " +
          "qanday " +
          "rahbar " +
          "emas.\n\n" +
          "TUSHUNTIRISH: " +
          "jazo " +
          "qo'llashdan " +
          "oldin " +
          "xodimdan " +
          "tushuntirish " +
          "talab " +
          "qilinadi. " +
          "Bu " +
          "xodimning " +
          "o'z " +
          "pozitsiyasini " +
          "bildirish " +
          "huquqi.\n\n" +
          "Amaliy " +
          "maslahat: " +
          "tushuntirishni " +
          "yozma bering " +
          "va nusxasini " +
          "saqlang. " +
          "Unda " +
          "obyektiv " +
          "sabablarni " +
          "aniq " +
          "ko'rsating.\n\n" +
          "XIZMAT " +
          "TEKSHIRUVI " +
          "o'tkazilishi " +
          "mumkin va " +
          "bu davrda " +
          "xodimni " +
          "ishdan " +
          "chetlashtirish " +
          "masalasi " +
          "ham " +
          "tartibga " +
          "solingan.\n\n" +
          "MUDDATLAR " +
          "juda " +
          "muhim: " +
          "intizomiy " +
          "jazo " +
          "qilmish " +
          "aniqlanganidan " +
          "keyin " +
          "belgilangan " +
          "muddat " +
          "ichida " +
          "qo'llanilishi " +
          "kerak.\n\n" +
          "Muddat " +
          "o'tgan " +
          "bo'lsa, " +
          "jazo " +
          "qo'llash " +
          "mumkin " +
          "emas — " +
          "bu " +
          "e'tiroz " +
          "uchun " +
          "kuchli " +
          "asos.\n\n" +
          "JAZONING " +
          "AMAL " +
          "QILISH " +
          "MUDDATI " +
          "ham " +
          "cheklangan " +
          "va u " +
          "muddatdan " +
          "oldin " +
          "olib " +
          "tashlanishi " +
          "mumkin.",
        example:
          "Xodimga " +
          "bir necha " +
          "oy oldingi " +
          "voqea " +
          "uchun " +
          "jazo " +
          "qo'llandi " +
          "va " +
          "tushuntirish " +
          "so'ralmadi. " +
          "Ikkala " +
          "tartib " +
          "buzilishi " +
          "ham " +
          "jazoni " +
          "bekor " +
          "qildirish " +
          "uchun " +
          "asos " +
          "bo'ladi.",
        keyPoints: [
          "Jazo faqat vakolatli shaxs tomonidan qo'llanadi",
          "Jazodan oldin xodimdan TUSHUNTIRISH talab qilinadi",
          "Jazo qo'llash uchun muddat belgilangan",
          "Jazoning amal qilish muddati cheklangan va u erta olib tashlanishi mumkin",
        ],
        warning:
          "Tushuntirish " +
          "berishdan " +
          "bosh " +
          "tortish " +
          "sizga " +
          "foyda " +
          "qilmaydi: " +
          "bu " +
          "holat " +
          "dalolatnoma " +
          "bilan " +
          "qayd " +
          "etiladi " +
          "va " +
          "jarayon " +
          "davom " +
          "etadi.",
        lawRefs: [
          { code: "MK", article: "313" },
          { code: "MK", article: "314" },
          { code: "MK", article: "315" },
          { code: "MK", article: "309" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     13. Moddiy javobgarlik
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "moddiy-javobgarlik",
    category: "labor",
    level: "advanced",
    order: 6130,
    title: "Moddiy javobgarlik: xodim va ish beruvchi",
    desc:
      "Zarar yetkazilganda kim qanday javob beradi, cheklangan va " +
      "to'liq javobgarlik, zararni aniqlash va undirish tartibi.",
    objectives: [
      "Xodim va ish beruvchining moddiy javobgarligini farqlay olasiz",
      "Javobgarlikni istisno etuvchi holatlarni bilasiz",
      "To'liq moddiy javobgarlik qachon yuzaga kelishini bilasiz",
      "Zararni undirish tartibini va sud rolini bilasiz",
    ],
    practicalSteps: [
      "To'liq javobgarlik shartnomasini imzolashdan oldin shartlarini o'qing",
      "Moddiy qadriyatlarni qabul qilishda ro'yxat va dalolatnoma tuzing",
      "Zarar yuzaga kelsa, uning sababini yozma tushuntiring",
      "Undirish miqdori va tartibi qonunga mos ekanini tekshiring",
    ],
    sections: [
      {
        heading: "Ish beruvchining moddiy javobgarligi",
        text:
          "Moddiy javobgarlik ikki " +
          "tomonlama: nafaqat " +
          "xodim, ish beruvchi " +
          "ham javob beradi. " +
          "Bu ko'pincha " +
          "unutiladi.\n\n" +
          "Ish beruvchi " +
          "javobgarligining " +
          "asosiy holatlari:\n\n" +
          "Birinchidan, XODIMNING " +
          "MOL-MULKIGA " +
          "yetkazilgan zarar " +
          "uchun. Agar " +
          "ishlash jarayonida " +
          "xodimning " +
          "mol-mulkiga zarar " +
          "yetsa, u " +
          "qoplanishi " +
          "kerak.\n\n" +
          "Ikkinchidan, ish " +
          "haqi va boshqa " +
          "to'lovlarni " +
          "KECHIKTIRGANLIK " +
          "uchun.\n\n" +
          "Uchinchidan, " +
          "MEHNAT " +
          "HUQUQLARINI " +
          "buzganlik " +
          "uchun: " +
          "g'ayriqonuniy " +
          "bo'shatish, " +
          "g'ayriqonuniy " +
          "chetlashtirish " +
          "va boshqa " +
          "hollarda " +
          "javobgarlik " +
          "nazarda " +
          "tutilgan.\n\n" +
          "Alohida " +
          "institut — " +
          "MA'NAVIY " +
          "ZIYONNI " +
          "KOMPENSATSIYA " +
          "QILISH: " +
          "xodimning " +
          "mehnat " +
          "huquqlari " +
          "buzilishi " +
          "unga " +
          "ma'naviy " +
          "ziyon " +
          "yetkazgan " +
          "bo'lsa, u " +
          "kompensatsiya " +
          "qilinishi " +
          "mumkin.\n\n" +
          "Boquvchi " +
          "vafot " +
          "etganligi " +
          "munosabati " +
          "bilan " +
          "yetkazilgan " +
          "ziyonni " +
          "qoplash " +
          "bo'yicha " +
          "ham " +
          "alohida " +
          "qoidalar " +
          "mavjud.",
        example:
          "Xodim " +
          "g'ayriqonuniy " +
          "bo'shatilib, " +
          "sud orqali " +
          "ishga " +
          "tiklandi. " +
          "Bu holatda " +
          "u nafaqat " +
          "ishga " +
          "qaytadi, " +
          "balki " +
          "majburiy " +
          "ishlamagan " +
          "davr uchun " +
          "to'lov va " +
          "ma'naviy " +
          "ziyon " +
          "kompensatsiyasini " +
          "ham talab " +
          "qilishi " +
          "mumkin.",
        keyPoints: [
          "Moddiy javobgarlik ikki tomonlama — ish beruvchi ham javob beradi",
          "Xodim mol-mulkiga zarar, to'lov kechikishi va huquq buzilishi asos bo'ladi",
          "Mehnat huquqlari buzilganda ma'naviy ziyon kompensatsiyasi mumkin",
          "G'ayriqonuniy bo'shatishda ishlamagan davr uchun to'lov nazarda tutilgan",
        ],
        warning:
          "Ma'naviy " +
          "ziyon " +
          "talabini " +
          "asoslash " +
          "kerak: " +
          "oqibatni " +
          "(sog'liq, " +
          "obro', " +
          "moliyaviy " +
          "holat) " +
          "tushuntirish " +
          "va " +
          "hujjat " +
          "bilan " +
          "ko'rsatish " +
          "muhim.",
        lawRefs: [
          { code: "MK", article: "334" },
          { code: "MK", article: "333" },
          { code: "MK", article: "564" },
          { code: "MK", article: "565" },
          { code: "MK", article: "329" },
        ],
      },
      {
        heading: "Xodimning javobgarligi va undirish tartibi",
        text:
          "Xodim ish beruvchiga " +
          "yetkazilgan " +
          "zararning o'rnini " +
          "qoplash " +
          "majburiyatiga " +
          "ega.\n\n" +
          "Lekin bu " +
          "javobgarlik " +
          "cheklangan: " +
          "umumiy qoida " +
          "bo'yicha u " +
          "belgilangan " +
          "miqdor bilan " +
          "chegaralanadi.\n\n" +
          "JAVOBGARLIKNI " +
          "ISTISNO " +
          "ETUVCHI " +
          "HOLATLAR " +
          "muhim: zarar " +
          "bartaraf etib " +
          "bo'lmaydigan " +
          "kuch " +
          "natijasida " +
          "yoki qonunda " +
          "ko'rsatilgan " +
          "boshqa " +
          "holatlarda " +
          "yuzaga " +
          "kelgan " +
          "bo'lsa, " +
          "xodim javob " +
          "bermaydi.\n\n" +
          "Shu " +
          "qatorga " +
          "normal " +
          "xo'jalik " +
          "riski " +
          "doirasidagi " +
          "zarar ham " +
          "kiradi.\n\n" +
          "TO'LIQ " +
          "MODDIY " +
          "JAVOBGARLIK " +
          "istisno " +
          "tartib va " +
          "u faqat " +
          "qonunda " +
          "sanalgan " +
          "hollarda " +
          "yuzaga " +
          "keladi.\n\n" +
          "Alohida " +
          "asos — " +
          "TO'LIQ " +
          "MODDIY " +
          "JAVOBGARLIK " +
          "TO'G'RISIDAGI " +
          "SHARTNOMA. " +
          "U pul yoki " +
          "tovar " +
          "qimmatliklari " +
          "bilan " +
          "bevosita " +
          "ishlaydigan " +
          "xodimlar " +
          "bilan " +
          "tuziladi.\n\n" +
          "ISH " +
          "BERUVCHINING " +
          "MAJBURIYATI: " +
          "u " +
          "yetkazilgan " +
          "zarar " +
          "miqdorini " +
          "va uning " +
          "kelib " +
          "chiqish " +
          "sababini " +
          "ANIQLASHI " +
          "shart.\n\n" +
          "Ya'ni " +
          "«zarar " +
          "bor, " +
          "to'lang» " +
          "degan " +
          "talab " +
          "yetarli " +
          "emas — " +
          "tekshiruv " +
          "o'tkazilishi " +
          "kerak.\n\n" +
          "UNDIRISH " +
          "tartibi " +
          "belgilangan " +
          "va sud " +
          "aybning " +
          "darajasini " +
          "hisobga " +
          "olib " +
          "undiriladigan " +
          "miqdorni " +
          "KAMAYTIRISHI " +
          "mumkin.",
        example:
          "Xodimga " +
          "«omborda " +
          "kamomad " +
          "chiqdi, " +
          "hammangiz " +
          "to'laysiz» " +
          "deyildi. " +
          "Ish " +
          "beruvchi " +
          "avval " +
          "zarar " +
          "miqdorini " +
          "va " +
          "sababini " +
          "aniqlashi, " +
          "har bir " +
          "xodimning " +
          "aybini " +
          "belgilashi " +
          "kerak — " +
          "jamoaviy " +
          "«taqsimlash» " +
          "qonuniy " +
          "asos " +
          "emas.",
        keyPoints: [
          "Xodimning javobgarligi umumiy qoida bo'yicha CHEKLANGAN",
          "Bartaraf etib bo'lmaydigan kuch va normal xo'jalik riski javobgarlikni istisno qiladi",
          "To'liq javobgarlik faqat qonunda sanalgan hollarda",
          "Ish beruvchi zarar miqdori va sababini ANIQLASHI shart",
        ],
        warning:
          "To'liq " +
          "moddiy " +
          "javobgarlik " +
          "shartnomasini " +
          "o'qimasdan " +
          "imzolamang: " +
          "u sizning " +
          "riskingizni " +
          "sezilarli " +
          "oshiradi " +
          "va faqat " +
          "ayrim " +
          "lavozimlar " +
          "uchun " +
          "qonuniy.",
        lawRefs: [
          { code: "MK", article: "337" },
          { code: "MK", article: "338" },
          { code: "MK", article: "341" },
          { code: "MK", article: "343" },
          { code: "MK", article: "344" },
          { code: "MK", article: "350" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     14. Mehnat muhofazasi
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "mehnat-muhofazasi",
    category: "labor",
    level: "mid",
    order: 6140,
    title: "Mehnat muhofazasi va xavfsizlik",
    desc:
      "Xavfsiz mehnat sharoiti huquqi, ish beruvchi majburiyatlari, " +
      "yo'l-yo'riq, ish joyiga talablar va baxtsiz hodisalar.",
    objectives: [
      "Mehnat muhofazasi tushunchasini va uning qamrovini bilasiz",
      "Xodimning bu sohadagi huquq va majburiyatlarini bilasiz",
      "Ish beruvchining majburiyatlarini bilasiz",
      "Baxtsiz hodisa yuz berganda nima qilish kerakligini bilasiz",
    ],
    practicalSteps: [
      "Yo'l-yo'riqdan o'tkazilganingiz jurnalda qayd etilganini tekshiring",
      "Xavfli sharoit ko'rsangiz, buni YOZMA bildiring — bu keyin himoyangiz bo'ladi",
      "Himoya vositalari berilishini talab qiling: bu ish beruvchining majburiyati",
      "Baxtsiz hodisa yuz bersa, u rasman tekshirilishi va qayd etilishini talab qiling",
    ],
    sections: [
      {
        heading: "Mehnat muhofazasi va tomonlar majburiyatlari",
        text:
          "MEHNAT MUHOFAZASI — mehnat " +
          "jarayonida insonning " +
          "xavfsizligi, sog'lig'i va " +
          "ish qobiliyatini " +
          "saqlashga qaratilgan " +
          "chora-tadbirlar " +
          "tizimi.\n\n" +
          "Bu faqat texnika " +
          "xavfsizligi emas: u " +
          "huquqiy, ijtimoiy-" +
          "iqtisodiy, tashkiliy, " +
          "texnik, sanitariya-" +
          "gigiyena va davolash-" +
          "profilaktika " +
          "choralarini " +
          "qamraydi.\n\n" +
          "ISH BERUVCHINING " +
          "MAJBURIYATLARI keng: " +
          "xavfsizlik va " +
          "gigiyena " +
          "talablariga javob " +
          "beradigan mehnat " +
          "sharoitlarini " +
          "ta'minlash, " +
          "mablag' ajratish, " +
          "yo'l-yo'riq " +
          "berish va " +
          "o'qitish.\n\n" +
          "ISH JOYLARIGA " +
          "TALABLAR ham " +
          "belgilangan: " +
          "binolar va " +
          "inshootlar " +
          "tuzilishi " +
          "belgilangan " +
          "talablarga " +
          "javob berishi " +
          "kerak.\n\n" +
          "XODIMNING " +
          "HUQUQLARI: " +
          "xavfsiz " +
          "sharoitda " +
          "ishlash, " +
          "himoya " +
          "vositalari " +
          "bilan " +
          "ta'minlanish, " +
          "mehnat " +
          "sharoiti " +
          "haqida " +
          "axborot " +
          "olish.\n\n" +
          "ENG MUHIM " +
          "HUQUQ: " +
          "hayot va " +
          "sog'liq " +
          "uchun " +
          "xavf " +
          "tug'diradigan " +
          "sharoitda " +
          "ishni " +
          "bajarishdan " +
          "bosh " +
          "tortish " +
          "imkoniyati " +
          "qonunda " +
          "nazarda " +
          "tutilgan.\n\n" +
          "Xodimning " +
          "MAJBURIYATLARI " +
          "ham bor: " +
          "xavfsizlik " +
          "qoidalariga " +
          "rioya " +
          "qilish, " +
          "himoya " +
          "vositalaridan " +
          "foydalanish.",
        example:
          "Xodimga " +
          "himoya " +
          "vositalarisiz " +
          "xavfli " +
          "ishni " +
          "bajarish " +
          "topshirildi. " +
          "Bunday " +
          "holatda " +
          "u " +
          "vositalarni " +
          "talab " +
          "qilishga " +
          "haqli va " +
          "bu " +
          "talabni " +
          "yozma " +
          "qo'yish " +
          "keyin " +
          "himoya " +
          "beradi.",
        keyPoints: [
          "Mehnat muhofazasi keng tizim — faqat texnika xavfsizligi emas",
          "Xavfsiz sharoit yaratish — ish beruvchining majburiyati",
          "Xodim himoya vositalari va axborot olishga haqli",
          "Xavfli sharoitda ishdan bosh tortish imkoniyati qonunda nazarda tutilgan",
        ],
        warning:
          "Xavfsizlik " +
          "yo'l-yo'rig'idan " +
          "o'tmasdan " +
          "ishga " +
          "kirishish " +
          "keyin " +
          "baxtsiz " +
          "hodisada " +
          "javobgarlik " +
          "masalasini " +
          "murakkablashtiradi.",
        lawRefs: [
          { code: "MK", article: "351" },
          { code: "MK", article: "352" },
          { code: "MK", article: "355" },
          { code: "MK", article: "359" },
          { code: "MK", article: "361" },
        ],
      },
      {
        heading: "Yo'l-yo'riq, baxtsiz hodisa va nazorat",
        text:
          "YO'L-YO'RIQ VA " +
          "O'QITISH: ishga yangi " +
          "kirgan xodimlar " +
          "mehnatni muhofaza " +
          "qilish bo'yicha " +
          "yo'l-yo'riqdan " +
          "o'tkaziladi va " +
          "o'qitiladi.\n\n" +
          "Bu shakliy " +
          "protsedura emas: u " +
          "qayd etiladi va " +
          "keyinchalik " +
          "javobgarlikni " +
          "belgilashda " +
          "hisobga " +
          "olinadi.\n\n" +
          "BAXTSIZ HODISALAR va " +
          "KASB KASALLIKLARI " +
          "tekshirilishi va " +
          "hisobga olinishi " +
          "shart.\n\n" +
          "Bu qoidaning " +
          "amaliy ahamiyati " +
          "juda katta: " +
          "rasman " +
          "tekshirilmagan " +
          "va qayd " +
          "etilmagan " +
          "hodisa bo'yicha " +
          "keyinchalik " +
          "kompensatsiya " +
          "olish " +
          "nihoyatda " +
          "qiyin " +
          "bo'ladi.\n\n" +
          "Shuning uchun " +
          "eng muhim " +
          "amaliy qadam: " +
          "ishda " +
          "jarohat " +
          "olsangiz, " +
          "uni darhol " +
          "xabar " +
          "qiling va " +
          "rasmiy " +
          "tekshiruv " +
          "o'tkazilishini " +
          "talab " +
          "qiling.\n\n" +
          "«Uyda " +
          "yiqildim » " +
          "deb " +
          "rasmiylashtirishga " +
          "rozi " +
          "bo'lmang " +
          "— bu " +
          "sizni " +
          "barcha " +
          "kafolatlardan " +
          "mahrum " +
          "qiladi.\n\n" +
          "NAZORAT " +
          "tizimi: " +
          "mehnat " +
          "qonunchiligiga " +
          "rioya " +
          "etilishi " +
          "ustidan " +
          "davlat " +
          "nazorati " +
          "amalga " +
          "oshiriladi. " +
          "Davlat " +
          "mehnat " +
          "inspektorlari " +
          "tekshiruv " +
          "o'tkazadi.\n\n" +
          "Kasaba " +
          "uyushmalari " +
          "ham " +
          "jamoatchilik " +
          "nazoratini " +
          "amalga " +
          "oshiradi.",
        example:
          "Xodim " +
          "ishda " +
          "jarohat " +
          "oldi, " +
          "lekin " +
          "rahbar " +
          "«rasmiylashtirmaylik, " +
          "davolanish " +
          "pulini " +
          "o'zimiz " +
          "beramiz» " +
          "dedi. " +
          "Bu " +
          "taklifga " +
          "rozi " +
          "bo'lish " +
          "xodimni " +
          "uzoq " +
          "muddatli " +
          "kafolatlardan " +
          "mahrum " +
          "qiladi.",
        keyPoints: [
          "Yo'l-yo'riq va o'qitish qayd etiladi va javobgarlikka ta'sir qiladi",
          "Baxtsiz hodisalar rasman TEKSHIRILISHI va qayd etilishi shart",
          "Rasmiylashtirilmagan hodisa bo'yicha kompensatsiya olish juda qiyin",
          "Davlat mehnat inspektorlari va kasaba uyushmalari nazorat qiladi",
        ],
        warning:
          "Ishdagi " +
          "jarohatni " +
          "maishiy " +
          "deb " +
          "rasmiylashtirishga " +
          "rozi " +
          "bo'lish " +
          "eng " +
          "og'ir " +
          "xatolardan " +
          "biri: " +
          "keyin " +
          "haqiqatni " +
          "isbotlash " +
          "deyarli " +
          "imkonsiz.",
        lawRefs: [
          { code: "MK", article: "362" },
          { code: "MK", article: "366" },
          { code: "MK", article: "534" },
          { code: "MK", article: "536" },
          { code: "MK", article: "540" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     15. Mehnat nizolari
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "mehnat-nizolari",
    category: "labor",
    level: "advanced",
    order: 6150,
    title: "Mehnat nizolarini hal qilish",
    desc:
      "Nizo turlari, komissiya va sud, murojaat muddatlari, " +
      "sud xarajatlaridan ozod qilish va noqonuniy bo'shatish oqibatlari.",
    objectives: [
      "Mehnat nizolari turlarini va ularni ko'ruvchi organlarni bilasiz",
      "Mehnat nizolari bo'yicha komissiya qanday ishlashini bilasiz",
      "Sudga murojaat muddatlarini va ularning muhimligini bilasiz",
      "Noqonuniy bo'shatish oqibatlarini bilasiz",
    ],
    practicalSteps: [
      "Nizo yuzaga kelganda MUDDATNI birinchi navbatda aniqlang — u qisqa bo'lishi mumkin",
      "Barcha hujjatlarni (shartnoma, buyruq, hisob varaqalari, yozishmalar) to'plang",
      "Komissiya bo'lsa unga, bo'lmasa to'g'ridan-to'g'ri sudga murojaat qiling",
      "Mehnat nizosida sud xarajatlaridan ozod ekaningizni yodda tuting",
    ],
    sections: [
      {
        heading: "Nizo turlari va ko'ruvchi organlar",
        text:
          "MEHNAT NIZOLARI — ish " +
          "beruvchi va xodim " +
          "o'rtasidagi yoxud " +
          "xodimlar (ularning " +
          "vakillari) bilan ish " +
          "beruvchi o'rtasidagi " +
          "kelishmovchiliklar.\n\n" +
          "Ular subyekt tarkibiga " +
          "qarab ikkiga " +
          "bo'linadi: YAKKA " +
          "TARTIBDAGI (bitta " +
          "xodim) va JAMOA " +
          "nizolari.\n\n" +
          "Yakka tartibdagi " +
          "nizolarni ko'rib " +
          "chiquvchi organlar " +
          "qonunda " +
          "belgilangan: " +
          "mehnat nizolari " +
          "bo'yicha " +
          "KOMISSIYA va " +
          "SUD.\n\n" +
          "Komissiya jamoa " +
          "shartnomasida " +
          "yoki u " +
          "tuzilmagan " +
          "bo'lsa boshqa " +
          "tartibda " +
          "tuziladi. " +
          "Uning " +
          "vakolatlari " +
          "va ish " +
          "tartibi " +
          "qonunda " +
          "belgilangan.\n\n" +
          "Muhim " +
          "tafsilot: " +
          "ayrim " +
          "nizolar " +
          "BEVOSITA " +
          "SUDDA " +
          "ko'riladi — " +
          "ya'ni ular " +
          "uchun " +
          "komissiya " +
          "bosqichidan " +
          "o'tish " +
          "shart " +
          "emas.\n\n" +
          "Bunga " +
          "odatda " +
          "ishga " +
          "tiklash, " +
          "bo'shatish " +
          "asosini " +
          "o'zgartirish " +
          "kabi " +
          "nizolar " +
          "kiradi.\n\n" +
          "Komissiya " +
          "qarori " +
          "bilan " +
          "rozi " +
          "bo'lmagan " +
          "tomon " +
          "sudga " +
          "murojaat " +
          "qilishi " +
          "mumkin.",
        example:
          "Xodim " +
          "noqonuniy " +
          "bo'shatildi " +
          "va avval " +
          "komissiyaga " +
          "murojaat " +
          "qilib " +
          "vaqt " +
          "yo'qotdi. " +
          "Ishga " +
          "tiklash " +
          "nizolari " +
          "bevosita " +
          "sudda " +
          "ko'rilgani " +
          "uchun " +
          "to'g'ridan-to'g'ri " +
          "sudga " +
          "borish " +
          "kerak " +
          "edi.",
        keyPoints: [
          "Nizolar yakka tartibdagi va jamoa nizolariga bo'linadi",
          "Yakka nizolarni komissiya va sud ko'radi",
          "Ayrim nizolar BEVOSITA sudda ko'riladi",
          "Komissiya qaroriga rozi bo'lmasangiz sudga murojaat qilish mumkin",
        ],
        warning:
          "Noto'g'ri " +
          "organga " +
          "murojaat " +
          "qilish " +
          "vaqt " +
          "yo'qotadi " +
          "va " +
          "muddat " +
          "o'tib " +
          "ketishiga " +
          "sabab " +
          "bo'lishi " +
          "mumkin.",
        lawRefs: [
          { code: "MK", article: "541" },
          { code: "MK", article: "542" },
          { code: "MK", article: "545" },
          { code: "MK", article: "547" },
          { code: "MK", article: "548" },
          { code: "MK", article: "558" },
        ],
      },
      {
        heading: "Muddatlar, xarajatlar va noqonuniy bo'shatish",
        text:
          "MUDDATLAR mehnat " +
          "nizolarida hal " +
          "qiluvchi ahamiyatga " +
          "ega, chunki ular " +
          "fuqarolik " +
          "ishlaridagiga " +
          "qaraganda " +
          "QISQAROQ.\n\n" +
          "Qonun komissiyaga " +
          "murojaat qilish " +
          "muddatini va " +
          "sudga murojaat " +
          "qilish " +
          "muddatlarini " +
          "alohida " +
          "belgilaydi.\n\n" +
          "Bo'shatish " +
          "to'g'risidagi " +
          "nizolar uchun " +
          "muddat " +
          "odatda " +
          "yanada " +
          "qisqaroq " +
          "bo'ladi.\n\n" +
          "Shu sababli " +
          "eng birinchi " +
          "qadam — " +
          "muddatni " +
          "aniqlash. " +
          "Muddat " +
          "o'tib " +
          "ketsa, eng " +
          "adolatli " +
          "talab ham " +
          "rad " +
          "etilishi " +
          "mumkin.\n\n" +
          "SUD " +
          "XARAJATLARI " +
          "bo'yicha " +
          "muhim " +
          "imtiyoz " +
          "bor: " +
          "xodimlar " +
          "yakka " +
          "tartibdagi " +
          "mehnat " +
          "munosabatlaridan " +
          "kelib " +
          "chiqadigan " +
          "ishlar " +
          "bo'yicha " +
          "sud " +
          "xarajatlaridan " +
          "ozod " +
          "qilinadi.\n\n" +
          "Bu juda " +
          "muhim: " +
          "moliyaviy " +
          "to'siq " +
          "sizni " +
          "huquqingizni " +
          "himoya " +
          "qilishdan " +
          "to'xtatmasligi " +
          "kerak.\n\n" +
          "Da'vo " +
          "miqdoriga " +
          "va uni " +
          "ta'minlashga " +
          "doir " +
          "cheklovlar " +
          "ham " +
          "mavjud " +
          "emas.\n\n" +
          "NOQONUNIY " +
          "BO'SHATISH " +
          "oqibatlari: " +
          "qonun " +
          "g'ayriqonuniy " +
          "bo'shatish " +
          "va " +
          "chetlashtirish " +
          "holatlarida " +
          "xodim " +
          "foydasiga " +
          "to'lovlarni " +
          "nazarda " +
          "tutadi, " +
          "shu " +
          "jumladan " +
          "ma'naviy " +
          "ziyon " +
          "kompensatsiyasi.",
        example:
          "Xodim " +
          "bo'shatilgach " +
          "bir necha " +
          "oy " +
          "«o'ylab " +
          "ko'rdi», " +
          "keyin " +
          "sudga " +
          "murojaat " +
          "qildi. " +
          "Bo'shatish " +
          "nizolari " +
          "uchun " +
          "muddat " +
          "qisqa " +
          "bo'lgani " +
          "sababli " +
          "u " +
          "muddatni " +
          "tiklashni " +
          "ham " +
          "so'rashga " +
          "majbur " +
          "bo'ldi.",
        keyPoints: [
          "Mehnat nizolarida muddatlar QISQA — birinchi navbatda ularni aniqlang",
          "Bo'shatish nizolari uchun muddat yanada qisqaroq bo'ladi",
          "Xodimlar mehnat nizolarida sud xarajatlaridan OZOD",
          "Noqonuniy bo'shatishda to'lovlar va ma'naviy ziyon nazarda tutilgan",
        ],
        warning:
          "«Avval " +
          "gaplashib " +
          "ko'ray, " +
          "keyin " +
          "sudga " +
          "boraman» " +
          "degan " +
          "yondashuv " +
          "xavfli: " +
          "muzokara " +
          "muddatni " +
          "to'xtatmaydi.",
        lawRefs: [
          { code: "MK", article: "554" },
          { code: "MK", article: "559" },
          { code: "MK", article: "560" },
          { code: "MK", article: "562" },
          { code: "MK", article: "563" },
          { code: "MK", article: "564" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     16. Alohida toifadagi xodimlar
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "alohida-toifalar",
    category: "labor",
    level: "mid",
    order: 6160,
    title: "Ayollar, yoshlar va nogironligi bo'lgan xodimlar mehnati",
    desc:
      "Alohida toifadagi xodimlar uchun qo'shimcha kafolatlar va " +
      "o'rindoshlik asosida ishlash qoidalari.",
    objectives: [
      "Ayollar mehnati bo'yicha qo'shimcha choralarni bilasiz",
      "Yosh xodimlar uchun kafolatlarni bilasiz",
      "Nogironligi bo'lgan shaxslarning mehnat huquqlarini bilasiz",
      "O'rindoshlik asosida ishlash qoidalarini bilasiz",
    ],
    practicalSteps: [
      "Alohida toifaga kirsangiz, tegishli hujjatni ish beruvchiga taqdim eting",
      "Qo'shimcha kafolatlardan foydalanish uchun ularni yozma so'rang",
      "O'rindoshlik asosida ishlashda cheklovlarni oldindan tekshiring",
      "Kafolat berilmasa, buni davlat mehnat inspeksiyasiga bildirish mumkin",
    ],
    sections: [
      {
        heading: "Ayollar, yoshlar va nogironligi bo'lgan xodimlar",
        text:
          "Mehnat kodeksi ayrim " +
          "toifadagi xodimlar " +
          "uchun QO'SHIMCHA " +
          "kafolatlar " +
          "belgilaydi. Bu " +
          "kamsitish emas — " +
          "aksincha, haqiqiy " +
          "tenglikni " +
          "ta'minlash " +
          "mexanizmi.\n\n" +
          "AYOLLAR MEHNATI " +
          "bo'yicha " +
          "qo'shimcha " +
          "choralar nazarda " +
          "tutilgan.\n\n" +
          "Homilador " +
          "ayollar uchun " +
          "mehnat " +
          "shartnomasini " +
          "bekor " +
          "qilishda " +
          "alohida " +
          "kafolatlar " +
          "belgilangan — " +
          "bu " +
          "himoyaning " +
          "eng kuchli " +
          "qismlaridan " +
          "biri.\n\n" +
          "O'N SAKKIZ " +
          "YOSHGACHA " +
          "bo'lgan " +
          "shaxslar " +
          "uchun: " +
          "qisqartirilgan " +
          "ish vaqti " +
          "davomiyligi, " +
          "mehnat " +
          "shartnomasini " +
          "bekor " +
          "qilishda " +
          "qo'shimcha " +
          "kafolatlar " +
          "va boshqa " +
          "himoya " +
          "choralari.\n\n" +
          "Ayrim " +
          "hollarda " +
          "bo'shatish " +
          "ota-onadan " +
          "birining " +
          "va " +
          "vakolatli " +
          "organning " +
          "roziligi " +
          "bilan " +
          "amalga " +
          "oshiriladi.\n\n" +
          "NOGIRONLIGI " +
          "BO'LGAN " +
          "SHAXSLAR " +
          "uchun: " +
          "mehnatga " +
          "oid " +
          "huquqlar " +
          "alohida " +
          "belgilangan, " +
          "ish " +
          "vaqtining " +
          "qisqartirilgan " +
          "davomiyligi " +
          "nazarda " +
          "tutilgan.\n\n" +
          "Muhim " +
          "himoya: " +
          "sog'lig'ining " +
          "holatiga " +
          "ko'ra " +
          "qarshi " +
          "ko'rsatma " +
          "bo'lgan " +
          "ishlarga " +
          "jalb " +
          "qilish " +
          "cheklanadi.",
        example:
          "Homilador " +
          "ayolga " +
          "«shtat " +
          "qisqarmoqda» " +
          "deb " +
          "bo'shatish " +
          "haqida " +
          "aytildi. " +
          "Qonun bu " +
          "toifa " +
          "uchun " +
          "alohida " +
          "kafolatlar " +
          "belgilagani " +
          "uchun " +
          "bunday " +
          "qaror " +
          "qonuniyligini " +
          "tekshirish " +
          "shart.",
        keyPoints: [
          "Qo'shimcha kafolatlar kamsitish emas, haqiqiy tenglik mexanizmi",
          "Homilador ayollar uchun bo'shatishda alohida kafolatlar bor",
          "Yosh xodimlar qisqartirilgan ish vaqti va qo'shimcha himoyaga ega",
          "Nogironligi bo'lgan shaxslarni qarshi ko'rsatmali ishga jalb qilish cheklanadi",
        ],
        warning:
          "Kafolatlardan " +
          "foydalanish " +
          "uchun " +
          "tegishli " +
          "hujjatni " +
          "(tibbiy " +
          "xulosa, " +
          "ma'lumotnoma) " +
          "ish " +
          "beruvchiga " +
          "rasman " +
          "taqdim " +
          "etish " +
          "kerak.",
        lawRefs: [
          { code: "MK", article: "393" },
          { code: "MK", article: "408" },
          { code: "MK", article: "413" },
          { code: "MK", article: "415" },
          { code: "MK", article: "422" },
          { code: "MK", article: "424" },
          { code: "MK", article: "425" },
        ],
      },
      {
        heading: "O'rindoshlik asosida ishlash",
        text:
          "O'RINDOSHLIK ASOSIDA " +
          "ISHLASH — xodimning " +
          "o'zining asosiy " +
          "ishidan bo'sh " +
          "vaqtida boshqa " +
          "muntazam haq " +
          "to'lanadigan ishni " +
          "bajarishi.\n\n" +
          "Bu qonuniy shakl " +
          "va u ko'plab " +
          "xodimlar uchun " +
          "qo'shimcha " +
          "daromad " +
          "manbai.\n\n" +
          "CHEKLOVLAR " +
          "mavjud: qonun " +
          "o'rindoshlik " +
          "asosida " +
          "ishlashga " +
          "yo'l " +
          "qo'yilmaydigan " +
          "hollarni " +
          "belgilaydi.\n\n" +
          "Shu sababli " +
          "ikkinchi " +
          "ishga " +
          "kirishdan " +
          "oldin " +
          "cheklov " +
          "yo'qligini " +
          "tekshirish " +
          "kerak.\n\n" +
          "HUJJATLAR: " +
          "boshqa ish " +
          "beruvchiga " +
          "o'rindoshlik " +
          "asosida " +
          "ishga " +
          "qabul " +
          "qilinishda " +
          "taqdim " +
          "etiladigan " +
          "hujjatlar " +
          "ro'yxati " +
          "belgilangan.\n\n" +
          "SHARTNOMA: " +
          "o'rindoshlik " +
          "asosida " +
          "ishga " +
          "qabul " +
          "qilishda " +
          "ham " +
          "mehnat " +
          "shartnomasi " +
          "tuziladi — " +
          "ya'ni bu " +
          "«norasmiy » " +
          "ish " +
          "emas.\n\n" +
          "ISH VAQTI " +
          "DAVOMIYLIGI " +
          "cheklangan " +
          "va u " +
          "alohida " +
          "hisobga " +
          "olinadi. " +
          "Bu " +
          "mantiqiy: " +
          "ikki " +
          "ishning " +
          "yig'indisi " +
          "sog'liqqa " +
          "zarar " +
          "yetkazmasligi " +
          "kerak.\n\n" +
          "HAQ " +
          "TO'LASH " +
          "ham " +
          "tartibga " +
          "solingan: " +
          "o'rindoshlik " +
          "asosida " +
          "ishlovchilarga " +
          "haq " +
          "bajarilgan " +
          "ish " +
          "hajmiga " +
          "muvofiq " +
          "to'lanadi.",
        example:
          "Xodim " +
          "ikkinchi " +
          "ishga " +
          "shartnomasiz " +
          "kirdi va " +
          "faqat " +
          "og'zaki " +
          "kelishdi. " +
          "Nizo " +
          "chiqqanda " +
          "u ish " +
          "haqini " +
          "ham, " +
          "stajni " +
          "ham " +
          "isbotlay " +
          "olmadi — " +
          "o'rindoshlikda " +
          "ham " +
          "shartnoma " +
          "tuzilishi " +
          "kerak " +
          "edi.",
        keyPoints: [
          "O'rindoshlik — asosiy ishdan bo'sh vaqtda boshqa haq to'lanadigan ish",
          "Qonun o'rindoshlikka yo'l qo'yilmaydigan hollarni belgilaydi",
          "O'rindoshlikda ham mehnat shartnomasi tuziladi",
          "Ish vaqti davomiyligi cheklanadi va alohida hisobga olinadi",
        ],
        warning:
          "Asosiy ish " +
          "joyidagi " +
          "shartnomada " +
          "cheklov " +
          "bo'lishi " +
          "mumkin. " +
          "Ikkinchi " +
          "ishga " +
          "kirishdan " +
          "oldin " +
          "shartnomangizni " +
          "qayta " +
          "o'qib " +
          "chiqing.",
        lawRefs: [
          { code: "MK", article: "432" },
          { code: "MK", article: "433" },
          { code: "MK", article: "434" },
          { code: "MK", article: "435" },
          { code: "MK", article: "437" },
          { code: "MK", article: "438" },
        ],
      },
    ],
  },
];

module.exports = { LESSONS };
