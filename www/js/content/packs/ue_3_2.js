export const fiches = [
  { id: "f_3_2_demarche_soins", ueId: "3.2", type: "cours",
    titre: "La démarche de soins infirmiers",
    resume: "Méthode structurée et continue qui guide le raisonnement clinique de l'infirmier, du recueil de données à l'évaluation.",
    tags: ["démarche de soins", "raisonnement clinique", "diagnostic infirmier"],
    html: `<h3>Définition</h3>
<p>La <span class="key" data-term="démarche de soins">démarche de soins</span> est un processus intellectuel et organisé qui permet à l'infirmier d'identifier les besoins de la personne soignée, de planifier des actions adaptées et d'en évaluer les résultats. Elle structure le <span class="key" data-term="raisonnement clinique">raisonnement clinique</span>.</p>
<h3>Les étapes</h3>
<ul>
<li><strong>Recueil de données</strong> : informations objectives (mesurables) et subjectives (ressenti du patient).</li>
<li><strong>Analyse et diagnostic</strong> : identification des problèmes de santé réels ou potentiels.</li>
<li><strong>Planification</strong> : fixation d'objectifs et choix des interventions.</li>
<li><strong>Mise en oeuvre</strong> : réalisation des soins planifiés.</li>
<li><strong>Évaluation</strong> : mesure de l'atteinte des objectifs et réajustement.</li>
</ul>
<div class="callout"><div class="callout-t">Point clé</div>La démarche de soins est un processus <strong>dynamique et cyclique</strong> : l'évaluation relance en permanence le recueil de données.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>R-A-P-M-E</strong> : Recueil, Analyse, Planification, Mise en oeuvre, Évaluation.</div>
<table class="tbl"><tr><th>Donnée objective</th><th>Donnée subjective</th></tr><tr><td>TA 150/95, douleur cotée 6/10 sur EVA</td><td>« J'ai mal », « Je me sens fatigué »</td></tr></table>`,
    refs: ["UE 3.2"] },

  { id: "f_3_2_diagnostic_infirmier", ueId: "3.2", type: "cours",
    titre: "Le diagnostic infirmier",
    resume: "Jugement clinique sur les réactions d'une personne face à un problème de santé, qui relève du rôle propre infirmier.",
    tags: ["diagnostic infirmier", "PES", "rôle propre"],
    html: `<h3>Définition</h3>
<p>Le <span class="key" data-term="diagnostic infirmier">diagnostic infirmier</span> est un énoncé décrivant une réaction humaine (réelle ou potentielle) à un problème de santé. Il relève du <span class="key" data-term="rôle propre">rôle propre</span> de l'infirmier, qui en assure l'autonomie de décision.</p>
<h3>Structure PES</h3>
<ul>
<li><strong>P</strong> = Problème (intitulé du diagnostic).</li>
<li><strong>E</strong> = Étiologie (facteurs favorisants, « lié à »).</li>
<li><strong>S</strong> = Signes et symptômes (« se manifestant par »).</li>
</ul>
<div class="callout"><div class="callout-t">À distinguer</div>Le diagnostic infirmier (rôle propre) ne se confond pas avec le <strong>diagnostic médical</strong> (rôle prescrit), qui identifie une maladie et relève du médecin.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>P-E-S</strong> : Problème lié à l'Étiologie se manifestant par les Signes.</div>
<h3>Exemple</h3>
<p><em>Risque d'atteinte à l'intégrité de la peau lié à l'immobilité prolongée.</em> (diagnostic potentiel, pas de signes car risque).</p>`,
    refs: ["UE 3.2"] },

  { id: "f_3_2_objectifs_planification", ueId: "3.2", type: "cours",
    titre: "Objectifs de soins et planification",
    resume: "Formulation d'objectifs centrés sur le patient et organisation des interventions pour y répondre.",
    tags: ["objectifs", "planification", "SMART", "interventions"],
    html: `<h3>Formuler un objectif</h3>
<p>Un objectif de soins décrit le <strong>résultat attendu chez le patient</strong> (et non l'action de l'infirmier). Il doit être centré sur la personne, observable et daté.</p>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>SMART</strong> : Spécifique, Mesurable, Atteignable, Réaliste, Temporellement défini.</div>
<h3>Les interventions</h3>
<ul>
<li><strong>Rôle propre</strong> : actions autonomes (surveillance, prévention d'escarre, éducation, hygiène).</li>
<li><strong>Rôle prescrit / sur prescription</strong> : actions sur prescription médicale (injections, perfusions).</li>
</ul>
<table class="tbl"><tr><th>Mauvais objectif</th><th>Bon objectif</th></tr><tr><td>« Mobiliser le patient »</td><td>« Le patient se déplacera seul jusqu'au couloir sous 48 h »</td></tr></table>
<div class="callout"><div class="callout-t">Point clé</div>Un objectif se rédige toujours du point de vue du <strong>patient</strong> : « Le patient sera capable de... ».</div>`,
    refs: ["UE 3.2"] },

  { id: "f_3_2_transmissions_evaluation", ueId: "3.2", type: "cours",
    titre: "Transmissions ciblées et évaluation",
    resume: "Outils de traçabilité (transmissions ciblées DAR, macrocibles) et évaluation du projet de soins.",
    tags: ["transmissions", "DAR", "macrocible", "traçabilité", "évaluation"],
    html: `<h3>Transmissions ciblées</h3>
<p>Les <span class="key" data-term="transmissions ciblées">transmissions ciblées</span> organisent l'information autour d'une <strong>cible</strong> (problème, préoccupation). Elles assurent la continuité et la traçabilité des soins.</p>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>D-A-R</strong> : Données (observations), Actions (interventions menées), Résultat (effet obtenu).</div>
<h3>La macrocible</h3>
<p>Synthèse à l'entrée et à la sortie. Modèle <strong>MTVED</strong> : Maladie, Traitements, Vécu, Environnement, Devenir.</p>
<h3>Évaluation</h3>
<ul>
<li>Comparer le résultat obtenu à l'objectif fixé.</li>
<li>Objectif atteint, partiellement atteint ou non atteint.</li>
<li>Réajuster la démarche si nécessaire.</li>
</ul>
<div class="callout"><div class="callout-t">Cadre légal</div>La traçabilité est une <strong>obligation</strong> : « ce qui n'est pas écrit est réputé non fait ». Le dossier de soins a une valeur médico-légale.</div>`,
    refs: ["UE 3.2"] },
];

export const qcm = [
  { ueId: "3.2", q: "Quelle est la première étape de la démarche de soins ?", options: ["La planification", "Le recueil de données", "L'évaluation", "La mise en oeuvre"], correct: 1,
    explication: "La démarche de soins débute toujours par le recueil de données (informations objectives et subjectives) qui sert de base à l'analyse et au diagnostic.", ref: "UE 3.2", diff: 1 },

  { ueId: "3.2", q: "La démarche de soins est un processus :", options: ["Linéaire et figé", "Dynamique et cyclique", "Réservé au médecin", "Réalisé une seule fois à l'admission"], correct: 1,
    explication: "C'est un processus dynamique et cyclique : l'évaluation relance le recueil de données et permet un réajustement permanent.", ref: "UE 3.2", diff: 1 },

  { ueId: "3.2", q: "Un signe objectif est :", options: ["Une douleur exprimée par le patient", "Une sensation de fatigue", "Une tension artérielle mesurée à 150/95", "Une inquiétude rapportée"], correct: 2,
    explication: "Une donnée objective est mesurable ou observable par le soignant (TA, température, FC). La douleur exprimée, la fatigue et l'inquiétude sont des données subjectives.", ref: "UE 3.2", diff: 1 },

  { ueId: "3.2", q: "Le diagnostic infirmier relève :", options: ["Du rôle prescrit", "Du rôle propre de l'infirmier", "Exclusivement du médecin", "Du pharmacien"], correct: 1,
    explication: "Le diagnostic infirmier relève du rôle propre de l'infirmier, qui dispose d'une autonomie de décision pour les soins qui en découlent.", ref: "UE 3.2", diff: 1 },

  { ueId: "3.2", q: "Que signifie le sigle PES d'un diagnostic infirmier ?", options: ["Problème, Étiologie, Signes", "Patient, Évaluation, Soins", "Prévention, Éducation, Surveillance", "Plan, Exécution, Suivi"], correct: 0,
    explication: "PES = Problème (intitulé), Étiologie (facteurs favorisants, « lié à »), Signes et symptômes (« se manifestant par »).", ref: "UE 3.2", diff: 2 },

  { ueId: "3.2", q: "Un diagnostic infirmier de type « risque » comporte :", options: ["Toujours des signes et symptômes", "Pas de signes, mais des facteurs de risque", "Uniquement une étiologie médicale", "Une prescription médicale obligatoire"], correct: 1,
    explication: "Un diagnostic de risque (potentiel) ne comporte pas de signes/symptômes puisque le problème n'est pas encore survenu ; on identifie les facteurs de risque.", ref: "UE 3.2", diff: 2 },

  { ueId: "3.2", q: "Lequel de ces énoncés est correctement formulé comme objectif de soins ?", options: ["Mobiliser le patient", "Réaliser un pansement", "Le patient se déplacera seul jusqu'au couloir sous 48 h", "Surveiller la tension"], correct: 2,
    explication: "Un objectif décrit le résultat attendu chez le patient, observable et daté. Les autres propositions décrivent des actions de l'infirmier (interventions).", ref: "UE 3.2", diff: 2 },

  { ueId: "3.2", q: "Le sigle SMART appliqué aux objectifs signifie notamment que l'objectif doit être :", options: ["Subjectif et moyennement précis", "Spécifique et Mesurable", "Standardisé pour tous", "Simple et Anonyme"], correct: 1,
    explication: "SMART : Spécifique, Mesurable, Atteignable, Réaliste, Temporellement défini. L'objectif doit être précis et évaluable.", ref: "UE 3.2", diff: 1 },

  { ueId: "3.2", q: "La surveillance de la prévention d'escarre relève :", options: ["Du rôle prescrit", "Du rôle propre infirmier", "Du médecin uniquement", "De l'aide-soignant seul"], correct: 1,
    explication: "La prévention d'escarre (changements de position, surveillance cutanée, effleurage) relève du rôle propre de l'infirmier, qui peut en confier certains aspects à l'aide-soignant en collaboration.", ref: "UE 3.2", diff: 2 },

  { ueId: "3.2", q: "Quelle action relève du rôle sur prescription médicale ?", options: ["L'aide à la toilette", "L'administration d'un antibiotique injectable", "Le recueil de données", "L'éducation à l'hygiène"], correct: 1,
    explication: "L'administration d'un médicament injectable est réalisée sur prescription médicale (rôle prescrit). Les autres actions relèvent du rôle propre.", ref: "UE 3.2", diff: 1 },

  { ueId: "3.2", q: "Dans les transmissions ciblées, que signifie DAR ?", options: ["Diagnostic, Action, Résultat", "Données, Actions, Résultat", "Douleur, Antalgie, Résultat", "Dossier, Analyse, Réajustement"], correct: 1,
    explication: "DAR = Données (observations en lien avec la cible), Actions (interventions menées), Résultat (effet observé). C'est la structure d'une transmission ciblée.", ref: "UE 3.2", diff: 2 },

  { ueId: "3.2", q: "Une « cible » dans les transmissions ciblées désigne :", options: ["Le diagnostic médical", "Un problème ou une préoccupation du patient", "Le nom du médecin", "Le numéro de chambre"], correct: 1,
    explication: "La cible est un mot ou une expression désignant ce qui retient l'attention (problème, préoccupation, changement d'état) autour duquel s'organise la transmission.", ref: "UE 3.2", diff: 2 },

  { ueId: "3.2", q: "La macrocible d'entrée selon le modèle MTVED comprend notamment :", options: ["Maladie, Traitements, Vécu, Environnement, Devenir", "Médecin, Température, Visite, Examens, Diagnostic", "Mesures, Tests, Valeurs, Échelles, Données", "Mobilité, Toilette, Vie, Élimination, Douleur"], correct: 0,
    explication: "MTVED = Maladie, Traitements, Vécu, Environnement, Devenir. C'est une synthèse d'entrée (et de sortie) du patient.", ref: "UE 3.2", diff: 3 },

  { ueId: "3.2", q: "L'évaluation d'un objectif de soins consiste à :", options: ["Recommencer le recueil sans comparer", "Comparer le résultat obtenu à l'objectif fixé", "Changer de patient", "Supprimer le diagnostic"], correct: 1,
    explication: "Évaluer consiste à comparer le résultat obtenu au résultat attendu (objectif), pour conclure s'il est atteint, partiellement atteint ou non atteint, et réajuster.", ref: "UE 3.2", diff: 1 },

  { ueId: "3.2", q: "« Ce qui n'est pas écrit est réputé non fait » illustre :", options: ["Une recommandation facultative", "L'obligation de traçabilité des soins", "Une règle propre aux médecins", "Un principe sans valeur juridique"], correct: 1,
    explication: "La traçabilité est une obligation professionnelle et le dossier de soins a une valeur médico-légale. L'absence de trace écrite équivaut à une absence de soin sur le plan de la preuve.", ref: "UE 3.2", diff: 2 },

  { ueId: "3.2", q: "Le projet de soins doit être :", options: ["Imposé au patient sans son avis", "Individualisé et négocié avec le patient", "Identique pour tous les patients", "Établi uniquement par le médecin"], correct: 1,
    explication: "Le projet de soins est personnalisé, centré sur la personne et co-construit avec le patient, qui est acteur de sa prise en charge.", ref: "UE 3.2", diff: 1 },

  { ueId: "3.2", q: "Quel diagnostic infirmier est correctement formulé ?", options: ["Pneumopathie", "Diabète de type 2", "Risque d'atteinte à l'intégrité de la peau lié à l'immobilité", "Fracture du col du fémur"], correct: 2,
    explication: "Les autres propositions sont des diagnostics médicaux (maladies). Le diagnostic infirmier décrit une réaction humaine et suit la structure « problème lié à... ».", ref: "UE 3.2", diff: 2 },

  { ueId: "3.2", q: "L'analyse des données recueillies a pour but :", options: ["De prescrire un traitement", "D'identifier les problèmes de santé réels ou potentiels", "De remplir le dossier administratif", "De fixer le tarif des soins"], correct: 1,
    explication: "L'étape d'analyse permet d'interpréter les données pour poser les diagnostics (problèmes réels ou potentiels) sur lesquels s'appuiera la planification.", ref: "UE 3.2", diff: 1 },

  { ueId: "3.2", q: "Le réajustement de la démarche de soins intervient :", options: ["Jamais une fois le plan établi", "Lorsque l'objectif n'est pas (ou partiellement) atteint", "Uniquement à la demande du patient", "Seulement à la sortie"], correct: 1,
    explication: "Le réajustement découle de l'évaluation : si l'objectif n'est pas atteint, on revoit le diagnostic, les objectifs ou les interventions, ce qui relance le cycle.", ref: "UE 3.2", diff: 2 },

  { ueId: "3.2", q: "Quel élément est un raisonnement clinique pertinent ?", options: ["Appliquer un protocole sans observer le patient", "Relier les données observées pour formuler un jugement clinique", "Suivre uniquement la routine du service", "Recopier le dossier de la veille"], correct: 1,
    explication: "Le raisonnement clinique consiste à relier, interpréter et hiérarchiser les données pour aboutir à un jugement clinique adapté à la situation singulière du patient.", ref: "UE 3.2", diff: 2 },

  { ueId: "3.2", q: "Le diagnostic infirmier se distingue du diagnostic médical car il porte sur :", options: ["La maladie elle-même", "Les réactions de la personne face au problème de santé", "Le choix des médicaments", "Le pronostic vital"], correct: 1,
    explication: "Le diagnostic médical identifie une maladie ; le diagnostic infirmier décrit les réactions humaines (physiques, psychologiques, sociales) de la personne face à sa situation de santé.", ref: "UE 3.2", diff: 2 },

  { ueId: "3.2", q: "Le dossier de soins infirmier :", options: ["Est facultatif", "A une valeur médico-légale et garantit la continuité des soins", "Appartient personnellement à l'infirmier", "Ne doit jamais être consulté par l'équipe"], correct: 1,
    explication: "Le dossier de soins est un outil de continuité, de communication et de traçabilité partagé par l'équipe ; il a une valeur médico-légale.", ref: "UE 3.2", diff: 1 },
];

export const flashcards = [
  { ueId: "3.2", recto: "Cite les 5 étapes de la démarche de soins.", verso: "Recueil de données, Analyse/diagnostic, Planification, Mise en oeuvre, Évaluation." },
  { ueId: "3.2", recto: "Quelle est la première étape de la démarche de soins ?", verso: "Le recueil de données (objectives et subjectives)." },
  { ueId: "3.2", recto: "Différence entre donnée objective et subjective ?", verso: "Objective : mesurable/observable (TA, FC). Subjective : ressenti exprimé par le patient (douleur, fatigue)." },
  { ueId: "3.2", recto: "Que signifie PES ?", verso: "Problème, Étiologie, Signes et symptômes : structure du diagnostic infirmier." },
  { ueId: "3.2", recto: "De quel rôle relève le diagnostic infirmier ?", verso: "Du rôle propre de l'infirmier (autonomie de décision)." },
  { ueId: "3.2", recto: "Diagnostic infirmier vs diagnostic médical ?", verso: "Infirmier = réactions humaines face au problème de santé (rôle propre). Médical = identification de la maladie (rôle prescrit, médecin)." },
  { ueId: "3.2", recto: "Un diagnostic de risque comporte-t-il des signes ?", verso: "Non : il n'y a pas de signes/symptômes, seulement des facteurs de risque." },
  { ueId: "3.2", recto: "Que signifie SMART pour un objectif ?", verso: "Spécifique, Mesurable, Atteignable, Réaliste, Temporellement défini." },
  { ueId: "3.2", recto: "Un objectif de soins est centré sur qui ?", verso: "Sur le patient : il décrit le résultat attendu chez la personne, pas l'action de l'infirmier." },
  { ueId: "3.2", recto: "Que signifie DAR dans les transmissions ciblées ?", verso: "Données, Actions, Résultat." },
  { ueId: "3.2", recto: "Qu'est-ce qu'une cible ?", verso: "Un mot/expression désignant un problème ou une préoccupation autour duquel s'organise la transmission ciblée." },
  { ueId: "3.2", recto: "Que signifie MTVED dans une macrocible ?", verso: "Maladie, Traitements, Vécu, Environnement, Devenir." },
  { ueId: "3.2", recto: "En quoi consiste l'évaluation ?", verso: "Comparer le résultat obtenu à l'objectif fixé (atteint, partiellement atteint, non atteint) et réajuster." },
  { ueId: "3.2", recto: "Que rappelle « ce qui n'est pas écrit est réputé non fait » ?", verso: "L'obligation de traçabilité ; le dossier de soins a une valeur médico-légale." },
  { ueId: "3.2", recto: "Le projet de soins doit être comment ?", verso: "Individualisé, centré sur la personne et négocié avec le patient, acteur de sa prise en charge." },
  { ueId: "3.2", recto: "Donne un exemple de diagnostic infirmier de risque.", verso: "Risque d'atteinte à l'intégrité de la peau lié à l'immobilité prolongée." },
  { ueId: "3.2", recto: "À quoi sert l'analyse des données ?", verso: "À identifier les problèmes de santé réels ou potentiels (poser les diagnostics)." },
];
