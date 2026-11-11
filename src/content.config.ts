import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

/** A string translated to every supported language. */
const localized = z.object({
	es: z.string(),
	en: z.string(),
});

const projects = defineCollection({
	loader: glob({ pattern: '*.yaml', base: './src/content/projects' }),
	schema: ({ image }) =>
		z.object({
			/** Lower numbers are shown first. */
			order: z.number(),
			title: localized,
			description: localized,
			stack: z.array(z.string()).min(1),
			images: z.array(image()).min(1),
			repo: z.url().optional(),
			demo: z.url().optional(),
			app: z.url().optional(),
		}),
});

const experience = defineCollection({
	loader: glob({ pattern: '*.yaml', base: './src/content/experience' }),
	schema: z.object({
		company: z.string(),
		role: localized,
		description: localized,
		/** Year and month, e.g. 2024-06. */
		start: z.string().regex(/^\d{4}-\d{2}$/),
		/** Omit while the position is current. */
		end: z.string().regex(/^\d{4}-\d{2}$/).optional(),
		stack: z.array(z.string()),
	}),
});

export const collections = { projects, experience };
