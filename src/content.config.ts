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
    description: z.string(),
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
    draft: z.boolean().default(false),
  }),
});

// ── Collection "journal" ─────────────────────────────────────────
// Journal de bord type "Mon C9" : un fichier = une cure suivie
// jour après jour. Rempli progressivement (1 bloc par jour dans
// le tableau `jours`), puis clôturé avec le bloc `synthese`.
const journal = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './src/content/journal' }),
  schema: z.object({
    titre: z.string(),
    slug: z.string(),
    programme: z.enum(['vanille-peche', 'chocolat-peche']),
    dateDebut: z.coerce.date(),
    statut: z.enum(['en-cours', 'termine']).default('en-cours'),
    imageCouverture: z.string().optional(),
    seoTitle: z.string().optional(),
    seoDescription: z.string().optional(),

    mesurationsDepart: z.object({
      poids: z.number().optional(),
      tourPoitrine: z.number().optional(),
      tourNombril: z.number().optional(),
      tourTaille: z.number().optional(),
      tourHanches: z.number().optional(),
      tourCuisse: z.number().optional(),
      tourBras: z.number().optional(),
      energie: z.number().min(1).max(10).optional(),
      sommeil: z.number().min(1).max(10).optional(),
      digestion: z.number().min(1).max(10).optional(),
      motivation: z.string().optional(),
      vetementReference: z.string().optional(),
    }),

    // Section "Mon histoire" — pourquoi/comment Rafael a découvert le C9
    monHistoire: z.object({
      texte: z.string(),
    }).optional(),

    jours: z.array(z.object({
      numero: z.number().min(1).max(9),
      date: z.coerce.date(),
      titre: z.string(),
      poids: z.number().optional(),
      ressenti: z.string(),
      positifs: z.array(z.string()).default([]),
      negatifs: z.array(z.string()).default([]),
      note: z.number().min(1).max(5).optional(),
      photos: z.array(z.object({
        src: z.string(),
        legende: z.string().optional(),
      })).default([]),
      // Encadré pédagogique du jour (compléments, hydratation, sport…)
      infoDuJour: z.object({
        titre: z.string(),
        texte: z.string(),
        photo: z.string().optional(),
      }).optional(),
    })).default([]),

    // Liste globale de conseils pratiques, affichée en encadré dédié
    pointsANePasNegliger: z.array(z.string()).default([]),

    synthese: z.object({
      poidsPerdu: z.number().optional(),
      tourTaillePerdu: z.number().optional(),
      avisGlobal: z.string().optional(),
      pointsPositifs: z.array(z.string()).default([]),
      pointsNegatifs: z.array(z.string()).default([]),
      recommandation: z.string().optional(),
      pourQui: z.string().optional(),
    }).optional(),

    produitsLies: z.array(z.object({
      slug: z.string(),
      nom: z.string(),
    })).default([]),
    articlesLies: z.array(z.object({
      slug: z.string(),
      titre: z.string(),
    })).default([]),
  }),
});

export const collections = { produits, blog, journal };
