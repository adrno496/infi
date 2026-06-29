export const fiches = [
  { id: "fx_pharmaco_plus_antalgiques_anticoag", ueId: "2.11", type: "cours",
    titre: "Antalgiques (paliers OMS) & anticoagulants : surveillances infirmières",
    resume: "Mécanismes, indications et surveillances ciblées des antalgiques par palier et des anticoagulants (AVK/HBPM/AOD).",
    tags: ["antalgiques", "OMS", "anticoagulants", "AVK", "HBPM", "surveillance"],
    html: `<h3>Antalgiques selon les paliers de l'OMS</h3>
<p>Le choix d'un antalgique repose sur l'évaluation de l'intensité douloureuse (EVA, EN, échelle verbale) et sur une réévaluation systématique après administration.</p>
<table class="tbl">
<tr><th>Palier</th><th>Molécules types</th><th>Indication (douleur)</th><th>Surveillance infirmière clé</th></tr>
<tr><td>Palier 1 (non opioïdes)</td><td><span class="key" data-term="paracetamol">paracétamol</span>, AINS</td><td>Faible à modérée</td><td>Paracétamol : risque d'<strong>hépatotoxicité</strong> en surdosage (dose max adulte 4 g/j, à réduire si poids faible/insuffisance hépatique). AINS : tolérance digestive, fonction rénale, TA.</td></tr>
<tr><td>Palier 2 (opioïdes faibles)</td><td><span class="key" data-term="tramadol">tramadol</span>, codéine</td><td>Modérée</td><td>Nausées/vomissements, vertiges, constipation, somnolence ; risque convulsif du tramadol ; surveiller la vigilance.</td></tr>
<tr><td>Palier 3 (opioïdes forts)</td><td><span class="key" data-term="morphine">morphine</span>, oxycodone, fentanyl</td><td>Intense</td><td><strong>Fréquence respiratoire</strong>, sédation (échelle de sédation), TA, douleur, transit. Surveiller le triade du surdosage : <strong>FR &lt; 10/min</strong>, myosis serré, sédation/coma.</td></tr>
</table>
<div class="callout"><div class="callout-t">Surdosage en morphine</div><p>Signe d'alerte : dépression respiratoire (FR basse) + sédation + myosis. Antidote : <strong>naloxone</strong> sur prescription. Surveiller systématiquement FR et niveau de sédation lors de l'instauration et des titrations.</p></div>
<div class="callout"><div class="callout-t">Prévention systématique sous opioïdes</div><ul><li>Prescrire/anticiper un <strong>laxatif</strong> (la constipation ne s'épuise pas dans le temps).</li><li>Anticiper un antiémétique en début de traitement.</li></ul></div>

<h3>Anticoagulants : AVK, HBPM, AOD</h3>
<p>Les anticoagulants exposent au risque hémorragique : la surveillance vise l'efficacité (prévention thrombose) ET la sécurité (saignement).</p>
<table class="tbl">
<tr><th>Classe</th><th>Exemple</th><th>Surveillance biologique</th><th>Antidote</th></tr>
<tr><td><span class="key" data-term="avk">AVK</span></td><td>warfarine, fluindione</td><td><strong>INR</strong> (cible souvent 2-3 selon indication)</td><td>vitamine K (± CCP)</td></tr>
<tr><td><span class="key" data-term="hbpm">HBPM</span></td><td>énoxaparine</td><td>Plaquettes (risque <span class="key" data-term="tih">TIH</span>) ; activité anti-Xa si besoin</td><td>protamine (partielle)</td></tr>
<tr><td><span class="key" data-term="aod">AOD</span></td><td>apixaban, rivaroxaban, dabigatran</td><td>Pas de suivi de routine de la coagulation ; fonction rénale</td><td>idarucizumab (dabigatran), andexanet alfa</td></tr>
</table>
<div class="callout"><div class="callout-t">Surveillance infirmière commune</div><ul><li>Signes hémorragiques : gingivorragies, épistaxis, hématomes, hématurie, méléna, céphalées inhabituelles.</li><li>Éducation : ne pas modifier le traitement seul, carte de surveillance, signaler tout saignement.</li><li>AVK : stabilité alimentaire en vitamine K, interactions médicamenteuses nombreuses.</li></ul></div>
<div class="callout"><div class="callout-t">TIH (thrombopénie induite par l'héparine)</div><p>Sous héparine/HBPM, une chute des <strong>plaquettes</strong> doit alerter (risque thrombotique paradoxal). Surveillance plaquettaire selon protocole et contexte.</p></div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><p><strong>« AVK → INR, HBPM → Plaquettes, AOD → Rein »</strong> : à chaque classe sa surveillance prioritaire.</p></div>`,
    refs: ["Référentiel IFSI 2009 - UE 2.11", "OMS - paliers de la douleur", "HAS - bon usage des anticoagulants"] },

  { id: "fx_pharmaco_plus_endocrino_cardio", ueId: "2.11", type: "cours",
    titre: "Antidiabétiques/insulines, antihypertenseurs, diurétiques : surveillances",
    resume: "Repères pharmacologiques et surveillances infirmières en endocrinologie et cardiologie.",
    tags: ["insuline", "antidiabétiques", "antihypertenseurs", "diurétiques", "kaliémie"],
    html: `<h3>Antidiabétiques et insulines</h3>
<p>L'objectif est l'équilibre glycémique sans hypoglycémie. La surveillance repose sur la glycémie capillaire, les signes d'hypo/hyperglycémie et l'éducation thérapeutique.</p>
<ul>
<li><span class="key" data-term="metformine">Metformine</span> (biguanide) : 1re intention dans le diabète de type 2 ; ne provoque pas d'hypoglycémie seule ; risque rare d'<strong>acidose lactique</strong> ; troubles digestifs fréquents.</li>
<li><span class="key" data-term="sulfamides">Sulfamides hypoglycémiants</span> : stimulent l'insulinosécrétion → <strong>risque d'hypoglycémie</strong>.</li>
<li><span class="key" data-term="insuline">Insulines</span> : rapides/analogues rapides, intermédiaires/lentes. Adapter l'injection au profil (repas, basale).</li>
</ul>
<div class="callout"><div class="callout-t">Hypoglycémie : signes et conduite</div><p>Sueurs, tremblements, pâleur, faim, troubles de la concentration, malaise. Confirmer par glycémie capillaire. Si conscient : <strong>resucrage oral</strong> (sucres rapides puis lents). Si inconscient/troubles de déglutition : ne rien donner par la bouche, mesures sur prescription (glucagon/glucosé IV).</p></div>
<div class="callout"><div class="callout-t">Sécurité injection d'insuline</div><ul><li>Rotation des sites pour prévenir les <strong>lipodystrophies</strong>.</li><li>Vérifier le bon stylo/concentration (ne jamais transvaser, risque d'erreur d'unités).</li><li>Coordonner injection et prise alimentaire selon le type d'insuline.</li></ul></div>

<h3>Antihypertenseurs</h3>
<table class="tbl">
<tr><th>Classe</th><th>Point clé</th><th>Surveillance infirmière</th></tr>
<tr><td><span class="key" data-term="iec">IEC</span> / ARA2 («sartans»)</td><td>Bloquent le système rénine-angiotensine</td><td>Fonction rénale, <strong>kaliémie</strong> (risque d'hyperkaliémie) ; toux sèche possible sous IEC ; risque d'angio-œdème.</td></tr>
<tr><td><span class="key" data-term="betabloquant">Bêtabloquants</span></td><td>Diminuent FC et débit cardiaque</td><td><strong>Fréquence cardiaque</strong> (bradycardie), TA ; ne pas arrêter brutalement ; prudence chez l'asthmatique.</td></tr>
<tr><td>Inhibiteurs calciques</td><td>Vasodilatation</td><td>Œdèmes des membres inférieurs, TA, céphalées/flush.</td></tr>
</table>

<h3>Diurétiques</h3>
<ul>
<li><span class="key" data-term="diuretiquedeanse">Diurétiques de l'anse</span> (furosémide) : puissants ; risque d'<strong>hypokaliémie</strong> et de déshydratation.</li>
<li><span class="key" data-term="thiazidiques">Thiazidiques</span> : HTA ; surveiller kaliémie et natrémie.</li>
<li><span class="key" data-term="epargneurspotassiques">Épargneurs de potassium</span> (spironolactone) : risque d'<strong>hyperkaliémie</strong> (attention en association aux IEC/ARA2).</li>
</ul>
<div class="callout"><div class="callout-t">Surveillance commune diurétiques</div><ul><li>Poids quotidien, diurèse, TA (hypotension orthostatique).</li><li>Ionogramme : <strong>kaliémie</strong> et natrémie ; signes de déshydratation.</li></ul></div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><p><strong>Anse/thiazidiques = baisse K⁺</strong> ; <strong>épargneurs + IEC/ARA2 = hausse K⁺</strong>. La kaliémie est le fil rouge de la surveillance.</p></div>`,
    refs: ["Référentiel IFSI 2009 - UE 2.11", "HAS - prise en charge du diabète de type 2", "ESC/ESH - HTA"] },

  { id: "fx_pharmaco_plus_atb_psychotropes_cortico", ueId: "2.11", type: "cours",
    titre: "Antibiotiques, psychotropes et corticoïdes : effets et surveillances",
    resume: "Repères d'usage et surveillances infirmières des antibiotiques, psychotropes et corticothérapie.",
    tags: ["antibiotiques", "psychotropes", "corticoïdes", "lithium", "surveillance"],
    html: `<h3>Antibiotiques</h3>
<p>Le bon usage vise l'efficacité et la limitation des résistances : respecter dose, rythme et durée, et tracer l'antibiogramme.</p>
<ul>
<li>Réaliser les <span class="key" data-term="hemocultures">prélèvements bactériologiques</span> (ex. hémocultures) <strong>avant</strong> la 1re dose quand c'est prescrit.</li>
<li>Surveiller la tolérance : <strong>allergie</strong> (notamment bêtalactamines), troubles digestifs, candidoses, signe de colite (diarrhée).</li>
<li>Respecter la durée prescrite ; ne pas arrêter dès l'amélioration.</li>
</ul>
<div class="callout"><div class="callout-t">Alerte allergie</div><p>Rechercher les antécédents allergiques avant administration. Surveiller les premières minutes (risque de réaction anaphylactique : urticaire, dyspnée, hypotension).</p></div>

<h3>Psychotropes</h3>
<table class="tbl">
<tr><th>Classe</th><th>Indication</th><th>Surveillance infirmière</th></tr>
<tr><td><span class="key" data-term="benzodiazepines">Benzodiazépines</span></td><td>Anxiété, sevrage, insomnie</td><td>Vigilance, risque de chute (sujet âgé), dépendance ; pas d'arrêt brutal.</td></tr>
<tr><td>Antidépresseurs</td><td>Dépression, anxiété</td><td>Délai d'action (plusieurs semaines) ; surveiller le <strong>risque suicidaire</strong> en début de traitement.</td></tr>
<tr><td>Antipsychotiques (neuroleptiques)</td><td>Psychoses</td><td>Effets extrapyramidaux, métaboliques ; surveiller un éventuel <strong>syndrome malin</strong> (fièvre, rigidité, troubles de conscience) = urgence.</td></tr>
<tr><td><span class="key" data-term="lithium">Lithium</span> (thymorégulateur)</td><td>Trouble bipolaire</td><td><strong>Marge thérapeutique étroite</strong> : suivi de la <strong>lithémie</strong>, fonction rénale, thyroïde ; signes de surdosage (tremblements, troubles digestifs, confusion).</td></tr>
</table>

<h3>Corticoïdes</h3>
<p>Anti-inflammatoires/immunosuppresseurs puissants ; nombreux effets indésirables surtout en traitement prolongé.</p>
<ul>
<li>Effets : hyperglycémie, rétention hydrosodée (HTA, œdèmes), <strong>hypokaliémie</strong>, fragilité osseuse, risque infectieux, troubles de l'humeur/sommeil.</li>
<li>Surveillance : glycémie, TA, poids, <strong>kaliémie</strong>, signes d'infection.</li>
<li><strong>Ne jamais arrêter brutalement</strong> une corticothérapie prolongée (risque d'insuffisance surrénale) : décroissance progressive.</li>
</ul>
<div class="callout"><div class="callout-t">Mesures associées fréquentes</div><ul><li>Prise le matin pour respecter le rythme physiologique du cortisol.</li><li>Régime souvent pauvre en sel/sucre selon prescription ; surveillance du potassium.</li></ul></div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><p>Corticoïdes = <strong>« GLUCO-SEL-K-OS-INFECTION »</strong> : Glycémie hausse, rétention Sel/eau, K⁺ baisse, OS fragilisé, risque INFECTION.</p></div>`,
    refs: ["Référentiel IFSI 2009 - UE 2.11", "ANSM - bon usage des antibiotiques", "HAS - corticothérapie"] },
];

export const qcm = [
  { ueId: "2.11", q: "Quel est le signe d'alerte majeur d'un surdosage en morphine à surveiller en priorité ?", options: ["Hypertension artérielle", "Tachycardie", "Dépression respiratoire (FR basse)", "Mydriase"], correct: 2,
    explication: "Le surdosage opioïde associe dépression respiratoire (FR basse), sédation et myosis serré. La fréquence respiratoire et le niveau de sédation sont les paramètres de surveillance prioritaires ; l'antidote est la naloxone.", ref: "OMS - paliers de la douleur", diff: 1 },
  { ueId: "2.11", q: "La dose maximale usuelle de paracétamol chez l'adulte sans facteur de risque est de :", options: ["1 g/j", "2 g/j", "4 g/j", "8 g/j"], correct: 2,
    explication: "La dose maximale usuelle est de 4 g/jour chez l'adulte, à réduire en cas de poids faible, d'insuffisance hépatique ou d'éthylisme. Le surdosage expose à une hépatotoxicité grave.", ref: "ANSM - paracétamol", diff: 1 },
  { ueId: "2.11", q: "Quelle surveillance biologique est spécifique des AVK ?", options: ["INR", "Plaquettes", "Activité anti-Xa", "Lithémie"], correct: 0,
    explication: "Les AVK se surveillent par l'INR (cible souvent 2-3 selon l'indication). Les HBPM se surveillent surtout par les plaquettes (risque de TIH) et au besoin l'anti-Xa.", ref: "HAS - anticoagulants", diff: 1 },
  { ueId: "2.11", q: "Sous HBPM, quelle surveillance biologique permet de dépister une thrombopénie induite par l'héparine (TIH) ?", options: ["INR", "Numération plaquettaire", "Glycémie", "Kaliémie"], correct: 1,
    explication: "La TIH se traduit par une chute des plaquettes avec risque thrombotique paradoxal. La numération plaquettaire est donc surveillée selon le protocole et le contexte.", ref: "HAS - héparines", diff: 2 },
  { ueId: "2.11", q: "Quel est l'antidote des AVK en cas de surdosage ?", options: ["Naloxone", "Vitamine K", "Protamine", "Flumazénil"], correct: 1,
    explication: "La vitamine K (éventuellement associée à des concentrés de complexe prothrombinique) est l'antidote des AVK. La protamine antagonise (partiellement) l'héparine ; la naloxone, les opioïdes.", ref: "HAS - anticoagulants", diff: 2 },
  { ueId: "2.11", q: "Pour les AOD (anticoagulants oraux directs), quelle surveillance est particulièrement importante ?", options: ["INR de routine", "Fonction rénale", "Lithémie", "Glycémie à jeun"], correct: 1,
    explication: "Les AOD ne nécessitent pas de surveillance de routine de la coagulation, mais la fonction rénale doit être évaluée car l'élimination est en partie rénale et conditionne le risque hémorragique.", ref: "HAS - AOD", diff: 2 },
  { ueId: "2.11", q: "Quel antidiabétique oral est associé à un risque (rare) d'acidose lactique ?", options: ["Sulfamide hypoglycémiant", "Metformine", "Insuline rapide", "Inhibiteur calcique"], correct: 1,
    explication: "La metformine (biguanide) expose à un risque rare d'acidose lactique. Elle ne provoque pas d'hypoglycémie utilisée seule, contrairement aux sulfamides hypoglycémiants.", ref: "HAS - diabète type 2", diff: 2 },
  { ueId: "2.11", q: "Quelle classe d'antidiabétiques expose le plus au risque d'hypoglycémie ?", options: ["Metformine seule", "Sulfamides hypoglycémiants", "Inhibiteurs de l'enzyme de conversion", "Diurétiques thiazidiques"], correct: 1,
    explication: "Les sulfamides hypoglycémiants stimulent la sécrétion d'insuline et peuvent provoquer des hypoglycémies, notamment chez le sujet âgé ou en cas de repas sauté.", ref: "HAS - diabète type 2", diff: 1 },
  { ueId: "2.11", q: "Devant un patient diabétique inconscient avec troubles de la déglutition et suspicion d'hypoglycémie, que faire ?", options: ["Faire boire du jus de fruit", "Donner du sucre dans la bouche", "Ne rien donner par voie orale et appliquer les mesures prescrites (glucagon/glucosé IV)", "Attendre le repas suivant"], correct: 2,
    explication: "Chez un patient inconscient ou avec troubles de la déglutition, le resucrage oral est contre-indiqué (risque de fausse route). On applique les mesures sur prescription : glucagon ou glucosé par voie injectable.", ref: "HAS - hypoglycémie", diff: 2 },
  { ueId: "2.11", q: "Pourquoi pratique-t-on la rotation des sites d'injection d'insuline ?", options: ["Pour accélérer l'action de l'insuline", "Pour prévenir les lipodystrophies", "Pour réduire la dose nécessaire", "Pour éviter les hypoglycémies nocturnes"], correct: 1,
    explication: "La rotation des sites prévient les lipodystrophies (modifications du tissu sous-cutané) qui altèrent l'absorption de l'insuline et l'équilibre glycémique.", ref: "Soins infirmiers - insulinothérapie", diff: 1 },
  { ueId: "2.11", q: "Quelle anomalie ionique faut-il surveiller en priorité sous IEC ou ARA2 ?", options: ["Hypokaliémie", "Hyperkaliémie", "Hypernatrémie", "Hypocalcémie"], correct: 1,
    explication: "Les IEC et ARA2 bloquent le système rénine-angiotensine-aldostérone et peuvent entraîner une hyperkaliémie, surtout en cas d'insuffisance rénale ou d'association à un épargneur de potassium.", ref: "ESC/ESH - HTA", diff: 2 },
  { ueId: "2.11", q: "Quel effet indésirable est classiquement associé aux IEC ?", options: ["Toux sèche", "Bradycardie", "Œdèmes des chevilles", "Hyperglycémie"], correct: 0,
    explication: "La toux sèche est un effet indésirable caractéristique des IEC. Les inhibiteurs calciques donnent plutôt des œdèmes des membres inférieurs ; les bêtabloquants une bradycardie.", ref: "ESC/ESH - HTA", diff: 1 },
  { ueId: "2.11", q: "Quel paramètre surveiller en priorité avant d'administrer un bêtabloquant ?", options: ["La glycémie", "La fréquence cardiaque", "L'INR", "La diurèse"], correct: 1,
    explication: "Les bêtabloquants ralentissent la fréquence cardiaque : une bradycardie contre-indique ou fait suspendre l'administration. On ne les arrête jamais brutalement.", ref: "ESC/ESH - HTA", diff: 1 },
  { ueId: "2.11", q: "Quel trouble ionique est le plus à craindre sous diurétique de l'anse (furosémide) ?", options: ["Hyperkaliémie", "Hypokaliémie", "Hypercalcémie", "Hyperglycémie"], correct: 1,
    explication: "Les diurétiques de l'anse augmentent l'élimination du potassium et exposent à une hypokaliémie, ainsi qu'à un risque de déshydratation. La surveillance du ionogramme est essentielle.", ref: "ESC/ESH - HTA", diff: 1 },
  { ueId: "2.11", q: "La spironolactone (diurétique épargneur de potassium) expose à :", options: ["Une hypokaliémie", "Une hyperkaliémie", "Une hyperglycémie", "Une hypernatrémie"], correct: 1,
    explication: "Les épargneurs de potassium comme la spironolactone exposent à l'hyperkaliémie, risque majoré en association avec un IEC ou un ARA2.", ref: "ESC/ESH - HTA", diff: 2 },
  { ueId: "2.11", q: "Avant la première dose d'antibiotique prescrite avec hémocultures, l'infirmier doit :", options: ["Administrer l'antibiotique puis prélever", "Prélever les hémocultures avant d'administrer", "Attendre les résultats avant toute action", "Doubler la dose"], correct: 1,
    explication: "Les prélèvements bactériologiques (hémocultures) sont réalisés avant la première dose d'antibiotique afin de ne pas fausser les résultats et d'orienter l'antibiothérapie.", ref: "ANSM - antibiotiques", diff: 2 },
  { ueId: "2.11", q: "Quelle réaction faut-il surveiller particulièrement lors de l'administration d'une bêtalactamine ?", options: ["L'allergie", "L'hyperkaliémie", "La bradycardie", "L'hypoglycémie"], correct: 0,
    explication: "Les bêtalactamines (pénicillines, céphalosporines) exposent à un risque allergique pouvant aller jusqu'à l'anaphylaxie. Rechercher les antécédents et surveiller les premières minutes d'administration.", ref: "ANSM - antibiotiques", diff: 1 },
  { ueId: "2.11", q: "Le lithium impose une surveillance rapprochée car :", options: ["Il provoque des hémorragies", "Sa marge thérapeutique est étroite", "Il est un anticoagulant", "Il diminue la glycémie"], correct: 1,
    explication: "Le lithium a une marge thérapeutique étroite : on surveille la lithémie, la fonction rénale et la thyroïde. Les signes de surdosage incluent tremblements, troubles digestifs et confusion.", ref: "HAS - trouble bipolaire", diff: 2 },
  { ueId: "2.11", q: "Quel signe doit faire évoquer un syndrome malin des neuroleptiques (urgence) ?", options: ["Hypothermie isolée", "Fièvre, rigidité musculaire et troubles de conscience", "Toux sèche", "Bradycardie isolée"], correct: 1,
    explication: "Le syndrome malin des neuroleptiques associe fièvre, rigidité musculaire, troubles de la conscience et instabilité neurovégétative : c'est une urgence vitale nécessitant l'arrêt du traitement et une prise en charge immédiate.", ref: "Pharmacologie - antipsychotiques", diff: 3 },
  { ueId: "2.11", q: "Concernant les benzodiazépines chez le sujet âgé, quel risque est majoré ?", options: ["Hyperkaliémie", "Chute", "Hépatotoxicité", "Hypertension"], correct: 1,
    explication: "Les benzodiazépines augmentent le risque de chute chez le sujet âgé (sédation, troubles de l'équilibre, confusion). Elles ne doivent pas être arrêtées brutalement (risque de syndrome de sevrage).", ref: "HAS - benzodiazépines sujet âgé", diff: 1 },
  { ueId: "2.11", q: "Pourquoi ne faut-il jamais arrêter brutalement une corticothérapie prolongée ?", options: ["Risque d'hémorragie", "Risque d'insuffisance surrénale aiguë", "Risque d'hyperkaliémie", "Risque de TIH"], correct: 1,
    explication: "Une corticothérapie prolongée freine l'axe corticotrope ; un arrêt brutal expose à une insuffisance surrénale aiguë. La décroissance doit être progressive.", ref: "HAS - corticothérapie", diff: 2 },
  { ueId: "2.11", q: "Quel trouble ionique surveiller particulièrement sous corticothérapie ?", options: ["Hyperkaliémie", "Hypokaliémie", "Hypernatrémie isolée", "Hypocalcémie isolée"], correct: 1,
    explication: "Les corticoïdes favorisent la rétention hydrosodée et la fuite de potassium, exposant à une hypokaliémie. On surveille aussi glycémie, TA, poids et signes d'infection.", ref: "HAS - corticothérapie", diff: 2 },
];

export const flashcards = [
  { ueId: "2.11", recto: "Triade du surdosage en morphine ?", verso: "Dépression respiratoire (FR basse) + sédation + myosis serré. Antidote : naloxone." },
  { ueId: "2.11", recto: "Dose maximale usuelle de paracétamol chez l'adulte ?", verso: "4 g/jour, à réduire si poids faible, insuffisance hépatique ou éthylisme." },
  { ueId: "2.11", recto: "Surveillance prioritaire : AVK, HBPM, AOD ?", verso: "AVK → INR ; HBPM → plaquettes (TIH) ; AOD → fonction rénale." },
  { ueId: "2.11", recto: "Antidote des AVK ?", verso: "Vitamine K (± concentrés de complexe prothrombinique)." },
  { ueId: "2.11", recto: "Antidiabétique de 1re intention dans le diabète de type 2 ?", verso: "La metformine (biguanide) ; pas d'hypoglycémie seule, risque rare d'acidose lactique." },
  { ueId: "2.11", recto: "Classe d'antidiabétiques la plus pourvoyeuse d'hypoglycémie ?", verso: "Les sulfamides hypoglycémiants (stimulent l'insulinosécrétion)." },
  { ueId: "2.11", recto: "Pourquoi faire la rotation des sites d'injection d'insuline ?", verso: "Prévenir les lipodystrophies qui altèrent l'absorption et l'équilibre glycémique." },
  { ueId: "2.11", recto: "Trouble ionique à surveiller sous IEC/ARA2 ?", verso: "L'hyperkaliémie (+ surveillance de la fonction rénale)." },
  { ueId: "2.11", recto: "Effet indésirable caractéristique des IEC ?", verso: "La toux sèche (± risque d'angio-œdème)." },
  { ueId: "2.11", recto: "Trouble ionique sous diurétique de l'anse (furosémide) ?", verso: "Hypokaliémie (+ risque de déshydratation)." },
  { ueId: "2.11", recto: "Trouble ionique sous épargneur de potassium (spironolactone) ?", verso: "Hyperkaliémie, majorée en association IEC/ARA2." },
  { ueId: "2.11", recto: "Quand prélever les hémocultures par rapport à l'antibiotique ?", verso: "Avant la première dose, pour ne pas fausser les résultats." },
  { ueId: "2.11", recto: "Pourquoi surveiller étroitement le lithium ?", verso: "Marge thérapeutique étroite : suivi de la lithémie, fonction rénale et thyroïde." },
  { ueId: "2.11", recto: "Signes du syndrome malin des neuroleptiques ?", verso: "Fièvre, rigidité musculaire, troubles de conscience : urgence vitale." },
  { ueId: "2.11", recto: "Pourquoi ne pas arrêter brutalement une corticothérapie prolongée ?", verso: "Risque d'insuffisance surrénale aiguë ; décroissance progressive nécessaire." },
];
