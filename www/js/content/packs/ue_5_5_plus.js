export const fiches = [
  { id: "fx_ue_5_5_plus_admin_iv_complexe", ueId: "5.5", type: "cours",
    titre: "Administration IV complexe : compatibilités, voies et perfusion en Y",
    resume: "Sécuriser l'administration intraveineuse en situation complexe : compatibilités médicamenteuses, débit et surveillance.",
    tags: ["intraveineux","compatibilite","perfusion","calcul"],
    html: `<h3>Pourquoi la voie IV concentre les risques</h3>
<p>La voie <span class="key" data-term="intraveineuse">intraveineuse</span> est la plus à risque car l'effet est immédiat et irréversible une fois le produit injecté. En situation complexe (polymédication, réanimation, soins palliatifs), l'infirmier·e gère plusieurs perfusions simultanées sur un nombre limité de voies.</p>
<h3>Compatibilités médicamenteuses</h3>
<ul>
<li><strong>Incompatibilité physique</strong> : précipité, trouble, changement de couleur (ex. classiquement <span class="key" data-term="furosemide">furosémide</span> + nombreux produits acides).</li>
<li><strong>Incompatibilité chimique</strong> : dégradation non visible de la molécule.</li>
<li><strong>Solvant</strong> : vérifier si le produit se dilue dans du NaCl 0,9 % ou du glucose 5 % (ex. l'amiodarone se dilue uniquement dans du glucose 5 %).</li>
</ul>
<div class="callout"><div class="callout-t">Règle de sécurité</div>Toujours vérifier la compatibilité dans une source validée (Thériaque, tableau de service, RCP) AVANT de monter deux produits sur la même ligne. En cas de doute : rincer la tubulure au NaCl entre deux produits, ou utiliser une voie séparée.</div>
<h3>Perfusion en Y et voies multiples</h3>
<table class="tbl">
<tr><th>Montage</th><th>Principe</th><th>Risque</th></tr>
<tr><td>Perfusion en Y</td><td>Deux produits convergent vers une même voie via un robinet</td><td>Incompatibilité au point de jonction</td></tr>
<tr><td>Rampe de robinets</td><td>Plusieurs lignes sur un même cathéter</td><td>Bolus involontaire, reflux</td></tr>
<tr><td>Voie dédiée</td><td>Une lumière du cathéter par produit sensible</td><td>Limite le nombre de produits</td></tr>
</table>
<h3>Calcul de débit</h3>
<p>Débit en gouttes/min = (volume en mL × nombre de gouttes par mL) / temps en minutes. Pour un perfuseur standard, <strong>1 mL = 20 gouttes</strong>. Débit en mL/h sur pompe = volume / temps en heures.</p>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« VIVRE » avant chaque IV : <strong>V</strong>oie perméable, <strong>I</strong>dentité patient, <strong>V</strong>érif produit/dose, <strong>R</strong> inçage, <strong>E</strong>ffets/surveillance.</div>`,
    refs: ["Référentiel IFSI 2009, UE 5.5", "RCP / Thériaque", "Décret de compétences infirmières art. R.4311-7 CSP"] },

  { id: "fx_ue_5_5_plus_coordination_situations_complexes", ueId: "5.5", type: "cours",
    titre: "Coordination des soins en situation complexe : rôle infirmier et transmissions",
    resume: "Organiser la continuité et la sécurité des soins autour d'un patient complexe par la coordination pluriprofessionnelle.",
    tags: ["coordination","transmissions","continuite","pluriprofessionnel"],
    html: `<h3>Définir la situation complexe</h3>
<p>Une situation est dite <span class="key" data-term="complexe">complexe</span> lorsque s'additionnent plusieurs facteurs : polypathologie, polymédication, fragilité sociale, parcours impliquant de nombreux intervenants. La coordination devient alors une compétence centrale du rôle infirmier.</p>
<h3>Outils de coordination</h3>
<ul>
<li><strong>Transmissions ciblées</strong> selon la méthode <span class="key" data-term="DAR">DAR</span> : Données, Actions, Résultats.</li>
<li><strong>Dossier de soins</strong> partagé et tracé : valeur juridique et continuité.</li>
<li><strong>Transmission orale structurée</strong> type SBAR : Situation, Background (contexte), Assessment (évaluation), Recommandation.</li>
<li><strong>Réunions de concertation</strong> pluriprofessionnelles (RCP, staff, projet de soins).</li>
</ul>
<table class="tbl">
<tr><th>Étape SBAR</th><th>Contenu</th></tr>
<tr><td>Situation</td><td>Identité, motif, problème actuel</td></tr>
<tr><td>Background</td><td>Antécédents, traitements en cours</td></tr>
<tr><td>Assessment</td><td>Constantes, évaluation clinique</td></tr>
<tr><td>Recommandation</td><td>Ce que l'on attend de l'interlocuteur</td></tr>
</table>
<div class="callout"><div class="callout-t">Cadre réglementaire</div>La traçabilité des soins est une obligation (art. R.4311-3 CSP). Une transmission incomplète est une cause majeure d'événement indésirable lors des points de rupture : changement d'équipe, transfert, sortie.</div>
<h3>Rôle propre et rôle prescrit</h3>
<p>L'infirmier·e articule son <strong>rôle propre</strong> (surveillance, prévention, éducation) avec le <strong>rôle prescrit</strong> (application des thérapeutiques). La coordination consiste à anticiper, alerter au bon moment et organiser les relais.</p>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Pour transmettre vite et sûr : « <strong>SBAR</strong> » — je dis la Situation, le contexte (Background), mon évaluation (Assessment), ma demande (Recommandation).</div>`,
    refs: ["Référentiel IFSI 2009, UE 5.5", "HAS – Saed/SBAR pour la communication soignante", "Art. R.4311-3 CSP"] },

  { id: "fx_ue_5_5_plus_surveillance_iatrogenie", ueId: "5.5", type: "cours",
    titre: "Iatrogénie et surveillance des thérapeutiques à risque",
    resume: "Identifier, prévenir et surveiller les effets indésirables des médicaments à marge thérapeutique étroite.",
    tags: ["iatrogenie","effets-indesirables","surveillance","pharmacovigilance"],
    html: `<h3>Iatrogénie médicamenteuse</h3>
<p>L'<span class="key" data-term="iatrogenie">iatrogénie</span> désigne les conséquences indésirables liées aux soins. Une part importante est évitable et concerne surtout les sujets âgés et les médicaments à <strong>marge thérapeutique étroite</strong>.</p>
<h3>Médicaments à haut risque</h3>
<table class="tbl">
<tr><th>Classe</th><th>Risque principal</th><th>Surveillance infirmière</th></tr>
<tr><td>Anticoagulants (AVK, héparine)</td><td>Hémorragie</td><td>Signes de saignement, INR / TCA selon prescription</td></tr>
<tr><td>Insuline</td><td>Hypoglycémie</td><td>Glycémie capillaire, signes neuroglucopéniques</td></tr>
<tr><td>Digitaliques</td><td>Troubles du rythme</td><td>Pouls, signes de surdosage (nausées, troubles visuels)</td></tr>
<tr><td>Opioïdes</td><td>Dépression respiratoire</td><td>Fréquence respiratoire, sédation, EVA</td></tr>
</table>
<div class="callout"><div class="callout-t">Surdosage digitalique</div>Avant l'administration d'un digitalique, l'infirmier·e prend le <strong>pouls</strong> : en cas de bradycardie marquée (souvent un seuil défini par protocole, classiquement inférieur à 60/min), ne pas administrer et alerter le médecin.</div>
<h3>Déclaration et pharmacovigilance</h3>
<ul>
<li>Tout effet indésirable grave ou inattendu doit être déclaré (pharmacovigilance).</li>
<li>L'infirmier·e participe au repérage et à la traçabilité de l'événement indésirable.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Les 5 B de l'administration sécurisée : le <strong>B</strong>on patient, le <strong>B</strong>on médicament, la <strong>B</strong>onne dose, la <strong>B</strong>onne voie, le <strong>B</strong>on moment.</div>`,
    refs: ["Référentiel IFSI 2009, UE 5.5", "ANSM – pharmacovigilance", "HAS – sécurisation du circuit du médicament"] },
];

export const qcm = [
  { ueId: "5.5", q: "Pour un perfuseur standard, combien de gouttes correspondent en général à 1 mL ?", options: ["10 gouttes", "15 gouttes", "20 gouttes", "60 gouttes"], correct: 2,
    explication: "Avec un perfuseur standard, on retient la convention 1 mL = 20 gouttes. Les microperfuseurs (pédiatrie) utilisent eux 60 gouttes/mL.", ref: "UE 5.5 – calcul de débit", diff: 1 },

  { ueId: "5.5", q: "On doit perfuser 1000 mL en 8 heures avec un perfuseur à 20 gouttes/mL. Quel est le débit approximatif en gouttes/min ?", options: ["21 gouttes/min", "42 gouttes/min", "60 gouttes/min", "125 gouttes/min"], correct: 1,
    explication: "Débit = (1000 × 20) / (8 × 60) = 20000 / 480 ≈ 42 gouttes/min. À noter : 1000 mL / 8 h = 125 mL/h sur pompe.", ref: "UE 5.5 – calcul de débit", diff: 2 },

  { ueId: "5.5", q: "Quel solvant est requis pour diluer l'amiodarone en perfusion ?", options: ["NaCl 0,9 %", "Glucose 5 %", "Eau pour préparation injectable seule", "Ringer lactate"], correct: 1,
    explication: "L'amiodarone se dilue exclusivement dans du glucose 5 % ; le NaCl est incompatible et favorise la précipitation.", ref: "RCP amiodarone", diff: 2 },

  { ueId: "5.5", q: "Que signifie une incompatibilité physique entre deux médicaments en perfusion en Y ?", options: ["Une dégradation invisible de la molécule", "Un précipité, un trouble ou un changement de couleur visible", "Une potentialisation de l'effet thérapeutique", "Une allergie du patient"], correct: 1,
    explication: "L'incompatibilité physique est visible (précipité, trouble, changement de couleur). L'incompatibilité chimique, elle, n'est pas visible mais altère la molécule.", ref: "UE 5.5 – compatibilités", diff: 1 },

  { ueId: "5.5", q: "Dans la méthode SBAR, que représente le 'B' (Background) ?", options: ["La demande adressée à l'interlocuteur", "Le contexte : antécédents et traitements en cours", "Les constantes du jour", "Le bilan biologique uniquement"], correct: 1,
    explication: "Le B (Background) correspond au contexte du patient : antécédents, histoire de la maladie, traitements en cours. Le R final est la Recommandation/demande.", ref: "HAS – Saed/SBAR", diff: 1 },

  { ueId: "5.5", q: "Avant d'administrer un médicament digitalique, quel paramètre l'infirmier·e doit-il systématiquement contrôler ?", options: ["La glycémie", "La fréquence cardiaque (pouls)", "La température", "La diurèse"], correct: 1,
    explication: "Les digitaliques exposent à des troubles du rythme et à la bradycardie. La prise du pouls est indispensable ; en cas de bradycardie marquée, ne pas administrer et alerter.", ref: "UE 5.5 – surveillance digitaliques", diff: 2 },

  { ueId: "5.5", q: "Quel est le risque principal d'un surdosage en opioïdes que l'infirmier·e doit surveiller ?", options: ["Hypertension artérielle", "Dépression respiratoire", "Hyperglycémie", "Hyperthermie"], correct: 1,
    explication: "Les opioïdes peuvent entraîner une dépression respiratoire. La surveillance porte sur la fréquence respiratoire, le niveau de sédation et l'efficacité antalgique (EVA).", ref: "UE 5.5 – opioïdes", diff: 1 },

  { ueId: "5.5", q: "La méthode de transmission ciblée 'DAR' correspond à :", options: ["Diagnostic, Action, Résultat", "Données, Actions, Résultats", "Démarche, Analyse, Réponse", "Donnée, Alerte, Risque"], correct: 1,
    explication: "DAR = Données, Actions, Résultats. C'est la structure d'une transmission ciblée écrite dans le dossier de soins.", ref: "UE 5.5 – transmissions ciblées", diff: 1 },

  { ueId: "5.5", q: "Un patient sous AVK : quel signe doit alerter l'infirmier·e en priorité ?", options: ["Constipation", "Saignement (gingivorragie, hématurie, ecchymoses)", "Sécheresse buccale", "Bouffées de chaleur"], correct: 1,
    explication: "Les AVK exposent au risque hémorragique. Tout saignement (gencives, urines, selles, ecchymoses spontanées) doit faire évoquer un surdosage et contrôler l'INR.", ref: "UE 5.5 – anticoagulants", diff: 1 },

  { ueId: "5.5", q: "Quelle conduite tenir avant d'enchaîner deux médicaments potentiellement incompatibles sur une même voie ?", options: ["Augmenter le débit pour diluer", "Rincer la tubulure au NaCl 0,9 % entre les deux produits", "Mélanger les deux dans la même seringue", "Administrer plus vite le second"], correct: 1,
    explication: "Rincer la tubulure au NaCl 0,9 % (ou utiliser une voie séparée) évite le contact direct et donc la précipitation au point de jonction.", ref: "UE 5.5 – compatibilités", diff: 2 },

  { ueId: "5.5", q: "Les '5 B' de l'administration sécurisée des médicaments comprennent notamment :", options: ["Bon patient, bon médicament, bonne dose, bonne voie, bon moment", "Bon lit, bon médecin, bon prix, bon stock, bon horaire", "Bon pouls, bon poids, bon sang, bon souffle, bon teint", "Bon dossier, bon code, bon badge, bon scan, bon archivage"], correct: 0,
    explication: "Les 5 B = bon patient, bon médicament, bonne dose, bonne voie, bon moment. C'est un repère central de sécurisation du circuit du médicament.", ref: "HAS – circuit du médicament", diff: 1 },

  { ueId: "5.5", q: "Pour un microperfuseur (usage pédiatrique), à combien de gouttes correspond 1 mL ?", options: ["15 gouttes", "20 gouttes", "40 gouttes", "60 gouttes"], correct: 3,
    explication: "Le microperfuseur délivre 60 gouttes/mL (microgouttes), ce qui permet des débits précis chez l'enfant. Le perfuseur standard reste à 20 gouttes/mL.", ref: "UE 5.5 – calcul de débit", diff: 2 },

  { ueId: "5.5", q: "Quel signe oriente vers une hypoglycémie chez un patient sous insuline ?", options: ["Polyurie et soif intense", "Sueurs, tremblements et troubles de la conscience", "Haleine cétonique", "Hypertension franche"], correct: 1,
    explication: "L'hypoglycémie associe signes adrénergiques (sueurs, tremblements, tachycardie) et neuroglucopéniques (confusion, troubles de la conscience). La polyurie et l'haleine cétonique évoquent plutôt une hyperglycémie/acidocétose.", ref: "UE 5.5 – insuline", diff: 2 },

  { ueId: "5.5", q: "Quelle est la valeur juridique du dossier de soins infirmier ?", options: ["Aucune, c'est un document de travail informel", "Il fait foi et engage la responsabilité du soignant", "Il n'est consultable que par le patient", "Il remplace la prescription médicale"], correct: 1,
    explication: "Le dossier de soins a une valeur juridique : il trace les actes, fait foi en cas de litige et engage la responsabilité du professionnel. Sa traçabilité est une obligation réglementaire.", ref: "Art. R.4311-3 CSP", diff: 1 },

  { ueId: "5.5", q: "On prescrit 500 mL à passer en 4 heures sur pompe volumétrique. Quel débit programmer ?", options: ["62 mL/h", "100 mL/h", "125 mL/h", "150 mL/h"], correct: 2,
    explication: "Débit = volume / temps = 500 mL / 4 h = 125 mL/h. La pompe volumétrique se programme directement en mL/h.", ref: "UE 5.5 – calcul de débit", diff: 1 },

  { ueId: "5.5", q: "Quel acte relève du rôle propre infirmier dans la prise en charge d'une thérapeutique ?", options: ["La prescription de l'antalgique", "La surveillance des effets et l'éducation du patient", "La modification de la posologie", "Le diagnostic médical"], correct: 1,
    explication: "Le rôle propre comprend surveillance, prévention et éducation. La prescription, le diagnostic et la modification de posologie relèvent du médecin (rôle prescrit pour l'application).", ref: "Art. R.4311-5 CSP", diff: 1 },

  { ueId: "5.5", q: "Lors d'un transfert de patient, quel moment est considéré comme un 'point de rupture' à risque ?", options: ["Le repas du patient", "Le changement d'équipe et la transmission d'informations", "La toilette", "La visite des proches"], correct: 1,
    explication: "Les points de rupture (changement d'équipe, transfert, sortie) sont des moments à haut risque d'événement indésirable car l'information peut être perdue ou incomplète. D'où l'intérêt de transmissions structurées.", ref: "HAS – continuité des soins", diff: 2 },

  { ueId: "5.5", q: "Que désigne la 'marge thérapeutique étroite' d'un médicament ?", options: ["Une faible différence entre dose efficace et dose toxique", "Un médicament peu coûteux", "Un médicament à administrer rapidement", "Une voie d'administration unique"], correct: 0,
    explication: "Une marge thérapeutique étroite signifie que la dose efficace est proche de la dose toxique : une faible variation peut entraîner inefficacité ou toxicité (ex. AVK, digitaliques, lithium). D'où une surveillance renforcée.", ref: "UE 5.5 – iatrogénie", diff: 2 },

  { ueId: "5.5", q: "Une situation de soin qualifiée de 'complexe' se caractérise principalement par :", options: ["Un seul intervenant et une pathologie unique", "L'addition de polypathologie, polymédication et fragilité avec multiples intervenants", "Une hospitalisation de moins de 24 h", "Un patient autonome sans traitement"], correct: 1,
    explication: "La complexité naît du cumul de facteurs : plusieurs pathologies, polymédication, vulnérabilité sociale et un parcours impliquant de nombreux professionnels, ce qui rend la coordination indispensable.", ref: "UE 5.5 – situations complexes", diff: 1 },

  { ueId: "5.5", q: "Un effet indésirable grave et inattendu d'un médicament doit être :", options: ["Ignoré s'il est passager", "Déclaré dans le cadre de la pharmacovigilance", "Traité sans tracer pour éviter l'inquiétude", "Signalé uniquement à la famille"], correct: 1,
    explication: "Tout effet indésirable grave ou inattendu relève d'une déclaration de pharmacovigilance. L'infirmier·e participe au repérage, à la traçabilité et au signalement de l'événement.", ref: "ANSM – pharmacovigilance", diff: 2 },

  { ueId: "5.5", q: "Dans un montage de perfusion en Y, où se situe le risque majeur d'incompatibilité ?", options: ["Au niveau de la poche de perfusion", "Au point de jonction où les deux produits se rencontrent", "Sur le bras opposé du patient", "Dans le robinet fermé"], correct: 1,
    explication: "C'est au point de jonction du Y, où les deux solutions se mélangent avant d'entrer dans la veine, que peut survenir la précipitation ou la dégradation. D'où la vérification des compatibilités et le rinçage.", ref: "UE 5.5 – perfusion en Y", diff: 2 },
];

export const flashcards = [
  { ueId: "5.5", recto: "Combien de gouttes par mL pour un perfuseur standard ?", verso: "20 gouttes/mL (60 gouttes/mL pour un microperfuseur pédiatrique)." },
  { ueId: "5.5", recto: "Formule du débit en gouttes/min ?", verso: "(Volume en mL × gouttes/mL) / temps en minutes." },
  { ueId: "5.5", recto: "Quel solvant pour diluer l'amiodarone ?", verso: "Glucose 5 % uniquement (incompatible avec le NaCl)." },
  { ueId: "5.5", recto: "Que signifie SBAR ?", verso: "Situation, Background (contexte), Assessment (évaluation), Recommandation." },
  { ueId: "5.5", recto: "Que signifie DAR (transmission ciblée) ?", verso: "Données, Actions, Résultats." },
  { ueId: "5.5", recto: "Les 5 B de l'administration sécurisée ?", verso: "Bon patient, bon médicament, bonne dose, bonne voie, bon moment." },
  { ueId: "5.5", recto: "Paramètre à vérifier avant un digitalique ?", verso: "Le pouls : si bradycardie marquée, ne pas administrer et alerter." },
  { ueId: "5.5", recto: "Risque principal des opioïdes à surveiller ?", verso: "La dépression respiratoire (surveiller fréquence respiratoire et sédation)." },
  { ueId: "5.5", recto: "Signe d'alerte chez un patient sous AVK ?", verso: "Tout saignement (gencives, urines, selles, ecchymoses) : risque de surdosage, contrôler l'INR." },
  { ueId: "5.5", recto: "Incompatibilité physique vs chimique ?", verso: "Physique = visible (précipité, trouble, couleur) ; chimique = dégradation non visible de la molécule." },
  { ueId: "5.5", recto: "Qu'est-ce qu'une marge thérapeutique étroite ?", verso: "Faible écart entre dose efficace et dose toxique (ex. AVK, digitaliques, lithium)." },
  { ueId: "5.5", recto: "Qu'est-ce que l'iatrogénie médicamenteuse ?", verso: "Conséquences indésirables liées aux médicaments, en partie évitables, surtout chez le sujet âgé." },
  { ueId: "5.5", recto: "Conduite avant d'enchaîner deux produits incompatibles sur une voie ?", verso: "Rincer la tubulure au NaCl 0,9 % ou utiliser une voie séparée." },
  { ueId: "5.5", recto: "Débit pour 500 mL en 4 h sur pompe ?", verso: "125 mL/h (500 / 4)." },
  { ueId: "5.5", recto: "Point de rupture à risque dans la continuité des soins ?", verso: "Changement d'équipe, transfert, sortie : risque de perte d'information." },
];
