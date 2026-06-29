export const fiches = [
  { id: "fx_ue_2_7_plus_ic_pec", ueId: "2.7", type: "cours",
    titre: "Insuffisance cardiaque : décompensation et surveillance IDE",
    resume: "Mécanismes, signes de décompensation gauche/droite et surveillance infirmière ciblée.",
    tags: ["insuffisance cardiaque", "OAP", "surveillance"],
    html: `<p>L'<span class="key" data-term="insuffisance cardiaque">insuffisance cardiaque</span> (IC) est l'incapacité du cœur à assurer un débit adapté aux besoins de l'organisme. On distingue l'IC à fraction d'éjection altérée (dysfonction systolique) et l'IC à fraction d'éjection préservée (dysfonction diastolique).</p>
<h3>Distinguer IC gauche et IC droite</h3>
<table class="tbl">
<tr><th>Versant</th><th>Stase</th><th>Signes cliniques</th></tr>
<tr><td><strong>IC gauche</strong></td><td>Pulmonaire (en amont du VG)</td><td><span class="key" data-term="dyspnée">Dyspnée</span> d'effort, orthopnée, toux nocturne, crépitants, <span class="key" data-term="OAP">OAP</span> au maximum</td></tr>
<tr><td><strong>IC droite</strong></td><td>Systémique (en amont du VD)</td><td>Œdèmes des membres inférieurs (godet), turgescence jugulaire, reflux hépato-jugulaire, hépatomégalie, prise de poids</td></tr>
</table>
<div class="callout"><div class="callout-t">Signe d'alerte : l'OAP</div>L'<strong>œdème aigu du poumon</strong> est une urgence : dyspnée brutale, orthopnée majeure, grésillement laryngé, expectoration mousseuse parfois rosée, angoisse. Position <strong>assise jambes pendantes</strong>, oxygénothérapie, alerte médicale immédiate, préparation des diurétiques et dérivés nitrés sur prescription.</div>
<h3>Surveillance infirmière au quotidien</h3>
<ul>
<li><strong>Poids</strong> quotidien, à jeun, même balance, même heure : une prise rapide (par ex. plusieurs kilos en quelques jours) signe la rétention hydrosodée.</li>
<li>Diurèse, état des œdèmes, périmètre des chevilles.</li>
<li>FC, PA, FR, SpO2 ; surveillance de l'efficacité et de la tolérance des diurétiques.</li>
<li>Éducation : régime peu salé, observance, autosurveillance du poids, repérage des signes d'alerte.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>EPOF</strong> pour l'IC droite : <strong>Œdèmes</strong>, <strong>turgescence jugulaire</strong>, <strong>hépatomégalie</strong>, <strong>prise de poids</strong> = stase en périphérie. La gauche « noie le poumon », la droite « gonfle le corps ».</div>`,
    refs: ["Référentiel IFSI 2009 – UE 2.7 Défaillances organiques et processus dégénératifs", "Recommandations ESC insuffisance cardiaque"] },

  { id: "fx_ue_2_7_plus_irc_dialyse", ueId: "2.7", type: "cours",
    titre: "Insuffisance rénale chronique : conséquences et surveillance",
    resume: "Du DFG aux complications métaboliques, et rôle infirmier autour de la dialyse.",
    tags: ["insuffisance rénale", "DFG", "dialyse"],
    html: `<p>L'<span class="key" data-term="insuffisance rénale chronique">insuffisance rénale chronique</span> (IRC) est une altération progressive et irréversible de la fonction rénale, évaluée par le <span class="key" data-term="débit de filtration glomérulaire">débit de filtration glomérulaire</span> (DFG). Le rein perd ses fonctions d'épuration, d'équilibre hydro-électrolytique et endocrine.</p>
<h3>Conséquences de la perte de fonction</h3>
<ul>
<li><strong>Rétention azotée</strong> : élévation de l'urée et de la créatinine.</li>
<li><strong>Hyperkaliémie</strong> : risque de troubles du rythme, voire d'arrêt cardiaque.</li>
<li><strong>Acidose métabolique</strong> et rétention hydrosodée (HTA, œdèmes, surcharge).</li>
<li><strong>Anémie</strong> par défaut d'érythropoïétine.</li>
<li><strong>Troubles phosphocalciques</strong> : hyperphosphorémie, hypocalcémie, atteinte osseuse.</li>
</ul>
<div class="callout"><div class="callout-t">Priorité : l'hyperkaliémie</div>Une <strong>kaliémie élevée</strong> est une urgence vitale potentielle (ECG : ondes T amples et pointues, élargissement du QRS). Surveiller l'apport potassique alimentaire et signaler tout chiffre anormal sans délai.</div>
<h3>Rôle IDE autour de la dialyse</h3>
<table class="tbl">
<tr><th>Modalité</th><th>Principe</th><th>Surveillance IDE</th></tr>
<tr><td>Hémodialyse</td><td>Épuration par circulation extracorporelle sur fistule artério-veineuse</td><td>Protection de la <span class="key" data-term="fistule">fistule</span> (pas de PA, ponction ni garrot sur ce bras), recherche du thrill/frémissement, poids avant/après</td></tr>
<tr><td>Dialyse péritonéale</td><td>Échanges via le péritoine et un cathéter abdominal</td><td>Asepsie rigoureuse, surveillance du point d'émergence, dépistage de la péritonite (liquide trouble, douleur, fièvre)</td></tr>
</table>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Bras de fistule = <strong>bras « sanctuaire »</strong> : ni tension, ni prise de sang, ni perfusion, ni garrot de ce côté. On vérifie toujours le <strong>thrill</strong> (frémissement) pour s'assurer qu'elle fonctionne.</div>`,
    refs: ["Référentiel IFSI 2009 – UE 2.7", "HAS – Prise en charge de la maladie rénale chronique"] },

  { id: "fx_ue_2_7_plus_neurodegen", ueId: "2.7", type: "cours",
    titre: "Parkinson et Alzheimer : repères cliniques et soins",
    resume: "Différencier les deux processus dégénératifs et adapter l'accompagnement infirmier.",
    tags: ["Parkinson", "Alzheimer", "neurodégénératif"],
    html: `<p>La maladie de <span class="key" data-term="Parkinson">Parkinson</span> et la maladie d'<span class="key" data-term="Alzheimer">Alzheimer</span> sont deux processus dégénératifs distincts : la première touche surtout la motricité, la seconde les fonctions cognitives.</p>
<h3>Tableaux cliniques</h3>
<table class="tbl">
<tr><th></th><th>Parkinson</th><th>Alzheimer</th></tr>
<tr><td>Atteinte</td><td>Voie dopaminergique (substance noire)</td><td>Cortex, accumulation de lésions, perte neuronale</td></tr>
<tr><td>Signes clés</td><td>Triade : <strong>tremblement</strong> de repos, <strong>rigidité</strong>, <strong>akinésie/bradykinésie</strong></td><td><strong>Troubles de la mémoire</strong> antérograde, désorientation, troubles du langage, du jugement</td></tr>
<tr><td>Évolution</td><td>Motrice puis perte d'autonomie, risque de chutes</td><td>Cognitive puis dépendance globale, troubles du comportement</td></tr>
</table>
<div class="callout"><div class="callout-t">Parkinson : le traitement ne se retarde pas</div>Le traitement dopaminergique (ex. L-DOPA) doit être administré <strong>à heures fixes</strong> : un retard provoque un blocage moteur (phénomène « on-off »). L'IDE veille à la ponctualité et adapte les soins aux phases « on ».</div>
<h3>Axes de soins infirmiers</h3>
<ul>
<li><strong>Prévention des chutes</strong> (Parkinson) : environnement sécurisé, aide à la marche, prise en compte du freezing.</li>
<li><strong>Repères et routine</strong> (Alzheimer) : calendrier, photos, horaires stables pour limiter l'angoisse.</li>
<li>Prévention des <strong>fausses routes</strong> : surveillance de la déglutition, texture adaptée.</li>
<li>Soutien des aidants, communication apaisante, validation émotionnelle.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Parkinson = <strong>TRAP</strong> : <strong>T</strong>remblement de repos, <strong>R</strong>igidité, <strong>A</strong>kinésie, <strong>P</strong>osture/instabilité posturale.</div>`,
    refs: ["Référentiel IFSI 2009 – UE 2.7", "HAS – Maladie d'Alzheimer et maladies apparentées"] },
];

export const qcm = [
  { ueId: "2.7", q: "Quel signe oriente vers une insuffisance cardiaque GAUCHE plutôt que droite ?", options: ["Œdèmes des membres inférieurs", "Turgescence jugulaire", "Orthopnée et crépitants pulmonaires", "Hépatomégalie"], correct: 2,
    explication: "L'IC gauche provoque une stase en amont du ventricule gauche, c'est-à-dire une stase pulmonaire : dyspnée, orthopnée, crépitants, voire OAP. Les œdèmes, la turgescence jugulaire et l'hépatomégalie traduisent une stase systémique d'IC droite.", ref: "UE 2.7 – Insuffisance cardiaque", diff: 1 },

  { ueId: "2.7", q: "Devant un OAP, quelle position installer en priorité ?", options: ["Décubitus dorsal strict", "Position assise, jambes pendantes", "Décubitus latéral de sécurité", "Trendelenburg (tête en bas)"], correct: 1,
    explication: "La position assise jambes pendantes diminue le retour veineux et soulage la congestion pulmonaire, facilitant la respiration. Le décubitus dorsal aggrave la dyspnée. Le Trendelenburg augmenterait la stase pulmonaire.", ref: "UE 2.7 – OAP", diff: 1 },

  { ueId: "2.7", q: "Quel paramètre de surveillance quotidienne est le plus pertinent pour détecter une rétention hydrosodée chez l'insuffisant cardiaque ?", options: ["La température", "Le poids quotidien", "La fréquence respiratoire isolée", "La glycémie capillaire"], correct: 1,
    explication: "La pesée quotidienne, dans les mêmes conditions, est l'indicateur le plus sensible d'une rétention hydrosodée débutante : une prise de poids rapide précède souvent l'aggravation clinique et impose d'alerter.", ref: "UE 2.7 – Surveillance IC", diff: 1 },

  { ueId: "2.7", q: "Quelle complication métabolique de l'insuffisance rénale chronique constitue une urgence vitale par risque de trouble du rythme ?", options: ["Hypokaliémie", "Hyperkaliémie", "Hypernatrémie", "Hypocalcémie"], correct: 1,
    explication: "L'hyperkaliémie est fréquente dans l'IRC (défaut d'élimination du potassium) et peut entraîner des troubles du rythme graves voire un arrêt cardiaque. Elle se traduit à l'ECG par des ondes T amples et pointues puis un élargissement du QRS.", ref: "UE 2.7 – IRC", diff: 2 },

  { ueId: "2.7", q: "Chez un patient porteur d'une fistule artério-veineuse pour hémodialyse, quelle pratique est FORMELLEMENT à proscrire sur le bras de la fistule ?", options: ["Surveiller le thrill", "Observer le point de ponction", "Prendre la pression artérielle sur ce bras", "Laisser le bras à découvert"], correct: 2,
    explication: "Sur le bras de la fistule, on ne pose ni brassard à tension, ni garrot, ni perfusion, ni prélèvement : cela comprimerait la fistule et risquerait de la thromboser. On vérifie au contraire son bon fonctionnement par la perception du thrill (frémissement).", ref: "UE 2.7 – Dialyse", diff: 1 },

  { ueId: "2.7", q: "L'anémie observée dans l'insuffisance rénale chronique est principalement liée à :", options: ["Une carence en fer isolée", "Un défaut de sécrétion d'érythropoïétine", "Une hémolyse auto-immune", "Une carence en vitamine K"], correct: 1,
    explication: "Le rein produit l'érythropoïétine (EPO), hormone stimulant la production de globules rouges. Dans l'IRC, le défaut d'EPO entraîne une anémie, souvent traitée par EPO de synthèse (et supplémentation en fer si besoin).", ref: "UE 2.7 – IRC complications", diff: 2 },

  { ueId: "2.7", q: "Quelle triade caractérise la maladie de Parkinson ?", options: ["Tremblement de repos, rigidité, akinésie", "Tremblement d'action, ataxie, dysarthrie", "Fièvre, rigidité, sueurs", "Amnésie, aphasie, apraxie"], correct: 0,
    explication: "La triade parkinsonienne associe tremblement de repos, rigidité (hypertonie plastique) et akinésie/bradykinésie (lenteur et pauvreté du mouvement). L'amnésie-aphasie-apraxie évoque plutôt Alzheimer.", ref: "UE 2.7 – Parkinson", diff: 1 },

  { ueId: "2.7", q: "Pourquoi le traitement par L-DOPA doit-il être administré à heures fixes dans la maladie de Parkinson ?", options: ["Pour limiter les effets digestifs", "Pour éviter les blocages moteurs (effet on-off)", "Parce qu'il doit être pris à jeun strict", "Pour réduire le coût du traitement"], correct: 1,
    explication: "Un retard de prise provoque une réapparition brutale des symptômes moteurs (phase « off », blocage). Le respect strict des horaires maintient un niveau dopaminergique stable et préserve l'autonomie du patient.", ref: "UE 2.7 – Parkinson traitement", diff: 2 },

  { ueId: "2.7", q: "Quel trouble cognitif est le plus précoce et caractéristique de la maladie d'Alzheimer ?", options: ["Trouble de la mémoire antérograde (faits récents)", "Hallucinations visuelles isolées", "Paralysie d'un membre", "Tremblement de repos"], correct: 0,
    explication: "L'atteinte de la mémoire des faits récents (mémoire antérograde) est le symptôme initial typique : le patient oublie les événements récents tout en conservant longtemps les souvenirs anciens. S'y associent ensuite désorientation et troubles du langage.", ref: "UE 2.7 – Alzheimer", diff: 1 },

  { ueId: "2.7", q: "Chez un patient Alzheimer désorienté et anxieux, quelle attitude soignante est la plus adaptée ?", options: ["Le confronter systématiquement à la réalité de force", "Maintenir des repères stables et une communication apaisante", "Limiter au maximum les interactions", "Changer souvent d'horaires pour le stimuler"], correct: 1,
    explication: "La stabilité des repères (horaires, lieux, visages) et une communication calme et bienveillante réduisent l'angoisse. La confrontation brutale et l'instabilité aggravent la désorientation et l'agitation.", ref: "UE 2.7 – Accompagnement Alzheimer", diff: 2 },

  { ueId: "2.7", q: "Quel signe traduit une stase systémique typique de l'insuffisance cardiaque droite ?", options: ["Crépitants pulmonaires bilatéraux", "Reflux hépato-jugulaire", "Expectoration mousseuse rosée", "Wheezing isolé"], correct: 1,
    explication: "Le reflux hépato-jugulaire, la turgescence jugulaire, les œdèmes périphériques et l'hépatomégalie signent la stase en amont du cœur droit. Les crépitants et l'expectoration mousseuse sont des signes de stase pulmonaire (cœur gauche).", ref: "UE 2.7 – IC droite", diff: 2 },

  { ueId: "2.7", q: "L'insuffisance respiratoire chronique de la BPCO évoluée peut se compliquer d'une atteinte cardiaque appelée :", options: ["Cœur pulmonaire chronique", "Péricardite aiguë", "Endocardite", "Tamponnade"], correct: 0,
    explication: "L'hypoxie chronique et l'hypertension pulmonaire qui en découle imposent une surcharge au ventricule droit, conduisant au cœur pulmonaire chronique (défaillance droite secondaire à une atteinte respiratoire).", ref: "UE 2.7 – Insuffisance respiratoire", diff: 3 },

  { ueId: "2.7", q: "Chez l'insuffisant respiratoire chronique hypercapnique, l'oxygénothérapie à fort débit non contrôlée fait courir le risque de :", options: ["Hyperventilation incontrôlée", "Aggravation de l'hypercapnie / narcose au CO2", "Hypothermie", "Hypoglycémie"], correct: 1,
    explication: "Chez certains insuffisants respiratoires chroniques hypercapniques, un débit d'O2 trop élevé peut réduire la stimulation ventilatoire et aggraver la rétention de CO2 (narcose). L'oxygénothérapie est titrée sur prescription avec un objectif de SpO2 adapté.", ref: "UE 2.7 – Insuffisance respiratoire", diff: 3 },

  { ueId: "2.7", q: "Quel signe clinique évoque une insuffisance hépatique sévère ?", options: ["Ictère et troubles de la coagulation", "Polyurie franche", "Bradycardie isolée", "Hypertension artérielle maligne"], correct: 0,
    explication: "Le foie défaillant n'assure plus ses fonctions : ictère (bilirubine), troubles de la coagulation (baisse des facteurs synthétisés par le foie), ascite, encéphalopathie hépatique. La surveillance du saignement et de l'état de conscience est primordiale.", ref: "UE 2.7 – Insuffisance hépatique", diff: 2 },

  { ueId: "2.7", q: "L'encéphalopathie hépatique se manifeste typiquement par :", options: ["Une hyperthermie maligne", "Des troubles de la conscience et un astérixis (flapping)", "Une paralysie faciale isolée", "Une crise convulsive fébrile"], correct: 1,
    explication: "L'accumulation de toxines (dont l'ammoniaque) non épurées par le foie altère la conscience : confusion, somnolence, astérixis (tremblement à grandes secousses des mains, « flapping tremor »), pouvant aller jusqu'au coma. La surveillance neurologique est essentielle.", ref: "UE 2.7 – Insuffisance hépatique", diff: 3 },

  { ueId: "2.7", q: "Quel élément éducatif est central pour l'autosurveillance d'un patient insuffisant cardiaque à domicile ?", options: ["Compter ses pas chaque heure", "Se peser régulièrement et signaler une prise de poids rapide", "Mesurer sa température 4 fois par jour", "Adopter un régime hyperprotéiné"], correct: 1,
    explication: "L'autosurveillance du poids permet de détecter précocement une décompensation (rétention hydrosodée). Le patient apprend à se peser régulièrement, à suivre un régime peu salé et à reconnaître les signes d'alerte (essoufflement, œdèmes).", ref: "UE 2.7 – Éducation IC", diff: 1 },

  { ueId: "2.7", q: "Quel risque majeur lié à la déglutition faut-il prévenir chez les patients Parkinson et Alzheimer avancés ?", options: ["La constipation", "Les fausses routes et pneumopathies d'inhalation", "L'hypoglycémie", "L'hypertension"], correct: 1,
    explication: "Les troubles de la déglutition exposent aux fausses routes et aux pneumopathies d'inhalation. L'IDE adapte la texture des aliments, installe le patient correctement et surveille les repas.", ref: "UE 2.7 – Soins neurodégénératifs", diff: 2 },

  { ueId: "2.7", q: "Le débit de filtration glomérulaire (DFG) sert à :", options: ["Mesurer la fonction respiratoire", "Évaluer et classer la sévérité de l'insuffisance rénale", "Doser la glycémie", "Quantifier l'ictère"], correct: 1,
    explication: "Le DFG reflète la capacité de filtration des reins. Sa baisse définit et stadifie l'insuffisance rénale chronique : plus il diminue, plus l'atteinte rénale est sévère.", ref: "UE 2.7 – IRC", diff: 1 },

  { ueId: "2.7", q: "Quel signe doit faire suspecter une péritonite chez un patient en dialyse péritonéale ?", options: ["Liquide de drainage trouble, douleurs abdominales, fièvre", "Urines foncées isolées", "Bradycardie", "Sécheresse buccale"], correct: 0,
    explication: "La péritonite est la complication redoutée de la dialyse péritonéale : le liquide de drainage devient trouble, avec douleurs abdominales et fièvre. L'asepsie lors des échanges et la surveillance du point d'émergence du cathéter sont essentielles.", ref: "UE 2.7 – Dialyse péritonéale", diff: 3 },

  { ueId: "2.7", q: "Le phénomène de « freezing » (enrayage cinétique) chez le patient parkinsonien correspond à :", options: ["Une perte de connaissance brève", "Un blocage soudain de la marche", "Une crise convulsive", "Un malaise vagal"], correct: 1,
    explication: "Le freezing est un blocage brutal de la marche, comme si les pieds étaient « collés » au sol, majorant le risque de chute. L'IDE sécurise l'environnement et peut proposer des stratégies (repères visuels au sol, rythme).", ref: "UE 2.7 – Parkinson", diff: 2 },

  { ueId: "2.7", q: "Quelle surveillance ECG est prioritaire devant une hyperkaliémie suspectée chez un insuffisant rénal ?", options: ["Recherche d'ondes T amples et pointues", "Recherche d'un sus-décalage isolé en V1", "Recherche d'une onde delta", "Mesure du QT court isolé"], correct: 0,
    explication: "L'hyperkaliémie se traduit à l'ECG par des ondes T amples, pointues et symétriques, puis un élargissement du QRS et des troubles de conduction pouvant mener à l'arrêt cardiaque. Ces signes imposent une prise en charge urgente.", ref: "UE 2.7 – IRC hyperkaliémie", diff: 3 },
];

export const flashcards = [
  { ueId: "2.7", recto: "IC gauche : quelle stase et quels signes ?", verso: "Stase pulmonaire : dyspnée, orthopnée, crépitants, OAP au maximum." },
  { ueId: "2.7", recto: "IC droite : quels signes principaux ?", verso: "Œdèmes des membres inférieurs, turgescence jugulaire, reflux hépato-jugulaire, hépatomégalie, prise de poids." },
  { ueId: "2.7", recto: "Position d'un patient en OAP ?", verso: "Assis, jambes pendantes, pour diminuer le retour veineux." },
  { ueId: "2.7", recto: "Paramètre quotidien clé de surveillance de l'insuffisance cardiaque ?", verso: "Le poids (même heure, même balance) : dépiste la rétention hydrosodée." },
  { ueId: "2.7", recto: "Complication métabolique vitale de l'IRC à surveiller ?", verso: "L'hyperkaliémie (risque de trouble du rythme / arrêt cardiaque)." },
  { ueId: "2.7", recto: "Bras de fistule artério-veineuse : que ne JAMAIS faire ?", verso: "Pas de tension, de garrot, de perfusion ni de prélèvement ; vérifier le thrill." },
  { ueId: "2.7", recto: "Pourquoi une anémie dans l'IRC ?", verso: "Défaut de sécrétion d'érythropoïétine (EPO) par le rein." },
  { ueId: "2.7", recto: "Triade de la maladie de Parkinson (TRAP) ?", verso: "Tremblement de repos, Rigidité, Akinésie/bradykinésie, instabilité Posturale." },
  { ueId: "2.7", recto: "Pourquoi la L-DOPA à heures fixes ?", verso: "Pour éviter les blocages moteurs (effet on-off) et maintenir l'autonomie." },
  { ueId: "2.7", recto: "Symptôme cognitif initial de la maladie d'Alzheimer ?", verso: "Trouble de la mémoire antérograde (oubli des faits récents)." },
  { ueId: "2.7", recto: "Attitude soignante face à un patient Alzheimer anxieux ?", verso: "Repères stables, routine, communication calme et bienveillante." },
  { ueId: "2.7", recto: "Signe neurologique de l'encéphalopathie hépatique ?", verso: "Troubles de la conscience et astérixis (flapping tremor)." },
  { ueId: "2.7", recto: "Risque de l'O2 à fort débit chez l'insuffisant respiratoire hypercapnique ?", verso: "Aggravation de l'hypercapnie / narcose au CO2 ; titrer l'O2 sur prescription." },
  { ueId: "2.7", recto: "Signe d'une péritonite en dialyse péritonéale ?", verso: "Liquide de drainage trouble, douleurs abdominales, fièvre." },
  { ueId: "2.7", recto: "Risque majeur de déglutition en Parkinson/Alzheimer avancés ?", verso: "Fausses routes et pneumopathie d'inhalation : adapter texture et installation." },
];
