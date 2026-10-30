"use strict";
/**
 * KURS QURUVCHI — saytdagi darslar (`Lesson`) va testlar (`Quiz`) dan
 * mini app o'quv yo'lini yasaydi. Bazaga hech narsa YOZILMAYDI — admin
 * darsni o'zgartirsa, keyingi yangilanishda yo'l o'z-o'zidan yangilanadi.
 *
 * Metodika (har bir o'yin-dars): Maqsad → [Mavzu kartasi → Tekshiruv
 * savoli] × 3 → Mustahkamlash (saytdagi test savollari) → Hayotda qo'llash.
 * Bo'lim = 5 dars + sandiq + imtihon (80%).
 */
const M = require("./meta");
const Q = require("./questions");

/* Mavzu matnidagi "AMALIY XULOSA: …" — darsning «Hayotda qo'llash» qadami */
const PRACTICAL = /AMALIY XULOSA:?\s*([^\n]+)/i;

function chunk(list, size) {
  const out = [];
  for (let i = 0; i < list.length; i += size) out.push(list.slice(i, i + size));
  // Oxirida bitta mavzu qolsa — oldingi darsga qo'shiladi (1 kartali dars bo'lmasin)
  if (out.length > 1 && out.at(-1).length === 1) out.at(-2).push(...out.pop());
  return out;
}

function sectionOf(s, lesson, i) {
  return {
    uid: `${lesson._id}:${i}`,
    heading: s.heading,
    text: s.text || "",
    example: s.example || "",
    keyPoints: (s.keyPoints || []).filter(Boolean),
    warning: s.warning || "",
    refs: (s.lawRefs || []).filter((r) => r.code && r.article).map((r) => ({ code: r.code, article: r.article })),
    tok: Q.tokensOf(`${s.heading} ${(s.keyPoints || []).join(" ")} ${s.text || ""}`),
  };
}

function lessonsOfCourse(course, siteLessons) {
  const sorted = siteLessons
    .map((l, i) => [l, i])
    .sort((a, b) => (M.LEVEL_RANK[a[0].level] ?? 1) - (M.LEVEL_RANK[b[0].level] ?? 1) || a[1] - b[1])
    .map((p) => p[0]);
  const out = [];
  for (const l of sorted) {
    const secs = (l.sections || []).map((s, i) => sectionOf(s, l, i)).filter((s) => s.heading && (s.text || s.keyPoints.length));
    const parts = chunk(secs, M.SECTIONS_PER_LESSON);
    parts.forEach((cards, k) => {
      const practical = cards.map((c) => c.text.match(PRACTICAL)?.[1]?.trim()).filter(Boolean);
      const last = k === parts.length - 1;
      out.push({
        id: `c-${l._id}-${k}`,
        kind: "course",
        course: course.key,
        source: String(l._id),
        lessonTitle: l.title,
        part: [k + 1, parts.length],
        title: cards[0].heading,
        level: M.LEVEL_RANK[l.level] ?? 1,
        // Birinchi qismda — darsning o'z maqsadlari, keyingilarida — mavzular
        goals: k === 0 && l.objectives?.length ? l.objectives.slice(0, 3) : cards.map((c) => c.heading),
        cards,
        // «Hayotda qo'llash»: mavzudagi amaliy xulosalar; bo'lmasa — ogohlantirishlar
        steps: (practical.length || last ? [...practical, ...(last ? l.practicalSteps || [] : [])] : cards.map((c) => c.warning).filter(Boolean)).slice(0, 5),
        tok: new Set(cards.flatMap((c) => [...c.tok])),
        quiz: [],
      });
    });
  }
  return out;
}

const KINDS = ["case", "point", "warn"];

/** @returns {{ courses, units, lessons: Map, units by key }} */
function build(siteLessons, quizzes) {
  const known = new Set(M.COURSES.map((c) => c.key));
  const byCourse = new Map();
  for (const l of siteLessons) {
    const key = known.has(l.category) ? l.category : "special";
    if (!byCourse.has(key)) byCourse.set(key, []);
    byCourse.get(key).push(l);
  }

  const courses = [];
  const lessons = new Map();
  const all = [];
  for (const c of M.COURSES) {
    const list = lessonsOfCourse(c, byCourse.get(c.key) || []);
    if (!list.length) continue;
    courses.push({ ...c, lessons: list });
    list.forEach((l) => {
      lessons.set(l.id, l);
      all.push(l);
    });
  }

  // Mavzu savollari: har kartaga bittadan (turi navbat bilan)
  const allSecs = all.flatMap((l) => l.cards.map((s) => ({ ...s, course: l.course })));
  /* Ko'p darsda takrorlanadigan umumiy sarlavha ("Ko'p uchraydigan xatolar")
     "Bu holat qaysi mavzuga oid?" savolida javob ham, variant ham bo'lmaydi */
  const seen = new Map();
  allSecs.forEach((x) => seen.set(x.heading.toLowerCase(), (seen.get(x.heading.toLowerCase()) || 0) + 1));
  allSecs.forEach((x) => (x.generic = seen.get(x.heading.toLowerCase()) > 1));
  for (const c of courses) {
    const pools = { course: allSecs.filter((s) => s.course === c.key), other: allSecs.filter((s) => s.course !== c.key) };
    let n = 0;
    for (const l of c.lessons) {
      for (const sec of l.cards) {
        const full = pools.course.find((x) => x.uid === sec.uid) || sec;
        const q = Q.fromSection(full, KINDS[n++ % KINDS.length], pools);
        if (q) l.quiz.push({ ...q, card: l.cards.indexOf(sec), refs: sec.refs });
      }
    }
  }

  // Saytdagi testlar — mazmunan eng yaqin darsga «Mustahkamlash» savoli bo'lib
  for (const quiz of quizzes) {
    const course = courses.find((c) => c.key === M.quizCourse(quiz));
    if (!course) continue;
    for (const item of quiz.questions || []) {
      const q = Q.fromQuiz(item);
      const target = q && Q.bestLesson(item, course.lessons);
      if (target) target.quiz.push({ ...q, card: null, refs: target.cards.flatMap((s) => s.refs).slice(0, 3) });
    }
  }

  const units = [];
  for (const c of courses) {
    c.units = [];
    for (let i = 0; i < c.lessons.length; i += M.LESSONS_PER_UNIT) {
      const ls = c.lessons.slice(i, i + M.LESSONS_PER_UNIT);
      const n = c.units.length + 1;
      const rank = Math.max(...ls.map((l) => l.level));
      const unit = {
        key: `${c.key}-${n}`, course: c.key, n, icon: c.icon,
        title: ls[0].lessonTitle, level: M.LEVEL_TITLE[Math.min(4, rank + Math.floor((n - 1) / 4))],
        lessons: ls.map((l) => l.id),
      };
      ls.forEach((l) => (l.unit = unit.key));
      c.units.push(unit);
      units.push(unit);
    }
    delete c.lessons;
  }
  all.forEach((l) => {
    delete l.tok;
    l.cards.forEach((s) => delete s.tok); // faqat qurish uchun kerak edi
  });
  allSecs.length = 0;
  return { courses, units, unitByKey: new Map(units.map((u) => [u.key, u])), lessons, at: Date.now() };
}

module.exports = { build };
