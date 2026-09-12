"use strict";
/** FUQAROLIK MODULI — 4-DARS: MULK HUQUQI. FK 164–215. */

const LESSON = {
  key: "mulk-huquqi",
  category: "civil",
  level: "mid",
  order: 2040,
  title: "Mulk huquqi va uning chegaralari",
  desc:
    "Mulk huquqi nimadan iborat, u qanday vujudga keladi va bekor " +
    "bo'ladi, servitut, topilma va xazina, mulkni majburiy olib " +
    "qo'yish hamda o'zboshimchalik bilan qurish.",
  objectives: [
    "Mulk huquqining uchta vakolatini bilasiz",
    "Mulk huquqi qachon vujudga kelishini aniq belgilay olasiz",
    "Servitut nima ekanini va u qanday belgilanishini bilasiz",
    "Topilma, egasiz ashyo va xazina qoidalarini bilasiz",
    "Mulkni majburiy olib qo'yish asoslarini ajrata olasiz",
    "O'zboshimchalik bilan qurishning oqibatlarini bilasiz",
  ],
  practicalSteps: [
    "Ko'chmas mulk sotib olganda huquqni darhol davlat ro'yxatidan o'tkazing",
    "Shartnomada mulk huquqi qachon o'tishini aniq yozing",
    "Qo'shni uchastkadan foydalanish zarur bo'lsa servitutni yozma rasmiylashtiring",
    "Qurilishni boshlashdan oldin ruxsat hujjatlarini to'liq oling",
    "Mulkingiz majburiy olinsa — qiymat baholashiga rozilik bermasdan oldin mustaqil baho oling",
  ],
  sections: [
    {
      heading: "Mulk huquqi nima: uchta vakolat",
      text:
        "MULK HUQUQI — shaxsning o'ziga qarashli mol-mulkka EGALIK " +
        "QILISH, undan FOYDALANISH va uni TASARRUF ETISH " +
        "huquqidir.\n\n" +
        "Uchta vakolatning har biri alohida ma'noga ega:\n\n" +
        "EGALIK QILISH — ashyoni haqiqatda o'z tasarrufida saqlash;\n\n" +
        "FOYDALANISH — ashyodan foydali xususiyatlarini olish, hosil " +
        "va daromad olish;\n\n" +
        "TASARRUF ETISH — ashyoning taqdirini hal qilish: sotish, " +
        "hadya qilish, garovga qo'yish, yo'q qilish.\n\n" +
        "⚠️ ULAR AJRALISHI MUMKIN. Ijaraga berganda egalik va " +
        "foydalanish ijarachiga o'tadi, tasarruf etish esa " +
        "mulkdorda qoladi. Aynan shuning uchun ijarachi ashyoni " +
        "sota olmaydi.\n\n" +
        "Bu tahlil amalda kerak: nizoda kimda qaysi vakolat borligi " +
        "aniqlansa, javob ko'pincha o'z-o'zidan chiqadi.",
      example:
        "Ijarachi ijaraga olgan uskunani sotmoqchi bo'ldi — unda " +
        "tasarruf etish vakolati yo'q, bunday bitim haqiqiy emas.",
      keyPoints: [
        "Mulk huquqi uchta vakolatdan iborat",
        "Egalik, foydalanish va tasarruf etish",
        "Vakolatlar bir-biridan ajralishi mumkin",
        "Tasarruf etish faqat mulkdorda qoladi",
      ],
      warning:
        "Sotuvchining tasarruf etish huquqi borligini tekshirmasdan " +
        "xarid qilmang.",
      lawRefs: [{ code: "FK", article: "164" }],
    },
    {
      heading: "Mulk daxlsizligi va mulkdor bo'lmagan shaxs huquqlari",
      text:
        "Mulk DAXLSIZ. Mulkdorni mol-mulkidan faqat qonunda nazarda " +
        "tutilgan hollarda va tartibda mahrum qilish mumkin.\n\n" +
        "⚠️ AMALDA BU SHUNI BILDIRADI: hech bir organ, tashkilot " +
        "yoki shaxs \"kerak bo'lib qoldi\" degan asosda mulkingizni " +
        "ola olmaydi. Har qanday olib qo'yish uchun qonuniy asos, " +
        "tartib va odatda tovon kerak.\n\n" +
        "MULKDOR BO'LMAGAN SHAXSLARNING ASHYOVIY HUQUQLARI ham " +
        "mavjud: ular mulkdor emas, lekin ashyoga nisbatan " +
        "bevosita huquqqa ega bo'lishi mumkin (masalan operativ " +
        "boshqarish huquqi, servitut).\n\n" +
        "MUHIM KAFOLAT: bunday shaxslarning huquqlari MULKDORGA " +
        "qarshi ham himoyalanadi — ya'ni mulkdor ularning " +
        "huquqlarini o'zboshimchalik bilan buzа olmaydi.\n\n" +
        "Va aksincha: mulk huquqi boshqa shaxsga o'tganda bu " +
        "ashyoviy huquqlar SAQLANIB qoladi.",
      example:
        "Bino sotildi, lekin unga bog'liq servitut avvalgidek amal " +
        "qilishda davom etadi — yangi mulkdor uni bekor qila " +
        "olmaydi.",
      keyPoints: [
        "Mulk daxlsiz, mahrum qilish faqat qonun asosida",
        "Mulkdor bo'lmagan shaxslarning ashyoviy huquqlari bor",
        "Bu huquqlar mulkdorga qarshi ham himoyalanadi",
        "Mulk o'tganda ashyoviy huquqlar saqlanadi",
      ],
      warning:
        "Ko'chmas mulk sotib olishdan oldin unga boshqa shaxs " +
        "huquqlari yuklanmaganini tekshiring.",
      lawRefs: [
        { code: "FK", article: "165" },
        { code: "FK", article: "166" },
      ],
    },
    {
      heading: "Mulk shakllari, subyektlari va obyektlari",
      text:
        "Mulk XUSUSIY va OMMAVIY shakllarda bo'ladi. Ular teng " +
        "himoyalanadi.\n\n" +
        "SUBYEKTLAR: fuqarolar, yuridik shaxslar, davlat va " +
        "fuqarolarning o'zini o'zi boshqarish organlari.\n\n" +
        "OBYEKTLAR: har qanday mol-mulk mulk huquqi obyekti bo'la " +
        "oladi — qonunda nazarda tutilgan istisnolardan " +
        "tashqari.\n\n" +
        "⚠️ MIQDOR VA QIYMAT CHEKLANMAYDI. Fuqaro va yuridik " +
        "shaxsga tegishli mol-mulkning miqdori va qiymati umumiy " +
        "qoida bo'yicha cheklanmaydi. Ya'ni \"bir kishida ikkitadan " +
        "ortiq uy bo'lmasligi kerak\" degan qoida yo'q.\n\n" +
        "YER VA TABIIY RESURSLAR alohida tartibga solinadi — " +
        "ularga bo'lgan huquqlar maxsus qonunchilikda belgilanadi. " +
        "Uy-joyga bo'lgan huquqni amalga oshirishning ham " +
        "xususiyatlari bor: uy-joy o'zining maqsadiga muvofiq, " +
        "ya'ni yashash uchun ishlatilishi kerak.",
      example:
        "Turar joy binosidan uning maqsadiga zid tarzda " +
        "foydalanildi — bu qo'shnilar huquqini buzish sifatida " +
        "baholanishi mumkin.",
      keyPoints: [
        "Mulk xususiy va ommaviy shakllarda bo'ladi",
        "Shakllar teng himoyalanadi",
        "Mol-mulk miqdori va qiymati odatda cheklanmaydi",
        "Yer va uy-joy alohida qoidalarga bo'ysunadi",
      ],
      warning:
        "Turar joyni boshqa maqsadda ishlatish uchun uni maqomini " +
        "o'zgartirish kerak bo'ladi.",
      lawRefs: [
        { code: "FK", article: "167" },
        { code: "FK", article: "168" },
        { code: "FK", article: "169" },
        { code: "FK", article: "170" },
        { code: "FK", article: "171" },
      ],
    },
    {
      heading: "Mulk huquqini amalga oshirish shartlari",
      text:
        "Mulkdor o'z mol-mulkiga nisbatan istagan harakatni qilishi " +
        "mumkin — LEKIN qonun talablarini buzmasdan va boshqa " +
        "shaxslarning huquqlari hamda qonun bilan qo'riqlanadigan " +
        "manfaatlariga putur yetkazmasdan.\n\n" +
        "⚠️ BU MULK HUQUQINING ASOSIY CHEGARASI. \"Bu mening " +
        "mulkim, nima qilsam o'zim bilaman\" degan yondashuv " +
        "huquqiy jihatdan noto'g'ri.\n\n" +
        "Amaliy misollar: o'z uyingizda qo'shnilarga xalaqit " +
        "beradigan faoliyat yuritish; o'z uchastkangizda qo'shni " +
        "uchastkaga zarar yetkazadigan qurilish; atrof-muhitga " +
        "zarar yetkazish.\n\n" +
        "MOL-MULKNI SAQLASH VAZIFASI: mulkdor mol-mulkni saqlash " +
        "yukini ko'taradi — ta'mirlash, xarajatlar, soliqlar. " +
        "Shartnoma yoki qonun boshqacha belgilamasa, bu yuk " +
        "boshqa shaxsga o'tmaydi.\n\n" +
        "TASODIFAN NOBUD BO'LISH XAVFI ham odatda MULKDORDA " +
        "bo'ladi. Shuning uchun shartnomada bu xavf qachon " +
        "o'tishini aniq yozish muhim.",
      example:
        "Tovar yo'lda tasodifan nobud bo'ldi — xavf kimda " +
        "bo'lganini shartnoma bandi hal qiladi.",
      keyPoints: [
        "Mulk huquqi boshqalarning huquqlari bilan chegaralangan",
        "Mol-mulkni saqlash yuki mulkdorda",
        "Tasodifan nobud bo'lish xavfi odatda mulkdorda",
        "Shartnomada xavf o'tish paytini aniq yozing",
      ],
      warning:
        "\"Bu mening mulkim\" degan dalil qo'shni huquqini buzishni " +
        "oqlamaydi.",
      lawRefs: [
        { code: "FK", article: "172" },
        { code: "FK", article: "174" },
        { code: "FK", article: "175" },
      ],
    },
    {
      heading: "Servitut: o'zganing yeridan cheklangan foydalanish",
      text:
        "SERVITUT — o'zganing yer uchastkasidan CHEKLANGAN tarzda " +
        "foydalanish huquqi.\n\n" +
        "U qachon kerak bo'ladi: uchastkangizga o'tish yoki " +
        "o'tkazish yo'li faqat qo'shni uchastka orqali bo'lsa; " +
        "suv quvuri, elektr yoki gaz tarmog'ini o'tkazish zarur " +
        "bo'lsa.\n\n" +
        "⚠️ SERVITUT — SHAXSGA EMAS, YERGA BOG'LANGAN HUQUQ. Bu " +
        "eng muhim jihat: yer uchastkasiga bo'lgan huquq boshqa " +
        "shaxsga o'tkazilganda SERVITUT SAQLANADI. Ya'ni qo'shni " +
        "uchastkani sotsa ham, sizning o'tish huquqingiz " +
        "yo'qolmaydi.\n\n" +
        "SHARTLARI kelishuv bilan belgilanadi; kelishuvga " +
        "erishilmasa — SUD tartibida. Servitut uchun odatda HAQ " +
        "to'lanadi.\n\n" +
        "MUHIM CHEKLOV: servitut yer uchastkasidan foydalanishni " +
        "imkonsiz qilib qo'ymasligi kerak — u faqat ZARUR " +
        "darajada belgilanadi.\n\n" +
        "Servitut o'zgartirilishi va bekor qilinishi mumkin: " +
        "ehtiyoj yo'qolsa yoki sharoit o'zgarsa.",
      example:
        "Uchastkaga yagona yo'l qo'shni yer orqali o'tadi — " +
        "kelishuv bo'lmasa servitut sud orqali belgilanadi.",
      keyPoints: [
        "Servitut — o'zganing yeridan cheklangan foydalanish",
        "U yerga bog'lanadi va mulkdor o'zgarsa saqlanadi",
        "Shartlar kelishuv yoki sud bilan belgilanadi",
        "Odatda haq to'lanadi va faqat zarur darajada belgilanadi",
      ],
      warning:
        "Servitutni yozma rasmiylashtirmaslik keyinchalik uni " +
        "isbotlashni deyarli imkonsiz qiladi.",
      lawRefs: [
        { code: "FK", article: "173" },
        { code: "FK", article: "173-1" },
        { code: "FK", article: "173-2" },
        { code: "FK", article: "173-3" },
        { code: "FK", article: "173-6" },
      ],
    },
    {
      heading: "Servitutning maxsus holatlari",
      text:
        "Servitut bir necha maxsus vaziyatda alohida tartibga " +
        "solingan.\n\n" +
        "MUHANDISLIK-KOMMUNIKATSIYA TARMOQLARI: servitut " +
        "belgilangan uchastkada quvur, kabel va shu kabi " +
        "obyektlarni saqlash qoidalari alohida belgilanadi. Bu " +
        "amalda tez-tez uchraydi — deyarli har bir uchastkadan " +
        "qandaydir tarmoq o'tadi.\n\n" +
        "⚠️ AMALIY OGOHLANTIRISH: uchastka sotib olayotganda undan " +
        "o'tgan tarmoqlarni tekshiring. Ular ustiga qurilish " +
        "qilib bo'lmasligi mumkin va bu keyinchalik jiddiy " +
        "muammoga aylanadi.\n\n" +
        "UCHASTKANI BO'LISH: servitut belgilangan yer uchastkasi " +
        "bo'linganda servitut taqdiri alohida qoida bilan hal " +
        "qilinadi — u odatda tegishli qismlarda saqlanadi.\n\n" +
        "BINO VA INSHOOTLAR: servitut faqat yerga emas, binolar, " +
        "inshootlar va boshqa ko'chmas mulkka nisbatan ham " +
        "belgilanishi mumkin (masalan devor yoki tomdan " +
        "foydalanish).",
      example:
        "Sotib olingan uchastka ostidan quvur o'tgani ma'lum " +
        "bo'ldi — rejalashtirilgan qurilish imkonsiz bo'lib " +
        "qoldi.",
      keyPoints: [
        "Kommunikatsiya tarmoqlari uchun servitut qoidalari bor",
        "Uchastka bo'linganda servitut taqdiri hal qilinadi",
        "Servitut binolarga nisbatan ham belgilanadi",
        "Xarid oldidan tarmoqlarni tekshirish shart",
      ],
      warning:
        "Tarmoq ustida qurilish qilish keyinchalik buzish talabiga " +
        "olib kelishi mumkin.",
      lawRefs: [
        { code: "FK", article: "173-4" },
        { code: "FK", article: "173-5" },
        { code: "FK", article: "173-7" },
      ],
    },
    {
      heading: "Operativ boshqarish huquqi",
      text:
        "OPERATIV BOSHQARISH HUQUQI — mulkdor bo'lmagan tashkilotning " +
        "unga biriktirilgan mol-mulkka bo'lgan ashyoviy huquqi.\n\n" +
        "Bunday tashkilot mol-mulkdan mulkdor belgilagan " +
        "MAQSADLARGA muvofiq va o'z faoliyati doirasida " +
        "foydalanadi.\n\n" +
        "⚠️ ASOSIY CHEKLOV — TASARRUF ETISHDA. Muassasa unga " +
        "biriktirilgan mol-mulkni mustaqil ravishda " +
        "begonalashtirishga yoki boshqa yo'l bilan tasarruf " +
        "etishga odatda haqli emas. Buning uchun mulkdor roziligi " +
        "kerak.\n\n" +
        "AMALIY MA'NOSI: bunday tashkilot bilan mol-mulkka oid " +
        "bitim tuzayotganda uning tasarruf etish vakolati borligini " +
        "va mulkdor roziligini tekshirish shart. Aks holda bitim " +
        "haqiqiy emas deb topilishi mumkin.\n\n" +
        "Operativ boshqarish huquqi mol-mulk biriktirilgan paytdan " +
        "vujudga keladi va mulkdor tomonidan qonuniy asosda olib " +
        "qo'yilganda bekor bo'ladi.",
      example:
        "Muassasa unga biriktirilgan binoni mulkdor roziligisiz " +
        "ijaraga berdi — shartnoma nizoli bo'lib qoladi.",
      keyPoints: [
        "Operativ boshqarish — mulkdor bo'lmagan tashkilot huquqi",
        "Mol-mulkdan belgilangan maqsadda foydalaniladi",
        "Tasarruf etish uchun mulkdor roziligi kerak",
        "Huquq biriktirish paytidan vujudga keladi",
      ],
      warning:
        "Davlat muassasasi bilan mulk bitimida rozilik hujjatini " +
        "albatta so'rang.",
      lawRefs: [
        { code: "FK", article: "178" },
        { code: "FK", article: "180" },
        { code: "FK", article: "181" },
      ],
    },
    {
      heading: "Mulk huquqi qanday vujudga keladi",
      text:
        "Mulk huquqining vujudga kelish asoslari ikki guruhga " +
        "bo'linadi.\n\n" +
        "BIRLAMCHI — huquq oldingi mulkdordan bog'liq bo'lmagan " +
        "holda yuzaga keladi: yangi ashyoni yaratish, mahsulot va " +
        "daromad olish, egasiz ashyoni qonuniy olish, egalik " +
        "muddati.\n\n" +
        "HOSILAVIY — huquq oldingi mulkdordan o'tadi: bitim " +
        "bo'yicha olish, meros, yuridik shaxsni qayta tashkil " +
        "etishdagi vorislik.\n\n" +
        "⚠️ FARQ AMALIY: hosilaviy asosda yangi mulkdor " +
        "OLDINGISIDAN KO'RA KO'PROQ huquq ololmaydi. Agar sotuvchida " +
        "mulk huquqi bo'lmasa yoki u yuklama bilan bo'lsa, xaridor " +
        "ham shu holatda oladi.\n\n" +
        "Aynan shuning uchun xaridning eng muhim bosqichi — " +
        "sotuvchining huquqini tekshirish. \"Kim sotayotganini\" " +
        "emas, \"unda huquq bormi\" degan savol muhim.\n\n" +
        "EGALIK MUDDATI: mol-mulkka o'z mulki sifatida vijdonan, " +
        "oshkora va uzluksiz egalik qilgan shaxs qonunda " +
        "belgilangan muddat o'tishi bilan unga mulk huquqini olishi " +
        "mumkin.",
      example:
        "Sotuvchi haqiqiy mulkdor emas edi — xaridor mulk huquqini " +
        "olmadi, chunki mavjud bo'lmagan huquq o'tmaydi.",
      keyPoints: [
        "Asoslar birlamchi va hosilaviy turlarga bo'linadi",
        "Hosilaviy asosda oldingidan ko'proq huquq olinmaydi",
        "Sotuvchining huquqini tekshirish — asosiy qadam",
        "Uzoq muddatli vijdonli egalik huquq berishi mumkin",
      ],
      warning:
        "Arzon narx ko'pincha huquqda muammo borligining " +
        "belgisi bo'ladi.",
      lawRefs: [
        { code: "FK", article: "182" },
        { code: "FK", article: "183" },
        { code: "FK", article: "184" },
        { code: "FK", article: "187" },
      ],
    },
    {
      heading: "Mulk huquqi qaysi paytda o'tadi",
      text:
        "Shartnoma bo'yicha mol-mulk oluvchida mulk huquqi ASHYO " +
        "TOPSHIRILGAN paytdan vujudga keladi — agar qonun yoki " +
        "shartnomada boshqacha nazarda tutilmagan bo'lsa.\n\n" +
        "TOPSHIRISH deb ashyoni oluvchiga berish, shuningdek " +
        "tashuvchiga yoki pochtaga topshirish e'tirof etiladi. " +
        "Ashyo allaqachon oluvchida bo'lsa, u shartnoma tuzilgan " +
        "paytdan topshirilgan hisoblanadi.\n\n" +
        "⚠️ KO'CHMAS MULKDA BOSHQACHA: u yerda huquq DAVLAT " +
        "RO'YXATIDAN O'TKAZILGAN paytdan vujudga keladi. Kalitni " +
        "olish, ko'chib kirish yoki pulni to'lash o'z-o'zidan " +
        "mulkdor qilmaydi.\n\n" +
        "BU FARQ ENG KO'P ZARAR KELTIRADIGAN NUQTA. Ro'yxatdan " +
        "o'tkazilmagan bo'lsa, sotuvchi rasman hali mulkdor bo'lib " +
        "qoladi — va u mulkni ikkinchi marta sotishi yoki uning " +
        "mulkiga undiruv qaratilishi mumkin.\n\n" +
        "AMALIY QOIDA: pul to'lash bilan ro'yxatdan o'tkazish " +
        "o'rtasidagi oraliqni imkon qadar qisqartiring.",
      example:
        "Uy uchun to'liq pul to'landi, ro'yxatdan o'tkazish esa " +
        "kechiktirildi — shu oraliqda sotuvchi qarzi uchun uyga " +
        "undiruv qaratilishi mumkin.",
      keyPoints: [
        "Ko'char mulkda huquq topshirish bilan o'tadi",
        "Ko'chmas mulkda ro'yxatdan o'tkazish bilan o'tadi",
        "Kalit va to'lov o'z-o'zidan mulkdor qilmaydi",
        "To'lov va ro'yxat orasidagi oraliqni qisqartiring",
      ],
      warning:
        "Ro'yxatdan o'tkazilmagan xarid — himoyasiz xarid.",
      lawRefs: [
        { code: "FK", article: "185" },
        { code: "FK", article: "186" },
        { code: "FK", article: "188" },
      ],
    },
    {
      heading: "Egasiz ashyo, topilma va topilmani rasmiylashtirish",
      text:
        "EGASIZ ASHYO — mulkdori bo'lmagan yoki mulkdori noma'lum " +
        "bo'lgan, yoxud mulkdor undan voz kechgan ashyo. Uni " +
        "mulkka aylantirish tartibi qonunda belgilangan.\n\n" +
        "TOPILMA — yo'qotilgan ashyoni topib olgan shaxs bu haqda " +
        "yo'qotgan shaxsga yoki uning egasiga XABAR BERISHI, agar " +
        "ular noma'lum bo'lsa — militsiya yoki tegishli organga " +
        "topshirishi shart.\n\n" +
        "⚠️ TOPIB OLISH — MULKDOR BO'LISH DEGANI EMAS. Ashyoni " +
        "topib olib, uni yashirish o'zlashtirish sifatida " +
        "baholanishi mumkin. Bu ko'pchilik bilmaydigan, lekin " +
        "jiddiy oqibatli qoida.\n\n" +
        "MULK HUQUQINI OLISH: agar belgilangan muddat ichida " +
        "ashyoning egasi topilmasa, topib olgan shaxs unga mulk " +
        "huquqini oladi.\n\n" +
        "XARAJAT VA TAQDIRLASH: topib olgan shaxs ashyoni saqlash " +
        "va egasini qidirish bilan bog'liq xarajatlarni qoplashni, " +
        "shuningdek taqdirlanishni talab qilishga haqli.\n\n" +
        "QAROVSIZ HAYVONLAR uchun ham shunga o'xshash qoidalar " +
        "amal qiladi.",
      example:
        "Topib olingan qimmatbaho buyum hech kimga xabar " +
        "berilmasdan olib qo'yildi — bu o'zlashtirish sifatida " +
        "baholanishi mumkin.",
      keyPoints: [
        "Topilma haqida xabar berish yoki topshirish shart",
        "Topib olish o'z-o'zidan mulkdor qilmaydi",
        "Muddat o'tgach mulk huquqi yuzaga kelishi mumkin",
        "Xarajat va taqdirlash talab qilinishi mumkin",
      ],
      warning:
        "Topilmani yashirish jiddiy javobgarlikka olib kelishi " +
        "mumkin.",
      lawRefs: [
        { code: "FK", article: "191" },
        { code: "FK", article: "192" },
        { code: "FK", article: "193" },
        { code: "FK", article: "194" },
        { code: "FK", article: "195" },
      ],
    },
    {
      heading: "Xazina va madaniy meros obyektlari",
      text:
        "XAZINA — yerga ko'milgan yoki boshqa yo'l bilan " +
        "yashirilgan, egasini aniqlash mumkin bo'lmagan pul yoki " +
        "qimmatbaho buyumlar.\n\n" +
        "Xazina topilganda u umumiy qoida bo'yicha mol-mulk " +
        "egasi va xazinani topgan shaxs o'rtasida taqsimlanadi. " +
        "Lekin qidiruv mol-mulk egasining roziligisiz o'tkazilgan " +
        "bo'lsa, topgan shaxs ulushga haqli bo'lmaydi.\n\n" +
        "⚠️ ALOHIDA QOIDA: tarixiy yoki madaniy yodgorliklarga " +
        "taalluqli buyumlar uchun maxsus tartib qo'llaniladi — " +
        "ular davlatga topshiriladi, topgan shaxs esa mukofot " +
        "olishga haqli.\n\n" +
        "MADANIY MEROS OBYEKTLARINI XO'JASIZLARCHA SAQLASH " +
        "alohida oqibatga ega: mulkdor moddiy madaniy meros " +
        "obyektini talab darajasida saqlamasa, obyekt qonunda " +
        "belgilangan tartibda undan olib qo'yilishi mumkin.\n\n" +
        "AMALIY XULOSA: meros ro'yxatidagi bino sotib olish " +
        "oddiy xarid emas — u qo'shimcha majburiyatlarni ham " +
        "keltiradi.",
      example:
        "Ta'mirlash paytida tarixiy ahamiyatga ega buyumlar " +
        "topildi — ular davlatga topshiriladi, topuvchi mukofot " +
        "oladi.",
      keyPoints: [
        "Xazina egasi va topuvchi o'rtasida taqsimlanadi",
        "Roziliksiz qidiruvda topuvchi ulush olmaydi",
        "Tarixiy-madaniy buyumlar uchun maxsus tartib",
        "Meros obyektini yomon saqlash olib qo'yishga olib keladi",
      ],
      warning:
        "Ruxsatsiz qidiruv o'tkazish javobgarlikka olib keladi.",
      lawRefs: [
        { code: "FK", article: "190" },
        { code: "FK", article: "196" },
      ],
    },
    {
      heading: "Mulk huquqining bekor bo'lish asoslari",
      text:
        "Mulk huquqi ikki xil yo'l bilan bekor bo'ladi.\n\n" +
        "MULKDORNING IXTIYORI BILAN: mol-mulkni boshqa shaxsga " +
        "berish (sotish, hadya), mulkdan voz kechish, mol-mulkni " +
        "yo'q qilish.\n\n" +
        "IXTIYORIDAN TASHQARI: mol-mulk nobud bo'lishi hamda " +
        "qonunda nazarda tutilgan hollarda MAJBURIY olib " +
        "qo'yish.\n\n" +
        "⚠️ ENG MUHIM QOIDA: mol-mulkni mulkdordan majburiy olib " +
        "qo'yishga YO'L QO'YILMAYDI — qonunda ko'rsatilgan " +
        "hollardan tashqari.\n\n" +
        "Ya'ni majburiy olib qo'yish — bu ISTISNO va uning " +
        "ro'yxati YOPIQ. Ro'yxatda yo'q asos bilan mulkni olish " +
        "qonunga xilof.\n\n" +
        "Mol-mulk tugatilganda yoki hisobdan chiqarilganda ham " +
        "belgilangan tartib mavjud — shuning uchun \"o'zim yo'q " +
        "qildim\" degan asos hujjat bilan tasdiqlanishi kerak " +
        "(ayniqsa ro'yxatga olinadigan mol-mulkda).",
      example:
        "Mulk qonunda ko'rsatilmagan asos bilan olib qo'yildi — " +
        "bunday harakat sudda qonunga xilof deb topilishi mumkin.",
      keyPoints: [
        "Mulk huquqi ixtiyoriy va majburiy yo'l bilan bekor bo'ladi",
        "Majburiy olib qo'yish faqat qonunda ko'rsatilgan hollarda",
        "Asoslar ro'yxati yopiq",
        "Mol-mulkni hisobdan chiqarish hujjatlashtiriladi",
      ],
      warning:
        "Olib qo'yish talabida uning aniq qonuniy asosini yozma " +
        "so'rang.",
      lawRefs: [
        { code: "FK", article: "197" },
        { code: "FK", article: "198" },
        { code: "FK", article: "199" },
      ],
    },
    {
      heading: "Natsionalizatsiya, rekvizitsiya va musodara",
      text:
        "Majburiy olib qo'yishning uchta asosiy shakli bor va " +
        "ularni ajratish muhim.\n\n" +
        "NATSIONALIZATSIYA — mol-mulkni davlat mulkiga aylantirish. " +
        "U qonun asosida va mol-mulk qiymati hamda boshqa zararlar " +
        "TO'LANGAN holda amalga oshiriladi.\n\n" +
        "REKVIZITSIYA — tabiiy ofat, avariya, epidemiya va shu " +
        "kabi favqulodda holatlarda jamiyat manfaatlarini ko'zlab " +
        "mol-mulkni olib qo'yish. Bu ham QIYMATI TO'LANGAN holda " +
        "amalga oshiriladi. Holat tugagach, mulkdor saqlanib " +
        "qolgan mol-mulkni qaytarishni sud orqali talab qilishga " +
        "haqli.\n\n" +
        "MUSODARA — huquqbuzarlik uchun SANKSIYA tariqasida " +
        "mol-mulkni tekinga olib qo'yish. Bu yerda tovon " +
        "to'lanmaydi, chunki u jazo chorasi.\n\n" +
        "⚠️ ENG MUHIM AMALIY MASALA — QIYMATNI ANIQLASH. Olib " +
        "qo'yish chog'ida mol-mulk qiymati aniqlanadi va mulkdor " +
        "baho bilan rozi bo'lmasa, uni sudda nizolashtirishi " +
        "mumkin. Shuningdek zararlarni undirib olish huquqi " +
        "saqlanadi.\n\n" +
        "Shuning uchun taklif qilingan bahoga darhol rozilik " +
        "bermang — mustaqil baholash oling.",
      example:
        "Favqulodda holatda mol-mulk olib qo'yildi va past baho " +
        "taklif qilindi — mulkdor bahoni sudda nizolashtirishi " +
        "mumkin.",
      keyPoints: [
        "Natsionalizatsiya va rekvizitsiyada qiymat to'lanadi",
        "Musodara — sanksiya, tovonsiz amalga oshiriladi",
        "Rekvizitsiyada mol-mulkni qaytarish talab qilinishi mumkin",
        "Bahoni sudda nizolashtirish huquqi bor",
      ],
      warning:
        "Baholash dalolatnomasini o'qimasdan imzolamang.",
      lawRefs: [
        { code: "FK", article: "202" },
        { code: "FK", article: "203" },
        { code: "FK", article: "204" },
        { code: "FK", article: "205" },
        { code: "FK", article: "206" },
      ],
    },
    {
      heading: "Xususiy mulk: subyektlari va obyektlari",
      text:
        "XUSUSIY MULK HUQUQI — fuqarolar va nodavlat yuridik " +
        "shaxslarning mulk huquqi.\n\n" +
        "OBYEKTLARI keng: uy-joy, transport vositalari, pul, " +
        "qimmatli qog'ozlar, korxonalar, ishlab chiqarish " +
        "vositalari, mehnat va tadbirkorlik faoliyati natijalari " +
        "hamda qonun taqiqlamagan boshqa mol-mulk.\n\n" +
        "⚠️ ASOSIY KAFOLAT: xususiy mulk qonun bilan " +
        "muhofaza qilinadi va davlat tomonidan himoyalanadi. " +
        "Uning miqdori va qiymati umumiy qoida bo'yicha " +
        "cheklanmaydi.\n\n" +
        "UY-JOYGA MULK HUQUQINING VUJUDGA KELISHI alohida " +
        "tartibga solingan: u qurish, sotib olish, meros, hadya " +
        "va qonunda nazarda tutilgan boshqa asoslarda yuzaga " +
        "keladi va davlat ro'yxatidan o'tkaziladi.\n\n" +
        "OMMAVIY MULK esa respublika mulki va munitsipal mulkka " +
        "bo'linadi — ular ham fuqarolik munosabatlarida " +
        "ishtirok etadi, lekin ularni tasarruf etish alohida " +
        "tartibda amalga oshiriladi.",
      example:
        "Fuqaro bir necha turar joyga ega — bu o'z-o'zidan " +
        "qonunbuzarlik emas.",
      keyPoints: [
        "Xususiy mulk — fuqarolar va nodavlat tashkilotlar mulki",
        "Obyektlar ro'yxati keng va ochiq",
        "Miqdor va qiymat odatda cheklanmaydi",
        "Ommaviy mulk respublika va munitsipal turlarga bo'linadi",
      ],
      warning:
        "Ommaviy mulkka oid bitimda tasarruf etish tartibini " +
        "alohida tekshiring.",
      lawRefs: [
        { code: "FK", article: "207" },
        { code: "FK", article: "208" },
        { code: "FK", article: "209" },
        { code: "FK", article: "210" },
        { code: "FK", article: "213" },
        { code: "FK", article: "214" },
        { code: "FK", article: "215" },
      ],
    },
    {
      heading: "O'zboshimchalik bilan qurish va uning oqibatlari",
      text:
        "O'ZBOSHIMCHALIK BILAN QURILGAN IMORAT — buning uchun " +
        "ajratilmagan yer uchastkasida yoki zarur ruxsatlarsiz, " +
        "yoxud shaharsozlik va qurilish normalarini jiddiy buzgan " +
        "holda qurilgan bino, inshoot yoki boshqa ko'chmas " +
        "mulk.\n\n" +
        "⚠️ ASOSIY OQIBAT: bunday imoratni qurgan shaxs unga MULK " +
        "HUQUQINI OLMAYDI. Ya'ni u imoratni sota olmaydi, hadya " +
        "qila olmaydi, garovga qo'ya olmaydi va meros qoldira " +
        "olmaydi.\n\n" +
        "Bu amalda juda og'ir oqibat: pul sarflangan, bino turibdi, " +
        "lekin huquqiy jihatdan u \"mavjud emas\".\n\n" +
        "Bundan tashqari, bunday imorat qonunda belgilangan " +
        "tartibda BUZIB TASHLANISHI mumkin va buzish xarajatlari " +
        "qurgan shaxs zimmasiga tushishi mumkin.\n\n" +
        "QONUNIYLASHTIRISH imkoniyati qonunda nazarda tutilgan " +
        "hollarda va tartibda mavjud bo'lishi mumkin, lekin unga " +
        "TAYANIB ish boshlash xato: u kafolatlanmagan va ko'p " +
        "hollarda qo'shimcha shartlarni talab qiladi.\n\n" +
        "AMALIY QOIDA: qurilishni ruxsat hujjatlarisiz boshlamang " +
        "— keyin rasmiylashtirish har doim qimmatroq va xavfliroq " +
        "bo'ladi.",
      example:
        "Ruxsatsiz qurilgan qo'shimcha xona sabab uyni sotish " +
        "imkonsiz bo'lib qoldi — hujjatlar rasmiylashtirilmadi.",
      keyPoints: [
        "O'zboshimchalik bilan qurishda mulk huquqi yuzaga kelmaydi",
        "Bunday obyektni sotish va garovga qo'yish mumkin emas",
        "Imorat buzib tashlanishi mumkin",
        "Qonuniylashtirish kafolatlanmagan",
      ],
      warning:
        "Uy sotib olayotganda barcha qurilishlar hujjatlarda aks " +
        "etganini tekshiring.",
      lawRefs: [{ code: "FK", article: "212" }],
    },
    {
      heading: "Ko'p kvartirali uydagi umumiy mol-mulk",
      text:
        "Ko'p kvartirali uydagi turar joylar va yashash uchun " +
        "mo'ljallanmagan joylar mulkdorlariga uyning UMUMIY " +
        "MOL-MULKI umumiy ulushli mulk huquqida tegishli " +
        "bo'ladi.\n\n" +
        "UMUMIY MOL-MULKKA nima kiradi: zinapoyalar, liftlar, " +
        "koridorlar, tomlar, poydevor, ko'taruvchi konstruksiyalar, " +
        "muhandislik jihozlari va uyga xizmat qiladigan boshqa " +
        "obyektlar.\n\n" +
        "⚠️ ENG MUHIM QOIDA: umumiy mol-mulkdagi ulushni " +
        "kvartiradan ALOHIDA sotib bo'lmaydi. Ulush kvartiraning " +
        "taqdiriga ergashadi — kvartira sotilganda ulush ham " +
        "avtomatik o'tadi.\n\n" +
        "Bu shuni ham bildiradi: zinapoya yoki tomning bir qismini " +
        "\"sotib olish\" mumkin emas, chunki u alohida obyekt " +
        "emas.\n\n" +
        "XARAJATLAR: umumiy mol-mulkni saqlash xarajatlari " +
        "mulkdorlar o'rtasida ulushlariga mutanosib ravishda " +
        "taqsimlanadi. \"Men liftdan foydalanmayman\" degan asos " +
        "to'lovdan ozod qilmaydi — chunki bu foydalanish uchun " +
        "emas, SAQLASH uchun to'lov.",
      example:
        "Birinchi qavat mulkdori liftdan foydalanmasligini sabab " +
        "qilib to'lovdan bosh tortdi — bu asos qabul qilinmaydi.",
      keyPoints: [
        "Umumiy mol-mulk barcha mulkdorlarga ulushli tegishli",
        "Ulushni kvartiradan alohida sotib bo'lmaydi",
        "Ulush kvartira bilan birga o'tadi",
        "Saqlash xarajatlari ulushga mutanosib taqsimlanadi",
      ],
      warning:
        "Umumiy joylarni o'zboshimchalik bilan egallash boshqa " +
        "mulkdorlar huquqini buzadi.",
      lawRefs: [{ code: "FK", article: "211" }],
    },
  ],
};

module.exports = { LESSON };
