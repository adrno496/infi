// Panneau Cours : navigation Année → Semestre → UE → fiche, recherche, favoris, TTS, glossaire.
import { el, toast } from "./app.js";
import { Storage } from "./storage.js";
import { ANNEES, SEMESTRES, uesBySemestre, ueById, CHAMPS, champCouleur } from "./content/referentiel.js";
import { fichesForUe, ueStats, searchFiches, allFiches } from "./content/index.js";
import { lookup } from "./content/glossaire.js";
import { speak, stopSpeech, isTtsAvailable } from "./tts.js";

function header(root, title, sub, onBack) {
  root.appendChild(el("div", { class: "panel-head" }, [
    onBack ? el("button", { class: "btn btn-ghost btn-sm", style: { paddingLeft: "0", marginBottom: "6px" }, onclick: onBack }, ["← Retour"]) : null,
    el("h1", {}, [title]),
    sub ? el("div", { class: "sub" }, [sub]) : null,
  ]));
}

function ueTag(ueId) {
  const u = ueById(ueId);
  return el("span", { class: `ue-tag ${u ? champCouleur(u.champ) : "ue-3"}` }, ["UE " + ueId]);
}

export function renderCours(root, opts = {}) {
  if (opts.ficheId) {
    const f = allFiches().find((x) => x.id === opts.ficheId);
    if (f) return showFiche(root, f);
  }
  if (opts.ueId) return showUe(root, opts.ueId);
  showHome(root);
}

function showHome(root) {
  stopSpeech();
  header(root, "Cours & fiches", "Tout le programme, organisé par année et par UE.");

  // Recherche
  const results = el("div", { class: "list mt" });
  const input = el("input", { type: "search", placeholder: "Rechercher une fiche, un mot-clé…", oninput: (e) => {
    const q = e.target.value;
    results.innerHTML = "";
    if (q.trim().length < 2) return;
    const found = searchFiches(q);
    if (!found.length) { results.appendChild(el("div", { class: "empty small" }, ["Aucune fiche trouvée."])); return; }
    found.forEach((f) => results.appendChild(ficheRow(root, f)));
  }});
  root.appendChild(el("div", { class: "search-bar" }, [el("span", { class: "s-ic" }, ["🔎"]), input]));
  root.appendChild(results);

  // Favoris
  const favs = Storage.getFavorites();
  if (favs.length) {
    root.appendChild(el("div", { class: "section-title" }, ["⭐ Favoris"]));
    const favWrap = el("div", { class: "list" });
    allFiches().filter((f) => favs.includes(f.id)).forEach((f) => favWrap.appendChild(ficheRow(root, f)));
    root.appendChild(favWrap);
  }

  // Années → semestres → UE
  root.appendChild(el("div", { class: "section-title" }, ["Par année"]));
  ANNEES.forEach((an) => {
    const acc = el("div", { class: "accordion" });
    const body = el("div", { class: "acc-body" });
    an.sems.forEach((semN) => {
      const sem = SEMESTRES.find((s) => s.n === semN);
      body.appendChild(el("div", { class: "section-title", style: { marginTop: "8px", marginLeft: "0" } }, [sem.label]));
      uesBySemestre(semN).forEach((u) => {
        const st = ueStats(u.id);
        body.appendChild(el("button", { class: "row", onclick: () => showUe(root, u.id) }, [
          el("span", { class: `ue-tag ${champCouleur(u.champ)}` }, [u.id]),
          el("span", { class: "row-main" }, [
            el("div", { class: "row-title", style: { fontSize: "0.9rem" } }, [u.titre]),
            el("div", { class: "row-sub" }, [`${st.fiches} fiche${st.fiches > 1 ? "s" : ""} · ${st.qcm} QCM`]),
          ]),
          el("span", { class: "row-chev" }, ["›"]),
        ]));
      });
    });
    acc.appendChild(el("button", { class: "acc-head", onclick: () => acc.classList.toggle("open") }, [
      el("span", { style: { fontSize: "1.3rem" } }, [an.icon]),
      el("span", {}, [an.label, el("div", { class: "row-sub" }, [an.sub])]),
      el("span", { class: "row-chev" }, ["›"]),
    ]));
    acc.appendChild(body);
    root.appendChild(acc);
  });
}

function showUe(root, ueId) {
  root.innerHTML = "";
  const u = ueById(ueId);
  header(root, "UE " + ueId, u ? u.titre : "", () => { root.innerHTML = ""; showHome(root); });
  if (u) {
    root.appendChild(el("div", { class: "card mb" }, [
      el("div", { class: "flex wrap", style: { gap: "6px" } }, [
        el("span", { class: "badge" }, [CHAMPS[u.champ].titre]),
        ...u.sem.map((s) => el("span", { class: "badge badge-accent" }, ["S" + s])),
        el("span", { class: "badge badge-blue" }, [u.ects + " ECTS"]),
      ]),
    ]));
  }
  const fiches = fichesForUe(ueId);
  if (!fiches.length) {
    root.appendChild(el("div", { class: "empty" }, [el("div", { class: "empty-ic" }, ["🗓️"]), el("p", {}, ["Le contenu de cette UE arrive bientôt."]), el("p", { class: "small muted" }, ["Les fiches et QCM sont ajoutés progressivement."])]));
    return;
  }
  const list = el("div", { class: "list" });
  fiches.forEach((f) => list.appendChild(ficheRow(root, f)));
  root.appendChild(list);
}

function ficheRow(root, f) {
  const read = Storage.isRead(f.ueId, f.id);
  return el("button", { class: "row", onclick: () => showFiche(root, f) }, [
    el("span", { class: "row-ic" }, [read ? "✅" : iconForType(f.type)]),
    el("span", { class: "row-main" }, [
      el("div", { class: "row-title" }, [f.titre]),
      el("div", { class: "row-sub" }, [f.resume || ("UE " + f.ueId)]),
    ]),
    Storage.isFavorite(f.id) ? el("span", { style: { marginRight: "6px" } }, ["⭐"]) : null,
    el("span", { class: "row-chev" }, ["›"]),
  ]);
}
function iconForType(t) { return t === "pharmaco" ? "💊" : t === "patho" ? "🦠" : t === "anatomie" ? "🫀" : "📄"; }

function showFiche(root, f) {
  root.innerHTML = "";
  stopSpeech();
  Storage.markRead(f.ueId, f.id);

  let fav = Storage.isFavorite(f.id);
  const favBtn = el("button", { class: "btn btn-secondary btn-sm", onclick: () => {
    fav = Storage.toggleFavorite(f.id);
    favBtn.innerHTML = fav ? "⭐ Favori" : "☆ Favori";
    toast(fav ? "Ajouté aux favoris" : "Retiré des favoris", fav ? "success" : "info", 1500);
  } }, [fav ? "⭐ Favori" : "☆ Favori"]);

  let speaking = false;
  const ttsBtn = isTtsAvailable() ? el("button", { class: "btn btn-secondary btn-sm", onclick: () => {
    if (speaking) { stopSpeech(); speaking = false; ttsBtn.innerHTML = "🔊 Écouter"; return; }
    const plain = f.titre + ". " + (f.html || "").replace(/<[^>]+>/g, " ").replace(/\s+/g, " ");
    speak(plain, Storage.getSettings().ttsRate || 1);
    speaking = true; ttsBtn.innerHTML = "⏹ Stop";
  } }, ["🔊 Écouter"]) : null;

  header(root, f.titre, null, () => { root.innerHTML = ""; showUe(root, f.ueId); });
  root.appendChild(el("div", { class: "flex wrap mb", style: { gap: "8px" } }, [ueTag(f.ueId), favBtn, ttsBtn].filter(Boolean)));

  const body = el("div", { class: "card fiche", html: f.html || "" });
  root.appendChild(body);
  wireGlossary(body);

  if (f.refs && f.refs.length) {
    root.appendChild(el("div", { class: "small muted", style: { marginTop: "10px" } }, ["Sources : " + f.refs.join(" · ")]));
  }

  // Note personnelle
  const noteVal = Storage.getNote("fiche_" + f.id);
  root.appendChild(el("div", { class: "section-title" }, ["✍️ Ma note"]));
  const ta = el("textarea", { placeholder: "Ajoute une note personnelle sur cette fiche…", value: noteVal });
  ta.value = noteVal;
  ta.addEventListener("input", () => Storage.setNote("fiche_" + f.id, ta.value));
  root.appendChild(ta);
}

function wireGlossary(container) {
  container.querySelectorAll(".key[data-term]").forEach((span) => {
    span.addEventListener("click", (e) => {
      e.stopPropagation();
      const term = span.getAttribute("data-term");
      const entry = lookup(term);
      const old = document.getElementById("glossary-popup");
      if (old) old.remove();
      const popup = el("div", { id: "glossary-popup", class: "glossary-popup" }, [
        el("div", { class: "gp-term" }, [entry ? entry.terme : term]),
        el("div", { class: "gp-def" }, [entry ? entry.def : "Définition à venir dans le glossaire."]),
        el("button", { class: "btn btn-ghost btn-sm", style: { marginTop: "8px" }, onclick: () => popup.remove() }, ["Fermer"]),
      ]);
      document.body.appendChild(popup);
    });
  });
}
