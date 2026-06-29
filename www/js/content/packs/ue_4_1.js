export const fiches = [
  { id: "f_4_1_confort_bienetre", ueId: "4.1", type: "cours",
    titre: "Soins de confort et de bien-être : concepts et besoins",
    resume: "Définitions du confort/bien-être et leur place dans les soins infirmiers selon les 14 besoins de V. Henderson.",
    tags: ["confort", "bien-être", "Henderson", "besoins"],
    html: `<p>Les <span class="key" data-term="soins de confort">soins de confort</span> visent à procurer au patient un état de bien-être physique, psychique et social. Ils relèvent du <strong>rôle propre infirmier</strong> (art. R.4311-3 et R.4311-5 du CSP).</p>
<h3>Définitions</h3>
<ul>
<li><strong>Confort</strong> : état de satisfaction des besoins du corps, absence de gêne physique.</li>
<li><strong>Bien-être</strong> : sensation agréable globale, équilibre physique, psychique et social (notion proche de la santé selon l'OMS).</li>
<li><strong>Besoin</strong> : nécessité vitale que la personne doit satisfaire pour assurer son équilibre.</li>
</ul>
<h3>Cadre conceptuel : V. Henderson</h3>
<p>Virginia Henderson décrit <span class="key" data-term="14 besoins fondamentaux">14 besoins fondamentaux</span>. L'IDE évalue l'indépendance/dépendance de la personne et l'aide à les satisfaire ou à les compenser.</p>
<table class="tbl">
<tr><th>Besoin</th><th>Exemple de soin de confort</th></tr>
<tr><td>Respirer</td><td>Installation demi-assise, oxygénation</td></tr>
<tr><td>Être propre / protéger ses téguments</td><td>Toilette, soins de bouche</td></tr>
<tr><td>Dormir, se reposer</td><td>Calme, literie, gestion de la douleur</td></tr>
<tr><td>Éviter les dangers</td><td>Prévention des escarres, des chutes</td></tr>
</table>
<div class="callout"><div class="callout-t">Cadre légal</div>Les soins de confort, d'hygiène et de bien-être relèvent du rôle propre de l'infirmier : il en a l'initiative et la responsabilité.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« Confort = le CORPS apaisé ; Bien-être = la PERSONNE apaisée (corps + esprit + lien social). »</div>`,
    refs: ["UE 4.1"] },

  { id: "f_4_1_toilette_hygiene", ueId: "4.1", type: "cours",
    titre: "Toilette et hygiène corporelle",
    resume: "Objectifs, types et règles de réalisation de la toilette dans le respect de la dignité et de l'intimité.",
    tags: ["toilette", "hygiène", "dignité", "intimité"],
    html: `<p>La <span class="key" data-term="toilette">toilette</span> est un soin d'hygiène et de confort qui maintient la propreté corporelle, prévient les infections et préserve l'intégrité cutanée. C'est aussi un temps relationnel et d'observation privilégié.</p>
<h3>Objectifs</h3>
<ul>
<li>Maintenir la propreté et l'intégrité de la peau et des muqueuses.</li>
<li>Prévenir les infections et les <span class="key" data-term="escarre">escarres</span>.</li>
<li>Stimuler la circulation et préserver l'image de soi.</li>
<li>Évaluer l'état cutané, la mobilité, l'état psychique.</li>
</ul>
<h3>Types de toilette</h3>
<table class="tbl">
<tr><th>Type</th><th>Indication</th></tr>
<tr><td>Toilette au lavabo / douche</td><td>Patient autonome ou semi-autonome</td></tr>
<tr><td>Toilette au lit</td><td>Patient alité, dépendant</td></tr>
<tr><td>Toilette partielle</td><td>Zones ciblées (visage, mains, siège)</td></tr>
</table>
<h3>Règles d'or</h3>
<ul>
<li>Respecter <strong>dignité, intimité, pudeur</strong> (porte fermée, paravent).</li>
<li>Du plus <strong>propre vers le plus sale</strong> ; le siège et la zone génitale en dernier.</li>
<li>Sécher soigneusement les plis (sous-mammaire, inguinaux, interdigitaux).</li>
<li><span class="key" data-term="hygiène des mains">Hygiène des mains</span> et gants adaptés ; respect de l'asepsie.</li>
</ul>
<div class="callout"><div class="callout-t">Sécurité</div>Toujours adapter la température de l'eau (env. 37 °C) et vérifier l'absence de matériel piquant/coupant. Surveiller la fatigue du patient.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« Du PROPRE au SALE, du HAUT vers le BAS » : visage, tronc, membres, puis siège.</div>`,
    refs: ["UE 4.1"] },

  { id: "f_4_1_escarre_mobilisation", ueId: "4.1", type: "cours",
    titre: "Prévention des escarres et installation du patient",
    resume: "Physiopathologie de l'escarre, échelles d'évaluation du risque et mesures de prévention.",
    tags: ["escarre", "prévention", "Braden", "Norton", "installation"],
    html: `<p>L'<span class="key" data-term="escarre">escarre</span> est une lésion cutanée d'origine ischémique liée à une compression prolongée des tissus mous entre une saillie osseuse et un plan dur.</p>
<h3>Facteurs favorisants</h3>
<ul>
<li>Immobilité, alitement prolongé, perte de sensibilité.</li>
<li>Dénutrition, déshydratation, incontinence (macération).</li>
<li>Âge avancé, troubles de la conscience, friction/cisaillement.</li>
</ul>
<h3>Évaluation du risque</h3>
<p>Échelles validées : <span class="key" data-term="échelle de Braden">Braden</span> et <span class="key" data-term="échelle de Norton">Norton</span> (plus le score est bas, plus le risque est élevé).</p>
<h3>Stades de l'escarre</h3>
<table class="tbl">
<tr><th>Stade</th><th>Description</th></tr>
<tr><td>I</td><td>Rougeur (érythème) ne blanchissant pas à la pression, peau intacte</td></tr>
<tr><td>II</td><td>Perte cutanée superficielle : atteinte de l'épiderme et/ou du derme (phlyctène, abrasion)</td></tr>
<tr><td>III</td><td>Atteinte de toute l'épaisseur de la peau jusqu'au tissu sous-cutané (graisse visible)</td></tr>
<tr><td>IV</td><td>Atteinte profonde exposant muscle, tendon ou os</td></tr>
</table>
<h3>Prévention</h3>
<ul>
<li><strong>Changements de position</strong> réguliers (environ toutes les 2 à 3 h).</li>
<li>Supports d'aide à la prévention (matelas/coussins à air, gel).</li>
<li>Effleurage des points d'appui ; éviter le massage appuyé des rougeurs.</li>
<li>Maintenir hygiène, hydratation cutanée et état nutritionnel.</li>
</ul>
<div class="callout"><div class="callout-t">Points d'appui à surveiller</div>Sacrum, talons, trochanters, ischions, occiput, omoplates, coudes, malléoles.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« BRADEN bas = Risque haut. » Et la règle des positions : « Bouger toutes les 3 h, et observer chaque rougeur. »</div>`,
    refs: ["UE 4.1"] },

  { id: "f_4_1_soins_bouche_alimentation", ueId: "4.1", type: "cours",
    titre: "Soins de bouche, aide à l'alimentation et sommeil",
    resume: "Soins de bouche, accompagnement du repas et mesures favorisant le repos et le sommeil.",
    tags: ["soins de bouche", "alimentation", "sommeil", "confort"],
    html: `<p>Le confort passe aussi par l'hygiène buccale, une alimentation adaptée et un sommeil de qualité, tous trois liés au bien-être global du patient.</p>
<h3>Soins de bouche</h3>
<ul>
<li>Préviennent les infections, les mycoses et la sécheresse buccale.</li>
<li>Indispensables chez le patient à jeun, sous O2, dénutri ou en fin de vie.</li>
<li>Surveiller l'état des muqueuses, des dents et des prothèses dentaires.</li>
</ul>
<h3>Aide à l'alimentation</h3>
<ul>
<li>Installer le patient <strong>assis ou demi-assis</strong> pour limiter le risque de <span class="key" data-term="fausse route">fausse route</span>.</li>
<li>Adapter la texture (normale, hachée, mixée, liquide épaissi) aux capacités de déglutition.</li>
<li>Respecter le rythme, les goûts et l'autonomie de la personne.</li>
<li>Surveiller la prise alimentaire et l'hydratation.</li>
</ul>
<h3>Repos et sommeil</h3>
<ul>
<li>Favoriser un environnement calme, une literie confortable, une bonne température.</li>
<li>Respecter les rituels d'endormissement et les rythmes de la personne.</li>
<li>Anticiper et soulager la <strong>douleur</strong>, premier ennemi du sommeil.</li>
</ul>
<div class="callout"><div class="callout-t">Prévention de la fausse route</div>Patient redressé, environnement calme, vigilance sur les troubles de la déglutition (toux, voix mouillée). Ne jamais alimenter un patient somnolent ou trop incliné.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« Pour manger sans danger : ASSIS, à mon RYTHME, sans me PRESSER. »</div>`,
    refs: ["UE 4.1"] },
];

export const qcm = [
  { ueId: "4.1", q: "Les soins de confort et d'hygiène relèvent principalement de :", options: ["Le rôle prescrit médical", "Le rôle propre infirmier", "La seule compétence du médecin", "Une délégation systématique au kinésithérapeute"], correct: 1,
    explication: "Les soins d'hygiène, de confort et de bien-être relèvent du rôle propre infirmier : l'IDE en a l'initiative et la responsabilité (art. R.4311-3 et R.4311-5 du CSP).", ref: "UE 4.1", diff: 1 },

  { ueId: "4.1", q: "Combien de besoins fondamentaux décrit Virginia Henderson ?", options: ["10", "12", "14", "16"], correct: 2,
    explication: "Virginia Henderson a défini 14 besoins fondamentaux servant de cadre conceptuel à l'évaluation de l'indépendance/dépendance de la personne.", ref: "UE 4.1", diff: 1 },

  { ueId: "4.1", q: "Lors d'une toilette, on procède :", options: ["Du plus sale vers le plus propre", "Du plus propre vers le plus sale", "Dans un ordre indifférent", "En commençant toujours par le siège"], correct: 1,
    explication: "On lave toujours du plus propre vers le plus sale afin d'éviter de contaminer les zones propres. La zone génitale et le siège sont nettoyés en dernier.", ref: "UE 4.1", diff: 1 },

  { ueId: "4.1", q: "Qu'est-ce qu'une escarre ?", options: ["Une infection cutanée bactérienne", "Une lésion ischémique liée à une compression prolongée des tissus", "Une réaction allergique cutanée", "Une mycose des plis"], correct: 1,
    explication: "L'escarre est une lésion d'origine ischémique : la compression prolongée entre une saillie osseuse et un plan dur réduit la perfusion et entraîne une nécrose tissulaire.", ref: "UE 4.1", diff: 1 },

  { ueId: "4.1", q: "Quelle échelle est utilisée pour évaluer le risque d'escarre ?", options: ["Échelle de Glasgow", "Échelle de Braden", "Échelle de Doloplus", "Échelle EVA"], correct: 1,
    explication: "L'échelle de Braden (comme celle de Norton) évalue le risque d'escarre. Plus le score est bas, plus le risque est élevé. Glasgow évalue la conscience, EVA et Doloplus évaluent la douleur.", ref: "UE 4.1", diff: 2 },

  { ueId: "4.1", q: "Un érythème (rougeur) qui ne blanchit pas à la pression correspond à une escarre de stade :", options: ["Stade I", "Stade II", "Stade III", "Stade IV"], correct: 0,
    explication: "Le stade I correspond à une rougeur persistante ne blanchissant pas à la pression, avec peau intacte. C'est le premier signe d'alerte.", ref: "UE 4.1", diff: 2 },

  { ueId: "4.1", q: "Une escarre atteignant le muscle, le tendon ou l'os correspond au stade :", options: ["Stade I", "Stade II", "Stade III", "Stade IV"], correct: 3,
    explication: "Le stade IV est le plus profond : atteinte des structures profondes (muscle, tendon, os). Le stade III s'arrête au tissu sous-cutané.", ref: "UE 4.1", diff: 2 },

  { ueId: "4.1", q: "Quel point d'appui est le plus fréquemment concerné par les escarres chez un patient alité sur le dos ?", options: ["Le sacrum", "Le poignet", "Le genou", "La main"], correct: 0,
    explication: "En décubitus dorsal, le sacrum et les talons sont les points d'appui les plus exposés. D'autres zones : occiput, omoplates, coudes.", ref: "UE 4.1", diff: 2 },

  { ueId: "4.1", q: "Quel intervalle est recommandé pour les changements de position dans la prévention des escarres ?", options: ["Toutes les 30 minutes", "Environ toutes les 2 à 3 heures", "Toutes les 8 heures", "Une fois par jour"], correct: 1,
    explication: "Un changement de position régulier, en moyenne toutes les 2 à 3 heures, permet de soulager les points d'appui et de prévenir l'ischémie tissulaire.", ref: "UE 4.1", diff: 1 },

  { ueId: "4.1", q: "Devant une rougeur persistante d'un point d'appui, il faut :", options: ["Masser fortement la zone pour relancer la circulation", "Éviter le massage appuyé et soulager la zone d'appui", "Appliquer un pansement compressif", "Ignorer si le patient ne se plaint pas"], correct: 1,
    explication: "Le massage appuyé d'une rougeur est contre-indiqué car il aggrave les lésions des tissus déjà fragilisés. Il faut supprimer l'appui et surveiller.", ref: "UE 4.1", diff: 2 },

  { ueId: "4.1", q: "Pour prévenir une fausse route lors de l'aide au repas, le patient doit être installé :", options: ["Allongé à plat", "En décubitus latéral", "Assis ou demi-assis", "Tête en arrière"], correct: 2,
    explication: "La position assise ou demi-assise facilite la déglutition et réduit le risque de fausse route. On ne nourrit jamais un patient allongé ou somnolent.", ref: "UE 4.1", diff: 1 },

  { ueId: "4.1", q: "Lors de la toilette, le respect de l'intimité du patient passe notamment par :", options: ["Laisser la porte ouverte pour gagner du temps", "Découvrir tout le corps en une fois", "Fermer la porte, utiliser un paravent et ne découvrir que la zone soignée", "Faire la toilette en présence d'autres patients"], correct: 2,
    explication: "Le respect de la dignité et de la pudeur impose de fermer la porte, d'utiliser un paravent et de ne découvrir que la partie du corps en cours de soin.", ref: "UE 4.1", diff: 1 },

  { ueId: "4.1", q: "Pourquoi sécher soigneusement les plis cutanés après la toilette ?", options: ["Pour parfumer la peau", "Pour prévenir la macération et les mycoses", "Pour accélérer la cicatrisation des plaies", "Cela n'a aucune importance"], correct: 1,
    explication: "L'humidité résiduelle dans les plis (sous-mammaires, inguinaux, interdigitaux) favorise la macération et le développement de mycoses. Le séchage soigneux est essentiel.", ref: "UE 4.1", diff: 1 },

  { ueId: "4.1", q: "Les soins de bouche sont particulièrement indiqués chez :", options: ["Un patient qui mange normalement", "Un patient à jeun, sous oxygène ou dénutri", "Uniquement les enfants", "Uniquement avant une chirurgie"], correct: 1,
    explication: "Le patient à jeun, sous oxygène, dénutri ou en fin de vie présente une sécheresse buccale et un risque infectieux accrus justifiant des soins de bouche réguliers.", ref: "UE 4.1", diff: 2 },

  { ueId: "4.1", q: "Quel est le premier facteur perturbant le sommeil à anticiper chez un patient hospitalisé ?", options: ["La couleur des murs", "La douleur non soulagée", "La présence d'un proche", "Le repas du soir"], correct: 1,
    explication: "La douleur non soulagée est un obstacle majeur au sommeil. Son anticipation et son traitement font partie intégrante des soins de confort.", ref: "UE 4.1", diff: 1 },

  { ueId: "4.1", q: "La température de l'eau recommandée pour une toilette est d'environ :", options: ["20 °C", "37 °C", "45 °C", "50 °C"], correct: 1,
    explication: "Une eau autour de 37 °C (proche de la température corporelle) assure confort et sécurité. Une eau trop chaude expose au risque de brûlure, surtout chez les personnes à sensibilité altérée.", ref: "UE 4.1", diff: 1 },

  { ueId: "4.1", q: "Parmi les facteurs favorisant l'escarre, on retrouve :", options: ["Une bonne mobilité", "La dénutrition et l'incontinence", "Une hydratation optimale", "Une activité physique régulière"], correct: 1,
    explication: "La dénutrition fragilise les tissus et l'incontinence entretient une macération cutanée : ce sont des facteurs de risque majeurs d'escarre, avec l'immobilité.", ref: "UE 4.1", diff: 2 },

  { ueId: "4.1", q: "Pour un patient présentant des troubles de la déglutition, l'IDE adapte :", options: ["La couleur de l'assiette", "La texture des aliments (mixée, hachée, liquide épaissi)", "Uniquement la quantité", "Le moment du repas seulement"], correct: 1,
    explication: "L'adaptation de la texture (hachée, mixée, liquide épaissi) selon les capacités de déglutition réduit le risque de fausse route chez le patient dysphagique.", ref: "UE 4.1", diff: 2 },

  { ueId: "4.1", q: "Au-delà de l'hygiène, la toilette est aussi un temps :", options: ["Sans aucun intérêt relationnel", "Relationnel et d'observation clinique", "Réservé exclusivement aux aides-soignants sans IDE", "Où l'on ne communique pas avec le patient"], correct: 1,
    explication: "La toilette est un moment privilégié de relation et d'observation (état cutané, mobilité, état psychique, douleur), au-delà de sa seule dimension d'hygiène.", ref: "UE 4.1", diff: 1 },

  { ueId: "4.1", q: "Le bien-être au sens de l'OMS recouvre :", options: ["Uniquement l'absence de maladie", "Un état complet physique, mental et social", "Seulement l'état physique", "Seulement l'état psychologique"], correct: 1,
    explication: "Selon l'OMS, la santé/bien-être est un état de complet bien-être physique, mental et social, et pas seulement l'absence de maladie ou d'infirmité.", ref: "UE 4.1", diff: 2 },

  { ueId: "4.1", q: "Quelle mesure aide à la prévention des escarres aux talons ?", options: ["Surélever les talons pour les décharger de l'appui", "Appliquer une source de chaleur directe", "Masser fortement les talons", "Laisser les talons en appui constant sur le matelas"], correct: 0,
    explication: "Décharger les talons (coussin sous les mollets pour les faire flotter) supprime l'appui et prévient l'escarre talonnière, point d'appui très exposé en décubitus dorsal.", ref: "UE 4.1", diff: 3 },

  { ueId: "4.1", q: "Quel signe doit faire suspecter une fausse route pendant le repas ?", options: ["Une toux ou une voix mouillée", "Une bonne reprise d'appétit", "Une coloration rosée des lèvres", "Un repas pris rapidement"], correct: 0,
    explication: "Toux, étouffement, voix mouillée (« voix gargouillante ») ou cyanose pendant le repas évoquent une fausse route : il faut interrompre l'alimentation et installer le patient redressé.", ref: "UE 4.1", diff: 2 },

  { ueId: "4.1", q: "Le cisaillement, facteur d'escarre, correspond à :", options: ["Un frottement simple de la peau sur le drap", "Un glissement des plans tissulaires les uns sur les autres quand le patient glisse dans le lit", "Une compression directe par une saillie osseuse", "Une macération liée à l'humidité"], correct: 1,
    explication: "Le cisaillement résulte du glissement des plans profonds par rapport à la peau (ex. patient en position demi-assise qui glisse), étirant et cisaillant les vaisseaux : c'est un facteur de risque majeur d'escarre, distinct de la friction.", ref: "UE 4.1", diff: 3 },

  { ueId: "4.1", q: "Concernant l'hygiène des mains lors des soins de confort :", options: ["Elle n'est nécessaire qu'avant les soins invasifs", "Une friction hydro-alcoolique est réalisée avant et après chaque soin", "Le port de gants dispense de l'hygiène des mains", "Elle n'est utile qu'en cas de plaie visible"], correct: 1,
    explication: "L'hygiène des mains (friction hydro-alcoolique) s'effectue avant et après chaque contact/soin. Le port de gants ne remplace jamais l'hygiène des mains.", ref: "UE 4.1", diff: 2 },
];

export const flashcards = [
  { ueId: "4.1", recto: "À quel rôle infirmier appartiennent les soins de confort et d'hygiène ?", verso: "Au rôle propre infirmier : l'IDE en a l'initiative et la responsabilité (CSP)." },
  { ueId: "4.1", recto: "Combien de besoins fondamentaux décrit Virginia Henderson ?", verso: "14 besoins fondamentaux." },
  { ueId: "4.1", recto: "Dans quel ordre lave-t-on lors d'une toilette ?", verso: "Du plus propre vers le plus sale ; siège et zone génitale en dernier." },
  { ueId: "4.1", recto: "Définition de l'escarre ?", verso: "Lésion ischémique due à une compression prolongée des tissus entre une saillie osseuse et un plan dur." },
  { ueId: "4.1", recto: "Citez deux échelles d'évaluation du risque d'escarre.", verso: "Échelle de Braden et échelle de Norton." },
  { ueId: "4.1", recto: "À quoi correspond une escarre de stade I ?", verso: "Rougeur (érythème) persistante ne blanchissant pas à la pression, peau intacte." },
  { ueId: "4.1", recto: "À quoi correspond une escarre de stade IV ?", verso: "Atteinte profonde des structures : muscle, tendon, os." },
  { ueId: "4.1", recto: "Quels sont les principaux points d'appui à surveiller en décubitus dorsal ?", verso: "Sacrum, talons, occiput, omoplates, coudes." },
  { ueId: "4.1", recto: "À quelle fréquence changer un patient de position pour prévenir l'escarre ?", verso: "Environ toutes les 2 à 3 heures." },
  { ueId: "4.1", recto: "Que faire devant une rougeur persistante d'un point d'appui ?", verso: "Supprimer l'appui et surveiller ; ne jamais masser fortement la zone." },
  { ueId: "4.1", recto: "Comment installer un patient pour l'aide au repas ?", verso: "Assis ou demi-assis, pour prévenir la fausse route." },
  { ueId: "4.1", recto: "Pourquoi sécher soigneusement les plis après la toilette ?", verso: "Pour prévenir la macération et les mycoses." },
  { ueId: "4.1", recto: "Chez quels patients les soins de bouche sont-ils prioritaires ?", verso: "Patients à jeun, sous oxygène, dénutris ou en fin de vie." },
  { ueId: "4.1", recto: "Quel symptôme faut-il anticiper pour favoriser le sommeil ?", verso: "La douleur : la soulager est essentiel pour un sommeil de qualité." },
  { ueId: "4.1", recto: "Température recommandée de l'eau pour la toilette ?", verso: "Environ 37 °C, proche de la température corporelle." },
  { ueId: "4.1", recto: "Comment adapter l'alimentation d'un patient dysphagique ?", verso: "Adapter la texture : hachée, mixée, liquides épaissis, selon les capacités de déglutition." },
  { ueId: "4.1", recto: "Définition du bien-être selon l'OMS ?", verso: "État complet de bien-être physique, mental et social, pas seulement l'absence de maladie." },
  { ueId: "4.1", recto: "Quels signes évoquent une fausse route pendant le repas ?", verso: "Toux, étouffement, voix mouillée, cyanose : interrompre le repas et redresser le patient." },
  { ueId: "4.1", recto: "Différence entre friction et cisaillement (escarre) ?", verso: "Friction = frottement de la peau sur le support ; cisaillement = glissement des plans profonds (patient qui glisse dans le lit) étirant les vaisseaux." },
  { ueId: "4.1", recto: "Le port de gants dispense-t-il de l'hygiène des mains ?", verso: "Non : friction hydro-alcoolique avant et après chaque soin, le gant ne la remplace pas." },
];
