export const fiches = [
  { id: "fco_2_11_generalites", ueId: "2.11", type: "cours",
    titre: "Généralités et réglementation du médicament",
    resume: "Définition légale du médicament, sa composition et son cadre réglementaire (listes, AMM, substances vénéneuses).",
    tags: ["d'après tes cours","généralités","réglementation"],
    html: `<p>Du latin <em>medicamentum</em> = remède. Au XIXe siècle, la chimie permet l'extraction de la morphine, quinine, atropine, puis la synthèse de l'<strong>aspirine en 1893</strong>. Le XXe siècle marque un bond de la pharmacologie (pénicilline, anticancéreux, anticorps monoclonaux, molécules ciblées), sans sous-estimer les effets indésirables (<span class="key" data-term="thalidomide">thalidomide</span>, Médiator) ni les résistances.</p>
<h3>Définition (Code de la Santé Publique)</h3>
<p>Toute substance ou composition présentée comme ayant des propriétés curatives ou préventives à l'égard des maladies, ou pouvant être administrée en vue d'établir un diagnostic, de restaurer, corriger ou modifier des fonctions physiologiques en exerçant une action <strong>pharmacologique, immunologique ou métabolique</strong>.</p>
<ul>
<li>Soigne (antibiotique), prévient (vaccin), aide au diagnostic (produit de contraste), restaure/corrige/modifie (vitamines…).</li>
<li><strong>Allopathie</strong> (médecine classique combattant les symptômes) à distinguer de l'<strong>homéopathie</strong>.</li>
<li>Sont aussi des médicaments : oxygène et gaz médicaux (MEOPA), eau pour hémodialyse, médicaments dérivés du sang, radiopharmaceutiques.</li>
</ul>
<h3>Composition</h3>
<ul>
<li>Un ou plusieurs <span class="key" data-term="principe actif">principes actifs (PA)</span> = molécule qui agit.</li>
<li>Un ou plusieurs <strong>excipients</strong> (colorant, conservateur, solubilisation) sans effet thérapeutique propre, mais parfois à effet notoire (ex : lactose).</li>
<li>Un <strong>nom commercial</strong> (ex : Doliprane) et une <span class="key" data-term="DCI">DCI</span> (Dénomination Commune Internationale, ex : paracétamol).</li>
</ul>
<h3>Substances vénéneuses et listes</h3>
<table class="tbl"><tr><th>Catégorie</th><th>Exemples</th><th>Étiquetage</th></tr>
<tr><td>Liste I (les plus toxiques)</td><td>antibiotiques, anticancéreux, anxiolytiques</td><td>liseré rouge</td></tr>
<tr><td>Liste II (dangereux)</td><td>certains anti-inflammatoires, anti-ulcéreux</td><td>liseré vert</td></tr>
<tr><td>Stupéfiants</td><td>morphine, Durogesic</td><td>liseré rouge, ordonnance sécurisée</td></tr></table>
<div class="callout"><div class="callout-t">À retenir</div>La majorité des médicaments avec <span class="key" data-term="AMM">AMM</span> (Autorisation de Mise sur le Marché) sont soumis à prescription car potentiellement toxiques. L'<strong>ANSM</strong> est l'agence nationale de sécurité du médicament et des produits de santé.</div>`,
    refs: ["D'après tes cours (UE 2.11)"] },

  { id: "fco_2_11_formes_voies", ueId: "2.11", type: "cours",
    titre: "Formes galéniques et voies d'administration",
    resume: "Le choix d'une voie et d'une forme galénique dépend du médicament, du malade, de l'urgence et de l'effet recherché.",
    tags: ["d'après tes cours","galénique","voies"],
    html: `<p>Objectif : trouver pour chaque substance active la présentation la mieux adaptée. Le choix d'une voie dépend du médicament, de l'état du malade (pathologie, âge), de l'urgence, de l'effet thérapeutique souhaité et du coût.</p>
<h3>Principales voies</h3>
<ul>
<li><strong>Voie orale (per os)</strong> : la plus utilisée (facile, formes nombreuses). Inconvénients : passage hépatique, délai d'action, destruction par les sucs digestifs, vomissements.</li>
<li><strong>Voie parentérale</strong> : voie de l'urgence (<strong>IV</strong> +++). Comprend IV (périphérique/centrale), IM, SC (anticoagulants, insuline), intradermique (IDR), intrarachidienne, péridurale, intrathécale… Exige stérilité et faible pouvoir irritant.</li>
<li><strong>Perlinguale/sublinguale</strong> : action rapide (trinitrine, adrénaline).</li>
<li><strong>Rectale</strong> : action générale ou locale (enfant, nourrisson).</li>
<li><strong>Pulmonaire</strong> : générale (anesthésiques) ou locale (aérosols).</li>
<li><strong>Transdermique</strong> : action générale (trinitrine, fentanyl).</li>
<li><strong>Cutanée, nasale, oculaire, vaginale, auriculaire</strong>.</li>
</ul>
<h3>Formes galéniques (per os)</h3>
<ul>
<li>Comprimés : sécables, effervescents, sublinguaux (lyocs), gastro-résistants, à <span class="key" data-term="libération prolongée">Libération Prolongée (LP)</span> à ne jamais écraser.</li>
<li>Gélules (ouvrables sauf LP), poudres, capsules molles, granules.</li>
<li>Formes liquides : sirops (forte concentration de sucre, attention diabétiques), solutés buvables, suspensions à agiter. Noter la date d'ouverture des flacons.</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Solutions injectables : stérilité, apyrogénicité, neutralité, isotonicité, limpidité. Les <strong>suspensions injectables ne se font jamais en IV</strong>.</div>`,
    refs: ["D'après tes cours (UE 2.11)"] },

  { id: "fco_2_11_pharmacocinetique", ueId: "2.11", type: "cours",
    titre: "Pharmacocinétique : le devenir du médicament (ADME)",
    resume: "Étude du devenir d'un médicament : Absorption, Distribution, Métabolisme, Élimination.",
    tags: ["d'après tes cours","pharmacocinétique","ADME"],
    html: `<p>La <span class="key" data-term="pharmacocinétique">pharmacocinétique</span> étudie le devenir d'un médicament dans l'organisme, de son administration à son élimination. Quatre phases (ADME).</p>
<h3>1. Absorption (résorption)</h3>
<p>Faire passer le principe actif dans la circulation sanguine. La voie veineuse va directement au sang ; les autres traversent des barrières. La <span class="key" data-term="biodisponibilité">biodisponibilité</span> est la fraction de produit qui atteint la circulation générale et la vitesse à laquelle il l'atteint (100 % en IV).</p>
<h3>2. Distribution / diffusion</h3>
<p>Le médicament se fixe aux protéines plasmatiques (albumine). Deux formes :</p>
<ul>
<li><strong>Forme libre</strong> (non fixée) : seule active, capable de diffuser et d'être éliminée.</li>
<li><strong>Forme liée</strong> : mise en réserve, inactive et non éliminable.</li>
</ul>
<h3>3. Métabolisation</h3>
<p>Surtout <strong>hépatique</strong> (cytochrome P450) : rend le médicament hydrosoluble pour favoriser l'élimination. Certains médicaments inactifs (prodrogues) doivent être métabolisés pour devenir actifs.</p>
<ul>
<li><strong>Inducteurs enzymatiques</strong> (diminuent l'efficacité) : alcool, tabac, barbituriques, carbamazépine, rifampicine, millepertuis.</li>
<li><strong>Inhibiteurs enzymatiques</strong> (augmentent effets/toxicité) : cimétidine, antifongiques azolés, macrolides, jus de pamplemousse.</li>
</ul>
<h3>4. Élimination</h3>
<p>Majoritairement <strong>rénale (70-90 %)</strong> et biliaire. La <span class="key" data-term="demi-vie">demi-vie</span> est le temps nécessaire à la diminution de moitié de la concentration plasmatique ; après <strong>7 demi-vies</strong> l'élimination est de 99 %. Elle détermine le rythme d'administration.</p>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>ADME</strong> : Absorption → Distribution → Métabolisme → Élimination.</div>
<div class="callout"><div class="callout-t">À retenir</div>Notions clés : <strong>seuil d'action</strong>, <strong>seuil toxique</strong> et <strong>index thérapeutique</strong> (marge entre les deux). Ne jamais dénaturer une forme LP : respecter la voie d'administration.</div>`,
    refs: ["D'après tes cours (UE 2.11)"] },

  { id: "fco_2_11_pharmacodynamie", ueId: "2.11", type: "cours",
    titre: "Pharmacodynamie, récepteurs et interactions",
    resume: "Étude des effets et mécanismes d'action des médicaments, notion de récepteur et d'interactions.",
    tags: ["d'après tes cours","pharmacodynamie","interactions"],
    html: `<p>La <span class="key" data-term="pharmacodynamie">pharmacodynamie</span> étudie les effets et le mécanisme d'action des médicaments sur l'organisme.</p>
<h3>Types d'action</h3>
<ul>
<li><strong>Substitutive</strong> : comble un déficit (vitamines, hormones).</li>
<li><strong>Mécanique</strong> : laxatifs.</li>
<li><strong>Mimétisme</strong> d'une substance naturelle (dopamine, noradrénaline).</li>
<li><strong>Antagonisme</strong> d'une substance naturelle.</li>
<li><strong>Cellulaire</strong> : antibiotiques, anticancéreux.</li>
<li>Ne pas oublier l'<strong>effet placebo</strong>.</li>
</ul>
<h3>Notion de récepteur</h3>
<p>Structure cellulaire permettant la liaison d'un médicament avec un effet biologique. Récepteurs importants : alpha/bêta adrénergiques, acétylcholine, sérotonine, histamine, GABA. D'où les notions d'<strong>agoniste, antagoniste, agoniste-antagoniste</strong>.</p>
<h3>Interactions médicamenteuses</h3>
<ul>
<li><strong>Cinétiques</strong> : inhibition/induction enzymatique, perturbation de la résorption, compétition sur l'albumine, modification de l'élimination rénale.</li>
<li><strong>Dynamiques</strong> : synergie ou antagonisme.</li>
<li><strong>Par incompatibilité</strong> (physico-chimiques) : précipité, changement de couleur (Augmentin/aminoside, héparine/Farmorubicine), incompatibilité avec un soluté ou un contenant (Taxol/poches PVC).</li>
</ul>
<h3>Interactions avec les aliments</h3>
<ul>
<li><strong>Jus de pamplemousse</strong> : augmente la concentration de certains médicaments (inhibiteur enzymatique).</li>
<li><strong>Aliments riches en vitamine K</strong> (choux, brocolis, épinards) : contrarient les anticoagulants (AVK).</li>
<li>Proscrire l'alcool ; vigilance réglisse (HTA), caféine/thé, agrumes avec AINS/aspirine.</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Les effets indésirables (non voulus, du bénin au décès) imposent de peser la <strong>balance bénéfice/risque</strong> et de déclarer en <strong>pharmacovigilance</strong>. Lutter contre la <span class="key" data-term="iatrogénie">iatrogénie</span>.</div>`,
    refs: ["D'après tes cours (UE 2.11)"] },

  { id: "fco_2_11_bon_usage_5b", ueId: "2.11", type: "cours",
    titre: "Bon usage du médicament et règle des 5 B",
    resume: "L'administration est la dernière étape du circuit du médicament ; la règle des 5 B sécurise l'acte infirmier.",
    tags: ["d'après tes cours","sécurité","règle 5B"],
    html: `<p>Le <strong>rôle infirmier</strong> couvre la préparation des doses, la distribution/administration après vérification de l'identité, l'enregistrement (produit, dose, heure) dans le dossier et la surveillance clinique des effets secondaires. L'<strong>administration est la dernière étape du circuit du médicament</strong> = dernier verrou avant l'erreur.</p>
<h3>La règle des 5 B</h3>
<table class="tbl"><tr><th>B</th><th>Vérification</th></tr>
<tr><td>Bon patient</td><td>identité certaine (identitovigilance, attention aux homonymes)</td></tr>
<tr><td>Bon médicament</td><td>prescription et étiquetage vérifiés</td></tr>
<tr><td>Bonne dose</td><td>adaptée au poids, à la voie, au mode d'administration</td></tr>
<tr><td>Bonne voie</td><td>médicament adapté à la voie prescrite</td></tr>
<tr><td>Bon moment</td><td>plan de soins respecté, patient informé, administration tracée</td></tr></table>
<p>On y ajoute parfois : bonnes conditions, meilleur coût, balance bénéfice/risque optimale.</p>
<h3>Principales sources d'erreurs</h3>
<ul>
<li><strong>Posologie</strong> : confusion de chiffres, virgules, unités (cc, mg/µg/ml), prescriptions au poids.</li>
<li><strong>Forme galénique / voie</strong> : ne jamais écraser une forme LP/LM ; tous les injectables ne se boivent pas et inversement.</li>
<li><strong>Identification</strong> : confusions entre spécialités proches (Xatral/Xanax), entre dosages, look-alike (picking).</li>
<li><strong>Interruption de tâche</strong> : appels, bruit, multitâche — l'opérateur peut refuser d'être interrompu.</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Devant un doute : <strong>communiquer</strong> (collègue, médecin, pharmacien), consulter le <span class="key" data-term="Vidal">Vidal</span>, éviter les retranscriptions et les prescriptions orales. Cultiver la déclaration des erreurs (document HAS janvier 2016).</div>`,
    refs: ["D'après tes cours (UE 2.11)"] },

  { id: "fco_2_11_antalgiques_paliers", ueId: "2.11", type: "cours",
    titre: "Les antalgiques : douleur et 3 paliers de l'OMS",
    resume: "Évaluation de la douleur et classification OMS des antalgiques en 3 paliers selon l'intensité.",
    tags: ["d'après tes cours","antalgiques","douleur"],
    html: `<p>La <span class="key" data-term="douleur">douleur</span> est une « expérience sensorielle et émotionnelle désagréable associée à une lésion tissulaire réelle ou potentielle » : subjective et multidimensionnelle. C'est le 1er motif de consultation.</p>
<h3>Classification des douleurs</h3>
<ul>
<li><strong>Nociceptive</strong> (excès de nociception) : entorse, fracture, brûlure.</li>
<li><strong>Neuropathique</strong> : atteinte du système nerveux (neuropathie diabétique, névralgie).</li>
<li><strong>Mixte</strong> (lombalgie, cancer), <strong>idiopathique/psychogène</strong>.</li>
<li><strong>Aiguë</strong> (signal d'alarme) vs <strong>chronique</strong> (> 3 mois, devenue maladie).</li>
</ul>
<h3>Évaluation</h3>
<p>Interrogatoire <span class="key" data-term="TILT">TILT</span> (Type ? Intensité ? Localisation ? Temps ?). <strong>Auto-évaluation à privilégier</strong> (EVA, EN, EVS) ; sinon hétéroévaluation (Algoplus, Doloplus chez le sujet âgé ; FLACC, EDIN chez l'enfant).</p>
<table class="tbl"><tr><th>EVA</th><th>Intensité</th></tr>
<tr><td>0-3</td><td>légère</td></tr><tr><td>3-5</td><td>modérée</td></tr><tr><td>5-7</td><td>intense</td></tr><tr><td>&gt;7</td><td>très intense</td></tr></table>
<p>Seuil d'intervention thérapeutique : 3/10.</p>
<h3>Les 3 paliers (OMS, 1986)</h3>
<table class="tbl"><tr><th>Palier</th><th>Intensité</th><th>Médicaments</th></tr>
<tr><td>1 (non opioïdes)</td><td>faible à modérée</td><td>paracétamol, aspirine, AINS</td></tr>
<tr><td>2 (opioïdes faibles)</td><td>modérée à intense (&gt;4)</td><td>tramadol, codéine (± paracétamol), néfopam</td></tr>
<tr><td>3 (opioïdes forts)</td><td>intense à très intense (&gt;7)</td><td>morphine, oxycodone, fentanyl</td></tr></table>
<div class="callout"><div class="callout-t">À retenir</div>Association possible palier 1+2 ou 1+3, mais <strong>jamais palier 2 + palier 3</strong> ni deux opioïdes (baisse d'efficacité, hausse des effets indésirables). Privilégier la voie orale. Réévaluer au pic d'action.</div>`,
    refs: ["D'après tes cours (UE 2.11)"] },

  { id: "fco_2_11_opioides", ueId: "2.11", type: "cours",
    titre: "Opioïdes forts (palier 3) et stupéfiants",
    resume: "Généralités, effets indésirables, surdosage et législation des opioïdes de palier 3.",
    tags: ["d'après tes cours","opioïdes","stupéfiants"],
    html: `<p>La <span class="key" data-term="morphine">morphine</span> est le composé le plus actif de l'opium (capsules de pavot). Les opioïdes se fixent sur les récepteurs du SNC et inhibent la transmission du message douloureux.</p>
<h3>Équianalgésie et titration</h3>
<ul>
<li>Dose <strong>IV = 1/3</strong> de la dose per os (et voie SC) ; dose <strong>IM = 1/2</strong> de la dose per os.</li>
<li>Traitement de fond (forme <strong>LP</strong>) + <span class="key" data-term="interdose">interdoses</span> (forme LI, bolus) = 1/10 à 1/6 de la dose journalière.</li>
<li>Pas de posologie maximale : on augmente jusqu'au soulagement. <strong>Rotation des opioïdes</strong> en cas d'échec ou d'intolérance (utiliser un tableau d'équianalgésie / OPIOCONVERT).</li>
</ul>
<h3>Spécialités</h3>
<ul>
<li><strong>Morphine</strong> : LI Actiskénan/Oramorph, LP Skénan, injectable chlorhydrate.</li>
<li><strong>Oxycodone</strong> : 2× plus forte que la morphine (ne pas écraser la forme LP).</li>
<li><strong>Fentanyl</strong> : ~100-300× plus fort ; patch Durogesic (ne pas couper), sublingual, nasal.</li>
</ul>
<h3>Effets indésirables et surdosage</h3>
<p>Somnolence, confusion, nausées, vomissements, <strong>constipation</strong> (quasi systématique → laxatif osmotique macrogol systématique), <strong>myosis</strong>, dépendance physique et psychique. En cas de surdosage : confusion, <strong>dépression respiratoire</strong>, hypotension, coma.</p>
<div class="callout"><div class="callout-t">À retenir</div>Antidote = <span class="key" data-term="naloxone">naloxone (Narcan)</span>. Les opioïdes sont des <strong>médicaments à haut risque (MHR)</strong> : toujours vérifier spécialité, dosage, unité (mg/µg/ml) et voie.</div>
<h3>Législation des stupéfiants</h3>
<ul>
<li>Prescription en toutes lettres, sur ordonnance sécurisée.</li>
<li>Durée limitée à <strong>28 jours</strong>, non renouvelable.</li>
<li>Stockage en armoire/coffre fermé à clef, à part des autres médicaments.</li>
<li>Traçabilité +++ via les relevés d'administration.</li>
</ul>`,
    refs: ["D'après tes cours (UE 2.11)"] },

  { id: "fco_2_11_ains", ueId: "2.11", type: "cours",
    titre: "Les AINS : mécanisme, indications et surveillance",
    resume: "Les AINS inhibent la cyclo-oxygénase et les prostaglandines : action anti-inflammatoire, antalgique et antipyrétique.",
    tags: ["d'après tes cours","AINS","anti-inflammatoires"],
    html: `<p>Les <span class="key" data-term="AINS">AINS</span> (anti-inflammatoires non stéroïdiens, à distinguer des AIS/corticoïdes) sont des médicaments <strong>symptomatiques</strong> qui s'opposent au processus inflammatoire (rougeur, chaleur, douleur, œdème).</p>
<h3>Mécanisme d'action</h3>
<p>Les phospholipides membranaires donnent l'acide arachidonique, transformé par la <span class="key" data-term="cyclo-oxygénase">cyclo-oxygénase (COX)</span> en prostaglandines. Les AINS <strong>inhibent la COX</strong> donc la production de prostaglandines. Or les prostaglandines protègent l'estomac : d'où la toxicité gastrique.</p>
<h3>Propriétés pharmacologiques</h3>
<ul>
<li>Antipyrétique, antalgique, anti-inflammatoire.</li>
<li>Anti-agrégant plaquettaire (aspirine à faible dose).</li>
<li>Action sur le métabolisme de l'acide urique (goutte).</li>
</ul>
<p>Fixation à 99 % à l'albumine plasmique → <strong>interactions médicamenteuses +++</strong>. Métabolisme hépatique et rénal.</p>
<h3>Effets secondaires</h3>
<ul>
<li>Troubles <strong>gastroduodénaux</strong> : nausées, ulcère, hémorragie digestive.</li>
<li>Réactions d'hypersensibilité (bronchospasme), complications hématologiques (neutropénie, thrombopénie).</li>
<li>Troubles <strong>rénaux</strong> (insuffisance rénale fonctionnelle), hépatiques (transaminases), du SNC.</li>
</ul>
<h3>Contre-indications</h3>
<p>Allergie, ulcère gastroduodénal en évolution, insuffisance hépatocellulaire/rénale/cardiaque sévère, <strong>grossesse à partir du 6e mois</strong> (CI absolue au 3e trimestre), certaines associations.</p>
<div class="callout"><div class="callout-t">À retenir</div>Prendre les AINS <strong>pendant le repas</strong>, avec un verre d'eau. Patient à risque digestif : co-prescription d'un <span class="key" data-term="IPP">IPP</span> (oméprazole, pantoprazole). Attention au conducteur (somnolence).</div>`,
    refs: ["D'après tes cours (UE 2.11)"] },

  { id: "fco_2_11_calculs_doses", ueId: "2.11", type: "cours",
    titre: "Calculs de doses et de débits",
    resume: "Méthodes de calcul des débits de perfusion, des concentrations et des conversions d'unités.",
    tags: ["d'après tes cours","calculs","débit"],
    html: `<p>Maîtriser les calculs de doses est essentiel pour sécuriser l'administration.</p>
<h3>Conversions de base</h3>
<ul>
<li>1 g = 1000 mg ; 1 L = 1000 ml ; 1 ml = <strong>20 gouttes</strong> (sauf indication contraire).</li>
<li>Pourcentage : 1 % = 1 g pour 100 ml ; donc 0,9 % = 0,9 g/100 ml, 20 % = 20 g/100 ml.</li>
<li>Chiffres romains : XX gouttes = 20 gouttes.</li>
</ul>
<h3>Débit d'une perfusion (gouttes/min)</h3>
<p>Pour 1 L sur 24 h :</p>
<ul>
<li>Volume en gouttes : 1000 ml × 20 = 20 000 gouttes.</li>
<li>Durée en minutes : 24 × 60 = 1440 min.</li>
<li>Débit : 20 000 ÷ 1440 ≈ 13,9 = <strong>14 gouttes/min</strong> (arrondi par excès).</li>
</ul>
<h3>Calcul d'un volume à prélever (concentration)</h3>
<p>Exemple : ajouter <strong>3 g de NaCl</strong> avec des ampoules à 20 % (20 g/100 ml).</p>
<ul>
<li>Règle de trois : (100 × 3) ÷ 20 = <strong>15 ml</strong> de NaCl.</li>
<li>De même, 2 g de KCl avec ampoules à 10 % : (100 × 2) ÷ 10 = <strong>20 ml</strong>.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Pour un volume à prélever : <strong>(100 × masse voulue) ÷ pourcentage</strong> = ml à prélever.</div>
<div class="callout"><div class="callout-t">À retenir</div>Toujours faire apparaître le raisonnement et vérifier les unités. Un débit s'arrondit généralement par excès, à la goutte entière.</div>`,
    refs: ["D'après tes cours (UE 2.11)"] },
];

export const qcm = [
  { ueId: "2.11", q: "Que signifie l'abréviation DCI ?", options: ["Dose Cumulée Internationale","Dénomination Commune Internationale","Dilution Clinique Injectable","Données Cliniques Indispensables"], correct: 1,
    explication: "La DCI désigne la molécule (ex : paracétamol), commune internationalement, indépendamment du nom commercial.", ref: "UE 2.11", diff: 1 },
  { ueId: "2.11", q: "Quelle voie d'administration est la voie de l'urgence ?", options: ["Voie orale","Voie rectale","Voie intraveineuse (IV)","Voie transdermique"], correct: 2,
    explication: "La voie parentérale IV est la voie de l'urgence car le médicament arrive directement dans le sang.", ref: "UE 2.11", diff: 1 },
  { ueId: "2.11", q: "Que ne faut-il jamais faire avec un comprimé à libération prolongée (LP) ?", options: ["Le donner avec de l'eau","L'écraser","Le donner pendant le repas","Le donner le matin"], correct: 1,
    explication: "Écraser ou ouvrir une forme LP libère brutalement le PA et expose à un surdosage.", ref: "UE 2.11", diff: 1 },
  { ueId: "2.11", q: "Combien de phases comporte la pharmacocinétique (ADME) ?", options: ["2","3","4","5"], correct: 2,
    explication: "Absorption, Distribution, Métabolisme, Élimination = 4 phases.", ref: "UE 2.11", diff: 1 },
  { ueId: "2.11", q: "Quelle forme du médicament est pharmacologiquement active ?", options: ["La forme liée aux protéines","La forme libre (non fixée)","Les deux formes","Aucune"], correct: 1,
    explication: "Seule la forme libre diffuse dans les tissus, agit et peut être éliminée ; la forme liée est en réserve.", ref: "UE 2.11", diff: 2 },
  { ueId: "2.11", q: "L'élimination des médicaments est majoritairement assurée par :", options: ["Le foie","Les reins","Les poumons","La peau"], correct: 1,
    explication: "L'élimination est majoritairement rénale (70 à 90 %), puis biliaire.", ref: "UE 2.11", diff: 1 },
  { ueId: "2.11", q: "Après combien de demi-vies considère-t-on l'élimination complète (99 %) ?", options: ["3 demi-vies","5 demi-vies","7 demi-vies","10 demi-vies"], correct: 2,
    explication: "Après 7 demi-vies, l'élimination est de 99 %.", ref: "UE 2.11", diff: 2 },
  { ueId: "2.11", q: "Que peut provoquer le jus de pamplemousse sur certains médicaments ?", options: ["Diminuer leur concentration","Augmenter leur concentration","Aucun effet","Annuler la voie orale"], correct: 1,
    explication: "Le pamplemousse est un inhibiteur enzymatique : il augmente la concentration de certains médicaments.", ref: "UE 2.11", diff: 2 },
  { ueId: "2.11", q: "Quel antidote utilise-t-on en cas de surdosage en morphine ?", options: ["Flumazénil","Naloxone","Atropine","N-acétylcystéine"], correct: 1,
    explication: "La naloxone (Narcan) est l'antidote des opioïdes ; le flumazénil est celui des benzodiazépines.", ref: "UE 2.11", diff: 1 },
  { ueId: "2.11", q: "Quelle est la dose maximale de paracétamol par 24 h chez l'adulte ?", options: ["2 g","3 g","4 g","6 g"], correct: 2,
    explication: "Maximum 4 g par 24 h chez l'adulte ; au-delà, risque d'hépatotoxicité.", ref: "UE 2.11", diff: 1 },
  { ueId: "2.11", q: "Quel est le principal risque d'un surdosage en paracétamol ?", options: ["Insuffisance rénale","Hépatotoxicité","Hémorragie digestive","Dépression respiratoire"], correct: 1,
    explication: "Le métabolite hépatotoxique est responsable d'hépatites fulminantes potentiellement mortelles.", ref: "UE 2.11", diff: 1 },
  { ueId: "2.11", q: "À quel palier de l'OMS appartient la morphine ?", options: ["Palier 1","Palier 2","Palier 3","Aucun"], correct: 2,
    explication: "La morphine est un opioïde fort de palier 3, pour les douleurs intenses à très intenses.", ref: "UE 2.11", diff: 1 },
  { ueId: "2.11", q: "Quelle association de paliers est CONTRE-INDIQUée ?", options: ["Palier 1 + palier 2","Palier 1 + palier 3","Palier 2 + palier 3","Palier 1 + néfopam"], correct: 2,
    explication: "On n'associe jamais deux opioïdes (palier 2 + 3) : baisse d'efficacité et hausse des effets indésirables.", ref: "UE 2.11", diff: 2 },
  { ueId: "2.11", q: "Quel effet indésirable est quasi systématique avec les opioïdes ?", options: ["Diarrhée","Constipation","Hypertension","Hyperglycémie"], correct: 1,
    explication: "La constipation est quasi systématique : un laxatif osmotique (macrogol) doit être prescrit en prévention.", ref: "UE 2.11", diff: 1 },
  { ueId: "2.11", q: "Que signifie le myosis observé lors d'un surdosage en morphine ?", options: ["Pupilles dilatées","Pupilles très resserrées","Yeux rouges","Vision double"], correct: 1,
    explication: "Le myosis = rétrécissement extrême des pupilles, signe de surdosage opioïde.", ref: "UE 2.11", diff: 2 },
  { ueId: "2.11", q: "Sur quelle enzyme agissent les AINS ?", options: ["La lipase","La cyclo-oxygénase (COX)","L'amylase","La protéase"], correct: 1,
    explication: "Les AINS inhibent la cyclo-oxygénase, bloquant la synthèse des prostaglandines.", ref: "UE 2.11", diff: 2 },
  { ueId: "2.11", q: "Quel est l'effet indésirable principal des AINS ?", options: ["Hépatotoxicité","Troubles gastroduodénaux (ulcère)","Dépression respiratoire","Constipation"], correct: 1,
    explication: "Les prostaglandines protègent l'estomac ; en les inhibant, les AINS exposent à l'ulcère et à l'hémorragie digestive.", ref: "UE 2.11", diff: 1 },
  { ueId: "2.11", q: "À partir de quel terme de grossesse les AINS sont-ils contre-indiqués ?", options: ["Dès le 1er mois","À partir du 6e mois","Seulement à l'accouchement","Jamais"], correct: 1,
    explication: "CI absolue au 3e trimestre (à partir du 6e mois) : risque de fermeture du canal artériel.", ref: "UE 2.11", diff: 2 },
  { ueId: "2.11", q: "Pourquoi l'aspirine est-elle dangereuse chez l'enfant fébrile ?", options: ["Risque de diabète","Risque de syndrome de Reye","Risque de constipation","Risque de myosis"], correct: 1,
    explication: "Chez l'enfant avec infection virale, l'aspirine peut déclencher un syndrome de Reye (atteinte hépatique et cérébrale).", ref: "UE 2.11", diff: 2 },
  { ueId: "2.11", q: "Que vérifie-t-on dans la règle des 5 B ?", options: ["Bon patient, bon médicament, bonne dose, bonne voie, bon moment","Bon prix, bon stock, bonne date, bon flacon, bon lit","Bon médecin, bon service, bon horaire, bon dossier, bon code","Bon repas, bon sommeil, bonne marche, bon moral, bon transit"], correct: 0,
    explication: "Les 5 B : bon patient, bon médicament, bonne dose, bonne voie, bon moment.", ref: "UE 2.11", diff: 1 },
  { ueId: "2.11", q: "Quelle est la durée maximale d'une ordonnance de stupéfiants ?", options: ["7 jours","14 jours","28 jours","3 mois"], correct: 2,
    explication: "L'ordonnance sécurisée de stupéfiants est limitée à 28 jours, non renouvelable.", ref: "UE 2.11", diff: 2 },
  { ueId: "2.11", q: "Pour 1 L de perfusion sur 24 h (1 ml = 20 gouttes), quel est le débit ?", options: ["7 gouttes/min","14 gouttes/min","21 gouttes/min","28 gouttes/min"], correct: 1,
    explication: "20 000 gouttes ÷ 1440 min ≈ 13,9, arrondi à 14 gouttes/min.", ref: "UE 2.11", diff: 2 },
  { ueId: "2.11", q: "Une ampoule de NaCl à 20 % : combien de ml pour obtenir 3 g ?", options: ["3 ml","6 ml","15 ml","20 ml"], correct: 2,
    explication: "(100 × 3) ÷ 20 = 15 ml.", ref: "UE 2.11", diff: 3 },
  { ueId: "2.11", q: "Quelle est la biodisponibilité du paracétamol par voie IV par rapport à la voie orale ?", options: ["Inférieure","Identique","Supérieure","Variable"], correct: 1,
    explication: "La biodisponibilité per os et IV du paracétamol est identique (100 %).", ref: "UE 2.11", diff: 2 },
  { ueId: "2.11", q: "À quelle classe pharmacologique appartient le Xanax ?", options: ["Antalgique opioïde","Benzodiazépine (anxiolytique)","AINS","Antibiotique"], correct: 1,
    explication: "Le Xanax (alprazolam) est une benzodiazépine anxiolytique.", ref: "UE 2.11", diff: 2 },
];

export const flashcards = [
  { ueId: "2.11", recto: "Que signifie ADME ?", verso: "Absorption, Distribution, Métabolisme, Élimination : les 4 phases de la pharmacocinétique." },
  { ueId: "2.11", recto: "Qu'est-ce que la biodisponibilité ?", verso: "La fraction de principe actif qui atteint la circulation générale et la vitesse à laquelle il l'atteint (100 % en IV)." },
  { ueId: "2.11", recto: "Définition de la demi-vie ?", verso: "Le temps nécessaire à la diminution de moitié de la concentration plasmatique du PA. Élimination à 99 % après 7 demi-vies." },
  { ueId: "2.11", recto: "Quelle forme du médicament est active : libre ou liée ?", verso: "La forme libre (non fixée aux protéines) : seule à diffuser, agir et être éliminée." },
  { ueId: "2.11", recto: "Quel organe métabolise principalement les médicaments ?", verso: "Le foie (cytochrome P450), qui rend le médicament hydrosoluble pour favoriser son élimination." },
  { ueId: "2.11", recto: "Par quelle voie s'éliminent majoritairement les médicaments ?", verso: "Par les reins (70 à 90 %), puis par la voie biliaire." },
  { ueId: "2.11", recto: "Citez les 3 paliers OMS des antalgiques.", verso: "P1 : paracétamol, aspirine, AINS (non opioïdes). P2 : tramadol, codéine, néfopam. P3 : morphine, oxycodone, fentanyl." },
  { ueId: "2.11", recto: "Dose maximale de paracétamol par 24 h chez l'adulte ?", verso: "4 g par 24 h (risque d'hépatotoxicité au-delà)." },
  { ueId: "2.11", recto: "Antidote de la morphine ?", verso: "La naloxone (Narcan)." },
  { ueId: "2.11", recto: "Signes de surdosage en morphine ?", verso: "Somnolence, confusion, dépression respiratoire, hypotension, myosis, coma." },
  { ueId: "2.11", recto: "Effet indésirable quasi systématique des opioïdes à prévenir ?", verso: "La constipation : prévention par laxatif osmotique (macrogol)." },
  { ueId: "2.11", recto: "Sur quelle enzyme agissent les AINS et avec quelle conséquence ?", verso: "Ils inhibent la cyclo-oxygénase (COX), bloquant les prostaglandines (qui protègent l'estomac) → toxicité gastrique." },
  { ueId: "2.11", recto: "Principal effet indésirable des AINS ?", verso: "Troubles gastroduodénaux : ulcère et hémorragie digestive. Prendre pendant le repas, ± IPP." },
  { ueId: "2.11", recto: "À partir de quand les AINS sont-ils contre-indiqués pendant la grossesse ?", verso: "À partir du 6e mois (CI absolue au 3e trimestre)." },
  { ueId: "2.11", recto: "Pourquoi ne pas donner d'aspirine à un enfant fébrile ?", verso: "Risque de syndrome de Reye (atteinte hépatique et cérébrale) en cas d'infection virale." },
  { ueId: "2.11", recto: "Que sont les 5 B ?", verso: "Bon patient, bon médicament, bonne dose, bonne voie, bon moment." },
  { ueId: "2.11", recto: "Quelle est la dernière étape du circuit du médicament ?", verso: "L'administration par l'infirmier = dernier verrou avant une potentielle erreur." },
  { ueId: "2.11", recto: "Durée maximale d'une ordonnance de stupéfiants ?", verso: "28 jours, non renouvelable, sur ordonnance sécurisée en toutes lettres." },
  { ueId: "2.11", recto: "Combien de gouttes dans 1 ml (règle usuelle) ?", verso: "20 gouttes par ml." },
  { ueId: "2.11", recto: "Formule pour prélever une masse à partir d'une concentration ?", verso: "(100 × masse voulue en g) ÷ pourcentage = volume en ml à prélever." },
  { ueId: "2.11", recto: "Que mesure le TILT lors de l'évaluation de la douleur ?", verso: "Type ? Intensité ? Localisation ? Temps ?" },
  { ueId: "2.11", recto: "Différence inducteur / inhibiteur enzymatique ?", verso: "Inducteur : diminue l'efficacité (tabac, rifampicine, millepertuis). Inhibiteur : augmente effets et toxicité (pamplemousse, macrolides)." },
];
