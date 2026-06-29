export const fiches = [
  { id: "fx_ue_2_10_plus_chaine_transmission", ueId: "2.10", type: "cours",
    titre: "La chaîne épidémiologique de transmission : les 6 maillons", resume: "Comprendre les 6 maillons de la chaîne infectieuse pour cibler les actions de prévention.", tags: ["transmission","réservoir","porte d'entrée"],
    html: `<p>Une infection ne survient que si une <strong>chaîne de transmission</strong> complète est établie. Rompre <strong>un seul maillon</strong> suffit à empêcher l'infection : c'est tout le principe de l'hygiène.</p>
<h3>Les 6 maillons</h3>
<ul>
<li><span class="key" data-term="Agent infectieux">Agent infectieux</span> : bactérie, virus, champignon, parasite, ATNC (prion).</li>
<li><span class="key" data-term="Réservoir">Réservoir</span> : humain (malade ou porteur sain), animal, environnement (eau, sols, surfaces).</li>
<li><span class="key" data-term="Porte de sortie">Porte de sortie</span> : voies respiratoires, digestives, urinaires, cutanéo-muqueuses, sang.</li>
<li><span class="key" data-term="Mode de transmission">Mode de transmission</span> : contact (direct/indirect), gouttelettes, aérienne (air), véhicule commun, vecteur.</li>
<li><span class="key" data-term="Porte d'entrée">Porte d'entrée</span> : effraction cutanée, muqueuses, dispositifs invasifs (cathéter, sonde).</li>
<li><span class="key" data-term="Hôte réceptif">Hôte réceptif</span> : terrain immunodéprimé, âges extrêmes, comorbidités, dispositifs invasifs.</li>
</ul>
<h3>Distinguer transmission gouttelettes et aérienne</h3>
<table class="tbl">
<tr><th>Critère</th><th>Gouttelettes</th><th>Aérienne (air)</th></tr>
<tr><td>Taille</td><td>&gt; 5 µm</td><td>&lt; 5 µm (noyaux de condensation)</td></tr>
<tr><td>Portée</td><td>Courte (&lt; 1 à 2 m)</td><td>Longue (reste en suspension)</td></tr>
<tr><td>Protection</td><td>Masque chirurgical</td><td>Masque FFP2</td></tr>
<tr><td>Exemples</td><td>Grippe, méningocoque, coqueluche</td><td>Tuberculose, rougeole, varicelle</td></tr>
</table>
<div class="callout"><div class="callout-t">Point clé</div>L'<span class="key" data-term="hôte réceptif">hôte réceptif</span> en milieu de soin est souvent le patient lui-même : c'est pourquoi le soignant, vecteur potentiel, est le maillon sur lequel on agit en priorité (hygiène des mains).</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« A-R-S-T-E-H » : Agent, Réservoir, Sortie, Transmission, Entrée, Hôte. On casse n'importe lequel pour stopper l'infection.</div>`,
    refs: ["SF2H – Recommandations précautions standard 2017","Référentiel IFSI 2009 – UE 2.10"] },

  { id: "fx_ue_2_10_plus_precautions", ueId: "2.10", type: "cours",
    titre: "Précautions standard et précautions complémentaires (PCC)", resume: "Socle des précautions standard appliqué à tous, complété par les précautions Contact, Gouttelettes et Air.", tags: ["précautions standard","isolement","SHA"],
    html: `<p>Les <span class="key" data-term="précautions standard">précautions standard</span> s'appliquent <strong>pour tout patient, en permanence</strong>, indépendamment de son statut infectieux connu ou non. Elles protègent à la fois le soignant et le patient.</p>
<h3>Composantes des précautions standard</h3>
<ul>
<li><strong>Hygiène des mains</strong> : friction hydro-alcoolique (SHA) en première intention.</li>
<li><strong>Port de gants</strong> : si contact avec sang/liquides biologiques, muqueuses, peau lésée — pas de gants de routine.</li>
<li><strong>Protection de la tenue</strong> : tablier/surblouse si risque de projection.</li>
<li><strong>Masque + lunettes</strong> : si risque de projection au visage.</li>
<li><strong>Gestion des excreta, du matériel et des surfaces</strong> ; prévention des AES.</li>
</ul>
<h3>Précautions complémentaires (PCC)</h3>
<table class="tbl">
<tr><th>Type</th><th>Protection clé</th><th>Chambre</th><th>Indications</th></tr>
<tr><td>Contact (C)</td><td>Gants + tablier, SHA</td><td>Individuelle souhaitée</td><td>BMR/BHRe, C. difficile, gale</td></tr>
<tr><td>Gouttelettes (G)</td><td>Masque chirurgical &lt; 1 m</td><td>Individuelle</td><td>Grippe, méningocoque, coqueluche</td></tr>
<tr><td>Air (A)</td><td>Masque FFP2, porte fermée</td><td>Individuelle, pression négative si possible</td><td>Tuberculose, rougeole, varicelle</td></tr>
</table>
<div class="callout"><div class="callout-t">Attention C. difficile</div>Le <span class="key" data-term="Clostridioides difficile">Clostridioides difficile</span> sporule : la SHA est <strong>inefficace sur les spores</strong>. On impose un <strong>lavage des mains au savon doux puis à l'eau</strong> (action mécanique) et un bionettoyage à l'eau de Javel.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« CGA = Contact-Gouttelettes-Air ». Le niveau de masque monte avec la finesse des particules : rien → chirurgical → FFP2.</div>`,
    refs: ["SF2H 2017","HAS – Hygiène des mains"] },

  { id: "fx_ue_2_10_plus_aes", ueId: "2.10", type: "cours",
    titre: "Accident d'exposition au sang (AES) : conduite à tenir", resume: "Définition, gestes immédiats et circuit de prise en charge d'un AES.", tags: ["AES","prophylaxie","piqûre"],
    html: `<p>Un <span class="key" data-term="AES">AES</span> est tout contact percutané (piqûre, coupure) ou muqueux/cutané sur peau lésée avec du sang ou un liquide biologique potentiellement contaminant. Les principaux risques sont <strong>VIH, VHB et VHC</strong>.</p>
<h3>Conduite à tenir immédiate (les bons réflexes)</h3>
<ul>
<li><strong>Ne pas faire saigner</strong> en pressant (cela favoriserait la pénétration).</li>
<li><strong>Nettoyer</strong> immédiatement à l'eau et au savon.</li>
<li><strong>Antiseptie</strong> par trempage : Dakin ou eau de Javel diluée, ou alcool à 70°, <strong>au moins 5 minutes</strong>.</li>
<li><strong>Projection muqueuse/œil</strong> : rincer abondamment au sérum physiologique ou à l'eau ≥ 5 minutes.</li>
</ul>
<h3>Circuit ensuite</h3>
<ul>
<li>Contacter immédiatement le <strong>médecin référent / urgences</strong> pour évaluer le risque et initier si besoin un <span class="key" data-term="traitement post-exposition">traitement post-exposition (TPE)</span> idéalement &lt; 4 h, au mieux dans les 48 h.</li>
<li>Rechercher le statut sérologique du <strong>patient source</strong> (avec son accord).</li>
<li><strong>Déclaration d'accident du travail</strong> dans les 24 h ; suivi sérologique du soignant.</li>
</ul>
<div class="callout"><div class="callout-t">Prévention +++</div>La meilleure prévention reste la <strong>vaccination anti-VHB</strong> du soignant (obligatoire), le non-recapuchonnage des aiguilles et l'usage de matériel sécurisé avec collecteur OPCT à proximité immédiate.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« NANO-D » : Ne pas faire saigner, nettoyer Au savon, antiseptie (trempage), prévenir le référent, Origine source, Déclaration AT.</div>`,
    refs: ["GERES – Conduite à tenir AES","Calendrier vaccinal en vigueur"] }
];

export const qcm = [
  { ueId: "2.10", q: "Combien de maillons compte la chaîne épidémiologique de transmission ?", options: ["3","4","6","8"], correct: 2,
    explication: "La chaîne comporte 6 maillons : agent infectieux, réservoir, porte de sortie, mode de transmission, porte d'entrée et hôte réceptif. Rompre un seul maillon suffit à prévenir l'infection.", ref: "SF2H 2017", diff: 1 },

  { ueId: "2.10", q: "Quel masque est requis pour une précaution complémentaire de type Air (tuberculose, rougeole) ?", options: ["Aucun masque","Masque chirurgical","Masque FFP2","Masque en tissu"], correct: 2,
    explication: "La transmission aérienne implique des particules < 5 µm restant en suspension : seul un masque filtrant de type FFP2 protège le soignant. Le masque chirurgical suffit pour les gouttelettes.", ref: "SF2H 2017", diff: 1 },

  { ueId: "2.10", q: "Face à un patient porteur de Clostridioides difficile, l'hygiène des mains repose sur :", options: ["La friction hydro-alcoolique seule","Le lavage à l'eau et au savon doux","Le port de gants sans hygiène des mains","Rien de particulier"], correct: 1,
    explication: "Les spores de C. difficile sont résistantes à la SHA. Il faut un lavage à l'eau et au savon doux pour une élimination mécanique, en plus du port de gants et tablier (précautions Contact).", ref: "SF2H – C. difficile", diff: 2 },

  { ueId: "2.10", q: "En cas de piqûre avec une aiguille souillée, le premier geste recommandé est :", options: ["Faire saigner abondamment la plaie","Nettoyer à l'eau et au savon","Appliquer un pansement compressif","Désinfecter à la Bétadine sans nettoyer"], correct: 1,
    explication: "Il ne faut PAS faire saigner (cela favorise la pénétration). On nettoie immédiatement à l'eau et au savon, puis on réalise une antiseptie par trempage (Dakin/Javel diluée/alcool 70°) au moins 5 minutes.", ref: "GERES – CAT AES", diff: 2 },

  { ueId: "2.10", q: "Le traitement post-exposition (TPE) après un AES à risque doit idéalement être débuté :", options: ["Dans les 4 heures","Dans les 7 jours","Dans le mois","Il n'est jamais indiqué"], correct: 0,
    explication: "Le TPE doit être initié le plus tôt possible, idéalement dans les 4 heures et au plus tard dans les 48 heures suivant l'exposition, après évaluation du risque par le médecin référent.", ref: "GERES", diff: 2 },

  { ueId: "2.10", q: "Les précautions standard s'appliquent :", options: ["Uniquement aux patients infectés connus","Uniquement en réanimation","Pour tout patient, en permanence","Seulement en cas d'épidémie"], correct: 2,
    explication: "Les précautions standard sont un socle appliqué à TOUS les patients en permanence, sans tenir compte du statut infectieux connu ou non, car un portage peut être inconnu.", ref: "SF2H 2017", diff: 1 },

  { ueId: "2.10", q: "La friction hydro-alcoolique (SHA) est, en première intention, indiquée sur :", options: ["Des mains visiblement souillées","Des mains propres et sèches","Des mains mouillées","Après un patient porteur de C. difficile"], correct: 1,
    explication: "La SHA s'applique sur des mains propres, sèches et non souillées. Si les mains sont visiblement sales ou en cas de spores (C. difficile, gale), on recourt au lavage à l'eau et au savon.", ref: "HAS – Hygiène des mains", diff: 1 },

  { ueId: "2.10", q: "Parmi ces infections, laquelle relève de précautions Gouttelettes ?", options: ["Tuberculose pulmonaire","Rougeole","Infection invasive à méningocoque","Varicelle"], correct: 2,
    explication: "Le méningocoque se transmet par gouttelettes (> 5 µm, portée courte) : masque chirurgical à moins d'un mètre. Tuberculose, rougeole et varicelle relèvent des précautions Air (FFP2).", ref: "SF2H 2017", diff: 2 },

  { ueId: "2.10", q: "Le port de gants en précautions standard est indiqué :", options: ["Pour tout contact avec un patient","Uniquement en cas de contact avec sang, liquides biologiques, muqueuses ou peau lésée","Seulement en chirurgie","Jamais"], correct: 1,
    explication: "Les gants ne se portent pas de routine : ils sont indiqués lors d'un contact avec du sang, des liquides biologiques, des muqueuses ou une peau lésée. Le port abusif nuit même à l'hygiène (faux sentiment de sécurité).", ref: "SF2H 2017", diff: 2 },

  { ueId: "2.10", q: "Le principal moyen de prévention du risque viral B (VHB) chez le soignant est :", options: ["Le port systématique de double gants","La vaccination anti-VHB","Le lavage des mains","Le recapuchonnage des aiguilles"], correct: 1,
    explication: "La vaccination anti-VHB est obligatoire pour les soignants et constitue la protection la plus efficace contre le VHB. Le recapuchonnage est au contraire une source majeure d'AES, à proscrire.", ref: "Calendrier vaccinal", diff: 1 },

  { ueId: "2.10", q: "Un porteur sain est :", options: ["Une personne malade et symptomatique","Une personne hébergeant l'agent sans signe clinique mais pouvant le transmettre","Une personne immunisée ne transmettant rien","Un agent infectieux"], correct: 1,
    explication: "Le porteur sain héberge l'agent infectieux (réservoir humain) sans présenter de symptômes, mais peut le transmettre. C'est un enjeu majeur, car le portage passe inaperçu.", ref: "Référentiel IFSI 2009", diff: 2 },

  { ueId: "2.10", q: "Quelle durée minimale d'antiseptie par trempage est recommandée après une effraction cutanée lors d'un AES ?", options: ["30 secondes","1 minute","5 minutes","30 minutes"], correct: 2,
    explication: "Après nettoyage, on réalise une antiseptie par trempage (Dakin, eau de Javel diluée ou alcool à 70°) pendant au moins 5 minutes. Pour une projection muqueuse, on rince ≥ 5 minutes au sérum physiologique ou à l'eau.", ref: "GERES", diff: 3 },

  { ueId: "2.10", q: "Une BMR (bactérie multirésistante) impose typiquement des précautions complémentaires de type :", options: ["Air","Gouttelettes","Contact","Aucune"], correct: 2,
    explication: "Les BMR (et BHRe) se transmettent principalement par contact (mains, surfaces) : précautions Contact avec gants, tablier, SHA et idéalement chambre individuelle.", ref: "SF2H 2017", diff: 2 },

  { ueId: "2.10", q: "La déclaration d'un AES en tant qu'accident du travail doit être faite dans un délai de :", options: ["24 heures","48 heures","8 jours","1 mois"], correct: 0,
    explication: "La déclaration d'accident du travail doit être réalisée dans les 24 heures auprès de l'employeur, en parallèle de la prise en charge médicale et du suivi sérologique.", ref: "Code du travail – AT", diff: 3 },

  { ueId: "2.10", q: "Parmi ces modes de transmission, lequel est un exemple de transmission par véhicule commun ?", options: ["Une toux à courte distance","Une eau ou un aliment contaminé","Une piqûre de moustique","Un contact main-main"], correct: 1,
    explication: "Le véhicule commun désigne un support partagé contaminé (eau, aliments, médicaments, dispositifs). Le moustique relève d'une transmission vectorielle ; le contact main-main d'une transmission par contact direct.", ref: "Référentiel IFSI 2009", diff: 2 },

  { ueId: "2.10", q: "Concernant les aiguilles usagées, quelle pratique est correcte ?", options: ["Recapuchonner avant de jeter","Les éliminer immédiatement dans un collecteur OPCT à proximité","Les déposer sur le plateau","Les transporter à la main jusqu'au local déchets"], correct: 1,
    explication: "Les objets piquants/coupants/tranchants (OPCT) doivent être éliminés immédiatement, sans recapuchonnage, dans un collecteur dédié placé au plus près du soin. Le recapuchonnage est une cause fréquente d'AES.", ref: "SF2H – Prévention AES", diff: 1 },

  { ueId: "2.10", q: "La gale impose, en plus des précautions standard, des précautions :", options: ["Air","Gouttelettes","Contact","Aucune"], correct: 2,
    explication: "La gale (parasite Sarcoptes scabiei) se transmet par contact cutané direct et indirect (literie, vêtements) : précautions Contact, avec traitement de l'environnement et du linge.", ref: "SF2H 2017", diff: 2 },

  { ueId: "2.10", q: "Quel élément n'appartient PAS à la chaîne de transmission ?", options: ["Le réservoir","La porte d'entrée","L'antibiogramme","L'hôte réceptif"], correct: 2,
    explication: "L'antibiogramme est un examen de laboratoire évaluant la sensibilité d'une bactérie aux antibiotiques : ce n'est pas un maillon de la chaîne de transmission, qui comprend agent, réservoir, sorties, transmission, entrée et hôte.", ref: "Référentiel IFSI 2009", diff: 1 },

  { ueId: "2.10", q: "Lors d'une projection de sang dans l'œil, le geste prioritaire est :", options: ["Frotter l'œil","Rincer abondamment au sérum physiologique ou à l'eau pendant au moins 5 minutes","Appliquer un collyre antibiotique","Comprimer l'œil fermé"], correct: 1,
    explication: "En cas de projection muqueuse ou oculaire, on rince immédiatement et abondamment au sérum physiologique ou à l'eau pendant au moins 5 minutes, puis on contacte le référent. Il ne faut surtout pas frotter.", ref: "GERES", diff: 2 },

  { ueId: "2.10", q: "Pourquoi le soignant est-il considéré comme un maillon prioritaire à interrompre ?", options: ["Parce qu'il est toujours malade","Parce que ses mains sont un vecteur majeur de transmission croisée","Parce qu'il est l'agent infectieux","Parce qu'il est l'hôte réceptif"], correct: 1,
    explication: "Les mains du soignant sont le principal vecteur de transmission croisée (manuportée) entre patients. Agir sur l'hygiène des mains casse efficacement la chaîne au niveau du mode de transmission.", ref: "HAS – Hygiène des mains", diff: 2 },

  { ueId: "2.10", q: "Une chambre en pression négative est particulièrement indiquée pour :", options: ["Un patient en précautions Contact (BMR)","Un patient en précautions Air (tuberculose bacillifère)","Un patient en précautions Gouttelettes","Tout patient hospitalisé"], correct: 1,
    explication: "La pression négative évite la diffusion des particules aéroportées vers les couloirs : elle est recherchée pour les précautions Air (ex. tuberculose pulmonaire bacillifère). Elle n'a pas d'intérêt pour le contact.", ref: "SF2H 2017", diff: 3 }
];

export const flashcards = [
  { ueId: "2.10", recto: "Cite les 6 maillons de la chaîne de transmission.", verso: "Agent infectieux, réservoir, porte de sortie, mode de transmission, porte d'entrée, hôte réceptif." },
  { ueId: "2.10", recto: "Gouttelettes vs Air : quels masques ?", verso: "Gouttelettes (> 5 µm) : masque chirurgical. Air (< 5 µm) : masque FFP2." },
  { ueId: "2.10", recto: "Pourquoi la SHA est-elle inefficace sur C. difficile ?", verso: "Le germe sporule ; les spores résistent à l'alcool. On lave à l'eau et au savon doux (action mécanique)." },
  { ueId: "2.10", recto: "Premier geste après une piqûre souillée ?", verso: "Ne pas faire saigner, nettoyer à l'eau et au savon, puis antiseptie par trempage ≥ 5 min." },
  { ueId: "2.10", recto: "Délai idéal d'initiation du TPE après un AES à risque ?", verso: "Le plus tôt possible, idéalement < 4 h, au plus tard 48 h." },
  { ueId: "2.10", recto: "Quand porte-t-on des gants en précautions standard ?", verso: "Contact avec sang, liquides biologiques, muqueuses ou peau lésée. Pas de routine." },
  { ueId: "2.10", recto: "Trois exemples d'infections à précautions Air.", verso: "Tuberculose pulmonaire, rougeole, varicelle." },
  { ueId: "2.10", recto: "Meilleure prévention du VHB chez le soignant ?", verso: "La vaccination anti-VHB (obligatoire)." },
  { ueId: "2.10", recto: "Qu'est-ce qu'un porteur sain ?", verso: "Une personne hébergeant l'agent infectieux sans symptôme, mais pouvant le transmettre." },
  { ueId: "2.10", recto: "Quel type de précautions pour une BMR ?", verso: "Précautions Contact (gants, tablier, SHA, chambre individuelle souhaitée)." },
  { ueId: "2.10", recto: "Délai de déclaration d'un AES en accident du travail ?", verso: "Dans les 24 heures auprès de l'employeur." },
  { ueId: "2.10", recto: "Que faire des aiguilles usagées ?", verso: "Les éliminer immédiatement, sans recapuchonner, dans un collecteur OPCT à proximité du soin." },
  { ueId: "2.10", recto: "Quel maillon vise prioritairement l'hygiène des mains ?", verso: "Le mode de transmission : les mains du soignant sont le principal vecteur manuporté." },
  { ueId: "2.10", recto: "À quoi sert une chambre en pression négative ?", verso: "Éviter la diffusion des particules aéroportées (précautions Air, ex. tuberculose bacillifère)." },
  { ueId: "2.10", recto: "Que faire en cas de projection de sang dans l'œil ?", verso: "Rincer abondamment au sérum physiologique ou à l'eau ≥ 5 min, sans frotter." }
];
