'use client'

import React from 'react'
import Image from 'next/image'
import { motion } from 'framer-motion'

// Contextual Duotone Micro-Icons (Dual-tone opacity fill + sharp stroke)
function DuotoneIcon({ name, className = 'w-3.5 h-3.5 shrink-0' }) {
  switch (name) {
    case 'cart':
      return (
        <svg viewBox="0 0 16 16" fill="none" className={`${className} text-blue-600`}>
          <path d="M3 5h10l-1 9H4L3 5z" fill="currentColor" fillOpacity="0.22" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M6 7V4a2 2 0 014 0v3" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
        </svg>
      )
    case 'speed':
      return (
        <svg viewBox="0 0 16 16" fill="none" className={`${className} text-blue-600`}>
          <path d="M9 1.5L3.5 9h4.5l-1 5.5L12.5 7H8l1-5.5z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" strokeLinecap="round" />
        </svg>
      )
    case 'card':
      return (
        <svg viewBox="0 0 16 16" fill="none" className={`${className} text-blue-600`}>
          <rect x="2" y="3.5" width="12" height="9" rx="2" fill="currentColor" fillOpacity="0.22" stroke="currentColor" strokeWidth="1.4" />
          <path d="M2 6.5h12" stroke="currentColor" strokeWidth="1.4" />
          <rect x="4.5" y="9" width="3" height="1.5" rx="0.5" fill="currentColor" />
        </svg>
      )
    case 'video':
      return (
        <svg viewBox="0 0 16 16" fill="none" className={`${className} text-amber-600`}>
          <rect x="2" y="2.5" width="12" height="11" rx="2" fill="currentColor" fillOpacity="0.22" stroke="currentColor" strokeWidth="1.4" />
          <path d="M6.5 5.5l4 2.5-4 2.5v-5z" fill="currentColor" stroke="currentColor" strokeWidth="1.2" strokeLinejoin="round" />
        </svg>
      )
    case 'target':
      return (
        <svg viewBox="0 0 16 16" fill="none" className={`${className} text-amber-600`}>
          <circle cx="8" cy="8" r="6" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.4" />
          <circle cx="8" cy="8" r="3" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="8" cy="8" r="1.2" fill="currentColor" />
        </svg>
      )
    case 'chart':
      return (
        <svg viewBox="0 0 16 16" fill="none" className={`${className} text-amber-600`}>
          <path d="M2.5 13.5h11" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <rect x="3.5" y="8.5" width="2" height="5" rx="0.5" fill="currentColor" fillOpacity="0.28" stroke="currentColor" strokeWidth="1.2" />
          <rect x="7" y="6" width="2" height="7.5" rx="0.5" fill="currentColor" fillOpacity="0.28" stroke="currentColor" strokeWidth="1.2" />
          <rect x="10.5" y="3.5" width="2" height="10" rx="0.5" fill="currentColor" fillOpacity="0.28" stroke="currentColor" strokeWidth="1.2" />
          <path d="M4.5 7.5L8 5l3-2" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'pen':
      return (
        <svg viewBox="0 0 16 16" fill="none" className={`${className} text-indigo-600`}>
          <path d="M8 2l4.5 4.5-3 3-3-3L8 2z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M6.5 6.5L3 13.5l7-3.5-3.5-3.5z" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <circle cx="5" cy="11.5" r="0.8" fill="currentColor" />
        </svg>
      )
    case 'screen':
      return (
        <svg viewBox="0 0 16 16" fill="none" className={`${className} text-indigo-600`}>
          <rect x="2" y="2.5" width="12" height="11" rx="2" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.4" />
          <path d="M2 5.5h12" stroke="currentColor" strokeWidth="1.3" />
          <circle cx="4" cy="4" r="0.6" fill="currentColor" />
          <circle cx="6" cy="4" r="0.6" fill="currentColor" />
          <rect x="4" y="7.5" width="3.5" height="4" rx="0.8" fill="currentColor" fillOpacity="0.35" stroke="currentColor" strokeWidth="1" />
          <rect x="8.5" y="7.5" width="3.5" height="4" rx="0.8" fill="currentColor" fillOpacity="0.35" stroke="currentColor" strokeWidth="1" />
        </svg>
      )
    case 'sparkle':
      return (
        <svg viewBox="0 0 16 16" fill="none" className={`${className} text-indigo-600`}>
          <path d="M8 1.5l1.5 4.5L14 7.5l-4.5 1.5L8 13.5l-1.5-4.5L2 7.5l4.5-1.5L8 1.5z" fill="currentColor" fillOpacity="0.25" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
          <circle cx="12.5" cy="3.5" r="1" fill="currentColor" />
        </svg>
      )
    case 'card-print':
      return (
        <svg viewBox="0 0 16 16" fill="none" className={`${className} text-emerald-600`}>
          <rect x="2.5" y="3.5" width="11" height="9" rx="1.5" transform="rotate(-6 8 8)" fill="currentColor" fillOpacity="0.2" stroke="currentColor" strokeWidth="1.4" />
          <path d="M4 6.5l8-1" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
          <circle cx="6" cy="9.5" r="1" fill="currentColor" />
        </svg>
      )
    case 'box':
      return (
        <svg viewBox="0 0 16 16" fill="none" className={`${className} text-emerald-600`}>
          <path d="M8 2l5.5 3v6L8 14l-5.5-3V5L8 2z" fill="currentColor" fillOpacity="0.22" stroke="currentColor" strokeWidth="1.4" strokeLinejoin="round" />
          <path d="M2.5 5L8 8l5.5-3M8 8v6" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
      )
    case 'sign':
      return (
        <svg viewBox="0 0 16 16" fill="none" className={`${className} text-emerald-600`}>
          <rect x="2.5" y="3.5" width="11" height="8" rx="1.5" fill="currentColor" fillOpacity="0.22" stroke="currentColor" strokeWidth="1.4" />
          <path d="M5.5 7.5h5M7 5.5l2 4" stroke="currentColor" strokeWidth="1.4" strokeLinecap="round" />
          <path d="M4.5 1.5v2M11.5 1.5v2M8 11.5v3" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        </svg>
      )
    default:
      return null
  }
}

const capabilities = [
  {
    id: 'development',
    title: 'Websites & Online Stores',
    image: '/images/project-vastu-showcase.jpg',
    desc: 'Custom online stores and company websites built from scratch. Fast, mobile-first, and designed to turn visitors into buyers with smooth checkout.',
    deliverables: [
      { text: 'Custom online stores with easy 1-click checkout', icon: 'cart' },
      { text: 'Fast loading speeds so customers never bounce', icon: 'speed' },
      { text: 'Smooth payment setup with Razorpay & Stripe', icon: 'card' },
    ],
  },
  {
    id: 'marketing',
    title: 'Targeted Ad Campaigns',
    image: '/images/ads-performance-dashboard.jpg',
    desc: 'Targeted advertising on Google, YouTube, and Instagram. We write copy, create video and photo ads, and manage your budget to drive real sales.',
    deliverables: [
      { text: 'High-converting video and photo ad creatives', icon: 'video' },
      { text: 'Google search ads targeting active buyers', icon: 'target' },
      { text: 'Transparent weekly reports on spend and revenue', icon: 'chart' },
    ],
  },
  {
    id: 'design',
    title: 'Brand Identity & UI/UX',
    image: '/images/agency-team-craft.jpg',
    desc: 'Memorable logos, cohesive color palettes, and intuitive website designs. We shape how people perceive your business and make you look top-tier.',
    deliverables: [
      { text: 'Complete logo systems, fonts & color guides', icon: 'pen' },
      { text: 'Clean website and mobile app screen designs', icon: 'screen' },
      { text: 'Ready-to-use social media graphics & promo visuals', icon: 'sparkle' },
    ],
  },
  {
    id: 'print',
    title: 'Packaging & Signboards',
    image: '/images/project-musky-showcase.jpg',
    desc: 'Tangible physical branding that impresses in the real world: luxury visiting cards with gold foil, custom product packaging, and illuminated 3D signs.',
    deliverables: [
      { text: 'Velvet-touch business cards with foil & UV finish', icon: 'card-print' },
      { text: 'Custom product packaging, mailer boxes & labels', icon: 'box' },
      { text: 'Weatherproof 3D acrylic LED storefront signboards', icon: 'sign' },
    ],
  },
]

export default function EverythingYourBusinessNeeds() {
  return (
    <section id="services" className="w-full bg-[#fafaf9] pt-24 sm:pt-32 md:pt-40 pb-16 sm:pb-24 px-4 sm:px-6 lg:px-8 border-b border-zinc-200/80">
      <div className="max-w-6xl mx-auto flex flex-col gap-7 sm:gap-9">
        {/* Header with Heading Left + Mandatory Description Right */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 pb-5 border-b border-zinc-200/80">
          <div className="max-w-xl">
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 leading-[1.15]">
              Everything your business needs to{' '}
              <span className="inline-flex items-center gap-[0.22em] align-baseline">
                <span className="inline-flex items-center justify-center w-[0.82em] h-[0.82em] rounded-[24%] bg-gradient-to-b from-[#2BA6FF] via-[#0D7CFF] to-[#0055F6] shadow-[0_3px_12px_rgba(0,102,246,0.32),inset_0_1px_1px_rgba(255,255,255,0.4)] shrink-0 self-center translate-y-[0.02em]">
                  <svg viewBox="0 0 24 24" fill="currentColor" className="w-[56%] h-[56%] text-white drop-shadow-[0_1px_2px_rgba(0,20,100,0.2)]">
                    <path d="M13 2.5L4.5 13.5h6l-1.5 8 9-11h-6.5l2-8z" />
                  </svg>
                </span>
                <span className="bg-gradient-to-r from-[#00A3FF] via-[#1D6CFF] to-[#4054FF] bg-clip-text text-transparent">
                  Grow
                </span>
              </span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-[17px] sm:text-lg text-zinc-600 leading-relaxed font-normal">
              Design, development, performance marketing, and premium print. One dedicated team to grow your brand online and offline.
            </p>
          </div>
        </div>

        {/* ── MODERN ASYMMETRIC BENTO GRID (Tighter, cleaner gaps) ── */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-3.5 sm:gap-4">
          {/* Bento Card 1: Websites & Online Stores (7 cols Wide Flagship) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 p-[3px] rounded-[23px] sm:rounded-[27px] border border-zinc-200/50 bg-zinc-100/40 shadow-2xs"
          >
            <div className="w-full h-full bg-white rounded-[20px] sm:rounded-[24px] border border-zinc-200/80 p-4.5 sm:p-5 flex flex-col justify-between">
              <div>
                <div className="relative w-full aspect-[16/9.5] rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200/80 mb-3.5">
                  <Image
                    src={capabilities[0].image}
                    alt={capabilities[0].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                  {capabilities[0].title}
                </h3>
                <p className="mt-2 text-[15px] sm:text-base text-zinc-800 leading-relaxed font-normal">
                  {capabilities[0].desc}
                </p>

                {/* Feature Badges with No Outer Border, Inset White Line, and Continuous Background */}
                <div className="flex flex-wrap gap-2 mt-3.5 pt-3 border-t border-zinc-100">
                  {capabilities[0].deliverables.map((deliv, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center p-[2px] rounded-[9px] bg-[#ededef] text-zinc-800"
                    >
                      <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[7px] border border-white">
                        <DuotoneIcon name={deliv.icon} className="w-3.5 h-3.5 text-zinc-700 shrink-0" />
                        <span className="text-xs font-medium text-zinc-800">{deliv.text}</span>
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 2: Targeted Ad Campaigns (5 cols Tall Modular) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.1, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 p-[3px] rounded-[23px] sm:rounded-[27px] border border-zinc-200/50 bg-zinc-100/40 shadow-2xs"
          >
            <div className="w-full h-full bg-white rounded-[20px] sm:rounded-[24px] border border-zinc-200/80 p-4.5 sm:p-5 flex flex-col justify-between">
              <div>
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200/80 mb-3.5">
                  <Image
                    src={capabilities[1].image}
                    alt={capabilities[1].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                  {capabilities[1].title}
                </h3>
                <p className="mt-2 text-[15px] sm:text-base text-zinc-800 leading-relaxed font-normal">
                  {capabilities[1].desc}
                </p>

                {/* Feature Badges with No Outer Border, Inset White Line, and Continuous Background */}
                <div className="flex flex-wrap gap-2 mt-3.5 pt-3 border-t border-zinc-100">
                  {capabilities[1].deliverables.map((deliv, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center p-[2px] rounded-[9px] bg-[#ededef] text-zinc-800"
                    >
                      <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[7px] border border-white">
                        <DuotoneIcon name={deliv.icon} className="w-3.5 h-3.5 text-zinc-700 shrink-0" />
                        <span className="text-xs font-medium text-zinc-800">{deliv.text}</span>
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 3: Brand Identity & UI/UX (5 cols Modular) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-5 p-[3px] rounded-[23px] sm:rounded-[27px] border border-zinc-200/50 bg-zinc-100/40 shadow-2xs"
          >
            <div className="w-full h-full bg-white rounded-[20px] sm:rounded-[24px] border border-zinc-200/80 p-4.5 sm:p-5 flex flex-col justify-between">
              <div>
                <div className="relative w-full aspect-[4/3] rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200/80 mb-3.5">
                  <Image
                    src={capabilities[2].image}
                    alt={capabilities[2].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 40vw"
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                  {capabilities[2].title}
                </h3>
                <p className="mt-2 text-[15px] sm:text-base text-zinc-800 leading-relaxed font-normal">
                  {capabilities[2].desc}
                </p>

                {/* Feature Badges with No Outer Border, Inset White Line, and Continuous Background */}
                <div className="flex flex-wrap gap-2 mt-3.5 pt-3 border-t border-zinc-100">
                  {capabilities[2].deliverables.map((deliv, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center p-[2px] rounded-[9px] bg-[#ededef] text-zinc-800"
                    >
                      <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[7px] border border-white">
                        <DuotoneIcon name={deliv.icon} className="w-3.5 h-3.5 text-zinc-700 shrink-0" />
                        <span className="text-xs font-medium text-zinc-800">{deliv.text}</span>
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Bento Card 4: Packaging & Signboards (7 cols Wide Tactile) */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-40px' }}
            transition={{ duration: 0.5, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-7 p-[3px] rounded-[23px] sm:rounded-[27px] border border-zinc-200/50 bg-zinc-100/40 shadow-2xs"
          >
            <div className="w-full h-full bg-white rounded-[20px] sm:rounded-[24px] border border-zinc-200/80 p-4.5 sm:p-5 flex flex-col justify-between">
              <div>
                <div className="relative w-full aspect-[16/9.5] rounded-xl overflow-hidden bg-zinc-100 border border-zinc-200/80 mb-3.5">
                  <Image
                    src={capabilities[3].image}
                    alt={capabilities[3].title}
                    fill
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="object-cover object-center group-hover:scale-[1.03] transition-transform duration-700 ease-out"
                  />
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight">
                  {capabilities[3].title}
                </h3>
                <p className="mt-2 text-[15px] sm:text-base text-zinc-800 leading-relaxed font-normal">
                  {capabilities[3].desc}
                </p>

                {/* Feature Badges with No Outer Border, Inset White Line, and Continuous Background */}
                <div className="flex flex-wrap gap-2 mt-3.5 pt-3 border-t border-zinc-100">
                  {capabilities[3].deliverables.map((deliv, i) => (
                    <span
                      key={i}
                      className="inline-flex items-center p-[2px] rounded-[9px] bg-[#ededef] text-zinc-800"
                    >
                      <span className="inline-flex items-center gap-2 px-2.5 py-1 rounded-[7px] border border-white">
                        <DuotoneIcon name={deliv.icon} className="w-3.5 h-3.5 text-zinc-700 shrink-0" />
                        <span className="text-xs font-medium text-zinc-800">{deliv.text}</span>
                      </span>
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
