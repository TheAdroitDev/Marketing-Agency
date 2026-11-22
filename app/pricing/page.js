import Link from 'next/link'
import JsonLd from '@/components/site/json-ld'
import PlanTable from '@/components/site/plan-table'
import PriceCalculator from '@/components/site/price-calculator'
import { PageShell, PageHero, Section, FaqList, LinkCard } from '@/components/site/ui'
import { websitePlans, ecommercePlans } from '@/lib/pricing'
import { servicePath, getService } from '@/lib/services'
import { breadcrumbSchema, faqSchema, offerCatalogSchema } from '@/lib/schema'
import { pageMetadata } from '@/lib/seo'

const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Pricing', path: '/pricing' },
]

const faqs = [
    {
        q: 'How much does a website cost at AK Prints?',
        a: 'A Basic Website hand-coded in HTML, CSS and JavaScript starts at ₹20,000. A Standard Website with enhanced SEO, enhanced design and a guaranteed 100/100 Lighthouse SEO report starts at ₹30,000.',
    },
    {
        q: 'How much does an e-commerce website cost?',
        a: 'An online store starts at ₹70,000. With an admin panel it is ₹1,10,000. With an admin panel plus email marketing and WhatsApp notifications it is ₹1,30,000. A fully custom store can go up to ₹1,50,000, which is the top of our range.',
    },
    {
        q: 'Are these one-time prices or monthly?',
        a: 'They are one-time project prices in Indian rupees for design and development. Your written quote lists exactly what is included before any work starts.',
    },
    {
        q: 'How are ads, SEO, design and printing priced?',
        a: 'These are quoted per brief because they depend on scope: ad budgets and number of campaigns, SEO competition, the size of a branding project, or print quantity and finish. Message us on WhatsApp with your requirement for a quote.',
    },
    {
        q: 'What does the 100/100 Lighthouse guarantee mean?',
        a: 'Lighthouse is Google’s open-source tool for auditing web pages. On the Standard Website plan we deliver the site with a Lighthouse report showing a 100/100 SEO score.',
    },
]

const quoteServices = ['google-ads-management', 'seo-services', 'logo-design-branding', 'visiting-card-printing', 'packaging-printing', 'signboards']

export const metadata = pageMetadata({
    title: 'Website & E-commerce Pricing in India | Price Calculator',
    description:
        'Transparent website pricing from AK Prints, Ludhiana. Basic website ₹20,000, standard website ₹30,000, e-commerce from ₹70,000 to ₹1,50,000. Use the price calculator for an instant estimate.',
    path: '/pricing',
    keywords: ['website cost in India', 'website price Ludhiana', 'ecommerce website cost India', 'website price calculator'],
})

export default function PricingPage() {
    return (
        <PageShell>
            <JsonLd data={[breadcrumbSchema(crumbs), offerCatalogSchema(), faqSchema(faqs)]} />

            <PageHero
                breadcrumbs={crumbs}
                eyebrow="Pricing"
                title="Website and e-commerce pricing, with a calculator"
                lead="AK Prints publishes its starting prices. A basic website starts at ₹20,000, a standard website at ₹30,000, and online stores range from ₹70,000 to ₹1,50,000 depending on admin panel and automation features. Pick a plan below and send the estimate to us on WhatsApp."
            />

            <Section id="calculator" title="Price calculator" lead="Choose a project type and plan. The estimate updates instantly.">
                <PriceCalculator />
            </Section>

            <Section id="websites" title="Website plans" lead="For company, portfolio and service business websites.">
                <PlanTable plans={websitePlans} />
            </Section>

            <Section id="ecommerce" title="E-commerce plans" lead="For D2C brands, retailers and manufacturers selling online.">
                <PlanTable plans={ecommercePlans} />
            </Section>

            <Section
                title="Quoted per brief"
                lead={
                    <>
                        Ads, SEO, design and print depend on scope, so we quote after a quick chat.{' '}
                        <Link href="/contact" className="font-medium text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900">
                            Contact us
                        </Link>
                    </>
                }
            >
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                    {quoteServices.map(getService).map((s) => (
                        <LinkCard key={s.slug} href={servicePath(s.slug)} title={s.name} desc={s.navDesc} meta="Quote on request" />
                    ))}
                </div>
            </Section>

            <Section id="faq" title="Pricing questions">
                <FaqList faqs={faqs} />
            </Section>
        </PageShell>
    )
}
