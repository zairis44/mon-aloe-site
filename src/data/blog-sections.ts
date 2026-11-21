/**
 * src/data/blog-sections.ts
 * Organisation de la page /blog/ (décision de Rafael, 21/11/2026) :
 *   1. CARROUSEL : les articles mis en avant en haut de page (3 visibles à la fois).
 *   2. SECTIONS  : chaque article publié apparaît dans une seule section, dans l'ordre donné.
 *
 * Seule la page /blog/ lit ce fichier : le champ `category` des articles n'est pas modifié.
 * Un nouvel article doit être ajouté à une section, sinon `npm run build` échoue
 * avec un message qui donne son slug (voir verifierSections()).
 */

// Ordre = ordre d'affichage. Choisis selon le trafic Search Console et les volumes Semrush (21/11/2026).
export const CARROUSEL: string[] = [
  'forever-living-avis-produits-france',
  'c9-forever-avis',
  'programme-c9-forever-guide-cure-detox-9-jours',
  'quelle-boisson-aloe-vera-forever-choisir',
  'creme-aloe-vera-laquelle-choisir',
  'comment-boire-pulpe-aloe-vera',
];

export interface SectionBlog {
  id: string;      // ancre HTML (#id)
  titre: string;   // H2
  court: string;   // libellé du sommaire
  intro: string;   // une phrase
  articles: string[];
}

export const SECTIONS: SectionBlog[] = [
  {
    id: 'boire-aloe-vera',
    titre: 'Boire l’aloe vera',
    court: 'Boire l’aloe vera',
    intro: 'Quelle boisson choisir, comment la prendre, ce qu’il faut savoir avant de commencer.',
    articles: [
      'quelle-boisson-aloe-vera-forever-choisir',
      'comment-boire-pulpe-aloe-vera',
      'aloe-vera-a-boire-danger-contre-indications',
      'gel-aloe-vera-bienfaits-utilisation',
      'pulpe-aloe-vera-comparatif-marques',
    ],
  },
  {
    id: 'programmes-c9',
    titre: 'Programmes C9 et minceur',
    court: 'C9 et minceur',
    intro: 'Le C9 de l’intérieur, les avis passés au crible et le choix entre les programmes.',
    articles: [
      'programme-c9-forever-guide-cure-detox-9-jours',
      'c9-forever-avis',
      'perdre-du-poids-naturellement-forever-programmes-minceur',
    ],
  },
  {
    id: 'beaute-soins',
    titre: 'Beauté et soins à l’aloe vera',
    court: 'Beauté et soins',
    intro: 'Visage, corps, cheveux, soleil : les bons gestes et les soins à choisir.',
    articles: [
      'aloe-vera-peau-beaute-bienfaits-forever',
      'aloe-vera-visage',
      'creme-aloe-vera-laquelle-choisir',
      'aloe-vera-gelly-utilisation',
      'aloe-vera-coup-de-soleil',
      'aloe-vera-cheveux-cuir-chevelu-bienfaits',
      'bakuchiol-ou-retinol',
    ],
  },
  {
    id: 'bien-etre',
    titre: 'Bien-être et vie active',
    court: 'Bien-être et sport',
    intro: 'Digestion, défenses, sommeil, articulations et sport : ce que l’aloe vera apporte, et ce qu’il n’apporte pas.',
    articles: [
      'aloe-vera-digestion-bienfaits',
      'aloe-vera-systeme-immunitaire-defenses-naturelles',
      'aloe-vera-stress-sommeil-naturel',
      'forever-freedom-aloe-vera-articulations-mobilite',
      'aloe-vera-sport-recuperation-musculaire',
    ],
  },
  {
    id: 'avis-forever',
    titre: 'Avis et confiance : Forever Living',
    court: 'Avis sur Forever',
    intro: 'Ce que valent les produits, ce que dit la loi, et comment choisir un distributeur sérieux.',
    articles: [
      'forever-living-avis-produits-france',
      'forever-living-pyramidal-ou-legal',
      'choisir-distributeur-forever-fiable',
    ],
  },
  {
    id: 'devenir-distributeur',
    titre: 'Devenir distributeur',
    court: 'Devenir distributeur',
    intro: 'Le statut, le fonctionnement et ce qu’il faut savoir avant de se lancer.',
    articles: [
      'fbo-forever-living-comment-ca-marche',
      'forever-living-franchise-ou-vente-directe',
      'vente-a-domicile-aloe-vera-vdi',
    ],
  },
];

/** Échoue au build si un article publié n'est dans aucune section, ou dans plusieurs,
 *  ou si un slug du carrousel ou d'une section n'existe pas. */
export function verifierSections(slugsPublies: string[]): void {
  const publies = new Set(slugsPublies);
  const vus = new Map<string, string>();
  for (const s of SECTIONS) {
    for (const slug of s.articles) {
      if (!publies.has(slug)) throw new Error(`blog-sections.ts : article inconnu ou en brouillon « ${slug} » (section ${s.id})`);
      if (vus.has(slug)) throw new Error(`blog-sections.ts : « ${slug} » est dans deux sections (${vus.get(slug)} et ${s.id})`);
      vus.set(slug, s.id);
    }
  }
  for (const slug of slugsPublies) {
    if (!vus.has(slug)) throw new Error(`blog-sections.ts : l'article « ${slug} » n'est dans aucune section : ajoutez-le à SECTIONS`);
  }
  for (const slug of CARROUSEL) {
    if (!publies.has(slug)) throw new Error(`blog-sections.ts : article du carrousel inconnu « ${slug} »`);
  }
}
