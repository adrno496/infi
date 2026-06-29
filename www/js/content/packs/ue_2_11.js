// UE 2.11 — Pharmacologie et thérapeutiques. Pack seed.
export const fiches = [
  {
    id: "f_211_pk", ueId: "2.11", type: "pharmaco",
    titre: "Pharmacocinétique : ADME",
    resume: "Ce que l'organisme fait au médicament : Absorption, Distribution, Métabolisme, Élimination.",
    tags: ["pharmacocinétique", "ADME", "demi-vie"],
    html: `
      <h3>Les 4 étapes — ADME</h3>
      <ul>
        <li><strong>A</strong>bsorption : passage vers la circulation (dépend de la voie). <span class="key" data-term="biodisponibilité">Biodisponibilité</span> = 100 % en IV.</li>
        <li><strong>D</strong>istribution : diffusion vers les tissus (liaison aux protéines plasmatiques).</li>
        <li><strong>M</strong>étabolisme : surtout hépatique (cytochromes P450).</li>
        <li><strong>É</strong>limination : surtout rénale (adapter la dose si insuffisance rénale).</li>
      </ul>
      <div class="callout"><div class="callout-t">Demi-vie (t½)</div>Temps pour que la concentration plasmatique diminue de moitié : conditionne le rythme des prises.</div>
    `,
    refs: ["UE 2.11"],
  },
  {
    id: "f_211_anticoag", ueId: "2.11", type: "pharmaco",
    titre: "Anticoagulants : surveillance infirmière",
    resume: "HBPM, AVK, AOD : ce qu'il faut surveiller.",
    tags: ["anticoagulants", "HBPM", "AVK", "INR", "surveillance"],
    html: `
      <table class="tbl">
        <tr><th>Classe</th><th>Exemple</th><th>Surveillance</th></tr>
        <tr><td>AVK</td><td>Fluindione, warfarine</td><td><strong>INR</strong> (cible souvent 2–3) ; risque hémorragique</td></tr>
        <tr><td>HBPM</td><td>Enoxaparine</td><td>Plaquettes (TIH), anti-Xa si besoin ; fonction rénale</td></tr>
        <tr><td>AOD</td><td>Apixaban, rivaroxaban</td><td>Pas de surveillance biologique de routine ; fonction rénale</td></tr>
      </table>
      <div class="callout danger"><div class="callout-t">Signes d'alerte</div>Saignements (gencives, urines, selles noires), hématomes : prévenir le médecin. Surdosage AVK → INR élevé.</div>
    `,
    refs: ["UE 2.11"],
  },
];
export const qcm = [
  { ueId: "2.11", q: "Dans « ADME », le « M » correspond à :", options: ["Mesure", "Métabolisme", "Médicament", "Mobilisation"], correct: 1, explication: "Absorption, Distribution, Métabolisme (hépatique), Élimination (rénale).", ref: "UE 2.11", diff: 1 },
  { ueId: "2.11", q: "La surveillance biologique de référence d'un traitement par AVK est :", options: ["La glycémie", "L'INR", "Le ionogramme", "La CRP"], correct: 1, explication: "L'INR guide l'adaptation des AVK (cible fréquente 2–3).", ref: "UE 2.11", diff: 1 },
  { ueId: "2.11", q: "Quelle voie offre une biodisponibilité de 100 % ?", options: ["Per os", "Intraveineuse", "Sous-cutanée", "Rectale"], correct: 1, explication: "En IV, la totalité de la dose atteint la circulation systémique.", ref: "UE 2.11", diff: 2 },
  { ueId: "2.11", q: "Sous HBPM, quel élément sanguin faut-il surveiller pour dépister une TIH ?", options: ["Les globules rouges", "Les plaquettes", "Les leucocytes", "Le fibrinogène"], correct: 1, explication: "La thrombopénie induite par l'héparine (TIH) impose une surveillance des plaquettes.", ref: "UE 2.11", diff: 2 },
];
export const flashcards = [
  { ueId: "2.11", recto: "Que signifie ADME ?", verso: "Absorption, Distribution, Métabolisme, Élimination." },
  { ueId: "2.11", recto: "Surveillance d'un AVK ?", verso: "INR (cible souvent 2–3) + signes hémorragiques." },
  { ueId: "2.11", recto: "Risque à surveiller sous HBPM ?", verso: "TIH → surveillance des plaquettes ; fonction rénale." },
  { ueId: "2.11", recto: "Définition de la demi-vie ?", verso: "Temps pour que la concentration plasmatique diminue de moitié." },
];
