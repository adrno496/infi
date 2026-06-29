export const fiches = [
  { id: "f_4_3_afgsu", ueId: "4.3", type: "cours",
    titre: "AFGSU : principes et niveaux",
    resume: "L'AFGSU forme les professionnels de santé à la prise en charge des urgences vitales et potentielles.",
    tags: ["AFGSU", "urgence", "secours"],
    html: `<h3>Qu'est-ce que l'AFGSU ?</h3>
<p>L'<span class="key" data-term="AFGSU">Attestation de Formation aux Gestes et Soins d'Urgence</span> est une formation obligatoire pour les professionnels de santé. Elle vise à acquérir les connaissances permettant la prise en charge d'une urgence médicale, seul ou en équipe, en attendant l'arrivée d'une équipe médicalisée.</p>
<h3>Les niveaux</h3>
<table class="tbl">
<tr><th>Niveau</th><th>Public</th><th>Objectif</th></tr>
<tr><td>Niveau 1</td><td>Tout personnel d'un établissement de santé</td><td>Urgences vitales et potentielles, individuel</td></tr>
<tr><td>Niveau 2</td><td>Professionnels de santé (dont IDE)</td><td>Niveau 1 + participation à la prise en charge en équipe, gestion d'afflux</td></tr>
<tr><td>Spécialisée</td><td>Personnels exposés (risques NRBC, plans)</td><td>Situations sanitaires exceptionnelles</td></tr>
</table>
<div class="callout"><div class="callout-t">Validité</div>L'AFGSU est valable <strong>4 ans</strong> et nécessite une réactualisation (recyclage) pour rester valide.</div>
<h3>Urgences vitales vs potentielles</h3>
<ul>
<li><strong>Urgence vitale</strong> : arrêt cardiaque, obstruction des voies aériennes, hémorragie, inconscience.</li>
<li><strong>Urgence potentielle</strong> : malaise, traumatisme, accouchement inopiné, brûlure, plaie.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Devant toute victime : <strong>Protéger - Alerter - Secourir</strong> (PAS).</div>`,
    refs: ["UE 4.3"] },

  { id: "f_4_3_rcp", ueId: "4.3", type: "cours",
    titre: "RCP de base et défibrillation",
    resume: "La réanimation cardio-pulmonaire associe compressions thoraciques de qualité et défibrillation précoce.",
    tags: ["RCP", "arrêt cardiaque", "DAE", "massage"],
    html: `<h3>Reconnaître l'arrêt cardiaque</h3>
<p>Victime <span class="key" data-term="inconsciente">inconsciente</span> qui ne réagit pas et ne respire pas (ou gasps = respiration agonique anormale). On ne perd pas de temps à chercher le pouls chez le secouriste non professionnel.</p>
<h3>La chaîne de survie</h3>
<ul>
<li>Reconnaissance et alerte précoce (15 / 112).</li>
<li>RCP précoce par les témoins.</li>
<li>Défibrillation précoce (<span class="key" data-term="DAE">DAE</span>).</li>
<li>Réanimation spécialisée et soins post-arrêt.</li>
</ul>
<h3>Compressions thoraciques (adulte)</h3>
<table class="tbl">
<tr><th>Paramètre</th><th>Valeur</th></tr>
<tr><td>Fréquence</td><td>100 à 120 / minute</td></tr>
<tr><td>Profondeur</td><td>5 à 6 cm</td></tr>
<tr><td>Rapport compressions/insufflations</td><td>30 / 2</td></tr>
<tr><td>Position des mains</td><td>Centre du thorax, moitié inférieure du sternum</td></tr>
</table>
<div class="callout"><div class="callout-t">Points clés</div>Laisser le thorax se relever complètement entre chaque compression (relâchement) et limiter les interruptions au minimum.</div>
<h3>Défibrillateur automatisé externe (DAE)</h3>
<p>Allumer, poser les électrodes (sous la clavicule droite et sur le flanc gauche), suivre les consignes vocales. Ne pas toucher la victime pendant l'analyse et le choc. Reprendre immédiatement les compressions après le choc. Chez l'enfant, utiliser si possible des électrodes pédiatriques ou le mode pédiatrique ; à défaut, les électrodes adultes peuvent être utilisées (positionnement antéro-postérieur).</p>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>C-A-B</strong> : Compressions, Airway (voies aériennes), Breathing (ventilation).</div>`,
    refs: ["UE 4.3"] },

  { id: "f_4_3_detresses", ueId: "4.3", type: "cours",
    titre: "Détresses vitales : reconnaître et agir",
    resume: "Les détresses respiratoire, circulatoire et neurologique doivent être repérées rapidement par l'évaluation ABCDE.",
    tags: ["détresse", "ABCDE", "respiratoire", "circulatoire", "neurologique"],
    html: `<h3>L'évaluation ABCDE</h3>
<table class="tbl">
<tr><th>Lettre</th><th>Évalue</th><th>Signes d'alerte</th></tr>
<tr><td>A - Airway</td><td>Voies aériennes</td><td>Obstruction, stridor, corps étranger</td></tr>
<tr><td>B - Breathing</td><td>Respiration</td><td>Polypnée, cyanose, tirage, SpO2 basse</td></tr>
<tr><td>C - Circulation</td><td>Circulation</td><td>Pouls filant, marbrures, hypotension, TRC > 3s</td></tr>
<tr><td>D - Disability</td><td>Neurologique</td><td>Trouble de conscience, déficit, pupilles</td></tr>
<tr><td>E - Exposure</td><td>Exposition</td><td>Lésions, température, hémorragie cachée</td></tr>
</table>
<h3>Détresse respiratoire</h3>
<ul>
<li>Signes : <span class="key" data-term="polypnée">polypnée</span>, tirage, balancement thoraco-abdominal, cyanose, sueurs.</li>
<li>Conduite : position demi-assise, oxygénothérapie, surveillance SpO2.</li>
</ul>
<h3>Détresse circulatoire (état de choc)</h3>
<ul>
<li>Signes : tachycardie, hypotension, marbrures, <span class="key" data-term="TRC">temps de recoloration cutanée</span> allongé, oligurie.</li>
<li>Conduite : allonger jambes surélevées, oxygène, voie veineuse, remplissage sur prescription.</li>
</ul>
<h3>Détresse neurologique</h3>
<ul>
<li>Évaluation par le score de <span class="key" data-term="Glasgow">Glasgow</span> (de 3 à 15).</li>
<li>Position latérale de sécurité (PLS) si inconscient qui respire.</li>
</ul>
<div class="callout"><div class="callout-t">Constantes repères adulte</div>FC 60-100/min, FR 12-20/min, PA systolique ~120 mmHg, SpO2 ≥ 95 %, glycémie 0,7-1,1 g/L.</div>`,
    refs: ["UE 4.3"] },

  { id: "f_4_3_obstruction_hemorragie", ueId: "4.3", type: "cours",
    titre: "Obstruction des voies aériennes et hémorragies",
    resume: "Désobstruction et arrêt des hémorragies sont des gestes salvateurs immédiats.",
    tags: ["obstruction", "Heimlich", "hémorragie", "garrot"],
    html: `<h3>Obstruction des voies aériennes par corps étranger</h3>
<ul>
<li><strong>Obstruction partielle</strong> (la personne tousse, parle) : encourager la toux, ne rien faire d'autre.</li>
<li><strong>Obstruction totale</strong> (ne peut ni parler, ni tousser, ni respirer) :
<ul>
<li>5 claques dans le dos entre les omoplates.</li>
<li>Puis 5 compressions abdominales (manœuvre de <span class="key" data-term="Heimlich">Heimlich</span>).</li>
<li>Alterner jusqu'à expulsion ou perte de connaissance (alors RCP).</li>
</ul>
</li>
</ul>
<div class="callout"><div class="callout-t">Cas particuliers</div>Chez le nourrisson : 5 tapes dans le dos puis 5 compressions thoraciques (pas de Heimlich). Chez la femme enceinte ou l'obèse : compressions thoraciques au lieu d'abdominales.</div>
<h3>Hémorragies</h3>
<ul>
<li>Geste principal : <strong>compression directe</strong> de la plaie qui saigne.</li>
<li>Si inefficace ou inaccessible : pose d'un <span class="key" data-term="garrot">garrot</span> en amont (membre), noter l'heure de pose.</li>
<li>Allonger la victime, alerter, surveiller, prévenir l'aggravation (état de choc).</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Hémorragie = <strong>C-A-S</strong> : Comprimer, Allonger, Surveiller (et alerter).</div>`,
    refs: ["UE 4.3"] },
];

export const qcm = [
  { ueId: "4.3", q: "Quelle est la durée de validité de l'AFGSU ?", options: ["1 an", "2 ans", "4 ans", "10 ans"], correct: 2,
    explication: "L'AFGSU est valable 4 ans. Une réactualisation (recyclage) est nécessaire pour conserver la validité de l'attestation.", ref: "UE 4.3", diff: 1 },

  { ueId: "4.3", q: "À quel niveau d'AFGSU correspond la formation des infirmiers diplômés d'État ?", options: ["Niveau 1", "Niveau 2", "Niveau spécialisé uniquement", "Aucun niveau requis"], correct: 1,
    explication: "Les professionnels de santé inscrits à un ordre, dont les IDE, relèvent du niveau 2, qui inclut le niveau 1 et la prise en charge en équipe.", ref: "UE 4.3", diff: 2 },

  { ueId: "4.3", q: "Quelle est la fréquence recommandée des compressions thoraciques chez l'adulte ?", options: ["60 à 80 / min", "100 à 120 / min", "140 à 160 / min", "Aussi vite que possible"], correct: 1,
    explication: "La fréquence recommandée est de 100 à 120 compressions par minute. Trop lent ou trop rapide réduit l'efficacité de la perfusion.", ref: "UE 4.3", diff: 1 },

  { ueId: "4.3", q: "Quel est le rapport compressions/insufflations chez l'adulte en RCP de base ?", options: ["15 / 2", "30 / 2", "5 / 1", "30 / 5"], correct: 1,
    explication: "Le rapport est de 30 compressions pour 2 insufflations chez l'adulte (et chez l'enfant à un seul sauveteur).", ref: "UE 4.3", diff: 1 },

  { ueId: "4.3", q: "Quelle est la profondeur recommandée des compressions thoraciques chez l'adulte ?", options: ["1 à 2 cm", "3 à 4 cm", "5 à 6 cm", "8 à 10 cm"], correct: 2,
    explication: "La profondeur doit être de 5 à 6 cm chez l'adulte, en laissant le thorax se relever complètement entre chaque compression.", ref: "UE 4.3", diff: 1 },

  { ueId: "4.3", q: "Que signifie une respiration agonique (gasps) chez une victime inconsciente ?", options: ["La victime respire normalement", "Il faut considérer la victime en arrêt cardiaque et débuter la RCP", "Il faut attendre", "C'est un signe rassurant"], correct: 1,
    explication: "Les gasps sont une respiration anormale et inefficace. En présence de gasps chez une victime inconsciente, on considère un arrêt cardiaque et on débute la RCP.", ref: "UE 4.3", diff: 2 },

  { ueId: "4.3", q: "Dans quel ordre se déroulent les maillons de la chaîne de survie ?", options: ["DAE puis alerte puis RCP", "Alerte précoce, RCP précoce, défibrillation précoce, soins spécialisés", "RCP, soins spécialisés, alerte", "Défibrillation, RCP, alerte"], correct: 1,
    explication: "La chaîne de survie : reconnaissance et alerte précoce, RCP précoce par les témoins, défibrillation précoce, réanimation spécialisée et soins post-arrêt.", ref: "UE 4.3", diff: 2 },

  { ueId: "4.3", q: "Lors d'une obstruction TOTALE des voies aériennes chez l'adulte conscient, quel est le premier geste ?", options: ["Manœuvre de Heimlich immédiate", "5 claques dans le dos entre les omoplates", "Boire un verre d'eau", "Allonger la victime"], correct: 1,
    explication: "On commence par 5 claques vigoureuses dans le dos entre les omoplates, avant d'alterner avec 5 compressions abdominales (Heimlich).", ref: "UE 4.3", diff: 2 },

  { ueId: "4.3", q: "Chez le nourrisson présentant une obstruction totale des voies aériennes, on alterne :", options: ["Heimlich et claques dans le dos", "5 tapes dans le dos et 5 compressions thoraciques", "Compressions abdominales seules", "Insufflations uniquement"], correct: 1,
    explication: "Chez le nourrisson, on alterne 5 tapes dans le dos et 5 compressions thoraciques. La manœuvre de Heimlich (compressions abdominales) est contre-indiquée.", ref: "UE 4.3", diff: 2 },

  { ueId: "4.3", q: "Quel est le geste prioritaire face à une hémorragie externe abondante ?", options: ["Poser un garrot d'emblée", "Comprimer directement la plaie", "Désinfecter la plaie", "Donner à boire"], correct: 1,
    explication: "La compression directe de la plaie est le geste prioritaire. Le garrot n'est posé que si la compression est impossible ou inefficace.", ref: "UE 4.3", diff: 1 },

  { ueId: "4.3", q: "Que faut-il impérativement noter lors de la pose d'un garrot ?", options: ["Le poids de la victime", "L'heure de pose", "La couleur du garrot", "Le groupe sanguin"], correct: 1,
    explication: "On doit noter l'heure de pose du garrot, information essentielle pour l'équipe médicale du fait du risque ischémique du membre.", ref: "UE 4.3", diff: 2 },

  { ueId: "4.3", q: "Que signifie le 'C' dans l'évaluation ABCDE ?", options: ["Conscience", "Circulation", "Cyanose", "Cœur"], correct: 1,
    explication: "Le C correspond à Circulation : recherche de signes d'état de choc (pouls, marbrures, TRC, hypotension).", ref: "UE 4.3", diff: 1 },

  { ueId: "4.3", q: "Quelle est la valeur normale du temps de recoloration cutanée (TRC) ?", options: ["Inférieur à 3 secondes", "Supérieur à 5 secondes", "Exactement 10 secondes", "Le TRC n'a pas de valeur normale"], correct: 0,
    explication: "Le TRC normal est inférieur à 3 secondes. Un TRC allongé (> 3 s) évoque une mauvaise perfusion périphérique et un état de choc.", ref: "UE 4.3", diff: 2 },

  { ueId: "4.3", q: "Quelle position adopter pour une victime inconsciente qui respire ?", options: ["Position assise", "Position latérale de sécurité (PLS)", "Décubitus dorsal strict", "Position de Trendelenburg"], correct: 1,
    explication: "La PLS protège les voies aériennes et prévient l'inhalation chez une victime inconsciente qui respire normalement.", ref: "UE 4.3", diff: 1 },

  { ueId: "4.3", q: "Quel score évalue l'état de conscience neurologique ?", options: ["Score de Glasgow", "Score d'Apgar", "Échelle de Norton", "Score de Braden"], correct: 0,
    explication: "Le score de Glasgow évalue l'état de conscience de 3 (coma profond) à 15 (conscience normale), via la réponse oculaire, verbale et motrice.", ref: "UE 4.3", diff: 2 },

  { ueId: "4.3", q: "Quels signes évoquent une détresse respiratoire ?", options: ["Bradycardie isolée", "Polypnée, tirage et cyanose", "Hypertension artérielle", "Polyurie"], correct: 1,
    explication: "La détresse respiratoire se manifeste par une polypnée, un tirage, un balancement thoraco-abdominal, une cyanose et des sueurs.", ref: "UE 4.3", diff: 2 },

  { ueId: "4.3", q: "Quelle position privilégier en première intention chez une victime en détresse circulatoire (choc) ?", options: ["Position assise", "Allongée avec jambes surélevées", "Debout", "Ventrale"], correct: 1,
    explication: "On allonge la victime en surélevant les jambes pour favoriser le retour veineux, sauf contre-indication (détresse respiratoire associée).", ref: "UE 4.3", diff: 2 },

  { ueId: "4.3", q: "Lors de l'utilisation d'un DAE, que faut-il faire pendant l'analyse et le choc ?", options: ["Continuer les compressions", "Ne pas toucher la victime", "Tenir la main de la victime", "Retirer les électrodes"], correct: 1,
    explication: "Personne ne doit toucher la victime pendant l'analyse du rythme et la délivrance du choc, pour la sécurité et la fiabilité de l'analyse.", ref: "UE 4.3", diff: 1 },

  { ueId: "4.3", q: "Quelle est la conduite principale face à une obstruction PARTIELLE des voies aériennes (la victime tousse) ?", options: ["Manœuvre de Heimlich", "Claques dans le dos", "Encourager la toux et surveiller", "Débuter la RCP"], correct: 2,
    explication: "Tant que la victime tousse et parle, l'obstruction est partielle : on encourage la toux et on surveille, sans manœuvre qui pourrait l'aggraver.", ref: "UE 4.3", diff: 2 },

  { ueId: "4.3", q: "Quel est le numéro d'appel du SAMU en France ?", options: ["15", "17", "18", "112 uniquement"], correct: 0,
    explication: "Le 15 est le numéro du SAMU (urgences médicales). Le 112 est le numéro d'urgence européen, le 18 les pompiers, le 17 la police.", ref: "UE 4.3", diff: 1 },

  { ueId: "4.3", q: "Chez une femme enceinte présentant une obstruction totale des voies aériennes, on remplace les compressions abdominales par :", options: ["Des insufflations", "Des compressions thoraciques", "Une PLS", "Rien, on attend les secours"], correct: 1,
    explication: "Chez la femme enceinte ou la personne obèse, on réalise des compressions thoraciques au lieu des compressions abdominales (Heimlich contre-indiqué).", ref: "UE 4.3", diff: 3 },

  { ueId: "4.3", q: "Quelle est la séquence générale d'action devant une victime selon le principe de base du secourisme ?", options: ["Secourir, Protéger, Alerter", "Protéger, Alerter, Secourir", "Alerter, Protéger, Secourir", "Protéger, Secourir, Alerter"], correct: 1,
    explication: "La séquence est Protéger (le sauveteur et la victime du suraccident), Alerter les secours, puis Secourir la victime.", ref: "UE 4.3", diff: 1 },

  { ueId: "4.3", q: "Après la délivrance d'un choc par le DAE, que faut-il faire immédiatement ?", options: ["Vérifier le pouls pendant 1 minute", "Reprendre aussitôt les compressions thoraciques", "Attendre une nouvelle analyse", "Retirer les électrodes"], correct: 1,
    explication: "On reprend immédiatement les compressions après le choc, pour 2 minutes de RCP, avant que le DAE ne procède à une nouvelle analyse du rythme.", ref: "UE 4.3", diff: 2 },

  { ueId: "4.3", q: "Quelle valeur de SpO2 est considérée comme normale chez l'adulte sain ?", options: ["≥ 95 %", "Autour de 80 %", "≤ 70 %", "Exactement 100 % obligatoirement"], correct: 0,
    explication: "Une SpO2 normale est ≥ 95 % en air ambiant chez l'adulte sain. Une valeur abaissée évoque une hypoxémie et une détresse respiratoire.", ref: "UE 4.3", diff: 1 },

  { ueId: "4.3", q: "Que signifie le 'D' de l'évaluation ABCDE ?", options: ["Douleur", "Disability (état neurologique)", "Défibrillation", "Drainage"], correct: 1,
    explication: "Le D correspond à Disability : évaluation neurologique (conscience via Glasgow, déficit, pupilles, glycémie capillaire).", ref: "UE 4.3", diff: 2 },
];

export const flashcards = [
  { ueId: "4.3", recto: "Que signifie l'acronyme AFGSU ?", verso: "Attestation de Formation aux Gestes et Soins d'Urgence." },
  { ueId: "4.3", recto: "Durée de validité de l'AFGSU ?", verso: "4 ans, avec réactualisation (recyclage) obligatoire." },
  { ueId: "4.3", recto: "Fréquence des compressions thoraciques chez l'adulte ?", verso: "100 à 120 compressions par minute." },
  { ueId: "4.3", recto: "Profondeur des compressions thoraciques chez l'adulte ?", verso: "5 à 6 cm." },
  { ueId: "4.3", recto: "Rapport compressions/insufflations chez l'adulte ?", verso: "30 compressions pour 2 insufflations." },
  { ueId: "4.3", recto: "Que signifie DAE ?", verso: "Défibrillateur Automatisé Externe." },
  { ueId: "4.3", recto: "Que sont les gasps ?", verso: "Une respiration agonique anormale et inefficace : on considère un arrêt cardiaque et on débute la RCP." },
  { ueId: "4.3", recto: "Premier geste face à une hémorragie externe ?", verso: "Compression directe de la plaie." },
  { ueId: "4.3", recto: "Quand poser un garrot ?", verso: "Si la compression directe est impossible ou inefficace ; noter l'heure de pose." },
  { ueId: "4.3", recto: "Que veulent dire les lettres ABCDE ?", verso: "Airway (voies aériennes), Breathing (respiration), Circulation, Disability (neuro), Exposure." },
  { ueId: "4.3", recto: "Valeur normale du temps de recoloration cutanée (TRC) ?", verso: "Inférieur à 3 secondes." },
  { ueId: "4.3", recto: "Quel score évalue l'état de conscience ?", verso: "Le score de Glasgow, de 3 à 15." },
  { ueId: "4.3", recto: "Conduite face à une obstruction totale des voies aériennes chez l'adulte ?", verso: "5 claques dans le dos, puis 5 compressions abdominales (Heimlich), en alternance." },
  { ueId: "4.3", recto: "Obstruction des voies aériennes chez le nourrisson ?", verso: "5 tapes dans le dos et 5 compressions thoraciques (pas de Heimlich)." },
  { ueId: "4.3", recto: "Position d'une victime inconsciente qui respire ?", verso: "Position latérale de sécurité (PLS)." },
  { ueId: "4.3", recto: "Numéro d'appel du SAMU en France ?", verso: "Le 15 (112 = numéro d'urgence européen)." },
  { ueId: "4.3", recto: "Séquence de base du secourisme ?", verso: "Protéger, Alerter, Secourir (PAS)." },
  { ueId: "4.3", recto: "Signes d'une détresse respiratoire ?", verso: "Polypnée, tirage, cyanose, balancement thoraco-abdominal, sueurs." },
  { ueId: "4.3", recto: "Constantes repères normales chez l'adulte ?", verso: "FC 60-100/min, FR 12-20/min, PA systolique ~120 mmHg, SpO2 ≥ 95 %, glycémie 0,7-1,1 g/L." },
  { ueId: "4.3", recto: "Que faire juste après un choc délivré par le DAE ?", verso: "Reprendre immédiatement les compressions thoraciques, sans attendre, pendant 2 minutes avant la nouvelle analyse." },
];
