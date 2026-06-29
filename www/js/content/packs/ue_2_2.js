// UE 2.2 — Cycles de la vie et grandes fonctions (anatomie-physiologie). Pack seed.
export const fiches = [
  {
    id: "f_22_cardio", ueId: "2.2", type: "anatomie",
    titre: "Système cardiovasculaire — l'essentiel",
    resume: "Anatomie du cœur, circulation, révolution cardiaque et régulation.",
    tags: ["cœur", "circulation", "cardiovasculaire", "anatomie"],
    html: `
      <h3>Anatomie</h3>
      <p>Le cœur est une pompe à 4 cavités : 2 oreillettes (atria) et 2 ventricules, séparées par les valves <strong>auriculo-ventriculaires</strong> (tricuspide à droite, mitrale à gauche) et les valves <strong>sigmoïdes</strong> (pulmonaire, aortique).</p>
      <h3>Les deux circulations</h3>
      <ul>
        <li><strong>Petite circulation</strong> (pulmonaire) : VD → artère pulmonaire → poumons → veines pulmonaires → OG.</li>
        <li><strong>Grande circulation</strong> (systémique) : VG → aorte → organes → veines caves → OD.</li>
      </ul>
      <div class="callout"><div class="callout-t">À retenir</div>Les <strong>artères</strong> partent du cœur (sang oxygéné… sauf l'artère pulmonaire). Les <strong>veines</strong> y reviennent (sang désaturé… sauf les veines pulmonaires).</div>
      <h3>Révolution cardiaque</h3>
      <p><span class="key" data-term="systole">Systole</span> (contraction/éjection) puis <span class="key" data-term="diastole">diastole</span> (relâchement/remplissage). Débit cardiaque = FC × volume d'éjection systolique.</p>
    `,
    refs: ["UE 2.2"],
  },
  {
    id: "f_22_respi", ueId: "2.2", type: "anatomie",
    titre: "Système respiratoire — l'essentiel",
    resume: "Voies aériennes, échanges gazeux et mécanique ventilatoire.",
    tags: ["poumon", "respiration", "ventilation", "hématose"],
    html: `
      <h3>Voies aériennes</h3>
      <p>Supérieures (nez, pharynx, larynx) et inférieures (trachée → bronches → bronchioles → alvéoles).</p>
      <h3>Hématose</h3>
      <p>Échanges gazeux alvéolo-capillaires : O₂ entre dans le sang, CO₂ en sort. La <strong>ventilation</strong> (mécanique) amène l'air ; la <strong>diffusion</strong> assure l'échange.</p>
      <div class="callout warn"><div class="callout-t">Clinique</div>Une <span class="key" data-term="dyspnée">dyspnée</span> avec tirage, balancement thoraco-abdominal ou cyanose est un signe de détresse respiratoire : alerte.</div>
    `,
    refs: ["UE 2.2"],
  },
];
export const qcm = [
  { ueId: "2.2", q: "Quelle valve sépare l'oreillette gauche du ventricule gauche ?", options: ["Tricuspide", "Mitrale", "Aortique", "Pulmonaire"], correct: 1, explication: "La valve mitrale (bicuspide) est à gauche ; la tricuspide est à droite.", ref: "UE 2.2", diff: 1 },
  { ueId: "2.2", q: "Les veines pulmonaires transportent un sang :", options: ["Désaturé en O₂", "Riche en O₂ vers l'oreillette gauche", "Vers les poumons", "Veineux vers l'oreillette droite"], correct: 1, explication: "Exception : les veines pulmonaires ramènent du sang oxygéné des poumons vers l'OG.", ref: "UE 2.2", diff: 2 },
  { ueId: "2.2", q: "Le débit cardiaque est égal à :", options: ["FC × volume d'éjection systolique", "TA × FC", "FR × volume courant", "Volume sanguin / temps"], correct: 0, explication: "Dc = FC × VES (≈ 5 L/min au repos).", ref: "UE 2.2", diff: 2 },
  { ueId: "2.2", q: "L'hématose désigne :", options: ["La coagulation", "Les échanges gazeux alvéolo-capillaires", "La fabrication des globules rouges", "La filtration rénale"], correct: 1, explication: "L'hématose = transformation du sang veineux en sang artériel au niveau pulmonaire.", ref: "UE 2.2", diff: 2 },
];
export const flashcards = [
  { ueId: "2.2", recto: "Valve auriculo-ventriculaire gauche ?", verso: "La valve mitrale (bicuspide)." },
  { ueId: "2.2", recto: "Trajet de la petite circulation ?", verso: "VD → artère pulmonaire → poumons → veines pulmonaires → OG." },
  { ueId: "2.2", recto: "Formule du débit cardiaque ?", verso: "Dc = Fréquence cardiaque × Volume d'éjection systolique." },
  { ueId: "2.2", recto: "Systole vs diastole ?", verso: "Systole = contraction/éjection ; diastole = relâchement/remplissage." },
];
