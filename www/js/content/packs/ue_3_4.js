// UE 3.4 — Initiation à la démarche de recherche. Pack de révision.
export const fiches = [
  {
    id: "f_3_4_demarche_recherche", ueId: "3.4", type: "cours",
    titre: "La démarche de recherche : étapes et logique",
    resume: "Du questionnement de départ à la diffusion : les grandes étapes structurant un travail de recherche.",
    tags: ["démarche de recherche", "méthodologie", "problématique"],
    html: `
      <p>La <strong>recherche</strong> est une démarche rigoureuse et systématique visant à produire de nouvelles <strong>connaissances</strong> ou à éclairer une pratique. En soins infirmiers, elle nourrit la <span class="key" data-term="pratique fondée sur les preuves">pratique fondée sur les preuves</span> (Evidence-Based Nursing).</p>
      <h3>Les grandes étapes</h3>
      <ul>
        <li><strong>Question de départ / constat</strong> : une situation, un étonnement issu de la pratique.</li>
        <li><strong>Exploration</strong> : lectures, entretiens exploratoires, état des connaissances.</li>
        <li><strong>Problématique</strong> : construction du cadre théorique et de la question centrale.</li>
        <li><strong>Question de recherche &amp; hypothèse</strong> : énoncé précis et testable.</li>
        <li><strong>Méthode</strong> : choix de l'approche, population, outils de recueil.</li>
        <li><strong>Recueil &amp; analyse des données</strong>.</li>
        <li><strong>Résultats, discussion, conclusion</strong> et <strong>diffusion</strong>.</li>
      </ul>
      <table class="tbl">
        <tr><th>Étape</th><th>Production attendue</th></tr>
        <tr><td>Phase exploratoire</td><td>Revue de littérature, question de départ</td></tr>
        <tr><td>Phase conceptuelle</td><td>Problématique, cadre théorique, hypothèse</td></tr>
        <tr><td>Phase méthodologique</td><td>Devis, population, outils</td></tr>
        <tr><td>Phase empirique</td><td>Recueil et analyse des données</td></tr>
      </table>
      <div class="callout"><div class="callout-t">À retenir</div>La recherche se distingue de l'opinion : elle est <strong>reproductible</strong>, <strong>argumentée</strong> et <strong>vérifiable</strong>.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« <strong>QE-PRO-MÉ-RÉ</strong> » : Question, Exploration, PROblématique, MÉthode, RÉsultats.</div>
    `,
    refs: ["UE 3.4"],
  },
  {
    id: "f_3_4_problematique_hypothese", ueId: "3.4", type: "cours",
    titre: "Question de départ, problématique et hypothèse",
    resume: "Distinguer et formuler correctement la question de départ, la problématique et l'hypothèse de recherche.",
    tags: ["problématique", "hypothèse", "question de recherche"],
    html: `
      <p>La <span class="key" data-term="question de départ">question de départ</span> exprime ce que le chercheur cherche à comprendre. Elle doit être <strong>claire</strong> (précise, univoque), <strong>faisable</strong> (réaliste) et <strong>pertinente</strong> (utile à la discipline).</p>
      <h3>De la question à l'hypothèse</h3>
      <ul>
        <li><strong>Question de départ</strong> : large, issue d'un étonnement de terrain.</li>
        <li><strong>Problématique</strong> : ensemble argumenté reliant concepts et théories, qui justifie la question de recherche.</li>
        <li><strong>Question de recherche</strong> : reformulation précise et opérationnelle.</li>
        <li><strong>Hypothèse</strong> : réponse anticipée et provisoire, formulée de façon affirmative et <strong>testable</strong>.</li>
      </ul>
      <div class="callout"><div class="callout-t">Critères de Quivy &amp; Van Campenhoudt</div>Une bonne question de départ respecte les qualités de <strong>clarté</strong>, de <strong>faisabilité</strong> et de <strong>pertinence</strong>.</div>
      <p>Toute recherche n'a pas d'hypothèse : les recherches <strong>qualitatives/exploratoires</strong> se contentent souvent d'une <strong>question de recherche</strong> sans hypothèse à confirmer.</p>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Question de départ = <strong>C.F.P.</strong> : Claire, Faisable, Pertinente.</div>
    `,
    refs: ["UE 3.4 ; Quivy &amp; Van Campenhoudt"],
  },
  {
    id: "f_3_4_methodes_qual_quanti", ueId: "3.4", type: "cours",
    titre: "Méthodes quantitatives et qualitatives",
    resume: "Comparer les deux grandes approches méthodologiques et leurs outils de recueil de données.",
    tags: ["quantitatif", "qualitatif", "recueil de données"],
    html: `
      <p>Deux grandes familles de méthodes existent, le choix dépendant de la <strong>question de recherche</strong>.</p>
      <table class="tbl">
        <tr><th></th><th>Quantitative</th><th>Qualitative</th></tr>
        <tr><td>But</td><td>Mesurer, comparer, généraliser</td><td>Comprendre un vécu, un sens</td></tr>
        <tr><td>Logique</td><td>Déductive (vérifie une hypothèse)</td><td>Inductive (fait émerger du sens)</td></tr>
        <tr><td>Outils</td><td>Questionnaire, échelle, mesures</td><td>Entretien, observation, focus group</td></tr>
        <tr><td>Données</td><td>Chiffrées, statistiques</td><td>Verbales, textuelles</td></tr>
        <tr><td>Échantillon</td><td>Large, représentatif</td><td>Restreint, raisonné</td></tr>
      </table>
      <h3>Outils de recueil</h3>
      <ul>
        <li><strong>Questionnaire</strong> : questions fermées/ouvertes, auto-administré ou non.</li>
        <li><strong>Entretien</strong> : directif, <span class="key" data-term="semi-directif">semi-directif</span> (guide souple), ou non directif.</li>
        <li><strong>Observation</strong> : participante ou non, à l'aide d'une grille.</li>
      </ul>
      <div class="callout"><div class="callout-t">Approche mixte</div>Certaines recherches combinent les deux approches (<strong>méthode mixte</strong>) pour croiser mesure et compréhension.</div>
    `,
    refs: ["UE 3.4"],
  },
  {
    id: "f_3_4_ethique_lecture_critique", ueId: "3.4", type: "cours",
    titre: "Éthique de la recherche et lecture critique d'article",
    resume: "Principes éthiques de la recherche et repères pour lire un article scientifique de façon critique.",
    tags: ["éthique", "consentement", "lecture critique", "fiabilité"],
    html: `
      <p>La recherche impliquant la personne humaine est encadrée. En France, elle relève notamment de la <strong>loi Jardé</strong> et des <span class="key" data-term="CPP">Comités de Protection des Personnes (CPP)</span>.</p>
      <h3>Principes éthiques fondamentaux</h3>
      <ul>
        <li><strong>Consentement libre et éclairé</strong> du participant.</li>
        <li><strong>Information</strong> claire sur l'étude et le droit de retrait.</li>
        <li><strong>Respect de l'anonymat et de la confidentialité</strong> (RGPD).</li>
        <li><strong>Bienfaisance / non-malfaisance</strong> : balance bénéfice/risque favorable.</li>
        <li><strong>Justice / équité</strong> dans le choix des participants.</li>
      </ul>
      <h3>Lire un article : repères</h3>
      <p>Structure <strong>IMRaD</strong> : Introduction, Méthode, Résultats <strong>and</strong> Discussion. On évalue la <strong>fiabilité</strong> (résultats reproductibles) et la <strong>validité</strong> (l'outil mesure bien ce qu'il prétend mesurer).</p>
      <table class="tbl">
        <tr><th>Notion</th><th>Question à se poser</th></tr>
        <tr><td>Validité</td><td>Mesure-t-on vraiment ce qu'on veut mesurer ?</td></tr>
        <tr><td>Fiabilité</td><td>Obtiendrait-on les mêmes résultats en répétant ?</td></tr>
        <tr><td>Pertinence</td><td>Le résultat est-il utile à la pratique ?</td></tr>
      </table>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Structure d'un article = <strong>IMRaD</strong> (Introduction, Méthode, Résultats, Discussion).</div>
    `,
    refs: ["UE 3.4 ; loi Jardé"],
  },
];
export const qcm = [
  { ueId: "3.4", q: "Qu'est-ce qui caractérise une démarche de recherche scientifique ?", options: ["Elle repose sur l'opinion du chercheur", "Elle est rigoureuse, systématique et reproductible", "Elle ne nécessite aucune méthode", "Elle vise uniquement à confirmer ce que l'on pense"], correct: 1, explication: "La recherche se distingue de l'opinion par sa rigueur, sa méthode systématique et le caractère reproductible/vérifiable de sa démarche.", ref: "UE 3.4", diff: 1 },
  { ueId: "3.4", q: "Selon Quivy et Van Campenhoudt, une bonne question de départ doit être :", options: ["Longue et complexe", "Claire, faisable et pertinente", "Toujours quantitative", "Identique à l'hypothèse"], correct: 1, explication: "Les trois qualités d'une question de départ sont la clarté, la faisabilité et la pertinence.", ref: "UE 3.4", diff: 2 },
  { ueId: "3.4", q: "L'hypothèse de recherche est :", options: ["Une certitude démontrée", "Une réponse provisoire et testable à la question de recherche", "Un simple résumé des résultats", "Une opinion personnelle non vérifiable"], correct: 1, explication: "L'hypothèse est une réponse anticipée, provisoire, formulée de façon affirmative et qui devra être confirmée ou infirmée par les données.", ref: "UE 3.4", diff: 1 },
  { ueId: "3.4", q: "Quelle approche cherche à comprendre le vécu et le sens d'une expérience ?", options: ["Quantitative", "Qualitative", "Statistique", "Expérimentale"], correct: 1, explication: "L'approche qualitative explore le sens, le vécu et les représentations, par une logique inductive.", ref: "UE 3.4", diff: 1 },
  { ueId: "3.4", q: "Une recherche quantitative repose principalement sur une logique :", options: ["Inductive", "Déductive", "Intuitive", "Narrative"], correct: 1, explication: "La recherche quantitative est déductive : elle part d'une hypothèse qu'elle teste sur des données chiffrées.", ref: "UE 3.4", diff: 2 },
  { ueId: "3.4", q: "Quel outil est typiquement associé à une approche qualitative ?", options: ["Le questionnaire fermé à large échelle", "L'entretien semi-directif", "L'analyse statistique de variance", "L'échelle numérique standardisée"], correct: 1, explication: "L'entretien (notamment semi-directif), l'observation et le focus group sont des outils privilégiés du qualitatif.", ref: "UE 3.4", diff: 1 },
  { ueId: "3.4", q: "Dans un entretien semi-directif, le chercheur :", options: ["Lit un questionnaire fermé sans déviation", "S'appuie sur un guide d'entretien souple avec des thèmes", "Laisse la personne parler sans aucun cadre", "Observe sans poser de question"], correct: 1, explication: "Le semi-directif utilise un guide d'entretien (thèmes) tout en laissant une liberté d'expression à la personne interrogée.", ref: "UE 3.4", diff: 2 },
  { ueId: "3.4", q: "Que signifie l'acronyme IMRaD décrivant la structure d'un article scientifique ?", options: ["Idée, Méthode, Recherche, Données", "Introduction, Méthode, Résultats, Discussion", "Information, Mesure, Risque, Décision", "Introduction, Modèle, Recueil, Diffusion"], correct: 1, explication: "IMRaD = Introduction, Methods (Méthode), Results (Résultats) and Discussion. Le 'a' minuscule correspond à 'and'.", ref: "UE 3.4", diff: 2 },
  { ueId: "3.4", q: "La 'validité' d'un outil de mesure désigne :", options: ["Sa capacité à donner les mêmes résultats si on répète", "Le fait qu'il mesure réellement ce qu'il prétend mesurer", "Sa rapidité d'utilisation", "Son coût"], correct: 1, explication: "La validité = l'outil mesure bien le phénomène visé. À ne pas confondre avec la fiabilité (reproductibilité).", ref: "UE 3.4", diff: 2 },
  { ueId: "3.4", q: "La 'fiabilité' d'un instrument de recueil correspond à :", options: ["Sa capacité à mesurer le bon concept", "Sa stabilité : mêmes résultats lors de mesures répétées", "Sa pertinence clinique", "Son anonymat"], correct: 1, explication: "La fiabilité renvoie à la reproductibilité/stabilité des résultats dans des conditions identiques.", ref: "UE 3.4", diff: 2 },
  { ueId: "3.4", q: "La phase exploratoire d'une recherche sert surtout à :", options: ["Rédiger la conclusion", "Faire l'état des connaissances et préciser la question de départ", "Analyser les données chiffrées", "Diffuser les résultats"], correct: 1, explication: "L'exploration (lectures, entretiens exploratoires) permet de cerner ce qui est connu et d'affiner la question de départ.", ref: "UE 3.4", diff: 2 },
  { ueId: "3.4", q: "Qu'est-ce que la pratique fondée sur les preuves (Evidence-Based Nursing) ?", options: ["Faire comme on a toujours fait", "Intégrer les meilleures preuves scientifiques, l'expertise clinique et les préférences du patient", "Suivre uniquement l'avis du médecin", "Se fier à l'intuition seule"], correct: 1, explication: "L'EBN combine les données probantes de la recherche, l'expertise du soignant et les valeurs/préférences du patient.", ref: "UE 3.4", diff: 2 },
  { ueId: "3.4", q: "Le consentement du participant à une recherche doit être :", options: ["Implicite et oral seulement", "Libre et éclairé", "Donné par l'équipe soignante à sa place", "Définitif et irrévocable"], correct: 1, explication: "Le participant doit consentir de façon libre et éclairée, après information, et peut se retirer à tout moment.", ref: "UE 3.4", diff: 1 },
  { ueId: "3.4", q: "En France, quel organisme protège les personnes participant à une recherche ?", options: ["La HAS", "Le Comité de Protection des Personnes (CPP)", "L'ARS", "L'Ordre des médecins"], correct: 1, explication: "Le CPP (cadre de la loi Jardé) examine et autorise les recherches impliquant la personne humaine sur le plan éthique.", ref: "UE 3.4", diff: 3 },
  { ueId: "3.4", q: "Le respect de l'anonymat et de la confidentialité des données relève notamment :", options: ["Du seul bon vouloir du chercheur", "Du RGPD et des principes éthiques de la recherche", "D'aucune obligation", "Du droit commercial"], correct: 1, explication: "La protection des données personnelles (RGPD) et la confidentialité font partie des obligations éthiques et légales.", ref: "UE 3.4", diff: 2 },
  { ueId: "3.4", q: "Un échantillon 'représentatif' est surtout recherché dans une approche :", options: ["Qualitative", "Quantitative", "Anecdotique", "Narrative"], correct: 1, explication: "Le quantitatif vise un échantillon large et représentatif pour pouvoir généraliser. Le qualitatif privilégie un échantillon restreint et raisonné.", ref: "UE 3.4", diff: 2 },
  { ueId: "3.4", q: "Une 'revue de littérature' consiste à :", options: ["Inventer des résultats", "Recenser et analyser les travaux déjà publiés sur le sujet", "Interroger des patients", "Diffuser ses propres conclusions"], correct: 1, explication: "La revue de littérature fait la synthèse critique de l'état des connaissances existantes sur le thème étudié.", ref: "UE 3.4", diff: 1 },
  { ueId: "3.4", q: "La problématique d'une recherche correspond à :", options: ["La liste des résultats", "L'ensemble argumenté reliant concepts et théories qui justifie la question de recherche", "Le questionnaire utilisé", "Le résumé final"], correct: 1, explication: "La problématique construit le cadre conceptuel et théorique et conduit logiquement à la question de recherche.", ref: "UE 3.4", diff: 3 },
  { ueId: "3.4", q: "Une variable dépendante est :", options: ["Celle que l'on manipule volontairement", "Celle que l'on mesure, supposée influencée par une autre", "Toujours qualitative", "Sans rapport avec l'hypothèse"], correct: 1, explication: "La variable dépendante est l'effet mesuré ; la variable indépendante est celle que l'on fait varier (la cause supposée).", ref: "UE 3.4", diff: 3 },
  { ueId: "3.4", q: "Toute recherche comporte-t-elle obligatoirement une hypothèse à confirmer ?", options: ["Oui, sans exception", "Non : les recherches qualitatives/exploratoires partent souvent d'une simple question de recherche", "Oui, mais seulement en qualitatif", "Non, aucune recherche n'a d'hypothèse"], correct: 1, explication: "Les recherches exploratoires/qualitatives n'ont pas toujours d'hypothèse ; elles cherchent à faire émerger du sens à partir d'une question.", ref: "UE 3.4", diff: 2 },
  { ueId: "3.4", q: "La diffusion des résultats de recherche est importante car :", options: ["Elle est facultative et sans intérêt", "Elle permet de partager les connaissances et d'améliorer les pratiques", "Elle sert seulement à l'auteur", "Elle remplace l'analyse des données"], correct: 1, explication: "La diffusion (publication, communication) rend les connaissances accessibles et nourrit l'amélioration des pratiques soignantes.", ref: "UE 3.4", diff: 1 },
  { ueId: "3.4", q: "Dans une question fermée d'un questionnaire, le répondant :", options: ["Rédige librement sa réponse", "Choisit parmi des réponses prédéfinies", "Ne répond pas", "Est interviewé oralement"], correct: 1, explication: "Une question fermée propose des modalités de réponse prédéfinies (oui/non, échelle, choix), facilitant le traitement statistique.", ref: "UE 3.4", diff: 1 },
  { ueId: "3.4", q: "Quelle logique caractérise une démarche inductive ?", options: ["Partir d'une loi générale pour l'appliquer à un cas", "Partir d'observations particulières pour faire émerger une compréhension générale", "Tester une hypothèse chiffrée", "Suivre une procédure aléatoire"], correct: 1, explication: "L'induction part du particulier (observations, vécus) vers le général ; elle est typique du qualitatif. La déduction fait l'inverse.", ref: "UE 3.4", diff: 2 },
  { ueId: "3.4", q: "Le 'devis' (ou design) de recherche désigne :", options: ["Le budget de l'étude", "Le plan d'ensemble organisant la méthode pour répondre à la question", "La liste des références bibliographiques", "Le résumé de l'article"], correct: 1, explication: "Le devis est l'architecture méthodologique de l'étude : type d'approche, population, modalités de recueil et d'analyse.", ref: "UE 3.4", diff: 3 },
  { ueId: "3.4", q: "Qu'est-ce qu'une recherche présentée comme une 'donnée probante' de haut niveau de preuve ?", options: ["Un avis d'expert isolé", "Une revue systématique / méta-analyse d'essais contrôlés randomisés", "Une opinion sur un forum", "Un témoignage unique de patient"], correct: 1, explication: "Dans la hiérarchie des preuves, les revues systématiques et méta-analyses d'essais randomisés occupent le niveau le plus élevé ; l'avis d'expert se situe au plus bas.", ref: "UE 3.4", diff: 3 },
];
export const flashcards = [
  { ueId: "3.4", recto: "Quelles sont les 3 qualités d'une bonne question de départ ?", verso: "Clarté, faisabilité et pertinence (Quivy & Van Campenhoudt)." },
  { ueId: "3.4", recto: "Qu'est-ce qu'une hypothèse de recherche ?", verso: "Une réponse provisoire et testable à la question de recherche, à confirmer ou infirmer par les données." },
  { ueId: "3.4", recto: "Différence entre approche quantitative et qualitative ?", verso: "Quantitative = mesurer/généraliser (déductive, chiffres) ; qualitative = comprendre le sens/vécu (inductive, mots)." },
  { ueId: "3.4", recto: "Que signifie IMRaD ?", verso: "Introduction, Méthode, Résultats and Discussion : structure d'un article scientifique." },
  { ueId: "3.4", recto: "Validité vs fiabilité d'un outil ?", verso: "Validité = mesure bien ce qu'on veut mesurer ; fiabilité = donne les mêmes résultats si on répète." },
  { ueId: "3.4", recto: "Cite 3 outils de recueil de données.", verso: "Questionnaire, entretien (semi-directif), observation (et focus group)." },
  { ueId: "3.4", recto: "Qu'est-ce qu'un entretien semi-directif ?", verso: "Un entretien guidé par des thèmes (guide d'entretien souple) laissant une liberté d'expression à la personne." },
  { ueId: "3.4", recto: "Que recouvre l'Evidence-Based Nursing ?", verso: "Combiner les meilleures preuves scientifiques, l'expertise clinique et les préférences du patient." },
  { ueId: "3.4", recto: "Quelles conditions pour le consentement à une recherche ?", verso: "Libre et éclairé, après information, avec droit de retrait à tout moment." },
  { ueId: "3.4", recto: "Rôle du CPP (Comité de Protection des Personnes) ?", verso: "Examiner et autoriser sur le plan éthique les recherches impliquant la personne humaine (loi Jardé)." },
  { ueId: "3.4", recto: "Qu'est-ce qu'une revue de littérature ?", verso: "Le recensement et l'analyse critique des travaux déjà publiés sur le sujet étudié." },
  { ueId: "3.4", recto: "Variable indépendante vs dépendante ?", verso: "Indépendante = celle que l'on fait varier (cause) ; dépendante = celle que l'on mesure (effet)." },
  { ueId: "3.4", recto: "Qu'est-ce que la problématique ?", verso: "L'argumentation théorique reliant les concepts qui justifie et conduit à la question de recherche." },
  { ueId: "3.4", recto: "Échantillon représentatif : quelle approche ?", verso: "L'approche quantitative (échantillon large pour généraliser) ; le qualitatif utilise un échantillon restreint et raisonné." },
  { ueId: "3.4", recto: "Pourquoi diffuser les résultats d'une recherche ?", verso: "Pour partager les connaissances produites et améliorer les pratiques de soins." },
  { ueId: "3.4", recto: "Question fermée vs question ouverte ?", verso: "Fermée = réponses prédéfinies (faciles à traiter) ; ouverte = réponse libre rédigée par le répondant." },
  { ueId: "3.4", recto: "Induction vs déduction ?", verso: "Induction = du particulier vers le général (qualitatif) ; déduction = du général vers le particulier, test d'hypothèse (quantitatif)." },
  { ueId: "3.4", recto: "Qu'est-ce que le devis (design) de recherche ?", verso: "Le plan méthodologique d'ensemble : approche, population, recueil et analyse, pour répondre à la question." },
  { ueId: "3.4", recto: "Niveau de preuve le plus élevé ?", verso: "La revue systématique / méta-analyse d'essais contrôlés randomisés ; l'avis d'expert est le plus bas." },
];
