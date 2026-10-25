import data from './vehicules.json';

export type Vehicule = {
  slug: string;
  exemple?: string;
  marque: string;
  modele: string;
  version: string | null;
  annee: number | null;
  km: number | null;
  carburant: string | null;
  boite: string | null;
  puissance: string | null;
  prix: number | null;
  photos: string[];
  statut: 'disponible' | 'réservé' | 'vendu';
  description?: string;
};

export const VEHICULES = data as Vehicule[];
export const AC = '[À CONFIRMER]';

const nf = new Intl.NumberFormat('fr-FR');
export const titre = (v: Vehicule) => [v.marque, v.modele, v.version].filter(Boolean).join(' ');
export const fmtKm = (v: Vehicule) => (v.km == null ? AC : `${nf.format(v.km)} km`);
export const fmtPrix = (v: Vehicule) => (v.prix == null ? null : `${nf.format(v.prix)} €`);
export const val = (x: string | number | null) => (x == null || x === '' ? AC : String(x));
