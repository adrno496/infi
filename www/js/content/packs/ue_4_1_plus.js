export const fiches = [
  { id: "fx_ue_4_1_plus_escarres", ueId: "4.1", type: "cours",
    titre: "Prévention des escarres : physiopathologie, évaluation et stratégie de soins",
    resume: "Comprendre la formation de l'escarre et appliquer une prévention structurée et tracée.",
    tags: ["escarre", "prévention", "Braden", "appui"],
    html: `<h3>Définition et mécanisme</h3>
<p>L'<span class="key" data-term="escarre">escarre</span> est une lésion cutanée d'origine ischémique liée à une compression prolongée des tissus mous entre un plan osseux (saillie) et un support. La pression interrompt la microcirculation : il en résulte une <strong>hypoxie tissulaire</strong>, puis une nécrose qui s'étend du plan profond vers la surface.</p>
<p>Trois forces mécaniques sont en cause :</p>
<ul>
<li><strong>Pression</strong> : compression directe, surtout au-dessus des saillies osseuses.</li>
<li><strong>Cisaillement</strong> : glissement des plans tissulaires (patient qui glisse dans le lit en position semi-assise).</li>
<li><strong>Friction</strong> : frottement de la peau sur le support lors des mobilisations.</li>
</ul>
<div class="callout"><div class="callout-t">Zones à risque selon la position</div>
<ul>
<li><strong>Décubitus dorsal</strong> : sacrum, talons, occiput, coudes, omoplates.</li>
<li><strong>Décubitus latéral</strong> : trochanter, malléole externe, oreille, condyle.</li>
<li><strong>Position assise</strong> : ischions, sacrum.</li>
</ul></div>
<h3>Évaluation du risque</h3>
<p>L'évaluation repose sur le <strong>jugement clinique</strong> associé à une échelle validée. L'échelle de <span class="key" data-term="Braden">Braden</span> évalue 6 items (perception sensorielle, humidité, activité, mobilité, nutrition, friction/cisaillement) ; le score total va de 6 à 23, le risque augmentant quand le score diminue.</p>
<table class="tbl">
<tr><th>Stade (classification)</th><th>Description</th></tr>
<tr><td>Stade 1</td><td>Érythème ne blanchissant pas à la pression, peau intacte.</td></tr>
<tr><td>Stade 2</td><td>Atteinte partielle du derme : phlyctène ou abrasion.</td></tr>
<tr><td>Stade 3</td><td>Atteinte complète de la peau, tissu sous-cutané visible.</td></tr>
<tr><td>Stade 4</td><td>Atteinte des structures profondes : muscle, tendon, os.</td></tr>
</table>
<h3>Stratégie de prévention</h3>
<ul>
<li><strong>Mobilisation / changements de position</strong> : alterner les appuis régulièrement, adapter au risque et à la tolérance du patient.</li>
<li><strong>Support adapté</strong> : matelas/coussin de répartition de pression selon le niveau de risque.</li>
<li><strong>Hygiène et soin de peau</strong> : peau propre et sèche, observation quotidienne, pas de massage des zones d'appui rougies.</li>
<li><strong>Nutrition et hydratation</strong> : un état nutritionnel correct est un facteur protecteur ; dépister la dénutrition.</li>
<li><strong>Décharge des talons</strong> : surélever les jambes pour suspendre les talons du plan du lit.</li>
</ul>
<div class="callout"><div class="callout-t">Geste à proscrire</div>
<p>Ne jamais masser ni frictionner une rougeur sur une zone d'appui : cela aggrave la souffrance tissulaire au lieu de la prévenir.</p></div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo : « PEAU SÈCHE »</div>
<p><strong>P</strong>osition à changer, <strong>E</strong>valuation du risque (Braden), <strong>A</strong>ppui à décharger, <strong>U</strong>ne peau observée chaque jour, <strong>S</strong>upport adapté, <strong>E</strong>tat nutritionnel suivi.</p></div>`,
    refs: ["HAS – Prévention des escarres", "Référentiel IFSI 2009 – UE 4.1"] },

  { id: "fx_ue_4_1_plus_installation", ueId: "4.1", type: "cours",
    titre: "Installation du patient et ergonomie du soignant",
    resume: "Installer confortablement le patient et protéger le dos du soignant lors des manutentions.",
    tags: ["installation", "manutention", "ergonomie", "positions"],
    html: `<h3>Objectifs de l'installation</h3>
<p>Une installation de qualité vise le <span class="key" data-term="confort">confort</span>, la prévention des complications de décubitus (escarres, attitudes vicieuses, encombrement bronchique, troubles circulatoires) et le maintien de l'autonomie. Elle est toujours expliquée au patient et adaptée à sa pathologie.</p>
<h3>Principales positions</h3>
<table class="tbl">
<tr><th>Position</th><th>Indication / objectif</th></tr>
<tr><td>Décubitus dorsal</td><td>Position de repos, examens, post-opératoire selon prescription.</td></tr>
<tr><td>Semi-assise (Fowler)</td><td>Détresse respiratoire, alimentation, prévention des fausses routes.</td></tr>
<tr><td>Décubitus latéral / PLS</td><td>Trouble de conscience, prévention de l'inhalation, alternance d'appui.</td></tr>
<tr><td>Position déclive (Trendelenburg)</td><td>Sur prescription, ex. hypotension (à utiliser avec prudence).</td></tr>
<tr><td>Proclive (jambes surélevées)</td><td>Retour veineux, œdèmes des membres inférieurs.</td></tr>
</table>
<h3>Prévention des attitudes vicieuses</h3>
<ul>
<li>Maintenir les articulations en position fonctionnelle (pieds à angle droit, mains semi-fléchies).</li>
<li>Utiliser oreillers et cales pour soutenir les segments sans créer de point de pression.</li>
<li>Surveiller l'alignement du rachis et des membres.</li>
</ul>
<h3>Ergonomie et manutention</h3>
<p>La manutention manuelle est une cause majeure de <strong>troubles musculo-squelettiques</strong> (TMS) chez les soignants. Les principes de sécurité physique :</p>
<ul>
<li><strong>Évaluer</strong> la situation et les capacités du patient avant tout transfert (le faire participer).</li>
<li><strong>Verrouiller le rachis</strong> en position neutre et plier les genoux : utiliser la force des jambes, pas du dos.</li>
<li><strong>Rapprocher la charge</strong> du corps et garder un polygone de sustentation large (pieds écartés).</li>
<li><strong>Préparer l'environnement</strong> : frein du lit, hauteur de travail réglée, espace dégagé.</li>
<li><strong>Utiliser les aides techniques</strong> : drap de glissement, lève-personne, planche de transfert.</li>
</ul>
<div class="callout"><div class="callout-t">Sécurité avant tout transfert</div>
<p>Lit freiné, lit à bonne hauteur, patient informé, matériel à portée : un transfert non préparé est un transfert dangereux pour le patient comme pour le soignant.</p></div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo : « JE PLIE »</div>
<p><strong>J</strong>ambes fléchies, <strong>E</strong>space dégagé, <strong>P</strong>atient acteur, <strong>L</strong>it freiné et à hauteur, <strong>I</strong>nformation donnée, <strong>E</strong>quipement (aides techniques) utilisé.</p></div>`,
    refs: ["INRS – Prévention des TMS / manutention", "Référentiel IFSI 2009 – UE 4.1"] },

  { id: "fx_ue_4_1_plus_hygiene", ueId: "4.1", type: "cours",
    titre: "Soins d'hygiène et de confort : toilette et soins de bouche",
    resume: "Réaliser la toilette et les soins de bouche dans le respect de la pudeur et de la sécurité.",
    tags: ["hygiène", "toilette", "soin de bouche", "pudeur"],
    html: `<h3>Sens et objectifs de la toilette</h3>
<p>La <span class="key" data-term="toilette">toilette</span> n'est pas un simple geste technique : c'est un soin relationnel qui répond à un besoin fondamental (être propre, protéger ses téguments), permet d'observer l'état cutané et de maintenir l'image de soi. Elle respecte la <strong>pudeur</strong>, l'intimité et le consentement de la personne.</p>
<h3>Principes de réalisation</h3>
<ul>
<li>Hygiène des mains avant et après, port de gants pour les zones souillées.</li>
<li>Aller du <strong>plus propre vers le plus sale</strong> ; toilette génito-anale réalisée en dernier, d'avant en arrière chez la femme.</li>
<li>Respecter la température ambiante et de l'eau, sécher soigneusement les plis pour prévenir la macération.</li>
<li>Favoriser la participation et l'autonomie de la personne (toilette évaluative).</li>
<li>Observer la peau : rougeurs aux points d'appui, mycoses des plis, intégrité cutanée.</li>
</ul>
<div class="callout"><div class="callout-t">Observation pendant la toilette</div>
<p>La toilette est un moment privilégié de surveillance clinique : état cutané, mobilité, douleur, état psychologique, repérage de signes précoces d'escarre.</p></div>
<h3>Soins de bouche</h3>
<p>Le soin de bouche maintient l'<strong>hydratation</strong> et l'intégrité des muqueuses, prévient les infections et améliore le confort. Il est essentiel chez le patient à jeun, sous oxygénothérapie, dénutri ou en soins palliatifs.</p>
<ul>
<li><strong>Soin de bouche d'hygiène</strong> : entretien courant chez le patient autonome ou non.</li>
<li><strong>Soin de bouche thérapeutique</strong> : sur prescription (antifongique, antiseptique) en cas de mycose, mucite, lésion.</li>
</ul>
<table class="tbl">
<tr><th>Signe observé</th><th>Évocation</th></tr>
<tr><td>Enduit blanchâtre se détachant</td><td>Candidose (mycose) buccale.</td></tr>
<tr><td>Muqueuse sèche, langue saburrale</td><td>Déshydratation, défaut d'hygiène.</td></tr>
<tr><td>Muqueuse inflammatoire, douloureuse</td><td>Mucite (ex. post-chimiothérapie).</td></tr>
</table>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo : « du PROPRE au SALE »</div>
<p>Toujours progresser du visage vers le siège ; chez la femme, toilette périnéale d'<strong>avant en arrière</strong> pour limiter la contamination urinaire par les germes digestifs.</p></div>`,
    refs: ["Référentiel IFSI 2009 – UE 4.1", "Recommandations soins de bouche en soins palliatifs"] },
];

export const qcm = [
  { ueId: "4.1", q: "Quel est le mécanisme physiopathologique principal de l'escarre ?",
    options: ["Une infection bactérienne primitive de la peau", "Une ischémie tissulaire par compression prolongée", "Une réaction allergique de contact", "Un déficit en vitamine C isolé"],
    correct: 1,
    explication: "L'escarre résulte d'une compression prolongée des tissus mous entre une saillie osseuse et un support, entraînant une ischémie (hypoxie) puis une nécrose tissulaire. L'infection est une complication possible, pas la cause initiale.",
    ref: "HAS – Prévention des escarres", diff: 1 },

  { ueId: "4.1", q: "En décubitus dorsal, quelle zone N'EST PAS une zone d'appui à risque d'escarre ?",
    options: ["Le sacrum", "Les talons", "L'occiput", "Le trochanter"],
    correct: 3,
    explication: "Le trochanter est une zone d'appui en décubitus latéral. En décubitus dorsal, les points à risque sont notamment le sacrum, les talons, l'occiput, les coudes et les omoplates.",
    ref: "HAS – Prévention des escarres", diff: 2 },

  { ueId: "4.1", q: "L'échelle de Braden évalue le risque d'escarre. Comment varie le risque selon le score ?",
    options: ["Le risque augmente quand le score augmente", "Le risque augmente quand le score diminue", "Le score n'a aucun lien avec le risque", "Un score élevé impose un matelas à air immédiatement"],
    correct: 1,
    explication: "Avec l'échelle de Braden (total de 6 à 23), plus le score est bas, plus le risque d'escarre est élevé. Elle complète le jugement clinique, elle ne le remplace pas.",
    ref: "Échelle de Braden", diff: 2 },

  { ueId: "4.1", q: "Devant une rougeur ne blanchissant pas à la pression sur le sacrum, quelle attitude est correcte ?",
    options: ["Masser énergiquement la zone pour relancer la circulation", "Frictionner avec de l'alcool", "Décharger l'appui et renforcer la surveillance", "Appliquer une source de chaleur locale"],
    correct: 2,
    explication: "Un érythème ne blanchissant pas signe un stade 1 d'escarre. Le massage et la friction sont proscrits car ils aggravent la souffrance tissulaire. Il faut décharger la zone et intensifier la prévention.",
    ref: "HAS – Prévention des escarres", diff: 1 },

  { ueId: "4.1", q: "Quel stade d'escarre correspond à une phlyctène (atteinte partielle du derme) ?",
    options: ["Stade 1", "Stade 2", "Stade 3", "Stade 4"],
    correct: 1,
    explication: "Le stade 2 correspond à une atteinte partielle du derme se traduisant par une phlyctène ou une abrasion. Le stade 1 est un érythème sur peau intacte ; les stades 3 et 4 atteignent les tissus profonds.",
    ref: "Classification des escarres", diff: 2 },

  { ueId: "4.1", q: "Parmi ces forces mécaniques, laquelle correspond au glissement du patient dans un lit en position semi-assise ?",
    options: ["La friction", "La pression", "Le cisaillement", "La pesanteur veineuse"],
    correct: 2,
    explication: "Le cisaillement correspond au glissement des plans tissulaires les uns par rapport aux autres, typiquement quand le patient glisse vers le bas du lit en position semi-assise. La friction est un frottement de surface.",
    ref: "Physiopathologie de l'escarre", diff: 2 },

  { ueId: "4.1", q: "Quel facteur est un élément PROTECTEUR vis-à-vis du risque d'escarre ?",
    options: ["La dénutrition", "Un bon état nutritionnel", "L'incontinence non prise en charge", "L'immobilité prolongée"],
    correct: 1,
    explication: "Un état nutritionnel correct favorise la trophicité cutanée et la cicatrisation, réduisant le risque d'escarre. Dénutrition, incontinence et immobilité sont au contraire des facteurs de risque.",
    ref: "HAS – Prévention des escarres", diff: 1 },

  { ueId: "4.1", q: "Comment décharger efficacement les talons chez un patient alité à risque ?",
    options: ["Placer un coussin directement sous les talons", "Surélever les jambes pour suspendre les talons du plan du lit", "Mettre des chaussettes serrées", "Surélever la tête du lit à 90°"],
    correct: 1,
    explication: "La décharge des talons consiste à surélever les jambes (coussin sous les mollets) pour que les talons ne reposent plus sur le matelas. Un coussin sous le talon lui-même maintient au contraire l'appui.",
    ref: "Prévention des escarres – décharge des talons", diff: 2 },

  { ueId: "4.1", q: "Lors d'une toilette génito-anale chez une femme, le sens du nettoyage doit être :",
    options: ["D'arrière en avant", "D'avant en arrière", "Du bas vers le haut sans ordre", "Indifférent"],
    correct: 1,
    explication: "La toilette périnéale chez la femme se fait d'avant en arrière (de la vulve vers l'anus) pour limiter la contamination des voies urinaires par les germes d'origine digestive, prévenant les infections urinaires.",
    ref: "Référentiel IFSI 2009 – UE 4.1", diff: 1 },

  { ueId: "4.1", q: "Quel principe général guide l'ordre de réalisation de la toilette ?",
    options: ["Du plus sale vers le plus propre", "Du plus propre vers le plus sale", "Toujours commencer par le siège", "Sans ordre particulier"],
    correct: 1,
    explication: "On progresse du plus propre vers le plus sale (du visage vers le siège), la zone génito-anale étant lavée en dernier, afin de limiter la dissémination des germes.",
    ref: "Référentiel IFSI 2009 – UE 4.1", diff: 1 },

  { ueId: "4.1", q: "Pourquoi sécher soigneusement les plis cutanés après la toilette ?",
    options: ["Pour parfumer la peau", "Pour prévenir la macération et les mycoses", "Pour réchauffer le patient", "Cela n'a pas d'utilité réelle"],
    correct: 1,
    explication: "Un séchage soigneux des plis (sous-mammaires, inguinaux, interdigitaux) prévient la macération qui favorise les mycoses et l'altération cutanée.",
    ref: "Soins d'hygiène – téguments", diff: 1 },

  { ueId: "4.1", q: "Un enduit blanchâtre qui se détache des muqueuses buccales évoque le plus probablement :",
    options: ["Une déshydratation simple", "Une candidose (mycose) buccale", "Une mucite radique", "Une hypersialorrhée"],
    correct: 1,
    explication: "Un enduit blanchâtre détachable est évocateur d'une candidose buccale (mycose), qui relève souvent d'un soin de bouche thérapeutique antifongique sur prescription.",
    ref: "Soins de bouche", diff: 2 },

  { ueId: "4.1", q: "Quelle position est privilégiée pour prévenir les fausses routes lors de l'alimentation ?",
    options: ["Décubitus dorsal strict à plat", "Position semi-assise (Fowler)", "Décubitus ventral", "Trendelenburg"],
    correct: 1,
    explication: "La position semi-assise (Fowler) facilite la déglutition et réduit le risque de fausse route et d'inhalation pendant et après le repas. Le décubitus à plat augmente ce risque.",
    ref: "Installation du patient – prévention des fausses routes", diff: 1 },

  { ueId: "4.1", q: "Quel est le principe ergonomique de base pour soulever une charge sans se blesser le dos ?",
    options: ["Plier le dos et garder les jambes tendues", "Plier les genoux et garder le rachis en position neutre", "Soulever brusquement en torsion", "Éloigner la charge du corps"],
    correct: 1,
    explication: "Il faut plier les genoux, verrouiller le rachis en position neutre et utiliser la force des jambes, charge maintenue près du corps. Plier le dos et la torsion exposent aux lombalgies et TMS.",
    ref: "INRS – manutention manuelle", diff: 1 },

  { ueId: "4.1", q: "Avant tout transfert d'un patient du lit au fauteuil, quelle vérification est indispensable ?",
    options: ["Que le lit soit déverrouillé pour bouger", "Que le lit soit freiné et à bonne hauteur", "Que la chambre soit dans l'obscurité", "Que le patient soit à jeun"],
    correct: 1,
    explication: "Le lit doit impérativement être freiné et réglé à une hauteur adaptée, l'environnement dégagé et le patient informé. Un lit non freiné peut provoquer une chute lors du transfert.",
    ref: "Sécurité des transferts", diff: 1 },

  { ueId: "4.1", q: "Quel matériel constitue une aide technique à la manutention ?",
    options: ["Un drap de glissement", "Un haricot", "Un garrot", "Un pied à perfusion"],
    correct: 0,
    explication: "Le drap de glissement, comme le lève-personne et la planche de transfert, réduit les efforts du soignant et sécurise la mobilisation du patient. Les autres items ne servent pas à la manutention.",
    ref: "Aides techniques à la manutention", diff: 1 },

  { ueId: "4.1", q: "Pourquoi la toilette est-elle considérée comme un soin et pas un simple acte technique ?",
    options: ["Parce qu'elle est facturée à part", "Parce qu'elle a une dimension relationnelle et permet l'observation clinique", "Parce qu'elle remplace l'examen médical", "Uniquement pour des raisons d'hygiène hospitalière"],
    correct: 1,
    explication: "La toilette répond à un besoin fondamental, comporte une forte dimension relationnelle (respect de la pudeur, image de soi) et constitue un temps d'observation clinique essentiel (peau, mobilité, douleur, état psychique).",
    ref: "Référentiel IFSI 2009 – UE 4.1", diff: 2 },

  { ueId: "4.1", q: "Le soin de bouche est particulièrement important chez quel type de patient ?",
    options: ["Le patient à jeun ou en soins palliatifs", "Le patient hyperactif", "Le patient qui s'alimente normalement", "Aucun en particulier"],
    correct: 0,
    explication: "Le soin de bouche est essentiel chez le patient à jeun, sous oxygénothérapie, dénutri ou en soins palliatifs, car la salivation et l'auto-nettoyage buccal sont réduits, exposant à la sécheresse et aux infections.",
    ref: "Soins de bouche", diff: 2 },

  { ueId: "4.1", q: "Quelle attitude vicieuse cherche-t-on à prévenir en maintenant le pied à angle droit chez l'alité ?",
    options: ["L'équin (pied tombant)", "Le valgus du genou", "La cyphose dorsale", "La luxation de l'épaule"],
    correct: 0,
    explication: "Maintenir le pied à angle droit (appui plantaire) prévient l'attitude en équin (pied tombant) liée à la rétraction du tendon d'Achille chez le patient longtemps alité.",
    ref: "Prévention des attitudes vicieuses", diff: 3 },

  { ueId: "4.1", q: "Un patient à risque d'escarre présente un score de Braden bas. Quelle mesure de support est la plus cohérente ?",
    options: ["Aucune mesure spécifique", "Un matelas de répartition de pression adapté au niveau de risque", "Un drap supplémentaire serré", "Une bouillotte sous le sacrum"],
    correct: 1,
    explication: "Un risque élevé justifie un support de répartition de pression (matelas/coussin) adapté, associé aux changements de position et à la surveillance cutanée. Une bouillotte risquerait une brûlure sur peau fragile.",
    ref: "Supports anti-escarre", diff: 2 },

  { ueId: "4.1", q: "Lors de la toilette, l'infirmier observe une rougeur au talon. Cette observation illustre quel rôle de la toilette ?",
    options: ["Un rôle uniquement esthétique", "Un rôle de surveillance clinique et de dépistage", "Un rôle administratif", "Aucun rôle particulier"],
    correct: 1,
    explication: "La toilette est un moment privilégié de surveillance permettant le dépistage précoce des signes d'escarre (rougeur aux points d'appui) et l'adaptation immédiate de la prévention.",
    ref: "Référentiel IFSI 2009 – UE 4.1", diff: 1 },

  { ueId: "4.1", q: "Quelle est la conduite correcte concernant la participation du patient à sa toilette ?",
    options: ["Tout faire à sa place pour gagner du temps", "Favoriser au maximum son autonomie et sa participation", "Lui interdire de se laver seul", "Imposer la toilette sans explication"],
    correct: 1,
    explication: "On favorise l'autonomie et la participation du patient (toilette évaluative), ce qui préserve son indépendance, sa dignité et constitue un temps d'évaluation de ses capacités.",
    ref: "Soins d'hygiène – autonomie", diff: 1 },
];

export const flashcards = [
  { ueId: "4.1", recto: "Définition de l'escarre ?", verso: "Lésion ischémique des tissus mous liée à une compression prolongée entre une saillie osseuse et un support, entraînant nécrose." },
  { ueId: "4.1", recto: "Trois forces mécaniques en cause dans l'escarre ?", verso: "Pression, cisaillement et friction." },
  { ueId: "4.1", recto: "Zones à risque en décubitus dorsal ?", verso: "Sacrum, talons, occiput, coudes, omoplates." },
  { ueId: "4.1", recto: "Que mesure l'échelle de Braden et comment l'interpréter ?", verso: "Le risque d'escarre (6 items, score 6 à 23) : plus le score est bas, plus le risque est élevé." },
  { ueId: "4.1", recto: "Stade 1 de l'escarre ?", verso: "Érythème ne blanchissant pas à la pression, sur peau intacte." },
  { ueId: "4.1", recto: "Geste à proscrire sur une rougeur d'appui ?", verso: "Le massage et la friction : ils aggravent la souffrance tissulaire." },
  { ueId: "4.1", recto: "Comment décharger les talons d'un patient alité ?", verso: "Surélever les jambes pour suspendre les talons du plan du lit." },
  { ueId: "4.1", recto: "Sens de la toilette périnéale chez la femme ?", verso: "D'avant en arrière, pour éviter la contamination urinaire par les germes digestifs." },
  { ueId: "4.1", recto: "Ordre général de la toilette ?", verso: "Du plus propre vers le plus sale ; zone génito-anale en dernier." },
  { ueId: "4.1", recto: "Pourquoi sécher les plis cutanés ?", verso: "Pour prévenir la macération et les mycoses." },
  { ueId: "4.1", recto: "Position privilégiée contre les fausses routes ?", verso: "Position semi-assise (Fowler)." },
  { ueId: "4.1", recto: "Principe ergonomique pour soulever une charge ?", verso: "Plier les genoux, verrouiller le rachis neutre, charge près du corps, force des jambes." },
  { ueId: "4.1", recto: "Vérification indispensable avant un transfert ?", verso: "Lit freiné et à bonne hauteur, environnement dégagé, patient informé." },
  { ueId: "4.1", recto: "Enduit blanchâtre détachable dans la bouche évoque ?", verso: "Une candidose (mycose) buccale." },
  { ueId: "4.1", recto: "Quelle attitude vicieuse prévient le pied à angle droit ?", verso: "L'équin (pied tombant)." },
];
