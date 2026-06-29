// UE 2.8 — Processus obstructifs. Pack de révision IFSI (référentiel 2009).
export const fiches = [
  {
    id: "f_2_8_bases", ueId: "2.8", type: "cours",
    titre: "Processus obstructifs : définitions et mécanismes",
    resume: "Comprendre l'obstruction d'un conduit (vaisseau, voies respiratoires, digestives, urinaires) et ses conséquences.",
    tags: ["obstruction", "occlusion", "physiopathologie", "ischémie"],
    html: `
      <p>Un <span class="key" data-term="processus obstructif">processus obstructif</span> correspond à la <strong>réduction ou la suppression du calibre d'un conduit anatomique</strong> (vaisseau, bronche, intestin, voie urinaire ou biliaire), gênant ou interrompant le passage d'un flux (sang, air, aliments, urine, bile).</p>
      <h3>Mécanismes possibles</h3>
      <ul>
        <li><strong>Obstruction intraluminale</strong> : un corps obstrue la lumière (caillot, calcul, bouchon muqueux, corps étranger, fécalome).</li>
        <li><strong>Obstruction pariétale</strong> : épaississement ou tumeur de la paroi (sténose, plaque d'<span class="key" data-term="athérome">athérome</span>, cancer).</li>
        <li><strong>Compression extrinsèque</strong> : un élément externe écrase le conduit (tumeur, adénopathie, bride, hernie étranglée).</li>
        <li><strong>Spasme</strong> : contraction du muscle lisse (bronchospasme, spasme coronaire).</li>
      </ul>
      <h3>Conséquences générales</h3>
      <ul>
        <li><strong>En amont</strong> : stagnation, distension, hyperpression (rétention).</li>
        <li><strong>En aval</strong> : défaut d'apport, <span class="key" data-term="ischémie">ischémie</span> puis <span class="key" data-term="nécrose">nécrose</span> si l'obstruction est complète et durable.</li>
      </ul>
      <div class="callout"><div class="callout-t">Aigu vs chronique</div>Une obstruction <strong>aiguë et complète</strong> (embolie, occlusion intestinale) est une <strong>urgence</strong> (risque de nécrose). Une obstruction <strong>chronique et progressive</strong> (athérome, BPCO) laisse le temps à des mécanismes d'adaptation (circulation collatérale, hypertrophie).</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« <strong>I-P-C-S</strong> » pour les mécanismes : <strong>I</strong>ntraluminal, <strong>P</strong>ariétal, <strong>C</strong>ompression, <strong>S</strong>pasme.</div>
    `,
    refs: ["UE 2.8"],
  },
  {
    id: "f_2_8_vasculaire", ueId: "2.8", type: "patho",
    titre: "Obstructions vasculaires : artérielles et veineuses",
    resume: "Athérome, thrombose, embolie : de l'AOMI et l'IDM à la TVP et l'embolie pulmonaire.",
    tags: ["thrombose", "embolie", "athérome", "ischémie", "AOMI"],
    html: `
      <p>L'obstruction d'un vaisseau résulte le plus souvent d'une <span class="key" data-term="thrombose">thrombose</span> (caillot formé sur place) ou d'une <span class="key" data-term="embolie">embolie</span> (caillot migré, thrombus, gaz, graisse). L'<span class="key" data-term="athérosclérose">athérosclérose</span> est le terrain favorisant majeur du versant artériel.</p>
      <h3>Obstructions artérielles</h3>
      <ul>
        <li><strong>AOMI</strong> (artériopathie oblitérante des membres inférieurs) : claudication intermittente, douleur, abolition des pouls, risque d'ischémie aiguë.</li>
        <li><strong>Infarctus du myocarde</strong> : occlusion d'une coronaire, douleur thoracique constrictive, urgence absolue.</li>
        <li><strong>AVC ischémique</strong> : occlusion d'une artère cérébrale, déficit neurologique brutal.</li>
      </ul>
      <h3>Obstructions veineuses</h3>
      <ul>
        <li><strong>TVP</strong> (thrombose veineuse profonde) : mollet douloureux, chaud, œdème unilatéral (le signe de Homans est peu fiable et n'est plus recommandé).</li>
        <li><strong>Embolie pulmonaire</strong> : migration d'un thrombus veineux vers les artères pulmonaires (dyspnée, douleur, tachycardie).</li>
      </ul>
      <div class="callout"><div class="callout-t">Triade de Virchow</div>La thrombose veineuse est favorisée par trois facteurs : <strong>stase</strong> sanguine, <strong>lésion endothéliale</strong> et <strong>hypercoagulabilité</strong>.</div>
      <table class="tbl">
        <tr><th>Versant</th><th>Conséquence dominante</th><th>Exemple</th></tr>
        <tr><td>Artériel</td><td>Ischémie en aval</td><td>IDM, AOMI, AVC</td></tr>
        <tr><td>Veineux</td><td>Stase et risque embolique</td><td>TVP, embolie pulmonaire</td></tr>
      </table>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Triade de Virchow = « <strong>S-L-H</strong> » : <strong>S</strong>tase, <strong>L</strong>ésion de paroi, <strong>H</strong>ypercoagulabilité.</div>
    `,
    refs: ["UE 2.8"],
  },
  {
    id: "f_2_8_respiratoire", ueId: "2.8", type: "patho",
    titre: "Obstructions respiratoires : asthme, BPCO, embolie pulmonaire",
    resume: "Obstruction des voies aériennes et des vaisseaux pulmonaires : mécanismes, signes et urgences.",
    tags: ["asthme", "BPCO", "bronchospasme", "dyspnée", "respiratoire"],
    html: `
      <p>Les voies aériennes peuvent être obstruées par un <span class="key" data-term="bronchospasme">bronchospasme</span>, une inflammation, une hypersécrétion de mucus ou un corps étranger. On parle de <strong>syndrome obstructif</strong> lorsque le débit expiratoire est diminué (rapport de Tiffeneau VEMS/CV abaissé).</p>
      <h3>Asthme</h3>
      <ul>
        <li>Obstruction <strong>réversible</strong> et paroxystique : bronchospasme, œdème, hypersécrétion.</li>
        <li>Signes : dyspnée expiratoire, <strong>sibilants</strong>, toux ; la crise grave menace le pronostic vital.</li>
      </ul>
      <h3>BPCO</h3>
      <ul>
        <li>Obstruction <strong>permanente et progressive</strong>, peu réversible, liée surtout au <strong>tabac</strong>.</li>
        <li>Évolution vers l'insuffisance respiratoire chronique ; risque d'exacerbations.</li>
      </ul>
      <h3>Obstruction aiguë des voies aériennes hautes</h3>
      <ul>
        <li><strong>Corps étranger</strong> : toux, tirage, cyanose, asphyxie ; manœuvre de Heimlich si obstruction complète.</li>
      </ul>
      <div class="callout"><div class="callout-t">Embolie pulmonaire</div>Obstruction d'une artère pulmonaire par un thrombus (souvent issu d'une TVP) : dyspnée brutale, douleur thoracique, tachycardie. Urgence vitale liée au risque de défaillance cardiaque droite.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Crise d'asthme grave : surveiller « <strong>silence auscultatoire</strong> » (poumon qui ne ventile plus), signe de gravité.</div>
    `,
    refs: ["UE 2.8"],
  },
  {
    id: "f_2_8_digestif_urinaire", ueId: "2.8", type: "patho",
    titre: "Obstructions digestives, urinaires et biliaires",
    resume: "Occlusion intestinale, lithiase urinaire et biliaire : mécanismes et signes d'alerte.",
    tags: ["occlusion intestinale", "lithiase", "colique", "rétention", "calcul"],
    html: `
      <p>De nombreux conduits creux peuvent s'obstruer : tube digestif, voies urinaires, voies biliaires. La conséquence commune est une <strong>stase en amont</strong> avec distension et douleur.</p>
      <h3>Occlusion intestinale</h3>
      <ul>
        <li><strong>Mécanique</strong> : obstacle (tumeur, bride, hernie étranglée, fécalome) ; <strong>fonctionnelle/iléus</strong> : arrêt du péristaltisme.</li>
        <li>Signes : douleurs, <strong>arrêt des matières et des gaz</strong>, vomissements, météorisme.</li>
        <li>Risque de strangulation, nécrose, perforation et péritonite.</li>
      </ul>
      <h3>Obstruction urinaire</h3>
      <ul>
        <li><span class="key" data-term="colique néphrétique">Colique néphrétique</span> : calcul migrant dans l'uretère, douleur lombaire violente irradiante.</li>
        <li><span class="key" data-term="rétention aiguë d'urine">Rétention aiguë d'urine</span> : globe vésical douloureux (souvent obstacle prostatique).</li>
      </ul>
      <h3>Obstruction biliaire</h3>
      <ul>
        <li><span class="key" data-term="lithiase biliaire">Lithiase</span> : calcul dans la vésicule ou la voie biliaire principale.</li>
        <li>Obstruction de la voie biliaire : <strong>ictère</strong>, urines foncées, selles décolorées ; risque d'angiocholite.</li>
      </ul>
      <div class="callout"><div class="callout-t">Signe d'alerte urinaire</div>Une rétention complète d'urine est une urgence : le sondage évacuateur soulage rapidement le globe vésical. Surveiller le <strong>syndrome de levée d'obstacle</strong> (polyurie) après drainage.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Occlusion = « <strong>les 4 D</strong> » : <strong>D</strong>ouleur, <strong>D</strong>istension (météorisme), <strong>D</strong>iète forcée (vomissements), <strong>D</strong>éfaut de transit (arrêt matières/gaz).</div>
    `,
    refs: ["UE 2.8"],
  },
];

export const qcm = [
  {
    ueId: "2.8", q: "Quelle définition correspond le mieux à un processus obstructif ?",
    options: [
      "Une inflammation diffuse d'un organe",
      "La réduction ou la suppression du calibre d'un conduit gênant un flux",
      "Une infection bactérienne généralisée",
      "Une prolifération tumorale bénigne sans symptôme",
    ],
    correct: 1,
    explication: "Le processus obstructif désigne la réduction ou l'occlusion de la lumière d'un conduit (vaisseau, bronche, intestin, voie urinaire/biliaire) entravant le passage d'un flux. L'inflammation et l'infection relèvent d'autres processus.",
    ref: "UE 2.8", diff: 1,
  },
  {
    ueId: "2.8", q: "Quel mécanisme correspond à une compression extrinsèque ?",
    options: [
      "Un calcul dans la lumière du conduit",
      "Un épaississement de la paroi du conduit",
      "Un élément externe qui écrase le conduit (tumeur, bride)",
      "Une contraction du muscle lisse de la paroi",
    ],
    correct: 2,
    explication: "La compression extrinsèque est due à une structure externe au conduit (tumeur, adénopathie, bride, hernie). Le calcul est intraluminal, l'épaississement est pariétal, et la contraction du muscle lisse est un spasme.",
    ref: "UE 2.8", diff: 1,
  },
  {
    ueId: "2.8", q: "Quelle est la conséquence principale en aval d'une obstruction artérielle complète et durable ?",
    options: ["Une hyperpression veineuse", "Une ischémie puis une nécrose", "Un œdème inflammatoire isolé", "Une augmentation du débit sanguin"],
    correct: 1,
    explication: "En aval d'une obstruction artérielle, le défaut d'apport en sang oxygéné provoque une ischémie qui, si elle se prolonge, évolue vers la nécrose tissulaire. C'est ce qui fait la gravité de l'IDM ou de l'ischémie aiguë de membre.",
    ref: "UE 2.8", diff: 2,
  },
  {
    ueId: "2.8", q: "Quelle différence existe entre thrombose et embolie ?",
    options: [
      "La thrombose est un caillot formé sur place, l'embolie un corps qui a migré",
      "La thrombose touche uniquement les artères, l'embolie les veines",
      "Ce sont deux termes synonymes",
      "La thrombose est toujours gazeuse, l'embolie toujours graisseuse",
    ],
    correct: 0,
    explication: "La thrombose désigne la formation d'un caillot sur place dans un vaisseau. L'embolie correspond à la migration d'un corps (thrombus, gaz, graisse) qui vient obstruer un vaisseau à distance. Les deux peuvent concerner artères et veines.",
    ref: "UE 2.8", diff: 1,
  },
  {
    ueId: "2.8", q: "Les trois facteurs de la triade de Virchow favorisant la thrombose sont :",
    options: [
      "Fièvre, douleur, rougeur",
      "Stase sanguine, lésion endothéliale, hypercoagulabilité",
      "Hypertension, diabète, tabac",
      "Anémie, déshydratation, hyperthermie",
    ],
    correct: 1,
    explication: "La triade de Virchow réunit la stase veineuse (immobilisation), la lésion de la paroi endothéliale et l'hypercoagulabilité du sang. Ces trois éléments expliquent la formation des thromboses veineuses.",
    ref: "UE 2.8", diff: 2,
  },
  {
    ueId: "2.8", q: "Quel signe évoque une thrombose veineuse profonde (TVP) du membre inférieur ?",
    options: [
      "Un membre froid, pâle et sans pouls",
      "Un mollet douloureux, chaud, œdématié et unilatéral",
      "Des deux jambes œdématiées symétriquement",
      "Une claudication intermittente à la marche",
    ],
    correct: 1,
    explication: "La TVP se manifeste typiquement par un mollet unilatéral douloureux, chaud, augmenté de volume (œdème), parfois rouge. Le membre froid, pâle et sans pouls évoque au contraire une ischémie artérielle aiguë.",
    ref: "UE 2.8", diff: 2,
  },
  {
    ueId: "2.8", q: "La principale complication redoutée d'une thrombose veineuse profonde est :",
    options: ["L'infarctus du myocarde", "L'embolie pulmonaire", "L'AVC hémorragique", "La colique néphrétique"],
    correct: 1,
    explication: "Un fragment du thrombus veineux peut se détacher, migrer par le cœur droit et obstruer une artère pulmonaire : c'est l'embolie pulmonaire, complication grave et potentiellement mortelle de la TVP.",
    ref: "UE 2.8", diff: 2,
  },
  {
    ueId: "2.8", q: "Quelle pathologie correspond à l'occlusion d'une artère coronaire ?",
    options: ["AVC ischémique", "Infarctus du myocarde", "AOMI", "Embolie pulmonaire"],
    correct: 1,
    explication: "L'infarctus du myocarde résulte de l'occlusion d'une artère coronaire, privant une partie du muscle cardiaque d'oxygène et entraînant sa nécrose. C'est une urgence absolue.",
    ref: "UE 2.8", diff: 1,
  },
  {
    ueId: "2.8", q: "L'artériopathie oblitérante des membres inférieurs (AOMI) se manifeste typiquement par :",
    options: [
      "Une claudication intermittente et une abolition des pouls",
      "Un mollet chaud et œdématié",
      "Un ictère et des selles décolorées",
      "Un arrêt des matières et des gaz",
    ],
    correct: 0,
    explication: "L'AOMI, liée à l'athérosclérose, provoque une claudication intermittente (douleur à la marche cédant au repos), une abolition ou diminution des pouls périphériques et, à un stade avancé, des douleurs de repos et des troubles trophiques.",
    ref: "UE 2.8", diff: 2,
  },
  {
    ueId: "2.8", q: "Quel facteur de risque est le plus directement impliqué dans l'athérosclérose et la BPCO ?",
    options: ["L'âge jeune", "Le tabac", "Une alimentation riche en fibres", "L'activité physique régulière"],
    correct: 1,
    explication: "Le tabac est un facteur de risque majeur commun : il favorise l'athérosclérose (obstructions artérielles) et constitue la principale cause de la BPCO (obstruction bronchique chronique).",
    ref: "UE 2.8", diff: 1,
  },
  {
    ueId: "2.8", q: "Quelle caractéristique distingue l'asthme de la BPCO ?",
    options: [
      "L'asthme donne une obstruction réversible, la BPCO une obstruction peu réversible",
      "L'asthme est toujours irréversible et permanent",
      "La BPCO touche surtout l'enfant non fumeur",
      "L'asthme n'entraîne jamais de dyspnée",
    ],
    correct: 0,
    explication: "L'asthme se caractérise par une obstruction bronchique paroxystique et réversible (bronchospasme). La BPCO, surtout liée au tabac, entraîne une obstruction permanente, progressive et peu réversible.",
    ref: "UE 2.8", diff: 2,
  },
  {
    ueId: "2.8", q: "Quel signe auscultatoire est typique d'une crise d'asthme ?",
    options: ["Des crépitants", "Des sibilants (wheezing)", "Un souffle systolique", "Un frottement péricardique"],
    correct: 1,
    explication: "La crise d'asthme se traduit par des sibilants (wheezing), bruits aigus expiratoires liés au rétrécissement des bronches. Attention : un silence auscultatoire est un signe de gravité (bronches quasi obstruées).",
    ref: "UE 2.8", diff: 2,
  },
  {
    ueId: "2.8", q: "Lors d'une obstruction complète des voies aériennes par un corps étranger chez l'adulte conscient, on réalise :",
    options: [
      "Une intubation immédiate par l'infirmier",
      "La manœuvre de Heimlich",
      "Un massage cardiaque externe",
      "Une simple surveillance",
    ],
    correct: 1,
    explication: "Devant une obstruction complète des voies aériennes (victime qui ne peut plus parler ni tousser) chez l'adulte conscient, on alterne claques dans le dos et compressions abdominales (manœuvre de Heimlich) pour expulser le corps étranger.",
    ref: "UE 2.8", diff: 2,
  },
  {
    ueId: "2.8", q: "Quels sont les signes cardinaux d'une occlusion intestinale ?",
    options: [
      "Diarrhée et fièvre élevée",
      "Douleur, arrêt des matières et des gaz, vomissements, météorisme",
      "Ictère et urines foncées",
      "Polyurie et soif intense",
    ],
    correct: 1,
    explication: "L'occlusion intestinale associe douleurs abdominales, arrêt des matières et des gaz, vomissements et météorisme (distension abdominale). C'est une urgence en raison du risque de nécrose et de perforation.",
    ref: "UE 2.8", diff: 2,
  },
  {
    ueId: "2.8", q: "Une occlusion intestinale par bride ou hernie étranglée est dite :",
    options: ["Fonctionnelle", "Mécanique", "Inflammatoire", "Infectieuse"],
    correct: 1,
    explication: "Une bride, une hernie étranglée, une tumeur ou un fécalome constituent un obstacle physique : l'occlusion est mécanique. L'occlusion fonctionnelle (iléus) correspond à un arrêt du péristaltisme sans obstacle.",
    ref: "UE 2.8", diff: 2,
  },
  {
    ueId: "2.8", q: "Quelle est la complication grave d'une occlusion intestinale avec strangulation ?",
    options: ["Une polyurie", "Une nécrose puis perforation et péritonite", "Une hypoglycémie", "Une anémie chronique"],
    correct: 1,
    explication: "La strangulation interrompt aussi la vascularisation du segment intestinal, provoquant une ischémie puis une nécrose, pouvant aller jusqu'à la perforation et la péritonite : c'est une urgence chirurgicale.",
    ref: "UE 2.8", diff: 2,
  },
  {
    ueId: "2.8", q: "La colique néphrétique est le plus souvent provoquée par :",
    options: [
      "Un calcul migrant dans l'uretère",
      "Une infection urinaire basse",
      "Une rétention vésicale chronique",
      "Une tumeur de la vessie",
    ],
    correct: 0,
    explication: "La colique néphrétique résulte de la migration d'un calcul dans l'uretère, qui distend les voies urinaires en amont. Elle se traduit par une douleur lombaire violente irradiant vers les organes génitaux.",
    ref: "UE 2.8", diff: 1,
  },
  {
    ueId: "2.8", q: "Un globe vésical douloureux avec impossibilité d'uriner correspond à :",
    options: ["Une colique néphrétique", "Une rétention aiguë d'urine", "Une incontinence", "Une cystite simple"],
    correct: 1,
    explication: "La rétention aiguë d'urine se manifeste par un globe vésical (vessie distendue, palpable, douloureuse) avec impossibilité d'uriner. Elle est souvent liée à un obstacle prostatique et nécessite un sondage évacuateur en urgence.",
    ref: "UE 2.8", diff: 2,
  },
  {
    ueId: "2.8", q: "Après drainage d'une rétention urinaire, quelle surveillance particulière s'impose ?",
    options: [
      "Le syndrome de levée d'obstacle (polyurie)",
      "Une hyperglycémie majeure",
      "Une bradycardie sévère",
      "Une constipation aiguë",
    ],
    correct: 0,
    explication: "Après levée d'un obstacle urinaire, une polyurie importante peut survenir (syndrome de levée d'obstacle), avec risque de déshydratation et de troubles ioniques : il faut surveiller la diurèse, l'hydratation et les électrolytes.",
    ref: "UE 2.8", diff: 3,
  },
  {
    ueId: "2.8", q: "Une obstruction de la voie biliaire principale par un calcul se traduit typiquement par :",
    options: [
      "Un ictère, des urines foncées et des selles décolorées",
      "Une polyurie et une soif intense",
      "Une claudication intermittente",
      "Un arrêt des matières et des gaz",
    ],
    correct: 0,
    explication: "L'obstruction de la voie biliaire empêche l'écoulement de la bile : la bilirubine s'accumule (ictère), les urines deviennent foncées et les selles décolorées (acholiques). Une angiocholite peut compliquer le tableau.",
    ref: "UE 2.8", diff: 2,
  },
  {
    ueId: "2.8", q: "Quelle distinction oppose une obstruction aiguë à une obstruction chronique ?",
    options: [
      "L'aiguë est une urgence à risque de nécrose, la chronique permet des adaptations (collatérales)",
      "L'aiguë est toujours bénigne, la chronique toujours mortelle",
      "Elles ont exactement les mêmes conséquences",
      "La chronique ne concerne que les veines",
    ],
    correct: 0,
    explication: "Une obstruction aiguë et complète interrompt brutalement le flux et constitue une urgence (risque de nécrose). Une obstruction chronique et progressive laisse le temps à des adaptations comme le développement d'une circulation collatérale.",
    ref: "UE 2.8", diff: 2,
  },
  {
    ueId: "2.8", q: "L'embolie pulmonaire se manifeste le plus souvent par :",
    options: [
      "Une dyspnée brutale, une douleur thoracique et une tachycardie",
      "Un ictère et des selles décolorées",
      "Une douleur lombaire irradiante",
      "Un arrêt du transit",
    ],
    correct: 0,
    explication: "L'embolie pulmonaire, due à l'obstruction d'une artère pulmonaire par un thrombus (souvent issu d'une TVP), provoque une dyspnée d'apparition brutale, une douleur thoracique et une tachycardie. C'est une urgence vitale.",
    ref: "UE 2.8", diff: 2,
  },
];

export const flashcards = [
  { ueId: "2.8", recto: "Qu'est-ce qu'un processus obstructif ?", verso: "La réduction ou la suppression du calibre d'un conduit anatomique gênant le passage d'un flux (sang, air, aliments, urine, bile)." },
  { ueId: "2.8", recto: "Cite les quatre mécanismes d'obstruction.", verso: "Intraluminal (calcul, caillot), pariétal (sténose, tumeur de paroi), compression extrinsèque (tumeur, bride) et spasme (bronchospasme)." },
  { ueId: "2.8", recto: "Quelle est la conséquence en aval d'une obstruction artérielle complète ?", verso: "Une ischémie qui, si elle se prolonge, évolue vers la nécrose tissulaire." },
  { ueId: "2.8", recto: "Différence entre thrombose et embolie ?", verso: "La thrombose est un caillot formé sur place ; l'embolie est un corps (caillot, gaz, graisse) ayant migré pour obstruer un vaisseau à distance." },
  { ueId: "2.8", recto: "Quels sont les trois éléments de la triade de Virchow ?", verso: "Stase sanguine, lésion endothéliale (paroi) et hypercoagulabilité." },
  { ueId: "2.8", recto: "Signes typiques d'une TVP du membre inférieur ?", verso: "Mollet unilatéral douloureux, chaud, œdématié, parfois rouge." },
  { ueId: "2.8", recto: "Complication majeure d'une TVP ?", verso: "L'embolie pulmonaire (migration d'un thrombus vers une artère pulmonaire)." },
  { ueId: "2.8", recto: "Qu'est-ce qu'un infarctus du myocarde ?", verso: "L'occlusion d'une artère coronaire entraînant une ischémie puis la nécrose d'une partie du muscle cardiaque." },
  { ueId: "2.8", recto: "Signe d'appel de l'AOMI ?", verso: "La claudication intermittente (douleur à la marche cédant au repos) avec abolition des pouls périphériques." },
  { ueId: "2.8", recto: "Asthme : obstruction réversible ou irréversible ?", verso: "Réversible et paroxystique (bronchospasme, inflammation, hypersécrétion)." },
  { ueId: "2.8", recto: "Quel signe de gravité dans une crise d'asthme sévère ?", verso: "Le silence auscultatoire (le poumon ne ventile plus), traduisant une obstruction quasi complète." },
  { ueId: "2.8", recto: "Quelle manœuvre face à une obstruction complète des voies aériennes par corps étranger (adulte conscient) ?", verso: "La manœuvre de Heimlich (claques dans le dos puis compressions abdominales)." },
  { ueId: "2.8", recto: "Les quatre signes cardinaux de l'occlusion intestinale ?", verso: "Douleur, arrêt des matières et des gaz, vomissements et météorisme (distension abdominale)." },
  { ueId: "2.8", recto: "Occlusion mécanique vs fonctionnelle ?", verso: "Mécanique = obstacle (bride, hernie, tumeur, fécalome) ; fonctionnelle (iléus) = arrêt du péristaltisme sans obstacle." },
  { ueId: "2.8", recto: "Cause habituelle de la colique néphrétique ?", verso: "La migration d'un calcul dans l'uretère, distendant les voies urinaires en amont." },
  { ueId: "2.8", recto: "Qu'est-ce qu'un globe vésical ?", verso: "Une vessie distendue, palpable et douloureuse par rétention aiguë d'urine, nécessitant un sondage évacuateur." },
  { ueId: "2.8", recto: "Triade clinique d'une obstruction biliaire ?", verso: "Ictère, urines foncées et selles décolorées (acholiques)." },
  { ueId: "2.8", recto: "Que surveiller après drainage d'un obstacle urinaire ?", verso: "Le syndrome de levée d'obstacle : polyurie avec risque de déshydratation et de troubles ioniques." },
];
