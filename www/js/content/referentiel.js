// Référentiel de formation infirmière (arrêté du 31 juillet 2009).
// Structure officielle : 10 compétences, 6 champs d'UE répartis sur 6 semestres, 4 typologies de stage.
// Ces données pilotent la navigation (Année → Semestre → UE).

export const COMPETENCES = [
  { n: 1, titre: "Évaluer une situation clinique et établir un diagnostic dans le domaine infirmier" },
  { n: 2, titre: "Concevoir et conduire un projet de soins infirmiers" },
  { n: 3, titre: "Accompagner une personne dans la réalisation de ses soins quotidiens" },
  { n: 4, titre: "Mettre en œuvre des actions à visée diagnostique et thérapeutique" },
  { n: 5, titre: "Initier et mettre en œuvre des soins éducatifs et préventifs" },
  { n: 6, titre: "Communiquer et conduire une relation dans un contexte de soins" },
  { n: 7, titre: "Analyser la qualité des soins et améliorer sa pratique professionnelle" },
  { n: 8, titre: "Rechercher et traiter des données professionnelles et scientifiques" },
  { n: 9, titre: "Organiser et coordonner des interventions soignantes" },
  { n: 10, titre: "Informer et former des professionnels et des personnes en formation" },
];

export const CHAMPS = {
  1: { titre: "Sciences humaines, sociales et droit", couleur: "ue-1" },
  2: { titre: "Sciences biologiques et médicales", couleur: "ue-2" },
  3: { titre: "Sciences et techniques infirmières — fondements et méthodes", couleur: "ue-3" },
  4: { titre: "Sciences et techniques infirmières — interventions", couleur: "ue-4" },
  5: { titre: "Intégration des savoirs et posture professionnelle", couleur: "ue-5" },
  6: { titre: "Méthodes de travail", couleur: "ue-6" },
};

// id : identifiant pack (ex. "2.11" → pack "ue_2_11"). sem : semestres où l'UE est enseignée.
export const UES = [
  // Champ 1
  { id: "1.1", champ: 1, titre: "Psychologie, sociologie, anthropologie", sem: [1, 2], ects: 4, comp: [6] },
  { id: "1.2", champ: 1, titre: "Santé publique et économie de la santé", sem: [2, 3], ects: 3, comp: [5] },
  { id: "1.3", champ: 1, titre: "Législation, éthique, déontologie", sem: [1, 4], ects: 3, comp: [7] },
  // Champ 2
  { id: "2.1", champ: 2, titre: "Biologie fondamentale", sem: [1], ects: 2, comp: [4] },
  { id: "2.2", champ: 2, titre: "Cycles de la vie et grandes fonctions", sem: [1], ects: 4, comp: [4] },
  { id: "2.3", champ: 2, titre: "Santé, maladie, handicap, accidents de la vie", sem: [2], ects: 3, comp: [1] },
  { id: "2.4", champ: 2, titre: "Processus traumatiques", sem: [1], ects: 2, comp: [4] },
  { id: "2.5", champ: 2, titre: "Processus inflammatoires et infectieux", sem: [3], ects: 2, comp: [4] },
  { id: "2.6", champ: 2, titre: "Processus psychopathologiques", sem: [2, 5], ects: 3, comp: [4] },
  { id: "2.7", champ: 2, titre: "Défaillances organiques et processus dégénératifs", sem: [4], ects: 3, comp: [4] },
  { id: "2.8", champ: 2, titre: "Processus obstructifs", sem: [3], ects: 2, comp: [4] },
  { id: "2.9", champ: 2, titre: "Processus tumoraux", sem: [5], ects: 2, comp: [4] },
  { id: "2.10", champ: 2, titre: "Infectiologie, hygiène", sem: [1], ects: 2, comp: [4] },
  { id: "2.11", champ: 2, titre: "Pharmacologie et thérapeutiques", sem: [1, 3, 5], ects: 3, comp: [4] },
  // Champ 3
  { id: "3.1", champ: 3, titre: "Raisonnement et démarche clinique infirmière", sem: [1, 2], ects: 4, comp: [1] },
  { id: "3.2", champ: 3, titre: "Projet de soins infirmiers", sem: [2, 3], ects: 3, comp: [2] },
  { id: "3.3", champ: 3, titre: "Rôles infirmiers, organisation du travail et interprofessionnalité", sem: [3, 5], ects: 3, comp: [9] },
  { id: "3.4", champ: 3, titre: "Initiation à la démarche de recherche", sem: [4, 6], ects: 5, comp: [8] },
  { id: "3.5", champ: 3, titre: "Encadrement des professionnels de soins", sem: [5], ects: 2, comp: [10] },
  // Champ 4
  { id: "4.1", champ: 4, titre: "Soins de confort et de bien-être", sem: [1], ects: 2, comp: [3] },
  { id: "4.2", champ: 4, titre: "Soins relationnels", sem: [2, 5], ects: 2, comp: [6] },
  { id: "4.3", champ: 4, titre: "Soins d'urgence", sem: [2, 4], ects: 1, comp: [4] },
  { id: "4.4", champ: 4, titre: "Thérapeutiques et contribution au diagnostic médical", sem: [2, 4, 5], ects: 4, comp: [4] },
  { id: "4.5", champ: 4, titre: "Soins infirmiers et gestion des risques", sem: [4], ects: 2, comp: [7] },
  { id: "4.6", champ: 4, titre: "Soins éducatifs et préventifs", sem: [3, 4], ects: 2, comp: [5] },
  { id: "4.7", champ: 4, titre: "Soins palliatifs et de fin de vie", sem: [5], ects: 2, comp: [4] },
  { id: "4.8", champ: 4, titre: "Qualité des soins, évaluation des pratiques", sem: [6], ects: 2, comp: [7] },
  // Champ 5 (intégration)
  { id: "5.1", champ: 5, titre: "Accompagnement dans la réalisation des soins quotidiens", sem: [1], ects: 2, comp: [3] },
  { id: "5.2", champ: 5, titre: "Évaluation d'une situation clinique", sem: [2], ects: 3, comp: [1] },
  { id: "5.3", champ: 5, titre: "Communication et conduite de projet", sem: [3], ects: 4, comp: [2, 6] },
  { id: "5.4", champ: 5, titre: "Soins éducatifs et formation des professionnels et stagiaires", sem: [4], ects: 4, comp: [5, 10] },
  { id: "5.5", champ: 5, titre: "Mise en œuvre des thérapeutiques et coordination des soins", sem: [5], ects: 4, comp: [4, 9] },
  { id: "5.6", champ: 5, titre: "Analyse de la qualité et traitement des données scientifiques", sem: [6], ects: 6, comp: [7, 8] },
  // Champ 6 (méthodes)
  { id: "6.1", champ: 6, titre: "Méthodes de travail et TIC", sem: [1, 2], ects: 2, comp: [] },
  { id: "6.2", champ: 6, titre: "Anglais", sem: [1, 2, 3, 4, 5, 6], ects: 1, comp: [] },
];

export const SEMESTRES = [
  { n: 1, annee: 1, label: "Semestre 1" },
  { n: 2, annee: 1, label: "Semestre 2" },
  { n: 3, annee: 2, label: "Semestre 3" },
  { n: 4, annee: 2, label: "Semestre 4" },
  { n: 5, annee: 3, label: "Semestre 5" },
  { n: 6, annee: 3, label: "Semestre 6" },
];

export const ANNEES = [
  { n: 1, label: "1ʳᵉ année", sub: "Semestres 1 & 2 — les fondamentaux", sems: [1, 2], icon: "📘" },
  { n: 2, label: "2ᵉ année", sub: "Semestres 3 & 4 — les processus", sems: [3, 4], icon: "📗" },
  { n: 3, label: "3ᵉ année", sub: "Semestres 5 & 6 — consolidation & mémoire", sems: [5, 6], icon: "📙" },
];

export const STAGES = [
  { id: "scd", titre: "Soins de courte durée", desc: "Médecine, chirurgie, pédiatrie, urgences, réanimation…", comp: [1, 3, 4, 6, 9], icon: "🏥" },
  { id: "smp", titre: "Santé mentale et psychiatrie", desc: "Hôpital psy, CMP, unités ouvertes/fermées.", comp: [1, 2, 5, 6], icon: "🧠" },
  { id: "sld", titre: "Soins de longue durée et SSR", desc: "EHPAD, USLD, gériatrie, réadaptation.", comp: [1, 2, 3, 4, 7], icon: "🦽" },
  { id: "lv", titre: "Soins individuels/collectifs sur lieux de vie", desc: "Domicile (HAD/SSIAD), scolaire, travail, prison.", comp: [2, 5, 6, 8, 9], icon: "🏡" },
];

export function ueById(id) { return UES.find((u) => u.id === id) || null; }
export function uesBySemestre(n) { return UES.filter((u) => u.sem.includes(n)); }
export function packId(ueId) { return "ue_" + ueId.replace(/\./g, "_"); }
export function champCouleur(champ) { return CHAMPS[champ]?.couleur || "ue-3"; }
