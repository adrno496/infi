// UE 5.6 — Analyse de la qualité et traitement des données scientifiques (Intégration, S6). Pack seed.
export const fiches = [
  {
    id: "f_5_6_statistiques", ueId: "5.6", type: "cours",
    titre: "Statistiques descriptives — décrire les données",
    resume: "Variables, indicateurs de position et de dispersion pour résumer un échantillon.",
    tags: ["statistiques", "moyenne", "médiane", "écart-type", "variables"],
    html: `
      <h3>Types de variables</h3>
      <ul>
        <li><strong>Qualitative (catégorielle)</strong> : nominale (sexe, groupe sanguin) ou ordinale (échelle de douleur, stade).</li>
        <li><strong>Quantitative (numérique)</strong> : discrète (nombre d'enfants) ou continue (poids, glycémie).</li>
      </ul>
      <h3>Indicateurs de position (tendance centrale)</h3>
      <ul>
        <li><strong>Moyenne</strong> : somme des valeurs / effectif. Sensible aux valeurs extrêmes.</li>
        <li><span class="key" data-term="médiane">Médiane</span> : valeur qui partage la série en deux moitiés égales. Robuste aux valeurs extrêmes.</li>
        <li><strong>Mode</strong> : valeur la plus fréquente.</li>
      </ul>
      <h3>Indicateurs de dispersion</h3>
      <ul>
        <li><strong>Étendue</strong> : valeur max − valeur min.</li>
        <li><strong>Variance</strong> : moyenne des carrés des écarts à la moyenne.</li>
        <li><span class="key" data-term="écart-type">Écart-type</span> : racine carrée de la variance ; dispersion autour de la moyenne, exprimée dans l'unité des données.</li>
      </ul>
      <table class="tbl">
        <tr><th>Type de variable</th><th>Indicateur conseillé</th><th>Graphique</th></tr>
        <tr><td>Qualitative</td><td>Effectifs, pourcentages, mode</td><td>Camembert, barres</td></tr>
        <tr><td>Quantitative</td><td>Moyenne ± écart-type ou médiane</td><td>Histogramme, boîte à moustaches</td></tr>
      </table>
      <div class="callout"><div class="callout-t">En pratique</div>Si la distribution est asymétrique ou comporte des valeurs aberrantes, on préfère la <strong>médiane</strong> à la moyenne.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« Position = OÙ se situe le centre ; Dispersion = COMMENT les valeurs s'étalent. »</div>
    `,
    refs: ["UE 5.6"],
  },
  {
    id: "f_5_6_epidemiologie", ueId: "5.6", type: "cours",
    titre: "Indicateurs épidémiologiques — prévalence et incidence",
    resume: "Mesurer la fréquence d'une maladie et les principaux indicateurs de santé publique.",
    tags: ["épidémiologie", "prévalence", "incidence", "taux", "santé publique"],
    html: `
      <h3>Mesurer la fréquence d'une maladie</h3>
      <ul>
        <li><span class="key" data-term="prévalence">Prévalence</span> : nombre de cas (anciens + nouveaux) présents à un instant donné, rapporté à la population. Photographie « instantanée ».</li>
        <li><span class="key" data-term="incidence">Incidence</span> : nombre de <strong>nouveaux</strong> cas survenus pendant une période donnée. Mesure le risque d'apparition.</li>
      </ul>
      <h3>Autres indicateurs</h3>
      <ul>
        <li><strong>Taux de mortalité</strong> : nombre de décès / population sur une période.</li>
        <li><strong>Taux de létalité</strong> : nombre de décès parmi les malades (gravité de la maladie).</li>
        <li><strong>Morbidité</strong> : fréquence des maladies dans une population.</li>
        <li><strong>Espérance de vie</strong>, <strong>années de vie en bonne santé</strong>.</li>
      </ul>
      <h3>Types d'études épidémiologiques</h3>
      <table class="tbl">
        <tr><th>Étude</th><th>Caractéristique</th></tr>
        <tr><td>Descriptive</td><td>Décrit la répartition (qui, où, quand)</td></tr>
        <tr><td>Cas-témoins</td><td>Rétrospective ; compare malades / non-malades sur l'exposition</td></tr>
        <tr><td>Cohorte</td><td>Prospective ; suit des sujets exposés / non exposés dans le temps</td></tr>
        <tr><td>Essai contrôlé randomisé</td><td>Expérimentale ; niveau de preuve le plus élevé</td></tr>
      </table>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« Prévalence = Présent (stock) ; Incidence = nouveaux cas (flux). »</div>
    `,
    refs: ["UE 5.6"],
  },
  {
    id: "f_5_6_qualite_donnees", ueId: "5.6", type: "cours",
    titre: "Qualité et fiabilité des données scientifiques",
    resume: "Validité, biais, niveaux de preuve et lecture critique d'un article.",
    tags: ["qualité", "biais", "niveau de preuve", "EBN", "lecture critique"],
    html: `
      <h3>Qualité d'une mesure</h3>
      <ul>
        <li><strong>Validité</strong> : la mesure évalue bien ce qu'elle prétend mesurer.</li>
        <li><span class="key" data-term="fiabilité">Fiabilité (reproductibilité)</span> : la mesure donne des résultats stables si on la répète.</li>
        <li><strong>Sensibilité / spécificité</strong> : qualités d'un test diagnostique.</li>
      </ul>
      <h3>Les biais (erreurs systématiques)</h3>
      <ul>
        <li><strong>Biais de sélection</strong> : échantillon non représentatif de la population.</li>
        <li><strong>Biais de mesure (classement)</strong> : recueil imprécis ou orienté des données.</li>
        <li><strong>Biais de confusion</strong> : un facteur tiers fausse le lien observé.</li>
      </ul>
      <h3>Niveaux de preuve (hiérarchie)</h3>
      <ol>
        <li>Méta-analyses et revues systématiques d'essais randomisés (preuve la plus forte).</li>
        <li>Essais contrôlés randomisés.</li>
        <li>Études de cohorte / cas-témoins.</li>
        <li>Avis d'experts, séries de cas (preuve la plus faible).</li>
      </ol>
      <div class="callout"><div class="callout-t">EBN</div>L'<strong>Evidence-Based Nursing</strong> (pratique fondée sur les preuves) croise : données scientifiques + expertise du soignant + préférences du patient.</div>
      <div class="callout danger"><div class="callout-t">Vigilance</div>Une <strong>corrélation n'est pas une causalité</strong> : deux variables peuvent varier ensemble sans lien de cause à effet.</div>
    `,
    refs: ["UE 5.6"],
  },
  {
    id: "f_5_6_demarche_recherche", ueId: "5.6", type: "cours",
    titre: "Démarche de recherche et traitement des données",
    resume: "Étapes d'une recherche, hypothèse, test statistique et seuil de signification.",
    tags: ["recherche", "hypothèse", "p-value", "intervalle de confiance", "méthode"],
    html: `
      <h3>Étapes de la démarche de recherche</h3>
      <ol>
        <li>Question de recherche et revue de la littérature.</li>
        <li>Formulation des <strong>hypothèses</strong> (H0 nulle, H1 alternative).</li>
        <li>Choix de la méthode et de l'échantillon.</li>
        <li>Recueil des données.</li>
        <li>Traitement et analyse statistique.</li>
        <li>Interprétation, conclusion et diffusion des résultats.</li>
      </ol>
      <h3>Test statistique et signification</h3>
      <ul>
        <li>L'<span class="key" data-term="hypothèse nulle">hypothèse nulle (H0)</span> suppose l'absence de différence ou de lien.</li>
        <li>La <span class="key" data-term="p-value">valeur p (p-value)</span> est la probabilité d'observer le résultat si H0 est vraie. Seuil usuel : <strong>p &lt; 0,05</strong> → résultat statistiquement significatif (on rejette H0).</li>
        <li>L'<strong>intervalle de confiance</strong> (souvent à 95 %) est une fourchette estimée à partir de l'échantillon ; plus il est étroit, plus l'estimation est précise.</li>
      </ul>
      <h3>Données qualitatives vs quantitatives en recherche</h3>
      <table class="tbl">
        <tr><th>Approche</th><th>Méthode</th><th>Objectif</th></tr>
        <tr><td>Quantitative</td><td>Questionnaires, mesures chiffrées</td><td>Mesurer, comparer, généraliser</td></tr>
        <tr><td>Qualitative</td><td>Entretiens, observation</td><td>Comprendre le sens, le vécu</td></tr>
      </table>
      <div class="callout"><div class="callout-t">Éthique</div>Tout recueil de données respecte le <strong>consentement éclairé</strong>, l'anonymat, la confidentialité (RGPD) et l'avis d'un comité d'éthique si nécessaire.</div>
    `,
    refs: ["UE 5.6"],
  },
];
export const qcm = [
  { ueId: "5.6", q: "Quel indicateur est le plus robuste face aux valeurs extrêmes ?", options: ["La moyenne", "La médiane", "L'étendue", "La variance"], correct: 1, explication: "La médiane partage la série en deux et n'est pas tirée par les valeurs aberrantes, contrairement à la moyenne.", ref: "UE 5.6", diff: 1 },
  { ueId: "5.6", q: "L'écart-type mesure :", options: ["La valeur centrale", "La dispersion des valeurs autour de la moyenne", "Le nombre de sujets", "La valeur la plus fréquente"], correct: 1, explication: "L'écart-type (racine carrée de la variance) quantifie l'étalement des données autour de la moyenne.", ref: "UE 5.6", diff: 1 },
  { ueId: "5.6", q: "Le groupe sanguin est une variable :", options: ["Quantitative continue", "Quantitative discrète", "Qualitative nominale", "Qualitative ordinale"], correct: 2, explication: "Le groupe sanguin est une catégorie sans ordre : variable qualitative nominale.", ref: "UE 5.6", diff: 1 },
  { ueId: "5.6", q: "Une échelle de douleur de 0 à 10 est une variable :", options: ["Qualitative ordinale", "Qualitative nominale", "Quantitative continue", "Quantitative discrète"], correct: 0, explication: "Les niveaux sont ordonnés mais ce sont des catégories : variable qualitative ordinale.", ref: "UE 5.6", diff: 2 },
  { ueId: "5.6", q: "La prévalence d'une maladie correspond :", options: ["Aux nouveaux cas sur une période", "À tous les cas existants à un moment donné", "Au nombre de décès", "Au risque de contagion"], correct: 1, explication: "La prévalence dénombre l'ensemble des cas présents (anciens et nouveaux) à un instant donné.", ref: "UE 5.6", diff: 1 },
  { ueId: "5.6", q: "L'incidence mesure :", options: ["Le nombre total de malades", "Les nouveaux cas apparus pendant une période", "La gravité de la maladie", "La durée de la maladie"], correct: 1, explication: "L'incidence compte uniquement les nouveaux cas survenus durant la période : c'est une mesure du risque d'apparition.", ref: "UE 5.6", diff: 1 },
  { ueId: "5.6", q: "Le taux de létalité exprime :", options: ["Les décès dans la population générale", "Les décès parmi les personnes atteintes de la maladie", "Le nombre de nouveaux cas", "Le nombre de guérisons"], correct: 1, explication: "La létalité rapporte les décès au nombre de malades : elle reflète la gravité de la maladie.", ref: "UE 5.6", diff: 2 },
  { ueId: "5.6", q: "Quel type d'étude offre le plus haut niveau de preuve ?", options: ["L'avis d'expert", "La série de cas", "L'essai contrôlé randomisé", "L'étude descriptive"], correct: 2, explication: "L'essai contrôlé randomisé (et les méta-analyses qui les regroupent) constitue le niveau de preuve le plus élevé.", ref: "UE 5.6", diff: 2 },
  { ueId: "5.6", q: "Une étude de cohorte est généralement :", options: ["Rétrospective", "Prospective, suivant des sujets exposés et non exposés", "Une simple description", "Un avis d'expert"], correct: 1, explication: "La cohorte suit dans le temps des sujets exposés et non exposés pour observer la survenue des événements : approche prospective.", ref: "UE 5.6", diff: 2 },
  { ueId: "5.6", q: "La fiabilité (reproductibilité) d'une mesure signifie :", options: ["Qu'elle mesure ce qu'elle prétend mesurer", "Qu'elle donne des résultats stables si on la répète", "Qu'elle est rapide", "Qu'elle est peu coûteuse"], correct: 1, explication: "La fiabilité = reproductibilité : mêmes résultats lors de mesures répétées. La validité, elle, concerne le fait de mesurer le bon paramètre.", ref: "UE 5.6", diff: 2 },
  { ueId: "5.6", q: "Un biais de sélection survient quand :", options: ["Le recueil de données est imprécis", "L'échantillon n'est pas représentatif de la population", "Un facteur tiers fausse le lien", "Le test est trop sensible"], correct: 1, explication: "Le biais de sélection vient d'un échantillon non représentatif (recrutement orienté), ce qui limite la généralisation.", ref: "UE 5.6", diff: 2 },
  { ueId: "5.6", q: "Un facteur tiers qui fausse le lien entre deux variables est un biais :", options: ["De sélection", "De mesure", "De confusion", "De publication"], correct: 2, explication: "Le biais de confusion est lié à une variable tierce associée à la fois à l'exposition et à l'événement.", ref: "UE 5.6", diff: 3 },
  { ueId: "5.6", q: "Dans un test statistique, un résultat est dit significatif si :", options: ["p > 0,05", "p < 0,05", "la moyenne est élevée", "l'échantillon est petit"], correct: 1, explication: "Le seuil usuel est p < 0,05 : on rejette alors l'hypothèse nulle, le résultat est statistiquement significatif.", ref: "UE 5.6", diff: 2 },
  { ueId: "5.6", q: "L'hypothèse nulle (H0) postule :", options: ["Une différence importante", "L'absence de différence ou de lien", "Une causalité certaine", "Un biais"], correct: 1, explication: "H0 suppose qu'il n'y a pas de différence/lien ; le test cherche à la rejeter au profit de H1.", ref: "UE 5.6", diff: 2 },
  { ueId: "5.6", q: "Concernant un intervalle de confiance à 95 %, quelle proposition est correcte ?", options: ["Il donne la valeur exacte du paramètre", "C'est une fourchette estimée ; plus il est étroit, plus l'estimation est précise", "Il indique le nombre de sujets de l'étude", "Il remplace la valeur p"], correct: 1, explication: "L'IC à 95 % est une fourchette d'estimation calculée à partir de l'échantillon. Plus il est étroit, plus l'estimation est précise. (Un IC qui inclut la valeur 'pas d'effet' traduit un résultat non significatif.)", ref: "UE 5.6", diff: 3 },
  { ueId: "5.6", q: "« Corrélation n'est pas causalité » signifie :", options: ["Deux variables liées ont forcément un lien de cause à effet", "Deux variables peuvent varier ensemble sans relation causale", "La corrélation est toujours fausse", "La causalité est inutile"], correct: 1, explication: "Une corrélation statistique n'implique pas qu'une variable cause l'autre : un facteur tiers ou le hasard peut l'expliquer.", ref: "UE 5.6", diff: 2 },
  { ueId: "5.6", q: "Pour une variable quantitative continue, le graphique le plus adapté est :", options: ["Le camembert", "L'histogramme", "Le diagramme en barres de catégories", "Le tableau de fréquences nominales"], correct: 1, explication: "L'histogramme représente la distribution d'une variable continue ; le camembert convient aux variables qualitatives.", ref: "UE 5.6", diff: 1 },
  { ueId: "5.6", q: "L'Evidence-Based Nursing (EBN) combine :", options: ["Uniquement les preuves scientifiques", "Preuves scientifiques, expertise du soignant et préférences du patient", "L'avis du seul médecin", "Les habitudes du service"], correct: 1, explication: "L'EBN croise les meilleures données scientifiques, l'expertise clinique et les préférences/valeurs du patient.", ref: "UE 5.6", diff: 2 },
  { ueId: "5.6", q: "Le recueil de données de recherche impose en priorité :", options: ["La rapidité", "Le consentement éclairé et la confidentialité (anonymat, RGPD)", "L'absence de protocole", "La publication immédiate"], correct: 1, explication: "L'éthique de la recherche exige consentement éclairé, anonymat, confidentialité et respect du RGPD.", ref: "UE 5.6", diff: 1 },
  { ueId: "5.6", q: "Une approche qualitative en recherche vise surtout à :", options: ["Mesurer et chiffrer", "Comprendre le sens et le vécu des personnes", "Calculer une moyenne", "Tester une p-value"], correct: 1, explication: "La recherche qualitative (entretiens, observation) explore le sens et l'expérience ; la quantitative mesure et compare.", ref: "UE 5.6", diff: 2 },
  { ueId: "5.6", q: "La validité d'un outil de mesure désigne le fait :", options: ["Qu'il soit reproductible", "Qu'il mesure réellement ce qu'il prétend mesurer", "Qu'il soit rapide", "Qu'il soit gratuit"], correct: 1, explication: "La validité concerne l'adéquation entre l'outil et ce qu'il est censé mesurer, à distinguer de la fiabilité (reproductibilité).", ref: "UE 5.6", diff: 2 },
  { ueId: "5.6", q: "La sensibilité d'un test diagnostique correspond à sa capacité à :", options: ["Détecter les malades (vrais positifs)", "Identifier les non-malades (vrais négatifs)", "Être reproductible", "Réduire le coût"], correct: 0, explication: "La sensibilité est la proportion de malades correctement détectés (vrais positifs). La spécificité, elle, identifie correctement les non-malades (vrais négatifs).", ref: "UE 5.6", diff: 3 },
  { ueId: "5.6", q: "Quel élément distingue l'étude cas-témoins de l'étude de cohorte ?", options: ["La cas-témoins est expérimentale", "La cas-témoins est rétrospective, la cohorte prospective", "La cohorte ne suit aucun sujet", "Elles sont identiques"], correct: 1, explication: "L'étude cas-témoins part de la maladie et remonte vers l'exposition (rétrospective) ; la cohorte part de l'exposition et suit la survenue de la maladie (prospective).", ref: "UE 5.6", diff: 3 },
  { ueId: "5.6", q: "La randomisation dans un essai contrôlé sert principalement à :", options: ["Accélérer l'étude", "Répartir les sujets au hasard pour limiter les biais de confusion", "Augmenter la taille de l'échantillon", "Choisir l'hypothèse"], correct: 1, explication: "Tirer au sort l'attribution des traitements équilibre les facteurs connus et inconnus entre les groupes, limitant les biais de confusion : c'est la force de l'ECR.", ref: "UE 5.6", diff: 3 },
];
export const flashcards = [
  { ueId: "5.6", recto: "Différence prévalence / incidence ?", verso: "Prévalence = tous les cas présents à un instant donné ; incidence = nouveaux cas sur une période." },
  { ueId: "5.6", recto: "Quel indicateur de position est robuste aux valeurs extrêmes ?", verso: "La médiane." },
  { ueId: "5.6", recto: "Que mesure l'écart-type ?", verso: "La dispersion des valeurs autour de la moyenne (racine carrée de la variance)." },
  { ueId: "5.6", recto: "Seuil usuel de significativité d'un test ?", verso: "p < 0,05 : on rejette l'hypothèse nulle (résultat significatif)." },
  { ueId: "5.6", recto: "Que postule l'hypothèse nulle H0 ?", verso: "L'absence de différence ou de lien entre les groupes/variables." },
  { ueId: "5.6", recto: "Niveau de preuve le plus élevé ?", verso: "Méta-analyses et essais contrôlés randomisés." },
  { ueId: "5.6", recto: "Quel type de variable : le groupe sanguin ?", verso: "Qualitative nominale (catégories sans ordre)." },
  { ueId: "5.6", recto: "Différence validité / fiabilité d'une mesure ?", verso: "Validité = mesure le bon paramètre ; fiabilité = résultats reproductibles." },
  { ueId: "5.6", recto: "Qu'est-ce qu'un biais de confusion ?", verso: "Un facteur tiers associé à l'exposition et à l'événement qui fausse le lien observé." },
  { ueId: "5.6", recto: "« Corrélation n'est pas causalité » : que retenir ?", verso: "Deux variables peuvent varier ensemble sans relation de cause à effet." },
  { ueId: "5.6", recto: "Que représente un intervalle de confiance à 95 % ?", verso: "Une fourchette d'estimation du paramètre calculée à partir de l'échantillon : plus elle est étroite, plus l'estimation est précise." },
  { ueId: "5.6", recto: "Étude prospective suivant exposés et non exposés ?", verso: "L'étude de cohorte." },
  { ueId: "5.6", recto: "Les 3 piliers de l'Evidence-Based Nursing ?", verso: "Preuves scientifiques + expertise du soignant + préférences du patient." },
  { ueId: "5.6", recto: "Que désigne le taux de létalité ?", verso: "La proportion de décès parmi les personnes atteintes de la maladie (gravité)." },
  { ueId: "5.6", recto: "Graphique adapté à une variable quantitative continue ?", verso: "L'histogramme." },
  { ueId: "5.6", recto: "Exigences éthiques du recueil de données de recherche ?", verso: "Consentement éclairé, anonymat, confidentialité, respect du RGPD." },
  { ueId: "5.6", recto: "Différence sensibilité / spécificité d'un test ?", verso: "Sensibilité = détecter les malades (vrais positifs) ; spécificité = identifier les non-malades (vrais négatifs)." },
  { ueId: "5.6", recto: "À quoi sert la randomisation dans un essai ?", verso: "Répartir les sujets au hasard pour équilibrer les groupes et limiter les biais de confusion." },
  { ueId: "5.6", recto: "Étude cas-témoins : prospective ou rétrospective ?", verso: "Rétrospective : on part des malades/non-malades et on remonte vers l'exposition." },
  { ueId: "5.6", recto: "Que signifie une valeur p (p-value) ?", verso: "La probabilité d'observer le résultat (ou plus extrême) si l'hypothèse nulle est vraie." },
];
