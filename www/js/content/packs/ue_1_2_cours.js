export const fiches = [
  { id: "fco_1_2_intro_eco", ueId: "1.2", type: "cours",
    titre: "Introduction à l'économie de la santé",
    resume: "L'économie de la santé gère la rareté des ressources entre efficience et équité.",
    tags: ["d'après tes cours", "économie", "efficience", "équité"],
    html: `<h3>Qu'est-ce que l'économie de la santé ?</h3>
<p>L'<span class="key" data-term="économie">économie</span> est la « science qui étudie comment les ressources rares sont employées pour la satisfaction des besoins des hommes vivant en société ». C'est une science et une forme d'éthique de gestion de la <strong>rareté</strong>.</p>
<ul>
<li>Ressources <strong>rares</strong> et limitées (argent, temps, technologie, savoir-faire…).</li>
<li>Besoins virtuellement <strong>illimités</strong> : tout ne peut être satisfait.</li>
<li>La société doit donc faire des choix de priorités (« le triage »).</li>
</ul>
<h3>Les deux critères</h3>
<table class="tbl">
<tr><th>Critère</th><th>Principe</th></tr>
<tr><td><span class="key" data-term="efficience">Efficience</span></td><td>Obtenir le maximum de résultats avec les ressources disponibles (les utilise-t-on correctement ?).</td></tr>
<tr><td><span class="key" data-term="équité">Équité</span></td><td>Fournir à chacun ce qui lui est dû : égalité d'accès aux soins de base.</td></tr>
</table>
<p>Plus on est efficient, plus on est en mesure de respecter l'équité. La France a un système efficace et de qualité (dépense publique ++), mais consomme beaucoup de médicaments. Les inégalités ne sont pas toutes liées au système de santé : conditions de vie et comportements comptent aussi.</p>
<div class="callout"><div class="callout-t">À retenir</div>Économie de la santé = arbitrer entre <strong>efficience</strong> (résultats/ressources) et <strong>équité</strong> (égalité d'accès aux soins de base).</div>`,
    refs: ["D'après tes cours (UE 1.2)"] },

  { id: "fco_1_2_asymetrie", ueId: "1.2", type: "cours",
    titre: "L'asymétrie d'information et la défaillance du marché",
    resume: "Les soins ne sont pas des biens comme les autres : l'asymétrie d'information justifie l'intervention de l'État.",
    tags: ["d'après tes cours", "marché", "assurance", "intervention publique"],
    html: `<h3>Pourquoi le marché ne suffit pas</h3>
<p>En concurrence pure et parfaite (atomicité, libre entrée, homogénéité des produits, information parfaite), le marché atteint un équilibre efficient sans l'État. Mais les soins et l'assurance maladie ne remplissent pas ces conditions : forte <strong>incertitude</strong> et <span class="key" data-term="asymétrie d'information">asymétrie d'information</span> (le médecin connaît la médecine, le patient son comportement, l'assureur paie sans rien savoir).</p>
<h3>Les 3 conséquences de l'asymétrie d'information</h3>
<table class="tbl">
<tr><th>Phénomène</th><th>Mécanisme</th><th>Solution</th></tr>
<tr><td><span class="key" data-term="antisélection">Antisélection</span></td><td>Une prime uniforme décourage les faibles risques ; le marché ne « sélectionne » que les grands risques → pas d'assurance privée complète.</td><td>Assurance <strong>obligatoire</strong> (intervention publique).</td></tr>
<tr><td><span class="key" data-term="aléa moral">Aléa moral</span></td><td>Soins quasi-gratuits → incitation à <strong>surconsommer</strong> sans bénéfice santé.</td><td>Copaiement : remboursement pas à 100 % (ticket modérateur).</td></tr>
<tr><td><span class="key" data-term="demande induite">Demande induite</span></td><td>Le médecin payé à l'acte peut générer une demande inutile pour augmenter sa rémunération.</td><td>Éthique pro, numerus clausus, modifier la rémunération.</td></tr>
</table>
<div class="callout"><div class="callout-t">À retenir</div>Le marché privé <strong>seul est inefficient</strong> en santé → l'État doit réguler (assurance obligatoire, copaiement, régulation de l'offre).</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« A-A-D » : <strong>A</strong>ntisélection, <strong>A</strong>léa moral, <strong>D</strong>emande induite = les 3 enfants de l'asymétrie d'information.</div>`,
    refs: ["D'après tes cours (UE 1.2)"] },

  { id: "fco_1_2_protection_sociale", ueId: "1.2", type: "cours",
    titre: "Protection sociale et modèles Bismarck / Beveridge",
    resume: "La Sécurité sociale française, née en 1945, évolue d'une logique d'assurance vers une logique de solidarité universelle.",
    tags: ["d'après tes cours", "Sécurité sociale", "Bismarck", "Beveridge", "PUMA"],
    html: `<h3>Notions clés</h3>
<ul>
<li><span class="key" data-term="protection sociale">Protection sociale</span> = mécanismes permettant à une collectivité de faire face financièrement aux <strong>risques sociaux</strong> (événements qui réduisent les ressources ou augmentent les besoins).</li>
<li><strong>Assurance sociale</strong> : droits obtenus après cotisations. <strong>Assistance / aide sociale</strong> : sous condition de ressources (lutte contre la précarité).</li>
<li><span class="key" data-term="PUMA">PUMA</span> (Protection Universelle Maladie) : couvre tous les résidents en France → logique de solidarité.</li>
</ul>
<h3>Deux modèles</h3>
<table class="tbl">
<tr><th></th><th>Bismarckien (Allemagne)</th><th>Beveridgien (G.-Bretagne)</th></tr>
<tr><td>Principe</td><td>Assurance sociale</td><td>Protection universelle</td></tr>
<tr><td>Couverture</td><td>Base socioprofessionnelle (salariés)</td><td>Tous les citoyens</td></tr>
<tr><td>Financement</td><td>Cotisations sur salaires</td><td>Impôt sur les revenus</td></tr>
<tr><td>Prestations</td><td>Proportionnelles</td><td>Uniformes (forfaitaires)</td></tr>
<tr><td>Gestion</td><td>Paritarisme (salariés/employeurs)</td><td>État</td></tr>
</table>
<h3>La Sécurité sociale française</h3>
<p>Créée le <strong>4 octobre 1945</strong>, inspirée du modèle allemand : affiliation par le travail, financement par cotisations, gestion paritaire. Elle se <strong>fiscalise</strong> ensuite : la <span class="key" data-term="CSG">CSG</span> (impôt sur les revenus) remplace une partie des cotisations. L'assurance de base devient universelle en 2000 (CMU → PUMA).</p>
<div class="callout"><div class="callout-t">À retenir</div>La France glisse de <strong>Bismarck vers Beveridge</strong> : ONDAM + CSG + PUMA, avec affirmation des complémentaires privées et de l'aide sociale (CSS).</div>`,
    refs: ["D'après tes cours (UE 1.2)"] },

  { id: "fco_1_2_depenses_ondam", ueId: "1.2", type: "cours",
    titre: "Dépenses de santé : mesure, déterminants et régulation (ONDAM)",
    resume: "On mesure les dépenses par la CSBM et la DCS ; elles sont régulées par l'ONDAM voté chaque année.",
    tags: ["d'après tes cours", "CSBM", "DCS", "ONDAM", "PIB"],
    html: `<h3>Mesurer les dépenses</h3>
<ul>
<li><span class="key" data-term="PIB">PIB</span> = somme des revenus perçus par les résidents en 1 an ; la croissance = son évolution annuelle.</li>
<li><span class="key" data-term="CSBM">CSBM</span> (Consommation de Soins et de Biens Médicaux) : mesure la <strong>plus étroite</strong> (soins hospitaliers, ambulatoires, transports, médicaments). N'inclut pas la prévention institutionnelle. > 9 % du PIB en 2021.</li>
<li><span class="key" data-term="DCS">DCS</span> (Dépense Courante de Santé) : mesure la <strong>plus large</strong> ; la <strong>DCSI</strong> sert aux comparaisons internationales (> 12 % du PIB en 2021, USA en tête).</li>
</ul>
<h3>Déterminants de la hausse</h3>
<ul>
<li>Vieillissement de la population (effet positif mais <strong>modeste</strong> hors « fin de vie »).</li>
<li><strong>Progrès technologique et innovation médicale</strong> : coûteux via leur diffusion.</li>
<li>Effet de génération : les nouvelles générations consomment plus de soins.</li>
</ul>
<h3>L'ONDAM</h3>
<p>Le <strong>plan Juppé de 1996</strong> instaure la LFSS (Loi de Financement de la Sécurité Sociale), votée chaque année par le Parlement, qui vote aussi l'<span class="key" data-term="ONDAM">ONDAM</span> (Objectif National des Dépenses d'Assurance Maladie). C'est une <strong>enveloppe budgétaire</strong> régulant prix et quantités. La réforme de 2004 crée un <strong>comité d'alerte</strong> sur le risque de dépassement.</p>
<div class="callout"><div class="callout-t">À retenir</div>L'ONDAM est un <strong>principe de rationnement</strong> : la hausse votée est inférieure à la hausse naturelle des besoins, pour supprimer le déficit sans augmenter les prélèvements.</div>`,
    refs: ["D'après tes cours (UE 1.2)"] },

  { id: "fco_1_2_epidemiologie", ueId: "1.2", type: "cours",
    titre: "Introduction à l'épidémiologie et à la démographie",
    resume: "L'épidémiologie étudie la distribution des problèmes de santé et leurs déterminants dans les populations, selon trois approches.",
    tags: ["d'après tes cours", "épidémiologie", "déterminants", "études"],
    html: `<h3>Définition</h3>
<p>L'<span class="key" data-term="épidémiologie">épidémiologie</span> = étude de la <strong>distribution</strong> des problèmes de santé et de leurs <strong>déterminants</strong> dans les populations humaines, en vue de la prévention. Elle s'intéresse au <strong>groupe</strong> (malades + sains), pas à l'individu (≠ médecine clinique).</p>
<ul>
<li><strong>Déterminant</strong> : facteur de risque (↑ le problème, ex. tabac/cancer) ou facteur protecteur (↓ le problème, ex. activité physique).</li>
<li>Toujours préciser <strong>TEMPS, LIEU, PERSONNES</strong>.</li>
</ul>
<h3>Les trois épidémiologies</h3>
<table class="tbl">
<tr><th>Type</th><th>Question</th><th>Études</th></tr>
<tr><td>Descriptive</td><td>Quelle fréquence d'un problème dans une population ?</td><td>Indicateurs : prévalence, incidence, mortalité, létalité.</td></tr>
<tr><td>Analytique (étiologique)</td><td>Quels facteurs de risque / déterminants ?</td><td>Cohorte (prospective), cas-témoins (rétrospective).</td></tr>
<tr><td>Évaluative</td><td>Quelle action est la plus efficace ?</td><td>Essai randomisé, étude quasi-expérimentale.</td></tr>
</table>
<h3>Études analytiques</h3>
<ul>
<li><span class="key" data-term="étude de cohorte">Étude de cohorte</span> (prospective) : suit des sujets exposés et non-exposés et compare la survenue de la maladie.</li>
<li><span class="key" data-term="étude cas-témoins">Étude cas-témoins</span> (rétrospective) : compare l'exposition passée chez des malades et des non-malades. Choisie pour les maladies <strong>rares</strong> à long délai (ex. cancer).</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>L'<strong>essai randomisé</strong> est le seul type d'étude permettant d'établir formellement un <strong>lien de causalité</strong> : la randomisation crée des groupes homogènes.</div>`,
    refs: ["D'après tes cours (UE 1.2)"] },

  { id: "fco_1_2_organisation", ueId: "1.2", type: "cours",
    titre: "Organisation de la politique de santé publique",
    resume: "Le système de santé est organisé à l'échelon national (État, HCSP, HAS) et régional (ARS), structuré par les grandes lois de santé.",
    tags: ["d'après tes cours", "ARS", "HAS", "lois", "organisation"],
    html: `<h3>Système de santé vs système de soins</h3>
<p>Le <span class="key" data-term="système de santé">système de santé</span> = ensemble des moyens visant à produire la santé (promouvoir, prévenir, guérir, réduire les conséquences). Il s'étend à toutes les dimensions de la vie sociale, là où le <strong>système de soins</strong> se limite à la prise en charge de la maladie.</p>
<h3>Les grandes lois</h3>
<table class="tbl">
<tr><th>Loi</th><th>Apport</th></tr>
<tr><td>4 mars 2002</td><td>Droits des malades et qualité du système de santé.</td></tr>
<tr><td>9 août 2004</td><td>Cadre méthodologique (objectifs quantifiés, plans sur 5 ans), crée le <strong>HCSP</strong>.</td></tr>
<tr><td>21 juillet 2009 (HPST)</td><td>Organise le système à l'échelon régional, crée les <strong>ARS</strong>.</td></tr>
<tr><td>26 janvier 2016</td><td>Modernisation, démocratie sanitaire, crée <strong>Santé publique France</strong>.</td></tr>
</table>
<h3>Les acteurs</h3>
<ul>
<li><strong>Parlement</strong> : objectifs sanitaires + LFSS + ONDAM.</li>
<li><span class="key" data-term="HCSP">HCSP</span> (Haut Conseil de la Santé Publique) : expertise, aide à la stratégie nationale de santé.</li>
<li><span class="key" data-term="HAS">HAS</span> (Haute Autorité de Santé, indépendante) : évaluation médico-économique, recommandations de remboursement, certification des établissements, bonnes pratiques.</li>
<li><span class="key" data-term="ARS">ARS</span> (régional, 2009) : établissement public de l'État sous tutelle ministérielle ; <strong>pilotage régional</strong> de la politique de santé + <strong>régulation de l'offre de soins</strong>.</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Niveau régional = échelon <strong>optimal</strong> de mise en œuvre coordonnée des politiques de santé publique (ARS).</div>`,
    refs: ["D'après tes cours (UE 1.2)"] },

  { id: "fco_1_2_financement_hopital", ueId: "1.2", type: "cours",
    titre: "Le financement de l'hôpital et la rémunération des médecins",
    resume: "La tarification hospitalière a évolué vers la T2A (GHM/GHS) ; les modes de rémunération influencent le comportement des soignants.",
    tags: ["d'après tes cours", "T2A", "GHM", "rémunération", "ROSP"],
    html: `<h3>Évolution de la tarification hospitalière</h3>
<table class="tbl">
<tr><th>Période</th><th>Mode</th><th>Effet</th></tr>
<tr><td>1946-1983</td><td>Prix de journée</td><td>Incite à hospitaliser longtemps → forte hausse des dépenses.</td></tr>
<tr><td>1984-2003</td><td>Dotation globale</td><td>Budget fixe reconduit ; maîtrise les dépenses mais déconnecté de l'activité, injuste pour les bons gestionnaires.</td></tr>
<tr><td>Depuis 2004</td><td><span class="key" data-term="T2A">T2A</span> (tarification à l'activité)</td><td>Public + privé ; incite à réduire les charges et développer l'activité.</td></tr>
</table>
<p>Après le séjour, le patient est classé en <span class="key" data-term="GHM">GHM</span> (Groupe Homogène de Malades) selon une double logique médicale puis économique (~2300 GHM, 4 degrés de sévérité). À chaque GHM correspond un <span class="key" data-term="GHS">GHS</span> = tarif en euros remboursé par l'AM. Depuis 2016, l'<strong>IFAQ</strong> ajoute une incitation à la qualité. À partir de 2022 : <strong>moins de T2A</strong>.</p>
<h3>Rémunération des médecins</h3>
<table class="tbl">
<tr><th>Mode</th><th>Dépenses</th><th>Limite</th></tr>
<tr><td>Salariat</td><td>Connues à l'avance, non inflationniste</td><td>Faible incitation à la productivité (files d'attente).</td></tr>
<tr><td>Capitation (forfait × patients)</td><td>Peu inflationniste, incite à la prévention</td><td>Incitation à sélectionner les patients les moins à risque.</td></tr>
<tr><td>Paiement à l'acte (prix × actes)</td><td>Non connues a priori, demande induite</td><td>Favorise le curatif sur le préventif ; dépassements possibles.</td></tr>
</table>
<p>Les économistes recommandent une <strong>rémunération mixte</strong>. En France : à l'acte (~90 %) + forfait médecin traitant + <span class="key" data-term="ROSP">ROSP</span> (Rémunération sur Objectifs de Santé Publique, 2012, par points : suivi des pathologies chroniques, efficience des prescriptions, prévention).</p>
<div class="callout"><div class="callout-t">À retenir</div>Le <strong>mode de rémunération influence le comportement</strong> des soignants (dépenses, qualité, accès). Le paiement à l'acte induit des dépenses plus élevées en moyenne.</div>`,
    refs: ["D'après tes cours (UE 1.2)"] },

  { id: "fco_1_2_reste_a_charge", ueId: "1.2", type: "cours",
    titre: "Reste à charge, ALD et régulation du médicament",
    resume: "Le ticket modérateur, les franchises et les dépassements laissent un reste à charge ; les ALD posent un défi de solidarité.",
    tags: ["d'après tes cours", "ticket modérateur", "ALD", "médicament", "génériques"],
    html: `<h3>Ce qui reste à la charge du patient</h3>
<p>Le droit à l'Assurance Maladie se fait sur critère de <strong>résidence</strong>. L'AM laisse une partie à la charge des personnes ou de leur complémentaire :</p>
<ul>
<li><span class="key" data-term="ticket modérateur">Ticket modérateur</span> : part du tarif conventionnel non remboursée (ex. 30 % d'une consultation).</li>
<li><strong>Participations forfaitaires</strong> (1 € / consultation) et <strong>franchises</strong> (0,50 € / boîte).</li>
<li><strong>Dépassements d'honoraires</strong> (au-delà du tarif Sécu).</li>
<li><strong>Forfait hospitalier</strong> (20 € / jour).</li>
</ul>
<p>Situations particulières : la <span class="key" data-term="CSS">CSS</span> (Complémentaire Santé Solidaire) est gratuite, rembourse tout et interdit les dépassements.</p>
<h3>Les ALD</h3>
<p>Une <span class="key" data-term="ALD">ALD</span> (Affection de Longue Durée) ouvre droit à l'exonération du ticket modérateur <strong>pour les seuls soins en lien avec l'ALD</strong>. Liste de 30 affections (+ ALD 31 et 32 « hors liste »). <strong>Être en ALD ≠ remboursé à 100 %</strong> : restent les forfaits, dépassements, forfait hospitalier et les soins hors ALD. Certaines ALD sont <strong>non-exonérantes</strong> (glaucome, arthrose, hypothyroïdie, épilepsie).</p>
<div class="callout"><div class="callout-t">À retenir</div>Les dépenses ALD augmentent plus vite que l'ONDAM (44 % de l'AM en 2002, 59 % en 2009 pour 15 % des assurés) : effet effectifs + effet génération → <strong>défi de solidarité</strong>.</div>
<h3>Le médicament</h3>
<p>Son évolution résulte de 3 effets : <strong>prix</strong> (génériques ↓ / innovations ↑), <strong>volume</strong>, <strong>structure</strong>. Le <span class="key" data-term="TFR">tarif forfaitaire de responsabilité</span> rembourse en pourcentage d'un tarif unique du groupe, incitant à consommer les génériques les moins chers.</p>`,
    refs: ["D'après tes cours (UE 1.2)"] },

  { id: "fco_1_2_determinants", ueId: "1.2", type: "cours",
    titre: "Les déterminants de la santé",
    resume: "Facteurs personnels, sociaux, économiques et environnementaux qui déterminent l'état de santé, classés notamment selon Lalonde.",
    tags: ["d'après tes cours", "déterminants", "OMS", "Lalonde", "santé publique"],
    html: `<h3>Définition</h3>
<p>Selon l'OMS, la <strong>santé</strong> = « état de complet bien-être physique, mental et social et ne consiste pas seulement en l'absence de maladie ou d'infirmité ». Les <span class="key" data-term="déterminants de santé">déterminants de santé</span> sont les facteurs personnels, sociaux, économiques et environnementaux qui déterminent l'état de santé. Ils s'imbriquent (« causalité en chaîne ») et ont une influence :</p>
<ul>
<li><strong>positive</strong> = facteur de protection ;</li>
<li><strong>négative</strong> = facteur de risque.</li>
</ul>
<h3>Classifications</h3>
<ul>
<li><span class="key" data-term="Lalonde">Classification de Lalonde</span> (4 groupes) : biologie humaine, environnement, comportement, organisation des services de santé.</li>
<li>Agence de santé publique du Canada (2007) : <strong>12 déterminants</strong> (revenu/statut social, soutien social, éducation, emploi, environnements social et physique, habitudes, petite enfance, génétique, services de santé, sexe, culture).</li>
<li>Distinction <strong>endogènes (non modifiables)</strong> : âge, sexe, génétique ; et <strong>exogènes (modifiables)</strong> : environnementaux.</li>
</ul>
<h3>Quatre catégories</h3>
<table class="tbl">
<tr><th>Catégorie</th><th>Exemples</th></tr>
<tr><td>Biologiques / génétiques</td><td>Hérédité, patrimoine génétique, sexe, âge, vieillissement.</td></tr>
<tr><td>Environnementaux</td><td>Physiques (pollution, air, eau, bruit) ; socio-éco (éducation, revenu, logement, travail).</td></tr>
<tr><td>Comportementaux</td><td>Addictions, sédentarité, alimentation, loisirs, modes de consommation.</td></tr>
<tr><td>Système de santé</td><td>Accès aux soins, qualité, prévention, observance, coût, délai d'attente.</td></tr>
</table>
<div class="callout"><div class="callout-t">À retenir</div>Agir sur un ou plusieurs <strong>déterminants</strong> est le concept clé de l'intervention en santé publique : c'est ainsi qu'on influe sur l'état de santé de la population.</div>`,
    refs: ["D'après tes cours (UE 1.2)"] },

  { id: "fco_1_2_questionnaire", ueId: "1.2", type: "cours",
    titre: "Les outils d'enquête : le questionnaire",
    resume: "Le questionnaire est un outil quantitatif pour connaître une population et identifier ses besoins, construit selon des règles précises.",
    tags: ["d'après tes cours", "questionnaire", "enquête", "méthode quantitative"],
    html: `<h3>Objectifs</h3>
<p>Le <span class="key" data-term="questionnaire">questionnaire</span> = « ensemble de questions écrites portant sur un sujet particulier, obéissant à des règles de préparation, construction et passation ». Outil de la <strong>méthode quantitative</strong> permettant des inférences statistiques. Deux objectifs : <strong>connaître</strong> la population et <strong>identifier ses besoins</strong>.</p>
<p>Il produit deux types de chiffres : <strong>descriptifs</strong> (combien d'étudiants non-fumeurs) et <strong>explicatifs</strong> (pourquoi ils ne fument pas).</p>
<h3>Étapes de construction</h3>
<ul>
<li>Définir l'objet (objectifs et hypothèses).</li>
<li>Déterminer l'échantillon.</li>
<li>Rédiger un projet, réaliser un <strong>pré-test</strong>, puis la version définitive.</li>
<li>Choisir le mode de diffusion, prévoir le dépouillement/codage, analyser au regard des objectifs.</li>
</ul>
<h3>Types de questions</h3>
<table class="tbl">
<tr><th>Type</th><th>Caractéristique</th></tr>
<tr><td>Fermée (réponse unique)</td><td>Faits précis, codage facile, mais n'apporte rien de nouveau.</td></tr>
<tr><td>Ouverte</td><td>Recueil d'opinions, réponses personnalisées, ne canalise pas.</td></tr>
<tr><td>Choix multiple (QCM)</td><td>Analyse facilitée ; préciser le nombre de réponses, prévoir « Autre, précisez ».</td></tr>
<tr><td>Filtre</td><td>Oriente vers d'autres questions selon la réponse (oui/non).</td></tr>
</table>
<div class="callout"><div class="callout-t">À retenir</div>Bonnes pratiques : questions claires, un seul fait par question, vocabulaire simple, formulation positive, <strong>ne pas induire les réponses</strong>, max 10 questions, éviter ce qui gêne.</div>`,
    refs: ["D'après tes cours (UE 1.2)"] },

  { id: "fco_1_2_sante_jeunes", ueId: "1.2", type: "cours",
    titre: "Santé publique des jeunes : stress et santé mentale (dossier)",
    resume: "Les jeunes sont la classe d'âge la plus touchée par le stress ; Santé publique France promeut cinq comportements protecteurs.",
    tags: ["d'après tes cours", "stress", "santé mentale", "jeunes", "prévention"],
    html: `<h3>Le stress</h3>
<p>Le <span class="key" data-term="stress">stress</span> = réactions physiques et physiologiques de l'organisme face à une situation particulière. On distingue le <strong>stress positif</strong> (améliore concentration, sain) et le <strong>stress négatif</strong> qui, prolongé, devient <span class="key" data-term="stress chronique">stress chronique</span> : nocif, il affaiblit l'organisme (troubles digestifs, dépression, carences, risques cardio-vasculaires).</p>
<h3>Chiffres clés</h3>
<ul>
<li>IPSOS : <strong>53 %</strong> des moins de 25 ans déclarent un « stress élevé » contre 24 % des plus de 65 ans.</li>
<li>Causes : précarité financière, manque de temps, hyper-connexion, compétition (examens, embauche).</li>
<li>Comportements de compensation : 40 % des 15-25 ans fument régulièrement.</li>
<li>Le suicide est la <strong>4e cause de décès</strong> des 15-19 ans dans le monde (UNICEF) ; aggravation depuis le Covid.</li>
</ul>
<h3>Prévention : les 5 comportements (Santé publique France)</h3>
<ul>
<li>Pratiquer une activité physique ;</li>
<li>Dormir suffisamment, à horaires réguliers ;</li>
<li>Prendre du temps pour des loisirs / un hobby ;</li>
<li>Aider les autres ;</li>
<li>Pratiquer la gratitude.</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Les troubles psychiques sont le 1er motif d'admission en <strong>ALD</strong> chez les jeunes. Ressources : personne de confiance, professionnel de santé, ligne <strong>Fil Santé Jeunes</strong> (12-25 ans, anonyme et gratuit).</div>`,
    refs: ["D'après tes cours (UE 1.2)"] },
];

export const qcm = [
  { ueId: "1.2", q: "Quels sont les deux critères centraux de l'économie de la santé ?", options: ["Rentabilité et profit", "Efficience et équité", "Croissance et inflation", "Offre et demande"], correct: 1,
    explication: "L'économie de la santé arbitre entre l'efficience (max de résultats avec les ressources) et l'équité (égalité d'accès aux soins de base).", ref: "UE 1.2", diff: 1 },
  { ueId: "1.2", q: "L'efficience économique consiste à :", options: ["Dépenser le plus possible", "Obtenir le maximum de résultats avec les ressources disponibles", "Soigner uniquement les riches", "Supprimer toute dépense de santé"], correct: 1,
    explication: "L'efficience = obtenir le maximum de résultats avec les ressources disponibles.", ref: "UE 1.2", diff: 1 },
  { ueId: "1.2", q: "Quelle conséquence de l'asymétrie d'information rend impossible un marché privé complet de l'assurance maladie ?", options: ["L'aléa moral", "La demande induite", "L'antisélection", "La capitation"], correct: 2,
    explication: "L'antisélection : une prime uniforme décourage les faibles risques ; le marché ne sélectionne que les grands risques.", ref: "UE 1.2", diff: 2 },
  { ueId: "1.2", q: "L'aléa moral désigne :", options: ["La surconsommation de soins quand le remboursement est total", "Le refus de soigner", "La fraude à la carte vitale", "Le dépassement d'honoraires"], correct: 0,
    explication: "L'aléa moral : des soins quasi-gratuits incitent à surconsommer sans bénéfice santé. Solution = copaiement.", ref: "UE 1.2", diff: 2 },
  { ueId: "1.2", q: "La demande induite est liée :", options: ["Au comportement des patients", "À la capacité du médecin payé à l'acte à générer de la demande", "Au vieillissement", "À l'inflation"], correct: 1,
    explication: "La demande induite vient du médecin rémunéré à l'acte, qui peut générer une demande inutile pour argumenter sa rémunération.", ref: "UE 1.2", diff: 2 },
  { ueId: "1.2", q: "Le système Bismarckien (Allemagne) repose sur :", options: ["L'impôt et des prestations uniformes", "Des cotisations sociales et une couverture socioprofessionnelle", "La charité", "Le marché libre"], correct: 1,
    explication: "Bismarck = assurance sociale, financement par cotisations sur salaires, couverture des salariés, gestion paritaire.", ref: "UE 1.2", diff: 2 },
  { ueId: "1.2", q: "Le modèle Beveridgien (Grande-Bretagne) est financé par :", options: ["Les cotisations sur salaires", "L'impôt sur les revenus", "Les mutuelles", "Les dons"], correct: 1,
    explication: "Beveridge = modèle national universel, financé par l'impôt, prestations uniformes, géré par l'État.", ref: "UE 1.2", diff: 1 },
  { ueId: "1.2", q: "La Sécurité sociale française a été créée en :", options: ["1927", "1945", "1996", "2004"], correct: 1,
    explication: "Créée le 4 octobre 1945, inspirée du modèle allemand (Bismarck).", ref: "UE 1.2", diff: 1 },
  { ueId: "1.2", q: "Que signifie l'ONDAM ?", options: ["Office National des Dépenses Annuelles Médicales", "Objectif National des Dépenses d'Assurance Maladie", "Organisme National de Défense de l'Assurance Maladie", "Observatoire des Maladies"], correct: 1,
    explication: "L'ONDAM est une enveloppe budgétaire votée chaque année (LFSS) qui régule prix et quantités.", ref: "UE 1.2", diff: 1 },
  { ueId: "1.2", q: "La CSBM correspond à :", options: ["La mesure la plus large des dépenses de santé", "La mesure la plus étroite des dépenses de santé", "Le budget des hôpitaux", "La cotisation des salariés"], correct: 1,
    explication: "La CSBM (Consommation de Soins et Biens Médicaux) est la mesure la plus étroite ; la DCS la plus large.", ref: "UE 1.2", diff: 2 },
  { ueId: "1.2", q: "L'épidémiologie s'intéresse avant tout :", options: ["À l'individu malade", "Au groupe (malades et sains)", "Aux seuls bien-portants", "Aux médecins"], correct: 1,
    explication: "L'épidémiologie s'intéresse au groupe (malades + sains), contrairement à la médecine clinique.", ref: "UE 1.2", diff: 1 },
  { ueId: "1.2", q: "Quel type d'étude permet seul d'établir formellement un lien de causalité ?", options: ["L'étude cas-témoins", "L'étude de cohorte", "L'essai randomisé", "L'étude descriptive"], correct: 2,
    explication: "L'essai randomisé : la randomisation crée des groupes homogènes, donc seule l'intervention explique les différences.", ref: "UE 1.2", diff: 3 },
  { ueId: "1.2", q: "Une étude cas-témoins est privilégiée pour :", options: ["Une maladie fréquente et rapide", "Une maladie rare avec long délai d'apparition", "Évaluer un vaccin", "Mesurer la natalité"], correct: 1,
    explication: "Pour une maladie rare au long délai (ex. cancer), l'étude cas-témoins (rétrospective) est moins longue et coûteuse.", ref: "UE 1.2", diff: 2 },
  { ueId: "1.2", q: "Quels indicateurs relèvent de l'épidémiologie descriptive ?", options: ["Prévalence, incidence, mortalité, létalité", "PIB et croissance", "Cotisations et impôts", "GHM et GHS"], correct: 0,
    explication: "L'épidémiologie descriptive mesure prévalence, incidence, mortalité et létalité.", ref: "UE 1.2", diff: 2 },
  { ueId: "1.2", q: "La loi HPST de 2009 a notamment créé :", options: ["La HAS", "Les ARS", "Santé publique France", "Le HCSP"], correct: 1,
    explication: "La loi HPST (21 juillet 2009) organise le système à l'échelon régional et crée les ARS.", ref: "UE 1.2", diff: 2 },
  { ueId: "1.2", q: "Quelle instance est une agence sanitaire indépendante chargée de l'évaluation médico-économique et de la certification ?", options: ["L'ARS", "Le HCSP", "La HAS", "La CNS"], correct: 2,
    explication: "La HAS (Haute Autorité de Santé) est indépendante : évaluation, recommandations de remboursement, certification.", ref: "UE 1.2", diff: 2 },
  { ueId: "1.2", q: "Depuis 2004, le financement des hôpitaux repose principalement sur :", options: ["Le prix de journée", "La dotation globale", "La tarification à l'activité (T2A)", "La capitation"], correct: 2,
    explication: "Depuis 2004, la T2A s'applique au public et au privé : classement en GHM, tarif via GHS.", ref: "UE 1.2", diff: 2 },
  { ueId: "1.2", q: "Dans la T2A, un patient est classé après son séjour dans un :", options: ["GHS", "GHM", "ONDAM", "ALD"], correct: 1,
    explication: "Le patient est classé en GHM (Groupe Homogène de Malades) ; à chaque GHM correspond un GHS (tarif).", ref: "UE 1.2", diff: 2 },
  { ueId: "1.2", q: "Quel mode de rémunération induit en moyenne des dépenses de santé plus élevées ?", options: ["Le salariat", "La capitation", "Le paiement à l'acte", "Le forfait"], correct: 2,
    explication: "Le paiement à l'acte : dépenses non connues a priori et risque de demande induite.", ref: "UE 1.2", diff: 2 },
  { ueId: "1.2", q: "La ROSP (mise en place en 2012) est :", options: ["Une taxe sur les médecins", "Une rémunération additionnelle sur objectifs de santé publique", "Le tarif d'une consultation", "Une cotisation sociale"], correct: 1,
    explication: "La ROSP est un complément non obligatoire, par points, sur 3 catégories : pathologies chroniques, efficience des prescriptions, prévention.", ref: "UE 1.2", diff: 2 },
  { ueId: "1.2", q: "Le ticket modérateur est :", options: ["Un supplément payé au médecin", "La part du tarif conventionnel non remboursée par l'AM", "Une aide sociale", "Le forfait hospitalier"], correct: 1,
    explication: "Le ticket modérateur = part du tarif conventionnel (tarif Sécu) non remboursée par l'Assurance Maladie.", ref: "UE 1.2", diff: 1 },
  { ueId: "1.2", q: "Être en ALD signifie :", options: ["Être remboursé à 100 % de tous ses soins", "Être exonéré du ticket modérateur pour les seuls soins en lien avec l'ALD", "Ne plus rien payer", "Avoir une complémentaire gratuite"], correct: 1,
    explication: "L'ALD exonère du ticket modérateur uniquement pour les soins liés à l'ALD ; restent forfaits, dépassements et soins hors ALD.", ref: "UE 1.2", diff: 3 },
  { ueId: "1.2", q: "Selon l'OMS, la santé est :", options: ["L'absence de maladie", "Un état de complet bien-être physique, mental et social", "Un bon résultat d'analyses", "La capacité à travailler"], correct: 1,
    explication: "OMS : « état de complet bien-être physique, mental et social et ne consiste pas seulement en l'absence de maladie ou d'infirmité ».", ref: "UE 1.2", diff: 1 },
  { ueId: "1.2", q: "La classification de Lalonde répartit les déterminants en :", options: ["2 groupes", "4 groupes", "12 groupes", "30 groupes"], correct: 1,
    explication: "Lalonde : biologie humaine, environnement, comportement, organisation des services de santé (4 groupes).", ref: "UE 1.2", diff: 2 },
  { ueId: "1.2", q: "Un déterminant à influence négative sur la santé est appelé :", options: ["Facteur de protection", "Facteur de risque", "Facteur endogène", "Indicateur"], correct: 1,
    explication: "Influence négative = facteur de risque ; influence positive = facteur de protection.", ref: "UE 1.2", diff: 1 },
  { ueId: "1.2", q: "Dans un questionnaire, une question qui n'induit pas et recueille des opinions personnalisées est :", options: ["Une question fermée", "Une question ouverte", "Une question filtre", "Une question à choix unique"], correct: 1,
    explication: "La question ouverte permet le recueil d'opinions et de réponses personnalisées, sans canaliser.", ref: "UE 1.2", diff: 1 },
];

export const flashcards = [
  { ueId: "1.2", recto: "Définis l'économie (au sens du cours).", verso: "Science qui étudie comment les ressources rares sont employées pour la satisfaction des besoins des hommes vivant en société." },
  { ueId: "1.2", recto: "Quels sont les 2 critères de l'économie de la santé ?", verso: "L'efficience (max de résultats avec les ressources) et l'équité (égalité d'accès aux soins de base)." },
  { ueId: "1.2", recto: "Cite les 3 conséquences de l'asymétrie d'information.", verso: "Antisélection, aléa moral et demande induite." },
  { ueId: "1.2", recto: "Solution à l'antisélection ?", verso: "Rendre l'assurance obligatoire (intervention publique)." },
  { ueId: "1.2", recto: "Différence Bismarck / Beveridge ?", verso: "Bismarck : assurance sociale, cotisations, salariés, paritarisme. Beveridge : universel, impôt, prestations uniformes, État." },
  { ueId: "1.2", recto: "Que signifie PUMA ?", verso: "Protection Universelle Maladie : couvre tous les résidents en France (logique de solidarité)." },
  { ueId: "1.2", recto: "Date de création de la Sécurité sociale ?", verso: "4 octobre 1945, inspirée du modèle allemand (Bismarck)." },
  { ueId: "1.2", recto: "Que régule l'ONDAM et qui le vote ?", verso: "Enveloppe budgétaire régulant prix et quantités des dépenses d'AM ; voté chaque année par le Parlement dans la LFSS." },
  { ueId: "1.2", recto: "CSBM vs DCS ?", verso: "CSBM = mesure la plus étroite des dépenses de santé ; DCS = mesure la plus large (DCSI pour les comparaisons internationales)." },
  { ueId: "1.2", recto: "Définition de l'épidémiologie ?", verso: "Étude de la distribution des problèmes de santé et de leurs déterminants dans les populations humaines, en vue de la prévention." },
  { ueId: "1.2", recto: "Les 3 types d'épidémiologie ?", verso: "Descriptive (fréquence), analytique/étiologique (facteurs de risque), évaluative (efficacité des actions)." },
  { ueId: "1.2", recto: "Quelle étude établit seule un lien de causalité ?", verso: "L'essai randomisé : la randomisation crée des groupes homogènes." },
  { ueId: "1.2", recto: "Étude de cohorte vs cas-témoins ?", verso: "Cohorte = prospective (suit exposés/non-exposés). Cas-témoins = rétrospective (compare l'exposition passée des malades/non-malades)." },
  { ueId: "1.2", recto: "Que crée la loi HPST de 2009 ?", verso: "Les ARS, qui pilotent la politique de santé au niveau régional." },
  { ueId: "1.2", recto: "Rôle de la HAS ?", verso: "Agence indépendante : évaluation médico-économique, recommandations de remboursement, certification, bonnes pratiques." },
  { ueId: "1.2", recto: "Que sont GHM et GHS dans la T2A ?", verso: "GHM = Groupe Homogène de Malades (classement du séjour) ; GHS = tarif en euros remboursé par l'AM pour ce GHM." },
  { ueId: "1.2", recto: "Les 3 modes de rémunération des médecins ?", verso: "Salariat, capitation (forfait × patients) et paiement à l'acte (prix × actes)." },
  { ueId: "1.2", recto: "Que signifie ROSP (2012) ?", verso: "Rémunération sur Objectifs de Santé Publique : complément par points (pathologies chroniques, efficience des prescriptions, prévention)." },
  { ueId: "1.2", recto: "Qu'est-ce que le ticket modérateur ?", verso: "La part du tarif conventionnel (tarif Sécu) non remboursée par l'Assurance Maladie." },
  { ueId: "1.2", recto: "Être en ALD = remboursé à 100 % ?", verso: "Non : exonération du ticket modérateur pour les seuls soins liés à l'ALD ; restent forfaits, dépassements et soins hors ALD." },
  { ueId: "1.2", recto: "Définition OMS de la santé ?", verso: "État de complet bien-être physique, mental et social, et pas seulement l'absence de maladie ou d'infirmité." },
  { ueId: "1.2", recto: "Les 4 groupes de déterminants selon Lalonde ?", verso: "Biologie humaine, environnement, comportement, organisation des services de santé." },
  { ueId: "1.2", recto: "Facteur de protection vs facteur de risque ?", verso: "Protection = influence positive sur la santé ; risque = influence négative." },
  { ueId: "1.2", recto: "Les 5 comportements protecteurs de la santé mentale (Santé publique France) ?", verso: "Activité physique, sommeil régulier, loisirs/hobby, aider les autres, pratiquer la gratitude." },
];
