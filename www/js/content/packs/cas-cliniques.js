export const cas = [
  {
    id: "cas_idm_cardio",
    ueId: "3.1",
    titre: "Douleur thoracique aux urgences",
    niveau: "2ᵉ–3ᵉ année",
    contexte: "Service d'accueil des urgences (SAU). Vous êtes ESI en stage, vous accueillez le patient avec l'IDE.",
    situation: "M. Renaud, 58 ans, arrive à 22 h pour une douleur thoracique rétrosternale constrictive irradiant dans le bras gauche et la mâchoire, apparue au repos il y a 40 minutes. Il est tabagique (30 PA), hypertendu et dyslipidémique. Il est pâle, en sueurs, anxieux. Constantes : FC 98/min, PA 148/92 mmHg, SpO2 95 % en air ambiant, FR 22/min, douleur EVA 7/10.",
    questions: [
      { q: "Quelle est la première action prioritaire ?", type: "qcm", options: ["Installer le patient et réaliser un ECG 18 dérivations dans les 10 minutes", "Donner un antalgique de palier 1 et réévaluer dans 1 heure", "Faire une glycémie capillaire et attendre le médecin", "Rassurer le patient et le laisser en salle d'attente"], correct: 0, corrige: "Devant une douleur thoracique évocatrice de syndrome coronarien aigu, l'ECG doit être réalisé et interprété dans les 10 minutes. C'est l'examen clé qui oriente la prise en charge (sus-décalage ST = urgence de reperfusion)." },
      { q: "Le médecin évoque un SCA ST+. Quelles surveillances et mesures infirmières mettez-vous en place ?", type: "open", corrige: "Scope ECG continu, monitorage PA/SpO2/FC, repos strict au lit, voie veineuse périphérique, prélèvement troponine, oxygénothérapie seulement si SpO2 < 90 %, préparation du traitement sur prescription (antiagrégants, anticoagulant, antalgie type morphine titrée), surveillance de la douleur (EVA), préparation au transfert en USIC/coronarographie, présence rassurante. Surveiller l'apparition de troubles du rythme et signes de choc." },
      { q: "Diagnostic infirmier prioritaire au format PES ?", type: "open", corrige: "« Douleur aiguë liée à l'ischémie myocardique se manifestant par une douleur rétrosternale EVA 7/10, sueurs, pâleur et anxiété ». Risque de complication : trouble du rythme / arrêt cardiaque. Priorité = soulagement de la douleur et reperfusion rapide." }
    ],
    demarche: "Reconnaissance d'une urgence vitale (SCA), ECG < 10 min, mise en condition (scope, VVP, O2 si besoin), antalgie, application du protocole SCA et orientation rapide vers la coronarographie. Surveillance hémodynamique et rythmique permanente."
  },
  {
    id: "cas_diabete_hypo",
    ueId: "2.7",
    titre: "Malaise chez un patient diabétique",
    niveau: "1ʳᵉ–2ᵉ année",
    contexte: "Service de médecine. Vous effectuez le tour du matin avant le petit-déjeuner.",
    situation: "Mme Lefèvre, 72 ans, diabétique de type 2 sous insuline, a reçu sa dose d'insuline rapide à 7 h. À 7 h 45, le petit-déjeuner n'est pas encore servi. Vous la trouvez pâle, sueurs froides, tremblements, propos confus. Glycémie capillaire : 0,42 g/L (2,3 mmol/L).",
    questions: [
      { q: "De quoi s'agit-il ?", type: "qcm", options: ["Une hyperglycémie", "Une hypoglycémie", "Un accident vasculaire cérébral", "Une crise d'angoisse"], correct: 1, corrige: "Glycémie < 0,70 g/L avec signes neuroglucopéniques et adrénergiques (sueurs, tremblements, confusion) = hypoglycémie, ici favorisée par l'injection d'insuline sans apport glucidique." },
      { q: "La patiente est consciente et peut avaler. Quelle conduite tenez-vous ?", type: "qcm", options: ["Resucrage oral : 15 g de sucre rapide (3 sucres ou jus), puis recontrôle à 15 min", "Injection d'insuline rapide pour stabiliser", "Pose immédiate de glucosé 30 % IV", "Faire marcher la patiente pour la stimuler"], correct: 0, corrige: "Patiente consciente : règle des 15 — 15 g de glucides rapides per os, recontrôle glycémique à 15 minutes, puis collation à index glycémique plus lent. Le G30 IV est réservé aux troubles de conscience / impossibilité d'avaler." },
      { q: "Quelles transmissions et surveillances assurez-vous ensuite ?", type: "open", corrige: "Transmissions écrites (heure, glycémie, signes, resucrage, glycémie de contrôle, efficacité), transmission orale au médecin, surveillance rapprochée des glycémies, recherche de la cause (décalage repas/insuline), éducation thérapeutique sur reconnaissance des signes. Diagnostic infirmier : risque d'altération de la conscience lié à l'hypoglycémie." }
    ],
    demarche: "Identifier l'hypoglycémie, resucrer selon l'état de conscience (règle des 15 si conscient, G30 IV si inconscient + appel médical), recontrôler, prévenir la récidive et tracer. Analyse de la cause et réajustement du schéma insuline/repas."
  },
  {
    id: "cas_postop_chir",
    ueId: "4.4",
    titre: "Surveillance d'un retour de bloc",
    niveau: "2ᵉ–3ᵉ année",
    contexte: "Service de chirurgie viscérale. Vous accueillez un patient en provenance de la salle de réveil.",
    situation: "M. Bonnet, 64 ans, revient à J0 d'une colectomie par laparotomie. Il a une voie veineuse, une sonde urinaire, un redon, une analgésie par PCA morphine. À 4 h de l'arrivée : PA 96/58 mmHg, FC 112/min, FR 20/min, pâleur, redon qui s'est rempli de 200 mL de sang rouge en 1 h, douleur abdominale croissante.",
    questions: [
      { q: "Que suspectez-vous en priorité ?", type: "qcm", options: ["Une rétention urinaire", "Une hémorragie post-opératoire", "Une constipation", "Une réaction allergique à la morphine"], correct: 1, corrige: "Tachycardie + hypotension + pâleur + redon hémorragique abondant et croissant = tableau de choc hémorragique débutant. Urgence : prévenir le chirurgien immédiatement." },
      { q: "Quelle est votre conduite à tenir infirmière immédiate ?", type: "open", corrige: "Alerter sans délai le chirurgien/médecin, surveiller et tracer les constantes rapprochées (PA, FC, FR, SpO2, conscience, diurèse, débit du redon), allonger jambes surélevées, vérifier les VVP (calibre suffisant), préparer remplissage vasculaire et bilan (NFS, hémostase, groupe-RAI), anticiper une éventuelle reprise au bloc, rester auprès du patient. Quantifier les pertes." },
      { q: "Citez les surveillances spécifiques d'un retour de bloc en dehors de l'hémorragie.", type: "open", corrige: "Conscience/réveil, douleur (EVA, fonctionnement PCA), constantes, coloration et chaleur des extrémités, diurèse (reprise, aspect), pansement et drains, transit (reprise, nausées/vomissements), température (hypothermie/hyperthermie), prévention thromboembolique et risque infectieux, position et confort." }
    ],
    demarche: "Reconnaître les signes de choc hémorragique post-opératoire, alerter en urgence, mettre en condition (surveillance, remplissage sur prescription, bilan, position), anticiper la reprise chirurgicale. Surveillance globale du retour de bloc."
  },
  {
    id: "cas_ehpad_chute",
    ueId: "4.6",
    titre: "Chute d'une résidente en EHPAD",
    niveau: "1ʳᵉ–2ᵉ année",
    contexte: "EHPAD. Vous êtes ESI auprès de l'IDE de l'unité.",
    situation: "Mme Garnier, 86 ans, désorientée par une maladie d'Alzheimer, sous anticoagulant (apixaban) pour une ACFA, est retrouvée au sol dans sa chambre. Elle se plaint de la hanche droite. Le membre inférieur droit paraît raccourci et en rotation externe. Elle est consciente, FC 88/min, PA 138/80 mmHg.",
    questions: [
      { q: "Quel élément rend cette chute particulièrement à risque ?", type: "qcm", options: ["Son âge avancé uniquement", "Le traitement anticoagulant majorant le risque hémorragique", "Sa désorientation", "Le fait qu'elle vive en EHPAD"], correct: 1, corrige: "Sous anticoagulant, toute chute expose à un risque hémorragique majeur, notamment hématome et hémorragie intracrânienne même différée. Une surveillance neurologique prolongée s'impose, en plus de la suspicion de fracture." },
      { q: "Le membre raccourci en rotation externe évoque quoi, et quelle conduite ?", type: "qcm", options: ["Une entorse, mobilisation douce", "Une fracture du col fémoral, immobilisation et avis médical/imagerie", "Une simple contusion, antalgique simple", "Une luxation d'épaule"], correct: 1, corrige: "Membre inférieur raccourci en rotation externe avec douleur de hanche = fracture du col du fémur typique. Ne pas mobiliser, immobiliser, antalgie sur prescription, transfert pour radiographie et avis chirurgical." },
      { q: "Quelles surveillances et transmissions mettez-vous en place ?", type: "open", corrige: "Surveillance neurologique (conscience, pupilles, vigilance) répétée du fait des AC, surveillance hémodynamique, évaluation et soulagement de la douleur, ne pas mobiliser le membre, recherche d'autres lésions, déclaration de l'événement indésirable (fiche de chute), prévention des récidives (analyse des causes : environnement, médicaments, troubles de la marche). Transmissions écrites et orales au médecin/famille." }
    ],
    demarche: "Évaluer la chute (conscience, lésions), suspecter une fracture du col, immobiliser sans mobiliser, antalgie, surveillance neurologique renforcée liée à l'anticoagulant, traçabilité (fiche de chute) et démarche de prévention des chutes."
  },
  {
    id: "cas_psy_suicidaire",
    ueId: "2.6",
    titre: "Accueil d'un patient à risque suicidaire",
    niveau: "2ᵉ–3ᵉ année",
    contexte: "Unité d'hospitalisation en psychiatrie. Vous participez à l'entretien d'accueil avec l'IDE.",
    situation: "M. Thomas, 34 ans, est hospitalisé après une tentative de suicide médicamenteuse. Il présente un épisode dépressif caractérisé : tristesse, ralentissement, insomnie, idées noires verbalisées. Il dit « de toute façon ça ne sert à rien ». Antécédent d'une précédente tentative il y a 2 ans.",
    questions: [
      { q: "Quelle attitude infirmière est la plus adaptée lors de l'entretien ?", type: "qcm", options: ["Éviter de parler du suicide pour ne pas lui donner des idées", "Aborder ouvertement les idées suicidaires et évaluer le risque/urgence/dangerosité", "Le rassurer en minimisant ses propos", "Lui donner des conseils pour aller mieux"], correct: 1, corrige: "Parler ouvertement du suicide ne provoque pas le passage à l'acte : cela permet d'évaluer le Risque, l'Urgence et la Dangerosité (RUD) et de créer une alliance. L'écoute active et l'absence de jugement sont essentielles." },
      { q: "Quelles mesures de protection et de surveillance mettez-vous en place ?", type: "open", corrige: "Évaluation du potentiel suicidaire (RUD), surveillance rapprochée selon le protocole (présence, fréquence des passages), sécurisation de l'environnement (retrait des objets dangereux, médicaments), surveillance de la prise effective du traitement, observation du comportement et de l'humeur, maintien du lien et de l'alliance thérapeutique, transmissions précises, travail en équipe pluriprofessionnelle." },
      { q: "Diagnostic infirmier prioritaire (PES) ?", type: "open", corrige: "« Risque de violence envers soi-même (risque suicidaire) lié à l'épisode dépressif et aux antécédents de tentative, se manifestant par des idées suicidaires verbalisées et un sentiment de désespoir. » Priorité : protéger le patient, maintenir l'alliance, surveiller l'humeur et l'observance." }
    ],
    demarche: "Accueil contenant et empathique, évaluation du risque suicidaire (RUD) en abordant directement le sujet, mise en place des mesures de protection et de la surveillance adaptée, alliance thérapeutique, traçabilité et travail pluridisciplinaire."
  },
  {
    id: "cas_pediatrie_bronchio",
    ueId: "2.11",
    titre: "Nourrisson en détresse respiratoire",
    niveau: "2ᵉ–3ᵉ année",
    contexte: "Service de pédiatrie. Vous accueillez un nourrisson avec l'IDE puéricultrice.",
    situation: "Léa, 4 mois, est amenée par ses parents pour gêne respiratoire et difficultés à boire depuis 2 jours. Elle est polypnéique (FR 65/min), présente un tirage intercostal et un battement des ailes du nez, une toux et des sibilants. SpO2 91 %, T° 38 °C. Diagnostic médical : bronchiolite.",
    questions: [
      { q: "Quel signe traduit la sévérité de la détresse respiratoire ?", type: "qcm", options: ["La fièvre à 38 °C", "Les signes de lutte (tirage, battement des ailes du nez) et la SpO2 à 91 %", "La toux", "L'âge de 4 mois"], correct: 1, corrige: "Les signes de lutte respiratoire (tirage, battement des ailes du nez, geignement) associés à une désaturation traduisent la sévérité. Les difficultés alimentaires sont aussi un signe de gravité chez le nourrisson." },
      { q: "Quelles actions infirmières prioritaires mettez-vous en place ?", type: "open", corrige: "Désobstruction rhino-pharyngée (DRP) au sérum physiologique surtout avant les biberons, position proclive, surveillance respiratoire (FR, signes de lutte, SpO2), oxygénothérapie sur prescription si SpO2 basse, fractionnement de l'alimentation et surveillance de la prise/hydratation/diurèse, surveillance de la température, surveillance de l'apparition d'apnées, mesures barrières. Rassurer les parents." },
      { q: "Quels critères vous alertent sur une aggravation à signaler immédiatement ?", type: "qcm", options: ["Une seule selle dans la journée", "Apnées, épuisement, refus alimentaire total, aggravation de la désaturation", "Un léger encombrement nasal", "Des pleurs lors de la DRP"], correct: 1, corrige: "Apnées, signes d'épuisement respiratoire, refus alimentaire complet (risque de déshydratation) et désaturation persistante sont des signes d'aggravation imposant un appel médical immédiat." }
    ],
    demarche: "Surveillance respiratoire étroite, DRP, position proclive, fractionnement alimentaire et surveillance de l'hydratation, oxygénothérapie sur prescription, dépistage des signes d'aggravation (apnées, épuisement), mesures barrières et accompagnement parental."
  },
  {
    id: "cas_pneumo_bpco",
    ueId: "2.8",
    titre: "Décompensation de BPCO",
    niveau: "2ᵉ–3ᵉ année",
    contexte: "Service de pneumologie. Vous prenez en charge le patient avec l'IDE.",
    situation: "M. Petit, 70 ans, BPCO connu, oxygénodépendant à domicile (1,5 L/min), est hospitalisé pour majoration de sa dyspnée et expectorations purulentes. À l'admission : FR 28/min, SpO2 88 %, FC 104/min, cyanose des lèvres, somnolence légère. Gazométrie : hypercapnie avec acidose.",
    questions: [
      { q: "Pourquoi l'oxygénothérapie doit-elle être prudente chez ce patient ?", type: "qcm", options: ["Parce qu'un débit trop élevé peut majorer l'hypercapnie et la somnolence", "Parce que l'oxygène est toxique pour les poumons", "Parce qu'il faut économiser l'oxygène", "Parce que cela assèche les muqueuses"], correct: 0, corrige: "Chez le patient BPCO hypercapnique, un excès d'oxygène peut aggraver l'hypercapnie (effet sur la commande ventilatoire et effet Haldane/espace mort), majorant la somnolence et le risque de coma carbonarcotique. On titre l'O2 pour une SpO2 cible basse (≈ 88-92 %)." },
      { q: "Quelles surveillances cliniques mettez-vous en place ?", type: "open", corrige: "Surveillance respiratoire (FR, amplitude, signes de lutte, SpO2 cible 88-92 %), surveillance de la conscience (somnolence = signe d'hypercapnie), coloration (cyanose), FC, surveillance de l'efficacité des aérosols/traitements, aide à l'expectoration, position assise/demi-assise, surveillance des effets de l'antibiothérapie, gazométries de contrôle. Alerter en cas d'aggravation de la conscience ou de la dyspnée (risque de ventilation non invasive)." },
      { q: "Diagnostic infirmier prioritaire (PES) ?", type: "open", corrige: "« Altération des échanges gazeux liée à la décompensation respiratoire et à l'hypercapnie, se manifestant par une dyspnée, une désaturation à 88 %, une cyanose et une somnolence. » Priorité : surveillance respiratoire et neurologique, O2 titré, traitement de la cause (surinfection)." }
    ],
    demarche: "Surveillance respiratoire et neurologique étroite, oxygénothérapie titrée avec SpO2 cible basse, position demi-assise, aérosols et aide au désencombrement, traitement de la surinfection, dépistage de l'aggravation (somnolence, hypercapnie) et anticipation de la VNI."
  },
  {
    id: "cas_palliatif_douleur",
    ueId: "4.7",
    titre: "Soins palliatifs et gestion de la douleur",
    niveau: "2ᵉ–3ᵉ année",
    contexte: "Unité de soins palliatifs. Vous accompagnez le patient et sa famille avec l'équipe.",
    situation: "M. Lambert, 68 ans, atteint d'un cancer pulmonaire métastatique en phase palliative, présente des douleurs osseuses intenses (EVA 8/10) malgré un traitement par morphine LP. Il est asthénique, anxieux, et exprime sa peur de souffrir. Sa famille est présente et inquiète.",
    questions: [
      { q: "Que faire face à des douleurs persistantes EVA 8/10 sous morphine LP ?", type: "qcm", options: ["Attendre la prochaine prise de morphine LP", "Évaluer puis administrer une interdose (dose de secours) sur prescription et tracer", "Diminuer la morphine pour limiter les effets indésirables", "Proposer uniquement de la relaxation"], correct: 1, corrige: "Une douleur intense malgré le traitement de fond justifie l'administration d'une interdose (entredose) d'opioïde à libération immédiate selon prescription, sa traçabilité et la réévaluation. Les douleurs répétées conduisent à réévaluer le traitement de fond." },
      { q: "Quels éléments de prise en charge globale mettez-vous en œuvre ?", type: "open", corrige: "Évaluation régulière de la douleur (échelles adaptées, dont hétéro-évaluation si besoin : Algoplus), surveillance des effets indésirables des opioïdes (constipation à prévenir, somnolence, nausées, fréquence respiratoire), prise en charge de l'anxiété, accompagnement relationnel et écoute, confort (installation, soins de bouche, soins de support), soutien de la famille, approche pluridisciplinaire, respect des directives anticipées et de la démarche éthique." },
      { q: "Quelle surveillance spécifique liée aux opioïdes ne faut-il pas négliger ?", type: "qcm", options: ["La glycémie", "La fréquence respiratoire, la sédation et le transit (prévention de la constipation)", "La pression artérielle uniquement", "La température"], correct: 1, corrige: "Sous opioïdes : surveiller la fréquence respiratoire et le niveau de sédation (dépression respiratoire), et prévenir systématiquement la constipation par des laxatifs. Surveillance aussi des nausées et de la rétention urinaire." }
    ],
    demarche: "Évaluation et soulagement de la douleur (interdoses, réévaluation du traitement de fond), prévention/surveillance des effets indésirables des opioïdes, prise en charge globale du confort et de l'anxiété, accompagnement du patient et de la famille dans une démarche éthique et pluridisciplinaire."
  },
  {
    id: "cas_had_domicile",
    ueId: "3.2",
    titre: "Plaie chronique à domicile (HAD)",
    niveau: "1ʳᵉ–2ᵉ année",
    contexte: "Hospitalisation à domicile (HAD). Vous réalisez la visite avec l'IDE libéral.",
    situation: "Mme Roux, 78 ans, diabétique et artéritique, vit seule. Elle présente un ulcère de jambe et une escarre talonnière au stade 2. Elle se mobilise peu, mange peu (dénutrition débutante), et la maison est encombrée. La plaie talonnière est rouge, désépidermisée, douloureuse.",
    questions: [
      { q: "Quel est le principe de base de la prévention d'aggravation de l'escarre ?", type: "qcm", options: ["Masser la rougeur énergiquement", "Supprimer l'appui sur la zone et mettre en décharge le talon", "Appliquer de l'eau chaude", "Limiter les apports en protéines"], correct: 1, corrige: "La mise en décharge (suppression de l'appui) est la mesure essentielle face à une escarre. On ne masse jamais une rougeur. On associe une bonne nutrition (protéines), l'hydratation cutanée, les changements de position et un support adapté." },
      { q: "Quels axes de prise en charge globale identifiez-vous à domicile ?", type: "open", corrige: "Soins de plaie selon protocole et type de plaie (détersion, pansement adapté, asepsie), mise en décharge et matériel de prévention, évaluation et prise en charge nutritionnelle (dénutrition, apports protéino-caloriques), évaluation de la douleur, surveillance de l'état vasculaire (artérite : avis sur la compression), éducation de la patiente, coordination pluriprofessionnelle (médecin, diététicien, kiné, aide à domicile), sécurité et adaptation du domicile, surveillance du diabète." },
      { q: "Diagnostic infirmier prioritaire (PES) ?", type: "open", corrige: "« Atteinte de l'intégrité de la peau liée à l'immobilité, la dénutrition et l'artériopathie, se manifestant par une escarre talonnière de stade 2 et un ulcère de jambe. » Priorité : décharge, soins de plaie, nutrition, surveillance vasculaire. Risque associé : infection." }
    ],
    demarche: "Évaluation globale au domicile (plaie, nutrition, autonomie, environnement, vascularisation), mise en décharge, soins de plaie adaptés, prise en charge nutritionnelle et de la douleur, éducation et coordination pluriprofessionnelle, surveillance du diabète et prévention de l'infection."
  },
  {
    id: "cas_geriatrie_deshydratation",
    ueId: "2.7",
    titre: "Personne âgée confuse et déshydratée",
    niveau: "1ʳᵉ–2ᵉ année",
    contexte: "Service de gériatrie aiguë. Vous prenez en charge la patiente avec l'IDE.",
    situation: "Mme Faure, 88 ans, est hospitalisée en période de canicule pour confusion d'apparition récente. Elle a le pli cutané persistant, les muqueuses sèches, une langue rôtie, une oligurie avec urines foncées, FC 102/min, PA 100/60 mmHg (couchée). Elle est somnolente et boit peu spontanément.",
    questions: [
      { q: "Quels signes orientent vers une déshydratation ?", type: "qcm", options: ["Pli cutané persistant, muqueuses sèches, oligurie, urines foncées", "Œdèmes des membres inférieurs", "Hypertension franche", "Prise de poids rapide"], correct: 0, corrige: "Le pli cutané persistant, la sécheresse des muqueuses, l'oligurie avec urines foncées et la tachycardie évoquent une déshydratation, fréquente et grave chez la personne âgée, pouvant se manifester par une confusion." },
      { q: "Quelles actions et surveillances infirmières mettez-vous en place ?", type: "open", corrige: "Réhydratation per os fractionnée et stimulée (et/ou IV sur prescription), surveillance des entrées/sorties (diurèse, aspect des urines), surveillance du poids, des constantes, de l'état de conscience et de la confusion, surveillance cutanée et muqueuse, environnement frais, prévention des chutes liée à la confusion, recherche de la cause (canicule, traitements, fièvre), bilan biologique (ionogramme, fonction rénale). Traçabilité des apports hydriques." },
      { q: "Pourquoi la personne âgée est-elle particulièrement à risque de déshydratation ?", type: "qcm", options: ["Elle boit trop", "La sensation de soif est diminuée et les réserves hydriques réduites", "Elle élimine moins l'eau", "Elle a une meilleure régulation thermique"], correct: 1, corrige: "Chez la personne âgée, la sensation de soif est diminuée, la masse hydrique corporelle et la capacité de concentration des urines sont réduites, ce qui majore le risque de déshydratation, surtout en cas de chaleur, fièvre ou diarrhée." }
    ],
    demarche: "Reconnaître la déshydratation (cause fréquente de confusion chez le sujet âgé), réhydrater (per os fractionnée, IV si besoin), surveiller les entrées/sorties, le poids, la conscience et le ionogramme, prévenir les chutes et traiter la cause. Adapter l'environnement en période de canicule."
  },
  {
    id: "cas_urgences_avc",
    ueId: "2.7",
    titre: "Suspicion d'AVC aux urgences",
    niveau: "2ᵉ–3ᵉ année",
    contexte: "Service d'accueil des urgences. Vous accueillez le patient amené par les pompiers.",
    situation: "Mme Morel, 67 ans, présente depuis 1 heure une faiblesse brutale du bras et de la jambe droits, une déviation de la bouche et des difficultés à parler. Heure de début des symptômes connue et récente. Constantes : PA 172/95 mmHg, FC 84/min, glycémie 1,1 g/L, SpO2 96 %.",
    questions: [
      { q: "Pourquoi l'heure de début des symptômes est-elle cruciale ?", type: "qcm", options: ["Pour les statistiques du service", "Parce qu'elle conditionne l'éligibilité à la thrombolyse/thrombectomie", "Pour calculer la durée d'hospitalisation", "Parce qu'elle n'a pas d'importance"], correct: 1, corrige: "L'AVC ischémique est une urgence : « time is brain ». L'heure exacte du début des symptômes conditionne l'éligibilité à la reperfusion (thrombolyse, thrombectomie) dans une fenêtre thérapeutique. Toute suspicion impose une imagerie cérébrale en urgence." },
      { q: "Quelles actions infirmières prioritaires mettez-vous en place ?", type: "open", corrige: "Alerter immédiatement (filière AVC / médecin), surveillance neurologique répétée (score, vigilance, déficit, pupilles), constantes (PA à respecter selon protocole, FC, SpO2), glycémie, mise à jeun strict (risque de troubles de déglutition / fausse route), pose de VVP, ECG, préparation au scanner/IRM en urgence, ne pas faire boire/manger, position adaptée, recueil de l'heure de début et des traitements (anticoagulants). Traçabilité." },
      { q: "Quel risque immédiat impose la mise à jeun ?", type: "qcm", options: ["Le risque hémorragique", "Le risque de fausse route lié aux troubles de la déglutition", "Le risque allergique", "Le risque infectieux"], correct: 1, corrige: "L'AVC peut entraîner des troubles de la déglutition exposant à la fausse route et à la pneumopathie d'inhalation. La mise à jeun est maintenue tant que la déglutition n'a pas été évaluée comme sûre." }
    ],
    demarche: "Reconnaître les signes d'AVC, déclencher la filière AVC en urgence (imagerie immédiate), recueillir l'heure de début, surveiller l'état neurologique et les constantes, maintenir à jeun (risque de fausse route), préparer le transfert. Gain de temps = enjeu pronostique."
  },
  {
    id: "cas_med_pyelo",
    ueId: "2.10",
    titre: "Fièvre et risque infectieux en médecine",
    niveau: "1ʳᵉ–2ᵉ année",
    contexte: "Service de médecine. Vous prenez en charge la patiente avec l'IDE.",
    situation: "Mme Dubois, 45 ans, est hospitalisée pour une pyélonéphrite aiguë. Elle présente une fièvre à 39,2 °C avec frissons, des douleurs lombaires droites, des brûlures mictionnelles et des urines troubles. FC 110/min, PA 105/65 mmHg, FR 22/min. Une antibiothérapie IV et des hémocultures sont prescrites.",
    questions: [
      { q: "Dans quel ordre réaliser les prélèvements et l'antibiothérapie ?", type: "qcm", options: ["Démarrer l'antibiotique puis faire les hémocultures", "Réaliser les hémocultures (idéalement lors d'un pic fébrile) AVANT la première dose d'antibiotique", "Faire seulement l'antibiotique, les hémocultures sont inutiles", "Attendre 24 h avant tout prélèvement"], correct: 1, corrige: "Les hémocultures (et l'ECBU) doivent être prélevées AVANT le début de l'antibiothérapie, idéalement au moment des frissons/pic fébrile, pour ne pas négativer les cultures. L'antibiotique est ensuite administré sans retard." },
      { q: "Quelles surveillances mettez-vous en place ?", type: "open", corrige: "Surveillance de la température et de la courbe thermique, des constantes (FC, PA, FR, SpO2) pour dépister un sepsis, surveillance de la douleur, des signes urinaires, de la diurèse et de l'aspect des urines, surveillance de l'efficacité et de la tolérance de l'antibiothérapie (allergie, effets indésirables), hydratation, traçabilité des prélèvements et résultats. Dépister les signes d'aggravation vers le sepsis (hypotension, marbrures, confusion)." },
      { q: "Quels signes feraient craindre une évolution vers un sepsis grave ?", type: "qcm", options: ["Une légère baisse de la fièvre", "Hypotension, marbrures, confusion, oligurie, tachypnée", "Une augmentation de l'appétit", "Une diminution de la fréquence cardiaque"], correct: 1, corrige: "Hypotension persistante, marbrures, troubles de conscience, oligurie et polypnée traduisent une défaillance d'organe et un sepsis grave imposant une réévaluation médicale urgente et une prise en charge intensifiée." }
    ],
    demarche: "Prélever hémocultures et ECBU avant l'antibiothérapie (au pic fébrile), administrer l'antibiotique sans retard, surveiller la température, les constantes et la diurèse, dépister le sepsis, assurer l'hydratation et le confort, tracer les prélèvements et la tolérance du traitement."
  }
];
