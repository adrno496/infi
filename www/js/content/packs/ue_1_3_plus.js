export const fiches = [
  {
    id: "fx_ue_1_3_plus_secret_pratique", ueId: "1.3", type: "cours",
    titre: "Secret professionnel : cas pratiques et limites au quotidien",
    resume: "Appliquer le secret professionnel dans les situations concrètes de service et connaître précisément ses dérogations.",
    tags: ["secret professionnel", "dérogations", "confidentialité", "signalement"],
    html: `
      <p>Le <span class="key" data-term="secret professionnel">secret professionnel</span> n'est pas un principe abstrait : il se joue dans des gestes quotidiens (couloir, téléphone, transmissions, réseaux sociaux). Il est <strong>général et absolu</strong> et s'impose à tout professionnel intervenant dans le système de santé (art. L.1110-4 du Code de la santé publique, CSP). Sa violation est punie de <strong>1 an d'emprisonnement et 15 000 €</strong> d'amende (art. 226-13 du Code pénal).</p>
      <h3>Erreurs fréquentes en service</h3>
      <ul>
        <li>Parler d'un patient dans l'ascenseur, le couloir, la cafétéria : <strong>fuite involontaire</strong> mais sanctionnable.</li>
        <li>Confirmer la présence d'un patient au téléphone à un proche non identifié : on ne confirme jamais une hospitalisation sans accord du patient.</li>
        <li>Laisser un dossier ou un écran de DPI (dossier patient informatisé) ouvert et visible : verrouiller la session systématiquement.</li>
        <li>Publier une photo ou une situation, même anonymisée, sur les réseaux sociaux : interdit.</li>
      </ul>
      <div class="callout"><div class="callout-t">Secret partagé ≠ secret aboli</div>Entre soignants d'une <strong>même équipe de soins</strong>, on partage uniquement ce qui est <strong>strictement nécessaire à la continuité et à la coordination des soins</strong>. Le partage avec un professionnel hors équipe exige en principe le consentement du patient (qui peut s'y opposer).</div>
      <h3>Les dérogations LÉGALES au secret (art. 226-14 Code pénal et CSP)</h3>
      <table class="tbl">
        <tr><th>Situation</th><th>Cadre</th></tr>
        <tr><td>Sévices / privations sur mineur ou personne vulnérable</td><td>Signalement autorisé (obligatoire pour le mineur)</td></tr>
        <tr><td>Maladies à déclaration obligatoire (MDO)</td><td>Déclaration à l'ARS (ex. tuberculose, méningite, TIAC)</td></tr>
        <tr><td>Personne dangereuse détenant une arme</td><td>Information possible du préfet</td></tr>
        <tr><td>Réquisition judiciaire, témoignage en justice</td><td>Levée encadrée par la loi</td></tr>
      </table>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« Le secret se PARTAGE, mais seulement entre soignants, et seulement le NÉCESSAIRE. » Pense <strong>P.A.N.</strong> : <strong>P</strong>rofessionnel de l'équipe, <strong>A</strong>ccord (ou information) du patient, <strong>N</strong>écessaire aux soins.</div>
      <div class="callout"><div class="callout-t">Et après le décès ?</div>Le secret <strong>persiste après la mort</strong>. Les ayants droit, le concubin ou le partenaire de PACS peuvent accéder à certaines informations du dossier dans <strong>3 buts limitatifs</strong> : connaître les causes de la mort, défendre la mémoire du défunt, faire valoir leurs droits — sauf opposition exprimée par le défunt de son vivant.</div>
    `,
    refs: ["Art. L.1110-4 CSP", "Art. 226-13 et 226-14 Code pénal", "Code de déontologie infirmier (art. R.4312-5 CSP)"]
  },
  {
    id: "fx_ue_1_3_plus_droits_collectifs", ueId: "1.3", type: "cours",
    titre: "Droits du patient hospitalisé : représentation, contention et libertés",
    resume: "Au-delà du consentement individuel, les droits collectifs, la liberté d'aller et venir et l'encadrement de la contention.",
    tags: ["droits du patient", "contention", "CDU", "liberté", "dignité"],
    html: `
      <p>La loi du 4 mars 2002 (loi Kouchner) a consacré des <strong>droits individuels</strong> (information, consentement, accès au dossier) mais aussi des <strong>droits collectifs</strong> et le respect de la <span class="key" data-term="dignité">dignité</span> de la personne soignée.</p>
      <h3>Représentation des usagers</h3>
      <ul>
        <li>La <strong>CDU</strong> (Commission des usagers, ex-CRUQPC) veille au respect des droits des usagers et facilite leurs démarches ; elle examine les plaintes et réclamations.</li>
        <li>Tout établissement remet un <strong>livret d'accueil</strong> incluant la <strong>charte de la personne hospitalisée</strong>.</li>
        <li>Le patient peut saisir un <strong>médiateur</strong> (médical ou non médical) en cas de litige.</li>
      </ul>
      <h3>Liberté d'aller et venir et contention</h3>
      <div class="callout"><div class="callout-t">La contention est un soin sous contraintes strictes</div>La <span class="key" data-term="contention">contention</span> physique et l'isolement portent atteinte à la liberté d'aller et venir : ils ne se justifient qu'en <strong>dernier recours</strong>, sur <strong>prescription médicale</strong>, pour une <strong>durée limitée et réévaluée</strong>, avec une <strong>surveillance rapprochée</strong> et une <strong>traçabilité</strong> rigoureuse. La HAS exige la recherche préalable d'alternatives.</div>
      <table class="tbl">
        <tr><th>Exigence</th><th>Concrètement</th></tr>
        <tr><td>Prescription</td><td>Médicale, écrite, motivée, datée, limitée dans le temps</td></tr>
        <tr><td>Surveillance IDE</td><td>État cutané, hydratation, élimination, état psychique, intégrité, à intervalles définis</td></tr>
        <tr><td>Réévaluation</td><td>Pluriquotidienne, recherche de la levée dès que possible</td></tr>
        <tr><td>Risques</td><td>Escarres, thrombose, fausse route, perte d'autonomie, atteinte à la dignité</td></tr>
      </table>
      <h3>En psychiatrie : soins sans consentement</h3>
      <ul>
        <li><strong>SPDT</strong> (à la demande d'un tiers), <strong>SPDRE</strong> (sur décision du représentant de l'État) : encadrés par la loi du 5 juillet 2011.</li>
        <li>Contrôle systématique par le <strong>juge des libertés et de la détention (JLD)</strong> dans les 12 jours, puis périodiquement.</li>
        <li>Même sans consentement aux soins, les <strong>droits fondamentaux</strong> du patient sont maintenus (information, dignité, droit de communiquer, voies de recours).</li>
      </ul>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo contention</div><strong>« PRESCRIRE »</strong> : <strong>P</strong>rescription médicale, <strong>R</strong>éévaluation, <strong>E</strong>n dernier recours, <strong>S</strong>urveillance, <strong>C</strong>ourte durée, <strong>R</strong>echerche d'alternatives, <strong>I</strong>nformation du patient, <strong>R</strong>egistre/traçabilité, <strong>E</strong>scarres à prévenir.</div>
    `,
    refs: ["Loi n° 2002-303 du 4 mars 2002", "HAS – Isolement et contention en psychiatrie (2017)", "Loi n° 2011-803 du 5 juillet 2011"]
  },
  {
    id: "fx_ue_1_3_plus_responsabilite_pratique", ueId: "1.3", type: "cours",
    titre: "Responsabilité infirmière : décret de compétences, transmissions et identitovigilance",
    resume: "Là où la responsabilité de l'IDE se joue réellement : actes autorisés, traçabilité et sécurité du patient.",
    tags: ["responsabilité", "décret de compétences", "transmissions", "identitovigilance"],
    html: `
      <p>La responsabilité infirmière ne se limite pas aux trois grandes catégories (pénale, civile/administrative, disciplinaire). Au quotidien, elle se concrétise dans le respect du <strong>cadre d'exercice</strong> et de la <strong>traçabilité</strong>.</p>
      <h3>Le décret de compétences (art. R.4311-1 et suivants CSP)</h3>
      <ul>
        <li><strong>Rôle propre</strong> : actes que l'IDE décide et réalise sous sa seule responsabilité (hygiène, prévention, surveillance, confort, éducation).</li>
        <li><strong>Rôle sur prescription</strong> : actes réalisés sur prescription médicale (injections, perfusions, etc.).</li>
        <li>L'IDE doit <strong>vérifier la prescription</strong> (datée, signée, lisible) et a le <strong>devoir de ne pas appliquer</strong> une prescription manifestement erronée ou dangereuse : il alerte le prescripteur.</li>
      </ul>
      <div class="callout"><div class="callout-t">Glissement de tâches = faute</div>Réaliser un acte hors de son champ de compétences, ou déléguer à un AS un acte relevant de l'IDE, engage la responsabilité. L'argument « on a toujours fait comme ça » n'a aucune valeur juridique.</div>
      <h3>Transmissions : « ce qui n'est pas écrit n'est pas fait »</h3>
      <ul>
        <li>Les transmissions doivent être <strong>datées, horodatées, signées, objectives</strong> et conservées (valeur médico-légale).</li>
        <li>Les <strong>transmissions ciblées</strong> structurent l'information : <strong>D.A.R.</strong> = <strong>D</strong>onnées, <strong>A</strong>ctions, <strong>R</strong>ésultats.</li>
        <li>Le dossier de soins est un <strong>élément de preuve</strong> en cas de contentieux.</li>
      </ul>
      <h3>Sécurité du patient : la règle des contrôles</h3>
      <div class="mnemo"><div class="mnemo-t">Les « 5 B » de l'administration médicamenteuse</div>Bon <strong>P</strong>atient, bon <strong>M</strong>édicament, bonne <strong>D</strong>ose, bonne <strong>V</strong>oie, bon <strong>M</strong>oment — soit « le <strong>Bon</strong> Patient reçoit le <strong>Bon</strong> Médicament à la <strong>Bonne</strong> Dose par la <strong>Bonne</strong> Voie au <strong>Bon</strong> Moment ».</div>
      <table class="tbl">
        <tr><th>Dispositif</th><th>Objectif</th></tr>
        <tr><td><span class="key" data-term="identitovigilance">Identitovigilance</span></td><td>Vérifier l'identité (nom de naissance, prénom, date de naissance) avant tout acte à risque</td></tr>
        <tr><td>Déclaration d'<span class="key" data-term="événement indésirable">événement indésirable</span> (EI / EIG)</td><td>Culture positive de l'erreur, analyse des causes (CREX, RMM), non punitive</td></tr>
        <tr><td>Check-list bloc / « time-out »</td><td>Prévenir les erreurs de côté, de patient, de procédure</td></tr>
      </table>
      <div class="callout"><div class="callout-t">Étudiant en stage</div>L'ESI agit sous la responsabilité de l'IDE et de l'encadrement. Il ne réalise que des actes <strong>autorisés, encadrés et adaptés à son niveau de formation</strong>. Il a le droit (et le devoir) de refuser un acte qu'il ne maîtrise pas ou qui dépasse ses acquis.</div>
    `,
    refs: ["Art. R.4311-1 à R.4311-15 CSP (décret de compétences)", "HAS – Sécurité du patient et identitovigilance", "Code de déontologie infirmier (CSP)"]
  }
];

export const qcm = [
  { ueId: "1.3", q: "Le secret professionnel persiste-t-il après le décès du patient ?", options: ["Non, il disparaît au décès", "Oui, mais les ayants droit peuvent accéder à certaines informations dans des buts limités", "Oui, et personne ne peut jamais y accéder", "Seulement pendant 3 mois"], correct: 1,
    explication: "Le secret persiste après la mort. Les ayants droit, le concubin ou le partenaire de PACS peuvent accéder à des informations dans 3 buts précis : connaître les causes de la mort, défendre la mémoire du défunt, faire valoir leurs droits, sauf opposition du défunt de son vivant.", ref: "Art. L.1110-4 CSP", diff: 2 },
  { ueId: "1.3", q: "Que signifie la formule « le secret partagé » entre soignants ?", options: ["Tout le personnel de l'hôpital peut tout savoir", "On partage uniquement ce qui est strictement nécessaire à la continuité des soins, au sein de l'équipe de soins", "Le secret n'existe plus dès qu'on est plusieurs", "Seul le cadre détient le secret"], correct: 1,
    explication: "Le partage d'informations est limité à l'équipe de soins prenant en charge le patient et au strictement nécessaire à la coordination et à la continuité des soins. Le partage hors équipe requiert en principe le consentement du patient.", ref: "Art. L.1110-4 CSP", diff: 1 },
  { ueId: "1.3", q: "Parmi ces situations, laquelle constitue une DÉROGATION légale au secret professionnel ?", options: ["La curiosité d'un collègue d'un autre service", "La déclaration d'une maladie à déclaration obligatoire (MDO) à l'ARS", "Une demande d'un journaliste", "Une conversation à la cafétéria"], correct: 1,
    explication: "Les maladies à déclaration obligatoire (ex. tuberculose, méningite à méningocoque, TIAC) doivent être signalées à l'ARS : c'est une dérogation légale prévue par la loi pour des motifs de santé publique.", ref: "Art. L.3113-1 CSP", diff: 2 },
  { ueId: "1.3", q: "Une infirmière confirme par téléphone à un inconnu qu'un patient est bien hospitalisé dans son service. Que peut-on dire ?", options: ["C'est normal, l'information n'est pas confidentielle", "C'est une violation du secret : la présence d'un patient ne se confirme pas sans son accord", "C'est permis si l'appelant dit être de la famille", "C'est permis car ce n'est pas un diagnostic"], correct: 1,
    explication: "La seule présence (ou hospitalisation) d'une personne dans un établissement est une information couverte par le secret. On ne la confirme pas à un tiers non autorisé par le patient.", ref: "Art. L.1110-4 CSP", diff: 2 },
  { ueId: "1.3", q: "Quelle commission est chargée de veiller au respect des droits des usagers et d'examiner leurs plaintes et réclamations dans l'établissement ?", options: ["Le CLIN", "La CDU (Commission des usagers)", "Le CHSCT", "La CME"], correct: 1,
    explication: "La Commission des usagers (CDU, ex-CRUQPC) veille au respect des droits des usagers, facilite leurs démarches et examine les plaintes et réclamations qui ne mettent pas en cause l'organisation des soins.", ref: "Loi du 4 mars 2002 ; loi de modernisation de 2016", diff: 2 },
  { ueId: "1.3", q: "La contention physique d'un patient relève :", options: ["De la libre initiative de l'infirmier", "D'une prescription médicale, en dernier recours, limitée dans le temps et tracée", "D'une décision de la famille", "D'une décision du cadre de santé"], correct: 1,
    explication: "La contention est une mesure de dernier recours, prescrite médicalement, limitée dans le temps, réévaluée, surveillée et tracée. Elle porte atteinte à la liberté d'aller et venir et expose à des risques (escarres, thrombose, fausse route).", ref: "HAS – Isolement et contention (2017)", diff: 1 },
  { ueId: "1.3", q: "En psychiatrie, quel juge contrôle systématiquement les mesures de soins sans consentement ?", options: ["Le juge des enfants", "Le juge des libertés et de la détention (JLD)", "Le procureur", "Le juge d'instruction"], correct: 1,
    explication: "Depuis la loi du 5 juillet 2011, le juge des libertés et de la détention (JLD) contrôle la nécessité des soins sans consentement (notamment dans les 12 jours puis périodiquement).", ref: "Loi n° 2011-803 du 5 juillet 2011", diff: 3 },
  { ueId: "1.3", q: "Que distingue le « rôle propre » du « rôle sur prescription » de l'infirmier ?", options: ["Le rôle propre est décidé et assumé par l'IDE seul ; le rôle sur prescription découle d'une prescription médicale", "Le rôle propre concerne uniquement les médicaments", "Il n'y a aucune différence", "Le rôle sur prescription est facultatif"], correct: 0,
    explication: "Le rôle propre regroupe les actes que l'IDE initie et réalise sous sa seule responsabilité (hygiène, surveillance, prévention, confort, éducation). Le rôle sur prescription regroupe les actes réalisés sur prescription médicale.", ref: "Art. R.4311-3 et R.4311-7 CSP", diff: 1 },
  { ueId: "1.3", q: "Face à une prescription médicale manifestement erronée ou dangereuse, l'infirmier doit :", options: ["L'appliquer car il doit obéir au médecin", "Ne pas l'appliquer telle quelle et alerter le prescripteur", "La modifier seul selon son jugement", "Attendre le lendemain"], correct: 1,
    explication: "L'IDE a un devoir de vigilance : il ne doit pas appliquer une prescription manifestement erronée ou dangereuse. Il interpelle le prescripteur et trace sa démarche. Appliquer aveuglément n'exonère pas de responsabilité.", ref: "Code de déontologie infirmier (CSP)", diff: 2 },
  { ueId: "1.3", q: "Réaliser un acte relevant de la compétence médicale, ou faire réaliser par un aide-soignant un acte relevant de l'IDE, constitue :", options: ["Une pratique tolérée par habitude", "Un glissement de tâches engageant la responsabilité", "Une délégation toujours autorisée", "Une initiative valorisante"], correct: 1,
    explication: "Sortir de son champ de compétences ou déléguer un acte à un professionnel non habilité est un glissement de tâches : c'est une faute pouvant engager la responsabilité, quelle que soit l'habitude du service.", ref: "Art. R.4311-1 et suivants CSP", diff: 1 },
  { ueId: "1.3", q: "Pourquoi dit-on en soins que « ce qui n'est pas écrit n'est pas fait » ?", options: ["Pour gagner du temps", "Parce que le dossier de soins a une valeur médico-légale et constitue un élément de preuve", "C'est une simple coutume sans importance", "Pour remplir des statistiques"], correct: 1,
    explication: "Les transmissions datées, horodatées, signées et objectives ont une valeur médico-légale : le dossier de soins est un élément de preuve en cas de contentieux. Une action non tracée est difficilement opposable.", ref: "Code de déontologie infirmier (CSP)", diff: 1 },
  { ueId: "1.3", q: "Dans les transmissions ciblées, que recouvre l'acronyme D.A.R. ?", options: ["Diagnostic, Acte, Recommandation", "Données, Actions, Résultats", "Durée, Antécédents, Risques", "Démarche, Analyse, Rapport"], correct: 1,
    explication: "Les transmissions ciblées structurent l'information autour d'une cible avec D (Données), A (Actions menées) et R (Résultats observés), pour une traçabilité claire et exploitable.", ref: "Méthode des transmissions ciblées", diff: 2 },
  { ueId: "1.3", q: "L'identitovigilance consiste à :", options: ["Surveiller les caméras du service", "Vérifier rigoureusement l'identité du patient (nom de naissance, prénom, date de naissance) avant un acte à risque", "Contrôler les badges du personnel", "Identifier les visiteurs"], correct: 1,
    explication: "L'identitovigilance vise à prévenir les erreurs d'identité (mauvais patient) en vérifiant systématiquement l'identité avant les actes à risque : administration de médicaments, prélèvements, transfusion, intervention.", ref: "HAS – Identitovigilance", diff: 1 },
  { ueId: "1.3", q: "La déclaration d'un événement indésirable grave (EIG) repose sur une culture :", options: ["Punitive, pour sanctionner le fautif", "Positive et non punitive de l'erreur, visant l'analyse des causes et l'amélioration", "De dissimulation", "Du silence"], correct: 1,
    explication: "La sécurité du patient repose sur une culture positive de l'erreur : déclarer pour analyser les causes (CREX, RMM) et améliorer les pratiques, sans logique de sanction systématique, afin que les professionnels osent signaler.", ref: "HAS – Sécurité du patient", diff: 2 },
  { ueId: "1.3", q: "Les « 5 B » de la sécurisation de l'administration médicamenteuse sont :", options: ["Bon patient, bon médicament, bonne dose, bonne voie, bon moment", "Bon lit, bon dossier, bon horaire, bon repas, bon visiteur", "Bon médecin, bon IDE, bon AS, bon cadre, bon brancardier", "Bon prix, bon stock, bon fournisseur, bon délai, bon flacon"], correct: 0,
    explication: "La règle des 5 B sécurise l'administration : le Bon patient reçoit le Bon médicament à la Bonne dose, par la Bonne voie, au Bon moment. Certains ajoutent un 6e B (Bonne traçabilité).", ref: "HAS – Sécurisation du circuit du médicament", diff: 1 },
  { ueId: "1.3", q: "Un étudiant en soins infirmiers (ESI) en stage réalise les actes :", options: ["Qu'il décide seul comme un professionnel diplômé", "Autorisés, encadrés et adaptés à son niveau de formation, sous la responsabilité de l'IDE", "Que la famille du patient lui demande", "Sans aucune limite dès la 1ʳᵉ année"], correct: 1,
    explication: "L'ESI agit sous la responsabilité de l'IDE et de l'encadrement. Il ne réalise que des actes autorisés, encadrés et adaptés à ses acquis ; il peut et doit refuser un acte qu'il ne maîtrise pas.", ref: "Référentiel de formation 2009 ; CSP", diff: 1 },
  { ueId: "1.3", q: "Quel document, remis à l'admission, contient notamment la charte de la personne hospitalisée ?", options: ["Le dossier médical", "Le livret d'accueil", "La feuille de température", "Le compte rendu d'hospitalisation"], correct: 1,
    explication: "Le livret d'accueil, remis à l'entrée, informe le patient sur l'établissement et inclut la charte de la personne hospitalisée, rappelant ses droits.", ref: "Charte de la personne hospitalisée (circulaire 2006)", diff: 2 },
  { ueId: "1.3", q: "Le signalement de sévices ou privations sur un mineur par un soignant est :", options: ["Interdit au nom du secret", "Une dérogation légale au secret professionnel", "Réservé à la police", "Facultatif et déconseillé"], correct: 1,
    explication: "L'article 226-14 du Code pénal autorise (et pour le mineur, impose une protection) le signalement des sévices ou privations infligés à un mineur ou à une personne vulnérable : c'est une dérogation légale au secret.", ref: "Art. 226-14 Code pénal", diff: 2 },
  { ueId: "1.3", q: "Publier sur un réseau social la situation clinique d'un patient, même en masquant son nom, est :", options: ["Autorisé si le visage n'apparaît pas", "Une violation possible du secret professionnel et de la dignité", "Recommandé à des fins pédagogiques", "Sans risque juridique"], correct: 1,
    explication: "Toute diffusion permettant d'identifier ou de porter atteinte au patient, même partiellement anonymisée, viole le secret et la dignité. Les réseaux sociaux sont un piège fréquent pour les soignants et les étudiants.", ref: "Art. L.1110-4 CSP ; code de déontologie", diff: 1 },
  { ueId: "1.3", q: "Avant la contention, la HAS impose en priorité :", options: ["De prévenir la famille", "La recherche d'alternatives à la contention", "De doubler la sédation médicamenteuse", "De transférer le patient"], correct: 1,
    explication: "La contention étant une mesure de dernier recours, la recherche d'alternatives (apaisement, présence, aménagement de l'environnement, traitement de la cause de l'agitation) doit précéder toute mesure restrictive.", ref: "HAS – Isolement et contention (2017)", diff: 2 },
  { ueId: "1.3", q: "En cas de soins sans consentement en psychiatrie, les droits fondamentaux du patient :", options: ["Sont totalement suspendus", "Sont maintenus (information, dignité, droit de communiquer, voies de recours)", "Dépendent uniquement du médecin", "N'existent plus"], correct: 1,
    explication: "Même sans consentement aux soins, le patient conserve ses droits fondamentaux : être informé, voir sa dignité respectée, communiquer, exercer des voies de recours. Les soins contraints sont strictement encadrés par la loi.", ref: "Loi n° 2011-803 du 5 juillet 2011", diff: 2 },
  { ueId: "1.3", q: "Le devoir de vérification de la prescription par l'IDE porte notamment sur :", options: ["La couleur de l'encre", "Le caractère daté, signé, lisible et non manifestement dangereux de la prescription", "L'humeur du prescripteur", "Le grade du médecin"], correct: 1,
    explication: "L'IDE vérifie que la prescription est datée, signée, lisible et cohérente, et n'applique pas une prescription manifestement erronée ou dangereuse sans interpeller le prescripteur. C'est un acte de sécurité engageant sa responsabilité.", ref: "Art. R.4312 et R.4311 CSP", diff: 2 }
];

export const flashcards = [
  { ueId: "1.3", recto: "Le secret professionnel disparaît-il au décès du patient ?", verso: "Non, il persiste. Les ayants droit/concubin/partenaire de PACS y accèdent dans 3 buts : connaître les causes de la mort, défendre la mémoire du défunt, faire valoir leurs droits (sauf opposition du défunt)." },
  { ueId: "1.3", recto: "Cite 3 dérogations légales au secret professionnel.", verso: "Signalement de sévices sur mineur/personne vulnérable, déclaration des maladies à déclaration obligatoire (MDO), information du préfet pour une personne dangereuse détenant une arme." },
  { ueId: "1.3", recto: "Peut-on confirmer par téléphone qu'un patient est hospitalisé ?", verso: "Non, sans l'accord du patient : la seule présence/hospitalisation est couverte par le secret professionnel." },
  { ueId: "1.3", recto: "Quel est le rôle de la CDU ?", verso: "La Commission des usagers veille au respect des droits des usagers, facilite leurs démarches et examine les plaintes et réclamations." },
  { ueId: "1.3", recto: "À quelles conditions la contention physique est-elle possible ?", verso: "En dernier recours, sur prescription médicale écrite et motivée, limitée dans le temps, réévaluée, surveillée et tracée, après recherche d'alternatives." },
  { ueId: "1.3", recto: "Quel juge contrôle les soins sans consentement en psychiatrie ?", verso: "Le juge des libertés et de la détention (JLD), notamment dans les 12 jours puis périodiquement (loi du 5 juillet 2011)." },
  { ueId: "1.3", recto: "Différence entre rôle propre et rôle sur prescription ?", verso: "Rôle propre : actes décidés et assumés par l'IDE seul (hygiène, surveillance, prévention, confort, éducation). Rôle sur prescription : actes réalisés sur prescription médicale." },
  { ueId: "1.3", recto: "Que doit faire l'IDE face à une prescription manifestement dangereuse ?", verso: "Ne pas l'appliquer telle quelle, alerter le prescripteur et tracer sa démarche. Obéir aveuglément n'exonère pas de responsabilité." },
  { ueId: "1.3", recto: "Qu'est-ce qu'un glissement de tâches ?", verso: "Réaliser un acte hors de son champ de compétences, ou déléguer un acte à un professionnel non habilité : c'est une faute engageant la responsabilité." },
  { ueId: "1.3", recto: "Que veut dire « ce qui n'est pas écrit n'est pas fait » ?", verso: "Le dossier de soins a une valeur médico-légale ; les transmissions datées, signées et objectives sont un élément de preuve en cas de contentieux." },
  { ueId: "1.3", recto: "Que recouvre l'acronyme D.A.R. des transmissions ciblées ?", verso: "Données, Actions, Résultats." },
  { ueId: "1.3", recto: "Que sont les « 5 B » de l'administration médicamenteuse ?", verso: "Bon patient, bon médicament, bonne dose, bonne voie, bon moment." },
  { ueId: "1.3", recto: "Définis l'identitovigilance.", verso: "Vérification rigoureuse de l'identité du patient (nom de naissance, prénom, date de naissance) avant tout acte à risque, pour éviter les erreurs de patient." },
  { ueId: "1.3", recto: "Sur quelle culture repose la déclaration des événements indésirables ?", verso: "Une culture positive et non punitive de l'erreur : déclarer pour analyser les causes (CREX, RMM) et améliorer les pratiques." },
  { ueId: "1.3", recto: "Quels actes un ESI peut-il réaliser en stage ?", verso: "Uniquement des actes autorisés, encadrés et adaptés à son niveau de formation, sous la responsabilité de l'IDE ; il peut refuser un acte non maîtrisé." }
];
