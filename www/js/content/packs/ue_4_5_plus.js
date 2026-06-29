export const fiches = [
  { id: "fx_ue_4_5_plus_culture_securite", ueId: "4.5", type: "cours",
    titre: "Culture de sécurité et gestion des risques en santé",
    resume: "Comprendre la gestion des risques, ses approches a priori/a posteriori et la culture de sécurité.",
    tags: ["gestion des risques", "culture sécurité", "EIAS"],
    html: `<h3>1. Définitions clés</h3>
<p>La <span class="key" data-term="gestion des risques">gestion des risques</span> est une démarche organisée et continue visant à identifier, analyser, hiérarchiser et traiter les risques afin de réduire la survenue et la gravité des dommages chez le patient, le soignant et l'établissement.</p>
<ul>
<li><strong>Danger</strong> : situation, agent ou produit susceptible de causer un dommage.</li>
<li><strong>Risque</strong> : probabilité qu'un danger entraîne un dommage, combinée à sa gravité (criticité = fréquence × gravité).</li>
<li><strong>Dommage</strong> : préjudice subi par le patient (atteinte physique, psychique, perte de chance).</li>
<li><span class="key" data-term="EIAS">Événement indésirable associé aux soins (EIAS)</span> : tout incident préjudiciable au patient survenu lors d'un acte de prévention, d'investigation ou de soins.</li>
</ul>

<h3>2. Deux approches complémentaires</h3>
<table class="tbl">
<tr><th>Approche</th><th>Quand ?</th><th>Outils</th></tr>
<tr><td><strong>A priori</strong> (préventive)</td><td>Avant l'incident, anticipation</td><td>Cartographie des risques, AMDEC, check-list, analyse de processus</td></tr>
<tr><td><strong>A posteriori</strong> (réactive)</td><td>Après l'incident, retour d'expérience</td><td>Signalement, RMM, CREX, analyse des causes racines (ALARM)</td></tr>
</table>

<h3>3. Le modèle du fromage suisse (Reason)</h3>
<p>Selon James Reason, l'accident résulte de l'alignement de plusieurs défaillances (les « trous ») traversant les barrières de défense. On distingue les <span class="key" data-term="erreur patente">erreurs patentes</span> (au contact du patient) et les <span class="key" data-term="erreur latente">erreurs latentes</span> (organisationnelles, en amont). L'analyse vise le <strong>système</strong> et non la culpabilisation individuelle.</p>

<div class="callout"><div class="callout-t">Culture de sécurité</div>
<p>Ensemble de valeurs et comportements partagés privilégiant la sécurité. Elle repose sur une approche <strong>non punitive</strong> de l'erreur, le signalement libre, le travail en équipe et la transparence. On parle de culture <strong>juste</strong> : distinguer l'erreur (non blâmable) de la faute délibérée ou de l'imprudence.</p></div>

<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>
<p><strong>« SECURITE »</strong> : <strong>S</strong>ignaler, <strong>E</strong>valuer, <strong>C</strong>artographier, <strong>U</strong>tiliser les barrières, <strong>R</strong>etour d'expérience, <strong>I</strong>nformer le patient, <strong>T</strong>racer, <strong>E</strong>quipe.</p></div>

<h3>4. Acteurs institutionnels</h3>
<ul>
<li><strong>HAS</strong> : certification des établissements, recommandations de bonnes pratiques.</li>
<li><strong>ARS</strong> : pilotage régional, réception des signalements.</li>
<li><strong>Gestionnaire de risques</strong> et <strong>coordonnateur de la gestion des risques associés aux soins</strong> dans l'établissement.</li>
<li><strong>CME</strong> : politique d'amélioration continue de la qualité et de la sécurité des soins.</li>
</ul>`,
    refs: ["HAS - Culture de sécurité des soins", "James Reason, modèle systémique de l'erreur"] },

  { id: "fx_ue_4_5_plus_ei_signalement", ueId: "4.5", type: "cours",
    titre: "Événements indésirables : typologie, déclaration et analyse",
    resume: "Classer les événements indésirables et maîtriser leur signalement et leur analyse a posteriori.",
    tags: ["événement indésirable", "EIGS", "déclaration", "RMM"],
    html: `<h3>1. Typologie des événements indésirables</h3>
<table class="tbl">
<tr><th>Type</th><th>Définition</th></tr>
<tr><td><strong>EI évité (presque-accident)</strong></td><td>Erreur interceptée avant d'atteindre le patient (near miss).</td></tr>
<tr><td><strong>EIAS</strong></td><td>Événement indésirable associé aux soins ayant atteint le patient.</td></tr>
<tr><td><span class="key" data-term="EIGS">EIGS</span></td><td>Événement indésirable grave associé aux soins : décès, mise en jeu du pronostic vital, déficit fonctionnel permanent, anomalie congénitale, ou conséquence grave inattendue.</td></tr>
<tr><td><strong>Événement « jamais »</strong> (never event)</td><td>Événement grave qui ne devrait jamais survenir (ex. erreur de côté en chirurgie, erreur d'administration d'un médicament à risque).</td></tr>
</table>

<h3>2. La déclaration des EIGS</h3>
<p>Depuis le décret de 2016, la déclaration des <span class="key" data-term="EIGS">EIGS</span> est obligatoire. Elle se fait via le <strong>portail de signalement des événements sanitaires indésirables</strong>, auprès de l'<strong>ARS</strong>, en deux temps :</p>
<ul>
<li><strong>Volet 1</strong> : déclaration initiale sans délai (description des faits).</li>
<li><strong>Volet 2</strong> : dans un délai de 3 mois, après analyse approfondie des causes et plan d'actions.</li>
</ul>

<div class="callout"><div class="callout-t">Point réglementaire</div>
<p>La déclaration des EIGS est <strong>anonymisée</strong> pour le patient et le déclarant, et <strong>ne peut donner lieu à sanction</strong> du déclarant agissant de bonne foi (protection du signalement). Le but est l'apprentissage collectif, pas la punition.</p></div>

<h3>3. Outils d'analyse a posteriori</h3>
<ul>
<li><span class="key" data-term="RMM">RMM</span> (Revue de Morbi-Mortalité) : analyse collective rétrospective de décès, complications ou EI, en équipe pluriprofessionnelle.</li>
<li><strong>CREX</strong> (Comité de Retour d'EXpérience) : analyse régulière des événements signalés, recherche des causes et actions.</li>
<li><strong>Méthode ALARM</strong> / arbre des causes : recherche des <strong>causes racines</strong> (facteurs liés au patient, à la tâche, à l'équipe, à l'environnement, à l'organisation, au contexte institutionnel).</li>
</ul>

<h3>4. Vigilances sanitaires</h3>
<p>Le système des vigilances surveille les risques liés aux produits de santé :</p>
<table class="tbl">
<tr><th>Vigilance</th><th>Objet</th></tr>
<tr><td><span class="key" data-term="pharmacovigilance">Pharmacovigilance</span></td><td>Effets indésirables des médicaments</td></tr>
<tr><td><strong>Hémovigilance</strong></td><td>Chaîne transfusionnelle (produits sanguins labiles)</td></tr>
<tr><td><strong>Matériovigilance</strong></td><td>Dispositifs médicaux</td></tr>
<tr><td><strong>Identitovigilance</strong></td><td>Erreurs d'identité du patient</td></tr>
<tr><td><strong>Nosocomial / infectiovigilance</strong></td><td>Infections associées aux soins</td></tr>
</table>

<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>
<p><strong>« PHIMI »</strong> pour les vigilances : <strong>P</strong>harmaco, <strong>H</strong>émo, <strong>I</strong>dentito, <strong>M</strong>atério, <strong>I</strong>nfectio.</p></div>`,
    refs: ["Décret n°2016-1606 relatif à la déclaration des EIGS", "HAS - Mettre en œuvre une RMM", "ANSM - Vigilances"] },

  { id: "fx_ue_4_5_plus_securisation_medicament", ueId: "4.5", type: "cours",
    titre: "Sécurisation du circuit du médicament et règles d'administration",
    resume: "Prévenir l'erreur médicamenteuse par la règle des 5B et la maîtrise des médicaments à risque.",
    tags: ["circuit du médicament", "règle des 5B", "erreur médicamenteuse"],
    html: `<h3>1. Le circuit du médicament</h3>
<p>Le circuit comporte plusieurs étapes, chacune source potentielle d'erreur : <strong>prescription</strong> (médecin) → <strong>dispensation</strong> (pharmacien) → <strong>préparation et administration</strong> (IDE) → <strong>surveillance / traçabilité</strong>. L'administration relève du rôle propre encadré et de la responsabilité directe de l'infirmier.</p>

<div class="callout"><div class="callout-t">La règle des 5 B</div>
<p>Avant toute administration, vérifier :</p>
<ul>
<li><strong>le Bon patient</strong> (vérification active de l'identité)</li>
<li><strong>le Bon médicament</strong></li>
<li><strong>la Bonne dose</strong></li>
<li><strong>la Bonne voie</strong> d'administration</li>
<li><strong>le Bon moment</strong></li>
</ul>
<p>Souvent complétée par : <strong>bonne documentation/traçabilité</strong>.</p></div>

<h3>2. Les médicaments à risque</h3>
<p>Les <span class="key" data-term="médicament à risque">médicaments à risque</span> exposent à un danger majoré en cas d'erreur. Ils nécessitent une vigilance et parfois un double contrôle :</p>
<ul>
<li><strong>Anticoagulants</strong> (héparines, AVK, AOD)</li>
<li><strong>Insulines</strong></li>
<li><strong>Chlorure de potassium (KCl)</strong> injectable concentré</li>
<li><strong>Anticancéreux / chimiothérapies</strong></li>
<li><strong>Morphiniques et stupéfiants</strong></li>
</ul>

<div class="callout"><div class="callout-t">Médicaments à niveau d'alerte</div>
<p>Les solutions concentrées de <strong>potassium injectable</strong> ne doivent jamais être administrées en IV directe (risque d'arrêt cardiaque) : toujours diluées et perfusées lentement sous surveillance.</p></div>

<h3>3. Prévenir l'erreur médicamenteuse</h3>
<ul>
<li>Ne jamais administrer un médicament que l'on n'a pas préparé soi-même (sauf protocole encadré).</li>
<li>Vérifier la prescription (datée, signée, lisible) ; ne pas administrer sur prescription orale hors urgence encadrée.</li>
<li>Respecter le <strong>« ne pas interrompre »</strong> lors de la préparation.</li>
<li>Tracer immédiatement l'administration et la non-administration (avec motif).</li>
</ul>

<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>
<p>Les 5B : <strong>« Patient – Médicament – Dose – Voie – Moment »</strong>. Astuce : « Pour Mieux Dispenser, Vérifie Méticuleusement ».</p></div>

<h3>4. Calcul de dose : exemple</h3>
<p>Prescription : 1 g d'un antibiotique à diluer ; flacon dosé à 500 mg. Nombre de flacons = 1000 / 500 = <strong>2 flacons</strong>. Toujours vérifier l'unité (mg/g) et recouper le calcul.</p>`,
    refs: ["HAS / OMEDIT - Sécurisation du circuit du médicament", "Règle des 5B"] },
];

export const qcm = [
  { ueId: "4.5", q: "Comment définit-on la criticité d'un risque ?", options: ["Gravité seule", "Fréquence seule", "Fréquence × gravité", "Coût × durée"], correct: 2,
    explication: "La criticité (ou niveau de risque) combine la probabilité de survenue (fréquence) et la gravité des conséquences. Elle permet de hiérarchiser les risques à traiter en priorité.", ref: "HAS - Gestion des risques", diff: 1 },

  { ueId: "4.5", q: "Qu'est-ce qu'un EIGS ?", options: ["Un événement indésirable évité avant le patient", "Un événement indésirable grave associé aux soins (décès, pronostic vital, déficit permanent)", "Une réclamation administrative", "Un effet indésirable médicamenteux bénin"], correct: 1,
    explication: "L'EIGS est un événement indésirable grave associé aux soins entraînant un décès, une mise en jeu du pronostic vital, un déficit fonctionnel permanent, une anomalie congénitale ou une conséquence grave et inattendue. Sa déclaration à l'ARS est obligatoire.", ref: "Décret n°2016-1606", diff: 1 },

  { ueId: "4.5", q: "La déclaration d'un EIGS auprès de l'ARS comporte combien de volets ?", options: ["Un seul volet immédiat", "Deux volets : initial sans délai puis analyse à 3 mois", "Trois volets", "Aucun, c'est facultatif"], correct: 1,
    explication: "La déclaration se fait en deux temps : un volet 1 initial sans délai décrivant les faits, puis un volet 2 dans un délai de 3 mois présentant l'analyse approfondie des causes et le plan d'actions.", ref: "Décret n°2016-1606", diff: 2 },

  { ueId: "4.5", q: "Le modèle du « fromage suisse » de James Reason illustre principalement :", options: ["Le coût des soins", "L'alignement de défaillances traversant les barrières de défense", "La hiérarchie soignante", "La chaîne du froid"], correct: 1,
    explication: "Le modèle de Reason montre qu'un accident résulte de l'alignement de plusieurs défaillances (les « trous » du fromage) traversant les barrières de sécurité, mêlant erreurs patentes et erreurs latentes organisationnelles. L'analyse vise le système, pas l'individu.", ref: "James Reason", diff: 2 },

  { ueId: "4.5", q: "Quelle approche de la gestion des risques est dite « a priori » ?", options: ["L'analyse après un accident (RMM, CREX)", "L'anticipation avant l'incident (cartographie, AMDEC, check-list)", "La sanction du soignant", "La déclaration à l'ARS"], correct: 1,
    explication: "L'approche a priori est préventive : elle anticipe les risques avant qu'ils ne surviennent à l'aide de la cartographie des risques, de l'AMDEC ou des check-lists. L'approche a posteriori, elle, analyse les événements survenus.", ref: "HAS - Gestion des risques", diff: 1 },

  { ueId: "4.5", q: "Que signifie la règle des 5 B lors de l'administration d'un médicament ?", options: ["Bon patient, bon médicament, bonne dose, bonne voie, bon moment", "Bon prix, bon stock, bon flacon, bon délai, bon soignant", "Cinq vérifications administratives", "Bon lit, bon repas, bon repos, bon bilan, bon retour"], correct: 0,
    explication: "Les 5 B sécurisent l'administration : le Bon patient, le Bon médicament, la Bonne dose, la Bonne voie et le Bon moment. On y ajoute souvent la bonne traçabilité.", ref: "HAS - Règle des 5B", diff: 1 },

  { ueId: "4.5", q: "Une infirmière intercepte une erreur de prescription avant que le patient ne reçoive le médicament. Il s'agit :", options: ["D'un EIGS", "D'un événement porteur de risque / presque-accident (near miss)", "D'un événement « jamais »", "D'une faute disciplinaire"], correct: 1,
    explication: "Une erreur interceptée avant d'atteindre le patient est un événement porteur de risque ou presque-accident (near miss). Son signalement est précieux car il révèle une faille sans dommage et permet de prévenir un futur accident.", ref: "HAS - Événements indésirables", diff: 2 },

  { ueId: "4.5", q: "Quel principe fonde une « culture juste » de sécurité ?", options: ["Sanctionner systématiquement toute erreur", "Distinguer l'erreur non blâmable de la faute délibérée et favoriser le signalement non punitif", "Interdire les signalements", "Rendre publics les noms des soignants en cause"], correct: 1,
    explication: "La culture juste distingue l'erreur (humaine, non blâmable) de l'imprudence ou de la faute délibérée. Elle encourage un signalement libre et non punitif afin d'apprendre des erreurs et d'améliorer le système.", ref: "HAS - Culture de sécurité", diff: 2 },

  { ueId: "4.5", q: "La vigilance qui surveille les effets indésirables des médicaments s'appelle :", options: ["L'hémovigilance", "La matériovigilance", "La pharmacovigilance", "L'identitovigilance"], correct: 2,
    explication: "La pharmacovigilance surveille et prévient les effets indésirables des médicaments. L'hémovigilance concerne les produits sanguins, la matériovigilance les dispositifs médicaux et l'identitovigilance l'identité du patient.", ref: "ANSM - Vigilances", diff: 1 },

  { ueId: "4.5", q: "L'hémovigilance concerne :", options: ["Les dispositifs médicaux", "La chaîne transfusionnelle et les produits sanguins labiles", "Les médicaments", "L'identité des patients"], correct: 1,
    explication: "L'hémovigilance couvre l'ensemble de la chaîne transfusionnelle, de la collecte au suivi du receveur, pour prévenir et déclarer les incidents et effets indésirables liés aux produits sanguins labiles.", ref: "ANSM - Hémovigilance", diff: 1 },

  { ueId: "4.5", q: "La Revue de Morbi-Mortalité (RMM) est :", options: ["Un outil d'analyse a priori", "Une analyse collective rétrospective d'un décès ou d'une complication en équipe pluriprofessionnelle", "Une sanction individuelle", "Un audit financier"], correct: 1,
    explication: "La RMM est une démarche d'analyse collective, rétrospective et systémique de cas marqués par un décès, une complication ou un événement indésirable, visant à comprendre les causes et à améliorer les pratiques, sans recherche de coupable.", ref: "HAS - RMM", diff: 2 },

  { ueId: "4.5", q: "Parmi ces médicaments, lequel est classiquement considéré comme « à risque » nécessitant une vigilance renforcée ?", options: ["Paracétamol per os", "Sérum physiologique", "Chlorure de potassium injectable concentré", "Vitamine C"], correct: 2,
    explication: "Le chlorure de potassium (KCl) injectable concentré est un médicament à haut risque : administré non dilué en IV directe, il peut provoquer un arrêt cardiaque. Il doit toujours être dilué et perfusé lentement sous surveillance.", ref: "OMEDIT - Médicaments à risque", diff: 2 },

  { ueId: "4.5", q: "Un « never event » (événement qui ne devrait jamais arriver) correspond par exemple à :", options: ["Une erreur de côté en chirurgie", "Une rougeur cutanée transitoire", "Un retard de 10 minutes dans un soin", "Une douleur post-opératoire attendue"], correct: 0,
    explication: "Les never events sont des événements indésirables graves, évitables, qui ne devraient jamais survenir : erreur de côté ou de site opératoire, erreur d'administration d'un médicament à haut risque, oubli de corps étranger, etc.", ref: "ANSM - Never events", diff: 2 },

  { ueId: "4.5", q: "La méthode ALARM est utilisée pour :", options: ["Calculer un débit de perfusion", "Rechercher les causes racines d'un événement indésirable (facteurs patient, tâche, équipe, organisation)", "Trier les déchets", "Évaluer la douleur"], correct: 1,
    explication: "La méthode ALARM est une grille d'analyse systémique des causes profondes d'un événement indésirable, explorant 7 familles de facteurs : patient, tâche, individu (soignant), équipe, environnement de travail, organisation et contexte institutionnel.", ref: "HAS - Analyse des causes racines", diff: 3 },

  { ueId: "4.5", q: "Prescription : 1 g d'antibiotique à reconstituer, flacons dosés à 500 mg. Combien de flacons faut-il ?", options: ["1 flacon", "2 flacons", "4 flacons", "0,5 flacon"], correct: 1,
    explication: "1 g = 1000 mg. Nombre de flacons = 1000 / 500 = 2 flacons. Toujours convertir les unités (g en mg) avant le calcul et recouper le résultat pour éviter l'erreur de dose.", ref: "Calcul de doses", diff: 2 },

  { ueId: "4.5", q: "Quel acteur reçoit la déclaration obligatoire des EIGS ?", options: ["La mairie", "L'ARS (Agence Régionale de Santé)", "La CPAM", "Le Conseil départemental"], correct: 1,
    explication: "Les EIGS sont déclarés à l'Agence Régionale de Santé (ARS) via le portail national de signalement des événements sanitaires indésirables. Les données nourrissent une analyse nationale par la HAS.", ref: "Décret n°2016-1606", diff: 1 },

  { ueId: "4.5", q: "La certification des établissements de santé est pilotée par :", options: ["L'ANSM", "La HAS (Haute Autorité de Santé)", "L'Ordre infirmier", "Le ministère du Travail"], correct: 1,
    explication: "La HAS organise la procédure de certification des établissements de santé, démarche d'évaluation externe portant sur la qualité et la sécurité des soins, obligatoire et périodique.", ref: "HAS - Certification", diff: 1 },

  { ueId: "4.5", q: "Quelle attitude relève d'une démarche qualité sécuritaire lors de la préparation d'un médicament ?", options: ["Préparer plusieurs patients en même temps en discutant", "Respecter le principe « ne pas interrompre » et préparer un patient à la fois", "Administrer sans tracer pour gagner du temps", "Déléguer la vérification d'identité à un visiteur"], correct: 1,
    explication: "La préparation doit se faire sans interruption (zone ou dispositif « ne pas interrompre »), un patient à la fois, avec vérification de la prescription et traçabilité immédiate. Les interruptions de tâche sont une cause majeure d'erreur médicamenteuse.", ref: "HAS - Interruptions de tâche", diff: 2 },

  { ueId: "4.5", q: "L'identitovigilance vise à prévenir :", options: ["Les infections nosocomiales", "Les erreurs d'identification du patient", "Les pannes de matériel", "Les effets indésirables médicamenteux"], correct: 1,
    explication: "L'identitovigilance regroupe les mesures de prévention et de surveillance des erreurs d'identité du patient (vérification active de l'identité, bracelet, double identifiant), socle de la sécurité de tous les soins.", ref: "HAS - Identitovigilance", diff: 1 },

  { ueId: "4.5", q: "En cas de dommage associé aux soins, le devoir d'information du patient impose :", options: ["De ne rien dire pour éviter l'inquiétude", "Une information loyale, claire et appropriée sur les circonstances et conséquences du dommage", "D'attendre une plainte", "D'informer uniquement la famille"], correct: 1,
    explication: "La loi impose une information du patient (ou de ses ayants droit) sur tout dommage associé aux soins : information loyale, claire et appropriée sur les circonstances et les conséquences. C'est une obligation déontologique et un facteur de confiance.", ref: "Code de la santé publique - droits du patient", diff: 2 },

  { ueId: "4.5", q: "Le double contrôle indépendant est particulièrement recommandé pour :", options: ["La distribution des repas", "L'administration des médicaments à haut risque (insuline, anticoagulants, KCl)", "La prise de la température", "Le changement des draps"], correct: 1,
    explication: "Le double contrôle (deux soignants vérifiant indépendamment dose, produit et calcul) est recommandé pour les médicaments à haut risque comme l'insuline, les anticoagulants ou le KCl, où une erreur peut être grave voire létale.", ref: "OMEDIT - Médicaments à risque", diff: 3 },
];

export const flashcards = [
  { ueId: "4.5", recto: "Que signifie EIGS ?", verso: "Événement Indésirable Grave associé aux Soins (décès, pronostic vital engagé, déficit fonctionnel permanent...). Déclaration obligatoire à l'ARS." },
  { ueId: "4.5", recto: "Comment calcule-t-on la criticité d'un risque ?", verso: "Criticité = Fréquence (probabilité) × Gravité. Elle sert à hiérarchiser les risques." },
  { ueId: "4.5", recto: "Quelles sont les 5 B de l'administration médicamenteuse ?", verso: "Bon patient, Bon médicament, Bonne dose, Bonne voie, Bon moment (+ bonne traçabilité)." },
  { ueId: "4.5", recto: "Approche a priori vs a posteriori en gestion des risques ?", verso: "A priori = anticipation préventive (cartographie, AMDEC, check-list). A posteriori = analyse après l'événement (RMM, CREX, ALARM)." },
  { ueId: "4.5", recto: "Que montre le modèle du fromage suisse de Reason ?", verso: "Un accident résulte de l'alignement de défaillances (erreurs patentes + latentes) traversant les barrières de défense. Analyse systémique, pas individuelle." },
  { ueId: "4.5", recto: "Qu'est-ce qu'une culture juste de sécurité ?", verso: "Distinguer l'erreur (non blâmable) de la faute délibérée, favoriser le signalement non punitif pour apprendre des erreurs." },
  { ueId: "4.5", recto: "Cite 3 vigilances sanitaires.", verso: "Pharmacovigilance (médicaments), Hémovigilance (transfusion), Matériovigilance (dispositifs), Identitovigilance (identité), Infectiovigilance." },
  { ueId: "4.5", recto: "Qu'est-ce qu'un « never event » ?", verso: "Événement indésirable grave et évitable qui ne devrait jamais survenir : erreur de côté en chirurgie, erreur de médicament à haut risque, oubli de corps étranger." },
  { ueId: "4.5", recto: "À quoi sert la méthode ALARM ?", verso: "Rechercher les causes racines d'un EI selon 7 familles de facteurs (patient, tâche, équipe, individu, environnement, organisation, institution)." },
  { ueId: "4.5", recto: "Pourquoi le KCl injectable concentré est-il à haut risque ?", verso: "En IV directe non diluée il peut provoquer un arrêt cardiaque. Toujours diluer et perfuser lentement sous surveillance." },
  { ueId: "4.5", recto: "Qui pilote la certification des établissements de santé ?", verso: "La HAS (Haute Autorité de Santé), via une évaluation externe périodique de la qualité et de la sécurité des soins." },
  { ueId: "4.5", recto: "Qu'est-ce qu'un presque-accident (near miss) ?", verso: "Erreur interceptée avant d'atteindre le patient. Son signalement révèle une faille sans dommage et prévient un futur accident." },
  { ueId: "4.5", recto: "Combien de volets pour la déclaration d'un EIGS et dans quels délais ?", verso: "2 volets : volet 1 initial sans délai (faits), volet 2 sous 3 mois (analyse des causes + plan d'actions)." },
  { ueId: "4.5", recto: "Pourquoi appliquer le principe « ne pas interrompre » ?", verso: "Les interruptions de tâche sont une cause majeure d'erreur médicamenteuse. On prépare un patient à la fois, sans interruption." },
  { ueId: "4.5", recto: "Pour quels médicaments le double contrôle indépendant est-il recommandé ?", verso: "Médicaments à haut risque : insuline, anticoagulants (héparine, AVK, AOD), KCl, chimiothérapies, stupéfiants." },
];
