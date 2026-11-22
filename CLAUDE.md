# AK Prints website

Marketing agency site for **AK Prints**, Ludhiana, Punjab: websites, ads (Google / YouTube / Meta), SEO, design and printing. Next.js 16 (App Router, Turbopack), React 19, Tailwind v4, plain JavaScript, pnpm.

**Before starting work, read [HANDOFF.md](HANDOFF.md)** for current status, open to-dos and recent decisions. Update it at the end of any session that changes the site.

## Commands

- `pnpm dev`: dev server on http://localhost:3000
- `pnpm build`: production build; must pass before you call work done (all pages are statically generated)
- `pnpm lint`: whole-repo lint fails on old errors in unused UI demo components. Lint the files you touched instead: `pnpm exec eslint <paths>`

## Where things live

- `lib/site.js`: **single source of truth** for business facts (name, address, hours, phone, socials, domain). Metadata, schema, footer, contact page and `llms.txt` all read from here. Never hard-code these elsewhere.
- `lib/pricing.js`: published prices. Used by the calculator, pricing page, service pages, Offer schema and `llms.txt`.
- `lib/services/*.js`: content for every `/services/[slug]` page. `lib/locations.js` holds `/locations/[city]` and `lib/posts.js` holds `/blog/[slug]`. To add a page, add an entry to the data file; the sitemap, nav, footer and `llms.txt` pick it up.
- `lib/schema.js`: JSON-LD builders. `lib/seo.js` has `pageMetadata()`, which every page uses for title, description, canonical and OG.
- `components/site/`: shared shell (`navbar`, `footer`, `ui.jsx` building blocks, `price-calculator`, `plan-table`, `json-ld`).
- `app/sitemap.js`, `app/robots.js`, `app/llms.txt/route.js`, `app/opengraph-image.js`: technical SEO.

## Rules

- **Never invent facts.** No made-up prices, reviews, ratings, client numbers or stats. Only use what the owner has confirmed; if something is missing, leave it empty in `lib/site.js` (empty fields are hidden from the UI and schema).
- **Design taste:** minimal, modern, "built by a senior design engineer". Reuse the existing visual language: `#fafaf9` background, zinc type, double-bezel white cards (`Card` in `components/site/ui.jsx`), small inset chips, blue accent, restrained motion. Don't introduce new styles when a shared block exists.
- **SEO on every page:** one `<h1>`; metadata via `pageMetadata()`; breadcrumb + relevant schema via `<JsonLd>`; content and FAQ answers in server-rendered HTML (no text that only appears after JavaScript runs).
- **AEO/GEO style:** start each page with a 2–3 sentence direct answer that states facts plainly (what, where, price, timeline). Use real questions as FAQ headings.
- **Location pages must stay unique.** Each city needs its own context and angle; no find-and-replace city pages. The only physical studio is in Ludhiana; other cities are "served from Ludhiana".
- **Don't use drei's `<Html>`** in three.js components. It mounts a separate React root per element and causes the "synchronously unmount a root" warning. Use a DOM overlay positioned in `useFrame` (see `components/ui/3d-globe.jsx`).
- Keep third-party scripts lazy (Cal.com loads only when the CTA is near the viewport).
- `.env*` is git-ignored. Env vars: `WA_NUMBER` / `NEXT_PUBLIC_WA_NUMBER`, `NEXT_PUBLIC_PHONE_NUMBER`, `NEXT_PUBLIC_SITE_URL`, `NEXT_PUBLIC_GSC_VERIFICATION`, `NEXT_PUBLIC_BING_VERIFICATION` (see `.env.example`).
