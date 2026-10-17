import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const expediciones = defineCollection({
  loader: glob({ base: './src/content/expediciones', pattern: '**/[^_]*.md' }),
  schema: z.object({
    title: z.string(),
    country: z.string(),
    kind: z.enum(['Alta montaña', 'Trekking', 'Aventura']),
    summary: z.string(),
    // Altitud de cumbre o paso máximo, como texto para admitir marcadores ("[ALTITUD]").
    altitude: z.string(),
    altitudeLabel: z.string().default('Altitud'),
    days: z.string(),
    gain: z.string().optional(),
    level: z.string(),
    groupSize: z.string().optional(),
    departure: z.string(),
    returnDate: z.string().optional(),
    spots: z.string(),
    price: z.string(),
    deposit: z.string().optional(),
    status: z.enum(['abierta', 'proximamente']).default('abierta'),
    order: z.number().default(0),
    photo: z.string(),
    itinerary: z
      .array(z.object({ day: z.string(), title: z.string(), detail: z.string() }))
      .default([]),
    includes: z.array(z.string()).default([]),
    excludes: z.array(z.string()).default([]),
    risks: z.array(z.object({ name: z.string(), mitigation: z.string() })).default([]),
    gallery: z.array(z.string()).default([]),
  }),
});

export const collections = { expediciones };
