# Infi — Révision IFSI 📘📗📙

**Infi** est une application web (PWA) de révision pour les **étudiant·e·s en soins infirmiers (ESI)**. Elle regroupe les **trois années d'IFSI** et tout ce qu'il faut pour réussir, jusqu'au **mémoire (TFE)**.

> Aide à la révision basée sur le référentiel de formation de l'**arrêté du 31 juillet 2009** (10 compétences, 6 semestres). Le contenu ne remplace pas les cours officiels ni les protocoles en vigueur.

## ✨ Fonctionnalités

- **Cours & fiches** organisés par Année → Semestre → UE, avec recherche, favoris, lecture vocale et glossaire cliquable.
- **QCM corrigés** par UE / semestre, avec explication et référence.
- **Flashcards à répétition espacée** (algorithme SM-2) — révision intelligente du jour.
- **Calculs de doses et de débits** : exercices interactifs infinis, corrigés pas-à-pas.
- **Mode examen blanc** chronométré, avec correction détaillée.
- **Cas cliniques** : situations à analyser (démarche de soins, diagnostics infirmiers).
- **Module Mémoire / TFE** : méthodologie guidée pas-à-pas (situation d'appel → soutenance), rédaction sauvegardée, banque de questions de jury, ressources documentaires.
- **Boîte à outils clinique** : scores (Glasgow, Norton), constantes par âge, 14 besoins de Henderson, démarche de soins, transmissions DAR, précautions d'hygiène, glossaire.
- **Progression & gamification** : XP, niveaux, séries (streak), succès, défis hebdomadaires, statistiques par UE, heatmap d'activité.
- **100 % hors-ligne** (PWA installable), thèmes clair/sombre, accessibilité (contraste, police lisible, animations réduites).
- **Tuteur IA optionnel** (désactivé par défaut, clé API personnelle).
- **Mes données** restent sur l'appareil — export / import de sauvegarde.

## 🧱 Stack

Vanilla JS (ES modules, **sans build**) · PWA (service worker + manifest) · `localStorage` + `IndexedDB` · Capacitor (Android) · déploiement Vercel statique.

## 🚀 Démarrer

```bash
npm install          # (facultatif : pour Capacitor)
npm run serve        # sert www/ sur http://localhost:5173
```

Ouvre l'URL ; l'app fonctionne immédiatement (aucune configuration requise).

## ✅ Tests

```bash
npm run check        # node --check sur tous les modules + tests SM-2/Storage
node test-render.mjs # rendu de tous les écrans (shim DOM, hors navigateur)
```

## 📁 Structure

```
www/
├── index.html · manifest.webmanifest · sw.js
├── css/styles.css                 # design system + thèmes
└── js/
    ├── app.js                     # routing + helpers DOM
    ├── storage.js · srs.js        # persistance + répétition espacée (SM-2)
    ├── gamification.js · themes.js · tts.js · ...
    ├── ui-*.js                    # panneaux (accueil, cours, entraînement, mémoire, outils, profil, réglages)
    └── content/
        ├── referentiel.js         # structure officielle (UE, compétences, stages)
        ├── outils.js · calculs.js · glossaire.js · tfe.js
        └── packs/*.js             # contenu par UE (fiches, QCM, flashcards, cas)
```

Ajouter du contenu = ajouter un fichier dans `content/packs/` et l'inscrire dans `content/index.js`.

## 📦 Déploiement

Statique : `outputDirectory` = `www`. Déploiement Vercel via `npm run deploy:vercel`.

---

*Bon courage pour la 3ᵉ année et le mémoire ! 🩺*
