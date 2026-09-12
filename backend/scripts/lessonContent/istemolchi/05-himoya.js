"use strict";
/**
 * ISTE'MOLCHI HUQUQLARI — 5-QISM: HUQUQNI HIMOYA QILISH (39–50-mavzular)
 *
 * Ataylab OXIRIDA: bu qism "endi nima qilaman" degan savolga
 * javob beradi va oldingi qismlardagi bilimni HARAKATGA
 * aylantiradi. Ketma-ketlik: da'vo → ekspertiza → davlat
 * organlari → sud → javobgarlik.
 */

const SECTIONS = [
  /* ── 39 ────────────────────────────────────────────────────── */
  {
    heading: "Da'voni kimga qo'yish kerak",
    text:
      "Huquq buzildi — birinchi " +
      "savol: KIMGA murojaat " +
      "qilaman?\n\n" +
      "Iste'molchi odatda uch " +
      "shaxsdan birini tanlashi " +
      "mumkin: SOTUVCHI " +
      "(tovarni sotgan); ISHLAB " +
      "CHIQARUVCHI (kafillik " +
      "majburiyatlari " +
      "bo'yicha); IJROCHI (ish " +
      "yoki xizmat " +
      "bo'yicha).\n\n" +
      "⚠️ Amaliy qoida: eng " +
      "oson yo'l — " +
      "SOTUVCHIGA murojaat " +
      "qilish, chunki xarid " +
      "hujjati aynan unda " +
      "rasmiylashtirilgan va " +
      "aloqa " +
      "osonroq.\n\n" +
      "Sotuvchi \"bu ishlab " +
      "chiqaruvchining " +
      "muammosi\" deb " +
      "javobgarlikni " +
      "o'tkaza olmaydi — " +
      "tanlov iste'molchida.\n\n" +
      "Murojaatdan oldin " +
      "aniqlab oling: " +
      "sotuvchining to'liq " +
      "rasmiy nomi; " +
      "manzili; " +
      "rahbarining nomi. " +
      "Bular arizada " +
      "ko'rsatiladi.\n\n" +
      "Onlayn xaridda " +
      "platformaning " +
      "javobgarligi ham " +
      "ko'tarilishi mumkin.",
    example:
      "Xaridor texnika " +
      "buzilgach xizmat " +
      "markaziga bordi, u " +
      "yerda \"do'konga " +
      "boring\" deyishdi, " +
      "do'konda esa " +
      "\"markazga boring\". " +
      "Bunday holatda talabni " +
      "YOZMA qo'yish " +
      "zanjirni to'xtatadi.",
    keyPoints: [
      "Talab sotuvchi, ishlab chiqaruvchi yoki ijrochiga qo'yiladi",
      "Tanlov iste'molchida bo'ladi",
      "Sotuvchi javobgarlikni boshqaga o'tkaza olmaydi",
      "Murojaatdan oldin rasmiy rekvizitlarni aniqlang",
    ],
    warning:
      "Bir joydan " +
      "boshqasiga " +
      "yuborilaverish — " +
      "eng ko'p " +
      "uchraydigan " +
      "vaqt yo'qotish " +
      "usuli. Yozma " +
      "murojaat buni " +
      "to'xtatadi.",
    lawRefs: [
      { code: "IHQ", article: "13" },
      { code: "IHQ", article: "11" },
      { code: "IHQ", article: "5" },
    ],
  },

  /* ── 40 ────────────────────────────────────────────────────── */
  {
    heading: "Yozma da'vo (pretenziya) qanday yoziladi",
    text:
      "Yozma da'vo — huquqni " +
      "himoya qilishning " +
      "BIRINCHI va eng muhim " +
      "qadami.\n\n" +
      "Arizada bo'lishi kerak " +
      "bo'lgan elementlar:\n\n" +
      "(1) KIMGA — " +
      "tashkilotning to'liq " +
      "nomi va manzili;\n\n" +
      "(2) KIMDAN — " +
      "ismingiz, manzilingiz, " +
      "aloqa " +
      "ma'lumotlari;\n\n" +
      "(3) NIMA BO'LDI — " +
      "xarid sanasi, tovar " +
      "nomi, narxi, qanday " +
      "nuqson " +
      "aniqlangani;\n\n" +
      "(4) NIMA TALAB " +
      "QILASIZ — aniq va " +
      "bitta talab " +
      "(masalan \"pulni " +
      "qaytarishni " +
      "so'rayman\");\n\n" +
      "(5) MUDDAT — javob " +
      "kutayotgan " +
      "muddat;\n\n" +
      "(6) ILOVALAR — chek " +
      "nusxasi, kafolat " +
      "talonchasi, " +
      "suratlar.\n\n" +
      "⚠️ ENG MUHIMI: " +
      "arizani IKKI " +
      "NUSXADA yozing. " +
      "Birini topshiring, " +
      "ikkinchisiga qabul " +
      "qilgan shaxsning " +
      "imzosi, sanasi va " +
      "muhrini oling. " +
      "Qabul qilishdan bosh " +
      "tortsalar — pochta " +
      "orqali xabarnomali " +
      "xat bilan " +
      "yuboring.",
    example:
      "Xaridor arizani " +
      "topshirdi, lekin " +
      "nusxasiga belgi " +
      "olmadi. Keyinchalik " +
      "do'kon \"biz hech " +
      "qanday ariza " +
      "olmaganmiz\" dedi — " +
      "va buni rad etib " +
      "bo'lmadi.",
    keyPoints: [
      "Yozma da'vo — himoyaning birinchi qadami",
      "Talab aniq va bitta bo'lishi kerak",
      "Ariza ikki nusxada yoziladi",
      "Qabul belgisi olinmasa pochta orqali yuboriladi",
    ],
    warning:
      "Qabul belgisiz " +
      "topshirilgan ariza " +
      "— topshirilmagan " +
      "ariza bilan " +
      "teng. Bu qoidani " +
      "hech qachon " +
      "buzmang.",
    lawRefs: [
      { code: "IHQ", article: "13" },
      { code: "IHQ", article: "29" },
      { code: "IHQ", article: "17" },
    ],
  },

  /* ── 41 ────────────────────────────────────────────────────── */
  {
    heading: "Ekspertiza: kim to'laydi va nima beradi",
    text:
      "Nuqson kimning aybi " +
      "bilan yuzaga kelgani " +
      "bo'yicha tortishuv " +
      "chiqsa — EKSPERTIZA " +
      "o'tkaziladi.\n\n" +
      "Kafolat muddati " +
      "ichida ekspertiza " +
      "odatda SOTUVCHI " +
      "(ishlab chiqaruvchi) " +
      "hisobidan " +
      "o'tkaziladi — chunki " +
      "isbot yuki unda " +
      "bo'ladi.\n\n" +
      "⚠️ ISTE'MOLCHINING " +
      "MUHIM HUQUQLARI: " +
      "ekspertiza " +
      "o'tkazilishida " +
      "ISHTIROK ETISH; " +
      "natija bilan " +
      "TANISHISH; natijaga " +
      "rozi bo'lmasa uni " +
      "sudda " +
      "E'TIROZ qilish " +
      "yoki MUSTAQIL " +
      "ekspertiza " +
      "o'tkazish.\n\n" +
      "Agar ekspertiza " +
      "nuqson " +
      "iste'molchining " +
      "aybi bilan " +
      "yuzaga kelganini " +
      "ko'rsatsa, " +
      "xarajatlar " +
      "iste'molchi " +
      "zimmasiga " +
      "o'tishi mumkin.\n\n" +
      "Shuning uchun " +
      "ekspertizaga " +
      "borishdan oldin " +
      "vaziyatni " +
      "xolisona " +
      "baholang.",
    example:
      "Sotuvchi " +
      "ekspertizani " +
      "iste'molchisiz " +
      "o'tkazdi va " +
      "\"aybdor " +
      "xaridor\" degan " +
      "xulosa chiqardi. " +
      "Iste'molchi " +
      "ishtirok etish " +
      "huquqidan mahrum " +
      "qilingani bu " +
      "xulosaga e'tiroz " +
      "uchun asos.",
    keyPoints: [
      "Kafolat muddatida ekspertiza sotuvchi hisobidan o'tkaziladi",
      "Iste'molchi ekspertizada ishtirok etish huquqiga ega",
      "Natijaga e'tiroz bildirish va mustaqil ekspertiza mumkin",
      "Aybdor topilsa xarajat unga yuklanadi",
    ],
    warning:
      "Ekspertizaga " +
      "tovarni " +
      "topshirganda " +
      "uning holatini " +
      "suratga oling — " +
      "qaytganda " +
      "yangi shikast " +
      "paydo bo'lishi " +
      "mumkin.",
    lawRefs: [
      { code: "FK2", article: "409" },
      { code: "FK2", article: "407" },
      { code: "IHQ", article: "13" },
    ],
  },

  /* ── 42 ────────────────────────────────────────────────────── */
  {
    heading: "Davlat tomonidan himoya qilish",
    text:
      "Iste'molchi yolg'iz " +
      "emas — uning " +
      "huquqlarini himoya " +
      "qilish DAVLAT " +
      "vazifasi sifatida " +
      "belgilangan.\n\n" +
      "Qonun davlat " +
      "himoyasining " +
      "ta'minlanishini " +
      "alohida moddada " +
      "mustahkamlaydi. " +
      "Bu shuni " +
      "anglatadiki, " +
      "iste'molchi " +
      "nizosi faqat " +
      "\"ikki shaxs " +
      "o'rtasidagi " +
      "masala\" emas.\n\n" +
      "Tizimda bir necha " +
      "daraja bor:\n\n" +
      "(1) tovarlar " +
      "xavfsizligini va " +
      "sifatini nazorat " +
      "qiluvchi davlat " +
      "boshqaruvi " +
      "organlari;\n\n" +
      "(2) mahalliy " +
      "hokimiyat " +
      "organlari;\n\n" +
      "(3) maxsus " +
      "vakolatli organ " +
      "— Iste'molchilar " +
      "huquqlarini " +
      "himoya qilish " +
      "agentligi va " +
      "uning hududiy " +
      "bo'linmalari;\n\n" +
      "(4) sud.\n\n" +
      "Har bir darajaning " +
      "o'z vakolati bor " +
      "va ular keyingi " +
      "mavzularda " +
      "batafsil " +
      "ko'riladi.",
    example:
      "Do'kon muddati " +
      "o'tgan mahsulot " +
      "sotyapti. Bu " +
      "faqat shaxsiy " +
      "nizo emas — " +
      "nazorat organiga " +
      "murojaat qilish " +
      "boshqa " +
      "xaridorlarni ham " +
      "himoya qiladi.",
    keyPoints: [
      "Iste'molchi huquqlari himoyasi — davlat vazifasi",
      "Nazorat organlari, hokimiyat, agentlik va sud ishlaydi",
      "Har birining o'z vakolati bor",
      "Murojaat boshqa iste'molchilarni ham himoya qiladi",
    ],
    warning:
      "Bir organga " +
      "murojaat " +
      "qilganingiz " +
      "boshqasiga " +
      "murojaat qilish " +
      "huquqini " +
      "yo'qotmaydi.",
    lawRefs: [
      { code: "IHQ", article: "23" },
      { code: "IHQ", article: "26" },
    ],
  },

  /* ── 43 ────────────────────────────────────────────────────── */
  {
    heading: "Iste'molchilar huquqlarini himoya qilish agentligi",
    text:
      "Iste'molchi uchun " +
      "eng muhim maxsus " +
      "organ — " +
      "Monopoliyaga " +
      "qarshi kurashish " +
      "qo'mitasi " +
      "huzuridagi " +
      "Iste'molchilar " +
      "huquqlarini himoya " +
      "qilish agentligi va " +
      "uning hududiy " +
      "organlari.\n\n" +
      "Agentlik " +
      "iste'molchilarning " +
      "murojaatlarini " +
      "ko'rib chiqadi, " +
      "tekshiruv " +
      "o'tkazadi va " +
      "huquqbuzarliklarni " +
      "bartaraf etish " +
      "bo'yicha choralar " +
      "ko'radi.\n\n" +
      "⚠️ Amaliy afzalligi: " +
      "sudga qaraganda " +
      "ANCHA TEZ va " +
      "BEPUL. Ko'p " +
      "hollarda " +
      "agentlikning " +
      "aralashuvi " +
      "sotuvchini " +
      "talabni " +
      "bajarishga " +
      "undaydi.\n\n" +
      "Murojaat qilishdan " +
      "oldin sotuvchiga " +
      "yozma da'vo " +
      "qo'ygan bo'lish " +
      "afzal — bu " +
      "sizning " +
      "pozitsiyangizni " +
      "kuchaytiradi.\n\n" +
      "Davlat boshqaruvi " +
      "organining " +
      "ko'rsatmasi " +
      "ustidan shikoyat " +
      "qilish tartibi " +
      "ham alohida " +
      "belgilangan.",
    example:
      "Do'kon ikki oy " +
      "davomida haqli " +
      "talabni " +
      "bajarmadi. " +
      "Agentlikka " +
      "murojaatdan " +
      "keyin masala " +
      "bir necha kunda " +
      "hal bo'ldi — " +
      "chunki tekshiruv " +
      "va javobgarlik " +
      "xavfi paydo " +
      "bo'ldi.",
    keyPoints: [
      "Agentlik — iste'molchi uchun maxsus vakolatli organ",
      "Murojaat bepul va sudga qaraganda tezroq",
      "Tekshiruv o'tkazish va chora ko'rish vakolati bor",
      "Oldindan yozma da'vo qo'yish pozitsiyani kuchaytiradi",
    ],
    warning:
      "Murojaatga " +
      "barcha hujjat " +
      "nusxasini " +
      "ilova qiling — " +
      "hujjatsiz " +
      "murojaat " +
      "ko'pincha " +
      "natijasiz " +
      "qoladi.",
    lawRefs: [
      { code: "IHQ", article: "25" },
      { code: "IHQ", article: "27-1" },
      { code: "IHQ", article: "23" },
    ],
  },

  /* ── 44 ────────────────────────────────────────────────────── */
  {
    heading: "Mahalliy hokimiyat organlari va jamoat birlashmalari",
    text:
      "Agentlikdan tashqari " +
      "yana ikki yo'nalish " +
      "bor.\n\n" +
      "MAHALLIY HOKIMIYAT " +
      "ORGANLARI " +
      "iste'molchilar " +
      "huquqlarini himoya " +
      "qilishda o'z " +
      "vakolatlariga ega. " +
      "Ular hududda " +
      "savdo va xizmat " +
      "ko'rsatish " +
      "sohasidagi " +
      "muammolar bo'yicha " +
      "murojaatlarni " +
      "ko'rib " +
      "chiqadi.\n\n" +
      "ISTE'MOLCHILARNING " +
      "JAMOAT " +
      "BIRLASHMALARI — " +
      "alohida moddada " +
      "nazarda tutilgan " +
      "nodavlat " +
      "tashkilotlar.\n\n" +
      "Ularning " +
      "imkoniyatlari: " +
      "iste'molchilarga " +
      "maslahat va " +
      "yuridik yordam " +
      "berish; tovar " +
      "va xizmatlar " +
      "sifatini " +
      "o'rganish; " +
      "iste'molchilar " +
      "manfaatlarini " +
      "himoya qilib " +
      "sudga murojaat " +
      "qilish.\n\n" +
      "⚠️ Bu ayniqsa " +
      "yuridik bilim " +
      "yoki mablag' " +
      "yetishmagan " +
      "holatda " +
      "foydali: " +
      "birlashma " +
      "orqali himoya " +
      "olish mumkin.",
    example:
      "Bir necha " +
      "xaridor bir xil " +
      "sotuvchidan " +
      "zarar ko'rdi. " +
      "Jamoat " +
      "birlashmasi " +
      "orqali " +
      "birgalikda " +
      "murojaat qilish " +
      "yakka " +
      "murojaatdan " +
      "samaraliroq " +
      "bo'ladi.",
    keyPoints: [
      "Mahalliy hokimiyat organlari ham vakolatga ega",
      "Jamoat birlashmalari qonunda nazarda tutilgan",
      "Ular maslahat, yordam va sudda vakillik qiladi",
      "Jamoaviy murojaat samaraliroq bo'lishi mumkin",
    ],
    warning:
      "Jamoat " +
      "birlashmasi " +
      "rasmiy " +
      "ro'yxatdan " +
      "o'tganini " +
      "tekshiring — " +
      "\"himoya " +
      "qilamiz\" deb " +
      "pul oladigan " +
      "soxta " +
      "tashkilotlar " +
      "ham " +
      "uchraydi.",
    lawRefs: [
      { code: "IHQ", article: "24" },
      { code: "IHQ", article: "30" },
    ],
  },

  /* ── 45 ────────────────────────────────────────────────────── */
  {
    heading: "Sud orqali himoya",
    text:
      "Agar boshqa yo'llar " +
      "natija bermasa — " +
      "SUD. Iste'molchilar " +
      "huquqlarini sud " +
      "orqali himoya qilish " +
      "alohida moddada " +
      "belgilangan.\n\n" +
      "⚠️ ISTE'MOLCHI UCHUN " +
      "MUHIM YENGILLIKLAR " +
      "nazarda tutilgan. " +
      "Odatda bularga " +
      "kiradi: da'vo " +
      "arizasini o'z " +
      "yashash joyi " +
      "bo'yicha ham " +
      "berish imkoniyati; " +
      "davlat bojidan " +
      "ozod qilish yoki " +
      "yengillik.\n\n" +
      "Bu yengilliklar " +
      "ataylab " +
      "berilgan: " +
      "iste'molchi " +
      "tadbirkorga " +
      "nisbatan zaifroq " +
      "tomon " +
      "hisoblanadi.\n\n" +
      "Da'vo arizasida " +
      "ko'rsatiladi: " +
      "kim va kimga; " +
      "nima bo'lgani " +
      "(sanalar bilan); " +
      "qanday huquq " +
      "buzilgani; ANIQ " +
      "talablar (asosiy " +
      "summa, zarar, " +
      "ma'naviy zarar); " +
      "ilovalar " +
      "ro'yxati.\n\n" +
      "Sudgacha yozma " +
      "da'vo qo'ygan " +
      "bo'lsangiz, u " +
      "ham ilova " +
      "qilinadi va " +
      "pozitsiyangizni " +
      "kuchaytiradi.",
    example:
      "Xaridor " +
      "agentlikka " +
      "murojaat qildi, " +
      "sotuvchi " +
      "baribir " +
      "bajarmadi. Endi " +
      "sudga da'vo " +
      "qo'yiladi va " +
      "avvalgi barcha " +
      "murojaatlar " +
      "dalil sifatida " +
      "ilova " +
      "qilinadi.",
    keyPoints: [
      "Sud orqali himoya alohida moddada kafolatlangan",
      "Iste'molchi uchun protsessual yengilliklar mavjud",
      "Da'voda talablar aniq va raqam bilan yoziladi",
      "Oldingi murojaatlar dalil sifatida ilova qilinadi",
    ],
    warning:
      "Da'vo " +
      "muddatlarini " +
      "nazorat " +
      "qiling — " +
      "muddat " +
      "o'tgach " +
      "haqli talab " +
      "ham " +
      "ko'rilmay " +
      "qolishi " +
      "mumkin.",
    lawRefs: [
      { code: "IHQ", article: "29" },
      { code: "FK2", article: "1183" },
      { code: "IHQ", article: "22" },
    ],
  },

  /* ── 46 ────────────────────────────────────────────────────── */
  {
    heading: "Qonunni buzganlik uchun javobgarlik",
    text:
      "Iste'molchilar " +
      "huquqlarini himoya " +
      "qilish " +
      "to'g'risidagi " +
      "qonunchilikni " +
      "buzganlik uchun " +
      "JAVOBGARLIK " +
      "nazarda tutilgan.\n\n" +
      "Javobgarlik turli " +
      "shakllarda " +
      "bo'lishi mumkin: " +
      "mulkiy " +
      "(zararni qoplash, " +
      "neustoyka); " +
      "ma'muriy; " +
      "qonunda nazarda " +
      "tutilgan boshqa " +
      "turlar.\n\n" +
      "⚠️ Iste'molchi " +
      "uchun amaliy " +
      "ahamiyati: " +
      "sotuvchi uchun " +
      "javobgarlik " +
      "xavfi mavjudligi " +
      "ko'p hollarda " +
      "nizoni sudsiz " +
      "hal qilishga " +
      "undaydi.\n\n" +
      "Shuning uchun " +
      "yozma da'voingizda " +
      "javobgarlik " +
      "haqida eslatib " +
      "o'tish " +
      "foydali — bu " +
      "tahdid emas, " +
      "huquqiy " +
      "oqibatlarni " +
      "aytish.\n\n" +
      "Nazorat " +
      "organining " +
      "ko'rsatmasi " +
      "ustidan " +
      "shikoyat " +
      "qilish " +
      "imkoniyati ham " +
      "mavjud — ya'ni " +
      "tizim ikki " +
      "tomonlama " +
      "muvozanatlangan.",
    example:
      "Yozma da'voda " +
      "talab bilan " +
      "birga " +
      "\"bajarilmasa " +
      "nazorat " +
      "organiga va " +
      "sudga murojaat " +
      "qilaman\" deb " +
      "yozildi. " +
      "Ko'pincha " +
      "aynan shundan " +
      "keyin masala " +
      "hal bo'ladi.",
    keyPoints: [
      "Qonunni buzganlik uchun javobgarlik nazarda tutilgan",
      "U mulkiy va ma'muriy shakllarda bo'lishi mumkin",
      "Javobgarlik xavfi nizoni sudsiz hal qilishga undaydi",
      "Nazorat organi ko'rsatmasi ustidan shikoyat qilish mumkin",
    ],
    warning:
      "Da'voda " +
      "haqoratomuz " +
      "ifodalardan " +
      "saqlaning — " +
      "matn xotirjam " +
      "va faktlarga " +
      "asoslangan " +
      "bo'lsa " +
      "kuchliroq " +
      "ta'sir " +
      "qiladi.",
    lawRefs: [
      { code: "IHQ", article: "27" },
      { code: "IHQ", article: "27-1" },
      { code: "IHQ", article: "20" },
    ],
  },

  /* ── 47 ────────────────────────────────────────────────────── */
  {
    heading: "Dalil to'plash: nima saqlash kerak",
    text:
      "Har qanday nizoning " +
      "natijasi DALILGA " +
      "bog'liq. Bu mavzu " +
      "amaliy jihatdan " +
      "eng qimmatlisi.\n\n" +
      "Xarid " +
      "paytida " +
      "saqlanadigan " +
      "narsalar: kassa " +
      "va tovar cheki; " +
      "kafolat " +
      "talonchasi (sana " +
      "va muhr bilan); " +
      "shartnoma " +
      "nusxasi; " +
      "to'lov " +
      "hujjati yoki " +
      "bank " +
      "ko'chirmasi; " +
      "narx " +
      "yorlig'ining " +
      "surati; " +
      "reklama va " +
      "e'lon " +
      "skrinshoti.\n\n" +
      "Nizo " +
      "boshlangach " +
      "qo'shiladigan " +
      "hujjatlar: " +
      "nuqson " +
      "suratlari va " +
      "videosi; " +
      "yozma " +
      "da'voning " +
      "qabul " +
      "belgili " +
      "nusxasi; " +
      "sotuvchining " +
      "yozma " +
      "javobi; " +
      "ekspertiza " +
      "xulosasi; " +
      "ta'mir " +
      "hujjatlari; " +
      "yozishmalar.\n\n" +
      "⚠️ Elektron " +
      "yozishmalarni " +
      "(SMS, " +
      "messenjer) " +
      "o'chirmang " +
      "va " +
      "skrinshot " +
      "qilib " +
      "saqlang — " +
      "ular " +
      "ham dalil " +
      "bo'la " +
      "oladi.",
    example:
      "Xaridor " +
      "sotuvchi " +
      "bilan " +
      "messenjerda " +
      "kelishgan " +
      "edi, keyin " +
      "yozishmani " +
      "o'chirdi. " +
      "Sudda " +
      "kelishuv " +
      "shartlarini " +
      "isbotlash " +
      "imkonsiz " +
      "bo'lib " +
      "qoldi.",
    keyPoints: [
      "Chek, kafolat talonchasi va shartnoma — asosiy hujjatlar",
      "Nuqsonni suratga va videoga olib qo'ying",
      "Yozma da'voning qabul belgili nusxasi hal qiluvchi",
      "Elektron yozishmalar ham dalil bo'la oladi",
    ],
    warning:
      "Asl " +
      "hujjatlarni " +
      "hech kimga " +
      "bermang — " +
      "nusxa " +
      "bering. " +
      "Asl " +
      "nusxa " +
      "yo'qolsa " +
      "uni " +
      "tiklab " +
      "bo'lmaydi.",
    lawRefs: [
      { code: "IHQ", article: "17" },
      { code: "IHQ", article: "29" },
      { code: "IHQ", article: "6" },
    ],
  },

  /* ── 48 ────────────────────────────────────────────────────── */
  {
    heading: "Muddatlar: eng ko'p yo'qotishga sabab",
    text:
      "Iste'molchi " +
      "nizolarida haqli " +
      "talabni " +
      "yo'qotishning " +
      "birinchi sababi " +
      "— MUDDATNI " +
      "o'tkazib " +
      "yuborish.\n\n" +
      "Diqqat qilish " +
      "kerak bo'lgan " +
      "muddatlar:\n\n" +
      "(1) KAFOLAT " +
      "muddati — shu " +
      "davrda talab " +
      "qo'yish eng " +
      "himoyalangan " +
      "holat;\n\n" +
      "(2) YAROQLILIK " +
      "muddati;\n\n" +
      "(3) tovar " +
      "kamchiliklarini " +
      "ANIQLASH " +
      "muddatlari;\n\n" +
      "(4) maqbul " +
      "sifatli tovarni " +
      "ALMASHTIRISH " +
      "muddati;\n\n" +
      "(5) umumiy " +
      "DA'VO " +
      "muddati.\n\n" +
      "⚠️ AMALIY " +
      "QOIDA: " +
      "muammoni " +
      "aniqlagan " +
      "kuningizdan " +
      "boshlab " +
      "harakat " +
      "qiling. " +
      "\"Bir oz " +
      "kutaman, " +
      "balki " +
      "o'zi " +
      "hal " +
      "bo'lar\" " +
      "degan " +
      "yondashuv " +
      "eng " +
      "qimmatga " +
      "tushadi.\n\n" +
      "Yozma " +
      "murojaat " +
      "sanasi " +
      "muddatni " +
      "hisoblashda " +
      "asos " +
      "bo'ladi — " +
      "yana bir " +
      "sabab " +
      "uni " +
      "kechiktirmaslik " +
      "uchun.",
    example:
      "Nuqson " +
      "kafolat " +
      "muddatining " +
      "oxirida " +
      "aniqlandi. " +
      "Xaridor " +
      "o'sha " +
      "kuni " +
      "yozma " +
      "ariza " +
      "topshirdi " +
      "— shu " +
      "sana " +
      "tufayli " +
      "huquqi " +
      "saqlanib " +
      "qoldi.",
    keyPoints: [
      "Muddatni o'tkazib yuborish — haqli talabni yo'qotishning asosiy sababi",
      "Kafolat, yaroqlilik va da'vo muddatlari alohida hisoblanadi",
      "Muammoni aniqlagan kuni harakat boshlang",
      "Yozma murojaat sanasi muddat hisobida asos bo'ladi",
    ],
    warning:
      "Kafolat " +
      "muddati " +
      "tugashiga " +
      "yaqin " +
      "muammo " +
      "chiqsa — " +
      "o'sha " +
      "kuni " +
      "yozma " +
      "ariza " +
      "topshiring.",
    lawRefs: [
      { code: "FK2", article: "410" },
      { code: "FK2", article: "1183" },
      { code: "IHQ", article: "18" },
    ],
  },

  /* ── 49 ────────────────────────────────────────────────────── */
  {
    heading: "Ko'p uchraydigan xatolar",
    text:
      "Bu mavzu — " +
      "oldingi hamma " +
      "narsaning " +
      "amaliy " +
      "xulosasi. " +
      "Iste'molchilar " +
      "eng ko'p " +
      "quyidagi " +
      "xatolarga " +
      "yo'l " +
      "qo'yadi.\n\n" +
      "(1) CHEKNI " +
      "TASHLAB " +
      "YUBORISH yoki " +
      "suratga " +
      "olmaslik.\n\n" +
      "(2) OG'ZAKI " +
      "MUROJAAT bilan " +
      "cheklanish — " +
      "hech qanday " +
      "iz " +
      "qolmaydi.\n\n" +
      "(3) TALABNI " +
      "NOANIQ yozish " +
      "— sotuvchi " +
      "o'ziga " +
      "qulay " +
      "variantni " +
      "tanlaydi.\n\n" +
      "(4) SOTUVCHINING " +
      "\"biz " +
      "qaytarmaymiz\" " +
      "degan " +
      "javobini " +
      "yakuniy deb " +
      "qabul " +
      "qilish.\n\n" +
      "(5) MUDDATNI " +
      "kutib " +
      "o'tkazib " +
      "yuborish.\n\n" +
      "(6) TOVARNI " +
      "hujjatsiz " +
      "ta'mirga " +
      "topshirish.\n\n" +
      "(7) " +
      "\"Da'volarim " +
      "yo'q\" degan " +
      "TILXATGA imzo " +
      "chekish.\n\n" +
      "⚠️ Oxirgisi " +
      "eng " +
      "xavfli: " +
      "bunday " +
      "tilxat " +
      "keyinchalik " +
      "sizga " +
      "qarshi " +
      "ishlatiladi.",
    example:
      "Xaridor " +
      "pulni " +
      "olayotganda " +
      "\"hech " +
      "qanday " +
      "da'vom " +
      "yo'q\" " +
      "degan " +
      "qog'ozga " +
      "imzo " +
      "chekdi. " +
      "Keyin " +
      "zarar " +
      "aniqlandi, " +
      "lekin " +
      "talab " +
      "qo'yish " +
      "qiyinlashdi.",
    keyPoints: [
      "Chekni saqlang yoki suratga oling",
      "Har doim YOZMA murojaat qiling",
      "Talabni aniq va bitta qilib yozing",
      "\"Da'volarim yo'q\" tilxatiga o'ylab imzo cheking",
    ],
    warning:
      "Rad " +
      "javobini " +
      "ham " +
      "YOZMA " +
      "so'rang. " +
      "Yozma " +
      "rad " +
      "javobi " +
      "keyingi " +
      "bosqichda " +
      "sizning " +
      "asosiy " +
      "dalilingiz " +
      "bo'ladi.",
    lawRefs: [
      { code: "IHQ", article: "13" },
      { code: "IHQ", article: "21" },
      { code: "IHQ", article: "17" },
    ],
  },

  /* ── 50 ────────────────────────────────────────────────────── */
  {
    heading: "Himoya qadamlari: to'liq ketma-ketlik",
    text:
      "Yakuniy mavzu — " +
      "butun darslikni " +
      "bitta amaliy " +
      "algoritmga " +
      "yig'amiz.\n\n" +
      "1-QADAM. " +
      "Muammoni qayd " +
      "eting: suratga " +
      "oling, hujjatni " +
      "yig'ing, " +
      "nuqsonni " +
      "yozib " +
      "qo'ying.\n\n" +
      "2-QADAM. " +
      "Huquqingizni " +
      "aniqlang: " +
      "qaysi talabni " +
      "qo'yasiz " +
      "(almashtirish, " +
      "ta'mir, narxni " +
      "kamaytirish, " +
      "pulni " +
      "qaytarish).\n\n" +
      "3-QADAM. " +
      "YOZMA da'vo " +
      "topshiring — " +
      "ikki nusxada, " +
      "qabul " +
      "belgisi " +
      "bilan.\n\n" +
      "4-QADAM. " +
      "Javobni " +
      "kuting. Rad " +
      "javobini " +
      "yozma " +
      "so'rang.\n\n" +
      "5-QADAM. " +
      "Natija " +
      "bo'lmasa — " +
      "Iste'molchilar " +
      "huquqlarini " +
      "himoya " +
      "qilish " +
      "agentligiga " +
      "yoki nazorat " +
      "organiga " +
      "murojaat " +
      "qiling.\n\n" +
      "6-QADAM. " +
      "Kerak " +
      "bo'lsa " +
      "SUDGA " +
      "da'vo " +
      "qo'ying — " +
      "asosiy " +
      "summa, " +
      "zarar va " +
      "ma'naviy " +
      "zararni " +
      "ko'rsatib.\n\n" +
      "⚠️ Har " +
      "bosqichda " +
      "MUDDATNI " +
      "nazorat " +
      "qiling.",
    example:
      "Xaridor " +
      "shu " +
      "ketma-ketlikni " +
      "bajardi va " +
      "3-qadamdayoq " +
      "natijaga " +
      "erishdi — " +
      "chunki " +
      "yozma " +
      "da'vo " +
      "sotuvchi " +
      "uchun " +
      "rasmiy " +
      "hujjat " +
      "hisoblanadi " +
      "va e'tiborsiz " +
      "qoldirib " +
      "bo'lmaydi.",
    keyPoints: [
      "Avval dalil to'plang, keyin talabni aniqlang",
      "Yozma da'vo — hal qiluvchi qadam",
      "Rad javobini ham yozma oling",
      "Keyin agentlik, oxirida sud",
    ],
    warning:
      "Bosqichlarni " +
      "o'tkazib " +
      "yubormang: " +
      "sudda " +
      "birinchi " +
      "savol " +
      "\"sotuvchiga " +
      "murojaat " +
      "qilganmisiz?\" " +
      "bo'ladi.",
    lawRefs: [
      { code: "IHQ", article: "13" },
      { code: "IHQ", article: "25" },
      { code: "IHQ", article: "29" },
      { code: "IHQ", article: "4" },
    ],
  },
];

module.exports = { SECTIONS };
