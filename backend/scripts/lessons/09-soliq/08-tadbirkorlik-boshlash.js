"use strict";
/**
 * SOLIQ MODULI — 8-DARS: TADBIRKORLIKNI BOSHLASH.
 * SK 461–470 (aylanmadan olinadigan soliq) + 402–409 (ijtimoiy soliq)
 * + 471–480 (alohida toifalar).
 */

const LESSON = {
  key: "tadbirkorlik-boshlash",
  category: "tax",
  level: "mid",
  order: 9080,
  title: "Tadbirkorlikni boshlash: shakl tanlash",
  desc:
    "Tadbirkorlik shakllari va ularning soliq oqibatlari, aylanmadan " +
    "olinadigan soliq, ijtimoiy soliq, investitsiya va maxsus " +
    "iqtisodiy zonalar imtiyozlari hamda alohida kasb egalariga " +
    "soliq solish.",
  objectives: [
    "Tadbirkorlik shakllari soliq jihatidan qanday farq qilishini bilasiz",
    "Aylanmadan olinadigan soliq shartlarini bilasiz",
    "Uni qachon tanlash foydali ekanini bilasiz",
    "Ijtimoiy soliq nima ekanini bilasiz",
    "Investitsiya imtiyozlarini bilasiz",
    "Alohida kasb egalariga soliq solishni bilasiz",
  ],
  practicalSteps: [
    "Faoliyat boshlashdan oldin ikkala soliq rejimi bo'yicha hisob qiling",
    "Daromad chegarasiga yaqinlashsangiz rejim o'zgarishiga tayyorlaning",
    "Xodim olishdan oldin ijtimoiy soliq yukini hisoblang",
    "Faoliyatingizga tegishli imtiyozlar ro'yxatini aniqlang",
    "Alohida hisob yuritish talab qilinishini tekshiring",
  ],
  sections: [
    {
      heading: "Tadbirkorlik shakli va soliq oqibatlari",
      text:
        "Tadbirkorlikni boshlashdan oldin SHAKL " +
        "tanlanadi va bu tanlov soliq yukiga " +
        "bevosita ta'sir qiladi.\n\n" +
        "YAKKA TARTIBDAGI TADBIRKOR: eng oddiy " +
        "shakl, ro'yxatdan o'tish tez va arzon.\n\n" +
        "⚠️ LEKIN JAVOBGARLIK CHEKSIZ: u barcha " +
        "mol-mulki bilan javob beradi. Ya'ni " +
        "biznes qarzi uchun shaxsiy mol-mulk " +
        "ham javob beradi.\n\n" +
        "YURIDIK SHAXS (masalan MCHJ): " +
        "ro'yxatdan o'tish murakkabroq, hisob " +
        "yuritish talablari qattiqroq.\n\n" +
        "AFZALLIGI: ta'sischi odatda faqat " +
        "qo'shgan hissasi doirasida xavf " +
        "ko'taradi.\n\n" +
        "SOLIQ JIHATIDAN FARQ: yakka " +
        "tartibdagi tadbirkor va yuridik " +
        "shaxs uchun soliq bazasini aniqlash " +
        "hamda qo'llaniladigan rejimlar " +
        "farq qilishi mumkin.\n\n" +
        "O'ZINI O'ZI BAND QILGAN SHAXSLAR " +
        "uchun ham alohida qoidalar " +
        "belgilangan — bu eng soddalashtirilgan " +
        "shakl.\n\n" +
        "AMALIY XULOSA: shakl tanlashda " +
        "uchta savolga javob bering:\n\n" +
        "(1) Qanday xavf bor? Xavf yuqori " +
        "bo'lsa — yuridik shaxs.\n\n" +
        "(2) Aylanma qancha bo'ladi? " +
        "Katta bo'lsa — umumiy rejim va " +
        "yuridik shaxs.\n\n" +
        "(3) Xodim olasizmi? Olsangiz — " +
        "ijtimoiy soliq va mehnat " +
        "munosabatlari yuki qo'shiladi.",
      example:
        "Yakka tartibdagi tadbirkor katta " +
        "qarzga tushdi — shaxsiy mol-mulki " +
        "ham javob berdi.",
      keyPoints: [
        "Shakl tanlash soliq yukiga ta'sir qiladi",
        "Yakka tartibdagi tadbirkorda javobgarlik cheksiz",
        "Yuridik shaxsda javobgarlik odatda cheklangan",
        "Xavf, aylanma va xodim savoli tanlovni belgilaydi",
      ],
      warning:
        "Shaklni faqat ro'yxatdan o'tish " +
        "qulayligiga qarab tanlash — keyingi " +
        "muammolarning sababi.",
      lawRefs: [
        { code: "SK", article: "31" },
        { code: "SK", article: "32" },
      ],
    },
    {
      heading: "Aylanmadan olinadigan soliq",
      text:
        "AYLANMADAN OLINADIGAN SOLIQ — kichik " +
        "biznes uchun asosiy maxsus rejim.\n\n" +
        "SOLIQ TO'LOVCHILAR: soliq davrida jami " +
        "daromadi qonunda belgilangan " +
        "chegaradan oshmagan soliq " +
        "to'lovchilar.\n\n" +
        "⚠️ CHEGARA MASALASI AMALDA JUDA " +
        "MUHIM: daromad chegaradan oshsa, " +
        "siz umumiy rejimga o'tasiz.\n\n" +
        "Bu o'tish soliq yukini sezilarli " +
        "oshirishi mumkin va u ko'pincha " +
        "kutilmagan bo'ladi.\n\n" +
        "Shuning uchun daromadingizni " +
        "chegaraga nisbatan kuzatib " +
        "boring — yil davomida, yil " +
        "oxirida emas.\n\n" +
        "SOLIQ SOLISH OBYEKTI — jami " +
        "daromad (aylanma).\n\n" +
        "SOLIQ BAZASI: aylanma asosida " +
        "aniqlanadi. Yakka tartibdagi " +
        "tadbirkorlar va o'zini o'zi band " +
        "qilgan shaxslar uchun bazani " +
        "aniqlashning o'ziga xos " +
        "xususiyatlari belgilangan.\n\n" +
        "⚠️ ENG MUHIM XUSUSIYAT: bu rejimda " +
        "XARAJATLAR odatda hisobga " +
        "OLINMAYDI.\n\n" +
        "Ya'ni soliq foydadan emas, " +
        "AYLANMADAN hisoblanadi.\n\n" +
        "AMALIY OQIBAT: xarajatlaringiz " +
        "yuqori bo'lsa (masalan savdo " +
        "yoki ishlab chiqarish), bu rejim " +
        "noqulay bo'lishi mumkin. " +
        "Xarajatlar kam bo'lsa (xizmat " +
        "ko'rsatish, maslahat) — juda " +
        "qulay.\n\n" +
        "ALOHIDA HISOB: bir necha " +
        "faoliyat turi bo'lsa alohida " +
        "hisob yuritish talab " +
        "qilinishi mumkin.\n\n" +
        "STAVKALAR, SOLIQ DAVRI va " +
        "TO'LASH TARTIBI kodeksda " +
        "belgilangan.",
      example:
        "Savdo bilan shug'ullanuvchi " +
        "tadbirkor aylanma solig'ini " +
        "tanladi — xarajatlari yuqori " +
        "bo'lgani uchun ko'p soliq to'ladi.",
      keyPoints: [
        "Rejim daromad chegarasiga bog'langan",
        "Chegaradan oshsa umumiy rejimga o'tiladi",
        "Xarajatlar odatda hisobga olinmaydi",
        "Xizmat sohasida bu rejim qulayroq",
      ],
      warning:
        "Chegarani kuzatmaslik — kutilmagan " +
        "soliq yukiga olib keladi.",
      lawRefs: [
        { code: "SK", article: "461" },
        { code: "SK", article: "462" },
        { code: "SK", article: "463" },
        { code: "SK", article: "464" },
        { code: "SK", article: "465" },
        { code: "SK", article: "466" },
        { code: "SK", article: "468" },
        { code: "SK", article: "469" },
        { code: "SK", article: "470" },
      ],
    },
    {
      heading: "Ijtimoiy soliq",
      text:
        "IJTIMOIY SOLIQ — xodimlar bilan bog'liq " +
        "asosiy soliq yuki.\n\n" +
        "SOLIQ TO'LOVCHILAR: O'zbekiston " +
        "Respublikasining yuridik shaxslari, " +
        "shuningdek qonunda ko'rsatilgan " +
        "boshqa shaxslar.\n\n" +
        "⚠️ NIMA UCHUN BU MUHIM: xodim " +
        "olganingizda soliq yuki faqat " +
        "daromad solig'i bilan " +
        "cheklanmaydi.\n\n" +
        "Daromad solig'i XODIMDAN ushlab " +
        "qolinadi (ya'ni uning ish " +
        "haqidan), ijtimoiy soliq esa ISH " +
        "BERUVCHI hisobidan to'lanadi — bu " +
        "qo'shimcha xarajat.\n\n" +
        "Shuning uchun xodimning \"qo'lga " +
        "tegadigan\" summasi bilan sizning " +
        "haqiqiy xarajatingiz sezilarli " +
        "farq qiladi.\n\n" +
        "AMALIY QOIDA: xodim olishdan " +
        "oldin TO'LIQ xarajatni hisoblang: " +
        "ish haqi + ijtimoiy soliq + " +
        "boshqa majburiy to'lovlar.\n\n" +
        "SOLIQ SOLISH OBYEKTI, BAZA, " +
        "STAVKALAR, SOLIQ va HISOBOT " +
        "DAVRI kodeksda belgilangan.\n\n" +
        "AYRIM TOIFADAGI JISMONIY " +
        "SHAXSLAR tomonidan soliqni " +
        "hisoblab chiqarish va to'lashning " +
        "o'ziga xos xususiyatlari bor.\n\n" +
        "IXTIYORIY RAVISHDA soliqni " +
        "hisoblab chiqarish va to'lash " +
        "imkoniyati ham nazarda " +
        "tutilgan.\n\n" +
        "⚠️ IXTIYORIY TO'LOV NIMA UCHUN " +
        "KERAK: u ijtimoiy kafolatlarni " +
        "(masalan staj) shakllantirish " +
        "imkonini beradi. Rasmiy ish " +
        "joyi bo'lmagan shaxslar uchun " +
        "bu foydali bo'lishi mumkin.",
      example:
        "Xodim olishda faqat ish haqi " +
        "hisoblandi — ijtimoiy soliq " +
        "kutilmagan xarajat bo'ldi.",
      keyPoints: [
        "Ijtimoiy soliq ish beruvchi hisobidan to'lanadi",
        "U daromad solig'idan alohida yuk",
        "Xodim xarajatini to'liq hisoblang",
        "Ixtiyoriy to'lash imkoniyati ham bor",
      ],
      warning:
        "Xodim xarajatini faqat ish haqi deb " +
        "hisoblash — byudjetni buzadi.",
      lawRefs: [
        { code: "SK", article: "402" },
        { code: "SK", article: "403" },
        { code: "SK", article: "404" },
        { code: "SK", article: "405" },
        { code: "SK", article: "406" },
        { code: "SK", article: "407" },
        { code: "SK", article: "408" },
        { code: "SK", article: "409" },
      ],
    },
    {
      heading: "Investitsiya va maxsus zona imtiyozlari",
      text:
        "Qonun ayrim faoliyat turlari va " +
        "hududlar uchun IMTIYOZLAR nazarda " +
        "tutadi.\n\n" +
        "TO'G'RIDAN-TO'G'RI XUSUSIY CHET EL " +
        "INVESTITSIYALARI ishtirokidagi " +
        "yuridik shaxslarga soliq solish " +
        "shartlari alohida belgilangan.\n\n" +
        "Bunday shaxslar tomonidan soliq " +
        "imtiyozlarini qo'llash tartibi ham " +
        "kodeksda ko'rsatilgan.\n\n" +
        "MAXSUS IQTISODIY ZONALAR " +
        "ishtirokchilariga soliq solish " +
        "shartlari va imtiyozlarni qo'llash " +
        "tartibi belgilangan.\n\n" +
        "⚠️ AMALIY XULOSA: agar siz " +
        "investitsiya loyihasi yoki " +
        "maxsus zonada faoliyat " +
        "rejalashtirayotgan bo'lsangiz, " +
        "imtiyozlar loyihaning " +
        "rentabelligiga hal qiluvchi " +
        "ta'sir ko'rsatishi mumkin.\n\n" +
        "Shuning uchun ularni loyiha " +
        "hisob-kitobiga BOSHIDANOQ " +
        "kiriting.\n\n" +
        "IMTIYOZ SHARTLARI ODATDA " +
        "QATTIQ: ma'lum summadagi " +
        "investitsiya, ma'lum faoliyat " +
        "turi, ma'lum muddat davomida " +
        "faoliyat yuritish.\n\n" +
        "⚠️ SHARTLAR BUZILSA IMTIYOZ " +
        "BEKOR QILINADI va soliq " +
        "qayta hisoblanishi mumkin — " +
        "ya'ni imtiyoz davri uchun " +
        "ham soliq to'lashga to'g'ri " +
        "keladi.\n\n" +
        "Bu juda katta xavf: bir necha " +
        "yillik imtiyoz bir yo'la " +
        "qarzga aylanadi.\n\n" +
        "AMALIY QOIDA: imtiyoz " +
        "shartlarini yozib qo'ying va " +
        "ularga rioya qilinayotganini " +
        "muntazam tekshiring.\n\n" +
        "MAHSULOT TAQSIMOTIGA OID " +
        "BITIMLAR doirasidagi " +
        "faoliyatga soliq solishning " +
        "o'ziga xos xususiyatlari ham " +
        "belgilangan.\n\n" +
        "AYRIM HUDUDLARDA soliq " +
        "stavkalarini qo'llashning " +
        "xususiyatlari nazarda " +
        "tutilgan.",
      example:
        "Imtiyoz sharti buzildi — oldingi " +
        "yillar uchun ham soliq qayta " +
        "hisoblandi.",
      keyPoints: [
        "Investitsiya va maxsus zonalar uchun imtiyozlar bor",
        "Ular loyiha rentabelligiga ta'sir qiladi",
        "Imtiyoz shartlari qattiq belgilangan",
        "Shart buzilsa soliq qayta hisoblanadi",
      ],
      warning:
        "Imtiyoz shartini buzish bir necha " +
        "yillik qarzga aylanadi.",
      lawRefs: [
        { code: "SK", article: "471" },
        { code: "SK", article: "472" },
        { code: "SK", article: "473" },
        { code: "SK", article: "474" },
        { code: "SK", article: "475" },
        { code: "SK", article: "476" },
        { code: "SK", article: "480-2" },
      ],
    },
    {
      heading: "Alohida kasb egalariga soliq solish",
      text:
        "Ayrim kasb egalari uchun soliq solishning " +
        "alohida tartibi belgilangan.\n\n" +
        "ADVOKATLARGA SOLIQ SOLISH va ularning " +
        "DAROMADLARIGA soliq solish alohida " +
        "moddalar bilan tartibga solingan.\n\n" +
        "XUSUSIY AMALIYOT BILAN SHUG'ULLANUVCHI " +
        "NOTARIUSLARGA soliq solish va ularning " +
        "FOYDASIGA soliq solish ham alohida " +
        "belgilangan.\n\n" +
        "⚠️ NIMA UCHUN ALOHIDA: bu kasblar " +
        "oddiy tadbirkorlikdan farq qiladi — " +
        "ular davlat vazifalarining bir " +
        "qismini bajaradi va faoliyati " +
        "qattiq tartibga solingan.\n\n" +
        "Shuning uchun ularga umumiy " +
        "tadbirkorlik qoidalari to'liq " +
        "qo'llanilmaydi.\n\n" +
        "ISLOMIY MOLIYA OPERATSIYALARI " +
        "uchun ham alohida qoidalar " +
        "belgilangan: qo'shilgan qiymat " +
        "solig'i, foyda solig'i va boshqa " +
        "soliqlar bo'yicha.\n\n" +
        "ALOHIDA SHAROITLARDA qo'shimcha " +
        "vakolatlar berish, foizsiz " +
        "kechiktirish yoki bo'lib to'lash " +
        "hamda vaqtinchalik soliq " +
        "imtiyozlari nazarda tutilgan.\n\n" +
        "⚠️ OXIRGI QOIDA AMALDA MUHIM: " +
        "favqulodda holatlarda (masalan " +
        "epidemiya, tabiiy ofat) " +
        "vaqtinchalik imtiyozlar va " +
        "yengilliklar joriy etilishi " +
        "mumkin.\n\n" +
        "Shuning uchun bunday davrlarda " +
        "rasmiy manbalarni kuzatib " +
        "boring — ko'p tadbirkorlar o'ziga " +
        "tegishli yengillikdan xabarsiz " +
        "qoladi.\n\n" +
        "AMALIY XULOSA: faoliyatingiz " +
        "alohida tartibga solinadigan " +
        "toifaga kirsa, umumiy qoidalarga " +
        "tayanmang — o'z bo'limingizni " +
        "alohida o'rganing.",
      example:
        "Favqulodda holatda vaqtinchalik " +
        "imtiyoz joriy etildi — undan " +
        "xabardor tadbirkorlar " +
        "foydalandi.",
      keyPoints: [
        "Advokat va notariuslar uchun alohida tartib bor",
        "Islomiy moliya operatsiyalari alohida tartibga solingan",
        "Favqulodda holatlarda vaqtinchalik imtiyozlar bo'ladi",
        "Alohida toifada umumiy qoidalarga tayanmang",
      ],
      warning:
        "Vaqtinchalik imtiyozlarni kuzatmaslik — " +
        "foydani qo'ldan boy berish.",
      lawRefs: [
        { code: "SK", article: "477" },
        { code: "SK", article: "478" },
        { code: "SK", article: "479" },
        { code: "SK", article: "480" },
        { code: "SK", article: "480-3" },
        { code: "SK", article: "481" },
        { code: "SK", article: "482" },
        { code: "SK", article: "483" },
      ],
    },
  ],
};

module.exports = { LESSON };
