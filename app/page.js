'use client'

import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import {
    ArrowUpRight, Mail, Github, Linkedin, Twitter,
    ChevronRight, Check, ShoppingBag, Palette,
    Globe, Monitor, LayoutDashboard, Briefcase, Rocket, Code2,
    Youtube, Instagram, Search,
    PenTool, Figma, Server, Cpu, Sparkles, TrendingUp, Zap, Target,
    CheckCircle2, X, Sliders, ArrowRight, UserCheck, Shield, Clock,
    HelpCircle, Plus, ChevronDown, Menu, Printer, Layers
} from 'lucide-react'
import { MorphIcon } from 'morphicons/react'
import { Menu as LucideMenu, X as LucideX } from 'lucide'
import { IconBrandWhatsapp } from '@tabler/icons-react'
import Image from 'next/image'
import AuroraBackgroundDemo from "@/components/aurora-background-demo"
import MagneticButtonDemo from '@/components/magnetic-button-demo'
import { BackgroundRippleEffect } from '@/components/ui/background-ripple-effect'
import SocialProof01 from '@/components/social-proof-01'
import { AuroraText } from '@/components/ui/aurora-text'
import AkprintsVsOthers from '@/components/akprints-vs-others'
import EverythingYourBusinessNeeds from '@/components/everything-your-business-needs'
import { Faq } from '@/components/ui/faq'
import CtaSection from '@/components/cta-section'

const printServices = [
    {
        title: 'Visiting Cards & Corporate Stationery',
        desc: 'Premium business cards with luxury finishes including 450+ GSM velvet touch, spot UV, embossed gold foil, letterheads, and custom folders.',
        deliverables: ['Velvet & Matte Lamination', 'Raised Spot UV & Gold Foil', 'Executive Letterheads & Envelopes', 'Die-Cut Presentation Folders']
    },
    {
        title: '3D Acrylic & LED Glow Signboards',
        desc: 'High-visibility storefront signboards, illuminated 3D acrylic letters, ACP panel facades, and premium indoor office reception logos.',
        deliverables: ['Backlit & Frontlit 3D Acrylic Letters', 'High-Lumen Weatherproof LEDs', 'ACP Panel Storefront Facades', 'Office Reception & Neon Displays']
    },
    {
        title: 'Roll-up Standees & Large Format Banners',
        desc: 'Vibrant event roll-up standees, heavy-duty Star flex outdoor banners, vinyl wall graphics, and custom exhibition display backdrops.',
        deliverables: ['Aluminum Base Roll-Up Standees', 'Heavy-Duty All-Weather Flex Banners', 'Frosted Glass & Vinyl Wall Graphics', 'Custom Exhibition Backdrops']
    },
    {
        title: 'Custom Product Packaging & Merch',
        desc: 'Rigid luxury gift boxes, custom printed corrugated mailers, die-cut brand stickers, and premium corporate merchandise.',
        deliverables: ['Rigid Magnetic Gift Boxes', 'Branded Corrugated Shipping Mailers', 'Waterproof Die-Cut Vinyl Stickers', 'Custom Apparel & Promotional Merch']
    }
]

// Cal.com Integration
const useCalEmbed = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", { "styles": { "branding": { "brandColor": "#2563eb" } }, "hideEventTypeDetails": false, "layout": "month_view" });
        })();
    }, []);
};

const getCalApi = () =>
    new Promise((resolve) => {
        (function (C, A, L) {
            let p = function (a, ar) { a.q.push(ar); };
            let d = C.document;
            C.Cal = C.Cal || function () {
                let cal = C.Cal;
                let ar = arguments;
                if (!cal.loaded) {
                    cal.ns = {};
                    cal.q = cal.q || [];
                    d.head.appendChild(d.createElement("script")).src = A;
                    cal.loaded = true;
                }
                if (ar[0] === "init") {
                    let api = function () { p(api, arguments); };
                    let namespace = ar[1];
                    api.q = api.q || [];
                    typeof namespace === "string" ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar);
                    return;
                }
                p(cal, ar);
            };
        })(window, "https://app.cal.com/embed/embed.js", "init");

        window.Cal("init", { origin: "https://cal.com" });
        resolve(window.Cal);
    });


// ── DATA DEFINITIONS ─────────────────────────────────

const websiteTypes = [
    {
        name: 'Online Stores',
        tag: 'E-Commerce',
        desc: 'Sell products online with smooth payments, inventory management, and live order tracking.',
        deliverables: ['Custom Product Pages', 'Razorpay & Stripe Setup', 'Fast Mobile Checkout'],
        illustration: '/svgs/undraw_system-update_pc33.svg',
        color: '#ea580c'
    },
    {
        name: 'SaaS Platforms',
        tag: 'Web Apps',
        desc: 'Web applications with user login, subscription billing, and real-time customer dashboards.',
        deliverables: ['Secure Authentication', 'Stripe Billing System', 'Interactive User Dashboards'],
        illustration: '/svgs/undraw_online-ad_703t.svg',
        color: '#2563eb'
    },
    {
        name: 'Business Websites',
        tag: 'Corporate',
        desc: 'Professional websites that make your company look credible, trustworthy, and modern.',
        deliverables: ['Modern Brand Layout', 'Mobile Friendly Design', 'Clear Service Showcase'],
        illustration: '/svgs/undraw_collaboration_hkrb.svg',
        color: '#059669'
    },
    {
        name: 'Portfolio Sites',
        tag: 'Creators',
        desc: 'Showcase your creative work, photography, or design projects with clean aesthetic layouts.',
        deliverables: ['Visual Media Gallery', 'Fast Loading Times', 'Direct Contact Funnel'],
        illustration: '/svgs/undraw_marketing-analysis_2u5r.svg',
        color: '#7c3aed'
    },
    {
        name: 'Landing Pages',
        tag: 'Marketing',
        desc: 'Single-page sites engineered specifically to convert visitors into booked calls or buyers.',
        deliverables: ['Persuasive Copywriting', 'Calendar Booking Embed', 'A/B Test Ready'],
        illustration: '/svgs/undraw_make-it-rain_ylfg.svg',
        color: '#0284c7'
    },
    {
        name: 'Admin Dashboards',
        tag: 'Operations',
        desc: 'Custom back-office panels to manage your daily orders, user data, and business numbers.',
        deliverables: ['Live Analytics Data', 'Order & User Management', 'Automated Export Reports'],
        illustration: '/svgs/undraw_growth-chart_4iho.svg',
        color: '#d97706'
    }
]

const comparisonFeatures = [
    { name: 'Custom Next.js code with zero bloated templates', others: false, akprints: true },
    { name: 'Direct Senior Engineer pairing without account managers', others: false, akprints: true },
    { name: 'Full ad creative scripting, hook testing & video editing', others: false, akprints: true },
    { name: 'Multi-channel ad management (Meta, Google & YouTube)', others: true, akprints: true },
    { name: 'Sub-second edge page loading speeds (95+ Core Web Vitals)', others: false, akprints: true },
    { name: 'Server-side CAPI tracking to prevent iOS ad data loss', others: false, akprints: true },
    { name: 'Fast 2 to 4 week sprint delivery', others: false, akprints: true },
    { name: 'Direct Slack and WhatsApp daily communication', others: false, akprints: true },
    { name: '100% intellectual property & source code ownership', others: true, akprints: true }
]

const comparisonPills = [
    'One-Click Checkout',
    'Custom Webhooks',
    'A/B Testing',
    'Multi-Currency Support',
    'ROAS Telemetry',
    'SEO Structured Schema',
    'Razorpay & Stripe',
    'Fast Edge Caching'
]

const deliveredProjects = [
    {
        id: 1,
        title: 'Vastu Mentor',
        category: 'Consultation & Store',
        image: '/works/vm.png',
        domain: 'vastumentor.com',
        description: 'Online consultation booking & spiritual product store with automated courier tracking.',
        link: 'https://vastumentor.com',
        buttonText: 'Visit Live Website',
        colSpan: 'col-span-12 lg:col-span-7',
        bgClass: 'bg-white'
    },
    {
        id: 2,
        title: 'MuskySnax',
        category: 'D2C Food Brand',
        image: '/works/ms.png',
        domain: 'muskysnax.in',
        description: 'Direct-to-consumer healthy makhana store with 1-click mobile checkout & WhatsApp alerts.',
        link: 'https://muskysnax.in',
        buttonText: 'Visit Live Website',
        colSpan: 'col-span-12 lg:col-span-5',
        bgClass: 'bg-[#fed802]'
    },
    {
        id: 3,
        title: 'Jai Builders',
        category: 'Luxury Architecture & Living',
        image: '/works/jbs.png',
        domain: 'jaibuilders.in',
        description: 'Two generations of master craftsmanship showcasing custom luxury villas, architectural marvels & turnkey residential projects.',
        link: '#contact',
        buttonText: 'View Case Study',
        colSpan: 'col-span-12',
        bgClass: 'bg-zinc-950'
    }
]

const teamMembers = [
    {
        role: 'Content Writer',
        icon: PenTool,
        description: 'Writes the words on your website and ads that make people take action and buy.'
    },
    {
        role: 'Design Engineer',
        icon: Figma,
        description: 'Turns designs into real, fast, working, interactive websites.'
    },
    {
        role: 'UI/UX Designer',
        icon: Palette,
        description: 'Makes sure your website looks clean, modern, and is effortless for everyone to use.'
    },
    {
        role: 'Forward Deployed Engineer',
        icon: Cpu,
        description: 'Works directly with you to build exactly what your business needs without middle managers.'
    },
    {
        role: 'System Design Engineer',
        icon: Server,
        description: 'Builds the backend so your website stays fast and reliable even during heavy traffic spikes.'
    }
]

const faqItems = [
    {
        id: 'website-timeline',
        question: 'How fast can you build and launch our website?',
        answer: 'Most standard websites and online stores launch within 2 to 4 weeks. For custom web applications, we work in focused weekly sprints so you see tangible progress every week.'
    },
    {
        id: 'ad-campaigns',
        question: 'How does your ad campaign service work?',
        answer: 'We handle everything from writing high-converting ad copy and designing creatives to setting up targeted campaigns on Google, Meta, and Instagram, optimizing your budget daily to maximize returns.'
    },
    {
        id: 'ownership',
        question: 'Do I get 100% ownership of my website and assets?',
        answer: 'Yes, completely. You own all source code, domain assets, ad accounts, and design files from day one. We never lock you into proprietary platforms.'
    },
    {
        id: 'communication',
        question: 'How do we communicate throughout the project?',
        answer: 'We create a dedicated WhatsApp or Slack channel for your team. You get direct access to the people actually building your project for quick questions and clear milestones.'
    },
    {
        id: 'print-services',
        question: 'What are your print and signboard turnaround times?',
        answer: 'Corporate stationery and premium business cards dispatch within 2 to 4 business days. Custom 3D acrylic and LED glow signboards are manufactured and installed within 5 to 7 days.'
    }
]

const navDropdowns = {
    web: [
        { href: '#services', title: 'E-commerce Stores', desc: 'Online shops with secure payments' },
        { href: '#services', title: 'Business Websites', desc: 'Fast, modern websites for companies' },
        { href: '#services', title: 'Web Apps & Portals', desc: 'Custom portals, software & dashboards' }
    ],
    marketing: [
        { href: '#services', title: 'Paid Ads Management', desc: 'Instagram, Google & YouTube campaigns' },
        { href: '#services', title: 'SEO & Google Search', desc: 'Get your website on top of search results' },
        { href: '#services', title: 'Sales & Growth Funnels', desc: 'Turn website visitors into paying buyers' }
    ],
    design: [
        { href: '#services', title: 'Logo & Brand Identity', desc: 'Logos, colors & full brand styleguides' },
        { href: '#services', title: 'Graphic & Ad Creatives', desc: 'Posters, social media graphics & promo banners' },
        { href: '#services', title: 'UI/UX Website Design', desc: 'Clean, simple & modern interface layouts' }
    ],
    print: [
        { href: '#services', title: 'Visiting Cards & Stationery', desc: 'Luxury cards, letterheads & envelopes' },
        { href: '#services', title: 'Shop Signboards', desc: 'LED glow boards & office reception signs' },
        { href: '#services', title: 'Banners, Standees & Packaging', desc: 'Event standees, vinyl decals & custom boxes' }
    ]
}

function AnimatedDropdownMenu({ items, dropdownId }) {
    const [hoveredIdx, setHoveredIdx] = useState(null)
    return (
        <div
            onMouseLeave={() => setHoveredIdx(null)}
            className="p-2.5 rounded-2xl bg-white border border-zinc-200 shadow-xl space-y-1"
        >
            {items.map((item, idx) => {
                const isHovered = hoveredIdx === idx
                return (
                    <a
                        key={idx}
                        href={item.href}
                        onMouseEnter={() => setHoveredIdx(idx)}
                        className="relative block px-4 py-3 rounded-xl transition-colors cursor-pointer group/item select-none"
                    >
                        {isHovered && (
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
                            <span className="text-[14px] text-zinc-600 block mt-1 font-normal">
                                {item.desc}
                            </span>
                        </span>
                    </a>
                )
            })}
        </div>
    )
}

// ── MAIN COMPONENT ────────────────────────────────────
export default function Home() {
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

    const [scrolled, setScrolled] = useState(false)

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20)
        }
        handleScroll()
        window.addEventListener('scroll', handleScroll, { passive: true })
        return () => window.removeEventListener('scroll', handleScroll)
    }, [])

    useCalEmbed()

    const fadeIn = {
        hidden: { opacity: 0, y: 20 },
        visible: (d = 0) => ({
            opacity: 1,
            y: 0,
            transition: { duration: 0.5, delay: d, ease: [0.22, 1, 0.36, 1] }
        })
    }

    const waNumber = (process.env.NEXT_PUBLIC_WA_NUMBER || process.env.WA_NUMBER || '919876543210').replace(/[^0-9]/g, '')
    const waLink = `https://wa.me/${waNumber}?text=${encodeURIComponent("Hi Ak Prints! I'd like to discuss a project with your team.")}`

    return (
        <div className="min-h-screen antialiased overflow-x-hidden bg-[#fafaf9] text-[#18181b]">

            {/* ── DETACHED FLOATING SQUIRCLE NAVBAR (Glassmorphism + Fully Responsive) ── */}
            <div className="fixed top-4 inset-x-0 z-50 px-3 sm:px-6 pointer-events-none">
                <nav
                    className={`max-w-6xl mx-auto rounded-[22px] px-4 sm:px-6 py-2.5 flex justify-between items-center pointer-events-auto transition-all duration-300 ease-out border ${
                        scrolled || mobileMenuOpen
                            ? 'bg-white/75 backdrop-blur-2xl backdrop-saturate-[190%] border-white/85 shadow-[0_12px_40px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.04),inset_0_1px_1.5px_rgba(255,255,255,0.95)]'
                            : 'bg-transparent border-transparent shadow-none backdrop-blur-none hover:bg-white/75 hover:backdrop-blur-2xl hover:backdrop-saturate-[190%] hover:border-white/85 hover:shadow-[0_12px_40px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.04),inset_0_1px_1.5px_rgba(255,255,255,0.95)]'
                    }`}
                >
                    {/* Brand Logo */}
                    <a href="#" className="flex items-center group shrink-0">
                        <Image
                            src="/ak-logo-2.png"
                            alt="AK Prints"
                            width={130}
                            height={36}
                            priority
                            className="h-8 sm:h-9 w-auto object-contain group-hover:scale-105 transition-transform"
                        />
                    </a>

                    {/* Desktop Nav Links with Animated Dropdown Items */}
                    <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
                        {/* 1. Web Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 px-3 py-1.5 rounded-full text-[16px] font-semibold text-zinc-600 group-hover:text-zinc-950 transition-colors cursor-pointer">
                                <span>Web</span>
                                <ChevronDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-700 transition-transform duration-200 group-hover:rotate-180" />
                            </button>
                            <div className="absolute top-full left-0 pt-2.5 w-80 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
                                <AnimatedDropdownMenu items={navDropdowns.web} dropdownId="web" />
                            </div>
                        </div>

                        {/* 2. Marketing Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 px-3 py-1.5 rounded-full text-[16px] font-semibold text-zinc-600 group-hover:text-zinc-950 transition-colors cursor-pointer">
                                <span>Marketing</span>
                                <ChevronDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-700 transition-transform duration-200 group-hover:rotate-180" />
                            </button>
                            <div className="absolute top-full left-0 pt-2.5 w-80 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
                                <AnimatedDropdownMenu items={navDropdowns.marketing} dropdownId="marketing" />
                            </div>
                        </div>

                        {/* 3. Design Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 px-3 py-1.5 rounded-full text-[16px] font-semibold text-zinc-600 group-hover:text-zinc-950 transition-colors cursor-pointer">
                                <span>Design</span>
                                <ChevronDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-700 transition-transform duration-200 group-hover:rotate-180" />
                            </button>
                            <div className="absolute top-full left-0 pt-2.5 w-80 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
                                <AnimatedDropdownMenu items={navDropdowns.design} dropdownId="design" />
                            </div>
                        </div>

                        {/* 4. Print Dropdown */}
                        <div className="relative group">
                            <button className="flex items-center gap-1 px-3 py-1.5 rounded-full text-[16px] font-semibold text-zinc-600 group-hover:text-zinc-950 transition-colors cursor-pointer">
                                <span>Print</span>
                                <ChevronDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-700 transition-transform duration-200 group-hover:rotate-180" />
                            </button>
                            <div className="absolute top-full left-0 pt-2.5 w-80 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
                                <AnimatedDropdownMenu items={navDropdowns.print} dropdownId="print" />
                            </div>
                        </div>

                        {/* 5. Direct Link: Results */}
                        <a
                            href="#projects"
                            className="px-3 py-1.5 rounded-full text-[16px] font-semibold text-zinc-600 hover:text-zinc-950 transition-colors"
                        >
                            Results
                        </a>
                    </div>

                    {/* Right: Desktop Action Button & Mobile Controls */}
                    <div className="flex items-center gap-2">
                        <div className="hidden sm:block">
                            <a href={waLink} target="_blank" rel="noopener noreferrer">
                                <MagneticButtonDemo text="WhatsApp" variant="whatsapp" />
                            </a>
                        </div>

                        <div className="flex items-center gap-1.5 sm:hidden">
                            <a
                                href={waLink}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="text-xs font-semibold px-3 py-1.5 rounded-full bg-emerald-600 hover:bg-emerald-700 text-white shadow-xs inline-flex items-center gap-1 transition-colors"
                            >
                                <IconBrandWhatsapp className="w-3.5 h-3.5" />
                                <span>WhatsApp</span>
                            </a>
                        </div>

                        {/* Mobile Hamburger Toggle Button (Animated MorphIcon) */}
                        <button
                            onClick={() => setMobileMenuOpen(o => !o)}
                            className="lg:hidden w-9 h-9 rounded-full bg-white/90 border border-zinc-200/90 flex items-center justify-center text-zinc-800 hover:text-zinc-950 transition-colors cursor-pointer shadow-xs"
                            aria-label="Toggle Mobile Navigation"
                            aria-expanded={mobileMenuOpen}
                        >
                            <MorphIcon
                                icon={mobileMenuOpen ? LucideX : LucideMenu}
                                size={18}
                                strokeWidth={2.2}
                                className="text-zinc-800"
                            />
                        </button>
                    </div>
                </nav>

                {/* Mobile Dropdown Panel */}
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
                                {/* 1. Web Group */}
                                <div>
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block px-2 mb-1.5">
                                        Web
                                    </span>
                                    <div className="space-y-1">
                                        <a
                                            href="#websites"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block px-3.5 py-3 rounded-xl hover:bg-zinc-100 transition-colors"
                                        >
                                            <span className="text-[15px] font-bold text-zinc-800 block">Business Websites</span>
                                            <span className="text-[14px] text-zinc-600 block font-normal mt-0.5">Fast, modern websites for companies</span>
                                        </a>
                                        <a
                                            href="#websites"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block px-3.5 py-3 rounded-xl hover:bg-zinc-100 transition-colors"
                                        >
                                            <span className="text-[15px] font-bold text-zinc-800 block">Online Stores</span>
                                            <span className="text-[14px] text-zinc-600 block font-normal mt-0.5">E-commerce shops with online checkout</span>
                                        </a>
                                        <a
                                            href="#websites"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block px-3.5 py-3 rounded-xl hover:bg-zinc-100 transition-colors"
                                        >
                                            <span className="text-[15px] font-bold text-zinc-800 block">Web Apps & Portals</span>
                                            <span className="text-[14px] text-zinc-600 block font-normal mt-0.5">Custom portals, software & dashboards</span>
                                        </a>
                                    </div>
                                </div>

                                {/* 2. Marketing Group */}
                                <div className="pt-2 border-t border-zinc-100">
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block px-2 mb-1.5">
                                        Marketing
                                    </span>
                                    <div className="space-y-1">
                                        <a
                                            href="#ads"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block px-3.5 py-3 rounded-xl hover:bg-zinc-100 transition-colors"
                                        >
                                            <span className="text-[15px] font-bold text-zinc-800 block">Paid Ads Management</span>
                                            <span className="text-[14px] text-zinc-600 block font-normal mt-0.5">Instagram, Google & YouTube campaigns</span>
                                        </a>
                                        <a
                                            href="#services"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block px-3.5 py-3 rounded-xl hover:bg-zinc-100 transition-colors"
                                        >
                                            <span className="text-[15px] font-bold text-zinc-800 block">SEO & Google Search</span>
                                            <span className="text-[14px] text-zinc-600 block font-normal mt-0.5">Get on top of Google search results</span>
                                        </a>
                                        <a
                                            href="#services"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block px-3.5 py-3 rounded-xl hover:bg-zinc-100 transition-colors"
                                        >
                                            <span className="text-[15px] font-bold text-zinc-800 block">Sales & Growth Funnels</span>
                                            <span className="text-[14px] text-zinc-600 block font-normal mt-0.5">Turn visitors into paying buyers</span>
                                        </a>
                                    </div>
                                </div>

                                {/* 3. Design Group */}
                                <div className="pt-2 border-t border-zinc-100">
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block px-2 mb-1.5">
                                        Design
                                    </span>
                                    <div className="space-y-1">
                                        <a
                                            href="#start-project"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block px-3.5 py-3 rounded-xl hover:bg-zinc-100 transition-colors"
                                        >
                                            <span className="text-[15px] font-bold text-zinc-800 block">Logo & Brand Identity</span>
                                            <span className="text-[14px] text-zinc-600 block font-normal mt-0.5">Logos, color palettes & styleguides</span>
                                        </a>
                                        <a
                                            href="#start-project"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block px-3.5 py-3 rounded-xl hover:bg-zinc-100 transition-colors"
                                        >
                                            <span className="text-[15px] font-bold text-zinc-800 block">Graphic & Ad Creatives</span>
                                            <span className="text-[14px] text-zinc-600 block font-normal mt-0.5">Posters, social creatives & banners</span>
                                        </a>
                                        <a
                                            href="#start-project"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block px-3.5 py-3 rounded-xl hover:bg-zinc-100 transition-colors"
                                        >
                                            <span className="text-[15px] font-bold text-zinc-800 block">UI/UX Website Design</span>
                                            <span className="text-[14px] text-zinc-600 block font-normal mt-0.5">Clean, simple & modern UI layouts</span>
                                        </a>
                                    </div>
                                </div>

                                {/* 4. Print Group */}
                                <div className="pt-2 border-t border-zinc-100">
                                    <span className="text-[11px] font-bold uppercase tracking-wider text-zinc-400 block px-2 mb-1.5">
                                        Print
                                    </span>
                                    <div className="space-y-1">
                                        <a
                                            href="#printing"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block px-3.5 py-3 rounded-xl hover:bg-zinc-100 transition-colors"
                                        >
                                            <span className="text-[15px] font-bold text-zinc-800 block">Visiting Cards & Stationery</span>
                                            <span className="text-[14px] text-zinc-600 block font-normal mt-0.5">Luxury cards, letterheads & envelopes</span>
                                        </a>
                                        <a
                                            href="#printing"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block px-3.5 py-3 rounded-xl hover:bg-zinc-100 transition-colors"
                                        >
                                            <span className="text-[15px] font-bold text-zinc-800 block">Shop Signboards</span>
                                            <span className="text-[14px] text-zinc-600 block font-normal mt-0.5">LED glow signs & office reception signs</span>
                                        </a>
                                        <a
                                            href="#printing"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block px-3.5 py-3 rounded-xl hover:bg-zinc-100 transition-colors"
                                        >
                                            <span className="text-[15px] font-bold text-zinc-800 block">Banners, Standees & Packaging</span>
                                            <span className="text-[14px] text-zinc-600 block font-normal mt-0.5">Event standees, decals & custom boxes</span>
                                        </a>
                                    </div>
                                </div>

                                {/* Direct Action Links */}
                                <div className="pt-2 border-t border-zinc-100 grid grid-cols-2 gap-2.5">
                                    <a
                                        href="#projects"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="p-3 rounded-xl bg-zinc-50 hover:bg-zinc-100 transition-colors text-center text-[15px] font-bold text-zinc-800"
                                    >
                                        Results
                                    </a>
                                    <a
                                        href="#contact"
                                        onClick={() => setMobileMenuOpen(false)}
                                        className="p-3 rounded-xl bg-blue-50 hover:bg-blue-100 transition-colors text-center text-[15px] font-bold text-blue-700"
                                    >
                                        Book a Call
                                    </a>
                                </div>
                            </div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </div>

            {/* ── HERO SECTION ── */}
            <AuroraBackgroundDemo />

            {/* ── SOCIAL PROOF LOGO CAROUSEL COMPONENT (@ncdai/social-proof-01) ── */}
            <SocialProof01 />

            {/* ── SECTION 1: EVERYTHING YOUR BUSINESS NEEDS TO GROW ONLINE ── */}
            <EverythingYourBusinessNeeds />

            {/* ── SECTION: COMPARISON (Ak Prints VS Traditional Service Providers) ── */}
            <AkprintsVsOthers />

            {/* ── SECTION 6: PROJECTS WE HAVE DELIVERED ── */}
            <section id="projects" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#fafaf9] border-t border-zinc-200/80 overflow-hidden">
                {/* Giant Faint "Projects" Watermark */}
                <div className="absolute top-2 sm:top-6 inset-x-0 flex justify-center pointer-events-none select-none overflow-hidden z-0">
                    <span className="text-[clamp(5rem,16vw,14rem)] font-extrabold tracking-tight text-zinc-950/[0.035] leading-none select-none">
                        Projects
                    </span>
                </div>

                <div className="max-w-6xl mx-auto relative z-10">
                    {/* Section Header (Centered, Stacked Title & Description) */}
                    <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
                            Projects we have delivered<span className="text-zinc-900">.</span>
                        </h2>
                        <p className="mt-3 text-base sm:text-[17px] text-zinc-600 leading-relaxed font-normal">
                            Real client websites and stores designed and coded by our team.
                        </p>
                    </div>

                    {/* Bento Grid: Row 1 (Med Big 7 cols + Med Small 5 cols) | Row 2 (Full Big Wide 12 cols) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
                        {deliveredProjects.map((project) => {
                            const isWide = project.colSpan === 'col-span-12'
                            const isSmall = project.id === 2

                            return (
                                <div
                                    key={project.id}
                                    className={`${project.colSpan} bg-[#ededeb] border border-zinc-200/90 rounded-[28px] sm:rounded-[34px] p-5 sm:p-7 flex flex-col justify-between gap-5 sm:gap-6 group hover:border-zinc-300 transition-all duration-300 shadow-2xs hover:shadow-xs`}
                                >
                                    {/* Header: Title, Category Badge, Description & Button */}
                                    <div className={`flex ${isWide ? 'flex-col sm:flex-row sm:items-center justify-between' : 'flex-col sm:flex-row sm:items-start justify-between'} gap-4`}>
                                        <div className="space-y-1.5">
                                            <div className="flex items-center gap-2.5 flex-wrap">
                                                <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/95 text-zinc-700 border border-zinc-200/80 shadow-2xs">
                                                    {project.category}
                                                </span>
                                            </div>
                                            <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">
                                                {project.title}
                                            </h3>
                                            <p className={`text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal ${isWide ? 'max-w-2xl' : 'max-w-md'}`}>
                                                {project.description}
                                            </p>
                                        </div>

                                        <div className="shrink-0 self-start sm:self-auto">
                                            <a
                                                href={project.link}
                                                target={project.link.startsWith('http') ? '_blank' : '_self'}
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-zinc-900 text-zinc-800 hover:text-white text-xs font-semibold border border-zinc-200/80 shadow-2xs hover:shadow-xs transition-all duration-200 group/btn cursor-pointer"
                                            >
                                                <span>{project.buttonText}</span>
                                                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                            </a>
                                        </div>
                                    </div>

                                    {/* Framed Device / Showcase Container */}
                                    <a
                                        href={project.link}
                                        target={project.link.startsWith('http') ? '_blank' : '_self'}
                                        rel="noopener noreferrer"
                                        className={`relative block w-full rounded-2xl sm:rounded-[22px] overflow-hidden ${project.bgClass} border border-zinc-200/80 shadow-xs hover:shadow-md transition-all duration-300 group/img cursor-pointer ${
                                            isWide
                                                ? 'aspect-[16/8] sm:aspect-[21/9]'
                                                : isSmall
                                                    ? 'flex-1 min-h-[240px] sm:min-h-[280px] aspect-[16/10] sm:aspect-auto'
                                                    : 'aspect-[16/10] sm:aspect-[16/9.5]'
                                        }`}
                                    >
                                        <Image
                                            src={project.image}
                                            alt={`${project.title} showcase`}
                                            fill
                                            sizes={
                                                isWide
                                                    ? '(max-width: 1280px) 100vw, 1152px'
                                                    : isSmall
                                                        ? '(max-width: 1024px) 100vw, 500px'
                                                        : '(max-width: 1024px) 100vw, 700px'
                                            }
                                            className="object-cover object-top group-hover/img:scale-[1.018] transition-transform duration-500 ease-out"
                                        />

                                        {/* Hover Overlay Pill */}
                                        <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/5 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                                            <div className="opacity-0 group-hover/img:opacity-100 scale-95 group-hover/img:scale-100 transition-all duration-200 bg-white/95 backdrop-blur-md text-zinc-900 text-xs font-semibold px-4 py-2 rounded-full shadow-lg border border-zinc-200/80 flex items-center gap-1.5">
                                                <span>Open {project.title}</span>
                                                <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                                            </div>
                                        </div>
                                    </a>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── SECTION 8: FAQ SECTION ── */}
            <section id="faq" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#fafaf9] border-y border-zinc-200/80 flex flex-col items-center justify-center">
                <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
                    <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                        <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 text-center whitespace-nowrap">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-base sm:text-lg text-zinc-600 mt-3.5 max-w-xl mx-auto text-center leading-relaxed font-normal">
                            Clear answers to how we build websites, run ad campaigns, and deliver work.
                        </p>
                    </div>

                    <div className="w-full flex justify-center">
                        <Faq
                            items={faqItems}
                            accent="#2563eb"
                            avatar={
                                <Image
                                    src="/ak-logo-2.png"
                                    alt="AK Prints"
                                    width={40}
                                    height={40}
                                    className="w-full h-full object-contain"
                                />
                            }
                            className="w-full max-w-4xl mx-auto"
                        />
                    </div>
                </div>
            </section>

            {/* ── SECTION 9: GET IN TOUCH (Redesigned with Artwork Showcase) ── */}
            <CtaSection />

            {/* ── SECTION 10: DESIGN STUDIO FOOTER (Recreated from Reference) ── */}
            <footer className="pt-16 sm:pt-20 pb-6 px-6 sm:px-10 lg:px-12 bg-white overflow-hidden relative">
                <div className="max-w-6xl mx-auto space-y-12 sm:space-y-14">
                    {/* Top Row: Logo Only on Left (No AK Prints text), Social Media on Right with Bottom Border */}
                    <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-6 pb-8 border-b border-zinc-200/80">
                        {/* Top-Left: Logo Only */}
                        <a href="#" className="inline-block shrink-0">
                            <Image
                                src="/ak-logo-2.png"
                                alt="AK Prints"
                                width={130}
                                height={38}
                                className="h-8 sm:h-9 w-auto object-contain"
                            />
                        </a>

                        {/* Top-Right: Clean Official Brand Logos */}
                        <div className="flex items-center gap-4 sm:gap-5">
                            {/* X (Twitter) */}
                                <a
                                    href="https://twitter.com/theadroitdev"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center cursor-pointer"
                                    aria-label="X (Twitter)"
                                >
                                    <svg className="w-[20px] h-[20px] sm:w-[22px] sm:h-[22px] fill-zinc-900" viewBox="0 0 24 24">
                                        <path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z"/>
                                    </svg>
                                </a>

                                {/* Instagram (Colorful Gradient) */}
                                <a
                                    href="https://instagram.com"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center cursor-pointer"
                                    aria-label="Instagram"
                                >
                                    <svg className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px]" viewBox="0 0 24 24">
                                        <defs>
                                            <radialGradient id="footer-ig-grad" r="150%" cx="30%" cy="107%">
                                                <stop stopColor="#fdf497" offset="0%" />
                                                <stop stopColor="#fdf497" offset="5%" />
                                                <stop stopColor="#fd5949" offset="45%" />
                                                <stop stopColor="#d6249f" offset="60%" />
                                                <stop stopColor="#285AEB" offset="90%" />
                                            </radialGradient>
                                        </defs>
                                        <path fill="url(#footer-ig-grad)" d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/>
                                    </svg>
                                </a>

                                {/* LinkedIn (Official #0A66C2 Blue) */}
                                <a
                                    href="https://www.linkedin.com/in/shivam-verma-079780312/6"
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center cursor-pointer"
                                    aria-label="LinkedIn"
                                >
                                    <svg className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] fill-[#0A66C2]" viewBox="0 0 24 24">
                                        <path d="M19 3a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h14m-.5 15.5v-5.3a3.26 3.26 0 0 0-3.26-3.26c-.85 0-1.84.52-2.28 1.3v-1.11h-2.79v8.37h2.79v-4.93c0-.77.62-1.4 1.39-1.4a1.4 1.4 0 0 1 1.4 1.4v4.93h2.75M6.46 8.76a1.6 1.6 0 1 0-.01-3.2 1.6 1.6 0 0 0 .01 3.2m1.4 9.74v-8.37H5.06v8.37h2.8z"/>
                                    </svg>
                                </a>

                                {/* WhatsApp (Official #25D366 Green) */}
                                <a
                                    href={waLink}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="inline-flex items-center justify-center cursor-pointer"
                                    aria-label="WhatsApp"
                                >
                                    <svg className="w-[22px] h-[22px] sm:w-[24px] sm:h-[24px] fill-[#25D366]" viewBox="0 0 24 24">
                                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-.999 3.648 3.742-.981zm11.387-5.464c-.074-.124-.272-.198-.57-.347-.297-.149-1.758-.868-2.031-.967-.272-.099-.47-.149-.669.149-.198.297-.768.967-.941 1.165-.173.198-.347.223-.644.074-.297-.149-1.255-.462-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.297-.347.446-.521.151-.172.2-.296.3-.495.099-.198.05-.372-.025-.521-.075-.148-.669-1.611-.916-2.206-.242-.579-.487-.501-.669-.51l-.57-.01c-.198 0-.52.074-.792.372s-1.04 1.016-1.04 2.479 1.065 2.876 1.213 3.074c.149.198 2.095 3.2 5.076 4.487.709.306 1.263.489 1.694.626.712.226 1.36.194 1.872.118.571-.085 1.758-.719 2.006-1.413.248-.695.248-1.29.173-1.414z"/>
                                    </svg>
                                </a>
                        </div>
                    </div>

                    {/* Middle Row: "Reach out to us" + 3 Navigation Columns (Features, Explore, Help) */}
                    <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-8 items-start">
                        {/* Left: Reach out to us card (Green WhatsApp style) */}
                        <div className="lg:col-span-5 space-y-3.5">
                            <span className="text-sm font-semibold text-zinc-900 block tracking-tight">
                                Reach out to us
                            </span>
                            <a
                                href={waLink}
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
                                    <span className="text-[12px] text-zinc-500 block mt-0.5 font-normal">
                                        Our team will reply within 30 mins
                                    </span>
                                </div>
                            </a>
                        </div>

                        {/* Right: 3 Navigation Columns (Features, Explore, Help) */}
                        <div className="lg:col-span-7 grid grid-cols-2 sm:grid-cols-3 gap-8 sm:gap-10 text-xs sm:text-[13px]">
                            {/* Col 1: Features */}
                            <div className="space-y-3.5">
                                <span className="font-semibold text-zinc-900 block text-sm">Features</span>
                                <ul className="space-y-2.5 text-zinc-600">
                                    <li><a href="#services" className="hover:text-zinc-950 transition-colors">Custom Web Apps</a></li>
                                    <li><a href="#services" className="hover:text-zinc-950 transition-colors">E-Commerce Stores</a></li>
                                    <li><a href="#services" className="hover:text-zinc-950 transition-colors">Performance Paid Ads</a></li>
                                    <li><a href="#services" className="hover:text-zinc-950 transition-colors">Custom Packaging</a></li>
                                    <li><a href="#services" className="hover:text-zinc-950 transition-colors">3D LED Signs</a></li>
                                </ul>
                            </div>

                            {/* Col 2: Explore */}
                            <div className="space-y-3.5">
                                <span className="font-semibold text-zinc-900 block text-sm">Explore</span>
                                <ul className="space-y-2.5 text-zinc-600">
                                    <li><a href="#projects" className="hover:text-zinc-950 transition-colors">Delivered Projects</a></li>
                                    <li><a href="#comparison" className="hover:text-zinc-950 transition-colors">Why Ak Prints</a></li>
                                    <li><a href="#contact" className="hover:text-zinc-950 transition-colors">Pricing & Sprints</a></li>
                                    <li><a href="#services" className="hover:text-zinc-950 transition-colors">Marketing Strategy</a></li>
                                </ul>
                            </div>

                            {/* Col 3: Help */}
                            <div className="space-y-3.5">
                                <span className="font-semibold text-zinc-900 block text-sm">Help</span>
                                <ul className="space-y-2.5 text-zinc-600">
                                    <li><a href="#faq" className="hover:text-zinc-950 transition-colors">FAQs</a></li>
                                    <li><a href="mailto:akprintsdev@gmail.com" className="hover:text-zinc-950 transition-colors">Email Support</a></li>
                                    <li><a href="#contact" className="hover:text-zinc-950 transition-colors">Help Centre</a></li>
                                    <li><a href="#contact" className="hover:text-zinc-950 transition-colors">Book a Call</a></li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    {/* Giant Faint Brand Watermark (Matches reference photo with vertical fade and no horizontal clipping) */}
                    <div className="pt-10 sm:pt-16 pb-2 flex justify-center items-center select-none pointer-events-none w-full">
                        <span className="text-[clamp(3.5rem,11.5vw,11.5rem)] font-bold tracking-tight text-center leading-none whitespace-nowrap bg-gradient-to-b from-zinc-300/80 via-zinc-200/35 to-transparent bg-clip-text text-transparent px-2">
                            AK Prints
                        </span>
                    </div>

                    {/* Bottom Bar: Copyright on Left, Legal Links on Right */}
                    <div className="pt-6 pb-2 border-t border-zinc-200/70 flex flex-col sm:flex-row items-center justify-between gap-4 text-xs sm:text-[13px] text-zinc-500">
                        <p>
                            &copy; {new Date().getFullYear()} AK Prints. All rights reserved.
                        </p>
                        <div className="flex items-center gap-6 sm:gap-8 font-normal text-zinc-500">
                            <a href="#contact" className="hover:text-zinc-950 transition-colors">Terms of Service</a>
                            <a href="#contact" className="hover:text-zinc-950 transition-colors">Privacy Policy</a>
                            <a href="#contact" className="hover:text-zinc-950 transition-colors">Cookie Policy</a>
                        </div>
                    </div>
                </div>
            </footer>
        </div>
    )
}
