import Link from 'next/link'
import { notFound } from 'next/navigation'
import JsonLd from '@/components/site/json-ld'
import PlanTable from '@/components/site/plan-table'
import { PageShell, PageHero, Section, FeatureGrid, Steps, FaqList, LinkCard, CtaButtons, Chip } from '@/components/site/ui'
import { categories, services, getService, servicePath } from '@/lib/services'
import { locations, locationPath } from '@/lib/locations'
import { websitePlans, ecommercePlans } from '@/lib/pricing'
import { breadcrumbSchema, faqSchema, serviceSchema } from '@/lib/schema'
import { pageMetadata } from '@/lib/seo'
import { site } from '@/lib/site'

export const dynamicParams = false

export function generateStaticParams() {
    return services.map((s) => ({ slug: s.slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const service = getService(slug)
    if (!service) return {}
    return pageMetadata({
        title: service.title,
        description: service.description,
        path: servicePath(service.slug),
        keywords: service.keywords,
    })
}

const plansFor = (service) => (service.pricing === 'website' ? websitePlans : service.pricing === 'ecommerce' ? ecommercePlans : [])

export default async function ServicePage({ params }) {
    const { slug } = await params
    const service = getService(slug)
    if (!service) notFound()

    const category = categories.find((c) => c.id === service.category)
    const path = servicePath(service.slug)
    const plans = plansFor(service)
    const related = service.related.map(getService).filter(Boolean)
    const crumbs = [
        { name: 'Home', path: '/' },
        { name: 'Services', path: '/services' },
        { name: service.name, path },
    ]

    return (
        <PageShell>
            <JsonLd data={[breadcrumbSchema(crumbs), serviceSchema(service, path, plans), faqSchema(service.faqs)]} />

            <PageHero breadcrumbs={crumbs} eyebrow={`${category.label} · ${site.address.locality}, ${site.address.region}`} title={service.h1} lead={service.answer}>
                <CtaButtons message={`Hi AK Prints! I'd like a quote for ${service.name}.`} />
            </PageHero>

            <Section title="What you get" lead={`What is included when you hire AK Prints for ${service.name}.`}>
                <FeatureGrid items={service.includes} />
            </Section>

            {plans.length > 0 && (
                <Section
                    id="pricing"
                    title={`${service.name} pricing`}
                    lead={
                        <>
                            One-time project prices in INR. Try the{' '}
                            <Link href="/pricing" className="font-medium text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900">
                                price calculator
                            </Link>{' '}
                            for a quick estimate.
                        </>
                    }
                >
                    <PlanTable plans={plans} />
                </Section>
            )}

            <Section title="How it works" lead="A simple, transparent process with direct access to the people doing the work.">
                <Steps items={service.process} />
            </Section>

            <Section id="faq" title={`${service.name}: common questions`}>
                <FaqList faqs={service.faqs} />
            </Section>

            <Section title="Related services">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                    {related.map((r) => (
                        <LinkCard key={r.slug} href={servicePath(r.slug)} title={r.name} desc={r.navDesc} />
                    ))}
                </div>
                <div className="mt-10 flex flex-wrap items-center gap-2">
                    <span className="text-[14px] text-zinc-500 mr-1">Areas we serve:</span>
                    {locations.map((loc) => (
                        <Link key={loc.slug} href={locationPath(loc.slug)} className="transition-opacity hover:opacity-70">
                            <Chip>{loc.city}</Chip>
                        </Link>
                    ))}
                </div>
            </Section>
        </PageShell>
    )
}
