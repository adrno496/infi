// Pack UE 5.3 — Communication et conduite de projet (d'après les cours de l'étudiante).
// Contenu fidèle aux notes : méthode macro-cible / synthèse clinique + cas clinique AVC (TD 3).

export const fiches = [
  {
    id: "fco_5_3_macrocible", ueId: "5.3", type: "cours",
    titre: "La macro-cible : structurer la synthèse clinique d'entrée",
    resume: "Outil de transmission qui résume la situation du patient à son admission dans le service.",
    tags: ["d'après tes cours", "macro-cible", "synthèse clinique", "transmissions"],
    html: `
      <p>La <span class="key" data-term="macro-cible">macro-cible</span> est une synthèse clinique rédigée à l'entrée du patient (et à des moments-clés du séjour). Elle pose le <strong>contexte global</strong> et oriente le projet de soins pluridisciplinaire.</p>
      <p>Dans le TD travaillé, elle est construite à partir du <strong>dossier de soin</strong> : observation médicale d'admission, mode de vie, histoire de la maladie, examens cliniques et observations pluriprofessionnelles.</p>
      <h3>Éléments à faire figurer</h3>
      <ul>
        <li><strong>Identité / contexte</strong> : âge, motif d'hospitalisation, date d'entrée.</li>
        <li><strong>Antécédents</strong> médicaux et chirurgicaux.</li>
        <li><strong>Mode de vie</strong> et autonomie antérieure (logement, aides, profession, entourage).</li>
        <li><strong>Histoire de la maladie</strong> : chronologie des évènements et de l'aggravation.</li>
        <li><strong>État actuel</strong> : alimentation, autonomie, thymie, élimination, mobilité, traitement.</li>
      </ul>
      <div class="callout"><div class="callout-t">À retenir</div>La macro-cible n'invente rien : elle <strong>synthétise fidèlement</strong> les données du dossier pour donner une vision d'ensemble exploitable par toute l'équipe.</div>`,
    refs: ["D'après tes cours (UE 5.3)"]
  },
  {
    id: "fco_5_3_grille_problemes", ueId: "5.3", type: "cours",
    titre: "La grille d'analyse Problèmes / Risques",
    resume: "Tableau qui structure le raisonnement clinique en 5 colonnes.",
    tags: ["d'après tes cours", "raisonnement clinique", "démarche de soins", "diagnostic infirmier"],
    html: `
      <p>Le raisonnement clinique du TD s'organise dans un tableau à <strong>cinq colonnes</strong> qui distingue les problèmes <em>réels</em> des <em>risques</em>.</p>
      <table class="tbl">
        <thead><tr><th>Problème / Risque</th><th>Lié à</th><th>Se manifestant par</th><th>Actions</th><th>Résultats</th></tr></thead>
        <tbody>
          <tr><td>Problème de douleur</td><td>Arthrose + mobilisation à la toilette + hémiplégie</td><td>Douleur lors de la toilette</td><td>Évaluer / antalgiques</td><td>—</td></tr>
          <tr><td>Capacité partielle aux gestes de la vie quotidienne</td><td>AVC = hémiplégie</td><td>Fauteuil roulant, toilette impossible seul</td><td>Aide au transfert et à la toilette, tablette pour caler le bras G</td><td>—</td></tr>
          <tr><td>Risque d'escarre</td><td>Immobilisation, dénutrition, déshydratation</td><td>Rougeur talon et siège</td><td>Coussin de décharge, surveillance cutanée</td><td>—</td></tr>
        </tbody>
      </table>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Un <strong>problème</strong> existe déjà (« se manifestant par… ») ; un <strong>risque</strong> est potentiel (« lié à… » mais pas encore de signes).</div>`,
    refs: ["D'après tes cours (UE 5.3)"]
  },
  {
    id: "fco_5_3_donnees_manquantes", ueId: "5.3", type: "cours",
    titre: "Identifier les données manquantes",
    resume: "Une analyse clinique repère aussi ce qui manque pour compléter le recueil.",
    tags: ["d'après tes cours", "recueil de données", "esprit critique"],
    html: `
      <p>Une bonne analyse de situation ne se limite pas aux données présentes : elle relève les <span class="key" data-term="données manquantes">données manquantes</span> à rechercher pour sécuriser la prise en charge.</p>
      <h3>Exemples relevés dans le TD</h3>
      <ul>
        <li>Y a-t-il un <strong>matelas dynamique</strong> ? Quel est le <strong>score de Braden</strong> (risque d'escarre) ?</li>
        <li>Pourquoi <strong>deux antiagrégants plaquettaires</strong> (Clopidogrel + Kardégic) alors qu'il n'y a pas de stent ?</li>
        <li><strong>Cotation de la douleur</strong> ? Pas de surveillance NFS ?</li>
        <li>La <strong>rougeur du talon</strong> est-elle toujours présente ?</li>
        <li><strong>Devenir</strong> du patient : place en EHPAD avec son épouse ? Visites des enfants ?</li>
        <li>Éruption cutanée qui démange : piqûre de moustique ?</li>
      </ul>
      <div class="callout"><div class="callout-t">À retenir</div>Pointer les données manquantes = poser les bonnes questions à l'équipe et au dossier, c'est un signe de <strong>raisonnement clinique mature</strong>.</div>`,
    refs: ["D'après tes cours (UE 5.3)"]
  },
  {
    id: "fco_5_3_cas_avc", ueId: "5.3", type: "cours",
    titre: "Cas clinique TD 3 : AVC ischémique de M. C (87 ans)",
    resume: "Situation support du TD : AVC ischémique sur thrombose du tronc basilaire.",
    tags: ["d'après tes cours", "AVC", "cas clinique", "hémiplégie"],
    html: `
      <p>M. C, <strong>87 ans</strong>, entré au centre de médecine physique et de réadaptation à la suite d'un <span class="key" data-term="AVC ischémique">AVC ischémique</span> sur thrombose du tronc basilaire. Antécédents : AIT itératifs (2015), arthrose des épaules, cancer de la prostate.</p>
      <h3>Chronologie de l'aggravation</h3>
      <ul>
        <li>19/05 : dysarthrie 15 min puis aggravation (hémiplégie gauche, paralysie faciale), <strong>NIHSS</strong> 5.</li>
        <li>20/05 : aphasie modérée, déficit moteur MSG, <strong>NIHSS 8</strong> (score de gravité majoré).</li>
      </ul>
      <h3>État à la prise en charge</h3>
      <ul>
        <li><strong>Motricité</strong> : hémiplégie gauche prédominant au membre supérieur (flasque), hémiparésie de la jambe gauche.</li>
        <li><strong>Sensibilité</strong> : hypoesthésie modérée à gauche.</li>
        <li><strong>Alimentation</strong> : texture haché-mou, eau plate, compléments nutritionnels oraux (CNO).</li>
        <li><strong>Autonomie</strong> : aide aux transferts, à l'habillage et à la toilette ; déplacement en fauteuil roulant.</li>
        <li><strong>Thymie</strong> : basse, évoque le manque de son épouse (en EHPAD).</li>
      </ul>
      <div class="callout"><div class="callout-t">À retenir</div>Prise en charge <strong>pluridisciplinaire</strong> : kiné, ergothérapeute, orthophoniste, diététicienne, neuropsychologue, assistante sociale.</div>`,
    refs: ["D'après tes cours (UE 5.3)"]
  },
  {
    id: "fco_5_3_pluridisciplinarite", ueId: "5.3", type: "cours",
    titre: "Le projet de soins pluridisciplinaire et la synthèse",
    resume: "Chaque professionnel poursuit des objectifs spécifiques, coordonnés en synthèse.",
    tags: ["d'après tes cours", "pluridisciplinarité", "projet de soins", "coordination"],
    html: `
      <p>Le <span class="key" data-term="projet de soins">projet de soins</span> répartit des objectifs prioritaires entre les professionnels, mis en commun lors de la <strong>synthèse pluridisciplinaire</strong>.</p>
      <table class="tbl">
        <thead><tr><th>Professionnel</th><th>Objectif dans le cas</th></tr></thead>
        <tbody>
          <tr><td>Kinésithérapeute</td><td>Équilibre assis/debout, verticalisation, transferts, appui sur le MIG, proprioception</td></tr>
          <tr><td>Ergothérapeute</td><td>Éveil neuromoteur du MSG, thérapie miroir</td></tr>
          <tr><td>Orthophoniste</td><td>Rééducation de la dysarthrie, évaluation de la déglutition, suivi des textures</td></tr>
          <tr><td>Diététicienne</td><td>Prise en charge de la dénutrition, suivi des textures et de la nutrition</td></tr>
          <tr><td>Neuropsychologue</td><td>Bilan neuropsychologique (jugé non prioritaire ici)</td></tr>
          <tr><td>Assistante sociale</td><td>Bilan social, devenir du patient</td></tr>
        </tbody>
      </table>
      <div class="callout"><div class="callout-t">À retenir</div>La synthèse coordonne les regards : déglutition, dénutrition, motricité, langage, cognition et devenir sont abordés ensemble pour <strong>fixer des objectifs communs</strong>.</div>`,
    refs: ["D'après tes cours (UE 5.3)"]
  },
  {
    id: "fco_5_3_deglutition", ueId: "5.3", type: "cours",
    titre: "Évaluation de la déglutition et progression des textures",
    resume: "L'orthophoniste évalue la déglutition et fait progresser les textures alimentaires.",
    tags: ["d'après tes cours", "déglutition", "fausse route", "textures"],
    html: `
      <p>Après un AVC, le <strong>risque de fausse route</strong> impose une évaluation de la <span class="key" data-term="déglutition">déglutition</span> par l'orthophoniste, structurée en phases.</p>
      <h3>Phases analysées</h3>
      <ul>
        <li><strong>Phase orale</strong> : préhension buccale, mastication, vidange buccale.</li>
        <li><strong>Phase pharyngée</strong> : protection des voies aériennes, transport pharyngé (attention aux <em>stases</em> et aux <em>hemmages</em>).</li>
        <li><strong>Comportement</strong> : grosseur des bouchées, rapidité, concentration, prise en compte des conseils.</li>
      </ul>
      <h3>Progression observée dans le cas</h3>
      <ul>
        <li>Texture <strong>mixée</strong> → <strong>haché-mou</strong> + sauce.</li>
        <li>Liquide : eau plate fraîche, <strong>verre échancré</strong>.</li>
        <li>Pain de mie autorisé.</li>
      </ul>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Conseils de sécurité : ne pas parler la bouche pleine, petites bouchées, ne pas enchaîner trop vite, bonne position assise.</div>`,
    refs: ["D'après tes cours (UE 5.3)"]
  },
  {
    id: "fco_5_3_denutrition", ueId: "5.3", type: "cours",
    titre: "Dénutrition et risques associés chez la personne âgée",
    resume: "Albumine basse, perte de poids, risque cutané : la dénutrition est un problème majeur.",
    tags: ["d'après tes cours", "dénutrition", "albumine", "escarre"],
    html: `
      <p>Dans le cas, la <span class="key" data-term="dénutrition">dénutrition</span> est repérée par une <strong>albumine à 28 g/L</strong> et une perte de 1,5 kg (poids de forme 64 kg → 62,5 kg à l'entrée).</p>
      <h3>Prise en charge</h3>
      <ul>
        <li>Repas enrichis, <strong>céréales hyperprotéinées</strong> au petit-déjeuner.</li>
        <li>Deux <strong>CNO</strong> (Compléments Nutritionnels Oraux, type Fortimel) ≈ 700 kcal et 28 g de protéines.</li>
        <li>Stimulation à boire (boit très peu malgré les stimulations).</li>
      </ul>
      <div class="callout"><div class="callout-t">À retenir</div>Dénutrition + déshydratation + immobilisation = trio aggravant le <strong>risque d'escarre</strong> (rougeurs talon/siège). Surveillance cutanée et coussins de décharge indispensables.</div>`,
    refs: ["D'après tes cours (UE 5.3)"]
  }
];

export const qcm = [
  { ueId: "5.3", q: "À quoi sert principalement une macro-cible ?", options: ["À prescrire un traitement", "À synthétiser la situation clinique du patient à un moment-clé", "À facturer le séjour", "À remplacer l'observation médicale"], correct: 1,
    explication: "La macro-cible est une synthèse clinique de transmission qui pose le contexte global du patient (entrée, points-clés).", ref: "UE 5.3", diff: 1 },
  { ueId: "5.3", q: "Dans la grille d'analyse, qu'est-ce qui distingue un « risque » d'un « problème » ?", options: ["Le risque est plus grave", "Le risque est potentiel (pas encore de manifestations), le problème est déjà présent", "Le risque concerne seulement le médecin", "Il n'y a aucune différence"], correct: 1,
    explication: "Un problème se manifeste déjà ; un risque est potentiel et lié à des facteurs favorisants.", ref: "UE 5.3", diff: 1 },
  { ueId: "5.3", q: "Quel score évalue la gravité d'un AVC, passé de 5 à 8 chez M. C ?", options: ["Score de Glasgow", "NIHSS", "Score de Braden", "Score de Norton"], correct: 1,
    explication: "Le NIHSS (National Institutes of Health Stroke Scale) mesure la gravité de l'AVC ; il est passé de 5 à 8.", ref: "UE 5.3", diff: 2 },
  { ueId: "5.3", q: "Quel score est cité pour évaluer le risque d'escarre (parmi les données manquantes) ?", options: ["Score de Braden", "NIHSS", "Score de Glasgow", "Mingazzini"], correct: 0,
    explication: "Le score de Braden évalue le risque d'escarre ; il fait partie des données manquantes relevées.", ref: "UE 5.3", diff: 1 },
  { ueId: "5.3", q: "L'AVC de M. C est de quel type ?", options: ["Hémorragique", "Ischémique sur thrombose du tronc basilaire", "Embolie pulmonaire", "AIT isolé"], correct: 1,
    explication: "Il s'agit d'un AVC ischémique sur thrombose du tronc basilaire.", ref: "UE 5.3", diff: 1 },
  { ueId: "5.3", q: "Quelle valeur d'albumine signe la dénutrition de M. C ?", options: ["40 g/L", "35 g/L", "28 g/L", "20 g/L"], correct: 2,
    explication: "L'albumine est à 28 g/L, témoignant d'une dénutrition.", ref: "UE 5.3", diff: 2 },
  { ueId: "5.3", q: "Que signifie l'abréviation CNO utilisée dans le suivi diététique ?", options: ["Centre de Nutrition Orale", "Compléments Nutritionnels Oraux", "Contrôle Nutritionnel Obligatoire", "Calories Non Optimisées"], correct: 1,
    explication: "CNO = Compléments Nutritionnels Oraux (ex. Fortimel), ici 2 CNO ≈ 700 kcal et 28 g de protéines.", ref: "UE 5.3", diff: 1 },
  { ueId: "5.3", q: "Quelle progression de texture alimentaire a été validée pour M. C ?", options: ["Normale → mixée", "Mixée → haché-mou", "Liquide → mixée", "Haché-mou → normale"], correct: 1,
    explication: "La texture est passée de mixée à haché-mou + sauce après évaluation orthophonique.", ref: "UE 5.3", diff: 1 },
  { ueId: "5.3", q: "Quel professionnel évalue la déglutition et la dysarthrie ?", options: ["Le kinésithérapeute", "L'orthophoniste", "L'ergothérapeute", "La diététicienne"], correct: 1,
    explication: "L'orthophoniste évalue la déglutition, suit les textures et rééduque la dysarthrie.", ref: "UE 5.3", diff: 1 },
  { ueId: "5.3", q: "Quel professionnel travaille l'éveil neuromoteur du membre supérieur en thérapie miroir ?", options: ["L'orthophoniste", "L'ergothérapeute", "Le neuropsychologue", "L'assistante sociale"], correct: 1,
    explication: "L'ergothérapeute assure l'éveil neuromoteur du MSG et la thérapie miroir.", ref: "UE 5.3", diff: 2 },
  { ueId: "5.3", q: "Pourquoi la macro-cible relève-t-elle les « données manquantes » ?", options: ["Pour allonger le dossier", "Pour identifier ce qui reste à rechercher et sécuriser la prise en charge", "Pour critiquer le médecin", "Ce n'est pas utile"], correct: 1,
    explication: "Repérer les données manquantes permet de poser les bonnes questions et de compléter le recueil.", ref: "UE 5.3", diff: 2 },
  { ueId: "5.3", q: "Quels facteurs cumulés aggravent le risque d'escarre chez M. C ?", options: ["Hypertension seule", "Immobilisation, dénutrition et déshydratation", "Allergie médicamenteuse", "Fièvre isolée"], correct: 1,
    explication: "Immobilisation + dénutrition + déshydratation forment le trio aggravant du risque d'escarre.", ref: "UE 5.3", diff: 1 },
  { ueId: "5.3", q: "Le côté hémiplégique de M. C est :", options: ["Le côté droit", "Le côté gauche", "Les deux côtés", "Aucun"], correct: 1,
    explication: "Hémiplégie gauche, prédominant au membre supérieur gauche (flasque).", ref: "UE 5.3", diff: 1 },
  { ueId: "5.3", q: "Quel signe de phase pharyngée traduit une protection imparfaite des voies aériennes ?", options: ["Mastication efficace", "Petites toux et hemmages à l'eau", "Bonne vidange buccale", "Appétit conservé"], correct: 1,
    explication: "Petites toux et hemmages signalent une protection perturbée des voies aériennes (risque de fausse route).", ref: "UE 5.3", diff: 2 },
  { ueId: "5.3", q: "Quel matériel facilite l'hydratation sécurisée en cas de trouble de déglutition ?", options: ["Une paille fine", "Un verre échancré", "Une seringue", "Une bouteille classique"], correct: 1,
    explication: "Le verre échancré permet de boire sans extension du cou, sécurisant la déglutition.", ref: "UE 5.3", diff: 2 },
  { ueId: "5.3", q: "Quelle est une cause de la thymie basse de M. C ?", options: ["La douleur de l'arthrose", "Le manque de son épouse en EHPAD", "L'hypertension", "Une infection"], correct: 1,
    explication: "Sa thymie est basse car il évoque le manque de sa femme, en EHPAD.", ref: "UE 5.3", diff: 1 },
  { ueId: "5.3", q: "Quel traitement de M. C génère un « risque hémorragique » à surveiller ?", options: ["Le paracétamol", "Les antiagrégants plaquettaires (Clopidogrel, Kardégic)", "Les compléments nutritionnels", "L'eau plate"], correct: 1,
    explication: "Les antiagrégants plaquettaires (Plavix/Clopidogrel + Kardégic) exposent à un risque hémorragique.", ref: "UE 5.3", diff: 2 },
  { ueId: "5.3", q: "Que recouvre la prise en charge « pluridisciplinaire » dans ce cas ?", options: ["Un seul soignant", "La coordination de plusieurs professionnels aux objectifs spécifiques", "Uniquement le médecin et l'IDE", "La famille seule"], correct: 1,
    explication: "Plusieurs professionnels (kiné, ergo, ortho, diététicienne, etc.) coordonnent leurs objectifs en synthèse.", ref: "UE 5.3", diff: 1 },
  { ueId: "5.3", q: "Quelle question pertinente figure dans les données manquantes sur le traitement ?", options: ["Pourquoi du paracétamol ?", "Pourquoi deux antiagrégants plaquettaires sans stent ?", "Pourquoi de l'eau plate ?", "Pourquoi un fauteuil roulant ?"], correct: 1,
    explication: "On s'interroge sur la prescription de deux antiagrégants plaquettaires alors qu'il n'y a pas de stent.", ref: "UE 5.3", diff: 3 },
  { ueId: "5.3", q: "Que vise le travail kiné de « verticalisation et report de charge sur le MIG » ?", options: ["Améliorer la déglutition", "Restaurer l'équilibre et l'appui pour la reprise de la marche", "Traiter la dénutrition", "Améliorer la cognition"], correct: 1,
    explication: "La verticalisation et le report de charge sur le membre inférieur gauche préparent l'appui et la marche.", ref: "UE 5.3", diff: 2 },
  { ueId: "5.3", q: "La rédaction d'une synthèse clinique fidèle suppose de :", options: ["Inventer des données plausibles", "S'appuyer uniquement sur les données réelles du dossier", "Copier le cours d'un autre patient", "Ne garder que le traitement"], correct: 1,
    explication: "La synthèse doit refléter fidèlement les données du dossier sans rien inventer.", ref: "UE 5.3", diff: 1 }
];

export const flashcards = [
  { ueId: "5.3", recto: "Qu'est-ce qu'une macro-cible ?", verso: "Une synthèse clinique de transmission qui résume la situation du patient à un moment-clé (souvent l'entrée)." },
  { ueId: "5.3", recto: "Différence problème / risque dans la grille d'analyse ?", verso: "Le problème est déjà présent (se manifestant par…) ; le risque est potentiel (lié à des facteurs favorisants)." },
  { ueId: "5.3", recto: "Les 5 colonnes de la grille d'analyse clinique ?", verso: "Problème/Risque — Lié à — Se manifestant par — Actions — Résultats." },
  { ueId: "5.3", recto: "Que mesure le NIHSS ?", verso: "La gravité d'un AVC (chez M. C : passé de 5 à 8)." },
  { ueId: "5.3", recto: "Quel score évalue le risque d'escarre ?", verso: "Le score de Braden." },
  { ueId: "5.3", recto: "Type d'AVC de M. C ?", verso: "AVC ischémique sur thrombose du tronc basilaire." },
  { ueId: "5.3", recto: "Valeur d'albumine signant la dénutrition ?", verso: "Albumine à 28 g/L (avec perte de 1,5 kg)." },
  { ueId: "5.3", recto: "Que signifie CNO ?", verso: "Compléments Nutritionnels Oraux (ex. Fortimel) ; ici ≈ 700 kcal et 28 g de protéines." },
  { ueId: "5.3", recto: "Progression de texture validée pour M. C ?", verso: "De mixée à haché-mou + sauce, avec eau plate au verre échancré." },
  { ueId: "5.3", recto: "Rôle de l'orthophoniste dans ce cas ?", verso: "Rééducation de la dysarthrie, évaluation de la déglutition et suivi des textures." },
  { ueId: "5.3", recto: "Rôle de l'ergothérapeute ?", verso: "Éveil neuromoteur du membre supérieur gauche, thérapie miroir." },
  { ueId: "5.3", recto: "Trio aggravant le risque d'escarre ?", verso: "Immobilisation + dénutrition + déshydratation." },
  { ueId: "5.3", recto: "Côté hémiplégique de M. C ?", verso: "Gauche, prédominant au membre supérieur (flasque)." },
  { ueId: "5.3", recto: "Les 3 phases analysées en évaluation de déglutition ?", verso: "Phase orale, phase pharyngée, comportement en déglutition." },
  { ueId: "5.3", recto: "À quoi sert un verre échancré ?", verso: "Boire sans extension du cou, pour sécuriser la déglutition et limiter les fausses routes." },
  { ueId: "5.3", recto: "Pourquoi relever les données manquantes ?", verso: "Pour identifier ce qu'il reste à rechercher et sécuriser la prise en charge (esprit critique)." },
  { ueId: "5.3", recto: "Quel risque les antiagrégants plaquettaires entraînent-ils ?", verso: "Un risque hémorragique à surveiller." },
  { ueId: "5.3", recto: "Cause de la thymie basse de M. C ?", verso: "Le manque de son épouse, qui vit en EHPAD." },
  { ueId: "5.3", recto: "Qui participe à la synthèse pluridisciplinaire ?", verso: "Médecin, kiné, ergothérapeute, orthophoniste, diététicienne, neuropsychologue, IDE, AS." },
  { ueId: "5.3", recto: "Principe d'une synthèse clinique fidèle ?", verso: "S'appuyer uniquement sur les données réelles du dossier, sans rien inventer." }
];
