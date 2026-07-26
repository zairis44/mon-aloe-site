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
    featured: z.boolean().default(false),
    disponible: z.boolean().default(true),
    faq: z.array(z.object({
      question: z.string(),
      reponse: z.string(),
    })).optional(),
    caracteristiques: z.array(z.object({
      titre: z.string(),
      contenu: z.string(),
    })).optional(),
    avis: z.array(z.object({
      texte: z.string(),
      auteur: z.string(),
      ville: z.string().optional(),
      note: z.number().min(1).max(5).default(5),
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
    seoTitle: z.string().optional(),
    produitsLies: z.array(z.object({
      slug: z.string(),
      nom: z.string(),
    })).default([]),
    articlesLies: z.array(z.object({
      slug: z.string(),
      titre: z.string(),
    })).default([]),
    faq: z.array(z.object({
      question: z.string(),
      reponse: z.string(),
    })).optional(),
    draft: z.boolean().default(false),
  }),
});

export const collections = { produits, blog };
