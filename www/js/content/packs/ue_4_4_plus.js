export const fiches = [
  { id: "fx_ue_4_4_plus_voies_administration", ueId: "4.4", type: "cours",
    titre: "Voies d'administration : choix, avantages, limites et règles de sécurité",
    resume: "Comparer les principales voies d'administration et leurs implications de surveillance infirmière.",
    tags: ["voies", "administration", "biodisponibilité"],
    html: `<p>Le choix d'une <span class="key" data-term="voie d'administration">voie d'administration</span> conditionne la vitesse d'action, la <span class="key" data-term="biodisponibilité">biodisponibilité</span> et la surveillance. L'infirmier·e applique la prescription médicale mais reste responsable de la sécurité de l'acte.</p>
<h3>Les grandes voies</h3>
<table class="tbl">
<tr><th>Voie</th><th>Délai d'action</th><th>Particularités / risques</th></tr>
<tr><td>Orale (per os)</td><td>30-60 min</td><td>Effet de premier passage hépatique, contre-indiquée si troubles de déglutition</td></tr>
<tr><td>Sublinguale</td><td>1-3 min</td><td>Évite le premier passage, ex. trinitrine</td></tr>
<tr><td>Sous-cutanée (SC)</td><td>15-30 min</td><td>Résorption lente et régulière, ex. héparine, insuline</td></tr>
<tr><td>Intramusculaire (IM)</td><td>10-20 min</td><td>Contre-indiquée sous anticoagulant, risque d'hématome</td></tr>
<tr><td>Intraveineuse (IV)</td><td>Immédiat</td><td>Biodisponibilité 100 %, risque d'effet immédiat et d'embolie</td></tr>
</table>
<h3>Effet de premier passage</h3>
<p>L'<span class="key" data-term="effet de premier passage">effet de premier passage</span> hépatique réduit la fraction de médicament atteignant la circulation générale par voie orale. Les voies <strong>sublinguale, rectale (partielle), IV, SC et IM</strong> l'évitent totalement ou partiellement.</p>
<div class="callout"><div class="callout-t">Règle des concordances</div>Avant toute administration : vérifier les 5 B (Bon patient, Bon médicament, Bonne dose, Bonne voie, Bon moment), auxquels s'ajoutent la bonne information et la bonne traçabilité.</div>
<h3>Voie IV : précautions majeures</h3>
<ul>
<li><strong>Asepsie rigoureuse</strong> du site et des connectiques.</li>
<li>Vérifier la <strong>compatibilité</strong> des produits avant tout mélange.</li>
<li>Respecter la <strong>vitesse d'injection</strong> (certains médicaments comme le potassium ne se font JAMAIS en IV directe).</li>
<li>Surveiller le point de ponction (douleur, rougeur, signe d'<span class="key" data-term="extravasation">extravasation</span>).</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Vitesse d'action croissante des voies parentérales : SC &lt; IM &lt; IV (l'IV étant immédiate, biodisponibilité 100 %).</div>
<div class="callout"><div class="callout-t">Sécurité KCl</div>Le chlorure de potassium concentré ne doit JAMAIS être injecté en IV directe : risque d'arrêt cardiaque. Toujours dilué et perfusé lentement sous surveillance.</div>`,
    refs: ["Référentiel IFSI 2009 - UE 4.4", "Décret n°2004-802 art. R.4311-7 (CSP)", "ANSM - Bon usage du médicament"] },

  { id: "fx_ue_4_4_plus_calculs_doses_debits", ueId: "4.4", type: "cours",
    titre: "Calculs de doses et de débits : méthode sûre et formules clés",
    resume: "Maîtriser les conversions, le calcul de dose et le débit de perfusion sans erreur.",
    tags: ["calcul", "débit", "perfusion"],
    html: `<p>Le calcul de dose est un acte à haut risque. Une méthode rigoureuse et la vérification des unités évitent l'erreur médicamenteuse.</p>
<h3>Conversions indispensables</h3>
<ul>
<li>1 g = 1000 mg ; 1 mg = 1000 µg</li>
<li>1 L = 1000 mL ; 1 mL = 1000 µL</li>
<li>1 % = 1 g pour 100 mL (ex. NaCl 0,9 % = 0,9 g/100 mL = 9 g/L)</li>
<li>1 mL = 20 gouttes (perfuseur standard adulte, 1 goutte = 0,05 mL)</li>
</ul>
<h3>Calcul de dose</h3>
<p>Formule du produit en croix : <strong>Volume à prélever = (Dose prescrite × Volume de la solution) / Dose disponible</strong>.</p>
<div class="callout"><div class="callout-t">Exemple</div>Prescription : 750 mg. Disponible : flacon de 1 g dans 10 mL. Volume = (750 × 10) / 1000 = <strong>7,5 mL</strong>.</div>
<h3>Débit de perfusion</h3>
<p>En gouttes par minute (perfuseur 20 gtt/mL) :</p>
<p><strong>Débit (gtt/min) = (Volume en mL × 20) / (Durée en minutes)</strong></p>
<p>Soit la formule rapide : <strong>gtt/min = Volume (mL) / (3 × durée en heures)</strong>.</p>
<div class="callout"><div class="callout-t">Exemple débit</div>500 mL à passer en 4 h : 500 / (3 × 4) = 500 / 12 ≈ <strong>42 gtt/min</strong>. En mL/h : 500 / 4 = <strong>125 mL/h</strong> (réglage pompe).</div>
<h3>Débit en mL/h (pompe / pousse-seringue)</h3>
<p><strong>Débit (mL/h) = Volume total (mL) / Durée (h)</strong>.</p>
<table class="tbl">
<tr><th>Donnée</th><th>Formule</th></tr>
<tr><td>Volume à prélever</td><td>(Dose × Volume solution) / Concentration</td></tr>
<tr><td>Débit gtt/min</td><td>(Volume × 20) / minutes</td></tr>
<tr><td>Débit mL/h</td><td>Volume / heures</td></tr>
<tr><td>Durée perfusion</td><td>Volume / débit mL/h</td></tr>
</table>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« V × 20 / minutes » : pour les gouttes, on multiplie toujours le Volume par 20 (le facteur du perfuseur adulte) et on divise par le nombre de minutes.</div>
<div class="callout"><div class="callout-t">Double vérification</div>Pour les médicaments à risque (insuline, anticoagulants, chimiothérapie, électrolytes concentrés), le calcul est vérifié par un second professionnel.</div>`,
    refs: ["Référentiel IFSI 2009 - UE 4.4", "HAS - Outils de sécurisation du médicament", "Guide du calcul de doses IFSI"] },

  { id: "fx_ue_4_4_plus_surveillance_perfusion", ueId: "4.4", type: "cours",
    titre: "Surveillance d'une perfusion et gestion des effets indésirables",
    resume: "Surveiller le patient perfusé, repérer extravasation, surdosage et réactions.",
    tags: ["surveillance", "perfusion", "iatrogénie"],
    html: `<p>La surveillance après administration relève du rôle propre infirmier (R.4311-5 CSP). Elle vise à détecter précocement toute complication locale ou générale.</p>
<h3>Surveillance locale du site</h3>
<ul>
<li><strong>Extravasation</strong> : douleur, gonflement, blanchiment, perte de reflux veineux.</li>
<li><strong>Phlébite / veinite</strong> : rougeur, chaleur, cordon induré le long de la veine.</li>
<li><strong>Infection</strong> : écoulement, fièvre, douleur au point d'insertion.</li>
</ul>
<div class="callout"><div class="callout-t">Conduite si extravasation</div>Arrêter la perfusion, NE PAS retirer immédiatement le cathéter (aspirer le produit résiduel selon protocole), surélever le membre, prévenir le médecin et tracer.</div>
<h3>Surveillance générale</h3>
<table class="tbl">
<tr><th>Risque</th><th>Signes à surveiller</th></tr>
<tr><td>Réaction allergique / anaphylaxie</td><td>Urticaire, prurit, dyspnée, hypotension, malaise</td></tr>
<tr><td>Surcharge volémique</td><td>Dyspnée, OMI, crépitants, prise de poids, turgescence jugulaire</td></tr>
<tr><td>Surdosage</td><td>Signes spécifiques au médicament (bradycardie, somnolence, hémorragie...)</td></tr>
</table>
<h3>Pharmacovigilance</h3>
<p>Tout effet indésirable grave ou inattendu doit faire l'objet d'une <span class="key" data-term="déclaration de pharmacovigilance">déclaration de pharmacovigilance</span> auprès du CRPV/ANSM. L'<span class="key" data-term="iatrogénie">iatrogénie</span> médicamenteuse est une cause majeure d'hospitalisation évitable.</p>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Veinite/phlébite = les 4 signes inflammatoires de Celse : Rougeur, Chaleur, Douleur, Tuméfaction (œdème), avec souvent un cordon veineux induré palpable.</div>
<div class="callout"><div class="callout-t">Traçabilité</div>Noter : médicament, dose, voie, heure, débit, effets observés et identité du soignant. Le défaut de traçabilité équivaut à un acte non réalisé sur le plan médico-légal.</div>`,
    refs: ["Référentiel IFSI 2009 - UE 4.4", "Décret n°2004-802 art. R.4311-5 et R.4311-7 (CSP)", "ANSM - Pharmacovigilance"] },
];

export const qcm = [
  { ueId: "4.4", q: "Quelle voie d'administration évite totalement l'effet de premier passage hépatique ?", options: ["Voie orale", "Voie sublinguale", "Voie rectale exclusivement", "Voie entérale par sonde"], correct: 1,
    explication: "La voie sublinguale fait passer le principe actif directement dans la circulation veineuse systémique via la muqueuse buccale, évitant le foie. La voie orale et entérale subissent le premier passage hépatique ; la voie rectale ne l'évite que partiellement.", ref: "UE 4.4 - Pharmacocinétique", diff: 2 },

  { ueId: "4.4", q: "Prescription de 600 mg. Vous disposez d'un flacon de 1 g dilué dans 8 mL. Quel volume prélevez-vous ?", options: ["3,6 mL", "4,8 mL", "6 mL", "8 mL"], correct: 1,
    explication: "Produit en croix : (600 × 8) / 1000 = 4800 / 1000 = 4,8 mL. On convertit d'abord le gramme en milligrammes (1 g = 1000 mg) pour homogénéiser les unités.", ref: "UE 4.4 - Calcul de doses", diff: 2 },

  { ueId: "4.4", q: "On doit perfuser 1000 mL en 8 heures avec un perfuseur de 20 gouttes/mL. Quel est le débit en gouttes/minute ?", options: ["21 gtt/min", "31 gtt/min", "42 gtt/min", "63 gtt/min"], correct: 2,
    explication: "Débit = Volume / (3 × heures) = 1000 / (3 × 8) = 1000 / 24 ≈ 42 gtt/min. Vérification : (1000 × 20) / (8 × 60) = 20000 / 480 ≈ 42 gtt/min.", ref: "UE 4.4 - Calcul de débit", diff: 2 },

  { ueId: "4.4", q: "Combien représente une solution de NaCl à 0,9 % en grammes par litre ?", options: ["0,9 g/L", "9 g/L", "90 g/L", "0,09 g/L"], correct: 1,
    explication: "1 % = 1 g pour 100 mL. Donc 0,9 % = 0,9 g/100 mL = 9 g pour 1000 mL = 9 g/L. Le NaCl 0,9 % est dit isotonique.", ref: "UE 4.4 - Conversions", diff: 1 },

  { ueId: "4.4", q: "Quelle est la principale contre-indication à une injection intramusculaire ?", options: ["Patient diabétique", "Traitement anticoagulant", "Patient âgé", "Médicament huileux"], correct: 1,
    explication: "Sous anticoagulant ou en cas de trouble de l'hémostase, l'IM expose à un risque d'hématome profond. On privilégie alors une autre voie (SC, IV). Les solutions huileuses sont au contraire souvent réservées à l'IM.", ref: "UE 4.4 - Voie IM", diff: 2 },

  { ueId: "4.4", q: "Pour un perfuseur standard adulte, à combien de mL correspond 1 goutte ?", options: ["0,5 mL", "0,05 mL", "0,005 mL", "0,1 mL"], correct: 1,
    explication: "Le perfuseur adulte standard délivre 20 gouttes par mL, donc 1 goutte = 1/20 = 0,05 mL. Les microperfuseurs pédiatriques délivrent 60 gouttes/mL (1 goutte = 0,0166 mL).", ref: "UE 4.4 - Débit", diff: 2 },

  { ueId: "4.4", q: "Quel médicament ne doit JAMAIS être administré en IV directe non diluée ?", options: ["Paracétamol", "Chlorure de potassium (KCl) concentré", "Sérum physiologique", "Glucose 5 %"], correct: 1,
    explication: "Le KCl concentré injecté en IV directe peut provoquer un arrêt cardiaque par hyperkaliémie brutale. Il doit toujours être dilué et perfusé lentement sous surveillance scopique.", ref: "UE 4.4 - Sécurité électrolytes", diff: 1 },

  { ueId: "4.4", q: "Un pousse-seringue doit délivrer 50 mL en 10 heures. Quel débit programmez-vous ?", options: ["5 mL/h", "10 mL/h", "0,5 mL/h", "500 mL/h"], correct: 0,
    explication: "Débit (mL/h) = Volume / Durée = 50 / 10 = 5 mL/h. C'est le réglage typique d'un pousse-seringue électrique programmable.", ref: "UE 4.4 - Pousse-seringue", diff: 1 },

  { ueId: "4.4", q: "Quel signe évoque une extravasation lors d'une perfusion IV ?", options: ["Reflux veineux franc", "Gonflement et douleur au point de ponction", "Accélération du débit", "Coloration rosée du membre"], correct: 1,
    explication: "L'extravasation correspond au passage du produit hors de la veine dans les tissus : gonflement, douleur, blanchiment et perte du reflux veineux. Il faut arrêter la perfusion et appliquer le protocole adapté.", ref: "UE 4.4 - Surveillance perfusion", diff: 1 },

  { ueId: "4.4", q: "Combien de µg représentent 0,25 mg ?", options: ["25 µg", "250 µg", "2500 µg", "2,5 µg"], correct: 1,
    explication: "1 mg = 1000 µg, donc 0,25 mg = 0,25 × 1000 = 250 µg. Cette conversion est essentielle pour les médicaments dosés en microgrammes (ex. digoxine, fentanyl).", ref: "UE 4.4 - Conversions", diff: 1 },

  { ueId: "4.4", q: "Quelle voie d'administration assure une biodisponibilité de 100 % ?", options: ["Voie orale", "Voie sous-cutanée", "Voie intraveineuse", "Voie cutanée"], correct: 2,
    explication: "Par définition, la voie IV introduit la totalité de la dose directement dans la circulation systémique : sa biodisponibilité est de 100 %, ce qui en fait la référence pour comparer les autres voies.", ref: "UE 4.4 - Biodisponibilité", diff: 2 },

  { ueId: "4.4", q: "On prescrit 500 mL de glucosé à passer en 5 heures. Quel débit en mL/h réglez-vous sur la pompe ?", options: ["50 mL/h", "100 mL/h", "125 mL/h", "150 mL/h"], correct: 1,
    explication: "Débit = Volume / Durée = 500 / 5 = 100 mL/h. C'est le réglage direct sur une pompe volumétrique.", ref: "UE 4.4 - Débit pompe", diff: 1 },

  { ueId: "4.4", q: "Quels signes orientent vers une surcharge volémique chez un patient perfusé ?", options: ["Hypotension et soif", "Dyspnée, crépitants et œdèmes", "Constipation et fièvre", "Hypoglycémie et tremblements"], correct: 1,
    explication: "Une surcharge hydrosodée se manifeste par une dyspnée, des crépitants pulmonaires, des œdèmes des membres inférieurs, une prise de poids et une turgescence jugulaire. Il faut ralentir/arrêter et alerter le médecin.", ref: "UE 4.4 - Surveillance générale", diff: 2 },

  { ueId: "4.4", q: "Dans la règle des '5 B' de l'administration médicamenteuse, lequel ne fait PAS partie des cinq de base ?", options: ["Bon patient", "Bonne dose", "Bon coût", "Bonne voie"], correct: 2,
    explication: "Les 5 B sont : Bon patient, Bon médicament, Bonne dose, Bonne voie, Bon moment. Le coût n'en fait pas partie. S'y ajoutent souvent la bonne information et la bonne traçabilité.", ref: "UE 4.4 - Sécurité administration", diff: 1 },

  { ueId: "4.4", q: "Une perfusion de 250 mL doit passer en 2 heures avec un perfuseur 20 gtt/mL. Quel débit en gtt/min ?", options: ["21 gtt/min", "42 gtt/min", "63 gtt/min", "84 gtt/min"], correct: 1,
    explication: "Débit = Volume / (3 × heures) = 250 / (3 × 2) = 250 / 6 ≈ 42 gtt/min. Vérification : (250 × 20) / 120 = 5000 / 120 ≈ 42 gtt/min.", ref: "UE 4.4 - Calcul de débit", diff: 2 },

  { ueId: "4.4", q: "Quelle est la conduite immédiate à tenir devant une suspicion de choc anaphylactique pendant une perfusion ?", options: ["Augmenter le débit", "Arrêter la perfusion et alerter en urgence", "Attendre la fin de la poche", "Changer simplement le pansement"], correct: 1,
    explication: "Devant urticaire, dyspnée, hypotension ou malaise, on arrête immédiatement la perfusion en cause, on maintient une voie veineuse, on appelle à l'aide et on prépare adrénaline et matériel d'urgence selon protocole.", ref: "UE 4.4 - Réaction allergique", diff: 2 },

  { ueId: "4.4", q: "Pour un microperfuseur pédiatrique, combien de gouttes correspondent à 1 mL ?", options: ["20 gouttes", "40 gouttes", "60 gouttes", "10 gouttes"], correct: 2,
    explication: "Le microperfuseur (pédiatrie) délivre 60 gouttes par mL, contre 20 gouttes/mL pour le perfuseur adulte standard, afin d'affiner les petits débits.", ref: "UE 4.4 - Matériel perfusion", diff: 3 },

  { ueId: "4.4", q: "Un traitement de 1,5 g doit être réparti en 3 prises égales par jour. Quelle est la dose par prise ?", options: ["300 mg", "500 mg", "750 mg", "150 mg"], correct: 1,
    explication: "1,5 g = 1500 mg. Réparti en 3 prises : 1500 / 3 = 500 mg par prise. Penser systématiquement à convertir en mg avant de diviser.", ref: "UE 4.4 - Répartition des doses", diff: 1 },

  { ueId: "4.4", q: "Quelle voie est habituellement choisie pour l'administration d'une héparine de bas poids moléculaire (HBPM) ?", options: ["Intraveineuse directe", "Sous-cutanée", "Intramusculaire", "Sublinguale"], correct: 1,
    explication: "Les HBPM s'administrent par voie sous-cutanée, dans l'abdomen, sans purger la bulle d'air et sans masser. L'IM est contre-indiquée (risque d'hématome) chez le patient anticoagulé.", ref: "UE 4.4 - Anticoagulants", diff: 2 },

  { ueId: "4.4", q: "Quel acte engage la responsabilité infirmière au titre du rôle propre selon le CSP ?", options: ["La prescription du médicament", "La surveillance des effets et la traçabilité de l'administration", "La fixation de la posologie", "Le diagnostic médical"], correct: 1,
    explication: "L'article R.4311-5 du CSP inscrit la surveillance des effets et la traçabilité dans le rôle propre infirmier. La prescription, la posologie et le diagnostic relèvent du médecin (rôle sur prescription R.4311-7).", ref: "UE 4.4 - Cadre légal", diff: 3 },

  { ueId: "4.4", q: "On doit administrer 80 mg d'un médicament disponible à 200 mg/5 mL. Quel volume prélevez-vous ?", options: ["1 mL", "2 mL", "2,5 mL", "4 mL"], correct: 1,
    explication: "Concentration = 200 mg / 5 mL = 40 mg/mL. Volume = 80 / 40 = 2 mL. Par produit en croix : (80 × 5) / 200 = 400 / 200 = 2 mL.", ref: "UE 4.4 - Calcul de doses", diff: 2 },
];

export const flashcards = [
  { ueId: "4.4", recto: "Formule du débit en gtt/min (perfuseur adulte) ?", verso: "Débit = (Volume mL × 20) / minutes, soit Volume / (3 × heures)." },
  { ueId: "4.4", recto: "Combien de gouttes dans 1 mL avec un perfuseur adulte standard ?", verso: "20 gouttes (1 goutte = 0,05 mL)." },
  { ueId: "4.4", recto: "Que signifie une concentration de 0,9 % ?", verso: "0,9 g de soluté pour 100 mL, soit 9 g/L." },
  { ueId: "4.4", recto: "Voie d'administration avec biodisponibilité de 100 % ?", verso: "La voie intraveineuse (IV)." },
  { ueId: "4.4", recto: "Quelles voies évitent l'effet de premier passage hépatique ?", verso: "Sublinguale, IV, SC, IM (et partiellement la voie rectale)." },
  { ueId: "4.4", recto: "Médicament à ne jamais injecter en IV directe non dilué ?", verso: "Le chlorure de potassium (KCl) concentré : risque d'arrêt cardiaque." },
  { ueId: "4.4", recto: "Formule du volume à prélever (produit en croix) ?", verso: "Volume = (Dose prescrite × Volume solution) / Dose disponible." },
  { ueId: "4.4", recto: "Contre-indication majeure de la voie IM ?", verso: "Traitement anticoagulant / trouble de l'hémostase (risque d'hématome)." },
  { ueId: "4.4", recto: "Signes d'une extravasation ?", verso: "Gonflement, douleur, blanchiment et perte du reflux veineux au point de ponction." },
  { ueId: "4.4", recto: "Quelles sont les '5 B' de l'administration ?", verso: "Bon patient, Bon médicament, Bonne dose, Bonne voie, Bon moment." },
  { ueId: "4.4", recto: "Combien de µg dans 1 mg ?", verso: "1 mg = 1000 µg." },
  { ueId: "4.4", recto: "Voie d'administration habituelle des HBPM ?", verso: "Voie sous-cutanée (abdomen, sans purger la bulle, sans masser)." },
  { ueId: "4.4", recto: "Signes d'une surcharge volémique ?", verso: "Dyspnée, crépitants, œdèmes, prise de poids, turgescence jugulaire." },
  { ueId: "4.4", recto: "Débit en mL/h d'une perfusion ?", verso: "Débit (mL/h) = Volume total (mL) / Durée (h)." },
  { ueId: "4.4", recto: "Nombre de gouttes/mL d'un microperfuseur pédiatrique ?", verso: "60 gouttes par mL." },
];
