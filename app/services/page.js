import JsonLd from '@/components/site/json-ld'
import { PageShell, PageHero, Section, LinkCard, CtaButtons } from '@/components/site/ui'
import { categories, services, servicesByCategory, servicePath } from '@/lib/services'
import { breadcrumbSchema, itemListSchema } from '@/lib/schema'
import { pageMetadata } from '@/lib/seo'

const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Services', path: '/services' },
]

export const metadata = pageMetadata({
    title: 'Services: Web, Ads, SEO, Design & Printing in Ludhiana',
    description:
        'All AK Prints services in one place: website and e-commerce development, Google, YouTube and Meta ads, SEO, logo and graphic design, and visiting card, banner, packaging and signboard printing.',
    path: '/services',
})

export default function ServicesPage() {
    return (
        <PageShell>
            <JsonLd
                data={[
                    breadcrumbSchema(crumbs),
                    itemListSchema(
                        'AK Prints services',
                        services.map((s) => ({ name: s.name, path: servicePath(s.slug) }))
                    ),
                ]}
            />
            <PageHero
                breadcrumbs={crumbs}
                eyebrow="Services"
                title="Digital marketing, web, design and printing services"
                lead="AK Prints is one team in Ludhiana for everything a brand needs online and offline. We build the website, run the ads, handle SEO, design the identity and print the cards, packaging and signage, so nothing is lost between vendors."
            >
                <CtaButtons />
            </PageHero>

            {categories.map((category) => (
                <Section key={category.id} id={category.id} title={category.title} lead={category.desc}>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                        {servicesByCategory(category.id).map((service) => (
                            <LinkCard key={service.slug} href={servicePath(service.slug)} title={service.name} desc={service.description} />
                        ))}
                    </div>
                </Section>
            ))}
        </PageShell>
    )
}
