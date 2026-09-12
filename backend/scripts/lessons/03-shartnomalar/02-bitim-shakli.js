"use strict";
/** SHARTNOMALAR MODULI — 2-DARS: BITIM VA UNING SHAKLI. FK 101–112. */

const LESSON = {
  key: "bitim-shakli",
  category: "contracts",
  level: "basic",
  order: 3020,
  title: "Bitim shakli: og'zaki, yozma, notarial",
  desc:
    "Bitim nima, uning turlari, shartli bitimlar, og'zaki va yozma " +
    "shakl, notarial tasdiqlash, davlat ro'yxatidan o'tkazish hamda " +
    "shaklga rioya qilmaslik oqibatlari.",
  objectives: [
    "Bitim nima ekanini va uning turlarini bilasiz",
    "Shartli bitim qanday ishlashini tushunasiz",
    "Qaysi bitim og'zaki, qaysi biri yozma bo'lishini bilasiz",
    "Oddiy yozma shakl buzilsa nima bo'lishini bilasiz",
    "Notarial tasdiqlash qachon shart ekanini bilasiz",
    "Davlat ro'yxatidan o'tkazishning ahamiyatini bilasiz",
  ],
  practicalSteps: [
    "Har qanday muhim bitimni yozma rasmiylashtiring — hatto qonun talab qilmasa ham",
    "Yozma hujjatda tomonlar, predmet, baho, muddat va imzolarni tekshiring",
    "Notarial shakl talab qilinadigan bitimlarda notariusga oldindan murojaat qiling",
    "Ko'chmas mulk bitimini darhol davlat ro'yxatidan o'tkazing",
    "Pul topshirishda tilxat oling — og'zaki bitimda ham bu dalil bo'ladi",
  ],
  sections: [
    {
      heading: "Bitim tushunchasi va uning turlari",
      text:
        "BITIMLAR — fuqarolar va yuridik shaxslarning fuqarolik " +
        "huquq va burchlarini vujudga keltirishga, o'zgartirishga " +
        "yoki bekor qilishga qaratilgan HARAKATLARIDIR.\n\n" +
        "⚠️ SHARTNOMA — BITIMNING BIR TURI. Har qanday shartnoma " +
        "bitim, lekin har qanday bitim shartnoma emas.\n\n" +
        "BITIMLAR IKKI GURUHGA bo'linadi:\n\n" +
        "BIR TARAFLAMA bitim — uni tuzish uchun bir tomonning " +
        "irodasi yetarli. Misollar: vasiyatnoma, ishonchnoma " +
        "berish, merosdan voz kechish, ofertani chaqirib olish.\n\n" +
        "IKKI (yoki KO'P) TARAFLAMA bitim — ya'ni shartnoma, unda " +
        "ikki yoki undan ortiq tomonning kelishilgan irodasi " +
        "kerak.\n\n" +
        "BIR TARAFLAMA BITIM QOIDASI: u uni tuzgan shaxs uchun " +
        "majburiyat vujudga keltiradi; boshqa shaxslar uchun esa " +
        "majburiyat faqat qonunda nazarda tutilgan yoki o'sha " +
        "shaxslar bilan kelishilgan hollarda yuzaga keladi.\n\n" +
        "Ya'ni bir tomonlama harakat bilan boshqa odamga burch " +
        "yuklab bo'lmaydi. Bir taraflama bitimlarga tegishli " +
        "tarzda shartnoma to'g'risidagi umumiy qoidalar " +
        "qo'llaniladi.",
      example:
        "Vasiyatnoma yozildi — bu bir taraflama bitim va " +
        "merosxo'rlarning roziligi talab qilinmaydi.",
      keyPoints: [
        "Bitim — huquq va burch yuzaga keltiruvchi harakat",
        "Shartnoma — bitimning bir turi",
        "Bir taraflama bitim uchun bir iroda yetarli",
        "Bir tomonlama boshqa shaxsga burch yuklab bo'lmaydi",
      ],
      warning:
        "Ishonchnoma ham bitim — uni bekor qilishni ham " +
        "rasmiylashtirish kerak.",
      lawRefs: [
        { code: "FK", article: "101" },
        { code: "FK", article: "102" },
        { code: "FK", article: "103" },
      ],
    },
    {
      heading: "Shartli bitimlar",
      text:
        "SHARTLI BITIM — huquq va burchlarning vujudga kelishi yoki " +
        "bekor bo'lishi ro'y berishi noma'lum bo'lgan HOLATGA " +
        "bog'liq qilib qo'yilgan bitim.\n\n" +
        "IKKI TURI BOR:\n\n" +
        "KECHIKTIRUVCHI shart — huquq va burchlar shart ro'y " +
        "berganda VUJUDGA KELADI. Masalan: \"kredit ma'qullansa " +
        "xarid amalga oshiriladi\".\n\n" +
        "BEKOR QILUVCHI shart — huquq va burchlar shart ro'y " +
        "berganda BEKOR BO'LADI. Masalan: \"litsenziya bekor " +
        "qilinsa shartnoma tugaydi\".\n\n" +
        "⚠️ SHART NOMA'LUM BO'LISHI KERAK. Muqarrar ro'y beradigan " +
        "voqea shart emas — u muddat hisoblanadi.\n\n" +
        "HALOLLIK QOIDASI JUDA MUHIM: agar shartning ro'y " +
        "berishiga bitim ishtirokchisi INSOFSIZLIK bilan " +
        "TO'SQINLIK qilsa, shart ro'y bergan deb tan olinadi. " +
        "Aksincha, insofsizlik bilan shartning ro'y berishiga " +
        "yordam bersa, shart ro'y bermagan deb tan olinadi.\n\n" +
        "Ya'ni shartni sun'iy ravishda buzish yoki yuzaga " +
        "keltirish natija bermaydi.",
      example:
        "Xaridor kredit arizasini ataylab bermadi va shartnomadan " +
        "chiqmoqchi bo'ldi — shart ro'y bergan deb baholanishi " +
        "mumkin.",
      keyPoints: [
        "Shartli bitim noma'lum holatga bog'lanadi",
        "Kechiktiruvchi shart huquqni vujudga keltiradi",
        "Bekor qiluvchi shart huquqni tugatadi",
        "Shartga insofsizlik bilan ta'sir qilish natija bermaydi",
      ],
      warning:
        "Muqarrar voqeani shart deb yozish shartni muddatga " +
        "aylantiradi.",
      lawRefs: [{ code: "FK", article: "104" }],
    },
    {
      heading: "Bitimning shakllari va og'zaki shakl",
      text:
        "Bitimlar OG'ZAKI yoki YOZMA (oddiy yoki notarial) shaklda " +
        "tuziladi.\n\n" +
        "OG'ZAKI SHAKL: qonun yoki tomonlar kelishuvi yozma " +
        "shaklni talab qilmagan bitim og'zaki tuzilishi " +
        "mumkin.\n\n" +
        "⚠️ MUHIM QOIDA: tuzilayotgan paytda BAJARILADIGAN " +
        "bitimlar og'zaki tuzilishi mumkin — notarial shakl " +
        "talab qilinadigan yoki shaklga rioya qilmaslik " +
        "haqiqiy emaslikka olib keladigan hollardan tashqari.\n\n" +
        "Aynan shu sabab do'kondagi xarid og'zaki bitim " +
        "hisoblanadi va u to'liq haqiqiy.\n\n" +
        "SHARTNOMANI BAJARISH BITIMLARI: yozma shartnomani " +
        "bajarish yuzasidan bitimlar tomonlar kelishuvi bilan " +
        "og'zaki tuzilishi mumkin — qonun yoki shartnomaga zid " +
        "bo'lmasa.\n\n" +
        "SUKUT SAQLASH: harakatsizlik bitim tuzish irodasini " +
        "bildirish deb faqat qonunda yoki tomonlar kelishuvida " +
        "nazarda tutilgan hollarda tan olinadi.\n\n" +
        "Ya'ni \"javob bermasangiz rozi hisoblanasiz\" degan " +
        "yondashuv umumiy qoida sifatida ishlamaydi.",
      example:
        "Do'kondan naqd pulga xarid qilindi — bu og'zaki bitim va " +
        "u to'liq haqiqiy.",
      keyPoints: [
        "Bitimlar og'zaki yoki yozma shaklda tuziladi",
        "Tuzilayotgan paytda bajariladigan bitim og'zaki bo'lishi mumkin",
        "Yozma shartnomani bajarish bitimlari og'zaki bo'la oladi",
        "Sukut saqlash odatda rozilik hisoblanmaydi",
      ],
      warning:
        "Og'zaki bitim haqiqiy bo'lsa ham uni isbotlash ancha " +
        "qiyin.",
      lawRefs: [
        { code: "FK", article: "105" },
        { code: "FK", article: "106" },
      ],
    },
    {
      heading: "Yozma shakl va uning talablari",
      text:
        "YOZMA shaklda tuziladigan bitim uning mazmunini " +
        "ifodalovchi va tomonlar tomonidan IMZOLANGAN hujjat " +
        "tuzish yo'li bilan amalga oshirilishi kerak.\n\n" +
        "Yozma shakl xat, telegramma, elektron hujjat va boshqa " +
        "aloqa vositalari orqali hujjat almashish yo'li bilan " +
        "ham amalga oshirilishi mumkin — hujjat shartnoma " +
        "tomonidan kelganini ishonchli aniqlash mumkin " +
        "bo'lsa.\n\n" +
        "⚠️ IMZO MASALASI: fuqaro jismoniy nuqson, kasallik yoki " +
        "savodsizlik tufayli o'z qo'li bilan imzolay olmasa, " +
        "uning iltimosiga binoan boshqa shaxs imzolashi mumkin " +
        "— bunday imzo notarial yoki qonunda nazarda tutilgan " +
        "boshqa tartibda tasdiqlanishi kerak.\n\n" +
        "QAYSI BITIMLAR YOZMA BO'LISHI KERAK: yuridik " +
        "shaxslarning o'zaro va fuqarolar bilan tuzadigan " +
        "bitimlari; fuqarolar o'rtasidagi qonunda belgilangan " +
        "summadan ortiq bitimlar; qonunda nazarda tutilgan " +
        "boshqa hollarda — summasidan qat'i nazar.\n\n" +
        "AMALIY MASLAHAT: qonun talab qilmaganda ham muhim " +
        "bitimni yozma qiling. Yozma hujjat qimmat emas, lekin " +
        "u nizoda hal qiluvchi bo'ladi.",
      example:
        "Katta summadagi qarz og'zaki berildi — nizoda uni " +
        "isbotlash uchun faqat bilvosita dalillar qoldi.",
      keyPoints: [
        "Yozma shakl imzolangan hujjat tuzishni bildiradi",
        "Hujjat almashish ham yozma shakl hisoblanadi",
        "Imzolay olmagan shaxs uchun maxsus tartib bor",
        "Yuridik shaxs bitimlari yozma bo'ladi",
      ],
      warning:
        "Elektron yozishmani saqlamaslik — yozma shaklni " +
        "yo'qotish bilan barobar.",
      lawRefs: [
        { code: "FK", article: "107" },
        { code: "FK", article: "108" },
      ],
    },
    {
      heading: "Oddiy yozma shaklga rioya qilmaslik oqibatlari",
      text:
        "Bu — mavzudagi eng amaliy va eng ko'p e'tibordan chetda " +
        "qoladigan qoida.\n\n" +
        "Oddiy yozma shaklga rioya qilmaslik bitimni HAQIQIY EMAS " +
        "QILMAYDI — qonunda yoki tomonlar kelishuvida bevosita " +
        "shunday ko'rsatilgan hollardan tashqari.\n\n" +
        "⚠️ LEKIN OG'IR OQIBAT BOR: nizo chiqqanda tomonlar " +
        "bitim va uning shartlarini tasdiqlash uchun GUVOHLAR " +
        "KO'RSATUVIGA tayanish huquqidan MAHRUM bo'ladi.\n\n" +
        "Ya'ni bitim haqiqiy, lekin uni isbotlash uchun " +
        "guvohlarni chaqirib bo'lmaydi.\n\n" +
        "NIMA QOLADI: yozma va boshqa dalillar. Masalan " +
        "yozishmalar, to'lov hujjatlari, tilxatlar, xabar " +
        "almashinuvi, video yozuvlar.\n\n" +
        "AMALIY XULOSA: yozma shaklga rioya qilmagan bo'lsangiz " +
        "ham, holat umidsiz emas — dalillarni yig'ing. Lekin " +
        "eng oson yo'l baribir bitimni boshidanoq yozma " +
        "rasmiylashtirish.\n\n" +
        "Ayrim bitimlar uchun esa qonun to'g'ridan-to'g'ri " +
        "shaklga rioya qilmaslik bitimni HAQIQIY EMAS " +
        "qilishini belgilaydi — bunday hollarda hech qanday " +
        "dalil yordam bermaydi.",
      example:
        "Pul og'zaki berildi va guvohlar bor edi — nizoda ular " +
        "ko'rsatuvi qabul qilinmadi, faqat yozma dalillar " +
        "hisobga olindi.",
      keyPoints: [
        "Oddiy yozma shakl buzilishi bitimni haqiqiy emas qilmaydi",
        "Lekin guvohlar ko'rsatuviga tayanib bo'lmaydi",
        "Yozma va boshqa dalillar qabul qilinadi",
        "Ayrim hollarda qonun haqiqiy emaslikni belgilaydi",
      ],
      warning:
        "\"Guvohlar bor\" degan ishonch yozma shakl buzilganda " +
        "ishlamaydi.",
      lawRefs: [{ code: "FK", article: "109" }],
    },
    {
      heading: "Notarial tasdiqlash",
      text:
        "Bitimlarni NOTARIAL tasdiqlash bitim matnida notariusning " +
        "tasdiqlovchi yozuvini qo'yish yo'li bilan amalga " +
        "oshiriladi.\n\n" +
        "NOTARIAL SHAKL IKKI HOLATDA MAJBURIY: (1) qonunda " +
        "ko'rsatilgan bitimlar uchun; (2) tomonlar kelishuvi " +
        "bilan — hatto qonun talab qilmasa ham.\n\n" +
        "⚠️ IKKINCHI IMKONIYAT KAM ISHLATILADI, LEKIN JUDA " +
        "FOYDALI: katta summadagi yoki xavfli bitimni ixtiyoriy " +
        "ravishda notarial tasdiqlash mumkin. Notarius " +
        "tomonlarning layoqatini, irodasining erkinligini va " +
        "hujjatlarni tekshiradi — bu keyingi nizolarni " +
        "sezilarli kamaytiradi.\n\n" +
        "NIMA UCHUN BU MUHIM: notarial tasdiqlangan bitimni " +
        "\"men imzolamaganman\", \"meni majburlashdi\", \"men " +
        "tushunmagan holatda edim\" degan asoslar bilan " +
        "nizolashtirish ancha qiyin.\n\n" +
        "AMALIY MASLAHAT: notariusga borishdan oldin barcha " +
        "hujjatlar ro'yxatini oldindan aniqlang va tomonlar " +
        "shaxsini tasdiqlovchi hujjatlarni tayyorlang — bu " +
        "vaqtni tejaydi.",
      example:
        "Katta summadagi bitim ixtiyoriy ravishda notarial " +
        "tasdiqlandi — keyinchalik uni nizolashtirish urinishi " +
        "natija bermadi.",
      keyPoints: [
        "Notarial tasdiqlash notarius yozuvi bilan amalga oshiriladi",
        "U qonun talabi yoki tomonlar kelishuvi bilan bo'ladi",
        "Notarius layoqat va irodani tekshiradi",
        "Notarial bitimni nizolashtirish ancha qiyin",
      ],
      warning:
        "Notariusga hujjatlarni to'liq olib bormaslik — jarayonni " +
        "cho'zadi.",
      lawRefs: [{ code: "FK", article: "110" }],
    },
    {
      heading: "Bitimlarni davlat ro'yxatidan o'tkazish",
      text:
        "Yer va boshqa ko'chmas mol-mulk bilan bog'liq bitimlar " +
        "DAVLAT RO'YXATIDAN o'tkazilishi shart. Qonunda nazarda " +
        "tutilgan hollarda boshqa mol-mulk bilan bog'liq " +
        "bitimlar ham ro'yxatdan o'tkaziladi.\n\n" +
        "⚠️ RO'YXATDAN O'TKAZISH — SHAKLIYATCHILIK EMAS. Ko'chmas " +
        "mulkka bo'lgan huquq aynan shu paytdan o'tadi. Undan " +
        "oldin xaridor hali to'liq himoyalanmagan.\n\n" +
        "BO'YIN TOVLASH HOLATI: agar bitim qonun talab qilgan " +
        "shaklda tuzilgan bo'lsa-yu, tomonlardan biri uni " +
        "ro'yxatdan o'tkazishdan bo'yin tovlasa, sud ikkinchi " +
        "tomonning talabiga binoan bitimni ro'yxatdan " +
        "o'tkazish to'g'risida qaror chiqarishga haqli.\n\n" +
        "Bunday holatda bitim SUD QARORIGA muvofiq ro'yxatdan " +
        "o'tkaziladi va asossiz bo'yin tovlagan tomon " +
        "ikkinchisiga yetkazilgan ZARARNI qoplashi kerak.\n\n" +
        "AMALIY XULOSA: sotuvchi ro'yxatdan o'tkazishga " +
        "kelmasa, bu boshi berk ko'cha emas — sudga murojaat " +
        "qilish mumkin. Lekin bunda vaqt va xarajat ketadi, " +
        "shuning uchun ro'yxatdan o'tkazishni bitim bilan " +
        "bir vaqtda amalga oshirish eng to'g'ri yo'l.",
      example:
        "Sotuvchi ro'yxatdan o'tkazishga kelmadi — xaridor sud " +
        "qarori bilan ro'yxatdan o'tkazishni talab qilishi " +
        "mumkin.",
      keyPoints: [
        "Ko'chmas mulk bitimlari davlat ro'yxatidan o'tkaziladi",
        "Huquq aynan shu paytdan o'tadi",
        "Bo'yin tovlansa sud qarori bilan o'tkaziladi",
        "Bo'yin tovlagan tomon zararni qoplaydi",
      ],
      warning:
        "To'lov va ro'yxat orasidagi vaqt — eng xavfli oraliq.",
      lawRefs: [{ code: "FK", article: "111" }],
    },
    {
      heading: "Notarial shakl va ro'yxat talabi buzilsa",
      text:
        "Oddiy yozma shakldan farqli ravishda, bu yerda oqibat " +
        "ancha og'ir.\n\n" +
        "Bitimning NOTARIAL shakliga rioya qilmaslik uni HAQIQIY " +
        "EMAS qiladi. Qonunda belgilangan davlat ro'yxatidan " +
        "o'tkazish talabiga rioya qilmaslik ham xuddi shunday " +
        "oqibatga olib keladi.\n\n" +
        "⚠️ YA'NI BU YERDA \"BITIM BOR, FAQAT ISBOTLASH QIYIN\" " +
        "DEGAN HOLAT YO'Q — bitim umuman kuchga ega emas.\n\n" +
        "ISTISNO — QISMAN BAJARISH QOIDASI: agar tomonlardan " +
        "biri notarial tasdiqlashni talab qiladigan bitimni " +
        "TO'LIQ yoki QISMAN BAJARGAN bo'lsa, ikkinchisi esa " +
        "notarial tasdiqlashdan bo'yin tovlasa, sud bajargan " +
        "tomonning talabiga binoan bitimni HAQIQIY deb topishga " +
        "haqli.\n\n" +
        "Bunday holatda bitimni keyinchalik notarial " +
        "tasdiqlash talab qilinmaydi.\n\n" +
        "AMALIY XULOSA: pul to'langani va bajarish " +
        "boshlangani hujjat bilan tasdiqlansa, holat " +
        "tuzatilishi mumkin. Lekin bunga tayanib ish tutish " +
        "xavfli — shaklni boshidanoq to'g'ri bajaring.",
      example:
        "Notarial shakl talab qilinadigan bitim bo'yicha pul " +
        "to'landi, ikkinchi tomon esa notariusga bormadi — sud " +
        "bitimni haqiqiy deb topishi mumkin.",
      keyPoints: [
        "Notarial shakl buzilishi bitimni haqiqiy emas qiladi",
        "Ro'yxat talabi buzilishi ham shunday oqibatga olib keladi",
        "Qisman bajarish holatida sud bitimni haqiqiy deb topishi mumkin",
        "Bunda keyingi notarial tasdiqlash talab qilinmaydi",
      ],
      warning:
        "Bajarishni boshlash orqali shaklni \"tuzatish\" — " +
        "kafolatlanmagan va uzoq yo'l.",
      lawRefs: [{ code: "FK", article: "112" }],
    },
  ],
};

module.exports = { LESSON };
