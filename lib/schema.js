import { site, absoluteUrl, sameAs } from './site'
import { allPlans, priceRange } from './pricing'

const ORG_ID = `${site.url}/#organization`
const WEBSITE_ID = `${site.url}/#website`

const clean = (obj) =>
    Object.fromEntries(Object.entries(obj).filter(([, v]) => v !== '' && v !== undefined && v !== null && !(Array.isArray(v) && v.length === 0)))

const postalAddress = {
    '@type': 'PostalAddress',
    streetAddress: site.address.street,
    addressLocality: site.address.locality,
    addressRegion: site.address.region,
    postalCode: site.address.postalCode,
    addressCountry: site.address.countryCode,
}

// Organization + LocalBusiness in one node, referenced everywhere by @id.
export const organizationSchema = () =>
    clean({
        '@context': 'https://schema.org',
        '@type': ['ProfessionalService', 'LocalBusiness'],
        '@id': ORG_ID,
        name: site.name,
        legalName: site.legalName,
        url: site.url,
        logo: absoluteUrl('/ak-logo-2.png'),
        image: absoluteUrl('/opengraph-image'),
        description: site.description,
        email: site.email,
        telephone: site.phoneE164,
        address: postalAddress,
        geo:
            site.geo.latitude && site.geo.longitude
                ? { '@type': 'GeoCoordinates', latitude: site.geo.latitude, longitude: site.geo.longitude }
                : undefined,
        hasMap: site.googleBusinessUrl,
        openingHoursSpecification: [
            {
                '@type': 'OpeningHoursSpecification',
                dayOfWeek: site.hours.days,
                opens: site.hours.opens,
                closes: site.hours.closes,
            },
        ],
        priceRange: `₹${priceRange.low.toLocaleString('en-IN')} - ₹${priceRange.high.toLocaleString('en-IN')}`,
        currenciesAccepted: 'INR',
        areaServed: site.areasServed.map((name) => ({ '@type': name === 'India' ? 'Country' : name === 'Punjab' ? 'State' : 'City', name })),
        knowsAbout: [
            'Website design',
            'E-commerce development',
            'Google Ads',
            'YouTube advertising',
            'Meta ads',
            'Search engine optimization',
            'Generative engine optimization',
            'Logo design',
            'Brand identity',
            'Visiting card printing',
            'Packaging printing',
            'Flex banner printing',
            'LED sign boards',
        ],
        sameAs,
        contactPoint: site.phoneE164
            ? [
                  {
                      '@type': 'ContactPoint',
                      telephone: site.phoneE164,
                      contactType: 'sales',
                      areaServed: 'IN',
                  },
              ]
            : undefined,
    })

export const websiteSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    '@id': WEBSITE_ID,
    url: site.url,
    name: site.name,
    description: site.description,
    inLanguage: 'en-IN',
    publisher: { '@id': ORG_ID },
})

export const breadcrumbSchema = (items) => ({
    '@context': 'https://schema.org',
    '@type': 'BreadcrumbList',
    itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        item: absoluteUrl(item.path),
    })),
})

export const faqSchema = (faqs) => ({
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: faqs.map((f) => ({
        '@type': 'Question',
        name: f.q || f.question,
        acceptedAnswer: { '@type': 'Answer', text: f.a || f.answer },
    })),
})

const offerFor = (plan) => ({
    '@type': 'Offer',
    name: plan.name,
    description: plan.summary,
    price: plan.price,
    priceCurrency: 'INR',
    availability: 'https://schema.org/InStock',
    seller: { '@id': ORG_ID },
})

export const serviceSchema = (service, path, plans = []) =>
    clean({
        '@context': 'https://schema.org',
        '@type': 'Service',
        '@id': `${absoluteUrl(path)}#service`,
        name: service.h1,
        serviceType: service.name,
        description: service.description,
        url: absoluteUrl(path),
        provider: { '@id': ORG_ID },
        areaServed: site.areasServed.map((name) => ({ '@type': 'Place', name })),
        offers: plans.length ? plans.map(offerFor) : undefined,
    })

export const offerCatalogSchema = () => ({
    '@context': 'https://schema.org',
    '@type': 'OfferCatalog',
    name: 'AK Prints website and e-commerce pricing',
    url: absoluteUrl('/pricing'),
    itemListElement: allPlans.map(offerFor),
})

export const articleSchema = (post, path) => ({
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.description,
    datePublished: post.date,
    dateModified: post.updated || post.date,
    inLanguage: 'en-IN',
    mainEntityOfPage: absoluteUrl(path),
    image: absoluteUrl('/opengraph-image'),
    author: { '@type': 'Organization', '@id': ORG_ID, name: site.name },
    publisher: { '@id': ORG_ID },
})

export const itemListSchema = (name, items) => ({
    '@context': 'https://schema.org',
    '@type': 'ItemList',
    name,
    itemListElement: items.map((item, i) => ({
        '@type': 'ListItem',
        position: i + 1,
        name: item.name,
        url: absoluteUrl(item.path),
    })),
})
