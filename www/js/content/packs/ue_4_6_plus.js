export const fiches = [
  { id: "fx_ue_4_6_plus_modeles_changement", ueId: "4.6", type: "cours",
    titre: "Modèles du changement de comportement et entretien motivationnel",
    resume: "L'ETP s'appuie sur des modèles théoriques du changement (Prochaska, croyances de santé) et sur l'entretien motivationnel pour soutenir la motivation du patient.",
    tags: ["motivation", "Prochaska", "entretien motivationnel", "observance"],
    html: `<h3>Pourquoi des modèles théoriques ?</h3>
<p>Acquérir une compétence ne suffit pas : encore faut-il que le patient <strong>change durablement</strong> de comportement (alimentation, activité physique, prise du traitement). L'ETP mobilise des modèles qui éclairent <strong>comment</strong> et <strong>pourquoi</strong> on change.</p>
<h3>Le modèle transthéorique de Prochaska et DiClemente</h3>
<p>Le changement de comportement passe par des <span class="key" data-term="stades de changement">stades</span> successifs, pas toujours linéaires (la rechute fait partie du processus) :</p>
<table class="tbl">
<tr><th>Stade</th><th>Description</th><th>Posture soignante adaptée</th></tr>
<tr><td>Pré-contemplation</td><td>Le patient n'envisage pas de changer, ne se sent pas concerné</td><td>Informer sans forcer, faire émerger un doute</td></tr>
<tr><td>Contemplation</td><td>Il envisage le changement mais reste ambivalent</td><td>Explorer le pour/contre, renforcer la balance décisionnelle</td></tr>
<tr><td>Préparation / décision</td><td>Il décide d'agir, prépare un plan</td><td>Aider à fixer des objectifs réalistes</td></tr>
<tr><td>Action</td><td>Il met en œuvre le changement</td><td>Soutenir, valoriser, renforcer les compétences</td></tr>
<tr><td>Maintien</td><td>Il consolide le nouveau comportement</td><td>Prévenir la rechute, entretenir la motivation</td></tr>
</table>
<div class="callout"><div class="callout-t">La rechute n'est pas un échec</div>Une rechute (reprise de l'ancien comportement) est fréquente et fait partie du cycle : elle est l'occasion de réajuster, pas de culpabiliser le patient.</div>
<h3>Le modèle des croyances relatives à la santé (Health Belief Model)</h3>
<p>Le patient agit selon la perception qu'il a de : la <strong>gravité</strong> de la maladie, sa <strong>vulnérabilité</strong> (se sentir menacé), les <strong>bénéfices</strong> attendus du changement et les <strong>obstacles</strong> perçus. Le soignant agit sur ces représentations.</p>
<h3>L'entretien motivationnel (Miller et Rollnick)</h3>
<ul>
<li>Méthode de communication <strong>centrée sur le patient</strong> visant à renforcer sa <strong>motivation propre</strong> au changement.</li>
<li>Repose sur l'<strong>esprit</strong> : partenariat, non-jugement, évocation, altruisme.</li>
<li>Évite la <span class="key" data-term="réflexe correcteur">réflexe correcteur</span> (vouloir convaincre/corriger à tout prix), qui renforce la résistance.</li>
<li>Fait émerger et valorise le <strong>discours-changement</strong> du patient (ses propres arguments pour changer).</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Stades de Prochaska = <strong>« Pré-Con-Pré-A-M »</strong> : <strong>Pré</strong>contemplation, <strong>Con</strong>templation, <strong>Pré</strong>paration, <strong>A</strong>ction, <strong>M</strong>aintien (+ rechute possible).</div>`,
    refs: ["UE 4.6", "Prochaska & DiClemente", "Miller & Rollnick - Entretien motivationnel"] },

  { id: "fx_ue_4_6_plus_observance_litteratie", ueId: "4.6", type: "cours",
    titre: "Observance, adhésion thérapeutique et littératie en santé",
    resume: "Distinguer observance et adhésion, repérer les facteurs de non-observance et tenir compte de la littératie en santé sont essentiels à l'efficacité de l'ETP.",
    tags: ["observance", "adhésion", "littératie", "alliance thérapeutique"],
    html: `<h3>Observance vs adhésion : deux logiques différentes</h3>
<table class="tbl">
<tr><th>Terme</th><th>Définition</th><th>Logique</th></tr>
<tr><td><strong>Observance</strong> (compliance)</td><td>Degré de respect par le patient de la prescription médicale</td><td>Patient « obéissant », vision verticale</td></tr>
<tr><td><strong>Adhésion</strong> (adhérence)</td><td>Approbation réfléchie et active du patient à son traitement, qu'il s'approprie</td><td>Patient acteur, partenariat, vision favorisée par l'ETP</td></tr>
</table>
<div class="callout"><div class="callout-t">Pourquoi cette distinction compte</div>On ne « fait pas observer » un traitement : on construit l'<strong>adhésion</strong>. L'ETP vise à rendre le patient autonome et partenaire, pas simplement docile.</div>
<h3>Facteurs influençant l'adhésion</h3>
<ul>
<li><strong>Liés au patient</strong> : représentations, croyances, déni, peur des effets indésirables, oubli, troubles cognitifs.</li>
<li><strong>Liés au traitement</strong> : complexité du schéma, nombre de prises, effets indésirables, durée.</li>
<li><strong>Liés à la maladie</strong> : caractère silencieux (HTA, dyslipidémie) qui démotive, maladie chronique au long cours.</li>
<li><strong>Liés au système</strong> : qualité de la relation soignant-soigné, accessibilité, coût.</li>
</ul>
<h3>La littératie en santé</h3>
<p>La <span class="key" data-term="littératie en santé">littératie en santé</span> désigne la capacité d'une personne à <strong>accéder, comprendre, évaluer et utiliser</strong> l'information de santé pour prendre des décisions. Une littératie faible est un frein majeur à l'ETP.</p>
<ul>
<li>Adapter son <strong>vocabulaire</strong> (éviter le jargon médical), utiliser des supports visuels.</li>
<li>Vérifier la compréhension par la méthode du <strong>« faire reformuler »</strong> (teach-back) : demander au patient de réexpliquer avec ses mots.</li>
<li>Tenir compte des <strong>inégalités sociales de santé</strong> et des situations de vulnérabilité.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>Littératie = ACÉU</strong> : <strong>A</strong>ccéder, <strong>C</strong>omprendre, <strong>É</strong>valuer, <strong>U</strong>tiliser l'information de santé.</div>`,
    refs: ["UE 4.6", "HAS - Littératie en santé", "OMS"] },

  { id: "fx_ue_4_6_plus_evaluation_qualite", ueId: "4.6", type: "cours",
    titre: "Évaluation de l'ETP et application en pratique infirmière",
    resume: "L'ETP fait l'objet d'évaluations individuelles et de programme, selon les critères de qualité de la HAS, avec des exemples concrets par pathologie.",
    tags: ["évaluation", "HAS", "qualité", "ateliers", "pathologies"],
    html: `<h3>Trois niveaux d'évaluation</h3>
<table class="tbl">
<tr><th>Type</th><th>Quoi évaluer</th><th>Quand</th></tr>
<tr><td><strong>Évaluation individuelle</strong></td><td>Compétences acquises par le patient, atteinte de ses objectifs, qualité de vie</td><td>À la fin et au cours du parcours du patient</td></tr>
<tr><td><strong>Évaluation annuelle (processus)</strong></td><td>Fonctionnement du programme, file active, satisfaction, ajustements</td><td>Chaque année</td></tr>
<tr><td><strong>Évaluation quadriennale</strong></td><td>Bilan global, résultats, pertinence, évolution du programme</td><td>Tous les 4 ans</td></tr>
</table>
<h3>Critères de qualité d'un programme (HAS)</h3>
<ul>
<li>Centré sur le patient et ses besoins (et non sur la maladie seule).</li>
<li><strong>Scientifiquement fondé</strong> et actualisé.</li>
<li>Intégré aux soins et organisé de façon <strong>pluriprofessionnelle</strong> et coordonnée.</li>
<li>Réalisé par des intervenants <strong>formés</strong> (au moins 40 heures).</li>
<li>Évalué et accessible (équité d'accès).</li>
</ul>
<h3>Le rôle infirmier dans l'ETP</h3>
<p>L'ETP relève du <strong>rôle propre infirmier</strong> (CSP : art. R.4311-5, 19° - éducation et conseils au patient et à son entourage ; en lien avec l'art. R.4311-2 qui inscrit l'éducation parmi les buts des soins infirmiers). L'IDE :</p>
<ul>
<li>Réalise ou participe au <strong>diagnostic éducatif</strong>.</li>
<li>Anime des <strong>séances individuelles ou collectives</strong> (ateliers).</li>
<li>Évalue les compétences et trace dans le <strong>dossier de soins</strong>.</li>
<li>Coordonne avec l'équipe et oriente vers les ressources (associations, réseaux).</li>
</ul>
<h3>Exemples d'ateliers d'ETP par pathologie</h3>
<table class="tbl">
<tr><th>Pathologie</th><th>Compétence d'autosoins visée</th></tr>
<tr><td>Diabète</td><td>Réaliser une glycémie capillaire, adapter l'insuline, prévenir/traiter une hypoglycémie, soins des pieds</td></tr>
<tr><td>Asthme / BPCO</td><td>Utiliser correctement un dispositif d'inhalation, mesurer le débit de pointe (peak-flow), reconnaître une crise</td></tr>
<tr><td>Insuffisance cardiaque</td><td>Surveiller son poids, repérer les signes de décompensation, gérer le régime peu salé</td></tr>
<tr><td>Anticoagulation (AVK)</td><td>Comprendre l'INR, repérer les signes de surdosage, adapter l'alimentation (vitamine K)</td></tr>
</table>
<div class="callout"><div class="callout-t">Hypoglycémie : règle pratique</div>Devant une hypoglycémie chez un patient conscient, la « règle des 15 » est souvent enseignée : resucrage par environ 15 g de glucides rapides, puis contrôle de la glycémie après 15 minutes, à répéter si besoin.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Évaluation ETP = <strong>« 1-1-4 »</strong> : à l'échelle du patient (individuelle), 1 fois par an (annuelle), tous les 4 ans (quadriennale).</div>`,
    refs: ["UE 4.6", "HAS - ETP : critères de qualité", "CSP art. R.4311-2 et R.4311-5"] },
];

export const qcm = [
  { ueId: "4.6", q: "Dans le modèle de Prochaska et DiClemente, à quel stade se situe un patient qui « n'envisage pas du tout de changer et ne se sent pas concerné » ?", options: ["Contemplation", "Pré-contemplation", "Action", "Maintien"], correct: 1,
    explication: "La pré-contemplation est le stade où le patient n'envisage pas le changement et ne se sent pas concerné. La posture adaptée est d'informer sans forcer et de faire émerger un doute, pas d'imposer.", ref: "Prochaska & DiClemente", diff: 2 },

  { ueId: "4.6", q: "Dans le modèle transthéorique du changement, la rechute :", options: ["Signe l'échec définitif de la démarche", "Fait partie du processus et est une occasion de réajuster", "Doit être sanctionnée", "Ne survient jamais en ETP"], correct: 1,
    explication: "La rechute (reprise de l'ancien comportement) fait partie intégrante du cycle de changement. Elle n'est pas un échec mais une occasion de réajuster et de soutenir le patient sans le culpabiliser.", ref: "Prochaska & DiClemente", diff: 2 },

  { ueId: "4.6", q: "L'entretien motivationnel (Miller et Rollnick) repose principalement sur :", options: ["La persuasion et l'argumentation du soignant", "Le renforcement de la motivation propre du patient", "La prescription d'objectifs stricts", "La répétition d'informations médicales"], correct: 1,
    explication: "L'entretien motivationnel vise à renforcer la motivation intrinsèque du patient au changement, dans un esprit de partenariat et de non-jugement, en faisant émerger son discours-changement. Il évite le réflexe correcteur.", ref: "Miller & Rollnick", diff: 2 },

  { ueId: "4.6", q: "Le « réflexe correcteur » en entretien motivationnel désigne :", options: ["La capacité du patient à se corriger seul", "La tendance du soignant à vouloir convaincre/corriger, ce qui renforce la résistance", "Une technique de reformulation", "Un outil de dépistage"], correct: 1,
    explication: "Le réflexe correcteur est la tendance naturelle du soignant à vouloir convaincre ou corriger le patient. Il est contre-productif car il renforce la résistance au changement ; l'entretien motivationnel invite à le réfréner.", ref: "Miller & Rollnick", diff: 3 },

  { ueId: "4.6", q: "Quelle est la différence essentielle entre observance et adhésion thérapeutique ?", options: ["Aucune, ce sont des synonymes", "L'observance renvoie à un patient obéissant, l'adhésion à un patient acteur qui s'approprie son traitement", "L'adhésion est imposée par le médecin", "L'observance est plus active que l'adhésion"], correct: 1,
    explication: "L'observance (compliance) mesure le respect de la prescription dans une logique verticale (patient obéissant). L'adhésion implique une approbation réfléchie et active du patient qui s'approprie son traitement : c'est la logique de partenariat promue par l'ETP.", ref: "UE 4.6", diff: 2 },

  { ueId: "4.6", q: "Pourquoi l'hypertension artérielle est-elle une maladie à risque de mauvaise adhésion ?", options: ["Parce qu'elle est douloureuse", "Parce qu'elle est souvent silencieuse/asymptomatique, ce qui démotive le traitement", "Parce qu'elle se guérit spontanément", "Parce qu'elle ne nécessite aucun traitement"], correct: 1,
    explication: "L'HTA est souvent asymptomatique : ne ressentant rien, le patient peut ne pas percevoir l'intérêt d'un traitement quotidien, d'où un risque accru de non-adhésion. C'est un facteur lié à la maladie.", ref: "UE 4.6", diff: 2 },

  { ueId: "4.6", q: "La littératie en santé correspond à la capacité de :", options: ["Lire une ordonnance à voix haute", "Accéder, comprendre, évaluer et utiliser l'information de santé pour décider", "Mémoriser des noms de médicaments", "Prescrire des examens"], correct: 1,
    explication: "La littératie en santé est la capacité d'une personne à accéder, comprendre, évaluer et utiliser l'information de santé afin de prendre des décisions concernant sa santé. Une faible littératie est un frein à l'ETP.", ref: "OMS - HAS", diff: 2 },

  { ueId: "4.6", q: "La méthode du « teach-back » (faire reformuler) consiste à :", options: ["Donner un document écrit au patient", "Demander au patient de réexpliquer avec ses propres mots ce qu'il a compris", "Réciter le protocole au patient", "Évaluer la glycémie"], correct: 1,
    explication: "Le teach-back consiste à demander au patient de reformuler avec ses propres mots ce qu'il a compris, afin de vérifier réellement la compréhension et de repérer les malentendus. C'est un outil adapté aux faibles niveaux de littératie.", ref: "HAS", diff: 2 },

  { ueId: "4.6", q: "Parmi ces facteurs, lequel est lié au TRAITEMENT et favorise la non-adhésion ?", options: ["Le déni de la maladie", "La complexité du schéma thérapeutique (nombreuses prises)", "La mauvaise relation soignant-soigné", "Le coût pour le système de santé"], correct: 1,
    explication: "La complexité du schéma (nombre de prises, contraintes, effets indésirables, durée) est un facteur lié au traitement. Le déni est lié au patient, la relation au système, etc.", ref: "UE 4.6", diff: 2 },

  { ueId: "4.6", q: "À quelle fréquence un programme d'ETP fait-il l'objet d'une évaluation de processus (auto-évaluation annuelle) ?", options: ["Tous les mois", "Chaque année", "Tous les 4 ans", "Tous les 10 ans"], correct: 1,
    explication: "Le programme fait l'objet d'une auto-évaluation annuelle de son processus (fonctionnement, file active, satisfaction) et d'une évaluation quadriennale plus globale (tous les 4 ans).", ref: "HAS", diff: 3 },

  { ueId: "4.6", q: "L'évaluation quadriennale d'un programme d'ETP a lieu :", options: ["Tous les ans", "Tous les 2 ans", "Tous les 4 ans", "Tous les 6 ans"], correct: 2,
    explication: "L'évaluation quadriennale dresse un bilan global du programme (résultats, pertinence, évolution) tous les 4 ans, en complément de l'auto-évaluation annuelle.", ref: "HAS", diff: 3 },

  { ueId: "4.6", q: "L'éducation thérapeutique relève, pour l'infirmier :", options: ["Uniquement du rôle sur prescription", "Du rôle propre infirmier (participation à l'éducation du patient)", "D'une compétence médicale exclusive", "D'une tâche administrative"], correct: 1,
    explication: "L'éducation et les conseils au patient relèvent du rôle propre infirmier (Code de la santé publique, art. R.4311-5, 19°), l'éducation figurant aussi parmi les buts des soins infirmiers (art. R.4311-2). L'IDE peut conduire des actions d'ETP.", ref: "CSP art. R.4311-2 et R.4311-5", diff: 2 },

  { ueId: "4.6", q: "Dans un atelier d'ETP pour un patient asthmatique, quelle compétence d'autosoins est centrale ?", options: ["Mesurer son INR", "Utiliser correctement son dispositif d'inhalation et mesurer son débit de pointe", "Adapter sa dose d'AVK", "Surveiller son poids quotidiennement"], correct: 1,
    explication: "Chez l'asthmatique, l'utilisation correcte du dispositif d'inhalation et la mesure du débit de pointe (peak-flow) sont des compétences d'autosoins essentielles. L'INR et les AVK concernent l'anticoagulation, le poids l'insuffisance cardiaque.", ref: "UE 4.6", diff: 2 },

  { ueId: "4.6", q: "Pour un patient sous AVK, quel élément l'ETP cherche-t-elle à faire comprendre ?", options: ["La mesure du peak-flow", "La signification de l'INR et les signes de surdosage", "Le resucrage en cas d'hypoglycémie", "La technique d'inhalation"], correct: 1,
    explication: "Chez le patient sous AVK, l'ETP vise la compréhension de l'INR (surveillance de l'anticoagulation), le repérage des signes de surdosage (saignements) et l'attention à l'alimentation riche en vitamine K.", ref: "UE 4.6", diff: 2 },

  { ueId: "4.6", q: "La « règle des 15 » fréquemment enseignée concerne la prise en charge par le patient d'une :", options: ["Crise d'asthme", "Hypoglycémie chez un patient conscient", "Poussée d'HTA", "Décompensation cardiaque"], correct: 1,
    explication: "La règle des 15 (environ 15 g de glucides rapides, contrôle de la glycémie après 15 minutes, à répéter si besoin) est un repère pédagogique pour le resucrage d'une hypoglycémie chez un patient diabétique conscient.", ref: "UE 4.6", diff: 2 },

  { ueId: "4.6", q: "Un patient diabétique au stade « contemplation » de Prochaska est caractérisé par :", options: ["Le refus total d'envisager un changement", "Une ambivalence : il envisage de changer mais hésite encore", "Un changement déjà installé depuis longtemps", "L'absence totale de maladie"], correct: 1,
    explication: "Au stade contemplation, le patient envisage le changement mais reste ambivalent (balance pour/contre). La posture adaptée est d'explorer cette ambivalence pour renforcer la décision.", ref: "Prochaska & DiClemente", diff: 2 },

  { ueId: "4.6", q: "Le modèle des croyances relatives à la santé (Health Belief Model) postule que le patient agit selon :", options: ["Le seul avis du médecin", "Sa perception de la gravité, de sa vulnérabilité, des bénéfices et des obstacles", "Le coût des médicaments uniquement", "La météo"], correct: 1,
    explication: "Le Health Belief Model explique le comportement de santé par la perception de la gravité de la maladie, de sa propre vulnérabilité, des bénéfices attendus du changement et des obstacles perçus. Le soignant agit sur ces représentations.", ref: "Health Belief Model", diff: 3 },

  { ueId: "4.6", q: "Quel comportement soignant est CONTRAIRE à l'esprit de l'entretien motivationnel ?", options: ["Exprimer de l'empathie", "Valoriser le discours-changement du patient", "Multiplier les conseils et les avertissements pour convaincre", "Explorer l'ambivalence du patient"], correct: 2,
    explication: "Multiplier conseils et avertissements pour convaincre relève du réflexe correcteur, contraire à l'entretien motivationnel : cela renforce la résistance. L'EM privilégie l'empathie, l'évocation et la valorisation du discours-changement.", ref: "Miller & Rollnick", diff: 2 },

  { ueId: "4.6", q: "Chez un patient insuffisant cardiaque, quelle surveillance simple est centrale en ETP ?", options: ["La mesure quotidienne du poids et le repérage des signes de décompensation", "La mesure du débit de pointe", "Le contrôle de l'INR", "Le soin des pieds"], correct: 0,
    explication: "Chez l'insuffisant cardiaque, la pesée quotidienne (une prise de poids rapide signale une rétention hydrosodée) et le repérage des signes de décompensation (dyspnée, œdèmes) sont des autosoins clés, avec le régime peu salé.", ref: "UE 4.6", diff: 2 },

  { ueId: "4.6", q: "Pour adapter l'ETP à un patient de faible littératie en santé, l'infirmier doit :", options: ["Augmenter le vocabulaire technique", "Utiliser un langage simple, des supports visuels et faire reformuler le patient", "Donner uniquement des documents écrits denses", "Réduire le temps d'échange"], correct: 1,
    explication: "Face à une faible littératie, on simplifie le vocabulaire, on utilise des supports visuels et on vérifie la compréhension par le teach-back (faire reformuler), en tenant compte des inégalités sociales de santé.", ref: "HAS", diff: 2 },

  { ueId: "4.6", q: "Un programme d'ETP de qualité selon la HAS doit notamment être :", options: ["Centré sur la maladie uniquement, mono-professionnel", "Centré sur le patient, scientifiquement fondé, pluriprofessionnel et évalué", "Réservé aux patients aigus", "Animé par des intervenants non formés"], correct: 1,
    explication: "Les critères de qualité HAS exigent un programme centré sur le patient et ses besoins, scientifiquement fondé, intégré aux soins, pluriprofessionnel et coordonné, animé par des intervenants formés (≥ 40 h) et évalué.", ref: "HAS - Critères de qualité", diff: 2 },

  { ueId: "4.6", q: "L'évaluation INDIVIDUELLE en ETP porte sur :", options: ["Le budget de l'établissement", "Les compétences acquises par le patient et l'atteinte de ses objectifs", "Le nombre de lits du service", "La rentabilité du programme"], correct: 1,
    explication: "L'évaluation individuelle apprécie les compétences réellement acquises par le patient, l'atteinte de ses objectifs personnels et l'impact sur sa qualité de vie ; elle permet de réajuster le parcours.", ref: "HAS", diff: 1 },
];

export const flashcards = [
  { ueId: "4.6", recto: "Cite les stades du changement de Prochaska et DiClemente.", verso: "Pré-contemplation, contemplation, préparation, action, maintien (+ rechute possible)." },
  { ueId: "4.6", recto: "La rechute est-elle un échec dans le modèle transthéorique ?", verso: "Non : elle fait partie du cycle de changement et est une occasion de réajuster, sans culpabiliser." },
  { ueId: "4.6", recto: "Sur quoi repose l'entretien motivationnel (Miller & Rollnick) ?", verso: "Renforcer la motivation propre du patient, dans un esprit de partenariat et de non-jugement, en évitant le réflexe correcteur." },
  { ueId: "4.6", recto: "Qu'est-ce que le réflexe correcteur ?", verso: "La tendance du soignant à vouloir convaincre/corriger à tout prix ; il renforce la résistance et est à éviter." },
  { ueId: "4.6", recto: "Différence entre observance et adhésion ?", verso: "Observance = respect de la prescription (patient obéissant) ; adhésion = appropriation active et réfléchie du traitement (patient acteur)." },
  { ueId: "4.6", recto: "Pourquoi l'HTA expose-t-elle à la non-adhésion ?", verso: "Parce qu'elle est souvent silencieuse/asymptomatique : le patient ne ressent rien et peut négliger son traitement." },
  { ueId: "4.6", recto: "Définis la littératie en santé.", verso: "Capacité à accéder, comprendre, évaluer et utiliser l'information de santé pour prendre des décisions." },
  { ueId: "4.6", recto: "Qu'est-ce que la méthode du teach-back ?", verso: "Demander au patient de réexpliquer avec ses propres mots pour vérifier sa compréhension." },
  { ueId: "4.6", recto: "Cite un facteur de non-adhésion lié au traitement.", verso: "La complexité du schéma thérapeutique (nombre de prises, effets indésirables, durée)." },
  { ueId: "4.6", recto: "Quels sont les 3 niveaux d'évaluation d'un programme d'ETP ?", verso: "Individuelle (le patient), annuelle (processus), quadriennale (bilan global tous les 4 ans)." },
  { ueId: "4.6", recto: "De quel rôle relève l'ETP pour l'infirmier ?", verso: "Du rôle propre infirmier (participation à l'éducation du patient, CSP art. R.4311-5 et R.4311-1)." },
  { ueId: "4.6", recto: "Quelle compétence d'autosoins est centrale chez l'asthmatique ?", verso: "Utiliser correctement le dispositif d'inhalation et mesurer le débit de pointe (peak-flow)." },
  { ueId: "4.6", recto: "Que vise l'ETP chez un patient sous AVK ?", verso: "Comprendre l'INR, repérer les signes de surdosage et gérer l'alimentation (vitamine K)." },
  { ueId: "4.6", recto: "Quelle surveillance quotidienne enseigner à l'insuffisant cardiaque ?", verso: "La pesée quotidienne et le repérage des signes de décompensation (dyspnée, œdèmes), avec régime peu salé." },
  { ueId: "4.6", recto: "Que postule le Health Belief Model ?", verso: "Le patient agit selon sa perception de la gravité, de sa vulnérabilité, des bénéfices et des obstacles." },
];
