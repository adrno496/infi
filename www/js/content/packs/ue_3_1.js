// UE 3.1 — Raisonnement et démarche clinique infirmière. Pack seed.
export const fiches = [
  {
    id: "f_31_raisonnement", ueId: "3.1", type: "cours",
    titre: "Le raisonnement clinique infirmier",
    resume: "Du recueil d'indices au jugement clinique : hypothético-déductif et reconnaissance de patterns.",
    tags: ["raisonnement clinique", "jugement clinique", "hypothèses"],
    html: `
      <p>Le raisonnement clinique est le processus cognitif qui permet de passer des <strong>données</strong> à une <strong>décision de soin</strong>.</p>
      <h3>Deux grands modes</h3>
      <ul>
        <li><strong>Hypothético-déductif</strong> : on émet des hypothèses, on recueille des indices pour les confirmer/infirmer (utile face à une situation nouvelle).</li>
        <li><strong>Reconnaissance de patterns</strong> : la situation rappelle un cas connu (rapide, mais à risque de biais chez le débutant).</li>
      </ul>
      <h3>Modèle de Tanner (« Thinking like a nurse »)</h3>
      <p>Remarquer (noticing) → Interpréter (interpreting) → Répondre (responding) → Réfléchir (reflecting).</p>
      <div class="callout"><div class="callout-t">Conseil ESI</div>Verbaliser son raisonnement à voix haute en stage aide le formateur à évaluer la <span class="key" data-term="démarche clinique">démarche clinique</span> et à corriger les biais.</div>
    `,
    refs: ["UE 3.1 ; C. Tanner, 2006"],
  },
];
export const qcm = [
  { ueId: "3.1", q: "Le raisonnement « hypothético-déductif » consiste à :", options: ["Reconnaître une situation déjà vue", "Émettre des hypothèses puis chercher des indices pour les tester", "Appliquer un protocole sans réfléchir", "Demander systématiquement au médecin"], correct: 1, explication: "On formule des hypothèses diagnostiques que l'on confronte aux données recueillies.", ref: "UE 3.1", diff: 2 },
  { ueId: "3.1", q: "Dans le modèle de Tanner, la 1ʳᵉ étape est :", options: ["Réfléchir", "Répondre", "Remarquer (noticing)", "Évaluer"], correct: 2, explication: "Noticing → Interpreting → Responding → Reflecting.", ref: "UE 3.1", diff: 2 },
  { ueId: "3.1", q: "Une donnée « objective » est par exemple :", options: ["« J'ai mal au ventre »", "Une TA à 90/55 mmHg mesurée", "« Je me sens fatigué »", "« J'ai peur de l'opération »"], correct: 1, explication: "Objectif = mesurable/observable ; subjectif = exprimé/ressenti par le patient.", ref: "UE 3.1", diff: 1 },
];
export const flashcards = [
  { ueId: "3.1", recto: "Les 4 étapes du modèle de Tanner ?", verso: "Remarquer → Interpréter → Répondre → Réfléchir." },
  { ueId: "3.1", recto: "Donnée objective vs subjective ?", verso: "Objective = mesurée/observée ; subjective = exprimée par le patient." },
];
