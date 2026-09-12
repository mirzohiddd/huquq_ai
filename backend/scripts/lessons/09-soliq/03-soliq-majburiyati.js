"use strict";
/** SOLIQ MODULI — 3-DARS: SOLIQ MAJBURIYATI. SK 85–105. */

const LESSON = {
  key: "soliq-majburiyati",
  category: "tax",
  level: "mid",
  order: 9030,
  title: "Soliq majburiyati: bajarish, muddat va qarz",
  desc:
    "Soliq majburiyati qachon yuzaga keladi va tugaydi, uni " +
    "bajarish tartibi, da'vo muddatlari, muddatni o'zgartirish " +
    "hamda ortiqcha to'langan soliqni qaytarish.",
  objectives: [
    "Soliq majburiyati qachon bajarilgan hisoblanishini bilasiz",
    "Majburiyat tugash asoslarini bilasiz",
    "Soliq bo'yicha da'vo muddatlarini bilasiz",
    "To'lash muddatini kechiktirish imkonini bilasiz",
    "Ortiqcha to'langan soliqni qaytarish tartibini bilasiz",
    "Vafot va qayta tashkil etishda majburiyat taqdirini bilasiz",
  ],
  practicalSteps: [
    "To'lov topshiriqnomasida rekvizitlarni ikki marta tekshiring",
    "Moliyaviy qiyinchilikda kechiktirish yoki bo'lib to'lashni so'rang",
    "Ortiqcha to'langan summani hisobga olish yoki qaytarishni talab qiling",
    "Hisob-kitob solishtiruvini har chorakda amalga oshiring",
    "To'lov hujjatlarini muddat davomida saqlang",
  ],
  sections: [
    {
      heading: "Soliq majburiyati va uni bajarish",
      text:
        "SOLIQ MAJBURIYATI — soliq to'lovchining qonunga " +
        "muvofiq soliq to'lash majburiyati.\n\n" +
        "U soliq solish obyekti yuzaga kelgan paytdan " +
        "boshlanadi.\n\n" +
        "BAJARISH TARTIBI va MUDDATI kodeksda hamda " +
        "har bir soliq bo'yicha alohida " +
        "belgilangan.\n\n" +
        "⚠️ ENG MUHIM AMALIY SAVOL — MAJBURIYAT " +
        "QACHON BAJARILGAN HISOBLANADI:\n\n" +
        "Umumiy qoida bo'yicha soliq to'lov " +
        "topshiriqnomasi bankka taqdim etilgan va " +
        "hisobvaraqda yetarli mablag' bo'lgan " +
        "paytdan to'langan hisoblanadi.\n\n" +
        "Ya'ni bank pulni kechiktirsa ham, siz " +
        "majburiyatni bajargan bo'lasiz.\n\n" +
        "LEKIN ISTISNO BOR: agar to'lov " +
        "topshiriqnomasida REKVIZITLAR noto'g'ri " +
        "ko'rsatilgan bo'lsa va pul budjetga " +
        "tushmasa, majburiyat bajarilmagan " +
        "hisoblanadi.\n\n" +
        "AMALIY XULOSA: to'lov " +
        "topshiriqnomasidagi rekvizitlarni " +
        "(hisob raqami, byudjet tasnifi kodi) " +
        "har doim tekshiring. Xato rekvizit — " +
        "to'lov qilingan, lekin qarz " +
        "hisoblanadigan holatning asosiy " +
        "sababi.\n\n" +
        "BANKLARNING MAJBURIYATI: banklar soliq " +
        "to'lash topshiriqnomalarini " +
        "belgilangan muddatda bajarishi shart.\n\n" +
        "MAJBURIYATNING TUGATILISHI asoslari: " +
        "soliqning to'lanishi; jismoniy " +
        "shaxsning vafoti (qonunda " +
        "ko'rsatilgan doirada); yuridik " +
        "shaxsning tugatilishi; qonunda " +
        "nazarda tutilgan boshqa holatlar.",
      example:
        "To'lov noto'g'ri rekvizit bilan amalga " +
        "oshirildi — pul budjetga tushmadi va " +
        "qarz saqlanib qoldi.",
      keyPoints: [
        "Majburiyat soliq obyekti yuzaga kelganda boshlanadi",
        "To'lov topshiriqnoma bankka berilganda bajarilgan hisoblanadi",
        "Noto'g'ri rekvizit majburiyatni bajarilmagan qiladi",
        "Majburiyat qonuniy asoslarda tugatiladi",
      ],
      warning:
        "Rekvizitdagi kichik xato — to'lovni " +
        "yo'qotish demakdir.",
      lawRefs: [
        { code: "SK", article: "85" },
        { code: "SK", article: "86" },
        { code: "SK", article: "87" },
        { code: "SK", article: "89" },
        { code: "SK", article: "90" },
      ],
    },
    {
      heading: "Soliq bo'yicha da'vo muddatlari",
      text:
        "Bu — soliq to'lovchi uchun juda muhim, lekin " +
        "kam ma'lum himoya.\n\n" +
        "SOLIQ MAJBURIYATI BO'YICHA DA'VO MUDDATLARI " +
        "kodeksda belgilangan.\n\n" +
        "⚠️ MOHIYATI: soliq organi cheksiz vaqt " +
        "davomida o'tgan davrlar uchun soliq " +
        "hisoblab, undirishga haqli emas.\n\n" +
        "Belgilangan muddat o'tgach, soliq " +
        "majburiyatini aniqlash va undirish " +
        "imkoni yo'qoladi.\n\n" +
        "BU IKKI TOMONLAMA ISHLAYDI: soliq " +
        "to'lovchi ham ortiqcha to'langan " +
        "summani belgilangan muddat ichida " +
        "talab qilishi kerak.\n\n" +
        "AMALIY XULOSA: sizga bir necha yil " +
        "oldingi davr uchun soliq hisoblangan " +
        "bo'lsa, birinchi savol — da'vo " +
        "muddati o'tmaganmi.\n\n" +
        "Bu e'tirozning eng samarali " +
        "asoslaridan biri va u ko'pincha " +
        "ishlatilmaydi.\n\n" +
        "UNDIRISHNI UMIDSIZ DEB E'TIROF " +
        "ETISH: qonunda nazarda tutilgan " +
        "hollarda soliq qarzining undirilishi " +
        "umidsiz deb topilishi va hisobdan " +
        "chiqarilishi mumkin.\n\n" +
        "Bu odatda undirish imkoni " +
        "butunlay yo'qolganda (tugatish, " +
        "vafot, muddat o'tishi) " +
        "qo'llaniladi.\n\n" +
        "AMALIY QADAM: soliq talabnomasi " +
        "kelganda undagi DAVRLARNI aniq " +
        "ko'ring va har biri bo'yicha " +
        "muddatni hisoblang.",
      example:
        "Bir necha yil oldingi davr uchun soliq " +
        "hisoblandi — muddat o'tgani e'tiroz " +
        "asosi bo'lishi mumkin.",
      keyPoints: [
        "Soliq majburiyati bo'yicha da'vo muddatlari mavjud",
        "Muddat o'tgach undirish imkoni yo'qoladi",
        "Qoida soliq to'lovchiga ham qo'llaniladi",
        "Undirish umidsiz deb topilishi mumkin",
      ],
      warning:
        "Muddat e'tirozini bildirmasangiz sud uni " +
        "o'zi hisobga olmasligi mumkin.",
      lawRefs: [
        { code: "SK", article: "88" },
        { code: "SK", article: "96" },
      ],
    },
    {
      heading: "Maxsus holatlarda majburiyatni bajarish",
      text:
        "Ayrim holatlarda soliq majburiyatini kim " +
        "bajarishi alohida belgilangan.\n\n" +
        "YURIDIK SHAXS TUGATILGANDA: majburiyat " +
        "tugatish komissiyasi tomonidan " +
        "tashkilotning mablag'lari hisobidan " +
        "bajariladi.\n\n" +
        "⚠️ AMALIY XULOSA: tashkilotni tugatishdan " +
        "oldin soliq qarzlarini yopish kerak — " +
        "aks holda tugatish jarayoni to'xtaydi.\n\n" +
        "YURIDIK SHAXS QAYTA TASHKIL ETILGANDA: " +
        "majburiyat HUQUQIY VORISGA o'tadi.\n\n" +
        "Ya'ni qayta tashkil etish soliq " +
        "qarzidan qutulish yo'li emas.\n\n" +
        "ISHONCHLI BOSHQARUV: mol-mulkni " +
        "ishonchli boshqaruvga berishda soliq " +
        "majburiyatini bajarish tartibi " +
        "alohida belgilangan.\n\n" +
        "JISMONIY SHAXS VAFOT ETGANDA yoki " +
        "vafot etgan deb e'lon qilinganda " +
        "majburiyat qonunda belgilangan " +
        "doirada MEROSXO'RLAR tomonidan " +
        "bajariladi.\n\n" +
        "⚠️ MEROSXO'R UCHUN MUHIM: meros " +
        "qabul qilishdan oldin " +
        "qoldiruvchining soliq qarzlarini " +
        "aniqlang. Qarz meros qiymatidan " +
        "oshsa, merosni qabul qilmaslik " +
        "mantiqiyroq bo'lishi mumkin.\n\n" +
        "BEDARAK YO'QOLGAN yoki MUOMALAGA " +
        "LAYOQATSIZ deb topilgan jismoniy " +
        "shaxsning majburiyati ham alohida " +
        "tartibda — mol-mulkni boshqarishga " +
        "vakolatli shaxs tomonidan " +
        "bajariladi.",
      example:
        "Tashkilot qayta tashkil etildi — soliq " +
        "qarzi huquqiy vorisga o'tdi.",
      keyPoints: [
        "Tugatishda majburiyat tashkilot mablag'idan bajariladi",
        "Qayta tashkil etishda voris javob beradi",
        "Vafot etganda merosxo'rlar qonuniy doirada bajaradi",
        "Meros qabul qilishdan oldin qarzni aniqlang",
      ],
      warning:
        "Qayta tashkil etish soliq qarzini bekor " +
        "qilmaydi.",
      lawRefs: [
        { code: "SK", article: "91" },
        { code: "SK", article: "92" },
        { code: "SK", article: "93" },
        { code: "SK", article: "94" },
        { code: "SK", article: "95" },
      ],
    },
    {
      heading: "To'lash muddatini o'zgartirish",
      text:
        "Bu — moliyaviy qiyinchilikka tushgan soliq " +
        "to'lovchi uchun eng foydali mexanizm.\n\n" +
        "Soliqlarni to'lash muddatlari " +
        "O'ZGARTIRILISHI mumkin: KECHIKTIRISH " +
        "yoki BO'LIB-BO'LIB TO'LASH shaklida.\n\n" +
        "⚠️ NIMA UCHUN BU MUHIM: muddatni " +
        "o'zgartirish rasman rasmiylashtirilsa, " +
        "bu davrda penya hisoblanmasligi yoki " +
        "kamayishi mumkin va undiruv choralari " +
        "qo'llanilmaydi.\n\n" +
        "Ya'ni to'lay olmayotgan bo'lsangiz, " +
        "JIM QOLISH eng yomon variant. Rasmiy " +
        "murojaat esa holatni sezilarli " +
        "yengillashtiradi.\n\n" +
        "SHARTLARI: qonunda kechiktirish yoki " +
        "bo'lib to'lash beriladigan asoslar " +
        "belgilangan — odatda vaqtinchalik " +
        "moliyaviy qiyinchilik, favqulodda " +
        "holat, mavsumiy faoliyat va shu " +
        "kabilar.\n\n" +
        "ISTISNO HOLATLAR: muddatni " +
        "o'zgartirishni ISTISNO etadigan " +
        "holatlar ham belgilangan — masalan " +
        "shaxsga nisbatan soliq " +
        "qonunbuzarligi bo'yicha ish " +
        "yuritilayotgan bo'lsa.\n\n" +
        "VAKOLATLI ORGANLAR: qaror qabul " +
        "qilishga vakolatli organlar " +
        "kodeksda ko'rsatilgan.\n\n" +
        "TUGATILISHI: berilgan kechiktirish " +
        "yoki bo'lib to'lash shartlari " +
        "buzilsa, u tugatiladi va butun " +
        "summa darhol undiriladi.\n\n" +
        "AMALIY MASLAHAT: murojaatni " +
        "qarz to'planishidan OLDIN qiling " +
        "va unga moliyaviy holatingizni " +
        "tasdiqlovchi hujjatlarni ilova " +
        "qiling.",
      example:
        "Vaqtinchalik qiyinchilikda bo'lib " +
        "to'lash rasmiylashtirildi — undiruv " +
        "choralari qo'llanilmadi.",
      keyPoints: [
        "Muddat kechiktirish yoki bo'lib to'lash bilan o'zgartiriladi",
        "Bu davrda undiruv choralari qo'llanilmaydi",
        "Istisno holatlar qonunda belgilangan",
        "Shartlar buzilsa summa darhol undiriladi",
      ],
      warning:
        "To'lay olmasangiz jim qolish — eng " +
        "qimmat qaror.",
      lawRefs: [
        { code: "SK", article: "97" },
        { code: "SK", article: "98" },
        { code: "SK", article: "99" },
        { code: "SK", article: "100" },
        { code: "SK", article: "101" },
        { code: "SK", article: "102" },
      ],
    },
    {
      heading: "Ortiqcha to'langan soliqni qaytarish",
      text:
        "Ortiqcha to'lash yoki ortiqcha undirish " +
        "holatlari amalda ko'p uchraydi va bu " +
        "summalar QAYTARILADI.\n\n" +
        "IKKI HOLAT AJRATILADI:\n\n" +
        "ORTIQCHA TO'LANGAN soliq — siz o'zingiz " +
        "keragidan ko'p to'lagansiz (masalan " +
        "hisobda xato yoki ikki marta " +
        "to'lov).\n\n" +
        "ORTIQCHA UNDIRILGAN soliq — soliq " +
        "organi keragidan ko'p undirgan " +
        "(masalan noto'g'ri hisoblash " +
        "natijasida).\n\n" +
        "⚠️ FARQ MUHIM: ortiqcha UNDIRILGAN " +
        "summa qaytarilganda qonunda nazarda " +
        "tutilgan hollarda FOIZLAR ham " +
        "to'lanishi mumkin — chunki bu soliq " +
        "organining xatosi.\n\n" +
        "IKKI IMKONIYAT: summani KELGUSI " +
        "to'lovlar hisobiga o'tkazish " +
        "(hisobga olish) yoki hisobvaraqqa " +
        "QAYTARISH.\n\n" +
        "Hisobga olish odatda tezroq va " +
        "osonroq; qaytarish esa mablag' " +
        "kerak bo'lganda mantiqiy.\n\n" +
        "TARTIB: ariza asosida amalga " +
        "oshiriladi. Ariza belgilangan " +
        "muddatda berilishi kerak.\n\n" +
        "⚠️ AMALIY QOIDA: soliq organi " +
        "ortiqcha to'lovni O'ZI qaytarmaydi " +
        "— buning uchun ARIZA berish " +
        "kerak.\n\n" +
        "Shuning uchun hisob-kitob " +
        "solishtiruvini muntazam (masalan " +
        "har chorakda) amalga oshiring. " +
        "Ko'p soliq to'lovchilarda yillar " +
        "davomida qaytarilmagan ortiqcha " +
        "summalar to'planib qoladi.\n\n" +
        "Qarz bo'lsa, ortiqcha summa avval " +
        "qarzni qoplashga yo'naltirilishi " +
        "mumkin.",
      example:
        "Soliq ikki marta to'landi — ariza " +
        "berilmagani sababli summa yillar " +
        "davomida qaytarilmadi.",
      keyPoints: [
        "Ortiqcha to'langan va undirilgan summa qaytariladi",
        "Ortiqcha undirilganda foizlar to'lanishi mumkin",
        "Hisobga olish yoki qaytarishni tanlash mumkin",
        "Buning uchun ariza berish shart",
      ],
      warning:
        "Ariza bermasangiz ortiqcha summa " +
        "hisobingizda \"o'lik\" bo'lib qoladi.",
      lawRefs: [
        { code: "SK", article: "103" },
        { code: "SK", article: "104" },
        { code: "SK", article: "105" },
      ],
    },
  ],
};

module.exports = { LESSON };
