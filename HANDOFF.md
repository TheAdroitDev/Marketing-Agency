# Handoff

Current state of the AK Prints site. Update this at the end of every working session: move finished items to "Done", add new decisions and open items.

_Last updated: 2026-11-22_

## Status

- Full SEO / AEO / GEO build is done: 46 statically generated pages, `pnpm build` passes.
- **Not committed yet.** All SEO work is uncommitted on `main`.
- Live domain: `https://akprints.online` (canonical). The site also runs at `agency.theadroitdev.com` for testing; Google will treat `akprints.online` as the real site.

## Site map

| Section | Routes | Data |
| --- | --- | --- |
| Home | `/` (hero, services bento, service directory, comparison, projects, price calculator, FAQ, CTA) | `app/page.js`, `lib/home-faqs.js` |
| Services | `/services`, 16 × `/services/[slug]` (web 3, marketing 4, design 3, print 6) | `lib/services/*.js` |
| Locations | `/locations`, 7 × `/locations/[city]` (Ludhiana, Chandigarh, Mohali, Jalandhar, Amritsar, Patiala, India) | `lib/locations.js` |
| Pricing | `/pricing` (calculator + plan tables) | `lib/pricing.js` |
| Blog | `/blog`, 5 articles | `lib/posts.js` |
| Other | `/about`, `/contact`, `/privacy-policy`, `/terms`, custom 404 | |
| Technical | `/sitemap.xml`, `/robots.txt`, `/llms.txt`, `/opengraph-image`, `/manifest.webmanifest` | |

`/tree` is an internal component demo, set to noindex and blocked in robots.

## Confirmed business facts (from the owner)

- Address: #93-94, New BRS Nagar, Street No. 4, Near Crown Inn, Ludhiana, Punjab 141012
- Hours: every day, 10 AM to 7 PM, including Sunday
- Phone/WhatsApp: in `.env` (a 10-digit number gets `91` added automatically in `lib/site.js`)
- Prices: Basic website ₹20,000 · Standard website ₹30,000 (enhanced SEO, 100/100 Lighthouse SEO report, frontend only) · Online store ₹70,000 · + admin panel ₹1,10,000 · + email marketing & WhatsApp notifications ₹1,30,000 · max ₹1,50,000
- Ads, SEO, design and print are **quote only**: no prices given yet.

## Open to-dos

### Owner (outside the code)
- [ ] Create and verify a **Google Business Profile** with the exact same name/address/phone; paste its link into `site.googleBusinessUrl` and coordinates into `site.geo` in `lib/site.js`
- [ ] Add the site to **Google Search Console** and **Bing Webmaster Tools**, put tokens in `.env`, submit `/sitemap.xml`
- [ ] Ask Vastu Mentor, MuskySnax and Jai Builders for **Google reviews**
- [ ] List on Justdial, IndiaMART, Sulekha, Clutch, GoodFirms, DesignRush with an identical address
- [ ] Send the real **Instagram** URL (the footer icon stays hidden until `site.socials.instagram` is set)
- [ ] Set `NEXT_PUBLIC_SITE_URL` on the hosting provider

### Content to review before launch
- [ ] Plan feature bullets in `lib/pricing.js` that were inferred from the brief (e.g. "WhatsApp and call buttons", "Customer and inventory management")
- [ ] The food packaging service page (`food-packaging-printing`), which was added on Claude's suggestion
- [ ] Privacy policy and terms are generic drafts, not legal advice

### Next improvements (suggested)
- [ ] Real photos: studio, print samples, signboard installs (print pages have no images yet)
- [ ] Case-study pages per delivered project with real numbers
- [ ] Founder/team bio on `/about`
- [ ] Price lists for print and ads, so those pages can answer "price" searches
- [ ] More blog posts targeting specific searches (e.g. "LED sign board price in Ludhiana")
- [ ] At ~1024px width the CTA globe is mostly clipped off its card (existing layout; consider repositioning)

## Decisions and known issues

- 3D globe avatars use a DOM overlay instead of drei `<Html>` (fixed the "synchronously unmount a root" warning). Don't revert.
- Home FAQ answers that are collapsed stay in the HTML (`hidden`) so crawlers can read them.
- robots.txt explicitly allows AI crawlers (GPTBot, ClaudeBot, PerplexityBot, Google-Extended, etc.) for GEO.
- Remaining console notice: `THREE.Clock` deprecation from `@react-three/fiber` itself. Harmless; it goes away when the library is updated.
- Whole-repo `pnpm lint` fails on old errors in unused UI demo components (`components/ui/cover.jsx` etc.); all files touched in the SEO work lint clean.
