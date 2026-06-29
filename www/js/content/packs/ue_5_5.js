// UE 5.5 — Mise en œuvre des thérapeutiques et coordination des soins (Intégration, S5). Pack de révision.

export const fiches = [
  {
    id: "f_5_5_coordination", ueId: "5.5", type: "cours",
    titre: "Coordination des soins et continuité du parcours",
    resume: "Organiser, planifier et articuler les interventions des professionnels autour d'un projet de soins cohérent.",
    tags: ["coordination", "parcours de soins", "pluridisciplinarité", "continuité"],
    html: `
      <p>La <strong>coordination des soins</strong> consiste à organiser et synchroniser les interventions des différents professionnels et structures autour de la personne, pour garantir la <strong>continuité</strong>, la <strong>sécurité</strong> et la <strong>cohérence</strong> du parcours.</p>
      <h3>Les acteurs de la coordination</h3>
      <ul>
        <li><strong>Intra-hospitalier</strong> : médecin, IDE, aide-soignant, kiné, ergothérapeute, diététicien, assistant social, pharmacien.</li>
        <li><strong>Ville-hôpital</strong> : médecin traitant, IDE libéral, HAD, SSIAD, réseaux de santé, pharmacien d'officine.</li>
        <li>L'<span class="key" data-term="infirmier de coordination">infirmier de coordination</span> assure le lien entre les acteurs et le suivi du projet.</li>
      </ul>
      <h3>Outils de la coordination</h3>
      <ul>
        <li>Le <strong>projet de soins personnalisé</strong> et le <strong>projet de vie</strong>.</li>
        <li>Les <span class="key" data-term="transmissions ciblées">transmissions ciblées</span> (cible / données / actions / résultats).</li>
        <li>La <strong>fiche de liaison</strong> et la <strong>lettre de liaison de sortie</strong> (obligatoire le jour de la sortie).</li>
        <li>Les <strong>réunions de concertation pluridisciplinaire (RCP)</strong> et staffs.</li>
        <li>Le <strong>dossier patient informatisé</strong> et le DMP.</li>
      </ul>
      <div class="callout"><div class="callout-t">En pratique</div>Anticiper la sortie dès l'entrée : évaluer l'autonomie, l'entourage, le domicile, organiser le matériel et les relais (IDE libéral, HAD). C'est la <strong>préparation de la sortie</strong>.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« <em>Qui fait Quoi, Quand, Comment, Où</em> » : les 5 questions de toute coordination efficace.</div>
    `,
    refs: ["UE 5.5"],
  },
  {
    id: "f_5_5_circuit_medicament", ueId: "5.5", type: "cours",
    titre: "Circuit du médicament et règles d'administration",
    resume: "De la prescription à la surveillance : sécuriser chaque étape pour prévenir l'erreur médicamenteuse.",
    tags: ["circuit du médicament", "administration", "5 B", "sécurité", "erreur médicamenteuse"],
    html: `
      <p>Le <strong>circuit du médicament</strong> comporte quatre grandes étapes, chacune source potentielle d'erreur : <strong>prescription → dispensation → administration → surveillance</strong>.</p>
      <h3>Les étapes</h3>
      <table class="tbl">
        <tr><th>Étape</th><th>Acteur</th><th>Point clé</th></tr>
        <tr><td>Prescription</td><td>Médecin</td><td>Écrite, datée, signée, identifiée</td></tr>
        <tr><td>Dispensation</td><td>Pharmacien (PUI)</td><td>Analyse pharmaceutique, délivrance</td></tr>
        <tr><td>Administration</td><td>IDE</td><td>Préparation extemporanée, contrôle</td></tr>
        <tr><td>Surveillance</td><td>IDE / Médecin</td><td>Efficacité, effets indésirables</td></tr>
      </table>
      <h3>La règle des 5 B (voire 7 B)</h3>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo — les 5 B</div>le <strong>B</strong>on patient, le <strong>B</strong>on médicament, la <strong>B</strong>onne dose, la <strong>B</strong>onne voie, le <strong>B</strong>on moment. On ajoute souvent : la <strong>B</strong>onne information et la <strong>B</strong>onne traçabilité.</div>
      <div class="callout warn"><div class="callout-t">Règle d'or</div>L'IDE qui administre est l'IDE qui prépare et qui trace. Pas d'administration sans prescription écrite (sauf protocole d'urgence). Préparation <strong>extemporanée</strong> (juste avant), jamais à l'avance.</div>
      <div class="callout"><div class="callout-t">Erreur médicamenteuse</div>Tout écart évitable doit être déclaré (déclaration d'<span class="key" data-term="événement indésirable">événement indésirable</span>) dans une logique de culture de sécurité non punitive.</div>
    `,
    refs: ["UE 5.5"],
  },
  {
    id: "f_5_5_surveillance_therapeutique", ueId: "5.5", type: "cours",
    titre: "Surveillance thérapeutique et gestion des effets indésirables",
    resume: "Évaluer l'efficacité d'un traitement, dépister et tracer les effets indésirables, déclarer en pharmacovigilance.",
    tags: ["surveillance", "effet indésirable", "pharmacovigilance", "efficacité", "iatrogénie"],
    html: `
      <p>Après l'administration, l'IDE assure la <strong>surveillance thérapeutique</strong> : vérifier l'<strong>efficacité</strong> attendue et dépister les <strong>effets indésirables</strong>.</p>
      <h3>Surveiller l'efficacité</h3>
      <ul>
        <li>Cliniquement : douleur, fièvre, TA, glycémie, diurèse selon le traitement.</li>
        <li>Biologiquement : INR (AVK), dosages, ionogramme, fonction rénale et hépatique.</li>
      </ul>
      <h3>Dépister les effets indésirables</h3>
      <ul>
        <li><span class="key" data-term="effet indésirable">Effet indésirable</span> : réaction nocive et non voulue à un médicament.</li>
        <li><span class="key" data-term="iatrogénie">Iatrogénie médicamenteuse</span> : conséquences néfastes liées aux soins, fréquente chez la personne âgée polymédiquée.</li>
        <li>Réaction allergique / anaphylaxie : urticaire, œdème, bronchospasme, choc.</li>
      </ul>
      <div class="callout warn"><div class="callout-t">Pharmacovigilance</div>Tout effet indésirable grave ou inattendu doit être <strong>déclaré</strong> au Centre Régional de Pharmacovigilance (CRPV). La déclaration est ouverte aux professionnels ET aux patients.</div>
      <div class="callout"><div class="callout-t">Personne âgée</div>Penser à la déprescription, à l'observance, aux interactions et à l'adaptation à la fonction rénale (clairance de la créatinine).</div>
    `,
    refs: ["UE 5.5"],
  },
  {
    id: "f_5_5_voies_administration", ueId: "5.5", type: "cours",
    titre: "Voies d'administration et calculs de dose",
    resume: "Choisir la bonne voie, maîtriser débits et conversions pour une administration sûre.",
    tags: ["voies d'administration", "calcul de dose", "débit", "perfusion", "injection"],
    html: `
      <p>Le choix de la <strong>voie d'administration</strong> dépend de la molécule, de l'urgence, de l'état du patient et de la prescription.</p>
      <h3>Principales voies</h3>
      <table class="tbl">
        <tr><th>Voie</th><th>Particularité</th></tr>
        <tr><td>Orale (PO)</td><td>Simple, lente, soumise au premier passage hépatique</td></tr>
        <tr><td>Sous-cutanée (SC)</td><td>Résorption lente (insuline, HBPM)</td></tr>
        <tr><td>Intramusculaire (IM)</td><td>Résorption assez rapide ; à éviter sous anticoagulant ou si troubles de l'hémostase</td></tr>
        <tr><td>Intraveineuse (IV)</td><td>Effet immédiat, biodisponibilité 100 %</td></tr>
      </table>
      <h3>Calculs essentiels</h3>
      <ul>
        <li><strong>Débit (gouttes/min)</strong> = (Volume en mL × 20) / (durée en min), pour un perfuseur à 20 gouttes/mL.</li>
        <li><strong>Débit (mL/h)</strong> = Volume (mL) / durée (h).</li>
        <li><strong>Dose à prélever</strong> = (dose prescrite × volume de la solution) / dose totale du flacon.</li>
      </ul>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo — conversions</div>1 g = 1000 mg ; 1 mg = 1000 µg ; 1 L = 1000 mL. « Pour passer à plus petit, on multiplie par 1000 ».</div>
      <div class="callout warn"><div class="callout-t">Sécurité IV</div>Vérifier la compatibilité, le bon abord, l'absence de signe de veinite ; toujours un double contrôle pour les médicaments à risque (insuline, anticoagulants, KCl, chimiothérapies).</div>
    `,
    refs: ["UE 5.5"],
  },
];

export const qcm = [
  { ueId: "5.5", q: "Que comprend la règle dite des « 5 B » lors de l'administration d'un médicament ?",
    options: ["Bon patient, bon médicament, bonne dose, bonne voie, bon moment", "Bon médecin, bon patient, bon dossier, bonne chambre, bon horaire", "Bon flacon, bon chariot, bonne seringue, bon gant, bon masque", "Bonne ordonnance, bonne signature, bon stock, bon prix, bon délai"],
    correct: 0,
    explication: "Les 5 B sont : le Bon patient, le Bon médicament, la Bonne dose, la Bonne voie et le Bon moment. On y ajoute fréquemment la Bonne information et la Bonne traçabilité (7 B).",
    ref: "UE 5.5", diff: 1 },

  { ueId: "5.5", q: "Quelles sont, dans l'ordre, les quatre grandes étapes du circuit du médicament ?",
    options: ["Dispensation, prescription, surveillance, administration", "Prescription, dispensation, administration, surveillance", "Administration, prescription, dispensation, surveillance", "Prescription, administration, dispensation, surveillance"],
    correct: 1,
    explication: "Le circuit suit l'ordre logique : prescription (médecin) → dispensation (pharmacien) → administration (IDE) → surveillance (efficacité et effets indésirables).",
    ref: "UE 5.5", diff: 1 },

  { ueId: "5.5", q: "La préparation d'un médicament injectable doit être réalisée :",
    options: ["La veille pour gagner du temps", "En début de poste pour tout le service", "De façon extemporanée, juste avant l'administration", "Par l'aide-soignant sous contrôle IDE"],
    correct: 2,
    explication: "La préparation doit être extemporanée (juste avant l'administration) pour des raisons de stabilité et de sécurité. L'IDE qui prépare est l'IDE qui administre et qui trace.",
    ref: "UE 5.5", diff: 1 },

  { ueId: "5.5", q: "Quel document, obligatoire le jour de la sortie, assure la continuité ville-hôpital ?",
    options: ["La lettre de liaison de sortie", "La feuille de température", "Le compte rendu opératoire", "La fiche de poste"],
    correct: 0,
    explication: "La lettre de liaison de sortie est remise au patient et adressée au médecin traitant le jour de la sortie. Elle synthétise l'hospitalisation, les traitements et le suivi à organiser.",
    ref: "UE 5.5", diff: 2 },

  { ueId: "5.5", q: "On souhaite passer 1000 mL de sérum physiologique en 8 heures avec un perfuseur à 20 gouttes/mL. Quel est le débit ?",
    options: ["Environ 21 gouttes/min", "Environ 42 gouttes/min", "Environ 60 gouttes/min", "Environ 125 gouttes/min"],
    correct: 1,
    explication: "Débit = (1000 × 20) / (8 × 60) = 20000 / 480 ≈ 41,7 soit environ 42 gouttes/min. En mL/h cela correspond à 125 mL/h.",
    ref: "UE 5.5", diff: 2 },

  { ueId: "5.5", q: "Quelle voie d'administration offre une biodisponibilité de 100 % et un effet immédiat ?",
    options: ["La voie orale", "La voie intraveineuse", "La voie sous-cutanée", "La voie intramusculaire"],
    correct: 1,
    explication: "La voie IV délivre directement le principe actif dans la circulation : biodisponibilité de 100 % et action immédiate. La voie orale subit le premier passage hépatique.",
    ref: "UE 5.5", diff: 1 },

  { ueId: "5.5", q: "Chez un patient sous anticoagulant, quelle voie est en principe à éviter ?",
    options: ["La voie orale", "La voie sous-cutanée", "La voie intramusculaire", "La voie intraveineuse"],
    correct: 2,
    explication: "La voie intramusculaire est contre-indiquée (ou à éviter) sous anticoagulant en raison du risque d'hématome profond au point d'injection.",
    ref: "UE 5.5", diff: 2 },

  { ueId: "5.5", q: "Quel format structure les transmissions ciblées ?",
    options: ["Problème - Étiologie - Signes (PES)", "Cible - Données - Actions - Résultats", "Subjectif - Objectif - Action - Plan", "Identité - Motif - Antécédents"],
    correct: 1,
    explication: "Les transmissions ciblées suivent le modèle D-A-R autour d'une Cible : Données (observations), Actions (soins réalisés), Résultats (évaluation).",
    ref: "UE 5.5", diff: 2 },

  { ueId: "5.5", q: "Comment convertir 0,5 g en milligrammes ?",
    options: ["5 mg", "50 mg", "500 mg", "5000 mg"],
    correct: 2,
    explication: "1 g = 1000 mg, donc 0,5 g = 500 mg. Pour passer d'une unité plus grande à une plus petite, on multiplie par 1000.",
    ref: "UE 5.5", diff: 1 },

  { ueId: "5.5", q: "Qu'est-ce que l'iatrogénie médicamenteuse ?",
    options: ["L'effet thérapeutique attendu d'un médicament", "Les conséquences néfastes liées à un traitement ou aux soins", "La résistance bactérienne aux antibiotiques", "Le coût des médicaments pour l'hôpital"],
    correct: 1,
    explication: "L'iatrogénie désigne les conséquences néfastes pour la santé liées aux soins ou aux médicaments. Elle est particulièrement fréquente chez la personne âgée polymédiquée.",
    ref: "UE 5.5", diff: 2 },

  { ueId: "5.5", q: "À qui doit être déclaré un effet indésirable grave ou inattendu d'un médicament ?",
    options: ["Au directeur des soins", "Au Centre Régional de Pharmacovigilance (CRPV)", "À l'Ordre des médecins", "À la caisse d'assurance maladie"],
    correct: 1,
    explication: "La pharmacovigilance s'organise autour des CRPV. La déclaration d'un effet indésirable est ouverte aux professionnels de santé comme aux patients.",
    ref: "UE 5.5", diff: 2 },

  { ueId: "5.5", q: "Quel paramètre biologique surveille-t-on en priorité chez un patient sous AVK ?",
    options: ["La glycémie", "L'INR", "La natrémie", "La numération plaquettaire"],
    correct: 1,
    explication: "L'INR mesure l'efficacité et la sécurité d'un traitement par antivitamine K (AVK). La cible usuelle est de 2 à 3 (jusqu'à 3-4,5 pour certaines valves mécaniques).",
    ref: "UE 5.5", diff: 2 },

  { ueId: "5.5", q: "Quelle attitude relève d'une « culture de sécurité » face à une erreur médicamenteuse ?",
    options: ["Dissimuler l'erreur pour éviter la sanction", "Déclarer l'événement indésirable dans une logique non punitive", "Sanctionner systématiquement l'IDE concerné", "Ne rien faire si le patient n'a pas eu de conséquence"],
    correct: 1,
    explication: "La culture de sécurité repose sur la déclaration des événements indésirables (y compris les presque-accidents) dans une approche non punitive, afin d'analyser les causes et d'améliorer le système.",
    ref: "UE 5.5", diff: 2 },

  { ueId: "5.5", q: "Quelle structure permet la poursuite de soins techniques complexes au domicile du patient ?",
    options: ["L'EHPAD", "L'HAD (hospitalisation à domicile)", "Le SAMU", "La PMI"],
    correct: 1,
    explication: "L'HAD permet de réaliser au domicile des soins médicaux et paramédicaux continus et coordonnés, comparables à ceux d'un hôpital, évitant ou raccourcissant une hospitalisation conventionnelle.",
    ref: "UE 5.5", diff: 1 },

  { ueId: "5.5", q: "Un flacon contient 1 g d'antibiotique dans 10 mL. La prescription est de 400 mg. Quel volume prélever ?",
    options: ["2 mL", "4 mL", "6 mL", "8 mL"],
    correct: 1,
    explication: "Volume = (dose prescrite × volume total) / dose totale = (400 × 10) / 1000 = 4 mL.",
    ref: "UE 5.5", diff: 2 },

  { ueId: "5.5", q: "Parmi ces médicaments, lequel impose un double contrôle (médicament à haut risque) ?",
    options: ["Le paracétamol per os", "L'insuline IV", "Le sérum physiologique", "Une crème hydratante"],
    correct: 1,
    explication: "L'insuline fait partie des médicaments à haut risque (avec les anticoagulants, le chlorure de potassium, les chimiothérapies) nécessitant un double contrôle indépendant.",
    ref: "UE 5.5", diff: 2 },

  { ueId: "5.5", q: "Quel professionnel réalise l'analyse pharmaceutique de la prescription ?",
    options: ["L'infirmier", "Le pharmacien", "L'aide-soignant", "Le cadre de santé"],
    correct: 1,
    explication: "Le pharmacien (de la PUI) réalise l'analyse pharmaceutique : vérification des doses, interactions, contre-indications, avant la dispensation.",
    ref: "UE 5.5", diff: 1 },

  { ueId: "5.5", q: "La traçabilité de l'administration d'un médicament doit être assurée :",
    options: ["Avant la préparation, pour anticiper", "Par l'IDE qui a réellement administré, juste après le soin", "Par le cadre en fin de journée", "Uniquement en cas d'effet indésirable"],
    correct: 1,
    explication: "La traçabilité est faite par l'IDE qui a administré, immédiatement après le soin. Tracer à l'avance ou pour un soin non réalisé constitue une faute professionnelle.",
    ref: "UE 5.5", diff: 2 },

  { ueId: "5.5", q: "Pourquoi anticiper la sortie d'un patient dès son admission ?",
    options: ["Pour libérer le lit plus vite uniquement", "Pour organiser les relais et garantir la continuité des soins", "Parce que la loi l'interdit après le 1er jour", "Pour réduire le nombre de transmissions"],
    correct: 1,
    explication: "Anticiper la sortie dès l'entrée permet d'évaluer l'autonomie et l'entourage, d'organiser le matériel et les relais (IDE libéral, HAD, SSIAD), assurant une continuité sécurisée du parcours.",
    ref: "UE 5.5", diff: 2 },

  { ueId: "5.5", q: "Quelle voie d'administration assure une résorption lente, utilisée pour l'insuline et les HBPM ?",
    options: ["La voie intraveineuse", "La voie sous-cutanée", "La voie sublinguale", "La voie rectale"],
    correct: 1,
    explication: "La voie sous-cutanée offre une résorption lente et progressive, adaptée à l'insuline et aux héparines de bas poids moléculaire (HBPM).",
    ref: "UE 5.5", diff: 1 },

  { ueId: "5.5", q: "Devant un patient présentant urticaire, œdème du visage et gêne respiratoire après une injection, l'IDE doit d'abord :",
    options: ["Poursuivre l'injection et surveiller", "Arrêter l'administration et alerter le médecin en urgence", "Attendre la fin du tour pour signaler", "Administrer un antalgique"],
    correct: 1,
    explication: "Ces signes évoquent une réaction allergique pouvant évoluer vers l'anaphylaxie. La conduite est d'arrêter immédiatement l'administration, surveiller les fonctions vitales et alerter le médecin sans délai.",
    ref: "UE 5.5", diff: 3 },
];

export const flashcards = [
  { ueId: "5.5", recto: "Quelles sont les 4 étapes du circuit du médicament ?", verso: "Prescription, dispensation, administration, surveillance." },
  { ueId: "5.5", recto: "Que sont les 5 B de l'administration ?", verso: "Bon patient, bon médicament, bonne dose, bonne voie, bon moment." },
  { ueId: "5.5", recto: "Que signifie « préparation extemporanée » ?", verso: "Préparer le médicament juste avant son administration, et non à l'avance." },
  { ueId: "5.5", recto: "Quelle est la règle « préparer / administrer / tracer » ?", verso: "C'est le même IDE qui prépare, administre et trace le médicament." },
  { ueId: "5.5", recto: "Combien de mg dans 1 g ? Combien de µg dans 1 mg ?", verso: "1 g = 1000 mg ; 1 mg = 1000 µg." },
  { ueId: "5.5", recto: "Formule du débit en gouttes/min (perfuseur 20 gtt/mL) ?", verso: "Débit = (Volume en mL × 20) / durée en minutes." },
  { ueId: "5.5", recto: "Quelle voie a une biodisponibilité de 100 % ?", verso: "La voie intraveineuse (IV)." },
  { ueId: "5.5", recto: "Quel paramètre surveille-t-on sous AVK et quelle cible usuelle ?", verso: "L'INR ; cible habituelle de 2 à 3." },
  { ueId: "5.5", recto: "Qu'est-ce que l'iatrogénie médicamenteuse ?", verso: "Les conséquences néfastes pour la santé liées au traitement ou aux soins." },
  { ueId: "5.5", recto: "À qui déclare-t-on un effet indésirable ?", verso: "Au Centre Régional de Pharmacovigilance (CRPV)." },
  { ueId: "5.5", recto: "Que sont les transmissions ciblées (DAR) ?", verso: "Autour d'une Cible : Données, Actions, Résultats." },
  { ueId: "5.5", recto: "Quel document de sortie assure le lien ville-hôpital ?", verso: "La lettre de liaison de sortie, remise le jour de la sortie." },
  { ueId: "5.5", recto: "Que permet l'HAD ?", verso: "Réaliser au domicile des soins complexes, continus et coordonnés, comparables à l'hôpital." },
  { ueId: "5.5", recto: "Cite 3 médicaments à haut risque nécessitant un double contrôle.", verso: "Insuline, anticoagulants, chlorure de potassium (et chimiothérapies)." },
  { ueId: "5.5", recto: "Pourquoi éviter la voie IM sous anticoagulant ?", verso: "Risque d'hématome profond au point d'injection." },
  { ueId: "5.5", recto: "Pourquoi anticiper la sortie dès l'admission ?", verso: "Pour organiser les relais et garantir la continuité et la sécurité du parcours." },
  { ueId: "5.5", recto: "Quelle conduite devant des signes d'allergie après injection ?", verso: "Arrêter l'administration, surveiller les fonctions vitales, alerter le médecin en urgence." },
];
