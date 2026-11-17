# CodeToCost Blog (`codetocost.com`)

The SEO and written-analysis companion for the **CodeToCost** YouTube channel (`@CodeToCost`).  
Built on top of [AstroPaper](https://github.com/satnaing/astro-paper) with static output (`dist/`), Pagefind search, MDX, RSS, sitemap, Table of Contents, and dynamic Satori OG images.

> **Clear Architecture, Real Math, Zero Fluff.**

---

## Local Development

```bash
npm install
cp .env.example .env
npm run dev
```

To run a full production build (type-checking + Astro static build + Pagefind indexing):

```bash
npm run build
npm run preview
```

---

## Environment Variables

Copy `.env.example` to `.env` and configure:

| Variable | Required | Description |
| --- | --- | --- |
| `PUBLIC_LISTMONK_URL` | Yes (for newsletter) | Public Listmonk subscription endpoint (e.g. `https://newsletter.codetocost.com/subscription/form` or `/api/public/subscription`). |
| `PUBLIC_LISTMONK_LIST_UUID` | Yes (for newsletter) | Listmonk list UUID that subscribers are added to. |
| `PUBLIC_YOUTUBE_CHANNEL_URL` | Optional | YouTube channel URL used in CTAs. Defaults to `https://www.youtube.com/@CodeToCost`. |
| `PUBLIC_GOOGLE_SITE_VERIFICATION` | Optional | Google Search Console verification token. |

---

## How to Add a New Article

1. Create a new `.mdx` file inside `src/content/blog/` using a kebab-case slug prefixed with the episode number, for example:

   ```text
   src/content/blog/ep03-supabase-vs-self-hosted-postgres.mdx
   ```

2. Add the complete type-safe frontmatter at the top of the file:

   ```yaml
   ---
   title: "Supabase vs Self-Hosted Postgres + Coolify at 100k MAU"
   description: "We simulated auth, realtime, and egress billing on Supabase Pro vs a dedicated Hetzner Postgres stack."
   pubDatetime: 2026-11-20T12:00:00Z
   # modDatetime: 2026-11-22T09:00:00Z # optional
   draft: false
   episode: 3
   pillar: "scale-math" # one of: "scale-math" | "saas-replacement" | "production-blueprints" | "pricing-postmortems"
   tags:
     - supabase
     - postgres
     - self-hosting
   youtubeId: "YOUR_YOUTUBE_VIDEO_ID"
   verdict:
     label: "100k MAU + 500 GB egress"
     saasCost: "$425/mo"
     selfHostCost: "$34/mo"
   leadMagnet: "supabase-replacement-stack" # optional, must match a slug in src/data/blueprints.ts
   featured: false # optional
   ---
   ```

3. Import and use the custom components inside your MDX body as needed:
   - `<VideoEmbed youtubeId="..." title="..." />` — lightweight click-to-load YouTube facade.
   - `<CostTable caption="..." highlightCol={2} columns={[...]} rows={[...]} />` — responsive cost comparison table with sticky header and red/emerald cost highlighting.
   - `<LeadMagnetBox leadMagnet="..." />` — CTA card linking to `/blueprints/<slug>`.
   - `<NewsletterForm idPrefix="..." title="..." description="..." />` — inline Listmonk signup form.

4. If the episode includes a new blueprint, register its metadata in `src/data/blueprints.ts` so it appears on `/blueprints` and `/blueprints/<slug>`.

---

## Deploying on Coolify (Static Site)

This project is configured for **100% static output** in `dist/` (no Node/SSR adapter).

1. Push this repository to GitHub.
2. In **Coolify**, create a new resource pointing to your GitHub repository:
   - **Build Pack**: `Static` (or `Nixpacks` / `Dockerfile` serving static files).
   - **Install Command**: `npm ci`
   - **Build Command**: `npm run build` (runs `astro check`, `astro build`, `pagefind --site dist`, and `node copy-pagefind.mjs`).
   - **Publish Directory**: `dist`
3. Add `PUBLIC_LISTMONK_URL`, `PUBLIC_LISTMONK_LIST_UUID`, and `PUBLIC_YOUTUBE_CHANNEL_URL` in Coolify's **Environment Variables** (make sure they are available at **build time**, since Astro inlines `PUBLIC_*` variables into the static bundle).
4. Enable **Auto Deploy** on push to `main`. Every `git push` automatically rebuilds `dist/` and publishes the updated static site.
