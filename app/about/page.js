import Link from 'next/link'
import JsonLd from '@/components/site/json-ld'
import { PageShell, PageHero, Section, FeatureGrid, CtaButtons, Prose } from '@/components/site/ui'
import { breadcrumbSchema } from '@/lib/schema'
import { pageMetadata } from '@/lib/seo'
import { site, fullAddress } from '@/lib/site'

const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'About', path: '/about' },
]

export const metadata = pageMetadata({
    title: 'About AK Prints | Marketing Agency in Ludhiana, Punjab',
    description:
        'AK Prints is a Ludhiana studio that combines web development, performance marketing, brand design and premium printing in one team, with direct access to the people doing the work.',
    path: '/about',
})

const principles = [
    { title: 'One team, online and offline', desc: 'Website, ads, SEO, brand design and print are handled together, so your brand looks the same on a phone, a box and a shopfront.' },
    { title: 'You talk to the makers', desc: 'No account managers in between. You get a WhatsApp or Slack channel with the designers and engineers on your project.' },
    { title: 'Custom code, no bloated templates', desc: 'Websites are designed and coded by hand for speed, SEO and long-term maintainability.' },
    { title: 'Published starting prices', desc: 'Website and e-commerce prices are on the site. Everything else is quoted clearly before work begins.' },
    { title: 'You own everything', desc: 'Source code, design files, domains and ad accounts stay in your name from day one.' },
    { title: 'Measured in results', desc: 'Ads and SEO are reported in leads and sales, with tracking set up properly from the start.' },
]

const team = [
    { title: 'Content Writer', desc: 'Writes the words on your website and ads that make people take action and buy.' },
    { title: 'Design Engineer', desc: 'Turns designs into real, fast, working, interactive websites.' },
    { title: 'UI/UX Designer', desc: 'Makes sure your website looks clean, modern, and is effortless for everyone to use.' },
    { title: 'Forward Deployed Engineer', desc: 'Works directly with you to build exactly what your business needs without middle managers.' },
    { title: 'System Design Engineer', desc: 'Builds the backend so your website stays fast and reliable even during heavy traffic spikes.' },
]

export default function AboutPage() {
    return (
        <PageShell>
            <JsonLd
                data={[
                    breadcrumbSchema(crumbs),
                    {
                        '@context': 'https://schema.org',
                        '@type': 'AboutPage',
                        url: `${site.url}/about`,
                        name: 'About AK Prints',
                        mainEntity: { '@id': `${site.url}/#organization` },
                    },
                ]}
            />

            <PageHero
                breadcrumbs={crumbs}
                eyebrow="About"
                title="A marketing studio in Ludhiana that builds, promotes and prints"
                lead="AK Prints is a full-service marketing agency based in New BRS Nagar, Ludhiana. We design and code websites and online stores, run Google, YouTube and Meta ad campaigns, do SEO, create brand identities, and print everything from visiting cards to illuminated signboards."
            >
                <CtaButtons />
            </PageHero>

            <Section title="Why we work this way">
                <Prose>
                    <p>
                        Most businesses end up managing four vendors: a web developer, an ad agency, a designer and a printer. Each one blames the other when the
                        website is slow, the tracking is broken or the printed colours do not match the logo. AK Prints exists to remove that problem by keeping
                        all four under one roof.
                    </p>
                    <p>
                        The same people who design your brand also build your website and prepare your print files. The engineers who code your store also set
                        up the conversion tracking your ads depend on. That is why our websites are fast, our ad reports are accurate and our print matches the
                        screen.
                    </p>
                    <p>
                        We are based at {fullAddress}, and work with clients across Punjab and India. See our <Link href="/services">services</Link>,{' '}
                        <Link href="/pricing">pricing</Link> and <Link href="/#projects">delivered projects</Link>.
                    </p>
                </Prose>
            </Section>

            <Section title="How we work" lead="Six principles every project follows.">
                <FeatureGrid items={principles} />
            </Section>

            <Section title="The team on your project" lead="Specialists across writing, design and engineering.">
                <FeatureGrid items={team} />
            </Section>
        </PageShell>
    )
}
