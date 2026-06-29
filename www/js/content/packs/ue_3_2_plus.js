export const fiches = [
  { id: "fx_ue_3_2_plus_demarche_clinique", ueId: "3.2", type: "cours",
    titre: "De la démarche clinique au projet de soins : le fil logique",
    resume: "Comment le recueil de données et le raisonnement clinique débouchent sur un projet de soins structuré et évaluable.",
    tags: ["démarche clinique", "diagnostic infirmier", "projet de soins"],
    html: `<p>Le <span class="key" data-term="projet de soins">projet de soins</span> n'est pas une liste d'actes : c'est l'aboutissement d'un <strong>raisonnement clinique</strong> qui relie un problème identifié à un résultat attendu mesurable. Il s'inscrit dans la <span class="key" data-term="démarche de soins">démarche de soins</span>, méthode structurée en étapes enchaînées.</p>
<h3>Les étapes de la démarche de soins</h3>
<table class="tbl">
<tr><th>Étape</th><th>Action de l'IDE</th><th>Production</th></tr>
<tr><td>1. Recueil de données</td><td>Observation, entretien, examen clinique, dossier</td><td>Données objectives et subjectives</td></tr>
<tr><td>2. Analyse</td><td>Tri, regroupement, hiérarchisation des données</td><td>Problèmes de santé identifiés</td></tr>
<tr><td>3. Diagnostic infirmier</td><td>Formulation du jugement clinique</td><td>Diagnostic(s) infirmier(s) et problèmes traités en collaboration</td></tr>
<tr><td>4. Planification</td><td>Fixation d'objectifs et choix des interventions</td><td>Objectifs + plan d'actions</td></tr>
<tr><td>5. Réalisation</td><td>Mise en œuvre des soins planifiés</td><td>Soins tracés</td></tr>
<tr><td>6. Évaluation</td><td>Comparaison résultats obtenus / attendus</td><td>Réajustement</td></tr>
</table>
<div class="callout"><div class="callout-t">Diagnostic infirmier vs problème en collaboration</div><p>Le <span class="key" data-term="diagnostic infirmier">diagnostic infirmier</span> relève du rôle <strong>autonome</strong> : l'IDE en décide seul·e des interventions (ex. « Risque d'atteinte à l'intégrité cutanée »). Le <strong>problème traité en collaboration</strong> relève du rôle prescrit / sur prescription médicale (ex. surveillance d'une complication post-opératoire).</p></div>
<h3>Structure d'un diagnostic infirmier (format PES)</h3>
<ul>
<li><strong>P – Problème</strong> : intitulé du diagnostic.</li>
<li><strong>E – Étiologie</strong> : facteurs favorisants (« lié à… »).</li>
<li><strong>S – Signes</strong> : manifestations observées (« se manifestant par… »).</li>
</ul>
<p>Exemple : « <em>Altération de la mobilité physique</em> <strong>liée à</strong> une douleur post-opératoire <strong>se manifestant par</strong> un refus de se lever et une grimace à la mobilisation. »</p>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><p><strong>« PES »</strong> = <strong>P</strong>roblème, <strong>É</strong>tiologie, <strong>S</strong>ignes. On retient : « le PES pèse le jugement clinique ».</p></div>`,
    refs: ["Référentiel de formation infirmier 2009, UE 3.2", "Décret n°2004-802 art. R.4311-3 (rôle propre)"] },

  { id: "fx_ue_3_2_plus_objectifs_smart", ueId: "3.2", type: "cours",
    titre: "Formuler des objectifs de soins : la méthode et les pièges",
    resume: "Un objectif de soins doit être centré patient, observable et mesurable pour permettre l'évaluation.",
    tags: ["objectifs", "SMART", "évaluation", "planification"],
    html: `<p>Un <span class="key" data-term="objectif de soins">objectif de soins</span> décrit le <strong>résultat attendu pour le patient</strong>, pas l'action de l'infirmier·e. C'est cette formulation « centrée patient » qui rend l'évaluation possible.</p>
<h3>Les critères d'un objectif de qualité (SMART)</h3>
<table class="tbl">
<tr><th>Lettre</th><th>Critère</th><th>Exemple</th></tr>
<tr><td>S</td><td>Spécifique</td><td>« Le patient marche dans le couloir »</td></tr>
<tr><td>M</td><td>Mesurable</td><td>« …sur 20 mètres »</td></tr>
<tr><td>A</td><td>Atteignable</td><td>réaliste au vu de l'état du patient</td></tr>
<tr><td>R</td><td>Réaliste / pertinent</td><td>en lien avec le diagnostic</td></tr>
<tr><td>T</td><td>Temporel</td><td>« …d'ici 48 h »</td></tr>
</table>
<div class="callout"><div class="callout-t">Objectif vs intervention</div><p>Ne pas confondre : « <strong>Objectif</strong> = le patient ne présentera pas de signe de déshydratation à J2 » ≠ « <strong>Intervention</strong> = proposer à boire 1,5 L/jour ». L'objectif se conjugue côté patient, l'intervention côté soignant.</p></div>
<h3>Objectif à court, moyen, long terme</h3>
<ul>
<li><strong>Court terme</strong> : quelques heures à 48 h (ex. soulager une douleur aiguë).</li>
<li><strong>Moyen terme</strong> : jours à semaines (ex. récupérer une autonomie à la marche).</li>
<li><strong>Long terme</strong> : semaines à mois (ex. acquérir l'autogestion d'une insulinothérapie).</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><p>Un bon objectif répond à <strong>« Qui ? Fait quoi ? Combien ? Quand ? »</strong> — si l'une des 4 réponses manque, l'objectif n'est pas évaluable.</p></div>
<h3>Les pièges fréquents</h3>
<ul>
<li>Objectif rédigé côté soignant (« surveiller la diurèse ») → en réalité une intervention.</li>
<li>Objectif non mesurable (« le patient ira mieux »).</li>
<li>Absence de délai → impossible de dire si l'objectif est atteint.</li>
<li>Objectif irréaliste au regard des ressources du patient.</li>
</ul>`,
    refs: ["Référentiel 2009 UE 3.2", "HAS – Démarche qualité et évaluation des pratiques"] },

  { id: "fx_ue_3_2_plus_evaluation_reajustement", ueId: "3.2", type: "cours",
    titre: "Évaluation, traçabilité et réajustement du projet de soins",
    resume: "L'évaluation compare le résultat obtenu à l'objectif fixé et déclenche un réajustement tracé.",
    tags: ["évaluation", "transmissions ciblées", "réajustement", "traçabilité"],
    html: `<p>L'<span class="key" data-term="évaluation">évaluation</span> est l'étape qui boucle la démarche de soins : elle confronte le <strong>résultat obtenu</strong> au <strong>résultat attendu</strong> (l'objectif), à l'échéance fixée. Trois conclusions possibles : objectif <strong>atteint</strong>, <strong>partiellement atteint</strong>, ou <strong>non atteint</strong>.</p>
<h3>Conséquences de l'évaluation</h3>
<table class="tbl">
<tr><th>Résultat</th><th>Décision</th></tr>
<tr><td>Atteint</td><td>Clôturer la cible / maintenir, formuler un nouvel objectif si besoin</td></tr>
<tr><td>Partiellement atteint</td><td>Poursuivre, ajuster le délai ou les interventions</td></tr>
<tr><td>Non atteint</td><td>Réanalyser : objectif irréaliste ? diagnostic erroné ? interventions inadaptées ?</td></tr>
</table>
<div class="callout"><div class="callout-t">Transmissions ciblées : la méthode DAR</div><p>Les <span class="key" data-term="transmissions ciblées">transmissions ciblées</span> structurent la traçabilité autour d'une <strong>cible</strong> (problème) :</p><ul><li><strong>D – Données</strong> : ce qui est observé / dit.</li><li><strong>A – Actions</strong> : ce qui est mis en œuvre.</li><li><strong>R – Résultats</strong> : effet observé, évaluation.</li></ul></div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><p>Pour une transmission ciblée, on suit le <strong>« DAR »</strong> : <strong>D</strong>onnées → <strong>A</strong>ctions → <strong>R</strong>ésultats. « Le DAR ferme la boucle de soin. »</p></div>
<h3>Valeur juridique de la traçabilité</h3>
<p>Le dossier de soins est un document <strong>médico-légal</strong>. La règle est simple : « <strong>ce qui n'est pas écrit n'est pas fait</strong> ». La traçabilité garantit la continuité des soins (transmissions inter-équipes), la sécurité du patient et la responsabilité professionnelle.</p>
<div class="callout"><div class="callout-t">Macrocible</div><p>Une <strong>macrocible</strong> synthétise une situation à un moment clé (admission, sortie). Elle suit souvent le format <strong>MTVED</strong> : <strong>M</strong>aladie, <strong>T</strong>raitements, <strong>V</strong>écu, <strong>E</strong>nvironnement, <strong>D</strong>éveloppement (et autonomie).</p></div>`,
    refs: ["Référentiel 2009 UE 3.2", "Code de la santé publique – tenue du dossier de soins"] },
];

export const qcm = [
  { ueId: "3.2", q: "Quelle est la dernière étape de la démarche de soins ?",
    options: ["Le recueil de données", "La planification", "L'évaluation", "Le diagnostic infirmier"], correct: 2,
    explication: "L'évaluation clôture la démarche : elle compare le résultat obtenu à l'objectif fixé et déclenche, si besoin, un réajustement. Elle rend la démarche cyclique.",
    ref: "Référentiel 2009 UE 3.2", diff: 1 },

  { ueId: "3.2", q: "Le format PES d'un diagnostic infirmier correspond à :",
    options: ["Patient, Évaluation, Soin", "Problème, Étiologie, Signes", "Plan, Exécution, Suivi", "Problème, Examen, Surveillance"], correct: 1,
    explication: "PES = Problème (intitulé), Étiologie (facteurs favorisants, « lié à »), Signes (manifestations, « se manifestant par »). C'est la structure standard d'un diagnostic infirmier réel.",
    ref: "Référentiel 2009 UE 3.2", diff: 1 },

  { ueId: "3.2", q: "Parmi ces formulations, laquelle est un OBJECTIF de soins correctement centré patient ?",
    options: ["Surveiller la diurèse toutes les 4 h", "Le patient marchera 20 mètres avec déambulateur d'ici 48 h", "Installer le patient en position demi-assise", "Administrer l'antalgique prescrit"], correct: 1,
    explication: "Un objectif décrit le résultat attendu CHEZ LE PATIENT, mesurable et daté. Les trois autres propositions sont des interventions (actions du soignant), pas des objectifs.",
    ref: "Référentiel 2009 UE 3.2", diff: 2 },

  { ueId: "3.2", q: "Dans la méthode SMART, le « T » signifie :",
    options: ["Technique", "Tracé", "Temporel (avec une échéance)", "Théorique"], correct: 2,
    explication: "Le T renvoie à la dimension temporelle : un objectif doit comporter une échéance (« d'ici 48 h ») pour pouvoir être évalué à une date donnée.",
    ref: "Méthodologie objectifs SMART", diff: 1 },

  { ueId: "3.2", q: "Un « problème traité en collaboration » se distingue d'un diagnostic infirmier car :",
    options: ["Il ne nécessite aucune surveillance", "Il relève du rôle prescrit / sur prescription, pas du seul rôle autonome", "Il est toujours plus grave", "Il ne se trace pas dans le dossier"], correct: 1,
    explication: "Le diagnostic infirmier relève du rôle autonome (l'IDE décide seul des interventions). Le problème en collaboration implique le rôle prescrit (surveillance d'une complication potentielle, application d'une prescription).",
    ref: "Décret R.4311-3 et suivants", diff: 2 },

  { ueId: "3.2", q: "La méthode DAR des transmissions ciblées signifie :",
    options: ["Données, Actions, Résultats", "Diagnostic, Analyse, Réajustement", "Douleur, Anxiété, Repos", "Données, Antalgique, Repos"], correct: 0,
    explication: "DAR = Données (observées/exprimées), Actions (mises en œuvre), Résultats (effet et évaluation). Cette structure s'articule autour d'une cible (un problème identifié).",
    ref: "Transmissions ciblées – méthodologie", diff: 1 },

  { ueId: "3.2", q: "L'adage médico-légal qui résume l'importance de la traçabilité est :",
    options: ["« Le patient a toujours raison »", "« Ce qui n'est pas écrit n'est pas fait »", "« Primum non nocere »", "« Un soin vaut mieux que deux »"], correct: 1,
    explication: "Le dossier de soins a une valeur médico-légale : un soin non tracé est, en cas de litige, considéré comme non réalisé. La traçabilité protège le patient et le professionnel.",
    ref: "CSP – tenue du dossier de soins", diff: 1 },

  { ueId: "3.2", q: "Une macrocible de type MTVED comprend notamment :",
    options: ["Maladie, Traitements, Vécu, Environnement, Développement", "Médecin, Température, Veine, Examen, Diurèse", "Mobilité, Toilette, Vue, Élimination, Douleur", "Maladie, Tension, Veille, Évaluation, Dossier"], correct: 0,
    explication: "MTVED structure une macrocible de synthèse (admission/sortie) : Maladie, Traitements, Vécu, Environnement, Développement (et degré d'autonomie).",
    ref: "Transmissions ciblées – macrocible", diff: 2 },

  { ueId: "3.2", q: "Lorsqu'un objectif est évalué « non atteint » à l'échéance, l'IDE doit en priorité :",
    options: ["Abandonner le projet de soins", "Réanalyser le diagnostic, l'objectif et les interventions pour réajuster", "Augmenter systématiquement les doses de traitement", "Attendre l'avis du médecin avant toute action"], correct: 1,
    explication: "Un objectif non atteint impose un réajustement : il faut vérifier si le diagnostic était juste, l'objectif réaliste et les interventions adaptées, puis modifier le plan. C'est le cœur de la démarche cyclique.",
    ref: "Référentiel 2009 UE 3.2", diff: 2 },

  { ueId: "3.2", q: "Dans le recueil de données, une donnée « subjective » est :",
    options: ["Une valeur de tension artérielle", "Ce que le patient exprime (douleur ressentie, ressenti)", "Le résultat d'un bilan sanguin", "La fréquence cardiaque mesurée"], correct: 1,
    explication: "Les données subjectives sont rapportées par le patient (douleur, anxiété, ressenti). Les données objectives sont mesurées ou observées (constantes, examens). Les deux sont nécessaires à l'analyse.",
    ref: "Démarche clinique – recueil de données", diff: 1 },

  { ueId: "3.2", q: "Quel élément manque pour rendre cet objectif évaluable : « Le patient s'alimentera mieux » ?",
    options: ["Le nom du patient", "Un critère mesurable et un délai", "Le diagnostic médical", "La signature de l'IDE"], correct: 1,
    explication: "« Mieux » n'est ni mesurable ni daté. Il faudrait préciser un critère (ex. « mangera la moitié de ses plateaux ») et une échéance (« d'ici 3 jours »).",
    ref: "Méthodologie objectifs SMART", diff: 2 },

  { ueId: "3.2", q: "Le diagnostic infirmier « Risque d'atteinte à l'intégrité cutanée » est un diagnostic :",
    options: ["Actuel (le problème existe déjà)", "De type risque (le problème est potentiel)", "Médical", "De bien-être uniquement"], correct: 1,
    explication: "Un diagnostic de risque cible un problème potentiel qui n'est pas encore survenu mais probable (ex. risque d'escarre chez un patient alité). Il n'y a pas de « signes » présents, seulement des facteurs de risque.",
    ref: "Typologie des diagnostics infirmiers", diff: 2 },

  { ueId: "3.2", q: "La planification d'un projet de soins comprend :",
    options: ["Uniquement la rédaction du diagnostic", "La fixation des objectifs ET le choix des interventions", "Seulement la réalisation des soins", "L'évaluation finale"], correct: 1,
    explication: "Planifier, c'est d'abord fixer les objectifs (résultats attendus) puis choisir et prioriser les interventions qui permettront de les atteindre. La réalisation et l'évaluation sont des étapes ultérieures.",
    ref: "Référentiel 2009 UE 3.2", diff: 1 },

  { ueId: "3.2", q: "Un objectif « à court terme » se situe typiquement dans un délai de :",
    options: ["Quelques heures à 48 heures", "2 à 3 mois", "6 mois à 1 an", "Plus d'un an"], correct: 0,
    explication: "Court terme = quelques heures à 48 h (soulager une douleur aiguë). Moyen terme = jours à semaines. Long terme = semaines à mois. Les bornes sont indicatives et dépendent du contexte clinique.",
    ref: "Méthodologie planification des soins", diff: 1 },

  { ueId: "3.2", q: "Quelle proposition décrit correctement une INTERVENTION infirmière (et non un objectif) ?",
    options: ["Le patient sera apyrétique à J2", "Le patient comprendra son traitement", "Réaliser une réfection de pansement quotidienne", "La plaie sera cicatrisée en 10 jours"], correct: 2,
    explication: "« Réaliser une réfection de pansement » est une action du soignant = intervention. Les trois autres décrivent des résultats attendus chez le patient = objectifs.",
    ref: "Référentiel 2009 UE 3.2", diff: 2 },

  { ueId: "3.2", q: "La hiérarchisation des problèmes dans un projet de soins peut s'appuyer sur :",
    options: ["L'ordre alphabétique des diagnostics", "La pyramide des besoins (Maslow / Henderson) et l'urgence vitale", "La date d'admission du patient", "Le nombre de soignants disponibles"], correct: 1,
    explication: "On priorise selon l'urgence vitale et les besoins fondamentaux (cadre de V. Henderson, hiérarchie de Maslow) : les besoins physiologiques et la sécurité priment généralement sur les besoins d'estime.",
    ref: "V. Henderson – 14 besoins fondamentaux", diff: 2 },

  { ueId: "3.2", q: "Le modèle des 14 besoins fondamentaux est attribué à :",
    options: ["Florence Nightingale", "Virginia Henderson", "Hildegard Peplau", "Dorothea Orem"], correct: 1,
    explication: "Virginia Henderson a défini les 14 besoins fondamentaux (respirer, boire/manger, éliminer, se mouvoir, dormir, etc.), cadre conceptuel très utilisé pour structurer le recueil de données et le projet de soins en France.",
    ref: "V. Henderson – Principes de base des soins infirmiers", diff: 1 },

  { ueId: "3.2", q: "Dans une transmission ciblée, la « cible » correspond à :",
    options: ["Le nom du médecin référent", "Un problème ou un événement de santé précis à tracer", "L'objectif de fin d'hospitalisation", "Le numéro de chambre"], correct: 1,
    explication: "La cible nomme le problème ou l'événement traité (ex. « Douleur », « Chute », « Anxiété »). Le contenu se développe ensuite en Données / Actions / Résultats (DAR).",
    ref: "Transmissions ciblées – méthodologie", diff: 1 },

  { ueId: "3.2", q: "Pourquoi un objectif doit-il être formulé « côté patient » plutôt que « côté soignant » ?",
    options: ["Pour réduire la charge de travail", "Parce que c'est plus court à écrire", "Pour pouvoir évaluer un résultat observable chez le patient", "Parce que la loi l'interdit autrement"], correct: 2,
    explication: "Un objectif centré patient décrit un résultat observable et mesurable chez la personne soignée, ce qui rend l'évaluation possible. Formulé côté soignant, il décrit une action, pas un résultat, donc il n'est pas évaluable.",
    ref: "Méthodologie objectifs de soins", diff: 2 },

  { ueId: "3.2", q: "Le caractère « cyclique » de la démarche de soins signifie que :",
    options: ["Elle se répète à l'identique chaque jour", "L'évaluation peut renvoyer aux étapes précédentes pour réajuster", "Elle ne concerne que les soins chroniques", "Elle est figée une fois écrite"], correct: 1,
    explication: "La démarche est itérative : l'évaluation alimente un réajustement qui peut faire revenir au recueil de données, au diagnostic ou à la planification. Le projet de soins est donc évolutif.",
    ref: "Référentiel 2009 UE 3.2", diff: 2 },

  { ueId: "3.2", q: "Une donnée objective parmi les suivantes est :",
    options: ["« J'ai très mal au ventre »", "« Je me sens fatigué »", "Température mesurée à 38,7 °C", "« J'ai peur de l'opération »"], correct: 2,
    explication: "Une température mesurée est une donnée objective (vérifiable, mesurée). Les trois autres sont des données subjectives exprimées par le patient (douleur ressentie, fatigue, peur).",
    ref: "Démarche clinique – recueil de données", diff: 1 },
];

export const flashcards = [
  { ueId: "3.2", recto: "Quelles sont les 6 étapes de la démarche de soins ?", verso: "Recueil de données, analyse, diagnostic infirmier, planification, réalisation, évaluation." },
  { ueId: "3.2", recto: "Que signifie le sigle PES (diagnostic infirmier) ?", verso: "Problème, Étiologie (« lié à »), Signes (« se manifestant par »)." },
  { ueId: "3.2", recto: "Objectif ou intervention : « Le patient marchera 20 m d'ici 48 h » ?", verso: "Objectif (résultat attendu chez le patient, mesurable et daté)." },
  { ueId: "3.2", recto: "Que signifie l'acronyme SMART pour un objectif ?", verso: "Spécifique, Mesurable, Atteignable, Réaliste, Temporel." },
  { ueId: "3.2", recto: "Différence entre diagnostic infirmier et problème en collaboration ?", verso: "Le diagnostic infirmier relève du rôle autonome ; le problème en collaboration relève du rôle prescrit / sur prescription." },
  { ueId: "3.2", recto: "Que signifie DAR dans les transmissions ciblées ?", verso: "Données, Actions, Résultats, articulés autour d'une cible (un problème)." },
  { ueId: "3.2", recto: "Adage médico-légal sur la traçabilité ?", verso: "« Ce qui n'est pas écrit n'est pas fait. »" },
  { ueId: "3.2", recto: "Que recouvre une macrocible MTVED ?", verso: "Maladie, Traitements, Vécu, Environnement, Développement (et autonomie)." },
  { ueId: "3.2", recto: "Données objectives vs subjectives ?", verso: "Objectives = mesurées/observées (constantes, examens). Subjectives = exprimées par le patient (douleur, ressenti)." },
  { ueId: "3.2", recto: "Que faire si un objectif est évalué « non atteint » ?", verso: "Réanalyser diagnostic, objectif et interventions, puis réajuster le projet de soins." },
  { ueId: "3.2", recto: "À qui attribue-t-on les 14 besoins fondamentaux ?", verso: "Virginia Henderson." },
  { ueId: "3.2", recto: "Délai typique d'un objectif à court terme ?", verso: "Quelques heures à 48 heures." },
  { ueId: "3.2", recto: "Qu'est-ce qu'un diagnostic infirmier « de risque » ?", verso: "Un problème potentiel non encore survenu mais probable, défini par des facteurs de risque (ex. risque d'escarre)." },
  { ueId: "3.2", recto: "En quoi consiste la planification dans le projet de soins ?", verso: "Fixer les objectifs (résultats attendus) puis choisir et prioriser les interventions." },
  { ueId: "3.2", recto: "Sur quoi s'appuie la hiérarchisation des problèmes de soins ?", verso: "L'urgence vitale et les besoins fondamentaux (Maslow, Henderson)." },
];
