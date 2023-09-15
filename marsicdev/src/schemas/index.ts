import { z } from "astro/zod"

export const talksSchema = z.object({
    title: z.string(),
    summary: z.string(),
    event: z.string(),
    eventUrl: z.string().url().nullable(),
    location: z.string(),
    date: z.string(),
    youTubeId: z.string().url().nullable(),
    slidesUrl: z.string().url().nullable(),
    sourceUrl: z.string().url().nullable(),
})

export const projectsSchema = z.object({
    title: z.string(),
    summary: z.string(),
    status: z.string(),
    date: z.string(),
    website: z.string().url(),
})

export const infoSchema = z.object({
    title: z.string(),
    description: z.string(),
})
