"use strict";
/** ISTE'MOLCHI MODULI — 3-DARS: KAFOLAT VA MUDDATLAR.
 *  IHQ 11, 12-1 + FK2 403–406, 411–413. */

const LESSON = {
  key: "kafolat-muddati",
  category: "consumer",
  level: "mid",
  order: 8030,
  title: "Kafolat, yaroqlilik muddati va butlik",
  desc:
    "Kafolat muddati qachondan boshlanadi, yaroqlilik muddatidan " +
    "farqi nima, but bo'lmagan tovar topshirilsa nima qilish kerak.",
  objectives: [
    "Kafolat va yaroqlilik muddatining farqini bilasiz",
    "Muddatlar qachondan boshlanishini bilasiz",
    "Kafillik majburiyatlari kimda ekanini bilasiz",
    "Butlik talabini va uni buzish oqibatini bilasiz",
  ],
  practicalSteps: [
    "Kafolat talonini xarid sanasi bilan birga saqlang",
    "Yaroqlilik muddatini xarid paytida tekshiring",
    "Tovar butligini joyida sanab qabul qiling",
    "Yetkazib berish muddati buzilsa yozma talab yozing",
  ],
  sections: [
    {
      heading: "Tovar sifatining kafolati nima",
      text:
        "KAFOLAT — sotuvchining tovar " +
        "muayyan muddat davomida " +
        "belgilangan talablarga javob " +
        "berishi haqidagi " +
        "majburiyati.\n\n" +
        "Kafolat shartnomada nazarda " +
        "tutilishi mumkin. Bunday " +
        "holda tovar topshirilgan " +
        "paytda emas, KAFOLAT MUDDATI " +
        "DAVOMIDA talablarga javob " +
        "berishi kerak.\n\n" +
        "⚠️ Kafolat bergan shaxs " +
        "ANIQLANISHI muhim: u " +
        "sotuvchi ham, ishlab " +
        "chiqaruvchi ham bo'lishi " +
        "mumkin. Iste'molchi " +
        "ikkalasidan biriga murojaat " +
        "qila oladi.\n\n" +
        "Kafolat bo'lmasa ham " +
        "iste'molchi himoyasiz " +
        "qolmaydi — u holda " +
        "kamchiliklarni aniqlashning " +
        "umumiy muddatlari " +
        "qo'llaniladi.",
      example:
        "Texnikaga bir yillik kafolat " +
        "berildi. Shu davrda nuqson " +
        "chiqsa, xaridor uning " +
        "sababini isbotlab o'tirmaydi.",
      keyPoints: [
        "Kafolat — muayyan muddatda sifatni ta'minlash majburiyati",
        "U shartnomada nazarda tutiladi",
        "Kafolat sotuvchi yoki ishlab chiqaruvchi tomonidan beriladi",
        "Kafolat bo'lmasa umumiy muddatlar qo'llaniladi",
      ],
      warning:
        "Kafolat talonini yo'qotmang " +
        "— unda kim kafolat berayotgani " +
        "yozilgan bo'ladi.",
      lawRefs: [{ code: "FK2", article: "403" }],
    },
    {
      heading: "Kafolat muddati qachondan boshlanadi",
      text:
        "Amaliyotda eng ko'p " +
        "chalkashlik shu savolda " +
        "tug'iladi.\n\n" +
        "Umumiy qoida: kafolat muddati " +
        "tovar iste'molchiga " +
        "TOPSHIRILGAN paytdan " +
        "boshlanadi.\n\n" +
        "⚠️ Ya'ni ishlab chiqarilgan " +
        "sanadan emas, do'kon " +
        "javoniga qo'yilgan kundan " +
        "emas — aynan sizga " +
        "berilgan kundan.\n\n" +
        "Tovar sotuvchining aybi bilan " +
        "ishlatib bo'lmaydigan " +
        "holatda bo'lgan davr " +
        "kafolat muddatiga " +
        "KIRMAYDI.\n\n" +
        "Shuning uchun ta'mirda " +
        "o'tgan vaqt kafolatingizni " +
        "yemaydi.",
      example:
        "Texnika ikki oy ta'mirda " +
        "turdi. Kafolat muddati shu " +
        "davrga uzayadi — chunki bu " +
        "vaqtda tovardan foydalanish " +
        "imkoni yo'q edi.",
      keyPoints: [
        "Kafolat topshirilgan paytdan boshlanadi",
        "Ishlab chiqarilgan sana asos emas",
        "Foydalanib bo'lmagan davr kafolatga kirmaydi",
        "Ta'mir vaqti kafolatni uzaytiradi",
      ],
      warning:
        "Xarid sanasi ko'rsatilmagan " +
        "kafolat taloni nizoda " +
        "sizga qarshi ishlaydi.",
      lawRefs: [{ code: "FK2", article: "404" }],
    },
    {
      heading: "Yaroqlilik muddati va uning farqi",
      text:
        "YAROQLILIK MUDDATI kafolat " +
        "muddatidan tubdan farq " +
        "qiladi va bu farqni tushunish " +
        "muhim.\n\n" +
        "KAFOLAT: shu muddat ichida " +
        "nuqson chiqsa sotuvchi javob " +
        "beradi.\n\n" +
        "YAROQLILIK: shu muddat " +
        "tugagach tovardan " +
        "foydalanish MUMKIN EMAS — u " +
        "yaroqsiz hisoblanadi.\n\n" +
        "⚠️ Yaroqlilik muddati " +
        "belgilangan tovarni bu " +
        "muddat tugagandan keyin " +
        "sotish TAQIQLANADI.\n\n" +
        "Bu qoida oziq-ovqat, dori, " +
        "kosmetika va shunga " +
        "o'xshash tovarlarga " +
        "tegishli.\n\n" +
        "Muddati o'tgan tovar sotilgan " +
        "bo'lsa — bu shunchaki nuqson " +
        "emas, ancha jiddiy " +
        "huquqbuzarlik.",
      example:
        "Do'konda yaroqlilik muddati " +
        "kecha tugagan mahsulot " +
        "sotilyapti. Bu — sotishning " +
        "taqiqlangan holati.",
      keyPoints: [
        "Kafolat va yaroqlilik muddati — turli tushunchalar",
        "Yaroqlilik tugagach tovardan foydalanib bo'lmaydi",
        "Muddati o'tgan tovarni sotish taqiqlanadi",
        "Bu jiddiy huquqbuzarlik hisoblanadi",
      ],
      warning:
        "Muddati o'tgan tovar " +
        "sotilsa nazorat organiga " +
        "murojaat qiling — bu " +
        "boshqalarni ham himoya " +
        "qiladi.",
      lawRefs: [{ code: "FK2", article: "405" }],
    },
    {
      heading: "Yaroqlilik muddatini hisoblash",
      text:
        "Yaroqlilik muddati ikki xil " +
        "usulda ko'rsatilishi " +
        "mumkin.\n\n" +
        "(1) ANIQ SANA — \"shu " +
        "sanagacha yaroqli\";\n\n" +
        "(2) DAVR — ishlab chiqarilgan " +
        "sanadan boshlab muayyan " +
        "muddat davomida yaroqli.\n\n" +
        "⚠️ Ikkinchi holatda ishlab " +
        "chiqarilgan sana " +
        "ko'rsatilishi SHART — aks " +
        "holda muddatni hisoblash " +
        "mumkin bo'lmaydi.\n\n" +
        "Kafolat muddatidan farqli " +
        "o'laroq, yaroqlilik muddati " +
        "xarid sanasidan emas, ISHLAB " +
        "CHIQARILGAN sanadan " +
        "hisoblanadi.\n\n" +
        "Shuning uchun uzoq turgan " +
        "tovarning yaroqlilik " +
        "muddati xarid paytida " +
        "allaqachon tugayotgan " +
        "bo'lishi mumkin.",
      example:
        "Mahsulotda \"6 oy yaroqli\" " +
        "deb yozilgan va ishlab " +
        "chiqarilganiga 5 oy bo'lgan. " +
        "Xaridorga atigi 1 oy qoladi.",
      keyPoints: [
        "Yaroqlilik sana yoki davr bilan ko'rsatiladi",
        "Davr ishlab chiqarilgan sanadan hisoblanadi",
        "Ishlab chiqarilgan sana ko'rsatilishi shart",
        "Xarid sanasi bu yerda ahamiyatsiz",
      ],
      warning:
        "Xarid paytida faqat " +
        "\"yaroqli\" yozuviga emas, " +
        "ishlab chiqarilgan sanaga " +
        "ham qarang.",
      lawRefs: [{ code: "FK2", article: "406" }],
    },
    {
      heading: "Ishlab chiqaruvchining kafillik majburiyatlari",
      text:
        "Iste'molchi qonuni ishlab " +
        "chiqaruvchi (ijrochi) " +
        "zimmasiga alohida KAFILLIK " +
        "majburiyatlarini yuklaydi.\n\n" +
        "Bu majburiyatlar odatda " +
        "quyidagilarni qamraydi: " +
        "tovarning belgilangan muddat " +
        "davomida ishlashini " +
        "ta'minlash; ta'mirlash va " +
        "texnik xizmat ko'rsatish " +
        "imkonini yaratish; ehtiyot " +
        "qismlar bilan " +
        "ta'minlash.\n\n" +
        "⚠️ AMALIY AHAMIYATI: " +
        "iste'molchi sotuvchi " +
        "do'konni yopib ketgan " +
        "taqdirda ham himoyasiz " +
        "qolmaydi — ishlab " +
        "chiqaruvchiga yoki uning " +
        "vakolatli xizmat markaziga " +
        "murojaat qilishi mumkin.",
      example:
        "Xaridor texnika olgan do'kon " +
        "yopilib ketdi. U ishlab " +
        "chiqaruvchining rasmiy " +
        "xizmat markaziga murojaat " +
        "qilishi mumkin.",
      keyPoints: [
        "Kafillik majburiyati ishlab chiqaruvchida ham bor",
        "U ta'mir va ehtiyot qismlarni qamraydi",
        "Sotuvchi yo'qolsa ham himoya saqlanadi",
        "Vakolatli xizmat markaziga murojaat qilinadi",
      ],
      warning:
        "Rasmiy bo'lmagan ustaxonada " +
        "ta'mirlash kafolatni " +
        "bekor qilishi mumkin.",
      lawRefs: [{ code: "IHQ", article: "11" }],
    },
    {
      heading: "Tovar haqini to'lash shakli va tartibi",
      text:
        "Iste'molchi tovar (ish, " +
        "xizmat) uchun haq to'lash " +
        "shakli va tartibi qonunda " +
        "belgilangan.\n\n" +
        "Umumiy mantiq: to'lov shakli " +
        "shartnomada kelishiladi va " +
        "sotuvchi qonun ruxsat " +
        "bergan to'lov usullarini " +
        "qabul qilishi kerak.\n\n" +
        "⚠️ Iste'molchi uchun eng " +
        "muhim jihat — TO'LOVNI " +
        "TASDIQLOVCHI HUJJAT. Chek, " +
        "kvitansiya yoki bank " +
        "ko'chirmasi keyingi barcha " +
        "talablarning asosi " +
        "bo'ladi.\n\n" +
        "Chek berilmasligi sotuvchining " +
        "huquqbuzarligi. Lekin chek " +
        "yo'qligi iste'molchini " +
        "huquqdan MAHRUM qilmaydi — " +
        "xarid boshqa dalillar " +
        "(guvoh, video, bank " +
        "ko'chirmasi) bilan ham " +
        "isbotlanishi mumkin.",
      example:
        "Xaridor chekni yo'qotdi, " +
        "lekin karta bilan to'lagan " +
        "edi. Bank ko'chirmasi xaridni " +
        "tasdiqlovchi dalil bo'ladi.",
      keyPoints: [
        "To'lov shakli va tartibi qonun bilan tartibga solinadi",
        "To'lovni tasdiqlovchi hujjat eng muhim dalil",
        "Chek bermaslik — sotuvchining huquqbuzarligi",
        "Chek yo'qolsa boshqa dalillar ham qabul qilinadi",
      ],
      warning:
        "Naqd to'lovda chek olmasangiz " +
        "xaridni isbotlash ancha " +
        "qiyinlashadi.",
      lawRefs: [{ code: "IHQ", article: "10" }],
    },
    {
      heading: "Tovarni topshirish muddati buzilganda",
      text:
        "Tovar oldindan to'landi, " +
        "lekin belgilangan muddatda " +
        "yetkazib berilmadi — bu " +
        "alohida modda bilan " +
        "tartibga solingan.\n\n" +
        "Oldi-sotdi shartnomasi " +
        "bo'yicha tovarni topshirish " +
        "muddatini buzish " +
        "iste'molchiga qo'shimcha " +
        "huquqlar beradi.\n\n" +
        "Odatiy imkoniyatlar: yangi " +
        "muddat belgilash; " +
        "shartnomani bekor qilib " +
        "oldindan to'langan summani " +
        "qaytarib olish; kechikish " +
        "uchun neustoyka talab " +
        "qilish; zararni qoplashni " +
        "talab qilish.\n\n" +
        "⚠️ Bu qoida ayniqsa buyurtma " +
        "asosidagi va onlayn " +
        "xaridlarda muhim — u yerda " +
        "pul deyarli har doim " +
        "oldindan to'lanadi.",
      example:
        "Mebel oldindan to'lab " +
        "buyurtma qilindi, lekin " +
        "va'da qilingan muddatda " +
        "yetkazilmadi. Xaridor pulni " +
        "qaytarib olishi mumkin.",
      keyPoints: [
        "Topshirish muddatini buzish alohida asos",
        "Yangi muddat belgilash yoki bekor qilish mumkin",
        "Kechikish uchun neustoyka talab qilinadi",
        "Onlayn va buyurtma xaridlarda ayniqsa muhim",
      ],
      warning:
        "Muddat buzilsa DARHOL yozma " +
        "talab yozing — kutish " +
        "\"rozilik\" deb talqin " +
        "qilinishi mumkin.",
      lawRefs: [{ code: "IHQ", article: "12-1" }],
    },
    {
      heading: "Tovarning butligi va but tovarlar",
      text:
        "BUTLIK — tovarning barcha " +
        "qismlari, aksessuarlari va " +
        "hujjatlari to'liq " +
        "bo'lishi.\n\n" +
        "Sotuvchi tovarni shartnomada " +
        "belgilangan BUTLIKDA " +
        "topshirishi shart. Shartnomada " +
        "aniq belgilanmagan bo'lsa, " +
        "odatdagi talablar " +
        "qo'llaniladi.\n\n" +
        "BUT TOVARLAR alohida " +
        "tushuncha: bir necha buyum " +
        "birgalikda bitta to'plamni " +
        "tashkil qilsa, sotuvchi " +
        "to'plamning HAMMASINI " +
        "topshirishi kerak.\n\n" +
        "⚠️ Butlikka hujjatlar ham " +
        "kiradi: foydalanish " +
        "qo'llanmasi, kafolat " +
        "taloni, sifat sertifikati. " +
        "Ular berilmasa — tovar but " +
        "topshirilmagan hisoblanadi.",
      example:
        "Texnika sotildi, lekin " +
        "quvvatlash simi va kafolat " +
        "taloni berilmadi. Tovar but " +
        "topshirilmagan.",
      keyPoints: [
        "Butlik — barcha qism va hujjatlarning to'liqligi",
        "Sotuvchi belgilangan butlikda topshirishi shart",
        "But tovarlar to'plam sifatida topshiriladi",
        "Hujjatlar ham butlikka kiradi",
      ],
      warning:
        "Tovarni joyida sanab qabul " +
        "qiling — keyinchalik " +
        "\"nimadir yo'q\" deb " +
        "isbotlash qiyin.",
      lawRefs: [
        { code: "FK2", article: "411" },
        { code: "FK2", article: "412" },
      ],
    },
    {
      heading: "But bo'lmagan tovar topshirilsa",
      text:
        "Tovar to'liq bo'lmagan holda " +
        "topshirilsa iste'molchining " +
        "aniq huquqlari yuzaga " +
        "keladi.\n\n" +
        "Odatiy imkoniyatlar: xarid " +
        "narxini mutanosib " +
        "kamaytirishni talab qilish; " +
        "tovarni oqilona muddatda " +
        "BUT holga keltirishni talab " +
        "qilish.\n\n" +
        "Sotuvchi oqilona muddatda " +
        "talabni bajarmasa, " +
        "iste'molchi: tovarni but " +
        "tovarga almashtirishni " +
        "talab qilishi yoki " +
        "shartnomani bekor qilib " +
        "pulni qaytarib olishi " +
        "mumkin.\n\n" +
        "⚠️ Ya'ni butlik buzilishi " +
        "nuqsonga TENGLASHTIRILADI " +
        "— oqibatlari deyarli bir xil.",
      example:
        "To'plamdagi buyumlardan biri " +
        "yetishmaydi. Avval to'ldirish " +
        "talab qilinadi, bajarilmasa " +
        "— shartnoma bekor qilinadi.",
      keyPoints: [
        "But bo'lmagan tovar — mustaqil asos",
        "Avval narxni kamaytirish yoki to'ldirish talab qilinadi",
        "Bajarilmasa almashtirish yoki bekor qilish mumkin",
        "Oqibatlari nuqsonli tovardagidek",
      ],
      warning:
        "Butlik talabini yozma " +
        "qo'ying va bajarish uchun " +
        "aniq muddat ko'rsating.",
      lawRefs: [{ code: "FK2", article: "413" }],
    },
  ],
};

module.exports = { LESSON };
