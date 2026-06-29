export const fiches = [
  { id: "fx_patho_plus_urgences_temps", ueId: "2.7", type: "cours",
    titre: "Urgences temps-dépendantes : SCA, AVC et embolie pulmonaire",
    resume: "Reconnaître vite et agir juste sur trois urgences où chaque minute compte.",
    tags: ["SCA", "AVC", "embolie pulmonaire", "urgence"],
    html: `<p>Trois pathologies partagent une logique commune : le pronostic dépend du <strong>délai de prise en charge</strong>. L'IDE est souvent en première ligne pour repérer les signes et déclencher la filière. La règle est de <strong>tracer l'heure de début des symptômes</strong>, donnée capitale pour décider d'une reperfusion.</p>
<h3>Reconnaître le tableau</h3>
<table class="tbl">
<tr><th>Pathologie</th><th>Signes évocateurs</th><th>Première intention IDE (sur protocole/prescription)</th></tr>
<tr><td><span class="key" data-term="SCA">SCA</span> (syndrome coronarien aigu)</td><td>Douleur thoracique constrictive prolongée, irradiation bras gauche/mâchoire, sueurs, parfois atypique (femme, diabétique, sujet âgé)</td><td><span class="key" data-term="ECG">ECG</span> 12 dérivations en moins de 10 min (complété si besoin par dérivations droites/postérieures, dites « 18 dérivations »), scope, voie veineuse, O2 si SpO2 basse, préparation antiagrégants/antalgiques</td></tr>
<tr><td><span class="key" data-term="AVC">AVC</span> (accident vasculaire cérébral)</td><td>Déficit neurologique brutal : asymétrie du visage, déficit d'un bras, troubles de la parole</td><td>Alerte filière neurovasculaire (thrombolyse/thrombectomie), heure de début ++, glycémie capillaire, <strong>à jeun</strong>, surveillance neuro</td></tr>
<tr><td><span class="key" data-term="embolie pulmonaire">Embolie pulmonaire</span> (EP)</td><td>Dyspnée et/ou douleur thoracique brutales, tachycardie, parfois signes de phlébite, désaturation</td><td>Scope, O2, position adaptée, voie veineuse, préparation anticoagulation sur prescription</td></tr>
</table>
<div class="callout"><div class="callout-t">AVC : le test FAST</div>Devant une suspicion d'AVC, on évalue : <strong>F</strong>ace (le visage est-il asymétrique ?), <strong>A</strong>rm (un bras tombe-t-il ?), <strong>S</strong>peech (la parole est-elle altérée ?), <strong>T</strong>ime (heure de début, appeler sans délai). Aucun retard ne doit être pris : « time is brain ».</div>
<div class="callout"><div class="callout-t">Piège : ne pas resucrer ni faire boire à l'aveugle</div>Tout déficit brutal impose une <strong>glycémie capillaire</strong> (une hypoglycémie mime un AVC). En cas d'AVC suspecté, on garde le patient <strong>à jeun strict</strong> tant que les troubles de la déglutition ne sont pas évalués, pour éviter une fausse route.</div>
<h3>Surveillance commune</h3>
<ul>
<li>Conscience, paramètres vitaux rapprochés, douleur, SpO2.</li>
<li>Traçabilité précise de l'<strong>heure des symptômes</strong> et de chaque action.</li>
<li>Anticipation de la filière (cardiologie interventionnelle, UNV) et préparation du matériel.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>FAST</strong> pour l'AVC. Pour le SCA : « <strong>MONA</strong> » historique (Morphine, Oxygène si besoin, Nitrés, Antiagrégant/Aspirine) reste un repère des classes mobilisées, toujours sur prescription et après ECG.</div>`,
    refs: ["Référentiel IFSI 2009 – UE 2.7 Défaillances organiques et processus dégénératifs", "HAS – Accident vasculaire cérébral : prise en charge précoce", "Recommandations ESC syndrome coronarien aigu"] },

  { id: "fx_patho_plus_sepsis_qsofa", ueId: "2.7", type: "cours",
    titre: "Sepsis et choc septique : repérage précoce et bundle de la 1ère heure",
    resume: "Du repérage clinique au paquet de soins de la première heure, le rôle clé de l'IDE.",
    tags: ["sepsis", "qSOFA", "lactate", "choc"],
    html: `<p>Le <span class="key" data-term="sepsis">sepsis</span> est une dysfonction d'organe potentiellement mortelle due à une réponse dérégulée de l'organisme à une infection. Le <span class="key" data-term="choc septique">choc septique</span> en est la forme la plus grave, avec hypotension persistante et hypoperfusion tissulaire. Le repérage précoce conditionne le pronostic.</p>
<h3>Le score qSOFA (repérage au lit du patient)</h3>
<p>Le <span class="key" data-term="qSOFA">qSOFA</span> alerte sur un risque d'aggravation chez un patient infecté. Il comporte trois critères :</p>
<table class="tbl">
<tr><th>Critère</th><th>Seuil</th></tr>
<tr><td>Fréquence respiratoire</td><td>&ge; 22/min</td></tr>
<tr><td>Pression artérielle systolique</td><td>&le; 100 mmHg</td></tr>
<tr><td>Confusion / altération de la conscience</td><td>présente (Glasgow &lt; 15)</td></tr>
</table>
<p>Au moins <strong>2 critères sur 3</strong> doivent faire suspecter un sepsis et alerter le médecin sans délai.</p>
<div class="callout"><div class="callout-t">Le bundle de la 1ère heure</div>Sur prescription/protocole, le paquet de soins associe : mesure du <span class="key" data-term="lactate">lactate</span>, <strong>hémocultures avant antibiotiques</strong>, antibiothérapie large précoce, remplissage vasculaire en cas d'hypotension ou de lactate élevé, et recours aux vasopresseurs si l'hypotension persiste malgré le remplissage. L'IDE prépare et trace chaque étape.</div>
<h3>Surveillance infirmière</h3>
<ul>
<li>Paramètres vitaux rapprochés : PA, FC, FR, SpO2, température, conscience.</li>
<li><strong>Diurèse horaire</strong> (marqueur de perfusion rénale) et surveillance du remplissage.</li>
<li>Marbrures, temps de recoloration cutanée, extrémités froides : signes d'hypoperfusion.</li>
<li>Respect du <strong>délai d'administration des antibiotiques</strong> et traçabilité des hémocultures.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>qSOFA = <strong>« 22 – 100 – Confus »</strong> : FR &ge; 22, PAS &le; 100, confusion. Deux cases cochées = on s'inquiète. Et on retient : <strong>hémocultures AVANT les antibiotiques</strong>, jamais l'inverse.</div>`,
    refs: ["Référentiel IFSI 2009 – UE 2.7", "Surviving Sepsis Campaign – Hour-1 Bundle", "SFAR/SRLF – Sepsis et choc septique"] },

  { id: "fx_patho_plus_diabete_bpco", ueId: "2.7", type: "cours",
    titre: "Diabète et BPCO : décompensations aiguës et éducation",
    resume: "Hypoglycémie, acidocétose et exacerbation de BPCO : reconnaître et agir.",
    tags: ["diabète", "BPCO", "hypoglycémie", "acidocétose"],
    html: `<p>Le <span class="key" data-term="diabète">diabète</span> et la <span class="key" data-term="BPCO">BPCO</span> sont des maladies chroniques dont les décompensations aiguës menacent le pronostic vital. L'IDE joue un rôle majeur dans le repérage et l'éducation thérapeutique.</p>
<h3>Diabète : reconnaître les deux extrêmes</h3>
<table class="tbl">
<tr><th></th><th>Hypoglycémie</th><th>Acidocétose diabétique</th></tr>
<tr><td>Mécanisme</td><td>Glycémie trop basse (excès d'insuline, repas sauté, effort)</td><td>Carence en insuline (DT1 ++), production de corps cétoniques</td></tr>
<tr><td>Signes</td><td>Sueurs, tremblements, fringale, troubles du comportement, malaise, coma</td><td>Soif, polyurie, douleurs abdominales, dyspnée ample, haleine cétonique, déshydratation</td></tr>
<tr><td>Conduite IDE</td><td>Si conscient : <span class="key" data-term="resucrage">resucrage</span> oral (sucre rapide puis lent) ; si inconscient : voie veineuse/glucagon sur protocole, jamais de boisson</td><td>Glycémie + cétonémie/cétonurie, alerte, voie veineuse, réhydratation et insuline sur prescription, surveillance kaliémie</td></tr>
</table>
<div class="callout"><div class="callout-t">Règle du resucrage</div>Devant un malaise hypoglycémique chez un patient <strong>conscient et capable de déglutir</strong>, on resucre par voie orale (sucre rapide), puis on apporte un sucre lent pour éviter la récidive, et on recontrôle la glycémie. Un patient <strong>inconscient ne doit jamais être réalimenté par la bouche</strong> (risque de fausse route).</div>
<h3>BPCO : l'exacerbation</h3>
<ul>
<li>Majoration de la dyspnée, des expectorations (volume, purulence), toux accrue.</li>
<li>Risque de décompensation respiratoire avec hypercapnie : somnolence, sueurs, confusion (signes d'alarme).</li>
<li>Surveillance SpO2, FR, signes de lutte, gaz du sang sur prescription.</li>
</ul>
<div class="callout"><div class="callout-t">Oxygène chez le BPCO : prudence et objectif ciblé</div>Chez certains patients BPCO insuffisants respiratoires chroniques, une oxygénothérapie trop libérale peut aggraver l'<strong>hypercapnie</strong>. L'oxygène est titré selon un <strong>objectif de SpO2 prescrit</strong> (souvent modéré, autour de 88–92 %), et toute somnolence inhabituelle doit alerter. L'oxygène reste un médicament : il se prescrit et se surveille.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Hypo = <strong>« sueurs et tremblements, ça va vite »</strong> (resucrer). Acidocétose = <strong>« soif, pipi, ventre, haleine de pomme »</strong>. BPCO en crise : on n'ouvre pas l'O2 à fond, on vise la cible de SpO2.</div>`,
    refs: ["Référentiel IFSI 2009 – UE 2.7", "HAS – Diabète de type 2 et de type 1", "GOLD – Prise en charge de la BPCO", "SPLF – Exacerbations de BPCO"] },
];

export const qcm = [
  { ueId: "2.7", q: "Devant une suspicion de syndrome coronarien aigu (SCA), quel examen doit être réalisé en priorité et dans un délai très court ?", options: ["Une radiographie thoracique", "Un ECG (idéalement en moins de 10 minutes)", "Un dosage isolé du cholestérol", "Une échographie abdominale"], correct: 1,
    explication: "L'ECG est l'examen clé du SCA : il doit être réalisé très rapidement (objectif < 10 min) car il oriente vers un STEMI nécessitant une reperfusion urgente. Il est interprété par le médecin mais réalisé sans délai par l'IDE.", ref: "Recommandations ESC SCA", diff: 1 },

  { ueId: "2.7", q: "Le test FAST utilisé pour repérer un AVC explore notamment :", options: ["La fièvre, l'agitation, la soif et le temps", "Le visage, le bras, la parole et le temps écoulé", "La fréquence cardiaque, l'amplitude, la saturation, la tension", "La force, l'appétit, le sommeil et la température"], correct: 1,
    explication: "FAST = Face (asymétrie du visage), Arm (déficit d'un bras), Speech (troubles de la parole), Time (noter l'heure de début et alerter sans délai). C'est un outil simple de repérage rapide d'un AVC.", ref: "HAS – AVC prise en charge précoce", diff: 1 },

  { ueId: "2.7", q: "Pourquoi l'heure de début des symptômes est-elle capitale en cas d'AVC ?", options: ["Pour calculer la posologie des antalgiques", "Parce qu'elle conditionne l'éligibilité à la thrombolyse/thrombectomie", "Parce qu'elle détermine le régime alimentaire", "Elle n'a aucune importance clinique"], correct: 1,
    explication: "Les traitements de reperfusion (thrombolyse, thrombectomie) ne sont possibles que dans une fenêtre de temps limitée après le début des symptômes. Tracer l'heure de début est donc essentiel : « time is brain ».", ref: "HAS – AVC", diff: 2 },

  { ueId: "2.7", q: "Chez un patient présentant un déficit neurologique brutal, quel geste simple permet d'éliminer un diagnostic différentiel fréquent ?", options: ["Une prise de température", "Une glycémie capillaire", "Un dosage de la CRP", "Une mesure du périmètre crânien"], correct: 1,
    explication: "Une hypoglycémie peut mimer un AVC (déficit, troubles de conscience). La glycémie capillaire est systématique et immédiate devant tout déficit neurologique brutal.", ref: "HAS – AVC", diff: 1 },

  { ueId: "2.7", q: "En cas de suspicion d'AVC, concernant l'alimentation du patient, l'attitude IDE correcte est :", options: ["Faire boire abondamment pour hydrater", "Maintenir à jeun tant que la déglutition n'est pas évaluée", "Donner un repas sucré systématiquement", "Aucune précaution particulière"], correct: 1,
    explication: "L'AVC peut s'accompagner de troubles de la déglutition exposant à la fausse route et à la pneumopathie d'inhalation. On maintient le patient à jeun jusqu'à évaluation de la déglutition.", ref: "HAS – AVC", diff: 2 },

  { ueId: "2.7", q: "Le score qSOFA, utilisé pour repérer un sepsis, comporte les critères suivants :", options: ["FR ≥ 22/min, PAS ≤ 100 mmHg, confusion", "FC ≥ 120, fièvre ≥ 39°C, oligurie", "SpO2 < 90 %, douleur, vomissements", "Glycémie > 2 g/L, HTA, céphalées"], correct: 0,
    explication: "Le qSOFA comporte 3 critères : fréquence respiratoire ≥ 22/min, pression artérielle systolique ≤ 100 mmHg, et altération de la conscience (confusion). Au moins 2 critères font suspecter un sepsis.", ref: "Surviving Sepsis Campaign", diff: 2 },

  { ueId: "2.7", q: "Combien de critères du qSOFA doivent être présents pour faire suspecter un sepsis ?", options: ["1 sur 3", "Au moins 2 sur 3", "Les 3 obligatoirement", "Aucun, il s'agit d'un score biologique"], correct: 1,
    explication: "La présence d'au moins 2 critères sur 3 du qSOFA chez un patient infecté doit faire suspecter un sepsis et conduire à une alerte médicale rapide.", ref: "Surviving Sepsis Campaign", diff: 2 },

  { ueId: "2.7", q: "Dans la prise en charge précoce du sepsis, à quel moment les hémocultures doivent-elles idéalement être prélevées ?", options: ["Après plusieurs heures d'antibiotiques", "Avant l'administration des antibiotiques", "Uniquement si la fièvre dépasse 40°C", "Elles sont inutiles en cas de sepsis"], correct: 1,
    explication: "Les hémocultures doivent être prélevées avant l'antibiothérapie (sans toutefois la retarder), afin d'identifier le germe et d'adapter le traitement. C'est un point clé tracé par l'IDE.", ref: "Surviving Sepsis Campaign – Hour-1 Bundle", diff: 1 },

  { ueId: "2.7", q: "Dans le sepsis, quel marqueur biologique reflète l'hypoperfusion tissulaire et fait partie du paquet de soins initial ?", options: ["Le taux de plaquettes", "Le lactate (lactatémie)", "La bilirubine", "Le taux de prothrombine"], correct: 1,
    explication: "Un lactate élevé témoigne d'une hypoperfusion tissulaire et d'une souffrance cellulaire. Sa mesure fait partie du bundle initial et guide le remplissage vasculaire.", ref: "Surviving Sepsis Campaign", diff: 2 },

  { ueId: "2.7", q: "Quel signe clinique de surveillance reflète le mieux la perfusion des organes dans le choc septique ?", options: ["La couleur des urines", "La diurèse horaire", "Le poids hebdomadaire", "La température cutanée des oreilles"], correct: 1,
    explication: "La diurèse horaire est un excellent reflet de la perfusion rénale et tissulaire. Une oligurie signe une hypoperfusion et doit alerter. La surveillance des marbrures et du temps de recoloration complète l'évaluation.", ref: "SRLF – Choc septique", diff: 2 },

  { ueId: "2.7", q: "Devant un malaise hypoglycémique chez un patient diabétique conscient et capable de déglutir, la conduite à tenir est :", options: ["Injecter de l'insuline rapide", "Resucrer par voie orale (sucre rapide) puis apporter un sucre lent", "Le faire marcher pour le réveiller", "Attendre la prochaine glycémie programmée"], correct: 1,
    explication: "Chez un patient conscient, on resucre par voie orale avec un sucre rapide, puis un sucre lent pour éviter la récidive, et on recontrôle la glycémie. L'insuline aggraverait l'hypoglycémie.", ref: "HAS – Diabète", diff: 1 },

  { ueId: "2.7", q: "Pourquoi ne doit-on jamais resucrer par voie orale un patient hypoglycémique inconscient ?", options: ["Parce que le sucre est inefficace dans ce cas", "À cause du risque de fausse route et d'inhalation", "Parce qu'il faut attendre le médecin", "Parce que cela fausse la glycémie"], correct: 1,
    explication: "Un patient inconscient ne peut pas protéger ses voies aériennes : l'apport oral expose à la fausse route. On utilise alors la voie veineuse (glucosé) ou le glucagon sur protocole.", ref: "HAS – Diabète", diff: 1 },

  { ueId: "2.7", q: "Quels signes évoquent une acidocétose diabétique ?", options: ["Hypothermie, bradycardie et constipation", "Soif, polyurie, douleurs abdominales, dyspnée ample et haleine cétonique", "Prise de poids rapide et œdèmes", "Hypertension isolée et bouffées de chaleur"], correct: 1,
    explication: "L'acidocétose associe déshydratation (soif, polyurie), douleurs abdominales, dyspnée ample (respiration de Kussmaul) et haleine cétonique (odeur de pomme). Elle relève de l'urgence : réhydratation et insuline sur prescription.", ref: "HAS – Diabète de type 1", diff: 2 },

  { ueId: "2.7", q: "Concernant l'oxygénothérapie chez un patient BPCO insuffisant respiratoire chronique :", options: ["Il faut toujours administrer le débit maximal d'oxygène", "L'oxygène est titré selon un objectif de SpO2 prescrit, en surveillant le risque d'hypercapnie", "L'oxygène est contre-indiqué", "L'oxygène ne nécessite aucune surveillance"], correct: 1,
    explication: "Chez certains BPCO, un excès d'oxygène peut aggraver l'hypercapnie. L'oxygène est un médicament : il est titré selon une cible de SpO2 prescrite (souvent modérée), avec surveillance de la conscience.", ref: "GOLD – BPCO", diff: 2 },

  { ueId: "2.7", q: "Quels éléments caractérisent une exacerbation de BPCO ?", options: ["Diminution de la dyspnée et des expectorations", "Majoration de la dyspnée, du volume et/ou de la purulence des expectorations", "Apparition d'œdèmes des membres inférieurs uniquement", "Baisse isolée de la température"], correct: 1,
    explication: "L'exacerbation de BPCO se définit par l'aggravation de la dyspnée et/ou l'augmentation du volume ou de la purulence des expectorations. Une somnolence et une confusion doivent faire craindre l'hypercapnie.", ref: "SPLF – Exacerbations de BPCO", diff: 2 },

  { ueId: "2.7", q: "Quels signes doivent faire suspecter une embolie pulmonaire ?", options: ["Dyspnée et/ou douleur thoracique d'apparition brutale avec tachycardie et désaturation", "Céphalées chroniques et photophobie", "Constipation et ballonnements", "Prurit généralisé"], correct: 0,
    explication: "L'embolie pulmonaire associe typiquement une dyspnée et/ou une douleur thoracique brutales, une tachycardie, une désaturation, parfois des signes de phlébite. La prise en charge IDE : scope, O2, voie veineuse, anticoagulation sur prescription.", ref: "Recommandations ESC embolie pulmonaire", diff: 2 },

  { ueId: "2.7", q: "Quel facteur de risque thrombo-embolique veineux est ciblé par la prévention infirmière en post-opératoire ?", options: ["L'hyperhydratation", "L'immobilisation prolongée (alitement)", "La marche précoce", "Une alimentation riche en fibres"], correct: 1,
    explication: "L'immobilisation favorise la stase veineuse et donc la thrombose. La prévention associe lever et mobilisation précoces, bas de contention et anticoagulation préventive sur prescription.", ref: "Recommandations ESC – Maladie thrombo-embolique veineuse", diff: 1 },

  { ueId: "2.7", q: "Dans l'insuffisance cardiaque, quel paramètre de surveillance quotidien dépiste précocement la rétention hydrosodée ?", options: ["La température", "Le poids (à jeun, même heure, même balance)", "Le périmètre crânien", "La glycémie"], correct: 1,
    explication: "Une prise de poids rapide traduit une rétention hydrosodée et une décompensation de l'insuffisance cardiaque. Le poids quotidien standardisé est un pilier de la surveillance et de l'éducation.", ref: "ESC – Insuffisance cardiaque", diff: 1 },

  { ueId: "2.7", q: "Quelle complication métabolique de l'insuffisance rénale chronique constitue une urgence par son risque cardiaque ?", options: ["L'hypernatrémie", "L'hyperkaliémie", "L'hypocholestérolémie", "L'hypoglycémie"], correct: 1,
    explication: "L'hyperkaliémie expose à des troubles du rythme graves voire à l'arrêt cardiaque (ECG : ondes T amples et pointues, élargissement du QRS). Tout chiffre anormal doit être signalé sans délai.", ref: "HAS – Maladie rénale chronique", diff: 2 },

  { ueId: "2.7", q: "Concernant le bras porteur d'une fistule artério-veineuse d'hémodialyse, l'IDE doit :", options: ["Y prendre la tension et les prélèvements en priorité", "Éviter tension, prise de sang, perfusion et garrot de ce côté, et vérifier le thrill", "Le comprimer en permanence", "L'immobiliser en écharpe"], correct: 1,
    explication: "Le bras de fistule est un « bras sanctuaire » : pas de PA, ni ponction, ni perfusion, ni garrot. On vérifie le thrill (frémissement) pour s'assurer de sa perméabilité.", ref: "HAS – Maladie rénale chronique", diff: 1 },

  { ueId: "2.7", q: "Dans l'œdème aigu du poumon (OAP), quelle position installe-t-on en première intention en attendant le médecin ?", options: ["Décubitus dorsal strict", "Position assise, jambes pendantes", "Position latérale de sécurité", "Tête déclive (Trendelenburg)"], correct: 1,
    explication: "La position assise jambes pendantes diminue le retour veineux et soulage la détresse respiratoire de l'OAP. On associe oxygénothérapie, scope et alerte médicale, avec préparation des diurétiques et dérivés nitrés sur prescription.", ref: "ESC – Insuffisance cardiaque aiguë", diff: 2 },
];

export const flashcards = [
  { ueId: "2.7", recto: "Que signifie l'acronyme FAST (repérage AVC) ?", verso: "Face (asymétrie), Arm (déficit d'un bras), Speech (parole), Time (heure de début, alerter)." },
  { ueId: "2.7", recto: "Quel examen en moins de 10 min devant une douleur thoracique évoquant un SCA ?", verso: "Un ECG, réalisé sans délai puis interprété par le médecin." },
  { ueId: "2.7", recto: "Geste systématique devant tout déficit neurologique brutal ?", verso: "Une glycémie capillaire (une hypoglycémie peut mimer un AVC)." },
  { ueId: "2.7", recto: "Alimentation d'un patient suspect d'AVC ?", verso: "À jeun tant que la déglutition n'est pas évaluée (risque de fausse route)." },
  { ueId: "2.7", recto: "Les 3 critères du qSOFA ?", verso: "FR ≥ 22/min, PAS ≤ 100 mmHg, confusion. ≥ 2 critères = suspicion de sepsis." },
  { ueId: "2.7", recto: "Hémocultures dans le sepsis : avant ou après les antibiotiques ?", verso: "Avant l'antibiothérapie, sans la retarder." },
  { ueId: "2.7", recto: "Quel marqueur reflète l'hypoperfusion tissulaire dans le sepsis ?", verso: "Le lactate (lactatémie élevée)." },
  { ueId: "2.7", recto: "Conduite devant une hypoglycémie chez un patient conscient ?", verso: "Resucrage oral : sucre rapide puis sucre lent, et recontrôle de la glycémie." },
  { ueId: "2.7", recto: "Pourquoi ne pas resucrer par la bouche un patient inconscient ?", verso: "Risque de fausse route ; on utilise voie veineuse glucosée ou glucagon sur protocole." },
  { ueId: "2.7", recto: "Signes d'une acidocétose diabétique ?", verso: "Soif, polyurie, douleurs abdominales, dyspnée ample, haleine cétonique, déshydratation." },
  { ueId: "2.7", recto: "Oxygénothérapie chez le BPCO insuffisant respiratoire chronique ?", verso: "Titrée sur un objectif de SpO2 prescrit (cible modérée), surveiller l'hypercapnie." },
  { ueId: "2.7", recto: "Définition d'une exacerbation de BPCO ?", verso: "Majoration de la dyspnée et/ou augmentation du volume/purulence des expectorations." },
  { ueId: "2.7", recto: "Surveillance quotidienne clé dans l'insuffisance cardiaque ?", verso: "Le poids (à jeun, même heure, même balance) pour dépister la rétention hydrosodée." },
  { ueId: "2.7", recto: "Complication de l'IRC à risque d'arrêt cardiaque ?", verso: "L'hyperkaliémie (troubles du rythme, ECG : ondes T amples et pointues)." },
  { ueId: "2.7", recto: "Position d'installation en première intention dans l'OAP ?", verso: "Assise, jambes pendantes (diminue le retour veineux)." },
];
