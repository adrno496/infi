// UE 2.6 — Processus psychopathologiques. Pack de révision IFSI (référentiel 2009).
export const fiches = [
  {
    id: "f_2_6_bases", ueId: "2.6", type: "cours",
    titre: "Bases de la psychopathologie et sémiologie",
    resume: "Repères fondamentaux : normal/pathologique, sémiologie et grands axes de la souffrance psychique.",
    tags: ["psychopathologie", "sémiologie", "psychiatrie", "santé mentale"],
    html: `
      <p>La <span class="key" data-term="psychopathologie">psychopathologie</span> étudie les troubles du fonctionnement psychique : pensée, humeur, perception, comportement et relation. La frontière entre <strong>normal et pathologique</strong> n'est pas seulement statistique : on parle de trouble quand il existe une <strong>souffrance</strong>, une <strong>altération du fonctionnement</strong> (social, professionnel) et une <strong>durée</strong> significative.</p>
      <h3>Repères de sémiologie psychiatrique</h3>
      <ul>
        <li><strong>Humeur</strong> : tonalité affective de base (triste, exaltée, labile).</li>
        <li><strong>Pensée</strong> : cours (ralenti, accéléré, <span class="key" data-term="fuite des idées">fuite des idées</span>) et contenu (<span class="key" data-term="délire">idées délirantes</span>).</li>
        <li><strong>Perception</strong> : <span class="key" data-term="hallucination">hallucinations</span> (perception sans objet) et illusions (déformation d'un objet réel).</li>
        <li><strong>Conscience de soi et du trouble</strong> : <span class="key" data-term="insight">insight</span> (reconnaissance ou non de la maladie).</li>
        <li><strong>Comportement</strong> : agitation, ralentissement, conduites à risque, repli.</li>
      </ul>
      <div class="callout"><div class="callout-t">Délire vs hallucination</div>Le <strong>délire</strong> est un trouble du <em>contenu de la pensée</em> (conviction inébranlable, non partagée). L'<strong>hallucination</strong> est un trouble de la <em>perception</em> (entendre, voir sans stimulus réel).</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Pour évaluer une crise : « <em>HPCC</em> » = <strong>H</strong>umeur, <strong>P</strong>ensée, <strong>C</strong>onscience (du trouble), <strong>C</strong>omportement.</div>
    `,
    refs: ["UE 2.6"],
  },
  {
    id: "f_2_6_psychose", ueId: "2.6", type: "patho",
    titre: "Troubles psychotiques : schizophrénie et bouffée délirante",
    resume: "Symptômes positifs/négatifs, schizophrénie, BDA et repères de prise en charge.",
    tags: ["psychose", "schizophrénie", "délire", "hallucinations"],
    html: `
      <p>Les <span class="key" data-term="psychose">troubles psychotiques</span> se caractérisent par une perte de contact avec la réalité. La <strong>schizophrénie</strong> débute souvent chez l'adulte jeune (15–25 ans) et évolue de façon chronique.</p>
      <table class="tbl">
        <tr><th>Symptômes positifs</th><th>Symptômes négatifs</th></tr>
        <tr><td>Délire, hallucinations (souvent auditives), désorganisation</td><td>Émoussement affectif, retrait social, apragmatisme, alogie</td></tr>
      </table>
      <h3>Syndromes clés</h3>
      <ul>
        <li><strong>Syndrome positif</strong> : idées délirantes, <span class="key" data-term="automatisme mental">automatisme mental</span> (vol/écho de la pensée, voix commentant les actes).</li>
        <li><strong>Syndrome négatif/déficitaire</strong> : appauvrissement de la vie psychique.</li>
        <li><strong>Désorganisation</strong> : discours incohérent, <span class="key" data-term="ambivalence">ambivalence</span>, discordance idéo-affective.</li>
      </ul>
      <p>La <span class="key" data-term="bouffée délirante aiguë">bouffée délirante aiguë</span> (BDA) est un délire d'apparition brutale, polymorphe, de bonne réactivité au traitement, qui peut être inaugural.</p>
      <div class="callout danger"><div class="callout-t">Vigilance infirmière</div>Évaluer le risque suicidaire et hétéro-agressif, surveiller l'observance du traitement antipsychotique, instaurer une relation de confiance sans entrer dans le délire (ni l'approuver, ni le contredire frontalement).</div>
    `,
    refs: ["UE 2.6"],
  },
  {
    id: "f_2_6_humeur_anxiete", ueId: "2.6", type: "patho",
    titre: "Troubles de l'humeur et troubles anxieux",
    resume: "Dépression, trouble bipolaire, anxiété généralisée et attaque de panique.",
    tags: ["dépression", "bipolaire", "anxiété", "humeur", "suicide"],
    html: `
      <h3>Épisode dépressif caractérisé</h3>
      <p>Association durable (≥ 2 semaines) d'une <strong>humeur triste</strong>, d'une <span class="key" data-term="anhédonie">anhédonie</span> (perte du plaisir) et d'un ralentissement, avec troubles du sommeil, de l'appétit, idées de dévalorisation et <strong>idées suicidaires</strong>.</p>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo dépression</div>« <em>TRISTE</em> » : <strong>T</strong>ristesse, <strong>R</strong>alentissement, <strong>I</strong>nsomnie, <strong>S</strong>uicide (idées), <strong>T</strong>roubles de l'appétit, <strong>E</strong>stime de soi effondrée.</div>
      <h3>Trouble bipolaire</h3>
      <p>Alternance d'épisodes <strong>dépressifs</strong> et <strong>maniaques</strong>. La <span class="key" data-term="manie">manie</span> associe humeur exaltée, agitation, <span class="key" data-term="fuite des idées">fuite des idées</span>, insomnie sans fatigue, dépenses inconsidérées et désinhibition. Traitement de fond : <span class="key" data-term="thymorégulateur">thymorégulateurs</span> (lithium...).</p>
      <h3>Troubles anxieux</h3>
      <ul>
        <li><strong>Anxiété généralisée</strong> : inquiétude chronique, tensions, troubles du sommeil.</li>
        <li><strong>Attaque de panique</strong> : crise aiguë avec sensation de mort imminente, palpitations, dyspnée — sans danger réel.</li>
        <li><strong>Phobies / TOC</strong> : peurs spécifiques ou obsessions-compulsions.</li>
      </ul>
      <div class="callout danger"><div class="callout-t">Risque suicidaire</div>Toujours évaluer (idées, scénario, moyens) et oser questionner : en parler ne provoque pas le passage à l'acte. La levée d'inhibition en début de traitement antidépresseur est une période à haut risque.</div>
    `,
    refs: ["UE 2.6"],
  },
  {
    id: "f_2_6_psychotropes", ueId: "2.6", type: "pharmaco",
    titre: "Psychotropes : classes et surveillance infirmière",
    resume: "Antidépresseurs, antipsychotiques, anxiolytiques, thymorégulateurs et leurs surveillances.",
    tags: ["psychotropes", "antipsychotiques", "lithium", "benzodiazépines"],
    html: `
      <table class="tbl">
        <tr><th>Classe</th><th>Indication</th><th>Surveillance / risques</th></tr>
        <tr><td>Antidépresseurs (ISRS...)</td><td>Dépression, anxiété</td><td>Délai d'action 2–3 semaines ; levée d'inhibition → risque suicidaire</td></tr>
        <tr><td>Antipsychotiques (neuroleptiques)</td><td>Psychoses, agitation</td><td>Syndrome extrapyramidal, prise de poids, <strong>syndrome malin</strong></td></tr>
        <tr><td>Anxiolytiques (benzodiazépines)</td><td>Anxiété, sevrage</td><td>Sédation, chutes, <span class="key" data-term="dépendance">dépendance</span> ; durée courte</td></tr>
        <tr><td>Thymorégulateurs (lithium)</td><td>Trouble bipolaire</td><td><span class="key" data-term="lithémie">Lithémie</span> (marge étroite), fonction rénale et thyroïdienne</td></tr>
      </table>
      <div class="callout danger"><div class="callout-t">Syndrome malin des neuroleptiques</div>Urgence vitale : <strong>fièvre élevée + rigidité musculaire + troubles de conscience + sueurs/tachycardie</strong>. Arrêt du neuroleptique et appel médical immédiat.</div>
      <div class="callout"><div class="callout-t">Lithium</div>Marge thérapeutique étroite : surdosage si tremblements grossiers, troubles digestifs, confusion. Surveiller la <strong>lithémie</strong> et l'hydratation (la déshydratation favorise le surdosage).</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Benzodiazépines = « <em>les 4 D</em> » : <strong>D</strong>étente, <strong>D</strong>écontraction, <strong>D</strong>épendance, <strong>D</strong>anger (chutes/sédation).</div>
    `,
    refs: ["UE 2.6"],
  },
];
export const qcm = [
  { ueId: "2.6", q: "Une hallucination correspond à :", options: ["Une conviction délirante", "Une perception sans objet réel", "Une humeur triste", "Un trouble de la mémoire"], correct: 1, explication: "L'hallucination est une perception sans objet (entendre des voix, voir sans stimulus). Le délire concerne le contenu de la pensée.", ref: "UE 2.6", diff: 1 },
  { ueId: "2.6", q: "Le délire est un trouble :", options: ["De la perception", "Du contenu de la pensée", "De la motricité", "Du sommeil"], correct: 1, explication: "Le délire est une conviction inébranlable, non partagée, portant sur le contenu de la pensée.", ref: "UE 2.6", diff: 1 },
  { ueId: "2.6", q: "La schizophrénie débute le plus souvent :", options: ["Dans l'enfance", "Chez l'adulte jeune (15–25 ans)", "Après 60 ans", "À la naissance"], correct: 1, explication: "Le début se situe classiquement chez l'adulte jeune, avec une évolution chronique.", ref: "UE 2.6", diff: 1 },
  { ueId: "2.6", q: "Parmi ces signes, lequel est un symptôme NÉGATIF de la schizophrénie ?", options: ["Hallucinations", "Délire", "Retrait social et émoussement affectif", "Agitation"], correct: 2, explication: "Les symptômes négatifs traduisent un appauvrissement : retrait, émoussement affectif, apragmatisme, alogie.", ref: "UE 2.6", diff: 2 },
  { ueId: "2.6", q: "L'anhédonie se définit comme :", options: ["Une perte de l'appétit", "Une perte de la capacité à ressentir du plaisir", "Une exaltation de l'humeur", "Une perte de mémoire"], correct: 1, explication: "L'anhédonie est un symptôme central de la dépression : incapacité à éprouver du plaisir.", ref: "UE 2.6", diff: 1 },
  { ueId: "2.6", q: "Quelle durée minimale est requise pour parler d'épisode dépressif caractérisé ?", options: ["48 heures", "1 semaine", "2 semaines", "6 mois"], correct: 2, explication: "Les symptômes dépressifs doivent persister au moins 2 semaines.", ref: "UE 2.6", diff: 2 },
  { ueId: "2.6", q: "Le trouble bipolaire associe des épisodes :", options: ["Uniquement dépressifs", "Dépressifs et maniaques", "Uniquement anxieux", "Uniquement délirants"], correct: 1, explication: "Le trouble bipolaire se caractérise par l'alternance d'épisodes dépressifs et maniaques (ou hypomaniaques).", ref: "UE 2.6", diff: 1 },
  { ueId: "2.6", q: "Quel traitement de fond est utilisé dans le trouble bipolaire ?", options: ["Un antibiotique", "Un thymorégulateur (lithium)", "Un anticoagulant", "Un antalgique"], correct: 1, explication: "Les thymorégulateurs, dont le lithium, stabilisent l'humeur dans le trouble bipolaire.", ref: "UE 2.6", diff: 2 },
  { ueId: "2.6", q: "La surveillance biologique spécifique du lithium est :", options: ["L'INR", "La lithémie", "La glycémie", "La CRP"], correct: 1, explication: "Le lithium a une marge thérapeutique étroite : la lithémie surveille l'efficacité et prévient le surdosage.", ref: "UE 2.6", diff: 2 },
  { ueId: "2.6", q: "Le syndrome malin des neuroleptiques associe typiquement :", options: ["Hypothermie et somnolence isolée", "Fièvre élevée, rigidité musculaire et troubles de conscience", "Hypertension isolée", "Éruption cutanée seule"], correct: 1, explication: "C'est une urgence vitale : hyperthermie, rigidité, troubles de conscience, dysautonomie. Arrêt du neuroleptique et alerte médicale.", ref: "UE 2.6", diff: 3 },
  { ueId: "2.6", q: "Un effet indésirable fréquent des antipsychotiques est :", options: ["Le syndrome extrapyramidal", "L'hypoglycémie systématique", "La surdité", "La cécité"], correct: 0, explication: "Les antipsychotiques peuvent provoquer un syndrome extrapyramidal (rigidité, tremblements, akathisie, dyskinésies).", ref: "UE 2.6", diff: 2 },
  { ueId: "2.6", q: "Le principal risque lié à un usage prolongé de benzodiazépines est :", options: ["L'hypertension maligne", "La dépendance", "L'hyperthyroïdie", "L'insuffisance rénale aiguë"], correct: 1, explication: "Les benzodiazépines exposent à la dépendance, à la sédation et aux chutes : prescription à durée limitée.", ref: "UE 2.6", diff: 1 },
  { ueId: "2.6", q: "Le délai d'action d'un antidépresseur est habituellement de :", options: ["Quelques minutes", "2 à 3 semaines", "6 mois", "1 an"], correct: 1, explication: "L'efficacité thymique des antidépresseurs n'apparaît qu'après 2 à 3 semaines, d'où l'importance de l'observance.", ref: "UE 2.6", diff: 2 },
  { ueId: "2.6", q: "La levée d'inhibition en début de traitement antidépresseur expose surtout au risque :", options: ["Infectieux", "Suicidaire", "Hémorragique", "Allergique"], correct: 1, explication: "L'énergie revient avant l'amélioration de l'humeur : période à haut risque de passage à l'acte suicidaire.", ref: "UE 2.6", diff: 3 },
  { ueId: "2.6", q: "Face à un patient exprimant un délire, l'attitude infirmière adaptée est :", options: ["Approuver le délire pour le rassurer", "Contredire fermement le délire", "Ne pas entrer dans le délire tout en respectant le vécu du patient", "Ignorer totalement le patient"], correct: 2, explication: "On ne renforce pas le délire et on ne l'attaque pas frontalement : on reconnaît la souffrance et on instaure une relation de confiance.", ref: "UE 2.6", diff: 2 },
  { ueId: "2.6", q: "L'attaque de panique se manifeste typiquement par :", options: ["Une fièvre prolongée", "Une crise aiguë avec sensation de mort imminente, palpitations et dyspnée", "Un ralentissement psychomoteur durable", "Une amnésie complète"], correct: 1, explication: "L'attaque de panique est une crise aiguë d'angoisse intense avec symptômes physiques, sans danger réel.", ref: "UE 2.6", diff: 1 },
  { ueId: "2.6", q: "L'automatisme mental (vol/écho de la pensée, voix commentant les actes) oriente vers :", options: ["Un trouble anxieux", "Un syndrome psychotique", "Une dépression simple", "Une phobie sociale"], correct: 1, explication: "L'automatisme mental est un élément du syndrome psychotique, fréquent dans la schizophrénie.", ref: "UE 2.6", diff: 3 },
  { ueId: "2.6", q: "Évoquer la question du suicide avec un patient déprimé :", options: ["Provoque le passage à l'acte", "Permet d'évaluer le risque sans le majorer", "Est interdit", "Doit être évité absolument"], correct: 1, explication: "Aborder ouvertement les idées suicidaires n'induit pas le passage à l'acte : c'est un temps essentiel de l'évaluation.", ref: "UE 2.6", diff: 2 },
  { ueId: "2.6", q: "La manie se caractérise par :", options: ["Humeur triste et ralentissement", "Humeur exaltée, agitation, fuite des idées et désinhibition", "Repli et mutisme", "Anesthésie affective seule"], correct: 1, explication: "L'épisode maniaque associe exaltation de l'humeur, hyperactivité, fuite des idées, insomnie sans fatigue et désinhibition.", ref: "UE 2.6", diff: 1 },
  { ueId: "2.6", q: "Le surdosage en lithium est favorisé par :", options: ["Une bonne hydratation", "Une déshydratation", "Une activité physique modérée", "Une alimentation équilibrée"], correct: 1, explication: "La déshydratation diminue l'élimination rénale du lithium et favorise le surdosage : surveiller l'hydratation.", ref: "UE 2.6", diff: 3 },
  { ueId: "2.6", q: "On parle de trouble pathologique notamment lorsqu'il existe :", options: ["Une simple différence statistique", "Une souffrance et une altération du fonctionnement", "Une émotion ponctuelle", "Une fatigue passagère"], correct: 1, explication: "Le pathologique se définit par la souffrance, l'altération du fonctionnement social/professionnel et la durée, pas seulement par l'écart à la norme.", ref: "UE 2.6", diff: 1 },
  { ueId: "2.6", q: "Une illusion se distingue d'une hallucination car elle correspond à :", options: ["Une perception sans aucun objet réel", "La déformation de la perception d'un objet réellement présent", "Une conviction délirante", "Une perte de mémoire"], correct: 1, explication: "L'illusion est une perception déformée d'un stimulus réel, alors que l'hallucination est une perception sans objet.", ref: "UE 2.6", diff: 2 },
  { ueId: "2.6", q: "L'insight en psychiatrie désigne :", options: ["La vitesse de la pensée", "La conscience qu'a le patient de son trouble", "Un type d'hallucination", "Un effet indésirable médicamenteux"], correct: 1, explication: "L'insight est la capacité du patient à reconnaître sa maladie ; il est souvent altéré dans les troubles psychotiques.", ref: "UE 2.6", diff: 2 },
  { ueId: "2.6", q: "La bouffée délirante aiguë (trouble psychotique bref) se caractérise par un délire :", options: ["Chronique et systématisé", "D'apparition brutale, polymorphe, souvent de bonne évolution", "Toujours irréversible", "Sans aucune prise en charge"], correct: 1, explication: "La BDA est un délire d'installation brutale, polymorphe, de bonne réactivité au traitement, parfois inaugural d'une pathologie chronique.", ref: "UE 2.6", diff: 2 },
  { ueId: "2.6", q: "Devant un patient agité et menaçant, la priorité infirmière est :", options: ["L'isoler immédiatement sans évaluation", "Assurer la sécurité (du patient, des soignants, des tiers) et chercher l'apaisement relationnel", "Le contredire pour le calmer", "Lui retirer tout traitement"], correct: 1, explication: "La sécurité prime : posture calme, désescalade verbale, environnement contenant ; la contention/l'isolement restent des mesures d'exception encadrées.", ref: "UE 2.6", diff: 2 },
  { ueId: "2.6", q: "Le syndrome de sevrage aux benzodiazépines peut comporter :", options: ["Une bradycardie isolée", "Anxiété, insomnie, tremblements voire crises convulsives", "Une simple somnolence", "Aucune manifestation"], correct: 1, explication: "L'arrêt brutal des benzodiazépines expose à un rebond anxieux, des troubles du sommeil, des tremblements et un risque convulsif : sevrage progressif.", ref: "UE 2.6", diff: 3 },
];
export const flashcards = [
  { ueId: "2.6", recto: "Différence délire / hallucination ?", verso: "Délire = trouble du contenu de la pensée. Hallucination = perception sans objet réel." },
  { ueId: "2.6", recto: "Âge de début habituel de la schizophrénie ?", verso: "Adulte jeune, 15–25 ans, évolution chronique." },
  { ueId: "2.6", recto: "Symptômes positifs vs négatifs de la schizophrénie ?", verso: "Positifs : délire, hallucinations, désorganisation. Négatifs : retrait, émoussement affectif, apragmatisme." },
  { ueId: "2.6", recto: "Qu'est-ce que l'anhédonie ?", verso: "Perte de la capacité à ressentir du plaisir (signe central de dépression)." },
  { ueId: "2.6", recto: "Durée minimale d'un épisode dépressif caractérisé ?", verso: "Au moins 2 semaines." },
  { ueId: "2.6", recto: "Qu'alterne le trouble bipolaire ?", verso: "Des épisodes dépressifs et des épisodes maniaques (ou hypomaniaques)." },
  { ueId: "2.6", recto: "Traitement de fond du trouble bipolaire ?", verso: "Thymorégulateurs (ex. lithium)." },
  { ueId: "2.6", recto: "Surveillance biologique du lithium ?", verso: "Lithémie (marge étroite) + fonction rénale et thyroïdienne." },
  { ueId: "2.6", recto: "Signes du syndrome malin des neuroleptiques ?", verso: "Fièvre élevée + rigidité musculaire + troubles de conscience + dysautonomie. Urgence vitale." },
  { ueId: "2.6", recto: "Effet indésirable fréquent des antipsychotiques ?", verso: "Syndrome extrapyramidal (rigidité, tremblements, akathisie, dyskinésies)." },
  { ueId: "2.6", recto: "Principal risque des benzodiazépines au long cours ?", verso: "Dépendance, sédation et chutes : durée de prescription limitée." },
  { ueId: "2.6", recto: "Délai d'action d'un antidépresseur ?", verso: "2 à 3 semaines." },
  { ueId: "2.6", recto: "Pourquoi la levée d'inhibition est-elle à risque ?", verso: "L'énergie revient avant l'humeur : risque accru de passage à l'acte suicidaire." },
  { ueId: "2.6", recto: "Attitude face à un patient délirant ?", verso: "Ne pas entrer dans le délire ni le contredire frontalement ; reconnaître la souffrance et instaurer la confiance." },
  { ueId: "2.6", recto: "Qu'est-ce qu'une attaque de panique ?", verso: "Crise aiguë d'angoisse avec sensation de mort imminente, palpitations, dyspnée, sans danger réel." },
  { ueId: "2.6", recto: "Qu'est-ce que la manie ?", verso: "Humeur exaltée, agitation, fuite des idées, insomnie sans fatigue, désinhibition." },
  { ueId: "2.6", recto: "Illusion vs hallucination ?", verso: "Illusion = perception déformée d'un objet réel. Hallucination = perception sans objet." },
  { ueId: "2.6", recto: "Qu'est-ce que l'insight ?", verso: "Conscience qu'a le patient de son trouble ; souvent altéré dans les psychoses." },
  { ueId: "2.6", recto: "Critères pour parler de pathologique ?", verso: "Souffrance + altération du fonctionnement (social/professionnel) + durée, au-delà du simple écart à la norme." },
  { ueId: "2.6", recto: "Risque du sevrage brutal en benzodiazépines ?", verso: "Rebond anxieux, insomnie, tremblements, risque convulsif : décroissance progressive." },
];
