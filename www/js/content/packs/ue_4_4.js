// UE 4.4 — Thérapeutiques et contribution au diagnostic médical. Pack seed.
export const fiches = [
  {
    id: "f_44_voies", ueId: "4.4", type: "cours",
    titre: "Voies d'administration et règles des « 5 B »",
    resume: "Sécuriser l'administration médicamenteuse : voies, vérifications, traçabilité.",
    tags: ["administration", "médicament", "voies", "5B", "sécurité"],
    html: `
      <h3>Les 5 B (sécurité du circuit du médicament)</h3>
      <ul>
        <li><strong>Bon</strong> patient</li>
        <li><strong>Bon</strong> médicament</li>
        <li><strong>Bonne</strong> dose</li>
        <li><strong>Bonne</strong> voie</li>
        <li><strong>Bon</strong> moment</li>
      </ul>
      <p>On y ajoute souvent : bonne information, bonne traçabilité, bon contrôle de péremption.</p>
      <h3>Principales voies</h3>
      <table class="tbl">
        <tr><th>Voie</th><th>Délai d'action</th><th>Remarque</th></tr>
        <tr><td>IV</td><td>Immédiat</td><td>Action rapide, urgences ; asepsie ++</td></tr>
        <tr><td>IM</td><td>~10–20 min</td><td>Volume limité ; sites : deltoïde, fessier (quadrant supéro-externe)</td></tr>
        <tr><td>SC</td><td>~20–30 min</td><td>Insuline, HBPM ; angle 45–90°</td></tr>
        <tr><td>Per os</td><td>30–60 min</td><td>Voie privilégiée si possible</td></tr>
      </table>
      <div class="callout danger"><div class="callout-t">Vigilance</div>Ne jamais recapuchonner une aiguille. Éliminer immédiatement dans le collecteur OPCT (objets piquants/coupants/tranchants).</div>
    `,
    refs: ["UE 4.4"],
  },
];
export const qcm = [
  { ueId: "4.4", q: "Parmi les « 5 B », lequel n'en fait PAS partie ?", options: ["Bon patient", "Bonne dose", "Bonne humeur", "Bonne voie"], correct: 2, explication: "Les 5 B : bon patient, bon médicament, bonne dose, bonne voie, bon moment.", ref: "UE 4.4", diff: 1 },
  { ueId: "4.4", q: "L'injection d'insuline se fait par voie :", options: ["Intraveineuse", "Intramusculaire", "Sous-cutanée", "Intradermique"], correct: 2, explication: "L'insuline (et les HBPM) s'administrent en sous-cutané.", ref: "UE 4.4", diff: 1 },
  { ueId: "4.4", q: "Quelle voie a le délai d'action le plus rapide ?", options: ["Per os", "Sous-cutanée", "Intraveineuse", "Intramusculaire"], correct: 2, explication: "La voie IV a un effet quasi immédiat (biodisponibilité 100 %).", ref: "UE 4.4", diff: 1 },
  { ueId: "4.4", q: "Après une injection, l'aiguille doit être :", options: ["Recapuchonnée puis jetée", "Éliminée immédiatement sans recapuchonnage dans le collecteur OPCT", "Rincée et réutilisée", "Posée sur le plateau"], correct: 1, explication: "Prévention des AES : pas de recapuchonnage, élimination immédiate au collecteur.", ref: "UE 4.4", diff: 2 },
];
export const flashcards = [
  { ueId: "4.4", recto: "Les 5 B de l'administration ?", verso: "Bon patient, bon médicament, bonne dose, bonne voie, bon moment." },
  { ueId: "4.4", recto: "Voie d'administration de l'insuline ?", verso: "Sous-cutanée (SC)." },
  { ueId: "4.4", recto: "Conduite avec l'aiguille après injection ?", verso: "Pas de recapuchonnage ; collecteur OPCT immédiatement." },
];
