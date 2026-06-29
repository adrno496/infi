export const fiches = [
  { id: "f_3_5_encadrement_concepts", ueId: "3.5", type: "cours",
    titre: "Encadrement : concepts et fondements",
    resume: "Définitions de l'encadrement, tutorat, accompagnement et collaboration dans le soin.",
    tags: ["encadrement", "tutorat", "collaboration"],
    html: `<h3>De quoi parle-t-on ?</h3>
<p>L'<span class="key" data-term="encadrement">encadrement</span> désigne l'ensemble des actions par lesquelles un professionnel accompagne, guide et évalue une personne (étudiant, stagiaire, aide-soignant, nouvel agent) dans l'exercice ou l'apprentissage des soins. Il vise l'acquisition de compétences et la sécurité du patient.</p>
<ul>
<li><strong>Tutorat</strong> : accompagnement pédagogique d'un étudiant en stage par un professionnel référent (le <span class="key" data-term="tuteur">tuteur</span>).</li>
<li><strong>Accompagnement</strong> : posture de soutien qui favorise l'autonomie progressive de l'apprenant.</li>
<li><strong>Collaboration IDE/AS</strong> : l'IDE peut confier à l'aide-soignant des soins relevant de son champ de compétences, sous sa responsabilité et son contrôle effectif.</li>
</ul>
<h3>Les trois fonctions de l'encadrant</h3>
<ul>
<li><strong>Former</strong> : transmettre savoirs, savoir-faire et savoir-être.</li>
<li><strong>Accompagner</strong> : soutenir, rassurer, donner du sens.</li>
<li><strong>Évaluer</strong> : apprécier la progression et valider des acquis.</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Encadrer n'est pas surveiller : c'est créer les conditions d'un apprentissage sécurisé où l'apprenant peut faire, se tromper et progresser.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Les 3 verbes de l'encadrant : <strong>F.A.É.</strong> = <strong>F</strong>ormer, <strong>A</strong>ccompagner, <strong>É</strong>valuer.</div>`,
    refs: ["UE 3.5"] },

  { id: "f_3_5_tutorat_stage", ueId: "3.5", type: "cours",
    titre: "Le tutorat et l'accueil en stage",
    resume: "Organisation du stage, rôles des acteurs et outils d'évaluation du référentiel 2009.",
    tags: ["stage", "tutorat", "portfolio"],
    html: `<h3>Les acteurs du stage (référentiel 2009)</h3>
<table class="tbl">
<tr><th>Acteur</th><th>Rôle principal</th></tr>
<tr><td><span class="key" data-term="maitre de stage">Maître de stage</span></td><td>Responsabilité institutionnelle et organisationnelle du stage (cadre, responsable de structure).</td></tr>
<tr><td><span class="key" data-term="tuteur">Tuteur de stage</span></td><td>Accompagnement pédagogique, suivi de la progression, évaluation des compétences.</td></tr>
<tr><td>Professionnel de proximité</td><td>Encadrement au quotidien, guidage des activités de soin.</td></tr>
<tr><td>Formateur IFSI référent</td><td>Lien institut/terrain, régulation, accompagnement à distance.</td></tr>
</table>
<h3>Outils de l'alternance</h3>
<ul>
<li><span class="key" data-term="portfolio">Portfolio</span> : document de suivi de l'acquisition des 10 compétences par l'étudiant.</li>
<li><strong>Charte d'encadrement</strong> : engagement entre IFSI et structure d'accueil.</li>
<li><strong>Convention de stage</strong> : cadre administratif et juridique du stage.</li>
<li><strong>Livret d'accueil</strong> : présentation du lieu, des objectifs et ressources.</li>
</ul>
<h3>Étapes de l'encadrement en stage</h3>
<ul>
<li><strong>Accueil</strong> : présentation, objectifs, repérage des acquis.</li>
<li><strong>Suivi</strong> : entretiens intermédiaires, ajustement des objectifs.</li>
<li><strong>Bilan</strong> : entretien final, évaluation des compétences au portfolio.</li>
</ul>
<div class="callout"><div class="callout-t">Important</div>Le tuteur évalue des <strong>compétences</strong> (mises en situation), pas seulement des actes isolés. L'attribution des crédits ECTS du stage relève de la commission d'attribution des crédits de formation (CAC) de l'IFSI.</div>`,
    refs: ["UE 3.5"] },

  { id: "f_3_5_pedagogie_evaluation", ueId: "3.5", type: "cours",
    titre: "Pédagogie et évaluation de l'apprenant",
    resume: "Objectifs pédagogiques, feedback constructif et critères d'une évaluation juste.",
    tags: ["pedagogie", "evaluation", "feedback"],
    html: `<h3>Construire un objectif pédagogique</h3>
<p>Un bon objectif est <span class="key" data-term="objectif SMART">SMART</span> : Spécifique, Mesurable, Atteignable, Réaliste, Temporellement défini. Il décrit ce que l'apprenant devra être capable de <em>faire</em>.</p>
<h3>Les trois domaines d'apprentissage</h3>
<ul>
<li><strong>Cognitif</strong> : savoirs (connaissances).</li>
<li><strong>Psychomoteur</strong> : savoir-faire (gestes techniques).</li>
<li><strong>Affectif</strong> : savoir-être (attitudes, relation).</li>
</ul>
<h3>Le feedback (rétroaction)</h3>
<ul>
<li>Descriptif et factuel, centré sur l'action et non sur la personne.</li>
<li>Donné rapidement, dans un cadre bienveillant.</li>
<li>Équilibré : valoriser les réussites, cibler les axes de progrès.</li>
</ul>
<table class="tbl">
<tr><th>Type d'évaluation</th><th>But</th><th>Moment</th></tr>
<tr><td>Diagnostique</td><td>Repérer les acquis initiaux</td><td>Au début</td></tr>
<tr><td>Formative</td><td>Réguler et faire progresser</td><td>En cours</td></tr>
<tr><td>Sommative / certificative</td><td>Valider, attribuer un niveau</td><td>À la fin</td></tr>
</table>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>L'évaluation <strong>formative</strong> = <strong>F</strong>orme et fait progresser ; la <strong>sommative</strong> = fait la <strong>S</strong>omme et certifie.</div>
<div class="callout"><div class="callout-t">À retenir</div>Évaluer, c'est comparer une performance à un <strong>critère</strong> explicite et partagé. Sans critère annoncé, l'évaluation devient subjective et injuste.</div>`,
    refs: ["UE 3.5"] },

  { id: "f_3_5_delegation_responsabilite", ueId: "3.5", type: "cours",
    titre: "Collaboration IDE/AS et responsabilité",
    resume: "Cadre de la collaboration avec l'aide-soignant et engagement de responsabilité de l'IDE.",
    tags: ["collaboration", "aide-soignant", "responsabilite"],
    html: `<h3>Collaboration IDE / aide-soignant</h3>
<p>L'aide-soignant exerce sous la <span class="key" data-term="responsabilite">responsabilité</span> de l'infirmier. Dans le cadre du rôle propre, l'IDE peut lui confier la réalisation de soins relevant de son champ de compétences, sous son contrôle effectif et en fonction de la situation clinique du patient.</p>
<ul>
<li>L'IDE reste responsable de l'<strong>organisation</strong>, de la <strong>surveillance</strong> et de l'évaluation des soins confiés.</li>
<li>Confier un soin suppose d'apprécier la compétence de la personne et la stabilité de l'état du patient.</li>
<li>Soins non transférables : ceux relevant du rôle propre infirmier nécessitant son jugement clinique, et tout soin sur prescription médicale.</li>
</ul>
<h3>Conditions d'une collaboration sûre</h3>
<ul>
<li><strong>Bonne tâche</strong> : adaptée à la compétence de l'aide-soignant.</li>
<li><strong>Bonne personne</strong> : qualifiée et formée.</li>
<li><strong>Bon contexte</strong> : patient stable, situation prévisible.</li>
<li><strong>Bonne information / communication</strong> : consignes claires.</li>
<li><strong>Bonne supervision</strong> : surveillance et compte rendu.</li>
</ul>
<h3>Les trois responsabilités du professionnel</h3>
<table class="tbl">
<tr><th>Type</th><th>Objet</th><th>Sanction</th></tr>
<tr><td>Civile</td><td>Réparer un dommage causé à autrui</td><td>Indemnisation (dommages-intérêts)</td></tr>
<tr><td>Pénale</td><td>Infraction à la loi</td><td>Amende, emprisonnement</td></tr>
<tr><td>Disciplinaire / ordinale</td><td>Manquement aux règles professionnelles</td><td>Avertissement, blâme, interdiction d'exercer</td></tr>
</table>
<div class="callout"><div class="callout-t">À retenir</div>Encadrer engage la responsabilité de l'IDE : confier un soin ne signifie jamais s'en décharger. La surveillance et la traçabilité restent obligatoires.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Les 5 « bons » de la collaboration : bonne <strong>tâche</strong>, bonne <strong>personne</strong>, bon <strong>contexte</strong>, bonne <strong>info</strong>, bonne <strong>supervision</strong>.</div>`,
    refs: ["UE 3.5"] },
];

export const qcm = [
  { ueId: "3.5", q: "Quelle est la fonction qui ne fait PAS partie des trois fonctions de base de l'encadrant ?", options: ["Former", "Accompagner", "Évaluer", "Sanctionner"], correct: 3,
    explication: "Les trois fonctions de l'encadrant sont former, accompagner et évaluer. Sanctionner relève d'une logique disciplinaire et non pédagogique : l'encadrement vise l'apprentissage, pas la punition.", ref: "UE 3.5", diff: 1 },

  { ueId: "3.5", q: "Dans le référentiel de 2009, qui assure l'accompagnement pédagogique et le suivi de la progression de l'étudiant en stage ?", options: ["Le maître de stage", "Le tuteur de stage", "Le directeur de l'IFSI", "Le médecin chef de service"], correct: 1,
    explication: "Le tuteur de stage est chargé de l'accompagnement pédagogique, du suivi de la progression et de l'évaluation des compétences. Le maître de stage a, lui, une responsabilité organisationnelle et institutionnelle.", ref: "UE 3.5", diff: 1 },

  { ueId: "3.5", q: "Quel document permet à l'étudiant de suivre l'acquisition de ses 10 compétences durant sa formation ?", options: ["La convention de stage", "Le portfolio", "La charte d'encadrement", "Le livret d'accueil"], correct: 1,
    explication: "Le portfolio est l'outil de suivi de l'acquisition des dix compétences du référentiel infirmier. La convention encadre administrativement le stage, la charte engage IFSI et structure, le livret d'accueil présente le lieu.", ref: "UE 3.5", diff: 1 },

  { ueId: "3.5", q: "Un objectif pédagogique formulé selon la méthode SMART doit notamment être :", options: ["Subjectif", "Mesurable", "Permanent", "Secret"], correct: 1,
    explication: "SMART signifie Spécifique, Mesurable, Atteignable, Réaliste et Temporellement défini. Un objectif doit être mesurable pour pouvoir être évalué objectivement.", ref: "UE 3.5", diff: 1 },

  { ueId: "3.5", q: "L'évaluation dont le but est de réguler l'apprentissage et de faire progresser l'apprenant en cours de stage est dite :", options: ["Diagnostique", "Formative", "Sommative", "Certificative"], correct: 1,
    explication: "L'évaluation formative intervient en cours d'apprentissage : elle informe l'apprenant de sa progression et permet d'ajuster. La sommative/certificative valide en fin de parcours, la diagnostique repère les acquis de départ.", ref: "UE 3.5", diff: 1 },

  { ueId: "3.5", q: "Concernant la collaboration IDE/aide-soignant, quelle affirmation est exacte ?", options: ["L'aide-soignant agit en totale autonomie", "L'aide-soignant exerce sous la responsabilité de l'infirmier", "L'IDE n'a plus à surveiller les soins confiés", "Tout soin peut être confié sans condition"], correct: 1,
    explication: "L'aide-soignant exerce sous la responsabilité de l'infirmier. L'IDE conserve la responsabilité de l'organisation, de la surveillance et de l'évaluation des soins confiés ; la collaboration est conditionnée par la compétence de la personne et l'état du patient.", ref: "UE 3.5", diff: 2 },

  { ueId: "3.5", q: "Quelle responsabilité a pour finalité la réparation d'un dommage causé à un patient (indemnisation) ?", options: ["La responsabilité pénale", "La responsabilité civile", "La responsabilité disciplinaire", "La responsabilité morale"], correct: 1,
    explication: "La responsabilité civile vise à réparer un dommage par le versement de dommages-intérêts. La responsabilité pénale sanctionne une infraction (amende, prison), la disciplinaire un manquement professionnel.", ref: "UE 3.5", diff: 2 },

  { ueId: "3.5", q: "Quel est le premier temps de l'encadrement d'un étudiant arrivant en stage ?", options: ["Le bilan final", "L'accueil et la définition des objectifs", "L'évaluation sommative", "La sanction"], correct: 1,
    explication: "L'accueil est le premier temps : présentation du service, repérage des acquis et co-construction des objectifs. Le suivi puis le bilan viennent ensuite.", ref: "UE 3.5", diff: 1 },

  { ueId: "3.5", q: "Le savoir-faire (gestes techniques) relève de quel domaine d'apprentissage ?", options: ["Cognitif", "Psychomoteur", "Affectif", "Social"], correct: 1,
    explication: "Le domaine psychomoteur concerne les savoir-faire et gestes techniques. Le cognitif concerne les savoirs/connaissances, l'affectif le savoir-être et les attitudes.", ref: "UE 3.5", diff: 1 },

  { ueId: "3.5", q: "Un feedback de qualité donné à un étudiant doit être :", options: ["Centré sur la personne et son caractère", "Descriptif, factuel et centré sur l'action", "Différé de plusieurs semaines", "Uniquement négatif pour marquer les esprits"], correct: 1,
    explication: "Un bon feedback est descriptif, factuel, centré sur l'action (pas sur la personne), donné rapidement et de façon bienveillante et équilibrée. Il valorise les réussites tout en ciblant les axes de progrès.", ref: "UE 3.5", diff: 2 },

  { ueId: "3.5", q: "Quel document constitue l'engagement réciproque entre l'IFSI et la structure d'accueil concernant l'encadrement des étudiants ?", options: ["Le portfolio", "La charte d'encadrement", "Le bulletin de salaire", "Le décret de compétences"], correct: 1,
    explication: "La charte d'encadrement formalise l'engagement réciproque entre l'institut de formation et la structure d'accueil sur les conditions d'encadrement. Le portfolio suit les compétences de l'étudiant.", ref: "UE 3.5", diff: 2 },

  { ueId: "3.5", q: "Avant de confier un soin à un aide-soignant, l'IDE doit s'assurer principalement de :", options: ["La couleur de la tenue", "La compétence de la personne et de la stabilité de l'état du patient", "L'ancienneté la plus élevée du service", "Rien, la décision est libre"], correct: 1,
    explication: "Une collaboration sûre suppose d'apprécier la compétence de la personne à qui l'on confie le soin et la stabilité/prévisibilité de l'état du patient. C'est la base d'une collaboration sécurisée.", ref: "UE 3.5", diff: 2 },

  { ueId: "3.5", q: "L'évaluation réalisée en début de stage pour repérer les acquis initiaux de l'étudiant est dite :", options: ["Diagnostique", "Formative", "Sommative", "Terminale"], correct: 0,
    explication: "L'évaluation diagnostique se situe en amont : elle identifie les connaissances et compétences déjà acquises afin d'adapter les objectifs. La formative régule en cours, la sommative certifie en fin.", ref: "UE 3.5", diff: 2 },

  { ueId: "3.5", q: "Quelle posture caractérise l'accompagnement d'un apprenant ?", options: ["Faire à sa place systématiquement", "Favoriser progressivement son autonomie", "Le laisser seul sans suivi", "Imposer une seule façon de faire"], correct: 1,
    explication: "L'accompagnement vise l'autonomie progressive : l'encadrant soutient, guide, donne du sens, puis se retire au fur et à mesure que l'apprenant gagne en compétence. Ni faire à sa place, ni l'abandonner.", ref: "UE 3.5", diff: 1 },

  { ueId: "3.5", q: "Le fait pour un professionnel de répondre d'une infraction à la loi pénale relève de :", options: ["La responsabilité civile", "La responsabilité pénale", "La responsabilité administrative", "La responsabilité contractuelle"], correct: 1,
    explication: "La responsabilité pénale est engagée en cas d'infraction définie par la loi (mise en danger, blessures involontaires...). Les sanctions sont des peines : amende, emprisonnement.", ref: "UE 3.5", diff: 2 },

  { ueId: "3.5", q: "Pour qu'une évaluation soit juste et objective, il faut avant tout :", options: ["Des critères explicites et partagés", "Une notation au hasard", "L'avis d'un seul évaluateur secret", "Aucune référence préalable"], correct: 0,
    explication: "Évaluer consiste à comparer une performance à un critère explicite et connu de l'apprenant. Sans critère annoncé, l'évaluation devient subjective et inéquitable.", ref: "UE 3.5", diff: 2 },

  { ueId: "3.5", q: "Quel professionnel assure l'encadrement au quotidien et le guidage des activités de soin de l'étudiant ?", options: ["Le formateur référent de l'IFSI", "Le professionnel de proximité", "Le maître de stage", "Le directeur des soins"], correct: 1,
    explication: "Le professionnel de proximité encadre l'étudiant au jour le jour dans les activités de soin. Le tuteur assure le suivi pédagogique global, le formateur référent fait le lien institut/terrain.", ref: "UE 3.5", diff: 2 },

  { ueId: "3.5", q: "Lorsqu'un IDE confie un soin à un aide-soignant compétent, qu'advient-il de sa responsabilité ?", options: ["Elle est totalement transférée à l'aide-soignant", "Elle demeure : l'IDE garde la surveillance et la traçabilité", "Elle disparaît", "Elle est partagée avec le patient"], correct: 1,
    explication: "Confier un soin ne décharge pas l'IDE de sa responsabilité. Il reste tenu d'organiser, de surveiller, d'évaluer et d'assurer la traçabilité des soins confiés.", ref: "UE 3.5", diff: 3 },

  { ueId: "3.5", q: "Quelle évaluation a une visée certificative, c'est-à-dire la validation d'un niveau de compétence ?", options: ["Diagnostique", "Formative", "Sommative", "Pronostique"], correct: 2,
    explication: "L'évaluation sommative (ou certificative) intervient en fin de séquence pour valider et attribuer un niveau. Elle fait la somme des acquis, à la différence de la formative qui régule en continu.", ref: "UE 3.5", diff: 2 },

  { ueId: "3.5", q: "Parmi ces éléments, lequel n'est PAS un domaine d'apprentissage classiquement décrit ?", options: ["Cognitif", "Psychomoteur", "Affectif", "Économique"], correct: 3,
    explication: "Les trois domaines d'apprentissage sont le cognitif (savoirs), le psychomoteur (savoir-faire) et l'affectif (savoir-être). Le domaine économique n'en fait pas partie.", ref: "UE 3.5", diff: 1 },

  { ueId: "3.5", q: "La validation finale d'un stage et l'attribution des crédits ECTS relèvent de :", options: ["La seule décision du tuteur", "La commission d'attribution des crédits (CAC) de l'IFSI", "Du patient encadré", "De l'aide-soignant du service"], correct: 1,
    explication: "Le tuteur évalue et renseigne le portfolio, mais l'attribution des crédits ECTS et la validation du stage relèvent de la commission d'attribution des crédits de formation (CAC) de l'IFSI, qui statue au regard des éléments d'évaluation.", ref: "UE 3.5", diff: 3 },

  { ueId: "3.5", q: "Combien de compétences le référentiel de formation infirmier de 2009 définit-il ?", options: ["5", "8", "10", "15"], correct: 2,
    explication: "Le référentiel de formation infirmier de 2009 décline le métier en 10 compétences, évaluées en stage et tracées dans le portfolio de l'étudiant.", ref: "UE 3.5", diff: 1 },

  { ueId: "3.5", q: "Concernant l'évaluation formative, quelle affirmation est exacte ?", options: ["Elle attribue une note définitive", "Elle est sans enjeu de certification et vise la progression", "Elle se déroule uniquement à l'examen final", "Elle exclut tout retour à l'apprenant"], correct: 1,
    explication: "L'évaluation formative est non certificative : son enjeu est pédagogique. Elle informe l'apprenant sur ce qui est acquis et ce qui reste à travailler, sans sanction de réussite ou d'échec.", ref: "UE 3.5", diff: 2 },

  { ueId: "3.5", q: "Quelle responsabilité peut conduire à une interdiction d'exercer prononcée par l'ordre infirmier ?", options: ["Civile", "Pénale", "Disciplinaire/ordinale", "Contractuelle"], correct: 2,
    explication: "La responsabilité disciplinaire/ordinale sanctionne les manquements aux règles professionnelles et déontologiques. Les sanctions vont de l'avertissement au blâme jusqu'à l'interdiction temporaire ou définitive d'exercer.", ref: "UE 3.5", diff: 3 },
];

export const flashcards = [
  { ueId: "3.5", recto: "Quelles sont les trois fonctions de l'encadrant ?", verso: "Former, accompagner et évaluer." },
  { ueId: "3.5", recto: "Qui assure l'accompagnement pédagogique de l'étudiant en stage ?", verso: "Le tuteur de stage." },
  { ueId: "3.5", recto: "Quel est le rôle du maître de stage ?", verso: "La responsabilité organisationnelle et institutionnelle du stage." },
  { ueId: "3.5", recto: "Quel outil suit l'acquisition des 10 compétences de l'étudiant ?", verso: "Le portfolio." },
  { ueId: "3.5", recto: "Que signifie l'acronyme SMART pour un objectif pédagogique ?", verso: "Spécifique, Mesurable, Atteignable, Réaliste, Temporellement défini." },
  { ueId: "3.5", recto: "Quels sont les trois temps de l'encadrement en stage ?", verso: "Accueil, suivi, bilan." },
  { ueId: "3.5", recto: "Quels sont les trois domaines d'apprentissage ?", verso: "Cognitif (savoirs), psychomoteur (savoir-faire), affectif (savoir-être)." },
  { ueId: "3.5", recto: "À quoi sert l'évaluation formative ?", verso: "À réguler l'apprentissage et faire progresser l'apprenant en cours de formation, sans enjeu de certification." },
  { ueId: "3.5", recto: "À quoi sert l'évaluation diagnostique ?", verso: "À repérer les acquis initiaux de l'apprenant, en début de parcours." },
  { ueId: "3.5", recto: "Sous la responsabilité de qui exerce l'aide-soignant ?", verso: "Sous la responsabilité de l'infirmier (IDE)." },
  { ueId: "3.5", recto: "Quelles sont les trois grandes responsabilités du professionnel de santé ?", verso: "Civile (réparation), pénale (infraction), disciplinaire/ordinale (manquement professionnel)." },
  { ueId: "3.5", recto: "Que vise la responsabilité civile ?", verso: "La réparation d'un dommage par des dommages-intérêts." },
  { ueId: "3.5", recto: "Confier un soin à un aide-soignant décharge-t-il l'IDE de sa responsabilité ?", verso: "Non : l'IDE garde l'organisation, la surveillance, l'évaluation et la traçabilité." },
  { ueId: "3.5", recto: "Sur quoi un feedback de qualité doit-il porter ?", verso: "Sur l'action de façon descriptive et factuelle, jamais sur la personne ; donné vite et avec bienveillance." },
  { ueId: "3.5", recto: "Quelle condition rend une évaluation juste et objective ?", verso: "Des critères explicites, annoncés et partagés avec l'apprenant." },
  { ueId: "3.5", recto: "Qui valide le stage et attribue les crédits ECTS ?", verso: "La commission d'attribution des crédits (CAC) de l'IFSI." },
  { ueId: "3.5", recto: "Quel document engage IFSI et structure d'accueil sur l'encadrement ?", verso: "La charte d'encadrement." },
  { ueId: "3.5", recto: "Combien de compétences le référentiel infirmier de 2009 définit-il ?", verso: "10 compétences." },
  { ueId: "3.5", recto: "Quels sont les 5 « bons » d'une collaboration sûre IDE/AS ?", verso: "Bonne tâche, bonne personne, bon contexte, bonne information, bonne supervision." },
];
