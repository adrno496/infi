// UE 3.3 — Rôles infirmiers, organisation du travail et interprofessionnalité. STI fondements, S3-S5.
export const fiches = [
  {
    id: "f_3_3_roles_infirmiers", ueId: "3.3", type: "cours",
    titre: "Les trois rôles de l'infirmier",
    resume: "Rôle propre autonome, rôle prescrit sur prescription, et rôle en collaboration avec l'aide-soignant.",
    tags: ["rôle propre", "rôle prescrit", "collaboration", "décret de compétences"],
    html: `
      <p>L'exercice infirmier est encadré par le <strong>Code de la santé publique</strong> (articles R.4311-1 et suivants, issus de l'ex « décret de compétences » du 29 juillet 2004). On distingue trois registres d'action.</p>
      <h3>1. Le rôle propre</h3>
      <p>Domaine d'<strong>autonomie</strong> et de <strong>responsabilité</strong> de l'infirmier : il identifie les besoins, pose le <span class="key" data-term="diagnostic infirmier">diagnostic infirmier</span>, décide et met en œuvre les soins relevant de son initiative (art. R.4311-3 et R.4311-5).</p>
      <ul>
        <li>Surveillance de l'état clinique, hygiène, confort, prévention des escarres.</li>
        <li>Aide à la prise des médicaments (forme orale non injectable), surveillance de l'alimentation et de l'élimination.</li>
        <li>Relation d'aide, éducation, accompagnement.</li>
      </ul>
      <h3>2. Le rôle prescrit (ou sur prescription médicale)</h3>
      <p>Soins réalisés <strong>sur prescription</strong> ou selon un protocole écrit, qualitatif et quantitatif, daté et signé (art. R.4311-7). Ex. : injections, perfusions, pansements de plaie complexe, prélèvements veineux.</p>
      <h3>3. Le rôle en collaboration</h3>
      <p>Certains soins du rôle propre peuvent être <strong>assurés avec la collaboration</strong> d'aides-soignants, d'auxiliaires de puériculture ou d'AES, sous la responsabilité de l'infirmier qui reste garant (art. R.4311-4).</p>
      <table class="tbl">
        <tr><th>Registre</th><th>Initiative</th><th>Exemple</th></tr>
        <tr><td>Rôle propre</td><td>Infirmier (autonome)</td><td>Prévention escarre, éducation</td></tr>
        <tr><td>Rôle prescrit</td><td>Médecin (prescription)</td><td>Injection IV, perfusion</td></tr>
        <tr><td>Collaboration</td><td>IDE encadre/contrôle l'AS</td><td>Toilette, prise de constantes simples</td></tr>
      </table>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>P-P-C</strong> : <strong>P</strong>ropre (je décide), <strong>P</strong>rescrit (le médecin décide), <strong>C</strong>ollaboration (l'AS m'assiste mais je reste responsable).</div>
      <div class="callout"><div class="callout-t">Point clé</div>Même quand un soin est réalisé en collaboration avec l'aide-soignant, l'infirmier conserve la <span class="key" data-term="responsabilité">responsabilité</span> du résultat et du contrôle.</div>
    `,
    refs: ["UE 3.3 ; CSP art. R.4311-1 à R.4311-15"],
  },
  {
    id: "f_3_3_organisation_travail", ueId: "3.3", type: "cours",
    titre: "Organisation du travail et planification des soins",
    resume: "Modes de répartition du travail, planning mural, transmissions et continuité des soins.",
    tags: ["organisation", "planification", "continuité des soins", "planning"],
    html: `
      <p>L'organisation du travail vise la <strong>qualité</strong>, la <strong>sécurité</strong> et la <strong>continuité des soins</strong> sur 24 h tout en optimisant les ressources.</p>
      <h3>Modes d'organisation des soins</h3>
      <ul>
        <li><strong>Soins en série (par tâche)</strong> : chaque soignant réalise une même tâche pour tous les patients (ex. tour des injections). Rapide mais déshumanisant et fragmenté.</li>
        <li><strong>Soins individualisés (par secteur/patient)</strong> : un soignant prend en charge un groupe de patients de façon globale. Favorise la relation et la <span class="key" data-term="prise en charge globale">prise en charge globale</span>.</li>
        <li><strong>Soins intégrés / référent</strong> : un infirmier référent coordonne le parcours d'un patient.</li>
      </ul>
      <h3>Outils de planification</h3>
      <ul>
        <li><strong>Planning mural / diagramme de soins</strong> : visualise les soins à réaliser dans la journée.</li>
        <li><strong>Plan de soins guide / chemin clinique</strong> : standardise la prise en charge d'une pathologie.</li>
        <li><strong>Macrocible et transmissions ciblées</strong> (modèle DAR : Données – Actions – Résultats).</li>
      </ul>
      <h3>Continuité et relève</h3>
      <p>Les <strong>transmissions</strong> (orales en relève + écrites dans le dossier) garantissent la continuité. Elles doivent être pertinentes, factuelles, datées et signées.</p>
      <div class="callout"><div class="callout-t">Cadre légal</div>La traçabilité des soins dans le <span class="key" data-term="dossier de soins">dossier de soins</span> est une obligation (art. R.4311-3 et R.4312-35 du code de déontologie). « Ce qui n'est pas écrit n'est pas fait. »</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Transmission ciblée = <strong>DAR</strong> : <strong>D</strong>onnées, <strong>A</strong>ctions, <strong>R</strong>ésultats.</div>
    `,
    refs: ["UE 3.3 ; CSP art. R.4311-3 et R.4312-35"],
  },
  {
    id: "f_3_3_interprofessionnalite", ueId: "3.3", type: "cours",
    titre: "Interprofessionnalité et coordination",
    resume: "Travail pluriprofessionnel, coopération, coordination du parcours et acteurs du soin.",
    tags: ["interprofessionnalité", "pluridisciplinarité", "coordination", "coopération"],
    html: `
      <p>L'<span class="key" data-term="interprofessionnalité">interprofessionnalité</span> désigne la collaboration entre professionnels de disciplines différentes qui partagent un objectif commun centré sur le patient.</p>
      <h3>Niveaux de travail collectif</h3>
      <ul>
        <li><strong>Multidisciplinarité / pluridisciplinarité</strong> : plusieurs disciplines autour d'un même patient, juxtaposition d'expertises avec peu d'interactions.</li>
        <li><strong>Interdisciplinarité</strong> : interactions réelles et décisions partagées, objectif co-construit.</li>
        <li><strong>Transdisciplinarité</strong> : dépassement des frontières des métiers, savoirs partagés.</li>
      </ul>
      <h3>Acteurs autour du patient</h3>
      <ul>
        <li>Médecin, IDE, AS, kinésithérapeute, ergothérapeute, diététicien.</li>
        <li>Assistant·e social·e, psychologue, cadre de santé, secrétaire médical·e.</li>
        <li>Le <strong>patient et son entourage</strong>, acteurs à part entière (partenariat de soin).</li>
      </ul>
      <h3>Outils de coordination</h3>
      <ul>
        <li><strong>Réunions de concertation pluridisciplinaire (RCP)</strong>, staffs, synthèses.</li>
        <li><strong>Dossier patient partagé</strong>, projet de soins / projet de vie.</li>
        <li><strong>Protocoles de coopération</strong> (loi HPST 2009, art. 51) permettant des transferts d'activités entre professionnels de santé.</li>
      </ul>
      <div class="callout"><div class="callout-t">Bénéfices</div>Une bonne coordination réduit les ruptures de parcours, sécurise les soins et améliore la satisfaction du patient.</div>
    `,
    refs: ["UE 3.3 ; Loi HPST 2009, art. 51"],
  },
  {
    id: "f_3_3_delegation_responsabilite", ueId: "3.3", type: "cours",
    titre: "Collaboration, encadrement et responsabilités",
    resume: "Cadre de la collaboration avec l'aide-soignant, encadrement des étudiants et formes de responsabilité.",
    tags: ["collaboration", "encadrement", "responsabilité", "tutorat"],
    html: `
      <p>L'infirmier <strong>collabore</strong> avec l'aide-soignant et <strong>encadre</strong> stagiaires et nouveaux professionnels. Ces missions engagent sa responsabilité.</p>
      <h3>Collaboration avec l'AS</h3>
      <ul>
        <li>Seul un soin relevant du <strong>rôle propre</strong> et autorisé à l'AS peut lui être confié, à un agent <strong>compétent</strong>, dans une situation <strong>stable</strong>.</li>
        <li>L'IDE garde la responsabilité du <strong>contrôle et de l'évaluation</strong> du soin réalisé en collaboration.</li>
        <li>Un soin sur prescription (rôle prescrit) ne peut pas être confié à l'AS.</li>
      </ul>
      <h3>Les formes de responsabilité</h3>
      <table class="tbl">
        <tr><th>Type</th><th>Juridiction</th><th>But</th></tr>
        <tr><td>Pénale</td><td>Tribunal correctionnel</td><td>Sanctionner une infraction</td></tr>
        <tr><td>Civile / administrative</td><td>Tribunal judiciaire / administratif</td><td>Réparer le dommage (indemnisation)</td></tr>
        <tr><td>Disciplinaire</td><td>Employeur / Ordre infirmier</td><td>Sanctionner un manquement professionnel</td></tr>
      </table>
      <h3>Encadrement et tutorat</h3>
      <p>Le <strong>tuteur de stage</strong> accompagne l'acquisition des compétences de l'étudiant (référentiel de formation 2009). L'encadrement de proximité est assuré au quotidien par les professionnels de l'équipe.</p>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Collaborer sans risque = <strong>3 C</strong> : <strong>C</strong>ompétence de l'agent, <strong>C</strong>adre légal (rôle propre autorisé), <strong>C</strong>ontrôle par l'IDE.</div>
      <div class="callout"><div class="callout-t">Attention</div>« Glissement de tâches » = confier à un professionnel un acte hors de ses compétences réglementaires : faute engageant la responsabilité.</div>
    `,
    refs: ["UE 3.3 ; CSP art. R.4311-4 et R.4311-7"],
  },
];

export const qcm = [
  { ueId: "3.3", q: "Le rôle propre infirmier correspond à :", options: ["Les soins réalisés uniquement sur prescription médicale", "Le domaine d'autonomie et d'initiative de l'infirmier", "Les soins délégués au médecin", "Les actes réservés au cadre de santé"], correct: 1, explication: "Le rôle propre (art. R.4311-3 et R.4311-5) regroupe les soins que l'infirmier décide et met en œuvre de sa propre initiative.", ref: "UE 3.3", diff: 1 },
  { ueId: "3.3", q: "Un pansement de plaie complexe relève principalement :", options: ["Du rôle propre", "Du rôle prescrit", "De la compétence exclusive de l'aide-soignant", "Du rôle du diététicien"], correct: 1, explication: "Il s'agit d'un soin réalisé sur prescription ou protocole (art. R.4311-7), donc du rôle prescrit.", ref: "UE 3.3", diff: 2 },
  { ueId: "3.3", q: "Quel texte fixe les actes professionnels infirmiers ?", options: ["Le Code du travail", "Le Code de la santé publique (art. R.4311-1 et s.)", "Le Code civil uniquement", "La convention collective"], correct: 1, explication: "Le décret de compétences est intégré au CSP, articles R.4311-1 et suivants.", ref: "UE 3.3", diff: 1 },
  { ueId: "3.3", q: "Lorsqu'un soin du rôle propre est réalisé en collaboration avec un aide-soignant, l'infirmier :", options: ["Se décharge totalement de toute responsabilité", "Reste responsable du contrôle et de l'évaluation du soin", "Doit obtenir une prescription médicale", "N'a plus à tracer le soin"], correct: 1, explication: "La collaboration (art. R.4311-4) se fait sous la responsabilité de l'infirmier, qui reste garant.", ref: "UE 3.3", diff: 2 },
  { ueId: "3.3", q: "Le modèle de transmission ciblée DAR signifie :", options: ["Diagnostic – Action – Résultat", "Données – Actions – Résultats", "Données – Analyse – Réflexion", "Décision – Acte – Relève"], correct: 1, explication: "DAR = Données (cible), Actions (soins menés), Résultats (effets observés).", ref: "UE 3.3", diff: 2 },
  { ueId: "3.3", q: "L'organisation des soins « en série » consiste à :", options: ["Prendre en charge globalement un groupe de patients", "Réaliser une même tâche pour tous les patients à la suite", "Confier chaque patient à un référent unique", "Supprimer les transmissions"], correct: 1, explication: "Les soins en série (par tâche) sont rapides mais déshumanisants car ils fragmentent la prise en charge.", ref: "UE 3.3", diff: 2 },
  { ueId: "3.3", q: "La continuité des soins sur 24 h est principalement assurée par :", options: ["Le règlement intérieur", "Les transmissions orales et écrites", "Le planning des congés", "Le compte rendu d'hospitalisation seul"], correct: 1, explication: "Les transmissions (relève orale + traçabilité écrite) garantissent la continuité entre les équipes.", ref: "UE 3.3", diff: 1 },
  { ueId: "3.3", q: "Parmi ces niveaux de travail collectif, lequel implique des décisions co-construites ?", options: ["Multidisciplinarité", "Juxtaposition", "Interdisciplinarité", "Cloisonnement"], correct: 2, explication: "L'interdisciplinarité suppose des interactions réelles et un objectif partagé entre les disciplines.", ref: "UE 3.3", diff: 2 },
  { ueId: "3.3", q: "Les protocoles de coopération entre professionnels de santé sont issus de :", options: ["La loi Kouchner de 2002", "La loi HPST de 2009 (art. 51)", "Le décret de 1984", "Le Code de déontologie médicale uniquement"], correct: 1, explication: "L'article 51 de la loi HPST (2009) permet des transferts d'activités entre professionnels via des protocoles autorisés.", ref: "UE 3.3", diff: 3 },
  { ueId: "3.3", q: "Le « glissement de tâches » désigne :", options: ["Une bonne pratique d'optimisation", "Le fait de confier un acte hors des compétences réglementaires d'un professionnel", "Le tutorat des étudiants", "La rotation des plannings"], correct: 1, explication: "Le glissement de tâches expose le patient et engage la responsabilité ; il est à proscrire.", ref: "UE 3.3", diff: 2 },
  { ueId: "3.3", q: "La responsabilité qui vise à réparer un dommage par indemnisation est la responsabilité :", options: ["Pénale", "Disciplinaire", "Civile (ou administrative dans le public)", "Ordinale uniquement"], correct: 2, explication: "La responsabilité civile/administrative répare le préjudice ; la pénale sanctionne, la disciplinaire concerne le manquement professionnel.", ref: "UE 3.3", diff: 3 },
  { ueId: "3.3", q: "Le diagnostic infirmier relève :", options: ["Du rôle prescrit", "Du rôle propre", "De la compétence du médecin", "De l'aide-soignant"], correct: 1, explication: "Poser un diagnostic infirmier et décider des soins associés relève de l'autonomie du rôle propre.", ref: "UE 3.3", diff: 1 },
  { ueId: "3.3", q: "Quelle affirmation sur la traçabilité est exacte ?", options: ["Seuls les soins prescrits doivent être tracés", "« Ce qui n'est pas écrit n'est pas fait »", "La traçabilité est facultative", "L'aide-soignant ne trace jamais"], correct: 1, explication: "La traçabilité des soins dans le dossier est une obligation légale (art. R.4311-3) et une preuve juridique.", ref: "UE 3.3", diff: 1 },
  { ueId: "3.3", q: "Une condition pour confier un soin à un aide-soignant en collaboration est :", options: ["Que le patient soit instable", "Que l'agent soit compétent et la situation stable", "Que ce soit un acte sur prescription", "Qu'il n'y ait pas de contrôle ensuite"], correct: 1, explication: "On confie un soin du rôle propre autorisé, à un agent compétent, dans une situation stable, avec contrôle IDE.", ref: "UE 3.3", diff: 2 },
  { ueId: "3.3", q: "Le tuteur de stage a pour mission principale :", options: ["De noter le bilan financier du service", "D'accompagner l'acquisition des compétences de l'étudiant", "De remplacer le cadre de santé", "De prescrire les soins de l'étudiant"], correct: 1, explication: "Dans le référentiel 2009, le tuteur évalue et accompagne la progression des compétences de l'ESI.", ref: "UE 3.3", diff: 1 },
  { ueId: "3.3", q: "La RCP (réunion de concertation pluridisciplinaire) sert surtout à :", options: ["Planifier les congés de l'équipe", "Coordonner et décider collectivement la prise en charge d'un patient", "Évaluer les fournisseurs", "Remplacer le dossier de soins"], correct: 1, explication: "La RCP réunit plusieurs professionnels pour décider ensemble du parcours de soins du patient.", ref: "UE 3.3", diff: 2 },
  { ueId: "3.3", q: "Le cadre de santé a notamment pour rôle :", options: ["De réaliser tous les soins à la place de l'équipe", "D'organiser, manager et coordonner l'équipe soignante", "De prescrire les traitements", "D'assurer le secrétariat médical"], correct: 1, explication: "Le cadre de santé encadre, organise et coordonne l'unité ; il n'a pas vocation à prescrire.", ref: "UE 3.3", diff: 2 },
  { ueId: "3.3", q: "Une injection intraveineuse réalisée par l'infirmier relève :", options: ["Du rôle propre autonome", "Du rôle prescrit", "De la collaboration avec l'AS", "Du rôle du diététicien"], correct: 1, explication: "L'IV est un acte sur prescription médicale (art. R.4311-7), donc du rôle prescrit.", ref: "UE 3.3", diff: 1 },
  { ueId: "3.3", q: "Le patient et son entourage, dans la coordination des soins, sont considérés comme :", options: ["De simples bénéficiaires passifs", "Des acteurs à part entière (partenariat de soin)", "Des observateurs sans rôle", "Des décideurs médicaux"], correct: 1, explication: "Le partenariat de soin reconnaît le patient comme acteur de sa prise en charge.", ref: "UE 3.3", diff: 2 },
  { ueId: "3.3", q: "Le plan de soins guide (chemin clinique) a pour intérêt de :", options: ["Individualiser sans aucune trame", "Standardiser et sécuriser la prise en charge d'une pathologie", "Supprimer les transmissions", "Remplacer la prescription médicale"], correct: 1, explication: "Le chemin clinique formalise les étapes attendues d'une prise en charge pour en améliorer la qualité.", ref: "UE 3.3", diff: 3 },
  { ueId: "3.3", q: "Quelle situation illustre le rôle propre infirmier ?", options: ["Administrer une perfusion prescrite", "Mettre en place un programme de prévention des escarres", "Réaliser une transfusion sur prescription", "Poser un cathéter central"], correct: 1, explication: "La prévention des escarres relève de l'initiative et de l'autonomie de l'infirmier (rôle propre).", ref: "UE 3.3", diff: 1 },
  { ueId: "3.3", q: "Les transmissions ciblées doivent être :", options: ["Subjectives et non datées", "Factuelles, pertinentes, datées et signées", "Orales uniquement", "Confidentielles donc jamais écrites"], correct: 1, explication: "La qualité des transmissions repose sur des données factuelles, datées et signées pour assurer continuité et traçabilité.", ref: "UE 3.3", diff: 1 },
  { ueId: "3.3", q: "Le secret professionnel auquel l'infirmier est tenu :", options: ["N'existe pas en équipe de soins", "Peut être partagé entre professionnels participant à la prise en charge (secret partagé)", "Autorise à parler du patient à n'importe qui", "Ne concerne que le médecin"], correct: 1, explication: "Le secret professionnel s'impose à l'IDE ; au sein de l'équipe, le partage est limité aux informations utiles à la continuité des soins (secret partagé).", ref: "UE 3.3", diff: 3 },
  { ueId: "3.3", q: "La prise des constantes (température, pouls) en situation stable peut être :", options: ["Réalisée en collaboration avec l'aide-soignant sous responsabilité IDE", "Faite uniquement sur prescription médicale", "Interdite à l'aide-soignant", "Du ressort exclusif du médecin"], correct: 0, explication: "Le recueil de paramètres simples chez un patient stable relève des soins assurés en collaboration avec l'AS, sous la responsabilité de l'infirmier (art. R.4311-4).", ref: "UE 3.3", diff: 2 },
];

export const flashcards = [
  { ueId: "3.3", recto: "Quels sont les trois registres d'action de l'infirmier ?", verso: "Rôle propre (autonome), rôle prescrit (sur prescription), rôle en collaboration." },
  { ueId: "3.3", recto: "Quel texte encadre les actes professionnels infirmiers ?", verso: "Le Code de la santé publique, articles R.4311-1 et suivants (ex décret de compétences)." },
  { ueId: "3.3", recto: "Que signifie DAR dans les transmissions ciblées ?", verso: "Données – Actions – Résultats." },
  { ueId: "3.3", recto: "Peut-on confier un soin prescrit (IV) à un aide-soignant ?", verso: "Non. Seuls certains soins du rôle propre peuvent l'être, sous la responsabilité de l'IDE." },
  { ueId: "3.3", recto: "Qui pose le diagnostic infirmier ?", verso: "L'infirmier, dans le cadre de son rôle propre." },
  { ueId: "3.3", recto: "Différence soins en série / soins individualisés ?", verso: "En série = une tâche pour tous (fragmenté) ; individualisés = prise en charge globale d'un groupe de patients." },
  { ueId: "3.3", recto: "Qu'est-ce qu'un glissement de tâches ?", verso: "Confier à un professionnel un acte hors de ses compétences réglementaires ; cela engage la responsabilité." },
  { ueId: "3.3", recto: "Quelle loi a créé les protocoles de coopération ?", verso: "La loi HPST de 2009 (article 51)." },
  { ueId: "3.3", recto: "Les trois formes principales de responsabilité ?", verso: "Pénale (sanction), civile/administrative (réparation), disciplinaire (manquement professionnel)." },
  { ueId: "3.3", recto: "Différence interdisciplinarité / pluridisciplinarité ?", verso: "Pluridisciplinarité = juxtaposition d'expertises ; interdisciplinarité = interactions et décisions co-construites." },
  { ueId: "3.3", recto: "À quoi sert une RCP ?", verso: "Coordonner et décider collectivement la prise en charge d'un patient entre plusieurs professionnels." },
  { ueId: "3.3", recto: "Pourquoi tracer les soins ? (formule clé)", verso: "« Ce qui n'est pas écrit n'est pas fait » : obligation légale et preuve juridique." },
  { ueId: "3.3", recto: "Les 3 conditions pour collaborer sans risque ?", verso: "Compétence de l'agent, cadre légal (rôle propre autorisé), contrôle par l'IDE." },
  { ueId: "3.3", recto: "Rôle principal du cadre de santé ?", verso: "Organiser, manager et coordonner l'équipe soignante de l'unité." },
  { ueId: "3.3", recto: "Quel est le rôle du tuteur de stage ?", verso: "Accompagner et évaluer l'acquisition des compétences de l'étudiant (référentiel 2009)." },
  { ueId: "3.3", recto: "Le patient est-il acteur de sa prise en charge ?", verso: "Oui : partenariat de soin, le patient et son entourage sont des acteurs à part entière." },
  { ueId: "3.3", recto: "Qu'est-ce que le secret partagé en équipe de soins ?", verso: "Le partage entre professionnels, limité aux seules informations utiles à la continuité de la prise en charge du patient." },
  { ueId: "3.3", recto: "Quel article du CSP encadre la collaboration avec l'aide-soignant ?", verso: "L'article R.4311-4 du Code de la santé publique." },
];
