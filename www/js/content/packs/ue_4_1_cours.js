export const fiches = [
  { id: "fco_4_1_concepts_soin", ueId: "4.1", type: "cours",
    titre: "Concepts du soin : autonomie, dépendance, fragilité, dignité, pudeur, intimité",
    resume: "Les grands concepts qui fondent le prendre soin et le respect de la personne soignée.",
    tags: ["d'après tes cours","concepts","autonomie","dignité"],
    html: `<h3>Autonomie</h3>
<p>Une personne <span class="key" data-term="autonomie">autonome</span> est capable d'agir par elle-même, de répondre à ses propres besoins sans être influencée : possibilité d'effectuer sans aide les principales activités de la vie courante.</p>
<ul>
<li><strong>Physique</strong> : accomplir seul les actes de la vie quotidienne.</li>
<li><strong>Psychique</strong> : prendre des décisions et réfléchir.</li>
<li><strong>Sociale</strong> : entretenir des liens, vivre en contact avec les autres.</li>
<li><strong>Juridique</strong> : appliquer et faire appliquer seul ses droits et obligations, gérer ses biens.</li>
</ul>
<h3>Dépendance</h3>
<p>Impossibilité partielle ou totale d'effectuer sans aide les activités de la vie (physiques, psychiques, sociales) et de s'adapter à son environnement. Niveaux mesurés par la grille <span class="key" data-term="AGGIR">AGGIR</span> (Autonomie Gérontologie Groupe Iso-Ressources) : <strong>GIR 1 à GIR 6</strong> (GIR 1 = dépendance la plus élevée). Elle oriente vers la structure adaptée ou ouvre l'accès à l'<span class="key" data-term="APA">APA</span> (Allocation personnalisée d'autonomie).</p>
<h3>Fragilité</h3>
<p>État de vulnérabilité résultant d'une dégradation des réserves fonctionnelles, qui conduit à une perte d'autonomie. Le sujet âgé fragile a un risque plus élevé de dépendance, de chutes et d'hospitalisation.</p>
<h3>Dignité, pudeur, intimité</h3>
<ul>
<li><strong>Dignité</strong> : respect que mérite la personne ; la respecter dans sa globalité (valeurs, croyances, habitudes) et la garder actrice de sa prise en charge.</li>
<li><strong>Pudeur</strong> : disposition à éprouver de la gêne devant ce qui peut blesser ou devant l'évocation de choses très personnelles. Dénuder au minimum, fermer la porte, écarter les visiteurs avec l'accord du patient.</li>
<li><strong>Intimité</strong> : sentiment que les autres doivent être exclus de ce qui est l'affaire de la personne ; à respecter d'un point de vue strictement professionnel.</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>L'autonomie et la dépendance sont opposées mais ne s'excluent pas : une personne peut être autonome sur certains plans et dépendante sur d'autres. Le rôle soignant est de préserver les capacités restantes.</div>`,
    refs: ["D'après tes cours (UE 4.1)"] },

  { id: "fco_4_1_fragilite_vulnerabilite", ueId: "4.1", type: "cours",
    titre: "Fragilité et vulnérabilité chez la personne âgée",
    resume: "La fragilité comme syndrome clinique réversible et marqueur de risque, distincte de la vulnérabilité.",
    tags: ["d'après tes cours","fragilité","gériatrie"],
    html: `<h3>Définition (SFGG 2011)</h3>
<p>La <span class="key" data-term="fragilité">fragilité</span> est un <strong>syndrome clinique</strong> reflétant une diminution des capacités physiologiques de réserve qui altère les mécanismes d'adaptation au stress. Son expression est modulée par les comorbidités et des facteurs psychologiques, sociaux, économiques et comportementaux. C'est un <strong>marqueur de risque</strong> de mortalité, d'incapacité, de chutes, d'hospitalisation et d'entrée en institution. L'âge en est un déterminant majeur, mais pas la seule cause.</p>
<div class="callout"><div class="callout-t">À retenir</div>La fragilité s'inscrit dans un processus <strong>potentiellement réversible</strong> : la prise en charge de ses déterminants peut réduire ou retarder ses conséquences.</div>
<h3>Les 5 critères de Linda Fried</h3>
<ul>
<li>Perte de poids involontaire</li>
<li>Sensation subjective d'épuisement / fatigue</li>
<li>Activité physique réduite</li>
<li>Vitesse de marche ralentie (selon IMC et sexe)</li>
<li>Faiblesse / force musculaire diminuée</li>
</ul>
<table class="tbl">
<tr><th>Nombre de critères</th><th>État</th></tr>
<tr><td>Aucun</td><td>Patient robuste</td></tr>
<tr><td>1 à 2</td><td>Pré-fragile</td></tr>
<tr><td>3 ou plus</td><td>Fragile</td></tr>
</table>
<h3>Fragilité vs vulnérabilité</h3>
<p>La <span class="key" data-term="vulnérabilité">vulnérabilité</span> (du latin <em>vulnerare</em>, blesser) renvoie à la capacité à faire face et à la <span class="key" data-term="résilience">résilience</span> (capacité à retrouver son état après un choc). Chez le sujet âgé, ses facteurs de risque sont la dépendance fonctionnelle, la perte d'autonomie, la précarité sociale et la limitation d'accès aux soins. La fragilité sert de base au raisonnement clinique ; la vulnérabilité oriente le sens des interventions.</p>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« <strong>FRIED</strong> » : <strong>F</strong>aiblesse musculaire, <strong>R</strong>alentissement de la marche, <strong>I</strong>nactivité physique, <strong>É</strong>puisement ressenti, <strong>D</strong>iminution du poids.</div>`,
    refs: ["D'après tes cours (UE 4.1)"] },

  { id: "fco_4_1_equilibre_alimentaire", ueId: "4.1", type: "cours",
    titre: "Équilibre alimentaire : nutriments et familles d'aliments",
    resume: "Rôles des nutriments, apports énergétiques et composition d'un repas équilibré.",
    tags: ["d'après tes cours","nutrition","alimentation"],
    html: `<h3>Les nutriments</h3>
<p>Substances apportées par les aliments, qui assurent le développement et l'entretien de l'organisme.</p>
<table class="tbl">
<tr><th>Nutriment énergétique</th><th>Apport</th><th>Rôle principal</th></tr>
<tr><td>Protéines</td><td>4 kcal/g</td><td>Construction/réparation des tissus, immunité</td></tr>
<tr><td>Glucides</td><td>4 kcal/g</td><td>Énergie (muscles, cerveau)</td></tr>
<tr><td>Lipides</td><td>9 kcal/g</td><td>Énergie stockée, fonctionnement cellulaire</td></tr>
</table>
<ul>
<li><strong>Glucides simples</strong> : énergie rapide (excès défavorable). <strong>Glucides complexes</strong> : énergie de longue durée.</li>
<li><strong>Eau</strong> (corps ≈ 70 % d'eau) : transport des vitamines/minéraux, élimination des déchets, régulation thermique.</li>
<li><strong>Fibres</strong> (non absorbables, 0 kcal) : régulation du transit, de la glycémie et du cholestérol, prévention de maladies.</li>
<li><strong>Micronutriments</strong> : vitamines (A vision, C immunité, D métabolisme phospho-calcique, E antioxydant, K coagulation, B nutriments), minéraux (Ca os, P, Mg neurones/muscles, K contraction, Na régulation de l'eau), oligo-éléments (Fe hémoglobine, Iode thyroïde, Fluor émail).</li>
</ul>
<h3>Les 7 familles d'aliments</h3>
<ul>
<li>Viandes – poissons – œufs (protéines, fer, iode)</li>
<li>Produits laitiers (protéines, calcium, vit. A/B/D)</li>
<li>Fruits et légumes (glucides simples, fibres, vit. C/K, eau)</li>
<li>Féculents et produits céréaliers (glucides complexes, vit. B, fibres)</li>
<li>Matières grasses (lipides, vitamines liposolubles A/E)</li>
<li>Sucre et produits sucrés (plaisir, non indispensables)</li>
<li>Boissons</li>
</ul>
<h3>Le repas équilibré</h3>
<p>Entrée (légumes) + plat (viande/poisson/œuf, légumes, féculents, matière grasse) + produit laitier + fruit + eau. Toutes les familles présentes (sauf produits sucrés, exceptionnels).</p>
<div class="callout"><div class="callout-t">À retenir</div>L'équilibre se construit <strong>sur la semaine</strong>, pas sur un seul repas. Il n'y a ni aliment interdit ni aliment miracle : tout est question de choix et de quantité. Besoins ≈ 2000 kcal/j (femme 1800-2200, homme 2000-2600).</div>`,
    refs: ["D'après tes cours (UE 4.1)"] },

  { id: "fco_4_1_etat_nutritionnel", ueId: "4.1", type: "cours",
    titre: "Surveillance de l'état nutritionnel par l'IDE",
    resume: "La nutrition est un soin à part entière : poids, taille, IMC et évaluation des ingestas.",
    tags: ["d'après tes cours","nutrition","surveillance"],
    html: `<p>La nutrition est un <strong>soin à part entière</strong>. L'IDE surveille l'état nutritionnel au même titre que les autres constantes.</p>
<h3>Mesurer l'état nutritionnel</h3>
<ul>
<li><strong>Poids</strong> : patient en sous-vêtements et à jeun, toujours sur la même balance. Tenir compte de l'hydratation et de la rétention hydrosodée (ascite, œdèmes).</li>
<li><strong>Poids habituel</strong> : poids avant la maladie. <strong>Poids de forme</strong> : poids où le patient se perçoit au mieux.</li>
<li><strong>Perte de poids</strong> : exprimée en % par rapport au poids de forme/habituel (à 1 ou 6 mois).</li>
<li><strong>Taille</strong> : à la toise en position verticale ; si impossible (sujet âgé), estimation par la mesure talon-genou.</li>
<li><span class="key" data-term="IMC">IMC</span> = Poids (kg) / Taille (m²).</li>
<li><strong>Ingestas</strong> : évaluation au minimum par échelle analogique (EPA), au mieux par consultation diététique.</li>
</ul>
<h3>Si besoin : circonférence musculaire brachiale</h3>
<p>Permet de compléter l'évaluation lorsque la mesure du poids n'est pas possible.</p>
<h3>Le diététicien</h3>
<p>Professionnel de santé expert en nutrition. Sur prescription médicale, il établit un bilan diététique personnalisé et un plan de soin individualisé selon la pathologie. Il collabore avec l'IDE : les constantes recueillies par l'infirmier et les transmissions sont indispensables à une bonne prise en soin diététique.</p>
<div class="callout"><div class="callout-t">À retenir</div>Mesurer le poids, la taille, calculer l'IMC, suivre la perte/prise de poids, évaluer l'appétit — et <strong>alerter</strong> l'équipe médicale ou le diététicien si nécessaire.</div>`,
    refs: ["D'après tes cours (UE 4.1)"] },

  { id: "fco_4_1_toilette", ueId: "4.1", type: "cours",
    titre: "La toilette : un soin de confort, de relation et de respect",
    resume: "Objectifs, grands principes et règles d'hygiène/sécurité de la toilette.",
    tags: ["d'après tes cours","toilette","hygiène"],
    html: `<h3>Sens et objectifs de la toilette</h3>
<p>La toilette n'est pas qu'un geste technique : c'est un moment relationnel où s'instaure la <strong>confiance</strong>. Elle permet d'apporter bien-être et confort, de parler avec le patient, de le rassurer, de l'accompagner, de l'embellir, et de réaliser un <strong>bilan de l'état cutané</strong>.</p>
<ul>
<li>Bien-être et confort du patient</li>
<li>Respect de la pudeur et de la dignité</li>
<li>Communication (verbale et non verbale), stimulation, mise en mouvement</li>
<li>Surveillance de l'état cutané, mise en valeur (image positive)</li>
<li>Maintien de l'autonomie : faire des choix, ne pas faire à la place</li>
</ul>
<h3>Grands principes</h3>
<ul>
<li><strong>Organisation</strong> : préparer le matériel (linge, bassines, vêtements et produits du patient, serviettes, sacs poubelle) ; consulter les transmissions avant, les faire après ; nettoyer/désinfecter après le soin.</li>
<li><strong>Hygiène</strong> : lavage des mains avant et aux moments opportuns ; gants pour la toilette intime ; séparer linge propre/linge sale ; tenue propre + tablier à usage unique ; aller <strong>du propre vers le sale</strong> (sauf si personne souillée) ; matériel différencié haut/bas.</li>
<li><strong>Sens des gestes</strong> : toilette génito-anale du haut vers le bas (anale en dernier) ; homme : décalottage ; visage et yeux : de l'intérieur vers l'extérieur ; séchage par tamponnement, attention aux plis.</li>
<li><strong>Respect</strong> : porte fermée, frapper, dénuder au minimum, demander l'accord avant la toilette intime.</li>
<li><strong>Sécurité</strong> : freins et barrières au changement d'eau, lève-personne (sangles), sol non humide, chaussures, affaires à portée de main.</li>
<li>La toilette comprend aussi : coiffure, dents, rasage, maquillage, ongles, oreilles.</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Toujours rechercher le <strong>consentement</strong> et prévenir/expliquer chaque geste. Réaliser un soin sans l'accord de la personne, c'est une violation de son intimité.</div>`,
    refs: ["D'après tes cours (UE 4.1)"] },

  { id: "fco_4_1_besoins_maslow_henderson", ueId: "4.1", type: "cours",
    titre: "Besoins fondamentaux : Maslow et Virginia Henderson",
    resume: "Hiérarchie des besoins, distinction besoin/attente et les 14 besoins de Henderson.",
    tags: ["d'après tes cours","besoins","Henderson","Maslow"],
    html: `<h3>Besoin, demande, attente</h3>
<ul>
<li><strong>Besoin</strong> : nécessité de la nature ou de la vie sociale ressentie et/ou exprimée. Situation ou prise de conscience d'un manque.</li>
<li><strong>Besoin ressenti</strong> : perception de ses propres manques (explicite). <strong>Latent</strong> : implicite, montré mais non dit. <strong>Exprimé</strong> : besoin ressenti qui se dit, se traduit en demande appelant une réponse.</li>
<li><strong>Attente</strong> : à la suite d'un besoin ressenti/exprimé, espoir d'une réponse ou d'une satisfaction.</li>
</ul>
<h3>Pyramide de Maslow</h3>
<p>Les besoins humains sont organisés en hiérarchie : à la base les besoins physiologiques élémentaires, au sommet les besoins psychologiques et affectifs d'ordre supérieur. Un besoin n'est atteint que si les précédents sont satisfaits.</p>
<h3>Les 14 besoins de Virginia Henderson</h3>
<p>Infirmière, elle pose 14 besoins fondamentaux comme base conceptuelle des soins infirmiers : respirer, boire et manger, éliminer, se mouvoir et maintenir une bonne posture, dormir et se reposer, se vêtir et se dévêtir, maintenir la température corporelle, être propre et protéger ses téguments, éviter les dangers, communiquer, agir selon ses croyances et valeurs, s'occuper en vue de se réaliser, se récréer, apprendre.</p>
<div class="callout"><div class="callout-t">À retenir</div>Les besoins <strong>primaires</strong> (vitaux) doivent être satisfaits ; les besoins <strong>secondaires</strong> et les attentes participent au bien-être, à l'épanouissement et à l'autonomie de la personne.</div>`,
    refs: ["D'après tes cours (UE 4.1)"] },

  { id: "fco_4_1_humanitude_manutention", ueId: "4.1", type: "cours",
    titre: "Humanitude et manutention relationnelle (Gineste-Marescotti)",
    resume: "Les 4 piliers de l'humanitude, la capture sensorielle et les principes de la manutention.",
    tags: ["d'après tes cours","humanitude","manutention"],
    html: `<h3>Contexte</h3>
<p>Yves Gineste et Rosette Marescotti, professeurs de sport, animaient des formations « Gestes et Postures » : ils passent d'une approche hygiéniste et ergonomique de la manutention à une approche <strong>humaniste et réhabilitatrice</strong> → baisse des lombalgies de 70 %. La <span class="key" data-term="lombalgie">lombalgie</span> et les troubles musculo-squelettiques sont la 1ère cause d'arrêt de travail en EHPAD.</p>
<h3>L'humanitude</h3>
<p>Ensemble des particularités qui permettent à un homme de se reconnaître dans son espèce (rire, intelligence, verticalité, habit/habitat, famille/repas, socialisation, spiritualité, dignité, unicité…). C'est une <strong>philosophie du lien</strong>, du lien de reconnaissance, dont découle la méthodologie de soin Gineste-Marescotti.</p>
<h3>Les 4 piliers fondamentaux</h3>
<ul>
<li><strong>Le regard</strong> : horizontal, axial, proche, long.</li>
<li><strong>La parole</strong> : ton doux, calme, mots positifs.</li>
<li><strong>Le toucher</strong> : enveloppant, caressant, permanent.</li>
<li><strong>La verticalité</strong> : pilier identitaire (acquis vers 12 mois).</li>
</ul>
<h3>La capture sensorielle (5 étapes)</h3>
<ul>
<li>Les pré-préliminaires (le « toc-toc »)</li>
<li>Les préliminaires (entrée en relation)</li>
<li>Le rebouclage sensoriel (maintien de la relation)</li>
<li>La consolidation émotionnelle (valorisation)</li>
<li>La prise d'un rendez-vous (fluidité)</li>
</ul>
<h3>Principes et législation</h3>
<ul>
<li>Ne <strong>jamais</strong> faire un geste à la place de la personne.</li>
<li>Prévenir la personne à chaque action (prédiction, description).</li>
<li>Port de charges : limite de <strong>25 kg pour les femmes</strong>, <strong>55 kg pour les hommes</strong>.</li>
<li>3 causes de mal de dos : défaut d'organisation, de matériel, de technique.</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Si l'on tient compte des particularités de l'humanitude, on est soignant. Faire à la place du patient lui fait perdre ses capacités de la vie quotidienne.</div>`,
    refs: ["D'après tes cours (UE 4.1)"] },

  { id: "fco_4_1_distance_intrusion", ueId: "4.1", type: "cours",
    titre: "Distance relationnelle, proxémie et intrusion dans les soins",
    resume: "Les sphères de proxémie d'E.T. Hall, la juste distance et le vécu intrusif des soins.",
    tags: ["d'après tes cours","proxémie","relation","intrusion"],
    html: `<h3>Les sphères de proxémie (E.T. Hall)</h3>
<table class="tbl">
<tr><th>Sphère</th><th>Distance</th><th>Usage</th></tr>
<tr><td>Intime</td><td>15 à 45 cm</td><td>Proches, partenaire — c'est aussi celle du geste de soin</td></tr>
<tr><td>Personnelle</td><td>45 à 135 cm</td><td>Conversations particulières, amis</td></tr>
<tr><td>Sociale</td><td>1,20 à 3,60 m</td><td>Interactions avec inconnus, collègues</td></tr>
<tr><td>Publique</td><td>au-delà de 3,60 m</td><td>Prise de parole devant un groupe</td></tr>
</table>
<p>Cette distance varie selon les individus, la culture et le contexte. Son non-respect entraîne des interprétations (« il est collant », « il est froid »). Repérer les messages non verbaux (corps en arrière, mimiques…).</p>
<h3>La juste distance professionnelle</h3>
<p>La distance évoque le face-à-face, la proximité et la rencontre possibles, mais aussi l'évitement. Le geste de soin oblige à pénétrer la sphère intime : d'où l'importance du savoir-être.</p>
<h3>L'intrusion dans les soins</h3>
<p><span class="key" data-term="intrusion">Intrusif</span> = qui s'introduit de manière non souhaitée. <strong>Toute situation de soins est potentiellement intrusive</strong> : on demande des informations personnelles, on dévoile le corps. Selon la manière de conduire l'interaction, l'intrusion est consentie ou subie, source de gêne, d'inconfort ou de soulagement.</p>
<div class="callout"><div class="callout-t">À retenir</div>Points clés : prendre en compte l'environnement du soin, s'interroger en équipe sur le caractère intrusif, et faire <strong>comprendre le sens du soin</strong> au patient pour dépasser la pudeur initiale. Le patient devient alors partenaire du soin.</div>`,
    refs: ["D'après tes cours (UE 4.1)"] },
];

export const qcm = [
  { ueId: "4.1", q: "Que mesure la grille AGGIR ?", options: ["Le niveau de douleur","Le degré de dépendance (GIR 1 à 6)","L'état nutritionnel","Le risque d'escarre"], correct: 1,
    explication: "AGGIR (Autonomie Gérontologie Groupe Iso-Ressources) classe la dépendance de GIR 1 (la plus élevée) à GIR 6.", ref: "UE 4.1", diff: 1 },
  { ueId: "4.1", q: "Quel GIR correspond à la dépendance la plus élevée ?", options: ["GIR 6","GIR 4","GIR 1","GIR 3"], correct: 2,
    explication: "Le GIR 1 correspond au niveau de dépendance le plus élevé.", ref: "UE 4.1", diff: 1 },
  { ueId: "4.1", q: "Combien de formes d'autonomie le cours distingue-t-il ?", options: ["2","3","4","5"], correct: 2,
    explication: "Physique, psychique, sociale et juridique : 4 formes.", ref: "UE 4.1", diff: 1 },
  { ueId: "4.1", q: "À partir de combien de critères de Fried un patient est-il considéré comme fragile ?", options: ["1 critère","2 critères","3 critères","5 critères"], correct: 2,
    explication: "3 critères ou plus = fragile ; 1 à 2 = pré-fragile ; aucun = robuste.", ref: "UE 4.1", diff: 1 },
  { ueId: "4.1", q: "Lequel N'EST PAS un critère de fragilité de Linda Fried ?", options: ["Perte de poids involontaire","Hypertension artérielle","Vitesse de marche ralentie","Faiblesse musculaire"], correct: 1,
    explication: "Les 5 critères : perte de poids, épuisement, activité physique réduite, vitesse de marche ralentie, faiblesse musculaire. L'HTA n'en fait pas partie.", ref: "UE 4.1", diff: 2 },
  { ueId: "4.1", q: "Selon la SFGG, la fragilité est avant tout :", options: ["Une maladie irréversible","Un syndrome clinique potentiellement réversible","Un trouble psychiatrique","Une conséquence inévitable de l'âge"], correct: 1,
    explication: "C'est un syndrome clinique, marqueur de risque, dont le processus est potentiellement réversible.", ref: "UE 4.1", diff: 2 },
  { ueId: "4.1", q: "Quel est l'apport énergétique des lipides ?", options: ["4 kcal/g","7 kcal/g","9 kcal/g","2 kcal/g"], correct: 2,
    explication: "Lipides 9 kcal/g ; protéines et glucides 4 kcal/g.", ref: "UE 4.1", diff: 1 },
  { ueId: "4.1", q: "Quel apport énergétique partagent protéines et glucides ?", options: ["2 kcal/g","4 kcal/g","9 kcal/g","6 kcal/g"], correct: 1,
    explication: "Protéines et glucides apportent tous deux 4 kcal/g.", ref: "UE 4.1", diff: 1 },
  { ueId: "4.1", q: "Les fibres alimentaires :", options: ["Apportent 4 kcal/g","Sont des nutriments absorbables","N'ont aucune valeur énergétique mais régulent le transit","Sont à éviter"], correct: 2,
    explication: "Les fibres ne sont pas des nutriments (non absorbables, 0 kcal) mais régulent transit, glycémie et cholestérol.", ref: "UE 4.1", diff: 2 },
  { ueId: "4.1", q: "Combien de familles d'aliments le cours recense-t-il ?", options: ["5","6","7","9"], correct: 2,
    explication: "7 familles : viandes-poissons-œufs, produits laitiers, fruits/légumes, féculents, matières grasses, sucre, boissons.", ref: "UE 4.1", diff: 1 },
  { ueId: "4.1", q: "Comment calcule-t-on l'IMC ?", options: ["Poids (kg) × Taille (m)","Poids (kg) / Taille (m²)","Taille (m²) / Poids (kg)","Poids (kg) / Taille (m)"], correct: 1,
    explication: "IMC = Poids en kg divisé par la taille en mètres au carré.", ref: "UE 4.1", diff: 1 },
  { ueId: "4.1", q: "Quand la position verticale à la toise est impossible (sujet âgé), on estime la taille par :", options: ["La mesure talon-genou","La circonférence du bras","Le poids","L'âge"], correct: 0,
    explication: "La mesure talon-genou permet d'estimer la taille.", ref: "UE 4.1", diff: 2 },
  { ueId: "4.1", q: "L'équilibre alimentaire se construit :", options: ["Sur un seul repas","Sur une journée","Sur la semaine","Sur l'année"], correct: 2,
    explication: "L'équilibre se construit sur la semaine : ni aliment interdit ni aliment miracle.", ref: "UE 4.1", diff: 1 },
  { ueId: "4.1", q: "Lors d'une toilette génito-anale, le sens du geste est :", options: ["Du bas vers le haut","Du haut vers le bas, toilette anale en dernier","Peu importe","De l'extérieur vers l'intérieur"], correct: 1,
    explication: "On va du haut vers le bas, la toilette anale étant réalisée en dernier.", ref: "UE 4.1", diff: 2 },
  { ueId: "4.1", q: "Pour la toilette du visage, le nettoyage des yeux se fait :", options: ["De l'extérieur vers l'intérieur","De l'intérieur vers l'extérieur","Du bas vers le haut","Sans ordre particulier"], correct: 1,
    explication: "Les yeux se nettoient de l'angle interne vers l'angle externe.", ref: "UE 4.1", diff: 2 },
  { ueId: "4.1", q: "Quel principe fondamental partagent l'humanitude et la manutention relationnelle ?", options: ["Faire vite à la place du patient","Ne jamais faire un geste à la place de la personne","Limiter la communication","Éviter le toucher"], correct: 1,
    explication: "Ne jamais faire à la place de la personne et prévenir chaque geste (prédiction/description).", ref: "UE 4.1", diff: 1 },
  { ueId: "4.1", q: "Quels sont les 4 piliers de l'humanitude (Gineste-Marescotti) ?", options: ["Regard, parole, toucher, verticalité","Hygiène, sécurité, confort, autonomie","Vue, ouïe, odorat, toucher","Empathie, écoute, silence, distance"], correct: 0,
    explication: "Les 4 piliers : le regard, la parole, le toucher et la verticalité.", ref: "UE 4.1", diff: 2 },
  { ueId: "4.1", q: "La limite de port de charge est de :", options: ["25 kg pour les femmes, 55 kg pour les hommes","10 kg pour tous","55 kg pour les femmes, 25 kg pour les hommes","Aucune limite"], correct: 0,
    explication: "Limite : 25 kg pour une femme, 55 kg pour un homme.", ref: "UE 4.1", diff: 2 },
  { ueId: "4.1", q: "Selon la proxémie d'E.T. Hall, le geste de soin se situe dans quelle sphère ?", options: ["Sociale","Publique","Intime (15-45 cm)","Personnelle"], correct: 2,
    explication: "Le geste de soin s'effectue dans la sphère intime (15 à 45 cm).", ref: "UE 4.1", diff: 2 },
  { ueId: "4.1", q: "La distance sociale selon Hall correspond à :", options: ["15 à 45 cm","45 à 135 cm","1,20 à 3,60 m","au-delà de 3,60 m"], correct: 2,
    explication: "La distance sociale s'étend de 1,20 à 3,60 m (inconnus, collègues).", ref: "UE 4.1", diff: 2 },
  { ueId: "4.1", q: "Combien de besoins fondamentaux Virginia Henderson identifie-t-elle ?", options: ["7","10","14","5"], correct: 2,
    explication: "Virginia Henderson pose 14 besoins fondamentaux.", ref: "UE 4.1", diff: 1 },
  { ueId: "4.1", q: "Un besoin que la personne ne dit pas mais qu'elle montre est qualifié de :", options: ["Ressenti","Exprimé","Latent","Secondaire"], correct: 2,
    explication: "Le besoin latent est implicite : la personne ne le dit pas mais le montre.", ref: "UE 4.1", diff: 2 },
  { ueId: "4.1", q: "Avant une toilette intime, le soignant doit avant tout :", options: ["Aller le plus vite possible","Obtenir l'accord de la personne","Laisser la porte ouverte","Dénuder complètement le patient"], correct: 1,
    explication: "Il faut le consentement de la personne ; un refus doit être respecté. On dénude au minimum, porte fermée.", ref: "UE 4.1", diff: 1 },
  { ueId: "4.1", q: "La nutrition est, pour l'IDE :", options: ["Du seul ressort du diététicien","Un soin à part entière à surveiller comme une constante","Facultative à l'hôpital","Sans lien avec l'état de santé"], correct: 1,
    explication: "La nutrition est un soin à part entière ; l'IDE la surveille au même titre que les autres constantes.", ref: "UE 4.1", diff: 1 },
  { ueId: "4.1", q: "Quelle affirmation sur l'intrusion dans les soins est correcte ?", options: ["Aucun soin n'est intrusif","Toute situation de soins est potentiellement intrusive","Seuls les actes invasifs sont intrusifs","L'intrusion ne dépend pas du soignant"], correct: 1,
    explication: "Toute situation de soins est potentiellement intrusive ; comprendre le sens du soin aide à dépasser la pudeur.", ref: "UE 4.1", diff: 2 },
];

export const flashcards = [
  { ueId: "4.1", recto: "Quelles sont les 4 formes d'autonomie ?", verso: "Physique, psychique, sociale, juridique." },
  { ueId: "4.1", recto: "Que signifie AGGIR et que mesure cette grille ?", verso: "Autonomie Gérontologie Groupe Iso-Ressources : elle mesure la dépendance, de GIR 1 (la plus forte) à GIR 6." },
  { ueId: "4.1", recto: "Quels sont les 5 critères de fragilité de Linda Fried ?", verso: "Perte de poids involontaire, épuisement ressenti, activité physique réduite, vitesse de marche ralentie, faiblesse musculaire." },
  { ueId: "4.1", recto: "Robuste / pré-fragile / fragile : combien de critères ?", verso: "Robuste : 0 critère ; pré-fragile : 1 à 2 ; fragile : 3 ou plus." },
  { ueId: "4.1", recto: "La fragilité est-elle réversible ?", verso: "Oui : c'est un syndrome clinique potentiellement réversible si l'on prend en charge ses déterminants." },
  { ueId: "4.1", recto: "Apports énergétiques des 3 nutriments énergétiques ?", verso: "Protéines 4 kcal/g, glucides 4 kcal/g, lipides 9 kcal/g." },
  { ueId: "4.1", recto: "Quelles sont les 7 familles d'aliments ?", verso: "Viandes-poissons-œufs ; produits laitiers ; fruits et légumes ; féculents/céréaliers ; matières grasses ; sucre ; boissons." },
  { ueId: "4.1", recto: "Formule de l'IMC ?", verso: "IMC = Poids (kg) / Taille (m²)." },
  { ueId: "4.1", recto: "Sur quelle période se construit l'équilibre alimentaire ?", verso: "Sur la semaine — ni aliment interdit, ni aliment miracle." },
  { ueId: "4.1", recto: "Sens de la toilette génito-anale ?", verso: "Du haut vers le bas, toilette anale en dernier (homme : décalottage)." },
  { ueId: "4.1", recto: "Sens du nettoyage des yeux lors de la toilette du visage ?", verso: "De l'intérieur vers l'extérieur." },
  { ueId: "4.1", recto: "Quels sont les 4 piliers de l'humanitude ?", verso: "Le regard, la parole, le toucher, la verticalité." },
  { ueId: "4.1", recto: "Qui a conçu la méthodologie de soin de l'humanitude ?", verso: "Yves Gineste et Rosette Marescotti." },
  { ueId: "4.1", recto: "Les 2 principes d'action de la manutention relationnelle ?", verso: "Ne jamais faire à la place de la personne ; prévenir/expliquer chaque geste (prédiction-description)." },
  { ueId: "4.1", recto: "Limites de port de charge homme / femme ?", verso: "55 kg pour un homme, 25 kg pour une femme." },
  { ueId: "4.1", recto: "Les 4 sphères de proxémie d'E.T. Hall et leurs distances ?", verso: "Intime 15-45 cm, personnelle 45-135 cm, sociale 1,20-3,60 m, publique au-delà de 3,60 m." },
  { ueId: "4.1", recto: "Combien de besoins fondamentaux selon Virginia Henderson ?", verso: "14 besoins fondamentaux." },
  { ueId: "4.1", recto: "Différence entre besoin ressenti, latent et exprimé ?", verso: "Ressenti : perçu (explicite) ; latent : montré mais non dit (implicite) ; exprimé : dit et traduit en demande." },
  { ueId: "4.1", recto: "Définition de la pudeur ?", verso: "Disposition à éprouver de la gêne devant ce qui peut blesser ou devant l'évocation de choses très personnelles." },
  { ueId: "4.1", recto: "Une situation de soin peut-elle être intrusive ?", verso: "Oui : toute situation de soins est potentiellement intrusive ; comprendre son sens aide à dépasser la pudeur." },
  { ueId: "4.1", recto: "Que permet la circonférence musculaire brachiale ?", verso: "Compléter l'évaluation nutritionnelle quand la mesure du poids n'est pas possible." },
  { ueId: "4.1", recto: "Quelles distinctions : poids habituel vs poids de forme ?", verso: "Poids habituel = poids avant la maladie ; poids de forme = poids où le patient se perçoit au mieux." },
];
