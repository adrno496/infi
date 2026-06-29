// Pack MÉTHODOLOGIE DES ÉPREUVES — comment gagner des points le jour J (transversal).
export const fiches = [
  {
    id: "meth_analyse_situation", ueId: "3.1", type: "cours",
    titre: "Méthode : réussir une analyse de situation clinique",
    resume: "La trame qui rapporte des points à l'écrit comme à l'oral.",
    tags: ["méthodologie", "analyse de situation", "épreuve", "examen"],
    html: `
      <p>L'analyse de situation est l'épreuve reine en IFSI. Le correcteur attend une <strong>démarche structurée</strong>, pas un catalogue.</p>
      <h3>La trame en 5 temps</h3>
      <ol>
        <li><strong>Présenter la situation</strong> : qui (âge, contexte), pourquoi (motif), antécédents utiles.</li>
        <li><strong>Repérer les données significatives</strong> : trier l'objectif (constantes, examens) et le subjectif (ressenti). Souligner les <span class="key" data-term="signes de gravité">signes de gravité</span>.</li>
        <li><strong>Analyser / problématiser</strong> : relier les données → poser le(s) <strong>problème(s)</strong> et le raisonnement (« je pense à… parce que… »).</li>
        <li><strong>Proposer des actions</strong> : rôle propre + rôle sur prescription, priorisées (urgence, sécurité), justifiées.</li>
        <li><strong>Évaluer / réajuster</strong> : critères de surveillance, ce qu'on transmet, ce qui ferait alerter.</li>
      </ol>
      <div class="callout"><div class="callout-t">Ce qui rapporte des points</div>Justifier CHAQUE action (« pourquoi »), prioriser, et rester dans le champ infirmier (diagnostics infirmiers en PES).</div>
      <div class="mnemo"><div class="mnemo-t">Réflexe</div>« Données → Analyse → Actions → Surveillance ». Si tu bloques, reviens aux <strong>14 besoins</strong> et aux <strong>paramètres vitaux</strong>.</div>
    `,
    refs: ["Méthodologie — analyse de situation"],
  },
  {
    id: "meth_demarche_soins", ueId: "3.1", type: "cours",
    titre: "Méthode : construire une démarche de soins",
    resume: "Du recueil de données au plan de soins, sans rien oublier.",
    tags: ["démarche de soins", "diagnostic infirmier", "PES", "méthodologie"],
    html: `
      <h3>Étapes</h3>
      <ol>
        <li><strong>Recueil</strong> (14 besoins de Henderson, dossier, examen, constantes).</li>
        <li><strong>Diagnostics infirmiers</strong> au format <strong>PES</strong> : Problème / lié à (Étiologie) / se manifestant par (Signes). Ajouter les <strong>problèmes en collaboration</strong> (risque lié à la pathologie/au traitement).</li>
        <li><strong>Objectifs SMART</strong> (mesurables, datés).</li>
        <li><strong>Interventions</strong> : rôle propre + rôle prescrit, justifiées.</li>
        <li><strong>Évaluation</strong> : atteinte des objectifs, réajustement.</li>
      </ol>
      <div class="callout warn"><div class="callout-t">Piège classique</div>Confondre diagnostic médical et diagnostic infirmier. L'infirmier décrit la <strong>réaction de la personne</strong>, pas la maladie.</div>
    `,
    refs: ["UE 3.1 / 3.2"],
  },
  {
    id: "meth_qroc", ueId: "6.1", type: "cours",
    titre: "Méthode : répondre à une QROC / une question rédactionnelle",
    resume: "Répondre juste, complet et lisible — sans perdre de points bêtement.",
    tags: ["QROC", "rédaction", "méthodologie", "examen"],
    html: `
      <ul>
        <li><strong>Lis la consigne</strong> : « citer » ≠ « expliquer » ≠ « justifier ». Repère le verbe et le nombre d'éléments demandés.</li>
        <li><strong>Réponds à la question posée</strong> (et seulement elle) : pas de hors-sujet pour « remplir ».</li>
        <li><strong>Structure</strong> : une idée par tiret/paragraphe ; commence par le mot-clé attendu.</li>
        <li><strong>Sois précis</strong> : valeurs, définitions exactes, vocabulaire professionnel.</li>
        <li><strong>Relis</strong> : unités, négations, fautes qui changent le sens.</li>
      </ul>
      <div class="callout"><div class="callout-t">Astuce barème</div>Un correcteur coche des mots-clés : place-les explicitement. Mieux vaut 4 bons mots-clés qu'un long paragraphe vague.</div>
    `,
    refs: ["Méthodologie des épreuves"],
  },
  {
    id: "meth_calcul", ueId: "4.4", type: "cours",
    titre: "Méthode : réussir l'épreuve de calcul de doses",
    resume: "Zéro faute : la méthode et les vérifications qui sauvent.",
    tags: ["calcul de doses", "débit", "méthodologie", "sécurité"],
    html: `
      <ol>
        <li><strong>Écris ce que tu cherches</strong> et l'unité (mL ? mg ? gouttes/min ? mL/h ?).</li>
        <li><strong>Convertis tout dans la même unité</strong> avant de calculer (g↔mg, h↔min, %).</li>
        <li><strong>Pose la formule</strong> (produit en croix) et garde le détail : le raisonnement est noté.</li>
        <li><strong>Vérifie l'ordre de grandeur</strong> : un résultat aberrant = erreur d'unité.</li>
        <li><strong>Double-vérification</strong> comme en service.</li>
      </ol>
      <div class="mnemo"><div class="mnemo-t">Rappels</div>Débit mL/h = Volume ÷ durée(h). Gouttes/min = (Volume × 20) ÷ minutes. Dose = (prescrit ÷ disponible) × volume.</div>
      <div class="callout"><div class="callout-t">À l'entraînement</div>Va dans <strong>S'entraîner → Calculs de doses</strong> : exercices illimités, corrigés pas à pas.</div>
    `,
    refs: ["UE 4.4 / 2.11"],
  },
  {
    id: "meth_oral", ueId: "3.4", type: "cours",
    titre: "Méthode : préparer un oral (TFE, présentation)",
    resume: "Structurer, chronométrer, gérer les questions du jury.",
    tags: ["oral", "TFE", "soutenance", "méthodologie"],
    html: `
      <ul>
        <li><strong>Trame</strong> : accroche → cheminement → cadre → méthode/constats → apport pour la pratique + ouverture.</li>
        <li><strong>Chronomètre-toi</strong> (≈ 10 min) ; une idée par diapo.</li>
        <li><strong>Ne lis pas tes notes</strong> : regarde le jury, respire.</li>
        <li><strong>Anticipe les questions</strong> : « pourquoi ce sujet ? », « limites ? », « et dans ta pratique ? ».</li>
        <li><strong>Assume les limites</strong> de ton travail : c'est valorisé.</li>
      </ul>
    `,
    refs: ["UE 3.4 / 5.6"],
  },
  {
    id: "meth_temps_stress", ueId: "6.1", type: "cours",
    titre: "Méthode : gérer son temps et son stress en partiel",
    resume: "Organisation le jour J + régularité avant.",
    tags: ["organisation", "stress", "révision", "méthodologie"],
    html: `
      <h3>Avant</h3>
      <ul><li>Révision <strong>espacée</strong> (flashcards quotidiennes) > bachotage.</li><li>Planifie tes échéances (onglet <strong>Planning</strong>) et cible tes <strong>points faibles</strong>.</li><li>Alterne lecture de fiches et QCM (récupération active).</li></ul>
      <h3>Le jour J</h3>
      <ul><li>Lis tout le sujet, <strong>répartis ton temps</strong> selon les barèmes.</li><li>Commence par ce que tu maîtrises.</li><li>Respiration : inspire 4s / expire 6s pour faire baisser le stress.</li><li>Garde 5 min pour <strong>relire</strong>.</li></ul>
    `,
    refs: ["Méthodologie de travail"],
  },
];
