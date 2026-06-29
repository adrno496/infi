export const fiches = [
  { id: "fx_ue_3_3_plus_roles_infirmiers", ueId: "3.3", type: "cours",
    titre: "Les trois rôles infirmiers : rôle propre, rôle prescrit, rôle en collaboration",
    resume: "Distinction juridique et pratique entre rôle propre autonome, rôle sur prescription et rôle en collaboration de l'IDE.",
    tags: ["role propre", "prescription", "collaboration"],
    html: `<p>Le décret d'actes infirmiers (articles <strong>R.4311-1 à R.4311-15 du Code de la santé publique</strong>) structure l'exercice infirmier autour de plusieurs registres de compétence. Bien les distinguer est central pour la responsabilité professionnelle.</p>
<h3>Le rôle propre (R.4311-5)</h3>
<p>L'<span class="key" data-term="role propre">rôle propre</span> regroupe les soins que l'IDE <strong>initie, organise et évalue de sa propre initiative</strong>, sans prescription médicale. L'infirmier·e est ici pleinement autonome et responsable.</p>
<ul>
<li>Surveillance clinique (constantes, état cutané, douleur, conscience) et recueil de données.</li>
<li>Soins d'hygiène et de confort, prévention des escarres, aide à l'élimination.</li>
<li>Éducation du patient, accompagnement relationnel, entretien d'accueil.</li>
<li>Pose et surveillance d'une sonde vésicale chez la femme, aspiration des sécrétions, soins de trachéotomie déjà en place.</li>
</ul>
<h3>Le rôle sur prescription médicale (R.4311-7)</h3>
<p>Ces actes nécessitent une <span class="key" data-term="prescription">prescription médicale</span> écrite, qualitative, quantitative, datée et signée. Exemples : injections, perfusions, administration de médicaments, prélèvements veineux, pose de sonde gastrique.</p>
<h3>Le rôle en collaboration / sur protocole (R.4311-8 et R.4311-9)</h3>
<p>L'IDE applique une prescription en présence d'un médecin (ex. réanimation cardio-pulmonaire) ou dans le cadre d'un <strong>protocole écrit, daté et signé</strong> par le médecin. Le protocole encadre l'urgence et engage la responsabilité partagée.</p>
<table class="tbl">
<tr><th>Registre</th><th>Base juridique</th><th>Initiative</th></tr>
<tr><td>Rôle propre</td><td>R.4311-5</td><td>IDE autonome</td></tr>
<tr><td>Rôle prescrit</td><td>R.4311-7</td><td>Médecin (prescription)</td></tr>
<tr><td>Rôle en collaboration</td><td>R.4311-8/9</td><td>Protocole ou présence médicale</td></tr>
</table>
<div class="callout"><div class="callout-t">Point clé responsabilité</div>Dans le rôle propre, l'IDE est seul·e responsable. Dans le rôle prescrit, la responsabilité de l'indication revient au prescripteur, mais l'IDE reste responsable de la <strong>vérification</strong> et de la <strong>bonne exécution</strong> de l'acte (devoir d'alerte si prescription douteuse).</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« PROPRE = je décide, PRESCRIT = on me dit, COLLABORATION = on encadre. »</div>`,
    refs: ["Code de la santé publique, art. R.4311-1 à R.4311-15", "Décret n°2004-802 du 29 juillet 2004"] },

  { id: "fx_ue_3_3_plus_organisation_travail", ueId: "3.3", type: "cours",
    titre: "Organisation du travail infirmier et transmissions",
    resume: "Modes d'organisation des soins, transmissions ciblées et continuité des soins en équipe.",
    tags: ["organisation", "transmissions", "continuite"],
    html: `<p>L'organisation du travail infirmier garantit la <span class="key" data-term="continuite des soins">continuité des soins</span> 24h/24. Plusieurs modes coexistent selon les services.</p>
<h3>Modes d'organisation des soins</h3>
<ul>
<li><strong>Soins en série (par tâche)</strong> : chaque IDE réalise un type d'acte pour tous les patients. Efficace mais fragmente la relation.</li>
<li><strong>Soins intégraux (par secteur)</strong> : un·e IDE prend en charge globalement un groupe de patients. Favorise la continuité et la relation.</li>
<li><strong>Soins par dossier / référent</strong> : un·e IDE référent·e assure le suivi du projet de soins du patient.</li>
</ul>
<h3>Les transmissions ciblées</h3>
<p>Outil structuré de traçabilité écrit selon le modèle <span class="key" data-term="DAR">DAR</span> :</p>
<table class="tbl">
<tr><th>Lettre</th><th>Signification</th><th>Contenu</th></tr>
<tr><td>D</td><td>Données</td><td>Observations objectives et subjectives</td></tr>
<tr><td>A</td><td>Actions</td><td>Soins et interventions réalisés</td></tr>
<tr><td>R</td><td>Résultats</td><td>Évaluation de l'efficacité</td></tr>
</table>
<p>La <strong>cible</strong> est un énoncé concis d'une préoccupation ou d'un problème (ex. « douleur abdominale »).</p>
<div class="callout"><div class="callout-t">Valeur juridique</div>Le dossier de soins est un document à valeur médico-légale. Toute transmission doit être datée, horodatée et signée. « Ce qui n'est pas écrit est réputé non fait. »</div>
<h3>La relève / transmission orale</h3>
<p>Moment clé de passage de relais entre équipes. Elle complète l'écrit mais ne le remplace pas. La méthode <span class="key" data-term="SBAR">SBAR</span> (Situation, Background/contexte, Assessment/évaluation, Recommandation) structure la communication, notamment en cas d'urgence ou d'appel au médecin.</p>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« SBAR pour parler clair : Situation, Background, Analyse, Recommandation. »</div>`,
    refs: ["HAS – Transmissions ciblées", "HAS – Saed/SBAR : un guide pour faciliter la communication entre professionnels de santé (2014)"] },

  { id: "fx_ue_3_3_plus_interprofessionnalite_delegation", ueId: "3.3", type: "cours",
    titre: "Interprofessionnalité, délégation et collaboration IDE/AS",
    resume: "Cadre de la collaboration interprofessionnelle, glissement de tâches et collaboration IDE/aide-soignant.",
    tags: ["interprofessionnalite", "delegation", "aide-soignant"],
    html: `<p>L'<span class="key" data-term="interprofessionnalite">interprofessionnalité</span> désigne la collaboration coordonnée de plusieurs professions autour d'un projet de soins commun centré sur le patient (IDE, AS, médecin, kiné, ergothérapeute, assistante sociale, diététicien...).</p>
<h3>Collaboration IDE / aide-soignant</h3>
<p>L'aide-soignant·e exerce <strong>sous la responsabilité de l'infirmier·e</strong>, dans le cadre du rôle propre (R.4311-4). L'IDE peut lui <span class="key" data-term="collaboration">confier des soins</span> relevant du rôle propre, en tenant compte de sa formation et de ses compétences. L'IDE reste responsable de l'organisation et de l'évaluation.</p>
<ul>
<li>L'AS peut : soins d'hygiène, aide aux repas, surveillance et recueil des constantes, transmission des observations.</li>
<li>L'AS ne peut pas : réaliser des actes du rôle prescrit (injections, distribution de médicaments non sécurisée), évaluer de façon autonome.</li>
</ul>
<h3>Notions clés à ne pas confondre</h3>
<table class="tbl">
<tr><th>Terme</th><th>Définition</th></tr>
<tr><td>Délégation</td><td>Transfert d'une activité du rôle propre à l'AS, sous responsabilité IDE</td></tr>
<tr><td>Glissement de tâches</td><td>Pratique d'un acte hors compétence légale : illégal et dangereux</td></tr>
<tr><td>Protocole de coopération</td><td>Transfert d'actes entre professionnels (art. 51 loi HPST), cadre légal encadré</td></tr>
</table>
<div class="callout"><div class="callout-t">Attention au glissement de tâches</div>Confier à un professionnel un acte hors de son champ légal de compétence est un <strong>glissement de tâches</strong>. Il engage la responsabilité disciplinaire et pénale de celui qui délègue comme de celui qui exécute.</div>
<h3>Les protocoles de coopération</h3>
<p>Issus de l'<strong>article 51 de la loi HPST (2009)</strong>, ils permettent, après validation (aujourd'hui par la HAS), un transfert d'activités entre professionnels de santé (ex. IDE réalisant certains actes auparavant médicaux). Ils complètent le dispositif d'<strong>infirmier en pratique avancée (IPA)</strong> créé en 2018.</p>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« Délègue ce qui est PROPRE, jamais ce qui est PRESCRIT. »</div>`,
    refs: ["Code de la santé publique, art. R.4311-4", "Loi HPST n°2009-879 du 21 juillet 2009, art. 51", "Décret IPA n°2018-629 du 18 juillet 2018"] },
];

export const qcm = [
  { ueId: "3.3", q: "Quel article du Code de la santé publique définit le rôle propre infirmier ?",
    options: ["R.4311-5", "R.4311-7", "R.4311-2", "R.4312-1"], correct: 0,
    explication: "Le rôle propre, regroupant les soins que l'IDE initie et évalue de sa propre initiative, est défini à l'article R.4311-5. Le R.4311-7 concerne les actes sur prescription.",
    ref: "CSP art. R.4311-5", diff: 1 },

  { ueId: "3.3", q: "Parmi ces actes, lequel relève du rôle propre infirmier ?",
    options: ["Injection intramusculaire prescrite", "Prévention des escarres", "Pose d'une perfusion", "Prélèvement veineux"], correct: 1,
    explication: "La prévention des escarres relève du rôle propre (surveillance, soins de confort, prévention). Les trois autres actes nécessitent une prescription médicale (R.4311-7).",
    ref: "CSP art. R.4311-5", diff: 1 },

  { ueId: "3.3", q: "Une prescription médicale conforme doit être :",
    options: ["Orale et confirmée par téléphone", "Écrite, qualitative, quantitative, datée et signée", "Validée par le cadre de santé", "Renouvelée chaque semaine obligatoirement"], correct: 1,
    explication: "Une prescription médicale doit être écrite, qualitative (le médicament), quantitative (la dose), datée et signée pour que l'IDE puisse l'appliquer (R.4311-7). Une prescription orale n'est admise qu'en situation d'urgence et doit être confirmée par écrit.",
    ref: "CSP art. R.4311-7", diff: 2 },

  { ueId: "3.3", q: "Que signifie le sigle DAR utilisé dans les transmissions ciblées ?",
    options: ["Diagnostic, Action, Résultat", "Données, Actions, Résultats", "Dossier, Analyse, Régulation", "Décision, Acte, Réévaluation"], correct: 1,
    explication: "DAR signifie Données (observations), Actions (soins réalisés), Résultats (évaluation de l'efficacité). C'est la structure d'écriture d'une transmission ciblée associée à une cible.",
    ref: "HAS – Transmissions ciblées", diff: 1 },

  { ueId: "3.3", q: "L'aide-soignant exerce :",
    options: ["En totale autonomie", "Sous la responsabilité de l'infirmier", "Uniquement sur prescription médicale directe", "Sous la responsabilité du médecin uniquement"], correct: 1,
    explication: "L'aide-soignant collabore aux soins relevant du rôle propre infirmier et exerce sous la responsabilité de l'IDE (art. R.4311-4). L'IDE reste responsable de l'organisation et de l'évaluation des soins.",
    ref: "CSP art. R.4311-4", diff: 1 },

  { ueId: "3.3", q: "Qu'est-ce qu'un glissement de tâches ?",
    options: ["Une délégation autorisée d'un acte du rôle propre", "La réalisation d'un acte hors de son champ légal de compétence", "Un changement de service du soignant", "Le transfert d'un patient d'une unité à une autre"], correct: 1,
    explication: "Le glissement de tâches est la pratique d'un acte en dehors de son champ légal de compétence (ex. un AS qui réalise une injection). Il est illégal et engage la responsabilité pénale et disciplinaire.",
    ref: "CSP – champ de compétences", diff: 2 },

  { ueId: "3.3", q: "La méthode SBAR sert à :",
    options: ["Calculer une posologie", "Structurer la communication entre professionnels, notamment en urgence", "Classer les dossiers patients", "Évaluer la douleur"], correct: 1,
    explication: "SBAR (Situation, Background/contexte, Assessment/évaluation, Recommandation), repris en français sous SAED, structure la transmission orale d'informations, en particulier lors d'un appel au médecin ou en urgence.",
    ref: "HAS – SAED/SBAR 2014", diff: 2 },

  { ueId: "3.3", q: "Quel acte un aide-soignant ne peut PAS réaliser ?",
    options: ["Aide à la toilette", "Recueil des constantes", "Distribution de médicaments injectables", "Aide à la prise des repas"], correct: 2,
    explication: "La distribution de médicaments injectables relève du rôle prescrit infirmier et ne peut être confiée à un AS. Les autres actes relèvent de la collaboration au rôle propre.",
    ref: "CSP art. R.4311-4 et R.4311-7", diff: 1 },

  { ueId: "3.3", q: "Les protocoles de coopération entre professionnels de santé sont issus de :",
    options: ["L'article 51 de la loi HPST (2009)", "Le décret de 1947", "La loi Kouchner de 2002", "Le règlement européen RGPD"], correct: 0,
    explication: "L'article 51 de la loi HPST du 21 juillet 2009 a instauré les protocoles de coopération, permettant des transferts d'activités entre professionnels de santé, aujourd'hui validés par la HAS.",
    ref: "Loi HPST 2009, art. 51", diff: 2 },

  { ueId: "3.3", q: "En cas de prescription qui paraît erronée ou dangereuse, l'infirmier doit :",
    options: ["L'exécuter sans la questionner car c'est un ordre médical", "Refuser et ne rien dire", "Alerter le prescripteur et tracer son alerte", "Modifier la dose lui-même"], correct: 2,
    explication: "L'IDE a un devoir d'alerte : face à une prescription douteuse, il doit en référer au prescripteur et tracer sa démarche. Il ne peut ni l'exécuter aveuglément ni la modifier seul.",
    ref: "Code de déontologie infirmier R.4312-42", diff: 2 },

  { ueId: "3.3", q: "Le rôle en collaboration sur protocole (R.4311-8) suppose :",
    options: ["Aucun cadre écrit", "Un protocole écrit, daté et signé par le médecin", "Une simple consigne orale", "L'accord du cadre de santé seul"], correct: 1,
    explication: "Le R.4311-8 permet à l'IDE d'appliquer un protocole de soins d'urgence à condition qu'il soit écrit, daté et signé par le médecin, et formalisé en amont. Cela encadre l'action en l'absence du médecin.",
    ref: "CSP art. R.4311-8", diff: 2 },

  { ueId: "3.3", q: "Quel mode d'organisation des soins favorise le plus la continuité et la relation soignant-soigné ?",
    options: ["Soins en série (par tâche)", "Soins intégraux (par secteur)", "Travail à la chaîne", "Rotation horaire des actes"], correct: 1,
    explication: "Les soins intégraux par secteur confient à un·e IDE la prise en charge globale d'un groupe de patients, ce qui favorise la continuité du suivi et la relation. Les soins en série fragmentent la prise en charge.",
    ref: "Organisation des soins infirmiers", diff: 2 },

  { ueId: "3.3", q: "La valeur juridique du dossier de soins implique que :",
    options: ["Seules les transmissions orales comptent", "Ce qui n'est pas écrit est réputé non fait", "Les écrits peuvent être effacés", "Seul le médecin y a accès"], correct: 1,
    explication: "Le dossier de soins est un document médico-légal. Le principe « ce qui n'est pas écrit est réputé non fait » impose une traçabilité datée, horodatée et signée de tous les soins réalisés.",
    ref: "Dossier de soins – valeur médico-légale", diff: 1 },

  { ueId: "3.3", q: "L'infirmier en pratique avancée (IPA) a été créé par :",
    options: ["Le décret n°2018-629 du 18 juillet 2018", "La loi Kouchner 2002", "Le décret de compétences 2004", "La loi de 1978"], correct: 0,
    explication: "Le statut d'infirmier en pratique avancée a été instauré par le décret n°2018-629 du 18 juillet 2018, permettant à l'IDE diplômé Master d'assurer un suivi élargi de patients.",
    ref: "Décret n°2018-629 du 18 juillet 2018", diff: 3 },

  { ueId: "3.3", q: "Dans le rôle prescrit, qui est responsable de l'indication de l'acte ?",
    options: ["L'infirmier", "Le médecin prescripteur", "Le cadre de santé", "L'aide-soignant"], correct: 1,
    explication: "Dans le rôle prescrit, la responsabilité de l'indication (le choix de l'acte) revient au médecin prescripteur. L'IDE reste responsable de la vérification de la prescription et de la bonne exécution technique de l'acte.",
    ref: "CSP art. R.4311-7", diff: 2 },

  { ueId: "3.3", q: "La pose d'une sonde vésicale chez une femme par l'IDE relève :",
    options: ["Du rôle propre", "Du rôle strictement prescrit dans tous les cas", "Du rôle de l'aide-soignant", "Du rôle médical exclusif"], correct: 0,
    explication: "La pose et la surveillance d'une sonde vésicale chez la femme figure dans le rôle propre infirmier (R.4311-5). Chez l'homme, elle relève du rôle sur prescription.",
    ref: "CSP art. R.4311-5", diff: 3 },

  { ueId: "3.3", q: "La cible, dans une transmission ciblée, correspond à :",
    options: ["La dose de médicament", "Un énoncé concis d'une préoccupation ou d'un problème du patient", "Le nom du médecin", "L'heure de la relève"], correct: 1,
    explication: "La cible est un mot ou une expression brève désignant une préoccupation, un problème ou un changement d'état du patient (ex. « douleur », « angoisse »), à laquelle on rattache les données, actions et résultats.",
    ref: "HAS – Transmissions ciblées", diff: 2 },

  { ueId: "3.3", q: "Quelle affirmation sur la délégation à un aide-soignant est exacte ?",
    options: ["L'IDE délègue un acte du rôle prescrit", "L'IDE confie un soin du rôle propre selon les compétences de l'AS", "L'AS choisit seul les soins à réaliser", "La délégation décharge l'IDE de toute responsabilité"], correct: 1,
    explication: "L'IDE confie à l'AS des soins relevant du rôle propre, en tenant compte de sa formation et de ses compétences. L'IDE conserve la responsabilité de l'organisation et de l'évaluation : la délégation ne le décharge pas.",
    ref: "CSP art. R.4311-4", diff: 2 },

  { ueId: "3.3", q: "L'administration d'un médicament par voie orale par l'IDE relève :",
    options: ["Du rôle propre autonome", "Du rôle sur prescription médicale", "De la décision du patient", "Du rôle de l'aide-soignant"], correct: 1,
    explication: "L'administration de médicaments, quelle que soit la voie, relève du rôle sur prescription médicale (R.4311-7). L'IDE applique la prescription après vérification (bon patient, bon médicament, bonne dose, bonne voie, bon moment).",
    ref: "CSP art. R.4311-7", diff: 1 },

  { ueId: "3.3", q: "La règle des « 5 B » de l'administration médicamenteuse comprend notamment :",
    options: ["Bon patient, bon médicament, bonne dose, bonne voie, bon moment", "Bon médecin, bon dossier, bon horaire, bon couloir, bon lit", "Bonne humeur et bon repas", "Bon stock, bon prix, bon fournisseur, bon emballage, bonne date"], correct: 0,
    explication: "La règle des 5 B sécurise l'administration : Bon patient, Bon médicament, Bonne dose, Bonne voie, Bon moment. Elle prévient les erreurs médicamenteuses, événements indésirables fréquents.",
    ref: "Sécurité de l'administration médicamenteuse", diff: 1 },

  { ueId: "3.3", q: "En situation d'arrêt cardio-respiratoire avant l'arrivée du médecin, l'IDE peut :",
    options: ["Ne rien faire sans prescription", "Mettre en œuvre les gestes de RCP et protocoles d'urgence", "Attendre le cadre de santé", "Prescrire lui-même un traitement définitif"], correct: 1,
    explication: "L'IDE est habilité à entreprendre les gestes de réanimation et à appliquer les protocoles d'urgence écrits, datés et signés en attendant le médecin (R.4311-8 et R.4311-9). L'inaction serait une non-assistance.",
    ref: "CSP art. R.4311-8 et R.4311-14", diff: 2 },
];

export const flashcards = [
  { ueId: "3.3", recto: "Quel article définit le rôle propre infirmier ?", verso: "L'article R.4311-5 du Code de la santé publique." },
  { ueId: "3.3", recto: "Quel article définit les actes sur prescription médicale ?", verso: "L'article R.4311-7 du Code de la santé publique." },
  { ueId: "3.3", recto: "Que signifie DAR dans les transmissions ciblées ?", verso: "Données, Actions, Résultats (rattachés à une cible)." },
  { ueId: "3.3", recto: "Sous la responsabilité de qui exerce l'aide-soignant ?", verso: "Sous la responsabilité de l'infirmier (art. R.4311-4)." },
  { ueId: "3.3", recto: "Qu'est-ce qu'un glissement de tâches ?", verso: "La réalisation d'un acte hors de son champ légal de compétence : illégal et dangereux." },
  { ueId: "3.3", recto: "Que structure la méthode SBAR / SAED ?", verso: "La communication orale entre professionnels : Situation, Background, Assessment, Recommandation." },
  { ueId: "3.3", recto: "Quelles sont les 4 caractéristiques d'une prescription valide ?", verso: "Écrite, qualitative, quantitative, datée et signée." },
  { ueId: "3.3", recto: "De quelle loi sont issus les protocoles de coopération ?", verso: "De l'article 51 de la loi HPST du 21 juillet 2009." },
  { ueId: "3.3", recto: "Quel principe rappelle l'importance de la traçabilité ?", verso: "« Ce qui n'est pas écrit est réputé non fait. »" },
  { ueId: "3.3", recto: "Citez les 5 B de l'administration médicamenteuse.", verso: "Bon patient, bon médicament, bonne dose, bonne voie, bon moment." },
  { ueId: "3.3", recto: "Quel décret a créé l'infirmier en pratique avancée (IPA) ?", verso: "Le décret n°2018-629 du 18 juillet 2018." },
  { ueId: "3.3", recto: "Quel mode d'organisation favorise la continuité des soins ?", verso: "Les soins intégraux (prise en charge globale d'un secteur de patients)." },
  { ueId: "3.3", recto: "Dans le rôle prescrit, qui est responsable de l'indication de l'acte ?", verso: "Le médecin prescripteur ; l'IDE reste responsable de l'exécution et de la vérification." },
  { ueId: "3.3", recto: "Que doit faire l'IDE face à une prescription douteuse ?", verso: "Alerter le prescripteur et tracer son alerte ; ne pas l'exécuter aveuglément ni la modifier seul." },
  { ueId: "3.3", recto: "Qu'est-ce qu'une cible en transmission ciblée ?", verso: "Un énoncé concis d'une préoccupation ou d'un problème du patient." },
];
