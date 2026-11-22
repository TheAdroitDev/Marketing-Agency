'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown } from 'lucide-react'
import { MorphIcon } from 'morphicons/react'
import { Menu as LucideMenu, X as LucideX } from 'lucide'
import { IconBrandWhatsapp } from '@tabler/icons-react'
import MagneticButtonDemo from '@/components/magnetic-button-demo'
import { categories, servicesByCategory, servicePath } from '@/lib/services'
import { waLink } from '@/lib/site'

const groups = categories.map((c) => ({
    id: c.id,
    label: c.label,
    items: servicesByCategory(c.id).map((s) => ({ href: servicePath(s.slug), title: s.name, desc: s.navDesc })),
}))

const directLinks = [
    { href: '/#projects', label: 'Results' },
    { href: '/pricing', label: 'Pricing' },
]

function AnimatedDropdownMenu({ items, dropdownId }) {
    const [hoveredIdx, setHoveredIdx] = useState(null)
    return (
        <div
            onMouseLeave={() => setHoveredIdx(null)}
            className="p-2.5 rounded-2xl bg-white border border-zinc-200 shadow-xl space-y-1"
        >
            {items.map((item, idx) => (
                <Link
                    key={item.href}
                    href={item.href}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    className="relative block px-4 py-3 rounded-xl transition-colors cursor-pointer group/item select-none"
                >
                    {hoveredIdx === idx && (
                        <motion.div
                            layoutId={`dropdown-hover-${dropdownId}`}
                            transition={{ type: 'spring', stiffness: 420, damping: 30 }}
                            className="absolute inset-0 bg-zinc-100 rounded-xl"
                        />
                    )}
                    <span className="relative z-10 block">
                        <span className="text-[15px] font-bold text-zinc-900 block leading-tight group-hover/item:text-blue-600 transition-colors">
                            {item.title}
                        </span>
                        <span className="text-[14px] text-zinc-600 block mt-1 font-normal">{item.desc}</span>
                    </span>
                </Link>
            ))}
        </div>
    )
}

export default function Navbar() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => setScrolled(window.scrollY > 20)
        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    const wa = waLink()
    const close = () => setMobileMenuOpen(false)

    return (
        <header className="fixed top-4 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none">
            <nav
                aria-label="Main"
                className={`max-w-6xl mx-auto rounded-[22px] px-4 sm:px-6 py-2.5 flex justify-between items-center pointer-events-auto transition-all duration-300 ease-out border ${
                    scrolled || mobileMenuOpen
                        ? 'bg-white/75 backdrop-blur-2xl backdrop-saturate-[190%] border-white/85 shadow-[0_12px_40px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.04),inset_0_1px_1.5px_rgba(255,255,255,0.95)]'
                        : 'bg-transparent border-transparent shadow-none backdrop-blur-none hover:bg-white/75 hover:backdrop-blur-2xl hover:backdrop-saturate-[190%] hover:border-white/85 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.04),inset_0_1px_1.5px_rgba(255,255,255,0.95)]'
                }`}
            >
                <Link href="/" className="flex items-center group shrink-0" aria-label="AK Prints home">
                    <Image
                        src="/ak-logo-2.png"
                        alt="AK Prints"
                        width={130}
                        height={36}
                        priority
                        className="h-8 sm:h-9 w-auto object-contain group-hover:scale-105 transition-transform"
                    />
                </Link>

                {/* Desktop links. Dropdown panels stay in the DOM so crawlers can follow every service link. */}
                <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
                    {groups.map((group) => (
                        <div key={group.id} className="relative group">
                            <button
                                type="button"
                                aria-haspopup="true"
                                className="flex items-center gap-1 px-3 py-1.5 rounded-full text-[16px] font-semibold text-zinc-600 group-hover:text-zinc-950 group-focus-within:text-zinc-950 transition-colors cursor-pointer"
                            >
                                <span>{group.label}</span>
                                <ChevronDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-700 transition-transform duration-200 group-hover:rotate-180" />
                            </button>
                            <div className="absolute top-full left-0 pt-2.5 w-80 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto transition-all duration-200 ease-out z-50">
                                <AnimatedDropdownMenu items={group.items} dropdownId={group.id} />
                            </div>
                        </div>
                    ))}

                    {directLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="px-3 py-1.5 rounded-full text-[16px] font-semibold text-zinc-600 hover:text-zinc-950 transition-colors"
                        >
                            {link.label}
                        </Link>
                    ))}
                </div>

                <div className="flex items-center gap-2">
                    <div className="hidden sm:block">
                        <a href={wa} target="_blank" rel="noopener noreferrer" aria-label="Chat with AK Prints on WhatsApp">
                            <MagneticButtonDemo text="WhatsApp" variant="whatsapp" />
                        </a>
                    </div>

                    <div className="flex items-center gap-1.5 sm:hidden">
                        <a
                            href={wa}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs inline-flex items-center gap-1 transition-colors"
                        >
                            <IconBrandWhatsapp className="w-3.5 h-3.5" />
                            <span>WhatsApp</span>
                        </a>
                    </div>

                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen((o) => !o)}
                        className="lg:hidden w-9 h-9 rounded-full bg-white/90 border border-zinc-200/90 flex items-center justify-center text-zinc-800 hover:text-zinc-950 transition-colors cursor-pointer shadow-xs"
                        aria-label="Toggle Mobile Navigation"
                        aria-expanded={mobileMenuOpen}
                    >
                        <MorphIcon icon={mobileMenuOpen ? LucideX : LucideMenu} size={18} strokeWidth={2.2} className="text-zinc-800" />
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-5xl mx-auto mt-2 rounded-[22px] bg-white border border-zinc-200 shadow-none p-5 sm:p-6 pointer-events-auto lg:hidden overflow-hidden max-h-[82vh] overflow-y-auto"
                    >
                        <div className="space-y-4">
                            {groups.map((group, gi) => (
                                <div key={group.id} className={gi > 0 ? 'pt-2 border-t border-zinc-100' : ''}>
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block px-2 mb-1.5">
                                        {group.label}
                                    </span>
                                    <div className="space-y-1">
                                        {group.items.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={close}
                                                className="block px-3.5 py-3 rounded-xl hover:bg-zinc-100 transition-colors"
                                            >
                                                <span className="text-[15px] font-bold text-zinc-800 block">{item.title}</span>
                                                <span className="text-[14px] text-zinc-600 block font-normal mt-0.5">{item.desc}</span>
                                            </Link>
                                        ))}
                                    </div>
                                </div>
                            ))}

                            <div className="pt-2 border-t border-zinc-100 grid grid-cols-3 gap-2.5">
                                <Link
                                    href="/#projects"
                                    onClick={close}
                                    className="p-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 transition-colors text-center text-[15px] font-bold text-zinc-800"
                                >
                                    Results
                                </Link>
                                <Link
                                    href="/pricing"
                                    onClick={close}
                                    className="p-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 transition-colors text-center text-[15px] font-bold text-zinc-800"
                                >
                                    Pricing
                                </Link>
                                <Link
                                    href="/contact"
                                    onClick={close}
                                    className="p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors text-center text-[15px] font-bold text-blue-700"
                                >
                                    Contact
                                </Link>
                            </div>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
