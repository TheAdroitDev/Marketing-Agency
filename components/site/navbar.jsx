'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link'
import Image from 'next/image'
import { motion, AnimatePresence } from 'framer-motion'
import { ChevronDown, ArrowUpRight } from 'lucide-react'
import { MorphIcon } from 'morphicons/react'
import { Menu as LucideMenu, X as LucideX } from 'lucide'
import {
    IconBrandWhatsapp,
    IconWorldWww,
    IconShoppingBag,
    IconLayoutDashboard,
    IconBrandGoogle,
    IconBrandYoutube,
    IconBrandMeta,
    IconSearch,
    IconVectorBezier2,
    IconPhotoEdit,
    IconLayout,
    IconId,
    IconFileText,
    IconFlag3,
    IconPackage,
    IconToolsKitchen2,
    IconBuildingStore,
    IconPoint,
} from '@tabler/icons-react'
import MagneticButtonDemo from '@/components/magnetic-button-demo'
import { categories, servicesByCategory, servicePath } from '@/lib/services'
import { waLink } from '@/lib/site'

// One icon + color per service slug. Ad platforms use their brand marks and brand colors;
// the rest get a distinct accent so each row is recognisable at a glance.
const serviceIcons = {
    'website-design-development': [IconWorldWww, '#2563eb'],
    'ecommerce-website-development': [IconShoppingBag, '#059669'],
    'web-portals-web-apps': [IconLayoutDashboard, '#7c3aed'],
    'google-ads-management': [IconBrandGoogle, '#4285f4'],
    'youtube-ads': [IconBrandYoutube, '#ff0000'],
    'meta-ads': [IconBrandMeta, '#0866ff'],
    'seo-services': [IconSearch, '#d97706'],
    'logo-design-branding': [IconVectorBezier2, '#db2777'],
    'graphic-design': [IconPhotoEdit, '#ea580c'],
    'ui-ux-design': [IconLayout, '#0891b2'],
    'visiting-card-printing': [IconId, '#4f46e5'],
    'stationery-printing': [IconFileText, '#0d9488'],
    'banner-flex-printing': [IconFlag3, '#dc2626'],
    'packaging-printing': [IconPackage, '#b45309'],
    'food-packaging-printing': [IconToolsKitchen2, '#16a34a'],
    signboards: [IconBuildingStore, '#ca8a04'],
}

const groups = categories.map((c) => ({
    id: c.id,
    label: c.label,
    items: servicesByCategory(c.id).map((s) => ({
        href: servicePath(s.slug),
        title: s.name,
        desc: s.navDesc,
        Icon: serviceIcons[s.slug]?.[0] ?? IconPoint,
        color: serviceIcons[s.slug]?.[1] ?? '#52525b',
    })),
}))

const directLinks = [
    { href: '/#projects', label: 'Results' },
    { href: '/pricing', label: 'Pricing' },
]

const spring = { type: 'spring', stiffness: 420, damping: 30 }

// Isometric icon: three stacked slabs seen in orthographic 3D (rotateX 55° / rotateZ -45°, no
// perspective), with the glyph lying on the top face. Grey at rest; on hover the slabs lift apart
// and pick up the service color.
// Each slab is a face plus a darker "edge" face 2px below it, which reads as thickness.
const ease = 'duration-300 ease-[cubic-bezier(0.22,1,0.36,1)]'
const face = `absolute inset-0 rounded-[8px] transition-[transform,background-color,border-color] ${ease}`

function IconTile({ Icon, color }) {
    return (
        <span style={{ '--c': color }} className="relative shrink-0 size-12 flex items-center justify-center" aria-hidden="true">
            {/* soft ground shadow, stays on the floor */}
            <span className="absolute size-[32px] translate-y-[11px] [transform:rotateX(55deg)_rotateZ(-45deg)] rounded-[7px] bg-zinc-900/15 blur-[3px] transition-colors duration-300 group-hover/item:bg-[color-mix(in_oklab,var(--c)_35%,transparent)]" />
            <span className="relative size-[32px] translate-y-[6px] transform-3d [transform:rotateX(55deg)_rotateZ(-45deg)]">
                {/* bottom slab */}
                <span className={`${face} bg-zinc-400 [transform:translateZ(-2px)] group-hover/item:bg-[color-mix(in_oklab,var(--c)_70%,black)]`} />
                <span className={`${face} bg-zinc-300 [transform:translateZ(0px)] group-hover/item:bg-[color-mix(in_oklab,var(--c)_75%,white)]`} />
                {/* middle slab */}
                <span className={`${face} bg-zinc-300 [transform:translateZ(3px)] group-hover/item:[transform:translateZ(6px)] group-hover/item:bg-[color-mix(in_oklab,var(--c)_55%,black)]`} />
                <span className={`${face} bg-zinc-200 border border-white/70 [transform:translateZ(5px)] group-hover/item:[transform:translateZ(8px)] group-hover/item:bg-[color-mix(in_oklab,var(--c)_40%,white)]`} />
                {/* top slab with the glyph */}
                <span className={`${face} bg-zinc-400 [transform:translateZ(8px)] group-hover/item:[transform:translateZ(14px)] group-hover/item:bg-[color-mix(in_oklab,var(--c)_45%,white)]`} />
                <span
                    className={`${face} flex items-center justify-center bg-white border border-zinc-300 text-zinc-700 [transform:translateZ(10px)] group-hover/item:[transform:translateZ(16px)] group-hover/item:bg-[color-mix(in_oklab,var(--c)_8%,white)] group-hover/item:border-[color-mix(in_oklab,var(--c)_40%,white)] group-hover/item:text-(--c)`}
                >
                    <Icon className="size-[21px] transition-colors duration-300" stroke={2} />
                </span>
            </span>
        </span>
    )
}

function ServiceRow({ item }) {
    return (
        <span className="relative z-10 flex items-center gap-3.5">
            <IconTile Icon={item.Icon} color={item.color} />
            <span className="min-w-0">
                <span className="block text-[15px] font-semibold leading-tight text-zinc-900 transition-colors group-hover/item:text-blue-600">
                    {item.title}
                </span>
                <span className="mt-1 block text-[13.5px] leading-snug text-zinc-500">{item.desc}</span>
            </span>
        </span>
    )
}

function AnimatedDropdownMenu({ items, dropdownId }) {
    const [hoveredIdx, setHoveredIdx] = useState(null)
    return (
        <div
            onMouseLeave={() => setHoveredIdx(null)}
            className="p-2 rounded-2xl bg-white border border-zinc-200 shadow-xl space-y-0.5"
        >
            {items.map((item, idx) => (
                <Link
                    key={item.href}
                    href={item.href}
                    onMouseEnter={() => setHoveredIdx(idx)}
                    onFocus={() => setHoveredIdx(idx)}
                    className="relative block px-3 py-2.5 rounded-xl cursor-pointer group/item select-none"
                >
                    {hoveredIdx === idx && (
                        <motion.div
                            layoutId={`dropdown-hover-${dropdownId}`}
                            transition={spring}
                            className="absolute inset-0 bg-zinc-100 rounded-xl"
                        />
                    )}
                    <ServiceRow item={item} />
                </Link>
            ))}
        </div>
    )
}

function MobileMenu({ onNavigate }) {
    const [openGroup, setOpenGroup] = useState(null)

    return (
        <div className="divide-y divide-zinc-100">
            {groups.map((group) => {
                const open = openGroup === group.id
                const panelId = `mobile-nav-${group.id}`
                return (
                    <div key={group.id}>
                        <button
                            type="button"
                            onClick={() => setOpenGroup(open ? null : group.id)}
                            aria-expanded={open}
                            aria-controls={panelId}
                            className="flex w-full items-center justify-between px-2 py-3.5 text-left text-[17px] font-semibold text-zinc-900 cursor-pointer"
                        >
                            <span>{group.label}</span>
                            <span className="flex items-center gap-2">
                                <span className="text-[13px] font-medium text-zinc-400 tabular-nums">{group.items.length}</span>
                                <ChevronDown
                                    className={`size-4 text-zinc-400 transition-transform duration-300 ease-out ${open ? 'rotate-180 text-zinc-700' : ''}`}
                                />
                            </span>
                        </button>
                        <AnimatePresence initial={false}>
                            {open && (
                                <motion.div
                                    id={panelId}
                                    initial={{ height: 0, opacity: 0 }}
                                    animate={{ height: 'auto', opacity: 1 }}
                                    exit={{ height: 0, opacity: 0 }}
                                    transition={{ duration: 0.28, ease: [0.22, 1, 0.36, 1] }}
                                    className="overflow-hidden"
                                >
                                    <div className="pb-3 space-y-0.5">
                                        {group.items.map((item) => (
                                            <Link
                                                key={item.href}
                                                href={item.href}
                                                onClick={onNavigate}
                                                className="group/item block rounded-xl px-2 py-2.5 transition-colors hover:bg-zinc-100 active:bg-zinc-100"
                                            >
                                                <ServiceRow item={item} />
                                            </Link>
                                        ))}
                                    </div>
                                </motion.div>
                            )}
                        </AnimatePresence>
                    </div>
                )
            })}

            {directLinks.map((link) => (
                <Link
                    key={link.href}
                    href={link.href}
                    onClick={onNavigate}
                    className="flex items-center justify-between px-2 py-3.5 text-[17px] font-semibold text-zinc-900"
                >
                    <span>{link.label}</span>
                    <ArrowUpRight className="size-4 text-zinc-400" aria-hidden="true" />
                </Link>
            ))}

            {/* Same magnetic "Book a Call" button as the hero. Scrolls to the booking section on this page
                (every PageShell page has #contact); falls back to the home page's one if it's missing. */}
            <div className="pt-4 pb-1">
                <Link
                    href="/#contact"
                    onClick={(e) => {
                        const target = document.getElementById('contact')
                        onNavigate()
                        if (target) {
                            e.preventDefault()
                            // Wait for the menu's exit animation; scrolling while the tapped link is
                            // being unmounted gets cancelled on real taps.
                            setTimeout(() => target.scrollIntoView({ behavior: 'smooth' }), 240)
                        }
                    }}
                    className="block"
                >
                    <MagneticButtonDemo text="Book a Call" />
                </Link>
            </div>
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

    // Menu links close it on click; also close on Escape and when the viewport grows to desktop.
    useEffect(() => {
        if (!mobileMenuOpen) return
        const onKey = (e) => e.key === 'Escape' && setMobileMenuOpen(false)
        const mq = window.matchMedia('(min-width: 1024px)')
        const onMq = (e) => e.matches && setMobileMenuOpen(false)
        window.addEventListener('keydown', onKey)
        mq.addEventListener('change', onMq)
        return () => {
            window.removeEventListener('keydown', onKey)
            mq.removeEventListener('change', onMq)
        }
    }, [mobileMenuOpen])

    const wa = waLink()
    const close = () => setMobileMenuOpen(false)

    return (
        <header className="fixed top-3 sm:top-4 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none">
            <nav
                aria-label="Main"
                className={`max-w-6xl mx-auto rounded-[22px] pl-4 pr-2.5 sm:px-6 py-2 sm:py-2.5 flex justify-between items-center gap-3 pointer-events-auto transition-all duration-300 ease-out border ${
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

                {/* Desktop links. Dropdown panels stay in the DOM so crawlers can follow every service link.
                    Top-level items only change text color on hover (no background pill, by owner's choice). */}
                <div className="hidden lg:flex items-center gap-0.5 xl:gap-1.5">
                    {groups.map((group, gi) => (
                        <div key={group.id} className="relative group">
                            <button
                                type="button"
                                aria-haspopup="true"
                                className="flex items-center gap-1 px-2.5 xl:px-3 py-1.5 rounded-full text-[15px] xl:text-[16px] font-semibold text-zinc-600 group-hover:text-zinc-950 group-focus-within:text-zinc-950 transition-colors cursor-pointer"
                            >
                                <span>{group.label}</span>
                                <ChevronDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-700 transition-transform duration-200 group-hover:rotate-180" />
                            </button>
                            {/* Last groups open right-aligned so the panel never runs off a narrow desktop. */}
                            <div
                                className={`absolute top-full pt-2.5 w-[22rem] opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto group-focus-within:opacity-100 group-focus-within:translate-y-0 group-focus-within:pointer-events-auto transition-all duration-200 ease-out z-50 ${
                                    gi >= groups.length - 1 ? 'right-0' : 'left-0'
                                }`}
                            >
                                <AnimatedDropdownMenu items={group.items} dropdownId={group.id} />
                            </div>
                        </div>
                    ))}

                    {directLinks.map((link) => (
                        <Link
                            key={link.href}
                            href={link.href}
                            className="px-2.5 xl:px-3 py-1.5 rounded-full text-[15px] xl:text-[16px] font-semibold text-zinc-600 hover:text-zinc-950 focus-visible:text-zinc-950 transition-colors"
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

                    <a
                        href={wa}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Chat with AK Prints on WhatsApp"
                        className="sm:hidden h-9 px-3 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white text-xs font-semibold inline-flex items-center gap-1 transition-colors shadow-xs"
                    >
                        <IconBrandWhatsapp className="w-4 h-4" />
                        <span className="max-[359px]:hidden">WhatsApp</span>
                    </a>

                    <button
                        type="button"
                        onClick={() => setMobileMenuOpen((o) => !o)}
                        className="lg:hidden w-9 h-9 rounded-full bg-white/90 border border-zinc-200/90 flex items-center justify-center text-zinc-800 hover:text-zinc-950 transition-colors cursor-pointer shadow-xs"
                        aria-label={mobileMenuOpen ? 'Close menu' : 'Open menu'}
                        aria-expanded={mobileMenuOpen}
                        aria-controls="mobile-menu"
                    >
                        <MorphIcon icon={mobileMenuOpen ? LucideX : LucideMenu} size={18} strokeWidth={2.2} className="text-zinc-800" />
                    </button>
                </div>
            </nav>

            <AnimatePresence>
                {mobileMenuOpen && (
                    <motion.div
                        id="mobile-menu"
                        initial={{ opacity: 0, y: -8, scale: 0.98 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: -8, scale: 0.98 }}
                        transition={{ duration: 0.2, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-6xl mx-auto mt-2 rounded-[22px] bg-white border border-zinc-200 shadow-[0_12px_40px_rgba(0,0,0,0.1)] px-3 py-2 sm:px-5 sm:py-3 pointer-events-auto lg:hidden max-h-[calc(100dvh-6rem)] overflow-y-auto overscroll-contain"
                    >
                        <MobileMenu onNavigate={close} />
                    </motion.div>
                )}
            </AnimatePresence>
        </header>
    )
}
