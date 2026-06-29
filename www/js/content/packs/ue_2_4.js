export const fiches = [
  { id: "f_2_4_traumatologie_bases", ueId: "2.4", type: "cours",
    titre: "Le traumatisme : définitions et mécanismes",
    resume: "Un traumatisme est l'ensemble des lésions provoquées par un agent extérieur agressant l'organisme.",
    tags: ["traumatisme", "lesion", "mecanisme", "polytraumatise"],
    html: `<h3>Définitions</h3>
<p>Un <span class="key" data-term="traumatisme">traumatisme</span> est l'ensemble des lésions locales et générales provoquées par l'action brutale d'un agent extérieur (mécanique, thermique, chimique, électrique) sur l'organisme.</p>
<ul>
<li><strong>Contusion</strong> : lésion sans rupture de la peau (atteinte des tissus sous-jacents).</li>
<li><strong>Plaie</strong> : effraction cutanée avec solution de continuité.</li>
<li><strong>Polytraumatisé</strong> : patient présentant au moins deux lésions traumatiques dont une au moins met en jeu le pronostic vital.</li>
<li><strong>Polyfracturé</strong> : plusieurs fractures sans engagement du pronostic vital.</li>
</ul>
<h3>Mécanismes lésionnels</h3>
<ul>
<li><strong>Direct</strong> : la lésion siège au point d'impact.</li>
<li><strong>Indirect</strong> : la lésion siège à distance du point d'impact (transmission de l'énergie).</li>
<li><strong>Décélération</strong> : arrachements, ruptures vasculaires (AVP, chute de hauteur).</li>
</ul>
<div class="callout"><div class="callout-t">Notion d'énergie cinétique</div>La gravité d'un traumatisme dépend de l'énergie transmise : Ec = 1/2 m v². La vitesse pèse davantage que la masse (élevée au carré).</div>
<h3>Réaction de l'organisme</h3>
<p>Tout traumatisme déclenche une réaction inflammatoire locale (rougeur, chaleur, douleur, oedème) et peut entraîner une réaction générale : <span class="key" data-term="choc">état de choc</span>, douleur, stress.</p>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Inflammation = les 4 signes de Celse : <strong>R</strong>ougeur, <strong>C</strong>haleur, <strong>D</strong>ouleur, <strong>T</strong>uméfaction (oedème).</div>`,
    refs: ["UE 2.4"] },

  { id: "f_2_4_fractures", ueId: "2.4", type: "patho",
    titre: "Fractures : classification, signes et complications",
    resume: "Une fracture est une solution de continuité d'un os, classée selon le trait, le déplacement et l'ouverture cutanée.",
    tags: ["fracture", "os", "consolidation", "complications"],
    html: `<h3>Définition</h3>
<p>Une <span class="key" data-term="fracture">fracture</span> est une rupture de la continuité d'un os, partielle ou complète, sous l'effet d'un traumatisme (ou pathologique sur os fragilisé).</p>
<h3>Classifications</h3>
<table class="tbl">
<tr><th>Critère</th><th>Types</th></tr>
<tr><td>Trait</td><td>Transversal, oblique, spiroïde, comminutif (plusieurs fragments)</td></tr>
<tr><td>Peau</td><td>Fermée / Ouverte (communique avec l'extérieur, risque infectieux)</td></tr>
<tr><td>Déplacement</td><td>Non déplacée / déplacée (angulation, chevauchement, rotation)</td></tr>
<tr><td>Enfant</td><td>En bois vert, motte de beurre (os souple)</td></tr>
</table>
<h3>Signes cliniques</h3>
<ul>
<li>Douleur vive, exquise à la palpation.</li>
<li>Impotence fonctionnelle.</li>
<li>Déformation, oedème, hématome.</li>
<li>Signes inconstants mais spécifiques : mobilité anormale, crépitation osseuse (à ne JAMAIS rechercher).</li>
</ul>
<div class="callout"><div class="callout-t">Fracture ouverte = urgence</div>Classification de Cauchoix/Gustilo. Antibioprophylaxie, prévention antitétanique (SAT/VAT), parage et stabilisation rapides : risque d'infection osseuse (ostéite).</div>
<h3>Consolidation</h3>
<p>Formation d'un <span class="key" data-term="cal osseux">cal osseux</span> : hématome fracturaire → cal mou (fibrocartilage) → cal dur (os) → remodelage. Délai indicatif : 6 semaines (membre supérieur) à 3 mois (membre inférieur), variable selon l'os et l'âge.</p>
<h3>Complications</h3>
<ul>
<li><strong>Immédiates</strong> : vasculaires, nerveuses, cutanées, hémorragie, choc.</li>
<li><strong>Secondaires</strong> : déplacement, infection, syndrome des loges, embolie graisseuse, phlébite.</li>
<li><strong>Tardives</strong> : retard de consolidation, pseudarthrose (absence de consolidation), cal vicieux, raideur, algodystrophie.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Surveillance d'un plâtre = les "5 P" du syndrome des loges : <strong>P</strong>ain (douleur croissante), <strong>P</strong>âleur, <strong>P</strong>arésie (déficit moteur), <strong>P</strong>aresthésies, <strong>P</strong>ouls aboli (tardif) → urgence : fendre/retirer le plâtre.</div>`,
    refs: ["UE 2.4"] },

  { id: "f_2_4_etat_choc_hemorragie", ueId: "2.4", type: "patho",
    titre: "État de choc et hémorragie post-traumatique",
    resume: "L'état de choc est une insuffisance circulatoire aiguë entraînant une hypoperfusion tissulaire et une souffrance cellulaire.",
    tags: ["choc", "hemorragie", "hypovolemie", "urgence"],
    html: `<h3>Définition</h3>
<p>L'<span class="key" data-term="etat de choc">état de choc</span> est une défaillance circulatoire aiguë altérant l'oxygénation des tissus. En traumatologie, il est le plus souvent <strong>hypovolémique</strong> (par hémorragie).</p>
<h3>Types de choc</h3>
<table class="tbl">
<tr><th>Type</th><th>Mécanisme</th></tr>
<tr><td>Hypovolémique</td><td>Perte de volume sanguin (hémorragie, déshydratation, brûlure)</td></tr>
<tr><td>Cardiogénique</td><td>Défaillance de la pompe cardiaque</td></tr>
<tr><td>Distributif</td><td>Vasoplégie : septique, anaphylactique, neurogénique</td></tr>
<tr><td>Obstructif</td><td>Obstacle au remplissage/éjection (tamponnade, pneumothorax compressif, EP)</td></tr>
</table>
<h3>Signes cliniques du choc hypovolémique</h3>
<ul>
<li><strong>Tachycardie</strong> (signe précoce et compensateur).</li>
<li><strong>Hypotension artérielle</strong> (signe plus tardif, PAS < 90 mmHg).</li>
<li>Pâleur, marbrures, extrémités froides, allongement du temps de recoloration cutanée (> 3 s).</li>
<li>Oligurie (< 0,5 mL/kg/h), soif, polypnée, agitation puis troubles de conscience.</li>
</ul>
<div class="callout"><div class="callout-t">Hémorragies non visibles</div>Penser aux saignements internes : abdomen (rate, foie), bassin, thorax, fémur (une fracture fémorale peut faire perdre 1 à 1,5 L). Un saignement peut être occulte malgré une PA initialement conservée.</div>
<h3>Conduite à tenir / surveillance IDE</h3>
<ul>
<li>Compression directe d'une hémorragie externe, surélévation, garrot en dernier recours.</li>
<li>Position allongée, jambes surélevées, oxygénothérapie, réchauffement.</li>
<li>Pose de 2 voies veineuses de gros calibre, remplissage vasculaire sur prescription.</li>
<li>Surveillance : PA, FC, FR, SpO2, conscience, diurèse, recoloration.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Triade létale du polytraumatisé : <strong>Hypothermie + Acidose + Coagulopathie</strong> → cercle vicieux à briser.</div>`,
    refs: ["UE 2.4"] },

  { id: "f_2_4_brulures_tete", ueId: "2.4", type: "patho",
    titre: "Brûlures et traumatisme crânien",
    resume: "Brûlures (gravité = surface, profondeur, siège) et TC (surveillance neurologique par le score de Glasgow).",
    tags: ["brulure", "traumatisme cranien", "Glasgow", "Wallace"],
    html: `<h3>Brûlures</h3>
<p>La gravité d'une <span class="key" data-term="brulure">brûlure</span> dépend de la SURFACE, de la PROFONDEUR, du SIÈGE, du terrain et de la cause.</p>
<h4>Profondeur</h4>
<ul>
<li><strong>1er degré</strong> : épiderme, érythème douloureux (coup de soleil), guérison sans séquelle.</li>
<li><strong>2e degré superficiel</strong> : phlyctènes (cloques), très douloureux, guérison spontanée.</li>
<li><strong>2e degré profond</strong> : atteinte du derme, hypoesthésie, cicatrisation lente.</li>
<li><strong>3e degré</strong> : destruction totale, aspect cartonné/blanc, INDOLORE (destruction des terminaisons nerveuses), nécessite greffe.</li>
</ul>
<h4>Surface : règle des 9 de Wallace (adulte)</h4>
<table class="tbl">
<tr><th>Zone</th><th>%</th></tr>
<tr><td>Tête et cou</td><td>9 %</td></tr>
<tr><td>Chaque membre supérieur</td><td>9 %</td></tr>
<tr><td>Chaque membre inférieur</td><td>18 %</td></tr>
<tr><td>Face antérieure du tronc</td><td>18 %</td></tr>
<tr><td>Face postérieure du tronc</td><td>18 %</td></tr>
<tr><td>Périnée</td><td>1 %</td></tr>
</table>
<div class="callout"><div class="callout-t">Risques majeurs de la brûlure grave</div>Choc hypovolémique (fuite plasmatique), infection, atteinte des voies aériennes (brûlure par inhalation, suies, voix rauque), troubles métaboliques. La paume de la main du patient ≈ 1 % de surface corporelle.</div>
<h3>Traumatisme crânien (TC)</h3>
<p>Surveillance neurologique par le <span class="key" data-term="score de Glasgow">score de Glasgow</span> (GCS), de 3 à 15.</p>
<table class="tbl">
<tr><th>Réponse</th><th>Cotation</th></tr>
<tr><td>Ouverture des yeux (Y)</td><td>1 à 4</td></tr>
<tr><td>Réponse verbale (V)</td><td>1 à 5</td></tr>
<tr><td>Réponse motrice (M)</td><td>1 à 6</td></tr>
</table>
<ul>
<li>GCS 13-15 : TC léger ; 9-12 : modéré ; ≤ 8 : grave (coma, risque d'inhalation, intubation).</li>
<li>Signes d'alerte : céphalées croissantes, vomissements, troubles de conscience, anisocorie, agitation, convulsions, déficit moteur.</li>
</ul>
<div class="callout"><div class="callout-t">Hématome extra-dural</div>Urgence neurochirurgicale : intervalle libre puis aggravation rapide de la conscience. Surveillance rapprochée +++ après tout TC.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Glasgow = "<strong>Y V M</strong>" maxi = 4 + 5 + 6 = 15. Score le plus bas = 3 (jamais 0).</div>`,
    refs: ["UE 2.4"] },
];

export const qcm = [
  { ueId: "2.4", q: "Quelle est la définition d'un polytraumatisé ?", options: ["Plusieurs fractures sans gravité vitale", "Au moins deux lésions traumatiques dont une menace le pronostic vital", "Une fracture ouverte du fémur", "Toute personne victime d'un AVP"], correct: 1,
    explication: "Le polytraumatisé présente au moins deux lésions dont une au moins engage le pronostic vital. Plusieurs fractures sans menace vitale définissent le polyfracturé.", ref: "UE 2.4", diff: 1 },

  { ueId: "2.4", q: "Quels sont les 4 signes cardinaux de l'inflammation (signes de Celse) ?", options: ["Pâleur, froideur, douleur, oedème", "Rougeur, chaleur, douleur, tuméfaction", "Fièvre, frissons, sueurs, asthénie", "Cyanose, hypotension, tachycardie, soif"], correct: 1,
    explication: "Les 4 signes de Celse sont : rougeur, chaleur, douleur et tuméfaction (oedème). Ils traduisent la réaction inflammatoire locale.", ref: "UE 2.4", diff: 1 },

  { ueId: "2.4", q: "Une fracture ouverte impose en priorité :", options: ["Une simple immobilisation", "Une prévention du risque infectieux et tétanique", "Une rééducation immédiate", "Aucune mesure spécifique"], correct: 1,
    explication: "La fracture ouverte communique avec l'extérieur : risque infectieux majeur (ostéite). On associe antibioprophylaxie, prévention antitétanique (SAT/VAT), parage et stabilisation.", ref: "UE 2.4", diff: 1 },

  { ueId: "2.4", q: "Quel est le signe le plus PRÉCOCE d'un choc hypovolémique ?", options: ["Hypotension artérielle franche", "Tachycardie", "Coma", "Bradycardie"], correct: 1,
    explication: "La tachycardie est un signe compensateur précoce. L'hypotension apparaît plus tardivement, lorsque les mécanismes de compensation sont dépassés.", ref: "UE 2.4", diff: 2 },

  { ueId: "2.4", q: "L'absence de consolidation osseuse à terme s'appelle :", options: ["Un cal vicieux", "Une pseudarthrose", "Une algodystrophie", "Une ostéite"], correct: 1,
    explication: "La pseudarthrose est l'absence de consolidation d'une fracture au-delà du délai normal. Le cal vicieux est une consolidation en mauvaise position.", ref: "UE 2.4", diff: 2 },

  { ueId: "2.4", q: "Selon la règle des 9 de Wallace, quel pourcentage représente un membre inférieur entier chez l'adulte ?", options: ["9 %", "18 %", "1 %", "36 %"], correct: 1,
    explication: "Chaque membre inférieur représente 18 % (9 % face antérieure + 9 % face postérieure). Un membre supérieur = 9 %, la tête = 9 %.", ref: "UE 2.4", diff: 2 },

  { ueId: "2.4", q: "Une brûlure du 3e degré est caractérisée par :", options: ["Une douleur très intense", "Des phlyctènes", "Une lésion indolore d'aspect cartonné", "Un simple érythème"], correct: 2,
    explication: "Le 3e degré détruit toutes les couches cutanées et les terminaisons nerveuses : la brûlure est INDOLORE, d'aspect blanc/cartonné, et nécessite une greffe.", ref: "UE 2.4", diff: 2 },

  { ueId: "2.4", q: "Le score de Glasgow le plus bas possible est :", options: ["0", "1", "3", "5"], correct: 2,
    explication: "Le score de Glasgow va de 3 (Y1 + V1 + M1) à 15. Il ne peut jamais être inférieur à 3 ni égal à 0.", ref: "UE 2.4", diff: 1 },

  { ueId: "2.4", q: "Un traumatisme crânien est dit grave lorsque le score de Glasgow est :", options: ["13 à 15", "9 à 12", "Inférieur ou égal à 8", "Égal à 15"], correct: 2,
    explication: "GCS ≤ 8 définit le TC grave (coma) : risque d'inhalation, indication d'intubation et de protection des voies aériennes.", ref: "UE 2.4", diff: 2 },

  { ueId: "2.4", q: "Quelle complication redoute-t-on principalement sous plâtre devant une douleur croissante et un membre froid/pâle ?", options: ["Une algodystrophie", "Un syndrome des loges / compression", "Une pseudarthrose", "Une embolie pulmonaire"], correct: 1,
    explication: "Douleur intense croissante, oedème, pâleur, froideur, déficit sensitivo-moteur sous plâtre évoquent un syndrome des loges ou une compression vasculo-nerveuse : urgence, fendre/retirer le plâtre.", ref: "UE 2.4", diff: 2 },

  { ueId: "2.4", q: "Quel choc résulte d'une réaction allergique grave ?", options: ["Choc cardiogénique", "Choc anaphylactique", "Choc hypovolémique", "Choc obstructif"], correct: 1,
    explication: "Le choc anaphylactique est un choc distributif lié à une vasoplégie d'origine allergique. Le traitement de première intention est l'adrénaline.", ref: "UE 2.4", diff: 1 },

  { ueId: "2.4", q: "Le cal osseux correspond à :", options: ["Une infection de l'os", "Le tissu de réparation assurant la consolidation", "Une fracture pathologique", "Un déplacement secondaire"], correct: 1,
    explication: "Le cal osseux est le tissu de réparation (cal mou puis cal dur) formé lors de la consolidation d'une fracture, suivi d'un remodelage.", ref: "UE 2.4", diff: 1 },

  { ueId: "2.4", q: "Devant une hémorragie externe importante d'un membre, le premier geste est :", options: ["Poser immédiatement un garrot", "La compression directe manuelle", "Surélever le patient assis", "Administrer de l'oxygène uniquement"], correct: 1,
    explication: "La compression manuelle directe est le geste de première intention. Le garrot est réservé aux situations où la compression est inefficace ou impossible.", ref: "UE 2.4", diff: 1 },

  { ueId: "2.4", q: "Une fracture en bois vert s'observe surtout :", options: ["Chez la personne âgée ostéoporotique", "Chez l'enfant (os souple)", "Sur os pathologique tumoral", "Lors d'une fracture de fatigue"], correct: 1,
    explication: "La fracture en bois vert est typique de l'enfant : l'os, encore souple, se rompt de façon incomplète comme une jeune branche verte.", ref: "UE 2.4", diff: 2 },

  { ueId: "2.4", q: "Quel paramètre traduit le mieux une mauvaise perfusion périphérique ?", options: ["Une diurèse abondante", "Un temps de recoloration cutanée allongé (> 3 s)", "Une peau chaude et rose", "Une bradypnée"], correct: 1,
    explication: "Un temps de recoloration cutanée supérieur à 3 secondes, associé à des marbrures et des extrémités froides, signe une hypoperfusion périphérique (état de choc).", ref: "UE 2.4", diff: 2 },

  { ueId: "2.4", q: "L'hématome extra-dural se caractérise typiquement par :", options: ["Une absence totale de symptôme", "Un intervalle libre suivi d'une aggravation rapide de la conscience", "Une amélioration progressive spontanée", "Des signes uniquement à un mois"], correct: 1,
    explication: "L'hématome extra-dural est une urgence neurochirurgicale : après un intervalle libre, la conscience s'altère rapidement (compression cérébrale). D'où la surveillance neurologique rapprochée après un TC.", ref: "UE 2.4", diff: 3 },

  { ueId: "2.4", q: "La triade létale du polytraumatisé associe :", options: ["Fièvre, tachycardie, hypertension", "Hypothermie, acidose, coagulopathie", "Douleur, oedème, rougeur", "Hyperthermie, alcalose, hypercoagulabilité"], correct: 1,
    explication: "La triade létale associe hypothermie, acidose métabolique et coagulopathie, formant un cercle vicieux aggravant qu'il faut interrompre (réchauffement, correction de l'hémorragie).", ref: "UE 2.4", diff: 3 },

  { ueId: "2.4", q: "Une lésion siégeant à distance du point d'impact relève d'un mécanisme :", options: ["Direct", "Indirect", "Thermique", "Chimique"], correct: 1,
    explication: "Dans le mécanisme indirect, l'énergie est transmise le long du squelette et la lésion apparaît à distance du point d'impact (ex. chute sur la main entraînant une fracture de la clavicule ou de l'extrémité supérieure de l'humérus).", ref: "UE 2.4", diff: 2 },

  { ueId: "2.4", q: "Quel élément ne doit JAMAIS être recherché volontairement devant une suspicion de fracture ?", options: ["La douleur à la palpation", "L'impotence fonctionnelle", "La mobilité anormale et la crépitation osseuse", "L'oedème"], correct: 2,
    explication: "La mobilité anormale et la crépitation osseuse sont des signes spécifiques mais leur recherche provoque douleur et lésions supplémentaires : elles ne doivent jamais être recherchées activement.", ref: "UE 2.4", diff: 2 },

  { ueId: "2.4", q: "Chez le brûlé grave, le principal mécanisme du choc initial est :", options: ["Cardiogénique", "Hypovolémique par fuite plasmatique", "Septique d'emblée", "Anaphylactique"], correct: 1,
    explication: "Dans les heures suivant une brûlure étendue, la fuite plasmatique massive provoque une hypovolémie : le choc initial est hypovolémique. L'infection survient secondairement.", ref: "UE 2.4", diff: 2 },

  { ueId: "2.4", q: "La surface de la paume de la main du patient correspond environ à :", options: ["0,1 % de la surface corporelle", "1 % de la surface corporelle", "9 % de la surface corporelle", "5 % de la surface corporelle"], correct: 1,
    explication: "La paume de la main du patient (doigts compris) représente environ 1 % de sa surface corporelle : utile pour estimer les brûlures de petite étendue ou éparses.", ref: "UE 2.4", diff: 2 },
];

export const flashcards = [
  { ueId: "2.4", recto: "Définition d'un traumatisme ?", verso: "Ensemble des lésions provoquées par l'action brutale d'un agent extérieur (mécanique, thermique, chimique, électrique) sur l'organisme." },
  { ueId: "2.4", recto: "Différence polytraumatisé / polyfracturé ?", verso: "Polytraumatisé : au moins 2 lésions dont une menace le pronostic vital. Polyfracturé : plusieurs fractures sans menace vitale." },
  { ueId: "2.4", recto: "Les 4 signes de Celse (inflammation) ?", verso: "Rougeur, chaleur, douleur, tuméfaction (oedème)." },
  { ueId: "2.4", recto: "Différence contusion / plaie ?", verso: "Contusion : lésion sans effraction cutanée. Plaie : effraction de la peau (solution de continuité)." },
  { ueId: "2.4", recto: "Qu'est-ce qu'une fracture ouverte et son risque principal ?", verso: "Fracture communiquant avec l'extérieur. Risque principal : infection (ostéite). Prévention antitétanique + antibioprophylaxie." },
  { ueId: "2.4", recto: "Étapes de la consolidation osseuse ?", verso: "Hématome fracturaire → cal mou (fibrocartilage) → cal dur (os) → remodelage." },
  { ueId: "2.4", recto: "Qu'est-ce qu'une pseudarthrose ?", verso: "Absence de consolidation d'une fracture au-delà du délai normal." },
  { ueId: "2.4", recto: "Signes d'alerte sous plâtre ?", verso: "Douleur croissante, oedème, pâleur/froideur, déficit sensitivo-moteur → compression ou syndrome des loges = urgence." },
  { ueId: "2.4", recto: "Quel est le choc le plus fréquent en traumatologie ?", verso: "Le choc hypovolémique, par hémorragie (perte de volume sanguin)." },
  { ueId: "2.4", recto: "Signe précoce vs tardif du choc hypovolémique ?", verso: "Précoce : tachycardie (compensation). Tardif : hypotension artérielle." },
  { ueId: "2.4", recto: "Triade létale du polytraumatisé ?", verso: "Hypothermie, acidose, coagulopathie." },
  { ueId: "2.4", recto: "Règle des 9 de Wallace : tête, membre supérieur, membre inférieur ?", verso: "Tête et cou = 9 %, chaque membre supérieur = 9 %, chaque membre inférieur = 18 %." },
  { ueId: "2.4", recto: "Caractéristique clé de la brûlure du 3e degré ?", verso: "Indolore (destruction des terminaisons nerveuses), aspect cartonné/blanc, nécessite une greffe." },
  { ueId: "2.4", recto: "Bornes du score de Glasgow ?", verso: "De 3 (minimum) à 15 (maximum) : Yeux (1-4) + Verbal (1-5) + Moteur (1-6)." },
  { ueId: "2.4", recto: "À partir de quel Glasgow parle-t-on de TC grave ?", verso: "GCS ≤ 8 : TC grave (coma), risque d'inhalation, indication d'intubation." },
  { ueId: "2.4", recto: "Qu'est-ce que l'hématome extra-dural ?", verso: "Urgence neurochirurgicale : intervalle libre puis aggravation rapide de la conscience après un TC." },
  { ueId: "2.4", recto: "Premier geste devant une hémorragie externe ?", verso: "Compression manuelle directe ; garrot uniquement en dernier recours." },
];
