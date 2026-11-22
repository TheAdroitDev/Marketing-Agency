import { PageShell, PageHero, Section, Prose } from '@/components/site/ui'
import { pageMetadata } from '@/lib/seo'
import { site, fullAddress } from '@/lib/site'

export const metadata = pageMetadata({
    title: 'Privacy Policy',
    description: 'How AK Prints collects, uses and protects information you share through this website, WhatsApp, email and call bookings.',
    path: '/privacy-policy',
})

export default function PrivacyPolicyPage() {
    return (
        <PageShell cta={false}>
            <PageHero
                breadcrumbs={[
                    { name: 'Home', path: '/' },
                    { name: 'Privacy Policy', path: '/privacy-policy' },
                ]}
                title="Privacy Policy"
                lead="This policy explains what information AK Prints collects through this website and how it is used."
            />
            <Section>
                <Prose>
                    <h2>Information we collect</h2>
                    <p>
                        We collect information you choose to give us when you message us on WhatsApp, email us, or book a call: typically your name, phone
                        number, email address, business name and project details.
                    </p>
                    <h2>How we use it</h2>
                    <p>
                        We use this information only to respond to your enquiry, prepare quotes, deliver the work you hire us for, and keep in touch about your
                        project. We do not sell your information.
                    </p>
                    <h2>Third-party services</h2>
                    <p>
                        This website links to or embeds services run by other companies, including WhatsApp (messaging), Cal.com (call booking) and Google Maps
                        (location map). When you use them, those companies process your data under their own privacy policies.
                    </p>
                    <h2>Client materials</h2>
                    <p>
                        Files, artwork, logins and business data you share for a project are used only for that project and are kept confidential.
                    </p>
                    <h2>Your choices</h2>
                    <p>
                        You can ask us to correct or delete the personal information we hold about you by writing to{' '}
                        <a href={`mailto:${site.email}`}>{site.email}</a>.
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
