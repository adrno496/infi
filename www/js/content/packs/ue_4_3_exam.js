export const cas = [
  {
    id: "ue_4_3_exam_arret_cardio_respiratoire",
    ueId: "4.3",
    titre: "Arrêt cardio-respiratoire en service de médecine",
    niveau: "Examen",
    contexte: "Vous êtes IDE de jour dans un service de médecine polyvalente. Il est 14h. Vous entrez dans la chambre de M. D. pour un soin programmé.",
    situation: "M. D., 68 ans, est hospitalisé depuis 3 jours pour décompensation cardiaque. Antécédents : infarctus du myocarde il y a 5 ans, hypertension artérielle, diabète de type 2, tabagisme sevré. Traitement en cours : bêtabloquant, IEC, diurétique de l'anse, antiagrégant plaquettaire. En entrant dans la chambre, vous le trouvez affaissé dans son fauteuil, immobile. Vous l'appelez et le secouez doucement par les épaules : aucune réponse. Vous ouvrez les voies aériennes (bascule prudente de la tête, élévation du menton) et observez : pas de mouvement thoracique, pas de respiration normale (quelques gasps), pas de toux. Le chariot d'urgence et le DAE sont disponibles dans le couloir.",
    questions: [
      {
        q: "Décrivez, dans l'ordre chronologique, les premières actions de la chaîne de survie que vous devez réaliser face à ce patient inconscient qui ne respire pas normalement.",
        type: "open",
        corrige: "1) Reconnaître l'arrêt cardio-respiratoire : patient inconscient (ne répond pas), ne respire pas normalement (gasps = signe d'ACR, ne pas confondre avec une respiration efficace) sur moins de 10 secondes. 2) Alerter immédiatement : déclencher l'alarme / appeler à l'aide, faire prévenir le médecin et l'équipe de réanimation (numéro d'urgence intra-hospitalier), demander d'apporter le chariot d'urgence et le DAE. 3) Débuter sans délai la réanimation cardio-pulmonaire (RCP) par les compressions thoraciques. 4) Mettre en place le DAE dès son arrivée. La précocité de la RCP et de la défibrillation conditionne le pronostic. Chaque minute sans RCP diminue les chances de survie d'environ 10 %."
      },
      {
        q: "Précisez les modalités techniques des compressions thoraciques chez l'adulte (localisation, fréquence, profondeur, rapport compressions/insufflations).",
        type: "open",
        corrige: "Localisation : au centre du thorax, sur la moitié inférieure du sternum, talon d'une main, l'autre main par-dessus, bras tendus à la verticale. Fréquence : 100 à 120 compressions par minute. Profondeur : 5 à 6 cm chez l'adulte. Relâchement complet entre chaque compression (décompression thoracique passive) sans décoller les mains. Rapport : 30 compressions pour 2 insufflations en l'absence de dispositif avancé. Minimiser les interruptions (No-flow time). Relais des intervenants toutes les 2 minutes pour limiter la fatigue et garder des compressions efficaces."
      },
      {
        q: "Le DAE est posé et délivre le message : « Choc recommandé ». Quelle est votre conduite ?",
        type: "open",
        corrige: "S'assurer que personne ne touche le patient (annoncer clairement « écartez-vous », contrôle visuel), s'écarter soi-même, puis appuyer sur le bouton de choc lorsque l'appareil l'indique. Immédiatement après le choc, reprendre la RCP (compressions) sans attendre, pendant 2 minutes, jusqu'à la prochaine analyse du DAE. Ne pas perdre de temps à rechercher le pouls juste après le choc. Poursuivre le cycle analyse / choc éventuel / 2 min de RCP jusqu'à l'arrivée de l'équipe de réanimation ou la reprise d'une activité circulatoire."
      },
      {
        q: "Parmi ces rythmes, lequel est choquable (justifiant une défibrillation par le DAE) ?",
        type: "qcm",
        options: ["Asystolie", "Fibrillation ventriculaire", "Activité électrique sans pouls", "Bradycardie sinusale"],
        correct: 1,
        corrige: "La fibrillation ventriculaire (FV) et la tachycardie ventriculaire sans pouls sont les rythmes choquables. L'asystolie et l'activité électrique sans pouls (dissociation électromécanique) ne sont PAS choquables : elles relèvent de la RCP et de l'adrénaline. La bradycardie sinusale n'est pas un rythme d'arrêt."
      },
      {
        q: "Quel est le délai maximal recommandé pour reconnaître l'arrêt cardio-respiratoire avant de débuter la RCP ?",
        type: "qcm",
        options: ["Moins de 10 secondes", "30 secondes", "1 minute", "2 minutes"],
        correct: 0,
        corrige: "La reconnaissance de l'ACR (absence de réponse + absence de respiration normale) doit se faire en moins de 10 secondes. La recherche du pouls n'est plus exigée du sauveteur et ne doit pas retarder la RCP : en cas de doute, on débute la RCP."
      }
    ],
    demarche: "Reconnaissance rapide de l'ACR (< 10 s) > alerte immédiate (médecin, équipe de réa, chariot d'urgence + DAE) > RCP précoce 30/2 par compressions efficaces (100-120/min, 5-6 cm) > défibrillation dès que possible si rythme choquable > poursuite des cycles de 2 min avec relais > préparation de la voie veineuse et des thérapeutiques (adrénaline) pour l'équipe médicale > traçabilité et accompagnement de l'équipe. Le jury attend la maîtrise de la chaîne de survie et la priorité absolue donnée aux compressions et à la défibrillation précoce."
  },
  {
    id: "ue_4_3_exam_choc_anaphylactique",
    ueId: "4.3",
    titre: "Choc anaphylactique après injection d'antibiotique",
    niveau: "Examen",
    contexte: "Vous êtes IDE en service de chirurgie. Vous venez d'administrer, sur prescription, une perfusion d'antibiotique (amoxicilline) à une patiente en post-opératoire.",
    situation: "Mme L., 42 ans, opérée la veille d'une cholécystectomie. Aucun antécédent d'allergie connu déclaré à l'entrée. Cinq minutes après le début de la perfusion d'amoxicilline, elle vous signale une sensation de malaise, des démangeaisons et une oppression thoracique. Vous constatez : éruption urticarienne diffuse, œdème des lèvres et du visage, voix modifiée, dyspnée avec sifflement. Constantes : TA 75/40 mmHg, FC 130/min, SpO2 88 % en air ambiant, marbrures aux genoux, patiente angoissée et agitée.",
    questions: [
      {
        q: "Quel est votre diagnostic infirmier de la situation et sur quels signes cliniques vous appuyez-vous ?",
        type: "open",
        corrige: "Il s'agit d'un choc anaphylactique (réaction d'hypersensibilité immédiate, ici probablement de grade 3) lié à l'injection d'amoxicilline. Arguments : chronologie évocatrice (survenue dans les minutes suivant l'injection d'un bêta-lactamine) ; signes cutanéo-muqueux (urticaire, œdème de Quincke des lèvres et du visage) ; signes respiratoires (dyspnée, sifflement / bronchospasme, modification de la voix faisant craindre un œdème laryngé, désaturation à 88 %) ; signes cardiovasculaires de choc (hypotension 75/40, tachycardie 130, marbrures = défaillance circulatoire). C'est une urgence vitale immédiate."
      },
      {
        q: "Énoncez, par ordre de priorité, les actions à mettre en œuvre immédiatement (rôle propre et collaboration).",
        type: "open",
        corrige: "1) ARRÊTER immédiatement la perfusion d'antibiotique (supprimer l'allergène) tout en conservant la voie veineuse. 2) Appeler à l'aide / déclencher l'alerte, prévenir le médecin et l'équipe d'urgence sans quitter la patiente. 3) Position : allonger la patiente, surélever les membres inférieurs (position de choc) sauf détresse respiratoire majeure qui impose la position demi-assise. 4) Oxygénothérapie à fort débit (masque haute concentration, 10-15 L/min) pour corriger l'hypoxie. 5) Préparer / administrer sur prescription l'ADRÉNALINE (traitement de référence, en IM en première intention) et le remplissage vasculaire par cristalloïdes. 6) Surveillance continue (scope, TA, FC, SpO2). 7) Tracer l'heure et anticiper la déclaration de pharmacovigilance."
      },
      {
        q: "Quel est le médicament de première intention dans le choc anaphylactique et sa voie d'administration de référence ?",
        type: "qcm",
        options: ["Corticoïdes en IV", "Adrénaline en intramusculaire", "Antihistaminiques en IV", "Salbutamol en aérosol"],
        correct: 1,
        corrige: "L'adrénaline est le traitement de première intention et de référence du choc anaphylactique, administrée par voie intramusculaire (face antéro-externe de la cuisse) en première intention. Les corticoïdes et antihistaminiques sont des traitements adjuvants de seconde ligne (action retardée, prévention des récidives) et ne remplacent jamais l'adrénaline. Le salbutamol traite le bronchospasme associé mais reste secondaire."
      },
      {
        q: "Quelle position installez-vous chez cette patiente présentant une hypotension sévère mais aussi une détresse respiratoire ?",
        type: "open",
        corrige: "La position de choc (décubitus dorsal, jambes surélevées) est recommandée pour favoriser le retour veineux et améliorer la pression artérielle. Cependant, en présence d'une détresse respiratoire importante avec œdème laryngé et désaturation, la patiente sera plus à l'aise en position demi-assise pour faciliter la ventilation. On adapte donc à la priorité vitale dominante : si l'hypotension domine, position allongée jambes surélevées ; si la détresse respiratoire domine et qu'elle ne tolère pas l'allongement, position demi-assise. Ne jamais asseoir ni lever brutalement un patient en choc anaphylactique (risque de désamorçage / arrêt cardiaque)."
      },
      {
        q: "Citez les éléments de surveillance et de traçabilité que vous devez assurer dans la suite immédiate de la prise en charge.",
        type: "open",
        corrige: "Surveillance rapprochée et continue : TA, FC, fréquence respiratoire et SpO2 (scope), conscience, état cutané (régression de l'urticaire et de l'œdème), diurèse, efficacité du traitement et apparition éventuelle d'une réaction biphasique (récidive possible dans les heures suivantes, justifiant une surveillance prolongée). Traçabilité : heure exacte de début des symptômes, médicament suspecté et lot, heure d'arrêt de la perfusion, actions et thérapeutiques administrées avec horaires, évolution des constantes, transmission ciblée écrite et orale. Déclaration de pharmacovigilance et information du patient / notification de l'allergie dans le dossier (contre-indication future aux bêta-lactamines)."
      }
    ],
    demarche: "Reconnaître l'urgence vitale (choc anaphylactique) > arrêter l'allergène en gardant la voie veineuse > alerter > position adaptée + O2 fort débit > adrénaline IM sur prescription + remplissage > surveillance scopée continue + dépistage de la réaction biphasique > traçabilité, pharmacovigilance et signalement de l'allergie. Le jury valorise la priorisation (arrêt de l'allergène et adrénaline avant tout) et la connaissance que corticoïdes/antihistaminiques ne sont pas le traitement d'urgence."
  },
  {
    id: "ue_4_3_exam_detresse_respiratoire_aigue",
    ueId: "4.3",
    titre: "Détresse respiratoire aiguë chez un patient BPCO",
    niveau: "Examen",
    contexte: "Vous êtes IDE de nuit en service de pneumologie. À 3h, l'aide-soignante vous appelle en urgence dans la chambre d'un patient qui « respire très mal ».",
    situation: "M. R., 74 ans, hospitalisé pour exacerbation de BPCO. Antécédents : BPCO post-tabagique sévère sous oxygénothérapie au long cours (1,5 L/min), insuffisance cardiaque droite. À votre arrivée : patient assis au bord du lit, penché en avant, en sueur, très angoissé, ne pouvant prononcer que quelques mots. Vous observez : tirage sus-claviculaire et intercostal, battement des ailes du nez, cyanose des lèvres, balancement thoraco-abdominal. Constantes : FR 32/min, SpO2 80 % sous 1,5 L/min d'O2, FC 118/min, TA 158/92 mmHg, T 37,8 °C. Le patient est somnolent par moments.",
    questions: [
      {
        q: "Identifiez et classez les signes de gravité (signes de lutte, signes de faillite, retentissement) présentés par ce patient.",
        type: "open",
        corrige: "Signes de lutte (mécanismes de compensation) : polypnée à 32/min, tirage sus-claviculaire et intercostal, battement des ailes du nez. Signes de faillite / d'épuisement respiratoire : balancement thoraco-abdominal (respiration paradoxale), impossibilité de parler (quelques mots seulement), sueurs. Signes de retentissement / d'hypoxie-hypercapnie : cyanose des lèvres, désaturation à 80 %, tachycardie 118, hypertension, troubles de la conscience (somnolence par moments) évoquant une hypercapnie et un risque d'épuisement imminent. L'ensemble témoigne d'une détresse respiratoire aiguë grave avec signe d'épuisement = urgence vitale."
      },
      {
        q: "Quelles sont vos actions immédiates de rôle propre et en collaboration ? Précisez votre attitude particulière vis-à-vis de l'oxygénothérapie chez ce patient BPCO.",
        type: "open",
        corrige: "Rester auprès du patient, le rassurer, l'installer en position assise / demi-assise (penché en avant, qu'il a spontanément adoptée) pour optimiser la mécanique ventilatoire. Faire appeler le médecin / l'équipe en urgence par l'aide-soignante. Surveillance scopée : SpO2, FR, FC, TA, conscience. Adapter l'oxygénothérapie : chez le BPCO insuffisant respiratoire chronique, l'objectif de SpO2 est cible 88-92 % (et non 100 %) car un débit d'O2 excessif peut majorer l'hypercapnie et la dépression respiratoire ; ici la SpO2 est à 80 %, on augmente prudemment l'oxygène par paliers, sur prescription, sous surveillance rapprochée de la conscience, plutôt qu'un fort débit aveugle. Préparer le matériel d'aérosolthérapie (bronchodilatateurs), la VNI et anticiper un transfert en réanimation. Réaliser un gaz du sang sur prescription. Tracer."
      },
      {
        q: "Quelle est la cible de saturation en oxygène (SpO2) recommandée chez ce patient BPCO insuffisant respiratoire chronique ?",
        type: "qcm",
        options: ["88 à 92 %", "Supérieure à 95 %", "100 %", "Supérieure à 98 %"],
        correct: 0,
        corrige: "Chez le patient BPCO insuffisant respiratoire chronique hypercapnique, la cible de SpO2 est 88 à 92 %. Un excès d'oxygène expose au risque d'aggravation de l'hypercapnie (effet sur la commande ventilatoire et effet Haldane), pouvant conduire à une narcose au CO2. Chez le patient sans risque hypercapnique, la cible usuelle est plutôt 94-98 %."
      },
      {
        q: "Le balancement thoraco-abdominal observé chez ce patient signe :",
        type: "qcm",
        options: ["Une simple anxiété", "Un épuisement des muscles respiratoires", "Une amélioration de la ventilation", "Une douleur thoracique"],
        correct: 1,
        corrige: "Le balancement thoraco-abdominal (respiration paradoxale : abdomen et thorax se déplacent en sens inverse) traduit un épuisement des muscles respiratoires, en particulier du diaphragme. C'est un signe de gravité majeur annonçant une faillite ventilatoire imminente et imposant une prise en charge urgente (VNI, voire ventilation invasive)."
      },
      {
        q: "Quels éléments de surveillance vont vous permettre d'évaluer l'efficacité de la prise en charge et de dépister une aggravation ?",
        type: "open",
        corrige: "Surveillance continue et rapprochée : fréquence respiratoire (diminution = amélioration), SpO2 (remontée vers la cible 88-92 %), régression des signes de lutte (tirage, balancement), coloration (disparition de la cyanose), FC et TA. Surveillance neurologique +++ : état de conscience et vigilance (la somnolence, l'obnubilation ou l'agitation peuvent signer une hypercapnie croissante / narcose au CO2). Capacité à parler, tolérance de l'effort respiratoire. Contrôle des gaz du sang sur prescription (pH, PaCO2, PaO2). Tracer l'évolution des constantes et des thérapeutiques, transmettre toute aggravation au médecin (épuisement, troubles de conscience) pour décision de VNI ou de réanimation."
      }
    ],
    demarche: "Reconnaître la détresse respiratoire aiguë grave et ses signes d'épuisement > rassurer et installer en position assise > alerter le médecin > oxygénothérapie titrée avec cible 88-92 % (spécificité BPCO) sous surveillance neurologique > préparer aérosols, VNI et gaz du sang > surveillance scopée et neurologique rapprochée > anticiper le transfert en réanimation > traçabilité. Le jury attend la distinction lutte/faillite et la prudence sur l'oxygène chez le BPCO hypercapnique."
  },
  {
    id: "ue_4_3_exam_choc_hemorragique",
    ueId: "4.3",
    titre: "Choc hémorragique sur hémorragie digestive",
    niveau: "Examen",
    contexte: "Vous êtes IDE aux urgences. Un patient est amené par les pompiers pour vomissements de sang. Vous assurez l'accueil et la prise en charge initiale en collaboration avec le médecin.",
    situation: "M. B., 56 ans, est adressé pour hématémèse abondante survenue à domicile. Antécédents : cirrhose éthylique connue, hypertension portale, prise d'anti-inflammatoires non stéroïdiens récente pour lombalgie. À l'arrivée : patient pâle, extrémités froides, marbrures, sueurs, soif intense, anxieux et ralenti. Constantes : TA 78/45 mmHg, FC 125/min filant, FR 26/min, SpO2 96 %, temps de recoloration cutanée allongé (> 3 s). Il présente une nouvelle hématémèse de sang rouge devant vous.",
    questions: [
      {
        q: "Identifiez le tableau clinique et précisez les signes cliniques de choc hypovolémique présentés par ce patient.",
        type: "open",
        corrige: "Il s'agit d'un choc hémorragique (hypovolémique) secondaire à une hémorragie digestive haute (hématémèse), très probablement par rupture de varices œsophagiennes sur hypertension portale, favorisée par les AINS. Signes de choc : hypotension artérielle (78/45), tachycardie compensatrice à 125 filante, polypnée à 26, signes de vasoconstriction périphérique et d'hypoperfusion (pâleur, extrémités froides, marbrures, temps de recoloration > 3 s, sueurs), soif intense (hypovolémie), troubles neurologiques débutants (anxiété, ralentissement = souffrance cérébrale par bas débit). C'est une urgence vitale immédiate."
      },
      {
        q: "Décrivez votre prise en charge immédiate. Que mettez-vous en place sur le plan des abords veineux et du remplissage (rôle sur prescription) ?",
        type: "open",
        corrige: "Alerter / mobiliser le médecin et l'équipe immédiatement. Position : allonger le patient, jambes surélevées (position de choc / Trendelenburg), protéger les voies aériennes vis-à-vis du risque d'inhalation lors des vomissements (position latérale de sécurité ou tête sur le côté, aspiration prête). Oxygénothérapie. Poser DEUX voies veineuses périphériques de gros calibre (14-16 G) pour permettre un remplissage rapide. Débuter le remplissage vasculaire par cristalloïdes sur prescription. Prélever en urgence le bilan : NFS, groupe sanguin / Rhésus, RAI, bilan de coagulation (TP-TCA, fibrinogène), pour commander des culots globulaires (transfusion). Monitorage scopé (TA, FC, SpO2). Anticiper les drogues vasoactives, la sonde naso-gastrique et la fibroscopie digestive en urgence. Réchauffer le patient. Tracer."
      },
      {
        q: "Pour assurer un remplissage vasculaire efficace, quel type de voie veineuse périphérique privilégiez-vous ?",
        type: "qcm",
        options: ["Une voie de petit calibre (24 G)", "Deux voies de gros calibre (14-16 G)", "Une seule voie de 22 G", "Aucune voie, on attend la transfusion"],
        correct: 1,
        corrige: "On privilégie deux voies veineuses périphériques de gros calibre (14 à 16 G). Le débit de perfusion est proportionnel au calibre (loi de Poiseuille) : un gros cathéter court permet un remplissage rapide indispensable dans le choc hémorragique. Plusieurs abords permettent de mener simultanément remplissage, transfusion et thérapeutiques."
      },
      {
        q: "Quel bilan sanguin est indispensable à prélever en urgence en vue d'une transfusion ?",
        type: "qcm",
        options: ["Glycémie et ionogramme seuls", "Groupe sanguin, Rhésus et RAI", "Bilan hépatique seul", "Aucun, la transfusion est immédiate"],
        correct: 1,
        corrige: "Le groupe sanguin, le Rhésus et la recherche d'agglutinines irrégulières (RAI) sont indispensables et préalables à la transfusion de culots globulaires (sécurité transfusionnelle). On y associe NFS-plaquettes et bilan de coagulation. En extrême urgence vitale, du sang O négatif peut être délivré, mais les prélèvements doivent être réalisés au plus tôt."
      },
      {
        q: "Quels paramètres de surveillance vont vous permettre d'évaluer l'efficacité du remplissage et de la prise en charge ?",
        type: "open",
        corrige: "Surveillance hémodynamique rapprochée et continue : pression artérielle (remontée), fréquence cardiaque (ralentissement de la tachycardie = amélioration), temps de recoloration cutanée, régression des marbrures, recoloration des téguments, réchauffement des extrémités. Surveillance de la conscience (amélioration de la vigilance = meilleure perfusion cérébrale). Diurèse horaire (sonde urinaire) : la reprise d'une diurèse > 0,5 mL/kg/h témoigne d'une perfusion rénale rétablie. Surveillance de l'hémorragie : répétition et abondance des hématémèses / melæna. Surveillance biologique : hémoglobine de contrôle, lactates. Surveillance de la tolérance de la transfusion. Traçabilité horodatée et transmission de toute aggravation."
      }
    ],
    demarche: "Reconnaître le choc hémorragique et son origine (hémorragie digestive sur hypertension portale) > alerter > position de choc + protection des voies aériennes + O2 > deux voies de gros calibre + remplissage par cristalloïdes sur prescription > bilan en urgence (groupe, Rhésus, RAI, NFS, coagulation) et commande de culots > monitorage scopé et diurèse horaire > anticiper drogues vasoactives, SNG et fibroscopie hémostatique > surveillance de l'efficacité (TA, FC, TRC, diurèse, conscience) et de l'hémorragie > traçabilité. Le jury attend la priorisation abords/remplissage/transfusion et la surveillance de l'efficacité par des critères de perfusion."
  }
];
