export const fiches = [
  { id: "fx_ue_4_3_plus_rcp_chaine_survie", ueId: "4.3", type: "cours",
    titre: "Arrêt cardiaque et RCP : chaîne de survie et algorithme",
    resume: "Reconnaissance de l'arrêt cardiaque, chaîne de survie et déroulé de la réanimation cardio-pulmonaire de base et spécialisée.",
    tags: ["rcp", "arret-cardiaque", "defibrillation", "urgence-vitale"],
    html: `<p>L'<span class="key" data-term="arret cardiaque">arrêt cardiaque</span> (AC) se reconnaît devant une victime <strong>inconsciente</strong> qui <strong>ne respire pas ou respire anormalement</strong> (gasps). Le diagnostic doit être posé en moins de <strong>10 secondes</strong> : on ne perd pas de temps à chercher le pouls si on n'est pas entraîné.</p>
<h3>La chaîne de survie</h3>
<ul>
<li><strong>1. Reconnaissance précoce et alerte</strong> : appeler le 15 (SAMU) / 112.</li>
<li><strong>2. RCP précoce</strong> : massage cardiaque immédiat par le premier témoin.</li>
<li><strong>3. Défibrillation précoce</strong> : <span class="key" data-term="DAE">DAE</span> (défibrillateur automatisé externe) dès que possible.</li>
<li><strong>4. Réanimation spécialisée et soins post-arrêt</strong> : prise en charge médicalisée.</li>
</ul>
<h3>Algorithme de RCP de base (adulte)</h3>
<table class="tbl">
<tr><th>Paramètre</th><th>Adulte</th></tr>
<tr><td>Rythme compressions</td><td>100 à 120 / min</td></tr>
<tr><td>Profondeur compressions</td><td>5 à 6 cm</td></tr>
<tr><td>Rapport compressions/insufflations</td><td>30 / 2</td></tr>
<tr><td>Relâchement thoracique</td><td>Complet entre chaque compression</td></tr>
</table>
<div class="callout"><div class="callout-t">Point clé : minimiser les interruptions</div>Les interruptions du massage cardiaque doivent être les plus courtes possibles (idéalement &lt; 10 s, y compris pour l'analyse du DAE). Un relais des sauveteurs toutes les 2 minutes limite la fatigue et préserve l'efficacité des compressions.</div>
<h3>Spécificités pédiatriques</h3>
<p>Chez l'enfant et le nourrisson, l'arrêt est le plus souvent d'origine <strong>hypoxique</strong> (asphyxie) : on débute par <strong>5 insufflations initiales</strong> avant les compressions. Le rapport est de <strong>15/2</strong> à deux sauveteurs professionnels (30/2 si sauveteur isolé).</p>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo : SAFE / RCP</div>Reconnaître (inconscience + absence de respiration normale) → Alerter (15) → Comprimer (massage 30/2) → Défibriller (DAE dès disponible). « Pousse fort, pousse vite, lâche complètement, change souvent. »</div>
<p>Le <span class="key" data-term="DAE">DAE</span> analyse le rythme et ne délivre un choc que sur les rythmes <strong>choquables</strong> : fibrillation ventriculaire et tachycardie ventriculaire sans pouls. L'asystolie et l'activité électrique sans pouls ne sont <strong>pas</strong> choquables.</p>`,
    refs: ["Recommandations ERC/CFRC 2021 sur la RCP", "Référentiel IFSI 2009 - UE 4.3 Soins d'urgence"] },

  { id: "fx_ue_4_3_plus_detresses_vitales_abcde", ueId: "4.3", type: "cours",
    titre: "Détresses vitales : évaluation ABCDE et signes de gravité",
    resume: "Démarche d'évaluation structurée ABCDE des détresses respiratoires, circulatoires et neurologiques avec leurs signes d'alarme.",
    tags: ["abcde", "detresse-vitale", "choc", "evaluation"],
    html: `<p>L'approche <span class="key" data-term="ABCDE">ABCDE</span> est une méthode systématique d'évaluation et de traitement immédiat des détresses vitales : on traite chaque anomalie avant de passer à l'étape suivante.</p>
<table class="tbl">
<tr><th>Lettre</th><th>Domaine</th><th>À évaluer</th></tr>
<tr><td>A - Airway</td><td>Voies aériennes</td><td>Liberté, obstruction, bruits (stridor)</td></tr>
<tr><td>B - Breathing</td><td>Respiration</td><td>FR, SpO2, tirage, cyanose, auscultation</td></tr>
<tr><td>C - Circulation</td><td>Circulation</td><td>FC, PA, marbrures, TRC, diurèse</td></tr>
<tr><td>D - Disability</td><td>Neurologie</td><td>Glasgow, pupilles, glycémie capillaire</td></tr>
<tr><td>E - Exposure</td><td>Exposition</td><td>Température, examen complet, lésions</td></tr>
</table>
<h3>Détresse respiratoire : signes de gravité</h3>
<ul>
<li>FR &gt; 30/min ou &lt; 6/min, <strong>tirage</strong> et mise en jeu des muscles respiratoires accessoires.</li>
<li><strong>Cyanose</strong>, SpO2 &lt; 90 % malgré l'oxygène.</li>
<li>Signes d'épuisement : respiration paradoxale, troubles de conscience.</li>
</ul>
<h3>Détresse circulatoire (état de choc)</h3>
<p>Le <span class="key" data-term="choc">choc</span> est une inadéquation entre apports et besoins en oxygène des tissus. Signes : <strong>tachycardie</strong>, hypotension (PAS &lt; 90 mmHg), <span class="key" data-term="marbrures">marbrures</span>, <span class="key" data-term="temps de recoloration capillaire">temps de recoloration capillaire</span> (TRC) &gt; 3 s, oligurie, troubles de conscience.</p>
<table class="tbl">
<tr><th>Type de choc</th><th>Mécanisme</th><th>Exemple</th></tr>
<tr><td>Hypovolémique</td><td>Perte volémique</td><td>Hémorragie, déshydratation</td></tr>
<tr><td>Cardiogénique</td><td>Défaillance de la pompe</td><td>Infarctus massif</td></tr>
<tr><td>Distributif</td><td>Vasoplégie</td><td>Septique, anaphylactique</td></tr>
<tr><td>Obstructif</td><td>Obstacle au remplissage</td><td>Embolie pulmonaire, tamponnade</td></tr>
</table>
<h3>Détresse neurologique</h3>
<p>Évaluation par le <span class="key" data-term="score de Glasgow">score de Glasgow</span> (de 3 à 15). Un Glasgow &le; 8 traduit un coma profond exposant à un risque d'<strong>inhalation</strong> et impose la protection des voies aériennes. Toujours rechercher une <strong>hypoglycémie</strong> (glycémie capillaire systématique devant tout trouble de conscience).</p>
<div class="callout"><div class="callout-t">Réflexe infirmier</div>Devant toute détresse : position adaptée, oxygénothérapie, monitorage (scope, SpO2, PA), pose de voie veineuse, glycémie capillaire, et appel d'aide. Réévaluer en boucle selon l'ABCDE.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« A-B-C-D-E : Air, Breathe, Circulate, Disability, Expose » — on ne passe à la lettre suivante qu'après avoir corrigé la précédente.</div>`,
    refs: ["Référentiel IFSI 2009 - UE 4.3", "SFAR - Recommandations états de choc"] },

  { id: "fx_ue_4_3_plus_chariot_urgence", ueId: "4.3", type: "cours",
    titre: "Le chariot d'urgence : composition, vérification et rôle infirmier",
    resume: "Organisation, contenu et procédures de contrôle du chariot d'urgence sous responsabilité infirmière.",
    tags: ["chariot-urgence", "materiel", "role-ide", "adrenaline"],
    html: `<p>Le <span class="key" data-term="chariot d'urgence">chariot d'urgence</span> regroupe le matériel et les médicaments nécessaires à la prise en charge immédiate d'une urgence vitale. Sa vérification relève de la <strong>responsabilité infirmière</strong> et constitue un acte tracé.</p>
<h3>Organisation type</h3>
<ul>
<li><strong>Plateau supérieur</strong> : DAE / défibrillateur, BAVU (ballon auto-remplisseur à valve unidirectionnelle) avec masques, aspiration.</li>
<li><strong>Tiroir voies aériennes (A/B)</strong> : canules de Guédel, masques O2, sondes d'aspiration, matériel d'intubation, O2.</li>
<li><strong>Tiroir circulation (C)</strong> : cathéters, garrot, perfuseurs, solutés (NaCl 0,9 %, Ringer lactate).</li>
<li><strong>Tiroir médicaments</strong> : drogues d'urgence.</li>
</ul>
<h3>Médicaments d'urgence essentiels</h3>
<table class="tbl">
<tr><th>Médicament</th><th>Indication principale</th></tr>
<tr><td>Adrénaline</td><td>Arrêt cardiaque, choc anaphylactique</td></tr>
<tr><td>Atropine</td><td>Bradycardie symptomatique</td></tr>
<tr><td>Amiodarone</td><td>FV/TV réfractaire au choc</td></tr>
<tr><td>Glucosé 30 %</td><td>Hypoglycémie sévère</td></tr>
<tr><td>Salbutamol</td><td>Bronchospasme, crise d'asthme</td></tr>
</table>
<div class="callout"><div class="callout-t">Adrénaline dans l'arrêt cardiaque</div>Dans l'AC, l'adrénaline est administrée à la dose de <strong>1 mg IV/IO</strong>, répétée toutes les <strong>3 à 5 minutes</strong>. Sur rythme non choquable, elle est donnée le plus tôt possible ; sur rythme choquable, après le 3e choc.</div>
<h3>Vérification du chariot</h3>
<ul>
<li>Contrôle <strong>après chaque utilisation</strong> et de façon <strong>périodique programmée</strong> (selon protocole du service).</li>
<li>Vérifier : <strong>scellé</strong> intact, inventaire complet, <strong>dates de péremption</strong>, charge du défibrillateur, état de l'aspiration et de la bouteille d'O2.</li>
<li><strong>Traçabilité</strong> obligatoire sur fiche de contrôle datée et signée.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo : « SCELLÉ »</div>Scellé intact, Contenu complet, Expiration (péremptions) vérifiées, Lecteur défibrillateur chargé, Liquides (solutés/O2) présents, Écrit (traçabilité) signé.</div>
<p>Le chariot doit être <strong>accessible, mobile, jamais verrouillé à clé</strong> et son emplacement connu de toute l'équipe.</p>`,
    refs: ["Référentiel IFSI 2009 - UE 4.3", "HAS - Sécurisation du chariot d'urgence"] }
];

export const qcm = [
  { ueId: "4.3", q: "Quel est le rapport compressions/insufflations recommandé pour la RCP de base chez l'adulte par un sauveteur ?", options: ["15/2", "30/2", "5/1", "30/1"], correct: 1,
    explication: "Chez l'adulte, le rapport est de 30 compressions thoraciques pour 2 insufflations, quel que soit le nombre de sauveteurs.", ref: "ERC/CFRC 2021", diff: 1 },

  { ueId: "4.3", q: "À quelle fréquence doit-on réaliser les compressions thoraciques chez l'adulte ?", options: ["60 à 80 / min", "80 à 100 / min", "100 à 120 / min", "120 à 140 / min"], correct: 2,
    explication: "La fréquence recommandée est de 100 à 120 compressions par minute, avec un relâchement thoracique complet entre chaque compression.", ref: "ERC/CFRC 2021", diff: 1 },

  { ueId: "4.3", q: "Quelle est la profondeur des compressions thoraciques chez l'adulte ?", options: ["2 à 3 cm", "3 à 4 cm", "5 à 6 cm", "7 à 8 cm"], correct: 2,
    explication: "La profondeur recommandée est de 5 à 6 cm chez l'adulte. Trop superficielle, elle est inefficace ; trop profonde, elle augmente le risque de lésions.", ref: "ERC/CFRC 2021", diff: 1 },

  { ueId: "4.3", q: "Parmi ces rythmes, lequel est CHOQUABLE par un défibrillateur ?", options: ["Asystolie", "Activité électrique sans pouls", "Fibrillation ventriculaire", "Bradycardie sinusale"], correct: 2,
    explication: "Les rythmes choquables sont la fibrillation ventriculaire (FV) et la tachycardie ventriculaire (TV) sans pouls. L'asystolie et l'activité électrique sans pouls ne sont pas choquables.", ref: "ERC/CFRC 2021", diff: 2 },

  { ueId: "4.3", q: "Dans la chaîne de survie, quel est le maillon qui suit immédiatement la reconnaissance et l'alerte ?", options: ["La défibrillation", "La RCP précoce (massage)", "Les soins post-arrêt", "L'intubation"], correct: 1,
    explication: "L'ordre est : reconnaissance/alerte, puis RCP précoce (massage cardiaque), puis défibrillation précoce, puis réanimation spécialisée et soins post-arrêt.", ref: "ERC/CFRC 2021", diff: 1 },

  { ueId: "4.3", q: "Chez le nourrisson en arrêt cardio-respiratoire, par quoi débute-t-on la réanimation ?", options: ["5 compressions", "5 insufflations initiales", "Un choc électrique", "2 insufflations"], correct: 1,
    explication: "L'arrêt de l'enfant étant majoritairement d'origine hypoxique, on débute par 5 insufflations initiales avant les compressions thoraciques.", ref: "ERC/CFRC 2021 pédiatrie", diff: 2 },

  { ueId: "4.3", q: "Quelle est la dose d'adrénaline administrée dans l'arrêt cardiaque chez l'adulte ?", options: ["0,1 mg", "0,5 mg", "1 mg IV/IO", "5 mg"], correct: 2,
    explication: "L'adrénaline est administrée à 1 mg IV ou intra-osseux, répétée toutes les 3 à 5 minutes pendant la réanimation.", ref: "ERC/CFRC 2021", diff: 2 },

  { ueId: "4.3", q: "Que signifie la lettre 'D' de la démarche ABCDE ?", options: ["Drainage", "Disability (neurologie)", "Défibrillation", "Diurèse"], correct: 1,
    explication: "Le D correspond à Disability : évaluation neurologique (score de Glasgow, pupilles, glycémie capillaire).", ref: "Référentiel IFSI 2009", diff: 1 },

  { ueId: "4.3", q: "Un temps de recoloration capillaire (TRC) est considéré comme anormal au-delà de :", options: ["1 seconde", "2 secondes", "3 secondes", "5 secondes"], correct: 2,
    explication: "Un TRC supérieur à 3 secondes traduit une mauvaise perfusion périphérique et constitue un signe de choc.", ref: "Référentiel IFSI 2009", diff: 2 },

  { ueId: "4.3", q: "Quel type de choc correspond au choc anaphylactique ?", options: ["Hypovolémique", "Cardiogénique", "Distributif", "Obstructif"], correct: 2,
    explication: "Le choc anaphylactique est un choc distributif, lié à une vasoplégie massive. Le choc septique appartient aussi à cette catégorie.", ref: "SFAR états de choc", diff: 2 },

  { ueId: "4.3", q: "Quel médicament du chariot d'urgence est le traitement de première intention du choc anaphylactique ?", options: ["Atropine", "Adrénaline", "Amiodarone", "Salbutamol"], correct: 1,
    explication: "L'adrénaline est le traitement de première intention du choc anaphylactique grave (voie IM en première intention, IV en milieu surveillé).", ref: "SFAR anaphylaxie", diff: 2 },

  { ueId: "4.3", q: "Quelle est l'indication principale de l'atropine en urgence ?", options: ["Tachycardie", "Bradycardie symptomatique", "Hypertension", "Hyperglycémie"], correct: 1,
    explication: "L'atropine est un parasympatholytique indiqué dans la bradycardie symptomatique pour accélérer la fréquence cardiaque.", ref: "Référentiel IFSI 2009", diff: 2 },

  { ueId: "4.3", q: "Un score de Glasgow inférieur ou égal à 8 impose en priorité :", options: ["Une perfusion de glucosé", "La protection des voies aériennes", "Une défibrillation", "Une transfusion"], correct: 1,
    explication: "Un Glasgow ≤ 8 traduit un coma profond avec perte des réflexes de protection, exposant à l'inhalation : il faut protéger les voies aériennes.", ref: "Référentiel IFSI 2009", diff: 2 },

  { ueId: "4.3", q: "Devant tout trouble de conscience, quel examen simple doit être réalisé systématiquement ?", options: ["Un ECG", "Une glycémie capillaire", "Une radiographie", "Un bilan hépatique"], correct: 1,
    explication: "La glycémie capillaire est systématique car l'hypoglycémie est une cause fréquente et rapidement réversible de trouble de conscience.", ref: "Référentiel IFSI 2009", diff: 1 },

  { ueId: "4.3", q: "La vérification du chariot d'urgence relève de la responsabilité :", options: ["Du médecin uniquement", "De l'aide-soignant", "De l'infirmier(e)", "Du pharmacien seul"], correct: 2,
    explication: "La vérification et la traçabilité du chariot d'urgence relèvent de la responsabilité infirmière, en lien avec la pharmacie pour le réapprovisionnement.", ref: "HAS chariot d'urgence", diff: 1 },

  { ueId: "4.3", q: "Quand le chariot d'urgence doit-il être vérifié ?", options: ["Une fois par an", "Uniquement à l'ouverture du service", "Après chaque utilisation et de façon périodique", "Jamais s'il est scellé"], correct: 2,
    explication: "Le chariot est contrôlé après chaque utilisation et selon une périodicité définie par protocole, avec traçabilité datée et signée.", ref: "HAS chariot d'urgence", diff: 1 },

  { ueId: "4.3", q: "Que désigne le BAVU présent sur le chariot d'urgence ?", options: ["Un brassard de tension", "Un ballon auto-remplisseur à valve unidirectionnelle", "Un bistouri", "Une bouteille d'air"], correct: 1,
    explication: "Le BAVU (ballon auto-remplisseur à valve unidirectionnelle) permet la ventilation manuelle au masque, généralement relié à l'oxygène.", ref: "Référentiel IFSI 2009", diff: 1 },

  { ueId: "4.3", q: "Quel médicament d'urgence est indiqué dans la fibrillation ventriculaire réfractaire après plusieurs chocs ?", options: ["Atropine", "Amiodarone", "Salbutamol", "Glucosé 30 %"], correct: 1,
    explication: "L'amiodarone est l'antiarythmique indiqué dans la FV/TV sans pouls réfractaire à la défibrillation.", ref: "ERC/CFRC 2021", diff: 3 },

  { ueId: "4.3", q: "Quelle est la conduite immédiate face à une victime inconsciente qui ne respire pas normalement (gasps) ?", options: ["Attendre les secours sans agir", "Débuter immédiatement la RCP", "Donner à boire", "La mettre en position assise"], correct: 1,
    explication: "Les gasps (respiration agonique) ne sont pas une respiration efficace : ils signent l'arrêt cardiaque et imposent de débuter immédiatement la RCP.", ref: "ERC/CFRC 2021", diff: 2 },

  { ueId: "4.3", q: "Pour limiter la fatigue et maintenir l'efficacité, le sauveteur qui masse doit être relayé toutes les :", options: ["30 secondes", "2 minutes", "5 minutes", "10 minutes"], correct: 1,
    explication: "Un relais des sauveteurs toutes les 2 minutes (au moment de l'analyse du rythme) préserve la qualité des compressions.", ref: "ERC/CFRC 2021", diff: 1 },

  { ueId: "4.3", q: "Les marbrures cutanées observées lors d'un état de choc traduisent :", options: ["Une bonne perfusion", "Une vasoconstriction et une mauvaise perfusion périphérique", "Une fièvre isolée", "Une allergie cutanée"], correct: 1,
    explication: "Les marbrures, débutant souvent aux genoux, traduisent une hypoperfusion périphérique et constituent un signe de gravité du choc.", ref: "SFAR états de choc", diff: 2 },

  { ueId: "4.3", q: "Dans la démarche ABCDE, que doit-on faire avant de passer à l'étape suivante ?", options: ["Noter le résultat sans agir", "Corriger l'anomalie identifiée", "Appeler la famille", "Attendre l'avis médical"], correct: 1,
    explication: "Le principe de l'ABCDE est de traiter chaque anomalie (libération des voies aériennes, oxygénation, remplissage...) avant de progresser à la lettre suivante.", ref: "Référentiel IFSI 2009", diff: 1 }
];

export const flashcards = [
  { ueId: "4.3", recto: "Rapport compressions/insufflations chez l'adulte ?", verso: "30 compressions pour 2 insufflations (30/2)." },
  { ueId: "4.3", recto: "Fréquence des compressions thoraciques ?", verso: "100 à 120 par minute." },
  { ueId: "4.3", recto: "Profondeur des compressions chez l'adulte ?", verso: "5 à 6 cm, avec relâchement complet." },
  { ueId: "4.3", recto: "Quels sont les rythmes choquables ?", verso: "Fibrillation ventriculaire (FV) et tachycardie ventriculaire (TV) sans pouls." },
  { ueId: "4.3", recto: "Quels rythmes ne sont PAS choquables ?", verso: "Asystolie et activité électrique sans pouls." },
  { ueId: "4.3", recto: "Les 4 maillons de la chaîne de survie ?", verso: "Reconnaissance/alerte, RCP précoce, défibrillation précoce, réanimation spécialisée et soins post-arrêt." },
  { ueId: "4.3", recto: "Que signifient les lettres A-B-C-D-E ?", verso: "Airway (voies aériennes), Breathing (respiration), Circulation, Disability (neuro), Exposure (exposition)." },
  { ueId: "4.3", recto: "Dose d'adrénaline dans l'arrêt cardiaque ?", verso: "1 mg IV/IO, répétée toutes les 3 à 5 minutes." },
  { ueId: "4.3", recto: "Indication de l'atropine en urgence ?", verso: "Bradycardie symptomatique." },
  { ueId: "4.3", recto: "Antiarythmique de la FV/TV réfractaire au choc ?", verso: "Amiodarone." },
  { ueId: "4.3", recto: "TRC (temps de recoloration capillaire) anormal au-delà de ?", verso: "3 secondes." },
  { ueId: "4.3", recto: "Examen systématique devant tout trouble de conscience ?", verso: "Glycémie capillaire (rechercher une hypoglycémie)." },
  { ueId: "4.3", recto: "Glasgow ≤ 8 : quelle priorité ?", verso: "Protéger les voies aériennes (risque d'inhalation, coma profond)." },
  { ueId: "4.3", recto: "Quand vérifier le chariot d'urgence ?", verso: "Après chaque utilisation et de façon périodique, avec traçabilité datée et signée." },
  { ueId: "4.3", recto: "Que désigne le BAVU ?", verso: "Ballon auto-remplisseur à valve unidirectionnelle, pour la ventilation manuelle au masque." }
];
