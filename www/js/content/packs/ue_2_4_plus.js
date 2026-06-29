export const fiches = [
  { id: "fx_ue_2_4_plus_polytrauma", ueId: "2.4", type: "cours",
    titre: "Polytraumatisé : accueil et priorisation ABCDE",
    resume: "Démarche systématisée d'évaluation et de stabilisation du polytraumatisé en phase initiale.",
    tags: ["polytraumatisé", "ABCDE", "urgence"],
    html: `<p>Le <span class="key" data-term="polytraumatisé">polytraumatisé</span> est un blessé présentant plusieurs lésions dont au moins une, ou leur association, engage le pronostic vital. La prise en charge suit une logique de hiérarchisation : on traite d'abord ce qui tue le plus vite.</p>
<h3>L'approche ABCDE</h3>
<table class="tbl">
<tr><th>Lettre</th><th>Cible</th><th>Actions IDE clés</th></tr>
<tr><td><strong>A</strong> – Airway</td><td>Liberté des voies aériennes + rachis cervical</td><td>Aspiration, maintien tête/cou neutre, pose minerve, préparation matériel d'intubation</td></tr>
<tr><td><strong>B</strong> – Breathing</td><td>Ventilation, oxygénation</td><td>O2 haut débit, SpO2, FR, recherche d'un pneumothorax compressif, préparer drainage</td></tr>
<tr><td><strong>C</strong> – Circulation</td><td>État hémodynamique, hémorragie</td><td>2 voies veineuses de gros calibre, compression directe, remplissage, bilan sanguin, groupe-RAI</td></tr>
<tr><td><strong>D</strong> – Disability</td><td>Neurologique</td><td>Score de Glasgow, pupilles, glycémie capillaire</td></tr>
<tr><td><strong>E</strong> – Exposure</td><td>Déshabillage + environnement</td><td>Recherche de lésions cachées, prévention de l'<span class="key" data-term="hypothermie">hypothermie</span> (couverture chauffante)</td></tr>
</table>
<div class="callout"><div class="callout-t">Triade létale</div>L'association <strong>hypothermie + acidose + coagulopathie</strong> aggrave le saignement et la mortalité. Réchauffer activement le patient et limiter les pertes sont des priorités infirmières.</div>
<h3>Surveillance rapprochée</h3>
<ul>
<li>Monitorage continu : <strong>FC, PA, SpO2, FR, Glasgow</strong>, diurèse horaire.</li>
<li>Réévaluation cyclique : toute dégradation impose de reprendre l'ABCDE depuis A.</li>
<li>Traçabilité précise des thérapeutiques, des bilans et des heures.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>A-B-C-D-E</strong> : Airway, Breathing, Circulation, Disability, Exposure. On ne passe à la lettre suivante qu'après avoir traité la précédente.</div>`,
    refs: ["Référentiel IFSI 2009 – UE 2.4 Processus traumatiques", "Recommandations SFAR prise en charge du traumatisé grave"] },

  { id: "fx_ue_2_4_plus_choc_hemorragique", ueId: "2.4", type: "cours",
    titre: "Choc hémorragique : reconnaître et agir",
    resume: "Physiopathologie, classification et conduite infirmière face à une hémorragie aiguë.",
    tags: ["choc", "hémorragie", "hémodynamique"],
    html: `<p>Le <span class="key" data-term="choc hémorragique">choc hémorragique</span> est une insuffisance circulatoire aiguë liée à une perte sanguine, entraînant une inadéquation entre apports et besoins en oxygène des tissus.</p>
<h3>Mécanismes de compensation</h3>
<ul>
<li>Vasoconstriction périphérique : extrémités froides, marbrures, pâleur.</li>
<li><span class="key" data-term="tachycardie">Tachycardie</span> précoce, souvent avant la chute tensionnelle.</li>
<li>Polypnée et oligurie traduisant la souffrance tissulaire.</li>
</ul>
<div class="callout"><div class="callout-t">Piège à connaître</div>Chez l'adulte sain et le sujet jeune, la <strong>pression artérielle reste longtemps normale</strong> grâce à la compensation : une PA conservée n'exclut pas une hémorragie grave. La tachycardie et les marbrures alertent plus tôt.</div>
<h3>Classification de la perte sanguine (adulte)</h3>
<table class="tbl">
<tr><th>Classe</th><th>Perte estimée</th><th>Signes</th></tr>
<tr><td>I</td><td>&lt; 15 %</td><td>Quasi asymptomatique</td></tr>
<tr><td>II</td><td>15–30 %</td><td>Tachycardie, anxiété</td></tr>
<tr><td>III</td><td>30–40 %</td><td>Hypotension, confusion, oligurie</td></tr>
<tr><td>IV</td><td>&gt; 40 %</td><td>Collapsus, anurie, troubles de conscience</td></tr>
</table>
<h3>Conduite infirmière</h3>
<ul>
<li><strong>Contrôle de la source</strong> : compression directe, pansement compressif, garrot tactique si membre (noter l'heure de pose).</li>
<li>Deux voies veineuses de gros calibre (14–16 G), prélèvements dont <strong>groupe sanguin et RAI</strong>.</li>
<li>Remplissage prudent sur prescription, préparation des <strong>produits sanguins labiles</strong> (CGR, PFC, plaquettes).</li>
<li>Surveillance : PA, FC, diurèse, conscience, lactates et hémoglobine sur prescription.</li>
<li>Réchauffement actif pour prévenir la triade létale.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Les marbrures du <strong>genou</strong> sont un signe de gravité du choc : « le genou parle avant la tension ».</div>`,
    refs: ["Référentiel IFSI 2009 – UE 2.4", "Classification ATLS du choc hémorragique"] },

  { id: "fx_ue_2_4_plus_tc_fractures", ueId: "2.4", type: "cours",
    titre: "Traumatisme crânien et fractures : surveillance et complications",
    resume: "Signes neurologiques d'alerte du TC et complications précoces des fractures à surveiller.",
    tags: ["traumatisme crânien", "fracture", "surveillance"],
    html: `<p>Le <span class="key" data-term="traumatisme crânien">traumatisme crânien</span> (TC) peut se compliquer d'un saignement intracrânien différé. La surveillance neurologique répétée est l'outil infirmier central.</p>
<h3>Score de Glasgow (GCS)</h3>
<table class="tbl">
<tr><th>Composante</th><th>Cotation</th></tr>
<tr><td>Ouverture des yeux (Y)</td><td>1 à 4</td></tr>
<tr><td>Réponse verbale (V)</td><td>1 à 5</td></tr>
<tr><td>Réponse motrice (M)</td><td>1 à 6</td></tr>
</table>
<p>Total de <strong>3 (coma profond) à 15 (normal)</strong>. Un GCS ≤ 8 définit le coma et impose une protection des voies aériennes.</p>
<div class="callout"><div class="callout-t">Signes d'aggravation à signaler en urgence</div><ul><li>Baisse de 2 points ou plus du Glasgow.</li><li><strong>Anisocorie</strong> (pupilles inégales), mydriase aréactive.</li><li>Céphalées intenses, vomissements en jet, agitation puis somnolence.</li><li>Déficit moteur, convulsions, bradycardie avec hypertension (triade de Cushing : <strong>HTA + bradycardie + irrégularité respiratoire</strong>).</li></ul></div>
<h3>Complications précoces des fractures</h3>
<ul>
<li><span class="key" data-term="embolie graisseuse">Embolie graisseuse</span> : surtout fractures des os longs et du bassin ; dyspnée, confusion, pétéchies dans les 24–72 h.</li>
<li><span class="key" data-term="syndrome des loges">Syndrome des loges</span> : douleur disproportionnée, tension de la loge, paresthésies ; urgence chirurgicale.</li>
<li>Hémorragie : une fracture fermée de fémur peut faire perdre plus d'un litre, un bassin davantage.</li>
<li>Complications thrombo-emboliques liées à l'immobilisation.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Les <strong>5 P</strong> du syndrome des loges (anglais) : Pain, Pallor, Paresthesia, Pulselessness, Paralysis. La douleur est le signe le plus précoce.</div>`,
    refs: ["Référentiel IFSI 2009 – UE 2.4", "Échelle de Glasgow (Teasdale & Jennett)"] },
];

export const qcm = [
  { ueId: "2.4", q: "Dans l'approche ABCDE du polytraumatisé, que désigne la lettre C ?",
    options: ["Conscience", "Circulation et contrôle des hémorragies", "Colonne cervicale", "Cyanose"], correct: 1,
    explication: "C correspond à Circulation : évaluation hémodynamique et contrôle des hémorragies (compression, voies veineuses, remplissage). La colonne cervicale est gérée dès l'étape A.",
    ref: "Approche ABCDE du traumatisé grave", diff: 1 },

  { ueId: "2.4", q: "Quel est le score de Glasgow minimal possible ?",
    options: ["0", "1", "3", "5"], correct: 2,
    explication: "Le score de Glasgow va de 3 (1+1+1, coma profond aréactif) à 15. Il n'existe pas de cotation à 0 pour les composantes.",
    ref: "Échelle de Glasgow", diff: 1 },

  { ueId: "2.4", q: "Un GCS inférieur ou égal à quelle valeur définit le coma et impose une protection des voies aériennes ?",
    options: ["6", "8", "10", "12"], correct: 1,
    explication: "Un Glasgow ≤ 8 définit le coma : le patient ne protège plus ses voies aériennes, justifiant une intubation pour prévenir l'inhalation.",
    ref: "Prise en charge du TC grave", diff: 2 },

  { ueId: "2.4", q: "Quel signe est le plus PRÉCOCE dans le choc hémorragique du sujet jeune ?",
    options: ["L'hypotension artérielle", "La tachycardie", "L'anurie", "Le coma"], correct: 1,
    explication: "La tachycardie est un signe compensatoire précoce. Chez le sujet jeune, la PA reste longtemps normale : se fier à la seule tension expose à sous-estimer la gravité.",
    ref: "Physiopathologie du choc hémorragique", diff: 2 },

  { ueId: "2.4", q: "Que traduit l'apparition de marbrures au niveau du genou chez un traumatisé ?",
    options: ["Une allergie", "Un signe de gravité de l'état de choc", "Une simple réaction au froid sans gravité", "Un hématome local"], correct: 1,
    explication: "Les marbrures, notamment péri-rotuliennes, traduisent une vasoconstriction périphérique et une hypoperfusion : c'est un signe de gravité de l'état de choc.",
    ref: "Signes cliniques du choc", diff: 2 },

  { ueId: "2.4", q: "Quelle association constitue la « triade létale » du traumatisé grave ?",
    options: ["Fièvre, alcalose, anémie", "Hypothermie, acidose, coagulopathie", "Hypertension, bradycardie, hyperthermie", "Hyperglycémie, hypoxie, polyurie"], correct: 1,
    explication: "La triade létale associe hypothermie, acidose et coagulopathie, qui s'auto-aggravent et majorent le saignement. Le réchauffement et le contrôle précoce de l'hémorragie la limitent.",
    ref: "Réanimation du traumatisé hémorragique", diff: 2 },

  { ueId: "2.4", q: "Quelle est la priorité immédiate face à une hémorragie externe sur un membre ?",
    options: ["Réaliser un bilan sanguin", "Poser une perfusion", "Réaliser une compression directe du point de saignement", "Administrer un antalgique"], correct: 2,
    explication: "Le contrôle de la source par compression directe est la première action ; le remplissage et les bilans viennent ensuite. Un garrot est envisagé si la compression est inefficace.",
    ref: "Conduite face à une hémorragie", diff: 1 },

  { ueId: "2.4", q: "Lors de la pose d'un garrot, quelle information est impérative à noter ?",
    options: ["La couleur du garrot", "L'heure de pose", "La taille du patient", "Le groupe sanguin"], correct: 1,
    explication: "L'heure de pose du garrot doit être tracée car la durée d'ischémie conditionne le risque de complications. Le garrot ne doit pas être desserré sans avis médical.",
    ref: "Technique du garrot tactique", diff: 1 },

  { ueId: "2.4", q: "Quelle triade clinique évoque une hypertension intracrânienne (triade de Cushing) ?",
    options: ["Tachycardie, hypotension, fièvre", "Bradycardie, hypertension, troubles respiratoires", "Tachycardie, hypertension, polypnée", "Bradycardie, hypotension, hypothermie"], correct: 1,
    explication: "La triade de Cushing associe bradycardie, hypertension artérielle et irrégularité respiratoire : elle traduit une souffrance cérébrale grave par hypertension intracrânienne.",
    ref: "Signes d'HTIC", diff: 3 },

  { ueId: "2.4", q: "Qu'est-ce qu'une anisocorie ?",
    options: ["Une inégalité de taille des pupilles", "Une absence de réflexe rotulien", "Une raideur de nuque", "Une paralysie faciale"], correct: 0,
    explication: "L'anisocorie est une inégalité du diamètre pupillaire. Chez un traumatisé crânien, elle peut signaler un engagement cérébral et constitue un signe d'alarme.",
    ref: "Examen pupillaire", diff: 1 },

  { ueId: "2.4", q: "Quelle complication évoquer devant une dyspnée, une confusion et des pétéchies 48 h après une fracture du fémur ?",
    options: ["Syndrome des loges", "Embolie graisseuse", "Infection du foyer de fracture", "Pneumothorax"], correct: 1,
    explication: "L'embolie graisseuse survient surtout après fracture des os longs et associe atteinte respiratoire, neurologique et pétéchies, typiquement dans les 24 à 72 h.",
    ref: "Complications des fractures des os longs", diff: 3 },

  { ueId: "2.4", q: "Quel est le signe le plus PRÉCOCE du syndrome des loges ?",
    options: ["L'abolition du pouls", "La paralysie", "Une douleur disproportionnée par rapport à la lésion", "La pâleur"], correct: 2,
    explication: "La douleur intense, disproportionnée et aggravée par l'étirement passif est le signe le plus précoce. L'abolition du pouls et la paralysie sont tardives et de mauvais pronostic.",
    ref: "Syndrome des loges", diff: 3 },

  { ueId: "2.4", q: "Pourquoi privilégie-t-on des voies veineuses de gros calibre (14–16 G) chez le polytraumatisé hémorragique ?",
    options: ["Pour limiter la douleur", "Pour permettre un débit de remplissage rapide", "Pour éviter les hématomes", "Pour faciliter les prélèvements indolores"], correct: 1,
    explication: "Plus le calibre est grand, plus le débit possible est élevé, permettant un remplissage et une transfusion rapides en cas de choc hémorragique.",
    ref: "Abords vasculaires en urgence", diff: 2 },

  { ueId: "2.4", q: "Quel bilan est indispensable à prélever en urgence en vue d'une transfusion ?",
    options: ["Bilan lipidique", "Groupe sanguin et RAI", "Bilan thyroïdien", "Sérologies virales"], correct: 1,
    explication: "Le groupe sanguin (avec deux déterminations) et la recherche d'agglutinines irrégulières (RAI) sont indispensables avant toute transfusion de concentrés de globules rouges.",
    ref: "Sécurité transfusionnelle", diff: 1 },

  { ueId: "2.4", q: "Devant un pneumothorax compressif suspecté à l'étape B, quelle préparation l'IDE anticipe-t-elle ?",
    options: ["Une ponction lombaire", "Un drainage / exsufflation thoracique", "Une dialyse", "Une pose de sonde gastrique"], correct: 1,
    explication: "Le pneumothorax compressif est une urgence vitale traitée par exsufflation puis drainage thoracique. L'IDE prépare le matériel et installe le patient.",
    ref: "Détresse respiratoire du traumatisé", diff: 2 },

  { ueId: "2.4", q: "Quelle mesure prévient l'hypothermie, étape E de l'ABCDE ?",
    options: ["Déshabiller longuement le patient à l'air libre", "Réchauffer activement (couverture chauffante, solutés réchauffés)", "Administrer des antipyrétiques", "Appliquer de la glace"], correct: 1,
    explication: "Après l'exposition nécessaire à l'examen, on réchauffe activement le patient pour limiter l'hypothermie, facteur d'aggravation de la coagulopathie et du saignement.",
    ref: "Étape Exposure de l'ABCDE", diff: 1 },

  { ueId: "2.4", q: "Une fracture fermée isolée du fémur peut entraîner une spoliation sanguine d'environ :",
    options: ["50 mL", "200 mL", "1 à 1,5 litre", "5 litres"], correct: 2,
    explication: "Une fracture fermée de fémur peut occasionner une perte d'environ 1 à 1,5 L de sang dans la cuisse, justifiant une surveillance hémodynamique même sans plaie visible.",
    ref: "Pertes sanguines selon le foyer fracturaire", diff: 3 },

  { ueId: "2.4", q: "Quel paramètre de surveillance reflète le mieux la perfusion rénale et l'efficacité du remplissage ?",
    options: ["La température", "La diurèse horaire", "La fréquence respiratoire", "La saturation"], correct: 1,
    explication: "La diurèse horaire est un bon reflet de la perfusion d'organe. Une oligurie (< 0,5 mL/kg/h) signe une hypoperfusion rénale et oriente l'adaptation du remplissage.",
    ref: "Surveillance du choc", diff: 2 },

  { ueId: "2.4", q: "En cas de suspicion de traumatisme du rachis cervical, quelle précaution s'impose à l'étape A ?",
    options: ["Hyperextension de la tête", "Maintien en rectitude (axe tête-cou-tronc) et minerve", "Rotation de la tête pour dégager les voies aériennes", "Position assise immédiate"], correct: 1,
    explication: "On maintient l'alignement tête-cou-tronc et on pose une minerve afin de ne pas aggraver une éventuelle lésion médullaire lors de la libération des voies aériennes.",
    ref: "Immobilisation du rachis", diff: 2 },

  { ueId: "2.4", q: "Quelle attitude adopter si l'état d'un polytraumatisé se dégrade en cours de surveillance ?",
    options: ["Poursuivre la surveillance sans changer la séquence", "Reprendre l'évaluation depuis l'étape A de l'ABCDE", "Passer directement à l'étape E", "Attendre le médecin sans réévaluer"], correct: 1,
    explication: "Toute dégradation impose de recommencer l'évaluation depuis A : on réélimine en priorité une cause obstructive ou ventilatoire avant de poursuivre.",
    ref: "Réévaluation cyclique ABCDE", diff: 2 },

  { ueId: "2.4", q: "Quel signe oriente vers une fracture de la base du crâne ?",
    options: ["Une otorragie ou une rhinorrhée de liquide clair", "Une douleur du genou", "Une éruption cutanée", "Une bradycardie isolée"], correct: 0,
    explication: "Un écoulement clair (LCR) par le nez ou l'oreille, des ecchymoses périorbitaires (yeux de raton laveur) ou rétro-auriculaires évoquent une fracture de la base du crâne.",
    ref: "Sémiologie du TC", diff: 3 },
];

export const flashcards = [
  { ueId: "2.4", recto: "Que signifie l'acronyme ABCDE ?", verso: "Airway (voies aériennes + rachis), Breathing (ventilation), Circulation (hémodynamique/hémorragie), Disability (neuro), Exposure (déshabillage/hypothermie)." },
  { ueId: "2.4", recto: "Bornes du score de Glasgow ?", verso: "De 3 (coma profond) à 15 (normal). Y/4 + V/5 + M/6." },
  { ueId: "2.4", recto: "GCS imposant une protection des voies aériennes ?", verso: "Glasgow ≤ 8 (coma) : risque d'inhalation, intubation indiquée." },
  { ueId: "2.4", recto: "Triade létale du traumatisé grave ?", verso: "Hypothermie + acidose + coagulopathie." },
  { ueId: "2.4", recto: "Signe précoce du choc hémorragique chez le sujet jeune ?", verso: "La tachycardie (la PA reste longtemps normale par compensation)." },
  { ueId: "2.4", recto: "Triade de Cushing (HTIC) ?", verso: "Bradycardie + hypertension artérielle + irrégularité respiratoire." },
  { ueId: "2.4", recto: "Qu'est-ce qu'une anisocorie et pourquoi elle alerte ?", verso: "Inégalité du diamètre pupillaire ; chez le TC elle peut signaler un engagement cérébral." },
  { ueId: "2.4", recto: "Première action face à une hémorragie externe d'un membre ?", verso: "Compression directe du point de saignement (puis garrot si inefficace)." },
  { ueId: "2.4", recto: "Information impérative à tracer lors de la pose d'un garrot ?", verso: "L'heure de pose (durée d'ischémie)." },
  { ueId: "2.4", recto: "Signe le plus précoce du syndrome des loges ?", verso: "Douleur disproportionnée, aggravée à l'étirement passif." },
  { ueId: "2.4", recto: "Triade de l'embolie graisseuse après fracture d'os long ?", verso: "Détresse respiratoire + signes neurologiques + pétéchies, dans les 24–72 h." },
  { ueId: "2.4", recto: "Bilan indispensable avant transfusion ?", verso: "Groupe sanguin (2 déterminations) + RAI." },
  { ueId: "2.4", recto: "Paramètre reflétant le mieux la perfusion d'organe ?", verso: "La diurèse horaire (oligurie si < 0,5 mL/kg/h)." },
  { ueId: "2.4", recto: "Pourquoi des voies veineuses de gros calibre (14–16 G) ?", verso: "Pour permettre un débit de remplissage et de transfusion élevé." },
  { ueId: "2.4", recto: "Signes d'une fracture de la base du crâne ?", verso: "Otorragie/rhinorrhée de LCR, ecchymoses périorbitaires ou rétro-auriculaires." },
];
