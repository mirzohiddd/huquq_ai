"use strict";
/** SHARTNOMALAR MODULI — 5-DARS: MAJBURIYATLARNI BAJARISH. FK 234–258. */

const LESSON = {
  key: "shartnoma-majburiyat",
  category: "contracts",
  level: "mid",
  order: 3050,
  title: "Majburiyatlarni bajarish",
  desc:
    "Majburiyat nima, uni bajarish qoidalari, muddat va joy, " +
    "qismlarga bo'lib bajarish, uchinchi shaxs ijrosi, solidar " +
    "majburiyatlar va bajarilganini tasdiqlash.",
  objectives: [
    "Majburiyat nima ekanini va uning tomonlarini bilasiz",
    "Bir tomonlama bosh tortish taqiqini tushunasiz",
    "Bajarish muddati va joyi qanday aniqlanishini bilasiz",
    "Uchinchi shaxs ijrosini qabul qilish qoidasini bilasiz",
    "Solidar majburiyat nima ekanini bilasiz",
    "Bajarilganini tasdiqlashning ahamiyatini bilasiz",
  ],
  practicalSteps: [
    "Har qanday to'lovdan keyin tilxat yoki to'lov hujjatini oling",
    "Qarz hujjati bo'lsa uni to'lovdan keyin qaytarib oling",
    "Bajarish muddatini shartnomada aniq sana bilan belgilang",
    "Bajarish joyini shartnomada ko'rsating — ayniqsa transport masalasi bo'lsa",
    "Uchinchi shaxs to'lov qilsa, uni yozma qayd eting",
  ],
  sections: [
    {
      heading: "Majburiyat tushunchasi va uning tomonlari",
      text:
        "MAJBURIYAT bo'yicha bir shaxs (qarzdor) boshqa shaxs " +
        "(kreditor) foydasiga muayyan HARAKATNI amalga oshirishi " +
        "yoki muayyan harakatni qilishdan TIYILISHI shart, " +
        "kreditor esa qarzdordan majburiyatni bajarishni talab " +
        "qilish huquqiga ega bo'ladi.\n\n" +
        "Harakat turlari: mol-mulkni topshirish, ishni bajarish, " +
        "pul to'lash va shu kabilar.\n\n" +
        "VUJUDGA KELISH ASOSLARI: shartnoma, zarar yetkazish, " +
        "asossiz boyish va qonunda nazarda tutilgan boshqa " +
        "asoslar.\n\n" +
        "⚠️ MUHIM QOIDA: majburiyat unda ISHTIROK ETMAYDIGAN " +
        "shaxslar uchun burchlar vujudga keltirmaydi.\n\n" +
        "Ya'ni ikki shaxs o'zaro kelishuv bilan uchinchi " +
        "shaxsga majburiyat yuklay olmaydi. Bu juda muhim " +
        "himoya: sizni ishtirok etmagan shartnomangiz " +
        "bo'yicha qarzdor qilib bo'lmaydi.\n\n" +
        "Majburiyatda har bir tomon sifatida bir vaqtning " +
        "o'zida bir necha shaxs ishtirok etishi mumkin — bu " +
        "solidar va ulushli majburiyatlarga olib keladi.",
      example:
        "Ikki tashkilot kelishuvida uchinchi shaxsga to'lov " +
        "majburiyati yozildi — u shartnomada ishtirok " +
        "etmagani uchun bunday majburiyat unga yuklanmaydi.",
      keyPoints: [
        "Majburiyat qarzdor va kreditor o'rtasidagi aloqa",
        "Asoslar: shartnoma, zarar, asossiz boyish va boshqalar",
        "Ishtirok etmagan shaxsga burch yuklab bo'lmaydi",
        "Har tomonda bir necha shaxs bo'lishi mumkin",
      ],
      warning:
        "Siz imzolamagan shartnoma sizga majburiyat yuklamaydi " +
        "— bunday talabni rad eting.",
      lawRefs: [
        { code: "FK", article: "234" },
        { code: "FK", article: "235" },
      ],
    },
    {
      heading: "Bajarishning umumiy qoidalari",
      text:
        "Majburiyatlar shartnoma shartlari va qonunchilik " +
        "talablariga MUVOFIQ, bunday shartlar bo'lmasa — ish " +
        "muomalasi odatlariga yoki odatda qo'yiladigan boshqa " +
        "talablarga muvofiq LOZIM darajada bajarilishi kerak.\n\n" +
        "⚠️ ENG MUHIM QOIDA — BIR TOMONLAMA BOSH TORTISH " +
        "TAQIQI: majburiyatni bajarishdan bir tomonlama bosh " +
        "tortishga va shartlarini bir tomonlama " +
        "o'zgartirishga YO'L QO'YILMAYDI.\n\n" +
        "Istisno: qonunda nazarda tutilgan hollarda. " +
        "Tadbirkorlik faoliyati bilan bog'liq majburiyatlarda " +
        "esa bunday imkoniyat SHARTNOMADA ham nazarda " +
        "tutilishi mumkin.\n\n" +
        "Ya'ni \"men endi bu shartnomani bajarmayman\" degan " +
        "bir tomonlama qaror huquqiy asosga ega bo'lishi " +
        "kerak — aks holda u shartnomani buzish hisoblanadi " +
        "va javobgarlikka olib keladi.\n\n" +
        "KELISHILGAN VA MAQBUL USUL: majburiyat tomonlar " +
        "kelishilgan usulda, kelishilmagan bo'lsa esa eng " +
        "maqbul usulda bajarilishi kerak.\n\n" +
        "AMALIY XULOSA: shartnomadan chiqmoqchi bo'lsangiz, " +
        "avval unda bir tomonlama bosh tortish imkoniyati " +
        "yozilganini tekshiring; yozilmagan bo'lsa — " +
        "qarshi tomon bilan kelishing yoki qonuniy asosni " +
        "aniqlang.",
      example:
        "Bir tomon shartnomani bajarishni to'xtatdi — " +
        "shartnomada bunday huquq yozilmagan bo'lsa, bu " +
        "buzish hisoblanadi.",
      keyPoints: [
        "Majburiyat lozim darajada bajarilishi kerak",
        "Bir tomonlama bosh tortishga yo'l qo'yilmaydi",
        "Istisno qonunda yoki tadbirkorlikda shartnomada bo'ladi",
        "Bajarish usuli kelishuv yoki maqbullik bo'yicha",
      ],
      warning:
        "Asossiz to'xtatish — javobgarlikning eng keng " +
        "tarqalgan sababi.",
      lawRefs: [
        { code: "FK", article: "236" },
        { code: "FK", article: "237" },
        { code: "FK", article: "238" },
      ],
    },
    {
      heading: "Qismlarga bo'lib bajarish va tegishli shaxs",
      text:
        "QISMLARGA BO'LIB BAJARISH: kreditor majburiyat " +
        "qismlarga bo'lib bajarilishini qabul qilmaslikka " +
        "haqli — qonunda, shartnomada nazarda tutilgan yoki " +
        "ish muomalasi odatlaridan hamda majburiyat " +
        "mohiyatidan boshqacha kelib chiqmasa.\n\n" +
        "⚠️ YA'NI QARZDOR \"YARIM TO'LAYMAN, QOLGANI KEYIN\" " +
        "DEB O'ZI QAROR QILA OLMAYDI. Kreditor bunday " +
        "ijroni rad etishga haqli.\n\n" +
        "Amalda esa qisman to'lovni qabul qilish ko'pincha " +
        "foydali bo'ladi — lekin buni QAYD ETISH kerak, " +
        "chunki u qarzni tan olish sifatida da'vo " +
        "muddatini ham uzadi.\n\n" +
        "TEGISHLI SHAXS UCHUN BAJARISH: qarzdor majburiyatni " +
        "bajarayotganda uni AYNAN KREDITOR yoki u " +
        "vakolat bergan shaxs qabul qilayotganini " +
        "tekshirishga haqli.\n\n" +
        "BU JUDA MUHIM AMALIY QOIDA: noto'g'ri shaxsga " +
        "qilingan ijro bajarilgan hisoblanmaydi. Ya'ni " +
        "pulni \"kreditorning tanishiga\" berib, keyin " +
        "\"men to'ladim\" deyish ishlamaydi.\n\n" +
        "Tekshirmaslik oqibati qarzdor zimmasida qoladi.\n\n" +
        "AMALIY MASLAHAT: to'lovni faqat shartnomada " +
        "ko'rsatilgan rekvizitlarga amalga oshiring. " +
        "Rekvizit o'zgarsa — YOZMA xabarni talab qiling.",
      example:
        "To'lov shartnomada ko'rsatilmagan hisob raqamiga " +
        "amalga oshirildi — majburiyat bajarilgan " +
        "hisoblanmasligi mumkin.",
      keyPoints: [
        "Kreditor qismlarga bo'lib bajarishni rad qila oladi",
        "Qisman to'lovni yozma qayd eting",
        "Ijro tegishli shaxsga qilinishi kerak",
        "Noto'g'ri shaxsga ijro bajarilgan hisoblanmaydi",
      ],
      warning:
        "Rekvizit o'zgarishi haqidagi xabarni og'zaki emas, " +
        "yozma tasdiqlang — bu keng tarqalgan firibgarlik " +
        "usuli.",
      lawRefs: [
        { code: "FK", article: "239" },
        { code: "FK", article: "240" },
      ],
    },
    {
      heading: "Uchinchi shaxs tomonidan bajarish",
      text:
        "Qarzdor majburiyatni bajarishni UCHINCHI SHAXS " +
        "zimmasiga yuklashi mumkin — qonundan, shartnomadan " +
        "yoki majburiyat mohiyatidan qarzdorning shaxsan " +
        "bajarishi kelib chiqmasa.\n\n" +
        "Bunday holatda kreditor uchinchi shaxs taklif " +
        "etgan ijroni QABUL QILISHI shart.\n\n" +
        "⚠️ SHAXSAN BAJARISH TALAB QILINADIGAN HOLATLAR: " +
        "ijodiy ish, muayyan mutaxassisning xizmati, " +
        "shaxsiy ishonchga asoslangan majburiyatlar.\n\n" +
        "MUHIM QO'SHIMCHA: qarzdorning mol-mulkini " +
        "yo'qotish xavfi ostida bo'lgan uchinchi shaxs " +
        "(masalan ijarachi, garovga oluvchi) kreditorning " +
        "roziligisiz ham majburiyatni bajarishi mumkin. " +
        "Bunda kreditorning huquqlari o'sha uchinchi " +
        "shaxsga o'tadi.\n\n" +
        "Bu amalda foydali: masalan garovga qo'yilgan " +
        "mulkni saqlab qolish uchun qarzni uchinchi shaxs " +
        "to'lashi va keyin qarzdordan talab qilishi " +
        "mumkin.\n\n" +
        "AMALIY MASLAHAT: uchinchi shaxs to'lov qilayotgan " +
        "bo'lsa, to'lov hujjatida KIM UCHUN va QAYSI " +
        "shartnoma bo'yicha to'lanayotgani aniq yozilishi " +
        "kerak — aks holda pul kimning qarziga " +
        "hisoblangani noaniq qoladi.",
      example:
        "Qarzni qarindosh to'ladi va to'lov hujjatida " +
        "shartnoma raqami ko'rsatildi — majburiyat " +
        "bajarilgan hisoblanadi.",
      keyPoints: [
        "Bajarishni uchinchi shaxs zimmasiga yuklash mumkin",
        "Kreditor bunday ijroni qabul qilishi shart",
        "Shaxsan bajarish talab qilinadigan holatlar bor",
        "To'lovda kim uchun to'lanayotgani yozilishi kerak",
      ],
      warning:
        "Izohsiz o'tkazma — keyinchalik \"bu boshqa qarz " +
        "uchun edi\" degan bahsga olib keladi.",
      lawRefs: [{ code: "FK", article: "241" }],
    },
    {
      heading: "Bajarish muddati",
      text:
        "Majburiyat unda nazarda tutilgan KUNDA yoki muddat " +
        "davomida bajarilishi kerak.\n\n" +
        "⚠️ MUDDAT BELGILANMAGAN VA UNI ANIQLASH IMKONI " +
        "BO'LMASA: majburiyat kreditor bajarishni talab " +
        "qilgan paytdan qonunda belgilangan OQILONA muddat " +
        "ichida bajarilishi kerak.\n\n" +
        "Ya'ni muddatsiz majburiyat \"hech qachon\" degani " +
        "emas — kreditor talab qo'yishi bilan muddat " +
        "boshlanadi.\n\n" +
        "BU AMALDA MUHIM: qarz muddatsiz berilgan bo'lsa, " +
        "kreditor yozma talab yuborishi kerak. Talab " +
        "sanasi keyinchalik da'vo muddatini hisoblashda " +
        "ham hal qiluvchi bo'ladi.\n\n" +
        "MUDDATIDAN ILGARI BAJARISH: qarzdor majburiyatni " +
        "muddatidan ilgari bajarishga haqli — qonun, " +
        "shartnoma yoki majburiyat mohiyatidan boshqacha " +
        "kelib chiqmasa.\n\n" +
        "LEKIN TADBIRKORLIK FAOLIYATI bilan bog'liq " +
        "majburiyatlarda muddatidan ilgari bajarishga " +
        "faqat qonun yoki shartnomada nazarda tutilgan " +
        "hollarda yo'l qo'yiladi — chunki erta ijro " +
        "kreditor uchun ham xarajat keltirishi mumkin " +
        "(saqlash, moliyalashtirish).\n\n" +
        "KECHIKTIRISH VA BO'LIB BAJARISH shartnomada " +
        "alohida kelishilishi mumkin.",
      example:
        "Muddatsiz qarz bo'yicha yozma talab yuborildi — " +
        "muddat aynan shundan boshlanadi.",
      keyPoints: [
        "Majburiyat belgilangan muddatda bajariladi",
        "Muddat yo'q bo'lsa talabdan keyin oqilona muddat beriladi",
        "Talabni yozma yuboring va sanasini saqlang",
        "Tadbirkorlikda erta ijro cheklangan",
      ],
      warning:
        "Muddatsiz qarzda yozma talab yubormaslik — da'vo " +
        "muddatini isbotlashni qiyinlashtiradi.",
      lawRefs: [
        { code: "FK", article: "242" },
        { code: "FK", article: "243" },
        { code: "FK", article: "244" },
      ],
    },
    {
      heading: "Bajarish joyi va pul majburiyatlari valyutasi",
      text:
        "BAJARISH JOYI shartnomada belgilanmagan bo'lsa, qonun " +
        "quyidagi qoidalarni beradi:\n\n" +
        "— ko'chmas mol-mulkni topshirish majburiyati " +
        "mol-mulkning turgan joyida;\n" +
        "— tovarni tashish nazarda tutilgan majburiyat " +
        "tovarni birinchi tashuvchiga topshirish joyida;\n" +
        "— pul majburiyati kreditorning yashash joyida yoki " +
        "yuridik shaxsning joylashgan yerida;\n" +
        "— boshqa majburiyatlar qarzdorning yashash joyida " +
        "yoki joylashgan yerida.\n\n" +
        "⚠️ NIMA UCHUN BU MUHIM: bajarish joyi kim " +
        "TRANSPORT XARAJATINI ko'tarishini va xavf qachon " +
        "o'tishini belgilaydi. Bu ko'pincha shartnoma " +
        "summasining sezilarli qismini tashkil qiladi.\n\n" +
        "VALYUTA: pul majburiyatlari milliy valyutada " +
        "ifodalanadi va to'lanadi. Chet el valyutasidan " +
        "foydalanish qonunda belgilangan tartibda va " +
        "hollarda amalga oshiriladi.\n\n" +
        "SUMMANI KO'PAYTIRISH: fuqaroning ta'minoti uchun " +
        "to'lanadigan summalar (masalan hayot va sog'liqqa " +
        "yetkazilgan zarar bo'yicha) qonunchilikda " +
        "belgilangan tartibda oshirib boriladi — ya'ni ular " +
        "vaqt o'tishi bilan qadrsizlanmasligi kerak.",
      example:
        "Shartnomada joy yozilmadi — tovar tashuvchiga " +
        "topshirilgan joy bajarish joyi hisoblanadi va " +
        "keyingi xavf xaridorda bo'ladi.",
      keyPoints: [
        "Bajarish joyi shartnomada belgilanmasa qonun qoidasi qo'llanadi",
        "Pul majburiyati kreditor joyida bajariladi",
        "Joy transport xarajati va xavfni belgilaydi",
        "Ta'minot to'lovlari oshirib boriladi",
      ],
      warning:
        "Yetkazib berish shartini yozmaslik — xarajat " +
        "bo'yicha nizoning asosiy sababi.",
      lawRefs: [
        { code: "FK", article: "245" },
        { code: "FK", article: "246" },
        { code: "FK", article: "247" },
      ],
    },
    {
      heading: "To'lovlarni hisobga olish navbati va depozit",
      text:
        "TALABLARNI QONDIRISH NAVBATI amalda juda ko'p " +
        "e'tibordan chetda qoladi.\n\n" +
        "To'langan summa majburiyatni to'liq bajarish uchun " +
        "yetarli bo'lmasa, u qonunda belgilangan navbat " +
        "bo'yicha hisobga olinadi — odatda avval ijro " +
        "xarajatlari, keyin foizlar, oxirida asosiy " +
        "summa.\n\n" +
        "⚠️ QARZDOR UCHUN OQIBAT: to'lovlar avval foizga " +
        "ketgani uchun asosiy qarz kamaymasligi mumkin. " +
        "Ya'ni muntazam to'lab turib ham qarz " +
        "\"kamaymayotgandek\" ko'rinadi.\n\n" +
        "Shuning uchun to'lovda uni QAYSI qarzga va " +
        "qanday hisoblash kerakligini ko'rsatish " +
        "muhim — imkoniyat bo'lsa buni shartnomada " +
        "kelishing.\n\n" +
        "DEPOZITGA QO'YISH — kam ma'lum, lekin juda " +
        "foydali vosita. Qarzdor kreditor ijroni qabul " +
        "qilishdan bosh tortsa, kreditor yo'q bo'lsa, " +
        "kim kreditor ekani noaniq bo'lsa yoki " +
        "kreditorning layoqatsizligi sababli ijro " +
        "imkonsiz bo'lsa — qarzni notarius depozitiga " +
        "qo'yish yo'li bilan majburiyatni bajarishi " +
        "mumkin.\n\n" +
        "Depozitga qo'yish MAJBURIYATNING BAJARILGANI " +
        "hisoblanadi — ya'ni qarzdor javobgarlikdan " +
        "ozod bo'ladi va neustoyka hisoblanmaydi.",
      example:
        "Kreditor pulni qabul qilishdan bosh tortdi — " +
        "qarzdor summani depozitga qo'yib majburiyatni " +
        "bajarishi mumkin.",
      keyPoints: [
        "To'lov qonuniy navbat bo'yicha hisobga olinadi",
        "Odatda avval xarajat va foizlar qoplanadi",
        "Depozitga qo'yish bajarish hisoblanadi",
        "U qarzdorni javobgarlikdan ozod qiladi",
      ],
      warning:
        "Kreditor \"qabul qilmayapti\" degan holatda jim " +
        "turish — neustoyka o'sishiga olib keladi.",
      lawRefs: [
        { code: "FK", article: "248" },
        { code: "FK", article: "249" },
      ],
    },
    {
      heading: "Solidar majburiyatlar",
      text:
        "Majburiyatda bir necha qarzdor yoki bir necha kreditor " +
        "ishtirok etsa, u ULUSHLI yoki SOLIDAR bo'lishi " +
        "mumkin.\n\n" +
        "UMUMIY QOIDA — ULUSHLI: har bir qarzdor faqat o'z " +
        "ulushi doirasida javob beradi.\n\n" +
        "SOLIDAR majburiyat esa qonunda yoki shartnomada " +
        "nazarda tutilgan hollarda, shuningdek majburiyat " +
        "predmeti bo'linmas bo'lganda yuzaga keladi.\n\n" +
        "⚠️ KREDITOR UCHUN SOLIDAR MAJBURIYAT ENG KUCHLI " +
        "HOLAT: u to'liq summani solidar qarzdorlarning " +
        "ISTALGAN BIRIDAN yoki hammasidan birgalikda talab " +
        "qilishi mumkin.\n\n" +
        "To'liq qondirilmasa, kreditor qolgan qismni boshqa " +
        "solidar qarzdorlardan talab qilishga haqli. " +
        "Solidar qarzdorlar majburiyat to'liq bajarilgunga " +
        "qadar bog'langan bo'lib qoladi.\n\n" +
        "MAJBURIYATNI BAJARGAN QARZDOR qolganlariga " +
        "nisbatan regress talabini qo'yishga haqli — teng " +
        "ulushlarda, o'zining ulushini chegirib " +
        "tashlagan holda.\n\n" +
        "E'TIROZLAR: solidar qarzdor kreditor talabiga " +
        "qarshi faqat O'ZIGA tegishli e'tirozlarni " +
        "bildira oladi.\n\n" +
        "SOLIDAR TALABLAR (bir necha kreditor holati) " +
        "ham xuddi shu tamoyilda ishlaydi: har bir " +
        "kreditor to'liq bajarishni talab qila oladi.",
      example:
        "Ikki shaxs solidar qarzdor edi — kreditor butun " +
        "summani bittasidan talab qilishi mumkin.",
      keyPoints: [
        "Umumiy qoida — ulushli majburiyat",
        "Solidar majburiyat qonun yoki shartnomada belgilanadi",
        "Kreditor to'liq summani istalgan qarzdordan talab qiladi",
        "To'lagan qarzdor qolganlaridan regress talab qiladi",
      ],
      warning:
        "Solidar kafil bo'lishdan oldin butun qarzni " +
        "to'lashga tayyorligingizni baholang.",
      lawRefs: [
        { code: "FK", article: "251" },
        { code: "FK", article: "252" },
        { code: "FK", article: "253" },
        { code: "FK", article: "254" },
        { code: "FK", article: "255" },
      ],
    },
    {
      heading: "Bajarilganini tasdiqlash: eng amaliy qoida",
      text:
        "Bu — butun mavzudagi eng amaliy va eng ko'p e'tibordan " +
        "chetda qoladigan qoida.\n\n" +
        "Kreditor ijroni qabul qilib, qarzdorning talabiga " +
        "binoan unga to'liq yoki qisman ijro qilinganligi " +
        "haqida TILXAT berishi shart.\n\n" +
        "⚠️ QARZ HUJJATI MASALASI: agar qarzdor " +
        "majburiyatni tasdiqlash uchun kreditorga qarz " +
        "hujjatini bergan bo'lsa, kreditor ijroni qabul " +
        "qilib, hujjatni QAYTARISHI kerak. Qaytarish " +
        "imkonsiz bo'lsa, bu haqda tilxatda ko'rsatishi " +
        "lozim.\n\n" +
        "QARZ HUJJATI QARZDORDA BO'LSA — majburiyat " +
        "bajarilgan deb TAXMIN qilinadi. Bu juda kuchli " +
        "qoida: hujjat sizda bo'lsa, isbot yuki " +
        "kreditorga o'tadi.\n\n" +
        "BAJARMASLIK OQIBATI: kreditor tilxat berishdan " +
        "yoki hujjatni qaytarishdan bosh tortsa, qarzdor " +
        "ijroni kechiktirishga haqli. Bunday holatda " +
        "KREDITOR ijroni kechiktirgan hisoblanadi — ya'ni " +
        "qarzdorga javobgarlik yuklanmaydi.\n\n" +
        "AMALIY XULOSA: to'lovni tilxatsiz amalga " +
        "oshirmang. Naqd to'lovda tilxat, o'tkazmada esa " +
        "izohli to'lov hujjati — bu keyinchalik yagona " +
        "himoyangiz bo'lishi mumkin.",
      example:
        "Qarz to'landi, lekin tilxat olinmadi va tilxat " +
        "kreditorda qoldi — qarzdor qayta to'lash " +
        "talabiga duch keldi.",
      keyPoints: [
        "Kreditor ijro haqida tilxat berishi shart",
        "Qarz hujjati qarzdorga qaytariladi",
        "Hujjat qarzdorda bo'lsa ijro bajarilgan deb taxmin qilinadi",
        "Tilxat berilmasa qarzdor ijroni kechiktira oladi",
      ],
      warning:
        "Tilxatsiz naqd to'lov — eng ko'p uchraydigan va eng " +
        "og'ir xato.",
      lawRefs: [
        { code: "FK", article: "257" },
        { code: "FK", article: "258" },
      ],
    },
  ],
};

module.exports = { LESSON };
