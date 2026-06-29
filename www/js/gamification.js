// Gamification : XP, succès (badges), quêtes hebdomadaires.
import { Storage, todayStr } from "./storage.js";

export const XP = {
  qcmCorrect: 5,
  qcmWrong: 1,
  cardReview: 2,
  ficheRead: 8,
  casCompleted: 25,
  calcul: 6,
  examFinished: 30,
  tfeStep: 40,
};

export const ACHIEVEMENTS = [
  { id: "first_qcm",   icon: "🎯", title: "Premier QCM",        desc: "Répondre à un premier QCM.",            check: (p) => p.qcmAnswered >= 1 },
  { id: "qcm_50",      icon: "📝", title: "Sérieux·se",         desc: "50 QCM répondus.",                      check: (p) => p.qcmAnswered >= 50 },
  { id: "qcm_500",     icon: "🏅", title: "Machine à QCM",      desc: "500 QCM répondus.",                     check: (p) => p.qcmAnswered >= 500 },
  { id: "sharp_100",   icon: "✅", title: "Œil de lynx",        desc: "100 bonnes réponses.",                  check: (p) => p.qcmCorrect >= 100 },
  { id: "cards_100",   icon: "🧠", title: "Mémoire vive",       desc: "100 cartes révisées.",                  check: (p) => p.cardsReviewed >= 100 },
  { id: "cards_1000",  icon: "🗂️", title: "Révision longue durée", desc: "1000 cartes révisées.",             check: (p) => p.cardsReviewed >= 1000 },
  { id: "streak_7",    icon: "🔥", title: "Semaine pleine",     desc: "7 jours d'affilée.",                    check: (p) => (p.longestStreak || 0) >= 7 },
  { id: "streak_30",   icon: "⚡", title: "Un mois de feu",     desc: "30 jours d'affilée.",                   check: (p) => (p.longestStreak || 0) >= 30 },
  { id: "cas_1",       icon: "🩺", title: "Au chevet",          desc: "Premier cas clinique terminé.",         check: (p) => p.casCompleted >= 1 },
  { id: "cas_10",      icon: "🏥", title: "Clinicien·ne",       desc: "10 cas cliniques terminés.",            check: (p) => p.casCompleted >= 10 },
  { id: "calc_50",     icon: "💉", title: "As des calculs",     desc: "50 calculs de doses réussis.",          check: (p) => p.calculsDone >= 50 },
  { id: "exam_1",      icon: "⏱️", title: "Mode examen",        desc: "Terminer un examen blanc.",             check: (p) => p.examsTaken >= 1 },
  { id: "fiches_25",   icon: "📚", title: "Studieux·se",        desc: "25 fiches lues.",                       check: (p) => p.fichesRead >= 25 },
  { id: "fiches_100",  icon: "🎓", title: "Tête bien faite",    desc: "100 fiches lues.",                      check: (p) => p.fichesRead >= 100 },
  { id: "tfe_start",   icon: "📖", title: "Cap sur le mémoire", desc: "Commencer le module TFE.",              check: () => { const t = Storage.getTfe(); return Object.keys(t.steps || {}).length >= 1; } },
  { id: "tfe_half",    icon: "✍️", title: "Mémoire en marche",  desc: "Remplir 5 étapes du TFE.",              check: () => { const t = Storage.getTfe(); return Object.values(t.steps || {}).filter(Boolean).length >= 5; } },
];

// Évalue les succès et débloque les nouveaux. Retourne la liste des nouveaux succès.
export function checkAchievements() {
  const p = Storage.getProfile();
  const unlocked = [];
  for (const a of ACHIEVEMENTS) {
    if (Storage.hasAchievement(a.id)) continue;
    let ok = false;
    try { ok = a.check(p); } catch { ok = false; }
    if (ok && Storage.addAchievement(a.id)) unlocked.push(a);
  }
  return unlocked;
}

// ---------- Quêtes hebdomadaires ----------
function weekId() {
  const d = new Date();
  const onejan = new Date(d.getFullYear(), 0, 1);
  const week = Math.ceil((((d - onejan) / 86400000) + onejan.getDay() + 1) / 7);
  return `${d.getFullYear()}-S${week}`;
}

const QUEST_POOL = [
  { id: "q_qcm",   icon: "🎯", label: "Répondre à 30 QCM",       target: 30, field: "qcmAnswered" },
  { id: "q_cards", icon: "🧠", label: "Réviser 40 cartes",       target: 40, field: "cardsReviewed" },
  { id: "q_fiche", icon: "📚", label: "Lire 5 fiches",            target: 5,  field: "fichesRead" },
  { id: "q_cas",   icon: "🩺", label: "Terminer 2 cas cliniques", target: 2, field: "casCompleted" },
  { id: "q_calc",  icon: "💉", label: "Réussir 10 calculs",       target: 10, field: "calculsDone" },
];

// Retourne les quêtes de la semaine avec leur avancement (snapshot pris en début de semaine).
export function getWeeklyQuests() {
  let q = Storage.getKey("quests");
  const wid = weekId();
  if (!q || q.weekId !== wid) {
    const p = Storage.getProfile();
    const baseline = {};
    for (const item of QUEST_POOL) baseline[item.field] = p[item.field] || 0;
    q = { weekId: wid, baseline, claimed: [] };
    Storage.setKey("quests", q);
  }
  const p = Storage.getProfile();
  return QUEST_POOL.map((item) => {
    const done = Math.max(0, (p[item.field] || 0) - (q.baseline[item.field] || 0));
    return { ...item, done: Math.min(done, item.target), complete: done >= item.target };
  });
}
