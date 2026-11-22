import { notFound } from 'next/navigation'
import JsonLd from '@/components/site/json-ld'
import { PageShell, PageHero, Section, FaqList, LinkCard, CtaButtons, Card } from '@/components/site/ui'
import { locations, getLocation, locationPath } from '@/lib/locations'
import { getService, servicePath } from '@/lib/services'
import { breadcrumbSchema, faqSchema } from '@/lib/schema'
import { pageMetadata } from '@/lib/seo'
import { site, fullAddress, mapsDirectionsUrl } from '@/lib/site'

export const dynamicParams = false

export function generateStaticParams() {
    return locations.map((l) => ({ city: l.slug }))
}

export async function generateMetadata({ params }) {
    const { city } = await params
    const location = getLocation(city)
    if (!location) return {}
    return pageMetadata({
        title: location.title,
        description: location.description,
        path: locationPath(location.slug),
    })
}

export default async function LocationPage({ params }) {
    const { city } = await params
    const location = getLocation(city)
    if (!location) notFound()

    const path = locationPath(location.slug)
    const crumbs = [
        { name: 'Home', path: '/' },
        { name: 'Locations', path: '/locations' },
        { name: location.city, path },
    ]
    const focus = location.focus.map(getService).filter(Boolean)
    const others = locations.filter((l) => l.slug !== location.slug)

    return (
        <PageShell>
            <JsonLd data={[breadcrumbSchema(crumbs), faqSchema(location.faqs)]} />

            <PageHero
                breadcrumbs={crumbs}
                eyebrow={location.isHome ? 'Our home city' : location.isCountry ? 'Serving all of India' : `Serving ${location.city} from Ludhiana`}
                title={location.h1}
                lead={location.answer}
            >
                <CtaButtons message={`Hi AK Prints! I'm in ${location.city} and would like to discuss a project.`} />
            </PageHero>

            <Section title={location.isCountry ? 'Why brands across India work with us' : `Marketing in ${location.city}`}>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
                    <div className="lg:col-span-7 space-y-5 text-[17px] leading-[1.75] text-zinc-700">
                        <p>{location.context}</p>
                        <p>{location.approach}</p>
                    </div>
                    <div className="lg:col-span-5">
                        <Card innerClassName="space-y-4">
                            <h3 className="text-[17px] font-semibold tracking-tight text-zinc-900">AK Prints studio</h3>
                            <address className="not-italic text-[15px] leading-relaxed text-zinc-600">
                                {site.address.street}
                                <br />
                                {site.address.locality}, {site.address.region} {site.address.postalCode}
                            </address>
                            <p className="text-[15px] text-zinc-600">{site.hours.label}</p>
                            <a
                                href={mapsDirectionsUrl}
                                target="_blank"
                                rel="noopener noreferrer"
                                aria-label={`Get directions to AK Prints, ${fullAddress}`}
                                className="inline-flex text-[15px] font-medium text-blue-700 underline underline-offset-4 decoration-blue-200 hover:decoration-blue-600"
                            >
                                Get directions
                            </a>
                        </Card>
                    </div>
                </div>
            </Section>

            <Section
                title={location.isCountry ? 'Most requested services' : `Popular services in ${location.city}`}
                lead="Each service has its own page with what is included, the process and answers to common questions."
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                    {focus.map((service) => (
                        <LinkCard key={service.slug} href={servicePath(service.slug)} title={service.name} desc={service.navDesc} />
                    ))}
                </div>
            </Section>

            <Section id="faq" title={`${location.city}: common questions`}>
                <FaqList faqs={location.faqs} />
            </Section>

            <Section title="Other areas we serve">
                <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-3.5">
                    {others.map((l) => (
                        <LinkCard key={l.slug} href={locationPath(l.slug)} title={l.city} />
                    ))}
                </div>
            </Section>
        </PageShell>
    )
}
