import Link from 'next/link'
import Image from 'next/image'
import { IconBrandWhatsapp } from '@tabler/icons-react'
import { site, waLink, telLink, mapsDirectionsUrl } from '@/lib/site'
import { servicePath } from '@/lib/services'
import { locations, locationPath } from '@/lib/locations'

const serviceLinks = [
    ['website-design-development', 'Website Design'],
    ['ecommerce-website-development', 'E-commerce Stores'],
    ['google-ads-management', 'Google Ads'],
    ['meta-ads', 'Meta & Instagram Ads'],
    ['seo-services', 'SEO & AI Search'],
    ['logo-design-branding', 'Logo Design'],
    ['visiting-card-printing', 'Visiting Cards'],
    ['packaging-printing', 'Custom Packaging'],
    ['signboards', 'LED Sign Boards'],
]

const companyLinks = [
    ['/services', 'All Services'],
    ['/pricing', 'Pricing Calculator'],
    ['/#projects', 'Delivered Projects'],
    ['/#comparison', 'Why AK Prints'],
    ['/blog', 'Blog'],
    ['/about', 'About'],
]

const helpLinks = [
    ['/#faq', 'FAQs'],
    ['/contact', 'Contact & Directions'],
    ['#contact', 'Book a Call'],
]

const linkClass = 'hover:text-zinc-950 transition-colors'

function SocialIcons() {
    const { x, instagram, linkedin } = site.socials
    return (
        <div className="flex items-center gap-4 sm:gap-5">
            {x && (
                <a href={x} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center" aria-label="AK Prints on X (Twitter)">
                    <svg className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] fill-zinc-900" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" />
                    </svg>
                </a>
            )}
            {instagram && (
                <a href={instagram} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center" aria-label="AK Prints on Instagram">
                    <svg className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px]" viewBox="0 0 24 24" aria-hidden="true">
                        <defs>
                            <radialGradient id="footer-ig-grad" r="150%" cx="30%" cy="107%">
                                <stop stopColor="#fdf497" offset="0%" />
                                <stop stopColor="#fdf497" offset="5%" />
                                <stop stopColor="#fd5949" offset="45%" />
                                <stop stopColor="#d6249f" offset="60%" />
                                <stop stopColor="#285AEB" offset="90%" />
                            </radialGradient>
                        </defs>
                        <path fill="url(#footer-ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                    </svg>
                </a>
            )}
            {linkedin && (
                <a href={linkedin} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center" aria-label="AK Prints on LinkedIn">
                    <svg className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] fill-[#0A66C2]" viewBox="0 0 24 24" aria-hidden="true">
                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0-.01-3.2 1.6 1.6 0 0 0 .01 3.2m1.4 9.74v-8.37H5.06v8.37h2.8z" />
                    </svg>
                </a>
            )}
            <a href={waLink()} target="_blank" rel="noopener noreferrer" className="inline-flex items-center justify-center" aria-label="AK Prints on WhatsApp">
                <svg className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] fill-[#25D366]" viewBox="0 0 24 24" aria-hidden="true">
                    <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z" />
                </svg>
            </a>
        </div>
    )
}

function Column({ title, children }) {
    return (
        <div className="space-y-3.5">
            <span className="font-semibold text-zinc-900 block text-sm">{title}</span>
            <ul className="space-y-2.5 text-zinc-600">{children}</ul>
        </div>
    )
}

export default function Footer() {
    return (
        <footer className="pt-16 sm:pt-20 pb-6 px-6 sm:px-10 lg:px-12 bg-white overflow-hidden relative">
            <div className="max-w-6xl mx-auto space-y-12 sm:space-y-14">
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-zinc-200/80">
                    <Link href="/" className="inline-block shrink-0" aria-label="AK Prints home">
                        <Image src="/ak-logo-2.png" alt="AK Prints" width={130} height={38} className="h-8 sm:h-9 w-auto object-contain" />
                    </Link>
                    <SocialIcons />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
                    {/* Contact card + name, address, phone (kept identical to the Google Business listing) */}
                    <div className="lg:col-span-4 space-y-3.5">
                        <span className="text-sm font-semibold text-zinc-900 block tracking-tight">Reach out to us</span>
                        <a
                            href={waLink()}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="group flex items-center gap-3.5 p-4 sm:p-5 rounded-2xl bg-[#f0fdf4] hover:bg-[#e7f9ed] transition-all duration-200 max-w-sm cursor-pointer"
                        >
                            <div className="w-10 h-10 rounded-full bg-[#25D366] flex items-center justify-center text-white shrink-0 group-hover:scale-105 transition-transform shadow-xs">
                                <IconBrandWhatsapp className="w-5 h-5 text-white stroke-[2.2]" />
                            </div>
                            <div>
                                <span className="text-[14px] font-semibold text-zinc-900 block leading-snug group-hover:text-emerald-950 transition-colors">
                                    Contact us on WhatsApp
                                </span>
                                <span className="text-[12px] text-zinc-500 block mt-0.5 font-normal">Our team will reply within 30 mins</span>
                            </div>
                        </a>

                        <address className="not-italic text-[13px] leading-relaxed text-zinc-600 max-w-sm pt-2 space-y-1.5">
                            <span className="block font-semibold text-zinc-900">{site.name}</span>
                            <a href={mapsDirectionsUrl} target="_blank" rel="noopener noreferrer" className={`block ${linkClass}`}>
                                {site.address.street},<br />
                                {site.address.locality}, {site.address.region} {site.address.postalCode}
                            </a>
                            <span className="block">{site.hours.label}</span>
                            {telLink && (
                                <a href={telLink} className={`block ${linkClass}`}>
                                    {site.phoneE164}
                                </a>
                            )}
                            <a href={`mailto:${site.email}`} className={`block ${linkClass}`}>
                                {site.email}
                            </a>
                        </address>
                    </div>

                    <nav aria-label="Footer" className="lg:col-span-8 grid grid-cols-2 sm:grid-cols-4 gap-8 sm:gap-8 text-xs sm:text-[13px]">
                        <Column title="Services">
                            {serviceLinks.map(([slug, label]) => (
                                <li key={slug}>
                                    <Link href={servicePath(slug)} className={linkClass}>
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </Column>
                        <Column title="Explore">
                            {companyLinks.map(([href, label]) => (
                                <li key={href}>
                                    <Link href={href} className={linkClass}>
                                        {label}
                                    </Link>
                                </li>
                            ))}
                        </Column>
                        <Column title="Locations">
                            {locations.map((loc) => (
                                <li key={loc.slug}>
                                    <Link href={locationPath(loc.slug)} className={linkClass}>
                                        {loc.city}
                                    </Link>
                                </li>
                            ))}
                        </Column>
                        <Column title="Help">
                            {helpLinks.map(([href, label]) => (
                                <li key={href}>
                                    <Link href={href} className={linkClass}>
                                        {label}
                                    </Link>
                                </li>
                            ))}
                            <li>
                                <a href={`mailto:${site.email}`} className={linkClass}>
                                    Email Support
                                </a>
                            </li>
                        </Column>
                    </nav>
                </div>

                <div className="pt-10 sm:pt-16 pb-2 flex justify-center items-center select-none pointer-events-none w-full" aria-hidden="true">
                    <span className="text-[clamp(3.5rem,11.5vw,11.5rem)] font-bold tracking-tight text-center leading-none whitespace-nowrap bg-gradient-to-b from-zinc-300/80 via-zinc-200/35 to-transparent bg-clip-text text-transparent px-2">
                        AK Prints
                    </span>
                </div>

                <div className="pt-6 pb-2 border-t border-zinc-200/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-[13px] text-zinc-500">
                    <p>
                        &copy; {new Date().getFullYear()} {site.name}. All rights reserved.
                    </p>
                    <div className="flex items-center gap-6 sm:gap-8 font-normal text-zinc-500">
                        <Link href="/terms" className={linkClass}>
                            Terms of Service
                        </Link>
                        <Link href="/privacy-policy" className={linkClass}>
                            Privacy Policy
                        </Link>
                    </div>
                </div>
            </div>
        </footer>
    )
}
