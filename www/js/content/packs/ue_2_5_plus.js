// UE 2.5 PLUS — Processus inflammatoires et infectieux : antibiothérapie, sepsis, infections nosocomiales.
// Pack complémentaire (contenu nouveau, orienté pratique infirmière).

export const fiches = [
  {
    id: "fx_ue_2_5_plus_antibiotherapie", ueId: "2.5", type: "cours",
    titre: "Antibiothérapie : principes et surveillance infirmière",
    resume: "Familles d'antibiotiques, mécanismes, résistances et rôle infirmier dans l'administration et la surveillance.",
    tags: ["antibiotique", "pharmacologie", "résistance", "surveillance"],
    html: `
      <p>Un <span class="key" data-term="antibiotique">antibiotique</span> est une substance qui détruit (<strong>bactéricide</strong>) ou empêche la multiplication (<strong>bactériostatique</strong>) des bactéries. Il est <strong>inefficace sur les virus</strong> : prescrire un antibiotique dans une virose est une erreur qui favorise les résistances.</p>
      <h3>Principales familles</h3>
      <table class="tbl">
        <tr><th>Famille</th><th>Exemples</th><th>Cible / mécanisme</th></tr>
        <tr><td>Bêta-lactamines</td><td>pénicillines, amoxicilline, céphalosporines</td><td>Paroi bactérienne (bactéricide)</td></tr>
        <tr><td>Aminosides</td><td>gentamicine, amikacine</td><td>Ribosome 30S — néphro/ototoxiques</td></tr>
        <tr><td>Fluoroquinolones</td><td>ciprofloxacine, lévofloxacine</td><td>ADN gyrase</td></tr>
        <tr><td>Macrolides</td><td>azithromycine, spiramycine</td><td>Ribosome 50S</td></tr>
        <tr><td>Glycopeptides</td><td>vancomycine</td><td>Paroi (Gram + résistants, SARM)</td></tr>
      </table>
      <h3>Bon usage : le bilan avant antibiotique</h3>
      <ul>
        <li>Réaliser les <strong>prélèvements à visée microbiologique AVANT</strong> la 1ʳᵉ dose (hémocultures, ECBU, prélèvement de pus).</li>
        <li>Antibiothérapie d'abord <span class="key" data-term="probabiliste">probabiliste</span> (large spectre), puis <strong>adaptée</strong> à l'antibiogramme (désescalade).</li>
        <li>Vérifier les <strong>allergies</strong> (notamment pénicillines) avant toute administration.</li>
      </ul>
      <div class="callout"><div class="callout-t">Antibiogramme : S / I / R</div><strong>S</strong> = Sensible, <strong>I</strong> = Intermédiaire, <strong>R</strong> = Résistant. La CMI (concentration minimale inhibitrice) est la plus faible concentration empêchant la croissance bactérienne.</div>
      <h3>Surveillance infirmière</h3>
      <ul>
        <li><strong>Efficacité</strong> : courbe de température, baisse de la CRP, amélioration clinique.</li>
        <li><strong>Tolérance</strong> : troubles digestifs, diarrhée (risque de <span class="key" data-term="clostridioides">Clostridioides difficile</span>), candidoses, réaction allergique.</li>
        <li><strong>Aminosides / vancomycine</strong> : surveillance des <strong>taux sanguins (dosages)</strong>, de la fonction rénale (créatinine) et de l'audition.</li>
        <li>Respecter les <strong>horaires et la durée</strong> pour maintenir des concentrations efficaces.</li>
      </ul>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Aminosides toxiques = « <strong>2 oreilles, 2 reins</strong> » : <strong>oto</strong>toxicité + <strong>néphro</strong>toxicité.</div>
    `,
    refs: ["UE 2.5", "OMS — Résistance aux antimicrobiens"],
  },
  {
    id: "fx_ue_2_5_plus_sepsis", ueId: "2.5", type: "cours",
    titre: "Sepsis et choc septique : reconnaître l'urgence",
    resume: "Du sepsis au choc septique : critères de gravité, score qSOFA et prise en charge des premières heures.",
    tags: ["sepsis", "choc septique", "qSOFA", "urgence"],
    html: `
      <p>Le <span class="key" data-term="sepsis">sepsis</span> est une dysfonction d'organe menaçant le pronostic vital, due à une réponse <strong>dérégulée de l'hôte</strong> à une infection. Le <strong>choc septique</strong> est un sepsis avec hypotension persistante nécessitant des amines et une hyperlactatémie malgré un remplissage adapté.</p>
      <h3>Repérer le sepsis : le score qSOFA</h3>
      <p>Au lit du patient, suspecter un sepsis si <strong>≥ 2 critères</strong> :</p>
      <ul>
        <li><strong>Fréquence respiratoire ≥ 22/min</strong>.</li>
        <li><strong>Pression artérielle systolique ≤ 100 mmHg</strong>.</li>
        <li><strong>Altération de la conscience</strong> (Glasgow &lt; 15).</li>
      </ul>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>qSOFA = « <strong>22 - 100 - confus</strong> » : <strong>FR ≥ 22</strong>, <strong>PAS ≤ 100</strong>, <strong>conscience</strong> altérée.</div>
      <h3>Signes d'alerte associés</h3>
      <ul>
        <li>Fièvre &gt; 38,3 °C OU hypothermie &lt; 36 °C.</li>
        <li>Marbrures, extrémités froides, temps de recoloration cutanée &gt; 3 s.</li>
        <li>Oligurie, lactates élevés, tachycardie.</li>
      </ul>
      <div class="callout"><div class="callout-t">Le « bundle » de la 1ʳᵉ heure</div>Mesurer le <strong>lactate</strong>, prélever des <strong>hémocultures avant antibiotique</strong>, administrer une <strong>antibiothérapie large spectre</strong>, débuter le <strong>remplissage vasculaire</strong> (cristalloïdes) en cas d'hypotension/hyperlactatémie, et introduire des <strong>vasopresseurs</strong> si l'hypotension persiste.</div>
      <h3>Rôle infirmier</h3>
      <ul>
        <li>Surveillance rapprochée des constantes (PA, FC, FR, SpO₂, température, conscience, diurèse).</li>
        <li>Poses de voies veineuses, prélèvements, administration rapide des traitements prescrits.</li>
        <li>Transmission immédiate de toute aggravation : le sepsis est une <strong>urgence temps-dépendante</strong>.</li>
      </ul>
    `,
    refs: ["UE 2.5", "Surviving Sepsis Campaign", "Sepsis-3 (2016)"],
  },
  {
    id: "fx_ue_2_5_plus_nosocomial", ueId: "2.5", type: "cours",
    titre: "Infections nosocomiales et prévention",
    resume: "Définition, principales IAS et mesures de prévention : précautions standard et précautions complémentaires.",
    tags: ["nosocomial", "IAS", "hygiène", "prévention"],
    html: `
      <p>Une <span class="key" data-term="nosocomiale">infection nosocomiale</span> est une infection associée aux soins (IAS) absente à l'admission et survenant au cours ou au décours d'une prise en charge. Le délai conventionnel est de <strong>48 h après l'admission</strong> (ou jusqu'à 30 jours après une chirurgie, 1 an si pose de matériel/prothèse).</p>
      <h3>Les 4 principales infections nosocomiales</h3>
      <table class="tbl">
        <tr><th>Localisation</th><th>Facteur favorisant</th></tr>
        <tr><td>Infection urinaire</td><td>Sondage vésical à demeure</td></tr>
        <tr><td>Pneumopathie</td><td>Ventilation mécanique, alitement</td></tr>
        <tr><td>Infection du site opératoire</td><td>Chirurgie</td></tr>
        <tr><td>Bactériémie / infection sur cathéter</td><td>Voie veineuse centrale</td></tr>
      </table>
      <h3>Précautions standard (pour TOUT patient)</h3>
      <ul>
        <li><span class="key" data-term="friction-hydroalcoolique">Friction hydro-alcoolique</span> : la mesure n°1 de prévention de la transmission croisée.</li>
        <li>Port de gants en cas de contact avec liquides biologiques (un acte = une paire).</li>
        <li>Gestion des excreta, du linge, des déchets (DASRI) et des AES.</li>
      </ul>
      <h3>Précautions complémentaires</h3>
      <ul>
        <li><strong>Contact (C)</strong> : BMR/BHRe, gale, C. difficile → tablier/gants, matériel dédié.</li>
        <li><strong>Gouttelettes (G)</strong> : grippe, méningocoque → masque chirurgical.</li>
        <li><strong>Air (A)</strong> : tuberculose, rougeole → masque FFP2, chambre seule porte fermée.</li>
      </ul>
      <div class="callout"><div class="callout-t">Les 5 indications de l'hygiène des mains (OMS)</div>Avant de toucher le patient, avant un geste aseptique, après risque de contact avec un liquide biologique, après avoir touché le patient, après contact avec son environnement.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Précautions complémentaires = « <strong>CGA</strong> » : <strong>C</strong>ontact, <strong>G</strong>outtelettes, <strong>A</strong>ir.</div>
    `,
    refs: ["UE 2.5", "SF2H — Précautions standard", "OMS — 5 indications de l'hygiène des mains"],
  },
];

export const qcm = [
  { ueId: "2.5", q: "Un antibiotique est inefficace contre :", options: ["Les bactéries Gram +", "Les bactéries Gram -", "Les virus", "Les bactéries anaérobies"], correct: 2,
    explication: "Les antibiotiques agissent sur des cibles propres aux bactéries (paroi, ribosome bactérien, ADN gyrase). Les virus n'ont pas ces structures : prescrire un antibiotique dans une virose est inutile et favorise les résistances.", ref: "UE 2.5", diff: 1 },
  { ueId: "2.5", q: "Que signifie « R » sur un antibiogramme ?", options: ["Recommandé", "Résistant", "Rapide", "Réduit"], correct: 1,
    explication: "S = Sensible, I = Intermédiaire, R = Résistant. Un antibiotique noté R ne doit pas être utilisé pour traiter la bactérie testée car elle y est résistante.", ref: "UE 2.5", diff: 1 },
  { ueId: "2.5", q: "Avant la première injection d'antibiotique chez un patient fébrile, l'infirmier(e) doit prioritairement :", options: ["Administrer un antipyrétique", "Réaliser les prélèvements microbiologiques (hémocultures)", "Attendre 24 h", "Doubler la dose"], correct: 1,
    explication: "Les prélèvements à visée microbiologique (hémocultures, ECBU, pus) doivent être réalisés AVANT la première dose d'antibiotique, sinon l'antibiotique négative les cultures et empêche d'identifier le germe et d'adapter le traitement.", ref: "UE 2.5", diff: 1 },
  { ueId: "2.5", q: "Les aminosides (ex. gentamicine) sont surtout toxiques pour :", options: ["Le foie et le pancréas", "Le rein et l'oreille interne", "Le cœur et les poumons", "La moelle osseuse"], correct: 1,
    explication: "Les aminosides sont néphrotoxiques et ototoxiques. La surveillance comprend la fonction rénale (créatinine), les dosages sanguins et l'audition.", ref: "UE 2.5", diff: 2 },
  { ueId: "2.5", q: "Une diarrhée survenant sous antibiothérapie à large spectre doit faire évoquer :", options: ["Une allergie médicamenteuse", "Une infection à Clostridioides difficile", "Un surdosage en paracétamol", "Une hypoglycémie"], correct: 1,
    explication: "Les antibiotiques détruisent la flore intestinale protectrice et favorisent la prolifération de Clostridioides difficile, responsable de colites avec diarrhées. Précautions complémentaires Contact requises.", ref: "UE 2.5", diff: 2 },
  { ueId: "2.5", q: "La vancomycine est un glycopeptide indiqué notamment contre :", options: ["Le SARM (staphylocoque doré résistant à la méticilline)", "Les virus grippaux", "Les candidoses", "Le paludisme"], correct: 0,
    explication: "La vancomycine (glycopeptide) agit sur les bactéries Gram + résistantes, en particulier le SARM. Elle nécessite une surveillance des dosages sanguins et de la fonction rénale.", ref: "UE 2.5", diff: 2 },
  { ueId: "2.5", q: "Le score qSOFA comprend, entre autres, le critère :", options: ["FR ≥ 22/min", "Température > 40 °C", "Glycémie > 2 g/L", "Diurèse > 2 L/j"], correct: 0,
    explication: "Le qSOFA repose sur 3 critères : FR ≥ 22/min, PAS ≤ 100 mmHg et altération de la conscience (Glasgow < 15). Au moins 2 critères font suspecter un sepsis.", ref: "UE 2.5", diff: 2 },
  { ueId: "2.5", q: "Le choc septique se définit par :", options: ["Une simple fièvre isolée", "Une hypotension persistante nécessitant des vasopresseurs avec hyperlactatémie malgré le remplissage", "Une bradycardie", "Une infection localisée sans retentissement"], correct: 1,
    explication: "Le choc septique est un sepsis avec hypotension persistante nécessitant des amines vasopressives pour maintenir la PAM et une hyperlactatémie malgré un remplissage vasculaire adapté. C'est le stade le plus grave.", ref: "UE 2.5", diff: 2 },
  { ueId: "2.5", q: "Dans le « bundle » de la 1ʳᵉ heure du sepsis, parmi les actions figure :", options: ["Mettre le patient à jeun strict 48 h", "Administrer une antibiothérapie large spectre après hémocultures", "Donner des diurétiques", "Attendre l'antibiogramme avant tout traitement"], correct: 1,
    explication: "Le bundle de la 1ʳᵉ heure : mesurer le lactate, prélever des hémocultures avant antibiotique, administrer une antibiothérapie large spectre, débuter le remplissage et introduire des vasopresseurs si l'hypotension persiste. Le sepsis est temps-dépendant.", ref: "UE 2.5", diff: 3 },
  { ueId: "2.5", q: "Des marbrures et un temps de recoloration cutanée > 3 secondes évoquent :", options: ["Une bonne perfusion tissulaire", "Une hypoperfusion / signe de gravité", "Une allergie", "Une déshydratation bénigne"], correct: 1,
    explication: "Marbrures et allongement du temps de recoloration cutanée (> 3 s) traduisent une hypoperfusion périphérique, signe de gravité hémodynamique à transmettre en urgence dans un contexte septique.", ref: "UE 2.5", diff: 2 },
  { ueId: "2.5", q: "Une infection est dite nosocomiale lorsqu'elle survient classiquement :", options: ["Avant l'admission", "Au moins 48 h après l'admission", "Uniquement à domicile", "Seulement après la sortie"], correct: 1,
    explication: "L'infection nosocomiale est absente à l'admission et apparaît au moins 48 h après celle-ci (ou jusqu'à 30 jours après une chirurgie, 1 an en cas de prothèse/matériel).", ref: "UE 2.5", diff: 1 },
  { ueId: "2.5", q: "L'infection nosocomiale la plus fréquente est :", options: ["L'infection urinaire", "La méningite", "L'endocardite", "L'hépatite"], correct: 0,
    explication: "L'infection urinaire, le plus souvent liée au sondage vésical à demeure, est la première infection nosocomiale en fréquence, devant les pneumopathies, les infections de site opératoire et les bactériémies.", ref: "UE 2.5", diff: 1 },
  { ueId: "2.5", q: "La mesure n°1 de prévention de la transmission croisée est :", options: ["Le port systématique de gants stériles", "La friction hydro-alcoolique des mains", "L'antibioprophylaxie", "La chambre seule pour tous"], correct: 1,
    explication: "L'hygiène des mains par friction hydro-alcoolique est la mesure la plus efficace et la moins coûteuse pour prévenir la transmission croisée des micro-organismes.", ref: "UE 2.5", diff: 1 },
  { ueId: "2.5", q: "Pour un patient porteur de tuberculose pulmonaire bacillifère, on applique des précautions :", options: ["Contact", "Gouttelettes", "Air (masque FFP2)", "Standard uniquement"], correct: 2,
    explication: "La tuberculose se transmet par voie aérienne (fines particules). Les précautions Air imposent un masque FFP2 pour les soignants, une chambre seule à porte fermée et, idéalement, un masque chirurgical au patient lors des sorties.", ref: "UE 2.5", diff: 2 },
  { ueId: "2.5", q: "Une bactérie multirésistante (BMR) justifie des précautions complémentaires de type :", options: ["Air", "Contact", "Gouttelettes", "Aucune"], correct: 1,
    explication: "Les BMR (ex. SARM, entérobactéries productrices de bêta-lactamases) se transmettent surtout par contact : précautions Contact avec tablier/gants à usage unique et matériel dédié, en plus des précautions standard.", ref: "UE 2.5", diff: 2 },
  { ueId: "2.5", q: "Combien y a-t-il d'indications à l'hygiène des mains selon l'OMS ?", options: ["2", "3", "5", "10"], correct: 2,
    explication: "L'OMS définit 5 indications : avant de toucher le patient, avant un geste aseptique, après un risque de contact avec un liquide biologique, après avoir touché le patient, après contact avec son environnement.", ref: "UE 2.5", diff: 2 },
  { ueId: "2.5", q: "Une antibiothérapie « probabiliste » signifie :", options: ["Choisie au hasard", "Débutée à large spectre avant l'identification du germe", "Réservée aux virus", "Administrée seulement par voie orale"], correct: 1,
    explication: "L'antibiothérapie probabiliste est initiée à large spectre en fonction du site infecté et des germes probables, avant les résultats microbiologiques, puis adaptée (désescalade) à l'antibiogramme.", ref: "UE 2.5", diff: 2 },
  { ueId: "2.5", q: "Le risque infectieux d'une voie veineuse centrale est principalement :", options: ["L'infection urinaire", "La bactériémie / infection sur cathéter", "La pneumopathie", "La gale"], correct: 1,
    explication: "Une voie veineuse centrale est une porte d'entrée directe vers le sang : elle expose au risque de bactériémie et d'infection liée au cathéter, d'où l'importance de l'asepsie à la pose et des soins du point d'insertion.", ref: "UE 2.5", diff: 2 },
  { ueId: "2.5", q: "Avant d'administrer une pénicilline, l'infirmier(e) doit impérativement vérifier :", options: ["Le poids exact à 100 g près", "Les antécédents d'allergie", "La glycémie", "La température extérieure"], correct: 1,
    explication: "Les bêta-lactamines (pénicillines) sont une cause fréquente d'allergie, parfois grave (choc anaphylactique). La recherche d'antécédents allergiques est indispensable avant toute administration.", ref: "UE 2.5", diff: 1 },
  { ueId: "2.5", q: "L'efficacité d'une antibiothérapie se surveille notamment par :", options: ["La hausse de la température", "La baisse de la CRP et l'amélioration clinique", "L'augmentation des leucocytes", "La couleur des urines uniquement"], correct: 1,
    explication: "L'efficacité s'évalue cliniquement (apyrexie, amélioration de l'état général) et biologiquement par la décroissance des marqueurs inflammatoires comme la CRP et la normalisation de la numération.", ref: "UE 2.5", diff: 2 },
  { ueId: "2.5", q: "Le calcul d'un débit : 1000 mL à passer en 8 h en perfusion (1 mL = 20 gouttes). Le débit est d'environ :", options: ["21 gouttes/min", "42 gouttes/min", "60 gouttes/min", "10 gouttes/min"], correct: 1,
    explication: "Débit (gtt/min) = (volume en mL × 20) / (durée en min) = (1000 × 20) / (8 × 60) = 20000 / 480 ≈ 42 gouttes/min. Compétence essentielle pour administrer une antibiothérapie IV.", ref: "UE 2.5 / UE 4.4", diff: 3 },
];

export const flashcards = [
  { ueId: "2.5", recto: "Antibiotique : bactéricide ou bactériostatique ?", verso: "Bactéricide = tue la bactérie ; bactériostatique = bloque sa multiplication." },
  { ueId: "2.5", recto: "Un antibiotique agit-il sur les virus ?", verso: "Non. Inefficace sur les virus ; l'utiliser à tort favorise les résistances." },
  { ueId: "2.5", recto: "Que faire AVANT la 1ʳᵉ dose d'antibiotique ?", verso: "Réaliser les prélèvements microbiologiques (hémocultures, ECBU, pus) et vérifier les allergies." },
  { ueId: "2.5", recto: "Signification de S / I / R sur l'antibiogramme ?", verso: "S = Sensible, I = Intermédiaire, R = Résistant." },
  { ueId: "2.5", recto: "Deux toxicités majeures des aminosides ?", verso: "Néphrotoxicité (rein) et ototoxicité (oreille interne)." },
  { ueId: "2.5", recto: "Diarrhée sous antibiotiques : germe à craindre ?", verso: "Clostridioides difficile (colite) → précautions Contact." },
  { ueId: "2.5", recto: "Les 3 critères du score qSOFA ?", verso: "FR ≥ 22/min, PAS ≤ 100 mmHg, altération de la conscience (Glasgow < 15)." },
  { ueId: "2.5", recto: "Qu'est-ce que le choc septique ?", verso: "Sepsis avec hypotension nécessitant des vasopresseurs + hyperlactatémie malgré remplissage." },
  { ueId: "2.5", recto: "Délai définissant une infection nosocomiale ?", verso: "Au moins 48 h après l'admission (30 j après chirurgie, 1 an si prothèse)." },
  { ueId: "2.5", recto: "Infection nosocomiale la plus fréquente ?", verso: "L'infection urinaire (liée au sondage vésical)." },
  { ueId: "2.5", recto: "Mesure n°1 de prévention de la transmission croisée ?", verso: "La friction hydro-alcoolique des mains." },
  { ueId: "2.5", recto: "Les 3 types de précautions complémentaires ?", verso: "Contact, Gouttelettes, Air (mnémo : CGA)." },
  { ueId: "2.5", recto: "Quel masque pour la tuberculose (précautions Air) ?", verso: "Masque FFP2 pour le soignant, chambre seule porte fermée." },
  { ueId: "2.5", recto: "Combien d'indications à l'hygiène des mains (OMS) ?", verso: "5 indications (avant patient, avant geste aseptique, après liquide biologique, après patient, après environnement)." },
  { ueId: "2.5", recto: "Comment surveiller l'efficacité d'une antibiothérapie ?", verso: "Apyrexie, amélioration clinique, baisse de la CRP et normalisation des leucocytes." },
];
