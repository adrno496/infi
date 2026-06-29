export const fiches = [
  { id: "fx_ue_2_8_plus_pec_aigues", ueId: "2.8", type: "cours",
    titre: "Décompensations aiguës obstructives : reconnaître et agir (BPCO, asthme, occlusion, AOMI aiguë)",
    resume: "Signes de gravité et conduite infirmière d'urgence dans les principales décompensations des processus obstructifs.",
    tags: ["urgence", "gravité", "surveillance"],
    html: `<h3>Logique commune des processus obstructifs</h3>
<p>Un processus obstructif correspond à une <strong>réduction ou un arrêt du flux</strong> (air, sang, contenu digestif, urine) dans un conduit. La conséquence est une <span class="key" data-term="ischémie">ischémie</span> d'aval ou une accumulation en amont. La gravité dépend de la <strong>rapidité d'installation</strong> et du caractère <strong>complet ou incomplet</strong> de l'obstruction.</p>
<table class="tbl">
<tr><th>Pathologie</th><th>Conduit obstrué</th><th>Risque vital majeur</th></tr>
<tr><td>Asthme aigu grave</td><td>Bronches (spasme + inflammation)</td><td>Arrêt respiratoire hypoxique</td></tr>
<tr><td>BPCO en exacerbation</td><td>Bronches (sécrétions + bronchospasme)</td><td>Hypercapnie, acidose, défaillance droite</td></tr>
<tr><td>Occlusion intestinale</td><td>Lumière digestive</td><td>Perforation, choc septique, 3e secteur</td></tr>
<tr><td>AOMI ischémie aiguë</td><td>Artère de membre</td><td>Nécrose, amputation, hyperkaliémie de revascularisation</td></tr>
<tr><td>Lithiase obstructive (urinaire)</td><td>Uretère</td><td>Pyélonéphrite obstructive, sepsis</td></tr>
</table>
<div class="callout"><div class="callout-t">Signes de gravité de l'asthme aigu grave</div>
<ul>
<li>Difficulté à parler (mots isolés), orthopnée, agitation puis somnolence</li>
<li><span class="key" data-term="DEP">DEP</span> &lt; 30 % de la valeur théorique ou habituelle</li>
<li>Fréquence respiratoire &gt; 30/min, fréquence cardiaque &gt; 120/min</li>
<li><strong>Silence auscultatoire</strong> : signe d'extrême gravité (peu d'air mobilisé)</li>
<li>SpO2 basse, cyanose, sueurs, signes d'épuisement</li>
</ul></div>
<h3>Conduite infirmière immédiate</h3>
<ul>
<li><strong>Position</strong> : demi-assis pour la dyspnée respiratoire ; jambe en déclive (vers le bas) dans l'ischémie aiguë de membre.</li>
<li><strong>Oxygénothérapie</strong> : objectif SpO2 94-98 % chez l'asthmatique, mais <strong>cible prudente 88-92 %</strong> chez le BPCO hypercapnique connu pour ne pas aggraver l'hypercapnie.</li>
<li>Pose de voie veineuse, scope, surveillance des paramètres vitaux rapprochée.</li>
<li>Préparation des aérosols de bronchodilatateurs sur prescription, transmission au médecin.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo : occlusion = les 4 signes</div>
<p>« <strong>D.V.A.A.</strong> » : <strong>D</strong>ouleur, <strong>V</strong>omissements, <strong>A</strong>rrêt des matières et des gaz, <strong>A</strong>ugmentation du volume abdominal (météorisme).</p></div>
<div class="callout"><div class="callout-t">Piège BPCO</div>
<p>L'oxygène à fort débit non contrôlé chez un BPCO hypercapnique peut provoquer une narcose au CO2 (somnolence, coma). On titre l'O2 sur la SpO2 et l'on surveille la conscience.</p></div>`,
    refs: ["GINA / GOLD - recommandations internationales asthme et BPCO", "Référentiel IFSI UE 2.8 - Processus obstructifs"] },

  { id: "fx_ue_2_8_plus_pharmaco", ueId: "2.8", type: "cours",
    titre: "Pharmacologie et soins infirmiers des processus obstructifs",
    resume: "Bronchodilatateurs, corticoïdes, anticoagulants et antalgiques : mécanismes, surveillances et calculs infirmiers.",
    tags: ["pharmacologie", "calcul de dose", "surveillance"],
    html: `<h3>Bronchodilatateurs (asthme, BPCO)</h3>
<table class="tbl">
<tr><th>Classe</th><th>Exemple (DCI)</th><th>Effet</th><th>Surveillance IDE</th></tr>
<tr><td>Bêta-2 mimétique courte action</td><td>Salbutamol, terbutaline</td><td>Bronchodilatation rapide</td><td>Tachycardie, tremblements, kaliémie (hypokaliémie)</td></tr>
<tr><td>Anticholinergique</td><td>Ipratropium, tiotropium</td><td>Bronchodilatation, diminution sécrétions</td><td>Sécheresse buccale, glaucome, rétention urinaire</td></tr>
<tr><td>Corticoïde inhalé</td><td>Budésonide, fluticasone</td><td>Anti-inflammatoire de fond</td><td>Candidose buccale → rinçage de bouche</td></tr>
</table>
<div class="callout"><div class="callout-t">Éducation à l'aérosol-doseur</div>
<p>Expirer, déclencher au début d'une inspiration lente et profonde, apnée de 10 s. Une <span class="key" data-term="chambre d'inhalation">chambre d'inhalation</span> améliore le dépôt pulmonaire et réduit les effets locaux.</p></div>
<h3>Anticoagulation (AOMI, ischémie aiguë, post-thrombose)</h3>
<p>L'<span class="key" data-term="héparine">héparine</span> non fractionnée se surveille par le <strong>TCA</strong> (ou l'activité anti-Xa) et impose une surveillance des <strong>plaquettes</strong> (risque de <span class="key" data-term="TIH">TIH</span>, thrombopénie induite par l'héparine). Les <strong>HBPM</strong> se surveillent par anti-Xa si besoin et nécessitent l'évaluation de la fonction rénale (clairance).</p>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo : antidotes</div>
<p>Héparine → <strong>sulfate de protamine</strong>. AVK → <strong>vitamine K</strong> (± PPSB en urgence).</p></div>
<h3>Calcul de débit - exemple</h3>
<p>Prescription : 1000 mL de sérum physiologique sur 8 h, perfuseur à 20 gouttes/mL.</p>
<ul>
<li>Débit horaire = 1000 / 8 = <strong>125 mL/h</strong>.</li>
<li>Débit en gouttes/min = (1000 &times; 20) / (8 &times; 60) = 20000 / 480 &asymp; <strong>42 gouttes/min</strong>.</li>
</ul>
<div class="callout"><div class="callout-t">Antalgie de la colique néphrétique</div>
<p>Les <strong>AINS</strong> (ex. kétoprofène) sont au premier plan car ils diminuent la pression intra-pyélique ; on respecte les contre-indications (insuffisance rénale, ulcère, allergie) et l'on associe les antalgiques selon les paliers OMS sur prescription.</p></div>`,
    refs: ["Vidal / ANSM - bronchodilatateurs et anticoagulants", "Référentiel IFSI UE 2.11 Pharmacologie appliqué à l'UE 2.8"] },
];

export const qcm = [
  { ueId: "2.8", q: "Chez un patient BPCO connu hypercapnique en exacerbation, quelle cible de SpO2 est habituellement recommandée ?",
    options: ["100 %", "94-98 %", "88-92 %", "Moins de 80 %"], correct: 2,
    explication: "Chez le BPCO hypercapnique, une oxygénation trop élevée peut aggraver l'hypercapnie et provoquer une narcose au CO2. On vise une cible prudente de 88-92 % en titrant l'O2.",
    ref: "GOLD - oxygénothérapie BPCO", diff: 2 },

  { ueId: "2.8", q: "Quel signe auscultatoire traduit une extrême gravité dans l'asthme aigu grave ?",
    options: ["Sibilants intenses", "Silence auscultatoire", "Crépitants des bases", "Souffle tubaire"], correct: 1,
    explication: "Le silence auscultatoire signifie que très peu d'air est mobilisé : le bronchospasme est si sévère qu'il n'y a presque plus de flux. C'est un signe d'alarme imposant une prise en charge immédiate.",
    ref: "GINA - asthme aigu grave", diff: 2 },

  { ueId: "2.8", q: "La triade clinique évocatrice d'une occlusion intestinale comporte douleur, météorisme et :",
    options: ["Diarrhée profuse", "Arrêt des matières et des gaz", "Hématémèse", "Polyurie"], correct: 1,
    explication: "L'occlusion associe douleur abdominale, vomissements, météorisme (augmentation du volume abdominal) et surtout l'arrêt des matières et des gaz, témoin de l'interruption du transit.",
    ref: "Sémiologie digestive - occlusion", diff: 1 },

  { ueId: "2.8", q: "Quel est l'antidote du surdosage en héparine ?",
    options: ["Vitamine K", "Sulfate de protamine", "Naloxone", "Flumazénil"], correct: 1,
    explication: "Le sulfate de protamine neutralise l'héparine. La vitamine K est l'antidote des AVK, la naloxone celui des opioïdes, le flumazénil celui des benzodiazépines.",
    ref: "ANSM - héparine", diff: 1 },

  { ueId: "2.8", q: "Quel examen biologique surveille-t-on impérativement sous héparine pour dépister une TIH ?",
    options: ["La glycémie", "La numération plaquettaire", "La créatininémie", "Le ionogramme"], correct: 1,
    explication: "La thrombopénie induite par l'héparine (TIH) impose une surveillance régulière de la numération plaquettaire. Une chute des plaquettes doit faire suspecter une TIH et alerter le médecin.",
    ref: "HAS - surveillance héparine", diff: 2 },

  { ueId: "2.8", q: "Dans l'ischémie aiguë de membre par AOMI, quelle position du membre est conseillée ?",
    options: ["Membre surélevé", "Membre en déclive (vers le bas)", "Membre comprimé par bande", "Membre immobilisé en flexion forcée"], correct: 1,
    explication: "Dans l'ischémie aiguë, on met le membre en déclive pour favoriser l'apport artériel par gravité. On évite la surélévation et la compression qui réduisent encore la perfusion.",
    ref: "Recommandations AOMI ischémie aiguë", diff: 2 },

  { ueId: "2.8", q: "Quels sont les '6 P' de l'ischémie aiguë de membre (en anglais) ?",
    options: ["Pain, Pallor, Pulselessness, Paresthesia, Paralysis, Poikilothermia", "Pain, Pyrexia, Pallor, Pulse, Pruritus, Pressure", "Pulse, Pallor, Pyrexia, Pain, Pus, Pressure", "Pain, Pus, Paralysis, Pallor, Pyrexia, Pulse"], correct: 0,
    explication: "Les 6 P : Pain (douleur), Pallor (pâleur), Pulselessness (abolition du pouls), Paresthesia (paresthésies), Paralysis (paralysie), Poikilothermia (froideur). Ils signent l'ischémie aiguë.",
    ref: "Sémiologie vasculaire - 6 P", diff: 3 },

  { ueId: "2.8", q: "Quel effet indésirable cardiaque surveille-t-on lors d'un aérosol de salbutamol ?",
    options: ["Bradycardie", "Tachycardie", "Bloc auriculo-ventriculaire", "Hypertension sévère isolée"], correct: 1,
    explication: "Le salbutamol, bêta-2 mimétique, peut entraîner tachycardie et tremblements. On surveille aussi une éventuelle hypokaliémie, surtout en cas de doses répétées.",
    ref: "Vidal - salbutamol", diff: 1 },

  { ueId: "2.8", q: "Pour limiter la candidose buccale liée aux corticoïdes inhalés, on conseille au patient de :",
    options: ["Boire un grand verre d'eau avant", "Se rincer la bouche après chaque prise", "Prendre le traitement à jeun strict", "Doubler la dose le matin"], correct: 1,
    explication: "Le rinçage de bouche après l'inhalation d'un corticoïde réduit le dépôt local et le risque de candidose oropharyngée. C'est un point clé d'éducation thérapeutique.",
    ref: "GINA - corticoïdes inhalés", diff: 1 },

  { ueId: "2.8", q: "Prescription : 1000 mL à passer en 8 h. Quel est le débit horaire ?",
    options: ["62 mL/h", "100 mL/h", "125 mL/h", "150 mL/h"], correct: 2,
    explication: "1000 / 8 = 125 mL/h. C'est le calcul de base du débit horaire à maîtriser.",
    ref: "Calculs de doses IDE", diff: 1 },

  { ueId: "2.8", q: "Prescription : 1000 mL en 8 h, perfuseur 20 gouttes/mL. Combien de gouttes/min ?",
    options: ["Environ 21 gouttes/min", "Environ 42 gouttes/min", "Environ 60 gouttes/min", "Environ 84 gouttes/min"], correct: 1,
    explication: "(1000 x 20) / (8 x 60) = 20000 / 480 = 41,6, soit environ 42 gouttes/min.",
    ref: "Calculs de doses IDE", diff: 2 },

  { ueId: "2.8", q: "Quel antalgique est recommandé en première intention dans la colique néphrétique simple ?",
    options: ["Paracétamol seul", "AINS (ex. kétoprofène)", "Antispasmodique seul", "Corticoïde IV"], correct: 1,
    explication: "Les AINS diminuent la pression intra-pyélique et sont très efficaces sur la douleur lithiasique. On respecte les contre-indications (insuffisance rénale, ulcère, allergie).",
    ref: "Recommandations colique néphrétique", diff: 2 },

  { ueId: "2.8", q: "Quelle complication infectieuse grave faut-il craindre devant une lithiase urinaire obstructive avec fièvre ?",
    options: ["Cystite simple", "Pyélonéphrite obstructive (sepsis)", "Urétrite isolée", "Énurésie"], correct: 1,
    explication: "Une obstruction urinaire fébrile peut évoluer vers une pyélonéphrite obstructive, urgence urologique pouvant conduire au sepsis : elle impose un drainage en urgence.",
    ref: "Urgences urologiques - lithiase fébrile", diff: 2 },

  { ueId: "2.8", q: "Dans la BPCO, quelle anomalie gazométrique caractérise l'insuffisance respiratoire chronique évoluée ?",
    options: ["Hypocapnie isolée", "Hypercapnie (PaCO2 élevée)", "Alcalose métabolique pure", "Hypernatrémie"], correct: 1,
    explication: "La BPCO évoluée entraîne une rétention de CO2 (hypercapnie) avec hypoxémie. Cette hypercapnie chronique explique la prudence de l'oxygénothérapie.",
    ref: "GOLD - gazométrie BPCO", diff: 2 },

  { ueId: "2.8", q: "Quel dispositif améliore le dépôt pulmonaire d'un aérosol-doseur, surtout en cas de mauvaise coordination ?",
    options: ["Une canule de Guedel", "Une chambre d'inhalation", "Un masque à haute concentration", "Une sonde nasogastrique"], correct: 1,
    explication: "La chambre d'inhalation sert de réservoir : elle améliore le dépôt bronchique, réduit le dépôt oropharyngé et facilite l'usage chez l'enfant ou la personne âgée.",
    ref: "ETP asthme/BPCO - dispositifs", diff: 1 },

  { ueId: "2.8", q: "Quel paramètre simple permet d'objectiver et de surveiller l'obstruction bronchique de l'asthmatique ?",
    options: ["La diurèse horaire", "Le débit expiratoire de pointe (DEP)", "La pression veineuse centrale", "Le temps de recoloration cutanée"], correct: 1,
    explication: "Le DEP (peak flow) mesure le débit expiratoire de pointe. Un DEP inférieur à 30 % de la valeur théorique signe un asthme aigu grave et guide le suivi.",
    ref: "GINA - DEP", diff: 1 },

  { ueId: "2.8", q: "Dans l'occlusion intestinale, la pose d'une sonde nasogastrique en aspiration vise principalement à :",
    options: ["Nourrir le patient", "Décomprimer le tube digestif en amont", "Administrer les médicaments", "Mesurer la diurèse"], correct: 1,
    explication: "La SNG en aspiration décomprime l'estomac et l'intestin d'amont, soulage les vomissements, réduit le risque d'inhalation et de perforation en attendant la prise en charge étiologique.",
    ref: "Prise en charge occlusion - SNG", diff: 2 },

  { ueId: "2.8", q: "Quel trouble hydroélectrolytique surveille-t-on particulièrement après revascularisation d'une ischémie aiguë de membre ?",
    options: ["Hypocalcémie isolée", "Hyperkaliémie", "Hyponatrémie hypotonique", "Hypophosphatémie"], correct: 1,
    explication: "La revascularisation libère le potassium des cellules musculaires ischémiées (syndrome de revascularisation), exposant à une hyperkaliémie potentiellement mortelle nécessitant une surveillance ECG et biologique.",
    ref: "Syndrome de revascularisation", diff: 3 },

  { ueId: "2.8", q: "Quel signe oriente vers une occlusion par strangulation (urgence chirurgicale) plutôt que par obstruction simple ?",
    options: ["Douleur permanente intense avec signes de choc", "Transit conservé", "Absence totale de douleur", "Disparition spontanée rapide"], correct: 0,
    explication: "Une douleur intense et permanente, des signes de souffrance (fièvre, choc, défense) évoquent une strangulation avec ischémie de l'anse, urgence chirurgicale, contrairement à l'occlusion obstructive plus progressive.",
    ref: "Sémiologie occlusion - strangulation", diff: 3 },

  { ueId: "2.8", q: "Quel facteur de risque est le plus directement impliqué dans la BPCO et l'AOMI ?",
    options: ["Le tabac", "L'altitude", "La consommation de sel", "La sédentarité seule"], correct: 0,
    explication: "Le tabac est le principal facteur de risque commun à la BPCO (atteinte bronchique) et à l'AOMI (athérosclérose). Le sevrage tabagique est un pilier thérapeutique des deux pathologies.",
    ref: "Facteurs de risque BPCO/AOMI", diff: 1 },

  { ueId: "2.8", q: "Comment évalue-t-on simplement le retentissement de l'AOMI à l'effort en consultation ?",
    options: ["Par la mesure du périmètre de marche", "Par la mesure de la diurèse", "Par la spirométrie", "Par le DEP"], correct: 0,
    explication: "Le périmètre de marche (distance avant l'apparition de la claudication intermittente) reflète le retentissement de l'AOMI. L'index de pression systolique (IPS) complète l'évaluation.",
    ref: "Évaluation AOMI - périmètre de marche / IPS", diff: 2 },
];

export const flashcards = [
  { ueId: "2.8", recto: "Cible de SpO2 chez un BPCO hypercapnique connu ?", verso: "88-92 %, en titrant l'oxygène pour éviter l'aggravation de l'hypercapnie." },
  { ueId: "2.8", recto: "Signe auscultatoire d'extrême gravité dans l'asthme aigu grave ?", verso: "Le silence auscultatoire (très peu d'air mobilisé)." },
  { ueId: "2.8", recto: "Triade/tétrade clinique de l'occlusion intestinale ?", verso: "Douleur, vomissements, météorisme et arrêt des matières et des gaz." },
  { ueId: "2.8", recto: "Antidote de l'héparine ?", verso: "Le sulfate de protamine." },
  { ueId: "2.8", recto: "Antidote des AVK ?", verso: "La vitamine K (± PPSB en urgence)." },
  { ueId: "2.8", recto: "Examen à surveiller sous héparine pour la TIH ?", verso: "La numération plaquettaire (risque de thrombopénie induite par l'héparine)." },
  { ueId: "2.8", recto: "Les 6 P de l'ischémie aiguë de membre ?", verso: "Pain, Pallor, Pulselessness, Paresthesia, Paralysis, Poikilothermia." },
  { ueId: "2.8", recto: "Position du membre dans l'ischémie aiguë artérielle ?", verso: "En déclive (vers le bas) pour favoriser l'apport artériel." },
  { ueId: "2.8", recto: "Débit horaire pour 1000 mL en 8 h ?", verso: "125 mL/h (1000 / 8)." },
  { ueId: "2.8", recto: "Antalgique de première intention de la colique néphrétique simple ?", verso: "Les AINS (ex. kétoprofène), si pas de contre-indication." },
  { ueId: "2.8", recto: "Paramètre de surveillance de l'obstruction bronchique de l'asthmatique ?", verso: "Le DEP (débit expiratoire de pointe / peak flow)." },
  { ueId: "2.8", recto: "Conseil après inhalation d'un corticoïde inhalé ?", verso: "Se rincer la bouche pour prévenir la candidose oropharyngée." },
  { ueId: "2.8", recto: "But de la SNG en aspiration dans l'occlusion ?", verso: "Décomprimer le tube digestif d'amont et limiter vomissements/inhalation." },
  { ueId: "2.8", recto: "Trouble électrolytique à craindre après revascularisation d'un membre ischémié ?", verso: "L'hyperkaliémie (syndrome de revascularisation)." },
  { ueId: "2.8", recto: "Facteur de risque commun majeur à la BPCO et à l'AOMI ?", verso: "Le tabac (sevrage = pilier thérapeutique des deux)." },
];
