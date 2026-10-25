# MON AUTO — site vitrine (Groslay)

Astro + Tailwind CSS v4, site statique. Polices auto-hébergées (Sora, Public Sans).

## Lancer en local
```
npm install
npm run dev        # http://localhost:4321
npm run build      # génère dist/
npm run preview    # sert dist/ sur http://localhost:4404
npm run captures   # captures Playwright 390 px et 1440 px dans captures/ (après build)
npm run og         # régénère public/og.png et public/apple-touch-icon.png
```

## Déployer
Projet Vercel importé depuis le dépôt Git : chaque push sur `main` redéploie (Astro statique détecté automatiquement). Mettre l'URL finale dans `site` de `astro.config.mjs`, `public/robots.txt` et `public/llms.txt`.

## Où modifier
- **Voitures** : `src/data/vehicules.json` (marque, modèle, version, année, km, carburant, boîte, puissance, prix, photos, statut `disponible` / `réservé` / `vendu`). Une page est créée par voiture (`slug`). Valeur inconnue = `null` (affiche « [À CONFIRMER] »). Supprimer la clé `exemple` sur les vraies annonces.
- **Photos des voitures** : déposer les fichiers dans `src/assets/vehicules/` et mettre leur nom dans `photos` (ex. `"photos": ["fiesta-avant.jpg", "fiesta-interieur.jpg"]`). Conversion AVIF automatique.
- **Nom, adresse, téléphone, horaires, avis, lien Leboncoin** : `src/data/site.ts` (le statut Ouvert/Fermé et le JSON-LD suivent).
- **Textes de l'accueil** (pourquoi, étapes premier achat, services, FAQ) : tableaux en haut de `src/pages/index.astro`.
- **Pages légales** : `src/pages/mentions-legales.astro`, `src/pages/confidentialite.astro`.
- **Couleurs / polices** : `src/styles/global.css` (bloc `@theme`).
