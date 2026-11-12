/**
 * src/data/besoins.ts
 * Source unique de la page « Trouver mon produit » (/quel-produit-forever-choisir/)
 * et du bloc d'accueil qui y renvoie.
 *
 * Règles : pas de promesse santé, pas de prix (ils vivent dans les fiches), pas de
 * texte repris des fiches (une phrase courte par produit, descriptive).
 * Une faute de slug (produit ou article) fait échouer `npm run build`.
 */

export interface Besoin {
  id: string;                 // ancre HTML (#id)
  titre: string;              // H2
  court: string;              // libellé de lien (accueil, sommaire de la page)
  intro: string;              // 1-2 phrases, ton honnête
  attention?: string;         // précaution affichée sous la liste
  produits: [slug: string, phrase: string][];
  guides: string[];           // slugs d'articles du blog
  liensExtra?: { href: string; label: string }[];
}

export const BESOINS: Besoin[] = [
  {
    id: 'debuter',
    titre: 'Je débute avec l’aloe vera',
    court: 'Je débute',
    intro:
      'Si vous n’avez jamais essayé, commencez simple : une boisson à l’aloe vera, pas une gamme entière. Le coffret découverte permet de comparer plusieurs saveurs avant de choisir.',
    attention:
      'Avant de commencer, lisez notre guide sur les précautions : certaines personnes doivent demander conseil à un médecin ou à un pharmacien.',
    produits: [
      ['forever-pulpe-daloe-vera', 'La base de la gamme : le gel d’aloe vera à boire, sans arôme.'],
      ['forever-aloe-vera-4pack', 'Un coffret de quatre bouteilles pour goûter avant de choisir.'],
      ['forever-aloe-mango', 'Une boisson à l’aloe vera au goût mangue, pour ceux qui préfèrent le fruité.'],
      ['forever-4-pack-mix', 'L’autre coffret de la gamme, pour comparer les saveurs.'],
    ],
    guides: ['aloe-vera-a-boire-danger-contre-indications', 'forever-living-avis-produits-france'],
  },
  {
    id: 'digestion',
    titre: 'Confort digestif et routine du matin',
    court: 'Digestion',
    intro:
      'L’aloe vera à boire s’intègre facilement à une routine quotidienne. Les boissons de la gamme se distinguent surtout par le goût : nature, canneberge-pomme, pêche ou mangue.',
    attention:
      'En cas de maladie digestive, de grossesse, d’allaitement ou de traitement en cours, demandez l’avis d’un professionnel de santé avant de commencer.',
    produits: [
      ['forever-pulpe-daloe-vera', 'Le gel d’aloe vera nature, la référence de la gamme boissons.'],
      ['forever-aloe-berry-nectar', 'La version canneberge-pomme, plus fruitée.'],
      ['forever-aloe-vera-peche-bien-etre', 'La version pêche, pour varier les saveurs.'],
    ],
    guides: ['aloe-vera-digestion-bienfaits'],
  },
  {
    id: 'energie',
    titre: 'Énergie et vitalité au quotidien',
    court: 'Énergie',
    intro:
      'Des produits de nutrition pour accompagner une journée chargée ou l’effort : une boisson à base d’aloe vera et de guarana, un stick d’arginine, une barre protéinée.',
    attention:
      'Ces produits ne remplacent ni une alimentation variée ni un avis médical. La boisson FAB contient de la caféine naturelle (guarana).',
    produits: [
      ['forever-fab-active-boost', 'Une boisson à l’aloe vera, au guarana et aux vitamines B, fruitée et pétillante.'],
      ['forever-argi-pls', 'Cinq grammes d’arginine et des vitamines, en stick à emporter.'],
      ['forever-fast-break', 'Une barre protéinée beurre de cacahuète et chocolat, 11 g de protéines.'],
    ],
    guides: [],
  },
  {
    id: 'sport-articulations',
    titre: 'Sport et confort articulaire',
    court: 'Sport et articulations',
    intro:
      'Pour les personnes actives : une boisson à l’aloe vera enrichie en glucosamine, chondroïtine et MSM, un gel à appliquer localement après l’effort et du collagène marin à boire.',
    attention:
      'En cas de douleur persistante, consultez un médecin. Vérifiez les allergènes sur l’étiquette avant d’acheter un complément.',
    produits: [
      ['forever-freedom-confort-articulaire', 'Une boisson aloe vera avec glucosamine, chondroïtine et MSM, saveur orange.'],
      ['forever-aloe-msm-gel', 'Un gel non gras à l’aloe vera et au MSM, à appliquer sur une zone tendue.'],
      ['forever-marine-collagen', 'Du collagène marin en dosettes, avec vitamine C, zinc et biotine.'],
    ],
    guides: ['forever-freedom-aloe-vera-articulations-mobilite', 'aloe-vera-sport-recuperation-musculaire'],
  },
  {
    id: 'peau-soins',
    titre: 'Peau et soins à l’aloe vera',
    court: 'Peau et soins',
    intro:
      'L’aloe vera est un grand classique de la cosmétique. La gamme va du gel multi-usages à la routine visage complète, avec une crème plus riche pour les peaux sèches.',
    attention:
      'Faites toujours un test sur le pli du coude avant un nouveau soin. Un gel cosmétique ne se boit pas et ne remplace pas l’avis d’un médecin sur une peau irritée.',
    produits: [
      ['aloe-gelly-forever-gel-apaisant', 'Un gel d’aloe vera pur à 84 %, pour le visage, le corps et les cheveux.'],
      ['forever-logic-aloe-gel-hydratant', 'Un soin visage léger à l’aloe vera et à la niacinamide.'],
      ['forever-logic-aloe-essence-tonifiante', 'L’étape qui précède les soins : une essence sans alcool.'],
      ['forever-aloe-propolis-creme', 'Une crème riche à l’aloe vera et à la propolis, pour les peaux qui tirent.'],
    ],
    guides: ['aloe-vera-peau-beaute-bienfaits-forever', 'aloe-vera-cheveux-cuir-chevelu-bienfaits'],
  },
  {
    id: 'programmes',
    titre: 'Programmes sur plusieurs jours',
    court: 'Programmes',
    intro:
      'Le C9 (9 jours) est le programme le plus connu de la gamme ; le DX4 est une version plus courte de 4 jours. J’ai fait le C9 dix fois et je raconte tout, y compris les jours difficiles, dans mon journal.',
    attention:
      'Un programme n’est pas un traitement. Demandez l’avis d’un professionnel de santé si vous êtes enceinte, si vous allaitez ou si vous suivez un traitement.',
    produits: [
      ['programme-c9-forever-vanille-peche', 'Le programme de 9 jours, shakes vanille-pêche, avec guide jour par jour.'],
      ['programme-c9-forever-chocolat-peche', 'Le même programme, avec des shakes au chocolat.'],
      ['programme-dx4-forever', 'Une version courte de 4 jours, plus concentrée.'],
    ],
    guides: ['programme-c9-forever-guide-cure-detox-9-jours', 'c9-forever-avis'],
    liensExtra: [
      { href: '/mon-journal-c9/', label: 'Lire mon journal du C9, jour par jour' },
      { href: '/recettes-c9/', label: 'Recettes pour accompagner les 9 jours' },
    ],
  },
  {
    id: 'quotidien',
    titre: 'Hygiène et soins du quotidien',
    court: 'Quotidien',
    intro:
      'Quelques produits à l’aloe vera pour la routine de tous les jours : bouche, douche, déodorant. Les plus simples à tester si vous voulez essayer la marque sans changer vos habitudes.',
    attention:
      'Comme pour tout produit au contact de la peau, faites un test sur le pli du coude avant le premier usage.',
    produits: [
      ['forever-bright-toothgel', 'Un dentifrice gel à l’aloe vera et à la propolis, sans fluor.'],
      ['forever-aloe-ever-shield-deodorant-stick', 'Un déodorant en stick à l’aloe vera.'],
      ['forever-aloe-liquid-soap', 'Un savon liquide doux pour le corps.'],
      ['forever-aloe-avocado-face-and-body-soap', 'Un savon à l’avocat pour le visage et le corps.'],
    ],
    guides: [],
  },
];
