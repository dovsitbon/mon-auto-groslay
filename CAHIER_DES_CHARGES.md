# Prompt Claude Code : site « MON AUTO » (voitures d'occasion, Groslay)

Tu es un développeur front-end et directeur artistique senior. Crée le site vitrine complet de **MON AUTO**, garage de vente de voitures d'occasion toutes marques à Groslay. Objectif business : **présenter le stock de véhicules** (aujourd'hui dispersé sur Leboncoin et L'argus), générer des appels et des demandes d'essai, et capitaliser sur une réputation exceptionnelle (5,0/5).

## Fiche d'identité (informations vérifiées)
- **Nom** : MON AUTO (SARL, SIREN 991 260 142)
- **Type** : vente de véhicules d'occasion toutes marques, essence/diesel, citadines et petits budgets (ex. annonces récentes : Ford Fiesta 1.4 TDCi, Volkswagen Fox 1.2, Toyota, Twingo, Nissan)
- **Adresse** : 37 route de Calais, 95410 Groslay
- **Téléphone** : 06 85 96 94 77
- **Horaires** : lundi au samedi : 09h30–19h00 · dimanche : 10h00–17h00
- **Note Google** : **5,0/5 sur 32 avis**
- **Vendeur cité par les clients** : Fayçal (`[À CONFIRMER]` avant de l'afficher)
- **Services** : vente sur place, livraison du véhicule `[À CONFIRMER modalités]`, préparation et nettoyage avant livraison, parking sur place, accessible fauteuil roulant
- **Annonces en ligne** : boutique Leboncoin « MON AUTO » (leboncoin.fr/boutique/7226070/mon_auto.htm) et annonces sur L'argus
- **Paiements** : CB `[À CONFIRMER : financement, reprise, garantie]`
- **Schema.org** : `AutoDealer` + chaque voiture en `Car` / `Offer`

## Ce que disent les clients
Confiance, transparence, voiture conforme à l'annonce, bien préparée et nettoyée, réponses claires, rapidité, bonne communication par téléphone, rassurant pour un **premier achat**, clients fidèles qui rachètent plusieurs voitures, une Twingo achetée il y a 6 ans sans aucun souci.

Extraits d'avis utilisables (« Avis Google ») :
- « J'avais un peu peur car c'était la première voiture que j'achetais, mais toute l'équipe a su me rassurer et m'accompagner avec beaucoup de sérieux et de transparence. »
- « La voiture était conforme à l'annonce, bien préparée et toutes mes questions ont eu une réponse claire. »
- « J'ai acheté ma voiture dans ce garage il y a maintenant 6 ans et je n'ai jamais eu le moindre souci avec. »
- « J'ai acheté plusieurs voitures chez eux, je n'ai jamais eu de problème. »
- « Je suis ressorti avec ma Toyota en très bon état, toute propre et nettoyée, avec le sourire. »

## Direction artistique
- Inspiration : **la confiance d'un vendeur de quartier, pas d'un concessionnaire froid** : carnet d'entretien, clé posée sur un comptoir, ticket « contrôlé », plaque WW.
- Palette : bleu nuit, blanc, beige sable, accent vert « vérifié ».
- Typo : une sans à caractère (ex. Space Grotesk, Sora) + une sans neutre ; la note **5,0** en très grand comme élément graphique.
- Idée signature : chaque voiture présentée comme une **fiche « carnet »** (année, km, carburant, boîte, prix en gros chiffres), et un bandeau de confiance « 5,0 sur Google — 32 avis » en haut.

## Structure
1. **Accueil** : « Voitures d'occasion contrôlées et préparées, à Groslay », note 5,0/5, 3 voitures mises en avant, boutons Appeler / Voir le stock.
2. **Nos véhicules** : liste filtrable (marque, prix max, carburant, boîte) générée depuis `src/data/vehicules.json` (fichier facile à mettre à jour : marque, modèle, version, année, km, carburant, boîte, puissance, prix, photos, statut disponible/réservé/vendu). Remplis-le avec **3 exemples marqués `[EXEMPLE À REMPLACER]`**. Une page par véhicule avec bouton « Je suis intéressé » (tel: + SMS pré-rempli avec le modèle).
3. **Pourquoi MON AUTO** : véhicule conforme à l'annonce, préparé et nettoyé, réponses claires, accompagnement premier achat.
4. **Premier achat ? On vous accompagne** : étapes (essai, vérifications, carte grise, livraison) `[À CONFIRMER]`.
5. **Services** : reprise de votre véhicule, financement, garantie, livraison → tous `[À CONFIRMER]`.
6. **Avis** : 5 extraits + 5,0/5.
7. **Infos pratiques** : horaires (ouvert 7j/7), adresse route de Calais, parking sur place, carte.
8. Lien vers la boutique Leboncoin dans le footer.

---

## Règles communes (à respecter strictement)

### 1. Avant de coder
- Liste les skills et plugins disponibles dans ta session et **utilise toutes celles qui s'appliquent** : design frontend (ex. `frontend-design`), tests navigateur / captures (Playwright, `webapp-testing`), images, déploiement, etc. Dis-moi lesquelles tu utilises.
- Propose-moi en 10 lignes max la direction artistique (palette en hex, 2 polices, ambiance, 1 idée de mise en page signature) **puis enchaîne sans attendre ma validation**.

### 2. Stack technique
- **Astro + Tailwind CSS**, site statique, zéro framework JS lourd côté client (îlots JS seulement si nécessaire).
- Polices auto-hébergées (`@fontsource`), pas d'appel Google Fonts.
- Images en AVIF/WebP via `astro:assets`, `loading="lazy"` sauf la première image.
- Déploiement prévu sur **Vercel** (ajoute la config si besoin). Si un accès Vercel est connecté dans ta session, fais un déploiement **preview** et donne-moi l'URL.
- Objectif Lighthouse : ≥ 95 sur les 4 scores, mobile.

### 3. Design qui NE FAIT PAS « site généré par IA » (priorité n°1)
Interdit :
- dégradés violet/bleu, « glassmorphism », blobs flous en fond, néons, ombres molles partout ;
- la grille « 3 cartes avec une icône + titre + 2 lignes » ;
- les emojis comme icônes, les icônes génériques type Heroicons/Lucide posées partout ;
- Inter/Poppins/Montserrat seules, tout centré, tout arrondi en `rounded-2xl` ;
- les phrases creuses : « Bienvenue chez… », « Découvrez… », « Plongez dans… », « Votre partenaire de confiance », « Une expérience unique », « Notre passion, votre satisfaction » ;
- les fausses stats (« +500 clients satisfaits »), les faux témoignages, les photos de banque d'images clichés (poignée de main, personnes en costume qui sourient).

À faire :
- une **identité propre au lieu** (voir la direction artistique plus haut), avec un ou deux partis pris forts : typographie éditoriale, mise en page asymétrique, détails réels (ardoise, ticket, plaque, carte routière, numéro de rue en très grand…) ;
- des textes **courts, concrets, à la voix du commerçant**, avec de vrais détails (horaires, plats, adresses, noms de rues, parkings) ;
- du rythme : alterner sections pleines et aérées, une grande typo, des espaces généreux ;
- des micro-interactions sobres (hover, apparition légère au scroll), rien de plus ;
- `prefers-reduced-motion` respecté.

### 4. Contenu : zéro invention
- Utilise **uniquement** les informations fournies dans ce prompt.
- Tout ce qui manque (prix, plats exacts, photos, nom du gérant, SIRET…) = un marqueur visible **`[À CONFIRMER]`** et une entrée dans le fichier `A_COMPLETER.md` à la racine.
- Avis clients : n'utilise **que** les extraits fournis, attribués « Avis Google ». Jamais d'avis inventé, jamais de nom inventé.

### 5. Photos
- **Ne télécharge pas et n'intègre pas** de photos Google Maps / Facebook / Instagram (droits d'auteur des clients et du commerce).
- Mets des emplacements propres (bloc couleur + légende du cliché attendu, pas de gris « placeholder ») et crée `PHOTOS_A_PRENDRE.md` : la liste précise des photos à faire (cadrage, lumière, format), pour que je les prenne moi-même chez le commerçant.

### 6. SEO local (indispensable)
- `<html lang="fr">`, title + meta description uniques, Open Graph, favicon.
- **JSON-LD schema.org** adapté (type indiqué plus haut) avec nom, adresse, téléphone, horaires `openingHoursSpecification`, géolocalisation, `sameAs` (réseaux sociaux).
- Nom / adresse / téléphone identiques partout (NAP), pied de page compris.
- Carte : iframe Google Maps chargée **au clic** (façade légère) pour ne pas plomber la perf.
- `sitemap.xml`, `robots.txt`, URLs propres, H1 unique, balises `alt` descriptives.
- Mots-clés locaux naturels : la ville + les communes voisines (Groslay, Montmorency, Saint-Brice-sous-Forêt, Sarcelles, Deuil-la-Barre, Montmagny, Domont, Ézanville).

### 7. Conversion et mobile
- Mobile d'abord. **Bouton d'appel fixe en bas d'écran sur mobile** (`tel:`), + bouton itinéraire (lien Google Maps).
- Horaires lisibles, avec indication « Ouvert maintenant / Fermé » calculée en JS léger (fuseau Europe/Paris).
- Accessibilité AA : contrastes, focus visibles, navigation clavier, tailles de cibles ≥ 44 px.

### 8. Légal
- Page **Mentions légales** (éditeur, hébergeur Vercel, SIRET `[À CONFIRMER]`) et **Politique de confidentialité**.
- Pas de traceur, donc pas de bandeau cookies. Si un formulaire existe : consentement RGPD + envoi via un service sans backend (ex. Formspree / Web3Forms, clé `[À CONFIRMER]`).

### 9. Livraison
1. `npm run build` sans erreur ni warning.
2. Captures Playwright **mobile (390 px) et desktop (1440 px)** de chaque page ; regarde-les toi-même et corrige ce qui fait « template » ou « IA » avant de me rendre la main.
3. Un `README.md` court : lancer en local, déployer, où changer textes / photos / horaires.
4. Les fichiers `A_COMPLETER.md` et `PHOTOS_A_PRENDRE.md`.
5. Un résumé final de 10 lignes max : ce qui est fait, ce qui manque.
