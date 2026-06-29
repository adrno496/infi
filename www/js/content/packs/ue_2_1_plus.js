export const fiches = [
  { id: "fx_ue_2_1_plus_metabolisme", ueId: "2.1", type: "cours",
    titre: "Métabolisme énergétique : de l'ATP au glucose",
    resume: "Comment la cellule produit et utilise l'énergie à partir des nutriments.",
    tags: ["métabolisme", "ATP", "glycolyse", "respiration cellulaire"],
    html: `<h3>L'ATP, monnaie énergétique de la cellule</h3>
<p>L'<span class="key" data-term="ATP">ATP</span> (adénosine triphosphate) est la molécule qui stocke et transporte l'énergie dans toutes les cellules. L'énergie est libérée par hydrolyse de la liaison entre les groupements phosphate : ATP devient ADP + Pi. Cette réaction est réversible : les cellules régénèrent l'ATP en permanence.</p>
<div class="callout"><div class="callout-t">Pourquoi c'est important en soins</div>Toute fonction vitale (contraction musculaire, transport actif, synthèse) consomme de l'ATP. Un déficit d'apport en oxygène ou en glucose compromet la production d'ATP : c'est le mécanisme de la souffrance cellulaire (ischémie, hypoglycémie sévère).</div>
<h3>Les grandes voies du catabolisme du glucose</h3>
<ul>
<li><strong>Glycolyse</strong> : dans le <span class="key" data-term="cytoplasme">cytoplasme</span>, dégradation du glucose (6 carbones) en 2 pyruvates. Rendement faible mais <strong>anaérobie</strong> (sans oxygène) : 2 ATP nets.</li>
<li><strong>Cycle de Krebs</strong> : dans la <span class="key" data-term="mitochondrie">mitochondrie</span>, oxydation complète, production de coenzymes réduits (NADH, FADH2).</li>
<li><strong>Chaîne respiratoire</strong> : sur la membrane interne mitochondriale, l'oxygène est l'accepteur final d'électrons. <strong>Aérobie</strong> : production massive d'ATP.</li>
</ul>
<p>Au total, l'oxydation complète d'une molécule de glucose en aérobie fournit beaucoup plus d'ATP que la glycolyse anaérobie seule. C'est pourquoi l'oxygène est indispensable à un rendement énergétique élevé.</p>
<table class="tbl">
<tr><th>Voie</th><th>Localisation</th><th>O2 requis</th><th>Rendement relatif</th></tr>
<tr><td>Glycolyse</td><td>Cytoplasme</td><td>Non</td><td>Faible (2 ATP nets)</td></tr>
<tr><td>Krebs + chaîne respiratoire</td><td>Mitochondrie</td><td>Oui</td><td>Élevé</td></tr>
</table>
<h3>Quand l'oxygène manque : la voie lactique</h3>
<p>En absence d'oxygène (effort intense, état de choc, ischémie), le pyruvate est converti en <span class="key" data-term="lactate">lactate</span>. Cette voie permet de poursuivre la glycolyse mais produit des ions H+ : l'accumulation de lactate participe à l'<strong>acidose métabolique</strong>. La lactatémie est un marqueur clinique d'hypoperfusion tissulaire en réanimation.</p>
<div class="callout"><div class="callout-t">Lien clinique</div>Un lactate artériel élevé chez un patient en état de choc traduit une production d'énergie anaérobie par manque d'oxygène tissulaire : signe de gravité.</div>
<h3>Anabolisme et réserves</h3>
<p>L'organisme stocke l'énergie sous forme de <span class="key" data-term="glycogène">glycogène</span> (foie et muscle) et de triglycérides (tissu adipeux). À jeun, le foie libère du glucose par glycogénolyse puis par <span class="key" data-term="néoglucogenèse">néoglucogenèse</span> (synthèse de glucose à partir d'acides aminés, lactate, glycérol).</p>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« GLY-co-LYSE casse le GLUcose » : la terminaison -LYSE = destruction. À l'inverse, -GENÈSE / -SYNTHÈSE = fabrication (néogluco-GENÈSE = fabriquer du glucose).</div>`,
    refs: ["Référentiel IFSI 2009, UE 2.1 Biologie fondamentale", "Marieb, Anatomie et physiologie humaines"] },

  { id: "fx_ue_2_1_plus_genetique", ueId: "2.1", type: "cours",
    titre: "Génétique : de l'ADN à la protéine",
    resume: "Structure du matériel génétique et expression des gènes en protéines.",
    tags: ["génétique", "ADN", "ARN", "mutation"],
    html: `<h3>Le support de l'information : l'ADN</h3>
<p>L'<span class="key" data-term="ADN">ADN</span> (acide désoxyribonucléique) est une double hélice formée de deux brins complémentaires. Chaque maillon est un nucléotide composé d'un sucre (désoxyribose), d'un phosphate et d'une base azotée. Les bases s'apparient strictement : <strong>A-T</strong> (adénine-thymine) et <strong>G-C</strong> (guanine-cytosine).</p>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« A va avec T, G va avec C ». Astuce : G et C ont chacun 3 lettres rondes et forment une liaison plus solide (3 ponts hydrogène contre 2 pour A-T).</div>
<p>L'ADN est condensé avec des protéines (histones) pour former la <span class="key" data-term="chromatine">chromatine</span>, qui se compacte en <span class="key" data-term="chromosome">chromosomes</span> lors de la division. L'espèce humaine possède 46 chromosomes, soit 23 paires : 22 paires d'autosomes et 1 paire de chromosomes sexuels (XX chez la femme, XY chez l'homme).</p>
<h3>De l'ADN à la protéine : deux étapes</h3>
<ul>
<li><strong>Transcription</strong> : dans le noyau, un gène (segment d'ADN) est copié en <span class="key" data-term="ARN messager">ARN messager</span>. Dans l'ARN, l'uracile (U) remplace la thymine.</li>
<li><strong>Traduction</strong> : dans le cytoplasme, les <span class="key" data-term="ribosome">ribosomes</span> lisent l'ARNm par triplets (codons). Chaque codon code un acide aminé. L'enchaînement des acides aminés forme une protéine.</li>
</ul>
<table class="tbl">
<tr><th>Étape</th><th>Lieu</th><th>Produit</th></tr>
<tr><td>Transcription</td><td>Noyau</td><td>ARN messager</td></tr>
<tr><td>Traduction</td><td>Cytoplasme (ribosomes)</td><td>Protéine</td></tr>
</table>
<h3>Mutations et hérédité</h3>
<p>Une <span class="key" data-term="mutation">mutation</span> est une modification de la séquence d'ADN. Elle peut être sans effet, délétère (maladie génétique) ou parfois favorable. Certaines maladies suivent une transmission identifiable :</p>
<ul>
<li><strong>Autosomique récessive</strong> : la maladie s'exprime si les deux allèles sont atteints (ex. mucoviscidose, drépanocytose).</li>
<li><strong>Autosomique dominante</strong> : un seul allèle atteint suffit (ex. maladie de Huntington).</li>
<li><strong>Liée au chromosome X</strong> : touche surtout les garçons (ex. hémophilie).</li>
</ul>
<div class="callout"><div class="callout-t">Lien clinique</div>Comprendre le mode de transmission est essentiel pour le conseil génétique et l'accompagnement infirmier des familles concernées par une maladie héréditaire.</div>`,
    refs: ["Référentiel IFSI 2009, UE 2.1 Biologie fondamentale", "Campbell, Biologie"] },

  { id: "fx_ue_2_1_plus_equilibres", ueId: "2.1", type: "cours",
    titre: "Équilibres de l'organisme : homéostasie, eau et pH",
    resume: "Maintien du milieu intérieur : compartiments hydriques, ions et équilibre acido-basique.",
    tags: ["homéostasie", "équilibre acido-basique", "pH", "osmose"],
    html: `<h3>L'homéostasie, principe fondamental</h3>
<p>L'<span class="key" data-term="homéostasie">homéostasie</span> est la capacité de l'organisme à maintenir constant son milieu intérieur (température, glycémie, pH, hydratation) malgré les variations externes. Elle repose sur des boucles de régulation (rétrocontrôle, souvent négatif) impliquant capteurs, centres intégrateurs et effecteurs.</p>
<h3>Les compartiments hydriques</h3>
<p>L'eau représente environ 60 % du poids corporel de l'adulte. Elle se répartit en deux grands secteurs :</p>
<ul>
<li><strong>Secteur intracellulaire</strong> : majoritaire, riche en potassium (K+).</li>
<li><strong>Secteur extracellulaire</strong> : plasma + liquide interstitiel, riche en sodium (Na+).</li>
</ul>
<p>L'eau circule entre compartiments par <span class="key" data-term="osmose">osmose</span> : elle se déplace vers le milieu le plus concentré en solutés. La <span class="key" data-term="osmolarité">osmolarité</span> conditionne donc les mouvements d'eau, d'où l'importance de la nature des solutés perfusés.</p>
<div class="callout"><div class="callout-t">Lien clinique</div>Une solution est dite isotonique quand elle a la même osmolarité que le plasma (NaCl 0,9 %, glucosé 5 %) : elle ne provoque pas de mouvement d'eau dommageable. Une solution hypotonique fait gonfler les cellules, une hypertonique les déshydrate.</div>
<h3>L'équilibre acido-basique</h3>
<p>Le <span class="key" data-term="pH">pH</span> sanguin artériel est étroitement régulé autour de 7,35 à 7,45. En dessous de 7,35 : <strong>acidose</strong> ; au-dessus de 7,45 : <strong>alcalose</strong>. Trois systèmes maintiennent ce pH :</p>
<table class="tbl">
<tr><th>Système</th><th>Mécanisme</th><th>Rapidité</th></tr>
<tr><td>Tampons (bicarbonates)</td><td>Neutralisation chimique des H+</td><td>Immédiat</td></tr>
<tr><td>Poumon</td><td>Élimination du CO2 par ventilation</td><td>Minutes</td></tr>
<tr><td>Rein</td><td>Réabsorption de bicarbonates, excrétion d'H+</td><td>Heures à jours</td></tr>
</table>
<p>On distingue les troubles d'origine <strong>respiratoire</strong> (liés au CO2) et <strong>métabolique</strong> (liés aux bicarbonates). L'organisme compense : un poumon hyperventile en cas d'acidose métabolique (respiration de Kussmaul de l'acidocétose diabétique).</p>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« pH bas = aciDose, pH haut = alcalOse ». Pour l'origine : si le CO2 varie dans le même sens que le pH attendu, c'est respiratoire ; sinon, c'est métabolique.</div>
<h3>Régulation de la glycémie</h3>
<p>Deux hormones pancréatiques s'opposent : l'<span class="key" data-term="insuline">insuline</span> (fait baisser la glycémie en favorisant l'entrée du glucose dans les cellules) et le <span class="key" data-term="glucagon">glucagon</span> (fait monter la glycémie par glycogénolyse hépatique). Leur déséquilibre est au cœur du diabète.</p>`,
    refs: ["Référentiel IFSI 2009, UE 2.1 Biologie fondamentale", "Marieb, Anatomie et physiologie humaines"] },
];

export const qcm = [
  { ueId: "2.1", q: "Quelle molécule constitue la principale réserve d'énergie immédiatement utilisable par la cellule ?",
    options: ["ADN", "ATP", "Glycogène", "Cholestérol"], correct: 1,
    explication: "L'ATP (adénosine triphosphate) est la monnaie énergétique cellulaire. Son hydrolyse en ADP + Pi libère l'énergie utilisée par les fonctions cellulaires. Le glycogène est une réserve, mais elle doit d'abord être dégradée pour produire de l'ATP.",
    ref: "UE 2.1 - Métabolisme énergétique", diff: 1 },

  { ueId: "2.1", q: "Où se déroule la glycolyse ?",
    options: ["Dans la mitochondrie", "Dans le noyau", "Dans le cytoplasme", "Dans le réticulum endoplasmique"], correct: 2,
    explication: "La glycolyse, première étape de la dégradation du glucose, se déroule dans le cytoplasme et ne nécessite pas d'oxygène (voie anaérobie). Le cycle de Krebs et la chaîne respiratoire, eux, ont lieu dans la mitochondrie.",
    ref: "UE 2.1 - Métabolisme énergétique", diff: 1 },

  { ueId: "2.1", q: "Quel est l'accepteur final d'électrons de la chaîne respiratoire mitochondriale ?",
    options: ["Le dioxyde de carbone", "Le glucose", "L'oxygène", "Le lactate"], correct: 2,
    explication: "L'oxygène est l'accepteur final d'électrons de la chaîne respiratoire, ce qui en fait une voie aérobie au rendement énergétique élevé. Sans oxygène, la cellule bascule vers la voie lactique, beaucoup moins productive.",
    ref: "UE 2.1 - Métabolisme énergétique", diff: 2 },

  { ueId: "2.1", q: "En situation d'ischémie (manque d'oxygène), quel composé s'accumule et contribue à l'acidose ?",
    options: ["Le glucose", "Le lactate", "Le glycogène", "Le bicarbonate"], correct: 1,
    explication: "En anaérobie, le pyruvate est transformé en lactate, avec production d'ions H+. La lactatémie est un marqueur d'hypoperfusion tissulaire utilisé en réanimation pour évaluer la gravité d'un état de choc.",
    ref: "UE 2.1 - Métabolisme énergétique", diff: 2 },

  { ueId: "2.1", q: "Quel organe assure la néoglucogenèse à jeun ?",
    options: ["Le pancréas", "Le foie", "La rate", "L'estomac"], correct: 1,
    explication: "Le foie est le principal organe de la néoglucogenèse : il synthétise du glucose à partir d'acides aminés, de lactate et de glycérol pour maintenir la glycémie pendant le jeûne. Il assure aussi la glycogénolyse.",
    ref: "UE 2.1 - Métabolisme énergétique", diff: 2 },

  { ueId: "2.1", q: "Quelles bases azotées sont complémentaires dans l'ADN ?",
    options: ["A-G et T-C", "A-T et G-C", "A-C et G-T", "A-U et G-C"], correct: 1,
    explication: "Dans l'ADN, l'adénine s'apparie avec la thymine (A-T) et la guanine avec la cytosine (G-C). L'uracile (U) ne se trouve que dans l'ARN, où il remplace la thymine.",
    ref: "UE 2.1 - Génétique", diff: 1 },

  { ueId: "2.1", q: "Combien de chromosomes possède une cellule humaine somatique normale ?",
    options: ["23", "44", "46", "48"], correct: 2,
    explication: "La cellule humaine somatique contient 46 chromosomes, soit 23 paires : 22 paires d'autosomes et une paire de chromosomes sexuels (XX ou XY). Les gamètes, eux, n'en contiennent que 23.",
    ref: "UE 2.1 - Génétique", diff: 1 },

  { ueId: "2.1", q: "Où se déroule la transcription de l'ADN en ARN messager ?",
    options: ["Dans le cytoplasme", "Dans le noyau", "Sur les ribosomes", "Dans la mitochondrie"], correct: 1,
    explication: "La transcription se déroule dans le noyau, où l'ADN est copié en ARN messager. L'ARNm migre ensuite dans le cytoplasme où il est traduit en protéine par les ribosomes.",
    ref: "UE 2.1 - Génétique", diff: 2 },

  { ueId: "2.1", q: "Quelle base remplace la thymine dans l'ARN ?",
    options: ["La guanine", "La cytosine", "L'uracile", "L'adénine"], correct: 2,
    explication: "Dans l'ARN, l'uracile (U) remplace la thymine présente dans l'ADN. C'est l'une des différences chimiques majeures entre ADN et ARN, avec le sucre (ribose au lieu de désoxyribose).",
    ref: "UE 2.1 - Génétique", diff: 2 },

  { ueId: "2.1", q: "La mucoviscidose se transmet sur un mode autosomique récessif. Que cela implique-t-il ?",
    options: ["Un seul allèle muté suffit à exprimer la maladie", "Les deux allèles doivent être mutés pour exprimer la maladie", "Seuls les garçons sont atteints", "La maladie n'est pas héréditaire"], correct: 1,
    explication: "En transmission autosomique récessive, il faut que les deux allèles du gène soient mutés pour que la maladie s'exprime. Un individu porteur d'un seul allèle muté est porteur sain. Cela explique le conseil génétique chez les couples à risque.",
    ref: "UE 2.1 - Génétique", diff: 3 },

  { ueId: "2.1", q: "Qu'est-ce que l'homéostasie ?",
    options: ["La division cellulaire", "Le maintien constant du milieu intérieur", "La synthèse des protéines", "L'élimination des déchets"], correct: 1,
    explication: "L'homéostasie est la capacité de l'organisme à maintenir constant son milieu intérieur (température, pH, glycémie, hydratation) malgré les variations externes, grâce à des boucles de régulation.",
    ref: "UE 2.1 - Équilibres de l'organisme", diff: 1 },

  { ueId: "2.1", q: "Quel ion est majoritaire dans le secteur intracellulaire ?",
    options: ["Le sodium (Na+)", "Le potassium (K+)", "Le calcium (Ca2+)", "Le chlore (Cl-)"], correct: 1,
    explication: "Le potassium (K+) est le cation majoritaire du secteur intracellulaire, tandis que le sodium (Na+) domine le secteur extracellulaire. Ce gradient est maintenu par la pompe Na+/K+ ATPase et conditionne l'excitabilité cellulaire.",
    ref: "UE 2.1 - Équilibres de l'organisme", diff: 2 },

  { ueId: "2.1", q: "Par quel phénomène l'eau se déplace-t-elle entre les compartiments de l'organisme ?",
    options: ["La filtration", "L'osmose", "La phagocytose", "La diffusion facilitée"], correct: 1,
    explication: "L'eau se déplace par osmose, du milieu le moins concentré vers le milieu le plus concentré en solutés, jusqu'à équilibre des osmolarités. C'est pourquoi la nature des solutés perfusés influence les mouvements d'eau.",
    ref: "UE 2.1 - Équilibres de l'organisme", diff: 2 },

  { ueId: "2.1", q: "Une solution isotonique au plasma est, par exemple :",
    options: ["L'eau pure pour perfusion", "Le NaCl à 0,9 %", "Le NaCl à 10 %", "Le glucosé à 30 %"], correct: 1,
    explication: "Le NaCl à 0,9 % (sérum physiologique) et le glucosé à 5 % sont isotoniques au plasma : ils ne provoquent pas de mouvement d'eau dommageable. L'eau pure et les solutés très concentrés ne doivent jamais être perfusés tels quels.",
    ref: "UE 2.1 - Équilibres de l'organisme", diff: 2 },

  { ueId: "2.1", q: "Quelle est la valeur normale approximative du pH sanguin artériel ?",
    options: ["6,8 à 7,0", "7,35 à 7,45", "7,6 à 7,8", "8,0 à 8,2"], correct: 1,
    explication: "Le pH artériel normal est compris entre 7,35 et 7,45. En dessous de 7,35, on parle d'acidose ; au-dessus de 7,45, d'alcalose. Cette régulation étroite est vitale pour le fonctionnement enzymatique.",
    ref: "UE 2.1 - Équilibres de l'organisme", diff: 1 },

  { ueId: "2.1", q: "Quel organe régule l'équilibre acido-basique en éliminant le CO2 ?",
    options: ["Le rein", "Le foie", "Le poumon", "La rate"], correct: 2,
    explication: "Le poumon régule le pH en quelques minutes en ajustant l'élimination du CO2 par la ventilation. Le rein assure une régulation plus lente (heures à jours) via les bicarbonates et l'excrétion d'H+.",
    ref: "UE 2.1 - Équilibres de l'organisme", diff: 2 },

  { ueId: "2.1", q: "La respiration ample et rapide de Kussmaul, observée dans l'acidocétose diabétique, correspond à :",
    options: ["Une compensation respiratoire d'une acidose métabolique", "Une alcalose respiratoire primaire", "Une compensation rénale", "Un trouble sans rapport avec le pH"], correct: 0,
    explication: "Face à une acidose métabolique (excès d'acides cétoniques), le poumon hyperventile pour éliminer du CO2 et tenter de remonter le pH : c'est la respiration de Kussmaul, mécanisme compensateur respiratoire.",
    ref: "UE 2.1 - Équilibres de l'organisme", diff: 3 },

  { ueId: "2.1", q: "Quelle hormone fait baisser la glycémie ?",
    options: ["Le glucagon", "L'insuline", "Le cortisol", "L'adrénaline"], correct: 1,
    explication: "L'insuline, sécrétée par le pancréas, fait baisser la glycémie en favorisant l'entrée du glucose dans les cellules et son stockage. Le glucagon a l'effet inverse (hyperglycémiant) par glycogénolyse hépatique.",
    ref: "UE 2.1 - Équilibres de l'organisme", diff: 1 },

  { ueId: "2.1", q: "Quel système tampon agit le plus rapidement face à une variation brutale du pH sanguin ?",
    options: ["Le rein", "Les tampons chimiques (bicarbonates)", "Le foie", "La peau"], correct: 1,
    explication: "Les systèmes tampons chimiques, dont le couple bicarbonate/acide carbonique, agissent immédiatement pour neutraliser les variations de pH. Le poumon intervient en quelques minutes, le rein en quelques heures à jours.",
    ref: "UE 2.1 - Équilibres de l'organisme", diff: 3 },

  { ueId: "2.1", q: "Le cycle de Krebs et la chaîne respiratoire se déroulent dans :",
    options: ["Le noyau", "La mitochondrie", "Le cytoplasme", "Le ribosome"], correct: 1,
    explication: "Le cycle de Krebs et la chaîne respiratoire se déroulent dans la mitochondrie, surnommée la centrale énergétique de la cellule. C'est là qu'est produite la majeure partie de l'ATP en présence d'oxygène.",
    ref: "UE 2.1 - Métabolisme énergétique", diff: 2 },

  { ueId: "2.1", q: "L'hémophilie est une maladie liée au chromosome X. Cela explique qu'elle touche surtout :",
    options: ["Les filles", "Les garçons", "Indifféremment les deux sexes", "Uniquement les adultes"], correct: 1,
    explication: "L'hémophilie est liée au chromosome X et récessive. Les garçons (XY) n'ayant qu'un seul X, un allèle muté suffit à exprimer la maladie. Les filles (XX) sont le plus souvent porteuses saines car protégées par leur second X.",
    ref: "UE 2.1 - Génétique", diff: 3 },
];

export const flashcards = [
  { ueId: "2.1", recto: "Quel est le rôle de l'ATP ?", verso: "Molécule de stockage et de transport de l'énergie cellulaire (monnaie énergétique). Son hydrolyse en ADP + Pi libère l'énergie." },
  { ueId: "2.1", recto: "Glycolyse : aérobie ou anaérobie ? Où ?", verso: "Anaérobie (sans oxygène), dans le cytoplasme. Elle dégrade le glucose en pyruvate avec un faible rendement (2 ATP nets)." },
  { ueId: "2.1", recto: "Quel est l'accepteur final d'électrons de la chaîne respiratoire ?", verso: "L'oxygène. C'est pourquoi cette voie aérobie, mitochondriale, a un rendement énergétique élevé." },
  { ueId: "2.1", recto: "Que devient le pyruvate en absence d'oxygène ?", verso: "Il est transformé en lactate, avec production d'H+ contribuant à l'acidose métabolique. La lactatémie est un marqueur d'hypoperfusion." },
  { ueId: "2.1", recto: "Quelles sont les bases complémentaires de l'ADN ?", verso: "A-T (adénine-thymine) et G-C (guanine-cytosine)." },
  { ueId: "2.1", recto: "Combien de chromosomes dans une cellule humaine somatique ?", verso: "46 chromosomes, soit 23 paires (22 paires d'autosomes + 1 paire de chromosomes sexuels XX ou XY)." },
  { ueId: "2.1", recto: "Transcription vs traduction : où et quel produit ?", verso: "Transcription : dans le noyau, produit de l'ARN messager. Traduction : dans le cytoplasme (ribosomes), produit une protéine." },
  { ueId: "2.1", recto: "Quelle base remplace la thymine dans l'ARN ?", verso: "L'uracile (U)." },
  { ueId: "2.1", recto: "Qu'est-ce que l'homéostasie ?", verso: "Le maintien constant du milieu intérieur (pH, température, glycémie, hydratation) malgré les variations externes, par des boucles de régulation." },
  { ueId: "2.1", recto: "Ion majoritaire intracellulaire vs extracellulaire ?", verso: "Intracellulaire : potassium (K+). Extracellulaire : sodium (Na+)." },
  { ueId: "2.1", recto: "Valeur normale du pH artériel ?", verso: "7,35 à 7,45. En dessous : acidose. Au-dessus : alcalose." },
  { ueId: "2.1", recto: "Les trois systèmes de régulation du pH, du plus rapide au plus lent ?", verso: "1) Tampons chimiques (immédiat), 2) Poumon via le CO2 (minutes), 3) Rein via bicarbonates et H+ (heures à jours)." },
  { ueId: "2.1", recto: "Insuline et glucagon : effets sur la glycémie ?", verso: "Insuline : hypoglycémiante (fait entrer le glucose dans les cellules). Glucagon : hyperglycémiant (glycogénolyse hépatique)." },
  { ueId: "2.1", recto: "Qu'est-ce qu'une solution isotonique ? Exemple ?", verso: "Même osmolarité que le plasma, donc pas de mouvement d'eau dommageable. Ex. : NaCl 0,9 % et glucosé 5 %." },
  { ueId: "2.1", recto: "Transmission autosomique récessive : condition d'expression ?", verso: "Les deux allèles doivent être mutés. Un seul allèle muté = porteur sain. Ex. : mucoviscidose, drépanocytose." },
];
