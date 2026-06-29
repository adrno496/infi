// UE 6.2 — Anglais médical et professionnel (Méthodes de travail, S1-S6). Pack seed.
export const fiches = [
  {
    id: "f_6_2_vocabulaire_clinique", ueId: "6.2", type: "cours",
    titre: "Vocabulaire clinique de base (Basic clinical vocabulary)",
    resume: "Lexique anglais essentiel du corps, des constantes et des symptômes pour la pratique infirmière.",
    tags: ["vocabulaire", "anatomy", "symptoms", "vital signs"],
    html: `
      <p>L'anglais médical mobilise un vocabulaire technique précis. Beaucoup de termes ont une racine <strong>gréco-latine</strong> commune au français, ce qui facilite la compréhension (<em>cognates</em>).</p>
      <h3>Les constantes vitales — Vital signs</h3>
      <table class="tbl">
        <tr><th>Français</th><th>Anglais</th></tr>
        <tr><td>Fréquence cardiaque</td><td>Heart rate (HR) / Pulse</td></tr>
        <tr><td>Tension artérielle</td><td>Blood pressure (BP)</td></tr>
        <tr><td>Fréquence respiratoire</td><td>Respiratory rate (RR)</td></tr>
        <tr><td>Température</td><td>Temperature</td></tr>
        <tr><td>Saturation en oxygène</td><td>Oxygen saturation (SpO₂)</td></tr>
        <tr><td>Douleur</td><td>Pain</td></tr>
      </table>
      <h3>Symptômes fréquents — Common symptoms</h3>
      <ul>
        <li><span class="key" data-term="pain">Pain</span> — douleur ; <strong>sharp</strong> (aiguë), <strong>dull</strong> (sourde), <strong>throbbing</strong> (pulsatile).</li>
        <li><strong>Shortness of breath</strong> / <strong>breathlessness</strong> — essoufflement, dyspnée.</li>
        <li><strong>Dizziness</strong> — vertiges ; <strong>nausea</strong> — nausées.</li>
        <li><strong>Swelling</strong> — gonflement, œdème ; <strong>rash</strong> — éruption cutanée.</li>
        <li><strong>Fever</strong> — fièvre ; <strong>chills</strong> — frissons ; <strong>cough</strong> — toux.</li>
      </ul>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Les faux-amis à retenir : <strong>"to be sensible"</strong> = être raisonnable (pas « sensible » = sensitive) ; <strong>"a drug"</strong> = un médicament autant qu'une drogue ; <strong>"to attend"</strong> = assister à (pas « attendre » = to wait).</div>
      <div class="callout"><div class="callout-t">En pratique</div>En soins, on demande la douleur avec : <em>"Can you rate your pain on a scale from 0 to 10?"</em> (échelle de 0 à 10).</div>
    `,
    refs: ["UE 6.2"],
  },
  {
    id: "f_6_2_communication_patient", ueId: "6.2", type: "cours",
    titre: "Communiquer avec le patient en anglais (Patient communication)",
    resume: "Phrases types et registre adapté pour l'accueil, l'entretien et les soins en anglais.",
    tags: ["communication", "phrases", "accueil", "entretien"],
    html: `
      <p>La communication soignant-patient en anglais privilégie un registre <strong>poli et rassurant</strong>. On utilise volontiers les formes modales (<em>could, would, may</em>) pour atténuer une demande.</p>
      <h3>Accueil et identification — Greeting</h3>
      <ul>
        <li><em>"Hello, my name is… I am your nurse today."</em></li>
        <li><em>"Could you tell me your full name and date of birth, please?"</em></li>
        <li><em>"How are you feeling today?"</em> — Comment vous sentez-vous aujourd'hui ?</li>
      </ul>
      <h3>Recueil de la plainte — Taking a history</h3>
      <ul>
        <li><em>"What seems to be the problem?"</em> / <em>"What brings you in today?"</em></li>
        <li><em>"Where does it hurt?"</em> — Où avez-vous mal ?</li>
        <li><em>"When did it start?"</em> — Quand cela a-t-il commencé ?</li>
        <li><em>"Do you have any allergies?"</em> — Avez-vous des allergies ?</li>
      </ul>
      <h3>Pendant le soin — During care</h3>
      <ul>
        <li><em>"I am going to take your blood pressure."</em></li>
        <li><em>"This might sting a little / You may feel a small prick."</em> — Cela peut piquer un peu.</li>
        <li><em>"Take a deep breath, please."</em> — Respirez profondément.</li>
        <li><em>"Let me know if you feel any discomfort."</em></li>
      </ul>
      <div class="callout warn"><div class="callout-t">Piège fréquent</div>Éviter le jargon : préférer <strong>"high blood pressure"</strong> à <em>hypertension</em> avec un patient, et <strong>"heart attack"</strong> à <em>myocardial infarction</em>.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Pour structurer un interrogatoire de douleur : <strong>SOCRATES</strong> — Site, Onset, Character, Radiation, Associations, Time course, Exacerbating/relieving, Severity.</div>
    `,
    refs: ["UE 6.2"],
  },
  {
    id: "f_6_2_lecture_articles", ueId: "6.2", type: "cours",
    titre: "Lire un article scientifique en anglais (Reading research)",
    resume: "Méthode pour exploiter la littérature professionnelle anglophone et sa structure IMRAD.",
    tags: ["lecture", "IMRAD", "abstract", "recherche"],
    html: `
      <p>L'anglais est la langue de référence de la recherche en santé. Savoir lire un <strong>article scientifique</strong> permet d'appuyer sa pratique sur des données probantes (<em>evidence-based practice</em>).</p>
      <h3>La structure IMRAD</h3>
      <table class="tbl">
        <tr><th>Section</th><th>Contenu</th></tr>
        <tr><td><strong>Introduction</strong></td><td>Contexte, problématique, objectif (<em>aim</em>).</td></tr>
        <tr><td><strong>Methods</strong></td><td>Population, protocole, outils de mesure.</td></tr>
        <tr><td><strong>Results</strong></td><td>Résultats chiffrés, tableaux, figures.</td></tr>
        <tr><td><strong>(And) Discussion</strong></td><td>Interprétation, limites (<em>limitations</em>), conclusion.</td></tr>
      </table>
      <p>Le <strong>« And »</strong> de IMRAD est une simple conjonction reliant <em>Results</em> et <em>Discussion</em> : ce n'est pas une section à part entière.</p>
      <h3>L'abstract — le résumé</h3>
      <p>L'<span class="key" data-term="abstract">abstract</span> est le résumé structuré en tête d'article. Le lire en premier permet de juger la pertinence d'une source avant lecture complète.</p>
      <h3>Mots-clés utiles</h3>
      <ul>
        <li><strong>Background</strong> — contexte ; <strong>aim / objective</strong> — objectif.</li>
        <li><strong>Sample</strong> — échantillon ; <strong>randomized controlled trial (RCT)</strong> — essai randomisé contrôlé.</li>
        <li><strong>Findings</strong> — résultats ; <strong>outcome</strong> — critère de jugement / résultat.</li>
        <li><strong>Evidence</strong> — preuve, donnée probante ; <strong>guidelines</strong> — recommandations.</li>
        <li><strong>Peer-reviewed</strong> — relu par les pairs (gage de qualité).</li>
      </ul>
      <div class="callout"><div class="callout-t">En pratique</div>Stratégie de lecture rapide : <strong>Title → Abstract → Conclusion</strong>, puis figures, avant d'approfondir Methods et Results si l'article est pertinent.</div>
    `,
    refs: ["UE 6.2"],
  },
  {
    id: "f_6_2_abreviations_medicaments", ueId: "6.2", type: "cours",
    titre: "Abréviations et médicaments en anglais (Abbreviations & drugs)",
    resume: "Principales abréviations cliniques anglaises et vocabulaire des voies et formes médicamenteuses.",
    tags: ["abréviations", "drugs", "posologie", "voies"],
    html: `
      <p>La documentation infirmière anglophone utilise de nombreuses <strong>abréviations</strong>, souvent issues du latin. Les connaître évite les erreurs d'administration.</p>
      <h3>Abréviations courantes</h3>
      <table class="tbl">
        <tr><th>Abréviation</th><th>Signification</th></tr>
        <tr><td>PRN (pro re nata)</td><td>Si besoin</td></tr>
        <tr><td>BID / TID / QID</td><td>2x / 3x / 4x par jour</td></tr>
        <tr><td>OD / OM / ON</td><td>1x/jour / le matin / le soir</td></tr>
        <tr><td>NPO (nil per os)</td><td>À jeun, rien par la bouche</td></tr>
        <tr><td>IV / IM / SC / PO</td><td>Intraveineux / intramusculaire / sous-cutané / per os</td></tr>
        <tr><td>NKDA</td><td>No known drug allergies (aucune allergie connue)</td></tr>
      </table>
      <h3>Formes et voies — Forms and routes</h3>
      <ul>
        <li><strong>Tablet</strong> — comprimé ; <strong>capsule</strong> — gélule ; <strong>liquid / syrup</strong> — sirop.</li>
        <li><strong>Injection</strong> — injection ; <strong>drip / infusion</strong> — perfusion.</li>
        <li><strong>Patch</strong> — patch ; <strong>ointment / cream</strong> — pommade / crème ; <strong>drops</strong> — gouttes.</li>
        <li><strong>Dose</strong> — dose ; <strong>side effect</strong> — effet indésirable ; <strong>overdose</strong> — surdosage.</li>
      </ul>
      <div class="callout warn"><div class="callout-t">Piège fréquent</div>Attention aux abréviations ambiguës : <strong>OD</strong> peut signifier "once daily" ou "oculus dexter" (œil droit). En cas de doute, ne jamais administrer sans clarification.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Les 5 droits de l'administration en anglais : <strong>Right patient, Right drug, Right dose, Right route, Right time</strong> (les « 5 Rights »).</div>
    `,
    refs: ["UE 6.2"],
  },
];

export const qcm = [
  { ueId: "6.2", q: "Que signifie l'abréviation 'BP' dans un dossier de soins anglophone ?",
    options: ["Body parts", "Blood pressure", "Breathing pattern", "Blood platelets"], correct: 1,
    explication: "BP signifie 'Blood pressure', soit la tension (pression) artérielle. C'est l'une des constantes vitales de base.", ref: "UE 6.2", diff: 1 },

  { ueId: "6.2", q: "Comment traduit-on 'shortness of breath' ?",
    options: ["Une toux", "Un essoufflement / une dyspnée", "Une douleur thoracique", "Des vertiges"], correct: 1,
    explication: "'Shortness of breath' (ou breathlessness) désigne l'essoufflement, c'est-à-dire la dyspnée. La douleur thoracique se dit 'chest pain'.", ref: "UE 6.2", diff: 1 },

  { ueId: "6.2", q: "L'abréviation 'NPO' (nil per os) indique que le patient :",
    options: ["Doit rester à jeun", "Peut manger normalement", "Doit boire abondamment", "A une allergie connue"], correct: 0,
    explication: "NPO vient du latin 'nil per os' (rien par la bouche) : le patient doit rester à jeun, par exemple avant une intervention.", ref: "UE 6.2", diff: 2 },

  { ueId: "6.2", q: "Que veut dire l'abréviation 'PRN' sur une prescription ?",
    options: ["À heure fixe", "Si besoin", "Par voie intraveineuse", "Une fois par jour"], correct: 1,
    explication: "PRN ('pro re nata') signifie 'si besoin', c'est-à-dire une administration conditionnée à un symptôme (ex. douleur).", ref: "UE 6.2", diff: 2 },

  { ueId: "6.2", q: "Le faux-ami 'a drug' se traduit le plus souvent par :",
    options: ["Une drogue uniquement", "Un médicament (ou une substance/drogue)", "Une ordonnance", "Une seringue"], correct: 1,
    explication: "En anglais médical, 'drug' désigne d'abord un médicament. C'est un faux-ami classique : il ne se limite pas au sens péjoratif de 'drogue'.", ref: "UE 6.2", diff: 2 },

  { ueId: "6.2", q: "Quelle phrase est adaptée pour demander au patient d'évaluer sa douleur ?",
    options: ["Are you sensible?", "Can you rate your pain from 0 to 10?", "Do you attend the doctor?", "Are you actually sick?"], correct: 1,
    explication: "'Can you rate your pain from 0 to 10?' permet d'évaluer la douleur (équivalent de l'EVA/EN). Les autres contiennent des faux-amis ou sont inadaptées.", ref: "UE 6.2", diff: 1 },

  { ueId: "6.2", q: "Que signifie l'acronyme 'IMRAD' qui structure un article scientifique ?",
    options: ["Introduction, Methods, Results, And, Discussion", "Index, Method, Review, Abstract, Data", "Introduction, Material, Report, Analysis, Data", "Idea, Means, Research, Aim, Decision"], correct: 0,
    explication: "IMRAD : Introduction, Methods, Results And Discussion. C'est la structure standard d'un article de recherche en santé.", ref: "UE 6.2", diff: 2 },

  { ueId: "6.2", q: "Dans un article scientifique, l'abstract est :",
    options: ["La bibliographie", "Le résumé structuré en tête d'article", "Le tableau de résultats", "La déclaration de conflit d'intérêts"], correct: 1,
    explication: "L'abstract est le résumé synthétique placé au début de l'article ; on le lit en premier pour juger la pertinence de la source.", ref: "UE 6.2", diff: 1 },

  { ueId: "6.2", q: "Le terme 'evidence-based practice' désigne :",
    options: ["Une pratique fondée sur l'expérience seule", "Une pratique fondée sur des données probantes", "Une pratique fondée sur l'intuition", "Une pratique réservée aux médecins"], correct: 1,
    explication: "L'evidence-based practice (pratique fondée sur les preuves) appuie les soins sur les meilleures données scientifiques disponibles, l'expertise et les préférences du patient.", ref: "UE 6.2", diff: 2 },

  { ueId: "6.2", q: "Que signifie 'RCT' (randomized controlled trial) ?",
    options: ["Étude de cas", "Essai randomisé contrôlé", "Revue de littérature", "Enquête d'opinion"], correct: 1,
    explication: "Le RCT est l'essai randomisé contrôlé, considéré comme une méthode de référence pour évaluer l'efficacité d'une intervention.", ref: "UE 6.2", diff: 3 },

  { ueId: "6.2", q: "Une voie d'administration notée 'SC' correspond à :",
    options: ["Sous-cutanée", "Intraveineuse", "Per os", "Intramusculaire"], correct: 0,
    explication: "SC = sous-cutané (subcutaneous). IV = intraveineux, IM = intramusculaire, PO = per os (par la bouche).", ref: "UE 6.2", diff: 1 },

  { ueId: "6.2", q: "Le faux-ami 'to attend (a meeting)' signifie :",
    options: ["Attendre", "Assister à", "Tendre", "Atteindre"], correct: 1,
    explication: "'To attend' veut dire assister à / être présent, et non 'attendre' (= to wait). C'est un faux-ami fréquent.", ref: "UE 6.2", diff: 2 },

  { ueId: "6.2", q: "Comment dit-on 'Respirez profondément' à un patient anglophone ?",
    options: ["Hold your breath", "Take a deep breath", "Stop breathing", "Breathe out slowly only"], correct: 1,
    explication: "'Take a deep breath' = respirez profondément. 'Hold your breath' = retenez votre respiration.", ref: "UE 6.2", diff: 1 },

  { ueId: "6.2", q: "Le terme anglais 'swelling' désigne :",
    options: ["Une rougeur", "Un gonflement / œdème", "Une démangeaison", "Une fièvre"], correct: 1,
    explication: "'Swelling' signifie gonflement ou œdème. La démangeaison se dit 'itching', la rougeur 'redness'.", ref: "UE 6.2", diff: 1 },

  { ueId: "6.2", q: "Que signifie l'abréviation 'NKDA' dans un dossier infirmier ?",
    options: ["Aucune allergie médicamenteuse connue", "Pas de signe vital relevé", "Patient à jeun", "Ne pas réanimer"], correct: 0,
    explication: "NKDA = 'No Known Drug Allergies' : le patient n'a aucune allergie médicamenteuse connue.", ref: "UE 6.2", diff: 2 },

  { ueId: "6.2", q: "Dans le moyen mnémotechnique SOCRATES pour la douleur, le 'O' correspond à :",
    options: ["Outcome", "Onset (début)", "Oxygen", "Origin only"], correct: 1,
    explication: "Dans SOCRATES, O = Onset, le mode et le moment de début de la douleur. Cet outil structure l'interrogatoire de la douleur.", ref: "UE 6.2", diff: 3 },

  { ueId: "6.2", q: "Une prescription notée 'TID' signifie :",
    options: ["Une fois par jour", "Deux fois par jour", "Trois fois par jour", "Au coucher", ], correct: 2,
    explication: "TID ('ter in die') = trois fois par jour. BID = deux fois, QID = quatre fois par jour.", ref: "UE 6.2", diff: 2 },

  { ueId: "6.2", q: "Le mot 'guidelines' dans la littérature professionnelle désigne :",
    options: ["Des lignes directrices / recommandations", "Des effets indésirables", "Des contre-indications uniquement", "Un protocole de recherche"], correct: 0,
    explication: "'Guidelines' = recommandations / lignes directrices de bonne pratique, qui encadrent les décisions de soin.", ref: "UE 6.2", diff: 2 },

  { ueId: "6.2", q: "Lorsqu'on dit à un patient 'This might sting a little', on l'informe que :",
    options: ["Cela va le faire dormir", "Cela peut piquer un peu", "Cela va le guérir", "Cela ne provoque rien"], correct: 1,
    explication: "'This might sting a little' = cela peut piquer un peu : phrase d'anticipation avant une injection ou un soin légèrement douloureux.", ref: "UE 6.2", diff: 1 },

  { ueId: "6.2", q: "Pour sécuriser l'administration, les '5 Rights' incluent :",
    options: ["Right patient, drug, dose, route, time", "Right name, age, weight, room, bed", "Right doctor, nurse, ward, shift, file", "Right color, shape, size, taste, smell"], correct: 0,
    explication: "Les 5 Rights : bon patient, bon médicament, bonne dose, bonne voie, bon moment. C'est un repère de sécurité de l'administration.", ref: "UE 6.2", diff: 2 },

  { ueId: "6.2", q: "Le terme 'peer-reviewed' appliqué à un article signifie :",
    options: ["Relu et validé par des pairs experts", "Écrit par un seul auteur", "Publié sans relecture", "Réservé aux étudiants"], correct: 0,
    explication: "'Peer-reviewed' signifie que l'article a été évalué par des pairs (experts du domaine) avant publication : c'est un gage de qualité scientifique.", ref: "UE 6.2", diff: 2 },

  { ueId: "6.2", q: "Comment traduit-on 'side effect' ?",
    options: ["Effet principal", "Effet indésirable / secondaire", "Effet placebo", "Effet immédiat"], correct: 1,
    explication: "'Side effect' = effet indésirable ou secondaire d'un médicament, à distinguer de l'effet thérapeutique recherché.", ref: "UE 6.2", diff: 1 },
];

export const flashcards = [
  { ueId: "6.2", recto: "Que signifie 'BP' ?", verso: "Blood pressure : la tension (pression) artérielle." },
  { ueId: "6.2", recto: "Comment dit-on 'fréquence cardiaque' en anglais ?", verso: "Heart rate (HR) ou pulse." },
  { ueId: "6.2", recto: "Traduire 'shortness of breath'.", verso: "Essoufflement / dyspnée." },
  { ueId: "6.2", recto: "Que signifie l'abréviation 'NPO' (nil per os) ?", verso: "À jeun : rien par la bouche." },
  { ueId: "6.2", recto: "Que veut dire 'PRN' sur une prescription ?", verso: "Pro re nata : si besoin." },
  { ueId: "6.2", recto: "Signification de l'acronyme IMRAD ?", verso: "Introduction, Methods, Results And Discussion : structure d'un article scientifique." },
  { ueId: "6.2", recto: "Qu'est-ce qu'un 'abstract' ?", verso: "Le résumé structuré placé en tête d'un article ; à lire en premier." },
  { ueId: "6.2", recto: "Que signifie 'evidence-based practice' ?", verso: "Pratique fondée sur des données probantes (preuves scientifiques)." },
  { ueId: "6.2", recto: "Que signifie 'RCT' ?", verso: "Randomized controlled trial : essai randomisé contrôlé." },
  { ueId: "6.2", recto: "Voies : IV, IM, SC, PO ?", verso: "Intraveineuse, intramusculaire, sous-cutanée, per os." },
  { ueId: "6.2", recto: "Faux-ami : que signifie 'to attend' ?", verso: "Assister à / être présent (et non 'attendre' = to wait)." },
  { ueId: "6.2", recto: "Comment dire 'Respirez profondément' ?", verso: "Take a deep breath." },
  { ueId: "6.2", recto: "Que signifie 'NKDA' ?", verso: "No Known Drug Allergies : aucune allergie médicamenteuse connue." },
  { ueId: "6.2", recto: "Que veulent dire BID, TID, QID ?", verso: "Deux, trois et quatre fois par jour." },
  { ueId: "6.2", recto: "Quels sont les 5 Rights de l'administration ?", verso: "Right patient, drug, dose, route, time (patient, médicament, dose, voie, moment)." },
  { ueId: "6.2", recto: "Que signifie 'side effect' ?", verso: "Effet indésirable / secondaire." },
  { ueId: "6.2", recto: "Que signifie 'peer-reviewed' ?", verso: "Relu et validé par des pairs experts avant publication." },
  { ueId: "6.2", recto: "Que recouvre l'acronyme SOCRATES (douleur) ?", verso: "Site, Onset, Character, Radiation, Associations, Time, Exacerbating/relieving, Severity." },
];
