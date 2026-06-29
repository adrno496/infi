export const fiches = [
  { id: "f_2_10_agents_infectieux", ueId: "2.10", type: "cours",
    titre: "Les agents infectieux et la chaîne de transmission",
    resume: "Panorama des agents infectieux et des maillons de la chaîne épidémiologique de l'infection.",
    tags: ["microbiologie", "transmission", "agents infectieux"],
    html: `<h3>Les grands types d'agents infectieux</h3>
<ul>
<li><strong>Bactéries</strong> : micro-organismes <span class="key" data-term="procaryote">procaryotes</span> (sans noyau), visibles au microscope optique, sensibles aux antibiotiques.</li>
<li><strong>Virus</strong> : parasites intracellulaires obligatoires, non sensibles aux antibiotiques, traités par antiviraux.</li>
<li><strong>Champignons</strong> (mycoses) : levures (ex. <em>Candida albicans</em>) et filamenteux (ex. <em>Aspergillus</em>), traités par antifongiques.</li>
<li><strong>Parasites</strong> : protozoaires (ex. <em>Plasmodium</em>, paludisme) et helminthes (vers).</li>
<li><strong>Agents transmissibles non conventionnels</strong> : prions (ex. maladie de Creutzfeldt-Jakob), résistants aux désinfectants usuels et à la stérilisation standard.</li>
</ul>
<h3>La chaîne épidémiologique de l'infection</h3>
<p>La transmission d'une infection suppose l'enchaînement de plusieurs maillons. Rompre un seul maillon suffit à empêcher l'infection.</p>
<table class="tbl">
<tr><th>Maillon</th><th>Exemple</th></tr>
<tr><td>Réservoir / source</td><td>Humain, animal, environnement (eau, surfaces)</td></tr>
<tr><td>Porte de sortie</td><td>Voies respiratoires, selles, plaies, sang</td></tr>
<tr><td>Mode de transmission</td><td>Contact, gouttelettes, air, vecteur</td></tr>
<tr><td>Porte d'entrée</td><td>Muqueuses, peau lésée, voie parentérale</td></tr>
<tr><td>Hôte réceptif</td><td>Patient immunodéprimé, âge extrême</td></tr>
</table>
<div class="callout"><div class="callout-t">À retenir</div>L'hygiène des mains rompt le mode de transmission par contact, principal mode de transmission des infections associées aux soins.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« RP-MT-PE-HR » : Réservoir, Porte de sortie, Mode de Transmission, Porte d'Entrée, Hôte Réceptif.</div>`,
    refs: ["UE 2.10"] },

  { id: "f_2_10_hygiene_mains", ueId: "2.10", type: "cours",
    titre: "Hygiène des mains et précautions standard",
    resume: "Les techniques d'hygiène des mains et les précautions standard, socle de la prévention du risque infectieux.",
    tags: ["hygiène", "mains", "précautions standard"],
    html: `<h3>L'hygiène des mains : geste n°1 de prévention</h3>
<p>L'hygiène des mains est la mesure la plus efficace pour prévenir les <span class="key" data-term="IAS">infections associées aux soins (IAS)</span>.</p>
<ul>
<li><strong>Friction hydro-alcoolique (FHA)</strong> : technique de référence sur mains <strong>visiblement propres et sèches</strong>, durée 20 à 30 secondes.</li>
<li><strong>Lavage simple au savon</strong> : indiqué si mains souillées, visiblement sales, ou en cas de contact avec un patient porteur de <em>Clostridioides difficile</em> ou de la gale (la FHA est inefficace sur les spores et le sarcopte).</li>
</ul>
<h3>Les 5 indications de l'OMS</h3>
<ul>
<li>Avant tout contact avec le patient.</li>
<li>Avant un geste aseptique.</li>
<li>Après un risque d'exposition à un liquide biologique.</li>
<li>Après contact avec le patient.</li>
<li>Après contact avec l'environnement du patient.</li>
</ul>
<h3>Précautions standard</h3>
<p>Elles s'appliquent à <strong>tout patient, quel que soit son statut infectieux</strong> : hygiène des mains, port de gants en cas de contact avec un liquide biologique, tablier/surblouse, masque et protection oculaire selon le risque de projection, gestion des excreta et des déchets, prévention des AES.</p>
<div class="callout"><div class="callout-t">Pré-requis FHA</div>Manches courtes, ongles courts sans vernis, pas de bijoux ni de montre aux mains et poignets (« tenue mains nues »).</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« 2 AVANT, 3 APRÈS » : avant contact et avant geste aseptique ; après exposition, après contact patient, après contact environnement.</div>`,
    refs: ["UE 2.10"] },

  { id: "f_2_10_precautions_complementaires", ueId: "2.10", type: "cours",
    titre: "Précautions complémentaires et isolement",
    resume: "Les trois types de précautions complémentaires (contact, gouttelettes, air) qui s'ajoutent aux précautions standard.",
    tags: ["isolement", "précautions complémentaires", "BMR"],
    html: `<h3>Principe</h3>
<p>Les <span class="key" data-term="précautions complémentaires">précautions complémentaires (PCC)</span> s'ajoutent aux précautions standard lorsqu'un agent à transmission spécifique est suspecté ou identifié. Elles sont signalées par un pictogramme à l'entrée de la chambre.</p>
<table class="tbl">
<tr><th>Type</th><th>Transmission</th><th>EPI clé</th><th>Exemples</th></tr>
<tr><td>Contact (C)</td><td>Contact direct/indirect</td><td>Tablier + gants, chambre seule</td><td>BMR (SARM), C. difficile, gale</td></tr>
<tr><td>Gouttelettes (G)</td><td>Sécrétions > 5 µm, courte distance</td><td>Masque chirurgical</td><td>Grippe, méningocoque, coqueluche</td></tr>
<tr><td>Air (A)</td><td>Particules < 5 µm en suspension</td><td>Masque FFP2, chambre à pression négative</td><td>Tuberculose, rougeole, varicelle</td></tr>
</table>
<h3>Bactéries multi-résistantes (BMR) et hautement résistantes émergentes (BHRe)</h3>
<ul>
<li><strong>BMR</strong> : ex. SARM (staphylocoque résistant à la méticilline), entérobactéries productrices de BLSE.</li>
<li><strong>BHRe</strong> : entérocoques résistants aux glycopeptides (ERG/ERV), entérobactéries productrices de carbapénémases (EPC) ; mesures renforcées (dépistage, personnel dédié).</li>
</ul>
<div class="callout"><div class="callout-t">Vigilance</div>Le masque FFP2 (Air) protège le soignant ; le masque chirurgical (Gouttelettes) limite surtout l'émission de gouttelettes par le porteur.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« TGV » : Tuberculose/rougeole = air, Grippe/méningo = gouttelettes, Voisinage/contact = BMR.</div>`,
    refs: ["UE 2.10"] },

  { id: "f_2_10_asepsie_antisepsie", ueId: "2.10", type: "cours",
    titre: "Asepsie, antisepsie, désinfection et stérilisation",
    resume: "Distinguer les niveaux de traitement des micro-organismes : asepsie, antisepsie, désinfection, stérilisation.",
    tags: ["asepsie", "antiseptique", "stérilisation"],
    html: `<h3>Définitions à ne pas confondre</h3>
<ul>
<li><strong>Asepsie</strong> : ensemble des mesures qui <em>préviennent</em> l'apport de micro-organismes (méthode préventive, ex. champ stérile).</li>
<li><strong>Antisepsie</strong> : opération qui élimine ou inactive les micro-organismes sur les <strong>tissus vivants</strong> (peau, muqueuses) avec un <span class="key" data-term="antiseptique">antiseptique</span>.</li>
<li><strong>Désinfection</strong> : élimination des micro-organismes sur des <strong>surfaces ou matériel inertes</strong> avec un désinfectant.</li>
<li><strong>Stérilisation</strong> : destruction de <strong>tous</strong> les micro-organismes, y compris les spores (état stérile : absence de tout germe viable).</li>
</ul>
<h3>Les grandes familles d'antiseptiques</h3>
<ul>
<li>Dérivés iodés : <strong>povidone iodée</strong> (Bétadine).</li>
<li>Biguanides : <strong>chlorhexidine</strong>.</li>
<li>Dérivés chlorés : <strong>Dakin</strong> (hypochlorite de sodium).</li>
<li>Alcools : alcool à 70°.</li>
</ul>
<div class="callout"><div class="callout-t">Règle d'or</div>Ne jamais mélanger deux familles d'antiseptiques (ex. povidone iodée et chlorhexidine) : risque d'inactivation et de réactions. Respecter le temps de contact et de séchage.</div>
<h3>Préparation cutanée avant geste invasif</h3>
<p>Détersion (savon antiseptique) puis rinçage, séchage, et application de l'antiseptique en respectant le temps d'action, en allant du plus propre vers le plus sale.</p>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« Vivant = antiseptique, Inerte = désinfectant ». Stérile = ZÉRO germe, spores comprises.</div>`,
    refs: ["UE 2.10"] }
];

export const qcm = [
  { ueId: "2.10", q: "Quel agent infectieux est sensible aux antibiotiques ?",
    options: ["Les virus", "Les bactéries", "Les prions", "Les champignons"],
    correct: 1,
    explication: "Les antibiotiques agissent sur les bactéries. Les virus relèvent des antiviraux, les champignons des antifongiques, et les prions résistent aux traitements et désinfectants usuels.",
    ref: "UE 2.10", diff: 1 },

  { ueId: "2.10", q: "La friction hydro-alcoolique (FHA) doit durer environ :",
    options: ["5 secondes", "10 secondes", "20 à 30 secondes", "2 minutes"],
    correct: 2,
    explication: "La FHA doit couvrir toutes les surfaces des mains pendant 20 à 30 secondes jusqu'au séchage complet pour être efficace.",
    ref: "UE 2.10", diff: 1 },

  { ueId: "2.10", q: "Dans quelle situation la friction hydro-alcoolique est-elle INEFFICACE et remplacée par un lavage au savon ?",
    options: ["Contact avec un patient porteur de SARM", "Contact avec un patient atteint de Clostridioides difficile", "Avant un geste aseptique", "Après contact avec l'environnement"],
    correct: 1,
    explication: "Les produits hydro-alcooliques sont inactifs sur les spores de Clostridioides difficile (et sur le sarcopte de la gale). Un lavage mécanique au savon est requis pour les éliminer.",
    ref: "UE 2.10", diff: 2 },

  { ueId: "2.10", q: "Les précautions standard s'appliquent :",
    options: ["Uniquement aux patients porteurs de BMR", "Uniquement en réanimation", "À tout patient, quel que soit son statut infectieux", "Uniquement aux patients immunodéprimés"],
    correct: 2,
    explication: "Les précautions standard sont la base de la prévention : elles s'appliquent à tous les patients en permanence, indépendamment du statut infectieux connu ou non.",
    ref: "UE 2.10", diff: 1 },

  { ueId: "2.10", q: "Quel masque est requis pour les précautions complémentaires de type Air (ex. tuberculose) ?",
    options: ["Masque chirurgical", "Masque FFP2", "Aucun masque", "Lunettes de protection seules"],
    correct: 1,
    explication: "Les précautions Air imposent un masque de protection respiratoire FFP2 pour le soignant, car les particules infectieuses (< 5 µm) restent en suspension dans l'air.",
    ref: "UE 2.10", diff: 2 },

  { ueId: "2.10", q: "La grippe et le méningocoque relèvent de précautions complémentaires de type :",
    options: ["Contact", "Air", "Gouttelettes", "Aucune"],
    correct: 2,
    explication: "Ces agents se transmettent par gouttelettes (sécrétions > 5 µm émises à courte distance) : un masque chirurgical est indiqué.",
    ref: "UE 2.10", diff: 2 },

  { ueId: "2.10", q: "Quelle affirmation définit correctement la STÉRILISATION ?",
    options: ["Élimination des germes sur la peau", "Destruction de tous les micro-organismes y compris les spores", "Prévention de l'apport de germes", "Réduction des germes sur une surface"],
    correct: 1,
    explication: "La stérilisation vise la destruction de TOUS les micro-organismes, spores comprises, pour obtenir un état stérile (absence de tout germe viable).",
    ref: "UE 2.10", diff: 1 },

  { ueId: "2.10", q: "L'antisepsie s'applique sur :",
    options: ["Les surfaces inertes", "Le matériel chirurgical", "Les tissus vivants (peau, muqueuses)", "L'air ambiant"],
    correct: 2,
    explication: "L'antisepsie concerne les tissus vivants. Sur les surfaces ou le matériel inertes, on parle de désinfection.",
    ref: "UE 2.10", diff: 1 },

  { ueId: "2.10", q: "Pourquoi ne faut-il pas mélanger deux familles d'antiseptiques ?",
    options: ["Cela coûte plus cher", "Risque d'inactivation chimique et de réactions cutanées", "Cela colore la peau", "Aucune raison, c'est recommandé"],
    correct: 1,
    explication: "Le mélange de familles différentes (ex. povidone iodée et chlorhexidine) peut entraîner une inactivation des produits et des réactions cutanées. On reste sur une même gamme.",
    ref: "UE 2.10", diff: 2 },

  { ueId: "2.10", q: "Que signifie l'acronyme SARM ?",
    options: ["Staphylocoque aureus résistant à la méticilline", "Streptocoque associé aux risques microbiens", "Syndrome aigu respiratoire mortel", "Salmonelle résistante"],
    correct: 0,
    explication: "Le SARM est un Staphylococcus aureus résistant à la méticilline, bactérie multi-résistante (BMR) justifiant des précautions complémentaires Contact.",
    ref: "UE 2.10", diff: 2 },

  { ueId: "2.10", q: "Une infection associée aux soins (IAS) est dite nosocomiale lorsqu'elle est contractée :",
    options: ["Avant toute admission", "Dans un établissement de santé, absente à l'admission", "Uniquement à domicile", "Seulement après la sortie"],
    correct: 1,
    explication: "Une infection nosocomiale est une IAS contractée dans un établissement de santé, ni présente ni en incubation à l'admission (généralement délai d'au moins 48 h).",
    ref: "UE 2.10", diff: 2 },

  { ueId: "2.10", q: "Parmi les 5 indications de l'hygiène des mains de l'OMS, laquelle est correcte ?",
    options: ["Une fois par jour", "Avant tout contact avec le patient", "Seulement après les soins", "Uniquement avant le repas"],
    correct: 1,
    explication: "Les 5 indications OMS sont : avant contact patient, avant geste aseptique, après exposition à un liquide biologique, après contact patient, après contact avec son environnement.",
    ref: "UE 2.10", diff: 1 },

  { ueId: "2.10", q: "Quel équipement de protection est prioritaire en cas de risque de projection de liquide biologique au visage ?",
    options: ["Gants uniquement", "Masque et protection oculaire", "Surchaussures", "Charlotte seule"],
    correct: 1,
    explication: "En cas de risque de projection, les précautions standard imposent un masque et une protection oculaire (lunettes ou visière) en plus des gants et du tablier.",
    ref: "UE 2.10", diff: 2 },

  { ueId: "2.10", q: "La tuberculose pulmonaire bacillifère nécessite des précautions de type :",
    options: ["Contact", "Gouttelettes", "Air", "Standard uniquement"],
    correct: 2,
    explication: "Le bacille tuberculeux se transmet par voie aérienne (particules < 5 µm) : précautions Air avec masque FFP2 et chambre individuelle, idéalement à pression négative.",
    ref: "UE 2.10", diff: 2 },

  { ueId: "2.10", q: "Quel est le pré-requis vestimentaire pour réaliser une hygiène des mains efficace ?",
    options: ["Porter des gants en permanence", "Avoir les avant-bras nus, sans bijou ni montre", "Garder une alliance", "Mettre du vernis transparent"],
    correct: 1,
    explication: "La tenue « mains nues » est obligatoire : manches courtes, ongles courts sans vernis, ni bague, ni montre, ni bracelet, qui sont des réservoirs de germes et empêchent une friction complète.",
    ref: "UE 2.10", diff: 1 },

  { ueId: "2.10", q: "Une BHRe (bactérie hautement résistante émergente) correspond par exemple à :",
    options: ["Un staphylocoque doré banal", "Une entérobactérie productrice de carbapénémase (EPC)", "Un virus de la grippe", "Un champignon Candida"],
    correct: 1,
    explication: "Les BHRe incluent les entérobactéries productrices de carbapénémases (EPC) et les entérocoques résistants aux glycopeptides (ERG). Elles imposent des mesures de maîtrise renforcées.",
    ref: "UE 2.10", diff: 3 },

  { ueId: "2.10", q: "Lors de la préparation cutanée avant un geste invasif, dans quel ordre applique-t-on l'antiseptique ?",
    options: ["Du plus sale vers le plus propre", "Du plus propre vers le plus sale", "Peu importe le sens", "Toujours en cercle de l'extérieur vers le centre"],
    correct: 1,
    explication: "On applique l'antiseptique du plus propre vers le plus sale (par exemple du centre du site vers la périphérie) pour ne pas recontaminer la zone du geste, après détersion et séchage.",
    ref: "UE 2.10", diff: 2 },

  { ueId: "2.10", q: "Quelle est la mesure la plus efficace pour prévenir les infections associées aux soins ?",
    options: ["Le port systématique de gants stériles", "L'hygiène des mains", "L'antibioprophylaxie de tous les patients", "Le port permanent d'un masque FFP2"],
    correct: 1,
    explication: "L'hygiène des mains, en particulier la friction hydro-alcoolique, est reconnue comme la mesure la plus efficace et la moins coûteuse pour prévenir les IAS.",
    ref: "UE 2.10", diff: 1 },

  { ueId: "2.10", q: "Le port de gants pour un soin :",
    options: ["Remplace l'hygiène des mains", "Ne dispense pas de l'hygiène des mains avant et après", "Doit être permanent toute la journée", "Est inutile en cas de contact avec du sang"],
    correct: 1,
    explication: "Les gants ne remplacent jamais l'hygiène des mains : on réalise une friction avant de les enfiler et après les avoir retirés. Ils ne sont pas une seconde peau.",
    ref: "UE 2.10", diff: 1 },

  { ueId: "2.10", q: "En cas d'accident d'exposition au sang (AES) par piqûre, le premier geste immédiat est :",
    options: ["Ne pas faire saigner, laver à l'eau et au savon puis antisepsie par trempage", "Faire saigner activement la plaie pour expulser le sang", "Mettre un pansement et continuer le soin", "Ne pas laver pour ne pas étendre le germe"],
    correct: 0,
    explication: "Conduite à tenir AES : ne PAS faire saigner (le saignement provoqué peut majorer la pénétration virale), nettoyer à l'eau et au savon, rincer, puis réaliser une antisepsie par trempage (Dakin ou povidone iodée) au moins 5 minutes, avant la déclaration et l'évaluation du risque.",
    ref: "UE 2.10", diff: 3 },

  { ueId: "2.10", q: "La gale et le Clostridioides difficile partagent une particularité concernant l'hygiène des mains :",
    options: ["La FHA suffit toujours", "Le lavage au savon est nécessaire car la FHA est insuffisante", "Aucune hygiène n'est requise", "Seul le port de gants est utile"],
    correct: 1,
    explication: "Pour la gale (sarcopte) et les spores de C. difficile, la friction hydro-alcoolique est insuffisante : un lavage mécanique au savon (et le port de gants) est nécessaire pour l'élimination physique.",
    ref: "UE 2.10", diff: 3 },

  { ueId: "2.10", q: "Quelle est la différence essentielle entre asepsie et antisepsie ?",
    options: ["Aucune, ce sont des synonymes", "L'asepsie prévient l'apport de germes, l'antisepsie élimine les germes présents sur un tissu vivant", "L'asepsie s'applique au matériel, l'antisepsie à l'air", "L'antisepsie est préventive, l'asepsie est curative"],
    correct: 1,
    explication: "L'asepsie est une démarche préventive (empêcher l'introduction de germes, ex. champ stérile) ; l'antisepsie est une action sur les tissus vivants déjà colonisés (peau, muqueuses) avec un antiseptique.",
    ref: "UE 2.10", diff: 2 },

  { ueId: "2.10", q: "Quel est l'objectif principal du tri des déchets d'activités de soins (DASRI) ?",
    options: ["Réduire le coût de l'établissement", "Prévenir le risque infectieux et les AES, et protéger l'environnement", "Gagner du temps lors des soins", "Remplacer l'hygiène des mains"],
    correct: 1,
    explication: "Les déchets d'activités de soins à risques infectieux (DASRI) sont triés et conditionnés (collecteur rigide pour les objets piquants/coupants/tranchants) pour prévenir le risque infectieux, les AES et protéger l'environnement.",
    ref: "UE 2.10", diff: 2 },

  { ueId: "2.10", q: "Le virus de la varicelle (VZV) impose en milieu de soins des précautions complémentaires de type :",
    options: ["Contact seulement", "Gouttelettes seulement", "Air (et contact)", "Aucune"],
    correct: 2,
    explication: "La varicelle se transmet par voie aérienne (particules en suspension) et par contact avec les lésions cutanées : précautions Air (masque FFP2, chambre individuelle) associées aux précautions Contact.",
    ref: "UE 2.10", diff: 3 },

  { ueId: "2.10", q: "Un antiseptique majeur est, par définition, un produit :",
    options: ["Qui détruit toutes les spores en quelques secondes", "À large spectre, bactéricide, virucide et fongicide, utilisable sur la peau", "Réservé aux surfaces inertes", "Sans aucun effet sur les bactéries"],
    correct: 1,
    explication: "Un antiseptique majeur (povidone iodée, chlorhexidine, dérivés chlorés) a un large spectre d'activité (bactéricide, virucide, fongicide) et s'applique sur les tissus vivants. Aucun antiseptique n'est sporicide de façon fiable.",
    ref: "UE 2.10", diff: 2 }
];

export const flashcards = [
  { ueId: "2.10", recto: "Quelle est la mesure n°1 de prévention des infections associées aux soins ?", verso: "L'hygiène des mains (friction hydro-alcoolique en priorité)." },
  { ueId: "2.10", recto: "Combien de temps dure une friction hydro-alcoolique efficace ?", verso: "20 à 30 secondes, jusqu'au séchage complet des mains." },
  { ueId: "2.10", recto: "Quels sont les 3 types de précautions complémentaires ?", verso: "Contact, Gouttelettes et Air." },
  { ueId: "2.10", recto: "Quel masque pour les précautions Air (tuberculose) ?", verso: "Un masque FFP2 (protection respiratoire), avec chambre individuelle à pression négative." },
  { ueId: "2.10", recto: "Quel masque pour les précautions Gouttelettes (grippe) ?", verso: "Un masque chirurgical." },
  { ueId: "2.10", recto: "Quand la FHA est-elle inefficace ?", verso: "Sur les spores de Clostridioides difficile et sur le sarcopte de la gale : il faut un lavage au savon." },
  { ueId: "2.10", recto: "Différence entre antisepsie et désinfection ?", verso: "Antisepsie = tissus vivants (peau, muqueuses) ; désinfection = surfaces et matériel inertes." },
  { ueId: "2.10", recto: "Que détruit la stérilisation ?", verso: "Tous les micro-organismes, y compris les spores (état stérile)." },
  { ueId: "2.10", recto: "Que signifie SARM ?", verso: "Staphylococcus aureus résistant à la méticilline, une bactérie multi-résistante (BMR)." },
  { ueId: "2.10", recto: "À qui s'appliquent les précautions standard ?", verso: "À tout patient, quel que soit son statut infectieux, en permanence." },
  { ueId: "2.10", recto: "Citez deux familles d'antiseptiques.", verso: "Dérivés iodés (povidone iodée), biguanides (chlorhexidine), dérivés chlorés (Dakin), alcools." },
  { ueId: "2.10", recto: "Peut-on mélanger deux familles d'antiseptiques ?", verso: "Non : risque d'inactivation chimique et de réactions cutanées." },
  { ueId: "2.10", recto: "Qu'est-ce qu'une infection nosocomiale ?", verso: "Une IAS contractée dans un établissement de santé, absente à l'admission (délai d'au moins 48 h)." },
  { ueId: "2.10", recto: "Les gants remplacent-ils l'hygiène des mains ?", verso: "Non : friction avant de les enfiler et après les avoir retirés." },
  { ueId: "2.10", recto: "Quelles sont les 5 indications OMS de l'hygiène des mains ?", verso: "Avant contact patient, avant geste aseptique, après exposition à un liquide biologique, après contact patient, après contact avec son environnement." },
  { ueId: "2.10", recto: "Premiers gestes après un AES (piqûre) ?", verso: "Ne pas faire saigner, laver à l'eau et au savon, puis antisepsie par trempage (Dakin/povidone iodée) au moins 5 minutes, puis déclaration." },
  { ueId: "2.10", recto: "Qu'est-ce qu'une BHRe ?", verso: "Bactérie hautement résistante émergente (ex. EPC, ERG), justifiant des mesures de maîtrise renforcées." },
  { ueId: "2.10", recto: "Qu'est-ce que l'asepsie ?", verso: "L'ensemble des mesures préventives empêchant l'apport de micro-organismes (ex. champ stérile)." },
  { ueId: "2.10", recto: "Pourquoi les prions sont-ils particuliers en hygiène ?", verso: "Ils résistent aux désinfectants usuels et à la stérilisation standard (agents transmissibles non conventionnels)." },
  { ueId: "2.10", recto: "Quels EPI pour les précautions Contact (ex. SARM) ?", verso: "Tablier/surblouse à usage unique, gants, chambre individuelle de préférence." },
  { ueId: "2.10", recto: "Que sont les DASRI ?", verso: "Les déchets d'activités de soins à risques infectieux, triés et conditionnés (collecteur rigide pour les objets piquants/coupants) pour prévenir le risque infectieux." }
];
