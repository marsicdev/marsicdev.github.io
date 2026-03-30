# marsic.dev

Personal website and portfolio for Marko Arsic — independent software consultant and AI advisor.

**Live:** [marsic.dev](https://marsic.dev)

## Tech Stack

- [Astro](https://astro.build) v6 — static site generator
- [Tailwind CSS](https://tailwindcss.com) v4 — utility-first styling
- [TypeScript](https://typescriptlang.org)

## Project Structure

```text
/
├── public/               # Static assets (favicons, OG image, manifest)
├── src/
│   ├── components/marsic/ # Section components (Hero, Nav, AIFocus, etc.)
│   ├── layouts/           # Base layout with SEO meta tags
│   ├── pages/             # Routes (index, 404)
│   └── styles/            # Global styles
├── astro.config.mjs
└── package.json
```

## Development

```sh
bun install
bun dev        # Start dev server at localhost:4321
bun build      # Build production site to ./dist/
bun preview    # Preview production build locally
```

## SEO

- Open Graph and Twitter Card meta tags
- Structured data (JSON-LD ProfilePage schema)
- Auto-generated sitemap via `@astrojs/sitemap`
- robots.txt, web manifest, and favicon variants
- Canonical URLs
