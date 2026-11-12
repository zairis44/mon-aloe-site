/**
 * src/data/maillage.ts
 * Source unique du maillage interne produits ↔ produits ↔ guides.
 *
 * Trois choses vivent ici :
 *   1. PAGES_GELEES       : fiches produit sous fenêtre de mesure → aucun bloc de maillage ajouté.
 *   2. ASSOCIATIONS       : pour chaque fiche, 3 à 4 fiches à associer, avec la raison en une phrase.
 *   3. GUIDES_CATEGORIE   : articles du blog proposés quand aucun article ne cite la fiche
 *                           (et affichés en bas des pages catégorie).
 *
 * Les articles qui citent une fiche (champ `produitsLies` du blog) sont détectés
 * automatiquement : rien à saisir ici pour eux.
 *
 * Une faute de slug fait échouer `npm run build` avec un message explicite.
 */

// ── 1. Fiches gelées ───────────────────────────────────────────────────────
// Retirer une ligne = la fiche reçoit les blocs de maillage au prochain build.
// Raison du gel (A-NE-PAS-OUBLIER.md) : seoTitle modifié le 29/08, remesure à faire.
export const PAGES_GELEES = new Set<string>([
  'forever-pulpe-daloe-vera',
  'forever-fab-active-boost',
  'forever-aloe-avocado-face-and-body-soap',
]);

// ── 2. Associations produit → produits ─────────────────────────────────────
// [slug cible, raison affichée sous le lien]. Raisons descriptives, sans promesse santé.
type Association = [slug: string, raison: string];

export const ASSOCIATIONS: Record<string, Association[]> = {
  // Boissons aloe vera
  'forever-pulpe-daloe-vera': [
    ['forever-aloe-berry-nectar', 'La boisson aloe vera en version fruitée'],
    ['forever-aloe-mango', 'Une autre saveur pour varier les cures'],
    ['forever-aloe-vera-peche-bien-etre', 'Une troisième saveur de la gamme boissons'],
    ['programme-c9-forever-vanille-peche', 'Le programme de 9 jours construit autour du gel d’aloe vera'],
  ],
  'forever-aloe-berry-nectar': [
    ['forever-pulpe-daloe-vera', 'La pulpe pure, sans arôme, pour comparer'],
    ['forever-aloe-mango', 'Une autre boisson fruitée de la gamme'],
    ['forever-aloe-vera-peche-bien-etre', 'Une autre saveur de la gamme boissons'],
    ['forever-aloe-vera-4pack', 'Un coffret pour goûter plusieurs boissons'],
  ],
  'forever-aloe-mango': [
    ['forever-pulpe-daloe-vera', 'La pulpe pure, sans arôme, pour comparer'],
    ['forever-aloe-berry-nectar', 'Une autre boisson fruitée de la gamme'],
    ['forever-aloe-vera-peche-bien-etre', 'Une autre saveur de la gamme boissons'],
    ['forever-aloe-vera-4pack', 'Un coffret pour goûter plusieurs boissons'],
  ],
  'forever-aloe-vera-peche-bien-etre': [
    ['forever-pulpe-daloe-vera', 'La pulpe pure, sans arôme, pour comparer'],
    ['forever-aloe-berry-nectar', 'Une autre boisson fruitée de la gamme'],
    ['forever-aloe-mango', 'Une autre saveur de la gamme boissons'],
  ],
  'forever-aloe-vera-4pack': [
    ['forever-pulpe-daloe-vera', 'La boisson de base à la bouteille'],
    ['forever-4-pack-mix', 'L’autre coffret de la gamme, pour comparer'],
    ['forever-aloe-berry-nectar', 'Une des boissons à goûter à l’unité'],
  ],
  'forever-4-pack-mix': [
    ['forever-aloe-vera-4pack', 'L’autre coffret de la gamme, pour comparer'],
    ['forever-pulpe-daloe-vera', 'La boisson de base à la bouteille'],
    ['forever-aloe-mango', 'Une des boissons à goûter à l’unité'],
  ],
  'forever-freedom-confort-articulaire': [
    ['forever-pulpe-daloe-vera', 'La boisson de base de toute cure aloe vera'],
    ['forever-aloe-msm-gel', 'Un gel à base de MSM, ingrédient aussi présent dans Freedom'],
    ['forever-argi-pls', 'Un autre produit de la gamme sport et forme'],
  ],
  'forever-fab-active-boost': [
    ['forever-pulpe-daloe-vera', 'La boisson de base de toute cure aloe vera'],
    ['forever-argi-pls', 'Un autre produit de la gamme sport et forme'],
    ['forever-fast-break', 'Une barre à emporter pour les journées actives'],
    ['forever-therm', 'Un autre produit de la gamme sport et forme'],
  ],
  'mini-aloe-argi-plus': [
    ['forever-argi-pls', 'Le produit Argi+ au format de référence'],
    ['forever-pulpe-daloe-vera', 'La boisson de base de toute cure aloe vera'],
    ['forever-fab-active-boost', 'Une autre boisson de la gamme active'],
  ],

  // Sport et fitness
  'forever-argi-pls': [
    ['mini-aloe-argi-plus', 'Le même univers Argi+, au format mini'],
    ['forever-fab-active-boost', 'Une boisson de la gamme active'],
    ['forever-fast-break', 'Une barre à emporter pour les journées actives'],
    ['forever-pulpe-daloe-vera', 'La boisson de base de toute cure aloe vera'],
  ],
  'forever-fast-break': [
    ['forever-therm', 'Un autre produit de la gamme sport et forme'],
    ['forever-argi-pls', 'Un autre produit de la gamme sport et forme'],
    ['forever-fab-active-boost', 'Une boisson de la gamme active'],
    ['forever-lite-ultra-vanille', 'Le shake de la gamme, à la vanille'],
  ],
  'forever-therm': [
    ['forever-fast-break', 'Une barre à emporter pour les journées actives'],
    ['forever-lite-ultra-vanille', 'Le shake de la gamme, à la vanille'],
    ['programme-f15-debutant-vanille', 'Un programme de 15 jours pour structurer son rythme'],
  ],
  'forever-lite-ultra-vanille': [
    ['forever-lite-ultra-choco', 'Le même shake, au chocolat'],
    ['forever-therm', 'Un autre produit de la gamme sport et forme'],
    ['programme-f15-debutant-vanille', 'Un programme de 15 jours pour structurer son rythme'],
  ],
  'forever-lite-ultra-choco': [
    ['forever-lite-ultra-vanille', 'Le même shake, à la vanille'],
    ['forever-therm', 'Un autre produit de la gamme sport et forme'],
    ['programme-f15-debutant-chocolat', 'Un programme de 15 jours pour structurer son rythme'],
  ],

  // Programmes
  'programme-c9-forever-vanille-peche': [
    ['programme-c9-forever-chocolat-peche', 'Le même programme, saveur chocolat'],
    ['forever-pulpe-daloe-vera', 'La boisson de base à garder après la cure'],
    ['programme-f15-debutant-vanille', 'Une suite possible : 15 jours pour ancrer ses habitudes'],
    ['programme-dx4-forever', 'Un format plus court, sur 4 jours'],
  ],
  'programme-c9-forever-chocolat-peche': [
    ['programme-c9-forever-vanille-peche', 'Le même programme, saveur vanille'],
    ['forever-pulpe-daloe-vera', 'La boisson de base à garder après la cure'],
    ['programme-f15-debutant-chocolat', 'Une suite possible : 15 jours pour ancrer ses habitudes'],
    ['programme-dx4-forever', 'Un format plus court, sur 4 jours'],
  ],
  'programme-dx4-forever': [
    ['programme-c9-forever-vanille-peche', 'Un format plus long, sur 9 jours'],
    ['forever-pulpe-daloe-vera', 'La boisson de base de toute cure aloe vera'],
    ['programme-f15-debutant-vanille', 'Une suite possible : 15 jours pour ancrer ses habitudes'],
  ],
  'programme-f15-debutant-vanille': [
    ['programme-f15-debutant-chocolat', 'Le même niveau, saveur chocolat'],
    ['programme-f15-intermediaire-vanille', 'Le niveau suivant'],
    ['programme-c9-forever-vanille-peche', 'Le programme de 9 jours, pour commencer plus court'],
    ['forever-lite-ultra-vanille', 'Le shake de la gamme, à la vanille'],
  ],
  'programme-f15-debutant-chocolat': [
    ['programme-f15-debutant-vanille', 'Le même niveau, saveur vanille'],
    ['programme-f15-intermediaire-chocolat', 'Le niveau suivant'],
    ['programme-c9-forever-chocolat-peche', 'Le programme de 9 jours, pour commencer plus court'],
    ['forever-lite-ultra-choco', 'Le shake de la gamme, au chocolat'],
  ],
  'programme-f15-intermediaire-vanille': [
    ['programme-f15-intermediaire-chocolat', 'Le même niveau, saveur chocolat'],
    ['programme-f15-debutant-vanille', 'Le niveau précédent'],
    ['programme-f15-avance-vanille', 'Le niveau suivant'],
  ],
  'programme-f15-intermediaire-chocolat': [
    ['programme-f15-intermediaire-vanille', 'Le même niveau, saveur vanille'],
    ['programme-f15-debutant-chocolat', 'Le niveau précédent'],
    ['programme-f15-avance-chocolat', 'Le niveau suivant'],
  ],
  'programme-f15-avance-vanille': [
    ['programme-f15-avance-chocolat', 'Le même niveau, saveur chocolat'],
    ['programme-f15-intermediaire-vanille', 'Le niveau précédent'],
    ['forever-therm', 'Un produit de la gamme sport et forme'],
  ],
  'programme-f15-avance-chocolat': [
    ['programme-f15-avance-vanille', 'Le même niveau, saveur vanille'],
    ['programme-f15-intermediaire-chocolat', 'Le niveau précédent'],
    ['forever-therm', 'Un produit de la gamme sport et forme'],
  ],

  // Beauté et bien-être
  'aloe-gelly-forever-gel-apaisant': [
    ['forever-aloe-msm-gel', 'Un autre gel multi-usages de la gamme'],
    ['forever-aloe-propolis-creme', 'Une crème pour un soin plus riche'],
    ['forever-logic-aloe-gel-hydratant', 'Un gel pour le soin du visage'],
  ],
  'forever-aloe-msm-gel': [
    ['aloe-gelly-forever-gel-apaisant', 'Un autre gel multi-usages de la gamme'],
    ['forever-aloe-propolis-creme', 'Une crème pour un soin plus riche'],
    ['forever-freedom-confort-articulaire', 'La boisson à base de MSM, glucosamine et chondroïtine'],
  ],
  'forever-aloe-propolis-creme': [
    ['aloe-gelly-forever-gel-apaisant', 'Un gel plus léger, à base d’aloe vera'],
    ['forever-aloe-msm-gel', 'Un autre gel multi-usages de la gamme'],
    ['forever-logic-aloe-gel-hydratant', 'Un soin hydratant pour le visage'],
  ],
  'forever-aloe-avocado-face-and-body-soap': [
    ['forever-aloe-liquid-soap', 'Le nettoyant en version liquide'],
    ['forever-logic-aloe-gel-hydratant', 'Un soin hydratant à enchaîner après la toilette'],
    ['forever-aloe-ever-shield-deodorant-stick', 'Un autre soin du quotidien'],
  ],
  'forever-aloe-liquid-soap': [
    ['forever-aloe-avocado-face-and-body-soap', 'Le savon en pain, visage et corps'],
    ['forever-logic-aloe-gel-nettoyant', 'Un nettoyant dédié au visage'],
    ['forever-logic-aloe-gel-hydratant', 'Un soin hydratant à enchaîner après la toilette'],
  ],
  'forever-aloe-ever-shield-deodorant-stick': [
    ['forever-aloe-avocado-face-and-body-soap', 'Un savon pour la toilette quotidienne'],
    ['forever-aloe-liquid-soap', 'Le nettoyant en version liquide'],
    ['forever-bright-toothgel', 'Un autre soin du quotidien'],
  ],
  'forever-bright-toothgel': [
    ['forever-aloe-ever-shield-deodorant-stick', 'Un autre soin du quotidien'],
    ['forever-aloe-avocado-face-and-body-soap', 'Un savon pour la toilette quotidienne'],
    ['forever-aloe-liquid-soap', 'Le nettoyant en version liquide'],
  ],
  'forever-logic-aloe-gel-nettoyant': [
    ['forever-logic-aloe-essence-tonifiante', 'L’étape suivante de la routine Logic'],
    ['forever-logic-aloe-gel-hydratant', 'La dernière étape de la routine Logic'],
    ['forever-aloe-liquid-soap', 'Un nettoyant pour le corps'],
  ],
  'forever-logic-aloe-essence-tonifiante': [
    ['forever-logic-aloe-gel-nettoyant', 'L’étape qui précède dans la routine Logic'],
    ['forever-logic-aloe-gel-hydratant', 'L’étape qui suit dans la routine Logic'],
    ['forever-marine-collagen', 'Un autre produit de la gamme beauté'],
  ],
  'forever-logic-aloe-gel-hydratant': [
    ['forever-logic-aloe-gel-nettoyant', 'Le début de la routine Logic'],
    ['forever-logic-aloe-essence-tonifiante', 'L’étape qui précède dans la routine Logic'],
    ['aloe-gelly-forever-gel-apaisant', 'Un gel d’aloe vera pur à 84 %'],
  ],
  'forever-marine-collagen': [
    ['forever-logic-aloe-gel-hydratant', 'Un soin hydratant pour le visage'],
    ['forever-logic-aloe-essence-tonifiante', 'Un autre produit de la gamme beauté'],
    ['forever-pulpe-daloe-vera', 'La boisson de base de toute cure aloe vera'],
  ],
};

// Libellés courts utilisés comme texte de lien (les noms complets des fiches sont longs).
export const LIBELLES: Record<string, string> = {
  'aloe-gelly-forever-gel-apaisant': 'Aloe Gelly',
  'forever-4-pack-mix': 'Forever 4-Pack Mix',
  'forever-aloe-avocado-face-and-body-soap': 'Savon Aloe Avocado',
  'forever-aloe-berry-nectar': 'Aloe Berry Nectar',
  'forever-aloe-ever-shield-deodorant-stick': 'Déodorant Ever-Shield',
  'forever-aloe-liquid-soap': 'Savon liquide Aloe',
  'forever-aloe-mango': 'Aloe Mango',
  'forever-aloe-msm-gel': 'Aloe MSM Gel',
  'forever-aloe-propolis-creme': 'Aloe Propolis Crème',
  'forever-aloe-vera-4pack': 'Aloe Vera 4 Pack',
  'forever-aloe-vera-peche-bien-etre': 'Aloe Vera Pêche',
  'forever-argi-pls': 'Forever Argi+',
  'forever-bright-toothgel': 'Bright Toothgel',
  'forever-fab-active-boost': 'FAB Active Boost',
  'forever-fast-break': 'Fast Break',
  'forever-freedom-confort-articulaire': 'Forever Freedom',
  'forever-lite-ultra-choco': 'Lite Ultra chocolat',
  'forever-lite-ultra-vanille': 'Lite Ultra vanille',
  'forever-logic-aloe-essence-tonifiante': 'Logic Essence Tonifiante',
  'forever-logic-aloe-gel-hydratant': 'Logic Gel Hydratant',
  'forever-logic-aloe-gel-nettoyant': 'Logic Gel Nettoyant',
  'forever-marine-collagen': 'Marine Collagen',
  'forever-pulpe-daloe-vera': 'Forever Aloe Vera Gel',
  'forever-therm': 'Forever Therm',
  'mini-aloe-argi-plus': 'Mini Aloe Argi+',
  'programme-c9-forever-chocolat-peche': 'Programme C9 chocolat-pêche',
  'programme-c9-forever-vanille-peche': 'Programme C9 vanille-pêche',
  'programme-dx4-forever': 'Programme DX4',
  'programme-f15-avance-chocolat': 'Programme F15 avancé chocolat',
  'programme-f15-avance-vanille': 'Programme F15 avancé vanille',
  'programme-f15-debutant-chocolat': 'Programme F15 débutant chocolat',
  'programme-f15-debutant-vanille': 'Programme F15 débutant vanille',
  'programme-f15-intermediaire-chocolat': 'Programme F15 intermédiaire chocolat',
  'programme-f15-intermediaire-vanille': 'Programme F15 intermédiaire vanille',
};

// ── 3. Guides par catégorie ────────────────────────────────────────────────
// Slugs d'articles du blog. Les titres viennent de la collection (pas de doublon ici).
export const GUIDES_CATEGORIE: Record<string, string[]> = {
  'boissons-aloe-vera': [
    'aloe-vera-digestion-bienfaits',
    'aloe-vera-systeme-immunitaire-defenses-naturelles',
    'forever-living-avis-produits-france',
  ],
  'programmes-detox': [
    'programme-c9-forever-guide-cure-detox-9-jours',
    'perdre-du-poids-naturellement-forever-programmes-minceur',
    'c9-forever-avis',
  ],
  'sport-et-fitness': [
    'aloe-vera-sport-recuperation-musculaire',
    'forever-freedom-aloe-vera-articulations-mobilite',
  ],
  'cremes-et-gels': [
    'aloe-vera-peau-beaute-bienfaits-forever',
    'aloe-vera-cheveux-cuir-chevelu-bienfaits',
  ],
  'nutrition': [
    'aloe-vera-systeme-immunitaire-defenses-naturelles',
    'aloe-vera-stress-sommeil-naturel',
  ],
};
