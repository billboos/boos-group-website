import { defineCollection, z } from 'astro:content';
import { glob } from 'astro/loaders';

const publications = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/publications" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number(),
    venue: z.string(),
    type: z.enum(['paper', 'book', 'patent', 'software']).default('paper'),
    cover: image().optional(),
    doi: z.string().optional(),
    award: z.string().optional(),
    links: z.object({
      pdf: z.string().optional(),
      code: z.string().optional(),
      website: z.string().optional(),
      demo: z.string().optional(),
      slides: z.string().optional(),
      video: z.string().optional(),
    }).optional(),
    featured: z.boolean().default(false),
    badges: z.array(z.object({
      text: z.string(),
      type: z.enum(['gold', 'blue', 'red', 'green', 'default']).default('default')
    })).optional(),
  }),
});

const books = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/books" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    authors: z.array(z.string()),
    year: z.number(),
    venue: z.string(),
    cover: image().optional(),
    doi: z.string().optional(),
    award: z.string().optional(),
    links: z.object({
      pdf: z.string().optional(),
      code: z.string().optional(),
      website: z.string().optional(),
      demo: z.string().optional(),
      slides: z.string().optional(),
      video: z.string().optional(),
    }).optional(),
    badges: z.array(z.object({
      text: z.string(),
      type: z.enum(['gold', 'blue', 'red', 'green', 'default']).default('default')
    })).optional(),
  }),
});

const team = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/team" }),
  schema: ({ image }) => z.object({
    name: z.string(),
    role: z.enum([
      'Principal Investigator',
      'Professor',
      'Associate Professor',
      'Assistant Professor',
      'Postdoc',
      'Research Assistant',
      'PhD Student',
      'Master Student',
      'Undergraduate',
      'Alumni'
    ]),
    // Which physical/organizational team a current member sits in. Alumni are grouped
    // by role regardless of this field. See src/pages/team.astro.
    group: z.enum(['berkeley', 'india']).default('berkeley'),
    title: z.array(z.string()).optional(), // For specific academic titles like "Academician", "Changjiang Scholar"
    avatar: image(),
    bio: z.string().optional(), // Short bio for card
    email: z.string().optional(),
    website: z.string().optional(),
    linkedin: z.string().optional(),
    github: z.string().optional(),
    twitter: z.string().optional(),
    googleScholar: z.string().optional(),
    weight: z.number().default(100),
  }),
});

const news = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/news" }),
  schema: z.object({
    title: z.string(),
    date: z.date(),
    summary: z.string().optional(),
    link: z.string().optional(),
  }),
});

const research = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/research" }),
  schema: ({ image }) => z.object({
    title: z.string(),
    description: z.string(),
    cover: image().optional(),
    order: z.number().default(100),
  }),
});

// Freeform static pages (About, Data & Tools) kept in Markdown so they stay editable
// without touching components.
const pages = defineCollection({
  loader: glob({ pattern: "**/*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
  }),
});

export const collections = {
  publications,
  books,
  team,
  news,
  research,
  pages,
};
