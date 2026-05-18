import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

// Collection des produits aloe vera
const produits = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/produits' }),
  schema: z.object({
    name: z.string(),
    reference: z.string(),
    slug: z.string(),
    price: z.number(),
    image: z.string(),
    images: z.array(z.string()).default([]),
    category: z.string(),
    description: z.string(),
    titreDetails: z.string().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    video: z.string().optional(),
    lienCommande: z.string().optional(),
    faq: z
      .array(z.object({ question: z.string(), reponse: z.string() }))
      .default([]),
    caracteristiques: z
      .array(z.object({ titre: z.string(), contenu: z.string() }))
      .default([]),
  }),
});

export const collections = { produits };
