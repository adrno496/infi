export const fiches = [
  { id: "fco_2_10_agents_infectieux", ueId: "2.10", type: "cours",
    titre: "Les agents infectieux : bactéries, virus, champignons, parasites, ATNC",
    resume: "Panorama des 5 grandes familles de micro-organismes et leurs caractéristiques.",
    tags: ["d'après tes cours", "microbiologie", "bactériologie"],
    html: `<h3>Microbiologie : les grandes familles</h3>
<p>Un <span class="key" data-term="microbe">microbe</span> est un organisme vivant assez petit pour n'être vu qu'au microscope. La <strong>microbiologie</strong> est l'étude des micro-organismes ; elle se divise en bactériologie (bactéries = procaryotes), virologie (virus) et parasitologie-mycologie (champignons et parasites = eucaryotes).</p>
<table class="tbl">
<tr><th>Procaryotes (bactéries)</th><th>Eucaryotes (champignons, parasites)</th></tr>
<tr><td>Pas de noyau</td><td>Existence d'un noyau</td></tr>
<tr><td>Division par scissiparité</td><td>Réplication par mitose</td></tr>
<tr><td>Pas d'organites intracellulaires</td><td>Nombreux organites (mitochondries, Golgi)</td></tr>
</table>
<h3>Les 5 familles d'agents infectieux</h3>
<ul>
<li><strong>Bactéries</strong> : unicellulaires, ordre du µm, un seul chromosome, composant spécifique = le <span class="key" data-term="peptidoglycane">peptidoglycane</span>.</li>
<li><strong>Virus</strong> : ordre du nm (1000 fois plus petits qu'une bactérie), incapables de se diviser seuls, ce sont des « parasites » de la cellule vivante (ex : VIH, grippe, SARS-CoV-2).</li>
<li><strong>Champignons</strong> microscopiques : eucaryotes, uni ou pluricellulaires, dépourvus de chlorophylle, aérobies (responsables des <span class="key" data-term="mycose">mycoses</span>).</li>
<li><strong>Parasites</strong> : être vivant qui vit aux dépens d'un hôte (ex : toxoplasmose, oxyurose, paludisme, gale).</li>
<li><strong>ATNC</strong> (agents transmissibles non conventionnels) = <span class="key" data-term="prion">prions</span> : nature protéique, responsables des encéphalopathies spongiformes (Creutzfeldt-Jakob, vache folle).</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Nomenclature de Linné : chaque être vivant porte un nom binôme en <em>italique</em> = Genre (majuscule) + espèce. Ex : <em>Escherichia coli</em> ou <em>E. coli</em>.</div>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>« Ba-Vi-Cha-Pa-At » = Bactéries, Virus, Champignons, Parasites, ATNC : les 5 familles d'agents infectieux.</div>`,
    refs: ["D'après tes cours (UE 2.10)"] },

  { id: "fco_2_10_structure_bacterie", ueId: "2.10", type: "cours",
    titre: "Structure, croissance et classification des bactéries",
    resume: "Enveloppes, coloration de Gram, appendices, spore et conditions de croissance.",
    tags: ["d'après tes cours", "bactériologie", "Gram"],
    html: `<h3>Les enveloppes</h3>
<ul>
<li><strong>Membrane plasmique</strong> : sépare cytoplasme et paroi, support d'activités enzymatiques, site d'action de certains antibiotiques.</li>
<li><strong>Paroi</strong> : composant principal = peptidoglycane (PG). Donne la forme à la bactérie et porte des enzymes (ex : β-lactamases inactivant les antibiotiques).</li>
</ul>
<h3>La coloration de Gram</h3>
<p>La <span class="key" data-term="coloration de Gram">coloration de Gram</span> classe les bactéries selon leur paroi :</p>
<table class="tbl">
<tr><th>Gram +</th><th>Gram −</th></tr>
<tr><td>Majorité de peptidoglycane</td><td>Fine couche de PG + membrane externe</td></tr>
<tr><td>Couleur <strong>violette</strong></td><td>Couleur <strong>rose</strong></td></tr>
</table>
<p>La paroi donne aussi la <strong>morphologie</strong> : rond = <span class="key" data-term="cocci">cocci</span> ; bâton = <span class="key" data-term="bacille">bacille</span>. Les <strong>mycobactéries</strong> ne prennent pas la coloration de Gram (auramine, Ziehl-Nielsen).</p>
<h3>Enveloppes facultatives et appendices</h3>
<ul>
<li><strong>Capsule</strong> : facteur de virulence, perturbe la phagocytose, antigénicité.</li>
<li><strong>Glycocalyx</strong> : feutrage de fibrine, adhérence aux cellules/biomatériaux.</li>
<li><strong>Flagelles</strong> : mobilité ; <strong>Pili</strong> : communs (fixation) ou sexuels (transfert génétique).</li>
<li><strong>Plasmide</strong> : ADN extra-chromosomique facultatif (porte gènes de toxines, résistance aux ATB).</li>
<li><strong>Spore</strong> : forme de survie en conditions défavorables, réversible (ex : <em>Clostridium tetani</em>, <em>C. difficile</em>).</li>
</ul>
<h3>Croissance bactérienne</h3>
<p>Pas d'accroissement de taille mais multiplication par scissiparité. Conditions : nutriments, température (4 à &gt; 40 °C), pH neutre, pression osmotique, oxygène (définit le type respiratoire).</p>
<table class="tbl">
<tr><th>Type respiratoire</th><th>Exemple</th></tr>
<tr><td>Aérobie-anaérobie facultative (O2 préférentiel)</td><td>Entérobactéries, Staphylocoques</td></tr>
<tr><td>Aérobie stricte (O2 obligatoire)</td><td>Pseudomonas</td></tr>
<tr><td>Microaérophile (O2 réduit)</td><td>Campylobacter</td></tr>
<tr><td>Anaérobie stricte (sans O2)</td><td>Clostridium</td></tr>
</table>
<div class="callout"><div class="callout-t">À retenir</div>Au labo : culture 12 à 24h minimum, à 37 °C, puis identification + <strong>antibiogramme</strong> (test de résistance aux antibiotiques).</div>`,
    refs: ["D'après tes cours (UE 2.10)"] },

  { id: "fco_2_10_virus", ueId: "2.10", type: "cours",
    titre: "Les virus : structure, multiplication et transmission",
    resume: "Génome, capside, enveloppe, virus nus vs enveloppés et modes de transmission.",
    tags: ["d'après tes cours", "virologie", "Covid-19"],
    html: `<h3>Définition et structure</h3>
<p>Le virus est un agent infectieux de l'ordre du nm (20 à 300 nm), incapable de se diviser seul : il a besoin des structures de la <strong>cellule hôte</strong> (« parasite » de la cellule vivante). Un virus est toujours composé de :</p>
<ul>
<li><strong>Génome</strong> : un seul acide nucléique, ADN <em>ou</em> ARN (le virus se reproduit à partir de cet acide).</li>
<li><span class="key" data-term="capside">Capside</span> : assemblage de protéines protégeant le génome (icosaédrique, hélicoïdale ou complexe).</li>
<li><strong>Enveloppe</strong> (chez certains seulement) : lipides + protéines, d'où sensibilité aux détergents, à la chaleur, aux agents tensio-actifs.</li>
</ul>
<table class="tbl">
<tr><th>Virus nus (sans enveloppe)</th><th>Virus enveloppés</th></tr>
<tr><td>Plus résistants, survie dans l'environnement</td><td>Fragiles, contacts rapprochés</td></tr>
<tr><td>Hépatite A, Rotavirus</td><td>VIH, Hépatite B, grippe, SARS-CoV-2</td></tr>
</table>
<h3>Multiplication</h3>
<p>Réplication de l'acide nucléique dans une cellule <strong>permissive</strong> : infection de la cellule hôte → libération de virions matures.</p>
<h3>Modes de transmission</h3>
<ul>
<li>Respiratoire / salivaire (grippe, varicelle)</li>
<li>Féco-orale (Rotavirus, hépatite A)</li>
<li>Sexuelle (VIH, Herpès)</li>
<li>Par le sang (VIH, VHB, VHC)</li>
<li>Mère-enfant (VIH, rubéole)</li>
<li>Par un vecteur (dengue)</li>
</ul>
<h3>Au laboratoire</h3>
<ul>
<li><strong>PCR</strong> : mise en évidence directe du virus (amplification de fragments d'ADN).</li>
<li><strong>Sérologie</strong> : détection d'anticorps dans le sang = preuve d'un contact (principe du vaccin).</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Covid-19 : virus à ARN enveloppé. Transmission directe par gouttelettes et indirecte par manuportage / matériel contaminé. Notion d'incubation = délai entre le contage et les premiers signes.</div>`,
    refs: ["D'après tes cours (UE 2.10)"] },

  { id: "fco_2_10_ecologie_microbienne", ueId: "2.10", type: "cours",
    titre: "Écologie microbienne : flores, colonisation et résistance",
    resume: "Saprophytes, commensales, pathogènes, flore résidente/transitoire et résistance aux antibiotiques.",
    tags: ["d'après tes cours", "écologie microbienne", "flore"],
    html: `<h3>Les 3 types de bactéries selon leur relation à l'homme</h3>
<ul>
<li><span class="key" data-term="saprophyte">Saprophytes</span> : vivent dans la nature, indépendantes de l'homme, mais peuvent profiter d'un terrain fragile = <strong>opportunisme</strong>.</li>
<li><span class="key" data-term="commensale">Commensales</span> : vivent normalement chez l'homme sans maladie, assurent l'équilibre de flore (effet barrière). Ex : flore cutanée, digestive, vaginale.</li>
<li><strong>Pathogènes</strong> : toujours responsables de maladie, pas de porteur sain (ex : <em>Salmonella typhi</em>).</li>
</ul>
<h3>Colonisation vs infection</h3>
<table class="tbl">
<tr><th>Colonisation</th><th>Infection</th></tr>
<tr><td>Agent présent SANS dommage, pas de signe clinique</td><td>Agent présent AVEC dommages + réponse immunitaire, signes cliniques</td></tr>
</table>
<p>Une bactérie commensale peut devenir pathogène (plaie, changement de site). Tout dépend de l'équilibre entre le <strong>pouvoir pathogène / virulence</strong> (facteurs liés à la bactérie : paroi, capsule, pili, toxines) et le <strong>terrain</strong> (facteurs liés à l'hôte). L'hôte « anormal » = immunodéprimé (grossesse, âges extrêmes, chimiothérapie, corticoïdes, VIH).</p>
<h3>Les deux flores de la peau</h3>
<table class="tbl">
<tr><th>Flore résidente (commensale)</th><th>Flore transitoire</th></tr>
<tr><td>Stable, propre à l'individu</td><td>Variable selon l'environnement</td></tr>
<tr><td>Rôle d'effet barrière</td><td>Acquise lors de l'activité professionnelle</td></tr>
<tr><td>Éradication complète impossible, reconstitution rapide</td><td>Éradication possible et plus facile</td></tr>
</table>
<p>La peau porte 10⁶ à 10⁸ germes/cm². Les <strong>mains sont les vecteurs prépondérants</strong> de transmission entre réservoirs et récepteurs (manuportage).</p>
<h3>Résistance aux antibiotiques</h3>
<ul>
<li><strong>Résistance naturelle</strong> : toute l'espèce est résistante à un ATB donné.</li>
<li><strong>Résistance acquise</strong> : par mutation chromosomique spontanée et/ou échange de gènes (plasmides).</li>
<li>Un antibiotique exerce une <span class="key" data-term="pression de sélection">pression de sélection</span> : il détruit les bactéries sensibles et favorise la survie des résistantes.</li>
<li><span class="key" data-term="BMR">BMR</span> = bactérie multi-résistante, sensible à un petit nombre d'antibiotiques (ex : SARM). Maîtrise = diminuer la pression de sélection + éviter la transmission croisée (FHA).</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Les entérobactéries (surtout <em>E. coli</em>) sont responsables de près de 90 % des infections urinaires : c'est ce qui guide l'<strong>antibiothérapie probabiliste</strong>. L'ECBU reste nécessaire pour documenter.</div>`,
    refs: ["D'après tes cours (UE 2.10)"] },

  { id: "fco_2_10_precautions_standard", ueId: "2.10", type: "cours",
    titre: "Les précautions standard",
    resume: "Hygiène des mains, gants, protections et gestion du matériel/linge pour tout patient et tout soin.",
    tags: ["d'après tes cours", "hygiène", "précautions standard"],
    html: `<h3>Définition</h3>
<p>Les <span class="key" data-term="précautions standard">précautions standard</span> sont un ensemble de mesures barrières à appliquer <strong>pour tout patient, pour tout soin, en tout lieu et pour tout professionnel</strong>. Objectif : prévenir le risque infectieux et la <strong>transmission croisée</strong> (soignant ↔ soigné ↔ environnement).</p>
<h3>1. Hygiène des mains — le pré-requis</h3>
<p>Tenue : avant-bras dégagés, ongles courts sans vernis ni faux ongles, pas de bijou. La <span class="key" data-term="FHA">FHA</span> (friction hydro-alcoolique) avec un PHA élimine la flore transitoire et réduit la flore résidente. Dose = 1 pression (3 ml) ; durée = 30 secondes jusqu'à séchage.</p>
<p><strong>Les 5 indications de l'hygiène des mains :</strong></p>
<ul>
<li>Avant de toucher le patient</li>
<li>Avant un geste aseptique</li>
<li>Après un risque d'exposition à un liquide biologique</li>
<li>Après avoir touché le patient</li>
<li>Après avoir touché l'environnement du patient</li>
</ul>
<p><strong>Contre-indications du PHA</strong> (mains : Souillées, Poudrées, Lésées, Mouillées) → seule alternative : le lavage simple des mains.</p>
<h3>2. Les gants</h3>
<p><strong>Indications :</strong> contact avec sang/liquides biologiques/muqueuses, mains lésées, risque cytotoxique/chimique, précautions complémentaires contact (C. difficile, gale). Gestion avant le soin : mains sèches → FHA → 1 seule paire → juste avant le soin.</p>
<div class="callout"><div class="callout-t">À retenir</div>JAMAIS de gants sur peau saine ! 1 soin = 1 gant ; 1 gant = 1 patient ; soin terminé = gants ôtés = FHA.</div>
<h3>3. Les protections (EPI)</h3>
<ul>
<li><strong>Tablier imperméable à UU</strong> : tout soin souillant/mouillant (nursing, douche, linge souillé).</li>
<li><strong>Sur-blouse à manches longues à UU</strong> : exposition majeure aux liquides biologiques.</li>
<li><strong>Masque chirurgical + lunettes</strong> : risque de projection/aérosolisation. Masque à UU, jamais remis après retrait, couvre nez-menton-bouche.</li>
</ul>
<p>Éliminer les EPI dès la fin du soin (ne pas sortir avec).</p>
<h3>4. Gestion du matériel, des excréta et de l'environnement</h3>
<ul>
<li>Objets perforants : ne pas recapuchonner, jeter dans un conteneur OPCT au plus près du soin.</li>
<li>Nettoyer/désinfecter le matériel réutilisable et l'environnement proche (table, poignées, sanitaires).</li>
<li>Linge sale et déchets : évacuer au plus près du soin, sac fermé, filière adaptée.</li>
</ul>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Organisation des soins : toujours <strong>du plus propre au plus sale</strong>, soins globalisés par patient, ne pas faire les soins en série.</div>`,
    refs: ["D'après tes cours (UE 2.10)"] },

  { id: "fco_2_10_infections_nosocomiales", ueId: "2.10", type: "cours",
    titre: "Infections associées aux soins (IAS) et nosocomiales",
    resume: "Définitions, chaîne de transmission, 4 grands sites et infection urinaire sur sonde.",
    tags: ["d'après tes cours", "IAS", "infection nosocomiale"],
    html: `<h3>Vocabulaire des infections</h3>
<ul>
<li><strong>Exogène</strong> : micro-organisme extérieur au malade. <strong>Endogène</strong> : de la propre flore du malade.</li>
<li><strong>Croisée</strong> : venant d'un autre malade. <strong>Opportuniste</strong> : devient pathogène quand les défenses baissent. <strong>Iatrogène</strong> : provoquée par un traitement/acte médical.</li>
<li><strong>Sporadique</strong> (cas isolés), <strong>épidémie</strong> (augmentation soudaine), <strong>pandémie</strong> (à un continent/au globe), <strong>endémie</strong> (persistance habituelle dans une région).</li>
</ul>
<h3>Infection nosocomiale → IAS</h3>
<p>Une <span class="key" data-term="infection nosocomiale">infection nosocomiale</span> est contractée à l'hôpital, ni présente ni en incubation à l'admission (délai habituel &gt; 48h ; ISO = 30 jours, prothèse/implant = 1 an). Depuis 2007, le terme s'élargit en <span class="key" data-term="IAS">IAS</span> (infections associées aux soins), sans distinction du lieu de prise en charge.</p>
<h3>La chaîne de transmission (5 maillons)</h3>
<ol>
<li>Agent pathogène infectieux</li>
<li>Réservoir (lieu de multiplication)</li>
<li>Source / porte de sortie</li>
<li>Mode de transmission (contact direct/indirect, gouttelettes, air, sang)</li>
<li>Hôte réceptif + porte d'entrée</li>
</ol>
<p>Le mode le plus fréquent = <strong>contact direct (manuportage)</strong>, de patient à patient via le personnel soignant.</p>
<h3>Les 4 grands sites d'infection nosocomiale</h3>
<table class="tbl">
<tr><th>Site</th><th>Geste à risque</th></tr>
<tr><td>Urinaire (30-40 %)</td><td>Sondage vésical</td></tr>
<tr><td>Pulmonaire</td><td>Intubation-ventilation</td></tr>
<tr><td>Site opératoire</td><td>Chirurgie</td></tr>
<tr><td>Bactériémie</td><td>Cathétérisme</td></tr>
</table>
<h3>Surveillance et signalement</h3>
<ul>
<li><strong>Prévalence</strong> : nombre de cas à un moment donné (évaluée tous les 5 ans). <strong>Incidence</strong> : nouveaux cas sur une période.</li>
<li>Signalement obligatoire (décret du 26 juillet 2001) : médecin du service + EOH. Information du patient (loi du 4 mars 2002).</li>
</ul>
<div class="callout"><div class="callout-t">À retenir</div>Infection urinaire sur sonde : 90 % sont liées au sondage. Prévention : limiter les indications, système clos de drainage, asepsie de pose, FHA + gants, retrait précoce, vider le sac souvent. Ne PAS faire d'ECBU systématique sans signe clinique.</div>`,
    refs: ["D'après tes cours (UE 2.10)"] },

  { id: "fco_2_10_aes", ueId: "2.10", type: "cours",
    titre: "Accidents d'exposition au sang (AES)",
    resume: "Définition, risques viraux et conduite à tenir en 4 étapes.",
    tags: ["d'après tes cours", "AES", "VIH"],
    html: `<h3>Définition</h3>
<p>Un <span class="key" data-term="AES">AES</span> est tout contact avec du sang (ou un liquide biologique contenant du sang) par voie transcutanée (piqûre, coupure) ou par projection sur muqueuse ou peau lésée.</p>
<h3>Risques de transmission virale</h3>
<table class="tbl">
<tr><th>Virus</th><th>Contagiosité après AES</th></tr>
<tr><td>Hépatite B (VHB)</td><td>~30 % (100× plus contagieux que le VIH) — mais vaccin disponible</td></tr>
<tr><td>Hépatite C (VHC)</td><td>~0,5 % — pas de vaccin, traitement curatif existant</td></tr>
<tr><td>VIH</td><td>~0,3 %</td></tr>
</table>
<p>35 % des AES sont évitables par le respect des précautions standard (recapuchonnage, objet traînant, matériel sortant du conteneur).</p>
<h3>Conduite à tenir (CAT) en cas d'AES</h3>
<ol>
<li><strong>Nettoyer / rincer / désinfecter</strong> : laver immédiatement à l'eau et au savon (5 min mini), antisepsie ; NE PAS faire saigner. Si projection : rinçage abondant.</li>
<li><strong>Évaluer le risque</strong> : sérologie du patient source, avis du médecin référent (prophylaxie antirétrovirale en urgence dans les 4h si besoin).</li>
<li><strong>Déclarer l'accident</strong> de travail dans les 48h (secteur public).</li>
<li><strong>Suivi sérologique</strong> : VIH, VHC, transaminases (avant 8 jours, 3e et 6e mois).</li>
</ol>
<div class="callout"><div class="callout-t">À retenir</div>Prévention = précautions standard +++ : gants, masque, lunettes, conteneur OPCT à portée de main, ne pas recapuchonner les aiguilles, vaccination anti-hépatite B.</div>`,
    refs: ["D'après tes cours (UE 2.10)"] },

  { id: "fco_2_10_sterilisation_dm", ueId: "2.10", type: "cours",
    titre: "Stérilisation, désinfection des DM et antiseptiques",
    resume: "Classification des dispositifs médicaux, processus de stérilisation et règles des antiseptiques.",
    tags: ["d'après tes cours", "stérilisation", "antiseptiques"],
    html: `<h3>Classification des dispositifs médicaux (DM)</h3>
<p>Le niveau de traitement dépend du tissu avec lequel le DM est en contact :</p>
<table class="tbl">
<tr><th>Niveau de risque</th><th>Traitement</th><th>Exemples</th></tr>
<tr><td><strong>Non critique</strong> (peau saine)</td><td>Nettoyage/désinfection</td><td>Stéthoscope, barrière de lit</td></tr>
<tr><td><strong>Semi-critique</strong> (muqueuse)</td><td>Désinfection</td><td>Bassin, urinal</td></tr>
<tr><td><strong>Critique</strong> (tissu stérile)</td><td>Stérilisation</td><td>Instruments chirurgicaux, pince à biopsie</td></tr>
</table>
<h3>Le circuit de traitement des DM réutilisables</h3>
<p>Pré-désinfection (détergent-désinfectant, immersion 15 min mini, instruments ouverts) → 1er rinçage → nettoyage (action physico-chimique + mécanique) → 2e rinçage → désinfection ou stérilisation → séchage → stockage.</p>
<div class="callout"><div class="callout-t">À retenir</div>On ne stérilise QUE ce qui est propre et sec.</div>
<h3>La stérilisation</h3>
<p>Élimination de TOUS les micro-organismes d'un objet parfaitement nettoyé. Technique de référence = l'<span class="key" data-term="autoclave">autoclave</span> (vapeur d'eau, 134 °C pendant 18 min, ~2 bar). Autres : oxyde d'éthylène, chaleur sèche (Poupinel, abandonné), gaz plasma (peroxyde d'hydrogène, basse température 45 °C pour DM thermosensibles), radiations ionisantes (industriel).</p>
<h3>Antiseptiques vs désinfectants</h3>
<ul>
<li><strong>Antiseptique</strong> = médicament à usage externe, sur tissus vivants (peau, muqueuse). Non stérilisant, action momentanée.</li>
<li><strong>Désinfectant</strong> = pour le matériel et les surfaces (PAS sur la peau).</li>
</ul>
<p>Étapes de l'antisepsie : détersion (savon) → rinçage → séchage → application de l'antiseptique → séchage à l'air libre (rémanence). Classement : majeurs (bactéricides large spectre), intermédiaires, mineurs. Les <strong>halogènes</strong> (dérivés iodés = Bétadine, dérivés chlorés = Dakin) sont actifs sur Gram +/−, champignons et virus.</p>
<div class="mnemo"><div class="mnemo-t">Moyen mnémo</div>Règles d'or des antiseptiques : sur tissus vivants PROPRES (inactivés par les matières organiques), respecter concentration/temps de contact, ne pas mélanger les produits (même les antiseptiques entre eux), noter la date d'ouverture.</div>`,
    refs: ["D'après tes cours (UE 2.10)"] },

  { id: "fco_2_10_vaccinations", ueId: "2.10", type: "cours",
    titre: "Les vaccinations et la grippe",
    resume: "Principe individuel/collectif, types de vaccins, 11 obligatoires et vaccination grippe.",
    tags: ["d'après tes cours", "vaccination", "grippe"],
    html: `<h3>Principe de la vaccination</h3>
<p>La <span class="key" data-term="vaccination">vaccination</span> protège un individu contre une maladie en stimulant son système immunitaire. Double bénéfice : <strong>individuel</strong> (pour soi) et <strong>collectif</strong> (pour les autres). Selon l'OMS, la protection collective est efficace si <strong>95 % des personnes sont vaccinées</strong> ; une forte couverture protège les personnes ne pouvant pas être vaccinées (nourrissons, immunodéprimés).</p>
<h3>Les types de vaccins</h3>
<ul>
<li><strong>Vaccins atténués</strong> : germes vivants ayant perdu leur pouvoir pathogène mais gardé l'antigénicité (ROR, poliomyélite buccale, fièvre jaune, BCG).</li>
<li><strong>Vaccins inactivés</strong> : germes tués (coqueluche, grippe, poliomyélite injectable ; anatoxines : diphtérie, tétanos).</li>
<li><strong>Génie génétique</strong> : vaccin fabriqué par des organismes modifiés (hépatite B / Hbs).</li>
</ul>
<h3>Les 11 vaccins obligatoires</h3>
<ul>
<li>Diphtérie-Tétanos-Poliomyélite-Coqueluche (DTPCa)</li>
<li>Haemophilus influenzae b</li>
<li>Pneumocoque</li>
<li>Méningocoque C</li>
<li>Rougeole-Oreillons-Rubéole (ROR)</li>
<li>Hépatite B</li>
</ul>
<h3>La grippe</h3>
<p>Infection virale très contagieuse (gouttelettes, mains, objets), contagieuse 24h avant les signes. Types A (le plus commun), B (enfants surtout), C (simples « rhumes »). Signes : fièvre, céphalées, douleurs musculaires/articulaires, toux, fatigue.</p>
<div class="callout"><div class="callout-t">À retenir</div>Vaccin grippe : trivalent/tétravalent ANNUEL (nouvelles souches chaque année), efficacité 60 à 80 %, recommandé au personnel de santé depuis 2000. Contre-indication : allergie (œufs, protéines de poulet).</div>`,
    refs: ["D'après tes cours (UE 2.10)"] },
];

export const qcm = [
  { ueId: "2.10", q: "Quel est le composant spécifique de la paroi des bactéries ?", options: ["La chitine", "Le peptidoglycane", "La cellulose", "La kératine"], correct: 1,
    explication: "Le peptidoglycane est le composant principal de la paroi bactérienne, spécifique des procaryotes.", ref: "UE 2.10", diff: 1 },
  { ueId: "2.10", q: "Une bactérie Gram + apparaît de quelle couleur à la coloration de Gram ?", options: ["Rose", "Verte", "Violette", "Bleue"], correct: 2,
    explication: "Gram + = violet (majorité de peptidoglycane) ; Gram − = rose (fine couche de PG + membrane externe).", ref: "UE 2.10", diff: 1 },
  { ueId: "2.10", q: "Qu'est-ce qui caractérise les procaryotes par rapport aux eucaryotes ?", options: ["Présence d'un noyau", "Réplication par mitose", "Absence de noyau et division par scissiparité", "Nombreux organites"], correct: 2,
    explication: "Les procaryotes (bactéries) n'ont pas de noyau, se divisent par scissiparité et n'ont pas d'organites intracellulaires.", ref: "UE 2.10", diff: 1 },
  { ueId: "2.10", q: "Quelle est la taille d'ordre de grandeur d'un virus ?", options: ["Le µm", "Le mm", "Le nm", "Le cm"], correct: 2,
    explication: "Le virus est de l'ordre du nanomètre (20 à 300 nm), soit environ 1000 fois plus petit qu'une bactérie.", ref: "UE 2.10", diff: 1 },
  { ueId: "2.10", q: "Le virus du SARS-CoV-2 (Covid-19) est :", options: ["Une bactérie à Gram −", "Un virus à ADN nu", "Un virus à ARN enveloppé", "Un parasite"], correct: 2,
    explication: "Le SARS-CoV-2 est un coronavirus à ARN enveloppé ; réservoir = l'homme malade.", ref: "UE 2.10", diff: 2 },
  { ueId: "2.10", q: "Combien y a-t-il d'indications à l'hygiène des mains ?", options: ["3", "5", "7", "10"], correct: 1,
    explication: "Il y a 5 indications : avant de toucher le patient, avant un geste aseptique, après risque d'exposition à un liquide biologique, après avoir touché le patient, après avoir touché son environnement.", ref: "UE 2.10", diff: 1 },
  { ueId: "2.10", q: "La friction hydro-alcoolique (FHA) permet de :", options: ["Stériliser les mains", "Éliminer la flore transitoire et réduire la flore résidente", "Éliminer toute la flore résidente", "Remplacer le port des gants"], correct: 1,
    explication: "La FHA élimine la flore transitoire et réduit la flore résidente (éradication complète de la résidente impossible).", ref: "UE 2.10", diff: 2 },
  { ueId: "2.10", q: "Quelle est une contre-indication à l'utilisation du PHA (produit hydro-alcoolique) ?", options: ["Mains sèches", "Mains propres", "Mains souillées", "Mains désinfectées"], correct: 2,
    explication: "Contre-indications : mains souillées, poudrées, lésées ou mouillées. L'alternative est le lavage simple.", ref: "UE 2.10", diff: 1 },
  { ueId: "2.10", q: "Que signifie « précautions standard » ?", options: ["Mesures réservées aux patients infectés", "Mesures pour tout patient, tout soin, en tout lieu", "Mesures uniquement au bloc opératoire", "Mesures réservées aux médecins"], correct: 1,
    explication: "Les précautions standard s'appliquent pour tout patient/résident, tout soin, en tout lieu et pour tout professionnel.", ref: "UE 2.10", diff: 1 },
  { ueId: "2.10", q: "Dans quel ordre s'effectue une toilette ?", options: ["Du plus sale au plus propre", "Du plus propre au plus sale", "De bas en haut", "Sans ordre particulier"], correct: 1,
    explication: "Toujours du plus propre au plus sale pour éviter la dissémination des germes.", ref: "UE 2.10", diff: 1 },
  { ueId: "2.10", q: "Une infection nosocomiale est définie par un délai habituel de :", options: ["> 12h", "> 24h", "> 48h", "> 7 jours"], correct: 2,
    explication: "Délai habituel > 48h (ISO 30 jours, prothèse/implant 1 an). Elle est absente à l'admission.", ref: "UE 2.10", diff: 2 },
  { ueId: "2.10", q: "Quelle bactérie est responsable d'environ 90 % des infections urinaires ?", options: ["Staphylococcus aureus", "Les entérobactéries (E. coli)", "Pseudomonas aeruginosa", "Clostridium difficile"], correct: 1,
    explication: "Les entérobactéries, surtout E. coli, sont responsables de près de 90 % des IU (80 % à l'hôpital) par voie ascendante.", ref: "UE 2.10", diff: 2 },
  { ueId: "2.10", q: "Lequel de ces virus est le PLUS contagieux lors d'un AES ?", options: ["VIH (~0,3 %)", "Hépatite C (~0,5 %)", "Hépatite B (~30 %)", "Hépatite A"], correct: 2,
    explication: "L'hépatite B est ~100 fois plus contagieuse que le VIH (~30 % de risque après AES), mais un vaccin existe.", ref: "UE 2.10", diff: 2 },
  { ueId: "2.10", q: "Première étape de la conduite à tenir en cas d'AES par piqûre ?", options: ["Déclarer l'accident", "Faire saigner la plaie", "Nettoyer à l'eau et au savon puis antisepsie", "Appeler le médecin du travail"], correct: 2,
    explication: "On nettoie immédiatement à l'eau et au savon (5 min mini) puis antisepsie. Il ne faut PAS faire saigner.", ref: "UE 2.10", diff: 2 },
  { ueId: "2.10", q: "Quelle est la technique de référence de la stérilisation ?", options: ["La chaleur sèche (Poupinel)", "L'autoclave (vapeur d'eau)", "L'oxyde d'éthylène", "L'antisepsie"], correct: 1,
    explication: "L'autoclave est la technique de référence : vapeur d'eau à 134 °C pendant 18 min, ~2 bar.", ref: "UE 2.10", diff: 2 },
  { ueId: "2.10", q: "Un instrument chirurgical est classé comme dispositif médical :", options: ["Non critique", "Semi-critique", "Critique", "À usage unique obligatoire"], correct: 2,
    explication: "Critique : en contact avec un tissu stérile, il nécessite une stérilisation. Le bassin est semi-critique, le stéthoscope non critique.", ref: "UE 2.10", diff: 2 },
  { ueId: "2.10", q: "Un antiseptique s'utilise sur :", options: ["Les surfaces et le matériel", "Les tissus vivants (peau, muqueuse)", "Les sols", "Les dispositifs médicaux uniquement"], correct: 1,
    explication: "L'antiseptique (= médicament) s'utilise sur les tissus vivants. Pour le matériel/surfaces : désinfectant.", ref: "UE 2.10", diff: 1 },
  { ueId: "2.10", q: "Que signifie le sigle BMR ?", options: ["Bactérie Multi-Résistante", "Bactérie Microbienne Résiduelle", "Bilan Microbiologique Rapide", "Bactérie à Membrane Rigide"], correct: 0,
    explication: "BMR = Bactérie Multi-Résistante aux antibiotiques (ex : SARM), ne restant sensible qu'à peu d'antibiotiques.", ref: "UE 2.10", diff: 1 },
  { ueId: "2.10", q: "Quelle différence entre colonisation et infection ?", options: ["Aucune différence", "Colonisation = avec signes cliniques", "Colonisation = sans dommage ni signe clinique", "Infection = sans réponse immunitaire"], correct: 2,
    explication: "Colonisation = agent présent sans dommage (pas de signe). Infection = dommages pour l'hôte + réponse immunitaire (signes cliniques).", ref: "UE 2.10", diff: 2 },
  { ueId: "2.10", q: "Selon l'OMS, quel taux de couverture vaccinale assure une protection collective efficace ?", options: ["50 %", "70 %", "85 %", "95 %"], correct: 3,
    explication: "L'OMS estime la protection collective efficace si 95 % des personnes sont vaccinées.", ref: "UE 2.10", diff: 2 },
  { ueId: "2.10", q: "La prise d'un antibiotique favorise la survie des bactéries résistantes : c'est la notion de :", options: ["Mutation spontanée", "Pression de sélection", "Scissiparité", "Antibiogramme"], correct: 1,
    explication: "L'antibiotique détruit les bactéries sensibles et favorise les résistantes : c'est la pression de sélection.", ref: "UE 2.10", diff: 3 },
  { ueId: "2.10", q: "Une bactérie qui se développe normalement chez l'homme sans provoquer de maladie est dite :", options: ["Pathogène", "Saprophyte", "Commensale", "Résistante"], correct: 2,
    explication: "Commensale : assure une fonction d'équilibre de flore (effet barrière). Saprophyte = dans la nature ; pathogène = toujours malade.", ref: "UE 2.10", diff: 2 },
  { ueId: "2.10", q: "Quel est le mode de transmission le plus fréquent des infections associées aux soins ?", options: ["Aéroportée", "Sanguine", "Contact direct (manuportage)", "Par vecteur"], correct: 2,
    explication: "Le contact direct (manuportage), de patient à patient via le personnel soignant, est le mode le plus fréquent.", ref: "UE 2.10", diff: 2 },
  { ueId: "2.10", q: "Quels sont les 4 grands sites des infections nosocomiales ?", options: ["Cardiaque, hépatique, rénal, osseux", "Urinaire, pulmonaire, site opératoire, bactériémie", "Cutané, ORL, oculaire, digestif", "Génital, articulaire, vasculaire, nerveux"], correct: 1,
    explication: "Les 4 sites : urinaire (sondage), pulmonaire (ventilation), site opératoire (chirurgie), bactériémie (cathéter).", ref: "UE 2.10", diff: 3 },
];

export const flashcards = [
  { ueId: "2.10", recto: "Quelles sont les 5 familles d'agents infectieux ?", verso: "Bactéries, virus, champignons, parasites et ATNC (prions)." },
  { ueId: "2.10", recto: "Procaryote ou eucaryote : une bactérie ?", verso: "Procaryote : pas de noyau, division par scissiparité, pas d'organites." },
  { ueId: "2.10", recto: "Composant spécifique de la paroi bactérienne ?", verso: "Le peptidoglycane." },
  { ueId: "2.10", recto: "Couleur des bactéries Gram + et Gram − ?", verso: "Gram + = violet ; Gram − = rose." },
  { ueId: "2.10", recto: "De quoi est composé un virus ?", verso: "Toujours un génome (ADN ou ARN) + une capside ; parfois une enveloppe." },
  { ueId: "2.10", recto: "Quelles sont les 5 indications de l'hygiène des mains ?", verso: "Avant de toucher le patient, avant un geste aseptique, après risque d'exposition à un liquide biologique, après avoir touché le patient, après avoir touché son environnement." },
  { ueId: "2.10", recto: "Que permet la friction hydro-alcoolique (FHA) ?", verso: "Éliminer la flore transitoire et réduire la flore résidente. Durée : 30 secondes." },
  { ueId: "2.10", recto: "4 contre-indications du PHA ?", verso: "Mains souillées, poudrées, lésées ou mouillées (alternative : lavage simple)." },
  { ueId: "2.10", recto: "Dans quel ordre se fait une toilette ?", verso: "Du plus propre au plus sale, pour éviter la dissémination des germes." },
  { ueId: "2.10", recto: "Définition d'une infection nosocomiale ?", verso: "Infection contractée à l'hôpital, ni présente ni en incubation à l'admission (délai > 48h)." },
  { ueId: "2.10", recto: "Différence colonisation / infection ?", verso: "Colonisation = agent présent sans dommage ni signe ; infection = dommages + réponse immunitaire + signes cliniques." },
  { ueId: "2.10", recto: "Quelle bactérie cause ~90 % des infections urinaires ?", verso: "Les entérobactéries, surtout E. coli (voie ascendante périnéale)." },
  { ueId: "2.10", recto: "Que signifie AES ?", verso: "Accident d'Exposition au Sang : contact avec du sang par piqûre/coupure ou projection sur muqueuse/peau lésée." },
  { ueId: "2.10", recto: "Quel virus est le plus contagieux lors d'un AES ?", verso: "L'hépatite B (~30 %), ~100× plus que le VIH (~0,3 %), VHC ~0,5 %." },
  { ueId: "2.10", recto: "Première étape de la CAT en cas d'AES ?", verso: "Nettoyer à l'eau et au savon (5 min mini) puis antisepsie ; NE PAS faire saigner." },
  { ueId: "2.10", recto: "Technique de référence de la stérilisation ?", verso: "L'autoclave (vapeur d'eau, 134 °C, 18 min)." },
  { ueId: "2.10", recto: "Classement d'un instrument chirurgical / bassin / stéthoscope ?", verso: "Chirurgical = critique ; bassin = semi-critique ; stéthoscope = non critique." },
  { ueId: "2.10", recto: "Antiseptique vs désinfectant ?", verso: "Antiseptique = sur tissus vivants (peau, muqueuse) ; désinfectant = sur matériel et surfaces." },
  { ueId: "2.10", recto: "Que signifie BMR ?", verso: "Bactérie Multi-Résistante aux antibiotiques (ex : SARM)." },
  { ueId: "2.10", recto: "Qu'est-ce que la pression de sélection ?", verso: "L'antibiotique détruit les bactéries sensibles et favorise la survie des résistantes." },
  { ueId: "2.10", recto: "Saprophyte, commensale, pathogène : définitions ?", verso: "Saprophyte = dans la nature (opportuniste) ; commensale = chez l'homme sans maladie (effet barrière) ; pathogène = toujours responsable de maladie." },
  { ueId: "2.10", recto: "Taux de couverture vaccinale pour la protection collective (OMS) ?", verso: "95 % des personnes vaccinées." },
  { ueId: "2.10", recto: "Règle d'or des gants ?", verso: "Jamais de gants sur peau saine ! 1 soin = 1 gant ; 1 gant = 1 patient ; soin terminé = gants ôtés + FHA." },
];
