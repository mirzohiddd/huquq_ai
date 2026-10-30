"use strict";
/**
 * 1-BO'LIM · Xaridor huquqlari (oson). Dastlabki 3 dars `lessonsA.js` da
 * (progress saqlanib qolishi uchun id'lar o'zgarmadi).
 * ⚠️ Matnda aniq muddat, summa yoki foiz YOZILMAYDI — `refs` orqali jonli.
 */
const old = require("./lessonsA");
const pick = (id, icon) => ({ ...old.find((l) => l.id === id), icon });

module.exports = [
  pick("headphones", "Headphones"),
  pick("exchange", "Shirt"),
  pick("warranty", "Smartphone"),
  {
    id: "price-tag", icon: "Tag",
    ask: "Do'konda narx yorlig'ida bir narx, kassada boshqa narx olishdi, nima qilaman?",
    title: "Yorliqdagi narx va kassa",
    story: "Peshtaxtada choynak yonida bir narx yozilgan. Kassada esa sizdan qimmatroq summa yechib olishdi.",
    choice: {
      q: "Eng to'g'ri harakat qaysi?",
      options: [
        { t: "Chekni va yorliqni suratga olib, farqni qaytarishni talab qilaman", ok: true, why: "To'g'ri. Sotuvchi tovar va uning narxi haqida to'g'ri ma'lumot berishi shart. Noto'g'ri ma'lumot tufayli ortiqcha to'lagan bo'lsangiz, farqni yoki zararni qoplashni talab qila olasiz." },
        { t: "Kassir haq — yorliq shunchaki reklama", ok: false, why: "Xato. Yorliqdagi narx — xaridorga berilgan rasmiy ma'lumot. Uni «reklama» deb chetlab o'tish mumkin emas." },
        { t: "Indamay ketaman, endi bu do'konga kirmayman", ok: false, why: "Xato. Huquqingiz buzildi. Chek va surat bo'lsa, farqni joyida qaytarib olish ko'pincha bir necha daqiqa oladi." },
      ],
    },
    game: {
      type: "spot",
      prompt: "Chekdagi muammoli qatorni toping",
      title: "KASSA CHEKI",
      lines: ["Do'kon: «Oila Market»", "Sana: bugun, 18:42", "Choynak elektr — yorliqdagidan qimmat", "Non — 1 dona", "Jami to'langan: karta orqali"],
      answer: 2,
      why: "Aynan shu qator yorliqdagi narxga mos kelmaydi. Chek — talab uchun eng kuchli dalil, uni tashlab yubormang.",
    },
    takeaway: "Yorliqdagi narx — sotuvchining ma'lumoti. U kassadagi narxga mos kelmasa, chek va surat bilan farqni talab qiling.",
    refs: [{ code: "IHQ", article: "6" }, { code: "IHQ", article: "7" }],
  },
  {
    id: "expired", icon: "Milk",
    ask: "Do'kondan muddati o'tgan mahsulot sotib oldim, nima qilaman?",
    title: "Muddati o'tgan sut",
    story: "Uyga kelib qarasangiz, do'kondan olgan sutingizning yaroqlilik muddati kecha tugagan ekan.",
    choice: {
      q: "Siz nima qilardingiz?",
      options: [
        { t: "Ichib ko'raman — bir kun hech narsa qilmaydi", ok: false, why: "Xato. Muddati o'tgan oziq-ovqat sog'liq uchun xavfli bo'lishi mumkin. Qonun xaridorga xavfsiz tovar talab qilish huquqini beradi." },
        { t: "Chek bilan do'konga qaytib, pulni qaytarishni talab qilaman; rad etishsa nazorat organiga xabar beraman", ok: true, why: "To'g'ri. Muddati o'tgan tovarni sotish taqiqlanadi. Pulingizni qaytarish talab qilinadi, takrorlansa — davlat nazorat organiga murojaat qilinadi." },
        { t: "Ijtimoiy tarmoqqa do'konni yomonlab yozaman, boshqa hech narsa qilmayman", ok: false, why: "Xato. Bu pulingizni qaytarmaydi va dalilsiz post nizo tug'dirishi mumkin. Avval sotuvchiga rasmiy talab qo'ying." },
      ],
    },
    game: {
      type: "order",
      prompt: "Harakatlarni to'g'ri tartibda joylang",
      items: ["Qadoq va muddatni suratga olaman", "Chek bilan do'konga qaytaman", "Pulni qaytarishni talab qilaman", "Rad etishsa, nazorat organiga ariza yozaman"],
      why: "Dalil → sotuvchiga talab → rad etilsa rasmiy organ. Bu tartib nizoni eng tez hal qiladi.",
    },
    takeaway: "Xaridor xavfsiz tovar olishga haqli. Muddati o'tgan mahsulot uchun pul qaytariladi, do'kon esa javob beradi.",
    refs: [{ code: "IHQ", article: "12" }, { code: "IHQ", article: "26" }],
  },
];
