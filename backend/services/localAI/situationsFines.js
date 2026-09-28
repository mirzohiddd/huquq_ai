"use strict";
/**
 * HAYOTIY VAZIYATLAR — JARIMA (2026-09-28).
 * Tuzilma va qoidalar — situationsFamily.js izohida.
 * ⚠️ "Jarimani to'lamasam nima bo'ladi?" savoliga avval Soliq kodeksining
 * "Soliqni to'lamaslik" moddasi chiqardi (sarlavhadagi "to'lamaslik" so'zi).
 */

module.exports = [
  {
    id: "unpaid_fine",
    match: (t) => /jarima\S*.{0,30}(tolamas|tolamay|tolamadi|tolash muddat|qachongacha|undir)|штраф\S*.{0,20}(не (о)?плат|срок)/.test(t),
    title: { uz: "Jarimani to'lamaslik oqibatlari", ru: "Последствия неуплаты штрафа" },
    summary: {
      uz:
        "Ma'muriy jarima qaror topshirilgan (yo'l harakati qoidabuzarligida — qaror chiqarilgan) kundan boshlab qonunda " +
        "belgilangan muddatda to'lanishi kerak. Muddatida to'lanmasa, jarima MAJBURIY undiriladi: ish haqi, nafaqa yoki " +
        "stipendiyadan, bunday daromad bo'lmasa — davlat ijrochisi orqali. Jinoyat uchun jazo sifatida tayinlangan " +
        "jarimadan bo'yin tovlashning oqibatlari esa og'irroq. Muddatlar quyidagi moddalarda.",
      ru:
        "Административный штраф уплачивается в установленный законом срок со дня вручения постановления (по нарушениям " +
        "ПДД — со дня его вынесения). При неуплате штраф взыскивается ПРИНУДИТЕЛЬНО: из зарплаты, пенсии или стипендии, " +
        "а при их отсутствии — государственным исполнителем. Уклонение от штрафа, назначенного как уголовное наказание, " +
        "влечёт более тяжкие последствия. Сроки — в статьях ниже.",
    },
    pins: [["MJK", "332"], ["MJK", "333"], ["JIK", "20"]],
    codes: ["MJK", "JIK"],
    terms: "",
    steps: {
      uz: [
        "Jarima qarorini tekshiring: qachon topshirilgani va qancha muddat berilgani.",
        "Qarorga rozi bo'lmasangiz, uni belgilangan muddatda shikoyat qiling — shikoyat ko'rib chiqilguncha to'lash muddati boshqacha hisoblanadi.",
        "Rozi bo'lsangiz, muddatida to'lang va to'lov kvitansiyasini saqlang — majburiy undirishda qo'shimcha xarajatlar yuzaga kelishi mumkin.",
      ],
      ru: [
        "Проверьте постановление: когда оно вручено и какой срок дан.",
        "Если не согласны — обжалуйте его в установленный срок: на время обжалования срок уплаты исчисляется иначе.",
        "Если согласны — оплатите в срок и сохраните квитанцию: при принудительном взыскании возможны дополнительные расходы.",
      ],
    },
  },
];
