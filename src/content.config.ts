import { defineCollection } from "astro:content";
import { z } from "astro/zod";
import { glob } from "astro/loaders";
import config from "@/config";

export const BLOG_PATH = "src/content/blog";

export const PILLAR_VALUES = [
  "scale-math",
  "saas-replacement",
  "production-blueprints",
  "pricing-postmortems",
] as const;

const posts = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: `./${BLOG_PATH}` }),
  schema: ({ image }) =>
    z.object({
      author: z.string().default(config.site.author),
      pubDatetime: z.date(),
      modDatetime: z.date().optional().nullable(),
      title: z.string(),
      description: z.string(),
      draft: z.boolean().optional(),
      episode: z.number().int().positive(),
      pillar: z.enum(PILLAR_VALUES),
      tags: z.array(z.string()).default(["architecture"]),
      youtubeId: z.string(),
      verdict: z.object({
        label: z.string(),
        saasCost: z.string(),
        selfHostCost: z.string(),
      }),
      leadMagnet: z.string().optional(),
      featured: z.boolean().optional(),
      ogImage: image().or(z.string()).optional(),
      canonicalURL: z.string().optional(),
      hideEditPost: z.boolean().optional(),
      hideToc: z.boolean().optional(),
      timezone: z
        .string()
        .optional()
        .transform(tz => tz || undefined),
    }),
});

const pages = defineCollection({
  loader: glob({ pattern: "**/[^_]*.{md,mdx}", base: "./src/content/pages" }),
  schema: z.object({
    title: z.string(),
    description: z.string().optional(),
    ogImage: z.string().optional(),
    canonicalURL: z.string().optional(),
  }),
});

export const collections = { posts, pages };
