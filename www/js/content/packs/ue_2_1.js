export const fiches = [
  { id: "f_2_1_cellule", ueId: "2.1", type: "cours",
    titre: "La cellule : structure et organites",
    resume: "La cellule est l'unite fonctionnelle du vivant, organisee autour d'organites specialises.",
    tags: ["cellule", "organites", "membrane", "noyau"],
    html: `<h3>Definition</h3>
<p>La <span class="key" data-term="cellule">cellule</span> est l'unite structurale et fonctionnelle de base des etres vivants. Le corps humain en compte plusieurs dizaines de milliers de milliards (de l'ordre de 10<sup>13</sup>). On distingue les cellules <strong>eucaryotes</strong> (a noyau vrai, cas de l'Homme) des cellules <strong>procaryotes</strong> (sans noyau, ex. bacteries).</p>
<h3>La membrane plasmique</h3>
<ul>
<li>Structure : <strong>bicouche phospholipidique</strong> avec des proteines enchassees (modele de la mosaique fluide).</li>
<li>Role : delimite la cellule, assure les echanges selectifs (permeabilite selective).</li>
</ul>
<h3>Les principaux organites</h3>
<table class="tbl">
<tr><th>Organite</th><th>Role</th></tr>
<tr><td>Noyau</td><td>Contient l'ADN, controle l'activite cellulaire</td></tr>
<tr><td>Mitochondrie</td><td>Production d'energie (ATP) : respiration cellulaire</td></tr>
<tr><td>Ribosomes</td><td>Synthese des proteines</td></tr>
<tr><td>Reticulum endoplasmique</td><td>Synthese (RE rugueux : proteines / RE lisse : lipides)</td></tr>
<tr><td>Appareil de Golgi</td><td>Maturation et tri des proteines</td></tr>
<tr><td>Lysosomes</td><td>Digestion intracellulaire (enzymes)</td></tr>
</table>
<div class="callout"><div class="callout-t">A retenir</div>La mitochondrie est la "centrale energetique" de la cellule : elle produit l'<span class="key" data-term="ATP">ATP</span>, molecule energetique universelle.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnemo</div>"MiRo GoLi No" : Mitochondrie (energie), Ribosome (proteines), Golgi (tri), Lysosome (digestion), Noyau (commande).</div>`,
    refs: ["UE 2.1"] },

  { id: "f_2_1_adn_genetique", ueId: "2.1", type: "cours",
    titre: "ADN, gene et synthese des proteines",
    resume: "L'ADN porte l'information genetique qui dirige la synthese des proteines via l'ARN.",
    tags: ["ADN", "gene", "ARN", "proteines", "genetique"],
    html: `<h3>L'ADN</h3>
<p>L'<span class="key" data-term="ADN">ADN</span> (acide desoxyribonucleique) est une molecule en <strong>double helice</strong>, situee dans le noyau. Il est constitue de nucleotides comportant 4 bases azotees : <strong>A, T, G, C</strong>.</p>
<ul>
<li>Complementarite des bases : <strong>A-T</strong> et <strong>G-C</strong>.</li>
<li>Un <span class="key" data-term="gene">gene</span> est un segment d'ADN codant une proteine.</li>
<li>L'ensemble de l'ADN forme le <strong>genome</strong>. Condense, il forme les <strong>chromosomes</strong> (46 chez l'Homme, soit 23 paires).</li>
</ul>
<h3>De l'ADN a la proteine</h3>
<ol>
<li><strong>Transcription</strong> (dans le noyau) : l'ADN est copie en ARN messager (ARNm). L'ARN contient l'uracile (U) a la place de la thymine (T).</li>
<li><strong>Traduction</strong> (dans le cytoplasme, par les ribosomes) : l'ARNm est lu par triplets (codons) pour assembler les acides amines en proteine.</li>
</ol>
<div class="callout"><div class="callout-t">Code genetique</div>Un <strong>codon</strong> = 3 nucleotides = 1 acide amine. Le code est universel et redondant.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnemo</div>ADN -> ARN -> Proteine : "Transcrire puis Traduire". On Transcrit dans le noyau, on Traduit dans le cytoplasme.</div>`,
    refs: ["UE 2.1"] },

  { id: "f_2_1_tissus", ueId: "2.1", type: "anatomie",
    titre: "Les quatre grands types de tissus",
    resume: "L'organisme est constitue de quatre tissus fondamentaux : epithelial, conjonctif, musculaire et nerveux.",
    tags: ["tissus", "histologie", "epithelium", "conjonctif"],
    html: `<h3>Niveaux d'organisation</h3>
<p>Cellules -> <span class="key" data-term="tissu">tissus</span> -> organes -> appareils/systemes -> organisme.</p>
<h3>Les 4 tissus fondamentaux</h3>
<table class="tbl">
<tr><th>Tissu</th><th>Role</th><th>Exemple</th></tr>
<tr><td>Epithelial</td><td>Revetement et secretion</td><td>Peau, muqueuses, glandes</td></tr>
<tr><td>Conjonctif</td><td>Soutien, liaison, defense</td><td>Os, sang, graisse, cartilage</td></tr>
<tr><td>Musculaire</td><td>Contraction, mouvement</td><td>Muscle squelettique, cardiaque, lisse</td></tr>
<tr><td>Nerveux</td><td>Transmission de l'information</td><td>Neurones, cerveau, nerfs</td></tr>
</table>
<div class="callout"><div class="callout-t">Bon a savoir</div>Le <strong>sang</strong> est un tissu conjonctif particulier (a matrice liquide : le plasma).</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnemo</div>"ECMN" : Epithelial, Conjonctif, Musculaire, Nerveux.</div>`,
    refs: ["UE 2.1"] },

  { id: "f_2_1_biochimie", ueId: "2.1", type: "cours",
    titre: "Biochimie : les grandes molecules du vivant",
    resume: "Glucides, lipides, protides et acides nucleiques sont les biomolecules essentielles au fonctionnement cellulaire.",
    tags: ["biochimie", "glucides", "lipides", "proteines", "metabolisme"],
    html: `<h3>Les biomolecules</h3>
<table class="tbl">
<tr><th>Molecule</th><th>Unite de base</th><th>Role principal</th></tr>
<tr><td>Glucides</td><td>Oses (glucose)</td><td>Energie rapide</td></tr>
<tr><td>Lipides</td><td>Acides gras</td><td>Reserve d'energie, membranes</td></tr>
<tr><td>Protides</td><td>Acides amines</td><td>Structure, enzymes, defense</td></tr>
<tr><td>Acides nucleiques</td><td>Nucleotides</td><td>Information genetique (ADN/ARN)</td></tr>
</table>
<h3>Metabolisme</h3>
<ul>
<li><strong>Anabolisme</strong> : construction de molecules (consomme de l'energie).</li>
<li><strong>Catabolisme</strong> : degradation des molecules (libere de l'energie).</li>
</ul>
<h3>Les enzymes</h3>
<p>Les <span class="key" data-term="enzyme">enzymes</span> sont des proteines qui <strong>catalysent</strong> (accelerent) les reactions biochimiques sans etre consommees. Elles sont specifiques d'un substrat.</p>
<div class="callout"><div class="callout-t">Glycemie</div>La glycemie normale a jeun est d'environ <strong>0,7 a 1,1 g/L</strong> (3,9 a 6,1 mmol/L). Elle est regulee par l'insuline et le glucagon.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnemo</div>"AnaBOlisme = BatiR / CataBOlisme = Casser". Ana = monter, Cata = descendre.</div>`,
    refs: ["UE 2.1"] },
];

export const qcm = [
  { ueId: "2.1", q: "Quelle est l'unite structurale et fonctionnelle de base du vivant ?", options: ["Le tissu", "La cellule", "L'organe", "La molecule"], correct: 1,
    explication: "La cellule est l'unite de base du vivant. Les tissus, organes et systemes sont des niveaux d'organisation superieurs constitues a partir des cellules.", ref: "UE 2.1", diff: 1 },

  { ueId: "2.1", q: "Quel organite est responsable de la production d'energie (ATP) ?", options: ["Le noyau", "Le ribosome", "La mitochondrie", "Le lysosome"], correct: 2,
    explication: "La mitochondrie est la centrale energetique de la cellule : elle produit l'ATP par la respiration cellulaire. Le noyau contient l'ADN, le ribosome synthetise les proteines, le lysosome assure la digestion intracellulaire.", ref: "UE 2.1", diff: 1 },

  { ueId: "2.1", q: "La membrane plasmique est principalement constituee de :", options: ["Une simple couche de proteines", "Une bicouche phospholipidique", "Une couche de cellulose", "Une bicouche de glucides"], correct: 1,
    explication: "La membrane plasmique est une bicouche phospholipidique dans laquelle sont enchassees des proteines (modele de la mosaique fluide). La cellulose concerne les vegetaux.", ref: "UE 2.1", diff: 1 },

  { ueId: "2.1", q: "Quel organite assure la synthese des proteines ?", options: ["L'appareil de Golgi", "Le ribosome", "Le lysosome", "La mitochondrie"], correct: 1,
    explication: "Les ribosomes assemblent les acides amines en proteines lors de la traduction. L'appareil de Golgi assure ensuite la maturation et le tri de ces proteines.", ref: "UE 2.1", diff: 1 },

  { ueId: "2.1", q: "Combien de paires de chromosomes possede une cellule humaine ?", options: ["21 paires", "23 paires", "46 paires", "24 paires"], correct: 1,
    explication: "La cellule humaine possede 46 chromosomes, soit 23 paires (dont une paire de chromosomes sexuels XX ou XY).", ref: "UE 2.1", diff: 1 },

  { ueId: "2.1", q: "Dans l'ADN, quelle base est complementaire de l'adenine (A) ?", options: ["La guanine (G)", "La cytosine (C)", "La thymine (T)", "L'uracile (U)"], correct: 2,
    explication: "Les regles de complementarite des bases dans l'ADN sont A-T et G-C. L'uracile (U) remplace la thymine dans l'ARN, pas dans l'ADN.", ref: "UE 2.1", diff: 2 },

  { ueId: "2.1", q: "Ou se deroule la transcription de l'ADN en ARN messager ?", options: ["Dans le cytoplasme", "Dans la mitochondrie", "Dans le noyau", "Dans le ribosome"], correct: 2,
    explication: "La transcription (copie de l'ADN en ARNm) a lieu dans le noyau. La traduction (synthese de la proteine) se deroule ensuite dans le cytoplasme au niveau des ribosomes.", ref: "UE 2.1", diff: 2 },

  { ueId: "2.1", q: "Un gene est defini comme :", options: ["Une cellule du noyau", "Un segment d'ADN codant une proteine", "Un type de proteine", "Un chromosome entier"], correct: 1,
    explication: "Un gene est un segment d'ADN portant l'information necessaire a la synthese d'une proteine. L'ensemble des genes constitue le genome.", ref: "UE 2.1", diff: 2 },

  { ueId: "2.1", q: "Quelle base azotee est presente dans l'ARN mais absente de l'ADN ?", options: ["L'adenine", "La guanine", "L'uracile", "La cytosine"], correct: 2,
    explication: "L'uracile (U) est specifique de l'ARN, ou il remplace la thymine (T) de l'ADN. A, G et C sont communes aux deux acides nucleiques.", ref: "UE 2.1", diff: 2 },

  { ueId: "2.1", q: "Combien de nucleotides composent un codon ?", options: ["1", "2", "3", "4"], correct: 2,
    explication: "Un codon est un triplet de 3 nucleotides de l'ARNm qui code pour un acide amine lors de la traduction.", ref: "UE 2.1", diff: 2 },

  { ueId: "2.1", q: "A quel grand type de tissu appartient l'epiderme de la peau ?", options: ["Tissu conjonctif", "Tissu epithelial", "Tissu musculaire", "Tissu nerveux"], correct: 1,
    explication: "L'epiderme est un tissu epithelial de revetement. Le tissu conjonctif assure le soutien (derme, os), le musculaire la contraction, le nerveux la transmission de l'information.", ref: "UE 2.1", diff: 1 },

  { ueId: "2.1", q: "Le sang est classe parmi les tissus :", options: ["Epitheliaux", "Conjonctifs", "Musculaires", "Nerveux"], correct: 1,
    explication: "Le sang est un tissu conjonctif particulier a matrice liquide (le plasma), dans lequel circulent les cellules sanguines.", ref: "UE 2.1", diff: 2 },

  { ueId: "2.1", q: "Quel tissu est responsable de la transmission de l'information ?", options: ["Le tissu epithelial", "Le tissu conjonctif", "Le tissu musculaire", "Le tissu nerveux"], correct: 3,
    explication: "Le tissu nerveux, constitue de neurones, assure la transmission et le traitement de l'information dans l'organisme.", ref: "UE 2.1", diff: 1 },

  { ueId: "2.1", q: "L'unite de base des proteines est :", options: ["Le nucleotide", "L'acide amine", "L'acide gras", "L'ose"], correct: 1,
    explication: "Les proteines sont des polymeres d'acides amines. Les nucleotides composent les acides nucleiques, les acides gras les lipides, les oses les glucides.", ref: "UE 2.1", diff: 1 },

  { ueId: "2.1", q: "Quelle est la principale fonction des glucides dans l'organisme ?", options: ["Stockage de l'information genetique", "Fourniture d'energie rapide", "Defense immunitaire", "Transmission nerveuse"], correct: 1,
    explication: "Les glucides (dont le glucose) sont la source d'energie rapide privilegiee des cellules. Les lipides constituent une reserve energetique a plus long terme.", ref: "UE 2.1", diff: 1 },

  { ueId: "2.1", q: "Une enzyme est une molecule qui :", options: ["Stocke l'energie", "Catalyse les reactions biochimiques", "Transporte l'oxygene exclusivement", "Forme la membrane cellulaire"], correct: 1,
    explication: "Une enzyme est une proteine catalytique : elle accelere une reaction biochimique de maniere specifique sans etre consommee au cours de la reaction.", ref: "UE 2.1", diff: 2 },

  { ueId: "2.1", q: "L'anabolisme correspond a :", options: ["La degradation de molecules avec liberation d'energie", "La construction de molecules consommant de l'energie", "Le transport de l'oxygene", "La division cellulaire"], correct: 1,
    explication: "L'anabolisme designe les reactions de synthese (construction) de molecules complexes, qui consomment de l'energie. Le catabolisme, a l'inverse, degrade les molecules et libere de l'energie.", ref: "UE 2.1", diff: 2 },

  { ueId: "2.1", q: "Quelle est la glycemie normale a jeun chez l'adulte ?", options: ["0,2 a 0,5 g/L", "0,7 a 1,1 g/L", "1,5 a 2 g/L", "2 a 3 g/L"], correct: 1,
    explication: "La glycemie normale a jeun se situe entre environ 0,7 et 1,1 g/L (3,9 a 6,1 mmol/L). Elle est regulee par l'insuline (hypoglycemiante) et le glucagon (hyperglycemiant).", ref: "UE 2.1", diff: 2 },

  { ueId: "2.1", q: "Quel organite assure la maturation et le tri des proteines ?", options: ["Le ribosome", "L'appareil de Golgi", "Le noyau", "La mitochondrie"], correct: 1,
    explication: "L'appareil de Golgi recoit les proteines synthetisees, les modifie (maturation), les trie et les adresse vers leur destination. Le ribosome ne fait que les synthetiser.", ref: "UE 2.1", diff: 2 },

  { ueId: "2.1", q: "Les lysosomes ont pour role principal :", options: ["La production d'ATP", "La synthese des lipides", "La digestion intracellulaire", "Le stockage de l'ADN"], correct: 2,
    explication: "Les lysosomes contiennent des enzymes hydrolytiques qui assurent la digestion intracellulaire (degradation des dechets et des particules ingerees).", ref: "UE 2.1", diff: 2 },

  { ueId: "2.1", q: "Une cellule procaryote (ex. une bacterie) se caracterise par :", options: ["La presence d'un noyau vrai", "L'absence de noyau delimite par une membrane", "L'absence de membrane plasmique", "Un grand nombre de mitochondries"], correct: 1,
    explication: "Les cellules procaryotes (bacteries) n'ont pas de noyau delimite par une membrane : leur ADN est libre dans le cytoplasme. Les cellules eucaryotes (Homme) possedent un noyau vrai.", ref: "UE 2.1", diff: 3 },

  { ueId: "2.1", q: "Quel ordre traduit correctement le flux de l'information genetique ?", options: ["Proteine -> ARN -> ADN", "ARN -> ADN -> Proteine", "ADN -> ARN -> Proteine", "ADN -> Proteine -> ARN"], correct: 2,
    explication: "Le dogme central de la biologie moleculaire suit le sens ADN -> ARN (transcription) -> Proteine (traduction).", ref: "UE 2.1", diff: 2 },
];

export const flashcards = [
  { ueId: "2.1", recto: "Quelle est l'unite de base du vivant ?", verso: "La cellule." },
  { ueId: "2.1", recto: "Quel organite produit l'energie (ATP) ?", verso: "La mitochondrie." },
  { ueId: "2.1", recto: "Que contient le noyau de la cellule ?", verso: "L'ADN (information genetique)." },
  { ueId: "2.1", recto: "De quoi est constituee la membrane plasmique ?", verso: "D'une bicouche phospholipidique avec des proteines enchassees." },
  { ueId: "2.1", recto: "Combien de chromosomes possede une cellule humaine ?", verso: "46 chromosomes, soit 23 paires." },
  { ueId: "2.1", recto: "Quelles bases sont complementaires dans l'ADN ?", verso: "A-T et G-C." },
  { ueId: "2.1", recto: "Quelle base remplace la thymine dans l'ARN ?", verso: "L'uracile (U)." },
  { ueId: "2.1", recto: "Qu'est-ce qu'un gene ?", verso: "Un segment d'ADN codant une proteine." },
  { ueId: "2.1", recto: "Combien de nucleotides forment un codon ?", verso: "Trois (3) nucleotides, codant un acide amine." },
  { ueId: "2.1", recto: "Quels sont les 4 grands types de tissus ?", verso: "Epithelial, conjonctif, musculaire et nerveux." },
  { ueId: "2.1", recto: "A quel tissu appartient le sang ?", verso: "Au tissu conjonctif (matrice liquide : le plasma)." },
  { ueId: "2.1", recto: "Quelle est l'unite de base des proteines ?", verso: "L'acide amine." },
  { ueId: "2.1", recto: "Qu'est-ce qu'une enzyme ?", verso: "Une proteine qui catalyse (accelere) les reactions biochimiques sans etre consommee." },
  { ueId: "2.1", recto: "Difference entre anabolisme et catabolisme ?", verso: "Anabolisme = construction (consomme de l'energie) ; catabolisme = degradation (libere de l'energie)." },
  { ueId: "2.1", recto: "Quelle est la glycemie normale a jeun ?", verso: "Environ 0,7 a 1,1 g/L." },
  { ueId: "2.1", recto: "Quel est le sens du flux de l'information genetique ?", verso: "ADN -> ARN (transcription) -> Proteine (traduction)." },
  { ueId: "2.1", recto: "Quel organite synthetise les proteines ?", verso: "Le ribosome." },
  { ueId: "2.1", recto: "Quelle hormone fait baisser la glycemie ?", verso: "L'insuline (le glucagon la fait monter)." },
];
