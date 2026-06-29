export const fiches = [
  { id: "f_4_5_qualite_gestion_risques", ueId: "4.5", type: "cours",
    titre: "Qualite des soins et gestion des risques : concepts cles",
    resume: "Definitions, demarche qualite et cadre reglementaire de la gestion des risques en etablissement de sante.",
    tags: ["qualite", "gestion des risques", "securite", "HAS"],
    html: `<h3>Definitions essentielles</h3>
<ul>
<li><span class="key" data-term="qualite">Qualite</span> : aptitude d'un ensemble de caracteristiques a satisfaire des exigences (securite, efficacite, accessibilite, continuite).</li>
<li><span class="key" data-term="risque">Risque</span> : combinaison de la probabilite de survenue d'un evenement indesirable et de sa gravite.</li>
<li><span class="key" data-term="gestion des risques">Gestion des risques</span> : demarche organisee visant a identifier, analyser, hierarchiser et reduire les risques.</li>
</ul>
<h3>Les deux approches de gestion des risques</h3>
<table class="tbl">
<tr><th>Approche</th><th>Principe</th><th>Exemple</th></tr>
<tr><td>A priori (proactive)</td><td>Anticiper le risque avant qu'il ne survienne</td><td>Cartographie des risques, AMDEC, check-list</td></tr>
<tr><td>A posteriori (reactive)</td><td>Analyser un evenement deja survenu pour eviter la recidive</td><td>RMM, CREX, declaration d'EI, analyse de causes</td></tr>
</table>
<h3>Cadre reglementaire et acteurs</h3>
<ul>
<li><strong>HAS</strong> : pilote la <span class="key" data-term="certification">certification</span> des etablissements de sante.</li>
<li><strong>Loi HPST (2009)</strong> : Hopital, Patients, Sante, Territoires ; renforce la securite et la qualite des soins.</li>
<li>Acteurs : <strong>gestionnaire de risques</strong>, <strong>CME</strong>, <strong>coordonnateur de la gestion des risques associes aux soins</strong>, <strong>CLIN/EOH</strong> pour le risque infectieux.</li>
</ul>
<div class="callout"><div class="callout-t">A retenir</div>La gestion des risques s'inscrit dans une logique d'amelioration continue : c'est l'affaire de tous les professionnels, pas seulement d'une cellule dediee.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnemo</div><strong>I-A-H-R</strong> : Identifier, Analyser, Hierarchiser, Reduire = les 4 temps de la gestion des risques.</div>`,
    refs: ["UE 4.5"] },

  { id: "f_4_5_evenements_indesirables", ueId: "4.5", type: "cours",
    titre: "Evenements indesirables et culture de securite",
    resume: "Typologie des evenements indesirables, declaration, analyse des causes et culture positive de l'erreur.",
    tags: ["EIG", "evenement indesirable", "declaration", "erreur"],
    html: `<h3>Typologie</h3>
<ul>
<li><span class="key" data-term="EIAS">EIAS</span> : evenement indesirable associe aux soins, c'est-a-dire qui s'ecarte des resultats escomptes et qui est ou serait source de dommage, survenu lors de la prise en charge.</li>
<li><span class="key" data-term="EIG">EIGS</span> : evenement indesirable <strong>grave</strong> associe aux soins (deces, mise en jeu du pronostic vital, deficit fonctionnel, anomalie congenitale ou prolongation d'hospitalisation).</li>
<li><span class="key" data-term="presque accident">Presque accident (near miss)</span> : evenement qui aurait pu causer un dommage mais ne l'a pas fait (recupere a temps).</li>
<li><span class="key" data-term="evenement porteur de risque">Evenement porteur de risque (EPR)</span> : a declarer car il revele une faille du systeme.</li>
</ul>
<h3>Declaration et signalement</h3>
<ul>
<li>Les <strong>EIGS associes aux soins</strong> sont a declaration <strong>obligatoire</strong> a l'ARS depuis 2017 (decret du 25 novembre 2016).</li>
<li>La declaration interne via une <strong>fiche d'evenement indesirable (FEI)</strong> est non punitive et confidentielle.</li>
</ul>
<h3>Analyse des causes</h3>
<table class="tbl">
<tr><th>Methode</th><th>Usage</th></tr>
<tr><td>ALARM / arbre des causes</td><td>Identifier les causes profondes (latentes) au-dela de l'erreur humaine</td></tr>
<tr><td>RMM (revue de mortalite-morbidite)</td><td>Analyse collective d'un deces ou d'une complication</td></tr>
<tr><td>CREX (comite de retour d'experience)</td><td>Analyse en equipe des evenements pour en tirer des actions correctives</td></tr>
</table>
<div class="callout"><div class="callout-t">Culture de securite</div>On distingue l'erreur (non intentionnelle) de la faute. La <span class="key" data-term="culture juste">culture juste</span> privilegie l'analyse systemique plutot que la sanction de l'individu : "a quoi le systeme a-t-il failli ?".</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnemo</div>Modele du <strong>fromage suisse</strong> de Reason : un accident survient quand les "trous" des barrieres de defense s'alignent.</div>`,
    refs: ["UE 4.5"] },

  { id: "f_4_5_securite_medicamenteuse", ueId: "4.5", type: "cours",
    titre: "Securisation du circuit du medicament",
    resume: "Etapes du circuit du medicament, regle des concordances et prevention des erreurs medicamenteuses.",
    tags: ["circuit du medicament", "administration", "5B", "erreur medicamenteuse"],
    html: `<h3>Les etapes du circuit du medicament</h3>
<ul>
<li><strong>Prescription</strong> (medecin) : ecrite, datee, signee, lisible.</li>
<li><strong>Dispensation</strong> (pharmacien) : analyse pharmaceutique + delivrance.</li>
<li><strong>Administration</strong> (IDE) : phase a haut risque d'erreur.</li>
<li><strong>Surveillance</strong> et tracabilite.</li>
</ul>
<h3>La regle des 5 B (verifications avant administration)</h3>
<table class="tbl">
<tr><th>B</th><th>Verification</th></tr>
<tr><td>Bon patient</td><td>Identitovigilance (bracelet, nom-prenom-date de naissance)</td></tr>
<tr><td>Bon medicament</td><td>DCI, concordance avec la prescription</td></tr>
<tr><td>Bonne dose</td><td>Posologie, calcul de dose</td></tr>
<tr><td>Bonne voie</td><td>Orale, IV, IM, SC...</td></tr>
<tr><td>Bon moment</td><td>Horaire, frequence</td></tr>
</table>
<div class="callout"><div class="callout-t">Never events</div>Evenements qui ne devraient JAMAIS survenir : erreur de patient, surdosage d'anticoagulant, erreur de voie d'administration (ex. injection intrathecale par erreur), confusion de medicaments a risque (potassium, insuline).</div>
<h3>Medicaments a risque</h3>
<ul>
<li>Anticoagulants, insulines, chlorure de potassium concentre (KCl), chimiotherapies, stupefiants.</li>
<li>Double controle recommande pour ces produits.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnemo</div>Certains ajoutent 2 B : <strong>Bonne information</strong> du patient et <strong>Bonne tracabilite</strong> = la regle des 7 B.</div>`,
    refs: ["UE 4.5"] },

  { id: "f_4_5_vigilances_sanitaires", ueId: "4.5", type: "cours",
    titre: "Vigilances sanitaires et identitovigilance",
    resume: "Panorama des vigilances reglementaires et role de l'IDE dans l'identitovigilance.",
    tags: ["vigilances", "pharmacovigilance", "identitovigilance", "ANSM"],
    html: `<h3>Les principales vigilances</h3>
<table class="tbl">
<tr><th>Vigilance</th><th>Objet</th></tr>
<tr><td><span class="key" data-term="pharmacovigilance">Pharmacovigilance</span></td><td>Effets indesirables des medicaments</td></tr>
<tr><td><span class="key" data-term="hemovigilance">Hemovigilance</span></td><td>Incidents et effets indesirables lies a la transfusion de produits sanguins labiles</td></tr>
<tr><td><span class="key" data-term="materiovigilance">Materiovigilance</span></td><td>Incidents lies aux dispositifs medicaux</td></tr>
<tr><td><span class="key" data-term="infectiovigilance">Infectiovigilance</span></td><td>Infections associees aux soins (IAS)</td></tr>
<tr><td>Biovigilance</td><td>Organes, tissus, cellules, lait maternel</td></tr>
<tr><td>Reactovigilance</td><td>Dispositifs medicaux de diagnostic in vitro</td></tr>
<tr><td>Cosmetovigilance</td><td>Produits cosmetiques</td></tr>
</table>
<div class="callout"><div class="callout-t">Acteur national</div>De nombreuses vigilances (pharmacovigilance, hemovigilance, materiovigilance...) sont coordonnees par l'<strong>ANSM</strong> (Agence nationale de securite du medicament et des produits de sante). La surveillance des infections associees aux soins releve, elle, de Sante publique France et des CPias.</div>
<h3>Identitovigilance</h3>
<ul>
<li>Systeme de surveillance et de prevention des erreurs liees a l'<span class="key" data-term="identitovigilance">identification</span> du patient.</li>
<li>Verification active : faire <strong>epeler</strong> nom, prenom et date de naissance plutot que de demander "vous etes bien M. X ?".</li>
<li>Bracelet d'identification, controle a chaque etape (administration, prelevement, transfusion).</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnemo</div>Toute vigilance suit le meme schema : <strong>Detecter -> Declarer -> Analyser -> Corriger</strong>.</div>`,
    refs: ["UE 4.5"] },
];

export const qcm = [
  { ueId: "4.5", q: "Comment definit-on le risque dans la gestion des risques en sante ?", options: ["La gravite seule d'un evenement", "La combinaison de la probabilite de survenue et de la gravite", "Le nombre d'erreurs declarees", "La duree d'hospitalisation"], correct: 1,
    explication: "Le risque se definit comme la combinaison de la probabilite de survenue d'un evenement indesirable et de sa gravite. Cette double dimension permet de hierarchiser les risques (criticite).", ref: "UE 4.5", diff: 1 },

  { ueId: "4.5", q: "Quelle methode releve de la gestion des risques a priori (proactive) ?", options: ["La revue de mortalite-morbidite (RMM)", "L'analyse d'une fiche d'evenement indesirable", "La cartographie des risques", "Le CREX"], correct: 2,
    explication: "La cartographie des risques anticipe les dangers AVANT leur survenue : c'est une approche a priori. La RMM, l'analyse de FEI et le CREX sont des approches a posteriori (apres survenue d'un evenement).", ref: "UE 4.5", diff: 2 },

  { ueId: "4.5", q: "Que signifie l'abreviation EIG ?", options: ["Etablissement d'intervention generale", "Evenement indesirable grave", "Equipe d'investigation gestionnaire", "Erreur d'identification globale"], correct: 1,
    explication: "EIG = evenement indesirable grave. Associe aux soins (EIGS), il entraine deces, mise en jeu du pronostic vital, deficit fonctionnel ou prolongation d'hospitalisation. Les EIGS sont a declaration obligatoire a l'ARS.", ref: "UE 4.5", diff: 1 },

  { ueId: "4.5", q: "La regle des 5 B avant l'administration d'un medicament comprend :", options: ["Bon patient, bon medicament, bonne dose, bonne voie, bon moment", "Bon prix, bon stock, bon fournisseur, bonne date, bon lot", "Bon lit, bon brancard, bon dossier, bon bilan, bon retour", "Bonne humeur, bon repas, bon repos, bon reveil, bon transit"], correct: 0,
    explication: "Les 5 B sont : Bon patient, Bon medicament, Bonne dose, Bonne voie, Bon moment. Ils constituent les verifications indispensables pour securiser l'administration. Certains ajoutent bonne information et bonne tracabilite (7 B).", ref: "UE 4.5", diff: 1 },

  { ueId: "4.5", q: "Quel organisme pilote la certification des etablissements de sante en France ?", options: ["L'ARS", "L'ANSM", "La HAS", "La CPAM"], correct: 2,
    explication: "La HAS (Haute Autorite de Sante) pilote la procedure de certification, demarche d'evaluation externe obligatoire portant sur la qualite et la securite des soins de l'etablissement.", ref: "UE 4.5", diff: 1 },

  { ueId: "4.5", q: "Qu'est-ce qu'un 'presque accident' (near miss) ?", options: ["Un evenement ayant entraine le deces du patient", "Un evenement qui aurait pu causer un dommage mais ne l'a pas fait", "Une erreur volontaire d'un soignant", "Un dysfonctionnement materiel sans rapport avec le patient"], correct: 1,
    explication: "Le presque accident (near miss) est un evenement qui aurait pu provoquer un dommage mais qui ne l'a finalement pas cause (rattrape a temps). Il doit etre declare car il revele une faille du systeme avant qu'un accident ne survienne.", ref: "UE 4.5", diff: 2 },

  { ueId: "4.5", q: "Quelle vigilance concerne les incidents lies a la transfusion de produits sanguins labiles ?", options: ["La materiovigilance", "L'hemovigilance", "La pharmacovigilance", "La biovigilance"], correct: 1,
    explication: "L'hemovigilance surveille l'ensemble de la chaine transfusionnelle, de la collecte au suivi des receveurs, afin de detecter et prevenir les incidents et effets indesirables lies aux produits sanguins labiles.", ref: "UE 4.5", diff: 1 },

  { ueId: "4.5", q: "Le modele du 'fromage suisse' de Reason illustre :", options: ["La hierarchie des soignants", "L'alignement des failles des barrieres de defense conduisant a l'accident", "Le circuit alimentaire en hopital", "La cartographie des services"], correct: 1,
    explication: "Le modele de James Reason represente les barrieres de securite comme des tranches de fromage troue : un accident survient lorsque les 'trous' (defaillances latentes et actives) s'alignent et laissent passer le danger. Il fonde l'analyse systemique des erreurs.", ref: "UE 4.5", diff: 2 },

  { ueId: "4.5", q: "Que recouvre la notion de 'culture juste' (just culture) ?", options: ["Sanctionner systematiquement toute erreur", "Privilegier l'analyse systemique de l'erreur plutot que la punition de l'individu", "Interdire toute declaration d'evenement", "Rendre publiques les fautes des soignants"], correct: 1,
    explication: "La culture juste distingue l'erreur (non intentionnelle) de la faute. Elle favorise une declaration non punitive et une analyse des causes systemiques, condition indispensable a l'amelioration de la securite des soins.", ref: "UE 4.5", diff: 2 },

  { ueId: "4.5", q: "Quelle pratique correspond a une bonne identitovigilance lors de l'administration ?", options: ["Demander 'vous etes bien Madame Martin ?'", "Faire epeler au patient son nom, prenom et date de naissance", "Se fier uniquement au numero de chambre", "Reconnaitre le patient de vue"], correct: 1,
    explication: "La verification active consiste a faire epeler ou enoncer par le patient lui-meme son identite complete (nom, prenom, date de naissance) plutot que de poser une question fermee induisant la reponse. On controle aussi le bracelet d'identification.", ref: "UE 4.5", diff: 2 },

  { ueId: "4.5", q: "Que sont les 'never events' ?", options: ["Des evenements festifs en service", "Des evenements indesirables graves, evitables, qui ne devraient jamais survenir", "Des erreurs sans gravite", "Des examens jamais realises"], correct: 1,
    explication: "Les never events sont des evenements indesirables graves, evitables, qui ne devraient jamais se produire (ex. erreur de patient, erreur de voie d'administration, surdosage d'anticoagulant). Ils font l'objet d'une vigilance et d'une analyse renforcees.", ref: "UE 4.5", diff: 2 },

  { ueId: "4.5", q: "Parmi ces medicaments, lequel est considere comme 'a risque' necessitant un double controle ?", options: ["Le paracetamol", "Le serum physiologique", "Le chlorure de potassium concentre", "Une pommade hydratante"], correct: 2,
    explication: "Le chlorure de potassium concentre fait partie des medicaments a haut risque (avec anticoagulants, insulines, chimiotherapies). Une erreur de dose ou de voie peut etre mortelle, d'ou un double controle recommande.", ref: "UE 4.5", diff: 2 },

  { ueId: "4.5", q: "La fiche d'evenement indesirable (FEI) interne se caracterise par :", options: ["Un caractere punitif et nominatif systematique", "Un signalement confidentiel et non punitif visant l'amelioration", "Une obligation de payer une amende", "Une transmission publique a la presse"], correct: 1,
    explication: "La FEI permet un signalement interne, confidentiel et non punitif. Son objectif est d'alimenter la demarche d'amelioration continue et l'analyse des causes, sans sanctionner le declarant.", ref: "UE 4.5", diff: 2 },

  { ueId: "4.5", q: "Quelle est la finalite premiere de la demarche qualite en sante ?", options: ["Reduire les depenses uniquement", "Ameliorer en continu la securite et la qualite des soins pour le patient", "Augmenter le nombre de lits", "Supprimer les declarations d'evenements"], correct: 1,
    explication: "La demarche qualite vise l'amelioration continue de la securite, de l'efficacite et de la satisfaction du patient. Elle s'inscrit dans un cycle d'amelioration permanent (type roue de Deming PDCA).", ref: "UE 4.5", diff: 1 },

  { ueId: "4.5", q: "Le cycle d'amelioration continue de la qualite (PDCA) signifie :", options: ["Patient-Diagnostic-Cure-Action", "Plan-Do-Check-Act", "Prescription-Dispensation-Controle-Administration", "Prevention-Detection-Correction-Audit"], correct: 1,
    explication: "Le PDCA (roue de Deming) : Plan (planifier), Do (mettre en oeuvre), Check (verifier/evaluer), Act (ajuster/agir). C'est l'outil de base de l'amelioration continue de la qualite.", ref: "UE 4.5", diff: 2 },

  { ueId: "4.5", q: "L'identitovigilance vise principalement a prevenir :", options: ["Les infections nosocomiales", "Les erreurs d'identification du patient", "Les chutes", "Les escarres"], correct: 1,
    explication: "L'identitovigilance est le dispositif de surveillance et de prevention des erreurs et risques lies a l'identification des patients, a chaque etape de la prise en charge (administration, prelevement, transfusion, examen).", ref: "UE 4.5", diff: 1 },

  { ueId: "4.5", q: "Quelle vigilance est en lien avec les infections associees aux soins (IAS) ?", options: ["La cosmetovigilance", "L'infectiovigilance", "La reactovigilance", "La biovigilance"], correct: 1,
    explication: "L'infectiovigilance (surveillance des IAS) concerne la prevention et le signalement des infections associees aux soins. Elle est portee notamment par le CLIN et l'equipe operationnelle d'hygiene (EOH).", ref: "UE 4.5", diff: 2 },

  { ueId: "4.5", q: "Dans le circuit du medicament, quelle etape releve de la competence du pharmacien ?", options: ["La prescription", "La dispensation (analyse et delivrance)", "L'administration au patient", "La surveillance clinique"], correct: 1,
    explication: "La dispensation, qui comprend l'analyse pharmaceutique de la prescription et la delivrance, releve du pharmacien. La prescription incombe au medecin, l'administration et la surveillance a l'IDE.", ref: "UE 4.5", diff: 2 },

  { ueId: "4.5", q: "La methode ALARM ou l'arbre des causes sert principalement a :", options: ["Calculer le cout d'un sejour", "Identifier les causes profondes (latentes) d'un evenement indesirable", "Planifier les plannings des equipes", "Mesurer la satisfaction des patients"], correct: 1,
    explication: "L'analyse approfondie type ALARM/arbre des causes recherche les causes racines et facteurs latents d'un evenement indesirable, au-dela de la seule erreur humaine immediate, afin de mettre en place des barrieres durables.", ref: "UE 4.5", diff: 3 },

  { ueId: "4.5", q: "Quelle est l'obligation concernant les EIG associes aux soins depuis 2017 ?", options: ["Aucune declaration n'est requise", "Declaration obligatoire a l'ARS", "Declaration facultative au patient seulement", "Declaration uniquement a la famille"], correct: 1,
    explication: "Depuis le decret de novembre 2016 applique en 2017, les evenements indesirables graves associes aux soins (EIGS) doivent etre declares de maniere obligatoire a l'ARS, en deux temps (declaration initiale puis analyse approfondie).", ref: "UE 4.5", diff: 3 },

  { ueId: "4.5", q: "Le terme 'criticite' d'un risque correspond a :", options: ["La couleur du risque sur une affiche", "La combinaison de la gravite, de la frequence et de la detectabilite", "Le nom du soignant responsable", "Le numero du protocole concerne"], correct: 1,
    explication: "La criticite hierarchise les risques en combinant gravite, frequence (probabilite) et parfois detectabilite (capacite a reperer le risque avant le dommage). Elle est utilisee notamment dans la methode AMDEC.", ref: "UE 4.5", diff: 3 },

  { ueId: "4.5", q: "Que signifie l'abreviation IAS ?", options: ["Infection administree par seringue", "Infection associee aux soins", "Incident anesthesique severe", "Indicateur d'amelioration des soins"], correct: 1,
    explication: "Une IAS (infection associee aux soins) survient au cours ou au decours d'une prise en charge. La notion d'infection nosocomiale (acquise en etablissement de sante) en est un sous-ensemble. Le delai de reference est generalement de 48 h apres l'admission.", ref: "UE 4.5", diff: 2 },

  { ueId: "4.5", q: "Quel comite est specifiquement charge de la lutte contre les infections nosocomiales dans un etablissement ?", options: ["La CME", "Le CLIN", "Le CREX", "La RMM"], correct: 1,
    explication: "Le CLIN (comite de lutte contre les infections nosocomiales), appuye par l'equipe operationnelle d'hygiene (EOH), organise la prevention, la surveillance et le signalement des infections associees aux soins.", ref: "UE 4.5", diff: 2 },

  { ueId: "4.5", q: "Quel outil cartographie un processus pour anticiper les modes de defaillance et leur criticite ?", options: ["La RMM", "L'AMDEC", "Le CREX", "La FEI"], correct: 1,
    explication: "L'AMDEC (Analyse des Modes de Defaillance, de leurs Effets et de leur Criticite) est une methode a priori : elle identifie pour chaque etape d'un processus les defaillances possibles et calcule leur criticite (gravite x frequence x detectabilite) pour prioriser les actions.", ref: "UE 4.5", diff: 3 },
];

export const flashcards = [
  { ueId: "4.5", recto: "Comment definit-on le risque en gestion des risques ?", verso: "Combinaison de la probabilite de survenue d'un evenement indesirable et de sa gravite." },
  { ueId: "4.5", recto: "Difference entre gestion des risques a priori et a posteriori ?", verso: "A priori = anticiper avant survenue (cartographie, AMDEC) ; a posteriori = analyser apres survenue (RMM, CREX, FEI)." },
  { ueId: "4.5", recto: "Que signifie EIGS ?", verso: "Evenement Indesirable Grave associe aux Soins (deces, pronostic vital engage, deficit fonctionnel, prolongation d'hospitalisation)." },
  { ueId: "4.5", recto: "Quelles sont les 5 B avant administration d'un medicament ?", verso: "Bon patient, Bon medicament, Bonne dose, Bonne voie, Bon moment." },
  { ueId: "4.5", recto: "Quel organisme pilote la certification des etablissements de sante ?", verso: "La HAS (Haute Autorite de Sante)." },
  { ueId: "4.5", recto: "Qu'est-ce qu'un 'presque accident' (near miss) ?", verso: "Un evenement qui aurait pu causer un dommage mais ne l'a pas fait ; a declarer car il revele une faille." },
  { ueId: "4.5", recto: "A quoi sert l'hemovigilance ?", verso: "Surveiller et prevenir les incidents et effets indesirables lies a la transfusion de produits sanguins labiles." },
  { ueId: "4.5", recto: "Qu'illustre le modele du 'fromage suisse' de Reason ?", verso: "Un accident survient quand les failles (trous) des differentes barrieres de defense s'alignent." },
  { ueId: "4.5", recto: "Que sont les 'never events' ?", verso: "Des evenements indesirables graves, evitables, qui ne devraient jamais survenir (ex. erreur de patient, surdosage d'anticoagulant)." },
  { ueId: "4.5", recto: "Que signifie le cycle PDCA ?", verso: "Plan (planifier), Do (faire), Check (verifier), Act (ajuster) : roue de Deming de l'amelioration continue." },
  { ueId: "4.5", recto: "Quel est le but de l'identitovigilance ?", verso: "Prevenir les erreurs liees a l'identification du patient a chaque etape des soins." },
  { ueId: "4.5", recto: "Les 4 etapes du circuit du medicament ?", verso: "Prescription (medecin), Dispensation (pharmacien), Administration (IDE), Surveillance/tracabilite." },
  { ueId: "4.5", recto: "Qu'est-ce que la 'culture juste' ?", verso: "Une culture qui distingue l'erreur de la faute et privilegie l'analyse systemique plutot que la sanction de l'individu." },
  { ueId: "4.5", recto: "Cite 3 medicaments dits 'a risque' (double controle) ?", verso: "Anticoagulants, insulines, chlorure de potassium concentre (aussi chimiotherapies, stupefiants)." },
  { ueId: "4.5", recto: "Quel organisme national coordonne de nombreuses vigilances sanitaires ?", verso: "L'ANSM (Agence nationale de securite du medicament et des produits de sante)." },
  { ueId: "4.5", recto: "Quelle est l'obligation pour les EIGS associes aux soins depuis 2017 ?", verso: "Declaration obligatoire a l'ARS (declaration initiale puis analyse approfondie)." },
  { ueId: "4.5", recto: "Que recouvre la 'criticite' d'un risque ?", verso: "La combinaison de la gravite, de la frequence et parfois de la detectabilite (utilisee en AMDEC)." },
  { ueId: "4.5", recto: "Que signifie IAS et quel delai la distingue ?", verso: "Infection Associee aux Soins ; pour une infection nosocomiale, acquisition en etablissement, en general au-dela de 48 h apres l'admission." },
  { ueId: "4.5", recto: "Quel comite lutte contre les infections nosocomiales ?", verso: "Le CLIN, appuye par l'equipe operationnelle d'hygiene (EOH)." },
  { ueId: "4.5", recto: "Que veut dire l'acronyme AMDEC ?", verso: "Analyse des Modes de Defaillance, de leurs Effets et de leur Criticite (methode a priori)." },
];
