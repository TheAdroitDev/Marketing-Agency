import { site, absoluteUrl } from './site'

// Builds a complete Next.js metadata object for a page.
// `title` is the page title without the brand suffix (the root layout adds it).
export function pageMetadata({ title, description, path = '/', keywords, type = 'website', absoluteTitle = false, noindex = false }) {
    const fullTitle = absoluteTitle ? title : `${title} | ${site.name}`
    // A page-level openGraph object replaces the inherited one, so the share image is set explicitly.
    const image = { url: '/opengraph-image', width: 1200, height: 630, alt: `${site.name}: digital marketing, web design and printing agency in Ludhiana` }
    return {
        title: absoluteTitle ? { absolute: title } : title,
        description,
        keywords,
        alternates: { canonical: path },
        robots: noindex ? { index: false, follow: false } : undefined,
        openGraph: {
            type,
            url: absoluteUrl(path),
            siteName: site.name,
            title: fullTitle,
            description,
            locale: 'en_IN',
            images: [image],
        },
        twitter: {
            card: 'summary_large_image',
            title: fullTitle,
            description,
            images: [image.url],
        },
    }
}
