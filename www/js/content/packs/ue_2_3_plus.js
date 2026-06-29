// UE 2.3+ — Santé, maladie, handicap, douleur, accidents de la vie (complément). Pack de révision.
export const fiches = [
  {
    id: "fx_ue_2_3_plus_douleur", ueId: "2.3", type: "cours",
    titre: "Douleur : mécanismes, types et évaluation infirmière",
    resume: "Physiopathologie, classification (nociceptive, neuropathique, dysfonctionnelle), aiguë vs chronique et outils d'évaluation IDE.",
    tags: ["douleur", "évaluation", "neuropathique", "EVA"],
    html: `
      <h3>Définition</h3>
      <p>L'<strong>IASP</strong> (révision 2020) définit la <span class="key" data-term="douleur">douleur</span> comme « une expérience sensorielle et émotionnelle désagréable associée ou ressemblant à celle associée à une lésion tissulaire réelle ou potentielle ». C'est donc une expérience <strong>subjective</strong> : la référence reste l'auto-évaluation du patient.</p>
      <h3>Mécanismes (étiologie)</h3>
      <ul>
        <li><strong>Nociceptive (par excès de nociception)</strong> : stimulation des nocicepteurs par lésion tissulaire ; voies nerveuses intactes. Ex : fracture, post-opératoire, brûlure. Répond bien aux antalgiques classiques.</li>
        <li><strong>Neuropathique</strong> : lésion ou maladie du système nerveux (périphérique ou central). Décrite en brûlure, décharges électriques, fourmillements, allodynie. Ex : zona, neuropathie diabétique, post-AVC, section nerveuse.</li>
        <li><strong>Nociplastique / dysfonctionnelle</strong> : altération du traitement du message sans lésion identifiable. Ex : fibromyalgie, certaines céphalées.</li>
        <li><strong>Psychogène</strong> : sans substrat lésionnel, diagnostic d'élimination.</li>
      </ul>
      <h3>Aiguë vs chronique</h3>
      <table class="tbl">
        <tr><th>Douleur aiguë</th><th>Douleur chronique</th></tr>
        <tr><td>Signal d'alarme, symptôme protecteur</td><td>Persiste &gt; 3 mois, devient une maladie en soi</td></tr>
        <tr><td>Récente, liée à une cause</td><td>Retentissement physique, psychique, social</td></tr>
        <tr><td>Anxiété au premier plan</td><td>Risque de syndrome dépressif</td></tr>
      </table>
      <h3>Évaluation : rôle propre IDE</h3>
      <p>L'évaluation est un <strong>rôle propre</strong> (décret de compétences). On privilégie l'<strong>auto-évaluation</strong> :</p>
      <ul>
        <li><span class="key" data-term="EVA">EVA</span> (échelle visuelle analogique, réglette), <strong>EN</strong> (échelle numérique 0–10), <strong>EVS</strong> (échelle verbale simple).</li>
        <li>Hétéro-évaluation si communication impossible : <strong>Algoplus</strong> et <strong>ECPA</strong> (personne âgée non communicante), <strong>EVENDOL</strong> et <strong>FLACC</strong> (enfant), <strong>DN4</strong> pour dépister la composante neuropathique.</li>
      </ul>
      <div class="callout"><div class="callout-t">À retenir</div>« La douleur est ce que le patient dit qu'elle est. » On <strong>croit</strong> le patient, on trace l'évaluation initiale ET la réévaluation après antalgique (souvent à H+1 pour les formes orales, plus tôt en IV).</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Le <strong>DN4</strong> : 4 lettres pour « <strong>D</strong>ouleur <strong>N</strong>europathique en 4 questions » (score ≥ 4/10 = neuropathique probable).</div>
    `,
    refs: ["UE 2.3", "IASP 2020", "HAS douleur chronique"],
  },
  {
    id: "fx_ue_2_3_plus_paliers", ueId: "2.3", type: "cours",
    titre: "Antalgiques : paliers OMS et surveillance infirmière",
    resume: "Les 3 paliers de l'OMS, principaux antalgiques, co-antalgiques et surveillance des morphiniques.",
    tags: ["antalgiques", "OMS", "morphine", "surveillance"],
    html: `
      <h3>Les 3 paliers de l'OMS</h3>
      <table class="tbl">
        <tr><th>Palier</th><th>Type</th><th>Exemples</th></tr>
        <tr><td><strong>1</strong></td><td>Non opioïdes</td><td>Paracétamol, AINS, néfopam</td></tr>
        <tr><td><strong>2</strong></td><td>Opioïdes faibles</td><td>Tramadol, codéine, opium (associés au paracétamol)</td></tr>
        <tr><td><strong>3</strong></td><td>Opioïdes forts</td><td>Morphine, oxycodone, fentanyl, hydromorphone</td></tr>
      </table>
      <p>L'escalade se fait selon l'intensité ; on peut associer des <span class="key" data-term="co-antalgique">co-antalgiques</span> (antidépresseurs, antiépileptiques comme la gabapentine/prégabaline pour la douleur neuropathique, corticoïdes, MEOPA pour les soins douloureux).</p>
      <h3>Paracétamol</h3>
      <p>Antalgique/antipyrétique de référence. Dose adulte usuelle : <strong>1 g toutes les 6 heures, sans dépasser 4 g/24 h</strong> (à adapter selon poids et fonction hépatique). Hépatotoxicité en cas de surdosage : antidote = <strong>N-acétylcystéine</strong>.</p>
      <h3>Surveillance des opioïdes forts</h3>
      <ul>
        <li><strong>Efficacité</strong> : réévaluation de la douleur (EN/EVA).</li>
        <li><strong>Tolérance / effets indésirables</strong> : la <span class="key" data-term="dépression respiratoire">dépression respiratoire</span> est le risque grave (surveiller fréquence respiratoire et sédation — échelle de Rudkin). Antidote = <strong>naloxone</strong>.</li>
        <li><strong>Constipation</strong> : effet constant, ne s'épuise pas → laxatif systématique préventif.</li>
        <li>Nausées/vomissements, somnolence, rétention urinaire, prurit.</li>
      </ul>
      <div class="callout"><div class="callout-t">Sécurité</div>Avant d'augmenter un opioïde, on évalue toujours le <strong>couple sédation/fréquence respiratoire</strong>. Une sédation croissante précède la dépression respiratoire : c'est un signe d'alerte.</div>
      <div class="callout"><div class="callout-t">Cadre légal</div>Les opioïdes forts relèvent des <strong>stupéfiants</strong> : prescription sur ordonnance sécurisée, durée limitée, comptabilité et traçabilité rigoureuses (coffre, registre).</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Sous morphine, pensez « <strong>C</strong>onstipation toujours, <strong>S</strong>omnolence à surveiller, <strong>R</strong>espiration à compter » : C-S-R.</div>
    `,
    refs: ["UE 2.3", "OMS paliers antalgiques", "ANSM stupéfiants"],
  },
  {
    id: "fx_ue_2_3_plus_handicap_droits", ueId: "2.3", type: "cours",
    titre: "Annonce, compensation et accompagnement du handicap",
    resume: "Dispositif d'annonce, prestations de compensation (MDPH), et place de l'IDE dans le parcours de vie.",
    tags: ["handicap", "annonce", "compensation", "MDPH"],
    html: `
      <h3>L'annonce du handicap / d'une maladie grave</h3>
      <p>Le <strong>dispositif d'annonce</strong> (issu du Plan cancer puis généralisé) structure l'information du patient : temps médical d'annonce, temps d'accompagnement soignant, accès aux soins de support et articulation avec la médecine de ville.</p>
      <p>Rôle IDE : reformuler, vérifier la compréhension, repérer la sidération, soutenir, orienter — sans se substituer au médecin pour le contenu diagnostique.</p>
      <h3>Compensation par la MDPH</h3>
      <ul>
        <li><span class="key" data-term="PCH">PCH</span> : prestation de compensation du handicap (aides humaines, techniques, aménagement).</li>
        <li><span class="key" data-term="AAH">AAH</span> : allocation aux adultes handicapés (ressource).</li>
        <li><strong>AEEH</strong> : allocation d'éducation de l'enfant handicapé.</li>
        <li><strong>RQTH</strong> : reconnaissance de la qualité de travailleur handicapé.</li>
        <li><strong>CMI</strong> : carte mobilité inclusion (mention invalidité, priorité, stationnement).</li>
      </ul>
      <p>La <strong>CDAPH</strong> (au sein de la MDPH) statue sur ces droits ; l'évaluation s'appuie sur le projet de vie de la personne.</p>
      <h3>Principes d'accompagnement</h3>
      <ul>
        <li><strong>Autodétermination</strong> : la personne reste actrice de ses choix.</li>
        <li><strong>Accessibilité</strong> et <strong>inclusion</strong> (école, emploi, cité) plutôt qu'institutionnalisation systématique.</li>
        <li>Soutien aux <strong>aidants</strong> (droit au répit).</li>
      </ul>
      <div class="callout"><div class="callout-t">À retenir</div>La loi de 2005 pose le droit à <strong>compensation</strong> des conséquences du handicap, quels que soient l'origine et la nature de la déficience. La MDPH en est le guichet unique.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Les sigles MDPH : « <strong>P</strong>our <strong>A</strong>ider, on <strong>R</strong>econnaît et on <strong>C</strong>ompense » → PCH, AAH, RQTH, CMI.</div>
    `,
    refs: ["UE 2.3", "Loi 11 février 2005", "CNSA / MDPH"],
  },
];

export const qcm = [
  { ueId: "2.3", q: "Selon la définition de l'IASP, la douleur est avant tout :", options: ["Un signe clinique objectif mesurable", "Une expérience sensorielle et émotionnelle subjective", "Toujours proportionnelle à la lésion", "Un diagnostic médical"], correct: 1,
    explication: "L'IASP insiste sur le caractère subjectif et émotionnel de la douleur : la référence est l'auto-évaluation du patient, pas une mesure objective.", ref: "IASP 2020", diff: 1 },
  { ueId: "2.3", q: "Quelle douleur est typiquement décrite en « brûlures, décharges électriques, fourmillements » ?", options: ["Nociceptive", "Neuropathique", "Nociplastique", "Psychogène"], correct: 1,
    explication: "Ces descripteurs (brûlure, décharge, paresthésies, allodynie) orientent vers une douleur neuropathique, par lésion du système nerveux. Le DN4 aide au dépistage.", ref: "HAS douleur neuropathique", diff: 1 },
  { ueId: "2.3", q: "Une douleur est dite chronique lorsqu'elle persiste au-delà de :", options: ["1 semaine", "1 mois", "3 mois", "1 an"], correct: 2,
    explication: "Par convention, la douleur chronique persiste ou récidive au-delà de 3 mois ; elle devient une maladie à part entière avec retentissement global.", ref: "HAS douleur chronique", diff: 1 },
  { ueId: "2.3", q: "Quel outil est adapté pour évaluer la douleur d'une personne âgée non communicante ?", options: ["EVA", "Échelle numérique", "Algoplus", "DN4"], correct: 2,
    explication: "Algoplus (et ECPA) sont des échelles d'hétéro-évaluation comportementale pour la personne âgée non communicante. EVA et EN sont des auto-évaluations.", ref: "HAS évaluation douleur", diff: 2 },
  { ueId: "2.3", q: "Le test DN4 permet de :", options: ["Mesurer l'intensité de la douleur", "Dépister une douleur neuropathique", "Évaluer la sédation", "Calculer une dose de morphine"], correct: 1,
    explication: "Le DN4 dépiste la composante neuropathique : un score ≥ 4/10 rend ce mécanisme probable. Il n'évalue pas l'intensité.", ref: "DN4", diff: 2 },
  { ueId: "2.3", q: "Dans la classification OMS des antalgiques, le tramadol appartient au :", options: ["Palier 1", "Palier 2", "Palier 3", "Co-antalgiques"], correct: 1,
    explication: "Le tramadol et la codéine sont des opioïdes faibles, classés au palier 2 de l'OMS. La morphine est au palier 3.", ref: "OMS paliers antalgiques", diff: 1 },
  { ueId: "2.3", q: "La dose maximale usuelle de paracétamol chez l'adulte sans insuffisance hépatique est de :", options: ["2 g/24 h", "3 g/24 h", "4 g/24 h", "6 g/24 h"], correct: 2,
    explication: "La posologie adulte usuelle ne dépasse pas 4 g/24 h (1 g toutes les 6 h), à adapter selon le poids et la fonction hépatique. Au-delà : risque d'hépatotoxicité.", ref: "ANSM paracétamol", diff: 1 },
  { ueId: "2.3", q: "Quel est l'antidote d'un surdosage en paracétamol ?", options: ["Naloxone", "N-acétylcystéine", "Flumazénil", "Vitamine K"], correct: 1,
    explication: "La N-acétylcystéine est l'antidote du paracétamol (restaure le glutathion hépatique). La naloxone est l'antidote des opioïdes.", ref: "ANSM", diff: 2 },
  { ueId: "2.3", q: "L'effet indésirable grave à redouter en priorité sous opioïde fort est :", options: ["La constipation", "La dépression respiratoire", "Le prurit", "La rétention urinaire"], correct: 1,
    explication: "La dépression respiratoire est l'effet potentiellement mortel ; on surveille le couple sédation/fréquence respiratoire. Antidote : naloxone.", ref: "ANSM opioïdes", diff: 1 },
  { ueId: "2.3", q: "Quel effet indésirable des opioïdes ne s'épuise pas et impose un traitement préventif systématique ?", options: ["Les nausées", "La somnolence", "La constipation", "Le prurit"], correct: 2,
    explication: "La constipation sous opioïdes est constante et persiste dans le temps : un laxatif est prescrit de façon systématique et préventive.", ref: "ANSM opioïdes", diff: 2 },
  { ueId: "2.3", q: "L'antidote d'un surdosage en morphine est :", options: ["Le flumazénil", "La naloxone", "La N-acétylcystéine", "L'atropine"], correct: 1,
    explication: "La naloxone est l'antagoniste des récepteurs opioïdes, antidote de la dépression respiratoire morphinique. Le flumazénil est l'antidote des benzodiazépines.", ref: "ANSM", diff: 2 },
  { ueId: "2.3", q: "Avant d'augmenter la dose d'un opioïde, l'IDE évalue en priorité :", options: ["La diurèse", "Le couple sédation / fréquence respiratoire", "La glycémie", "La pression artérielle uniquement"], correct: 1,
    explication: "Une sédation croissante précède la dépression respiratoire. Surveiller ce couple (échelles de sédation type Rudkin + FR) est la sécurité essentielle.", ref: "HAS / ANSM", diff: 2 },
  { ueId: "2.3", q: "La gabapentine et la prégabaline sont utilisées comme co-antalgiques dans la douleur :", options: ["Nociceptive aiguë", "Neuropathique", "Psychogène pure", "Post-opératoire simple"], correct: 1,
    explication: "Ces antiépileptiques sont des co-antalgiques de référence de la douleur neuropathique, comme certains antidépresseurs (amitriptyline, duloxétine).", ref: "HAS douleur neuropathique", diff: 2 },
  { ueId: "2.3", q: "Le MEOPA est principalement utilisé pour :", options: ["L'anesthésie générale", "Les douleurs chroniques au long cours", "L'analgésie des soins douloureux de courte durée", "Le traitement de fond de la migraine"], correct: 2,
    explication: "Le MEOPA (mélange équimolaire oxygène-protoxyde d'azote) procure une analgésie de surface pour les actes douloureux brefs (ponction, pansement, suture).", ref: "ANSM MEOPA", diff: 2 },
  { ueId: "2.3", q: "Les opioïdes forts relèvent de la réglementation des :", options: ["Médicaments en vente libre", "Stupéfiants", "Dispositifs médicaux", "Compléments alimentaires"], correct: 1,
    explication: "Les opioïdes forts sont des stupéfiants : ordonnance sécurisée, durée de prescription limitée, stockage en coffre et traçabilité (registre).", ref: "ANSM stupéfiants", diff: 2 },
  { ueId: "2.3", q: "Selon la loi du 11 février 2005, la personne handicapée a droit à :", options: ["Une hospitalisation systématique", "La compensation des conséquences de son handicap", "Une rente automatique", "Une exonération d'impôt unique"], correct: 1,
    explication: "La loi de 2005 instaure le droit à compensation des conséquences du handicap, quelles qu'en soient l'origine et la nature, via la MDPH.", ref: "Loi 11 février 2005", diff: 1 },
  { ueId: "2.3", q: "Quel sigle désigne la prestation finançant aides humaines et techniques liées au handicap ?", options: ["AAH", "PCH", "RQTH", "CMI"], correct: 1,
    explication: "La PCH (prestation de compensation du handicap) finance aides humaines, techniques, aménagements. L'AAH est une allocation de ressources.", ref: "CNSA / MDPH", diff: 2 },
  { ueId: "2.3", q: "Au sein de la MDPH, l'instance qui statue sur les droits (AAH, PCH, RQTH) est :", options: ["La CPAM", "La CDAPH", "La CDU", "Le CCAS"], correct: 1,
    explication: "La CDAPH (Commission des droits et de l'autonomie des personnes handicapées) prend les décisions d'attribution au sein de la MDPH.", ref: "CNSA / MDPH", diff: 2 },
  { ueId: "2.3", q: "Le dispositif d'annonce d'une maladie grave comporte notamment :", options: ["Uniquement un temps médical", "Un temps médical et un temps d'accompagnement soignant", "Seulement la remise d'un document", "Une décision prise sans le patient"], correct: 1,
    explication: "Le dispositif d'annonce associe un temps médical d'annonce, un temps d'accompagnement soignant, l'accès aux soins de support et l'articulation avec la ville.", ref: "Plan cancer / HAS", diff: 2 },
  { ueId: "2.3", q: "Le modèle de la CIF (OMS, 2001) considère le handicap comme :", options: ["Une caractéristique fixe de la personne", "Le résultat de l'interaction personne-environnement", "Une simple déficience anatomique", "Un état toujours irréversible"], correct: 1,
    explication: "La CIF est un modèle interactif : le handicap résulte de l'interaction entre la personne (fonctions, activités, participation) et les facteurs environnementaux et personnels.", ref: "OMS CIF 2001", diff: 2 },
  { ueId: "2.3", q: "Pour une douleur nociceptive post-opératoire d'intensité modérée, le traitement de première intention relève surtout :", options: ["D'un antiépileptique", "D'un antalgique de palier adapté (1 ou 2)", "D'un antidépresseur", "D'un anxiolytique seul"], correct: 1,
    explication: "La douleur nociceptive répond aux antalgiques classiques selon l'intensité : on adapte le palier OMS (1 puis 2/3). Les co-antalgiques ciblent surtout le neuropathique.", ref: "OMS paliers", diff: 3 },
  { ueId: "2.3", q: "L'allodynie correspond à :", options: ["Une absence totale de douleur", "Une douleur provoquée par un stimulus normalement non douloureux", "Une douleur uniquement nocturne", "Une douleur psychogène"], correct: 1,
    explication: "L'allodynie est une douleur déclenchée par un stimulus habituellement indolore (effleurement du drap). Elle évoque une composante neuropathique.", ref: "IASP", diff: 3 },
];

export const flashcards = [
  { ueId: "2.3", recto: "Définition IASP de la douleur ?", verso: "Expérience sensorielle et émotionnelle désagréable, subjective, associée ou non à une lésion tissulaire réelle ou potentielle." },
  { ueId: "2.3", recto: "Les 4 grands mécanismes de la douleur ?", verso: "Nociceptive, neuropathique, nociplastique (dysfonctionnelle), psychogène." },
  { ueId: "2.3", recto: "Délai pour parler de douleur chronique ?", verso: "Persistance ou récidive au-delà de 3 mois." },
  { ueId: "2.3", recto: "À quoi sert le DN4 ?", verso: "Dépister une douleur neuropathique ; score ≥ 4/10 = neuropathique probable." },
  { ueId: "2.3", recto: "Échelle d'hétéro-évaluation pour la personne âgée non communicante ?", verso: "Algoplus (ou ECPA)." },
  { ueId: "2.3", recto: "Les 3 paliers OMS des antalgiques ?", verso: "1 : non opioïdes (paracétamol, AINS, néfopam) ; 2 : opioïdes faibles (tramadol, codéine) ; 3 : opioïdes forts (morphine, oxycodone, fentanyl)." },
  { ueId: "2.3", recto: "Dose maximale usuelle de paracétamol chez l'adulte ?", verso: "4 g/24 h (1 g toutes les 6 h), à adapter au poids et à la fonction hépatique." },
  { ueId: "2.3", recto: "Antidote du paracétamol ?", verso: "N-acétylcystéine." },
  { ueId: "2.3", recto: "Effet indésirable grave des opioïdes forts à surveiller ?", verso: "Dépression respiratoire (surveiller sédation + fréquence respiratoire) ; antidote : naloxone." },
  { ueId: "2.3", recto: "Effet indésirable opioïde qui ne s'épuise pas ?", verso: "La constipation → laxatif systématique préventif." },
  { ueId: "2.3", recto: "Co-antalgiques de la douleur neuropathique ?", verso: "Antiépileptiques (gabapentine, prégabaline) et antidépresseurs (amitriptyline, duloxétine)." },
  { ueId: "2.3", recto: "À quoi sert le MEOPA ?", verso: "Analgésie de surface pour les soins douloureux brefs (pansement, ponction, suture)." },
  { ueId: "2.3", recto: "Que finance la PCH ?", verso: "Aides humaines, techniques et aménagements liés au handicap (prestation de compensation)." },
  { ueId: "2.3", recto: "Instance décisionnaire au sein de la MDPH ?", verso: "La CDAPH (Commission des droits et de l'autonomie des personnes handicapées)." },
  { ueId: "2.3", recto: "Qu'est-ce que l'allodynie ?", verso: "Douleur provoquée par un stimulus normalement non douloureux ; signe de douleur neuropathique." },
];
