export const fiches = [
  { id: "fco_2_2_cardio_anatomie", ueId: "2.2", type: "cours",
    titre: "Anatomie du cœur et circulation",
    resume: "Le cœur, pompe à 4 cavités, situé dans le médiastin, assure la petite et la grande circulation.",
    tags: ["d'après tes cours", "cardiovasculaire", "anatomie"],
    html: `<p>Le <span class="key" data-term="coeur">cœur</span> est un organe musculaire situé dans le <span class="key" data-term="mediastin">médiastin</span> (espace entre les 2 poumons), reposant sur le diaphragme, de forme pyramidale. Son grand axe est à gauche, sa pointe (<strong>apex</strong>) se trouve sous le mamelon gauche au 5<sup>e</sup> espace intercostal gauche. Poids : 250 à 280 g.</p>
<h3>Les 4 cavités</h3>
<ul>
<li><strong>Oreillette droite → ventricule droit</strong> (sang riche en CO₂, côté droit "bleu")</li>
<li><strong>Oreillette gauche → ventricule gauche</strong> (sang riche en O₂, côté gauche "rouge")</li>
<li>Ventricule gauche épais (myocarde puissant) : éjecte le sang dans l'aorte</li>
<li>Séparations : septum interventriculaire et septum interauriculaire</li>
</ul>
<h3>Sens du sang : les veines entrent, les artères sortent</h3>
<ul>
<li><strong>Veines caves</strong> (sup. : tête, cou, membres sup. ; inf. : tronc, membres inf.) → oreillette droite (riche en CO₂)</li>
<li><strong>4 veines pulmonaires</strong> (riches en O₂) → oreillette gauche</li>
<li><strong>Artère pulmonaire</strong> (sort du ventricule droit) : transporte le sang riche en CO₂ vers les poumons</li>
<li><strong>Aorte</strong> (sort du ventricule gauche) : sang riche en O₂ → crosse → aorte thoracique → aorte abdominale → artères iliaques primitives D et G</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Piège classique : l'artère pulmonaire transporte du sang riche en CO₂, et les veines pulmonaires du sang riche en O₂ (l'inverse de la logique habituelle artère=O₂).</div>
<h3>Les valves (rôle anti-reflux)</h3>
<ul>
<li><span class="key" data-term="tricuspide">Tricuspide</span> (3 cuspides) : entre oreillette et ventricule DROITS</li>
<li><span class="key" data-term="mitrale">Mitrale</span> (2 cuspides) : entre oreillette et ventricule GAUCHES</li>
<li><strong>Valves sigmoïdes</strong> : à l'orifice de l'aorte et de l'artère pulmonaire</li>
</ul>
<h3>Les 3 enveloppes de la paroi</h3>
<table class="tbl"><tr><th>Couche</th><th>Localisation</th><th>Pathologie</th></tr>
<tr><td>Péricarde</td><td>séreuse externe</td><td>péricardite (souvent virale)</td></tr>
<tr><td>Myocarde</td><td>muscle strié, contraction autonome</td><td>angor / infarctus</td></tr>
<tr><td>Endocarde</td><td>enveloppe interne</td><td>endocardite (infectieuse)</td></tr></table>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Tri-Droite / Mi-Gauche : TRIcuspide à DROITE, MItrale à gauche (2 lettres "Mi" comme 2 cuspides).</div>`,
    refs: ["D'après tes cours (UE 2.2)"] },

  { id: "fco_2_2_cardio_physio", ueId: "2.2", type: "cours",
    titre: "Physiologie cardiaque : cycle, conduction et ECG",
    resume: "Le tissu nodal génère l'automatisme cardiaque ; chaque cycle alterne systole et diastole, visible à l'ECG.",
    tags: ["d'après tes cours", "cardiovasculaire", "physiologie"],
    html: `<h3>Cycle cardiaque</h3>
<ul>
<li><span class="key" data-term="systole">Systole</span> : dépolarisation, contraction, vidange</li>
<li><span class="key" data-term="diastole">Diastole</span> : repolarisation, relâchement, remplissage</li>
<li>70 cycles/min au repos ; 1 cycle = systole + diastole = 0,8 seconde</li>
<li>Oreillettes et ventricules se contractent en décalé (l'un se contracte quand l'autre se relâche)</li>
</ul>
<h3>Tissu nodal (innervation intrinsèque)</h3>
<ul>
<li><strong>Nœud sinusal</strong> (nœud de Keith et Flack) : dans l'oreillette droite, c'est la "pile électrique" = centre rythmogène, donne le rythme sinusal</li>
<li><strong>Nœud auriculo-ventriculaire</strong> : situé dans le septum</li>
<li>Courant créé par les ions K⁺, Na⁺, Ca²⁺ qui entrent et sortent</li>
</ul>
<h3>L'ECG (12 dérivations, dont 6 précordiales)</h3>
<table class="tbl"><tr><th>Onde</th><th>Signification</th></tr>
<tr><td>P</td><td>dépolarisation/systole des oreillettes</td></tr>
<tr><td>QRS</td><td>dépolarisation/systole des ventricules (ils se vident)</td></tr>
<tr><td>T</td><td>repolarisation/diastole des ventricules (remplissage)</td></tr></table>
<p>Électrodes des membres : poignet droit = <strong>rouge</strong>, poignet gauche = <strong>jaune</strong>, cheville gauche = <strong>verte</strong>, cheville droite = <strong>noire</strong>. On cherche : troubles du rythme, de conduction, maladies ischémiques, troubles de la kaliémie.</p>
<h3>Innervation extrinsèque (système nerveux végétatif)</h3>
<ul>
<li><strong>Sympathique</strong> : libère la noradrénaline → effet chronotrope positif (tachycardie), vasoconstriction, ↑ pression artérielle (stress, effort)</li>
<li><strong>Parasympathique</strong> (nerf vague / X / pneumogastrique) : libère l'acétylcholine → effet chronotrope négatif, ralentit (tonus vagal = 70 bpm de repos)</li>
<li>La somme des deux = <span class="key" data-term="homeostasie">homéostasie</span></li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>"RouJaVeNo" sur les membres : poignet Rouge à droite, Jaune à gauche, cheville Verte à gauche, Noire à droite. Le feu (rouge/jaune) en haut, la végétation (vert/noir) en bas.</div>`,
    refs: ["D'après tes cours (UE 2.2)"] },

  { id: "fco_2_2_vaisseaux_tension", ueId: "2.2", type: "cours",
    titre: "Vaisseaux, régulation de la pression artérielle (SRAA)",
    resume: "Artères et veines ont 3 tuniques ; la pression artérielle est régulée par les hormones (SRAA) et le système nerveux végétatif.",
    tags: ["d'après tes cours", "cardiovasculaire", "pression artérielle"],
    html: `<h3>Structure des vaisseaux (3 tuniques)</h3>
<table class="tbl"><tr><th>Tunique</th><th>Position</th></tr>
<tr><td>Adventice</td><td>externe</td></tr>
<tr><td>Média</td><td>moyenne, fibres musculaires lisses</td></tr>
<tr><td>Intima</td><td>interne</td></tr></table>
<p>Les <strong>veines</strong> ont des parois plus minces, une pression plus faible et possèdent des <strong>valves</strong> qui font remonter le sang vers le cœur (souvent 2 veines pour 1 artère, superficielles et profondes).</p>
<h3>Débit cardiaque</h3>
<p><strong>VES × FC = débit cardiaque</strong> : 5 à 6 L/min au repos, 16 à 20 L à l'effort. En cas d'<span class="key" data-term="insuffisance-cardiaque">insuffisance cardiaque</span>, le débit s'effondre.</p>
<h3>Pression artérielle</h3>
<ul>
<li>PA systolique normale : 120 mmHg (&lt;140) ; PA diastolique : 80 mmHg (&lt;90)</li>
<li>Régulée par les <strong>hormones</strong> et le <strong>système nerveux végétatif</strong></li>
</ul>
<h3>Système rénine-angiotensine-aldostérone (SRAA) — hypertenseur</h3>
<ul>
<li>Déclenché par une <strong>hypotension</strong></li>
<li><strong>Rénine</strong> (sécrétée par les reins) → active le système</li>
<li>Angiotensine 1 → Angiotensine 2 grâce à l'<span class="key" data-term="enzyme-conversion">enzyme de conversion</span> → vasoconstriction → ↑ PA</li>
<li><strong>Aldostérone</strong> : rétention de sodium et d'eau, élimination du potassium → ↑ natrémie et volémie, ↓ kaliémie → ↑ PA</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Les IEC (inhibiteurs de l'enzyme de conversion) traitent l'hypertension en bloquant la transformation d'AG1 en AG2. À l'inverse, le <strong>FNA</strong> (facteur natriurétique, sécrété par l'oreillette droite) fait éliminer le sodium en cas d'hypernatrémie.</div>
<div class="callout"><div class="callout-t">À retenir</div>Anticoagulants (bloquent le facteur Xa et la thrombine) : héparine, AVK (antivitamine K), AOD. Pathologies veineuses : phlébite/thrombose (rougeur, chaleur, œdème, douleur) → complication mortelle = embolie pulmonaire.</div>`,
    refs: ["D'après tes cours (UE 2.2)"] },

  { id: "fco_2_2_respiratoire", ueId: "2.2", type: "cours",
    titre: "Appareil respiratoire : anatomie et physiologie",
    resume: "Des voies aériennes supérieures aux alvéoles, l'appareil respiratoire assure la ventilation et l'hématose.",
    tags: ["d'après tes cours", "respiratoire", "anatomie"],
    html: `<h3>Voies aériennes supérieures</h3>
<ul>
<li><strong>Nez et fosses nasales</strong> : filtrent, réchauffent, humidifient l'air ; contiennent l'épithélium olfactif</li>
<li><strong>Pharynx</strong> : carrefour aéro-digestif, 3 segments (nasopharynx, oropharynx, laryngopharynx), abrite les amygdales (défense immunitaire)</li>
<li><strong>Larynx</strong> : relie pharynx et trachée, abrite les cordes vocales (phonation). L'<span class="key" data-term="epiglotte">épiglotte</span> ferme la glotte pendant la déglutition (anti-fausse route)</li>
</ul>
<h3>Voies aériennes inférieures</h3>
<ul>
<li><strong>Trachée</strong> : tube flexible avec anneaux cartilagineux, se divise en 2 bronches principales</li>
<li><strong>Arbre bronchique</strong> : bronches principales → lobaires → segmentaires → bronchioles (entourées de muscle lisse)</li>
<li><strong>Alvéoles</strong> : siège des échanges gazeux ; sécrètent le <span class="key" data-term="surfactant">surfactant</span> (évite que les parois se collent / l'affaissement des poumons)</li>
</ul>
<h3>Poumons et plèvre</h3>
<ul>
<li>Poumon droit : <strong>3 lobes</strong> (sup., moyen, inf.) ; poumon gauche : <strong>2 lobes</strong> (plus petit à cause du cœur)</li>
<li><span class="key" data-term="plevre">Plèvre</span> : séreuse en 2 feuillets (pariétal + viscéral) produisant un liquide lubrifiant</li>
<li><strong>Inspiration = active</strong> (muscle = diaphragme, nerfs phréniques) ; <strong>expiration = passive</strong> (rétraction élastique)</li>
</ul>
<h3>Échanges gazeux (hématose)</h3>
<p>Le CO₂ passe du sang vers les alvéoles (éliminé par les poumons) ; l'O₂ passe des alvéoles vers les capillaires.</p>
<h3>4 fonctions respiratoires</h3>
<ul>
<li>Ventilation / oxygénation du sang</li>
<li>Hématose (échanges gazeux)</li>
<li>Régulation du pH par la ventilation</li>
<li>Défense immunitaire (tissu lymphoïde)</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Pneumothorax = air dans la plèvre ; pleurésie = infection de la plèvre ; épanchement pleural / hémothorax = liquide / sang. Explorations : radio du thorax, gaz du sang, spirométrie (ex. BPCO).</div>`,
    refs: ["D'après tes cours (UE 2.2)"] },

  { id: "fco_2_2_digestif", ueId: "2.2", type: "cours",
    titre: "Appareil digestif : tube, annexes et physiologie",
    resume: "Le tube digestif transforme les aliments en nutriments via 6 fonctions et 5 phases de digestion.",
    tags: ["d'après tes cours", "digestif", "nutrition"],
    html: `<h3>Trajet du tube digestif</h3>
<ul>
<li><strong>Bouche</strong> : mastication + salive (1 L/jour, glandes parotide/sous-maxillaire/sublinguale) = 1<sup>re</sup> phase (buccale). Enzymes : lipase, amylase</li>
<li><strong>Pharynx</strong> → <strong>Œsophage</strong> (25 cm, péristaltisme, 2 sphincters anti-reflux) = phase de déglutition (3 temps : buccal volontaire, pharyngien et œsophagien réflexes)</li>
<li><strong>Estomac</strong> (jusqu'à 2 L) : régions cardia, fundus, corps, antre. Sécrétions acides (pH 1,5–2), enzymes, <span class="key" data-term="facteur-intrinseque">facteur intrinsèque</span> (FI → absorption de la vitamine B12 dans l'iléon)</li>
<li><strong>Intestin grêle</strong> : duodénum (25 cm) + jéjunum + iléon (absorption B12, sels biliaires). Absorption des nutriments par les villosités</li>
<li><strong>Côlon</strong> (1,5 m) : déshydratation du chyle, fermentation/putréfaction bactérienne → matières fécales</li>
</ul>
<h3>Organes annexes</h3>
<ul>
<li><strong>Foie</strong> (1,2–1,5 kg, plus gros organe) : 2 lobes, vascularisé par l'artère hépatique + la veine porte (fusion veine splénique + mésentérique)</li>
<li><strong>Voies biliaires</strong> : la vésicule stocke et concentre la bile ; canal cholédoque → ampoule de Vater (papille) ; sphincter d'Oddi</li>
<li><strong>Pancréas</strong> : glande mixte — <em>endocrine</em> (îlots de Langerhans : insuline, glucagon) + <em>exocrine</em> (suc pancréatique : amylase, lipase, via le canal de Wirsung → duodénum D2)</li>
<li><strong>Péritoine</strong> : séreuse à 2 feuillets (viscéral + pariétal), protège les viscères</li>
</ul>
<h3>6 fonctions hépatiques</h3>
<ul>
<li>Synthèse de la bile ; métabolisme glucides, lipides, protéines ; stockage vitamines/minéraux ; biotransformation</li>
</ul>
<h3>5 phases de la digestion</h3>
<p>Buccale → déglutition → gastrique → absorption (intestin grêle) → colique.</p>
<table class="tbl"><tr><th>Nutriment</th><th>Devient</th></tr>
<tr><td>Glucides</td><td>glucose</td></tr>
<tr><td>Protéines</td><td>acides aminés</td></tr>
<tr><td>Lipides</td><td>acides gras + glycérol</td></tr></table>
<div class="callout"><div class="callout-t">À retenir</div>Tous les nutriments passent dans le sang <strong>sauf les lipides</strong>. Chyme = estomac, Chyle = côlon.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Saignements : <strong>Hématémèse</strong> = sang rouge par la bouche ; <strong>Rectorragie</strong> = sang rouge par l'anus ; <strong>Méléna</strong> = sang noir digéré dans les selles.</div>`,
    refs: ["D'après tes cours (UE 2.2)"] },

  { id: "fco_2_2_nerveux", ueId: "2.2", type: "cours",
    titre: "Système nerveux : organisation, cortex et voies",
    resume: "Le système nerveux se divise en central et périphérique ; le cortex pilote la motricité et la sensibilité du côté opposé.",
    tags: ["d'après tes cours", "neurologie", "anatomie"],
    html: `<h3>Classifications</h3>
<ul>
<li><strong>Anatomique</strong> : SNC (cerveau, tronc cérébral, cervelet, moelle spinale) + SNP (12 paires de nerfs crâniens, 31 paires de nerfs rachidiens)</li>
<li><strong>Fonctionnelle</strong> : somatique (muscles striés, appareil locomoteur) + végétatif/autonome (viscères : sympathique et parasympathique)</li>
<li>Informations <strong>afférentes</strong> (sensitives, organes → SNC) et <strong>efférentes</strong> (motrices, SNC → organes)</li>
</ul>
<h3>Cortex cérébral et lobes</h3>
<p>Les 2 hémisphères sont reliés par le <span class="key" data-term="corps-calleux">corps calleux</span>. Chaque hémisphère commande le côté <strong>opposé</strong> (controlatéral). Scissures de Rolando, Sylvius et pariéto-occipitale.</p>
<table class="tbl"><tr><th>Lobe</th><th>Fonction</th></tr>
<tr><td>Frontal</td><td>motricité, cognition, émotions, langage parlé (aire de Broca)</td></tr>
<tr><td>Pariétal</td><td>sensibilité somesthésique et viscérale</td></tr>
<tr><td>Occipital</td><td>vision</td></tr>
<tr><td>Temporal</td><td>audition, mémoire, compréhension du langage (aire de Wernicke)</td></tr>
<tr><td>Insulaire</td><td>sensibilité viscérale</td></tr>
<tr><td>Limbique</td><td>affectivité, apprentissage, mémoire</td></tr></table>
<h3>Structures profondes</h3>
<ul>
<li><strong>Système limbique</strong> : hippocampe (mémoire — atrophié dans Alzheimer), amygdale (stress), bulbe olfactif</li>
<li><strong>Noyaux gris centraux</strong> (thalamus, caudé, sous-thalamique, lenticulaire) : régulent la motricité</li>
<li><strong>Tronc cérébral</strong> (mésencéphale, pont, bulbe rachidien) : centres vitaux (cardio, respiratoire, déglutition)</li>
<li><strong>Cervelet</strong> : équilibre, tonus, coordination des gestes</li>
<li><span class="key" data-term="locus-niger">Locus niger</span> (substance noire, système extra-pyramidal, dans le tronc) : sa lésion = maladie de Parkinson</li>
</ul>
<h3>Voie pyramidale et vascularisation</h3>
<p>La voie pyramidale contrôle la motricité volontaire ; elle se croise (décussation) au niveau du bulbe rachidien → un AVC de l'hémisphère gauche donne une paralysie controlatérale (à droite). Le cerveau est vascularisé par le <span class="key" data-term="polygone-willis">polygone de Willis</span>.</p>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>Broca = Bouche</strong> (langage parlé, lobe frontal) ; <strong>Wernicke = Comprendre</strong> les mots (lobe temporal). Méninges de dehors en dedans : <strong>D-A-P</strong> = Dure-mère, Arachnoïde, Pie-mère.</div>`,
    refs: ["D'après tes cours (UE 2.2)"] },

  { id: "fco_2_2_renal_reproducteur", ueId: "2.2", type: "cours",
    titre: "Fonction rénale, élimination et appareil reproducteur",
    resume: "Les reins produisent et évacuent l'urine ; les gonades sont des glandes mixtes endocrines et exocrines.",
    tags: ["d'après tes cours", "rénal", "reproducteur"],
    html: `<h3>Appareil urinaire</h3>
<ul>
<li>Le <span class="key" data-term="rein">rein</span> : organe pair, rétropéritonéal (région lombaire), 150–170 g, 12 cm de haut</li>
<li><strong>Calices</strong> (3) → recueillent l'urine ; leur fusion forme le <strong>bassinet</strong></li>
<li>Le bassinet rejoint les <strong>uretères</strong> qui se terminent obliquement (2 cm) dans la paroi vésicale = clapet anti-reflux (sinon risque d'insuffisance rénale)</li>
<li><strong>Vessie</strong> → <strong>urètre</strong> : 4 cm chez la femme, 18 cm chez l'homme (urètre prostatique + pénien)</li>
<li>Chaîne : glandes surrénales – rein – néphron – uretère – vessie – prostate – urètre</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Calcul rénal = colique néphrétique : douleur lombaire irradiant vers la fosse iliaque et les organes génitaux. Néphrectomie = ablation d'un rein.</div>
<h3>Appareil reproducteur (pelvis)</h3>
<p>Organes génitaux internes :</p>
<ul>
<li><strong>Femme</strong> : utérus, trompes, ovaires, vagin</li>
<li><strong>Homme</strong> : épididyme, conduits déférents, vésicules séminales, prostate, glandes bulbo-urétrales, conduit éjaculateur</li>
</ul>
<p>Organes génitaux externes (périnée uro-génital) : vulve (femme), pénis (homme). 3 orifices (urétral, vaginal, anal), 3 sphincters, muscle élévateur de l'anus.</p>
<h3>Les testicules = glandes mixtes</h3>
<ul>
<li><strong>Exocrine</strong> : tubes séminifères → spermatogenèse</li>
<li><strong>Endocrine</strong> : cellules de <span class="key" data-term="leydig">Leydig</span> → testostérone (fabriquée à partir des lipides)</li>
<li>Rôle de la testostérone : organes génitaux masculins, anabolisant (masse musculaire/osseuse), virilisation, pilosité</li>
<li>Chaque testicule est coiffé par l'<strong>épididyme</strong> (forme de virgule), prolongé par le canal déférent</li>
</ul>`,
    refs: ["D'après tes cours (UE 2.2)"] },

  { id: "fco_2_2_parametres_locomoteur", ueId: "2.2", type: "cours",
    titre: "Paramètres vitaux et appareil locomoteur",
    resume: "Mesure du pouls, de la tension, de la fréquence respiratoire, de la SpO₂ et de la température ; bases de l'appareil locomoteur.",
    tags: ["d'après tes cours", "paramètres vitaux", "locomoteur"],
    html: `<h3>Paramètres vitaux et leurs normes</h3>
<table class="tbl"><tr><th>Paramètre</th><th>Norme adulte</th></tr>
<tr><td>Pouls (FC)</td><td>60 à 80 bpm (moyenne 70)</td></tr>
<tr><td>PA systolique</td><td>&lt;140 mmHg (≈120)</td></tr>
<tr><td>PA diastolique</td><td>&lt;90 mmHg (≈80)</td></tr>
<tr><td>Fréquence respiratoire</td><td>12 à 20 /min</td></tr>
<tr><td>SpO₂</td><td>95 à 100 % en air ambiant</td></tr>
<tr><td>Température</td><td>37 °C (fièvre &gt;38 °C, hypothermie &lt;35 °C)</td></tr></table>
<p>Une <span class="key" data-term="pulsation">pulsation</span> correspond à une contraction ventriculaire. Pouls périphériques : radial, carotidien, huméral, fémoral, poplité.</p>
<h3>Variations du pouls selon l'âge</h3>
<ul>
<li>Fœtus : 140–160 /min ; nouveau-né : 120–140 ; enfant : 90–120 ; adulte : 60–80</li>
<li><strong>Tachycardie</strong> &gt;100 bpm ; <strong>bradycardie</strong> &lt;60 bpm (sportif)</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Contre-indications absolues à la prise de TA sur un bras : fistule artério-veineuse, prothèse vasculaire, mammectomie avec curage ganglionnaire. Relatives : perfusion, hémiplégie. SpO₂ faussée par le vernis à ongles et les doigts froids.</div>
<h3>Appareil locomoteur</h3>
<ul>
<li>Os : ostéologie ; articulations : arthrologie ; muscles : myologie</li>
<li>Os longs : fémur, tibia, fibula, patella ; avant-bras : ulna (cubitus) + radius (côté pouce) ; scapula (omoplate), clavicule</li>
<li><strong>Mouvements articulaires</strong> : flexion, extension, abduction, adduction, rotation, pronation (paume vers le bas), supination (paume vers le haut)</li>
<li>Bassin = ceinture pelvienne (os coxal D et G reliés par la symphyse pubienne) ; hanche = articulation coxo-fémorale (coxa vara 90°, coxa valga 150°)</li>
<li><span class="key" data-term="synoviale">Membrane synoviale</span> : liquide qui facilite le glissement articulaire</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>su-Pination = Soulever / Soupe</strong> (paume vers le haut comme pour tenir un bol) ; <strong>Pronation = Prendre / Poser</strong> (paume vers le bas).</div>`,
    refs: ["D'après tes cours (UE 2.2)"] },
];

export const qcm = [
  { ueId: "2.2", q: "Où se situe le cœur ?", options: ["Dans la cavité abdominale", "Dans le médiastin, entre les deux poumons", "Dans la cavité pleurale gauche", "Derrière la trachée uniquement"], correct: 1,
    explication: "Le cœur est dans le médiastin, l'espace entre les deux poumons, reposant sur le diaphragme.", ref: "UE 2.2", diff: 1 },
  { ueId: "2.2", q: "Que transporte l'artère pulmonaire ?", options: ["Du sang riche en O₂", "Du sang riche en CO₂", "De la lymphe", "Du sang artériel oxygéné"], correct: 1,
    explication: "Piège classique : l'artère pulmonaire sort du ventricule droit et transporte du sang riche en CO₂ vers les poumons.", ref: "UE 2.2", diff: 2 },
  { ueId: "2.2", q: "La valve mitrale se situe entre :", options: ["Oreillette et ventricule droits", "Oreillette et ventricule gauches", "Ventricule gauche et aorte", "Oreillette droite et veine cave"], correct: 1,
    explication: "La mitrale (2 cuspides) est à gauche ; la tricuspide (3 cuspides) est à droite.", ref: "UE 2.2", diff: 1 },
  { ueId: "2.2", q: "Quelle enveloppe du cœur est la plus externe ?", options: ["Endocarde", "Myocarde", "Péricarde", "Septum"], correct: 2,
    explication: "De l'extérieur vers l'intérieur : péricarde (séreuse externe), myocarde (muscle), endocarde (interne).", ref: "UE 2.2", diff: 1 },
  { ueId: "2.2", q: "Le nœud sinusal se trouve dans :", options: ["Le ventricule gauche", "Le septum interventriculaire", "L'oreillette droite", "L'aorte"], correct: 2,
    explication: "Le nœud sinusal (de Keith et Flack), centre rythmogène, est dans l'oreillette droite.", ref: "UE 2.2", diff: 2 },
  { ueId: "2.2", q: "Sur l'ECG, le complexe QRS correspond à :", options: ["La dépolarisation des oreillettes", "La dépolarisation/systole des ventricules", "La repolarisation des ventricules", "Le repos cardiaque"], correct: 1,
    explication: "Onde P = oreillettes, QRS = ventricules (vidange), T = repolarisation des ventricules.", ref: "UE 2.2", diff: 2 },
  { ueId: "2.2", q: "Le nerf vague (parasympathique) a sur le cœur un effet :", options: ["Chronotrope positif (accélère)", "Chronotrope négatif (ralentit)", "Vasoconstricteur", "Aucun effet"], correct: 1,
    explication: "Le nerf vague agit par l'acétylcholine, effet chronotrope négatif, assure le tonus vagal de repos (70 bpm).", ref: "UE 2.2", diff: 2 },
  { ueId: "2.2", q: "Quelle hormone du SRAA provoque rétention de sodium et perte de potassium ?", options: ["Rénine", "Angiotensine 1", "Aldostérone", "Insuline"], correct: 2,
    explication: "L'aldostérone retient sodium et eau, élimine le potassium → ↑ natrémie, volémie et pression artérielle.", ref: "UE 2.2", diff: 2 },
  { ueId: "2.2", q: "Quelle couche est la tunique interne d'une artère ?", options: ["Adventice", "Média", "Intima", "Séreuse"], correct: 2,
    explication: "De l'extérieur : adventice, média (muscle lisse), intima (interne).", ref: "UE 2.2", diff: 1 },
  { ueId: "2.2", q: "Combien de lobes a le poumon droit ?", options: ["1", "2", "3", "4"], correct: 2,
    explication: "Poumon droit = 3 lobes (sup, moyen, inf) ; poumon gauche = 2 lobes (plus petit à cause du cœur).", ref: "UE 2.2", diff: 1 },
  { ueId: "2.2", q: "Le surfactant alvéolaire sert à :", options: ["Réchauffer l'air", "Éviter l'affaissement des alvéoles", "Filtrer les poussières", "Produire du mucus"], correct: 1,
    explication: "Le surfactant réduit la tension superficielle et empêche les parois alvéolaires de se coller.", ref: "UE 2.2", diff: 2 },
  { ueId: "2.2", q: "L'inspiration est :", options: ["Un phénomène passif", "Un phénomène actif nécessitant le diaphragme", "Sans rôle musculaire", "Plus longue que l'expiration toujours"], correct: 1,
    explication: "L'inspiration est active (muscle diaphragme), l'expiration est passive (rétraction élastique).", ref: "UE 2.2", diff: 2 },
  { ueId: "2.2", q: "Le facteur intrinsèque sécrété par l'estomac permet l'absorption de :", options: ["La vitamine D", "Le fer", "La vitamine B12", "Le calcium"], correct: 2,
    explication: "Le facteur intrinsèque (FI) agit dans l'iléon et permet l'absorption de la vitamine B12.", ref: "UE 2.2", diff: 2 },
  { ueId: "2.2", q: "Quel nutriment ne passe PAS directement dans le sang après digestion ?", options: ["Le glucose", "Les acides aminés", "Les lipides", "L'eau"], correct: 2,
    explication: "Tous les nutriments passent dans le sang sauf les lipides.", ref: "UE 2.2", diff: 2 },
  { ueId: "2.2", q: "Quel organe est une glande mixte (endocrine + exocrine) ?", options: ["Le foie", "Le pancréas", "La rate", "L'estomac"], correct: 1,
    explication: "Le pancréas : endocrine (îlots de Langerhans : insuline/glucagon) et exocrine (suc pancréatique).", ref: "UE 2.2", diff: 1 },
  { ueId: "2.2", q: "Le méléna correspond à :", options: ["Du sang rouge vomi", "Du sang rouge par l'anus", "Du sang noir digéré dans les selles", "Du sang dans les urines"], correct: 2,
    explication: "Méléna = sang noir digéré dans les selles ; hématémèse = vomissement de sang ; rectorragie = sang rouge par l'anus.", ref: "UE 2.2", diff: 2 },
  { ueId: "2.2", q: "L'aire de Broca (langage parlé) se trouve dans le lobe :", options: ["Occipital", "Temporal", "Frontal", "Pariétal"], correct: 2,
    explication: "Le lobe frontal abrite l'aire de Broca (langage parlé) ; Wernicke (compréhension) est dans le temporal.", ref: "UE 2.2", diff: 2 },
  { ueId: "2.2", q: "Un AVC de l'hémisphère gauche provoque une paralysie :", options: ["Du côté gauche du corps", "Du côté droit (controlatérale)", "Des deux côtés", "Du visage uniquement"], correct: 1,
    explication: "À cause de la décussation de la voie pyramidale au bulbe rachidien, la paralysie est controlatérale.", ref: "UE 2.2", diff: 2 },
  { ueId: "2.2", q: "La lésion du locus niger provoque :", options: ["La maladie d'Alzheimer", "La maladie de Parkinson", "Un syndrome cérébelleux", "Une aphasie"], correct: 1,
    explication: "Le locus niger appartient au système extra-pyramidal ; sa lésion donne la maladie de Parkinson.", ref: "UE 2.2", diff: 2 },
  { ueId: "2.2", q: "Le rein est un organe :", options: ["Intrapéritonéal abdominal", "Pair et rétropéritonéal (lombaire)", "Impair médian", "Situé dans le pelvis"], correct: 1,
    explication: "Le rein est pair, rétropéritonéal, situé dans la région lombaire.", ref: "UE 2.2", diff: 1 },
  { ueId: "2.2", q: "Quelles cellules sécrètent la testostérone ?", options: ["Les tubes séminifères", "Les cellules de Leydig", "Les îlots de Langerhans", "Les cellules de Sertoli uniquement"], correct: 1,
    explication: "Les cellules de Leydig (endocrines) sécrètent la testostérone à partir des lipides.", ref: "UE 2.2", diff: 2 },
  { ueId: "2.2", q: "Quelle est la fréquence cardiaque normale chez l'adulte au repos ?", options: ["40 à 50 bpm", "60 à 80 bpm", "90 à 120 bpm", "120 à 140 bpm"], correct: 1,
    explication: "Norme adulte : 60 à 80 bpm (moyenne 70). 90–120 = enfant, 120–140 = nouveau-né.", ref: "UE 2.2", diff: 1 },
  { ueId: "2.2", q: "La valeur normale de la SpO₂ en air ambiant est :", options: ["80 à 85 %", "90 à 94 %", "95 à 100 %", "100 à 105 %"], correct: 2,
    explication: "La saturation normale en oxygène est de 95 à 100 % en air ambiant.", ref: "UE 2.2", diff: 1 },
  { ueId: "2.2", q: "On parle de fièvre lorsque la température dépasse :", options: ["37 °C", "37,5 °C", "38 °C", "39 °C"], correct: 2,
    explication: "Fièvre = température corporelle au-dessus de 38 °C ; hypothermie en dessous de 35 °C.", ref: "UE 2.2", diff: 1 },
  { ueId: "2.2", q: "La supination correspond au mouvement de :", options: ["Tourner la paume vers le bas", "Tourner la paume vers le haut", "Écarter le membre", "Rapprocher le membre"], correct: 1,
    explication: "Supination = paume vers le haut (soulever) ; pronation = paume vers le bas (prendre).", ref: "UE 2.2", diff: 1 },
];

export const flashcards = [
  { ueId: "2.2", recto: "Où se trouve le cœur et quel est son grand axe ?", verso: "Dans le médiastin (entre les 2 poumons), sur le diaphragme ; grand axe à gauche, apex au 5e espace intercostal gauche." },
  { ueId: "2.2", recto: "Tricuspide vs mitrale : où ?", verso: "Tricuspide (3 cuspides) à droite ; mitrale (2 cuspides) à gauche." },
  { ueId: "2.2", recto: "Les 3 enveloppes du cœur, de l'extérieur vers l'intérieur ?", verso: "Péricarde (séreuse externe), myocarde (muscle), endocarde (interne)." },
  { ueId: "2.2", recto: "Quel est le centre rythmogène du cœur ?", verso: "Le nœud sinusal (de Keith et Flack), situé dans l'oreillette droite." },
  { ueId: "2.2", recto: "Que représentent les ondes P, QRS et T de l'ECG ?", verso: "P = systole des oreillettes ; QRS = systole des ventricules ; T = repolarisation/diastole des ventricules." },
  { ueId: "2.2", recto: "Sympathique vs parasympathique sur le cœur ?", verso: "Sympathique (noradrénaline) accélère (chronotrope +) ; parasympathique/nerf vague (acétylcholine) ralentit (chronotrope -)." },
  { ueId: "2.2", recto: "Quel système hormonal augmente la pression artérielle ?", verso: "Le SRAA : rénine → angiotensine 1 → angiotensine 2 (vasoconstriction) ; aldostérone (rétention Na+/eau)." },
  { ueId: "2.2", recto: "Les 3 tuniques d'une artère ?", verso: "Adventice (externe), média (muscle lisse), intima (interne)." },
  { ueId: "2.2", recto: "Combien de lobes par poumon ?", verso: "Poumon droit = 3 lobes ; poumon gauche = 2 lobes (plus petit à cause du cœur)." },
  { ueId: "2.2", recto: "Inspiration et expiration : actives ou passives ?", verso: "Inspiration = active (diaphragme) ; expiration = passive (rétraction élastique)." },
  { ueId: "2.2", recto: "Rôle du surfactant ?", verso: "Réduire la tension superficielle pour éviter l'affaissement des alvéoles." },
  { ueId: "2.2", recto: "Quel nutriment ne passe pas dans le sang après digestion ?", verso: "Les lipides (tous les autres nutriments y passent)." },
  { ueId: "2.2", recto: "Hématémèse, méléna, rectorragie ?", verso: "Hématémèse = vomir du sang ; méléna = sang noir digéré dans les selles ; rectorragie = sang rouge par l'anus." },
  { ueId: "2.2", recto: "Le pancréas est une glande de quel type ?", verso: "Glande mixte : endocrine (insuline/glucagon) + exocrine (suc pancréatique : amylase, lipase)." },
  { ueId: "2.2", recto: "Aire de Broca et aire de Wernicke ?", verso: "Broca (lobe frontal) = langage parlé ; Wernicke (lobe temporal) = compréhension du langage." },
  { ueId: "2.2", recto: "Pourquoi un AVC gauche paralyse-t-il le côté droit ?", verso: "Décussation de la voie pyramidale au bulbe rachidien → contrôle controlatéral." },
  { ueId: "2.2", recto: "Le rein : situation et nombre ?", verso: "Pair, rétropéritonéal, dans la région lombaire." },
  { ueId: "2.2", recto: "Quelles cellules produisent la testostérone ?", verso: "Les cellules de Leydig (endocrines) du testicule, à partir des lipides." },
  { ueId: "2.2", recto: "Normes adultes : FC, FR, SpO₂, température ?", verso: "FC 60-80 bpm ; FR 12-20/min ; SpO₂ 95-100 % ; T° ≈37 °C (fièvre >38, hypothermie <35)." },
  { ueId: "2.2", recto: "Supination vs pronation ?", verso: "Supination = paume vers le haut (soulever) ; pronation = paume vers le bas (prendre)." },
];
