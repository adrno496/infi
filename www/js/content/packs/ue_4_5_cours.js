export const fiches = [
  { id: "fco_4_5_risque_danger", ueId: "4.5", type: "cours",
    titre: "Risque, danger et triangle du risque",
    resume: "Le risque naît de la rencontre entre un danger et une personne exposée.",
    tags: ["d'après tes cours","gestion des risques","concepts"],
    html: `<p>La <span class="key" data-term="perception du risque">perception du risque</span> varie selon les personnes (sensibilité, expérience) et évolue dans le temps. Elle est conditionnée par l'environnement et l'état de forme (bruit, stress, fatigue). On la caractérise par sa <strong>fréquence</strong> (la situation arrive-t-elle souvent ?), sa <strong>gravité</strong> (que pourrait-il arriver ?) et sa <strong>cible</strong> (qui ? patient, agent, bâtiment).</p>
<h3>Équation fondamentale</h3>
<div class="callout"><div class="callout-t">À retenir</div><p><strong>DANGER + EXPOSITION = RISQUE.</strong> Le risque est l'éventualité de la rencontre entre une personne (patient ou pro) et une situation de danger à laquelle elle est exposée au cours de son séjour ou de son activité.</p></div>
<h3>Chaîne de l'événement (exemple de la chute)</h3>
<ul>
<li><strong>Danger</strong> : personne âgée agitée la nuit.</li>
<li><strong>Absence de mesure préventive</strong> : pas de contention.</li>
<li><strong>Exposition</strong> : elle descend seule du lit à 3h.</li>
<li><strong>Événement indésirable</strong> : elle tombe.</li>
<li><strong>Dommage</strong> : fracture du col du fémur.</li>
</ul>
<table class="tbl"><tr><th>Terme</th><th>Définition</th></tr>
<tr><td>Danger</td><td>Ce qui menace ou compromet la sécurité</td></tr>
<tr><td>Dommage</td><td>Préjudice porté à une personne (corporel, moral ou matériel)</td></tr>
<tr><td>Réservoir</td><td>Lieu de multiplication des micro-organismes</td></tr>
<tr><td>Source</td><td>Lieu d'où viennent les micro-organismes juste avant la transmission</td></tr>
<tr><td>Infection</td><td>Maladie provoquée par la transmission d'un micro-organisme</td></tr></table>
<p>Le <strong>risque 0 n'existe pas</strong> : l'hôpital est un milieu à risques où intervient le facteur humain.</p>`,
    refs: ["D'après tes cours (UE 4.5)"] },

  { id: "fco_4_5_prise_gestion_risque", ueId: "4.5", type: "cours",
    titre: "Prise de risque et démarche de gestion des risques",
    resume: "Tout accident est précédé de précurseurs ; l'analyse a posteriori permet de progresser.",
    tags: ["d'après tes cours","pyramide de Bird","a posteriori"],
    html: `<p>La prise de risque est <strong>quotidienne</strong> et liée à la recherche d'un bénéfice ; elle est souvent une condition de la performance. Elle peut être :</p>
<ul>
<li><strong>Volontaire</strong> : traiter, augmenter la performance d'un traitement.</li>
<li><strong>Involontaire</strong> : contrainte organisationnelle, fatigue mentale, exposition à des risques non prévus ou non connus.</li>
</ul>
<p>L'<span class="key" data-term="attention">attention</span> est la fonction cognitive qui sélectionne les infos utiles. Sa force est de réaliser efficacement la tâche en cours ; sa faiblesse est le risque de ne plus percevoir les autres dangers de l'environnement.</p>
<h3>Pyramide de Bird</h3>
<p>Tout accident a toujours été précédé d'événements <span class="key" data-term="précurseur">précurseurs</span>. Rechercher leurs causes permet d'éviter un événement plus grave ou de limiter sa fréquence.</p>
<h3>Analyse « a posteriori »</h3>
<p>Mémoriser l'expérience passée pour en tirer des axes de progrès : recenser les accidents, enregistrer les EI, identifier et analyser chaque accident. Trois décisions possibles :</p>
<ul>
<li><strong>Acceptation</strong> du risque : le laisser tel quel.</li>
<li><strong>Réduction</strong> du risque : le réduire.</li>
<li><strong>Refus</strong> du risque : le supprimer complètement.</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div><p>Déculpabiliser : nous prenons tous des risques, donc nous faisons des erreurs. <strong>Pas de sanction, pas de jugement</strong> : il faut distinguer l'erreur de la faute et cultiver une « culture de l'erreur positive ». Signaler et lever le doute sont des enjeux de sécurité.</p></div>`,
    refs: ["D'après tes cours (UE 4.5)"] },

  { id: "fco_4_5_evenements_indesirables", ueId: "4.5", type: "cours",
    titre: "Événements indésirables : définitions clés",
    resume: "EI, EIAS et EIG : trois niveaux à distinguer pour le signalement.",
    tags: ["d'après tes cours","EI","EIG"],
    html: `<table class="tbl"><tr><th>Terme</th><th>Définition</th></tr>
<tr><td><strong>Événement indésirable (EI)</strong></td><td>Toute situation qui s'écarte des procédures ou résultats attendus et potentiellement source de dommage.</td></tr>
<tr><td><strong>EI associé aux soins (EIAS)</strong></td><td>Tout incident préjudiciable à un patient hospitalisé survenu lors de la réalisation d'un acte de soin (prévention, investigation, traitement).</td></tr>
<tr><td><strong>EI grave (EIG)</strong></td><td>Événement inattendu au regard de l'état de santé, dont les conséquences mettent en jeu le pronostic vital ou entraînent un déficit fonctionnel permanent.</td></tr></table>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><p><strong>EI</strong> = écart simple, <strong>EIAS</strong> = écart lié aux soins, <strong>EIG</strong> = écart Grave (pronostic vital / séquelle permanente).</p></div>
<p>Finalité de la gestion des risques pour la sécurité des soins : <strong>limiter le danger pour les patients</strong> lors de tous les gestes pratiqués, par la connaissance des risques, l'élimination de certains et la protection vis-à-vis des risques à prendre.</p>`,
    refs: ["D'après tes cours (UE 4.5)"] },

  { id: "fco_4_5_risque_infectieux", ueId: "4.5", type: "cours",
    titre: "Risque infectieux hospitalier (IAS)",
    resume: "Les infections associées aux soins touchent 5 % des hospitalisés ; prévention par les précautions standard.",
    tags: ["d'après tes cours","infection nosocomiale","IAS"],
    html: `<p>Le <span class="key" data-term="risque infectieux">risque infectieux</span> est le risque d'infection lié aux soins ou aux diagnostics (infections <span class="key" data-term="nosocomiale">nosocomiales</span>). Le malade peut s'infecter avec ses propres micro-organismes ou via les autres malades (<strong>transmission croisée</strong>).</p>
<h3>Données en France</h3>
<ul>
<li>Les IAS concernent <strong>5 % des patients hospitalisés</strong>.</li>
<li>Les plus courantes : infections urinaires, infections du site opératoire, pneumonies, bactériémies.</li>
<li>Conséquences : durées d'hospitalisation prolongées, réinterventions, <strong>3000 à 4000 décès/an</strong>.</li>
<li>Risque augmenté avec l'âge, le terrain et la nature des actes ; un dispositif invasif multiplie le risque d'infection par <strong>4,61</strong>.</li>
</ul>
<h3>Micro-organismes = virus, bactéries, champignons, prions</h3>
<table class="tbl"><tr><th>Milieu</th><th>Germe à risque</th></tr>
<tr><td>Air (travaux)</td><td><strong>Aspergillus</strong></td></tr>
<tr><td>Eau</td><td><strong>Légionelle</strong>, <strong>Pseudomonas aeruginosa</strong></td></tr></table>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><p><strong>Air = Aspergillus</strong> (travaux), <strong>Eau = Légionelle</strong>.</p></div>
<div class="callout"><div class="callout-t">À retenir</div><p>Les <strong>précautions standard</strong> sont la première barrière à la transmission croisée. L'<strong>hygiène des mains</strong> (FHA) est le geste central, complété par les EPI et les précautions complémentaires adaptées à la voie de transmission.</p></div>`,
    refs: ["D'après tes cours (UE 4.5)"] },

  { id: "fco_4_5_environnement_dechets", ueId: "4.5", type: "cours",
    titre: "Risque infectieux : environnement, matériel, déchets et linge",
    resume: "Maîtriser surfaces, eau, air, matériel, déchets (DAOM/DAS/DASRI) et linge.",
    tags: ["d'après tes cours","DASRI","environnement"],
    html: `<h3>Environnement</h3>
<table class="tbl"><tr><th>Élément</th><th>Risque</th><th>Action</th></tr>
<tr><td>Surfaces</td><td>Prolifération microbienne</td><td>Entretien : produits adaptés, bon dosage, respect du temps de contact</td></tr>
<tr><td>Eau</td><td>Légionelle, Pseudomonas</td><td>Entretien réseau, purge des bras morts, filtres terminaux sur douches, surveillance microbiologique</td></tr>
<tr><td>Air</td><td>Aspergillus (travaux)</td><td>Protection des zones, fenêtres fermées lors de gros travaux, surveillance des salles à traitement d'air</td></tr></table>
<h3>Matériel</h3>
<p>Transmission indirecte par matériel contaminé. Respecter les protocoles de traitement, le niveau de désinfection, vérifier les dates de péremption, l'intégrité de l'emballage, stocker au propre. Pour les DM réutilisables : pré-désinfection, rinçage, séchage, stockage, stérilisation.</p>
<h3>Déchets : 3 types</h3>
<ul>
<li><strong>DAOM</strong> : Déchets Assimilés aux Ordures Ménagères (hôtellerie).</li>
<li><strong>DAS</strong> : Déchets d'Activité de Soins non dangereux.</li>
<li><strong>DASRI</strong> : Déchets d'Activité de Soins à Risque Infectieux (piquants, coupants, tranchants, produits sanguins, déchets anatomiques).</li>
</ul>
<p>Élimination = tri + collecte + transport + entreposage + traitement. Décret du <strong>13 juillet 1994</strong> : interdiction de mélanger les déchets, filière réglementée pour DAS et DASRI.</p>
<h3>Linge</h3>
<p>Le linge sale est un vecteur de transmission : manipuler avec gants + tablier UU, pas de linge contre soi ni au sol, sacs étanches fermés, respecter tri, circuit et hygiène des mains.</p>`,
    refs: ["D'après tes cours (UE 4.5)"] },

  { id: "fco_4_5_methode_alarm", ueId: "4.5", type: "cours",
    titre: "Méthode ALARM et grille des 7 facteurs",
    resume: "Analyse a posteriori des causes profondes des EI selon 7 catégories de facteurs.",
    tags: ["d'après tes cours","ALARM","HAS"],
    html: `<p>La <span class="key" data-term="méthode ALARM">méthode ALARM</span> est une méthode d'analyse des causes profondes des EI liés aux soins, adaptée au milieu hospitalier. C'est une démarche <strong>a posteriori</strong> qui remonte la chronologie des faits pour identifier les écarts aux pratiques de référence.</p>
<div class="callout"><div class="callout-t">À retenir</div><p>Objectif (HAS) : comprendre les causes en mettant l'accent sur les <strong>facteurs organisationnels et systémiques</strong>, et non sur les individus qui font des erreurs. Finalité : amélioration continue de la sécurité.</p></div>
<h3>Étapes</h3>
<ul>
<li>Reconstitution chronologique factuelle (qui a fait quoi, quand, où ; anonymat).</li>
<li>Recherche des causes immédiates (problèmes dans la PEC).</li>
<li>Recherche des facteurs contributifs / causes profondes (racines).</li>
</ul>
<h3>Les 7 catégories de facteurs contributifs (grille ALARM HAS)</h3>
<table class="tbl"><tr><th>N°</th><th>Catégorie</th><th>Exemples</th></tr>
<tr><td>1</td><td>Patient</td><td>Antécédents, état de santé, traitements, facteurs sociaux, relations conflictuelles</td></tr>
<tr><td>2</td><td>Tâches à accomplir</td><td>Protocoles, résultats d'examens, aides à la décision, planification</td></tr>
<tr><td>3</td><td>Individu (soignant)</td><td>Qualifications/compétences, stress physique ou psychologique</td></tr>
<tr><td>4</td><td>Équipe</td><td>Communication, informations écrites, transmissions, encadrement</td></tr>
<tr><td>5</td><td>Environnement de travail</td><td>Locaux, équipements, informatique, effectifs, charge de travail, délais</td></tr>
<tr><td>6</td><td>Organisation & management</td><td>Hiérarchie, RH/intérim, formation continue, politique qualité</td></tr>
<tr><td>7</td><td>Contexte institutionnel</td><td>Politique de santé nationale/régionale, systèmes de signalement</td></tr></table>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><p><strong>PaTIEnt-ECO</strong> : Patient, Tâches, Individu, Équipe, Environnement, Organisation, contexte institutionnel.</p></div>`,
    refs: ["D'après tes cours (UE 4.5)"] },

  { id: "fco_4_5_transfusion_securite", ueId: "4.5", type: "cours",
    titre: "Sécurité transfusionnelle et CULM",
    resume: "Règles des 3 unités, contrôles de concordance et contrôle ultime au lit du malade.",
    tags: ["d'après tes cours","transfusion","CULM"],
    html: `<h3>Règles pré-transfusionnelles</h3>
<ul>
<li>Prévenir le patient (information par le médecin) et vérifier qu'il a été informé.</li>
<li>Délai < 6 h depuis la réception du CGR ; un médecin présent et joignable.</li>
<li>Contrôler la validité : prescription médicale, carte de groupe (2 déterminations), résultat de RAI.</li>
</ul>
<h3>Les 3 règles de sécurité (les 3 unités)</h3>
<table class="tbl"><tr><th>Unité</th><th>Signification</th></tr>
<tr><td>Unité d'action</td><td>Tous les contrôles par la même personne</td></tr>
<tr><td>Unité de lieu</td><td>Au chevet du patient, avec tous les documents obligatoires</td></tr>
<tr><td>Unité de temps</td><td>Contrôle simultané du patient et de la poche</td></tr></table>
<h3>Identitovigilance</h3>
<p>Faire <strong>épeler le nom de naissance, le prénom et décliner la date de naissance</strong>, puis contrôler la concordance sur les 2 déterminations de carte de groupe, la RAI, l'ordonnance et la fiche de délivrance.</p>
<h3>CULM (Contrôle Ultime au Lit du Malade)</h3>
<div class="callout"><div class="callout-t">À retenir</div><p>Le CULM par carton-test est <strong>obligatoire pour chaque CGR</strong>, réalisé au lit du patient, sur chaque poche. Il prévient l'accident d'<strong>incompatibilité ABO</strong>. Pour PFC et plaquettes : contrôle de concordance uniquement (pas de carton-test). Carte conservée ≥ 4 h après la transfusion.</p></div>
<p>Validité de la <span class="key" data-term="RAI">RAI</span> hors urgence : <strong>72 h</strong> (jusqu'à 21 jours selon protocole EFS si pas d'antécédent transfusionnel/obstétrical). Surveillance : rester ≥ 15 min auprès du patient au branchement, noter l'état initial (pouls, TA, T°, SaO2, FR).</p>`,
    refs: ["D'après tes cours (UE 4.5)"] },

  { id: "fco_4_5_groupes_sanguins", ueId: "4.5", type: "cours",
    titre: "Systèmes de groupes sanguins ABO et compatibilités",
    resume: "Antigènes, anticorps et règles de compatibilité CGR et plasma.",
    tags: ["d'après tes cours","ABO","compatibilité"],
    html: `<table class="tbl"><tr><th>Groupe</th><th>Antigènes (GR)</th><th>Anticorps (plasma)</th></tr>
<tr><td>A</td><td>Ag A</td><td>anti-B</td></tr>
<tr><td>B</td><td>Ag B</td><td>anti-A</td></tr>
<tr><td>AB</td><td>Ag A et B</td><td>aucun (receveur universel CGR)</td></tr>
<tr><td>O</td><td>aucun</td><td>anti-A et anti-B (donneur universel CGR)</td></tr></table>
<div class="callout"><div class="callout-t">À retenir</div><p>Principe du contrôle ultime : <strong>ne pas apporter au patient un antigène qu'il ne possède pas si l'anticorps correspondant est présent</strong>. Pour les CGR, O est donneur universel, AB receveur universel.</p></div>
<h3>Compatibilité plasma (PFC) — règle inversée</h3>
<p>Le plasma contient les anticorps : <strong>AB est donneur universel</strong> de plasma, O receveur universel de plasma. Ex : un patient A reçoit du PFC A ou AB ; un patient O reçoit du plasma de tous groupes.</p>
<h3>Phénotype Rhésus-Kell</h3>
<p>Recherche des antigènes <strong>D, C, E, c, e et K</strong>. La prescription de CGR <strong>phénotypés</strong> limite l'allo-immunisation (obligatoire chez la femme jusqu'à la ménopause et si RAI positive). Le CGR <strong>compatibilisé</strong> (cross-match) est obligatoire si RAI positive.</p>
<p>Circonstances favorisant les anticorps anti-érythrocytaires immuns : <strong>grossesse, transfusion, greffe</strong>.</p>`,
    refs: ["D'après tes cours (UE 4.5)"] },
];

export const qcm = [
  { ueId: "4.5", q: "Quelle est l'équation fondamentale du risque ?", options: ["Danger × Gravité = Risque","Danger + Exposition = Risque","Fréquence + Cible = Risque","Dommage + Source = Risque"], correct: 1,
    explication: "Le risque est l'éventualité de la rencontre entre une personne et un danger auquel elle est exposée : Danger + Exposition = Risque.", ref: "UE 4.5", diff: 1 },
  { ueId: "4.5", q: "Dans la chaîne de l'événement, comment nomme-t-on la fracture du col du fémur après une chute ?", options: ["Danger","Événement indésirable","Dommage","Exposition"], correct: 2,
    explication: "La chute est l'événement indésirable ; la fracture qui en résulte est le dommage (préjudice corporel).", ref: "UE 4.5", diff: 1 },
  { ueId: "4.5", q: "Que désigne un événement indésirable grave (EIG) ?", options: ["Tout écart aux procédures","Un incident lié à un acte de soin","Un événement mettant en jeu le pronostic vital ou laissant un déficit fonctionnel permanent","Une simple erreur sans conséquence"], correct: 2,
    explication: "L'EIG met en jeu le pronostic vital ou entraîne un déficit fonctionnel permanent, contrairement à l'EI simple ou à l'EIAS.", ref: "UE 4.5", diff: 2 },
  { ueId: "4.5", q: "Que signifie une analyse « a posteriori » en gestion des risques ?", options: ["Anticiper un risque futur","Analyser un événement déjà survenu pour en tirer des axes de progrès","Supprimer tout risque possible","Évaluer un risque avant l'acte"], correct: 1,
    explication: "L'analyse a posteriori remonte la chronologie d'un événement passé pour comprendre ses causes et progresser.", ref: "UE 4.5", diff: 1 },
  { ueId: "4.5", q: "Quelle décision correspond à « réduction du risque » ?", options: ["Le laisser tel quel","Le réduire","Le supprimer complètement","L'ignorer"], correct: 1,
    explication: "Acceptation = le laisser tel quel, réduction = le réduire, refus = le supprimer complètement.", ref: "UE 4.5", diff: 1 },
  { ueId: "4.5", q: "Quelle est la proportion de patients hospitalisés concernés par une IAS en France ?", options: ["1 %","5 %","15 %","25 %"], correct: 1,
    explication: "Les infections associées aux soins concernent environ 5 % des patients hospitalisés.", ref: "UE 4.5", diff: 1 },
  { ueId: "4.5", q: "Quel germe est principalement lié à l'air lors de travaux hospitaliers ?", options: ["Légionelle","Pseudomonas aeruginosa","Aspergillus","Staphylocoque"], correct: 2,
    explication: "Air = Aspergillus (risque accru lors de travaux) ; Eau = Légionelle et Pseudomonas.", ref: "UE 4.5", diff: 1 },
  { ueId: "4.5", q: "Dans quels déchets élimine-t-on les objets piquants, coupants, tranchants ?", options: ["DAOM","DAS","DASRI","Ordures ménagères"], correct: 2,
    explication: "Les DASRI regroupent les déchets piquants/coupants/tranchants et à risque infectieux, avec une filière réglementée.", ref: "UE 4.5", diff: 1 },
  { ueId: "4.5", q: "Quelle est la première barrière à la transmission croisée ?", options: ["Les précautions complémentaires","Les précautions standard","Le port systématique du masque","L'isolement de tous les patients"], correct: 1,
    explication: "Les précautions standard, dont l'hygiène des mains, sont la première barrière à la transmission croisée.", ref: "UE 4.5", diff: 2 },
  { ueId: "4.5", q: "Sur quels facteurs la méthode ALARM met-elle l'accent ?", options: ["Les individus fautifs","Les facteurs organisationnels et systémiques","Les sanctions disciplinaires","La performance financière"], correct: 1,
    explication: "ALARM cherche les causes profondes systémiques plutôt que de désigner les individus qui font des erreurs.", ref: "UE 4.5", diff: 2 },
  { ueId: "4.5", q: "Combien de catégories de facteurs contributifs compte la grille ALARM de la HAS ?", options: ["5","6","7","8"], correct: 2,
    explication: "La grille ALARM comporte 7 catégories : patient, tâches, individu, équipe, environnement, organisation/management, contexte institutionnel.", ref: "UE 4.5", diff: 2 },
  { ueId: "4.5", q: "La qualification et les compétences du soignant relèvent de quelle catégorie ALARM ?", options: ["Facteurs liés au patient","Facteurs liés à l'individu","Facteurs liés à l'équipe","Facteurs liés au contexte institutionnel"], correct: 1,
    explication: "Les qualifications, compétences et facteurs de stress du soignant relèvent des facteurs liés à l'individu.", ref: "UE 4.5", diff: 2 },
  { ueId: "4.5", q: "Quelles sont les 3 règles de sécurité de l'acte transfusionnel ?", options: ["Unité de dose, de voie, de débit","Unité d'action, de lieu, de temps","Unité de groupe, de RAI, de poche","Unité de médecin, d'IDE, d'AS"], correct: 1,
    explication: "Les 3 unités : action (même personne), lieu (chevet du patient), temps (contrôle simultané patient/poche).", ref: "UE 4.5", diff: 2 },
  { ueId: "4.5", q: "Le contrôle ultime au lit du malade (carton-test) prévient principalement :", options: ["L'allo-immunisation Kell","L'accident par incompatibilité ABO","La surcharge volémique","L'infection de la poche"], correct: 1,
    explication: "Le CULM par carton-test prévient l'accident par incompatibilité ABO ; il est réalisé sur chaque poche de CGR.", ref: "UE 4.5", diff: 2 },
  { ueId: "4.5", q: "Pour quels produits le CULM par carton-test (test de compatibilité) est-il requis ?", options: ["CGR, PFC et plaquettes","CGR uniquement","Plaquettes uniquement","PFC uniquement"], correct: 1,
    explication: "Le test de compatibilité (carton-test) ne concerne que les CGR ; pour PFC et plaquettes, seul le contrôle de concordance est requis.", ref: "UE 4.5", diff: 3 },
  { ueId: "4.5", q: "Quelle est la durée de validité de la RAI hors urgence vitale (cas général) ?", options: ["24 heures","48 heures","72 heures","7 jours"], correct: 2,
    explication: "La RAI est valable 72 h hors urgence (jusqu'à 21 jours selon protocole EFS en l'absence d'antécédent transfusionnel/obstétrical).", ref: "UE 4.5", diff: 2 },
  { ueId: "4.5", q: "Quel groupe sanguin est donneur universel de CGR (globules rouges) ?", options: ["A","AB","O","B"], correct: 2,
    explication: "O ne porte aucun antigène A/B sur ses GR : c'est le donneur universel de CGR.", ref: "UE 4.5", diff: 1 },
  { ueId: "4.5", q: "Quels anticorps un sujet de groupe O possède-t-il dans son plasma ?", options: ["Aucun","anti-A seulement","anti-A et anti-B","anti-AB seulement"], correct: 2,
    explication: "Le groupe O n'a pas d'antigène mais possède les anticorps anti-A et anti-B.", ref: "UE 4.5", diff: 2 },
  { ueId: "4.5", q: "Quel groupe est donneur universel de plasma (PFC) ?", options: ["O","A","AB","B"], correct: 2,
    explication: "Pour le plasma la règle est inversée : AB (sans anticorps) est donneur universel de plasma, O en est receveur universel.", ref: "UE 4.5", diff: 3 },
  { ueId: "4.5", q: "Quels antigènes recherche un phénotype érythrocytaire Rhésus-Kell ?", options: ["A, B, O","D, C, E, c, e, K","Fya, Lea","Anti-A, anti-B"], correct: 1,
    explication: "Le phénotype Rhésus-Kell recherche les antigènes D, C, E, c, e et K.", ref: "UE 4.5", diff: 2 },
  { ueId: "4.5", q: "Combien de temps l'IDE doit-elle rester auprès du patient après le branchement d'une transfusion ?", options: ["Moins de 5 minutes","Au moins 15 minutes","30 minutes","1 heure"], correct: 1,
    explication: "Il faut rester au moins 15 minutes auprès du patient au branchement pour détecter une réaction précoce.", ref: "UE 4.5", diff: 2 },
  { ueId: "4.5", q: "Qui est habilité à prescrire des PSL (produits sanguins labiles) ?", options: ["L'infirmière","Le médecin responsable du patient","La cadre de santé","L'aide-soignant"], correct: 1,
    explication: "La prescription de PSL est un acte médical : seul le médecin responsable du patient la rédige et la signe (non délégable).", ref: "UE 4.5", diff: 2 },
  { ueId: "4.5", q: "Quel soluté peut être passé en dérivation avec un CGR ?", options: ["Sérum glucosé 5 %","Soluté salé à 9 ‰","Ringer-lactate","Plasma"], correct: 1,
    explication: "Seul le sérum physiologique (soluté salé à 9 ‰ / NaCl 0,9 %) peut accompagner un CGR ; glucosé et Ringer-lactate sont à éviter.", ref: "UE 4.5", diff: 3 },
  { ueId: "4.5", q: "Que faire en premier en cas de suspicion d'effet indésirable receveur ?", options: ["Retirer la voie veineuse","Arrêter la transfusion et appeler le médecin","Poursuivre la surveillance","Jeter la poche"], correct: 1,
    explication: "On arrête la transfusion (en gardant la voie veineuse), on appelle le médecin et on se réfère à la procédure ; on n'enlève pas la VVP.", ref: "UE 4.5", diff: 2 },
];

export const flashcards = [
  { ueId: "4.5", recto: "Équation du risque ?", verso: "Danger + Exposition = Risque." },
  { ueId: "4.5", recto: "Trois critères pour caractériser un risque ?", verso: "Fréquence, gravité, cible." },
  { ueId: "4.5", recto: "Différence erreur / faute en culture de sécurité ?", verso: "On déculpabilise et on signale l'erreur (pas de sanction) ; la faute relève d'un manquement. Culture de l'erreur positive." },
  { ueId: "4.5", recto: "Que dit la pyramide de Bird ?", verso: "Tout accident est précédé d'événements précurseurs ; les analyser évite un événement plus grave." },
  { ueId: "4.5", recto: "EI, EIAS, EIG ?", verso: "EI = écart aux procédures source potentielle de dommage ; EIAS = incident lié à un acte de soin ; EIG = pronostic vital engagé ou déficit fonctionnel permanent." },
  { ueId: "4.5", recto: "Proportion d'IAS chez les hospitalisés en France ?", verso: "Environ 5 %." },
  { ueId: "4.5", recto: "Air = ? / Eau = ? (germes hospitaliers)", verso: "Air = Aspergillus (travaux) ; Eau = Légionelle et Pseudomonas aeruginosa." },
  { ueId: "4.5", recto: "Les 3 types de déchets hospitaliers ?", verso: "DAOM (ordures ménagères), DAS (soins non dangereux), DASRI (soins à risque infectieux)." },
  { ueId: "4.5", recto: "Première barrière à la transmission croisée ?", verso: "Les précautions standard, notamment l'hygiène des mains (FHA)." },
  { ueId: "4.5", recto: "But de la méthode ALARM ?", verso: "Analyser a posteriori les causes profondes d'un EI en ciblant les facteurs organisationnels/systémiques, pas les individus." },
  { ueId: "4.5", recto: "Les 7 facteurs de la grille ALARM ?", verso: "Patient, Tâches, Individu, Équipe, Environnement, Organisation/management, Contexte institutionnel." },
  { ueId: "4.5", recto: "Les 3 unités de sécurité transfusionnelle ?", verso: "Unité d'action (même personne), unité de lieu (chevet du patient), unité de temps (contrôle simultané patient/poche)." },
  { ueId: "4.5", recto: "Que prévient le CULM par carton-test ?", verso: "L'accident par incompatibilité ABO ; il est réalisé au lit du malade, sur chaque poche de CGR." },
  { ueId: "4.5", recto: "CULM requis pour quels produits ?", verso: "Test de compatibilité (carton-test) pour les CGR uniquement ; PFC et plaquettes = contrôle de concordance seul." },
  { ueId: "4.5", recto: "Durée de validité de la RAI hors urgence ?", verso: "72 heures (jusqu'à 21 jours selon protocole EFS sans antécédent transfusionnel/obstétrical)." },
  { ueId: "4.5", recto: "Antigènes et anticorps du groupe O ?", verso: "Aucun antigène A/B ; anticorps anti-A et anti-B. Donneur universel de CGR." },
  { ueId: "4.5", recto: "Donneur universel de plasma (PFC) ?", verso: "AB (sans anticorps anti-A/anti-B). Règle inversée par rapport aux CGR." },
  { ueId: "4.5", recto: "Antigènes recherchés au phénotype Rhésus-Kell ?", verso: "D, C, E, c, e et K." },
  { ueId: "4.5", recto: "Seul soluté compatible en dérivation avec un CGR ?", verso: "Sérum physiologique (soluté salé à 9 ‰ / NaCl 0,9 %)." },
  { ueId: "4.5", recto: "Conduite en cas de suspicion d'effet indésirable receveur ?", verso: "Arrêter la transfusion (garder la VVP), appeler le médecin, suivre la procédure de l'établissement, signaler." },
  { ueId: "4.5", recto: "Qui prescrit les PSL ?", verso: "Le médecin responsable du patient (acte médical non délégable, ordonnance signée)." },
];
