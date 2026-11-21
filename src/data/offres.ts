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

/**
 * Offre datée en cours, ou null s'il n'y en a pas.
 * Décision de Rafael (21/11/2026) : seul le code de bienvenue MYFOREVER est affiché sur le site.
 * Le code BLACKFRIDAY (13 → 30/11/2026) a été retiré. Modèle pour une future offre datée :
 *   { nom: 'Black Friday', code: 'BLACKFRIDAY', remise: '15 %', minimum: '50 €',
 *     public: 'nouveaux clients de la boutique Forever', debut: '2026-11-13T00:00:00+01:00',
 *     fin: '2026-11-30T23:59:59+01:00', finTexte: 'dimanche 30 novembre 2026',
 *     conditions: '…', theme: 'blackfriday' }
 */
export const OFFRE_EN_COURS: Offre | null = null;

/**
 * Offre de bienvenue permanente (confirmée par Rafael le 20/11/2026) :
 * code MYFOREVER, −15 % dès 50 € pour les nouveaux clients, à leur inscription
 * sur la boutique Forever (donc sur la première commande).
 */
export const OFFRE_BIENVENUE = {
  code: 'MYFOREVER',
  remise: '15 %',
  minimum: '50 €',
  public: 'nouveaux clients',
  portee: 'votre première commande',
  conditions:
    "Code MYFOREVER réservé aux nouveaux clients qui créent leur compte sur la boutique Forever, dès 50 € d'achat, sur la commande passée à l'inscription. Non cumulable avec une autre offre.",
};

/**
 * La même offre de bienvenue au format Offre, pour le popup et le bandeau.
 * Elle sert de « secours » : affichée seulement quand aucune offre datée
 * (OFFRE_EN_COURS) n'est active, vérifié dans le navigateur.
 */
export const OFFRE_PERMANENTE: Offre = {
  nom: 'Offre de bienvenue',
  code: OFFRE_BIENVENUE.code,
  remise: OFFRE_BIENVENUE.remise,
  minimum: OFFRE_BIENVENUE.minimum,
  public: 'nouveaux clients de la boutique Forever',
  debut: '2026-11-20T00:00:00+01:00',
  fin: '2099-12-31T23:59:59+01:00',
  finTexte: '',
  conditions: OFFRE_BIENVENUE.conditions,
  theme: 'standard',
};

/** Lien de parrainage vers la boutique officielle Forever */
export const LIEN_BOUTIQUE = 'https://www.foreverliving.fr/ref/330001628607/';
