"use strict";
/** SOLIQ MODULI — 1-DARS: SOLIQ TIZIMI ASOSLARI. SK 1–18. */

const LESSON = {
  key: "soliq-asoslari",
  category: "tax",
  level: "basic",
  order: 9010,
  title: "Soliq tizimi asoslari",
  desc:
    "Soliq qonunchiligi, uning vaqt bo'yicha amal qilishi, soliq " +
    "solish prinsiplari, soliq to'lovchining haqligi prezumpsiyasi, " +
    "soliq va yig'im turlari hamda maxsus soliq rejimlari.",
  objectives: [
    "Soliq qonunchiligi nimadan iboratligini bilasiz",
    "Soliq qonuni vaqt bo'yicha qanday amal qilishini bilasiz",
    "Soliq solish prinsiplarini bilasiz",
    "Haqlik prezumpsiyasidan foydalanishni bilasiz",
    "Soliq va yig'im turlarini ajrata olasiz",
    "Maxsus soliq rejimlari nima ekanini bilasiz",
  ],
  practicalSteps: [
    "Soliq talabining aniq qonuniy asosini har doim yozma so'rang",
    "Qonun noaniq bo'lsa haqlik prezumpsiyasiga tayaning",
    "Yangi soliq qoidasi qachondan amal qilishini tekshiring",
    "Faoliyatingizga qaysi soliq rejimi mos kelishini oldindan hisoblang",
    "Xalqaro shartnoma qo'llaniladigan holatlarni aniqlang",
  ],
  sections: [
    {
      heading: "Soliq qonunchiligi va uning tarkibi",
      text:
        "SOLIQ TO'G'RISIDAGI QONUNCHILIK Soliq kodeksidan va " +
        "unga muvofiq qabul qilinadigan boshqa hujjatlardan " +
        "iborat.\n\n" +
        "Soliq kodeksi soliqlar va yig'imlarni belgilash, " +
        "joriy etish, hisoblab chiqarish, to'lash hamda " +
        "soliq nazorati bilan bog'liq munosabatlarni " +
        "tartibga soladi.\n\n" +
        "⚠️ ENG MUHIM HIMOYA QOIDASI: normativ-huquqiy " +
        "hujjatlar yoki ularning qismlari Soliq kodeksi " +
        "qoidalariga MUVOFIQ EMAS deb topilishi mumkin.\n\n" +
        "Ya'ni vazirlik yoki idora hujjati kodeksga zid " +
        "bo'lsa, u qo'llanilmaydi.\n\n" +
        "AMALDA BU JUDA MUHIM: sizga \"bizning " +
        "yo'riqnomamizda shunday\" deyilsa, birinchi savol " +
        "— bu yo'riqnoma kodeksga mos keladimi.\n\n" +
        "XALQARO SHARTNOMALAR: O'zbekiston " +
        "Respublikasining soliq solishga oid xalqaro " +
        "shartnomalari milliy qoidalardan boshqacha " +
        "qoidalar belgilagan bo'lsa, XALQARO " +
        "SHARTNOMA qoidalari qo'llaniladi.\n\n" +
        "Bu ayniqsa chet el bilan ishlaydigan " +
        "tadbirkorlar uchun muhim: ikki tomonlama soliq " +
        "solishning oldini olish to'g'risidagi " +
        "shartnomalar aynan shu asosda ishlaydi.\n\n" +
        "MUDDATLARNI HISOBLASH tartibi ham kodeksda " +
        "belgilangan — bu soliq hisobotini topshirish " +
        "va to'lov muddatlarini to'g'ri aniqlash uchun " +
        "kerak.",
      example:
        "Idoraviy hujjatda kodeksda yo'q talab " +
        "belgilangan edi — bunday talab qo'llanilmaydi.",
      keyPoints: [
        "Soliq qonunchiligi Soliq kodeksidan boshlanadi",
        "Kodeksga zid hujjat qo'llanilmaydi",
        "Xalqaro shartnoma ustunlikka ega bo'lishi mumkin",
        "Muddatlarni hisoblash tartibi kodeksda belgilangan",
      ],
      warning:
        "\"Yo'riqnomada shunday\" degan javob qonuniy " +
        "asos emas — hujjat darajasini so'rang.",
      lawRefs: [
        { code: "SK", article: "1" },
        { code: "SK", article: "2" },
        { code: "SK", article: "3" },
        { code: "SK", article: "5" },
        { code: "SK", article: "6" },
      ],
    },
    {
      heading: "Soliq qonuni vaqt bo'yicha qanday amal qiladi",
      text:
        "Bu — soliq huquqidagi eng muhim himoya " +
        "qoidalaridan biri.\n\n" +
        "⚠️ ASOSIY QOIDA: soliqlarni belgilaydigan, " +
        "soliq stavkalarini oshiradigan, soliq " +
        "to'lovchilarning ahvolini YOMONLASHTIRADIGAN " +
        "hujjatlar ORQAGA QAYTA amal qilmaydi.\n\n" +
        "Ya'ni yangi, og'irroq qoida faqat kelajakka " +
        "nisbatan qo'llaniladi. O'tgan davr uchun eski " +
        "qoidalar amal qiladi.\n\n" +
        "TESKARI HOLAT ESA BOSHQACHA: soliq " +
        "to'lovchining ahvolini YAXSHILAYDIGAN " +
        "hujjatlar (imtiyoz beruvchi, javobgarlikni " +
        "yumshatuvchi) orqaga qayta amal qilishi " +
        "MUMKIN — agar hujjatning o'zida shunday " +
        "ko'rsatilgan bo'lsa.\n\n" +
        "KUCHGA KIRISH: soliq to'g'risidagi hujjatlar " +
        "odatda belgilangan muddat o'tgach kuchga " +
        "kiradi — bu soliq to'lovchiga tayyorgarlik " +
        "ko'rish imkonini beradi.\n\n" +
        "AMALIY XULOSA: soliq organi o'tgan davr " +
        "uchun yangi qoidani qo'llayotgan bo'lsa, " +
        "bu qonunga xilof.\n\n" +
        "Shuning uchun tekshiruv natijasida " +
        "hisoblangan soliqlarni ko'rib chiqayotganda " +
        "har bir davr uchun QAYSI TAHRIRDAGI qoida " +
        "qo'llanilganini tekshiring. Bu ko'pincha " +
        "e'tirozning eng kuchli asosi bo'ladi.",
      example:
        "Yangi stavka o'tgan yil daromadiga " +
        "qo'llanildi — bu qonunga xilof va " +
        "nizolashtirilishi mumkin.",
      keyPoints: [
        "Ahvolni yomonlashtiruvchi qoida orqaga qayta amal qilmaydi",
        "Yaxshilaydigan qoida qayta amal qilishi mumkin",
        "Kuchga kirish uchun muddat beriladi",
        "Har bir davr uchun tegishli tahrirni tekshiring",
      ],
      warning:
        "O'tgan davr uchun yangi qoidani qo'llash — " +
        "eng keng tarqalgan qonunbuzarlik.",
      lawRefs: [{ code: "SK", article: "4" }],
    },
    {
      heading: "Soliq solish prinsiplari",
      text:
        "Soliq kodeksi bir necha PRINSIPNI belgilaydi va " +
        "ular nizoli holatlarda hal qiluvchi " +
        "ahamiyatga ega.\n\n" +
        "MAJBURIYLIK PRINSIPI: har bir shaxs qonunda " +
        "belgilangan soliqlarni to'lashi shart. " +
        "Lekin hech kim qonunda nazarda " +
        "TUTILMAGAN soliqni to'lashga majbur " +
        "qilinishi mumkin emas.\n\n" +
        "⚠️ IKKINCHI JUMLA AMALDA MUHIM: har qanday " +
        "to'lov talabining aniq qonuniy asosi " +
        "bo'lishi kerak.\n\n" +
        "ANIQLIK PRINSIPI: soliq qonunchiligi " +
        "shunday shakllantirilishi kerakki, har bir " +
        "soliq to'lovchi qanday soliqni, qancha " +
        "miqdorda va qachon to'lashi kerakligini " +
        "aniq bilsin.\n\n" +
        "Shuningdek soliq organlari soliq " +
        "to'lovchilar bilan HAMKORLIK qilishi " +
        "nazarda tutilgan.\n\n" +
        "ADOLATLILIK PRINSIPI: soliq solish umumiy " +
        "va teng bo'lishi kerak. Kamsituvchi " +
        "xususiyatga ega soliqlar belgilanmaydi.\n\n" +
        "YAGONALIK PRINSIPI: soliq tizimi butun " +
        "hududda yagona bo'ladi.\n\n" +
        "OSHKORALIK PRINSIPI: soliq to'g'risidagi " +
        "hujjatlar rasman e'lon qilinadi. E'lon " +
        "qilinmagan hujjat qo'llanilmaydi.\n\n" +
        "AMALIY XULOSA: prinsiplar shunchaki " +
        "deklaratsiya emas — ular e'tiroz va " +
        "shikoyatda haqiqiy dalil sifatida " +
        "ishlatiladi.",
      example:
        "Qonunda nazarda tutilmagan to'lov talab " +
        "qilindi — majburiylik prinsipi bunga " +
        "yo'l qo'ymaydi.",
      keyPoints: [
        "Faqat qonunda belgilangan soliq to'lanadi",
        "Soliq qoidalari aniq va tushunarli bo'lishi kerak",
        "Soliq solish umumiy va teng bo'ladi",
        "E'lon qilinmagan hujjat qo'llanilmaydi",
      ],
      warning:
        "Prinsiplarga tayanish e'tirozni sezilarli " +
        "kuchaytiradi.",
      lawRefs: [
        { code: "SK", article: "7" },
        { code: "SK", article: "8" },
        { code: "SK", article: "9" },
        { code: "SK", article: "10" },
        { code: "SK", article: "11" },
        { code: "SK", article: "12" },
      ],
    },
    {
      heading: "Soliq to'lovchining haqligi prezumpsiyasi",
      text:
        "Bu — soliq to'lovchi uchun ENG KUCHLI himoya " +
        "vositasi va u ko'pchilikka noma'lum.\n\n" +
        "⚠️ MOHIYATI: soliq to'lovchining barcha " +
        "harakatlari VIJDONLI deb hisoblanadi va " +
        "soliq qonunchiligidagi BARTARAF ETIB " +
        "BO'LMAYDIGAN barcha ziddiyatlar hamda " +
        "noaniqliklar SOLIQ TO'LOVCHI FOYDASIGA " +
        "talqin qilinadi.\n\n" +
        "Ya'ni qoida ikki xil tushunilishi mumkin " +
        "bo'lsa, siz uchun qulay talqin " +
        "qo'llanilishi kerak.\n\n" +
        "ISBOT YUKI: aybdorlikni isbotlash yuki " +
        "SOLIQ ORGANIDA. Siz o'z aybsizligingizni " +
        "isbotlashingiz shart emas.\n\n" +
        "AMALIY QO'LLANISHI: e'tiroz yozayotganda " +
        "aynan shu prinsipga havola qiling va " +
        "qoidaning noaniqligini yoki ikki xil " +
        "talqin qilinishi mumkinligini " +
        "ko'rsating.\n\n" +
        "BITIMLARNING IQTISODIY MAZMUNI: bitim " +
        "faqat rasmiy jihatdan emas, iqtisodiy " +
        "mazmuni bo'yicha ham baholanadi.\n\n" +
        "⚠️ BU IKKI TOMONLAMA ISHLAYDI: soliq " +
        "organi soxta bitimlarni tan olmasligi " +
        "mumkin; lekin siz ham haqiqiy " +
        "faoliyatingizni shakliy nuqson bilan " +
        "rad etishga qarshi shu qoidaga " +
        "tayanishingiz mumkin.\n\n" +
        "LOZIM DARAJADA EHTIYOTKORLIK: kontragent " +
        "tanlashda ehtiyotkorlik ko'rsatish " +
        "kerak. Bu talab bajarilgan bo'lsa, " +
        "kontragentning qonunbuzarligi uchun " +
        "javobgarlik sizga yuklanmasligi kerak.\n\n" +
        "AMALIY QADAM: har bir kontragent bo'yicha " +
        "tekshiruv hujjatlarini (ro'yxatdan " +
        "o'tgani, litsenziyasi, rekvizitlari) " +
        "saqlang.",
      example:
        "Qoida ikki xil talqin qilinishi mumkin " +
        "edi — soliq to'lovchi foydasiga talqin " +
        "qilinishi kerak.",
      keyPoints: [
        "Soliq to'lovchi harakatlari vijdonli deb hisoblanadi",
        "Noaniqlik soliq to'lovchi foydasiga talqin qilinadi",
        "Isbot yuki soliq organida",
        "Kontragentni tekshirish hujjatlarini saqlang",
      ],
      warning:
        "Kontragentni tekshirmaslik javobgarlikni " +
        "sizga o'tkazishi mumkin.",
      lawRefs: [
        { code: "SK", article: "13" },
        { code: "SK", article: "14" },
        { code: "SK", article: "15" },
      ],
    },
    {
      heading: "Soliqlar va yig'imlarning turlari",
      text:
        "SOLIQ — davlat budjetiga majburiy, qaytarilmas " +
        "va bevosita qarshi ta'minotsiz to'lanadigan " +
        "to'lov.\n\n" +
        "YIG'IM — muayyan huquqiy ahamiyatga ega " +
        "harakatlar amalga oshirilishi (ruxsatnoma " +
        "berish, ro'yxatga olish) uchun to'lanadigan " +
        "to'lov.\n\n" +
        "⚠️ FARQ AMALDA MUHIM: soliq to'lasangiz " +
        "evaziga aniq bir xizmat olmaysiz; yig'im esa " +
        "aniq harakat bilan bog'langan.\n\n" +
        "Shuning uchun yig'im to'lanib, harakat " +
        "amalga oshirilmasa, uni qaytarishni talab " +
        "qilish mumkin.\n\n" +
        "SOLIQLARNING TURLARI kodeksda " +
        "belgilangan — ular respublika va mahalliy " +
        "darajada bo'linadi.\n\n" +
        "ASOSIY SOLIQLAR: qo'shilgan qiymat solig'i; " +
        "aksiz solig'i; foyda solig'i; jismoniy " +
        "shaxslardan olinadigan daromad solig'i; " +
        "ijtimoiy soliq; yer solig'i; mol-mulk " +
        "solig'i; suv resurslaridan foydalanganlik " +
        "uchun soliq; yer osti boyliklaridan " +
        "foydalanganlik uchun soliqlar.\n\n" +
        "AMALIY XULOSA: har bir soliq bo'yicha " +
        "beshta narsani bilish kerak — kim " +
        "to'laydi, nima soliq obyekti, baza qanday " +
        "aniqlanadi, stavka qancha, qachon " +
        "to'lanadi.\n\n" +
        "Bu beshlik butun soliq kodeksining " +
        "tuzilmasini tashkil qiladi va har bir " +
        "soliq shu tartibda bayon etilgan.",
      example:
        "Yig'im to'landi, lekin ruxsatnoma " +
        "berilmadi — uni qaytarishni talab qilish " +
        "mumkin.",
      keyPoints: [
        "Soliq qarshi ta'minotsiz to'lanadi",
        "Yig'im aniq harakat bilan bog'langan",
        "Soliqlar respublika va mahalliy turlarga bo'linadi",
        "Har bir soliqda beshta element bor",
      ],
      warning:
        "Soliq elementlaridan birortasi qonunda " +
        "belgilanmagan bo'lsa, soliq belgilanmagan " +
        "hisoblanadi.",
      lawRefs: [
        { code: "SK", article: "16" },
        { code: "SK", article: "17" },
      ],
    },
    {
      heading: "Maxsus soliq rejimlari",
      text:
        "MAXSUS SOLIQ REJIMI — umumiy tartibdan farq " +
        "qiladigan, soddalashtirilgan soliq to'lash " +
        "tizimi.\n\n" +
        "⚠️ NIMA UCHUN KERAK: kichik biznes uchun " +
        "to'liq soliq hisobini yuritish qimmat va " +
        "murakkab. Maxsus rejim buni " +
        "soddalashtiradi.\n\n" +
        "Odatda bir necha soliq o'rniga bitta " +
        "soliq to'lanadi va hisobot ham " +
        "soddalashtiriladi.\n\n" +
        "ASOSIY MAXSUS REJIM — AYLANMADAN " +
        "OLINADIGAN SOLIQ: u belgilangan " +
        "chegaradan past daromadga ega soliq " +
        "to'lovchilar uchun mo'ljallangan.\n\n" +
        "SHUNINGDEK maxsus rejimlar qatoriga " +
        "mahsulot taqsimotiga oid bitimlar " +
        "doirasidagi faoliyat, maxsus iqtisodiy " +
        "zonalar ishtirokchilari va boshqa " +
        "toifalar uchun belgilangan tartiblar " +
        "kiradi.\n\n" +
        "⚠️ TANLASH — MUHIM QAROR: rejimni " +
        "tanlashdan oldin ikkala variantni " +
        "HISOBLAB CHIQING.\n\n" +
        "Aylanmadan olinadigan soliq " +
        "daromaddan hisoblanadi va xarajatlar " +
        "hisobga olinmaydi. Xarajatlaringiz " +
        "yuqori bo'lsa, umumiy rejim " +
        "foydaliroq bo'lishi mumkin.\n\n" +
        "Aksincha, xarajatlar kam bo'lsa " +
        "(masalan xizmat ko'rsatish " +
        "sohasida), maxsus rejim ancha " +
        "qulay.\n\n" +
        "AMALIY MASLAHAT: yil boshida ikkala " +
        "variant bo'yicha taxminiy hisob " +
        "qiling va shundan keyin tanlang. " +
        "Rejimni o'zgartirish odatda yil " +
        "davomida cheklangan.",
      example:
        "Xarajatlari yuqori tadbirkor maxsus " +
        "rejimni tanladi — natijada ko'proq " +
        "soliq to'ladi.",
      keyPoints: [
        "Maxsus rejim soliq hisobini soddalashtiradi",
        "Asosiy rejim — aylanmadan olinadigan soliq",
        "Unda xarajatlar hisobga olinmaydi",
        "Tanlashdan oldin ikkala variantni hisoblang",
      ],
      warning:
        "Rejimni yil o'rtasida o'zgartirish odatda " +
        "mumkin emas.",
      lawRefs: [{ code: "SK", article: "18" }],
    },
  ],
};

module.exports = { LESSON };
