export const fiches = [
  { id: "fco_4_3_signes_gravite", ueId: "4.3", type: "cours",
    titre: "Repérer les signes de gravité en urgence",
    resume: "Identifier rapidement les signes de gravité respiratoires, circulatoires et neurologiques pour prioriser la prise en charge.",
    tags: ["d'après tes cours","signes de gravité","urgence"],
    html: `<h3>Pourquoi évaluer la gravité ?</h3><p>Devant toute situation d'urgence, l'infirmier·e doit d'abord repérer les <span class="key" data-term="signes de gravité">signes de gravité</span> pour prioriser et alerter le médecin.</p>
<h3>Signes respiratoires</h3><ul><li>Polypnée (FR élevée, ex. 31/min) ou bradypnée</li><li>Respiration <strong>douloureuse, superficielle ou bruyante</strong></li><li>Signes de lutte : tirage, balancement thoraco-abdominal, bruits expiratoires</li><li><span class="key" data-term="cyanose">Cyanose</span> des extrémités, marbrures</li><li>SaO² qui chute, gêne à s'exprimer, patient assis au bord du lit</li></ul>
<h3>Signes circulatoires</h3><ul><li>Tachycardie (ex. pouls 120/min) ou bradycardie</li><li>Hypotension (ex. TA 85/56 mmHg)</li><li>Pâleur, marbrures, sueurs, allongement du temps de recoloration</li><li>Hémocue / Hb abaissée témoignant d'un saignement</li></ul>
<h3>Signes neurologiques</h3><ul><li>Score de Glasgow abaissé</li><li>Agitation, confusion, angoisse, délire</li><li>Sensation de mort imminente</li></ul>
<div class="callout"><div class="callout-t">À retenir</div>L'association hypotension + tachycardie + pâleur oriente vers un choc hémorragique ; cyanose + tirage + désaturation vers une détresse respiratoire.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« Regarde, écoute, touche » : couleur (pâleur/cyanose/marbrures), respiration (bruits/FR), pouls et TA — les 3 fonctions vitales d'abord.</div>`,
    refs: ["D'après tes cours (UE 4.3)"] },

  { id: "fco_4_3_avp_polytrauma", ueId: "4.3", type: "cours",
    titre: "Prise en charge du polytraumatisé (AVP)",
    resume: "Démarche de prise en charge d'un blessé grave d'accident de la voie publique, du bilan à l'immobilisation et au traitement.",
    tags: ["d'après tes cours","polytraumatisme","AVP","SMUR"],
    html: `<h3>Contexte</h3><p>Accident de la voie publique (AVP) avec victime grave : intervention du <span class="key" data-term="SMUR">SMUR</span> (Structure Mobile d'Urgence et de Réanimation), déclenché par le SAMU.</p>
<h3>Bilan clinique et paraclinique</h3><ul><li>Constantes : FR, SaO², pouls, TA, température, Glasgow</li><li><span class="key" data-term="hémocue">Hémocue</span> (Hb), glycémie capillaire</li><li>Recherche de plaies, déformations, douleurs (EVA)</li></ul>
<h3>Hypothèses lésionnelles à connaître</h3><ul><li>Fracture du fémur (déformation + gonflement de cuisse, EVA 9/10)</li><li>Fracture de côtes</li><li><span class="key" data-term="pneumothorax">Pneumothorax</span> ou hémothorax (douleur thoracique, respiration douloureuse)</li></ul>
<h3>Problèmes de santé priorisés</h3><table class="tbl"><tr><th>Problème</th><th>Arguments</th></tr><tr><td>Détresse respiratoire</td><td>Pouls 120, polypnée 31, TA basse, respi superficielle</td></tr><tr><td>Choc hémorragique</td><td>TA basse + tachycardie, Hb 10 g/dl, pâleur, suspicion fracture fémur/pneumothorax</td></tr><tr><td>Douleur</td><td>EVA 9/10 jambe, 7/10 thorax</td></tr><tr><td>Anxiété</td><td>« ne comprend pas, a peur »</td></tr><tr><td>Risques infectieux / hypothermie</td><td>Plaies face et main ; T 36°C, mois de février</td></tr></table>
<h3>Actions et thérapeutiques</h3><ul><li><strong>2 VVP</strong> : remplissage (augmenter la volémie, remonter la TA), morphine IV et noradrénaline séparées</li><li><strong>Remplissage</strong> pour soutenir l'hémodynamique et la perfusion des organes</li><li>Bilans : NFS, ionogramme, bilan de coagulation (référence, hémorragie, dilution)</li><li><strong>Antalgie</strong> : morphine IV ; Hypnovel + kétamine si insuffisant et pour mobilisation ; bloc fémoral à la ropivacaïne</li><li>Cardioscope, O2 12 L (FR 31, respi superficielle), surveillance neurologique</li><li><span class="key" data-term="immobilisation">Immobilisation</span> : collier cervical, matelas à dépression, attelle de traction, ceinture pelvienne (risque fracture du bassin)</li><li>Protection des plaies (infection + AES), couverture de survie</li><li><span class="key" data-term="Exacyl">Exacyl</span> (acide tranexamique, antifibrinolytique) pour limiter le saignement</li></ul>
<div class="callout"><div class="callout-t">À retenir</div>Chez le polytraumatisé : on traite en parallèle l'hémodynamique (remplissage, noradré, Exacyl), la douleur, la ventilation et on immobilise tout le rachis et les foyers de fracture.</div>`,
    refs: ["D'après tes cours (UE 4.3)"] },

  { id: "fco_4_3_reanimation", ueId: "4.3", type: "cours",
    titre: "Surveillance d'un patient en réanimation",
    resume: "Spécificités de la prise en charge en réanimation : ventilation, sédation, prévention des complications.",
    tags: ["d'après tes cours","réanimation","ventilation","sédation"],
    html: `<h3>Le patient de réanimation</h3><p>Patient intubé/ventilé, sédaté (ex. <span class="key" data-term="fentanyl">fentanyl</span> + Hypnovel au PSE pour la douleur), porteur de multiples dispositifs : sonde naso-gastrique, sonde urinaire, picc line, redon.</p>
<h3>Ventilation mécanique</h3><ul><li>Ventilation très paramétrée pour limiter les lésions pulmonaires induites par les réglages</li><li><strong>Volume courant</strong> choisi selon taille, poids et sexe</li><li><span class="key" data-term="PEEP">PEEP</span> (pression expiratoire positive) : évite que le poumon se ferme (lésion)</li><li><span class="key" data-term="FiO2">FiO2</span> : réglage de la fraction d'air/oxygène délivrée</li><li>Plus la durée de ventilation est longue, plus le risque respiratoire augmente</li></ul>
<h3>Surveillance de la sédation</h3><div class="callout"><div class="callout-t">À retenir</div>Le score de <span class="key" data-term="RASS">RASS</span> (Richmond Agitation Sedation Scale) évalue le niveau de vigilance/agitation et guide l'adaptation de la sédation.</div>
<h3>Problèmes et risques à surveiller</h3><table class="tbl"><tr><th>Risque</th><th>Arguments / surveillance</th></tr><tr><td>Douleur</td><td>Plaies, modifications du scope → fentanyl, Hypnovel, Perfalgan, Profénid, score RASS</td></tr><tr><td>Perturbation respiratoire</td><td>Sédation, pneumothorax → réglage respirateur, radio pulmonaire</td></tr><tr><td>Infectieux</td><td>Plaies, opération, picc line, redon → T°, surveillance redon, ATB</td></tr><tr><td>Hémorragique / anémie</td><td>Hb 9,5, contusion hépatique → TA, pouls, pâleur</td></tr><tr><td>Rénal</td><td>Choc hypovolémique, rhabdomyolyse (CPK 426) → entrées/sorties, urée, créat, iono, CPK</td></tr><tr><td>Thrombo-embolique / escarre</td><td>Alitement → mobilisation, prévention</td></tr><tr><td>Extubation accidentelle</td><td>Surveillance fixation de la sonde</td></tr></table>
<h3>Soins associés</h3><ul><li>Radio pulmonaire de contrôle pour vérifier la position de la sonde d'intubation</li><li>Aspiration bronchique si sécrétions</li><li>Communication avec le patient même endormi, accompagnement de la famille, soins en binôme AS/IDE</li></ul>`,
    refs: ["D'après tes cours (UE 4.3)"] },

  { id: "fco_4_3_sepsis_choc_septique", ueId: "4.3", type: "cours",
    titre: "Sepsis et choc septique",
    resume: "Reconnaître un sepsis, comprendre son évolution vers le choc septique et la conduite à tenir.",
    tags: ["d'après tes cours","sepsis","choc septique","infection"],
    html: `<h3>Qu'est-ce que le sepsis ?</h3><p>Le <span class="key" data-term="sepsis">sepsis</span> survient lorsque des bactéries pénètrent dans le sang, à partir d'une infection (dents, poumons, streptocoque A…).</p>
<h3>Comment le détecter ?</h3><ul><li>Fièvre, frissons</li><li>Difficulté à respirer</li><li>Confusion (« n'a plus les idées claires »)</li></ul>
<h3>Évolution et gravité</h3><ul><li>Le sang qui coagule peut provoquer une nécrose (ex. des doigts) car les cellules meurent</li><li>Taux de mortalité élevé (jusqu'à 60 %)</li><li>Le <span class="key" data-term="choc septique">choc septique</span> est le stade le plus grave : les reins lâchent, le système immunitaire devient hyperactif et empoisonne l'organisme</li></ul>
<h3>Signes du choc septique (cas clinique)</h3><table class="tbl"><tr><th>Signe</th><th>Valeur</th></tr><tr><td>TA</td><td>85/56 mmHg</td></tr><tr><td>FC</td><td>128/min</td></tr><tr><td>Température</td><td>39,1°C, sueurs, frissons</td></tr><tr><td>Neuro</td><td>Agitation, confusion</td></tr></table>
<h3>Conduite à tenir</h3><ul><li><strong>Hémocultures</strong> (avant ou avec l'ATB)</li><li><strong>Remplissage</strong> vasculaire</li><li><strong>Antibiothérapie</strong></li><li>Réfection du pansement / surveillance du redon</li></ul>
<div class="callout"><div class="callout-t">À retenir</div>Devant fièvre + hypotension + tachycardie + confusion : penser sepsis. Le trio hémocultures – remplissage – antibiothérapie est prioritaire.</div>`,
    refs: ["D'après tes cours (UE 4.3)"] },

  { id: "fco_4_3_detresse_respi_oap", ueId: "4.3", type: "cours",
    titre: "Détresse respiratoire et OAP",
    resume: "Prise en charge d'une décompensation respiratoire et d'un œdème aigu du poumon sur surinfection.",
    tags: ["d'après tes cours","détresse respiratoire","OAP","oxygénothérapie"],
    html: `<h3>Contexte clinique</h3><p>Patient âgé, pneumopathie bilatérale, antécédents de <span class="key" data-term="BPCO">BPCO</span>, infarctus, insuffisance cardiaque, HTA. Diagnostic : <span class="key" data-term="OAP">OAP</span> (œdème aigu du poumon) dans un contexte de surinfection.</p>
<h3>Signes de gravité</h3><ul><li>Gêne respiratoire, difficulté à s'exprimer</li><li>Cyanose des extrémités</li><li>Patient assis au bord du lit (orthopnée)</li><li>Toux</li></ul>
<h3>Premiers gestes IDE</h3><ul><li>Prendre les constantes (SaO², FR, FC, TA)</li><li>O2 (jusqu'à 15 L en urgence), position demi-assise</li><li>Surveillance des signes de lutte et de la conscience</li><li>TILT / ECG si douleur thoracique, alerter le médecin, tracer, réassurer</li></ul>
<h3>Prescriptions et arguments</h3><table class="tbl"><tr><th>Prescription</th><th>Objectif</th></tr><tr><td>Oxygénothérapie 6 L/min (masque simple)</td><td>SaO² > 95 %, oxygéner les tissus ; bonne mise en place, humidificateur, pas de corps gras sur les lèvres (risque de brûlure)</td></tr><tr><td>Aérosol de <span class="key" data-term="Bricanyl">Bricanyl</span> (5–6 L)</td><td>Favoriser l'expectoration, améliorer l'hématose ; faire tousser et moucher</td></tr><tr><td>Furosémide 80 mg IV direct</td><td>Diurèse → diminuer la surcharge liquidienne pulmonaire ; surveiller diurèse, œdèmes, hypotension (effet secondaire), iono</td></tr><tr><td>Gazométrie</td><td>pH, PaO2, PaCO2, réserve alcaline, bicarbonates ; test d'Allen, seringue héparinée, noter si sous O2, compression 10 min</td></tr><tr><td>Hémocultures si T > 38,5°C</td><td>Rechercher le germe, antibiogramme pour adapter le traitement (flacon aérobie vert / anaérobie orange)</td></tr></table>
<div class="callout"><div class="callout-t">À retenir</div>OAP : oxygène + position demi-assise + diurétique (furosémide). On surveille toujours la diurèse, la SaO² et la tolérance hémodynamique du Lasilix.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Gazométrie : toujours le <strong>test d'Allen</strong> avant la ponction radiale, seringue <strong>héparinée</strong>, et <strong>compression 10 min</strong> après.</div>`,
    refs: ["D'après tes cours (UE 4.3)"] },

  { id: "fco_4_3_douleur_thoracique_sca", ueId: "4.3", type: "cours",
    titre: "Douleur thoracique et syndrome coronarien",
    resume: "Conduite à tenir devant une douleur thoracique évocatrice d'un syndrome coronarien aigu.",
    tags: ["d'après tes cours","douleur thoracique","ECG","trinitrine"],
    html: `<h3>Signes évocateurs</h3><ul><li>Douleur thoracique « en étau », serrement dans la poitrine</li><li>Irradiation dans le bras gauche</li><li>Pâleur, sueurs</li><li><span class="key" data-term="sensation de mort imminente">Sensation de mort imminente</span>, faciès crispé</li><li>Antécédent d'angor</li></ul>
<h3>Problèmes priorisés</h3><table class="tbl"><tr><th>Problème</th><th>Arguments</th></tr><tr><td>Douleur thoracique</td><td>Douleur en étau, sensation de mort imminente</td></tr><tr><td>Anxiété</td><td>Faciès crispé, antécédent d'angor</td></tr></table>
<h3>Conduite à tenir IDE</h3><ul><li><span class="key" data-term="TILT">TILT</span> : faire préciser la douleur (localisation, type, irradiation, durée…)</li><li>Allonger le patient, prise des constantes</li><li><strong>ECG</strong> rapidement</li><li>Soulager la douleur</li><li>Administrer la <span class="key" data-term="trinitrine">trinitrine</span> sur prescription</li></ul>
<div class="callout"><div class="callout-t">À retenir</div>Toute douleur thoracique constrictive irradiant au bras gauche avec sueurs = urgence : ECG immédiat, allonger, constantes, antalgie et trinitrine sur prescription.</div>`,
    refs: ["D'après tes cours (UE 4.3)"] },

  { id: "fco_4_3_afgsu_sse", ueId: "4.3", type: "cours",
    titre: "AFGSU et Situations Sanitaires Exceptionnelles",
    resume: "Cadre de l'AFGSU et notions de situations sanitaires exceptionnelles.",
    tags: ["d'après tes cours","AFGSU","SSE"],
    html: `<h3>L'AFGSU</h3><p>L'<span class="key" data-term="AFGSU">AFGSU</span> est l'Attestation de Formation aux Gestes et Soins d'Urgence. Elle forme les professionnels à reconnaître une urgence et à réaliser les gestes adaptés.</p>
<h3>Situations Sanitaires Exceptionnelles (SSE)</h3><p>Les <span class="key" data-term="SSE">Situations Sanitaires Exceptionnelles</span> désignent des événements pouvant désorganiser le système de soins (afflux massif de victimes, catastrophes…) et relèvent d'une organisation spécifique.</p>
<div class="callout"><div class="callout-t">À retenir</div>L'AFGSU prépare aux gestes d'urgence du quotidien et aux situations sanitaires exceptionnelles ; sa validité doit être maintenue à jour.</div>`,
    refs: ["D'après tes cours (UE 4.3)"] },
];

export const qcm = [
  { ueId: "4.3", q: "Que signifie l'acronyme AFGSU ?", options: ["Attestation de Formation aux Gestes et Soins d'Urgence","Association Française de Gestion des Soins d'Urgence","Aide aux Formations Générales en Soins d'Urgence","Attestation Fonctionnelle de Gestes Spécialisés d'Urgence"], correct: 0,
    explication: "AFGSU = Attestation de Formation aux Gestes et Soins d'Urgence.", ref: "UE 4.3", diff: 1 },
  { ueId: "4.3", q: "Que signifie SMUR ?", options: ["Service Médical d'Urgence Régional","Structure Mobile d'Urgence et de Réanimation","Soins Mobiles d'Urgence en Réanimation","Système de Mobilisation d'Urgence et de Réanimation"], correct: 1,
    explication: "SMUR = Structure Mobile d'Urgence et de Réanimation, engagée par le SAMU.", ref: "UE 4.3", diff: 1 },
  { ueId: "4.3", q: "Quelle association de signes oriente vers un choc hémorragique ?", options: ["Bradycardie + hypertension","Hypotension + tachycardie + pâleur","Fièvre + bradypnée","Hypertension + cyanose isolée"], correct: 1,
    explication: "L'hypotension (TA 85/56) associée à une tachycardie (120/min) et à la pâleur évoque un choc hémorragique.", ref: "UE 4.3", diff: 2 },
  { ueId: "4.3", q: "Devant une suspicion de fracture du fémur après AVP, quel dispositif d'immobilisation est cité ?", options: ["Collier cervical","Attelle de traction","Ceinture pelvienne","Plâtre circulaire"], correct: 1,
    explication: "L'attelle de traction immobilise et réduit la douleur d'une fracture de fémur.", ref: "UE 4.3", diff: 2 },
  { ueId: "4.3", q: "À quoi sert l'Exacyl chez un polytraumatisé hémorragique ?", options: ["Antalgique morphinique","Antifibrinolytique pour limiter le saignement","Remplissage vasculaire","Antibiotique"], correct: 1,
    explication: "L'Exacyl (acide tranexamique) est un antifibrinolytique qui aide à arrêter le saignement.", ref: "UE 4.3", diff: 2 },
  { ueId: "4.3", q: "Pourquoi pose-t-on un remplissage vasculaire chez Mme R. ?", options: ["Pour diminuer la TA","Pour augmenter la volémie et remonter la TA","Pour faire uriner","Pour sédater la patiente"], correct: 1,
    explication: "Le remplissage augmente la volémie, remonte la TA et favorise la perfusion des organes.", ref: "UE 4.3", diff: 1 },
  { ueId: "4.3", q: "À quoi sert la PEEP en ventilation mécanique ?", options: ["Augmenter la fréquence respiratoire","Éviter que le poumon se ferme (collapsus alvéolaire)","Régler la fraction d'oxygène","Mesurer la pression artérielle"], correct: 1,
    explication: "La PEEP (pression expiratoire positive) maintient les alvéoles ouvertes et évite la lésion liée à leur fermeture.", ref: "UE 4.3", diff: 2 },
  { ueId: "4.3", q: "Que mesure le score de RASS en réanimation ?", options: ["La douleur","Le niveau de vigilance et d'agitation (sédation)","La diurèse","Le risque d'escarre"], correct: 1,
    explication: "Le RASS (Richmond Agitation Sedation Scale) évalue le niveau de vigilance/agitation et guide la sédation.", ref: "UE 4.3", diff: 1 },
  { ueId: "4.3", q: "Pourquoi réaliser une radio pulmonaire au retour de bloc chez un patient intubé ?", options: ["Pour vérifier le bon positionnement de la sonde d'intubation","Pour mesurer la diurèse","Pour évaluer la douleur","Pour rechercher une fracture"], correct: 0,
    explication: "La radio de contrôle vérifie que la sonde d'intubation est bien placée.", ref: "UE 4.3", diff: 1 },
  { ueId: "4.3", q: "Quels signes permettent de détecter un sepsis ?", options: ["Fièvre, frissons, difficulté à respirer, confusion","Hypothermie isolée et hypertension","Bradycardie et somnolence","Polyurie et soif"], correct: 0,
    explication: "Le sepsis se manifeste par fièvre, frissons, difficulté à respirer et des idées qui ne sont plus claires (confusion).", ref: "UE 4.3", diff: 1 },
  { ueId: "4.3", q: "Qu'est-ce que le choc septique ?", options: ["Une réaction allergique aiguë","Le stade le plus grave de l'infection avec défaillance d'organes (reins)","Un arrêt cardiaque par électrocution","Une simple poussée fébrile"], correct: 1,
    explication: "Le choc septique est le stade le plus grave : les reins lâchent et le système immunitaire empoisonne l'organisme.", ref: "UE 4.3", diff: 2 },
  { ueId: "4.3", q: "Quelle est la conduite prioritaire devant un choc septique ?", options: ["Aérosol de Bricanyl seul","Hémocultures, remplissage et antibiothérapie","Trinitrine sublinguale","Furosémide à fortes doses"], correct: 1,
    explication: "Le choc septique impose hémocultures, remplissage vasculaire et antibiothérapie.", ref: "UE 4.3", diff: 2 },
  { ueId: "4.3", q: "Quel diagnostic est posé chez Mr L. (pneumopathie bilatérale, ATCD cardiaques) ?", options: ["Pneumothorax","OAP dans un contexte de surinfection","Embolie pulmonaire","Infarctus du myocarde"], correct: 1,
    explication: "Le médecin diagnostique un œdème aigu du poumon (OAP) sur un contexte de surinfection.", ref: "UE 4.3", diff: 2 },
  { ueId: "4.3", q: "Pourquoi prescrit-on du furosémide dans l'OAP ?", options: ["Pour soulager la douleur","Pour diminuer la surcharge liquidienne pulmonaire par la diurèse","Pour augmenter la TA","Pour fluidifier les sécrétions"], correct: 1,
    explication: "Le furosémide fait uriner et diminue la surcharge liquidienne dans les poumons.", ref: "UE 4.3", diff: 1 },
  { ueId: "4.3", q: "Quel effet secondaire du furosémide faut-il surveiller ?", options: ["Hypertension","Hypotension","Hyperthermie","Bradycardie"], correct: 1,
    explication: "Le furosémide, par la diurèse, peut entraîner une hypotension à surveiller.", ref: "UE 4.3", diff: 2 },
  { ueId: "4.3", q: "À quoi sert l'aérosol de Bricanyl ?", options: ["Diminuer la diurèse","Favoriser l'expectoration et améliorer l'hématose","Augmenter la TA","Sédater le patient"], correct: 1,
    explication: "Le Bricanyl favorise l'expectoration et améliore l'hématose (échanges gazeux).", ref: "UE 4.3", diff: 1 },
  { ueId: "4.3", q: "Que recherche-t-on dans une gazométrie artérielle ?", options: ["pH, PaO2, PaCO2, bicarbonates","Hémoglobine et plaquettes","Glycémie et lipides","Créatinine et urée uniquement"], correct: 0,
    explication: "La gazométrie analyse pH, PaO2, PaCO2, réserve alcaline et bicarbonates.", ref: "UE 4.3", diff: 2 },
  { ueId: "4.3", q: "Quel test précède une ponction artérielle radiale ?", options: ["Le test d'Allen","Le test de Glasgow","Le test de Romberg","Le test d'effort"], correct: 0,
    explication: "Le test d'Allen vérifie la perméabilité de la circulation collatérale avant la ponction radiale.", ref: "UE 4.3", diff: 2 },
  { ueId: "4.3", q: "Pourquoi ne pas mettre de corps gras sur les lèvres sous oxygénothérapie ?", options: ["Cela bouche le masque","Risque de brûlure","Cela diminue la SaO²","Cela favorise l'infection"], correct: 1,
    explication: "Les corps gras présentent un risque de brûlure en présence d'oxygène.", ref: "UE 4.3", diff: 2 },
  { ueId: "4.3", q: "Quels signes évoquent un syndrome coronarien aigu ?", options: ["Douleur thoracique en étau irradiant au bras gauche, sueurs, mort imminente","Douleur abdominale isolée","Céphalées et photophobie","Douleur du mollet à la marche"], correct: 0,
    explication: "La douleur thoracique constrictive irradiant au bras gauche avec sueurs et sensation de mort imminente évoque un SCA.", ref: "UE 4.3", diff: 1 },
  { ueId: "4.3", q: "Quel examen est prioritaire devant une douleur thoracique ?", options: ["Radio du genou","ECG","EEG","Échographie abdominale"], correct: 1,
    explication: "L'ECG est l'examen prioritaire devant une douleur thoracique suspecte.", ref: "UE 4.3", diff: 1 },
  { ueId: "4.3", q: "Quel traitement est administré sur prescription dans la douleur thoracique d'origine coronarienne ?", options: ["Furosémide","Trinitrine","Bricanyl","Exacyl"], correct: 1,
    explication: "La trinitrine est administrée sur prescription pour la douleur thoracique d'origine coronarienne.", ref: "UE 4.3", diff: 1 },
  { ueId: "4.3", q: "Que désigne la cyanose des extrémités ?", options: ["Un signe de bonne oxygénation","Un signe de détresse (mauvaise oxygénation)","Une déshydratation","Une hypothermie isolée"], correct: 1,
    explication: "La cyanose des extrémités traduit une mauvaise oxygénation et constitue un signe de gravité respiratoire.", ref: "UE 4.3", diff: 1 },
  { ueId: "4.3", q: "Pourquoi pose-t-on 2 VVP chez Mme R. ?", options: ["Pour gagner du temps uniquement","Pour séparer remplissage et morphine/noradrénaline en cas de dégradation","Pour prélever du sang plus vite","Pour réaliser une transfusion obligatoire"], correct: 1,
    explication: "Deux VVP permettent de gérer en parallèle le remplissage et les médicaments (morphine, noradrénaline) en cas de dégradation.", ref: "UE 4.3", diff: 2 },
  { ueId: "4.3", q: "Quel élément du bilan rénal est surveillé en cas de rhabdomyolyse ?", options: ["Les CPK","Les plaquettes","La glycémie","Le fibrinogène"], correct: 0,
    explication: "Les CPK (ici 426) sont surveillées en cas de rhabdomyolyse, avec urée, créatinine et ionogramme.", ref: "UE 4.3", diff: 2 },
];

export const flashcards = [
  { ueId: "4.3", recto: "Que signifie AFGSU ?", verso: "Attestation de Formation aux Gestes et Soins d'Urgence." },
  { ueId: "4.3", recto: "Que signifie SMUR ?", verso: "Structure Mobile d'Urgence et de Réanimation." },
  { ueId: "4.3", recto: "Trois signes de gravité respiratoire ?", verso: "Polypnée/respi superficielle, signes de lutte (tirage, balancement), cyanose/marbrures et désaturation." },
  { ueId: "4.3", recto: "Signes évoquant un choc hémorragique ?", verso: "Hypotension + tachycardie + pâleur, avec Hb abaissée." },
  { ueId: "4.3", recto: "Rôle de l'Exacyl chez un polytraumatisé ?", verso: "Antifibrinolytique (acide tranexamique) pour limiter le saignement." },
  { ueId: "4.3", recto: "But du remplissage vasculaire ?", verso: "Augmenter la volémie, remonter la TA et perfuser les organes." },
  { ueId: "4.3", recto: "Dispositifs d'immobilisation après AVP ?", verso: "Collier cervical, matelas à dépression, attelle de traction, ceinture pelvienne." },
  { ueId: "4.3", recto: "Rôle de la PEEP en ventilation ?", verso: "Éviter que le poumon se ferme (collapsus alvéolaire = lésion)." },
  { ueId: "4.3", recto: "Que mesure le score de RASS ?", verso: "Le niveau de vigilance et d'agitation (sédation)." },
  { ueId: "4.3", recto: "Pourquoi une radio pulmonaire chez un patient intubé ?", verso: "Vérifier le bon positionnement de la sonde d'intubation." },
  { ueId: "4.3", recto: "Signes de détection d'un sepsis ?", verso: "Fièvre, frissons, difficulté à respirer, confusion." },
  { ueId: "4.3", recto: "Définition du choc septique ?", verso: "Stade le plus grave de l'infection : défaillance des reins, système immunitaire qui empoisonne l'organisme." },
  { ueId: "4.3", recto: "Trio prioritaire dans le choc septique ?", verso: "Hémocultures, remplissage, antibiothérapie." },
  { ueId: "4.3", recto: "Pourquoi le furosémide dans l'OAP ?", verso: "Faire uriner pour diminuer la surcharge liquidienne pulmonaire." },
  { ueId: "4.3", recto: "Rôle de l'aérosol de Bricanyl ?", verso: "Favoriser l'expectoration et améliorer l'hématose." },
  { ueId: "4.3", recto: "Que recherche la gazométrie ?", verso: "pH, PaO2, PaCO2, réserve alcaline et bicarbonates." },
  { ueId: "4.3", recto: "Test avant ponction artérielle radiale ?", verso: "Le test d'Allen." },
  { ueId: "4.3", recto: "Signes évoquant un syndrome coronarien aigu ?", verso: "Douleur thoracique en étau irradiant au bras gauche, sueurs, pâleur, sensation de mort imminente." },
  { ueId: "4.3", recto: "Examen prioritaire devant une douleur thoracique ?", verso: "L'ECG." },
  { ueId: "4.3", recto: "Traitement sur prescription de la douleur coronarienne ?", verso: "La trinitrine." },
  { ueId: "4.3", recto: "Que surveille-t-on en cas de rhabdomyolyse ?", verso: "Les CPK, avec urée, créatinine et ionogramme (fonction rénale)." },
];
