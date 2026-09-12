"use strict";
/** JINOYAT MODULI — 10-DARS: JAZONI IJRO ETISH. JIK. */

const LESSON = {
  key: "jazoni-ijro",
  category: "criminal",
  level: "advanced",
  order: 11100,
  title: "Jazoni ijro etish va mahkumlar huquqlari",
  desc:
    "Jinoyat-ijroiya qonunchiligi va prinsiplari, mahkumlarning " +
    "huquq va majburiyatlari, yuridik yordam va shaxsiy xavfsizlik, " +
    "rejim talablari, uchrashuvlar va yozishmalar, mehnat va " +
    "ta'minot hamda nazorat.",
  objectives: [
    "Jazoni ijro etish prinsiplarini bilasiz",
    "Mahkumning asosiy huquqlarini bilasiz",
    "Yuridik yordam olish huquqini bilasiz",
    "Insoniy muomala va xavfsizlik kafolatini bilasiz",
    "Uchrashuv va yozishma qoidalarini bilasiz",
    "Nazorat va shikoyat yo'llarini bilasiz",
  ],
  practicalSteps: [
    "Mahkumning advokat bilan uchrashuv huquqini ta'minlang",
    "Huquq buzilsa yozma shikoyat berish yo'lidan foydalaning",
    "Ombudsmanga murojaat qutisi orqali murojaat qilish imkonini biling",
    "Sog'liq muammosi bo'lsa tibbiy yordam talab qiling",
    "Muddatidan ilgari ozod qilish uchun hujjat to'plang",
  ],
  sections: [
    {
      heading: "Jinoyat-ijroiya qonunchiligi va prinsiplari",
      text:
        "JINOYAT-IJROIYA QONUNCHILIGI jazolarni " +
        "ijro etish tartibi va shartlarini " +
        "belgilaydi.\n\n" +
        "VAZIFASI: jazoni ijro etish " +
        "tartibini belgilash, mahkumlarni " +
        "axloqan tuzatish, ular tomonidan " +
        "yangi jinoyatlar sodir " +
        "etilishining oldini olish.\n\n" +
        "⚠️ E'TIBOR BERING: vazifa " +
        "AZOB CHEKTIRISH emas, TUZATISH " +
        "va OLDINI OLISH.\n\n" +
        "XALQARO HUJJATLAR: jinoyat-" +
        "ijroiya qonunchiligi xalqaro-" +
        "huquqiy hujjatlarni hisobga " +
        "olgan holda qo'llaniladi.\n\n" +
        "IJRO ASOSI: jazoni ijro etish " +
        "asosi — qonuniy kuchga kirgan " +
        "SUD HUKMI.\n\n" +
        "Ya'ni hukmsiz jazoni ijro etish " +
        "mumkin emas.\n\n" +
        "AXLOQAN TUZATISHNING ASOSIY " +
        "VOSITALARI: belgilangan " +
        "tartibga rioya qilish; " +
        "ijtimoiy foydali mehnat; " +
        "ta'lim olish; tarbiyaviy " +
        "ishlar; jamoat ta'siri.\n\n" +
        "⚠️ AMALIY MA'NOSI: bu vositalar " +
        "shunchaki majburiyat emas — " +
        "ularda faol ishtirok etish " +
        "muddatidan ilgari ozod " +
        "qilishning ASOSIY sharti.\n\n" +
        "Shuning uchun jazoni " +
        "o'tayotgan shaxs uchun eng " +
        "to'g'ri strategiya — mehnat, " +
        "ta'lim va tarbiyaviy " +
        "tadbirlarda faol " +
        "qatnashish.\n\n" +
        "Har bir rag'batlantirish " +
        "keyinchalik hujjat sifatida " +
        "ishlatiladi.",
      example:
        "Mahkum mehnat va ta'limda faol " +
        "qatnashdi — bu muddatidan ilgari " +
        "ozod qilish uchun asos bo'ldi.",
      keyPoints: [
        "Ijro asosi — qonuniy kuchga kirgan hukm",
        "Vazifa jazolash emas, tuzatish",
        "Tuzatish vositalari qonunda belgilangan",
        "Faol ishtirok muddatidan ilgari ozod qilishga yordam beradi",
      ],
      warning:
        "Tuzatish vositalarida ishtirok " +
        "etmaslik ozod qilish imkonini " +
        "kechiktiradi.",
      lawRefs: [
        { code: "JIK", article: "1" },
        { code: "JIK", article: "2" },
        { code: "JIK", article: "4" },
        { code: "JIK", article: "5" },
        { code: "JIK", article: "6" },
        { code: "JIK", article: "7" },
      ],
    },
    {
      heading: "Mahkumlarning asosiy huquqlari",
      text:
        "Bu — butun darsdagi eng muhim bo'lim.\n\n" +
        "⚠️ ASOSIY QOIDA: jazoni o'tash " +
        "shaxsni HUQUQLARIDAN BUTUNLAY " +
        "MAHRUM QILMAYDI.\n\n" +
        "Mahkumlar fuqarolarning huquq va " +
        "erkinliklariga ega bo'lib " +
        "qoladi — faqat jazo " +
        "mohiyatidan kelib chiqadigan " +
        "cheklovlar bilan.\n\n" +
        "ASOSIY HUQUQLAR: o'z huquq va " +
        "majburiyatlari haqida axborot " +
        "olish; taklif, ariza va " +
        "shikoyatlar bilan murojaat " +
        "qilish; shaxsiy xavfsizlik; " +
        "tibbiy yordam; ona tilidan " +
        "foydalanish; ijtimoiy " +
        "ta'minot.\n\n" +
        "⚠️ YURIDIK YORDAM OLISH " +
        "HUQUQI ALOHIDA " +
        "KAFOLATLANGAN: mahkum " +
        "advokat bilan uchrashish " +
        "huquqiga ega.\n\n" +
        "Bunday uchrashuvlar odatda " +
        "maxfiy bo'ladi va ularning " +
        "soni hamda davomiyligi " +
        "cheklanmaydi.\n\n" +
        "AMALIY XULOSA: bu huquq " +
        "muddatidan ilgari ozod " +
        "qilish, jazoni " +
        "yengillashtirish va " +
        "shikoyatlar uchun hal " +
        "qiluvchi.\n\n" +
        "SHAXSIY XAVFSIZLIK HUQUQI: " +
        "mahkum xavf ostida " +
        "bo'lsa, u himoya choralarini " +
        "so'rashga haqli.\n\n" +
        "⚠️ INSONIY MUOMALA HUQUQI " +
        "alohida modda bilan " +
        "kafolatlangan: qiynoq, " +
        "shafqatsiz yoki qadr-" +
        "qimmatni kamsituvchi " +
        "muomala TAQIQLANADI.\n\n" +
        "Bu mutlaq taqiq va u " +
        "hech qanday holatda " +
        "oqlanmaydi.\n\n" +
        "VIJDON ERKINLIGI ham " +
        "ta'minlanadi.\n\n" +
        "MAJBURIYATLAR: mahkumlar " +
        "belgilangan tartibga rioya " +
        "qilishi, ma'muriyat " +
        "talablarini bajarishi va " +
        "boshqa mahkumlarning " +
        "huquqlarini hurmat qilishi " +
        "shart.",
      example:
        "Mahkumga advokat bilan uchrashish " +
        "imkoni berilmadi — bu huquq " +
        "buzilishi hisoblanadi.",
      keyPoints: [
        "Jazo huquqlardan butunlay mahrum qilmaydi",
        "Yuridik yordam olish huquqi kafolatlangan",
        "Shaxsiy xavfsizlik huquqi mavjud",
        "Insoniy muomala huquqi mutlaq kafolat",
      ],
      warning:
        "Advokat bilan uchrashuv huquqini " +
        "cheklash — jiddiy huquq buzilishi.",
      lawRefs: [
        { code: "JIK", article: "8" },
        { code: "JIK", article: "9" },
        { code: "JIK", article: "10" },
        { code: "JIK", article: "11" },
        { code: "JIK", article: "11-1" },
        { code: "JIK", article: "12" },
        { code: "JIK", article: "13" },
      ],
    },
    {
      heading: "Ozodlikdan mahrum qilmaydigan jazolarni ijro etish",
      text:
        "Ozodlikdan mahrum qilmaydigan jazolar " +
        "ham belgilangan tartibda ijro " +
        "etiladi.\n\n" +
        "JARIMA: uni to'lash tartibi " +
        "belgilangan. To'lashdan bo'yin " +
        "tovlash alohida oqibatlarga olib " +
        "keladi — jarima boshqa jazo " +
        "bilan almashtirilishi " +
        "mumkin.\n\n" +
        "⚠️ AMALIY MASLAHAT: jarimani " +
        "to'lay olmayotgan bo'lsangiz, " +
        "JIM QOLMANG — to'lovni " +
        "bo'lib-bo'lib amalga oshirish " +
        "yoki muddatni uzaytirish " +
        "to'g'risida ariza bering.\n\n" +
        "MUAYYAN HUQUQDAN MAHRUM " +
        "QILISH: probatsiya bo'linmasi " +
        "va tegishli organlar hukmni " +
        "ijro etadi; ruxsatnoma " +
        "bekor qilinadi.\n\n" +
        "MAJBURIY JAMOAT ISHLARI: ijro " +
        "tartibi va shartlari, " +
        "probatsiya bo'linmasi hamda " +
        "mahalliy hokimiyat organlari " +
        "majburiyatlari belgilangan.\n\n" +
        "Mahkumning majburiyatlari va " +
        "jazo muddatini hisoblash " +
        "qoidalari ham " +
        "ko'rsatilgan.\n\n" +
        "⚠️ BO'YIN TOVLASH OQIBATI: " +
        "majburiy jamoat ishlarini " +
        "o'tashdan bo'yin tovlash " +
        "jazoni og'irroq turi bilan " +
        "almashtirishga olib " +
        "kelishi mumkin.\n\n" +
        "AXLOQ TUZATISH ISHLARI: " +
        "probatsiya bo'linmasi, " +
        "korxona ma'muriyati va " +
        "mahkumning majburiyatlari " +
        "belgilangan; jazo muddati " +
        "hisoblanadi.\n\n" +
        "AMALIY XULOSA: bu jazolarda " +
        "ENG MUHIM narsa — " +
        "INTIZOM.\n\n" +
        "Belgilangan tartibni " +
        "buzish yengil jazoni " +
        "og'irroq jazoga " +
        "aylantiradi — bu esa " +
        "ozodlikdan mahrum " +
        "qilishgacha borishi " +
        "mumkin.\n\n" +
        "Shuning uchun " +
        "probatsiya bo'linmasi " +
        "bilan aloqani uzmang va " +
        "barcha talablarni " +
        "bajaring.",
      example:
        "Majburiy jamoat ishlaridan bo'yin " +
        "tovlandi — jazo og'irroq turi " +
        "bilan almashtirildi.",
      keyPoints: [
        "Har bir jazo turi uchun ijro tartibi belgilangan",
        "Jarimani to'lay olmasangiz ariza bering",
        "Bo'yin tovlash og'irroq jazoga olib keladi",
        "Probatsiya bo'linmasi bilan aloqani uzmang",
      ],
      warning:
        "Yengil jazoda intizom buzilishi uni " +
        "ozodlikdan mahrum qilishga " +
        "aylantirishi mumkin.",
      lawRefs: [
        { code: "JIK", article: "19" },
        { code: "JIK", article: "20" },
        { code: "JIK", article: "21" },
        { code: "JIK", article: "22" },
        { code: "JIK", article: "25" },
        { code: "JIK", article: "25-1" },
        { code: "JIK", article: "25-7" },
        { code: "JIK", article: "25-8" },
        { code: "JIK", article: "26" },
        { code: "JIK", article: "29" },
        { code: "JIK", article: "30" },
      ],
    },
    {
      heading: "Rejim va nazorat choralari",
      text:
        "REJIM — jazoni ijro etish " +
        "muassasalarida belgilangan " +
        "tartib.\n\n" +
        "REJIMNING ASOSIY TALABLARI: " +
        "mahkumlarni qo'riqlash va " +
        "nazorat qilish; ularning " +
        "majburiyatlarini bajarishini " +
        "ta'minlash; turli toifadagi " +
        "mahkumlarni ajratib " +
        "saqlash.\n\n" +
        "MAHKUMLARNI KO'CHIRISH va " +
        "SAQLASH SHAROITINI " +
        "O'ZGARTIRISH belgilangan " +
        "tartibda amalga " +
        "oshiriladi.\n\n" +
        "⚠️ SAQLASH SHAROITINI " +
        "O'ZGARTIRISH — MUHIM " +
        "IMKONIYAT: mahkumning " +
        "xulq-atvoriga qarab " +
        "sharoitlar " +
        "yengillashtirilishi " +
        "mumkin.\n\n" +
        "Bu ko'proq uchrashuv, " +
        "posilka va boshqa " +
        "imkoniyatlarni " +
        "beradi.\n\n" +
        "TINTUV VA KO'ZDAN KECHIRISH " +
        "belgilangan tartibda " +
        "o'tkaziladi.\n\n" +
        "NAZORAT VOSITALARI: nazorat " +
        "va tekshirishning " +
        "texnikaviy vositalari " +
        "qo'llanilishi mumkin.\n\n" +
        "⚠️ KUCH ISHLATISH QAT'IY " +
        "TARTIBGA SOLINGAN: jismoniy " +
        "kuch, maxsus vositalar va " +
        "o'qotar qurol qo'llash " +
        "ASOSLARI hamda TARTIBI " +
        "qonunda aniq " +
        "belgilangan.\n\n" +
        "Ya'ni ular " +
        "o'zboshimchalik bilan " +
        "qo'llanilishi mumkin " +
        "emas.\n\n" +
        "AMALIY XULOSA: kuch " +
        "qonunga xilof " +
        "qo'llanilgan bo'lsa, bu " +
        "shikoyat uchun asos va " +
        "u jiddiy javobgarlikka " +
        "olib kelishi mumkin.\n\n" +
        "Bunday holatlarda tibbiy " +
        "ko'rikni va " +
        "jarohatlarni qayd " +
        "ettirishni talab " +
        "qilish kerak.\n\n" +
        "ALOHIDA HOLAT joriy " +
        "etilishi ham nazarda " +
        "tutilgan — favqulodda " +
        "vaziyatlarda.",
      example:
        "Ijobiy xulq-atvor sabab saqlash " +
        "sharoiti yengillashtirildi.",
      keyPoints: [
        "Rejim talablari qonunda belgilangan",
        "Saqlash sharoiti xulq-atvorga qarab o'zgaradi",
        "Kuch ishlatish asoslari qat'iy belgilangan",
        "Qonunga xilof kuch ishlatish shikoyat asosi",
      ],
      warning:
        "Jarohatlarni qayd ettirmaslik " +
        "keyingi shikoyatni imkonsiz " +
        "qiladi.",
      lawRefs: [
        { code: "JIK", article: "60" },
        { code: "JIK", article: "61" },
        { code: "JIK", article: "62" },
        { code: "JIK", article: "64" },
        { code: "JIK", article: "65" },
        { code: "JIK", article: "67" },
        { code: "JIK", article: "69" },
        { code: "JIK", article: "71" },
        { code: "JIK", article: "72" },
        { code: "JIK", article: "74" },
      ],
    },
    {
      heading: "Aloqa, ta'minot va mehnat",
      text:
        "Mahkumning tashqi dunyo bilan " +
        "aloqasi qonunda kafolatlangan.\n\n" +
        "UCHRASHUVLAR: mahkumlar " +
        "uchrashuvlarga haqli. Ularning " +
        "soni va davomiyligi rejim turiga " +
        "bog'liq.\n\n" +
        "⚠️ ZAMONAVIY IMKONIYAT: masofali " +
        "VIDEO-UCHRASHUVLAR yoki telefon " +
        "orqali so'zlashuvlar ham " +
        "nazarda tutilgan.\n\n" +
        "Bu uzoqda yashovchi " +
        "qarindoshlar uchun juda " +
        "muhim.\n\n" +
        "POSILKALAR, YO'QLOVLAR, " +
        "BANDEROLLAR va PUL " +
        "JO'NATMALARI olish hamda " +
        "yuborish tartibi " +
        "belgilangan.\n\n" +
        "YOZISHMALAR: mahkumlar " +
        "yozishmalarga haqli.\n\n" +
        "⚠️ ALOHIDA VA JUDA MUHIM " +
        "IMKONIYAT: mahkumlar " +
        "OMBUDSMANGA va Bolalar " +
        "ombudsmaniga MUROJAATLAR " +
        "QUTISI orqali murojaat " +
        "qilishi mumkin.\n\n" +
        "Bunday murojaatlar odatda " +
        "tekshirilmaydi va to'g'ridan-" +
        "to'g'ri yuboriladi.\n\n" +
        "AMALIY MA'NOSI: huquqingiz " +
        "buzilgan bo'lsa va ichki " +
        "murojaat natija bermasa — " +
        "aynan shu yo'ldan " +
        "foydalaning.\n\n" +
        "TA'MINOT: mahkumlar yashash " +
        "joyi, ovqat, ust-bosh va " +
        "TIBBIY-SANITARIYA " +
        "ta'minoti bilan " +
        "ta'minlanadi.\n\n" +
        "⚠️ TIBBIY YORDAM HUQUQI " +
        "ALOHIDA MUHIM: sog'liq " +
        "muammosi bo'lsa tibbiy " +
        "yordam talab qilish " +
        "huquqingiz.\n\n" +
        "Rad etilsa — bu shikoyat " +
        "asosi.\n\n" +
        "MEHNAT: mahkumlar mehnatga " +
        "jalb etiladi. Mehnat " +
        "tuzatishning asosiy " +
        "vositalaridan biri va u " +
        "muddatidan ilgari ozod " +
        "qilishda hisobga " +
        "olinadi.\n\n" +
        "SOTIB OLISH: mahkumlar " +
        "oziq-ovqat va eng zarur " +
        "narsalarni sotib olishi " +
        "mumkin; adabiyot va " +
        "yozuv ashyolarini sotib " +
        "olish hamda saqlash " +
        "huquqi ham bor.\n\n" +
        "ALOHIDA HOLLARDA mahkum " +
        "muassasa doirasidan " +
        "chetga chiqishi mumkin.",
      example:
        "Ichki murojaat natija bermadi — " +
        "ombudsman qutisi orqali murojaat " +
        "qilindi.",
      keyPoints: [
        "Uchrashuv va yozishma huquqi kafolatlangan",
        "Video-uchrashuv imkoniyati mavjud",
        "Ombudsmanga murojaat qutisi orqali murojaat qilinadi",
        "Tibbiy yordam huquqi alohida muhim",
      ],
      warning:
        "Tibbiy yordamni rad etish — jiddiy " +
        "huquq buzilishi.",
      lawRefs: [
        { code: "JIK", article: "75" },
        { code: "JIK", article: "76" },
        { code: "JIK", article: "77" },
        { code: "JIK", article: "78" },
        { code: "JIK", article: "79" },
        { code: "JIK", article: "79-2" },
        { code: "JIK", article: "80" },
        { code: "JIK", article: "82" },
        { code: "JIK", article: "84" },
        { code: "JIK", article: "85" },
        { code: "JIK", article: "87" },
        { code: "JIK", article: "88" },
      ],
    },
    {
      heading: "Nazorat va shikoyat yo'llari",
      text:
        "Jazoni ijro etish ustidan bir necha " +
        "darajada nazorat o'rnatilgan.\n\n" +
        "DAVLAT HOKIMIYATI VA BOSHQARUV " +
        "ORGANLARI tomonidan tekshirish " +
        "amalga oshiriladi.\n\n" +
        "PROKUROR NAZORATI — jazoni ijro " +
        "etish qonuniyligi ustidan " +
        "prokuratura nazorat qiladi.\n\n" +
        "⚠️ AMALIY MA'NOSI: prokurorga " +
        "murojaat qilish — huquq " +
        "buzilganda eng samarali " +
        "yo'llardan biri.\n\n" +
        "Prokuror qonunga xilof " +
        "qarorlarni bekor qilishi va " +
        "buzilishlarni bartaraf " +
        "etishni talab qilishi " +
        "mumkin.\n\n" +
        "JAZONI O'TASH JOYLARIGA " +
        "KIRISH huquqiga ega " +
        "shaxslar doirasi qonunda " +
        "belgilangan — bu nazoratni " +
        "amalda ta'minlaydi.\n\n" +
        "AMALIY XULOSA — SHIKOYAT " +
        "YO'LLARINING KETMA-" +
        "KETLIGI:\n\n" +
        "(1) muassasa ma'muriyatiga " +
        "yozma murojaat;\n\n" +
        "(2) yuqori turuvchi " +
        "organga;\n\n" +
        "(3) prokuraturaga;\n\n" +
        "(4) ombudsmanga (murojaatlar " +
        "qutisi orqali);\n\n" +
        "(5) sudga.\n\n" +
        "Har bir bosqichda " +
        "murojaatning nusxasini va " +
        "javobni saqlang.\n\n" +
        "⚠️ MUHIM: murojaat " +
        "berganingiz uchun sizga " +
        "nisbatan ta'qib " +
        "qo'llanilishi mumkin " +
        "emas — bu alohida " +
        "qonunbuzarlik.\n\n" +
        "AMALIY MASLAHAT " +
        "QARINDOSHLARGA: mahkum " +
        "bilan aloqani " +
        "saqlang — uchrashuvlar, " +
        "yozishmalar va " +
        "posilkalar nafaqat " +
        "moddiy yordam, balki " +
        "tuzatish jarayonining " +
        "muhim qismi.\n\n" +
        "Shuningdek advokat bilan " +
        "aloqani " +
        "ta'minlang — muddatidan " +
        "ilgari ozod qilish " +
        "uchun hujjatlar " +
        "oldindan tayyorlanishi " +
        "kerak.",
      example:
        "Huquq buzilishi bo'yicha " +
        "prokuraturaga murojaat qilindi — " +
        "buzilish bartaraf etildi.",
      keyPoints: [
        "Nazorat bir necha darajada amalga oshiriladi",
        "Prokuror nazorati eng samarali yo'llardan",
        "Shikoyat yo'llarining aniq ketma-ketligi bor",
        "Murojaat uchun ta'qib qo'llanilishi mumkin emas",
      ],
      warning:
        "Murojaat nusxasini saqlamaslik — " +
        "keyingi bosqichda dalilni " +
        "yo'qotish.",
      lawRefs: [
        { code: "JIK", article: "14" },
        { code: "JIK", article: "16" },
        { code: "JIK", article: "17" },
        { code: "JIK", article: "18" },
      ],
    },
  ],
};

module.exports = { LESSON };
