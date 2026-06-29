export const fiches = [
  { id: "fx_anatomie_plus_cardio_resp", ueId: "2.2", type: "cours",
    titre: "Système cardio-respiratoire : valeurs clés et corrélations cliniques",
    resume: "Anatomie fonctionnelle du cœur et du poumon avec les constantes normales et leur traduction au lit du patient.",
    tags: ["cardiologie","respiratoire","constantes"],
    html: `<h3>Le cœur : pompe à deux étages</h3>
<p>Le cœur comporte 4 cavités. Le <span class="key" data-term="cœur droit">cœur droit</span> (oreillette + ventricule droits) reçoit le sang veineux désaturé et l'envoie vers les poumons (petite circulation). Le <span class="key" data-term="cœur gauche">cœur gauche</span> reçoit le sang oxygéné et l'éjecte dans l'aorte (grande circulation). Les valves (tricuspide, pulmonaire, mitrale, aortique) imposent un sens unique au flux.</p>
<ul>
<li><strong>Débit cardiaque</strong> = Fréquence cardiaque &times; Volume d'éjection systolique. Repos : ≈ 5 L/min.</li>
<li><strong>Fraction d'éjection</strong> du ventricule gauche (FEVG) normale : <strong>55 à 70 %</strong>. Une FEVG &lt; 40 % définit une insuffisance cardiaque à fraction d'éjection altérée.</li>
</ul>
<table class="tbl">
<tr><th>Constante</th><th>Valeur adulte au repos</th></tr>
<tr><td>Fréquence cardiaque</td><td>60 à 100 batt/min</td></tr>
<tr><td>Pression artérielle</td><td>≈ 120 / 80 mmHg</td></tr>
<tr><td>Fréquence respiratoire</td><td>12 à 20 cycles/min</td></tr>
<tr><td>SpO2</td><td>≥ 95 % (air ambiant)</td></tr>
</table>
<div class="callout"><div class="callout-t">Corrélation clinique</div>Une <span class="key" data-term="tachycardie">tachycardie</span> avec PA basse oriente vers un état de choc (hypovolémique, septique...). Le débit cardiaque tente de compenser la chute de volume ou de résistances.</div>
<h3>L'appareil respiratoire</h3>
<p>L'air circule du nez/bouche jusqu'aux <span class="key" data-term="alvéoles">alvéoles</span>, lieu des échanges gazeux à travers la membrane alvéolo-capillaire. La plèvre (deux feuillets) permet le glissement du poumon.</p>
<ul>
<li>O2 diffuse de l'alvéole vers le sang ; CO2 fait le trajet inverse.</li>
<li>Le diaphragme est le principal muscle inspiratoire (inspiration active, expiration passive au repos).</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« Le sang VEINEUX est DÉSATURÉ, le sang ARTÉRIEL est OXYGÉNÉ » — sauf dans la <strong>petite circulation</strong> où c'est inversé (artère pulmonaire = sang désaturé, veines pulmonaires = sang oxygéné).</div>`,
    refs: ["Marieb, Anatomie et physiologie humaines","Référentiel IFSI 2009, UE 2.2"] },

  { id: "fx_anatomie_plus_rein_milieu", ueId: "2.2", type: "cours",
    titre: "Rein et équilibre du milieu intérieur : du néphron au bilan biologique",
    resume: "Fonction rénale, valeurs normales du ionogramme et de la fonction rénale, et lecture infirmière des déséquilibres.",
    tags: ["rein","ionogramme","homéostasie"],
    html: `<h3>Le néphron, unité fonctionnelle</h3>
<p>Chaque rein contient environ 1 million de <span class="key" data-term="néphron">néphrons</span>. Le néphron filtre le plasma (glomérule), puis réabsorbe et sécrète le long du tubule pour produire l'urine définitive. Le rein régule l'eau, les électrolytes, l'équilibre acido-basique et la pression artérielle (système rénine-angiotensine).</p>
<table class="tbl">
<tr><th>Paramètre</th><th>Valeur normale</th></tr>
<tr><td>Natrémie (Na+)</td><td>135 à 145 mmol/L</td></tr>
<tr><td>Kaliémie (K+)</td><td>3,5 à 5,0 mmol/L</td></tr>
<tr><td>Créatininémie</td><td>≈ 60 à 110 µmol/L</td></tr>
<tr><td>Diurèse normale</td><td>≈ 1 à 1,5 L / 24 h (≥ 0,5 mL/kg/h)</td></tr>
</table>
<div class="callout"><div class="callout-t">Corrélation clinique</div>Une <span class="key" data-term="hyperkaliémie">hyperkaliémie</span> (K+ &gt; 5,0 mmol/L) est une urgence : risque de troubles du rythme cardiaque pouvant aller jusqu'à l'arrêt. Surveiller l'ECG.</div>
<h3>Hormones et fonctions associées</h3>
<ul>
<li>L'<strong>ADH</strong> (hormone antidiurétique) concentre les urines en réabsorbant l'eau.</li>
<li>L'<strong>aldostérone</strong> favorise la réabsorption du Na+ et l'excrétion du K+.</li>
<li>Le rein sécrète l'<strong>érythropoïétine</strong> (EPO) qui stimule la production des globules rouges : une insuffisance rénale chronique entraîne souvent une anémie.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« A.D.H. = Anti-Diurétique Hormone → l'eau est retenue » : moins on en a, plus on urine (diabète insipide).</div>`,
    refs: ["Marieb, Anatomie et physiologie humaines","Référentiel IFSI 2009, UE 2.2"] },

  { id: "fx_anatomie_plus_neuro_digest", ueId: "2.2", type: "cours",
    titre: "Système nerveux et digestif : repères fonctionnels et signes d'alerte",
    resume: "Organisation du système nerveux, glycémie, et corrélations cliniques digestives et neurologiques.",
    tags: ["neurologie","digestif","glycémie"],
    html: `<h3>Système nerveux</h3>
<p>On distingue le <span class="key" data-term="système nerveux central">système nerveux central</span> (encéphale + moelle épinière) et le système nerveux périphérique (nerfs). Le système nerveux autonome se subdivise en sympathique (mobilisation : tachycardie, mydriase) et parasympathique (repos : bradycardie, digestion).</p>
<ul>
<li>Le neurone transmet l'information par un signal électrique puis chimique (synapse, neurotransmetteurs).</li>
<li>Le score de <strong>Glasgow</strong> évalue la conscience de 3 (coma profond) à 15 (normal).</li>
</ul>
<div class="callout"><div class="callout-t">Corrélation clinique</div>Une <span class="key" data-term="mydriase">mydriase</span> unilatérale aréactive chez un traumatisé crânien est un signe d'engagement cérébral : urgence vitale.</div>
<h3>Système digestif et glycémie</h3>
<p>Le tube digestif assure la digestion et l'absorption. Le <span class="key" data-term="foie">foie</span> métabolise les nutriments, détoxifie et synthétise la bile. Le <span class="key" data-term="pancréas">pancréas</span> a une double fonction : exocrine (enzymes digestives) et endocrine (insuline et glucagon régulant la glycémie).</p>
<table class="tbl">
<tr><th>Paramètre</th><th>Valeur</th></tr>
<tr><td>Glycémie à jeun</td><td>0,70 à 1,10 g/L (3,9 à 6,1 mmol/L)</td></tr>
<tr><td>Hypoglycémie</td><td>&lt; 0,60 g/L</td></tr>
</table>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« InsulIne = fait entrer le sucre = fait baisser » / « GlucaGon = remonte le Glucose ». L'insuline est la seule hormone hypoglycémiante.</div>`,
    refs: ["Marieb, Anatomie et physiologie humaines","Référentiel IFSI 2009, UE 2.2"] },
];

export const qcm = [
  { ueId: "2.2", q: "Quelle est la valeur normale de la fraction d'éjection du ventricule gauche (FEVG) ?",
    options: ["10 à 25 %","30 à 45 %","55 à 70 %","80 à 95 %"], correct: 2,
    explication: "Une FEVG normale se situe entre 55 et 70 %. En dessous de 40 %, on parle d'insuffisance cardiaque à fraction d'éjection altérée.",
    ref: "UE 2.2 - cardiologie", diff: 2 },

  { ueId: "2.2", q: "Le sang circulant dans l'artère pulmonaire est :",
    options: ["Oxygéné (artériel)","Désaturé (veineux)","Coagulé","Filtré par le rein"], correct: 1,
    explication: "Dans la petite circulation, l'artère pulmonaire transporte du sang DÉSATURÉ du cœur droit vers les poumons. Ce sont les veines pulmonaires qui ramènent le sang oxygéné.",
    ref: "UE 2.2 - circulation", diff: 2 },

  { ueId: "2.2", q: "Quelle est la formule du débit cardiaque ?",
    options: ["FC × Volume d'éjection systolique","Pression artérielle × FC","Volume sanguin / FC","SpO2 × FC"], correct: 0,
    explication: "Débit cardiaque = fréquence cardiaque × volume d'éjection systolique, soit environ 5 L/min au repos.",
    ref: "UE 2.2 - hémodynamique", diff: 1 },

  { ueId: "2.2", q: "Quelle fourchette correspond à une fréquence cardiaque normale de repos chez l'adulte ?",
    options: ["30 à 50 batt/min","60 à 100 batt/min","100 à 130 batt/min","140 à 180 batt/min"], correct: 1,
    explication: "La fréquence cardiaque normale de repos chez l'adulte est de 60 à 100 battements par minute. En dessous : bradycardie ; au-dessus : tachycardie.",
    ref: "UE 2.2 - constantes", diff: 1 },

  { ueId: "2.2", q: "Quel est le principal muscle de l'inspiration ?",
    options: ["Le muscle cardiaque","Les muscles abdominaux","Le diaphragme","Le muscle sterno-cléido-mastoïdien"], correct: 2,
    explication: "Le diaphragme est le principal muscle inspiratoire ; sa contraction abaisse le plancher thoracique et crée la dépression qui fait entrer l'air. L'expiration de repos est passive.",
    ref: "UE 2.2 - respiratoire", diff: 1 },

  { ueId: "2.2", q: "Où se déroulent les échanges gazeux dans le poumon ?",
    options: ["Dans la trachée","Dans les bronches souches","Au niveau des alvéoles","Dans la plèvre"], correct: 2,
    explication: "Les échanges gazeux (O2/CO2) ont lieu au niveau des alvéoles, à travers la fine membrane alvéolo-capillaire.",
    ref: "UE 2.2 - respiratoire", diff: 1 },

  { ueId: "2.2", q: "Quelle valeur de SpO2 est considérée comme normale en air ambiant ?",
    options: ["≥ 95 %","≥ 70 %","≥ 50 %","100 % obligatoirement"], correct: 0,
    explication: "Une saturation pulsée en oxygène ≥ 95 % en air ambiant est normale. En dessous de 90 %, on parle d'hypoxémie nécessitant une évaluation.",
    ref: "UE 2.2 - oxygénation", diff: 1 },

  { ueId: "2.2", q: "Quelle est l'unité fonctionnelle du rein ?",
    options: ["L'alvéole","Le néphron","Le glomérule seul","Le sarcomère"], correct: 1,
    explication: "Le néphron est l'unité fonctionnelle du rein (environ 1 million par rein). Il comprend le glomérule et le tubule.",
    ref: "UE 2.2 - rein", diff: 1 },

  { ueId: "2.2", q: "Quelle est la fourchette normale de la kaliémie ?",
    options: ["1,0 à 2,0 mmol/L","3,5 à 5,0 mmol/L","6,0 à 8,0 mmol/L","135 à 145 mmol/L"], correct: 1,
    explication: "La kaliémie normale est de 3,5 à 5,0 mmol/L. 135 à 145 mmol/L correspond à la natrémie. Une hyperkaliémie est une urgence cardiaque.",
    ref: "UE 2.2 - ionogramme", diff: 2 },

  { ueId: "2.2", q: "Une hyperkaliémie sévère expose principalement à :",
    options: ["Une fracture osseuse","Des troubles du rythme cardiaque","Une cécité","Une hypoglycémie"], correct: 1,
    explication: "L'excès de potassium perturbe l'excitabilité cardiaque et peut provoquer des troubles du rythme graves jusqu'à l'arrêt. La surveillance ECG est indispensable.",
    ref: "UE 2.2 - urgences métaboliques", diff: 3 },

  { ueId: "2.2", q: "Quelle est la diurèse normale approximative sur 24 heures chez l'adulte ?",
    options: ["100 à 200 mL","1 à 1,5 L","4 à 5 L","10 L"], correct: 1,
    explication: "La diurèse normale est d'environ 1 à 1,5 L par 24 h, soit au moins 0,5 mL/kg/h. En dessous, on parle d'oligurie.",
    ref: "UE 2.2 - rein", diff: 1 },

  { ueId: "2.2", q: "Quelle hormone rénale stimule la production de globules rouges ?",
    options: ["L'insuline","L'aldostérone","L'érythropoïétine (EPO)","Le glucagon"], correct: 2,
    explication: "Le rein sécrète l'érythropoïétine, qui stimule l'érythropoïèse. L'insuffisance rénale chronique entraîne donc fréquemment une anémie.",
    ref: "UE 2.2 - endocrinologie rénale", diff: 2 },

  { ueId: "2.2", q: "Quel est le rôle de l'hormone antidiurétique (ADH) ?",
    options: ["Augmenter la diurèse","Réabsorber l'eau et concentrer les urines","Faire baisser la glycémie","Excréter le potassium"], correct: 1,
    explication: "L'ADH favorise la réabsorption d'eau au niveau du tube collecteur, concentrant les urines. Son déficit provoque un diabète insipide avec polyurie.",
    ref: "UE 2.2 - équilibre hydrique", diff: 2 },

  { ueId: "2.2", q: "Quelle est la fourchette normale de la glycémie à jeun ?",
    options: ["0,20 à 0,50 g/L","0,70 à 1,10 g/L","1,50 à 2,00 g/L","2,50 à 3,00 g/L"], correct: 1,
    explication: "La glycémie à jeun normale est de 0,70 à 1,10 g/L (soit 3,9 à 6,1 mmol/L). En dessous de 0,60 g/L : hypoglycémie.",
    ref: "UE 2.2 - métabolisme", diff: 2 },

  { ueId: "2.2", q: "Quelle hormone fait baisser la glycémie ?",
    options: ["Le glucagon","L'adrénaline","L'insuline","Le cortisol"], correct: 2,
    explication: "L'insuline, sécrétée par le pancréas endocrine, est la seule hormone hypoglycémiante : elle fait entrer le glucose dans les cellules. Le glucagon, lui, la fait remonter.",
    ref: "UE 2.2 - pancréas", diff: 1 },

  { ueId: "2.2", q: "Le pancréas a une double fonction. Laquelle ?",
    options: ["Exocrine et endocrine","Veineuse et artérielle","Sympathique et parasympathique","Sensitive et motrice"], correct: 0,
    explication: "Le pancréas est exocrine (enzymes digestives déversées dans le duodénum) et endocrine (insuline et glucagon dans le sang).",
    ref: "UE 2.2 - digestif", diff: 2 },

  { ueId: "2.2", q: "Quelles sont les bornes du score de Glasgow ?",
    options: ["De 0 à 10","De 1 à 5","De 3 à 15","De 10 à 20"], correct: 2,
    explication: "Le score de Glasgow va de 3 (coma profond) à 15 (conscience normale). Il évalue la réponse oculaire, verbale et motrice.",
    ref: "UE 2.2 - neurologie", diff: 2 },

  { ueId: "2.2", q: "Quel système nerveux autonome est responsable de la 'mobilisation' (tachycardie, mydriase) ?",
    options: ["Le parasympathique","Le sympathique","Le système nerveux central seul","Le système somatique"], correct: 1,
    explication: "Le système sympathique prépare à l'action (accélération cardiaque, dilatation pupillaire). Le parasympathique favorise au contraire le repos et la digestion.",
    ref: "UE 2.2 - système nerveux autonome", diff: 2 },

  { ueId: "2.2", q: "Une mydriase unilatérale aréactive chez un traumatisé crânien évoque :",
    options: ["Une simple fatigue","Un engagement cérébral, urgence vitale","Une hypoglycémie bénigne","Une réaction normale à la lumière"], correct: 1,
    explication: "Une pupille dilatée fixe d'un seul côté chez un traumatisé crânien signe une souffrance cérébrale (engagement) : c'est une urgence neurochirurgicale.",
    ref: "UE 2.2 - urgences neurologiques", diff: 3 },

  { ueId: "2.2", q: "Quelle est la fourchette normale de la fréquence respiratoire chez l'adulte au repos ?",
    options: ["4 à 8 cycles/min","12 à 20 cycles/min","25 à 35 cycles/min","40 à 50 cycles/min"], correct: 1,
    explication: "La fréquence respiratoire normale de repos chez l'adulte est de 12 à 20 cycles par minute. Au-delà : polypnée/tachypnée ; en deçà : bradypnée.",
    ref: "UE 2.2 - constantes", diff: 1 },

  { ueId: "2.2", q: "Quel organe synthétise la bile ?",
    options: ["Le pancréas","La rate","Le foie","L'estomac"], correct: 2,
    explication: "Le foie synthétise la bile, stockée ensuite dans la vésicule biliaire. La bile facilite la digestion des graisses.",
    ref: "UE 2.2 - digestif", diff: 1 },

  { ueId: "2.2", q: "L'aldostérone agit au niveau rénal en :",
    options: ["Réabsorbant le Na+ et excrétant le K+","Excrétant le Na+ et réabsorbant le K+","Bloquant toute diurèse","Détruisant les néphrons"], correct: 0,
    explication: "L'aldostérone favorise la réabsorption du sodium (et de l'eau) et l'excrétion du potassium, participant à la régulation de la volémie et de la pression artérielle.",
    ref: "UE 2.2 - endocrinologie", diff: 3 },
];

export const flashcards = [
  { ueId: "2.2", recto: "Valeur normale de la FEVG ?", verso: "55 à 70 %." },
  { ueId: "2.2", recto: "Formule du débit cardiaque ?", verso: "Fréquence cardiaque × volume d'éjection systolique (≈ 5 L/min au repos)." },
  { ueId: "2.2", recto: "Fréquence cardiaque normale au repos (adulte) ?", verso: "60 à 100 battements/min." },
  { ueId: "2.2", recto: "Que transporte l'artère pulmonaire ?", verso: "Du sang désaturé (veineux), du cœur droit vers les poumons." },
  { ueId: "2.2", recto: "Lieu des échanges gazeux pulmonaires ?", verso: "Les alvéoles (membrane alvéolo-capillaire)." },
  { ueId: "2.2", recto: "SpO2 normale en air ambiant ?", verso: "≥ 95 %." },
  { ueId: "2.2", recto: "Kaliémie normale ?", verso: "3,5 à 5,0 mmol/L." },
  { ueId: "2.2", recto: "Natrémie normale ?", verso: "135 à 145 mmol/L." },
  { ueId: "2.2", recto: "Diurèse normale sur 24 h ?", verso: "Environ 1 à 1,5 L (≥ 0,5 mL/kg/h)." },
  { ueId: "2.2", recto: "Rôle de l'érythropoïétine (EPO) ?", verso: "Hormone rénale qui stimule la production de globules rouges." },
  { ueId: "2.2", recto: "Glycémie à jeun normale ?", verso: "0,70 à 1,10 g/L (3,9 à 6,1 mmol/L)." },
  { ueId: "2.2", recto: "Seule hormone hypoglycémiante ?", verso: "L'insuline." },
  { ueId: "2.2", recto: "Bornes du score de Glasgow ?", verso: "De 3 (coma profond) à 15 (conscience normale)." },
  { ueId: "2.2", recto: "Effet de l'ADH ?", verso: "Réabsorption de l'eau et concentration des urines." },
  { ueId: "2.2", recto: "Double fonction du pancréas ?", verso: "Exocrine (enzymes digestives) et endocrine (insuline/glucagon)." },
];
