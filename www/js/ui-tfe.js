// Panneau Mémoire / TFE : parcours guidé pas-à-pas, timeline, rédaction sauvegardée, prépa soutenance.
import { el, toast, openModal, closeModal } from "./app.js";
import { Storage } from "./storage.js";
import { TFE_STEPS, JURY_QUESTIONS, RESSOURCES } from "./content/tfe.js";
import { XP, checkAchievements } from "./gamification.js";
import { isAiEnabled, ask, Prompts } from "./ai-client.js";

function isDone(id) { const s = Storage.getTfe().steps || {}; return !!(s[id] && String(s[id]).trim().length > 20); }

export function renderTfe(root, opts = {}) {
  if (opts.stepId) { const st = TFE_STEPS.find((s) => s.id === opts.stepId); if (st) return showStep(root, st); }
  showOverview(root);
}

function showOverview(root) {
  const done = TFE_STEPS.filter((s) => isDone(s.id)).length;
  const pct = Math.round((done / TFE_STEPS.length) * 100);

  root.appendChild(el("div", { class: "panel-head" }, [
    el("div", { class: "eyebrow" }, ["3ᵉ année · UE 3.4 & 5.6"]),
    el("h1", {}, ["🎓 Mon mémoire (TFE)"]),
    el("div", { class: "sub" }, ["La méthodologie complète, étape par étape, avec ta rédaction sauvegardée."]),
  ]));

  root.appendChild(el("div", { class: "card mb" }, [
    el("div", { class: "flex-between mb" }, [el("strong", {}, ["Avancement"]), el("span", { class: "badge badge-accent" }, [`${done}/${TFE_STEPS.length}`])]),
    el("div", { class: "progress" }, [el("span", { style: { width: pct + "%" } })]),
    el("div", { class: "small muted", style: { marginTop: "6px" } }, [pct === 100 ? "Bravo, toutes les étapes sont remplies ! 🎉" : "Remplis chaque étape à ton rythme."]),
  ]));

  // Stepper
  const stepper = el("div", { class: "stepper card" });
  TFE_STEPS.forEach((s, idx) => {
    const done = isDone(s.id);
    const node = el("div", { class: "step-node" }, [
      el("div", { class: "step-rail" }, [
        el("div", { class: `step-dot ${done ? "done" : ""}` }, [done ? "✓" : String(idx + 1)]),
        idx < TFE_STEPS.length - 1 ? el("div", { class: "step-line" }) : null,
      ]),
      el("button", { class: "step-body", style: { background: "none", border: "0", textAlign: "left", color: "inherit", cursor: "pointer" }, onclick: () => showStep(root, s) }, [
        el("div", { class: "step-title" }, [`${s.icon} ${s.titre}`]),
        el("div", { class: "step-desc" }, [s.objectif]),
        el("div", { class: "small muted", style: { marginTop: "2px" } }, ["🗓️ " + s.periode]),
      ]),
    ]);
    stepper.appendChild(node);
  });
  root.appendChild(stepper);

  // Ressources documentaires
  root.appendChild(el("div", { class: "section-title" }, ["Ressources documentaires"]));
  const res = el("div", { class: "list" });
  RESSOURCES.forEach((r) => res.appendChild(el("a", { class: "row", href: r.url, target: "_blank", rel: "noopener" }, [
    el("span", { class: "row-ic" }, ["🔗"]), el("span", { class: "row-main" }, [el("div", { class: "row-title", style: { fontSize: "0.9rem" } }, [r.nom])]), el("span", { class: "row-chev" }, ["↗"]),
  ])));
  root.appendChild(res);

  root.appendChild(el("p", { class: "disclaimer" }, ["Méthodologie indicative (référentiel 2009). Suis toujours les consignes précises de ton IFSI et de ton·ta guidant·e de mémoire."]));
}

function showStep(root, s) {
  root.innerHTML = "";
  const all = TFE_STEPS; const idx = all.indexOf(s);
  root.appendChild(el("div", { class: "panel-head" }, [
    el("button", { class: "btn btn-ghost btn-sm", style: { paddingLeft: "0", marginBottom: "6px" }, onclick: () => { root.innerHTML = ""; showOverview(root); } }, ["← Toutes les étapes"]),
    el("h1", {}, [`${s.icon} ${s.titre}`]),
    el("div", { class: "sub" }, [s.objectif]),
  ]));

  root.appendChild(el("div", { class: "card fiche mb", html: s.cours }));

  if (s.exemple) root.appendChild(el("div", { class: "callout" }, [el("div", { class: "callout-t" }, ["Exemple"]), el("div", {}, [s.exemple])]));

  if (s.conseils?.length) root.appendChild(el("div", { class: "card mb" }, [el("div", { class: "card-title" }, ["✅ Conseils"]), el("ul", { class: "fiche" }, s.conseils.map((c) => el("li", {}, [c])))]));
  if (s.pieges?.length) root.appendChild(el("div", { class: "callout warn" }, [el("div", { class: "callout-t" }, ["Pièges à éviter"]), el("ul", { style: { margin: "6px 0 0", paddingLeft: "18px" } }, s.pieges.map((p) => el("li", {}, [p])))]));

  // Soutenance : banque de questions
  if (s.id === "soutenance") {
    root.appendChild(el("div", { class: "section-title" }, ["Questions probables du jury"]));
    root.appendChild(el("div", { class: "card" }, [el("ul", { class: "fiche" }, JURY_QUESTIONS.map((q) => el("li", {}, [q])))]));
  }

  // Zone de rédaction personnelle
  root.appendChild(el("div", { class: "section-title" }, ["✍️ Ma rédaction"]));
  const stored = (Storage.getTfe().steps || {})[s.id] || "";
  const wasDone = isDone(s.id);
  const ta = el("textarea", { placeholder: s.placeholder || "Écris ici…", style: { minHeight: "160px" } });
  ta.value = stored;
  let saveTimer = null;
  ta.addEventListener("input", () => {
    clearTimeout(saveTimer);
    saveTimer = setTimeout(() => {
      Storage.saveTfeStep(s.id, ta.value);
      if (!wasDone && isDone(s.id)) {
        Storage.addXp(XP.tfeStep);
        for (const a of checkAchievements()) toast(`Succès : ${a.icon} ${a.title}`, "success", 2600);
        toast("Étape enregistrée (+" + XP.tfeStep + " XP) ✓", "success", 1800);
      }
    }, 600);
  });
  root.appendChild(ta);
  root.appendChild(el("div", { class: "small muted", style: { marginTop: "4px" } }, ["Sauvegarde automatique sur cet appareil."]));

  // Tuteur IA (optionnel)
  const aiBtn = el("button", { class: "btn btn-secondary btn-block mt", onclick: async () => {
    if (!isAiEnabled()) return toast("Active le tuteur IA dans Réglages pour utiliser cette aide.", "info", 3000);
    if (ta.value.trim().length < 30) return toast("Écris d'abord quelques phrases à analyser.", "info");
    aiBtn.setAttribute("disabled", ""); aiBtn.textContent = "Analyse en cours…";
    try { const out = await ask(Prompts.tfe(ta.value)); showAiResult(out); }
    catch (e) { toast(e.message, "error", 3500); }
    finally { aiBtn.removeAttribute("disabled"); aiBtn.textContent = "🤖 Demander un retour au tuteur IA"; }
  } }, ["🤖 Demander un retour au tuteur IA"]);
  root.appendChild(aiBtn);

  // Navigation entre étapes
  root.appendChild(el("div", { class: "flex", style: { gap: "10px", marginTop: "18px" } }, [
    idx > 0 ? el("button", { class: "btn btn-secondary", style: { flex: "1" }, onclick: () => showStep(root, all[idx - 1]) }, ["← Précédent"]) : null,
    idx < all.length - 1 ? el("button", { class: "btn", style: { flex: "1" }, onclick: () => showStep(root, all[idx + 1]) }, ["Suivant →"]) : null,
  ].filter(Boolean)));
}

function showAiResult(text) {
  openModal(el("div", {}, [el("h3", {}, ["🤖 Retour du tuteur"]), el("div", { class: "fiche", style: { whiteSpace: "pre-wrap" } }, [text]), el("button", { class: "btn btn-block mt", onclick: () => closeModal() }, ["Fermer"])]));
}
