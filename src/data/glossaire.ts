/**
 * src/data/glossaire.ts
 * Outils partagés par la rubrique /glossaire/ et le bloc « Ingrédients clés ».
 *
 * Statuts réglementaires (source : tableau DGCCRF des allégations de santé
 * utilisables, onglets « en attente » et « autorisées ») :
 *   - autorisee  : allégation validée au niveau européen (règlement 432/2012)
 *   - en-attente : allégation « en attente », utilisable sous la responsabilité du vendeur
 *   - aucune     : aucune allégation autorisée ni en attente
 *   - a-eviter   : composé qu'on retire des produits, pas un ingrédient actif
 *   - cosmetique : ingrédient de soin pour la peau ou les cheveux, hors champ des allégations santé
 */
import { getCollection, type CollectionEntry } from 'astro:content';

export type Statut = CollectionEntry<'glossaire'>['data']['statut'];

export const STATUTS: Record<Statut, { label: string; classes: string; legende: string }> = {
  'autorisee': {
    label: 'Allégation autorisée',
    classes: 'bg-aloe-100 text-aloe-800',
    legende: 'validée au niveau européen',
  },
  'en-attente': {
    label: 'Allégation en attente',
    classes: 'bg-[#fbeee2] text-[#7a3f1c]',
    legende: 'utilisable, avis européen attendu',
  },
  'aucune': {
    label: 'Aucune allégation',
    classes: 'bg-sand text-[#4a4232]',
    legende: 'rien de santé à promettre',
  },
  'a-eviter': {
    label: 'À éviter',
    classes: 'bg-[#f6e3dc] text-[#7a2e1c]',
    legende: 'composé que les fabricants retirent',
  },
  'cosmetique': {
    label: 'Ingrédient cosmétique',
    classes: 'bg-aloe-50 text-aloe-700 border border-aloe-200',
    legende: 'soin de la peau ou des cheveux',
  },
};

/** URL d'une entrée : page dédiée, ou ancre sur l'index pour une définition courte. */
export function urlEntree(entree: CollectionEntry<'glossaire'>): string {
  return entree.data.pageDediee ? `/glossaire/${entree.id}/` : `/glossaire/#${entree.id}`;
}

/** Tri alphabétique français (accents ignorés). */
export function trierParNom(a: CollectionEntry<'glossaire'>, b: CollectionEntry<'glossaire'>): number {
  return a.data.nom.localeCompare(b.data.nom, 'fr', { sensitivity: 'base' });
}

/** Première lettre, sans accent, en majuscule. */
export function lettre(nom: string): string {
  return nom.normalize('NFD').replace(/[̀-ͯ]/g, '').charAt(0).toUpperCase();
}

/**
 * Toutes les entrées, triées, avec contrôle des slugs produits et des pages dédiées.
 * Une erreur ici fait échouer le build avec un message clair.
 */
export async function entreesGlossaire(): Promise<CollectionEntry<'glossaire'>[]> {
  const [entrees, produits, articles] = await Promise.all([
    getCollection('glossaire'),
    getCollection('produits'),
    getCollection('blog', ({ data }) => !data.draft),
  ]);
  const slugsProduits = new Set(produits.map((p) => p.data.slug));
  const slugsArticles = new Set(articles.map((a) => a.id));

  for (const e of entrees) {
    for (const slug of e.data.produits) {
      if (!slugsProduits.has(slug)) {
        throw new Error(`glossaire/${e.id}.md : la fiche produit « ${slug} » n'existe pas dans src/content/produits.`);
      }
    }
    for (const a of e.data.articlesLies) {
      if (!slugsArticles.has(a.slug)) {
        throw new Error(`glossaire/${e.id}.md : l'article « ${a.slug} » n'existe pas dans src/content/blog.`);
      }
    }
    if (e.data.pageDediee && !(e.body ?? '').trim()) {
      throw new Error(`glossaire/${e.id}.md : pageDediee est à true mais le corps du fichier est vide.`);
    }
  }
  return entrees.sort(trierParNom);
}
