"use strict";
/**
 * MODUL 10 — MA'MURIY HUQUQ VA JAVOBGARLIK (9 dars)
 *
 * Manbalar: Ma'muriy javobgarlik to'g'risidagi kodeks (MJK, 662 modda),
 * Ma'muriy sud ishlarini yuritish to'g'risidagi kodeks (MSK),
 * Saylov kodeksi (SYK).
 *
 * ⚠️ IKKI KODEKSNI ARALASHTIRMASLIK KERAK:
 *   MJK — davlat sizga JAZO qo'llaganda (jarima, huquqdan mahrum qilish)
 *   MSK — siz DAVLAT ORGANI ustidan sudga murojaat qilganingizda
 * Bu farq foydalanuvchi uchun hal qiluvchi: noto'g'ri kodeksdan
 * javob izlash vaqt yo'qotadi.
 */

const LESSONS = [
  /* ═══════════════════════════════════════════════════════════════
     1. Ma'muriy javobgarlik  (MAVJUD KALIT — kengaytirildi)
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "mamuriy-javobgarlik",
    category: "administrative",
    level: "basic",
    order: 10010,
    title: "Ma'muriy javobgarlik asoslari",
    desc:
      "Ma'muriy huquqbuzarlik nima, kim javobgar bo'ladi, ayb " +
      "shakllari va javobgarlikni istisno etuvchi holatlar.",
    objectives: [
      "Ma'muriy huquqbuzarlik tushunchasini bilasiz",
      "Javobgarlikka tortilish yoshi va toifalarini bilasiz",
      "Qasd va ehtiyotsizlik farqini bilasiz",
      "Javobgarlikni istisno etuvchi holatlarni bilasiz",
    ],
    practicalSteps: [
      "Sizga nisbatan qanday modda qo'llanilayotganini aniq bilib oling",
      "Bayonnomani o'qimasdan imzolamang; rozi bo'lmagan qismga izoh yozing",
      "Yengillashtiruvchi holatlar bo'lsa, ularni yozma bildiring",
      "Kam ahamiyatli huquqbuzarlikda ozod qilish imkoniyati borligini yodda tuting",
    ],
    sections: [
      {
        heading: "Huquqbuzarlik tushunchasi va ayb",
        text:
          "MA'MURIY HUQUQBUZARLIK — qonunchilikka " +
          "binoan ma'muriy javobgarlik nazarda " +
          "tutilgan g'ayrihuquqiy, aybli " +
          "harakat yoki harakatsizlik.\n\n" +
          "Ta'rifdagi har bir so'z muhim.\n\n" +
          "«G'AYRIHUQUQIY» — qonunda taqiqlangan " +
          "bo'lishi kerak. Qonunda " +
          "ko'rsatilmagan harakat uchun " +
          "javobgarlik yo'q.\n\n" +
          "«AYBLI» — ayb bo'lishi shart. Ayb " +
          "ikki shaklda bo'ladi: QASD (shaxs " +
          "oqibatni oldindan ko'rgan va " +
          "xohlagan) va EHTIYOTSIZLIK " +
          "(oqibatni ko'rmagan, lekin " +
          "ko'rishi kerak edi).\n\n" +
          "«HARAKAT YOKI HARAKATSIZLIK» — " +
          "javobgarlik faqat qilingan ish " +
          "uchun emas, qilinmagan ish uchun " +
          "ham yuzaga kelishi mumkin.\n\n" +
          "JAVOBGARLIKKA TORTILISH YOSHI " +
          "qonunda belgilangan. Voyaga " +
          "yetmaganlarning javobgarligi " +
          "alohida tartibga solingan.\n\n" +
          "Alohida toifalar ham bor: " +
          "mansabdor shaxslar, harbiy " +
          "xizmatchilar, chet el " +
          "fuqarolari — ularning " +
          "javobgarligi o'ziga xos " +
          "xususiyatlarga ega.\n\n" +
          "Qonunchilikning VAQT bo'yicha " +
          "amal qilishi ham muhim: " +
          "huquqbuzarlik sodir etilgan " +
          "paytdagi qoida qo'llaniladi.",
        example:
          "Shaxsga nisbatan bayonnoma " +
          "tuzildi, lekin uning " +
          "harakatida ayb yo'q edi — " +
          "voqea uning ta'siridan " +
          "tashqarida sodir bo'lgan. " +
          "Ayb ma'muriy huquqbuzarlik " +
          "tarkibining majburiy " +
          "elementi bo'lgani uchun bu " +
          "e'tiroz uchun asos bo'ladi.",
        keyPoints: [
          "Huquqbuzarlik g'ayrihuquqiy VA aybli bo'lishi kerak",
          "Ayb ikki shaklda: qasd va ehtiyotsizlik",
          "Harakatsizlik uchun ham javobgarlik yuzaga kelishi mumkin",
          "Huquqbuzarlik sodir etilgan paytdagi qoida qo'llaniladi",
        ],
        warning:
          "«Bilmagan edim» degan asos " +
          "odatda javobgarlikdan ozod " +
          "qilmaydi, lekin u " +
          "yengillashtiruvchi holat " +
          "sifatida hisobga olinishi " +
          "mumkin.",
        lawRefs: [
          { code: "MJK", article: "10" },
          { code: "MJK", article: "11" },
          { code: "MJK", article: "12" },
          { code: "MJK", article: "13" },
          { code: "MJK", article: "14" },
          { code: "MJK", article: "15" },
        ],
      },
      {
        heading: "Javobgarlikni istisno etuvchi holatlar",
        text:
          "Qonun javobgarlikni istisno " +
          "etadigan holatlarni " +
          "belgilaydi va ularni bilish " +
          "amalda foydali.\n\n" +
          "ZARURIY MUDOFAA — " +
          "huquqlarni himoya qilish " +
          "uchun qilingan harakat " +
          "belgilangan doirada " +
          "huquqbuzarlik " +
          "hisoblanmaydi.\n\n" +
          "OXIRGI ZARURAT — kattaroq " +
          "zararni oldini olish " +
          "uchun kichikroq zarar " +
          "yetkazilgan holat.\n\n" +
          "AQLI NOROSOLIK — shaxs " +
          "harakat sodir etgan " +
          "vaqtida o'z " +
          "harakatlarining " +
          "ahamiyatini " +
          "anglamagan yoki " +
          "boshqara olmagan " +
          "bo'lsa.\n\n" +
          "Alohida institut — " +
          "HUQUQBUZARLIKNING " +
          "KAM AHAMIYATLILIGI. " +
          "Sodir etilgan " +
          "huquqbuzarlik kam " +
          "ahamiyatli bo'lsa, " +
          "shaxs ma'muriy " +
          "javobgarlikdan ozod " +
          "qilinishi mumkin.\n\n" +
          "Bu amalda foydali: " +
          "kichik va zararsiz " +
          "buzilishlarda bu " +
          "asosga tayanish " +
          "mumkin.\n\n" +
          "YENGILLASHTIRUVCHI va " +
          "OG'IRLASHTIRUVCHI " +
          "holatlar ham " +
          "belgilangan va " +
          "ular jazo " +
          "miqdoriga " +
          "ta'sir " +
          "qiladi.\n\n" +
          "Yengilroq jazo " +
          "chorasini " +
          "qo'llash " +
          "imkoniyati ham " +
          "nazarda tutilgan.\n\n" +
          "Amaliy xulosa: " +
          "yengillashtiruvchi " +
          "holatlarni " +
          "(birinchi marta, " +
          "zarar yo'q, " +
          "ixtiyoriy " +
          "bartaraf etildi) " +
          "YOZMA " +
          "bildiring — " +
          "ular o'z-o'zidan " +
          "hisobga " +
          "olinmasligi " +
          "mumkin.",
        example:
          "Shaxs birinchi marta " +
          "kichik buzilish " +
          "sodir etdi, zarar " +
          "yetmadi va u " +
          "buzilishni darhol " +
          "bartaraf etdi. " +
          "Bu holatlar " +
          "yengillashtiruvchi " +
          "sifatida hisobga " +
          "olinishi mumkin — " +
          "lekin ularni " +
          "bildirish kerak.",
        keyPoints: [
          "Zaruriy mudofaa, oxirgi zarurat va aqli norosolik javobgarlikni istisno qiladi",
          "Kam ahamiyatli huquqbuzarlikda javobgarlikdan ozod qilish mumkin",
          "Yengillashtiruvchi va og'irlashtiruvchi holatlar jazoga ta'sir qiladi",
          "Yengillashtiruvchi holatlarni YOZMA bildirish kerak",
        ],
        warning:
          "Zaruriy mudofaa " +
          "chegarasidan " +
          "chiqish o'zi " +
          "javobgarlik " +
          "asosiga " +
          "aylanadi. " +
          "Mutanosiblik " +
          "talabi bu " +
          "yerda ham " +
          "amal qiladi.",
        lawRefs: [
          { code: "MJK", article: "18" },
          { code: "MJK", article: "19" },
          { code: "MJK", article: "20" },
          { code: "MJK", article: "21" },
          { code: "MJK", article: "31" },
          { code: "MJK", article: "33" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     2. Ma'muriy jazo turlari
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "mamuriy-jazo-turlari",
    category: "administrative",
    level: "basic",
    order: 10020,
    title: "Ma'muriy jazo turlari va qo'llash qoidalari",
    desc:
      "Jarima, olib qo'yish, musodara, maxsus huquqdan mahrum " +
      "qilish, ma'muriy qamoq va jazo qo'llash muddatlari.",
    objectives: [
      "Ma'muriy jazo turlarini bilasiz",
      "Asosiy va qo'shimcha jazo farqini bilasiz",
      "Jazo qo'llash muddatlarini bilasiz",
      "Zararni qoplash majburiyatini bilasiz",
    ],
    practicalSteps: [
      "Sizga qo'llangan jazo turi qonundagi ro'yxatga kiritilganini tekshiring",
      "Jazo qo'llash muddati o'tmaganini tekshiring — bu kuchli e'tiroz asosi",
      "Bir necha huquqbuzarlik bo'lsa, jazo qanday hisoblanganini tekshiring",
      "Jarima to'lash muddatini o'tkazib yubormang",
    ],
    sections: [
      {
        heading: "Jazo turlari",
        text:
          "Ma'muriy jazoning MAQSADI — " +
          "javobgarlikka tortish va " +
          "yangi huquqbuzarliklarning " +
          "oldini olish.\n\n" +
          "Jazo TURLARI qonunda " +
          "sanalgan va bu ro'yxat " +
          "YOPIQ.\n\n" +
          "Asosiy turlar: JARIMA " +
          "(davlat hisobiga pul " +
          "undirish); ashyolarni " +
          "haqini to'lash sharti " +
          "bilan OLIB QO'YISH; " +
          "MUSODARA QILISH " +
          "(huquqbuzarlik quroli " +
          "yoki predmetini); " +
          "MAXSUS HUQUQDAN " +
          "MAHRUM QILISH " +
          "(masalan transport " +
          "vositasini " +
          "boshqarish " +
          "huquqidan); " +
          "MA'MURIY QAMOQQA " +
          "OLISH.\n\n" +
          "ASOSIY va QO'SHIMCHA " +
          "jazo farqlanadi: " +
          "ba'zi choralar " +
          "faqat qo'shimcha " +
          "sifatida " +
          "qo'llanilishi " +
          "mumkin.\n\n" +
          "Ma'muriy qamoqqa " +
          "olish eng qattiq " +
          "chora va u " +
          "belgilangan " +
          "muddat doirasida, " +
          "faqat sud " +
          "tomonidan " +
          "qo'llaniladi.\n\n" +
          "ZARARNI QOPLASH " +
          "alohida " +
          "institut: " +
          "huquqbuzarlik " +
          "sodir etgan " +
          "shaxs zimmasiga " +
          "yetkazilgan " +
          "zararni qoplash " +
          "majburiyati " +
          "yuklanishi " +
          "mumkin.\n\n" +
          "Ya'ni jarima " +
          "to'lash zararni " +
          "qoplashdan ozod " +
          "qilmaydi — bu " +
          "ikki alohida " +
          "narsa.",
        example:
          "Shaxsga jarima " +
          "solindi va " +
          "u to'ladi, " +
          "keyin " +
          "jabrlanuvchi " +
          "zararni " +
          "qoplashni " +
          "talab qildi. " +
          "Jarima " +
          "davlat " +
          "foydasiga, " +
          "zarar esa " +
          "jabrlanuvchi " +
          "foydasiga " +
          "undiriladi — " +
          "ikkalasi " +
          "bir-birini " +
          "almashtirmaydi.",
        keyPoints: [
          "Jazo turlari ro'yxati qonunda belgilangan va YOPIQ",
          "Asosiy va qo'shimcha jazo choralari farqlanadi",
          "Ma'muriy qamoq eng qattiq chora va sud tomonidan qo'llaniladi",
          "Jarima to'lash zararni qoplash majburiyatidan ozod qilmaydi",
        ],
        warning:
          "Qonunda " +
          "ko'rsatilmagan " +
          "«jazo» " +
          "(masalan " +
          "hujjatni " +
          "olib " +
          "qo'yish " +
          "yoki " +
          "faoliyatni " +
          "asossiz " +
          "to'xtatish) " +
          "qonuniy " +
          "emas.",
        lawRefs: [
          { code: "MJK", article: "22" },
          { code: "MJK", article: "23" },
          { code: "MJK", article: "24" },
          { code: "MJK", article: "25" },
          { code: "MJK", article: "28" },
          { code: "MJK", article: "29" },
          { code: "MJK", article: "38" },
        ],
      },
      {
        heading: "Qo'llash qoidalari va muddatlar",
        text:
          "Jazo qo'llashning UMUMIY " +
          "QOIDALARI belgilangan: " +
          "jazo huquqbuzarlik " +
          "xarakteri, huquqbuzarning " +
          "shaxsi, " +
          "yengillashtiruvchi va " +
          "og'irlashtiruvchi " +
          "holatlar hisobga " +
          "olingan holda " +
          "qo'llaniladi.\n\n" +
          "Ya'ni jazo avtomatik " +
          "emas — u " +
          "individuallashtirilishi " +
          "kerak.\n\n" +
          "BIR NECHA " +
          "HUQUQBUZARLIK sodir " +
          "etilganda jazo " +
          "qo'llash tartibi " +
          "alohida " +
          "belgilangan.\n\n" +
          "MUDDATLAR eng muhim " +
          "amaliy jihat: " +
          "ma'muriy jazo " +
          "huquqbuzarlik " +
          "sodir etilgan " +
          "kundan boshlab " +
          "belgilangan " +
          "muddat ichida " +
          "qo'llanilishi " +
          "kerak.\n\n" +
          "Muddat o'tgan " +
          "bo'lsa, jazo " +
          "qo'llanilmaydi. " +
          "Bu juda kuchli " +
          "e'tiroz asosi " +
          "va u " +
          "ko'pincha " +
          "e'tibordan " +
          "chetda " +
          "qoladi.\n\n" +
          "Shuning uchun " +
          "birinchi " +
          "tekshiriladigan " +
          "narsa: " +
          "huquqbuzarlik " +
          "qachon sodir " +
          "etilgan va " +
          "qaror qachon " +
          "chiqarilgan.\n\n" +
          "Yana bir " +
          "muddat: " +
          "tugaganidan " +
          "so'ng shaxs " +
          "ma'muriy " +
          "jazoga " +
          "tortilmagan " +
          "deb " +
          "hisoblanadigan " +
          "muddat. " +
          "Ya'ni jazo " +
          "abadiy " +
          "«osilib» " +
          "qolmaydi.\n\n" +
          "Bu " +
          "takroriylik " +
          "masalasida " +
          "muhim: " +
          "muddat " +
          "o'tgach " +
          "yangi " +
          "huquqbuzarlik " +
          "«takroriy» " +
          "hisoblanmaydi.",
        example:
          "Fuqaroga " +
          "ancha oldin " +
          "sodir " +
          "bo'lgan " +
          "voqea " +
          "uchun jazo " +
          "qo'llandi. " +
          "Jazo " +
          "qo'llash " +
          "muddati " +
          "o'tgan " +
          "bo'lsa, " +
          "bu " +
          "qarorni " +
          "bekor " +
          "qildirish " +
          "uchun " +
          "mustaqil " +
          "asos " +
          "bo'ladi.",
        keyPoints: [
          "Jazo individuallashtirilishi kerak — u avtomatik emas",
          "Jazo qo'llash uchun MUDDAT belgilangan",
          "Muddat o'tgan bo'lsa jazo qo'llanilmaydi — kuchli e'tiroz asosi",
          "Jazoga tortilgan deb hisoblanish muddati ham cheklangan",
        ],
        warning:
          "Jarimani " +
          "to'lash " +
          "muddatini " +
          "o'tkazib " +
          "yuborish " +
          "qo'shimcha " +
          "oqibatlarga " +
          "olib " +
          "keladi. " +
          "E'tiroz " +
          "bildirsangiz " +
          "ham " +
          "muddatlarni " +
          "kuzatib " +
          "turing.",
        lawRefs: [
          { code: "MJK", article: "30" },
          { code: "MJK", article: "34" },
          { code: "MJK", article: "35" },
          { code: "MJK", article: "36" },
          { code: "MJK", article: "37" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     3. Ma'muriy ish yuritish
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "mamuriy-ish-yuritish",
    category: "administrative",
    level: "mid",
    order: 10030,
    title: "Ma'muriy ish qanday yuritiladi",
    desc:
      "Bayonnoma tuzish, dalillar, ishni ko'rib chiqish tartibi, " +
      "qaror turlari va sizning huquqlaringiz.",
    objectives: [
      "Bayonnoma qanday tuzilishini va nima yozilishini bilasiz",
      "Ish ko'rib chiqish tartibini bilasiz",
      "Javobgarlikka tortilayotgan shaxsning huquqlarini bilasiz",
      "Qaror turlarini bilasiz",
    ],
    practicalSteps: [
      "Bayonnomani diqqat bilan o'qing va nusxasini oling",
      "Rozi bo'lmasangiz, imzo yonida «rozi emasman» va sababini yozing",
      "Advokat va tarjimon huquqingizdan foydalaning",
      "Ishni ko'rib chiqishda ishtirok eting — bu eng samarali himoya",
    ],
    sections: [
      {
        heading: "Bayonnoma va dalillar",
        text:
          "Ma'muriy ish odatda " +
          "BAYONNOMA tuzishdan " +
          "boshlanadi.\n\n" +
          "Bayonnoma tuzishga " +
          "vakolatli shaxslar " +
          "qonunda " +
          "belgilangan — " +
          "ya'ni har kim " +
          "tuza olmaydi.\n\n" +
          "Bayonnoma MAZMUNIGA " +
          "talablar bor: unda " +
          "belgilangan " +
          "ma'lumotlar " +
          "bo'lishi kerak.\n\n" +
          "Amaliy xulosa: " +
          "bayonnomada " +
          "majburiy " +
          "ma'lumot " +
          "yetishmasa, " +
          "bu " +
          "protsessual " +
          "buzilish " +
          "hisoblanadi " +
          "va e'tiroz " +
          "asosi " +
          "bo'ladi.\n\n" +
          "Shuning uchun " +
          "bayonnomani " +
          "imzolashdan " +
          "oldin o'qib " +
          "chiqish " +
          "kerak: sana, " +
          "joy, holat " +
          "bayoni, " +
          "modda, " +
          "guvohlar.\n\n" +
          "Ayrim " +
          "hollarda " +
          "bayonnoma " +
          "TUZILMAYDI — " +
          "qonun bunday " +
          "holatlarni " +
          "ham " +
          "belgilaydi.\n\n" +
          "DALILLAR: " +
          "ma'muriy " +
          "ishga oid " +
          "dalillar har " +
          "qanday " +
          "faktik " +
          "ma'lumot " +
          "bo'lishi " +
          "mumkin.\n\n" +
          "Dalillarga " +
          "BAHO BERISH " +
          "qoidalari " +
          "bor: organ " +
          "(mansabdor " +
          "shaxs) " +
          "ishning " +
          "hamma " +
          "holatlarini " +
          "har " +
          "tomonlama " +
          "ko'rib " +
          "chiqishi " +
          "kerak.\n\n" +
          "Ya'ni faqat " +
          "ayblovchi " +
          "dalillarga " +
          "tayanish " +
          "to'g'ri " +
          "emas — siz " +
          "o'z " +
          "dalillaringizni " +
          "taqdim " +
          "etishga " +
          "haqlisiz.",
        example:
          "Bayonnomada " +
          "voqea " +
          "joyi va " +
          "vaqti " +
          "aniq " +
          "ko'rsatilmagan " +
          "edi. " +
          "Bu " +
          "majburiy " +
          "ma'lumot " +
          "bo'lgani " +
          "uchun " +
          "bunday " +
          "kamchilik " +
          "e'tiroz " +
          "uchun " +
          "asos " +
          "bo'ladi.",
        keyPoints: [
          "Bayonnoma tuzishga vakolatli shaxslar qonunda belgilangan",
          "Bayonnoma mazmuniga majburiy talablar bor",
          "Majburiy ma'lumot yetishmasa — protsessual buzilish",
          "Dalillarga har tomonlama baho berilishi kerak",
        ],
        warning:
          "Bayonnomani " +
          "o'qimasdan " +
          "imzolash " +
          "eng " +
          "ko'p " +
          "uchraydigan " +
          "xato. " +
          "Imzo " +
          "«tanishdim» " +
          "degani, " +
          "«roziman» " +
          "degani " +
          "emas — " +
          "buni " +
          "yozib " +
          "qo'ying.",
        lawRefs: [
          { code: "MJK", article: "279" },
          { code: "MJK", article: "280" },
          { code: "MJK", article: "281" },
          { code: "MJK", article: "283" },
          { code: "MJK", article: "276" },
          { code: "MJK", article: "277" },
        ],
      },
      {
        heading: "Huquqlaringiz va qaror",
        text:
          "Ma'muriy javobgarlikka " +
          "tortilayotgan " +
          "shaxsning HUQUQ VA " +
          "BURCHLARI qonunda " +
          "alohida " +
          "belgilangan.\n\n" +
          "Asosiy huquqlar: " +
          "ish materiallari " +
          "bilan tanishish, " +
          "tushuntirish " +
          "berish, dalillar " +
          "taqdim etish, " +
          "iltimosnomalar " +
          "kiritish, " +
          "ADVOKAT " +
          "yordamidan " +
          "foydalanish, " +
          "qaror ustidan " +
          "shikoyat " +
          "qilish.\n\n" +
          "ADVOKAT huquqi " +
          "alohida " +
          "moddada " +
          "mustahkamlangan " +
          "— ya'ni bu " +
          "iltimos " +
          "emas, " +
          "huquq.\n\n" +
          "TARJIMON ham: " +
          "ish " +
          "yuritilayotgan " +
          "tilni " +
          "bilmaydigan " +
          "shaxs " +
          "tarjimon " +
          "orqali " +
          "ishtirok " +
          "etishi " +
          "mumkin.\n\n" +
          "JABRLANUVCHI " +
          "ham " +
          "protsessual " +
          "maqomga " +
          "ega: " +
          "huquqbuzarlik " +
          "yo'li " +
          "bilan " +
          "zarar " +
          "ko'rgan " +
          "shaxs " +
          "ishda " +
          "qatnashishi " +
          "mumkin.\n\n" +
          "ISHNI " +
          "KO'RIB " +
          "CHIQISH: " +
          "tayyorgarlik, " +
          "joy, " +
          "muddatlar " +
          "va tartib " +
          "qonunda " +
          "belgilangan. " +
          "Ish ochiq " +
          "ko'riladi.\n\n" +
          "QAROR " +
          "turlari " +
          "ham " +
          "belgilangan: " +
          "jazo " +
          "qo'llash " +
          "yoki ish " +
          "yuritishni " +
          "tugatish.\n\n" +
          "Ya'ni " +
          "natija " +
          "har doim " +
          "jazo " +
          "emas — " +
          "ish " +
          "tugatilishi " +
          "ham " +
          "mumkin.",
        example:
          "Shaxs " +
          "ishni " +
          "ko'rib " +
          "chiqishga " +
          "bormadi " +
          "va " +
          "tushuntirish " +
          "bermadi. " +
          "Qaror " +
          "faqat " +
          "bayonnoma " +
          "asosida " +
          "chiqdi. " +
          "Ishtirok " +
          "etish " +
          "eng " +
          "samarali " +
          "himoya " +
          "imkoniyati " +
          "edi.",
        keyPoints: [
          "Huquqlar: tanishish, tushuntirish, dalil, iltimosnoma, advokat, shikoyat",
          "Advokat yordamidan foydalanish — huquq, iltimos emas",
          "Tilni bilmaydigan shaxs tarjimon orqali ishtirok etadi",
          "Qaror turlari: jazo qo'llash yoki ish yuritishni tugatish",
        ],
        warning:
          "Ishni " +
          "ko'rib " +
          "chiqishda " +
          "ishtirok " +
          "etmaslik " +
          "himoyani " +
          "sezilarli " +
          "zaiflashtiradi " +
          "va " +
          "keyingi " +
          "shikoyatni " +
          "ham " +
          "qiyinlashtiradi.",
        lawRefs: [
          { code: "MJK", article: "294" },
          { code: "MJK", article: "295" },
          { code: "MJK", article: "297" },
          { code: "MJK", article: "300" },
          { code: "MJK", article: "306" },
          { code: "MJK", article: "310" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     4. Ta'minlash choralari
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "mamuriy-taminlash",
    category: "administrative",
    level: "mid",
    order: 10040,
    title: "Ushlab turish, ko'rik va olib qo'yish",
    desc:
      "Ish yuritishni ta'minlash choralari: ushlab keltirish, " +
      "ma'muriy yo'l bilan ushlab turish, shaxsni ko'rikdan o'tkazish.",
    objectives: [
      "Ta'minlash choralari turlarini bilasiz",
      "Ushlab turish muddatlarini va shartlarini bilasiz",
      "Ko'rik va olib qo'yish qoidalarini bilasiz",
      "Bu choralar ustidan shikoyat qilish mumkinligini bilasiz",
    ],
    practicalSteps: [
      "Ushlab turilsangiz, asosini va vaqtini yozma qayd etishni so'rang",
      "Ko'rik va olib qo'yishda guvohlar ishtirokini talab qiling",
      "Olib qo'yilgan ashyolar ro'yxati tuzilishini va nusxa berilishini talab qiling",
      "Chora noqonuniy bo'lsa, u ustidan shikoyat qilish yo'li ochiq",
    ],
    sections: [
      {
        heading: "Ushlab keltirish va ushlab turish",
        text:
          "TA'MINLASH CHORALARI — " +
          "ma'muriy ish yuritishni " +
          "ta'minlash uchun " +
          "qo'llaniladigan " +
          "vaqtinchalik " +
          "choralar.\n\n" +
          "Ular jazo EMAS: " +
          "maqsadi ishni " +
          "to'g'ri yuritish, " +
          "shaxsni " +
          "aniqlash va " +
          "dalillarni " +
          "saqlash.\n\n" +
          "USHLAB KELTIRISH " +
          "— bayonnoma " +
          "tuzish uchun " +
          "shaxsni " +
          "vakolatli " +
          "organga olib " +
          "kelish.\n\n" +
          "MA'MURIY YO'L " +
          "BILAN USHLAB " +
          "TURISH — " +
          "shaxsni " +
          "vaqtincha " +
          "ushlab " +
          "turish. " +
          "Bu chora " +
          "haqida " +
          "BAYONNOMA " +
          "tuziladi.\n\n" +
          "Ushlab " +
          "turishga " +
          "vakolatli " +
          "organlar " +
          "va " +
          "mansabdor " +
          "shaxslar " +
          "qonunda " +
          "sanalgan " +
          "— ya'ni " +
          "har " +
          "qanday " +
          "xodim " +
          "buni " +
          "qila " +
          "olmaydi.\n\n" +
          "MUDDATLAR " +
          "qat'iy " +
          "belgilangan " +
          "va ular " +
          "cheklangan.\n\n" +
          "Amaliy " +
          "xulosa: " +
          "ushlab " +
          "turilsangiz " +
          "birinchi " +
          "savol — " +
          "«asos " +
          "nima va " +
          "bayonnoma " +
          "tuzildimi?»\n\n" +
          "Ikkinchi " +
          "savol — " +
          "vaqt: " +
          "ushlab " +
          "turish " +
          "boshlangan " +
          "payt " +
          "qayd " +
          "etilishi " +
          "kerak, " +
          "chunki " +
          "muddat " +
          "shundan " +
          "hisoblanadi.",
        example:
          "Shaxs " +
          "ushlab " +
          "turildi, " +
          "lekin " +
          "bayonnoma " +
          "tuzilmadi " +
          "va vaqt " +
          "qayd " +
          "etilmadi. " +
          "Bunday " +
          "holatda " +
          "muddatga " +
          "rioya " +
          "qilinganini " +
          "tekshirish " +
          "imkonsiz " +
          "bo'ladi — " +
          "bu " +
          "protsessual " +
          "buzilish.",
        keyPoints: [
          "Ta'minlash choralari — jazo emas, vaqtinchalik choralar",
          "Ushlab turish haqida BAYONNOMA tuziladi",
          "Vakolatli organlar ro'yxati qonunda belgilangan",
          "Muddatlar qat'iy cheklangan va vaqt qayd etilishi kerak",
        ],
        warning:
          "Ushlab " +
          "turish " +
          "muddati " +
          "buzilgan " +
          "bo'lsa, " +
          "bu " +
          "alohida " +
          "shikoyat " +
          "asosi " +
          "bo'ladi " +
          "va u " +
          "ish " +
          "natijasiga " +
          "ham " +
          "ta'sir " +
          "qilishi " +
          "mumkin.",
        lawRefs: [
          { code: "MJK", article: "284" },
          { code: "MJK", article: "285" },
          { code: "MJK", article: "286" },
          { code: "MJK", article: "287" },
          { code: "MJK", article: "288" },
        ],
      },
      {
        heading: "Ko'rik, olib qo'yish va shikoyat",
        text:
          "SHAXSNI KO'RIKDAN " +
          "O'TKAZISH va " +
          "ashyolarni ko'zdan " +
          "kechirish qonunda " +
          "tartibga " +
          "solingan.\n\n" +
          "Bu chora " +
          "shaxsning " +
          "daxlsizligiga " +
          "tegadi, shuning " +
          "uchun tartib " +
          "qat'iy: " +
          "belgilangan " +
          "shartlar va " +
          "guvohlar " +
          "ishtiroki " +
          "talab " +
          "qilinishi " +
          "mumkin.\n\n" +
          "ASHYOLAR VA " +
          "HUJJATLARNI " +
          "OLIB QO'YISH " +
          "hamda xatlash " +
          "ham alohida " +
          "tartibga " +
          "solingan.\n\n" +
          "Amaliy " +
          "maslahat: " +
          "olib " +
          "qo'yilgan " +
          "narsalar " +
          "RO'YXATI " +
          "tuzilishini " +
          "va sizga " +
          "nusxa " +
          "berilishini " +
          "talab " +
          "qiling.\n\n" +
          "Aks holda " +
          "keyin " +
          "«nima " +
          "olindi» " +
          "degan " +
          "savolga " +
          "javob " +
          "topilmaydi.\n\n" +
          "TRANSPORT " +
          "VOSITALARI " +
          "uchun " +
          "alohida " +
          "qoidalar: " +
          "ushlab " +
          "turish va " +
          "ko'rikdan " +
          "o'tkazish " +
          "asoslari, " +
          "shuningdek " +
          "boshqarishdan " +
          "chetlatish " +
          "va " +
          "holatni " +
          "aniqlash " +
          "uchun " +
          "tekshirish " +
          "tartibi " +
          "belgilangan.\n\n" +
          "SHIKOYAT: " +
          "ta'minlash " +
          "choralari " +
          "ustidan " +
          "shikoyat " +
          "qilish " +
          "imkoniyati " +
          "nazarda " +
          "tutilgan.\n\n" +
          "Bundan " +
          "tashqari " +
          "ma'muriy " +
          "javobgarlikka " +
          "qonunga " +
          "xilof " +
          "tortilganlik " +
          "sababli " +
          "fuqaroga " +
          "yetkazilgan " +
          "zarar " +
          "masalasi " +
          "ham " +
          "tartibga " +
          "solingan.",
        example:
          "Ashyolar " +
          "ro'yxatsiz " +
          "olib " +
          "qo'yildi " +
          "va " +
          "keyin " +
          "bir " +
          "qismi " +
          "qaytarilmadi. " +
          "Ro'yxat " +
          "va " +
          "nusxa " +
          "bo'lganida " +
          "bu " +
          "muammoni " +
          "isbotlash " +
          "oson " +
          "bo'lardi.",
        keyPoints: [
          "Ko'rik va olib qo'yish qat'iy tartibga bo'ysunadi",
          "Olib qo'yilgan narsalar ro'yxati tuzilishi va nusxa berilishi kerak",
          "Transport vositalari uchun alohida qoidalar mavjud",
          "Ta'minlash choralari ustidan shikoyat qilish mumkin",
        ],
        warning:
          "Qonunga " +
          "xilof " +
          "ravishda " +
          "ma'muriy " +
          "javobgarlikka " +
          "tortilgan " +
          "bo'lsangiz, " +
          "zararni " +
          "qoplash " +
          "masalasini " +
          "ko'tarish " +
          "huquqingiz " +
          "bor.",
        lawRefs: [
          { code: "MJK", article: "289" },
          { code: "MJK", article: "290" },
          { code: "MJK", article: "291" },
          { code: "MJK", article: "292" },
          { code: "MJK", article: "293" },
          { code: "MJK", article: "302" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     5. Yo'l harakati
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "yol-harakati",
    category: "administrative",
    level: "basic",
    order: 10050,
    title: "Yo'l harakati qoidalarini buzish",
    desc:
      "Eng ko'p uchraydigan yo'l qoidabuzarliklari, avtomatik " +
      "qayd etish tizimi, jarima ballari va haydovchi huquqlari.",
    objectives: [
      "Asosiy yo'l qoidabuzarliklari turlarini bilasiz",
      "Avtomatik foto va video qayd etish tizimini tushunasiz",
      "Jarima ballari tizimini bilasiz",
      "Haydovchi sifatida huquqlaringizni bilasiz",
    ],
    practicalSteps: [
      "Avtomatik qayd etilgan huquqbuzarlik xabarnomasini e'tiborsiz qoldirmang",
      "Rozi bo'lmasangiz, belgilangan muddatda e'tiroz bildiring",
      "Ushlab turilganda hujjatlarni ko'rsating va asosni so'rang",
      "Mastlik holatini tekshirish tartibiga rioya qilinganini kuzating",
    ],
    sections: [
      {
        heading: "Qoidabuzarliklar va avtomatik qayd etish",
        text:
          "Yo'l harakati sohasidagi " +
          "qoidabuzarliklar " +
          "ma'muriy javobgarlik " +
          "kodeksining eng katta " +
          "va eng ko'p " +
          "qo'llaniladigan " +
          "qismlaridan biri.\n\n" +
          "Eng ko'p uchraydigan " +
          "turlar: transport " +
          "vositalaridan " +
          "foydalanish " +
          "qoidalarini " +
          "buzish; " +
          "belgilangan " +
          "tezlikni " +
          "oshirish; " +
          "svetoforning " +
          "taqiqlovchi " +
          "signaliga " +
          "yurish; " +
          "to'xtash va " +
          "to'xtab " +
          "turish " +
          "qoidalarini " +
          "buzish; " +
          "boshqarish " +
          "vaqtida " +
          "telefondan " +
          "foydalanish; " +
          "trotuarlar " +
          "va " +
          "piyodalar " +
          "yo'lidan " +
          "harakatlanish.\n\n" +
          "AVTOMATIK QAYD " +
          "ETISH: maxsus " +
          "avtomatlashtirilgan " +
          "foto va video " +
          "qayd etish " +
          "texnika " +
          "vositalari " +
          "orqali " +
          "aniqlangan " +
          "huquqbuzarliklar " +
          "uchun alohida " +
          "tartib " +
          "belgilangan.\n\n" +
          "Bu tizimning " +
          "xususiyati: " +
          "huquqbuzarlik " +
          "avtomatik " +
          "qayd " +
          "etiladi va " +
          "xabarnoma " +
          "yuboriladi.\n\n" +
          "Amaliy " +
          "maslahat: " +
          "xabarnomani " +
          "e'tiborsiz " +
          "qoldirmang. " +
          "Rozi " +
          "bo'lmasangiz " +
          "ham, " +
          "jim " +
          "turish " +
          "yechim " +
          "emas — " +
          "belgilangan " +
          "muddatda " +
          "e'tiroz " +
          "bildirish " +
          "kerak.\n\n" +
          "JARIMA " +
          "BALLARI " +
          "tizimi ham " +
          "mavjud: " +
          "yo'l " +
          "harakati " +
          "qoidabuzarliklari " +
          "bo'yicha " +
          "hisoblanadigan " +
          "ballar " +
          "belgilangan.\n\n" +
          "Ballar " +
          "yig'ilib " +
          "borishi " +
          "qo'shimcha " +
          "oqibatlarga " +
          "olib " +
          "kelishi " +
          "mumkin.",
        example:
          "Avtomobil " +
          "egasi " +
          "xabarnomani " +
          "e'tiborsiz " +
          "qoldirdi, " +
          "chunki " +
          "«mashinani " +
          "boshqa " +
          "odam " +
          "haydagan» " +
          "edi. " +
          "Bunday " +
          "holatda " +
          "jim " +
          "turish " +
          "emas, " +
          "haqiqiy " +
          "haydovchini " +
          "ko'rsatib " +
          "rasmiy " +
          "e'tiroz " +
          "bildirish " +
          "kerak.",
        keyPoints: [
          "Yo'l qoidabuzarliklari MJKning eng ko'p qo'llaniladigan qismi",
          "Avtomatik qayd etish uchun alohida tartib belgilangan",
          "Xabarnomani e'tiborsiz qoldirish yechim emas",
          "Jarima ballari tizimi ballarning yig'ilishini hisobga oladi",
        ],
        warning:
          "Jarimani " +
          "muddatida " +
          "to'lamaslik " +
          "qo'shimcha " +
          "oqibatlarga, " +
          "shu " +
          "jumladan " +
          "majburiy " +
          "undirishga " +
          "olib " +
          "keladi.",
        lawRefs: [
          { code: "MJK", article: "17-1" },
          { code: "MJK", article: "34-1" },
          { code: "MJK", article: "125" },
          { code: "MJK", article: "128-1" },
          { code: "MJK", article: "128-3" },
          { code: "MJK", article: "128-4" },
        ],
      },
      {
        heading: "Haydovchi huquqlari va tekshirish tartibi",
        text:
          "Transport vositalarini " +
          "ushlab turish va " +
          "ko'rikdan o'tkazish " +
          "ASOSLARI va TARTIBI " +
          "qonunda " +
          "belgilangan.\n\n" +
          "Ya'ni ushlab " +
          "turish asossiz " +
          "bo'lishi " +
          "mumkin emas.\n\n" +
          "Haydovchi " +
          "sifatida " +
          "huquqlaringiz " +
          "umumiy " +
          "ma'muriy " +
          "huquqlar " +
          "bilan bir " +
          "xil: asosni " +
          "bilish, " +
          "tushuntirish " +
          "berish, " +
          "bayonnoma " +
          "bilan " +
          "tanishish, " +
          "izoh " +
          "yozish, " +
          "shikoyat " +
          "qilish.\n\n" +
          "TRANSPORT " +
          "VOSITASINI " +
          "BOSHQARISHDAN " +
          "CHETLATISH " +
          "va mastlik " +
          "holatini " +
          "aniqlash " +
          "uchun " +
          "tekshirish " +
          "alohida " +
          "moddada " +
          "tartibga " +
          "solingan.\n\n" +
          "Bu " +
          "protsedura " +
          "juda " +
          "muhim, " +
          "chunki " +
          "natijasi " +
          "og'ir " +
          "oqibatlarga " +
          "olib " +
          "kelishi " +
          "mumkin.\n\n" +
          "Amaliy " +
          "maslahat: " +
          "tekshirish " +
          "tartibiga " +
          "rioya " +
          "qilinishini " +
          "kuzating " +
          "va " +
          "bayonnomada " +
          "barcha " +
          "holatlar " +
          "qayd " +
          "etilganini " +
          "tekshiring.\n\n" +
          "Tartib " +
          "buzilgan " +
          "bo'lsa " +
          "(masalan " +
          "guvohlar " +
          "yo'q, " +
          "bayonnoma " +
          "tuzilmagan), " +
          "bu " +
          "e'tiroz " +
          "uchun " +
          "kuchli " +
          "asos " +
          "bo'ladi.\n\n" +
          "Har " +
          "qanday " +
          "holatda " +
          "ham " +
          "hujjatlarni " +
          "ko'rsatish " +
          "va " +
          "muloqotni " +
          "xotirjam " +
          "olib " +
          "borish " +
          "eng " +
          "foydali " +
          "yo'l.",
        example:
          "Haydovchi " +
          "tekshiruvdan " +
          "o'tkazildi, " +
          "lekin " +
          "protsedura " +
          "hujjatlashtirilmadi " +
          "va " +
          "unga " +
          "nusxa " +
          "berilmadi. " +
          "Keyinchalik " +
          "natijaga " +
          "e'tiroz " +
          "bildirish " +
          "juda " +
          "qiyin " +
          "bo'ldi.",
        keyPoints: [
          "Transport vositasini ushlab turish ASOSGA ega bo'lishi kerak",
          "Haydovchining huquqlari umumiy ma'muriy huquqlar bilan bir xil",
          "Boshqarishdan chetlatish va tekshirish alohida tartibga solingan",
          "Tartib buzilishi e'tiroz uchun kuchli asos bo'ladi",
        ],
        warning:
          "Tekshiruvdan " +
          "asossiz " +
          "bosh " +
          "tortish " +
          "mustaqil " +
          "javobgarlik " +
          "asosi " +
          "bo'lishi " +
          "mumkin. " +
          "E'tirozni " +
          "protsedura " +
          "davomida " +
          "yozma " +
          "bildiring.",
        lawRefs: [
          { code: "MJK", article: "291" },
          { code: "MJK", article: "292" },
          { code: "MJK", article: "294" },
          { code: "MJK", article: "248" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     6. Jamoat tartibi va sha'n
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "jamoat-tartibi",
    category: "administrative",
    level: "basic",
    order: 10060,
    title: "Jamoat tartibi, tuhmat va haqorat",
    desc:
      "Shaxsga qarshi ma'muriy huquqbuzarliklar: tuhmat, haqorat " +
      "va jamoat tartibiga oid qoidalar.",
    objectives: [
      "Tuhmat va haqorat tushunchalarini farqlay olasiz",
      "Ular bo'yicha qanday harakat qilish kerakligini bilasiz",
      "Jabrlanuvchi sifatida huquqlaringizni bilasiz",
      "Ma'muriy va fuqarolik yo'llarini birga ishlatishni bilasiz",
    ],
    practicalSteps: [
      "Haqorat yoki tuhmat holatini darhol qayd eting: skrinshot, guvoh, sana",
      "Jabrlanuvchi sifatida ishda qatnashish huquqingizdan foydalaning",
      "Ma'muriy javobgarlik bilan bir qatorda fuqarolik da'vosi ham mumkin",
      "Zarar (ma'naviy, mulkiy) yetgan bo'lsa, uni hujjat bilan asoslang",
    ],
    sections: [
      {
        heading: "Tuhmat va haqorat",
        text:
          "MJK shaxsning sha'ni va " +
          "qadr-qimmatini himoya " +
          "qiladigan alohida " +
          "moddalarga ega.\n\n" +
          "TUHMAT — bila turib " +
          "yolg'on, boshqa " +
          "shaxsni sharmanda " +
          "qiluvchi uydirmalarni " +
          "tarqatish.\n\n" +
          "Bu yerda ikki " +
          "element muhim: " +
          "ma'lumot YOLG'ON " +
          "bo'lishi va " +
          "tarqatuvchi buni " +
          "BILA TURIB " +
          "qilishi.\n\n" +
          "HAQORAT — " +
          "shaxsning sha'ni " +
          "va qadr-qimmatini " +
          "qasddan " +
          "kamsitish.\n\n" +
          "Farqi: tuhmatda " +
          "yolg'on FAKT " +
          "tarqatiladi, " +
          "haqoratda esa " +
          "kamsituvchi " +
          "shakl " +
          "ishlatiladi.\n\n" +
          "Amaliy jihatdan " +
          "bu farq " +
          "muhim, chunki " +
          "isbot " +
          "predmeti " +
          "boshqacha.\n\n" +
          "MUHIM QO'SHIMCHA " +
          "IMKONIYAT: " +
          "ma'muriy " +
          "javobgarlik " +
          "fuqarolik " +
          "himoyasini " +
          "ISTISNO " +
          "QILMAYDI.\n\n" +
          "Ya'ni bir " +
          "vaqtning " +
          "o'zida: " +
          "ma'muriy " +
          "javobgarlikka " +
          "tortish " +
          "uchun " +
          "murojaat " +
          "qilish " +
          "VA " +
          "fuqarolik " +
          "tartibida " +
          "ma'lumotni " +
          "rad " +
          "etish " +
          "hamda " +
          "zararni " +
          "qoplashni " +
          "talab " +
          "qilish " +
          "mumkin.\n\n" +
          "Ikkinchi " +
          "yo'l " +
          "ko'pincha " +
          "amaliy " +
          "natija " +
          "beradi, " +
          "chunki " +
          "u " +
          "obro'ni " +
          "tiklashga " +
          "qaratilgan.",
        example:
          "Ijtimoiy " +
          "tarmoqda " +
          "shaxs " +
          "haqida " +
          "yolg'on " +
          "ayblov " +
          "tarqatildi. " +
          "U " +
          "ma'muriy " +
          "javobgarlik " +
          "uchun " +
          "murojaat " +
          "qilishi " +
          "va " +
          "shu " +
          "bilan " +
          "birga " +
          "fuqarolik " +
          "tartibida " +
          "rad " +
          "etishni " +
          "talab " +
          "qilishi " +
          "mumkin.",
        keyPoints: [
          "Tuhmat — bila turib yolg'on uydirmalarni tarqatish",
          "Haqorat — sha'n va qadr-qimmatni qasddan kamsitish",
          "Isbot predmeti ikkalasida boshqacha",
          "Ma'muriy javobgarlik fuqarolik himoyasini istisno qilmaydi",
        ],
        warning:
          "Javob " +
          "sifatida " +
          "o'zingiz " +
          "haqorat " +
          "qilsangiz, " +
          "endi " +
          "siz " +
          "ham " +
          "javobgar " +
          "bo'lasiz. " +
          "Reaksiyani " +
          "faqat " +
          "huquqiy " +
          "yo'lda " +
          "bildiring.",
        lawRefs: [
          { code: "MJK", article: "40" },
          { code: "MJK", article: "41" },
          { code: "FK", article: "100" },
        ],
      },
      {
        heading: "Jabrlanuvchi sifatida harakat qilish",
        text:
          "Ma'muriy ishda " +
          "JABRLANUVCHI " +
          "protsessual " +
          "maqomga ega: " +
          "huquqbuzarlik " +
          "yo'li bilan " +
          "ma'naviy, " +
          "jismoniy yoki " +
          "mulkiy zarar " +
          "yetkazilgan " +
          "shaxs.\n\n" +
          "Bu maqom " +
          "huquqlar " +
          "beradi: ish " +
          "materiallari " +
          "bilan " +
          "tanishish, " +
          "tushuntirish " +
          "berish, " +
          "dalillar " +
          "taqdim " +
          "etish, " +
          "iltimosnoma " +
          "kiritish " +
          "va qaror " +
          "ustidan " +
          "shikoyat " +
          "qilish.\n\n" +
          "Amaliy " +
          "xulosa: " +
          "murojaat " +
          "qilib, " +
          "keyin " +
          "«ular " +
          "o'zi " +
          "ko'radi» " +
          "deb " +
          "kutish " +
          "noto'g'ri. " +
          "Faol " +
          "qatnashish " +
          "natijaga " +
          "ta'sir " +
          "qiladi.\n\n" +
          "DALIL " +
          "TO'PLASH " +
          "eng " +
          "muhim " +
          "qadam. " +
          "Bunga " +
          "kiradi: " +
          "skrinshot " +
          "(sana " +
          "va " +
          "havola " +
          "ko'rinadigan), " +
          "guvohlar " +
          "ma'lumotlari, " +
          "tibbiy " +
          "hujjatlar " +
          "(jismoniy " +
          "zarar " +
          "bo'lsa), " +
          "xarajat " +
          "hujjatlari.\n\n" +
          "ZARARNI " +
          "QOPLASH: " +
          "huquqbuzarlik " +
          "sodir " +
          "etgan " +
          "shaxs " +
          "zimmasiga " +
          "zararni " +
          "qoplash " +
          "majburiyati " +
          "yuklanishi " +
          "mumkin.\n\n" +
          "Guvohlar, " +
          "ekspertlar " +
          "va " +
          "mutaxassislar " +
          "ishtiroki " +
          "ham " +
          "tartibga " +
          "solingan " +
          "— " +
          "murakkab " +
          "holatda " +
          "ekspertiza " +
          "tayinlanishini " +
          "so'rash " +
          "mumkin.",
        example:
          "Jabrlanuvchi " +
          "arizasini " +
          "berdi-yu, " +
          "keyin " +
          "jarayonda " +
          "qatnashmadi " +
          "va " +
          "dalil " +
          "taqdim " +
          "etmadi. " +
          "Ish " +
          "yetarli " +
          "dalil " +
          "bo'lmagani " +
          "uchun " +
          "tugatildi — " +
          "faol " +
          "qatnashish " +
          "natijani " +
          "o'zgartirishi " +
          "mumkin " +
          "edi.",
        keyPoints: [
          "Jabrlanuvchi protsessual maqomga va huquqlarga ega",
          "Faol qatnashish natijaga bevosita ta'sir qiladi",
          "Dalil to'plash eng muhim qadam",
          "Zararni qoplash majburiyati yuklanishi mumkin",
        ],
        warning:
          "Skrinshotda " +
          "sana " +
          "va " +
          "manba " +
          "ko'rinmasa, " +
          "uning " +
          "dalil " +
          "sifatidagi " +
          "qiymati " +
          "keskin " +
          "pasayadi. " +
          "To'liq " +
          "sahifani " +
          "saqlang.",
        lawRefs: [
          { code: "MJK", article: "295" },
          { code: "MJK", article: "298" },
          { code: "MJK", article: "299" },
          { code: "MJK", article: "38" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     7. Ma'muriy sud  (MAVJUD KALIT — kengaytirildi)
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "mamuriy-sud",
    category: "administrative",
    level: "advanced",
    order: 10070,
    title: "Davlat organi ustidan sudga: ma'muriy sud",
    desc:
      "Davlat organi qarori, harakati yoki harakatsizligi ustidan " +
      "sudga murojaat qilish: ariza, muddatlar va isbot yuki.",
    objectives: [
      "Ma'muriy sud qanday ishlarni ko'rishini bilasiz",
      "MJK va MSK farqini aniq tushunasiz",
      "Ariza qanday beriladi va muddatlarni bilasiz",
      "Isbot yuki kimda ekanini bilasiz",
    ],
    practicalSteps: [
      "Avval yuqori organga murojaat qiling — ko'p holat shu yerda hal bo'ladi",
      "Barcha yozishmalar va javoblarni saqlang: ular sudda asosiy dalil",
      "Arizada aniq talab yozing: qarorni bekor qilish yoki harakatga majburlash",
      "Muddatlarni tekshiring — ma'muriy ishlarda ular qisqa bo'lishi mumkin",
    ],
    sections: [
      {
        heading: "Ma'muriy sud nima qiladi",
        text:
          "Ma'muriy sud ishlarini " +
          "yuritish — bu " +
          "FUQARO DAVLAT " +
          "ORGANI ustidan " +
          "murojaat qilgan " +
          "holat.\n\n" +
          "Bu MJK dan " +
          "butunlay " +
          "farq qiladi: " +
          "MJK da davlat " +
          "sizga jazo " +
          "qo'llaydi, " +
          "MSK da esa " +
          "siz davlat " +
          "organining " +
          "qarorini " +
          "tekshirasiz.\n\n" +
          "Bu farqni " +
          "tushunish " +
          "amalda " +
          "vaqt " +
          "tejaydi: " +
          "noto'g'ri " +
          "tartibda " +
          "berilgan " +
          "ariza " +
          "qaytariladi.\n\n" +
          "Ma'muriy " +
          "sudda " +
          "ko'riladigan " +
          "ishlar " +
          "odatda " +
          "quyidagilar: " +
          "davlat " +
          "organi " +
          "qarorini " +
          "bekor " +
          "qilish; " +
          "harakati " +
          "yoki " +
          "harakatsizligini " +
          "noqonuniy " +
          "deb " +
          "topish; " +
          "organni " +
          "muayyan " +
          "harakatni " +
          "bajarishga " +
          "majburlash.\n\n" +
          "Oxirgi " +
          "variant " +
          "amalda " +
          "juda " +
          "foydali: " +
          "masalan " +
          "hujjat " +
          "berishdan " +
          "asossiz " +
          "bosh " +
          "tortilganda.\n\n" +
          "Ma'muriy " +
          "sud " +
          "ishlarini " +
          "yuritishning " +
          "vazifalari " +
          "va " +
          "prinsiplari " +
          "kodeksda " +
          "belgilangan.",
        example:
          "Fuqaroga " +
          "ma'lumotnoma " +
          "berish " +
          "asossiz " +
          "rad " +
          "etildi. " +
          "Bu " +
          "holatda " +
          "talab " +
          "«qarorni " +
          "bekor " +
          "qilish» " +
          "emas, " +
          "«organni " +
          "ma'lumotnoma " +
          "berishga " +
          "majburlash» " +
          "bo'lishi " +
          "kerak — " +
          "talab " +
          "turini " +
          "to'g'ri " +
          "tanlash " +
          "muhim.",
        keyPoints: [
          "MSK — fuqaro davlat organi ustidan murojaat qilgan holat",
          "MJK — davlat sizga jazo qo'llaganda",
          "Talab turlari: bekor qilish, noqonuniy deb topish, harakatga majburlash",
          "Talab turini to'g'ri tanlash natijaga bevosita ta'sir qiladi",
        ],
        warning:
          "Noto'g'ri " +
          "tartibda " +
          "berilgan " +
          "ariza " +
          "qaytariladi " +
          "va " +
          "muddat " +
          "o'tib " +
          "ketishi " +
          "mumkin. " +
          "Tartibni " +
          "oldindan " +
          "aniqlang.",
        lawRefs: [
          { code: "MSK", article: "2" },
          { code: "MSK", article: "4" },
          { code: "MSK", article: "5" },
          { code: "MSK", article: "6" },
        ],
      },
      {
        heading: "Ariza, muddatlar va isbot yuki",
        text:
          "ARIZA berish " +
          "tartibi va " +
          "unga " +
          "qo'yiladigan " +
          "talablar " +
          "kodeksda " +
          "belgilangan.\n\n" +
          "Arizada " +
          "bo'lishi " +
          "kerak: " +
          "qaysi " +
          "organ, " +
          "qaysi " +
          "qaror " +
          "(sana, " +
          "raqam), " +
          "nima " +
          "uchun " +
          "noqonuniy " +
          "va ANIQ " +
          "TALAB.\n\n" +
          "MUDDATLAR " +
          "ma'muriy " +
          "ishlarda " +
          "odatda " +
          "qisqa " +
          "bo'ladi — " +
          "bu " +
          "boshqaruv " +
          "barqarorligi " +
          "uchun.\n\n" +
          "Shu " +
          "sababli " +
          "«o'ylab " +
          "ko'ray» " +
          "deb " +
          "kechiktirish " +
          "xavfli.\n\n" +
          "ISBOT " +
          "YUKI " +
          "bu " +
          "yerda " +
          "eng " +
          "muhim " +
          "va eng " +
          "foydali " +
          "qoida.\n\n" +
          "Ma'muriy " +
          "ishlarda " +
          "qaror " +
          "qonuniyligini " +
          "isbotlash " +
          "odatda " +
          "DAVLAT " +
          "ORGANI " +
          "zimmasida " +
          "bo'ladi.\n\n" +
          "Ya'ni siz " +
          "«qaror " +
          "noto'g'ri» " +
          "deb " +
          "ko'rsatasiz, " +
          "organ " +
          "esa " +
          "«to'g'ri, " +
          "chunki " +
          "shu " +
          "normaga " +
          "asoslangan» " +
          "deb " +
          "isbotlaydi.\n\n" +
          "Bu " +
          "fuqarolik " +
          "ishlaridagi " +
          "holatdan " +
          "farq " +
          "qiladi va " +
          "sizning " +
          "holatingizni " +
          "sezilarli " +
          "yengillashtiradi.\n\n" +
          "Amaliy " +
          "xulosa: " +
          "avvalgi " +
          "bosqichlardagi " +
          "YOZMA " +
          "javoblarni " +
          "saqlang — " +
          "organ " +
          "qanday " +
          "asosga " +
          "tayanganini " +
          "aynan " +
          "ular " +
          "ko'rsatadi.",
        example:
          "Fuqaro " +
          "sudga " +
          "murojaat " +
          "qildi, " +
          "lekin " +
          "organning " +
          "yozma " +
          "javobini " +
          "saqlamagan " +
          "edi. " +
          "Rad " +
          "etish " +
          "sababini " +
          "ko'rsatadigan " +
          "hujjat " +
          "bo'lmagani " +
          "uchun " +
          "isbotlash " +
          "murakkablashdi.",
        keyPoints: [
          "Arizada organ, qaror, asos va ANIQ talab ko'rsatiladi",
          "Ma'muriy ishlarda muddatlar odatda qisqa",
          "Isbot yuki odatda DAVLAT ORGANI zimmasida",
          "Avvalgi bosqichdagi yozma javoblar asosiy dalil bo'ladi",
        ],
        warning:
          "Og'zaki " +
          "rad " +
          "javobi " +
          "bilan " +
          "sudga " +
          "borish " +
          "qiyin. " +
          "Har " +
          "doim " +
          "yozma " +
          "javob " +
          "talab " +
          "qiling.",
        lawRefs: [
          { code: "MSK", article: "65" },
          { code: "MSK", article: "66" },
          { code: "MSK", article: "67" },
          { code: "MSK", article: "116" },
          { code: "MSK", article: "118" },
          { code: "MSK", article: "179" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     8. Davlat xizmatlari va murojaat
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "davlat-xizmatlari",
    category: "administrative",
    level: "basic",
    order: 10080,
    title: "Davlat xizmatlari va murojaat qilish",
    desc:
      "Davlat organiga murojaat qilish, hujjat olish, rad etish " +
      "va shikoyat zanjiri.",
    objectives: [
      "Murojaat qilish huquqini va uning kafolatlarini bilasiz",
      "Rad etilganda nima qilish kerakligini bilasiz",
      "Shikoyat zanjirini to'g'ri ketma-ketlikda bilasiz",
      "Qanday hujjatlarni talab qilish mumkinligini bilasiz",
    ],
    practicalSteps: [
      "Murojaatni yozma bering va ro'yxat raqamini oling",
      "Talabni aniq yozing: qaysi hujjat, qaysi masala",
      "Rad etilsa, sababni YOZMA va qonun ko'rsatilgan holda so'rang",
      "Qonunda ko'rsatilmagan qo'shimcha hujjat talab qilinsa, asosini so'rang",
    ],
    sections: [
      {
        heading: "Murojaat va hujjat olish huquqi",
        text:
          "Konstitutsiya davlat " +
          "organlari va " +
          "mansabdor " +
          "shaxslar oldiga " +
          "aniq majburiyat " +
          "qo'yadi: har " +
          "kimga o'z " +
          "huquqlari va " +
          "qonuniy " +
          "manfaatlariga " +
          "daxldor " +
          "hujjatlar " +
          "hamda " +
          "ma'lumotlar " +
          "bilan " +
          "tanishish " +
          "imkoniyatini " +
          "berish.\n\n" +
          "Bu qoidaning " +
          "amaliy " +
          "kuchi " +
          "katta: " +
          "o'zingizga " +
          "tegishli " +
          "hujjatni " +
          "so'rash " +
          "iltimos " +
          "emas, " +
          "huquq.\n\n" +
          "MUROJAAT " +
          "SHAKLI " +
          "muhim: " +
          "yozma " +
          "murojaat " +
          "ro'yxatga " +
          "olinadi, " +
          "raqam " +
          "beriladi " +
          "va " +
          "javob " +
          "muddati " +
          "shundan " +
          "boshlanadi.\n\n" +
          "MUROJAAT " +
          "MAZMUNI " +
          "natijaga " +
          "bevosita " +
          "ta'sir " +
          "qiladi.\n\n" +
          "Kuchsiz " +
          "murojaat: " +
          "«ko'rib " +
          "chiqishingizni " +
          "so'rayman».\n\n" +
          "Kuchli " +
          "murojaat: " +
          "«shu " +
          "hujjatning " +
          "nusxasini " +
          "berishingizni " +
          "so'rayman» " +
          "yoki " +
          "«shu " +
          "qarorni " +
          "bekor " +
          "qilishingizni " +
          "so'rayman».\n\n" +
          "Aniq " +
          "talab " +
          "aniq " +
          "javob " +
          "keltiradi " +
          "va " +
          "keyingi " +
          "bosqichda " +
          "e'tiroz " +
          "bildirish " +
          "ham " +
          "osonlashadi.",
        example:
          "Fuqaro " +
          "o'ziga " +
          "nisbatan " +
          "chiqarilgan " +
          "qaror " +
          "nusxasini " +
          "so'radi, " +
          "«ichki " +
          "hujjat» " +
          "deb " +
          "rad " +
          "etildi. " +
          "Qaror " +
          "aynan " +
          "shu " +
          "fuqaroning " +
          "huquqlariga " +
          "daxldor " +
          "bo'lsa, " +
          "rad " +
          "etish " +
          "asoslanishi " +
          "kerak.",
        keyPoints: [
          "O'z huquqlaringizga daxldor hujjat bilan tanishish — HUQUQ",
          "Yozma murojaat ro'yxatga olinadi va javob muddati shundan boshlanadi",
          "Aniq talab aniq javob keltiradi",
          "Umumiy iltimos umumiy javob oladi",
        ],
        warning:
          "Og'zaki " +
          "murojaat " +
          "iz " +
          "qoldirmaydi. " +
          "Keyingi " +
          "bosqichda " +
          "murojaat " +
          "qilganingizni " +
          "isbotlay " +
          "olmaysiz.",
        lawRefs: [
          { code: "KONS", article: "34" },
          { code: "KONS", article: "55" },
          { code: "MSK", article: "4" },
        ],
      },
      {
        heading: "Rad etish va shikoyat zanjiri",
        text:
          "Rad etilgan " +
          "holatda " +
          "birinchi " +
          "qadam — " +
          "SABABNI " +
          "YOZMA " +
          "OLISH.\n\n" +
          "Rad " +
          "etish " +
          "asoslanishi " +
          "va " +
          "qaysi " +
          "normaga " +
          "tayanishi " +
          "ko'rsatilishi " +
          "kerak.\n\n" +
          "Yozma " +
          "sabab " +
          "bo'lsa, " +
          "uni " +
          "baholash " +
          "mumkin: " +
          "ko'rsatilgan " +
          "norma " +
          "haqiqatan " +
          "shu " +
          "holatga " +
          "tegishlimi?\n\n" +
          "SHIKOYAT " +
          "ZANJIRI " +
          "to'g'ri " +
          "ketma-ketlikda " +
          "bo'lishi " +
          "kerak:\n\n" +
          "Birinchi " +
          "bosqich — " +
          "qaror " +
          "chiqargan " +
          "organning " +
          "o'zi. " +
          "Ko'p " +
          "xato " +
          "texnik " +
          "bo'ladi " +
          "va " +
          "shu " +
          "yerda " +
          "tuzatiladi.\n\n" +
          "Ikkinchi " +
          "bosqich — " +
          "yuqori " +
          "organ.\n\n" +
          "Uchinchi " +
          "bosqich — " +
          "ma'muriy " +
          "sud.\n\n" +
          "Yonma-yon " +
          "yo'l: " +
          "prokuratura " +
          "qonun " +
          "ijrosini " +
          "nazorat " +
          "qiladi.\n\n" +
          "MUHIM " +
          "AMALIY " +
          "QOIDA: " +
          "qonunda " +
          "ko'rsatilmagan " +
          "qo'shimcha " +
          "hujjat " +
          "talab " +
          "qilinsa, " +
          "bu " +
          "asossiz " +
          "bo'lishi " +
          "mumkin.\n\n" +
          "Ijro " +
          "organi " +
          "hujjatlari " +
          "qonundan " +
          "pastda " +
          "turadi va " +
          "qonun " +
          "talablarini " +
          "kengaytira " +
          "olmaydi.\n\n" +
          "Shuning " +
          "uchun " +
          "«bu " +
          "qaysi " +
          "qonunga " +
          "asoslangan?» " +
          "degan " +
          "savol " +
          "har " +
          "doim " +
          "o'rinli.",
        example:
          "Xizmat " +
          "ko'rsatish " +
          "markazi " +
          "qonunda " +
          "ko'rsatilmagan " +
          "qo'shimcha " +
          "hujjatni " +
          "talab " +
          "qildi. " +
          "Talabning " +
          "huquqiy " +
          "asosini " +
          "yozma " +
          "so'rash " +
          "ko'pincha " +
          "masalani " +
          "shu " +
          "bosqichdayoq " +
          "hal " +
          "qiladi.",
        keyPoints: [
          "Rad etish asoslanishi va norma ko'rsatilishi kerak",
          "Zanjir: qaror chiqargan organ → yuqori organ → ma'muriy sud",
          "Prokuratura — yonma-yon nazorat yo'li",
          "Ijro organi hujjatlari qonun talablarini kengaytira olmaydi",
        ],
        warning:
          "Bosqichlarni " +
          "o'tkazib " +
          "yuborish " +
          "ba'zan " +
          "arizaning " +
          "qaytarilishiga " +
          "olib " +
          "keladi. " +
          "Tartibni " +
          "oldindan " +
          "aniqlang.",
        lawRefs: [
          { code: "MSK", article: "128" },
          { code: "MSK", article: "130" },
          { code: "MSK", article: "120" },
          { code: "KONS", article: "55" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     9. Saylov huquqi  (MAVJUD KALIT — kengaytirildi)
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "saylov-huquqi",
    category: "administrative",
    level: "basic",
    order: 10090,
    title: "Saylov huquqi",
    desc:
      "Saylov prinsiplari, saylovchining huquqlari, saylov " +
      "komissiyalari va ovoz berish tartibi.",
    objectives: [
      "Saylov prinsiplarini bilasiz",
      "Umumiy, teng va to'g'ridan-to'g'ri saylov huquqini tushunasiz",
      "Saylov komissiyalari tizimini bilasiz",
      "Saylovchi sifatida huquqlaringizni bilasiz",
    ],
    practicalSteps: [
      "Saylovchilar ro'yxatida ekaningizni oldindan tekshiring",
      "Ro'yxatda xato bo'lsa, uni tuzatish uchun murojaat qiling",
      "Ovoz berish maxfiyligini ta'minlash sizning huquqingiz",
      "Qoidabuzarlik ko'rsangiz, saylov komissiyasiga bildiring",
    ],
    sections: [
      {
        heading: "Saylov prinsiplari",
        text:
          "Saylov o'tkazishning " +
          "ASOSIY PRINSIPLARI " +
          "Saylov kodeksida " +
          "belgilangan va " +
          "ular tizimning " +
          "poydevorini " +
          "tashkil " +
          "etadi.\n\n" +
          "UMUMIY SAYLOV " +
          "HUQUQI — " +
          "belgilangan " +
          "yoshga yetgan " +
          "fuqarolar " +
          "saylovda " +
          "qatnashish " +
          "huquqiga " +
          "ega.\n\n" +
          "TENG SAYLOV " +
          "HUQUQI — " +
          "saylovda " +
          "ishtirok " +
          "etuvchi har " +
          "bir fuqaro " +
          "BIR ovozga " +
          "ega " +
          "bo'ladi.\n\n" +
          "TO'G'RIDAN-TO'G'RI " +
          "SAYLOV " +
          "HUQUQI — " +
          "saylovchilar " +
          "bevosita " +
          "ovoz " +
          "beradi, " +
          "oraliq " +
          "bosqich " +
          "yo'q.\n\n" +
          "YASHIRIN " +
          "OVOZ " +
          "BERISH — " +
          "saylovda " +
          "erkin va " +
          "yashirin " +
          "ovoz " +
          "beriladi. " +
          "Saylovchilarning " +
          "irodasini " +
          "nazorat " +
          "qilishga " +
          "yo'l " +
          "qo'yilmaydi.\n\n" +
          "Bu " +
          "prinsipning " +
          "amaliy " +
          "ma'nosi: " +
          "hech kim " +
          "sizdan " +
          "kimga " +
          "ovoz " +
          "berganingizni " +
          "so'rashga " +
          "yoki " +
          "buni " +
          "tekshirishga " +
          "haqli " +
          "emas.\n\n" +
          "OCHIQLIK " +
          "VA " +
          "OSHKORALIK " +
          "— " +
          "saylovga " +
          "tayyorgarlik " +
          "va uni " +
          "o'tkazish " +
          "ochiq " +
          "amalga " +
          "oshiriladi.\n\n" +
          "Konstitutsiya " +
          "ham " +
          "fuqarolarning " +
          "davlat " +
          "ishlarini " +
          "boshqarishda " +
          "qatnashish " +
          "huquqini " +
          "kafolatlaydi.",
        example:
          "Ish " +
          "beruvchi " +
          "xodimlardan " +
          "kimga " +
          "ovoz " +
          "berganini " +
          "so'radi. " +
          "Yashirin " +
          "ovoz " +
          "berish " +
          "prinsipi " +
          "bunday " +
          "so'rovni " +
          "istisno " +
          "qiladi — " +
          "javob " +
          "berish " +
          "majburiyati " +
          "yo'q.",
        keyPoints: [
          "Prinsiplar: umumiy, teng, to'g'ridan-to'g'ri saylov va yashirin ovoz berish",
          "Har bir fuqaro BIR ovozga ega",
          "Ovoz berish maxfiyligi kafolatlangan",
          "Saylov jarayoni ochiq va oshkora bo'ladi",
        ],
        warning:
          "Ovoz " +
          "berishga " +
          "majburlash " +
          "yoki " +
          "ta'sir " +
          "o'tkazish " +
          "qonunga " +
          "zid. " +
          "Bunday " +
          "holatni " +
          "saylov " +
          "komissiyasiga " +
          "bildirish " +
          "mumkin.",
        lawRefs: [
          { code: "SYK", article: "3" },
          { code: "SYK", article: "4" },
          { code: "SYK", article: "5" },
          { code: "SYK", article: "6" },
          { code: "SYK", article: "7" },
          { code: "SYK", article: "8" },
        ],
      },
      {
        heading: "Komissiyalar va ovoz berish",
        text:
          "SAYLOV " +
          "KOMISSIYALARI " +
          "TIZIMI " +
          "bir necha " +
          "darajadan " +
          "iborat: " +
          "Markaziy " +
          "saylov " +
          "komissiyasi, " +
          "hududiy, " +
          "tuman va " +
          "shahar " +
          "komissiyalari, " +
          "uchastka " +
          "komissiyalari.\n\n" +
          "Har bir " +
          "daraja " +
          "o'z " +
          "vakolatiga " +
          "ega.\n\n" +
          "Fuqaro " +
          "uchun " +
          "eng " +
          "yaqini " +
          "— " +
          "UCHASTKA " +
          "komissiyasi: " +
          "aynan " +
          "u " +
          "ovoz " +
          "berishni " +
          "tashkil " +
          "etadi " +
          "va " +
          "saylovchilar " +
          "ro'yxati " +
          "bilan " +
          "ishlaydi.\n\n" +
          "SAYLOV " +
          "OKRUGLARI " +
          "va " +
          "UCHASTKALARI " +
          "belgilangan " +
          "tartibda " +
          "tuziladi.\n\n" +
          "AMALIY " +
          "MASLAHATLAR " +
          "saylovchi " +
          "uchun:\n\n" +
          "Birinchidan, " +
          "saylovchilar " +
          "ro'yxatida " +
          "ekaningizni " +
          "OLDINDAN " +
          "tekshiring. " +
          "Xato " +
          "bo'lsa, " +
          "uni " +
          "tuzatish " +
          "uchun " +
          "vaqt " +
          "kerak " +
          "bo'ladi.\n\n" +
          "Ikkinchidan, " +
          "ovoz " +
          "berish " +
          "kabinasidan " +
          "foydalanish " +
          "huquqingiz " +
          "bor — " +
          "bu " +
          "maxfiylikni " +
          "ta'minlaydi.\n\n" +
          "Uchinchidan, " +
          "qoidabuzarlik " +
          "ko'rsangiz " +
          "uni " +
          "komissiyaga " +
          "bildirish " +
          "mumkin.\n\n" +
          "Saylov " +
          "o'tkazilishini " +
          "cheklash " +
          "holatlari " +
          "ham " +
          "qonunda " +
          "belgilangan.",
        example:
          "Fuqaro " +
          "saylov " +
          "kuni " +
          "ro'yxatda " +
          "yo'qligini " +
          "aniqladi. " +
          "Ro'yxatni " +
          "oldindan " +
          "tekshirgan " +
          "bo'lsa, " +
          "tuzatish " +
          "uchun " +
          "vaqt " +
          "bo'lardi — " +
          "saylov " +
          "kunida " +
          "buni " +
          "hal " +
          "qilish " +
          "qiyinroq.",
        keyPoints: [
          "Komissiyalar tizimi bir necha darajadan iborat",
          "Uchastka komissiyasi ovoz berishni tashkil etadi",
          "Saylovchilar ro'yxatini OLDINDAN tekshirish kerak",
          "Qoidabuzarlik haqida komissiyaga bildirish mumkin",
        ],
        warning:
          "Boshqa " +
          "shaxs " +
          "o'rniga " +
          "ovoz " +
          "berish " +
          "yoki " +
          "byulletendan " +
          "suratga " +
          "olish " +
          "qonunga " +
          "zid " +
          "va " +
          "javobgarlikka " +
          "olib " +
          "kelishi " +
          "mumkin.",
        lawRefs: [
          { code: "SYK", article: "9" },
          { code: "SYK", article: "10" },
          { code: "SYK", article: "11" },
          { code: "SYK", article: "8-1" },
          { code: "SYK", article: "51" },
          { code: "SYK", article: "55" },
        ],
      },
    ],
  },
];

module.exports = { LESSONS };
