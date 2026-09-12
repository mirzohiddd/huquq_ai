"use strict";
/** FUQAROLIK MODULI — 2-DARS: SUBYEKTLAR. FK 16–18, 21, 24–26-1, 39–80. */

const LESSON = {
  key: "fuqarolik-subyektlar",
  category: "civil",
  level: "basic",
  order: 2020,
  title: "Kim huquq egasi bo'la oladi: shaxslar",
  desc:
    "Jismoniy shaxsning huquq layoqati, yakka tartibdagi tadbirkorlik, " +
    "yuridik shaxs nima, uning turlari, tashkil etilishi, qayta " +
    "tashkil etilishi va tugatilishi.",
  objectives: [
    "Huquq layoqati qachon boshlanib qachon tugashini bilasiz",
    "Yakka tartibdagi tadbirkorning javobgarligini tushunasiz",
    "Yuridik shaxs nima ekanligini va uning belgilarini bilasiz",
    "Tashkiliy-huquqiy shakllarni farqlay olasiz",
    "Kontragentni tekshirishda nimaga qarash kerakligini bilasiz",
    "Tugatishda kreditor sifatida qanday ish tutishni bilasiz",
  ],
  practicalSteps: [
    "Kontragent bilan shartnoma tuzishdan oldin uning davlat ro'yxatidan o'tganini tekshiring",
    "Shartnomani imzolayotgan shaxsning vakolatini (nizom yoki ishonchnoma) so'rang",
    "Tashkilotning to'liq nomi va joylashgan yerini shartnomada aniq yozing",
    "Kontragent qayta tashkil etilsa — huquqiy vorisni yozma aniqlashtiring",
    "Tugatish e'lon qilinsa, talabingizni belgilangan muddatda yozma taqdim eting",
  ],
  sections: [
    {
      heading: "Jismoniy shaxs va uning huquq layoqati",
      text:
        "Fuqaro (jismoniy shaxs) — fuqarolik huquqining asosiy " +
        "subyekti. Uning HUQUQ LAYOQATI, ya'ni fuqarolik huquqlariga " +
        "ega bo'lish va burchlarni zimmasiga olish qobiliyati, " +
        "TUG'ILGAN paytdan boshlanadi va VAFOT etishi bilan " +
        "tugaydi.\n\n" +
        "⚠️ HUQUQ LAYOQATI HAMMADA BIR XIL. Yosh, sog'liq, ma'lumot " +
        "yoki mulkiy holat unga ta'sir qilmaydi. Yangi tug'ilgan bola " +
        "ham meros olishi, mulkdor bo'lishi mumkin.\n\n" +
        "Buni MUOMALA LAYOQATI bilan aralashtirmaslik kerak: huquq " +
        "layoqati — huquqqa EGA BO'LISH imkoni, muomala layoqati — " +
        "uni O'ZI amalga oshirish imkoni. Ikkinchisi yoshga bog'liq " +
        "va u keyingi darsda batafsil ko'riladi.\n\n" +
        "Huquq layoqati mazmuni keng: mol-mulkka ega bo'lish, meros " +
        "qoldirish va olish, tadbirkorlik bilan shug'ullanish, " +
        "yuridik shaxs tashkil etish, bitimlar tuzish, yashash joyini " +
        "tanlash, ijod natijalariga huquqqa ega bo'lish.",
      example:
        "Chaqaloq nomiga uy meros qoldi — u mulkdor bo'ladi, " +
        "mulkni esa uning nomidan qonuniy vakili boshqaradi.",
      keyPoints: [
        "Huquq layoqati tug'ilishdan boshlanib vafot bilan tugaydi",
        "U barcha fuqarolarda bir xil hajmda bo'ladi",
        "Huquq layoqati va muomala layoqati — turli tushunchalar",
        "Yosh bola ham mulkdor va merosxo'r bo'la oladi",
      ],
      warning:
        "Voyaga yetmagan mulkdorning mulkiga oid bitimlar alohida " +
        "tartibda va cheklovlar bilan tuziladi.",
      lawRefs: [
        { code: "FK", article: "16" },
        { code: "FK", article: "17" },
        { code: "FK", article: "18" },
      ],
    },
    {
      heading: "Yashash joyi va uning huquqiy ahamiyati",
      text:
        "Fuqaroning YASHASH JOYI — u doimiy yoki asosan yashaydigan " +
        "joy.\n\n" +
        "Bu shunchaki manzil emas, u aniq huquqiy oqibatlarga ega:\n\n" +
        "(1) MEROS aynan qoldiruvchining oxirgi yashash joyi bo'yicha " +
        "ochiladi;\n\n" +
        "(2) ko'plab da'volar javobgarning yashash joyi bo'yicha " +
        "sudga beriladi;\n\n" +
        "(3) majburiyatni bajarish joyi ayrim holatlarda yashash " +
        "joyiga bog'lanadi;\n\n" +
        "(4) xabarnoma va chaqiruvlar shu manzilga yuboriladi.\n\n" +
        "⚠️ AMALIY XULOSA: shartnomada manzilni aniq va haqiqiy " +
        "yozing. Noto'g'ri manzil tufayli sud xabarnomasini " +
        "olmaslik — ish sizsiz ko'rib chiqilishining eng keng " +
        "tarqalgan sababi.\n\n" +
        "Voyaga yetmagan va vasiylikdagi shaxslarning yashash joyi " +
        "qonuniy vakillarining yashash joyi deb hisoblanadi.",
      example:
        "Manzil o'zgargan, lekin shartnomada eskisi qolgan — " +
        "xabarnoma eski manzilga borib, javob berilmagan deb " +
        "qaraladi.",
      keyPoints: [
        "Yashash joyi — doimiy yoki asosan yashaydigan joy",
        "Meros oxirgi yashash joyi bo'yicha ochiladi",
        "Da'vo ko'pincha javobgarning yashash joyiga beriladi",
        "Manzil o'zgarsa kontragentni yozma xabardor qiling",
      ],
      warning:
        "Xabarnomani olmaslik ishni to'xtatmaydi — u sizsiz ko'rib " +
        "chiqilishi mumkin.",
      lawRefs: [{ code: "FK", article: "21" }],
    },
    {
      heading: "Fuqaroning tadbirkorlik faoliyati",
      text:
        "Fuqaro yuridik shaxs tashkil etmasdan ham tadbirkorlik " +
        "faoliyati bilan shug'ullanishga haqli — buning uchun u " +
        "belgilangan tartibda RO'YXATDAN o'tishi kerak.\n\n" +
        "⚠️ ENG MUHIM JIHAT — JAVOBGARLIK. Yakka tartibdagi " +
        "tadbirkor o'z majburiyatlari bo'yicha O'ZIGA TEGISHLI " +
        "BARCHA MOL-MULKI bilan javob beradi. Ya'ni tadbirkorlik " +
        "qarzi uchun shaxsiy mol-mulk ham javob beradi.\n\n" +
        "Bu yuridik shaxsdan tub farq: yuridik shaxsda ta'sischi " +
        "odatda faqat qo'shgan hissasi doirasida xavf ko'taradi.\n\n" +
        "Qonunchilikda undirib olish qaratilishi mumkin bo'lmagan " +
        "mol-mulk ro'yxati belgilangan — ya'ni himoya butunlay yo'q " +
        "emas, lekin u cheklangan.\n\n" +
        "AMALIY XULOSA: faoliyat hajmi va xavfi oshgan sari yuridik " +
        "shaxs shaklini tanlash mantiqiyroq bo'ladi.",
      example:
        "Yakka tartibdagi tadbirkor yetkazib berish shartnomasini " +
        "bajara olmadi — undiruv uning shaxsiy mol-mulkiga ham " +
        "qaratilishi mumkin.",
      keyPoints: [
        "Fuqaro ro'yxatdan o'tib tadbirkorlik qilishi mumkin",
        "U barcha mol-mulki bilan javob beradi",
        "Yuridik shaxsda javobgarlik odatda cheklangan",
        "Undirilmaydigan mol-mulk ro'yxati qonunda belgilangan",
      ],
      warning:
        "Ro'yxatdan o'tmasdan muntazam tadbirkorlik qilish " +
        "javobgarlikka olib keladi.",
      lawRefs: [
        { code: "FK", article: "24" },
        { code: "FK", article: "25" },
      ],
    },
    {
      heading: "To'lovga qobiliyatsizlik: tadbirkor va oddiy fuqaro",
      text:
        "Agar tadbirkor kreditorlar talabini qondira olmasa, u sud " +
        "qarori bilan TO'LOVGA QOBILIYATSIZ deb topilishi mumkin.\n\n" +
        "Kodeks ikki holatni ajratadi: yakka tartibdagi tadbirkorning " +
        "(va bu maqomni yo'qotgan shaxsning) to'lovga " +
        "qobiliyatsizligi hamda oddiy jismoniy shaxsning to'lovga " +
        "qobiliyatsizligi.\n\n" +
        "⚠️ MOHIYATI: bu \"qarzdan qutulish\" emas, balki mavjud " +
        "mol-mulkni kreditorlar o'rtasida QONUNIY NAVBAT bo'yicha " +
        "adolatli taqsimlash tartibi.\n\n" +
        "Kreditor uchun amaliy ma'nosi: qarzdorga nisbatan bunday " +
        "protsedura boshlansa, alohida undirish odatda to'xtaydi va " +
        "talabni umumiy tartibda qo'yish kerak bo'ladi. Muddatni " +
        "o'tkazib yuborgan kreditor navbatning oxirida qolishi " +
        "mumkin.\n\n" +
        "Shuning uchun kontragentning moliyaviy holati haqidagi " +
        "signallarga (to'lovlarning kechikishi, aloqaning uzilishi) " +
        "darhol munosabat bildirish kerak.",
      example:
        "Qarzdorga nisbatan protsedura boshlangani e'lon qilindi, " +
        "kreditor esa buni bilmay qoldi — talab kech qo'yilib, " +
        "qondirilmasligi mumkin.",
      keyPoints: [
        "To'lovga qobiliyatsizlik sud qarori bilan aniqlanadi",
        "Tadbirkor va oddiy fuqaro uchun alohida qoidalar bor",
        "Maqsad — mol-mulkni navbat bo'yicha adolatli taqsimlash",
        "Talabni belgilangan muddatda qo'yish shart",
      ],
      warning:
        "To'lovlar kechika boshlaganda kutmang — talabingizni " +
        "yozma qayd eting.",
      lawRefs: [
        { code: "FK", article: "26" },
        { code: "FK", article: "26-1" },
      ],
    },
    {
      heading: "Yuridik shaxs nima va uning belgilari",
      text:
        "YURIDIK SHAXS — o'z mulkida alohida mol-mulkka ega bo'lgan " +
        "va o'z majburiyatlari bo'yicha shu mol-mulk bilan javob " +
        "beradigan, o'z nomidan huquqlarga ega bo'ladigan hamda " +
        "sudda da'vogar va javobgar bo'la oladigan tashkilot.\n\n" +
        "⚠️ TO'RTTA BELGI: (1) tashkiliy yaxlitlik; (2) alohida " +
        "mol-mulk; (3) mustaqil mulkiy javobgarlik; (4) o'z nomidan " +
        "chiqish.\n\n" +
        "AMALDA ENG MUHIMI — UCHINCHISI. Yuridik shaxs ta'sischidan " +
        "ALOHIDA subyekt. Shuning uchun tashkilotning qarzi uchun " +
        "ta'sischi umumiy qoida bo'yicha javob bermaydi, ta'sischi " +
        "qarzi uchun esa tashkilot javob bermaydi.\n\n" +
        "Bu qoida kontragent tanlashda muhim: shartnomani kim bilan " +
        "tuzayotganingizni — tashkilot bilanmi yoki jismoniy shaxs " +
        "bilanmi — aniq bilish kerak, chunki javobgarlik manbai " +
        "butunlay boshqa bo'ladi.",
      example:
        "Tashkilot qarzni to'lamadi — undiruv umumiy qoida bo'yicha " +
        "tashkilot mol-mulkiga qaratiladi, direktorning shaxsiy " +
        "mulkiga emas.",
      keyPoints: [
        "Yuridik shaxs — alohida mol-mulkka ega tashkilot",
        "U o'z majburiyatlari bo'yicha o'zi javob beradi",
        "Ta'sischi va tashkilot — alohida subyektlar",
        "Kim bilan shartnoma tuzayotganingizni aniq biling",
      ],
      warning:
        "Shartnomada tomon noaniq ko'rsatilsa, keyinchalik kimdan " +
        "undirishni aniqlash qiyinlashadi.",
      lawRefs: [
        { code: "FK", article: "39" },
        { code: "FK", article: "48" },
      ],
    },
    {
      heading: "Yuridik shaxslarning turlari: tijorat va notijorat",
      text:
        "Yuridik shaxslar asosiy maqsadiga qarab ikki turga " +
        "bo'linadi.\n\n" +
        "TIJORAT tashkilotlari asosiy maqsad sifatida FOYDA olishni " +
        "ko'zlaydi. Ularga xo'jalik shirkatlari va jamiyatlari, " +
        "ishlab chiqarish kooperativlari, unitar korxonalar " +
        "kiradi.\n\n" +
        "NOTIJORAT tashkilotlari foyda olishni asosiy maqsad qilib " +
        "qo'ymaydi va olingan foydani ishtirokchilar o'rtasida " +
        "taqsimlamaydi: jamoat birlashmalari, fondlar, muassasalar, " +
        "yuridik shaxslar birlashmalari.\n\n" +
        "⚠️ NOTIJORAT TASHKILOT DAROMAD OLA OLADI — ko'p odam shu " +
        "joyda adashadi. Taqiq daromadga emas, uni ishtirokchilar " +
        "o'rtasida TAQSIMLASHGA qo'yilgan; daromad ustav " +
        "maqsadlariga yo'naltiriladi.\n\n" +
        "Tur tanlash amaliy: u soliq rejimini, boshqaruv tuzilmasini " +
        "va ishtirokchilar huquqlarini belgilaydi.",
      example:
        "Jamoat fondi xizmat ko'rsatib daromad oldi va uni ustav " +
        "maqsadlariga yo'naltirdi — bu qonuniy.",
      keyPoints: [
        "Tijorat tashkiloti foyda olishni maqsad qiladi",
        "Notijorat tashkilot foydani taqsimlamaydi",
        "Notijorat tashkilot daromad olishi mumkin",
        "Tur soliq rejimi va boshqaruvni belgilaydi",
      ],
      warning:
        "Notijorat shaklni tanlab, keyin foyda taqsimlash — " +
        "qonunbuzarlik.",
      lawRefs: [{ code: "FK", article: "40" }],
    },
    {
      heading: "Huquq layoqati va ta'sis hujjatlari",
      text:
        "Yuridik shaxsning HUQUQ LAYOQATI uning ta'sis hujjatlarida " +
        "nazarda tutilgan faoliyat maqsadlariga MUVOFIQ bo'ladi.\n\n" +
        "TA'SIS HUJJATLARI — odatda ustav yoki ta'sis shartnomasi. " +
        "Ularda tashkilotning nomi, joylashgan yeri, faoliyat " +
        "predmeti va maqsadlari, boshqaruv tartibi ko'rsatiladi.\n\n" +
        "⚠️ NIMA UCHUN BU SIZGA KERAK: shartnoma tuzayotganda " +
        "kontragentning ta'sis hujjatiga qarash — bu shakliy " +
        "emas, amaliy zarurat. Undan uch narsa aniqlanadi: " +
        "tashkilot bunday faoliyat bilan shug'ullana oladimi; " +
        "shartnomani kim imzolashga vakolatli; qanday bitimlar " +
        "uchun qo'shimcha rozilik kerak.\n\n" +
        "Ayrim faoliyat turlari uchun qo'shimcha LITSENZIYA yoki " +
        "ruxsat talab qilinadi — bu ham tekshiriladi.\n\n" +
        "Huquq layoqatidan tashqariga chiqadigan bitim haqiqiy emas " +
        "deb topilishi mumkin.",
      example:
        "Shartnomani imzolagan shaxsning vakolati ustavda " +
        "cheklangan edi — bitim keyinchalik nizoga aylandi.",
      keyPoints: [
        "Huquq layoqati ta'sis hujjatlaridagi maqsadlarga muvofiq",
        "Ustavda vakolat va boshqaruv tartibi yoziladi",
        "Ayrim faoliyat uchun litsenziya kerak",
        "Layoqatdan tashqari bitim haqiqiy emas deb topilishi mumkin",
      ],
      warning:
        "Yirik bitimlar uchun organning alohida roziligi talab " +
        "qilinishi mumkin — buni oldindan tekshiring.",
      lawRefs: [
        { code: "FK", article: "41" },
        { code: "FK", article: "43" },
      ],
    },
    {
      heading: "Tashkil etish va davlat ro'yxatidan o'tkazish",
      text:
        "Yuridik shaxs ta'sischilar qarori asosida tashkil etiladi va " +
        "DAVLAT RO'YXATIDAN o'tkaziladi.\n\n" +
        "⚠️ RO'YXATDAN O'TKAZISH — HAL QILUVCHI PAYT. Yuridik shaxs " +
        "aynan shu paytdan tashkil etilgan hisoblanadi. Undan oldin " +
        "u huquq subyekti emas: uning nomidan shartnoma tuzib " +
        "bo'lmaydi.\n\n" +
        "Bu amalda ko'p uchraydigan xatoni oldini oladi: \"tashkilot " +
        "ochilyapti\" degan bosqichda uning nomidan pul o'tkazish " +
        "xavfli — hali mavjud bo'lmagan subyekt bilan shartnoma " +
        "tuzilgan bo'ladi.\n\n" +
        "Ro'yxatdan o'tkazishni rad etish qonunda nazarda tutilgan " +
        "asoslarda bo'lishi kerak va u SUDDA ustidan shikoyat " +
        "qilinishi mumkin — ya'ni rad javobi so'nggi nuqta emas.",
      example:
        "Ro'yxatdan o'tmagan tashkilot nomidan bo'nak to'landi — " +
        "keyinchalik pulni kimdan talab qilish masalasi murakkab " +
        "bo'ldi.",
      keyPoints: [
        "Yuridik shaxs davlat ro'yxatidan o'tgan paytdan mavjud",
        "Undan oldin uning nomidan shartnoma tuzib bo'lmaydi",
        "Rad etish faqat qonuniy asosda bo'ladi",
        "Rad javobi ustidan sudga shikoyat qilish mumkin",
      ],
      warning:
        "Kontragentning ro'yxatdan o'tganini tekshirmasdan pul " +
        "o'tkazmang.",
      lawRefs: [
        { code: "FK", article: "42" },
        { code: "FK", article: "44" },
      ],
    },
    {
      heading: "Organlar, nom, joylashgan yer, filial va vakolatxona",
      text:
        "Yuridik shaxs o'z huquqlarini ORGANLARI orqali amalga " +
        "oshiradi. Organ tarkibi va vakolatlari ta'sis hujjatlarida " +
        "belgilanadi.\n\n" +
        "NOM va JOYLASHGAN YER — majburiy rekvizitlar. Nomda " +
        "tashkiliy-huquqiy shakl ko'rsatiladi; joylashgan yer odatda " +
        "davlat ro'yxatidan o'tkazish joyi bilan aniqlanadi.\n\n" +
        "⚠️ FILIAL VA VAKOLATXONA YURIDIK SHAXS EMAS. Bu juda muhim " +
        "amaliy nuqta. Ular tashkilotning alohida bo'linmalari " +
        "bo'lib, o'z nomidan huquq subyekti bo'la olmaydi. Filial " +
        "rahbari faqat ISHONCHNOMA asosida ish ko'radi.\n\n" +
        "Ya'ni filial bilan shartnoma tuzayotganda aslida " +
        "tashkilotning O'ZI bilan tuzayotgan bo'lasiz — shuning " +
        "uchun shartnomada bosh tashkilot rekvizitlari va rahbar " +
        "ishonchnomasi ko'rsatilishi kerak.\n\n" +
        "Farqi: vakolatxona manfaatlarni ifodalaydi va himoya " +
        "qiladi, filial esa tashkilot funksiyalarini (yoki bir " +
        "qismini) bajaradi.",
      example:
        "Filial bilan shartnoma tuzildi, lekin rahbarning " +
        "ishonchnomasi tekshirilmadi — vakolat masalasi nizoga " +
        "aylandi.",
      keyPoints: [
        "Yuridik shaxs organlari orqali ish ko'radi",
        "Filial va vakolatxona yuridik shaxs emas",
        "Filial rahbari ishonchnoma asosida ish ko'radi",
        "Shartnomada bosh tashkilot rekvizitlari ko'rsatiladi",
      ],
      warning:
        "\"Filialning o'z hisobi bor\" degan dalil uni mustaqil " +
        "subyektga aylantirmaydi.",
      lawRefs: [
        { code: "FK", article: "45" },
        { code: "FK", article: "46" },
        { code: "FK", article: "47" },
      ],
    },
    {
      heading: "Qayta tashkil etish va huquqiy vorislik",
      text:
        "Yuridik shaxs QAYTA TASHKIL ETILISHI mumkin: qo'shilish, " +
        "birlashish, bo'linish, ajralib chiqish yoki " +
        "o'zgartirish yo'li bilan.\n\n" +
        "⚠️ ENG MUHIM QOIDA — HUQUQIY VORISLIK. Qayta tashkil " +
        "etishda huquq va burchlar yo'qolmaydi, ular vorisga " +
        "o'tadi. Ya'ni \"tashkilot qayta tashkil etildi, endi qarz " +
        "yo'q\" degan gap noto'g'ri.\n\n" +
        "Huquq va burchlar TOPSHIRISH HUJJATI yoki TAQSIMLASH " +
        "BALANSI asosida o'tadi — kreditor uchun aynan shu hujjat " +
        "kim javobgar ekanini ko'rsatadi.\n\n" +
        "KREDITOR KAFOLATLARI: qayta tashkil etish to'g'risida " +
        "kreditorlar xabardor qilinishi kerak va ular majburiyatni " +
        "muddatidan ilgari bajarishni yoki bekor qilishni hamda " +
        "zararni qoplashni talab qilishga haqli.\n\n" +
        "Taqsimlash balansi qaysi voris javobgar ekanini aniqlash " +
        "imkonini bermasa, yangi yuridik shaxslar odatda SOLIDAR " +
        "javob beradi — ya'ni kreditor ularning istalganidan " +
        "to'liq talab qilishi mumkin.",
      example:
        "Qarzdor tashkilot bo'lindi va qarz \"yo'qolgandek\" " +
        "ko'rindi — kreditor topshirish hujjatini so'rab, vorisdan " +
        "talab qilishi mumkin.",
      keyPoints: [
        "Qayta tashkil etishda huquq va burchlar vorisga o'tadi",
        "Topshirish hujjati yoki taqsimlash balansi asos bo'ladi",
        "Kreditor muddatidan ilgari bajarishni talab qilishi mumkin",
        "Voris aniqlanmasa solidar javobgarlik yuzaga keladi",
      ],
      warning:
        "Kontragent qayta tashkil etilayotganini bilsangiz, " +
        "talabingizni darhol yozma qo'ying.",
      lawRefs: [
        { code: "FK", article: "49" },
        { code: "FK", article: "50" },
        { code: "FK", article: "51" },
        { code: "FK", article: "52" },
      ],
    },
    {
      heading: "Tugatish va kreditor talablarining navbati",
      text:
        "TUGATISH — qayta tashkil etishdan tubdan farq qiladi: bu " +
        "yerda huquqiy vorislik YO'Q, tashkilot butunlay tugaydi.\n\n" +
        "Tugatish to'g'risida qaror qabul qilgan shaxs bu haqda " +
        "xabar berishi, tugatish komissiyasini tayinlashi va " +
        "kreditorlar talablarini taqdim etish TARTIBI va MUDDATINI " +
        "e'lon qilishi shart.\n\n" +
        "⚠️ KREDITOR UCHUN ENG MUHIM NUQTA: talabni e'lon qilingan " +
        "muddatda taqdim etish. Muddat o'tkazib yuborilsa, talab " +
        "boshqa kreditorlar qondirilganidan keyin qolgan mol-mulk " +
        "hisobidan qondiriladi — amalda esa ko'pincha hech narsa " +
        "qolmaydi.\n\n" +
        "Talablar QONUNIY NAVBAT bo'yicha qondiriladi. Har bir " +
        "navbat to'liq qondirilgandan keyingina keyingisiga " +
        "o'tiladi; mol-mulk yetmasa, bir navbat ichida talablar " +
        "mutanosib ravishda qondiriladi.\n\n" +
        "Tugatish tashkilot davlat ro'yxatidan chiqarilgan paytdan " +
        "tugallangan hisoblanadi.",
      example:
        "Tugatish e'loni chiqdi, kreditor esa \"keyin murojaat " +
        "qilaman\" deb kutdi — muddat o'tib, talab navbatdan " +
        "tashqarida qoldi.",
      keyPoints: [
        "Tugatishda huquqiy vorislik yo'q",
        "Talablar e'lon qilingan muddatda taqdim etiladi",
        "Kechikkan talab oxirgi navbatda qondiriladi",
        "Tugatish ro'yxatdan chiqarilganda tugallanadi",
      ],
      warning:
        "Tugatish e'lonini kuzatib bormaslik — qarzni butunlay " +
        "yo'qotishning eng oson yo'li.",
      lawRefs: [
        { code: "FK", article: "53" },
        { code: "FK", article: "54" },
        { code: "FK", article: "55" },
        { code: "FK", article: "56" },
        { code: "FK", article: "57" },
      ],
    },
    {
      heading: "Xo'jalik shirkatlari: to'liq va kommandit",
      text:
        "XO'JALIK SHIRKATI — ishtirokchilarning SHAXSIY ishtirokiga " +
        "asoslangan birlashma. Bu jamiyatdan asosiy farqi.\n\n" +
        "TO'LIQ SHIRKATDA ishtirokchilar shirkat majburiyatlari " +
        "bo'yicha o'zlariga tegishli BARCHA mol-mulki bilan " +
        "SOLIDAR javob beradi.\n\n" +
        "⚠️ BU ENG YUQORI XAVFLI SHAKL. Kreditor har bir " +
        "ishtirokchidan qarzning TO'LIQ summasini talab qilishi " +
        "mumkin, keyin ular o'zaro hisob-kitob qiladi.\n\n" +
        "KOMMANDIT SHIRKATDA ikki toifa ishtirokchi bor: to'liq " +
        "sheriklar (yuqoridagi kabi to'liq javob beradi) va " +
        "hissadorlar — ular faqat qo'shgan hissasi doirasida " +
        "xavf ko'taradi, lekin boshqaruvda qatnashmaydi.\n\n" +
        "AMALIY MA'NOSI: bunday tashkilot bilan ishlaganda " +
        "kreditor uchun himoya kuchli, ishtirokchi uchun esa xavf " +
        "yuqori. Shirkat ishtirokchisi bo'lishdan oldin bu " +
        "javobgarlikni aniq tushunish kerak.",
      example:
        "To'liq shirkat qarzni to'lay olmadi — kreditor bitta " +
        "ishtirokchidan butun summani talab qilishi mumkin.",
      keyPoints: [
        "Shirkat shaxsiy ishtirokka asoslanadi",
        "To'liq shirkatda javobgarlik solidar va cheksiz",
        "Kommandit shirkatda ikki toifa ishtirokchi bor",
        "Hissador faqat hissasi doirasida xavf ko'taradi",
      ],
      warning:
        "To'liq sherik bo'lish — shaxsiy mol-mulkni xavf ostiga " +
        "qo'yish demakdir.",
      lawRefs: [
        { code: "FK", article: "58" },
        { code: "FK", article: "60" },
        { code: "FK", article: "61" },
      ],
    },
    {
      heading: "Mas'uliyati cheklangan va aksiyadorlik jamiyati",
      text:
        "XO'JALIK JAMIYATI — kapital birlashuviga asoslangan shakl. " +
        "Ishtirokchilarning shaxsiy mehnati talab qilinmaydi.\n\n" +
        "MAS'ULIYATI CHEKLANGAN JAMIYAT (MCHJ) — eng keng " +
        "tarqalgan shakl. Ustav fondi ulushlarga bo'linadi va " +
        "ishtirokchilar jamiyat majburiyatlari bo'yicha JAVOB " +
        "BERMAYDI, faqat qo'shgan hissasi qiymati doirasida xavf " +
        "ko'taradi.\n\n" +
        "AKSIYADORLIK JAMIYATI — ustav fondi AKSIYALARGA " +
        "bo'linadi. Aksiyadorlar ham jamiyat qarzi bo'yicha javob " +
        "bermaydi. Bu shakl ko'p sonli ishtirokchi va kapital " +
        "jalb qilish uchun mo'ljallangan.\n\n" +
        "⚠️ KREDITOR UCHUN AMALIY XULOSA: MCHJ bilan shartnoma " +
        "tuzayotganda ishtirokchilarning shaxsiy mol-mulkiga " +
        "tayanib bo'lmaydi. Shuning uchun yirik bitimlarda " +
        "qo'shimcha ta'minot (garov, kafillik) so'rash mantiqiy.\n\n" +
        "SHU'BA va QARAM jamiyatlar tushunchasi ham bor: bir " +
        "jamiyat ikkinchisining qarorlariga hal qiluvchi ta'sir " +
        "ko'rsata olsa, ayrim holatlarda asosiy jamiyat " +
        "javobgarligi yuzaga kelishi mumkin.",
      example:
        "MCHJ qarzni to'lamadi va mol-mulki yetmadi — kreditor " +
        "ishtirokchining shaxsiy uyiga umumiy qoida bo'yicha " +
        "da'vo qila olmaydi.",
      keyPoints: [
        "Jamiyat kapital birlashuviga asoslanadi",
        "MCHJ ishtirokchilari jamiyat qarzi bo'yicha javob bermaydi",
        "Aksiyadorlik jamiyatida kapital aksiyalarga bo'linadi",
        "Yirik bitimlarda qo'shimcha ta'minot so'rang",
      ],
      warning:
        "Faqat ustav fondi kattaligiga qarab ishonch bildirish " +
        "xato — real mol-mulkni tekshiring.",
      lawRefs: [
        { code: "FK", article: "59" },
        { code: "FK", article: "62" },
        { code: "FK", article: "64" },
        { code: "FK", article: "67" },
        { code: "FK", article: "68" },
      ],
    },
    {
      heading: "Kooperativlar, jamoat birlashmalari, fond va muassasa",
      text:
        "ISHLAB CHIQARISH KOOPERATIVI — a'zolarning shaxsiy mehnat " +
        "ishtirokiga va mulkiy badallariga asoslangan ixtiyoriy " +
        "birlashma. MATLUBOT KOOPERATIVI esa a'zolarning moddiy va " +
        "boshqa ehtiyojlarini qondirish uchun tuziladi.\n\n" +
        "JAMOAT BIRLASHMASI — umumiy manfaatlar asosida ixtiyoriy " +
        "birlashgan fuqarolar tashkiloti. Ishtirokchilar unga " +
        "topshirgan mol-mulkka bo'lgan huquqni saqlab qolmaydi.\n\n" +
        "JAMOAT FONDI — a'zolikka ega bo'lmagan tashkilot; mol-mulk " +
        "ijtimoiy foydali maqsadlarga yo'naltiriladi. Fond o'z " +
        "mol-mulkidan foydalanish haqida OMMAVIY hisobot berishi " +
        "kerak — bu unga ishonchning asosi.\n\n" +
        "MUASSASA — mulkdor tomonidan boshqaruv, ijtimoiy-madaniy " +
        "yoki boshqa notijorat funksiyalarni amalga oshirish uchun " +
        "tashkil etiladi va mulkdor tomonidan to'liq yoki qisman " +
        "moliyalashtiriladi.\n\n" +
        "⚠️ MUASSASA BILAN ISHLAGANDA: uning mol-mulki cheklangan " +
        "huquqda bo'lishi mumkin va ayrim holatlarda mulkdorning " +
        "SUBSIDIAR javobgarligi yuzaga keladi — ya'ni muassasa " +
        "mablag'i yetmasa, mulkdorga murojaat qilish mumkin.",
      example:
        "Muassasaning mablag'i yetmadi — kreditor qonunda nazarda " +
        "tutilgan holatda uni tashkil etgan mulkdorga murojaat " +
        "qilishi mumkin.",
      keyPoints: [
        "Kooperativ shaxsiy mehnat ishtirokiga asoslanadi",
        "Jamoat birlashmasi umumiy manfaat asosida tuziladi",
        "Fond a'zolikka ega emas va ommaviy hisobot beradi",
        "Muassasa uchun subsidiar javobgarlik yuzaga kelishi mumkin",
      ],
      warning:
        "Notijorat tashkilot bilan shartnomada uning mol-mulkiga " +
        "bo'lgan huquq turini aniqlashtiring.",
      lawRefs: [
        { code: "FK", article: "69" },
        { code: "FK", article: "73" },
        { code: "FK", article: "74" },
        { code: "FK", article: "75" },
        { code: "FK", article: "76" },
        { code: "FK", article: "77" },
      ],
    },
    {
      heading: "Davlat fuqarolik munosabatlarida ishtirokchi sifatida",
      text:
        "Davlat ham fuqarolik-huquqiy munosabatlarda ishtirok etadi " +
        "— va bu yerda u BOSHQA ishtirokchilar bilan TENG " +
        "asoslarda qatnashadi.\n\n" +
        "⚠️ BU JUDA MUHIM QOIDA. Davlat organi sizga shartnoma " +
        "bo'yicha buyruq bera olmaydi. Shartnoma munosabatida u " +
        "oddiy tomon: majburiyatni bajarmasa javobgar bo'ladi, " +
        "unga nisbatan da'vo qo'yish mumkin.\n\n" +
        "Ya'ni davlat kontrakti bo'yicha to'lov qilinmasa, bu " +
        "\"davlatga qarshi chiqish\" emas — bu oddiy fuqarolik " +
        "nizosi.\n\n" +
        "JAVOBGARLIK FARQLANADI: davlat o'z majburiyatlari bo'yicha " +
        "javob beradi, lekin u tashkil etgan yuridik shaxsning " +
        "majburiyatlari bo'yicha umumiy qoida bo'yicha javob " +
        "bermaydi; xuddi shunday, yuridik shaxs ham davlat " +
        "majburiyatlari bo'yicha javob bermaydi.\n\n" +
        "Fuqarolarning o'zini o'zi boshqarish organlari ham " +
        "fuqarolik munosabatlarida ishtirok etadi.",
      example:
        "Davlat buyurtmasi bo'yicha ish bajarildi, lekin to'lov " +
        "qilinmadi — bu oddiy fuqarolik da'vosi predmeti.",
      keyPoints: [
        "Davlat fuqarolik munosabatlarida teng ishtirokchi",
        "Shartnomada u oddiy tomon bo'lib javob beradi",
        "Davlat va u tashkil etgan yuridik shaxs javobgarligi farqlanadi",
        "O'zini o'zi boshqarish organlari ham ishtirok etadi",
      ],
      warning:
        "Davlat tashkiloti bilan shartnomada moliyalashtirish " +
        "manbai va to'lov muddatini aniq yozing.",
      lawRefs: [
        { code: "FK", article: "78" },
        { code: "FK", article: "79" },
        { code: "FK", article: "80" },
      ],
    },
  ],
};

module.exports = { LESSON };
