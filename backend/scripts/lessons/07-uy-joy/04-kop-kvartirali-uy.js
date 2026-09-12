"use strict";
/**
 * UY-JOY MODULI — 4-DARS: KO'P KVARTIRALI UY.
 * UJK 96–104 (kooperativlar) + 124–139 (umumiy mulk, to'lovlar).
 */

const LESSON = {
  key: "kop-kvartirali-uy",
  category: "housing",
  level: "mid",
  order: 7040,
  title: "Ko'p kvartirali uy va umumiy mulk",
  desc:
    "Uy-joy kooperativlari, umumiy mol-mulkka bo'lgan huquq, " +
    "ulushlarni aniqlash, saqlash xarajatlari, uy-joy " +
    "mulkdorlarining shirkati, kommunal to'lovlar va uy-joy " +
    "fondini boshqarish.",
  objectives: [
    "Uy-joy kooperativi qanday ishlashini bilasiz",
    "Umumiy mol-mulkka nima kirishini bilasiz",
    "Ulushlar qanday aniqlanishini bilasiz",
    "Xarajatlarda ishtirok etish majburiyatini bilasiz",
    "Uy-joy mulkdorlari shirkatining vazifasini bilasiz",
    "Kommunal to'lovlar tartibini bilasiz",
  ],
  practicalSteps: [
    "Shirkat umumiy yig'ilishlarida ishtirok eting va qarorlarni o'qing",
    "Kommunal to'lovlar hisob-kitobini har oy tekshirib boring",
    "Umumiy mol-mulkka oid ishlar smetasini so'rang",
    "Kooperativga kirishda ustav va pay shartlarini o'qing",
    "To'lov kvitansiyalarini kamida uch yil saqlang",
  ],
  sections: [
    {
      heading: "Uy-joy qurish va uy-joy kooperativlari",
      text:
        "UY-JOY QURISH KOOPERATIVI — a'zolari o'z mablag'larini " +
        "birlashtirib uy quradigan va keyin unda yashaydigan " +
        "tashkilot.\n\n" +
        "KIRISH HUQUQI: kooperativga kirish huquqiga ega " +
        "shaxslar doirasi qonunda belgilangan.\n\n" +
        "RO'YXATDAN O'TKAZISH: kooperativlar belgilangan " +
        "tartibda ro'yxatdan o'tkaziladi. Ro'yxatdan " +
        "o'tmagan tashkilot huquq subyekti " +
        "hisoblanmaydi.\n\n" +
        "⚠️ AMALIY OGOHLANTIRISH: kooperativga mablag' " +
        "kiritishdan oldin uning ro'yxatdan o'tganini, " +
        "yer uchastkasi va qurilish ruxsati borligini " +
        "tekshiring. Bu bosqichni o'tkazib yuborish " +
        "ko'p yo'qotishlarga sabab bo'lgan.\n\n" +
        "A'ZONING HUQUQ VA MAJBURIYATLARI: turar joydan " +
        "foydalanish, boshqaruvda ishtirok etish, pay " +
        "to'lash, xarajatlarda qatnashish.\n\n" +
        "PAYGA BO'LGAN HUQUQ: a'zoning payga bo'lgan " +
        "huquqi qonunda tartibga solingan va u meros " +
        "bo'yicha o'tishi mumkin.\n\n" +
        "⚠️ ENG MUHIM QOIDA — MULK HUQUQINING VUJUDGA " +
        "KELISHI: kooperativ a'zosida turar joyga " +
        "mulk huquqi PAY TO'LIQ TO'LANGAN paytdan " +
        "vujudga keladi.\n\n" +
        "Ya'ni pay to'liq to'langunga qadar siz " +
        "mulkdor emassiz — bu sotish va garovga " +
        "qo'yish imkonini cheklaydi.\n\n" +
        "TURAR JOYNI BO'LISH va A'ZOLIKDAN CHIQARISH " +
        "ham qonunda belgilangan asoslarda amalga " +
        "oshiriladi.",
      example:
        "Pay to'liq to'lanmagan holda turar joy " +
        "sotilmoqchi bo'ldi — mulk huquqi hali " +
        "vujudga kelmagan.",
      keyPoints: [
        "Kooperativ a'zolar mablag'i hisobidan uy quradi",
        "Kooperativ ro'yxatdan o'tkazilishi shart",
        "Mulk huquqi pay to'liq to'langanda vujudga keladi",
        "Payga bo'lgan huquq meros bo'yicha o'tadi",
      ],
      warning:
        "Ro'yxatdan o'tmagan tashkilotga mablag' " +
        "kiritish — eng katta xavf.",
      lawRefs: [
        { code: "UJK", article: "96" },
        { code: "UJK", article: "97" },
        { code: "UJK", article: "98" },
        { code: "UJK", article: "99" },
        { code: "UJK", article: "100" },
        { code: "UJK", article: "101" },
        { code: "UJK", article: "102" },
        { code: "UJK", article: "103" },
        { code: "UJK", article: "104" },
      ],
    },
    {
      heading: "Umumiy mol-mulkka bo'lgan huquq",
      text:
        "Turar joylar va yashash uchun mo'ljallanmagan joylar " +
        "mulkdorlari ko'p kvartirali uydagi UMUMIY " +
        "MOL-MULKKA bo'lgan huquqqa ega.\n\n" +
        "UMUMIY MOL-MULKKA NIMA KIRADI: zinapoyalar, " +
        "liftlar, koridorlar, tomlar, poydevor, " +
        "ko'taruvchi konstruksiyalar, muhandislik " +
        "jihozlari, uyga xizmat qiluvchi boshqa " +
        "obyektlar va uy joylashgan yer uchastkasi.\n\n" +
        "⚠️ ULUSHLARNI ANIQLASH: umumiy mol-mulkka " +
        "bo'lgan mulk huquqidagi ulush odatda " +
        "mulkdorga tegishli joyning MAYDONIGA " +
        "mutanosib ravishda aniqlanadi.\n\n" +
        "Ya'ni katta kvartira egasining ulushi " +
        "kattaroq bo'ladi — va shunga mos ravishda " +
        "xarajati ham.\n\n" +
        "AMALGA OSHIRISH: umumiy mol-mulkka bo'lgan " +
        "mulk huquqi qonunda belgilangan tartibda " +
        "amalga oshiriladi.\n\n" +
        "⚠️ ENG MUHIM CHEKLOV: umumiy mol-mulkdagi " +
        "ulushni kvartiradan ALOHIDA sotib, hadya " +
        "qilib yoki boshqa yo'l bilan ajratib " +
        "bo'lmaydi.\n\n" +
        "Ulush kvartiraning taqdiriga ergashadi: " +
        "kvartira sotilganda ulush ham avtomatik " +
        "o'tadi.\n\n" +
        "AMALIY OQIBAT: zinapoyaning bir qismini, " +
        "podvalni yoki tomni \"sotib olish\" " +
        "mumkin emas. Bunday bitimlar haqiqiy " +
        "emas deb topiladi.\n\n" +
        "Shuningdek umumiy joylarni " +
        "o'zboshimchalik bilan egallash (masalan " +
        "koridorni to'sib olish) boshqa " +
        "mulkdorlar huquqini buzish hisoblanadi.",
      example:
        "Umumiy koridorning bir qismi to'sib olindi — " +
        "boshqa mulkdorlar uni bo'shatishni talab " +
        "qilishi mumkin.",
      keyPoints: [
        "Umumiy mol-mulk barcha mulkdorlarga tegishli",
        "Ulush joy maydoniga mutanosib aniqlanadi",
        "Ulushni alohida sotib bo'lmaydi",
        "Umumiy joylarni egallash huquqbuzarlik",
      ],
      warning:
        "Umumiy joylarga ruxsatsiz o'zgartirish " +
        "kiritish tiklash talabiga olib keladi.",
      lawRefs: [
        { code: "UJK", article: "124" },
        { code: "UJK", article: "125" },
        { code: "UJK", article: "127" },
      ],
    },
    {
      heading: "Saqlash xarajatlarida ishtirok etish",
      text:
        "Har bir mulkdor ko'p kvartirali uydagi umumiy " +
        "mol-mulkni saqlash bo'yicha UMUMIY " +
        "XARAJATLARDA ishtirok etishi SHART.\n\n" +
        "Xarajatlar odatda umumiy mol-mulkdagi ULUSHGA " +
        "mutanosib ravishda taqsimlanadi.\n\n" +
        "⚠️ ENG KENG TARQALGAN E'TIROZ VA U ISHLAMAYDI: " +
        "\"men liftdan foydalanmayman\", \"men birinchi " +
        "qavatdaman\", \"men u yerda yashamayman\" — " +
        "bunday sabablar to'lovdan ozod qilmaydi.\n\n" +
        "SABABI: bu FOYDALANISH uchun emas, umumiy " +
        "mol-mulkni SAQLASH uchun to'lov. Tom, " +
        "poydevor va konstruksiyalar hammaning " +
        "manfaatiga xizmat qiladi.\n\n" +
        "XARAJATLAR TARKIBI: turar joylarni, yashash " +
        "uchun mo'ljallanmagan joylarni va umumiy " +
        "mol-mulkni saqlash xarajatlari.\n\n" +
        "KOMMUNAL XIZMATLAR uchun MAJBURIY TO'LOVLAR " +
        "ham alohida belgilangan.\n\n" +
        "MUDDATLAR: to'lovlar qonunda yoki " +
        "shartnomada belgilangan muddatlarda amalga " +
        "oshiriladi. Kechiktirilsa penya hisoblanishi " +
        "mumkin.\n\n" +
        "IJTIMOIY QO'LLAB-QUVVATLASH: aholining " +
        "ijtimoiy jihatdan himoyalanmagan va kam " +
        "ta'minlangan toifalari uchun qo'llab-" +
        "quvvatlash choralari nazarda tutilgan.\n\n" +
        "AMALIY MASLAHAT: to'lovga qiynalayotgan " +
        "bo'lsangiz, qarz to'planishini kutmang — " +
        "imtiyoz yoki subsidiya olish imkonini " +
        "tekshiring va to'lov jadvalini kelishing.",
      example:
        "Birinchi qavat mulkdori lift to'lovidan bosh " +
        "tortdi — bu sabab qabul qilinmaydi.",
      keyPoints: [
        "Xarajatlarda ishtirok etish majburiy",
        "Ular ulushga mutanosib taqsimlanadi",
        "Foydalanmaslik to'lovdan ozod qilmaydi",
        "Kam ta'minlanganlar uchun qo'llab-quvvatlash bor",
      ],
      warning:
        "Qarz to'planishi undiruv va sud jarayoniga " +
        "olib keladi.",
      lawRefs: [
        { code: "UJK", article: "126" },
        { code: "UJK", article: "132" },
        { code: "UJK", article: "133" },
        { code: "UJK", article: "134" },
        { code: "UJK", article: "135" },
        { code: "UJK", article: "136" },
      ],
    },
    {
      heading: "Uy-joy mulkdorlarining shirkati",
      text:
        "UY-JOY MULKDORLARINING SHIRKATI — ko'p kvartirali " +
        "uydagi mulkdorlar tomonidan umumiy mol-mulkni " +
        "birgalikda boshqarish uchun tashkil " +
        "etiladigan tashkilot.\n\n" +
        "⚠️ NIMA UCHUN KERAK: umumiy mol-mulk " +
        "hammaniki — demak uni saqlash bo'yicha " +
        "qarorlar ham birgalikda qabul qilinishi " +
        "kerak. Shirkat aynan shu mexanizmni " +
        "beradi.\n\n" +
        "Shirkatsiz har bir masala (tomni ta'mirlash, " +
        "hovlini obodonlashtirish, xizmat " +
        "ko'rsatuvchini tanlash) hal qilinmay " +
        "qolardi.\n\n" +
        "VAZIFALARI: umumiy mol-mulkni saqlash va " +
        "ta'mirlashni tashkil etish; xizmat " +
        "ko'rsatuvchi tashkilotlar bilan shartnoma " +
        "tuzish; to'lovlarni yig'ish va " +
        "hisob-kitob yuritish; mulkdorlar " +
        "manfaatlarini ifodalash.\n\n" +
        "MULKDOR SIFATIDA SIZNING HUQUQINGIZ: " +
        "umumiy yig'ilishda ishtirok etish va ovoz " +
        "berish; shirkat hujjatlari va moliyaviy " +
        "hisobotlari bilan tanishish; qarorlar " +
        "ustidan shikoyat qilish.\n\n" +
        "⚠️ AMALIY XULOSA: yig'ilishlarda ishtirok " +
        "etmaslik — eng keng tarqalgan xato. " +
        "Qarorlar sizsiz qabul qilinadi, lekin " +
        "to'lov majburiyati sizga ham " +
        "tegishli bo'ladi.\n\n" +
        "Katta xarajat talab qiladigan ishlar " +
        "bo'yicha SMETA so'rash va uni tekshirish " +
        "huquqingiz bor.",
      example:
        "Yig'ilishda katta ta'mir bo'yicha qaror " +
        "qabul qilindi — ishtirok etmagan mulkdor " +
        "ham to'laydi.",
      keyPoints: [
        "Shirkat umumiy mol-mulkni boshqaradi",
        "U shartnoma tuzadi va to'lovlarni yig'adi",
        "Mulkdor yig'ilishda ovoz berishga haqli",
        "Hisobot va smeta bilan tanishish huquqi bor",
      ],
      warning:
        "Yig'ilishda qatnashmaslik qaror sizga " +
        "tegishli emasligini anglatmaydi.",
      lawRefs: [{ code: "UJK", article: "128" }],
    },
    {
      heading: "Turar joy va kommunal xizmatlar haqini to'lash",
      text:
        "To'lov tartibi turar joyning qaysi fondga " +
        "tegishli ekaniga qarab farq qiladi.\n\n" +
        "MUNITSIPAL VA IDORAVIY UY-JOY FONDI uylaridagi " +
        "turar joylar haqi ijaraga berish shartnomasi " +
        "bo'yicha to'lanadi.\n\n" +
        "ANIQ MAQSADLI KOMMUNAL UY-JOY FONDIDAGI " +
        "turar joylar haqi ham alohida tartibda " +
        "to'lanadi.\n\n" +
        "YOTOQXONALARDA yashaganlik uchun haq olish " +
        "tartibi qonunda belgilangan.\n\n" +
        "⚠️ KOMMUNAL XIZMATLAR uchun to'lovlar " +
        "MAJBURIY hisoblanadi va ular haqiqatda " +
        "iste'mol qilingan hajm bo'yicha (hisoblash " +
        "asboblari bo'lsa) yoki belgilangan normalar " +
        "bo'yicha hisoblanadi.\n\n" +
        "AMALIY MASLAHAT: hisoblash asbobini " +
        "o'rnatish odatda foydali — normativ " +
        "bo'yicha to'lov ko'pincha haqiqiy " +
        "iste'moldan yuqori bo'ladi.\n\n" +
        "MUDDATLAR: to'lovlar belgilangan muddatlarda " +
        "amalga oshiriladi. Kechikish uchun " +
        "javobgarlik yuzaga keladi.\n\n" +
        "XARAJATLARNI QOPLASH: uy-joyni saqlash va " +
        "kommunal xizmatlar haqini to'lash " +
        "xarajatlarini qoplash tartibi qonunda " +
        "belgilangan.\n\n" +
        "⚠️ HISOB-KITOBNI TEKSHIRING: xato " +
        "hisoblangan to'lov holatlari kam emas. " +
        "Kvitansiyada tarif, hajm va davr to'g'ri " +
        "ko'rsatilganini tekshiring; shubha " +
        "bo'lsa yozma qayta hisoblash so'rang.",
      example:
        "Kommunal to'lov normativ bo'yicha " +
        "hisoblanardi — hisoblash asbobi " +
        "o'rnatilgach to'lov kamaydi.",
      keyPoints: [
        "To'lov tartibi fond turiga qarab farq qiladi",
        "Kommunal to'lovlar majburiy",
        "Hisoblash asbobi to'lovni aniqroq qiladi",
        "Kvitansiyani tekshirib borish foydali",
      ],
      warning:
        "Xato hisob-kitobni yozma nizolashtirmasangiz " +
        "u qarz sifatida to'planib boradi.",
      lawRefs: [
        { code: "UJK", article: "129" },
        { code: "UJK", article: "130" },
        { code: "UJK", article: "131" },
      ],
    },
    {
      heading: "Uy-joy fondini boshqarish va nizolarni hal etish",
      text:
        "UY-JOY FONDINI SAQLASH FAOLIYATI — uyni texnik " +
        "jihatdan soz holatda ushlab turish bo'yicha " +
        "ishlar majmui.\n\n" +
        "BOSHQARISH: uy-joy fondini boshqarish qonunda " +
        "belgilangan tartibda amalga oshiriladi va u " +
        "mulkdorlar tanlagan usul orqali yuritilishi " +
        "mumkin.\n\n" +
        "SHARTNOMALAR: uy-joy fondini boshqarish, unga " +
        "xizmat ko'rsatish va uni ta'mirlash " +
        "shartnomalari tuziladi.\n\n" +
        "⚠️ AMALIY XULOSA: xizmat ko'rsatuvchi " +
        "tashkilot bilan munosabat SHARTNOMAGA " +
        "asoslanadi. Ya'ni ular \"nimani qilishi " +
        "kerakligi\" og'zaki emas, hujjatda " +
        "yozilgan.\n\n" +
        "Xizmat sifatsiz bo'lsa, avval SHARTNOMANI " +
        "o'qing va unda qanday majburiyat " +
        "olinganini aniqlang. Talab aynan shu " +
        "bandlarga tayanishi kerak.\n\n" +
        "NIZOLARNI HAL ETISH: uy-joyga oid nizolar " +
        "qonunda belgilangan tartibda, jumladan " +
        "SUD orqali hal etiladi.\n\n" +
        "JAVOBGARLIK: uy-joy to'g'risidagi " +
        "qonunchilikni buzganlik uchun javobgarlik " +
        "belgilangan.\n\n" +
        "AMALIY QADAM: nizo yuzaga kelganda " +
        "ketma-ketlik shunday bo'ladi — (1) " +
        "buzilishni qayd eting (foto, " +
        "dalolatnoma); (2) xizmat ko'rsatuvchiga " +
        "yozma murojaat qiling; (3) javob " +
        "bo'lmasa nazorat organiga; (4) natija " +
        "bo'lmasa sudga.\n\n" +
        "Har bir bosqichda hujjat nusxasini " +
        "saqlang — sudda aynan ular hal qiluvchi " +
        "bo'ladi.",
      example:
        "Uy uzoq vaqt ta'mirlanmadi — yashovchilar " +
        "yozma murojaatlar bilan talabni " +
        "asoslashi mumkin.",
      keyPoints: [
        "Boshqaruv va xizmat shartnoma asosida yuritiladi",
        "Talab shartnoma bandlariga tayanishi kerak",
        "Nizolar sud orqali ham hal etiladi",
        "Har bir bosqichda hujjatni saqlang",
      ],
      warning:
        "Yozma murojaatsiz sudga borish — dalil " +
        "bazasiz borish demakdir.",
      lawRefs: [
        { code: "UJK", article: "137" },
        { code: "UJK", article: "138" },
        { code: "UJK", article: "139" },
        { code: "UJK", article: "140" },
        { code: "UJK", article: "141" },
      ],
    },
  ],
};

module.exports = { LESSON };
