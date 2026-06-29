// UE 1.2 — Santé publique et économie de la santé (Sciences humaines, S2-S3). Pack de révision.
export const fiches = [
  {
    id: "f_1_2_sante_publique", ueId: "1.2", type: "cours",
    titre: "Santé publique : concepts et indicateurs",
    resume: "Définitions de la santé, déterminants et grands indicateurs épidémiologiques.",
    tags: ["santé publique", "OMS", "indicateurs", "déterminants"],
    html: `
      <h3>Définir la santé</h3>
      <p>Définition de l'<span class="key" data-term="OMS">OMS</span> (1946) : la santé est « un état de complet bien-être physique, mental et social et ne consiste pas seulement en une absence de maladie ou d'infirmité ». C'est une définition large, positive et multidimensionnelle.</p>
      <p>La <span class="key" data-term="santé publique">santé publique</span> est l'ensemble des connaissances et actions organisées par la collectivité visant à protéger, promouvoir et restaurer la santé de la population. Elle raisonne au niveau d'une <strong>population</strong>, pas d'un individu isolé.</p>
      <h3>Les déterminants de santé</h3>
      <ul>
        <li><strong>Biologiques / individuels</strong> : âge, sexe, génétique.</li>
        <li><strong>Comportementaux</strong> : tabac, alcool, alimentation, activité physique.</li>
        <li><strong>Environnementaux</strong> : logement, travail, pollution, eau.</li>
        <li><strong>Socio-économiques</strong> : revenu, éducation, emploi (gradient social de santé).</li>
        <li><strong>Système de soins</strong> : accès, qualité, prévention.</li>
      </ul>
      <div class="callout"><div class="callout-t">À retenir</div>La santé n'est pas qu'une affaire de soins : les <strong>déterminants sociaux</strong> pèsent davantage que le système de soins lui-même sur l'état de santé des populations.</div>
      <h3>Indicateurs clés</h3>
      <table class="tbl">
        <tr><th>Indicateur</th><th>Sens</th></tr>
        <tr><td>Espérance de vie</td><td>Durée de vie moyenne à la naissance</td></tr>
        <tr><td>Mortalité infantile</td><td>Décès avant 1 an / 1000 naissances vivantes (indicateur de développement)</td></tr>
        <tr><td>Mortalité / létalité</td><td>Décès dans une population / décès parmi les malades</td></tr>
        <tr><td>Espérance de vie sans incapacité</td><td>Années vécues en bonne santé</td></tr>
      </table>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« BCES » pour les déterminants : <strong>B</strong>iologiques, <strong>C</strong>omportementaux, <strong>E</strong>nvironnementaux, <strong>S</strong>ocio-économiques.</div>
    `,
    refs: ["UE 1.2"],
  },
  {
    id: "f_1_2_epidemiologie", ueId: "1.2", type: "cours",
    titre: "Épidémiologie : prévalence, incidence et études",
    resume: "Mesures de fréquence, types d'études et notions de causalité.",
    tags: ["épidémiologie", "prévalence", "incidence", "études"],
    html: `
      <h3>Mesurer la maladie</h3>
      <ul>
        <li><span class="key" data-term="incidence">Incidence</span> : nombre de <strong>nouveaux</strong> cas survenant dans une population sur une période donnée. Elle mesure le risque d'apparition.</li>
        <li><span class="key" data-term="prévalence">Prévalence</span> : nombre <strong>total</strong> de cas (anciens + nouveaux) à un instant donné. Elle mesure le poids de la maladie.</li>
      </ul>
      <div class="callout"><div class="callout-t">Piège classique</div>Une maladie chronique de longue durée (ex. diabète) a une prévalence élevée même si son incidence est faible. L'incidence compte le « flux », la prévalence le « stock ».</div>
      <h3>Types d'enquêtes</h3>
      <table class="tbl">
        <tr><th>Type</th><th>Principe</th></tr>
        <tr><td>Descriptive</td><td>Décrit la fréquence et la répartition (temps, lieu, personne)</td></tr>
        <tr><td>Transversale</td><td>Photographie à un instant T (mesure la prévalence)</td></tr>
        <tr><td>Cas-témoins</td><td>Compare malades et non-malades, regard rétrospectif sur l'exposition</td></tr>
        <tr><td>Cohorte</td><td>Suit des exposés/non-exposés dans le temps (mesure l'incidence)</td></tr>
        <tr><td>Essai contrôlé randomisé</td><td>Étude expérimentale, plus haut niveau de preuve</td></tr>
      </table>
      <h3>Notions associées</h3>
      <p>Une <strong>épidémie</strong> est une augmentation inhabituelle du nombre de cas dans une population sur un temps donné ; une <strong>endémie</strong> est la présence habituelle (permanente) d'une maladie dans une zone ; une <strong>pandémie</strong> est une épidémie étendue à plusieurs continents.</p>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>In<strong>C</strong>idence = <strong>C</strong>réation de nouveaux cas ; <strong>P</strong>révalence = <strong>P</strong>opulation totale de malades.</div>
    `,
    refs: ["UE 1.2"],
  },
  {
    id: "f_1_2_prevention", ueId: "1.2", type: "cours",
    titre: "Prévention, promotion et éducation pour la santé",
    resume: "Les niveaux de prévention, la promotion de la santé et le dépistage.",
    tags: ["prévention", "promotion", "dépistage", "Ottawa"],
    html: `
      <h3>Les niveaux de prévention</h3>
      <table class="tbl">
        <tr><th>Niveau</th><th>Objectif</th><th>Exemple</th></tr>
        <tr><td>Primaire</td><td>Éviter l'apparition de la maladie</td><td>Vaccination, lutte anti-tabac</td></tr>
        <tr><td>Secondaire</td><td>Dépister tôt, limiter l'évolution</td><td>Dépistage du cancer du sein</td></tr>
        <tr><td>Tertiaire</td><td>Limiter complications et rechutes</td><td>Rééducation post-AVC, éducation thérapeutique</td></tr>
        <tr><td>Quaternaire</td><td>Éviter le surdiagnostic et la surmédicalisation</td><td>Limiter les examens inutiles</td></tr>
      </table>
      <h3>Promotion de la santé</h3>
      <p>La <span class="key" data-term="charte d'Ottawa">Charte d'Ottawa</span> (OMS, 1986) définit la <strong>promotion de la santé</strong> comme le processus qui confère aux populations les moyens d'assurer un plus grand contrôle sur leur propre santé. Elle agit en amont, sur les déterminants.</p>
      <div class="callout"><div class="callout-t">À retenir</div>L'<strong>éducation pour la santé</strong> vise la population générale (comportements) ; l'<strong>éducation thérapeutique du patient (ETP)</strong> s'adresse aux malades chroniques pour les rendre acteurs de leur prise en charge.</div>
      <h3>Le dépistage</h3>
      <p>Détecter une maladie chez des personnes apparemment saines. Un bon test de dépistage doit être <strong>sensible</strong> (peu de faux négatifs) et la maladie doit être fréquente, grave, traitable et détectable à un stade précoce.</p>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Prévention : <strong>1</strong> = avant (éviter), <strong>2</strong> = pendant (dépister tôt), <strong>3</strong> = après (limiter séquelles).</div>
    `,
    refs: ["UE 1.2"],
  },
  {
    id: "f_1_2_economie_sante", ueId: "1.2", type: "cours",
    titre: "Économie et organisation du système de santé",
    resume: "Financement de la Sécurité sociale, acteurs et organisation du système français.",
    tags: ["économie", "Sécurité sociale", "financement", "organisation"],
    html: `
      <h3>Le système de soins français</h3>
      <p>Le système français repose sur la <span class="key" data-term="Sécurité sociale">Sécurité sociale</span>, créée en <strong>1945</strong>, fondée sur la solidarité : « chacun cotise selon ses moyens et reçoit selon ses besoins ». Elle comporte plusieurs branches : maladie, famille, vieillesse, accidents du travail / maladies professionnelles, et autonomie.</p>
      <h3>Financement</h3>
      <ul>
        <li><strong>Cotisations sociales</strong> (sur les salaires).</li>
        <li><strong>CSG / CRDS</strong> : prélèvements sur l'ensemble des revenus.</li>
        <li>L'<span class="key" data-term="ONDAM">ONDAM</span> (Objectif National des Dépenses d'Assurance Maladie) est voté chaque année par le Parlement dans la loi de financement de la Sécurité sociale (LFSS).</li>
      </ul>
      <h3>La couverture du risque</h3>
      <p>L'Assurance maladie prend en charge une partie des dépenses ; le reste (<strong>ticket modérateur</strong>) peut être couvert par une <strong>complémentaire santé (mutuelle)</strong>. La <span class="key" data-term="CSS">Complémentaire santé solidaire (CSS)</span> aide les plus modestes ; les affections de longue durée (<strong>ALD</strong>) sont prises en charge à 100 %.</p>
      <h3>Acteurs et pilotage</h3>
      <table class="tbl">
        <tr><th>Acteur</th><th>Rôle</th></tr>
        <tr><td>Ministère de la Santé</td><td>Politique nationale</td></tr>
        <tr><td>ARS</td><td>Pilotage régional de la santé et de l'offre de soins</td></tr>
        <tr><td>CPAM</td><td>Versement des remboursements (Assurance maladie)</td></tr>
        <tr><td>HAS</td><td>Recommandations, évaluation, qualité</td></tr>
        <tr><td>Santé publique France</td><td>Veille, surveillance, prévention</td></tr>
      </table>
      <div class="callout"><div class="callout-t">À retenir</div>La maîtrise des dépenses de santé cherche un équilibre entre <strong>accès aux soins</strong>, <strong>qualité</strong> et <strong>soutenabilité financière</strong>.</div>
    `,
    refs: ["UE 1.2"],
  },
];

export const qcm = [
  { ueId: "1.2", q: "Quelle est la définition de la santé selon l'OMS (1946) ?", options: ["L'absence de maladie", "Un état de complet bien-être physique, mental et social", "La capacité à travailler", "Un équilibre purement physique"], correct: 1,
    explication: "L'OMS définit la santé comme « un état de complet bien-être physique, mental et social et ne consiste pas seulement en une absence de maladie ou d'infirmité ». C'est une définition positive et multidimensionnelle.", ref: "UE 1.2", diff: 1 },
  { ueId: "1.2", q: "L'incidence d'une maladie correspond à :", options: ["Le nombre total de cas à un instant donné", "Le nombre de nouveaux cas sur une période", "Le nombre de décès parmi les malades", "La proportion de guérisons"], correct: 1,
    explication: "L'incidence mesure les NOUVEAUX cas survenant dans une population sur une période donnée (le flux). La prévalence, elle, compte le nombre total de cas (le stock).", ref: "UE 1.2", diff: 1 },
  { ueId: "1.2", q: "La prévalence d'une maladie correspond à :", options: ["Le nombre de nouveaux cas", "Le risque de décès", "Le nombre total de cas existants à un instant donné", "Le taux de guérison"], correct: 2,
    explication: "La prévalence est le nombre total de cas (anciens et nouveaux) présents dans une population à un moment donné. Elle reflète le poids de la maladie.", ref: "UE 1.2", diff: 1 },
  { ueId: "1.2", q: "Une maladie chronique de longue durée tend à avoir :", options: ["Une faible prévalence", "Une prévalence élevée malgré une incidence parfois faible", "Une incidence toujours élevée", "Aucune prévalence mesurable"], correct: 1,
    explication: "Comme les cas durent longtemps, ils s'accumulent : la prévalence augmente même quand le nombre de nouveaux cas (incidence) reste modéré.", ref: "UE 1.2", diff: 2 },
  { ueId: "1.2", q: "La prévention primaire vise à :", options: ["Dépister précocement une maladie", "Éviter l'apparition de la maladie", "Limiter les complications", "Éviter le surdiagnostic"], correct: 1,
    explication: "La prévention primaire agit AVANT la maladie pour empêcher sa survenue (vaccination, lutte anti-tabac). Le dépistage relève du secondaire, la limitation des séquelles du tertiaire.", ref: "UE 1.2", diff: 1 },
  { ueId: "1.2", q: "Le dépistage organisé du cancer du sein relève de la prévention :", options: ["Primaire", "Secondaire", "Tertiaire", "Quaternaire"], correct: 1,
    explication: "Le dépistage cherche à détecter tôt une maladie chez des personnes asymptomatiques : c'est de la prévention secondaire.", ref: "UE 1.2", diff: 1 },
  { ueId: "1.2", q: "La rééducation après un AVC et l'éducation thérapeutique relèvent de la prévention :", options: ["Primaire", "Secondaire", "Tertiaire", "Quaternaire"], correct: 2,
    explication: "La prévention tertiaire intervient après l'installation de la maladie pour limiter les complications, les rechutes et les séquelles.", ref: "UE 1.2", diff: 2 },
  { ueId: "1.2", q: "En quelle année la Sécurité sociale a-t-elle été créée en France ?", options: ["1936", "1945", "1958", "1968"], correct: 1,
    explication: "La Sécurité sociale française a été créée en 1945, dans l'esprit du programme du Conseil national de la Résistance, sur le principe de solidarité.", ref: "UE 1.2", diff: 1 },
  { ueId: "1.2", q: "Que signifie l'ONDAM ?", options: ["Organisme National des Dépenses Médicales", "Objectif National des Dépenses d'Assurance Maladie", "Office National de l'Aide Médicale", "Observatoire National des Affections"], correct: 1,
    explication: "L'ONDAM (Objectif National des Dépenses d'Assurance Maladie) est voté chaque année par le Parlement dans la loi de financement de la Sécurité sociale (LFSS) pour encadrer les dépenses de santé.", ref: "UE 1.2", diff: 2 },
  { ueId: "1.2", q: "La Charte d'Ottawa (1986) concerne :", options: ["Le financement des hôpitaux", "La promotion de la santé", "La formation des infirmiers", "Les droits du patient"], correct: 1,
    explication: "La Charte d'Ottawa de l'OMS (1986) est le texte fondateur de la promotion de la santé : donner aux populations les moyens d'un plus grand contrôle sur leur santé.", ref: "UE 1.2", diff: 2 },
  { ueId: "1.2", q: "Quel acteur assure le pilotage régional de la politique de santé ?", options: ["La CPAM", "L'ARS", "La HAS", "Le ministère de la Santé"], correct: 1,
    explication: "L'ARS (Agence Régionale de Santé) pilote au niveau régional la santé et l'organisation de l'offre de soins. La CPAM gère les remboursements, la HAS la qualité et l'évaluation.", ref: "UE 1.2", diff: 2 },
  { ueId: "1.2", q: "La mortalité infantile mesure les décès survenant :", options: ["Avant 28 jours de vie", "Avant 1 an de vie", "Avant 5 ans de vie", "Pendant la grossesse"], correct: 1,
    explication: "La mortalité infantile correspond aux décès survenant avant l'âge de 1 an, rapportés à 1000 naissances vivantes. C'est un indicateur sensible du niveau de développement et du système de soins.", ref: "UE 1.2", diff: 2 },
  { ueId: "1.2", q: "Une enquête de cohorte permet surtout de mesurer :", options: ["La prévalence", "L'incidence", "La létalité immédiate", "Le coût des soins"], correct: 1,
    explication: "L'étude de cohorte suit dans le temps des sujets exposés et non exposés pour observer la survenue de nouveaux cas : elle mesure donc l'incidence.", ref: "UE 1.2", diff: 3 },
  { ueId: "1.2", q: "Une enquête transversale permet surtout de mesurer :", options: ["L'incidence", "La prévalence", "Le risque relatif sur 10 ans", "La survie"], correct: 1,
    explication: "L'enquête transversale est une photographie à un instant donné : elle est adaptée à la mesure de la prévalence.", ref: "UE 1.2", diff: 3 },
  { ueId: "1.2", q: "Le ticket modérateur correspond à :", options: ["La part remboursée par l'Assurance maladie", "La part restant à la charge de l'assuré (ou de sa mutuelle)", "Un impôt sur la santé", "Le forfait journalier hospitalier uniquement"], correct: 1,
    explication: "Le ticket modérateur est la part des dépenses de santé qui n'est pas remboursée par l'Assurance maladie ; elle peut être prise en charge par une complémentaire santé (mutuelle).", ref: "UE 1.2", diff: 2 },
  { ueId: "1.2", q: "Les déterminants sociaux de la santé incluent notamment :", options: ["Uniquement la génétique", "Le revenu, l'éducation et l'emploi", "Seulement l'accès aux médicaments", "La seule volonté individuelle"], correct: 1,
    explication: "Les déterminants socio-économiques (revenu, niveau d'éducation, emploi, logement) influencent fortement l'état de santé : c'est le gradient social de santé.", ref: "UE 1.2", diff: 1 },
  { ueId: "1.2", q: "Une affection de longue durée (ALD) est :", options: ["Remboursée à 50 %", "Prise en charge à 100 % par l'Assurance maladie pour les soins liés", "Non remboursable", "Réservée aux plus de 65 ans"], correct: 1,
    explication: "Les ALD (ex. diabète, cancer, insuffisance cardiaque) bénéficient d'une prise en charge à 100 % du tarif de la Sécurité sociale pour les soins liés à la pathologie.", ref: "UE 1.2", diff: 2 },
  { ueId: "1.2", q: "L'éducation thérapeutique du patient (ETP) s'adresse principalement :", options: ["À la population générale en bonne santé", "Aux patients atteints de maladie chronique", "Aux enfants scolarisés uniquement", "Aux professionnels de santé"], correct: 1,
    explication: "L'ETP vise à rendre le patient chronique acteur de sa prise en charge (acquérir des compétences d'auto-soins et d'adaptation). Elle se distingue de l'éducation pour la santé, plus générale.", ref: "UE 1.2", diff: 2 },
  { ueId: "1.2", q: "Une pandémie se définit comme :", options: ["Une maladie présente en permanence dans une région", "Une épidémie étendue à plusieurs continents", "Un cas isolé", "Une maladie non transmissible"], correct: 1,
    explication: "Une pandémie est une épidémie qui se propage à l'échelle de plusieurs continents ou du monde entier. L'endémie désigne une présence habituelle dans une zone donnée.", ref: "UE 1.2", diff: 2 },
  { ueId: "1.2", q: "Quel financement repose sur l'ensemble des revenus et pas seulement les salaires ?", options: ["Les cotisations sociales", "La CSG", "Le ticket modérateur", "Le forfait hospitalier"], correct: 1,
    explication: "La CSG (Contribution Sociale Généralisée) est prélevée sur l'ensemble des revenus (travail, capital, remplacement), contrairement aux cotisations assises sur les seuls salaires.", ref: "UE 1.2", diff: 3 },
  { ueId: "1.2", q: "Un bon test de dépistage doit avant tout être :", options: ["Peu coûteux uniquement", "Très sensible pour limiter les faux négatifs", "Réservé aux malades connus", "Réalisé une seule fois dans la vie"], correct: 1,
    explication: "Un test de dépistage doit être sensible afin de ne pas manquer les vrais malades (peu de faux négatifs). Il s'applique à des personnes apparemment saines, pour une maladie fréquente, grave et traitable.", ref: "UE 1.2", diff: 3 },
  { ueId: "1.2", q: "L'essai contrôlé randomisé est :", options: ["Une étude descriptive de faible niveau de preuve", "L'étude expérimentale au plus haut niveau de preuve", "Une enquête d'opinion", "Une étude rétrospective"], correct: 1,
    explication: "L'essai contrôlé randomisé répartit les sujets par tirage au sort entre groupes ; il offre le plus haut niveau de preuve scientifique pour évaluer un traitement ou une intervention.", ref: "UE 1.2", diff: 3 },
];

export const flashcards = [
  { ueId: "1.2", recto: "Définition de la santé selon l'OMS ?", verso: "État de complet bien-être physique, mental et social, et pas seulement absence de maladie ou d'infirmité." },
  { ueId: "1.2", recto: "Différence incidence / prévalence ?", verso: "Incidence = nouveaux cas sur une période (flux). Prévalence = nombre total de cas à un instant donné (stock)." },
  { ueId: "1.2", recto: "Les 3 niveaux principaux de prévention ?", verso: "Primaire (éviter la maladie), secondaire (dépister tôt), tertiaire (limiter complications et séquelles)." },
  { ueId: "1.2", recto: "À quoi sert le dépistage et de quel niveau de prévention relève-t-il ?", verso: "Détecter une maladie chez des personnes asymptomatiques ; prévention secondaire." },
  { ueId: "1.2", recto: "Année de création de la Sécurité sociale française ?", verso: "1945, sur le principe de solidarité." },
  { ueId: "1.2", recto: "Que signifie ONDAM ?", verso: "Objectif National des Dépenses d'Assurance Maladie, voté chaque année par le Parlement (LFSS)." },
  { ueId: "1.2", recto: "Que définit la Charte d'Ottawa (1986) ?", verso: "La promotion de la santé : donner aux populations les moyens d'un plus grand contrôle sur leur santé." },
  { ueId: "1.2", recto: "Rôle de l'ARS ?", verso: "Agence Régionale de Santé : pilotage régional de la politique de santé et de l'offre de soins." },
  { ueId: "1.2", recto: "Qu'est-ce que le ticket modérateur ?", verso: "Part des dépenses non remboursée par l'Assurance maladie, souvent prise en charge par la mutuelle." },
  { ueId: "1.2", recto: "Quelles catégories de déterminants de santé ?", verso: "Biologiques, comportementaux, environnementaux, socio-économiques, et système de soins." },
  { ueId: "1.2", recto: "Qu'est-ce qu'une ALD ?", verso: "Affection de longue durée : prise en charge à 100 % par l'Assurance maladie pour les soins liés à la pathologie." },
  { ueId: "1.2", recto: "Quelle étude mesure l'incidence ?", verso: "L'étude de cohorte (suivi dans le temps d'exposés et non-exposés)." },
  { ueId: "1.2", recto: "Quelle étude mesure la prévalence ?", verso: "L'étude transversale (photographie à un instant donné)." },
  { ueId: "1.2", recto: "Différence endémie / épidémie / pandémie ?", verso: "Endémie = présence habituelle (permanente) dans une zone ; épidémie = augmentation inhabituelle des cas sur un temps donné ; pandémie = épidémie étendue à plusieurs continents." },
  { ueId: "1.2", recto: "Différence éducation pour la santé / ETP ?", verso: "Éducation pour la santé = population générale (comportements) ; ETP = patients chroniques rendus acteurs de leur prise en charge." },
  { ueId: "1.2", recto: "Que mesure la mortalité infantile ?", verso: "Décès avant 1 an pour 1000 naissances vivantes ; indicateur de développement et de qualité du système de soins." },
  { ueId: "1.2", recto: "Quel est le niveau de preuve le plus élevé en épidémiologie ?", verso: "L'essai contrôlé randomisé (étude expérimentale avec tirage au sort)." },
];
