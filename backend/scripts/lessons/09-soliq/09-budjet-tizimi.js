"use strict";
/** SOLIQ MODULI — 9-DARS: BUDJET TIZIMI. BK + SK 455–460 (yig'imlar). */

const LESSON = {
  key: "budjet-tizimi",
  category: "tax",
  level: "mid",
  order: 9090,
  title: "Budjet tizimi: soliqlaringiz qayerga ketadi",
  desc:
    "Budjet tizimi va uning prinsiplari, budjet daromadlari va " +
    "xarajatlari, budjet jarayoni va uning ochiqligi, budjetlararo " +
    "munosabatlar, davlat moliyaviy nazorati hamda yig'imlar.",
  objectives: [
    "Budjet tizimi qanday tuzilganini bilasiz",
    "Budjet prinsiplarini va ochiqlik talabini bilasiz",
    "Budjet daromadlari qayerdan shakllanishini bilasiz",
    "Budjet jarayonining bosqichlarini bilasiz",
    "Davlat moliyaviy nazorati kim tomonidan amalga oshirilishini bilasiz",
    "Yig'imlar nima ekanini bilasiz",
  ],
  practicalSteps: [
    "Budjet ma'lumotlari ochiq manbalarda e'lon qilinishini biling",
    "Mahalliy budjet muhokamasida ishtirok etish imkonini o'rganing",
    "Budjet tashkiloti bilan shartnomada moliyalashtirish manbaini aniqlang",
    "Davlat xaridi jarayonida qatnashish shartlarini o'rganing",
    "Yig'im to'laganda uning aniq maqsadini tekshiring",
  ],
  sections: [
    {
      heading: "Budjet tizimi va uning prinsiplari",
      text:
        "BUDJET TIZIMI — davlat budjeti, davlat maqsadli " +
        "jamg'armalari budjetlari va mahalliy " +
        "budjetlar majmui.\n\n" +
        "⚠️ NIMA UCHUN BU DARS SOLIQ MODULIDA: siz " +
        "to'laydigan soliqlar aynan shu tizimga " +
        "tushadi. Soliqning \"qayerga ketishini\" " +
        "bilish soliq majburiyatini tushunishning " +
        "bir qismi.\n\n" +
        "ASOSIY PRINSIPLAR: budjet tizimining " +
        "YAGONALIGI; ma'muriy-hududiy tuzilishga " +
        "MUVOFIQLIK; budjetlarning BALANSLILIGI; " +
        "daromadlarni prognoz qilish va " +
        "xarajatlarni REJALASHTIRISH; mablag'lardan " +
        "foydalanishning MAQSADLILIGI; " +
        "budjetlarning MUSTAQILLIGI; " +
        "NATIJADORLIK; KASSANING YAGONALIGI; " +
        "ishtirokchilarning JAVOBGARLIGI; " +
        "OCHIQLIK.\n\n" +
        "⚠️ OCHIQLIK PRINSIPI FUQARO UCHUN ENG " +
        "MUHIMI: budjet ma'lumotlari ochiq " +
        "bo'lishi kerak.\n\n" +
        "Ya'ni budjet loyihasi, uning ijrosi va " +
        "hisobotlar bilan tanishish sizning " +
        "huquqingiz.\n\n" +
        "MAQSADLILIK PRINSIPI ham amaliy: " +
        "budjet mablag'lari faqat belgilangan " +
        "maqsadga sarflanadi. Boshqa maqsadga " +
        "sarflash budjet intizomini buzish " +
        "hisoblanadi.\n\n" +
        "BUDJET TASNIFI — daromad va " +
        "xarajatlarni guruhlash tizimi. U " +
        "budjet hujjatlarini o'qish imkonini " +
        "beradi.\n\n" +
        "AMALIY XULOSA: mahalliy budjet " +
        "ma'lumotlari bilan tanishish " +
        "mahallangizdagi loyihalarni " +
        "tushunish imkonini beradi.",
      example:
        "Mahalliy budjet ma'lumotlari ochiq " +
        "e'lon qilindi — fuqarolar " +
        "xarajatlar bilan tanishishi mumkin.",
      keyPoints: [
        "Budjet tizimi bir necha darajadan iborat",
        "Prinsiplar orasida ochiqlik alohida muhim",
        "Mablag'lar faqat maqsadli sarflanadi",
        "Budjet tasnifi hujjatlarni o'qish imkonini beradi",
      ],
      warning:
        "Budjet ma'lumotlari ochiq — ulardan " +
        "foydalanish huquqingiz.",
      lawRefs: [
        { code: "BK", article: "6" },
        { code: "BK", article: "7" },
        { code: "BK", article: "12" },
        { code: "BK", article: "13" },
        { code: "BK", article: "17" },
        { code: "BK", article: "18" },
        { code: "BK", article: "19" },
      ],
    },
    {
      heading: "Budjet daromadlari qayerdan shakllanadi",
      text:
        "DAVLAT BUDJETI DAROMADLARI asosan " +
        "SOLIQLAR va YIG'IMLAR hisobidan " +
        "shakllanadi.\n\n" +
        "⚠️ AMALIY XULOSA: siz to'laydigan har " +
        "bir soliq budjetning aniq bir " +
        "darajasiga tushadi.\n\n" +
        "RESPUBLIKA BUDJETI daromadlari va " +
        "MAHALLIY BUDJETLAR daromadlari " +
        "alohida shakllanadi.\n\n" +
        "Ya'ni ayrim soliqlar respublika, " +
        "ayrimlari esa mahalliy budjetga " +
        "yo'naltiriladi — bu mahalliy " +
        "loyihalarning moliyalashtirilishiga " +
        "bevosita ta'sir qiladi.\n\n" +
        "DAVLAT MAQSADLI JAMG'ARMALARI " +
        "alohida budjetlarga ega.\n\n" +
        "TIKLANISH VA TARAQQIYOT JAMG'ARMASI " +
        "daromadlari va ulardan foydalanish " +
        "yo'nalishlari alohida " +
        "belgilangan.\n\n" +
        "BUDJETDAN TASHQARI JAMG'ARMALAR: " +
        "budjet tashkilotlari, vazirliklar " +
        "va idoralar budjetdan tashqari " +
        "jamg'armalarga ega bo'lishi " +
        "mumkin.\n\n" +
        "BEG'ARAZ YORDAM: insonparvarlik " +
        "yordami va texnik ko'maklashish " +
        "mablag'larini jalb etish tartibi " +
        "belgilangan. Beg'araz yordam " +
        "oluvchilarning majburiyatlari ham " +
        "bor.\n\n" +
        "⚠️ AMALIY MA'NOSI TASHKILOTLAR " +
        "UCHUN: grant yoki insonparvarlik " +
        "yordami olayotgan bo'lsangiz, " +
        "uning hisobga olinishi va " +
        "maqsadli ishlatilishi bo'yicha " +
        "majburiyatlar yuzaga keladi.\n\n" +
        "Ularni bajarmaslik javobgarlikka " +
        "olib keladi.",
      example:
        "Tashkilot grant oldi — uning " +
        "maqsadli ishlatilishi bo'yicha " +
        "hisobot berish majburiyati yuzaga " +
        "keldi.",
      keyPoints: [
        "Budjet daromadi asosan soliqlardan shakllanadi",
        "Respublika va mahalliy budjetlar alohida",
        "Maqsadli jamg'armalar o'z budjetiga ega",
        "Beg'araz yordam oluvchida majburiyatlar bor",
      ],
      warning:
        "Grant mablag'ini maqsadsiz sarflash " +
        "javobgarlikka olib keladi.",
      lawRefs: [
        { code: "BK", article: "34" },
        { code: "BK", article: "36" },
        { code: "BK", article: "44" },
        { code: "BK", article: "48" },
        { code: "BK", article: "49" },
        { code: "BK", article: "50" },
        { code: "BK", article: "51" },
        { code: "BK", article: "52" },
        { code: "BK", article: "65" },
        { code: "BK", article: "67" },
      ],
    },
    {
      heading: "Budjet xarajatlari va davlat xaridlari",
      text:
        "DAVLAT BUDJETI XARAJATLARI tarkibi " +
        "kodeksda belgilangan va u budjet " +
        "darajalari bo'yicha taqsimlanadi.\n\n" +
        "RESPUBLIKA budjeti, QORAQALPOG'ISTON " +
        "RESPUBLIKASI va viloyat budjetlari " +
        "hamda TUMAN va SHAHAR budjetlarining " +
        "xarajatlari alohida " +
        "belgilangan.\n\n" +
        "⚠️ AMALIY MA'NOSI: mahallangizdagi " +
        "maktab yoki yo'l qaysi budjetdan " +
        "moliyalashtirilishini bilish " +
        "murojaatni to'g'ri manzilga " +
        "yo'naltirish imkonini beradi.\n\n" +
        "ZAXIRA JAMG'ARMALARI favqulodda " +
        "xarajatlar uchun nazarda " +
        "tutilgan.\n\n" +
        "XARAJATLAR SMETASI: budjet " +
        "tashkilotlari va mablag' " +
        "oluvchilar xarajatlar smetasini " +
        "tuzadi va tasdiqlaydi. SHTAT " +
        "JADVALI ham tuziladi va " +
        "ro'yxatdan o'tkaziladi.\n\n" +
        "⚠️ DAVLAT XARIDLARI — TADBIRKOR " +
        "UCHUN ENG MUHIM BO'LIM: budjet " +
        "mablag'lari hisobidan tovar, ish " +
        "va xizmatlar sotib olish davlat " +
        "xaridlari tartibida amalga " +
        "oshiriladi.\n\n" +
        "Bu tadbirkorlar uchun katta bozor: " +
        "davlat buyurtmasi barqaror " +
        "to'lovchi va katta hajm " +
        "degani.\n\n" +
        "AMALIY QADAM: davlat xaridlari " +
        "platformasida ro'yxatdan o'ting " +
        "va o'z sohangizdagi e'lonlarni " +
        "kuzatib boring.\n\n" +
        "MAJBURIYATLARNI QABUL QILISH: " +
        "budjet tashkilotlari yuridik va " +
        "moliyaviy majburiyatlarni " +
        "belgilangan tartibda qabul " +
        "qiladi hamda ro'yxatdan " +
        "o'tkazadi.\n\n" +
        "⚠️ BU SIZ UCHUN MUHIM: budjet " +
        "tashkiloti bilan shartnoma " +
        "tuzayotganda majburiyat " +
        "ro'yxatdan o'tganini " +
        "tekshiring.\n\n" +
        "Ro'yxatdan o'tmagan majburiyat " +
        "bo'yicha to'lov amalga " +
        "oshirilmasligi mumkin va siz " +
        "ishni bajarib, pul ololmay " +
        "qolasiz.",
      example:
        "Budjet tashkiloti bilan shartnoma " +
        "tuzildi, lekin majburiyat " +
        "ro'yxatdan o'tmagan edi — to'lov " +
        "kechikdi.",
      keyPoints: [
        "Xarajatlar budjet darajalari bo'yicha taqsimlanadi",
        "Davlat xaridlari alohida tartibda amalga oshiriladi",
        "Bu tadbirkorlar uchun katta bozor",
        "Majburiyat ro'yxatdan o'tganini tekshiring",
      ],
      warning:
        "Ro'yxatdan o'tmagan majburiyat bo'yicha " +
        "to'lov kafolatlanmaydi.",
      lawRefs: [
        { code: "BK", article: "69" },
        { code: "BK", article: "70" },
        { code: "BK", article: "72" },
        { code: "BK", article: "73" },
        { code: "BK", article: "102" },
        { code: "BK", article: "106" },
        { code: "BK", article: "121" },
        { code: "BK", article: "122" },
        { code: "BK", article: "123" },
        { code: "BK", article: "124" },
      ],
    },
    {
      heading: "Budjet jarayoni va uning ochiqligi",
      text:
        "BUDJET JARAYONI bir necha bosqichdan " +
        "iborat: loyihani ishlab chiqish, ko'rib " +
        "chiqish va qabul qilish, ijro etish, " +
        "hisobot berish.\n\n" +
        "LOYIHANI ISHLAB CHIQISH: Davlat budjeti " +
        "to'g'risidagi qonun loyihasi " +
        "belgilangan tartibda ishlab " +
        "chiqiladi.\n\n" +
        "BUDJET SO'ROVI — budjet mablag'i " +
        "so'ralayotgan asosiy hujjat. Unga " +
        "erishilgan natijalar to'g'risidagi " +
        "tahliliy hisobot ham ilova " +
        "qilinadi.\n\n" +
        "⚠️ NATIJAGA YO'NALTIRILGANLIK: " +
        "budjet endi faqat \"qancha pul kerak\" " +
        "emas, \"qanday natija olinadi\" " +
        "degan savolga ham javob berishi " +
        "kerak.\n\n" +
        "FISKAL STRATEGIYA o'rta muddatli " +
        "davr uchun ishlab chiqiladi va " +
        "tasdiqlanadi.\n\n" +
        "BUDJETNOMA — budjet loyihasi bilan " +
        "birga taqdim etiladigan hujjat.\n\n" +
        "QABUL QILISH: Davlat budjeti " +
        "to'g'risidagi Qonun belgilangan " +
        "tartibda qabul qilinadi; mahalliy " +
        "budjetlar tegishli Kengashlar " +
        "tomonidan tasdiqlanadi.\n\n" +
        "IJRO ETISH: budjet g'aznachilik " +
        "tizimi orqali ijro etiladi. " +
        "Shaxsiy g'azna hisobvaraqlari " +
        "ochiladi.\n\n" +
        "HISOBOT: budjet ijrosi bo'yicha " +
        "yillik va choraklik hisobotlar " +
        "tuziladi va ko'rib chiqiladi. " +
        "Yillik hisobot TASHQI AUDITDAN " +
        "o'tkaziladi.\n\n" +
        "⚠️ OCHIQLIKNI TA'MINLASH TARTIBI " +
        "alohida belgilangan — ya'ni " +
        "budjet jarayonining ochiqligi " +
        "shunchaki tavsiya emas, " +
        "majburiyat.\n\n" +
        "Uning tartibini buzish alohida " +
        "huquqbuzarlik hisoblanadi.\n\n" +
        "AMALIY XULOSA: budjet " +
        "ma'lumotlarini rasmiy " +
        "manbalardan topish va ular " +
        "bilan tanishish mumkin.",
      example:
        "Budjet ijrosi hisoboti e'lon " +
        "qilindi — fuqarolar mablag' " +
        "qayerga sarflanganini ko'rishi " +
        "mumkin.",
      keyPoints: [
        "Budjet jarayoni to'rt bosqichdan iborat",
        "Budjet so'rovi natijalar bilan asoslanadi",
        "Yillik hisobot tashqi auditdan o'tadi",
        "Ochiqlikni ta'minlash majburiy",
      ],
      warning:
        "Ochiqlik tartibini buzish alohida " +
        "huquqbuzarlik hisoblanadi.",
      lawRefs: [
        { code: "BK", article: "83" },
        { code: "BK", article: "85" },
        { code: "BK", article: "86" },
        { code: "BK", article: "90" },
        { code: "BK", article: "96" },
        { code: "BK", article: "98" },
        { code: "BK", article: "99" },
        { code: "BK", article: "109" },
        { code: "BK", article: "165" },
        { code: "BK", article: "166-1" },
        { code: "BK", article: "167" },
      ],
    },
    {
      heading: "Budjetlararo munosabatlar",
      text:
        "BUDJETLARARO MUNOSABATLAR — turli " +
        "darajadagi budjetlar o'rtasidagi " +
        "moliyaviy aloqalar.\n\n" +
        "⚠️ NIMA UCHUN BU KERAK: barcha " +
        "hududlarning soliq bazasi bir xil " +
        "emas. Ayrim tumanlar ko'p soliq " +
        "yig'adi, ayrimlari kam.\n\n" +
        "Agar har bir hudud faqat o'z " +
        "yig'gan mablag'i bilan yashasa, " +
        "xizmatlar sifati keskin farq " +
        "qilardi. Budjetlararo " +
        "munosabatlar bu farqni " +
        "tenglashtiradi.\n\n" +
        "BUDJETLARARO TRANSFERTLAR — bir " +
        "budjetdan boshqasiga o'tkaziladigan " +
        "mablag'lar.\n\n" +
        "TURLARI: SUBVENSIYALAR (maqsadli " +
        "mablag'); O'TKAZIB BERILADIGAN " +
        "DAROMADLAR; DOTATSIYA (umumiy " +
        "yordam); MAQSADLI IJTIMOIY " +
        "TRANSFERTLAR; TARTIBGA SOLUVCHI " +
        "transfertlar.\n\n" +
        "BUDJET SSUDASI shaklidagi transfert " +
        "ham nazarda tutilgan — bu " +
        "qaytariladigan mablag'.\n\n" +
        "AYLANMA KASSA MABLAG'LARI " +
        "vaqtinchalik kassa uzilishlarini " +
        "qoplash uchun ishlatiladi.\n\n" +
        "CHEKLOVLAR: mahalliy budjetlarga " +
        "qo'llaniladigan cheklovlar " +
        "belgilangan.\n\n" +
        "O'ZGARTIRISH KIRITISH: budjetlarga " +
        "va xarajatlar yoyilmasiga " +
        "o'zgartirish kiritish tartibi " +
        "har bir daraja uchun alohida " +
        "belgilangan.\n\n" +
        "AMALIY XULOSA: mahalliy budjetda " +
        "mablag' yetishmasligi haqidagi " +
        "javob har doim ham yakuniy " +
        "emas — transfertlar mexanizmi " +
        "mavjud va mahalliy hokimiyat " +
        "yuqori darajaga murojaat qilish " +
        "imkoniga ega.",
      example:
        "Kam ta'minlangan tumanga dotatsiya " +
        "ajratildi — xizmatlar darajasi " +
        "saqlandi.",
      keyPoints: [
        "Budjetlararo munosabatlar hududiy farqni tenglashtiradi",
        "Transfert turlari: subvensiya, dotatsiya va boshqalar",
        "Budjet ssudasi qaytariladigan mablag'",
        "Mahalliy budjetlarga cheklovlar belgilangan",
      ],
      warning:
        "\"Mablag' yo'q\" degan javob har doim " +
        "ham yakuniy emas.",
      lawRefs: [
        { code: "BK", article: "132" },
        { code: "BK", article: "133" },
        { code: "BK", article: "134" },
        { code: "BK", article: "135" },
        { code: "BK", article: "136" },
        { code: "BK", article: "137" },
        { code: "BK", article: "138" },
        { code: "BK", article: "138-1" },
        { code: "BK", article: "140" },
        { code: "BK", article: "141" },
        { code: "BK", article: "142" },
        { code: "BK", article: "143" },
      ],
    },
    {
      heading: "Davlat moliyaviy nazorati va yig'imlar",
      text:
        "DAVLAT MOLIYAVIY NAZORATI budjet " +
        "mablag'laridan foydalanish ustidan " +
        "amalga oshiriladi.\n\n" +
        "NAZORAT ORGANLARI: Hisob palatasi; " +
        "Iqtisodiyot va moliya vazirligi " +
        "hamda uning hududiy organlari; " +
        "g'aznachilik bo'linmalari; Davlat " +
        "moliyaviy nazorati inspeksiyasi; " +
        "davlat soliq xizmati organlari.\n\n" +
        "⚠️ AMALIY MA'NOSI: budjet mablag'i " +
        "bilan ishlaydigan tashkilot bir " +
        "necha organ tomonidan " +
        "tekshirilishi mumkin.\n\n" +
        "PRINSIPLARI, SHAKLLARI, TURLARI " +
        "va USULLARI kodeksda " +
        "belgilangan.\n\n" +
        "MUDDATLAR va DAVRIYLIK ham " +
        "belgilangan — ya'ni nazorat " +
        "cheksiz emas.\n\n" +
        "CHEKLOVLAR: davlat moliyaviy " +
        "nazoratini o'tkazishdagi " +
        "cheklovlar nazarda tutilgan.\n\n" +
        "⚠️ NAZORAT OBYEKTI MANSABDOR " +
        "SHAXSLARINING HUQUQLARI ham " +
        "belgilangan — ular bilan " +
        "tanishing va ulardan " +
        "foydalaning.\n\n" +
        "NATIJALAR belgilangan hujjatlar " +
        "bilan rasmiylashtiriladi.\n\n" +
        "JAVOBGARLIK: budjet intizomini, " +
        "smeta-shtat intizomini, budjet " +
        "hisobini yuritish tartibini va " +
        "hisobot taqdim etish tartibini " +
        "buzganlik uchun javobgarlik " +
        "belgilangan.\n\n" +
        "YIG'IMLAR (Soliq kodeksi bo'yicha): " +
        "yig'imlarning turlari, ularni " +
        "to'lovchilar, soliq solish obyekti, " +
        "bazasi va to'lash tartibi " +
        "belgilangan.\n\n" +
        "AMALIY XULOSA: yig'im har doim " +
        "aniq bir HARAKAT bilan " +
        "bog'langan. Harakat amalga " +
        "oshirilmasa, yig'imni " +
        "qaytarishni talab qilish " +
        "mumkin.",
      example:
        "Yig'im to'landi, lekin xizmat " +
        "ko'rsatilmadi — uni qaytarishni " +
        "talab qilish mumkin.",
      keyPoints: [
        "Moliyaviy nazoratni bir necha organ amalga oshiradi",
        "Nazorat muddatlari va cheklovlari belgilangan",
        "Nazorat obyektining huquqlari bor",
        "Yig'im aniq harakat bilan bog'langan",
      ],
      warning:
        "Budjet intizomini buzish alohida " +
        "javobgarlikka olib keladi.",
      lawRefs: [
        { code: "BK", article: "170" },
        { code: "BK", article: "171" },
        { code: "BK", article: "172" },
        { code: "BK", article: "173" },
        { code: "BK", article: "182" },
        { code: "BK", article: "185" },
        { code: "BK", article: "186" },
        { code: "BK", article: "187" },
        { code: "BK", article: "188" },
        { code: "SK", article: "455" },
        { code: "SK", article: "456" },
        { code: "SK", article: "457" },
        { code: "SK", article: "458" },
        { code: "SK", article: "460" },
      ],
    },
  ],
};

module.exports = { LESSON };
