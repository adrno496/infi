export const fiches = [
  { id: "fco_2_1_organisation", ueId: "2.1", type: "cours",
    titre: "Les 6 niveaux d'organisation du corps humain",
    resume: "Du plus petit (atomes) au plus grand (organisme), le corps s'organise en 6 niveaux emboîtés.",
    tags: ["d'après tes cours","organisation","niveaux"],
    html: `<p>La biologie médicale étudie la composition chimique du corps et les molécules du vivant. On distingue <strong>6 niveaux d'organisation</strong> emboîtés.</p>
<table class="tbl">
<tr><th>Niveau</th><th>Définition</th><th>Exemple</th></tr>
<tr><td>1. Chimique</td><td>Les atomes se combinent pour former des molécules</td><td>Carbone, O2, CO2, ADN</td></tr>
<tr><td>2. Cellulaire (cytologie)</td><td>Les cellules sont composées d'<span class="key" data-term="organite">organites</span>, eux-mêmes faits d'atomes</td><td>Neurone, cellule musculaire</td></tr>
<tr><td>3. Tissulaire</td><td>Assemblage de cellules du même type</td><td>Peau, tissu conjonctif, épithélium</td></tr>
<tr><td>4. Organique</td><td>Organe formé d'au moins 2 tissus différents</td><td>Cœur, rein, foie, poumons</td></tr>
<tr><td>5. Systèmes (appareils)</td><td>Organes qui collaborent pour une fonction</td><td>Appareils digestif, cardiovasculaire, urinaire</td></tr>
<tr><td>6. Organisme</td><td>Ensemble des systèmes interdépendants</td><td>Communique par les 5 sens</td></tr>
</table>
<p>Exemple du <strong>cœur</strong> (niveau 4) : le <span class="key" data-term="péricarde">péricarde</span> (enveloppe séreuse, inflammation = péricardite), le <span class="key" data-term="myocarde">myocarde</span> (muscle qui se contracte) et l'<span class="key" data-term="endocarde">endocarde</span> (épithélium interne, inflammation = endocardite, souvent d'origine bactérienne / septicémie).</p>
<ul>
<li><strong>Nécrose</strong> : cellules / tissus morts (irréversible).</li>
<li><strong>Ischémie</strong> : manque d'oxygène et d'apport sanguin, cellules encore vivantes que l'on peut sauver.</li>
<li><strong>Homéostasie</strong> : régulation des grandes fonctions (pression artérielle, glycémie…).</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Nécrose du myocarde = infarctus du myocarde (IDM). Nécrose cérébrale = AVC ischémique. Le suffixe <strong>-ite</strong> signifie toujours inflammation.</div>`,
    refs: ["D'après tes cours (UE 2.1)"] },

  { id: "fco_2_1_elements_chimiques", ueId: "2.1", type: "cours",
    titre: "Les éléments chimiques du corps (CHON) et les gaz du sang",
    resume: "4 éléments majeurs (CHON = 96 %) et des éléments mineurs essentiels au fonctionnement.",
    tags: ["d'après tes cours","atomes","gaz du sang","pH"],
    html: `<p><strong>4 éléments majeurs (96 % du poids) = CHON :</strong> Carbone (C), Hydrogène (H), Oxygène (O), Azote (N). Les <strong>éléments mineurs (4 %)</strong> sont peu abondants mais essentiels : sodium, potassium, calcium, chlore, phosphore, magnésium, fer, iode, soufre.</p>
<h3>Oxygène (O)</h3>
<ul>
<li>À l'état gazeux, essentiel à la production d'énergie cellulaire (<span class="key" data-term="ATP">ATP</span>) : il oxyde le glucose (glycolyse dans la mitochondrie). Déchets = eau + CO2.</li>
<li>Dans le sang : dissous dans le plasma + transporté par les globules rouges (GDS = gaz du sang).</li>
<li><strong>PaO2</strong> (pression artérielle en O2) = norme <strong>80 – 100 mmHg</strong>.</li>
<li><span class="key" data-term="hypoxémie">Hypoxémie</span> = manque d'O2 dans le sang ; <span class="key" data-term="hypoxie">hypoxie</span> = manque d'O2 dans les tissus.</li>
</ul>
<h3>Carbone et CO2</h3>
<ul>
<li>Composant de toutes les molécules organiques. Dans le sang, lié à l'O2 → CO2 (dissous, transporté par l'hémoglobine, réserve alcaline).</li>
<li><strong>PaCO2</strong> = norme <strong>36 – 40 mmHg</strong>.</li>
<li>CO2 augmente → pH baisse → <span class="key" data-term="acidose">acidose</span> (&lt; 7,38), terme : <strong>hypercapnie</strong>.</li>
<li>CO2 baisse → pH monte → <span class="key" data-term="alcalose">alcalose</span> (&gt; 7,42), terme : <strong>hypocapnie</strong>.</li>
</ul>
<h3>Hydrogène (H) et pH sanguin</h3>
<p>L'ion H+ est un acide (cation, proton). Sa concentration détermine le <strong>pH sanguin</strong>.</p>
<table class="tbl">
<tr><th>[H+]</th><th>pH</th><th>État</th></tr>
<tr><td>Normale</td><td>7,38 – 7,42</td><td>Normal (idéal 7,4)</td></tr>
<tr><td>Augmente</td><td>&lt; 7,38</td><td>Acidose</td></tr>
<tr><td>Diminue</td><td>&gt; 7,42</td><td>Alcalose</td></tr>
</table>
<div class="callout"><div class="callout-t">À retenir</div>pH sanguin normal : <strong>7,38 – 7,42</strong>. Diabète et insuffisances respiratoires provoquent des acidoses.</div>`,
    refs: ["D'après tes cours (UE 2.1)"] },

  { id: "fco_2_1_ions_electrolytes", ueId: "2.1", type: "cours",
    titre: "Ions, électrolytes et compartiments hydriques",
    resume: "Sodium, potassium, calcium : leurs rôles, normes biologiques et compartiments du corps.",
    tags: ["d'après tes cours","électrolytes","ionogramme"],
    html: `<p>Un <strong>ion</strong> est un atome chargé : cation (+) ou anion (−). L'<span class="key" data-term="ionogramme">ionogramme</span> est une prise de sang qui quantifie les ions.</p>
<table class="tbl">
<tr><th>Électrolyte</th><th>Dosage</th><th>Norme</th><th>Rôle</th></tr>
<tr><td>Sodium (Na+)</td><td>Natrémie</td><td>130 – 145 mmol/L</td><td>Principal cation extracellulaire, équilibre hydrique, influx nerveux, contraction musculaire</td></tr>
<tr><td>Potassium (K+)</td><td>Kaliémie</td><td>3,5 – 4,5 mmol/L</td><td>Principal cation intracellulaire, influx nerveux, contraction musculaire et cardiaque</td></tr>
<tr><td>Calcium (Ca2+)</td><td>Calcémie</td><td>2,10 – 2,50 mmol/L</td><td>Os/dents, contraction musculaire et cardiaque, influx nerveux, coagulation</td></tr>
<tr><td>Chlore (Cl−)</td><td>Chlorémie</td><td>99 – 103 mmol/L</td><td>Anion principal extracellulaire</td></tr>
</table>
<h3>Déséquilibres</h3>
<ul>
<li><strong>Sodium :</strong> hypernatrémie / hyponatrémie. Excès → rétention d'eau → <span class="key" data-term="œdème">œdème</span> et hypertension.</li>
<li><strong>Potassium :</strong> hyperkaliémie / hypokaliémie → troubles cardiaques, voire arrêt cardiaque. L'insuline fait entrer le K+ dans les cellules (→ hypokaliémie).</li>
<li><strong>Calcium :</strong> hyper/hypocalcémie → troubles neuromusculaires, cardiaques, osseux. Hypercalcémie → lithiase urinaire (calculs rénaux). Régulé par la <strong>calcitonine</strong> (→ hypocalcémie, formation d'os) et la <strong>PTH</strong> (→ hypercalcémie, déminéralisation).</li>
</ul>
<h3>Compartiments hydriques</h3>
<ul>
<li><strong>Milieu intracellulaire (LIC)</strong> : riche en K+, pauvre en Na+, charges négatives.</li>
<li><strong>Milieu extracellulaire (LEC)</strong> : riche en Na+, pauvre en K+, charges positives. Comprend plasma, lymphe et milieu interstitiel.</li>
<li><strong>Volémie</strong> = volume sanguin (≈ 5 L) : plasma ≈ 3 L + lymphe ≈ 2 L (riche en globules blancs).</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« K dedans, Na dehors » : le potassium domine DANS la cellule, le sodium DEHORS. Si ça s'inverse, la cellule meurt.</div>`,
    refs: ["D'après tes cours (UE 2.1)"] },

  { id: "fco_2_1_proteines", ueId: "2.1", type: "cours",
    titre: "Les protéines : fibreuses et globulaires",
    resume: "Deux grands groupes : les protéines de structure (fibreuses) et les protéines fonctionnelles (globulaires).",
    tags: ["d'après tes cours","protéines","albumine"],
    html: `<h3>Protéines fibreuses (structure)</h3>
<p>Elles donnent la forme aux tissus et organes :</p>
<ul>
<li><span class="key" data-term="collagène">Collagène</span> : tissus conjonctifs (derme, cartilage, os, ligaments, tendons) → fermeté.</li>
<li><strong>Kératine</strong> : rigidité de la peau, des ongles et des cheveux.</li>
<li><strong>Actine et myosine</strong> : protéines musculaires contractiles.</li>
<li><strong>Élastine</strong> : élasticité (peau, ligaments, tendons).</li>
</ul>
<h3>Protéines globulaires (fonctionnelles)</h3>
<ul>
<li><strong>Enzymes (catalyseurs)</strong> : accélèrent les réactions chimiques. Amylase salivaire (amidon), lipase (lipides), oxydase.</li>
<li><strong>Transport :</strong> <span class="key" data-term="hémoglobine">hémoglobine</span> (O2/CO2 ; 4 hèmes + 4 globines, le fer fixe l'O2), transferrine (fer), lipoprotéines (HDL = bon, LDL = mauvais cholestérol).</li>
<li><strong>Régulation :</strong> hormones (insuline, glucagon).</li>
<li><strong>Défense immunitaire :</strong> immunoglobulines = anticorps = gammaglobulines, produites par les lymphocytes B (plasmocytes).</li>
</ul>
<h3>L'albumine</h3>
<p>Protéine globulaire du plasma, fabriquée par le <strong>foie</strong>, taux <strong>30 – 40 g/L</strong>. Elle régule le pH et surtout <strong>attire et fixe l'eau dans les vaisseaux</strong> : elle exerce une <span class="key" data-term="pression oncotique">pression oncotique</span>.</p>
<div class="callout"><div class="callout-t">À retenir — syndrome néphrotique</div>Si le rein est malade, il filtre l'albumine → <strong>albuminurie</strong> (albumine dans les urines) + <strong>hypoalbuminémie</strong> dans le sang → l'eau n'est plus retenue → <strong>œdèmes</strong>.</div>
<p><strong>Marqueurs cliniques :</strong> troponine (infarctus du myocarde), CPK-MB (lésion musculaire/myocardique), ASAT/ALAT = transaminases (lésion hépatique).</p>`,
    refs: ["D'après tes cours (UE 2.1)"] },

  { id: "fco_2_1_glucides_lipides", ueId: "2.1", type: "cours",
    titre: "Glucides, lipides et régulation de la glycémie",
    resume: "Sucres simples et complexes, lipides, et le rôle de l'insuline et du glucagon.",
    tags: ["d'après tes cours","glucides","lipides","diabète"],
    html: `<h3>Les glucides</h3>
<ul>
<li><strong>Monosaccharides</strong> : glucose (C6H12O6), fructose, galactose (lait), désoxyribose (ADN), ribose (ARN).</li>
<li><strong>Disaccharides</strong> : glucose+glucose = maltose ; galactose+glucose = lactose ; glucose+fructose = sucrose (saccharose).</li>
<li><strong>Polysaccharides</strong> : glycogène (polymère de glucose) stocké dans le foie et le muscle.</li>
</ul>
<p><strong>Glycémie</strong> = concentration de glucose dans le sang. Norme à jeun : <strong>0,8 – 1,10 g/L</strong>. Diabète : <strong>&gt; 1,26 g/L</strong> à jeun.</p>
<h3>Régulation de la glycémie</h3>
<table class="tbl">
<tr><th>Hormone</th><th>Cellule (pancréas endocrine)</th><th>Effet</th></tr>
<tr><td>Insuline</td><td>Cellules bêta (îlots de Langerhans)</td><td>Hypoglycémie (fait entrer le glucose dans les cellules)</td></tr>
<tr><td>Glucagon</td><td>Cellules alpha</td><td>Hyperglycémie</td></tr>
</table>
<ul>
<li><strong>Diabète type 1</strong> : îlots de Langerhans détruits → plus de cellules bêta → insulinopénie. Signes : <strong>polyurie, polydipsie (soif), amaigrissement, polyphagie</strong>. Traitement : insuline + hydratation.</li>
<li><strong>Diabète type 2</strong> : résistance à l'insuline.</li>
</ul>
<h3>Les lipides</h3>
<ul>
<li><strong>Graisses neutres (triglycérides)</strong> : réserve d'énergie (tissu adipeux).</li>
<li><strong>Phospholipides</strong> : constituants des membranes cellulaires.</li>
<li><strong>Stéroïdes</strong> : cholestérol (base de tous les stéroïdes), sels biliaires, vitamine D, hormones sexuelles (œstrogènes, progestérone, testostérone), cortisol et aldostérone.</li>
</ul>
<div class="callout"><div class="callout-t">À retenir — cholestérol</div>Excès de LDL = hypercholestérolémie → plaques d'athérome → <span class="key" data-term="athérosclérose">athérosclérose</span> → IDM (coronaires), AVC ischémique, artérite des membres inférieurs.</div>`,
    refs: ["D'après tes cours (UE 2.1)"] },

  { id: "fco_2_1_cellule_organites", ueId: "2.1", type: "cours",
    titre: "La cellule et ses organites (cytologie)",
    resume: "Structure et fonction de la membrane, du cytoplasme, du noyau et des organites.",
    tags: ["d'après tes cours","cytologie","organites","mitose"],
    html: `<p>Cellule <strong>procaryote</strong> = sans noyau ; cellule <strong>eucaryote</strong> = avec noyau (la nôtre). Structure type : membrane + cytoplasme contenant les organites.</p>
<table class="tbl">
<tr><th>Organite</th><th>Fonction</th></tr>
<tr><td>Membrane plasmique</td><td>Double couche de phospholipides + cholestérol + protéines. Délimite, protège, assure les transports et porte des récepteurs</td></tr>
<tr><td><span class="key" data-term="mitochondrie">Mitochondrie</span></td><td>Synthèse de l'ATP (énergie). ADN mitochondrial circulaire 100 % maternel. Siège de l'apoptose</td></tr>
<tr><td>Ribosomes</td><td>Synthèse des protéines (passage obligatoire)</td></tr>
<tr><td>RE rugueux</td><td>Synthèse/stockage des protéines (couvert de ribosomes)</td></tr>
<tr><td>RE lisse</td><td>Synthèse des lipides et stéroïdes, neutralisation des médicaments</td></tr>
<tr><td>Appareil de Golgi</td><td>Emballe, modifie et trie les protéines à sécréter</td></tr>
<tr><td>Lysosomes</td><td>Digestion intracellulaire, phagocytose (« armoire à poison »)</td></tr>
<tr><td>Peroxysomes</td><td>Neutralisent des toxiques (catalase)</td></tr>
<tr><td>Centrioles</td><td>Fuseau mitotique lors de la mitose ; base des cils et flagelles</td></tr>
<tr><td>Noyau</td><td>Contient l'ADN ; contrôle la synthèse des protéines et le cycle cellulaire</td></tr>
</table>
<h3>La mitose (division cellulaire)</h3>
<p>Permet le renouvellement cellulaire (homéostasie tissulaire). La chromatine donne <strong>46 chromosomes</strong>.</p>
<ul>
<li><strong>Prophase</strong> : la chromatine forme les 46 chromosomes, les centrioles deviennent des asters.</li>
<li><strong>Métaphase</strong> : chromosomes alignés sur la plaque équatoriale (étude = caryotype : 46 XX ou 46 XY).</li>
<li><strong>Anaphase</strong> : les chromosomes se séparent (ascension polaire).</li>
<li><strong>Télophase</strong> : formation de 2 cellules filles.</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Plus d'<strong>apoptose</strong> que de mitose → maladies dégénératives (Alzheimer, Parkinson). Plus de <strong>mitose</strong> que d'apoptose → tumeurs (80 % des cancers = carcinomes, touchant l'épithélium).</div>`,
    refs: ["D'après tes cours (UE 2.1)"] },

  { id: "fco_2_1_transports", ueId: "2.1", type: "cours",
    titre: "Transports membranaires, osmose et régulation hydrominérale",
    resume: "Transport passif vs actif, osmose, et les hormones ADH et aldostérone.",
    tags: ["d'après tes cours","osmose","ADH","aldostérone"],
    html: `<h3>Transport passif (sans ATP)</h3>
<ul>
<li><strong>Diffusion simple</strong> : du milieu le plus concentré vers le moins concentré, jusqu'à l'équilibre (milieux <span class="key" data-term="isotonique">isotoniques</span>).</li>
<li><span class="key" data-term="osmose">Osmose</span> : diffusion de l'eau à travers une membrane, du milieu le <strong>moins concentré vers le plus concentré</strong> en soluté.</li>
<li><strong>Diffusion facilitée</strong> : glucose, transporté par une protéine membranaire (sans ATP).</li>
</ul>
<h3>Transport actif (avec ATP)</h3>
<p>Nécessite des pompes membranaires. La <strong>pompe Na+/K+</strong> fait entrer le K+ dans la cellule et sortir le Na+ (sens inverse de la diffusion).</p>
<div class="callout"><div class="callout-t">À retenir — pression osmotique</div>2 solutions de même pression osmotique = isotoniques. La plus concentrée = hypertonique, la moins concentrée = hypotonique. L'eau va de l'hypotonique vers l'hypertonique. La pression créée par les protéines plasmatiques (albumine) = pression oncotique.</div>
<h3>Régulation hydrominérale</h3>
<table class="tbl">
<tr><th>Hormone</th><th>Origine</th><th>Action</th></tr>
<tr><td><span class="key" data-term="ADH">ADH</span> (antidiurétique)</td><td>Cerveau (hypothalamus)</td><td>Régule l'eau : réabsorption d'eau par les reins → volémie ↑ (lutte contre l'hypovolémie)</td></tr>
<tr><td><span class="key" data-term="aldostérone">Aldostérone</span></td><td>Glandes surrénales (à partir du cholestérol)</td><td>Rétention de Na+ et d'eau (natrémie ↑, volémie ↑) ; élimination du K+ (kaliémie ↓)</td></tr>
</table>
<p><strong>Système rénine-angiotensine-aldostérone</strong> : en hypotension, les reins sécrètent la rénine → angiotensine 1 (inactive) → angiotensine 2 (active, par l'enzyme de conversion) → vasoconstriction (PA ↑) → sécrétion d'aldostérone. On peut bloquer l'enzyme de conversion pour traiter l'hypertension.</p>`,
    refs: ["D'après tes cours (UE 2.1)"] },

  { id: "fco_2_1_neurone_muscle", ueId: "2.1", type: "cours",
    titre: "Cellules excitables : neurone et cellule musculaire",
    resume: "L'influx nerveux, la synapse, les neurotransmetteurs et la contraction musculaire.",
    tags: ["d'après tes cours","neurone","synapse","Parkinson"],
    html: `<h3>Le neurone</h3>
<p>Structure : <strong>corps cellulaire</strong> (substance grise, contient le noyau) → <strong>dendrites</strong> (réception de l'information) → <strong>axone</strong> (conduction de l'influx, jusqu'à 1 m) → <strong>arborisation terminale</strong> avec les boutons synaptiques (neurotransmetteurs). La <span class="key" data-term="myéline">gaine de myéline</span> (riche en lipides, blanche) <strong>accélère</strong> l'influx nerveux. Le cerveau contient ≈ 50 milliards de neurones.</p>
<p>Sens unique : dendrite → corps cellulaire → axone → synapse. L'influx nerveux est <strong>électrique</strong> dans le neurone et devient <strong>chimique</strong> au niveau de la <span class="key" data-term="synapse">synapse</span> (jonction entre 2 neurones).</p>
<h3>La synapse</h3>
<p>L'influx électrique arrive à l'extrémité du neurone A → entrée massive de <strong>Ca2+</strong> → les vésicules libèrent le neurotransmetteur qui passe au neurone B.</p>
<ul>
<li><strong>Neurotransmetteurs excitateurs</strong> : accélèrent l'influx (dopamine, glutamate).</li>
<li><strong>Neurotransmetteurs inhibiteurs</strong> : ralentissent l'influx (GABA).</li>
</ul>
<div class="callout"><div class="callout-t">À retenir — maladie de Parkinson</div>Manque de <strong>dopamine</strong> (excitateur) → mouvement moteur déséquilibré : lenteur (bradykinésie), tremblement de repos et rigidité musculaire.</div>
<h3>La cellule musculaire (myocyte)</h3>
<p>3 types : lisse, squelettique (striée) et cardiaque (myocarde). Caractéristiques (annales) : <strong>contraction, excitabilité (influx des motoneurones), élasticité, tonicité</strong>. Cellule allongée, cylindrique, multinucléée, riche en mitochondries, contient actine et myosine (sarcomère = unité contractile).</p>
<p>Le neurone moteur se connecte au muscle par la <strong>jonction neuro-musculaire (plaque motrice)</strong>, via le neurotransmetteur <strong>acétylcholine</strong>. Toute la chaîne (cerveau → neurone → jonction → muscle) doit être fonctionnelle pour la contraction.</p>`,
    refs: ["D'après tes cours (UE 2.1)"] },

  { id: "fco_2_1_tissus_peau", ueId: "2.1", type: "cours",
    titre: "Les tissus : conjonctif, épithélium et la peau",
    resume: "Les deux grandes classes de tissus et les couches de la peau.",
    tags: ["d'après tes cours","tissus","épithélium","peau"],
    html: `<p>Deux grandes classes de tissus : <strong>conjonctif</strong> et <strong>épithélium</strong>.</p>
<h3>Tissu conjonctif (structure)</h3>
<p>Os, cartilage, ligament, tissu sanguin, derme, tendons. Composé de substance fondamentale (fixe l'eau), de fibroblastes (fabriquent le collagène), de cellules adipeuses, de globules blancs, de vaisseaux et de nerfs.</p>
<ul>
<li>Cartilage : chondroblastes (jeunes) → chondrocytes (matures).</li>
<li>Os : ostéoblastes → ostéocytes.</li>
<li>Tendons : ténoblastes → ténocytes.</li>
</ul>
<h3>Épithélium</h3>
<ul>
<li><strong>Glandulaire</strong> : glandes exocrines (à canal : salive, larmes, lait) et glandes endocrines (sans canal : hormones déversées dans le sang, ex. insuline).</li>
<li><strong>De revêtement</strong> : protection (couvre le corps et les organes).</li>
</ul>
<p>Cellules abondantes et jointives (stabilité). La <strong>membrane basale</strong> sépare l'épithélium du tissu conjonctif.</p>
<h3>La peau (3 couches)</h3>
<ul>
<li><strong>Épiderme</strong> : épithélium stratifié kératinisé, 4 strates de la surface vers la profondeur : cornée, granuleuse, épineuse, basale germinale (régénération par mitose). Contient les <strong>kératinocytes</strong> (les plus nombreux) et les <strong>mélanocytes</strong> (mélanine, pigmentation ; cancer = mélanome malin).</li>
<li><strong>Derme</strong> : tissu conjonctif ; glandes sébacées (sébum) et sudoripares (sueur).</li>
<li><strong>Hypoderme</strong> : tissu profond, adipeux, riche en vaisseaux.</li>
</ul>
<div class="callout"><div class="callout-t">À retenir — fonctions de la peau</div>Tactile (toucher), renseignement sur l'extérieur, thermorégulation (vasodilatation/sueur si chaud, vasoconstriction si froid), synthèse de la vitamine D, élimination de déchets, voie d'administration des médicaments.</div>`,
    refs: ["D'après tes cours (UE 2.1)"] },

  { id: "fco_2_1_vitamines", ueId: "2.1", type: "cours",
    titre: "Les vitamines et leurs carences",
    resume: "Vitamines liposolubles et hydrosolubles : rôles et maladies de carence.",
    tags: ["d'après tes cours","vitamines","carences"],
    html: `<h3>Vitamines liposolubles</h3>
<table class="tbl">
<tr><th>Vitamine</th><th>Rôle</th><th>Carence</th></tr>
<tr><td>A</td><td>Vision</td><td>Troubles de la vision</td></tr>
<tr><td>D (antirachitique)</td><td>Fixation du calcium sur l'os</td><td>Rachitisme, fragilité des os/dents</td></tr>
<tr><td>E</td><td>Antioxydant, cicatrisation, fertilité</td><td>—</td></tr>
<tr><td>K</td><td>Coagulation (fabriquée par les bactéries intestinales)</td><td>Hémorragie</td></tr>
</table>
<h3>Vitamines hydrosolubles</h3>
<table class="tbl">
<tr><th>Vitamine</th><th>Autre nom / rôle</th><th>Carence</th></tr>
<tr><td>C</td><td>Acide ascorbique</td><td>Scorbut (déchaussement des dents)</td></tr>
<tr><td>B1</td><td>Thiamine</td><td>Béribéri</td></tr>
<tr><td>B6</td><td>Pyridoxine</td><td>Dangereuse chez le nourrisson</td></tr>
<tr><td>B9 et B12</td><td>Indispensables à l'érythropoïèse (fabrication des globules rouges)</td><td>Anémie (peut être grave)</td></tr>
</table>
<h3>Le fer et l'anémie</h3>
<p>Le fer est un constituant de l'<strong>hémoglobine</strong> (transport de l'O2). Sa carence donne l'<span class="key" data-term="anémie">anémie</span> ferriprive (carence martiale), fréquente chez la femme enceinte → supplémentation. À l'inverse, l'<strong>hémochromatose</strong> = surcharge en fer.</p>
<div class="callout"><div class="callout-t">À retenir</div>Vitamine D = anti-rachitique. Vitamine K = coagulation. Vitamines B9/B12 = globules rouges. Vitamine C = anti-scorbut.</div>`,
    refs: ["D'après tes cours (UE 2.1)"] },

  { id: "fco_2_1_prefixes", ueId: "2.1", type: "cours",
    titre: "Terminologie médicale : préfixes, suffixes et racines",
    resume: "Les briques du vocabulaire médical pour décoder n'importe quel terme.",
    tags: ["d'après tes cours","sémiologie","terminologie"],
    html: `<h3>Suffixes fréquents</h3>
<table class="tbl">
<tr><th>Suffixe</th><th>Sens</th><th>Exemple</th></tr>
<tr><td>-ite</td><td>Inflammation</td><td>Otite, péricardite</td></tr>
<tr><td>-ose</td><td>Maladie non inflammatoire</td><td>Arthrose</td></tr>
<tr><td>-ome</td><td>Tumeur</td><td>Carcinome</td></tr>
<tr><td>-émie</td><td>Sang</td><td>Glycémie</td></tr>
<tr><td>-urie</td><td>Urine</td><td>Hématurie</td></tr>
<tr><td>-algie</td><td>Douleur</td><td>Lombalgie</td></tr>
<tr><td>-rragie</td><td>Écoulement de sang</td><td>Hémorragie</td></tr>
<tr><td>-rrhée</td><td>Écoulement</td><td>Aménorrhée</td></tr>
<tr><td>-ectomie</td><td>Ablation</td><td>Néphrectomie</td></tr>
<tr><td>-plégie</td><td>Paralysie</td><td>Tétraplégie</td></tr>
<tr><td>-pnée</td><td>Respiration</td><td>Dyspnée</td></tr>
</table>
<h3>Préfixes / racines</h3>
<ul>
<li><strong>a- / an-</strong> : absence / manque (anurie, anémie).</li>
<li><strong>dys-</strong> : difficulté, mal (dysurie).</li>
<li><strong>brady-</strong> : lent ; <strong>tachy-</strong> : rapide (bradycardie, tachycardie).</li>
<li><strong>hyper- / hypo-</strong> : excès / défaut.</li>
<li><strong>poly-</strong> : plusieurs (polyurie, polyphagie) ; <strong>oligo-</strong> : peu (oligurie).</li>
<li><strong>cardi-</strong> : cœur ; <strong>néphro-</strong> : rein ; <strong>hépat-</strong> : foie ; <strong>pneum-</strong> : poumon/air.</li>
<li><strong>cyto-</strong> : cellule ; <strong>hémato-/émie</strong> : sang ; <strong>myo-</strong> : muscle ; <strong>ostéo-</strong> : os.</li>
<li><strong>leuco-</strong> : blanc ; <strong>érythr-</strong> : rouge ; <strong>cyan-</strong> : bleu.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Décompose le mot : <strong>néphr</strong> (rein) + <strong>-ite</strong> (inflammation) = néphrite. <strong>Hémat</strong> (sang) + <strong>-urie</strong> (urine) = sang dans les urines.</div>`,
    refs: ["D'après tes cours (UE 2.1)"] },

  { id: "fco_2_1_urines_diurese", ueId: "2.1", type: "cours",
    titre: "Analyse d'urines, diurèse et œdèmes",
    resume: "Composition normale des urines, anomalies à la bandelette et mécanisme des œdèmes.",
    tags: ["d'après tes cours","diurèse","urines","œdème"],
    html: `<h3>L'urine et la diurèse</h3>
<p>L'urine est sécrétée par le rein, stockée dans la vessie, stérile à l'émission. La <span class="key" data-term="diurèse">diurèse</span> = volume d'urine émis sur un temps donné (souvent 24 h).</p>
<ul>
<li>Diurèse normale : <strong>800 à 1500 mL/24 h</strong>.</li>
<li><strong>Polyurie</strong> : &gt; 3 L/24 h.</li>
<li><strong>Oligurie</strong> : &lt; 500 mL/24 h.</li>
<li><strong>Anurie</strong> : &lt; 100 mL/24 h.</li>
<li><strong>Rétention d'urine</strong> : obstacle à l'évacuation malgré une production.</li>
</ul>
<h3>Composition</h3>
<p>L'urine contient : eau (96 %), sels minéraux et déchets organiques (urée = catabolisme des protéines ; créatinine = catabolisme de la créatine musculaire ; acide urique = catabolisme des acides nucléiques). pH normal acide (4,6 à 8, moyenne 6).</p>
<p>L'urine ne contient <strong>normalement pas</strong> : protéines, lipides, cellules, glucose.</p>
<table class="tbl">
<tr><th>Anomalie à la bandelette</th><th>Signification</th></tr>
<tr><td>Leucocytes / Nitrites</td><td>Infection urinaire</td></tr>
<tr><td>Protéines</td><td>Atteinte rénale (IR, HTA)</td></tr>
<tr><td>Glucose</td><td>Diabète / intolérance au glucose</td></tr>
<tr><td>Corps cétoniques</td><td>Diabète mal contrôlé / jeûne prolongé</td></tr>
<tr><td>Sang (hématurie)</td><td>Problème rénal (tumeur, calcul, infection) — penser aussi aux règles</td></tr>
</table>
<h3>Mécanisme des œdèmes</h3>
<p>Aux capillaires, deux forces s'opposent : la <strong>pression hydrostatique</strong> (pousse l'eau hors du vaisseau) et la <strong>pression osmotique/oncotique</strong> (retient l'eau dans le vaisseau, surtout grâce à l'albumine).</p>
<div class="callout"><div class="callout-t">À retenir — causes d'œdème</div>Insuffisance rénale, cardiaque, hépatique, veineuse, blocage lymphatique, syndrome néphrotique (perte d'albumine). Excès de sel → rétention d'eau → augmentation de la pression hydrostatique → œdème.</div>`,
    refs: ["D'après tes cours (UE 2.1)"] },
];

export const qcm = [
  { ueId: "2.1", q: "Combien de niveaux d'organisation du corps humain distingue-t-on ?",
    options: ["4","5","6","7"], correct: 2,
    explication: "On distingue 6 niveaux : chimique, cellulaire, tissulaire, organique, systèmes, organisme.", ref: "UE 2.1", diff: 1 },

  { ueId: "2.1", q: "Que signifie le sigle CHON ?",
    options: ["Calcium, Hydrogène, Oxygène, Azote","Carbone, Hydrogène, Oxygène, Azote","Carbone, Hélium, Oxygène, Sodium","Chlore, Hydrogène, Oxygène, Azote"],
    correct: 1,
    explication: "CHON = Carbone, Hydrogène, Oxygène, Azote : les 4 éléments majeurs (96 % du poids du corps).", ref: "UE 2.1", diff: 1 },

  { ueId: "2.1", q: "Quelle est la norme du pH sanguin ?",
    options: ["7,00 – 7,20","7,38 – 7,42","7,50 – 7,60","6,80 – 7,00"], correct: 1,
    explication: "Le pH sanguin normal est compris entre 7,38 et 7,42 (idéal 7,4). En dessous = acidose, au-dessus = alcalose.", ref: "UE 2.1", diff: 1 },

  { ueId: "2.1", q: "Une augmentation de la PaCO2 dans le sang provoque :",
    options: ["Une alcalose","Une acidose","Aucun changement de pH","Une hyperkaliémie"], correct: 1,
    explication: "Si le CO2 augmente, le pH baisse (< 7,38) : c'est l'acidose. Le terme est hypercapnie.", ref: "UE 2.1", diff: 2 },

  { ueId: "2.1", q: "Quelle est la norme de la PaO2 (pression artérielle en oxygène) ?",
    options: ["36 – 40 mmHg","50 – 70 mmHg","80 – 100 mmHg","100 – 120 mmHg"], correct: 2,
    explication: "La PaO2 normale est de 80 à 100 mmHg. La PaCO2, elle, est de 36 à 40 mmHg.", ref: "UE 2.1", diff: 2 },

  { ueId: "2.1", q: "Quel ion est le principal cation du milieu intracellulaire ?",
    options: ["Le sodium (Na+)","Le potassium (K+)","Le calcium (Ca2+)","Le chlore (Cl−)"], correct: 1,
    explication: "Le potassium (K+) domine dans la cellule (intracellulaire), le sodium (Na+) domine à l'extérieur.", ref: "UE 2.1", diff: 1 },

  { ueId: "2.1", q: "Quelle est la norme de la kaliémie ?",
    options: ["1,5 – 2,5 mmol/L","3,5 – 4,5 mmol/L","130 – 145 mmol/L","2,1 – 2,5 mmol/L"], correct: 1,
    explication: "La kaliémie (potassium sanguin) est de 3,5 à 4,5 mmol/L. Un déséquilibre entraîne des troubles cardiaques.", ref: "UE 2.1", diff: 2 },

  { ueId: "2.1", q: "Une hyperkaliémie peut provoquer :",
    options: ["Un trouble de la vision","Un arrêt cardiaque","Une lithiase urinaire","Une hypoglycémie"], correct: 1,
    explication: "Hyper- et hypokaliémie entraînent des troubles cardiaques, pouvant aller jusqu'à l'arrêt cardiaque.", ref: "UE 2.1", diff: 2 },

  { ueId: "2.1", q: "Quel organe fabrique l'albumine ?",
    options: ["Le rein","Le foie","Le pancréas","La rate"], correct: 1,
    explication: "L'albumine est fabriquée par le foie. Son taux normal est de 30 à 40 g/L.", ref: "UE 2.1", diff: 2 },

  { ueId: "2.1", q: "Quelle pression l'albumine exerce-t-elle pour retenir l'eau dans les vaisseaux ?",
    options: ["La pression hydrostatique","La pression oncotique","La pression artérielle","La pression veineuse"], correct: 1,
    explication: "L'albumine attire et fixe l'eau en exerçant une pression oncotique (osmotique). Sa perte entraîne des œdèmes.", ref: "UE 2.1", diff: 2 },

  { ueId: "2.1", q: "À jeun, à partir de quelle glycémie parle-t-on de diabète ?",
    options: ["> 1,00 g/L","> 1,10 g/L","> 1,26 g/L","> 2,00 g/L"], correct: 2,
    explication: "Glycémie normale à jeun : 0,8–1,10 g/L. Au-delà de 1,26 g/L à jeun = diabète.", ref: "UE 2.1", diff: 2 },

  { ueId: "2.1", q: "Quelle hormone provoque l'hypoglycémie ?",
    options: ["Le glucagon","L'insuline","L'adrénaline","Le cortisol"], correct: 1,
    explication: "L'insuline (cellules bêta des îlots de Langerhans) fait entrer le glucose dans les cellules → hypoglycémie. Le glucagon (cellules alpha) fait l'inverse.", ref: "UE 2.1", diff: 1 },

  { ueId: "2.1", q: "Quel organite est le siège de la synthèse de l'ATP ?",
    options: ["Le ribosome","La mitochondrie","L'appareil de Golgi","Le lysosome"], correct: 1,
    explication: "La mitochondrie produit l'ATP (énergie cellulaire) et est aussi le siège de l'apoptose.", ref: "UE 2.1", diff: 1 },

  { ueId: "2.1", q: "Le ribosome est le siège de :",
    options: ["La synthèse des lipides","La synthèse des protéines","La digestion intracellulaire","Le stockage du glucose"], correct: 1,
    explication: "Le ribosome est le siège obligatoire de la synthèse des protéines.", ref: "UE 2.1", diff: 1 },

  { ueId: "2.1", q: "Combien de chromosomes contient une cellule humaine ?",
    options: ["23","44","46","48"], correct: 2,
    explication: "Une cellule humaine contient 46 chromosomes (caryotype 46 XX ou 46 XY).", ref: "UE 2.1", diff: 1 },

  { ueId: "2.1", q: "Dans quel ordre se déroulent les phases de la mitose ?",
    options: ["Métaphase, prophase, anaphase, télophase","Prophase, métaphase, anaphase, télophase","Prophase, anaphase, métaphase, télophase","Télophase, anaphase, métaphase, prophase"],
    correct: 1,
    explication: "Prophase → Métaphase → Anaphase → Télophase. À la métaphase, on peut étudier le caryotype.", ref: "UE 2.1", diff: 2 },

  { ueId: "2.1", q: "L'osmose correspond au déplacement de l'eau :",
    options: ["Du milieu le plus concentré vers le moins concentré","Du milieu le moins concentré vers le plus concentré","Toujours avec de l'ATP","Uniquement dans le sens des ions"],
    correct: 1,
    explication: "L'osmose est un transport passif de l'eau du milieu le moins concentré en soluté vers le plus concentré.", ref: "UE 2.1", diff: 2 },

  { ueId: "2.1", q: "Le transport actif (pompe Na+/K+) nécessite :",
    options: ["De l'oxygène uniquement","De l'ATP","Aucune énergie","Une membrane imperméable"], correct: 1,
    explication: "Le transport actif nécessite de l'ATP. La pompe Na+/K+ fait entrer le K+ et sortir le Na+ contre le gradient.", ref: "UE 2.1", diff: 2 },

  { ueId: "2.1", q: "Quelle hormone permet la rétention d'eau et de sodium tout en éliminant le potassium ?",
    options: ["L'ADH","L'aldostérone","L'insuline","La calcitonine"], correct: 1,
    explication: "L'aldostérone (surrénales) retient Na+ et eau (volémie ↑, natrémie ↑) et favorise l'élimination du K+ (kaliémie ↓).", ref: "UE 2.1", diff: 3 },

  { ueId: "2.1", q: "La maladie de Parkinson est liée à un déficit de quel neurotransmetteur ?",
    options: ["Le GABA","L'acétylcholine","La dopamine","La sérotonine"], correct: 2,
    explication: "Le manque de dopamine (excitateur) entraîne lenteur, tremblement de repos et rigidité musculaire.", ref: "UE 2.1", diff: 2 },

  { ueId: "2.1", q: "Quel neurotransmetteur agit au niveau de la jonction neuro-musculaire (plaque motrice) ?",
    options: ["La dopamine","Le glutamate","L'acétylcholine","Le GABA"], correct: 2,
    explication: "Le neurone moteur libère de l'acétylcholine au niveau de la plaque motrice pour déclencher la contraction.", ref: "UE 2.1", diff: 2 },

  { ueId: "2.1", q: "Une carence en vitamine K provoque :",
    options: ["Le scorbut","Le rachitisme","Une hémorragie","Une anémie"], correct: 2,
    explication: "La vitamine K sert à la coagulation : sa carence provoque des hémorragies.", ref: "UE 2.1", diff: 2 },

  { ueId: "2.1", q: "Une diurèse inférieure à 100 mL/24h correspond à :",
    options: ["Une polyurie","Une oligurie","Une anurie","Une diurèse normale"], correct: 2,
    explication: "Anurie : < 100 mL/24h. Oligurie : < 500 mL/24h. Polyurie : > 3 L/24h.", ref: "UE 2.1", diff: 2 },

  { ueId: "2.1", q: "Que signifie le suffixe -ite ?",
    options: ["Ablation","Inflammation","Douleur","Tumeur"], correct: 1,
    explication: "Le suffixe -ite désigne une inflammation (ex. otite, péricardite).", ref: "UE 2.1", diff: 1 },

  { ueId: "2.1", q: "La présence de glucose à la bandelette urinaire évoque :",
    options: ["Une infection urinaire","Un diabète","Une hématurie","Une protéinurie"], correct: 1,
    explication: "Normalement il n'y a pas de glucose dans les urines : sa présence évoque un diabète ou une intolérance au glucose.", ref: "UE 2.1", diff: 2 },

  { ueId: "2.1", q: "Quelle protéine est sécrétée lors d'un infarctus du myocarde ?",
    options: ["L'albumine","La troponine","La transferrine","La kératine"], correct: 1,
    explication: "La troponine est un marqueur sécrété en cas d'infarctus du myocarde. ASAT/ALAT signent une atteinte hépatique.", ref: "UE 2.1", diff: 2 },
];

export const flashcards = [
  { ueId: "2.1", recto: "Quels sont les 6 niveaux d'organisation du corps ?", verso: "Chimique, cellulaire, tissulaire, organique, systèmes (appareils), organisme." },
  { ueId: "2.1", recto: "Que signifie CHON ?", verso: "Carbone, Hydrogène, Oxygène, Azote : les 4 éléments majeurs (96 % du poids du corps)." },
  { ueId: "2.1", recto: "Norme du pH sanguin ?", verso: "7,38 – 7,42 (idéal 7,4). < 7,38 = acidose, > 7,42 = alcalose." },
  { ueId: "2.1", recto: "Normes : PaO2 et PaCO2 ?", verso: "PaO2 = 80–100 mmHg ; PaCO2 = 36–40 mmHg." },
  { ueId: "2.1", recto: "Différence hypoxémie / hypoxie ?", verso: "Hypoxémie = manque d'O2 dans le sang ; hypoxie = manque d'O2 dans les tissus." },
  { ueId: "2.1", recto: "Normes natrémie, kaliémie, calcémie ?", verso: "Natrémie 130–145 mmol/L ; kaliémie 3,5–4,5 mmol/L ; calcémie 2,10–2,50 mmol/L." },
  { ueId: "2.1", recto: "Où dominent K+ et Na+ ?", verso: "K+ domine en intracellulaire, Na+ en extracellulaire. Si ça s'inverse, la cellule meurt." },
  { ueId: "2.1", recto: "Rôle de l'albumine ?", verso: "Fabriquée par le foie (30–40 g/L), elle attire et fixe l'eau dans les vaisseaux (pression oncotique) et régule le pH." },
  { ueId: "2.1", recto: "Glycémie normale à jeun et seuil du diabète ?", verso: "Normale 0,8–1,10 g/L ; diabète si > 1,26 g/L à jeun." },
  { ueId: "2.1", recto: "Insuline vs glucagon ?", verso: "Insuline (cellules bêta) → hypoglycémie ; glucagon (cellules alpha) → hyperglycémie." },
  { ueId: "2.1", recto: "Les 4 signes du diabète de type 1 ?", verso: "Polyurie, polydipsie (soif), amaigrissement, polyphagie." },
  { ueId: "2.1", recto: "Rôle de la mitochondrie ?", verso: "Synthèse de l'ATP (énergie) et siège de l'apoptose. ADN mitochondrial 100 % maternel." },
  { ueId: "2.1", recto: "Siège de la synthèse des protéines ?", verso: "Le ribosome (passage obligatoire)." },
  { ueId: "2.1", recto: "Les 4 phases de la mitose ?", verso: "Prophase, métaphase, anaphase, télophase. La cellule humaine a 46 chromosomes." },
  { ueId: "2.1", recto: "Qu'est-ce que l'osmose ?", verso: "Transport passif de l'eau du milieu le moins concentré vers le plus concentré, sans ATP." },
  { ueId: "2.1", recto: "Rôle de l'ADH ?", verso: "Hormone antidiurétique : réabsorption d'eau par les reins → la volémie augmente (lutte contre l'hypovolémie)." },
  { ueId: "2.1", recto: "Rôle de l'aldostérone ?", verso: "Rétention de Na+ et d'eau (volémie/natrémie ↑), élimination du K+ (kaliémie ↓). Sécrétée par les surrénales." },
  { ueId: "2.1", recto: "Neurotransmetteur en cause dans la maladie de Parkinson ?", verso: "Déficit en dopamine → lenteur, tremblement de repos, rigidité musculaire." },
  { ueId: "2.1", recto: "Les 3 couches de la peau ?", verso: "Épiderme (épithélium kératinisé), derme (conjonctif), hypoderme (adipeux)." },
  { ueId: "2.1", recto: "Carences : vitamine C, B1, K ?", verso: "Vit C → scorbut ; Vit B1 → béribéri ; Vit K → hémorragie." },
  { ueId: "2.1", recto: "Polyurie, oligurie, anurie : valeurs ?", verso: "Polyurie > 3 L/24h ; oligurie < 500 mL/24h ; anurie < 100 mL/24h. Diurèse normale 800–1500 mL/24h." },
  { ueId: "2.1", recto: "Que ne doit PAS contenir l'urine normale ?", verso: "Ni protéines, ni lipides, ni cellules, ni glucose." },
  { ueId: "2.1", recto: "Marqueur de l'infarctus du myocarde ?", verso: "La troponine. (ASAT/ALAT = atteinte hépatique ; CPK-MB = lésion musculaire/myocardique.)" },
  { ueId: "2.1", recto: "Sens des suffixes -ite, -ome, -ectomie ?", verso: "-ite = inflammation ; -ome = tumeur ; -ectomie = ablation." },
  { ueId: "2.1", recto: "Différence nécrose / ischémie ?", verso: "Nécrose = tissus morts (irréversible) ; ischémie = manque d'O2, cellules encore vivantes que l'on peut sauver." },
];
