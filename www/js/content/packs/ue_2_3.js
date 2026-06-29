// UE 2.3 — Santé, maladie, handicap, accidents de la vie (Sciences médicales, S2). Pack de révision.
export const fiches = [
  {
    id: "f_2_3_concepts", ueId: "2.3", type: "cours",
    titre: "Santé, maladie : concepts fondamentaux",
    resume: "Définitions de la santé, de la maladie et continuum santé-maladie selon l'OMS.",
    tags: ["santé", "maladie", "OMS", "concepts"],
    html: `
      <h3>Définir la santé</h3>
      <p>Selon l'<strong>OMS (1946)</strong>, la santé est <span class="key" data-term="santé">« un état de complet bien-être physique, mental et social, et pas seulement l'absence de maladie ou d'infirmité »</span>. C'est une définition globale, positive et dynamique, souvent jugée idéale (« complet bien-être »).</p>
      <p>La <strong>Charte d'Ottawa (1986)</strong> élargit la notion en y associant la <span class="key" data-term="promotion de la santé">promotion de la santé</span> : donner aux personnes les moyens d'agir sur les déterminants de leur santé.</p>
      <h3>Définir la maladie</h3>
      <ul>
        <li><strong>Disease</strong> : la maladie objectivée par le médecin (lésion, biologie, imagerie).</li>
        <li><strong>Illness</strong> : la maladie vécue, ressentie par le patient (souffrance, plainte).</li>
        <li><strong>Sickness</strong> : la maladie reconnue socialement (statut de malade, arrêt de travail).</li>
      </ul>
      <h3>Aigu vs chronique</h3>
      <table class="tbl">
        <tr><th>Aiguë</th><th>Chronique</th></tr>
        <tr><td>Début brutal, durée courte</td><td>Évolution > 3-6 mois, durable</td></tr>
        <tr><td>Guérison ou décès souvent rapides</td><td>Stabilisation, rechutes, retentissement</td></tr>
        <tr><td>Ex : infarctus, appendicite</td><td>Ex : diabète, BPCO, insuffisance rénale</td></tr>
      </table>
      <div class="callout"><div class="callout-t">À retenir</div>La santé est un <strong>continuum</strong> dynamique, pas un état binaire. On peut être porteur d'une maladie chronique et se sentir en bonne santé (santé subjective).</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Les 3 « S » de la santé OMS : <strong>S</strong>omatique (physique), <strong>S</strong>ocial, p<strong>S</strong>ychique (mental).</div>
    `,
    refs: ["UE 2.3"],
  },
  {
    id: "f_2_3_handicap", ueId: "2.3", type: "cours",
    titre: "Handicap : modèles et classification",
    resume: "Définition légale du handicap (loi 2005), classification CIF de l'OMS et types de handicaps.",
    tags: ["handicap", "CIF", "loi 2005", "déficience"],
    html: `
      <h3>Définition légale</h3>
      <p>La <strong>loi du 11 février 2005</strong> (« pour l'égalité des droits et des chances, la participation et la citoyenneté des personnes handicapées ») définit le handicap comme <span class="key" data-term="handicap">toute limitation d'activité ou restriction de participation à la vie en société subie par une personne en raison d'une altération durable d'une ou plusieurs fonctions (physique, sensorielle, mentale, cognitive ou psychique), d'un polyhandicap ou d'un trouble de santé invalidant</span>.</p>
      <h3>Modèle ancien (Wood, 1980)</h3>
      <p>Enchaînement linéaire : <strong>Déficience → Incapacité → Désavantage (handicap)</strong>.</p>
      <ul>
        <li><strong>Déficience</strong> : altération d'une fonction ou structure (ex : lésion médullaire).</li>
        <li><strong>Incapacité</strong> : limitation d'une activité (ex : ne plus pouvoir marcher).</li>
        <li><strong>Désavantage</strong> : conséquence sociale (ex : ne plus pouvoir travailler).</li>
      </ul>
      <h3>Modèle actuel : CIF (OMS, 2001)</h3>
      <p>La <span class="key" data-term="CIF">Classification Internationale du Fonctionnement, du handicap et de la santé</span> est un modèle interactif. Le handicap résulte de l'interaction entre la personne (fonctions/structures corporelles, activités, participation) et les <strong>facteurs environnementaux</strong> (obstacles ou facilitateurs) et personnels.</p>
      <h3>Types de handicap</h3>
      <ul>
        <li><strong>Moteur</strong>, <strong>sensoriel</strong> (visuel, auditif), <strong>mental/intellectuel</strong>, <strong>psychique</strong>, <strong>cognitif</strong>, <strong>maladies invalidantes</strong>, <strong>polyhandicap</strong>.</li>
      </ul>
      <div class="callout"><div class="callout-t">MDPH</div>La <strong>Maison Départementale des Personnes Handicapées</strong> est le guichet unique : évaluation, AAH, PCH, RQTH, orientation. La CDAPH prend les décisions.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>La CIF retient l'idée : le handicap n'est pas « dans » la personne mais dans la <strong>rencontre</strong> entre la personne et son <strong>environnement</strong>.</div>
    `,
    refs: ["UE 2.3"],
  },
  {
    id: "f_2_3_accidents", ueId: "2.3", type: "cours",
    titre: "Accidents de la vie courante et prévention",
    resume: "Définition, épidémiologie, populations à risque et niveaux de prévention des AcVC.",
    tags: ["accidents", "prévention", "AcVC", "domestique"],
    html: `
      <h3>Accidents de la vie courante (AcVC)</h3>
      <p>Ce sont les accidents <strong>hors travail, hors transport et hors agressions</strong> : accidents domestiques (maison, jardin), de sport, de loisirs, scolaires, sur la voie publique (hors circulation).</p>
      <p>En France, ils causent plus de <strong>20 000 décès par an</strong> et plusieurs millions de recours aux urgences. Ils dépassent très largement la mortalité par accidents de la route (environ 3 000 décès/an).</p>
      <h3>Principaux mécanismes</h3>
      <ul>
        <li><strong>Chutes</strong> : 1re cause de décès accidentel, surtout chez la personne âgée.</li>
        <li><strong>Suffocations / fausses routes</strong>, noyades, intoxications.</li>
        <li><strong>Brûlures</strong>, électrisation, défenestration (enfant).</li>
      </ul>
      <h3>Populations à risque</h3>
      <table class="tbl">
        <tr><th>Enfants &lt; 5 ans</th><th>Personnes âgées</th></tr>
        <tr><td>Chutes, ingestion de corps étrangers, brûlures, noyade, intoxication</td><td>Chutes ++ (fracture du col fémoral), dénutrition, perte d'autonomie</td></tr>
      </table>
      <h3>Les 3 niveaux de prévention</h3>
      <ul>
        <li><strong>Primaire</strong> : éviter la survenue (cache-prises, barrière d'escalier, éducation).</li>
        <li><strong>Secondaire</strong> : dépister/limiter (test d'équilibre, repérage du risque de chute).</li>
        <li><strong>Tertiaire</strong> : limiter séquelles et récidives (rééducation, adaptation du domicile).</li>
      </ul>
      <div class="callout warn"><div class="callout-t">Chute du sujet âgé</div>Une chute doit faire rechercher la cause (malaise, médicaments, hypotension), évaluer les conséquences et prévenir le <span class="key" data-term="syndrome post-chute">syndrome post-chute</span> (peur de tomber, rétropulsion, grabatisation).</div>
    `,
    refs: ["UE 2.3"],
  },
  {
    id: "f_2_3_chronique_prev", ueId: "2.3", type: "cours",
    titre: "Maladie chronique, dépendance et niveaux de prévention",
    resume: "Retentissement de la maladie chronique, autonomie/dépendance et logique des préventions.",
    tags: ["maladie chronique", "dépendance", "autonomie", "prévention", "ETP"],
    html: `
      <h3>La maladie chronique</h3>
      <p>Affection de longue durée, évolutive, sans guérison spontanée, avec retentissement somatique, psychologique, social et professionnel. Elle impose une <strong>adaptation au quotidien</strong> et un suivi régulier.</p>
      <p>L'<span class="key" data-term="éducation thérapeutique">éducation thérapeutique du patient (ETP)</span> vise à rendre le patient acteur de sa prise en charge (compétences d'auto-soin et d'adaptation).</p>
      <h3>Autonomie et dépendance</h3>
      <ul>
        <li><strong>Autonomie</strong> : capacité à décider et se gouverner soi-même (≠ indépendance).</li>
        <li><strong>Dépendance</strong> : besoin d'aide d'un tiers pour les actes de la vie quotidienne.</li>
        <li>Évaluation par la grille <strong>AGGIR</strong> (GIR 1 = très dépendant → GIR 6 = autonome) ; les GIR 1 à 4 ouvrent droit à l'<strong>APA</strong>.</li>
      </ul>
      <h3>Les niveaux de prévention (rappel transversal)</h3>
      <table class="tbl">
        <tr><th>Niveau</th><th>Objectif</th><th>Exemple</th></tr>
        <tr><td>Primaire</td><td>Empêcher l'apparition</td><td>Vaccination, lutte contre le tabac</td></tr>
        <tr><td>Secondaire</td><td>Dépister précocement</td><td>Dépistage du cancer, mesure de la glycémie</td></tr>
        <tr><td>Tertiaire</td><td>Éviter complications/récidives</td><td>Rééducation, ETP, suivi</td></tr>
        <tr><td>Quaternaire</td><td>Éviter la surmédicalisation</td><td>Limiter examens/traitements inutiles</td></tr>
      </table>
      <div class="callout"><div class="callout-t">Déterminants de santé</div>La santé dépend de facteurs <strong>biologiques</strong>, <strong>comportementaux</strong> (mode de vie), <strong>environnementaux</strong>, <strong>socio-économiques</strong> et du <strong>système de soins</strong>. Les inégalités sociales de santé en découlent.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Prévention « 1-2-3 » : <strong>1</strong>=avant la maladie, <strong>2</strong>=au début (dépistage), <strong>3</strong>=après (séquelles).</div>
    `,
    refs: ["UE 2.3"],
  },
];
export const qcm = [
  { ueId: "2.3", q: "Selon l'OMS (1946), la santé est :", options: ["L'absence de maladie", "Un état de complet bien-être physique, mental et social", "Une bonne condition physique", "L'absence d'infirmité"], correct: 1, explication: "La définition de l'OMS est globale et positive : « état de complet bien-être physique, mental et social, et pas seulement l'absence de maladie ou d'infirmité ».", ref: "UE 2.3", diff: 1 },
  { ueId: "2.3", q: "Quelle charte introduit la notion de promotion de la santé ?", options: ["Charte d'Ottawa (1986)", "Déclaration d'Alma-Ata (1978)", "Loi du 11 février 2005", "Charte de Bangkok"], correct: 0, explication: "La Charte d'Ottawa (1986) définit la promotion de la santé : donner aux populations les moyens d'agir sur les déterminants de leur santé.", ref: "UE 2.3", diff: 2 },
  { ueId: "2.3", q: "Une maladie est dite chronique lorsqu'elle :", options: ["Débute brutalement", "Évolue sur une longue durée (> 3-6 mois) et de façon durable", "Guérit toujours spontanément", "Ne touche que les personnes âgées"], correct: 1, explication: "La maladie chronique est durable, évolutive et nécessite un suivi prolongé (ex : diabète, BPCO).", ref: "UE 2.3", diff: 1 },
  { ueId: "2.3", q: "Dans le modèle de Wood (1980), l'enchaînement correct est :", options: ["Incapacité → Déficience → Désavantage", "Déficience → Incapacité → Désavantage", "Désavantage → Incapacité → Déficience", "Déficience → Désavantage → Incapacité"], correct: 1, explication: "Le modèle de Wood enchaîne : déficience (lésion) → incapacité (limitation d'activité) → désavantage (conséquence sociale).", ref: "UE 2.3", diff: 2 },
  { ueId: "2.3", q: "Quelle loi définit le handicap et instaure la MDPH ?", options: ["Loi du 4 mars 2002", "Loi du 11 février 2005", "Loi du 2 janvier 2002", "Loi Léonetti"], correct: 1, explication: "La loi du 11 février 2005 pose la définition du handicap et crée les Maisons Départementales des Personnes Handicapées (MDPH).", ref: "UE 2.3", diff: 2 },
  { ueId: "2.3", q: "La CIF (OMS, 2001) considère le handicap comme :", options: ["Une caractéristique fixe de la personne", "L'interaction entre la personne et son environnement", "Une simple déficience corporelle", "Un état exclusivement médical"], correct: 1, explication: "La Classification Internationale du Fonctionnement décrit le handicap comme résultant de l'interaction entre la personne et les facteurs environnementaux (obstacles/facilitateurs).", ref: "UE 2.3", diff: 2 },
  { ueId: "2.3", q: "Parmi ces situations, laquelle relève d'un accident de la vie courante (AcVC) ?", options: ["Accident de la route", "Accident du travail", "Chute dans l'escalier du domicile", "Agression sur la voie publique"], correct: 2, explication: "Les AcVC excluent travail, transport routier et agressions. Une chute domestique en est un exemple typique.", ref: "UE 2.3", diff: 1 },
  { ueId: "2.3", q: "Quelle est la première cause de décès par accident de la vie courante ?", options: ["Les brûlures", "Les chutes", "Les noyades", "Les intoxications"], correct: 1, explication: "Les chutes sont la première cause de décès par AcVC, particulièrement chez la personne âgée.", ref: "UE 2.3", diff: 2 },
  { ueId: "2.3", q: "La prévention primaire vise à :", options: ["Dépister précocement une maladie", "Empêcher l'apparition de la maladie", "Limiter les complications", "Éviter la surmédicalisation"], correct: 1, explication: "La prévention primaire agit avant la maladie pour éviter sa survenue (vaccination, éducation, cache-prises…).", ref: "UE 2.3", diff: 1 },
  { ueId: "2.3", q: "Le dépistage d'un cancer du sein par mammographie relève de la prévention :", options: ["Primaire", "Secondaire", "Tertiaire", "Quaternaire"], correct: 1, explication: "Le dépistage précoce d'une maladie déjà potentiellement présente est de la prévention secondaire.", ref: "UE 2.3", diff: 2 },
  { ueId: "2.3", q: "La rééducation après un AVC pour éviter les séquelles relève de la prévention :", options: ["Primaire", "Secondaire", "Tertiaire", "Quaternaire"], correct: 2, explication: "Limiter les complications, séquelles et récidives d'une maladie installée = prévention tertiaire.", ref: "UE 2.3", diff: 2 },
  { ueId: "2.3", q: "L'autonomie d'une personne désigne :", options: ["Sa capacité physique à se déplacer seule", "Sa capacité à décider et se gouverner par elle-même", "L'absence de toute maladie", "Le besoin d'aide d'un tiers"], correct: 1, explication: "L'autonomie est la capacité de décider pour soi-même ; elle ne doit pas être confondue avec l'indépendance (capacité fonctionnelle).", ref: "UE 2.3", diff: 2 },
  { ueId: "2.3", q: "La dépendance se définit comme :", options: ["La capacité à se gouverner seul", "Le besoin d'aide d'un tiers pour les actes de la vie quotidienne", "Une déficience sensorielle", "Une maladie chronique"], correct: 1, explication: "La dépendance correspond au besoin de l'aide d'autrui pour réaliser les actes de la vie quotidienne.", ref: "UE 2.3", diff: 1 },
  { ueId: "2.3", q: "La grille AGGIR sert à évaluer :", options: ["La douleur", "Le degré de dépendance (GIR)", "Le risque infectieux", "La dénutrition"], correct: 1, explication: "AGGIR classe la dépendance du GIR 1 (très dépendant) au GIR 6 (autonome) ; les GIR 1 à 4 conditionnent l'attribution de l'APA.", ref: "UE 2.3", diff: 2 },
  { ueId: "2.3", q: "Le terme « illness » désigne :", options: ["La maladie objectivée par le médecin", "La maladie telle qu'elle est vécue/ressentie par le patient", "La reconnaissance sociale de la maladie", "Une lésion biologique"], correct: 1, explication: "Illness = maladie vécue (ressenti, plainte) ; disease = maladie objectivée ; sickness = maladie reconnue socialement.", ref: "UE 2.3", diff: 3 },
  { ueId: "2.3", q: "Quelle population est la plus exposée aux chutes graves (fracture du col fémoral) ?", options: ["Les enfants de moins de 5 ans", "Les adolescents", "Les personnes âgées", "Les adultes jeunes sportifs"], correct: 2, explication: "Les personnes âgées sont les plus exposées aux chutes graves et à leurs complications (col fémoral, syndrome post-chute).", ref: "UE 2.3", diff: 1 },
  { ueId: "2.3", q: "Le syndrome post-chute se caractérise notamment par :", options: ["Une hyperactivité", "Une peur de tomber et une rétropulsion", "Une fièvre élevée", "Une amélioration de l'équilibre"], correct: 1, explication: "Le syndrome post-chute associe peur de tomber, rétropulsion, sidération motrice, risque de grabatisation : urgence gériatrique.", ref: "UE 2.3", diff: 3 },
  { ueId: "2.3", q: "Parmi ces déterminants de santé, lequel est socio-économique ?", options: ["Le patrimoine génétique", "Le niveau de revenu et d'éducation", "Le mode de vie individuel", "La qualité de l'air"], correct: 1, explication: "Le revenu, l'éducation, l'emploi sont des déterminants socio-économiques, à l'origine d'inégalités sociales de santé.", ref: "UE 2.3", diff: 2 },
  { ueId: "2.3", q: "L'éducation thérapeutique du patient (ETP) a pour but de :", options: ["Remplacer le traitement médicamenteux", "Rendre le patient acteur de sa prise en charge", "Diagnostiquer la maladie", "Limiter l'accès aux soins"], correct: 1, explication: "L'ETP développe les compétences d'auto-soin et d'adaptation pour que le patient gère mieux sa maladie chronique.", ref: "UE 2.3", diff: 2 },
  { ueId: "2.3", q: "Chez le jeune enfant (< 5 ans), un risque accidentel majeur est :", options: ["La fracture du col fémoral", "L'ingestion d'un corps étranger et la noyade", "L'infarctus", "L'AVC"], correct: 1, explication: "Chez le jeune enfant : ingestion de corps étrangers, brûlures, noyade, chutes et intoxications dominent.", ref: "UE 2.3", diff: 1 },
  { ueId: "2.3", q: "La prévention quaternaire vise à :", options: ["Vacciner la population", "Dépister une maladie", "Éviter la surmédicalisation et les soins inutiles", "Rééduquer après une maladie"], correct: 2, explication: "La prévention quaternaire protège le patient des excès de médicalisation (examens/traitements inutiles ou délétères).", ref: "UE 2.3", diff: 3 },
  { ueId: "2.3", q: "La MDPH est compétente pour :", options: ["Délivrer les ordonnances", "Évaluer le handicap et attribuer des aides (AAH, PCH, RQTH)", "Hospitaliser les patients", "Vacciner les enfants"], correct: 1, explication: "La MDPH est le guichet unique du handicap : évaluation, orientation, attribution d'aides via la CDAPH.", ref: "UE 2.3", diff: 2 },
];
export const flashcards = [
  { ueId: "2.3", recto: "Définition de la santé selon l'OMS (1946) ?", verso: "Un état de complet bien-être physique, mental et social, et pas seulement l'absence de maladie ou d'infirmité." },
  { ueId: "2.3", recto: "Quelle charte introduit la promotion de la santé ?", verso: "La Charte d'Ottawa (1986)." },
  { ueId: "2.3", recto: "Différence maladie aiguë / chronique ?", verso: "Aiguë : début brutal, courte durée. Chronique : durable (> 3-6 mois), évolutive, avec suivi prolongé." },
  { ueId: "2.3", recto: "Modèle de Wood (1980) : les 3 étapes ?", verso: "Déficience → Incapacité → Désavantage (handicap)." },
  { ueId: "2.3", recto: "Quelle loi définit le handicap et crée la MDPH ?", verso: "La loi du 11 février 2005." },
  { ueId: "2.3", recto: "Que signifie CIF et quelle est son idée clé ?", verso: "Classification Internationale du Fonctionnement (OMS 2001) : le handicap résulte de l'interaction personne / environnement." },
  { ueId: "2.3", recto: "Qu'est-ce qu'un accident de la vie courante (AcVC) ?", verso: "Un accident hors travail, hors transport et hors agression (domestique, sport, loisir, scolaire)." },
  { ueId: "2.3", recto: "1re cause de décès par AcVC ?", verso: "Les chutes, surtout chez la personne âgée." },
  { ueId: "2.3", recto: "Les 3 niveaux de prévention ?", verso: "Primaire (éviter l'apparition), secondaire (dépister tôt), tertiaire (limiter séquelles/récidives)." },
  { ueId: "2.3", recto: "Prévention quaternaire ?", verso: "Éviter la surmédicalisation : examens et traitements inutiles ou délétères." },
  { ueId: "2.3", recto: "Autonomie vs dépendance ?", verso: "Autonomie = capacité à décider pour soi. Dépendance = besoin d'aide d'un tiers pour les actes de la vie quotidienne." },
  { ueId: "2.3", recto: "À quoi sert la grille AGGIR ?", verso: "Évaluer la dépendance (GIR 1 très dépendant → GIR 6 autonome) ; les GIR 1 à 4 ouvrent droit à l'APA." },
  { ueId: "2.3", recto: "Disease, illness, sickness ?", verso: "Disease = maladie objectivée ; illness = maladie vécue ; sickness = maladie reconnue socialement." },
  { ueId: "2.3", recto: "Qu'est-ce que le syndrome post-chute ?", verso: "Peur de tomber, rétropulsion, sidération motrice avec risque de grabatisation : urgence gériatrique." },
  { ueId: "2.3", recto: "But de l'éducation thérapeutique (ETP) ?", verso: "Rendre le patient acteur de sa prise en charge (compétences d'auto-soin et d'adaptation)." },
  { ueId: "2.3", recto: "Cite 3 catégories de déterminants de santé.", verso: "Biologiques, comportementaux (mode de vie), environnementaux, socio-économiques, système de soins." },
];
