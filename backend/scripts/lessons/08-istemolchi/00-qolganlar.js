"use strict";
/**
 * MODUL 8 — ISTE'MOLCHI HUQUQLARI (6 dars)
 *
 * Manba: "Iste'molchilarning huquqlarini himoya qilish to'g'risida"gi
 * qonun (IHQ, 33 modda) va Fuqarolik kodeksi (chakana oldi-sotdi).
 *
 * ⚠️ ISTE'MOLCHI MASALALARI FK EMAS, IHQ DA. Bu ilgari xatoga sabab
 * bo'lgan: `lessonPractice.js` iste'molchi mavzusi uchun FK ni
 * ko'rsatardi. Chakana oldi-sotdining umumiy qoidalari FK2 da,
 * iste'molchining MAXSUS himoyasi esa IHQ da.
 *
 * Mavjud "Iste'molchi huquqlari" darsi (`lessonContentData.js`,
 * order: 30) asoslarni beradi.
 */

const LESSONS = [
  /* ═══════════════════════════════════════════════════════════════
     1. Asosiy huquqlar va axborot
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "istemolchi-asosiy-huquqlar",
    category: "consumer",
    level: "basic",
    order: 8010,
    title: "Iste'molchining asosiy huquqlari va axborot olish",
    desc:
      "Iste'molchi qanday huquqlarga ega, sotuvchi qanday " +
      "ma'lumot berishi shart va noto'g'ri ma'lumot berilsa nima qilish kerak.",
    objectives: [
      "Iste'molchining asosiy huquqlari ro'yxatini bilasiz",
      "Sotuvchi qanday ma'lumot berishi shartligini bilasiz",
      "Noto'g'ri ma'lumot berilganda huquqlaringizni bilasiz",
      "Tovar xavfsizligiga talab qo'yish huquqini bilasiz",
    ],
    practicalSteps: [
      "Xarid qilishdan oldin tovar haqidagi to'liq ma'lumotni so'rang — bu sizning huquqingiz",
      "Chek yoki to'lov hujjatini har doim saqlang",
      "Tovar yorlig'i, kafolat talonlari va yo'riqnomalarni tashlab yubormang",
      "Sotuvchi noto'g'ri ma'lumot bergan bo'lsa, buni (reklama, yozishma) qayd eting",
    ],
    sections: [
      {
        heading: "Asosiy huquqlar ro'yxati",
        text:
          "Iste'molchi — tovar (ish, xizmat)ni " +
          "shaxsiy ehtiyojlari uchun sotib " +
          "oladigan yoki buyurtma qiladigan " +
          "shaxs.\n\n" +
          "Bu ta'rif muhim: iste'molchi " +
          "himoyasi tadbirkorlik maqsadidagi " +
          "xaridlarga qo'llanilmaydi.\n\n" +
          "Qonun iste'molchilarning asosiy " +
          "huquqlarini sanaydi. Ularga " +
          "odatda quyidagilar kiradi: tovar " +
          "(ish, xizmat) haqida to'liq va " +
          "ishonchli ma'lumot olish; tovar " +
          "xavfsiz bo'lishiga talab qo'yish; " +
          "tegishli sifatga ega tovar olish; " +
          "huquqlari buzilganda zararni " +
          "qoplashni talab qilish; " +
          "huquqlarini sud orqali himoya " +
          "qilish.\n\n" +
          "Iste'molchi himoyasining " +
          "mantig'i sodda: xaridor va " +
          "sotuvchi teng emas. Sotuvchi " +
          "tovarni yaxshi biladi, xaridor " +
          "esa bilmaydi. Shu sababli " +
          "qonun kuchsizroq tomonga " +
          "qo'shimcha himoya beradi.\n\n" +
          "Iste'molchi savdo va boshqa " +
          "xizmat ko'rsatish turlari " +
          "sohasida shartnoma tuzish " +
          "huquqiga ega va bu huquq " +
          "asossiz cheklanmasligi " +
          "kerak.\n\n" +
          "Davlat iste'molchilar " +
          "huquqlarini himoya qilishni " +
          "ta'minlaydi va bu sohada " +
          "maxsus organlar " +
          "faoliyat yuritadi.",
        example:
          "Xaridor uskuna sotib oldi va " +
          "keyin uning texnik " +
          "xususiyatlari e'lon " +
          "qilinganidan farq " +
          "qilishini aniqladi. " +
          "To'liq va ishonchli " +
          "ma'lumot olish huquqi " +
          "buzilgani uchun bu talab " +
          "qo'yish asosi bo'ladi.",
        keyPoints: [
          "Iste'molchi — shaxsiy ehtiyoj uchun sotib oladigan shaxs",
          "Tadbirkorlik maqsadidagi xaridga bu himoya qo'llanilmaydi",
          "Asosiy huquqlar: axborot, xavfsizlik, sifat, zararni qoplash, sud himoyasi",
          "Himoyaning mantig'i — xaridor va sotuvchi teng emas",
        ],
        warning:
          "Cheksiz saqlanmagan chek " +
          "iste'molchi talablarini " +
          "isbotlashni " +
          "qiyinlashtiradi. Chek " +
          "bo'lmasa boshqa dalillar " +
          "(guvoh, bank o'tkazmasi) " +
          "kerak bo'ladi.",
        lawRefs: [
          { code: "IHQ", article: "1" },
          { code: "IHQ", article: "4" },
          { code: "IHQ", article: "8" },
          { code: "IHQ", article: "23" },
        ],
      },
      {
        heading: "Axborot olish huquqi va noto'g'ri ma'lumot",
        text:
          "Bu huquq iste'molchi " +
          "himoyasining o'zagi, " +
          "chunki asosiy tengsizlik " +
          "aynan ma'lumotda.\n\n" +
          "Ishlab chiqaruvchi " +
          "(ijrochi, sotuvchi) " +
          "iste'molchiga tovar " +
          "(ish, xizmat) " +
          "to'g'risida zarur " +
          "ma'lumotni berishi " +
          "shart.\n\n" +
          "Bunga odatda " +
          "quyidagilar kiradi: " +
          "tovarning nomi va " +
          "asosiy " +
          "xususiyatlari, " +
          "narxi, ishlab " +
          "chiqaruvchi " +
          "haqidagi " +
          "ma'lumot, " +
          "foydalanish " +
          "qoidalari, " +
          "kafolat va " +
          "xizmat " +
          "muddatlari.\n\n" +
          "Shuningdek " +
          "ishlab " +
          "chiqaruvchi, " +
          "savdo va " +
          "xizmat " +
          "ko'rsatish " +
          "qoidalari " +
          "to'g'risidagi " +
          "ma'lumot ham " +
          "berilishi " +
          "kerak.\n\n" +
          "NOTO'G'RI " +
          "MA'LUMOT " +
          "BERILGANDA " +
          "iste'molchining " +
          "huquqlari " +
          "alohida " +
          "belgilangan.\n\n" +
          "Bu holatda " +
          "iste'molchi " +
          "odatda " +
          "shartnomani " +
          "bekor " +
          "qilish va " +
          "zararni " +
          "qoplashni " +
          "talab " +
          "qilish " +
          "imkoniyatiga " +
          "ega " +
          "bo'ladi.\n\n" +
          "XAVFSIZLIK: " +
          "iste'molchi " +
          "tovar " +
          "(ish, " +
          "xizmat) " +
          "xavfsiz " +
          "bo'lishiga " +
          "talab " +
          "qo'yish " +
          "huquqiga " +
          "ega. Bu " +
          "huquq " +
          "hayot, " +
          "sog'liq va " +
          "mol-mulk " +
          "xavfsizligini " +
          "qamraydi.",
        example:
          "Tovar " +
          "yorlig'ida " +
          "tarkib " +
          "noto'g'ri " +
          "ko'rsatilgan " +
          "va bu " +
          "xaridorning " +
          "sog'lig'iga " +
          "ta'sir " +
          "qildi. " +
          "Noto'g'ri " +
          "ma'lumot " +
          "berish " +
          "ham, " +
          "xavfsizlik " +
          "talabining " +
          "buzilishi " +
          "ham " +
          "mustaqil " +
          "asos " +
          "bo'ladi.",
        keyPoints: [
          "Sotuvchi tovar haqida zarur ma'lumotni berishi SHART",
          "Ma'lumotga narx, xususiyatlar, kafolat va foydalanish qoidalari kiradi",
          "Noto'g'ri ma'lumot berilganda alohida huquqlar yuzaga keladi",
          "Iste'molchi tovar xavfsiz bo'lishiga talab qo'yishga haqli",
        ],
        warning:
          "Og'zaki " +
          "va'dalar " +
          "(«bu " +
          "abadiy " +
          "ishlaydi») " +
          "keyin " +
          "isbotlanmaydi. " +
          "Muhim " +
          "xususiyatlarni " +
          "yozma " +
          "hujjatda " +
          "yoki " +
          "yozishmada " +
          "qayd " +
          "etishga " +
          "harakat " +
          "qiling.",
        lawRefs: [
          { code: "IHQ", article: "5" },
          { code: "IHQ", article: "6" },
          { code: "IHQ", article: "7" },
          { code: "IHQ", article: "12" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     2. Nuqsonli tovar
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "nuqsonli-tovar",
    category: "consumer",
    level: "basic",
    order: 8020,
    title: "Nuqsonli tovar: talablaringiz va tartib",
    desc:
      "Nuqsonli tovar sotilganda qanday talab qo'yish mumkin: " +
      "almashtirish, bepul tuzatish, narxni kamaytirish, qaytarish.",
    objectives: [
      "Nuqsonli tovar bo'yicha barcha talab variantlarini bilasiz",
      "Almashtirish va bepul tuzatish tartibini bilasiz",
      "Narxni kamaytirish talabini qanday qo'yishni bilasiz",
      "Hisob-kitob qanday amalga oshirilishini bilasiz",
    ],
    practicalSteps: [
      "Nuqson topilishi bilan sotuvchiga YOZMA murojaat qiling va nusxasini saqlang",
      "Talabingizni ANIQ tanlang: almashtirish, tuzatish, narxni kamaytirish yoki qaytarish",
      "Tovarni topshirganingizni tasdiqlovchi hujjat oling",
      "Ekspertiza kerak bo'lsa, uning natijasi bilan tanishish huquqingiz borligini yodda tuting",
    ],
    sections: [
      {
        heading: "Talab variantlari va ularni tanlash",
        text:
          "Nuqsonli tovar sotilganda " +
          "iste'molchining huquqlari " +
          "alohida moddada " +
          "belgilangan va bu " +
          "moddani bilish " +
          "amalda eng " +
          "foydalisi.\n\n" +
          "Iste'molchi odatda " +
          "quyidagi talablardan " +
          "BIRINI tanlashi " +
          "mumkin:\n\n" +
          "Birinchi — tovarni " +
          "shunday markadagi " +
          "(modeldagi) " +
          "tovarga " +
          "ALMASHTIRIB " +
          "berish.\n\n" +
          "Ikkinchi — " +
          "nuqsonlarni BEPUL " +
          "BARTARAF ETISH " +
          "yoki bartaraf " +
          "etish " +
          "xarajatlarini " +
          "qoplash.\n\n" +
          "Uchinchi — xarid " +
          "narxini nuqsonga " +
          "MUTANOSIB " +
          "ravishda " +
          "KAMAYTIRISH.\n\n" +
          "To'rtinchi — " +
          "shartnomani " +
          "bekor qilib, " +
          "to'langan " +
          "pulni " +
          "QAYTARISHNI " +
          "talab " +
          "qilish.\n\n" +
          "TANLOV " +
          "ISTE'MOLCHIDA. " +
          "Bu juda " +
          "muhim: " +
          "sotuvchi " +
          "«biz faqat " +
          "ta'mirlaymiz» " +
          "deb " +
          "variantni " +
          "sizga " +
          "belgilab " +
          "bera " +
          "olmaydi.\n\n" +
          "Ayrim " +
          "tovar " +
          "turlari " +
          "uchun " +
          "qonun " +
          "cheklovlar " +
          "belgilashi " +
          "mumkin, " +
          "lekin " +
          "umumiy " +
          "qoida " +
          "shu.\n\n" +
          "Har bir " +
          "talab " +
          "uchun " +
          "alohida " +
          "TARTIB " +
          "va " +
          "muddatlar " +
          "qonunda " +
          "belgilangan.",
        example:
          "Xaridor " +
          "nuqsonli " +
          "maishiy " +
          "texnikani " +
          "qaytarmoqchi " +
          "bo'ldi, " +
          "sotuvchi " +
          "esa " +
          "«faqat " +
          "ta'mirga " +
          "olamiz» " +
          "dedi. " +
          "Talab " +
          "turini " +
          "tanlash " +
          "iste'molchining " +
          "huquqi " +
          "bo'lgani " +
          "uchun " +
          "bunday " +
          "rad " +
          "javobi " +
          "asossiz.",
        keyPoints: [
          "To'rt asosiy talab: almashtirish, bepul tuzatish, narxni kamaytirish, qaytarish",
          "TANLOV iste'molchida — sotuvchi variantni belgilab bera olmaydi",
          "Har bir talab uchun alohida tartib va muddatlar belgilangan",
          "Talab yozma va aniq shakllantirilishi kerak",
        ],
        warning:
          "Tovarni " +
          "hujjatsiz " +
          "topshirmang. " +
          "«Ko'rib " +
          "chiqamiz» " +
          "deb " +
          "olib " +
          "qo'yilgan " +
          "tovar " +
          "keyin " +
          "yo'qolib " +
          "qolishi " +
          "mumkin.",
        lawRefs: [
          { code: "IHQ", article: "13" },
          { code: "IHQ", article: "14" },
          { code: "IHQ", article: "15" },
          { code: "IHQ", article: "16" },
        ],
      },
      {
        heading: "Hisob-kitob va sifatli tovarni almashtirish",
        text:
          "HISOB-KITOB masalasi " +
          "amalda ko'p savol " +
          "tug'diradi: tovar " +
          "narxi o'zgargan " +
          "bo'lsa nima " +
          "bo'ladi?\n\n" +
          "Nuqsonli tovar " +
          "sotilgan taqdirda " +
          "iste'molchi bilan " +
          "hisob-kitob " +
          "qilish tartibi " +
          "qonunda alohida " +
          "belgilangan.\n\n" +
          "Umumiy tamoyil: " +
          "iste'molchi " +
          "narx " +
          "o'zgarishidan " +
          "zarar " +
          "ko'rmasligi " +
          "kerak.\n\n" +
          "MAQBUL SIFATLI " +
          "TOVARNI " +
          "ALMASHTIRISH " +
          "butunlay " +
          "boshqa " +
          "institut va " +
          "uni " +
          "aralashtirmaslik " +
          "kerak.\n\n" +
          "Bu holatda " +
          "tovarda " +
          "NUQSON " +
          "YO'Q — " +
          "u " +
          "shunchaki " +
          "shakli, " +
          "o'lchami, " +
          "rangi " +
          "yoki " +
          "boshqa " +
          "sababga " +
          "ko'ra " +
          "to'g'ri " +
          "kelmadi.\n\n" +
          "Qonun " +
          "iste'molchiga " +
          "maqbul " +
          "sifatli " +
          "nooziq-ovqat " +
          "tovarini " +
          "almashtirib " +
          "olish " +
          "huquqini " +
          "beradi, " +
          "lekin " +
          "SHARTLAR " +
          "bilan: " +
          "belgilangan " +
          "muddat " +
          "ichida, " +
          "tovar " +
          "ishlatilmagan " +
          "bo'lsa " +
          "va " +
          "uning " +
          "ko'rinishi, " +
          "yorliqlari " +
          "saqlangan " +
          "bo'lsa.\n\n" +
          "Shuningdek " +
          "almashtirib " +
          "bo'lmaydigan " +
          "tovarlar " +
          "ro'yxati " +
          "ham " +
          "mavjud " +
          "bo'lishi " +
          "mumkin.\n\n" +
          "Amaliy " +
          "xulosa: " +
          "yorliq " +
          "va " +
          "qadoqni " +
          "darhol " +
          "tashlab " +
          "yubormang.",
        example:
          "Xaridor " +
          "kiyim " +
          "sotib " +
          "oldi, " +
          "o'lchami " +
          "to'g'ri " +
          "kelmadi. " +
          "Tovarda " +
          "nuqson " +
          "yo'q, " +
          "shuning " +
          "uchun " +
          "«maqbul " +
          "sifatli " +
          "tovarni " +
          "almashtirish» " +
          "qoidalari " +
          "qo'llanadi — " +
          "muddat " +
          "va " +
          "yorliq " +
          "shartlari " +
          "muhim " +
          "bo'ladi.",
        keyPoints: [
          "Hisob-kitobda iste'molchi narx o'zgarishidan zarar ko'rmasligi kerak",
          "Maqbul sifatli tovarni almashtirish — nuqsonsiz tovar uchun ALOHIDA institut",
          "Shartlar: muddat, ishlatilmaganlik, ko'rinish va yorliqlarning saqlanishi",
          "Ayrim tovarlar almashtirilmasligi mumkin",
        ],
        warning:
          "Qadoq va " +
          "yorliqni " +
          "tashlab " +
          "yuborish " +
          "almashtirish " +
          "huquqidan " +
          "mahrum " +
          "qilishi " +
          "mumkin. " +
          "Ularni " +
          "kamida " +
          "belgilangan " +
          "muddat " +
          "davomida " +
          "saqlang.",
        lawRefs: [
          { code: "IHQ", article: "17" },
          { code: "IHQ", article: "18" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     3. Kafolat va muddatlar
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "kafolat-muddati",
    category: "consumer",
    level: "mid",
    order: 8030,
    title: "Kafolat majburiyatlari va muddatlar",
    desc:
      "Kafolat muddati nima, xizmat muddati, tovarni topshirish " +
      "muddatini buzish va muddatlar qanday hisoblanadi.",
    objectives: [
      "Kafolat majburiyati nima ekanligini bilasiz",
      "Kafolat muddati va xizmat muddati farqini bilasiz",
      "Topshirish muddati buzilganda huquqlaringizni bilasiz",
      "Kafolat davrida kim nimani isbotlashini bilasiz",
    ],
    practicalSteps: [
      "Kafolat talonini va xarid hujjatini birga saqlang",
      "Kafolat muddati qachon boshlanishini aniqlashtiring",
      "Ta'mirga topshirganda hujjat oling: kafolat muddati bunda uzayishi mumkin",
      "Oldindan to'lov qilgan bo'lsangiz, topshirish muddatini shartnomada aniq yozing",
    ],
    sections: [
      {
        heading: "Kafolat majburiyatlari",
        text:
          "Uzoq muddat " +
          "foydalaniladigan " +
          "tovarlar uchun " +
          "ishlab chiqaruvchi " +
          "(ijrochi)ning " +
          "kafillik " +
          "majburiyatlari " +
          "belgilangan.\n\n" +
          "KAFOLAT MUDDATI — " +
          "shu davr ichida " +
          "aniqlangan " +
          "nuqsonlar uchun " +
          "ishlab " +
          "chiqaruvchi " +
          "yoki sotuvchi " +
          "javob beradigan " +
          "muddat.\n\n" +
          "Uning amaliy " +
          "ahamiyati " +
          "isbot yukida: " +
          "kafolat " +
          "muddati " +
          "ichida " +
          "nuqson " +
          "topilsa, " +
          "iste'molchining " +
          "holati " +
          "ancha " +
          "kuchli " +
          "bo'ladi.\n\n" +
          "XIZMAT " +
          "MUDDATI " +
          "boshqa " +
          "tushuncha: " +
          "u tovar " +
          "o'z " +
          "vazifasini " +
          "bajarishi " +
          "kutiladigan " +
          "davr.\n\n" +
          "Ikkalasini " +
          "aralashtirmaslik " +
          "kerak: " +
          "kafolat " +
          "muddati " +
          "tugagan " +
          "bo'lsa " +
          "ham, " +
          "ayrim " +
          "holatlarda " +
          "talab " +
          "qo'yish " +
          "imkoniyati " +
          "saqlanishi " +
          "mumkin.\n\n" +
          "Kafolat " +
          "davrida " +
          "nuqsonlarni " +
          "BEPUL " +
          "bartaraf " +
          "etish " +
          "tartibi " +
          "alohida " +
          "belgilangan.\n\n" +
          "Amaliy " +
          "maslahat: " +
          "ta'mirga " +
          "topshirganda " +
          "hujjat " +
          "oling. " +
          "Ta'mir " +
          "davri " +
          "kafolat " +
          "muddatiga " +
          "ta'sir " +
          "qilishi " +
          "mumkin " +
          "va " +
          "buni " +
          "faqat " +
          "hujjat " +
          "bilan " +
          "ko'rsatish " +
          "mumkin.",
        example:
          "Uskuna " +
          "kafolat " +
          "davrida " +
          "bir " +
          "necha " +
          "marta " +
          "ta'mirga " +
          "topshirildi, " +
          "lekin " +
          "hujjat " +
          "olinmadi. " +
          "Keyin " +
          "«kafolat " +
          "tugagan» " +
          "deyilganda " +
          "xaridor " +
          "ta'mir " +
          "davrlarini " +
          "isbotlay " +
          "olmadi.",
        keyPoints: [
          "Uzoq muddat foydalaniladigan tovarlar uchun kafolat majburiyatlari belgilangan",
          "Kafolat muddati ichida iste'molchining holati ancha kuchli",
          "Kafolat muddati va xizmat muddati — turli tushunchalar",
          "Ta'mirga topshirganda hujjat olish shart",
        ],
        warning:
          "Kafolat " +
          "taloni " +
          "to'ldirilmagan " +
          "yoki " +
          "muhrsiz " +
          "bo'lsa, " +
          "keyin " +
          "nizo " +
          "chiqishi " +
          "mumkin. " +
          "Xarid " +
          "paytida " +
          "uni " +
          "tekshiring.",
        lawRefs: [
          { code: "IHQ", article: "11" },
          { code: "IHQ", article: "15" },
        ],
      },
      {
        heading: "Topshirish muddatini buzish",
        text:
          "Oldindan to'lov " +
          "qilib, tovarni " +
          "kutish holati " +
          "juda ko'p " +
          "uchraydi — " +
          "mebel, texnika, " +
          "buyurtma " +
          "asosidagi " +
          "tovarlar.\n\n" +
          "Qonun oldi-sotdi " +
          "shartnomasi " +
          "bo'yicha " +
          "tovarni " +
          "topshirish " +
          "muddatini " +
          "buzish " +
          "holatini " +
          "alohida " +
          "tartibga " +
          "soladi.\n\n" +
          "Bu holatda " +
          "iste'molchi " +
          "odatda " +
          "quyidagi " +
          "imkoniyatlarga " +
          "ega " +
          "bo'ladi: " +
          "yangi " +
          "muddat " +
          "belgilash, " +
          "shartnomani " +
          "bekor " +
          "qilib " +
          "to'langan " +
          "summani " +
          "qaytarishni " +
          "talab " +
          "qilish, " +
          "kechikish " +
          "uchun " +
          "to'lov " +
          "talab " +
          "qilish.\n\n" +
          "AMALIY " +
          "MASLAHAT: " +
          "shartnomada " +
          "topshirish " +
          "muddatini " +
          "ANIQ " +
          "SANA " +
          "bilan " +
          "yozing. " +
          "«2-3 " +
          "hafta " +
          "ichida» " +
          "degan " +
          "ibora " +
          "buzilishni " +
          "isbotlashni " +
          "qiyinlashtiradi.\n\n" +
          "Ikkinchi " +
          "maslahat: " +
          "to'liq " +
          "oldindan " +
          "to'lovdan " +
          "saqlaning. " +
          "Qisman " +
          "to'lov " +
          "sizga " +
          "ta'sir " +
          "vositasini " +
          "saqlab " +
          "qoladi.\n\n" +
          "HAQ " +
          "TO'LASH " +
          "shakli " +
          "va " +
          "tartibi " +
          "ham " +
          "qonunda " +
          "tartibga " +
          "solingan.",
        example:
          "Mijoz " +
          "mebel " +
          "uchun " +
          "to'liq " +
          "oldindan " +
          "to'lov " +
          "qildi, " +
          "muddat " +
          "esa " +
          "«taxminan» " +
          "deb " +
          "yozildi. " +
          "Yetkazib " +
          "berish " +
          "oylab " +
          "cho'zildi " +
          "va " +
          "buzilishni " +
          "isbotlash " +
          "qiyin " +
          "bo'ldi.",
        keyPoints: [
          "Topshirish muddati buzilganda iste'molchining alohida huquqlari bor",
          "Imkoniyatlar: yangi muddat, bekor qilish va pulni qaytarish, kechikish to'lovi",
          "Shartnomada muddatni ANIQ SANA bilan yozish kerak",
          "To'liq oldindan to'lovdan saqlanish ancha xavfsiz",
        ],
        warning:
          "«Taxminan» " +
          "yoki " +
          "«imkon " +
          "qadar " +
          "tez» " +
          "kabi " +
          "iboralar " +
          "shartnomada " +
          "hech " +
          "qanday " +
          "majburiyat " +
          "keltirmaydi.",
        lawRefs: [
          { code: "IHQ", article: "12-1" },
          { code: "IHQ", article: "10" },
          { code: "IHQ", article: "9" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     4. Ish va xizmatlar
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "xizmat-sifati",
    category: "consumer",
    level: "mid",
    order: 8040,
    title: "Ish va xizmatlar sifati",
    desc:
      "Ish bajarish va xizmat ko'rsatish shartnomasi buzilganda " +
      "iste'molchining huquqlari va zarar uchun javobgarlik.",
    objectives: [
      "Xizmat shartnomasi buzilganda huquqlaringizni bilasiz",
      "Nuqsonlar tufayli yetkazilgan zarar uchun javobgarlikni bilasiz",
      "Shartnomaning qaysi shartlari haqiqiy emasligini bilasiz",
      "Ma'naviy zarar talabini bilasiz",
    ],
    practicalSteps: [
      "Xizmat shartnomasida ish hajmi, muddat va narxni aniq yozing",
      "Ish natijasini qabul qilishda kamchiliklarni dalolatnomada qayd eting",
      "Sifatsiz xizmat bo'lsa yozma da'vo yuboring va muhlat bering",
      "Zarar yetkazilgan bo'lsa, uni hujjat va surat bilan qayd eting",
    ],
    sections: [
      {
        heading: "Shartnoma buzilganda iste'molchi huquqlari",
        text:
          "Ish bajarish va " +
          "xizmat ko'rsatish " +
          "to'g'risidagi " +
          "shartnoma shartlari " +
          "buzilgan taqdirda " +
          "iste'molchining " +
          "huquqlari alohida " +
          "belgilangan.\n\n" +
          "Bu talablar tovar " +
          "bo'yicha " +
          "talablarga " +
          "o'xshash, lekin " +
          "o'ziga " +
          "xosligi " +
          "bor.\n\n" +
          "Odatda " +
          "iste'molchi " +
          "quyidagilarni " +
          "talab qilishi " +
          "mumkin: " +
          "kamchiliklarni " +
          "bepul " +
          "bartaraf " +
          "etish; " +
          "ish " +
          "(xizmat) " +
          "narxini " +
          "kamaytirish; " +
          "boshqa " +
          "ijrochi " +
          "tomonidan " +
          "bajartirib, " +
          "xarajatlarni " +
          "qoplashni " +
          "talab " +
          "qilish; " +
          "shartnomani " +
          "bekor " +
          "qilish va " +
          "zararni " +
          "qoplash.\n\n" +
          "XIZMATLARDA " +
          "asosiy " +
          "qiyinchilik " +
          "— " +
          "SIFATNI " +
          "ISBOTLASH. " +
          "Tovarda " +
          "nuqson " +
          "ko'rinadi, " +
          "xizmatda " +
          "esa " +
          "«yaxshi " +
          "bajarildimi» " +
          "degan " +
          "savol " +
          "subyektiv " +
          "bo'lib " +
          "qolishi " +
          "mumkin.\n\n" +
          "Shu " +
          "sababli " +
          "shartnomada " +
          "natija " +
          "MEZONINI " +
          "yozish " +
          "juda " +
          "muhim: " +
          "nima " +
          "bajariladi, " +
          "qanday " +
          "materialdan, " +
          "qanday " +
          "hajmda.\n\n" +
          "Qabul " +
          "qilish " +
          "dalolatnomasi " +
          "ham " +
          "shu " +
          "sababdan " +
          "muhim: " +
          "unda " +
          "kamchiliklar " +
          "qayd " +
          "etiladi.",
        example:
          "Ta'mir " +
          "ishlari " +
          "sifatsiz " +
          "bajarildi, " +
          "lekin " +
          "shartnomada " +
          "ishlar " +
          "ro'yxati " +
          "yo'q " +
          "edi. " +
          "Nizoda " +
          "«nima " +
          "kelishilgan " +
          "edi» " +
          "degan " +
          "savolga " +
          "javob " +
          "topilmadi — " +
          "smeta " +
          "buni " +
          "hal " +
          "qilardi.",
        keyPoints: [
          "Xizmat shartnomasi buzilganda tovarga o'xshash talablar qo'yiladi",
          "Asosiy qiyinchilik — sifatni isbotlash",
          "Shartnomada natija MEZONINI aniq yozish kerak",
          "Qabul dalolatnomasida kamchiliklarni qayd etish muhim",
        ],
        warning:
          "Ishni " +
          "«hammasi " +
          "yaxshi» " +
          "deb " +
          "qabul " +
          "qilib, " +
          "keyin " +
          "kamchilik " +
          "da'vo " +
          "qilish " +
          "ancha " +
          "qiyin. " +
          "Qabul " +
          "paytida " +
          "diqqat " +
          "bilan " +
          "tekshiring.",
        lawRefs: [
          { code: "IHQ", article: "19" },
          { code: "FK2", article: "706" },
          { code: "FK2", article: "642" },
        ],
      },
      {
        heading: "Zarar, haqiqiy bo'lmagan shartlar va ma'naviy zarar",
        text:
          "MULKIY JAVOBGARLIK: " +
          "tovar (ish, " +
          "xizmat)ning " +
          "nuqsonlari tufayli " +
          "yetkazilgan zarar " +
          "uchun javobgarlik " +
          "belgilangan.\n\n" +
          "Bu qoidaning " +
          "kuchi shundaki, " +
          "zarar " +
          "tovarning " +
          "o'zidan " +
          "ancha katta " +
          "bo'lishi " +
          "mumkin.\n\n" +
          "Masalan " +
          "nosoz " +
          "uskuna " +
          "yong'inga " +
          "sabab " +
          "bo'lsa, " +
          "javobgarlik " +
          "uskuna " +
          "narxi " +
          "bilan " +
          "cheklanmaydi.\n\n" +
          "HAQIQIY " +
          "BO'LMAGAN " +
          "SHARTLAR: " +
          "shartnomaning " +
          "iste'molchi " +
          "huquqlarini " +
          "cheklab " +
          "qo'yadigan " +
          "shartlari " +
          "HAQIQIY " +
          "EMAS.\n\n" +
          "Bu juda " +
          "kuchli " +
          "himoya. " +
          "Amaliy " +
          "ma'nosi: " +
          "siz " +
          "imzolagan " +
          "bo'lsangiz " +
          "ham, " +
          "huquqlaringizni " +
          "kamaytiradigan " +
          "band " +
          "ishlamaydi.\n\n" +
          "Tez-tez " +
          "uchraydigan " +
          "noqonuniy " +
          "bandlar: " +
          "«tovar " +
          "qaytarilmaydi » " +
          "«da'volar " +
          "qabul " +
          "qilinmaydi» " +
          "«javobgarlik " +
          "faqat " +
          "tovar " +
          "narxi " +
          "bilan " +
          "cheklanadi».\n\n" +
          "MA'NAVIY " +
          "ZARAR: " +
          "iste'molchining " +
          "huquqlari " +
          "buzilishi " +
          "tufayli " +
          "yetkazilgan " +
          "ma'naviy " +
          "zarar " +
          "uchun " +
          "haq " +
          "to'lash " +
          "nazarda " +
          "tutilgan.\n\n" +
          "Bu " +
          "mulkiy " +
          "zarardan " +
          "MUSTAQIL " +
          "talab.",
        example:
          "Do'kon " +
          "peshtaxtasida " +
          "«Sotib " +
          "olingan " +
          "tovar " +
          "qaytarilmaydi » " +
          "degan " +
          "e'lon " +
          "turibdi. " +
          "Bunday " +
          "shart " +
          "iste'molchi " +
          "huquqini " +
          "cheklagani " +
          "uchun " +
          "yuridik " +
          "kuchga " +
          "ega " +
          "emas.",
        keyPoints: [
          "Nuqsonlar tufayli yetkazilgan zarar uchun mulkiy javobgarlik belgilangan",
          "Javobgarlik tovar narxi bilan cheklanmaydi",
          "Iste'molchi huquqlarini cheklaydigan shartnoma shartlari HAQIQIY EMAS",
          "Ma'naviy zarar mulkiy zarardan mustaqil talab qilinadi",
        ],
        warning:
          "«Tovar " +
          "qaytarilmaydi» " +
          "kabi " +
          "e'lonlar " +
          "qonuniy " +
          "asosga " +
          "ega " +
          "emas. " +
          "Ularga " +
          "asoslanib " +
          "huquqingizdan " +
          "voz " +
          "kechmang.",
        lawRefs: [
          { code: "IHQ", article: "20" },
          { code: "IHQ", article: "21" },
          { code: "IHQ", article: "22" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     5. Himoya yo'llari
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "istemolchi-himoya",
    category: "consumer",
    level: "mid",
    order: 8050,
    title: "Iste'molchi huquqlarini himoya qilish yo'llari",
    desc:
      "Da'vo yozish, davlat organlariga murojaat, jamoat " +
      "birlashmalari va sud himoyasi.",
    objectives: [
      "Himoya yo'llarining ketma-ketligini bilasiz",
      "Qaysi organlarga murojaat qilish mumkinligini bilasiz",
      "Sud himoyasi va imtiyozlarni bilasiz",
      "Da'vo (pretenziya) qanday yozilishini bilasiz",
    ],
    practicalSteps: [
      "Avval sotuvchiga YOZMA da'vo bering: talab, asos va muhlat ko'rsatilgan holda",
      "Da'voni ikki nusxada tayyorlang va qabul qilingani haqida belgi oling",
      "Javob bo'lmasa nazorat organiga murojaat qiling",
      "Natija bo'lmasa sudga murojaat qiling — iste'molchi sifatida imtiyozlaringiz bor",
    ],
    sections: [
      {
        heading: "Da'vo yozish va davlat organlari",
        text:
          "Himoya har doim " +
          "eng oddiy " +
          "bosqichdan " +
          "boshlanadi: " +
          "sotuvchiga " +
          "yozma da'vo " +
          "(pretenziya).\n\n" +
          "Da'voda uchta " +
          "narsa " +
          "bo'lishi " +
          "kerak: " +
          "nima sodir " +
          "bo'lgani " +
          "(sana, " +
          "tovar, " +
          "chek " +
          "raqami), " +
          "qanday " +
          "huquq " +
          "buzilgani " +
          "va ANIQ " +
          "TALAB.\n\n" +
          "Da'voni " +
          "ikki " +
          "nusxada " +
          "tayyorlang: " +
          "biriga " +
          "qabul " +
          "qilingani " +
          "haqida " +
          "belgi " +
          "oling. " +
          "Bu " +
          "keyingi " +
          "bosqichda " +
          "asosiy " +
          "dalil " +
          "bo'ladi.\n\n" +
          "DAVLAT " +
          "HIMOYASI: " +
          "iste'molchilar " +
          "huquqlarini " +
          "himoya " +
          "qilish " +
          "davlat " +
          "tomonidan " +
          "ta'minlanadi.\n\n" +
          "Mahalliy " +
          "hokimiyat " +
          "organlari " +
          "ham " +
          "iste'molchilar " +
          "huquqlarini " +
          "himoya " +
          "qilishda " +
          "ishtirok " +
          "etadi.\n\n" +
          "Maxsus " +
          "organlar " +
          "ham " +
          "mavjud: " +
          "iste'molchilar " +
          "huquqlarini " +
          "himoya " +
          "qilish " +
          "bo'yicha " +
          "vakolatli " +
          "tuzilma " +
          "hamda " +
          "tovarlar " +
          "xavfsizligi " +
          "va " +
          "sifatini " +
          "nazorat " +
          "qiluvchi " +
          "organlar.\n\n" +
          "Ularga " +
          "murojaat " +
          "sudga " +
          "qaraganda " +
          "tez " +
          "va " +
          "arzon " +
          "bo'lishi " +
          "mumkin.\n\n" +
          "Organ " +
          "ko'rsatmasi " +
          "ustidan " +
          "shikoyat " +
          "qilish " +
          "imkoniyati " +
          "ham " +
          "nazarda " +
          "tutilgan.",
        example:
          "Xaridor " +
          "og'zaki " +
          "shikoyat " +
          "qilib " +
          "yurdi, " +
          "natija " +
          "bo'lmadi. " +
          "Yozma " +
          "da'vo " +
          "bergach " +
          "va " +
          "unga " +
          "qabul " +
          "belgisi " +
          "olgach " +
          "masala " +
          "bir " +
          "necha " +
          "kunda " +
          "hal " +
          "bo'ldi — " +
          "yozma " +
          "hujjat " +
          "javobgarlik " +
          "hissini " +
          "keltiradi.",
        keyPoints: [
          "Birinchi bosqich — sotuvchiga YOZMA da'vo",
          "Da'voda: nima bo'lgani, qaysi huquq buzilgani va ANIQ talab",
          "Ikki nusxa tayyorlang va qabul belgisini oling",
          "Nazorat organlariga murojaat sudga qaraganda tez va arzon",
        ],
        warning:
          "Og'zaki " +
          "shikoyat " +
          "hech " +
          "qanday " +
          "iz " +
          "qoldirmaydi. " +
          "Keyingi " +
          "bosqichda " +
          "«men " +
          "murojaat " +
          "qilganman» " +
          "deganingizni " +
          "isbotlay " +
          "olmaysiz.",
        lawRefs: [
          { code: "IHQ", article: "23" },
          { code: "IHQ", article: "24" },
          { code: "IHQ", article: "25" },
          { code: "IHQ", article: "26" },
          { code: "IHQ", article: "27-1" },
        ],
      },
      {
        heading: "Sud himoyasi va jamoat birlashmalari",
        text:
          "Iste'molchining " +
          "huquqlari " +
          "buzilgan " +
          "taqdirda sud " +
          "orqali himoya " +
          "qilish " +
          "imkoniyati " +
          "alohida " +
          "belgilangan.\n\n" +
          "Iste'molchi " +
          "uchun sud " +
          "yo'lida " +
          "IMTIYOZLAR " +
          "nazarda " +
          "tutilgan — " +
          "bu " +
          "himoyani " +
          "amalda " +
          "erishish " +
          "mumkin " +
          "qiladi.\n\n" +
          "Sudga " +
          "murojaat " +
          "qilishdan " +
          "oldin " +
          "tayyorgarlik " +
          "muhim:\n\n" +
          "Birinchidan, " +
          "barcha " +
          "hujjatlarni " +
          "to'plang: " +
          "chek, " +
          "shartnoma, " +
          "kafolat " +
          "taloni, " +
          "da'vo " +
          "va " +
          "javob, " +
          "ekspertiza " +
          "natijalari.\n\n" +
          "Ikkinchidan, " +
          "talabni " +
          "aniq " +
          "hisoblang: " +
          "tovar " +
          "narxi, " +
          "zarar, " +
          "kechikish " +
          "to'lovi, " +
          "ma'naviy " +
          "zarar.\n\n" +
          "Uchinchidan, " +
          "da'vo " +
          "arizasida " +
          "qaysi " +
          "huquq " +
          "buzilganini " +
          "va " +
          "qaysi " +
          "normaga " +
          "tayanayotganingizni " +
          "ko'rsating.\n\n" +
          "JAMOAT " +
          "BIRLASHMALARI: " +
          "iste'molchilar " +
          "o'z " +
          "huquqlari " +
          "va " +
          "manfaatlarini " +
          "himoya " +
          "qilish " +
          "uchun " +
          "jamoat " +
          "birlashmalariga " +
          "uyushishi " +
          "mumkin.\n\n" +
          "Bunday " +
          "birlashmalar " +
          "maslahat " +
          "berishi " +
          "va " +
          "himoyada " +
          "yordam " +
          "ko'rsatishi " +
          "mumkin — " +
          "ayniqsa " +
          "yolg'iz " +
          "kurashish " +
          "qiyin " +
          "bo'lgan " +
          "holatlarda.",
        example:
          "Bir " +
          "necha " +
          "xaridor " +
          "bir " +
          "xil " +
          "nuqsonli " +
          "tovar " +
          "sotib " +
          "olgan " +
          "edi. " +
          "Alohida " +
          "kurashish " +
          "o'rniga " +
          "ular " +
          "jamoat " +
          "birlashmasi " +
          "orqali " +
          "harakat " +
          "qildi — " +
          "bu " +
          "ancha " +
          "samarali " +
          "bo'ldi.",
        keyPoints: [
          "Iste'molchi sud orqali himoya qilish huquqiga ega",
          "Sud yo'lida iste'molchi uchun imtiyozlar nazarda tutilgan",
          "Tayyorgarlik: hujjatlar, aniq hisob va huquqiy asos",
          "Jamoat birlashmalari himoyada yordam berishi mumkin",
        ],
        warning:
          "Muddatlarga " +
          "e'tibor " +
          "bering: " +
          "kafolat " +
          "va " +
          "da'vo " +
          "muddatlari " +
          "o'tib " +
          "ketsa, " +
          "talab " +
          "qo'yish " +
          "imkoniyati " +
          "yo'qoladi " +
          "yoki " +
          "qiyinlashadi.",
        lawRefs: [
          { code: "IHQ", article: "29" },
          { code: "IHQ", article: "30" },
          { code: "IHQ", article: "27" },
        ],
      },
    ],
  },

  /* ═══════════════════════════════════════════════════════════════
     6. Onlayn savdo va moliyaviy xizmatlar
     ═══════════════════════════════════════════════════════════════ */
  {
    key: "onlayn-savdo",
    category: "consumer",
    level: "mid",
    order: 8060,
    title: "Onlayn xarid va moliyaviy xizmatlar",
    desc:
      "Axborot tizimlari orqali savdo, masofadan xarid xavflari " +
      "va moliyaviy xizmatlar sohasida iste'molchi himoyasi.",
    objectives: [
      "Onlayn savdo qanday tartibga solinganini bilasiz",
      "Masofadan xaridda qanday xavflar borligini bilasiz",
      "Moliyaviy xizmatlarda iste'molchi himoyasini bilasiz",
      "Onlayn xaridda dalil to'plash usullarini bilasiz",
    ],
    practicalSteps: [
      "Onlayn xaridda buyurtma, to'lov va yozishmalarning skrinshotini saqlang",
      "Sotuvchining rasmiy rekvizitlarini (nomi, manzili) aniqlang",
      "To'lovni imkon qadar kuzatiladigan usulda (karta, bank) amalga oshiring",
      "Kredit yoki bo'lib to'lash taklifida umumiy to'lanadigan summani so'rang",
    ],
    sections: [
      {
        heading: "Axborot tizimlari orqali savdo",
        text:
          "Tovarlarni " +
          "(ishlarni, " +
          "xizmatlarni) " +
          "axborot " +
          "tizimlaridan " +
          "foydalangan " +
          "holda " +
          "realizatsiya " +
          "qilish " +
          "alohida " +
          "moddada " +
          "tartibga " +
          "solingan.\n\n" +
          "Bu muhim: " +
          "onlayn " +
          "xarid " +
          "«qonundan " +
          "tashqarida» " +
          "emas — " +
          "iste'molchi " +
          "himoyasi " +
          "unga ham " +
          "tegishli.\n\n" +
          "Masofadan " +
          "xaridning " +
          "o'ziga " +
          "xos " +
          "xavfi " +
          "shundaki, " +
          "xaridor " +
          "tovarni " +
          "ko'rmasdan " +
          "sotib " +
          "oladi. " +
          "Shu " +
          "sababli " +
          "MA'LUMOT " +
          "berish " +
          "talabi " +
          "bu " +
          "yerda " +
          "ayniqsa " +
          "muhim " +
          "bo'ladi.\n\n" +
          "AMALIY " +
          "XAVFLAR " +
          "va " +
          "ulardan " +
          "himoya:\n\n" +
          "Birinchi " +
          "xavf — " +
          "sotuvchi " +
          "noma'lum. " +
          "Rekvizitlarni " +
          "(rasmiy " +
          "nom, " +
          "manzil, " +
          "aloqa) " +
          "oldindan " +
          "aniqlang. " +
          "Nizoda " +
          "da'voni " +
          "kimga " +
          "qo'yishni " +
          "bilish " +
          "kerak.\n\n" +
          "Ikkinchi " +
          "xavf — " +
          "dalil " +
          "yo'qligi. " +
          "Buyurtma " +
          "sahifasi, " +
          "to'lov " +
          "tasdig'i " +
          "va " +
          "yozishmalarning " +
          "skrinshotlarini " +
          "saqlang.\n\n" +
          "Uchinchi " +
          "xavf — " +
          "to'lov " +
          "usuli. " +
          "Kuzatib " +
          "bo'lmaydigan " +
          "usullar " +
          "(shaxsiy " +
          "kartaga " +
          "to'g'ridan-to'g'ri " +
          "o'tkazma) " +
          "keyin " +
          "isbotlashni " +
          "qiyinlashtiradi.",
        example:
          "Xaridor " +
          "ijtimoiy " +
          "tarmoq " +
          "orqali " +
          "buyurtma " +
          "berdi va " +
          "shaxsiy " +
          "kartaga " +
          "pul " +
          "o'tkazdi. " +
          "Tovar " +
          "kelmadi, " +
          "sotuvchi " +
          "javob " +
          "bermay " +
          "qo'ydi. " +
          "Rekvizit " +
          "va " +
          "hujjat " +
          "bo'lmagani " +
          "uchun " +
          "da'voni " +
          "kimga " +
          "qo'yish " +
          "noaniq " +
          "bo'lib " +
          "qoldi.",
        keyPoints: [
          "Onlayn savdo qonun bilan tartibga solingan — himoya unga ham tegishli",
          "Masofadan xaridda ma'lumot berish talabi ayniqsa muhim",
          "Sotuvchining rasmiy rekvizitlarini oldindan aniqlang",
          "Buyurtma, to'lov va yozishmalarni saqlang",
        ],
        warning:
          "Faqat " +
          "ijtimoiy " +
          "tarmoq " +
          "sahifasi " +
          "bo'lgan " +
          "va " +
          "rasmiy " +
          "rekvizitlari " +
          "ko'rsatilmagan " +
          "sotuvchidan " +
          "katta " +
          "summali " +
          "xarid " +
          "qilish " +
          "jiddiy " +
          "risk.",
        lawRefs: [
          { code: "IHQ", article: "28-1" },
          { code: "IHQ", article: "6" },
          { code: "IHQ", article: "10" },
        ],
      },
      {
        heading: "Moliyaviy xizmatlar sohasida himoya",
        text:
          "Moliyaviy " +
          "xizmatlar " +
          "sohasida " +
          "iste'molchilarning " +
          "huquqlarini " +
          "himoya " +
          "qilish " +
          "alohida " +
          "moddada " +
          "belgilangan.\n\n" +
          "Bu soha " +
          "alohida " +
          "ajratilgani " +
          "tasodifiy " +
          "emas: " +
          "kredit, " +
          "omonat, " +
          "sug'urta " +
          "va " +
          "to'lov " +
          "xizmatlarida " +
          "shartnomalar " +
          "murakkab " +
          "bo'ladi " +
          "va " +
          "iste'molchi " +
          "ularni " +
          "to'liq " +
          "tushunmasligi " +
          "mumkin.\n\n" +
          "Asosiy " +
          "himoya " +
          "vositasi " +
          "yana " +
          "AXBOROT: " +
          "xizmat " +
          "shartlari, " +
          "haqiqiy " +
          "qiymati " +
          "va " +
          "risklari " +
          "haqida " +
          "to'liq " +
          "ma'lumot " +
          "berilishi " +
          "kerak.\n\n" +
          "AMALIY " +
          "SAVOLLAR " +
          "ro'yxati " +
          "(kredit " +
          "yoki " +
          "bo'lib " +
          "to'lash " +
          "olishdan " +
          "oldin):\n\n" +
          "Umumiy " +
          "to'lanadigan " +
          "summa " +
          "qancha? " +
          "Foizdan " +
          "tashqari " +
          "qanday " +
          "komissiyalar " +
          "bor? " +
          "Kechikkanda " +
          "qanday " +
          "penya " +
          "hisoblanadi? " +
          "Muddatidan " +
          "oldin " +
          "to'lash " +
          "mumkinmi " +
          "va " +
          "buning " +
          "sharti " +
          "qanday? " +
          "Ta'minot " +
          "(garov, " +
          "kafillik) " +
          "talab " +
          "qilinadimi?\n\n" +
          "Bu " +
          "savollarga " +
          "javobni " +
          "YOZMA " +
          "olish " +
          "eng " +
          "ishonchli " +
          "yo'l.\n\n" +
          "Shartnomani " +
          "imzolashdan " +
          "oldin " +
          "nusxasini " +
          "olib, " +
          "shoshilmasdan " +
          "o'qib " +
          "chiqish " +
          "huquqingiz " +
          "bor.",
        example:
          "Mijozga " +
          "«oyiga " +
          "shuncha " +
          "to'laysiz» " +
          "deyildi, " +
          "umumiy " +
          "summa " +
          "aytilmadi. " +
          "Hisoblab " +
          "ko'rilganda " +
          "u " +
          "kutilganidan " +
          "ancha " +
          "yuqori " +
          "chiqdi. " +
          "Umumiy " +
          "summani " +
          "so'rash " +
          "eng " +
          "muhim " +
          "savol.",
        keyPoints: [
          "Moliyaviy xizmatlarda iste'molchi himoyasi alohida belgilangan",
          "Asosiy himoya vositasi — to'liq axborot olish",
          "Umumiy to'lanadigan summani albatta so'rang",
          "Shartnomani imzolashdan oldin o'qib chiqish huquqingiz bor",
        ],
        warning:
          "Shartnomani " +
          "o'qimasdan " +
          "imzolash " +
          "moliyaviy " +
          "xizmatlarda " +
          "eng " +
          "qimmat " +
          "xato. " +
          "Majburiyat " +
          "uzoq " +
          "yillarga " +
          "cho'ziladi.",
        lawRefs: [
          { code: "IHQ", article: "28" },
          { code: "IHQ", article: "21" },
          { code: "FK2", article: "744" },
        ],
      },
    ],
  },
];

module.exports = { LESSONS };
