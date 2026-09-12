"use strict";
/** SHARTNOMALAR MODULI — 3-DARS: BITIM HAQIQIY EMASLIGI. FK 113–128. */

const LESSON = {
  key: "bitim-haqiqiy-emas",
  category: "contracts",
  level: "mid",
  order: 3030,
  title: "Bitim haqiqiy emas deb topilishi",
  desc:
    "Nizoli va o'z-o'zidan haqiqiy bo'lmagan bitimlar, haqiqiy " +
    "emaslik asoslari: layoqat, yanglishish, aldash, zo'rlik, " +
    "qalbaki bitim, vakolat cheklovi va oqibatlari.",
  objectives: [
    "Nizoli va o'z-o'zidan haqiqiy bo'lmagan bitim farqini bilasiz",
    "Haqiqiy emaslikning asosiy oqibatini tushunasiz",
    "Yanglishish va aldash farqini ajrata olasiz",
    "Qalbaki va ko'zbo'yamachilik bitimini taniysiz",
    "Vakolat cheklovi bilan bog'liq xavfni bilasiz",
    "Bitimning bir qismi haqiqiy emasligi oqibatini bilasiz",
  ],
  practicalSteps: [
    "Bitim tuzishdan oldin qarshi tomonning layoqati va vakolatini tekshiring",
    "Muhim ma'lumotlarni og'zaki emas, yozma shaklda so'rang",
    "Bosim ostida hech qanday hujjatni imzolamang — imkon bo'lsa muddat so'rang",
    "Bitim shartlarini boshqacha rasmiylashtirish taklifidan ehtiyot bo'ling",
    "Haqiqiy emaslik asosini bilganingizda muddatni o'tkazib yubormang",
  ],
  sections: [
    {
      heading: "Nizoli va o'z-o'zidan haqiqiy bo'lmagan bitimlar",
      text:
        "Haqiqiy bo'lmagan bitimlar IKKI TURGA bo'linadi va bu " +
        "ajratish amalda hal qiluvchi ahamiyatga ega.\n\n" +
        "NIZOLI BITIM — sud tomonidan haqiqiy emas deb TOPILISHI " +
        "mumkin bo'lgan bitim. Ya'ni u sud qarorigacha KUCHDA " +
        "bo'ladi va uni faqat qonunda ko'rsatilgan shaxs " +
        "nizolashtira oladi.\n\n" +
        "O'Z-O'ZIDAN HAQIQIY BO'LMAGAN bitim — sud tomonidan tan " +
        "olinishidan QAT'I NAZAR haqiqiy bo'lmagan bitim. U " +
        "boshidanoq kuchga ega emas.\n\n" +
        "⚠️ AMALIY FARQ: nizoli bitimni nizolashtirish uchun " +
        "SUDGA murojaat qilish va MUDDATNI o'tkazib yubormaslik " +
        "kerak. O'z-o'zidan haqiqiy bo'lmagan bitimda esa sud " +
        "faqat uning oqibatlarini qo'llash to'g'risida qaror " +
        "chiqaradi.\n\n" +
        "UMUMIY OQIBAT: haqiqiy bo'lmagan bitim huquqiy " +
        "oqibatlarga olib kelmaydi — uning haqiqiy emasligi " +
        "bilan bog'liq oqibatlardan tashqari. U tuzilgan " +
        "paytdan haqiqiy emas hisoblanadi.\n\n" +
        "RESTITUTSIYA: har bir tomon ikkinchisiga bitim " +
        "bo'yicha olgan hamma narsani QAYTARISHI shart; natura " +
        "holida qaytarish imkonsiz bo'lsa — qiymatini pul bilan " +
        "qoplaydi.",
      example:
        "Bitim haqiqiy emas deb topildi — tomonlar bir-biriga " +
        "olgan narsalarini qaytaradi.",
      keyPoints: [
        "Nizoli bitim sud qarorigacha kuchda bo'ladi",
        "O'z-o'zidan haqiqiy bo'lmagan bitim boshidan kuchsiz",
        "Haqiqiy emas bitim huquqiy oqibat keltirmaydi",
        "Tomonlar olgan narsani qaytaradi (restitutsiya)",
      ],
      warning:
        "Nizoli bitim uchun muddat qisqa bo'lishi mumkin — " +
        "kechiktirmang.",
      lawRefs: [
        { code: "FK", article: "113" },
        { code: "FK", article: "114" },
        { code: "FK", article: "127" },
      ],
    },
    {
      heading: "Qonun talablariga muvofiq bo'lmagan bitim",
      text:
        "Qonunchilik talablariga muvofiq bo'lmagan bitim HAQIQIY " +
        "EMAS.\n\n" +
        "Bu eng umumiy asos va u boshqa aniq asoslar " +
        "qo'llanilmagan hollarda ishlatiladi.\n\n" +
        "⚠️ AMALIY MISOLLAR: qonun taqiqlagan predmet bo'yicha " +
        "bitim; majburiy litsenziyasiz amalga oshirilgan " +
        "faoliyat bo'yicha bitim; qonun bilan belgilangan " +
        "cheklovlarni chetlab o'tuvchi bitim.\n\n" +
        "SHAKLGA RIOYA ETMASLIK ham alohida asos sifatida " +
        "ko'rsatilgan — bu oldingi darsda batafsil ko'rib " +
        "chiqilgan (notarial shakl va davlat ro'yxati " +
        "talablari).\n\n" +
        "MUHIM AMALIY XULOSA: shartnoma tuzishdan oldin ikki " +
        "narsani tekshiring — predmet qonuniy muomalada " +
        "ekanini va faoliyat uchun ruxsat talab qilinmasligini " +
        "(yoki u borligini).\n\n" +
        "Bu tekshiruv qiyin emas, lekin uni o'tkazmaslik " +
        "keyinchalik butun bitimni yo'qqa chiqarishi mumkin — " +
        "va bunda to'langan pulni qaytarish jarayoni uzoq " +
        "davom etadi.",
      example:
        "Majburiy ruxsatsiz amalga oshiriladigan faoliyat " +
        "bo'yicha shartnoma tuzildi — u haqiqiy emas deb " +
        "topilishi mumkin.",
      keyPoints: [
        "Qonun talablariga zid bitim haqiqiy emas",
        "Bu eng umumiy asos hisoblanadi",
        "Shaklga rioya etmaslik ham alohida asos",
        "Predmet va ruxsatni oldindan tekshiring",
      ],
      warning:
        "Litsenziyani tekshirmaslik — shartnomani boshidanoq " +
        "xavf ostiga qo'yadi.",
      lawRefs: [
        { code: "FK", article: "115" },
        { code: "FK", article: "116" },
      ],
    },
    {
      heading: "Layoqat bilan bog'liq asoslar",
      text:
        "Bitim tuzgan shaxsning layoqati bilan bog'liq bir necha " +
        "asos mavjud.\n\n" +
        "O'N TO'RT YOSHGA TO'LMAGAN shaxs tuzgan bitim haqiqiy " +
        "emas (mayda maishiy bitimlardan tashqari).\n\n" +
        "O'N TO'RTDAN O'N SAKKIZ YOSHGACHA bo'lgan shaxs " +
        "qonuniy vakil roziligisiz tuzgan bitim NIZOLI — u " +
        "vakilning talabi bilan haqiqiy emas deb topilishi " +
        "mumkin.\n\n" +
        "MUOMALAGA LAYOQATSIZ deb topilgan fuqaro tuzgan bitim " +
        "haqiqiy emas.\n\n" +
        "MUOMALA LAYOQATI CHEKLANGAN fuqaro homiy roziligisiz " +
        "tuzgan bitim nizoli.\n\n" +
        "⚠️ ALOHIDA VA ENG QIYIN ASOS: layoqatli bo'lsa-yu, " +
        "bitim tuzayotgan paytda O'Z HARAKATLARINING " +
        "AHAMIYATINI TUSHUNA OLMAYDIGAN yoki ularni boshqara " +
        "olmaydigan holatda bo'lgan fuqaro tuzgan bitim ham " +
        "nizoli.\n\n" +
        "Bu asos ko'pincha og'ir kasallik, dori ta'siri yoki " +
        "keksalik holatlarida qo'llaniladi va u ODATDA " +
        "EKSPERTIZA talab qiladi.\n\n" +
        "HIMOYA QOIDASI: agar bunday bitim layoqatsiz yoki " +
        "cheklangan shaxs FOYDASIGA bo'lsa, sud uni haqiqiy " +
        "deb topishi mumkin.",
      example:
        "Og'ir kasallik davrida tuzilgan bitim keyinchalik " +
        "ekspertiza asosida nizolashtirildi.",
      keyPoints: [
        "Yosh va layoqat bilan bog'liq bir necha asos bor",
        "Ayrimlari o'z-o'zidan, ayrimlari nizoli bitim yaratadi",
        "Tushunmaydigan holatdagi bitim ham nizoli",
        "Foydali bitim haqiqiy deb topilishi mumkin",
      ],
      warning:
        "Keksa yoki og'ir kasal shaxs bilan bitimda notarial " +
        "shakl xavfni sezilarli kamaytiradi.",
      lawRefs: [
        { code: "FK", article: "117" },
        { code: "FK", article: "118" },
        { code: "FK", article: "119" },
        { code: "FK", article: "120" },
        { code: "FK", article: "121" },
      ],
    },
    {
      heading: "Yanglishish ta'sirida tuzilgan bitim",
      text:
        "AHAMIYATLI YANGLISHISH ta'sirida tuzilgan bitim yanglishgan " +
        "tomonning da'vosiga binoan haqiqiy emas deb topilishi " +
        "mumkin.\n\n" +
        "⚠️ HAR QANDAY YANGLISHISH EMAS. Yanglishish AHAMIYATLI " +
        "bo'lishi kerak — ya'ni bitimning tabiati yoki predmeti " +
        "sifatlariga oid bo'lib, undan foydalanish imkoniyatini " +
        "sezilarli kamaytirishi lozim.\n\n" +
        "MOTIVGA OID YANGLISHISH ahamiyatli hisoblanmaydi. Ya'ni " +
        "\"men buni boshqa maqsadda sotib olgan edim\", \"narx " +
        "keyin tushib ketdi\", \"menga kerak bo'lmay qoldi\" " +
        "degan sabablar bitimni bekor qilmaydi.\n\n" +
        "Bu juda muhim: bozor sharoiti o'zgargani yanglishish " +
        "emas — bu odatiy tijorat xavfi.\n\n" +
        "OQIBATI: bitim haqiqiy emas deb topilsa, tomonlar " +
        "olgan narsalarini qaytaradi. Bundan tashqari " +
        "yanglishgan tomon ikkinchi tomonning aybini " +
        "isbotlasa, zararni ham talab qilishi mumkin; aks " +
        "holda esa u ikkinchi tomonga yetkazilgan zararni " +
        "qoplashi kerak bo'lishi mumkin.\n\n" +
        "AMALIY XULOSA: xarid oldidan predmetni tekshirish " +
        "va muhim sifatlarni SHARTNOMAGA yozib qo'yish — " +
        "yanglishishning eng yaxshi oldini olish usuli.",
      example:
        "Sotib olingan uskuna kutilgan vazifani bajara " +
        "olmasligi ma'lum bo'ldi — bu ahamiyatli yanglishish " +
        "bo'lishi mumkin.",
      keyPoints: [
        "Faqat ahamiyatli yanglishish asos bo'ladi",
        "U bitim tabiati yoki predmet sifatlariga oid bo'lishi kerak",
        "Motivga oid yanglishish hisobga olinmaydi",
        "Muhim sifatlarni shartnomaga yozib qo'ying",
      ],
      warning:
        "Narx o'zgarishi yoki fikr o'zgarishi yanglishish " +
        "hisoblanmaydi.",
      lawRefs: [{ code: "FK", article: "122" }],
    },
    {
      heading: "Aldash, zo'rlik, qo'rqitish va og'ir holat",
      text:
        "Bu guruh asoslar bitimning IRODA ERKINLIGI buzilganda " +
        "qo'llaniladi.\n\n" +
        "ALDASH — muhim ahamiyatga ega holatlar haqida " +
        "ataylab yolg'on ma'lumot berish yoki ularni ataylab " +
        "yashirish. Yanglishishdan farqi: bu yerda ikkinchi " +
        "tomonning QASDI bor.\n\n" +
        "ZO'RLIK va QO'RQITISH — bitim tuzishga jismoniy yoki " +
        "ruhiy bosim orqali majburlash.\n\n" +
        "BIR TARAF VAKILINING IKKINCHI TARAF BILAN YOMON " +
        "NIYATDA KELISHISHI — vakil o'z vakil qilgan shaxsiga " +
        "qarshi ish ko'rganda.\n\n" +
        "OG'IR HOLATLAR — shaxs o'zi uchun aniq noqulay " +
        "shartlarda bitim tuzishga majbur bo'lgan va ikkinchi " +
        "tomon bundan foydalangan holat.\n\n" +
        "⚠️ HAMMASI NIZOLI BITIM YARATADI — ya'ni jabrlangan " +
        "tomon SUDGA murojaat qilishi kerak.\n\n" +
        "ISBOTLASH ENG QIYIN QISMI. Shuning uchun: bosim " +
        "ostida imzolamang; imkon bo'lsa \"o'ylab ko'ray\" " +
        "deb muddat so'rang; bosim holatini qayd eting " +
        "(yozishmalar, guvohlar, audio); va'dalarni yozma " +
        "so'rang.\n\n" +
        "Bunday asoslar bo'yicha oqibatlar odatda oddiy " +
        "restitutsiyadan og'irroq bo'ladi.",
      example:
        "Sotuvchi mahsulotning jiddiy kamchiligini ataylab " +
        "yashirdi — bu aldash sifatida baholanishi mumkin.",
      keyPoints: [
        "Bu guruh iroda erkinligi buzilganda qo'llaniladi",
        "Aldashda qasd bo'ladi, yanglishishda yo'q",
        "Og'ir holatdan foydalanish ham asos bo'ladi",
        "Barchasi sud orqali nizolashtiriladi",
      ],
      warning:
        "Bosim ostida imzolangan hujjatni keyinchalik " +
        "nizolashtirish uchun dalil kerak — uni o'sha kuni " +
        "qayd eting.",
      lawRefs: [{ code: "FK", article: "123" }],
    },
    {
      heading: "Qalbaki va ko'zbo'yamachilik bitimlari",
      text:
        "Bu ikki tushuncha ko'pincha chalkashtiriladi, lekin ular " +
        "boshqa-boshqa.\n\n" +
        "QALBAKI BITIM — tegishli huquqiy oqibatlarni vujudga " +
        "keltirish NIYATISIZ, faqat ko'rinish uchun tuzilgan " +
        "bitim. U HAQIQIY EMAS.\n\n" +
        "Misol: mol-mulkka undiruv qaratilishidan qochish " +
        "uchun uni qog'ozda boshqa shaxsga \"sotish\", " +
        "aslida esa o'zida saqlab qolish.\n\n" +
        "KO'ZBO'YAMACHILIK UCHUN TUZILGAN BITIM — boshqa " +
        "bitimni YASHIRISH maqsadida tuzilgan bitim. U ham " +
        "haqiqiy emas, LEKIN qoida boshqacha: tomonlar " +
        "haqiqatda nazarda tutgan bitimga tegishli qoidalar " +
        "qo'llaniladi.\n\n" +
        "⚠️ AMALIY MISOL: sotish hadya sifatida " +
        "rasmiylashtirildi (masalan imtiyozli sotib olish " +
        "huquqini chetlab o'tish uchun) — sud unga OLDI-SOTDI " +
        "qoidalarini qo'llaydi.\n\n" +
        "Yoki: haqiqiy narx yashirilib, shartnomada past " +
        "summa ko'rsatildi — bu ham ko'zbo'yamachilik " +
        "belgisi va u xaridor uchun jiddiy xavf tug'diradi " +
        "(bitim bekor qilinsa faqat yozilgan summa " +
        "qaytariladi).\n\n" +
        "XULOSA: shartnomada haqiqiy shartlarni yozing. " +
        "\"Soliqni kamaytirish\" yoki \"tezroq " +
        "rasmiylashtirish\" uchun taklif qilingan " +
        "\"soddalashtirish\" — sizga qarshi ishlaydi.",
      example:
        "Shartnomada haqiqiy narxdan past summa yozildi — " +
        "nizoda xaridor faqat yozilgan summani talab qila " +
        "oladi.",
      keyPoints: [
        "Qalbaki bitim ko'rinish uchun tuziladi",
        "Ko'zbo'yamachilik bitimi boshqa bitimni yashiradi",
        "Ikkinchisida haqiqiy bitim qoidalari qo'llaniladi",
        "Past narx yozish xaridor uchun xavfli",
      ],
      warning:
        "Shartnomadagi soxta summa — bu sizga qarshi tayyor " +
        "dalil.",
      lawRefs: [{ code: "FK", article: "124" }],
    },
    {
      heading: "Layoqatdan tashqari bitim va vakolat cheklovi",
      text:
        "Ikki asos yuridik shaxs va vakillik bilan bog'liq.\n\n" +
        "YURIDIK SHAXS HUQUQIY LAYOQATIDAN TASHQARIGA " +
        "CHIQADIGAN bitim — ya'ni ta'sis hujjatlarida " +
        "belgilangan maqsadlarga zid yoki litsenziyasiz " +
        "amalga oshirilgan faoliyat bo'yicha bitim — nizoli " +
        "bo'lishi mumkin.\n\n" +
        "VAKOLAT CHEKLOVI — bu amalda ancha ko'p uchraydi. " +
        "Shaxsning bitim tuzish vakolati shartnomada yoki " +
        "yuridik shaxsning ta'sis hujjatlarida " +
        "ishonchnomada ko'rsatilganga nisbatan CHEKLANGAN " +
        "bo'lishi mumkin.\n\n" +
        "⚠️ HAL QILUVCHI SHART: bunday bitim faqat ikkinchi " +
        "tomon cheklovlar haqida BILGANI yoki bilishi " +
        "kerakligi isbotlansa haqiqiy emas deb topilishi " +
        "mumkin.\n\n" +
        "IKKI TOMONGA AMALIY XULOSA:\n\n" +
        "Bitim tuzayotgan tomon uchun — ustav va " +
        "ishonchnomani ko'rish. Ularni ko'rgan bo'lsangiz, " +
        "\"bilmasdim\" degan himoya yo'qoladi; ko'rmagan " +
        "bo'lsangiz esa cheklovni bilishingiz kerak " +
        "emasligini asoslash osonroq.\n\n" +
        "Tashkilot uchun — vakolat cheklovlarini " +
        "shartnomaning o'zida aniq yozib qo'yish eng " +
        "ishonchli himoya.",
      example:
        "Direktor ustavda belgilangan summadan katta bitim " +
        "tuzdi — kontragent ustavni ko'rgan bo'lsa bitim " +
        "nizoli bo'ladi.",
      keyPoints: [
        "Layoqatdan tashqari bitim nizoli bo'lishi mumkin",
        "Vakolat cheklovi ham asos bo'ladi",
        "Ikkinchi tomon cheklovni bilgani isbotlanishi kerak",
        "Cheklovni shartnomada yozib qo'yish eng ishonchli",
      ],
      warning:
        "Yirik bitimlarda organ roziligi talab qilinishi " +
        "mumkin — buni oldindan tekshiring.",
      lawRefs: [
        { code: "FK", article: "125" },
        { code: "FK", article: "126" },
      ],
    },
    {
      heading: "Bitimning bir qismi haqiqiy emasligi",
      text:
        "Bitimning bir QISMI haqiqiy emasligi butun bitimni yo'qqa " +
        "chiqaradimi? Javob amalda juda muhim.\n\n" +
        "QOIDA: bitimning bir qismi haqiqiy emasligi uning " +
        "qolgan qismlari haqiqiy emasligiga OLIB KELMAYDI — " +
        "agar bitim haqiqiy emas qismisiz ham tuzilgan " +
        "bo'lardi deb taxmin qilish mumkin bo'lsa.\n\n" +
        "⚠️ YA'NI SUD BUTUN SHARTNOMANI BEKOR QILISHGA " +
        "SHOSHILMAYDI — u faqat muammoli bandni chiqarib " +
        "tashlaydi va qolganini kuchda qoldiradi.\n\n" +
        "Bu tomonlar uchun foydali: bitta noto'g'ri band " +
        "sabab butun shartnoma qulamaydi.\n\n" +
        "AMALIY MISOLLAR: iste'molchi huquqini cheklovchi " +
        "band; javobgarlikni butunlay istisno etuvchi shart; " +
        "sud himoyasidan voz kechish sharti. Bunday bandlar " +
        "olib tashlanadi, shartnoma esa ishlashda davom " +
        "etadi.\n\n" +
        "TESKARI HOLAT: agar muammoli shart shartnomaning " +
        "MOHIYATIGA daxldor bo'lsa (masalan predmet yoki " +
        "asosiy majburiyat), butun bitim haqiqiy emas deb " +
        "topilishi mumkin.\n\n" +
        "SHUNING UCHUN SHARTNOMA TUZAYOTGANDA: har bir bandni " +
        "alohida va aniq yozing — shunda muammoli band " +
        "boshqalarini o'ziga tortmaydi.",
      example:
        "Shartnomadagi bitta qonunga zid band bekor qilindi, " +
        "qolgan shartlar avvalgidek amal qildi.",
      keyPoints: [
        "Bir qismning haqiqiy emasligi butunini bekor qilmaydi",
        "Shart — bitim o'sha qismsiz ham tuzilgan bo'lishi",
        "Muammoli band chiqarib tashlanadi",
        "Mohiyatga daxldor shart butun bitimni yiqitadi",
      ],
      warning:
        "Bandlarni bir-biriga bog'lab yozish — bittasi " +
        "yiqilsa hammasini yiqitishi mumkin.",
      lawRefs: [{ code: "FK", article: "128" }],
    },
  ],
};

module.exports = { LESSON };
