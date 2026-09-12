"use strict";
/** KONSTITUTSIYA MODULI — 8-DARS: FUQAROLIK. KONS 22–24 (VI bob).
 *
 *  ⚠️ MANBA TOR — VA BU TO'G'RI. Konstitutsiyaning "Fuqarolik" bobi
 *  atigi UCH moddadan iborat. Mavzular soni shu uch moddaning ichidagi
 *  alohida huquqiy qoidalar bo'yicha ajratilgan (masalan 23-modda
 *  uchta mustaqil qoidani o'z ichiga oladi: himoya, chiqarib yuborish
 *  taqiqi va vatandoshlar bilan aloqa). Boshqa darslardan modda olib
 *  kelinmagan — fuqarolik hujjatlari, chegara va migratsiya tartibi
 *  Konstitutsiyada emas, alohida qonunlarda.
 */

const LESSON = {
  key: "konstitutsiya-fuqarolik",
  category: "constitution",
  level: "mid",
  order: 1080,
  title: "Fuqarolik: mazmuni va kafolatlari",
  desc:
    "Fuqarolik nima beradi, yagona fuqarolik prinsipi, chet davlatda " +
    "himoya, chiqarib yuborish taqiqi va chet el fuqarolarining holati.",
  objectives: [
    "Fuqarolik nima ekanligini va u qanday huquqlar berishini bilasiz",
    "Yagona fuqarolik prinsipining ikki ma'nosini tushunasiz",
    "Chet davlatda bo'lganda davlat himoyasi qanday ishlashini bilasiz",
    "Fuqaroni chiqarib yuborish taqiqining mazmunini bilasiz",
    "Chet el fuqarolari va fuqaroligi bo'lmagan shaxslarning holatini bilasiz",
  ],
  practicalSteps: [
    "Chet davlatga chiqishdan oldin O'zbekiston diplomatik vakolatxonasi manzili va telefonini yozib oling",
    "Hujjatlaringiz nusxasini elektron shaklda saqlang — yo'qotilganda tiklash osonlashadi",
    "Fuqarolik masalasi bo'yicha faqat vakolatli davlat organlariga murojaat qiling, vositachilarga emas",
    "Chet elda huquqingiz buzilsa yoki ushlab turilsangiz, birinchi navbatda vakolatxonaga xabar berishni talab qiling",
    "Fuqarolikni olish yoki yo'qotish tartibini amaldagi qonun matnidan tekshiring",
  ],
  sections: [
    {
      heading: "Yagona fuqarolik: hudud bo'yicha tenglik",
      text:
        "Konstitutsiya mamlakatning butun hududida YAGONA fuqarolik " +
        "o'rnatilishini belgilaydi. Bu — bobning birinchi va eng " +
        "asosiy qoidasi.\n\n" +
        "Ma'nosi oddiy: mamlakatning qaysi qismida yashashingizdan " +
        "qat'i nazar, fuqarolik bir xil hajmda huquq beradi. Bir " +
        "viloyatda yashovchi fuqaro ikkinchisiga qaraganda " +
        "«kamroq fuqaro» bo'lmaydi va unga qo'shimcha shart " +
        "qo'yilmaydi.\n\n" +
        "Bu prinsip amalda ko'rinmaydigan, lekin juda muhim " +
        "himoya. U mamlakat ichida hududiy kamsitishni to'sib " +
        "qo'yadi: yashash joyi asosida huquqlar hajmini " +
        "kamaytirish Konstitutsiyaga zid bo'ladi.",
      example:
        "Fuqaro boshqa viloyatga ko'chib o'tdi va u yerda biror " +
        "huquqni amalga oshirmoqchi bo'lganda «siz bu yerlik " +
        "emassiz» degan asosda rad javobi oldi. Yagona fuqarolik " +
        "prinsipi bo'yicha bunday asos huquqiy emas — fuqarolik " +
        "butun hududda bir xil.",
      keyPoints: [
        "Butun hududda yagona fuqarolik amal qiladi",
        "Yashash hududi fuqarolik huquqlari hajmiga ta'sir qilmaydi",
        "Hududiy asosda huquqni cheklash Konstitutsiyaga zid",
        "Bu prinsip mamlakat yaxlitligining huquqiy ifodasi",
      ],
      warning:
        "«Bu yerlik emassiz» degan og'zaki rad javobini yakuniy " +
        "deb qabul qilmang. Rad javobini YOZMA ravishda va asosi " +
        "ko'rsatilgan holda so'rang — og'zaki rad ustidan shikoyat " +
        "qilish deyarli imkonsiz.",
      lawRefs: [{ code: "KONS", article: "22" }],
    },
    {
      heading: "Yagona fuqarolik: olish asosidan qat'i nazar tenglik",
      text:
        "Ikkinchi va amaliy jihatdan muhimroq qoida: fuqarolik " +
        "unga QANDAY ASOSLARDA ega bo'lganlikdan qat'i nazar, " +
        "hamma uchun TENGDIR.\n\n" +
        "Ya'ni tug'ilish bilan olingan fuqarolik ham, keyinchalik " +
        "qabul qilingan fuqarolik ham bir xil hajmdagi huquq va " +
        "majburiyatlarni keltiradi. Ikkinchi toifadagi fuqaro " +
        "«past darajali» fuqaro emas.\n\n" +
        "Bu qoida kamsitishning juda keng tarqalgan bir turini " +
        "to'sib qo'yadi. Fuqarolikni keyinchalik olganlarni " +
        "ayrim huquqlardan cheklash — Konstitutsiya yo'l " +
        "qo'ymaydigan ajratish.\n\n" +
        "Amaliy natija: fuqarolikni qachon va qanday olganingiz " +
        "hujjatlarda ko'rinsa ham, u sizga beriladigan huquqlar " +
        "hajmini o'zgartirmaydi.",
      example:
        "Fuqarolikni keyinchalik qabul qilgan shaxsdan biror " +
        "huquqni amalga oshirishda «siz tug'ilgandan fuqaromisiz?» " +
        "degan savol asosida qo'shimcha talab qo'yildi. Bu yagona " +
        "fuqarolik prinsipiga zid: huquqlar hajmi fuqarolikni " +
        "olish asosiga bog'liq emas.",
      keyPoints: [
        "Fuqarolik qanday olinganidan qat'i nazar huquqlar teng",
        "Tug'ilish va qabul qilish bo'yicha fuqarolik farqlanmaydi",
        "Olish asosiga qarab qo'shimcha talab qo'yish mumkin emas",
        "Bu qoida kamsitishga qarshi bevosita himoya",
      ],
      warning:
        "Fuqarolik hujjatlaringizdagi yozuvlar asosida sizga " +
        "boshqacha munosabat bildirilsa, bu Konstitutsiya " +
        "darajasidagi buzilish — uni oddiy ish yuritish " +
        "kamchiligi deb qoldirib ketmang.",
      lawRefs: [{ code: "KONS", article: "22" }],
    },
    {
      heading: "Qoraqalpog'iston Respublikasi fuqarosining holati",
      text:
        "Konstitutsiya alohida qoida bilan belgilaydi: " +
        "Qoraqalpog'iston Respublikasining fuqarosi ayni vaqtda " +
        "O'zbekiston Respublikasining fuqarosi hisoblanadi.\n\n" +
        "Bu ikkinchi, alohida fuqarolik EMAS. Bu — bitta " +
        "fuqarolikning ikki nomi bilan e'tirof etilishi. " +
        "Qoraqalpog'iston fuqarosi O'zbekiston fuqarosiga " +
        "beriladigan barcha huquqlardan to'liq hajmda " +
        "foydalanadi.\n\n" +
        "Amaliy natija: hech qanday qo'shimcha hujjat, " +
        "ro'yxatdan o'tish yoki tasdiqlash talab qilinmaydi. " +
        "Qoraqalpog'iston fuqarosi mamlakatning istalgan " +
        "joyida o'zini O'zbekiston fuqarosi sifatida " +
        "ko'rsatadi va shu asosda huquqlaridan foydalanadi.\n\n" +
        "Bu qoida yagona fuqarolik prinsipining mantiqiy " +
        "davomi: agar fuqarolik butun hududda yagona bo'lsa, " +
        "hududning bir qismida boshqacha fuqarolik bo'lishi " +
        "mumkin emas.",
      example:
        "Qoraqalpog'iston fuqarosidan boshqa viloyatda xizmat " +
        "ko'rsatishda «O'zbekiston fuqaroligini tasdiqlovchi " +
        "qo'shimcha hujjat» so'raldi. Bunday talab asossiz — " +
        "Konstitutsiya bo'yicha u allaqachon O'zbekiston " +
        "fuqarosi hisoblanadi.",
      keyPoints: [
        "Qoraqalpog'iston fuqarosi ayni vaqtda O'zbekiston fuqarosi",
        "Bu alohida ikkinchi fuqarolik emas",
        "Qo'shimcha tasdiqlash hujjati talab qilinmaydi",
        "Huquqlar hajmi to'liq va bir xil",
      ],
      warning:
        "Qo'shimcha «tasdiqlash» hujjati so'ralsa, uning huquqiy " +
        "asosini yozma so'rang. Ko'pincha bunday talab qonunda " +
        "emas, mahalliy amaliyotda paydo bo'ladi.",
      lawRefs: [{ code: "KONS", article: "22" }],
    },
    {
      heading: "Fuqarolikni olish va yo'qotish: qonun bilan belgilanadi",
      text:
        "Konstitutsiya fuqarolikka ega bo'lish va uni yo'qotish " +
        "asoslari hamda tartibi QONUN bilan belgilanishini " +
        "yozadi.\n\n" +
        "Bu qoidaning ma'nosini tushunish muhim. Konstitutsiya " +
        "bu yerda ataylab tafsilotga kirmaydi — u faqat " +
        "MANBAni ko'rsatadi. Ya'ni fuqarolik masalasi " +
        "buyruq, qaror yoki mahalliy hujjat bilan emas, " +
        "aynan QONUN darajasidagi hujjat bilan hal " +
        "qilinishi kerak.\n\n" +
        "Amaliy natija ikkita. Birinchisi — fuqarolikni " +
        "yo'qotish asoslari oldindan qonunda yozilgan bo'lishi " +
        "shart, ya'ni ular kutilmagan tarzda paydo bo'la " +
        "olmaydi. Ikkinchisi — qaror qabul qilish tartibi " +
        "ham qonunda belgilangan, ya'ni jarayon " +
        "tekshiriladigan bo'ladi.\n\n" +
        "Shu sababli fuqarolik masalasida birinchi qadam — " +
        "amaldagi qonun matnini o'qish, quloqdan eshitilgan " +
        "«tartib»ga tayanmaslik.",
      example:
        "Fuqaro fuqarolikni yo'qotish haqida og'zaki xabar " +
        "oldi. To'g'ri yo'l — asos qaysi qonun moddasiga " +
        "tayanganini va qaror qaysi organ tomonidan qabul " +
        "qilinganini yozma so'rash. Asossiz qaror ustidan " +
        "shikoyat qilish mumkin.",
      keyPoints: [
        "Olish va yo'qotish asoslari faqat qonunda belgilanadi",
        "Konstitutsiya bu yerda manbani ko'rsatadi, tafsilotni emas",
        "Qaror qabul qilish tartibi ham qonunda yozilgan",
        "Har qanday qaror asosi va organi bilan tekshiriladi",
      ],
      warning:
        "Fuqarolik masalasida «tezlashtirib beraman» degan " +
        "vositachilar bilan ishlash — hujjatlarni ham, pulni " +
        "ham yo'qotishning eng keng tarqalgan yo'li. Bu " +
        "masala faqat vakolatli organ orqali hal qilinadi.",
      lawRefs: [{ code: "KONS", article: "22" }],
    },
    {
      heading: "Davlat himoyasi: hududda ham, tashqarisida ham",
      text:
        "Konstitutsiya aniq majburiyat oladi: davlat o'z " +
        "hududida HAM, uning tashqarisida HAM o'z fuqarolarini " +
        "himoya qilish va ularga homiylik ko'rsatishni " +
        "KAFOLATLAYDI.\n\n" +
        "«Kafolatlaydi» so'ziga e'tibor bering — bu davlatning " +
        "ixtiyoriy yordami emas, balki Konstitutsiya darajasida " +
        "olingan majburiyat.\n\n" +
        "«Tashqarisida ham» degan qism amalda eng qimmatli. " +
        "Chet davlatda bo'lganingizda siz o'sha davlat " +
        "qonunlariga bo'ysunasiz, lekin O'zbekiston fuqarosi " +
        "sifatida himoya olish huquqingiz yo'qolmaydi. " +
        "Fuqarolik chegarada tugamaydi.\n\n" +
        "Himoya va homiylik ikki xil narsa: himoya — huquqingiz " +
        "buzilganda aralashuv, homiylik esa kundalik yordam " +
        "(hujjat masalalari, ma'lumot berish, aloqa " +
        "o'rnatish).",
      example:
        "Fuqaro chet davlatda pasportini yo'qotdi. Bu jinoyat " +
        "ham, nizo ham emas — lekin homiylik doirasiga kiradi: " +
        "vakolatxona hujjatni tiklash va vataniga qaytish " +
        "yo'lini ta'minlashda yordam beradi.",
      keyPoints: [
        "Himoya davlatning Konstitutsiyaviy majburiyati",
        "U mamlakat hududida ham, tashqarisida ham amal qiladi",
        "Fuqarolik chegarani kesib o'tganda tugamaydi",
        "Himoya va homiylik — ikki xil yordam turi",
      ],
      warning:
        "Chet elda muammo yuzaga kelganda vakolatxonaga " +
        "murojaat qilishni «oxirgi chora» deb kechiktirmang. " +
        "Erta xabar berish yordam imkoniyatlarini ancha " +
        "kengaytiradi.",
      lawRefs: [{ code: "KONS", article: "23" }],
    },
    {
      heading: "Chet elda diplomatik himoya qanday ishlaydi",
      text:
        "Chet davlatdagi himoya amalda diplomatik " +
        "vakolatxonalar va konsullik muassasalari orqali " +
        "amalga oshiriladi.\n\n" +
        "Eng ko'p uchraydigan holatlar: hujjat yo'qolishi, " +
        "ushlab turilish yoki hibsga olinish, og'ir kasallik " +
        "yoki baxtsiz hodisa, mahalliy organlar tomonidan " +
        "huquq buzilishi, ish beruvchi bilan nizo.\n\n" +
        "Muhim tafsilot va uni oldindan bilish kerak: " +
        "diplomatik himoya chet davlat qonunlaridan OZOD " +
        "QILMAYDI. Ya'ni u sizni javobgarlikdan qutqarmaydi " +
        "va mahalliy sudning qarorini bekor qilmaydi.\n\n" +
        "Uning haqiqiy qiymati boshqa narsada: protsedura " +
        "adolatli o'tishini kuzatish, tarjimon va yuridik " +
        "yordam olish imkonini ta'minlash, oilaga xabar " +
        "berish va saqlash shartlarini nazorat " +
        "qilish. Amalda bu ko'pincha ishning natijasiga " +
        "sezilarli ta'sir qiladi.",
      example:
        "Fuqaro chet davlatda ushlab turildi. Diplomatik " +
        "himoya bu yerda ayblovni bekor qilmaydi, lekin " +
        "vakolatxona xabardor qilinsa — advokat va tarjimon " +
        "ta'minlanishi, oilaga xabar berilishi va " +
        "protsedura kuzatilishi mumkin bo'ladi.",
      keyPoints: [
        "Himoya vakolatxona va konsullik orqali amalga oshiriladi",
        "U mahalliy qonundan ozod qilmaydi",
        "Asosiy qiymati — adolatli protsedurani ta'minlash",
        "Xabar berish qanchalik erta bo'lsa, imkoniyat shuncha keng",
      ],
      warning:
        "Ushlab turilganingizda vakolatxonaga xabar berishni " +
        "TALAB QILING va bu talabingiz qayd etilishini " +
        "so'rang. Bu huquq ko'pincha o'z-o'zidan " +
        "ta'minlanmaydi.",
      lawRefs: [{ code: "KONS", article: "23" }],
    },
    {
      heading: "Chiqarib yuborish va boshqa davlatga berish taqiqi",
      text:
        "Konstitutsiyaning eng kuchli kafolatlaridan biri shu " +
        "bobda joylashgan: O'zbekiston Respublikasi fuqarosi " +
        "O'zbekistondan tashqariga MAJBURIY CHIQARIB " +
        "YUBORILISHI yoki BOSHQA DAVLATGA BERIB YUBORILISHI " +
        "MUMKIN EMAS.\n\n" +
        "Bu qoida ikkita alohida taqiqni o'z ichiga oladi. " +
        "Birinchisi — fuqaroni o'z mamlakatidan majburan " +
        "chiqarib yuborish taqiqi. Ikkinchisi — fuqaroni " +
        "boshqa davlat ixtiyoriga berib yuborish taqiqi.\n\n" +
        "Qoida MUTLAQ shaklda yozilgan: Konstitutsiya matnida " +
        "unga istisno ko'rsatilmagan. Bunday istisnoning " +
        "yo'qligi — juda kuchli himoya belgisi.\n\n" +
        "Amaliy ma'nosi: fuqaro chet davlatda jinoyat sodir " +
        "etgan deb hisoblansa ham, uni o'sha davlatga berib " +
        "yuborish mumkin emas.",
      example:
        "Boshqa davlat O'zbekiston fuqarosini o'z ixtiyoriga " +
        "berishni so'radi. Konstitutsiya bo'yicha fuqaroni " +
        "berib yuborish mumkin emas — bu talab fuqarolik " +
        "asosida rad etiladi.",
      keyPoints: [
        "Fuqaroni majburan chiqarib yuborish taqiqlangan",
        "Fuqaroni boshqa davlatga berib yuborish taqiqlangan",
        "Qoida mutlaq — Konstitutsiyada istisno ko'rsatilmagan",
        "Bu himoya aynan fuqarolik maqomiga bog'langan",
      ],
      warning:
        "Bu kafolat FUQAROlarga tegishli. Fuqaroligi " +
        "bo'lmagan yoki chet el fuqarosi bo'lgan shaxslarning " +
        "holati boshqacha tartibda — buni chalkashtirmaslik " +
        "kerak.",
      lawRefs: [{ code: "KONS", article: "23" }],
    },
    {
      heading: "Xorijda yashovchi vatandoshlar bilan aloqa",
      text:
        "Uchinchi qoida: davlat xorijda yashayotgan " +
        "vatandoshlar bilan aloqalarni saqlab qolish hamda " +
        "rivojlantirish to'g'risida xalqaro huquq normalariga " +
        "muvofiq g'amxo'rlik qiladi.\n\n" +
        "Bu qoidaning qamrovi oldingisidan kengroq. U faqat " +
        "hozirgi fuqarolarga emas, umuman VATANDOSHLARGA " +
        "qaratilgan — ya'ni xorijda yashovchi, mamlakat bilan " +
        "tarixiy, madaniy va til jihatidan bog'liq " +
        "shaxslarga.\n\n" +
        "G'amxo'rlik bu yerda majburiy aralashuv emas, " +
        "balki aloqani saqlash va rivojlantirish: madaniy " +
        "va ta'lim aloqalari, ona tilini saqlash imkoni, " +
        "vatan bilan bog'liqlikni yo'qotmaslik.\n\n" +
        "Muhim chegara: qoida «xalqaro huquq normalariga " +
        "muvofiq» deb yozilgan. Ya'ni bu g'amxo'rlik boshqa " +
        "davlatning ichki ishlariga aralashish shaklini " +
        "ololmaydi.",
      example:
        "Xorijda yashovchi jamoa ona tilida ta'lim va " +
        "madaniy tadbirlar tashkil etishda qo'llab-quvvatlash " +
        "so'radi. Bu aynan shu qoida doirasidagi " +
        "g'amxo'rlikka misol.",
      keyPoints: [
        "Qoida vatandoshlarga qaratilgan, faqat fuqarolarga emas",
        "Maqsad — aloqani saqlash va rivojlantirish",
        "Amalga oshirish xalqaro huquq normalari doirasida",
        "Bu boshqa davlat ishlariga aralashish emas",
      ],
      warning:
        "Vatandosh maqomi fuqarolik bilan bir xil emas. " +
        "U avtomatik ravishda fuqarolik huquqlarini " +
        "bermaydi — ikkalasini aralashtirmang.",
      lawRefs: [{ code: "KONS", article: "23" }],
    },
    {
      heading: "Chet el fuqarolarining huquq va erkinliklari",
      text:
        "Konstitutsiya mamlakat hududidagi chet el fuqarolari " +
        "va fuqaroligi bo'lmagan shaxslarning huquq va " +
        "erkinliklari XALQARO HUQUQ NORMALARIGA MUVOFIQ " +
        "ta'minlanishini belgilaydi.\n\n" +
        "Bu qoida ikki jihatdan muhim. Birinchisi — chet el " +
        "fuqarosi mamlakat hududida huquqsiz emas. Uning " +
        "huquqlari ta'minlanadi va bu davlatning " +
        "majburiyati.\n\n" +
        "Ikkinchisi — o'lchov sifatida XALQARO HUQUQ " +
        "normalari ko'rsatilgan. Ya'ni bu yerda faqat ichki " +
        "qonunga emas, xalqaro darajada tan olingan " +
        "standartlarga tayaniladi.\n\n" +
        "Shu bilan birga, chet el fuqarosining holati " +
        "fuqaronikiga to'liq teng emas. Ayrim huquqlar " +
        "(masalan mamlakat boshqaruvida ishtirok etish " +
        "bilan bog'liq huquqlar) tabiatan fuqarolik " +
        "bilan bog'langan. Farq — kamsitish emas, " +
        "fuqarolik institutining mazmuni.",
      example:
        "Mamlakat hududida ishlayotgan chet el fuqarosining " +
        "shaxsiy daxlsizligi buzildi. U himoya so'rash " +
        "huquqiga ega — huquqlar fuqarolikka qarab emas, " +
        "insonga tegishli bo'lgan qismida ta'minlanadi.",
      keyPoints: [
        "Chet el fuqarolarining huquqlari ta'minlanadi",
        "O'lchov — xalqaro huquq normalari",
        "Fuqaroligi bo'lmagan shaxslar ham shu qoida doirasida",
        "Ayrim huquqlar tabiatan fuqarolik bilan bog'liq qoladi",
      ],
      warning:
        "«Chet el fuqarosi bu yerda huquqqa ega emas» degan " +
        "qarash Konstitutsiyaga zid. Bunday asosda xizmat " +
        "ko'rsatishdan bosh tortish huquqiy emas.",
      lawRefs: [{ code: "KONS", article: "24" }],
    },
    {
      heading: "Chet el fuqarolarining burchlari",
      text:
        "Xuddi shu modda ikkinchi tomonni ham belgilaydi: " +
        "chet el fuqarolari va fuqaroligi bo'lmagan shaxslar " +
        "Konstitutsiya, qonunlar va xalqaro shartnomalar " +
        "bilan belgilangan BURCHLARNI ado etadilar.\n\n" +
        "Ya'ni huquq va burch bu yerda ham juftlikda keladi. " +
        "Mamlakat hududida bo'lish — uning huquqiy tartibiga " +
        "bo'ysunishni anglatadi.\n\n" +
        "Burchlarning manbai uchta qilib ko'rsatilgan: " +
        "Konstitutsiyaning o'zi, qonunlar va xalqaro " +
        "shartnomalar. Uchinchi manba muhim — chet el " +
        "fuqarosining holati ko'pincha davlatlararo " +
        "shartnomalar bilan ham tartibga solinadi.\n\n" +
        "Amaliy natija: chet el fuqarosi «men bu yerning " +
        "fuqarosi emasman» degan asosda mahalliy qonun " +
        "talablaridan ozod bo'lmaydi.",
      example:
        "Mamlakat hududida vaqtincha turgan chet el " +
        "fuqarosi mahalliy qoidani buzdi va «men chet " +
        "elliman» deb javobgarlikdan bosh tortmoqchi " +
        "bo'ldi. Bu asos huquqiy emas — burchlar hudud " +
        "bo'yicha amal qiladi.",
      keyPoints: [
        "Chet el fuqarolari belgilangan burchlarni bajaradi",
        "Manbalar: Konstitutsiya, qonunlar, xalqaro shartnomalar",
        "Fuqarolik yo'qligi qonundan ozod qilmaydi",
        "Huquq va burch bu yerda ham juftlikda keladi",
      ],
      warning:
        "Chet elga chiqqaningizda ham xuddi shu mantiq siz " +
        "uchun ishlaydi: o'sha davlat qonunlariga " +
        "bo'ysunasiz. Borishdan oldin asosiy qoidalarni " +
        "bilib oling.",
      lawRefs: [{ code: "KONS", article: "24" }],
    },
  ],
};

module.exports = { LESSON };
