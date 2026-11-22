import { site, fullAddress, absoluteUrl, formatINR } from '@/lib/site'
import { categories, servicesByCategory, servicePath } from '@/lib/services'
import { locations, locationPath } from '@/lib/locations'
import { posts, postPath } from '@/lib/posts'
import { allPlans } from '@/lib/pricing'

export const dynamic = 'force-static'

// llms.txt: a plain-text summary of the business for AI assistants.
export function GET() {
    const lines = [
        `# ${site.name}`,
        '',
        `> ${site.description}`,
        '',
        '## Business facts',
        `- Name: ${site.name}`,
        `- Type: Digital marketing, web development, design and printing agency`,
        `- Address: ${fullAddress}`,
        `- Hours: ${site.hours.label} (including Sunday)`,
        ...(site.phoneE164 ? [`- Phone / WhatsApp: ${site.phoneE164}`] : []),
        `- Email: ${site.email}`,
        `- Website: ${site.url}`,
        `- Areas served: ${site.areasServed.join(', ')}`,
        '',
        '## Pricing (INR, one-time project prices)',
        ...allPlans.map((p) => `- ${p.name}: ${p.priceIsMax ? 'up to' : 'from'} ${formatINR(p.price)}. ${p.summary}`),
        '- Ads, SEO, logo design and printing are quoted per brief.',
        `- Price calculator: ${absoluteUrl('/pricing')}`,
        '',
        '## Key facts',
        '- Websites launch in 2 to 4 weeks; web apps are built in weekly sprints.',
        '- Clients own their source code, design files, domains and ad accounts.',
        '- Visiting cards and stationery dispatch in 2 to 4 business days.',
        '- 3D acrylic and LED signboards are manufactured and installed in 5 to 7 days.',
        '- Delivered projects include Vastu Mentor (vastumentor.com) and MuskySnax (muskysnax.in).',
        '',
        ...categories.flatMap((c) => [
            `## ${c.label} services`,
            ...servicesByCategory(c.id).map((s) => `- [${s.h1}](${absoluteUrl(servicePath(s.slug))}): ${s.description}`),
            '',
        ]),
        '## Locations',
        ...locations.map((l) => `- [${l.city}](${absoluteUrl(locationPath(l.slug))}): ${l.description}`),
        '',
        '## Guides',
        ...posts.map((p) => `- [${p.title}](${absoluteUrl(postPath(p.slug))}): ${p.description}`),
        '',
        '## Company',
        `- [About](${absoluteUrl('/about')})`,
        `- [Contact and directions](${absoluteUrl('/contact')})`,
        `- [All services](${absoluteUrl('/services')})`,
        '',
    ]

    return new Response(lines.join('\n'), {
        headers: { 'Content-Type': 'text/plain; charset=utf-8', 'Cache-Control': 'public, max-age=3600' },
    })
}
