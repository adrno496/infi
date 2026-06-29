export const fiches = [
  { id: "fx_urgences_plus_etats_choc", ueId: "4.3", type: "cours",
    titre: "États de choc : classification, physiopathologie et prise en charge infirmière",
    resume: "Reconnaître les quatre grands types de choc, leurs mécanismes et le rôle IDE dans le remplissage et la surveillance.",
    tags: ["choc","hemodynamique","remplissage"],
    html: `<h3>Définition</h3>
<p>L'<span class="key" data-term="état de choc">état de choc</span> est une insuffisance circulatoire aiguë qui prive les tissus d'oxygène : il existe une inadéquation entre les besoins et les apports en oxygène, avec souffrance cellulaire (anaérobie, acidose lactique). C'est une urgence vitale, quelle que soit sa cause.</p>
<h3>Les quatre grands types</h3>
<table class="tbl">
<tr><th>Type</th><th>Mécanisme</th><th>Exemple</th></tr>
<tr><td><strong>Hypovolémique</strong></td><td>Baisse du volume sanguin circulant</td><td>Hémorragie, déshydratation, brûlure</td></tr>
<tr><td><strong>Cardiogénique</strong></td><td>Défaillance de la pompe cardiaque</td><td>Infarctus étendu, trouble du rythme</td></tr>
<tr><td><strong>Distributif</strong></td><td>Vasodilatation, fuite capillaire</td><td>Choc septique, anaphylactique, neurogénique</td></tr>
<tr><td><strong>Obstructif</strong></td><td>Obstacle mécanique au remplissage ou à l'éjection</td><td>Embolie pulmonaire, tamponnade, pneumothorax compressif</td></tr>
</table>
<div class="callout"><div class="callout-t">Signes communs d'alerte</div>Tachycardie, hypotension (PAS &lt; 90 mmHg ou chute &gt; 30 % de la PAS habituelle), marbrures (genoux), <span class="key" data-term="temps de recoloration capillaire">TRC</span> &gt; 3 s, extrémités froides, oligurie (&lt; 0,5 mL/kg/h), troubles de conscience, polypnée. La <strong>lactatémie</strong> élevée (&gt; 2 mmol/L) témoigne de l'hypoperfusion.</div>
<h3>Rôle infirmier en urgence</h3>
<ul>
<li>Évaluation <span class="key" data-term="ABCDE">ABCDE</span>, scope (FC, PA, SpO2), oxygénothérapie pour viser SpO2 &ge; 94 %.</li>
<li>Pose de <strong>2 voies veineuses périphériques de gros calibre</strong> (14-16 G) pour le remplissage.</li>
<li><strong>Remplissage vasculaire</strong> sur prescription : cristalloïdes (NaCl 0,9 % ou Ringer lactate), souvent 500 mL en bolus rapide réévalués.</li>
<li>Bilan : groupe-RAI, NFS, ionogramme, lactates, gaz du sang, hémostase, troponine selon contexte.</li>
<li>Préparation des <span class="key" data-term="amines vasoactives">amines vasoactives</span> (noradrénaline) si choc persistant malgré remplissage, sur voie dédiée.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« Le choc <strong>anaphylactique</strong> = adrénaline IM 0,5 mg face antéro-latérale de cuisse » ; « le choc <strong>septique</strong> = remplissage + noradrénaline + antibiothérapie précoce + hémocultures avant ATB ».</div>
<div class="callout"><div class="callout-t">Piège</div>Dans le choc cardiogénique, le remplissage massif est délétère (surcharge, OAP) : on cherche au contraire à soutenir la pompe (inotropes) et traiter la cause.</div>`,
    refs: ["Référentiel IFSI 2009, UE 4.3 Soins d'urgence","Recommandations SFAR/SRLF prise en charge des états de choc"] },

  { id: "fx_urgences_plus_avc_fast", ueId: "4.3", type: "cours",
    titre: "AVC et FAST : reconnaissance précoce et urgence thérapeutique",
    resume: "Repérer un AVC avec l'outil FAST, comprendre la fenêtre de revascularisation et le rôle IDE.",
    tags: ["AVC","FAST","neurologie"],
    html: `<h3>Pourquoi l'urgence ?</h3>
<p>L'<span class="key" data-term="AVC">AVC</span> (accident vasculaire cérébral) est une interruption brutale de la circulation cérébrale, ischémique (≈ 80 %, par occlusion artérielle) ou hémorragique (≈ 20 %). « <strong>Time is brain</strong> » : chaque minute, environ 2 millions de neurones meurent. La rapidité de prise en charge conditionne le pronostic.</p>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo : FAST</div>
<ul>
<li><strong>F</strong>ace : asymétrie du visage, bouche déviée (faire sourire).</li>
<li><strong>A</strong>rm : déficit moteur d'un bras (lever les deux bras).</li>
<li><strong>S</strong>peech : troubles de la parole (aphasie, dysarthrie).</li>
<li><strong>T</strong>ime : noter l'<strong>heure de début</strong> des symptômes et appeler le 15 immédiatement.</li>
</ul></div>
<h3>L'heure de début, donnée capitale</h3>
<p>La <span class="key" data-term="thrombolyse">thrombolyse intraveineuse</span> (altéplase / rt-PA) est possible jusqu'à <strong>4 h 30</strong> après le début des symptômes pour l'AVC ischémique. La <span class="key" data-term="thrombectomie">thrombectomie mécanique</span> peut être envisagée plus tardivement (jusqu'à 6 h, parfois davantage sur sélection en imagerie) en cas d'occlusion proximale. D'où l'importance de dater précisément le début ou, si inconnu, l'heure du dernier état normal.</p>
<table class="tbl">
<tr><th>Action</th><th>Objectif</th></tr>
<tr><td>Imagerie cérébrale (TDM ou IRM)</td><td>Différencier ischémie / hémorragie avant tout traitement</td></tr>
<tr><td>Glycémie capillaire</td><td>Éliminer une hypoglycémie qui mime un AVC</td></tr>
<tr><td>Pression artérielle</td><td>Surveiller sans abaisser brutalement (perfusion cérébrale)</td></tr>
<tr><td>Score NIHSS</td><td>Quantifier le déficit neurologique</td></tr>
</table>
<h3>Rôle infirmier</h3>
<ul>
<li>Alerter, ne rien faire perdre comme temps : orientation vers une <strong>UNV</strong> (unité neurovasculaire).</li>
<li>Glycémie capillaire systématique, scope, SpO2, surveillance neurologique répétée.</li>
<li><strong>Patient à jeun strict</strong> tant que les troubles de déglutition ne sont pas évalués (risque de fausse route).</li>
<li>Bilan biologique, ECG (recherche d'ACFA emboligène), voie veineuse.</li>
</ul>
<div class="callout"><div class="callout-t">Piège classique</div>Une <strong>hypoglycémie</strong> peut reproduire un déficit neurologique focal : la glycémie capillaire est obligatoire devant tout déficit brutal avant de conclure à un AVC.</div>`,
    refs: ["Référentiel IFSI 2009, UE 4.3","HAS – Accident vasculaire cérébral : prise en charge précoce"] },

  { id: "fx_urgences_plus_hypo_hemorragie", ueId: "4.3", type: "cours",
    titre: "Hypoglycémie sévère et hémorragie : conduites infirmières d'urgence",
    resume: "Resucrage, glucagon, gestion d'une hémorragie et bases de la transfusion en urgence.",
    tags: ["hypoglycemie","hemorragie","transfusion"],
    html: `<h3>Hypoglycémie</h3>
<p>L'<span class="key" data-term="hypoglycémie">hypoglycémie</span> est définie chez le diabétique par une glycémie &lt; 0,70 g/L (3,9 mmol/L). Les signes sont adrénergiques (sueurs, tremblements, palpitations, faim) puis neuroglucopéniques (confusion, troubles du comportement, convulsions, coma).</p>
<table class="tbl">
<tr><th>Situation</th><th>Conduite</th></tr>
<tr><td>Patient <strong>conscient</strong>, déglutition OK</td><td>Resucrage oral : 15 g de sucre rapide (3 morceaux de sucre ou un verre de jus), recontrôle à 15 min</td></tr>
<tr><td>Patient <strong>inconscient</strong>, voie veineuse disponible</td><td>Sérum glucosé : G30 % IV sur prescription, puis recontrôle</td></tr>
<tr><td>Patient <strong>inconscient</strong>, pas de voie veineuse</td><td><span class="key" data-term="glucagon">Glucagon</span> 1 mg IM ou SC</td></tr>
</table>
<div class="callout"><div class="callout-t">Après le resucrage</div>Une fois la glycémie corrigée et le patient capable de manger, donner un <strong>sucre lent</strong> (pain, féculent) pour éviter la récidive. Le glucagon est inefficace si réserves de glycogène épuisées (jeûne, alcool, insuffisance hépatique).</div>
<h3>Hémorragie</h3>
<p>L'hémorragie peut conduire à un <span class="key" data-term="choc hypovolémique">choc hypovolémique</span>. Devant une hémorragie externe : <strong>compression manuelle directe</strong> immédiate, puis pansement compressif ; le <strong>garrot</strong> est posé en dernier recours si la compression est inefficace ou impossible (membre), en notant l'heure de pose.</p>
<ul>
<li>Surveillance : FC, PA, TRC, marbrures, conscience, diurèse, signes de déglobulisation (pâleur, soif).</li>
<li>2 VVP de gros calibre, bilan avec <strong>groupe-RAI</strong>, NFS, hémostase, fibrinogène.</li>
<li>Remplissage par cristalloïdes puis transfusion sur prescription.</li>
</ul>
<h3>Bases de la transfusion (CGR)</h3>
<ul>
<li><strong>Contrôle ultime pré-transfusionnel au lit du patient</strong> obligatoire : vérification de la concordance identité / groupe / poche, et test de Beth-Vincent (compatibilité ABO) juste avant la pose.</li>
<li>Surveillance rapprochée les 15 premières minutes (risque d'<span class="key" data-term="accident transfusionnel">accident transfusionnel ABO</span>), constantes avant/pendant/après.</li>
<li>Devant tout signe d'intolérance (frissons, fièvre, douleur lombaire, hypotension, urticaire) : <strong>arrêt immédiat</strong> de la transfusion, maintien de la voie, alerte médecin, conservation de la poche.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« <strong>Comprimer d'abord, garrotter ensuite</strong> » pour l'hémorragie ; « <strong>Contrôle ultime AU LIT, JAMAIS au poste de soins</strong> » pour la transfusion.</div>`,
    refs: ["Référentiel IFSI 2009, UE 4.3","HAS – Transfusion de globules rouges homologues, bonnes pratiques"] },

  { id: "fx_urgences_plus_acr_rcp", ueId: "4.3", type: "cours",
    titre: "Arrêt cardio-respiratoire et RCP : chaîne de survie et rôle infirmier",
    resume: "Reconnaître l'ACR, appliquer la RCP de base, la défibrillation et la chaîne de survie.",
    tags: ["ACR","RCP","défibrillation"],
    html: `<h3>Reconnaître l'arrêt cardio-respiratoire</h3>
<p>L'<span class="key" data-term="arrêt cardio-respiratoire">arrêt cardio-respiratoire</span> (ACR) se reconnaît devant une <strong>victime inconsciente</strong> (ne répond pas) qui <strong>ne respire pas normalement</strong> (absence de respiration ou gasps agoniques). On ne perd pas de temps à rechercher le pouls plus de 10 secondes. Tout doute = on débute la réanimation.</p>
<div class="mnemo"><div class="mnemo-t">Chaîne de survie</div>
<ol>
<li><strong>Alerte précoce</strong> (appel du 15 / 112, demander un DAE).</li>
<li><strong>RCP précoce</strong> par les témoins (massage cardiaque).</li>
<li><strong>Défibrillation précoce</strong> (DAE dès que disponible).</li>
<li><strong>Réanimation spécialisée</strong> et soins post-arrêt.</li>
</ol></div>
<h3>RCP de base chez l'adulte</h3>
<ul>
<li><strong>Compressions thoraciques</strong> : centre du thorax (moitié inférieure du sternum), profondeur <strong>5 à 6 cm</strong>, fréquence <strong>100 à 120/min</strong>, en laissant le thorax se relâcher complètement.</li>
<li><strong>Rapport 30 compressions / 2 insufflations</strong> (avec moyen de ventilation : insufflateur manuel + O2).</li>
<li>Minimiser les interruptions du massage (relais toutes les 2 min pour limiter la fatigue).</li>
</ul>
<h3>Défibrillation</h3>
<p>Le <span class="key" data-term="DAE">défibrillateur automatisé externe</span> (DAE) analyse le rythme et délivre un choc uniquement sur un <strong>rythme choquable</strong> (fibrillation ventriculaire, tachycardie ventriculaire sans pouls). On ne touche pas la victime pendant l'analyse et le choc. La RCP reprend immédiatement après le choc, sans attendre.</p>
<div class="callout"><div class="callout-t">Médicament clé en réanimation spécialisée</div>L'<strong>adrénaline 1 mg IV</strong> est administrée toutes les 3 à 5 minutes au cours de l'ACR (sur prescription / protocole). En cas de rythme choquable réfractaire, l'<strong>amiodarone</strong> est ajoutée après le 3ᵉ choc.</div>
<div class="callout"><div class="callout-t">Piège</div>Les <strong>gasps</strong> (respirations agoniques) ne sont PAS une respiration efficace : ils ne doivent jamais retarder le début du massage cardiaque.</div>`,
    refs: ["Référentiel IFSI 2009, UE 4.3","Recommandations ERC/RFRC – Réanimation cardio-pulmonaire"] },

  { id: "fx_urgences_plus_detresse_respi", ueId: "4.3", type: "cours",
    titre: "Détresse respiratoire aiguë : reconnaissance et conduite infirmière",
    resume: "Identifier les signes de gravité respiratoire, l'oxygénothérapie et la surveillance IDE.",
    tags: ["détresse respiratoire","oxygénothérapie","SpO2"],
    html: `<h3>Définition et signes de gravité</h3>
<p>La <span class="key" data-term="détresse respiratoire aiguë">détresse respiratoire aiguë</span> est l'incapacité du système respiratoire à assurer une hématose correcte. Elle est une urgence vitale. On recherche des <strong>signes de lutte</strong> et des <strong>signes d'épuisement / d'hypoxie</strong>.</p>
<table class="tbl">
<tr><th>Signes de lutte</th><th>Signes de gravité / faillite</th></tr>
<tr><td>Polypnée (FR &gt; 25/min), tirage, balancement thoraco-abdominal, battement des ailes du nez, mise en jeu des muscles accessoires</td><td>Cyanose, sueurs, bradypnée ou pauses respiratoires, épuisement, troubles de conscience, désaturation (SpO2 &lt; 90 %)</td></tr>
</table>
<div class="callout"><div class="callout-t">Signes neurologiques associés</div>L'<strong>hypoxie</strong> donne agitation, confusion ; l'<strong>hypercapnie</strong> donne somnolence, sueurs, céphalées, astérixis. Une bradypnée chez un patient en détresse est un signe d'épuisement, donc de gravité majeure.</div>
<h3>Conduite infirmière</h3>
<ul>
<li><strong>Position demi-assise</strong> (sauf trouble de conscience), rassurer, ne pas laisser seul.</li>
<li><strong>Oxygénothérapie</strong> adaptée pour viser SpO2 &ge; 94 % (objectif <strong>88-92 %</strong> chez l'insuffisant respiratoire chronique / BPCO, risque d'hypercapnie sous O2 trop fort).</li>
<li>Scope : FR, SpO2, FC, PA ; surveillance de la conscience.</li>
<li>Préparer aérosols, VNI ou matériel d'intubation selon prescription ; gaz du sang.</li>
<li>Libérer les voies aériennes, aspiration si encombrement.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« Chez le <strong>BPCO</strong>, on vise <strong>88-92 %</strong> de SpO2 : trop d'O2 peut endormir et aggraver l'hypercapnie. »</div>`,
    refs: ["Référentiel IFSI 2009, UE 4.3","HAS – Oxygénothérapie et détresse respiratoire aiguë"] },
];

export const qcm = [
  { ueId: "4.3", q: "Quel type de choc résulte d'une vasodilatation généralisée avec fuite capillaire ?",
    options: ["Choc hypovolémique", "Choc cardiogénique", "Choc distributif", "Choc obstructif"], correct: 2,
    explication: "Le choc distributif (septique, anaphylactique, neurogénique) est lié à une vasodilatation et une fuite capillaire, qui provoquent une chute des résistances vasculaires et une hypovolémie relative.",
    ref: "Physiopathologie des états de choc", diff: 1 },

  { ueId: "4.3", q: "Devant un choc hypovolémique, quel est le geste infirmier prioritaire pour l'abord vasculaire ?",
    options: ["Une seule voie veineuse de petit calibre", "Deux voies veineuses périphériques de gros calibre (14-16 G)", "Attendre la pose d'une voie centrale par le médecin", "Une perfusion sous-cutanée"], correct: 1,
    explication: "Le remplissage rapide impose deux voies veineuses de gros calibre (14-16 G) : plus le calibre est gros, plus le débit possible est élevé. La voie centrale n'est pas prioritaire dans l'urgence du remplissage.",
    ref: "Prise en charge du choc hypovolémique", diff: 1 },

  { ueId: "4.3", q: "Quel soluté est utilisé en première intention pour le remplissage vasculaire d'un état de choc ?",
    options: ["Sérum glucosé à 5 %", "Cristalloïdes (NaCl 0,9 % ou Ringer lactate)", "Eau pour préparation injectable", "Bicarbonate de sodium"], correct: 1,
    explication: "Les cristalloïdes isotoniques (NaCl 0,9 %, Ringer lactate) sont le remplissage de première intention. Le glucosé 5 % n'a pas d'effet de remplissage durable car il se distribue dans tout l'organisme.",
    ref: "Remplissage vasculaire", diff: 2 },

  { ueId: "4.3", q: "Quel traitement de première intention administre-t-on en urgence dans un choc anaphylactique ?",
    options: ["Corticoïdes IV en bolus", "Adrénaline 0,5 mg en intramusculaire", "Antihistaminique per os", "Atropine IV"], correct: 1,
    explication: "L'adrénaline IM (0,5 mg chez l'adulte, face antéro-latérale de la cuisse) est le traitement de première intention du choc anaphylactique. Corticoïdes et antihistaminiques sont des traitements adjuvants, non urgents.",
    ref: "Choc anaphylactique", diff: 2 },

  { ueId: "4.3", q: "Dans le choc septique, quel prélèvement doit impérativement précéder l'antibiothérapie ?",
    options: ["Les hémocultures", "La troponine", "Le ionogramme urinaire", "Le bilan lipidique"], correct: 0,
    explication: "Les hémocultures sont prélevées avant l'administration des antibiotiques pour ne pas négativer la recherche du germe. L'antibiothérapie reste cependant à débuter très précocement.",
    ref: "Choc septique", diff: 2 },

  { ueId: "4.3", q: "Quel signe cutané évoque une hypoperfusion périphérique dans l'état de choc ?",
    options: ["Un érythème diffus", "Des marbrures, surtout au niveau des genoux", "Un ictère", "Une hypersudation des mains uniquement"], correct: 1,
    explication: "Les marbrures, débutant aux genoux et s'étendant, traduisent une vasoconstriction et une hypoperfusion cutanée. Associées au TRC allongé et aux extrémités froides, elles signent la gravité hémodynamique.",
    ref: "Signes cliniques du choc", diff: 1 },

  { ueId: "4.3", q: "Que signifie l'acronyme FAST dans le dépistage de l'AVC ?",
    options: ["Fièvre, Asthénie, Sueurs, Tremblements", "Face, Arm, Speech, Time", "Force, Allure, Souffle, Tension", "Frissons, Angoisse, Spasme, Toux"], correct: 1,
    explication: "FAST = Face (asymétrie faciale), Arm (déficit d'un bras), Speech (trouble de la parole), Time (noter l'heure de début et appeler le 15). C'est l'outil simple de repérage de l'AVC.",
    ref: "Reconnaissance de l'AVC", diff: 1 },

  { ueId: "4.3", q: "Quel examen est obligatoire avant tout traitement spécifique de l'AVC ?",
    options: ["Une échographie abdominale", "Une imagerie cérébrale (TDM ou IRM)", "Une radiographie thoracique", "Une ponction lombaire"], correct: 1,
    explication: "L'imagerie cérébrale permet de distinguer un AVC ischémique d'un AVC hémorragique : la thrombolyse est formellement contre-indiquée en cas d'hémorragie. Aucun traitement spécifique ne débute avant l'imagerie.",
    ref: "Diagnostic de l'AVC", diff: 1 },

  { ueId: "4.3", q: "Quel est le délai habituel pour réaliser une thrombolyse IV dans l'AVC ischémique ?",
    options: ["Jusqu'à 1 heure", "Jusqu'à 4 h 30 après le début des symptômes", "Jusqu'à 24 heures", "Aucune limite de temps"], correct: 1,
    explication: "La thrombolyse intraveineuse par altéplase est possible jusqu'à 4 h 30 après le début des symptômes pour l'AVC ischémique. D'où l'importance capitale de dater l'heure de début.",
    ref: "Thrombolyse de l'AVC ischémique", diff: 2 },

  { ueId: "4.3", q: "Devant un déficit neurologique brutal, quel geste infirmier simple est systématique avant de conclure à un AVC ?",
    options: ["Une glycémie capillaire", "Une gazométrie artérielle", "Une ponction veineuse en urgence", "Un fond d'œil"], correct: 0,
    explication: "L'hypoglycémie peut mimer un déficit neurologique focal. La glycémie capillaire est donc systématique et immédiate devant tout déficit brutal.",
    ref: "Diagnostic différentiel de l'AVC", diff: 1 },

  { ueId: "4.3", q: "Chez un patient suspect d'AVC, quelle précaution alimentaire s'impose ?",
    options: ["Hydratation orale abondante immédiate", "Repas riche en sucres rapides", "Patient à jeun strict tant que la déglutition n'est pas évaluée", "Alimentation normale autorisée"], correct: 2,
    explication: "Les troubles de la déglutition sont fréquents dans l'AVC et exposent à la fausse route. Le patient reste à jeun strict tant qu'un test de déglutition n'a pas validé la sécurité.",
    ref: "Soins infirmiers dans l'AVC", diff: 2 },

  { ueId: "4.3", q: "À partir de quelle valeur parle-t-on d'hypoglycémie chez le patient diabétique ?",
    options: ["Glycémie < 1,26 g/L", "Glycémie < 0,70 g/L (3,9 mmol/L)", "Glycémie < 2 g/L", "Glycémie < 1 g/L"], correct: 1,
    explication: "Chez le diabétique, l'hypoglycémie est définie par une glycémie inférieure à 0,70 g/L (3,9 mmol/L). En dessous, le resucrage est indiqué.",
    ref: "Définition de l'hypoglycémie", diff: 1 },

  { ueId: "4.3", q: "Quelle conduite tenir face à une hypoglycémie chez un patient conscient avec déglutition normale ?",
    options: ["Glucagon 1 mg IM", "Sérum glucosé G30 % IV", "Resucrage oral d'environ 15 g de sucre rapide", "Mise à jeun et surveillance"], correct: 2,
    explication: "Chez un patient conscient capable de déglutir, on resucre par voie orale avec environ 15 g de sucre rapide (3 morceaux de sucre), avec recontrôle de la glycémie à 15 minutes.",
    ref: "Resucrage de l'hypoglycémie", diff: 1 },

  { ueId: "4.3", q: "Un patient diabétique est inconscient et aucune voie veineuse n'est posée. Quel traitement de l'hypoglycémie est adapté ?",
    options: ["Sucre dans la bouche", "Glucagon 1 mg IM ou SC", "Insuline rapide", "Sérum physiologique IM"], correct: 1,
    explication: "Chez un patient inconscient sans abord veineux, le glucagon 1 mg en IM ou SC est indiqué. On ne donne jamais de sucre par la bouche à un patient inconscient (risque de fausse route).",
    ref: "Glucagon dans l'hypoglycémie", diff: 2 },

  { ueId: "4.3", q: "Le glucagon peut être inefficace dans quelle situation ?",
    options: ["Hypoglycémie post-prandiale", "Réserves de glycogène épuisées (jeûne prolongé, alcoolisation, insuffisance hépatique)", "Première hypoglycémie de la journée", "Hypoglycémie chez un sujet jeune"], correct: 1,
    explication: "Le glucagon agit en mobilisant le glycogène hépatique. Si les réserves sont épuisées (jeûne prolongé, intoxication alcoolique, insuffisance hépatique), il est inefficace : il faut alors du glucose IV.",
    ref: "Limites du glucagon", diff: 3 },

  { ueId: "4.3", q: "Quel est le premier geste face à une hémorragie externe d'un membre ?",
    options: ["Poser un garrot d'emblée", "Compression manuelle directe immédiate", "Surélever le membre et attendre", "Désinfecter la plaie"], correct: 1,
    explication: "La compression manuelle directe est le premier geste : elle suffit le plus souvent. Le garrot n'est posé qu'en cas d'inefficacité ou d'impossibilité de comprimer, en notant l'heure de pose.",
    ref: "Hémorragie externe", diff: 1 },

  { ueId: "4.3", q: "Quel élément doit obligatoirement être noté lors de la pose d'un garrot ?",
    options: ["La couleur du garrot", "L'heure de pose", "La marque du dispositif", "La taille du patient"], correct: 1,
    explication: "L'heure de pose du garrot doit être notée (et visible) car l'ischémie en aval est délétère ; cette information est indispensable pour la suite de la prise en charge médicale.",
    ref: "Pose du garrot", diff: 1 },

  { ueId: "4.3", q: "Avant toute transfusion de culot globulaire, quel contrôle est obligatoire au lit du patient ?",
    options: ["Le contrôle ultime pré-transfusionnel (concordance et compatibilité ABO)", "Le dosage de la troponine", "Une radiographie de contrôle", "Un ECG systématique"], correct: 0,
    explication: "Le contrôle ultime pré-transfusionnel au lit du patient (concordance identité/groupe/poche et test de compatibilité ABO de Beth-Vincent) est obligatoire pour prévenir l'accident transfusionnel ABO.",
    ref: "Sécurité transfusionnelle", diff: 2 },

  { ueId: "4.3", q: "Pendant une transfusion, le patient présente des frissons, une fièvre et une douleur lombaire. Quelle est la conduite immédiate ?",
    options: ["Ralentir le débit et continuer", "Arrêter immédiatement la transfusion, maintenir la voie, alerter le médecin et conserver la poche", "Administrer un antipyrétique et poursuivre", "Retirer la voie veineuse"], correct: 1,
    explication: "Ces signes évoquent un accident transfusionnel : on arrête immédiatement la transfusion, on maintient la voie (avec du sérum physiologique), on alerte le médecin et on conserve la poche pour analyse.",
    ref: "Accident transfusionnel", diff: 2 },

  { ueId: "4.3", q: "Quelle valeur de diurèse horaire traduit une hypoperfusion rénale dans l'état de choc ?",
    options: ["> 2 mL/kg/h", "< 0,5 mL/kg/h (oligurie)", "1,5 mL/kg/h", "1 mL/kg/h"], correct: 1,
    explication: "Une diurèse inférieure à 0,5 mL/kg/h définit l'oligurie et témoigne d'une hypoperfusion rénale, marqueur de gravité dans l'état de choc. La surveillance de la diurèse est un reflet du remplissage.",
    ref: "Surveillance de l'état de choc", diff: 3 },

  { ueId: "4.3", q: "Dans le choc cardiogénique, pourquoi le remplissage vasculaire massif est-il dangereux ?",
    options: ["Il dilue les médicaments", "Il aggrave la surcharge et peut provoquer un œdème aigu du poumon", "Il augmente la glycémie", "Il diminue la fréquence cardiaque"], correct: 1,
    explication: "Dans le choc cardiogénique, la pompe cardiaque est défaillante : un remplissage massif surcharge le cœur et favorise l'œdème aigu du poumon. On privilégie le soutien inotrope et le traitement de la cause.",
    ref: "Choc cardiogénique", diff: 3 },

  { ueId: "4.3", q: "Quel marqueur biologique reflète l'hypoperfusion tissulaire et le métabolisme anaérobie dans l'état de choc ?",
    options: ["La lactatémie", "La glycémie", "Le cholestérol", "La calcémie"], correct: 0,
    explication: "L'élévation de la lactatémie (> 2 mmol/L) traduit le passage en métabolisme anaérobie lié à l'hypoperfusion. Sa surveillance permet d'évaluer la gravité et la réponse au traitement.",
    ref: "Lactates et état de choc", diff: 3 },

  { ueId: "4.3", q: "Quels sont les deux critères suffisants pour reconnaître un arrêt cardio-respiratoire et débuter la RCP ?",
    options: ["Douleur thoracique et sueurs", "Inconscience et absence de respiration normale (ou gasps)", "Pâleur et hypotension", "Fièvre et tachycardie"], correct: 1,
    explication: "Devant une victime inconsciente qui ne respire pas normalement (absence de respiration ou gasps agoniques), on débute immédiatement la RCP, sans s'attarder plus de 10 secondes à rechercher le pouls.",
    ref: "Reconnaissance de l'ACR", diff: 1 },

  { ueId: "4.3", q: "Chez l'adulte, quelle est la fréquence recommandée des compressions thoraciques lors de la RCP ?",
    options: ["60 à 80/min", "100 à 120/min", "140 à 160/min", "Aussi vite que possible"], correct: 1,
    explication: "Les compressions thoraciques se font à une fréquence de 100 à 120/min, sur une profondeur de 5 à 6 cm, en laissant le thorax se relâcher complètement entre chaque compression.",
    ref: "RCP de base", diff: 2 },

  { ueId: "4.3", q: "Quel est le rapport compressions/insufflations de la RCP de base chez l'adulte ?",
    options: ["15 compressions / 2 insufflations", "30 compressions / 2 insufflations", "5 compressions / 1 insufflation", "10 compressions / 5 insufflations"], correct: 1,
    explication: "Chez l'adulte, le rapport est de 30 compressions pour 2 insufflations, en minimisant les interruptions du massage cardiaque.",
    ref: "RCP de base", diff: 1 },

  { ueId: "4.3", q: "Le défibrillateur automatisé externe (DAE) délivre un choc :",
    options: ["Systématiquement à toute victime inconsciente", "Uniquement sur un rythme choquable (FV ou TV sans pouls) qu'il analyse", "Sur prescription écrite préalable du médecin", "Seulement après injection d'adrénaline"], correct: 1,
    explication: "Le DAE analyse le rythme et ne délivre un choc que sur un rythme choquable (fibrillation ventriculaire ou tachycardie ventriculaire sans pouls). On ne touche pas la victime pendant l'analyse et le choc.",
    ref: "Défibrillation", diff: 2 },

  { ueId: "4.3", q: "Quel médicament est administré toutes les 3 à 5 minutes au cours de la réanimation spécialisée d'un ACR ?",
    options: ["Adrénaline 1 mg IV", "Furosémide IV", "Atropine 3 mg IV", "Insuline IV"], correct: 0,
    explication: "L'adrénaline 1 mg IV est administrée toutes les 3 à 5 minutes pendant l'ACR. En cas de rythme choquable réfractaire, l'amiodarone est ajoutée après le 3ᵉ choc.",
    ref: "Médicaments de l'ACR", diff: 3 },

  { ueId: "4.3", q: "Devant un patient en détresse respiratoire, lequel de ces signes traduit une gravité majeure (épuisement) ?",
    options: ["Une polypnée à 28/min", "Un tirage intercostal", "Une bradypnée avec pauses respiratoires", "Le battement des ailes du nez"], correct: 2,
    explication: "La bradypnée et les pauses respiratoires chez un patient en détresse signent l'épuisement respiratoire : c'est un signe de gravité majeure annonçant l'arrêt. Polypnée, tirage et battement des ailes du nez sont des signes de lutte.",
    ref: "Signes de gravité respiratoire", diff: 3 },

  { ueId: "4.3", q: "Chez un patient BPCO (insuffisant respiratoire chronique) en détresse, quel est l'objectif de SpO2 sous oxygénothérapie ?",
    options: ["100 %", "88 à 92 %", "Au moins 98 %", "70 à 80 %"], correct: 1,
    explication: "Chez le BPCO, on vise une SpO2 de 88 à 92 % : une oxygénothérapie trop forte risque d'aggraver l'hypercapnie et d'entraîner une somnolence. L'objectif général (≥ 94 %) ne s'applique pas à ces patients.",
    ref: "Oxygénothérapie et BPCO", diff: 3 },

  { ueId: "4.3", q: "Quelle position privilégier chez un patient conscient en détresse respiratoire ?",
    options: ["Décubitus dorsal strict à plat", "Position demi-assise", "Trendelenburg (tête en bas)", "Décubitus ventral"], correct: 1,
    explication: "La position demi-assise facilite la mécanique ventilatoire et le confort respiratoire. Le décubitus dorsal strict est mal toléré et aggrave la dyspnée.",
    ref: "Conduite infirmière en détresse respiratoire", diff: 1 },
];

export const flashcards = [
  { ueId: "4.3", recto: "Quels sont les quatre grands types d'état de choc ?", verso: "Hypovolémique, cardiogénique, distributif (septique, anaphylactique, neurogénique) et obstructif." },
  { ueId: "4.3", recto: "Traitement de première intention du choc anaphylactique ?", verso: "Adrénaline 0,5 mg en intramusculaire (face antéro-latérale de la cuisse) chez l'adulte." },
  { ueId: "4.3", recto: "Soluté de remplissage de première intention dans un état de choc ?", verso: "Les cristalloïdes isotoniques : NaCl 0,9 % ou Ringer lactate." },
  { ueId: "4.3", recto: "Que signifie FAST pour l'AVC ?", verso: "Face (asymétrie), Arm (déficit d'un bras), Speech (parole), Time (heure de début, appeler le 15)." },
  { ueId: "4.3", recto: "Délai maximal habituel de la thrombolyse IV dans l'AVC ischémique ?", verso: "4 h 30 après le début des symptômes." },
  { ueId: "4.3", recto: "Examen obligatoire avant tout traitement spécifique d'un AVC ?", verso: "L'imagerie cérébrale (TDM ou IRM) pour distinguer ischémie et hémorragie." },
  { ueId: "4.3", recto: "Geste systématique devant tout déficit neurologique brutal ?", verso: "Une glycémie capillaire (l'hypoglycémie peut mimer un AVC)." },
  { ueId: "4.3", recto: "Seuil d'hypoglycémie chez le diabétique ?", verso: "Glycémie inférieure à 0,70 g/L (3,9 mmol/L)." },
  { ueId: "4.3", recto: "Resucrage oral d'une hypoglycémie chez un patient conscient ?", verso: "Environ 15 g de sucre rapide (3 morceaux de sucre), puis recontrôle à 15 minutes." },
  { ueId: "4.3", recto: "Hypoglycémie chez un patient inconscient sans voie veineuse ?", verso: "Glucagon 1 mg en IM ou SC. Jamais de sucre dans la bouche d'un inconscient." },
  { ueId: "4.3", recto: "Premier geste face à une hémorragie externe ?", verso: "La compression manuelle directe immédiate." },
  { ueId: "4.3", recto: "Que doit-on toujours noter en posant un garrot ?", verso: "L'heure de pose." },
  { ueId: "4.3", recto: "Contrôle obligatoire au lit du patient avant une transfusion de CGR ?", verso: "Le contrôle ultime pré-transfusionnel : concordance identité/groupe/poche et compatibilité ABO (test de Beth-Vincent)." },
  { ueId: "4.3", recto: "Conduite devant des signes d'intolérance transfusionnelle ?", verso: "Arrêt immédiat de la transfusion, maintien de la voie, alerte médecin, conservation de la poche." },
  { ueId: "4.3", recto: "Marqueur biologique d'hypoperfusion tissulaire dans le choc ?", verso: "La lactatémie élevée (> 2 mmol/L), reflet du métabolisme anaérobie." },
  { ueId: "4.3", recto: "Quels deux critères suffisent pour débuter une RCP ?", verso: "Victime inconsciente ET ne respirant pas normalement (absence de respiration ou gasps)." },
  { ueId: "4.3", recto: "Fréquence et profondeur des compressions thoraciques chez l'adulte ?", verso: "100 à 120/min, 5 à 6 cm de profondeur, avec relâchement complet du thorax." },
  { ueId: "4.3", recto: "Rapport compressions/insufflations de la RCP de base adulte ?", verso: "30 compressions pour 2 insufflations." },
  { ueId: "4.3", recto: "Sur quel type de rythme le DAE délivre-t-il un choc ?", verso: "Un rythme choquable : fibrillation ventriculaire ou tachycardie ventriculaire sans pouls." },
  { ueId: "4.3", recto: "Posologie et rythme de l'adrénaline pendant un ACR ?", verso: "1 mg IV toutes les 3 à 5 minutes." },
  { ueId: "4.3", recto: "Objectif de SpO2 sous O2 chez un patient BPCO ?", verso: "88 à 92 % (risque d'hypercapnie si oxygénothérapie trop forte)." },
  { ueId: "4.3", recto: "Signe de gravité majeure (épuisement) en détresse respiratoire ?", verso: "La bradypnée avec pauses respiratoires, annonçant l'arrêt." },
];
