import { PageShell, PageHero, Section, Prose } from '@/components/site/ui'
import { pageMetadata } from '@/lib/seo'
import { site, fullAddress } from '@/lib/site'

export const metadata = pageMetadata({
    title: 'Terms of Service',
    description: 'The terms that apply when you use the AK Prints website and hire AK Prints for web, marketing, design or print work.',
    path: '/terms',
})

export default function TermsPage() {
    return (
        <PageShell cta={false}>
            <PageHero
                breadcrumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Terms of Service', path: '/terms' },
                ]}
                title="Terms of Service"
                lead="These terms apply to your use of this website. Each project is additionally governed by the written quote or agreement for that project."
            />
            <Section>
                <Prose>
                    <h2>Quotes and prices</h2>
                    <p>
                        Prices shown on this website are starting prices in Indian rupees and are provided as estimates. The price for your project is the one
                        stated in your written quote.
                    </p>
                    <h2>Ownership of work</h2>
                    <p>
                        On full payment, you own the deliverables created for you, including website source code, design files and artwork. Ad accounts and
                        domains are set up in your name.
                    </p>
                    <h2>Client responsibilities</h2>
                    <p>
                        You are responsible for the accuracy of the content you supply and for having the right to use any logos, images and text you provide.
                        Print jobs are produced from the proof you approve.
                    </p>
                    <h2>Advertising and SEO results</h2>
                    <p>
                        Advertising platforms and search engines are operated by third parties. We commit to the agreed work and transparent reporting, but
                        specific rankings, traffic or sales cannot be guaranteed.
                    </p>
                    <h2>Third-party services</h2>
                    <p>
                        Services such as hosting, domains, payment gateways and advertising platforms are provided by third parties under their own terms.
                    </p>
                    <h2>Contact</h2>
                    <p>
                        {site.name}, {fullAddress}. Email: <a href={`mailto:${site.email}`}>{site.email}</a>.
                    </p>
                </Prose>
            </Section>
        </PageShell>
    )
}
