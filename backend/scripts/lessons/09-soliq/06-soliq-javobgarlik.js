"use strict";
/** SOLIQ MODULI — 6-DARS: TA'MINOT, UNDIRISH VA JAVOBGARLIK. SK 106–125, 156–168. */

const LESSON = {
  key: "soliq-javobgarlik",
  category: "tax",
  level: "mid",
  order: 9060,
  title: "Soliqqa oid huquqbuzarliklar va javobgarlik",
  desc:
    "Soliq majburiyatini ta'minlash usullari, penya, hisobvaraq " +
    "operatsiyalarini to'xtatish, mol-mulkni xatlash, soliq qarzini " +
    "undirish tartibi hamda huquqbuzarlik ishlarini ko'rib chiqish.",
  objectives: [
    "Ta'minot usullarini bilasiz",
    "Penya qanday hisoblanishini tushunasiz",
    "Hisobvaraqni to'xtatish asoslarini bilasiz",
    "Soliq qarzini undirish bosqichlarini bilasiz",
    "Tekshiruv natijasi bo'yicha e'tiroz berishni bilasiz",
    "Qaror ustidan shikoyat qilish tartibini bilasiz",
  ],
  practicalSteps: [
    "Talabnoma kelganda uni belgilangan muddatda bajaring yoki e'tiroz bildiring",
    "Tekshiruv dalolatnomasiga yozma e'tiroz tayyorlang",
    "Materiallarni ko'rib chiqishda shaxsan qatnashing",
    "Qaror ustidan shikoyat muddatini o'tkazib yubormang",
    "Hisobvaraq to'xtatilsa asosini darhol aniqlang",
  ],
  sections: [
    {
      heading: "Majburiyatni ta'minlash usullari va penya",
      text:
        "Soliq majburiyatining bajarilishi bir necha " +
        "usul bilan TA'MINLANADI: mol-mulk garovi; " +
        "kafillik; bank kafolati; penya; banklardagi " +
        "hisobvaraqlar bo'yicha operatsiyalarni " +
        "to'xtatib turish; mol-mulkni xatlash.\n\n" +
        "PENYA — soliq belgilangan muddatda " +
        "to'lanmaganda har bir kechikkan kun uchun " +
        "hisoblanadigan summa.\n\n" +
        "⚠️ PENYA JARIMA EMAS: u javobgarlik " +
        "chorasi emas, balki budjetning " +
        "yo'qotishini qoplash vositasi.\n\n" +
        "Shuning uchun penya AYBDAN QAT'I NAZAR " +
        "hisoblanadi — hatto siz qonunni " +
        "bilmagan yoki xato qilgan bo'lsangiz " +
        "ham.\n\n" +
        "AMALIY OQIBAT: penya har kuni o'sib " +
        "boradi. Ya'ni qarz masalasini " +
        "kechiktirish har kuni qimmatga " +
        "tushadi.\n\n" +
        "Shuning uchun bahsli summa bo'lsa " +
        "ham, uni to'lab qo'yib keyin " +
        "qaytarishni talab qilish ba'zan " +
        "arzonroq bo'ladi — bu strategik " +
        "qaror va uni hisoblab ko'rish " +
        "kerak.\n\n" +
        "GAROV, KAFILLIK va BANK KAFOLATI " +
        "odatda muddatni o'zgartirish " +
        "(kechiktirish, bo'lib to'lash) " +
        "bilan birga qo'llaniladi — ular " +
        "budjet uchun qo'shimcha " +
        "kafolat.\n\n" +
        "AMALIY XULOSA: kechiktirish " +
        "so'rayotganda ta'minot taklif " +
        "qilish arizangizni ancha " +
        "kuchaytiradi.",
      example:
        "Bahsli soliq bo'yicha nizo uzoq " +
        "davom etdi — shu davrda penya " +
        "sezilarli o'sdi.",
      keyPoints: [
        "Ta'minot usullari kodeksda belgilangan",
        "Penya javobgarlik emas, qoplash vositasi",
        "U aybdan qat'i nazar hisoblanadi",
        "Penya har kuni o'sib boradi",
      ],
      warning:
        "Nizo davomida penya to'xtamaydi — " +
        "muddatlarni hisoblang.",
      lawRefs: [
        { code: "SK", article: "106" },
        { code: "SK", article: "107" },
        { code: "SK", article: "108" },
        { code: "SK", article: "109" },
        { code: "SK", article: "110" },
      ],
    },
    {
      heading: "Hisobvaraq operatsiyalarini to'xtatib turish",
      text:
        "Bu — soliq organining eng ta'sirchan " +
        "choralaridan biri va u faoliyatni " +
        "amalda to'xtatib qo'yishi mumkin.\n\n" +
        "ASOSLARI qonunda belgilangan — odatda " +
        "soliq qarzini uzish to'g'risidagi " +
        "talabnoma bajarilmaganda yoki soliq " +
        "hisoboti belgilangan muddatda " +
        "topshirilmaganda.\n\n" +
        "⚠️ MUHIM CHEKLOV: to'xtatib turish " +
        "odatda TALABNOMADA ko'rsatilgan " +
        "summa doirasida qo'llaniladi — butun " +
        "hisobvaraqni cheksiz muzlatib " +
        "qo'yish emas.\n\n" +
        "Shuning uchun qaror bilan tanishib, " +
        "unda summa ko'rsatilganini " +
        "tekshiring.\n\n" +
        "BEKOR QILISH TARTIBI: qaror asos " +
        "yo'qolganda (qarz to'langanda yoki " +
        "hisobot topshirilganda) belgilangan " +
        "muddatda bekor qilinishi kerak.\n\n" +
        "AMALIY QOIDA: qarzni to'lagach yoki " +
        "hisobotni topshirgach, buni " +
        "tasdiqlovchi hujjatni soliq " +
        "organiga darhol taqdim eting va " +
        "qarorni bekor qilishni yozma " +
        "so'rang.\n\n" +
        "Avtomatik bekor bo'lishini kutish " +
        "vaqt yo'qotishga olib keladi.\n\n" +
        "BANKLARNING MAJBURIYATI: banklar " +
        "to'xtatib turish to'g'risidagi " +
        "qarorlarni belgilangan tartibda " +
        "bajaradi.\n\n" +
        "MOL-MULKNI XATLASH ham ta'minot " +
        "chorasi sifatida qo'llaniladi — " +
        "bunda mol-mulkni tasarruf etish " +
        "cheklanadi.\n\n" +
        "⚠️ XATLASHDA HUQUQINGIZ: xatlash " +
        "bayonnomasi bilan tanishish, unga " +
        "e'tiroz bildirish va xatlangan " +
        "mol-mulk ro'yxatini tekshirish.",
      example:
        "Hisobot topshirilmagani uchun " +
        "hisobvaraq to'xtatildi — hisobot " +
        "topshirilgach bekor qilishni so'rash " +
        "kerak.",
      keyPoints: [
        "To'xtatish qonuniy asoslarda qo'llaniladi",
        "U odatda talabnoma summasi doirasida bo'ladi",
        "Asos yo'qolgach qaror bekor qilinadi",
        "Bekor qilishni yozma so'rang",
      ],
      warning:
        "Hisobvaraq to'xtatilishi faoliyatni " +
        "butunlay to'xtatib qo'yishi mumkin.",
      lawRefs: [
        { code: "SK", article: "111" },
        { code: "SK", article: "112" },
        { code: "SK", article: "113" },
        { code: "SK", article: "114" },
        { code: "SK", article: "115" },
      ],
    },
    {
      heading: "Talabnoma va soliq qarzini undirish",
      text:
        "Undirish jarayoni aniq BOSQICHLARDAN " +
        "iborat va har bir bosqichda sizning " +
        "imkoniyatingiz boshqacha.\n\n" +
        "BIRINCHI BOSQICH — TALABNOMA: soliq " +
        "qarzini uzish to'g'risidagi talabnoma " +
        "yuboriladi. Unda qarz summasi, uni " +
        "to'lash muddati va bajarilmaganda " +
        "qo'llaniladigan choralar " +
        "ko'rsatiladi.\n\n" +
        "⚠️ BU ENG MUHIM BOSQICH: talabnoma " +
        "kelganda ikki yo'l bor — bajarish " +
        "yoki asosli e'tiroz bildirish.\n\n" +
        "Jim qolish eng yomon variant: " +
        "muddat o'tgach undirish avtomatik " +
        "boshlanadi.\n\n" +
        "Talabnoma o'zgartirilishi ham " +
        "mumkin (masalan summa qayta " +
        "hisoblansa).\n\n" +
        "IKKINCHI BOSQICH — BANK " +
        "HISOBVARAQLARIDAN UNDIRISH: qarz " +
        "hisobvaraqlardagi pul mablag'lari " +
        "hisobidan undiriladi.\n\n" +
        "UCHINCHI BOSQICH — DEBITORLIK " +
        "QARZIGA QARATISH: undirish soliq " +
        "to'lovchining debitorlariga " +
        "(unga qarzi bo'lganlarga) " +
        "qaratilishi mumkin.\n\n" +
        "TO'RTINCHI BOSQICH — BOSHQA " +
        "MOL-MULK HISOBIDAN UNDIRISH: " +
        "mablag' yetmasa, undiruv boshqa " +
        "mol-mulkka qaratiladi.\n\n" +
        "JISMONIY SHAXSLAR uchun " +
        "(yakka tartibdagi tadbirkor " +
        "bo'lmaganlar) undirish alohida " +
        "tartibda — odatda SUD orqali " +
        "amalga oshiriladi.\n\n" +
        "⚠️ AMALIY XULOSA: bosqichlar " +
        "ketma-ket qo'llaniladi. Ya'ni " +
        "talabnomasiz to'g'ridan-to'g'ri " +
        "mol-mulkni olib qo'yish mumkin " +
        "emas.\n\n" +
        "Tartib buzilgan bo'lsa, bu " +
        "e'tiroz uchun kuchli asos.",
      example:
        "Talabnoma yuborilmasdan undirish " +
        "boshlandi — tartib buzilishi " +
        "e'tiroz asosi bo'ladi.",
      keyPoints: [
        "Undirish talabnomadan boshlanadi",
        "Keyin hisobvaraq, debitorlik va mol-mulk navbati",
        "Jismoniy shaxsdan undirish odatda sud orqali",
        "Tartib buzilishi e'tiroz asosi bo'ladi",
      ],
      warning:
        "Talabnomaga javob bermaslik undirishni " +
        "avtomatik boshlaydi.",
      lawRefs: [
        { code: "SK", article: "116" },
        { code: "SK", article: "117" },
        { code: "SK", article: "118" },
        { code: "SK", article: "119" },
        { code: "SK", article: "120" },
        { code: "SK", article: "121" },
        { code: "SK", article: "121-1" },
        { code: "SK", article: "123" },
        { code: "SK", article: "125" },
      ],
    },
    {
      heading: "Audit natijalarini rasmiylashtirish va e'tiroz",
      text:
        "Tekshiruv tugagach uning natijalari " +
        "RASMIYLASHTIRILADI — odatda dalolatnoma " +
        "tuziladi.\n\n" +
        "⚠️ BU SIZNING ENG MUHIM IMKONIYATINGIZ: " +
        "dalolatnoma bo'yicha YOZMA E'TIROZ " +
        "bildirish huquqingiz bor.\n\n" +
        "E'tiroz belgilangan muddatda " +
        "beriladi va u materiallarni ko'rib " +
        "chiqishda hisobga olinishi kerak.\n\n" +
        "E'TIROZ QANDAY YOZILADI: har bir " +
        "epizod bo'yicha alohida; qonun " +
        "moddasiga havola bilan; hujjatlar " +
        "ilova qilingan holda; aniq va " +
        "qisqa.\n\n" +
        "\"Rozi emasman\" degan umumiy " +
        "e'tiroz deyarli hech qanday " +
        "natija bermaydi.\n\n" +
        "MATERIALLARNI KO'RIB CHIQISH: " +
        "audit va sayyor tekshiruv " +
        "materiallari belgilangan tartibda " +
        "ko'rib chiqiladi.\n\n" +
        "⚠️ SIZ BU JARAYONDA QATNASHISHGA " +
        "HAQLISIZ va bu huquqdan " +
        "foydalanish kerak. Shaxsan " +
        "ishtirok etish ko'pincha " +
        "yozma e'tirozdan ko'ra " +
        "samaraliroq.\n\n" +
        "QAROR: ko'rib chiqish natijalari " +
        "bo'yicha qaror qabul qilinadi. " +
        "Uning KUCHGA KIRISH tartibi " +
        "alohida belgilangan.\n\n" +
        "TA'MINLASH CHORALARI qaror " +
        "ijrosini ta'minlash uchun " +
        "qo'llanilishi mumkin.\n\n" +
        "AMALIY QADAM: dalolatnomani " +
        "olgan kuningizni qayd eting — " +
        "e'tiroz muddati aynan shundan " +
        "hisoblanadi.",
      example:
        "Dalolatnomaga faqat \"rozi emasman\" " +
        "deb yozildi — e'tiroz asossiz deb " +
        "topildi.",
      keyPoints: [
        "Tekshiruv natijasi dalolatnoma bilan rasmiylashtiriladi",
        "Yozma e'tiroz berish huquqingiz bor",
        "E'tiroz aniq va hujjatlar bilan bo'lishi kerak",
        "Materiallarni ko'rib chiqishda shaxsan qatnashing",
      ],
      warning:
        "E'tiroz muddatini o'tkazib yuborish — " +
        "asosiy himoya imkonini yo'qotish.",
      lawRefs: [
        { code: "SK", article: "156" },
        { code: "SK", article: "158" },
        { code: "SK", article: "159" },
        { code: "SK", article: "159-1" },
        { code: "SK", article: "160" },
        { code: "SK", article: "161" },
      ],
    },
    {
      heading: "Huquqbuzarlik ishlari va shikoyat",
      text:
        "SOLIQQA OID HUQUQBUZARLIKLAR to'g'risidagi " +
        "ishlar belgilangan tartibda ko'rib " +
        "chiqiladi.\n\n" +
        "ISH YURITISH: bunday ishlar bo'yicha ish " +
        "yuritish tartibi kodeksda " +
        "belgilangan.\n\n" +
        "QAROR QABUL QILISH: materiallar bo'yicha " +
        "qaror qabul qilinadi.\n\n" +
        "MOLIYAVIY SANKSIYA: uni undirish " +
        "to'g'risida ariza berilishi va ishlar " +
        "belgilangan tartibda ko'rib chiqilishi " +
        "hamda qarorlar ijro etilishi nazarda " +
        "tutilgan.\n\n" +
        "⚠️ SHIKOYAT QILISH — ENG MUHIM HUQUQ: " +
        "soliq organlarining qarorlari, " +
        "harakatlari va harakatsizligi ustidan " +
        "shikoyat qilish mumkin.\n\n" +
        "Shikoyat qilinganda soliq organlari " +
        "qarorlarini ijro etishning o'ziga xos " +
        "xususiyatlari mavjud — ayrim " +
        "hollarda ijro to'xtatilishi " +
        "mumkin.\n\n" +
        "AMALIY XULOSA: shikoyat berish " +
        "ko'pincha undirishni to'xtatib " +
        "turadi. Bu vaqt yutish va masalani " +
        "tinch hal qilish imkonini " +
        "beradi.\n\n" +
        "SHIKOYAT BOSQICHLARI odatda " +
        "shunday: (1) yuqori turuvchi " +
        "soliq organiga; (2) sudga.\n\n" +
        "⚠️ MUDDATLAR QISQA VA ULAR " +
        "TIKLANMASLIGI MUMKIN. Shuning " +
        "uchun qarorni olgan kuningizni " +
        "qayd eting va shikoyat muddatini " +
        "darhol hisoblang.\n\n" +
        "AMALIY MASLAHAT: shikoyatda " +
        "yangi dalil keltirish " +
        "imkoniyatidan foydalaning — " +
        "tekshiruv paytida topilmagan " +
        "hujjatlar shikoyat bosqichida " +
        "taqdim etilishi mumkin.\n\n" +
        "QARORLARNI IJRO ETISH tartibi " +
        "ham kodeksda belgilangan.",
      example:
        "Shikoyat o'z vaqtida berildi — " +
        "undirish to'xtatilib, masala qayta " +
        "ko'rib chiqildi.",
      keyPoints: [
        "Huquqbuzarlik ishlari belgilangan tartibda ko'riladi",
        "Qaror ustidan shikoyat qilish mumkin",
        "Shikoyat ijroni to'xtatishi mumkin",
        "Muddatlar qisqa va ularni o'tkazib yubormaslik kerak",
      ],
      warning:
        "Shikoyat muddati odatda tiklanmaydi.",
      lawRefs: [
        { code: "SK", article: "157" },
        { code: "SK", article: "162" },
        { code: "SK", article: "163" },
        { code: "SK", article: "164" },
        { code: "SK", article: "165" },
        { code: "SK", article: "166" },
        { code: "SK", article: "167" },
        { code: "SK", article: "168" },
      ],
    },
  ],
};

module.exports = { LESSON };
