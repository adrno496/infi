// UE 1.3 — Législation, éthique, déontologie. Fiches issues des cours de l'étudiante.
export const fiches = [
  {
    id: "fco_1_3_morale_ethique_deonto_droit", ueId: "1.3", type: "cours",
    titre: "Morale, valeurs, norme, éthique, déontologie et droit : les concepts de base",
    resume: "Distinguer les notions fondamentales qui structurent toute l'UE 1.3.",
    tags: ["d'après tes cours", "concepts de base"],
    html: `
      <p>Le cours du 07/09 pose les définitions qui reviennent dans toute l'UE.</p>
      <h3>Les grandes notions</h3>
      <ul>
        <li><span class="key" data-term="morale">Morale</span> : ensemble de valeurs, références, normes et règles permettant de distinguer le bien du mal pour permettre « le vivre ensemble ». Elle est <strong>tributaire des époques, cultures, religions et milieux sociaux</strong>.</li>
        <li><span class="key" data-term="valeur">Valeur</span> : ce qui est posé comme vrai, beau, bien (point de vue personnel ou critères de la société). Idée qui détermine notre action ; elle vient de notre bagage socio-culturel, éducatif et de nos expériences.</li>
        <li><span class="key" data-term="norme">Norme</span> : règle de conduite ou modèle de comportement prescrit par la société, dont la non-observance entraîne des sanctions. « Toute norme est relative et subjective. »</li>
        <li><span class="key" data-term="éthique">Éthique</span> : discipline philosophique qui réfléchit aux finalités et valeurs de l'existence ; <strong>questionnement</strong> sur le sens des règles admises. C'est un raisonnement sur ce qu'il faut faire et ne pas faire.</li>
        <li><span class="key" data-term="déontologie">Déontologie</span> : ensemble des devoirs qu'impose à des professionnels l'exercice de leur métier ; règles qui régissent la conduite et les rapports avec les patients.</li>
        <li><span class="key" data-term="droit">Droit</span> : ensemble des règles générales et impersonnelles qui régissent les rapports sociaux, susceptibles d'une exécution contrainte par la puissance publique (l'État).</li>
      </ul>
      <div class="callout"><div class="callout-t">À retenir</div>La <strong>morale est déductive</strong> (imposée de l'extérieur, connotation religieuse, porte sur le bien/le mal) ; l'<strong>éthique est un raisonnement concret</strong> (plutôt laïque, autocontrôle, fait réfléchir sur nos responsabilités).</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« <strong>M-V-N-É-D-D</strong> » : Morale → Valeur → Norme → Éthique → Déontologie → Droit, du plus personnel au plus contraignant.</div>
    `,
    refs: ["D'après tes cours (UE 1.3)"]
  },
  {
    id: "fco_1_3_droits_patient_4mars2002", ueId: "1.3", type: "cours",
    titre: "Les droits des patients et la loi du 4 mars 2002 (loi Kouchner)",
    resume: "Évolution historique des droits du patient et trois points clés de la loi du 4 mars 2002.",
    tags: ["d'après tes cours", "droits du patient"],
    html: `
      <p>« De la Grèce antique aux années 2000 : <em>le médecin sait quand le patient ne sait pas</em> » → évolution vers le patient acteur.</p>
      <h3>Repères historiques</h3>
      <ul>
        <li><strong>1970 / 1991</strong> : réformes hospitalières → libre choix du praticien et de l'établissement (principe fondamental).</li>
        <li><strong>1995</strong> : charte du patient hospitalisé (« une personne avec des droits et des devoirs »).</li>
        <li><strong>2002</strong> : <span class="key" data-term="loi du 4 mars 2002">loi n°2002-303 du 4 mars 2002</span> relative aux droits des malades et à la qualité du système de santé (loi Kouchner). Son titre II s'intitule <strong>« Démocratie sanitaire »</strong>.</li>
      </ul>
      <h3>Les 3 points clés de la loi du 4 mars 2002</h3>
      <ul>
        <li>Le <strong>droit à l'information</strong> sur son état de santé (accessible et loyale ; preuve à la charge du professionnel).</li>
        <li>La <strong>personne de confiance</strong>.</li>
        <li>L'<strong>accès au dossier médical</strong>.</li>
      </ul>
      <p>Elle renforce aussi des droits proches des droits de l'Homme : droit à la <strong>dignité</strong>, au <strong>respect de la vie privée</strong>, à la <strong>prise en charge de la douleur</strong>.</p>
      <div class="callout"><div class="callout-t">À retenir</div>Les droits des patients reposent sur deux textes majeurs : la <strong>loi du 4 mars 2002</strong>, complétée par la <strong>loi du 22 avril 2005 (Léonetti)</strong> sur les droits des malades en fin de vie.</div>
    `,
    refs: ["D'après tes cours (UE 1.3)"]
  },
  {
    id: "fco_1_3_consentement_assentiment", ueId: "1.3", type: "cours",
    titre: "Consentement, refus de soin et assentiment",
    resume: "Les 4 critères d'un consentement valide, le refus de soin et la différence avec l'assentiment.",
    tags: ["d'après tes cours", "consentement"],
    html: `
      <p>Étymologie : <em>cum</em> (avec) + <em>sentir</em> = « être du même sentiment ». « Consentir, c'est ne pas se résigner. » On ne peut pas consentir à la place de l'autre.</p>
      <h3>Les 4 critères d'un consentement valide</h3>
      <ul>
        <li><strong>Libre</strong> : sans contrainte ni pression ; le patient peut refuser sans justifier.</li>
        <li><strong>Éclairé</strong> : fait suite à une information médicale complète (options, risques fréquents ou graves et prévisibles, conséquences d'un refus). Plus besoin d'informer sur les risques exceptionnels.</li>
        <li><strong>Sujet compétent</strong> : la personne comprend la situation et les enjeux.</li>
        <li><strong>Révocable</strong> à tout moment.</li>
      </ul>
      <h3>Du paternalisme à l'autonomie</h3>
      <ul>
        <li><strong>Modèle paternaliste</strong> : le médecin décide, le patient subit.</li>
        <li><strong>Modèle autonomiste</strong> : la décision du patient est <strong>prévalente</strong> ; « le consentement du patient prime sur la décision médicale ».</li>
      </ul>
      <h3>L'assentiment</h3>
      <p><span class="key" data-term="assentiment">Assentiment</span> : manifestation d'indices, perceptions que l'individu laisse entrevoir et qui permettent de dire qu'il adhère à une idée. Il est <strong>plus physique</strong> (éprouver, ressentir) là où le consentement est <strong>plus intellectuel</strong> (penser, juger). Notion clé pour les patients atteints de troubles cognitifs.</p>
      <div class="callout"><div class="callout-t">À retenir</div>« Aucun acte médical ni aucun traitement ne peut être pratiqué sans le consentement libre et éclairé de la personne et ce consentement peut être retiré à tout moment » (art. L.1111-4 CSP).</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« <strong>L-É-C-R</strong> » : <em>Libre, Éclairé, Compétent, Révocable</em> = les 4 critères du consentement.</div>
    `,
    refs: ["D'après tes cours (UE 1.3)"]
  },
  {
    id: "fco_1_3_personne_confiance_dossier", ueId: "1.3", type: "cours",
    titre: "Personne de confiance et accès au dossier médical",
    resume: "Rôle et limites de la personne de confiance ; modalités d'accès au dossier médical.",
    tags: ["d'après tes cours", "personne de confiance"],
    html: `
      <h3>La personne de confiance (art. L.1111-6 CSP)</h3>
      <ul>
        <li>Un parent, un proche ou le médecin traitant ; désignation <strong>par écrit, révocable à tout moment</strong>, proposée à chaque hospitalisation.</li>
        <li>Consultée si le patient ne peut exprimer sa volonté ; elle est <strong>porte-parole</strong> du patient (elle rapporte ses souhaits, n'exprime pas les siens).</li>
        <li>Peut accompagner aux consultations, prendre connaissance d'éléments du dossier <strong>en présence du patient</strong>, mais ne remplace pas le patient.</li>
        <li>Soumise à une <strong>obligation de confidentialité</strong>.</li>
      </ul>
      <div class="callout"><div class="callout-t">À retenir</div>Ne pas confondre <strong>personne de confiance</strong> et <strong>personne à prévenir</strong> (hospitalisation, décès) : ce n'est pas forcément la même.</div>
      <h3>L'accès au dossier médical (art. L.1111-7 CSP)</h3>
      <ul>
        <li>Demande <strong>écrite</strong> adressée à l'établissement, à tout moment ; mode de consultation choisi par le demandeur (sur place ou copies, frais à sa charge).</li>
        <li>Accès dans les <strong>8 jours</strong> ; délai porté à <strong>2 mois</strong> si les informations datent de plus de 5 ans.</li>
        <li>Accès direct possible depuis 2002 (l'accès indirect, via un médecin, reste possible).</li>
      </ul>
      <p>Documents communicables : résultats d'examens, comptes rendus, prescriptions, feuilles de surveillance, correspondances entre professionnels. Non communicables : notes personnelles de travail et informations recueillies auprès de tiers.</p>
    `,
    refs: ["D'après tes cours (UE 1.3)"]
  },
  {
    id: "fco_1_3_secret_confidentialite_discretion", ueId: "1.3", type: "cours",
    titre: "Secret professionnel, confidentialité et discrétion professionnelle",
    resume: "Trois obligations à ne pas confondre, leurs textes, sanctions et dérogations.",
    tags: ["d'après tes cours", "secret professionnel"],
    html: `
      <h3>Le secret professionnel</h3>
      <p>Couvre <strong>tout ce qui a été écrit, dit, vu, entendu ou compris</strong> sur le patient. Texte de référence : <strong>art. L.1110-4 CSP</strong> (loi du 4 mars 2002) et <strong>art. R.4312-4 CSP</strong> pour l'infirmier et l'étudiant.</p>
      <ul>
        <li><strong>Art. 226-13 du Code pénal</strong> : la révélation d'une information à caractère secret est punie d'<strong>1 an d'emprisonnement et 15 000 € d'amende</strong>.</li>
        <li>« Révélation » = acte volontaire. « Dépositaire » = la personne n'a aucun droit sur l'information sauf de la protéger.</li>
        <li>Tenu au secret <strong>par état</strong> (culte), <strong>par profession</strong> (médical/paramédical), <strong>par fonction ou mission</strong> (tout agent hospitalier, bénévoles).</li>
      </ul>
      <h3>Le secret partagé</h3>
      <p>Deux ou plusieurs professionnels peuvent échanger des informations, <strong>sauf opposition de la personne</strong>, pour assurer la continuité des soins. L'équipe de soins est réputée dépositaire dans son ensemble.</p>
      <h3>Les dérogations (art. 226-14 CP)</h3>
      <ul>
        <li>Sévices ou privations sur un mineur de moins de 15 ans ou une personne hors d'état de se protéger.</li>
        <li>Violences sexuelles portées au Procureur <strong>avec l'accord de la victime</strong>.</li>
        <li>Déclaration de certaines maladies (anonymat respecté, levé pour les IST), certificats d'hospitalisation, accidents/maladies professionnelles, naissances.</li>
      </ul>
      <h3>Confidentialité et discrétion</h3>
      <ul>
        <li><strong>Confidentialité</strong> : plus vaste que le secret ; concerne l'organisation des soins et des unités pour assurer le secret.</li>
        <li><strong>Discrétion professionnelle</strong> : obligation <strong>statutaire</strong> (public) ou <strong>contractuelle</strong> (privé) de ne rien divulguer sur le fonctionnement du service ; faute <strong>disciplinaire</strong>, non pénale.</li>
      </ul>
      <div class="callout"><div class="callout-t">À retenir</div>Secret pro = obligation de <strong>droit pénal</strong> (devant les tribunaux). Discrétion = obligation <strong>statutaire</strong> (devant l'employeur).</div>
    `,
    refs: ["D'après tes cours (UE 1.3)"]
  },
  {
    id: "fco_1_3_responsabilites", ueId: "1.3", type: "cours",
    titre: "Les responsabilités dans l'exercice infirmier",
    resume: "Les quatre types de responsabilité : civile/administrative, pénale et disciplinaire.",
    tags: ["d'après tes cours", "responsabilité"],
    html: `
      <p>« Être infirmier, c'est prendre ses responsabilités. » Responsabilité = obligation de répondre de ses actes et de ceux confiés aux auxiliaires et étudiants encadrés.</p>
      <h3>Les types de responsabilité</h3>
      <table class="tbl">
        <tr><th>Type</th><th>But</th><th>Sanction</th></tr>
        <tr><td><strong>Civile</strong> (privé) / <strong>Administrative</strong> (public)</td><td>Réparer le dommage causé à autrui</td><td>Dommages et intérêts</td></tr>
        <tr><td><strong>Pénale</strong></td><td>Sanctionner la faute au nom de la société</td><td>Peine (casier, fichier)</td></tr>
        <tr><td><strong>Disciplinaire</strong></td><td>Encadrer le comportement professionnel</td><td>Du blâme/avertissement au licenciement/révocation</td></tr>
      </table>
      <h3>Points clés</h3>
      <ul>
        <li>La responsabilité civile du soignant relève d'une <strong>obligation de moyens</strong> (et non de résultat) : on ne reproche pas de ne pas avoir guéri, mais de ne pas avoir tout mis en œuvre.</li>
        <li><strong>Responsabilité civile (art. 1240 C.C.)</strong> : 3 éléments cumulatifs = <strong>faute + dommage + lien de causalité</strong>.</li>
        <li>Ex. de délits pénaux : non-assistance à personne en danger, violation du secret professionnel, homicide involontaire.</li>
        <li>Fonction publique : blâme/avertissement, puis <strong>Commission Administrative Paritaire</strong> ; libéral : conseil régional des assurances sociales.</li>
      </ul>
      <div class="callout"><div class="callout-t">À retenir</div>L'<strong>Ordre National des Infirmiers (ONI)</strong> est créé en <strong>2006</strong> ; le <strong>Code de déontologie des infirmiers</strong> est institué par le <strong>décret n°2016-1605 du 25 novembre 2016</strong>.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« <strong>CA-PE-DI</strong> » : <em>Civile/Administrative, Pénale, Disciplinaire</em> = les responsabilités. Une faute peut engager plusieurs en même temps (cumul possible).</div>
    `,
    refs: ["D'après tes cours (UE 1.3)"]
  },
  {
    id: "fco_1_3_hospitalisation_psy", ueId: "1.3", type: "cours",
    titre: "Les modalités d'hospitalisation en psychiatrie (loi du 5 juillet 2011)",
    resume: "Soins libres et soins sans consentement : SPDT, SPDTU, SPPI, SPDRE et suivi.",
    tags: ["d'après tes cours", "soins psychiatriques"],
    html: `
      <p>Cadre légal : loi du <strong>27 juin 1990</strong>, révisée par la loi du <strong>5 juillet 2011</strong>. Depuis 2011, ce n'est plus l'hospitalisation qui est imposée mais <strong>les soins</strong>.</p>
      <h3>Les soins psychiatriques libres (SPL)</h3>
      <p>Demeurent la règle (environ 70 %). Nécessitent le consentement libre et éclairé du patient.</p>
      <h3>Les soins sans consentement</h3>
      <table class="tbl">
        <tr><th>Modalité</th><th>Indication</th><th>Certificats / tiers</th></tr>
        <tr><td><strong>SPDT</strong> (demande d'un tiers)</td><td>Troubles imposant des soins immédiats, consentement impossible</td><td>2 certificats (1 médecin extérieur) + 1 demande de tiers manuscrite</td></tr>
        <tr><td><strong>SPDTU</strong> (tiers en urgence)</td><td>Mêmes indications, urgence</td><td>1 certificat + 1 demande de tiers</td></tr>
        <tr><td><strong>SPPI</strong> (péril imminent)</td><td>Impossibilité d'obtenir un tiers, péril imminent</td><td>1 certificat, <strong>pas</strong> de tiers</td></tr>
        <tr><td><strong>SPDRE</strong> (décision du représentant de l'État)</td><td>Atteinte grave à l'ordre public / sûreté des personnes</td><td>Arrêté du préfet (ou maire) + 1 certificat</td></tr>
      </table>
      <h3>Alternative et suivi</h3>
      <ul>
        <li><strong>Programme de Soins Psychiatriques (PSP)</strong> : maintien de la contrainte mais en ambulatoire, alternative à l'hospitalisation temps plein.</li>
        <li>Certificats obligatoires : <strong>24 h</strong>, <strong>72 h</strong>, avis motivé entre le 6e et le 8e jour, certificat mensuel.</li>
        <li><strong>Juge des Libertés et de la Détention (JLD)</strong> : patient convoqué en audience au <strong>12e jour</strong> (d'où le film « 12 jours » de R. Depardon).</li>
      </ul>
      <div class="callout"><div class="callout-t">À retenir</div>Levée de la contrainte par certificat du psychiatre référent ; en cas de <strong>SPDRE</strong>, la levée est soumise à l'<strong>accord du préfet</strong>.</div>
    `,
    refs: ["D'après tes cours (UE 1.3)"]
  },
  {
    id: "fco_1_3_protection_majeurs", ueId: "1.3", type: "cours",
    titre: "La protection juridique des majeurs",
    resume: "Tutelle, curatelle, sauvegarde de justice et les principes de la loi de 2007.",
    tags: ["d'après tes cours", "protection des majeurs"],
    html: `
      <p>La loi du <strong>3 janvier 1968</strong> décrit 3 mesures de protection des majeurs souffrant d'une altération de leurs facultés mentales ou corporelles, réformées par la loi du <strong>5 mars 2007</strong> (en vigueur au 1er janvier 2009) puis la loi du 23 mars 2019.</p>
      <h3>Les 3 mesures</h3>
      <ul>
        <li><span class="key" data-term="tutelle">Tutelle</span> : représentation continue dans les actes de la vie civile ; altération <strong>grave</strong> ; régime le plus lourd. Le tuteur décide de tout (aidé du conseil de famille).</li>
        <li><span class="key" data-term="curatelle">Curatelle</span> : <strong>assiste</strong> le majeur (incapacité partielle) ; pour ceux qui doivent être conseillés ou contrôlés.</li>
        <li><span class="key" data-term="sauvegarde de justice">Sauvegarde de justice</span> : mesure <strong>temporaire</strong> ; le majeur conserve ses droits et n'est pas frappé d'incapacité.</li>
      </ul>
      <h3>Les 3 principes fondamentaux (loi 2007)</h3>
      <ul>
        <li><strong>Nécessité</strong> : une mesure justifiée par l'état de la personne.</li>
        <li><strong>Subsidiarité</strong> : recourir à la mesure la moins contraignante en priorité.</li>
        <li><strong>Proportionnalité</strong> : adaptée au degré d'altération.</li>
      </ul>
      <div class="callout"><div class="callout-t">À retenir</div>Contexte : vieillissement de la population → hausse des mesures de protection ; la loi de 1968 n'était plus adaptée.</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« <strong>N-S-P</strong> » : <em>Nécessité, Subsidiarité, Proportionnalité</em> = les 3 principes de la loi de 2007.</div>
    `,
    refs: ["D'après tes cours (UE 1.3)"]
  },
  {
    id: "fco_1_3_demarche_ethique", ueId: "1.3", type: "cours",
    titre: "L'éthique : principes, démarche et dilemme",
    resume: "Les 4 principes éthiques, les approches de Weber et les étapes de la démarche éthique.",
    tags: ["d'après tes cours", "éthique"],
    html: `
      <p>L'éthique est un <strong>processus dynamique d'interrogation</strong>, une aide à la décision — ni procédure figée, ni solution définitive. « C'est au moment du <em>je ne sais pas quelle est la bonne règle</em> que la question éthique se pose » (J. Derrida).</p>
      <h3>Les 4 principes éthiques</h3>
      <ul>
        <li><strong>Bienfaisance</strong> : prodiguer sollicitude et soutien ; viser le bien tel que le patient se le représente.</li>
        <li><strong>Non-malfaisance</strong> : « primum non nocere » — éviter les souffrances inutiles.</li>
        <li><strong>Autonomie</strong> : s'assurer que le patient a eu son mot à dire, mobiliser ses capacités cognitives et narratives.</li>
        <li><strong>Justice</strong> : impartialité, « à chacun selon ses besoins » ; être juste = être équitable.</li>
      </ul>
      <p>Tous les principes n'ont pas vocation à être respectés en même temps à la même hauteur : une décision peut être acceptable si l'un est mis en défaut mais <strong>compensé</strong> par la force des trois autres.</p>
      <h3>Les 2 approches de Max Weber</h3>
      <table class="tbl">
        <tr><th>Éthique de conviction</th><th>Éthique de responsabilité</th></tr>
        <tr><td>Ne pas trahir une valeur, ne pas transgresser une norme</td><td>Responsable de toutes les conséquences de ses actes</td></tr>
        <tr><td>Agit au nom de principes / devoirs présupposés</td><td>Agit de manière singulière et raisonnée (approche conséquentialiste)</td></tr>
      </table>
      <h3>Les 5 étapes de la démarche éthique</h3>
      <ul>
        <li>Étude de la situation (tensions, normes, conflits, contexte).</li>
        <li>Exposé des différentes hypothèses et de leurs conséquences.</li>
        <li>Délibération honnête, équitable et libre.</li>
        <li><strong>Consensus</strong> : accord recherché.</li>
        <li><strong>Compromis</strong> : terrain d'entente minimal qui permet l'action.</li>
      </ul>
      <div class="callout"><div class="callout-t">À retenir</div>Les 4 formes d'éthique : <strong>méta-éthique</strong>, <strong>éthique normative</strong>, <strong>éthique appliquée</strong> et <strong>bioéthique</strong> (analyser le passage entre « ce qui est possible » et « ce qui doit être »).</div>
      <div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« <strong>BANJ</strong> » : <em>Bienfaisance, Autonomie, Non-malfaisance, Justice</em> = les 4 principes éthiques.</div>
    `,
    refs: ["D'après tes cours (UE 1.3)"]
  },
  {
    id: "fco_1_3_droits_homme", ueId: "1.3", type: "cours",
    titre: "Les droits de l'Homme : genèse et déclaration universelle de 1948",
    resume: "Origine, dimensions et générations des droits de l'Homme.",
    tags: ["d'après tes cours", "droits de l'Homme"],
    html: `
      <p>Les droits de l'Homme : concept selon lequel tout être humain possède des droits <strong>universels et inaliénables</strong>, quels que soient l'ethnie, la nationalité, la religion ou le régime politique.</p>
      <h3>Deux dimensions</h3>
      <ul>
        <li>L'être humain est <strong>vulnérable</strong> → il a besoin d'être protégé.</li>
        <li>Réciprocité : « je ne souhaite pas que l'on traite l'autre autrement qu'on nous traite ».</li>
      </ul>
      <h3>La Déclaration universelle des droits de l'Homme</h3>
      <p>Signée le <strong>10 décembre 1948</strong> par 56 pays, juste après la Seconde Guerre mondiale (40 à 50 millions de morts, technologie au service de l'extermination). Situation paradoxale : revendiquée par beaucoup, peu appliquée.</p>
      <h3>Genèse historique</h3>
      <ul>
        <li>Antiquité : <strong>Code Hammurabi</strong>, les Tables de la Loi (10 commandements).</li>
        <li>Angleterre : <strong>Magna Carta (1215)</strong>, Petition of Rights (1629), <strong>Habeas Corpus (1679)</strong>, Bill of Rights (1689) → régime parlementaire et séparation des pouvoirs.</li>
        <li>Déclaration d'indépendance américaine (<strong>4 juillet 1776</strong>) : les hommes naissent égaux, droits à la vie, à la liberté et à la recherche du bonheur.</li>
        <li>France : Déclaration du <strong>26 août 1789</strong>.</li>
      </ul>
      <div class="callout"><div class="callout-t">À retenir</div>Trois <strong>générations</strong> de droits : droits <strong>civiques et politiques</strong> ; droits <strong>économiques, sociaux et culturels</strong> ; droits de <strong>solidarité</strong>.</div>
    `,
    refs: ["D'après tes cours (UE 1.3)"]
  }
];

export const qcm = [
  { ueId: "1.3", q: "Quelle loi est dite « loi Kouchner » et fonde les droits des patients ?",
    options: ["Loi du 22 avril 2005", "Loi du 4 mars 2002", "Loi du 5 juillet 2011", "Loi du 3 janvier 1968"], correct: 1,
    explication: "La loi n°2002-303 du 4 mars 2002, relative aux droits des malades et à la qualité du système de santé, est la loi Kouchner. Son titre II s'intitule « Démocratie sanitaire ».", ref: "UE 1.3", diff: 1 },
  { ueId: "1.3", q: "Quels sont les 3 points clés de la loi du 4 mars 2002 ?",
    options: ["Tutelle, curatelle, sauvegarde", "Information, personne de confiance, accès au dossier médical", "Bienfaisance, autonomie, justice", "Consensus, compromis, délibération"], correct: 1,
    explication: "Droit à l'information sur son état de santé, la personne de confiance et l'accès au dossier médical sont les 3 points clés du cours.", ref: "UE 1.3", diff: 1 },
  { ueId: "1.3", q: "Combien de critères doit réunir un consentement valide ?",
    options: ["2", "3", "4", "5"], correct: 2,
    explication: "Le consentement doit être Libre, Éclairé, émaner d'un Sujet compétent et être Révocable (4 critères).", ref: "UE 1.3", diff: 1 },
  { ueId: "1.3", q: "Sur quel risque n'est-il plus nécessaire d'informer le patient depuis la loi de 2002 ?",
    options: ["Les risques fréquents", "Les risques graves prévisibles", "Les risques exceptionnels", "Les conséquences d'un refus"], correct: 2,
    explication: "Il faut informer sur les risques fréquents, ou graves et normalement prévisibles ; il n'est plus nécessaire d'informer sur les risques exceptionnels.", ref: "UE 1.3", diff: 2 },
  { ueId: "1.3", q: "Quel délai s'applique à l'accès au dossier médical après la demande ?",
    options: ["48 heures", "8 jours", "1 mois", "2 mois quel que soit le cas"], correct: 1,
    explication: "L'accès se fait dans les 8 jours ; ce délai est porté à 2 mois si les informations datent de plus de 5 ans.", ref: "UE 1.3", diff: 2 },
  { ueId: "1.3", q: "La personne de confiance, dans son rôle, doit :",
    options: ["Décider à la place du patient", "Rapporter les souhaits du patient sans exprimer les siens", "Remplacer le patient pour le consentement", "Accéder seule au dossier médical"], correct: 1,
    explication: "La personne de confiance est le porte-parole du patient : elle rapporte ses souhaits, n'exprime pas les siens et ne le remplace pas.", ref: "UE 1.3", diff: 1 },
  { ueId: "1.3", q: "Quelle est la sanction pénale de la violation du secret professionnel (art. 226-13 CP) ?",
    options: ["6 mois et 7 500 €", "1 an d'emprisonnement et 15 000 € d'amende", "3 ans et 45 000 €", "Simple blâme"], correct: 1,
    explication: "L'article 226-13 du Code pénal prévoit 1 an d'emprisonnement et 15 000 € d'amende.", ref: "UE 1.3", diff: 2 },
  { ueId: "1.3", q: "La discrétion professionnelle est une obligation :",
    options: ["De droit pénal", "Statutaire (public) ou contractuelle (privé), faute disciplinaire", "Imposée par le Code civil uniquement", "Sans aucune sanction"], correct: 1,
    explication: "La discrétion professionnelle est statutaire dans le public, contractuelle dans le privé ; l'indiscrétion est une faute disciplinaire, non pénale.", ref: "UE 1.3", diff: 2 },
  { ueId: "1.3", q: "Quels sont les 3 éléments cumulatifs de la responsabilité civile (art. 1240 C.C.) ?",
    options: ["Faute + dommage + lien de causalité", "Faute + intention + sanction", "Dommage + plainte + procès", "Faute + casier + amende"], correct: 0,
    explication: "L'article 1240 du Code civil exige faute + dommage + lien de causalité (3 éléments cumulatifs).", ref: "UE 1.3", diff: 2 },
  { ueId: "1.3", q: "La responsabilité civile du soignant relève d'une obligation de :",
    options: ["Résultat", "Moyens", "Guérison", "Performance"], correct: 1,
    explication: "C'est une obligation de moyens : on ne reproche pas de ne pas avoir guéri, mais de ne pas avoir tout mis en œuvre.", ref: "UE 1.3", diff: 2 },
  { ueId: "1.3", q: "En quelle année l'Ordre National des Infirmiers (ONI) a-t-il été créé ?",
    options: ["2002", "2004", "2006", "2016"], correct: 2,
    explication: "L'ONI a été créé en 2006 ; le Code de déontologie des infirmiers est institué par le décret du 25 novembre 2016.", ref: "UE 1.3", diff: 1 },
  { ueId: "1.3", q: "Quelle loi régit actuellement les soins psychiatriques sans consentement ?",
    options: ["Loi du 27 juin 1990 seule", "Loi du 5 juillet 2011 (révisant celle de 1990)", "Loi du 4 mars 2002", "Loi du 22 avril 2005"], correct: 1,
    explication: "La loi du 27 juin 1990 a été révisée par la loi du 5 juillet 2011. Depuis 2011, ce sont les soins, et non l'hospitalisation, qui sont imposés.", ref: "UE 1.3", diff: 2 },
  { ueId: "1.3", q: "Les soins en péril imminent (SPPI) se caractérisent par :",
    options: ["2 certificats et un tiers", "1 certificat et pas de demande de tiers", "Un arrêté préfectoral", "Le consentement du patient"], correct: 1,
    explication: "Le SPPI : impossibilité d'obtenir un tiers, péril imminent, 1 seul certificat médical et pas de demande de tiers.", ref: "UE 1.3", diff: 3 },
  { ueId: "1.3", q: "Au bout de combien de jours le patient en soins sous contrainte est-il convoqué devant le JLD ?",
    options: ["Au 6e jour", "Au 8e jour", "Au 12e jour", "Au 30e jour"], correct: 2,
    explication: "Le patient est convoqué en audience devant le Juge des Libertés et de la Détention au 12e jour (d'où le film « 12 jours »).", ref: "UE 1.3", diff: 2 },
  { ueId: "1.3", q: "Quelle mesure de protection des majeurs est temporaire et conserve les droits de la personne ?",
    options: ["Tutelle", "Curatelle", "Sauvegarde de justice", "Mandat judiciaire"], correct: 2,
    explication: "La sauvegarde de justice est une mesure temporaire : le majeur conserve ses droits et n'est pas frappé d'incapacité.", ref: "UE 1.3", diff: 1 },
  { ueId: "1.3", q: "Quels sont les 3 principes fondamentaux de la loi de 2007 sur la protection des majeurs ?",
    options: ["Liberté, égalité, fraternité", "Nécessité, subsidiarité, proportionnalité", "Bienfaisance, justice, autonomie", "Information, consentement, dossier"], correct: 1,
    explication: "Les 3 principes de la loi du 5 mars 2007 sont la nécessité, la subsidiarité et la proportionnalité.", ref: "UE 1.3", diff: 2 },
  { ueId: "1.3", q: "Parmi les 4 principes éthiques, lequel correspond au « primum non nocere » ?",
    options: ["Bienfaisance", "Non-malfaisance", "Autonomie", "Justice"], correct: 1,
    explication: "La non-malfaisance, « primum non nocere », vise à éviter d'induire des souffrances inutiles.", ref: "UE 1.3", diff: 2 },
  { ueId: "1.3", q: "Selon Max Weber, l'éthique qui se soucie des conséquences de ses actes est :",
    options: ["L'éthique de conviction", "L'éthique de responsabilité", "La déontologie", "La bioéthique"], correct: 1,
    explication: "L'éthique de responsabilité rend responsable de toutes les conséquences de ses actes ; l'éthique de conviction se soucie de ne pas trahir une valeur.", ref: "UE 1.3", diff: 3 },
  { ueId: "1.3", q: "Quelle est la différence entre la morale et l'éthique selon le cours ?",
    options: ["Elles sont identiques", "La morale est déductive ; l'éthique est un raisonnement concret", "L'éthique est imposée de l'extérieur", "La morale est laïque, l'éthique religieuse"], correct: 1,
    explication: "La morale est déductive (imposée de l'extérieur, connotation religieuse), l'éthique est un raisonnement sur le concret (laïque, autocontrôle).", ref: "UE 1.3", diff: 2 },
  { ueId: "1.3", q: "À quelle date a été signée la Déclaration universelle des droits de l'Homme ?",
    options: ["26 août 1789", "10 décembre 1948", "4 juillet 1776", "4 mars 2002"], correct: 1,
    explication: "La Déclaration universelle des droits de l'Homme a été signée le 10 décembre 1948 par 56 pays, après la Seconde Guerre mondiale.", ref: "UE 1.3", diff: 1 },
  { ueId: "1.3", q: "L'assentiment se distingue du consentement parce qu'il est :",
    options: ["Plus intellectuel", "Plus physique (perception, ressenti)", "Toujours écrit", "Réservé aux majeurs protégés"], correct: 1,
    explication: "L'assentiment repose sur des indices/perceptions physiques d'adhésion, là où le consentement est plus intellectuel (penser, juger). Notion clé pour les troubles cognitifs.", ref: "UE 1.3", diff: 3 },
  { ueId: "1.3", q: "Le secret partagé entre professionnels de santé est possible :",
    options: ["Sans aucune condition", "Sauf opposition de la personne, pour la continuité des soins", "Uniquement avec accord écrit du préfet", "Seulement en psychiatrie"], correct: 1,
    explication: "Deux ou plusieurs professionnels peuvent échanger des informations, sauf opposition de la personne avertie, pour assurer la continuité des soins.", ref: "UE 1.3", diff: 2 },
  { ueId: "1.3", q: "Quel texte institue le Code de déontologie des infirmiers ?",
    options: ["Décret n°2004-802 du 29 juillet 2004", "Décret n°2016-1605 du 25 novembre 2016", "Loi du 4 mars 2002", "Loi du 5 juillet 2011"], correct: 1,
    explication: "Le Code de déontologie des infirmiers est institué par le décret n°2016-1605 du 25 novembre 2016 (art. R.4312-1 et suivants du CSP).", ref: "UE 1.3", diff: 2 }
];

export const flashcards = [
  { ueId: "1.3", recto: "Quelle loi fonde les droits des patients en 2002 ?", verso: "La loi du 4 mars 2002 (loi Kouchner), relative aux droits des malades et à la qualité du système de santé. Titre II : « Démocratie sanitaire »." },
  { ueId: "1.3", recto: "Les 3 points clés de la loi du 4 mars 2002 ?", verso: "Droit à l'information, personne de confiance, accès au dossier médical." },
  { ueId: "1.3", recto: "Les 4 critères d'un consentement valide ?", verso: "Libre, Éclairé, Sujet compétent, Révocable." },
  { ueId: "1.3", recto: "Différence consentement / assentiment ?", verso: "Le consentement est intellectuel (penser, juger) ; l'assentiment est physique : indices et perceptions montrant que la personne adhère. Clé pour les troubles cognitifs." },
  { ueId: "1.3", recto: "Délai d'accès au dossier médical ?", verso: "8 jours après la demande, porté à 2 mois si les informations datent de plus de 5 ans." },
  { ueId: "1.3", recto: "Rôle de la personne de confiance ?", verso: "Porte-parole du patient : elle rapporte ses souhaits sans exprimer les siens et ne le remplace pas. Désignation écrite, révocable." },
  { ueId: "1.3", recto: "Sanction pénale de la violation du secret professionnel (art. 226-13 CP) ?", verso: "1 an d'emprisonnement et 15 000 € d'amende." },
  { ueId: "1.3", recto: "Secret professionnel vs discrétion professionnelle ?", verso: "Secret = obligation de droit pénal (devant les tribunaux). Discrétion = obligation statutaire/contractuelle, faute disciplinaire (devant l'employeur)." },
  { ueId: "1.3", recto: "Les 3 éléments cumulatifs de la responsabilité civile (art. 1240 C.C.) ?", verso: "Faute + dommage + lien de causalité." },
  { ueId: "1.3", recto: "Les 4 types de responsabilité infirmière ?", verso: "Civile (privé) / Administrative (public), Pénale, Disciplinaire. Cumul possible." },
  { ueId: "1.3", recto: "Obligation de moyens ou de résultat pour l'infirmier ?", verso: "Obligation de moyens : on reproche de ne pas avoir tout mis en œuvre, pas de ne pas avoir guéri." },
  { ueId: "1.3", recto: "Création de l'ONI et du Code de déontologie des infirmiers ?", verso: "ONI créé en 2006 ; Code de déontologie institué par le décret n°2016-1605 du 25 novembre 2016." },
  { ueId: "1.3", recto: "Quelle loi régit les soins psychiatriques sans consentement ?", verso: "Loi du 27 juin 1990, révisée par la loi du 5 juillet 2011. Depuis 2011, ce sont les soins (pas l'hospitalisation) qui sont imposés." },
  { ueId: "1.3", recto: "SPDT, SPDTU, SPPI, SPDRE : différences de procédure ?", verso: "SPDT : 2 certificats + tiers. SPDTU : 1 certificat + tiers (urgence). SPPI : 1 certificat, pas de tiers (péril imminent). SPDRE : arrêté préfectoral + 1 certificat." },
  { ueId: "1.3", recto: "À quel jour le patient sous contrainte est-il convoqué devant le JLD ?", verso: "Au 12e jour d'hospitalisation sous contrainte (Juge des Libertés et de la Détention)." },
  { ueId: "1.3", recto: "Les 3 mesures de protection des majeurs ?", verso: "Tutelle (représentation, altération grave), Curatelle (assistance, incapacité partielle), Sauvegarde de justice (temporaire, droits conservés)." },
  { ueId: "1.3", recto: "Les 3 principes de la loi de 2007 sur la protection des majeurs ?", verso: "Nécessité, Subsidiarité, Proportionnalité." },
  { ueId: "1.3", recto: "Les 4 principes éthiques ?", verso: "Bienfaisance, Non-malfaisance (primum non nocere), Autonomie, Justice." },
  { ueId: "1.3", recto: "Éthique de conviction vs éthique de responsabilité (Max Weber) ?", verso: "Conviction : ne pas trahir une valeur/norme. Responsabilité : assumer toutes les conséquences de ses actes (conséquentialiste)." },
  { ueId: "1.3", recto: "Morale vs éthique ?", verso: "La morale est déductive, imposée de l'extérieur (bien/mal). L'éthique est un raisonnement concret, un questionnement (autocontrôle, responsabilité)." },
  { ueId: "1.3", recto: "Date de la Déclaration universelle des droits de l'Homme ?", verso: "10 décembre 1948, signée par 56 pays après la Seconde Guerre mondiale." },
  { ueId: "1.3", recto: "Les 3 générations de droits de l'Homme ?", verso: "Droits civiques et politiques ; droits économiques, sociaux et culturels ; droits de solidarité." }
];
