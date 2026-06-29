export const fiches = [
  { id: "fco_2_5_infections_cutanees", ueId: "2.5", type: "cours",
    titre: "Infections cutanées : érysipèle et fasciite nécrosante",
    resume: "La dermo-hypodermite bactérienne aiguë non nécrosante (érysipèle), sa porte d'entrée, son traitement et ses signes de gravité.",
    tags: ["d'après tes cours","érysipèle","infection cutanée"],
    html: `<h3>Érysipèle (dermo-hypodermite bactérienne aiguë non nécrosante)</h3>
<p>Atteint surtout le <strong>membre inférieur</strong> (90 % des cas), l'adulte de plus de 40 ans, rare chez l'enfant. Incidence 10 à 100 cas pour 100 000 habitants.</p>
<ul>
<li><strong>Facteurs de risque :</strong> lymphœdème chronique, insuffisance veineuse, obésité.</li>
<li><strong>Porte d'entrée :</strong> <span class="key" data-term="intertrigo">intertrigo</span> inter-digito-plantaire, ulcère de jambe, plaie.</li>
<li><strong>Bactériologie :</strong> <span class="key" data-term="streptocoque du groupe A">streptocoque du groupe A</span> essentiellement → traitement par amoxicilline.</li>
</ul>
<h3>Signes cliniques</h3>
<ul>
<li>Début brutal, grosse jambe rouge aiguë fébrile.</li>
<li>Placard inflammatoire œdémateux, douloureux et chaud.</li>
<li>Fièvre, frissons ; adénopathie satellite fréquente.</li>
<li>Porte d'entrée à rechercher systématiquement.</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Les <strong>AINS sont contre-indiqués</strong> dans l'érysipèle : ils favorisent l'évolution vers la fasciite nécrosante. Diagnostic avant tout clinique.</div>
<h3>Fasciite nécrosante (signe de gravité majeur)</h3>
<p>Nécrose de l'hypoderme et de l'aponévrose superficielle, puis du derme. Survient le plus souvent après 50 ans, sur terrain diabétique ou immunodéprimé. Facteur favorisant : <strong>AINS +++</strong>.</p>
<ul>
<li>Douleur intense, placards nécrotiques cutanés, crépitation neigeuse.</li>
<li>Mortalité élevée : prise en charge chirurgicale urgente.</li>
</ul>
<h3>Traitement et évolution de l'érysipèle</h3>
<ul>
<li>Antibiothérapie : pénicilline (per os : amoxicilline ; IV : péni G fortes doses), durée 7 jours (jusqu'à 21).</li>
<li>Si allergie péni (œdème de Quincke ou urticaire généralisée) : pyostacine ou dalacine.</li>
<li>Repos au lit relatif, traitement de la porte d'entrée (ex. éconazole local sur intertrigo).</li>
<li>Vérifier la vaccination antitétanique. Anticoagulant préventif non systématique.</li>
<li>Apyrexie en 72 h, évolution favorable en 8 à 10 jours. Risque de récidive.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« Grosse jambe rouge aiguë fébrile = érysipèle ; douleur intense + crépitation neigeuse = fasciite = chirurgie en urgence ».</div>`,
    refs: ["D'après tes cours (UE 2.5)"] },

  { id: "fco_2_5_clostridium_difficile", ueId: "2.5", type: "cours",
    titre: "Infection à Clostridium difficile (ICD)",
    resume: "Première cause de diarrhée nosocomiale, son mécanisme toxinogène, son diagnostic sur selles et les précautions contact spécifiques.",
    tags: ["d'après tes cours","Clostridium difficile","diarrhée nosocomiale"],
    html: `<h3>Généralités</h3>
<ul>
<li><strong>1ère cause de diarrhée nosocomiale</strong> chez l'adulte.</li>
<li>Bacille gram positif anaérobie <span class="key" data-term="toxinogène">toxinogène</span> : toxines A et B pathogènes.</li>
<li>Responsable de 15-25 % des diarrhées post-antibiotiques.</li>
<li>Contamination féco-orale (mains, environnement). <span class="key" data-term="spores">Spores</span> très résistantes dans l'environnement.</li>
<li>La pression de sélection des antibiotiques déséquilibre la flore intestinale et favorise la prolifération.</li>
</ul>
<h3>Facteurs de risque d'acquisition</h3>
<ul>
<li>Hospitalisation prolongée, administration d'antibiotiques, âge > 65 ans.</li>
<li>Ralentissement du transit, anti-acides, chirurgie gastro-intestinale.</li>
</ul>
<h3>Formes cliniques</h3>
<ul>
<li>Diarrhée simple post-antibiotique.</li>
<li><span class="key" data-term="colite pseudomembraneuse">Colite pseudomembraneuse</span> : risque de perforation, choc septique.</li>
<li>Récidives dans 20 % des cas.</li>
</ul>
<h3>Diagnostic et traitement</h3>
<p>Sur prélèvement de selles : test rapide (GDH), recherche de toxines A et B, culture.</p>
<ul>
<li>Métronidazole per os 500 mg x3/j pendant 10 j.</li>
<li>Vancomycine per os 250 mg x4 pendant 10 j.</li>
<li>Fidaxomicine 200 mg x2 (formes à risque de récidive).</li>
<li>Transplantation de flore fécale en cas de récidives multiples.</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Après retrait des gants : <strong>lavage simple des mains (élimine les spores) PUIS SHA (bactéries)</strong>. La SHA seule ne suffit pas car elle est inefficace sur les spores. Chambre nettoyée à l'eau de Javel.</div>
<h3>Prévention</h3>
<ul>
<li>Isolement en chambre seule, signalisation sur la porte, matériel à usage unique.</li>
<li>Précautions « contact » : surblouse à manches longues et gants à usage unique.</li>
<li>Signalement au service d'Hygiène si 2ème cas supplémentaire.</li>
</ul>`,
    refs: ["D'après tes cours (UE 2.5)"] },

  { id: "fco_2_5_infections_respiratoires", ueId: "2.5", type: "cours",
    titre: "Infections respiratoires : bronchites et pneumopathies",
    resume: "Bronchite aiguë virale du sujet sain, exacerbation de BPCO et pneumopathies (pneumocoque, atypiques, légionellose).",
    tags: ["d'après tes cours","bronchite","pneumopathie","légionellose"],
    html: `<h3>Bronchite aiguë</h3>
<ul>
<li>Sujet sain : <strong>toujours virale</strong> → abstention thérapeutique, pas d'antibiotique.</li>
<li>Toux sèche prolongée, brûlures thoraciques, expectoration muqueuse puis purulente, fièvre inconstante.</li>
<li>Toux prolongée : rechercher une <span class="key" data-term="coqueluche">coqueluche</span>. Fièvre > 3 jours : chercher une autre cause.</li>
</ul>
<h3>Exacerbation de BPCO</h3>
<p>La <span class="key" data-term="BPCO">BPCO</span> est une maladie inflammatoire avec obstruction des voies respiratoires ; principal facteur de risque = <strong>tabac</strong>. Diagnostic par EFR (4 stades). Toutes les exacerbations ne sont pas infectieuses (polluants, RGO).</p>
<table class="tbl">
<tr><th>Stade BPCO</th><th>Antibiothérapie</th></tr>
<tr><td>Stades 0 et 1</td><td>Pas d'antibiotique</td></tr>
<tr><td>Stade 2</td><td>Spectre étroit (ex. amoxicilline)</td></tr>
<tr><td>Stade 3</td><td>Spectre plus large (ex. amox + acide clavulanique)</td></tr>
</table>
<p>Durée 5 à 7 jours. Traitements associés : kiné respi, O2, bronchodilatateurs.</p>
<h3>Pneumopathies : agents et tableaux</h3>
<ul>
<li><span class="key" data-term="pneumocoque">Pneumocoque +++</span> : adulte > 40-45 ans, début brutal, fièvre élevée, foyer de crépitants systématisé, foyer alvéolaire radio. « Le pneumocoque tue ! » → amoxicilline.</li>
<li>Bactéries atypiques (Mycoplasma, Chlamydia pneumoniae) : adulte plus jeune, début progressif, fièvre peu élevée, syndrome interstitiel bilatéral → macrolides (ou cyclines).</li>
<li>Staphylocoque doré : > 75 ans, post-grippe.</li>
</ul>
<h3>Légionellose</h3>
<ul>
<li>Legionella pneumophila (bacille gram négatif), transmission par aérosolisation d'eau douce contaminée (clim, douches, spa). <strong>Pas de transmission interhumaine.</strong></li>
<li>Facteurs favorisants : tabac, âge, diabète, homme, immunodépression.</li>
<li>Signes respiratoires + extra-respiratoires (digestifs, neurologiques), hyponatrémie, hypophosphorémie, élévation des CPK.</li>
<li>Confirmation : <span class="key" data-term="antigénurie">antigénurie</span> légionelle, PCR. <strong>Déclaration obligatoire</strong>, mortalité 10-15 %.</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Antibiothérapie selon le tableau : alvéolaire (pneumocoque) = amoxicilline ; interstitiel (atypiques) = macrolides ; fausses routes = Augmentin. Les fluoroquinolones antipneumococciques ne sont pas en 1ère intention (risque écologique).</div>`,
    refs: ["D'après tes cours (UE 2.5)"] },

  { id: "fco_2_5_infections_urinaires", ueId: "2.5", type: "cours",
    titre: "Infections urinaires : BU, ECBU, cystite, pyélonéphrite, prostatite",
    resume: "Démarche diagnostique (BU, ECBU), distinction simple / à risque de complication et prise en charge selon le type d'infection.",
    tags: ["d'après tes cours","infection urinaire","BU","ECBU"],
    html: `<h3>Définitions et physiopathologie</h3>
<ul>
<li>IU <strong>simple</strong> = sans facteur de risque de complication. Toutes les autres sont à risque de complication, y compris la prostatite.</li>
<li>Voie <span class="key" data-term="rétrograde">rétrograde</span> : bactéries du périnée remontant par l'urètre. Voie hématogène : à partir d'un autre foyer.</li>
<li>Bactérie principale : <span class="key" data-term="Escherichia coli">Escherichia coli</span> (porteur de fimbriae/pili) ; Staphylococcus saprophyticus chez la femme jeune.</li>
</ul>
<h3>Bandelette urinaire (BU) et ECBU</h3>
<ul>
<li>BU : urine du 2ème jet, toilette préalable, récipient propre et sec (non stérile), lecture à température ambiante.</li>
<li><strong>BU négative pour leuco et nitrites → permet d'exclure l'IU.</strong> BU positive (leuco + nitrites) = excellente valeur d'orientation.</li>
<li>Faux négatifs : leucopénie (post-chimio) ; nitrites négatifs avec certaines bactéries.</li>
<li>ECBU : flacon stérile, examen direct (leucocyturie + bactériurie), culture 24 h + antibiogramme.</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div><span class="key" data-term="colonisation urinaire">Colonisation urinaire</span> (bactériurie asymptomatique) = ECBU positif SANS signe clinique = pas d'infection, pas d'antibiotique. Ne pas faire d'ECBU sur sonde en l'absence de signe clinique : toute sonde peut être colonisée.</div>
<h3>Cystite (uniquement chez la femme)</h3>
<ul>
<li>Cystite simple : BU, traitement probabiliste sans ECBU, dose unique (ex. uridose).</li>
<li>Cystite à risque de complication (> 65 ans avec comorbidités, anomalie de l'arbre urinaire, grossesse, > 75 ans, immunodépression, IRC) : ECBU systématique, pas de traitement court (≥ 5 jours).</li>
<li>Cystite récidivante : ≥ 4 épisodes/12 mois. Mesures préventives (hydratation > 1,5 L/j, mictions non retenues, transit, miction post-coïtale).</li>
</ul>
<h3>Pyélonéphrite (infection du rein)</h3>
<ul>
<li>Signes de cystite + fièvre + douleur de fosse lombaire. BU et ECBU dans tous les cas.</li>
<li>Échographie rénale et vésicale dans les 24 h si forme hyperalgique (recherche d'obstacle).</li>
<li>Traitement probabiliste : C3G injectable (ceftriaxone IV/IM) ou fluoroquinolone per os (lévofloxacine), ± amikacine si gravité/obstacle.</li>
<li>Durée 10 à 14 jours (7 jours si pyélo simple avec FQ ou ceftriaxone). Pas d'ECBU de contrôle si évolution favorable.</li>
</ul>
<h3>Prostatite (homme)</h3>
<ul>
<li>IU chez l'homme = prostatite jusqu'à preuve du contraire.</li>
<li><strong>Pas d'amoxicilline</strong> (mauvaise diffusion prostatique). Ceftriaxone ou fluoroquinolone ; réadapter (FQ ou Bactrim per os). Durée 14 à 21 jours.</li>
<li>Homme > 50 ans : peut révéler un cancer de prostate (toucher rectal et PSA à distance).</li>
</ul>
<h3>Femme enceinte</h3>
<p>Dépistage de la bactériurie asymptomatique dès le 4ème mois, tous les mois ; traitement systématique de toute bactériurie (risque de pyélonéphrite). ECBU de contrôle 10 jours après l'arrêt puis mensuel.</p>`,
    refs: ["D'après tes cours (UE 2.5)"] },

  { id: "fco_2_5_bhr", ueId: "2.5", type: "cours",
    titre: "Bactéries hautement résistantes (BHRe) et microbiote",
    resume: "Les BHRe (EPC et ERG), un cran au-dessus des BMR, et les mesures de maîtrise de leur diffusion.",
    tags: ["d'après tes cours","BHRe","résistance","hygiène"],
    html: `<h3>Définition</h3>
<p>Les <span class="key" data-term="BHRe">BHRe</span> (bactéries hautement résistantes émergentes) sont un cran au-dessus des BMR. Deux cibles actuelles :</p>
<ul>
<li><span class="key" data-term="EPC">Entérobactéries productrices de carbapénémases (EPC)</span>.</li>
<li>Enterococcus faecium résistant aux glycopeptides (ERG / ERV).</li>
</ul>
<ul>
<li>Commensales du tube digestif, résistantes à de nombreux antibiotiques.</li>
<li>Mécanisme de résistance transférable entre bactéries : <strong>pouvoir épidémiogène élevé</strong>.</li>
<li>Risques : transmission du gène de résistance aux SARM (ERV), impasse thérapeutique.</li>
</ul>
<table class="tbl">
<tr><th>BHR</th><th>BMR</th></tr>
<tr><td>Risques majeurs, situation épidémique</td><td>Situation endémique</td></tr>
<tr><td>FDR identifiables, risque environnemental élevé</td><td>FDR partiellement identifiables, risque environnemental faible</td></tr>
</table>
<h3>Le microbiote (rappel)</h3>
<p>Tube digestif stérile in utero, colonisé à la naissance (flore commensale). Fonctions : métabolique, <strong>effet de barrière</strong> contre les pathogènes, maturation du système immunitaire, physiologie intestinale.</p>
<h3>Maîtrise de la diffusion</h3>
<p>Mode de dissémination via manuportage, environnement (88 % contaminé), gants, tenue. <strong>100 % d'observance = 0 % de dissémination.</strong> Trois étages :</p>
<ul>
<li>1er étage : précautions standard (dont gestion des excreta).</li>
<li>2ème étage : précautions complémentaires d'hygiène.</li>
<li>3ème étage : précautions spécifiques BHRe.</li>
</ul>
<h3>Mode d'emploi BHRe</h3>
<ul>
<li><strong>Identification des patients à risque :</strong> rapatrié sanitaire, transfert de l'étranger (DOM-TOM inclus), antécédent d'hospitalisation > 24 h à l'étranger dans l'année. Patient contact = soins partagés avec un soignant ayant pris en charge un porteur.</li>
<li><strong>Précautions contact :</strong> chambre individuelle, hygiène des mains au PHA, protection de tenue à usage unique.</li>
<li><strong>Dépistage</strong> à l'entrée par double écouvillonnage rectal sec (recherche EPC et ERV).</li>
<li>Alerter l'EOH, alerte dans le dossier.</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Organisation selon le risque : faible (mesures dès l'admission), moyen (identifié en cours d'hospitalisation), élevé (au moins un cas secondaire parmi les contacts).</div>`,
    refs: ["D'après tes cours (UE 2.5)"] },

  { id: "fco_2_5_ist", ueId: "2.5", type: "cours",
    titre: "Infections sexuellement transmissibles (IST)",
    resume: "Panorama des IST virales, bactériennes et parasitaires, leurs signes, complications et la prévention.",
    tags: ["d'après tes cours","IST","prévention"],
    html: `<h3>Pourquoi dépister ?</h3>
<ul>
<li>Phase asymptomatique fréquente ; conséquences graves si non traitées (stérilité...).</li>
<li>Les IST « classiques » favorisent l'infection par le VIH.</li>
<li>Le traitement nécessite de chercher d'autres IST et de traiter le partenaire.</li>
</ul>
<p><strong>Vaccins disponibles :</strong> HPV (papillomavirus), Hépatite B (et A), méningocoque.</p>
<h3>HPV (papillomavirus)</h3>
<p>Classé selon tropisme et potentiel oncogène. Le plus souvent infection inapparente et transitoire (70-90 % de clairance virale en 1-2 ans). Peut donner des <span class="key" data-term="condylomes">condylomes</span> (crêtes de coq), et les HPV à haut risque entraînent des lésions précancéreuses du col (évolution possible en 10 à 30 ans vers le cancer). Vaccination : GARDASIL 9.</p>
<h3>Chlamydia trachomatis</h3>
<p>1ère IST bactérienne des pays industrialisés, <strong>asymptomatique +++</strong>. N'entraîne pas d'immunité (réinfections possibles). Complications : salpingite, GEU, stérilité chez la femme ; syndrome de Fitz-Hugh-Curtis (péri-hépatite).</p>
<h3>Gonocoque (gonococcie / « chaude-pisse »)</h3>
<p>Incubation courte (2 à 5 jours). Chez l'homme : urétrite aiguë symptomatique +++ avec brûlures et écoulement. Chez la femme : souvent pauci- ou asymptomatique (50 %). Complications : stérilité, dissémination systémique (arthrites, méningites...).</p>
<h3>Syphilis (Treponema pallidum)</h3>
<table class="tbl">
<tr><th>Stade</th><th>Manifestation</th></tr>
<tr><td>Primaire</td><td>Chancre indolore + adénopathie satellite (incubation 2-4 sem.)</td></tr>
<tr><td>Secondaire</td><td>Roséole syphilitique, syphilides palmo-plantaires, collier de Vénus, alopécie en clairière</td></tr>
<tr><td>Tertiaire</td><td>Gommes, neurosyphilis, aortite (exceptionnel)</td></tr>
</table>
<h3>Herpès (HSV1/HSV2)</h3>
<p>Diagnostic <strong>clinique</strong>. Primo-infection puis récurrences (vésicules en bouquet, prodromes à type de cuisson/picotements). Facteurs déclenchants : stress, fatigue, fièvre, règles. Traitement : Zelitrex, Zovirax.</p>
<h3>Parasitaires et autres</h3>
<ul>
<li><strong>Trichomonas</strong> : protozoaire flagellé ; écoulement verdâtre malodorant, prurit. Traitement métronidazole / secnidazole (éviter l'alcool).</li>
<li><strong>Phtiriase</strong> (morpions) : antiparasitaire local, traiter le partenaire.</li>
<li><strong>Gale</strong> (Sarcoptes scabiei) : prurit vespéral/nocturne, sillons. Ivermectine ; lavage du linge à 60 °C.</li>
<li><strong>Vaginose bactérienne</strong> : score d'Amsel (3/4). <em>Ne fait pas partie des IST</em>, pas de traitement systématique du partenaire.</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Prévention : préservatif, vaccination (VHB, méningo, HPV, VHA), dépistage, traitement du/des partenaires, PrEP (prophylaxie pré-exposition du VIH).</div>`,
    refs: ["D'après tes cours (UE 2.5)"] },

  { id: "fco_2_5_tuberculose", ueId: "2.5", type: "cours",
    titre: "La tuberculose : diagnostic, ITL/TM et traitement",
    resume: "Du bacille de Koch (BAAR) à l'IDR, distinction infection tuberculeuse latente / tuberculose maladie et quadri/bithérapie.",
    tags: ["d'après tes cours","tuberculose","BK","IDR"],
    html: `<h3>Généralités</h3>
<ul>
<li>Mycobactérie = <span class="key" data-term="BAAR">BAAR</span> (bacille acido-alcoolo-résistant) = bacille de Koch.</li>
<li>Métabolisme aérobie strict, multiplication très lente, atteinte pulmonaire le plus souvent.</li>
<li>Une des 3 grandes tueuses mondiales avec le VIH et le paludisme. <strong>Déclaration obligatoire.</strong></li>
<li>Localisation pulmonaire = la plus fréquente et dangereuse (transmission interhumaine). Extra-pulmonaire = pauvre en bacille mais invalidante/gravissime.</li>
</ul>
<h3>ITL et TM</h3>
<table class="tbl">
<tr><th>ITL (infection tuberculeuse latente)</th><th>TM (tuberculose maladie)</th></tr>
<tr><td>Patient asymptomatique, radio normale, non contagieux</td><td>Signes cliniques + atteinte radiologique, contagieux si pulmonaire</td></tr>
</table>
<h3>L'IDR (intradermoréaction)</h3>
<ul>
<li>Injection de tuberculine en <strong>intradermique stricte</strong> à l'avant-bras, sur peau saine. Pratiquée par médecin ou IDE sous responsabilité médicale.</li>
<li>Lecture à 72 h (3 jours) : mesure de l'<span class="key" data-term="induration">induration</span> en mm (pas la rougeur).</li>
<li>Une IDR négative n'élimine jamais une tuberculose maladie. Un test immunitaire positif le reste à vie.</li>
<li>Alternative : dosage Interféron gamma (IGRA / Quantiféron).</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Une IDR ou un Quantiféron positifs ne sont PAS des éléments diagnostiques de tuberculose maladie. Le diagnostic repose sur les prélèvements (BK-crachats 3 jours de suite, à jeun).</div>
<h3>Diagnostic microbiologique</h3>
<ul>
<li>Examen direct : BK positif = patient contagieux ; BK négatif = attente de la culture.</li>
<li>Culture et antibiogramme : jusqu'à 6 semaines.</li>
<li>Preuve histologique : <span class="key" data-term="granulome tuberculeux">granulome tuberculeux</span> (cellules épithélioïdes giganto-cellulaires + nécrose caséeuse centrale).</li>
</ul>
<h3>Traitement</h3>
<ul>
<li>Phase initiale intensive : <strong>quadrithérapie (2 mois)</strong>, puis phase de continuation : <strong>bithérapie (4 mois)</strong> = 6 mois au total si non résistante.</li>
<li>Prophylaxie de l'ITL : isoniazide + rifampicine 3 mois, ou isoniazide seul 6 mois / rifampicine seule 4 mois.</li>
<li>Surveillance du Rifinah : risque d'hépatite (bilan biologique), alcool déconseillé, diminue l'efficacité des contraceptifs oraux, coloration orangée des liquides. À prendre à distance des repas, à heure fixe.</li>
<li>Tuberculose pulmonaire = hospitalisation + isolement respiratoire « type air » (15 jours minimum).</li>
</ul>
<h3>BCG et lutte antituberculeuse</h3>
<p>BCG non obligatoire depuis 2007 (protège des formes graves), recommandé selon indications (enfant né/parents originaires d'un pays de forte endémie, Île-de-France, Guyane, Mayotte...). Déclaration obligatoire à l'ARS et au CLAT (enquête autour des cas).</p>`,
    refs: ["D'après tes cours (UE 2.5)"] },

  { id: "fco_2_5_vih_sida", ueId: "2.5", type: "cours",
    titre: "VIH-SIDA : physiopathologie, transmission et prise en charge",
    resume: "Du virus à la destruction des CD4, les modes de transmission, le diagnostic sérologique et les traitements (TasP, PrEP, TPE).",
    tags: ["d'après tes cours","VIH","SIDA","CD4"],
    html: `<h3>Définitions</h3>
<ul>
<li><span class="key" data-term="VIH">VIH</span> : Virus de l'Immunodéficience Humaine. <span class="key" data-term="SIDA">SIDA</span> : Syndrome d'Immunodéficience Acquise.</li>
<li>Séropositivité : porteur (asymptomatique) du virus.</li>
<li>2 types : VIH-1 (+++) et VIH-2 (évolution plus lente, Afrique).</li>
</ul>
<h3>Physiopathologie</h3>
<p>Le virus se réplique partout (pas d'éradication) et détruit l'immunité. Quand les <span class="key" data-term="CD4">CD4</span> sont &lt; 200, surviennent les infections opportunistes (SIDA). Marqueurs : 1er = CD4, 2ème = charge virale plasmatique.</p>
<h3>Transmission</h3>
<ul>
<li>3 modes : <strong>sanguine, materno-fœtale, sexuelle</strong> (98 % des contaminations sont sexuelles).</li>
<li>5 liquides contaminants : sang, liquide séminal, sécrétions vaginales, LCR, lait maternel.</li>
<li>Facteurs aggravants : rapports anaux, lésions génitales, IST, ulcérations, saignements.</li>
</ul>
<h3>Les 3 phases cliniques</h3>
<table class="tbl">
<tr><th>Phase</th><th>Manifestations</th></tr>
<tr><td>Primo-infection</td><td>Fièvre, angine, myalgies, éruption, ulcérations, syndrome mononucléosique → forte contagiosité</td></tr>
<tr><td>Chronique asymptomatique</td><td>Silencieuse, peut durer des années</td></tr>
<tr><td>SIDA</td><td>Manifestations tumorales, infections opportunistes</td></tr>
</table>
<h3>Diagnostic</h3>
<ul>
<li>Dépistage par <strong>ELISA</strong> (anticorps + 1 antigène).</li>
<li>Confirmation par <strong>Western Blot</strong>.</li>
<li>TROD / autotest. Déclaration obligatoire.</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Prévention : préservatif (protège aussi des autres IST). Traitement post-exposition (TPE) : kit de trithérapie aux urgences, à prendre le plus tôt possible, réévaluation à 48 h, poursuite 28 jours si doute. PrEP en pré-exposition. TasP (traitement antirétroviral) après contamination, à vie.</div>
<h3>Femme enceinte</h3>
<p>Traitement antirétroviral pendant la grossesse, césarienne programmée à 38 SA, interdiction de l'allaitement (quand possible), traitement de l'enfant pendant 4 semaines.</p>`,
    refs: ["D'après tes cours (UE 2.5)"] },
];

export const qcm = [
  { ueId: "2.5", q: "Quel germe est responsable de l'érysipèle (dermo-hypodermite bactérienne aiguë non nécrosante) ?", options: ["Staphylocoque doré", "Streptocoque du groupe A", "Escherichia coli", "Pseudomonas aeruginosa"], correct: 1,
    explication: "L'érysipèle est dû essentiellement au streptocoque du groupe A, d'où le traitement par amoxicilline.", ref: "UE 2.5", diff: 1 },

  { ueId: "2.5", q: "Concernant l'érysipèle, quelle affirmation est exacte ?", options: ["Les AINS sont recommandés contre la douleur", "Les AINS sont contre-indiqués", "Un doppler veineux est systématique", "Le diagnostic repose sur les hémocultures"], correct: 1,
    explication: "Les AINS sont contre-indiqués car ils favorisent l'évolution vers la fasciite nécrosante. Le diagnostic est avant tout clinique.", ref: "UE 2.5", diff: 2 },

  { ueId: "2.5", q: "Quel signe oriente vers une fasciite nécrosante ?", options: ["Apyrexie", "Crépitation neigeuse et douleur intense", "Adénopathie satellite isolée", "Placard rouge chaud simple"], correct: 1,
    explication: "Douleur intense, placards nécrotiques et crépitation neigeuse signent la fasciite nécrosante : urgence chirurgicale.", ref: "UE 2.5", diff: 2 },

  { ueId: "2.5", q: "Clostridium difficile est responsable principalement de :", options: ["Pneumonie nosocomiale", "1ère cause de diarrhée nosocomiale de l'adulte", "Infection urinaire sur sonde", "Méningite bactérienne"], correct: 1,
    explication: "C'est un bacille gram positif anaérobie toxinogène, 1ère cause de diarrhée nosocomiale chez l'adulte.", ref: "UE 2.5", diff: 1 },

  { ueId: "2.5", q: "Quelle est la bonne séquence d'hygiène des mains après soins d'un patient porteur de Clostridium difficile ?", options: ["SHA uniquement", "Lavage simple uniquement", "Lavage simple puis SHA", "SHA puis lavage simple"], correct: 2,
    explication: "Lavage simple des mains pour éliminer les spores (insensibles à la SHA), PUIS SHA pour les bactéries.", ref: "UE 2.5", diff: 2 },

  { ueId: "2.5", q: "La bronchite aiguë du sujet sain est :", options: ["Toujours bactérienne", "Toujours virale", "Toujours due au pneumocoque", "Une indication d'antibiothérapie systématique"], correct: 1,
    explication: "Elle est toujours virale ; l'abstention thérapeutique est la règle, l'antibiotique inutile et délétère.", ref: "UE 2.5", diff: 1 },

  { ueId: "2.5", q: "Quel est le traitement de référence d'une pneumopathie à pneumocoque ?", options: ["Macrolides", "Amoxicilline", "Fluoroquinolone d'emblée", "Ceftriaxone systématique"], correct: 1,
    explication: "La pneumopathie alvéolaire à pneumocoque se traite par amoxicilline ; « le pneumocoque tue ».", ref: "UE 2.5", diff: 1 },

  { ueId: "2.5", q: "Concernant la légionellose, quelle affirmation est vraie ?", options: ["Transmission interhumaine fréquente", "Transmission par aérosolisation d'eau douce contaminée", "Maladie sans gravité", "Pas de déclaration obligatoire"], correct: 1,
    explication: "Legionella pneumophila se transmet par aérosols d'eau douce contaminée (clim, douches, spa). Pas de transmission interhumaine ; déclaration obligatoire.", ref: "UE 2.5", diff: 2 },

  { ueId: "2.5", q: "Une bandelette urinaire négative pour leuco et nitrites :", options: ["Confirme l'infection urinaire", "Permet d'exclure le diagnostic d'IU", "Impose un ECBU systématique", "N'a aucune valeur"], correct: 1,
    explication: "Une BU négative pour leuco et nitrites permet d'exclure le diagnostic d'infection urinaire.", ref: "UE 2.5", diff: 1 },

  { ueId: "2.5", q: "La colonisation urinaire (bactériurie asymptomatique) nécessite :", options: ["Une antibiothérapie immédiate", "Aucun traitement antibiotique", "Une hospitalisation", "Un retrait de sonde urgent"], correct: 1,
    explication: "Bactériurie asymptomatique = ECBU positif sans signe clinique = pas d'infection, pas d'antibiotique.", ref: "UE 2.5", diff: 2 },

  { ueId: "2.5", q: "Chez l'homme, une infection urinaire fébrile correspond jusqu'à preuve du contraire à :", options: ["Une cystite", "Une prostatite", "Une colonisation", "Une urétrite virale"], correct: 1,
    explication: "Chez l'homme, l'IU = prostatite jusqu'à preuve du contraire ; la cystite y est très rare.", ref: "UE 2.5", diff: 1 },

  { ueId: "2.5", q: "Pourquoi l'amoxicilline n'est-elle pas utilisée dans la prostatite ?", options: ["Elle est trop chère", "Mauvaise diffusion prostatique", "Elle est toxique pour la prostate", "Elle est inactive sur E. coli"], correct: 1,
    explication: "L'amoxicilline diffuse mal dans la prostate ; on utilise ceftriaxone ou fluoroquinolone (sauf entérocoque).", ref: "UE 2.5", diff: 2 },

  { ueId: "2.5", q: "Chez la femme enceinte, le dépistage de la bactériurie asymptomatique débute :", options: ["Au 1er mois", "Au 4ème mois, tous les mois", "Seulement à l'accouchement", "Uniquement si symptômes"], correct: 1,
    explication: "Dépistage à partir du 4ème mois, tous les mois ; toute bactériurie est traitée (risque de pyélonéphrite).", ref: "UE 2.5", diff: 2 },

  { ueId: "2.5", q: "Les deux cibles actuelles des BHRe sont :", options: ["SARM et pneumocoque", "EPC et Enterococcus faecium résistant aux glycopeptides (ERG)", "E. coli et Klebsiella sensibles", "Legionella et tuberculose"], correct: 1,
    explication: "Les BHRe ciblent les entérobactéries productrices de carbapénémases (EPC) et les ERG/ERV.", ref: "UE 2.5", diff: 2 },

  { ueId: "2.5", q: "Le dépistage des BHRe à l'entrée se fait par :", options: ["Hémocultures", "ECBU", "Double écouvillonnage rectal sec", "Prélèvement de gorge"], correct: 2,
    explication: "Le portage digestif des BHRe (EPC, ERV) se dépiste par double écouvillonnage rectal sec.", ref: "UE 2.5", diff: 2 },

  { ueId: "2.5", q: "Le diagnostic de l'herpès génital repose avant tout sur :", options: ["La sérologie", "La clinique", "L'antigénurie", "L'hémoculture"], correct: 1,
    explication: "Le diagnostic de l'herpès est clinique ; en cas de doute on fait culture ou PCR. La sérologie n'est pas conseillée.", ref: "UE 2.5", diff: 1 },

  { ueId: "2.5", q: "Quelle IST se caractérise par un chancre indolore avec adénopathie satellite ?", options: ["Gonococcie", "Chlamydiose", "Syphilis primaire", "Trichomonose"], correct: 2,
    explication: "Le chancre indolore avec adénopathie satellite est typique de la syphilis primaire (Treponema pallidum).", ref: "UE 2.5", diff: 2 },

  { ueId: "2.5", q: "La vaginose bactérienne :", options: ["Est une IST classique", "Ne fait pas partie des IST", "Impose le traitement du partenaire", "Se diagnostique par PCR sanguine"], correct: 1,
    explication: "La vaginose ne fait pas partie des IST ; pas de traitement systématique du partenaire. Diagnostic par score d'Amsel.", ref: "UE 2.5", diff: 2 },

  { ueId: "2.5", q: "Le bacille de Koch est un :", options: ["Cocci gram positif", "BAAR (bacille acido-alcoolo-résistant) à métabolisme aérobie strict", "Anaérobie strict", "Virus à ARN"], correct: 1,
    explication: "La mycobactérie tuberculeuse est un BAAR, à métabolisme aérobie strict et multiplication très lente.", ref: "UE 2.5", diff: 1 },

  { ueId: "2.5", q: "L'IDR à la tuberculine se lit :", options: ["À 24 h, sur la rougeur", "À 72 h, sur l'induration en mm", "Immédiatement, sur la papule", "À 1 semaine, sur la douleur"], correct: 1,
    explication: "Lecture à 72 h (3 jours), en mesurant l'induration en millimètres et non la rougeur.", ref: "UE 2.5", diff: 2 },

  { ueId: "2.5", q: "Le traitement classique de la tuberculose pulmonaire non résistante dure :", options: ["3 mois", "6 mois (quadrithérapie 2 mois puis bithérapie 4 mois)", "12 mois", "1 mois"], correct: 1,
    explication: "Phase initiale intensive (quadrithérapie, 2 mois) puis phase de continuation (bithérapie, 4 mois) = 6 mois au total.", ref: "UE 2.5", diff: 2 },

  { ueId: "2.5", q: "Dans l'infection à VIH, l'apparition des infections opportunistes (SIDA) survient quand les CD4 sont :", options: ["Supérieurs à 500", "Inférieurs à 200", "Égaux à la charge virale", "Indétectables seulement"], correct: 1,
    explication: "Quand les CD4 chutent en dessous de 200, surviennent les infections opportunistes définissant le SIDA.", ref: "UE 2.5", diff: 1 },

  { ueId: "2.5", q: "Le test de dépistage du VIH est l'ELISA ; sa confirmation se fait par :", options: ["PCR seule", "Western Blot", "Antigénurie", "TROD uniquement"], correct: 1,
    explication: "Dépistage par ELISA (anticorps + 1 antigène), confirmation par Western Blot.", ref: "UE 2.5", diff: 2 },

  { ueId: "2.5", q: "Le traitement post-exposition (TPE) au VIH doit être :", options: ["Pris après plusieurs semaines", "Pris le plus tôt possible, réévalué à 48 h", "Systématiquement poursuivi 1 an", "Réservé aux femmes enceintes"], correct: 1,
    explication: "Trithérapie disponible aux urgences, à débuter le plus tôt possible, réévaluation à 48 h, poursuite 28 jours si doute non levé.", ref: "UE 2.5", diff: 2 },

  { ueId: "2.5", q: "L'exacerbation de BPCO au stade 3 se traite typiquement par :", options: ["Pas d'antibiotique", "Amoxicilline seule", "Amoxicilline + acide clavulanique (spectre plus large)", "Fluoroquinolone d'emblée"], correct: 2,
    explication: "Stade 0-1 : pas d'ATB ; stade 2 : spectre étroit (amoxicilline) ; stade 3 : spectre plus large (amox + acide clavulanique).", ref: "UE 2.5", diff: 2 },
];

export const flashcards = [
  { ueId: "2.5", recto: "Germe et antibiotique de l'érysipèle ?", verso: "Streptocoque du groupe A → amoxicilline." },
  { ueId: "2.5", recto: "Quel médicament est contre-indiqué dans l'érysipèle ?", verso: "Les AINS (risque de fasciite nécrosante)." },
  { ueId: "2.5", recto: "Trois signes de la fasciite nécrosante ?", verso: "Douleur intense, placards nécrotiques cutanés, crépitation neigeuse → chirurgie urgente." },
  { ueId: "2.5", recto: "Séquence d'hygiène des mains après Clostridium difficile ?", verso: "Lavage simple (spores) PUIS SHA (bactéries) ; chambre à l'eau de Javel." },
  { ueId: "2.5", recto: "La bronchite aiguë du sujet sain est due à quoi ?", verso: "Toujours virale → abstention thérapeutique, pas d'antibiotique." },
  { ueId: "2.5", recto: "Traitement de la pneumopathie à pneumocoque ?", verso: "Amoxicilline (« le pneumocoque tue »)." },
  { ueId: "2.5", recto: "Mode de transmission de la légionellose ?", verso: "Aérosolisation d'eau douce contaminée (clim, douches, spa) ; pas de transmission interhumaine ; déclaration obligatoire." },
  { ueId: "2.5", recto: "Que signifie une BU négative pour leuco et nitrites ?", verso: "Elle permet d'exclure le diagnostic d'infection urinaire." },
  { ueId: "2.5", recto: "Colonisation urinaire (bactériurie asymptomatique) : quelle conduite ?", verso: "Pas d'infection, pas d'antibiotique (ECBU+ sans signe clinique)." },
  { ueId: "2.5", recto: "Infection urinaire fébrile chez l'homme = ?", verso: "Prostatite jusqu'à preuve du contraire." },
  { ueId: "2.5", recto: "Pourquoi pas d'amoxicilline dans la prostatite ?", verso: "Mauvaise diffusion prostatique (sauf entérocoque, à fortes doses)." },
  { ueId: "2.5", recto: "Les 2 cibles des BHRe ?", verso: "EPC (entérobactéries productrices de carbapénémases) et ERG/ERV (Enterococcus faecium résistant aux glycopeptides)." },
  { ueId: "2.5", recto: "Comment dépiste-t-on le portage de BHRe ?", verso: "Double écouvillonnage rectal sec à l'entrée (recherche EPC et ERV)." },
  { ueId: "2.5", recto: "IST avec chancre indolore + adénopathie satellite ?", verso: "Syphilis primaire (Treponema pallidum)." },
  { ueId: "2.5", recto: "Quelles IST disposent d'un vaccin ?", verso: "HPV (Gardasil 9), Hépatite B (et A), méningocoque." },
  { ueId: "2.5", recto: "Sur quoi repose le diagnostic de l'herpès ?", verso: "La clinique (vésicules en bouquet) ; culture ou PCR si doute." },
  { ueId: "2.5", recto: "Qu'est-ce qu'un BAAR ?", verso: "Bacille acido-alcoolo-résistant = la mycobactérie tuberculeuse (bacille de Koch), aérobie strict." },
  { ueId: "2.5", recto: "Quand et comment se lit l'IDR ?", verso: "À 72 h, mesure de l'induration en mm (pas la rougeur)." },
  { ueId: "2.5", recto: "Durée et schéma du traitement classique de la tuberculose ?", verso: "6 mois : quadrithérapie 2 mois puis bithérapie 4 mois (si non résistante)." },
  { ueId: "2.5", recto: "À quel seuil de CD4 apparaissent les infections opportunistes (SIDA) ?", verso: "Quand les CD4 sont inférieurs à 200." },
  { ueId: "2.5", recto: "Test de dépistage et de confirmation du VIH ?", verso: "Dépistage : ELISA ; confirmation : Western Blot." },
  { ueId: "2.5", recto: "Quels sont les 3 modes de transmission du VIH ?", verso: "Sanguine, materno-fœtale, sexuelle (98 % des cas)." },
];
