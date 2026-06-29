// Tuteur IA optionnel (désactivé par défaut). L'utilisateur fournit sa propre clé API (BYO key).
// Appel direct à l'API Anthropic depuis le navigateur (clé personnelle, app perso).
import { Storage } from "./storage.js";

export function isAiEnabled() {
  const s = Storage.getSettings();
  return !!(s.aiEnabled && s.aiKey && s.aiKey.length > 10);
}

const SYSTEM = `Tu es un tuteur pédagogique pour une étudiante infirmière française (IFSI, référentiel 2009).
Tu expliques de façon claire, structurée et fiable, en français, adaptée au niveau étudiant.
Tu restes dans le cadre de l'aide à la révision : tu rappelles que tes réponses ne remplacent pas les cours
ni les protocoles officiels, et tu n'inventes jamais de posologie précise sans préciser de vérifier les sources.`;

export async function ask(userPrompt, { maxTokens = 900 } = {}) {
  const s = Storage.getSettings();
  if (!isAiEnabled()) throw new Error("Le tuteur IA est désactivé. Active-le dans Réglages et ajoute ta clé API.");
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
    let detail = "";
    try { detail = (await res.json())?.error?.message || ""; } catch {}
    throw new Error(`Erreur API (${res.status}). ${detail}`);
  }
  const data = await res.json();
  const text = (data.content || []).filter((b) => b.type === "text").map((b) => b.text).join("\n").trim();
  return text || "(réponse vide)";
}

export const Prompts = {
  explain: (sujet) => `Explique simplement et en quelques points le concept infirmier suivant, avec un moyen mnémotechnique si possible : "${sujet}".`,
  quizMe: (sujet) => `Pose-moi 3 questions de type QCM (avec la bonne réponse et une courte justification) sur : "${sujet}".`,
  case: (ue) => `Génère un court cas clinique réaliste pour l'UE "${ue}", avec 3 questions d'analyse et leur corrigé (démarche de soins).`,
  tfe: (texte) => `Voici un extrait de mon mémoire infirmier (TFE). Donne-moi un retour critique constructif (problématique, clarté, méthode) et 3 pistes d'amélioration :\n\n"${texte}"`,
};
