"use strict";
/** VAZIYATLAR · Ta'lim. */
module.exports = [
  {
    id: "s-course-stop", icon: "School",
    ask: "O'quv markazi pulni olib, darslarni to'xtatib qo'ydi, pulni qaytarish mumkinmi?",
    title: "O'quv markazi yopildi",
    refs: [{ code: "FK2", article: "703" }, { code: "FK2", article: "706" }],
    steps: [
      { text: "Ingliz tili kursiga bir necha oylik to'lov qildingiz. Bir oydan keyin markaz «vaqtincha yopildik» deb darslarni to'xtatdi.", q: "Siz qanday huquqqa egasiz?", options: [
        { t: "Hech qanday — to'lov qaytarilmaydi", ok: false, why: "Xato. Bu — haq evaziga xizmat ko'rsatish shartnomasi. Ijrochi xizmatni bajarmasa, javob beradi." },
        { t: "Ko'rsatilmagan xizmat uchun to'lovni qaytarishni talab qilaman", ok: true, why: "To'g'ri. Ijrochi shartnomani buzgan; ko'rsatilmagan darslar uchun pulni qaytarish va zararni qoplash talab qilinadi." },
        { t: "Faqat markaz ochilishini kutishim mumkin", ok: false, why: "Xato. Kutish majburiyatingiz yo'q." },
      ] },
      { text: "Markaz shartnomani «yo'qotdik» deb, pul qaytarishdan bosh tortmoqda.", q: "Nima dalil bo'ladi?", options: [
        { t: "To'lov cheklari, o'tkazmalar va markaz bilan yozishmalar", ok: true, why: "To'g'ri. Shartnoma nusxasi bo'lmasa ham, to'lov va kelishuvni tasdiqlovchi dalillar yetarli bo'lishi mumkin." },
        { t: "Dalil kerak emas, markaz o'zi tan olishi shart", ok: false, why: "Xato. Nizoda o'z talabingizni dalil bilan asoslash kerak." },
        { t: "Faqat boshqa o'quvchilar soni", ok: false, why: "Xato. Bu yordamchi ma'lumot, lekin sizning to'lovingizni isbotlamaydi." },
      ] },
    ],
  },
  {
    id: "s-course-quit", icon: "LogOut",
    ask: "Pullik kursdan o'zim voz kechsam, to'lagan pulimni qaytarib olsam bo'ladimi?",
    title: "Kursdan voz kechish",
    refs: [{ code: "FK2", article: "707" }],
    steps: [
      { text: "Pullik dasturlash kursiga yozildingiz, lekin ikki darsdan keyin u sizga to'g'ri kelmasligini tushundingiz.", q: "Kursdan voz kecha olasizmi?", options: [
        { t: "Yo'q, to'langan ekan — oxirigacha borish shart", ok: false, why: "Xato. Buyurtmachi haq evaziga xizmat ko'rsatish shartnomasini bajarishdan voz kechishi mumkin." },
        { t: "Ha, lekin ijrochining amalda qilgan xarajatlarini to'lagan holda", ok: true, why: "To'g'ri. Buyurtmachi voz kechishi mumkin, faqat ijrochining haqiqatda qilgan xarajatlari to'lanadi." },
        { t: "Ha va hech narsa to'lamayman, hatto o'tilgan darslar uchun ham", ok: false, why: "Xato. O'tilgan darslar va haqiqiy xarajatlar uchun to'lov qoladi." },
      ] },
      { text: "Markaz: «voz kechsangiz, butun pul kuyadi» dedi.", q: "Bu gap qonunga mosmi?", options: [
        { t: "Ha, chunki shartnomada shunday yozilgan", ok: false, why: "Xato. Iste'molchi huquqlarini qonundan ko'ra cheklovchi shartlar haqiqiy emas." },
        { t: "Yo'q — faqat haqiqatda qilingan xarajatlar ushlab qolinadi, qolgani qaytariladi", ok: true, why: "To'g'ri. «Butun pul kuyadi» sharti qonunga zid; markaz xarajatlarini isbotlashi kerak." },
        { t: "Faqat yarmini qaytarishi mumkin", ok: false, why: "Xato. Qonun bunday ulush belgilamaydi — gap haqiqiy xarajatlar haqida." },
      ] },
    ],
  },
  {
    id: "s-school", icon: "Backpack",
    ask: "Maktab bolamni qabul qilishni rad etyapti, ta'lim olish huquqi qanday himoyalanadi?",
    title: "Maktab qabul qilmayapti",
    refs: [{ code: "KONS", article: "50" }],
    steps: [
      { text: "Yangi mahallaga ko'chdingiz. Yaqin maktab: «Joy yo'q, homiylik puli bersangiz qabul qilamiz» dedi.", q: "Qaysi fikr to'g'ri?", options: [
        { t: "Pul berish odatiy hol, to'lash kerak", ok: false, why: "Xato. Davlat maktabida qabul uchun norasmiy to'lov talab qilish noqonuniy." },
        { t: "Har kim ta'lim olish huquqiga ega — norasmiy pul talabi qonunga zid, buni rad etib, ta'lim boshqarmasiga murojaat qilaman", ok: true, why: "To'g'ri. Ta'lim olish huquqi Konstitutsiya bilan kafolatlangan. Norasmiy to'lov — huquqbuzarlik." },
        { t: "Faqat xususiy maktabga borish mumkin", ok: false, why: "Xato. Davlat ta'lim muassasasida ta'lim olish huquqingiz bor." },
      ] },
      { text: "Ta'lim bo'limiga yozma ariza berdingiz, javob yo'q.", q: "Keyingi qadam?", options: [
        { t: "Yuqori turuvchi organga yoki prokuraturaga murojaat qilaman, arizam qabul qilinganini isbotlab", ok: true, why: "To'g'ri. Murojaatlarga javob berilmasa, yuqori organga yoki prokuraturaga shikoyat qilinadi." },
        { t: "Bolani bu yil o'qitmayman", ok: false, why: "Xato. Bola ta'limi kechikadi — huquqni himoya qilish davom etishi kerak." },
        { t: "Maktab direktorini ijtimoiy tarmoqda haqorat qilaman", ok: false, why: "Xato. Haqorat sizni javobgarlikka olib keladi." },
      ] },
    ],
  },
  {
    id: "s-study-leave", icon: "Notebook",
    ask: "Ishlayotgan talaba sessiya uchun haq to'lanadigan o'quv ta'tili olishi mumkinmi?",
    title: "Sessiya va ish haqi",
    refs: [{ code: "MK", article: "386" }],
    steps: [
      { text: "Siz sirtqi bo'lim talabasisiz va ishlaysiz. Sessiyaga chaqiruv-ma'lumotnoma keldi.", q: "Ish beruvchiga nima topshirasiz?", options: [
        { t: "Hech narsa — og'zaki aytaman", ok: false, why: "Xato. O'quv ta'tili uchun asos — ta'lim muassasasining chaqiruv-ma'lumotnomasi va arizangiz." },
        { t: "Chaqiruv-ma'lumotnoma bilan o'quv ta'tili haqida ariza", ok: true, why: "To'g'ri. Belgilangan hujjat va ariza bilan kafolatlangan ta'til rasmiylashtiriladi." },
        { t: "Kasallik varaqasi olib kelaman", ok: false, why: "Xato. Bu boshqa asos va noto'g'ri yo'l — o'quv ta'tili uchun alohida tartib bor." },
      ] },
      { text: "Ish beruvchi ta'tilni berdi, ammo «ish haqi saqlanmaydi» dedi.", q: "Bu to'g'rimi?", options: [
        { t: "Qonunda belgilangan shartlarda o'quv ta'tili ish haqi saqlangan holda beriladi", ok: true, why: "To'g'ri. Qonun ishni o'qish bilan qo'shib borayotganlar uchun shartlarga qarab haq to'lanadigan o'quv ta'tilini kafolatlaydi." },
        { t: "Har doim haqsiz bo'ladi", ok: false, why: "Xato. Qonun kafolatlari bor — haqsiz ta'til umumiy qoida emas." },
        { t: "Ish beruvchi xohlasa to'laydi", ok: false, why: "Xato. Kafolat qonun bilan belgilangan, xohishga bog'liq emas." },
      ] },
    ],
  },
  {
    id: "s-entrance", icon: "GraduationCap",
    ask: "Ishlayotgan xodim oliy o'quv yurtiga kirish imtihonlari uchun ta'til olishi mumkinmi?",
    title: "Kirish imtihonlari",
    refs: [{ code: "MK", article: "384" }],
    steps: [
      { text: "Siz ishlaysiz va universitetga kirish imtihonlariga tayyorlanmoqdasiz. Imtihon kunlari ish kunlariga to'g'ri keldi.", q: "Qonun nima beradi?", options: [
        { t: "Hech narsa — imtihon shaxsiy masala", ok: false, why: "Xato. Oliy ta'lim tashkilotlariga o'qishga kirayotgan xodimlar uchun qonunda kafolatlar bor." },
        { t: "Kirish imtihonlari uchun qonunda belgilangan kafolatlar, jumladan ta'til beriladi", ok: true, why: "To'g'ri. Belgilangan tartibda kirish imtihonlari uchun ta'til beriladi." },
        { t: "Faqat dam olish kunlari imtihon topshirish mumkin", ok: false, why: "Xato. Imtihon jadvali universitet tomonidan belgilanadi, xodim esa kafolatlardan foydalanadi." },
      ] },
      { text: "Rahbar: «Imtihonga borsang, ishdan bo'shatilgan hisoblanasan» dedi.", q: "Bunga qanday javob berasiz?", options: [
        { t: "Qonuniy kafolatdan foydalanganim uchun bo'shatish mumkin emas — yozma ariza beraman", ok: true, why: "To'g'ri. Kafolatlangan ta'tildan foydalanish ishdan bo'shatish uchun asos emas." },
        { t: "Imtihondan voz kechaman", ok: false, why: "Xato. Qonuniy huquqingizdan voz kechishga majbur emassiz." },
        { t: "Ishdan o'zim bo'shayman", ok: false, why: "Xato. Shoshilmang — avval huquqingizni yozma talab qiling." },
      ] },
    ],
  },
];
