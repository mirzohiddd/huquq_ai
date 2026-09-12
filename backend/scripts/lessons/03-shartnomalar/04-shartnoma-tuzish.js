"use strict";
/** SHARTNOMALAR MODULI — 4-DARS: SHARTNOMA TUZISH. FK 364–381. */

const LESSON = {
  key: "shartnoma-tuzish",
  category: "contracts",
  level: "mid",
  order: 3040,
  title: "Shartnoma qanday tuziladi: oferta va aksept",
  desc:
    "Oferta va aksept qoidalari, shartnoma qachon va qayerda " +
    "tuzilgan hisoblanadi, majburiy tartibda shartnoma tuzish, " +
    "shartnoma oldidan bo'ladigan nizolar va kimoshdi savdosi.",
  objectives: [
    "Oferta nima ekanini va uni taklifdan ajratishni bilasiz",
    "Aksept qoidalarini va uning muddatlarini bilasiz",
    "Shartnoma qachon va qayerda tuzilganini aniqlay olasiz",
    "Boshqa shartlar asosidagi javob nima ekanini bilasiz",
    "Majburiy tartibda shartnoma tuzishni bilasiz",
    "Kimoshdi savdosi qoidalari va uning buzilishi oqibatini bilasiz",
  ],
  practicalSteps: [
    "Taklifingizda aksept muddatini aniq ko'rsating",
    "Javobda o'zgartirish kiritsangiz — bu yangi oferta ekanini yodda tuting",
    "Kelishmovchiliklar bayonnomasini yozma rasmiylashtiring",
    "Shartnoma tuzilgan sanani hujjatda aniq qayd eting",
    "Kimoshdi savdosida qoidalar buzilsa muddat ichida sudga murojaat qiling",
  ],
  sections: [
    {
      heading: "Shartnoma tuzishning umumiy tartibi",
      text:
        "Shartnoma tuzish ikki bosqichdan iborat: bir tomon " +
        "OFERTA (shartnoma tuzish taklifi) yuboradi, ikkinchi " +
        "tomon uni AKSEPT qiladi (qabul qiladi).\n\n" +
        "Shartnoma barcha MUHIM SHARTLAR bo'yicha kelishuvga " +
        "erishilgan paytdan tuzilgan hisoblanadi.\n\n" +
        "⚠️ TUZILISH PAYTI: shartnoma ofertani yuborgan shaxs " +
        "AKSEPTNI OLGAN paytdan tuzilgan deb e'tirof etiladi.\n\n" +
        "Ya'ni javob yuborilgan payt emas, javob YETIB " +
        "BORGAN payt muhim. Bu masofadan tuziladigan " +
        "shartnomalarda amaliy ahamiyatga ega.\n\n" +
        "ISTISNO: mol-mulkni topshirish zarur bo'lgan " +
        "shartnoma tegishli mol-mulk TOPSHIRILGAN paytdan " +
        "tuzilgan hisoblanadi. Davlat ro'yxatidan " +
        "o'tkazilishi kerak bo'lgan shartnoma esa RO'YXATDAN " +
        "O'TKAZILGAN paytdan.\n\n" +
        "SHAKL: shartnoma qonunda o'sha tur uchun belgilangan " +
        "shaklda tuziladi. Shakl belgilanmagan bo'lsa, " +
        "bitimlar uchun nazarda tutilgan umumiy qoidalar " +
        "qo'llaniladi. Tomonlar kelishuvi bilan qonun talab " +
        "qilmagan shakl ham belgilanishi mumkin — bunda " +
        "shartnoma o'sha shaklga rioya qilingandan keyin " +
        "tuzilgan hisoblanadi.",
      example:
        "Aksept yuborildi, lekin yetib bormadi — shartnoma " +
        "hali tuzilgan hisoblanmaydi.",
      keyPoints: [
        "Shartnoma oferta va aksept orqali tuziladi",
        "U aksept olingan paytdan tuzilgan hisoblanadi",
        "Mol-mulk topshiriladigan shartnomada — topshirish paytidan",
        "Tomonlar qo'shimcha shakl belgilashi mumkin",
      ],
      warning:
        "Aksept yetib borganini tasdiqlovchi dalilni saqlang.",
      lawRefs: [
        { code: "FK", article: "364" },
        { code: "FK", article: "365" },
        { code: "FK", article: "366" },
      ],
    },
    {
      heading: "Oferta: nima taklif oferta hisoblanadi",
      text:
        "OFERTA — bir yoki bir necha ANIQ shaxsga qaratilgan, " +
        "yetarlicha ANIQ bo'lgan va taklif qiluvchining " +
        "javobni qabul qilgan shaxs bilan shartnoma tuzish " +
        "niyatini ifodalovchi taklif.\n\n" +
        "OFERTA UCHTA SHARTNI QANOATLANTIRISHI KERAK: aniq " +
        "adresatga qaratilgan; muhim shartlarni o'z ichiga " +
        "olgan; bog'lanish niyatini ifodalagan.\n\n" +
        "⚠️ OFERTAGA TAKLIF ETISH (reklama va boshqa " +
        "takliflar) OFERTA EMAS — u faqat oferta yuborishga " +
        "chaqiriq hisoblanadi. Ya'ni reklamadagi narx sizni " +
        "avtomatik shartnoma tuzish huquqiga ega " +
        "qilmaydi.\n\n" +
        "OMMAVIY OFERTA esa boshqacha: unda barcha muhim " +
        "shartlar bo'lgan va murojaat qiladigan HAR QANDAY " +
        "shaxs bilan shartnoma tuzish irodasi ko'rinib " +
        "turgan taklif oferta deb tan olinadi.\n\n" +
        "Misol: do'kon javonidagi narxi ko'rsatilgan tovar; " +
        "avtomatdan sotish.\n\n" +
        "CHAQIRIB OLINMASLIK: oferta adresat tomonidan " +
        "olingan paytdan boshlab, unda belgilangan aksept " +
        "muddati davomida CHAQIRIB OLINISHI mumkin emas — " +
        "ofertaning o'zida yoki uning mohiyatidan boshqacha " +
        "kelib chiqmasa.",
      example:
        "Do'kon javonida narxi ko'rsatilgan tovar — bu " +
        "ommaviy oferta va uni sotishdan asossiz bosh " +
        "tortish mumkin emas.",
      keyPoints: [
        "Oferta aniq adresatga qaratilgan va aniq bo'lishi kerak",
        "Reklama odatda oferta emas",
        "Ommaviy oferta har qanday shaxsga qaratilgan bo'ladi",
        "Oferta muddat davomida chaqirib olinmaydi",
      ],
      warning:
        "Taklifda muhim shartlarni yozsangiz u oferta bo'lib " +
        "qoladi va sizni bog'laydi.",
      lawRefs: [
        { code: "FK", article: "367" },
        { code: "FK", article: "368" },
        { code: "FK", article: "369" },
      ],
    },
    {
      heading: "Aksept va uni chaqirib olish",
      text:
        "AKSEPT — oferta yuborilgan shaxsning uni QABUL QILISH " +
        "haqidagi javobi.\n\n" +
        "Aksept TO'LIQ va SHARTSIZ bo'lishi kerak.\n\n" +
        "⚠️ SUKUT SAQLASH AKSEPT EMAS — qonundan, ish " +
        "muomalasi odatlaridan yoki tomonlarning oldingi ish " +
        "munosabatlaridan boshqacha kelib chiqmasa.\n\n" +
        "Ya'ni \"e'tiroz bildirmasangiz rozi hisoblanasiz\" " +
        "degan yondashuv umumiy qoida sifatida " +
        "ishlamaydi.\n\n" +
        "HARAKAT BILAN AKSEPT: oferta olgan shaxs belgilangan " +
        "muddat ichida shartnoma shartlarini bajarish " +
        "yuzasidan harakatlar qilsa (tovarni jo'natish, " +
        "xizmat ko'rsatish, ish bajarish, tegishli summani " +
        "to'lash), bu aksept hisoblanadi.\n\n" +
        "Bu amalda juda ko'p uchraydi: hisob-fakturaga to'lov " +
        "qilish — bu aksept va shartnoma tuzilgan " +
        "hisoblanadi.\n\n" +
        "CHAQIRIB OLISH: aksept haqidagi xabar akseptning " +
        "o'zidan oldin yoki u bilan bir vaqtda kelsa, aksept " +
        "olinmagan hisoblanadi.\n\n" +
        "AMALIY XULOSA: fikringizni o'zgartirsangiz, " +
        "chaqirib olish xabari akseptdan OLDIN yetib borishi " +
        "kerak — keyin bo'lsa kech.",
      example:
        "Hisob-fakturaga to'lov amalga oshirildi — bu aksept " +
        "va shartnoma tuzilgan hisoblanadi.",
      keyPoints: [
        "Aksept to'liq va shartsiz bo'lishi kerak",
        "Sukut saqlash odatda aksept emas",
        "Shartlarni bajarish harakati aksept hisoblanadi",
        "Chaqirib olish xabari akseptdan oldin yetib borishi kerak",
      ],
      warning:
        "To'lov qilish — shartnomani qabul qilish, keyin " +
        "\"men rozi emas edim\" deyish qiyin.",
      lawRefs: [
        { code: "FK", article: "370" },
        { code: "FK", article: "371" },
      ],
    },
    {
      heading: "Aksept muddatlari",
      text:
        "Muddat masalasi ofertada muddat ko'rsatilgan-" +
        "ko'rsatilmaganiga qarab hal qilinadi.\n\n" +
        "MUDDAT KO'RSATILGAN bo'lsa: shartnoma aksept " +
        "ofertada ko'rsatilgan muddat ichida olingan bo'lsa " +
        "tuzilgan hisoblanadi.\n\n" +
        "MUDDAT KO'RSATILMAGAN bo'lsa: yozma ofertada — " +
        "aksept qonunda belgilangan yoki normal zarur " +
        "bo'lgan vaqt ichida olinishi kerak. Og'zaki ofertada " +
        "esa aksept DARHOL bildirilishi kerak.\n\n" +
        "⚠️ KECHIKIB OLINGAN AKSEPT masalasi amalda muhim: " +
        "u avtomatik yo'q emas. Oferta yuborgan shaxs " +
        "kechikkan akseptni qabul qilishi mumkin — buning " +
        "uchun u ikkinchi tomonni DARHOL xabardor qilishi " +
        "kerak.\n\n" +
        "Shuningdek agar aksept o'z vaqtida yuborilgan " +
        "bo'lsa-yu, kechikib kelgan bo'lsa (masalan aloqa " +
        "sabab), oferta yuborgan shaxs kechikish haqida " +
        "darhol xabar bermasa, aksept kechikmagan " +
        "hisoblanadi.\n\n" +
        "AMALIY XULOSA IKKI TOMONGA: oferta yuborayotganda " +
        "muddatni ANIQ yozing; javob kechikkanda esa " +
        "pozitsiyangizni DARHOL bildiring — jimlik sizga " +
        "qarshi ishlashi mumkin.",
      example:
        "Aksept o'z vaqtida yuborilgan, lekin kechikib " +
        "kelgan — oferta bergan shaxs jim qolsa, shartnoma " +
        "tuzilgan hisoblanadi.",
      keyPoints: [
        "Muddat ko'rsatilgan bo'lsa aksept shu muddatda olinadi",
        "Og'zaki ofertada aksept darhol bildiriladi",
        "Kechikkan aksept qabul qilinishi mumkin",
        "Kechikish haqida darhol xabar berish kerak",
      ],
      warning:
        "Kechikkan javobga jim qolish shartnoma tuzilishiga " +
        "olib kelishi mumkin.",
      lawRefs: [
        { code: "FK", article: "372" },
        { code: "FK", article: "373" },
        { code: "FK", article: "374" },
      ],
    },
    {
      heading: "Boshqa shartlar asosidagi javob",
      text:
        "Bu — muzokaralardagi eng ko'p uchraydigan holat.\n\n" +
        "Ofertani QABUL QILISH haqidagi javob, lekin BOSHQA " +
        "shartlar asosida, AKSEPT HISOBLANMAYDI.\n\n" +
        "⚠️ BUNDAY JAVOB — AKSEPTDAN BOSH TORTISH VA AYNI " +
        "VAQTDA YANGI OFERTA.\n\n" +
        "Ya'ni rollar ALMASHADI: endi javob bergan tomon " +
        "oferent, dastlabki oferta bergan tomon esa " +
        "akseptant bo'ladi.\n\n" +
        "AMALIY OQIBAT: agar siz shartnoma loyihasiga " +
        "o'zgartirish kiritib qaytarsangiz, dastlabki " +
        "taklif kuchini yo'qotadi. Qarshi tomon endi " +
        "umuman shartnoma tuzmaslikni tanlashi mumkin.\n\n" +
        "SHUNING UCHUN: agar dastlabki shartlar sizga " +
        "asosan mos kelsa va faqat kichik tuzatish kerak " +
        "bo'lsa, avval akseptni bildirib, keyin qo'shimcha " +
        "kelishuv taklif qilish xavfsizroq bo'lishi " +
        "mumkin.\n\n" +
        "KELISHMOVCHILIKLAR BAYONNOMASI: amalda " +
        "o'zgartirishlar aynan shu hujjat bilan " +
        "rasmiylashtiriladi va u yozma dalil " +
        "hisoblanadi — muzokara qaysi shartda to'xtaganini " +
        "aniq ko'rsatadi.",
      example:
        "Shartnoma loyihasiga muddat o'zgartirilib " +
        "qaytarildi — bu yangi oferta va dastlabki taklif " +
        "kuchini yo'qotadi.",
      keyPoints: [
        "Boshqa shartlar asosidagi javob aksept emas",
        "U bosh tortish va yangi oferta hisoblanadi",
        "Tomonlarning rollari almashadi",
        "O'zgartirishlar bayonnoma bilan rasmiylashtiriladi",
      ],
      warning:
        "Kichik o'zgartirish ham dastlabki taklifni bekor " +
        "qiladi.",
      lawRefs: [{ code: "FK", article: "375" }],
    },
    {
      heading: "Shartnomaning tuzilgan joyi",
      text:
        "Shartnomada tuzilgan joy ko'rsatilmagan bo'lsa, u " +
        "OFERTA YUBORGAN fuqaroning yashash joyida yoki " +
        "yuridik shaxsning joylashgan yerida tuzilgan deb " +
        "e'tirof etiladi.\n\n" +
        "⚠️ NIMA UCHUN BU MUHIM: tuzilgan joy bir necha " +
        "amaliy masalani hal qiladi — nizo qaysi sudga " +
        "berilishi, qaysi hudud qoidalari qo'llanilishi, " +
        "ayrim hollarda esa qaysi davlat qonuni " +
        "qo'llanilishi.\n\n" +
        "Ayniqsa turli hududlardagi yoki turli " +
        "davlatlardagi tomonlar o'rtasidagi shartnomalarda " +
        "bu masala jiddiy ahamiyatga ega.\n\n" +
        "AMALIY MASLAHAT: shartnomada tuzilgan joyni " +
        "ATAYLAB ko'rsating — bu keyinchalik " +
        "kelishmovchilikni oldini oladi.\n\n" +
        "Shuningdek shartnomada NIZOLARNI HAL QILISH " +
        "TARTIBINI ham alohida band bilan yozib qo'ying: " +
        "qaysi sud, sudgacha tartib bormi, muddat qancha. " +
        "Bu bandni oldindan kelishish nizo chiqqandan keyin " +
        "kelishishdan ancha oson.",
      example:
        "Turli viloyatdagi tomonlar shartnomada joyni " +
        "ko'rsatmadi — nizoda qaysi sudga murojaat qilish " +
        "masalasi qo'shimcha bahsga aylandi.",
      keyPoints: [
        "Joy ko'rsatilmasa oferta yuborgan tomon joyi hisoblanadi",
        "Tuzilgan joy sud va qo'llaniladigan qoidalarni belgilaydi",
        "Uni shartnomada ataylab ko'rsating",
        "Nizolarni hal qilish bandini ham yozing",
      ],
      warning:
        "Nizo bandini yozmaslik — nizo boshlanishini " +
        "sekinlashtiradi va qimmatlashtiradi.",
      lawRefs: [{ code: "FK", article: "376" }],
    },
    {
      heading: "Majburiy tartibda shartnoma tuzish",
      text:
        "Ayrim hollarda shartnoma tuzish MAJBURIY bo'ladi — " +
        "qonunga muvofiq yoki ixtiyoriy olingan majburiyat " +
        "asosida (masalan dastlabki shartnoma yoki ommaviy " +
        "shartnoma).\n\n" +
        "TARTIB: shartnoma loyihasi (oferta) yuborilgan " +
        "tomon uni qonunda belgilangan muddat ichida ko'rib " +
        "chiqishi va javob berishi kerak. Javob uch xil " +
        "bo'lishi mumkin: aksept; akseptdan bosh tortish; " +
        "KELISHMOVCHILIKLAR BAYONNOMASI bilan aksept.\n\n" +
        "⚠️ KELISHMOVCHILIKLAR BAYONNOMASI ENG MUHIM " +
        "VOSITA: u orqali shartnoma tuzishga rozilik " +
        "bildiriladi, lekin ayrim shartlar bo'yicha e'tiroz " +
        "qayd etiladi.\n\n" +
        "Bayonnoma olingan tomon uni qonunda belgilangan " +
        "muddat ichida ko'rib chiqishi va natijasi haqida " +
        "xabar berishi kerak.\n\n" +
        "BOSH TORTILSA yoki javob berilmasa: shartnoma " +
        "tuzishga majbur bo'lgan tomon shartnoma tuzishdan " +
        "asossiz bosh tortsa, ikkinchi tomon SUDGA murojaat " +
        "qilishi mumkin. Sud shartnoma tuzishga majbur " +
        "qilishi va bo'yin tovlash bilan yetkazilgan " +
        "ZARARNI undirishi mumkin.\n\n" +
        "SHARTNOMA OLDIDAN BO'LADIGAN NIZOLAR ham sud " +
        "tomonidan ko'rib chiqiladi — bunda sud aynan " +
        "kelishilmagan shartlar bo'yicha qaror chiqaradi.",
      example:
        "Majburiy shartnoma bo'yicha javob berilmadi — " +
        "ikkinchi tomon sud orqali tuzishni talab qilishi " +
        "mumkin.",
      keyPoints: [
        "Ayrim hollarda shartnoma tuzish majburiy",
        "Javob aksept, bosh tortish yoki bayonnoma bo'lishi mumkin",
        "Bayonnoma e'tirozni rasman qayd etadi",
        "Asossiz bosh tortishda sud majbur qiladi va zarar undiriladi",
      ],
      warning:
        "Majburiy shartnomada javob bermaslik — javobgarlikka " +
        "olib keladi.",
      lawRefs: [
        { code: "FK", article: "377" },
        { code: "FK", article: "378" },
      ],
    },
    {
      heading: "Kimoshdi savdosida shartnoma tuzish",
      text:
        "Shartnoma KIMOSHDI SAVDOSI orqali ham tuzilishi mumkin " +
        "— shartnoma savdoda g'olib chiqqan shaxs bilan " +
        "tuziladi.\n\n" +
        "SHAKLLARI: auksion (g'olib — eng yuqori narxni " +
        "taklif qilgan shaxs) va tanlov (g'olib — tanlov " +
        "komissiyasi xulosasiga ko'ra eng yaxshi shartlarni " +
        "taklif qilgan shaxs).\n\n" +
        "TASHKIL ETISH: savdo haqida qonunda belgilangan " +
        "muddatda XABAR e'lon qilinadi. Xabarda savdo " +
        "vaqti, joyi, shakli, predmeti, rasmiylashtirish " +
        "tartibi va boshlang'ich narx ko'rsatiladi.\n\n" +
        "⚠️ ZAKALAT: ishtirokchilar zakalat kiritadi. " +
        "Savdo o'tkazilmasa yoki ishtirokchi g'olib " +
        "chiqmasa zakalat qaytariladi. G'olib chiqqan " +
        "shaxs shartnoma tuzishdan bosh tortsa esa zakalat " +
        "QAYTARILMAYDI.\n\n" +
        "QOIDALAR BUZILSA: kimoshdi savdosi qoidalarini " +
        "buzgan holda o'tkazilgan savdo manfaatdor " +
        "shaxsning da'vosiga binoan sud tomonidan HAQIQIY " +
        "EMAS deb topilishi mumkin.\n\n" +
        "Savdo haqiqiy emas deb topilishi u bilan " +
        "tuzilgan shartnomaning ham haqiqiy emasligiga " +
        "olib keladi.\n\n" +
        "AMALIY XULOSA: savdo shartlarini oldindan diqqat " +
        "bilan o'qing va buzilish bo'lsa uni o'sha " +
        "kunning o'zida yozma qayd eting.",
      example:
        "Savdo shartlari e'lon qilinganidan boshqacha " +
        "o'tkazildi — ishtirokchi uni sudda " +
        "nizolashtirishi mumkin.",
      keyPoints: [
        "Savdo auksion yoki tanlov shaklida bo'ladi",
        "Xabar oldindan e'lon qilinadi",
        "G'olib bosh tortsa zakalat qaytarilmaydi",
        "Qoidalar buzilsa savdo haqiqiy emas deb topiladi",
      ],
      warning:
        "Savdodan keyin shartnoma tuzishdan bosh tortish — " +
        "zakalatni yo'qotish demakdir.",
      lawRefs: [
        { code: "FK", article: "379" },
        { code: "FK", article: "380" },
        { code: "FK", article: "381" },
      ],
    },
  ],
};

module.exports = { LESSON };
