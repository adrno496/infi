// Registre de contenu : agrège les "packs" (fiches, QCM, flashcards, cas) et expose des requêtes.
// Les packs sont chargés dynamiquement ; un nouveau pack = une ligne dans PACK_FILES.
import { ueById } from "./referentiel.js";

// Manifeste des packs. La génération de masse ajoute des entrées ici. -- AUTO-PACKS --
const PACK_FILES = [
  "transversal",
  "cas-cliniques",
  "ue_1_1", "ue_1_2", "ue_1_3",
  "ue_2_1", "ue_2_2", "ue_2_3", "ue_2_4", "ue_2_5", "ue_2_6", "ue_2_7", "ue_2_8", "ue_2_9", "ue_2_10", "ue_2_11",
  "ue_3_1", "ue_3_2", "ue_3_3", "ue_3_4", "ue_3_5",
  "ue_4_1", "ue_4_2", "ue_4_3", "ue_4_4", "ue_4_5", "ue_4_6", "ue_4_7", "ue_4_8",
  "ue_5_2", "ue_5_5", "ue_5_6",
  "ue_6_2",
];

let _cache = null;

export async function loadContent() {
  if (_cache) return _cache;
  const mods = await Promise.all(
    PACK_FILES.map((name) =>
      import(`./packs/${name}.js`).catch((e) => {
        console.warn("[content] pack indisponible:", name, e?.message || e);
        return {};
      })
    )
  );
  const fiches = [], qcm = [], flashcards = [], cas = [];
  for (const m of mods) {
    if (Array.isArray(m.fiches)) fiches.push(...m.fiches);
    if (Array.isArray(m.qcm)) qcm.push(...m.qcm);
    if (Array.isArray(m.flashcards)) flashcards.push(...m.flashcards);
    if (Array.isArray(m.cas)) cas.push(...m.cas);
  }
  fiches.forEach((f, i) => { if (!f.id) f.id = "f_" + i; });
  qcm.forEach((q, i) => { if (!q.id) q.id = "q_" + i; });
  flashcards.forEach((c, i) => { if (!c.id) c.id = "fc_" + i; });
  cas.forEach((c, i) => { if (!c.id) c.id = "cas_" + i; });
  _cache = { fiches, qcm, flashcards, cas };
  return _cache;
}

function data() {
  if (!_cache) return { fiches: [], qcm: [], flashcards: [], cas: [] };
  return _cache;
}

export const allFiches = () => data().fiches;
export const allQcm = () => data().qcm;
export const allFlashcards = () => data().flashcards;
export const allCas = () => data().cas;

export const fichesForUe = (ueId) => data().fiches.filter((f) => f.ueId === ueId);
export const qcmForUe = (ueId) => data().qcm.filter((q) => q.ueId === ueId);
export const flashcardsForUe = (ueId) => data().flashcards.filter((c) => c.ueId === ueId);

function inSemestre(ueId, n) { const u = ueById(ueId); return u && u.sem.includes(n); }
export const qcmForSemestre = (n) => data().qcm.filter((q) => inSemestre(q.ueId, n));
export const flashcardsForSemestre = (n) => data().flashcards.filter((c) => inSemestre(c.ueId, n));

export function ueStats(ueId) {
  return {
    fiches: fichesForUe(ueId).length,
    qcm: qcmForUe(ueId).length,
    flashcards: flashcardsForUe(ueId).length,
  };
}

export function searchFiches(query) {
  const q = (query || "").trim().toLowerCase();
  if (q.length < 2) return [];
  return data().fiches.filter((f) => {
    const hay = (f.titre + " " + (f.resume || "") + " " + (f.tags || []).join(" ") + " " + (f.ueId || "")).toLowerCase();
    return hay.includes(q);
  }).slice(0, 40);
}

export function ficheById(id) { return data().fiches.find((f) => f.id === id) || null; }

// Tire N QCM aléatoires d'un sous-ensemble (mode entraînement / examen).
export function pickQcm(pool, n) {
  const arr = [...pool];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr.slice(0, n);
}
