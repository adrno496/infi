// UE 2.6 PLUS — Processus psychopathologiques. Pack complémentaire IFSI (référentiel 2009).
// Axe : pharmacologie psychiatrique, surveillances infirmières, urgences, addictions, calculs de doses.
export const fiches = [
  {
    id: "fx_ue_2_6_plus_psychotropes", ueId: "2.6", type: "cours",
    titre: "Psychotropes : classes, effets indésirables et surveillances IDE",
    resume: "Antidépresseurs, antipsychotiques, thymorégulateurs, anxiolytiques : repères de surveillance infirmière.",
    tags: ["pharmacologie", "psychotropes", "surveillance", "effets indésirables"],
    html: `
      <p>Le rôle infirmier en psychiatrie comporte une <strong>surveillance pharmacologique</strong> rigoureuse : observance, efficacité, effets indésirables et risque de <span class="key" data-term="iatrogénie">iatrogénie</span>. Quatre grandes familles de <span class="key" data-term="psychotropes">psychotropes</span> sont à connaître.</p>
      <table class="tbl">
        <tr><th>Classe</th><th>Indications</th><th>Effets indésirables majeurs</th></tr>
        <tr><td>Antidépresseurs (ISRS, IRSNa, tricycliques)</td><td>Dépression, troubles anxieux</td><td>Levée d'inhibition (risque suicidaire précoce), syndrome sérotoninergique, hyponatrémie</td></tr>
        <tr><td>Antipsychotiques (neuroleptiques)</td><td>Psychoses, agitation</td><td>Syndrome extrapyramidal, prise de poids, allongement du QT, syndrome malin</td></tr>
        <tr><td>Thymorégulateurs (lithium, valproate, carbamazépine)</td><td>Trouble bipolaire</td><td>Intoxication au lithium, tremblements, atteinte thyroïdienne/rénale</td></tr>
        <tr><td>Anxiolytiques (benzodiazépines)</td><td>Anxiété, sevrage alcool</td><td>Sédation, dépendance, chutes, dépression respiratoire</td></tr>
      </table>
      <h3>Surveillance infirmière clé</h3>
      <ul>
        <li><strong>Antidépresseurs</strong> : délai d'action de <strong>2 à 4 semaines</strong> ; surveillance accrue du risque suicidaire en début de traitement (la <span class="key" data-term="levée d'inhibition">levée d'inhibition</span> précède l'amélioration de l'humeur).</li>
        <li><strong>Antipsychotiques</strong> : surveiller la marche, la rigidité, l'hypersalivation, le poids et la glycémie ; ECG pour le QT.</li>
        <li><strong>Benzodiazépines</strong> : éviter l'association à l'alcool ; risque de dépendance, prescription limitée dans le temps.</li>
      </ul>
      <div class="callout"><div class="callout-t">Levée d'inhibition</div>Sous antidépresseur, l'énergie revient avant l'humeur : le patient retrouve la capacité d'agir alors que les idées noires persistent. C'est la <strong>période la plus à risque de passage à l'acte suicidaire</strong> (2 premières semaines).</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« <strong>4 A</strong> » des classes : <strong>A</strong>ntidépresseur, <strong>A</strong>ntipsychotique, <strong>A</strong>nti-maniaque (thymorégulateur), <strong>A</strong>nxiolytique.</div>
    `,
    refs: ["UE 2.6", "UE 2.11 Pharmacologie"],
  },
  {
    id: "fx_ue_2_6_plus_urgences", ueId: "2.6", type: "cours",
    titre: "Urgences psychiatriques et toxicité des psychotropes",
    resume: "Syndrome sérotoninergique, syndrome malin des neuroleptiques, intoxication au lithium, crise suicidaire.",
    tags: ["urgences", "syndrome malin", "lithium", "syndrome sérotoninergique"],
    html: `
      <p>Plusieurs situations imposent une <strong>reconnaissance immédiate</strong> et une conduite à tenir infirmière. Ces tableaux mettent en jeu le pronostic vital.</p>
      <h3>Syndrome malin des neuroleptiques (SMN)</h3>
      <ul>
        <li>Tableau : <strong>hyperthermie</strong> sévère, <span class="key" data-term="rigidité musculaire">rigidité musculaire</span>, troubles de conscience, sueurs, instabilité tensionnelle.</li>
        <li>Biologie : élévation des <strong>CPK</strong>, hyperleucocytose.</li>
        <li>CAT : <strong>arrêt immédiat du neuroleptique</strong>, alerte médicale, refroidissement, réhydratation, transfert en réanimation.</li>
      </ul>
      <h3>Syndrome sérotoninergique</h3>
      <p>Lié à un excès de sérotonine (surdosage ou association d'antidépresseurs). Triade : <strong>troubles neuromusculaires</strong> (myoclonies, tremblements), <strong>dysautonomie</strong> (tachycardie, sueurs, hyperthermie) et <strong>troubles mentaux</strong> (confusion, agitation). CAT : arrêt du médicament, alerte médicale.</p>
      <h3>Intoxication au lithium</h3>
      <p>Marge thérapeutique étroite. Signes : tremblements amples, troubles digestifs, confusion, ataxie. La <span class="key" data-term="lithémie">lithémie</span> guide la conduite ; toute déshydratation, fièvre ou prise d'AINS majore le risque.</p>
      <div class="callout"><div class="callout-t">Crise suicidaire</div>Évaluer le <strong>RUD</strong> : <strong>R</strong>isque (facteurs), <strong>U</strong>rgence (scénario, moyens), <strong>D</strong>angerosité (létalité du moyen). Ne jamais laisser seul un patient à haut risque ; sécuriser l'environnement.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>SMN = « <strong>FRC</strong> » : <strong>F</strong>ièvre, <strong>R</strong>igidité, <strong>C</strong>PK élevées.</div>
    `,
    refs: ["UE 2.6", "UE 4.3 Urgences"],
  },
  {
    id: "fx_ue_2_6_plus_addictions", ueId: "2.6", type: "cours",
    titre: "Addictions : sevrage, surveillance et prévention",
    resume: "Mécanismes de l'addiction, sevrage alcoolique, repères de prise en charge infirmière.",
    tags: ["addictions", "sevrage", "alcool", "prévention"],
    html: `
      <p>L'<span class="key" data-term="addiction">addiction</span> associe un <strong>craving</strong> (envie irrépressible), une perte de contrôle, la poursuite malgré les conséquences et, pour certains produits, une <strong>dépendance physique</strong> avec syndrome de sevrage.</p>
      <h3>Sevrage alcoolique</h3>
      <ul>
        <li>Apparaît dans les heures suivant l'arrêt : tremblements, sueurs, anxiété, tachycardie.</li>
        <li>Complications graves : <span class="key" data-term="delirium tremens">delirium tremens</span> (confusion, hallucinations, agitation, fièvre) et <strong>crises convulsives</strong>.</li>
        <li>Prévention/traitement : <strong>hydratation</strong> abondante, <span class="key" data-term="benzodiazépines">benzodiazépines</span> et <strong>vitamine B1 (thiamine)</strong> pour prévenir l'encéphalopathie de Gayet-Wernicke.</li>
      </ul>
      <h3>Rôle infirmier</h3>
      <ul>
        <li>Surveillance des constantes et de la conscience, échelle de sevrage (ex. Cushman).</li>
        <li>Prévention du risque de chute et des troubles hydroélectrolytiques.</li>
        <li>Accompagnement non jugeant, éducation, orientation (CSAPA, addictologie).</li>
      </ul>
      <div class="callout"><div class="callout-t">Vitamine B1 avant le glucose</div>Chez l'alcoolo-dépendant dénutri, administrer la <strong>thiamine AVANT toute perfusion glucosée</strong> : un apport de glucose seul peut précipiter l'<strong>encéphalopathie de Gayet-Wernicke</strong>.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Sevrage alcool = « <strong>HBV</strong> » : <strong>H</strong>ydratation, <strong>B</strong>enzodiazépines, <strong>V</strong>itamine B1.</div>
    `,
    refs: ["UE 2.6", "UE 4.6 Soins éducatifs"],
  },
];

export const qcm = [
  {
    ueId: "2.6", q: "Quel est le délai d'action habituel d'un antidépresseur sur l'humeur ?",
    options: ["Quelques heures", "24 à 48 heures", "2 à 4 semaines", "3 à 6 mois"],
    correct: 2,
    explication: "Les antidépresseurs (ISRS, IRSNa, tricycliques) n'améliorent l'humeur qu'après un délai de 2 à 4 semaines. D'où l'importance d'expliquer ce délai au patient pour favoriser l'observance et maintenir la surveillance du risque suicidaire.",
    ref: "UE 2.6", diff: 1,
  },
  {
    ueId: "2.6", q: "La levée d'inhibition sous antidépresseur correspond à :",
    options: ["Une guérison complète", "Un retour de l'énergie avant l'amélioration de l'humeur, majorant le risque suicidaire", "Un effet indésirable digestif", "Une accoutumance au traitement"],
    correct: 1,
    explication: "La levée d'inhibition survient en début de traitement : le patient retrouve la capacité d'agir alors que les idées noires persistent. C'est la période la plus à risque de passage à l'acte, justifiant une surveillance rapprochée les 2 premières semaines.",
    ref: "UE 2.6", diff: 2,
  },
  {
    ueId: "2.6", q: "Quelle triade caractérise le syndrome malin des neuroleptiques ?",
    options: ["Hypothermie, hypotonie, hypoglycémie", "Hyperthermie, rigidité musculaire, élévation des CPK", "Bradycardie, somnolence, myosis", "Hypertension, céphalées, vomissements isolés"],
    correct: 1,
    explication: "Le syndrome malin des neuroleptiques associe hyperthermie sévère, rigidité musculaire et élévation des CPK, avec troubles de conscience et dysautonomie. C'est une urgence vitale imposant l'arrêt immédiat du neuroleptique et une prise en charge en réanimation.",
    ref: "UE 2.6", diff: 2,
  },
  {
    ueId: "2.6", q: "Face à un syndrome malin des neuroleptiques, la première mesure est :",
    options: ["Augmenter la dose de neuroleptique", "Arrêter immédiatement le neuroleptique et alerter le médecin", "Administrer un anxiolytique per os", "Attendre 24 h d'observation"],
    correct: 1,
    explication: "Le syndrome malin engage le pronostic vital : il faut arrêter sans délai le neuroleptique, alerter, refroidir le patient, réhydrater et organiser le transfert en réanimation.",
    ref: "UE 2.6", diff: 2,
  },
  {
    ueId: "2.6", q: "Le syndrome sérotoninergique se reconnaît par :",
    options: ["Une triade neuromusculaire, dysautonomique et mentale", "Une éruption cutanée isolée", "Une simple sécheresse buccale", "Une bradycardie sinusale"],
    correct: 0,
    explication: "Le syndrome sérotoninergique (excès de sérotonine, souvent par association d'antidépresseurs) associe des signes neuromusculaires (myoclonies, tremblements), une dysautonomie (tachycardie, sueurs, hyperthermie) et des troubles mentaux (confusion, agitation).",
    ref: "UE 2.6", diff: 3,
  },
  {
    ueId: "2.6", q: "Le lithium est un médicament à marge thérapeutique étroite. Quel facteur majore le risque d'intoxication ?",
    options: ["Une hydratation abondante", "Une déshydratation ou la prise d'AINS", "Un régime riche en sel", "L'activité physique modérée"],
    correct: 1,
    explication: "La déshydratation, la fièvre, un régime hyposodé ou la prise d'AINS réduisent l'élimination rénale du lithium et augmentent la lithémie, exposant à l'intoxication. Le suivi régulier de la lithémie est indispensable.",
    ref: "UE 2.6", diff: 2,
  },
  {
    ueId: "2.6", q: "Quels sont des signes d'intoxication au lithium ?",
    options: ["Euphorie et logorrhée", "Tremblements amples, troubles digestifs, confusion et ataxie", "Hypertension et tachycardie isolées", "Éruption cutanée fébrile"],
    correct: 1,
    explication: "L'intoxication au lithium se manifeste par des tremblements amples, des troubles digestifs (nausées, diarrhées), une confusion, une ataxie pouvant évoluer vers le coma. Toute suspicion impose un dosage de la lithémie et un avis médical.",
    ref: "UE 2.6", diff: 2,
  },
  {
    ueId: "2.6", q: "Avant le suivi d'un traitement par lithium, quels bilans sont à surveiller régulièrement ?",
    options: ["Fonction rénale et fonction thyroïdienne", "Glycémie à jeun uniquement", "Bilan hépatique seul", "Numération plaquettaire seule"],
    correct: 0,
    explication: "Le lithium peut altérer la fonction rénale et thyroïdienne ; ces bilans sont surveillés en plus de la lithémie. La surveillance régulière conditionne la sécurité du traitement au long cours.",
    ref: "UE 2.6", diff: 3,
  },
  {
    ueId: "2.6", q: "Dans le sevrage alcoolique, quelle complication grave faut-il craindre ?",
    options: ["Un syndrome néphrotique", "Un delirium tremens avec confusion et hallucinations", "Une hypertension maligne isolée", "Une thrombose veineuse profonde"],
    correct: 1,
    explication: "Le delirium tremens est une complication grave du sevrage alcoolique : confusion, hallucinations, agitation, fièvre, déshydratation. Il peut s'accompagner de crises convulsives et engage le pronostic vital sans prise en charge.",
    ref: "UE 2.6", diff: 1,
  },
  {
    ueId: "2.6", q: "Quelle vitamine est administrée systématiquement dans le sevrage alcoolique ?",
    options: ["Vitamine C", "Vitamine B1 (thiamine)", "Vitamine D", "Vitamine K"],
    correct: 1,
    explication: "La vitamine B1 (thiamine) prévient l'encéphalopathie de Gayet-Wernicke chez le patient alcoolo-dépendant souvent dénutri. Elle doit être administrée avant tout apport de glucose.",
    ref: "UE 2.6", diff: 1,
  },
  {
    ueId: "2.6", q: "Pourquoi administrer la thiamine avant une perfusion de glucose chez l'alcoolique dénutri ?",
    options: ["Pour améliorer le goût de la perfusion", "Parce qu'un apport de glucose seul peut précipiter une encéphalopathie de Gayet-Wernicke", "Pour accélérer l'élimination de l'alcool", "Pour prévenir une hyperkaliémie"],
    correct: 1,
    explication: "Chez un patient carencé en B1, l'apport de glucose consomme les réserves résiduelles de thiamine et peut déclencher une encéphalopathie de Gayet-Wernicke. La thiamine doit donc précéder le glucose.",
    ref: "UE 2.6", diff: 3,
  },
  {
    ueId: "2.6", q: "L'évaluation d'une crise suicidaire repose sur le modèle RUD. Que signifie-t-il ?",
    options: ["Risque, Urgence, Dangerosité", "Repos, Urgence, Délire", "Rigidité, Ulcère, Détresse", "Réflexe, Unité, Décision"],
    correct: 0,
    explication: "Le RUD évalue le Risque (facteurs de vulnérabilité), l'Urgence (existence d'un scénario et de moyens) et la Dangerosité (létalité et accessibilité du moyen envisagé). Il oriente la conduite à tenir et la mise en sécurité.",
    ref: "UE 2.6", diff: 2,
  },
  {
    ueId: "2.6", q: "Quel est un effet indésirable fréquent des benzodiazépines à surveiller chez la personne âgée ?",
    options: ["Hypertension", "Sédation et risque de chute", "Hyperglycémie", "Constipation isolée"],
    correct: 1,
    explication: "Les benzodiazépines provoquent sédation, troubles de la vigilance et de l'équilibre, augmentant le risque de chute, particulièrement chez la personne âgée. Leur prescription doit être limitée dans le temps en raison du risque de dépendance.",
    ref: "UE 2.6", diff: 1,
  },
  {
    ueId: "2.6", q: "Quelle association est particulièrement dangereuse avec les benzodiazépines ?",
    options: ["Le paracétamol", "L'alcool (potentialisation, dépression respiratoire)", "La vitamine B1", "L'eau", "Le sérum physiologique"],
    correct: 1,
    explication: "L'association benzodiazépines + alcool potentialise la dépression du système nerveux central et respiratoire, avec risque de coma. Il faut systématiquement informer le patient de cette interaction.",
    ref: "UE 2.6", diff: 2,
  },
  {
    ueId: "2.6", q: "Quels effets indésirables métaboliques surveiller sous antipsychotiques de seconde génération ?",
    options: ["Perte de poids et hypoglycémie", "Prise de poids, hyperglycémie et dyslipidémie", "Déshydratation isolée", "Hypothyroïdie systématique"],
    correct: 1,
    explication: "Les antipsychotiques de seconde génération exposent à un syndrome métabolique : prise de poids, hyperglycémie (voire diabète) et dyslipidémie. La surveillance du poids, du périmètre abdominal, de la glycémie et du bilan lipidique est recommandée.",
    ref: "UE 2.6", diff: 2,
  },
  {
    ueId: "2.6", q: "Le syndrome extrapyramidal sous neuroleptique comprend notamment :",
    options: ["Une diarrhée chronique", "Des tremblements, une akathisie et une rigidité", "Une polyurie", "Une éruption cutanée"],
    correct: 1,
    explication: "Le syndrome extrapyramidal regroupe le syndrome parkinsonien (tremblements, rigidité, akinésie), l'akathisie (impatience motrice) et les dyskinésies. Un correcteur anticholinergique peut être prescrit ; la surveillance infirmière de la marche et de la motricité est essentielle.",
    ref: "UE 2.6", diff: 2,
  },
  {
    ueId: "2.6", q: "Une hyponatrémie peut compliquer un traitement par :",
    options: ["Vitamine B1", "ISRS (inhibiteurs sélectifs de la recapture de la sérotonine)", "Paracétamol", "Insuline"],
    correct: 1,
    explication: "Les ISRS peuvent induire une hyponatrémie par sécrétion inappropriée d'ADH (SIADH), surtout chez la personne âgée. Surveiller confusion, nausées, céphalées et contrôler le ionogramme.",
    ref: "UE 2.6", diff: 3,
  },
  {
    ueId: "2.6", q: "Un patient bipolaire en phase maniaque présente surtout :",
    options: ["Un ralentissement psychomoteur et une tristesse", "Une exaltation de l'humeur, une logorrhée et une réduction du besoin de sommeil", "Des hallucinations olfactives isolées", "Une rigidité musculaire fébrile"],
    correct: 1,
    explication: "La phase maniaque associe exaltation de l'humeur, logorrhée, fuite des idées, hyperactivité, diminution du besoin de sommeil et conduites à risque. Elle alterne avec des phases dépressives dans le trouble bipolaire.",
    ref: "UE 2.6", diff: 1,
  },
  {
    ueId: "2.6", q: "Lors d'une attaque de panique, quelle attitude infirmière est adaptée ?",
    options: ["Laisser le patient seul jusqu'à la fin de la crise", "Rester calme, rassurer, aider à ralentir la respiration dans un environnement apaisant", "Administrer immédiatement un neuroleptique de force", "Stimuler le patient en haussant le ton"],
    correct: 1,
    explication: "Devant une attaque de panique, l'IDE adopte une présence calme et rassurante, aide à ralentir la respiration et installe le patient dans un environnement apaisant. On vérifie l'absence de cause organique. Un anxiolytique peut être prescrit si nécessaire.",
    ref: "UE 2.6", diff: 1,
  },
  {
    ueId: "2.6", q: "Le craving désigne :",
    options: ["Un effet indésirable des neuroleptiques", "L'envie irrépressible de consommer le produit", "Un type d'hallucination", "Une complication du sevrage hépatique"],
    correct: 1,
    explication: "Le craving est l'envie puissante et irrépressible de consommer la substance ou de réaliser le comportement addictif. C'est une cible majeure de la prise en charge en addictologie.",
    ref: "UE 2.6", diff: 1,
  },
  {
    ueId: "2.6", q: "Un patient pèse 70 kg et doit recevoir un médicament à 0,5 mg/kg. Quelle dose totale ?",
    options: ["3,5 mg", "35 mg", "7 mg", "350 mg"],
    correct: 1,
    explication: "Calcul : 0,5 mg/kg x 70 kg = 35 mg. La vérification des calculs de doses fait partie intégrante de la sécurité de l'administration médicamenteuse.",
    ref: "UE 2.6 / Calculs de doses", diff: 2,
  },
];

export const flashcards = [
  { ueId: "2.6", recto: "Délai d'action d'un antidépresseur sur l'humeur ?", verso: "2 à 4 semaines." },
  { ueId: "2.6", recto: "Pourquoi surveiller le risque suicidaire en début d'antidépresseur ?", verso: "Levée d'inhibition : l'énergie revient avant l'humeur, majorant le risque de passage à l'acte." },
  { ueId: "2.6", recto: "Triade du syndrome malin des neuroleptiques ?", verso: "Hyperthermie, rigidité musculaire, élévation des CPK (urgence vitale)." },
  { ueId: "2.6", recto: "Première mesure face à un syndrome malin des neuroleptiques ?", verso: "Arrêt immédiat du neuroleptique et alerte médicale." },
  { ueId: "2.6", recto: "Facteurs majorant l'intoxication au lithium ?", verso: "Déshydratation, fièvre, régime hyposodé, AINS." },
  { ueId: "2.6", recto: "Bilans à surveiller sous lithium ?", verso: "Lithémie, fonction rénale, fonction thyroïdienne." },
  { ueId: "2.6", recto: "Complication grave du sevrage alcoolique ?", verso: "Delirium tremens (confusion, hallucinations, agitation, fièvre) et crises convulsives." },
  { ueId: "2.6", recto: "Pourquoi administrer la vitamine B1 avant le glucose chez l'alcoolique ?", verso: "Le glucose seul peut précipiter une encéphalopathie de Gayet-Wernicke chez le carencé en B1." },
  { ueId: "2.6", recto: "Que signifie le RUD dans la crise suicidaire ?", verso: "Risque, Urgence, Dangerosité." },
  { ueId: "2.6", recto: "Association dangereuse avec les benzodiazépines ?", verso: "L'alcool : potentialisation, dépression respiratoire." },
  { ueId: "2.6", recto: "Composantes du syndrome extrapyramidal ?", verso: "Syndrome parkinsonien (tremblements, rigidité, akinésie), akathisie, dyskinésies." },
  { ueId: "2.6", recto: "Effets métaboliques des antipsychotiques de 2e génération ?", verso: "Prise de poids, hyperglycémie, dyslipidémie (syndrome métabolique)." },
  { ueId: "2.6", recto: "Signes de la phase maniaque ?", verso: "Exaltation, logorrhée, fuite des idées, hyperactivité, sommeil réduit, conduites à risque." },
  { ueId: "2.6", recto: "Qu'est-ce que le craving ?", verso: "Envie irrépressible de consommer le produit ou d'agir le comportement addictif." },
  { ueId: "2.6", recto: "Dose pour 70 kg à 0,5 mg/kg ?", verso: "35 mg (0,5 x 70)." },
];
