export const fiches = [
  { id: "fx_ue_1_2_plus_determinants", ueId: "1.2", type: "cours",
    titre: "Déterminants de santé et niveaux de prévention",
    resume: "Comprendre ce qui façonne la santé des populations et structurer la prévention.",
    tags: ["déterminants", "prévention", "santé publique"],
    html: `<p>La <span class="key" data-term="santé">santé</span> ne se résume pas à l'absence de maladie. L'<strong>OMS (1946)</strong> la définit comme « un état de complet bien-être physique, mental et social ». Cette vision élargie fonde l'action de santé publique sur les <span class="key" data-term="déterminants de santé">déterminants de santé</span>.</p>
<h3>Les déterminants de santé</h3>
<p>Ce sont les facteurs qui influencent l'état de santé d'un individu ou d'une population. On les classe classiquement en quatre grandes catégories.</p>
<table class="tbl">
<tr><th>Catégorie</th><th>Exemples</th></tr>
<tr><td>Biologiques / génétiques</td><td>Âge, sexe, hérédité, terrain</td></tr>
<tr><td>Liés au mode de vie</td><td>Tabac, alcool, alimentation, activité physique, sommeil</td></tr>
<tr><td>Environnementaux</td><td>Logement, qualité de l'air et de l'eau, conditions de travail</td></tr>
<tr><td>Socio-économiques</td><td>Revenu, niveau d'éducation, emploi, accès aux soins</td></tr>
</table>
<div class="callout"><div class="callout-t">Gradient social de santé</div>Plus la position sociale est défavorable, plus l'état de santé tend à se dégrader. Les déterminants <strong>socio-économiques</strong> sont considérés comme les plus structurants : on parle de déterminants « en amont ».</div>
<h3>Les trois niveaux de prévention</h3>
<p>La classification de <strong>Leavell et Clark</strong> distingue trois niveaux selon le moment d'intervention dans l'histoire de la maladie.</p>
<ul>
<li><strong>Prévention primaire</strong> : agir <em>avant</em> la maladie pour réduire son apparition (incidence). Ex. : vaccination, lutte anti-tabac, éducation nutritionnelle.</li>
<li><strong>Prévention secondaire</strong> : dépister et traiter <em>précocement</em> pour limiter l'évolution (prévalence). Ex. : dépistage du cancer du col, du sein, frottis, glycémie.</li>
<li><strong>Prévention tertiaire</strong> : limiter les <em>complications, séquelles et récidives</em> et favoriser la réinsertion. Ex. : rééducation post-AVC, éducation thérapeutique du diabétique.</li>
</ul>
<div class="callout"><div class="callout-t">Prévention quaternaire</div>Concept plus récent : protéger le patient d'une <strong>médicalisation excessive</strong> (sur-diagnostic, sur-traitement) et de leurs effets délétères.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>« 1 avant, 2 dépiste, 3 répare »</strong> — primaire = éviter, secondaire = détecter tôt, tertiaire = limiter les dégâts.</div>
<h3>Promotion de la santé</h3>
<p>La <span class="key" data-term="charte d'Ottawa">charte d'Ottawa (1986)</span> définit la <strong>promotion de la santé</strong> comme le processus qui confère aux populations les moyens d'améliorer leur propre santé. Elle dépasse la prévention : elle vise à rendre les individus <strong>acteurs</strong> de leur santé (empowerment).</p>`,
    refs: ["OMS, Constitution 1946", "Charte d'Ottawa 1986", "Référentiel IFSI UE 1.2"] },

  { id: "fx_ue_1_2_plus_systeme", ueId: "1.2", type: "cours",
    titre: "Le système de santé français : organisation et financement",
    resume: "Acteurs, niveaux d'organisation et financement du système de santé.",
    tags: ["système de santé", "ARS", "sécurité sociale"],
    html: `<p>Le <span class="key" data-term="système de santé">système de santé</span> français repose sur un principe de <strong>solidarité nationale</strong> : chacun cotise selon ses moyens et reçoit selon ses besoins.</p>
<h3>Les niveaux d'organisation</h3>
<ul>
<li><strong>National</strong> : le <strong>Ministère de la Santé</strong> définit la politique de santé ; des agences spécialisées appuient l'État (HAS, Santé publique France, ANSM).</li>
<li><strong>Régional</strong> : les <span class="key" data-term="ARS">Agences Régionales de Santé (ARS)</span>, créées par la loi HPST de 2009, pilotent l'offre de soins, la prévention et le médico-social en région.</li>
<li><strong>Local</strong> : établissements de santé, professionnels libéraux, structures médico-sociales.</li>
</ul>
<div class="callout"><div class="callout-t">Quelques agences clés</div><strong>HAS</strong> : recommandations de bonnes pratiques, certification. <strong>ANSM</strong> : sécurité des médicaments et dispositifs. <strong>Santé publique France</strong> : veille et surveillance épidémiologique.</div>
<h3>Le financement : la Sécurité sociale</h3>
<p>La <span class="key" data-term="Sécurité sociale">Sécurité sociale</span>, créée en <strong>1945</strong>, comporte plusieurs branches dont la branche <strong>maladie</strong> (Assurance maladie / CPAM). Le financement provient des <strong>cotisations sociales</strong> et de la <strong>CSG</strong> (contribution sociale généralisée).</p>
<table class="tbl">
<tr><th>Notion</th><th>Définition</th></tr>
<tr><td>Ticket modérateur</td><td>Part des dépenses qui reste à la charge de l'assuré après remboursement</td></tr>
<tr><td>ALD</td><td>Affection de longue durée : prise en charge à 100% pour certaines pathologies</td></tr>
<tr><td>Mutuelle / complémentaire</td><td>Couvre tout ou partie du ticket modérateur</td></tr>
<tr><td>CSS</td><td>Complémentaire santé solidaire (accès aux soins des plus modestes)</td></tr>
</table>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>« ARS = Agence qui Régule la Santé en région »</strong> — pilotage régional unique pour soins + prévention + médico-social.</div>
<h3>Loi de santé publique</h3>
<p>La <strong>loi de santé publique de 2004</strong> a posé les objectifs quantifiés de santé. Les lois successives (HPST 2009, loi de modernisation de 2016, loi OTSS 2019) ont renforcé l'organisation territoriale et la prévention.</p>`,
    refs: ["Loi HPST 2009", "Loi de santé publique 2004", "Référentiel IFSI UE 1.2"] },

  { id: "fx_ue_1_2_plus_epidemio", ueId: "1.2", type: "cours",
    titre: "Indicateurs épidémiologiques et de santé publique",
    resume: "Mesurer la santé d'une population : incidence, prévalence, mortalité.",
    tags: ["épidémiologie", "indicateurs", "mortalité"],
    html: `<p>L'<span class="key" data-term="épidémiologie">épidémiologie</span> est l'étude de la répartition et des déterminants des problèmes de santé dans les populations. Elle fournit les indicateurs qui guident l'action de santé publique.</p>
<h3>Indicateurs de morbidité</h3>
<ul>
<li><span class="key" data-term="incidence">Incidence</span> : nombre de <strong>nouveaux cas</strong> d'une maladie survenant dans une population pendant une période donnée. Elle mesure le <em>risque d'apparition</em>.</li>
<li><span class="key" data-term="prévalence">Prévalence</span> : nombre <strong>total de cas</strong> (anciens + nouveaux) à un instant donné. Elle mesure le <em>poids</em> de la maladie.</li>
</ul>
<div class="callout"><div class="callout-t">Ne pas confondre</div>L'<strong>incidence</strong> compte les cas <em>nouveaux</em> (flux) ; la <strong>prévalence</strong> compte <em>tous</em> les cas présents (stock). Une maladie chronique a une forte prévalence même si son incidence est faible.</div>
<h3>Indicateurs de mortalité</h3>
<table class="tbl">
<tr><th>Indicateur</th><th>Signification</th></tr>
<tr><td>Taux de mortalité</td><td>Nombre de décès rapporté à la population</td></tr>
<tr><td>Mortalité infantile</td><td>Décès avant 1 an / naissances vivantes (indicateur de développement)</td></tr>
<tr><td>Létalité</td><td>Proportion de décès parmi les personnes atteintes de la maladie</td></tr>
<tr><td>Espérance de vie</td><td>Durée moyenne de vie d'une génération</td></tr>
</table>
<h3>Types d'études</h3>
<ul>
<li><strong>Descriptives</strong> : décrivent (qui, où, quand). Ex. : enquêtes de prévalence.</li>
<li><strong>Analytiques</strong> : recherchent des liens de causalité (cohortes, cas-témoins).</li>
<li><strong>Interventionnelles</strong> : essais cliniques (évaluent un traitement).</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>« Incidence = Image instantanée des entrées, Prévalence = Population totale présente »</strong>.</div>
<div class="callout"><div class="callout-t">Sensibilité / spécificité d'un test</div><strong>Sensibilité</strong> : capacité à détecter les vrais malades. <strong>Spécificité</strong> : capacité à identifier les vrais non-malades. Un bon test de dépistage privilégie la sensibilité.</div>`,
    refs: ["Santé publique France", "Référentiel IFSI UE 1.2", "Méthodologie épidémiologique"] },
];

export const qcm = [
  { ueId: "1.2", q: "Selon l'OMS (1946), la santé est définie comme :", options: ["L'absence de maladie", "Un état de complet bien-être physique, mental et social", "La capacité à travailler", "L'équilibre psychologique seul"], correct: 1,
    explication: "La définition de l'OMS de 1946 est globale : « un état de complet bien-être physique, mental et social, et ne consistant pas seulement en une absence de maladie ou d'infirmité ».", ref: "OMS 1946", diff: 1 },

  { ueId: "1.2", q: "La vaccination relève de quel niveau de prévention ?", options: ["Primaire", "Secondaire", "Tertiaire", "Quaternaire"], correct: 0,
    explication: "La vaccination agit avant l'apparition de la maladie pour empêcher sa survenue : c'est de la prévention primaire, qui vise à réduire l'incidence.", ref: "Leavell et Clark", diff: 1 },

  { ueId: "1.2", q: "Le dépistage du cancer du sein par mammographie est une mesure de prévention :", options: ["Primaire", "Secondaire", "Tertiaire", "Quaternaire"], correct: 1,
    explication: "Le dépistage vise à détecter précocement une maladie déjà présente mais asymptomatique afin d'en limiter l'évolution : c'est de la prévention secondaire.", ref: "Niveaux de prévention", diff: 1 },

  { ueId: "1.2", q: "La rééducation et l'éducation thérapeutique d'un patient diabétique pour éviter les complications relèvent de la prévention :", options: ["Primaire", "Secondaire", "Tertiaire", "Promotion de la santé"], correct: 2,
    explication: "La prévention tertiaire vise à limiter les complications, séquelles et récidives d'une maladie installée, et à favoriser la réinsertion.", ref: "Niveaux de prévention", diff: 2 },

  { ueId: "1.2", q: "Quel déterminant de santé est considéré comme le plus structurant (« en amont ») ?", options: ["Le terrain génétique", "Les facteurs socio-économiques", "L'âge", "Le sexe"], correct: 1,
    explication: "Les déterminants socio-économiques (revenu, éducation, emploi) sont les plus structurants ; ils expliquent le gradient social de santé.", ref: "Déterminants de santé", diff: 2 },

  { ueId: "1.2", q: "L'incidence d'une maladie correspond :", options: ["Au nombre total de cas existants", "Au nombre de nouveaux cas sur une période", "Au nombre de décès", "À la proportion de guérisons"], correct: 1,
    explication: "L'incidence mesure les nouveaux cas survenant pendant une période donnée : elle reflète le risque d'apparition de la maladie.", ref: "Épidémiologie", diff: 1 },

  { ueId: "1.2", q: "La prévalence d'une maladie correspond :", options: ["Aux nouveaux cas uniquement", "Au nombre total de cas à un instant donné", "Au taux de mortalité", "À la létalité"], correct: 1,
    explication: "La prévalence compte tous les cas présents (anciens et nouveaux) à un moment donné : elle mesure le poids de la maladie dans la population.", ref: "Épidémiologie", diff: 1 },

  { ueId: "1.2", q: "Les Agences Régionales de Santé (ARS) ont été créées par :", options: ["La loi de 1945", "La loi de santé publique de 2004", "La loi HPST de 2009", "La loi de 2016"], correct: 2,
    explication: "Les ARS ont été instituées par la loi Hôpital, Patients, Santé et Territoires (HPST) de 2009. Elles pilotent l'offre de soins, la prévention et le médico-social en région.", ref: "Loi HPST 2009", diff: 2 },

  { ueId: "1.2", q: "La Sécurité sociale française a été créée en :", options: ["1936", "1945", "1958", "1975"], correct: 1,
    explication: "La Sécurité sociale a été créée par les ordonnances de 1945, sur un principe de solidarité nationale.", ref: "Sécurité sociale", diff: 1 },

  { ueId: "1.2", q: "La charte d'Ottawa (1986) concerne :", options: ["Le financement des hôpitaux", "La promotion de la santé", "La vaccination obligatoire", "Le secret professionnel"], correct: 1,
    explication: "La charte d'Ottawa de 1986 définit la promotion de la santé comme le processus conférant aux populations les moyens d'améliorer leur propre santé (empowerment).", ref: "Charte d'Ottawa 1986", diff: 2 },

  { ueId: "1.2", q: "Le « ticket modérateur » désigne :", options: ["La part remboursée par l'Assurance maladie", "La part restant à la charge de l'assuré", "Le forfait hospitalier", "La cotisation patronale"], correct: 1,
    explication: "Le ticket modérateur est la part des dépenses de santé qui reste à la charge de l'assuré après le remboursement de l'Assurance maladie. Une complémentaire peut le couvrir.", ref: "Assurance maladie", diff: 2 },

  { ueId: "1.2", q: "Une ALD (affection de longue durée) ouvre droit :", options: ["À une exonération totale (100%) pour les soins liés", "À un arrêt de travail automatique", "À une hospitalisation gratuite à vie", "À une mutuelle obligatoire"], correct: 0,
    explication: "L'ALD permet une prise en charge à 100% (exonération du ticket modérateur) des soins en rapport avec la pathologie reconnue.", ref: "Assurance maladie", diff: 2 },

  { ueId: "1.2", q: "La sensibilité d'un test de dépistage mesure :", options: ["Sa capacité à identifier les vrais non-malades", "Sa capacité à détecter les vrais malades", "Son coût", "Sa rapidité"], correct: 1,
    explication: "La sensibilité est la capacité d'un test à détecter correctement les personnes réellement malades (vrais positifs). Un test de dépistage privilégie une forte sensibilité.", ref: "Méthodologie", diff: 3 },

  { ueId: "1.2", q: "La spécificité d'un test mesure :", options: ["Sa capacité à détecter les malades", "Sa capacité à identifier les vrais non-malades", "Le nombre de faux positifs absolus", "La prévalence"], correct: 1,
    explication: "La spécificité est la capacité à identifier correctement les personnes non malades (vrais négatifs).", ref: "Méthodologie", diff: 3 },

  { ueId: "1.2", q: "La mortalité infantile mesure les décès :", options: ["Avant l'âge de 5 ans", "Avant l'âge de 1 an", "À la naissance uniquement", "Avant 28 jours"], correct: 1,
    explication: "Le taux de mortalité infantile correspond aux décès d'enfants de moins de 1 an rapportés aux naissances vivantes. C'est un indicateur sensible du niveau de développement.", ref: "Indicateurs de santé", diff: 2 },

  { ueId: "1.2", q: "La létalité d'une maladie désigne :", options: ["Le nombre total de décès dans la population", "La proportion de décès parmi les personnes atteintes", "Le nombre de nouveaux cas", "L'espérance de vie"], correct: 1,
    explication: "La létalité est la proportion de décès parmi les personnes atteintes de la maladie : elle reflète la gravité, à distinguer de la mortalité (rapportée à la population générale).", ref: "Épidémiologie", diff: 3 },

  { ueId: "1.2", q: "Quel organisme est chargé de la veille et de la surveillance épidémiologique en France ?", options: ["La HAS", "L'ANSM", "Santé publique France", "La CPAM"], correct: 2,
    explication: "Santé publique France assure la veille, la surveillance épidémiologique et l'alerte sanitaire. La HAS produit des recommandations, l'ANSM gère la sécurité des médicaments.", ref: "Agences sanitaires", diff: 2 },

  { ueId: "1.2", q: "La HAS (Haute Autorité de Santé) a notamment pour mission :", options: ["Rembourser les soins", "Émettre des recommandations de bonnes pratiques et certifier les établissements", "Surveiller les épidémies", "Gérer les cotisations"], correct: 1,
    explication: "La HAS élabore des recommandations de bonnes pratiques, évalue les produits de santé et certifie les établissements de santé.", ref: "HAS", diff: 2 },

  { ueId: "1.2", q: "Une étude de cohorte est une étude :", options: ["Descriptive", "Analytique", "Interventionnelle randomisée", "Économique"], correct: 1,
    explication: "L'étude de cohorte est une étude analytique : elle suit dans le temps des groupes exposés et non exposés pour rechercher un lien de causalité.", ref: "Méthodologie épidémiologique", diff: 3 },

  { ueId: "1.2", q: "La prévention quaternaire vise à :", options: ["Vacciner les populations", "Dépister précocement", "Protéger le patient d'une médicalisation excessive", "Rééduquer après une maladie"], correct: 2,
    explication: "La prévention quaternaire protège le patient contre le sur-diagnostic et le sur-traitement (médicalisation excessive) et leurs effets délétères.", ref: "Niveaux de prévention", diff: 3 },

  { ueId: "1.2", q: "Le gradient social de santé signifie que :", options: ["Tous les groupes sociaux ont la même santé", "Plus la position sociale est défavorable, plus la santé tend à se dégrader", "Seuls les plus pauvres sont malades", "La génétique explique tout"], correct: 1,
    explication: "Le gradient social de santé décrit la relation continue entre position sociale et état de santé : chaque échelon social inférieur s'accompagne en moyenne d'une santé moins bonne.", ref: "Inégalités sociales de santé", diff: 2 },

  { ueId: "1.2", q: "La Complémentaire santé solidaire (CSS) s'adresse principalement :", options: ["Aux personnes en ALD", "Aux personnes aux ressources modestes pour faciliter l'accès aux soins", "Aux fonctionnaires", "Aux travailleurs indépendants uniquement"], correct: 1,
    explication: "La CSS facilite l'accès aux soins des personnes aux ressources modestes en prenant en charge tout ou partie des dépenses non couvertes par l'Assurance maladie.", ref: "Accès aux soins", diff: 2 },
];

export const flashcards = [
  { ueId: "1.2", recto: "Définition de la santé selon l'OMS (1946) ?", verso: "État de complet bien-être physique, mental et social, ne se limitant pas à l'absence de maladie." },
  { ueId: "1.2", recto: "Prévention primaire ?", verso: "Agir avant la maladie pour empêcher son apparition (ex. vaccination). Réduit l'incidence." },
  { ueId: "1.2", recto: "Prévention secondaire ?", verso: "Dépistage et traitement précoce d'une maladie existante (ex. mammographie)." },
  { ueId: "1.2", recto: "Prévention tertiaire ?", verso: "Limiter complications, séquelles et récidives ; réinsertion (ex. rééducation post-AVC)." },
  { ueId: "1.2", recto: "Différence incidence / prévalence ?", verso: "Incidence = nouveaux cas sur une période ; prévalence = total des cas à un instant donné." },
  { ueId: "1.2", recto: "Que sont les ARS et qui les a créées ?", verso: "Agences Régionales de Santé, créées par la loi HPST de 2009 : pilotage régional des soins, prévention et médico-social." },
  { ueId: "1.2", recto: "Année de création de la Sécurité sociale ?", verso: "1945 (ordonnances), sur un principe de solidarité nationale." },
  { ueId: "1.2", recto: "Que définit la charte d'Ottawa (1986) ?", verso: "La promotion de la santé : donner aux populations les moyens d'améliorer leur propre santé (empowerment)." },
  { ueId: "1.2", recto: "Qu'est-ce que le ticket modérateur ?", verso: "Part des dépenses de santé restant à la charge de l'assuré après remboursement de l'Assurance maladie." },
  { ueId: "1.2", recto: "Qu'apporte une ALD ?", verso: "Affection de longue durée : prise en charge à 100% des soins liés à la pathologie." },
  { ueId: "1.2", recto: "Sensibilité vs spécificité d'un test ?", verso: "Sensibilité = détecter les vrais malades ; spécificité = identifier les vrais non-malades." },
  { ueId: "1.2", recto: "Que mesure la mortalité infantile ?", verso: "Décès d'enfants de moins de 1 an / naissances vivantes ; indicateur de développement." },
  { ueId: "1.2", recto: "Que mesure la létalité ?", verso: "Proportion de décès parmi les personnes atteintes de la maladie (gravité)." },
  { ueId: "1.2", recto: "Rôle de Santé publique France ?", verso: "Veille, surveillance épidémiologique et alerte sanitaire." },
  { ueId: "1.2", recto: "Les quatre catégories de déterminants de santé ?", verso: "Biologiques/génétiques, mode de vie, environnementaux, socio-économiques." },
];
