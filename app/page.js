'use client'
import { TextHoverEffect } from "@/components/ui/text-hover-effect";
import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion'
import { useState, useRef, useEffect } from 'react'
import { ArrowUpRight, Github, Linkedin, Mail, Twitter, ChevronRight, Check, ShoppingBag, Palette } from 'lucide-react'
import { Cover } from "@/components/ui/cover";
import { BentoGridThirdDemo } from "@/components/ui/bento-grid";
import { NoiseBackground } from "@/components/ui/noise-background";
import { FeaturesSectionDemo } from "@/components/features-section-demo-2";
import { PointerHighlight } from "@/components/ui/pointer-highlight";

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

// --- TECH STACK COLOR MAPPING ---
const techColors = {
    'Next.js': 'hover:text-[#000000]',
    'React': 'hover:text-[#61DAFB]',
    'Node.js': 'hover:text-[#339933]',
    'MongoDB': 'hover:text-[#47A248]',
    'Tailwind': 'hover:text-[#06B6D4]',
    'Razorpay': 'hover:text-[#3395FF]',
    'Framer Motion': 'hover:text-[#FF0088]',
    'TypeScript': 'hover:text-[#3178C6]',
    'EmailJS': 'hover:text-[#0091FF]',
    'Stripe': 'hover:text-[#635BFF]',
    'Zustand': 'hover:text-[#000000]',
    'AWS': 'hover:text-[#FF9900]',
    'Vercel': 'hover:text-[#000000]',
    'Netlify': 'hover:text-[#00C7B7]',
    'Docker': 'hover:text-[#2496ED]',
    'Redis': 'hover:text-[#DC382D]',
}

export default function Home() {
    const [hoveredProject, setHoveredProject] = useState(null)
    const [isTeamHovered, setIsTeamHovered] = useState(false)
    const containerRef = useRef(null)
    const { scrollYProgress } = useScroll()
    const opacity = useTransform(scrollYProgress, [0, 0.2], [1, 0])

    useCalEmbed()

    const projects = [
        {
            id: 1,
            name: 'Vastu Mentor',
            category: 'E-Commerce',
            description: 'End-to-end Vastu consultation platform with integrated e-commerce, Razorpay payments, and custom admin dashboard.',
            tech: ['Next.js', 'MongoDB', 'Razorpay', 'NodeJS', 'Shiprocket'],
            link: 'https://vastumentor.com',
            year: '2026'
        },
        {
            id: 2,
            name: 'MuskySnax',
            category: 'D2C Food Brand',
            description: 'Premium snack delivery platform featuring real-time order tracking, Shiprocket logistics, and automated email workflows.',
            tech: ['Next.js', 'Tailwind', 'Framer', 'Motion'],
            link: 'https://muskysnax.in',
            year: '2025'
        },
    ]

    const services = [
        'Full-Stack Development',
        'E-commerce Architecture',
        'Payment Gateway Integration',
        'API Development',
        'Admin Dashboards',
        'Performance Optimization'
    ]

    const teamMembers = [
        { role: "Content Writer", img: "https://i.pravatar.cc/100?u=a" },
        { role: "Staff Engineer", img: "https://i.pravatar.cc/100?u=b" },
        { role: "Design Engineer", img: "https://i.pravatar.cc/100?u=c" },
        { role: "UI/UX", img: "https://i.pravatar.cc/100?u=d" }
    ]

    return (
        <div ref={containerRef} className="bg-[#fafaf9] text-[#1a1a1a] min-h-screen antialiased overflow-x-hidden  font-sans" style={{ fontWeight: 400 }}>

            {/* Light Mode Navigation */}
            <motion.nav
                initial={{ y: -100 }}
                animate={{ y: 0 }}
                transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                className="fixed top-0 w-full z-50 backdrop-blur-md bg-[#fafaf9]/80 border-b border-[#1a1a1a]/5"
            >
                <div className="max-w-[90rem] mx-auto px-5 sm:px-8 md:px-16 py-5 sm:py-6 md:py-8 flex justify-between items-center">
                    <div className="text-xs sm:text-sm tracking-[0.15em] sm:tracking-[0.2em] text-[#1a1a1a] font-medium">
                        THEADROITDEV
                    </div>
                    <a
                        href="#contact"
                        className="text-xs sm:text-sm tracking-[0.15em] sm:tracking-widest hover:tracking-[0.3em] transition-all duration-500 touch-manipulation min-h-[44px] flex items-center text-[#1a1a1a] font-normal"
                    >
                        CONTACT
                    </a>
                </div>
            </motion.nav>

            {/* Hero Section */}
            <section className="min-h-[100svh] flex items-center justify-center relative px-5 sm:px-8 md:px-16 pt-20 sm:pt-24">

                {/* Grid Background */}
                <div
                    className="absolute inset-0 z-0 pointer-events-none"
                    style={{
                        backgroundImage: 'linear-gradient(#e5e5e5 1px, transparent 1px), linear-gradient(90deg, #e5e5e5 1px, transparent 1px)',
                        backgroundSize: '40px 40px',
                        opacity: 0.4
                    }}
                />

                <motion.div
                    style={{ opacity }}
                    className="absolute inset-0 pointer-events-none z-[1]"
                >
                    <div className="absolute top-1/4 right-1/4 w-[300px] sm:w-[400px] md:w-[600px] h-[300px] sm:h-[400px] md:h-[600px] bg-amber-400/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px]" />
                    <div className="absolute bottom-1/3 left-1/4 w-[250px] sm:w-[350px] md:w-[500px] h-[250px] sm:h-[350px] md:h-[500px] bg-orange-300/10 rounded-full blur-[80px] sm:blur-[100px] md:blur-[120px]" />
                </motion.div>

                <div className="max-w-[90rem] mx-auto w-full relative z-10">
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ duration: 1.2, delay: 0.3 }}
                        className="space-y-8 sm:space-y-10 md:space-y-12"
                    >
                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
                                className="font-normal md:font-light leading-[0.85] tracking-tighter text-[#1a1a1a]"
                                style={{ fontSize: 'clamp(3.5rem, 15vw, 16rem)' }}
                            >
                                SHIVAM
                            </motion.h1>
                        </div>

                        <div className="overflow-hidden">
                            <motion.h1
                                initial={{ y: 100, opacity: 0 }}
                                animate={{ y: 0, opacity: 1 }}
                                transition={{ duration: 1, delay: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                className="font-normal md:font-light leading-[0.85] tracking-tighter text-right bg-gradient-to-r from-amber-600 to-orange-500 bg-clip-text text-transparent"
                                style={{ fontSize: 'clamp(3.5rem, 15vw, 16rem)' }}
                            >
                                VERMA
                            </motion.h1>
                        </div>

                        <motion.div
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ duration: 0.8, delay: 1.2 }}
                            className="flex flex-col sm:flex-row justify-between items-start sm:items-end gap-6 pt-8 sm:pt-12 md:pt-16"
                        >

                            {/* LEFT SIDE: TEAMS INTERACTION + AVAILABLE (Replaces the paragraph) */}
                            <div className="flex flex-col items-start gap-4">

                                {/* TEAMS MICRO-INTERACTION (Prominent placement) */}
                                <div
                                    className="relative inline-block"
                                    onMouseEnter={() => setIsTeamHovered(true)}
                                    onMouseLeave={() => setIsTeamHovered(false)}
                                >
                                    <div className="flex items-center gap-2 cursor-pointer group px-4 py-2 bg-white/50 backdrop-blur-sm border border-black/5 rounded-full hover:border-black/20 transition-all shadow-sm">
                                        <span className="text-sm font-medium text-[#4a4a4a] group-hover:text-[#1a1a1a] transition-colors">
                                            Collaborating with Teams
                                        </span>
                                        <div className="flex -space-x-2">
                                            {teamMembers.slice(0, 3).map((m, i) => (
                                                <div key={i} className="w-5 h-5 rounded-full ring-2 ring-white overflow-hidden">
                                                    <img src={m.img} className="w-full h-full object-cover" />
                                                </div>
                                            ))}
                                            <div className="w-5 h-5 rounded-full ring-2 ring-white bg-gray-100 flex items-center justify-center text-[8px] font-bold">+1</div>
                                        </div>
                                    </div>

                                    <AnimatePresence>
                                        {isTeamHovered && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10, scale: 0.95 }}
                                                animate={{ opacity: 1, y: 0, scale: 1 }}
                                                exit={{ opacity: 0, y: 10, scale: 0.95 }}
                                                transition={{ type: "spring", stiffness: 300, damping: 20 }}
                                                className="absolute left-0 top-12 bg-white/95 backdrop-blur-xl shadow-2xl rounded-2xl p-4 border border-gray-100 flex gap-4 min-w-[280px] z-50"
                                            >
                                                {teamMembers.map((member, i) => (
                                                    <motion.div
                                                        key={i}
                                                        initial={{ opacity: 0, y: 10 }}
                                                        animate={{ opacity: 1, y: 0 }}
                                                        transition={{ delay: i * 0.05 }}
                                                        className="flex flex-col items-center gap-2"
                                                    >
                                                        <div className="relative w-10 h-10 rounded-full overflow-hidden ring-2 ring-gray-100">
                                                            <img src={member.img} alt={member.role} className="w-full h-full object-cover" />
                                                        </div>
                                                        <span className="text-[9px] uppercase tracking-wider text-center font-bold text-gray-500 w-16 leading-tight">
                                                            {member.role}
                                                        </span>
                                                    </motion.div>
                                                ))}
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                </div>

                                <div className="flex items-center gap-3 text-sm text-[#6a6a6a] font-normal pl-1">
                                    <span className="w-2 h-2 rounded-full bg-amber-500 animate-pulse" />
                                    <span className="tracking-widest">AVAILABLE FOR WORK</span>
                                </div>
                            </div>

                        </motion.div>
                    </motion.div>
                </div>
            </section>

            {/* Tech Stack Marquee with Specific Colors */}
            <div className="border-y border-[#1a1a1a]/10 overflow-hidden py-4 sm:py-5 md:py-6 bg-white/50 relative z-10 group">
                <style jsx>{`
          .group:hover .marquee-content {
            animation-play-state: paused;
          }
        `}</style>
                <motion.div
                    className="marquee-content flex gap-8 sm:gap-12 md:gap-16 whitespace-nowrap"
                    animate={{ x: [0, -1920] }}
                    transition={{ duration: 40, repeat: Infinity, ease: "linear" }}
                >
                    {/* Tech list repeated 3 times for smoothness */}
                    {[...Array(3)].flatMap(() => Object.keys(techColors)).map((tech, i) => (
                        <span
                            key={i}
                            className={`tracking-wider font-normal md:font-light transition-colors duration-300 cursor-default text-[#d4d4d4] ${techColors[tech]}`}
                            style={{ fontSize: 'clamp(1.25rem, 4vw, 2rem)' }}
                        >
                            {tech}
                        </span>
                    ))}
                </motion.div>
            </div>

            {/* Start a Project / Pricing Flow */}
            <section className="py-20 sm:py-28 md:py-32 px-5 sm:px-8 md:px-16 relative z-10 bg-[#f4f4f4]">
                <div className="max-w-[90rem] mx-auto">
                    <div className="mb-12 sm:mb-16">
                        <span className="flex items-center gap-3 text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] text-[#1a1a1a] uppercase font-bold">
                            <span className="w-8 h-[1px] bg-[#1a1a1a]"></span>
                            Build a <PointerHighlight><span className="p-1">Product</span></PointerHighlight>
                        </span>
                    </div>

                    <PricingFlow />
                </div>
            </section>

            {/* Projects Section */}
            <section id="projects" className="py-20 sm:py-28 md:py-40 px-5 sm:px-8 md:px-16 relative z-10">
                <div className="max-w-[90rem] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 sm:mb-24 md:mb-32"
                    >
                        <span className="flex items-center gap-3 text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] text-[#1a1a1a] uppercase font-bold">
                            <span className="w-8 h-[1px] bg-[#1a1a1a]"></span>
                            Selected <PointerHighlight><span className="p-1">Projects</span></PointerHighlight>
                        </span>
                    </motion.div>

                    <div className="space-y-0">
                        {projects.map((project, idx) => (
                            <motion.div
                                key={project.id}
                                initial={{ opacity: 0 }}
                                whileInView={{ opacity: 1 }}
                                viewport={{ once: true }}
                                transition={{ duration: 0.8, delay: idx * 0.1 }}
                                onMouseEnter={() => setHoveredProject(project.id)}
                                onMouseLeave={() => setHoveredProject(null)}
                                className="group border-b border-[#1a1a1a]/10 py-12 sm:py-16 md:py-20 active:bg-[#1a1a1a]/[0.02] md:hover:bg-[#1a1a1a]/[0.02] transition-all duration-700"
                            >
                                <a
                                    href={project.link}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="block touch-manipulation"
                                >
                                    <div className="flex flex-col gap-6 sm:gap-8 md:flex-row md:items-center md:justify-between md:gap-16">
                                        <div className="flex-1 space-y-4 sm:space-y-5 md:space-y-6">
                                            <div className="flex items-start sm:items-baseline gap-3 sm:gap-4 md:gap-6">
                                                <h3
                                                    className="font-normal md:font-light tracking-tight group-hover:tracking-tighter group-active:text-amber-600 md:group-hover:text-amber-600 transition-all duration-700 leading-[0.9] text-[#1a1a1a]"
                                                    style={{ fontSize: 'clamp(2rem, 8vw, 5rem)' }}
                                                >
                                                    {project.name}
                                                </h3>
                                                <motion.div
                                                    animate={{
                                                        x: hoveredProject === project.id ? 10 : 0,
                                                        y: hoveredProject === project.id ? -10 : 0
                                                    }}
                                                    transition={{ duration: 0.3 }}
                                                    className="flex-shrink-0 mt-1"
                                                >
                                                    <ArrowUpRight
                                                        className="w-6 h-6 sm:w-8 sm:h-8 md:w-12 md:h-12 text-amber-600 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity duration-500"
                                                    />
                                                </motion.div>
                                            </div>

                                            <p
                                                className="text-[#4a4a4a] max-w-2xl leading-relaxed group-active:text-[#2a2a2a] md:group-hover:text-[#2a2a2a] transition-colors duration-500 font-normal"
                                                style={{ fontSize: 'clamp(0.9rem, 2.5vw, 1.125rem)' }}
                                            >
                                                {project.description}
                                            </p>

                                            <div className="flex flex-wrap gap-3 sm:gap-4 text-xs sm:text-sm text-[#6a6a6a] font-normal">
                                                {project.tech.map((t, i) => (
                                                    <span key={i} className="tracking-wider px-3 py-1 bg-[#1a1a1a]/5 rounded-full">
                                                        {t}
                                                    </span>
                                                ))}
                                            </div>
                                        </div>

                                        <div className="flex flex-row sm:flex-col items-center sm:items-start md:items-end gap-3 text-xs sm:text-sm font-normal">
                                            <span className="text-[#6a6a6a] tracking-[0.15em] sm:tracking-[0.2em]">{project.category}</span>
                                            <span
                                                className="text-amber-600/60 font-normal md:font-light"
                                                style={{ fontSize: 'clamp(1.5rem, 5vw, 2.5rem)' }}
                                            >
                                                {project.year}
                                            </span>
                                        </div>
                                    </div>
                                </a>
                            </motion.div>
                        ))}
                    </div>
                </div>
            </section>



            {/* About Section with Bento Grid */}
            <section id="about" className="py-20 sm:py-28 md:py-40 px-5 sm:px-8 md:px-16 bg-white/50 relative z-10">
                <div className="max-w-[90rem] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="mb-16 sm:mb-20"
                    >
                        <span className="flex items-center gap-3 text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] text-[#1a1a1a] uppercase font-bold">
                            <span className="w-8 h-[1px] bg-[#1a1a1a]"></span>
                            Features & <PointerHighlight><span className="p-1">Technologies</span></PointerHighlight>
                        </span>
                    </motion.div>
                    <div>
                        <h1 className="text-4xl md:text-4xl lg:text-6xl font-semibold max-w-7xl mx-auto text-center mt-6 relative z-20 py-6 bg-clip-text bg-gradient-to-b from-neutral-800 via-neutral-700 to-neutral-700 dark:from-neutral-800 dark:via-white dark:to-white">
                            Build amazing websites <br /> at <Cover>warp speed</Cover>
                        </h1>
                    </div>
                    <FeaturesSectionDemo />

                    <div className="mt-12">
                        <motion.div
                            initial={{ opacity: 0, x: 50 }}
                            whileInView={{ opacity: 1, x: 0 }}
                            viewport={{ once: true }}
                            transition={{ duration: 0.8, delay: 0.2 }}
                            className="lg:col-span-3"
                        >
                            <BentoGridThirdDemo />
                        </motion.div>
                    </div>
                </div>
            </section>


            {/* Contact Section */}
            <section id="contact" className="py-20 sm:py-28 md:py-10 px-5 sm:px-8 md:px-16 relative z-10 bg-white/50">
                <div className="max-w-[90rem] mx-auto">
                    <motion.div
                        initial={{ opacity: 0, y: 50 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.8 }}
                        className="flex flex-col items-center text-center space-y-12"
                    >
                        <span className="text-xs sm:text-sm tracking-[0.25em] sm:tracking-[0.3em] text-[#6a6a6a] uppercase font-bold">
                            Get In Touch
                        </span>

                        <h2 className="text-[#6a6a6a] text-xl sm:text-2xl md:text-3xl font-normal tracking-tight">
                            Hey, you scrolled this far, let's talk.
                        </h2>

                        <div className="flex justify-center">
                            <NoiseBackground
                                containerClassName="w-fit rounded-full mx-auto"
                                gradientColors={[
                                    "rgb(255, 100, 150)",
                                    "rgb(100, 150, 255)",
                                    "rgb(255, 200, 100)",
                                ]}
                            >
                                <button
                                    data-cal-link="shivam-verma-i3fold/30min"
                                    className="group relative flex items-center bg-white/90 hover:bg-white rounded-full pl-2 pr-6 py-2 transition-all duration-300 shadow-[0px_2px_0px_0px_rgba(255,255,255,0.1)_inset,0px_0.5px_1px_0px_rgba(0,0,0,0.1)] hover:shadow-lg cursor-pointer active:scale-98"
                                >
                                    <div className="flex -space-x-3 mr-4">
                                        <img
                                            src="https://pbs.twimg.com/profile_images/2022349950219407360/69s2wv6L_400x400.jpg"
                                            alt="Me"
                                            className="w-10 h-10 rounded-full border-2 border-white"
                                        />

                                        <div className="w-10 h-10 rounded-full border-2 border-white bg-gray-300 flex items-center justify-center text-[10px] font-medium text-gray-600">
                                            You
                                        </div>
                                    </div>

                                    <span className="text-[#1a1a1a] font-medium text-lg tracking-wide">
                                        Book a Free Call
                                    </span>

                                    <div className="ml-3 w-8 h-8 rounded-full bg-white flex items-center justify-center group-hover:translate-x-1 transition-transform">
                                        <ArrowUpRight className="w-4 h-4 text-[#1a1a1a]" />
                                    </div>
                                </button>
                            </NoiseBackground>
                        </div>


                        <div className="pt-16 grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-16 w-full max-w-4xl mx-auto border-t border-gray-200 mt-16">
                            {[
                                { icon: Mail, label: 'Email', href: 'mailto:theadroitdev@gmail.com' },
                                { icon: Github, label: 'GitHub', href: 'https://github.com/theadroitdev' },
                                { icon: Linkedin, label: 'LinkedIn', href: 'https://www.linkedin.com/in/shivam-verma-079780312/6' },
                                { icon: Twitter, label: 'Twitter', href: 'https://twitter.com/theadroitdev' }
                            ].map((social, i) => (
                                <a
                                    key={i}
                                    href={social.href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    className="flex flex-col items-center gap-3 text-[#6a6a6a] hover:text-[#1a1a1a] transition-colors group"
                                >
                                    <social.icon className="w-6 h-6 group-hover:scale-110 transition-transform" />
                                    <span className="text-sm tracking-widest uppercase">{social.label}</span>
                                </a>
                            ))}
                        </div>
                    </motion.div>
                </div>
            </section>
            <div className="h-[15rem] flex items-center justify-center">
                <TextHoverEffect text="THEADROITDEV" />
            </div>
            {/* Footer */}
            <footer className="border-t border-[#1a1a1a]/10 py-8 sm:py-10 md:py-12 px-5 sm:px-8 md:px-16 bg-white/50 relative z-10">
                <div className="max-w-[90rem] mx-auto flex flex-col md:flex-row justify-between items-center gap-4 sm:gap-5 md:gap-6">
                    <p className="text-[#6a6a6a] tracking-[0.15em] sm:tracking-widest text-center md:text-left font-normal text-sm">
                        © {new Date().getFullYear()} THEADROITDEV
                    </p>

                    <p className="text-[#8a8a8a] tracking-wide text-center md:text-right font-normal text-sm">
                        Designed & Built by Shivam Verma
                    </p>
                </div>

            </footer>
        </div>
    )
}

function PricingFlow() {
    const [step, setStep] = useState(0)
    const [selectedPlan, setSelectedPlan] = useState(null)

    const handleSelect = (plan) => {
        setSelectedPlan(plan)
        setStep(1)
    }

    return (
        <div className="w-full bg-white rounded-3xl p-6 sm:p-10 shadow-[inset_0_1px_2px_#0000001a,inset_0_2px_4px_#0000000d] border border-gray-100 overflow-hidden min-h-[400px] flex flex-col justify-center">
            <AnimatePresence mode="wait">

                {step === 0 && (
                    <motion.div
                        key="step0"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="space-y-8"
                    >
                        <h3 className="text-2xl sm:text-4xl font-normal text-[#1a1a1a]">What are you building?</h3>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <button
                                onClick={() => handleSelect('frontend')}
                                className="group text-left p-8 rounded-2xl bg-gray-50 transition-all duration-300 border border-transparent shadow-[inset_0_1px_2px_#0000001a,inset_0_2px_4px_#0000000d]"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-white text-black rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                                        <Palette className="w-6 h-6" />
                                    </div>
                                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <h4 className="text-xl font-medium mb-2">Frontend Dev</h4>
                                <p className="text-sm opacity-60">Pixel-perfect React/Next.js implementation from your designs.</p>
                            </button>

                            <button
                                onClick={() => handleSelect('ecommerce')}
                                className="group text-left p-8 rounded-2xl bg-gray-50 transition-all duration-300 border border-transparent shadow-[inset_0_1px_2px_#0000001a,inset_0_2px_4px_#0000000d]"
                            >
                                <div className="flex justify-between items-start mb-4">
                                    <div className="p-3 bg-white text-black rounded-lg shadow-sm group-hover:scale-110 transition-transform">
                                        <ShoppingBag className="w-6 h-6" />
                                    </div>
                                    <ArrowUpRight className="opacity-0 group-hover:opacity-100 transition-opacity" />
                                </div>
                                <h4 className="text-xl font-medium mb-2">E-Commerce / Business</h4>
                                <p className="text-sm opacity-60">Full-stack solutions with Payments, Admin, and Logistics.</p>
                            </button>

                        </div>
                    </motion.div>
                )}

                {step === 1 && (
                    <motion.div
                        key="step1"
                        initial={{ opacity: 0, x: 20 }}
                        animate={{ opacity: 1, x: 0 }}
                        exit={{ opacity: 0, x: -20 }}
                        className="flex flex-col items-center text-center space-y-8"
                    >
                        <div className="w-16 h-16 bg-green-100 text-green-600 rounded-full flex items-center justify-center mb-4">
                            <Check className="w-8 h-8" />
                        </div>
                        <div>
                            <h3 className="text-2xl sm:text-3xl font-medium text-[#1a1a1a] mb-2">
                                Great choice!
                            </h3>
                            <p className="text-gray-500 max-w-md mx-auto font-sans text-base">
                                You selected <span className="text-black capitalize">{selectedPlan === 'ecommerce' ? 'E-Commerce' : 'Frontend Development'}</span>.
                                Let's discuss your specific requirements on a quick call.
                            </p>
                        </div>

                        <div className="flex flex-col sm:flex-row gap-4 w-full justify-center">
                            <button
                                onClick={() => setStep(0)}
                                className="px-8 py-4 rounded-full border border-gray-200 text-gray-500 hover:bg-gray-50 transition-colors cursor-pointer"
                            >
                                Go Back
                            </button>

                            <button
                                data-cal-link="shivam-verma-i3fold/30min"
                                className="px-8 py-4 rounded-full bg-[#1a1a1a] text-white transition-all duration-300 flex items-center gap-3 shadow-lg hover:shadow-xl cursor-pointer hover:shadow-[inset_0_0_0_2px_#ffffff50]"
                            >
                                <span>Schedule Consultation</span>
                                <ChevronRight className="w-4 h-4" />
                            </button>
                        </div>

                    </motion.div>
                )}
            </AnimatePresence>

        </div>
    )

}
