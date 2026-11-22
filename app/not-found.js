import Link from 'next/link'
import { PageShell, PageHero, Section, LinkCard } from '@/components/site/ui'

export const metadata = {
    title: 'Page not found',
    robots: { index: false, follow: true },
}

const links = [
    { href: '/services', title: 'Services', desc: 'Web, ads, SEO, design and printing.' },
    { href: '/pricing', title: 'Pricing', desc: 'Website and e-commerce prices with a calculator.' },
    { href: '/contact', title: 'Contact', desc: 'Address, hours and directions.' },
]

export default function NotFound() {
    return (
        <PageShell cta={false}>
            <PageHero eyebrow="404" title="This page does not exist" lead="The link may be old or mistyped. Here are some places to go instead.">
                <Link href="/" className="inline-flex text-[15px] font-medium text-blue-700 underline underline-offset-4 decoration-blue-200 hover:decoration-blue-600">
                    Back to the homepage
                </Link>
            </PageHero>
            <Section>
                <div className="grid grid-cols-1 sm:grid-cols-3 gap-3.5 sm:gap-4">
                    {links.map((l) => (
                        <LinkCard key={l.href} {...l} />
                    ))}
                </div>
            </Section>
        </PageShell>
    )
}
