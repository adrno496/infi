# Infi — notes pour Claude Code

App PWA de révision IFSI (étudiants infirmiers). **Vanilla JS, ES modules, AUCUN build.** Inspirée de l'app "The Judge" (référence dans `proces/`).

## Règles
- Pas de framework, pas de bundler. Tout sert directement depuis `www/`.
- Le code des modules doit rester **syntaxiquement valide en ESM** : lancer `npm run check` après toute modif JS.
- DOM via le helper `el(tag, attrs, children)` de `js/app.js`. Pas de `innerHTML` non contrôlé sur des entrées utilisateur.
- Persistance via `js/storage.js` (namespace `infi_`). Ne jamais accéder à `localStorage`/`indexedDB` directement ailleurs.
- Tout le texte visible est en **français**.

## Contenu
- Le contenu vit dans `www/js/content/packs/*.js` (un pack par UE) + modules `outils.js`, `calculs.js`, `glossaire.js`, `tfe.js`.
- Format d'un pack : `export const fiches = [...]; export const qcm = [...]; export const flashcards = [...]; export const cas = [...];`
- Pour ajouter un pack : créer le fichier puis l'ajouter à `PACK_FILES` dans `js/content/index.js`.
- QCM : `{ ueId, q, options:[...], correct:<index 0-based>, explication, ref, diff:1|2|3 }`.
- Référence officielle : arrêté du 31 juillet 2009 (10 compétences, 6 semestres).

## Tests
- `npm run check` → `node --check` sur tous les `.js` + `test.mjs` (SM-2, Storage).
- `node test-render.mjs` → rend chaque panneau via un shim DOM (détecte les erreurs runtime).

## Déploiement
- Vercel statique (`vercel.json`, `outputDirectory: www`). Repo public GitHub : `infi`.
- Capacitor (`capacitor.config.json`, `appId: app.infi.revision`) pour un build Android ultérieur.

## Avertissement
Contenu d'aide à la révision : ne remplace pas les cours ni les protocoles officiels. Vérifier calculs et posologies.
