// UE 1.3 — Législation, éthique, déontologie. Pack de révision (référentiel 2009).
export const fiches = [
  {
    id: "f_1_3_droits_patient", ueId: "1.3", type: "cours",
    titre: "Droits du patient et loi du 4 mars 2002",
    resume: "La loi Kouchner consacre les droits fondamentaux de la personne malade : information, consentement, accès au dossier.",
    tags: ["droits du patient", "loi 4 mars 2002", "consentement", "information"],
    html: `
      <p>La <strong>loi du 4 mars 2002</strong> (dite loi Kouchner), relative aux droits des malades et à la qualité du système de santé, place le patient au centre du système de soins comme <span class="key" data-term="acteur de sa santé">acteur de sa santé</span>.</p>
      <h3>Droits fondamentaux consacrés</h3>
      <ul>
        <li><strong>Droit à l'information</strong> : claire, loyale et appropriée sur son état de santé, les soins proposés, les risques et les alternatives.</li>
        <li><strong>Droit au consentement libre et éclairé</strong> : aucun acte ne peut être pratiqué sans le consentement de la personne, qui peut le retirer à tout moment.</li>
        <li><strong>Droit d'accès au dossier médical</strong> : communication dans un délai de 8 jours après la demande (après un délai de réflexion de 48 h), porté à 2 mois pour des informations datant de plus de 5 ans.</li>
        <li><strong>Droit au respect de la dignité, de la vie privée et du secret</strong>.</li>
        <li><strong>Désignation d'une personne de confiance</strong> et droit à la non-discrimination.</li>
      </ul>
      <div class="callout"><div class="callout-t">À retenir</div>« Aucun acte médical ni aucun traitement ne peut être pratiqué sans le consentement libre et éclairé de la personne » (art. L.1111-4 du Code de la santé publique).</div>
      <h3>Réparation des risques sanitaires</h3>
      <p>La loi crée l'<strong>ONIAM</strong> (Office national d'indemnisation des accidents médicaux) pour indemniser au titre de la <strong>solidarité nationale</strong> les accidents médicaux non fautifs (aléa thérapeutique).</p>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« <strong>I-C-D-D</strong> » : <em>Information, Consentement, Dossier, Dignité</em> — les 4 piliers des droits du patient.</div>
    `,
    refs: ["UE 1.3", "Loi n° 2002-303 du 4 mars 2002"],
  },
  {
    id: "f_1_3_secret_pro", ueId: "1.3", type: "cours",
    titre: "Secret professionnel et confidentialité",
    resume: "Le secret professionnel est une obligation légale et déontologique ; ses dérogations sont strictement encadrées.",
    tags: ["secret professionnel", "confidentialité", "secret partagé", "dérogations"],
    html: `
      <p>Le <strong>secret professionnel</strong> s'impose à tout professionnel de santé. Il est <strong>général et absolu</strong> par principe, et protège la personne soignée. Il persiste après le décès du patient.</p>
      <h3>Fondements juridiques</h3>
      <ul>
        <li><strong>Code pénal (art. 226-13)</strong> : la violation du secret est punie d'<strong>1 an d'emprisonnement et 15 000 € d'amende</strong>.</li>
        <li><strong>Code de la santé publique (art. R.4312-5)</strong> : obligation déontologique de l'infirmier.</li>
      </ul>
      <h3>Le secret partagé</h3>
      <p>Au sein de l'<span class="key" data-term="équipe de soins">équipe de soins</span>, les informations peuvent être échangées entre professionnels participant à la prise en charge, dans la limite de ce qui est <strong>strictement nécessaire</strong> à la continuité des soins.</p>
      <h3>Dérogations légales (art. 226-14 du Code pénal)</h3>
      <ul>
        <li>Signalement de <strong>privations ou sévices</strong> sur mineur ou personne vulnérable.</li>
        <li>Information du procureur sur des violences (avec accord de la victime majeure).</li>
        <li>Déclaration des <strong>maladies à déclaration obligatoire</strong>.</li>
        <li>Réquisition judiciaire, certains certificats légaux.</li>
      </ul>
      <div class="callout warn"><div class="callout-t">Piège fréquent</div>Le secret n'est pas opposable au patient lui-même. On ne « se cache pas » derrière le secret pour refuser une information à la personne concernée.</div>
    `,
    refs: ["UE 1.3", "Code pénal art. 226-13 et 226-14"],
  },
  {
    id: "f_1_3_responsabilite", ueId: "1.3", type: "cours",
    titre: "Responsabilité de l'infirmier",
    resume: "L'infirmier engage trois formes de responsabilité : pénale, civile et disciplinaire (+ administrative dans le public).",
    tags: ["responsabilité", "pénale", "civile", "disciplinaire", "faute"],
    html: `
      <p>Toute personne est responsable de ses actes. L'infirmier peut voir sa responsabilité engagée sur plusieurs plans, qui peuvent se cumuler.</p>
      <table class="tbl">
        <tr><th>Type</th><th>But</th><th>Juridiction / instance</th><th>Sanction</th></tr>
        <tr><td>Pénale</td><td>Punir une infraction</td><td>Tribunal correctionnel</td><td>Amende, prison</td></tr>
        <tr><td>Civile (privé)</td><td>Réparer un dommage</td><td>Tribunal judiciaire</td><td>Dommages-intérêts</td></tr>
        <tr><td>Administrative (public)</td><td>Réparer un dommage (faute de service)</td><td>Tribunal administratif</td><td>Indemnisation (à la charge de l'hôpital)</td></tr>
        <tr><td>Disciplinaire / ordinale</td><td>Sanctionner un manquement déontologique</td><td>Employeur / Ordre infirmier</td><td>Avertissement à radiation</td></tr>
      </table>
      <h3>Conditions de la responsabilité civile/administrative</h3>
      <p>Trois éléments cumulatifs : une <strong>faute</strong>, un <strong>dommage</strong> (préjudice) et un <strong>lien de causalité</strong> entre les deux.</p>
      <div class="callout"><div class="callout-t">Faute de service vs faute personnelle</div>Dans le secteur public, la <strong>faute de service</strong> engage l'établissement ; la <strong>faute personnelle détachable</strong> (intentionnelle, d'une gravité inexcusable) engage personnellement l'agent.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« <strong>F-D-L</strong> » : <em>Faute + Dommage + Lien de causalité</em> = responsabilité engagée.</div>
    `,
    refs: ["UE 1.3", "Code de la santé publique"],
  },
  {
    id: "f_1_3_ethique", ueId: "1.3", type: "cours",
    titre: "Éthique, déontologie et grands principes",
    resume: "Distinguer morale, éthique et déontologie ; connaître les 4 grands principes de l'éthique biomédicale.",
    tags: ["éthique", "déontologie", "bienfaisance", "autonomie", "morale"],
    html: `
      <p>Il faut distinguer trois notions souvent confondues :</p>
      <ul>
        <li><strong>Morale</strong> : ensemble de règles du bien et du mal, à valeur universelle ou culturelle.</li>
        <li><strong>Éthique</strong> : réflexion, questionnement sur ce qu'il convient de faire dans une situation singulière (« comment bien agir ? »).</li>
        <li><strong>Déontologie</strong> : ensemble des <strong>devoirs et règles</strong> régissant une profession (code de déontologie).</li>
      </ul>
      <h3>Les 4 principes de l'éthique biomédicale (Beauchamp & Childress)</h3>
      <ul>
        <li><strong>Bienfaisance</strong> : agir pour le bien du patient.</li>
        <li><strong>Non-malfaisance</strong> : « primum non nocere », ne pas nuire.</li>
        <li><strong>Autonomie</strong> : respecter la volonté et les choix de la personne.</li>
        <li><strong>Justice</strong> : équité d'accès et de répartition des soins.</li>
      </ul>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« <strong>BAJN</strong> » : <em>Bienfaisance, Autonomie, Justice, Non-malfaisance</em>.</div>
      <h3>Le code de déontologie infirmier</h3>
      <p>Intégré au Code de la santé publique en <strong>2016</strong> (décret n° 2016-1605 du 25 novembre 2016), il définit les devoirs de l'infirmier envers les patients, la profession et les autres professionnels. Son respect relève de l'<span class="key" data-term="Ordre national des infirmiers">Ordre national des infirmiers</span>.</p>
      <div class="callout warn"><div class="callout-t">Distinction clé</div>L'éthique <em>interroge</em>, la déontologie <em>prescrit</em> des règles, le droit <em>sanctionne</em>.</div>
    `,
    refs: ["UE 1.3", "Décret n° 2016-1605 du 25 novembre 2016 (code de déontologie)"],
  },
  {
    id: "f_1_3_directives_fdv", ueId: "1.3", type: "cours",
    titre: "Fin de vie : directives anticipées et loi Claeys-Leonetti",
    resume: "La loi du 2 février 2016 renforce les droits des malades en fin de vie : directives anticipées contraignantes, sédation profonde et continue.",
    tags: ["fin de vie", "directives anticipées", "Claeys-Leonetti", "personne de confiance", "obstination déraisonnable"],
    html: `
      <p>La <strong>loi Claeys-Leonetti du 2 février 2016</strong> crée de nouveaux droits en faveur des personnes malades et en fin de vie, en complétant la loi Leonetti du 22 avril 2005.</p>
      <h3>Apports principaux</h3>
      <ul>
        <li><strong>Directives anticipées</strong> : désormais <strong>contraignantes</strong> pour le médecin (sauf urgence vitale le temps d'évaluer la situation, ou si manifestement inappropriées). Elles sont sans limite de durée et révisables à tout moment.</li>
        <li><strong>Personne de confiance</strong> : son témoignage prévaut sur tout autre témoignage si le patient ne peut s'exprimer.</li>
        <li><strong>Sédation profonde et continue</strong> maintenue jusqu'au décès, dans des conditions strictes.</li>
        <li><strong>Refus de l'obstination déraisonnable</strong> (acharnement thérapeutique) : les traitements peuvent être arrêtés ou non entrepris s'ils sont inutiles, disproportionnés ou n'ont d'autre effet que le maintien artificiel de la vie.</li>
      </ul>
      <div class="callout warn"><div class="callout-t">Distinction clé</div>La loi française autorise l'arrêt des traitements et la sédation profonde, mais <strong>n'autorise ni l'euthanasie ni le suicide assisté</strong>.</div>
    `,
    refs: ["UE 1.3", "Loi n° 2016-87 du 2 février 2016 (Claeys-Leonetti)"],
  },
];

export const qcm = [
  { ueId: "1.3", q: "La loi du 4 mars 2002 relative aux droits des malades est aussi appelée :", options: ["Loi Leonetti", "Loi Kouchner", "Loi Veil", "Loi HPST"], correct: 1,
    explication: "La loi du 4 mars 2002 est dite « loi Kouchner ». La loi Leonetti (2005) concerne la fin de vie, la loi Veil (1975) l'IVG, et la loi HPST (2009) l'organisation hospitalière.", ref: "UE 1.3", diff: 1 },
  { ueId: "1.3", q: "Quel délai légal maximal pour communiquer un dossier médical contenant des informations de moins de 5 ans ?", options: ["48 heures", "8 jours", "1 mois", "2 mois"], correct: 1,
    explication: "Le dossier doit être communiqué dans un délai de 8 jours après la demande (et au plus tôt après 48 h de réflexion). Le délai passe à 2 mois pour des informations datant de plus de 5 ans.", ref: "UE 1.3", diff: 2 },
  { ueId: "1.3", q: "La violation du secret professionnel est punie par le Code pénal de :", options: ["6 mois de prison et 7 500 €", "1 an de prison et 15 000 €", "2 ans de prison et 30 000 €", "3 ans de prison et 45 000 €"], correct: 1,
    explication: "L'article 226-13 du Code pénal punit la violation du secret professionnel d'un an d'emprisonnement et de 15 000 euros d'amende.", ref: "UE 1.3", diff: 2 },
  { ueId: "1.3", q: "Le consentement aux soins doit être :", options: ["Implicite et définitif", "Libre, éclairé et révocable", "Donné uniquement par la famille", "Recueilli seulement à l'hôpital"], correct: 1,
    explication: "Le consentement doit être libre (sans contrainte), éclairé (après information) et peut être retiré à tout moment par la personne. C'est un principe central de la loi du 4 mars 2002.", ref: "UE 1.3", diff: 1 },
  { ueId: "1.3", q: "Parmi ces principes, lequel correspond à « primum non nocere » ?", options: ["Bienfaisance", "Autonomie", "Non-malfaisance", "Justice"], correct: 2,
    explication: "« D'abord ne pas nuire » correspond au principe de non-malfaisance, l'un des quatre principes de l'éthique biomédicale de Beauchamp et Childress.", ref: "UE 1.3", diff: 1 },
  { ueId: "1.3", q: "L'organisme indemnisant les accidents médicaux non fautifs (aléa thérapeutique) au titre de la solidarité nationale est :", options: ["La CPAM", "L'ONIAM", "La HAS", "L'ARS"], correct: 1,
    explication: "L'ONIAM (Office national d'indemnisation des accidents médicaux), créé par la loi du 4 mars 2002, indemnise les accidents médicaux non fautifs au titre de la solidarité nationale.", ref: "UE 1.3", diff: 2 },
  { ueId: "1.3", q: "La responsabilité civile a pour but principal de :", options: ["Punir l'auteur d'une infraction", "Réparer le dommage causé à autrui", "Sanctionner un manquement déontologique", "Radier le professionnel"], correct: 1,
    explication: "La responsabilité civile vise la réparation d'un dommage par le versement de dommages-intérêts. C'est la responsabilité pénale qui punit, et la responsabilité disciplinaire qui sanctionne un manquement déontologique.", ref: "UE 1.3", diff: 1 },
  { ueId: "1.3", q: "Pour engager la responsabilité civile, trois éléments cumulatifs sont nécessaires :", options: ["Faute, intention, préméditation", "Faute, dommage, lien de causalité", "Dommage, plainte, témoin", "Intention, victime, sanction"], correct: 1,
    explication: "La responsabilité civile suppose une faute, un dommage (préjudice) et un lien de causalité reliant la faute au dommage.", ref: "UE 1.3", diff: 2 },
  { ueId: "1.3", q: "La déontologie se définit comme :", options: ["Une réflexion philosophique sur le bien", "L'ensemble des devoirs et règles d'une profession", "Une obligation morale universelle", "Une loi votée par le Parlement"], correct: 1,
    explication: "La déontologie est l'ensemble des devoirs et des règles régissant l'exercice d'une profession. L'éthique relève de la réflexion, la morale des règles du bien/mal.", ref: "UE 1.3", diff: 1 },
  { ueId: "1.3", q: "Dans le secteur public hospitalier, une faute de service engage :", options: ["Personnellement l'infirmier", "L'établissement de santé", "Le patient", "L'Ordre infirmier"], correct: 1,
    explication: "La faute de service engage la responsabilité de l'établissement (jugée au tribunal administratif). Seule la faute personnelle détachable engage personnellement l'agent.", ref: "UE 1.3", diff: 3 },
  { ueId: "1.3", q: "La personne de confiance, désignée par le patient, a notamment pour rôle de :", options: ["Accéder seule au dossier sans le patient", "Accompagner le patient et être consultée s'il ne peut s'exprimer", "Décider à la place du patient conscient", "Gérer les biens du patient"], correct: 1,
    explication: "La personne de confiance accompagne le patient dans ses démarches et est consultée en priorité si la personne est hors d'état d'exprimer sa volonté. Elle ne se substitue pas au patient conscient.", ref: "UE 1.3", diff: 2 },
  { ueId: "1.3", q: "Le « secret partagé » entre soignants signifie que :", options: ["Tout le personnel peut tout savoir", "On échange ce qui est strictement nécessaire à la continuité des soins", "Le secret n'existe plus en équipe", "Seul le médecin connaît le secret"], correct: 1,
    explication: "Le secret partagé autorise l'échange d'informations entre professionnels participant à la prise en charge, mais limité à ce qui est strictement nécessaire à la continuité et la qualité des soins.", ref: "UE 1.3", diff: 2 },
  { ueId: "1.3", q: "Parmi les dérogations légales au secret professionnel figure :", options: ["La curiosité d'un collègue", "Le signalement de sévices sur une personne vulnérable", "Une demande de la presse", "Une discussion familiale"], correct: 1,
    explication: "L'article 226-14 du Code pénal autorise le signalement de privations ou sévices sur un mineur ou une personne vulnérable. La curiosité, la presse ou les proches ne sont pas des dérogations.", ref: "UE 1.3", diff: 2 },
  { ueId: "1.3", q: "Le code de déontologie des infirmiers a été intégré au Code de la santé publique en :", options: ["2002", "2009", "2016", "2021"], correct: 2,
    explication: "Le code de déontologie infirmier a été publié par décret le 25 novembre 2016 et intégré au Code de la santé publique. Son respect relève de l'Ordre national des infirmiers.", ref: "UE 1.3", diff: 3 },
  { ueId: "1.3", q: "Quel principe éthique impose de respecter les choix et la volonté du patient ?", options: ["Bienfaisance", "Justice", "Autonomie", "Non-malfaisance"], correct: 2,
    explication: "Le principe d'autonomie impose de respecter la capacité de la personne à décider pour elle-même, ce qui fonde l'exigence du consentement éclairé.", ref: "UE 1.3", diff: 1 },
  { ueId: "1.3", q: "La responsabilité pénale est jugée devant :", options: ["Le tribunal judiciaire (civil)", "Le tribunal administratif", "Le tribunal correctionnel", "La chambre disciplinaire de l'Ordre"], correct: 2,
    explication: "Les délits relevant de la responsabilité pénale sont jugés par le tribunal correctionnel. Le tribunal judiciaire traite le civil, le tribunal administratif le contentieux du service public.", ref: "UE 1.3", diff: 2 },
  { ueId: "1.3", q: "Concernant le secret professionnel, quelle affirmation est EXACTE ?", options: ["Il est opposable au patient lui-même", "Il cesse au décès du patient", "Il protège la personne soignée et s'impose à tous les soignants", "Il ne concerne que les médecins"], correct: 2,
    explication: "Le secret protège la personne soignée et s'impose à l'ensemble des professionnels de santé. Il n'est pas opposable au patient concerné et persiste après le décès.", ref: "UE 1.3", diff: 2 },
  { ueId: "1.3", q: "L'information délivrée au patient doit être :", options: ["Technique et exhaustive en termes médicaux", "Claire, loyale et appropriée", "Réservée à la famille", "Donnée uniquement par écrit"], correct: 1,
    explication: "L'information doit être claire, loyale et appropriée, adaptée à la compréhension de la personne. Elle porte sur l'état de santé, les soins, les risques et les alternatives.", ref: "UE 1.3", diff: 1 },
  { ueId: "1.3", q: "Pour un patient mineur, le consentement aux soins est en principe donné par :", options: ["Le mineur seul dès 12 ans", "Les titulaires de l'autorité parentale", "Le médecin uniquement", "L'infirmier"], correct: 1,
    explication: "Pour un mineur, le consentement est en principe recueilli auprès des titulaires de l'autorité parentale, tout en recherchant l'adhésion du mineur selon son degré de maturité.", ref: "UE 1.3", diff: 2 },
  { ueId: "1.3", q: "La distinction essentielle entre éthique et déontologie est que :", options: ["L'éthique sanctionne, la déontologie réfléchit", "L'éthique interroge, la déontologie prescrit des règles", "Elles sont synonymes", "La déontologie est une loi pénale"], correct: 1,
    explication: "L'éthique relève du questionnement (« comment bien agir ? ») tandis que la déontologie prescrit des devoirs et règles propres à une profession.", ref: "UE 1.3", diff: 2 },
  { ueId: "1.3", q: "Quelle instance peut prononcer une sanction disciplinaire ordinale contre un infirmier (radiation possible) ?", options: ["Le tribunal correctionnel", "La chambre disciplinaire de l'Ordre national des infirmiers", "La CPAM", "L'ARS"], correct: 1,
    explication: "Les manquements déontologiques relèvent des chambres disciplinaires de l'Ordre national des infirmiers, qui peuvent aller de l'avertissement à la radiation du tableau.", ref: "UE 1.3", diff: 3 },
  { ueId: "1.3", q: "Le refus de soins d'un patient majeur, conscient et informé doit être :", options: ["Ignoré pour le protéger", "Respecté, après l'avoir informé des conséquences", "Imposé par la famille", "Décidé par l'infirmier"], correct: 1,
    explication: "Au nom du principe d'autonomie et de la loi du 4 mars 2002, le refus d'un majeur conscient et informé doit être respecté ; le soignant doit l'informer des conséquences et tracer la décision.", ref: "UE 1.3", diff: 3 },
  { ueId: "1.3", q: "Depuis la loi Claeys-Leonetti de 2016, les directives anticipées sont :", options: ["De simples souhaits sans valeur", "Contraignantes pour le médecin (sauf exceptions)", "Valables seulement 3 ans", "Rédigées par le médecin"], correct: 1,
    explication: "La loi du 2 février 2016 a rendu les directives anticipées contraignantes pour le médecin, sans limite de durée. Elles ne s'imposent pas en cas d'urgence vitale (le temps d'évaluer) ou si elles sont manifestement inappropriées.", ref: "UE 1.3", diff: 3 },
  { ueId: "1.3", q: "Le refus de l'« obstination déraisonnable » (acharnement thérapeutique) signifie que :", options: ["On doit tout tenter en toute circonstance", "On peut arrêter des traitements inutiles ou disproportionnés", "On pratique l'euthanasie", "On accélère volontairement le décès"], correct: 1,
    explication: "L'obstination déraisonnable correspond à des traitements inutiles, disproportionnés ou n'ayant d'autre effet que le maintien artificiel de la vie ; ils peuvent être arrêtés ou non entrepris. La loi française n'autorise pas l'euthanasie.", ref: "UE 1.3", diff: 3 },
  { ueId: "1.3", q: "La sédation profonde et continue maintenue jusqu'au décès est encadrée par :", options: ["La loi Veil", "La loi Claeys-Leonetti (2016)", "La loi HPST", "Le Code pénal"], correct: 1,
    explication: "La sédation profonde et continue maintenue jusqu'au décès a été introduite par la loi Claeys-Leonetti du 2 février 2016, dans des conditions strictes pour les patients en fin de vie.", ref: "UE 1.3", diff: 3 },
  { ueId: "1.3", q: "Quel est l'ordre correct de la hiérarchie des normes (du plus élevé au plus bas) ?", options: ["Loi > Constitution > décret", "Constitution > loi > décret > arrêté", "Décret > loi > Constitution", "Arrêté > décret > loi"], correct: 1,
    explication: "La hiérarchie des normes place la Constitution (et le bloc de constitutionnalité) au sommet, puis les traités internationaux, la loi, puis le pouvoir réglementaire (décret, arrêté).", ref: "UE 1.3", diff: 2 },
];

export const flashcards = [
  { ueId: "1.3", recto: "Comment s'appelle la loi du 4 mars 2002 ?", verso: "La loi Kouchner, relative aux droits des malades et à la qualité du système de santé." },
  { ueId: "1.3", recto: "Quelles sont les trois qualités requises du consentement aux soins ?", verso: "Libre, éclairé et révocable (retirable à tout moment)." },
  { ueId: "1.3", recto: "Quelle est la sanction pénale de la violation du secret professionnel ?", verso: "1 an d'emprisonnement et 15 000 € d'amende (art. 226-13 du Code pénal)." },
  { ueId: "1.3", recto: "Délai légal de communication d'un dossier médical (infos de moins de 5 ans) ?", verso: "8 jours après la demande (2 mois si les informations datent de plus de 5 ans)." },
  { ueId: "1.3", recto: "Cite les 4 principes de l'éthique biomédicale.", verso: "Bienfaisance, Non-malfaisance, Autonomie, Justice." },
  { ueId: "1.3", recto: "Que signifie « primum non nocere » ?", verso: "« D'abord ne pas nuire » : c'est le principe de non-malfaisance." },
  { ueId: "1.3", recto: "Quels sont les 3 éléments nécessaires à la responsabilité civile ?", verso: "Une faute, un dommage et un lien de causalité entre les deux." },
  { ueId: "1.3", recto: "Quel organisme indemnise l'aléa thérapeutique (accident non fautif) ?", verso: "L'ONIAM, au titre de la solidarité nationale (loi du 4 mars 2002)." },
  { ueId: "1.3", recto: "Différence entre éthique et déontologie ?", verso: "L'éthique interroge (« comment bien agir ? ») ; la déontologie prescrit les devoirs et règles d'une profession." },
  { ueId: "1.3", recto: "Qu'est-ce que le secret partagé ?", verso: "L'échange d'informations entre soignants d'une même prise en charge, limité au strictement nécessaire à la continuité des soins." },
  { ueId: "1.3", recto: "Quel est le rôle de la personne de confiance ?", verso: "Accompagner le patient et être consultée en priorité s'il ne peut plus exprimer sa volonté." },
  { ueId: "1.3", recto: "Quelles sont les principales formes de responsabilité de l'infirmier ?", verso: "Pénale, civile (ou administrative dans le public) et disciplinaire/ordinale." },
  { ueId: "1.3", recto: "En quelle année le code de déontologie infirmier a-t-il été intégré au CSP ?", verso: "En 2016 (décret n° 2016-1605 du 25 novembre 2016)." },
  { ueId: "1.3", recto: "Le secret professionnel est-il opposable au patient lui-même ?", verso: "Non : le secret protège le patient, on ne peut pas le lui opposer pour refuser une information le concernant." },
  { ueId: "1.3", recto: "Citez deux dérogations légales au secret professionnel.", verso: "Signalement de sévices sur personne vulnérable/mineur ; déclaration des maladies à déclaration obligatoire (art. 226-14)." },
  { ueId: "1.3", recto: "Que doit faire l'infirmier face au refus de soins d'un majeur conscient et informé ?", verso: "Le respecter après l'avoir informé des conséquences, et tracer la décision (principe d'autonomie)." },
  { ueId: "1.3", recto: "Qu'apporte la loi Claeys-Leonetti du 2 février 2016 ?", verso: "Directives anticipées contraignantes, sédation profonde et continue jusqu'au décès, refus de l'obstination déraisonnable. Elle n'autorise ni l'euthanasie ni le suicide assisté." },
  { ueId: "1.3", recto: "Qu'est-ce que l'obstination déraisonnable ?", verso: "Des traitements inutiles, disproportionnés ou n'ayant d'autre effet que le maintien artificiel de la vie ; ils peuvent être arrêtés ou non entrepris." },
];
