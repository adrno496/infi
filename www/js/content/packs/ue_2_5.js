// UE 2.5 — Processus inflammatoires et infectieux (Sciences médicales, S3). Pack seed.

export const fiches = [
  {
    id: "f_2_5_inflammation", ueId: "2.5", type: "cours",
    titre: "La réaction inflammatoire aiguë",
    resume: "Réponse de défense locale, vasculaire et cellulaire, de l'organisme à une agression tissulaire.",
    tags: ["inflammation", "réaction aiguë", "vasodilatation", "phagocytose"],
    html: `
      <p>L'<span class="key" data-term="inflammation">inflammation</span> est une réaction de défense <strong>non spécifique</strong>, stéréotypée, déclenchée par toute agression tissulaire (infection, traumatisme, brûlure, agent chimique). Son but est d'éliminer l'agresseur et de réparer le tissu.</p>
      <h3>Les 4 signes cardinaux (Celse)</h3>
      <ul>
        <li><strong>Rougeur</strong> (rubor) — vasodilatation.</li>
        <li><strong>Chaleur</strong> (calor) — afflux sanguin local.</li>
        <li><strong>Tuméfaction / œdème</strong> (tumor) — exsudat plasmatique.</li>
        <li><strong>Douleur</strong> (dolor) — médiateurs et compression.</li>
      </ul>
      <p>Galien y ajoute la <strong>perte de fonction</strong> (functio laesa).</p>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« <em>RoCha-TuDo</em> » : <strong>Ro</strong>ugeur, <strong>Cha</strong>leur, <strong>Tu</strong>méfaction, <strong>Do</strong>uleur.</div>
      <h3>Les 3 phases</h3>
      <table class="tbl">
        <tr><th>Phase</th><th>Mécanisme</th></tr>
        <tr><td>1. Vasculo-exsudative</td><td>Vasodilatation, augmentation de la perméabilité capillaire, œdème, diapédèse des leucocytes.</td></tr>
        <tr><td>2. Cellulaire</td><td>Afflux de polynucléaires puis de macrophages, <span class="key" data-term="phagocytose">phagocytose</span> de l'agresseur.</td></tr>
        <tr><td>3. Réparation / détersion</td><td>Élimination des débris, bourgeon charnu, cicatrisation.</td></tr>
      </table>
      <p>Médiateurs clés : <span class="key" data-term="histamine">histamine</span>, prostaglandines, cytokines (TNF-α, interleukines), bradykinine.</p>
      <div class="callout"><div class="callout-t">Aigu vs chronique</div>L'inflammation <strong>aiguë</strong> est brève (heures à jours), à polynucléaires. L'inflammation <strong>chronique</strong> persiste (semaines à années), à lymphocytes/macrophages, avec fibrose (ex. polyarthrite rhumatoïde).</div>
    `,
    refs: ["UE 2.5"],
  },
  {
    id: "f_2_5_infection", ueId: "2.5", type: "cours",
    titre: "Processus infectieux : chaîne épidémiologique",
    resume: "L'infection résulte de la rencontre hôte–agent pathogène, transmise selon une chaîne en 6 maillons.",
    tags: ["infection", "agent pathogène", "transmission", "chaîne épidémiologique"],
    html: `
      <p>L'<span class="key" data-term="infection">infection</span> est la pénétration et la multiplication d'un agent pathogène dans un organisme. Elle ne devient maladie que si l'agent est virulent et l'hôte réceptif.</p>
      <h3>Les agents pathogènes</h3>
      <ul>
        <li><strong>Bactéries</strong> — procaryotes (ex. <em>Staphylococcus aureus</em>, <em>E. coli</em>).</li>
        <li><strong>Virus</strong> — parasites intracellulaires obligatoires (grippe, VIH).</li>
        <li><strong>Champignons</strong> — mycoses (ex. <em>Candida albicans</em>).</li>
        <li><strong>Parasites</strong> — protozoaires, helminthes (paludisme, oxyures).</li>
        <li><strong>ATNC / prions</strong> — protéines infectieuses.</li>
      </ul>
      <h3>La chaîne épidémiologique (6 maillons)</h3>
      <table class="tbl">
        <tr><th>Maillon</th><th>Exemple</th></tr>
        <tr><td>Agent infectieux</td><td>bactérie, virus...</td></tr>
        <tr><td>Réservoir</td><td>humain, animal, environnement</td></tr>
        <tr><td>Porte de sortie</td><td>sécrétions, selles, sang</td></tr>
        <tr><td>Mode de transmission</td><td>contact, gouttelettes, air, vecteur</td></tr>
        <tr><td>Porte d'entrée</td><td>peau lésée, muqueuses, voies aériennes</td></tr>
        <tr><td>Hôte réceptif</td><td>immunodéprimé, âge extrême</td></tr>
      </table>
      <div class="callout warn"><div class="callout-t">Rompre la chaîne</div>L'hygiène des mains rompt le maillon « transmission » : c'est la mesure la plus efficace de prévention des infections associées aux soins.</div>
      <h3>Modes de transmission</h3>
      <ul>
        <li><strong>Contact</strong> (direct/indirect) — le plus fréquent (mains, surfaces).</li>
        <li><strong>Gouttelettes</strong> (> 5 µm, < 1 m) — grippe, méningocoque.</li>
        <li><strong>Air / aérosols</strong> (< 5 µm) — tuberculose, rougeole, varicelle.</li>
      </ul>
    `,
    refs: ["UE 2.5"],
  },
  {
    id: "f_2_5_immunite", ueId: "2.5", type: "cours",
    titre: "Défenses de l'organisme : immunité innée et adaptative",
    resume: "Deux lignes de défense complémentaires : la barrière innée immédiate et l'immunité adaptative spécifique.",
    tags: ["immunité", "anticorps", "lymphocytes", "défenses"],
    html: `
      <p>Face à un agent pathogène, l'organisme dispose de deux systèmes de défense complémentaires.</p>
      <h3>1. Immunité innée (non spécifique)</h3>
      <ul>
        <li><strong>Barrières</strong> : peau, muqueuses, pH gastrique, flore commensale.</li>
        <li><strong>Cellulaire</strong> : polynucléaires, macrophages (phagocytose), cellules NK.</li>
        <li><strong>Réaction inflammatoire</strong> et système du complément.</li>
        <li>Immédiate, sans mémoire.</li>
      </ul>
      <h3>2. Immunité adaptative (spécifique)</h3>
      <table class="tbl">
        <tr><th>Type</th><th>Acteurs</th><th>Cible</th></tr>
        <tr><td>Humorale</td><td>Lymphocytes B → plasmocytes → <span class="key" data-term="anticorps">anticorps</span></td><td>antigènes circulants (extracellulaires)</td></tr>
        <tr><td>Cellulaire</td><td>Lymphocytes T (CD4 auxiliaires, CD8 cytotoxiques)</td><td>cellules infectées (intracellulaire)</td></tr>
      </table>
      <p>Caractéristiques : <strong>spécifique</strong>, plus lente, avec <strong>mémoire immunitaire</strong> (base de la vaccination).</p>
      <div class="callout"><div class="callout-t">Vaccination vs sérothérapie</div>La <strong>vaccination</strong> est une immunisation <em>active</em> (l'organisme fabrique ses anticorps, protection durable). La <strong>sérothérapie</strong> est une immunisation <em>passive</em> (apport d'anticorps tout faits, protection immédiate mais brève).</div>
    `,
    refs: ["UE 2.5"],
  },
  {
    id: "f_2_5_antibio", ueId: "2.5", type: "pharmaco",
    titre: "Antibiotiques et résistance bactérienne",
    resume: "Principes des antibiotiques, bon usage et lutte contre l'antibiorésistance.",
    tags: ["antibiotiques", "antibiogramme", "résistance", "BMR"],
    html: `
      <p>Un <span class="key" data-term="antibiotique">antibiotique</span> est une substance qui détruit (bactéricide) ou inhibe la croissance (bactériostatique) des bactéries. Il est <strong>inactif sur les virus</strong>.</p>
      <h3>Grandes familles</h3>
      <ul>
        <li><strong>Bêta-lactamines</strong> (pénicillines, céphalosporines) — paroi bactérienne.</li>
        <li><strong>Aminosides</strong> (gentamicine) — synthèse protéique ; néphro/ototoxiques.</li>
        <li><strong>Macrolides</strong> (azithromycine) — synthèse protéique.</li>
        <li><strong>Fluoroquinolones</strong> (ofloxacine) — ADN bactérien.</li>
        <li><strong>Glycopeptides</strong> (vancomycine) — réservés aux infections sévères/SARM.</li>
      </ul>
      <h3>Bon usage</h3>
      <ul>
        <li>Prélèvements bactériologiques <strong>avant</strong> la 1re injection si possible.</li>
        <li>Antibiothérapie <strong>probabiliste</strong> puis adaptée à l'<span class="key" data-term="antibiogramme">antibiogramme</span>.</li>
        <li>Respect des doses, horaires et durée ; ne jamais arrêter prématurément.</li>
      </ul>
      <div class="callout warn"><div class="callout-t">Antibiorésistance</div>L'usage excessif et mal conduit des antibiotiques sélectionne des <strong>BMR</strong> (bactéries multirésistantes : SARM, EBLSE). « Les antibiotiques, c'est pas automatique. »</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Avant tout ATB : <strong>P</strong>rélever, <strong>P</strong>rescrire (probabiliste), <strong>A</strong>dapter (antibiogramme) → « PPA ».</div>
    `,
    refs: ["UE 2.5"],
  },
];

export const qcm = [
  {
    ueId: "2.5",
    q: "Quels sont les quatre signes cardinaux classiques de l'inflammation décrits par Celse ?",
    options: [
      "Rougeur, chaleur, tuméfaction, douleur",
      "Fièvre, frissons, sueurs, asthénie",
      "Pâleur, froideur, atrophie, démangeaison",
      "Toux, dyspnée, expectoration, douleur",
    ],
    correct: 0,
    explication: "Les 4 signes cardinaux de Celse sont rubor (rougeur), calor (chaleur), tumor (tuméfaction/œdème) et dolor (douleur). Galien y ajoute la perte de fonction (functio laesa).",
    ref: "UE 2.5", diff: 1,
  },
  {
    ueId: "2.5",
    q: "Quel phénomène est responsable de la rougeur et de la chaleur dans l'inflammation aiguë ?",
    options: [
      "Une vasoconstriction artérielle",
      "Une vasodilatation avec augmentation du flux sanguin local",
      "Une anémie locale",
      "Une thrombose veineuse",
    ],
    correct: 1,
    explication: "La phase vasculo-exsudative débute par une vasodilatation qui augmente l'afflux sanguin local, provoquant rougeur et chaleur. L'augmentation de la perméabilité capillaire entraîne ensuite l'œdème.",
    ref: "UE 2.5", diff: 1,
  },
  {
    ueId: "2.5",
    q: "Quelles cellules sont les premières à affluer sur le site d'une inflammation aiguë ?",
    options: [
      "Les lymphocytes B",
      "Les hématies",
      "Les polynucléaires neutrophiles",
      "Les plaquettes",
    ],
    correct: 2,
    explication: "Lors de la phase cellulaire de l'inflammation aiguë, les polynucléaires neutrophiles arrivent en premier par diapédèse et assurent la phagocytose, relayés ensuite par les macrophages.",
    ref: "UE 2.5", diff: 2,
  },
  {
    ueId: "2.5",
    q: "Quel médiateur, libéré notamment par les mastocytes, augmente la perméabilité vasculaire dans l'inflammation ?",
    options: ["L'insuline", "L'histamine", "L'adrénaline", "L'albumine"],
    correct: 1,
    explication: "L'histamine, libérée par les mastocytes et les basophiles, provoque vasodilatation et augmentation de la perméabilité capillaire, à l'origine de l'œdème inflammatoire.",
    ref: "UE 2.5", diff: 2,
  },
  {
    ueId: "2.5",
    q: "Qu'est-ce qui caractérise une inflammation chronique par rapport à une inflammation aiguë ?",
    options: [
      "Elle dure quelques heures et fait intervenir surtout des polynucléaires",
      "Elle persiste dans le temps et fait intervenir lymphocytes et macrophages, avec souvent une fibrose",
      "Elle ne s'accompagne d'aucun signe clinique",
      "Elle ne concerne que la peau",
    ],
    correct: 1,
    explication: "L'inflammation chronique persiste (semaines à années), fait intervenir surtout lymphocytes et macrophages et aboutit fréquemment à une fibrose (ex. polyarthrite rhumatoïde). L'aiguë est brève et à polynucléaires.",
    ref: "UE 2.5", diff: 2,
  },
  {
    ueId: "2.5",
    q: "Parmi ces agents pathogènes, lequel est un parasite intracellulaire obligatoire ?",
    options: ["Une bactérie", "Un virus", "Un champignon", "Un protozoaire libre"],
    correct: 1,
    explication: "Le virus est un parasite intracellulaire obligatoire : dépourvu de métabolisme propre, il a besoin de la machinerie d'une cellule hôte pour se répliquer. C'est pourquoi les antibiotiques sont inefficaces sur les virus.",
    ref: "UE 2.5", diff: 1,
  },
  {
    ueId: "2.5",
    q: "Quel est le maillon de la chaîne épidémiologique sur lequel l'hygiène des mains agit le plus directement ?",
    options: [
      "Le réservoir",
      "Le mode de transmission",
      "L'hôte réceptif",
      "La porte de sortie",
    ],
    correct: 1,
    explication: "L'hygiène des mains rompt le maillon de la transmission (essentiellement par contact), ce qui en fait la mesure la plus efficace de prévention des infections associées aux soins.",
    ref: "UE 2.5", diff: 1,
  },
  {
    ueId: "2.5",
    q: "Quelle maladie se transmet principalement par voie aérienne (aérosols, particules < 5 µm) ?",
    options: ["Le tétanos", "La tuberculose", "Le paludisme", "La gale"],
    correct: 1,
    explication: "La tuberculose se transmet par voie aérienne (noyaux de gouttelettes < 5 µm restant en suspension), comme la rougeole et la varicelle. Le paludisme est vectoriel, la gale par contact, le tétanos par plaie souillée.",
    ref: "UE 2.5", diff: 2,
  },
  {
    ueId: "2.5",
    q: "Quelle est la différence entre immunité innée et immunité adaptative ?",
    options: [
      "L'innée est spécifique et possède une mémoire, l'adaptative est immédiate",
      "L'innée est immédiate et non spécifique, l'adaptative est spécifique et dotée d'une mémoire",
      "Les deux sont identiques",
      "L'adaptative n'existe que chez l'enfant",
    ],
    correct: 1,
    explication: "L'immunité innée est immédiate, non spécifique et sans mémoire (barrières, phagocytose, inflammation). L'immunité adaptative est spécifique, plus lente, et possède une mémoire immunitaire (base de la vaccination).",
    ref: "UE 2.5", diff: 2,
  },
  {
    ueId: "2.5",
    q: "Quelles cellules sont responsables de la production des anticorps ?",
    options: [
      "Les lymphocytes T cytotoxiques (CD8)",
      "Les lymphocytes B différenciés en plasmocytes",
      "Les polynucléaires neutrophiles",
      "Les cellules NK",
    ],
    correct: 1,
    explication: "L'immunité humorale repose sur les lymphocytes B qui, une fois activés, se différencient en plasmocytes producteurs d'anticorps (immunoglobulines) dirigés contre les antigènes circulants.",
    ref: "UE 2.5", diff: 2,
  },
  {
    ueId: "2.5",
    q: "La vaccination correspond à quel type d'immunisation ?",
    options: [
      "Une immunisation passive et immédiate",
      "Une immunisation active et durable",
      "Une immunisation héréditaire",
      "Aucune immunisation",
    ],
    correct: 1,
    explication: "La vaccination est une immunisation active : l'organisme produit lui-même ses anticorps et garde une mémoire immunitaire, d'où une protection durable. La sérothérapie, elle, est passive (anticorps apportés), immédiate mais brève.",
    ref: "UE 2.5", diff: 2,
  },
  {
    ueId: "2.5",
    q: "Sur quels micro-organismes les antibiotiques sont-ils actifs ?",
    options: ["Les virus", "Les bactéries", "Les prions", "Tous les agents pathogènes"],
    correct: 1,
    explication: "Les antibiotiques agissent uniquement sur les bactéries (paroi, synthèse protéique, ADN bactérien). Ils sont totalement inefficaces sur les virus, d'où l'importance de ne pas en prescrire dans les viroses.",
    ref: "UE 2.5", diff: 1,
  },
  {
    ueId: "2.5",
    q: "Quel examen permet d'adapter une antibiothérapie en testant la sensibilité de la bactérie aux antibiotiques ?",
    options: ["L'hémoglobine glyquée", "L'antibiogramme", "La gazométrie", "Le bilan lipidique"],
    correct: 1,
    explication: "L'antibiogramme teste in vitro la sensibilité de la bactérie isolée à différents antibiotiques, permettant d'adapter le traitement initialement probabiliste à un traitement ciblé.",
    ref: "UE 2.5", diff: 1,
  },
  {
    ueId: "2.5",
    q: "Quelle conduite favorise l'apparition de bactéries multirésistantes (BMR) ?",
    options: [
      "Respecter scrupuleusement la durée prescrite",
      "L'usage excessif et inadapté des antibiotiques",
      "Réaliser un antibiogramme",
      "Pratiquer l'hygiène des mains",
    ],
    correct: 1,
    explication: "L'usage excessif, répété ou inadapté des antibiotiques exerce une pression de sélection qui favorise l'émergence de bactéries multirésistantes (SARM, EBLSE). Le bon usage et l'hygiène des mains limitent ce phénomène.",
    ref: "UE 2.5", diff: 2,
  },
  {
    ueId: "2.5",
    q: "Quelle famille d'antibiotiques présente une néphrotoxicité et une ototoxicité justifiant une surveillance des taux sanguins ?",
    options: ["Les macrolides", "Les aminosides", "Les pénicillines", "Les cyclines"],
    correct: 1,
    explication: "Les aminosides (ex. gentamicine, amikacine) sont néphrotoxiques et ototoxiques. Leur utilisation impose une surveillance de la fonction rénale et parfois des dosages sanguins (taux résiduels).",
    ref: "UE 2.5", diff: 3,
  },
  {
    ueId: "2.5",
    q: "Avant de débuter une antibiothérapie chez un patient fébrile, quelle est la bonne pratique recommandée ?",
    options: [
      "Réaliser les prélèvements bactériologiques avant la première injection si possible",
      "Attendre 48 h avant tout prélèvement",
      "Ne jamais faire de prélèvement",
      "Doubler systématiquement la dose",
    ],
    correct: 0,
    explication: "Les prélèvements (hémocultures, ECBU...) doivent être réalisés avant la première dose d'antibiotique chaque fois que possible, pour identifier le germe sans qu'il soit masqué par le traitement.",
    ref: "UE 2.5", diff: 2,
  },
  {
    ueId: "2.5",
    q: "Quel signe biologique non spécifique oriente vers une inflammation ou une infection bactérienne ?",
    options: [
      "Une baisse de la CRP",
      "Une élévation de la CRP (protéine C réactive)",
      "Une baisse des globules blancs constante",
      "Une hypoglycémie",
    ],
    correct: 1,
    explication: "La CRP (protéine C réactive) est une protéine de l'inflammation qui s'élève rapidement en cas de syndrome inflammatoire ou infectieux. La procalcitonine oriente plus spécifiquement vers une infection bactérienne.",
    ref: "UE 2.5", diff: 2,
  },
  {
    ueId: "2.5",
    q: "Comment définit-on une infection associée aux soins (IAS) ?",
    options: [
      "Une infection présente avant l'admission à l'hôpital",
      "Une infection contractée au cours d'une prise en charge et absente à l'admission",
      "Une infection uniquement virale",
      "Une infection d'origine alimentaire",
    ],
    correct: 1,
    explication: "Une IAS (anciennement infection nosocomiale au sens strict) est contractée au cours ou au décours d'une prise en charge, qui n'était ni présente ni en incubation à l'admission. Le délai usuel retenu est de 48 h après l'admission.",
    ref: "UE 2.5", diff: 2,
  },
  {
    ueId: "2.5",
    q: "Quelle est la principale mesure de prévention de la transmission croisée des micro-organismes lors des soins ?",
    options: [
      "Le port systématique de gants stériles",
      "L'hygiène des mains (friction hydro-alcoolique)",
      "La prise d'antibiotiques préventifs",
      "Le port d'un masque en permanence",
    ],
    correct: 1,
    explication: "L'hygiène des mains, notamment par friction hydro-alcoolique, est la mesure la plus efficace et la moins coûteuse pour prévenir la transmission croisée. Le port de gants ne remplace jamais l'hygiène des mains.",
    ref: "UE 2.5", diff: 1,
  },
  {
    ueId: "2.5",
    q: "Comment définit-on le sepsis (définition Sepsis-3) ?",
    options: [
      "La simple présence de bactéries dans les urines",
      "Une dysfonction d'organe menaçant le pronostic vital, due à une réponse dérégulée de l'organisme à une infection",
      "Une réaction allergique à un antibiotique",
      "Une infection limitée à la peau",
    ],
    correct: 1,
    explication: "Selon la définition Sepsis-3, le sepsis est une dysfonction d'organe menaçant le pronostic vital, causée par une réponse dérégulée de l'organisme à une infection. À ne pas confondre avec la bactériémie (simple présence de bactéries dans le sang). Sa forme la plus grave est le choc septique.",
    ref: "UE 2.5", diff: 3,
  },
  {
    ueId: "2.5",
    q: "Quel mode de transmission est concerné par les précautions complémentaires « gouttelettes » (ex. méningocoque, grippe) ?",
    options: [
      "Des particules > 5 µm projetées sur courte distance",
      "Des particules < 5 µm en suspension prolongée dans l'air",
      "Le contact des mains uniquement",
      "Les piqûres de moustiques",
    ],
    correct: 0,
    explication: "Les précautions gouttelettes concernent les grosses particules (> 5 µm) émises lors de la toux ou de la parole, qui retombent rapidement à moins d'un mètre. Elles imposent le port d'un masque chirurgical à proximité du patient.",
    ref: "UE 2.5", diff: 3,
  },
];

export const flashcards = [
  { ueId: "2.5", recto: "Quels sont les 4 signes cardinaux de l'inflammation ?", verso: "Rougeur, chaleur, tuméfaction (œdème), douleur (+ perte de fonction selon Galien)." },
  { ueId: "2.5", recto: "Quelles sont les 3 phases de la réaction inflammatoire aiguë ?", verso: "1) Vasculo-exsudative ; 2) Cellulaire (phagocytose) ; 3) Réparation / détersion." },
  { ueId: "2.5", recto: "Quel médiateur provoque la vasodilatation et l'œdème inflammatoire ?", verso: "L'histamine (libérée par les mastocytes et basophiles)." },
  { ueId: "2.5", recto: "Quelles cellules arrivent en premier sur un foyer inflammatoire aigu ?", verso: "Les polynucléaires neutrophiles, puis les macrophages." },
  { ueId: "2.5", recto: "Inflammation aiguë vs chronique ?", verso: "Aiguë : brève, polynucléaires. Chronique : prolongée, lymphocytes/macrophages, fibrose." },
  { ueId: "2.5", recto: "Citez les 6 maillons de la chaîne épidémiologique.", verso: "Agent, réservoir, porte de sortie, transmission, porte d'entrée, hôte réceptif." },
  { ueId: "2.5", recto: "Sur quel maillon agit principalement l'hygiène des mains ?", verso: "Le mode de transmission (par contact)." },
  { ueId: "2.5", recto: "Pourquoi un antibiotique est-il inefficace sur un virus ?", verso: "Le virus est un parasite intracellulaire sans paroi ni métabolisme propre ; les cibles des antibiotiques (paroi, ribosomes bactériens) n'existent pas chez lui." },
  { ueId: "2.5", recto: "Immunité innée : caractéristiques ?", verso: "Immédiate, non spécifique, sans mémoire (barrières, phagocytose, inflammation, complément)." },
  { ueId: "2.5", recto: "Immunité adaptative : caractéristiques ?", verso: "Spécifique, plus lente, avec mémoire immunitaire ; humorale (LB → anticorps) et cellulaire (LT)." },
  { ueId: "2.5", recto: "Quelles cellules produisent les anticorps ?", verso: "Les lymphocytes B différenciés en plasmocytes." },
  { ueId: "2.5", recto: "Vaccination vs sérothérapie ?", verso: "Vaccination = immunité active et durable. Sérothérapie = immunité passive, immédiate mais brève." },
  { ueId: "2.5", recto: "Qu'est-ce qu'un antibiogramme ?", verso: "Test in vitro de la sensibilité d'une bactérie aux antibiotiques, pour adapter le traitement." },
  { ueId: "2.5", recto: "Que sont les BMR et qu'est-ce qui les favorise ?", verso: "Bactéries multirésistantes (SARM, EBLSE) ; favorisées par l'usage excessif et inadapté des antibiotiques." },
  { ueId: "2.5", recto: "Quel marqueur biologique s'élève en cas d'inflammation/infection ?", verso: "La CRP (protéine C réactive) ; la procalcitonine oriente vers une infection bactérienne." },
  { ueId: "2.5", recto: "Définition d'une infection associée aux soins (IAS) ?", verso: "Infection contractée au cours d'une prise en charge, absente à l'admission (délai usuel ≥ 48 h)." },
  { ueId: "2.5", recto: "Quel est l'effet indésirable majeur des aminosides ?", verso: "Néphrotoxicité et ototoxicité (surveillance de la fonction rénale et dosages sanguins)." },
  { ueId: "2.5", recto: "Qu'est-ce que le sepsis ?", verso: "Dysfonction d'organe menaçant le pronostic vital, due à une réponse dérégulée de l'organisme à une infection ; forme grave = choc septique." },
];
