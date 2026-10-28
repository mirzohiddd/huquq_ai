"use strict";
/**
 * HAYOTIY VAZIYATLAR — ONLAYN VA SHAXSGA QARSHI YANGI HOLATLAR (2026-10-28).
 * Tuzilma va qoidalar — situationsFamily.js izohida.
 *
 * ⚠️ Nega qo'shildi: chatdagi tezkor savollar sinovida —
 *   "AI orqali yuzim bilan soxta video qilishdi" → "faqat huquqiy savollar" (rad);
 *   "Instagram do'koniga pul to'ladim, meni bloklashdi" → "topilmadi";
 *   "Nomimga begona odam kredit olgan" → kredit haqidagi UMUMIY dars
 *   (savolning o'zi — "men to'laymanmi?" — javobsiz qolardi);
 *   "Internetdan olgan buyumim boshqa chiqdi" → "nuqsonli tovar" qolipi.
 * Pin'lar bazadan raqami VA sarlavhasi bo'yicha tekshirilgan.
 * Tartib: shu fayl situationsCivil (qarz, nuqsonli tovar) va
 * situationsCrime (firibgarlik, tuhmat) dan OLDIN ulanadi.
 */

const ONLINE = /instagram|uzum|wildberries|insta|telegram|tiktok|facebook|olx|internet|onlayn|online|sayt|ilova|интернет|инстаграм|телеграм|онлайн|сайт/;

module.exports = [
  {
    id: "identity_loan",
    match: (t) =>
      /(nomim|pasportim|hujjatim|mening nomim|(soxta|qalbaki) (pasport|hujjat))\S*.{0,40}(kredit|qarz|nasiya|mikroqarz|zaym)|(kredit|qarz|nasiya|mikroqarz)\S*.{0,40}(nomimga|nomimdan|pasportimga|pasportim bilan)|на (моё|мое|меня) (имя|паспорт).{0,30}(кредит|займ)|(кредит|займ).{0,30}на (моё|мое) имя/.test(t),
    title: { uz: "Nomingizga begona shaxs kredit olgan", ru: "Кредит, оформленный на ваше имя без вас" },
    summary: {
      uz:
        "Kredit shartnomasi — bitim, bitim esa shaxsning o'z harakati (irodasi) bilan tuziladi. Siz tuzmagan, " +
        "imzolamagan va pulini olmagan shartnoma bo'yicha qarzni to'lash majburiyati sizga o'tmaydi. Lekin bu " +
        "o'z-o'zidan bo'lmaydi: bankka yozma e'tiroz bildirishingiz va kerak bo'lsa sud orqali shartnomani " +
        "haqiqiy emas deb topdirishingiz kerak. Hujjatingizdan foydalanib kredit olish — firibgarlik jinoyati.",
      ru:
        "Кредитный договор — это сделка, а сделка совершается собственной волей лица. Договор, который вы не " +
        "заключали, не подписывали и по которому не получали деньги, не порождает у вас обязанности платить. " +
        "Но это не происходит автоматически: нужно письменно возразить банку и при необходимости признать " +
        "договор недействительным через суд. Получение кредита по чужим документам — мошенничество.",
    },
    pins: [["FK", "101"], ["FK2", "744"], ["FK", "113"], ["JK", "168", /axborot tizimidan|информационн/i]],
    codes: ["FK", "FK2", "JK"],
    terms: "bitim haqiqiy emas kredit shartnomasi firibgarlik",
    steps: {
      uz: [
        "Kredit bergan bankka (yoki mikromoliya tashkilotiga) darhol yozma ariza bering: shartnomani siz tuzmaganingizni, imzo sizniki emasligini va pul olmaganingizni yozing, shartnoma nusxasini va pul qaysi hisobga o'tkazilganini so'rang.",
        "Ichki ishlar organiga firibgarlik haqida ariza bering va arizaning qabul qilinganini tasdiqlovchi hujjatni oling — uni bankka ham taqdim eting.",
        "Kredit tarixingizni tekshiring: nomingizga yana boshqa kredit rasmiylashtirilmaganiga ishonch hosil qiling.",
        "Qarzni tan oluvchi hech qanday hujjatga imzo qo'ymang va \"vaqtincha\" to'lov qilmang. Bank undirishni davom ettirsa — sudga shartnomani haqiqiy emas deb topish haqida da'vo bering.",
        "Pasportingiz yo'qolgan yoki o'g'irlangan bo'lsa — buni ham rasmiy qayd ettiring.",
      ],
      ru: [
        "Сразу подайте письменное заявление в банк (или микрофинансовую организацию): укажите, что не заключали договор, подпись не ваша и деньги вы не получали; запросите копию договора и сведения, на какой счёт ушли деньги.",
        "Подайте заявление о мошенничестве в органы внутренних дел и получите подтверждение его приёма — предоставьте его и банку.",
        "Проверьте свою кредитную историю: убедитесь, что на ваше имя не оформлены другие кредиты.",
        "Не подписывайте документов, признающих долг, и не вносите «временных» платежей. Если банк продолжит взыскание — подайте в суд иск о признании договора недействительным.",
        "Если паспорт был утерян или украден — официально зафиксируйте и это.",
      ],
    },
  },
  {
    id: "deepfake",
    match: (t) =>
      /deepfake|дипфейк|фейков\S* (видео|фото)|yuzim(ni)? (bilan|qoy|ishlat)|(soxta|qalbaki|feyk|fake)\S*.{0,25}(video|rasm|surat|foto|ovoz)|(video|rasm|surat|foto|ovoz)\S*.{0,25}(soxta|qalbaki)|(meni|yuzimni|rasmimni|suratimni)\S*.{0,25}montaj|(^|\s)(ai|suniy intellekt|нейросет\S*)\s.{0,30}(video|rasm|surat|yuzim|фото|видео)/.test(t),
    title: { uz: "Tasviringizdan soxta video yoki rasm (deepfake) yasalgan", ru: "Фейковое видео или фото с вашим лицом (дипфейк)" },
    summary: {
      uz:
        "Qonun shaxsning tasviriga, sha'ni va qadr-qimmatiga, shaxsiy hayoti daxlsizligiga bo'lgan huquqini himoya " +
        "qiladi. Yuzingiz ishlatilgan soxta video sizni sharmanda qiladigan uydirma bo'lsa — bu tuhmat (Internetda " +
        "tarqatilsa javobgarlik og'irroq); yalang'och tasvir roziligisiz tarqatilsa yoki tarqatish bilan qo'rqitilsa — " +
        "alohida jinoyat. Fuqarolik tartibida esa raddiya va ma'naviy zararni qoplashni talab qilish mumkin.",
      ru:
        "Закон защищает право человека на изображение, честь и достоинство, неприкосновенность частной жизни. " +
        "Если фейковое видео с вашим лицом — порочащий вымысел, это клевета (при распространении в Интернете " +
        "ответственность строже); распространение обнажённого изображения без согласия или угроза его " +
        "распространить — отдельное преступление. В гражданском порядке можно требовать опровержения и " +
        "компенсации морального вреда.",
    },
    pins: [["FK", "99", /tasvirga|изображени/i], ["FK", "100"], ["JK", "139", /internet|интернет/i], ["JK", "141-3"]],
    codes: ["FK", "JK", "MJK", "FK2"],
    terms: "tasvirga boʻlgan huquq shaʼn qadr-qimmat tuhmat shaxsiy hayot daxlsizligi",
    steps: {
      uz: [
        "Video yoki rasmni o'chirishdan oldin dalil sifatida saqlang: havola (link), skrinshot, joylagan akkaunt nomi, sana va ko'rishlar soni.",
        "Joylashtirilgan platformaga (Instagram, Telegram, TikTok va h.k.) shikoyat yuborib, kontentni o'chirishni talab qiling — ularda soxta va roziligisiz kontent uchun alohida shikoyat turi bor.",
        "Ichki ishlar organiga yozma ariza bering. Video evaziga pul yoki boshqa narsa talab qilinsa — hech narsa to'lamang, bu tovlamachilik belgisi, buni ham arizada ko'rsating.",
        "Obro'yingizga zarar yetgan bo'lsa — sudga raddiya berish va ma'naviy zararni qoplash haqida da'vo bilan murojaat qilishingiz mumkin.",
      ],
      ru: [
        "Прежде чем добиваться удаления, сохраните доказательства: ссылку, скриншоты, имя аккаунта, дату и число просмотров.",
        "Пожалуйтесь на платформу (Instagram, Telegram, TikTok и т.д.) и потребуйте удалить контент — там есть отдельный тип жалобы на фейковый контент без согласия.",
        "Подайте письменное заявление в органы внутренних дел. Если за видео требуют деньги или что-то иное — ничего не платите, это признак вымогательства; укажите это в заявлении.",
        "Если пострадала репутация — можно обратиться в суд с иском об опровержении и компенсации морального вреда.",
      ],
    },
  },
  {
    // Instagram/Telegram do'kon pulni olib bloklagan — firibgarlikning onlayn ko'rinishi
    id: "online_shop_scam",
    match: (t) =>
      ONLINE.test(t) &&
      /(blok|blokla|block|заблок|o\S{0,2}chirib yubor|yoqolib qoldi|yoqoldi|javob bermay|aloqaga chiqmay|telefon\S* olmay|tovar\S* (yubormay|bermay|kelmadi)|пропал|не отвеча|не прислал|не отправил)/.test(t) &&
      /(pul|tolad|tolab|otkaz|oldindan|predoplat|предоплат|оплат|перев|заплат)/.test(t),
    title: { uz: "Onlayn do'konga pul to'ladingiz, ular sizni bloklashdi", ru: "Оплатили онлайн-магазину, а вас заблокировали" },
    summary: {
      uz:
        "Pulni olib, tovarni bermasdan aloqani uzish — aldash yo'li bilan o'zganing mulkini qo'lga kiritish, " +
        "ya'ni firibgarlik. Internet yoki boshqa axborot texnologiyalaridan foydalanib sodir etilgan firibgarlik " +
        "uchun javobgarlik og'irroq. Siz jabrlanuvchi sifatida jarayonda o'z huquqlaringizga egasiz va " +
        "zararni qoplashni talab qila olasiz.",
      ru:
        "Получить деньги, не передать товар и прервать связь — значит завладеть чужим имуществом путём обмана, " +
        "то есть мошенничество. За мошенничество с использованием Интернета и информационных технологий " +
        "ответственность строже. Как потерпевший вы обладаете процессуальными правами и вправе требовать " +
        "возмещения ущерба.",
    },
    pins: [["JK", "168", /axborot tizimidan|информационн/i], ["JPK", "55"]],
    codes: ["JK", "JPK"],
    terms: "firibgarlik aldash axborot tizimidan foydalanib",
    steps: {
      uz: [
        "To'lov qilgan bankingiz yoki to'lov ilovangizga (Click, Payme va h.k.) darhol murojaat qiling: o'tkazma kimning kartasi yoki hisobiga ketganini qayd ettiring va iloji bo'lsa uni to'xtatishni so'rang.",
        "Hammasini saqlang: sahifa nomi va havolasi, yozishmalar skrinshoti, chek, karta raqami, telefon raqami. Bloklangan bo'lsangiz ham sahifani boshqa akkauntdan skrinshot qilib oling.",
        "Ichki ishlar organiga yozma ariza bering — pul qabul qilgan karta raqami firibgarni aniqlashda asosiy dalil bo'ladi.",
        "Platformaga (Instagram, Telegram) sahifa haqida shikoyat qiling — boshqalar aldanmasligi uchun.",
      ],
      ru: [
        "Сразу обратитесь в свой банк или платёжное приложение (Click, Payme и т.д.): зафиксируйте, на чью карту или счёт ушёл перевод, и по возможности попросите его остановить.",
        "Сохраните всё: название и ссылку на страницу, скриншоты переписки, чек, номер карты получателя, номер телефона. Даже если вас заблокировали, сделайте скриншот страницы с другого аккаунта.",
        "Подайте письменное заявление в органы внутренних дел — номер карты получателя станет главным доказательством для установления мошенника.",
        "Пожалуйтесь на страницу в платформу (Instagram, Telegram), чтобы другие не пострадали.",
      ],
    },
  },
  {
    // Buyum KELDI, lekin boshqasi — firibgarlik emas, iste'molchi nizosi.
    // Umumiy "nuqsonli tovar" (situationsCivil) dan OLDIN.
    id: "wrong_item_online",
    match: (t) =>
      /(boshqa (chiqdi|keldi|narsa keldi)|boshqasini (yubor|ber|olib)|rasmdagi\S* (emas|bilan bir xil emas|farq)|rasmdagidek emas|aytilgandek emas|ne to prish|не тот|другой товар|не соответству|не как на фото)/.test(t) &&
      (ONLINE.test(t) || /(buyurtma|zakaz|yetkazib|dostavka|sotib ol|olgan|xarid|dokon|заказ|доставк|купил|магазин)/.test(t)),
    title: { uz: "Buyurtma qilingan narsa o'rniga boshqa tovar keldi", ru: "Пришёл не тот товар, что заказывали" },
    summary: {
      uz:
        "Masofadan (internet orqali, rasm yoki ta'rif bo'yicha) sotishda sotuvchi aynan ko'rsatilgan namunaga, " +
        "ta'rifga mos tovarni berishi shart. Tovar haqida noto'g'ri yoki to'liq bo'lmagan ma'lumot berilib, siz kutgan " +
        "xossaga ega bo'lmagan narsa kelgan bo'lsa — shartnomani bekor qilib pulni qaytarishni va zararni qoplashni " +
        "talab qilishga haqlisiz. Tovar umuman yuborilmasa va sotuvchi yo'qolib qolsa — bu firibgarlik.",
      ru:
        "При дистанционной продаже (через интернет, по фото или описанию) продавец обязан передать товар, " +
        "соответствующий образцу и описанию. Если из-за неверной или неполной информации о товаре вам пришло " +
        "не то, что вы ожидали, вы вправе расторгнуть договор, вернуть деньги и потребовать возмещения убытков. " +
        "Если товар вовсе не отправили и продавец пропал — это мошенничество.",
    },
    pins: [["IHQ", "7"], ["FK2", "429"], ["IHQ", "13"]],
    codes: ["IHQ", "FK2"],
    terms: "tovar haqida notoʻgʻri maʼlumot namuna boʻyicha sotish isteʼmolchi",
    steps: {
      uz: [
        "Tovarni ishlatmang va qadog'ini saqlang. Kelgan narsani e'londagi rasm va ta'rif bilan yonma-yon suratga oling.",
        "Buyurtma sahifasi, e'lon, yozishmalar va to'lov chekini saqlang — ular nima va'da qilinganini isbotlaydi.",
        "Sotuvchiga yozma talab yuboring: to'g'ri tovarni yuborish yoki shartnomani bekor qilib pulni qaytarish. Marketpleys (masalan Uzum) bo'lsa — uning ilovasi orqali qaytarish so'rovini rasmiylashtiring.",
        "Rad etilsa — iste'molchilar huquqlarini himoya qilish organiga yoki sudga murojaat qiling; karta orqali to'lagan bo'lsangiz, bankka ham murojaat qilishingiz mumkin.",
      ],
      ru: [
        "Не пользуйтесь товаром и сохраните упаковку. Сфотографируйте полученное рядом с фото и описанием из объявления.",
        "Сохраните страницу заказа, объявление, переписку и чек — они доказывают, что было обещано.",
        "Направьте продавцу письменное требование: прислать правильный товар или расторгнуть договор и вернуть деньги. Если это маркетплейс (например, Uzum) — оформите возврат через его приложение.",
        "При отказе обратитесь в орган по защите прав потребителей или в суд; если платили картой — можно обратиться и в банк.",
      ],
    },
  },
];
