import { defineCollection } from "astro:content"

import { infoSchema, projectsSchema, talksSchema } from "@schemas/index"

const talksCollection = defineCollection({
    type: "content",
    schema: talksSchema,
})

const projectsCollection = defineCollection({
    type: "content",
    schema: projectsSchema,
})

const infoCollection = defineCollection({
    type: "content",
    schema: infoSchema,
})

export const collections = {
    talks: talksCollection,
    projects: projectsCollection,
    info: infoCollection,
}
