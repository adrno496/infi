export const fiches = [
  {
    id: "fx_ue_3_4_plus_demarche_recherche",
    ueId: "3.4",
    type: "cours",
    titre: "Les étapes de la démarche de recherche en soins infirmiers",
    resume: "Comprendre l'enchaînement logique qui mène d'une question de départ à des résultats exploitables pour la pratique.",
    tags: ["recherche", "méthode", "problématique"],
    html: `<p>La <span class="key" data-term="démarche de recherche">démarche de recherche</span> est un processus rigoureux et structuré qui vise à produire des connaissances nouvelles ou à vérifier des connaissances existantes. En soins infirmiers, elle s'inscrit dans une logique de <strong>pratique fondée sur les preuves</strong> (<em>Evidence-Based Nursing</em>).</p>

<h3>Les grandes phases</h3>
<p>On distingue classiquement trois phases qui se déclinent en étapes successives :</p>
<table class="tbl">
<tr><th>Phase</th><th>Étapes</th><th>But</th></tr>
<tr><td>Conceptuelle</td><td>Thème, question de départ, problématique, recension des écrits, cadre théorique</td><td>Délimiter et fonder le sujet</td></tr>
<tr><td>Méthodologique</td><td>Hypothèse/objectif, population, méthode, outils de recueil</td><td>Organiser la collecte des données</td></tr>
<tr><td>Empirique</td><td>Recueil, analyse, interprétation, diffusion des résultats</td><td>Produire et partager des résultats</td></tr>
</table>

<h3>De la question de départ à la problématique</h3>
<ul>
<li>La <span class="key" data-term="question de départ">question de départ</span> est large, issue d'un constat de terrain ou d'un étonnement.</li>
<li>La <span class="key" data-term="recension des écrits">recension des écrits</span> (revue de littérature) explore ce qui est déjà connu.</li>
<li>La <span class="key" data-term="problématique">problématique</span> est le raisonnement argumenté qui resserre la question et la rend chercheable.</li>
</ul>

<div class="callout"><div class="callout-t">Question de recherche vs question de départ</div>La question de recherche est précise, opérationnelle, mesurable. Elle découle de la problématique et oriente directement le choix de la méthode.</div>

<h3>Hypothèse et objectif</h3>
<p>L'<span class="key" data-term="hypothèse">hypothèse</span> est une réponse provisoire et vérifiable à la question de recherche, fréquente dans les approches quantitatives. Dans une approche qualitative exploratoire, on formule plutôt un <strong>objectif</strong> ou une question de recherche sans hypothèse préalable.</p>

<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« TQ-PRC-HM-RAI » : Thème, Question de départ, Problématique, Recension, Cadre conceptuel, Hypothèse, Méthode, Recueil, Analyse, Interprétation. L'ordre = le fil conducteur du mémoire.</div>`,
    refs: ["Référentiel de formation IFSI 2009, UE 3.4 S4 et S6", "Fortin M.-F., Gagnon J., Fondements et étapes du processus de recherche"]
  },
  {
    id: "fx_ue_3_4_plus_lecture_critique",
    ueId: "3.4",
    type: "cours",
    titre: "Lecture critique d'un article scientifique (méthode IMRaD)",
    resume: "Savoir évaluer la validité et la pertinence d'un article de recherche grâce à une grille de lecture structurée.",
    tags: ["lecture critique", "IMRaD", "article"],
    html: `<p>La <span class="key" data-term="lecture critique d'article">lecture critique d'article</span> (LCA) consiste à analyser méthodiquement un article scientifique pour juger de sa fiabilité, de sa validité et de son applicabilité à la pratique. Elle ne vise pas à « démolir » l'article mais à en mesurer la portée et les limites.</p>

<h3>La structure IMRaD</h3>
<p>La plupart des articles scientifiques suivent le plan <span class="key" data-term="IMRaD">IMRaD</span> :</p>
<ul>
<li><strong>I</strong>ntroduction : contexte, problématique, objectif/hypothèse.</li>
<li><strong>M</strong>éthode : population, type d'étude, outils, analyse statistique.</li>
<li><strong>R</strong>ésultats : données brutes et traitées, sans interprétation.</li>
<li><strong>a</strong>nd <strong>D</strong>iscussion : interprétation, comparaison à la littérature, limites, conclusion.</li>
</ul>

<h3>Questions clés à se poser</h3>
<table class="tbl">
<tr><th>Section</th><th>À vérifier</th></tr>
<tr><td>Introduction</td><td>L'objectif est-il clair, justifié, original ?</td></tr>
<tr><td>Méthode</td><td>Le type d'étude est-il adapté à la question ? L'échantillon est-il représentatif et de taille suffisante ?</td></tr>
<tr><td>Résultats</td><td>Sont-ils présentés clairement ? Les analyses statistiques sont-elles appropriées ?</td></tr>
<tr><td>Discussion</td><td>Les conclusions découlent-elles vraiment des résultats ? Les limites sont-elles reconnues ?</td></tr>
</table>

<div class="callout"><div class="callout-t">Niveaux de preuve</div>Tous les articles n'ont pas la même valeur : une méta-analyse ou un essai contrôlé randomisé (ECR) apporte un niveau de preuve élevé, alors qu'un avis d'expert ou une série de cas se situe au plus bas de la hiérarchie.</div>

<h3>Biais et conflits d'intérêts</h3>
<p>Le lecteur critique repère les <span class="key" data-term="biais">biais</span> (sélection, mesure, confusion) et vérifie la déclaration des <strong>conflits d'intérêts</strong> et des sources de financement, qui peuvent influencer les résultats.</p>

<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« PICO » pour cadrer une question clinique évaluable : <strong>P</strong>opulation, <strong>I</strong>ntervention, <strong>C</strong>omparateur, <strong>O</strong>utcome (résultat attendu).</div>`,
    refs: ["HAS – Niveaux de preuve et gradation des recommandations", "Référentiel IFSI 2009, UE 3.4 – analyse d'article"]
  },
  {
    id: "fx_ue_3_4_plus_ethique_recherche",
    ueId: "3.4",
    type: "cours",
    titre: "Éthique et réglementation de la recherche impliquant la personne humaine",
    resume: "Connaître les principes éthiques et le cadre légal qui protègent les personnes participant à une recherche.",
    tags: ["éthique", "consentement", "loi Jardé"],
    html: `<p>Toute recherche impliquant des personnes doit respecter des principes éthiques fondamentaux, hérités du <strong>Code de Nuremberg (1947)</strong> et de la <span class="key" data-term="Déclaration d'Helsinki">Déclaration d'Helsinki</span> (1964, régulièrement révisée).</p>

<h3>Les grands principes éthiques</h3>
<ul>
<li><span class="key" data-term="autonomie">Autonomie</span> : respect de la liberté de la personne (consentement).</li>
<li><strong>Bienfaisance</strong> : maximiser les bénéfices pour le participant.</li>
<li><strong>Non-malfaisance</strong> : minimiser les risques et préjudices.</li>
<li><strong>Justice</strong> : équité dans la sélection des participants et l'accès aux bénéfices.</li>
</ul>

<h3>Le consentement</h3>
<p>Le <span class="key" data-term="consentement libre et éclairé">consentement libre et éclairé</span> est central : la personne reçoit une information loyale, claire et appropriée, dispose d'un temps de réflexion, et peut retirer son consentement à tout moment sans conséquence sur sa prise en charge.</p>

<div class="callout"><div class="callout-t">Cadre légal en France</div>La <strong>loi Jardé</strong> (loi n° 2012-300, entrée en application en 2016) encadre les recherches impliquant la personne humaine (RIPH) et distingue trois catégories selon le niveau de risque. Tout protocole nécessite l'avis favorable d'un <span class="key" data-term="Comité de Protection des Personnes">Comité de Protection des Personnes (CPP)</span>, tiré au sort.</div>

<h3>Catégories de recherche (loi Jardé)</h3>
<table class="tbl">
<tr><th>Catégorie</th><th>Niveau de risque</th><th>Consentement</th></tr>
<tr><td>1 – Interventionnelle</td><td>Risque non négligeable (ex. médicament)</td><td>Écrit</td></tr>
<tr><td>2 – Interventionnelle à risques/contraintes minimes</td><td>Faible</td><td>Exprès (écrit ou tracé)</td></tr>
<tr><td>3 – Non interventionnelle (observationnelle)</td><td>Aucun risque ajouté</td><td>Non-opposition</td></tr>
</table>

<h3>Protection des données</h3>
<p>Le traitement des données personnelles est soumis au <span class="key" data-term="RGPD">RGPD</span> et au contrôle de la <strong>CNIL</strong> : anonymisation ou pseudonymisation, confidentialité, droit d'accès et de rectification.</p>

<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Les 4 piliers de l'éthique : « ABNJ » → <strong>A</strong>utonomie, <strong>B</strong>ienfaisance, <strong>N</strong>on-malfaisance, <strong>J</strong>ustice.</div>`,
    refs: ["Loi n° 2012-300 du 5 mars 2012 (loi Jardé)", "Déclaration d'Helsinki (AMM)", "Règlement (UE) 2016/679 – RGPD"]
  }
];

export const qcm = [
  {
    ueId: "3.4",
    q: "Dans quel ordre s'enchaînent les étapes de la phase conceptuelle de la démarche de recherche ?",
    options: [
      "Hypothèse, méthode, recueil de données",
      "Question de départ, recension des écrits, problématique",
      "Analyse, interprétation, diffusion",
      "Population, outils, échantillonnage"
    ],
    correct: 1,
    explication: "La phase conceptuelle part d'une question de départ large, s'appuie sur la recension des écrits, puis aboutit à la problématique. Les hypothèses, la méthode et le recueil relèvent des phases méthodologique et empirique.",
    ref: "Fortin M.-F., Fondements et étapes du processus de recherche",
    diff: 1
  },
  {
    ueId: "3.4",
    q: "Qu'est-ce qu'une hypothèse de recherche ?",
    options: [
      "Un résumé des résultats obtenus",
      "Une réponse provisoire et vérifiable à la question de recherche",
      "La liste des références bibliographiques",
      "Le plan de diffusion des résultats"
    ],
    correct: 1,
    explication: "L'hypothèse est une réponse anticipée, provisoire et testable à la question de recherche. Elle est confirmée ou infirmée par l'analyse des données, surtout dans les approches quantitatives.",
    ref: "UE 3.4 – démarche de recherche",
    diff: 1
  },
  {
    ueId: "3.4",
    q: "Que signifie l'acronyme IMRaD utilisé pour structurer un article scientifique ?",
    options: [
      "Idée, Méthode, Résultat, Décision",
      "Introduction, Méthode, Résultats, Discussion",
      "Investigation, Mesure, Recueil, Donnée",
      "Information, Modèle, Recherche, Diffusion"
    ],
    correct: 1,
    explication: "IMRaD signifie Introduction, Méthode, Résultats (Results) and Discussion. C'est le plan standard des articles scientifiques originaux.",
    ref: "Norme de rédaction scientifique IMRaD",
    diff: 1
  },
  {
    ueId: "3.4",
    q: "À quoi sert la grille PICO en lecture critique ?",
    options: [
      "À calculer la taille d'un échantillon",
      "À formuler et cadrer une question clinique évaluable",
      "À déterminer le niveau de financement de l'étude",
      "À anonymiser les données personnelles"
    ],
    correct: 1,
    explication: "PICO (Population, Intervention, Comparateur, Outcome) permet de formuler une question clinique précise et structurée, indispensable pour rechercher et évaluer des preuves.",
    ref: "Méthodologie Evidence-Based Practice",
    diff: 2
  },
  {
    ueId: "3.4",
    q: "Parmi ces designs d'étude, lequel apporte le niveau de preuve le plus élevé ?",
    options: [
      "Avis d'expert",
      "Série de cas",
      "Méta-analyse d'essais contrôlés randomisés",
      "Étude descriptive transversale"
    ],
    correct: 2,
    explication: "Dans la hiérarchie des preuves, la méta-analyse d'essais contrôlés randomisés occupe le rang le plus élevé, devant l'ECR isolé. L'avis d'expert se situe au plus bas niveau.",
    ref: "HAS – Niveaux de preuve",
    diff: 2
  },
  {
    ueId: "3.4",
    q: "Un biais de sélection survient lorsque :",
    options: [
      "L'échantillon n'est pas représentatif de la population cible",
      "Les résultats sont mal interprétés dans la discussion",
      "Le titre de l'article est trop long",
      "La bibliographie est incomplète"
    ],
    correct: 0,
    explication: "Le biais de sélection résulte d'une constitution de l'échantillon qui ne reflète pas correctement la population étudiée, ce qui compromet la validité externe (généralisation) des résultats.",
    ref: "Méthodologie – biais en recherche",
    diff: 2
  },
  {
    ueId: "3.4",
    q: "Quel texte fondateur a posé en 1947 le principe du consentement volontaire en recherche ?",
    options: [
      "La loi Jardé",
      "Le Code de Nuremberg",
      "Le RGPD",
      "La loi Kouchner"
    ],
    correct: 1,
    explication: "Le Code de Nuremberg (1947), rédigé après les procès des médecins nazis, établit pour la première fois l'exigence du consentement volontaire du sujet humain dans toute expérimentation.",
    ref: "Code de Nuremberg, 1947",
    diff: 2
  },
  {
    ueId: "3.4",
    q: "Le consentement requis pour participer à une recherche doit être :",
    options: [
      "Implicite et définitif",
      "Libre, éclairé et révocable à tout moment",
      "Donné uniquement par le médecin référent",
      "Valable seulement s'il est verbal"
    ],
    correct: 1,
    explication: "Le consentement doit être libre (sans contrainte), éclairé (information loyale et appropriée) et révocable à tout moment sans préjudice pour la prise en charge du participant.",
    ref: "Déclaration d'Helsinki ; loi Jardé",
    diff: 1
  },
  {
    ueId: "3.4",
    q: "En France, quelle instance doit donner un avis favorable avant le démarrage d'une recherche impliquant la personne humaine ?",
    options: [
      "La Haute Autorité de Santé",
      "Un Comité de Protection des Personnes (CPP)",
      "L'Ordre national des infirmiers",
      "Le Conseil d'État"
    ],
    correct: 1,
    explication: "Tout protocole de recherche impliquant la personne humaine doit recevoir l'avis favorable d'un CPP, désigné par tirage au sort, qui veille à la protection des participants.",
    ref: "Loi Jardé (loi n° 2012-300)",
    diff: 2
  },
  {
    ueId: "3.4",
    q: "Quel règlement encadre la protection des données personnelles dans les recherches ?",
    options: [
      "Le RGPD",
      "La loi Léonetti",
      "Le Code de déontologie infirmier",
      "La Convention d'Oviedo uniquement"
    ],
    correct: 0,
    explication: "Le Règlement Général sur la Protection des Données (RGPD, UE 2016/679), avec le contrôle de la CNIL en France, encadre le traitement des données personnelles : anonymisation/pseudonymisation, confidentialité, droits d'accès et de rectification.",
    ref: "Règlement (UE) 2016/679 – RGPD",
    diff: 2
  },
  {
    ueId: "3.4",
    q: "La recension des écrits (revue de littérature) sert principalement à :",
    options: [
      "Analyser statistiquement les résultats",
      "Faire le point sur l'état des connaissances existantes sur le sujet",
      "Recruter les participants à l'étude",
      "Rédiger le consentement éclairé"
    ],
    correct: 1,
    explication: "La recension des écrits permet de connaître ce qui a déjà été publié sur le thème, d'éviter les redites, de fonder la problématique et de situer la recherche dans un cadre théorique.",
    ref: "UE 3.4 – phase conceptuelle",
    diff: 1
  },
  {
    ueId: "3.4",
    q: "Une approche de recherche qualitative se caractérise par :",
    options: [
      "La mesure de variables chiffrées et des tests statistiques",
      "L'exploration en profondeur de phénomènes, vécus et significations",
      "Le tirage au sort systématique des participants",
      "L'absence totale de méthode"
    ],
    correct: 1,
    explication: "La recherche qualitative explore la compréhension de phénomènes, d'expériences et de significations (entretiens, observation), souvent sans hypothèse préalable. Le quantitatif mesure et teste des variables chiffrées.",
    ref: "Méthodologie qualitative vs quantitative",
    diff: 2
  },
  {
    ueId: "3.4",
    q: "Dans un article IMRaD, où l'auteur reconnaît-il les limites de son étude ?",
    options: [
      "Dans l'introduction",
      "Dans la section Méthode",
      "Dans la section Résultats",
      "Dans la discussion"
    ],
    correct: 3,
    explication: "C'est dans la discussion que l'auteur interprète ses résultats, les compare à la littérature, reconnaît les limites de l'étude et propose des perspectives.",
    ref: "Structure IMRaD",
    diff: 1
  },
  {
    ueId: "3.4",
    q: "Que désigne la validité externe d'une étude ?",
    options: [
      "La possibilité de généraliser les résultats à d'autres populations",
      "La cohérence interne du raisonnement statistique",
      "Le respect du consentement éclairé",
      "La qualité de la mise en page de l'article"
    ],
    correct: 0,
    explication: "La validité externe est la capacité à extrapoler (généraliser) les résultats au-delà de l'échantillon étudié. La validité interne concerne la fiabilité du lien de causalité au sein de l'étude.",
    ref: "Méthodologie – validité",
    diff: 3
  },
  {
    ueId: "3.4",
    q: "Pourquoi la déclaration des conflits d'intérêts est-elle importante dans un article ?",
    options: [
      "Pour augmenter le nombre de pages",
      "Parce que des intérêts financiers peuvent influencer l'objectivité des résultats",
      "Parce que la loi interdit toute recherche financée",
      "Pour remplacer la bibliographie"
    ],
    correct: 1,
    explication: "Les liens d'intérêts (financements, partenariats industriels) peuvent introduire un biais dans la conduite ou l'interprétation de l'étude. Leur transparence permet au lecteur d'évaluer ce risque.",
    ref: "Intégrité scientifique – conflits d'intérêts",
    diff: 2
  },
  {
    ueId: "3.4",
    q: "Selon la loi Jardé, une recherche non interventionnelle (catégorie 3) requiert :",
    options: [
      "Un consentement écrit obligatoire",
      "L'information de la personne et son absence d'opposition (non-opposition)",
      "Aucune information du participant",
      "L'avis du Conseil constitutionnel"
    ],
    correct: 1,
    explication: "Pour les recherches non interventionnelles (sans risque ajouté pour la personne), le régime de la non-opposition s'applique : la personne est informée et peut s'opposer, sans consentement écrit formel.",
    ref: "Loi Jardé – catégories de recherche",
    diff: 3
  },
  {
    ueId: "3.4",
    q: "Le principe éthique de non-malfaisance impose au chercheur de :",
    options: [
      "Maximiser ses publications",
      "Ne pas nuire et minimiser les risques pour les participants",
      "Choisir uniquement des participants volontaires payants",
      "Garder ses résultats secrets"
    ],
    correct: 1,
    explication: "La non-malfaisance (« primum non nocere ») impose d'éviter de causer un préjudice et de réduire au minimum les risques et inconvénients pour les participants.",
    ref: "Principes éthiques – Beauchamp & Childress",
    diff: 1
  },
  {
    ueId: "3.4",
    q: "Quel est l'intérêt principal d'une recherche en soins infirmiers pour la pratique professionnelle ?",
    options: [
      "Remplacer le jugement clinique",
      "Fonder les pratiques sur des preuves et améliorer la qualité des soins",
      "Réduire le temps de formation",
      "Supprimer les transmissions"
    ],
    correct: 1,
    explication: "La recherche infirmière alimente la pratique fondée sur les preuves (Evidence-Based Nursing), permettant d'améliorer la qualité et la sécurité des soins, tout en faisant évoluer la discipline.",
    ref: "UE 3.4 – finalités de la recherche en soins",
    diff: 1
  },
  {
    ueId: "3.4",
    q: "La pseudonymisation des données consiste à :",
    options: [
      "Supprimer définitivement toutes les données",
      "Remplacer les identifiants directs par un code, la ré-identification restant possible via une clé",
      "Publier les noms des participants",
      "Crypter uniquement les résultats statistiques"
    ],
    correct: 1,
    explication: "La pseudonymisation remplace les données identifiantes par un code ; la ré-identification reste possible grâce à une table de correspondance conservée séparément. L'anonymisation, elle, rend la ré-identification impossible.",
    ref: "RGPD – définitions",
    diff: 3
  },
  {
    ueId: "3.4",
    q: "Un échantillon de petite taille dans une étude quantitative risque surtout de :",
    options: [
      "Augmenter la puissance statistique",
      "Réduire la puissance statistique et la représentativité des résultats",
      "Garantir l'absence de tout biais",
      "Rendre le consentement inutile"
    ],
    correct: 1,
    explication: "Un effectif insuffisant diminue la puissance statistique (capacité à détecter un effet réel) et limite la représentativité, compromettant la validité des conclusions.",
    ref: "Méthodologie – taille d'échantillon",
    diff: 2
  },
  {
    ueId: "3.4",
    q: "La problématique d'une recherche se définit comme :",
    options: [
      "La conclusion finale de l'étude",
      "Le raisonnement argumenté qui resserre la question et la rend chercheable",
      "La liste des outils de recueil de données",
      "Le tableau des résultats statistiques"
    ],
    correct: 1,
    explication: "La problématique est la construction argumentée qui, à partir d'un constat et de la littérature, formule un problème précis et débouche sur une question de recherche opérationnelle.",
    ref: "UE 3.4 – problématisation",
    diff: 2
  }
];

export const flashcards = [
  { ueId: "3.4", recto: "Quelles sont les 3 grandes phases de la démarche de recherche ?", verso: "Conceptuelle, méthodologique et empirique." },
  { ueId: "3.4", recto: "Que signifie IMRaD ?", verso: "Introduction, Méthode, Résultats and Discussion : plan standard d'un article scientifique." },
  { ueId: "3.4", recto: "Qu'est-ce qu'une hypothèse de recherche ?", verso: "Une réponse provisoire et vérifiable à la question de recherche." },
  { ueId: "3.4", recto: "À quoi sert la grille PICO ?", verso: "À formuler une question clinique évaluable : Population, Intervention, Comparateur, Outcome." },
  { ueId: "3.4", recto: "Quel design apporte le plus haut niveau de preuve ?", verso: "La méta-analyse d'essais contrôlés randomisés." },
  { ueId: "3.4", recto: "Quels sont les 4 grands principes éthiques de la recherche ?", verso: "Autonomie, bienfaisance, non-malfaisance, justice." },
  { ueId: "3.4", recto: "Quel texte de 1947 a posé le consentement volontaire ?", verso: "Le Code de Nuremberg." },
  { ueId: "3.4", recto: "Que doit être le consentement à une recherche ?", verso: "Libre, éclairé et révocable à tout moment." },
  { ueId: "3.4", recto: "Quelle loi encadre les recherches impliquant la personne humaine en France ?", verso: "La loi Jardé (loi n° 2012-300, appliquée en 2016)." },
  { ueId: "3.4", recto: "Quelle instance donne un avis favorable avant une recherche ?", verso: "Un Comité de Protection des Personnes (CPP), tiré au sort." },
  { ueId: "3.4", recto: "Quel règlement protège les données personnelles en recherche ?", verso: "Le RGPD, sous contrôle de la CNIL." },
  { ueId: "3.4", recto: "Différence validité interne / validité externe ?", verso: "Interne : fiabilité du lien causal dans l'étude ; externe : possibilité de généraliser les résultats." },
  { ueId: "3.4", recto: "Qu'est-ce qu'un biais de sélection ?", verso: "Un échantillon non représentatif de la population cible." },
  { ueId: "3.4", recto: "Anonymisation vs pseudonymisation ?", verso: "Anonymisation : ré-identification impossible ; pseudonymisation : possible via une clé conservée à part." },
  { ueId: "3.4", recto: "But de la recension des écrits ?", verso: "Faire le point sur l'état des connaissances existantes et fonder la problématique." }
];
