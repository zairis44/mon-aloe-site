import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const produits = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/produits' }),
  schema: z.object({
    name: z.string(),
    reference: z.string().optional(),
    slug: z.string(),
    price: z.number(),
    image: z.string(),
    images: z.array(z.string()).optional(),
    category: z.string(),
    description: z.string(),
    titreDetails: z.string().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),
    video: z.string().optional(),
    lienCommande: z.string().optional(),
<<<<<<< HEAD
    featured: z.boolean().default(false),
    disponible: z.boolean().default(true),
=======
>>>>>>> 75a4dceb7b0c1f0328825babad017a3bd7eeb7f3
    faq: z.array(z.object({
      question: z.string(),
      reponse: z.string(),
    })).optional(),
    caracteristiques: z.array(z.object({
      titre: z.string(),
      contenu: z.string(),
    })).optional(),
  }),
});

const blog = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/blog' }),
  schema: z.object({
    title: z.string(),
    description: z.string(), // ← max(160) retiré
    pubDate: z.coerce.date(),
    updatedDate: z.coerce.date().optional(),
    author: z.string().default('Rafael Avenard'),
    category: z.string(),
    tags: z.array(z.string()).default([]),
    image: z.string().optional(),
    imageAlt: z.string().optional(),
    produitsLies: z.array(z.object({
      slug: z.string(),
      nom: z.string(),
    })).default([]),
    draft: z.boolean().default(false),
  }),
});

export const collections = { produits, blog };
