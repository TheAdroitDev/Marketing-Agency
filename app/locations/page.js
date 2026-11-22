import JsonLd from '@/components/site/json-ld'
import { PageShell, PageHero, Section, LinkCard, CtaButtons } from '@/components/site/ui'
import { locations, locationPath } from '@/lib/locations'
import { breadcrumbSchema } from '@/lib/schema'
import { pageMetadata } from '@/lib/seo'

const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Locations', path: '/locations' },
]

export const metadata = pageMetadata({
    title: 'Areas We Serve: Ludhiana, Punjab & India',
    description:
        'AK Prints is based in Ludhiana and serves Chandigarh, Mohali, Jalandhar, Amritsar, Patiala and clients across India with websites, ads, SEO, design and printing.',
    path: '/locations',
})

export default function LocationsPage() {
    return (
        <PageShell>
            <JsonLd data={breadcrumbSchema(crumbs)} />
            <PageHero
                breadcrumbs={crumbs}
                eyebrow="Locations"
                title="Based in Ludhiana, working across Punjab and India"
                lead="Our studio is in New BRS Nagar, Ludhiana. Websites, ads, SEO and design are delivered remotely to clients anywhere in India, and print orders are dispatched from Ludhiana."
            >
                <CtaButtons />
            </PageHero>
            <Section title="Where we work">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                    {locations.map((l) => (
                        <LinkCard key={l.slug} href={locationPath(l.slug)} title={l.city} desc={l.description} />
                    ))}
                </div>
            </Section>
        </PageShell>
    )
}
