export const fiches = [
  { id: "fco_5_5_raisonnement_clinique", ueId: "5.5", type: "cours",
    titre: "Raisonnement clinique et démarche de soins",
    resume: "Structurer la prise en charge à partir des problèmes/risques de santé du jour.",
    tags: ["d'après tes cours","raisonnement clinique"],
    html: `<p>Le <span class="key" data-term="raisonnement clinique">raisonnement clinique</span> consiste à recueillir les informations (transmissions, dossier), à identifier les <strong>problèmes de santé réels</strong> et les <strong>risques</strong> du jour, puis à poser des objectifs et des actions.</p>
<h3>Structure de la démarche de soins</h3>
<table class="tbl"><tr><th>Étape</th><th>Contenu</th></tr>
<tr><td>Problèmes / risques</td><td>Problème réel (douleur, anémie) ou risque (chute, syndrome des loges)</td></tr>
<tr><td>Argumentation</td><td>Données objectives qui justifient le problème (EVA 7/10, Hb 8 g/L)</td></tr>
<tr><td>Objectif</td><td>Résultat attendu, mesurable (réduire la douleur)</td></tr>
<tr><td>Actions</td><td>Distinguer rôle propre et rôle prescrit</td></tr>
<tr><td>Résultats</td><td>Évaluation de l'efficacité des actions</td></tr></table>
<h3>Rôle propre vs rôle prescrit</h3>
<ul><li><strong>Rôle propre</strong> : actions autonomes de l'IDE (évaluation de la douleur, surveillances, écoute active, prévention d'escarre).</li>
<li><strong>Rôle prescrit</strong> : actions sur prescription médicale (administration des médicaments, transfusion, pansement selon protocole).</li></ul>
<div class="callout"><div class="callout-t">À retenir</div>Une argumentation doit toujours s'appuyer sur des données objectives observées chez le patient, pas sur une supposition.</div>`,
    refs: ["D'après tes cours (UE 5.5)"] },

  { id: "fco_5_5_evaluation_douleur", ueId: "5.5", type: "cours",
    titre: "Évaluation et prise en charge de la douleur",
    resume: "Évaluer la douleur (TILT, EVA) et adapter les antalgiques selon les paliers OMS.",
    tags: ["d'après tes cours","douleur"],
    html: `<p>La douleur s'évalue avec une échelle (<span class="key" data-term="EVA">EVA</span> : échelle visuelle analogique) et de manière qualitative avec le <span class="key" data-term="TILT">TILT</span>.</p>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>TILT</strong> = <strong>T</strong>emporalité, <strong>I</strong>ntensité, <strong>L</strong>ocalisation, <strong>T</strong>ype de douleur.</div>
<h3>Paliers antalgiques de l'OMS</h3>
<table class="tbl"><tr><th>Palier</th><th>Type</th><th>Exemples (DCI)</th></tr>
<tr><td>I</td><td>Non opioïdes</td><td>Paracétamol, AINS</td></tr>
<tr><td>II</td><td>Opioïdes faibles</td><td>Tramadol, codéine</td></tr>
<tr><td>III</td><td>Opioïdes forts</td><td>Morphine, oxycodone, fentanyl</td></tr></table>
<h3>Antalgiques rencontrés en stage</h3>
<ul><li>Doliprane / Dafalgan (paracétamol) : palier I.</li>
<li>Tramadol : palier II.</li>
<li>Actiskénan (morphinique) : palier III, donné 30 min avant un soin douloureux.</li></ul>
<div class="callout"><div class="callout-t">À retenir</div>Si la douleur reste élevée malgré un antalgique de palier inférieur, on passe au palier supérieur. On anticipe les soins douloureux par un antalgique préventif.</div>`,
    refs: ["D'après tes cours (UE 5.5)"] },

  { id: "fco_5_5_planification_soins", ueId: "5.5", type: "cours",
    titre: "Planification des soins sur un secteur",
    resume: "Organiser sa journée de travail en programmant les soins selon les horaires et priorités.",
    tags: ["d'après tes cours","planification"],
    html: `<p>La <span class="key" data-term="planification">planification des soins</span> consiste à répartir, sur son temps de travail (ex. 6h-13h30), l'ensemble des soins à réaliser pour ses patients en respectant horaires de traitements, contraintes médicales et collaboration pluriprofessionnelle.</p>
<h3>Éléments à intégrer</h3>
<ul><li>Horaires fixes des prescriptions (anticoagulant à 8h, glycémie + insuline avant les repas, ATB selon rythme).</li>
<li>Soins à anticiper (antalgique avant pansement, prémédication).</li>
<li>Collaboration : AS (toilette, constantes, repas), IDE, kiné, médecin.</li>
<li>Examens / actes programmés : transfusion, visite médecin, RDV kiné.</li>
<li>Transmissions écrites et orales (relève d'équipe).</li></ul>
<h3>Exemple de trame horaire</h3>
<table class="tbl"><tr><th>Heure</th><th>Soin type</th></tr>
<tr><td>6h30</td><td>Évaluation douleur (TILT), thymie, constantes</td></tr>
<tr><td>7h30</td><td>Distribution des médicaments du matin</td></tr>
<tr><td>8h</td><td>Glycémie + insuline, injection SC anticoagulant</td></tr>
<tr><td>8h30</td><td>Toilette, bas de contention, lever au fauteuil</td></tr>
<tr><td>9h30</td><td>Transfusion, visite médecin</td></tr>
<tr><td>12h</td><td>Aide au repas, réévaluation douleur</td></tr>
<tr><td>13h</td><td>Transmissions équipe après-midi</td></tr></table>
<div class="callout"><div class="callout-t">À retenir</div>On planifie d'abord les soins « contraints » dans le temps (insuline, anticoagulant, transfusion), puis on organise le reste autour.</div>`,
    refs: ["D'après tes cours (UE 5.5)"] },

  { id: "fco_5_5_surveillances_risques", ueId: "5.5", type: "cours",
    titre: "Surveillances des risques en post-traumatique et post-opératoire",
    resume: "Reconnaître et surveiller les risques majeurs : syndrome des loges, thromboembolie, escarre, chute.",
    tags: ["d'après tes cours","surveillance"],
    html: `<h3>Syndrome des loges (sous plâtre)</h3>
<p>Risque après fracture et pose de plâtre. Signes à surveiller : <strong>œdème, douleur intense, fourmillements des extrémités, modification de la coloration</strong>. Expliquer au patient de signaler toute douleur ou gonflement.</p>
<h3>Risque thromboembolique</h3>
<ul><li>Favorisé par l'immobilisation / appui non autorisé.</li>
<li>Prévention : injection SC d'anticoagulant (HBPM type Innohep), bas de contention.</li>
<li>Surveiller un signe d'hémorragie et l'état du mollet.</li></ul>
<h3>Risque d'escarre</h3>
<p>Prévention chez le patient alité : changements de position, effleurages, installation, surveillance des points d'appui.</p>
<h3>Risque de chute</h3>
<ul><li>Facteurs : asthénie majeure, désorientation, mobilité réduite.</li>
<li>Actions : désencombrer la chambre, sonnette à proximité, expliquer de ne pas se lever seul, passages réguliers.</li></ul>
<div class="callout"><div class="callout-t">À retenir</div>Devant un plâtre récent, toute douleur qui augmente ou des fourmillements doivent faire évoquer un syndrome des loges (urgence).</div>`,
    refs: ["D'après tes cours (UE 5.5)"] },

  { id: "fco_5_5_anticoagulants_avk", ueId: "5.5", type: "cours",
    titre: "Anticoagulants : héparines, HBPM et AVK",
    resume: "Connaître les surveillances biologiques et effets indésirables des anticoagulants.",
    tags: ["d'après tes cours","pharmacologie"],
    html: `<h3>Surveillances biologiques</h3>
<table class="tbl"><tr><th>Traitement</th><th>Efficacité</th><th>Tolérance</th></tr>
<tr><td>Héparine calcique (Calciparine)</td><td><span class="key" data-term="TCA">TCA</span> (prélevé entre 2 injections)</td><td>NFS, plaquettes</td></tr>
<tr><td>HBPM (ex. Innohep)</td><td>Pas de surveillance d'efficacité de routine</td><td>NFS, plaquettes, créatinine</td></tr>
<tr><td>AVK</td><td><span class="key" data-term="INR">INR</span></td><td>NFS</td></tr>
<tr><td>AOD (Xarelto, Pradaxa)</td><td>Aucune surveillance biologique d'efficacité</td><td>—</td></tr></table>
<h3>Effets indésirables des héparines</h3>
<ul><li>Saignements : gingivorragie, épistaxis, hématome.</li>
<li><strong>Thrombopénie</strong> (TIH) : surveiller les plaquettes.</li>
<li>Anémie en cas de saignement.</li></ul>
<h3>AVK et vitamine K</h3>
<p>Délai d'efficacité de l'AVK : <strong>48 à 72h</strong>. Aliments riches en vitamine K à consommer avec modération : choux, laitue, épinards, persil, foie et abats.</p>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>AVK → INR</strong> ; <strong>Héparine non fractionnée → TCA</strong> ; <strong>HBPM → plaquettes + créatinine</strong>.</div>`,
    refs: ["D'après tes cours (UE 5.5)"] },

  { id: "fco_5_5_anesthesie_classes", ueId: "5.5", type: "cours",
    titre: "Anesthésie et grandes classes pharmacologiques",
    resume: "Composantes de l'anesthésie générale et propriétés des principales classes médicamenteuses.",
    tags: ["d'après tes cours","pharmacologie"],
    html: `<h3>Anesthésie générale</h3>
<p>Obtenue par association de : <strong>hypnotiques + morphiniques + curares</strong>.</p>
<ul><li><strong>Hypnotiques</strong> : sédation profonde et rapide ; risque de dépression respiratoire et d'hypotension.</li>
<li><strong>Morphiniques</strong> : analgésie ; surveiller dépression respiratoire, rétention urinaire, nausées/vomissements.</li>
<li><strong>Curares</strong> : relâchement musculaire nécessaire à l'intubation, la ventilation et l'acte chirurgical.</li>
<li><span class="key" data-term="MEOPA">MEOPA</span> (protoxyde d'azote + O2) : antalgie, anxiolyse, amnésie.</li></ul>
<h3>AINS et AIS</h3>
<ul><li><strong>AINS</strong> : anti-inflammatoire, antalgique, antipyrétique, antiagrégant plaquettaire.</li>
<li><strong>AIS</strong> (anti-inflammatoires stéroïdiens = corticoïdes) : anti-inflammatoire, immunodépresseur, antiallergique. Ne jamais arrêter brutalement un corticoïde au long cours (risque d'insuffisance surrénale) : décroissance progressive. Voie inhalée : candidose oropharyngée, voix rauque.</li></ul>
<h3>Catécholamines (Adrénaline, Noradrénaline, Dopamine)</h3>
<p>Augmentent la vasoconstriction périphérique. Risques : HTA, tachycardie, arythmie, angor/ischémie.</p>
<div class="callout"><div class="callout-t">À retenir</div>L'anesthésie générale repose sur le triptyque hypnotique + analgésique (morphinique) + curare.</div>`,
    refs: ["D'après tes cours (UE 5.5)"] },

  { id: "fco_5_5_insulines_diabete", ueId: "5.5", type: "cours",
    titre: "Insulines et surveillance du diabète",
    resume: "Types d'insulines, durées d'action et surveillance de l'hypoglycémie.",
    tags: ["d'après tes cours","diabète"],
    html: `<h3>Types d'insuline et durée d'action</h3>
<table class="tbl"><tr><th>Type</th><th>Durée d'efficacité</th></tr>
<tr><td>Action rapide</td><td>4 h</td></tr>
<tr><td>Intermédiaire (NPH)</td><td>12 h</td></tr>
<tr><td>Mélange analogue rapide + NPH (Prémix)</td><td>12 h</td></tr>
<tr><td>Lente / basale</td><td>24 h</td></tr></table>
<p>Pour une insuline <strong>Prémix</strong> (ex. Humalog Mix 25), le chiffre après « MIX » indique le <strong>pourcentage d'analogue rapide</strong> dans le mélange (25 % rapide, 75 % NPH).</p>
<h3>Surveillance</h3>
<ul><li>Glycémie capillaire avant chaque repas, insuline selon protocole.</li>
<li>Surveiller les signes d'<span class="key" data-term="hypoglycémie">hypoglycémie</span> : tremblements, vision trouble, sueurs, pâleur.</li></ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Hypo = <strong>« 4 S »</strong> : Sueurs, Secousses (tremblements), Sensation de faim, Sens troublés (vision).</div>`,
    refs: ["D'après tes cours (UE 5.5)"] },

  { id: "fco_5_5_antibio_psychotropes", ueId: "5.5", type: "cours",
    titre: "Antibiotiques, antihypertenseurs et psychotropes",
    resume: "Propriétés et règles d'administration des principales familles thérapeutiques.",
    tags: ["d'après tes cours","pharmacologie"],
    html: `<h3>Antibiotiques</h3>
<ul><li>Propriétés : <strong>bactéricides</strong> ou <strong>bactériostatiques</strong>.</li>
<li><span class="key" data-term="antibioprophylaxie">Antibioprophylaxie</span> = ATB en prévention d'un risque infectieux.</li>
<li>Bêta-lactamines (Amoxicilline, Augmentin) : risque allergique, troubles digestifs ; ne jamais arrêter avant la fin prescrite.</li>
<li>Aminosides : néphrotoxiques et ototoxiques.</li>
<li>Voie IV : respecter dilutions, rincer/changer la tubulure entre 2 ATB, vérifier l'absence d'allergie.</li></ul>
<h3>Antihypertenseurs et diurétiques</h3>
<ul><li>Familles de l'HTA : diurétiques thiazidiques, IEC, ARA II, inhibiteurs calciques, bêta-bloquants.</li>
<li>IEC : effet secondaire fréquent = <strong>toux</strong>.</li>
<li>Bêta-bloquants : bradycardie, asthénie, hypotension.</li>
<li>Lasilix (furosémide) : diurétique de l'anse ; à l'instauration surveiller ionogramme, diurèse, PA.</li>
<li>Aldactone (spironolactone) : épargneur de potassium, risque d'<strong>hyperkaliémie</strong>.</li></ul>
<h3>Psychotropes</h3>
<ul><li>Anxiolytiques (ex. Lexomyl) : somnolence, dépendance ; arrêt par décroissance progressive.</li>
<li>Neuroleptiques : surveiller le <strong>syndrome malin</strong> (hyperthermie, rigidité musculaire, sueurs).</li>
<li>Antidépresseurs : délai d'action de 2 à 3 semaines.</li></ul>
<div class="callout"><div class="callout-t">À retenir</div>En IV, on ne mélange jamais 2 antibiotiques dans la même tubulure sans rinçage ; on vérifie toujours l'absence d'allergie.</div>`,
    refs: ["D'après tes cours (UE 5.5)"] },
];

export const qcm = [
  { ueId: "5.5", q: "Que signifie l'acronyme TILT pour évaluer une douleur ?", options: ["Temps, Intensité, Lieu, Traitement","Temporalité, Intensité, Localisation, Type","Toux, Inflammation, Lésion, Température","Trouble, Irritation, Localisation, Tonus"], correct: 1,
    explication: "TILT = Temporalité, Intensité, Localisation, Type de la douleur.", ref: "UE 5.5", diff: 1 },
  { ueId: "5.5", q: "Le tramadol appartient à quel palier OMS ?", options: ["Palier I","Palier II","Palier III","Aucun"], correct: 1,
    explication: "Le tramadol est un opioïde faible : palier II.", ref: "UE 5.5", diff: 1 },
  { ueId: "5.5", q: "Quels médicaments correspondent au palier III de l'OMS ?", options: ["Paracétamol, AINS","Tramadol, codéine","Oxycodone, fentanyl, morphine","Aspirine, ibuprofène"], correct: 2,
    explication: "Le palier III regroupe les opioïdes forts : morphine, oxycodone, fentanyl.", ref: "UE 5.5", diff: 1 },
  { ueId: "5.5", q: "Quels sont les signes du syndrome des loges sous plâtre ?", options: ["Fièvre et frissons","Œdème, douleur, fourmillements, modification de coloration","Toux et dyspnée","Constipation et nausées"], correct: 1,
    explication: "Le syndrome des loges se manifeste par œdème, douleur intense, fourmillements et trouble de la coloration des extrémités.", ref: "UE 5.5", diff: 2 },
  { ueId: "5.5", q: "Quelle surveillance biologique contrôle l'efficacité d'un traitement par AVK ?", options: ["TCA","INR","Plaquettes","NFS"], correct: 1,
    explication: "L'efficacité des AVK se surveille par l'INR.", ref: "UE 5.5", diff: 1 },
  { ueId: "5.5", q: "Quelle surveillance d'efficacité correspond à l'héparine calcique (Calciparine) ?", options: ["INR","TCA","Créatinine","Aucun"], correct: 1,
    explication: "L'héparine non fractionnée (calcique) se surveille par le TCA.", ref: "UE 5.5", diff: 2 },
  { ueId: "5.5", q: "Un AVK est efficace combien de temps après son instauration ?", options: ["2 h","6 à 12 h","24 à 48 h","48 à 72 h"], correct: 3,
    explication: "Le délai d'efficacité d'un AVK est de 48 à 72h.", ref: "UE 5.5", diff: 2 },
  { ueId: "5.5", q: "Quel effet indésirable biologique majeur faut-il surveiller sous héparine ?", options: ["Hypernatrémie","Thrombopénie","Polyglobulie","Neutropénie"], correct: 1,
    explication: "Les héparines exposent à la thrombopénie induite (TIH) : surveiller les plaquettes.", ref: "UE 5.5", diff: 2 },
  { ueId: "5.5", q: "L'anesthésie générale est obtenue par l'association de :", options: ["AINS, anxiolytiques, anticoagulants","Hypnotiques, morphiniques, curares","Antibiotiques, diurétiques, IEC","Catécholamines, AVK, corticoïdes"], correct: 1,
    explication: "L'anesthésie générale associe hypnotiques, morphiniques (analgésie) et curares (relâchement musculaire).", ref: "UE 5.5", diff: 1 },
  { ueId: "5.5", q: "Quel est l'objectif de l'utilisation des curares en anesthésie ?", options: ["Procurer une analgésie","Réduire les saignements","Provoquer le relâchement musculaire pour l'intubation","Maintenir la température"], correct: 2,
    explication: "Les curares assurent le relâchement musculaire nécessaire à l'intubation, la ventilation et la chirurgie.", ref: "UE 5.5", diff: 1 },
  { ueId: "5.5", q: "Quels sont les effets du MEOPA (protoxyde d'azote + O2) ?", options: ["Bactéricide et antipyrétique","Antalgie, anxiolyse, amnésie","Vasoconstriction et HTA","Anticoagulant et antiagrégant"], correct: 1,
    explication: "Le MEOPA a des effets antalgiques, anxiolytiques (relaxation) et amnésiants.", ref: "UE 5.5", diff: 2 },
  { ueId: "5.5", q: "Quelle insuline a une durée d'action d'environ 24 h ?", options: ["Insuline rapide","Insuline NPH intermédiaire","Insuline lente / basale","Insuline Prémix"], correct: 2,
    explication: "L'insuline lente dite basale agit environ 24h.", ref: "UE 5.5", diff: 1 },
  { ueId: "5.5", q: "Pour une insuline Prémix « MIX 25 », que signifie le chiffre 25 ?", options: ["25 UI par injection","25 % d'analogue rapide dans le mélange","25 minutes de délai d'action","25 % de NPH"], correct: 1,
    explication: "Le chiffre après MIX indique le pourcentage d'analogue rapide (25 % rapide, 75 % NPH).", ref: "UE 5.5", diff: 2 },
  { ueId: "5.5", q: "Quels sont des signes d'hypoglycémie à surveiller ?", options: ["Polyurie et soif","Tremblements, vision trouble, sueurs, pâleur","Fièvre et toux","Constipation et nausées"], correct: 1,
    explication: "L'hypoglycémie se manifeste par tremblements, vision trouble, sueurs et pâleur.", ref: "UE 5.5", diff: 1 },
  { ueId: "5.5", q: "Quel effet secondaire est typiquement associé aux IEC ?", options: ["Bradycardie","Toux","Hyperkaliémie","Constipation"], correct: 1,
    explication: "La toux sèche est un effet indésirable fréquent et caractéristique des IEC.", ref: "UE 5.5", diff: 2 },
  { ueId: "5.5", q: "Le Lasilix (furosémide) est un diurétique :", options: ["Épargneur de potassium","Thiazidique","De l'anse","Osmotique"], correct: 2,
    explication: "Le furosémide est un diurétique de l'anse (le Lasilix n'est pas épargneur de potassium).", ref: "UE 5.5", diff: 2 },
  { ueId: "5.5", q: "Quel est le risque majeur de l'Aldactone (spironolactone) ?", options: ["Hypokaliémie","Hyperkaliémie","Hypernatrémie","Hyperglycémie"], correct: 1,
    explication: "La spironolactone est épargneur de potassium : le risque majeur est l'hyperkaliémie.", ref: "UE 5.5", diff: 2 },
  { ueId: "5.5", q: "Quelle est la règle d'administration de 2 antibiotiques par voie IV ?", options: ["Les mélanger dans la même seringue","Rincer / changer la tubulure entre chaque antibiotique","Les administrer sans vérifier les allergies","Préparer tous les ATB de la journée à l'avance"], correct: 1,
    explication: "Il faut rincer ou changer la tubulure entre deux ATB, respecter les dilutions et vérifier l'absence d'allergie.", ref: "UE 5.5", diff: 2 },
  { ueId: "5.5", q: "Comment se traduit le syndrome malin des neuroleptiques ?", options: ["Hypothermie et hypotonie","Hyperthermie, rigidité musculaire, hypersudation","Bradycardie et somnolence","Diarrhée et perte de poids"], correct: 1,
    explication: "Le syndrome malin des neuroleptiques associe hyperthermie, rigidité musculaire et hypersudation.", ref: "UE 5.5", diff: 3 },
  { ueId: "5.5", q: "Dans quel délai apparaît la réponse à un traitement antidépresseur ?", options: ["3 jours","1 semaine","2 à 3 semaines","Immédiatement"], correct: 2,
    explication: "L'effet thérapeutique d'un antidépresseur apparaît dans un délai de 2 à 3 semaines.", ref: "UE 5.5", diff: 2 },
  { ueId: "5.5", q: "Une antibioprophylaxie correspond à :", options: ["Un ATB adapté après antibiogramme","Un ATB donné en prévention d'un risque infectieux","Un ATB probabiliste large spectre","Un ATB par voie IV uniquement"], correct: 1,
    explication: "L'antibioprophylaxie est l'administration d'un antibiotique en prévention d'un risque infectieux.", ref: "UE 5.5", diff: 1 },
  { ueId: "5.5", q: "Quelle action relève du rôle propre de l'infirmier(e) ?", options: ["Administrer une transfusion de CGR","Évaluer la douleur et surveiller le syndrome des loges","Prescrire le tramadol","Poser l'indication d'un pansement"], correct: 1,
    explication: "L'évaluation de la douleur et les surveillances relèvent du rôle propre ; la transfusion et la prescription sont du rôle prescrit.", ref: "UE 5.5", diff: 1 },
  { ueId: "5.5", q: "Quelle classe possède des propriétés anti-inflammatoire, antalgique, antipyrétique ET antiagrégant plaquettaire ?", options: ["Les corticoïdes (AIS)","Les AINS","Les antibiotiques","Les diurétiques"], correct: 1,
    explication: "Les AINS sont anti-inflammatoires, antalgiques, antipyrétiques et antiagrégants plaquettaires.", ref: "UE 5.5", diff: 2 },
  { ueId: "5.5", q: "Quel est le risque principal de l'arrêt brutal d'un corticoïde au long cours ?", options: ["Une crise hypertensive","Une insuffisance surrénale","Une hyperglycémie","Une thrombopénie"], correct: 1,
    explication: "L'arrêt brutal d'un corticoïde au long cours expose à une insuffisance surrénale : décroissance progressive nécessaire.", ref: "UE 5.5", diff: 3 },
];

export const flashcards = [
  { ueId: "5.5", recto: "Que signifie TILT ?", verso: "Temporalité, Intensité, Localisation, Type (évaluation de la douleur)." },
  { ueId: "5.5", recto: "Que signifie EVA ?", verso: "Échelle Visuelle Analogique pour évaluer l'intensité de la douleur." },
  { ueId: "5.5", recto: "Paliers OMS : exemples de molécules ?", verso: "I : paracétamol, AINS ; II : tramadol, codéine ; III : morphine, oxycodone, fentanyl." },
  { ueId: "5.5", recto: "Surveillance d'efficacité d'un AVK ?", verso: "L'INR." },
  { ueId: "5.5", recto: "Surveillance d'efficacité de l'héparine calcique (Calciparine) ?", verso: "Le TCA, prélevé entre deux injections." },
  { ueId: "5.5", recto: "Délai d'efficacité d'un AVK ?", verso: "48 à 72 heures après son instauration." },
  { ueId: "5.5", recto: "Effet indésirable biologique grave des héparines ?", verso: "La thrombopénie induite (surveiller les plaquettes)." },
  { ueId: "5.5", recto: "De quoi se compose une anesthésie générale ?", verso: "Hypnotiques + morphiniques + curares." },
  { ueId: "5.5", recto: "Rôle des curares en anesthésie ?", verso: "Relâchement musculaire pour l'intubation, la ventilation et l'acte chirurgical." },
  { ueId: "5.5", recto: "Effets du MEOPA ?", verso: "Antalgie, anxiolyse (relaxation) et amnésie." },
  { ueId: "5.5", recto: "Durées d'action des insulines ?", verso: "Rapide : 4h ; NPH : 12h ; Prémix : 12h ; lente/basale : 24h." },
  { ueId: "5.5", recto: "Signes d'une hypoglycémie ?", verso: "Tremblements, vision trouble, sueurs, pâleur (et sensation de faim)." },
  { ueId: "5.5", recto: "Effet secondaire caractéristique des IEC ?", verso: "La toux sèche." },
  { ueId: "5.5", recto: "Risque majeur de l'Aldactone (spironolactone) ?", verso: "L'hyperkaliémie (diurétique épargneur de potassium)." },
  { ueId: "5.5", recto: "Règle d'administration de 2 ATB en IV ?", verso: "Rincer/changer la tubulure entre les deux, respecter les dilutions, vérifier l'absence d'allergie." },
  { ueId: "5.5", recto: "Signes du syndrome malin des neuroleptiques ?", verso: "Hyperthermie, rigidité musculaire, hypersudation." },
  { ueId: "5.5", recto: "Délai d'action d'un antidépresseur ?", verso: "2 à 3 semaines." },
  { ueId: "5.5", recto: "Rôle propre vs rôle prescrit ?", verso: "Rôle propre = actions autonomes (surveillances, écoute) ; rôle prescrit = sur prescription médicale (médicaments, transfusion)." },
  { ueId: "5.5", recto: "Que signifie le chiffre après MIX dans une insuline Prémix ?", verso: "Le pourcentage d'analogue rapide dans le mélange (ex. MIX 25 = 25 % rapide)." },
  { ueId: "5.5", recto: "Prévention du risque thromboembolique chez un patient immobilisé ?", verso: "Anticoagulant SC (HBPM), bas de contention, surveillance d'hémorragie." },
];
