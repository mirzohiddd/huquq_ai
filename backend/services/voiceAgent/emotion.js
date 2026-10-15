"use strict";
/**
 * Ovozli yordamchining HIS-TUYG'USI (2026-10-15) — robot yuzi va ovoz
 * ohangi shundan oladi:
 *   happy    — salomlashish, minnatdorchilik, to'g'ri javob (yashil/oltin)
 *   sad      — foydalanuvchi og'ir holatni aytdi: hamdardlik (siyohrang)
 *   angry    — haqorat yoki zararli so'rov (qizil)
 *   confused — gap tushunilmadi, aniqlashtirish so'raladi (sariq)
 *   neutral  — oddiy huquqiy javob (ko'k)
 *
 * ⚠️ JS `\b` kirillni tanimaydi — kirill so'zlar chegarasiz yoziladi.
 */

const INSULT_LAT =
  /\b(ahmoq|axmoq|tentak|jinni|eshak|harom|haromi|padar|qanjiq|jalab|yaramas|befarosat|tupoy|debil|dalbayob|durak|idiot|stupid|bad bot)\w*/i;
const INSULT_CYR = /(идиот|дурак|тупой|тупая|дебил|урод|сука|бля|заткнись|ахмоқ|тентак|жинни)/i;

const GREET = /^(salom|salo\b|salam|assalom|asalom|hayrli (kun|tong|kech)|привет|здравствуй|добрый|hello|hi\b|hey\b)/i;
const THANKS = /(rahmat|raxmat|tashakkur|zo'?r(?!la|li|ov)|ajoyib|barakalla|yordam berdingiz|спасибо|благодар|отлично|супер)/i;

const SAD_LAT =
  /(urdi|uryapti|urib|kaltak|zo'?rla|o'?ldi|vafot|o'?lim|o'?ldir|bo'?shatishdi|haydashdi|aldab|aldadi|firib|o'?g'?irla|nomus|shantaj|haqorat|qamal|hibs|kasal|yig'?la|xafa|qiynal|qo'?rq|tahdid|ajrash|ajrim|tashlab ket|bermayapti|qarzdor)/i;
const SAD_CYR = /(избил|бьет|умер|смерт|уволил|обман|украл|угрож|развод|болен|плачу|страшно|не платят|урди|ўлди|вафот)/i;

function isInsult(text = "") {
  return INSULT_LAT.test(text) || INSULT_CYR.test(text);
}

function isGreeting(text = "") {
  return GREET.test(String(text).trim()) && String(text).trim().split(/\s+/).length <= 6;
}

function isThanks(text = "") {
  return THANKS.test(text) && String(text).trim().split(/\s+/).length <= 8;
}

/**
 * @param {{ userText: string, kind: "answer"|"clarify"|"blocked"|"insult" }} p
 */
function detectEmotion({ userText = "", kind = "answer" }) {
  if (kind === "insult" || kind === "blocked") return "angry";
  if (kind === "clarify") return "confused";
  // ⚠️ Avval "xafa" tekshiriladi: "zo'rlashdi" ichida "zo'r" bor
  if (SAD_LAT.test(userText) || SAD_CYR.test(userText)) return "sad";
  if (isGreeting(userText) || isThanks(userText)) return "happy";
  return "neutral";
}

module.exports = { detectEmotion, isInsult, isGreeting, isThanks };
