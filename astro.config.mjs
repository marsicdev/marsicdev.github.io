import { defineConfig } from "astro/config"
import rehypeExternalLinks from "rehype-external-links"

// https://astro.build/config
export default defineConfig({
    site: "https://marsic.dev",
    vite: {
        ssr: {
            noExternal: ["@picocss/pico"],
        },
    },
    image: {
        remotePatterns: [{ protocol: "https" }],
    },
    output: "static",
    markdown: {
        rehypePlugins: [
            [
                rehypeExternalLinks,
                {
                    content: { type: "text", value: " 🔗" },
                },
            ],
        ],
    },
})
