# À compléter avant mise en ligne

Chaque point correspond à un marqueur `[À CONFIRMER]` ou `[EXEMPLE À REMPLACER]` visible sur le site.

## Véhicules (`src/data/vehicules.json`)
- [ ] Remplacer les 3 fiches d'exemple (Ford Fiesta 1.4 TDCi, Volkswagen Fox 1.2, Renault Twingo) par le vrai stock : année, kilométrage, carburant, boîte, puissance, prix, statut, photos.
- [ ] Retirer la clé `exemple` de chaque vraie fiche.

## Services et accompagnement (accueil)
- [ ] Livraison du véhicule : existe-t-elle ? modalités, zone, prix.
- [ ] Reprise de l'ancien véhicule : oui / non.
- [ ] Financement (crédit, LOA) : oui / non, organisme.
- [ ] Garantie : durée et conditions.
- [ ] Premier achat, étapes : conditions de l'essai, points vérifiés avant la vente, prise en charge de la carte grise par le garage, modalités de livraison.
- [ ] Moyens de paiement autres que la CB.

## Personnes
- [ ] Vendeur « Fayçal » cité dans les avis : accord pour afficher son prénom (et éventuellement sa photo) ? Non affiché pour l'instant.

## Légal (`src/pages/mentions-legales.astro`, `confidentialite.astro`)
- [ ] SIRET, RCS (ville), capital social, n° TVA intracommunautaire.
- [ ] Adresse du siège social (si différente du 37 route de Calais).
- [ ] Directeur de la publication (nom).
- [ ] Adresse e-mail de contact.

## SEO / données
- [ ] Coordonnées GPS exactes du garage (latitude / longitude) pour ajouter `geo` au JSON-LD `AutoDealer` (non inventées, donc absentes).
- [ ] Lien de la fiche Google Business Profile (à ajouter dans `sameAs` et en lien « Voir les avis »).
- [ ] Réseaux sociaux éventuels (Facebook, Instagram) pour `sameAs`.
- [ ] Lien vers les annonces L'argus (URL exacte de la page vendeur).
- [ ] URL de production définitive (`astro.config.mjs`, `robots.txt`, `llms.txt`).
- [ ] Note et nombre d'avis Google (5,0 / 32) à mettre à jour de temps en temps dans `src/data/site.ts`.
