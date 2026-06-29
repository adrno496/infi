export const fiches = [
  { id: "fco_4_4_injections", ueId: "4.4", type: "cours",
    titre: "Les injections parentérales (IV, IM, SC, ID)",
    resume: "Introduction de médicaments dans l'organisme par une autre voie que le tube digestif, à l'aide d'une seringue et d'une aiguille.",
    tags: ["d'après tes cours","injections","voies parentérales"],
    html: `<p>L'<span class="key" data-term="injection parentérale">injection parentérale</span> introduit une substance médicamenteuse par une autre voie que le tube digestif. Elle permet une action <strong>plus précise et plus rapide</strong> (passage rapide dans la circulation) et évite troubles digestifs, mauvais goût, fausses routes et troubles de la déglutition.</p>
<h3>Les 4 types d'injection</h3>
<table class="tbl"><tr><th>Type</th><th>Site / particularité</th></tr>
<tr><td><strong>IV</strong> (intraveineuse)</td><td>Directement dans une veine, sous pression. IVL (lente) ou IVD (directe, < 1 min). Action rapide ; produits parfois caustiques. Adulte : avant-bras, dos de la main, VVP ou VVC. Nourrisson : pieds, mains, cuir chevelu.</td></tr>
<tr><td><strong>IM</strong> (intramusculaire)</td><td>Dans le muscle. Utile pour les formes <strong>LP</strong> (ex. Loxapac). Quart supéro-externe de la fesse, deltoïde (vaccin). Varier les points.</td></tr>
<tr><td><strong>SC</strong> (sous-cutanée)</td><td>1 à 2 ml en moyenne (insuline, perfusion de réhydratation SC). Zone : face externe du bras.</td></tr>
<tr><td><strong>ID</strong> (intradermique)</td><td>Dans le derme, faible quantité (0,1 ml).</td></tr></table>
<h3>Geste IM</h3>
<ul><li>Piquer <strong>perpendiculairement</strong>.</li><li>Aspirer pour vérifier l'absence de sang.</li><li>Injecter lentement en relâchant la peau.</li><li>Retirer seringue + aiguille en simultané avec une compresse antiseptique.</li><li>Jeter immédiatement dans le container <strong>sans recapuchonner</strong>.</li><li>Masser le point d'injection avec une compresse sèche pour favoriser la diffusion.</li></ul>
<h3>Contre-indications</h3>
<ul><li><strong>IV</strong> : hémiplégie, mammectomie, fistule artérioveineuse (du côté concerné).</li><li><strong>IM</strong> : traitement anticoagulant (CI absolue), prothèse totale de hanche, peau lésée.</li></ul>
<h3>Complications</h3>
<ul><li><strong>IV</strong> : extravasation (œdème, douleur, rougeur, brûlure, induration), nécrose, <span class="key" data-term="choc anaphylactique">choc anaphylactique</span> (rash, prurit, œdème généralisé, dyspnée puis arrêt respiratoire et cardiaque).</li><li><strong>IM</strong> : atteinte du nerf sciatique, hématome, complications infectieuses (ne pas toucher l'os).</li></ul>
<div class="callout"><div class="callout-t">À retenir</div>Toujours vérifier la prescription (identité, nom, dosage), l'absence d'allergie, et surveiller efficacité et effets secondaires. Matériel : SHA, antiseptique, compresses stériles, DASRI, médicament/solvant, seringue + aiguilles ou seringue préremplie (ex. Lovenox).</div>`,
    refs: ["D'après tes cours (UE 4.4)"] },

  { id: "fco_4_4_groupes_sanguins", ueId: "4.4", type: "cours",
    titre: "Bases d'immunohématologie : groupes sanguins ABO, RH, KEL",
    resume: "Les antigènes sont sur la membrane des globules rouges, les anticorps dans le plasma ; trois systèmes majeurs structurent la compatibilité.",
    tags: ["d'après tes cours","groupes sanguins","ABO"],
    html: `<p>Les <span class="key" data-term="antigène">antigènes</span> sont présents sur la membrane des cellules ; les <span class="key" data-term="anticorps">anticorps</span> sont dans le plasma. Système ABO découvert par Karl Landsteiner en 1900.</p>
<h3>Les trois systèmes</h3>
<ul><li><strong>ABO</strong> : A, B, AB, O.</li><li><strong>RH</strong> : D, C, E, c, e (on est D+ si l'antigène D est présent, sinon D−).</li><li><strong>KEL</strong> : K (K+ ou K−).</li></ul>
<p>Le groupe usuel se base sur ABO + RH(D) : ex. A D+ = A+, A D− = A−.</p>
<h3>Système ABO (à connaître par cœur)</h3>
<table class="tbl"><tr><th>Groupe</th><th>Antigènes (sur GR)</th><th>Anticorps (plasma)</th></tr>
<tr><td>A</td><td>A</td><td>anti-B</td></tr>
<tr><td>B</td><td>B</td><td>anti-A</td></tr>
<tr><td>AB</td><td>A et B</td><td>aucun (receveur universel)</td></tr>
<tr><td>O</td><td>aucun (donneur universel CGR)</td><td>anti-A et anti-B</td></tr></table>
<p>Compatibilité CGR : le sang O peut être donné à tout le monde ; le AB ne peut être donné qu'à un AB ; le A à un A ou un AB.</p>
<h3>Anticorps réguliers vs irréguliers</h3>
<p>Les anticorps anti-A/anti-B sont <strong>naturels et réguliers</strong>. Les anticorps issus d'une immunisation (grossesse, transfusion, greffe) sont <strong>immuns et le plus souvent irréguliers</strong> (pas constamment présents). Grâce aux lymphocytes mémoires : <strong>si on a eu un anticorps un jour, on l'a toujours</strong> (allo-immunisation).</p>
<div class="callout"><div class="callout-t">À retenir</div>Incompatibilité ABO = accident immédiat (hémolyse). Phénotype RH-KEL = risque d'apparition d'anticorps. <strong>On n'apporte jamais de « + » à un « − »</strong> (RH et KEL), sauf exception sur décision écrite du prescripteur.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« Antigène = Au-dehors (membrane) ; Anticorps = dans le plAsmA ». Et « jAmAis de + à un − ».</div>`,
    refs: ["D'après tes cours (UE 4.4)"] },

  { id: "fco_4_4_psl_indications", ueId: "4.4", type: "cours",
    titre: "Les produits sanguins labiles : indications et conservation",
    resume: "CGR, plaquettes et PFC ont chacun leur objectif, leur seuil transfusionnel et leurs règles strictes de conservation.",
    tags: ["d'après tes cours","PSL","conservation"],
    html: `<h3>Pourquoi transfuser ?</h3>
<ul><li><strong>CGR</strong> (globules rouges) : transport d'oxygène vers les tissus.</li><li><strong>Plaquettes</strong> : hémostase primaire (saignement ou risque de saignement).</li><li><strong>Plasma (PFC)</strong> : hémostase secondaire, lors d'hémorragies (choc hémorragique, transfusion massive, hémorragie obstétricale ou du traumatisé grave).</li></ul>
<h3>Seuils transfusionnels (CGR)</h3>
<ul><li>Hb < 7 g/dl : transfusion habituellement nécessaire.</li><li>Hb entre 7 et 10 g/dl : au cas par cas (la <strong>clinique prime</strong>, on ne transfuse pas un chiffre).</li><li>Hb > 10 g/dl : non nécessaire a priori.</li><li>Seuil à 8 g/dl en hématologie ; 7 g/dl si hémorragie digestive. 1 CGR augmente l'Hb d'environ 1 g/dl chez l'adulte.</li></ul>
<h3>Conservation et délais</h3>
<table class="tbl"><tr><th>Produit</th><th>Conservation</th><th>Durée de vie</th><th>Transfusion</th></tr>
<tr><td><strong>CGR</strong></td><td>+2 à +6 °C</td><td>42 jours</td><td>1 à 3 h (hors urgence) ; 1 ml = 15 gouttes</td></tr>
<tr><td><strong>Plaquettes (CP)</strong></td><td>+22 à +24 °C, agitation permanente</td><td>5 à 7 jours</td><td>15-20 min ; <strong>débuter par le CP</strong> si plusieurs produits</td></tr>
<tr><td><strong>PFC</strong></td><td>−25 °C, décongélation 20-30 min</td><td>1 an</td><td>variable ; gros volume 700-1000 ml</td></tr></table>
<div class="callout"><div class="callout-t">À retenir</div><strong>6 heures</strong> = délai pour débuter la transfusion à partir de la réception dans l'unité. Stockage dans le contenant de transport, <strong>JAMAIS au réfrigérateur</strong>. 1 tubulure à filtre par produit.</div>
<h3>Qualifications / transformations</h3>
<ul><li><strong>Irradié</strong> : uniquement CGR, cas particuliers d'hématologie.</li><li><strong>Phénotypé RH-KEL</strong> : femmes en âge de procréer, antécédent d'allo-anticorps, nouveau-né avec anticorps maternel, hémoglobinopathie, transfusions chroniques, groupe rare.</li><li><strong>Compatibilisé (Cross Match)</strong> : obligatoire si antécédent de RAI positive, drépanocytaire ; écarte les CGR portant un antigène réagissant avec un anticorps du receveur.</li></ul>`,
    refs: ["D'après tes cours (UE 4.4)"] },

  { id: "fco_4_4_etapes_transfusion", ueId: "4.4", type: "cours",
    titre: "Les étapes de l'acte transfusionnel et le rôle IDE",
    resume: "Acte médical délégué : chaque étape est un verrou de sécurité, du consentement à la traçabilité.",
    tags: ["d'après tes cours","transfusion","rôle IDE"],
    html: `<p>La transfusion est un <strong>acte médical</strong> (le médecin prescrit) <strong>délégué</strong> à l'IDE, à condition qu'un médecin puisse intervenir à tout moment et soit physiquement présent dans l'établissement. Chaque étape est un verrou ; à la moindre incohérence : on signale et on trace.</p>
<h3>Les grandes étapes (rôle IDE)</h3>
<ul><li><strong>Information et consentement</strong> : information obligatoire par le médecin ; consentement éclairé signé et tracé.</li><li><strong>Documents pré-transfusionnels</strong> : prescription médicale, carte de groupe avec <strong>2 déterminations</strong>, RAI (Recherche d'Anticorps Irréguliers) valide <strong>72 h</strong>.</li><li><strong>Commande</strong> après réunion de tous les documents.</li><li><strong>Réception</strong> : contrôle dans les 30 min (bon service, bon patient, bon produit, intégrité, température), tracé sur la fiche de délivrance.</li><li><strong>Contrôles de concordance et de compatibilité</strong> au lit du patient.</li><li><strong>Pose et surveillance</strong>.</li><li><strong>Traçabilité</strong> (obligation médico-légale, lien donneur-receveur).</li></ul>
<h3>Les 3 règles de sécurité incontournables</h3>
<ul><li><strong>Unité d'action</strong> : CIU et pose réalisés par le <strong>même soignant</strong>.</li><li><strong>Unité de lieu</strong> : au chevet du patient, avec tous les documents.</li><li><strong>Unité de temps</strong> : contrôle simultané patient + PSL, puis pose immédiate.</li></ul>
<h3>Carte de groupe valide</h3>
<p>Éditée par système informatique (retranscription manuelle et étiquette autocollante interdites). 2 déterminations = 2 prélèvements à 2 moments différents, si possible par 2 personnes différentes. Faire <strong>décliner et épeler</strong> nom, prénom, date de naissance. Le groupage n'est possible que 120 jours après une transfusion.</p>
<h3>Urgences</h3>
<ul><li><strong>Urgence vitale immédiate</strong> : CGR O sans groupe ni RAI, mais toujours prélever les 2 déterminations avant.</li><li><strong>Urgence vitale</strong> : groupage obligatoire, sans RAI.</li></ul>
<div class="callout"><div class="callout-t">À retenir</div>En cas de non-concordance : <strong>ne pas transfuser</strong>, appeler le médecin prescripteur et l'EFS, renvoyer les produits + fiche de délivrance. Ne pas jeter les produits.</div>`,
    refs: ["D'après tes cours (UE 4.4)"] },

  { id: "fco_4_4_controle_ultime", ueId: "4.4", type: "cours",
    titre: "Le contrôle ultime pré-transfusionnel (CIU)",
    resume: "Dernier verrou au lit du patient : vérifier la compatibilité ABO entre le sang du patient et celui de la poche.",
    tags: ["d'après tes cours","contrôle ultime","ABO"],
    html: `<p>Le <span class="key" data-term="CIU">CIU</span> (Contrôle Immunologique Ultime) est le <strong>dernier verrou</strong>, réalisé en présence du patient, surtout en urgence. Il comporte 2 phases.</p>
<h3>1. Contrôle de concordance</h3>
<ul><li>Concordance d'<strong>identité</strong> (faire épeler nom, prénom, date de naissance).</li><li>Concordance de <strong>distribution</strong> (PSL reçu / PSL prescrit / fiche de délivrance).</li><li>Concordance de <strong>groupe et phénotype</strong> (carte de groupe, 2 déterminations, fiche de délivrance, produits) dans les systèmes ABO, RH et KELL.</li></ul>
<h3>2. Contrôle de compatibilité (test ultime)</h3>
<p>Uniquement pour les <strong>CGR</strong>, par la personne qui va transfuser, <strong>pour chaque poche</strong>. On vérifie la compatibilité ABO : ne pas introduire l'antigène érythrocytaire (A ou B) correspondant à un anticorps présent chez le receveur, pour éviter l'<span class="key" data-term="accident hémolytique">accident hémolytique</span>.</p>
<h3>Lecture de l'agglutination</h3>
<p>On met en contact le sang du <strong>patient</strong> puis du <strong>culot</strong> avec les anticorps anti-A et anti-B du dispositif. Il y a <strong>agglutination</strong> quand antigène A rencontre anticorps anti-A (ou B avec anti-B).</p>
<p><em>Exemple :</em> côté patient, agglutination avec anti-A et anti-B → patient AB. Côté culot, agglutination avec anti-A seulement → culot de groupe A (pas d'antigène B). Le patient AB n'a pas d'anticorps : pas d'hémolyse possible → <strong>je peux transfuser</strong>.</p>
<table class="tbl"><tr><th>Aspect (carton)</th><th>Interprétation</th></tr>
<tr><td>Lisse</td><td>négatif (pas d'agglutination)</td></tr>
<tr><td>Granité</td><td>positif (agglutination)</td></tr>
<tr><td>Point rouge (membrane)</td><td>positif</td></tr></table>
<div class="callout"><div class="callout-t">À retenir</div>Renseigner le compte-rendu du contrôle ultime : date, heure, n° du produit, identifiant du soignant, résultat et interprétation ; à garder dans le dossier de soins.</div>`,
    refs: ["D'après tes cours (UE 4.4)"] },

  { id: "fco_4_4_surveillance_transfusion", ueId: "4.4", type: "cours",
    titre: "Pose et surveillance de la transfusion",
    resume: "Une voie veineuse dédiée, un rythme de surveillance précis et un débit lent encadrent la pose.",
    tags: ["d'après tes cours","surveillance","transfusion"],
    html: `<h3>Avant de débuter</h3>
<ul><li>Vérifier la voie veineuse et prendre les constantes : <strong>FC, PA, T°, FR, SatO₂</strong> (l'hyperthermie ne contre-indique pas la transfusion).</li><li>Délai à respecter : <strong>moins de 6 h</strong> depuis la réception du CGR.</li><li>S'assurer qu'un médecin est présent et joignable.</li></ul>
<h3>Voie et matériel</h3>
<p>Voie veineuse <strong>spécifique</strong> : interdit d'administrer quoi que ce soit d'autre sur cette voie. Tubulure <strong>avec filtre exclusivement</strong>. Si plusieurs produits, débuter par les plaquettes.</p>
<h3>Rythme de surveillance</h3>
<table class="tbl"><tr><th>Phase</th><th>Fréquence</th></tr>
<tr><td>15 premières minutes</td><td>toutes les 5 min (rester près du patient)</td></tr>
<tr><td>Pendant la transfusion</td><td>toutes les 30 min</td></tr>
<tr><td>Après (pendant 2 h)</td><td>toutes les 30 min</td></tr></table>
<h3>Débit et durée</h3>
<ul><li>Débit lent : <strong>30 gouttes/min maximum</strong>.</li><li>CGR : environ 2 h (jusqu'à 3 h chez la personne âgée).</li><li>Plaquettes : environ 20 min par poche.</li></ul>
<h3>Signes de complication à rechercher</h3>
<p>Malaise, frissons, marbrures, cyanose, céphalées, signes digestifs (nausées, vomissements, diarrhée), signes respiratoires (polypnée, dyspnée).</p>
<div class="callout"><div class="callout-t">À retenir</div>Après la transfusion : mettre la poche dans les déchets <strong>DASRI</strong>, conserver les poches 2 h. Plaquettes JAMAIS au frigo. Traçabilité sur la fiche de délivrance.</div>`,
    refs: ["D'après tes cours (UE 4.4)"] },

  { id: "fco_4_4_eir_hemovigilance", ueId: "4.4", type: "cours",
    titre: "Effets indésirables et hémovigilance",
    resume: "Tout signe clinique nouveau pendant ou après une transfusion est imputable à celle-ci jusqu'à preuve du contraire.",
    tags: ["d'après tes cours","hémovigilance","EIR"],
    html: `<p>L'<span class="key" data-term="hémovigilance">hémovigilance</span> = ensemble des procédures de surveillance, évaluation et prévention des incidents et effets indésirables chez donneurs et receveurs de PSL.</p>
<div class="callout"><div class="callout-t">À retenir</div>1 seule règle (EIR) : toute manifestation clinique non présente avant la transfusion doit être considérée comme <strong>imputable à la transfusion jusqu'à preuve du contraire</strong>. Si signe clinique nouveau → DONNER L'ALERTE.</div>
<h3>Principaux effets indésirables receveur</h3>
<ul><li><strong>Hémolyse intravasculaire</strong> : un anticorps du receveur reconnaît un antigène du CGR (surtout ABO, aussi Kell, Kidd). Frissons/hyperthermie, douleurs lombaires/thoraciques, angoisse, hypotension, sensation de mort imminente. Causes : erreur d'identification, RAI non prise en compte, contrôle ultime mal réalisé → <strong>causes humaines évitables</strong>.</li><li><strong>Contamination bactérienne / choc septique</strong> : hyperthermie ou hypothermie, marbrures, hypotension, dyspnée, troubles de conscience (jusqu'à 2 h après).</li><li><strong>Surcharge volémique (OAP)</strong> : responsable du plus grand nombre d'EIR graves. Alerte si PAS +30 mmHg ou FR +10/min. Sujets à risque : nouveau-né, faible poids, insuffisance cardiaque/rénale, vitesse trop rapide.</li><li><strong>Réactions allergiques</strong> : urticaire, prurit (mineures) jusqu'au choc anaphylactique.</li></ul>
<h3>Conduite à tenir</h3>
<p><strong>Arrêter la transfusion → alerter un médecin → surveiller → traiter/prélever → déclarer l'EIR.</strong></p>
<ul><li>Surveiller : conscience, pouls, TA, signes de choc, FR, T°, diurèse, saignements aux points de ponction.</li><li>Prélèvements : bilan immuno-hématologique (2 tubes EDTA + 1 tube sec) ; si fièvre : hémocultures ; si allergie : histamine et tryptase ; si signes respiratoires : BNP. <strong>Ne jamais prélever dans la poche.</strong></li><li>Renvoyer à l'EFS tous les produits + fiche de délivrance dans un sac DASRI.</li></ul>
<div class="callout"><div class="callout-t">À retenir</div>Déclaration au correspondant d'hémovigilance <strong>sans délai, au plus tard dans les 8 heures</strong>.</div>`,
    refs: ["D'après tes cours (UE 4.4)"] },

  { id: "fco_4_4_efs_don", ueId: "4.4", type: "cours",
    titre: "L'EFS et le don du sang",
    resume: "L'Établissement Français du Sang est l'opérateur unique de la transfusion ; le don repose sur trois principes éthiques.",
    tags: ["d'après tes cours","EFS","don du sang"],
    html: `<h3>L'EFS</h3>
<p>L'<span class="key" data-term="EFS">Établissement Français du Sang</span> (créé le 1ᵉʳ janvier 2000) est l'<strong>opérateur unique</strong> de la transfusion en France : monopole de collecte, préparation, qualification et distribution des PSL. Établissement public présent sur tout le territoire.</p>
<p>Service public éthique reposant sur 3 principes : <strong>égalité</strong> (pour les malades), <strong>continuité</strong> (fonctionnement régulier), <strong>mutabilité</strong> (adaptation aux besoins).</p>
<p>Missions : autosuffisance nationale, sécurité/qualité (SMQ), hémovigilance (transmission ANSM, ARS, InVS), recherche, coopération internationale.</p>
<h3>Les 3 principes du don</h3>
<ul><li><strong>Volontaire</strong> : librement accompli, sans contrainte.</li><li><strong>Anonyme</strong> : seul l'EFS connaît l'identité du donneur.</li><li><strong>Bénévole</strong> : non rémunéré, sous aucune forme.</li></ul>
<h3>Types de prélèvement</h3>
<ul><li>Sang total.</li><li><strong>Aphérèse</strong> : le sang est séparé en ses constituants ; un est collecté, les autres restitués au donneur (simple ou combinée). Plasma : 40-60 min ; plaquettes : 60-80 min.</li></ul>
<h3>Déroulement du don</h3>
<p>Accueil et vérification d'identité → questionnaire pré-don → entretien pré-don (secret médical, vérifie poids, TA, pouls, Hb) → prélèvement → collation/repos avec surveillance de 20 min.</p>
<ul><li><strong>CI définitives</strong> : antécédent de transfusion ou de greffe, traitement par hormone de croissance avant 1989, traitement pour cancer.</li><li><strong>CI temporaires</strong> : grossesse (6 mois après), tatouage/piercing (4 mois), soins dentaires (1-7 j), état infectieux (2 semaines après guérison).</li></ul>
<div class="callout"><div class="callout-t">À retenir</div>La filtration (déleucocytation) élimine les globules blancs (antigènes HLA, virus, bactéries, risque prion). Le n° unique de don sur l'étiquette assure la traçabilité.</div>`,
    refs: ["D'après tes cours (UE 4.4)"] },

  { id: "fco_4_4_mediations", ueId: "4.4", type: "cours",
    titre: "Les médiations thérapeutiques",
    resume: "Un objet tiers (art, corps, animal…) met de la distance pour favoriser symbolisation et expression de soi, dans un cadre soignant.",
    tags: ["d'après tes cours","médiation","psychiatrie"],
    html: `<p>La <span class="key" data-term="médiation thérapeutique">médiation</span> signifie « être au milieu » : un élément tiers met de la distance pour favoriser le dialogue, la <strong>symbolisation</strong> et la distanciation. En psychologie, processus par lequel une connaissance sensorielle devient une donnée intellectuelle.</p>
<h3>Fondements théoriques</h3>
<ul><li><strong>Freud</strong> : la sublimation transforme une pulsion vers des activités socialement valorisées ; la création prend la place du symptôme. En créant un objet, le patient se crée comme sujet.</li><li><strong>Dolto</strong> : le dessin de l'enfant, « rébus symbolique » de l'état affectif.</li><li><strong>Winnicott</strong> : espace transitionnel, aire intermédiaire.</li><li><strong>Bion</strong> : fonction alpha, rêverie maternelle, appareil à penser les pensées.</li><li><strong>Anzieu</strong> : le moi-peau, les enveloppes (le cadre = « seconde peau psychique »).</li></ul>
<h3>Le cadre-dispositif</h3>
<p>L'activité s'inscrit dans un cadre sous-tendu par une <strong>intention</strong>. Ce n'est pas une relation amicale : il sert à tenir, structurer, restaurer, contenir. Non rigide, il s'ajuste à chaque groupe ; permanent, il survit aux « attaques ». Il lutte contre l'indifférenciation.</p>
<h3>Objectifs</h3>
<ul><li>Récupération de compétences fonctionnelles (autonomie, remédiation cognitive, ergothérapie, jeux de société).</li><li>Mobiliser la symbolisation : échange entre dedans et dehors, soi et non-soi, manifeste et latent.</li></ul>
<h3>Supports possibles</h3>
<p>Conte, écriture, théâtre, musique, modelage, peinture, sculpture, terre, collage, bricolage ; le corps (marche, sport, relaxation, balnéothérapie, esthétique) ; équithérapie (médiation animale) ; repas partagé, séjours, jardinage ; médiation sensorielle olfactive.</p>
<div class="callout"><div class="callout-t">À retenir</div>La médiation est un véritable <strong>traitement</strong> : indication médicale, posologie, surveillance, évaluation et effets thérapeutiques. Questions préalables : quel besoin ? Est-ce pertinent ? Quelle activité ? Pourquoi ? Au bon moment ? En groupe ?</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Pour résumer : Dedans/Dehors, Maux/Mots, Jeu/Je, Dit-Gestion.</div>`,
    refs: ["D'après tes cours (UE 4.4)"] },
];

export const qcm = [
  { ueId: "4.4", q: "Quelle est la voie d'injection utilisée pour les formes retard (LP) comme le Loxapac ?",
    options: ["IV", "IM", "SC", "ID"], correct: 1,
    explication: "L'injection intramusculaire (IM) est utilisée pour les formes LP, avec une bonne absorption du traitement.", ref: "UE 4.4", diff: 1 },

  { ueId: "4.4", q: "Quelle est une contre-indication ABSOLUE à l'injection intramusculaire ?",
    options: ["Hyperthermie", "Traitement anticoagulant", "Hémiplégie", "Allergie alimentaire"], correct: 1,
    explication: "Le traitement anticoagulant est une contre-indication absolue à l'IM (risque hématome).", ref: "UE 4.4", diff: 1 },

  { ueId: "4.4", q: "Pour le geste IM, dans quel ordre agir ?",
    options: ["Piquer en oblique puis injecter vite", "Piquer perpendiculairement, aspirer, injecter lentement", "Recapuchonner l'aiguille avant de jeter", "Ne jamais masser le point d'injection"], correct: 1,
    explication: "On pique perpendiculairement, on aspire pour vérifier l'absence de sang, puis on injecte lentement. On masse ensuite pour favoriser la diffusion.", ref: "UE 4.4", diff: 1 },

  { ueId: "4.4", q: "Quels antigènes et anticorps possède une personne de groupe A ?",
    options: ["Antigène B, anticorps anti-A", "Antigène A, anticorps anti-B", "Antigènes A et B, aucun anticorps", "Aucun antigène, anticorps anti-A et anti-B"], correct: 1,
    explication: "Groupe A = antigène A sur les GR et anticorps anti-B dans le plasma.", ref: "UE 4.4", diff: 1 },

  { ueId: "4.4", q: "Quel groupe sanguin est le donneur universel de globules rouges (CGR) ?",
    options: ["AB", "A", "B", "O"], correct: 3,
    explication: "Le groupe O n'a pas d'antigène A ni B sur ses GR : il peut être donné à tout le monde.", ref: "UE 4.4", diff: 1 },

  { ueId: "4.4", q: "Le groupe AB est dit receveur universel car :",
    options: ["Il n'a aucun antigène", "Il n'a aucun anticorps anti-A ni anti-B dans le plasma", "Il a des anticorps anti-A et anti-B", "Il est toujours Rhésus négatif"], correct: 1,
    explication: "Le groupe AB ne possède aucun anticorps anti-A ni anti-B, il peut donc recevoir des CGR de tous les groupes ABO.", ref: "UE 4.4", diff: 2 },

  { ueId: "4.4", q: "Quelle est la durée de validité d'une RAI en cas de transfusion ?",
    options: ["24 heures", "72 heures (3 jours)", "1 mois", "120 jours"], correct: 1,
    explication: "La Recherche d'Anticorps Irréguliers (RAI) est valide 72 heures (3 jours).", ref: "UE 4.4", diff: 1 },

  { ueId: "4.4", q: "Quel est le délai maximal pour débuter une transfusion à partir de la réception du PSL dans l'unité ?",
    options: ["2 heures", "6 heures", "12 heures", "24 heures"], correct: 1,
    explication: "Le délai est de 6 heures à partir de l'heure de réception ; au-delà, retour à l'EFS pour destruction.", ref: "UE 4.4", diff: 1 },

  { ueId: "4.4", q: "Comment conserve-t-on les PSL avant transfusion dans l'unité de soin ?",
    options: ["Au réfrigérateur du service", "Dans le contenant de transport, jamais au réfrigérateur", "À température ambiante sur le chariot", "Au congélateur"], correct: 1,
    explication: "On stocke dans le contenant de transport et JAMAIS au réfrigérateur. Les plaquettes notamment ne vont jamais au frigo.", ref: "UE 4.4", diff: 2 },

  { ueId: "4.4", q: "Quelles sont les 3 règles de sécurité de l'acte transfusionnel ?",
    options: ["Unité de groupe, de service, de matériel", "Unité d'action, de lieu, de temps", "Unité de dose, de débit, de durée", "Unité de prescription, de produit, de patient"], correct: 1,
    explication: "Unité d'action (même soignant), unité de lieu (au chevet du patient), unité de temps (contrôle simultané puis pose immédiate).", ref: "UE 4.4", diff: 1 },

  { ueId: "4.4", q: "Le contrôle ultime de compatibilité ABO au lit du patient concerne :",
    options: ["Tous les PSL", "Uniquement les CGR, pour chaque poche", "Uniquement les plaquettes", "Uniquement le plasma"], correct: 1,
    explication: "Le test ultime de compatibilité ABO se fait uniquement pour les CGR, par le soignant qui transfuse, pour chaque poche.", ref: "UE 4.4", diff: 2 },

  { ueId: "4.4", q: "Combien de déterminations sont nécessaires pour une carte de groupe sanguin valide ?",
    options: ["1 détermination", "2 déterminations à 2 moments différents", "3 déterminations", "4 déterminations le même jour"], correct: 1,
    explication: "La carte de groupe nécessite 2 déterminations, sur 2 prélèvements à 2 moments différents, si possible par 2 personnes différentes.", ref: "UE 4.4", diff: 1 },

  { ueId: "4.4", q: "Sur la carte test de contrôle ultime, un aspect granité signifie :",
    options: ["Réaction négative, pas d'agglutination", "Réaction positive, agglutination", "Test non valide", "Présence d'anticorps irréguliers"], correct: 1,
    explication: "Aspect lisse = négatif ; aspect granité = positif (agglutination). Sur membrane, un point rouge = positif.", ref: "UE 4.4", diff: 2 },

  { ueId: "4.4", q: "Quel rythme de surveillance applique-t-on pendant les 15 premières minutes de la transfusion ?",
    options: ["Toutes les 30 minutes", "Toutes les heures", "Toutes les 5 minutes", "En continu sans relevé"], correct: 2,
    explication: "Surveillance (FC, PA, T°, FR, SatO₂) toutes les 5 min pendant les 15 premières minutes, puis toutes les 30 minutes.", ref: "UE 4.4", diff: 1 },

  { ueId: "4.4", q: "Quel débit maximal respecte-t-on pour une transfusion ?",
    options: ["10 gouttes/min", "30 gouttes/min", "60 gouttes/min", "100 gouttes/min"], correct: 1,
    explication: "Débit lent, 30 gouttes/min au maximum, avec une tubulure à filtre exclusivement.", ref: "UE 4.4", diff: 2 },

  { ueId: "4.4", q: "Si plusieurs produits sont à transfuser, par lequel débute-t-on ?",
    options: ["Les CGR", "Le plasma (PFC)", "Les plaquettes (CP)", "Peu importe l'ordre"], correct: 2,
    explication: "On débute par les plaquettes (transfusion courte d'environ 15-20 min).", ref: "UE 4.4", diff: 2 },

  { ueId: "4.4", q: "Devant une hyperthermie/frissons pendant une transfusion, jusqu'à preuve du contraire on suspecte :",
    options: ["Une simple anxiété", "Une incompatibilité immunologique", "Une réaction normale au froid", "Une erreur de débit sans gravité"], correct: 1,
    explication: "Hyperthermie et/ou frissons = incompatibilité immunologique jusqu'à preuve du contraire ; il faut arrêter et alerter.", ref: "UE 4.4", diff: 2 },

  { ueId: "4.4", q: "Quel effet indésirable transfusionnel est responsable du plus grand nombre d'EIR graves ?",
    options: ["L'allergie cutanée", "La surcharge volémique (OAP)", "Le hématome au point de ponction", "La fièvre isolée"], correct: 1,
    explication: "La surcharge volémique (œdème aigu pulmonaire) est responsable du plus grand nombre d'EIR graves.", ref: "UE 4.4", diff: 2 },

  { ueId: "4.4", q: "Quel est le premier geste de la conduite à tenir devant un effet indésirable receveur ?",
    options: ["Déclarer l'EIR", "Arrêter la transfusion", "Prélever un bilan", "Augmenter le débit"], correct: 1,
    explication: "On arrête la transfusion, puis on alerte le médecin, on surveille, on traite/prélève et enfin on déclare l'EIR.", ref: "UE 4.4", diff: 1 },

  { ueId: "4.4", q: "Dans quel délai maximal déclare-t-on un effet indésirable receveur au correspondant d'hémovigilance ?",
    options: ["Dans les 8 heures", "Dans les 48 heures", "Dans la semaine", "Dans le mois"], correct: 0,
    explication: "La déclaration se fait sans délai et au plus tard dans les 8 heures.", ref: "UE 4.4", diff: 2 },

  { ueId: "4.4", q: "Quels sont les 3 principes du don du sang en France ?",
    options: ["Payant, nominatif, obligatoire", "Volontaire, anonyme, bénévole", "Public, privé, mixte", "Rapide, gratuit, illimité"], correct: 1,
    explication: "Le don repose sur le caractère volontaire, anonyme et bénévole.", ref: "UE 4.4", diff: 1 },

  { ueId: "4.4", q: "L'EFS, créé en 2000, est :",
    options: ["Un laboratoire privé concurrentiel", "L'opérateur unique de la transfusion sanguine en France", "Une association de donneurs", "Une agence de l'ANSM"], correct: 1,
    explication: "L'Établissement Français du Sang est l'opérateur unique (monopole de collecte, préparation, qualification, distribution des PSL).", ref: "UE 4.4", diff: 1 },

  { ueId: "4.4", q: "En dessous de quel taux d'hémoglobine la transfusion de CGR est-elle habituellement nécessaire ?",
    options: ["10 g/dl", "9 g/dl", "8 g/dl", "7 g/dl"], correct: 3,
    explication: "En dessous de 7 g/dl la transfusion est habituellement nécessaire ; entre 7 et 10 g/dl la clinique prime.", ref: "UE 4.4", diff: 2 },

  { ueId: "4.4", q: "Selon le cours, la médiation thérapeutique est avant tout :",
    options: ["Un loisir sans cadre", "Une relation amicale entre soignant et soigné", "Un véritable traitement avec indication, posologie et surveillance", "Une activité strictement individuelle"], correct: 2,
    explication: "La médiation est un traitement à part entière : indication médicale, posologie, surveillance, évaluation et effets thérapeutiques.", ref: "UE 4.4", diff: 2 },
];

export const flashcards = [
  { ueId: "4.4", recto: "Quels sont les 4 types d'injection parentérale ?", verso: "IV (intraveineuse), IM (intramusculaire), SC (sous-cutanée), ID (intradermique)." },
  { ueId: "4.4", recto: "Contre-indication absolue à l'injection IM ?", verso: "Le traitement anticoagulant (risque d'hématome)." },
  { ueId: "4.4", recto: "Geste IM : que faire avant d'injecter ?", verso: "Piquer perpendiculairement puis aspirer pour vérifier l'absence de sang ; injecter lentement." },
  { ueId: "4.4", recto: "Groupe A : antigènes et anticorps ?", verso: "Antigène A sur les GR, anticorps anti-B dans le plasma." },
  { ueId: "4.4", recto: "Groupe O : pourquoi donneur universel de CGR ?", verso: "Pas d'antigène A ni B sur les GR : peut être donné à tous les groupes ABO." },
  { ueId: "4.4", recto: "Groupe AB : pourquoi receveur universel ?", verso: "Aucun anticorps anti-A ni anti-B dans le plasma." },
  { ueId: "4.4", recto: "Règle d'or de la compatibilité RH-KEL ?", verso: "Ne jamais apporter de « + » à un « − » (sauf exception sur décision écrite du prescripteur)." },
  { ueId: "4.4", recto: "Durée de validité d'une RAI en transfusion ?", verso: "72 heures (3 jours)." },
  { ueId: "4.4", recto: "Combien de déterminations pour une carte de groupe valide ?", verso: "2 déterminations, à 2 moments différents, si possible par 2 personnes différentes." },
  { ueId: "4.4", recto: "Les 3 règles de sécurité de l'acte transfusionnel ?", verso: "Unité d'action, unité de lieu, unité de temps." },
  { ueId: "4.4", recto: "Délai maximal pour débuter une transfusion après réception ?", verso: "6 heures." },
  { ueId: "4.4", recto: "Le contrôle ultime ABO au lit du patient concerne quel produit ?", verso: "Uniquement les CGR, pour chaque poche, par le soignant qui transfuse." },
  { ueId: "4.4", recto: "Carte test : que signifie un aspect granité ?", verso: "Réaction positive (agglutination). Lisse = négatif." },
  { ueId: "4.4", recto: "Rythme de surveillance des 15 premières minutes de transfusion ?", verso: "Toutes les 5 minutes, puis toutes les 30 minutes." },
  { ueId: "4.4", recto: "Débit maximal d'une transfusion ?", verso: "30 gouttes/min (tubulure à filtre exclusivement)." },
  { ueId: "4.4", recto: "Hyperthermie/frissons pendant une transfusion : que suspecter ?", verso: "Une incompatibilité immunologique jusqu'à preuve du contraire → arrêter et alerter." },
  { ueId: "4.4", recto: "EIR responsable du plus grand nombre de cas graves ?", verso: "La surcharge volémique (OAP)." },
  { ueId: "4.4", recto: "Conduite à tenir devant un EIR (1ère étape) ?", verso: "Arrêter la transfusion, puis alerter le médecin, surveiller, traiter/prélever, déclarer." },
  { ueId: "4.4", recto: "Délai maximal de déclaration d'un EIR ?", verso: "Sans délai, au plus tard dans les 8 heures." },
  { ueId: "4.4", recto: "Les 3 principes du don du sang ?", verso: "Volontaire, anonyme, bénévole." },
  { ueId: "4.4", recto: "Qu'est-ce que l'EFS ?", verso: "L'Établissement Français du Sang, opérateur unique de la transfusion en France (créé en 2000)." },
  { ueId: "4.4", recto: "Seuil transfusionnel bas en CGR ?", verso: "Hb < 7 g/dl (la clinique prime entre 7 et 10 g/dl)." },
  { ueId: "4.4", recto: "À quoi sert une médiation thérapeutique ?", verso: "Élément tiers qui met de la distance pour favoriser dialogue, symbolisation et expression de soi, dans un cadre soignant." },
  { ueId: "4.4", recto: "Auteurs clés de la médiation (cadre/enveloppe) ?", verso: "Winnicott (espace transitionnel), Bion (fonction alpha, rêverie), Anzieu (moi-peau, enveloppes)." },
];
