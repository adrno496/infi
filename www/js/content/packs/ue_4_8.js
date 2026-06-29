// UE 4.8 — Qualité des soins, évaluation des pratiques (STI interventions, S6). Pack seed.
export const fiches = [
  {
    id: "f_4_8_qualite", ueId: "4.8", type: "cours",
    titre: "Qualité et sécurité des soins — concepts clés",
    resume: "Définir la qualité des soins, ses dimensions et les exigences réglementaires.",
    tags: ["qualité", "sécurité", "HAS", "certification", "soins"],
    html: `
      <h3>Définition</h3>
      <p>Selon l'OMS, la <span class="key" data-term="qualité des soins">qualité des soins</span> consiste à délivrer à chaque patient l'ensemble des actes diagnostiques et thérapeutiques lui assurant le <strong>meilleur résultat</strong> en termes de santé, au <strong>moindre risque iatrogène</strong>, pour sa plus grande satisfaction, au meilleur coût.</p>
      <h3>Les dimensions de la qualité</h3>
      <ul>
        <li><strong>Efficacité</strong> : le soin produit le résultat attendu.</li>
        <li><strong>Sécurité</strong> : minimiser les risques et événements indésirables.</li>
        <li><strong>Pertinence</strong> : le bon soin, au bon patient, au bon moment.</li>
        <li><strong>Accessibilité</strong> et <strong>continuité</strong> des soins.</li>
        <li><strong>Satisfaction</strong> et respect du patient.</li>
      </ul>
      <h3>Acteurs institutionnels</h3>
      <table class="tbl">
        <tr><th>Organisme</th><th>Rôle</th></tr>
        <tr><td><span class="key" data-term="HAS">HAS</span></td><td>Haute Autorité de Santé : certification des établissements, recommandations de bonnes pratiques (RBP), évaluation.</td></tr>
        <tr><td>ANSM</td><td>Sécurité du médicament et des dispositifs médicaux ; pharmacovigilance, matériovigilance.</td></tr>
        <tr><td>ARS</td><td>Pilotage régional de la santé, inspections, contractualisation (CPOM).</td></tr>
      </table>
      <div class="callout"><div class="callout-t">À retenir</div>La <strong>certification HAS</strong> est obligatoire et périodique (tous les 4 ans). Elle évalue la qualité et la sécurité des soins via des visites d'experts-visiteurs et le référentiel HAS (patient traceur).</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>« E-S-P-A-C-S »</strong> : Efficacité, Sécurité, Pertinence, Accessibilité, Continuité, Satisfaction.</div>
    `,
    refs: ["UE 4.8"],
  },
  {
    id: "f_4_8_epp_amelioration", ueId: "4.8", type: "cours",
    titre: "Démarche qualité et évaluation des pratiques (EPP)",
    resume: "Roue de Deming, EPP, audit clinique et outils d'amélioration continue.",
    tags: ["EPP", "PDCA", "audit", "amélioration continue", "qualité"],
    html: `
      <h3>L'amélioration continue : la roue de Deming (PDCA)</h3>
      <p>Cycle d'amélioration continue de la qualité en 4 temps :</p>
      <ul>
        <li><strong>P (Plan)</strong> : planifier, définir l'objectif et les actions.</li>
        <li><strong>D (Do)</strong> : mettre en œuvre les actions.</li>
        <li><strong>C (Check)</strong> : mesurer, évaluer les résultats (indicateurs).</li>
        <li><strong>A (Act)</strong> : ajuster, corriger, généraliser.</li>
      </ul>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>PDCA</strong> = <em>Prévoir, Développer, Contrôler, Améliorer</em> — la roue qui tourne sans jamais redescendre (cale = système qualité).</div>
      <h3>L'évaluation des pratiques professionnelles (EPP)</h3>
      <p>L'<span class="key" data-term="EPP">EPP</span> est une démarche organisée d'amélioration de la qualité comparant la pratique réelle à une pratique de référence (recommandations). Elle est intégrée au <strong>développement professionnel continu (DPC)</strong>, obligatoire pour les professionnels de santé.</p>
      <h3>Principales méthodes</h3>
      <table class="tbl">
        <tr><th>Méthode</th><th>Principe</th></tr>
        <tr><td><span class="key" data-term="audit clinique">Audit clinique</span></td><td>Comparer la pratique à un référentiel via une grille de critères, puis plan d'action.</td></tr>
        <tr><td>Revue de morbi-mortalité (RMM)</td><td>Analyse collective et rétrospective de cas marqués par un décès ou une complication.</td></tr>
        <tr><td>Patient traceur</td><td>Évaluer le parcours réel d'un patient pour repérer les points forts et à améliorer.</td></tr>
        <tr><td>Chemin clinique</td><td>Décrire et standardiser la prise en charge optimale d'une pathologie.</td></tr>
      </table>
      <div class="callout"><div class="callout-t">En pratique</div>Une démarche EPP n'est pas une sanction : elle vise l'amélioration, jamais la recherche d'un coupable. Approche systémique, non culpabilisante.</div>
    `,
    refs: ["UE 4.8"],
  },
  {
    id: "f_4_8_gestion_risques", ueId: "4.8", type: "cours",
    titre: "Gestion des risques et événements indésirables",
    resume: "EIAS, EIG, déclaration, signalement et culture de sécurité.",
    tags: ["gestion des risques", "EIG", "EIAS", "déclaration", "vigilance"],
    html: `
      <h3>Vocabulaire</h3>
      <ul>
        <li><span class="key" data-term="EIAS">EIAS</span> : événement indésirable associé aux soins — préjudice lié à un soin et non à l'évolution de la maladie.</li>
        <li><span class="key" data-term="EIG">EIG</span> : événement indésirable grave — décès, mise en jeu du pronostic vital, déficit, prolongation d'hospitalisation.</li>
        <li><strong>Événement porteur de risque (EPR)</strong> ou « presque accident » : incident sans conséquence mais qui aurait pu en avoir.</li>
        <li><strong>Événement indésirable évitable</strong> : qui ne serait pas survenu si les soins avaient été conformes.</li>
      </ul>
      <h3>Prévention des risques</h3>
      <ul>
        <li><strong>A priori</strong> : anticiper les risques avant qu'ils surviennent (cartographie des risques, AMDEC, check-list).</li>
        <li><strong>A posteriori</strong> : analyser un événement survenu (déclaration, analyse des causes, méthode ALARM, arbre des causes).</li>
      </ul>
      <h3>Déclaration et signalement</h3>
      <p>Tout professionnel doit <strong>déclarer</strong> les EIAS (déclaration interne) ; les <strong>EIG associés aux soins</strong> font l'objet d'un signalement obligatoire à l'ARS. Les vigilances sanitaires structurent les signalements (pharmacovigilance, hémovigilance, matériovigilance, infectiovigilance, identitovigilance).</p>
      <div class="callout danger"><div class="callout-t">Vigilance</div>La déclaration repose sur une <strong>culture positive de l'erreur</strong> : non-punitive, anonyme si besoin, centrée sur l'analyse systémique des causes (« qui a déclaré » importe moins que « pourquoi c'est arrivé »).</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Les vigilances : <strong>« PHMII »</strong> = Pharmaco, Hémo, Matério, Infectio, Identito-vigilance.</div>
    `,
    refs: ["UE 4.8"],
  },
  {
    id: "f_4_8_indicateurs_protocoles", ueId: "4.8", type: "cours",
    titre: "Indicateurs, protocoles et traçabilité",
    resume: "Mesurer la qualité : indicateurs IQSS, protocoles, procédures et traçabilité.",
    tags: ["indicateurs", "IQSS", "protocole", "procédure", "traçabilité"],
    html: `
      <h3>Les indicateurs qualité</h3>
      <p>Un <span class="key" data-term="indicateur">indicateur</span> est une donnée mesurable, objective et reproductible permettant de suivre l'évolution de la qualité. Les <strong>IQSS</strong> (indicateurs de qualité et de sécurité des soins) sont recueillis et publiés (transparence).</p>
      <ul>
        <li><strong>Indicateurs de structure</strong> : moyens (personnel, matériel, locaux).</li>
        <li><strong>Indicateurs de processus</strong> : conformité des pratiques (ex. tenue du dossier, tri du linge).</li>
        <li><strong>Indicateurs de résultat</strong> : effets sur le patient (taux d'infections, satisfaction, escarres).</li>
      </ul>
      <p>Exemples : tenue du dossier patient, traçabilité de l'évaluation de la douleur, taux d'infections associées aux soins, indicateur e-Satis (satisfaction des patients hospitalisés).</p>
      <h3>Protocoles, procédures, recommandations</h3>
      <table class="tbl">
        <tr><th>Document</th><th>Définition</th></tr>
        <tr><td><span class="key" data-term="protocole">Protocole</span></td><td>Description précise et détaillée d'une conduite à tenir pour un soin donné (qui, quoi, comment).</td></tr>
        <tr><td>Procédure</td><td>Manière spécifiée d'organiser une activité ou un processus.</td></tr>
        <tr><td>Recommandation (RBP)</td><td>Avis fondé sur les preuves, élaboré par la HAS ; n'a pas valeur d'obligation absolue mais de référence.</td></tr>
      </table>
      <h3>Traçabilité</h3>
      <p>La <span class="key" data-term="traçabilité">traçabilité</span> consiste à enregistrer toute action de soin (date, heure, nature, signature). « Ce qui n'est pas écrit n'est pas fait. » Elle garantit la continuité, la sécurité, et constitue une preuve médico-légale.</p>
      <div class="callout"><div class="callout-t">À retenir</div>Un bon indicateur est <strong>SMART</strong> : Spécifique, Mesurable, Atteignable, Réaliste, Temporellement défini.</div>
    `,
    refs: ["UE 4.8"],
  },
];
export const qcm = [
  { ueId: "4.8", q: "Que signifie le sigle PDCA (roue de Deming) ?", options: ["Plan, Do, Check, Act", "Prévenir, Déclarer, Corriger, Auditer", "Planifier, Décider, Contrôler, Appliquer", "Process, Data, Care, Audit"], correct: 0, explication: "Le cycle PDCA : Plan (planifier), Do (faire), Check (vérifier), Act (ajuster). C'est l'outil de base de l'amélioration continue de la qualité.", ref: "UE 4.8", diff: 1 },
  { ueId: "4.8", q: "Quel organisme assure la certification des établissements de santé en France ?", options: ["L'ANSM", "La HAS", "L'ARS", "L'Assurance Maladie"], correct: 1, explication: "La Haute Autorité de Santé (HAS) pilote la certification obligatoire des établissements de santé et émet les recommandations de bonnes pratiques.", ref: "UE 4.8", diff: 1 },
  { ueId: "4.8", q: "Que désigne un EIG ?", options: ["Un examen d'imagerie générale", "Un événement indésirable grave associé aux soins", "Une évaluation interne de gestion", "Un établissement d'intérêt général"], correct: 1, explication: "EIG = événement indésirable grave : décès, mise en jeu du pronostic vital, déficit fonctionnel ou prolongation d'hospitalisation. Les EIG associés aux soins font l'objet d'un signalement à l'ARS.", ref: "UE 4.8", diff: 1 },
  { ueId: "4.8", q: "L'EPP (évaluation des pratiques professionnelles) a pour but principal de :", options: ["Sanctionner les erreurs des soignants", "Comparer la pratique réelle à une référence pour l'améliorer", "Réduire les effectifs", "Classer les hôpitaux entre eux"], correct: 1, explication: "L'EPP est une démarche d'amélioration : elle confronte la pratique réelle aux recommandations afin d'identifier les écarts et les corriger. Elle n'est jamais punitive.", ref: "UE 4.8", diff: 2 },
  { ueId: "4.8", q: "Parmi ces méthodes, laquelle analyse rétrospectivement un cas marqué par un décès ou une complication ?", options: ["L'audit clinique", "Le patient traceur", "La revue de morbi-mortalité (RMM)", "Le chemin clinique"], correct: 2, explication: "La RMM est une analyse collective, rétrospective et systémique des cas ayant entraîné décès, complication ou événement grave, pour en tirer des enseignements.", ref: "UE 4.8", diff: 2 },
  { ueId: "4.8", q: "Selon l'OMS, la qualité des soins vise le meilleur résultat de santé :", options: ["Au plus grand risque accepté", "Au moindre risque iatrogène et au meilleur coût", "Sans considération de coût", "Indépendamment de la satisfaction du patient"], correct: 1, explication: "La définition OMS associe : meilleur résultat de santé, moindre risque iatrogène, plus grande satisfaction du patient, et meilleur coût.", ref: "UE 4.8", diff: 2 },
  { ueId: "4.8", q: "Qu'est-ce qu'un indicateur de résultat ?", options: ["La présence d'un matériel donné", "La conformité d'une procédure", "Un effet mesurable sur le patient (ex. taux d'escarres)", "Le nombre de soignants par service"], correct: 2, explication: "Les indicateurs de résultat mesurent les effets sur le patient (infections, escarres, satisfaction). Structure = moyens, processus = pratiques, résultat = effets.", ref: "UE 4.8", diff: 2 },
  { ueId: "4.8", q: "La traçabilité des soins repose sur le principe :", options: ["« Ce qui n'est pas écrit n'est pas fait »", "« On note seulement les soins importants »", "« La transmission orale suffit »", "« Seul le médecin trace »"], correct: 0, explication: "La traçabilité écrite garantit la continuité, la sécurité et constitue une preuve médico-légale. Tout acte de soin doit être daté, horodaté et signé.", ref: "UE 4.8", diff: 1 },
  { ueId: "4.8", q: "La gestion des risques A PRIORI consiste à :", options: ["Analyser un événement déjà survenu", "Anticiper et prévenir les risques avant leur survenue", "Sanctionner les responsables", "Attendre le retour d'expérience"], correct: 1, explication: "L'approche a priori (cartographie des risques, check-list, AMDEC) anticipe les risques. L'approche a posteriori analyse les événements survenus.", ref: "UE 4.8", diff: 2 },
  { ueId: "4.8", q: "Quelle vigilance concerne la surveillance des effets indésirables des médicaments ?", options: ["L'hémovigilance", "La matériovigilance", "La pharmacovigilance", "L'identitovigilance"], correct: 2, explication: "La pharmacovigilance surveille les effets indésirables des médicaments. Hémo = produits sanguins, matério = dispositifs médicaux, identito = identité du patient.", ref: "UE 4.8", diff: 1 },
  { ueId: "4.8", q: "La culture positive de l'erreur implique que la déclaration d'un événement indésirable soit :", options: ["Punitive et nominative", "Non punitive et centrée sur l'analyse des causes", "Réservée aux médecins", "Facultative et secrète"], correct: 1, explication: "La culture de sécurité privilégie une déclaration non punitive, axée sur l'analyse systémique des causes plutôt que sur la recherche d'un coupable.", ref: "UE 4.8", diff: 2 },
  { ueId: "4.8", q: "Qu'est-ce qu'un événement porteur de risque (EPR) ou « presque accident » ?", options: ["Un événement ayant causé un décès", "Un incident sans conséquence mais qui aurait pu en avoir", "Une erreur volontaire", "Un risque purement théorique"], correct: 1, explication: "L'EPR (near miss) est un événement qui n'a pas eu de conséquence grâce à une récupération, mais qui aurait pu en avoir. Sa déclaration est précieuse pour prévenir.", ref: "UE 4.8", diff: 2 },
  { ueId: "4.8", q: "Le patient traceur est une méthode qui :", options: ["Suit le parcours réel d'un patient pour évaluer la prise en charge", "Trace les médicaments du patient", "Localise géographiquement le patient", "Identifie le patient par bracelet"], correct: 0, explication: "Le patient traceur analyse rétrospectivement le parcours réel d'un patient pour repérer les écarts et points à améliorer dans l'organisation des soins.", ref: "UE 4.8", diff: 2 },
  { ueId: "4.8", q: "À quelle fréquence la certification HAS des établissements est-elle réalisée ?", options: ["Tous les ans", "Tous les 4 ans environ", "Une seule fois", "Tous les 10 ans"], correct: 1, explication: "La certification HAS est périodique, réalisée environ tous les 4 ans, via des visites d'experts-visiteurs et le référentiel de certification.", ref: "UE 4.8", diff: 2 },
  { ueId: "4.8", q: "Un indicateur de qualité doit idéalement être SMART. Le « M » signifie :", options: ["Médical", "Mesurable", "Moderne", "Maximal"], correct: 1, explication: "SMART : Spécifique, Mesurable, Atteignable, Réaliste, Temporellement défini. Un indicateur doit pouvoir être quantifié objectivement.", ref: "UE 4.8", diff: 2 },
  { ueId: "4.8", q: "La différence entre un protocole et une recommandation (RBP) est que :", options: ["La recommandation est plus détaillée que le protocole", "Le protocole décrit une conduite précise, la RBP est un avis de référence fondé sur les preuves", "Les deux sont strictement identiques", "Le protocole est facultatif et la RBP obligatoire"], correct: 1, explication: "Le protocole détaille une conduite à tenir (qui, quoi, comment) ; la recommandation de bonne pratique est un avis fondé sur les preuves, élaboré par la HAS, servant de référence.", ref: "UE 4.8", diff: 3 },
  { ueId: "4.8", q: "Un événement indésirable est dit « évitable » lorsque :", options: ["Il est lié à l'évolution naturelle de la maladie", "Il ne serait pas survenu si les soins avaient été conformes aux bonnes pratiques", "Il est imprévisible", "Il n'a aucune conséquence"], correct: 1, explication: "Un EIAS évitable est celui qui ne serait pas survenu si la prise en charge avait été conforme aux référentiels. Identifier l'évitabilité oriente les actions de prévention.", ref: "UE 4.8", diff: 2 },
  { ueId: "4.8", q: "Quel dispositif rend l'EPP obligatoire pour les professionnels de santé ?", options: ["Le DPC (développement professionnel continu)", "Le DMP (dossier médical partagé)", "Le PMSI", "La CPAM"], correct: 0, explication: "L'EPP s'inscrit dans le développement professionnel continu (DPC), obligation de formation et d'évaluation pour les professionnels de santé.", ref: "UE 4.8", diff: 3 },
  { ueId: "4.8", q: "L'audit clinique consiste essentiellement à :", options: ["Contrôler les comptes du service", "Comparer la pratique à un référentiel via une grille de critères", "Évaluer la charge de travail", "Sanctionner les écarts"], correct: 1, explication: "L'audit clinique mesure l'écart entre la pratique observée et un référentiel à l'aide d'une grille de critères, puis débouche sur un plan d'amélioration.", ref: "UE 4.8", diff: 2 },
  { ueId: "4.8", q: "Parmi les dimensions de la qualité, la « pertinence » des soins signifie :", options: ["Le soin le moins cher", "Le bon soin, au bon patient, au bon moment", "Le soin le plus technique", "Le soin le plus rapide"], correct: 1, explication: "La pertinence consiste à délivrer le soin juste nécessaire : ni excès (surqualité, sur-traitement), ni insuffisance, adapté au besoin réel du patient.", ref: "UE 4.8", diff: 2 },
  { ueId: "4.8", q: "L'identitovigilance vise à :", options: ["Surveiller les dispositifs médicaux", "Prévenir les erreurs liées à l'identification du patient", "Tracer les produits sanguins", "Évaluer la douleur"], correct: 1, explication: "L'identitovigilance prévient les erreurs d'identité (mauvais patient, homonymes) tout au long du parcours de soins, élément clé de la sécurité.", ref: "UE 4.8", diff: 2 },
];
export const flashcards = [
  { ueId: "4.8", recto: "Que signifie PDCA (roue de Deming) ?", verso: "Plan (planifier), Do (faire), Check (vérifier), Act (ajuster) — cycle d'amélioration continue." },
  { ueId: "4.8", recto: "Quel organisme certifie les établissements de santé ?", verso: "La HAS (Haute Autorité de Santé), certification obligatoire tous les 4 ans environ." },
  { ueId: "4.8", recto: "Définition de l'EPP ?", verso: "Évaluation des pratiques professionnelles : comparer la pratique réelle à une référence pour l'améliorer (intégrée au DPC)." },
  { ueId: "4.8", recto: "Qu'est-ce qu'un EIG ?", verso: "Événement indésirable grave : décès, pronostic vital engagé, déficit ou prolongation d'hospitalisation." },
  { ueId: "4.8", recto: "Différence EIAS / EIG ?", verso: "EIAS = événement indésirable associé aux soins ; EIG = sa forme grave." },
  { ueId: "4.8", recto: "Définition OMS de la qualité des soins ?", verso: "Meilleur résultat de santé, au moindre risque iatrogène, pour la plus grande satisfaction, au meilleur coût." },
  { ueId: "4.8", recto: "Les 3 types d'indicateurs qualité ?", verso: "Indicateurs de structure (moyens), de processus (pratiques), de résultat (effets sur le patient)." },
  { ueId: "4.8", recto: "Principe de la traçabilité ?", verso: "« Ce qui n'est pas écrit n'est pas fait » : tout acte daté, horodaté, signé ; preuve médico-légale." },
  { ueId: "4.8", recto: "Gestion des risques a priori vs a posteriori ?", verso: "A priori = anticiper avant survenue (cartographie, check-list) ; a posteriori = analyser après survenue (déclaration, arbre des causes)." },
  { ueId: "4.8", recto: "Citez les principales vigilances sanitaires.", verso: "Pharmacovigilance, hémovigilance, matériovigilance, infectiovigilance, identitovigilance." },
  { ueId: "4.8", recto: "Qu'est-ce que la RMM ?", verso: "Revue de morbi-mortalité : analyse collective et rétrospective d'un cas marqué par décès ou complication." },
  { ueId: "4.8", recto: "Qu'est-ce qu'un EPR (presque accident) ?", verso: "Événement porteur de risque : incident sans conséquence mais qui aurait pu en avoir." },
  { ueId: "4.8", recto: "Qu'est-ce que la méthode du patient traceur ?", verso: "Évaluer le parcours réel d'un patient pour repérer points forts et axes d'amélioration." },
  { ueId: "4.8", recto: "Caractéristiques d'un bon indicateur (SMART) ?", verso: "Spécifique, Mesurable, Atteignable, Réaliste, Temporellement défini." },
  { ueId: "4.8", recto: "Protocole vs recommandation (RBP) ?", verso: "Protocole = conduite précise à tenir ; RBP = avis de référence fondé sur les preuves (HAS)." },
  { ueId: "4.8", recto: "Pourquoi une culture positive de l'erreur ?", verso: "Déclaration non punitive, centrée sur l'analyse systémique des causes, pas sur le coupable." },
];
