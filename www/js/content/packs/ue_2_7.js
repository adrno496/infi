export const fiches = [
  { id: "f_2_7_insuffisance_cardiaque", ueId: "2.7", type: "patho",
    titre: "Insuffisance cardiaque chronique",
    resume: "Incapacite du coeur a assurer un debit suffisant aux besoins de l'organisme.",
    tags: ["cardiologie", "IC", "defaillance"],
    html: `<p>L'<span class="key" data-term="insuffisance cardiaque">insuffisance cardiaque</span> (IC) est l'incapacite du coeur a assurer un debit adapte aux besoins metaboliques, ou a ne le faire qu'au prix de pressions de remplissage elevees.</p>
<h3>Mecanismes</h3>
<ul>
<li><strong>IC systolique</strong> : alteration de la contraction (FEVG abaissee, &lt; 40 %).</li>
<li><strong>IC a fraction d'ejection preservee</strong> : trouble de la relaxation (FEVG conservee).</li>
<li><strong>IC gauche</strong> : retentissement pulmonaire (dyspnee, OAP).</li>
<li><strong>IC droite</strong> : retentissement systemique (OMI, turgescence jugulaire, hepatomegalie).</li>
</ul>
<h3>Causes principales</h3>
<ul>
<li>Cardiopathie ischemique (post-infarctus).</li>
<li>HTA chronique.</li>
<li>Valvulopathies, cardiomyopathies, troubles du rythme.</li>
</ul>
<h3>Signes cliniques</h3>
<table class="tbl">
<tr><th>IC gauche</th><th>IC droite</th></tr>
<tr><td>Dyspnee d'effort, orthopnee</td><td>Oedemes des membres inferieurs</td></tr>
<tr><td>Toux, crepitants pulmonaires</td><td>Turgescence jugulaire</td></tr>
<tr><td>OAP (forme aigue)</td><td>Hepatomegalie, reflux hepato-jugulaire</td></tr>
</table>
<div class="callout"><div class="callout-t">Examens cles</div>BNP / NT-proBNP eleves, echographie cardiaque (FEVG), radiographie thoracique (cardiomegalie, surcharge).</div>
<h3>Traitement de fond</h3>
<ul>
<li>IEC ou ARA II, betabloquants, anti-aldosterones, plus recemment les ISGLT2.</li>
<li>Diuretiques de l'anse pour la surcharge (soulagement symptomatique).</li>
<li>Mesures : regime peu sale, restriction hydrique, surveillance du poids.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnemo</div>IC gauche = poumons (dyspnee), IC droite = peripherie (oedemes). "Gauche en haut, droite en bas".</div>`,
    refs: ["UE 2.7"] },

  { id: "f_2_7_insuffisance_renale", ueId: "2.7", type: "patho",
    titre: "Insuffisance renale aigue et chronique",
    resume: "Reduction de la fonction d'epuration renale, brutale (IRA) ou progressive (IRC).",
    tags: ["nephrologie", "rein", "DFG"],
    html: `<p>L'<span class="key" data-term="insuffisance renale">insuffisance renale</span> est une diminution du <span class="key" data-term="debit de filtration glomerulaire">debit de filtration glomerulaire</span> (DFG). Elle est aigue (potentiellement reversible) ou chronique (irreversible et evolutive).</p>
<h3>Insuffisance renale aigue (IRA)</h3>
<ul>
<li><strong>Pre-renale (fonctionnelle)</strong> : hypovolemie, choc, deshydratation. Rein sain mal perfuse.</li>
<li><strong>Renale (organique)</strong> : necrose tubulaire aigue, glomerulonephrite, nephrotoxiques.</li>
<li><strong>Post-renale (obstructive)</strong> : obstacle sur les voies urinaires (lithiase, adenome prostatique).</li>
</ul>
<h3>Insuffisance renale chronique (IRC)</h3>
<p>Definie par un DFG &lt; 60 mL/min/1,73 m2 pendant plus de 3 mois. Stades 1 a 5, le stade 5 correspondant au stade terminal (DFG &lt; 15) necessitant la dialyse ou la greffe.</p>
<table class="tbl">
<tr><th>Causes frequentes d'IRC</th></tr>
<tr><td>Nephropathie diabetique</td></tr>
<tr><td>Nephropathie hypertensive</td></tr>
<tr><td>Glomerulonephrites chroniques, polykystose</td></tr>
</table>
<h3>Consequences</h3>
<ul>
<li>Retention azotee (uree, creatinine elevees).</li>
<li>Troubles hydro-electrolytiques : hyperkaliemie, acidose metabolique.</li>
<li>Anemie (deficit en EPO), troubles phosphocalciques, HTA.</li>
</ul>
<div class="callout"><div class="callout-t">Urgence vitale</div>L'hyperkaliemie expose a des troubles du rythme cardiaque graves. Surveiller la kaliemie et l'ECG.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnemo</div>3 P pour les causes d'IRA : Pre-renale, Parenchymateuse (renale), Post-renale.</div>`,
    refs: ["UE 2.7"] },

  { id: "f_2_7_diabete", ueId: "2.7", type: "patho",
    titre: "Diabete : type 1, type 2 et complications",
    resume: "Hyperglycemie chronique par defaut d'insuline (type 1) ou insulinoresistance (type 2).",
    tags: ["endocrinologie", "glycemie", "insuline"],
    html: `<p>Le <span class="key" data-term="diabete">diabete</span> est defini par une hyperglycemie chronique : glycemie a jeun &ge; 1,26 g/L (7 mmol/L) a deux reprises, ou HbA1c &ge; 6,5 %.</p>
<h3>Les deux grands types</h3>
<table class="tbl">
<tr><th></th><th>Type 1</th><th>Type 2</th></tr>
<tr><td>Mecanisme</td><td>Destruction auto-immune des cellules beta, carence absolue en insuline</td><td>Insulinoresistance puis epuisement, carence relative</td></tr>
<tr><td>Age</td><td>Sujet jeune</td><td>Adulte, souvent en surpoids</td></tr>
<tr><td>Traitement</td><td>Insuline indispensable</td><td>Mesures hygieno-dietetiques, ADO, puis insuline si besoin</td></tr>
</table>
<h3>Complications aigues</h3>
<ul>
<li><strong>Acidocetose</strong> (surtout type 1) : carence en insuline, cetose, acidose.</li>
<li><strong>Coma hyperosmolaire</strong> (surtout type 2 age) : hyperglycemie majeure, deshydratation.</li>
<li><strong>Hypoglycemie</strong> : liee au traitement, urgence (resucrage).</li>
</ul>
<h3>Complications chroniques (degeneratives)</h3>
<ul>
<li><strong>Microangiopathie</strong> : retinopathie, nephropathie, neuropathie.</li>
<li><strong>Macroangiopathie</strong> : coronaropathie, AVC, arteriopathie des membres inferieurs.</li>
<li>Pied diabetique (neuropathie + arteriopathie + infection).</li>
</ul>
<div class="callout"><div class="callout-t">Surveillance</div>HbA1c reflete la glycemie moyenne sur 2-3 mois (objectif souvent &lt; 7 %). Fond d'oeil, bilan renal et examen des pieds reguliers.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnemo</div>Microangiopathie = "RNN" : Retine, Nephron, Nerf.</div>`,
    refs: ["UE 2.7"] },

  { id: "f_2_7_bpco_irc_respi", ueId: "2.7", type: "patho",
    titre: "BPCO et insuffisance respiratoire chronique",
    resume: "Obstruction bronchique progressive et irreversible menant a l'insuffisance respiratoire.",
    tags: ["pneumologie", "BPCO", "tabac"],
    html: `<p>La <span class="key" data-term="BPCO">BPCO</span> (bronchopneumopathie chronique obstructive) est une maladie respiratoire caracterisee par une obstruction permanente et progressive des voies aeriennes, peu reversible.</p>
<h3>Facteur de risque majeur</h3>
<p>Le <strong>tabac</strong> est en cause dans la grande majorite des cas. Autres facteurs : expositions professionnelles, pollution.</p>
<h3>Physiopathologie</h3>
<ul>
<li>Inflammation bronchique chronique et hypersecretion (bronchite chronique).</li>
<li>Destruction des alveoles (emphyseme).</li>
<li>Obstruction expiratoire, distension thoracique.</li>
</ul>
<h3>Signes</h3>
<ul>
<li>Toux et expectoration chroniques.</li>
<li>Dyspnee d'effort progressive.</li>
<li>EFR : trouble ventilatoire obstructif (rapport VEMS/CV abaisse, non reversible).</li>
</ul>
<h3>Insuffisance respiratoire chronique</h3>
<p>Stade evolutif : <span class="key" data-term="hypoxemie">hypoxemie</span> (PaO2 abaissee), parfois <span class="key" data-term="hypercapnie">hypercapnie</span> (PaCO2 elevee). Peut conduire au coeur pulmonaire chronique (IC droite).</p>
<div class="callout"><div class="callout-t">Oxygenotherapie : prudence</div>Chez le patient hypercapnique, un debit d'oxygene trop eleve peut deprimer la commande respiratoire. Adapter le debit selon la prescription et la SpO2 cible.</div>
<h3>Prise en charge</h3>
<ul>
<li>Arret du tabac (mesure essentielle).</li>
<li>Bronchodilatateurs, rehabilitation respiratoire.</li>
<li>Oxygenotherapie de longue duree aux stades avances.</li>
</ul>`,
    refs: ["UE 2.7"] },
];

export const qcm = [
  { ueId: "2.7", q: "Quel signe est caracteristique de l'insuffisance cardiaque gauche ?", options: ["Oedemes des membres inferieurs", "Turgescence jugulaire", "Dyspnee et orthopnee", "Hepatomegalie"], correct: 2,
    explication: "L'IC gauche retentit sur la circulation pulmonaire : dyspnee, orthopnee, crepitants, voire OAP. Les oedemes, la turgescence jugulaire et l'hepatomegalie signent l'IC droite.", ref: "UE 2.7", diff: 1 },

  { ueId: "2.7", q: "Quel marqueur biologique est eleve dans l'insuffisance cardiaque ?", options: ["Troponine", "BNP / NT-proBNP", "CRP", "D-dimeres"], correct: 1,
    explication: "Le BNP (et le NT-proBNP) est secrete par les cardiomyocytes en reponse a l'etirement des parois. Il est eleve dans l'IC et aide au diagnostic. La troponine evoque l'ischemie myocardique.", ref: "UE 2.7", diff: 1 },

  { ueId: "2.7", q: "Une insuffisance renale aigue pre-renale (fonctionnelle) est typiquement due a :", options: ["Une lithiase obstructive", "Une hypovolemie ou un choc", "Une glomerulonephrite", "Une necrose tubulaire toxique"], correct: 1,
    explication: "L'IRA pre-renale resulte d'une mauvaise perfusion renale (hypovolemie, deshydratation, choc) alors que le rein est sain. Elle est reversible si la perfusion est restauree rapidement.", ref: "UE 2.7", diff: 2 },

  { ueId: "2.7", q: "L'insuffisance renale chronique est definie par un DFG inferieur a 60 mL/min/1,73 m2 pendant :", options: ["Plus de 24 heures", "Plus de 3 mois", "Plus d'une semaine", "Plus d'un an"], correct: 1,
    explication: "L'IRC est definie par une baisse du DFG sous 60 mL/min/1,73 m2 persistant plus de 3 mois, traduisant une atteinte renale chronique et irreversible.", ref: "UE 2.7", diff: 2 },

  { ueId: "2.7", q: "Quelle complication electrolytique de l'insuffisance renale represente une urgence vitale ?", options: ["Hyponatremie", "Hypercalcemie", "Hyperkaliemie", "Hypochloremie"], correct: 2,
    explication: "L'hyperkaliemie, frequente dans l'IR, expose a des troubles du rythme cardiaque graves (arret cardiaque). Elle impose une surveillance ECG et un traitement urgent.", ref: "UE 2.7", diff: 2 },

  { ueId: "2.7", q: "Le diabete de type 1 se caracterise par :", options: ["Une insulinoresistance", "Une destruction auto-immune des cellules beta", "Un surpoids constant", "Une absence de besoin en insuline"], correct: 1,
    explication: "Le diabete de type 1 resulte de la destruction auto-immune des cellules beta du pancreas, entrainant une carence absolue en insuline. L'insulinotherapie est indispensable et vitale.", ref: "UE 2.7", diff: 1 },

  { ueId: "2.7", q: "Quel seuil de glycemie a jeun definit le diabete (a deux reprises) ?", options: ["0,80 g/L", "1,00 g/L", "1,26 g/L", "2,00 g/L"], correct: 2,
    explication: "Le diabete est defini par une glycemie a jeun superieure ou egale a 1,26 g/L (7 mmol/L) constatee a deux reprises, ou une glycemie aleatoire superieure ou egale a 2 g/L avec signes cliniques.", ref: "UE 2.7", diff: 2 },

  { ueId: "2.7", q: "L'HbA1c reflete la glycemie moyenne sur environ :", options: ["24 heures", "1 semaine", "2 a 3 mois", "1 an"], correct: 2,
    explication: "L'hemoglobine glyquee (HbA1c) reflete la glycemie moyenne des 2 a 3 mois precedents, en lien avec la duree de vie des globules rouges. Elle sert au suivi de l'equilibre glycemique.", ref: "UE 2.7", diff: 1 },

  { ueId: "2.7", q: "Quelle complication aigue est la plus typique du diabete de type 1 ?", options: ["Coma hyperosmolaire", "Acidocetose diabetique", "Hypothyroidie", "Hypercalcemie"], correct: 1,
    explication: "L'acidocetose est la complication aigue typique du diabete de type 1 : la carence en insuline entraine une production de corps cetoniques et une acidose metabolique. Le coma hyperosmolaire concerne plutot le type 2 age.", ref: "UE 2.7", diff: 2 },

  { ueId: "2.7", q: "Parmi ces atteintes, laquelle releve de la microangiopathie diabetique ?", options: ["Infarctus du myocarde", "AVC", "Retinopathie", "Arteriopathie des membres inferieurs"], correct: 2,
    explication: "La microangiopathie touche les petits vaisseaux : retinopathie, nephropathie, neuropathie. L'infarctus, l'AVC et l'arteriopathie relevent de la macroangiopathie (gros vaisseaux).", ref: "UE 2.7", diff: 2 },

  { ueId: "2.7", q: "Le principal facteur de risque de la BPCO est :", options: ["Le tabac", "L'hypertension", "Le diabete", "L'hypercholesterolemie"], correct: 0,
    explication: "Le tabagisme est responsable de la grande majorite des BPCO. L'arret du tabac est la mesure therapeutique la plus efficace pour ralentir l'evolution de la maladie.", ref: "UE 2.7", diff: 1 },

  { ueId: "2.7", q: "L'obstruction bronchique de la BPCO est :", options: ["Totalement reversible sous bronchodilatateurs", "Permanente et peu reversible", "Uniquement nocturne", "Aigue et transitoire"], correct: 1,
    explication: "Contrairement a l'asthme, l'obstruction de la BPCO est permanente, progressive et peu ou pas reversible. C'est un trouble ventilatoire obstructif non reversible aux EFR.", ref: "UE 2.7", diff: 2 },

  { ueId: "2.7", q: "Chez un patient BPCO hypercapnique, l'oxygenotherapie doit etre :", options: ["A debit maximal systematiquement", "Adaptee a un debit prescrit et a la SpO2 cible", "Contre-indiquee", "Reservee a l'effort"], correct: 1,
    explication: "Chez le patient hypercapnique, un debit d'O2 excessif peut deprimer la commande ventilatoire. L'oxygenotherapie doit etre titree selon la prescription et la SpO2 cible, sous surveillance.", ref: "UE 2.7", diff: 3 },

  { ueId: "2.7", q: "L'insuffisance respiratoire chronique se traduit a la gazometrie par :", options: ["Une hypoxemie", "Une alcalose isolee", "Une hyperglycemie", "Une hypernatremie"], correct: 0,
    explication: "L'insuffisance respiratoire chronique se caracterise par une hypoxemie (PaO2 abaissee), parfois associee a une hypercapnie. La gazometrie arterielle confirme et evalue la gravite.", ref: "UE 2.7", diff: 2 },

  { ueId: "2.7", q: "Le coeur pulmonaire chronique correspond a :", options: ["Une IC gauche d'origine ischemique", "Une IC droite secondaire a une pathologie respiratoire", "Une valvulopathie aortique", "Un trouble du rythme isole"], correct: 1,
    explication: "Le coeur pulmonaire chronique est une insuffisance cardiaque droite consecutive a une hypertension pulmonaire, elle-meme liee a une pathologie respiratoire chronique (BPCO notamment).", ref: "UE 2.7", diff: 3 },

  { ueId: "2.7", q: "Quelle classe de diuretiques est utilisee en priorite pour soulager la surcharge de l'insuffisance cardiaque ?", options: ["Diuretiques de l'anse (furosemide)", "Diuretiques epargneurs de potassium seuls", "Inhibiteurs de l'anhydrase carbonique", "Diuretiques osmotiques"], correct: 0,
    explication: "Les diuretiques de l'anse comme le furosemide sont les plus puissants et sont utilises pour reduire la surcharge hydrosodee (oedemes, OAP) de l'IC. Ils soulagent les symptomes.", ref: "UE 2.7", diff: 2 },

  { ueId: "2.7", q: "L'anemie de l'insuffisance renale chronique s'explique principalement par :", options: ["Une carence en fer isolee", "Un deficit de production d'erythropoietine (EPO)", "Une hemolyse", "Une carence en vitamine B12"], correct: 1,
    explication: "Le rein produit l'erythropoietine (EPO) qui stimule la production de globules rouges. Dans l'IRC, ce deficit en EPO entraine une anemie, souvent corrigee par de l'EPO de synthese.", ref: "UE 2.7", diff: 2 },

  { ueId: "2.7", q: "Quel signe oriente vers une insuffisance cardiaque droite ?", options: ["Orthopnee", "Crepitants pulmonaires", "Turgescence jugulaire", "OAP"], correct: 2,
    explication: "La turgescence jugulaire, les oedemes des membres inferieurs et l'hepatomegalie traduisent la surcharge systemique de l'IC droite. L'orthopnee, les crepitants et l'OAP signent l'IC gauche.", ref: "UE 2.7", diff: 2 },

  { ueId: "2.7", q: "Le pied diabetique resulte le plus souvent de l'association :", options: ["Neuropathie, arteriopathie et infection", "HTA et tachycardie", "Anemie et thrombopenie", "Hypoglycemie et deshydratation"], correct: 0,
    explication: "Le pied diabetique combine une neuropathie (perte de sensibilite), une arteriopathie (mauvaise vascularisation) et un risque infectieux. La prevention passe par l'inspection et les soins reguliers des pieds.", ref: "UE 2.7", diff: 2 },

  { ueId: "2.7", q: "Au stade terminal de l'IRC (stade 5), le traitement de suppleance comprend :", options: ["Uniquement un regime sans sel", "La dialyse ou la transplantation renale", "Des antibiotiques au long cours", "Une simple restriction hydrique"], correct: 1,
    explication: "Au stade 5 (DFG inferieur a 15 mL/min), les reins n'assurent plus l'epuration : un traitement de suppleance est necessaire, par dialyse (hemodialyse ou dialyse peritoneale) ou greffe renale.", ref: "UE 2.7", diff: 2 },

  { ueId: "2.7", q: "Devant une hypoglycemie chez un patient conscient, la conduite a tenir est :", options: ["Injecter de l'insuline", "Resucrer par voie orale", "Restreindre les apports", "Administrer un diuretique"], correct: 1,
    explication: "Devant une hypoglycemie chez un patient conscient et capable d'avaler, on resucre par voie orale (sucre, jus). En cas de trouble de conscience, on utilise le glucagon ou du glucose IV.", ref: "UE 2.7", diff: 1 },

  { ueId: "2.7", q: "Quelle mesure de surveillance quotidienne est essentielle dans l'insuffisance cardiaque ?", options: ["La mesure de la glycemie", "La pesee quotidienne", "Le dosage de la TSH", "La numeration plaquettaire"], correct: 1,
    explication: "La pesee quotidienne permet de detecter precocement une retention hydrosodee (prise de poids rapide) signant une decompensation cardiaque, et d'adapter le traitement diuretique.", ref: "UE 2.7", diff: 2 },
];

export const flashcards = [
  { ueId: "2.7", recto: "Definition de l'insuffisance cardiaque ?", verso: "Incapacite du coeur a assurer un debit suffisant aux besoins de l'organisme, ou seulement au prix de pressions de remplissage elevees." },
  { ueId: "2.7", recto: "IC gauche : retentissement principal ?", verso: "Retentissement pulmonaire : dyspnee, orthopnee, crepitants, OAP." },
  { ueId: "2.7", recto: "IC droite : trois signes cles ?", verso: "Oedemes des membres inferieurs, turgescence jugulaire, hepatomegalie." },
  { ueId: "2.7", recto: "Quel marqueur biologique est eleve dans l'IC ?", verso: "Le BNP (ou NT-proBNP)." },
  { ueId: "2.7", recto: "Les trois mecanismes d'IRA ?", verso: "Pre-renale (fonctionnelle), renale (organique), post-renale (obstructive)." },
  { ueId: "2.7", recto: "Definition de l'insuffisance renale chronique ?", verso: "DFG inferieur a 60 mL/min/1,73 m2 pendant plus de 3 mois." },
  { ueId: "2.7", recto: "Complication electrolytique urgente de l'IR ?", verso: "L'hyperkaliemie (risque de troubles du rythme cardiaque)." },
  { ueId: "2.7", recto: "Pourquoi une anemie dans l'IRC ?", verso: "Deficit de production d'erythropoietine (EPO) par le rein." },
  { ueId: "2.7", recto: "Diabete de type 1 : mecanisme ?", verso: "Destruction auto-immune des cellules beta, carence absolue en insuline." },
  { ueId: "2.7", recto: "Diabete de type 2 : mecanisme ?", verso: "Insulinoresistance puis epuisement des cellules beta (carence relative)." },
  { ueId: "2.7", recto: "Seuil de glycemie a jeun definissant le diabete ?", verso: "Superieure ou egale a 1,26 g/L (7 mmol/L) a deux reprises." },
  { ueId: "2.7", recto: "Que reflete l'HbA1c ?", verso: "La glycemie moyenne des 2 a 3 derniers mois (objectif souvent inferieur a 7 %)." },
  { ueId: "2.7", recto: "Microangiopathie diabetique : trois organes ?", verso: "Retine (retinopathie), rein (nephropathie), nerf (neuropathie)." },
  { ueId: "2.7", recto: "Facteur de risque majeur de la BPCO ?", verso: "Le tabac." },
  { ueId: "2.7", recto: "L'obstruction de la BPCO est-elle reversible ?", verso: "Non, elle est permanente, progressive et peu ou pas reversible." },
  { ueId: "2.7", recto: "Definition du coeur pulmonaire chronique ?", verso: "Insuffisance cardiaque droite secondaire a une pathologie respiratoire chronique." },
  { ueId: "2.7", recto: "Conduite devant une hypoglycemie chez un patient conscient ?", verso: "Resucrage par voie orale (sucre, jus) ; glucagon ou glucose IV si troubles de conscience." },
  { ueId: "2.7", recto: "Surveillance quotidienne essentielle dans l'IC ?", verso: "La pesee quotidienne (depistage d'une decompensation par retention hydrosodee)." },
];
