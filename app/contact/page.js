import JsonLd from '@/components/site/json-ld'
import { PageShell, PageHero, Section, Card, CtaButtons } from '@/components/site/ui'
import { breadcrumbSchema } from '@/lib/schema'
import { pageMetadata } from '@/lib/seo'
import { site, fullAddress, mapsEmbedUrl, mapsDirectionsUrl, telLink, waLink } from '@/lib/site'

const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Contact', path: '/contact' },
]

export const metadata = pageMetadata({
    title: 'Contact AK Prints, Ludhiana | Address, Hours & Directions',
    description:
        'Visit or contact AK Prints at #93-94, New BRS Nagar, Street No. 4, near Crown Inn, Ludhiana 141012. Open every day 10 AM to 7 PM. WhatsApp, call or book a free 30-minute call.',
    path: '/contact',
})

const linkClass = 'font-medium text-blue-700 underline underline-offset-4 decoration-blue-200 hover:decoration-blue-600'

function Row({ label, children }) {
    return (
        <div className="grid grid-cols-[110px_1fr] gap-4 py-4 border-b border-zinc-100 last:border-b-0">
            <dt className="text-[14px] text-zinc-500">{label}</dt>
            <dd className="text-[16px] leading-relaxed text-zinc-900">{children}</dd>
        </div>
    )
}

export default function ContactPage() {
    return (
        <PageShell>
            <JsonLd
                data={[
                    breadcrumbSchema(crumbs),
                    {
                        '@context': 'https://schema.org',
                        '@type': 'ContactPage',
                        url: `${site.url}/contact`,
                        name: 'Contact AK Prints',
                        mainEntity: { '@id': `${site.url}/#organization` },
                    },
                ]}
            />

            <PageHero
                breadcrumbs={crumbs}
                eyebrow="Contact"
                title="Visit the studio or message us"
                lead={`AK Prints is at ${fullAddress}. ${site.hours.label}, including Sunday. The fastest way to reach us is WhatsApp.`}
            >
                <CtaButtons />
            </PageHero>

            <Section>
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-4">
                    <Card className="lg:col-span-5" innerClassName="!py-2">
                        <dl>
                            <Row label="Address">
                                <address className="not-italic">
                                    {site.name}
                                    <br />
                                    {site.address.street}
                                    <br />
                                    {site.address.locality}, {site.address.region} {site.address.postalCode}
                                    <br />
                                    {site.address.country}
                                </address>
                                <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className={`inline-block mt-2 text-[15px] ${linkClass}`}>
                                    Get directions
                                </a>
                            </Row>
                            <Row label="Hours">
                                Monday to Sunday
                                <br />
                                10:00 AM to 7:00 PM
                            </Row>
                            <Row label="WhatsApp">
                                <a href={waLink()} target="_blank" rel="noopener noreferrer" className={linkClass}>
                                    Chat on WhatsApp
                                </a>
                            </Row>
                            {telLink && (
                                <Row label="Phone">
                                    <a href={telLink} className={linkClass}>
                                        {site.phoneE164}
                                    </a>
                                </Row>
                            )}
                            <Row label="Email">
                                <a href={`mailto:${site.email}`} className={linkClass}>
                                    {site.email}
                                </a>
                            </Row>
                        </dl>
                    </Card>

                    <div className="lg:col-span-7 p-[3px] rounded-[23px] sm:rounded-[27px] border border-zinc-200/50 bg-zinc-100/40 shadow-2xs">
                        <div className="h-full min-h-[360px] overflow-hidden rounded-[20px] sm:rounded-[24px] border border-zinc-200/80 bg-white">
                            <iframe
                                title="Map showing AK Prints, New BRS Nagar, Ludhiana"
                                src={mapsEmbedUrl}
                                loading="lazy"
                                referrerPolicy="no-referrer-when-downgrade"
                                className="h-full min-h-[360px] w-full border-0"
                            />
                        </div>
                    </div>
                </div>
            </Section>
        </PageShell>
    )
}
