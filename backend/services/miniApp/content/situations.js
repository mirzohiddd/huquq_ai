"use strict";
/**
 * MINI APP — HAYOTIY VAZIYATLAR. Har vaziyat 2 qadamdan iborat: voqea →
 * qaror → oqibat → keyingi qaror. Aniq raqam yozilmagan (lessonsA.js
 * dagi qoida); havolalar bazadan tekshirilgan.
 */
const step = (text, q, options) => ({ text, q, options });
const o = (t, ok, why) => ({ t, ok, why });

module.exports = [
  {
    id: "s-gossip", ask: "Qo'shnim men haqimda tuhmat tarqatdi, nima qilaman?", unit: "online", title: "Qo'shni yolg'on tarqatdi",
    refs: [{ code: "MJK", article: "40" }],
    steps: [
      step("Qo'shningiz mahalla guruhida siz haqingizda «qarzini to'lamay qochib yuradi» degan yolg'on yozdi.", "Birinchi qaroringiz?", [
        o("Xabarni skrinshot qilib, guruhdagi guvohlarni eslab qolaman", true, "Bila turib yolg'on, sharmanda qiluvchi uydirma tarqatish — tuhmat. Uni isbotlash uchun dalil kerak."),
        o("Guruhda uning ustidan kulib, haqoratli javob yozaman", false, "Javob haqorati sizni ham javobgarlikka tortadi va dalilingizni kuchsizlantiradi."),
        o("Uning uyiga borib janjal qilaman", false, "Janjal vaziyatni og'irlashtiradi; qonuniy yo'l ancha samarali."),
      ]),
      step("Dalil sizda. Qo'shni esa «hazil qildim» deyapti.", "Endi nima qilasiz?", [
        o("Ichki ishlar organiga ariza beraman", true, "Tuhmat uchun ma'muriy javobgarlik bor — «hazil» degan bahona javobgarlikdan ozod qilmaydi."),
        o("Hech narsa qilmayman, chunki u «hazil» dedi", false, "Bu sizning tanlovingiz, lekin «hazil» degan gap qonun bo'yicha asos emas."),
        o("Guruhdan chiqib ketaman, xolos", false, "Yolg'on guruhda qolaveradi — obro'yingiz himoyasiz qoladi."),
      ]),
    ],
  },
  {
    id: "s-phone", ask: "Kafolatdagi telefon ta'mirdan qaytmayapti, nima qilaman?", unit: "consumer", title: "Ta'mirdan qaytmagan telefon",
    refs: [{ code: "IHQ", article: "15" }, { code: "IHQ", article: "16" }],
    steps: [
      step("Kafolatdagi telefoningiz buzildi. Do'kon «servisga yuboramiz» dedi.", "Telefonni topshirayotganda nima qilasiz?", [
        o("Topshirilganini tasdiqlovchi hujjat (dalolatnoma) olaman", true, "Ta'mir muddati talab qo'yilgan paytdan hisoblanadi — hujjatsiz muddatni isbotlab bo'lmaydi."),
        o("Og'zaki kelishuv bilan topshiraman", false, "Nizo chiqsa, telefonni qachon va qanday holatda topshirganingizni isbotlay olmaysiz."),
        o("Avval o'zim ochib ko'raman", false, "Bu kafolat bo'yicha talabingizni kuchsizlantiradi."),
      ]),
      step("Qonundagi muddat o'tdi, telefon hamon tuzatilmagan.", "Keyingi talabingiz?", [
        o("Narxni kamaytirish yoki shartnomani bekor qilib, pulni qaytarishni talab qilaman", true, "Sotuvchi tuzatish talabini bajarmasa, xaridor shu talablardan birini qo'yishga haqli."),
        o("Yana kutaman", false, "Kutish majburiy emas — huquqingiz allaqachon paydo bo'lgan."),
        o("Servis markazi bilan janjallashaman", false, "Talab sotuvchiga yozma qo'yiladi — janjal dalil bo'lmaydi."),
      ]),
    ],
  },
  {
    id: "s-vacation", ask: "Ish beruvchi ta'tilga chiqarmayapti, nima qilaman?", unit: "labor", title: "Ta'tilga chiqarishmayapti",
    refs: [{ code: "MK", article: "217" }, { code: "MK", article: "228" }],
    steps: [
      step("Bir yildan ortiq ishlaysiz, lekin rahbar «hozir ish ko'p, ta'til yo'q» deydi.", "Qanday yo'l tutasiz?", [
        o("Har yilgi mehnat ta'tilini so'rab yozma ariza beraman", true, "Har yilgi asosiy mehnat ta'tili — har bir xodimning huquqi, uning eng kam davomiyligi qonunda belgilangan."),
        o("Ta'tildan voz kechaman", false, "Ta'til dam olish huquqi — uni doimiy ravishda bermaslik qonunga zid."),
        o("Ruxsatsiz ta'tilga chiqib ketaman", false, "O'zboshimchalik bilan ishga chiqmaslik intizomiy javobgarlikka olib kelishi mumkin."),
      ]),
      step("Ariza rad etildi, ta'til jadvalida ham ismingiz yo'q.", "Endi nima qilasiz?", [
        o("Mehnat inspeksiyasiga yoki kasaba uyushmasiga murojaat qilaman", true, "Ta'til berish tartibi qonunda belgilangan — buzilsa, nazorat organi aralashadi."),
        o("Ishdan bo'shab ketaman", false, "Shart emas: huquqingizni ishlagan holda ham himoya qila olasiz."),
        o("Hamkasblarimga shikoyat qilaman, xolos", false, "Bu masalani hal qilmaydi — rasmiy murojaat kerak."),
      ]),
    ],
  },
  {
    id: "s-accident", ask: "Avtohalokatdan keyin aybdor zararni to'lamayapti", unit: "online", title: "Kichik avtohalokat",
    refs: [{ code: "MJK", article: "137" }, { code: "FK2", article: "1003" }],
    steps: [
      step("To'xtab turgan mashinangizga orqadan boshqa mashina urildi. Haydovchi «shoshyapman» deb ketmoqchi.", "Nima qilasiz?", [
        o("Uni to'xtatishga ko'ndiraman, raqamini va voqea joyini suratga olaman", true, "Qoidalarni buzib hodisa joyidan ketib qolish — javobgarlikka sabab. Dalil zararni undirish uchun ham kerak."),
        o("Uni urib to'xtataman", false, "Kuch ishlatish sizni javobgarlikka tortadi."),
        o("Qo'yib yuboraman, keyin topamiz", false, "Dalilsiz aybdorni topish va zararni undirish juda qiyinlashadi."),
      ]),
      step("Haydovchi qoldi, lekin zararni to'lashdan bosh tortyapti.", "Keyingi qadam?", [
        o("YPX xodimlarini chaqirib, rasmiylashtiraman va kerak bo'lsa sudga murojaat qilaman", true, "Zarar uchun javobgar shaxsdan uning o'rnini qoplash sud orqali undiriladi — rasmiy hujjat asosiy dalil."),
        o("Uning mashinasini olib qolaman", false, "O'zboshimchalik — huquqbuzarlik; mulkni ushlab qolish huquqingiz yo'q."),
        o("Og'zaki va'dasiga ishonaman", false, "Og'zaki va'dani keyin isbotlash qiyin."),
      ]),
    ],
  },
  {
    id: "s-bankcall", ask: "Firibgarlar telefon qilib karta kodimni bilib olishdi, pul yechildi", unit: "online", title: "«Bank xodimi» qo'ng'irog'i",
    refs: [{ code: "JK", article: "168" }],
    steps: [
      step("Notanish odam «bank xavfsizlik xizmatidanman» deb qo'ng'iroq qildi va karta ma'lumotlarini so'radi.", "Javobingiz?", [
        o("Hech narsa aytmayman, go'shakni qo'yib, bankka o'zim qo'ng'iroq qilaman", true, "Bank karta kodi va SMS parolni hech qachon so'ramaydi. Aldash orqali pul olish — firibgarlik."),
        o("Karta raqamini aytaman, kodni emas", false, "Firibgarlar karta raqamidan ham foydalanib, keyingi bosqichda kodni undirishga urinadi."),
        o("Tekshirish uchun SMS kodni aytaman", false, "Kod — pulingiz kaliti. Uni aytgan zahoti pul yechilishi mumkin."),
      ]),
      step("Afsus, akangiz kodni aytib qo'ygan va kartadan pul yechildi.", "Birinchi navbatda nima qilish kerak?", [
        o("Darhol bankka qo'ng'iroq qilib kartani bloklatish va ichki ishlar organiga ariza berish", true, "Tez bloklash qolgan pulni saqlaydi; ariza firibgarni topish va pulni qaytarish uchun asos."),
        o("Ertaga bankka borish", false, "Kechikish — qolgan pul ham yechilishi mumkin."),
        o("Firibgarga qayta qo'ng'iroq qilib, pulni so'rash", false, "Bu foyda bermaydi va yana aldanish xavfi bor."),
      ]),
    ],
  },
  {
    id: "s-probation", ask: "Sinov muddatida ish haqi to'lanadimi?", unit: "labor", title: "Sinovdan keyin bo'shatishdi",
    refs: [{ code: "MK", article: "131" }, { code: "MK", article: "253" }],
    steps: [
      step("Sinov davrida ikki oy ishladingiz, maosh berilmadi va «sinovdan o'tmadingiz» deyishdi.", "Avval nimani talab qilasiz?", [
        o("Ishlagan davr uchun ish haqini to'liq to'lashni", true, "Sinov davrida ham mehnat qonunchiligi to'liq amal qiladi — ishlangan vaqt uchun haq to'lanadi."),
        o("Hech narsa — sinovda pul berilmaydi", false, "Bunday qoida yo'q."),
        o("Faqat tavsiyanoma", false, "Tavsiyanoma yaxshi, lekin asosiy huquqingiz — ish haqi."),
      ]),
      step("Ish beruvchi «sinov — bepul» deb turib oldi.", "Keyingi qadam?", [
        o("Yozma ariza beraman, rad etilsa mehnat inspeksiyasi yoki sudga murojaat qilaman", true, "Yozma talab va rasmiy murojaat — ish haqini undirishning qonuniy yo'li."),
        o("Ijtimoiy tarmoqda kompaniyani so'kaman", false, "Haqorat sizni javobgarlikka tortishi mumkin va pulni qaytarmaydi."),
        o("Unutaman", false, "Bu sizning tanlovingiz, lekin ish haqi — qonuniy huquqingiz."),
      ]),
    ],
  },
  {
    id: "s-wrongitem", ask: "Buyurtma qilganim emas, boshqa narsa keldi", unit: "consumer", title: "Boshqa tovar keldi",
    refs: [{ code: "IHQ", article: "28-1" }, { code: "IHQ", article: "13" }],
    steps: [
      step("Onlayn do'kondan qora sumka buyurtma qildingiz, kuryer jigarrang va yirtiq sumka olib keldi.", "Kuryer oldida nima qilasiz?", [
        o("Qadoqni kuryer oldida ochib, nuqsonni suratga olaman va qabul qilmayman", true, "Axborot tizimlari orqali sotilgan tovar uchun ham iste'molchi huquqlari to'liq amal qiladi. Dalil hamma narsani hal qiladi."),
        o("Qabul qilib, keyin ko'raman", false, "Imzolab olgach, nuqson yetkazishdan keyin paydo bo'lmaganini isbotlash qiyinlashadi."),
        o("Kuryer bilan janjallashaman", false, "Kuryer — vositachi; talab sotuvchiga qo'yiladi."),
      ]),
      step("Do'kon «qaytarish yo'q» deb javob berdi.", "Endi nima qilasiz?", [
        o("Sotuvchiga yozma talab yuborib, almashtirish yoki pulni qaytarishni talab qilaman", true, "Nuqsonli yoki boshqa tovar uchun xaridor shu talablardan birini tanlashga haqli; «qaytarish yo'q» degan ichki qoida qonundan ustun emas."),
        o("Sumkani o'zim tikib olaman", false, "Bu huquqiy yechim emas va talabingizni kuchsizlantiradi."),
        o("Pulimni unutaman", false, "Bu sizning tanlovingiz, lekin qonun sizni himoya qiladi."),
      ]),
    ],
  },
];
