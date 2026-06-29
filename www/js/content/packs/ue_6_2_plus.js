export const fiches = [
  { id: "fx_ue_6_2_plus_communication_patient", ueId: "6.2", type: "cours",
    titre: "Anglais soignant : communiquer avec le patient", resume: "Phrases-clés et registre courtois pour l'accueil, l'évaluation et les soins en anglais.",
    tags: ["communication","patient","phrases"],
    html: `<p>En contexte de soins, l'anglais privilégie un registre <strong>poli et rassurant</strong>. On préfère les formes modales (<em>could you, would you, may I</em>) aux impératifs secs, jugés brusques pour un patient.</p>
<h3>Accueil et identification</h3>
<ul>
<li><span class="key" data-term="What is your name?">What is your name?</span> — Quel est votre nom ?</li>
<li><strong>Can you tell me your date of birth?</strong> — Pouvez-vous me dire votre date de naissance ? (vérification d'identité)</li>
<li><strong>How are you feeling today?</strong> — Comment vous sentez-vous aujourd'hui ?</li>
</ul>
<h3>Évaluation de la douleur</h3>
<p>L'évaluation repose souvent sur une échelle numérique : <span class="key" data-term="pain scale">pain scale</span>.</p>
<ul>
<li><strong>Where does it hurt?</strong> — Où avez-vous mal ?</li>
<li><strong>On a scale from 0 to 10, how bad is the pain?</strong> — Sur une échelle de 0 à 10, quelle est l'intensité de la douleur ?</li>
<li><strong>Is the pain sharp, dull or throbbing?</strong> — La douleur est-elle aiguë, sourde ou pulsatile ?</li>
</ul>
<h3>Annoncer un soin</h3>
<table class="tbl">
<tr><th>Anglais</th><th>Français</th></tr>
<tr><td>I am going to take your blood pressure</td><td>Je vais prendre votre tension</td></tr>
<tr><td>This may sting a little</td><td>Cela peut piquer un peu</td></tr>
<tr><td>Please take a deep breath</td><td>Inspirez profondément, s'il vous plaît</td></tr>
<tr><td>Roll up your sleeve, please</td><td>Remontez votre manche, s'il vous plaît</td></tr>
</table>
<div class="callout"><div class="callout-t">Registre professionnel</div>Évitez l'impératif nu (<em>Sit down!</em>). Préférez <strong>Please have a seat</strong> ou <strong>Could you sit down, please?</strong> : plus respectueux du patient.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>SCALE</strong> pour la douleur : <strong>S</strong>ite (où), <strong>C</strong>haracter (type), <strong>A</strong>ggravating factors, <strong>L</strong>evel 0-10, <strong>E</strong>ase (ce qui soulage).</div>`,
    refs: ["IFSI UE 6.2 - Anglais","Référentiel infirmier 2009"] },

  { id: "fx_ue_6_2_plus_vocabulaire_corps_pathos", ueId: "6.2", type: "cours",
    titre: "Vocabulaire : corps, symptômes et pathologies", resume: "Lexique anatomique et clinique anglais essentiel pour l'infirmier.",
    tags: ["vocabulaire","anatomie","symptômes"],
    html: `<p>Le vocabulaire médical anglais distingue souvent un terme <strong>courant</strong> (patient) d'un terme <strong>savant</strong> d'origine gréco-latine (dossier médical), proche du français.</p>
<h3>Anatomie (courant / savant)</h3>
<table class="tbl">
<tr><th>Courant</th><th>Savant</th><th>Français</th></tr>
<tr><td>heart</td><td>cardiac</td><td>cœur</td></tr>
<tr><td>lung</td><td>pulmonary</td><td>poumon</td></tr>
<tr><td>kidney</td><td>renal</td><td>rein</td></tr>
<tr><td>liver</td><td>hepatic</td><td>foie</td></tr>
<tr><td>bowel / gut</td><td>intestinal</td><td>intestin</td></tr>
</table>
<h3>Symptômes fréquents</h3>
<ul>
<li><span class="key" data-term="shortness of breath">shortness of breath</span> (SOB) — essoufflement / dyspnée</li>
<li><strong>nausea</strong> — nausée ; <strong>to feel sick</strong> — avoir la nausée (attention : <em>sick</em> peut signifier « vomir » en anglais britannique)</li>
<li><strong>dizziness</strong> — vertige / étourdissement</li>
<li><strong>chest pain</strong> — douleur thoracique</li>
<li><strong>swelling</strong> — gonflement / œdème</li>
</ul>
<h3>Quelques pathologies</h3>
<ul>
<li><strong>stroke</strong> — accident vasculaire cérébral (AVC)</li>
<li><strong>heart attack</strong> — infarctus du myocarde</li>
<li><strong>high blood pressure</strong> — hypertension artérielle</li>
<li><strong>diabetes</strong> — diabète ; <strong>blood sugar</strong> — glycémie</li>
</ul>
<div class="callout"><div class="callout-t">Faux-amis à connaître</div><strong>Drug</strong> = médicament (et non « drogue » uniquement). <strong>Intoxication</strong> en anglais évoque souvent l'ivresse. <strong>Surgery</strong> = intervention chirurgicale mais aussi cabinet du médecin généraliste (GB).</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Les adjectifs savants finissent souvent en <strong>-ac / -al / -ic</strong> : cardi<strong>ac</strong>, ren<strong>al</strong>, hepat<strong>ic</strong> — proches du français, donc faciles à reconnaître.</div>`,
    refs: ["IFSI UE 6.2 - Anglais","Glossaire médical NHS"] },

  { id: "fx_ue_6_2_plus_abreviations_documents", ueId: "6.2", type: "cours",
    titre: "Abréviations médicales anglaises et lecture de documents", resume: "Décoder les abréviations anglo-saxonnes courantes des dossiers de soins.",
    tags: ["abréviations","documents","sigles"],
    html: `<p>Les dossiers anglo-saxons utilisent de nombreuses abréviations. En savoir lire les principales permet de comprendre une prescription ou un compte-rendu.</p>
<h3>Signes vitaux et examen</h3>
<table class="tbl">
<tr><th>Abrév.</th><th>Signification</th><th>Français</th></tr>
<tr><td>BP</td><td>blood pressure</td><td>tension artérielle</td></tr>
<tr><td>HR</td><td>heart rate</td><td>fréquence cardiaque</td></tr>
<tr><td>RR</td><td>respiratory rate</td><td>fréquence respiratoire</td></tr>
<tr><td>SpO₂</td><td>oxygen saturation</td><td>saturation en oxygène</td></tr>
<tr><td>BMI</td><td>body mass index</td><td>indice de masse corporelle</td></tr>
</table>
<h3>Prescription</h3>
<table class="tbl">
<tr><th>Abrév.</th><th>Latin / sens</th><th>Français</th></tr>
<tr><td>PO</td><td>per os</td><td>par voie orale</td></tr>
<tr><td>IV</td><td>intravenous</td><td>intraveineux</td></tr>
<tr><td>IM</td><td>intramuscular</td><td>intramusculaire</td></tr>
<tr><td>PRN</td><td>pro re nata</td><td>si besoin</td></tr>
<tr><td>BD / BID</td><td>bis in die</td><td>deux fois par jour</td></tr>
<tr><td>TDS / TID</td><td>ter in die</td><td>trois fois par jour</td></tr>
<tr><td>OD</td><td>omni die / once daily</td><td>une fois par jour</td></tr>
</table>
<h3>Sigles cliniques</h3>
<ul>
<li><span class="key" data-term="NPO">NPO / NBM</span> — nil per os / nil by mouth : à jeun</li>
<li><strong>Hx</strong> — history (antécédents) ; <strong>Dx</strong> — diagnosis ; <strong>Tx</strong> — treatment ; <strong>Rx</strong> — prescription</li>
<li><strong>SOB</strong> — shortness of breath ; <strong>N&V</strong> — nausea and vomiting</li>
<li><strong>DOB</strong> — date of birth</li>
</ul>
<div class="callout"><div class="callout-t">Sécurité du patient</div>Certaines abréviations sont jugées dangereuses (risque d'erreur). Ex. : <strong>OD</strong> peut signifier « once daily » ou « œil droit » (oculus dexter). En cas de doute, toujours clarifier auprès du prescripteur.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Les <strong>-DS</strong> latins comptent les prises : <strong>B</strong>D = 2 (bis), <strong>T</strong>DS = 3 (ter), <strong>Q</strong>DS = 4 (quater).</div>`,
    refs: ["IFSI UE 6.2 - Anglais","NHS abbreviations guide","BNF - dosing"] },
];

export const qcm = [
  { ueId: "6.2", q: "Que signifie l'abréviation « PRN » sur une prescription anglo-saxonne ?", options: ["Par voie orale","Si besoin","Trois fois par jour","À jeun"], correct: 1,
    explication: "PRN vient du latin « pro re nata » et signifie « si besoin / à la demande ». C'est l'équivalent du « si besoin » français sur une prescription.", ref: "BNF - dosing", diff: 2 },

  { ueId: "6.2", q: "Comment dit-on « essoufflement / dyspnée » en anglais courant ?", options: ["Chest pain","Shortness of breath","Dizziness","Swelling"], correct: 1,
    explication: "« Shortness of breath » (abrégé SOB) désigne l'essoufflement. Chest pain = douleur thoracique, dizziness = vertige, swelling = gonflement.", ref: "Glossaire médical NHS", diff: 1 },

  { ueId: "6.2", q: "L'adjectif savant correspondant au rein est :", options: ["Hepatic","Cardiac","Renal","Pulmonary"], correct: 2,
    explication: "« Renal » qualifie ce qui est relatif au rein (kidney). Hepatic = foie, cardiac = cœur, pulmonary = poumon.", ref: "Glossaire médical NHS", diff: 1 },

  { ueId: "6.2", q: "Que signifie « NBM » (ou NPO) dans un dossier de soins ?", options: ["Nouveau bilan médical","À jeun (rien par la bouche)","Tension non mesurée","Bilan sanguin normal"], correct: 1,
    explication: "NBM = « nil by mouth » et NPO = « nil per os » : le patient doit rester à jeun, par exemple avant une intervention.", ref: "NHS abbreviations guide", diff: 2 },

  { ueId: "6.2", q: "Quelle formule est la plus appropriée pour demander poliment à un patient de s'asseoir ?", options: ["Sit down!","Please have a seat","You sit","Sitting now"], correct: 1,
    explication: "« Please have a seat » (ou « Could you sit down, please? ») est courtois. L'impératif nu « Sit down! » est perçu comme brusque en contexte de soin.", ref: "IFSI UE 6.2 - Anglais", diff: 1 },

  { ueId: "6.2", q: "« BD » (ou BID) sur une prescription signifie :", options: ["Une fois par jour","Deux fois par jour","Trois fois par jour","Quatre fois par jour"], correct: 1,
    explication: "BD/BID vient de « bis in die » = deux fois par jour. OD = 1 fois (once daily), TDS = 3 fois, QDS = 4 fois.", ref: "BNF - dosing", diff: 2 },

  { ueId: "6.2", q: "Comment traduire « Where does it hurt? »", options: ["Depuis quand avez-vous mal ?","Où avez-vous mal ?","Avez-vous très mal ?","Qu'est-ce qui vous soulage ?"], correct: 1,
    explication: "« Where does it hurt? » = « Où avez-vous mal ? ». C'est une question d'évaluation de la localisation de la douleur.", ref: "IFSI UE 6.2 - Anglais", diff: 1 },

  { ueId: "6.2", q: "Le faux-ami « drug » se traduit le plus souvent en contexte de soin par :", options: ["Drogue uniquement","Médicament","Perfusion","Pansement"], correct: 1,
    explication: "« Drug » signifie médicament (drug administration = administration médicamenteuse). Le sens « drogue illicite » existe mais n'est pas le sens principal en soin.", ref: "IFSI UE 6.2 - Anglais", diff: 2 },

  { ueId: "6.2", q: "Que signifie l'abréviation « Hx » dans un dossier anglais ?", options: ["Traitement","Diagnostic","Antécédents / histoire","Prescription"], correct: 2,
    explication: "Hx = history (antécédents). Dx = diagnosis, Tx = treatment, Rx = prescription.", ref: "NHS abbreviations guide", diff: 2 },

  { ueId: "6.2", q: "« This may sting a little » s'utilise pour :", options: ["Annoncer un repas","Prévenir d'une légère piqûre/sensation","Demander la tension","Annoncer une sortie"], correct: 1,
    explication: "« This may sting a little » = « Cela peut piquer un peu » : on prévient le patient d'une sensation désagréable brève, par exemple avant une injection.", ref: "IFSI UE 6.2 - Anglais", diff: 1 },

  { ueId: "6.2", q: "« Blood sugar » correspond en français à :", options: ["Pression artérielle","Glycémie","Saturation","Température"], correct: 1,
    explication: "« Blood sugar » (ou blood glucose) = glycémie, le taux de sucre dans le sang, surveillé chez le patient diabétique.", ref: "Glossaire médical NHS", diff: 1 },

  { ueId: "6.2", q: "Sur une échelle de douleur, « On a scale from 0 to 10 » demande au patient :", options: ["Sa température","La localisation de la douleur","L'intensité chiffrée de la douleur","Sa fréquence cardiaque"], correct: 2,
    explication: "Cette phrase invite le patient à coter l'intensité de sa douleur de 0 (aucune) à 10 (maximale), sur une échelle numérique.", ref: "IFSI UE 6.2 - Anglais", diff: 1 },

  { ueId: "6.2", q: "Que signifie « stroke » ?", options: ["Infarctus du myocarde","Accident vasculaire cérébral","Crise d'asthme","Insuffisance rénale"], correct: 1,
    explication: "« Stroke » = accident vasculaire cérébral (AVC). L'infarctus du myocarde se dit « heart attack » (ou myocardial infarction).", ref: "Glossaire médical NHS", diff: 2 },

  { ueId: "6.2", q: "L'abréviation « IV » désigne la voie :", options: ["Orale","Intraveineuse","Intramusculaire","Sous-cutanée"], correct: 1,
    explication: "IV = intravenous, voie intraveineuse. PO = orale, IM = intramusculaire, SC = sous-cutanée.", ref: "BNF - dosing", diff: 1 },

  { ueId: "6.2", q: "Pourquoi l'abréviation « OD » est-elle considérée comme à risque ?", options: ["Elle n'existe pas","Elle peut signifier « once daily » ou « œil droit »","Elle veut dire surdosage uniquement","Elle est interdite partout"], correct: 1,
    explication: "OD peut signifier « once daily » (une fois par jour) ou « oculus dexter » (œil droit). Cette ambiguïté impose de clarifier la prescription pour éviter une erreur.", ref: "NHS abbreviations guide", diff: 3 },

  { ueId: "6.2", q: "Comment demander à un patient de respirer profondément ?", options: ["Hold your breath","Please take a deep breath","Stop breathing","Breathe out only"], correct: 1,
    explication: "« Please take a deep breath » = « Inspirez profondément ». « Hold your breath » = retenez votre souffle, utile mais différent.", ref: "IFSI UE 6.2 - Anglais", diff: 1 },

  { ueId: "6.2", q: "« Swelling » correspond à quel signe clinique ?", options: ["Fièvre","Gonflement / œdème","Saignement","Démangeaison"], correct: 1,
    explication: "« Swelling » = gonflement, souvent traduit par œdème selon le contexte. La fièvre = fever, le saignement = bleeding, la démangeaison = itching.", ref: "Glossaire médical NHS", diff: 1 },

  { ueId: "6.2", q: "Que signifie « TDS » sur une prescription ?", options: ["Deux fois par jour","Trois fois par jour","Le soir","À jeun"], correct: 1,
    explication: "TDS (ou TID) = « ter in die » = trois fois par jour. C'est l'une des abréviations latines de fréquence de prise.", ref: "BNF - dosing", diff: 2 },

  { ueId: "6.2", q: "L'abréviation « SpO₂ » mesure :", options: ["La glycémie","La saturation en oxygène","La tension artérielle","La température"], correct: 1,
    explication: "SpO₂ = oxygen saturation, la saturation pulsée en oxygène mesurée à l'oxymètre. BP = tension, HR = fréquence cardiaque.", ref: "NHS abbreviations guide", diff: 1 },

  { ueId: "6.2", q: "Pour vérifier l'identité d'un patient, on demande souvent :", options: ["What is your job?","Can you tell me your date of birth?","Do you like tea?","Where do you live forever?"], correct: 1,
    explication: "« Can you tell me your date of birth? » (date de naissance, abrégée DOB) est une question standard d'identitovigilance, en plus du nom complet.", ref: "IFSI UE 6.2 - Anglais", diff: 2 },

  { ueId: "6.2", q: "Le terme britannique « surgery » peut désigner, outre l'intervention chirurgicale :", options: ["Une pharmacie","Le cabinet du médecin généraliste","Une ambulance","Un brancard"], correct: 1,
    explication: "Au Royaume-Uni, « surgery » désigne aussi le cabinet du médecin généraliste (GP surgery). C'est un faux-ami à connaître.", ref: "IFSI UE 6.2 - Anglais", diff: 3 },

  { ueId: "6.2", q: "« N&V » dans un dossier signifie :", options: ["Nausée et vomissements","Nouveau patient","Voie nasale","Surveillance neurologique"], correct: 0,
    explication: "N&V = nausea and vomiting, soit nausée et vomissements. C'est une abréviation fréquente des symptômes digestifs.", ref: "NHS abbreviations guide", diff: 2 },
];

export const flashcards = [
  { ueId: "6.2", recto: "Traduire : « shortness of breath » (SOB)", verso: "Essoufflement / dyspnée." },
  { ueId: "6.2", recto: "Que signifie PRN ?", verso: "Pro re nata = si besoin / à la demande." },
  { ueId: "6.2", recto: "Adjectif savant pour « foie » ?", verso: "Hepatic (liver = courant)." },
  { ueId: "6.2", recto: "NBM / NPO ?", verso: "Nil by mouth / nil per os = à jeun." },
  { ueId: "6.2", recto: "BD, TDS, QDS : combien de prises par jour ?", verso: "BD = 2, TDS = 3, QDS = 4 (du latin bis, ter, quater)." },
  { ueId: "6.2", recto: "Traduire : « Where does it hurt? »", verso: "Où avez-vous mal ?" },
  { ueId: "6.2", recto: "Que veut dire « stroke » ?", verso: "Accident vasculaire cérébral (AVC)." },
  { ueId: "6.2", recto: "Faux-ami : « drug » ?", verso: "Médicament (sens principal en soin), pas seulement « drogue »." },
  { ueId: "6.2", recto: "Hx, Dx, Tx, Rx ?", verso: "History (antécédents), Diagnosis, Treatment, Prescription." },
  { ueId: "6.2", recto: "Que mesure SpO₂ ?", verso: "La saturation pulsée en oxygène." },
  { ueId: "6.2", recto: "Traduire : « Please take a deep breath »", verso: "Inspirez profondément, s'il vous plaît." },
  { ueId: "6.2", recto: "« Blood sugar » ?", verso: "Glycémie (taux de sucre dans le sang)." },
  { ueId: "6.2", recto: "Pourquoi « OD » est-elle ambiguë ?", verso: "Peut signifier « once daily » (1x/jour) ou « œil droit » (oculus dexter)." },
  { ueId: "6.2", recto: "Voies : PO, IV, IM ?", verso: "PO = orale, IV = intraveineuse, IM = intramusculaire." },
  { ueId: "6.2", recto: "Faux-ami britannique : « surgery » ?", verso: "Intervention chirurgicale, mais aussi cabinet du médecin généraliste (GB)." },
];
