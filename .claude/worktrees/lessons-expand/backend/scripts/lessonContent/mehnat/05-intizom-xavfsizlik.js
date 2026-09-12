"use strict";
/**
 * MEHNAT HUQUQI — 5-QISM: INTIZOM, JAVOBGARLIK, XAVFSIZLIK,
 * ALOHIDA TOIFALAR (35–45-mavzular)
 *
 * Ketma-ketlik: intizom → jazo → moddiy javobgarlik (ikki tomonlama)
 * → mehnatni muhofaza qilish → nazorat → himoyalangan toifalar.
 */

const SECTIONS = [
  /* ── 35 ────────────────────────────────────────────────────── */
  {
    heading: "Mehnat intizomi",
    text:
      "Mehnat intizomi — barcha xodimlar " +
      "uchun majburiy bo'lgan xulq-atvor " +
      "qoidalariga bo'ysunish.\n\n" +
      "U ikki yo'l bilan ta'minlanadi: " +
      "RAG'BATLANTIRISH (mukofot, " +
      "e'tirof) va JAZO. Qonun " +
      "birinchisini ustun qo'yadi.\n\n" +
      "Intizom qoidalari qayerda " +
      "yoziladi? Ichki mehnat tartibi " +
      "qoidalarida, jamoa shartnomasida " +
      "va ayrim sohalarda intizom " +
      "to'g'risidagi maxsus ustav yoki " +
      "nizomlarda.\n\n" +
      "⚠️ MUHIM SHART: xodim faqat O'ZI " +
      "TANISHTIRILGAN qoidalarga rioya " +
      "qilishi mumkin. Ish beruvchi uni " +
      "ichki qoidalar bilan " +
      "tanishtirmagan bo'lsa, o'sha " +
      "qoidani buzgani uchun jazolash " +
      "asossiz bo'ladi.\n\n" +
      "Shu sababli ishga qabul qilish " +
      "bosqichidagi tanishtirish " +
      "tartib-taomili shunchalik " +
      "muhim.",
    example:
      "Xodim ichki qoidada yozilgan " +
      "kiyinish talabini buzgani uchun " +
      "hayfsan oldi. Lekin u bu qoida " +
      "bilan tanishtirilganini " +
      "tasdiqlovchi imzo yo'q — jazo " +
      "bekor qilinishi mumkin.",
    keyPoints: [
      "Intizom rag'batlantirish va jazo bilan ta'minlanadi",
      "Qoidalar ichki hujjatlarda yoziladi",
      "Xodim faqat tanishtirilgan qoidaga javob beradi",
      "Tanishtirish imzo bilan tasdiqlanadi",
    ],
    warning:
      "Ichki mehnat tartibi qoidalarini " +
      "bir marta o'qib chiqing — " +
      "ko'pchilik ularni umuman " +
      "ko'rmagan bo'ladi.",
    lawRefs: [
      { code: "MK", article: "295" },
      { code: "MK", article: "297" },
      { code: "MK", article: "22" },
    ],
  },

  /* ── 36 ────────────────────────────────────────────────────── */
  {
    heading: "Intizomiy jazo choralari",
    text:
      "Xodim mehnat majburiyatlarini " +
      "buzsa, unga intizomiy jazo " +
      "qo'llanilishi mumkin.\n\n" +
      "⚠️ JAZO CHORALARI RO'YXATI YOPIQ. " +
      "Qonunda ko'rsatilmagan chorani " +
      "qo'llash mumkin emas — jumladan " +
      "PUL JARIMASI. Ish haqidan " +
      "\"jarima\" ushlab qolish qonuniy " +
      "intizomiy chora emas.\n\n" +
      "Qo'llash TARTIBI ham qat'iy. " +
      "Asosiy bosqichlar: xodimdan YOZMA " +
      "tushuntirish talab qilish; " +
      "buzilish holatini aniqlash; " +
      "buyruq chiqarish; xodimni buyruq " +
      "bilan tanishtirish.\n\n" +
      "Yozma tushuntirish talab " +
      "qilinmasdan jazo qo'llash — eng " +
      "ko'p uchraydigan protsessual " +
      "buzilish va u jazoni bekor " +
      "qilish uchun mustaqil asos " +
      "bo'ladi.\n\n" +
      "Bitta huquqbuzarlik uchun faqat " +
      "BITTA jazo qo'llaniladi.",
    example:
      "Xodimga tushuntirish so'ralmasdan " +
      "darhol hayfsan e'lon qilindi. " +
      "Jazoning mohiyati asosli " +
      "bo'lsa ham, tartib buzilgani " +
      "uchun u bekor qilinishi mumkin.",
    keyPoints: [
      "Jazo choralari ro'yxati qonunda yopiq",
      "Pul jarimasi intizomiy chora emas",
      "Yozma tushuntirish talab qilish majburiy",
      "Bitta huquqbuzarlik uchun bitta jazo",
    ],
    warning:
      "Tushuntirish yozishdan bosh " +
      "tortmang — o'z pozitsiyangizni " +
      "yozma bayon qilish keyinchalik " +
      "asosiy himoyangiz bo'ladi.",
    lawRefs: [
      { code: "MK", article: "300" },
      { code: "MK", article: "301" },
      { code: "MK", article: "312" },
      { code: "MK", article: "313" },
    ],
  },

  /* ── 37 ────────────────────────────────────────────────────── */
  {
    heading: "Jazo muddati va uning olib tashlanishi",
    text:
      "Intizomiy jazo abadiy emas — u " +
      "muddat bilan cheklangan.\n\n" +
      "Birinchi muddat — QO'LLASH " +
      "muddati. Jazo huquqbuzarlik " +
      "aniqlangan kundan boshlab " +
      "belgilangan muddat ichida " +
      "qo'llanilishi kerak. Bundan " +
      "tashqari huquqbuzarlik sodir " +
      "etilgan kundan boshlab ham " +
      "umumiy chegara mavjud.\n\n" +
      "Muddat o'tgach jazo qo'llab " +
      "bo'lmaydi. Ya'ni bir yil oldingi " +
      "voqea uchun bugun hayfsan " +
      "berish qonunga zid.\n\n" +
      "Ikkinchi muddat — AMAL QILISH " +
      "muddati. Belgilangan vaqt o'tgach " +
      "va yangi jazo qo'llanilmagan " +
      "bo'lsa, xodim jazolanmagan deb " +
      "hisoblanadi.\n\n" +
      "Jazo muddatidan OLDIN ham olib " +
      "tashlanishi mumkin — ish " +
      "beruvchining tashabbusi bilan " +
      "yoki xodimning iltimosiga " +
      "ko'ra.",
    example:
      "Xodimga bir yil oldingi " +
      "kechikish uchun bugun jazo " +
      "berildi. Qo'llash muddati " +
      "o'tgan — bu jazoni bekor " +
      "qilish uchun mustaqil asos.",
    keyPoints: [
      "Jazoni qo'llash muddati cheklangan",
      "Muddat o'tgach jazo qo'llab bo'lmaydi",
      "Jazoning amal qilish muddati ham belgilangan",
      "Jazo muddatidan oldin olib tashlanishi mumkin",
    ],
    warning:
      "Jazo buyrug'idagi SANALARGA " +
      "e'tibor bering: huquqbuzarlik " +
      "qachon sodir bo'lgan va qachon " +
      "aniqlangan — bu hal qiluvchi " +
      "bo'lishi mumkin.",
    lawRefs: [
      { code: "MK", article: "314" },
      { code: "MK", article: "315" },
    ],
  },

  /* ── 38 ────────────────────────────────────────────────────── */
  {
    heading: "Xodimning moddiy javobgarligi",
    text:
      "Xodim ish beruvchiga zarar " +
      "yetkazsa, uni qoplashi mumkin. " +
      "Lekin bu javobgarlik qat'iy " +
      "cheklangan.\n\n" +
      "Javobgarlik yuzaga kelishi uchun " +
      "bir necha SHART birgalikda " +
      "bo'lishi kerak: haqiqiy zarar " +
      "mavjudligi; xodimning " +
      "g'ayriqonuniy xatti-harakati; " +
      "aybi; xatti-harakat bilan zarar " +
      "o'rtasidagi sababiy bog'liqlik.\n\n" +
      "Umumiy qoida — CHEKLANGAN " +
      "javobgarlik: zarar xodimning " +
      "o'rtacha oylik ish haqi doirasida " +
      "qoplanadi.\n\n" +
      "TO'LIQ javobgarlik istisno " +
      "hisoblanadi va faqat qonunda " +
      "ko'rsatilgan hollarda qo'llaniladi " +
      "(masalan to'liq javobgarlik " +
      "to'g'risida shartnoma tuzilgan " +
      "bo'lsa yoki zarar ataylab " +
      "yetkazilgan bo'lsa).\n\n" +
      "⚠️ Javobgarlikni ISTISNO " +
      "qiluvchi holatlar ham bor: " +
      "oddiy xo'jalik tavakkalchiligi, " +
      "favqulodda holat, zaruriy " +
      "mudofaa va ish beruvchining " +
      "mol-mulkni saqlash sharoitini " +
      "ta'minlamaganligi.",
    example:
      "Ombor qulflanmagan va mol-mulk " +
      "yo'qoldi. Ish beruvchi saqlash " +
      "sharoitini ta'minlamagan " +
      "bo'lsa, xodimning javobgarligi " +
      "istisno qilinishi mumkin.",
    keyPoints: [
      "Javobgarlik uchun bir necha shart birgalikda kerak",
      "Umumiy qoida — o'rtacha oylik ish haqi doirasida",
      "To'liq javobgarlik faqat qonundagi hollarda",
      "Javobgarlikni istisno qiluvchi holatlar mavjud",
    ],
    warning:
      "To'liq moddiy javobgarlik " +
      "shartnomasini imzolashdan oldin " +
      "o'ylab ko'ring — u sizning " +
      "javobgarligingizni keskin " +
      "oshiradi.",
    lawRefs: [
      { code: "MK", article: "318" },
      { code: "MK", article: "337" },
      { code: "MK", article: "338" },
      { code: "MK", article: "340" },
      { code: "MK", article: "341" },
    ],
  },

  /* ── 39 ────────────────────────────────────────────────────── */
  {
    heading: "Ish beruvchining moddiy javobgarligi",
    text:
      "Moddiy javobgarlik IKKI TOMONLAMA. " +
      "Ish beruvchi ham xodim oldida " +
      "javob beradi — bu ko'pincha " +
      "unutiladi.\n\n" +
      "Ish beruvchining javobgarligi " +
      "yuzaga keladigan asosiy hollar:\n\n" +
      "(1) ISH HAQINI KECHIKTIRISH — " +
      "asosiy qarzdan tashqari " +
      "qo'shimcha to'lov nazarda " +
      "tutilgan;\n\n" +
      "(2) XODIMNING MOL-MULKIGA zarar " +
      "yetkazish;\n\n" +
      "(3) XODIMNING SOG'LIG'IGA ziyon " +
      "yetkazish — bu eng jiddiy holat " +
      "va u ishlab chiqarishdagi " +
      "baxtsiz hodisa yoki kasb " +
      "kasalligi bilan bog'liq " +
      "bo'ladi;\n\n" +
      "(4) noqonuniy ishdan bo'shatish " +
      "yoki chetlashtirish natijasida " +
      "xodimni ishlash imkoniyatidan " +
      "mahrum qilish.\n\n" +
      "Sog'liqqa ziyon yetkazilganda " +
      "ARALASH javobgarlik ham bo'lishi " +
      "mumkin — agar xodimning o'zi " +
      "ham qoidalarni buzgan bo'lsa.",
    example:
      "Ish beruvchi xavfsizlik " +
      "vositalarini bermadi va xodim " +
      "jarohat oldi. Ish beruvchi " +
      "davolanish xarajatlari va " +
      "yo'qotilgan daromad uchun " +
      "javobgar bo'ladi.",
    keyPoints: [
      "Moddiy javobgarlik ikki tomonlama",
      "Ish haqini kechiktirish uchun qo'shimcha to'lov nazarda tutilgan",
      "Sog'liqqa ziyon eng jiddiy holat hisoblanadi",
      "Xodimning aybi bo'lsa aralash javobgarlik qo'llaniladi",
    ],
    warning:
      "Jarohat olsangiz DARHOL tibbiy " +
      "yordamga murojaat qiling va " +
      "hodisani rasmiy qayd ettiring — " +
      "keyinchalik bog'liqlikni " +
      "isbotlash qiyin bo'ladi.",
    lawRefs: [
      { code: "MK", article: "333" },
      { code: "MK", article: "334" },
      { code: "MK", article: "326" },
      { code: "MK", article: "174" },
    ],
  },

  /* ── 40 ────────────────────────────────────────────────────── */
  {
    heading: "Xavfsiz mehnat sharoiti huquqi",
    text:
      "Mehnatni muhofaza qilish — " +
      "xodimning hayoti va sog'lig'ini " +
      "saqlashga qaratilgan chora-" +
      "tadbirlar tizimi.\n\n" +
      "Xodimning huquqlari: xavfsiz ish " +
      "joyi; mehnat sharoitlari va " +
      "mavjud xavflar haqida to'liq " +
      "ma'lumot olish; shaxsiy himoya " +
      "vositalari bilan bepul " +
      "ta'minlanish; yo'l-yo'riq va " +
      "o'qishdan o'tish; majburiy tibbiy " +
      "ko'rikdan o'tish.\n\n" +
      "⚠️ ENG MUHIM HUQUQ: xodim o'z " +
      "hayotiga va sog'lig'iga TAHDID " +
      "SOLAYOTGAN ishni bajarishni RAD " +
      "ETISH huquqiga ega. Bu bosh " +
      "tortish intizomiy jazo uchun " +
      "asos bo'lmaydi.\n\n" +
      "Ish beruvchining majburiyatlari: " +
      "xavfsiz sharoit yaratish; " +
      "vositalar bilan ta'minlash; " +
      "o'qitish; ish joylariga " +
      "qo'yiladigan talablarni " +
      "bajarish; mablag' ajratish.\n\n" +
      "Xavfsizlik xarajatlari xodim " +
      "zimmasiga yuklatilmaydi.",
    example:
      "Xodimga balandlikda ishlash " +
      "topshirildi, lekin himoya " +
      "vositasi berilmadi. U ishni " +
      "bajarishni rad etishi mumkin " +
      "va bu uchun jazolanmaydi.",
    keyPoints: [
      "Xavfsiz sharoit yaratish — ish beruvchining majburiyati",
      "Himoya vositalari bepul beriladi",
      "Xodim hayotga tahdid soluvchi ishni rad etishi mumkin",
      "Bunday rad etish jazo uchun asos bo'lmaydi",
    ],
    warning:
      "Xavfli ishni rad etsangiz, " +
      "sababingizni YOZMA bildiring — " +
      "aks holda uni ishdan bosh " +
      "tortish deb talqin qilishga " +
      "urinishlari mumkin.",
    lawRefs: [
      { code: "MK", article: "351" },
      { code: "MK", article: "355" },
      { code: "MK", article: "358" },
      { code: "MK", article: "359" },
      { code: "MK", article: "363" },
    ],
  },

  /* ── 41 ────────────────────────────────────────────────────── */
  {
    heading: "Ishlab chiqarishdagi baxtsiz hodisa",
    text:
      "Ish joyida jarohat olsangiz nima " +
      "qilish kerak? Bu yerda " +
      "ketma-ketlik juda muhim.\n\n" +
      "(1) DARHOL tibbiy yordam oling " +
      "va hodisani rahbariyatga xabar " +
      "qiling.\n\n" +
      "(2) Hodisa RASMIY qayd " +
      "etilishini talab qiling. Qonun " +
      "bo'yicha ishlab chiqarishdagi " +
      "baxtsiz hodisalar va kasb " +
      "kasalliklari TEKSHIRILADI va " +
      "HISOBGA OLINADI.\n\n" +
      "(3) Tekshiruv natijasida " +
      "dalolatnoma tuziladi — uning " +
      "nusxasini oling. Bu hujjat " +
      "keyingi barcha to'lovlar uchun " +
      "asos bo'ladi.\n\n" +
      "(4) Vaqtincha mehnatga " +
      "qobiliyatsizlik yuz berganda " +
      "xarajatlar kompensatsiya " +
      "qilinadi.\n\n" +
      "⚠️ ENG KO'P UCHRAYDIGAN XATO: " +
      "ish beruvchi \"kelishaylik, " +
      "rasmiylashtirmaylik\" deb " +
      "taklif qiladi va bir marta pul " +
      "beradi. Keyinchalik asorat " +
      "chiqsa, hech qanday hujjat " +
      "bo'lmagani uchun hech narsa " +
      "talab qilib bo'lmaydi.",
    example:
      "Xodim jarohat oldi, ish " +
      "beruvchi \"uyda tushib " +
      "ketgansiz\" deb rasmiylashtirmadi " +
      "va bir oz pul berdi. Olti oydan " +
      "keyin operatsiya kerak bo'ldi — " +
      "hujjat yo'qligi sababli " +
      "kompensatsiya olish imkonsiz.",
    keyPoints: [
      "Baxtsiz hodisa tekshiriladi va hisobga olinadi",
      "Dalolatnoma barcha keyingi to'lovlar uchun asos",
      "Uning nusxasini albatta oling",
      "Rasmiylashtirmaslikka rozi bo'lish katta xato",
    ],
    warning:
      "Hodisani rasmiylashtirmaslikka " +
      "rozi bo'lmang. Asorat yillar " +
      "o'tib chiqishi mumkin, hujjat " +
      "esa faqat o'sha paytda " +
      "tuziladi.",
    lawRefs: [
      { code: "MK", article: "366" },
      { code: "MK", article: "291" },
      { code: "MK", article: "365" },
    ],
  },

  /* ── 42 ────────────────────────────────────────────────────── */
  {
    heading: "Nazorat: davlat inspeksiyasi va kasaba uyushmasi",
    text:
      "Huquqlaringiz buzilsa, kimga " +
      "murojaat qilasiz? Ikki nazorat " +
      "tizimi mavjud.\n\n" +
      "DAVLAT NAZORATI. Mehnat " +
      "to'g'risidagi qonunchilikka rioya " +
      "etilishi ustidan vakolatli davlat " +
      "organlari nazorat qiladi. Davlat " +
      "mehnat inspektorlari tekshiruv " +
      "o'tkazish, talabnoma berish va " +
      "javobgarlikka tortish " +
      "vakolatiga ega.\n\n" +
      "Inspektorlarning qarorlari " +
      "ustidan ham shikoyat qilish " +
      "mumkin — ya'ni tizim ikki " +
      "tomonlama nazorat ostida.\n\n" +
      "JAMOATCHILIK NAZORATI. Bu " +
      "asosan kasaba uyushmalari " +
      "orqali amalga oshiriladi. " +
      "Ularning nazorat qilish, " +
      "ma'lumot talab qilish va " +
      "xodimlar manfaatini himoya " +
      "qilish huquqlari qonunda " +
      "belgilangan.\n\n" +
      "Amaliy tavsiya: avval ichkarida " +
      "(rahbariyat, kasaba uyushmasi) " +
      "yozma murojaat qiling, natija " +
      "bo'lmasa inspeksiyaga, so'ng " +
      "sudga.",
    example:
      "Butun bo'linmada ish haqi " +
      "kechiktirilyapti. Yakka " +
      "murojaatdan ko'ra kasaba " +
      "uyushmasi orqali jamoaviy " +
      "murojaat samaraliroq bo'lishi " +
      "mumkin.",
    keyPoints: [
      "Davlat mehnat inspeksiyasi asosiy nazorat organi",
      "Inspektorlar talabnoma berish vakolatiga ega",
      "Kasaba uyushmalari jamoatchilik nazoratini amalga oshiradi",
      "Tartib: ichki murojaat → inspeksiya → sud",
    ],
    warning:
      "Murojaatni YOZMA qiling va " +
      "qabul qilinganini tasdiqlovchi " +
      "belgi oling — og'zaki shikoyat " +
      "hech qanday iz qoldirmaydi.",
    lawRefs: [
      { code: "MK", article: "534" },
      { code: "MK", article: "537" },
      { code: "MK", article: "539" },
      { code: "MK", article: "540" },
    ],
  },

  /* ── 43 ────────────────────────────────────────────────────── */
  {
    heading: "Ayollar va homilador xodimlar uchun kafolatlar",
    text:
      "Qonun ayollar mehnatini muhofaza " +
      "qilish bo'yicha qo'shimcha " +
      "choralarni nazarda tutadi. " +
      "Homilador ayollar uchun esa " +
      "himoya yanada kuchli.\n\n" +
      "Asosiy kafolatlar:\n\n" +
      "(1) HOMILADOR ayolni tibbiy " +
      "xulosaga muvofiq yengilroq ishga " +
      "yoki noqulay omillar ta'siridan " +
      "xoli ishga o'tkazish — ish " +
      "beruvchining majburiyati.\n\n" +
      "(2) Tungi ishlarga, ish " +
      "vaqtidan tashqari ishlarga, dam " +
      "olish va bayram kunlaridagi " +
      "ishlarga jalb etish hamda " +
      "xizmat safariga yuborish " +
      "cheklangan yoki taqiqlangan.\n\n" +
      "(3) Talabiga ko'ra to'liqsiz " +
      "ish vaqti belgilanadi.\n\n" +
      "(4) Tug'ruqqacha parvarishlash " +
      "uchun qo'shimcha bo'sh kunlar " +
      "beriladi.\n\n" +
      "(5) ⚠️ ISHDAN BO'SHATISHDA " +
      "ALOHIDA KAFOLAT: homilador " +
      "ayollar uchun ish beruvchi " +
      "tashabbusi bilan bo'shatish " +
      "qat'iy cheklangan.",
    example:
      "Homilador ayolga zararli " +
      "sharoitdagi ish topshirildi. " +
      "Tibbiy xulosa asosida ish " +
      "beruvchi uni boshqa ishga " +
      "o'tkazishi SHART — bu tanlov " +
      "emas, majburiyat.",
    keyPoints: [
      "Homilador ayol yengilroq ishga o'tkazilishi shart",
      "Tungi va qo'shimcha ishlarga jalb etish cheklangan",
      "Talabiga ko'ra to'liqsiz ish vaqti beriladi",
      "Ishdan bo'shatish qat'iy cheklangan",
    ],
    warning:
      "Homiladorlik haqidagi tibbiy " +
      "ma'lumotnomani ish beruvchiga " +
      "RASMIY topshiring va nusxasida " +
      "qabul belgisini oling — " +
      "kafolatlar shundan boshlanadi.",
    lawRefs: [
      { code: "MK", article: "393" },
      { code: "MK", article: "394" },
      { code: "MK", article: "396" },
      { code: "MK", article: "403" },
      { code: "MK", article: "408" },
    ],
  },

  /* ── 44 ────────────────────────────────────────────────────── */
  {
    heading: "Bolali xodimlar uchun imtiyozlar",
    text:
      "Oilaviy vazifalarni bajarish " +
      "bilan mashg'ul xodimlar uchun " +
      "alohida imtiyozlar mavjud. " +
      "Muhimi — ular ONAGA ham, OTAGA " +
      "ham (yoki ularning o'rnini " +
      "bosuvchi shaxsga) tegishli.\n\n" +
      "Asosiy imtiyozlar:\n\n" +
      "(1) Talabiga ko'ra TO'LIQSIZ ish " +
      "vaqti belgilanadi.\n\n" +
      "(2) Tungi ishlarga, ish " +
      "vaqtidan tashqari ishlarga va " +
      "xizmat safariga jalb etishning " +
      "o'ziga xos tartibi amal qiladi " +
      "— odatda faqat rozilik bilan.\n\n" +
      "(3) Yillik ta'til navbatini " +
      "tanlashda IMTIYOZ beriladi.\n\n" +
      "(4) Belgilangan yoshgacha " +
      "bo'lgan bolasi yoki nogironligi " +
      "bo'lgan bolasi bor ota-onadan " +
      "biriga HAQ TO'LANADIGAN " +
      "qo'shimcha ta'til beriladi.\n\n" +
      "(5) Shuningdek ish haqi " +
      "saqlanmagan holda ta'til olish " +
      "huquqi ham nazarda tutilgan.\n\n" +
      "Bu imtiyozlar avtomatik emas — " +
      "ular uchun ariza berish kerak.",
    example:
      "Kichik bolasi bor ota qo'shimcha " +
      "ta'til so'radi va rad javobini " +
      "oldi (\"bu faqat onalarga\"). " +
      "Bu noto'g'ri: imtiyoz " +
      "ota-onadan biriga beriladi.",
    keyPoints: [
      "Imtiyozlar ota-onadan biriga beriladi, faqat onaga emas",
      "To'liqsiz ish vaqti talabga ko'ra belgilanadi",
      "Ta'til navbatini tanlashda imtiyoz bor",
      "Imtiyozdan foydalanish uchun ariza berish kerak",
    ],
    warning:
      "Imtiyozlar o'z-o'zidan " +
      "berilmaydi. Yozma ariza va " +
      "tasdiqlovchi hujjat (bolaning " +
      "tug'ilganlik guvohnomasi) " +
      "kerak.",
    lawRefs: [
      { code: "MK", article: "398" },
      { code: "MK", article: "400" },
      { code: "MK", article: "401" },
      { code: "MK", article: "402" },
    ],
  },

  /* ── 45 ────────────────────────────────────────────────────── */
  {
    heading: "Nogironligi bo'lgan xodimlar",
    text:
      "Nogironligi bo'lgan shaxslarning " +
      "mehnat huquqlari alohida " +
      "himoyalangan.\n\n" +
      "ISHGA QABUL QILISHDA: qonun " +
      "kafolatlar beradi, jumladan " +
      "belgilangan eng kam ish " +
      "o'rinlari hisobiga ishga " +
      "joylashtirish mexanizmi.\n\n" +
      "⚠️ TAQIQ: sog'lig'ining holatiga " +
      "ko'ra qarshi ko'rsatma bo'lgan " +
      "ishlarda ularning mehnatidan " +
      "foydalanish TAQIQLANADI. Ya'ni " +
      "xodimning o'zi rozi bo'lsa ham " +
      "bunday ishga qo'yib bo'lmaydi.\n\n" +
      "ISH VAQTI: belgilangan guruhdagi " +
      "xodimlar uchun qisqartirilgan " +
      "ish vaqti amal qiladi. Muhimi " +
      "— bunda mehnatga haq to'lash " +
      "kamaytirilmaydi.\n\n" +
      "TA'TIL: yillik ta'til bo'yicha " +
      "alohida qoidalar, shuningdek " +
      "ish haqi saqlanmagan holda " +
      "ta'til olish huquqi.\n\n" +
      "QO'SHIMCHA ISHLAR: xizmat " +
      "safariga yuborish, ish vaqtidan " +
      "tashqari, tungi hamda dam olish " +
      "va bayram kunlaridagi ishlarga " +
      "jalb qilishning o'ziga xos " +
      "tartibi bor.\n\n" +
      "Majburiy tibbiy ko'riklar ham " +
      "nazarda tutilgan.",
    example:
      "I guruh nogironligi bo'lgan " +
      "xodimga qisqartirilgan ish " +
      "vaqti belgilandi, lekin ish " +
      "haqi mutanosib kamaytirildi. " +
      "Bu xato: bunday holatda haq " +
      "kamaytirilmaydi.",
    keyPoints: [
      "Ishga qabul qilishda qo'shimcha kafolatlar bor",
      "Qarshi ko'rsatma bo'lgan ishga qo'yish taqiqlanadi",
      "Qisqartirilgan ish vaqtida haq kamaytirilmaydi",
      "Ta'til va qo'shimcha ishlarda alohida tartib amal qiladi",
    ],
    warning:
      "Tibbiy-ijtimoiy ekspertiza " +
      "xulosasidagi mehnat tavsiyalari " +
      "ish beruvchi uchun MAJBURIY — " +
      "uni ish beruvchiga rasmiy " +
      "taqdim eting.",
    lawRefs: [
      { code: "MK", article: "423" },
      { code: "MK", article: "424" },
      { code: "MK", article: "425" },
      { code: "MK", article: "427" },
      { code: "MK", article: "431" },
    ],
  },
];

module.exports = { SECTIONS };
