// Module Mémoire / TFE — méthodologie pas-à-pas (UE 3.4 S6 & UE 5.6 S6).
// Chaque étape : cours + exemple + conseils + pièges + zone de rédaction personnelle (sauvegardée en local).

export const TFE_STEPS = [
  {
    id: "situation", titre: "1. Situation d'appel", icon: "💡", periode: "Sept. – Oct.",
    objectif: "Choisir une situation vécue (en stage ou en cours) qui t'a questionné·e ou interpellé·e.",
    cours: `<p>La situation d'appel est le <strong>point de départ</strong> du mémoire : une situation réelle, singulière, qui a provoqué chez toi un <strong>étonnement, un malaise ou un questionnement</strong>. Elle doit relever du <strong>rôle propre infirmier</strong> et être suffisamment riche pour être analysée.</p>
      <ul><li>Décris-la factuellement (qui, quoi, où, quand).</li><li>Explique ce qui t'a interpellé·e.</li><li>Reste dans le champ infirmier (pas une question purement médicale).</li></ul>`,
    exemple: "« En stage en EHPAD, j'ai observé qu'une résidente refusait systématiquement sa toilette avec une soignante mais l'acceptait avec une autre. Cela m'a interrogée sur la relation de confiance dans le soin. »",
    conseils: ["Choisis une situation qui te touche vraiment : tu vas vivre des mois avec.", "Note plusieurs situations possibles avant de trancher.", "Vérifie qu'elle ouvre sur un vrai questionnement, pas une simple anecdote."],
    pieges: ["Sujet trop large ou purement médical.", "Situation sans dimension infirmière analysable."],
    placeholder: "Décris ici ta situation d'appel et ce qui t'a interpellé·e…",
  },
  {
    id: "question-depart", titre: "2. Question de départ", icon: "❓", periode: "Oct. – Nov.",
    objectif: "Transformer ton étonnement en une question large, ouverte et exploratoire.",
    cours: `<p>La question de départ traduit ton questionnement en une formulation interrogative <strong>ouverte</strong>. Elle guide la phase exploratoire. Elle n'a pas encore la précision de la question de recherche.</p>
      <div class="callout"><div class="callout-t">Critères d'une bonne question de départ</div>Claire · faisable · pertinente pour la profession · ni trop fermée (oui/non) ni trop vaste.</div>`,
    exemple: "« En quoi la relation de confiance influence-t-elle l'acceptation des soins d'hygiène chez la personne âgée en institution ? »",
    conseils: ["Commence par « En quoi… », « Comment… », « Dans quelle mesure… ».", "Évite les questions fermées (réponse oui/non)."],
    pieges: ["Question trop fermée.", "Plusieurs questions en une seule."],
    placeholder: "Formule ta question de départ…",
  },
  {
    id: "exploratoire", titre: "3. Phase exploratoire", icon: "🔎", periode: "Nov. – Déc.",
    objectif: "Explorer le sujet : lectures, entretiens exploratoires avec des professionnels.",
    cours: `<p>La phase exploratoire confronte ta question au terrain et à la littérature. Elle s'appuie sur :</p>
      <ul><li>des <strong>lectures</strong> (articles, ouvrages, recommandations) ;</li><li>des <strong>entretiens exploratoires</strong> semi-directifs avec des professionnels.</li></ul>
      <p>Objectif : affiner, repérer les concepts clés, ajuster ta question.</p>`,
    exemple: "Entretiens avec 2 IDE et 1 aide-soignante d'EHPAD + lecture d'articles sur la relation soignant-soigné et le refus de soin.",
    conseils: ["Prépare une trame d'entretien (quelques questions ouvertes).", "Prends des notes ou enregistre (avec accord)."],
    pieges: ["Confondre entretien exploratoire et enquête de recherche.", "Ne pas garder de traces de tes lectures."],
    placeholder: "Notes de lectures et d'entretiens exploratoires…",
  },
  {
    id: "cadre", titre: "4. Cadre conceptuel", icon: "🧩", periode: "Déc. – Janv.",
    objectif: "Définir les concepts mobilisés et choisir un ou des modèles théoriques.",
    cours: `<p>Le cadre conceptuel (ou théorique) <strong>définit les concepts clés</strong> de ton sujet à partir d'auteurs reconnus, et les met en relation. Tu peux mobiliser un modèle de soins infirmiers :</p>
      <ul><li><strong>Virginia Henderson</strong> — les 14 besoins.</li><li><strong>Dorothea Orem</strong> — l'auto-soin (self-care).</li><li><strong>Callista Roy</strong> — l'adaptation.</li><li><strong>Hildegard Peplau</strong> — la relation interpersonnelle.</li></ul>
      <div class="callout"><div class="callout-t">Astuce</div>Chaque concept doit être défini (auteur + définition) PUIS relié à ta situation.</div>`,
    exemple: "Concepts : « relation de confiance » (Hesbeen), « refus de soin », « toucher relationnel ». Modèle : Peplau (relation soignant-soigné).",
    conseils: ["2 à 4 concepts suffisent : mieux vaut approfondir.", "Cite tes sources au fil du texte."],
    pieges: ["Empiler des définitions sans les relier.", "Choisir un modèle qu'on ne maîtrise pas."],
    placeholder: "Définis tes concepts clés et ton/tes modèle(s)…",
  },
  {
    id: "problematique", titre: "5. Problématique & question de recherche", icon: "🎯", periode: "Janv.",
    objectif: "Aboutir à une question de recherche précise, issue du cadre conceptuel.",
    cours: `<p>La problématique articule ta situation, tes lectures et tes concepts pour faire émerger une <strong>question de recherche précise</strong>. C'est le « entonnoir » : du général au spécifique.</p>`,
    exemple: "« Dans quelle mesure la qualité de la relation soignant-soigné, au sens de Peplau, influence-t-elle l'adhésion aux soins d'hygiène des personnes âgées désorientées en EHPAD ? »",
    conseils: ["La question de recherche découle logiquement du cadre conceptuel.", "Elle est précise, délimitée, chercheable."],
    pieges: ["Question de recherche déconnectée du cadre.", "Trop ambitieuse pour un TFE."],
    placeholder: "Rédige ta problématique et ta question de recherche…",
  },
  {
    id: "hypothese", titre: "6. Hypothèse / objet de recherche", icon: "🧪", periode: "Janv. – Févr.",
    objectif: "Formuler une hypothèse (quantitatif) ou des axes exploratoires (qualitatif).",
    cours: `<p>Selon l'approche :</p>
      <ul><li><strong>Quantitative</strong> : hypothèse affirmative et testable.</li><li><strong>Qualitative</strong> : objet de recherche / axes d'exploration plutôt qu'une hypothèse stricte.</li></ul>`,
    exemple: "Hypothèse : « Une relation de confiance établie diminue les situations de refus de soin d'hygiène. »",
    conseils: ["Une hypothèse claire et unique.", "Cohérente avec la méthode choisie ensuite."],
    pieges: ["Hypothèse invérifiable.", "Mélange qualitatif/quantitatif sans justification."],
    placeholder: "Formule ton hypothèse ou tes axes de recherche…",
  },
  {
    id: "methode", titre: "7. Méthode", icon: "📐", periode: "Févr. – Mars",
    objectif: "Décrire l'outil d'enquête, la population, le terrain, l'analyse et l'éthique.",
    cours: `<p>La partie méthode décrit <strong>comment</strong> tu réponds à ta question :</p>
      <ul><li><strong>Outil</strong> : entretien semi-directif, questionnaire, observation.</li><li><strong>Population & échantillon</strong> : critères d'inclusion/exclusion.</li><li><strong>Terrain</strong> et déroulement.</li><li><strong>Analyse</strong> : thématique (qualitatif) ou statistique (quantitatif).</li><li><strong>Éthique</strong> : anonymat, consentement, confidentialité.</li></ul>`,
    exemple: "3 entretiens semi-directifs d'IDE en EHPAD, grille d'analyse thématique, consentement éclairé et anonymisation.",
    conseils: ["Justifie chaque choix méthodologique.", "Reste réaliste sur le nombre d'entretiens (souvent 3–5)."],
    pieges: ["Oublier la dimension éthique.", "Outil non adapté à la question."],
    placeholder: "Décris ta méthode (outil, population, analyse, éthique)…",
  },
  {
    id: "redaction", titre: "8. Rédaction & bibliographie", icon: "✍️", periode: "Févr. – Mai",
    objectif: "Structurer le mémoire (30–60 p.) et soigner les références (normes APA).",
    cours: `<p><strong>Plan-type :</strong> Introduction → Cadre théorique/problématique → Méthode → (Résultats / analyse) → Discussion → Conclusion & perspectives. + Bibliographie et annexes.</p>
      <div class="callout"><div class="callout-t">Bibliographie (APA, format courant)</div>NOM, P. (année). <em>Titre</em>. Éditeur. Pour un article : NOM, P. (année). Titre de l'article. <em>Revue</em>, vol(n°), pages.</div>
      <div class="callout warn"><div class="callout-t">Anti-plagiat</div>Cite systématiquement tes sources. Les TFE passent par un logiciel anti-plagiat (ex. Compilatio).</div>`,
    exemple: "HESBEEN, W. (1997). Prendre soin à l'hôpital. InterEditions.",
    conseils: ["Rédige au fil de l'eau, ne garde pas tout pour la fin.", "Fais relire (orthographe, cohérence).", "Numérote, paginé, sommaire à jour."],
    pieges: ["Citations non référencées (plagiat).", "Bibliographie non homogène."],
    placeholder: "Brouillon de plan, paragraphes, références…",
  },
  {
    id: "soutenance", titre: "9. Soutenance orale", icon: "🎤", periode: "Juin – Juil.",
    objectif: "Préparer un exposé de ~10 min et anticiper les questions du jury (~35 min).",
    cours: `<p>La soutenance : <strong>~10 min de présentation</strong> puis <strong>échange avec le jury</strong> (2 personnes). On évalue ta capacité à <strong>argumenter, prendre du recul</strong> et faire le lien avec la pratique.</p>
      <h4>Trame d'exposé</h4>
      <ol><li>Accroche + situation d'appel.</li><li>Cheminement (question de départ → problématique).</li><li>Cadre conceptuel en bref.</li><li>Méthode et principaux constats.</li><li>Apports pour la pratique + ouverture.</li></ol>`,
    exemple: "Diaporama sobre (8–10 diapos), une idée par diapo, conclusion sur l'apport professionnel.",
    conseils: ["Entraîne-toi à voix haute, chronométré.", "Prépare des réponses aux questions probables.", "Assume les limites de ton travail : c'est valorisé."],
    pieges: ["Lire ses notes.", "Dépasser le temps.", "Se braquer face à une question critique."],
    placeholder: "Plan de ton exposé + questions probables du jury…",
  },
];

export const JURY_QUESTIONS = [
  "Pourquoi avoir choisi ce sujet ? Qu'est-ce qui vous a interpellé ?",
  "Comment êtes-vous passé·e de la question de départ à la question de recherche ?",
  "Pourquoi ce cadre conceptuel / ce modèle de soins ?",
  "Quelles sont les limites de votre méthode ?",
  "Si c'était à refaire, que changeriez-vous ?",
  "En quoi votre travail change-t-il votre future pratique ?",
  "Comment avez-vous garanti l'éthique et l'anonymat ?",
  "Quelles perspectives ou prolongements imaginez-vous ?",
];

export const RESSOURCES = [
  { nom: "LiSSa — Littérature Scientifique en Santé (français)", url: "https://www.lissa.fr/" },
  { nom: "CAIRN — articles SHS & soins", url: "https://www.cairn.info/" },
  { nom: "BDSP — Banque de Données Santé Publique", url: "http://www.bdsp.ehesp.fr/" },
  { nom: "Légifrance — textes officiels", url: "https://www.legifrance.gouv.fr/" },
  { nom: "Google Scholar", url: "https://scholar.google.com/" },
];
