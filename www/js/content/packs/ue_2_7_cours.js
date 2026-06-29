export const fiches = [
  { id: "fco_2_7_hta", ueId: "2.7", type: "cours",
    titre: "Hypertension artérielle : physiopathologie, diagnostic et atteintes d'organes",
    resume: "L'HTA est une maladie multifactorielle et systémique qui retentit sur le cœur, le rein, le cerveau et les vaisseaux.",
    tags: ["d'après tes cours","HTA","pression artérielle","risque cardiovasculaire"],
    html: `<p>La <span class="key" data-term="PAS">pression artérielle systolique (PAS)</span> est la pression exercée sur les parois artérielles lors de la systole ; la <span class="key" data-term="PAD">pression artérielle diastolique (PAD)</span> est celle restituée par l'aorte et les gros vaisseaux en diastole. Le <strong>débit cardiaque (QC) = VES × FC</strong>.</p>
<h3>Régulation de la PA</h3>
<ul>
<li><strong>Court terme</strong> : baroréflexe carotidien.</li>
<li><strong>Moyen / long terme</strong> (hormonal) : sécrétion médullosurrénale (adrénaline + noradrénaline), système rénine-angiotensine, vasopressine, peptide atrial natriurétique.</li>
</ul>
<p>Exemple de l'orthostatisme : le changement de position induit une diminution de précharge (perte de volume sanguin vers les jambes) → diminution du retour veineux → diminution du QC → diminution de la PA.</p>
<h3>Diagnostic : mesure de la PA</h3>
<ul>
<li>Repos depuis ≥ 5 min, > 30 min après tabac/café, hors douleur, bras dénudé au niveau du cœur.</li>
<li>Brassard de taille adaptée (trop petit = surestimation, trop grand = sous-estimation).</li>
<li>Mesure sur les 2 bras (retenir le bras le plus haut).</li>
<li><span class="key" data-term="AMT">Automesure (AMT)</span> et <span class="key" data-term="MAPA">MAPA/24h</span> plus performantes pour évaluer l'équilibre tensionnel ; la MAPA précise le rythme circadien (patient ronfleur/SAOS).</li>
<li><strong>Règle des 3</strong> : 3 mesures le matin, le midi et le soir, 3 jours de suite.</li>
</ul>
<p>Pièges : <span class="key" data-term="HTA blouse blanche">HTA blouse blanche</span> (20-45 %, sujet âgé), <span class="key" data-term="HTA masquée">HTA masquée</span> (10-40 %, patient jeune), HTA « non dipper » (baisse < 10 % la nuit, liée aux troubles du sommeil).</p>
<h3>Étiologies</h3>
<p>HTA le plus souvent essentielle et multifactorielle (cœur, rein, cerveau, génétique, sel, tabac). Causes secondaires : HTA réno-vasculaire (athéromateuse / fibrodysplasique), hyperaldostéronisme primaire, phéochromocytome, syndrome de Cushing.</p>
<h3>Atteintes d'organes</h3>
<table class="tbl">
<tr><th>Organe</th><th>Conséquences</th></tr>
<tr><td>Cœur</td><td>↑ post-charge → hypertrophie ventriculaire gauche → dysfonction diastolique puis systolique ; insuffisance cardiaque, troubles du rythme, mort subite.</td></tr>
<tr><td>Cerveau / œil</td><td>AVC ischémique/hémorragique, AIT, démence « vasculaire », rétinopathie. Traiter tôt protège le cerveau.</td></tr>
<tr><td>Rein</td><td>2ᵉ cause d'IRC après le diabète ; néphro-angiosclérose. Privilégier IEC/ARA II (néphroprotecteurs).</td></tr>
<tr><td>Vaisseaux</td><td>1ᵉʳ facteur de risque coronaire, principal facteur d'AVC, risque d'anévrisme aortique.</td></tr>
</table>
<div class="callout"><div class="callout-t">À retenir</div>HTA grade III + atteinte d'organe aiguë = <strong>URGENCE VITALE</strong> : OAP/infarctus (dérivé nitré), AVC/encéphalopathie, IRA, dissection aortique (inhibiteur calcique), prééclampsie/éclampsie/HELLP.</div>`,
    refs: ["D'après tes cours (UE 2.7)"] },

  { id: "fco_2_7_hta_traitement", ueId: "2.7", type: "cours",
    titre: "HTA : traitement et objectifs tensionnels",
    resume: "La prise en charge associe des mesures hygiéno-diététiques et un traitement médicamenteux adapté au profil du patient.",
    tags: ["d'après tes cours","HTA","traitement","MHD"],
    html: `<h3>Mesures non médicamenteuses (hygiéno-diététiques)</h3>
<ul>
<li>Alimentation équilibrée (5 fruits/légumes, poisson 2-3×/sem, éviter graisses animales, Nutri-Score).</li>
<li>Activité physique ≥ 30 min, idéalement chaque jour.</li>
<li>Limiter le sel à <strong>6-8 g/jour</strong> (pas de salière, éviter plats préparés/charcuterie/fromage) — mais le régime sans sel strict est dangereux.</li>
<li>Arrêt du tabac, modération de l'alcool (≤ 10 verres/sem, ≤ 2/jour), gestion du stress, sommeil régulier.</li>
</ul>
<h3>Traitement médicamenteux</h3>
<ul>
<li>Bloqueurs du SRA : IEC (Ramipril, Périndopril, Lisinopril) ou ARA II (Valsartan, Irbésartan).</li>
<li>Inhibiteur calcique (Amlodipine).</li>
<li>Diurétique thiazidique (Esidrex).</li>
<li>En cas de résistance : vérifier l'observance, anti-aldostérone (antagoniste des récepteurs minéralocorticoïdes), antihypertenseurs centraux, dénervation rénale.</li>
</ul>
<h3>Objectifs tensionnels</h3>
<ul>
<li>Borne inférieure commune : PA > 120/70 mmHg (sinon sur-risque d'HTO et d'insuffisance rénale).</li>
<li>Objectif général : PA < 135/85 mmHg (AMT) ou < 140/90 mmHg (cabinet).</li>
<li>Sujet âgé > 80 ans et/ou fragile et/ou HTO : PAS 145-150 mmHg.</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Ne jamais oublier ni les mesures d'hygiène de vie, ni le traitement médicamenteux, ni les autres facteurs de risque cardiovasculaire. Attention à l'inertie médicale.</div>`,
    refs: ["D'après tes cours (UE 2.7)"] },

  { id: "fco_2_7_insuffisance_cardiaque", ueId: "2.7", type: "cours",
    titre: "Insuffisance cardiaque : physiologie, symptômes et étiologies",
    resume: "Débit cardiaque insuffisant et/ou pression intracardiaque élevée, donnant un syndrome congestif gauche et/ou droit.",
    tags: ["d'après tes cours","insuffisance cardiaque","EPOF","OAP"],
    html: `<h3>Déterminants du débit cardiaque</h3>
<p><strong>QC = VES × FC</strong>. Le VES dépend de la <span class="key" data-term="précharge">précharge</span> (VTD, retour veineux, compliance), de l'<span class="key" data-term="inotropisme">inotropisme</span> (capacité contractile) et de la <span class="key" data-term="post-charge">post-charge</span> (pression s'opposant à l'éjection).</p>
<ul>
<li>Excès de précharge → dilatation cavitaire.</li>
<li>Excès de post-charge → hypertrophie pariétale.</li>
<li>Plus la post-charge augmente, plus le VES (contractilité) diminue.</li>
</ul>
<h3>Définition</h3>
<p>Débit cardiaque insuffisant au repos ou à l'effort, et/ou augmentation des pressions intracardiaques, liée à des anomalies de structure ou de fonction.</p>
<table class="tbl">
<tr><th>Type</th><th>Signes</th></tr>
<tr><td>IC gauche</td><td>Congestion pulmonaire (OAP), dyspnée.</td></tr>
<tr><td>IC droite</td><td>OMI, turgescence jugulaire / reflux hépato-jugulaire, hépatalgie, ascite.</td></tr>
</table>
<p>En aigu : hypoperfusion d'organe (insuffisance rénale, hépatique, troubles de vigilance). Mécanismes adaptatifs : activation sympathique et du SRA (effet délétère : ↑ conso O₂ et post-charge), catabolisme musculaire, inflammation.</p>
<h3>Étiologies</h3>
<ul>
<li>Cardiopathie ischémique, cardiopathie post-hypertensive (dysfonction diastolique puis systolique).</li>
<li>Toxiques : alcool +++ (toxicité directe), cocaïne, amphétamines.</li>
<li>Valvulopathies : rétrécissement aortique (1ʳᵉ valvulopathie, sujet âgé, TAVI après 75 ans), insuffisance mitrale, insuffisance/rétrécissement aortique, insuffisance tricuspide.</li>
<li>Cardiopathie rythmique (FA soutenue → récupération possible après réduction), cardiomyopathies dilatée/hypertrophique.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>EPOF</strong> = Essoufflement, Prise de Poids, Œdèmes des membres inférieurs, Fatigue.</div>`,
    refs: ["D'après tes cours (UE 2.7)"] },

  { id: "fco_2_7_ic_urgence", ueId: "2.7", type: "cours",
    titre: "Décompensation cardiaque aiguë, OAP et choc cardiogénique",
    resume: "L'urgence évalue la congestion (OAP) et la gravité (hypoperfusion / choc) et recherche la cause déclenchante.",
    tags: ["d'après tes cours","OAP","choc cardiogénique","urgence"],
    html: `<h3>L'OAP (œdème aigu du poumon)</h3>
<p>Présence de liquide dans les poumons. <strong>Signes cliniques</strong> : détresse respiratoire, toux et expectoration mousseuse, râles crépitants, cyanose, sueurs, agitation, angoisse, tachycardie, douleur thoracique. Le patient dort/se met semi-assis pour mieux respirer.</p>
<h3>Évaluer la gravité (hypoperfusion d'organe)</h3>
<ul>
<li><strong>Cliniquement</strong> : PAS < 90 mmHg, oligurie < 30 ml/h, confusion/agitation/coma, marbrures (étendue pronostique).</li>
<li><strong>Biologiquement</strong> : hyperlactatémie, insuffisance rénale aiguë (créatinine), insuffisance hépatique (TP).</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div><span class="key" data-term="choc cardiogénique">Choc cardiogénique</span> = bas débit + signes clinico-biologiques d'hypoperfusion. Urgence vitale.</div>
<h3>Identifier rapidement la cause</h3>
<ul>
<li>Coronaropathie aiguë (SCA/infarctus) : ECG, troponine.</li>
<li>HTA aiguë (PAS > 180 mmHg), arythmie (ECG).</li>
<li>Cause valvulaire aiguë (IM ischémique/infectieuse, IA sur dissection).</li>
<li>Infection respiratoire (fièvre, radiographie), embolie pulmonaire.</li>
</ul>
<h3>Surveillances et actions IDE (d'après le TD)</h3>
<ul>
<li>Position demi-assise, surveillance du poids et de la diurèse.</li>
<li>Surveillance TA, pouls, FR, SpO₂ sous scope ; ionogramme quotidien (kaliémie, natrémie, fonction rénale sous Furosémide).</li>
<li>Régime pauvre en sel, restriction hydrique pour réduire la surcharge.</li>
<li>Examens : ECG, radio pulmonaire (cardiomégalie, congestion), échographie cardiaque ; biologie : troponine, BNP/NT-proBNP (marqueur d'IC), iono, urée/créatinine, NFS, BGA.</li>
</ul>`,
    refs: ["D'après tes cours (UE 2.7)"] },

  { id: "fco_2_7_diabete_physio", ueId: "2.7", type: "cours",
    titre: "Le diabète : définition, physiologie et les deux types",
    resume: "Hyperglycémie chronique liée à un déficit (type 1) ou à une résistance (type 2) à l'insuline.",
    tags: ["d'après tes cours","diabète","insuline","glycémie"],
    html: `<h3>Définition</h3>
<p>Maladie chronique caractérisée par un taux de sucre trop élevé dans le sang (<span class="key" data-term="hyperglycémie">hyperglycémie</span>). Le diabète est défini par :</p>
<ul>
<li>Glycémie à jeun > 1,26 g/L (> 7 mmol/L), contrôlée à 2 reprises, en situation normale ;</li>
<li>OU glycémie > 2 g/L à n'importe quel moment.</li>
</ul>
<p>Glycémie normale à jeun = 0,50 à 1,10 g/L. Intolérance au glucose = 1,10 à 1,26 g/L.</p>
<h3>Physiologie</h3>
<p>Le glucose est le substrat énergétique de toutes les cellules. Deux sources : <strong>endogène</strong> (du soir au matin, néoglucogénèse hépatique) et <strong>exogène</strong> (le jour, glucides alimentaires). L'insuline est nécessaire pour que le glucose entre dans les cellules.</p>
<table class="tbl">
<tr><th>Hormone</th><th>Origine</th><th>Action</th></tr>
<tr><td><span class="key" data-term="insuline">Insuline</span></td><td>Cellules β des îlots de Langerhans</td><td>Hypoglycémiante : fait entrer le glucose, favorise le stockage (glycogénogénèse, lipogénèse), diminue la production hépatique.</td></tr>
<tr><td><span class="key" data-term="glucagon">Glucagon</span></td><td>Cellules α des îlots de Langerhans</td><td>Hyperglycémiante : mobilise le glycogène (glycogénolyse), augmente la production hépatique.</td></tr>
</table>
<h3>Type 1 vs Type 2</h3>
<table class="tbl">
<tr><th></th><th>Diabète de type 1</th><th>Diabète de type 2</th></tr>
<tr><td>Cause</td><td>Destruction auto-immune des cellules β = déficit en insuline</td><td>Résistance à l'insuline (hérédité, sédentarité, alimentation, obésité abdominale)</td></tr>
<tr><td>Terrain</td><td>Enfants et jeunes adultes < 25 ans</td><td>Adulte, souvent silencieux, découverte fortuite</td></tr>
<tr><td>Début</td><td>Brutal, insuline vitale</td><td>Progressif, parfois au stade des complications</td></tr>
</table>
<h3>Symptômes (au-delà de 2,50 g/L)</h3>
<p>Asthénie, polyurie, polydipsie (+ amaigrissement dans le type 1). Jamais de complications vasculaires au diagnostic du type 1 (maladie récente).</p>`,
    refs: ["D'après tes cours (UE 2.7)"] },

  { id: "fco_2_7_diabete_aigues", ueId: "2.7", type: "cours",
    titre: "Complications aiguës du diabète : hypoglycémie, acidocétose, coma hyperosmolaire",
    resume: "Trois urgences métaboliques : l'hypoglycémie iatrogène, l'acidocétose (type 1) et la décompensation hyperosmolaire (type 2 fragile).",
    tags: ["d'après tes cours","hypoglycémie","acidocétose","resucrage"],
    html: `<h3>Hypoglycémie</h3>
<p>Toujours iatrogène chez le diabétique (insuline, sulfamides hypoglycémiants type Diamicron/Daonil/Amarel, glinides type Novonorm). Seuil < 0,70 g/L (< 1 g/L chez le patient fragile).</p>
<p><strong>Signes</strong> : faim impérieuse, sueurs, tremblements, palpitations, troubles de la vue, fatigue soudaine, troubles de l'humeur/du langage, pâleur, désorientation, somnolence. La nuit : cauchemars, agitation, céphalées au réveil.</p>
<div class="callout"><div class="callout-t">À retenir</div>En cas d'hypoglycémie : cesser l'activité, contrôler la glycémie, <strong>resucrer</strong> (15 g de sucre ↑ la glycémie de 0,50 g/L), recontrôler à 15 min puis à 1-2 h. <strong>Trouble de la conscience</strong> : ne pas faire avaler de sucre ; si sous insuline → Glucagon (désormais en spray nasal), puis resucrer per os au réveil. Avoir toujours sur soi ≥ 3 sucres.</div>
<p>Aliments inadaptés au resucrage : boissons light, fromage/laitage, chocolat, biscuits, bonbons à sucer, bière/alcool sucrés.</p>
<h3>Acidocétose</h3>
<p>Carence complète et prolongée en insuline : lyse des graisses → libération de corps cétoniques. Surtout type 1 (« oubli » d'insuline ou avant diagnostic), rarement type 2. Symptômes : fatigue, nausées, douleurs abdominales, céphalées, coma, convulsions, haleine de « pomme pourrie ». <strong>Y penser dès glycémie > 2,50 g/L.</strong> Traitement : insuline IV fortes doses + réhydratation IV.</p>
<h3>Décompensation hyperosmolaire</h3>
<p>Hyperglycémie prolongée du type 2 fragile (âgé, soif diminuée) → polyurie → déshydratation → aggravation. Aboutit à un coma calme, insuffisance rénale. Facteurs favorisants : âge, diurétiques. Traitement : réhydratation + insulinothérapie. <strong>Mortalité ≈ 25 %.</strong></p>`,
    refs: ["D'après tes cours (UE 2.7)"] },

  { id: "fco_2_7_diabete_degeneratives", ueId: "2.7", type: "cours",
    titre: "Complications dégénératives du diabète et pied diabétique",
    resume: "L'HbA1c reflète l'équilibre ; les complications micro et macrovasculaires culminent dans le pied diabétique.",
    tags: ["d'après tes cours","HbA1c","pied diabétique","neuropathie"],
    html: `<h3>Hémoglobine glyquée (HbA1c)</h3>
<p>Pourcentage d'hémoglobine glyquée ; reflète l'équilibre du diabète sur les <strong>3 mois précédents</strong> (durée de vie de l'Hb). C'est LE critère de suivi.</p>
<ul>
<li>Normale < 6 % ; objectif général < 7 %.</li>
<li>Plus strict (6,5 %) : sujet jeune, diabète récent, grossesse.</li>
<li>Plus large (7,5-8 %) : sujet âgé, terrain fragile.</li>
</ul>
<p>+1 % d'HbA1c = +25 % de complications à 5 ans. « Ne se complique que le diabète mal équilibré chronique. »</p>
<h3>Complications macro et microvasculaires</h3>
<ul>
<li><strong>Macro</strong> : 1ʳᵉ cause de décès du DT2 ; 20 % des AVC et 25 % des infarctus surviennent chez des diabétiques.</li>
<li><strong>Micro</strong> : 1ʳᵉ cause de cécité (rétinopathie), 1ʳᵉ cause d'amputation des MI, 1ʳᵉ cause de dialyse (néphropathie).</li>
</ul>
<h3>Bilan annuel</h3>
<p>Fond d'œil, palpation des pouls + auscultation (artériopathie), examen neuro des pieds (monofilament), ECG, examen buccodentaire, bilan sanguin (fonction rénale, lipides), micro-albuminurie. HbA1c tous les 3 mois.</p>
<h3>Le pied diabétique</h3>
<p>La <span class="key" data-term="neuropathie diabétique">neuropathie diabétique</span> est le centre du problème (présente dans 70 % des plaies). Microangiopathie des nerfs (dès 5 ans de diabète mal équilibré). Conséquences : pas de sensation du conflit ni de la plaie, troubles de l'équilibre, déformations, retard de consultation.</p>
<p>L'<strong>artériopathie</strong> (18 %) ne crée pas la plaie mais retarde la cicatrisation (risque d'amputation × 20). L'<strong>infection</strong> est un facteur de gravité. Diagnostic neuropathie : monofilament 10 g, diapason/vibratip, test chaud/froid.</p>
<div class="callout"><div class="callout-t">À retenir</div>L'origine de la plaie est quasi toujours traumatique et évitable (chaussure, hyperkératose, ongles, brûlure, mycose). <strong>Plaie non déchargée = plaie non soignée.</strong> Rôle IDE : Information, Éducation, Surveillance, Soins.</div>`,
    refs: ["D'après tes cours (UE 2.7)"] },

  { id: "fco_2_7_diabete_traitements", ueId: "2.7", type: "cours",
    titre: "Traitements du diabète : antidiabétiques et insulinothérapie",
    resume: "Diététique et activité physique d'abord, puis antidiabétiques oraux/injectables et insuline selon le type et l'équilibre.",
    tags: ["d'après tes cours","metformine","insuline","antidiabétiques"],
    html: `<h3>Diabète de type 2 : règles de base</h3>
<ul>
<li>Activité physique ≥ 30 min, ≥ 3×/semaine (lutte contre l'insulinorésistance).</li>
<li>Rééquilibrage alimentaire : limiter les graisses péri-viscérales, contrôler les apports glucidiques, pas de grignotage, réduire les sucres rapides à index glycémique élevé.</li>
</ul>
<h3>Antidiabétiques</h3>
<table class="tbl">
<tr><th>Classe</th><th>Action / particularités</th></tr>
<tr><td>Biguanides (Metformine, Glucophage, Stagid)</td><td>Insulinosensibilisateur (hépatique), 1ʳᵉ intention, pas d'hypo, fait perdre du poids. CI : insuffisance rénale/hépatique/cardiaque/respiratoire. Risque rare d'acidose lactique.</td></tr>
<tr><td>Sulfamides / glinides (Diamicron, Amarel, Daonil, Novonorm)</td><td>Insulinosécréteurs, hypoglycémies fréquentes, épuisent le pancréas. Ne pas prendre sans repas.</td></tr>
<tr><td>Analogues GLP-1 (Trulicity, Ozempic)</td><td>Insulinosécréteurs, puissants, perte de poids, sans hypo, protecteurs cardiovasculaires ; 1 injection SC hebdomadaire, chers.</td></tr>
<tr><td>Inhibiteurs DPP-IV (Januvia, Xelevia, Galvus)</td><td>Pas d'hypo, efficacité modeste, chers.</td></tr>
<tr><td>Inhibiteurs SGLT2</td><td>↑ élimination urinaire du glucose ; ↓ glycémie, poids, TA ; protègent cœur et rein. Risque d'infection urinaire/mycose.</td></tr>
</table>
<h3>Insulinothérapie</h3>
<p>L'insuline sert à « couvrir » la glycémie.</p>
<ul>
<li><strong>Rapides</strong> : Novorapid, Humalog, Apidra (début 15 min, efficacité 4 h).</li>
<li><strong>Lentes / basales</strong> : Lantus, Abasaglar, Toujeo (24 h), Levemir (12-18 h, évite l'hypo nocturne).</li>
<li><strong>Intermédiaire NPH</strong> : Insulatard, Umuline (≈ 12 h).</li>
<li><strong>Mélanges (mix)</strong> : Novomix, Humalog mix (le chiffre = % de rapide).</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Schémas : 1 injection (basale + ADO), 2 injections (intermédiaires ou basal-plus), 3 injections, ou 4 injections / basal-bolus (1 lente + 3 rapides) pour les type 1. Surveillance : lipodystrophie si injections au même endroit.</div>`,
    refs: ["D'après tes cours (UE 2.7)"] },

  { id: "fco_2_7_insuline_adaptation", ueId: "2.7", type: "cours",
    titre: "Insuline : objectifs glycémiques et adaptation des doses",
    resume: "On adapte les doses sur la glycémie en fin d'action de chaque insuline, selon 4 principes.",
    tags: ["d'après tes cours","insuline","adaptation des doses","objectifs glycémiques"],
    html: `<h3>Objectifs glycémiques</h3>
<table class="tbl">
<tr><th>Profil</th><th>À jeun / avant repas</th><th>Post-prandial (2 h)</th></tr>
<tr><td>La plupart des patients</td><td>0,70-1,30 g/L</td><td>< 1,60 g/L</td></tr>
<tr><td>Patient fragile</td><td>1 à 1,50 g/L</td><td>< 2,20 g/L</td></tr>
<tr><td>Fin de vie (confort)</td><td>1,20 à 2,20 g/L</td><td>—</td></tr>
<tr><td>Femme enceinte</td><td>0,60 à 0,95 g/L</td><td>< 1,20 g/L</td></tr>
</table>
<h3>Glycémie de référence selon l'insuline</h3>
<ul>
<li>Insuline <strong>lente</strong> (basale) : évaluée sur la glycémie à jeun / au réveil.</li>
<li>Insuline <strong>rapide</strong> : sur la glycémie après les repas.</li>
<li>Insulines <strong>mix / semi-lentes</strong> : sur la glycémie à 12 h.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div><strong>4 principes d'adaptation :</strong> 1) on évalue sur la glycémie en fin d'action ; 2) hypo → diminuer l'insuline responsable dès le lendemain ; 3) si hypo ET hyper sur la même insuline, on s'occupe de l'hypo en priorité (on diminue) ; 4) on module de 1 UI si dose < 20 UI, de 2 UI au-delà. <strong>Attendre 2-3 jours d'hyper avant d'augmenter.</strong></div>
<p>La pompe externe délivre une insuline rapide en continu (débit de base, remplace la lente) + des bolus aux repas. Le FreeStyle mesure le liquide interstitiel : pas toujours fiable pour les hypo/hyper.</p>`,
    refs: ["D'après tes cours (UE 2.7)"] },

  { id: "fco_2_7_insuffisance_renale", ueId: "2.7", type: "cours",
    titre: "Insuffisance rénale aiguë et chronique : fonctions du rein et complications",
    resume: "L'IRA est une baisse brutale réversible du DFG ; l'IRC est progressive et irréversible avec des complications systémiques.",
    tags: ["d'après tes cours","insuffisance rénale","DFG","néphroprotection"],
    html: `<h3>Les 5 grandes fonctions du rein</h3>
<ul>
<li>Élimination de l'eau ;</li>
<li>Contrôle de la TA (système rénine-angiotensine-aldostérone, SRAA) ;</li>
<li>Rôle sur la calcification des os (activation de la vitamine D) ;</li>
<li>Épuration des déchets et équilibre des ions ;</li>
<li>Stimulation de la production des globules rouges (EPO).</li>
</ul>
<p>Diagnostic biologique : créatinine (filtrée, non réabsorbée) — F 40-80, H 70-110 µmol/L. La <span class="key" data-term="clairance">clairance</span> estime le <span class="key" data-term="DFG">débit de filtration glomérulaire (DFG)</span>.</p>
<h3>IRA (aiguë)</h3>
<p>Baisse brutale du DFG, <strong>réversible</strong> ; oligurie et créatinine ≥ 1,5× la valeur de base.</p>
<table class="tbl">
<tr><th>Cause</th><th>Traitement</th></tr>
<tr><td>Obstructive (prostate, fécalome)</td><td>Drainer les urines (sonde, JJ, néphrostomie). Attention au syndrome de levée d'obstacle.</td></tr>
<tr><td>Fonctionnelle</td><td>Hydrater (avec du sel, pas de G5) + traiter la cause.</td></tr>
<tr><td>Organique</td><td>Centre spécialisé de néphrologie. Prévention +++ (éviter néphrotoxiques, surveiller le poids).</td></tr>
</table>
<h3>IRC (chronique)</h3>
<p>Baisse progressive et <strong>irréversible</strong> du DFG (destruction des néphrons), longtemps asymptomatique. Complications liées aux fonctions du rein :</p>
<ul>
<li>Rétention hydrosodée → œdèmes, prise de poids, dyspnée, HTA.</li>
<li>Carence en vitamine D → hypocalcémie, hyperparathyroïdie, ostéoporose.</li>
<li>Anémie (défaut d'EPO) → asthénie, dyspnée.</li>
<li>Syndrome urémique, hyperkaliémie et hypocalcémie (troubles du rythme), hyperphosphorémie, acidose métabolique.</li>
<li>Risques infectieux, cardiovasculaire et social majorés.</li>
</ul>
<p>Causes : obstructives, organiques (glomérulaires, vasculaires : HTA/diabète, tubulo-interstitielles) et génétiques (polykystose, syndrome d'Alport avec surdité).</p>
<div class="callout"><div class="callout-t">À retenir</div>Néphroprotection : alimentation pauvre en sel/sucres rapides, activité physique, suivi régulier, <strong>pas d'automédication (AINS)</strong>, contrôle HTA (IEC/ARA II), correction de l'acidose, de l'hyperkaliémie, de l'anémie (fer/EPO) et du calcium.</div>`,
    refs: ["D'après tes cours (UE 2.7)"] },

  { id: "fco_2_7_dialyse_greffe", ueId: "2.7", type: "cours",
    titre: "Traitements substitutifs : dialyse, fistule et transplantation rénale",
    resume: "Hémodialyse, dialyse péritonéale ou greffe remplacent le rein sans le guérir ; la fistule impose des précautions strictes.",
    tags: ["d'après tes cours","dialyse","fistule","greffe rénale"],
    html: `<p>Les traitements substitutifs remplacent le rein défaillant mais ne guérissent pas (un rein ne se guérit pas).</p>
<h3>Hémodialyse (3×/semaine)</h3>
<p>Accès au sang par cathéter veineux central (faute de mieux) ou, idéalement, par <span class="key" data-term="fistule artério-veineuse">fistule artério-veineuse</span> (union artère-veine pour faire grossir la veine).</p>
<div class="callout"><div class="callout-t">À retenir</div>Sur le bras porteur de la fistule : <strong>pas de prise de TA ni de prélèvement sanguin</strong>. Vérifier le <span class="key" data-term="thrill">thrill</span> (vibration au toucher), surveiller cicatrisation, hématome, rougeur, chaleur. Conseils : manches longues, pas de montre/bracelet, pas d'appui ni de port de charge lourde, pas d'exposition au soleil.</div>
<h3>Dialyse péritonéale (3-4×/jour, à domicile)</h3>
<p>Utilise le péritoine comme membrane de filtration. Phases : injection (poche de liquide d'eau sucrée → attention au diabétique), stase (4-5 h), drainage. DPCA (manuelle) ou DPA (automatisée).</p>
<h3>Transplantation rénale</h3>
<p>Seul moyen de restaurer une fonction rénale correcte ; améliore survie et qualité de vie. Greffon ajouté dans la fosse iliaque (on ne touche pas aux reins d'origine). Donneur vivant ou décédé (mort cérébrale). Durée de vie moyenne d'un greffon ≈ 15 ans. Risques : chirurgical à court terme (surtout si obèse), infectieux et carcinologique à long terme (traitement antirejet).</p>`,
    refs: ["D'après tes cours (UE 2.7)"] },

  { id: "fco_2_7_endocrinologie", ueId: "2.7", type: "cours",
    titre: "Endocrinologie pathologique : hypophyse, thyroïde, parathyroïde et surrénales",
    resume: "Les pathologies endocriniennes résultent d'un excès ou d'un défaut hormonal, d'origine centrale ou périphérique.",
    tags: ["d'après tes cours","endocrinologie","thyroïde","surrénales"],
    html: `<p>Le système endocrinien communique via des <strong>hormones</strong> produites par les glandes endocrines. La régulation se fait par rétrocontrôle des hormones périphériques sur les centres (hypothalamus / hypophyse).</p>
<h3>Hypophyse</h3>
<ul>
<li><strong>Adénome hypophysaire</strong> : tumeur bénigne (IRM) ; risque de dysfonction hormonale, d'excès de production, de compression du chiasma optique.</li>
<li><strong>Acromégalie</strong> : excès de GH/IGF-1 (diabète, HTA, prognathisme, mains/pieds élargis, canal carpien, IC).</li>
<li><strong>Prolactinome</strong> : aménorrhée, galactorrhée, baisse de libido, infertilité.</li>
<li>ADH (vasopressine) : réabsorption d'eau ; ocytocine : contractions utérines, allaitement.</li>
</ul>
<h3>Thyroïde</h3>
<p>Le dosage de la <span class="key" data-term="TSH">TSH</span> est très sensible. <strong>TSH basse = hyperthyroïdie ; TSH haute = hypothyroïdie.</strong></p>
<table class="tbl">
<tr><th></th><th>Hyperthyroïdie</th><th>Hypothyroïdie</th></tr>
<tr><td>Cause auto-immune fréquente</td><td>Maladie de Basedow (Ac anti-récepteur TSH)</td><td>Maladie d'Hashimoto (Ac anti-TPO)</td></tr>
<tr><td>Traitement</td><td>Repos ± bêtabloquants, antithyroïdiens de synthèse (surveiller NFS : agranulocytose), arrêt du tabac</td><td>Lévothyroxine (Levothyrox), adaptation sur la TSH à 6-8 semaines</td></tr>
</table>
<h3>Parathyroïde</h3>
<ul>
<li><strong>Hyperparathyroïdie</strong> : excès de PTH → hypercalcémie (asthénie, anorexie, constipation, lithiase, ostéoporose, ECG).</li>
<li><strong>Hypoparathyroïdie</strong> : défaut de PTH → hypocalcémie (paresthésies, crampes, ECG) ; traitement : calcium + vitamine D active (Un-Alfa).</li>
</ul>
<h3>Surrénales</h3>
<ul>
<li><strong>Cushing</strong> : excès de cortisol (centrale = maladie, périphérique = syndrome). Explorations : cortisol libre urinaire, cortisol salivaire à minuit, test de freinage à la dexaméthasone.</li>
<li><strong>Insuffisance surrénalienne</strong> : urgence vitale (troubles ioniques) ; traitement par hydrocortisone (à augmenter en cas de stress/infection/chirurgie) ± fludrocortisone. Test au Synacthène.</li>
<li><strong>Phéochromocytome</strong> : triade de Ménard (céphalées, sueurs, palpitations). <strong>Adénome de Conn</strong> : HTA + hypokaliémie.</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Le dosage de l'ACTH oriente l'origine : ACTH bas = atteinte centrale, ACTH haut = atteinte périphérique. Le traitement corrige l'excès (freinage / chirurgie) ou supplée l'hormone manquante.</div>`,
    refs: ["D'après tes cours (UE 2.7)"] },

  { id: "fco_2_7_troubles_neurocognitifs", ueId: "2.7", type: "cours",
    titre: "Troubles neurocognitifs, maladies neurodégénératives et confusion",
    resume: "Les TNC (mineurs ou majeurs) se distinguent de la confusion aiguë ; Alzheimer est la principale maladie neurodégénérative.",
    tags: ["d'après tes cours","Alzheimer","cognition","confusion"],
    html: `<h3>Fonctions cognitives</h3>
<p>Trois groupes : <strong>mémoire</strong> (travail, sémantique, épisodique) ; <strong>fonctions exécutives et attention</strong> (jugement, planification, inhibition) ; <strong>fonctions instrumentales</strong> (langage, calcul, gnosie, praxie, visuo-spatial).</p>
<p>Évaluation : MMSE (orientation, mémoire, instrumental), 5 mots de Dubois (mémoire épisodique), BREF (fonctions exécutives), MoCA (détection précoce). NB : dépistage ≠ diagnostic.</p>
<h3>Troubles neurocognitifs (TNC)</h3>
<p>« Mineurs » ou « majeurs » selon le retentissement sur l'<span class="key" data-term="autonomie instrumentale">autonomie instrumentale</span> (gérer son argent, le téléphone, ses traitements, ses déplacements). Diagnostic = faisceau d'arguments ; diagnostic certain seulement à l'examen neuropathologique.</p>
<p>L'<span class="key" data-term="anosognosie">anosognosie</span> (absence de reconnaissance de la maladie) est un symptôme neurologique, à différencier du déni (mécanisme de défense).</p>
<h3>Maladies neurodégénératives</h3>
<p>Accumulation de protéines anormales → mort neuronale. Les plus fréquentes :</p>
<ul>
<li><strong>Maladie d'Alzheimer</strong> : aggravation progressive, atteinte initiale de la mémoire, survie moyenne ≈ 8 ans.</li>
<li><strong>Maladie à corps de Lewy</strong> : fluctuations cognitives, syndrome parkinsonien, hallucinations visuelles, troubles du sommeil paradoxal.</li>
<li><strong>Dégénérescences lobaires fronto-temporales</strong> : troubles du comportement / du langage, mémoire au second plan.</li>
<li><strong>Troubles cognitifs vasculaires</strong> : AVC ou microvascularisation (âge + HTA + diabète), troubles dysexécutifs, évolution « en marches d'escalier ».</li>
</ul>
<h3>Confusion (syndrome confusionnel)</h3>
<p>Trouble de l'attention + de la vigilance + rupture avec l'état antérieur + fluctuation + désorientation. Toujours secondaire, d'apparition brutale, régressive. Étiologies : médicaments, infections, douleur, constipation, globe vésical… <strong>Le traitement de la confusion, c'est le traitement de la cause.</strong></p>
<div class="callout"><div class="callout-t">À retenir</div>Face aux troubles du comportement : « si un besoin n'est pas comblé, un trouble apparaît ». Privilégier : approuver, distraire, rassurer, guider, encourager — plutôt que raisonner, sermonner, forcer ou être condescendant.</div>`,
    refs: ["D'après tes cours (UE 2.7)"] },

  { id: "fco_2_7_parkinson_sep", ueId: "2.7", type: "cours",
    titre: "Maladie de Parkinson et sclérose en plaques",
    resume: "Deux maladies neurologiques chroniques : Parkinson (syndrome dopaminergique) et la SEP (démyélinisante auto-immune).",
    tags: ["d'après tes cours","Parkinson","sclérose en plaques","neurologie"],
    html: `<h3>Maladie de Parkinson</h3>
<p>Syndrome parkinsonien progressif, asymétrique, dopa-sensible, par mort neuronale dans la <span class="key" data-term="substance noire">substance noire</span> (corps de Lewy). Débute entre 55 et 65 ans, prédominance masculine.</p>
<p><strong>Triade motrice</strong> : akinésie (bradykinésie), hypertonie (raideur), tremblement de repos (asymétrique, augmenté par le stress, disparaît au sommeil), instabilité posturale.</p>
<p>Signes prémoteurs (stades 1-2 de Braak) : anosmie, troubles du sommeil paradoxal, constipation, dépression. Attitude : semi-fléchie, amimie, diminution du ballant des bras.</p>
<ul>
<li>Facteurs : vieillissement, pesticides/herbicides, génétique. Facteurs protecteurs : tabac, café, activité physique, ibuprofène.</li>
<li>Traitement : dopaminergiques (L-Dopa, agonistes, IMAO-B, ICOMT) ; complications de la dopathérapie = fluctuations motrices et dyskinésies. Apomorphine SC, Duodopa (gel dans le jéjunum), neurochirurgie (électrodes NST avant 65 ans). PEC multidisciplinaire (kiné, orthophonie).</li>
</ul>
<h3>Sclérose en plaques (SEP)</h3>
<p>Maladie inflammatoire, démyélinisante et neurodégénérative chronique du SNC, auto-immune. Touche l'adulte jeune, surtout les femmes.</p>
<p>Facteurs de risque : virus EBV, faible exposition solaire (carence en vitamine D), tabac, obésité de l'adolescence, allèle HLA-DR2 (susceptibilité, non héréditaire).</p>
<p>Une <span class="key" data-term="poussée">poussée</span> = symptômes nouveaux/réapparus durant ≥ 24 h, séparés d'au moins 30 jours. Diagnostic : dissémination spatiale et temporelle (clinique + IRM + LCS). Le <strong>phénomène d'Uhthoff</strong> (aggravation lors d'une fièvre/effort) n'est pas une poussée.</p>
<div class="callout"><div class="callout-t">À retenir</div>Traitement de la poussée : méthylprednisolone IV 500 mg-1 g en bolus, 3-5 jours (surveiller hypoK, troubles du rythme, HTA, déséquilibre d'un diabète). Traitements de fond (Tériflunomide, Natalizumab…) + symptomatiques. Évolution : phase rémittente puis secondaire progressive — d'où l'importance de traiter tôt.</div>`,
    refs: ["D'après tes cours (UE 2.7)"] },
];

export const qcm = [
  { ueId: "2.7", q: "Quelle est la formule du débit cardiaque (QC) ?", options: ["QC = VES + FC", "QC = VES × FC", "QC = PAS × PAD", "QC = FC / VES"], correct: 1,
    explication: "Le débit cardiaque est le produit du volume d'éjection systolique par la fréquence cardiaque (QC = VES × FC).", ref: "UE 2.7", diff: 1 },
  { ueId: "2.7", q: "Quelle est la limite recommandée de consommation de sel dans l'HTA ?", options: ["2-3 g/jour", "6-8 g/jour", "12-15 g/jour", "Régime sans sel strict"], correct: 1,
    explication: "On limite le sel à 6-8 g/jour ; le régime sans sel strict est dangereux.", ref: "UE 2.7", diff: 1 },
  { ueId: "2.7", q: "L'HTA provoque sur le cœur, par augmentation de la post-charge :", options: ["Une dilatation des oreillettes uniquement", "Une hypertrophie ventriculaire gauche", "Une diminution de la fréquence cardiaque", "Un rétrécissement aortique"], correct: 1,
    explication: "L'augmentation de la post-charge induit une hypertrophie ventriculaire gauche puis une dysfonction diastolique et systolique.", ref: "UE 2.7", diff: 2 },
  { ueId: "2.7", q: "Que signifie l'acronyme EPOF dans l'insuffisance cardiaque ?", options: ["Essoufflement, Prise de poids, Œdèmes, Fatigue", "Échographie, Pouls, OAP, Fièvre", "Effort, Précharge, Œdème, FC", "Embolie, Pneumonie, OMI, Frissons"], correct: 0,
    explication: "EPOF = Essoufflement, Prise de Poids, Œdèmes des membres inférieurs, Fatigue.", ref: "UE 2.7", diff: 1 },
  { ueId: "2.7", q: "Quel marqueur biologique est spécifique de l'insuffisance cardiaque ?", options: ["La troponine", "Le BNP (peptide natriurétique de type B)", "La CRP", "La créatinine"], correct: 1,
    explication: "Le BNP/NT-proBNP augmente dans l'insuffisance cardiaque ; la troponine signe la souffrance du myocarde (diagnostic différentiel).", ref: "UE 2.7", diff: 2 },
  { ueId: "2.7", q: "L'OAP correspond à :", options: ["Une obstruction artérielle pulmonaire", "Du liquide dans les poumons (congestion pulmonaire)", "Un œdème des membres inférieurs", "Un arrêt de la perfusion"], correct: 1,
    explication: "L'œdème aigu du poumon est l'accumulation de liquide dans les poumons, signe de congestion gauche.", ref: "UE 2.7", diff: 1 },
  { ueId: "2.7", q: "Le choc cardiogénique se définit par :", options: ["Une hypertension isolée", "Un bas débit avec signes d'hypoperfusion d'organe", "Une bradycardie sans symptôme", "Une fièvre élevée"], correct: 1,
    explication: "Le choc cardiogénique = bas débit cardiaque + signes clinico-biologiques d'hypoperfusion (PAS < 90, oligurie, marbrures, hyperlactatémie).", ref: "UE 2.7", diff: 2 },
  { ueId: "2.7", q: "Le diabète est défini par une glycémie à jeun supérieure à :", options: ["0,70 g/L", "1,10 g/L", "1,26 g/L", "2,50 g/L"], correct: 2,
    explication: "Glycémie à jeun > 1,26 g/L (> 7 mmol/L) contrôlée à 2 reprises, ou > 2 g/L à n'importe quel moment.", ref: "UE 2.7", diff: 1 },
  { ueId: "2.7", q: "L'insuline est sécrétée par :", options: ["Les cellules alpha des îlots de Langerhans", "Les cellules bêta des îlots de Langerhans", "Le foie", "Les surrénales"], correct: 1,
    explication: "L'insuline (hypoglycémiante) vient des cellules β ; le glucagon (hyperglycémiant) des cellules α.", ref: "UE 2.7", diff: 1 },
  { ueId: "2.7", q: "Quelle est la cause du diabète de type 1 ?", options: ["Résistance à l'insuline", "Destruction auto-immune des cellules bêta", "Excès d'activité physique", "Carence en glucagon"], correct: 1,
    explication: "Le DT1 résulte d'une destruction auto-immune des cellules β = déficit en insuline, d'où l'insuline vitale.", ref: "UE 2.7", diff: 1 },
  { ueId: "2.7", q: "Devant un trouble de la conscience chez un diabétique sous insuline, il faut :", options: ["Faire avaler du sucre rapidement", "Administrer du Glucagon (spray nasal possible)", "Injecter de l'insuline", "Donner de l'eau"], correct: 1,
    explication: "En cas de trouble de la conscience, ne pas faire avaler de sucre (risque de fausse route) ; administrer du Glucagon, puis resucrer per os au réveil.", ref: "UE 2.7", diff: 2 },
  { ueId: "2.7", q: "L'acidocétose diabétique doit être évoquée dès que la glycémie dépasse :", options: ["1,26 g/L", "1,60 g/L", "2,50 g/L", "5 g/L"], correct: 2,
    explication: "Y penser dès une glycémie > 2,50 g/L ; haleine de pomme pourrie, surtout chez le diabétique de type 1.", ref: "UE 2.7", diff: 2 },
  { ueId: "2.7", q: "L'hémoglobine glyquée (HbA1c) reflète l'équilibre du diabète sur :", options: ["Les 24 dernières heures", "La dernière semaine", "Les 3 mois précédents", "L'année écoulée"], correct: 2,
    explication: "L'HbA1c reflète l'équilibre sur 3 mois (durée de vie de l'hémoglobine) ; objectif général < 7 %.", ref: "UE 2.7", diff: 1 },
  { ueId: "2.7", q: "Quel est l'élément central du pied diabétique ?", options: ["L'artériopathie", "La neuropathie diabétique", "L'infection", "L'obésité"], correct: 1,
    explication: "La neuropathie diabétique est le centre du problème (présente dans 70 % des plaies) : absence de sensation du conflit et de la plaie.", ref: "UE 2.7", diff: 2 },
  { ueId: "2.7", q: "Pour soigner une plaie de pied diabétique, le geste impératif est :", options: ["La compression", "La décharge", "L'occlusion hermétique", "Le repos strict au lit"], correct: 1,
    explication: "« Plaie non déchargée = plaie non soignée » : la décharge est un impératif absolu.", ref: "UE 2.7", diff: 2 },
  { ueId: "2.7", q: "L'antidiabétique oral de 1ʳᵉ intention, insulinosensibilisateur, est :", options: ["Le Diamicron (sulfamide)", "La Metformine (biguanide)", "Le Novonorm (glinide)", "L'insuline lente"], correct: 1,
    explication: "La Metformine (biguanide) est l'antidiabétique de 1ʳᵉ intention, sans hypo, qui fait perdre du poids. CI : insuffisance rénale/hépatique/cardiaque.", ref: "UE 2.7", diff: 2 },
  { ueId: "2.7", q: "Dans l'adaptation des doses d'insuline, en cas d'hypo ET d'hyper liées à la même insuline :", options: ["On augmente la dose", "On s'occupe de l'hypo en priorité, on diminue la dose", "On ne change rien", "On change d'insuline"], correct: 1,
    explication: "Principe 3 : c'est l'hypo dont il faut s'occuper en priorité → on diminue la dose responsable.", ref: "UE 2.7", diff: 3 },
  { ueId: "2.7", q: "Quelle différence essentielle distingue l'IRA de l'IRC ?", options: ["L'IRA touche les hommes, l'IRC les femmes", "L'IRA est réversible, l'IRC est irréversible", "L'IRA est asymptomatique, l'IRC bruyante", "Aucune différence"], correct: 1,
    explication: "L'IRA est une baisse brutale et réversible du DFG ; l'IRC est progressive et irréversible (destruction des néphrons).", ref: "UE 2.7", diff: 1 },
  { ueId: "2.7", q: "Sur le bras porteur d'une fistule artério-veineuse, il est interdit de :", options: ["Faire bouger le bras", "Prendre la TA et faire des prélèvements sanguins", "Le laver", "Le surveiller"], correct: 1,
    explication: "Pas de prise de TA ni de prélèvement sur le bras de la fistule ; vérifier le thrill (vibration).", ref: "UE 2.7", diff: 1 },
  { ueId: "2.7", q: "L'anémie de l'insuffisance rénale chronique est due à :", options: ["Une carence en fer alimentaire", "Un défaut de production d'EPO par le rein", "Une hémorragie", "Un excès de vitamine D"], correct: 1,
    explication: "Le rein lésé ne produit plus d'EPO, donc moins de stimulation de la moelle → anémie (asthénie, dyspnée).", ref: "UE 2.7", diff: 2 },
  { ueId: "2.7", q: "Dans les dysthyroïdies, une TSH basse signe :", options: ["Une hypothyroïdie", "Une hyperthyroïdie", "Une thyroïde normale", "Un cancer de la thyroïde"], correct: 1,
    explication: "TSH basse = hyperthyroïdie ; TSH haute = hypothyroïdie (rétrocontrôle).", ref: "UE 2.7", diff: 2 },
  { ueId: "2.7", q: "La triade de Ménard évoque :", options: ["Un adénome de Conn", "Un phéochromocytome (céphalées, sueurs, palpitations)", "Une maladie de Basedow", "Un syndrome de Cushing"], correct: 1,
    explication: "La triade de Ménard (céphalées, sueurs, palpitations) oriente vers un phéochromocytome.", ref: "UE 2.7", diff: 3 },
  { ueId: "2.7", q: "Quelle affirmation distingue la confusion d'un trouble neurocognitif ?", options: ["La confusion est définitive", "La confusion est toujours secondaire, brutale et régressive", "La confusion n'altère jamais l'attention", "La confusion est héréditaire"], correct: 1,
    explication: "La confusion est toujours secondaire (cause somatique), d'apparition brutale et régressive dans la majorité des cas.", ref: "UE 2.7", diff: 2 },
  { ueId: "2.7", q: "Quelle est la triade motrice de la maladie de Parkinson ?", options: ["Akinésie, hypertonie, tremblement de repos", "Fièvre, sueurs, palpitations", "Anosmie, constipation, dépression", "Paresthésies, crampes, hypocalcémie"], correct: 0,
    explication: "La triade motrice associe akinésie (bradykinésie), hypertonie (raideur) et tremblement de repos, avec instabilité posturale.", ref: "UE 2.7", diff: 1 },
  { ueId: "2.7", q: "Le traitement d'une poussée de sclérose en plaques repose sur :", options: ["Des antibiotiques", "Des corticoïdes IV (méthylprednisolone en bolus)", "De l'insuline", "Une dialyse"], correct: 1,
    explication: "Méthylprednisolone IV 500 mg à 1 g en bolus, 3 à 5 jours ; surveiller hypoK, troubles du rythme, HTA, déséquilibre d'un diabète.", ref: "UE 2.7", diff: 2 },
];

export const flashcards = [
  { ueId: "2.7", recto: "Formule du débit cardiaque ?", verso: "QC = VES × FC (volume d'éjection systolique × fréquence cardiaque)." },
  { ueId: "2.7", recto: "Règle des 3 en automesure de la PA ?", verso: "3 mesures le matin, le midi et le soir, 3 jours de suite." },
  { ueId: "2.7", recto: "Limite de sel recommandée dans l'HTA ?", verso: "6 à 8 g/jour (jamais de régime sans sel strict)." },
  { ueId: "2.7", recto: "Que signifie EPOF ?", verso: "Essoufflement, Prise de poids, Œdèmes des membres inférieurs, Fatigue (symptômes d'IC)." },
  { ueId: "2.7", recto: "Signes d'IC droite ?", verso: "OMI, turgescence jugulaire / reflux hépato-jugulaire, hépatalgie, ascite." },
  { ueId: "2.7", recto: "Définition du choc cardiogénique ?", verso: "Bas débit cardiaque + signes clinico-biologiques d'hypoperfusion d'organe." },
  { ueId: "2.7", recto: "Glycémie à jeun définissant le diabète ?", verso: "> 1,26 g/L à 2 reprises (normale 0,50-1,10 g/L)." },
  { ueId: "2.7", recto: "Insuline vs glucagon : origine et effet ?", verso: "Insuline = cellules β, hypoglycémiante ; glucagon = cellules α, hyperglycémiante." },
  { ueId: "2.7", recto: "Différence DT1 / DT2 ?", verso: "DT1 = déficit en insuline (destruction auto-immune des cellules β) ; DT2 = résistance à l'insuline." },
  { ueId: "2.7", recto: "Comment resucrer une hypoglycémie ?", verso: "15 g de sucre (↑ la glycémie de 0,50 g/L), recontrôle à 15 min puis 1-2 h." },
  { ueId: "2.7", recto: "Seuil de glycémie pour évoquer une acidocétose ?", verso: "> 2,50 g/L (haleine de pomme pourrie, surtout DT1)." },
  { ueId: "2.7", recto: "Que reflète l'HbA1c ?", verso: "L'équilibre du diabète sur les 3 mois précédents (objectif général < 7 %)." },
  { ueId: "2.7", recto: "Quel test dépiste la neuropathie diabétique ?", verso: "Test au monofilament 10 g (+ diapason/vibratip, chaud/froid)." },
  { ueId: "2.7", recto: "Geste impératif pour une plaie de pied diabétique ?", verso: "La décharge : plaie non déchargée = plaie non soignée." },
  { ueId: "2.7", recto: "Antidiabétique de 1ʳᵉ intention ?", verso: "La Metformine (biguanide), insulinosensibilisateur, sans hypo." },
  { ueId: "2.7", recto: "Quelle insuline est évaluée sur la glycémie à jeun ?", verso: "L'insuline lente (basale) ; la rapide s'évalue sur les glycémies après les repas." },
  { ueId: "2.7", recto: "IRA vs IRC ?", verso: "IRA = baisse brutale et réversible du DFG ; IRC = baisse progressive et irréversible (destruction des néphrons)." },
  { ueId: "2.7", recto: "Les 5 grandes fonctions du rein ?", verso: "Élimination de l'eau, contrôle de la TA (SRAA), calcification des os (vit D), épuration des déchets/ions, production des GR (EPO)." },
  { ueId: "2.7", recto: "Précautions sur le bras d'une fistule AV ?", verso: "Pas de TA ni de prélèvement ; vérifier le thrill, manches longues, pas de charge lourde." },
  { ueId: "2.7", recto: "TSH basse / TSH haute ?", verso: "TSH basse = hyperthyroïdie ; TSH haute = hypothyroïdie." },
  { ueId: "2.7", recto: "Maladie auto-immune de l'hyperthyroïdie ? De l'hypothyroïdie ?", verso: "Hyper = maladie de Basedow (Ac anti-récepteur TSH) ; Hypo = maladie d'Hashimoto (Ac anti-TPO)." },
  { ueId: "2.7", recto: "Triade de Ménard ?", verso: "Céphalées, sueurs, palpitations → phéochromocytome." },
  { ueId: "2.7", recto: "3 caractéristiques de la confusion ?", verso: "Toujours secondaire, d'apparition brutale, régressive (≠ trouble neurocognitif)." },
  { ueId: "2.7", recto: "Triade motrice de Parkinson ?", verso: "Akinésie (bradykinésie), hypertonie (raideur), tremblement de repos (+ instabilité posturale)." },
  { ueId: "2.7", recto: "Qu'est-ce qu'une poussée de SEP ?", verso: "Symptômes nouveaux/réapparus durant ≥ 24 h, poussées séparées d'au moins 30 jours." },
  { ueId: "2.7", recto: "Traitement d'une poussée de SEP ?", verso: "Méthylprednisolone IV (500 mg-1 g) en bolus, 3 à 5 jours." },
];
