export const fiches = [
  { id: "fx_ue_3_1_plus_demarche_clinique", ueId: "3.1", type: "cours",
    titre: "La démarche clinique infirmière : étapes et logique du raisonnement",
    resume: "Structurer le raisonnement clinique du recueil de données au réajustement, pour passer du problème au diagnostic infirmier.",
    tags: ["démarche clinique", "raisonnement", "diagnostic infirmier"],
    html: `<p>La <span class="key" data-term="démarche clinique">démarche clinique</span> est un processus intellectuel structuré, dynamique et continu qui permet à l'infirmier·e d'identifier les besoins de la personne soignée et d'y répondre par des soins individualisés. Elle relève du <strong>rôle propre</strong> infirmier (article R.4311-3 du CSP).</p>
<h3>Les cinq étapes du processus</h3>
<table class="tbl">
<tr><th>Étape</th><th>Contenu</th></tr>
<tr><td>1. Recueil de données</td><td>Données objectives (signes, constantes, examens) et subjectives (ressenti, plaintes) ; sources directes et indirectes.</td></tr>
<tr><td>2. Analyse et interprétation</td><td>Regrouper les données, repérer les anomalies, poser le <span class="key" data-term="diagnostic infirmier">diagnostic infirmier</span> et identifier les problèmes traités en collaboration.</td></tr>
<tr><td>3. Planification</td><td>Fixer des objectifs réalistes, mesurables et négociés avec la personne ; choisir les interventions.</td></tr>
<tr><td>4. Réalisation / mise en œuvre</td><td>Exécuter les soins planifiés (rôle propre et rôle sur prescription).</td></tr>
<tr><td>5. Évaluation / réajustement</td><td>Mesurer l'atteinte des objectifs et réajuster le plan de soins.</td></tr>
</table>
<div class="callout"><div class="callout-t">Donnée objective vs subjective</div><p>Une donnée <strong>objective</strong> est observable ou mesurable (FC = 110 bpm, plaie suintante). Une donnée <strong>subjective</strong> est rapportée par la personne (« j'ai mal », « je suis angoissé »). Les deux sont indispensables au raisonnement.</p></div>
<h3>Distinguer les trois types de problèmes de santé</h3>
<ul>
<li><strong>Diagnostic infirmier</strong> : problème que l'infirmier·e traite de façon autonome (rôle propre).</li>
<li><strong>Problème traité en collaboration</strong> : complication potentielle physiologique surveillée par l'infirmier·e mais dont le traitement relève du médecin (ex. risque de complication : hémorragie).</li>
<li><strong>Problème médical</strong> : il relève du diagnostic et de la prescription médicale.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><p><strong>« RAPRE »</strong> : <strong>R</strong>ecueil, <strong>A</strong>nalyse, <strong>P</strong>lanification, <strong>R</strong>éalisation, <strong>É</strong>valuation. La boucle est continue : l'évaluation relance le recueil.</p></div>`,
    refs: ["CSP art. R.4311-1 à R.4311-3", "Référentiel de formation infirmier 2009, compétence 1"] },

  { id: "fx_ue_3_1_plus_diagnostic_infirmier_pes", ueId: "3.1", type: "cours",
    titre: "Le diagnostic infirmier : typologie et formulation PES",
    resume: "Maîtriser les trois types de diagnostics infirmiers (actuel, de risque, de promotion de la santé) et leur formulation rigoureuse.",
    tags: ["diagnostic infirmier", "PES", "NANDA"],
    html: `<p>Le <span class="key" data-term="diagnostic infirmier">diagnostic infirmier</span> est un jugement clinique portant sur les réactions d'une personne, d'une famille ou d'une collectivité à des problèmes de santé présents ou potentiels. Il constitue la base du choix des interventions relevant du rôle propre (taxonomie <span class="key" data-term="NANDA">NANDA-I</span>).</p>
<h3>Les trois grands types</h3>
<table class="tbl">
<tr><th>Type</th><th>Définition</th><th>Exemple</th></tr>
<tr><td>Diagnostic actuel (réel)</td><td>Réaction présente et identifiée par des signes.</td><td>Douleur aiguë liée à l'incision chirurgicale se manifestant par une EVA à 7/10.</td></tr>
<tr><td>Diagnostic de risque</td><td>Vulnérabilité à développer un problème ; pas encore de signes.</td><td>Risque d'atteinte à l'intégrité de la peau lié à l'immobilité.</td></tr>
<tr><td>Diagnostic de promotion de la santé</td><td>Motivation à améliorer un comportement de santé.</td><td>Motivation à améliorer sa gestion thérapeutique.</td></tr>
</table>
<h3>La formulation PES</h3>
<p>Un diagnostic infirmier <strong>actuel</strong> se formule selon le format <span class="key" data-term="PES">PES</span> :</p>
<ul>
<li><strong>P</strong> = Problème (l'intitulé du diagnostic).</li>
<li><strong>E</strong> = Étiologie / facteurs favorisants (relié à / lié à).</li>
<li><strong>S</strong> = Signes et symptômes (se manifestant par).</li>
</ul>
<div class="callout"><div class="callout-t">Cas particulier du diagnostic de risque</div><p>Un diagnostic de <strong>risque</strong> ne comporte que deux éléments : le problème et les facteurs de risque. Il n'a <strong>pas</strong> de « signes et symptômes » puisque le problème n'est pas encore survenu. On écrit donc seulement « Risque de… lié à… ».</p></div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><p><strong>« PES »</strong> = <strong>P</strong>roblème + <strong>É</strong>tiologie (lié à) + <strong>S</strong>ignes (se manifestant par). Pour un risque : on retire le S.</p></div>
<h3>Diagnostic infirmier vs problème médical</h3>
<p>« Infarctus du myocarde » est un <strong>diagnostic médical</strong>. « Anxiété liée à la peur de la mort se manifestant par une agitation et des questions répétées » est un <strong>diagnostic infirmier</strong> : il porte sur la réaction de la personne, non sur la pathologie.</p>`,
    refs: ["NANDA International, Diagnostics infirmiers, définitions et classification", "Référentiel de formation infirmier 2009, UE 3.1"] },

  { id: "fx_ue_3_1_plus_jugement_clinique", ueId: "3.1", type: "cours",
    titre: "Jugement clinique et erreurs de raisonnement",
    resume: "Développer un jugement clinique fiable en connaissant les modes de raisonnement et les biais cognitifs à éviter.",
    tags: ["jugement clinique", "biais cognitifs", "raisonnement hypothético-déductif"],
    html: `<p>Le <span class="key" data-term="jugement clinique">jugement clinique</span> est le résultat du raisonnement : c'est la conclusion à laquelle aboutit l'infirmier·e après analyse des données. Sa qualité conditionne la sécurité des soins.</p>
<h3>Deux grands modes de raisonnement</h3>
<ul>
<li><strong>Raisonnement hypothético-déductif</strong> : à partir des premières données, on formule des hypothèses puis on cherche à les confirmer ou les infirmer en recueillant des données ciblées.</li>
<li><strong>Raisonnement inductif</strong> : on part de l'observation de signes pour remonter vers une explication générale.</li>
</ul>
<div class="callout"><div class="callout-t">Pensée critique</div><p>La <span class="key" data-term="pensée critique">pensée critique</span> consiste à questionner ses données, ses sources et ses conclusions : « Cette information est-elle fiable, à jour, suffisante ? Ai-je envisagé une autre explication ? »</p></div>
<h3>Principaux biais cognitifs en clinique</h3>
<table class="tbl">
<tr><th>Biais</th><th>Description</th></tr>
<tr><td>Biais d'ancrage</td><td>Se fixer sur la première hypothèse et ne plus la remettre en cause.</td></tr>
<tr><td>Biais de confirmation</td><td>Ne retenir que les données qui confirment son hypothèse.</td></tr>
<tr><td>Clôture prématurée</td><td>Arrêter le raisonnement avant d'avoir recueilli assez de données.</td></tr>
<tr><td>Biais de disponibilité</td><td>Privilégier un diagnostic parce qu'on l'a vu récemment.</td></tr>
</table>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><p>Pour limiter les biais : <strong>« Et si ce n'était pas ça ? »</strong> Toujours envisager au moins une hypothèse alternative avant de conclure.</p></div>
<h3>Lien avec la transmission</h3>
<p>Le jugement clinique se trace dans les transmissions ciblées selon le modèle <span class="key" data-term="DAR">DAR</span> : <strong>D</strong>onnées, <strong>A</strong>ctions, <strong>R</strong>ésultats. Il garantit la continuité et la traçabilité du raisonnement dans le dossier de soins.</p>`,
    refs: ["Référentiel de formation infirmier 2009, compétence 1", "HAS, transmissions ciblées et dossier de soins"] },
];

export const qcm = [
  { ueId: "3.1", q: "Quelle est la première étape de la démarche clinique infirmière ?", options: ["La planification des soins", "Le recueil de données", "L'évaluation des résultats", "La réalisation des soins"], correct: 1,
    explication: "La démarche clinique débute toujours par le recueil de données (objectives et subjectives), qui constitue la matière première du raisonnement. Sans données fiables et suffisantes, l'analyse et le diagnostic ne peuvent être valides.", ref: "Référentiel 2009, compétence 1", diff: 1 },

  { ueId: "3.1", q: "Une donnée subjective est :", options: ["Une constante mesurée par l'infirmier", "Un résultat d'examen biologique", "Une information rapportée par la personne (ressenti, plainte)", "Une observation visuelle d'une plaie"], correct: 2,
    explication: "La donnée subjective émane de la personne soignée : ce qu'elle exprime de son vécu (« j'ai mal », « je suis angoissé »). Les constantes, les résultats d'examens et les observations sont des données objectives, mesurables ou observables.", ref: "Démarche de soins, recueil de données", diff: 1 },

  { ueId: "3.1", q: "Le format PES de formulation d'un diagnostic infirmier signifie :", options: ["Problème, Évaluation, Soins", "Problème, Étiologie, Signes et symptômes", "Prévention, Éducation, Surveillance", "Pathologie, Examen, Symptômes"], correct: 1,
    explication: "Le PES structure un diagnostic infirmier actuel : Problème (intitulé), Étiologie (relié à / lié à, les facteurs favorisants) et Signes et symptômes (se manifestant par). Cette formulation garantit un diagnostic précis et orienté vers l'action.", ref: "NANDA-I, formulation des diagnostics", diff: 1 },

  { ueId: "3.1", q: "Un diagnostic infirmier de RISQUE se formule :", options: ["Avec le problème, l'étiologie et les signes", "Avec uniquement les signes et symptômes", "Avec le problème et les facteurs de risque, sans signes ni symptômes", "Avec un diagnostic médical associé"], correct: 2,
    explication: "Un diagnostic de risque concerne un problème non encore survenu : il n'y a donc pas de signes ni symptômes. On formule uniquement « Risque de… lié à (facteurs de risque) ». Ajouter des signes serait une erreur car cela transformerait le risque en problème actuel.", ref: "NANDA-I, diagnostics de risque", diff: 2 },

  { ueId: "3.1", q: "Parmi ces énoncés, lequel est un diagnostic INFIRMIER et non médical ?", options: ["Insuffisance cardiaque", "Pneumopathie", "Anxiété liée à la peur de l'intervention se manifestant par une agitation", "Diabète de type 2"], correct: 2,
    explication: "Le diagnostic infirmier porte sur la réaction de la personne à un problème de santé, et relève du rôle propre. « Anxiété liée à… se manifestant par… » est un diagnostic infirmier. Les trois autres sont des diagnostics médicaux (pathologies).", ref: "CSP art. R.4311-3, rôle propre", diff: 1 },

  { ueId: "3.1", q: "Un « problème traité en collaboration » correspond à :", options: ["Un problème que l'infirmier traite seul, en autonomie totale", "Une complication potentielle surveillée par l'infirmier mais dont le traitement relève du médecin", "Un diagnostic médical posé par l'infirmier", "Un objectif de soin négocié avec la personne"], correct: 1,
    explication: "Le problème traité en collaboration (ou complication potentielle) est une situation physiologique que l'infirmier surveille de façon autonome, mais dont le traitement curatif nécessite une prescription médicale (ex. risque d'hémorragie post-opératoire).", ref: "Démarche clinique, typologie des problèmes", diff: 2 },

  { ueId: "3.1", q: "Le raisonnement hypothético-déductif consiste à :", options: ["Conclure dès la première donnée recueillie", "Formuler des hypothèses puis recueillir des données ciblées pour les confirmer ou les infirmer", "Appliquer un protocole sans réflexion", "Recopier le diagnostic médical"], correct: 1,
    explication: "Le raisonnement hypothético-déductif part de quelques données pour générer des hypothèses, puis recherche activement des données discriminantes afin de retenir ou écarter chaque hypothèse. C'est un raisonnement structuré et vérifiable.", ref: "Référentiel 2009, raisonnement clinique", diff: 2 },

  { ueId: "3.1", q: "Le biais d'ancrage en raisonnement clinique se définit comme :", options: ["Le fait de ne retenir que les données confirmant son hypothèse", "Le fait de se fixer sur la première hypothèse sans la remettre en cause", "Le fait de privilégier un diagnostic vu récemment", "Le fait d'arrêter trop tôt le recueil de données"], correct: 1,
    explication: "Le biais d'ancrage est la tendance à se fixer sur la première impression ou hypothèse et à ne plus la remettre en question malgré de nouvelles données. Il favorise les erreurs diagnostiques. Les autres propositions décrivent d'autres biais (confirmation, disponibilité, clôture prématurée).", ref: "Pensée critique et biais cognitifs", diff: 3 },

  { ueId: "3.1", q: "Quel élément caractérise un objectif de soin correctement formulé ?", options: ["Il est vague et général", "Il est centré sur l'infirmier et ses actions", "Il est réaliste, mesurable et négocié avec la personne", "Il est identique pour tous les patients"], correct: 2,
    explication: "Un bon objectif de soin est centré sur la personne, réaliste, mesurable (donc évaluable) et négocié avec elle pour favoriser son adhésion. Cela permet ensuite d'évaluer objectivement l'atteinte du résultat.", ref: "Planification des soins", diff: 1 },

  { ueId: "3.1", q: "Dans le modèle de transmissions ciblées DAR, le « A » désigne :", options: ["L'analyse médicale", "Les actions infirmières mises en œuvre", "L'admission du patient", "L'anamnèse"], correct: 1,
    explication: "DAR signifie Données (ce qui a motivé la cible), Actions (interventions infirmières réalisées) et Résultats (effets observés). Ce modèle assure la traçabilité du raisonnement et la continuité des soins dans le dossier.", ref: "HAS, transmissions ciblées", diff: 2 },

  { ueId: "3.1", q: "Quelle étape de la démarche clinique permet de réajuster le plan de soins ?", options: ["Le recueil de données", "La planification", "L'évaluation", "La réalisation"], correct: 2,
    explication: "L'évaluation mesure l'atteinte des objectifs fixés et conduit, si nécessaire, au réajustement des interventions. La démarche clinique est ainsi un processus cyclique : l'évaluation relance le recueil de données.", ref: "Référentiel 2009, compétence 1", diff: 1 },

  { ueId: "3.1", q: "Le diagnostic infirmier « Motivation à améliorer sa gestion thérapeutique » est un diagnostic :", options: ["De risque", "Actuel (réel)", "De promotion de la santé", "Médical"], correct: 2,
    explication: "Il s'agit d'un diagnostic de promotion de la santé : il exprime la motivation de la personne à améliorer un comportement de santé, en l'absence de problème actuel ou de risque. Il valorise les ressources de la personne.", ref: "NANDA-I, diagnostics de promotion de la santé", diff: 2 },

  { ueId: "3.1", q: "Quelle attitude limite le mieux le risque d'erreur diagnostique ?", options: ["Conclure rapidement pour gagner du temps", "Envisager systématiquement une hypothèse alternative", "Se fier uniquement à l'intuition", "Suivre toujours le premier diagnostic posé par un collègue"], correct: 1,
    explication: "Envisager une ou plusieurs hypothèses alternatives (« Et si ce n'était pas ça ? ») contre les biais d'ancrage et de confirmation, et relance le recueil de données discriminantes. C'est un principe central de la pensée critique.", ref: "Pensée critique en soins infirmiers", diff: 2 },

  { ueId: "3.1", q: "La clôture prématurée du raisonnement clinique correspond à :", options: ["Recueillir trop de données inutiles", "Arrêter le raisonnement avant d'avoir recueilli suffisamment de données", "Confier le diagnostic au médecin", "Réévaluer trop souvent le patient"], correct: 1,
    explication: "La clôture prématurée consiste à accepter un diagnostic avant d'avoir suffisamment vérifié les données ou écarté les alternatives. C'est une source fréquente d'erreur, notamment en situation d'urgence ou de surcharge.", ref: "Biais cognitifs en clinique", diff: 3 },

  { ueId: "3.1", q: "Le rôle propre infirmier est défini par quel article du Code de la santé publique ?", options: ["Article R.4311-3", "Article L.1110-1", "Article R.4127-1", "Article L.1111-4"], correct: 0,
    explication: "L'article R.4311-3 du CSP définit le rôle propre de l'infirmier, dans lequel il est habilité à prendre les initiatives et à accomplir les soins qu'il juge nécessaires, en mettant en œuvre la démarche clinique et les diagnostics infirmiers.", ref: "CSP art. R.4311-3", diff: 2 },

  { ueId: "3.1", q: "Quelle proposition est une donnée OBJECTIVE ?", options: ["« Je me sens fatigué »", "« J'ai peur de l'opération »", "Température mesurée à 38,5 °C", "« J'ai l'impression que mon cœur s'emballe »"], correct: 2,
    explication: "Une température mesurée est une donnée objective : observable et mesurable par un tiers. Les trois autres énoncés sont des données subjectives, exprimant le ressenti de la personne.", ref: "Recueil de données", diff: 1 },

  { ueId: "3.1", q: "Dans la formulation PES, l'expression « lié à » introduit :", options: ["Le problème", "L'étiologie / les facteurs favorisants", "Les signes et symptômes", "L'objectif de soin"], correct: 1,
    explication: "Dans le format PES, « lié à » (ou « relié à ») introduit l'étiologie, c'est-à-dire les facteurs favorisants ou la cause du problème. « Se manifestant par » introduit ensuite les signes et symptômes.", ref: "NANDA-I, formulation PES", diff: 1 },

  { ueId: "3.1", q: "Le biais de confirmation conduit l'infirmier à :", options: ["Privilégier un diagnostic vu récemment", "Ne retenir que les données qui confirment son hypothèse de départ", "Conclure dès la première donnée", "Multiplier inutilement les examens"], correct: 1,
    explication: "Le biais de confirmation est la tendance à rechercher et valoriser uniquement les données confirmant son hypothèse, en négligeant celles qui la contredisent. Il fausse le jugement clinique et entretient les erreurs.", ref: "Biais cognitifs en clinique", diff: 3 },

  { ueId: "3.1", q: "Quelle est la finalité principale du diagnostic infirmier ?", options: ["Établir le traitement médicamenteux", "Identifier les réactions de la personne pour orienter les soins relevant du rôle propre", "Remplacer le diagnostic médical", "Justifier une prescription médicale"], correct: 1,
    explication: "Le diagnostic infirmier identifie les réactions de la personne à un problème de santé afin de choisir les interventions relevant du rôle propre. Il ne remplace pas le diagnostic médical et ne fonde pas la prescription de médicaments.", ref: "CSP art. R.4311-3 ; NANDA-I", diff: 2 },

  { ueId: "3.1", q: "Parmi ces formulations, laquelle est un diagnostic infirmier de risque correctement énoncé ?", options: ["Risque d'atteinte à l'intégrité de la peau lié à l'immobilité", "Escarre stade 2 au sacrum", "Risque d'atteinte à l'intégrité de la peau se manifestant par une rougeur", "Immobilité liée à l'alitement"], correct: 0,
    explication: "Un diagnostic de risque correct comporte le problème et les facteurs de risque, sans signes ni symptômes : « Risque d'atteinte à l'intégrité de la peau lié à l'immobilité ». La présence d'une rougeur ou d'une escarre signifierait un problème déjà actuel.", ref: "NANDA-I, diagnostics de risque", diff: 2 },

  { ueId: "3.1", q: "Quelle compétence du référentiel infirmier 2009 est centrée sur l'évaluation d'une situation clinique et l'élaboration d'un diagnostic dans le domaine infirmier ?", options: ["Compétence 1", "Compétence 4", "Compétence 7", "Compétence 9"], correct: 0,
    explication: "La compétence 1 du référentiel 2009 s'intitule « Évaluer une situation clinique et établir un diagnostic dans le domaine infirmier ». Elle est directement adossée à l'UE 3.1 sur le raisonnement et la démarche clinique.", ref: "Référentiel de formation infirmier 2009, compétence 1", diff: 3 },
];

export const flashcards = [
  { ueId: "3.1", recto: "Quelles sont les 5 étapes de la démarche clinique ?", verso: "Recueil de données, analyse/interprétation, planification, réalisation, évaluation/réajustement (cycle continu)." },
  { ueId: "3.1", recto: "Différence entre donnée objective et donnée subjective ?", verso: "Objective : mesurable ou observable (constante, plaie, examen). Subjective : rapportée par la personne (ressenti, plainte)." },
  { ueId: "3.1", recto: "Que signifie le format PES ?", verso: "Problème + Étiologie (lié à) + Signes et symptômes (se manifestant par) : formulation d'un diagnostic infirmier actuel." },
  { ueId: "3.1", recto: "Comment se formule un diagnostic infirmier de risque ?", verso: "Problème + facteurs de risque uniquement (« Risque de… lié à… »), sans signes ni symptômes car le problème n'est pas encore survenu." },
  { ueId: "3.1", recto: "Quels sont les 3 types de diagnostics infirmiers ?", verso: "Actuel (réel), de risque, et de promotion de la santé." },
  { ueId: "3.1", recto: "Diagnostic infirmier ou diagnostic médical : « Anxiété liée à la peur de l'opération » ?", verso: "Diagnostic infirmier : il porte sur la réaction de la personne et relève du rôle propre." },
  { ueId: "3.1", recto: "Qu'est-ce qu'un problème traité en collaboration ?", verso: "Complication potentielle physiologique surveillée par l'infirmier en autonomie, mais dont le traitement relève d'une prescription médicale." },
  { ueId: "3.1", recto: "Qu'est-ce que le raisonnement hypothético-déductif ?", verso: "Formuler des hypothèses à partir des premières données, puis recueillir des données ciblées pour les confirmer ou les infirmer." },
  { ueId: "3.1", recto: "Définition du biais d'ancrage ?", verso: "Se fixer sur la première hypothèse et ne plus la remettre en cause malgré de nouvelles données." },
  { ueId: "3.1", recto: "Définition du biais de confirmation ?", verso: "Ne retenir que les données qui confirment son hypothèse, en négligeant celles qui la contredisent." },
  { ueId: "3.1", recto: "Que signifie DAR dans les transmissions ciblées ?", verso: "Données, Actions, Résultats : modèle de traçabilité du raisonnement clinique dans le dossier de soins." },
  { ueId: "3.1", recto: "Quel article du CSP définit le rôle propre infirmier ?", verso: "L'article R.4311-3 du Code de la santé publique." },
  { ueId: "3.1", recto: "Caractéristiques d'un objectif de soin bien formulé ?", verso: "Centré sur la personne, réaliste, mesurable (évaluable) et négocié avec elle." },
  { ueId: "3.1", recto: "Qu'est-ce que la clôture prématurée du raisonnement ?", verso: "Accepter un diagnostic avant d'avoir recueilli assez de données ou écarté les hypothèses alternatives." },
  { ueId: "3.1", recto: "Quelle question simple limite les biais de raisonnement ?", verso: "« Et si ce n'était pas ça ? » : envisager systématiquement une hypothèse alternative avant de conclure." },
];
