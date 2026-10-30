/**
 * TO'LIQ EKRAN QATLAMLAR — dars, kurs darsi, vaziyat, imtihon, sandiq va tariflar.
 * Ochiq turganda pastki menyu yashiriladi (MiniApp.jsx).
 */
import React, { lazy } from "react";
import m from "./Mini.module.css";

const LessonPlayer = lazy(() => import("./LessonPlayer"));
const CourseLessonPlayer = lazy(() => import("./CourseLessonPlayer"));
const SituationPlayer = lazy(() => import("./SituationPlayer"));
const ExamPlayer = lazy(() => import("./ExamPlayer"));
const PlansSheet = lazy(() => import("./PlansSheet"));
const ChestOpen = lazy(() => import("./ChestOpen"));

export default function Overlay({ overlay, ctx }) {
  const { kind, id } = overlay;
  if (kind === "lesson") return <LessonPlayer key={id} id={id} ctx={ctx} />;
  if (kind === "course") return <CourseLessonPlayer key={id} id={id} ctx={ctx} />;
  if (kind === "situation") return <SituationPlayer key={id} id={id} ctx={ctx} />;
  if (kind === "exam") return <ExamPlayer key={id} unit={id} ctx={ctx} />;
  if (kind === "chest") return <ChestOpen key={id} unit={id} ctx={ctx} />;
  if (kind === "plans") return <main className={m.main}><PlansSheet ctx={ctx} /></main>;
  return null;
}
