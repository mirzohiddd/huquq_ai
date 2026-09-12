"use strict";
/**
 * SHARTNOMALAR MODULI — 14-DARS: TOPSHIRIQ, BOSHQARUV VA SUG'URTA.
 * FK2 817–874 (topshiriq, vositachilik, ishonchli boshqaruv,
 * kompleks tadbirkorlik litsenziyasi) + 914–961 (sug'urta)
 * + 962–975 (oddiy shirkat).
 */

const LESSON = {
  key: "topshiriq-sugurta",
  category: "contracts",
  level: "advanced",
  order: 3140,
  title: "Topshiriq, ishonchli boshqaruv va sug'urta",
  desc:
    "Topshiriq va vositachilik shartnomalari, begona manfaatni " +
    "ko'zlab harakat qilish, mol-mulkni ishonchli boshqarish, " +
    "franchayzing, sug'urta turlari va oddiy shirkat.",
  objectives: [
    "Topshiriq va vositachilik farqini bilasiz",
    "Ishonchli boshqaruvning mohiyatini tushunasiz",
    "Franchayzing shartnomasining xususiyatlarini bilasiz",
    "Sug'urta turlarini va muhim shartlarini bilasiz",
    "Sug'urta to'lovi rad etilishi asoslarini bilasiz",
    "Oddiy shirkat shartnomasining xavfini bilasiz",
  ],
  practicalSteps: [
    "Topshiriq shartnomasida vakil vakolatlarini aniq chegaralab yozing",
    "Ishonchli boshqaruvda \"D.U.\" belgisi qo'yilishini tekshiring",
    "Sug'urta shartnomasi tuzayotganda barcha ma'lumotni to'g'ri bering",
    "Sug'urta hodisasi yuz berganda sug'urtalovchini darhol xabardor qiling",
    "Oddiy shirkatda hissalar va foyda taqsimotini yozma belgilang",
  ],
  sections: [
    {
      heading: "Topshiriq shartnomasi",
      text:
        "TOPSHIRIQ shartnomasi bo'yicha bir tomon (vakil) " +
        "ikkinchi tomon (topshiriq beruvchi) nomidan va " +
        "uning hisobidan muayyan yuridik harakatlarni " +
        "bajarish majburiyatini oladi.\n\n" +
        "⚠️ ASOSIY QOIDA: vakil tuzgan bitim bo'yicha huquq " +
        "va burchlar bevosita TOPSHIRIQ BERUVCHIDA " +
        "yuzaga keladi.\n\n" +
        "HAQ: topshiriq shartnomasi haq evaziga yoki " +
        "tekinga bo'lishi mumkin. Tadbirkorlik " +
        "faoliyati bilan bog'liq bo'lsa, u odatda haq " +
        "evaziga hisoblanadi.\n\n" +
        "KO'RSATMALAR: vakil topshiriqni topshiriq " +
        "beruvchining ko'rsatmalariga MUVOFIQ " +
        "bajarishi shart. Ko'rsatmalar qonuniy, " +
        "amalga oshirilishi mumkin va aniq bo'lishi " +
        "kerak.\n\n" +
        "Vakil topshiriq beruvchi manfaatlari uchun " +
        "zarur bo'lsa ko'rsatmalardan chetga chiqishi " +
        "mumkin — lekin buni imkon boricha oldindan " +
        "so'rashi yoki keyin xabar berishi kerak.\n\n" +
        "VAKIL MAJBURIYATLARI: topshiriqni shaxsan " +
        "bajarish; talab bo'yicha ijro haqida " +
        "ma'lumot berish; bitimdan olingan hamma " +
        "narsani darhol topshirish; hisobot " +
        "berish.\n\n" +
        "TOPSHIRIQ BERUVCHI MAJBURIYATLARI: " +
        "ishonchnoma berish; xarajatlarni qoplash; " +
        "vositalar bilan ta'minlash; ijroni qabul " +
        "qilish; haq to'lash.\n\n" +
        "BEKOR BO'LISHI: topshiriq beruvchi " +
        "topshiriqni BEKOR QILISHI, vakil esa undan " +
        "VOZ KECHISHI mumkin — istalgan paytda. " +
        "Bu huquqdan voz kechish haqidagi shart " +
        "HAQIQIY EMAS.",
      example:
        "Vakil topshiriq bo'yicha olgan mablag'ni " +
        "o'ziga qoldirdi — u darhol topshirishga " +
        "majbur.",
      keyPoints: [
        "Vakil topshiriq beruvchi nomidan ish ko'radi",
        "Huquq va burchlar topshiriq beruvchida yuzaga keladi",
        "Vakil ko'rsatmalarga muvofiq harakat qiladi",
        "Har ikki tomon istalgan paytda bekor qilishi mumkin",
      ],
      warning:
        "Topshiriqni bekor qilish huquqidan voz " +
        "kechish sharti ishlamaydi.",
      lawRefs: [
        { code: "FK2", article: "817" },
        { code: "FK2", article: "818" },
        { code: "FK2", article: "819" },
        { code: "FK2", article: "820" },
        { code: "FK2", article: "821" },
        { code: "FK2", article: "822" },
        { code: "FK2", article: "823" },
        { code: "FK2", article: "824" },
      ],
    },
    {
      heading: "Begona manfaatni ko'zlab harakat qilish",
      text:
        "Bu — kam ma'lum, lekin hayotda tez-tez uchraydigan " +
        "institut: topshiriqsiz boshqa shaxs manfaatini " +
        "ko'zlab harakat qilish.\n\n" +
        "SHARTLARI: harakat manfaatdor shaxsning ANIQ " +
        "manfaatidan kelib chiqishi; unga zarar " +
        "yetkazilishining oldini olish yoki foyda " +
        "keltirish maqsadida bo'lishi; ishlarni " +
        "yuritish topshirilmagan bo'lishi kerak.\n\n" +
        "⚠️ AMALIY MISOLLAR: qo'shni yo'qligida uning " +
        "kvartirasidagi suv toshqinini to'xtatish; " +
        "tanish odamning mol-mulkini yong'indan " +
        "saqlash; bedarak shaxsning mol-mulkini " +
        "himoya qilish.\n\n" +
        "MAJBURIYATLAR: harakat qilgan shaxs " +
        "manfaatdor shaxsni imkon boricha darhol " +
        "XABARDOR qilishi va uning qaroriga " +
        "qadar kutishi kerak (kutish zarar " +
        "keltirmasa).\n\n" +
        "XARAJATLARNI QOPLASH: manfaatdor shaxs " +
        "harakat qilgan shaxsning zarur " +
        "xarajatlarini va boshqa haqiqiy zararini " +
        "QOPLASHI shart — harakatlar uning " +
        "manfaatiga mos bo'lgan bo'lsa.\n\n" +
        "MUHIM: qoplash majburiyati harakat " +
        "kutilgan natijaga olib kelmagan " +
        "taqdirda ham saqlanadi.\n\n" +
        "MA'QULLASH: manfaatdor shaxs " +
        "harakatlarni ma'qullasa, munosabatlarga " +
        "TOPSHIRIQ yoki boshqa tegishli shartnoma " +
        "qoidalari qo'llaniladi.\n\n" +
        "HISOBOT: harakat qilgan shaxs " +
        "manfaatdor shaxsga hisobot berishi shart.",
      example:
        "Qo'shni yo'qligida uning quvuri yorildi va " +
        "ta'mirlandi — xarajat qoplanishi kerak.",
      keyPoints: [
        "Topshiriqsiz begona manfaatda harakat qilish mumkin",
        "Manfaatdor shaxs imkon boricha xabardor qilinadi",
        "Zarur xarajatlar qoplanadi",
        "Ma'qullansa topshiriq qoidalari qo'llaniladi",
      ],
      warning:
        "Harakat manfaatdor shaxs manfaatiga zid " +
        "bo'lsa xarajat qoplanmaydi.",
      lawRefs: [
        { code: "FK2", article: "826" },
        { code: "FK2", article: "827" },
        { code: "FK2", article: "828" },
        { code: "FK2", article: "829" },
        { code: "FK2", article: "830" },
        { code: "FK2", article: "831" },
      ],
    },
    {
      heading: "Vositachilik (komissiya) shartnomasi",
      text:
        "VOSITACHILIK shartnomasi bo'yicha vositachi " +
        "komitentning topshirig'iga binoan haq evaziga " +
        "O'Z NOMIDAN, lekin komitent HISOBIDAN bir " +
        "yoki bir necha bitim tuzish majburiyatini " +
        "oladi.\n\n" +
        "⚠️ TOPSHIRIQDAN ASOSIY FARQI SHU: vositachi " +
        "O'Z NOMIDAN ish ko'radi. Shuning uchun " +
        "uchinchi shaxs bilan tuzilgan bitim " +
        "bo'yicha huquq va burchlar VOSITACHIDA " +
        "yuzaga keladi — komitent bitimda " +
        "ko'rsatilgan bo'lsa ham.\n\n" +
        "AMALDA BU MUHIM: xaridor vositachi bilan " +
        "ish ko'radi va da'voni ham unga qo'yadi.\n\n" +
        "MOL-MULKKA HUQUQ: vositachiga komitentdan " +
        "kelib tushgan yoki u komitent hisobidan " +
        "olgan ashyolar KOMITENTNING mulki " +
        "hisoblanadi.\n\n" +
        "Bu himoya muhim: vositachi bankrot bo'lsa, " +
        "komitentning tovari uning mulkiga " +
        "kirmaydi.\n\n" +
        "KO'RSATMALARDAN CHETGA CHIQISH: vositachi " +
        "komitent ko'rsatgan shartlarda bitim " +
        "tuzishi shart. Ko'rsatmadan chetga " +
        "chiqib arzonroq sotsa, farqni qoplashi " +
        "kerak bo'lishi mumkin; foydaliroq " +
        "shartlarda tuzsa, qo'shimcha foyda " +
        "odatda tomonlar o'rtasida teng " +
        "taqsimlanadi.\n\n" +
        "USHLAB QOLISH: vositachi o'z talablarini " +
        "komitentga tegishli summalardan ushlab " +
        "qolishga haqli.\n\n" +
        "JAVOBGARLIK: vositachi komitent " +
        "mol-mulkining yo'qolishi, yetishmasligi " +
        "yoki shikastlanishi uchun javob " +
        "beradi.",
      example:
        "Vositachi orqali sotilgan tovar bo'yicha " +
        "xaridor da'voni vositachiga qo'yadi.",
      keyPoints: [
        "Vositachi o'z nomidan, komitent hisobidan ish ko'radi",
        "Bitim bo'yicha huquq va burchlar vositachida",
        "Vositachidagi tovar komitent mulki hisoblanadi",
        "Vositachi mol-mulk saqlanishi uchun javob beradi",
      ],
      warning:
        "Vositachi bilan ishlashda uning vakolat " +
        "hujjatini so'rang.",
      lawRefs: [
        { code: "FK2", article: "832" },
        { code: "FK2", article: "833" },
        { code: "FK2", article: "834" },
        { code: "FK2", article: "837" },
        { code: "FK2", article: "838" },
        { code: "FK2", article: "839" },
        { code: "FK2", article: "840" },
        { code: "FK2", article: "842" },
      ],
    },
    {
      heading: "Mol-mulkni ishonchli boshqarish",
      text:
        "MOL-MULKNI ISHONCHLI BOSHQARISH shartnomasi " +
        "bo'yicha bir tomon mol-mulkni muayyan " +
        "muddatga ikkinchi tomonning (ishonchli " +
        "boshqaruvchining) ishonchli boshqaruviga " +
        "beradi, u esa mol-mulkni ta'sischi yoki u " +
        "ko'rsatgan shaxs (naf oluvchi) MANFAATLARIDA " +
        "boshqaradi.\n\n" +
        "⚠️ ENG MUHIM QOIDA: mol-mulkni ishonchli " +
        "boshqaruvga berish unga bo'lgan MULK " +
        "HUQUQINING boshqaruvchiga O'TISHIGA olib " +
        "KELMAYDI.\n\n" +
        "Ya'ni mulkdor mulkdorligicha qoladi.\n\n" +
        "OBYEKTLARI: korxonalar, ko'chmas mulk, " +
        "qimmatli qog'ozlar va boshqa mol-mulk. " +
        "Pul mablag'lari mustaqil obyekt bo'la " +
        "olmaydi — qonunda nazarda tutilgan " +
        "hollardan tashqari.\n\n" +
        "SHAKL: shartnoma yozma shaklda tuziladi; " +
        "ko'chmas mulk bo'lsa oldi-sotdi uchun " +
        "belgilangan shaklda va ro'yxatdan " +
        "o'tkazish bilan.\n\n" +
        "MUHIM SHARTLAR: mol-mulk tarkibi; " +
        "ta'sischi yoki naf oluvchi nomi; haq " +
        "miqdori va shakli; shartnoma muddati.\n\n" +
        "AJRATIB CHIQARISH: ishonchli boshqaruvdagi " +
        "mol-mulk ta'sischining boshqa mol-mulkidan " +
        "va boshqaruvchining mol-mulkidan " +
        "AJRATILADI, alohida balansda hisobga " +
        "olinadi va alohida hisobvaraq " +
        "ochiladi.\n\n" +
        "⚠️ \"D.U.\" BELGISI: boshqaruvchi bitim " +
        "tuzayotganda o'z nomidan ish ko'radi, " +
        "lekin hujjatlarda ishonchli boshqaruvchi " +
        "sifatida harakat qilayotganini " +
        "ko'rsatishi shart.\n\n" +
        "Ko'rsatmasa — u bitim bo'yicha SHAXSAN " +
        "javob beradi.",
      example:
        "Boshqaruvchi hujjatda maqomini ko'rsatmadi " +
        "— majburiyat bo'yicha shaxsan javob " +
        "beradi.",
      keyPoints: [
        "Mulk huquqi boshqaruvchiga o'tmaydi",
        "Boshqaruvdagi mol-mulk alohida hisobga olinadi",
        "Shartnoma yozma va zarur hollarda ro'yxatdan o'tkaziladi",
        "Boshqaruvchi maqomini hujjatda ko'rsatishi shart",
      ],
      warning:
        "Maqom ko'rsatilmagan bitim boshqaruvchining " +
        "shaxsiy majburiyatiga aylanadi.",
      lawRefs: [
        { code: "FK2", article: "849" },
        { code: "FK2", article: "851" },
        { code: "FK2", article: "852" },
        { code: "FK2", article: "853" },
        { code: "FK2", article: "854" },
        { code: "FK2", article: "855" },
        { code: "FK2", article: "857" },
        { code: "FK2", article: "859" },
        { code: "FK2", article: "861" },
      ],
    },
    {
      heading: "Kompleks tadbirkorlik litsenziyasi (franchayzing)",
      text:
        "KOMPLEKS TADBIRKORLIK LITSENZIYASI shartnomasi " +
        "bo'yicha litsenziar litsenziatga haq evaziga " +
        "o'ziga tegishli ALOHIDA HUQUQLAR " +
        "KOMPLEKSIDAN foydalanish huquqini beradi.\n\n" +
        "Kompleksga odatda firma nomi, tovar belgisi, " +
        "himoyalangan tijorat axboroti va boshqa " +
        "obyektlar kiradi.\n\n" +
        "⚠️ AMALDA BU FRANCHAYZING: mashhur brend " +
        "ostida biznes yuritish huquqi.\n\n" +
        "SHAKL: shartnoma yozma shaklda tuziladi va " +
        "qonunda belgilangan tartibda ro'yxatga " +
        "olinadi. Rioya qilmaslik uni haqiqiy emas " +
        "qiladi.\n\n" +
        "LITSENZIAR MAJBURIYATLARI: texnik va tijorat " +
        "hujjatlarini berish; zarur axborotni " +
        "yetkazish; xodimlarni o'qitish; doimiy " +
        "texnik va maslahat yordami ko'rsatish; " +
        "mahsulot sifatini nazorat qilish.\n\n" +
        "LITSENZIAT MAJBURIYATLARI: kompleksdan " +
        "shartnomada belgilangan tarzda " +
        "foydalanish; sifat standartlariga rioya " +
        "qilish; maxfiylikni saqlash; " +
        "mijozlarni litsenziya asosida " +
        "ishlayotganini xabardor qilish.\n\n" +
        "⚠️ LITSENZIAR JAVOBGARLIGI MUHIM: " +
        "litsenziar litsenziat sotgan tovarlar " +
        "sifatiga qo'yiladigan talablar bo'yicha " +
        "SUBSIDIAR javobgarlik ko'taradi.\n\n" +
        "Ya'ni iste'molchi sifatsiz mahsulot " +
        "uchun brend egasiga ham murojaat " +
        "qilishi mumkin.\n\n" +
        "CHEKLAYDIGAN SHARTLAR (hudud, raqobat " +
        "taqiqi) shartnomada nazarda tutilishi " +
        "mumkin, lekin ular raqobat " +
        "qonunchiligiga zid bo'lmasligi kerak.\n\n" +
        "KUCHDA QOLISHI: tomonlar o'zgarganda " +
        "yoki firma nomi o'zgarganda shartnoma " +
        "odatda kuchda qoladi.",
      example:
        "Franchayzing bo'yicha ishlayotgan " +
        "do'kondagi sifatsiz mahsulot uchun " +
        "brend egasi ham javob berishi mumkin.",
      keyPoints: [
        "Franchayzing — huquqlar kompleksidan foydalanish",
        "Shartnoma yozma va ro'yxatga olinadi",
        "Litsenziar yordam berish va nazorat qilish majburiyatini oladi",
        "Sifat bo'yicha litsenziar subsidiar javob beradi",
      ],
      warning:
        "Shartnomadagi hududiy va raqobat " +
        "cheklovlarini diqqat bilan baholang.",
      lawRefs: [
        { code: "FK2", article: "862" },
        { code: "FK2", article: "863" },
        { code: "FK2", article: "865" },
        { code: "FK2", article: "866" },
        { code: "FK2", article: "867" },
        { code: "FK2", article: "868" },
        { code: "FK2", article: "869" },
        { code: "FK2", article: "872" },
        { code: "FK2", article: "873" },
      ],
    },
    {
      heading: "Sug'urta: turlari va muhim shartlari",
      text:
        "Sug'urta IXTIYORIY va MAJBURIY bo'ladi. Majburiy " +
        "sug'urta qonun bilan belgilanadi.\n\n" +
        "MULKIY SUG'URTA shartnomasi bo'yicha " +
        "sug'urtalovchi sug'urta hodisasi yuz " +
        "berganda yetkazilgan zararni qoplash " +
        "majburiyatini oladi. Uning turlari: " +
        "mol-mulkni sug'urtalash; zarar yetkazganlik " +
        "uchun javobgarlikni sug'urtalash; shartnoma " +
        "bo'yicha javobgarlikni sug'urtalash; " +
        "tadbirkorlik xavfini sug'urtalash.\n\n" +
        "SHAXSIY SUG'URTA — fuqaroning hayoti, " +
        "sog'lig'i yoki boshqa manfaatlari " +
        "sug'urtalanadi.\n\n" +
        "⚠️ SUG'URTALASHGA YO'L QO'YILMAYDIGAN " +
        "MANFAATLAR bor: qonunga xilof manfaatlar; " +
        "qimor va o'yinlardagi yo'qotishlar; " +
        "garovga olingan shaxslarni ozod qilish " +
        "uchun xarajatlar.\n\n" +
        "SHAKL: sug'urta shartnomasi YOZMA shaklda " +
        "tuziladi. Rioya qilmaslik uni HAQIQIY " +
        "EMAS qiladi (majburiy davlat " +
        "sug'urtasidan tashqari).\n\n" +
        "MUHIM SHARTLAR: sug'urta obyekti; sug'urta " +
        "hodisasi; sug'urta summasi; shartnoma " +
        "muddati.\n\n" +
        "SUG'URTA QOIDALARI: shartlar sug'urtalovchi " +
        "tomonidan qabul qilingan qoidalarda " +
        "belgilanishi mumkin — bu qoidalar " +
        "shartnoma qismi bo'lib qoladi.\n\n" +
        "AMALIY XULOSA: qoidalarni ALBATTA o'qing. " +
        "Ko'p rad javoblar aynan qoidalardagi " +
        "istisnolar asosida beriladi.\n\n" +
        "AMAL QILISH: shartnoma odatda sug'urta " +
        "mukofoti (yoki uning birinchi qismi) " +
        "to'langan paytdan kuchga kiradi.",
      example:
        "Sug'urta qoidalaridagi istisno o'qilmagan " +
        "edi — hodisa aynan shu istisnoga tushib " +
        "qoldi.",
      keyPoints: [
        "Sug'urta mulkiy va shaxsiy turlarga bo'linadi",
        "Ayrim manfaatlarni sug'urtalab bo'lmaydi",
        "Shartnoma yozma bo'lishi shart",
        "Sug'urta qoidalari shartnoma qismi hisoblanadi",
      ],
      warning:
        "Sug'urta qoidalarini o'qimasdan shartnoma " +
        "imzolash — rad javobining asosiy sababi.",
      lawRefs: [
        { code: "FK2", article: "914" },
        { code: "FK2", article: "915" },
        { code: "FK2", article: "916" },
        { code: "FK2", article: "917" },
        { code: "FK2", article: "918" },
        { code: "FK2", article: "920" },
        { code: "FK2", article: "921" },
        { code: "FK2", article: "927" },
        { code: "FK2", article: "929" },
        { code: "FK2", article: "930" },
        { code: "FK2", article: "947" },
      ],
    },
    {
      heading: "Sug'urta summasi va to'lov",
      text:
        "SUG'URTA SUMMASI — sug'urtalovchi to'lash " +
        "majburiyatini olgan eng ko'p summa.\n\n" +
        "MULKIY SUG'URTADA u SUG'URTA QIYMATIDAN " +
        "(mol-mulkning haqiqiy qiymatidan) oshmasligi " +
        "kerak.\n\n" +
        "⚠️ TO'LIQ BO'LMAGAN SUG'URTA — ENG KO'P " +
        "TUSHUNMOVCHILIK: agar sug'urta summasi " +
        "sug'urta qiymatidan PAST bo'lsa, tovon " +
        "MUTANOSIB ravishda kamaytiriladi.\n\n" +
        "Ya'ni mol-mulk qiymatining yarmiga " +
        "sug'urtalangan bo'lsa, zararning ham " +
        "taxminan yarmi to'lanadi — hatto zarar " +
        "sug'urta summasidan kichik bo'lsa ham.\n\n" +
        "Bu qoida amalda ko'p odamni hayron " +
        "qoldiradi. Shuning uchun mol-mulkni " +
        "TO'LIQ qiymatiga sug'urtalash muhim.\n\n" +
        "SUG'URTA QIYMATIDAN ORTIQ SUG'URTA: " +
        "ortiqcha qism bo'yicha shartnoma " +
        "haqiqiy emas.\n\n" +
        "QO'SHALOQ SUG'URTA: bir obyekt bir necha " +
        "sug'urtalovchida sug'urtalangan bo'lsa, " +
        "tovon umumiy zarardan oshmaydi va " +
        "sug'urtalovchilar o'rtasida " +
        "taqsimlanadi.\n\n" +
        "SUBROGATSIYA — MUHIM QOIDA: sug'urta " +
        "tovonini to'lagan sug'urtalovchiga " +
        "zararga javobgar shaxsga nisbatan " +
        "talab huquqi O'TADI.\n\n" +
        "Ya'ni sug'urtalovchi to'lagach, aybdorga " +
        "o'zi da'vo qiladi. Sug'urta qildiruvchi " +
        "esa aybdorga da'vo qilish huquqidan voz " +
        "kechsa, tovon kamaytirilishi mumkin.\n\n" +
        "SHAXSIY SUG'URTADA to'lov shartnomada " +
        "belgilangan summada amalga oshiriladi " +
        "va u haqiqiy zararga bog'lanmaydi.",
      example:
        "Uy haqiqiy qiymatining yarmiga " +
        "sug'urtalangan edi — zarar ham mutanosib " +
        "kamaytirib to'landi.",
      keyPoints: [
        "Sug'urta summasi sug'urta qiymatidan oshmaydi",
        "To'liq bo'lmagan sug'urtada tovon mutanosib kamayadi",
        "Ortiqcha qism bo'yicha shartnoma haqiqiy emas",
        "To'lovdan keyin talab huquqi sug'urtalovchiga o'tadi",
      ],
      warning:
        "Mukofotni kamaytirish uchun past summa " +
        "ko'rsatish — tovonni ham kamaytiradi.",
      lawRefs: [
        { code: "FK2", article: "934" },
        { code: "FK2", article: "935" },
        { code: "FK2", article: "936" },
        { code: "FK2", article: "938" },
        { code: "FK2", article: "939" },
        { code: "FK2", article: "956" },
        { code: "FK2", article: "957" },
      ],
    },
    {
      heading: "Sug'urta hodisasi va to'lov rad etilishi",
      text:
        "Bu — sug'urtada eng ko'p nizo chiqadigan qism.\n\n" +
        "MA'LUMOT BERISH MAJBURIYATI: shartnoma " +
        "tuzayotganda sug'urta qildiruvchi " +
        "sug'urtalovchiga xavfni baholash uchun " +
        "muhim bo'lgan barcha holatlarni bildirishi " +
        "shart.\n\n" +
        "⚠️ YOLG'ON YOKI TO'LIQSIZ MA'LUMOT — RAD " +
        "ETISHNING ENG KENG TARQALGAN SABABI. " +
        "Bunday holatda shartnoma haqiqiy emas deb " +
        "topilishi mumkin.\n\n" +
        "XAVF ORTISHI: shartnoma amal qilish " +
        "davrida xavf sezilarli ortsa, sug'urta " +
        "qildiruvchi bu haqda sug'urtalovchini " +
        "darhol xabardor qilishi shart. " +
        "Sug'urtalovchi shartlarni o'zgartirishni " +
        "yoki qo'shimcha mukofotni talab qilishi " +
        "mumkin.\n\n" +
        "HODISA HAQIDA XABAR BERISH: sug'urta " +
        "hodisasi yuz berganda sug'urta " +
        "qildiruvchi (naf oluvchi) " +
        "sug'urtalovchini shartnomada belgilangan " +
        "muddat va usulda xabardor qilishi " +
        "shart.\n\n" +
        "Kechikish tovonni rad etish asosi " +
        "bo'lishi mumkin.\n\n" +
        "ZARARNI KAMAYTIRISH: sug'urta qildiruvchi " +
        "zararni kamaytirish uchun oqilona " +
        "choralar ko'rishi shart. Bunday " +
        "xarajatlar sug'urtalovchi tomonidan " +
        "qoplanadi.\n\n" +
        "Chora ko'rmaslik esa tovonni " +
        "kamaytiradi.\n\n" +
        "OZOD QILISH VA RAD ETISH ASOSLARI: " +
        "sug'urta hodisasi sug'urta " +
        "qildiruvchining QASDI bilan yuzaga " +
        "kelsa; qonunda ko'rsatilgan boshqa " +
        "hollarda (yadro portlashi, harbiy " +
        "harakatlar, xalq g'alayonlari va shu " +
        "kabi).\n\n" +
        "AMALIY XULOSA: rad javobi olsangiz, " +
        "uning ANIQ ASOSINI yozma so'rang va " +
        "u sug'urta qoidalariga mos kelishini " +
        "tekshiring.",
      example:
        "Hodisa haqida kechikib xabar berildi — " +
        "sug'urtalovchi tovonni rad etishga " +
        "urindi.",
      keyPoints: [
        "Noto'g'ri ma'lumot shartnomani buzadi",
        "Xavf ortishi haqida darhol xabar berish shart",
        "Hodisa haqida belgilangan muddatda xabar beriladi",
        "Zararni kamaytirish choralarini ko'rish shart",
      ],
      warning:
        "Rad javobining asosini yozma so'rang — " +
        "og'zaki rad javobiga rozi bo'lmang.",
      lawRefs: [
        { code: "FK2", article: "931" },
        { code: "FK2", article: "943" },
        { code: "FK2", article: "949" },
        { code: "FK2", article: "951" },
        { code: "FK2", article: "952" },
        { code: "FK2", article: "953" },
        { code: "FK2", article: "954" },
        { code: "FK2", article: "955" },
      ],
    },
    {
      heading: "Oddiy shirkat shartnomasi",
      text:
        "ODDIY SHIRKAT (birgalikda faoliyat) shartnomasi " +
        "bo'yicha ikki yoki bir necha shaxs yuridik " +
        "shaxs tashkil etmasdan foyda olish yoki " +
        "boshqa maqsadga erishish uchun HISSALARINI " +
        "birlashtiradi va birgalikda harakat " +
        "qiladi.\n\n" +
        "⚠️ ENG MUHIM XUSUSIYAT: yuridik shaxs " +
        "tashkil etilmaydi. Ya'ni sheriklar " +
        "SHAXSAN javob beradi — bu eng katta " +
        "xavf.\n\n" +
        "HISSALAR: pul, mol-mulk, kasbiy va boshqa " +
        "bilimlar, ko'nikmalar, ishchanlik " +
        "obro'si va aloqalar bo'lishi mumkin. " +
        "Hissalar teng deb taxmin qilinadi — " +
        "shartnomada boshqacha belgilanmagan " +
        "bo'lsa.\n\n" +
        "UMUMIY MOL-MULK: sheriklar qo'shgan " +
        "mol-mulk va faoliyat natijasida olingan " +
        "mahsulot hamda daromadlar ularning " +
        "UMUMIY ULUSHLI MULKI hisoblanadi.\n\n" +
        "ISHLARNI YURITISH: har bir sherik " +
        "barcha nomidan harakat qilishga haqli " +
        "yoki shartnomada boshqa tartib " +
        "belgilanishi mumkin.\n\n" +
        "XARAJAT VA FOYDA: xarajatlar va zararlar " +
        "hissalarga mutanosib taqsimlanadi. " +
        "Sherikni xarajatlardan yoki foydadan " +
        "butunlay chetlatuvchi kelishuv HAQIQIY " +
        "EMAS.\n\n" +
        "JAVOBGARLIK: tadbirkorlik faoliyati " +
        "bilan bog'liq bo'lsa, sheriklar barcha " +
        "umumiy majburiyatlar bo'yicha SOLIDAR " +
        "javob beradi.\n\n" +
        "Ya'ni kreditor butun summani bitta " +
        "sherikdan talab qilishi mumkin.\n\n" +
        "BEKOR BO'LISHI: sherikning vafoti, " +
        "to'lovga qobiliyatsizligi, ulushiga " +
        "undiruv qaratilishi, muddat tugashi " +
        "va boshqa asoslarda bekor bo'ladi.\n\n" +
        "AMALIY XULOSA: birgalikda biznes " +
        "boshlashda oddiy shirkat eng oson, " +
        "lekin eng xavfli shakl — javobgarlik " +
        "cheklanmaydi.",
      example:
        "Birgalikda faoliyat bo'yicha qarz " +
        "yuzaga keldi — kreditor bitta " +
        "sherikdan to'liq summani talab qila " +
        "oladi.",
      keyPoints: [
        "Oddiy shirkatda yuridik shaxs tashkil etilmaydi",
        "Qo'shilgan mol-mulk umumiy ulushli mulk bo'ladi",
        "Foydadan chetlatuvchi kelishuv haqiqiy emas",
        "Tadbirkorlikda javobgarlik solidar bo'ladi",
      ],
      warning:
        "Oddiy shirkatda shaxsiy mol-mulkingiz " +
        "ham xavf ostida bo'ladi.",
      lawRefs: [
        { code: "FK2", article: "962" },
        { code: "FK2", article: "963" },
        { code: "FK2", article: "964" },
        { code: "FK2", article: "965" },
        { code: "FK2", article: "966" },
        { code: "FK2", article: "967" },
        { code: "FK2", article: "968" },
        { code: "FK2", article: "969" },
        { code: "FK2", article: "970" },
        { code: "FK2", article: "971" },
      ],
    },
  ],
};

module.exports = { LESSON };
