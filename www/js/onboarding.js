// Accueil au premier lancement : prénom, année d'étude, promo.
import { el, openModal, closeModal } from "./app.js";
import { Storage } from "./storage.js";

export function shouldShowOnboarding() {
  return !Storage.getSettings().onboarded;
}

export function showOnboarding(opts = {}) {
  const prof = Storage.getProfile();
  let prenom = prof.prenom || "";
  let annee = prof.annee || 3;

  const body = el("div", {}, [
    el("div", { class: "center", style: { marginBottom: "8px" } }, [
      el("div", { style: { fontSize: "3rem" } }, ["⚕️"]),
      el("h3", {}, ["Bienvenue sur Infi"]),
      el("p", { class: "muted small" }, [
        "Ton compagnon de révision pour les 3 années d'IFSI : fiches, QCM, flashcards, calculs de doses, cas cliniques et un module dédié au mémoire (TFE).",
      ]),
    ]),
    el("div", { class: "field" }, [
      el("label", {}, ["Ton prénom (facultatif)"]),
      el("input", { type: "text", id: "ob-prenom", value: prenom, placeholder: "Maëlle…", oninput: (e) => (prenom = e.target.value) }),
    ]),
    el("div", { class: "field" }, [
      el("label", {}, ["Où en es-tu ?"]),
      el("div", { class: "segmented", id: "ob-annee" },
        [1, 2, 3].map((a) =>
          el("button", {
            class: a === annee ? "active" : "",
            onclick: (e) => {
              annee = a;
              e.currentTarget.parentElement.querySelectorAll("button").forEach((b) => b.classList.remove("active"));
              e.currentTarget.classList.add("active");
            },
          }, [`${a}ʳᵉ année`.replace("1ʳᵉ", "1ʳᵉ").replace("2ʳᵉ", "2ᵉ").replace("3ʳᵉ", "3ᵉ")])
        )
      ),
    ]),
    el("button", {
      class: "btn btn-block btn-lg mt",
      onclick: () => {
        Storage.saveProfile({ prenom: prenom.trim(), annee });
        Storage.saveSettings({ onboarded: true });
        closeModal();
        if (opts.onComplete) opts.onComplete();
      },
    }, ["C'est parti →"]),
    el("p", { class: "disclaimer" }, [
      "Infi est une aide à la révision et ne remplace pas tes cours ni les protocoles officiels en vigueur.",
    ]),
  ]);

  openModal(body, { dismissable: false });
}
