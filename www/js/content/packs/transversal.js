// Pack TRANSVERSAL — notions clés mobilisées dans toutes les UE et tous les stages.
// Format de référence pour la génération de contenu.

export const fiches = [
  {
    id: "f_henderson", ueId: "3.1", type: "cours",
    titre: "Les 14 besoins fondamentaux de Virginia Henderson",
    resume: "Le modèle conceptuel qui structure le recueil de données et la démarche de soins.",
    tags: ["henderson", "besoins", "démarche de soins", "recueil de données"],
    html: `
      <p>Virginia Henderson définit l'infirmier comme aidant la personne à satisfaire ses besoins fondamentaux lorsqu'elle n'a pas la force, la volonté ou les connaissances pour le faire. Ces 14 besoins servent de <strong>grille systématique de recueil de données</strong>.</p>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« <em>Respirer, Boire/manger, Éliminer, Bouger, Dormir, Se vêtir, Température, Hygiène, Danger, Communiquer, Croyances, S'occuper, Se recréer, Apprendre</em> ».</div>
      <ol>
        <li><strong>Respirer</strong> — oxygénation, <span class="key" data-term="dyspnée">dyspnée</span>, SpO₂.</li>
        <li><strong>Boire et manger</strong> — hydratation, nutrition, déglutition.</li>
        <li><strong>Éliminer</strong> — urines, selles, continence.</li>
        <li><strong>Se mouvoir et maintenir une bonne posture</strong> — mobilité, prévention des chutes/escarres.</li>
        <li><strong>Dormir et se reposer</strong> — qualité et quantité du sommeil.</li>
        <li><strong>Se vêtir et se dévêtir</strong> — autonomie à l'habillage.</li>
        <li><strong>Maintenir la température</strong> — thermorégulation, fièvre/hypothermie.</li>
        <li><strong>Être propre, protéger ses téguments</strong> — hygiène, état cutané.</li>
        <li><strong>Éviter les dangers</strong> — sécurité, <span class="key" data-term="asepsie">asepsie</span>, prévention.</li>
        <li><strong>Communiquer</strong> — relation, expression des émotions et besoins.</li>
        <li><strong>Agir selon ses croyances et valeurs</strong> — spiritualité, culture.</li>
        <li><strong>S'occuper / se réaliser</strong> — rôle social, estime de soi.</li>
        <li><strong>Se recréer</strong> — loisirs, détente.</li>
        <li><strong>Apprendre</strong> — éducation, compréhension de sa santé.</li>
      </ol>
      <div class="callout"><div class="callout-t">En pratique</div>Pour chaque besoin : noter s'il est <strong>satisfait, perturbé ou non satisfait</strong>, identifier la source de difficulté, puis poser un diagnostic infirmier.</div>
    `,
    refs: ["V. Henderson, Principes fondamentaux des soins infirmiers (CII)"],
  },
  {
    id: "f_demarche", ueId: "3.1", type: "cours",
    titre: "La démarche de soins infirmiers",
    resume: "Méthode en 5 étapes : recueil → diagnostic → planification → réalisation → évaluation.",
    tags: ["démarche de soins", "raisonnement clinique", "planification"],
    html: `
      <p>La démarche de soins est un processus de résolution de problèmes, dynamique et continu.</p>
      <h3>1. Recueil de données</h3>
      <p>Données objectives (constantes, examen) et subjectives (ressenti du patient), via l'observation, l'entretien et le dossier. On peut s'appuyer sur les <span class="key" data-term="besoins fondamentaux">14 besoins de Henderson</span>.</p>
      <h3>2. Analyse et diagnostic infirmier</h3>
      <p>Formulation au format <strong>PES</strong> : <strong>P</strong>roblème, <strong>É</strong>tiologie (lié à), <strong>S</strong>ignes (se manifestant par).</p>
      <h3>3. Planification</h3>
      <p>Objectifs <strong>SMART</strong>, priorisés (urgence, sécurité), choix des interventions.</p>
      <h3>4. Réalisation / mise en œuvre</h3>
      <p>Exécution des soins, éducation, traçabilité et <span class="key" data-term="transmissions ciblées">transmissions ciblées</span>.</p>
      <h3>5. Évaluation</h3>
      <p>Atteinte des objectifs ? Réajustement du projet de soins si nécessaire.</p>
      <div class="callout warn"><div class="callout-t">Piège fréquent</div>Un diagnostic infirmier n'est pas un diagnostic médical : il décrit une <strong>réaction de la personne</strong> à un problème de santé, dans le champ de compétence autonome de l'infirmier.</div>
    `,
    refs: ["UE 3.1 — Raisonnement et démarche clinique infirmière"],
  },
  {
    id: "f_dar", ueId: "3.2", type: "cours",
    titre: "Les transmissions ciblées (méthode DAR) et la macrocible",
    resume: "Structurer ses transmissions écrites : Données – Actions – Résultats.",
    tags: ["transmissions", "DAR", "macrocible", "traçabilité"],
    html: `
      <p>Les transmissions ciblées améliorent la lisibilité et la continuité des soins. Chaque <strong>cible</strong> (problème, préoccupation) est documentée selon le triptyque :</p>
      <table class="tbl">
        <tr><th>Lettre</th><th>Signifie</th><th>Contenu</th></tr>
        <tr><td><strong>D</strong></td><td>Données</td><td>Observations, signes, ce que dit/présente le patient.</td></tr>
        <tr><td><strong>A</strong></td><td>Actions</td><td>Interventions infirmières mises en œuvre.</td></tr>
        <tr><td><strong>R</strong></td><td>Résultats</td><td>Réaction du patient, efficacité, évolution.</td></tr>
      </table>
      <h3>La macrocible</h3>
      <p>Synthèse d'entrée/sortie ou de situation, souvent organisée en <strong>MTVED</strong> : <em>Maladie, Thérapeutique, Vécu, Environnement, Développement/Devenir</em>.</p>
      <div class="callout"><div class="callout-t">Exemple de cible « Douleur »</div><strong>D</strong> : douleur lombaire 7/10 à la mobilisation. <strong>A</strong> : antalgique palier II administré, installation antalgique, réévaluation. <strong>R</strong> : douleur à 3/10 à 45 min, mobilisation possible.</div>
    `,
    refs: ["Méthode des transmissions ciblées (S. Lampe)"],
  },
  {
    id: "f_constantes", ueId: "2.2", type: "cours",
    titre: "Les paramètres vitaux : valeurs normales de l'adulte",
    resume: "TA, FC, FR, température, SpO₂, douleur : repères et seuils d'alerte.",
    tags: ["paramètres vitaux", "constantes", "surveillance"],
    html: `
      <table class="tbl">
        <tr><th>Paramètre</th><th>Norme adulte</th><th>Alerte</th></tr>
        <tr><td>Tension artérielle</td><td>≈ 120/80 mmHg</td><td>&lt; 90/60 ou &gt; 140/90</td></tr>
        <tr><td>Fréquence cardiaque</td><td>60–100 bpm</td><td>&lt; 50 (bradycardie) / &gt; 100 (tachycardie)</td></tr>
        <tr><td>Fréquence respiratoire</td><td>12–20 /min</td><td>&lt; 12 / &gt; 20</td></tr>
        <tr><td>Température</td><td>36,5–37,5 °C</td><td>&lt; 36 (hypothermie) / &gt; 38 (fièvre)</td></tr>
        <tr><td>SpO₂</td><td>95–100 %</td><td>&lt; 92 %</td></tr>
        <tr><td>Douleur (EVA/EN)</td><td>0/10</td><td>≥ 4/10 = à traiter</td></tr>
        <tr><td>Glycémie capillaire à jeun</td><td>0,7–1,1 g/L</td><td>&lt; 0,6 (hypo) / &gt; 1,26 (à jeun)</td></tr>
      </table>
      <div class="callout danger"><div class="callout-t">Signes de gravité</div>Penser au score <span class="key" data-term="qSOFA">qSOFA</span> / aux critères de sepsis devant une tachypnée, une hypotension et des troubles de conscience.</div>
    `,
    refs: ["UE 2.2 — Cycles de la vie et grandes fonctions"],
  },
  {
    id: "f_precautions", ueId: "2.10", type: "cours",
    titre: "Précautions standard et complémentaires (hygiène)",
    resume: "Le socle de la prévention du risque infectieux et les 3 types de précautions complémentaires.",
    tags: ["hygiène", "précautions", "infection nosocomiale", "asepsie"],
    html: `
      <h3>Précautions standard (pour TOUS les patients)</h3>
      <ul>
        <li><strong>Hygiène des mains</strong> : friction hydro-alcoolique (référence).</li>
        <li>Port de gants si contact avec liquides biologiques.</li>
        <li>Protection (tablier, masque, lunettes) selon le risque de projection.</li>
        <li>Gestion des excreta, du linge, des déchets (DASRI), des objets piquants/tranchants (ne jamais recapuchonner).</li>
      </ul>
      <h3>Précautions complémentaires</h3>
      <table class="tbl">
        <tr><th>Type</th><th>Transmission</th><th>Exemples</th></tr>
        <tr><td><strong>Contact</strong> (C)</td><td>Mains, surfaces</td><td>BMR/BHRe, gale, <em>C. difficile</em></td></tr>
        <tr><td><strong>Gouttelettes</strong> (G)</td><td>&gt; 5 µm, &lt; 1–2 m</td><td>Grippe, méningocoque, coqueluche</td></tr>
        <tr><td><strong>Air</strong> (A)</td><td>&lt; 5 µm, aéroportée</td><td>Tuberculose, rougeole, varicelle (FFP2)</td></tr>
      </table>
      <div class="callout"><div class="callout-t">Les 5 indications de l'hygiène des mains (OMS)</div>Avant contact patient · avant geste aseptique · après risque d'exposition · après contact patient · après contact environnement.</div>
    `,
    refs: ["SF2H — Précautions standard 2017"],
  },
];

export const qcm = [
  { ueId: "3.1", q: "Le diagnostic infirmier se formule classiquement selon le format :", options: ["ABCD", "PES (Problème-Étiologie-Signes)", "DAR", "SBAR"], correct: 1, explication: "Le format PES : Problème / Étiologie (« lié à ») / Signes (« se manifestant par »). DAR concerne les transmissions, SBAR la communication orale.", ref: "UE 3.1", diff: 1 },
  { ueId: "3.1", q: "Combien de besoins fondamentaux compte le modèle de Virginia Henderson ?", options: ["10", "12", "14", "16"], correct: 2, explication: "Le modèle compte 14 besoins fondamentaux, du besoin de respirer au besoin d'apprendre.", ref: "UE 3.1", diff: 1 },
  { ueId: "3.1", q: "Un diagnostic infirmier décrit avant tout :", options: ["Une maladie", "La réaction de la personne à un problème de santé", "Une prescription médicale", "Un acte technique"], correct: 1, explication: "Il relève du rôle propre infirmier et décrit la réaction humaine de la personne, distincte du diagnostic médical.", ref: "UE 3.1", diff: 2 },
  { ueId: "3.2", q: "Dans la méthode DAR, la lettre « A » correspond à :", options: ["Analyse", "Actions", "Antécédents", "Allergies"], correct: 1, explication: "D = Données, A = Actions (interventions réalisées), R = Résultats (réaction du patient).", ref: "UE 3.2", diff: 1 },
  { ueId: "2.2", q: "Quelle est la fréquence respiratoire normale d'un adulte au repos ?", options: ["6–10 /min", "12–20 /min", "20–30 /min", "30–40 /min"], correct: 1, explication: "12 à 20 cycles par minute. En dessous = bradypnée, au-dessus = tachypnée.", ref: "UE 2.2", diff: 1 },
  { ueId: "2.2", q: "On parle d'hypoxémie significative lorsque la SpO₂ descend en dessous de :", options: ["98 %", "95 %", "92 %", "85 %"], correct: 2, explication: "Le seuil d'alerte usuel est < 92 % (objectif souvent ≥ 94 %, adapté chez le BPCO : 88–92 %).", ref: "UE 2.2", diff: 2 },
  { ueId: "2.2", q: "Une température corporelle de 35,4 °C correspond à :", options: ["Une fièvre", "Une normothermie", "Une hypothermie", "Une hyperthermie maligne"], correct: 2, explication: "En dessous de 36 °C on parle d'hypothermie.", ref: "UE 2.2", diff: 1 },
  { ueId: "2.10", q: "La méthode de référence pour l'hygiène des mains est :", options: ["Le lavage simple au savon doux", "La friction hydro-alcoolique", "Le port de gants", "Le lavage chirurgical systématique"], correct: 1, explication: "La friction hydro-alcoolique (SHA) est la référence sur mains non souillées, plus efficace et mieux tolérée.", ref: "SF2H", diff: 1 },
  { ueId: "2.10", q: "La tuberculose pulmonaire bacillifère relève de précautions complémentaires de type :", options: ["Contact", "Gouttelettes", "Air (FFP2)", "Aucune"], correct: 2, explication: "Transmission aéroportée (< 5 µm) : précautions « Air », chambre seule et appareil de protection respiratoire FFP2.", ref: "UE 2.10", diff: 2 },
  { ueId: "2.10", q: "Que signifie « DASRI » ?", options: ["Déchets d'Activités de Soins à Risques Infectieux", "Dispositif d'Asepsie et de Stérilisation", "Données Anonymisées de Santé", "Démarche d'Amélioration des Soins"], correct: 0, explication: "Les DASRI suivent une filière d'élimination spécifique (collecteurs jaunes).", ref: "UE 2.10", diff: 1 },
  { ueId: "3.1", q: "Dans des objectifs de soins « SMART », le « M » signifie :", options: ["Médical", "Mesurable", "Multiple", "Maximal"], correct: 1, explication: "Spécifique, Mesurable, Atteignable, Réaliste, Temporellement défini.", ref: "UE 3.1", diff: 2 },
  { ueId: "2.2", q: "La pression artérielle est dite normale autour de :", options: ["90/50 mmHg", "120/80 mmHg", "150/95 mmHg", "180/100 mmHg"], correct: 1, explication: "≈ 120/80 mmHg. L'HTA se définit ≥ 140/90 mmHg au cabinet.", ref: "UE 2.2", diff: 1 },
];

export const flashcards = [
  { ueId: "3.1", recto: "Les 5 étapes de la démarche de soins ?", verso: "Recueil de données → Diagnostic infirmier → Planification → Réalisation → Évaluation." },
  { ueId: "3.1", recto: "Format d'un diagnostic infirmier ?", verso: "PES : Problème — Étiologie (lié à) — Signes (se manifestant par)." },
  { ueId: "3.2", recto: "Que veut dire DAR ?", verso: "Données – Actions – Résultats (transmissions ciblées)." },
  { ueId: "3.2", recto: "Structure d'une macrocible (MTVED) ?", verso: "Maladie, Thérapeutique, Vécu, Environnement, Développement/Devenir." },
  { ueId: "2.2", recto: "FC normale de l'adulte au repos ?", verso: "60 à 100 bpm." },
  { ueId: "2.2", recto: "FR normale de l'adulte ?", verso: "12 à 20 /min." },
  { ueId: "2.2", recto: "Seuil d'alerte de la SpO₂ ?", verso: "< 92 % (objectif ≥ 94 %, BPCO 88–92 %)." },
  { ueId: "2.2", recto: "Glycémie veineuse à jeun normale ?", verso: "0,70 à 1,10 g/L (diabète si ≥ 1,26 g/L à jeun)." },
  { ueId: "2.10", recto: "Méthode de référence d'hygiène des mains ?", verso: "Friction hydro-alcoolique (SHA)." },
  { ueId: "2.10", recto: "Les 3 types de précautions complémentaires ?", verso: "Contact, Gouttelettes, Air." },
  { ueId: "3.1", recto: "Les 14 besoins : 1er et 14e ?", verso: "1 = Respirer ; 14 = Apprendre." },
  { ueId: "2.10", recto: "Que sont les DASRI ?", verso: "Déchets d'Activités de Soins à Risques Infectieux (collecteurs jaunes)." },
];

export const cas = [
  {
    id: "cas_chute_ehpad", ueId: "3.1", titre: "Chute en EHPAD", niveau: "1ʳᵉ–2ᵉ année",
    contexte: "EHPAD, vous êtes l'IDE du matin.",
    situation: "Mme L., 84 ans, démence débutante, est retrouvée au sol près de son lit à 6 h. Elle se plaint de la hanche droite, est consciente, désorientée, TA 110/70, FC 96, douleur 6/10. Antécédents : ostéoporose, traitement par diurétique.",
    questions: [
      { q: "Quelle est votre PREMIÈRE action ?", type: "qcm", options: ["La relever immédiatement", "Évaluer la conscience, la douleur et rechercher des signes de fracture sans la mobiliser", "Lui donner un antalgique per os", "Appeler la famille"], correct: 1, corrige: "On ne mobilise jamais une personne après une chute avant d'avoir évalué : conscience, douleur, déformation/raccourcissement de membre, impotence. Bilan puis appel médical." },
      { q: "Quel signe évoque une fracture du col fémoral ?", type: "qcm", options: ["Membre allongé en abduction", "Membre raccourci en rotation externe", "Absence de douleur", "Œdème du genou"], correct: 1, corrige: "La fracture du col fémoral donne classiquement un membre raccourci, en rotation externe, avec impotence fonctionnelle." },
      { q: "Citez 2 diagnostics infirmiers prioritaires (format PES).", type: "open", corrige: "Ex. : « Douleur aiguë liée au traumatisme se manifestant par EVA 6/10 et attitude antalgique » ; « Risque de chute lié à l'âge, aux troubles cognitifs et au traitement diurétique »." },
    ],
    demarche: "Sécuriser, évaluer (constantes, douleur, neuro), tracer, transmettre au médecin, surveiller, prévenir une récidive (analyse des causes : iatrogénie du diurétique, environnement, troubles cognitifs).",
  },
];
