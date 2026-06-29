// Registre de contenu : agrège les "packs" (fiches, QCM, flashcards, cas) et expose des requêtes.
// Les packs sont chargés dynamiquement ; un nouveau pack = une ligne dans PACK_FILES.
import { ueById } from "./referentiel.js";

// Manifeste des packs. La génération de masse ajoute des entrées ici. -- AUTO-PACKS --
const PACK_FILES = [
  "transversal",
  "cas-cliniques",
  "anatomie_plus",
  "gestes_ide_plus",
  "methodo",
  "patho_plus",
  "pharmaco_plus",
  "ue_1_1",
  "ue_1_1_cours",
  "ue_1_1_plus",
  "ue_1_2",
  "ue_1_2_cours",
  "ue_1_2_plus",
  "ue_1_3",
  "ue_1_3_cours",
  "ue_1_3_plus",
  "ue_2_1",
  "ue_2_1_cours",
  "ue_2_1_plus",
  "ue_2_2",
  "ue_2_2_cours",
  "ue_2_2_exam",
  "ue_2_2_plus",
  "ue_2_3",
  "ue_2_3_cours",
  "ue_2_3_plus",
  "ue_2_4",
  "ue_2_4_cours",
  "ue_2_4_plus",
  "ue_2_5",
  "ue_2_5_cours",
  "ue_2_5_exam",
  "ue_2_5_plus",
  "ue_2_6",
  "ue_2_6_cours",
  "ue_2_6_exam",
  "ue_2_6_plus",
  "ue_2_7",
  "ue_2_7_cours",
  "ue_2_7_exam",
  "ue_2_7_plus",
  "ue_2_8",
  "ue_2_8_cours",
  "ue_2_8_exam",
  "ue_2_8_plus",
  "ue_2_9",
  "ue_2_9_exam",
  "ue_2_9_plus",
  "ue_2_10",
  "ue_2_10_cours",
  "ue_2_10_plus",
  "ue_2_11",
  "ue_2_11_cours",
  "ue_2_11_exam",
  "ue_3_1",
  "ue_3_1_cours",
  "ue_3_1_exam",
  "ue_3_1_plus",
  "ue_3_2",
  "ue_3_2_cours",
  "ue_3_2_plus",
  "ue_3_3",
  "ue_3_3_cours",
  "ue_3_3_plus",
  "ue_3_4",
  "ue_3_4_cours",
  "ue_3_4_plus",
  "ue_3_5",
  "ue_3_5_cours",
  "ue_4_1",
  "ue_4_1_cours",
  "ue_4_1_plus",
  "ue_4_2",
  "ue_4_2_cours",
  "ue_4_2_plus",
  "ue_4_3",
  "ue_4_3_cours",
  "ue_4_3_exam",
  "ue_4_3_plus",
  "ue_4_4",
  "ue_4_4_cours",
  "ue_4_4_exam",
  "ue_4_4_plus",
  "ue_4_5",
  "ue_4_5_cours",
  "ue_4_5_plus",
  "ue_4_6",
  "ue_4_6_cours",
  "ue_4_6_plus",
  "ue_4_7",
  "ue_4_8",
  "ue_5_2",
  "ue_5_2_cours",
  "ue_5_3_cours",
  "ue_5_5",
  "ue_5_5_cours",
  "ue_5_5_plus",
  "ue_5_6",
  "ue_6_1_cours",
  "ue_6_2",
  "ue_6_2_cours",
  "ue_6_2_plus",
  "urgences_plus",
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
  // IDs stables basés sur le contenu (résistent à l'ajout de packs → SRS et « mes erreurs » préservés).
  const h = (s) => { let x = 5381; const t = String(s || ""); for (let i = 0; i < t.length; i++) x = ((x << 5) + x) ^ t.charCodeAt(i); return (x >>> 0).toString(36); };
  const uniq = (list, makeId) => { const seen = new Set(); for (const it of list) { if (!it.id) { let id = makeId(it); while (seen.has(id)) id += "_b"; it.id = id; } seen.add(it.id); } };
  fiches.forEach((f, i) => { if (!f.id) f.id = "f_" + i; });
  uniq(qcm, (q) => "q_" + (q.ueId || q.mod || "x") + "_" + h(q.q + "||" + (q.options || []).join("|")));
  uniq(flashcards, (c) => "fc_" + (c.mod || c.ueId || "x") + "_" + h(c.recto + "||" + (c.verso || "")));
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
