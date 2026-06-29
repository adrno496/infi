export const cas = [
  {
    id: "ue_4_4_exam_anticoag_hbpm",
    ueId: "4.4",
    titre: "Anticoagulation par HBPM et calcul de dose",
    niveau: "Examen",
    contexte: "Service de médecine vasculaire. Vous êtes l'IDE référent(e) du patient et préparez le traitement du soir sur prescription médicale.",
    situation: "M. Garnier, 78 ans, 62 kg, est hospitalisé pour une thrombose veineuse profonde (TVP) du membre inférieur droit confirmée à l'écho-doppler. Antécédents : HTA, insuffisance rénale modérée (clairance de la créatinine estimée à 48 mL/min selon Cockcroft). Constantes : PA 138/82 mmHg, FC 78/min, SpO2 97 % en air ambiant, température 37,1 °C. Le médecin prescrit de l'énoxaparine (Lovenox) en traitement curatif à la posologie de 100 UI/kg toutes les 12 heures, en sous-cutané. Vous disposait de seringues préremplies. Une NFS-plaquettes a été prélevée avant l'instauration.",
    questions: [
      {
        q: "Calculez la dose d'énoxaparine en UI à administrer pour une injection. Détaillez votre raisonnement.",
        type: "open",
        corrige: "Posologie curative = 100 UI/kg par injection. Poids = 62 kg. Dose par injection = 100 UI x 62 = 6 200 UI toutes les 12 heures. En équivalence courante, l'énoxaparine curative s'exprime aussi à 0,01 mL/kg soit 0,62 mL par injection (100 mg/mL). Toute réponse précise le calcul (dose unitaire x poids) et la fréquence (x2/jour en curatif)."
      },
      {
        q: "Quelle surveillance biologique spécifique l'HBPM impose-t-elle, et à quel rythme ?",
        type: "open",
        corrige: "Surveillance de la numération plaquettaire (NFS-plaquettes) pour dépister une thrombopénie induite par l'héparine (TIH) : taux de base avant traitement puis 2 fois par semaine pendant le premier mois (recommandation classique), surtout en contexte chirurgical/traumatique. Surveillance de la fonction rénale (créatininémie, clairance) car l'élimination est rénale et le risque d'accumulation augmente l'hémorragie. L'activité anti-Xa peut être contrôlée en cas d'insuffisance rénale, de poids extrême ou de risque hémorragique. Surveillance clinique : signes hémorragiques (hématomes, saignements, hématurie, méléna), points d'injection."
      },
      {
        q: "Concernant la technique d'injection sous-cutanée de l'HBPM, quelle affirmation est exacte ?",
        type: "qcm",
        options: [
          "Il faut purger la bulle d'air de la seringue préremplie avant l'injection",
          "On injecte dans la ceinture abdominale antéro-latérale, pli cutané maintenu, sans masser après",
          "On aspire toujours avant d'injecter pour vérifier le retour veineux",
          "On masse vigoureusement le point d'injection pour favoriser la diffusion"
        ],
        correct: 1,
        corrige: "L'HBPM se fait dans le tissu sous-cutané de la ceinture abdominale antéro-latérale, en maintenant un pli cutané perpendiculaire, aiguille à 90°. On NE purge PAS la bulle d'air (elle assure l'injection complète de la dose et limite les ecchymoses), on N'aspire PAS et on NE masse PAS après (le massage favorise les hématomes). On alterne les sites."
      },
      {
        q: "La clairance du patient est à 48 mL/min. En quoi cela influence-t-il votre vigilance ?",
        type: "open",
        corrige: "L'énoxaparine est éliminée par voie rénale : une insuffisance rénale (clairance < 30 mL/min surtout) expose à une accumulation et à un surdosage hémorragique. À 48 mL/min (insuffisance modérée), le traitement curatif reste possible mais impose une surveillance renforcée (signes de saignement, anti-Xa si besoin, fonction rénale itérative). En cas de clairance < 30 mL/min, une adaptation de dose ou un relais par HNF est discutée. Vigilance accrue chez ce patient âgé."
      },
      {
        q: "Quel signe ferait suspecter une thrombopénie induite par l'héparine (TIH de type II) ?",
        type: "qcm",
        options: [
          "Une augmentation isolée des plaquettes",
          "Une chute des plaquettes (> 40-50 %) et/ou des thromboses paradoxales entre J5 et J10",
          "Une simple ecchymose au point d'injection",
          "Une hyperglycémie sous traitement"
        ],
        correct: 1,
        corrige: "La TIH de type II est immuno-allergique : chute significative des plaquettes (souvent > 40-50 % ou < 100 G/L) survenant typiquement entre J5 et J10, paradoxalement associée à un risque thrombotique (artériel/veineux). Elle impose l'arrêt immédiat de toute héparine, l'alerte médicale et un relais par anticoagulant non héparinique."
      }
    ],
    demarche: "Vérifier la prescription (5 B : bon patient, bon médicament, bonne dose, bonne voie, bon moment), calculer la dose au poids (6 200 UI = 0,62 mL), respecter la technique SC (pli, pas de purge, pas de massage, rotation des sites), surveiller plaquettes/fonction rénale et signes hémorragiques, tracer l'administration et éduquer le patient (signes de saignement à signaler)."
  },
  {
    id: "ue_4_4_exam_perfusion_kcl",
    ueId: "4.4",
    titre: "Réhydratation IV et supplémentation potassique",
    niveau: "Examen",
    contexte: "Service de gastro-entérologie. Vous prenez en charge la perfusion d'un patient déshydraté et hypokaliémique.",
    situation: "Mme Lopez, 69 ans, 70 kg, est hospitalisée pour des vomissements et diarrhées profuses depuis 4 jours. Elle présente une déshydratation et une asthénie marquée. Biologie : kaliémie à 2,9 mmol/L (N : 3,5-5,0), natrémie 134 mmol/L. ECG : ondes T aplaties. Constantes : PA 104/64 mmHg, FC 96/min, FR 18/min, diurèse conservée. Prescription : NaCl 0,9 % 1 000 mL sur 8 heures avec adjonction de 3 g de chlorure de potassium (KCl) dans la poche, en perfusion sur voie veineuse périphérique.",
    questions: [
      {
        q: "Calculez le débit de la perfusion en mL/h puis en gouttes/min (1 mL = 20 gouttes).",
        type: "open",
        corrige: "Débit horaire = volume / durée = 1 000 mL / 8 h = 125 mL/h. Débit en gouttes/min = (volume en mL x nombre de gouttes par mL) / (durée en minutes) = (1 000 x 20) / (8 x 60) = 20 000 / 480 = 41,7 soit environ 42 gouttes/min. Réponse attendue : 125 mL/h et environ 42 gouttes/min."
      },
      {
        q: "Quelles précautions impératives prenez-vous pour l'administration du KCl ?",
        type: "open",
        corrige: "Le KCl ne s'administre JAMAIS en IV directe (risque d'arrêt cardiaque) : toujours dilué dans la poche et perfusé lentement. Vérifier la concentration et la vitesse (en règle ne pas dépasser environ 1 g/h sur voie périphérique, soit ne pas dépasser des débits trop rapides ; au-delà, voie centrale et scope). Homogénéiser la poche après ajout. Surveiller le point de ponction (le KCl est veinotoxique, risque de douleur/veinite). Scope ECG si concentration élevée. Contrôler la kaliémie de suivi et la diurèse (ne pas perfuser si oligo-anurie sans avis). Étiqueter la poche."
      },
      {
        q: "Parmi ces signes, lequel évoque une HYPERkaliémie (risque d'un surdosage en KCl) ?",
        type: "qcm",
        options: [
          "Ondes T aplaties et apparition d'ondes U",
          "Ondes T amples et pointues, élargissement du QRS",
          "Sus-décalage du segment ST",
          "Allongement isolé de l'intervalle PR sans autre anomalie"
        ],
        correct: 1,
        corrige: "L'hyperkaliémie se traduit à l'ECG par des ondes T amples, pointues et symétriques, puis un élargissement du QRS et un risque de troubles du rythme graves. À l'inverse, l'hypokaliémie donne des ondes T aplaties et des ondes U. Tout surdosage potassique impose une surveillance scopée et l'alerte médicale."
      },
      {
        q: "Quelles surveillances cliniques et biologiques mettez-vous en place durant la réhydratation ?",
        type: "open",
        corrige: "Surveillance hémodynamique : PA, FC, FR, signes de surcharge (dyspnée, crépitants, œdèmes) car réhydratation chez une personne âgée. Surveillance de la diurèse (reprise, quantification, bilan entrées/sorties). Surveillance de la kaliémie et natrémie de contrôle. Surveillance de l'état de conscience et de l'hydratation (pli cutané, muqueuses, soif). Surveillance ECG/scope si hypokaliémie sévère ou KCl rapide. Surveillance du point de perfusion (douleur, veinite, extravasation). Traçabilité."
      },
      {
        q: "Vrai/Faux justifié : il est sans danger de pousser le KCl pour accélérer la correction si la kaliémie est très basse.",
        type: "qcm",
        options: [
          "Vrai, l'urgence justifie une correction rapide en IV directe",
          "Faux, une correction trop rapide ou en IV directe expose à un arrêt cardiaque",
          "Vrai, à condition de surveiller la PA uniquement",
          "Faux, mais seulement chez l'enfant"
        ],
        correct: 1,
        corrige: "Faux. La correction de l'hypokaliémie doit être progressive et toujours diluée ; une administration trop rapide ou en IV directe provoque une hyperkaliémie brutale pouvant entraîner des troubles du rythme et un arrêt cardiaque. On respecte les débits maximaux, la voie adaptée (centrale + scope si fortes doses) et les contrôles biologiques."
      }
    ],
    demarche: "Vérifier prescription et identité, calculer le débit (125 mL/h ≈ 42 gttes/min), diluer et homogénéiser le KCl (jamais en IVD), régler et surveiller le débit, scoper si besoin, surveiller diurèse/kaliémie/signes de surcharge et le point de ponction, tracer et alerter en cas d'anomalie ECG ou clinique."
  },
  {
    id: "ue_4_4_exam_antalgie_morphine",
    ueId: "4.4",
    titre: "Titration morphinique et surveillance post-opératoire",
    niveau: "Examen",
    contexte: "Service de chirurgie orthopédique. Vous gérez l'analgésie d'un patient algique en post-opératoire immédiat.",
    situation: "M. Faure, 54 ans, 80 kg, est à H+3 d'une prothèse totale de hanche. Il évalue sa douleur à EVA 8/10 malgré le paracétamol systématique. Le médecin prescrit une titration de morphine IV : 2 mg toutes les 5 minutes jusqu'à soulagement (EVA < 4), sans dépasser un objectif de sécurité, puis relais par PCA morphine. Vous disposez d'une ampoule de morphine de 10 mg/1 mL à diluer dans 10 mL de NaCl 0,9 %. Constantes initiales : PA 132/78 mmHg, FC 84/min, FR 16/min, SpO2 98 %, score de Ramsay 2 (patient coopérant, éveillé).",
    questions: [
      {
        q: "Après dilution de l'ampoule (10 mg dans 10 mL au total), quel volume prélevez-vous pour administrer un bolus de 2 mg ?",
        type: "open",
        corrige: "Concentration après dilution = 10 mg / 10 mL = 1 mg/mL. Pour 2 mg : volume = dose / concentration = 2 mg / 1 mg par mL = 2 mL. Chaque bolus de titration correspond donc à 2 mL de la solution diluée à 1 mg/mL."
      },
      {
        q: "Quels paramètres surveillez-vous entre chaque bolus et pourquoi ?",
        type: "open",
        corrige: "Surveillance de l'efficacité : EVA/EN à chaque réévaluation (objectif < 4). Surveillance de la tolérance et des effets indésirables de la morphine : fréquence respiratoire (risque de dépression respiratoire : FR < 10 = alerte), SpO2, niveau de sédation (score de sédation/Ramsay : une sédation excessive précède la dépression respiratoire), état de conscience, PA et FC, signes de surdosage (myosis, somnolence). Disponibilité de la naloxone (antidote) et du matériel de ventilation. Surveiller nausées/vomissements, rétention urinaire, prurit, transit (constipation)."
      },
      {
        q: "Quel signe doit faire INTERROMPRE la titration et alerter immédiatement ?",
        type: "qcm",
        options: [
          "EVA qui passe de 8 à 5",
          "FR < 10/min et/ou sédation excessive (patient difficilement réveillable)",
          "Une légère sécheresse buccale",
          "Une PA à 130/80 mmHg"
        ],
        correct: 1,
        corrige: "Une fréquence respiratoire inférieure à 10/min et/ou une sédation excessive (somnolence, patient difficile à réveiller) signent un surdosage morphinique et un risque de dépression respiratoire. On interrompt la titration, on stimule et oxygène le patient, on alerte le médecin et on prépare la naloxone. Le score de sédation est un indicateur précoce essentiel."
      },
      {
        q: "Citez les principaux effets indésirables de la morphine à surveiller et à prévenir lors du relais par PCA.",
        type: "open",
        corrige: "Dépression respiratoire (le plus grave) avec sédation, nausées/vomissements (prévoir antiémétique), constipation (prévoir laxatif, surveiller le transit), rétention urinaire, prurit, myosis, somnolence/confusion (surtout sujet âgé). Avec la PCA : vérifier le réglage (bolus, période réfractaire, dose maximale), s'assurer que seul le patient actionne la pompe (pas l'entourage), éduquer le patient, surveiller EVA + FR + sédation régulièrement et tracer."
      },
      {
        q: "Quel est l'antidote de la morphine et quelle en est l'indication ?",
        type: "qcm",
        options: [
          "Le flumazénil, en cas de douleur persistante",
          "La naloxone, en cas de dépression respiratoire / surdosage opioïde",
          "La vitamine K, en cas de saignement",
          "Le glucagon, en cas de bradycardie"
        ],
        correct: 1,
        corrige: "L'antidote des opioïdes est la naloxone (Narcan), indiquée en cas de dépression respiratoire ou de surdosage morphinique (FR effondrée, sédation profonde, myosis). Elle doit être disponible à proximité lors de toute titration/PCA morphinique. Le flumazénil est l'antidote des benzodiazépines, la vitamine K celui des AVK."
      }
    ],
    demarche: "Diluer la morphine (1 mg/mL), administrer les bolus de 2 mg (2 mL) toutes les 5 min en réévaluant l'EVA, surveiller FR/SpO2/sédation/conscience entre chaque bolus, interrompre et alerter si FR < 10 ou sédation excessive, garder naloxone et matériel d'oxygénation prêts, assurer le relais PCA avec éducation et surveillance, prévenir les effets indésirables et tracer."
  },
  {
    id: "ue_4_4_exam_atb_dilution",
    ueId: "4.4",
    titre: "Antibiothérapie IV : dilution, débit et surveillance",
    niveau: "Examen",
    contexte: "Service de maladies infectieuses. Vous préparez et administrez une antibiothérapie probabiliste sur prescription.",
    situation: "Mme Petit, 60 ans, 65 kg, est hospitalisée pour une pyélonéphrite aiguë fébrile (39,2 °C, frissons). Elle n'a pas d'allergie connue. Prescription : ceftriaxone 2 g en IV lente sur 30 minutes, une fois par jour. Vous reconstituez un flacon de poudre de ceftriaxone 2 g, à diluer dans 40 mL de NaCl 0,9 %. Constantes : PA 110/68 mmHg, FC 102/min, FR 20/min, SpO2 97 %, douleur lombaire EVA 5/10.",
    questions: [
      {
        q: "Calculez le débit de perfusion en mL/h pour passer les 40 mL en 30 minutes.",
        type: "open",
        corrige: "Débit = volume / durée. Durée = 30 min = 0,5 h. Débit = 40 mL / 0,5 h = 80 mL/h. Réponse attendue : 80 mL/h (soit, avec 1 mL = 20 gouttes : (40 x 20)/30 ≈ 27 gouttes/min)."
      },
      {
        q: "Quelles vérifications et précautions réalisez-vous AVANT d'administrer cet antibiotique ?",
        type: "open",
        corrige: "Vérifier la prescription complète et l'identité du patient (règle des 5 B). Rechercher et tracer les allergies (notamment aux bêta-lactamines : pénicillines/céphalosporines). Vérifier péremption, intégrité, limpidité du produit reconstitué et compatibilité du soluté (NaCl 0,9 %). Respecter l'asepsie (préparation extemporanée, purge de la ligne). Vérifier la perméabilité de la voie veineuse. S'assurer d'avoir prélevé les hémocultures/ECBU AVANT la première dose d'antibiotique si prescrit. Préparer la surveillance d'une éventuelle réaction allergique."
      },
      {
        q: "Pendant les premières minutes de perfusion, quel signe évoque une réaction anaphylactique nécessitant l'arrêt immédiat ?",
        type: "qcm",
        options: [
          "Une légère somnolence",
          "Une éruption urticarienne, un prurit, un œdème, une dyspnée ou une chute tensionnelle",
          "Une augmentation modérée de la diurèse",
          "Une constipation"
        ],
        correct: 1,
        corrige: "Une réaction d'hypersensibilité immédiate se manifeste par urticaire, prurit, érythème, œdème (notamment de Quincke), gêne respiratoire/bronchospasme, hypotension voire choc anaphylactique. Conduite : arrêter immédiatement la perfusion, garder la voie veineuse (rincer au NaCl), alerter, surveiller constantes, position adaptée, préparer adrénaline et oxygène selon protocole."
      },
      {
        q: "Quelles surveillances mettez-vous en place pour évaluer l'efficacité et la tolérance de l'antibiothérapie ?",
        type: "open",
        corrige: "Efficacité : courbe thermique (apyrexie attendue), évolution de la douleur lombaire, état général, paramètres biologiques (CRP, NFS, fonction rénale), résultats de l'ECBU/antibiogramme pour réadapter le traitement. Tolérance : surveillance des signes d'allergie (immédiats et retardés), troubles digestifs (diarrhée, candidose, risque de colite à Clostridioides difficile), point de perfusion (veinite), fonction rénale. Vérifier l'hydratation et la diurèse. Respecter les horaires d'administration pour maintenir l'efficacité (régularité des doses). Traçabilité des administrations et des surveillances."
      },
      {
        q: "Pour respecter le principe d'efficacité de l'antibiothérapie, quelle affirmation est correcte ?",
        type: "qcm",
        options: [
          "On peut décaler librement les horaires d'injection sans conséquence",
          "Le respect des horaires et de l'intervalle entre les doses est essentiel pour maintenir une concentration efficace",
          "On augmente la dose si la fièvre persiste, de notre propre initiative",
          "On arrête l'antibiotique dès que la fièvre baisse"
        ],
        correct: 1,
        corrige: "Le respect des horaires et de l'intervalle entre chaque dose est essentiel pour maintenir des concentrations sériques efficaces et éviter l'émergence de résistances. L'IDE n'augmente ni n'arrête le traitement de sa propre initiative : toute modification relève de la prescription médicale. L'antibiothérapie est poursuivie sur la durée prescrite même après la défervescence."
      }
    ],
    demarche: "Contrôler prescription, identité et allergies, s'assurer des prélèvements microbiologiques préalables, reconstituer aseptiquement et régler le débit (80 mL/h sur 30 min), surveiller étroitement les premières minutes (réaction allergique), suivre courbe thermique, douleur, biologie et tolérance digestive/cutanée, respecter rigoureusement les horaires et tracer."
  }
];
