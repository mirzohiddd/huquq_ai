"use strict";
/**
 * HAYOTIY VAZIYATLAR — JINSIY JINOYATLAR VA SHANTAJ.
 * Tuzilma va qoidalar — situationsFamily.js izohida.
 *
 * ⚠️ 2026-09-28: "18 yoshli yigit 13 yoshli qizning nomusiga tegsa…" va
 * "qizning nomusini olib qo'ydim, u shantaj qilyapti" savollari mavzu
 * filtridan o'tmay "faqat huquqiy savollarga javob beraman" deb rad
 * etilardi — "nomus", "shantaj" so'zlari filtr ro'yxatida yo'q edi.
 * Yosh chegaralari va jazo matnda YOZILMAYDI — ular iqtibos qilingan
 * moddada (JK 118, 128, 129) jonli ko'rinadi.
 */

const SEXUAL =
  /nomus|zorla|jinsiy|pedofil|pedofel|buzuq|изнасил|насилов|половое|педофил|развратн/;
const EXTORTION = /shantaj|tovlamachi|qorqitib pul|pul talab qil|шантаж|вымогат/;
const UNDER14 = /toʻrt yosh|to.rt yosh|четырнадцати/i;
const CONFESSION = /aybni boʻyniga|aybni bo.yniga|явка с повинной/i;

const INTIMACY = /(qiz|yigit|ogil|bola)\S*.{0,30}(munosabat\S* (qil|bol|kir)|yaqinlik|birga (yot|tunad|bolib)|uxlad)|связ\S* с (девоч|несовершен)|интим/;

const MINOR =
  /\b([1-9]|1[0-7]) ?(yosh|ёш|лет|год)|voyaga yetmagan|balogat|maktab ?o?quvchi|несовершеннолет|малолет|pedofil|pedofel|педофил/;

module.exports = [
  {
    id: "sexual_blackmail",
    match: (t) => SEXUAL.test(t) && EXTORTION.test(t),
    title: { uz: "Jinsiy munosabat bo'yicha shantaj", ru: "Шантаж в связи с интимными отношениями" },
    summary: {
      uz:
        "Vaziyat ikki tomonlama baholanadi. Birinchidan, sir saqlanishi lozim bo'lgan ma'lumotni oshkor qilish bilan " +
        "qo'rqitib pul yoki mulk talab qilish — tovlamachilik jinoyati. Ikkinchidan, sizning harakatingiz ham qonun bo'yicha " +
        "tekshiriladi: jinsiy aloqa zo'rlik, qo'rqitish yoki ojizlikdan foydalanib bo'lgan bo'lsa — nomusga tegish; " +
        "ikkinchi tomon qonunda belgilangan yoshga to'lmagan bo'lsa — uning roziligidan qat'i nazar jinoyat. " +
        "Ikkala tomon ham kattalar va munosabat ixtiyoriy bo'lgan bo'lsa — jinsiy aloqaning o'zi jinoyat emas.",
      ru:
        "Ситуация оценивается с двух сторон. Во-первых, требование денег или имущества под угрозой разглашения " +
        "сведений, которые лицо желает сохранить в тайне, — вымогательство (преступление). Во-вторых, будут оценены и " +
        "ваши действия: если была применена сила, угроза или беспомощность — изнасилование; если другой стороне не " +
        "исполнилось установленного законом возраста — преступление независимо от её согласия. Если оба совершеннолетние " +
        "и всё было добровольно — сама связь преступлением не является.",
    },
    pins: [["JK", "165"], ["JK", "118"], ["JK", "128"], ["JK", "55", CONFESSION]],
    codes: ["JK", "JPK"],
    terms: "tovlamachilik sir saqlanishi lozim boʻlgan maʼlumotlarni oshkor qilish",
    steps: {
      uz: [
        "Talablarni bajarmang, pul bermang va o'zingiz ham javob tahdidi qilmang — bu vaziyatni og'irlashtiradi.",
        "Yozishmalar va xabarlarni o'chirmang: ular shantaj dalili. Dalilni yo'q qilish sizga qarshi ishlatilishi mumkin.",
        "Birinchi navbatda advokat (himoyachi) bilan yuzma-yuz maslahatlashing — u vaziyatning ikkala tomonini baholab, qanday harakat qilishni aytadi.",
        "Shantaj haqida ichki ishlar organiga ariza berishga haqlisiz. Tergovda himoyachi ishtirok etishini talab qilish huquqingiz bor.",
        "Agar qonunni buzgan bo'lsangiz: aybni bo'yniga olish to'g'risida arz qilish va zararni ixtiyoriy bartaraf etish qonunda jazoni yengillashtiruvchi holat sifatida ko'rsatilgan.",
      ],
      ru: [
        "Не выполняйте требования, не платите и сами не угрожайте в ответ — это ухудшит положение.",
        "Не удаляйте переписку: это доказательство шантажа. Уничтожение доказательств может быть использовано против вас.",
        "Прежде всего лично проконсультируйтесь с адвокатом (защитником) — он оценит обе стороны ситуации.",
        "Вы вправе подать заявление о шантаже в органы внутренних дел и требовать участия защитника.",
        "Если вы нарушили закон: явка с повинной и добровольное возмещение вреда по закону смягчают наказание.",
      ],
    },
  },
  {
    id: "sexual_minor",
    // "…13 yoshli qiz bilan munosabatda bo'ldi" — evfemizm (2026-10-05): "jinsiy"
    // so'zisiz ham voyaga yetmagan + yaqinlik iborasi bo'lsa shu vaziyat
    match: (t) =>
      ((SEXUAL.test(t) || INTIMACY.test(t)) && MINOR.test(t)) || /pedofil|pedofel|педофил/.test(t),
    title: { uz: "Voyaga yetmagan shaxsga nisbatan jinsiy jinoyatlar", ru: "Половые преступления против несовершеннолетних" },
    summary: {
      uz:
        "O'zbekiston qonunchiligida «pedofiliya» degan alohida modda yo'q — bunday harakatlar Jinoyat kodeksining " +
        "voyaga yetmaganlarni himoya qiluvchi moddalari bilan baholanadi. Qonunda belgilangan yoshga to'lmagan shaxs " +
        "bilan jinsiy aloqa uning ROZILIGI bo'lsa ham jinoyat. Zo'rlik, qo'rqitish yoki ojizlikdan foydalanilgan bo'lsa — " +
        "bu nomusga tegish; jabrlanuvchining yoshi qancha kichik bo'lsa, qonun shuncha og'ir qismni qo'llaydi. " +
        "Yosh chegaralari va jazo quyidagi moddalar matnida.",
      ru:
        "В законодательстве Узбекистана нет отдельной статьи «педофилия» — такие действия квалифицируются по статьям " +
        "Уголовного кодекса о защите несовершеннолетних. Половая связь с лицом, не достигшим установленного законом " +
        "возраста, — преступление даже при его СОГЛАСИИ. При насилии, угрозе или использовании беспомощности — " +
        "изнасилование; чем младше потерпевший, тем более тяжкая часть статьи применяется. Возрастные пороги и " +
        "наказание — в тексте статей ниже.",
    },
    pins: [["JK", "128"], ["JK", "118", UNDER14], ["JK", "129", UNDER14]],
    codes: ["JK", "JPK"],
    terms: "yoshga toʻlmagan shaxs bilan jinsiy aloqa nomusga tegish",
    steps: {
      uz: [
        "Bunday holat haqida bilsangiz — darhol 102 raqamiga yoki prokuraturaga xabar bering.",
        "Jabrlanuvchi bola bo'lsa, uni tibbiy ko'rikdan kechiktirmasdan o'tkazing — bu asosiy dalil; tergovda uning manfaatini ota-onasi yoki qonuniy vakili himoya qiladi.",
        "Yozishmalar, rasmlar va guvohlar haqidagi ma'lumotlarni saqlang va tergovchiga topshiring.",
      ],
      ru: [
        "Если вам известно о таком случае — сразу сообщите по номеру 102 или в прокуратуру.",
        "Если потерпевший — ребёнок, без промедления пройдите медицинское освидетельствование — это главное доказательство; интересы ребёнка в следствии защищают родители или законный представитель.",
        "Сохраните переписку, изображения, сведения о свидетелях и передайте следователю.",
      ],
    },
  },
  {
    id: "sexual_violence",
    match: (t) =>
      /nomus\S* teg|nomusimga|zorla|изнасил|насилов/.test(t) && !EXTORTION.test(t),
    title: { uz: "Nomusga tegish (jinsiy zo'ravonlik)", ru: "Изнасилование (сексуальное насилие)" },
    summary: {
      uz:
        "Zo'rlik ishlatib, qo'rqitib yoki jabrlanuvchining ojizligidan foydalanib jinsiy aloqa qilish — nomusga tegish, " +
        "og'ir jinoyat. Jabrlanuvchi jinoyat ishida o'z huquqlariga ega.",
      ru:
        "Половое сношение с применением насилия, угроз или с использованием беспомощности потерпевшей — " +
        "изнасилование, тяжкое преступление. Потерпевшая обладает процессуальными правами.",
    },
    pins: [["JK", "118"], ["JK", "119"], ["JK", "121"], ["JPK", "55"]],
    codes: ["JK", "JPK"],
    terms: "nomusga tegish zoʻrlik ishlatib jinsiy aloqa jabrlanuvchi",
    steps: {
      uz: [
        "Xavfsiz joyga o'ting va 102 raqamiga qo'ng'iroq qiling.",
        "Iloji bo'lsa yuvinmang va kiyimni almashtirmang — darhol tibbiy ko'rikdan o'ting: bu asosiy dalil.",
        "Ichki ishlar organiga ariza bering. Jabrlanuvchi sifatida vakil (advokat) bilan ishtirok etish huquqingiz bor.",
        "Yozishmalar, qo'ng'iroqlar va guvohlar haqidagi ma'lumotlarni saqlang.",
      ],
      ru: [
        "Уйдите в безопасное место и позвоните по номеру 102.",
        "По возможности не мойтесь и не меняйте одежду — сразу пройдите медицинское освидетельствование: это главное доказательство.",
        "Подайте заявление в органы внутренних дел. Как потерпевшая вы вправе участвовать с представителем (адвокатом).",
        "Сохраните переписку, звонки и сведения о свидетелях.",
      ],
    },
  },
  {
    id: "extortion",
    match: (t) => EXTORTION.test(t),
    title: { uz: "Shantaj (tovlamachilik)", ru: "Шантаж (вымогательство)" },
    summary: {
      uz:
        "Zo'rlik ishlatish, mulkka zarar yetkazish yoki sir saqlanishi lozim bo'lgan ma'lumotni oshkor qilish bilan " +
        "qo'rqitib pul, mulk yoki mulkiy manfaat talab qilish — tovlamachilik jinoyati.",
      ru:
        "Требование денег, имущества или имущественной выгоды под угрозой насилия, повреждения имущества или " +
        "разглашения сведений, которые лицо желает сохранить в тайне, — вымогательство.",
    },
    pins: [["JK", "165"], ["JK", "112"], ["JPK", "55"]],
    codes: ["JK", "JPK"],
    terms: "tovlamachilik qoʻrqitib mulkni talab qilish",
    steps: {
      uz: [
        "Talablarni bajarmang va pul bermang — to'lov odatda yangi talablarga olib keladi.",
        "Barcha xabarlar, qo'ng'iroqlar va o'tkazmalarni saqlang (skrinshot, yozuv).",
        "Ichki ishlar organiga yozma ariza bering; kerak bo'lsa advokat bilan maslahatlashing.",
      ],
      ru: [
        "Не выполняйте требования и не платите — оплата обычно ведёт к новым требованиям.",
        "Сохраните все сообщения, звонки и переводы (скриншоты, записи).",
        "Подайте письменное заявление в органы внутренних дел; при необходимости проконсультируйтесь с адвокатом.",
      ],
    },
  },
];
