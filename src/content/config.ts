import { defineCollection, z } from "astro:content"

const items = defineCollection({
	schema: z.object({
		title: z.string(),
	}),
})

const proyectos = defineCollection({
	schema: z.object({
		title: z.string(),
		img: z.string(),
		url: z.string().url().optional(),
	}),
})

export const collections = { items, proyectos }
