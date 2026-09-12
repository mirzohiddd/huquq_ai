"use strict";
/**
 * MODUL 12 — SUD JARAYONLARI VA HIMOYA (12 dars)
 *
 * Manbalar: Fuqarolik protsessual kodeksi (FPK, 508 modda),
 * Jinoyat-protsessual kodeksi (JPK, 763 modda), Iqtisodiy
 * protsessual kodeksi (IPK), Konstitutsiya (sud tizimi).
 *
 * ⚠️ QAYSI KODEKS QAYSI HOLATDA:
 *   FPK — fuqaro/tashkilot bilan nizo (qarz, mulk, oila, mehnat)
 *   IPK — tadbirkorlik subyektlari o'rtasidagi nizolar
 *   JPK — jinoiy ish
 *   MSK — davlat organi ustidan shikoyat (10-modulda)
 * Noto'g'ri tartibni tanlash arizaning qaytarilishiga olib keladi,
 * shu sababli modul aynan shu farqdan boshlanadi.
 */

const LESSONS = [
  /* ═══════════════════════════════════════════════════════════════
     1. Sud tizimi
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "sud-tizimi",
    category: "process",
    level: "basic",
    order: 12010,
    title: "Sud tizimi: qaysi sudga murojaat qilish kerak",
    desc:
      "Sud hokimiyati, sudlar turlari, sudlovga tegishlilik va " +
      "qaysi tartibda ish yuritilishini aniqlash.",
    objectives: [
      "Sud tizimi tuzilishini bilasiz",
      "Qaysi nizo qaysi tartibda ko'rilishini aniqlay olasiz",
      "Sudlovga tegishlilik qoidalarini bilasiz",
      "Sud mustaqilligi kafolatlarini bilasiz",
    ],
    practicalSteps: [
      "Nizo turini aniqlang: fuqarolik, iqtisodiy, jinoiy yoki ma'muriy",
      "Sudlovga tegishlilikni tekshiring: qaysi hududdagi sudga berish kerak",
      "Noto'g'ri sudga berilgan ariza qaytariladi — buni oldindan aniqlang",
      "Sud tilini bilmasangiz, tarjimon huquqingizdan foydalaning",
    ],
    sections: [
      {
        heading: "Sud hokimiyati va tizim",
        text:
          "Sud hokimiyati — hokimiyatning " +
          "uchta mustaqil shoxidan biri. " +
          "Uning vazifasi NIZONI hal " +
          "qilish.\n\n" +
          "Konstitutsiyaga muvofiq sud " +
          "tizimi va sudlar " +
          "faoliyatining tartibi " +
          "qonun bilan " +
          "belgilanadi.\n\n" +
          "Sud mustaqilligi " +
          "kafolatlanadi va bu " +
          "adolatli sud " +
          "muhokamasining " +
          "asosiy sharti. " +
          "Sudyalar hamjamiyatining " +
          "mustaqil organi — " +
          "Sudyalar oliy " +
          "kengashi — sud " +
          "hokimiyati " +
          "mustaqilligiga rioya " +
          "etilishini " +
          "ta'minlaydi.\n\n" +
          "Fuqaro uchun " +
          "amaliy jihatdan " +
          "eng muhim savol: " +
          "MENING ISHIM " +
          "QAYSI TARTIBDA " +
          "KO'RILADI?\n\n" +
          "Umumiy mantiq " +
          "quyidagicha.\n\n" +
          "Fuqarolar va " +
          "tashkilotlar " +
          "o'rtasidagi " +
          "mulkiy va " +
          "nomulkiy " +
          "nizolar " +
          "(qarz, " +
          "mulk, " +
          "oila, " +
          "meros, " +
          "mehnat) — " +
          "FUQAROLIK " +
          "tartibida.\n\n" +
          "Tadbirkorlik " +
          "subyektlari " +
          "o'rtasidagi " +
          "iqtisodiy " +
          "nizolar — " +
          "IQTISODIY " +
          "tartibda.\n\n" +
          "Jinoyat " +
          "ishlari — " +
          "JINOYAT " +
          "protsessual " +
          "tartibida.\n\n" +
          "Davlat " +
          "organi " +
          "qarori " +
          "ustidan " +
          "shikoyat " +
          "— " +
          "MA'MURIY " +
          "sud " +
          "tartibida.\n\n" +
          "SUD TILI: " +
          "ish " +
          "yuritish " +
          "tilini " +
          "bilmaydigan " +
          "shaxslar " +
          "tarjimon " +
          "orqali " +
          "ishtirok " +
          "etish " +
          "va ona " +
          "tilida " +
          "so'zlash " +
          "huquqiga " +
          "ega.",
        example:
          "Fuqaro " +
          "tadbirkor " +
          "bilan " +
          "shaxsiy " +
          "ehtiyoji " +
          "uchun " +
          "tuzilgan " +
          "shartnoma " +
          "bo'yicha " +
          "nizolashdi. " +
          "Bu " +
          "iqtisodiy " +
          "emas, " +
          "fuqarolik " +
          "tartibida " +
          "ko'riladi " +
          "— " +
          "tomonlardan " +
          "biri " +
          "fuqaro " +
          "sifatida " +
          "qatnashmoqda.",
        keyPoints: [
          "Sud hokimiyati mustaqil va uning vazifasi NIZONI hal qilish",
          "Tartib nizo turiga qarab belgilanadi",
          "Fuqarolik, iqtisodiy, jinoyat va ma'muriy tartiblar farqlanadi",
          "Sud tilini bilmaslik huquqni yo'qotmaydi — tarjimon huquqi bor",
        ],
        warning:
          "Noto'g'ri " +
          "tartibda " +
          "berilgan " +
          "ariza " +
          "qaytariladi. " +
          "Bu " +
          "vaqt " +
          "yo'qotadi " +
          "va " +
          "muddat " +
          "o'tib " +
          "ketishiga " +
          "sabab " +
          "bo'lishi " +
          "mumkin.",
        lawRefs: [
          { code: "KONS", article: "131" },
          { code: "KONS", article: "135" },
          { code: "KONS", article: "139" },
          { code: "FPK", article: "4" },
        ],
      },
      {
        heading: "Sudlovga tegishlilik",
        text:
          "SUDLOVGA TEGISHLILIK — " +
          "ish qaysi aniq " +
          "sudda ko'rilishi " +
          "masalasi.\n\n" +
          "UMUMIY QOIDA: " +
          "arizalar javobgar " +
          "doimiy yashab " +
          "turgan yoki " +
          "joylashgan " +
          "joydagi sudga " +
          "beriladi.\n\n" +
          "Bu qoida " +
          "javobgar " +
          "manfaatini " +
          "himoya " +
          "qiladi: u " +
          "o'z " +
          "joyida " +
          "himoyalanish " +
          "imkoniyatiga " +
          "ega " +
          "bo'ladi.\n\n" +
          "ALOHIDA " +
          "HOLLAR ham " +
          "mavjud va " +
          "ular " +
          "amalda " +
          "juda " +
          "muhim.\n\n" +
          "Masalan " +
          "imoratga " +
          "bo'lgan " +
          "huquq " +
          "to'g'risidagi " +
          "va " +
          "mol-mulk " +
          "bilan " +
          "bog'liq " +
          "ayrim " +
          "nizolar " +
          "uchun " +
          "maxsus " +
          "qoidalar " +
          "belgilangan.\n\n" +
          "Ayrim " +
          "toifadagi " +
          "ishlarda " +
          "esa " +
          "da'vogar " +
          "uchun " +
          "yengillik " +
          "beriladi: " +
          "u " +
          "o'z " +
          "yashash " +
          "joyidagi " +
          "sudga " +
          "murojaat " +
          "qilishi " +
          "mumkin.\n\n" +
          "Amaliy " +
          "xulosa: " +
          "ariza " +
          "berishdan " +
          "OLDIN " +
          "sudlovga " +
          "tegishlilikni " +
          "tekshirish " +
          "kerak.\n\n" +
          "Bu " +
          "bir " +
          "necha " +
          "daqiqalik " +
          "ish, " +
          "lekin " +
          "u " +
          "haftalar " +
          "yoki " +
          "oylarni " +
          "tejaydi.\n\n" +
          "Alohida " +
          "mexanizm " +
          "— " +
          "SUD " +
          "BUYRUG'I: " +
          "nizosiz " +
          "talablar " +
          "bo'yicha " +
          "sud " +
          "muhokamasisiz " +
          "hal " +
          "qilish " +
          "imkoniyati.\n\n" +
          "Bu " +
          "aniq " +
          "va " +
          "hujjat " +
          "bilan " +
          "tasdiqlangan " +
          "talablar " +
          "uchun " +
          "ancha " +
          "tez " +
          "yo'l.",
        example:
          "Qarz " +
          "tilxat " +
          "bilan " +
          "tasdiqlangan " +
          "va " +
          "qarzdor " +
          "uni " +
          "inkor " +
          "etmayapti. " +
          "Bunday " +
          "nizosiz " +
          "talab " +
          "uchun " +
          "sud " +
          "buyrug'i " +
          "tartibi " +
          "odatdagi " +
          "da'vo " +
          "jarayonidan " +
          "ancha " +
          "tez " +
          "bo'ladi.",
        keyPoints: [
          "Umumiy qoida — javobgar joylashgan joydagi sudga murojaat",
          "Ayrim toifadagi ishlar uchun maxsus qoidalar mavjud",
          "Sudlovga tegishlilikni ariza berishdan OLDIN tekshiring",
          "Nizosiz talablar uchun sud buyrug'i tartibi tezroq",
        ],
        warning:
          "Sud " +
          "buyrug'i " +
          "berishni " +
          "rad " +
          "etish " +
          "asoslari " +
          "bor: " +
          "talab " +
          "nizoli " +
          "bo'lsa, " +
          "odatdagi " +
          "da'vo " +
          "tartibi " +
          "qo'llaniladi.",
        lawRefs: [
          { code: "FPK", article: "33" },
          { code: "FPK", article: "35" },
          { code: "FPK", article: "170" },
          { code: "FPK", article: "175" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     2. Fuqarolik sudi  (MAVJUD KALIT — kengaytirildi)
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "fuqarolik-sudi",
    category: "process",
    level: "basic",
    order: 12020,
    title: "Fuqarolik sudi: jarayon qanday kechadi",
    desc:
      "Da'vo qo'zg'atishdan hal qiluv qarorigacha: bosqichlar, " +
      "tomonlar, vakillik va sud majlisi.",
    objectives: [
      "Fuqarolik jarayoni bosqichlarini bilasiz",
      "Tomonlarning huquqlarini bilasiz",
      "Vakil orqali ish yuritish tartibini bilasiz",
      "Sud majlisiga qanday tayyorgarlik ko'rishni bilasiz",
    ],
    practicalSteps: [
      "Barcha hujjatlarni sana bo'yicha tartiblab papkaga to'plang",
      "Vakil jalb qilsangiz, uning vakolatlarini to'g'ri rasmiylashtiring",
      "Sud majlisiga barcha asl hujjatlar bilan keling",
      "Kelishuv bitimi imkoniyatini ko'rib chiqing — bu tez va arzon yo'l",
    ],
    sections: [
      {
        heading: "Jarayon bosqichlari",
        text:
          "Fuqarolik jarayoni " +
          "aniq bosqichlardan " +
          "iborat va ularni " +
          "bilish kutilmagan " +
          "holatlarni " +
          "kamaytiradi.\n\n" +
          "BIRINCHI BOSQICH — " +
          "ariza berish. " +
          "Sudya arizani " +
          "ish yuritishga " +
          "qabul qilish " +
          "masalasini hal " +
          "etadi.\n\n" +
          "Ariza qabul " +
          "qilinsa, ish " +
          "qo'zg'atiladi. " +
          "Qabul " +
          "qilishni rad " +
          "etish " +
          "asoslari " +
          "ham " +
          "qonunda " +
          "belgilangan.\n\n" +
          "IKKINCHI " +
          "BOSQICH — " +
          "ishni sud " +
          "muhokamasiga " +
          "tayyorlash. " +
          "Bu " +
          "bosqich " +
          "ko'pincha " +
          "e'tibordan " +
          "chetda " +
          "qoladi, " +
          "lekin u " +
          "juda " +
          "muhim: " +
          "aynan " +
          "shu " +
          "yerda " +
          "dalillar " +
          "to'planadi.\n\n" +
          "UCHINCHI " +
          "BOSQICH — " +
          "sud " +
          "muhokamasi: " +
          "tomonlar " +
          "tushuntirishlari, " +
          "dalillarni " +
          "tekshirish, " +
          "sud " +
          "muhokamasi.\n\n" +
          "TO'RTINCHI " +
          "BOSQICH — " +
          "hal " +
          "qiluv " +
          "qarorini " +
          "qabul " +
          "qilish.\n\n" +
          "QARSHI " +
          "DA'VO " +
          "imkoniyati " +
          "ham " +
          "mavjud: " +
          "javobgar " +
          "hal " +
          "qiluv " +
          "qarori " +
          "chiqarilgunga " +
          "qadar " +
          "qarshi " +
          "da'vo " +
          "taqdim " +
          "etishi " +
          "mumkin.\n\n" +
          "KELISHUV " +
          "BITIMI " +
          "har " +
          "qanday " +
          "bosqichda " +
          "mumkin " +
          "va u " +
          "ko'pincha " +
          "eng " +
          "oqilona " +
          "yechim " +
          "bo'ladi: " +
          "tez, " +
          "arzon " +
          "va " +
          "natija " +
          "aniq.",
        example:
          "Tomonlar " +
          "sud " +
          "jarayonining " +
          "o'rtasida " +
          "kelishuvga " +
          "erishdi " +
          "va " +
          "uni " +
          "sudda " +
          "rasmiylashtirdi. " +
          "Bu " +
          "oylar " +
          "davom " +
          "etishi " +
          "mumkin " +
          "bo'lgan " +
          "jarayonni " +
          "yakunladi " +
          "va " +
          "ikki " +
          "tomon " +
          "ham " +
          "xarajatni " +
          "tejadi.",
        keyPoints: [
          "Bosqichlar: ariza → tayyorgarlik → muhokama → hal qiluv qarori",
          "Tayyorgarlik bosqichi hal qiluvchi ahamiyatga ega",
          "Javobgar qarshi da'vo taqdim etishi mumkin",
          "Kelishuv bitimi har qanday bosqichda mumkin va ko'pincha oqilona",
        ],
        warning:
          "Sud " +
          "majlisiga " +
          "asossiz " +
          "kelmaslik " +
          "ish " +
          "sizsiz " +
          "ko'rilishiga " +
          "olib " +
          "kelishi " +
          "mumkin. " +
          "Kela " +
          "olmasangiz, " +
          "buni " +
          "oldindan " +
          "va " +
          "asos " +
          "bilan " +
          "bildiring.",
        lawRefs: [
          { code: "FPK", article: "192" },
          { code: "FPK", article: "193" },
          { code: "FPK", article: "194" },
          { code: "FPK", article: "199" },
          { code: "FPK", article: "201" },
          { code: "FPK", article: "167" },
        ],
      },
      {
        heading: "Vakillik va sud majlisiga tayyorgarlik",
        text:
          "VAKILLIK: fuqarolar " +
          "o'z ishlarini " +
          "sudda shaxsan " +
          "yoki o'z " +
          "vakillari " +
          "orqali olib " +
          "borishi " +
          "mumkin.\n\n" +
          "Vakilning " +
          "vakolatlari " +
          "belgilangan " +
          "tartibda " +
          "rasmiylashtiriladi.\n\n" +
          "MUHIM " +
          "TAFSILOT: " +
          "vakilning " +
          "ayrim " +
          "vakolatlari " +
          "ALOHIDA " +
          "ko'rsatilishi " +
          "kerak — " +
          "masalan " +
          "da'vodan " +
          "voz " +
          "kechish, " +
          "kelishuv " +
          "bitimi " +
          "tuzish " +
          "kabi " +
          "harakatlar.\n\n" +
          "Ular " +
          "ishonchnomada " +
          "yozilmagan " +
          "bo'lsa, " +
          "vakil " +
          "ularni " +
          "amalga " +
          "oshira " +
          "olmaydi.\n\n" +
          "SUD " +
          "MAJLISIGA " +
          "TAYYORGARLIK " +
          "amaliy " +
          "yo'riqnomasi:\n\n" +
          "Birinchidan, " +
          "hujjatlarni " +
          "sana " +
          "bo'yicha " +
          "tartiblang " +
          "va " +
          "ro'yxat " +
          "tuzing.\n\n" +
          "Ikkinchidan, " +
          "asl " +
          "nusxalarni " +
          "olib " +
          "keling: " +
          "sud " +
          "ularni " +
          "ko'rishni " +
          "so'rashi " +
          "mumkin.\n\n" +
          "Uchinchidan, " +
          "o'z " +
          "pozitsiyangizni " +
          "qisqa " +
          "va " +
          "aniq " +
          "shakllantiring: " +
          "nima " +
          "bo'ldi, " +
          "qanday " +
          "huquq " +
          "buzildi, " +
          "nima " +
          "talab " +
          "qilyapsiz.\n\n" +
          "To'rtinchidan, " +
          "guvohlar " +
          "kerak " +
          "bo'lsa, " +
          "ularni " +
          "chaqirish " +
          "to'g'risida " +
          "ILTIMOSNOMA " +
          "bering — " +
          "sud " +
          "buni " +
          "o'zi " +
          "qilmaydi.",
        example:
          "Vakilga " +
          "berilgan " +
          "ishonchnomada " +
          "kelishuv " +
          "bitimi " +
          "tuzish " +
          "vakolati " +
          "ko'rsatilmagan " +
          "edi. " +
          "Sud " +
          "majlisida " +
          "kelishuvga " +
          "erishildi, " +
          "lekin " +
          "vakil " +
          "uni " +
          "imzolay " +
          "olmadi — " +
          "vakolat " +
          "doirasini " +
          "oldindan " +
          "aniqlash " +
          "kerak " +
          "edi.",
        keyPoints: [
          "Fuqarolar sudda shaxsan yoki vakil orqali ish yuritadi",
          "Ayrim vakolatlar ishonchnomada ALOHIDA ko'rsatilishi kerak",
          "Hujjatlarni tartiblab, asl nusxalar bilan keling",
          "Guvohlarni chaqirish uchun ILTIMOSNOMA berish kerak",
        ],
        warning:
          "Sud " +
          "sizning " +
          "o'rningizga " +
          "dalil " +
          "yig'maydi. " +
          "Dalil " +
          "taqdim " +
          "etish " +
          "tomonlarning " +
          "majburiyati.",
        lawRefs: [
          { code: "FPK", article: "65" },
          { code: "FPK", article: "68" },
          { code: "FPK", article: "69" },
          { code: "FPK", article: "82" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     3. Da'vo arizasi
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "davo-arizasi",
    category: "process",
    level: "basic",
    order: 12030,
    title: "Da'vo arizasi qanday yoziladi",
    desc:
      "Arizaning tuzilishi, ilova hujjatlari, talabni " +
      "shakllantirish va qabul qilishni rad etish asoslari.",
    objectives: [
      "Da'vo arizasi tuzilishini bilasiz",
      "Talabni qanday shakllantirishni bilasiz",
      "Qanday hujjatlar ilova qilinishini bilasiz",
      "Rad etish va qaytarish asoslarini bilasiz",
    ],
    practicalSteps: [
      "Arizada voqeani sanalar bilan qisqa bayon qiling",
      "Talabni ANIQ va o'lchanadigan qilib yozing: qancha, nima, kimdan",
      "Har bir da'vo asosiga tegishli hujjatni ilova qiling",
      "Nusxalarini javobgarlar soniga qarab tayyorlang",
    ],
    sections: [
      {
        heading: "Ariza tuzilishi va talab",
        text:
          "Da'vo arizasi — " +
          "jarayonning " +
          "asosi. Uning " +
          "sifati ko'p " +
          "narsani hal " +
          "qiladi.\n\n" +
          "Arizada odatda " +
          "bo'lishi " +
          "kerak: sud " +
          "nomi; " +
          "da'vogar " +
          "va " +
          "javobgar " +
          "ma'lumotlari; " +
          "huquq " +
          "buzilishi " +
          "nimadan " +
          "iborat; " +
          "da'vo " +
          "asoslari " +
          "va " +
          "ularni " +
          "tasdiqlovchi " +
          "dalillar; " +
          "TALAB; " +
          "da'vo " +
          "qiymati " +
          "(baholanadigan " +
          "bo'lsa); " +
          "ilovalar " +
          "ro'yxati.\n\n" +
          "ENG MUHIM " +
          "QISM — " +
          "TALAB.\n\n" +
          "Talab " +
          "ANIQ va " +
          "BAJARILADIGAN " +
          "bo'lishi " +
          "kerak. " +
          "Sud " +
          "faqat " +
          "qo'yilgan " +
          "talab " +
          "doirasida " +
          "qaror " +
          "chiqaradi.\n\n" +
          "Kuchsiz " +
          "talab: " +
          "«adolat " +
          "tiklanishini " +
          "so'rayman».\n\n" +
          "Kuchli " +
          "talab: " +
          "«javobgardan " +
          "shuncha " +
          "summa " +
          "qarzni " +
          "va " +
          "shuncha " +
          "penyani " +
          "undirishni " +
          "so'rayman» " +
          "yoki " +
          "«javobgarni " +
          "to'siqni " +
          "olib " +
          "tashlashga " +
          "majburlashni " +
          "so'rayman».\n\n" +
          "Bayon " +
          "qismi " +
          "ham " +
          "muhim: " +
          "voqeani " +
          "xronologik " +
          "tartibda, " +
          "SANALAR " +
          "bilan " +
          "yozing.\n\n" +
          "Hissiyot " +
          "va " +
          "baholarni " +
          "qo'shmang " +
          "— " +
          "faktlar " +
          "va " +
          "hujjatlar " +
          "ancha " +
          "ta'sirchan.",
        example:
          "Arizada " +
          "«javobgar " +
          "menga " +
          "ko'p " +
          "zarar " +
          "keltirdi» " +
          "deb " +
          "yozilgan, " +
          "aniq " +
          "summa " +
          "va " +
          "hisob-kitob " +
          "yo'q " +
          "edi. " +
          "Sud " +
          "qancha " +
          "undirishni " +
          "bilmaydi — " +
          "aniq " +
          "hisob " +
          "keltirilishi " +
          "shart.",
        keyPoints: [
          "Ariza tuzilishi qonunda belgilangan",
          "Sud faqat QO'YILGAN talab doirasida qaror chiqaradi",
          "Talab aniq va bajariladigan bo'lishi kerak",
          "Bayon qismida faktlar va sanalar, hissiyot emas",
        ],
        warning:
          "Talabni " +
          "keyin " +
          "o'zgartirish " +
          "mumkin, " +
          "lekin " +
          "bu " +
          "jarayonni " +
          "cho'zadi. " +
          "Boshidanoq " +
          "to'g'ri " +
          "shakllantirish " +
          "foydaliroq.",
        lawRefs: [
          { code: "FPK", article: "192" },
          { code: "FPK", article: "193" },
          { code: "FPK", article: "4" },
        ],
      },
      {
        heading: "Ilovalar va rad etish asoslari",
        text:
          "ILOVA HUJJATLARI " +
          "arizaning " +
          "ajralmas " +
          "qismi.\n\n" +
          "Odatda ilova " +
          "qilinadi: " +
          "da'vo " +
          "asoslarini " +
          "tasdiqlovchi " +
          "hujjatlar " +
          "(shartnoma, " +
          "tilxat, " +
          "yozishmalar, " +
          "hisob-kitob); " +
          "davlat " +
          "boji " +
          "to'langanini " +
          "tasdiqlovchi " +
          "hujjat; " +
          "arizaning " +
          "javobgarlar " +
          "soniga " +
          "mos " +
          "nusxalari; " +
          "vakil " +
          "bo'lsa " +
          "uning " +
          "vakolat " +
          "hujjati.\n\n" +
          "AMALIY " +
          "MASLAHAT: " +
          "har " +
          "bir " +
          "da'vo " +
          "asosiga " +
          "tegishli " +
          "hujjatni " +
          "ilova " +
          "qiling " +
          "va " +
          "ro'yxatda " +
          "raqamlab " +
          "ko'rsating.\n\n" +
          "Bu " +
          "sudning " +
          "ishini " +
          "yengillashtiradi " +
          "va " +
          "sizning " +
          "pozitsiyangizni " +
          "aniq " +
          "qiladi.\n\n" +
          "QABUL " +
          "QILISHNI " +
          "RAD " +
          "ETISH " +
          "asoslari " +
          "qonunda " +
          "belgilangan " +
          "va " +
          "ular " +
          "YOPIQ " +
          "ro'yxat.\n\n" +
          "Odatda " +
          "bunga " +
          "kiradi: " +
          "ish " +
          "sudlovga " +
          "tegishli " +
          "emasligi; " +
          "xuddi " +
          "shu " +
          "tomonlar " +
          "o'rtasida " +
          "xuddi " +
          "shu " +
          "predmet " +
          "bo'yicha " +
          "qonuniy " +
          "kuchga " +
          "kirgan " +
          "qaror " +
          "mavjudligi " +
          "va " +
          "boshqa " +
          "holatlar.\n\n" +
          "Rad " +
          "etish " +
          "asoslari " +
          "va " +
          "arizani " +
          "qaytarish " +
          "asoslarini " +
          "farqlash " +
          "muhim: " +
          "qaytarilgan " +
          "ariza " +
          "kamchilik " +
          "tuzatilgach " +
          "qayta " +
          "berilishi " +
          "mumkin.",
        example:
          "Ariza " +
          "kamchiliklar " +
          "sababli " +
          "qaytarildi. " +
          "Da'vogar " +
          "buni " +
          "«ishim " +
          "rad " +
          "etildi» " +
          "deb " +
          "tushundi " +
          "va " +
          "qayta " +
          "murojaat " +
          "qilmadi. " +
          "Aslida " +
          "kamchilikni " +
          "tuzatib " +
          "qayta " +
          "berish " +
          "mumkin " +
          "edi.",
        keyPoints: [
          "Ilova hujjatlari arizaning ajralmas qismi",
          "Har bir da'vo asosiga tegishli hujjat ilova qilinadi",
          "Rad etish asoslari qonunda belgilangan va YOPIQ",
          "Qaytarilgan ariza kamchilik tuzatilgach qayta berilishi mumkin",
        ],
        warning:
          "Arizani " +
          "javobgarlar " +
          "soniga " +
          "mos " +
          "nusxada " +
          "tayyorlamaslik " +
          "eng " +
          "ko'p " +
          "uchraydigan " +
          "texnik " +
          "kamchilik.",
        lawRefs: [
          { code: "FPK", article: "194" },
          { code: "FPK", article: "128" },
          { code: "FPK", article: "192" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     4. Sud xarajatlari
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "sud-xarajatlari",
    category: "process",
    level: "mid",
    order: 12040,
    title: "Sud xarajatlari va davlat boji",
    desc:
      "Xarajatlar turlari, davlat boji, to'lashni kechiktirish " +
      "va xarajatlarni taraflar o'rtasida taqsimlash.",
    objectives: [
      "Sud xarajatlari turlarini bilasiz",
      "Davlat boji nima ekanligini bilasiz",
      "Kechiktirish va ozod qilish imkoniyatlarini bilasiz",
      "Xarajatlar qanday taqsimlanishini bilasiz",
    ],
    practicalSteps: [
      "Da'vo qiymatini to'g'ri hisoblang — boj shundan kelib chiqadi",
      "Moddiy holatingiz og'ir bo'lsa, kechiktirish yoki kamaytirishni so'rang",
      "Vakil xarajatlarini hujjat bilan tasdiqlang",
      "G'alaba qozonsangiz, xarajatlarni undirishni ham talab qiling",
    ],
    sections: [
      {
        heading: "Xarajatlar turlari va davlat boji",
        text:
          "SUD XARAJATLARI ikki " +
          "qismdan iborat: " +
          "DAVLAT BOJI va " +
          "ishni ko'rish " +
          "bilan bog'liq " +
          "CHIQIMLAR.\n\n" +
          "Chiqimlarga " +
          "odatda " +
          "guvohlar, " +
          "ekspertlar " +
          "va " +
          "mutaxassislarga " +
          "to'lanadigan " +
          "summalar, " +
          "ekspertiza " +
          "xarajatlari " +
          "va " +
          "boshqalar " +
          "kiradi.\n\n" +
          "DAVLAT " +
          "BOJINI " +
          "to'lash " +
          "asoslari " +
          "va " +
          "tartibi, " +
          "shuningdek " +
          "undan " +
          "ozod " +
          "qilish " +
          "qonunchilikda " +
          "belgilangan.\n\n" +
          "MUHIM " +
          "IMTIYOZLAR " +
          "mavjud " +
          "va " +
          "ularni " +
          "bilish " +
          "foydali.\n\n" +
          "Masalan " +
          "mehnat " +
          "nizolarida " +
          "xodimlar " +
          "sud " +
          "xarajatlaridan " +
          "ozod " +
          "qilinadi. " +
          "Aliment " +
          "va " +
          "boshqa " +
          "ayrim " +
          "toifadagi " +
          "ishlarda " +
          "ham " +
          "yengilliklar " +
          "bo'lishi " +
          "mumkin.\n\n" +
          "KECHIKTIRISH " +
          "VA " +
          "BO'LIB " +
          "TO'LASH: " +
          "sud " +
          "xarajatlarini " +
          "to'lashni " +
          "kechiktirish, " +
          "bo'lib-bo'lib " +
          "to'lash " +
          "va " +
          "miqdorini " +
          "kamaytirish " +
          "imkoniyatlari " +
          "nazarda " +
          "tutilgan.\n\n" +
          "Bu " +
          "juda " +
          "muhim: " +
          "moliyaviy " +
          "to'siq " +
          "sizni " +
          "sud " +
          "himoyasidan " +
          "mahrum " +
          "qilmasligi " +
          "kerak.\n\n" +
          "Buning " +
          "uchun " +
          "moddiy " +
          "holatni " +
          "tasdiqlovchi " +
          "hujjatlar " +
          "bilan " +
          "iltimosnoma " +
          "berish " +
          "kerak.",
        example:
          "Da'vogar " +
          "boj " +
          "summasini " +
          "to'lay " +
          "olmagani " +
          "uchun " +
          "sudga " +
          "murojaat " +
          "qilmadi. " +
          "Aslida " +
          "kechiktirish " +
          "yoki " +
          "kamaytirishni " +
          "so'rash " +
          "mumkin " +
          "edi — " +
          "bu " +
          "imkoniyat " +
          "ko'pincha " +
          "bilinmaydi.",
        keyPoints: [
          "Xarajatlar: davlat boji va ishni ko'rish chiqimlari",
          "Ayrim toifadagi ishlarda bojdan ozod qilish imtiyozlari bor",
          "To'lashni kechiktirish, bo'lib to'lash va kamaytirish mumkin",
          "Buning uchun moddiy holatni tasdiqlovchi hujjat kerak",
        ],
        warning:
          "Boj " +
          "to'lanmasa " +
          "ariza " +
          "harakatsiz " +
          "qoldirilishi " +
          "mumkin. " +
          "To'lay " +
          "olmasangiz, " +
          "jim " +
          "turmang — " +
          "iltimosnoma " +
          "bering.",
        lawRefs: [
          { code: "FPK", article: "127" },
          { code: "FPK", article: "128" },
          { code: "FPK", article: "133" },
          { code: "FPK", article: "135" },
        ],
      },
      {
        heading: "Xarajatlarni taqsimlash",
        text:
          "Bu bo'lim amaliy " +
          "jihatdan juda " +
          "foydali, chunki " +
          "u sud " +
          "jarayonining " +
          "haqiqiy " +
          "narxini " +
          "belgilaydi.\n\n" +
          "ASOSIY QOIDA: " +
          "sud " +
          "xarajatlari " +
          "hal qiluv " +
          "qarori " +
          "qaysi " +
          "tarafning " +
          "foydasiga " +
          "chiqqaniga " +
          "qarab " +
          "taqsimlanadi.\n\n" +
          "Ya'ni " +
          "yutqazgan " +
          "taraf " +
          "yutgan " +
          "tarafning " +
          "xarajatlarini " +
          "qoplaydi.\n\n" +
          "Bu " +
          "qoidaning " +
          "ikki " +
          "amaliy " +
          "natijasi " +
          "bor.\n\n" +
          "Birinchisi: " +
          "haqli " +
          "bo'lsangiz, " +
          "xarajatlar " +
          "oxir-oqibat " +
          "qoplanishi " +
          "mumkin — " +
          "shuning " +
          "uchun " +
          "boj " +
          "sizni " +
          "to'xtatmasligi " +
          "kerak.\n\n" +
          "Ikkinchisi: " +
          "asossiz " +
          "da'vo " +
          "qo'yish " +
          "qimmatga " +
          "tushadi — " +
          "yutqazsangiz " +
          "qarshi " +
          "tomon " +
          "xarajatlarini " +
          "ham " +
          "to'laysiz.\n\n" +
          "VAKIL " +
          "XARAJATLARI " +
          "alohida " +
          "masala: " +
          "vakilning " +
          "yordami " +
          "uchun " +
          "haq " +
          "to'lashga " +
          "doir " +
          "xarajatlarning " +
          "o'rnini " +
          "qoplash " +
          "nazarda " +
          "tutilgan.\n\n" +
          "Lekin " +
          "buning " +
          "uchun " +
          "xarajat " +
          "HUJJAT " +
          "bilan " +
          "tasdiqlanishi " +
          "kerak: " +
          "shartnoma " +
          "va " +
          "to'lov " +
          "hujjati.\n\n" +
          "Da'vo " +
          "qisman " +
          "qanoatlantirilsa, " +
          "xarajatlar " +
          "ham " +
          "mutanosib " +
          "taqsimlanadi.",
        example:
          "Da'vogar " +
          "advokat " +
          "bilan " +
          "shartnoma " +
          "tuzmadi " +
          "va " +
          "to'lovni " +
          "hujjatlashtirmadi. " +
          "Ishni " +
          "yutgan " +
          "bo'lsa " +
          "ham, " +
          "vakil " +
          "xarajatlarini " +
          "undira " +
          "olmadi — " +
          "hujjat " +
          "shart " +
          "edi.",
        keyPoints: [
          "Xarajatlar qaror kimning foydasiga chiqqaniga qarab taqsimlanadi",
          "Yutqazgan taraf yutganning xarajatlarini qoplaydi",
          "Vakil xarajatlari HUJJAT bilan tasdiqlanishi kerak",
          "Da'vo qisman qanoatlantirilsa xarajatlar mutanosib taqsimlanadi",
        ],
        warning:
          "Asossiz " +
          "yuqori " +
          "summa " +
          "talab " +
          "qilish " +
          "xavfli: " +
          "da'vo " +
          "qisman " +
          "qanoatlantirilsa, " +
          "xarajatlarning " +
          "bir " +
          "qismi " +
          "sizga " +
          "tushadi.",
        lawRefs: [
          { code: "FPK", article: "138" },
          { code: "FPK", article: "136" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     5. Dalillar
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "dalillar",
    category: "process",
    level: "mid",
    order: 12050,
    title: "Dalillar va isbotlash",
    desc:
      "Isbotlash vositalari, isbot yuki, dalillarning maqbulligi, " +
      "guvohlar, ekspertiza va dalillarni ta'minlash.",
    objectives: [
      "Isbotlash vositalarini bilasiz",
      "Isbot yuki kimda ekanini bilasiz",
      "Dalillarning aloqadorligi va maqbulligini tushunasiz",
      "Dalillarni ta'minlash mexanizmini bilasiz",
    ],
    practicalSteps: [
      "Nizo boshlanishi bilan barcha hujjatlarni to'plang va tartiblang",
      "Yo'qolishi mumkin bo'lgan dalil bo'lsa, ta'minlash to'g'risida ariza bering",
      "Guvohlarni chaqirish uchun iltimosnoma bering",
      "Maxsus bilim kerak bo'lsa, ekspertiza tayinlashni so'rang",
    ],
    sections: [
      {
        heading: "Isbot yuki va isbotlash vositalari",
        text:
          "ISBOTLASH " +
          "VOSITALARI — " +
          "taraflarning " +
          "talablari va " +
          "e'tirozlarini " +
          "asoslaydigan " +
          "holatlarni " +
          "aniqlash " +
          "uchun " +
          "ishlatiladigan " +
          "vositalar.\n\n" +
          "Ularga odatda " +
          "kiradi: " +
          "taraflarning " +
          "tushuntirishlari, " +
          "guvohlarning " +
          "ko'rsatuvlari, " +
          "yozma " +
          "dalillar, " +
          "ashyoviy " +
          "dalillar, " +
          "ekspert " +
          "xulosalari.\n\n" +
          "ISBOT YUKI — " +
          "eng muhim " +
          "qoida: HAR " +
          "BIR TARAF " +
          "o'zining " +
          "talablari " +
          "va " +
          "e'tirozlari " +
          "asosini " +
          "o'zi " +
          "isbotlaydi.\n\n" +
          "Bu " +
          "fuqarolik " +
          "jarayonini " +
          "jinoyat " +
          "jarayonidan " +
          "farqlaydi: " +
          "u yerda " +
          "aybsizlik " +
          "prezumpsiyasi " +
          "amal " +
          "qiladi, " +
          "bu " +
          "yerda " +
          "esa " +
          "har " +
          "kim " +
          "o'z " +
          "pozitsiyasini " +
          "asoslaydi.\n\n" +
          "Amaliy " +
          "xulosa: " +
          "«men " +
          "haqman» " +
          "degan " +
          "ishonch " +
          "yetarli " +
          "emas — " +
          "buni " +
          "KO'RSATISH " +
          "kerak.\n\n" +
          "ALOQADORLIK: " +
          "sud " +
          "faqat " +
          "ish " +
          "uchun " +
          "ahamiyatga " +
          "ega " +
          "dalillarni " +
          "ko'rib " +
          "chiqadi.\n\n" +
          "MAQBULLIK: " +
          "qonun " +
          "bo'yicha " +
          "muayyan " +
          "isbotlash " +
          "vositalari " +
          "bilan " +
          "tasdiqlanishi " +
          "kerak " +
          "bo'lgan " +
          "holatlar " +
          "boshqa " +
          "vositalar " +
          "bilan " +
          "tasdiqlanmaydi.\n\n" +
          "Bu " +
          "qoida " +
          "muhim: " +
          "masalan " +
          "yozma " +
          "shakl " +
          "talab " +
          "qilinadigan " +
          "bitimda " +
          "guvohlik " +
          "ko'rsatmasiga " +
          "tayanish " +
          "cheklanadi.\n\n" +
          "ISBOTLASHDAN " +
          "OZOD " +
          "QILISH " +
          "asoslari " +
          "ham " +
          "bor: " +
          "hammaga " +
          "ma'lum " +
          "holatlar " +
          "isbotlashga " +
          "muhtoj " +
          "emas.",
        example:
          "Da'vogar " +
          "qarz " +
          "berganini " +
          "faqat " +
          "guvohlar " +
          "bilan " +
          "isbotlamoqchi " +
          "bo'ldi, " +
          "tilxat " +
          "yo'q " +
          "edi. " +
          "Yozma " +
          "shakl " +
          "talab " +
          "qilinadigan " +
          "holatda " +
          "bu " +
          "yo'l " +
          "cheklangan " +
          "— " +
          "shuning " +
          "uchun " +
          "tilxat " +
          "hal " +
          "qiluvchi.",
        keyPoints: [
          "HAR BIR TARAF o'z talab va e'tirozlarini o'zi isbotlaydi",
          "«Men haqman» degan ishonch yetarli emas — ko'rsatish kerak",
          "Dalillar ish uchun ahamiyatga ega bo'lishi kerak (aloqadorlik)",
          "Ayrim holatlar faqat muayyan vositalar bilan tasdiqlanadi (maqbullik)",
        ],
        warning:
          "Sud " +
          "sizning " +
          "o'rningizga " +
          "dalil " +
          "izlamaydi. " +
          "Kerakli " +
          "hujjat " +
          "boshqa " +
          "shaxsda " +
          "bo'lsa, " +
          "uni " +
          "talab " +
          "qilib " +
          "olish " +
          "to'g'risida " +
          "iltimosnoma " +
          "bering.",
        lawRefs: [
          { code: "FPK", article: "71" },
          { code: "FPK", article: "72" },
          { code: "FPK", article: "73" },
          { code: "FPK", article: "74" },
          { code: "FPK", article: "75" },
          { code: "FPK", article: "80" },
        ],
      },
      {
        heading: "Guvohlar, ekspertiza va dalillarni ta'minlash",
        text:
          "GUVOH — ishga " +
          "doir biror " +
          "holatdan " +
          "xabardor " +
          "bo'lgan har " +
          "qanday " +
          "shaxs.\n\n" +
          "Guvohning " +
          "majburiyatlari " +
          "va " +
          "javobgarligi " +
          "belgilangan: " +
          "u sudga " +
          "kelishi va " +
          "haqiqatni " +
          "aytishi " +
          "kerak.\n\n" +
          "Guvohni " +
          "chaqirish " +
          "uchun " +
          "ILTIMOSNOMA " +
          "beriladi — " +
          "sud " +
          "o'z " +
          "tashabbusi " +
          "bilan " +
          "chaqirmaydi.\n\n" +
          "Iltimosnomada " +
          "guvoh " +
          "nimani " +
          "tasdiqlashi " +
          "mumkinligini " +
          "ko'rsatish " +
          "kerak.\n\n" +
          "EKSPERTIZA " +
          "fan, " +
          "texnika, " +
          "san'at " +
          "yoki " +
          "hunar " +
          "sohasida " +
          "maxsus " +
          "bilim " +
          "talab " +
          "qiladigan " +
          "masalalar " +
          "yuzasidan " +
          "tayinlanadi.\n\n" +
          "Amalda " +
          "ekspertiza " +
          "ko'p " +
          "ishlarda " +
          "hal " +
          "qiluvchi " +
          "bo'ladi: " +
          "qurilish " +
          "sifati, " +
          "imzo " +
          "haqiqiyligi, " +
          "zarar " +
          "hajmi.\n\n" +
          "MUTAXASSIS " +
          "ham " +
          "jalb " +
          "etilishi " +
          "mumkin — " +
          "u " +
          "maslahat " +
          "va " +
          "tushuntirish " +
          "beradi.\n\n" +
          "DALILLARNI " +
          "TA'MINLASH " +
          "— " +
          "juda " +
          "foydali, " +
          "lekin " +
          "kam " +
          "ishlatiladigan " +
          "mexanizm.\n\n" +
          "Agar " +
          "dalilni " +
          "keyinchalik " +
          "taqdim " +
          "etish " +
          "imkonsiz " +
          "yoki " +
          "qiyin " +
          "bo'lishidan " +
          "xavotir " +
          "bo'lsa, " +
          "uni " +
          "ta'minlash " +
          "to'g'risida " +
          "ariza " +
          "berish " +
          "mumkin.\n\n" +
          "Masalan " +
          "buzilib " +
          "ketishi " +
          "mumkin " +
          "bo'lgan " +
          "obyekt " +
          "yoki " +
          "o'chirilishi " +
          "mumkin " +
          "bo'lgan " +
          "elektron " +
          "ma'lumot.",
        example:
          "Qurilishdagi " +
          "nuqson " +
          "ta'mirlanib " +
          "yuborilishi " +
          "mumkin " +
          "edi. " +
          "Dalillarni " +
          "ta'minlash " +
          "to'g'risida " +
          "o'z " +
          "vaqtida " +
          "ariza " +
          "berilsa, " +
          "holat " +
          "rasman " +
          "qayd " +
          "etilardi " +
          "va " +
          "keyin " +
          "isbotlash " +
          "oson " +
          "bo'lardi.",
        keyPoints: [
          "Guvohni chaqirish uchun ILTIMOSNOMA berish kerak",
          "Ekspertiza maxsus bilim talab qiladigan masalalarda tayinlanadi",
          "Ekspertiza ko'p ishlarda hal qiluvchi bo'ladi",
          "Dalillarni ta'minlash yo'qolishi mumkin bo'lgan dalilni saqlaydi",
        ],
        warning:
          "Ekspertiza " +
          "xarajat " +
          "va " +
          "vaqt " +
          "talab " +
          "qiladi. " +
          "Uni " +
          "so'rashdan " +
          "oldin " +
          "qanday " +
          "savol " +
          "qo'yilishini " +
          "aniq " +
          "o'ylab " +
          "oling.",
        lawRefs: [
          { code: "FPK", article: "56" },
          { code: "FPK", article: "57" },
          { code: "FPK", article: "61" },
          { code: "FPK", article: "95" },
          { code: "FPK", article: "76" },
          { code: "FPK", article: "77" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     6. Sud qarori va shikoyat
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "sud-qarori-apellyatsiya",
    category: "process",
    level: "mid",
    order: 12060,
    title: "Sud qarori va apellyatsiya shikoyati",
    desc:
      "Hal qiluv qarori mazmuni, uning qonuniy kuchga kirishi, " +
      "apellyatsiya shikoyati berish tartibi va mazmuni.",
    objectives: [
      "Hal qiluv qarori tuzilishini bilasiz",
      "Qaror qachon qonuniy kuchga kirishini bilasiz",
      "Apellyatsiya shikoyati berish tartibini bilasiz",
      "Shikoyat mazmuniga qo'yiladigan talablarni bilasiz",
    ],
    practicalSteps: [
      "Qaror nusxasini oling va asoslantiruvchi qismini diqqat bilan o'qing",
      "Shikoyat muddatini birinchi navbatda aniqlang",
      "Shikoyatda faqat «rozi emasman» emas, ANIQ xatolarni ko'rsating",
      "Yangi dalil bo'lsa, uni taqdim etish shartlarini tekshiring",
    ],
    sections: [
      {
        heading: "Hal qiluv qarori",
        text:
          "HAL QILUV QARORI — " +
          "sudning ishni " +
          "mazmunan ko'rib " +
          "chiqish " +
          "natijalari " +
          "bo'yicha qabul " +
          "qiladigan " +
          "hujjati.\n\n" +
          "Uning MAZMUNI " +
          "to'rt " +
          "qismdan " +
          "iborat: " +
          "kirish, " +
          "bayon, " +
          "asoslantiruvchi " +
          "va " +
          "xulosa " +
          "qismlari.\n\n" +
          "Amaliy " +
          "jihatdan " +
          "eng " +
          "muhimi — " +
          "ASOSLANTIRUVCHI " +
          "QISM: " +
          "sud " +
          "qanday " +
          "dalillarga " +
          "tayanganini " +
          "va " +
          "qaysi " +
          "normani " +
          "qo'llaganini " +
          "aynan " +
          "shu " +
          "yerda " +
          "ko'rasiz.\n\n" +
          "Shikoyat " +
          "yozishda " +
          "aynan " +
          "shu " +
          "qism " +
          "tahlil " +
          "qilinadi.\n\n" +
          "Qaror " +
          "qabul " +
          "qilishda " +
          "hal " +
          "etiladigan " +
          "masalalar " +
          "ham " +
          "belgilangan: " +
          "talab " +
          "qanoatlantiriladimi, " +
          "qanday " +
          "hajmda, " +
          "xarajatlar " +
          "qanday " +
          "taqsimlanadi.\n\n" +
          "Sud " +
          "qarorni " +
          "alohida " +
          "xonada " +
          "qabul " +
          "qiladi " +
          "va " +
          "uning " +
          "sir " +
          "tutilishi " +
          "ta'minlanadi.\n\n" +
          "Qaror " +
          "imzolangach " +
          "o'qib " +
          "eshittiriladi.\n\n" +
          "IJRO " +
          "MUDDATI: " +
          "sud " +
          "hal " +
          "qiluv " +
          "qarorini " +
          "ijro " +
          "etish " +
          "tartibi " +
          "va " +
          "muddatini " +
          "belgilashi " +
          "mumkin.",
        example:
          "Tomon " +
          "qarorning " +
          "faqat " +
          "xulosa " +
          "qismini " +
          "o'qidi " +
          "va " +
          "shikoyat " +
          "yozdi. " +
          "Asoslantiruvchi " +
          "qismni " +
          "tahlil " +
          "qilmagani " +
          "uchun " +
          "shikoyat " +
          "umumiy " +
          "bo'lib " +
          "chiqdi " +
          "va " +
          "kuchsiz " +
          "bo'ldi.",
        keyPoints: [
          "Qaror to'rt qismdan iborat: kirish, bayon, asoslantiruvchi, xulosa",
          "Eng muhimi — ASOSLANTIRUVCHI qism",
          "Shikoyat aynan shu qism tahlili asosida yoziladi",
          "Sud ijro tartibi va muddatini belgilashi mumkin",
        ],
        warning:
          "Qaror " +
          "nusxasini " +
          "olishni " +
          "kechiktirmang: " +
          "shikoyat " +
          "muddati " +
          "cheklangan " +
          "va u " +
          "kutib " +
          "turmaydi.",
        lawRefs: [
          { code: "FPK", article: "249" },
          { code: "FPK", article: "251" },
          { code: "FPK", article: "253" },
          { code: "FPK", article: "248" },
          { code: "FPK", article: "255" },
        ],
      },
      {
        heading: "Apellyatsiya shikoyati",
        text:
          "APELLYATSIYA — " +
          "qonuniy " +
          "kuchga " +
          "kirmagan " +
          "qarorni " +
          "qayta " +
          "ko'rib " +
          "chiqish " +
          "bosqichi.\n\n" +
          "Shikoyat " +
          "berish " +
          "huquqi " +
          "taraflarga " +
          "va " +
          "ishda " +
          "ishtirok " +
          "etuvchi " +
          "boshqa " +
          "shaxslarga " +
          "beriladi.\n\n" +
          "Shikoyatni " +
          "ko'radigan " +
          "sudlar " +
          "va " +
          "berish " +
          "tartibi " +
          "qonunda " +
          "belgilangan.\n\n" +
          "SHIKOYAT " +
          "MAZMUNIGA " +
          "talablar " +
          "bor va " +
          "ular " +
          "bajarilmasa " +
          "shikoyat " +
          "qaytarilishi " +
          "mumkin.\n\n" +
          "KUCHLI " +
          "SHIKOYAT " +
          "qanday " +
          "yoziladi?\n\n" +
          "Birinchidan, " +
          "aniq " +
          "ko'rsating: " +
          "sud " +
          "qaysi " +
          "holatni " +
          "noto'g'ri " +
          "aniqladi " +
          "yoki " +
          "qaysi " +
          "normani " +
          "noto'g'ri " +
          "qo'lladi.\n\n" +
          "Ikkinchidan, " +
          "har " +
          "bir " +
          "e'tirozni " +
          "ishdagi " +
          "aniq " +
          "hujjatga " +
          "yoki " +
          "dalilga " +
          "bog'lang.\n\n" +
          "Uchinchidan, " +
          "aniq " +
          "talab " +
          "yozing: " +
          "qarorni " +
          "bekor " +
          "qilish, " +
          "o'zgartirish " +
          "yoki " +
          "yangi " +
          "qaror " +
          "qabul " +
          "qilish.\n\n" +
          "«Qaror " +
          "adolatsiz» " +
          "degan " +
          "umumiy " +
          "ibora " +
          "hech " +
          "narsa " +
          "bermaydi.\n\n" +
          "Shikoyatga " +
          "ILOVA " +
          "qilinadigan " +
          "hujjatlar " +
          "ham " +
          "belgilangan.\n\n" +
          "Boshqa " +
          "tomon " +
          "shikoyatga " +
          "QO'SHILISH " +
          "imkoniyatiga " +
          "ega.",
        example:
          "Shikoyatda " +
          "«sud " +
          "meni " +
          "tushunmadi» " +
          "deb " +
          "yozildi. " +
          "Kuchli " +
          "variant " +
          "boshqacha: " +
          "«sud " +
          "ishdagi " +
          "shu " +
          "hujjatni " +
          "baholamadi " +
          "va " +
          "shu " +
          "normani " +
          "qo'llamadi» " +
          "— " +
          "aniq " +
          "va " +
          "tekshiriladigan " +
          "e'tiroz.",
        keyPoints: [
          "Apellyatsiya — qonuniy kuchga kirmagan qarorni qayta ko'rish",
          "Shikoyat mazmuniga talablar bor, ular bajarilmasa qaytariladi",
          "Aniq xato va aniq hujjatga havola qilish shart",
          "Boshqa tomon shikoyatga qo'shilishi mumkin",
        ],
        warning:
          "Shikoyat " +
          "muddatini " +
          "o'tkazib " +
          "yuborish " +
          "eng " +
          "og'ir " +
          "xato: " +
          "keyin " +
          "qaror " +
          "qonuniy " +
          "kuchga " +
          "kiradi " +
          "va " +
          "uni " +
          "o'zgartirish " +
          "ancha " +
          "qiyinlashadi.",
        lawRefs: [
          { code: "FPK", article: "383" },
          { code: "FPK", article: "384" },
          { code: "FPK", article: "385" },
          { code: "FPK", article: "386" },
          { code: "FPK", article: "387" },
          { code: "FPK", article: "390" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     7. Jinoyat protsessi  (MAVJUD KALIT — kengaytirildi)
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "jinoyat-protsessi",
    category: "process",
    level: "advanced",
    order: 12070,
    title: "Jinoyat protsessi: asosiy kafolatlar",
    desc:
      "Aybsizlik prezumpsiyasi, himoyalanish huquqi, ishtirokchilar " +
      "va jarayon bosqichlari.",
    objectives: [
      "Jinoyat protsessining asosiy kafolatlarini bilasiz",
      "Ishtirokchilar maqomini farqlay olasiz",
      "Himoyachi ishtiroki qachon SHART ekanini bilasiz",
      "Jarayon bosqichlarini bilasiz",
    ],
    practicalSteps: [
      "Har qanday bosqichda himoyachi huquqingizdan foydalaning",
      "Bayonnomalarni o'qimasdan imzolamang",
      "Maqomingizni aniqlang: guvoh, gumon qilinuvchi yoki ayblanuvchi",
      "Huquqlaringiz tushuntirilishini talab qiling",
    ],
    sections: [
      {
        heading: "Asosiy kafolatlar",
        text:
          "Jinoyat protsessi " +
          "eng qattiq " +
          "kafolatlar " +
          "bilan " +
          "ta'minlangan " +
          "soha, chunki " +
          "unda " +
          "shaxsning " +
          "ozodligi " +
          "hal " +
          "qilinadi.\n\n" +
          "AYBSIZLIK " +
          "PREZUMPSIYASI " +
          "— asosiy " +
          "kafolat: " +
          "gumon " +
          "qilinuvchi, " +
          "ayblanuvchi " +
          "yoki " +
          "sudlanuvchi " +
          "aybi " +
          "qonunda " +
          "belgilangan " +
          "tartibda " +
          "isbotlanmaguncha " +
          "aybdor " +
          "hisoblanmaydi.\n\n" +
          "Bundan " +
          "kelib " +
          "chiqadi: " +
          "aybsizligingizni " +
          "isbotlashingiz " +
          "SHART " +
          "EMAS, " +
          "shubhalar " +
          "esa " +
          "sizning " +
          "foydangizga " +
          "hal " +
          "qilinadi.\n\n" +
          "HIMOYALANISH " +
          "HUQUQI " +
          "bilan " +
          "ta'minlash " +
          "— " +
          "ikkinchi " +
          "asosiy " +
          "kafolat. " +
          "U " +
          "protsessning " +
          "HAR " +
          "QANDAY " +
          "bosqichida " +
          "amal " +
          "qiladi.\n\n" +
          "Konstitutsiya " +
          "ham " +
          "buni " +
          "kafolatlaydi: " +
          "har " +
          "kimga " +
          "malakali " +
          "yuridik " +
          "yordam " +
          "olish " +
          "huquqi " +
          "beriladi " +
          "va " +
          "qonunda " +
          "nazarda " +
          "tutilgan " +
          "hollarda " +
          "u " +
          "davlat " +
          "hisobidan " +
          "ko'rsatiladi.\n\n" +
          "HIMOYACHI " +
          "ISHTIROK " +
          "ETISHI " +
          "SHART " +
          "bo'lgan " +
          "hollar " +
          "alohida " +
          "belgilangan " +
          "— " +
          "masalan " +
          "voyaga " +
          "yetmaganlar " +
          "bo'yicha " +
          "ishlarda.\n\n" +
          "Bu " +
          "holatlarda " +
          "himoyachisiz " +
          "ish " +
          "yuritish " +
          "protsessual " +
          "buzilish " +
          "hisoblanadi.",
        example:
          "Shaxs " +
          "«guvoh " +
          "sifatida» " +
          "chaqirildi, " +
          "lekin " +
          "savollar " +
          "uning " +
          "o'zi " +
          "haqida " +
          "edi. " +
          "Bunday " +
          "holatda " +
          "maqomni " +
          "aniqlashtirish " +
          "va " +
          "himoyachi " +
          "talab " +
          "qilish " +
          "to'liq " +
          "o'rinli.",
        keyPoints: [
          "Aybsizligingizni isbotlashingiz SHART EMAS",
          "Shubhalar ayblanuvchi foydasiga hal qilinadi",
          "Himoyalanish huquqi HAR QANDAY bosqichda amal qiladi",
          "Ayrim hollarda himoyachi ishtiroki SHART",
        ],
        warning:
          "«Avval " +
          "gaplashamiz, " +
          "keyin " +
          "advokat » " +
          "degan " +
          "taklifga " +
          "rozi " +
          "bo'lmang. " +
          "Norasmiy " +
          "suhbat " +
          "keyin " +
          "hujjatga " +
          "aylanishi " +
          "mumkin.",
        lawRefs: [
          { code: "JPK", article: "23" },
          { code: "JPK", article: "24" },
          { code: "JPK", article: "49" },
          { code: "JPK", article: "51" },
          { code: "KONS", article: "28" },
          { code: "KONS", article: "29" },
        ],
      },
      {
        heading: "Ishtirokchilar va ularning maqomi",
        text:
          "Jinoyat " +
          "protsessida " +
          "har bir " +
          "ishtirokchining " +
          "MAQOMI va " +
          "huquqlari " +
          "aniq " +
          "belgilangan.\n\n" +
          "GUMON " +
          "QILINUVCHI " +
          "— jinoyat " +
          "sodir " +
          "etgani " +
          "to'g'risida " +
          "ma'lumotlar " +
          "bor " +
          "shaxs. " +
          "Uning " +
          "huquq va " +
          "majburiyatlari " +
          "alohida " +
          "moddada " +
          "belgilangan.\n\n" +
          "AYBLANUVCHI " +
          "— " +
          "belgilangan " +
          "tartibda " +
          "ayblanuvchi " +
          "tariqasida " +
          "jalb " +
          "etilgan " +
          "shaxs.\n\n" +
          "Uning " +
          "asosiy " +
          "huquqlari: " +
          "nimada " +
          "ayblanayotganini " +
          "bilish, " +
          "ko'rsatuv " +
          "berish " +
          "yoki " +
          "berishdan " +
          "bosh " +
          "tortish, " +
          "dalillar " +
          "taqdim " +
          "etish, " +
          "iltimosnomalar " +
          "kiritish, " +
          "himoyachi " +
          "yordamidan " +
          "foydalanish, " +
          "materiallar " +
          "bilan " +
          "tanishish, " +
          "shikoyat " +
          "qilish.\n\n" +
          "JABRLANUVCHI " +
          "ham " +
          "to'liq " +
          "protsessual " +
          "maqomga " +
          "ega: " +
          "ko'rsatuv " +
          "berish, " +
          "dalillar " +
          "taqdim " +
          "etish, " +
          "vakil " +
          "yordamidan " +
          "foydalanish.\n\n" +
          "HIMOYACHI " +
          "huquq " +
          "va " +
          "majburiyatlari " +
          "alohida " +
          "belgilangan; " +
          "himoyachidan " +
          "voz " +
          "kechish " +
          "tartibi " +
          "ham " +
          "tartibga " +
          "solingan.\n\n" +
          "QONUNIY " +
          "VAKILLAR " +
          "voyaga " +
          "yetmaganlar " +
          "va " +
          "boshqa " +
          "toifadagi " +
          "shaxslar " +
          "uchun " +
          "ishtirok " +
          "etadi.\n\n" +
          "Amaliy " +
          "xulosa: " +
          "birinchi " +
          "savol " +
          "har " +
          "doim " +
          "«mening " +
          "maqomim " +
          "qanday?» " +
          "bo'lishi " +
          "kerak — " +
          "huquqlar " +
          "shunga " +
          "bog'liq.",
        example:
          "Ayblanuvchiga " +
          "huquqlari " +
          "tushuntirilmadi " +
          "va " +
          "u " +
          "materiallar " +
          "bilan " +
          "tanishmadi. " +
          "Bu " +
          "protsessual " +
          "buzilish " +
          "bo'lib, " +
          "himoya " +
          "uchun " +
          "muhim " +
          "asos " +
          "bo'ladi.",
        keyPoints: [
          "Har bir ishtirokchining maqomi va huquqlari aniq belgilangan",
          "Ayblanuvchi ko'rsatuv berishdan bosh tortish huquqiga ega",
          "Jabrlanuvchi ham to'liq protsessual maqomga ega",
          "Birinchi savol — «mening maqomim qanday?»",
        ],
        warning:
          "Huquqlar " +
          "tushuntirilmasdan " +
          "o'tkazilgan " +
          "protsessual " +
          "harakat " +
          "e'tirozga " +
          "asos " +
          "bo'ladi. " +
          "Buni " +
          "bayonnomada " +
          "qayd " +
          "eting.",
        lawRefs: [
          { code: "JPK", article: "45" },
          { code: "JPK", article: "46" },
          { code: "JPK", article: "47" },
          { code: "JPK", article: "48" },
          { code: "JPK", article: "54" },
          { code: "JPK", article: "55" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     8. Ehtiyot choralari
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "ehtiyot-choralari",
    category: "process",
    level: "advanced",
    order: 12080,
    title: "Ehtiyot choralari va tintuv",
    desc:
      "Qamoqqa olish, uy qamog'i, garov va boshqa ehtiyot choralari; " +
      "tintuv o'tkazish asoslari va tartibi.",
    objectives: [
      "Ehtiyot choralari turlarini bilasiz",
      "Ular qanday asoslarda qo'llanilishini bilasiz",
      "Tintuv o'tkazish tartibini bilasiz",
      "Bu choralar ustidan shikoyat qilish mumkinligini bilasiz",
    ],
    practicalSteps: [
      "Ehtiyot chorasi qo'llanilsa, uning asosini va turini aniqlashtiring",
      "Yengilroq chora qo'llash to'g'risida iltimosnoma berish mumkin",
      "Tintuvda hujjat va guvohlar ishtirokini talab qiling",
      "Olib qo'yilgan narsalar ro'yxatini va nusxasini oling",
    ],
    sections: [
      {
        heading: "Ehtiyot choralari",
        text:
          "EHTIYOT CHORASI — " +
          "ayblanuvchining " +
          "tergov va " +
          "suddan " +
          "yashirinishi, " +
          "ish " +
          "yuritishga " +
          "to'sqinlik " +
          "qilishi " +
          "yoki yangi " +
          "jinoyat " +
          "sodir " +
          "etishining " +
          "oldini " +
          "olish " +
          "uchun " +
          "qo'llaniladigan " +
          "chora.\n\n" +
          "Bu JAZO " +
          "EMAS: " +
          "aybsizlik " +
          "prezumpsiyasi " +
          "amal " +
          "qilishda " +
          "davom " +
          "etadi.\n\n" +
          "TURLARI " +
          "qonunda " +
          "sanalgan " +
          "va ular " +
          "yengilroqdan " +
          "og'irroqqa " +
          "qarab " +
          "joylashgan: " +
          "munosib " +
          "xulq-atvor " +
          "to'g'risida " +
          "tilxat, " +
          "shaxsiy " +
          "kafillik, " +
          "garov, " +
          "uy " +
          "qamog'i, " +
          "qamoqqa " +
          "olish " +
          "va " +
          "boshqalar.\n\n" +
          "TANLASHDA " +
          "HISOBGA " +
          "OLINADIGAN " +
          "HOLATLAR " +
          "belgilangan: " +
          "jinoyatning " +
          "og'irligi, " +
          "shaxsning " +
          "shaxsiyati, " +
          "yoshi, " +
          "sog'lig'i, " +
          "oilaviy " +
          "holati, " +
          "mashg'uloti " +
          "va " +
          "boshqalar.\n\n" +
          "Bu " +
          "muhim: " +
          "eng " +
          "og'ir " +
          "chora " +
          "avtomatik " +
          "qo'llanilmaydi.\n\n" +
          "Amaliy " +
          "xulosa: " +
          "yengilroq " +
          "chora " +
          "qo'llash " +
          "to'g'risida " +
          "iltimosnoma " +
          "berish " +
          "va " +
          "unga " +
          "asos " +
          "bo'ladigan " +
          "hujjatlarni " +
          "(oilaviy " +
          "holat, " +
          "sog'liq, " +
          "ish " +
          "joyi " +
          "tavsifi) " +
          "taqdim " +
          "etish " +
          "mumkin.\n\n" +
          "GAROV " +
          "va UY " +
          "QAMOG'I " +
          "aynan " +
          "shunday " +
          "muqobil " +
          "choralar.",
        example:
          "Ayblanuvchining " +
          "doimiy " +
          "yashash " +
          "joyi, " +
          "ish " +
          "joyi " +
          "va " +
          "oilasi " +
          "bor " +
          "edi. " +
          "Bu " +
          "holatlar " +
          "yengilroq " +
          "ehtiyot " +
          "chorasi " +
          "uchun " +
          "asos " +
          "bo'lishi " +
          "mumkin — " +
          "lekin " +
          "ularni " +
          "hujjat " +
          "bilan " +
          "ko'rsatish " +
          "kerak.",
        keyPoints: [
          "Ehtiyot chorasi JAZO EMAS — aybsizlik prezumpsiyasi saqlanadi",
          "Turlari yengilroqdan og'irroqqa qarab joylashgan",
          "Tanlashda shaxsiyat va oilaviy holat hisobga olinadi",
          "Yengilroq chora so'rab iltimosnoma berish mumkin",
        ],
        warning:
          "Ehtiyot " +
          "chorasi " +
          "ustidan " +
          "shikoyat " +
          "qilish " +
          "imkoniyati " +
          "mavjud. " +
          "Muddatlarni " +
          "o'tkazib " +
          "yubormang.",
        lawRefs: [
          { code: "JPK", article: "236" },
          { code: "JPK", article: "237" },
          { code: "JPK", article: "238" },
          { code: "JPK", article: "242" },
          { code: "JPK", article: "242-1" },
          { code: "JPK", article: "249" },
        ],
      },
      {
        heading: "Tintuv o'tkazish",
        text:
          "TINTUV — turar " +
          "joy, xizmat " +
          "xonasi yoki " +
          "boshqa " +
          "joyda " +
          "ahamiyatga " +
          "ega " +
          "obyektlarni " +
          "topish " +
          "maqsadida " +
          "o'tkaziladigan " +
          "tergov " +
          "harakati.\n\n" +
          "U turar joy " +
          "daxlsizligiga " +
          "tegadi, " +
          "shuning " +
          "uchun " +
          "TARTIB " +
          "juda " +
          "qat'iy.\n\n" +
          "ASOSLAR " +
          "qonunda " +
          "belgilangan: " +
          "tintuv " +
          "faqat " +
          "yetarli " +
          "asos " +
          "bo'lganda " +
          "o'tkaziladi.\n\n" +
          "TARTIB: " +
          "tintuv " +
          "o'tkazish " +
          "to'g'risida " +
          "iltimosnoma " +
          "qo'zg'atiladi " +
          "va u " +
          "belgilangan " +
          "tartibda " +
          "ko'rib " +
          "chiqiladi.\n\n" +
          "Ya'ni " +
          "tintuv " +
          "o'zboshimchalik " +
          "bilan " +
          "emas, " +
          "ruxsat " +
          "asosida " +
          "o'tkaziladi.\n\n" +
          "AMALIY " +
          "YO'RIQNOMA:\n\n" +
          "Birinchidan, " +
          "asos " +
          "hujjatini " +
          "ko'rsatishni " +
          "so'rang " +
          "va " +
          "rekvizitlarini " +
          "yozib " +
          "oling.\n\n" +
          "Ikkinchidan, " +
          "guvohlar " +
          "ishtirokini " +
          "talab " +
          "qiling.\n\n" +
          "Uchinchidan, " +
          "olib " +
          "qo'yilgan " +
          "narsalar " +
          "RO'YXATI " +
          "tuzilishini " +
          "va " +
          "sizga " +
          "nusxa " +
          "berilishini " +
          "talab " +
          "qiling.\n\n" +
          "To'rtinchidan, " +
          "bayonnomani " +
          "o'qing " +
          "va " +
          "rozi " +
          "bo'lmagan " +
          "qismga " +
          "izoh " +
          "yozing.\n\n" +
          "Beshinchidan, " +
          "himoyachi " +
          "ishtirokini " +
          "so'rang.\n\n" +
          "Tartib " +
          "buzilishi " +
          "olingan " +
          "ma'lumotning " +
          "dalil " +
          "sifatidagi " +
          "qiymatiga " +
          "ta'sir " +
          "qiladi.",
        example:
          "Tintuv " +
          "paytida " +
          "olib " +
          "qo'yilgan " +
          "narsalar " +
          "ro'yxati " +
          "tuzilmadi. " +
          "Keyinchalik " +
          "nima " +
          "olinganini " +
          "aniqlash " +
          "imkonsiz " +
          "bo'ldi — " +
          "ro'yxat " +
          "va " +
          "nusxa " +
          "aynan " +
          "shu " +
          "muammoni " +
          "oldini " +
          "oladi.",
        keyPoints: [
          "Tintuv turar joy daxlsizligiga tegadi, shuning uchun tartib qat'iy",
          "Tintuv yetarli asos va belgilangan ruxsat bilan o'tkaziladi",
          "Guvohlar ishtiroki va olib qo'yilgan narsalar ro'yxati talab qilinadi",
          "Tartib buzilishi dalilning qiymatiga ta'sir qiladi",
        ],
        warning:
          "Bayonnomani " +
          "o'qimasdan " +
          "imzolamang. " +
          "Rozi " +
          "bo'lmagan " +
          "har " +
          "bir " +
          "holatni " +
          "yozib " +
          "qoldiring — " +
          "keyin " +
          "buni " +
          "qo'shib " +
          "bo'lmaydi.",
        lawRefs: [
          { code: "JPK", article: "158" },
          { code: "JPK", article: "158-1" },
          { code: "JPK", article: "158-2" },
          { code: "KONS", article: "31" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     9. Iqtisodiy sud  (MAVJUD KALIT — kengaytirildi)
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "iqtisodiy-sud",
    category: "process",
    level: "advanced",
    order: 12090,
    title: "Iqtisodiy sud: tadbirkorlik nizolari",
    desc:
      "Tadbirkorlik subyektlari o'rtasidagi nizolar: da'vo, " +
      "dalillar, jarayon va boshqa tartiblardan farqi.",
    objectives: [
      "Iqtisodiy sud qanday nizolarni ko'rishini bilasiz",
      "Fuqarolik tartibidan farqini bilasiz",
      "Da'vo arizasi talablarini bilasiz",
      "Nizoni sudsiz hal qilish imkoniyatlarini bilasiz",
    ],
    practicalSteps: [
      "Shartnomada nizolarni hal qilish tartibi yozilganini tekshiring",
      "Sudgacha da'vo (pretenziya) tartibi talab qilinishi mumkin — buni aniqlang",
      "Barcha birlamchi hujjatlarni tartibli saqlang",
      "Kelishuv imkoniyatini har doim ko'rib chiqing",
    ],
    sections: [
      {
        heading: "Iqtisodiy sud va uning o'ziga xosligi",
        text:
          "Iqtisodiy sud " +
          "tadbirkorlik " +
          "faoliyati " +
          "bilan " +
          "bog'liq " +
          "nizolarni " +
          "ko'radi.\n\n" +
          "Odatiy " +
          "misollar: " +
          "shartnoma " +
          "majburiyatlarining " +
          "bajarilmasligi, " +
          "yetkazib " +
          "berish " +
          "nizolari, " +
          "to'lov " +
          "va " +
          "qarz " +
          "masalalari, " +
          "korporativ " +
          "nizolar.\n\n" +
          "FUQAROLIK " +
          "TARTIBIDAN " +
          "FARQI " +
          "asosan " +
          "SUBYEKT " +
          "tarkibida " +
          "va " +
          "nizoning " +
          "xarakterida.\n\n" +
          "Bu farqni " +
          "bilish " +
          "muhim: " +
          "noto'g'ri " +
          "tartibda " +
          "berilgan " +
          "ariza " +
          "qaytariladi.\n\n" +
          "DA'VO " +
          "ARIZASI " +
          "va unga " +
          "qo'yiladigan " +
          "talablar " +
          "kodeksda " +
          "belgilangan. " +
          "Ariza " +
          "shakli " +
          "va " +
          "mazmuniga " +
          "rioya " +
          "qilinmasa, " +
          "u " +
          "qaytariladi " +
          "yoki " +
          "harakatsiz " +
          "qoldiriladi.\n\n" +
          "Iqtisodiy " +
          "nizolarda " +
          "DALILLAR " +
          "asosan " +
          "YOZMA " +
          "bo'ladi: " +
          "shartnomalar, " +
          "hisob-fakturalar, " +
          "dalolatnomalar, " +
          "yozishmalar, " +
          "bank " +
          "hujjatlari.\n\n" +
          "Shuning " +
          "uchun " +
          "hujjat " +
          "aylanishini " +
          "to'g'ri " +
          "yo'lga " +
          "qo'yish " +
          "biznes " +
          "uchun " +
          "eng " +
          "yaxshi " +
          "huquqiy " +
          "himoya.\n\n" +
          "Har " +
          "bir " +
          "bajarilgan " +
          "ish " +
          "yoki " +
          "yetkazib " +
          "berilgan " +
          "tovar " +
          "dalolatnoma " +
          "bilan " +
          "rasmiylashtirilishi " +
          "kerak.",
        example:
          "Yetkazib " +
          "beruvchi " +
          "tovarni " +
          "topshirdi, " +
          "lekin " +
          "dalolatnoma " +
          "imzolanmadi. " +
          "Nizoda " +
          "tovar " +
          "topshirilganini " +
          "isbotlash " +
          "qiyin " +
          "bo'ldi — " +
          "hujjat " +
          "aylanishi " +
          "aynan " +
          "shu " +
          "sababdan " +
          "muhim.",
        keyPoints: [
          "Iqtisodiy sud tadbirkorlik faoliyati bilan bog'liq nizolarni ko'radi",
          "Farq subyekt tarkibi va nizo xarakterida",
          "Dalillar asosan YOZMA bo'ladi",
          "To'g'ri hujjat aylanishi — biznes uchun eng yaxshi himoya",
        ],
        warning:
          "Og'zaki " +
          "kelishuv " +
          "va " +
          "rasmiylashtirilmagan " +
          "yetkazib " +
          "berish " +
          "iqtisodiy " +
          "nizoda " +
          "deyarli " +
          "himoyasiz " +
          "qoldiradi.",
        lawRefs: [
          { code: "IPK", article: "107" },
          { code: "IPK", article: "112" },
          { code: "IPK", article: "118" },
          { code: "IPK", article: "29" },
        ],
      },
      {
        heading: "Sudgacha tartib va kelishuv",
        text:
          "Iqtisodiy " +
          "nizolarda " +
          "SUDGACHA " +
          "(pretenziya) " +
          "tartibi " +
          "muhim " +
          "o'rin " +
          "tutadi.\n\n" +
          "Ko'p " +
          "shartnomalarda " +
          "nizolarni " +
          "hal " +
          "qilish " +
          "tartibi " +
          "alohida " +
          "yoziladi " +
          "va " +
          "unda " +
          "sudgacha " +
          "da'vo " +
          "bosqichi " +
          "nazarda " +
          "tutilishi " +
          "mumkin.\n\n" +
          "Bu " +
          "bosqich " +
          "o'tkazib " +
          "yuborilsa, " +
          "ariza " +
          "qaytarilishi " +
          "mumkin.\n\n" +
          "Shuning " +
          "uchun " +
          "birinchi " +
          "qadam " +
          "har " +
          "doim: " +
          "SHARTNOMANI " +
          "qayta " +
          "o'qish " +
          "va " +
          "nizolarni " +
          "hal " +
          "qilish " +
          "bandini " +
          "topish.\n\n" +
          "PRETENZIYA " +
          "yozishning " +
          "amaliy " +
          "qoidalari: " +
          "aniq " +
          "summa " +
          "va " +
          "hisob-kitob; " +
          "shartnomaning " +
          "qaysi " +
          "bandi " +
          "buzilgani; " +
          "javob " +
          "berish " +
          "muddati; " +
          "ilova " +
          "hujjatlar " +
          "ro'yxati.\n\n" +
          "Pretenziya " +
          "yuborilganini " +
          "tasdiqlovchi " +
          "hujjatni " +
          "saqlang.\n\n" +
          "KELISHUV: " +
          "iqtisodiy " +
          "nizolarda " +
          "kelishuv " +
          "ko'pincha " +
          "eng " +
          "oqilona " +
          "yechim.\n\n" +
          "Sabab " +
          "amaliy: " +
          "sud " +
          "jarayoni " +
          "vaqt " +
          "va " +
          "resurs " +
          "oladi, " +
          "biznes " +
          "aloqalari " +
          "esa " +
          "buziladi.\n\n" +
          "Kelishuvda " +
          "muhim " +
          "shart: " +
          "u " +
          "YOZMA " +
          "rasmiylashtirilishi " +
          "va " +
          "ijro " +
          "tartibi " +
          "aniq " +
          "yozilishi " +
          "kerak.",
        example:
          "Kompaniya " +
          "sudgacha " +
          "da'vo " +
          "yubormasdan " +
          "arizani " +
          "berdi, " +
          "shartnomada " +
          "esa " +
          "bu " +
          "bosqich " +
          "majburiy " +
          "edi. " +
          "Ariza " +
          "qaytarildi " +
          "va " +
          "vaqt " +
          "yo'qotildi.",
        keyPoints: [
          "Shartnomada sudgacha da'vo tartibi nazarda tutilishi mumkin",
          "Bu bosqich o'tkazib yuborilsa ariza qaytarilishi mumkin",
          "Pretenziyada aniq summa, hisob va shartnoma bandi ko'rsatiladi",
          "Kelishuv iqtisodiy nizolarda ko'pincha eng oqilona yechim",
        ],
        warning:
          "Pretenziya " +
          "yuborilganini " +
          "tasdiqlovchi " +
          "hujjatni " +
          "saqlamaslik " +
          "sudda " +
          "muammo " +
          "keltiradi: " +
          "tartib " +
          "bajarilgani " +
          "isbotlanmaydi.",
        lawRefs: [
          { code: "IPK", article: "149" },
          { code: "IPK", article: "151" },
          { code: "IPK", article: "152" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     10. Sud qarorini ijro etish
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "sud-qarorini-ijro",
    category: "process",
    level: "mid",
    order: 12100,
    title: "Sud qarorini ijro etish",
    desc:
      "Qaror qonuniy kuchga kirgach nima bo'ladi: ijro varaqasi, " +
      "davlat ijrochisi va undirish choralari.",
    objectives: [
      "Ijro jarayoni qanday boshlanishini bilasiz",
      "Ijro varaqasi nima ekanligini bilasiz",
      "Undirish choralarini bilasiz",
      "Ijro bo'yicha muammolarda nima qilishni bilasiz",
    ],
    practicalSteps: [
      "Qaror kuchga kirgach ijro varaqasini oling",
      "Uni davlat ijrochisiga taqdim eting va ish qo'zg'atilishini so'rang",
      "Qarzdorning mol-mulki haqida ma'lumot bering — bu ijroni tezlashtiradi",
      "Ijrochi harakatsizligi ustidan shikoyat qilish yo'li ochiq",
    ],
    sections: [
      {
        heading: "Ijro jarayonining boshlanishi",
        text:
          "Sud qarorini olish " +
          "— jarayonning " +
          "yakuni emas. " +
          "Ko'p " +
          "holatda " +
          "eng " +
          "qiyin " +
          "qism " +
          "aynan " +
          "IJRO " +
          "bo'ladi.\n\n" +
          "Qaror " +
          "qonuniy " +
          "kuchga " +
          "kirgach " +
          "ijro " +
          "bosqichi " +
          "boshlanadi.\n\n" +
          "Sud hal " +
          "qiluv " +
          "qarorini " +
          "ijro " +
          "etish " +
          "tartibi " +
          "va " +
          "muddatini " +
          "belgilashi " +
          "mumkin.\n\n" +
          "IJRO " +
          "VARAQASI " +
          "— ijro " +
          "uchun " +
          "asos " +
          "bo'ladigan " +
          "hujjat. " +
          "Uni " +
          "olish " +
          "birinchi " +
          "amaliy " +
          "qadam.\n\n" +
          "Keyin " +
          "u " +
          "davlat " +
          "ijrochisiga " +
          "taqdim " +
          "etiladi " +
          "va " +
          "ijro " +
          "ishi " +
          "qo'zg'atiladi.\n\n" +
          "AMALIY " +
          "MASLAHAT: " +
          "ijro " +
          "avtomatik " +
          "boshlanmaydi. " +
          "Undiruvchi " +
          "faol " +
          "bo'lishi " +
          "kerak.\n\n" +
          "Eng " +
          "foydali " +
          "narsa " +
          "— " +
          "qarzdorning " +
          "mol-mulki " +
          "va " +
          "daromad " +
          "manbalari " +
          "haqida " +
          "ma'lumot " +
          "berish: " +
          "ish " +
          "joyi, " +
          "bank " +
          "hisobvaraqlari, " +
          "transport " +
          "vositasi, " +
          "ko'chmas " +
          "mulk.\n\n" +
          "Bu " +
          "ma'lumot " +
          "ijroni " +
          "sezilarli " +
          "tezlashtiradi.\n\n" +
          "Bir " +
          "nechta " +
          "da'vogar " +
          "yoki " +
          "javobgarga " +
          "nisbatan " +
          "qabul " +
          "qilingan " +
          "qaror " +
          "uchun " +
          "alohida " +
          "qoidalar " +
          "mavjud.",
        example:
          "Da'vogar " +
          "sud " +
          "qarorini " +
          "oldi-yu, " +
          "ijro " +
          "varaqasini " +
          "olishni " +
          "va " +
          "ijrochiga " +
          "murojaat " +
          "qilishni " +
          "kechiktirdi. " +
          "Bu " +
          "davrda " +
          "qarzdor " +
          "mol-mulkini " +
          "boshqa " +
          "shaxsga " +
          "o'tkazdi " +
          "— " +
          "tezkorlik " +
          "hal " +
          "qiluvchi " +
          "edi.",
        keyPoints: [
          "Qaror olish — jarayonning yakuni emas, ijro alohida bosqich",
          "Ijro varaqasi ijro uchun asos bo'ladigan hujjat",
          "Ijro avtomatik boshlanmaydi — undiruvchi faol bo'lishi kerak",
          "Qarzdor mol-mulki haqidagi ma'lumot ijroni tezlashtiradi",
        ],
        warning:
          "Ijroni " +
          "kechiktirish " +
          "qarzdorga " +
          "mol-mulkni " +
          "yashirish " +
          "imkonini " +
          "beradi. " +
          "Qaror " +
          "kuchga " +
          "kirishi " +
          "bilan " +
          "harakat " +
          "qiling.",
        lawRefs: [
          { code: "FPK", article: "255" },
          { code: "FPK", article: "256" },
          { code: "OK", article: "114" },
        ],
      },
      {
        heading: "Undirish choralari va muammolar",
        text:
          "Ijro jarayonida " +
          "qo'llaniladigan " +
          "choralar keng: " +
          "bank " +
          "hisobvaraqlaridagi " +
          "mablag'ni " +
          "undirish, " +
          "ish " +
          "haqidan " +
          "ushlab " +
          "qolish, " +
          "mol-mulkni " +
          "xatlash " +
          "va " +
          "sotish, " +
          "ayrim " +
          "huquqlarni " +
          "vaqtincha " +
          "cheklash.\n\n" +
          "ALIMENT " +
          "bo'yicha " +
          "alohida " +
          "qoidalar " +
          "mavjud: " +
          "ish " +
          "beruvchining " +
          "ushlab " +
          "qolish " +
          "majburiyati " +
          "va " +
          "qarzni " +
          "hisoblash " +
          "tartibi " +
          "Oila " +
          "kodeksida " +
          "belgilangan.\n\n" +
          "AMALDA " +
          "UCHRAYDIGAN " +
          "MUAMMOLAR " +
          "va " +
          "ularning " +
          "yechimi:\n\n" +
          "Birinchi " +
          "muammo — " +
          "qarzdorda " +
          "rasman " +
          "mol-mulk " +
          "yo'q. " +
          "Yechim: " +
          "daromad " +
          "manbalarini " +
          "ko'rsatish, " +
          "mol-mulk " +
          "boshqa " +
          "shaxsga " +
          "o'tkazilgan " +
          "bo'lsa " +
          "bitimga " +
          "e'tiroz " +
          "bildirish.\n\n" +
          "Ikkinchi " +
          "muammo — " +
          "ijro " +
          "sekin " +
          "kechyapti. " +
          "Yechim: " +
          "ijrochiga " +
          "yozma " +
          "murojaat, " +
          "keyin " +
          "yuqori " +
          "organga " +
          "shikoyat.\n\n" +
          "Ijrochining " +
          "harakati " +
          "yoki " +
          "harakatsizligi " +
          "ustidan " +
          "shikoyat " +
          "qilish " +
          "huquqi " +
          "mavjud.\n\n" +
          "Uchinchi " +
          "muammo — " +
          "qarzdor " +
          "chet " +
          "elda. " +
          "Bu " +
          "murakkab " +
          "holat " +
          "va u " +
          "alohida " +
          "tartibni " +
          "talab " +
          "qiladi.",
        example:
          "Undiruvchi " +
          "bir " +
          "yil " +
          "davomida " +
          "hech " +
          "narsa " +
          "qilmadi " +
          "va " +
          "«ijrochi " +
          "ishlamayapti» " +
          "deb " +
          "shikoyat " +
          "qildi. " +
          "Yozma " +
          "murojaatlar " +
          "bo'lmagani " +
          "uchun " +
          "shikoyatni " +
          "asoslash " +
          "qiyin " +
          "bo'ldi.",
        keyPoints: [
          "Choralar: hisobvaraqlardan undirish, ish haqidan ushlash, mol-mulkni xatlash",
          "Aliment bo'yicha alohida qoidalar mavjud",
          "Ijrochining harakatsizligi ustidan shikoyat qilish mumkin",
          "Har bir murojaatni YOZMA qiling va nusxasini saqlang",
        ],
        warning:
          "Qarzdorning " +
          "mol-mulkni " +
          "yaqinlariga " +
          "o'tkazishi " +
          "keng " +
          "tarqalgan. " +
          "Bunday " +
          "bitimga " +
          "e'tiroz " +
          "bildirish " +
          "mumkin, " +
          "lekin " +
          "tez " +
          "harakat " +
          "qilish " +
          "kerak.",
        lawRefs: [
          { code: "OK", article: "137" },
          { code: "OK", article: "139" },
          { code: "OK", article: "114" },
          { code: "FK", article: "200" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     11. Advokat va yuridik yordam
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "advokat-yuridik-yordam",
    category: "process",
    level: "basic",
    order: 12110,
    title: "Advokat va malakali yuridik yordam",
    desc:
      "Yuridik yordam olish huquqi, advokat qachon kerak, u bilan " +
      "qanday ishlash va davlat hisobidan yordam.",
    objectives: [
      "Yuridik yordam olish huquqini bilasiz",
      "Advokat qanday hollarda zarurligini bilasiz",
      "Advokat bilan qanday ishlashni bilasiz",
      "Davlat hisobidan yordam imkoniyatini bilasiz",
    ],
    practicalSteps: [
      "Advokat bilan yozma shartnoma tuzing: xizmat hajmi va narx aniq bo'lsin",
      "Barcha hujjatlarni tartiblab, bir joyda taqdim eting",
      "Advokatga to'liq va rost ma'lumot bering — yashirilgan fakt zarar keltiradi",
      "To'lovlarni hujjatlashtiring: ular sud xarajatlari sifatida undirilishi mumkin",
    ],
    sections: [
      {
        heading: "Yuridik yordam huquqi",
        text:
          "Konstitutsiya har " +
          "kimga malakali " +
          "yuridik yordam " +
          "olish huquqini " +
          "kafolatlaydi.\n\n" +
          "Ikkita muhim " +
          "qo'shimcha " +
          "bor.\n\n" +
          "Birinchisi: " +
          "qonunda " +
          "nazarda " +
          "tutilgan " +
          "hollarda " +
          "yuridik " +
          "yordam " +
          "DAVLAT " +
          "HISOBIDAN " +
          "ko'rsatiladi. " +
          "Ya'ni " +
          "to'lash " +
          "imkoni " +
          "yo'qligi " +
          "himoyasiz " +
          "qolish " +
          "uchun " +
          "sabab " +
          "emas.\n\n" +
          "Ikkinchisi: " +
          "har " +
          "bir " +
          "shaxs " +
          "jinoyat " +
          "protsessining " +
          "HAR " +
          "QANDAY " +
          "bosqichida " +
          "advokat " +
          "yordamiga " +
          "ega " +
          "bo'lish " +
          "huquqiga " +
          "ega.\n\n" +
          "Advokatura " +
          "Konstitutsiyada " +
          "alohida " +
          "bob " +
          "sifatida " +
          "tan " +
          "olingan.\n\n" +
          "ADVOKAT " +
          "QACHON " +
          "KERAK?\n\n" +
          "Albatta " +
          "kerak: " +
          "jinoiy " +
          "ish " +
          "bo'yicha " +
          "har " +
          "qanday " +
          "maqomda; " +
          "ozodlikni " +
          "cheklash " +
          "xavfi " +
          "bo'lganda; " +
          "voyaga " +
          "yetmagan " +
          "shaxsga " +
          "nisbatan " +
          "ish " +
          "yuritilganda.\n\n" +
          "Kuchli " +
          "tavsiya " +
          "etiladi: " +
          "katta " +
          "summali " +
          "mulkiy " +
          "nizolarda; " +
          "ko'chmas " +
          "mulk " +
          "va " +
          "meros " +
          "ishlarida; " +
          "murakkab " +
          "shartnoma " +
          "nizolarida.\n\n" +
          "Mustaqil " +
          "hal " +
          "qilish " +
          "mumkin: " +
          "oddiy " +
          "va " +
          "hujjat " +
          "bilan " +
          "tasdiqlangan " +
          "talablarda, " +
          "murojaat " +
          "va " +
          "shikoyat " +
          "yozishda.",
        example:
          "Shaxs " +
          "«advokat " +
          "qimmat» " +
          "deb " +
          "jinoiy " +
          "ish " +
          "bo'yicha " +
          "yolg'iz " +
          "ishtirok " +
          "etdi. " +
          "Qonunda " +
          "nazarda " +
          "tutilgan " +
          "hollarda " +
          "yordam " +
          "davlat " +
          "hisobidan " +
          "ko'rsatiladi " +
          "— " +
          "bu " +
          "imkoniyatni " +
          "so'rash " +
          "kerak " +
          "edi.",
        keyPoints: [
          "Malakali yuridik yordam olish huquqi kafolatlangan",
          "Qonunda nazarda tutilgan hollarda yordam davlat hisobidan",
          "Jinoyat protsessining HAR QANDAY bosqichida advokat huquqi bor",
          "Jinoiy ishda advokatsiz ishtirok etmang",
        ],
        warning:
          "«Menda " +
          "yashiradigan " +
          "narsa " +
          "yo'q, " +
          "advokat " +
          "kerak " +
          "emas» " +
          "degan " +
          "fikr " +
          "xato: " +
          "advokat " +
          "ayb " +
          "belgisi " +
          "emas, " +
          "protsessual " +
          "himoya " +
          "vositasi.",
        lawRefs: [
          { code: "KONS", article: "29" },
          { code: "JPK", article: "49" },
          { code: "JPK", article: "50" },
          { code: "JPK", article: "51" },
        ],
      },
      {
        heading: "Advokat bilan qanday ishlash",
        text:
          "Advokat bilan " +
          "samarali " +
          "ishlash " +
          "ko'nikma " +
          "talab " +
          "qiladi va " +
          "u " +
          "natijaga " +
          "bevosita " +
          "ta'sir " +
          "qiladi.\n\n" +
          "BIRINCHI " +
          "QOIDA: " +
          "to'liq " +
          "va " +
          "ROST " +
          "ma'lumot " +
          "bering.\n\n" +
          "Yashirilgan " +
          "yoki " +
          "bo'yalgan " +
          "fakt " +
          "sud " +
          "majlisida " +
          "ochilsa, " +
          "himoya " +
          "butunlay " +
          "buziladi. " +
          "Advokat " +
          "sizni " +
          "himoya " +
          "qiladi, " +
          "baholamaydi.\n\n" +
          "IKKINCHI " +
          "QOIDA: " +
          "hujjatlarni " +
          "tartiblab " +
          "bering. " +
          "Xronologik " +
          "tartibda " +
          "joylashtirilgan " +
          "papka " +
          "vaqt " +
          "va " +
          "pul " +
          "tejaydi.\n\n" +
          "UCHINCHI " +
          "QOIDA: " +
          "shartnoma " +
          "tuzing. " +
          "Unda " +
          "xizmat " +
          "hajmi " +
          "(qaysi " +
          "bosqichlar), " +
          "narx " +
          "va " +
          "to'lov " +
          "tartibi " +
          "yozilsin.\n\n" +
          "Bu " +
          "ikki " +
          "tomonni " +
          "ham " +
          "himoya " +
          "qiladi " +
          "va " +
          "keyin " +
          "xarajatlarni " +
          "undirish " +
          "uchun " +
          "asos " +
          "bo'ladi.\n\n" +
          "TO'RTINCHI " +
          "QOIDA: " +
          "kafolat " +
          "so'ramang. " +
          "Hech " +
          "bir " +
          "advokat " +
          "natijani " +
          "kafolatlay " +
          "olmaydi — " +
          "qaror " +
          "sudniki. " +
          "Kafolat " +
          "berayotgan " +
          "shaxs " +
          "ehtiyotkorlik " +
          "signali.\n\n" +
          "BESHINCHI " +
          "QOIDA: " +
          "muddatlarni " +
          "o'zingiz " +
          "ham " +
          "kuzating. " +
          "Bu " +
          "sizning " +
          "ishingiz " +
          "va " +
          "yakuniy " +
          "mas'uliyat " +
          "sizda " +
          "qoladi.",
        example:
          "Mijoz " +
          "advokatga " +
          "muhim " +
          "faktni " +
          "aytmadi. " +
          "U " +
          "sud " +
          "majlisida " +
          "qarshi " +
          "tomon " +
          "tomonidan " +
          "keltirildi " +
          "va " +
          "butun " +
          "himoya " +
          "strategiyasi " +
          "buzildi. " +
          "Oldindan " +
          "aytilganda " +
          "unga " +
          "tayyorgarlik " +
          "ko'rish " +
          "mumkin " +
          "edi.",
        keyPoints: [
          "To'liq va ROST ma'lumot bering — yashirilgan fakt himoyani buzadi",
          "Hujjatlarni xronologik tartibda tayyorlang",
          "Yozma shartnoma tuzing: xizmat hajmi, narx, to'lov tartibi",
          "Natija kafolatini va'da qilgan shaxsdan ehtiyot bo'ling",
        ],
        warning:
          "Advokat " +
          "xizmati " +
          "uchun " +
          "to'lovni " +
          "hujjatlashtirmaslik " +
          "keyin " +
          "bu " +
          "xarajatni " +
          "sud " +
          "orqali " +
          "undirish " +
          "imkoniyatini " +
          "yo'qotadi.",
        lawRefs: [
          { code: "FPK", article: "136" },
          { code: "FPK", article: "65" },
          { code: "JPK", article: "53" },
        ],
      },
    ],
  },
];

module.exports = { LESSONS };
