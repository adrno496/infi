// UE 4.2 — Soins relationnels (STI interventions, S2-S5). Pack seed.
export const fiches = [
  {
    id: "f_4_2_relation_soin", ueId: "4.2", type: "cours",
    titre: "La relation soignant-soigné",
    resume: "Fondements de la relation de soin : alliance thérapeutique, attitudes et juste distance.",
    tags: ["relation", "communication", "alliance", "distance"],
    html: `
      <h3>Définition</h3>
      <p>La <span class="key" data-term="relation de soin">relation de soin</span> est une rencontre humaine asymétrique entre une personne qui demande de l'aide et un soignant. Elle constitue le support de tout soin et vise à instaurer une <strong>alliance thérapeutique</strong> (confiance, coopération vers un objectif commun).</p>
      <h3>Les attitudes de Carl Rogers</h3>
      <ul>
        <li><strong>Empathie</strong> : comprendre le vécu de l'autre « comme si » on était à sa place, sans s'y confondre.</li>
        <li><strong>Considération positive inconditionnelle</strong> : accueil non jugeant de la personne telle qu'elle est.</li>
        <li><strong>Congruence (authenticité)</strong> : accord entre ce que le soignant ressent, dit et montre.</li>
      </ul>
      <h3>La juste distance</h3>
      <p>Position relationnelle ni trop proche (fusion, perte d'objectivité) ni trop lointaine (froideur, indifférence). Elle protège le patient et le soignant et préserve le professionnalisme.</p>
      <div class="callout"><div class="callout-t">À retenir</div>L'empathie n'est PAS la sympathie : l'empathie comprend le ressenti de l'autre sans le partager affectivement, la sympathie partage l'émotion (risque de fusion).</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo — les 3 attitudes de Rogers</div>« <em>E.C.C.</em> » : <strong>E</strong>mpathie, <strong>C</strong>onsidération positive, <strong>C</strong>ongruence.</div>
    `,
    refs: ["UE 4.2"],
  },
  {
    id: "f_4_2_communication", ueId: "4.2", type: "cours",
    titre: "La communication et l'écoute active",
    resume: "Communication verbale, para-verbale et non verbale, écoute active et reformulation.",
    tags: ["communication", "écoute active", "reformulation", "non verbal"],
    html: `
      <h3>Les trois registres de la communication</h3>
      <ul>
        <li><strong>Verbal</strong> : le contenu, les mots employés.</li>
        <li><strong>Para-verbal</strong> : le ton, le débit, le volume, les intonations.</li>
        <li><strong>Non verbal</strong> : posture, regard, mimiques, gestes, distance.</li>
      </ul>
      <p>Selon les travaux de Mehrabian (limités à l'expression des sentiments et attitudes), le non verbal et le para-verbal pèsent davantage que les mots seuls. Le soignant veille surtout à la <strong>cohérence</strong> entre verbal et non verbal.</p>
      <h3>Schéma de la communication</h3>
      <ul>
        <li><strong>Émetteur</strong> → <strong>message</strong> (codé) → <strong>canal</strong> → <strong>récepteur</strong> (décodage) → <strong>feedback</strong>.</li>
        <li>Les <span class="key" data-term="filtres">filtres</span> (culture, émotions, fatigue, bruit) peuvent déformer le message.</li>
      </ul>
      <h3>L'écoute active (Rogers)</h3>
      <p>Attitude centrée sur la personne, qui mobilise plusieurs techniques :</p>
      <table class="tbl">
        <tr><th>Technique</th><th>Exemple</th></tr>
        <tr><td>Reformulation reflet</td><td>« Si je comprends bien, vous vous sentez inquiet… »</td></tr>
        <tr><td>Reformulation clarification</td><td>Reformuler pour préciser le sens</td></tr>
        <tr><td>Question ouverte</td><td>« Comment vivez-vous cette situation ? »</td></tr>
        <tr><td>Silence</td><td>Laisser un espace d'expression</td></tr>
        <tr><td>Reflet du sentiment</td><td>Nommer l'émotion perçue</td></tr>
      </table>
      <div class="callout"><div class="callout-t">En pratique</div>Privilégier les <strong>questions ouvertes</strong> pour favoriser l'expression ; les questions fermées (oui/non) servent à préciser un point.</div>
    `,
    refs: ["UE 4.2"],
  },
  {
    id: "f_4_2_relation_aide", ueId: "4.2", type: "cours",
    titre: "La relation d'aide",
    resume: "Définition, conditions et déroulement d'un entretien de relation d'aide.",
    tags: ["relation d'aide", "entretien", "rogers", "écoute"],
    html: `
      <h3>Définition</h3>
      <p>La <span class="key" data-term="relation d'aide">relation d'aide</span> est un échange verbal et non verbal qui permet à une personne en difficulté de mobiliser ses ressources pour mieux vivre une situation. Elle ne donne pas de solution toute faite : elle accompagne le cheminement de la personne.</p>
      <h3>Conditions</h3>
      <ul>
        <li>Un cadre : lieu calme, confidentialité, temps disponible.</li>
        <li>Les attitudes de Rogers : empathie, considération positive, congruence.</li>
        <li>Une posture d'<strong>écoute active</strong> et de non-jugement.</li>
      </ul>
      <h3>Déroulement d'un entretien</h3>
      <ul>
        <li><strong>Ouverture</strong> : accueil, présentation, but de l'entretien.</li>
        <li><strong>Développement</strong> : écoute, reformulation, exploration du vécu.</li>
        <li><strong>Clôture</strong> : synthèse, ouverture, prise de congé.</li>
      </ul>
      <div class="callout"><div class="callout-t">Attention</div>Éviter les attitudes qui ferment l'échange : juger, conseiller hâtivement, banaliser (« ce n'est rien »), rassurer faussement, interpréter à la place du patient.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo — attitudes de Porter à doser</div>Évaluation, Interprétation, Soutien, Investigation, Solution, Compréhension : seule la <strong>compréhension</strong> (reformulation) favorise vraiment l'expression.</div>
    `,
    refs: ["UE 4.2"],
  },
  {
    id: "f_4_2_situations_difficiles", ueId: "4.2", type: "cours",
    titre: "Communication dans les situations difficiles",
    resume: "Agressivité, annonce de mauvaise nouvelle, fin de vie et patients vulnérables.",
    tags: ["agressivité", "mauvaise nouvelle", "fin de vie", "deuil"],
    html: `
      <h3>Face à l'agressivité</h3>
      <ul>
        <li>Rester calme, ne pas répondre à l'agressivité par l'agressivité.</li>
        <li>Assurer sa sécurité et celle des autres, garder une distance.</li>
        <li>Verbaliser et nommer l'émotion, chercher la cause sous-jacente (peur, douleur, attente).</li>
      </ul>
      <h3>L'annonce d'une mauvaise nouvelle</h3>
      <p>L'annonce diagnostique relève du médecin ; l'infirmier assure l'accompagnement, le réajustement de l'information et le soutien. Lieu adapté, vocabulaire simple, temps de silence et écoute des réactions. Le dispositif d'annonce (mesure du Plan cancer) prévoit notamment un temps d'accompagnement soignant infirmier.</p>
      <h3>Réactions psychologiques et deuil</h3>
      <p>Les étapes décrites par Élisabeth Kübler-Ross sont une grille de lecture (non linéaire, étapes pouvant être absentes, répétées ou simultanées) :</p>
      <div class="mnemo"><div class="mnemo-t">Étapes du deuil (Kübler-Ross)</div>« <em>Des Câlins Marquent Des Adieux</em> » : <strong>D</strong>éni, <strong>C</strong>olère, <strong>M</strong>archandage, <strong>D</strong>épression, <strong>A</strong>cceptation.</div>
      <h3>Accompagnement de fin de vie</h3>
      <ul>
        <li>Présence, écoute, respect des souhaits et des croyances.</li>
        <li>Soins de confort et soulagement de la douleur (soins palliatifs).</li>
        <li>Soutien des proches.</li>
      </ul>
      <div class="callout"><div class="callout-t">Mécanismes de défense des soignants</div>Fuite en avant, fausse réassurance, banalisation, esquive, rationalisation, identification projective : les repérer pour préserver une relation authentique.</div>
    `,
    refs: ["UE 4.2"],
  },
];

export const qcm = [
  { ueId: "4.2", q: "L'empathie se définit comme :", options: ["Partager et ressentir l'émotion de l'autre", "Comprendre le vécu de l'autre sans s'y confondre", "Donner un conseil adapté", "Rester neutre et distant"], correct: 1, explication: "L'empathie consiste à comprendre le ressenti de l'autre « comme si » on était à sa place, sans fusionner. La sympathie, elle, partage et ressent l'émotion (risque de perte d'objectivité).", ref: "UE 4.2", diff: 1 },
  { ueId: "4.2", q: "Les trois attitudes fondamentales décrites par Carl Rogers sont :", options: ["Autorité, neutralité, distance", "Empathie, considération positive, congruence", "Écoute, conseil, jugement", "Sympathie, compassion, pitié"], correct: 1, explication: "Rogers décrit l'empathie, la considération positive inconditionnelle et la congruence (authenticité) comme les attitudes facilitant la relation d'aide.", ref: "UE 4.2", diff: 1 },
  { ueId: "4.2", q: "La congruence du soignant correspond à :", options: ["L'accord entre ce qu'il ressent, dit et montre", "Sa capacité à donner des solutions", "Sa neutralité absolue", "Son autorité sur le patient"], correct: 0, explication: "La congruence (ou authenticité) est l'accord entre le ressenti, le discours et le comportement non verbal du soignant.", ref: "UE 4.2", diff: 2 },
  { ueId: "4.2", q: "La « juste distance » dans la relation de soin signifie :", options: ["Garder le patient à distance physique", "Une position ni fusionnelle ni indifférente", "Ne jamais toucher le patient", "Rester strictement professionnel sans émotion"], correct: 1, explication: "La juste distance est un positionnement relationnel équilibré : ni trop proche (fusion, perte d'objectivité), ni trop lointain (froideur). Elle protège patient et soignant.", ref: "UE 4.2", diff: 2 },
  { ueId: "4.2", q: "La reformulation reflet consiste à :", options: ["Donner son avis sur la situation", "Redire avec ses mots ce que le patient a exprimé", "Poser une question fermée", "Interpréter le comportement du patient"], correct: 1, explication: "La reformulation reflet renvoie au patient le contenu de son message avec d'autres mots, ce qui montre l'écoute et vérifie la compréhension.", ref: "UE 4.2", diff: 1 },
  { ueId: "4.2", q: "Pour favoriser l'expression du patient, on privilégie :", options: ["Les questions fermées", "Les questions ouvertes", "Les conseils directifs", "Le silence permanent"], correct: 1, explication: "Les questions ouvertes (« Comment… », « Que ressentez-vous… ») ouvrent l'échange. Les questions fermées (oui/non) servent à préciser un point précis.", ref: "UE 4.2", diff: 1 },
  { ueId: "4.2", q: "Dans la communication, le non verbal comprend :", options: ["Le choix des mots", "La posture, le regard, les gestes", "Le ton et le débit de la voix", "La grammaire utilisée"], correct: 1, explication: "Le non verbal regroupe posture, mimiques, regard, gestes, distance. Le ton et le débit relèvent du para-verbal ; les mots, du verbal.", ref: "UE 4.2", diff: 2 },
  { ueId: "4.2", q: "Le ton, le débit et le volume de la voix relèvent de la communication :", options: ["Verbale", "Para-verbale", "Non verbale", "Écrite"], correct: 1, explication: "Le para-verbal concerne tout ce qui accompagne la voix (ton, débit, volume, intonations). Les mots sont le verbal, la posture et les gestes le non verbal.", ref: "UE 4.2", diff: 2 },
  { ueId: "4.2", q: "La relation d'aide vise principalement à :", options: ["Donner la solution au patient", "Permettre au patient de mobiliser ses propres ressources", "Convaincre le patient de suivre son traitement", "Recueillir des données administratives"], correct: 1, explication: "La relation d'aide accompagne la personne pour qu'elle mobilise ses ressources et chemine elle-même, sans solution imposée par le soignant.", ref: "UE 4.2", diff: 2 },
  { ueId: "4.2", q: "L'alliance thérapeutique repose avant tout sur :", options: ["L'autorité du soignant", "La confiance et la coopération vers un objectif commun", "La rapidité du soin", "Le respect strict des horaires"], correct: 1, explication: "L'alliance thérapeutique est un lien de confiance et de collaboration entre soignant et soigné, orienté vers un objectif de soin partagé.", ref: "UE 4.2", diff: 2 },
  { ueId: "4.2", q: "Parmi les attitudes de Porter, laquelle favorise le plus l'expression ?", options: ["L'évaluation (jugement)", "La solution immédiate", "La compréhension (reformulation)", "L'investigation insistante"], correct: 2, explication: "Selon Porter, l'attitude de compréhension (reformulation, écoute) favorise l'expression, alors que juger, conseiller ou solutionner trop vite ferment l'échange.", ref: "UE 4.2", diff: 3 },
  { ueId: "4.2", q: "Face à un patient agressif, l'attitude adaptée est :", options: ["Répondre fermement sur le même ton", "Rester calme et chercher la cause de l'agressivité", "Ignorer totalement le patient", "Le menacer de sanctions"], correct: 1, explication: "Il faut garder son calme, assurer la sécurité, verbaliser et chercher la cause sous-jacente (peur, douleur, attente). Répondre par l'agressivité aggrave la situation.", ref: "UE 4.2", diff: 1 },
  { ueId: "4.2", q: "L'annonce d'un diagnostic grave relève :", options: ["De l'aide-soignant", "Du médecin, l'infirmier assurant l'accompagnement", "Uniquement de la famille", "Du cadre de santé"], correct: 1, explication: "L'annonce diagnostique est un acte médical. L'infirmier accompagne, réajuste l'information et soutient le patient et ses proches.", ref: "UE 4.2", diff: 2 },
  { ueId: "4.2", q: "Les étapes du deuil selon Kübler-Ross sont :", options: ["Choc, fuite, oubli, retour", "Déni, colère, marchandage, dépression, acceptation", "Peur, fuite, lutte, repos", "Angoisse, déni, guérison"], correct: 1, explication: "Kübler-Ross décrit cinq étapes (non linéaires) : déni, colère, marchandage, dépression, acceptation. Elles servent de grille de lecture, pas de norme.", ref: "UE 4.2", diff: 2 },
  { ueId: "4.2", q: "La fausse réassurance (« ne vous inquiétez pas, tout ira bien ») est :", options: ["Une bonne pratique de relation d'aide", "Un mécanisme de défense du soignant à éviter", "Une obligation déontologique", "Une technique d'écoute active"], correct: 1, explication: "La fausse réassurance est un mécanisme de défense du soignant qui banalise et coupe l'expression du patient ; elle est à repérer et à éviter.", ref: "UE 4.2", diff: 2 },
  { ueId: "4.2", q: "Le silence, dans un entretien de relation d'aide :", options: ["Doit toujours être évité", "Est un outil qui laisse un espace d'expression", "Signifie l'échec de l'entretien", "Doit être comblé immédiatement"], correct: 1, explication: "Le silence est une technique d'écoute active : il offre au patient un temps pour réfléchir et s'exprimer. Le combler trop vite peut couper la parole.", ref: "UE 4.2", diff: 2 },
  { ueId: "4.2", q: "Un entretien de relation d'aide structuré comporte les phases :", options: ["Ouverture, développement, clôture", "Diagnostic, traitement, sortie", "Accueil, soin technique, transmission", "Question, réponse, conclusion"], correct: 0, explication: "L'entretien se déroule en trois temps : ouverture (accueil, but), développement (écoute, exploration) et clôture (synthèse, prise de congé).", ref: "UE 4.2", diff: 1 },
  { ueId: "4.2", q: "La différence entre empathie et sympathie est que :", options: ["Elles sont synonymes", "L'empathie comprend sans partager l'émotion, la sympathie la partage", "La sympathie est plus professionnelle", "L'empathie consiste à donner des conseils"], correct: 1, explication: "L'empathie comprend le vécu de l'autre sans se laisser submerger ; la sympathie partage affectivement l'émotion, avec un risque de fusion et de perte de recul.", ref: "UE 4.2", diff: 2 },
  { ueId: "4.2", q: "La considération positive inconditionnelle signifie :", options: ["Approuver tous les comportements du patient", "Accueillir la personne sans la juger, telle qu'elle est", "Être toujours d'accord avec le patient", "Donner raison au patient"], correct: 1, explication: "La considération positive inconditionnelle est un accueil non jugeant de la personne ; cela ne signifie pas approuver tous ses actes mais respecter sa valeur en tant que personne.", ref: "UE 4.2", diff: 3 },
  { ueId: "4.2", q: "Dans un entretien, une question ouverte est :", options: ["« Avez-vous mal ? »", "« Comment décririez-vous votre douleur ? »", "« Prenez-vous votre traitement ? »", "« Êtes-vous fatigué ? »"], correct: 1, explication: "Une question ouverte appelle une réponse développée (« Comment… »). Les autres exemples sont des questions fermées appelant un oui/non.", ref: "UE 4.2", diff: 1 },
  { ueId: "4.2", q: "Lorsqu'un patient en fin de vie exprime sa colère, le soignant doit :", options: ["La réprimander", "L'accueillir comme une étape possible du cheminement", "Quitter la chambre", "La contredire systématiquement"], correct: 1, explication: "La colère peut être une étape du deuil (Kübler-Ross). Le soignant l'accueille sans la prendre personnellement et reste dans l'écoute et le soutien.", ref: "UE 4.2", diff: 2 },
  { ueId: "4.2", q: "L'écoute active suppose principalement :", options: ["De parler beaucoup pour rassurer", "De se centrer sur la personne et reformuler", "D'interpréter les propos du patient", "De donner rapidement une solution"], correct: 1, explication: "L'écoute active (Rogers) se centre sur la personne : disponibilité, reformulation, reflet des sentiments, silence, questions ouvertes, sans interpréter ni solutionner d'emblée.", ref: "UE 4.2", diff: 1 },
  { ueId: "4.2", q: "Un message peut être déformé par des « filtres » tels que :", options: ["La syntaxe correcte", "La culture, les émotions, le bruit, la fatigue", "Le silence", "La reformulation"], correct: 1, explication: "Les filtres (culturels, émotionnels, environnementaux, physiques) altèrent l'encodage ou le décodage du message ; les repérer améliore la communication.", ref: "UE 4.2", diff: 2 },
  { ueId: "4.2", q: "Dans le schéma de la communication, le « feedback » désigne :", options: ["Le bruit qui parasite l'échange", "Le retour du récepteur vers l'émetteur", "Le canal de transmission", "Le codage du message"], correct: 1, explication: "Le feedback (rétroaction) est le retour d'information du récepteur vers l'émetteur ; il permet de vérifier que le message a été compris et d'ajuster la communication.", ref: "UE 4.2", diff: 2 },
  { ueId: "4.2", q: "Conseiller hâtivement un patient en difficulté (« À votre place, je… ») est une attitude qui :", options: ["Favorise toujours l'autonomie", "Tend à fermer l'échange et déresponsabilise", "Constitue de la reformulation", "Relève de l'écoute active"], correct: 1, explication: "Donner une solution toute faite (attitude de Porter « solution ») court-circuite le cheminement du patient et ferme l'expression ; la relation d'aide vise au contraire la mobilisation de ses propres ressources.", ref: "UE 4.2", diff: 3 },
];

export const flashcards = [
  { ueId: "4.2", recto: "Qu'est-ce que la relation de soin ?", verso: "Rencontre humaine entre une personne demandant de l'aide et un soignant ; support de tout soin, visant l'alliance thérapeutique." },
  { ueId: "4.2", recto: "Quelles sont les 3 attitudes de Carl Rogers ?", verso: "Empathie, considération positive inconditionnelle, congruence (authenticité)." },
  { ueId: "4.2", recto: "Différence entre empathie et sympathie ?", verso: "L'empathie comprend le vécu de l'autre sans le partager ; la sympathie partage l'émotion (risque de fusion)." },
  { ueId: "4.2", recto: "Qu'est-ce que la juste distance ?", verso: "Position relationnelle ni fusionnelle ni indifférente, qui protège patient et soignant et préserve le professionnalisme." },
  { ueId: "4.2", recto: "Qu'est-ce que la congruence ?", verso: "L'accord entre ce que le soignant ressent, dit et montre (authenticité)." },
  { ueId: "4.2", recto: "Qu'est-ce que la reformulation reflet ?", verso: "Redire avec d'autres mots ce que le patient a exprimé pour montrer l'écoute et vérifier la compréhension." },
  { ueId: "4.2", recto: "Pourquoi privilégier les questions ouvertes ?", verso: "Elles favorisent l'expression et le développement du vécu, contrairement aux questions fermées (oui/non)." },
  { ueId: "4.2", recto: "Quels sont les 3 registres de la communication ?", verso: "Verbal (les mots), para-verbal (ton, débit, volume), non verbal (posture, regard, gestes, distance)." },
  { ueId: "4.2", recto: "Que regroupe la communication non verbale ?", verso: "Posture, regard, mimiques, gestes et distance ; le ton et le débit relèvent du para-verbal." },
  { ueId: "4.2", recto: "Qu'est-ce que la relation d'aide ?", verso: "Échange permettant à une personne en difficulté de mobiliser ses ressources, sans solution imposée par le soignant." },
  { ueId: "4.2", recto: "Quelles sont les 3 phases d'un entretien de relation d'aide ?", verso: "Ouverture (accueil, but), développement (écoute, exploration), clôture (synthèse, prise de congé)." },
  { ueId: "4.2", recto: "Quelle attitude de Porter favorise l'expression ?", verso: "La compréhension (reformulation, écoute) ; juger, conseiller ou solutionner trop vite ferment l'échange." },
  { ueId: "4.2", recto: "Comment réagir face à un patient agressif ?", verso: "Rester calme, assurer la sécurité, verbaliser et chercher la cause (peur, douleur, attente)." },
  { ueId: "4.2", recto: "Qui annonce un diagnostic grave ?", verso: "Le médecin ; l'infirmier assure l'accompagnement, le réajustement de l'information et le soutien." },
  { ueId: "4.2", recto: "Quelles sont les 5 étapes du deuil selon Kübler-Ross ?", verso: "Déni, colère, marchandage, dépression, acceptation (non linéaires, parfois absentes ou répétées)." },
  { ueId: "4.2", recto: "Citez 3 mécanismes de défense des soignants.", verso: "Fausse réassurance, banalisation, fuite en avant (aussi : esquive, rationalisation, identification projective)." },
  { ueId: "4.2", recto: "Quel est le rôle du silence en entretien ?", verso: "Technique d'écoute active : il laisse un espace d'expression et de réflexion au patient." },
  { ueId: "4.2", recto: "Que sont les filtres de la communication ?", verso: "Éléments (culture, émotions, fatigue, bruit) qui déforment l'encodage ou le décodage du message." },
  { ueId: "4.2", recto: "Qu'est-ce que le feedback dans la communication ?", verso: "Le retour d'information du récepteur vers l'émetteur, qui permet de vérifier la compréhension et d'ajuster l'échange." },
];
