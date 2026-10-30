"use strict";
/** 2-BO'LIM · Internet va xavfsizlik (oson). Avvalgi 2 dars `lessonsB.js` da. */
const old = require("./lessonsB");
const pick = (id, icon) => ({ ...old.find((l) => l.id === id), icon });

module.exports = [
  pick("insult", "MessageCircleWarning"),
  pick("fraud", "CreditCard"),
  {
    id: "personal-data", icon: "IdCard",
    ask: "Kompaniya pasport nusxamni ruxsatsiz boshqalarga tarqatdi, nima qilaman?",
    title: "Pasport nusxasi tarqaldi",
    story: "Kredit do'koni sizdan pasport nusxasini oldi. Bir oydan keyin u notanish odamlarning Telegram guruhida paydo bo'ldi.",
    choice: {
      q: "Bu holat huquqiy jihatdan nima?",
      options: [
        { t: "Oddiy xato — hech kim javob bermaydi", ok: false, why: "Xato. Shaxsga doir ma'lumotlarni roziliksiz tarqatish qonunchilikni buzish hisoblanadi va javobgarlikka olib keladi." },
        { t: "Shaxsga doir ma'lumotlar haqidagi qonunchilik buzilishi — javobgarlik bor", ok: true, why: "To'g'ri. Ma'lumotni yig'gan tashkilot uni himoya qilishi shart. Roziliksiz tarqatish — ma'muriy, takrorlansa jinoiy javobgarlik." },
        { t: "Faqat pasportni yangilash kerak, shikoyat qilish shart emas", ok: false, why: "Xato. Pasportni almashtirish foydali bo'lishi mumkin, lekin buzilish uchun javobgarlik va zararni qoplash talabi saqlanib qoladi." },
      ],
    },
    game: {
      type: "order",
      prompt: "To'g'ri ketma-ketlikni tuzing",
      items: ["Guruhdagi xabarni skrinshot qilaman", "Kompaniyaga yozma talab yuboraman", "Ichki ishlar organiga ariza beraman", "Bankka firibgarlik xavfi haqida xabar beraman"],
      why: "Dalil birinchi, keyin aybdor tomonga talab, so'ng huquqni muhofaza qiluvchi organ. Bankni ogohlantirish — nomingizga kredit olinishining oldini oladi.",
    },
    takeaway: "Shaxsiy ma'lumotlaringizni yig'gan har qanday tashkilot ularni himoya qilishga majbur. Tarqalsa — dalil bilan ariza bering.",
    refs: [{ code: "MJK", article: "46-2" }, { code: "JK", article: "141-2" }],
  },
  {
    id: "private-photo", icon: "Camera",
    ask: "Kimdir mening shaxsiy suratimni ruxsatsiz internetga joylab, tarqatmoqda",
    title: "Ruxsatsiz joylangan surat",
    story: "Sobiq do'stingiz siz bilan bo'lgan shaxsiy suratni ijtimoiy tarmoqqa joylab, ustidan kulgili izoh yozdi.",
    choice: {
      q: "Qaysi fikr to'g'ri?",
      options: [
        { t: "Surat menga tegishli emas, u telefondan olgan — demak, huquqi bor", ok: false, why: "Xato. Surat kimning telefonida bo'lishidan qat'i nazar, shaxsiy hayot daxlsiz. Roziliksiz tarqatish huquqqa xilof." },
        { t: "Faqat haqorat so'zi bo'lsa javobgarlik bor, suratning o'zi uchun yo'q", ok: false, why: "Xato. Shaxsiy hayot sirini tashkil etuvchi ma'lumotni roziliksiz tarqatishning o'zi ham javobgarlikka sabab bo'ladi." },
        { t: "Shaxsiy hayot daxlsiz: platformaga shikoyat qilib o'chirtiraman va huquqni muhofaza qiluvchi organga murojaat qilaman", ok: true, why: "To'g'ri. Shaxsiy hayot daxlsizligi Konstitutsiya bilan kafolatlangan, sha'nni kamsituvchi ma'lumotni tarqatish uchun javobgarlik bor." },
      ],
    },
    game: {
      type: "order",
      prompt: "Harakatlarni tartiblang",
      items: ["Post va havolani saqlab qo'yaman", "Platformaga shikoyat yuboraman", "Tarqatgan odamga o'chirishni yozma talab qilaman", "Ichki ishlar organiga ariza beraman"],
      why: "Avval dalil — post o'chirilsa ham isbot qoladi. Keyin tarqalishni to'xtatish, so'ngra javobgarlikka tortish.",
    },
    takeaway: "Shaxsiy hayot — daxlsiz. Roziliksiz tarqatilgan surat uchun javobgarlik bor, dalilni esa birinchi bo'lib saqlang.",
    refs: [{ code: "KONS", article: "31" }, { code: "JK", article: "141-3" }],
  },
  {
    id: "hacked", icon: "KeyRound",
    ask: "Telegram akkauntimni buzib olishdi va mening nomimdan pul so'rashyapti",
    title: "Akkaunt buzildi",
    story: "Telegram akkauntingizni kimdir egallab oldi va do'stlaringizga sizning nomingizdan «tezda qarz bering» deb yozmoqda.",
    choice: {
      q: "Birinchi navbatda nima qilinadi?",
      options: [
        { t: "Kutaman — balki o'zi qaytib qolar", ok: false, why: "Xato. Har bir daqiqada do'stlaringiz pul o'tkazib yuborishi mumkin. Tez harakat qilish kerak." },
        { t: "Boshqa kanal orqali tanishlarni ogohlantiraman, sessiyalarni yopaman va ichki ishlar organiga ariza beraman", ok: true, why: "To'g'ri. Kompyuter axborotidan ruxsatsiz foydalanish — jinoyat. Avval zararni to'xtatish, so'ng ariza." },
        { t: "Firibgarga pul berib, akkauntni qaytarib olaman", ok: false, why: "Xato. Bu tovlamachilikni rag'batlantiradi va akkaunt qaytarilishiga kafolat yo'q." },
      ],
    },
    game: {
      type: "spot",
      prompt: "Qaysi xabar firibgarlik belgisi?",
      title: "TELEGRAM",
      lines: ["Do'stim: Ertaga uchrashamizmi?", "«Siz»: Tez pul tashlab yubor, kechqurun qaytaraman, hech kimga aytma", "Onam: Kechki ovqatga kel", "Telegram: Yangi qurilmadan kirildi"],
      answer: 1,
      why: "Shoshiltirish, maxfiylik («hech kimga aytma») va pul so'rash — buzilgan akkauntning klassik belgisi.",
    },
    takeaway: "Akkaunt buzilsa: tanishlarni ogohlantiring, sessiyalarni yoping, ikki bosqichli himoyani yoqing va ariza bering.",
    refs: [{ code: "JK", article: "278-2" }],
  },
];
