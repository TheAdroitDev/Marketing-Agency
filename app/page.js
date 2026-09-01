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
        clientType: 'Online Store & Consultation Platform',
        logo: '/images/vm.png',
        image: '/images/project-vastu-showcase.jpg',
        description: 'A complete Vastu consultation and product shopping website. Customers can book consultations, pay online via Razorpay, and track shipments through Shiprocket.',
        results: [
            { label: 'Sales Growth', val: '+240%' },
            { label: 'Server Latency', val: '94ms' },
            { label: 'Automated Bookings', val: '14,000+' }
        ],
        tech: ['Next.js', 'MongoDB', 'Razorpay', 'Shiprocket', 'Tailwind CSS'],
        link: 'https://vastumentor.com'
    },
    {
        id: 2,
        title: 'MuskySnax',
        clientType: 'Gourmet Food Brand',
        logo: '/images/musky.webp',
        image: '/images/project-musky-showcase.jpg',
        description: 'A premium snack delivery website. Customers place orders with instant checkout, get real-time delivery notifications via email, and the brand manages operations from one dashboard.',
        results: [
            { label: 'First Month Orders', val: '2,800+' },
            { label: 'Mobile Conversion', val: '4.8%' },
            { label: 'Lighthouse Score', val: '99/100' }
        ],
        tech: ['Next.js App Router', 'Tailwind CSS', 'Framer Motion', 'Cloudflare Edge'],
        link: 'https://muskysnax.in'
    },
    {
        id: 3,
        title: 'Multi-Channel Ad Scaling',
        clientType: 'Performance Advertising Engine',
        image: '/images/ads-performance-dashboard.jpg',
        description: 'We ran high-converting video and search ad campaigns on Instagram, YouTube, and Google with custom creative hooks and server-side tracking.',
        results: [
            { label: 'Average ROAS', val: '6.2x' },
            { label: 'Tracked Spend', val: '$420k+' },
            { label: 'Acquisition Cost', val: '-32%' }
        ],
        tech: ['Meta Ads Manager', 'Google Search Ads', 'YouTube In-Stream', 'GA4 Analytics'],
        link: '#contact'
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

const faqs = [
    {
        q: 'How fast can you build and launch our website?',
        a: 'Most bespoke websites and online stores are delivered within 2 to 4 weeks. For custom web applications, we work in clear weekly sprints with working previews.'
    },
    {
        q: 'How does your ad campaign service work?',
        a: 'We write the ad scripts, design the visual creatives, set up audience targeting on Instagram, Google, and YouTube, and optimize your budget daily to maximize return on ad spend.'
    },
    {
        q: 'Do I get full ownership of my website and code?',
        a: 'Yes, 100%. You own all source code, domain assets, ad accounts, and design files. We never lock you into proprietary platforms.'
    },
    {
        q: 'How do we communicate during the project?',
        a: 'We create a dedicated Slack or WhatsApp channel with your team for quick daily updates, accompanied by live milestone reviews.'
    },
    {
        q: 'What are your print and signboard turnaround times?',
        a: 'Business cards and corporate stationery are dispatched within 2 to 4 business days. Custom 3D acrylic and LED glow signboards are manufactured and shipped/installed within 5 to 7 days.'
    }
]

// ── MAIN COMPONENT ────────────────────────────────────
export default function Home() {
    const [openFaq, setOpenFaq] = useState(null)
    const [estimatorPlan, setEstimatorPlan] = useState('website')
    const [estimatorBudget, setEstimatorBudget] = useState('standard')
    const [estimatorStep, setEstimatorStep] = useState(1)
    const [mobileMenuOpen, setMobileMenuOpen] = useState(false)

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
                    className="max-w-6xl mx-auto rounded-[22px] bg-white/75 backdrop-blur-2xl backdrop-saturate-[190%] border border-white/85 shadow-[0_12px_40px_rgba(0,0,0,0.1),0_1px_2px_rgba(0,0,0,0.04),inset_0_1px_1.5px_rgba(255,255,255,0.95)] px-4 sm:px-6 py-2.5 flex justify-between items-center pointer-events-auto transition-all duration-300"
                >
                    {/* Brand Logo */}
                    <a href="#" className="flex items-center gap-2.5 group shrink-0">
                        <div className="w-8.5 h-8.5 sm:w-9 sm:h-9 rounded-full bg-blue-600 flex items-center justify-center text-white font-extrabold text-[14px] sm:text-[15px] shadow-[0_2px_8px_rgba(37,99,235,0.35),inset_0_1px_1px_rgba(255,255,255,0.4)] group-hover:scale-105 transition-transform">
                            ak
                        </div>
                        <span className="text-[17px] sm:text-[19px] font-extrabold tracking-tight text-zinc-900">
                            akprints<span className="text-blue-600">.</span>
                        </span>
                    </a>

                    {/* Desktop Nav Links with Simple, Clear Dropdowns */}
                    <div className="hidden lg:flex items-center gap-1 xl:gap-1.5">
                        {/* 1. Web Dropdown */}
                        <div className="relative group">
                            <button
                                className="flex items-center gap-1 px-3 py-1.5 rounded-full text-[16px] font-semibold text-zinc-600 group-hover:text-zinc-950 transition-colors cursor-pointer"
                            >
                                <span>Web</span>
                                <ChevronDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-700 transition-transform duration-200 group-hover:rotate-180" />
                            </button>

                            {/* Dropdown Menu Box */}
                            <div className="absolute top-full left-0 pt-2.5 w-80 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
                                <div className="p-3.5 rounded-2xl bg-white border border-zinc-200/90 shadow-[0_20px_45px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.04)] space-y-1.5">
                                    <a
                                        href="#websites"
                                        className="block px-4 py-3 rounded-xl hover:bg-zinc-50 transition-colors group/item"
                                    >
                                        <span className="text-[15px] font-bold text-zinc-900 block leading-tight group-hover/item:text-blue-600 transition-colors">
                                            E-commerce Stores
                                        </span>
                                        <span className="text-[14px] text-zinc-600 block mt-1">
                                            Online shops with secure payments
                                        </span>
                                    </a>
                                    
                                    <a
                                        href="#websites"
                                        className="block px-4 py-3 rounded-xl hover:bg-zinc-50 transition-colors group/item"
                                    >
                                        <span className="text-[15px] font-bold text-zinc-900 block leading-tight group-hover/item:text-blue-600 transition-colors">
                                            Business Websites
                                        </span>
                                        <span className="text-[14px] text-zinc-600 block mt-1">
                                            Fast, modern websites for companies
                                        </span>
                                    </a>

                                    <a
                                        href="#websites"
                                        className="block px-4 py-3 rounded-xl hover:bg-zinc-50 transition-colors group/item"
                                    >
                                        <span className="text-[15px] font-bold text-zinc-900 block leading-tight group-hover/item:text-blue-600 transition-colors">
                                            Web Apps & Portals
                                        </span>
                                        <span className="text-[14px] text-zinc-600 block mt-1">
                                            Custom portals, software & dashboards
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 2. Marketing Dropdown */}
                        <div className="relative group">
                            <button
                                className="flex items-center gap-1 px-3 py-1.5 rounded-full text-[16px] font-semibold text-zinc-600 group-hover:text-zinc-950 transition-colors cursor-pointer"
                            >
                                <span>Marketing</span>
                                <ChevronDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-700 transition-transform duration-200 group-hover:rotate-180" />
                            </button>

                            {/* Dropdown Menu Box */}
                            <div className="absolute top-full left-0 pt-2.5 w-80 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
                                <div className="p-3.5 rounded-2xl bg-white border border-zinc-200/90 shadow-[0_20px_45px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.04)] space-y-1.5">
                                    <a
                                        href="#ads"
                                        className="block px-4 py-3 rounded-xl hover:bg-zinc-50 transition-colors group/item"
                                    >
                                        <span className="text-[15px] font-bold text-zinc-900 block leading-tight group-hover/item:text-blue-600 transition-colors">
                                            Paid Ads Management
                                        </span>
                                        <span className="text-[14px] text-zinc-600 block mt-1">
                                            Instagram, Google & YouTube campaigns
                                        </span>
                                    </a>

                                    <a
                                        href="#services"
                                        className="block px-4 py-3 rounded-xl hover:bg-zinc-50 transition-colors group/item"
                                    >
                                        <span className="text-[15px] font-bold text-zinc-900 block leading-tight group-hover/item:text-blue-600 transition-colors">
                                            SEO & Google Search
                                        </span>
                                        <span className="text-[14px] text-zinc-600 block mt-1">
                                            Get your website on top of search results
                                        </span>
                                    </a>

                                    <a
                                        href="#services"
                                        className="block px-4 py-3 rounded-xl hover:bg-zinc-50 transition-colors group/item"
                                    >
                                        <span className="text-[15px] font-bold text-zinc-900 block leading-tight group-hover/item:text-blue-600 transition-colors">
                                            Sales & Growth Funnels
                                        </span>
                                        <span className="text-[14px] text-zinc-600 block mt-1">
                                            Turn website visitors into paying buyers
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 3. Design Dropdown */}
                        <div className="relative group">
                            <button
                                className="flex items-center gap-1 px-3 py-1.5 rounded-full text-[16px] font-semibold text-zinc-600 group-hover:text-zinc-950 transition-colors cursor-pointer"
                            >
                                <span>Design</span>
                                <ChevronDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-700 transition-transform duration-200 group-hover:rotate-180" />
                            </button>

                            {/* Dropdown Menu Box */}
                            <div className="absolute top-full left-0 pt-2.5 w-80 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
                                <div className="p-3.5 rounded-2xl bg-white border border-zinc-200/90 shadow-[0_20px_45px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.04)] space-y-1.5">
                                    <a
                                        href="#start-project"
                                        className="block px-4 py-3 rounded-xl hover:bg-zinc-50 transition-colors group/item"
                                    >
                                        <span className="text-[15px] font-bold text-zinc-900 block leading-tight group-hover/item:text-blue-600 transition-colors">
                                            Logo & Brand Identity
                                        </span>
                                        <span className="text-[14px] text-zinc-600 block mt-1">
                                            Logos, colors & full brand styleguides
                                        </span>
                                    </a>

                                    <a
                                        href="#start-project"
                                        className="block px-4 py-3 rounded-xl hover:bg-zinc-50 transition-colors group/item"
                                    >
                                        <span className="text-[15px] font-bold text-zinc-900 block leading-tight group-hover/item:text-blue-600 transition-colors">
                                            Graphic & Ad Creatives
                                        </span>
                                        <span className="text-[14px] text-zinc-600 block mt-1">
                                            Posters, social media graphics & promo banners
                                        </span>
                                    </a>

                                    <a
                                        href="#start-project"
                                        className="block px-4 py-3 rounded-xl hover:bg-zinc-50 transition-colors group/item"
                                    >
                                        <span className="text-[15px] font-bold text-zinc-900 block leading-tight group-hover/item:text-blue-600 transition-colors">
                                            UI/UX Website Design
                                        </span>
                                        <span className="text-[14px] text-zinc-600 block mt-1">
                                            Clean, simple & modern interface layouts
                                        </span>
                                    </a>
                                </div>
                            </div>
                        </div>

                        {/* 4. Print Dropdown */}
                        <div className="relative group">
                            <button
                                className="flex items-center gap-1 px-3 py-1.5 rounded-full text-[16px] font-semibold text-zinc-600 group-hover:text-zinc-950 transition-colors cursor-pointer"
                            >
                                <span>Print</span>
                                <ChevronDown className="w-3.5 h-3.5 text-zinc-400 group-hover:text-zinc-700 transition-transform duration-200 group-hover:rotate-180" />
                            </button>

                            {/* Dropdown Menu Box */}
                            <div className="absolute top-full left-0 pt-2.5 w-80 opacity-0 translate-y-2 pointer-events-none group-hover:opacity-100 group-hover:translate-y-0 group-hover:pointer-events-auto transition-all duration-200 ease-out z-50">
                                <div className="p-3.5 rounded-2xl bg-white border border-zinc-200/90 shadow-[0_20px_45px_rgba(0,0,0,0.1),0_2px_6px_rgba(0,0,0,0.04)] space-y-1.5">
                                    <a
                                        href="#printing"
                                        className="block px-4 py-3 rounded-xl hover:bg-zinc-50 transition-colors group/item"
                                    >
                                        <span className="text-[15px] font-bold text-zinc-900 block leading-tight group-hover/item:text-blue-600 transition-colors">
                                            Visiting Cards & Stationery
                                        </span>
                                        <span className="text-[14px] text-zinc-600 block mt-1">
                                            Luxury cards, letterheads & envelopes
                                        </span>
                                    </a>

                                    <a
                                        href="#printing"
                                        className="block px-4 py-3 rounded-xl hover:bg-zinc-50 transition-colors group/item"
                                    >
                                        <span className="text-[15px] font-bold text-zinc-900 block leading-tight group-hover/item:text-blue-600 transition-colors">
                                            Shop Signboards & 3D Letters
                                        </span>
                                        <span className="text-[14px] text-zinc-600 block mt-1">
                                            LED glow boards & office reception signs
                                        </span>
                                    </a>

                                    <a
                                        href="#printing"
                                        className="block px-4 py-3 rounded-xl hover:bg-zinc-50 transition-colors group/item"
                                    >
                                        <span className="text-[15px] font-bold text-zinc-900 block leading-tight group-hover/item:text-blue-600 transition-colors">
                                            Banners, Standees & Packaging
                                        </span>
                                        <span className="text-[14px] text-zinc-600 block mt-1">
                                            Event standees, vinyl decals & custom boxes
                                        </span>
                                    </a>
                                </div>
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
                            className="max-w-5xl mx-auto mt-2 rounded-[22px] bg-white border border-zinc-200/90 shadow-[0_20px_50px_rgba(0,0,0,0.15)] p-5 sm:p-6 pointer-events-auto lg:hidden overflow-hidden max-h-[82vh] overflow-y-auto"
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
                                            className="block px-3.5 py-3 rounded-xl hover:bg-zinc-50 transition-colors"
                                        >
                                            <span className="text-[15px] font-bold text-zinc-800 block">Business Websites</span>
                                            <span className="text-[14px] text-zinc-600 block font-normal mt-0.5">Fast, modern websites for companies</span>
                                        </a>
                                        <a
                                            href="#websites"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block px-3.5 py-3 rounded-xl hover:bg-zinc-50 transition-colors"
                                        >
                                            <span className="text-[15px] font-bold text-zinc-800 block">Online Stores</span>
                                            <span className="text-[14px] text-zinc-600 block font-normal mt-0.5">E-commerce shops with online checkout</span>
                                        </a>
                                        <a
                                            href="#websites"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block px-3.5 py-3 rounded-xl hover:bg-zinc-50 transition-colors"
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
                                            className="block px-3.5 py-3 rounded-xl hover:bg-zinc-50 transition-colors"
                                        >
                                            <span className="text-[15px] font-bold text-zinc-800 block">Paid Ads Management</span>
                                            <span className="text-[14px] text-zinc-600 block font-normal mt-0.5">Instagram, Google & YouTube campaigns</span>
                                        </a>
                                        <a
                                            href="#services"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block px-3.5 py-3 rounded-xl hover:bg-zinc-50 transition-colors"
                                        >
                                            <span className="text-[15px] font-bold text-zinc-800 block">SEO & Google Search</span>
                                            <span className="text-[14px] text-zinc-600 block font-normal mt-0.5">Get on top of Google search results</span>
                                        </a>
                                        <a
                                            href="#services"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block px-3.5 py-3 rounded-xl hover:bg-zinc-50 transition-colors"
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
                                            className="block px-3.5 py-3 rounded-xl hover:bg-zinc-50 transition-colors"
                                        >
                                            <span className="text-[15px] font-bold text-zinc-800 block">Logo & Brand Identity</span>
                                            <span className="text-[14px] text-zinc-600 block font-normal mt-0.5">Logos, color palettes & styleguides</span>
                                        </a>
                                        <a
                                            href="#start-project"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block px-3.5 py-3 rounded-xl hover:bg-zinc-50 transition-colors"
                                        >
                                            <span className="text-[15px] font-bold text-zinc-800 block">Graphic & Ad Creatives</span>
                                            <span className="text-[14px] text-zinc-600 block font-normal mt-0.5">Posters, social creatives & banners</span>
                                        </a>
                                        <a
                                            href="#start-project"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block px-3.5 py-3 rounded-xl hover:bg-zinc-50 transition-colors"
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
                                            className="block px-3.5 py-3 rounded-xl hover:bg-zinc-50 transition-colors"
                                        >
                                            <span className="text-[15px] font-bold text-zinc-800 block">Visiting Cards & Stationery</span>
                                            <span className="text-[14px] text-zinc-600 block font-normal mt-0.5">Luxury cards, letterheads & envelopes</span>
                                        </a>
                                        <a
                                            href="#printing"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block px-3.5 py-3 rounded-xl hover:bg-zinc-50 transition-colors"
                                        >
                                            <span className="text-[15px] font-bold text-zinc-800 block">Shop Signboards & 3D Letters</span>
                                            <span className="text-[14px] text-zinc-600 block font-normal mt-0.5">LED glow signs & office reception signs</span>
                                        </a>
                                        <a
                                            href="#printing"
                                            onClick={() => setMobileMenuOpen(false)}
                                            className="block px-3.5 py-3 rounded-xl hover:bg-zinc-50 transition-colors"
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

            {/* ── SECTION 1: EVERYTHING YOUR BUSINESS NEEDS TO GROW ONLINE (Image 1 Style) ── */}
            <section id="services" className="py-24 sm:py-32 px-6">
                <div className="max-w-6xl mx-auto">
                    {/* Header with Heading Left + Description Right (Inspired by Image 1) */}
                    <div className="flex flex-col lg:flex-row lg:items-start lg:justify-between gap-6 mb-16">
                        <div className="max-w-lg">
                            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 leading-[1.15]">
                                Everything your business needs <span className="font-serif font-normal text-blue-600">to grow online.</span>
                            </h2>
                        </div>
                        <div className="max-w-md lg:pt-2">
                            <p className="text-[16px] sm:text-[17px] text-zinc-600 leading-relaxed">
                                We partner with founders and marketing teams to engineer fast websites, high-converting stores, and profitable ad campaigns with total transparency.
                            </p>
                        </div>
                    </div>

                    {/* 3 Soothing Clean Cards (Image 1 reference layout) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                        {/* Card 1: Websites & Online Stores */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            custom={0.1}
                            className="group rounded-3xl bg-[#fbfbfa] border border-zinc-200/80 p-7 flex flex-col justify-between hover:shadow-lg hover:border-zinc-300 transition-all duration-300 min-h-[380px]"
                        >
                            {/* Visual UI Box */}
                            <div className="w-full h-44 rounded-2xl bg-white border border-zinc-200/60 p-4 flex flex-col justify-between shadow-xs relative overflow-hidden group-hover:scale-[1.02] transition-transform">
                                <div className="flex items-center justify-between text-xs border-b border-zinc-100 pb-2.5">
                                    <div className="flex items-center gap-1.5 font-bold text-zinc-800">
                                        <Code2 className="w-3.5 h-3.5 text-blue-600" />
                                        <span>Storefront Engine</span>
                                    </div>
                                    <span className="text-[11px] font-semibold text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md">85ms Edge</span>
                                </div>
                                <div className="space-y-2 py-2">
                                    <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-zinc-50 border border-zinc-100">
                                        <span className="font-medium text-zinc-700">One-Click Checkout</span>
                                        <span className="text-[11px] text-zinc-500 font-bold">Razorpay / Stripe</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-zinc-50 border border-zinc-100">
                                        <span className="font-medium text-zinc-700">Mobile Speed</span>
                                        <span className="text-[11px] text-emerald-600 font-bold">100/100 Core Vitals</span>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-600">Next.js 16</span>
                                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-600">Shopify</span>
                                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-600">Tailwind</span>
                                </div>
                            </div>

                            {/* Card Info Bottom */}
                            <div className="mt-6 flex items-center justify-between pt-2">
                                <div>
                                    <h3 className="text-xl font-bold text-zinc-900 tracking-tight pr-4">
                                        Websites & Online Stores
                                    </h3>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 shrink-0 ml-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Plus className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 2: Performance Ads */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            custom={0.2}
                            className="group rounded-3xl bg-[#fbfbfa] border border-zinc-200/80 p-7 flex flex-col justify-between hover:shadow-lg hover:border-zinc-300 transition-all duration-300 min-h-[380px]"
                        >
                            {/* Visual UI Box */}
                            <div className="w-full h-44 rounded-2xl bg-white border border-zinc-200/60 p-4 flex flex-col justify-between shadow-xs relative overflow-hidden group-hover:scale-[1.02] transition-transform">
                                <div className="flex items-center justify-between text-xs border-b border-zinc-100 pb-2.5">
                                    <div className="flex items-center gap-1.5 font-bold text-zinc-800">
                                        <Target className="w-3.5 h-3.5 text-blue-600" />
                                        <span>Campaign Planner</span>
                                    </div>
                                    <span className="text-[11px] font-semibold text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md">ROAS: 5.8x</span>
                                </div>
                                <div className="space-y-2 py-2">
                                    <div className="flex items-center gap-2 text-xs text-zinc-700">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                        <span>Instagram Reels & Video Creatives</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-zinc-700">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                        <span>Google Search Exact-Match Intent</span>
                                    </div>
                                    <div className="flex items-center gap-2 text-xs text-zinc-700">
                                        <div className="w-2 h-2 rounded-full bg-emerald-500" />
                                        <span>YouTube In-Stream Video Ads</span>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700">Meta CAPI</span>
                                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-blue-50 text-blue-700">Google Ads</span>
                                </div>
                            </div>

                            {/* Card Info Bottom */}
                            <div className="mt-6 flex items-center justify-between pt-2">
                                <div>
                                    <h3 className="text-xl font-bold text-zinc-900 tracking-tight pr-4">
                                        Targeted Ad Campaigns
                                    </h3>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 shrink-0 ml-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Plus className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>

                        {/* Card 3: SEO & Conversion Optimization */}
                        <motion.div
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true }}
                            variants={fadeIn}
                            custom={0.3}
                            className="group rounded-3xl bg-[#fbfbfa] border border-zinc-200/80 p-7 flex flex-col justify-between hover:shadow-lg hover:border-zinc-300 transition-all duration-300 min-h-[380px]"
                        >
                            {/* Visual UI Box */}
                            <div className="w-full h-44 rounded-2xl bg-white border border-zinc-200/60 p-4 flex flex-col justify-between shadow-xs relative overflow-hidden group-hover:scale-[1.02] transition-transform">
                                <div className="flex items-center justify-between text-xs border-b border-zinc-100 pb-2.5">
                                    <div className="flex items-center gap-1.5 font-bold text-zinc-800">
                                        <Shield className="w-3.5 h-3.5 text-emerald-600" />
                                        <span>Growth & SEO Engine</span>
                                    </div>
                                    <span className="text-[11px] font-semibold text-emerald-700 bg-emerald-50 px-2 py-0.5 rounded-md">Page 1 Rank</span>
                                </div>
                                <div className="space-y-2 py-2">
                                    <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-zinc-50 border border-zinc-100">
                                        <span className="font-medium text-zinc-700">Conversion Rate</span>
                                        <span className="text-[11px] text-emerald-600 font-bold">+38% Lift</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs p-2 rounded-lg bg-zinc-50 border border-zinc-100">
                                        <span className="font-medium text-zinc-700">Search Keywords</span>
                                        <span className="text-[11px] text-blue-600 font-bold">Top Positions</span>
                                    </div>
                                </div>
                                <div className="flex gap-2">
                                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-600">Schema SEO</span>
                                    <span className="text-[10px] font-semibold px-2 py-0.5 rounded-md bg-zinc-100 text-zinc-600">CRO Funnels</span>
                                </div>
                            </div>

                            {/* Card Info Bottom */}
                            <div className="mt-6 flex items-center justify-between pt-2">
                                <div>
                                    <h3 className="text-xl font-bold text-zinc-900 tracking-tight pr-4">
                                        Conversion & SEO Growth
                                    </h3>
                                </div>
                                <div className="w-8 h-8 rounded-full bg-white border border-zinc-200 flex items-center justify-center text-zinc-700 shrink-0 ml-3 group-hover:bg-blue-600 group-hover:text-white transition-colors">
                                    <Plus className="w-4 h-4" />
                                </div>
                            </div>
                        </motion.div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 2: WEBSITES WE BUILD ── */}
            <section id="websites" className="py-24 sm:py-32 px-6 bg-[#f4f4f2]/70 border-y border-zinc-200/80 relative">
                <BackgroundRippleEffect />
                <div className="relative z-10 max-w-6xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight">
                            Tell us what you need. <span className="font-serif font-normal text-blue-600">We will build it.</span>
                        </h2>
                        <p className="mt-5 text-lg sm:text-[20px] text-zinc-600 leading-relaxed font-normal">
                            From global high-volume e-commerce flagships to complex cloud SaaS portals, we build digital infrastructure tailored to your exact business requirements.
                        </p>
                    </div>

                    {/* 6 Clean Website Types Cards (Larger, no icons) */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {websiteTypes.map((type, idx) => (
                            <motion.div
                                key={type.name}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                                custom={idx * 0.07}
                                className="group relative rounded-3xl bg-white border border-zinc-200/90 p-8 sm:p-10 flex flex-col justify-start hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight group-hover:text-blue-600 transition-colors">
                                    {type.name}
                                </h3>
                                <p className="text-base sm:text-lg text-zinc-600 leading-relaxed mt-4">
                                    {type.desc}
                                </p>

                                <div className="mt-6 pt-5 border-t border-zinc-100 space-y-2">
                                    {type.deliverables.map((deliv, dIdx) => (
                                        <div key={dIdx} className="flex items-center gap-3 text-sm font-medium text-zinc-600">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                            <span>{deliv}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 3: COMPARISON (Image 2 Style - akprints vs Others) ── */}
            <section id="comparison" className="py-24 sm:py-32 px-6 bg-white">
                <div className="max-w-5xl mx-auto">
                    {/* Header */}
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-zinc-100 border border-zinc-200 text-xs font-bold text-zinc-700 uppercase tracking-wider mb-4">
                            akprints vs Others
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-medium tracking-tight text-zinc-900 leading-tight">
                            Why akprints Beats <AuroraText className="font-serif font-normal">Every Competitor</AuroraText>
                        </h2>
                        <p className="text-lg text-zinc-600 mt-4 leading-relaxed">
                            Direct senior engineer craft with zero agency fluff, built for brands that want results.
                        </p>
                    </div>

                    {/* Comparison Table Card (Image 2 style) */}
                    <div className="rounded-3xl border border-zinc-200/90 bg-white shadow-xl overflow-hidden">
                        {/* Table Header */}
                        <div className="grid grid-cols-12 border-b border-zinc-200/80 bg-zinc-50/70 text-sm font-bold uppercase tracking-wider text-zinc-500">
                            <div className="col-span-6 p-5 sm:p-6 text-zinc-800">Features & Standards</div>
                            <div className="col-span-3 p-5 sm:p-6 text-center border-x border-zinc-200/80">Traditional Agencies</div>
                            <div className="col-span-3 p-5 sm:p-6 text-center bg-blue-600 text-white font-extrabold">akprints</div>
                        </div>

                        {/* Rows */}
                        <div className="divide-y divide-zinc-100">
                            {comparisonFeatures.map((row, i) => (
                                <div key={i} className="grid grid-cols-12 items-center hover:bg-zinc-50/50 transition-colors">
                                    <div className="col-span-6 p-4 sm:p-5 text-base sm:text-lg font-semibold text-zinc-800 flex items-center gap-3">
                                        <CheckCircle2 className="w-5 h-5 text-blue-600 shrink-0 hidden sm:block" />
                                        <span>{row.name}</span>
                                    </div>
                                    <div className="col-span-3 p-4 sm:p-5 text-center border-x border-zinc-100">
                                        {row.others ? (
                                            <Check className="w-5 h-5 text-zinc-500 mx-auto" />
                                        ) : (
                                            <X className="w-5 h-5 text-zinc-300 mx-auto" />
                                        )}
                                    </div>
                                    <div className="col-span-3 p-4 sm:p-5 text-center bg-blue-50/40">
                                        <div className="w-6 h-6 rounded-full bg-blue-600 text-white flex items-center justify-center mx-auto shadow-xs">
                                            <Check className="w-3.5 h-3.5 stroke-[3]" />
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* Feature Badges Cloud (Image 2 style) */}
                    <div className="flex flex-wrap items-center justify-center gap-2.5 mt-10">
                        {comparisonPills.map((pill, i) => (
                            <span key={i} className="px-4 py-2 rounded-full bg-zinc-100/90 border border-zinc-200 text-xs font-semibold text-zinc-700">
                                {pill}
                            </span>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 4: WE RUN YOUR ADS (Image 3 Style) ── */}
            <section id="ads" className="py-24 sm:py-32 px-6 bg-[#f4f4f2]/70 border-y border-zinc-200/80">
                <div className="max-w-6xl mx-auto">
                    {/* Header */}
                    <div className="max-w-3xl mb-16">
                        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 leading-[1.15]">
                            We put your brand in front <span className="font-serif font-normal text-blue-600">of the right people</span>.
                        </h2>
                        <p className="mt-4 text-[16px] text-zinc-600 leading-relaxed">
                            We write, design, and run targeted ad campaigns on Instagram, YouTube, and Google Search so your business reaches customers ready to buy.
                        </p>
                    </div>

                    {/* 3 Visual Cards (Image 3 layout) */}
                    <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
                        {/* Card 1: Find the right audience */}
                        <div className="flex flex-col justify-between">
                            <div className="h-64 rounded-3xl bg-linear-to-b from-amber-50 to-orange-50 border border-amber-200/60 p-6 flex flex-col justify-center items-center shadow-xs">
                                <div className="w-full max-w-xs rounded-2xl bg-white p-4 border border-amber-100 shadow-md space-y-3">
                                    <div className="flex items-center justify-between text-xs font-bold text-zinc-800 border-b border-zinc-100 pb-2">
                                        <span>Target Audience</span>
                                        <span className="text-[11px] text-emerald-600 bg-emerald-50 px-2 py-0.5 rounded-md font-semibold">High Intent</span>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                                            IG
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold text-zinc-900 block">Reels & Stories Buyers</span>
                                            <span className="text-[11px] text-zinc-500 block">Lookalike 1% Active Shoppers</span>
                                        </div>
                                    </div>
                                    <div className="flex items-center gap-3">
                                        <div className="w-8 h-8 rounded-full bg-red-100 text-red-700 flex items-center justify-center font-bold text-xs">
                                            YT
                                        </div>
                                        <div>
                                            <span className="text-xs font-bold text-zinc-900 block">In-Stream Video Intent</span>
                                            <span className="text-[11px] text-zinc-500 block">Competitor Viewers</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="text-lg font-bold text-zinc-900 tracking-tight">Find the right audience</h3>
                                <p className="text-[14px] text-zinc-600 leading-relaxed mt-1.5">
                                    We build high-intent audience segments on Instagram, Google Search, and YouTube so your ad budget reaches ready buyers.
                                </p>
                            </div>
                        </div>

                        {/* Card 2: Creatives that convert */}
                        <div className="flex flex-col justify-between">
                            <div className="h-64 rounded-3xl overflow-hidden relative shadow-xs border border-zinc-200/80">
                                <Image
                                    src="/images/agency-team-craft.jpg"
                                    alt="akprints creative ad production team"
                                    fill
                                    className="object-cover"
                                />
                                <div className="absolute inset-0 bg-linear-to-t from-zinc-900/60 to-transparent" />
                                <div className="absolute bottom-4 left-4 right-4 text-white text-xs font-semibold">
                                    <span className="bg-white/20 backdrop-blur-md px-3 py-1 rounded-full">
                                        High-Hook Video Scripts
                                    </span>
                                </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="text-lg font-bold text-zinc-900 tracking-tight">Creatives that convert</h3>
                                <p className="text-[14px] text-zinc-600 leading-relaxed mt-1.5">
                                    We script, edit, and design eye-catching video ads and creatives that stop the scroll and make people take action.
                                </p>
                            </div>
                        </div>

                        {/* Card 3: Live ROAS Optimization */}
                        <div className="flex flex-col justify-between">
                            <div className="h-64 rounded-3xl bg-linear-to-b from-blue-50 to-indigo-50 border border-blue-200/60 p-6 flex flex-col justify-center items-center shadow-xs">
                                <div className="w-full max-w-xs rounded-2xl bg-white p-4 border border-blue-100 shadow-md space-y-3">
                                    <div className="flex items-center justify-between text-xs font-bold text-zinc-800 border-b border-zinc-100 pb-2">
                                        <span>Live ROAS Telemetry</span>
                                        <span className="text-[11px] text-blue-600 bg-blue-50 px-2 py-0.5 rounded-md font-semibold">Real-Time</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-zinc-600">Average ROAS</span>
                                        <span className="font-extrabold text-blue-600 text-sm">5.8x Return</span>
                                    </div>
                                    <div className="flex items-center justify-between text-xs">
                                        <span className="text-zinc-600">Cost Per Acquisition</span>
                                        <span className="font-extrabold text-emerald-600 text-sm">-32% CPA</span>
                                    </div>
                                    <div className="pt-1 border-t border-zinc-100 flex items-center justify-between text-[11px] text-zinc-500">
                                        <span>Server CAPI Active</span>
                                        <span className="text-emerald-600 font-bold">100% Signal Match</span>
                                    </div>
                                </div>
                            </div>
                            <div className="mt-5">
                                <h3 className="text-lg font-bold text-zinc-900 tracking-tight">Live budget optimization</h3>
                                <p className="text-[14px] text-zinc-600 leading-relaxed mt-1.5">
                                    We monitor daily numbers, test winning ads, and scale profitable campaigns without burning your marketing budget.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 5: PHYSICAL PRINT & SIGNAGE SOLUTIONS (akprints Core Print Infrastructure) ── */}
            <section id="printing" className="py-24 sm:py-32 px-6 bg-[#f4f4f2]/70 border-y border-zinc-200/80 relative">
                <BackgroundRippleEffect />
                <div className="relative z-10 max-w-6xl mx-auto">
                    <div className="text-center max-w-3xl mx-auto mb-16">
                        <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-blue-50 border border-blue-200/60 text-xs font-bold text-blue-700 uppercase tracking-wider mb-4">
                            Physical Print & Signage
                        </div>
                        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight">
                            Physical print and signage. <span className="font-serif font-normal text-blue-600">Built to make an impression.</span>
                        </h2>
                        <p className="mt-5 text-lg sm:text-[20px] text-zinc-600 leading-relaxed font-normal">
                            From luxury velvet visiting cards to illuminated 3D LED storefront signboards, akprints manufactures and delivers premium physical branding collateral with precision.
                        </p>
                    </div>

                    {/* 4 Clean Physical Print Cards */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 sm:gap-8">
                        {printServices.map((service, idx) => (
                            <motion.div
                                key={service.title}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                                custom={idx * 0.08}
                                className="group relative rounded-3xl bg-white border border-zinc-200/90 p-8 sm:p-10 flex flex-col justify-start hover:shadow-xl hover:-translate-y-1 transition-all duration-300"
                            >
                                <h3 className="text-2xl sm:text-3xl font-bold text-zinc-900 tracking-tight group-hover:text-blue-600 transition-colors">
                                    {service.title}
                                </h3>
                                <p className="text-base sm:text-lg text-zinc-600 leading-relaxed mt-4">
                                    {service.desc}
                                </p>

                                <div className="mt-6 pt-5 border-t border-zinc-100 space-y-2.5">
                                    {service.deliverables.map((item, dIdx) => (
                                        <div key={dIdx} className="flex items-center gap-3 text-sm font-medium text-zinc-600">
                                            <span className="w-1.5 h-1.5 rounded-full bg-blue-600" />
                                            <span>{item}</span>
                                        </div>
                                    ))}
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 6: PROJECTS WE HAVE DELIVERED (Restored & Clean) ── */}
            <section id="projects" className="py-24 sm:py-32 px-6 bg-white">
                <div className="max-w-6xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-16">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
                            Our Work
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight">
                            Projects we have delivered.
                        </h2>
                        <p className="mt-3 text-[16px] text-zinc-600">
                            Real websites, online stores, and profitable ad campaigns delivered for our clients.
                        </p>
                    </div>

                    <div className="space-y-12">
                        {deliveredProjects.map((project, idx) => (
                            <motion.div
                                key={project.id}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true }}
                                variants={fadeIn}
                                custom={idx * 0.1}
                                className="rounded-3xl bg-[#fafaf9] border border-zinc-200/90 overflow-hidden shadow-md hover:shadow-xl transition-all duration-300"
                            >
                                <div className="grid grid-cols-1 lg:grid-cols-12 gap-0">
                                    {/* Image Column */}
                                    <div className="lg:col-span-6 relative h-[280px] sm:h-[360px] lg:h-auto min-h-[320px] bg-zinc-100">
                                        <Image
                                            src={project.image}
                                            alt={project.title}
                                            fill
                                            className="object-cover"
                                        />
                                        <div className="absolute top-5 left-5 px-3.5 py-1.5 rounded-full bg-white/95 backdrop-blur-md text-xs font-bold text-zinc-900 border border-white/60 shadow-xs">
                                            {project.clientType}
                                        </div>
                                    </div>

                                    {/* Content Column */}
                                    <div className="lg:col-span-6 p-7 sm:p-10 flex flex-col justify-between">
                                        <div>
                                            <div className="flex items-center gap-3 mb-2">
                                                {project.logo && (
                                                    <div className="relative w-8 h-8 rounded-lg overflow-hidden bg-white border border-zinc-200 flex items-center justify-center">
                                                        <Image src={project.logo} alt={project.title} width={28} height={28} className="object-contain" />
                                                    </div>
                                                )}
                                                <h3 className="text-2xl sm:text-3xl font-extrabold text-zinc-900 tracking-tight">
                                                    {project.title}
                                                </h3>
                                            </div>

                                            <p className="text-[14.5px] text-zinc-600 leading-relaxed mt-3">
                                                {project.description}
                                            </p>

                                            {/* Results Highlights */}
                                            <div className="grid grid-cols-3 gap-3 my-6">
                                                {project.results.map((res, rIdx) => (
                                                    <div key={rIdx} className="p-3 rounded-xl bg-white border border-zinc-200/80 text-center">
                                                        <span className="text-lg sm:text-xl font-extrabold text-zinc-900 block">
                                                            {res.val}
                                                        </span>
                                                        <span className="text-[11px] text-zinc-500 block mt-0.5 font-medium">
                                                            {res.label}
                                                        </span>
                                                    </div>
                                                ))}
                                            </div>

                                            {/* Tech stack */}
                                            <div className="flex flex-wrap gap-2 pt-1">
                                                {project.tech.map((t, tIdx) => (
                                                    <span key={tIdx} className="text-[11.5px] font-medium px-3 py-1 rounded-md bg-white text-zinc-700 border border-zinc-200">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="pt-6 mt-6 border-t border-zinc-200/70 flex items-center justify-between">
                                            <span className="text-xs text-zinc-500 font-medium">
                                                Live & Active
                                            </span>
                                            <a
                                                href={project.link}
                                                target={project.link.startsWith('http') ? '_blank' : '_self'}
                                                rel="noopener noreferrer"
                                                className="inline-flex items-center gap-1.5 text-xs font-bold text-blue-600 hover:text-blue-800 transition-colors group"
                                            >
                                                <span>View Live Project</span>
                                                <ArrowUpRight className="w-4 h-4 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-transform" />
                                            </a>
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>

            {/* ── SECTION 6: OUR TEAM (Restored as earlier) ── */}
            <section id="team" className="py-24 sm:py-32 px-6 bg-[#f4f4f2]/70 border-y border-zinc-200/80">
                <div className="max-w-6xl mx-auto">
                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
                        <div className="max-w-xl">
                            <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight mb-3">
                                A team of specialists <span className="font-serif font-normal text-blue-600">behind every project</span>.
                            </h2>
                            <p className="text-[16px] text-zinc-600 leading-relaxed">
                                You don't just get one developer. You get a full team of experts working together to deliver the best possible result.
                            </p>
                        </div>
                        <div className="hidden lg:block shrink-0">
                            <Image src="/svgs/undraw_collaboration_hkrb.svg" alt="Team" width={220} height={140} className="select-none" />
                        </div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                        {teamMembers.map((m, i) => {
                            const Icon = m.icon
                            return (
                                <motion.div
                                    key={i}
                                    initial="hidden"
                                    whileInView="visible"
                                    viewport={{ once: true }}
                                    variants={fadeIn}
                                    custom={i * 0.07}
                                    className="group rounded-2xl p-5 text-center bg-white border border-zinc-200/80 transition-all duration-300 hover:shadow-md hover:border-blue-300"
                                >
                                    <div className="w-11 h-11 rounded-full flex items-center justify-center mx-auto mb-4 bg-blue-50 text-blue-600 group-hover:scale-105 transition-transform duration-300">
                                        <Icon className="w-5 h-5" />
                                    </div>
                                    <h4 className="text-[14px] font-bold text-zinc-900 leading-tight mb-1.5">
                                        {m.role}
                                    </h4>
                                    <p className="text-[12px] text-zinc-600 leading-snug">
                                        {m.description}
                                    </p>
                                </motion.div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── SECTION 7: START A PROJECT (Appealing & Clean) ── */}
            <section id="start-project" className="py-24 sm:py-32 px-6 bg-white">
                <div className="max-w-4xl mx-auto">
                    <div className="text-center max-w-2xl mx-auto mb-14">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
                            Start a Project
                        </span>
                        <h2 className="text-3xl sm:text-5xl font-normal tracking-tight text-zinc-900 leading-tight">
                            What do you need? <span className="font-serif font-normal text-blue-600">Let us build it</span>.
                        </h2>
                        <p className="text-[16px] text-zinc-600 mt-3">
                            Select your requirements below and schedule a quick call to get a clear scope and timeline.
                        </p>
                    </div>

                    {/* Interactive Selector Card */}
                    <div className="rounded-3xl bg-[#fafaf9] border border-zinc-200 p-7 sm:p-10 shadow-md">
                        <div className="space-y-8">
                            {/* Service Option Buttons */}
                            <div>
                                <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 block mb-3">
                                    1. Choose your primary goal
                                </label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3.5">
                                    {[
                                        { id: 'website', icon: Palette, title: 'A New Website', desc: 'Modern, fast website designed to showcase your brand or company.' },
                                        { id: 'ecommerce', icon: ShoppingBag, title: 'Online Store or Web App', desc: 'Full e-commerce setup with online payments and order management.' },
                                        { id: 'ads', icon: Rocket, title: 'Paid Ads Management', desc: 'Targeted ad campaigns on Instagram, YouTube, and Google.' },
                                        { id: 'printing', icon: Printer, title: 'Print & Signage', desc: 'Luxury visiting cards, 3D LED glow signboards, acrylic displays, packaging & banners.' },
                                        { id: 'growth', icon: TrendingUp, title: 'Complete Growth & Brand Package', desc: 'Custom website, high-ROAS ads management & physical print branding.' }
                                    ].map(item => {
                                        const Icon = item.icon
                                        const isSelected = estimatorPlan === item.id
                                        return (
                                            <button
                                                key={item.id}
                                                type="button"
                                                onClick={() => setEstimatorPlan(item.id)}
                                                className={`p-5 rounded-2xl text-left border transition-all cursor-pointer ${
                                                    isSelected
                                                        ? 'bg-blue-50/70 border-blue-600 shadow-xs'
                                                        : 'bg-white border-zinc-200 hover:bg-zinc-50'
                                                }`}
                                            >
                                                <div className="flex items-center justify-between mb-2">
                                                    <div className="flex items-center gap-2.5">
                                                        <div className={`p-2 rounded-lg ${isSelected ? 'bg-blue-600 text-white' : 'bg-zinc-100 text-zinc-700'}`}>
                                                            <Icon className="w-4 h-4" />
                                                        </div>
                                                        <h4 className="font-bold text-[15px] text-zinc-900">{item.title}</h4>
                                                    </div>
                                                    {isSelected && <CheckCircle2 className="w-5 h-5 text-blue-600" />}
                                                </div>
                                                <p className="text-[13px] text-zinc-600 leading-snug">{item.desc}</p>
                                            </button>
                                        )
                                    })}
                                </div>
                            </div>

                            {/* Timeline Window */}
                            <div>
                                <label className="text-xs font-bold uppercase tracking-wider text-zinc-500 block mb-3">
                                    2. Target timeline
                                </label>
                                <div className="grid grid-cols-3 gap-3">
                                    {[
                                        { id: 'rush', title: 'Rush Sprint', time: '1 to 2 Weeks' },
                                        { id: 'standard', title: 'Standard Sprint', time: '2 to 4 Weeks' },
                                        { id: 'monthly', title: 'Monthly Partnership', time: 'Ongoing' }
                                    ].map(t => (
                                        <button
                                            key={t.id}
                                            type="button"
                                            onClick={() => setEstimatorBudget(t.id)}
                                            className={`p-3.5 rounded-xl text-center border transition-all cursor-pointer ${
                                                estimatorBudget === t.id
                                                    ? 'bg-blue-50/70 border-blue-600 text-zinc-900 font-bold'
                                                    : 'bg-white border-zinc-200 text-zinc-600 hover:bg-zinc-50'
                                            }`}
                                        >
                                            <span className="text-xs font-bold block">{t.title}</span>
                                            <span className="text-[11px] text-zinc-500 block mt-0.5">{t.time}</span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Action */}
                            <div className="pt-4 border-t border-zinc-200 flex flex-col sm:flex-row items-center justify-between gap-4">
                                <p className="text-xs text-zinc-500 text-center sm:text-left">
                                    Direct call with senior engineers. No spam or sales pressure.
                                </p>
                                <button
                                    data-cal-link="shivam-verma-i3fold/30min"
                                    className="w-full sm:w-auto px-8 py-3.5 rounded-full bg-blue-600 hover:bg-blue-500 text-white font-bold text-sm flex items-center justify-center gap-2 shadow-lg transition-transform hover:scale-105 cursor-pointer"
                                >
                                    <span>Schedule a Discovery Call</span>
                                    <ArrowRight className="w-4 h-4" />
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* ── SECTION 8: FAQ SECTION ── */}
            <section className="py-24 sm:py-32 px-6 bg-[#f4f4f2]/70 border-y border-zinc-200/80">
                <div className="max-w-3xl mx-auto">
                    <div className="text-center max-w-xl mx-auto mb-14">
                        <span className="text-xs font-bold uppercase tracking-wider text-blue-600 block mb-2">
                            Questions
                        </span>
                        <h2 className="text-3xl sm:text-4xl font-extrabold tracking-tight text-zinc-900">
                            Frequently Asked Questions
                        </h2>
                        <p className="text-[15px] text-zinc-600 mt-2">
                            Clear answers to how we build websites and run ad campaigns.
                        </p>
                    </div>

                    <div className="space-y-3.5">
                        {faqs.map((faq, i) => {
                            const isOpen = openFaq === i
                            return (
                                <div
                                    key={i}
                                    className="rounded-2xl border border-zinc-200/90 bg-white overflow-hidden shadow-xs transition-colors"
                                >
                                    <button
                                        onClick={() => setOpenFaq(isOpen ? null : i)}
                                        className="w-full p-5 sm:p-6 text-left flex items-center justify-between gap-4 font-bold text-[15.5px] text-zinc-900 cursor-pointer"
                                    >
                                        <span>{faq.q}</span>
                                        <ChevronRight className={`w-4 h-4 text-zinc-400 shrink-0 transition-transform duration-200 ${isOpen ? 'rotate-90 text-blue-600' : ''}`} />
                                    </button>
                                    <AnimatePresence>
                                        {isOpen && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.2 }}
                                                className="overflow-hidden"
                                            >
                                                <div className="px-5 sm:px-6 pb-6 text-[14px] text-zinc-600 leading-relaxed border-t border-zinc-100 pt-3">
                                                    {faq.a}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── SECTION 9: GET IN TOUCH ── */}
            <section id="contact" className="py-24 sm:py-32 px-6 bg-white">
                <div className="max-w-4xl mx-auto text-center space-y-8">
                    <span className="text-xs font-bold uppercase tracking-wider text-blue-600 bg-blue-50 px-3.5 py-1.5 rounded-full border border-blue-200/60 inline-block">
                        Get In Touch
                    </span>

                    <h2 className="text-3xl sm:text-5xl font-extrabold tracking-tight text-zinc-900 leading-tight">
                        Ready to grow? <span className="font-serif font-normal text-blue-600">Let us talk.</span>
                    </h2>

                    <p className="text-[16px] text-zinc-600 max-w-lg mx-auto leading-relaxed">
                        Book a free 30-minute call. Tell us what you need, and we will figure out the best way to make it happen.
                    </p>

                    <div className="flex justify-center pt-2">
                        <button
                            data-cal-link="shivam-verma-i3fold/30min"
                            className="group flex items-center gap-3 bg-blue-600 hover:bg-blue-500 text-white rounded-full pl-7 pr-4 py-3.5 text-[14px] font-bold transition-all shadow-lg hover:scale-105 cursor-pointer"
                        >
                            <span>Book a Free Call</span>
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </button>
                    </div>

                    <div className="pt-12 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl mx-auto border-t border-zinc-200">
                        {[
                            { icon: Mail, label: 'Email', href: 'mailto:akprintsdev@gmail.com' },
                            { icon: Github, label: 'GitHub', href: 'https://github.com/theadroitdev' },
                            { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivam-verma-079780312/6' },
                            { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/theadroitdev' }
                        ].map((s, i) => {
                            const Icon = s.icon
                            return (
                                <a
                                    key={i}
                                    href={s.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-2 p-3 rounded-xl hover:bg-zinc-50 transition-colors group"
                                >
                                    <Icon className="w-5 h-5 text-zinc-400 group-hover:text-blue-600 group-hover:scale-110 transition-transform" />
                                    <span className="text-[11px] uppercase tracking-wider font-bold text-zinc-500">{s.label}</span>
                                </a>
                            )
                        })}
                    </div>
                </div>
            </section>

            {/* ── SECTION 10: WHITE FOOTER (As requested: footer is white, not black) ── */}
            <footer className="py-8 px-6 bg-white border-t border-zinc-200 text-xs text-zinc-600">
                <div className="max-w-6xl mx-auto flex flex-col sm:flex-row justify-between items-center gap-4">
                    <div className="flex items-center gap-2 font-bold text-zinc-900">
                        <div className="w-5 h-5 rounded-md bg-blue-600 text-white flex items-center justify-center text-[10px] font-extrabold">
                            ak
                        </div>
                        <span>akprints</span>
                        <span className="text-zinc-400 font-normal">/</span>
                        <span className="text-zinc-500 font-normal">Websites, Ads & Growth</span>
                    </div>

                    <div className="flex items-center gap-6">
                        <a href="#services" className="hover:text-zinc-900 transition-colors">Services</a>
                        <a href="#websites" className="hover:text-zinc-900 transition-colors">Websites</a>
                        <a href="#comparison" className="hover:text-zinc-900 transition-colors">Why Us</a>
                        <a href="#ads" className="hover:text-zinc-900 transition-colors">Ads</a>
                        <a href="#projects" className="hover:text-zinc-900 transition-colors">Work</a>
                        <a href="#contact" className="hover:text-zinc-900 transition-colors">Contact</a>
                    </div>

                    <p className="text-zinc-500">
                        &copy; {new Date().getFullYear()} akprints. All rights reserved.
                    </p>
                </div>
            </footer>
        </div>
    )
}
