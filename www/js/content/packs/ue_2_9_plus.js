// UE 2.9 PLUS — Processus tumoraux : pharmacologie de la chimiothérapie, radiothérapie, soins de support.
// Pack complémentaire (contenu nouveau, orienté pratique et sécurité infirmière).

export const fiches = [
  {
    id: "fx_ue_2_9_plus_chimio_securite", ueId: "2.9", type: "cours",
    titre: "Chimiothérapie : manipulation des cytotoxiques et sécurité infirmière",
    resume: "Familles d'anticancéreux, manipulation sécurisée, extravasation et toxicités majeures à surveiller.",
    tags: ["chimiothérapie", "cytotoxique", "extravasation", "sécurité"],
    html: `
      <p>La <span class="key" data-term="chimiothérapie">chimiothérapie</span> regroupe des médicaments <strong>cytotoxiques</strong> agissant sur les cellules à division rapide. Cette action est <strong>peu spécifique</strong> : elle touche aussi les tissus sains à renouvellement rapide (moelle osseuse, muqueuses, follicules pileux), d'où les toxicités caractéristiques.</p>
      <h3>Grandes familles et cibles</h3>
      <table class="tbl">
        <tr><th>Famille</th><th>Exemples</th><th>Mécanisme</th></tr>
        <tr><td>Agents alkylants</td><td>cyclophosphamide, cisplatine</td><td>Lésions de l'ADN (pontages)</td></tr>
        <tr><td>Antimétabolites</td><td>méthotrexate, 5-FU, gemcitabine</td><td>Bloquent la synthèse de l'ADN</td></tr>
        <tr><td>Poisons du fuseau</td><td>vincristine, paclitaxel (taxanes)</td><td>Inhibent la mitose (microtubules)</td></tr>
        <tr><td>Anthracyclines</td><td>doxorubicine, épirubicine</td><td>Intercalants — <strong>cardiotoxiques</strong></td></tr>
      </table>
      <div class="callout"><div class="callout-t">Thérapies ciblées et immunothérapie</div>À distinguer de la chimiothérapie classique : les <strong>thérapies ciblées</strong> (anticorps en « -mab », inhibiteurs en « -nib ») visent une anomalie moléculaire précise ; l'<span class="key" data-term="immunothérapie">immunothérapie</span> (inhibiteurs de points de contrôle) réactive le système immunitaire contre la tumeur. Toxicités différentes (réactions auto-immunes).</div>
      <h3>Manipulation sécurisée des cytotoxiques</h3>
      <ul>
        <li>Préparation centralisée à la <strong>pharmacie</strong> sous hotte à flux laminaire ; ne jamais préparer dans le service.</li>
        <li>Port d'<strong>EPI</strong> : double gants, surblouse, lunettes lors de la manipulation et de l'élimination.</li>
        <li>Élimination dans des <strong>conteneurs spécifiques</strong> (filière déchets cytotoxiques).</li>
        <li>Précautions chez la soignante <strong>enceinte ou allaitante</strong> (risque mutagène/tératogène).</li>
      </ul>
      <h3>Extravasation : une urgence</h3>
      <p>L'<span class="key" data-term="extravasation">extravasation</span> est le passage du produit hors de la veine dans les tissus. Avec un produit <strong>vésicant</strong> (anthracyclines, vinca-alcaloïdes), elle peut provoquer une nécrose tissulaire.</p>
      <ul>
        <li>Signes : douleur, brûlure, rougeur, œdème, arrêt du reflux veineux.</li>
        <li>Conduite : <strong>arrêter immédiatement</strong> la perfusion, ne pas retirer le cathéter, aspirer, prévenir le médecin, appliquer le protocole (froid ou chaud selon le produit).</li>
        <li>Prévention : privilégier une <strong>voie veineuse centrale</strong> (PAC/PICC) pour les vésicants.</li>
      </ul>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Toxicités « à division rapide » = <strong>« MOULE »</strong> : <strong>M</strong>oelle (aplasie), <strong>O</strong>ral/muqueuses (mucite), <strong>U</strong>nités pileuses (alopécie), <strong>L</strong>uette/digestif (nausées-diarrhée), <strong>E</strong>pithélium reproducteur (stérilité).</div>
    `,
    refs: ["UE 2.9", "INCa — Médicaments anticancéreux"],
  },
  {
    id: "fx_ue_2_9_plus_radiotherapie", ueId: "2.9", type: "cours",
    titre: "Radiothérapie : principes et soins infirmiers de la peau irradiée",
    resume: "Radiothérapie externe vs curiethérapie, effets secondaires aigus et tardifs, soins de la radiodermite.",
    tags: ["radiothérapie", "curiethérapie", "radiodermite", "soins"],
    html: `
      <p>La <span class="key" data-term="radiothérapie">radiothérapie</span> utilise des <strong>rayonnements ionisants</strong> pour détruire les cellules tumorales en altérant leur ADN. Elle est <strong>locorégionale</strong> : elle n'agit que sur la zone irradiée.</p>
      <h3>Modalités</h3>
      <table class="tbl">
        <tr><th>Type</th><th>Principe</th><th>Particularité</th></tr>
        <tr><td>Radiothérapie externe</td><td>Source à distance (accélérateur)</td><td>Le patient <strong>n'est pas radioactif</strong></td></tr>
        <tr><td>Curiethérapie</td><td>Source radioactive au contact/dans la tumeur</td><td>Précautions de <span class="key" data-term="radioprotection">radioprotection</span> du personnel</td></tr>
        <tr><td>Radiothérapie métabolique</td><td>Radio-isotope injecté (ex. iode 131)</td><td>Excrétas radioactifs, chambre dédiée</td></tr>
      </table>
      <div class="callout"><div class="callout-t">Repères de la peau</div>Les <strong>marques de repérage</strong> (tatouages/traits) délimitent le champ d'irradiation. Il ne faut <strong>ni les effacer</strong> ni frotter la zone.</div>
      <h3>Effets secondaires</h3>
      <ul>
        <li><strong>Aigus</strong> (pendant/après) : <span class="key" data-term="radiodermite">radiodermite</span>, mucite si ORL, cystite/diarrhée si pelvis, fatigue.</li>
        <li><strong>Tardifs</strong> : fibrose, sténoses, télangiectasies, second cancer radio-induit (rare).</li>
      </ul>
      <h3>Soins de la peau irradiée</h3>
      <ul>
        <li>Toilette à l'<strong>eau tiède</strong>, savon doux, séchage en tamponnant.</li>
        <li><strong>Pas</strong> de produit alcoolisé/parfumé, de talc, ni de cosmétique sans avis sur la zone.</li>
        <li>Vêtements amples en coton ; <strong>protéger du soleil</strong> la zone irradiée.</li>
        <li>Hydratation avec un produit prescrit, en dehors des séances.</li>
      </ul>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Peau irradiée = règle des <strong>« 3 NON »</strong> : <strong>NON</strong> au frottement, <strong>NON</strong> au soleil, <strong>NON</strong> aux produits agressifs (alcool, parfum, talc).</div>
    `,
    refs: ["UE 2.9", "SFRO — Société française de radiothérapie oncologique"],
  },
  {
    id: "fx_ue_2_9_plus_soins_support", ueId: "2.9", type: "cours",
    titre: "Soins de support : neutropénie fébrile, nausées et dénutrition",
    resume: "Reconnaître la neutropénie fébrile (urgence), prévenir les nausées et dépister la dénutrition du patient en oncologie.",
    tags: ["soins de support", "neutropénie", "antiémétiques", "dénutrition"],
    html: `
      <p>Les <span class="key" data-term="soins de support">soins de support</span> sont l'ensemble des soins visant à assurer la meilleure qualité de vie, en parallèle des traitements spécifiques (douleur, nutrition, psychologie, social).</p>
      <h3>La neutropénie fébrile : une urgence</h3>
      <p>L'aplasie médullaire post-chimiothérapie expose à la <span class="key" data-term="neutropénie fébrile">neutropénie fébrile</span>, définie par une fièvre <strong>≥ 38,3 °C</strong> (ou ≥ 38 °C deux fois) chez un patient avec <strong>polynucléaires neutrophiles &lt; 500/mm³</strong>.</p>
      <ul>
        <li>C'est une <strong>urgence</strong> : le risque infectieux peut évoluer vers un sepsis.</li>
        <li>Conduite : <strong>hémocultures</strong>, bilan, puis <strong>antibiothérapie large spectre dans l'heure</strong> sur prescription.</li>
        <li>Prévention : éducation (température 2×/jour, signaux d'alerte), hygiène, parfois <strong>facteurs de croissance (G-CSF)</strong>.</li>
      </ul>
      <div class="callout"><div class="callout-t">Le nadir</div>Le <span class="key" data-term="nadir">nadir</span> est le point le plus bas des cellules sanguines après une cure, généralement vers <strong>J7-J14</strong> : période de vigilance maximale pour le risque infectieux et hémorragique.</div>
      <h3>Nausées et vomissements chimio-induits</h3>
      <ul>
        <li>Prévention <strong>systématique</strong> par antiémétiques avant la cure selon le potentiel émétisant.</li>
        <li>Classes : <strong>sétrons</strong> (ondansétron), <strong>corticoïdes</strong>, antagonistes NK1 (aprépitant), métoclopramide.</li>
        <li>Mesures associées : fractionner les repas, éviter les odeurs fortes, repas froids.</li>
      </ul>
      <h3>Dépistage de la dénutrition</h3>
      <ul>
        <li>Surveiller le <strong>poids</strong> et calculer la <strong>perte de poids</strong> (alerte si &gt; 5 % en 1 mois ou &gt; 10 % en 6 mois).</li>
        <li>Évaluer ingesta, mucite, dysgueusie ; adapter texture et enrichir l'alimentation.</li>
        <li>Recours possible à la <strong>nutrition entérale/parentérale</strong> si besoin.</li>
      </ul>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Neutropénie fébrile = <strong>« 38,3 + 500 = appel »</strong> : fièvre <strong>≥ 38,3 °C</strong> et PNN <strong>&lt; 500</strong> → antibiotique <strong>dans l'heure</strong>.</div>
    `,
    refs: ["UE 2.9", "AFSOS — Référentiels en soins oncologiques de support"],
  },
];

export const qcm = [
  { ueId: "2.9", q: "Quelle famille d'anticancéreux est connue pour sa cardiotoxicité ?", options: ["Antimétabolites", "Anthracyclines", "Poisons du fuseau", "Agents alkylants"], correct: 1,
    explication: "Les anthracyclines (doxorubicine, épirubicine) ont une toxicité cardiaque dose-dépendante, justifiant une surveillance de la fonction cardiaque (FEVG) avant et pendant le traitement.", ref: "INCa — Anticancéreux", diff: 2 },
  { ueId: "2.9", q: "Devant une suspicion d'extravasation d'un produit vésicant, la première action est :", options: ["Retirer immédiatement le cathéter", "Accélérer la perfusion pour finir vite", "Arrêter immédiatement la perfusion sans retirer le cathéter", "Masser la zone"], correct: 2,
    explication: "On arrête immédiatement la perfusion en laissant le cathéter en place pour pouvoir aspirer le produit, puis on prévient le médecin et on applique le protocole. Le massage est contre-indiqué.", ref: "UE 2.9 — Extravasation", diff: 2 },
  { ueId: "2.9", q: "La neutropénie fébrile se définit par une fièvre associée à un taux de polynucléaires neutrophiles :", options: ["< 1500/mm³", "< 1000/mm³", "< 500/mm³", "< 2000/mm³"], correct: 2,
    explication: "Le seuil retenu est PNN < 500/mm³ (ou < 1000 en voie de décroissance) avec une fièvre ≥ 38,3 °C. C'est une urgence imposant une antibiothérapie rapide.", ref: "AFSOS — Neutropénie fébrile", diff: 2 },
  { ueId: "2.9", q: "Un patient traité par radiothérapie externe (accélérateur) :", options: ["Est radioactif et doit être isolé", "N'est pas radioactif", "Doit éliminer ses urines dans un contenant plombé", "Émet des rayons pendant 24 h"], correct: 1,
    explication: "En radiothérapie externe, la source est extérieure : le patient n'est pas radioactif et ne présente aucun risque pour son entourage. Les précautions de radioprotection concernent surtout la curiethérapie et la radiothérapie métabolique.", ref: "SFRO", diff: 1 },
  { ueId: "2.9", q: "Concernant les soins de la peau en radiothérapie, quelle proposition est CORRECTE ?", options: ["Appliquer du talc pour assécher", "Frotter énergiquement la zone à la toilette", "Effacer les marques de repérage gênantes", "Laver à l'eau tiède et tamponner pour sécher"], correct: 3,
    explication: "La peau irradiée se lave à l'eau tiède avec un savon doux, en tamponnant. On évite talc, alcool, parfum, frottement et soleil, et on ne touche pas aux marques de repérage.", ref: "SFRO — Radiodermite", diff: 1 },
  { ueId: "2.9", q: "Le « nadir » après une cure de chimiothérapie correspond :", options: ["Au pic de la numération sanguine", "Au point le plus bas des cellules sanguines (≈ J7-J14)", "Au jour de la perfusion", "À la fin de l'alopécie"], correct: 1,
    explication: "Le nadir est le point le plus bas des lignées sanguines après une cure, souvent vers J7-J14. C'est la période de risque infectieux et hémorragique maximal.", ref: "UE 2.9", diff: 2 },
  { ueId: "2.9", q: "Quels prélèvements doivent être réalisés AVANT l'antibiothérapie d'une neutropénie fébrile ?", options: ["Aucun, l'urgence prime", "Des hémocultures", "Une simple température", "Un bilan lipidique"], correct: 1,
    explication: "On réalise des hémocultures (et autres prélèvements pertinents) avant la première dose d'antibiotique, qui doit toutefois être administrée rapidement (dans l'heure).", ref: "AFSOS", diff: 2 },
  { ueId: "2.9", q: "Les agents alkylants (ex. cisplatine, cyclophosphamide) agissent en :", options: ["Bloquant les microtubules", "Créant des lésions de l'ADN", "Stimulant l'immunité", "Inhibant un récepteur membranaire ciblé"], correct: 1,
    explication: "Les agents alkylants endommagent directement l'ADN (pontages), empêchant la réplication cellulaire. Ce sont des cytotoxiques classiques.", ref: "INCa", diff: 2 },
  { ueId: "2.9", q: "La prévention des nausées et vomissements chimio-induits repose sur :", options: ["Un traitement uniquement si le patient vomit", "Une administration préventive systématique d'antiémétiques avant la cure", "Des antibiotiques", "Le jeûne complet pendant 48 h"], correct: 1,
    explication: "Les antiémétiques (sétrons, corticoïdes, anti-NK1...) sont administrés en prévention, avant la cure, selon le potentiel émétisant du protocole. Le contrôle est meilleur en prévention qu'en curatif.", ref: "AFSOS — NVCI", diff: 1 },
  { ueId: "2.9", q: "Quelle classe d'antiémétique est représentée par l'ondansétron ?", options: ["Corticoïdes", "Antagonistes NK1", "Sétrons (anti-5HT3)", "Benzodiazépines"], correct: 2,
    explication: "L'ondansétron est un sétron (antagoniste des récepteurs 5HT3 de la sérotonine), antiémétique de référence dans les chimiothérapies émétisantes.", ref: "Pharmacologie", diff: 2 },
  { ueId: "2.9", q: "Une voie veineuse centrale (PAC/PICC) est privilégiée pour les chimiothérapies vésicantes car :", options: ["Elle est moins douloureuse à poser", "Elle réduit le risque et la gravité d'une extravasation", "Elle accélère la perfusion", "Elle évite toute surveillance"], correct: 1,
    explication: "La voie centrale, à fort débit, limite le risque d'extravasation des produits vésicants et la gravité de ses conséquences tissulaires.", ref: "UE 2.9", diff: 2 },
  { ueId: "2.9", q: "Une perte de poids constitue un signal d'alerte de dénutrition si elle dépasse :", options: ["2 % en 1 mois", "5 % en 1 mois", "5 % en 1 an", "1 % en 6 mois"], correct: 1,
    explication: "Une perte de poids > 5 % en 1 mois (ou > 10 % en 6 mois) est un critère d'alerte de dénutrition, fréquente en oncologie et à dépister par la pesée régulière.", ref: "HAS — Dénutrition", diff: 2 },
  { ueId: "2.9", q: "Parmi ces toxicités, laquelle traduit l'atteinte des muqueuses par la chimiothérapie ?", options: ["L'alopécie", "La mucite", "La cardiotoxicité", "La neuropathie périphérique"], correct: 1,
    explication: "La mucite (inflammation douloureuse des muqueuses, notamment buccale) résulte de la toxicité des cytotoxiques sur les cellules à renouvellement rapide de l'épithélium.", ref: "UE 2.9", diff: 1 },
  { ueId: "2.9", q: "Lors de la manipulation de cytotoxiques, l'infirmière doit notamment :", options: ["Les préparer dans le poste de soins", "Porter des EPI (double gants, surblouse)", "Les jeter dans la poubelle classique", "Éviter tout lavage de mains"], correct: 1,
    explication: "La préparation est centralisée à la pharmacie ; à l'administration, l'IDE porte des EPI adaptés et élimine le matériel dans la filière déchets cytotoxiques spécifique.", ref: "UE 2.9 — Sécurité", diff: 1 },
  { ueId: "2.9", q: "La curiethérapie se distingue de la radiothérapie externe par :", options: ["L'absence totale de rayonnement", "Une source radioactive placée au contact ou dans la tumeur", "L'usage exclusif chez l'enfant", "L'absence d'effets secondaires"], correct: 1,
    explication: "En curiethérapie, une source radioactive est placée à proximité immédiate ou dans la tumeur, ce qui impose des mesures de radioprotection du personnel et de l'entourage.", ref: "SFRO", diff: 2 },
  { ueId: "2.9", q: "L'immunothérapie par inhibiteurs de points de contrôle agit en :", options: ["Détruisant directement l'ADN tumoral", "Réactivant le système immunitaire contre la tumeur", "Bloquant les microtubules", "Irradiant la zone tumorale"], correct: 1,
    explication: "L'immunothérapie lève les freins du système immunitaire pour qu'il attaque la tumeur. Elle peut entraîner des effets indésirables auto-immuns (thyroïdite, colite, etc.).", ref: "INCa — Immunothérapie", diff: 2 },
  { ueId: "2.9", q: "La vincristine appartient à quelle catégorie et présente quel risque notable ?", options: ["Antimétabolite — cardiotoxique", "Poison du fuseau (vinca-alcaloïde) — vésicant et neurotoxique", "Alkylant — néphrotoxique", "Anthracycline — ototoxique"], correct: 1,
    explication: "La vincristine est un vinca-alcaloïde (poison du fuseau) : produit vésicant en cas d'extravasation et responsable de neuropathies périphériques.", ref: "Pharmacologie", diff: 3 },
  { ueId: "2.9", q: "Quel facteur de croissance peut être utilisé pour prévenir/raccourcir une neutropénie post-chimiothérapie ?", options: ["L'EPO (érythropoïétine)", "Le G-CSF (facteur de croissance granulocytaire)", "L'insuline", "Les corticoïdes"], correct: 1,
    explication: "Le G-CSF (filgrastim, pegfilgrastim) stimule la production de polynucléaires neutrophiles et réduit la durée/profondeur de la neutropénie. L'EPO concerne la lignée rouge (anémie).", ref: "AFSOS", diff: 3 },
  { ueId: "2.9", q: "Concernant les marques de repérage cutanées en radiothérapie, l'IDE doit :", options: ["Les nettoyer à l'alcool chaque jour", "Les conserver intactes sans frotter la zone", "Les redessiner si elles pâlissent", "Les masquer par un pansement occlusif"], correct: 1,
    explication: "Les marques délimitent le champ d'irradiation et garantissent la précision du traitement : on ne les efface pas et on évite de frotter la zone.", ref: "SFRO", diff: 1 },
  { ueId: "2.9", q: "Une soignante enceinte doit, vis-à-vis des cytotoxiques :", options: ["Manipuler normalement, sans précaution", "Éviter la manipulation en raison du risque mutagène/tératogène", "Augmenter les doses préparées", "Travailler sans EPI"], correct: 1,
    explication: "Les cytotoxiques sont mutagènes, tératogènes et cancérogènes : une exposition professionnelle est à éviter pendant la grossesse et l'allaitement.", ref: "UE 2.9 — Sécurité", diff: 2 },
  { ueId: "2.9", q: "Parmi ces mesures, laquelle aide à limiter les nausées chez un patient sous chimiothérapie ?", options: ["Servir des plats très chauds et odorants", "Fractionner les repas et proposer des aliments froids/peu odorants", "Imposer trois gros repas", "Supprimer toute hydratation"], correct: 1,
    explication: "Fractionner, privilégier des aliments froids et peu odorants, éviter les odeurs fortes et bien hydrater sont des mesures non médicamenteuses utiles contre les nausées.", ref: "AFSOS", diff: 1 },
];

export const flashcards = [
  { ueId: "2.9", recto: "Pourquoi la chimiothérapie provoque-t-elle alopécie, mucite et aplasie ?", verso: "Elle cible les cellules à division rapide, sans spécificité : elle atteint aussi les tissus sains à renouvellement rapide (follicules pileux, muqueuses, moelle osseuse)." },
  { ueId: "2.9", recto: "Quelle famille de chimiothérapie est cardiotoxique ?", verso: "Les anthracyclines (doxorubicine, épirubicine) : surveillance de la FEVG." },
  { ueId: "2.9", recto: "Définition de la neutropénie fébrile ?", verso: "Fièvre ≥ 38,3 °C avec polynucléaires neutrophiles < 500/mm³. Urgence : hémocultures puis antibiothérapie large spectre dans l'heure." },
  { ueId: "2.9", recto: "Qu'est-ce que le nadir ?", verso: "Le point le plus bas des cellules sanguines après une cure, généralement vers J7-J14 (risque infectieux et hémorragique maximal)." },
  { ueId: "2.9", recto: "Première action devant une extravasation d'un produit vésicant ?", verso: "Arrêter immédiatement la perfusion sans retirer le cathéter, aspirer, prévenir le médecin, appliquer le protocole (froid/chaud). Ne pas masser." },
  { ueId: "2.9", recto: "Un patient en radiothérapie externe est-il radioactif ?", verso: "Non. La source est externe : aucun risque pour l'entourage. Précautions surtout en curiethérapie et radiothérapie métabolique." },
  { ueId: "2.9", recto: "Trois règles de soin de la peau irradiée ?", verso: "Eau tiède + savon doux en tamponnant ; pas d'alcool/parfum/talc/frottement ; protéger du soleil et conserver les marques de repérage." },
  { ueId: "2.9", recto: "Comment prévenir les nausées chimio-induites ?", verso: "Antiémétiques préventifs systématiques AVANT la cure (sétrons, corticoïdes, anti-NK1) selon le potentiel émétisant." },
  { ueId: "2.9", recto: "À quelle classe appartient l'ondansétron ?", verso: "Un sétron : antagoniste des récepteurs 5HT3 de la sérotonine." },
  { ueId: "2.9", recto: "Différence entre thérapie ciblée et chimiothérapie classique ?", verso: "La thérapie ciblée (anticorps en -mab, inhibiteurs en -nib) vise une anomalie moléculaire précise ; la chimio classique est un cytotoxique non spécifique." },
  { ueId: "2.9", recto: "Quel facteur de croissance contre la neutropénie ? Et contre l'anémie ?", verso: "Neutropénie : G-CSF (filgrastim). Anémie : EPO (érythropoïétine)." },
  { ueId: "2.9", recto: "Seuils d'alerte de dénutrition (perte de poids) ?", verso: "> 5 % en 1 mois ou > 10 % en 6 mois. Surveiller le poids régulièrement." },
  { ueId: "2.9", recto: "Précautions de manipulation des cytotoxiques par l'IDE ?", verso: "Préparation centralisée à la pharmacie ; EPI à l'administration (double gants, surblouse, lunettes) ; élimination en filière déchets cytotoxiques ; éviter si grossesse/allaitement." },
  { ueId: "2.9", recto: "Que sont les soins de support en oncologie ?", verso: "Soins assurant la qualité de vie en parallèle des traitements : douleur, nutrition, soutien psychologique, social, gestion des effets secondaires." },
  { ueId: "2.9", recto: "Risque notable de la vincristine (vinca-alcaloïde) ?", verso: "Produit vésicant en cas d'extravasation et neurotoxique (neuropathies périphériques)." },
];
