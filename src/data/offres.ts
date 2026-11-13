/**
 * src/data/offres.ts
 * Source unique des offres promotionnelles en cours.
 * Utilisée par le popup (PopupRemise.astro) et la page /code-promo-forever/.
 *
 * Les dates sont vérifiées dans le navigateur : en dehors de la période
 * [debut, fin], le popup ne s'affiche pas et la page /code-promo-forever/
 * bascule sur le message « pas de code en cours ». Aucun rebuild nécessaire
 * le jour de la fin de l'offre.
 *
 * Pour une nouvelle offre : remplacer OFFRE_EN_COURS (code créé côté
 * back-office Forever), puis build + push.
 */

export interface Offre {
  /** Nom affiché dans le badge du popup */
  nom: string;
  code: string;
  remise: string;
  minimum: string;
  /** Public visé, affiché tel quel */
  public: string;
  /** ISO 8601 avec fuseau, ex. 2026-11-13T00:00:00+01:00 */
  debut: string;
  fin: string;
  /** Date de fin en toutes lettres, pour les textes */
  finTexte: string;
  conditions: string;
  /** Variante visuelle du popup */
  theme: 'standard' | 'blackfriday';
}

export const OFFRE_EN_COURS: Offre = {
  nom: 'Black Friday',
  code: 'BLACKFRIDAY',
  remise: '15 %',
  minimum: '50 €',
  public: 'nouveaux clients de la boutique Forever',
  debut: '2026-11-13T00:00:00+01:00',
  fin: '2026-11-30T23:59:59+01:00',
  finTexte: 'dimanche 30 novembre 2026',
  conditions:
    "Offre réservée aux nouveaux clients de la boutique Forever, valable jusqu'au dimanche 30 novembre 2026 inclus, dès 50 € d'achat. Non cumulable avec une autre offre.",
  theme: 'blackfriday',
};

/** Lien de parrainage vers la boutique officielle Forever */
export const LIEN_BOUTIQUE = 'https://www.foreverliving.fr/ref/330001628607/';
