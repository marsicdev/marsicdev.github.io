module.exports = {
    plugins: ["prettier-plugin-astro"],
    ...require("@hypetech/prettier-config"),
    overrides: [
        {
            files: "*.astro",
            options: {
                parser: "astro",
            },
        },
    ],
}
