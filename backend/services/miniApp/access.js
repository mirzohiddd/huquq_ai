"use strict";
/**
 * So'rov konteksti: foydalanuvchi progressi, tarifi va kurslar holati —
 * barcha mini marshrutlar uchun bitta joyda (tarif qoidasi takrorlanmasin).
 * Tarif saytdagi bilan BIR XIL manbadan (`planOfUser`) — sotib olingan
 * tarif saytda ham, mini ilovada ham bir zumda amal qiladi.
 */
const store = require("./store");
const course = require("./course");
const { planOfUser } = require("../../middleware/planAccess");
const { isPaidTier, getPlanConfig } = require("../../config/plans");

async function accessOf(userId) {
  const [doc, plan, s] = await Promise.all([store.getDoc(userId), planOfUser(userId), course.ready()]);
  return { doc, s, tier: plan.tier, paid: isPaidTier(plan.tier), planLabel: getPlanConfig(plan.tier).label };
}

/** Tarif talab qilinadigan javob — mini ilova «Tariflar» oynasini ochadi. */
const planLocked = (res) => res.status(403).json({ locked: true, plan: true, error: "Bu bo'lim tarif bilan ochiladi" });

module.exports = { accessOf, planLocked };
