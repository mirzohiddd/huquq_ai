"use strict";
/**
 * KONSTITUTSIYA MODULI — 8-DARS: FUQAROLIK.
 *
 * Manba: KONS 22, 23, 24 (fuqarolik instituti) + 55, 56 (fuqarolik
 * huquqiy oqibati sifatida — himoya mexanizmi).
 *
 * ⚠️ NIMA UCHUN MAVZULAR SONI 12 TA: Konstitutsiyada fuqarolikka
 * BEVOSITA bag'ishlangan atigi uchta modda bor. Lekin ularning har
 * biri bir necha MUSTAQIL qoidadan iborat (22-moddada to'rtta,
 * 23-moddada to'rtta, 24-moddada ikkita) va har bir qoida amalda
 * alohida savolga javob beradi. Shuning uchun mavzular moddalar
 * bo'yicha emas, QOIDALAR bo'yicha ajratilgan.
 *
 * Fuqarolikni olish/yo'qotish TARTIBI alohida qonunda va u
 * loyihaning qonun reyestrida yo'q — shuning uchun dars faqat
 * konstitutsiyaviy darajada tushuntiradi va tartib uchun rasmiy
 * organga yo'naltiradi.
 */

const LESSON = {
  key: "konstitutsiya-fuqarolik",
  category: "constitution",
  level: "mid",
  order: 1080,
  title: "Fuqarolik: mazmuni va kafolatlari",
  desc:
    "Fuqarolik nima beradi, yagona fuqarolik prinsipi, chet davlatda " +
    "himoya, chiqarib yuborish va berib yuborish taqiqi hamda chet el " +
    "fuqarolarining maqomi.",
  objectives: [
    "Fuqarolik nima ekanligini va u qanday huquqlar berishini bilasiz",
    "Yagona fuqarolik prinsipining ikkala ma'nosini tushunasiz",
    "Fuqarolikni olish asosi huquq hajmiga ta'sir qilmasligini bilasiz",
    "Chet davlatda davlat himoyasi qanday ishlashini bilasiz",
    "Chiqarib yuborish va berib yuborish taqiqini ajrata olasiz",
    "Chet el fuqarosi va fuqaroligi bo'lmagan shaxs maqomini bilasiz",
    "Inson huquqi bilan fuqaro huquqi farqini tushunasiz",
  ],
  practicalSteps: [
    "Chet davlatga chiqishdan oldin O'zbekiston diplomatik vakolatxonasi manzili va telefonini yozib oling",
    "Pasport va boshqa hujjatlaringiz nusxasini elektron shaklda saqlang — yo'qotilganda tiklash osonlashadi",
    "Fuqarolik masalasi bo'yicha faqat rasmiy organlarga murojaat qiling, vositachilarga emas",
    "Chet elda huquqingiz buzilsa yoki ushlab turilsangiz — birinchi navbatda vakolatxonaga xabar berishni talab qiling",
    "Sizdan fuqarolikni qanday olganingiz bo'yicha qo'shimcha talab qo'yilsa, uning qonuniy asosini yozma so'rang",
  ],
  sections: [
    {
      heading: "Fuqarolik nima va u nima beradi",
      text:
        "Fuqarolik — bu shaxs bilan davlat o'rtasidagi BARQAROR HUQUQIY " +
        "ALOQA. U shunchaki hujjat yoki yozuv emas: fuqarolik ikki " +
        "tomonlama bog'lanishni yuzaga keltiradi.\n\n" +
        "Bir tomondan davlat fuqaroga nisbatan majburiyat oladi — uni " +
        "himoya qilish, huquqlarini ta'minlash, chet elda homiylik " +
        "ko'rsatish. Ikkinchi tomondan fuqaro ham davlatga nisbatan " +
        "burchlarni oladi (soliq, mudofaa, qonunga rioya).\n\n" +
        "⚠️ ENG MUHIM AJRATISH: Konstitutsiyadagi huquqlarning bir " +
        "qismi HAR KIMGA (\"har bir inson\", \"har kim\"), bir qismi esa " +
        "faqat FUQAROGA (\"fuqarolar\") tegishli. Yashash, shaxsiy " +
        "daxlsizlik, sud himoyasi kabi huquqlar fuqaroligidan qat'i " +
        "nazar hammaga beriladi; saylash va saylanish, davlat " +
        "boshqaruvida ishtirok etish kabilar esa fuqarolikka " +
        "bog'langan.\n\n" +
        "Shuning uchun \"menda bu huquq bormi?\" degan savolga javob " +
        "berishda avval modda matnida KIM ko'rsatilganiga qarash " +
        "kerak — \"har kim\" deb yozilgan bo'lsa fuqarolik ahamiyatsiz.",
      example:
        "Chet el fuqarosi O'zbekistonda sudga shikoyat qildi va uning " +
        "arizasi qabul qilindi — sud himoyasi huquqi \"har kimga\" " +
        "beriladi. Lekin o'sha shaxs saylovda ovoz bera olmaydi, " +
        "chunki bu huquq fuqaroga bog'langan.",
      keyPoints: [
        "Fuqarolik — shaxs va davlat o'rtasidagi barqaror huquqiy aloqa",
        "U ikki tomonlama: davlat ham, fuqaro ham majburiyat oladi",
        "Huquqlarning bir qismi har kimga, bir qismi faqat fuqaroga tegishli",
        "Modda matnidagi \"har kim\" va \"fuqarolar\" so'zlari farqni ko'rsatadi",
      ],
      warning:
        "\"Fuqaro emassiz, demak huquqingiz yo'q\" degan javob ko'pincha " +
        "noto'g'ri — huquqlarning katta qismi hammaga beriladi.",
      lawRefs: [{ code: "KONS", article: "22" }],
    },
    {
      heading: "Yagona fuqarolik: hududiy ma'nosi",
      text:
        "O'zbekiston Respublikasining BUTUN HUDUDIDA YAGONA fuqarolik " +
        "o'rnatiladi.\n\n" +
        "Bu qoidaning birinchi ma'nosi hududiy: mamlakatning qaysi " +
        "qismida yashashingizdan qat'i nazar fuqarolik BIR XIL hajmda " +
        "huquq beradi. Bir viloyatda yashovchi fuqaro ikkinchisiga " +
        "qaraganda \"kamroq fuqaro\" bo'lmaydi.\n\n" +
        "⚠️ AMALIY OQIBAT: mahalliy organ o'z hududida yashovchi " +
        "bo'lmagan fuqaroga xizmat ko'rsatishdan FAQAT ro'yxatga olish " +
        "joyi boshqa ekani sababli bosh torta olmaydi. Ro'yxatga olish " +
        "joyi — bu ma'muriy tartib masalasi, u fuqarolikning hajmini " +
        "o'zgartirmaydi.\n\n" +
        "Yagona fuqarolik prinsipi mamlakat ichida \"ichki chegara\" " +
        "yaratilishining oldini oladi: alohida hudud o'z fuqaroligini " +
        "joriy etib, boshqa hudud aholisini cheklab qo'ya olmaydi.",
      example:
        "Boshqa viloyatda ro'yxatga olingan fuqaroga davlat xizmatini " +
        "ko'rsatishdan \"siz bizning hududdan emassiz\" degan sabab " +
        "bilan bosh tortildi — bu sabab fuqarolik hajmiga daxl " +
        "qilmaydi va rad etishning qonuniy asosi so'ralishi kerak.",
      keyPoints: [
        "Yagona fuqarolik butun hududda o'rnatiladi",
        "Yashash hududi fuqarolik hajmiga ta'sir qilmaydi",
        "Ro'yxatga olish joyi — ma'muriy masala, fuqarolik masalasi emas",
        "Ichki \"hududiy fuqarolik\" yaratish mumkin emas",
      ],
      warning:
        "Ro'yxatga olish joyi bilan bog'liq rad etishlarda qonuniy " +
        "asosni yozma shaklda so'rang.",
      lawRefs: [{ code: "KONS", article: "22" }],
    },
    {
      heading: "Fuqarolik qanday olinganidan qat'i nazar teng",
      text:
        "Fuqarolik unga QANDAY ASOSLARDA EGA BO'LGANLIKDAN QAT'I NAZAR " +
        "hamma uchun TENGDIR.\n\n" +
        "⚠️ BU QOIDA AMALDA ENG MUHIMI. Tug'ilish bilan olingan " +
        "fuqarolik ham, keyinchalik qabul qilingan fuqarolik ham AYNAN " +
        "BIR XIL hajmdagi huquq va majburiyatlarni keltiradi.\n\n" +
        "Ya'ni huquqda \"birinchi darajali\" va \"ikkinchi darajali\" " +
        "fuqaro degan tushuncha YO'Q. Fuqarolikni keyinchalik olgan " +
        "shaxsdan qo'shimcha shart talab qilish, uning huquqini " +
        "cheklash yoki unga alohida muddat belgilash Konstitutsiyaga " +
        "zid.\n\n" +
        "Bu ko'pincha e'tibordan chetda qoladigan, lekin kamsitishning " +
        "juda keng tarqalgan turini to'sib qo'yadigan qoida.",
      example:
        "Fuqarolikni keyinchalik qabul qilgan shaxsdan biror huquqni " +
        "amalga oshirishda \"siz tug'ilgandan fuqaromisiz?\" degan " +
        "savol asosida qo'shimcha hujjat talab qilindi — bu talab " +
        "tenglik qoidasiga zid.",
      keyPoints: [
        "Fuqarolik olish asosi huquq hajmiga ta'sir qilmaydi",
        "\"Birinchi\" va \"ikkinchi\" darajali fuqaro tushunchasi yo'q",
        "Keyinchalik olingan fuqarolik ham to'liq huquq beradi",
        "Qo'shimcha shart qo'yish kamsitish hisoblanadi",
      ],
      warning:
        "Fuqarolik olish asosiga qarab qo'yilgan har qanday qo'shimcha " +
        "talab shubhali — asosini so'rang.",
      lawRefs: [{ code: "KONS", article: "22" }],
    },
    {
      heading: "Qoraqalpog'iston Respublikasi fuqaroligi",
      text:
        "Qoraqalpog'iston Respublikasining fuqarosi AYNI VAQTDA " +
        "O'zbekiston Respublikasining fuqarosi hisoblanadi.\n\n" +
        "Bu qoida yagona fuqarolik prinsipining davomi. U ikkita " +
        "fuqarolik emas, BITTA fuqarolikning ikki darajada e'tirof " +
        "etilishini bildiradi — ya'ni bu qo'shaloq fuqarolik EMAS.\n\n" +
        "⚠️ AMALIY MA'NOSI: Qoraqalpog'iston Respublikasi fuqarosi " +
        "O'zbekiston bo'ylab va chet elda aynan O'zbekiston fuqarosi " +
        "sifatida bir xil huquq va himoyaga ega. Chet elda unga " +
        "O'zbekiston vakolatxonasi homiylik ko'rsatadi.\n\n" +
        "Shuningdek unga oldingi mavzudagi tenglik qoidasi to'liq " +
        "qo'llaniladi — hech qanday qo'shimcha shart yoki cheklov " +
        "yuzaga kelmaydi.",
      example:
        "Chet elda hujjatini yo'qotgan Qoraqalpog'iston Respublikasi " +
        "fuqarosi O'zbekiston vakolatxonasiga murojaat qiladi — " +
        "u boshqa fuqarolar bilan bir xil tartibda xizmat oladi.",
      keyPoints: [
        "Qoraqalpog'iston fuqarosi ayni vaqtda O'zbekiston fuqarosi",
        "Bu qo'shaloq fuqarolik emas, yagona fuqarolikning bir qismi",
        "Huquq va himoya hajmi to'liq bir xil",
        "Chet elda O'zbekiston vakolatxonasi himoya qiladi",
      ],
      warning:
        "Qoraqalpog'iston fuqaroligini alohida \"boshqa fuqarolik\" " +
        "sifatida talqin qilish noto'g'ri.",
      lawRefs: [{ code: "KONS", article: "22" }],
    },
    {
      heading: "Fuqarolikni olish va yo'qotish — faqat qonun bilan",
      text:
        "Fuqarolikka EGA BO'LISH va uni YO'QOTISH asoslari hamda " +
        "tartibi QONUN bilan belgilanadi.\n\n" +
        "Konstitutsiya bu yerda faqat asosiy prinsipni qo'yadi va " +
        "tafsilotni qonunga havola qiladi. Lekin havolaning o'zi " +
        "muhim kafolat:\n\n" +
        "(1) fuqarolik masalasi FAQAT qonun darajasida hal qilinadi — " +
        "idoraviy hujjat, buyruq yoki ko'rsatma yangi asos joriy eta " +
        "olmaydi;\n\n" +
        "(2) asoslar OLDINDAN va OSHKORA bo'lishi kerak — ya'ni " +
        "\"maxfiy mezon\" bo'yicha fuqarolik masalasini hal qilish " +
        "mumkin emas;\n\n" +
        "(3) tartib ham qonunda belgilanadi, ya'ni qaror qabul qilish " +
        "jarayoni ixtiyoriy emas.\n\n" +
        "⚠️ Fuqarolikka qabul qilish va undan chiqish TARTIBI alohida " +
        "qonun bilan tartibga solinadi. Aniq hujjatlar ro'yxati va " +
        "muddatlar uchun vakolatli organning rasmiy manbasiga murojaat " +
        "qilish kerak — bu qoidalar o'zgarib turadi.",
      example:
        "Fuqarolik masalasi bo'yicha rad javobi berildi, lekin " +
        "asos sifatida qonunda yo'q mezon ko'rsatildi — bunday asos " +
        "qonuniy emas.",
      keyPoints: [
        "Fuqarolikni olish va yo'qotish asoslari qonun bilan belgilanadi",
        "Idoraviy hujjat yangi asos joriy eta olmaydi",
        "Asoslar oldindan va oshkora bo'lishi shart",
        "Tartib uchun rasmiy organ manbasiga murojaat qiling",
      ],
      warning:
        "Fuqarolik masalalarida vositachilarga ishonmang — jarayon " +
        "faqat rasmiy organlar orqali yuritiladi.",
      lawRefs: [{ code: "KONS", article: "22" }],
    },
    {
      heading: "Davlat fuqaroni himoya qiladi — hududda va tashqarida",
      text:
        "O'zbekiston Respublikasi O'Z HUDUDIDA HAM, UNING TASHQARISIDA " +
        "HAM o'z fuqarolarini HIMOYA QILISH va ularga HOMIYLIK " +
        "KO'RSATISHNI kafolatlaydi.\n\n" +
        "⚠️ \"TASHQARISIDA HAM\" — bu iboraning amaliy vazni katta. " +
        "Fuqaro chet elga chiqqanda davlat bilan aloqasi UZILMAYDI: u " +
        "o'sha davlat qonunlariga bo'ysunadi, lekin ayni vaqtda " +
        "O'zbekiston himoyasi ostida qoladi.\n\n" +
        "Amalda bu himoya diplomatik va konsullik vakolatxonalari " +
        "orqali ko'rsatiladi. Odatiy holatlar: hujjat yo'qolganda " +
        "yoki o'g'irlanganda vaqtinchalik hujjat berish; ushlab " +
        "turilgan yoki hibsga olingan fuqaro bilan aloqa o'rnatish; " +
        "og'ir kasallik, baxtsiz hodisa yoki vafot holatlarida " +
        "yordam; mahalliy organlar tomonidan huquq buzilganda " +
        "murojaat qilish.\n\n" +
        "MUHIM: himoya AVTOMATIK ishlamaydi — u odatda murojaat " +
        "asosida boshlanadi. Shuning uchun vakolatxona ma'lumotlarini " +
        "oldindan saqlash kerak.",
      example:
        "Chet elda ushlab turilgan fuqaro O'zbekiston vakolatxonasiga " +
        "xabar berilishini talab qildi — bu uning huquqi va bunday " +
        "talab bajarilishi kerak.",
      keyPoints: [
        "Himoya hududda ham, chet elda ham kafolatlanadi",
        "Chet elda himoya vakolatxonalar orqali ko'rsatiladi",
        "Ushlab turilganda vakolatxonaga xabar berishni talab qiling",
        "Himoya odatda murojaat asosida boshlanadi",
      ],
      warning:
        "Chet el qonunlariga bo'ysunish majburiyati saqlanadi — " +
        "himoya javobgarlikdan ozod qilmaydi.",
      lawRefs: [{ code: "KONS", article: "23" }],
    },
    {
      heading: "Fuqaro mamlakatdan majburiy chiqarib yuborilmaydi",
      text:
        "O'zbekiston Respublikasi fuqarosi O'zbekistondan tashqariga " +
        "MAJBURIY CHIQARIB YUBORILISHI mumkin emas.\n\n" +
        "Bu mutlaq taqiq: u istisnosiz amal qiladi va uni sud qarori " +
        "bilan ham chetlab bo'lmaydi. Fuqaro o'z mamlakatiga kirish va " +
        "unda qolish huquqidan mahrum etilishi mumkin emas.\n\n" +
        "⚠️ FARQNI TUSHUNING: chet el fuqarosi yoki fuqaroligi " +
        "bo'lmagan shaxsni qonunda nazarda tutilgan asoslarda " +
        "mamlakatdan chiqarib yuborish mumkin. O'Z fuqarosini esa " +
        "MUMKIN EMAS. Aynan shu farq fuqarolikning eng aniq amaliy " +
        "qiymatlaridan biri.\n\n" +
        "Bu qoidaning yana bir natijasi: fuqaro chet elda qanchalik " +
        "uzoq yashamasin, u har doim o'z mamlakatiga qaytish " +
        "huquqiga ega.",
      example:
        "Uzoq yillar chet elda yashagan fuqaro vataniga qaytmoqchi " +
        "bo'ldi — unga kirishni taqiqlash mumkin emas.",
      keyPoints: [
        "Fuqaroni majburiy chiqarib yuborish taqiqlanadi",
        "Taqiq mutlaq — istisnosi yo'q",
        "Chet el fuqarosini chiqarib yuborish mumkin, o'z fuqarosini yo'q",
        "Fuqaro har doim mamlakatiga qaytish huquqiga ega",
      ],
      warning:
        "Bu taqiqni chet elga chiqishga ruxsat masalasi bilan " +
        "aralashtirmang — ular boshqa-boshqa masalalar.",
      lawRefs: [{ code: "KONS", article: "23" }],
    },
    {
      heading: "Fuqaro boshqa davlatga berib yuborilmaydi",
      text:
        "O'zbekiston Respublikasi fuqarosi BOSHQA DAVLATGA BERIB " +
        "YUBORILISHI mumkin emas.\n\n" +
        "Huquqda bu ekstraditsiya taqiqi deb ataladi. Ya'ni chet " +
        "davlat o'z jinoyat ishi bo'yicha O'zbekiston fuqarosini " +
        "topshirishni so'rasa ham, u topshirilmaydi.\n\n" +
        "⚠️ BU JAVOBGARLIKDAN OZOD QILMAYDI — ko'p odam shu joyda " +
        "adashadi. Fuqaro chet elda huquqbuzarlik sodir etgan bo'lsa, " +
        "u xalqaro shartnomalar asosida O'ZBEKISTONDA javobgarlikka " +
        "tortilishi mumkin. Taqiq faqat topshirishga tegishli, " +
        "jazosizlikka emas.\n\n" +
        "Oldingi mavzudagi taqiq bilan farqi: chiqarib yuborish — bu " +
        "shaxsni shunchaki mamlakatdan chiqarish; berib yuborish esa " +
        "uni boshqa davlat organlariga TOPSHIRISH. Ikkalasi ham " +
        "fuqaroga nisbatan taqiqlangan.",
      example:
        "Chet davlat O'zbekiston fuqarosini o'z ishi bo'yicha " +
        "topshirishni so'radi — talab rad etiladi, lekin ish " +
        "materiallari bo'yicha ichkarida tekshiruv o'tkazilishi mumkin.",
      keyPoints: [
        "Fuqaroni boshqa davlatga berib yuborish taqiqlanadi",
        "Bu ekstraditsiya taqiqi deb ataladi",
        "Taqiq javobgarlikdan ozod qilmaydi",
        "Chiqarib yuborish va berib yuborish — turli tushunchalar",
      ],
      warning:
        "\"Meni topshira olmaydi\" degan xulosa \"menga hech narsa " +
        "bo'lmaydi\" degani emas.",
      lawRefs: [{ code: "KONS", article: "23" }],
    },
    {
      heading: "Xorijda yashovchi vatandoshlar bilan aloqalar",
      text:
        "Davlat XORIJDA YASHAYOTGAN VATANDOSHLAR bilan aloqalarni " +
        "saqlab qolish hamda rivojlantirish to'g'risida xalqaro huquq " +
        "normalariga muvofiq g'amxo'rlik qiladi.\n\n" +
        "⚠️ E'TIBOR BERING: bu yerda \"fuqarolar\" emas, " +
        "\"VATANDOSHLAR\" deyilgan. Bu kengroq tushuncha — u " +
        "O'zbekiston fuqaroligini saqlab qolganlarni ham, boshqa " +
        "davlat fuqaroligini olgan, lekin O'zbekiston bilan tarixiy " +
        "va madaniy aloqasi bo'lganlarni ham qamrab oladi.\n\n" +
        "Bu qoidadan kelib chiqadigan yo'nalishlar: til va madaniyatni " +
        "saqlash uchun shart-sharoit; ta'lim va ilmiy aloqalar; " +
        "iqtisodiy va investitsiya aloqalari; vatanga qaytishni " +
        "osonlashtiruvchi dasturlar.\n\n" +
        "Oldingi mavzulardagi HIMOYA majburiyatidan farqi: himoya — " +
        "huquq buzilganda aralashish, bu esa doimiy ALOQANI qo'llab-" +
        "quvvatlash.",
      example:
        "Chet elda yashovchi vatandoshlar uyushmasi ona tilida ta'lim " +
        "tashkil etish uchun ko'mak so'radi — bu aynan shu yo'nalishga " +
        "kiradi.",
      keyPoints: [
        "Davlat xorijdagi vatandoshlar bilan aloqani rivojlantiradi",
        "\"Vatandosh\" tushunchasi \"fuqaro\"dan kengroq",
        "Yo'nalishlar: til, madaniyat, ta'lim, iqtisodiy aloqalar",
        "Bu himoya majburiyatidan alohida vazifa",
      ],
      warning:
        "Vatandosh bo'lish o'z-o'zidan fuqarolik huquqlarini " +
        "bermaydi — bu ikki alohida maqom.",
      lawRefs: [{ code: "KONS", article: "23" }],
    },
    {
      heading: "Chet el fuqarolari va fuqaroligi bo'lmagan shaxslar",
      text:
        "O'zbekiston Respublikasi hududidagi CHET EL FUQAROLARINING va " +
        "FUQAROLIGI BO'LMAGAN SHAXSLARNING huquq va erkinliklari " +
        "XALQARO HUQUQ NORMALARIGA MUVOFIQ ta'minlanadi.\n\n" +
        "Ya'ni ular \"huquqsiz\" emas. Aksincha, ularning huquqlari " +
        "kafolatlanadi va bu kafolat xalqaro huquq darajasiga " +
        "bog'langan.\n\n" +
        "⚠️ IKKI TOIFANI AJRATING: chet el fuqarosi — boshqa " +
        "davlatning fuqaroligiga ega shaxs; fuqaroligi bo'lmagan " +
        "shaxs (apatrid) — hech bir davlat fuqaroligiga ega bo'lmagan " +
        "shaxs. Ikkinchi toifa himoyaga muhtojroq, chunki uning " +
        "orqasida homiylik qiladigan davlat yo'q — aynan shuning " +
        "uchun Konstitutsiya ikkalasini birga tilga oladi.\n\n" +
        "Amalda ular uchun ochiq: sud himoyasi, mulk huquqi, mehnat " +
        "huquqlari (qonunda belgilangan doirada), shaxsiy " +
        "daxlsizlik, sog'liqni saqlash. Cheklangani esa asosan " +
        "siyosiy huquqlar va ayrim davlat lavozimlari.",
      example:
        "O'zbekistonda ishlayotgan chet el fuqarosining ish haqi " +
        "to'lanmadi — u sudga murojaat qilishga to'liq haqli.",
      keyPoints: [
        "Chet el fuqarolari va apatridlarning huquqlari kafolatlanadi",
        "Kafolat xalqaro huquq normalariga bog'langan",
        "Apatrid — hech bir davlat fuqaroligi bo'lmagan shaxs",
        "Cheklov asosan siyosiy huquqlarga tegishli",
      ],
      warning:
        "\"Chet ellik\" degan sabab bilan sud himoyasidan yoki " +
        "mehnat huquqlaridan mahrum qilish qonuniy emas.",
      lawRefs: [{ code: "KONS", article: "24" }],
    },
    {
      heading: "Chet el fuqarolarining burchlari",
      text:
        "Chet el fuqarolari va fuqaroligi bo'lmagan shaxslar " +
        "O'zbekiston Respublikasining Konstitutsiyasi, qonunlari va " +
        "xalqaro shartnomalari bilan belgilangan BURCHLARNI ADO " +
        "ETADILAR.\n\n" +
        "Ya'ni huquq bilan birga majburiyat ham keladi. Mamlakat " +
        "hududida bo'lgan har qanday shaxs uning qonunlariga " +
        "bo'ysunadi.\n\n" +
        "⚠️ LEKIN BURCHLAR RO'YXATI BIR XIL EMAS. Fuqaroning " +
        "burchlari orasida Vatanni himoya qilish kabi FUQAROLIKKA " +
        "bog'langanlari bor va ular chet el fuqarosiga " +
        "yuklatilmaydi. Aksincha, qonunga rioya qilish, boshqalarning " +
        "huquqlarini hurmat qilish, soliq va yig'imlarni to'lash, " +
        "atrof-muhitni asrash kabi burchlar hammaga tegishli.\n\n" +
        "Qoida sodda: hududda bo'lgan har kim qonunga bo'ysunadi, " +
        "lekin faqat fuqarolikdan kelib chiqadigan burchlar " +
        "fuqarolarga qoladi.",
      example:
        "O'zbekistonda daromad olayotgan chet el fuqarosi qonunda " +
        "belgilangan soliq majburiyatini bajaradi — bu burch " +
        "fuqarolikka bog'liq emas.",
      keyPoints: [
        "Chet el fuqarolari ham qonun bilan belgilangan burchlarni ado etadi",
        "Hududda bo'lgan har kim qonunga bo'ysunadi",
        "Fuqarolikka bog'langan burchlar ularga yuklatilmaydi",
        "Soliq, qonunga rioya kabi burchlar hammaga tegishli",
      ],
      warning:
        "Xalqaro shartnoma alohida qoida belgilagan bo'lsa, u " +
        "hisobga olinadi — shartnoma matnini tekshiring.",
      lawRefs: [{ code: "KONS", article: "24" }],
    },
    {
      heading: "Fuqarolik va huquqni himoya qilish: nima o'zgaradi",
      text:
        "Dars yakunida eng ko'p beriladigan savolga javob beramiz: " +
        "huquq buzilganda fuqarolik nimani o'zgartiradi?\n\n" +
        "HIMOYA MEXANIZMI HAMMAGA OCHIQ. Har kim o'z huquq va " +
        "erkinliklarini qonunda taqiqlanmagan barcha usullar bilan " +
        "himoya qilishga haqli va har kimga sud orqali himoya " +
        "kafolatlanadi. \"Har kim\" — ya'ni fuqaroligidan qat'i " +
        "nazar.\n\n" +
        "FUQAROLIK QO'SHADIGANI — chet elda diplomatik himoya, " +
        "chiqarib yuborish va berib yuborishdan himoyalanish hamda " +
        "siyosiy huquqlar.\n\n" +
        "⚠️ AMALIY XULOSA: agar sizga \"siz fuqaro emassiz\" yoki " +
        "\"sizning ro'yxatga olish joyingiz boshqa\" degan sabab " +
        "bilan sud himoyasi yoki murojaat qilish huquqi rad etilsa — " +
        "bu sabab qonuniy emas. Rad javobini YOZMA shaklda va " +
        "qonuniy asos ko'rsatilgan holda so'rang: keyingi shikoyat " +
        "aynan shu hujjatga tayanadi.",
      example:
        "Fuqaroligi bo'lmagan shaxsning arizasi \"fuqaro emas\" degan " +
        "sabab bilan qabul qilinmadi — bu sabab Konstitutsiyaga zid " +
        "va rad javobi ustidan shikoyat qilish mumkin.",
      keyPoints: [
        "Sud himoyasi va murojaat huquqi hammaga ochiq",
        "Fuqarolik diplomatik himoya va siyosiy huquqlarni qo'shadi",
        "\"Fuqaro emassiz\" degan sabab bilan rad etish qonuniy emas",
        "Rad javobini yozma va asos ko'rsatilgan holda so'rang",
      ],
      warning:
        "Og'zaki rad javobi bilan kifoyalanmang — shikoyat uchun " +
        "yozma hujjat kerak bo'ladi.",
      lawRefs: [
        { code: "KONS", article: "55" },
        { code: "KONS", article: "56" },
      ],
    },
  ],
};

module.exports = { LESSON };
