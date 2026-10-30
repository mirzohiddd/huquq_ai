"use strict";
/**
 * MINI APP KURSLARI — saytdagi darslardan quriladigan o'quv yo'llari.
 *
 * Birinchi kurs — "Hayotiy asoslar" (qo'lda yozilgan 8 bo'lim, `content/`).
 * Qolganlari saytdagi BARCHA darslardan (`Lesson`) huquq sohasi bo'yicha
 * avtomatik quriladi: har 3 mavzu — bitta o'yin-dars, har 5 dars — bo'lim,
 * bo'lim oxirida imtihon. Tartib — oddiydan murakkabga (sertifikat
 * imtihoniga tayyorgarlik ketma-ketligi: kundalik huquq → asosiy kodekslar
 * → davlat va javobgarlik → protsess).
 */
const BASICS = { key: "basics", title: "Hayotiy asoslar", icon: "Sparkles" };

const COURSES = [
  { key: "consumer", title: "Iste'molchi huquqlari", icon: "ShoppingBag" },
  { key: "labor", title: "Mehnat huquqi", icon: "Briefcase" },
  { key: "family", title: "Oila huquqi", icon: "Heart" },
  { key: "housing", title: "Uy-joy va yer", icon: "House" },
  { key: "civil", title: "Fuqarolik huquqi", icon: "Scale" },
  { key: "contracts", title: "Shartnomalar", icon: "FileSignature" },
  { key: "inheritance", title: "Meros huquqi", icon: "Landmark" },
  { key: "constitution", title: "Konstitutsiya va davlat", icon: "BookOpen" },
  { key: "administrative", title: "Ma'muriy huquq", icon: "Gavel" },
  { key: "tax", title: "Soliq va tadbirkorlik", icon: "Briefcase" },
  { key: "criminal", title: "Jinoyat huquqi", icon: "Shield" },
  { key: "process", title: "Sud va himoya", icon: "Gavel" },
  { key: "special", title: "Maxsus sohalar", icon: "Sparkles" },
];

const SECTIONS_PER_LESSON = 3; // bitta o'yin-darsdagi mavzu kartalari
const LESSONS_PER_UNIT = 5;
const EXAM_SIZE = 8; // bo'lim imtihonidagi savollar
const PASS_RATIO = 0.8; // imtihondan o'tish chegarasi (80%)
const LEVEL_RANK = { basic: 0, mid: 1, advanced: 2 };
const LEVEL_TITLE = ["Oson", "O'rta", "Qiyin", "Juda qiyin", "Ekspert"];

/* Sayt testi qaysi kursga tegishli: `category` bo'lmasa — sarlavhadan. */
const QUIZ_TITLE_COURSE = [
  [/iste'molchi|xarid/i, "consumer"],
  [/mehnat|ish joy/i, "labor"],
  [/oila|nikoh/i, "family"],
  [/meros/i, "inheritance"],
  [/jinoi|jinoy|huquqbuzar/i, "criminal"],
  [/yer va|ko'chmas/i, "housing"],
  [/konstitutsiya/i, "constitution"],
  [/fuqarolik/i, "civil"],
  [/ma'muriy/i, "administrative"],
  [/sud|hujjat/i, "process"],
];

function quizCourse(quiz) {
  if (quiz.category && COURSES.some((c) => c.key === quiz.category)) return quiz.category;
  const hit = QUIZ_TITLE_COURSE.find(([re]) => re.test(quiz.title || ""));
  return hit ? hit[1] : null;
}

module.exports = {
  BASICS, COURSES, SECTIONS_PER_LESSON, LESSONS_PER_UNIT, EXAM_SIZE, PASS_RATIO,
  LEVEL_RANK, LEVEL_TITLE, quizCourse,
};
