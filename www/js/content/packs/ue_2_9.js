export const fiches = [
  { id: "f_2_9_cancerogenese", ueId: "2.9", type: "cours",
    titre: "Cancérogenèse : du normal au tumoral",
    resume: "Mécanismes de transformation d'une cellule normale en cellule cancéreuse et caractéristiques de la tumeur.",
    tags: ["cancérogenèse", "oncogène", "tumeur"],
    html: `<h3>Définition</h3>
<p>Une <span class="key" data-term="tumeur">tumeur</span> (ou néoplasie) est une prolifération cellulaire anormale, excessive et autonome, échappant aux mécanismes normaux de régulation. Le <span class="key" data-term="cancer">cancer</span> désigne une tumeur <strong>maligne</strong>.</p>
<h3>Étapes de la cancérogenèse</h3>
<ul>
<li><strong>Initiation</strong> : altération irréversible de l'ADN (mutation) par un agent carcinogène.</li>
<li><strong>Promotion</strong> : prolifération de la cellule initiée sous l'effet de facteurs promoteurs.</li>
<li><strong>Progression</strong> : acquisition d'un phénotype malin (invasion, instabilité génétique, métastases).</li>
</ul>
<h3>Gènes impliqués</h3>
<table class="tbl">
<tr><th>Type de gène</th><th>Rôle normal</th><th>En cancérologie</th></tr>
<tr><td><span class="key" data-term="oncogène">Oncogènes</span></td><td>Stimulent la division</td><td>Activés (accélérateur bloqué)</td></tr>
<tr><td><span class="key" data-term="gène suppresseur de tumeur">Gènes suppresseurs</span></td><td>Freinent la division (ex. p53)</td><td>Inactivés (frein cassé)</td></tr>
<tr><td>Gènes de réparation</td><td>Réparent l'ADN</td><td>Défaillants (mutations accumulées)</td></tr>
</table>
<div class="callout"><div class="callout-t">À retenir</div>Le cancer résulte d'une accumulation de mutations : activation d'oncogènes ET inactivation de gènes suppresseurs. Une seule mutation ne suffit pas.</div>
<h3>Caractéristiques de la cellule cancéreuse</h3>
<ul>
<li>Prolifération autonome et illimitée (immortalité).</li>
<li>Perte de l'apoptose (mort cellulaire programmée).</li>
<li>Néo-angiogenèse (création de vaisseaux nourriciers).</li>
<li>Capacité d'invasion et de migration (métastases).</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« I-P-P » : Initiation, Promotion, Progression = les 3 étapes de la cancérogenèse.</div>`,
    refs: ["UE 2.9"] },

  { id: "f_2_9_benin_malin", ueId: "2.9", type: "patho",
    titre: "Tumeur bénigne vs tumeur maligne",
    resume: "Critères distinctifs entre une tumeur bénigne et une tumeur maligne (cancer).",
    tags: ["bénin", "malin", "métastase"],
    html: `<h3>Comparaison</h3>
<table class="tbl">
<tr><th>Critère</th><th>Tumeur bénigne</th><th>Tumeur maligne</th></tr>
<tr><td>Croissance</td><td>Lente</td><td>Rapide</td></tr>
<tr><td>Limites</td><td>Bien limitée, encapsulée</td><td>Mal limitée, infiltrante</td></tr>
<tr><td>Cellules</td><td>Bien différenciées</td><td>Atypiques, indifférenciées</td></tr>
<tr><td><span class="key" data-term="métastase">Métastases</span></td><td>Jamais</td><td>Possibles</td></tr>
<tr><td>Récidive</td><td>Rare</td><td>Fréquente</td></tr>
<tr><td>Pronostic</td><td>Bon (sauf localisation gênante)</td><td>Réservé</td></tr>
</table>
<div class="callout"><div class="callout-t">Point clé</div>Le critère absolu de malignité est la capacité à donner des <strong>métastases</strong> (dissémination à distance).</div>
<h3>Voies de dissémination des métastases</h3>
<ul>
<li><strong>Lymphatique</strong> : vers les ganglions (premier relais).</li>
<li><strong>Hématogène</strong> : par le sang (foie, poumon, os, cerveau).</li>
<li><strong>Par contiguïté</strong> : envahissement des organes voisins.</li>
<li><strong>Voie cavitaire</strong> : essaimage dans le péritoine ou la plèvre.</li>
</ul>
<h3>Nomenclature</h3>
<ul>
<li>Suffixe <strong>-ome</strong> : tumeur bénigne (adénome, lipome, fibrome).</li>
<li><strong>Carcinome</strong> : cancer d'origine épithéliale (le plus fréquent).</li>
<li><strong>Sarcome</strong> : cancer d'origine conjonctive (os, muscle, graisse).</li>
<li><strong>Leucémies / lymphomes</strong> : cancers du tissu hématopoïétique.</li>
</ul>`,
    refs: ["UE 2.9"] },

  { id: "f_2_9_diagnostic_tnm", ueId: "2.9", type: "cours",
    titre: "Diagnostic, classification TNM et marqueurs",
    resume: "Démarche diagnostique en cancérologie, classification TNM et principaux marqueurs tumoraux.",
    tags: ["TNM", "biopsie", "marqueurs"],
    html: `<h3>Démarche diagnostique</h3>
<ul>
<li><strong>Clinique</strong> : interrogatoire, examen physique, signes d'appel.</li>
<li><strong>Imagerie</strong> : radio, échographie, scanner, IRM, TEP-scan (bilan d'extension).</li>
<li><strong>Anatomopathologie</strong> : la <span class="key" data-term="biopsie">biopsie</span> est l'examen de certitude. Aucun traitement sans preuve histologique.</li>
<li><strong>Biologie</strong> : marqueurs tumoraux (suivi surtout).</li>
</ul>
<h3>Classification TNM</h3>
<table class="tbl">
<tr><th>Lettre</th><th>Signification</th></tr>
<tr><td><strong>T</strong></td><td>Tumeur : taille et extension locale (T0 à T4)</td></tr>
<tr><td><strong>N</strong></td><td>Nodes : atteinte ganglionnaire (N0 à N3)</td></tr>
<tr><td><strong>M</strong></td><td>Métastases à distance (M0 ou M1)</td></tr>
</table>
<div class="callout"><div class="callout-t">Utilité</div>La classification <span class="key" data-term="TNM">TNM</span> détermine le <strong>stade</strong> du cancer (I à IV), guide le traitement et donne le pronostic.</div>
<h3>Principaux marqueurs tumoraux</h3>
<table class="tbl">
<tr><th>Marqueur</th><th>Cancer associé</th></tr>
<tr><td>PSA</td><td>Prostate</td></tr>
<tr><td>CA 125</td><td>Ovaire</td></tr>
<tr><td>CA 15-3</td><td>Sein</td></tr>
<tr><td>CA 19-9</td><td>Pancréas, digestif</td></tr>
<tr><td>ACE</td><td>Côlon</td></tr>
<tr><td>AFP</td><td>Foie, testicule</td></tr>
</table>
<div class="callout"><div class="callout-t">Attention</div>Les marqueurs servent surtout au <strong>suivi</strong> et à la détection de récidives, rarement au dépistage. Ils peuvent être normaux malgré un cancer.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« T-N-M » : Tumeur, Nodes (ganglions), Métastases.</div>`,
    refs: ["UE 2.9"] },

  { id: "f_2_9_traitements", ueId: "2.9", type: "pharmaco",
    titre: "Traitements du cancer et soins infirmiers",
    resume: "Modalités thérapeutiques (chirurgie, chimiothérapie, radiothérapie) et surveillance infirmière.",
    tags: ["chimiothérapie", "radiothérapie", "aplasie"],
    html: `<h3>Les grandes modalités</h3>
<ul>
<li><strong>Chirurgie</strong> : exérèse de la tumeur, traitement local de référence des tumeurs solides.</li>
<li><strong>Chimiothérapie</strong> : traitement général (systémique), cible les cellules à division rapide.</li>
<li><strong>Radiothérapie</strong> : traitement local par rayonnements ionisants.</li>
<li><strong>Thérapies ciblées / immunothérapie / hormonothérapie</strong> : traitements spécifiques.</li>
</ul>
<h3>Chimiothérapie : effets indésirables</h3>
<table class="tbl">
<tr><th>Toxicité</th><th>Manifestation</th></tr>
<tr><td>Hématologique</td><td><span class="key" data-term="aplasie médullaire">Aplasie</span> : anémie, neutropénie, thrombopénie</td></tr>
<tr><td>Digestive</td><td>Nausées, vomissements, mucite, diarrhée</td></tr>
<tr><td>Cutanée</td><td>Alopécie, toxicité unguéale</td></tr>
<tr><td>Autres</td><td>Asthénie, neurotoxicité, toxicité cardiaque/rénale</td></tr>
</table>
<div class="callout"><div class="callout-t">Urgence : neutropénie fébrile</div>Une fièvre &gt;= 38,5 C chez un patient en <span class="key" data-term="aplasie médullaire">aplasie</span> est une <strong>urgence vitale</strong> : risque de sepsis. Hémocultures et antibiothérapie en urgence.</div>
<h3>Surveillance infirmière chimiothérapie</h3>
<ul>
<li>NFS avant chaque cure (vérifier que l'aplasie est résolue).</li>
<li>Surveillance de la voie veineuse centrale (PAC) : risque d'<strong>extravasation</strong> (produits vésicants).</li>
<li>Prévention des nausées (antiémétiques), surveillance de l'hydratation.</li>
<li>Mesures d'hygiène et prévention des infections (isolement protecteur si besoin).</li>
</ul>
<h3>Radiothérapie : effets et soins</h3>
<ul>
<li><strong>Radiodermite</strong> : ne pas appliquer de crème avant la séance, pas de savon parfumé, protéger du soleil.</li>
<li>Asthénie, effets selon la zone irradiée (mucite ORL, troubles digestifs, cystite).</li>
</ul>
<div class="callout"><div class="callout-t">Dispositifs</div>Manipulation des cytotoxiques : protection du soignant (gants, blouse, élimination DASRI spécifique). Les excreta sont contaminants 48 h après la cure.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Les 3 lignées en aplasie : « GRP » = Globules rouges (anémie), Globules blancs/neutrophiles (infection), Plaquettes (hémorragie).</div>`,
    refs: ["UE 2.9"] },
];

export const qcm = [
  { ueId: "2.9", q: "Quel est le critère absolu de malignité d'une tumeur ?", options: ["La croissance rapide", "La capacité à donner des métastases", "L'absence de capsule", "Le caractère douloureux"], correct: 1,
    explication: "Seule la capacité à disséminer à distance (métastases) signe de façon absolue la malignité. La croissance rapide et l'absence de capsule sont évocatrices mais non spécifiques.", ref: "UE 2.9", diff: 1 },

  { ueId: "2.9", q: "Les trois étapes de la cancérogenèse sont :", options: ["Mutation, division, mort", "Initiation, promotion, progression", "Inflammation, prolifération, nécrose", "Dysplasie, métaplasie, hyperplasie"], correct: 1,
    explication: "La cancérogenèse comprend l'initiation (mutation irréversible de l'ADN), la promotion (prolifération de la cellule initiée) et la progression (acquisition du phénotype malin).", ref: "UE 2.9", diff: 1 },

  { ueId: "2.9", q: "Un oncogène est un gène qui, lorsqu'il est activé :", options: ["Freine la division cellulaire", "Stimule la division cellulaire", "Répare l'ADN", "Déclenche l'apoptose"], correct: 1,
    explication: "Les oncogènes stimulent la prolifération. Leur activation (mutation gain de fonction) agit comme un accélérateur bloqué. À l'inverse, les gènes suppresseurs (ex. p53) freinent la division.", ref: "UE 2.9", diff: 2 },

  { ueId: "2.9", q: "Le gène p53 est :", options: ["Un oncogène", "Un gène suppresseur de tumeur", "Un marqueur tumoral sérique", "Un facteur de croissance"], correct: 1,
    explication: "p53 est le principal gène suppresseur de tumeur (le 'gardien du génome') : il bloque le cycle cellulaire et déclenche l'apoptose en cas de lésion de l'ADN. Son inactivation favorise le cancer.", ref: "UE 2.9", diff: 2 },

  { ueId: "2.9", q: "Quelle voie de dissémination des métastases constitue le premier relais habituel ?", options: ["Hématogène", "Lymphatique (ganglions)", "Cavitaire", "Par contiguïté"], correct: 1,
    explication: "Les cellules tumorales gagnent d'abord les ganglions lymphatiques de drainage (premier relais), ce qui explique l'importance du curage ganglionnaire et de la recherche du ganglion sentinelle.", ref: "UE 2.9", diff: 2 },

  { ueId: "2.9", q: "Dans la classification TNM, la lettre N désigne :", options: ["La taille de la tumeur", "L'atteinte des ganglions lymphatiques", "Le nombre de métastases", "Le grade histologique"], correct: 1,
    explication: "T = tumeur (taille/extension locale), N = nodes (ganglions), M = métastases à distance. La classification TNM définit le stade et oriente le traitement.", ref: "UE 2.9", diff: 1 },

  { ueId: "2.9", q: "Quel examen apporte la certitude diagnostique en cancérologie ?", options: ["Le scanner", "Le dosage des marqueurs tumoraux", "La biopsie (anatomopathologie)", "Le TEP-scan"], correct: 2,
    explication: "Seul l'examen anatomopathologique d'un prélèvement (biopsie) confirme le diagnostic. Aucun traitement carcinologique ne débute sans preuve histologique. L'imagerie sert au bilan d'extension.", ref: "UE 2.9", diff: 1 },

  { ueId: "2.9", q: "Le marqueur tumoral PSA est associé au cancer :", options: ["Du sein", "De la prostate", "De l'ovaire", "Du pancréas"], correct: 1,
    explication: "Le PSA (antigène prostatique spécifique) est le marqueur du cancer de la prostate, utile au suivi. Le CA 15-3 correspond au sein, le CA 125 à l'ovaire, le CA 19-9 au pancréas.", ref: "UE 2.9", diff: 2 },

  { ueId: "2.9", q: "Un cancer d'origine épithéliale est appelé :", options: ["Sarcome", "Carcinome", "Lymphome", "Adénome"], correct: 1,
    explication: "Carcinome = cancer épithélial (le plus fréquent). Sarcome = tissu conjonctif (os, muscle). Lymphome = tissu lymphoïde. L'adénome est une tumeur bénigne glandulaire.", ref: "UE 2.9", diff: 2 },

  { ueId: "2.9", q: "Le suffixe '-ome' (ex. lipome, fibrome) désigne en général :", options: ["Une tumeur maligne", "Une tumeur bénigne", "Une métastase", "Une inflammation"], correct: 1,
    explication: "Le suffixe -ome désigne le plus souvent une tumeur bénigne (lipome, adénome, fibrome). Exceptions notables : lymphome, mélanome, séminome qui sont malins.", ref: "UE 2.9", diff: 3 },

  { ueId: "2.9", q: "La chimiothérapie cytotoxique agit préférentiellement sur :", options: ["Les cellules au repos", "Les cellules à division rapide", "Uniquement les cellules tumorales", "Les cellules nerveuses"], correct: 1,
    explication: "La chimiothérapie cible les cellules en division rapide. Elle n'est pas sélective des cellules tumorales : elle touche aussi les cellules saines à renouvellement rapide (moelle, muqueuses, cheveux), d'où ses effets indésirables.", ref: "UE 2.9", diff: 2 },

  { ueId: "2.9", q: "L'aplasie médullaire post-chimiothérapie se traduit par :", options: ["Une hyperleucocytose", "Une anémie, neutropénie et thrombopénie", "Une polyglobulie", "Une hypercalcémie"], correct: 1,
    explication: "L'aplasie est l'effondrement des trois lignées sanguines : anémie (globules rouges), neutropénie (globules blancs, risque infectieux) et thrombopénie (plaquettes, risque hémorragique). La NFS est contrôlée avant chaque cure.", ref: "UE 2.9", diff: 2 },

  { ueId: "2.9", q: "Une fièvre à 39 C chez un patient neutropénique après chimiothérapie est :", options: ["Bénigne, surveillance simple", "Une urgence vitale (risque de sepsis)", "Un effet attendu sans gravité", "Une contre-indication à toute hydratation"], correct: 1,
    explication: "La neutropénie fébrile est une urgence : l'absence de polynucléaires expose à un sepsis foudroyant. Conduite : hémocultures, bilan, antibiothérapie probabiliste large spectre en urgence.", ref: "UE 2.9", diff: 1 },

  { ueId: "2.9", q: "Lors de l'administration d'un cytotoxique vésicant sur voie veineuse, le risque local majeur est :", options: ["L'hématome", "L'extravasation (nécrose tissulaire)", "La phlébite chimique bénigne", "L'allergie cutanée banale"], correct: 1,
    explication: "L'extravasation d'un produit vésicant hors de la veine provoque une nécrose tissulaire grave. D'où l'usage fréquent d'un dispositif veineux central (PAC) et une surveillance rigoureuse du point de perfusion.", ref: "UE 2.9", diff: 2 },

  { ueId: "2.9", q: "Concernant la radiothérapie et la radiodermite, quelle attitude est correcte ?", options: ["Appliquer une crème grasse juste avant la séance", "Ne pas appliquer de crème avant la séance et protéger la peau du soleil", "Frotter la zone avec un savon parfumé", "Exposer la zone au soleil pour cicatriser"], correct: 1,
    explication: "Aucune crème ne doit être appliquée avant la séance (risque de majorer la dose en surface). On utilise une hygiène douce sans savon parfumé, on évite les frottements et l'exposition solaire de la zone irradiée.", ref: "UE 2.9", diff: 2 },

  { ueId: "2.9", q: "La radiothérapie est un traitement :", options: ["Systémique (général)", "Local par rayonnements ionisants", "Hormonal", "Chirurgical"], correct: 1,
    explication: "La radiothérapie est un traitement loco-régional utilisant des rayonnements ionisants pour détruire les cellules tumorales dans un volume cible. La chimiothérapie, elle, est systémique.", ref: "UE 2.9", diff: 1 },

  { ueId: "2.9", q: "Parmi ces caractéristiques, laquelle distingue la cellule cancéreuse de la cellule normale ?", options: ["Sensibilité conservée à l'apoptose", "Prolifération autonome et perte de l'apoptose", "Différenciation parfaite", "Arrêt spontané de la division"], correct: 1,
    explication: "La cellule cancéreuse prolifère de façon autonome et illimitée, échappe à l'apoptose, induit une néo-angiogenèse et peut envahir/migrer. Elle perd la régulation normale du cycle cellulaire.", ref: "UE 2.9", diff: 2 },

  { ueId: "2.9", q: "Le bilan d'extension d'un cancer permet de :", options: ["Confirmer le diagnostic histologique", "Rechercher des métastases et préciser le stade", "Doser les marqueurs tumoraux", "Évaluer la douleur"], correct: 1,
    explication: "Le bilan d'extension (scanner, TEP-scan, IRM...) recherche l'atteinte ganglionnaire et les métastases pour établir le stade TNM. Le diagnostic de certitude, lui, repose sur la biopsie.", ref: "UE 2.9", diff: 2 },

  { ueId: "2.9", q: "Un traitement administré avant la chirurgie pour réduire la tumeur est qualifié de :", options: ["Adjuvant", "Néo-adjuvant", "Palliatif", "Curatif exclusif"], correct: 1,
    explication: "Néo-adjuvant = avant le traitement local (chirurgie) pour réduire la taille tumorale. Adjuvant = après la chirurgie pour détruire les cellules résiduelles. Palliatif = visée de confort sans guérison.", ref: "UE 2.9", diff: 3 },

  { ueId: "2.9", q: "Concernant la manipulation des cytotoxiques par l'infirmier, quelle affirmation est exacte ?", options: ["Aucune protection n'est nécessaire", "Port de gants/blouse, élimination en DASRI, excreta contaminants 48 h", "Les déchets vont avec les ordures ménagères", "Les excreta du patient ne sont jamais contaminants"], correct: 1,
    explication: "Les cytotoxiques imposent une protection du soignant (gants, blouse, parfois masque/lunettes), une élimination spécifique (DASRI cytotoxiques) et la précaution que les excreta du patient restent contaminants environ 48 h après la cure.", ref: "UE 2.9", diff: 2 },

  { ueId: "2.9", q: "Le tabac est un facteur de risque majeur reconnu de cancer notamment :", options: ["Du col de l'utérus uniquement", "Du poumon, des voies aérodigestives et de la vessie", "Du seul cancer du sein", "D'aucun cancer démontré"], correct: 1,
    explication: "Le tabac est un carcinogène avéré responsable de cancers du poumon, des voies aérodigestives supérieures (bouche, larynx, oesophage) et de la vessie, entre autres. C'est le premier facteur de risque évitable.", ref: "UE 2.9", diff: 2 },
];

export const flashcards = [
  { ueId: "2.9", recto: "Qu'est-ce qu'une tumeur ?", verso: "Prolifération cellulaire anormale, excessive et autonome échappant aux régulations normales. Maligne = cancer." },
  { ueId: "2.9", recto: "Quelles sont les 3 étapes de la cancérogenèse ?", verso: "Initiation (mutation), promotion (prolifération), progression (phénotype malin)." },
  { ueId: "2.9", recto: "Différence oncogène / gène suppresseur de tumeur ?", verso: "Oncogène : stimule la division (activé = accélérateur). Gène suppresseur (ex. p53) : freine la division (inactivé = frein cassé)." },
  { ueId: "2.9", recto: "Critère absolu de malignité ?", verso: "La capacité à donner des métastases (dissémination à distance)." },
  { ueId: "2.9", recto: "Que signifie TNM ?", verso: "T = tumeur (taille/extension), N = ganglions (nodes), M = métastases à distance. Définit le stade." },
  { ueId: "2.9", recto: "Examen de certitude du diagnostic de cancer ?", verso: "La biopsie (examen anatomopathologique). Pas de traitement sans preuve histologique." },
  { ueId: "2.9", recto: "Que signifie carcinome / sarcome ?", verso: "Carcinome = cancer épithélial (fréquent). Sarcome = cancer du tissu conjonctif (os, muscle, graisse)." },
  { ueId: "2.9", recto: "Marqueur tumoral de la prostate ?", verso: "PSA (antigène prostatique spécifique)." },
  { ueId: "2.9", recto: "Qu'est-ce que l'aplasie médullaire après chimiothérapie ?", verso: "Effondrement des 3 lignées : anémie, neutropénie (infection), thrombopénie (hémorragie)." },
  { ueId: "2.9", recto: "Pourquoi une fièvre chez un patient neutropénique est une urgence ?", verso: "Risque de sepsis foudroyant : hémocultures + antibiothérapie large spectre en urgence." },
  { ueId: "2.9", recto: "Principal risque local d'un cytotoxique vésicant sur voie veineuse ?", verso: "L'extravasation, responsable de nécrose tissulaire (d'où l'usage d'un PAC)." },
  { ueId: "2.9", recto: "Conduite à tenir cutanée en radiothérapie (radiodermite) ?", verso: "Pas de crème avant la séance, hygiène douce sans savon parfumé, éviter soleil et frottements." },
  { ueId: "2.9", recto: "Néo-adjuvant vs adjuvant ?", verso: "Néo-adjuvant = avant la chirurgie (réduire la tumeur). Adjuvant = après la chirurgie (cellules résiduelles)." },
  { ueId: "2.9", recto: "Voies de dissémination des métastases ?", verso: "Lymphatique (1er relais ganglionnaire), hématogène, par contiguïté, cavitaire." },
  { ueId: "2.9", recto: "Premier facteur de risque évitable de cancer ?", verso: "Le tabac (poumon, voies aérodigestives, vessie...)." },
  { ueId: "2.9", recto: "Que désigne le suffixe '-ome' ?", verso: "Souvent une tumeur bénigne (lipome, adénome). Exceptions malignes : lymphome, mélanome, séminome." },
];
