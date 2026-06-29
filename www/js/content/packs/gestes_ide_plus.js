export const fiches = [
  { id: "fx_gestes_ide_plus_injections", ueId: "4.4", type: "cours",
    titre: "Injections SC, IM et IV : voies, sites, angles et sécurité", resume: "Choisir la bonne voie, le bon site et le bon angle d'injection selon le médicament et le patient.", tags: ["injection","IM","SC","IV"],
    html: `<p>Le choix de la <span class="key" data-term="voie d'administration">voie d'administration</span> conditionne la vitesse de résorption et la tolérance. L'infirmier respecte la prescription, mais doit comprendre les particularités de chaque voie pour sécuriser le geste.</p>
<h3>Comparatif des voies injectables</h3>
<table class="tbl">
<tr><th>Critère</th><th>Sous-cutanée (SC)</th><th>Intramusculaire (IM)</th><th>Intraveineuse (IV)</th></tr>
<tr><td>Angle aiguille</td><td>45° (ou 90° avec aiguille courte)</td><td>90°</td><td>Selon abord (cathéter en place)</td></tr>
<tr><td>Sites usuels</td><td>Abdomen, face externe bras/cuisse, flanc</td><td>Ventro-glutéal, deltoïde, vaste externe</td><td>Veine périphérique, voie centrale</td></tr>
<tr><td>Volume max indicatif</td><td>≤ 1 à 2 mL</td><td>≤ 5 mL (adulte, ventro-glutéal)</td><td>Variable</td></tr>
<tr><td>Délai d'action</td><td>Lent</td><td>Intermédiaire</td><td>Immédiat</td></tr>
<tr><td>Exemples</td><td>Insuline, HBPM, vaccins</td><td>Certains vaccins, AINS retard</td><td>Antibiotiques, antalgiques, remplissage</td></tr>
</table>
<h3>Points techniques essentiels</h3>
<ul>
<li><strong>SC</strong> : faire un <strong>pli cutané</strong> chez le sujet maigre ; <strong>roter les sites</strong> pour l'insuline et l'HBPM (prévention des lipodystrophies). On ne masse <strong>jamais</strong> après une injection d'HBPM.</li>
<li><strong>IM</strong> : privilégier le site <span class="key" data-term="ventro-glutéal">ventro-glutéal</span>, plus sûr que le fessier dorsal (éloigné du nerf sciatique et des gros vaisseaux). La technique en <span class="key" data-term="Z-track">Z-track</span> limite le reflux et l'irritation cutanée.</li>
<li><strong>IV directe</strong> : injection <strong>lente</strong>, surveillance immédiate des signes d'intolérance ; vérifier le retour veineux et la perméabilité avant injection.</li>
</ul>
<div class="callout"><div class="callout-t">Sécurité AES</div>Ne jamais <strong>recapuchonner</strong> une aiguille. Élimination immédiate dans le collecteur OPCT (boîte jaune) au plus près du soin, sans le remplir au-delà de la limite.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« 45-90-immédiat » : SC à 45°, IM à 90°, IV effet immédiat. Et « SC ne masse pas l'HBPM ».</div>`,
    refs: ["Référentiel IFSI 2009 – UE 4.4 / 2.11","HAS – Bon usage des anticoagulants injectables"] },

  { id: "fx_gestes_ide_plus_perfusion_calculs", ueId: "4.4", type: "cours",
    titre: "Perfusion : débit, calculs de gouttes et surveillance", resume: "Maîtriser le calcul du débit en gouttes/min et en mL/h, et surveiller une perfusion.", tags: ["perfusion","calcul de dose","débit"],
    html: `<p>La maîtrise du <span class="key" data-term="débit de perfusion">débit de perfusion</span> est une compétence transversale : une erreur expose à une sous-dose ou à une surcharge volémique. Deux formules de référence.</p>
<h3>Formules clés</h3>
<ul>
<li><strong>Débit en mL/h</strong> = Volume total (mL) ÷ Durée (h).</li>
<li><strong>Débit en gouttes/min</strong> = [Volume (mL) × nombre de gouttes par mL] ÷ [Durée (min)]. Avec un perfuseur standard macrogouttes : <strong>1 mL ≈ 20 gouttes</strong>.</li>
</ul>
<p>Astuce pratique avec un perfuseur à 20 gouttes/mL : <strong>gouttes/min = mL/h ÷ 3</strong>.</p>
<h3>Exemple chiffré</h3>
<table class="tbl">
<tr><th>Donnée</th><th>Valeur</th></tr>
<tr><td>Volume à perfuser</td><td>1000 mL</td></tr>
<tr><td>Durée</td><td>8 h (480 min)</td></tr>
<tr><td>Débit en mL/h</td><td>1000 ÷ 8 = 125 mL/h</td></tr>
<tr><td>Débit en gouttes/min (20 gtt/mL)</td><td>(1000 × 20) ÷ 480 ≈ 42 gtt/min</td></tr>
</table>
<h3>Surveillance d'une perfusion</h3>
<ul>
<li><strong>Point de ponction</strong> : recherche de signes d'<span class="key" data-term="extravasation">extravasation</span>, de <span class="key" data-term="phlébite">phlébite</span> (douleur, rougeur, cordon induré, chaleur) — échelle de Maddox.</li>
<li><strong>Débit et volume</strong> : conformité à la prescription, absence de reflux ou de bulle d'air.</li>
<li><strong>Tolérance générale</strong> : signes de surcharge (dyspnée, OMI, crépitants), fièvre.</li>
</ul>
<div class="callout"><div class="callout-t">Point clé</div>Une rougeur douloureuse avec cordon veineux dur évoque une <strong>phlébite</strong> : arrêter la perfusion, retirer le cathéter et reposer une voie sur un autre site.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Perfuseur 20 gtt/mL : « divise les mL/h par 3 » pour obtenir les gouttes/min. 125 mL/h → ≈ 42 gtt/min.</div>`,
    refs: ["Référentiel IFSI 2009 – UE 4.4","SF2H – Prévention des infections liées aux cathéters périphériques 2019"] },

  { id: "fx_gestes_ide_plus_glycemie_hemoc_ecg", ueId: "4.4", type: "cours",
    titre: "Glycémie capillaire, hémoculture et ECG : pièges et bonnes pratiques", resume: "Sécuriser trois gestes courants où la technique conditionne la fiabilité du résultat.", tags: ["glycémie","hémoculture","ECG"],
    html: `<p>Trois gestes fréquents où une erreur technique fausse l'interprétation médicale : la qualité du prélèvement ou de la pose prime sur la rapidité.</p>
<h3>Glycémie capillaire</h3>
<ul>
<li>Ponction sur la <strong>face latérale de la pulpe</strong> du doigt (moins de terminaisons nerveuses), après lavage des mains du patient.</li>
<li><strong>Jeter la première goutte</strong> si présence d'antiseptique ou de résidus ; ne pas presser excessivement le doigt (hémolyse, faux résultats).</li>
<li>Valeurs repères à jeun : normoglycémie 0,70 à 1,10 g/L ; <span class="key" data-term="hypoglycémie">hypoglycémie</span> &lt; 0,60 à 0,70 g/L (resucrage).</li>
</ul>
<h3>Hémoculture</h3>
<ul>
<li>Prélèvement <strong>avant antibiothérapie</strong> si possible, idéalement lors d'un <span class="key" data-term="pic fébrile">pic fébrile</span> ou de frissons.</li>
<li><strong>Asepsie rigoureuse</strong> de la peau et des bouchons de flacons pour éviter les <strong>faux positifs par contamination</strong>.</li>
<li>Ensemencer le flacon <strong>aérobie puis anaérobie</strong> ; respecter le volume de sang recommandé (impact direct sur la sensibilité).</li>
</ul>
<h3>ECG 12 dérivations</h3>
<table class="tbl">
<tr><th>Électrode</th><th>Emplacement</th></tr>
<tr><td>V1</td><td>4e espace intercostal, bord droit du sternum</td></tr>
<tr><td>V2</td><td>4e espace intercostal, bord gauche du sternum</td></tr>
<tr><td>V4</td><td>5e espace intercostal, ligne médio-claviculaire gauche</td></tr>
<tr><td>V6</td><td>5e espace intercostal, ligne axillaire moyenne gauche</td></tr>
</table>
<p>Mnémonique des membres : « le soleil sur la prairie » — Rouge (bras Droit), Jaune (bras gauche), Vert (jambe gauche), Noir (jambe droite).</p>
<div class="callout"><div class="callout-t">Point clé</div>Devant une douleur thoracique, l'ECG doit être réalisé en <strong>urgence</strong> et présenté au médecin sans délai : il ne s'interprète pas seul mais sa rapidité de réalisation est un acte de soin majeur.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Membres (code CEI) : « Rouge en haut à Droite, Jaune en haut à gauche ; en bas Vert à gauche, Noir à droite ». Astuce : le Vert et le Noir (« la terre ») vont aux jambes.</div>`,
    refs: ["Référentiel IFSI 2009 – UE 4.4","SPILF – Recommandations hémocultures","HAS – Prise en charge de la douleur thoracique"] },
];
export const qcm = [
  { ueId: "4.4", q: "Quel est l'angle recommandé pour une injection intramusculaire ?", options: ["15°","45°","90°","30°"], correct: 2,
    explication: "L'IM se réalise à 90° pour atteindre le muscle. La SC se fait à 45° (ou 90° avec aiguille courte). L'angle de 15° correspond plutôt à une intradermique.", ref: "Référentiel IFSI 2009 – UE 4.4", diff: 1 },
  { ueId: "4.4", q: "Pour une perfusion de 1000 mL à passer en 8 heures, quel est le débit en mL/h ?", options: ["100 mL/h","125 mL/h","150 mL/h","80 mL/h"], correct: 1,
    explication: "Débit = volume ÷ durée = 1000 ÷ 8 = 125 mL/h. C'est la formule de base à maîtriser pour toute programmation de pompe ou réglage de molette.", ref: "UE 4.4 – Calculs de doses", diff: 1 },
  { ueId: "4.4", q: "Avec un perfuseur standard (20 gouttes/mL), à combien de gouttes/min correspond un débit de 125 mL/h ?", options: ["≈ 21 gtt/min","≈ 42 gtt/min","≈ 60 gtt/min","≈ 84 gtt/min"], correct: 1,
    explication: "Avec 20 gtt/mL : gouttes/min = mL/h ÷ 3, soit 125 ÷ 3 ≈ 42 gtt/min. On peut aussi calculer (1000×20)÷480 ≈ 42.", ref: "UE 4.4 – Calculs de doses", diff: 2 },
  { ueId: "4.4", q: "Quel site est aujourd'hui privilégié pour une injection IM chez l'adulte car éloigné du nerf sciatique ?", options: ["Quadrant supéro-externe fessier","Site ventro-glutéal","Région lombaire","Pli du coude"], correct: 1,
    explication: "Le site ventro-glutéal (région de la hanche) est recommandé : il est éloigné des gros vaisseaux et du nerf sciatique, ce qui le rend plus sûr que le quadrant supéro-externe classique.", ref: "UE 4.4 – Injections", diff: 2 },
  { ueId: "4.4", q: "Après une injection sous-cutanée d'HBPM (héparine de bas poids moléculaire), que faut-il faire ?", options: ["Masser énergiquement le point","Ne pas masser le point d'injection","Appliquer du chaud","Comprimer pendant 10 minutes"], correct: 1,
    explication: "On ne masse jamais après une HBPM SC : le massage favorise l'hématome et la diffusion. On rote également les sites d'injection pour limiter ce risque.", ref: "HAS – Anticoagulants injectables", diff: 1 },
  { ueId: "4.4", q: "Quelle est la conduite immédiate face à une phlébite sur cathéter veineux périphérique ?", options: ["Augmenter le débit","Masser la zone","Arrêter la perfusion et retirer le cathéter","Appliquer un antiseptique et continuer"], correct: 2,
    explication: "Devant des signes de phlébite (douleur, rougeur, cordon induré, chaleur), on arrête la perfusion, on retire le cathéter et on repose une voie sur un autre site.", ref: "SF2H – Cathéters périphériques 2019", diff: 2 },
  { ueId: "4.4", q: "Lors d'une glycémie capillaire, pourquoi jeter la première goutte de sang ?", options: ["Pour gagner du temps","Car elle peut contenir antiseptique/résidus et fausser le résultat","Pour réduire la douleur","Car elle est trop coagulée"], correct: 1,
    explication: "La première goutte peut être contaminée par un résidu d'antiseptique ou de désinfectant et donner un résultat faussé ; on l'essuie et on utilise la goutte suivante.", ref: "UE 4.4 – Glycémie capillaire", diff: 1 },
  { ueId: "4.4", q: "Quel est le moment le plus pertinent pour prélever une hémoculture ?", options: ["Après plusieurs jours d'antibiotiques","Lors d'un pic fébrile ou de frissons, avant antibiothérapie","Uniquement à jeun le matin","Pendant la prise alimentaire"], correct: 1,
    explication: "L'hémoculture se prélève idéalement lors d'un pic fébrile ou de frissons, et avant le démarrage de l'antibiothérapie, pour maximiser les chances de détecter le germe.", ref: "SPILF – Hémocultures", diff: 2 },
  { ueId: "4.4", q: "Quelle mesure réduit le risque de faux positif (contamination) d'une hémoculture ?", options: ["Prélever rapidement sans désinfection","Asepsie rigoureuse de la peau et des bouchons de flacons","Réutiliser la même aiguille","Remplir un seul flacon"], correct: 1,
    explication: "Une asepsie rigoureuse de la peau et des bouchons des flacons limite la contamination par la flore cutanée, principale cause de faux positifs.", ref: "SPILF – Hémocultures", diff: 2 },
  { ueId: "4.4", q: "Où se place l'électrode précordiale V1 lors d'un ECG ?", options: ["5e EIC ligne médio-claviculaire gauche","4e EIC bord droit du sternum","5e EIC ligne axillaire moyenne","2e EIC bord gauche"], correct: 1,
    explication: "V1 se place au 4e espace intercostal au bord droit du sternum ; V2 au 4e EIC bord gauche ; V4 au 5e EIC ligne médio-claviculaire gauche ; V6 au 5e EIC ligne axillaire moyenne.", ref: "UE 4.4 – ECG", diff: 3 },
  { ueId: "4.4", q: "Le sondage urinaire à demeure (sonde de Foley) est un acte à risque infectieux. Quel principe limite l'infection urinaire associée ?", options: ["Maintenir le sac collecteur au-dessus de la vessie","Système clos et sac maintenu en déclive sous le niveau de la vessie","Changer la sonde tous les jours","Déconnecter régulièrement le système"], correct: 1,
    explication: "Le maintien d'un système de drainage clos et d'un sac en déclive (sous le niveau vésical, sans contact avec le sol) évite le reflux et limite l'infection urinaire sur sonde. On ne déconnecte pas le système inutilement.", ref: "SF2H – Prévention des infections urinaires sur sonde", diff: 2 },
  { ueId: "4.4", q: "Quel ballonnet permet de maintenir une sonde de Foley en place dans la vessie ?", options: ["Un ballonnet gonflé à l'air ambiant","Un ballonnet gonflé avec de l'eau stérile","Un système d'aspiration","Une suture cutanée"], correct: 1,
    explication: "Le ballonnet de la sonde de Foley est gonflé avec de l'eau stérile (volume indiqué sur la sonde) pour la maintenir dans la vessie ; il est dégonflé avant le retrait.", ref: "UE 4.4 – Sondage urinaire", diff: 2 },
  { ueId: "4.4", q: "Lors de la réfection d'un pansement de plaie aiguë propre, quel principe d'asepsie respecter ?", options: ["Travailler du plus sale vers le plus propre","Travailler du plus propre vers le plus sale (centre vers périphérie)","Réutiliser les compresses","Toucher la plaie à mains nues"], correct: 1,
    explication: "On nettoie du plus propre (centre/plaie) vers le plus sale (périphérie/peau saine), sans repasser sur une zone déjà nettoyée, en respectant une asepsie progressive.", ref: "UE 4.4 – Pansements", diff: 1 },
  { ueId: "4.4", q: "L'oxygénothérapie par lunettes nasales délivre environ quel débit maximal recommandé en routine ?", options: ["Jusqu'à 1 à 6 L/min","15 L/min systématiquement","20 L/min","0,1 L/min"], correct: 0,
    explication: "Les lunettes nasales s'utilisent classiquement entre 1 et 6 L/min. Au-delà, on passe à un masque (masque simple, ou masque à haute concentration jusqu'à environ 15 L/min).", ref: "UE 4.4 – Oxygénothérapie", diff: 2 },
  { ueId: "4.4", q: "Chez un patient BPCO insuffisant respiratoire chronique, quelle précaution sur l'oxygénothérapie ?", options: ["Administrer toujours 15 L/min","Titrer l'O2 sur un objectif de SpO2 modéré (souvent 88-92%)","Supprimer toute surveillance","Donner de l'O2 uniquement la nuit"], correct: 1,
    explication: "Chez le BPCO à risque d'hypercapnie, on titre l'oxygène sur une cible de SpO2 plus basse (souvent 88-92%) pour éviter une hypoventilation par levée du stimulus hypoxique. La prescription médicale fixe la cible.", ref: "HAS – BPCO / oxygénothérapie", diff: 3 },
  { ueId: "4.4", q: "Quelle est la conduite à tenir immédiate face à une hypoglycémie symptomatique chez un patient conscient ?", options: ["Injecter de l'insuline","Resucrage per os (sucre rapide puis lent)","Ne rien faire et surveiller","Administrer un diurétique"], correct: 1,
    explication: "Chez un patient conscient capable d'avaler, on resucre per os (15 g de sucre rapide) puis on complète par un sucre lent, et on recontrôle la glycémie. Le glucagon ou le G30 IV sont réservés au patient inconscient.", ref: "UE 4.4 / 2.7 – Hypoglycémie", diff: 2 },
  { ueId: "4.4", q: "Quel ordre respecter pour brancher les électrodes de membre selon le code couleur (norme CEI) ?", options: ["Rouge à droite (bras), jaune à gauche (bras), vert jambe gauche, noir jambe droite","Rouge à gauche, jaune à droite","Toutes les couleurs sur le même membre","Vert sur le bras droit"], correct: 0,
    explication: "Code couleur des membres : Rouge = bras droit, Jaune = bras gauche, Vert = jambe gauche, Noir = jambe droite. Une inversion fausse le tracé.", ref: "UE 4.4 – ECG", diff: 2 },
  { ueId: "4.4", q: "Avant une injection IV directe, quelle vérification est indispensable ?", options: ["Que le patient soit à jeun","La perméabilité de la voie et le retour veineux","La température de la pièce","La couleur du cathéter"], correct: 1,
    explication: "On vérifie la perméabilité de la voie et le bon reflux/retour veineux pour s'assurer que le produit ira bien dans la veine et non en extravasation. L'injection se fait lentement avec surveillance.", ref: "UE 4.4 – Injections IV", diff: 1 },
  { ueId: "4.4", q: "Quelle pratique est INTERDITE après une injection pour prévenir les AES ?", options: ["Éliminer l'aiguille dans le collecteur OPCT","Recapuchonner l'aiguille à deux mains","Désadapter l'aiguille avec le collecteur","Réaliser une friction hydro-alcoolique"], correct: 1,
    explication: "Le recapuchonnage de l'aiguille est interdit (cause majeure d'AES par piqûre). L'aiguille va directement dans le collecteur OPCT au plus près du soin, sans recapuchonnage.", ref: "GERES – Prévention des AES", diff: 1 },
  { ueId: "4.4", q: "Quelle technique d'injection IM limite le reflux du produit et l'irritation cutanée ?", options: ["Injection rapide en surface","Technique en Z (Z-track)","Massage prolongé avant","Injection sans aspiration"], correct: 1,
    explication: "La technique en Z (Z-track) consiste à décaler la peau avant l'injection puis à la relâcher après retrait : le trajet de l'aiguille se referme en chicane, limitant le reflux et l'irritation, utile pour les produits irritants ou colorants.", ref: "UE 4.4 – Injections IM", diff: 3 },
  { ueId: "4.4", q: "Pour une glycémie capillaire, quel site de ponction est recommandé sur le doigt ?", options: ["Le centre de la pulpe","La face latérale de la pulpe","L'ongle","La phalange proximale"], correct: 1,
    explication: "On pique sur la face latérale de la pulpe du doigt : zone moins riche en terminaisons nerveuses, donc moins douloureuse, tout en assurant un bon flux sanguin.", ref: "UE 4.4 – Glycémie capillaire", diff: 1 },
];
export const flashcards = [
  { ueId: "4.4", recto: "Angle d'injection : SC ? IM ?", verso: "SC à 45° (ou 90° avec aiguille courte), IM à 90°." },
  { ueId: "4.4", recto: "Débit en mL/h pour 1000 mL en 8 h ?", verso: "1000 ÷ 8 = 125 mL/h." },
  { ueId: "4.4", recto: "Conversion rapide mL/h → gtt/min (perfuseur 20 gtt/mL) ?", verso: "Diviser les mL/h par 3 (ex. 125 mL/h ≈ 42 gtt/min)." },
  { ueId: "4.4", recto: "Pourquoi ne pas masser après une HBPM SC ?", verso: "Le massage favorise l'hématome et la diffusion ; on rote aussi les sites." },
  { ueId: "4.4", recto: "Geste interdit avec une aiguille usagée ?", verso: "Le recapuchonnage : risque majeur d'AES. Élimination directe dans le collecteur OPCT." },
  { ueId: "4.4", recto: "Signes d'une phlébite sur cathéter ?", verso: "Douleur, rougeur, chaleur, cordon veineux induré → arrêt, retrait, nouvelle voie." },
  { ueId: "4.4", recto: "Première goutte de sang en glycémie capillaire ?", verso: "On la jette : elle peut contenir antiseptique/résidus et fausser le résultat." },
  { ueId: "4.4", recto: "Quand prélever une hémoculture ?", verso: "Lors d'un pic fébrile/frissons, avant l'antibiothérapie, avec asepsie rigoureuse." },
  { ueId: "4.4", recto: "Emplacement de l'électrode V1 (ECG) ?", verso: "4e espace intercostal, bord droit du sternum." },
  { ueId: "4.4", recto: "Code couleur des électrodes de membre ?", verso: "Rouge = bras droit, Jaune = bras gauche, Vert = jambe gauche, Noir = jambe droite." },
  { ueId: "4.4", recto: "Avec quoi gonfle-t-on le ballonnet d'une sonde de Foley ?", verso: "De l'eau stérile (volume indiqué sur la sonde) ; dégonflage avant retrait." },
  { ueId: "4.4", recto: "Principe anti-infectieux du sondage à demeure ?", verso: "Système clos + sac en déclive sous le niveau de la vessie, sans contact au sol." },
  { ueId: "4.4", recto: "Sens du nettoyage d'un pansement de plaie propre ?", verso: "Du plus propre (centre) vers le plus sale (périphérie), sans repasser." },
  { ueId: "4.4", recto: "Débit usuel des lunettes nasales à O2 ?", verso: "1 à 6 L/min ; au-delà, passer au masque." },
  { ueId: "4.4", recto: "Cible de SpO2 chez le BPCO hypercapnique ?", verso: "Souvent 88-92% : titration de l'O2 pour éviter l'hypoventilation (selon prescription)." },
];
