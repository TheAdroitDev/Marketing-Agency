'use client'
import { motion, AnimatePresence } from 'framer-motion'
import { useState, useEffect } from 'react'
import {
    ArrowUpRight, Mail, Github, Linkedin, Twitter,
    ChevronRight, Check, ShoppingBag, Palette,
    Globe, Monitor, LayoutDashboard, Briefcase, Rocket, Code2,
    Youtube, Instagram, Search,
    PenTool, Figma, Server, Cpu
} from 'lucide-react'
import Image from 'next/image'
import { AuroraText } from "@/components/ui/aurora-text"
import AuroraBackgroundDemo from "@/components/aurora-background-demo"
import MagneticButtonDemo from '@/components/magnetic-button-demo';
import { audio } from 'framer-motion/m';
// --- CAL.COM INTEGRATION ---
const useCalEmbed = () => {
    useEffect(() => {
        (async function () {
            const cal = await getCalApi();
            cal("ui", { "styles": { "branding": { "brandColor": "#000000" } }, "hideEventTypeDetails": false, "layout": "month_view" });
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


// ── COLORS ────────────────────────────────────────────
const C = {
    dark: '#1a1a1a',
    body: '#3d3d3d',
    muted: '#6b6b6b',
    accent: '#55655a',
    accentLight: '#708775',
    bg: '#fafaf9',
    bgAlt: '#f3f2ef',
    card: '#ffffff',
    border: '#e5e4e0',
}


// ── DATA ──────────────────────────────────────────────

const services = [
    {
        icon: <Code2 className="w-5 h-5" />,
        title: 'Website Development',
        description: 'We build all types of websites. Online stores, business websites, personal portfolios, landing pages, or custom dashboards. You name it, we build it.',
        illustration: '/svgs/undraw_system-update_pc33.svg',
    },
    {
        icon: <Rocket className="w-5 h-5" />,
        title: 'Ad Campaigns',
        description: 'We run your ads on YouTube, Instagram, and Google. We handle the targeting, the creatives, and the budget so your ads reach the right people.',
        illustration: '/svgs/undraw_online-ad_703t.svg',
    },
    {
        icon: <Globe className="w-5 h-5" />,
        title: 'Digital Marketing',
        description: 'We help your brand grow online. SEO to rank on Google, content that people actually read, and social media that builds a real audience.',
        illustration: '/svgs/undraw_marketing-analysis_2u5r.svg',
    }
]

const websiteTypes = [
    { icon: <ShoppingBag className="w-5 h-5" />, name: 'Online Stores', desc: 'Sell products online with payments, inventory, and delivery tracking.' },
    { icon: <Monitor className="w-5 h-5" />, name: 'SaaS Platforms', desc: 'Web apps with login, subscription billing, and user dashboards.' },
    { icon: <Briefcase className="w-5 h-5" />, name: 'Business Websites', desc: 'Professional websites that make your company look credible and trustworthy.' },
    { icon: <Palette className="w-5 h-5" />, name: 'Portfolio Sites', desc: 'Beautiful websites to showcase your work, photography, or design projects.' },
    { icon: <Rocket className="w-5 h-5" />, name: 'Landing Pages', desc: 'Single-page websites designed to get people to sign up or buy.' },
    { icon: <LayoutDashboard className="w-5 h-5" />, name: 'Admin Panels', desc: 'Custom dashboards to manage your orders, users, and business data.' },
]

const adPlatforms = [
    {
        icon: <Youtube className="w-7 h-7" />,
        name: 'YouTube Ads',
        color: '#FF0000',
        description: 'Video ads that show up before, during, or after YouTube videos. Great for brand awareness and reaching millions of viewers.',
        illustration: '/svgs/undraw_make-it-rain_ylfg.svg',
    },
    {
        icon: <Instagram className="w-7 h-7" />,
        name: 'Instagram Ads',
        color: '#E1306C',
        description: 'Ads in Reels, Stories, and feed posts. Perfect for fashion, food, lifestyle, and any visual brand that wants to grow fast.',
        illustration: '/svgs/undraw_revenue-analysis_fjh2.svg',
    },
    {
        icon: <Search className="w-7 h-7" />,
        name: 'Google Ads',
        color: '#4285F4',
        description: 'Show up at the top of Google when people search for your service. You only pay when someone clicks. Best for getting customers who are ready to buy.',
        illustration: '/svgs/undraw_growth-chart_4iho.svg',
    }
]

const teamMembers = [
    { role: 'Content Writer', icon: <PenTool className="w-5 h-5" />, description: 'Writes the words on your website and ads that make people take action.' },
    { role: 'Design Engineer', icon: <Figma className="w-5 h-5" />, description: 'Turns designs into real, working, interactive websites.' },
    { role: 'UI/UX Designer', icon: <Palette className="w-5 h-5" />, description: 'Makes sure your website looks great and is easy for everyone to use.' },
    { role: 'Forward Deployed Engineer', icon: <Cpu className="w-5 h-5" />, description: 'Works directly with you to build exactly what your business needs.' },
    { role: 'System Design Engineer', icon: <Server className="w-5 h-5" />, description: 'Builds the backend so your website stays fast even with heavy traffic.' },
]

const projects = [
    {
        id: 1,
        name: 'Vastu Mentor',
        category: 'Online Store',
        description: 'A complete Vastu consultation and product shopping website. Customers can buy products, pay online via Razorpay, and track their orders.',
        tech: ['Next.js', 'MongoDB', 'Razorpay', 'Node.js', 'Shiprocket'],
        link: 'https://vastumentor.com',
        year: '2026'
    },
    {
        id: 2,
        name: 'MuskySnax',
        category: 'Food Brand',
        description: 'A premium snack delivery website. Customers place orders, get real-time delivery updates via email, and the brand manages everything from one dashboard.',
        tech: ['Next.js', 'Tailwind', 'Framer Motion'],
        link: 'https://muskysnax.in',
        year: '2025'
    },
]


// ── SECTION LABEL ─────────────────────────────────────

function SectionLabel({ children }) {
    return (
        <span className="inline-flex items-center gap-3 text-[11px] tracking-[0.25em] uppercase font-semibold mb-5"
            style={{ color: C.accentLight }}>
            <span className="w-6 h-[2px] rounded-full" style={{ backgroundColor: C.accentLight }} />
            {children}
        </span>
    )
}


// ── MAIN COMPONENT ────────────────────────────────────

export default function Home() {
    const [hoveredProject, setHoveredProject] = useState(null)

    useCalEmbed()

    const fadeIn = {
        hidden: { opacity: 0, y: 24 },
        visible: (d = 0) => ({
            opacity: 1, y: 0,
            transition: { duration: 0.5, delay: d, ease: [0.25, 0.1, 0.25, 1] }
        })
    }

    return (
        <div className="min-h-screen antialiased overflow-x-hidden" style={{ backgroundColor: C.bg, color: C.dark }}>

            {/* ── NAV ── */}
            <motion.nav
                initial={{ y: -80 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.5, ease: [0.25, 0.1, 0.25, 1] }}
                className="fixed top-0 w-full z-50 backdrop-blur-xl"
                style={{ backgroundColor: `${C.bg}e6`, borderBottom: `1px solid ${C.border}` }}
            >
                <div className="max-w-6xl mx-auto px-6 py-4 flex justify-between items-center">
                    <span className="text-[13px] tracking-[0.18em] font-bold uppercase" style={{ color: C.dark }}>
                        <Image alt="logo" src={"/logo-v3.png"} width={100} height={100}/>
                    </span>
                    <div className="hidden md:flex items-center gap-8">
                        {['Services', 'Team', 'Projects', 'Contact'].map(l => (
                            <a key={l} href={`#${l.toLowerCase()}`}
                                className="text-[14px] tracking-[0.12em] font-medium transition-colors duration-200 hover:opacity-100"
                                style={{ color: C.muted }}
                                onMouseEnter={e => e.target.style.color = C.dark}
                                onMouseLeave={e => e.target.style.color = C.muted}>
                                {l}
                            </a>
                        ))}
                    </div>
                    <a href="#contact"
                     >
                        <MagneticButtonDemo/>
                    </a>
                </div>
            </motion.nav>

                    <AuroraBackgroundDemo/>
      


            {/* ── SERVICES ── */}
            <section id="services" className="py-28 sm:py-36 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0}>
                        {/* <SectionLabel>What We Do</SectionLabel> */}
                        <h2 className="text-2xl sm:text-[2.5rem] text-center font-bold tracking-tight leading-snug mt-1 mb-14" style={{ color: C.dark }}>
                        Everything your business needs<br className="hidden sm:block" />  <AuroraText>   to grow online.</AuroraText>
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {services.map((s, i) => (
                            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                variants={fadeIn} custom={i * 0.1}
                                className="group rounded-2xl p-7 sm:p-8 transition-all duration-300 shadow-md"
                                style={{ backgroundColor: C.card, border: `1px solid ${C.border}` }}>

                                <div className="flex items-center justify-between mb-5">
                                    <div className="w-10 h-10 rounded-lg flex items-center justify-center"
                                        style={{ backgroundColor: `${C.accent}12`, color: C.accent }}>
                                        {s.icon}
                                    </div>
                                    <Image src={s.illustration} alt={s.title} width={48} height={48} className="opacity-50 group-hover:opacity-80 transition-opacity" />
                                </div>
                                <h3 className="text-[17px] font-bold mb-3" style={{ color: C.dark }}>{s.title}</h3>
                                <p className="text-[14px] leading-[1.75]" style={{ color: C.body }}>{s.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ── WEBSITES WE BUILD ── */}
            <section className="py-28 sm:py-36 px-6" style={{ backgroundColor: C.bgAlt }}>
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0}>
                        <SectionLabel>Websites We Build</SectionLabel>
                        <h2 className="text-2xl sm:text-[2.5rem] font-bold tracking-tight leading-snug mt-1 mb-14" style={{ color: C.dark }}>
                            Tell us what you need.<br className="hidden sm:block" /> We will build it.
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {websiteTypes.map((t, i) => (
                            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                variants={fadeIn} custom={i * 0.07}
                                className="group flex items-center gap-4 rounded-xl px-5 py-5 transition-all duration-300 hover:shadow-sm"
                                style={{ backgroundColor: C.card, border: `1px solid ${C.border}` }}>
                                <div className="w-10 h-10 rounded-lg flex items-center justify-center flex-shrink-0 transition-colors duration-300"
                                    style={{ backgroundColor: `${C.accent}0a`, color: C.muted }}
                                    onMouseEnter={e => { e.currentTarget.style.color = C.accent }}
                                    onMouseLeave={e => { e.currentTarget.style.color = C.muted }}>
                                    {t.icon}
                                </div>
                                <div>
                                    <h4 className="text-[14px] font-bold" style={{ color: C.dark }}>{t.name}</h4>
                                    <p className="text-[13px] leading-snug mt-0.5" style={{ color: C.muted }}>{t.desc}</p>
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ── AD PLATFORMS ── */}
            <section className="py-28 sm:py-36 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0}>
                        <SectionLabel>We Run Your Ads</SectionLabel>
                        <h2 className="text-2xl sm:text-[2.5rem] font-bold tracking-tight leading-snug mt-1 mb-14" style={{ color: C.dark }}>
                            We put your brand in front<br className="hidden sm:block" /> of the right people.
                        </h2>
                    </motion.div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
                        {adPlatforms.map((p, i) => (
                            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                variants={fadeIn} custom={i * 0.1}
                                className="group rounded-2xl p-7 sm:p-8 transition-all duration-300 hover:shadow-md overflow-hidden relative"
                                style={{ backgroundColor: C.card, border: `1px solid ${C.border}` }}>

                                <div className="flex items-center justify-between mb-5">
                                    <div className="w-12 h-12 rounded-xl flex items-center justify-center"
                                        style={{ backgroundColor: `${p.color}10`, color: p.color }}>
                                        {p.icon}
                                    </div>
                                </div>
                                <h3 className="text-lg font-bold mb-2" style={{ color: C.dark }}>{p.name}</h3>
                                <p className="text-[14px] leading-[1.75] mb-5" style={{ color: C.body }}>{p.description}</p>

                                <div className="flex justify-end opacity-40 group-hover:opacity-60 transition-opacity duration-500">
                                    <Image src={p.illustration} alt={p.name} width={120} height={80} className="select-none" />
                                </div>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ── TEAM ── */}
            <section id="team" className="py-28 sm:py-36 px-6" style={{ backgroundColor: C.bgAlt }}>
                <div className="max-w-6xl mx-auto">

                    <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-8 mb-14">
                        <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0}>
                            <SectionLabel>Our Team</SectionLabel>
                            <h2 className="text-2xl sm:text-[2.5rem] font-bold tracking-tight leading-snug mt-1 mb-3" style={{ color: C.dark }}>
                                A team of specialists<br className="hidden sm:block" /> behind every project.
                            </h2>
                            <p className="text-[15px] max-w-lg leading-[1.75]" style={{ color: C.body }}>
                                You don't just get one developer. You get a full team of experts working together to deliver the best possible result.
                            </p>
                        </motion.div>
                        <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }} viewport={{ once: true }}
                            transition={{ duration: 0.6, delay: 0.2 }}
                            className="hidden lg:block flex-shrink-0">
                            <Image src="/svgs/undraw_collaboration_hkrb.svg" alt="Team" width={220} height={160} className="opacity-60 select-none" />
                        </motion.div>
                    </div>

                    <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-4">
                        {teamMembers.map((m, i) => (
                            <motion.div key={i} initial="hidden" whileInView="visible" viewport={{ once: true }}
                                variants={fadeIn} custom={i * 0.08}
                                className="group rounded-xl p-5 text-center transition-all duration-300 hover:shadow-sm"
                                style={{ backgroundColor: C.card, border: `1px solid ${C.border}` }}>
                                <div className="w-11 h-11 rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-105 transition-transform duration-300"
                                    style={{ backgroundColor: `${C.accent}12`, color: C.accent }}>
                                    {m.icon}
                                </div>
                                <h4 className="text-[13px] font-bold leading-tight mb-1.5" style={{ color: C.dark }}>{m.role}</h4>
                                <p className="text-[12px] leading-snug" style={{ color: C.muted }}>{m.description}</p>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ── PROJECTS ── */}
            <section id="projects" className="py-28 sm:py-36 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0} className="mb-16">
                        <SectionLabel>Our Work</SectionLabel>
                        <h2 className="text-2xl sm:text-[2.5rem] font-bold tracking-tight leading-snug mt-1" style={{ color: C.dark }}>
                            Projects we have delivered.
                        </h2>
                    </motion.div>

                    <div className="space-y-0">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0 }} whileInView={{ opacity: 1 }} viewport={{ once: true }}
                                transition={{ duration: 0.6, delay: idx * 0.1 }}
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                                className="group py-10 sm:py-14 first:border-t -mx-6 px-6 transition-colors duration-300"
                                style={{ borderBottom: `1px solid ${C.border}` }}
                            >
                                <a href={project.link} target="_blank" rel="noopener noreferrer" className="block">
                                    <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between md:gap-12">
                                        <div className="flex-1 space-y-3">
                                            <div className="flex items-baseline gap-3">
                                                <h3 className="font-bold tracking-tight transition-colors duration-300"
                                                    style={{
                                                        fontSize: 'clamp(1.75rem, 5vw, 3.5rem)',
                                                        lineHeight: 1,
                                                        color: hoveredProject === project.id ? C.accent : C.dark
                                                    }}>
                                                    {project.name}
                                                </h3>
                                                <motion.div
                                                    animate={{ x: hoveredProject === project.id ? 4 : 0, y: hoveredProject === project.id ? -4 : 0 }}
                                                    transition={{ duration: 0.2 }}>
                                                    <ArrowUpRight className="w-5 h-5 sm:w-6 sm:h-6 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
                                                        style={{ color: C.accent }} />
                                                </motion.div>
                                            </div>
                                            <p className="max-w-xl text-[14px] leading-[1.75]" style={{ color: C.body }}>{project.description}</p>
                                            <div className="flex flex-wrap gap-2 pt-1">
                                                {project.tech.map((t, i) => (
                                                    <span key={i} className="text-[11px] tracking-wider font-medium px-2.5 py-1 rounded-md"
                                                        style={{ backgroundColor: `${C.accent}0a`, color: C.muted }}>
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>
                                        <div className="flex md:flex-col items-center md:items-end gap-2 text-right">
                                            <span className="text-[11px] tracking-[0.18em] uppercase font-semibold" style={{ color: C.accentLight }}>{project.category}</span>
                                            <span className="font-semibold text-2xl sm:text-3xl" style={{ color: `${C.accent}60` }}>{project.year}</span>
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>


            {/* ── START A PROJECT ── */}
            <section className="py-28 sm:py-36 px-6" style={{ backgroundColor: C.bgAlt }}>
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0} className="mb-10">
                        <SectionLabel>Start a Project</SectionLabel>
                    </motion.div>
                    <PricingFlow />
                </div>
            </section>


            {/* ── CONTACT ── */}
            <section id="contact" className="py-28 sm:py-36 px-6">
                <div className="max-w-6xl mx-auto">
                    <motion.div initial="hidden" whileInView="visible" viewport={{ once: true }} variants={fadeIn} custom={0}
                        className="flex flex-col items-center text-center space-y-8">

                        <SectionLabel>Get In Touch</SectionLabel>

                        <h2 className="text-3xl sm:text-5xl font-bold tracking-tight leading-tight" style={{ color: C.dark }}>
                            Ready to grow?<br /> Let's talk.
                        </h2>

                        <p className="text-[15px] max-w-md leading-[1.75]" style={{ color: C.body }}>
                            Book a free 30-minute call. Tell us what you need, and we will figure out the best way to make it happen.
                        </p>

                        {/* Growth illustration */}
                        <motion.div
                            initial={{ opacity: 0, y: 10 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}
                            transition={{ duration: 0.5, delay: 0.2 }}>
                            <Image src="/svgs/undraw_growth-chart_4iho.svg" alt="Growth" width={180} height={120} className="opacity-50 select-none" />
                        </motion.div>

                        <button
                            data-cal-link="shivam-verma-i3fold/30min"
                            className="group flex items-center gap-3 text-white rounded-full pl-7 pr-4 py-3.5 text-[14px] font-semibold transition-opacity duration-200 hover:opacity-90 cursor-pointer"
                            style={{ backgroundColor: C.accent }}>
                            <span>Book a Free Call</span>
                            <div className="w-8 h-8 rounded-full bg-white/20 flex items-center justify-center group-hover:bg-white/30 transition-colors">
                                <ArrowUpRight className="w-4 h-4" />
                            </div>
                        </button>

                        <div className="pt-12 grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-14 w-full max-w-2xl mx-auto mt-12"
                            style={{ borderTop: `1px solid ${C.border}` }}>
                            {[
                                { icon: Mail, label: 'Email', href: 'mailto:theadroitdev@gmail.com' },
                                { icon: Github, label: 'GitHub', href: 'https://github.com/theadroitdev' },
                                { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivam-verma-079780312/6' },
                                { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/theadroitdev' }
                            ].map((s, i) => (
                                <a key={i} href={s.href} target="_blank" rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-2.5 pt-6 transition-colors duration-200 group"
                                    style={{ color: C.muted }}
                                    onMouseEnter={e => e.currentTarget.style.color = C.dark}
                                    onMouseLeave={e => e.currentTarget.style.color = C.muted}>
                                    <s.icon className="w-[18px] h-[18px] group-hover:scale-110 transition-transform" />
                                    <span className="text-[11px] tracking-[0.15em] uppercase font-semibold">{s.label}</span>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>


            {/* ── FOOTER ── */}
            <footer className="py-6 px-6" style={{ borderTop: `1px solid ${C.border}` }}>
                <div className="max-w-6xl mx-auto flex flex-col md:flex-row justify-between items-center gap-3">
                    <p className="text-[11px] tracking-[0.1em] uppercase font-semibold" style={{ color: C.muted }}>
                        &copy; {new Date().getFullYear()} TheAdroitDev
                    </p>
                    <p className="text-[11px] tracking-wide" style={{ color: C.accentLight }}>
                        Websites &middot; Ads &middot; Growth
                    </p>
                </div>
            </footer>
        </div>
    )
}


// ── PRICING FLOW ──────────────────────────────────────

function PricingFlow() {
    const [step, setStep] = useState(0)
    const [selectedPlan, setSelectedPlan] = useState(null)

    return (
        <div className="w-full rounded-2xl p-6 sm:p-10 min-h-[380px] flex flex-col justify-center"
            style={{ backgroundColor: C.card, border: `1px solid ${C.border}` }}>
            <AnimatePresence mode="wait">
                {step === 0 && (
                    <motion.div key="s0" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }}
                        className="space-y-7">
                        <h3 className="text-xl sm:text-3xl font-bold" style={{ color: C.dark }}>What do you need?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                            {[
                                { key: 'frontend', icon: <Palette className="w-5 h-5" />, title: 'A New Website', desc: 'We will design and build a modern website for your brand or business.' },
                                { key: 'ecommerce', icon: <ShoppingBag className="w-5 h-5" />, title: 'Online Store or Web App', desc: 'Full setup with payments, user accounts, admin panel, and delivery tracking.' },
                            ].map(opt => (
                                <button key={opt.key}
                                    onClick={() => { setSelectedPlan(opt.key); setStep(1); }}
                                    className="group text-left p-6 rounded-xl transition-all duration-200 hover:shadow-sm"
                                    style={{ backgroundColor: C.bgAlt, border: `1px solid ${C.border}` }}>
                                    <div className="flex justify-between items-start mb-4">
                                        <div className="p-2.5 rounded-lg group-hover:scale-105 transition-transform"
                                            style={{ backgroundColor: `${C.accent}12`, color: C.accent }}>
                                            {opt.icon}
                                        </div>
                                        <ArrowUpRight className="w-4 h-4 opacity-0 group-hover:opacity-100 transition-opacity" style={{ color: C.accentLight }} />
                                    </div>
                                    <h4 className="text-[15px] font-bold mb-1" style={{ color: C.dark }}>{opt.title}</h4>
                                    <p className="text-[13px] leading-snug" style={{ color: C.body }}>{opt.desc}</p>
                                </button>
                            ))}
                        </div>
                    </motion.div>
                )}

                {step === 1 && (
                    <motion.div key="s1" initial={{ opacity: 0, x: 15 }} animate={{ opacity: 1, x: 0 }} exit={{ opacity: 0, x: -15 }}
                        className="flex flex-col items-center text-center space-y-6">
                        <div className="w-14 h-14 bg-emerald-50 text-emerald-600 rounded-full flex items-center justify-center">
                            <Check className="w-7 h-7" />
                        </div>
                        <div>
                            <h3 className="text-xl sm:text-2xl font-bold mb-2" style={{ color: C.dark }}>Great choice!</h3>
                            <p className="text-[14px] max-w-sm mx-auto leading-[1.75]" style={{ color: C.body }}>
                                You selected <span className="font-semibold" style={{ color: C.dark }}>{selectedPlan === 'ecommerce' ? 'Online Store / Web App' : 'A New Website'}</span>.
                                Let's get on a quick call to understand your requirements.
                            </p>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-3">
                            <button onClick={() => setStep(0)}
                                className="px-6 py-3 rounded-full text-[13px] font-semibold transition-colors cursor-pointer"
                                style={{ border: `1px solid ${C.border}`, color: C.muted }}>
                                Go Back
                            </button>
                            <button data-cal-link="shivam-verma-i3fold/30min"
                                className="px-6 py-3 rounded-full text-white text-[13px] font-semibold transition-opacity hover:opacity-90 flex items-center gap-2 cursor-pointer"
                                style={{ backgroundColor: C.accent }}>
                                Schedule a Call <ChevronRight className="w-3.5 h-3.5" />
                            </button>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </div>
    )
}
