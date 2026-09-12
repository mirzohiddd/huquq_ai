"use strict";
/**
 * SUD MODULI — 7-DARS: JINOYAT PROTSESSI.
 * JPK 1–27, 45–60, 81–90, 321–324.
 */

const LESSON = {
  key: "jinoyat-protsessi",
  category: "process",
  level: "mid",
  order: 12070,
  title: "Jinoyat protsessi: asosiy kafolatlar",
  desc:
    "Jinoyat protsessining prinsiplari, aybsizlik prezumpsiyasi, " +
    "himoyalanish huquqi, gumon qilinuvchi va ayblanuvchining " +
    "huquqlari, jabrlanuvchi maqomi, dalillar hamda jinoyat ishini " +
    "qo'zg'atish.",
  objectives: [
    "Jinoyat protsessining prinsiplarini bilasiz",
    "Aybsizlik prezumpsiyasining mazmunini bilasiz",
    "Gumon qilinuvchi va ayblanuvchi huquqlarini bilasiz",
    "Jabrlanuvchi maqomini va uning huquqlarini bilasiz",
    "Dalillarning turlarini bilasiz",
    "Jinoyat ishi qanday qo'zg'atilishini bilasiz",
  ],
  practicalSteps: [
    "Birinchi so'roqdan oldin advokat talab qiling",
    "Huquqlaringiz tushuntirilganini bayonnomada tekshiring",
    "Ko'rsatuv berishdan bosh tortish huquqingizni biling",
    "Jabrlanuvchi sifatida fuqaroviy da'vo qo'ying",
    "Har bir bayonnomani o'qib, e'tirozni yozdiring",
  ],
  sections: [
    {
      heading: "Jinoyat protsessining prinsiplari",
      text:
        "JINOYAT-PROTSESSUAL QONUNCHILIGI " +
        "jinoyat ishlarini yuritish tartibini " +
        "belgilaydi.\n\n" +
        "VAZIFALARI: jinoyatlarni tez va " +
        "to'liq ochish, aybdorlarni " +
        "fosh etish va aybsizlarni " +
        "javobgarlikka tortilishidan " +
        "himoya qilish.\n\n" +
        "⚠️ IKKINCHI QISM E'TIBORDAN " +
        "CHETDA QOLADI: protsessning " +
        "vazifasi faqat jazolash emas, " +
        "AYBSIZNI HIMOYA QILISH " +
        "ham.\n\n" +
        "ASOSIY PRINSIPLAR: qonuniylik; " +
        "odil sudlovni faqat sud amalga " +
        "oshirishi; sudyalarning " +
        "mustaqilligi; qonun va sud " +
        "oldida tenglik; SHAXSNING SHA'NI " +
        "VA QADR-QIMMATINI HURMAT " +
        "QILISH; fuqarolarning huquq va " +
        "erkinliklarini muhofaza qilish; " +
        "oshkoralik; til; HAQIQATNI " +
        "ANIQLASH; AYBSIZLIK " +
        "PREZUMPSIYASI; HIMOYALANISH " +
        "HUQUQI; TORTISHUV; dalillarni " +
        "bevosita va og'zaki tekshirish.\n\n" +
        "⚠️ SHA'N VA QADR-QIMMATNI " +
        "HURMAT QILISH prinsipi amaliy: " +
        "so'roq va boshqa harakatlarda " +
        "kamsituvchi muomala " +
        "taqiqlanadi.\n\n" +
        "SHIKOYAT QILISH HUQUQI: " +
        "protsessual harakatlar va " +
        "qarorlar ustidan shikoyat " +
        "qilish mumkin.\n\n" +
        "AMALIY XULOSA: jinoyat " +
        "protsessida har bir bosqichda " +
        "shikoyat imkoniyati bor va " +
        "undan foydalanish kerak.\n\n" +
        "IShTIROKCHILAR: sud, prokuror, " +
        "tergovchi, surishtiruvchi, " +
        "tergov sudyasi va boshqa " +
        "shaxslarning vakolatlari " +
        "belgilangan.\n\n" +
        "⚠️ TERGOV SUDYASI — muhim " +
        "figura: u eng jiddiy " +
        "protsessual harakatlarga " +
        "(qamoqqa olish, tintuv, " +
        "eshitib turish) ruxsat " +
        "beradi.\n\n" +
        "Ya'ni bu qarorlarni tergovchi " +
        "o'zi qabul qila olmaydi.",
      example:
        "Protsessual harakat ustidan " +
        "shikoyat berildi va u qonunga " +
        "xilof deb topildi.",
      keyPoints: [
        "Protsessning vazifasi aybsizni ham himoya qilish",
        "Prinsiplar orasida aybsizlik prezumpsiyasi markaziy",
        "Har bir harakat ustidan shikoyat qilish mumkin",
        "Eng jiddiy harakatlarga sud ruxsat beradi",
      ],
      warning:
        "Shikoyat qilmaslik buzilishni " +
        "qonuniylashtirmaydi, lekin uni " +
        "tuzatish imkonini kechiktiradi.",
      lawRefs: [
        { code: "JPK", article: "1" },
        { code: "JPK", article: "2" },
        { code: "JPK", article: "11" },
        { code: "JPK", article: "12" },
        { code: "JPK", article: "16" },
        { code: "JPK", article: "17" },
        { code: "JPK", article: "18" },
        { code: "JPK", article: "19" },
        { code: "JPK", article: "20" },
        { code: "JPK", article: "22" },
        { code: "JPK", article: "25" },
        { code: "JPK", article: "26" },
        { code: "JPK", article: "27" },
        { code: "JPK", article: "31-1" },
      ],
    },
    {
      heading: "Aybsizlik prezumpsiyasi",
      text:
        "AYBSIZLIK PREZUMPSIYASI — jinoyat " +
        "protsessining markaziy kafolati.\n\n" +
        "⚠️ MAZMUNI: shaxs qonuniy kuchga " +
        "kirgan SUD HUKMI bilan aybi " +
        "aniqlanmaguncha AYBSIZ " +
        "hisoblanadi.\n\n" +
        "BUNDAN UCHTA AMALIY XULOSA " +
        "KELIB CHIQADI:\n\n" +
        "(1) ISBOT YUKI AYBLOV " +
        "TOMONIDA. Siz o'z " +
        "aybsizligingizni isbotlashga " +
        "MAJBUR EMASSIZ.\n\n" +
        "Bu juda muhim: \"aybsizligingizni " +
        "isbotlang\" degan talab " +
        "qonunga xilof.\n\n" +
        "(2) BARTARAF ETIB " +
        "BO'LMAYDIGAN SHUBHALAR " +
        "AYBLANUVCHI FOYDASIGA " +
        "talqin qilinadi.\n\n" +
        "Ya'ni shubha qolgan holatda " +
        "ayblov hukmi chiqarilishi " +
        "mumkin emas.\n\n" +
        "(3) AYBLOV HUKMI TAXMINLARGA " +
        "ASOSLANISHI mumkin emas — u " +
        "faqat tekshirilgan " +
        "DALILLARGA asoslanadi.\n\n" +
        "AYBLASH VA HUKM QILISH UCHUN " +
        "ASOSLAR qonunda aniq " +
        "belgilangan.\n\n" +
        "⚠️ REABILITATSIYA UCHUN " +
        "ASOSLAR ham belgilangan — " +
        "ya'ni shaxs aybsiz deb " +
        "topilsa uning huquqlari " +
        "TIKLANADI va yetkazilgan " +
        "zarar qoplanadi.\n\n" +
        "Bu ko'pchilikka noma'lum, " +
        "lekin muhim huquq.\n\n" +
        "AYBLILIK MASALASINI HAL " +
        "QILMAY TURIB ishni tugatish " +
        "asoslari ham nazarda " +
        "tutilgan.\n\n" +
        "AMALIY QADAM: agar sizga " +
        "nisbatan ish tugatilsa, " +
        "u QAYSI ASOSDA " +
        "tugatilganini aniqlang — " +
        "reabilitatsiya asosi bilan " +
        "tugatilishi sizning " +
        "huquqlaringizni tiklaydi.",
      example:
        "Shubhalar bartaraf etilmadi — " +
        "ular ayblanuvchi foydasiga " +
        "talqin qilinishi kerak.",
      keyPoints: [
        "Shaxs hukmgacha aybsiz hisoblanadi",
        "Isbot yuki ayblov tomonida",
        "Shubhalar ayblanuvchi foydasiga talqin qilinadi",
        "Reabilitatsiya huquqlarni tiklaydi",
      ],
      warning:
        "\"Aybsizligingizni isbotlang\" degan " +
        "talab qonunga xilof.",
      lawRefs: [
        { code: "JPK", article: "23" },
        { code: "JPK", article: "82" },
        { code: "JPK", article: "83" },
        { code: "JPK", article: "84" },
      ],
    },
    {
      heading: "Himoyalanish huquqi",
      text:
        "GUMON QILINUVCHI, AYBLANUVCHI VA " +
        "SUDLANUVCHINI HIMOYALANISH HUQUQI " +
        "bilan ta'minlash — alohida " +
        "prinsip.\n\n" +
        "⚠️ HIMOYACHI ISHTIROK ETISHI SHART " +
        "BO'LGAN HOLLAR qonunda " +
        "belgilangan — masalan " +
        "voyaga yetmaganlar, jismoniy " +
        "yoki ruhiy nuqsoni bo'lganlar " +
        "va og'ir jinoyatlar bo'yicha " +
        "ishlarda.\n\n" +
        "Bunday hollarda himoyachisiz " +
        "o'tkazilgan harakatlar " +
        "qonunga xilof hisoblanadi.\n\n" +
        "HIMOYACHINI TAKLIF ETISH: " +
        "himoyachini shaxsning o'zi, " +
        "uning qonuniy vakillari yoki " +
        "boshqa shaxslar taklif " +
        "qilishi mumkin.\n\n" +
        "HIMOYACHIDAN VOZ KECHISH " +
        "tartibi belgilangan.\n\n" +
        "⚠️ AMALIY OGOHLANTIRISH: " +
        "himoyachidan voz kechish " +
        "IXTIYORIY bo'lishi kerak.\n\n" +
        "Bosim ostida yoki " +
        "\"advokat kerak emas, tez " +
        "hal qilamiz\" degan gap " +
        "asosida voz kechish " +
        "keyinchalik " +
        "nizolashtirilishi " +
        "mumkin.\n\n" +
        "HIMOYACHINING HUQUQ VA " +
        "MAJBURIYATLARI keng: " +
        "himoyalanuvchi bilan " +
        "uchrashish, ish materiallari " +
        "bilan tanishish, dalillar " +
        "taqdim etish, " +
        "iltimosnomalar berish, " +
        "protsessual harakatlarda " +
        "ishtirok etish, shikoyat " +
        "qilish.\n\n" +
        "⚠️ AMALIY QOIDA — ENG MUHIM " +
        "MASLAHAT: birinchi " +
        "so'roqdan OLDIN advokat " +
        "talab qiling.\n\n" +
        "Birinchi so'roqda berilgan " +
        "ko'rsatuvlar butun ishning " +
        "yo'nalishini " +
        "belgilaydi — ularni " +
        "keyinchalik o'zgartirish " +
        "juda qiyin.\n\n" +
        "JAMOAT HIMOYACHISI va " +
        "tadbirkorlik subyektining " +
        "jamoat himoyachisi " +
        "sifatidagi vakili ham " +
        "ishtirok etishi mumkin.",
      example:
        "Advokatsiz birinchi so'roq " +
        "o'tkazildi — bu keyinchalik " +
        "nizolashtirildi.",
      keyPoints: [
        "Himoyachi ishtiroki ayrim hollarda majburiy",
        "Himoyachidan voz kechish ixtiyoriy bo'lishi kerak",
        "Himoyachining huquqlari keng",
        "Birinchi so'roqdan oldin advokat talab qiling",
      ],
      warning:
        "Birinchi so'roqdagi ko'rsatuvni " +
        "keyinchalik o'zgartirish juda " +
        "qiyin.",
      lawRefs: [
        { code: "JPK", article: "24" },
        { code: "JPK", article: "49" },
        { code: "JPK", article: "50" },
        { code: "JPK", article: "51" },
        { code: "JPK", article: "52" },
        { code: "JPK", article: "53" },
        { code: "JPK", article: "42" },
        { code: "JPK", article: "44" },
      ],
    },
    {
      heading: "Gumon qilinuvchi va ayblanuvchining huquqlari",
      text:
        "GUMON QILINUVCHI — jinoyat sodir " +
        "etganlikda gumon qilinayotgan " +
        "shaxs.\n\n" +
        "AYBLANUVCHI — unga nisbatan ayblov " +
        "e'lon qilingan shaxs.\n\n" +
        "⚠️ ASOSIY HUQUQLAR (ikkalasiga " +
        "ham tegishli):\n\n" +
        "— nimada gumon qilinayotgani " +
        "yoki ayblanayotganini BILISH;\n\n" +
        "— HIMOYACHI yordamidan " +
        "foydalanish va u bilan " +
        "MAXFIY uchrashish;\n\n" +
        "— KO'RSATUV BERISH yoki " +
        "berishdan BOSH TORTISH;\n\n" +
        "— dalillar taqdim etish;\n\n" +
        "— iltimosnomalar berish;\n\n" +
        "— ona tilida so'zlash va " +
        "tarjimondan foydalanish;\n\n" +
        "— protsessual harakatlarda " +
        "ishtirok etish;\n\n" +
        "— bayonnomalar bilan " +
        "tanishish va ularga e'tiroz " +
        "bildirish;\n\n" +
        "— harakat va qarorlar " +
        "ustidan SHIKOYAT qilish.\n\n" +
        "⚠️ KO'RSATUV BERISHDAN BOSH " +
        "TORTISH HUQUQI ENG KO'P " +
        "E'TIBORDAN CHETDA QOLADI.\n\n" +
        "Bu huquq va undan " +
        "foydalanish sizga qarshi " +
        "dalil sifatida " +
        "ishlatilmasligi kerak.\n\n" +
        "AMALIY MASLAHAT: agar " +
        "vaziyatni tushunmasangiz " +
        "yoki advokat bo'lmasa — " +
        "ko'rsatuv berishga " +
        "shoshilmang.\n\n" +
        "MAJBURIYATLAR: chaqiruvga " +
        "kelish va protsessual " +
        "tartibga rioya qilish.\n\n" +
        "⚠️ AMALIY QOIDA: har bir " +
        "bayonnomani IMZOLASHDAN " +
        "OLDIN to'liq o'qing.\n\n" +
        "Sizning so'zlaringiz " +
        "noto'g'ri yozilgan bo'lishi " +
        "mumkin. Rozi bo'lmasangiz " +
        "e'tirozni O'SHA " +
        "bayonnomaga yozing.\n\n" +
        "QONUNIY VAKILLAR voyaga " +
        "yetmaganlar va boshqa " +
        "toifadagi shaxslarning " +
        "manfaatlarini ifodalaydi.",
      example:
        "Bayonnoma o'qilmasdan imzolandi — " +
        "keyin undagi ma'lumot " +
        "nizolashtirildi.",
      keyPoints: [
        "Nimada ayblanayotganingizni bilish huquqi",
        "Himoyachi bilan maxfiy uchrashish mumkin",
        "Ko'rsatuv berishdan bosh tortish huquqi bor",
        "Bayonnomani o'qib e'tirozni yozdiring",
      ],
      warning:
        "Advokatsiz ko'rsatuv berishga " +
        "shoshilmang.",
      lawRefs: [
        { code: "JPK", article: "45" },
        { code: "JPK", article: "46" },
        { code: "JPK", article: "47" },
        { code: "JPK", article: "48" },
        { code: "JPK", article: "60" },
      ],
    },
    {
      heading: "Jabrlanuvchi va fuqaroviy da'vo",
      text:
        "JABRLANUVCHI — jinoyat natijasida " +
        "moddiy, jismoniy yoki ma'naviy " +
        "zarar ko'rgan shaxs.\n\n" +
        "⚠️ JABRLANUVCHI PASSIV KUZATUVCHI " +
        "EMAS — u protsessning to'liq " +
        "huquqli ishtirokchisi.\n\n" +
        "HUQUQLARI: ko'rsatuv berish; " +
        "dalillar taqdim etish; " +
        "iltimosnomalar berish; ish " +
        "materiallari bilan tanishish; " +
        "sud muhokamasida ishtirok " +
        "etish; qarorlar ustidan " +
        "shikoyat qilish; vakil " +
        "yordamidan foydalanish.\n\n" +
        "AMALIY XULOSA: bu huquqlardan " +
        "FOYDALANING. Ko'p jabrlanuvchi " +
        "ariza berib, keyin " +
        "jarayondan chiqib ketadi va " +
        "natijani nazorat " +
        "qilmaydi.\n\n" +
        "⚠️ FUQAROVIY DA'VOGAR — ENG " +
        "MUHIM IMKONIYAT:\n\n" +
        "Jinoyat natijasida zarar " +
        "ko'rgan shaxs JINOYAT ISHI " +
        "DOIRASIDA fuqaroviy da'vo " +
        "qo'yishi mumkin.\n\n" +
        "AFZALLIGI KATTA: alohida " +
        "fuqarolik sudiga murojaat " +
        "qilish shart emas; davlat " +
        "boji odatda " +
        "to'lanmaydi; jinoyat ishi " +
        "materiallari dalil " +
        "sifatida ishlatiladi.\n\n" +
        "Ya'ni bu tezroq va " +
        "arzonroq yo'l.\n\n" +
        "AMALIY QADAM: zararingizni " +
        "HISOBLANG va uni " +
        "hujjatlar bilan " +
        "tasdiqlang, keyin " +
        "fuqaroviy da'vo qo'ying.\n\n" +
        "FUQAROVIY JAVOBGAR — zarar " +
        "uchun javob beradigan " +
        "shaxs (ba'zan bu " +
        "ayblanuvchining o'zi emas, " +
        "masalan uni ishga olgan " +
        "tashkilot).\n\n" +
        "Fuqaroviy da'vogar va " +
        "javobgarning huquq hamda " +
        "majburiyatlari qonunda " +
        "belgilangan.",
      example:
        "Jinoyat ishi doirasida fuqaroviy " +
        "da'vo qo'yildi — zarar alohida " +
        "sudsiz undirildi.",
      keyPoints: [
        "Jabrlanuvchi to'liq huquqli ishtirokchi",
        "Jinoyat ishi doirasida fuqaroviy da'vo qo'yish mumkin",
        "Bu tezroq va arzonroq yo'l",
        "Zararni hujjat bilan tasdiqlang",
      ],
      warning:
        "Ariza berib jarayondan chiqib " +
        "ketish — natijani nazoratdan " +
        "yo'qotish.",
      lawRefs: [
        { code: "JPK", article: "54" },
        { code: "JPK", article: "55" },
        { code: "JPK", article: "56" },
        { code: "JPK", article: "57" },
        { code: "JPK", article: "58" },
        { code: "JPK", article: "59" },
      ],
    },
    {
      heading: "Dalillar va jinoyat ishini qo'zg'atish",
      text:
        "DALILLARNING TURLARI: gumon " +
        "qilinuvchi, ayblanuvchi va " +
        "sudlanuvchining ko'rsatuvlari; " +
        "jabrlanuvchi va guvohlarning " +
        "ko'rsatuvlari; ekspert xulosasi; " +
        "ashyoviy dalillar; protsessual " +
        "harakatlar bayonnomalari; " +
        "hujjatlar.\n\n" +
        "ISBOT QILISH: dalillarni to'plash, " +
        "tekshirish va baholashdan " +
        "iborat.\n\n" +
        "DALILLAR TO'PLASH belgilangan " +
        "tartibda amalga oshiriladi.\n\n" +
        "⚠️ MUHIM KAFOLAT: isbot qilish " +
        "jarayonida fuqarolarning va " +
        "tashkilotlarning huquq hamda " +
        "qonuniy manfaatlari " +
        "qo'riqlanadi.\n\n" +
        "Ya'ni dalil to'plash " +
        "istalgan usulda amalga " +
        "oshirilmaydi.\n\n" +
        "AMALIY XULOSA: qonunga xilof " +
        "yo'l bilan olingan dalil " +
        "yuridik kuchga ega " +
        "bo'lmaydi.\n\n" +
        "Shuning uchun har bir " +
        "protsessual harakatning " +
        "TARTIBI bajarilganini " +
        "tekshiring — buzilish " +
        "aniqlansa dalilni chiqarib " +
        "tashlashni so'rang.\n\n" +
        "BAYONNOMADA QAYD ETISH: " +
        "dalillar bayonnomada qayd " +
        "etiladi.\n\n" +
        "DAVLAT SIRLARINI QO'RIQLASH " +
        "ham nazarda tutilgan.\n\n" +
        "JINOYAT ISHINI QO'ZG'ATISH: " +
        "qonunda belgilangan sabab va " +
        "asoslar bo'lganda ish " +
        "qo'zg'atish MAJBURIY.\n\n" +
        "SABABLAR: shaxslarning " +
        "arizalari, mansabdor " +
        "shaxslarning xabarlari, " +
        "ommaviy axborot vositalari " +
        "materiallari va " +
        "boshqalar.\n\n" +
        "⚠️ ANONIM XABARLAR asosida " +
        "jinoyat ishi qo'zg'atishga " +
        "YO'L QO'YILMAYDI.\n\n" +
        "AMALIY QADAM: ariza berayotganda " +
        "uni YOZMA qiling, shaxsingizni " +
        "ko'rsating va qabul " +
        "qilinganini tasdiqlovchi " +
        "hujjatni oling.\n\n" +
        "Ariza qabul qilishdan bosh " +
        "tortish qonunbuzarlik va u " +
        "ustidan prokuraturaga " +
        "shikoyat qilish mumkin.",
      example:
        "Ariza qabul qilinganini " +
        "tasdiqlovchi hujjat olinmadi — " +
        "keyin uning berilganini " +
        "isbotlash qiyin bo'ldi.",
      keyPoints: [
        "Dalillarning turlari qonunda belgilangan",
        "Qonunga xilof olingan dalil kuchga ega emas",
        "Anonim xabar asosida ish qo'zg'atilmaydi",
        "Ariza qabul qilinganini tasdiqlang",
      ],
      warning:
        "Arizani qabul qilishdan bosh " +
        "tortish — prokuraturaga shikoyat " +
        "asosi.",
      lawRefs: [
        { code: "JPK", article: "81" },
        { code: "JPK", article: "85" },
        { code: "JPK", article: "86" },
        { code: "JPK", article: "87" },
        { code: "JPK", article: "88" },
        { code: "JPK", article: "90" },
        { code: "JPK", article: "321" },
        { code: "JPK", article: "322" },
        { code: "JPK", article: "323" },
        { code: "JPK", article: "324" },
      ],
    },
  ],
};

module.exports = { LESSON };
