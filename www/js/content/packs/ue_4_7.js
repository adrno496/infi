export const fiches = [
  { id: "f_4_7_definitions", ueId: "4.7", type: "cours",
    titre: "Soins palliatifs : définitions et cadre",
    resume: "Concepts fondamentaux, démarche palliative et cadre législatif des soins palliatifs et de fin de vie.",
    tags: ["palliatif", "definition", "loi", "cadre"],
    html: `<h3>Définir les soins palliatifs</h3>
<p>Les <span class="key" data-term="soins palliatifs">soins palliatifs</span> sont des soins actifs et continus délivrés dans une approche globale de la personne atteinte d'une maladie grave, évolutive ou terminale. Ils visent à soulager la douleur, apaiser la souffrance psychique, sauvegarder la dignité et soutenir l'entourage (définition SFAP).</p>
<ul>
<li><strong>Objectif</strong> : ni hâter ni retarder la mort, mais préserver la <strong>qualité de vie</strong>.</li>
<li><strong>Approche globale</strong> : physique, psychologique, sociale et spirituelle.</li>
<li><strong>Pluridisciplinarité</strong> : médecin, IDE, AS, psychologue, kiné, assistant social, bénévoles.</li>
</ul>
<h3>Démarche palliative</h3>
<p>Elle peut être précoce et coexister avec des traitements curatifs : on parle de <span class="key" data-term="soins palliatifs precoces">soins palliatifs précoces</span>. La phase terminale ne représente que la dernière étape.</p>
<table class="tbl">
<tr><th>Curatif</th><th>Palliatif</th></tr>
<tr><td>Guérir la maladie</td><td>Soulager, accompagner</td></tr>
<tr><td>Lutte contre la cause</td><td>Lutte contre les symptômes</td></tr>
</table>
<h3>Cadre législatif</h3>
<ul>
<li><strong>Loi du 9 juin 1999</strong> : garantit le droit d'accès aux soins palliatifs.</li>
<li><strong>Loi Léonetti du 22 avril 2005</strong> : refus de l'<span class="key" data-term="obstination deraisonnable">obstination déraisonnable</span> (acharnement thérapeutique), directives anticipées, personne de confiance.</li>
<li><strong>Loi Claeys-Léonetti du 2 février 2016</strong> : droit à la <span class="key" data-term="sedation profonde">sédation profonde et continue maintenue jusqu'au décès</span>, directives anticipées contraignantes.</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>En France, l'euthanasie et le suicide assisté restent interdits. La loi autorise le laisser-mourir (limitation/arrêt des traitements) et la sédation, pas le faire-mourir.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« 99-05-16 » : 1999 accès, 2005 Léonetti (anti-acharnement), 2016 Claeys-Léonetti (sédation).</div>`,
    refs: ["UE 4.7"] },

  { id: "f_4_7_douleur_symptomes", ueId: "4.7", type: "cours",
    titre: "Évaluation et prise en charge des symptômes",
    resume: "Évaluer la douleur et gérer les symptômes pénibles de fin de vie (douleur, dyspnée, nausées, encombrement).",
    tags: ["douleur", "symptomes", "evaluation", "confort"],
    html: `<h3>Évaluer la douleur</h3>
<p>L'évaluation est systématique, répétée et tracée. Outils selon la capacité de communication :</p>
<ul>
<li><strong>Auto-évaluation</strong> : <span class="key" data-term="EVA">EVA</span> (échelle visuelle analogique), EN (numérique 0-10), EVS (verbale simple).</li>
<li><strong>Hétéro-évaluation</strong> (patient non communicant) : <span class="key" data-term="Algoplus">Algoplus</span> (douleur aiguë), <span class="key" data-term="ECPA">ECPA</span> et Doloplus (douleur chronique de la personne âgée).</li>
</ul>
<h3>Paliers antalgiques de l'OMS</h3>
<table class="tbl">
<tr><th>Palier</th><th>Type</th><th>Exemples</th></tr>
<tr><td>I</td><td>Non opioïdes</td><td>Paracétamol, AINS</td></tr>
<tr><td>II</td><td>Opioïdes faibles</td><td>Tramadol, codéine</td></tr>
<tr><td>III</td><td>Opioïdes forts</td><td>Morphine, oxycodone, fentanyl</td></tr>
</table>
<h3>Autres symptômes fréquents</h3>
<ul>
<li><strong>Dyspnée</strong> : morphine à faible dose, oxygène si hypoxie, position assise, ambiance calme.</li>
<li><strong>Encombrement / râles agoniques</strong> : <span class="key" data-term="scopolamine">scopolamine</span> (anticholinergique), réduction des apports, positionnement.</li>
<li><strong>Nausées / vomissements</strong> : antiémétiques (métoclopramide, halopéridol), soins de bouche.</li>
<li><strong>Anxiété / agitation</strong> : benzodiazépines (midazolam), présence rassurante.</li>
<li><strong>Constipation</strong> : prévention systématique sous opioïdes (laxatifs).</li>
</ul>
<div class="callout"><div class="callout-t">Confort avant tout</div>En phase terminale, l'objectif est le confort : on privilégie les soins de bouche, le positionnement, la prévention des escarres et l'apaisement, pas les bilans agressifs.</div>`,
    refs: ["UE 4.7"] },

  { id: "f_4_7_morphine", ueId: "4.7", type: "pharmaco",
    titre: "Morphine et opioïdes en soins palliatifs",
    resume: "Maniement de la morphine : titration, équivalences, surveillance et gestion des effets indésirables.",
    tags: ["morphine", "opioides", "pharmaco", "surveillance"],
    html: `<h3>La morphine, opioïde de référence</h3>
<p>La <span class="key" data-term="morphine">morphine</span> est l'antalgique de palier III de référence. Elle n'a <strong>pas d'effet plafond</strong> : la dose s'adapte à la douleur.</p>
<h3>Titration et interdoses</h3>
<ul>
<li><strong>Titration</strong> : on augmente progressivement jusqu'au soulagement.</li>
<li>Formes <strong>LP</strong> (libération prolongée) toutes les 12h pour le fond douloureux.</li>
<li>Formes <strong>LI</strong> (libération immédiate) en <span class="key" data-term="interdose">interdoses</span> pour les accès douloureux paroxystiques : environ 1/10 à 1/6 de la dose des 24h.</li>
</ul>
<h3>Équivalences (principe)</h3>
<table class="tbl">
<tr><th>Voie</th><th>Ratio vs orale</th></tr>
<tr><td>Orale</td><td>1</td></tr>
<tr><td>Sous-cutanée</td><td>environ 1/2 (diviser par 2)</td></tr>
<tr><td>Intraveineuse</td><td>environ 1/3 (diviser par 3)</td></tr>
</table>
<h3>Effets indésirables et surveillance</h3>
<ul>
<li><strong>Constipation</strong> : constante, prévention systématique par laxatifs.</li>
<li><strong>Nausées</strong> : fréquentes en début, souvent transitoires.</li>
<li><strong>Somnolence</strong> : surveiller le niveau de vigilance.</li>
<li><strong>Surdosage</strong> : myosis serré, somnolence, <strong>bradypnée < 8/min</strong>. Antidote : <span class="key" data-term="naloxone">naloxone</span>.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Surdosage opioïde = « les 3 piliers » : myosis (pupilles en pointe), dépression respiratoire, coma/somnolence.</div>
<div class="callout"><div class="callout-t">Double effet</div>Soulager la douleur même au risque d'abréger la vie est licite si l'intention est le soulagement (principe du double effet). Ce n'est pas une euthanasie.</div>`,
    refs: ["UE 4.7"] },

  { id: "f_4_7_accompagnement", ueId: "4.7", type: "cours",
    titre: "Accompagnement, deuil et éthique",
    resume: "Accompagner le patient et les proches, comprendre le deuil et les enjeux éthiques de la fin de vie.",
    tags: ["accompagnement", "deuil", "ethique", "ekr"],
    html: `<h3>Accompagner la personne en fin de vie</h3>
<p>L'accompagnement repose sur l'écoute, la présence, le respect de la dignité et de l'autonomie. La communication doit être adaptée, vraie et progressive.</p>
<h3>Étapes du deuil (Elisabeth Kübler-Ross)</h3>
<ul>
<li><strong>1. Déni</strong> : refus de la réalité.</li>
<li><strong>2. Colère</strong> : révolte, « pourquoi moi ? ».</li>
<li><strong>3. Marchandage</strong> : négociation.</li>
<li><strong>4. Dépression</strong> : tristesse, repli.</li>
<li><strong>5. Acceptation</strong> : apaisement.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« DCMDA » : Déni, Colère, Marchandage, Dépression, Acceptation. Ces étapes ne sont ni linéaires ni obligatoires.</div>
<h3>Dispositifs et structures</h3>
<ul>
<li><strong>USP</strong> : unités de soins palliatifs.</li>
<li><strong>LISP</strong> : lits identifiés de soins palliatifs.</li>
<li><strong>EMSP</strong> : équipes mobiles de soins palliatifs.</li>
<li><strong>HAD</strong> et <strong>réseaux</strong> : maintien au domicile.</li>
</ul>
<h3>Repères éthiques</h3>
<ul>
<li><strong>Personne de confiance</strong> : désignée par écrit, son avis prime sur celui des proches.</li>
<li><strong>Directives anticipées</strong> : volontés du patient, contraignantes pour le médecin (loi 2016).</li>
<li><strong>Collégialité</strong> : décisions de limitation/arrêt de traitement prises en procédure collégiale.</li>
</ul>
<div class="callout"><div class="callout-t">Soutien des soignants</div>L'accompagnement de fin de vie expose à l'épuisement. Groupes de parole, analyse de pratiques et débriefing sont des ressources essentielles contre le burn-out.</div>`,
    refs: ["UE 4.7"] },
];

export const qcm = [
  { ueId: "4.7", q: "Quel est l'objectif principal des soins palliatifs ?", options: ["Guérir la maladie causale", "Préserver la qualité de vie et soulager", "Accélérer le décès", "Retarder la mort à tout prix"], correct: 1,
    explication: "Les soins palliatifs ne visent ni à hâter ni à retarder la mort, mais à soulager les symptômes et préserver la qualité de vie et la dignité.", ref: "UE 4.7", diff: 1 },

  { ueId: "4.7", q: "Quelle loi a introduit la sédation profonde et continue maintenue jusqu'au décès ?", options: ["Loi du 9 juin 1999", "Loi Léonetti 2005", "Loi Claeys-Léonetti 2016", "Loi Kouchner 2002"], correct: 2,
    explication: "La loi Claeys-Léonetti du 2 février 2016 instaure le droit à la sédation profonde et continue et rend les directives anticipées contraignantes.", ref: "UE 4.7", diff: 2 },

  { ueId: "4.7", q: "En France, l'euthanasie active est :", options: ["Autorisée depuis 2016", "Interdite", "Autorisée sur directives anticipées", "Réservée aux USP"], correct: 1,
    explication: "L'euthanasie et le suicide assisté restent interdits en France. La loi autorise la limitation/arrêt des traitements et la sédation, pas le faire-mourir.", ref: "UE 4.7", diff: 1 },

  { ueId: "4.7", q: "Quel terme désigne l'acharnement thérapeutique refusé par la loi ?", options: ["Double effet", "Obstination déraisonnable", "Sédation", "Palliation"], correct: 1,
    explication: "La loi Léonetti de 2005 condamne l'obstination déraisonnable, c'est-à-dire la poursuite de traitements inutiles, disproportionnés ou n'ayant d'autre objet que le maintien artificiel de la vie.", ref: "UE 4.7", diff: 1 },

  { ueId: "4.7", q: "Quel outil utilise-t-on pour évaluer la douleur d'un patient non communicant ?", options: ["EVA", "EN", "Algoplus", "EVS"], correct: 2,
    explication: "Algoplus est une échelle d'hétéro-évaluation comportementale pour la douleur aiguë chez le patient non communicant. EVA, EN et EVS sont des auto-évaluations.", ref: "UE 4.7", diff: 2 },

  { ueId: "4.7", q: "À quel palier OMS appartient la morphine ?", options: ["Palier I", "Palier II", "Palier III", "Hors classification"], correct: 2,
    explication: "La morphine est un opioïde fort, antalgique de palier III de l'OMS. Le palier I regroupe les non-opioïdes, le palier II les opioïdes faibles.", ref: "UE 4.7", diff: 1 },

  { ueId: "4.7", q: "Quel effet indésirable de la morphine doit faire l'objet d'une prévention systématique ?", options: ["L'hypertension", "La constipation", "La diarrhée", "L'hyperglycémie"], correct: 1,
    explication: "La constipation est un effet quasi constant des opioïdes qui ne s'atténue pas avec le temps ; un laxatif est prescrit systématiquement.", ref: "UE 4.7", diff: 1 },

  { ueId: "4.7", q: "Quels signes évoquent un surdosage en morphine ?", options: ["Mydriase et tachypnée", "Myosis et bradypnée", "Hypertension et agitation", "Fièvre et polypnée"], correct: 1,
    explication: "Le surdosage opioïde associe myosis serré, somnolence et dépression respiratoire (bradypnée inférieure à 8/min). L'antidote est la naloxone.", ref: "UE 4.7", diff: 2 },

  { ueId: "4.7", q: "Quel est l'antidote des opioïdes ?", options: ["Flumazénil", "Naloxone", "Atropine", "N-acétylcystéine"], correct: 1,
    explication: "La naloxone est l'antagoniste des récepteurs opioïdes, utilisée en cas de surdosage. Le flumazénil est l'antidote des benzodiazépines.", ref: "UE 4.7", diff: 2 },

  { ueId: "4.7", q: "Comment nomme-t-on une dose de morphine à libération immédiate prise lors d'un accès douloureux ?", options: ["Dose de charge", "Interdose", "Bolus de titration", "Dose plafond"], correct: 1,
    explication: "L'interdose (ou dose de secours) est une forme à libération immédiate administrée lors des accès douloureux paroxystiques, environ 1/10 à 1/6 de la dose des 24h.", ref: "UE 4.7", diff: 2 },

  { ueId: "4.7", q: "Pour passer de la morphine orale à la voie sous-cutanée, on divise la dose par environ :", options: ["1", "2", "3", "6"], correct: 1,
    explication: "Par principe, la dose orale est divisée par 2 pour la voie sous-cutanée et par 3 pour la voie intraveineuse.", ref: "UE 4.7", diff: 3 },

  { ueId: "4.7", q: "Quel médicament est utilisé contre l'encombrement bronchique (râles agoniques) ?", options: ["Scopolamine", "Métoclopramide", "Morphine LP", "Paracétamol"], correct: 0,
    explication: "La scopolamine, anticholinergique, réduit les sécrétions bronchiques responsables des râles agoniques en fin de vie. On associe positionnement et réduction des apports.", ref: "UE 4.7", diff: 2 },

  { ueId: "4.7", q: "Quel principe éthique justifie de soulager la douleur même au risque d'abréger la vie ?", options: ["Le principe d'autonomie", "Le principe du double effet", "Le principe de bienfaisance pure", "La règle de l'obstination"], correct: 1,
    explication: "Le principe du double effet rend licite un traitement antalgique pouvant accélérer le décès, dès lors que l'intention est le soulagement et non la mort.", ref: "UE 4.7", diff: 2 },

  { ueId: "4.7", q: "Dans le modèle de Kübler-Ross, quelle est la dernière étape du deuil ?", options: ["Déni", "Colère", "Marchandage", "Acceptation"], correct: 3,
    explication: "Les cinq étapes sont déni, colère, marchandage, dépression puis acceptation. Elles ne sont ni linéaires ni obligatoires.", ref: "UE 4.7", diff: 1 },

  { ueId: "4.7", q: "Que signifie l'acronyme EMSP ?", options: ["Équipe mobile de soins palliatifs", "Équipe médicale de surveillance palliative", "Établissement médico-social palliatif", "Échelle de mesure de la souffrance psychique"], correct: 0,
    explication: "L'EMSP (équipe mobile de soins palliatifs) intervient en appui des équipes soignantes dans les services hospitaliers, sans se substituer à elles.", ref: "UE 4.7", diff: 2 },

  { ueId: "4.7", q: "Concernant la personne de confiance, quelle affirmation est exacte ?", options: ["Elle est désignée oralement", "Son avis prime sur celui des autres proches", "Elle décide à la place du patient conscient", "Elle est obligatoirement un membre de la famille"], correct: 1,
    explication: "La personne de confiance est désignée par écrit ; quand le patient ne peut s'exprimer, son témoignage prime sur tout autre avis non médical. Elle ne décide pas à la place du patient conscient.", ref: "UE 4.7", diff: 2 },

  { ueId: "4.7", q: "Les directives anticipées, selon la loi de 2016, sont :", options: ["De simples souhaits non contraignants", "Contraignantes pour le médecin", "Valables seulement 3 mois", "Réservées aux personnes en USP"], correct: 1,
    explication: "Depuis la loi Claeys-Léonetti de 2016, les directives anticipées s'imposent au médecin (sauf urgence vitale le temps d'évaluer, ou si manifestement inappropriées).", ref: "UE 4.7", diff: 2 },

  { ueId: "4.7", q: "Quel soin de confort est prioritaire chez un patient en phase terminale ?", options: ["Bilan sanguin quotidien", "Soins de bouche réguliers", "Pesée biquotidienne", "Radiographie de contrôle"], correct: 1,
    explication: "En phase terminale, on privilégie le confort : soins de bouche, positionnement, prévention des escarres, apaisement, plutôt que les examens invasifs ou inutiles.", ref: "UE 4.7", diff: 1 },

  { ueId: "4.7", q: "La morphine possède-t-elle un effet plafond ?", options: ["Oui, dose maximale fixe", "Non, la dose s'adapte à la douleur", "Oui, au-delà de 60 mg/j", "Seulement par voie orale"], correct: 1,
    explication: "Contrairement aux antalgiques de palier I, la morphine n'a pas d'effet plafond : la posologie est titrée selon l'intensité douloureuse et la réponse du patient.", ref: "UE 4.7", diff: 2 },

  { ueId: "4.7", q: "Quelle structure permet la prise en charge palliative au domicile ?", options: ["USP", "LISP", "HAD", "Bloc opératoire"], correct: 2,
    explication: "L'HAD (hospitalisation à domicile) et les réseaux de soins palliatifs permettent le maintien et l'accompagnement du patient à son domicile.", ref: "UE 4.7", diff: 1 },

  { ueId: "4.7", q: "Quel médicament est le plus utilisé pour la sédation en fin de vie ?", options: ["Morphine", "Midazolam", "Paracétamol", "Scopolamine"], correct: 1,
    explication: "Le midazolam, benzodiazépine d'action rapide, est le médicament de référence de la sédation profonde et continue. La morphine est un antalgique, pas un sédatif.", ref: "UE 4.7", diff: 3 },

  { ueId: "4.7", q: "Comment soulager efficacement une dyspnée en soins palliatifs ?", options: ["Forte hydratation IV", "Morphine à faible dose et position assise", "AINS uniquement", "Ventilation invasive systématique"], correct: 1,
    explication: "La morphine à faible dose réduit la sensation de dyspnée. On y associe la position assise, une ambiance calme et l'oxygène en cas d'hypoxie.", ref: "UE 4.7", diff: 2 },

  { ueId: "4.7", q: "Quel antalgique appartient au palier II de l'OMS ?", options: ["Paracétamol", "Tramadol", "Morphine", "Oxycodone"], correct: 1,
    explication: "Le tramadol et la codéine sont des opioïdes faibles (palier II). Le paracétamol est au palier I, la morphine et l'oxycodone au palier III.", ref: "UE 4.7", diff: 1 },

  { ueId: "4.7", q: "La sédation profonde et continue maintenue jusqu'au décès s'adresse au patient :", options: ["Qui en fait la demande même sans symptôme", "Atteint d'une affection grave et incurable, avec souffrance réfractaire et pronostic vital engagé à court terme", "Hospitalisé en USP uniquement", "Dès l'annonce d'une maladie grave"], correct: 1,
    explication: "Loi de 2016 : la sédation profonde et continue concerne le patient atteint d'une affection grave et incurable, dont le pronostic vital est engagé à court terme, présentant une souffrance réfractaire aux traitements.", ref: "UE 4.7", diff: 3 },

  { ueId: "4.7", q: "Une décision de limitation ou d'arrêt des traitements doit être prise :", options: ["Par l'infirmier seul", "Par le médecin seul sans concertation", "En procédure collégiale", "Par la famille uniquement"], correct: 2,
    explication: "La limitation ou l'arrêt des traitements relève d'une procédure collégiale associant l'équipe et un médecin consultant extérieur, en tenant compte des directives anticipées et de la personne de confiance.", ref: "UE 4.7", diff: 2 },
];

export const flashcards = [
  { ueId: "4.7", recto: "Quel est le but des soins palliatifs ?", verso: "Soulager les symptômes et préserver la qualité de vie et la dignité, sans hâter ni retarder la mort." },
  { ueId: "4.7", recto: "Que condamne la loi Léonetti de 2005 ?", verso: "L'obstination déraisonnable (acharnement thérapeutique)." },
  { ueId: "4.7", recto: "Qu'a apporté la loi Claeys-Léonetti de 2016 ?", verso: "Le droit à la sédation profonde et continue maintenue jusqu'au décès et des directives anticipées contraignantes." },
  { ueId: "4.7", recto: "L'euthanasie est-elle légale en France ?", verso: "Non, l'euthanasie et le suicide assisté sont interdits ; seuls la limitation/arrêt des traitements et la sédation sont autorisés." },
  { ueId: "4.7", recto: "Quelle échelle pour évaluer la douleur d'un patient non communicant ?", verso: "Algoplus (douleur aiguë), Doloplus ou ECPA (douleur chronique de la personne âgée)." },
  { ueId: "4.7", recto: "À quel palier OMS appartient la morphine ?", verso: "Palier III (opioïdes forts)." },
  { ueId: "4.7", recto: "Quels sont les signes d'un surdosage en morphine ?", verso: "Myosis serré, somnolence et bradypnée (inférieure à 8/min)." },
  { ueId: "4.7", recto: "Quel est l'antidote des opioïdes ?", verso: "La naloxone." },
  { ueId: "4.7", recto: "Quel effet indésirable de la morphine doit être prévenu systématiquement ?", verso: "La constipation (laxatif prescrit d'emblée)." },
  { ueId: "4.7", recto: "Qu'est-ce qu'une interdose ?", verso: "Une dose de morphine à libération immédiate donnée lors d'un accès douloureux, environ 1/10 à 1/6 de la dose des 24h." },
  { ueId: "4.7", recto: "Comment passer de la morphine orale à la voie SC ?", verso: "Diviser la dose orale par 2 (et par 3 pour la voie IV)." },
  { ueId: "4.7", recto: "Quel médicament contre l'encombrement bronchique terminal ?", verso: "La scopolamine (anticholinergique)." },
  { ueId: "4.7", recto: "Qu'est-ce que le principe du double effet ?", verso: "Soulager la douleur même au risque d'abréger la vie est licite si l'intention est le soulagement et non la mort." },
  { ueId: "4.7", recto: "Citez les 5 étapes du deuil selon Kübler-Ross.", verso: "Déni, colère, marchandage, dépression, acceptation." },
  { ueId: "4.7", recto: "Que signifient USP, LISP et EMSP ?", verso: "Unité de soins palliatifs, Lits identifiés de soins palliatifs, Équipe mobile de soins palliatifs." },
  { ueId: "4.7", recto: "Quel est le médicament de référence de la sédation en fin de vie ?", verso: "Le midazolam (benzodiazépine d'action rapide)." },
  { ueId: "4.7", recto: "Quel est le rôle de la personne de confiance ?", verso: "Désignée par écrit, son témoignage prime sur les autres proches quand le patient ne peut s'exprimer." },
  { ueId: "4.7", recto: "Comment soulager une dyspnée en soins palliatifs ?", verso: "Morphine à faible dose, position assise, ambiance calme, oxygène si hypoxie." },
  { ueId: "4.7", recto: "Que sont les soins palliatifs précoces ?", verso: "Une démarche palliative pouvant débuter tôt et coexister avec des traitements curatifs ; la phase terminale n'en est que la dernière étape." },
  { ueId: "4.7", recto: "Sédation vs euthanasie : quelle différence ?", verso: "La sédation vise à soulager une souffrance réfractaire (le décès n'est pas l'objectif) ; l'euthanasie a pour but de donner la mort. Seule la sédation est autorisée en France." },
  { ueId: "4.7", recto: "Qu'est-ce que la procédure collégiale ?", verso: "Une décision de limitation ou d'arrêt des traitements prise de façon concertée (équipe + médecin extérieur), jamais par un seul soignant." },
  { ueId: "4.7", recto: "Les directives anticipées ont-elles une durée de validité ?", verso: "Depuis 2016, elles sont valables sans limite de durée, révisables et révocables à tout moment." },
  { ueId: "4.7", recto: "Quelle prévention systématique chez le patient alité en fin de vie ?", verso: "Prévention des escarres (changements de position, supports), soins de bouche réguliers et prévention de la constipation sous opioïdes." },
  { ueId: "4.7", recto: "La morphine a-t-elle un effet plafond ?", verso: "Non : la dose se titre selon l'intensité de la douleur, sans dose maximale fixe." },
  { ueId: "4.7", recto: "À quoi sert le midazolam en fin de vie ?", verso: "C'est la benzodiazépine de référence pour la sédation (anxiété, agitation, sédation profonde et continue). Ce n'est pas un antalgique." },
];
