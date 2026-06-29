// Pack UE 2.2 PLUS — Anatomie-physiologie des grandes fonctions (compléments).
// Contenu nouveau et complémentaire : régulations, couplages physiologiques,
// applications cliniques infirmières (lecture des constantes, gestes, calculs).

export const fiches = [
  {
    id: "fx_ue_2_2_plus_regulations_homeostasie",
    ueId: "2.2",
    type: "cours",
    titre: "Les boucles de régulation des grandes fonctions",
    resume: "Comment l'organisme maintient ses constantes par rétrocontrôle, et ce que l'infirmier surveille.",
    tags: ["homéostasie", "rétrocontrôle", "régulation", "constantes"],
    html: `
      <p>L'<span class="key" data-term="homéostasie">homéostasie</span> est le maintien d'un milieu intérieur stable malgré les variations externes. Elle repose sur des <strong>boucles de régulation</strong> : un capteur détecte un écart, un centre intégrateur compare à une valeur de consigne, un effecteur corrige. La plupart fonctionnent en <strong>rétrocontrôle négatif</strong> (la réponse s'oppose à l'écart).</p>
      <h3>Le rétrocontrôle négatif (l'essentiel)</h3>
      <ul>
        <li><strong>Glycémie</strong> : hyperglycémie → <span class="key" data-term="insuline">insuline</span> (pancréas, cellules β) → entrée du glucose, stockage. Hypoglycémie → <span class="key" data-term="glucagon">glucagon</span> (cellules α) → glycogénolyse hépatique.</li>
        <li><strong>Pression artérielle</strong> : les barorécepteurs carotidiens et aortiques informent le bulbe → ajustement du tonus sympathique/parasympathique (FC, vasomotricité).</li>
        <li><strong>Volémie et natrémie</strong> : axe rénine-angiotensine-aldostérone (SRAA) + ADH (hormone antidiurétique).</li>
        <li><strong>Calcémie</strong> : PTH (parathyroïdes) augmente la calcémie, la calcitonine la diminue.</li>
      </ul>
      <div class="callout"><div class="callout-t">Rétrocontrôle positif : l'exception</div>Il amplifie le phénomène jusqu'à un terme. Exemples physiologiques : l'<strong>ocytocine</strong> pendant l'accouchement (contractions de plus en plus fortes) et la cascade de la coagulation. Rare car potentiellement instable.</div>
      <h3>Couplages entre fonctions</h3>
      <table class="tbl">
        <tr><th>Situation</th><th>Réponse intégrée</th></tr>
        <tr><td>Hypoxie</td><td>↑ FR et ↑ FC pour augmenter le transport d'O₂</td></tr>
        <tr><td>Acidose métabolique</td><td>Hyperventilation compensatrice (élimination de CO₂)</td></tr>
        <tr><td>Hémorragie</td><td>Vasoconstriction, tachycardie, soif, oligurie (SRAA + ADH)</td></tr>
        <tr><td>Effort physique</td><td>↑ débit cardiaque, redistribution vasculaire vers les muscles</td></tr>
      </table>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« <em>CAPTEUR — CENTRE — EFFECTEUR</em> » : pour toute constante perturbée, cherchez qui mesure, qui décide, qui corrige. Une constante qui « ne corrige plus » signale une défaillance d'organe.</div>
      <p>En clinique, surveiller les <strong>constantes</strong> (FC, PA, FR, SpO₂, température, diurèse, glycémie) revient à observer ces boucles : une dérive persistante traduit un dépassement des capacités de régulation et doit alerter.</p>
    `,
    refs: ["Marieb, Anatomie et physiologie humaines", "Référentiel de formation IFSI 2009, UE 2.2"]
  },
  {
    id: "fx_ue_2_2_plus_couplage_cardio_respi",
    ueId: "2.2",
    type: "cours",
    titre: "Couplage cardio-respiratoire : du transport de l'O₂ à la SpO₂",
    resume: "Comprendre comment cœur et poumons assurent ensemble l'oxygénation tissulaire.",
    tags: ["oxygénation", "SpO2", "débit cardiaque", "ventilation"],
    html: `
      <p>L'oxygénation des tissus dépend d'une chaîne : <strong>ventilation → hématose → transport → délivrance</strong>. Cœur et poumons forment une unité fonctionnelle ; l'infirmier en lit le résultat sur les constantes.</p>
      <h3>1. Ventilation et hématose</h3>
      <p>Aux alvéoles, l'O₂ diffuse vers le sang et le CO₂ vers l'alvéole (<span class="key" data-term="hématose">hématose</span>). La <strong>fréquence respiratoire</strong> normale de l'adulte au repos est de 12 à 20/min. Une <span class="key" data-term="polypnée">polypnée</span> (FR rapide) ou une <span class="key" data-term="bradypnée">bradypnée</span> sont des signes d'alerte.</p>
      <h3>2. Transport de l'oxygène</h3>
      <ul>
        <li>L'O₂ est transporté surtout fixé à l'<span class="key" data-term="hémoglobine">hémoglobine</span> (une faible part dissoute dans le plasma).</li>
        <li>La <strong>SpO₂</strong> mesure le pourcentage d'hémoglobine saturée en O₂ : normale ≥ 95 % en air ambiant.</li>
        <li>Limite importante : la SpO₂ peut être faussée (anémie sévère, mauvaise perfusion, vernis, intoxication au CO) et ne renseigne pas sur le CO₂.</li>
      </ul>
      <h3>3. Débit cardiaque</h3>
      <div class="callout"><div class="callout-t">Formule clé</div><strong>Débit cardiaque = Fréquence cardiaque × Volume d'éjection systolique</strong>. Un cœur peut compenser une baisse de volume d'éjection en accélérant : c'est pourquoi une <strong>tachycardie</strong> est souvent le premier signe d'un choc débutant, avant la chute de la PA.</div>
      <h3>Lecture infirmière intégrée</h3>
      <table class="tbl">
        <tr><th>Constante</th><th>Ce qu'elle explore</th></tr>
        <tr><td>FR</td><td>Efficacité de la ventilation</td></tr>
        <tr><td>SpO₂</td><td>Saturation de l'hémoglobine (transport)</td></tr>
        <tr><td>FC</td><td>Adaptation du débit cardiaque</td></tr>
        <tr><td>PA</td><td>Perfusion d'aval (pression)</td></tr>
        <tr><td>Coloration, marbrures, recoloration capillaire</td><td>Perfusion tissulaire réelle</td></tr>
      </table>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« <em>Une SpO₂ correcte ne garantit pas une bonne oxygénation tissulaire</em> » : il faut aussi un débit cardiaque et une hémoglobine suffisants. Toujours croiser les signes.</div>
      <div class="callout"><div class="callout-t">Rappel oxygénothérapie</div>Selon les recommandations, l'oxygène n'est pas systématique : on le titre selon la SpO₂. Chez l'insuffisant respiratoire chronique (BPCO), un objectif de SpO₂ trop élevé peut être délétère ; suivre la prescription et la cible fixée.</div>
    `,
    refs: ["Marieb, Anatomie et physiologie humaines", "West, Physiologie respiratoire"]
  },
  {
    id: "fx_ue_2_2_plus_rein_digestif_endocrine",
    ueId: "2.2",
    type: "cours",
    titre: "Rein, digestif et endocrinien : les fonctions d'épuration et de régulation interne",
    resume: "Filtration rénale, digestion-absorption et grandes hormones, avec leurs repères de surveillance.",
    tags: ["néphron", "digestion", "hormones", "diurèse"],
    html: `
      <h3>Fonction rénale</h3>
      <p>L'unité fonctionnelle du rein est le <span class="key" data-term="néphron">néphron</span>. Le rein assure trois grandes missions : <strong>épuration</strong> des déchets (urée, créatinine), <strong>régulation</strong> de l'eau et des électrolytes (Na⁺, K⁺), et une fonction <strong>endocrine</strong> (rénine, érythropoïétine, activation de la vitamine D).</p>
      <ul>
        <li><strong>Filtration</strong> glomérulaire → urine primitive.</li>
        <li><strong>Réabsorption</strong> tubulaire (eau, glucose, ions) et <strong>sécrétion</strong> → urine définitive.</li>
        <li>La <span class="key" data-term="diurèse">diurèse</span> normale est d'environ 1 à 1,5 L/24 h. On parle d'<strong>oligurie</strong> sous ~0,5 mL/kg/h, signe d'alerte de bas débit rénal.</li>
      </ul>
      <div class="callout"><div class="callout-t">Surveillance infirmière</div>Diurèse (volume, aspect, couleur), bilan entrées/sorties, poids quotidien (un kilo ≈ un litre d'eau), œdèmes, et résultats biologiques (créatinine, ionogramme, kaliémie). L'<strong>hyperkaliémie</strong> est une urgence par son risque de troubles du rythme.</div>
      <h3>Fonction digestive</h3>
      <p>Le tube digestif réalise la <strong>digestion mécanique et chimique</strong> puis l'<strong>absorption</strong> des nutriments, surtout dans l'intestin grêle. Le foie produit la bile (émulsion des graisses) et le pancréas des enzymes (amylase, lipase, protéases) et du bicarbonate.</p>
      <table class="tbl">
        <tr><th>Organe</th><th>Rôle clé</th></tr>
        <tr><td>Estomac</td><td>Brassage, acidité, début digestion des protéines</td></tr>
        <tr><td>Intestin grêle</td><td>Site principal de l'absorption</td></tr>
        <tr><td>Foie</td><td>Bile, métabolisme, détoxification</td></tr>
        <tr><td>Pancréas</td><td>Enzymes (exocrine) + insuline/glucagon (endocrine)</td></tr>
        <tr><td>Côlon</td><td>Réabsorption d'eau, formation des selles</td></tr>
      </table>
      <h3>Fonction endocrinienne</h3>
      <p>Les hormones sont des messagers chimiques transportés par le sang, agissant à distance sur des cellules cibles. L'<span class="key" data-term="hypophyse">hypophyse</span>, sous contrôle de l'hypothalamus, est le « chef d'orchestre ».</p>
      <table class="tbl">
        <tr><th>Glande</th><th>Hormone</th><th>Effet principal</th></tr>
        <tr><td>Pancréas</td><td>Insuline / glucagon</td><td>Baisse / hausse de la glycémie</td></tr>
        <tr><td>Thyroïde</td><td>T3/T4</td><td>Métabolisme de base</td></tr>
        <tr><td>Surrénales</td><td>Cortisol, aldostérone, adrénaline</td><td>Stress, Na⁺/K⁺, réponse d'urgence</td></tr>
        <tr><td>Parathyroïdes</td><td>PTH</td><td>Augmente la calcémie</td></tr>
        <tr><td>Hypophyse post.</td><td>ADH</td><td>Réabsorption d'eau (concentre les urines)</td></tr>
      </table>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« <em>InSuline = entrée du Sucre dans la cellule</em> » (les deux S). À l'inverse, le glucagon le fait sortir des réserves hépatiques.</div>
    `,
    refs: ["Marieb, Anatomie et physiologie humaines", "Référentiel de formation IFSI 2009, UE 2.2"]
  }
];

export const qcm = [
  {
    ueId: "2.2",
    q: "Quel mécanisme assure la stabilité de la plupart des constantes physiologiques ?",
    options: ["Le rétrocontrôle positif", "Le rétrocontrôle négatif", "La diffusion passive seule", "Le hasard métabolique"],
    correct: 1,
    explication: "La majorité des régulations homéostatiques fonctionnent par rétrocontrôle négatif : la réponse s'oppose à l'écart détecté et ramène la constante vers sa valeur de consigne. Le rétrocontrôle positif est l'exception (accouchement, coagulation).",
    ref: "Marieb, Anatomie et physiologie humaines",
    diff: 1
  },
  {
    ueId: "2.2",
    q: "Le débit cardiaque est le produit de :",
    options: ["FC × pression artérielle", "FC × volume d'éjection systolique", "Volémie × résistance vasculaire", "FR × volume courant"],
    correct: 1,
    explication: "Débit cardiaque = fréquence cardiaque × volume d'éjection systolique. Une tachycardie peut ainsi compenser une baisse du volume d'éjection, ce qui explique qu'elle soit un signe précoce de choc.",
    ref: "Marieb, Anatomie et physiologie humaines",
    diff: 1
  },
  {
    ueId: "2.2",
    q: "Que mesure précisément la SpO₂ au saturomètre de pouls ?",
    options: ["La pression partielle d'O₂ dissous", "Le pourcentage d'hémoglobine saturée en oxygène", "La quantité de CO₂ dans le sang", "Le débit cardiaque"],
    correct: 1,
    explication: "La SpO₂ exprime le pourcentage d'hémoglobine fixant l'oxygène (normale ≥ 95 % en air ambiant). Elle ne renseigne pas sur le CO₂ ni, à elle seule, sur l'oxygénation tissulaire réelle, qui dépend aussi du débit et de l'hémoglobine.",
    ref: "West, Physiologie respiratoire",
    diff: 2
  },
  {
    ueId: "2.2",
    q: "Dans quelle situation la SpO₂ peut-elle être faussement rassurante ?",
    options: ["Intoxication au monoxyde de carbone (CO)", "Hyperventilation simple", "Bradycardie isolée", "Fièvre modérée"],
    correct: 0,
    explication: "Le CO se fixe sur l'hémoglobine à la place de l'O₂ (carboxyhémoglobine) ; le saturomètre standard la lit comme saturée et affiche une SpO₂ normale alors que le transport d'O₂ est effondré. D'où l'importance de croiser avec la clinique et la mesure spécifique.",
    ref: "West, Physiologie respiratoire",
    diff: 3
  },
  {
    ueId: "2.2",
    q: "Quelle hormone fait baisser la glycémie ?",
    options: ["Le glucagon", "L'insuline", "Le cortisol", "L'adrénaline"],
    correct: 1,
    explication: "L'insuline, sécrétée par les cellules β du pancréas, favorise l'entrée du glucose dans les cellules et son stockage : elle abaisse la glycémie. Glucagon, cortisol et adrénaline sont au contraire hyperglycémiants.",
    ref: "Marieb, Anatomie et physiologie humaines",
    diff: 1
  },
  {
    ueId: "2.2",
    q: "Quelle est l'unité fonctionnelle du rein ?",
    options: ["L'alvéole", "Le néphron", "L'hépatocyte", "Le glomérule pulmonaire"],
    correct: 1,
    explication: "Le néphron est l'unité fonctionnelle du rein. Il comprend le glomérule (filtration) et le tubule (réabsorption et sécrétion), aboutissant à la formation de l'urine définitive.",
    ref: "Marieb, Anatomie et physiologie humaines",
    diff: 1
  },
  {
    ueId: "2.2",
    q: "Une diurèse normale chez l'adulte se situe approximativement autour de :",
    options: ["0,2 L/24 h", "1 à 1,5 L/24 h", "4 à 5 L/24 h", "10 L/24 h"],
    correct: 1,
    explication: "La diurèse normale de l'adulte est d'environ 1 à 1,5 L par 24 heures. Une oligurie (sous environ 0,5 mL/kg/h) doit alerter sur un bas débit rénal ou une déshydratation.",
    ref: "Référentiel de formation IFSI 2009, UE 2.2",
    diff: 1
  },
  {
    ueId: "2.2",
    q: "Quel ion, en excès, expose particulièrement au risque de troubles du rythme cardiaque ?",
    options: ["Le calcium", "Le potassium", "Le chlore", "Le phosphore"],
    correct: 1,
    explication: "L'hyperkaliémie (excès de potassium) perturbe l'excitabilité cardiaque et peut provoquer des troubles du rythme graves, voire un arrêt cardiaque. C'est une urgence souvent liée à l'insuffisance rénale.",
    ref: "Marieb, Anatomie et physiologie humaines",
    diff: 2
  },
  {
    ueId: "2.2",
    q: "Où se déroule la majeure partie de l'absorption des nutriments ?",
    options: ["Dans l'estomac", "Dans l'intestin grêle", "Dans le côlon", "Dans l'œsophage"],
    correct: 1,
    explication: "L'intestin grêle est le site principal de l'absorption des nutriments, grâce à sa très grande surface (villosités et microvillosités). Le côlon réabsorbe surtout l'eau et les électrolytes.",
    ref: "Marieb, Anatomie et physiologie humaines",
    diff: 1
  },
  {
    ueId: "2.2",
    q: "Quelle hormone hypophysaire augmente la réabsorption d'eau par le rein ?",
    options: ["L'aldostérone", "L'ADH (hormone antidiurétique)", "La PTH", "La calcitonine"],
    correct: 1,
    explication: "L'ADH (ou vasopressine), libérée par l'hypophyse postérieure, augmente la réabsorption d'eau dans le tubule rénal : elle concentre les urines et limite les pertes hydriques. Son défaut entraîne un diabète insipide.",
    ref: "Marieb, Anatomie et physiologie humaines",
    diff: 2
  },
  {
    ueId: "2.2",
    q: "Face à une acidose métabolique, quelle réponse respiratoire de compensation observe-t-on ?",
    options: ["Une bradypnée", "Une hyperventilation (élimination de CO₂)", "Une apnée prolongée", "Aucune adaptation respiratoire"],
    correct: 1,
    explication: "Le poumon compense l'acidose métabolique par une hyperventilation qui élimine du CO₂ (acide volatil), ce qui tend à corriger le pH. C'est un exemple de couplage entre fonctions respiratoire et métabolique.",
    ref: "West, Physiologie respiratoire",
    diff: 3
  },
  {
    ueId: "2.2",
    q: "Lors d'une hémorragie, quels signes traduisent la mise en jeu des mécanismes de régulation ?",
    options: ["Bradycardie et polyurie", "Tachycardie, vasoconstriction et oligurie", "Hypertension et diurèse abondante", "Bradypnée et hypothermie isolée"],
    correct: 1,
    explication: "La baisse de volémie active le système sympathique et le SRAA : tachycardie, vasoconstriction périphérique et oligurie (le rein retient l'eau et le sodium). Ces signes précèdent souvent la chute tensionnelle.",
    ref: "Marieb, Anatomie et physiologie humaines",
    diff: 2
  },
  {
    ueId: "2.2",
    q: "Quel organe assure à la fois une fonction exocrine (enzymes digestives) et endocrine (insuline/glucagon) ?",
    options: ["Le foie", "Le pancréas", "La rate", "La vésicule biliaire"],
    correct: 1,
    explication: "Le pancréas est une glande mixte : sa partie exocrine sécrète des enzymes digestives (amylase, lipase, protéases) et du bicarbonate, sa partie endocrine (îlots de Langerhans) sécrète insuline et glucagon.",
    ref: "Marieb, Anatomie et physiologie humaines",
    diff: 1
  },
  {
    ueId: "2.2",
    q: "Quel récepteur informe le centre bulbaire de la pression artérielle ?",
    options: ["Les chémorécepteurs cutanés", "Les barorécepteurs carotidiens et aortiques", "Les propriocepteurs musculaires", "Les corpuscules de Pacini"],
    correct: 1,
    explication: "Les barorécepteurs situés dans la crosse aortique et le sinus carotidien détectent les variations de pression et informent le bulbe rachidien, qui ajuste le tonus sympathique/parasympathique (FC, vasomotricité) pour réguler la PA.",
    ref: "Marieb, Anatomie et physiologie humaines",
    diff: 3
  },
  {
    ueId: "2.2",
    q: "La PTH (parathormone) a pour effet principal :",
    options: ["De diminuer la calcémie", "D'augmenter la calcémie", "D'augmenter la glycémie", "De diminuer la kaliémie"],
    correct: 1,
    explication: "La PTH, sécrétée par les parathyroïdes, augmente la calcémie (libération osseuse, réabsorption rénale, activation de la vitamine D). La calcitonine a l'effet inverse, plus modeste chez l'humain.",
    ref: "Marieb, Anatomie et physiologie humaines",
    diff: 2
  },
  {
    ueId: "2.2",
    q: "Quelle fréquence respiratoire est considérée comme normale chez l'adulte au repos ?",
    options: ["4 à 8/min", "12 à 20/min", "30 à 40/min", "50 à 60/min"],
    correct: 1,
    explication: "La fréquence respiratoire normale de l'adulte au repos est de 12 à 20 cycles par minute. Au-delà on parle de polypnée/tachypnée, en deçà de bradypnée : toutes deux sont des signes de surveillance.",
    ref: "Référentiel de formation IFSI 2009, UE 2.2",
    diff: 1
  },
  {
    ueId: "2.2",
    q: "Pourquoi pèse-t-on quotidiennement un patient insuffisant cardiaque ou rénal ?",
    options: ["Pour ajuster ses repas", "Parce qu'une variation de poids reflète une variation du volume hydrique", "Pour calculer son IMC chaque jour", "Cela n'a pas d'intérêt clinique"],
    correct: 1,
    explication: "Une variation rapide de poids reflète surtout une variation d'eau (environ 1 kg pour 1 litre). La pesée quotidienne, couplée au bilan entrées/sorties, dépiste précocement une rétention hydrique (œdèmes, surcharge).",
    ref: "Référentiel de formation IFSI 2009, UE 2.2",
    diff: 2
  },
  {
    ueId: "2.2",
    q: "Quelle est la principale forme de transport de l'oxygène dans le sang ?",
    options: ["Dissous dans le plasma", "Fixé à l'hémoglobine des globules rouges", "Lié à l'albumine", "Sous forme de bicarbonate"],
    correct: 1,
    explication: "La quasi-totalité de l'oxygène est transportée fixée à l'hémoglobine des globules rouges ; seule une faible fraction est dissoute dans le plasma. C'est pourquoi une anémie sévère réduit le transport d'O₂ même avec une SpO₂ correcte.",
    ref: "West, Physiologie respiratoire",
    diff: 2
  },
  {
    ueId: "2.2",
    q: "Quel exemple correspond à un rétrocontrôle POSITIF physiologique ?",
    options: ["La régulation de la glycémie par l'insuline", "Les contractions utérines amplifiées par l'ocytocine lors de l'accouchement", "La régulation de la PA par les barorécepteurs", "La sécrétion d'ADH lors d'une déshydratation"],
    correct: 1,
    explication: "Pendant l'accouchement, l'ocytocine renforce les contractions, qui stimulent davantage sa sécrétion : c'est un rétrocontrôle positif (amplificateur) avec un terme défini. Les autres exemples sont des rétrocontrôles négatifs.",
    ref: "Marieb, Anatomie et physiologie humaines",
    diff: 3
  },
  {
    ueId: "2.2",
    q: "Quel est le rôle endocrine du rein parmi les suivants ?",
    options: ["Sécréter de l'insuline", "Produire de l'érythropoïétine (EPO)", "Sécréter de la bile", "Produire de la T4"],
    correct: 1,
    explication: "Le rein a une fonction endocrine : il produit l'érythropoïétine (stimulant la production de globules rouges), la rénine (régulation tensionnelle) et active la vitamine D. C'est pourquoi l'insuffisance rénale chronique s'accompagne souvent d'anémie.",
    ref: "Marieb, Anatomie et physiologie humaines",
    diff: 3
  },
  {
    ueId: "2.2",
    q: "Quelle structure est le « chef d'orchestre » du système endocrinien, sous contrôle de l'hypothalamus ?",
    options: ["La thyroïde", "L'hypophyse", "Les surrénales", "Le pancréas"],
    correct: 1,
    explication: "L'hypophyse, pilotée par l'hypothalamus, commande de nombreuses autres glandes (thyroïde, surrénales, gonades) via ses hormones stimulantes. Elle coordonne ainsi l'ensemble du système endocrinien.",
    ref: "Marieb, Anatomie et physiologie humaines",
    diff: 1
  }
];

export const flashcards = [
  { ueId: "2.2", recto: "Quel type de rétrocontrôle assure la stabilité de la plupart des constantes ?", verso: "Le rétrocontrôle négatif : la réponse s'oppose à l'écart pour ramener la constante vers sa consigne." },
  { ueId: "2.2", recto: "Formule du débit cardiaque ?", verso: "Débit cardiaque = fréquence cardiaque × volume d'éjection systolique." },
  { ueId: "2.2", recto: "Que mesure la SpO₂ ?", verso: "Le pourcentage d'hémoglobine saturée en oxygène (normale ≥ 95 % en air ambiant)." },
  { ueId: "2.2", recto: "Fréquence respiratoire normale de l'adulte au repos ?", verso: "12 à 20 cycles par minute." },
  { ueId: "2.2", recto: "Hormone qui abaisse la glycémie et son origine ?", verso: "L'insuline, sécrétée par les cellules β du pancréas." },
  { ueId: "2.2", recto: "Hormone qui élève la glycémie en mobilisant le glycogène ?", verso: "Le glucagon (cellules α du pancréas), via la glycogénolyse hépatique." },
  { ueId: "2.2", recto: "Unité fonctionnelle du rein ?", verso: "Le néphron (glomérule + tubule)." },
  { ueId: "2.2", recto: "Diurèse normale sur 24 h chez l'adulte ?", verso: "Environ 1 à 1,5 L/24 h ; oligurie sous environ 0,5 mL/kg/h." },
  { ueId: "2.2", recto: "Quel ion en excès expose aux troubles du rythme cardiaque ?", verso: "Le potassium (hyperkaliémie) : urgence, fréquente dans l'insuffisance rénale." },
  { ueId: "2.2", recto: "Site principal de l'absorption des nutriments ?", verso: "L'intestin grêle (villosités et microvillosités)." },
  { ueId: "2.2", recto: "Rôle de l'ADH (hormone antidiurétique) ?", verso: "Augmenter la réabsorption rénale d'eau : elle concentre les urines." },
  { ueId: "2.2", recto: "Effet principal de la PTH ?", verso: "Augmenter la calcémie (os, rein, vitamine D)." },
  { ueId: "2.2", recto: "Trois fonctions endocrines du rein ?", verso: "Érythropoïétine (globules rouges), rénine (tension), activation de la vitamine D." },
  { ueId: "2.2", recto: "Pourquoi peser un patient chaque jour en cas d'insuffisance cardiaque/rénale ?", verso: "Une variation de poids reflète une variation d'eau (≈ 1 kg = 1 L) : dépistage de surcharge." },
  { ueId: "2.2", recto: "Sous quelle forme l'O₂ est-il majoritairement transporté ?", verso: "Fixé à l'hémoglobine des globules rouges (faible part dissoute dans le plasma)." }
];
