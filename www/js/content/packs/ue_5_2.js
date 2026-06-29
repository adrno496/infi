export const fiches = [
  { id: "f_5_2_demarche", ueId: "5.2", type: "cours",
    titre: "La démarche clinique infirmière",
    resume: "Processus structuré de recueil, d'analyse et de raisonnement permettant d'identifier les besoins et problèmes de la personne soignée.",
    tags: ["démarche clinique", "raisonnement", "recueil de données"],
    html: `<h3>Définition</h3>
<p>La <span class="key" data-term="démarche clinique">démarche clinique</span> est un processus intellectuel structuré qui guide l'infirmier·e dans l'<strong>évaluation d'une situation clinique</strong>. Elle permet de passer de l'observation à l'action de soin pertinente.</p>
<h3>Les étapes</h3>
<ul>
<li><strong>Recueil de données</strong> : informations objectives et subjectives sur la personne.</li>
<li><strong>Analyse et interprétation</strong> : tri, regroupement, identification des problèmes.</li>
<li><strong>Diagnostic infirmier / problème en collaboration</strong>.</li>
<li><strong>Planification</strong> : objectifs et interventions.</li>
<li><strong>Réalisation</strong> des soins.</li>
<li><strong>Évaluation</strong> des résultats et réajustement.</li>
</ul>
<div class="callout"><div class="callout-t">Données objectives vs subjectives</div>Les données <strong>objectives</strong> sont mesurables et observables (constantes, examens). Les données <strong>subjectives</strong> sont exprimées par la personne (douleur ressentie, ressenti, plaintes).</div>
<table class="tbl"><tr><th>Source</th><th>Exemple</th></tr><tr><td>Personne soignée</td><td>Plaintes, antécédents</td></tr><tr><td>Entourage</td><td>Habitudes de vie</td></tr><tr><td>Dossier</td><td>Transmissions, examens</td></tr><tr><td>Observation</td><td>Constantes, attitude</td></tr></table>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>RAP-RE</strong> : <strong>R</strong>ecueil, <strong>A</strong>nalyse, <strong>P</strong>lanification, <strong>R</strong>éalisation, <strong>É</strong>valuation.</div>`,
    refs: ["UE 5.2"] },

  { id: "f_5_2_diagnostic", ueId: "5.2", type: "cours",
    titre: "Diagnostic infirmier et problème en collaboration",
    resume: "Distinguer le diagnostic infirmier (rôle propre) du problème traité en collaboration avec le médecin.",
    tags: ["diagnostic infirmier", "PES", "rôle propre"],
    html: `<h3>Le diagnostic infirmier</h3>
<p>Un <span class="key" data-term="diagnostic infirmier">diagnostic infirmier</span> est un énoncé décrivant une réaction humaine à un problème de santé que l'infirmier·e est habilité·e à traiter dans le cadre de son <strong>rôle propre</strong>.</p>
<div class="callout"><div class="callout-t">Structure PES</div><strong>P</strong>roblème + <strong>E</strong>tiologie (lié à) + <strong>S</strong>ignes (se manifestant par). Ex : « Risque d'altération de la mobilité lié à l'alitement prolongé se manifestant par... ».</div>
<h3>Problème en collaboration</h3>
<p>Complication potentielle physiologique que l'infirmier·e surveille et dont la prise en charge relève d'une décision <strong>médicale</strong> (rôle prescrit). Ex : surveillance d'un risque hémorragique post-opératoire.</p>
<table class="tbl"><tr><th></th><th>Diagnostic infirmier</th><th>Problème collaboration</th></tr><tr><td>Décision</td><td>Infirmier (rôle propre)</td><td>Médecin (rôle prescrit)</td></tr><tr><td>Objet</td><td>Réaction humaine</td><td>Complication physiopatho</td></tr></table>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>PES</strong> = Problème, Étiologie, Signes : la formule d'un diagnostic infirmier réel.</div>`,
    refs: ["UE 5.2"] },

  { id: "f_5_2_besoins", ueId: "5.2", type: "cours",
    titre: "Les 14 besoins de Virginia Henderson",
    resume: "Modèle conceptuel structurant le recueil de données autour des besoins fondamentaux de la personne.",
    tags: ["Henderson", "besoins fondamentaux", "modèle"],
    html: `<h3>Le modèle de Virginia Henderson</h3>
<p>Le modèle des <span class="key" data-term="besoins fondamentaux">14 besoins fondamentaux</span> aide à structurer l'évaluation clinique. Un besoin non satisfait génère une dépendance, à analyser pour poser un diagnostic.</p>
<ul>
<li>Respirer</li><li>Boire et manger</li><li>Éliminer</li><li>Se mouvoir et maintenir une bonne posture</li>
<li>Dormir et se reposer</li><li>Se vêtir et se dévêtir</li><li>Maintenir la température du corps</li>
<li>Être propre, soigné et protéger ses téguments</li><li>Éviter les dangers</li><li>Communiquer</li>
<li>Agir selon ses croyances et ses valeurs</li><li>S'occuper en vue de se réaliser</li>
<li>Se récréer / se divertir</li><li>Apprendre</li>
</ul>
<div class="callout"><div class="callout-t">Notion de dépendance</div>L'infirmier·e identifie le degré d'<strong>autonomie</strong> ou de <strong>dépendance</strong> pour chaque besoin, et les <strong>sources de difficulté</strong> (manque de force, de volonté, de connaissance).</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Les 3 sources de difficulté : manque de <strong>Force</strong>, de <strong>Volonté</strong>, de <strong>Connaissance</strong>.</div>`,
    refs: ["UE 5.2"] },

  { id: "f_5_2_constantes", ueId: "5.2", type: "cours",
    titre: "Évaluation des paramètres vitaux et signes d'alerte",
    resume: "Mesure et interprétation des constantes pour repérer rapidement une dégradation clinique.",
    tags: ["constantes", "paramètres vitaux", "surveillance"],
    html: `<h3>Les paramètres vitaux de l'adulte</h3>
<table class="tbl"><tr><th>Paramètre</th><th>Valeurs usuelles adulte</th></tr>
<tr><td>Fréquence cardiaque</td><td>60 à 100 bpm</td></tr>
<tr><td>Fréquence respiratoire</td><td>12 à 20 /min</td></tr>
<tr><td>Pression artérielle</td><td>environ 120/80 mmHg</td></tr>
<tr><td>Température</td><td>36,5 à 37,5 °C</td></tr>
<tr><td>SpO2</td><td>95 à 100 %</td></tr></table>
<div class="callout"><div class="callout-t">Signes d'alerte</div>Une <strong>tachycardie</strong>, une <strong>polypnée</strong>, une <strong>hypotension</strong>, une <strong>désaturation</strong> ou des <strong>troubles de la conscience</strong> doivent alerter et déclencher une transmission rapide.</div>
<p>L'évaluation de la <span class="key" data-term="douleur">douleur</span> est le 5e paramètre : échelles EVA, EN, EVS (auto-évaluation) ou Algoplus/Doloplus (hétéro-évaluation).</p>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>FC-FR-PA-T°-SpO2</strong> : les 5 constantes de base, à compléter par la douleur.</div>`,
    refs: ["UE 5.2"] },
];

export const qcm = [
  { ueId: "5.2", q: "Quelle est la première étape de la démarche clinique ?",
    options: ["Le diagnostic infirmier", "Le recueil de données", "La planification des soins", "L'évaluation des résultats"], correct: 1,
    explication: "La démarche clinique débute toujours par le recueil de données (objectives et subjectives), socle indispensable à toute analyse et tout diagnostic.", ref: "UE 5.2", diff: 1 },

  { ueId: "5.2", q: "Une donnée subjective est :",
    options: ["Une constante mesurée", "Le résultat d'un examen biologique", "Ce que la personne exprime de son ressenti", "Une observation directe de l'infirmier"], correct: 2,
    explication: "Une donnée subjective est exprimée par la personne (douleur ressentie, plainte, ressenti). Les constantes et examens sont des données objectives.", ref: "UE 5.2", diff: 1 },

  { ueId: "5.2", q: "La formule PES d'un diagnostic infirmier signifie :",
    options: ["Problème, Étiologie, Signes", "Patient, Examen, Soin", "Prévention, Évaluation, Surveillance", "Plainte, Évolution, Symptôme"], correct: 0,
    explication: "PES = Problème (titre du diagnostic) + Étiologie (facteurs liés à) + Signes (manifestations). C'est la structure d'un diagnostic infirmier réel.", ref: "UE 5.2", diff: 2 },

  { ueId: "5.2", q: "Un problème traité en collaboration relève d'une décision :",
    options: ["Du rôle propre infirmier", "Médicale", "De l'aide-soignant", "Du cadre de santé"], correct: 1,
    explication: "Le problème en collaboration concerne une complication physiopathologique dont la prise en charge relève d'une décision médicale (rôle prescrit), l'infirmier assurant la surveillance.", ref: "UE 5.2", diff: 2 },

  { ueId: "5.2", q: "Combien de besoins fondamentaux compte le modèle de Virginia Henderson ?",
    options: ["10", "12", "14", "16"], correct: 2,
    explication: "Le modèle conceptuel de Virginia Henderson repose sur 14 besoins fondamentaux, de respirer à apprendre.", ref: "UE 5.2", diff: 1 },

  { ueId: "5.2", q: "Selon Henderson, les sources de difficulté d'un besoin non satisfait sont un manque de :",
    options: ["Temps, argent, soutien", "Force, volonté, connaissance", "Matériel, personnel, formation", "Confiance, repos, motivation"], correct: 1,
    explication: "Henderson décrit trois sources de difficulté : le manque de force (physique/psychique), de volonté et de connaissance.", ref: "UE 5.2", diff: 2 },

  { ueId: "5.2", q: "Quelle est la fréquence cardiaque usuelle de l'adulte au repos ?",
    options: ["40 à 60 bpm", "60 à 100 bpm", "100 à 120 bpm", "120 à 140 bpm"], correct: 1,
    explication: "La fréquence cardiaque normale de l'adulte au repos se situe entre 60 et 100 battements par minute. En dessous : bradycardie ; au-dessus : tachycardie.", ref: "UE 5.2", diff: 1 },

  { ueId: "5.2", q: "Une SpO2 de 89 % chez un adulte correspond à :",
    options: ["Une valeur normale", "Une désaturation à signaler", "Une hyperoxie", "Une valeur sans signification clinique"], correct: 1,
    explication: "La SpO2 normale est de 95 à 100 %. Une valeur de 89 % traduit une désaturation (hypoxémie) qui doit alerter et être transmise rapidement.", ref: "UE 5.2", diff: 1 },

  { ueId: "5.2", q: "La fréquence respiratoire normale de l'adulte au repos est de :",
    options: ["6 à 10 /min", "12 à 20 /min", "20 à 30 /min", "30 à 40 /min"], correct: 1,
    explication: "La fréquence respiratoire normale de l'adulte est de 12 à 20 cycles par minute. Au-delà de 20 : polypnée/tachypnée.", ref: "UE 5.2", diff: 1 },

  { ueId: "5.2", q: "L'échelle EVA permet d'évaluer :",
    options: ["L'état de conscience", "L'intensité de la douleur", "Le risque d'escarre", "L'autonomie"], correct: 1,
    explication: "L'EVA (Échelle Visuelle Analogique) est un outil d'auto-évaluation de l'intensité de la douleur, comme l'EN (numérique) et l'EVS (verbale simple).", ref: "UE 5.2", diff: 1 },

  { ueId: "5.2", q: "Pour évaluer la douleur d'une personne âgée non communicante, on utilise :",
    options: ["L'EVA", "L'échelle Algoplus ou Doloplus", "L'EN", "L'EVS"], correct: 1,
    explication: "Chez une personne non communicante, on recourt à l'hétéro-évaluation : Algoplus (douleur aiguë) ou Doloplus (douleur chronique du sujet âgé).", ref: "UE 5.2", diff: 2 },

  { ueId: "5.2", q: "Le diagnostic infirmier relève :",
    options: ["Du rôle prescrit", "Du rôle propre infirmier", "De la prescription médicale", "Du rôle de l'aide-soignant"], correct: 1,
    explication: "Le diagnostic infirmier relève du rôle propre : l'infirmier est autonome pour l'identifier et déterminer les interventions qui en découlent.", ref: "UE 5.2", diff: 2 },

  { ueId: "5.2", q: "Un diagnostic infirmier 'de type risque' se caractérise par :",
    options: ["Des signes actuellement présents", "L'absence de signes mais une vulnérabilité", "Une complication médicale avérée", "Un état de bien-être"], correct: 1,
    explication: "Un diagnostic de risque décrit une vulnérabilité : le problème n'est pas encore présent (pas de signes), mais des facteurs de risque existent. Il s'énonce sans la partie 'Signes'.", ref: "UE 5.2", diff: 3 },

  { ueId: "5.2", q: "L'analyse des données consiste à :",
    options: ["Mesurer les constantes", "Trier, regrouper et interpréter les informations recueillies", "Réaliser les soins prescrits", "Transmettre oralement", "Rédiger la prescription"], correct: 1,
    explication: "L'analyse vise à trier, regrouper et interpréter les données afin de mettre en évidence les problèmes de santé réels ou potentiels.", ref: "UE 5.2", diff: 2 },

  { ueId: "5.2", q: "La dernière étape de la démarche clinique est :",
    options: ["La planification", "L'évaluation et le réajustement", "Le recueil de données", "Le diagnostic"], correct: 1,
    explication: "L'évaluation des résultats permet de vérifier l'atteinte des objectifs et de réajuster les interventions ; c'est l'étape finale, qui boucle le processus.", ref: "UE 5.2", diff: 1 },

  { ueId: "5.2", q: "Quelle température correspond à une fièvre chez l'adulte ?",
    options: ["36,8 °C", "37,2 °C", "Au-delà de 38 °C", "35,5 °C"], correct: 2,
    explication: "On parle de fièvre au-delà de 38 °C (température normale 36,5 à 37,5 °C). En dessous de 36 °C : hypothermie.", ref: "UE 5.2", diff: 1 },

  { ueId: "5.2", q: "Parmi ces propositions, laquelle est un objectif de soin correctement formulé ?",
    options: ["Surveiller le patient", "La personne marchera 20 mètres avec aide d'ici 3 jours", "Faire un pansement", "Le patient va mieux"], correct: 1,
    explication: "Un bon objectif est centré sur la personne, précis, mesurable et daté. 'La personne marchera 20 mètres d'ici 3 jours' respecte ces critères, contrairement aux interventions ou formulations vagues.", ref: "UE 5.2", diff: 3 },

  { ueId: "5.2", q: "Les transmissions ciblées sont structurées selon le modèle :",
    options: ["PES", "DAR (Données, Actions, Résultats)", "ABCDE", "SBAR uniquement"], correct: 1,
    explication: "Les transmissions ciblées suivent le modèle DAR : Données (observation), Actions (soins réalisés), Résultats (évolution). Elles sont rattachées à une cible.", ref: "UE 5.2", diff: 2 },

  { ueId: "5.2", q: "Une donnée objective est, par exemple :",
    options: ["La douleur ressentie décrite par le patient", "Une pression artérielle de 130/85 mmHg", "L'angoisse exprimée", "La sensation de fatigue rapportée"], correct: 1,
    explication: "Une donnée objective est mesurable ou observable indépendamment du ressenti : une PA mesurée en est une. Les autres propositions relèvent du subjectif (exprimé par la personne).", ref: "UE 5.2", diff: 1 },

  { ueId: "5.2", q: "Dans la démarche clinique, le raisonnement clinique permet :",
    options: ["De remplacer la prescription médicale", "De relier les données pour formuler des hypothèses et des problèmes", "D'éviter le recueil de données", "De déléguer tous les soins"], correct: 1,
    explication: "Le raisonnement clinique est le processus intellectuel qui relie et interprète les données pour formuler des hypothèses, prioriser et identifier les problèmes de santé.", ref: "UE 5.2", diff: 2 },

  { ueId: "5.2", q: "Quel besoin de Henderson est concerné par un risque d'escarre lié à l'alitement ?",
    options: ["Communiquer", "Être propre et protéger ses téguments", "Apprendre", "Se récréer"], correct: 1,
    explication: "Le risque d'escarre concerne l'intégrité de la peau, donc le besoin 'Être propre, soigné et protéger ses téguments'. La mobilisation (se mouvoir) est aussi impliquée.", ref: "UE 5.2", diff: 2 },

  { ueId: "5.2", q: "Quel élément ne fait PAS partie d'un diagnostic infirmier réel selon le format PES ?",
    options: ["Le problème", "L'étiologie", "La prescription médicamenteuse", "Les signes"], correct: 2,
    explication: "Le format PES comprend Problème, Étiologie et Signes. La prescription médicamenteuse relève du rôle médical, pas de l'énoncé du diagnostic infirmier.", ref: "UE 5.2", diff: 2 },
];

export const flashcards = [
  { ueId: "5.2", recto: "Quelles sont les étapes de la démarche clinique ?", verso: "Recueil de données, analyse, diagnostic, planification, réalisation, évaluation." },
  { ueId: "5.2", recto: "Différence entre donnée objective et subjective ?", verso: "Objective : mesurable/observable (constantes, examens). Subjective : exprimée par la personne (ressenti, douleur)." },
  { ueId: "5.2", recto: "Que signifie la formule PES ?", verso: "Problème + Étiologie (lié à) + Signes (se manifestant par) : structure d'un diagnostic infirmier réel." },
  { ueId: "5.2", recto: "Qui décide de la prise en charge d'un problème en collaboration ?", verso: "Le médecin (rôle prescrit) ; l'infirmier assure la surveillance." },
  { ueId: "5.2", recto: "Combien de besoins fondamentaux dans le modèle de Henderson ?", verso: "14 besoins fondamentaux." },
  { ueId: "5.2", recto: "Les 3 sources de difficulté selon Henderson ?", verso: "Manque de force, de volonté et de connaissance." },
  { ueId: "5.2", recto: "Fréquence cardiaque normale de l'adulte au repos ?", verso: "60 à 100 battements par minute." },
  { ueId: "5.2", recto: "Fréquence respiratoire normale de l'adulte ?", verso: "12 à 20 cycles par minute." },
  { ueId: "5.2", recto: "Valeur normale de la SpO2 ?", verso: "95 à 100 %. En dessous : désaturation à signaler." },
  { ueId: "5.2", recto: "Température normale et seuil de fièvre ?", verso: "Normale : 36,5 à 37,5 °C. Fièvre au-delà de 38 °C." },
  { ueId: "5.2", recto: "Quelles échelles pour l'auto-évaluation de la douleur ?", verso: "EVA (visuelle analogique), EN (numérique), EVS (verbale simple)." },
  { ueId: "5.2", recto: "Quelles échelles pour la douleur d'une personne non communicante ?", verso: "Algoplus (aiguë) et Doloplus (chronique du sujet âgé) : hétéro-évaluation." },
  { ueId: "5.2", recto: "Le diagnostic infirmier relève de quel rôle ?", verso: "Du rôle propre infirmier (autonomie de décision)." },
  { ueId: "5.2", recto: "Que signifie le modèle DAR des transmissions ciblées ?", verso: "Données, Actions, Résultats, rattachés à une cible." },
  { ueId: "5.2", recto: "Caractéristiques d'un objectif de soin bien formulé ?", verso: "Centré sur la personne, précis, mesurable et daté." },
  { ueId: "5.2", recto: "Qu'est-ce qu'un diagnostic infirmier 'de type risque' ?", verso: "Vulnérabilité sans signes présents ; il s'énonce sans la partie Signes du PES." },
];
