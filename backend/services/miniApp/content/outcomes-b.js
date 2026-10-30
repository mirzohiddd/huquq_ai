"use strict";
/**
 * DARS NATIJALARI — 2-qism: uy-joy, shartnomalar, sud, meros bo'limlari.
 * Tuzilma va qoidalar `outcomes-a.js` dagi kabi (modda raqami, muddat,
 * foiz va summa YOZILMAYDI).
 */
module.exports = {
  "rent-contract": {
    goals: ["Ijara shartnomasining asosiy bandlarini tekshira olasiz", "Xavfli bandni aniqlay olasiz"],
    rule: "Turar joy ijarasi yozma shartnoma bilan rasmiylashtiriladi. Muddat, ijara haqi va majburiyatlar aniq yozilsa, nizolarning ko'pi oldi olinadi.",
    steps: ["Uy egasining mulk hujjatini ko'ring", "Muddat, haq va kommunal to'lovlarni yozdiring", "Bekor qilish tartibini kelishing", "Har bir to'lov uchun tilxat yoki o'tkazma saqlang"],
  },
  "rent-defect": {
    goals: ["Ijaradagi uy kamchiligi bo'yicha talab qo'ya olasiz", "Qonundagi tanlovlarni bilasiz"],
    rule: "Ijaraga beruvchi mulkni shartnoma va maqsadiga mos holatda topshirishi kerak. Kamchilik uchun ijarachiga qonunda bir necha talab berilgan.",
    steps: ["Kamchilikni suratga oling", "Uy egasiga yozma xabar bering", "Talabingizni aniq tanlang va yozing", "Kelishilmasa — sud"],
  },
  "rent-early": {
    goals: ["Ijarachini asossiz chiqarishga qarshi tura olasiz", "Muddatidan oldin bekor qilish asoslarini bilasiz"],
    rule: "Ijara shartnomasi muddati ikki tomon uchun ham majburiy. Muddatidan oldin bekor qilish faqat qonundagi asoslar va tartibda bo'ladi.",
    steps: ["Shartnomani va to'lov dalillarini saqlang", "Uy egasiga yozma javob bering", "O'zboshimchalik bilan chiqarilsa, ichki ishlar organiga xabar bering", "Bekor qilish masalasi sudda hal qilinadi"],
  },
  "relatives-move-in": {
    goals: ["Ijaradagi uyga odam ko'chirib kiritish tartibini bilasiz", "Shartnomani buzmaslikni bilasiz"],
    rule: "Ijarachining boshqa shaxslarni ko'chirib kiritish huquqi qonun va shartnoma bilan cheklangan.",
    steps: ["Shartnomadagi tegishli bandni o'qing", "Uy egasidan yozma rozilik oling", "Kerakli ro'yxatga olishni rasmiylashtiring", "Rozilik bo'lmasa, boshqa yechim toping"],
  },
  eviction: {
    goals: ["Noqonuniy ko'chirishni aniqlay olasiz", "Ko'chirishga qarshi himoya yo'lini bilasiz"],
    rule: "Fuqarolar turar joydan faqat qonunda belgilangan asoslar bo'yicha ko'chiriladi. Ko'chirish odatda sud qarori bilan amalga oshiriladi.",
    steps: ["Og'zaki talabga bo'ysunmang — hujjat so'rang", "Sud qarori bormi, tekshiring", "Turar joyga huquqingiz hujjatlarini tayyorlang", "Advokat bilan maslahatlashing va sudda himoyalaning"],
  },
  "loan-receipt": {
    goals: ["Qarzni to'g'ri rasmiylashtira olasiz", "Sudda qaysi dalil kuchli ekanini bilasiz"],
    rule: "Qonunda yozma shakl talab etilgan bitimni guvoh ko'rsatuvi bilan isbotlab bo'lmaydi, lekin yozma va boshqa dalillar keltirish mumkin.",
    steps: ["Tilxatda summa, muddat va ikki tomon ma'lumotlarini yozing", "Imkon bo'lsa, pulni bank orqali o'tkazing", "Yozishmalarni saqlang", "Katta summada notarial tasdiqlashni ko'rib chiqing"],
  },
  "loan-return": {
    goals: ["Muddatsiz qarzni undirishni boshlay olasiz", "Yozma talabning ahamiyatini tushuntira olasiz"],
    rule: "Qaytarish muddati belgilanmagan qarz qarz beruvchi talab qilgandan keyin qonundagi muddatda qaytarilishi kerak.",
    steps: ["Qarzdorga yozma talab yuboring", "Yetkazilganini isbotlaydigan usulni tanlang", "Muddat o'tgach, da'vo tayyorlang", "Sudga murojaat qiling"],
  },
  guarantor: {
    goals: ["Kafillik xavfini baholay olasiz", "Kafillik shartnomasini o'qib tushuna olasiz"],
    rule: "Kafil qarzdor majburiyatini bajarmasa, kreditor oldida javob beradi. Javobgarlik hajmi va turi shartnomada va qonunda belgilanadi.",
    steps: ["Kredit va kafillik shartnomasini to'liq o'qing", "Javobgarlik turini aniqlang", "Qarzdorning to'lov qobiliyatini baholang", "Ikkilansangiz, imzolamang"],
  },
  limitation: {
    goals: ["Da'vo muddati qanday ishlashini tushuntira olasiz", "Muddat uzilishini bilasiz"],
    rule: "Da'vo muddati huquq buzilganini bilgan yoki bilishi lozim bo'lgan kundan boshlanadi. Uni sud faqat tomon arz qilganda qo'llaydi.",
    steps: ["Huquq buzilgan sanani aniqlang", "Qarzni tan olgan yozishmalarni yig'ing", "Kechiktirmasdan da'vo tayyorlang", "Muddat o'tgan bo'lsa ham sudga murojaat qiling"],
  },
  "house-sale": {
    goals: ["Uy sotib olishning xavfsiz tartibini bilasiz", "Mulk huquqi qachon o'tishini tushuntira olasiz"],
    rule: "Ko'chmas mulk oldi-sotdisi qonundagi shaklda tuziladi va mulk huquqi davlat ro'yxatidan o'tkazilgandan keyin o'tadi.",
    steps: ["Mulk hujjati va taqiq yo'qligini tekshiring", "Shartnomani notarial tasdiqlang", "Mulk huquqini davlat ro'yxatidan o'tkazing", "To'lovni faqat dalil qoldiradigan usulda qiling"],
  },
  detained: {
    goals: ["Ushlanganda o'zingizni to'g'ri tuta olasiz", "Asosiy huquqlaringizni ayta olasiz"],
    rule: "Hech kim qonunga asoslanmagan holda ushlab turilmaydi. Ushlangan shaxs sababini bilish va himoyachiga ega bo'lish huquqiga ega.",
    steps: ["Xotirjam bo'ling va sababini so'rang", "Himoyachi talab qiling", "Yaqinlaringizga xabar berishni so'rang", "O'qimagan hujjatga imzo qo'ymang"],
  },
  search: {
    goals: ["Tintuv qonuniyligini tekshira olasiz", "Bayonnomaga e'tiroz yoza olasiz"],
    rule: "Tintuv qonundagi asos va tartibda, xolislar ishtirokida o'tkaziladi. Natijasi bayonnomada qayd etiladi.",
    steps: ["Tintuv asosini ko'rsatishni so'rang", "Xolislar ishtirokini talab qiling", "Bayonnomani diqqat bilan o'qing", "E'tirozlaringizni bayonnomaga yozing"],
  },
  witness: {
    goals: ["Guvohning huquq va majburiyatlarini bilasiz", "Qarindoshga oid ishda huquqingizni ishlata olasiz"],
    rule: "Guvoh rost ko'rsatuv berishi shart. Qonun yaqin qarindoshlarni bir-biriga qarshi guvohlik berishga majburlamaydi.",
    steps: ["Chaqiruv qog'ozini tekshiring", "Huquqlaringizni tushuntirishni so'rang", "Ko'rsatuv berishga rozimisiz — o'zingiz hal qiling", "Bayonnomani o'qib imzolang"],
  },
  lawyer: {
    goals: ["Himoyachi talab qilish huquqini ishlata olasiz", "Bepul yuridik yordam olish yo'lini bilasiz"],
    rule: "Malakali yuridik yordam olish huquqi Konstitutsiya bilan kafolatlangan. Ayrim hollarda himoyachi ishtiroki majburiy.",
    steps: ["Ushlangan paytdan boshlab himoyachi so'rang", "Himoyachisiz tushuntirish yozmaslik huquqingizni eslang", "Pul bo'lmasa, davlat hisobidan himoyachi so'rang", "Rad etilsa, shikoyat qiling"],
  },
  complaint: {
    goals: ["Tergovchi ustidan shikoyat tuza olasiz", "Shikoyat qayerga berilishini bilasiz"],
    rule: "Tergovchi va prokurorning harakatlari va qarorlari ustidan shikoyat qilish huquqi protsessning asosiy kafolatlaridan biri.",
    steps: ["Qaysi harakat ustidan shikoyat qilayotganingizni aniqlang", "Dalillar bilan yozma shikoyat tuzing", "Prokurorga yoki qonunda nazarda tutilgan hollarda sudga bering", "Javob nusxasini saqlang"],
  },
  "heirs-order": {
    goals: ["Merosxo'rlar navbatini aniqlay olasiz", "Kim meros olishini hisoblay olasiz"],
    rule: "Vasiyatnoma bo'lmasa, meros qonun bo'yicha navbatlar asosida o'tadi. Keyingi navbat oldingisi bo'lmaganda chaqiriladi.",
    steps: ["Vafot haqidagi guvohnomani oling", "Qarindoshlikni tasdiqlovchi hujjatlarni yig'ing", "Qonundagi muddatda notariusga ariza bering", "Meros huquqi guvohnomasini oling"],
  },
  "will-form": {
    goals: ["Vasiyatnoma haqiqiyligini tekshira olasiz", "To'g'ri vasiyatnoma qanday tuzilishini bilasiz"],
    rule: "Vasiyatnoma qonunda belgilangan shaklda tuzilishi kerak. Shaklga rioya qilinmasa, u haqiqiy emas.",
    steps: ["Vasiyatnomani notarius orqali tuzing", "Shaxsni tasdiqlovchi hujjatni olib boring", "Mazmunini aniq yozdiring", "Nusxasini yaqinlaringizga ayting"],
  },
  "forced-share": {
    goals: ["Majburiy ulush kimga tegishli ekanini bilasiz", "Vasiyatnomaga qarshi majburiy ulushni talab qila olasiz"],
    rule: "Vasiyat erkin, lekin qonun ayrim yaqin qarindoshlarga vasiyatnoma mazmunidan qat'i nazar majburiy ulush beradi.",
    steps: ["Merosxo'r toifangizni aniqlang", "Majburiy ulush huquqi hujjatlarini yig'ing", "Notariusga ariza bering", "Kelishmovchilik bo'lsa — sud"],
  },
  renounce: {
    goals: ["Merosdan voz kechish oqibatlarini tushuntira olasiz", "To'g'ri tartibda voz kecha olasiz"],
    rule: "Merosdan voz kechish to'liq va shartsiz bo'ladi va keyin qaytarib olinmaydi. U qonundagi doirada boshqa merosxo'r foydasiga bo'lishi mumkin.",
    steps: ["Merosning tarkibi va qarzlarini aniqlang", "Qarorni yaxshilab o'ylang", "Notariusga yozma ariza bering", "Kimning foydasiga voz kechayotganingizni aniq yozing"],
  },
  "estate-debts": {
    goals: ["Meros bilan o'tgan qarz uchun javobgarlik chegarasini bilasiz", "Bank talabiga to'g'ri javob bera olasiz"],
    rule: "Merosni qabul qilgan merosxo'r marhumning qarzlari uchun o'ziga o'tgan meros mol-mulki qiymati doirasida javob beradi.",
    steps: ["Meros tarkibi va qiymatini aniqlang", "Qarzlar ro'yxatini so'rang", "Bankka javobgarlik chegarasini yozma ko'rsating", "Kerak bo'lsa, merosni qabul qilish yoki voz kechishni o'ylab ko'ring"],
  },
};
