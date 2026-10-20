"use strict";
/**
 * KUNDALIK TILDAGI SAVOLLAR — meros, uy-joy, iste'molchi, qarz (2026-10-20).
 * Nima uchun alohida va qaysi qoidaga bo'ysunadi — `kundalik-a.js` boshida.
 */
module.exports = [
  {
    slug: "meros-aka-uka-opa-singillar-orasida-qanday-bolinadi",
    area: "meros",
    q: { uz: "Meros farzandlar va aka-ukalar o'rtasida qanday bo'linadi?", ru: "Как делится наследство между детьми, братьями и сёстрами?" },
    short: {
      uz: "Vasiyatnoma bo'lmasa, meros qonun bo'yicha NAVBAT tartibida o'tadi. Birinchi navbatda farzandlar, er (xotin) va ota-ona teng ulushda oladi. Aka-uka va opa-singillar ikkinchi navbatda — faqat birinchi navbatdagi vorislar bo'lmasa yoki merosni olmasa.",
      ru: "Без завещания наследство переходит по закону В ПОРЯДКЕ ОЧЕРЕДИ. Первыми в равных долях наследуют дети, супруг и родители. Братья и сёстры — наследники второй очереди: только если нет наследников первой очереди или они не приняли наследство.",
    },
    body: {
      uz: [
        "Bir navbat ichidagi vorislar teng ulush oladi — o'g'il va qiz o'rtasida farq yo'q. Meros qoldiruvchidan oldin vafot etgan farzandning ulushi uning bolalariga (nevaralarga) o'tadi — bu taqdim qilish huquqi deyiladi.",
        "Merosni qabul qilish uchun belgilangan muddatda notariusga ariza berish kerak. Vasiyatnoma bo'lsa ham, voyaga yetmagan yoki mehnatga qobiliyatsiz yaqinlarning majburiy ulushi saqlanadi.",
      ],
      ru: [
        "Наследники одной очереди получают равные доли — разницы между сыном и дочерью нет. Доля ребёнка, умершего раньше наследодателя, переходит к его детям (внукам) — это право представления.",
        "Чтобы принять наследство, нужно в установленный срок подать заявление нотариусу. Даже при завещании сохраняется обязательная доля несовершеннолетних или нетрудоспособных близких.",
      ],
    },
    refs: [{ code: "FK2", article: "1135" }, { code: "FK2", article: "1136" }, { code: "FK2", article: "1140" }],
  },
  {
    slug: "qarzni-qaytarmasa-nima-qilish-kerak",
    area: "shartnoma",
    q: { uz: "Qarzni qaytarmasa nima qilish kerak?", ru: "Что делать, если не возвращают долг?" },
    short: {
      uz: "Avval qarzdorga yozma talab yuboring: muddat kelishilmagan bo'lsa, qarz talab qilingan kundan boshlab qonundagi muddatda qaytarilishi shart. Qaytarmasa — sudga da'vo arizasi beriladi. Da'vo muddati cheklangan, kechiktirmang.",
      ru: "Сначала направьте должнику письменное требование: если срок не оговорён, долг возвращается в установленный законом срок со дня требования. Если не вернёт — подаётся иск в суд. Срок исковой давности ограничен, не затягивайте.",
    },
    body: {
      uz: [
        "Asosiy dalil — tilxat yoki yozma shartnoma. Qonunda belgilangan summadan katta qarz yozma shaklda bo'lishi shart: yozma shakl bo'lmasa, qarzni guvohlar ko'rsatmasi bilan isbotlab bo'lmaydi, lekin bank o'tkazmasi, xabarlar va boshqa yozma dalillar ishlatilishi mumkin.",
      ],
      ru: [
        "Главное доказательство — расписка или письменный договор. Заём свыше установленной законом суммы должен быть письменным: без этого долг нельзя доказать показаниями свидетелей, но можно — банковским переводом, перепиской и другими письменными доказательствами.",
      ],
    },
    refs: [{ code: "FK2", article: "735" }, { code: "FK2", article: "733" }, { code: "FK", article: "150" }],
  },
  {
    slug: "kafolat-davrida-telefon-buzilsa-nima-qilish-kerak",
    area: "istemolchi",
    q: { uz: "Kafolat davrida telefon (texnika) buzilsa nima qilish kerak?", ru: "Что делать, если телефон (техника) сломался на гарантии?" },
    short: {
      uz: "Sotuvchiga murojaat qiling: siz tanlovingizga ko'ra tovarni almashtirishni, bepul ta'mirlashni, narxni kamaytirishni yoki pulni qaytarib, shartnomani bekor qilishni talab qilishga haqlisiz. Nuqson kafolat muddati ichida chiqqan bo'lishi kerak.",
      ru: "Обратитесь к продавцу: по своему выбору вы вправе потребовать замену, бесплатный ремонт, уменьшение цены или возврат денег с расторжением договора. Недостаток должен проявиться в течение гарантийного срока.",
    },
    body: {
      uz: [
        "Talabni yozma ravishda, ikki nusxada bering. Chek, kafolat taloni va qadoqni saqlang. Sotuvchi nuqson sababini aniqlash uchun ekspertiza o'tkazishi mumkin; nuqson xaridor aybi bilan paydo bo'lmagan bo'lsa, xarajat sotuvchi zimmasida.",
        "Sotuvchi rad etsa, iste'molchilar huquqlarini himoya qilish organiga yoki sudga murojaat qiling.",
      ],
      ru: [
        "Подайте требование письменно, в двух экземплярах. Сохраняйте чек, гарантийный талон и упаковку. Продавец может провести экспертизу причины недостатка; если он возник не по вине покупателя, расходы несёт продавец.",
        "При отказе обращайтесь в орган по защите прав потребителей или в суд.",
      ],
    },
    refs: [{ code: "IHQ", article: "13" }, { code: "IHQ", article: "15" }, { code: "IHQ", article: "14" }],
  },
  {
    slug: "uy-egasi-ijarachini-chiqarib-yubora-oladimi",
    area: "uy-joy",
    q: { uz: "Uy egasi ijarachini muddatidan oldin chiqarib yubora oladimi?", ru: "Может ли хозяин выселить арендатора досрочно?" },
    short: {
      uz: "O'zboshimchalik bilan — yo'q. Ijara shartnomasi muddatidan oldin faqat qonunda sanalgan asoslarda (masalan, haq qayta-qayta to'lanmasa yoki mulk buzilsa) va odatda SUD orqali bekor qilinadi. Avval ijarachiga yozma ogohlantirish beriladi.",
      ru: "Самовольно — нет. Договор аренды досрочно расторгается только по основаниям, перечисленным в законе (например, неоднократная неуплата или порча имущества), и, как правило, через СУД. Сначала арендатору направляется письменное предупреждение.",
    },
    body: {
      uz: [
        "Shartnomani yozma tuzing: unda muddat, to'lov va bekor qilish tartibi ko'rsatilsin. Shartnoma tugaganda ijarachi mulkni olgan holatida (tabiiy eskirishni hisobga olib) qaytaradi.",
      ],
      ru: [
        "Заключайте договор письменно, указав срок, оплату и порядок расторжения. По окончании договора арендатор возвращает имущество в полученном состоянии с учётом нормального износа.",
      ],
    },
    refs: [{ code: "FK2", article: "551" }, { code: "FK2", article: "554" }, { code: "UJK", article: "25" }],
  },
];
