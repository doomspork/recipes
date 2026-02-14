import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const ingredient = z.object({
  amount: z.string().optional(),
  name: z.string(),
});

const recipes = defineCollection({
  loader: glob({ pattern: "**/*.md", base: "./src/data/recipes" }),
  schema: z.object({
    title: z.string(),
    servings: z.string(),
    prep_time: z.string().optional(),
    rest_time: z.string().optional(),
    cook_time: z.string().optional(),
    total_time: z.string(),
    method: z.string(),
    ingredients: z.array(ingredient).optional(),
    ingredient_groups: z.array(z.object({
      name: z.string(),
      items: z.array(ingredient),
    })).optional(),
    directions: z.array(z.string()),
  }),
});

export const collections = { recipes };
