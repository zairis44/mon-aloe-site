/**
 * src/data/recommandes.ts
 * Les produits que Rafael recommande le plus (liste donnée par Rafael, 13/11/2026).
 * Affichés sur /commander/ dans le bloc « Recommander en 1 clic ».
 * `note` : une ligne courte, sans allégation santé.
 *
 * À ajouter dès que la fiche existe : Aloe Cooling Lotion (référence à confirmer).
 */
export const PRODUITS_RECOMMANDES: { slug: string; note: string }[] = [
  { slug: 'programme-c9-forever-vanille-peche', note: 'Le programme de 9 jours (existe aussi en chocolat)' },
  { slug: 'forever-aloe-vera-peche-bien-etre', note: 'La pulpe d’aloe vera, version pêche' },
  { slug: 'aloe-gelly-forever-gel-apaisant', note: 'Le gel d’aloe vera multi-usages' },
  { slug: 'forever-aloe-ever-shield-deodorant-stick', note: 'Le déodorant sans sels d’aluminium' },
  { slug: 'forever-shampoing-aloe-jojoba', note: 'Le shampoing doux, sans sulfates ajoutés' },
];
