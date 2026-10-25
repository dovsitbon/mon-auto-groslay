// Données de l'entreprise : NAP, horaires, liens. Modifier ici, tout le site suit.
export const SITE = {
  nom: 'MON AUTO',
  forme: 'SARL',
  siren: '991 260 142',
  adresse: { rue: '37 route de Calais', cp: '95410', ville: 'Groslay', pays: 'FR' },
  telAffiche: '06 85 96 94 77',
  telLien: '+33685969477',
  note: '5,0',
  nbAvis: 32,
  leboncoin: 'https://www.leboncoin.fr/boutique/7226070/mon_auto.htm',
  itineraire:
    'https://www.google.com/maps/dir/?api=1&destination=37%20route%20de%20Calais%2C%2095410%20Groslay',
  carte: 'https://www.google.com/maps?q=37%20route%20de%20Calais%2C%2095410%20Groslay&output=embed',
  voisines: ['Montmorency', 'Saint-Brice-sous-Forêt', 'Sarcelles', 'Deuil-la-Barre', 'Montmagny', 'Domont', 'Ézanville'],
};

// Horaires. jour : 0 = dimanche … 6 = samedi. Format 24 h "HH:MM".
export const HORAIRES = [
  { jour: 1, nom: 'Lundi', ouvre: '09:30', ferme: '19:00' },
  { jour: 2, nom: 'Mardi', ouvre: '09:30', ferme: '19:00' },
  { jour: 3, nom: 'Mercredi', ouvre: '09:30', ferme: '19:00' },
  { jour: 4, nom: 'Jeudi', ouvre: '09:30', ferme: '19:00' },
  { jour: 5, nom: 'Vendredi', ouvre: '09:30', ferme: '19:00' },
  { jour: 6, nom: 'Samedi', ouvre: '09:30', ferme: '19:00' },
  { jour: 0, nom: 'Dimanche', ouvre: '10:00', ferme: '17:00' },
];

export const fmtHeure = (h: string) => h.replace(':', 'h');

// Les 5 extraits d'avis fournis (Avis Google). Ne pas en ajouter d'inventés.
export const AVIS = [
  "J'avais un peu peur car c'était la première voiture que j'achetais, mais toute l'équipe a su me rassurer et m'accompagner avec beaucoup de sérieux et de transparence.",
  "La voiture était conforme à l'annonce, bien préparée et toutes mes questions ont eu une réponse claire.",
  "J'ai acheté ma voiture dans ce garage il y a maintenant 6 ans et je n'ai jamais eu le moindre souci avec.",
  "J'ai acheté plusieurs voitures chez eux, je n'ai jamais eu de problème.",
  "Je suis ressorti avec ma Toyota en très bon état, toute propre et nettoyée, avec le sourire.",
];
