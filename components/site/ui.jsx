// Shared server-rendered building blocks for inner pages.
// Visual language matches the homepage: stone background, zinc type,
// double-bezel white cards, small inset chips, blue accent.

import Link from 'next/link'
import { ArrowUpRight, ChevronRight, Plus } from 'lucide-react'
import { IconBrandWhatsapp } from '@tabler/icons-react'
import Navbar from './navbar'
import Footer from './footer'
import CtaSection from '@/components/cta-section'
import { waLink } from '@/lib/site'

export function PageShell({ children, cta = true }) {
    return (
        <div className="min-h-screen antialiased overflow-x-hidden bg-[#fafaf9] text-[#18181b]">
            <Navbar />
            <main>{children}</main>
            {cta && <CtaSection />}
            <Footer />
        </div>
    )
}

export function Breadcrumbs({ items }) {
    return (
        <nav aria-label="Breadcrumb" className="mb-6">
            <ol className="flex flex-wrap items-center gap-1.5 text-[13px] text-zinc-500">
                {items.map((item, i) => {
                    const last = i === items.length - 1
                    return (
                        <li key={item.path} className="flex items-center gap-1.5">
                            {last ? (
                                <span aria-current="page" className="text-zinc-800 font-medium">
                                    {item.name}
                                </span>
                            ) : (
                                <Link href={item.path} className="hover:text-zinc-900 transition-colors">
                                    {item.name}
                                </Link>
                            )}
                            {!last && <ChevronRight className="w-3.5 h-3.5 text-zinc-300" aria-hidden="true" />}
                        </li>
                    )
                })}
            </ol>
        </nav>
    )
}

export function Chip({ children, className = '' }) {
    return (
        <span className={`inline-flex items-center p-[2px] rounded-[9px] bg-[#ededef] text-zinc-800 ${className}`}>
            <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[7px] border border-white text-xs font-medium">{children}</span>
        </span>
    )
}

export function CtaButtons({ message, secondaryHref = '#contact', secondaryLabel = 'Book a free call' }) {
    return (
        <div className="flex flex-wrap items-center gap-3">
            <a
                href={waLink(message)}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-lg bg-linear-to-b from-emerald-500 to-emerald-700 px-5 py-2.5 text-[15px] font-medium text-white ring-1 ring-inset ring-white/20 shadow-[0_6px_20px_rgba(16,185,129,0.25)] transition-transform duration-150 hover:-translate-y-px active:scale-[0.98]"
            >
                <IconBrandWhatsapp className="w-4 h-4 stroke-[2.2]" aria-hidden="true" />
                <span>Get a quote on WhatsApp</span>
            </a>
            <a
                href={secondaryHref}
                className="inline-flex items-center gap-1.5 rounded-lg bg-white px-5 py-2.5 text-[15px] font-medium text-zinc-900 border border-zinc-200 shadow-2xs transition-colors hover:border-zinc-300 hover:bg-zinc-50"
            >
                <span>{secondaryLabel}</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400" aria-hidden="true" />
            </a>
        </div>
    )
}

export function PageHero({ breadcrumbs, eyebrow, title, lead, children }) {
    return (
        <section className="relative px-4 sm:px-6 lg:px-8 pt-32 sm:pt-40 pb-14 sm:pb-20 border-b border-zinc-200/80 overflow-hidden">
            <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(60%_100%_at_50%_0%,rgba(37,99,235,0.07),transparent)]"
            />
            <div className="relative max-w-6xl mx-auto">
                {breadcrumbs && <Breadcrumbs items={breadcrumbs} />}
                {eyebrow && <Chip className="mb-5">{eyebrow}</Chip>}
                <h1 className="max-w-4xl text-4xl sm:text-5xl md:text-6xl font-semibold tracking-tight text-zinc-900 leading-[1.06] text-balance">
                    {title}
                </h1>
                {lead && <p className="mt-6 max-w-3xl text-[17px] sm:text-lg leading-[1.7] text-zinc-700">{lead}</p>}
                {children && <div className="mt-8">{children}</div>}
            </div>
        </section>
    )
}

export function Section({ id, title, lead, children, className = '' }) {
    return (
        <section id={id} className={`px-4 sm:px-6 lg:px-8 py-16 sm:py-24 border-b border-zinc-200/80 ${className}`}>
            <div className="max-w-6xl mx-auto">
                {(title || lead) && (
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-4 pb-5 mb-8 sm:mb-10 border-b border-zinc-200/80">
                        {title && (
                            <h2 className="max-w-xl text-3xl sm:text-4xl font-semibold tracking-tight text-zinc-900 leading-[1.15] text-balance">{title}</h2>
                        )}
                        {lead && <p className="max-w-md text-[16px] sm:text-[17px] text-zinc-600 leading-relaxed">{lead}</p>}
                    </div>
                )}
                {children}
            </div>
        </section>
    )
}

// Double-bezel card used across the homepage bento grid.
export function Card({ children, className = '', innerClassName = '' }) {
    return (
        <div className={`p-[3px] rounded-[23px] sm:rounded-[27px] border border-zinc-200/50 bg-zinc-100/40 shadow-2xs ${className}`}>
            <div className={`w-full h-full bg-white rounded-[20px] sm:rounded-[24px] border border-zinc-200/80 p-5 sm:p-6 ${innerClassName}`}>{children}</div>
        </div>
    )
}

export function LinkCard({ href, title, desc, meta }) {
    return (
        <Link href={href} className="group block h-full">
            <Card className="h-full transition-colors group-hover:border-zinc-300" innerClassName="flex flex-col gap-2 transition-colors group-hover:border-zinc-300">
                <div className="flex items-start justify-between gap-3">
                    <h3 className="text-lg font-semibold tracking-tight text-zinc-900">{title}</h3>
                    <ArrowUpRight
                        className="w-4 h-4 mt-1 shrink-0 text-zinc-300 transition-all group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                        aria-hidden="true"
                    />
                </div>
                {desc && <p className="text-[15px] leading-relaxed text-zinc-600">{desc}</p>}
                {meta && <p className="mt-auto pt-3 text-[13px] font-medium text-zinc-900">{meta}</p>}
            </Card>
        </Link>
    )
}

export function FeatureGrid({ items }) {
    return (
        <ul className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
            {items.map((item, i) => (
                <li key={item.title}>
                    <Card className="h-full" innerClassName="flex flex-col gap-2">
                        <span className="text-[12px] font-medium tabular-nums text-zinc-400">{String(i + 1).padStart(2, '0')}</span>
                        <h3 className="text-[17px] font-semibold tracking-tight text-zinc-900">{item.title}</h3>
                        <p className="text-[15px] leading-relaxed text-zinc-600">{item.desc}</p>
                    </Card>
                </li>
            ))}
        </ul>
    )
}

export function Steps({ items }) {
    return (
        <ol className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-8">
            {items.map((item, i) => (
                <li key={item.title} className="relative pt-5 border-t border-zinc-300">
                    <span className="absolute -top-px left-0 h-px w-10 bg-blue-600" aria-hidden="true" />
                    <span className="text-[12px] font-medium tabular-nums text-blue-600">Step {i + 1}</span>
                    <h3 className="mt-1.5 text-[17px] font-semibold tracking-tight text-zinc-900">{item.title}</h3>
                    <p className="mt-1.5 text-[15px] leading-relaxed text-zinc-600">{item.desc}</p>
                </li>
            ))}
        </ol>
    )
}

// Native <details> FAQ: answers are always in the HTML, so search engines
// and AI crawlers can read them without running JavaScript.
export function FaqList({ faqs }) {
    return (
        <div className="max-w-3xl divide-y divide-zinc-200/80 border-y border-zinc-200/80">
            {faqs.map((faq) => (
                <details key={faq.q} className="group py-1">
                    <summary className="flex cursor-pointer list-none items-start justify-between gap-6 py-4 text-left [&::-webkit-details-marker]:hidden">
                        <h3 className="text-[17px] font-medium tracking-[-0.01em] text-zinc-900">{faq.q}</h3>
                        <span className="mt-0.5 flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-zinc-200 bg-white text-zinc-500 transition-transform duration-200 group-open:rotate-45">
                            <Plus className="w-3.5 h-3.5" aria-hidden="true" />
                        </span>
                    </summary>
                    <p className="pb-5 pr-10 text-[16px] leading-[1.7] text-zinc-600">{faq.a}</p>
                </details>
            ))}
        </div>
    )
}

export function Prose({ children }) {
    return (
        <div className="max-w-3xl space-y-5 text-[17px] leading-[1.75] text-zinc-700 [&_h2]:mt-12 [&_h2]:mb-1 [&_h2]:text-2xl [&_h2]:sm:text-3xl [&_h2]:font-semibold [&_h2]:tracking-tight [&_h2]:text-zinc-900 [&_h3]:mt-8 [&_h3]:text-xl [&_h3]:font-semibold [&_h3]:tracking-tight [&_h3]:text-zinc-900 [&_a]:text-blue-700 [&_a]:underline [&_a]:underline-offset-4 [&_a]:decoration-blue-200 hover:[&_a]:decoration-blue-600 [&_ul]:list-disc [&_ul]:pl-5 [&_ul]:space-y-2 [&_ol]:list-decimal [&_ol]:pl-5 [&_ol]:space-y-2 [&_strong]:font-semibold [&_strong]:text-zinc-900">
            {children}
        </div>
    )
}
