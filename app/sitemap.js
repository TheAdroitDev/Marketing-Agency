import { absoluteUrl } from '@/lib/site'
import { services, servicePath } from '@/lib/services'
import { locations, locationPath } from '@/lib/locations'
import { posts, postPath } from '@/lib/posts'

// Bump this when page content changes meaningfully.
const LAST_UPDATED = '2026-11-12'

export default function sitemap() {
    const entry = (path, priority, changeFrequency = 'monthly', lastModified = LAST_UPDATED) => ({
        url: absoluteUrl(path),
        lastModified,
        changeFrequency,
        priority,
    })

    return [
        entry('/', 1, 'weekly'),
        entry('/services', 0.9),
        entry('/pricing', 0.9),
        ...services.map((s) => entry(servicePath(s.slug), 0.8)),
        entry('/locations', 0.6),
        ...locations.map((l) => entry(locationPath(l.slug), l.isHome || l.isCountry ? 0.8 : 0.7)),
        entry('/blog', 0.6, 'weekly'),
        ...posts.map((p) => entry(postPath(p.slug), 0.6, 'monthly', p.updated || p.date)),
        entry('/about', 0.5),
        entry('/contact', 0.7),
        entry('/privacy-policy', 0.2, 'yearly'),
        entry('/terms', 0.2, 'yearly'),
    ]
}
