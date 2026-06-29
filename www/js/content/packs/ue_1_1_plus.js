// UE 1.1 PLUS — Psychologie, sociologie, anthropologie de la santé. Contenu complémentaire.
export const fiches = [
  {
    id: "fx_ue_1_1_plus_modeles_sante", ueId: "1.1", type: "cours",
    titre: "Modèles de la santé et de la maladie",
    resume: "Du modèle biomédical au modèle biopsychosocial et à la salutogenèse.",
    tags: ["biopsychosocial", "salutogenèse", "OMS", "maladie", "disease-illness"],
    html: `
      <h3>Définir la santé</h3>
      <p>L'<span class="key" data-term="OMS">OMS</span> (1946) définit la santé comme « un état de complet bien-être physique, mental et social, et pas seulement l'absence de maladie ou d'infirmité ». Définition large, parfois jugée idéaliste, mais qui élargit le soin au-delà du corps.</p>
      <h3>Du biomédical au biopsychosocial</h3>
      <table class="tbl">
        <tr><th>Modèle biomédical</th><th>Modèle biopsychosocial (Engel, 1977)</th></tr>
        <tr><td>Maladie = lésion / dysfonction d'organe</td><td>Maladie = interaction bio + psycho + social</td></tr>
        <tr><td>Centré sur l'organe et le diagnostic</td><td>Centré sur la personne dans son contexte</td></tr>
        <tr><td>Patient passif</td><td>Patient acteur de sa santé</td></tr>
      </table>
      <h3>Trois facettes de la maladie (anthropologie)</h3>
      <ul>
        <li><strong>Disease</strong> : la maladie-objet, biologique, du médecin.</li>
        <li><strong>Illness</strong> : la maladie vécue, ressentie par le malade.</li>
        <li><strong>Sickness</strong> : la maladie-rôle social, reconnue par la société.</li>
      </ul>
      <h3>Salutogenèse (Antonovsky)</h3>
      <p>Plutôt que de chercher l'origine des maladies (pathogenèse), la <span class="key" data-term="salutogenèse">salutogenèse</span> s'intéresse à ce qui maintient en bonne santé : le <strong>sentiment de cohérence</strong> (comprendre, gérer, donner du sens à sa vie) protège face au stress.</p>
      <div class="callout"><div class="callout-t">Lien soin</div>Un même diagnostic (disease) est vécu très différemment (illness) selon la personne : d'où l'importance d'écouter le récit du patient, pas seulement ses constantes.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>BIO-PSYCHO-SOCIAL</strong> : le corps, la tête, la société — trois clés pour lire toute situation de soin.</div>
    `,
    refs: ["UE 1.1", "OMS 1946", "Engel 1977"],
  },
  {
    id: "fx_ue_1_1_plus_relation_processus", ueId: "1.1", type: "cours",
    titre: "Processus psychiques dans la relation de soin",
    resume: "Transfert, empathie, deuil et stress au service de la relation soignant-soigné.",
    tags: ["transfert", "empathie", "deuil", "Kübler-Ross", "stress", "burn-out"],
    html: `
      <h3>Transfert et contre-transfert</h3>
      <ul>
        <li><span class="key" data-term="transfert">Transfert</span> : le patient projette sur le soignant des émotions et attentes issues de relations passées (parent, autorité).</li>
        <li><strong>Contre-transfert</strong> : les réactions affectives du soignant envers le patient. En avoir conscience évite de répondre par ses propres affects.</li>
      </ul>
      <h3>Empathie vs sympathie</h3>
      <p>L'<span class="key" data-term="empathie">empathie</span> (Rogers) est la capacité à comprendre le vécu de l'autre <strong>sans s'y confondre</strong> : « comme si » c'était soi, sans perdre la juste distance. La sympathie, elle, fait partager l'émotion et expose à l'épuisement.</p>
      <h3>Les étapes du deuil (Kübler-Ross)</h3>
      <table class="tbl">
        <tr><th>Étape</th><th>Manifestation</th></tr>
        <tr><td>Déni</td><td>« Ce n'est pas possible, pas moi »</td></tr>
        <tr><td>Colère</td><td>Révolte, agressivité, « pourquoi moi ? »</td></tr>
        <tr><td>Marchandage</td><td>Négociation (« si je guéris, je… »)</td></tr>
        <tr><td>Dépression</td><td>Tristesse, repli</td></tr>
        <tr><td>Acceptation</td><td>Apaisement, réorganisation</td></tr>
      </table>
      <p>Ces étapes ne sont ni linéaires ni obligatoires : un patient peut revenir en arrière ou en sauter.</p>
      <h3>Stress et épuisement soignant</h3>
      <p>Le <span class="key" data-term="stress">stress</span> (Selye) suit 3 phases : alarme, résistance, épuisement. Le <strong>burn-out</strong> associe épuisement émotionnel, dépersonnalisation et perte d'accomplissement.</p>
      <div class="callout warn"><div class="callout-t">Vigilance</div>Repérer la colère d'un patient comme une étape du deuil (et non une attaque personnelle) permet de ne pas réagir sur la défensive.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Deuil de Kübler-Ross : <strong>« DCMDA »</strong> — Déni, Colère, Marchandage, Dépression, Acceptation.</div>
    `,
    refs: ["UE 1.1", "Kübler-Ross", "Rogers", "Selye"],
  },
  {
    id: "fx_ue_1_1_plus_socio_institution", ueId: "1.1", type: "cours",
    titre: "Sociologie de la maladie et de l'institution",
    resume: "Rôle de malade, maladie chronique, institution totale et observance.",
    tags: ["Parsons", "Goffman", "chronique", "observance", "stigmatisation"],
    html: `
      <h3>Le rôle de malade (Parsons)</h3>
      <p>Pour le sociologue Talcott Parsons, être malade est un <span class="key" data-term="rôle de malade">rôle social</span> avec des droits et devoirs :</p>
      <ul>
        <li><strong>Droits</strong> : être exempté de ses obligations sociales habituelles ; ne pas être tenu responsable de son état.</li>
        <li><strong>Devoirs</strong> : considérer la maladie comme indésirable, chercher de l'aide compétente et coopérer aux soins.</li>
      </ul>
      <h3>L'institution totale (Goffman)</h3>
      <p>Erving Goffman décrit l'<span class="key" data-term="institution totale">institution totale</span> (hôpital psychiatrique, prison) : lieu clos où vie, travail et loisirs se déroulent sous une même autorité. Elle peut entraîner une <strong>perte d'identité</strong> et une dépendance.</p>
      <h3>Stigmatisation</h3>
      <p>La <span class="key" data-term="stigmate">stigmatisation</span> (Goffman) est le discrédit social attaché à un attribut (maladie mentale, VIH, handicap). Elle aggrave l'isolement et peut retarder le recours aux soins.</p>
      <h3>Maladie chronique et observance</h3>
      <p>La maladie chronique reconfigure l'identité et le quotidien. L'<span class="key" data-term="observance">observance</span> (adhésion au traitement) dépend de la compréhension, des croyances, du vécu et de l'alliance thérapeutique — pas seulement de la « bonne volonté » du patient.</p>
      <div class="callout"><div class="callout-t">À retenir</div>L'<strong>éducation thérapeutique du patient (ETP)</strong> vise à rendre le malade chronique acteur, en renforçant ses compétences d'auto-soin et son adaptation.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>PARSONS = Permission</strong> (exempté + non responsable) <strong>contre Participation</strong> (chercher de l'aide + coopérer).</div>
    `,
    refs: ["UE 1.1", "Parsons", "Goffman"],
  },
];
export const qcm = [
  { ueId: "1.1", q: "La définition de la santé de l'OMS (1946) inclut :", options: ["Uniquement l'absence de maladie", "Le bien-être physique, mental et social", "Seulement le bien-être physique", "L'absence d'infirmité uniquement"], correct: 1, explication: "L'OMS définit la santé comme un état de complet bien-être physique, mental et social, et pas seulement l'absence de maladie ou d'infirmité.", ref: "OMS 1946", diff: 1 },
  { ueId: "1.1", q: "Le modèle biopsychosocial a été proposé par :", options: ["Sigmund Freud", "George Engel", "Talcott Parsons", "Erving Goffman"], correct: 1, explication: "George Engel a formalisé le modèle biopsychosocial en 1977, intégrant les dimensions biologique, psychologique et sociale de la maladie.", ref: "Engel 1977", diff: 2 },
  { ueId: "1.1", q: "Dans la distinction anthropologique, « illness » désigne :", options: ["La maladie biologique objectivée", "La maladie telle qu'elle est vécue par le malade", "La reconnaissance sociale de la maladie", "La guérison"], correct: 1, explication: "Illness = la maladie vécue et ressentie par le patient. Disease = la maladie-objet biologique du médecin. Sickness = le rôle social reconnu par la société.", ref: "UE 1.1", diff: 3 },
  { ueId: "1.1", q: "La salutogenèse, selon Antonovsky, s'intéresse :", options: ["À l'origine des maladies", "À ce qui maintient les personnes en bonne santé", "Aux agents infectieux", "Aux mécanismes de défense"], correct: 1, explication: "La salutogenèse étudie les ressources qui maintiennent en santé (sentiment de cohérence), à l'inverse de la pathogenèse qui cherche l'origine des maladies.", ref: "Antonovsky", diff: 3 },
  { ueId: "1.1", q: "Le transfert, dans la relation de soin, désigne :", options: ["Les réactions affectives du soignant envers le patient", "La projection par le patient d'émotions issues de relations passées sur le soignant", "Le transport du patient vers un service", "La transmission d'informations entre soignants"], correct: 1, explication: "Le transfert est la projection par le patient, sur le soignant, d'affects et d'attentes liés à des relations antérieures. Les réactions du soignant relèvent du contre-transfert.", ref: "UE 1.1", diff: 2 },
  { ueId: "1.1", q: "Le contre-transfert correspond :", options: ["Aux réactions affectives du soignant envers le patient", "Au refus de soin du patient", "À un mécanisme de défense du patient", "À la guérison"], correct: 0, explication: "Le contre-transfert désigne les réactions émotionnelles du soignant à l'égard du patient ; en prendre conscience aide à garder une juste distance.", ref: "UE 1.1", diff: 2 },
  { ueId: "1.1", q: "L'empathie se distingue de la sympathie car elle :", options: ["Consiste à partager totalement l'émotion de l'autre", "Permet de comprendre le vécu de l'autre sans s'y confondre", "Implique de donner des conseils", "Suppose une absence d'émotion"], correct: 1, explication: "L'empathie (Rogers) comprend le vécu de l'autre « comme si » c'était soi, en gardant la juste distance. La sympathie partage l'émotion et expose à l'épuisement.", ref: "Rogers", diff: 2 },
  { ueId: "1.1", q: "Les étapes du deuil selon Kübler-Ross sont, dans l'ordre :", options: ["Colère, déni, dépression, acceptation, marchandage", "Déni, colère, marchandage, dépression, acceptation", "Acceptation, déni, colère, marchandage, dépression", "Dépression, déni, colère, acceptation, marchandage"], correct: 1, explication: "L'ordre proposé par Kübler-Ross est : déni, colère, marchandage, dépression, acceptation. Ces étapes ne sont ni obligatoires ni strictement linéaires.", ref: "Kübler-Ross", diff: 2 },
  { ueId: "1.1", q: "La colère d'un patient annonçant un diagnostic grave est souvent :", options: ["Une attaque personnelle contre le soignant", "Une étape normale du processus de deuil", "Un trouble psychiatrique", "Un signe d'incompétence du soignant"], correct: 1, explication: "La colère est une étape fréquente du deuil (Kübler-Ross) ; la comprendre comme telle évite de la prendre pour une agression personnelle.", ref: "Kübler-Ross", diff: 1 },
  { ueId: "1.1", q: "Le syndrome général d'adaptation au stress (Selye) comporte les phases :", options: ["Alarme, résistance, épuisement", "Déni, colère, acceptation", "Oral, anal, génital", "Alarme, repos, guérison"], correct: 0, explication: "Hans Selye décrit trois phases : réaction d'alarme, phase de résistance, puis phase d'épuisement si le stress persiste.", ref: "Selye", diff: 2 },
  { ueId: "1.1", q: "Le burn-out (épuisement professionnel) associe :", options: ["Euphorie et hyperactivité", "Épuisement émotionnel, dépersonnalisation et perte d'accomplissement", "Une maladie infectieuse", "Un simple manque de sommeil"], correct: 1, explication: "Le burn-out se caractérise par l'épuisement émotionnel, la dépersonnalisation (distance cynique) et la réduction du sentiment d'accomplissement personnel.", ref: "UE 1.1", diff: 2 },
  { ueId: "1.1", q: "Selon Parsons, le « rôle de malade » donne le droit :", options: ["De refuser tout soin", "D'être exempté de ses obligations sociales habituelles", "De ne jamais guérir", "De choisir son diagnostic"], correct: 1, explication: "Parsons décrit que le malade est temporairement exempté de ses obligations sociales et n'est pas tenu responsable de son état, en contrepartie de devoirs (chercher de l'aide, coopérer).", ref: "Parsons", diff: 2 },
  { ueId: "1.1", q: "Parmi les DEVOIRS du rôle de malade (Parsons) figure :", options: ["Refuser de coopérer aux soins", "Considérer la maladie comme désirable", "Chercher une aide compétente et coopérer aux soins", "Cacher ses symptômes"], correct: 2, explication: "Les devoirs du malade selon Parsons sont de considérer la maladie comme indésirable, de rechercher une aide compétente et de coopérer au traitement.", ref: "Parsons", diff: 3 },
  { ueId: "1.1", q: "Le concept d'« institution totale » a été développé par :", options: ["Émile Durkheim", "Erving Goffman", "Carl Rogers", "Jean Piaget"], correct: 1, explication: "Erving Goffman a décrit l'institution totale (asile, prison) : lieu clos où l'ensemble de la vie se déroule sous une même autorité, au risque d'une perte d'identité.", ref: "Goffman", diff: 2 },
  { ueId: "1.1", q: "La stigmatisation (Goffman) désigne :", options: ["Un soin technique", "Le discrédit social attaché à un attribut dévalorisé", "Une étape du deuil", "Un mécanisme de défense"], correct: 1, explication: "La stigmatisation est le discrédit social lié à un attribut (maladie mentale, VIH, handicap) ; elle aggrave l'isolement et peut retarder le recours aux soins.", ref: "Goffman", diff: 2 },
  { ueId: "1.1", q: "L'observance thérapeutique désigne :", options: ["La surveillance du patient par caméra", "Le respect (adhésion) par le patient des prescriptions de soin", "L'observation clinique par l'infirmier", "Le suivi statistique d'une cohorte"], correct: 1, explication: "L'observance (ou adhésion thérapeutique) est la mesure dans laquelle le patient suit le traitement prescrit ; elle dépend de la compréhension, des croyances et de l'alliance thérapeutique.", ref: "UE 1.1", diff: 1 },
  { ueId: "1.1", q: "L'éducation thérapeutique du patient (ETP) vise principalement à :", options: ["Remplacer le médecin", "Rendre le patient chronique acteur de sa santé en renforçant ses compétences", "Diminuer le temps de consultation", "Sanctionner la non-observance"], correct: 1, explication: "L'ETP aide le patient atteint de maladie chronique à acquérir des compétences d'auto-soin et d'adaptation, afin de devenir acteur de sa prise en charge.", ref: "UE 1.1", diff: 1 },
  { ueId: "1.1", q: "Dans le modèle biomédical (par opposition au biopsychosocial), la maladie est avant tout :", options: ["Une interaction entre corps, psychisme et société", "Une lésion ou un dysfonctionnement d'organe", "Un rôle social", "Une représentation culturelle"], correct: 1, explication: "Le modèle biomédical réduit la maladie à une lésion ou un dysfonctionnement organique, centré sur l'organe ; le modèle biopsychosocial y ajoute les dimensions psychique et sociale.", ref: "UE 1.1", diff: 2 },
  { ueId: "1.1", q: "Le « sentiment de cohérence » d'Antonovsky repose sur la capacité à :", options: ["Guérir sans traitement", "Comprendre, gérer et donner du sens aux situations de vie", "Éviter tout stress", "Refuser la maladie"], correct: 1, explication: "Le sentiment de cohérence comprend trois composantes : la compréhension, la capacité de gestion et la mise en sens ; il protège face au stress (salutogenèse).", ref: "Antonovsky", diff: 3 },
  { ueId: "1.1", q: "La maladie comme « rôle social reconnu par la société » correspond au concept de :", options: ["Disease", "Illness", "Sickness", "Salutogenèse"], correct: 2, explication: "Sickness désigne la dimension sociale de la maladie, sa reconnaissance par autrui et l'institution. Disease est la maladie biologique, illness la maladie vécue.", ref: "UE 1.1", diff: 3 },
  { ueId: "1.1", q: "La juste distance professionnelle dans la relation de soin consiste à :", options: ["Être totalement froid et détaché", "Fusionner émotionnellement avec le patient", "Être présent et empathique tout en préservant ses propres limites", "Éviter tout contact avec le patient"], correct: 2, explication: "La juste distance combine proximité empathique et préservation de soi : ni fusion (risque d'épuisement) ni indifférence (perte de la relation de soin).", ref: "UE 1.1", diff: 2 },
];
export const flashcards = [
  { ueId: "1.1", recto: "Comment l'OMS définit-elle la santé (1946) ?", verso: "Un état de complet bien-être physique, mental et social, pas seulement l'absence de maladie ou d'infirmité." },
  { ueId: "1.1", recto: "Qui a proposé le modèle biopsychosocial ?", verso: "George Engel (1977) : la maladie résulte de l'interaction des facteurs biologiques, psychologiques et sociaux." },
  { ueId: "1.1", recto: "Différence entre disease, illness et sickness ?", verso: "Disease = maladie biologique (médecin) ; illness = maladie vécue (patient) ; sickness = rôle social reconnu." },
  { ueId: "1.1", recto: "Qu'est-ce que la salutogenèse (Antonovsky) ?", verso: "L'étude de ce qui maintient en bonne santé (sentiment de cohérence), à l'inverse de la pathogenèse." },
  { ueId: "1.1", recto: "Qu'est-ce que le transfert en soin ?", verso: "La projection par le patient, sur le soignant, d'émotions et d'attentes issues de relations passées." },
  { ueId: "1.1", recto: "Qu'est-ce que le contre-transfert ?", verso: "Les réactions affectives du soignant envers le patient ; en avoir conscience préserve la juste distance." },
  { ueId: "1.1", recto: "Empathie ou sympathie : laquelle garde la juste distance ?", verso: "L'empathie : comprendre le vécu de l'autre « comme si » c'était soi, sans s'y confondre." },
  { ueId: "1.1", recto: "Quelles sont les 5 étapes du deuil (Kübler-Ross) ?", verso: "Déni, colère, marchandage, dépression, acceptation (ni linéaires ni obligatoires)." },
  { ueId: "1.1", recto: "Quelles sont les 3 phases du stress selon Selye ?", verso: "Alarme, résistance, épuisement." },
  { ueId: "1.1", recto: "Quelles sont les 3 dimensions du burn-out ?", verso: "Épuisement émotionnel, dépersonnalisation, perte du sentiment d'accomplissement." },
  { ueId: "1.1", recto: "Quels sont les droits du « rôle de malade » selon Parsons ?", verso: "Être exempté de ses obligations sociales et ne pas être tenu responsable de son état." },
  { ueId: "1.1", recto: "Quels sont les devoirs du « rôle de malade » selon Parsons ?", verso: "Considérer la maladie comme indésirable, chercher de l'aide compétente et coopérer aux soins." },
  { ueId: "1.1", recto: "Qu'est-ce qu'une institution totale (Goffman) ?", verso: "Un lieu clos (asile, prison) où toute la vie se déroule sous une même autorité, au risque d'une perte d'identité." },
  { ueId: "1.1", recto: "Qu'est-ce que l'observance thérapeutique ?", verso: "L'adhésion du patient aux prescriptions ; elle dépend de la compréhension, des croyances et de l'alliance thérapeutique." },
  { ueId: "1.1", recto: "Quel est l'objectif de l'éducation thérapeutique du patient (ETP) ?", verso: "Rendre le patient chronique acteur de sa santé en renforçant ses compétences d'auto-soin et d'adaptation." },
];
