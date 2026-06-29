export const cas = [
  {
    id: "ue_2_9_exam_sein_chimio",
    ueId: "2.9",
    titre: "Analyse de situation : cancer du sein sous chimiothérapie",
    niveau: "Examen",
    contexte: "Hôpital de jour d'oncologie médicale. Vous êtes l'IDE référente du parcours, vous accueillez la patiente pour sa cure.",
    situation: "Mme Caron, 54 ans, est suivie pour un adénocarcinome canalaire infiltrant du sein gauche (T2N1M0), traité par chirurgie conservatrice puis chimiothérapie adjuvante (protocole FEC100 puis taxanes). Elle vient ce jour pour sa 3ᵉ cure. Antécédents : HTA traitée, anxiété. Elle porte une chambre implantable (PAC) posée il y a 6 semaines. À l'arrivée : T° 37,9 °C, FC 92/min, PA 138/84 mmHg, SpO2 98 %, douleur EVA 3/10. Elle vous signale une fatigue intense, des aphtes buccaux douloureux apparus depuis la cure précédente et des nausées persistantes. Le bilan biologique du jour montre : leucocytes 2,1 G/L, PNN 0,9 G/L, Hb 9,8 g/dL, plaquettes 95 G/L.",
    questions: [
      {
        q: "Analysez le bilan biologique de Mme Caron. Quel risque majeur identifiez-vous et quelles précautions immédiates en découlent ?",
        type: "open",
        corrige: "Le bilan montre une aplasie médullaire post-chimiothérapie : neutropénie (PNN 0,9 G/L < 1,5, voire fébrile car T° 37,9 °C à surveiller), anémie (Hb 9,8 g/dL) et thrombopénie (95 G/L). Le risque majeur est le risque infectieux par neutropénie (risque vital de neutropénie fébrile / sepsis). Précautions : isolement protecteur, renforcement de l'hygiène des mains, surveillance pluriquotidienne de la température (toute T° ≥ 38 °C ou 38,3 °C ponctuelle = urgence et avis médical immédiat), éviction des contacts contagieux, alimentation contrôlée, pas de geste invasif inutile. La cure pourra être reportée ou la dose réduite sur décision médicale au vu de l'hémogramme. Surveiller aussi signes d'anémie (asthénie, dyspnée, pâleur) et de saignement (thrombopénie : pétéchies, gingivorragies)."
      },
      {
        q: "Une neutropénie est définie par un taux de polynucléaires neutrophiles inférieur à :",
        type: "qcm",
        options: ["0,5 G/L", "1,0 G/L", "1,5 G/L", "4,0 G/L"],
        correct: 2,
        corrige: "La neutropénie est définie par un taux de PNN < 1,5 G/L. Elle est sévère en dessous de 0,5 G/L (agranulocytose), seuil de risque infectieux majeur. Une neutropénie fébrile (T° ≥ 38,3 °C ou ≥ 38 °C deux fois) est une urgence thérapeutique."
      },
      {
        q: "La patiente présente des aphtes buccaux douloureux. Décrivez la conduite infirmière face à cette mucite et son retentissement.",
        type: "open",
        corrige: "Il s'agit d'une mucite (stomatite) chimio-induite, effet toxique fréquent. Conduite : évaluer le grade (douleur EVA, étendue, retentissement sur l'alimentation et l'hydratation), réaliser des soins de bouche pluriquotidiens (bains de bouche au bicarbonate 1,4 %, éviter alcool et antiseptiques agressifs), brossage doux, antalgiques adaptés (palier 2 voire morphiniques si douleur intense), bains de bouche anesthésiants/antifongiques sur prescription, surveiller surinfection (candidose, herpès), adapter l'alimentation (froide, mixée, non acide, non épicée), surveiller l'état nutritionnel et l'hydratation. Éducation : hygiène bucco-dentaire, hydratation, prévention dès le début des cures. Tracer le grade et l'évolution."
      },
      {
        q: "Quelle prophylaxie est la plus appropriée pour prévenir les nausées et vomissements chimio-induits aigus ?",
        type: "qcm",
        options: ["Antalgiques de palier 1 systématiques", "Sétrons (antagonistes 5-HT3) associés à une corticothérapie avant la cure", "Antibiothérapie probabiliste", "Anxiolytiques seuls à la demande"],
        correct: 1,
        corrige: "La prévention des nausées-vomissements aigus repose sur l'administration, avant la chimiothérapie émétisante, d'antiémétiques type sétrons (ondansétron) associés à une corticothérapie (dexaméthasone), parfois complétés par un antagoniste NK1 (aprépitant) pour les protocoles hautement émétisants. Le traitement est anticipé, pas seulement curatif."
      },
      {
        q: "Citez les éléments de surveillance et les précautions spécifiques liés à la chambre implantable (PAC) lors de l'administration de la chimiothérapie.",
        type: "open",
        corrige: "Asepsie chirurgicale lors de l'accès (aiguille de Huber, désinfection en 4 temps, masque), vérification du bon reflux veineux avant injection, rinçage pulsé au sérum physiologique, surveillance du point de ponction (douleur, rougeur, œdème, écoulement = signe d'infection ou d'extravasation). Surveillance d'une éventuelle extravasation des cytotoxiques (douleur, brûlure, tuméfaction = arrêt immédiat de la perfusion, protocole d'extravasation). Surveillance du débit, absence de résistance. Traçabilité de la pose, rinçage et héparinisation de fin selon protocole, ablation de l'aiguille en fin de cure. Surveiller le risque thrombotique et infectieux sur cathéter central."
      }
    ],
    demarche: "Évaluer la tolérance avant la cure (clinique + hémogramme), repérer la toxicité hématologique (aplasie : neutropénie fébrile = urgence) et les toxicités muqueuses/digestives. Mettre en place isolement protecteur, prévention des nausées, soins de bouche, gestion de l'asthénie, surveillance de la PAC. Coordonner avec le médecin pour décision de cure (report/adaptation de dose) et assurer soins de support et éducation thérapeutique."
  },
  {
    id: "ue_2_9_exam_poumon_palliatif",
    ueId: "2.9",
    titre: "Analyse de situation : soins de support en phase palliative (cancer pulmonaire)",
    niveau: "Examen",
    contexte: "Service d'oncologie / unité de soins palliatifs. Vous êtes l'IDE de jour en charge du patient et de sa famille.",
    situation: "M. Lemaire, 68 ans, est atteint d'un cancer broncho-pulmonaire métastatique (métastases osseuses et hépatiques), en phase palliative. Les traitements spécifiques ont été arrêtés, l'objectif est le confort. Antécédents : BPCO, tabagisme sevré. Il présente une dyspnée de repos, des douleurs osseuses rachidiennes EVA 6/10 malgré un traitement par morphine LP, une anorexie et une grande fatigue. Constantes : FR 26/min, SpO2 91 % en air ambiant, FC 96/min, PA 112/70 mmHg. La famille, présente et angoissée, vous demande « si on ne peut pas faire plus ». Le patient exprime de l'angoisse et le souhait de « ne pas souffrir ».",
    questions: [
      {
        q: "La douleur reste à EVA 6/10 sous morphine LP. Quelle est votre démarche infirmière concernant cette douleur ?",
        type: "open",
        corrige: "Réévaluer la douleur de façon précise (intensité EVA/EN, type nociceptif osseux et/ou neuropathique, facteurs déclenchants, accès douloureux paroxystiques). Tracer et transmettre au médecin la douleur insuffisamment contrôlée. Administrer les interdoses (bolus) de morphine à libération immédiate prescrites pour les accès douloureux et évaluer leur efficacité, anticiper les soins douloureux par une interdose préventive. Proposer une réévaluation du traitement de fond (adaptation de dose, ajout de co-antalgiques : anti-inflammatoires, corticoïdes, traitement spécifique des douleurs osseuses, antalgiques des douleurs neuropathiques). Surveiller les effets indésirables des opioïdes (constipation à prévenir systématiquement, somnolence, nausées, dépression respiratoire). Mesures non médicamenteuses : installation confortable, relaxation, présence. Objectif palliatif : confort et soulagement, titration sans surdosage."
      },
      {
        q: "Parmi ces effets indésirables des opioïdes, lequel doit être prévenu de façon SYSTÉMATIQUE dès l'instauration ?",
        type: "qcm",
        options: ["La constipation", "La diarrhée", "L'hypertension artérielle", "L'hyperglycémie"],
        correct: 0,
        corrige: "La constipation est un effet quasi constant des opioïdes qui ne s'épuise pas dans le temps : elle doit être prévenue systématiquement par un traitement laxatif associé et des règles hygiéno-diététiques. Les autres effets (nausées, somnolence) sont souvent transitoires ; la dépression respiratoire est rare aux doses titrées."
      },
      {
        q: "Face à la dyspnée et à l'angoisse de M. Lemaire en phase palliative, quelles actions de soins de support mettez-vous en œuvre ?",
        type: "open",
        corrige: "Installer le patient en position semi-assise, aérer la pièce, ventilateur/air frais sur le visage, limiter les efforts et regrouper les soins. Oxygénothérapie sur prescription si hypoxie symptomatique (en tenant compte de la BPCO). Administrer les traitements prescrits : opioïdes (efficaces sur la sensation de dyspnée) et anxiolytiques pour la composante anxieuse. Évaluer et soulager l'angoisse par la présence, l'écoute, la réassurance, des techniques de relaxation. Surveiller la fréquence respiratoire, la SpO2, le confort, le retentissement nocturne. Approche relationnelle, ne pas laisser le patient seul lors des épisodes, associer l'équipe pluridisciplinaire (psychologue). Tracer l'intensité de la dyspnée et l'efficacité des mesures."
      },
      {
        q: "La famille demande « si on ne peut pas faire plus ». Quelle est la posture et le rôle infirmiers les plus adaptés ?",
        type: "qcm",
        options: ["Rassurer en promettant une guérison prochaine", "Écouter, reformuler, informer dans le cadre fixé par l'équipe et orienter vers le médecin pour le projet de soins", "Éviter le sujet pour ne pas inquiéter", "Décider seul d'augmenter fortement les traitements"],
        correct: 1,
        corrige: "Le rôle infirmier est d'accueillir la demande, d'écouter activement, de reformuler les inquiétudes, d'apporter une information loyale et adaptée dans le cadre du projet de soins défini en équipe, et d'orienter vers le médecin pour les décisions et les explications relevant de sa compétence. Cela s'inscrit dans l'accompagnement de l'entourage, le soutien et la pluridisciplinarité, sans fausse réassurance ni décision isolée."
      },
      {
        q: "Citez les principes des soins de support en phase palliative que vous appliquez pour M. Lemaire.",
        type: "open",
        corrige: "Soins de support = ensemble des soins assurant la meilleure qualité de vie possible. Principes : prise en charge globale (physique, psychologique, sociale, spirituelle), priorité au confort et au soulagement des symptômes (douleur, dyspnée, anorexie, asthénie, soins de bouche, prévention d'escarre, soins de nursing et de confort), respect de la dignité et de l'autonomie du patient, écoute de ses souhaits et de ses directives, accompagnement de l'entourage, travail en équipe pluridisciplinaire (médecin, psychologue, assistante sociale, bénévoles), continuité des soins, traçabilité, et démarche éthique (non-abandon, non-acharnement, collégialité)."
      }
    ],
    demarche: "Centrer les soins sur le confort : réévaluation et soulagement de la douleur (titration, interdoses, co-antalgiques, prévention de la constipation), prise en charge de la dyspnée et de l'angoisse, soins de nursing et de confort, soutien psychologique du patient et de la famille. Travailler en pluridisciplinarité, respecter les souhaits du patient, transmettre et tracer, dans une démarche éthique d'accompagnement de fin de vie."
  },
  {
    id: "ue_2_9_exam_colon_annonce",
    ueId: "2.9",
    titre: "Analyse de situation : annonce et parcours d'un cancer colorectal",
    niveau: "Examen",
    contexte: "Service de chirurgie digestive. Vous êtes l'IDE qui accompagne le patient après la consultation d'annonce.",
    situation: "M. Faure, 61 ans, vient d'apprendre lors de la consultation d'annonce qu'il est atteint d'un adénocarcinome du côlon sigmoïde, pour lequel une intervention chirurgicale avec possible colostomie est programmée. Antécédents : diabète de type 2, tabagisme. À l'issue de la consultation, il est sidéré, parle peu, puis vous confie : « De toute façon, c'est fini pour moi, à quoi bon me faire opérer. » Il est inquiet à l'idée d'avoir une « poche ». Constantes stables : T° 36,8 °C, FC 78/min, PA 132/80 mmHg.",
    questions: [
      {
        q: "Décrivez le dispositif d'annonce en cancérologie et le rôle infirmier dans le temps d'accompagnement soignant (TAS).",
        type: "open",
        corrige: "Le dispositif d'annonce (mesure du Plan cancer) comprend plusieurs temps : un temps médical d'annonce du diagnostic et de la proposition thérapeutique (issue de la réunion de concertation pluridisciplinaire / RCP, avec remise d'un programme personnalisé de soins / PPS) ; un temps d'accompagnement soignant (consultation infirmière) ; un accès aux soins de support ; une articulation avec la médecine de ville. Rôle IDE dans le TAS : reprendre et reformuler l'information médicale, vérifier la compréhension, écouter, repérer les besoins et la détresse, informer sur le parcours et les soins de support, orienter vers les autres professionnels (psychologue, assistante sociale, diététicien, stomathérapeute). C'est un temps d'écoute, de soutien et de personnalisation du parcours."
      },
      {
        q: "Face à la phrase « c'est fini pour moi, à quoi bon me faire opérer », quelle est l'attitude relationnelle la plus adaptée ?",
        type: "qcm",
        options: ["Minimiser : « Mais non, tout va bien se passer »", "Adopter une écoute active, accueillir l'émotion, reformuler et explorer ce qu'il ressent sans le juger", "Changer de sujet pour le distraire", "Lui dire qu'il n'a pas le choix"],
        correct: 1,
        corrige: "L'attitude adaptée relève de la relation d'aide : écoute active, accueil de l'émotion et de la sidération, reformulation, questions ouvertes pour explorer le vécu et les représentations, sans jugement ni fausse réassurance. Cela permet d'évaluer une éventuelle détresse psychologique (voire un risque dépressif/suicidaire à transmettre) et d'orienter vers un soutien psychologique."
      },
      {
        q: "M. Faure est inquiet à l'idée d'une colostomie. Quels sont les axes d'information et d'éducation infirmiers pré et post-opératoires concernant la stomie ?",
        type: "open",
        corrige: "En préopératoire : information sur la stomie (définition, raison, caractère provisoire ou définitif selon le cas), repérage/marquage du site de stomie, présentation du matériel (poches, supports), réponse aux représentations et craintes (image corporelle, odeurs, vie sociale et intime), orientation vers l'infirmier(e) stomathérapeute, éventuellement rencontre avec une association de stomisés. En postopératoire : surveillance de la stomie (coloration rose/rouge = bonne vascularisation, œdème initial, reprise du transit, aspect des selles), surveillance des complications (ischémie, nécrose, rétraction, prolapsus, irritation cutanée péristomiale), éducation à l'autonomie pour l'appareillage et les soins, soutien psychologique d'acceptation, conseils diététiques. Tracer et favoriser l'autonomie progressive."
      },
      {
        q: "M. Faure est diabétique et tabagique et doit être opéré. Quels éléments de surveillance et de préparation infirmière en lien avec ces comorbidités identifiez-vous ?",
        type: "open",
        corrige: "Liés au diabète : surveillance glycémique rapprochée en péri-opératoire (risque de déséquilibre lié au jeûne, au stress et à la chirurgie), risque infectieux et de retard de cicatrisation majoré, adaptation du traitement antidiabétique selon protocole et avis médical, surveillance de la plaie. Liés au tabac : majoration du risque de complications respiratoires et de retard de cicatrisation, intérêt d'un sevrage / proposition d'aide au sevrage avant l'intervention, surveillance respiratoire post-opératoire (kinésithérapie respiratoire). Préparation générale : bilan préopératoire, jeûne, prévention thromboembolique, information, vérification du consentement, optimisation nutritionnelle. Travail pluridisciplinaire."
      },
      {
        q: "La réunion de concertation pluridisciplinaire (RCP) en cancérologie a pour but principal de :",
        type: "qcm",
        options: ["Annoncer seul le diagnostic au patient", "Définir collégialement la stratégie thérapeutique adaptée à chaque patient", "Remplacer la consultation infirmière d'annonce", "Décider de l'arrêt de tout traitement"],
        correct: 1,
        corrige: "La RCP réunit plusieurs spécialistes (chirurgien, oncologue, radiothérapeute, radiologue, anatomopathologiste...) pour définir collégialement, selon les référentiels, la stratégie thérapeutique personnalisée. Sa décision est tracée et sert de base au programme personnalisé de soins (PPS) présenté lors de l'annonce."
      }
    ],
    demarche: "Assurer le temps d'accompagnement soignant après l'annonce : reformuler, écouter, repérer la détresse psychologique et orienter (psychologue). Informer et éduquer sur le parcours et la stomie (stomathérapeute), préparer la chirurgie en intégrant les comorbidités (diabète, tabac), coordonner les soins de support et le travail pluridisciplinaire. Tracer, soutenir et favoriser l'adhésion du patient au projet de soins."
  }
];
