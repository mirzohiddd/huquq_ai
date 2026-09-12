"use strict";
/**
 * SHARTNOMALAR MODULI — 12-DARS: XIZMAT VA SAQLASH.
 * FK2 703–708 (haq evaziga xizmat) + 875–913 (omonat saqlash)
 * + 976–984 (ommaviy va'da, tanlov, o'yinlar).
 *
 * ⚠️ NIMA UCHUN SAQLASH SHU DARSDA: "Haq evaziga xizmat
 * ko'rsatish" bobida atigi 6 modda bor. Saqlash esa mohiyatan
 * xizmat (ashyoni saqlab berish) va u kundalik hayotda eng
 * ko'p uchraydigan xizmat turlaridan biri — kiyimxona,
 * yukxona, mehmonxona, lombard, ombor.
 */

const LESSON = {
  key: "xizmat-korsatish",
  category: "contracts",
  level: "mid",
  order: 3120,
  title: "Haq evaziga xizmat ko'rsatish shartnomasi",
  desc:
    "Xizmat ko'rsatish shartnomasi va uni bekor qilish, omonat " +
    "saqlash qoidalari, saqlovchining javobgarligi, saqlashning " +
    "maxsus turlari hamda ommaviy va'da va tanlovlar.",
  objectives: [
    "Xizmat va pudrat farqini aniq bilasiz",
    "Xizmat shartnomasini bekor qilish qoidasini bilasiz",
    "Omonat saqlash shartnomasining shartlarini bilasiz",
    "Saqlovchining javobgarlik darajasini bilasiz",
    "Kiyimxona, yukxona va mehmonxona qoidalarini bilasiz",
    "Ommaviy va'da va tanlov qoidalarini bilasiz",
  ],
  practicalSteps: [
    "Xizmat shartnomasida natija emas, bajariladigan harakatlarni aniq yozing",
    "Xizmatdan voz kechsangiz ijrochining haqiqiy xarajatlarini hisoblang",
    "Saqlashga topshirganda kvitansiya yoki jeton oling va saqlang",
    "Qimmatbaho buyumni topshirganda uning qiymatini hujjatda ko'rsating",
    "Mehmonxonada qimmatbaho narsalarni seyfga topshiring",
  ],
  sections: [
    {
      heading: "Haq evaziga xizmat ko'rsatish shartnomasi",
      text:
        "HAQ EVAZIGA XIZMAT KO'RSATISH shartnomasi bo'yicha " +
        "ijrochi buyurtmachining topshirig'iga binoan " +
        "XIZMATLAR ko'rsatish (muayyan harakatlarni amalga " +
        "oshirish yoki muayyan faoliyatni yuritish), " +
        "buyurtmachi esa ularning haqini to'lash " +
        "majburiyatini oladi.\n\n" +
        "⚠️ PUDRATDAN ASOSIY FARQI: bu yerda MODDIY NATIJA " +
        "yo'q — to'lov HARAKATNING O'ZI uchun qilinadi.\n\n" +
        "Misollar: tibbiy, veterinariya, auditorlik, " +
        "maslahat, axborot, ta'lim va turistik " +
        "xizmatlar.\n\n" +
        "AMALIY OQIBAT: shifokor davolash uchun to'lov " +
        "oladi, sog'ayish kafolati uchun emas; maslahatchi " +
        "maslahat uchun to'lov oladi, natija uchun " +
        "emas.\n\n" +
        "SHUNING UCHUN SHARTNOMADA nima aynan " +
        "bajarilishini imkon qadar aniq yozish kerak — " +
        "\"maslahat berish\" emas, \"shartnomani tahlil " +
        "qilish va yozma xulosa berish\".\n\n" +
        "SHAXSAN BAJARISH: ijrochi xizmatlarni SHAXSAN " +
        "ko'rsatishi shart — shartnomada boshqacha " +
        "nazarda tutilmagan bo'lsa.\n\n" +
        "Bu muhim: agar siz muayyan mutaxassisni " +
        "tanlagan bo'lsangiz, uni boshqasi bilan " +
        "almashtirish shartnoma buzilishi bo'ladi.\n\n" +
        "PUDRAT QOIDALARI xizmat ko'rsatish shartnomasiga " +
        "ham tegishli tarzda qo'llaniladi — bu " +
        "kelishmovchiliklarni hal qilishda foydali.",
      example:
        "Shartnomada faqat \"konsalting xizmati\" deb " +
        "yozildi — bajarilgan-bajarilmagani bo'yicha " +
        "nizo chiqdi.",
      keyPoints: [
        "Xizmatda moddiy natija bo'lmaydi",
        "To'lov harakatning o'zi uchun qilinadi",
        "Ijrochi xizmatni shaxsan ko'rsatishi shart",
        "Pudrat qoidalari tegishli tarzda qo'llaniladi",
      ],
      warning:
        "Xizmat mazmunini noaniq yozish — \"bajarildimi\" " +
        "degan bahsning asosiy sababi.",
      lawRefs: [
        { code: "FK2", article: "703" },
        { code: "FK2", article: "704" },
        { code: "FK2", article: "708" },
      ],
    },
    {
      heading: "To'lov, javobgarlik va shartnomani bekor qilish",
      text:
        "TO'LOV: buyurtmachi xizmatlar haqini shartnomada " +
        "belgilangan muddatlarda va tartibda to'laydi.\n\n" +
        "⚠️ BAJARISH IMKONSIZ BO'LGAN HOLATLAR ALOHIDA " +
        "TARTIBGA SOLINGAN:\n\n" +
        "— Bajarish BUYURTMACHINING aybi bilan imkonsiz " +
        "bo'lsa, xizmatlar to'liq to'lanadi;\n\n" +
        "— Bajarish tomonlarning HECH BIRI javob " +
        "bermaydigan holatlar tufayli imkonsiz bo'lsa, " +
        "buyurtmachi ijrochining haqiqatda ko'rgan " +
        "XARAJATLARINI qoplaydi.\n\n" +
        "Bu qoida favqulodda vaziyatlarda juda muhim " +
        "bo'ladi.\n\n" +
        "BEKOR QILISH — ENG MUHIM QOIDA: har ikkala tomon " +
        "ham shartnomadan bir tomonlama voz kechishi " +
        "mumkin, lekin shartlar boshqa-boshqa:\n\n" +
        "BUYURTMACHI voz kechsa — ijrochining haqiqatda " +
        "ko'rgan xarajatlarini to'laydi.\n\n" +
        "IJROCHI voz kechsa — buyurtmachiga yetkazilgan " +
        "ZARARLARNI to'liq qoplaydi.\n\n" +
        "⚠️ ASIMMETRIYA MANTIQIY: ijrochi professional " +
        "tomon, u majburiyatni olgan; buyurtmachi esa " +
        "shaxsiy ehtiyoji o'zgargani uchun voz " +
        "kechishi mumkin.\n\n" +
        "AMALIY XULOSA: xizmatdan voz kechayotganda " +
        "ijrochidan xarajatlarni HUJJAT bilan " +
        "asoslashni so'rang — \"shartnoma " +
        "summasining yarmi\" degan talab avtomatik " +
        "asosli emas.",
      example:
        "Buyurtmachi kurs xizmatidan voz kechdi — " +
        "faqat haqiqatda qilingan xarajat to'lanadi.",
      keyPoints: [
        "Buyurtmachi aybi bilan imkonsiz bo'lsa to'liq to'lanadi",
        "Ikkala tomon aybsiz bo'lsa xarajat qoplanadi",
        "Buyurtmachi voz kechsa xarajatni to'laydi",
        "Ijrochi voz kechsa zararni to'liq qoplaydi",
      ],
      warning:
        "Voz kechishda ushlab qolinadigan summani " +
        "hujjat bilan asoslashni talab qiling.",
      lawRefs: [
        { code: "FK2", article: "705" },
        { code: "FK2", article: "706" },
        { code: "FK2", article: "707" },
      ],
    },
    {
      heading: "Omonat saqlash shartnomasi",
      text:
        "OMONAT SAQLASH shartnomasi bo'yicha bir tomon " +
        "(saqlovchi) ikkinchi tomon (yuk topshiruvchi) " +
        "bergan ashyoni SAQLASH va uni butligicha " +
        "QAYTARISH majburiyatini oladi.\n\n" +
        "SHAKL: shartnoma qonunda belgilangan hollarda " +
        "yozma shaklda tuziladi. Yozma shakl " +
        "KVITANSIYA, GUVOHNOMA, JETON yoki boshqa " +
        "hujjat bilan ham tasdiqlanadi.\n\n" +
        "⚠️ AMALIY XULOSA: kiyimxona jetoni yoki " +
        "yukxona kvitansiyasi — bu to'liq huquqiy " +
        "hujjat. Uni yo'qotish talabni isbotlashni " +
        "sezilarli qiyinlashtiradi.\n\n" +
        "MUDDAT: shartnomada belgilanadi. Belgilanmagan " +
        "bo'lsa, saqlovchi ashyoni yuk topshiruvchi " +
        "uni talab qilgunga qadar saqlaydi.\n\n" +
        "QAYTARIB OLISH HUQUQI: yuk topshiruvchi ashyoni " +
        "ISTALGAN PAYTDA qaytarib olishga haqli — " +
        "shartnomada saqlash muddati belgilangan " +
        "bo'lsa ham.\n\n" +
        "SAQLOVCHINING MAJBURIYATLARI: ashyoning to'liq " +
        "saqlanishini ta'minlash uchun shartnomada " +
        "nazarda tutilgan va zarur choralarni " +
        "ko'rish.\n\n" +
        "FOYDALANISH TAQIQI: saqlovchi saqlashga " +
        "topshirilgan ashyodan FOYDALANISHGA haqli " +
        "emas — yuk topshiruvchining roziligisiz.\n\n" +
        "UCHINCHI SHAXSGA TOPSHIRISH ham roziliksiz " +
        "mumkin emas — yuk topshiruvchi " +
        "manfaatlarini ko'zlab zarur bo'lgan " +
        "hollardan tashqari; bunda saqlovchi " +
        "uning harakatlari uchun javob beradi.",
      example:
        "Saqlashga topshirilgan uskuna ruxsatsiz " +
        "ishlatildi — bu shartnomani buzish " +
        "hisoblanadi.",
      keyPoints: [
        "Saqlovchi ashyoni saqlab, butligicha qaytaradi",
        "Jeton va kvitansiya — huquqiy hujjat",
        "Yuk topshiruvchi ashyoni istalgan paytda olishi mumkin",
        "Saqlovchi ashyodan foydalana olmaydi",
      ],
      warning:
        "Jeton yoki kvitansiyani yo'qotish talabni " +
        "isbotlashni qiyinlashtiradi.",
      lawRefs: [
        { code: "FK2", article: "875" },
        { code: "FK2", article: "877" },
        { code: "FK2", article: "878" },
        { code: "FK2", article: "880" },
        { code: "FK2", article: "881" },
        { code: "FK2", article: "884" },
        { code: "FK2", article: "888" },
      ],
    },
    {
      heading: "Xavfli ashyolar, haq va xarajatlar",
      text:
        "XAVFLI XOSSALARGA EGA ASHYOLAR alohida tartibga " +
        "solingan: yuk topshiruvchi bunday ashyolarni " +
        "topshirayotganda saqlovchini ular haqida " +
        "OGOHLANTIRISHI shart.\n\n" +
        "⚠️ OGOHLANTIRMASA OQIBAT OG'IR: bunday ashyolar " +
        "istalgan paytda zararsizlantirilishi yoki yo'q " +
        "qilinishi mumkin — yuk topshiruvchiga zarar " +
        "qoplanmasdan. Bundan tashqari u yetkazilgan " +
        "zarar uchun javobgar bo'ladi.\n\n" +
        "HAQ: omonat saqlash haq evaziga yoki tekinga " +
        "bo'lishi mumkin. Haq shartnomada " +
        "belgilanadi.\n\n" +
        "Saqlash muddati tugagach yuk topshiruvchi " +
        "ashyoni olmasa, u kechiktirish davri uchun " +
        "ham haq to'lashi kerak bo'lishi mumkin.\n\n" +
        "XARAJATLAR: saqlash uchun zarur xarajatlar " +
        "odatda saqlash haqiga kiritiladi.\n\n" +
        "ALOHIDA XARAJATLAR (favqulodda, oldindan " +
        "ko'zda tutilmagan) esa alohida qoplanadi — " +
        "yuk topshiruvchi ularga rozilik bergan " +
        "bo'lsa yoki rozilik so'ralganda javob " +
        "bermagan bo'lsa.\n\n" +
        "SAQLASH SHARTLARINI O'ZGARTIRISH: saqlovchi " +
        "shartlarni o'zgartirish zarurati yuzaga " +
        "kelsa, yuk topshiruvchini xabardor qilishi " +
        "va uning javobini kutishi kerak. Ashyoga " +
        "real xavf bo'lsa esa u javobni kutmasdan " +
        "chora ko'rishi mumkin.\n\n" +
        "EGASIZLANTIRIB SAQLASH: bir turdagi " +
        "ashyolar boshqa yuk topshiruvchilarning " +
        "shunday ashyolari bilan aralashtirib " +
        "saqlanishi mumkin — bu shartnomada " +
        "nazarda tutilgan bo'lsa.",
      example:
        "Xavfli modda ogohlantirmasdan topshirildi — " +
        "u tovonsiz yo'q qilinishi mumkin.",
      keyPoints: [
        "Xavfli ashyolar haqida ogohlantirish shart",
        "Ogohlantirilmasa ular tovonsiz yo'q qilinadi",
        "Alohida xarajatlar rozilik bilan qoplanadi",
        "Real xavf bo'lsa saqlovchi darhol chora ko'radi",
      ],
      warning:
        "Ashyoni muddatda olmaslik qo'shimcha haq " +
        "hisoblanishiga olib keladi.",
      lawRefs: [
        { code: "FK2", article: "879" },
        { code: "FK2", article: "882" },
        { code: "FK2", article: "883" },
        { code: "FK2", article: "885" },
        { code: "FK2", article: "886" },
        { code: "FK2", article: "887" },
      ],
    },
    {
      heading: "Saqlovchining javobgarligi va uning darajasi",
      text:
        "Saqlovchi ashyo YO'QOLGANLIGI, KAM CHIQQANLIGI yoki " +
        "SHIKASTLANGANLIGI uchun javob beradi.\n\n" +
        "⚠️ JAVOBGARLIK DARAJASI SAQLASH TURIGA BOG'LIQ VA " +
        "BU ENG MUHIM AJRATISH:\n\n" +
        "HAQ EVAZIGA saqlashda saqlovchi umumiy " +
        "asoslarda javob beradi — professional " +
        "saqlovchi esa yanada qattiqroq javobgarlik " +
        "ko'taradi.\n\n" +
        "TEKINGA saqlashda javobgarlik cheklangan: " +
        "saqlovchi odatda faqat qasd yoki qo'pol " +
        "ehtiyotsizlik uchun javob beradi.\n\n" +
        "JAVOBGARLIK HAJMI: haq evaziga saqlashda " +
        "zarar to'liq qoplanadi (yo'qolgan yoki kam " +
        "chiqqan ashyo qiymati; shikastlanganda esa " +
        "qiymatning kamayishi).\n\n" +
        "Tekinga saqlashda hajm odatda cheklangan " +
        "bo'ladi.\n\n" +
        "MUDDATDAN KEYINGI JAVOBGARLIK: saqlash " +
        "muddati tugagach yuk topshiruvchi ashyoni " +
        "olmasa, saqlovchining javobgarligi " +
        "kamayishi mumkin.\n\n" +
        "SAQLOVCHIGA ZARAR: yuk topshiruvchi " +
        "ashyoning xossalari tufayli saqlovchiga " +
        "yetkazilgan zararni qoplashi shart — " +
        "saqlovchi bu xossalar haqida bilmagan va " +
        "bilishi kerak bo'lmagan bo'lsa.\n\n" +
        "AMALIY MASLAHAT: qimmatbaho ashyoni " +
        "topshirayotganda uning QIYMATINI hujjatda " +
        "ko'rsating — aks holda zarar qiymati " +
        "bo'yicha nizo chiqadi va odatda past summa " +
        "tan olinadi.",
      example:
        "Qimmat buyum qiymati ko'rsatilmasdan " +
        "topshirildi — yo'qolganda tovon summasi " +
        "bo'yicha nizo chiqdi.",
      keyPoints: [
        "Javobgarlik saqlash haqli yoki tekin ekaniga bog'liq",
        "Professional saqlovchi qattiqroq javob beradi",
        "Tekin saqlashda javobgarlik cheklangan",
        "Ashyo qiymatini hujjatda ko'rsating",
      ],
      warning:
        "Qiymati ko'rsatilmagan ashyo uchun tovon " +
        "past bo'lishi mumkin.",
      lawRefs: [
        { code: "FK2", article: "889" },
        { code: "FK2", article: "890" },
        { code: "FK2", article: "891" },
        { code: "FK2", article: "892" },
        { code: "FK2", article: "893" },
      ],
    },
    {
      heading: "Saqlashning maxsus turlari",
      text:
        "Kundalik hayotda eng ko'p uchraydigan saqlash " +
        "turlari alohida tartibga solingan.\n\n" +
        "LOMBARDDA SAQLASH: fuqarolarga tegishli " +
        "ko'char ashyolar saqlanadi. Shartnoma " +
        "nomerli KVITANSIYA berish bilan " +
        "rasmiylashtiriladi. Ashyo baholanadi va " +
        "lombard uni sug'urtalashi shart.\n\n" +
        "Talab qilib olinmagan ashyolar qonunda " +
        "belgilangan muddat va tartibda " +
        "sotilishi mumkin — tushum lombard " +
        "talablarini qoplagach qoldig'i egasiga " +
        "beriladi.\n\n" +
        "BANKDA SAQLASH: bank qimmatbaho " +
        "buyumlar, hujjatlar va boshqa " +
        "boyliklarni saqlashga qabul qilishi " +
        "mumkin — shu jumladan individual " +
        "seyfdan foydalanish orqali.\n\n" +
        "TRANSPORT TASHKILOTLARINING " +
        "YUKXONALARIDA saqlash ommaviy " +
        "shartnoma hisoblanadi. Yuk yo'qolsa " +
        "yoki shikastlansa, zarar qonunda " +
        "belgilangan muddatda qoplanadi.\n\n" +
        "⚠️ KIYIMXONADA SAQLASH — eng ko'p " +
        "uchraydigan holat: u tekinga bo'lsa " +
        "ham saqlovchi ashyoning to'liq " +
        "saqlanishi uchun choralar ko'rishi " +
        "shart.\n\n" +
        "Ya'ni \"kiyimxona javobgar emas\" degan " +
        "e'lon o'z-o'zidan javobgarlikni bekor " +
        "qilmaydi.\n\n" +
        "MEHMONXONADA SAQLASH: mehmonxona " +
        "mehmonning yo'qolgan yoki shikastlangan " +
        "ashyolari uchun ALOHIDA KELISHUVSIZ ham " +
        "javob beradi.\n\n" +
        "Lekin PUL, QIMMATBAHO buyumlar va " +
        "qimmatli qog'ozlar uchun javobgarlik " +
        "odatda faqat ular alohida saqlashga " +
        "(seyfga) topshirilgan bo'lsa yuzaga " +
        "keladi.\n\n" +
        "SEKVESTR: nizoli ashyo tomonlar " +
        "kelishuvi yoki sud qarori bilan " +
        "uchinchi shaxsga saqlashga topshirilishi " +
        "mumkin — nizo hal bo'lgunga qadar.",
      example:
        "Mehmonxona xonasidan pul yo'qoldi — u " +
        "seyfga topshirilmagan bo'lsa javobgarlik " +
        "cheklangan bo'lishi mumkin.",
      keyPoints: [
        "Lombard ashyoni baholaydi va sug'urtalaydi",
        "Kiyimxona e'loni javobgarlikni bekor qilmaydi",
        "Mehmonxona ashyolar uchun kelishuvsiz javob beradi",
        "Pul va qimmatbaho buyum seyfga topshiriladi",
      ],
      warning:
        "Mehmonxonada qimmatbaho narsani xonada " +
        "qoldirish — javobgarlikni yo'qotish " +
        "xavfini oshiradi.",
      lawRefs: [
        { code: "FK2", article: "894" },
        { code: "FK2", article: "895" },
        { code: "FK2", article: "896" },
        { code: "FK2", article: "897" },
        { code: "FK2", article: "898" },
        { code: "FK2", article: "899" },
        { code: "FK2", article: "900" },
      ],
    },
    {
      heading: "Tovar omborida saqlash va ombor hujjatlari",
      text:
        "TOVAR OMBORI — tovarlarni saqlashni tadbirkorlik " +
        "faoliyati sifatida amalga oshiradigan va " +
        "saqlash bilan bog'liq xizmatlar ko'rsatadigan " +
        "tashkilot.\n\n" +
        "UMUMIY FOYDALANISHDAGI TOVAR OMBORI har bir " +
        "shaxsning tovarini saqlashga qabul qilishi " +
        "shart — bu ommaviy shartnoma.\n\n" +
        "OMBOR MAJBURIYATLARI: tovarlarni qabul " +
        "qilishda ularning miqdori va tashqi " +
        "holatini tekshirish; saqlash shartlarini " +
        "ta'minlash; tovar egasiga tovarni " +
        "tekshirish imkonini berish.\n\n" +
        "QAYTARISHDA TEKSHIRISH: tovar egasi va " +
        "ombor tovarni qaytarish paytida uning " +
        "miqdori va holatini tekshirishga " +
        "haqli.\n\n" +
        "⚠️ MUHIM QOIDA: tovar tekshirilmasdan " +
        "qaytarib olinsa, kam chiqqanlik yoki " +
        "shikastlanish haqidagi ariza tovar " +
        "olingan paytda (yashirin kamchiliklarda " +
        "esa qonunda belgilangan muddatda) yozma " +
        "berilishi kerak. Aks holda tovar " +
        "shartnomaga muvofiq qaytarilgan deb " +
        "hisoblanadi.\n\n" +
        "OMBOR HUJJATLARI uch turda bo'ladi: " +
        "IKKI QISMLI ombor guvohnomasi (ombor " +
        "guvohnomasi va garov guvohnomasidan " +
        "iborat), ODDIY ombor guvohnomasi va " +
        "ombor kvitansiyasi.\n\n" +
        "⚠️ AMALDA BULARNING QIYMATI KATTA: " +
        "ombor guvohnomasi QIMMATLI QOG'OZ " +
        "hisoblanadi. Uni boshqa shaxsga berish " +
        "orqali tovarni JISMONAN ko'chirmasdan " +
        "sotish mumkin.\n\n" +
        "GAROV GUVOHNOMASI esa tovarni garovga " +
        "qo'yish imkonini beradi — ombordagi " +
        "tovar hisobidan kredit olish shu " +
        "yo'l bilan amalga oshiriladi.\n\n" +
        "Tovar ikki qismli guvohnoma bo'yicha " +
        "faqat ikkala qism taqdim etilganda " +
        "beriladi.",
      example:
        "Ombordagi tovar guvohnomani boshqa shaxsga " +
        "berish orqali sotildi — tovar " +
        "ko'chirilmadi.",
      keyPoints: [
        "Umumiy foydalanishdagi ombor — ommaviy shartnoma",
        "Qaytarishda tovarni tekshirish huquqi bor",
        "Ariza berilmasa tovar to'g'ri qaytarilgan hisoblanadi",
        "Ombor guvohnomasi — qimmatli qog'oz",
      ],
      warning:
        "Tovarni tekshirmasdan olib, keyin ariza " +
        "bermaslik talabni yo'qotadi.",
      lawRefs: [
        { code: "FK2", article: "901" },
        { code: "FK2", article: "902" },
        { code: "FK2", article: "903" },
        { code: "FK2", article: "905" },
        { code: "FK2", article: "906" },
        { code: "FK2", article: "908" },
        { code: "FK2", article: "909" },
        { code: "FK2", article: "910" },
        { code: "FK2", article: "913" },
      ],
    },
    {
      heading: "Ommaviy va'da, tanlov va o'yinlar",
      text:
        "Dars yakunida bir tomonlama harakatdan kelib " +
        "chiqadigan majburiyatlarni ko'rib chiqamiz.\n\n" +
        "OMMAVIY VA'DA (mukofot): kim muayyan " +
        "harakatni bajarsa unga mukofot to'lash " +
        "haqidagi ommaviy e'lon majburiyat " +
        "yaratadi.\n\n" +
        "⚠️ YA'NI \"YO'QOLGAN NARSANI TOPGANGA MUKOFOT\" " +
        "DEGAN E'LON HUQUQIY MAJBURIYATDIR — uni " +
        "keyinchalik bajarmaslik mumkin emas.\n\n" +
        "Va'dani bekor qilish qonunda belgilangan " +
        "tartibda va odatda e'lon berilgan usulda " +
        "amalga oshiriladi. Harakat allaqachon " +
        "bajarilgan bo'lsa, bekor qilish natija " +
        "bermaydi.\n\n" +
        "OMMAVIY TANLOV: tanlov e'lon qilgan shaxs " +
        "eng yaxshi ish uchun mukofot to'lash " +
        "majburiyatini oladi.\n\n" +
        "Tanlov shartlarida: vazifaning mohiyati, " +
        "taqdim etish muddati, baholash mezonlari " +
        "va tartibi, mukofot miqdori " +
        "ko'rsatiladi.\n\n" +
        "Shartlarni o'zgartirish yoki tanlovni " +
        "bekor qilish faqat qonunda belgilangan " +
        "muddat va tartibda mumkin.\n\n" +
        "Taqdim etilgan ishlar g'olib " +
        "chiqmaganlarga QAYTARILADI — tanlov " +
        "shartlarida boshqacha nazarda tutilmagan " +
        "bo'lsa.\n\n" +
        "⚠️ QIMOR VA TAVAKKALCHILIKKA ASOSLANGAN " +
        "O'YINLAR — ENG MUHIM AMALIY QOIDA: bunday " +
        "o'yinlar bilan bog'liq talablar odatda " +
        "SUD HIMOYASIDA BO'LMAYDI.\n\n" +
        "Ya'ni o'yin bo'yicha qarzni sud orqali " +
        "undirib bo'lmaydi. Istisnolar qonunda " +
        "aniq ko'rsatilgan (masalan aldash yoki " +
        "zo'rlik ta'sirida ishtirok etganlar).\n\n" +
        "Lotereyalar va internetdagi " +
        "tavakkalchilikka asoslangan o'yinlar " +
        "uchun alohida qoidalar amal qiladi.",
      example:
        "O'yin bo'yicha qarz sudga berildi — bunday " +
        "talab odatda sud himoyasida bo'lmaydi.",
      keyPoints: [
        "Ommaviy va'da huquqiy majburiyat yaratadi",
        "Bajarilgan harakatdan keyin va'dani bekor qilib bo'lmaydi",
        "Tanlov shartlari oldindan e'lon qilinadi",
        "Qimor bilan bog'liq talablar sud himoyasida emas",
      ],
      warning:
        "O'yin qarzi bo'yicha \"sudga beraman\" degan " +
        "tahdid odatda asossiz.",
      lawRefs: [
        { code: "FK2", article: "976" },
        { code: "FK2", article: "977" },
        { code: "FK2", article: "978" },
        { code: "FK2", article: "980" },
        { code: "FK2", article: "981" },
        { code: "FK2", article: "982" },
        { code: "FK2", article: "983" },
        { code: "FK2", article: "984" },
      ],
    },
  ],
};

module.exports = { LESSON };
