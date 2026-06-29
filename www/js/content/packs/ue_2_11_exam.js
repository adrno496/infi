export const cas = [
  {
    id: "ue_2_11_exam_anticoagulant_hbpm",
    ueId: "2.11",
    titre: "Surveillance d'une anticoagulation par HBPM en post-opératoire",
    niveau: "Examen",
    contexte: "Vous êtes infirmier(e) en service de chirurgie orthopédique. Vous prenez en charge un patient en post-opératoire et assurez la surveillance de son traitement anticoagulant.",
    situation: "M. Durand, 72 ans, 68 kg, est hospitalisé à J2 d'une pose de prothèse totale de hanche. Antécédents : hypertension artérielle traitée, insuffisance rénale modérée (clairance de la créatinine estimée à 42 mL/min). Le chirurgien a prescrit une héparine de bas poids moléculaire (HBPM) : énoxaparine (Lovenox) 4000 UI en sous-cutané une fois par jour, à visée préventive de la maladie thromboembolique veineuse. Constantes du matin : TA 138/82 mmHg, pouls 78/min, température 37,1 °C, douleur EVA 3/10. Le patient signale un petit hématome au point d'injection de la veille. Le bilan biologique d'entrée retrouve des plaquettes à 245 G/L.",
    questions: [
      {
        q: "Quelles surveillances biologiques spécifiques l'infirmier(e) doit-il/elle assurer chez ce patient sous HBPM, et selon quelle fréquence ?",
        type: "open",
        corrige: "Surveillance des plaquettes (numération plaquettaire) deux fois par semaine pendant le premier mois pour dépister une thrombopénie induite par l'héparine (TIH de type II), surveillance plus rapprochée chez les patients chirurgicaux. Surveillance de la fonction rénale (clairance de la créatinine) car l'HBPM est éliminée par voie rénale et l'insuffisance rénale expose à un risque d'accumulation et de surdosage. L'activité anti-Xa n'est pas systématique en préventif mais peut être contrôlée en cas d'insuffisance rénale, de poids extrême ou de risque hémorragique. Surveillance de l'hémoglobine/hématocrite pour dépister un saignement."
      },
      {
        q: "Quels signes cliniques de surdosage ou de complication hémorragique l'infirmier(e) doit-il/elle rechercher et transmettre ?",
        type: "open",
        corrige: "Signes hémorragiques à surveiller : saignement extériorisé (épistaxis, gingivorragies, hématurie, méléna, rectorragies), hématomes étendus ou en augmentation, saignement au niveau de la cicatrice ou du redon, ecchymoses spontanées. Signes d'anémie aiguë : pâleur, tachycardie, hypotension, asthénie, dyspnée, sueurs. Signes neurologiques évoquant un saignement intracrânien (céphalées, troubles de conscience). Toute anomalie est transmise immédiatement au médecin et tracée."
      },
      {
        q: "Concernant la technique d'injection sous-cutanée de l'HBPM, quelle proposition est correcte ?",
        type: "qcm",
        options: [
          "Il faut purger la bulle d'air de la seringue préremplie avant l'injection",
          "L'injection se fait dans la ceinture abdominale antérolatérale, perpendiculairement à un pli cutané maintenu, sans aspirer ni masser",
          "Il faut masser énergiquement le point d'injection après l'injection pour favoriser la diffusion",
          "L'injection doit toujours se faire dans la cuisse en intramusculaire"
        ],
        correct: 1,
        corrige: "L'injection d'HBPM se fait en sous-cutané dans la ceinture abdominale antérolatérale, en alternant les côtés, perpendiculairement (90°) dans un pli cutané maintenu pendant toute l'injection. On ne purge pas la bulle d'air des seringues préremplies (elle garantit la dose complète et limite l'hématome), on n'aspire pas et on ne masse pas après pour éviter les hématomes. La voie intramusculaire est contre-indiquée (risque d'hématome)."
      },
      {
        q: "La thrombopénie induite par l'héparine (TIH) de type II est une complication grave. Quel est le seuil et le délai évocateurs, et quelle est la conduite à tenir ?",
        type: "open",
        corrige: "La TIH de type II est d'origine immuno-allergique. Elle est évoquée devant une chute des plaquettes supérieure à 40-50 % par rapport à la valeur initiale et/ou des plaquettes inférieures à 100-150 G/L, survenant typiquement entre J5 et J21 du traitement (plus précoce en cas d'exposition antérieure à l'héparine). Paradoxalement, elle entraîne un risque thrombotique majeur (et non hémorragique). Conduite à tenir : alerter immédiatement le médecin, arrêt de toute héparine (HBPM et HNF), réalisation d'un bilan immunologique (recherche d'anticorps anti-PF4), relais par un anticoagulant non héparinique (ex. danaparoïde, argatroban) sur prescription, surveillance clinique des signes de thrombose."
      },
      {
        q: "Compte tenu de l'insuffisance rénale modérée de ce patient (clairance 42 mL/min), quelle attitude est attendue de l'infirmier(e) face à la prescription d'HBPM ?",
        type: "open",
        corrige: "L'HBPM à dose préventive est généralement possible jusqu'à une clairance d'environ 30 mL/min mais impose une vigilance accrue car le risque d'accumulation et de surdosage augmente quand la fonction rénale se dégrade. L'infirmier(e) doit s'assurer que la prescription tient compte de la clairance, surveiller l'évolution de la fonction rénale, renforcer la surveillance clinique du risque hémorragique, et alerter le médecin en cas de dégradation de la clairance (en dessous de 30 mL/min, une HNF ou une adaptation est souvent préférée). En curatif, une surveillance de l'activité anti-Xa est recommandée chez l'insuffisant rénal."
      }
    ],
    demarche: "Vérifier la prescription (molécule, dose, voie, adaptation au poids et à la fonction rénale). Réaliser l'injection selon les règles de bonne pratique (site abdominal, pli cutané, pas de purge ni de massage, rotation des points). Assurer la double surveillance : biologique (plaquettes 2x/semaine, fonction rénale, hémoglobine) et clinique (signes hémorragiques, signes de thrombose, hématome au point d'injection). Dépister la TIH de type II (chute des plaquettes >40 % entre J5 et J21). Éduquer le patient et tracer toutes les données dans le dossier. Transmettre toute anomalie au médecin sans délai."
  },
  {
    id: "ue_2_11_exam_insuline_hypoglycemie",
    ueId: "2.11",
    titre: "Insulinothérapie et gestion d'une hypoglycémie",
    niveau: "Examen",
    contexte: "Vous êtes infirmier(e) en service de médecine. Vous assurez la surveillance glycémique et l'administration de l'insulinothérapie d'un patient diabétique.",
    situation: "Mme Lefèvre, 64 ans, diabétique de type 2 insulino-requérante, est hospitalisée pour une pneumopathie. Elle reçoit un schéma basal-bolus : insuline glargine (Lantus) 22 UI le soir et insuline asparte (NovoRapid) avant chaque repas selon un protocole adapté aux glycémies capillaires. Ce matin à 7h, sa glycémie capillaire est à 0,48 g/L (2,7 mmol/L). La patiente est consciente mais signale des sueurs, des tremblements et une sensation de faim impérieuse. Le petit-déjeuner n'a pas encore été servi. Constantes : TA 124/76 mmHg, pouls 96/min, température 37,8 °C.",
    questions: [
      {
        q: "Définissez l'hypoglycémie et identifiez les signes présentés par cette patiente. Quelle est leur origine physiopathologique ?",
        type: "open",
        corrige: "L'hypoglycémie se définit par une glycémie inférieure à 0,70 g/L (3,9 mmol/L), ici sévère à 0,48 g/L. Les signes présentés (sueurs, tremblements, faim, tachycardie) sont des signes adrénergiques/neurovégétatifs, liés à la libération de catécholamines (réponse de contre-régulation à la baisse du glucose). À un stade plus avancé apparaissent les signes neuroglucopéniques (troubles de la concentration, confusion, troubles visuels, troubles du comportement, convulsions, coma) liés au manque de glucose au niveau cérébral. La patiente étant consciente et capable d'avaler, on est ici au stade des signes neurovégétatifs."
      },
      {
        q: "Décrivez la conduite à tenir immédiate (resucrage) chez cette patiente consciente. Précisez les quantités et le contrôle.",
        type: "open",
        corrige: "Patiente consciente et capable de déglutir : resucrage per os par voie orale. Administrer 15 g de sucre rapide (ex. 3 morceaux de sucre, ou 1 berlingot de jus de fruit / 15 cl, ou 1 cuillère à soupe de miel/confiture). Contrôler la glycémie capillaire 15 minutes après. Si la glycémie reste inférieure à 0,70 g/L, renouveler le resucrage de 15 g. Une fois la glycémie remontée, donner un sucre lent (collation : pain, biscuits) ou avancer le repas pour éviter la récidive. Ne jamais administrer d'insuline tant que l'hypoglycémie n'est pas corrigée. Surveiller, rassurer la patiente, tracer l'épisode et transmettre au médecin pour réévaluation du schéma."
      },
      {
        q: "Si la patiente avait été inconsciente (troubles de la déglutition), quelle aurait été la conduite à tenir ?",
        type: "open",
        corrige: "Devant une hypoglycémie avec troubles de la conscience, le resucrage per os est contre-indiqué (risque de fausse route). On administre du glucosé hypertonique en intraveineux : G30 % (ou G50 %) sur prescription/protocole d'urgence, généralement 2 à 4 ampoules de G30 %, par une voie veineuse. En l'absence de voie veineuse, on peut administrer du glucagon en intramusculaire ou sous-cutané (1 mg) sauf chez le diabétique de type 2 sous sulfamides où il est moins efficace. Mettre la patiente en position latérale de sécurité, appeler le médecin/l'équipe, surveiller la reprise de conscience et contrôler la glycémie, puis relais par un apport glucidique."
      },
      {
        q: "Concernant l'insuline glargine (Lantus), quelle proposition est exacte ?",
        type: "qcm",
        options: [
          "C'est une insuline rapide qui se mélange avec l'insuline asparte dans la même seringue",
          "C'est une insuline lente (analogue d'action prolongée) qui assure une couverture basale, sans pic marqué, et ne doit pas être mélangée à une autre insuline",
          "Elle s'administre exclusivement par voie intraveineuse",
          "Elle doit être injectée juste avant chaque repas pour couvrir l'apport glucidique"
        ],
        correct: 1,
        corrige: "L'insuline glargine est un analogue lent d'action prolongée (environ 24 h), à profil plat sans pic marqué, assurant l'insulinémie basale. Elle s'injecte en sous-cutané, le plus souvent une fois par jour à heure fixe, et ne doit jamais être mélangée à une autre insuline ni administrée par voie IV. Les bolus prandiaux sont assurés par l'insuline rapide (asparte)."
      },
      {
        q: "Quelles règles de bonne pratique l'infirmier(e) doit-il/elle respecter pour l'administration de l'insuline et la surveillance glycémique ?",
        type: "open",
        corrige: "Vérifier la prescription et le type d'insuline (ne pas confondre rapide et lente). Respecter la chaîne du froid (conserver les flacons/stylos non entamés au réfrigérateur, les stylos en cours à température ambiante). Vérifier la concentration (U100), purger le stylo, utiliser une aiguille neuve. Injecter en sous-cutané dans les zones recommandées (abdomen, cuisses, bras, fesses) en effectuant une rotation des sites pour éviter les lipodystrophies. Respecter le délai injection-repas pour les rapides et le rythme prandial. Réaliser les glycémies capillaires aux horaires prescrits, adapter selon protocole, ne pas administrer le bolus si la patiente ne mange pas. Surveiller les signes d'hypo et d'hyperglycémie. Tracer doses, sites et glycémies. Éduquer la patiente."
      }
    ],
    demarche: "Face à une hypoglycémie : confirmer par glycémie capillaire, évaluer l'état de conscience et la capacité de déglutition. Si consciente : resucrage per os 15 g de sucre rapide, contrôle à 15 min, répéter si besoin, puis sucre lent. Si inconsciente : G30 % IV ou glucagon, PLS, alerte médicale. Ne jamais injecter d'insuline en hypoglycémie. Rechercher la cause (repas sauté, surdosage, infection, activité), réévaluer le schéma avec le médecin, surveiller, tracer et éduquer. Respecter les bonnes pratiques d'insulinothérapie (type, conservation, rotation des sites, lien injection-repas)."
  },
  {
    id: "ue_2_11_exam_morphine_palier3",
    ueId: "2.11",
    titre: "Surveillance d'un traitement par morphine (antalgique de palier 3)",
    niveau: "Examen",
    contexte: "Vous êtes infirmier(e) en service de soins palliatifs / médecine. Vous assurez la surveillance d'un patient sous opioïdes forts pour des douleurs cancéreuses.",
    situation: "M. Bernard, 78 ans, atteint d'un cancer pulmonaire métastatique, présente des douleurs intenses (EVA à 8/10). Le médecin instaure un traitement antalgique de palier 3 : sulfate de morphine LP (Skenan) 30 mg matin et soir, avec des interdoses de morphine à libération immédiate (Actiskenan) 10 mg si besoin en cas d'accès douloureux. Antécédents : BPCO, constipation chronique. Ce matin, l'aide-soignante vous signale que le patient est très somnolent, peu réveillable, avec une fréquence respiratoire à 8/min. Constantes : TA 108/64 mmHg, pouls 62/min, SpO2 89 %, EVA non évaluable (somnolence). Pupilles en myosis serré.",
    questions: [
      {
        q: "Quels sont les principaux effets indésirables de la morphine que l'infirmier(e) doit surveiller et prévenir ?",
        type: "open",
        corrige: "Effets indésirables à surveiller : la dépression respiratoire (effet le plus grave, surveillance de la fréquence respiratoire et de la SpO2, ainsi que du niveau de sédation), la sédation/somnolence excessive, la constipation (effet quasi constant, à prévenir systématiquement par des laxatifs et des règles hygiéno-diététiques), les nausées et vomissements (fréquents en début de traitement), la rétention urinaire, le prurit, la confusion, les myoclonies, et le myosis. La surveillance combine l'évaluation de l'efficacité antalgique (EVA/EN) et la recherche des effets indésirables, notamment via une échelle de sédation et la fréquence respiratoire."
      },
      {
        q: "Devant ce tableau (somnolence majeure, FR à 8/min, SpO2 89 %, myosis serré), quel diagnostic infirmier suspectez-vous et quelle est la conduite à tenir immédiate ?",
        type: "open",
        corrige: "Il s'agit d'un surdosage en morphine avec dépression respiratoire (triade évocatrice : sédation/troubles de la conscience, bradypnée < 10/min, myosis serré). Conduite à tenir immédiate : arrêter toute nouvelle administration d'opioïde, stimuler le patient, l'installer en position demi-assise, administrer de l'oxygène, surveiller en continu FR, SpO2, conscience et constantes. Alerter immédiatement le médecin. Préparer et administrer sur prescription l'antidote : la naloxone (Narcan) en titration IV (dilution et injection fractionnée) jusqu'à restauration d'une FR satisfaisante, en sachant que sa durée d'action est courte et qu'une surveillance prolongée / répétition est nécessaire car le risque de re-sédation existe. Tracer et transmettre."
      },
      {
        q: "Quel est l'antidote spécifique des opioïdes ?",
        type: "qcm",
        options: [
          "Le flumazénil (Anexate)",
          "La naloxone (Narcan)",
          "La vitamine K (Konakion)",
          "Le sulfate de protamine"
        ],
        correct: 1,
        corrige: "La naloxone (Narcan) est l'antagoniste spécifique des récepteurs opioïdes, antidote du surdosage en morphine. Le flumazénil est l'antidote des benzodiazépines, la vitamine K antagonise les AVK, et le sulfate de protamine neutralise l'héparine."
      },
      {
        q: "La constipation est un effet quasi systématique des opioïdes. Quelles mesures préventives infirmières et quelle surveillance mettez-vous en place ?",
        type: "open",
        corrige: "La constipation sous opioïdes ne s'épuise pas dans le temps (pas de tolérance) et doit être prévenue systématiquement dès l'instauration : prescription anticipée de laxatifs (souvent laxatif osmotique et/ou stimulant). Mesures infirmières : surveillance du transit (date et caractéristiques des dernières selles, ballonnements, douleurs abdominales), encourager l'hydratation, une alimentation riche en fibres si possible, favoriser la mobilisation. Dépister un fécalome (toucher rectal sur prescription si besoin). Adapter les laxatifs avec le médecin, et en cas d'inefficacité envisager un traitement spécifique (ex. antagoniste périphérique). Tracer le transit dans le dossier."
      },
      {
        q: "Quelles sont les règles réglementaires et de sécurité encadrant l'administration de la morphine (stupéfiant) ?",
        type: "open",
        corrige: "La morphine est un stupéfiant soumis à une réglementation stricte. La prescription se fait sur ordonnance sécurisée, en toutes lettres (dose, posologie, durée). Les stupéfiants sont conservés dans une armoire ou un coffre fermé à clé, sous la responsabilité de l'infirmier(e). Une comptabilité précise est tenue (registre/relevé des entrées et sorties), avec décompte des unités. L'administration doit être tracée et la délivrance vérifiée (double contrôle souvent requis). Toute interdose administrée doit être notée (heure, dose, efficacité). Les reliquats sont gérés/détruits selon la procédure de l'établissement. L'infirmier(e) vérifie la concordance prescription-patient-dose avant chaque administration."
      }
    ],
    demarche: "Évaluer la douleur (EVA/EN) et l'efficacité du traitement, tout en surveillant la sécurité : fréquence respiratoire, niveau de sédation, SpO2, état pupillaire. Dépister précocement le surdosage (triade sédation-bradypnée-myosis) : en cas de signes, arrêt de l'opioïde, oxygène, stimulation, alerte médicale et naloxone en titration sur prescription avec surveillance prolongée. Prévenir systématiquement la constipation (laxatifs, hydratation, surveillance du transit) et gérer les autres effets (nausées, rétention urinaire). Respecter la réglementation des stupéfiants (ordonnance sécurisée, stockage sous clé, traçabilité, comptabilité). Tracer et transmettre."
  },
  {
    id: "ue_2_11_exam_amoxicilline_allergie",
    ueId: "2.11",
    titre: "Administration d'une antibiothérapie IV et risque allergique",
    niveau: "Examen",
    contexte: "Vous êtes infirmier(e) en service de médecine. Vous préparez et administrez une antibiothérapie intraveineuse et assurez la surveillance des effets indésirables.",
    situation: "Mme Petit, 56 ans, est hospitalisée pour une pyélonéphrite aiguë fébrile. Le médecin prescrit une antibiothérapie par amoxicilline-acide clavulanique (Augmentin) 1 g x 3/jour en intraveineux lent. Le dossier ne mentionne aucune allergie connue, mais lors de l'entretien d'accueil la patiente vous rapporte avoir présenté, il y a quelques années, une éruption cutanée avec démangeaisons après la prise d'un antibiotique dont elle ne se souvient pas du nom. Vous venez de débuter la première perfusion. Cinq minutes après le début, la patiente signale des démangeaisons, présente une urticaire diffuse, un œdème des lèvres, une sensation d'oppression thoracique. Constantes : TA 86/52 mmHg, pouls 122/min, FR 26/min, SpO2 92 %.",
    questions: [
      {
        q: "Avant toute administration d'antibiotique, quelles vérifications l'infirmier(e) doit-il/elle réaliser concernant le risque allergique ?",
        type: "open",
        corrige: "Rechercher systématiquement les allergies connues : interroger le patient sur ses antécédents allergiques (médicaments, en particulier pénicillines/bêta-lactamines), vérifier le dossier et un éventuel bracelet/fiche d'allergie. Préciser le type de réaction antérieure (éruption simple vs réaction grave type œdème, choc) car cela conditionne la contre-indication. Toute allergie suspectée ou avérée doit être signalée au médecin avant administration et tracée. Ici, l'antécédent d'éruption avec prurit sous antibiotique non identifié justifiait d'alerter le médecin avant de débuter l'Augmentin (risque d'allergie aux bêta-lactamines)."
      },
      {
        q: "Identifiez la complication présentée par la patiente et justifiez. Quels en sont les signes de gravité ?",
        type: "open",
        corrige: "Il s'agit d'un choc anaphylactique (réaction d'hypersensibilité immédiate sévère) à l'amoxicilline. Arguments : survenue brutale en début de perfusion, signes cutanéo-muqueux (urticaire diffuse, prurit, œdème des lèvres / angio-œdème), signes respiratoires (oppression thoracique, polypnée, désaturation) et surtout signes de gravité hémodynamiques : hypotension (TA 86/52), tachycardie (122/min), témoignant d'un collapsus. Les signes de gravité sont l'atteinte respiratoire (bronchospasme, œdème laryngé, dyspnée) et l'atteinte cardiovasculaire (hypotension, collapsus, tachycardie), pouvant évoluer vers l'arrêt cardiorespiratoire."
      },
      {
        q: "Décrivez la conduite à tenir infirmière immédiate face à ce choc anaphylactique.",
        type: "open",
        corrige: "Arrêter immédiatement la perfusion d'antibiotique tout en conservant la voie veineuse (la rincer/changer la tubulure). Alerter sans délai le médecin et l'équipe (urgence vitale). Allonger la patiente, surélever les membres inférieurs (position de Trendelenburg) sauf détresse respiratoire (alors position demi-assise). Administrer de l'oxygène à fort débit. Surveiller en continu TA, pouls, FR, SpO2, conscience. Préparer et administrer sur prescription/protocole d'urgence l'adrénaline (traitement de référence du choc anaphylactique, en IM 0,5 mg ou en titration IV), poser un remplissage vasculaire par cristalloïdes, préparer les traitements adjuvants (corticoïdes, antihistaminiques, bronchodilatateurs). Préparer le matériel de réanimation. Tracer l'épisode, déclarer la pharmacovigilance et noter l'allergie dans le dossier."
      },
      {
        q: "Quel est le traitement médicamenteux de première intention du choc anaphylactique ?",
        type: "qcm",
        options: [
          "Un corticoïde (méthylprednisolone) en IV",
          "Un antihistaminique (dexchlorphéniramine) en IV",
          "L'adrénaline (épinéphrine)",
          "Du sérum physiologique seul en remplissage"
        ],
        correct: 2,
        corrige: "L'adrénaline (épinéphrine) est le traitement de première intention et vital du choc anaphylactique, administrée par voie intramusculaire (0,5 mg chez l'adulte, renouvelable) ou en titration IV par le médecin. Elle agit sur le bronchospasme, l'œdème et le collapsus. Le remplissage vasculaire, les corticoïdes et antihistaminiques sont des traitements complémentaires/de seconde intention, mais ne remplacent pas l'adrénaline."
      },
      {
        q: "Quelles sont les règles générales de sécurité (les contrôles) que l'infirmier(e) applique avant toute administration médicamenteuse, et quelles transmissions/traçabilité après cet événement ?",
        type: "open",
        corrige: "Avant administration : appliquer la règle des contrôles (la bonne identité du patient, le bon médicament, la bonne dose, la bonne voie, le bon moment/horaire, et la bonne traçabilité), vérifier la prescription médicale, la date de péremption, l'intégrité et l'aspect du produit, les allergies et les éventuelles incompatibilités. Pour l'IV : asepsie, débit prescrit, surveillance pendant et après l'injection. Après l'événement : tracer précisément dans le dossier (heure de début, symptômes, mesures prises, traitements administrés et réponse), faire une transmission orale et écrite ciblée, signaler et inscrire l'allergie de manière visible (dossier, bracelet, alerte informatique), réaliser une déclaration de pharmacovigilance et orienter la patiente vers un bilan allergologique."
      }
    ],
    demarche: "Sécuriser toute administration par les contrôles préalables (identité, médicament, dose, voie, moment, traçabilité) et le dépistage systématique des allergies. Devant une réaction allergique grave (choc anaphylactique : signes cutanéo-muqueux + respiratoires + collapsus), arrêter immédiatement l'antibiotique en gardant la voie, alerter en urgence, allonger jambes surélevées, oxygéner, surveiller en continu, et administrer l'adrénaline sur protocole, complétée par remplissage, corticoïdes et antihistaminiques. Assurer la traçabilité, signaler l'allergie de façon pérenne, déclarer en pharmacovigilance et organiser un bilan allergologique."
  }
];
