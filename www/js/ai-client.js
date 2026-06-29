// Tuteur IA optionnel (désactivé par défaut). L'utilisateur fournit sa propre clé API (BYO key).
// Fournisseur par défaut : Mistral (https://console.mistral.ai). Anthropic reste disponible en option.
import { Storage } from "./storage.js";

export function isAiEnabled() {
  const s = Storage.getSettings();
  return !!(s.aiEnabled && s.aiKey && s.aiKey.length > 10);
}

const SYSTEM = `Tu es un tuteur pédagogique expert pour une étudiante infirmière française (IFSI, référentiel 2009 : 10 compétences ; 6 champs d'UE — sciences humaines/droit, sciences biologiques et médicales, sciences et techniques infirmières fondements puis interventions, intégration des savoirs, méthodes de travail).
Tu maîtrises tout le programme des 3 années : anatomie-physiologie, processus pathologiques (traumatiques, infectieux, psychopatho, dégénératifs, obstructifs, tumoraux…), pharmacologie, calculs de doses, démarche de soins et raisonnement clinique, gestes et soins infirmiers, urgences, législation/éthique, et la méthodologie du mémoire (TFE).
On peut te fournir des EXTRAITS DE FICHES de l'application (issus des cours de l'étudiante) : si présents et pertinents, base ta réponse dessus en priorité.
Tu expliques de façon claire, structurée et fiable, en français, adaptée au niveau étudiant (avec moyens mnémotechniques quand utile).
Tu restes dans le cadre de l'aide à la révision : tu rappelles si besoin que tes réponses ne remplacent pas les cours ni les protocoles officiels, et tu n'inventes jamais de posologie précise sans préciser de vérifier les sources.`;

// ---- Mistral (La Plateforme) ----
async function askMistral(s, userPrompt, maxTokens) {
  const res = await fetch("https://api.mistral.ai/v1/chat/completions", {
    method: "POST",
    headers: { "Content-Type": "application/json", "Accept": "application/json", "Authorization": "Bearer " + s.aiKey },
    body: JSON.stringify({
      model: s.aiModel || "mistral-small-latest",
      max_tokens: maxTokens,
      temperature: 0.4,
      messages: [{ role: "system", content: SYSTEM }, { role: "user", content: userPrompt }],
    }),
  });
  if (!res.ok) {
    let detail = ""; try { detail = (await res.json())?.message || (await res.text?.()) || ""; } catch {}
    throw new Error(`Erreur Mistral (${res.status}). ${detail}`);
  }
  const data = await res.json();
  return (data.choices?.[0]?.message?.content || "").trim() || "(réponse vide)";
}

// ---- Anthropic (Claude) ----
async function askAnthropic(s, userPrompt, maxTokens) {
  const res = await fetch("https://api.anthropic.com/v1/messages", {
    method: "POST",
    headers: {
      "content-type": "application/json",
      "x-api-key": s.aiKey,
      "anthropic-version": "2023-06-01",
      "anthropic-dangerous-direct-browser-access": "true",
    },
    body: JSON.stringify({
      model: s.aiModel || "claude-haiku-4-5-20251001",
      max_tokens: maxTokens,
      system: SYSTEM,
      messages: [{ role: "user", content: userPrompt }],
    }),
  });
  if (!res.ok) {
    let detail = ""; try { detail = (await res.json())?.error?.message || ""; } catch {}
    throw new Error(`Erreur API (${res.status}). ${detail}`);
  }
  const data = await res.json();
  return (data.content || []).filter((b) => b.type === "text").map((b) => b.text).join("\n").trim() || "(réponse vide)";
}

export async function ask(userPrompt, { maxTokens = 900 } = {}) {
  const s = Storage.getSettings();
  if (!isAiEnabled()) throw new Error("Le tuteur IA est désactivé. Active-le dans Réglages et ajoute ta clé API.");
  return s.aiProvider === "anthropic" ? askAnthropic(s, userPrompt, maxTokens) : askMistral(s, userPrompt, maxTokens);
}

export const Prompts = {
  explain: (sujet) => `Explique simplement et en quelques points le concept infirmier suivant, avec un moyen mnémotechnique si possible : "${sujet}".`,
  quizMe: (sujet) => `Pose-moi 3 questions de type QCM (avec la bonne réponse et une courte justification) sur : "${sujet}".`,
  case: (ue) => `Génère un court cas clinique réaliste pour l'UE "${ue}", avec 3 questions d'analyse et leur corrigé (démarche de soins).`,
  tfe: (texte) => `Voici un extrait de mon mémoire infirmier (TFE). Donne-moi un retour critique constructif (problématique, clarté, méthode) et 3 pistes d'amélioration :\n\n"${texte}"`,
};
