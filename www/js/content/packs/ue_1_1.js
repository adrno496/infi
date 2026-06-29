// UE 1.1 — Psychologie, sociologie, anthropologie (Sciences humaines, S1-S2). Pack seed.
export const fiches = [
  {
    id: "f_1_1_psychologie", ueId: "1.1", type: "cours",
    titre: "Psychologie — concepts fondamentaux",
    resume: "Grands courants de la psychologie et notions utiles à la relation de soin.",
    tags: ["psychologie", "freud", "développement", "défense"],
    html: `
      <h3>Définition et champ</h3>
      <p>La <span class="key" data-term="psychologie">psychologie</span> est l'étude scientifique des comportements, des processus mentaux (perception, mémoire, émotion, pensée) et de la vie psychique. Elle éclaire la compréhension de la personne soignée.</p>
      <h3>Les grands courants</h3>
      <ul>
        <li><strong>Psychanalyse</strong> (Freud) : inconscient, pulsions, conflits psychiques ; instances <strong>Ça / Moi / Surmoi</strong>.</li>
        <li><strong>Behaviorisme</strong> (Watson, Skinner) : étude du comportement observable ; conditionnement.</li>
        <li><strong>Psychologie cognitive</strong> : traitement de l'information (attention, mémoire, raisonnement).</li>
        <li><strong>Approche humaniste</strong> (Rogers, Maslow) : personne, besoins, développement du potentiel.</li>
      </ul>
      <h3>Mécanismes de défense</h3>
      <p>Processus inconscients qui protègent le Moi de l'angoisse : <span class="key" data-term="déni">déni</span>, refoulement, projection, régression, sublimation, déplacement, rationalisation.</p>
      <div class="callout"><div class="callout-t">À retenir</div>Repérer un mécanisme de défense (déni d'un diagnostic, régression à l'hôpital) aide à <strong>comprendre</strong> sans juger, et à adapter la relation de soin.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Les 3 instances de Freud : <strong>« Ça » veut</strong> (pulsions), <strong>« Surmoi » interdit</strong> (morale), <strong>« Moi » arbitre</strong> (réalité).</div>
    `,
    refs: ["UE 1.1"],
  },
  {
    id: "f_1_1_developpement", ueId: "1.1", type: "cours",
    titre: "Développement de la personne et stades",
    resume: "Étapes du développement psychoaffectif et cognitif tout au long de la vie.",
    tags: ["développement", "freud", "piaget", "erikson", "attachement"],
    html: `
      <h3>Stades psychosexuels (Freud)</h3>
      <ul>
        <li><strong>Oral</strong> (0-1 an), <strong>anal</strong> (1-3 ans), <strong>phallique/œdipien</strong> (3-6 ans), <strong>latence</strong> (6-12 ans), <strong>génital</strong> (puberté).</li>
      </ul>
      <h3>Développement cognitif (Piaget)</h3>
      <ul>
        <li><strong>Sensori-moteur</strong> (0-2 ans) : permanence de l'objet.</li>
        <li><strong>Préopératoire</strong> (2-7 ans) : pensée symbolique, égocentrisme.</li>
        <li><strong>Opérations concrètes</strong> (7-11 ans) : logique, conservation.</li>
        <li><strong>Opérations formelles</strong> (dès 11-12 ans) : raisonnement abstrait.</li>
      </ul>
      <h3>Théorie de l'attachement (Bowlby)</h3>
      <p>Le lien d'<span class="key" data-term="attachement">attachement</span> précoce enfant-figure de soin influence la sécurité affective. La séparation (hospitalisation) peut générer une <strong>angoisse de séparation</strong>.</p>
      <div class="callout"><div class="callout-t">Lien soin</div>Connaître l'âge développemental aide à expliquer un soin à un enfant ou à comprendre une régression chez l'adulte malade.</div>
    `,
    refs: ["UE 1.1"],
  },
  {
    id: "f_1_1_sociologie", ueId: "1.1", type: "cours",
    titre: "Sociologie — société, groupes et santé",
    resume: "Concepts sociologiques clés et déterminants sociaux de la santé.",
    tags: ["sociologie", "socialisation", "déterminants", "inégalités"],
    html: `
      <h3>Définition</h3>
      <p>La <span class="key" data-term="sociologie">sociologie</span> étudie les sociétés humaines, les groupes sociaux, les liens et les faits sociaux (Durkheim) qui s'imposent à l'individu.</p>
      <h3>Notions clés</h3>
      <ul>
        <li><strong>Socialisation</strong> : processus d'intégration des normes et valeurs (primaire = famille ; secondaire = école, travail).</li>
        <li><strong>Norme</strong> et <strong>valeur</strong> : règles de conduite et idéaux partagés.</li>
        <li><strong>Statut</strong> (position sociale) et <strong>rôle</strong> (comportement attendu).</li>
        <li><strong>Groupe</strong>, <strong>institution</strong>, <strong>culture</strong>.</li>
      </ul>
      <h3>Déterminants sociaux de la santé</h3>
      <p>Revenus, niveau d'éducation, logement, travail, accès aux soins influencent l'état de santé : ce sont les <span class="key" data-term="inégalités sociales de santé">inégalités sociales de santé</span>.</p>
      <div class="callout warn"><div class="callout-t">Clinique</div>Le soin doit prendre en compte le contexte social (précarité, isolement) du patient, pas seulement la maladie.</div>
    `,
    refs: ["UE 1.1"],
  },
  {
    id: "f_1_1_anthropologie", ueId: "1.1", type: "cours",
    titre: "Anthropologie — culture, croyances et soin",
    resume: "Approche anthropologique de la maladie, du corps et de la mort dans le soin.",
    tags: ["anthropologie", "culture", "représentations", "ethnocentrisme"],
    html: `
      <h3>Définition</h3>
      <p>L'<span class="key" data-term="anthropologie">anthropologie</span> étudie l'être humain dans sa diversité culturelle : croyances, rites, rapport au corps, à la maladie, à la mort.</p>
      <h3>Notions essentielles</h3>
      <ul>
        <li><strong>Culture</strong> : ensemble de connaissances, croyances, valeurs et pratiques partagées.</li>
        <li><strong>Représentations</strong> de la maladie : la maladie a un <strong>sens</strong> (punition, déséquilibre, malchance) variable selon les cultures.</li>
        <li><strong>Rites</strong> de passage : naissance, mariage, mort.</li>
        <li><span class="key" data-term="ethnocentrisme">Ethnocentrisme</span> : juger une autre culture à partir de ses propres normes — à éviter en soin.</li>
      </ul>
      <div class="callout"><div class="callout-t">À retenir</div>L'<strong>approche transculturelle</strong> du soin respecte les croyances du patient (alimentation, pudeur, rites funéraires) sans préjugé.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>PSY = personne</strong>, <strong>SOCIO = société</strong>, <strong>ANTHRO = culture</strong> : trois regards complémentaires sur le patient.</div>
    `,
    refs: ["UE 1.1"],
  },
];
export const qcm = [
  { ueId: "1.1", q: "La psychologie est définie comme :", options: ["L'étude des sociétés humaines", "L'étude scientifique du comportement et des processus mentaux", "L'étude des cultures", "L'étude des maladies mentales uniquement"], correct: 1, explication: "La psychologie étudie le comportement et la vie psychique (perception, émotion, pensée). L'étude des sociétés relève de la sociologie et celle des cultures de l'anthropologie.", ref: "UE 1.1", diff: 1 },
  { ueId: "1.1", q: "Selon Freud, quelle instance représente les exigences morales et les interdits ?", options: ["Le Ça", "Le Moi", "Le Surmoi", "L'inconscient"], correct: 2, explication: "Le Surmoi incarne la morale et les interdits intériorisés ; le Ça est le siège des pulsions ; le Moi arbitre entre les deux et la réalité.", ref: "UE 1.1", diff: 2 },
  { ueId: "1.1", q: "Le déni est un exemple de :", options: ["Trouble de la mémoire", "Mécanisme de défense", "Maladie psychiatrique", "Fait social"], correct: 1, explication: "Le déni est un mécanisme de défense inconscient qui refuse la réalité angoissante (ex. déni d'un diagnostic grave).", ref: "UE 1.1", diff: 1 },
  { ueId: "1.1", q: "Le courant qui étudie uniquement le comportement observable est :", options: ["La psychanalyse", "Le behaviorisme", "L'approche humaniste", "La psychologie cognitive"], correct: 1, explication: "Le behaviorisme (Watson, Skinner) se centre sur le comportement observable et le conditionnement, par opposition à la psychanalyse qui explore l'inconscient.", ref: "UE 1.1", diff: 2 },
  { ueId: "1.1", q: "Selon Piaget, la permanence de l'objet est acquise au stade :", options: ["Préopératoire", "Sensori-moteur", "Des opérations concrètes", "Des opérations formelles"], correct: 1, explication: "La permanence de l'objet (l'objet existe même hors de vue) s'acquiert au stade sensori-moteur (0-2 ans).", ref: "UE 1.1", diff: 2 },
  { ueId: "1.1", q: "Le raisonnement abstrait apparaît, selon Piaget, au stade :", options: ["Sensori-moteur", "Préopératoire", "Des opérations concrètes", "Des opérations formelles"], correct: 3, explication: "Le stade des opérations formelles (dès 11-12 ans) permet le raisonnement abstrait et hypothético-déductif.", ref: "UE 1.1", diff: 2 },
  { ueId: "1.1", q: "La théorie de l'attachement a été développée par :", options: ["Freud", "Piaget", "Bowlby", "Durkheim"], correct: 2, explication: "John Bowlby a théorisé l'attachement, lien affectif précoce entre l'enfant et sa figure de soin.", ref: "UE 1.1", diff: 2 },
  { ueId: "1.1", q: "La socialisation primaire se déroule principalement :", options: ["À l'école et au travail", "Au sein de la famille durant l'enfance", "Dans les médias", "À l'hôpital"], correct: 1, explication: "La socialisation primaire (enfance) se fait surtout dans la famille ; la socialisation secondaire intervient ensuite via l'école, le travail, etc.", ref: "UE 1.1", diff: 1 },
  { ueId: "1.1", q: "En sociologie, le « rôle » désigne :", options: ["La position occupée dans la société", "Le comportement attendu lié à un statut", "Une croyance partagée", "Un mécanisme de défense"], correct: 1, explication: "Le rôle est l'ensemble des comportements attendus associés à un statut (position sociale).", ref: "UE 1.1", diff: 2 },
  { ueId: "1.1", q: "Le sociologue qui a défini le « fait social » est :", options: ["Émile Durkheim", "Max Weber", "Sigmund Freud", "Carl Rogers"], correct: 0, explication: "Émile Durkheim, fondateur de la sociologie française, a défini le fait social comme une manière d'agir qui s'impose à l'individu.", ref: "UE 1.1", diff: 2 },
  { ueId: "1.1", q: "Les déterminants sociaux de la santé incluent :", options: ["Le revenu, l'éducation et le logement", "Le groupe sanguin", "La génétique seule", "L'âge uniquement"], correct: 0, explication: "Revenu, niveau d'éducation, logement, travail et accès aux soins sont des déterminants sociaux qui influencent l'état de santé.", ref: "UE 1.1", diff: 1 },
  { ueId: "1.1", q: "L'anthropologie s'intéresse avant tout :", options: ["Au fonctionnement des organes", "À l'être humain dans sa diversité culturelle", "Aux statistiques de population", "Aux mécanismes de défense"], correct: 1, explication: "L'anthropologie étudie l'humain dans sa diversité culturelle : croyances, rites, rapport au corps, à la maladie et à la mort.", ref: "UE 1.1", diff: 1 },
  { ueId: "1.1", q: "L'ethnocentrisme consiste à :", options: ["Respecter les cultures des autres", "Juger une autre culture selon ses propres normes", "Étudier les rites de passage", "Promouvoir la diversité"], correct: 1, explication: "L'ethnocentrisme juge les autres cultures à partir de ses propres références ; il est à éviter dans une approche de soin transculturelle.", ref: "UE 1.1", diff: 2 },
  { ueId: "1.1", q: "L'approche humaniste en psychologie est représentée par :", options: ["Skinner et Watson", "Rogers et Maslow", "Freud et Jung", "Piaget et Vygotsky"], correct: 1, explication: "Carl Rogers et Abraham Maslow incarnent l'approche humaniste, centrée sur la personne et le développement de son potentiel.", ref: "UE 1.1", diff: 2 },
  { ueId: "1.1", q: "Au sommet de la pyramide des besoins de Maslow se trouve :", options: ["Les besoins physiologiques", "Le besoin de sécurité", "Le besoin d'appartenance", "Le besoin de réalisation de soi"], correct: 3, explication: "La pyramide de Maslow culmine avec le besoin de réalisation de soi, au-dessus des besoins physiologiques, de sécurité, d'appartenance et d'estime.", ref: "UE 1.1", diff: 1 },
  { ueId: "1.1", q: "La régression observée chez un patient hospitalisé est :", options: ["Un signe de démence", "Un mécanisme de défense face à l'angoisse", "Une norme sociale", "Un rite de passage"], correct: 1, explication: "La régression (retour à des comportements antérieurs, dépendance) est un mécanisme de défense fréquent face à l'angoisse de la maladie et de l'hospitalisation.", ref: "UE 1.1", diff: 2 },
  { ueId: "1.1", q: "Le complexe d'Œdipe se situe, chez Freud, au stade :", options: ["Oral", "Anal", "Phallique", "Génital"], correct: 2, explication: "Le complexe d'Œdipe se déroule au stade phallique (œdipien), entre 3 et 6 ans environ.", ref: "UE 1.1", diff: 3 },
  { ueId: "1.1", q: "Les représentations culturelles de la maladie signifient que :", options: ["La maladie a le même sens partout", "Le sens donné à la maladie varie selon les cultures", "La maladie n'a aucun sens", "Seuls les soignants donnent un sens à la maladie"], correct: 1, explication: "Selon les cultures, la maladie peut être interprétée comme une punition, un déséquilibre, un sort, etc. : le sens varie d'une culture à l'autre.", ref: "UE 1.1", diff: 2 },
  { ueId: "1.1", q: "La sublimation est un mécanisme de défense qui consiste à :", options: ["Nier la réalité", "Rejeter sur autrui ses propres pulsions", "Transformer une pulsion en activité socialement valorisée", "Revenir à un stade antérieur"], correct: 2, explication: "La sublimation détourne une pulsion vers un but socialement valorisé (art, sport, engagement) ; la projection rejette sur autrui, le déni nie la réalité, la régression revient en arrière.", ref: "UE 1.1", diff: 3 },
  { ueId: "1.1", q: "Une « valeur » en sociologie désigne :", options: ["Une règle de conduite précise", "Un idéal partagé orientant les comportements", "Une position sociale", "Un comportement observable"], correct: 1, explication: "Une valeur est un idéal collectif (justice, solidarité) ; la norme en est la traduction concrète sous forme de règle de conduite.", ref: "UE 1.1", diff: 2 },
  { ueId: "1.1", q: "L'approche transculturelle du soin vise à :", options: ["Imposer les normes du soignant au patient", "Respecter les croyances et pratiques culturelles du patient", "Ignorer le contexte culturel", "Soigner uniquement la maladie"], correct: 1, explication: "L'approche transculturelle prend en compte et respecte les croyances, pratiques (alimentation, pudeur, rites) du patient, sans ethnocentrisme.", ref: "UE 1.1", diff: 1 },
  { ueId: "1.1", q: "Dans la pyramide de Maslow, le niveau situé juste au-dessus des besoins physiologiques est :", options: ["Le besoin de sécurité", "Le besoin d'appartenance", "Le besoin d'estime", "Le besoin de réalisation de soi"], correct: 0, explication: "L'ordre ascendant de Maslow est : physiologiques, sécurité, appartenance, estime, réalisation de soi. Le besoin de sécurité vient donc juste après les besoins physiologiques.", ref: "UE 1.1", diff: 2 },
  { ueId: "1.1", q: "La projection est un mécanisme de défense qui consiste à :", options: ["Attribuer à autrui ses propres pensées ou pulsions inacceptables", "Transformer une pulsion en activité valorisée", "Oublier un souvenir pénible", "Revenir à un comportement infantile"], correct: 0, explication: "La projection consiste à attribuer à autrui ses propres affects, désirs ou pulsions jugés inacceptables. Le refoulement écarte un souvenir de la conscience, la sublimation transforme la pulsion, la régression revient en arrière.", ref: "UE 1.1", diff: 3 },
  { ueId: "1.1", q: "Le conditionnement classique (réflexe conditionné) a été mis en évidence par :", options: ["Skinner", "Pavlov", "Rogers", "Bandura"], correct: 1, explication: "Ivan Pavlov a décrit le conditionnement classique (chien salivant au son). Skinner a, lui, théorisé le conditionnement opérant (renforcement). Tous deux relèvent du behaviorisme.", ref: "UE 1.1", diff: 2 },
];
export const flashcards = [
  { ueId: "1.1", recto: "Que définit la psychologie ?", verso: "L'étude scientifique du comportement et des processus mentaux (perception, émotion, mémoire, pensée)." },
  { ueId: "1.1", recto: "Quelles sont les trois instances psychiques selon Freud ?", verso: "Le Ça (pulsions), le Moi (réalité, arbitre) et le Surmoi (morale, interdits)." },
  { ueId: "1.1", recto: "Citez 4 mécanismes de défense.", verso: "Déni, refoulement, projection, régression (aussi : sublimation, déplacement, rationalisation)." },
  { ueId: "1.1", recto: "Quels sont les stades psychosexuels de Freud ?", verso: "Oral, anal, phallique (œdipien), latence, génital." },
  { ueId: "1.1", recto: "Quels sont les 4 stades du développement cognitif de Piaget ?", verso: "Sensori-moteur, préopératoire, opérations concrètes, opérations formelles." },
  { ueId: "1.1", recto: "Qui a théorisé l'attachement ?", verso: "John Bowlby : lien affectif précoce entre l'enfant et sa figure de soin." },
  { ueId: "1.1", recto: "Qu'est-ce que la socialisation ?", verso: "Le processus d'intégration des normes et valeurs d'une société (primaire = famille ; secondaire = école, travail)." },
  { ueId: "1.1", recto: "Différence entre statut et rôle ?", verso: "Le statut est la position sociale ; le rôle est le comportement attendu associé à ce statut." },
  { ueId: "1.1", recto: "Qui a défini le « fait social » ?", verso: "Émile Durkheim : une manière d'agir extérieure qui s'impose à l'individu." },
  { ueId: "1.1", recto: "Que sont les déterminants sociaux de la santé ?", verso: "Facteurs sociaux (revenu, éducation, logement, travail, accès aux soins) qui influencent l'état de santé." },
  { ueId: "1.1", recto: "Qu'étudie l'anthropologie ?", verso: "L'être humain dans sa diversité culturelle : croyances, rites, rapport au corps, à la maladie, à la mort." },
  { ueId: "1.1", recto: "Qu'est-ce que l'ethnocentrisme ?", verso: "Juger une autre culture à partir de ses propres normes ; attitude à éviter dans le soin." },
  { ueId: "1.1", recto: "Qui représente l'approche humaniste en psychologie ?", verso: "Carl Rogers et Abraham Maslow, centrés sur la personne et son potentiel." },
  { ueId: "1.1", recto: "Que trouve-t-on au sommet de la pyramide de Maslow ?", verso: "Le besoin de réalisation de soi." },
  { ueId: "1.1", recto: "Différence entre norme et valeur ?", verso: "La valeur est un idéal partagé ; la norme est la règle de conduite qui en découle." },
  { ueId: "1.1", recto: "Qu'est-ce qu'une représentation de la maladie ?", verso: "Le sens donné à la maladie (punition, déséquilibre, sort), variable selon les cultures." },
  { ueId: "1.1", recto: "Qu'est-ce que la sublimation ?", verso: "Mécanisme de défense transformant une pulsion en activité socialement valorisée (art, sport)." },
  { ueId: "1.1", recto: "Quels sont les 5 niveaux de la pyramide de Maslow (de la base au sommet) ?", verso: "Physiologiques, sécurité, appartenance, estime, réalisation de soi." },
  { ueId: "1.1", recto: "Différence entre conditionnement classique et opérant ?", verso: "Classique (Pavlov) : association d'un stimulus à un réflexe. Opérant (Skinner) : apprentissage par renforcement (récompense/punition)." },
  { ueId: "1.1", recto: "Qu'est-ce que la projection (mécanisme de défense) ?", verso: "Attribuer à autrui ses propres pensées, désirs ou pulsions jugés inacceptables." },
  { ueId: "1.1", recto: "À quel stade de Piaget l'enfant acquiert-il la conservation ?", verso: "Au stade des opérations concrètes (7-11 ans)." },
];
