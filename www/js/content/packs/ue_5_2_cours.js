export const fiches = [
  { id: "fco_5_2_macrocible_imatved", ueId: "5.2", type: "cours",
    titre: "La macrocible : méthode I.M.A.T.V.E.D",
    resume: "La macrocible structure le recueil de données pour aller du patient vers le projet de soin.",
    tags: ["d'après tes cours","macrocible","IMATVED","démarche clinique"],
    html: `<p>Le point de départ de la démarche clinique est le constat que <strong>le patient est une personne complexe</strong>. Pour évaluer sa situation, on construit une <span class="key" data-term="macrocible">macrocible</span> : une synthèse organisée des données qui mène ensuite au <span class="key" data-term="projet de soin">projet de soin</span>.</p>
<h3>La trame I.M.A.T.V.E.D</h3>
<ul>
<li><strong>I — Identité / Identification</strong> : âge, lieu de vie, contexte social, personne de confiance, mesure de protection.</li>
<li><strong>M — Maladie / Motif</strong> : motif d'entrée, pathologie, intervention chirurgicale, date.</li>
<li><strong>A — Antécédents</strong> : ATCD médicaux et chirurgicaux, allergies.</li>
<li><strong>T — Traitements</strong> : traitements habituels et prescrits.</li>
<li><strong>V — Vécu</strong> : ressenti du patient, état psychologique, comportement.</li>
<li><strong>E — Environnement</strong> : conditions de vie, entourage, devenir (retour à domicile, EHPAD, SSR).</li>
<li><strong>D — Devenir / Données du jour</strong> : projet de sortie et données cliniques actuelles.</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>La macrocible n'est pas une simple liste : elle relie les données entre elles pour faire émerger les problèmes et risques, puis le projet de soin.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>I.M.A.T.V.E.D</strong> = Identité, Maladie, Antécédents, Traitements, Vécu, Environnement, Devenir.</div>`,
    refs: ["D'après tes cours (UE 5.2)"] },

  { id: "fco_5_2_grille_projet_soin", ueId: "5.2", type: "cours",
    titre: "Du problème au projet de soin : la grille d'analyse",
    resume: "Chaque problème ou risque s'analyse selon : cause, objectif, actions, surveillance.",
    tags: ["d'après tes cours","projet de soin","synthèse clinique"],
    html: `<p>Après la macrocible, on construit le <strong>projet de soin</strong> sous forme de grille. Chaque ligne traite un <span class="key" data-term="problème de santé">problème de santé</span> ou un <span class="key" data-term="risque">risque</span>.</p>
<table class="tbl">
<tr><th>Colonne</th><th>Contenu</th></tr>
<tr><td>Problème / Risque</td><td>Problème réel (ex. douleur) ou risque potentiel (ex. risque infectieux).</td></tr>
<tr><td>Causes (lié à)</td><td>Facteurs en cause + « se manifeste par » pour un problème réel.</td></tr>
<tr><td>Objectif</td><td>Résultat attendu (ex. éviter la survenue de la douleur).</td></tr>
<tr><td>Actions</td><td>Rôle propre et rôle sur prescription.</td></tr>
<tr><td>Surveillance / Évaluation</td><td>Éléments à surveiller et critères de résultat.</td></tr>
</table>
<h3>Formuler un problème ou un risque</h3>
<ul>
<li><strong>Problème réel</strong> : « <em>lié à</em> » (cause) + « <em>se manifeste par</em> » (signes observés).</li>
<li><strong>Risque potentiel</strong> : « <em>lié à</em> » (facteur de risque), sans manifestation encore présente.</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Rôle propre = ce que l'IDE décide et réalise de son initiative ; rôle prescrit (sur prescription médicale) = ce qui découle de la PM.</div>`,
    refs: ["D'après tes cours (UE 5.2)"] },

  { id: "fco_5_2_cas_martineau", ueId: "5.2", type: "cours",
    titre: "Cas clinique : Mme Martineau (fracture du poignet)",
    resume: "Patiente de 82 ans, ostéosynthèse du poignet droit après chute : analyse des problèmes et risques.",
    tags: ["d'après tes cours","cas clinique","chirurgie orthopédique"],
    html: `<p>Mme Martineau, <strong>82 ans</strong>, vit en EHPAD. Chute de sa hauteur (faiblesse des membres inférieurs liée à une neuropathie dégénérative) avec <span class="key" data-term="traumatisme crânien">traumatisme crânien</span> sans perte de connaissance et malaise vagal sur douleur. <strong>Ostéosynthèse du poignet droit</strong> (broches + manchette en résine) sous anesthésie loco-régionale (ALR). Patiente <strong>droitière</strong> ; ne pas piquer le bras droit (ATCD adénocarcinome du sein droit).</p>
<h3>Problèmes et risques identifiés</h3>
<ul>
<li><strong>Douleur</strong> : liée à l'intervention, broches, fracture, plaie au pli du coude, TC, RGO, céphalées. Objectif EVA = 0 ; antalgiques palier I systématiques + Bi-Profénid.</li>
<li><strong>Risque d'anxiété</strong> : lié à l'hospitalisation, l'intervention, la chute, le syndrome anxio-dépressif. Écoute active, présence, information.</li>
<li><strong>Perte d'autonomie partielle</strong> : impotence fonctionnelle, patiente droitière immobilisée du côté droit. Aide au repas (verre à anse, couper la viande), kiné/ergo.</li>
<li><strong>Risque de syndrome des loges</strong> (lié à la résine) : surélever le membre, surveiller sensibilité, chaleur, mobilité des doigts, œdème, couleur, douleur intense, démangeaisons, pouls.</li>
<li>Autres risques : <strong>infectieux, thromboembolique, de chute, lié à l'anesthésie, de phlyctène</strong> (frottement de la manchette), <strong>de complication du TC, hémorragique</strong>.</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Sous résine/plâtre, surveiller les signes du syndrome des loges : les « 6 signes » coloration, chaleur, sensibilité, mobilité des doigts, œdème, douleur intense + pouls.</div>`,
    refs: ["D'après tes cours (UE 5.2)"] },

  { id: "fco_5_2_cas_fernand", ueId: "5.2", type: "cours",
    titre: "Cas clinique : Mr Fernand (PTH droite)",
    resume: "Homme de 64 ans opéré d'une prothèse totale de hanche : risques post-opératoires et surveillance.",
    tags: ["d'après tes cours","cas clinique","PTH","post-opératoire"],
    html: `<p>Mr Fernand, <strong>64 ans</strong>, <span class="key" data-term="PTH">prothèse totale de hanche (PTH)</span> droite sur coxarthrose, sous anesthésie générale. ATCD : cardiopathie hypertensive, DNID (diabète non insulinodépendant). Personne de confiance : sa sœur. Vit en maison de plain-pied.</p>
<h3>Surveillances post-opératoires</h3>
<ul>
<li><strong>Risque hémorragique</strong> : drain de Redon (retiré à J3 si &lt; 100 ml), surveillance du pansement, contrôle de l'hémoglobine (hémocue), effet du Lovenox.</li>
<li><strong>Risque infectieux</strong> : cicatrice agrafée, drain, point de ponction, diabète. Signes : rougeur, douleur, chaleur, œdème. Antibiotique (Zinnat), température.</li>
<li><strong>Risque de luxation</strong> de la prothèse : respecter les positions interdites de la PTH.</li>
<li><strong>Risque thromboembolique</strong> : âge, HTA, alitement. HBPM (Lovenox 0,4 ml) à débuter le lendemain, bas de contention, premier lever à J1 avec appui complet.</li>
<li><strong>Risque de déséquilibre du diabète</strong> : surveillance glycémique, reprise des antidiabétiques oraux (metformine) si réalimentation.</li>
<li><strong>Risques liés à l'AG</strong> : conscience, reprise de diurèse (globe, bladder scan), nausées/vomissements, hypoventilation/hypotension, hypothermie.</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Après une PTH : prévention de la luxation, du risque thromboembolique (HBPM + bas + lever précoce) et surveillance du Redon.</div>`,
    refs: ["D'après tes cours (UE 5.2)"] },

  { id: "fco_5_2_cas_giraud", ueId: "5.2", type: "cours",
    titre: "Cas clinique : Mme Giraud (fracture poignet + pneumopathie)",
    resume: "Patiente de 91 ans cumulant fracture, infection pulmonaire, plaie du cuir chevelu et fragilité psychique.",
    tags: ["d'après tes cours","cas clinique","personne âgée"],
    html: `<p>Mme Giraud, <strong>91 ans</strong>, entrée (J1) pour <strong>fracture du poignet gauche</strong> (broches + manchette, ALR) après chute, avec <span class="key" data-term="pneumopathie">infection pulmonaire (pneumopathie)</span> et plaie du cuir chevelu (3 points séparés). Vit en EHPAD (canne, autonome), veuve, sous tutelle de sa fille aînée. Faciès triste/fatigué, parle peu, 2 épisodes dépressifs antérieurs. Devenir : retour à l'EHPAD.</p>
<h3>Problèmes et risques</h3>
<ul>
<li><strong>Infection pulmonaire</strong> : toux grasse non productive, antibiotique (Augmentin).</li>
<li><strong>Risque de syndrome dépressif / baisse de morale</strong> : surveillance de la thymie, écoute, valoriser les appels de sa fille.</li>
<li><strong>Risque d'escarre</strong> : surveillance de la rougeur au siège, mobilisation.</li>
<li><strong>Risque de perte d'autonomie / altération de la mobilité.</strong></li>
<li><strong>Risques de chute, de trauma crânien</strong> (hémorragie, hypertension intracrânienne), <strong>de syndrome des loges, de phlébite, de fausses routes, de désorientation, d'hypotension orthostatique, infectieux.</strong></li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Chez la personne âgée, les problèmes s'additionnent : la démarche clinique doit hiérarchiser les priorités (ici l'infection pulmonaire et la surveillance neurologique).</div>`,
    refs: ["D'après tes cours (UE 5.2)"] },

  { id: "fco_5_2_axes_evaluation", ueId: "5.2", type: "cours",
    titre: "Analyser une situation : les axes de questionnement",
    resume: "L'analyse d'une situation clinique se questionne selon quatre grands thèmes.",
    tags: ["d'après tes cours","analyse de situation","posture"],
    html: `<p>Pour analyser une situation clinique (TD d'analyse de situation), on se pose des questions selon plusieurs <strong>thèmes</strong> :</p>
<ul>
<li><strong>Posture professionnelle</strong> : attitude soignante, communication, écoute active, respect du patient.</li>
<li><strong>Pathologies et traitements</strong> : connaissances sur la maladie, le mécanisme, les thérapeutiques et leurs effets.</li>
<li><strong>Respect des concepts</strong> : application des concepts de soin et des valeurs professionnelles.</li>
<li><strong>Contexte</strong> : environnement, situation sociale et familiale, devenir du patient.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Les 4 axes : <strong>Posture, Pathologie/Traitement, Concepts, Contexte</strong>.</div>`,
    refs: ["D'après tes cours (UE 5.2)"] },
];

export const qcm = [
  { ueId: "5.2", q: "Que signifie l'acronyme de la méthode de macrocible I.M.A.T.V.E.D pour la lettre A ?", options: ["Actions","Antécédents","Anesthésie","Anxiété"], correct: 1,
    explication: "Dans I.M.A.T.V.E.D, A correspond aux Antécédents (médicaux, chirurgicaux, allergies).", ref: "UE 5.2", diff: 1 },
  { ueId: "5.2", q: "La macrocible sert principalement à :", options: ["Prescrire les traitements","Organiser le recueil de données pour aboutir au projet de soin","Remplacer le dossier médical","Calculer les doses de médicaments"], correct: 1,
    explication: "La macrocible synthétise les données du patient (personne complexe) pour faire émerger problèmes, risques et projet de soin.", ref: "UE 5.2", diff: 1 },
  { ueId: "5.2", q: "Comment se formule un problème de santé réel dans la démarche clinique ?", options: ["Lié à… uniquement","Lié à… + se manifeste par…","Risque de… lié à…","Objectif + action"], correct: 1,
    explication: "Un problème réel s'écrit « lié à » (cause) + « se manifeste par » (signes observés). Le risque n'a pas de manifestation.", ref: "UE 5.2", diff: 2 },
  { ueId: "5.2", q: "Un « risque potentiel » se distingue d'un problème réel car :", options: ["Il se manifeste déjà","Il n'a pas encore de manifestation clinique","Il ne nécessite pas de surveillance","Il concerne uniquement la douleur"], correct: 1,
    explication: "Le risque est potentiel : il est formulé « lié à » un facteur de risque, sans signe présent. Il justifie une surveillance préventive.", ref: "UE 5.2", diff: 2 },
  { ueId: "5.2", q: "Dans la grille de projet de soin, la dernière colonne correspond à :", options: ["La cause","L'objectif","La surveillance / évaluation","Le diagnostic médical"], correct: 2,
    explication: "L'ordre est : problème/risque, causes, objectif, actions, surveillance/évaluation (critères de résultat).", ref: "UE 5.2", diff: 1 },
  { ueId: "5.2", q: "Mme Martineau est droitière et opérée du poignet droit. Quelle action est adaptée au repas ?", options: ["Ne rien adapter","Couper la viande et proposer un verre à anse","Lui interdire de manger","Poser une sonde"], correct: 1,
    explication: "L'immobilisation du côté dominant impose de suppléer : couper la viande, utiliser la main gauche, verre à anse.", ref: "UE 5.2", diff: 1 },
  { ueId: "5.2", q: "Pourquoi ne faut-il pas piquer Mme Martineau dans le bras droit ?", options: ["À cause de la fracture du poignet","En raison de l'ATCD d'adénocarcinome du sein droit","Parce qu'elle est droitière","Pour préserver la perfusion"], correct: 1,
    explication: "Après cancer du sein droit (curage/risque lymphœdème), on évite ponctions et tensions du côté homolatéral.", ref: "UE 5.2", diff: 2 },
  { ueId: "5.2", q: "Quel signe NE fait PAS partie de la surveillance d'un syndrome des loges sous résine ?", options: ["Coloration et chaleur des doigts","Mobilité des doigts et œdème","Douleur intense, démangeaisons","Glycémie capillaire"], correct: 3,
    explication: "Le syndrome des loges se surveille par coloration, chaleur, sensibilité, mobilité des doigts, œdème, douleur intense, pouls. La glycémie n'en fait pas partie.", ref: "UE 5.2", diff: 2 },
  { ueId: "5.2", q: "Mr Fernand a été opéré d'une PTH. De quoi s'agit-il ?", options: ["Pose totale de hanche par voie endoscopique","Prothèse totale de hanche","Plaque temporaire de hanche","Ponction transcutanée de hanche"], correct: 1,
    explication: "PTH = prothèse totale de hanche, ici sur coxarthrose.", ref: "UE 5.2", diff: 1 },
  { ueId: "5.2", q: "Après une PTH, quelle complication mécanique spécifique faut-il prévenir ?", options: ["La luxation de la prothèse","La fausse route","Le globe vésical","L'escarre talonnière"], correct: 0,
    explication: "Le risque de luxation est propre à la PTH : il faut respecter les positions interdites de la hanche.", ref: "UE 5.2", diff: 2 },
  { ueId: "5.2", q: "Le drain de Redon de Mr Fernand peut être retiré à J3 si le volume aspiré est :", options: ["Supérieur à 100 ml","Inférieur à 100 ml","Supérieur à 500 ml","Indifférent"], correct: 1,
    explication: "Selon la prescription, le Redon est retirable à J3 si le recueil est inférieur à 100 ml.", ref: "UE 5.2", diff: 2 },
  { ueId: "5.2", q: "Quel traitement préventif du risque thromboembolique est prescrit chez Mr Fernand ?", options: ["Un antibiotique","Une HBPM (Lovenox)","Un antalgique de palier I","Un collyre"], correct: 1,
    explication: "Le Lovenox (HBPM) à 0,4 ml débute le lendemain pour 3 semaines ; associé aux bas de contention et au lever précoce.", ref: "UE 5.2", diff: 1 },
  { ueId: "5.2", q: "Mr Fernand est DNID. Quand peut-il reprendre sa metformine ?", options: ["Immédiatement au retour de bloc","S'il a repris une alimentation","Jamais en post-opératoire","Seulement en intraveineux"], correct: 1,
    explication: "La reprise des antidiabétiques oraux (metformine) est conditionnée à la reprise de l'alimentation.", ref: "UE 5.2", diff: 2 },
  { ueId: "5.2", q: "Parmi les risques liés à l'anesthésie générale, lequel concerne l'élimination urinaire ?", options: ["Risque hémorragique","Risque de non-reprise de diurèse / globe","Risque de luxation","Risque infectieux"], correct: 1,
    explication: "L'AG peut entraîner une rétention : surveiller la reprise de diurèse, palper le ventre, bladder scan en cas de globe.", ref: "UE 5.2", diff: 2 },
  { ueId: "5.2", q: "Chez Mme Giraud (91 ans), quel élément oriente vers un risque de syndrome dépressif ?", options: ["Toux grasse","Faciès triste, parle peu, 2 épisodes dépressifs antérieurs","Glaucome","Hypothyroïdie"], correct: 1,
    explication: "Le vécu (faciès triste/fatigué, peu communicante) et les ATCD dépressifs justifient une surveillance de la thymie.", ref: "UE 5.2", diff: 1 },
  { ueId: "5.2", q: "Mme Giraud présente une infection pulmonaire. Quel traitement est cité ?", options: ["Levothyrox","Augmentin (antibiotique)","Diurétique","Collyre"], correct: 1,
    explication: "La pneumopathie est traitée par un antibiotique : l'Augmentin.", ref: "UE 5.2", diff: 1 },
  { ueId: "5.2", q: "La surveillance d'une rougeur au siège chez Mme Giraud vise à prévenir :", options: ["Une phlébite","Une escarre","Une luxation","Une fausse route"], correct: 1,
    explication: "Une rougeur au siège est un signe précurseur d'escarre : surveillance cutanée et mobilisation.", ref: "UE 5.2", diff: 1 },
  { ueId: "5.2", q: "Dans l'analyse d'une situation, quel axe concerne l'attitude soignante et la communication ?", options: ["Pathologies et traitements","Posture professionnelle","Contexte","Respect des concepts"], correct: 1,
    explication: "La posture professionnelle regroupe l'attitude, l'écoute active et la communication avec le patient.", ref: "UE 5.2", diff: 1 },
  { ueId: "5.2", q: "Dans la grille de soin, « rôle propre » désigne :", options: ["Les actes sur prescription médicale","Les actions décidées et réalisées par l'IDE de sa propre initiative","Les actes du médecin","Les actes de l'aide-soignant uniquement"], correct: 1,
    explication: "Le rôle propre relève de l'initiative de l'IDE ; le rôle prescrit découle de la prescription médicale (PM).", ref: "UE 5.2", diff: 2 },
  { ueId: "5.2", q: "L'antalgie de palier I prescrite chez Mme Martineau correspond à :", options: ["Morphine","Paracétamol (1 g x4/jour)","Tramadol seul","Anesthésie générale"], correct: 1,
    explication: "Le palier I (non opioïde) repose sur le paracétamol, ici 1 g 4 fois par jour en systématique.", ref: "UE 5.2", diff: 1 },
  { ueId: "5.2", q: "Quel risque, lié au traumatisme crânien de Mme Martineau, doit être surveillé en neurologie ?", options: ["Risque de fausse route","Risque d'hypertension intracrânienne / complication du TC","Risque de luxation","Risque d'escarre"], correct: 1,
    explication: "Après un TC, on surveille l'état de conscience et le risque d'hémorragie / hypertension intracrânienne.", ref: "UE 5.2", diff: 2 },
  { ueId: "5.2", q: "Pour évaluer la douleur, quelles échelles sont citées dans les cours ?", options: ["Glasgow et NFS","EVA et TILT","Apgar et Norton","Braden et MMSE"], correct: 1,
    explication: "Les outils mentionnés sont l'EVA (échelle visuelle analogique) et le TILT pour évaluer la douleur.", ref: "UE 5.2", diff: 1 },
  { ueId: "5.2", q: "Le premier lever de Mr Fernand est autorisé :", options: ["À J0 dès le retour de bloc","À J1 avec appui complet","À J3 après la radio","Jamais avant la sortie"], correct: 1,
    explication: "Le premier lever est autorisé à J1 avec appui complet, participant à la prévention thromboembolique.", ref: "UE 5.2", diff: 2 },
];

export const flashcards = [
  { ueId: "5.2", recto: "Que signifie I.M.A.T.V.E.D ?", verso: "Identité, Maladie, Antécédents, Traitements, Vécu, Environnement, Devenir — la trame de la macrocible." },
  { ueId: "5.2", recto: "À quoi sert la macrocible ?", verso: "À organiser le recueil de données d'un patient (personne complexe) pour aboutir au projet de soin." },
  { ueId: "5.2", recto: "Comment formuler un problème de santé réel ?", verso: "« Lié à… » (cause) + « se manifeste par… » (signes observés)." },
  { ueId: "5.2", recto: "Comment formuler un risque potentiel ?", verso: "« Risque de… lié à… » un facteur de risque, sans manifestation encore présente." },
  { ueId: "5.2", recto: "Quelles sont les colonnes de la grille de projet de soin ?", verso: "Problème/risque, Causes (lié à), Objectif, Actions, Surveillance/Évaluation." },
  { ueId: "5.2", recto: "Différence entre rôle propre et rôle prescrit ?", verso: "Rôle propre = initiative de l'IDE ; rôle prescrit = sur prescription médicale (PM)." },
  { ueId: "5.2", recto: "Quels signes surveiller pour un syndrome des loges sous résine ?", verso: "Coloration, chaleur, sensibilité, mobilité des doigts, œdème, douleur intense, démangeaisons, pouls." },
  { ueId: "5.2", recto: "Que signifie PTH ?", verso: "Prothèse totale de hanche." },
  { ueId: "5.2", recto: "Complication mécanique spécifique après une PTH ?", verso: "La luxation de la prothèse : respecter les positions interdites de la hanche." },
  { ueId: "5.2", recto: "Quand retirer le drain de Redon de Mr Fernand ?", verso: "À J3 si le volume aspiré est inférieur à 100 ml." },
  { ueId: "5.2", recto: "Prévention du risque thromboembolique après chirurgie orthopédique ?", verso: "HBPM (Lovenox), bas de contention et lever précoce (J1)." },
  { ueId: "5.2", recto: "Quand reprendre la metformine en post-op chez un diabétique ?", verso: "Lorsque le patient a repris une alimentation." },
  { ueId: "5.2", recto: "Quelles échelles d'évaluation de la douleur sont citées ?", verso: "EVA (échelle visuelle analogique) et TILT." },
  { ueId: "5.2", recto: "Que signale une rougeur au siège ?", verso: "Un signe précurseur d'escarre : surveillance cutanée et mobilisation." },
  { ueId: "5.2", recto: "Antalgique de palier I prescrit chez Mme Martineau ?", verso: "Paracétamol 1 g x4/jour en systématique." },
  { ueId: "5.2", recto: "Risques liés à l'anesthésie générale à surveiller ?", verso: "Conscience, reprise de diurèse (globe), nausées/vomissements, hypoventilation/hypotension, hypothermie." },
  { ueId: "5.2", recto: "Quels sont les 4 axes d'analyse d'une situation clinique ?", verso: "Posture professionnelle, Pathologies et traitements, Respect des concepts, Contexte." },
  { ueId: "5.2", recto: "Pourquoi ne pas piquer le bras droit de Mme Martineau ?", verso: "ATCD d'adénocarcinome du sein droit (risque lymphœdème)." },
  { ueId: "5.2", recto: "Surveillance après un traumatisme crânien ?", verso: "État de conscience, surveillance neurologique, risque hémorragique / hypertension intracrânienne." },
  { ueId: "5.2", recto: "Antibiotique cité pour la pneumopathie de Mme Giraud ?", verso: "Augmentin." },
];
