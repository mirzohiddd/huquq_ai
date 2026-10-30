"use strict";
/**
 * DARS NATIJALARI (natijaga yo'naltirilgan metodika) — 1-qism:
 * xaridor, internet, mehnat, oila bo'limlari.
 *
 *   goals — «Darsdan keyin qila olasiz» (o'lchanadigan ko'nikma, fe'l bilan);
 *   rule  — vaziyatdan OLDIN beriladigan umumiy qoida (javobni aytib qo'ymaydi);
 *   steps — hayotda qo'llash: aniq harakatlar va qayerga murojaat qilish.
 *
 * ⚠️ Modda raqami, muddat, foiz yoki summa YOZILMAYDI — qonun matni darsning
 * `refs` lari orqali jonli iqtibos sifatida ko'rsatiladi.
 */
module.exports = {
  headphones: {
    goals: ["Nuqsonli tovar uchun sotuvchiga to'g'ri talab qo'ya olasiz", "Qaysi dalillarni saqlash kerakligini bilasiz"],
    rule: "Masofadan (internet orqali) sotib olingan tovar ham iste'molchi huquqlari bilan to'liq himoyalangan. Nuqson aniqlansa, xaridor qonunda sanab o'tilgan talablardan birini tanlay oladi.",
    steps: ["Buyurtma, to'lov cheki va yozishmalarni saqlang", "Nuqsonni suratga yoki videoga oling", "Sotuvchiga talabingizni yozma yuboring", "Rad etilsa — iste'molchilar huquqlarini himoya qilish organiga yoki sudga murojaat qiling"],
  },
  exchange: {
    goals: ["Sifatli, lekin to'g'ri kelmagan tovarni almashtira olasiz", "Almashtirish shartlarini tekshira olasiz"],
    rule: "Sifati yaxshi tovarni ham o'lchami, shakli yoki rangi to'g'ri kelmasa, qonundagi muddat ichida almashtirish mumkin — tovar ishlatilmagan, ko'rinishi va cheki saqlangan bo'lsa.",
    steps: ["Yorliq va qadoqni olib tashlamang", "Chekni saqlang", "Do'konga qonundagi muddat ichida boring", "Almashtirishning iloji bo'lmasa, pulni qaytarishni so'rang"],
  },
  warranty: {
    goals: ["Kafolatli ta'mir muddati buzilganini aniqlay olasiz", "Sotuvchiga yozma talab tuza olasiz"],
    rule: "Kafolat muddatida topilgan nuqson bepul va qonunda belgilangan muddatda bartaraf etilishi kerak. Muddat buzilsa, xaridorning talablari kengayadi.",
    steps: ["Ta'mirga topshirilganini tasdiqlovchi hujjatni oling", "Muddat o'tgach, sotuvchiga yozma talab yuboring", "Talab nusxasini va yuborilgan sanani saqlang", "Javob bo'lmasa — nazorat organi yoki sud"],
  },
  "price-tag": {
    goals: ["Narx bo'yicha aldovni aniqlay olasiz", "Ortiqcha to'langan pulni qaytarishni talab qila olasiz"],
    rule: "Sotuvchi tovar va uning narxi haqida to'g'ri va to'liq ma'lumot berishi shart. Noto'g'ri ma'lumot iste'molchiga zarar keltirsa, sotuvchi javob beradi.",
    steps: ["Yorliqni va chekni suratga oling", "Kassada yoki ma'muriyatga farqni ko'rsating", "Rad etilsa, shikoyatlar kitobiga yozing", "Nazorat organiga murojaat qiling"],
  },
  expired: {
    goals: ["Xavfli yoki muddati o'tgan tovar uchun pulni qaytara olasiz", "Qaysi organga xabar berishni bilasiz"],
    rule: "Iste'molchi xavfsiz tovar olishga haqli. Yaroqlilik muddati o'tgan tovarni sotish taqiqlanadi.",
    steps: ["Tovarni va chekni saqlang", "Yaroqlilik muddatini suratga oling", "Do'kondan pulni qaytarishni talab qiling", "Takrorlansa, davlat nazorat organiga xabar bering"],
  },
  insult: {
    goals: ["Internetdagi haqorat uchun dalil to'play olasiz", "Qayerga murojaat qilishni bilasiz"],
    rule: "Shaxsning sha'ni va qadr-qimmati qonun bilan himoyalangan. Haqorat va tuhmat uchun javobgarlik internetda ham amal qiladi.",
    steps: ["Izohni sana va havola bilan skrinshot qiling", "Muallif profilini saqlang", "Platformaga shikoyat qiling", "Ichki ishlar organiga ariza bering"],
  },
  fraud: {
    goals: ["Bank nomidan kelgan firibgarlik xabarini taniy olasiz", "Pul yechilsa birinchi harakatlarni bilasiz"],
    rule: "Aldash yoki ishonchni suiiste'mol qilish orqali o'zganing mulkini egallash — firibgarlik, jinoyat. Bank xodimi mijozdan maxfiy kodni so'ramaydi.",
    steps: ["Hech kimga SMS kod va karta ma'lumotini bermang", "Bankning rasmiy raqamiga o'zingiz qo'ng'iroq qiling", "Pul yechilgan bo'lsa, kartani darhol bloklang", "Bank va ichki ishlar organiga ariza bering"],
  },
  "personal-data": {
    goals: ["Shaxsiy ma'lumot tarqalganini huquqiy baholay olasiz", "Ariza berish tartibini bilasiz"],
    rule: "Shaxsga doir ma'lumotlarni yig'gan tashkilot ularni himoya qilishga majbur. Roziliksiz tarqatish uchun javobgarlik belgilangan.",
    steps: ["Tarqalgan joyni skrinshot qiling", "Ma'lumotni qaysi tashkilotga berganingizni eslab, hujjatini toping", "Tashkilotga yozma talab yuboring", "Vakolatli organga yoki ichki ishlar organiga ariza bering"],
  },
  "private-photo": {
    goals: ["Shaxsiy surat roziliksiz tarqatilganda himoyalana olasiz", "Platforma va huquqni muhofaza qiluvchi organ bilan ishlay olasiz"],
    rule: "Shaxsiy hayot daxlsizligi Konstitutsiya bilan kafolatlangan. Shaxs haqidagi ma'lumot va tasvir uning roziligisiz tarqatilmaydi.",
    steps: ["Postni va izohlarni dalil sifatida saqlang", "Platformaga maxfiylik buzilishi bo'yicha shikoyat qiling", "Ichki ishlar organiga ariza bering", "Kerak bo'lsa, ma'naviy zararni undirish uchun sudga murojaat qiling"],
  },
  hacked: {
    goals: ["Buzilgan akkaunt zararini tez to'xtata olasiz", "Akkauntni keyinchalik himoyalay olasiz"],
    rule: "Kompyuter axborotidan ruxsatsiz foydalanish va boshqa birov nomidan pul so'rash — jinoyat. Birinchi vazifa — zararni to'xtatish.",
    steps: ["Tanishlarni boshqa kanal orqali ogohlantiring", "Barcha faol sessiyalarni yoping va parolni almashtiring", "Ikki bosqichli himoyani yoqing", "Ichki ishlar organiga ariza bering"],
  },
  contract: {
    goals: ["Mehnat shartnomasini imzolashdan oldin tekshira olasiz", "Shartnomasiz ishlash xavfini tushuntira olasiz"],
    rule: "Mehnat shartnomasi yozma shaklda tuziladi va bir nusxasi xodimga beriladi. Unda lavozim, ish joyi va ish haqi kabi asosiy shartlar bo'ladi.",
    steps: ["Shartnomani yozma tuzishni so'rang", "Lavozim, ish joyi va ish haqi bandlarini o'qing", "O'z nusxangizni oling", "Rad etilsa, mehnat inspeksiyasiga murojaat qiling"],
  },
  salary: {
    goals: ["Kechiktirilgan maoshni bosqichma-bosqich undira olasiz", "Yozma talab tuza olasiz"],
    rule: "Ish haqi belgilangan muddatlarda to'lanishi shart. Kechiktirgan ish beruvchi qonunda belgilangan moddiy javobgarlikka tortiladi.",
    steps: ["Ish beruvchiga yozma ariza bering va nusxasini saqlang", "Mehnat nizolari komissiyasiga murojaat qiling", "Mehnat inspeksiyasiga shikoyat qiling", "Natija bo'lmasa — sud"],
  },
  probation: {
    goals: ["Sinov muddatidagi huquqlaringizni bilasiz", "Noqonuniy shartni aniqlay olasiz"],
    rule: "Dastlabki sinov davrida ham xodimga mehnat qonunchiligi to'liq tatbiq etiladi. Sinov sharti shartnomada ko'rsatilishi kerak.",
    steps: ["Shartnomada sinov bandini tekshiring", "Sinov davri uchun ham ish haqini talab qiling", "Og'zaki va'dalarga emas, yozma shartlarga tayaning", "Huquq buzilsa — mehnat inspeksiyasi"],
  },
  "vacation-pay": {
    goals: ["Ta'tilni pulga almashtirish qachon mumkinligini bilasiz", "Qonunga zid buyruqni aniqlay olasiz"],
    rule: "Qonun xodimning eng kam ta'tilini himoya qiladi. Pul kompensatsiyasi faqat qonunda ruxsat etilgan hollarda to'lanadi.",
    steps: ["Ta'til jadvalini va buyruqni so'rang", "Eng kam ta'til qismidan voz kechmang", "Kelishuvni faqat yozma rasmiylashtiring", "Majburlansa — mehnat inspeksiyasi"],
  },
  fired: {
    goals: ["Noqonuniy ishdan bo'shatishni aniqlay olasiz", "Ishga tiklanish yo'lini bilasiz"],
    rule: "Ishdan bo'shatish faqat qonuniy asos bilan, belgilangan tartibda va buyruq orqali amalga oshiriladi.",
    steps: ["Bo'shatish haqidagi buyruq nusxasini so'rang", "Hisob-kitob va mehnat daftarchasini talab qiling", "Qonundagi muddat ichida sudga murojaat qiling", "Ishga tiklanish va majburiy progul haqini talab qiling"],
  },
  marriage: {
    goals: ["Nikohning huquqiy kuchini tushuntira olasiz", "Nikohdan o'tish tartibini bilasiz"],
    rule: "Nikoh fuqarolik holati dalolatnomalarini qayd etish organida tuziladi. Er-xotinning huquq va majburiyatlari shu qayddan boshlanadi.",
    steps: ["FHDYo organiga birgalikda ariza bering", "Shaxsni tasdiqlovchi hujjatlarni tayyorlang", "Nikoh guvohnomasini oling", "Mulk masalasini oldindan kelishmoqchi bo'lsangiz — nikoh shartnomasi"],
  },
  alimony: {
    goals: ["Aliment bo'yicha ishonchli kelishuv tuza olasiz", "Kelishilmasa sud yo'lini bilasiz"],
    rule: "Ota-ona voyaga yetmagan farzandini ta'minlashga majbur. Aliment kelishuv bilan yoki sud orqali belgilanadi.",
    steps: ["Kelishuvni yozma va notarial tasdiqlang", "To'lov tartibi va miqdorini aniq yozing", "To'lanmasa, sudga ariza bering", "Sud qarorini ijroga yuboring"],
  },
  child: {
    goals: ["Ajrimdan keyin bola masalasi qanday hal qilinishini bilasiz", "Bolaning manfaatini dalillay olasiz"],
    rule: "Bolalar kim bilan yashashini ota-ona kelishadi, kelisha olmasalar — sud bolaning manfaatini hisobga olib hal qiladi.",
    steps: ["Avval o'zaro yozma kelishuvga harakat qiling", "Kelishilmasa sudga murojaat qiling", "Yashash sharoiti va bola bilan bog'liqlik dalillarini to'plang", "Vasiylik organining xulosasiga tayyor bo'ling"],
  },
  "common-property": {
    goals: ["Umumiy va shaxsiy mulkni farqlay olasiz", "Mulkni bo'lishda o'z ulushingizni himoya qila olasiz"],
    rule: "Nikoh davomida orttirilgan mulk, kimning nomida bo'lishidan qat'i nazar, odatda er-xotinning umumiy mulki hisoblanadi.",
    steps: ["Mulk qachon va qaysi pulga olinganini hujjatlang", "Nikoh shartnomasi bor-yo'qligini tekshiring", "Bo'lishni kelishuv bilan rasmiylashtiring", "Kelishilmasa — sud"],
  },
  "divorce-way": {
    goals: ["Ajrashish qayerda o'tishini aniqlay olasiz", "Sud tartibining bosqichlarini bilasiz"],
    rule: "Nikoh FHDYo organida yoki sud tartibida bekor qilinadi. Qaysi yo'l tanlanishi tomonlarning roziligi va farzandlar borligiga bog'liq.",
    steps: ["Farzandlar va o'zaro rozilikni aniqlang", "Kerakli organga ariza bering", "Aliment va bola yashash joyi masalasini birga hal qiling", "Qaror nusxasini oling"],
  },
};
