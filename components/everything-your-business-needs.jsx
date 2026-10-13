'use client'

import React from 'react'
import { motion } from 'framer-motion'
import {
  Code2,
  Target,
  TrendingUp,
  ArrowUpRight,
  Lock,
  Zap,
  CheckCircle2,
  BarChart3,
  Search,
  Sparkles,
  Layers,
} from 'lucide-react'

const fadeIn = {
  hidden: { opacity: 0, y: 20 },
  visible: (custom) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1], delay: custom || 0 },
  }),
}

function GreenCheck() {
  return (
    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <rect width="20" height="20" rx="10" fill="#12A113" />
      <path d="M14 7L8.5 12.5L6 10" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

export default function EverythingYourBusinessNeeds() {
  return (
    <section id="services" className="w-full bg-[#fafaf9] py-20 sm:py-28 px-4 sm:px-6 lg:px-8">
      <div className="max-w-6xl mx-auto flex flex-col gap-12 sm:gap-16">
        {/* Header with Heading Left + Description Right */}
        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-6">
          <div className="max-w-xl">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-zinc-200/70 text-zinc-800 tracking-wide uppercase mb-3.5">
              Core Capabilities
            </span>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 leading-[1.15]">
              Everything your business needs <span className="font-serif font-normal text-zinc-900">to grow online.</span>
            </h2>
          </div>
          <div className="max-w-md">
            <p className="text-base sm:text-[17px] text-zinc-600 leading-relaxed font-normal">
              Design, development, performance marketing, and premium print. One dedicated team to grow your brand online and offline.
            </p>
          </div>
        </div>

        {/* 3 Modern Aceternity-Style Feature Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
          {/* ── CARD 1: WEBSITES & ONLINE STORES ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0.1}
            className="group relative rounded-3xl bg-white border border-zinc-200/80 p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-zinc-300 transition-all duration-300"
          >
            <div>
              {/* Visual Showcase Stage (Mini Browser Mockup) */}
              <div className="w-full h-52 rounded-2xl bg-[#f4f4f5] border border-zinc-200/70 p-3.5 flex flex-col justify-between overflow-hidden relative group-hover:bg-[#f0f0f2] transition-colors">
                {/* Browser Top Bar */}
                <div className="flex items-center justify-between pb-2 border-b border-zinc-200/60">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ff5f56]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#ffbd2e]" />
                    <span className="w-2.5 h-2.5 rounded-full bg-[#27c93f]" />
                  </div>
                  <div className="flex items-center gap-1 px-3 py-0.5 rounded-full bg-white/80 border border-zinc-200 text-[10px] text-zinc-500 font-mono">
                    <Lock className="w-2.5 h-2.5 text-emerald-600" />
                    <span>akprints.dev/store</span>
                  </div>
                  <span className="text-[10px] font-semibold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                    99/100
                  </span>
                </div>

                {/* Inner Storefront Card Content */}
                <div className="space-y-2 py-1">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-zinc-200/60 shadow-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <Code2 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-zinc-900 leading-none">Instant Checkout</div>
                        <div className="text-[10px] text-zinc-500 mt-0.5">Razorpay + Stripe Edge</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">85ms</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-zinc-200/60 shadow-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-purple-50 text-purple-600 flex items-center justify-center shrink-0">
                        <Zap className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-zinc-900 leading-none">Global CDN Cache</div>
                        <div className="text-[10px] text-zinc-500 mt-0.5">Sub-second Page Load</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-zinc-700 bg-zinc-100 px-1.5 py-0.5 rounded">Edge</span>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex items-center gap-1.5 pt-1">
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white border border-zinc-200 text-zinc-700 shadow-2xs">
                    Next.js 16
                  </span>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white border border-zinc-200 text-zinc-700 shadow-2xs">
                    Shopify
                  </span>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white border border-zinc-200 text-zinc-700 shadow-2xs">
                    Tailwind
                  </span>
                </div>
              </div>

              {/* Card Meta & Header */}
              <div className="mt-6">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
                  Web & E-Commerce
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight mt-1 mb-2.5">
                  Websites & Online Stores
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                  Custom-built high-performance storefronts and web platforms engineered for speed, mobile responsiveness, and high conversion.
                </p>
              </div>

              {/* Deliverable Checklist */}
              <div className="mt-5 pt-4 border-t border-zinc-100 space-y-2.5">
                <div className="flex items-center gap-2.5 text-sm font-medium text-zinc-800">
                  <GreenCheck />
                  <span>Custom Next.js & Shopify Plus storefronts</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-medium text-zinc-800">
                  <GreenCheck />
                  <span>Razorpay, Stripe & 1-Click checkout flows</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-medium text-zinc-800">
                  <GreenCheck />
                  <span>Sub-second edge loading speeds (&lt;100ms)</span>
                </div>
              </div>
            </div>

            {/* Bottom Action Link */}
            <div className="mt-7 pt-4 border-t border-zinc-100 flex items-center justify-between">
              <a
                href="#websites"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors"
              >
                <span>Explore Storefronts</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </motion.div>

          {/* ── CARD 2: TARGETED AD CAMPAIGNS ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0.2}
            className="group relative rounded-3xl bg-white border border-zinc-200/80 p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-zinc-300 transition-all duration-300"
          >
            <div>
              {/* Visual Showcase Stage (Ad Telemetry Console) */}
              <div className="w-full h-52 rounded-2xl bg-[#f4f4f5] border border-zinc-200/70 p-3.5 flex flex-col justify-between overflow-hidden relative group-hover:bg-[#f0f0f2] transition-colors">
                {/* Console Header */}
                <div className="flex items-center justify-between pb-2 border-b border-zinc-200/60">
                  <div className="flex items-center gap-2">
                    <span className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
                    <span className="text-xs font-bold text-zinc-800">Campaign Monitor</span>
                  </div>
                  <span className="text-[11px] font-bold text-zinc-900 bg-white border border-zinc-200 px-2 py-0.5 rounded-full shadow-2xs">
                    5.8x Avg ROAS
                  </span>
                </div>

                {/* Inner Ad Channels */}
                <div className="space-y-2 py-1">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-zinc-200/60 shadow-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-blue-50 text-blue-600 flex items-center justify-center shrink-0">
                        <Target className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-zinc-900 leading-none">Meta Ads & Reels</div>
                        <div className="text-[10px] text-zinc-500 mt-0.5">High-Hook Video Creatives</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-blue-700 bg-blue-50 px-1.5 py-0.5 rounded">Scale</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-zinc-200/60 shadow-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-amber-50 text-amber-600 flex items-center justify-center shrink-0">
                        <BarChart3 className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-zinc-900 leading-none">Google Exact Search</div>
                        <div className="text-[10px] text-zinc-500 mt-0.5">High-Intent Buyer Keywords</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-700 bg-emerald-50 px-1.5 py-0.5 rounded">Active</span>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex items-center gap-1.5 pt-1">
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white border border-zinc-200 text-zinc-700 shadow-2xs">
                    Meta CAPI
                  </span>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white border border-zinc-200 text-zinc-700 shadow-2xs">
                    Google Ads
                  </span>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white border border-zinc-200 text-zinc-700 shadow-2xs">
                    YouTube
                  </span>
                </div>
              </div>

              {/* Card Meta & Header */}
              <div className="mt-6">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
                  Performance Marketing
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight mt-1 mb-2.5">
                  Targeted Ad Campaigns
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                  Multi-channel ad funnels scripted, produced, and optimized to capture active buyers across Google, Meta, and YouTube.
                </p>
              </div>

              {/* Deliverable Checklist */}
              <div className="mt-5 pt-4 border-t border-zinc-100 space-y-2.5">
                <div className="flex items-center gap-2.5 text-sm font-medium text-zinc-800">
                  <GreenCheck />
                  <span>High-hook video creatives & copy scripting</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-medium text-zinc-800">
                  <GreenCheck />
                  <span>Server-side Meta CAPI & Google Ads setup</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-medium text-zinc-800">
                  <GreenCheck />
                  <span>Multi-channel ROAS scaling & weekly reports</span>
                </div>
              </div>
            </div>

            {/* Bottom Action Link */}
            <div className="mt-7 pt-4 border-t border-zinc-100 flex items-center justify-between">
              <a
                href="#ads"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors"
              >
                <span>Explore Ad Systems</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </motion.div>

          {/* ── CARD 3: CONVERSION & SEO GROWTH ── */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true }}
            variants={fadeIn}
            custom={0.3}
            className="group relative rounded-3xl bg-white border border-zinc-200/80 p-6 sm:p-7 flex flex-col justify-between shadow-[0_4px_24px_rgba(0,0,0,0.02)] hover:shadow-[0_12px_40px_rgba(0,0,0,0.06)] hover:border-zinc-300 transition-all duration-300"
          >
            <div>
              {/* Visual Showcase Stage (Growth & SEO Dashboard) */}
              <div className="w-full h-52 rounded-2xl bg-[#f4f4f5] border border-zinc-200/70 p-3.5 flex flex-col justify-between overflow-hidden relative group-hover:bg-[#f0f0f2] transition-colors">
                {/* Dashboard Top Bar */}
                <div className="flex items-center justify-between pb-2 border-b border-zinc-200/60">
                  <div className="flex items-center gap-2">
                    <TrendingUp className="w-3.5 h-3.5 text-emerald-600" />
                    <span className="text-xs font-bold text-zinc-800">Growth Engine</span>
                  </div>
                  <span className="text-[11px] font-bold text-emerald-700 bg-emerald-100/80 px-2 py-0.5 rounded-full">
                    +38% Conversion
                  </span>
                </div>

                {/* Inner Growth Metrics */}
                <div className="space-y-2 py-1">
                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-zinc-200/60 shadow-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-emerald-50 text-emerald-600 flex items-center justify-center shrink-0">
                        <Search className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-zinc-900 leading-none">Google Rank #1</div>
                        <div className="text-[10px] text-zinc-500 mt-0.5">High-Volume Commercial Intent</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-emerald-600 bg-emerald-50 px-1.5 py-0.5 rounded">Top 3</span>
                  </div>

                  <div className="flex items-center justify-between p-2.5 rounded-xl bg-white border border-zinc-200/60 shadow-xs">
                    <div className="flex items-center gap-2">
                      <div className="w-7 h-7 rounded-lg bg-indigo-50 text-indigo-600 flex items-center justify-center shrink-0">
                        <Layers className="w-4 h-4" />
                      </div>
                      <div>
                        <div className="text-xs font-semibold text-zinc-900 leading-none">CRO Funnels</div>
                        <div className="text-[10px] text-zinc-500 mt-0.5">Frictionless User Journey</div>
                      </div>
                    </div>
                    <span className="text-[10px] font-bold text-indigo-700 bg-indigo-50 px-1.5 py-0.5 rounded">A/B Pass</span>
                  </div>
                </div>

                {/* Tech Chips */}
                <div className="flex items-center gap-1.5 pt-1">
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white border border-zinc-200 text-zinc-700 shadow-2xs">
                    Schema SEO
                  </span>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white border border-zinc-200 text-zinc-700 shadow-2xs">
                    Core Web Vitals
                  </span>
                  <span className="text-[10px] font-medium px-2 py-0.5 rounded-md bg-white border border-zinc-200 text-zinc-700 shadow-2xs">
                    Analytics
                  </span>
                </div>
              </div>

              {/* Card Meta & Header */}
              <div className="mt-6">
                <span className="text-xs font-semibold text-zinc-400 uppercase tracking-wider block">
                  Organic & CRO
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-zinc-900 tracking-tight mt-1 mb-2.5">
                  Conversion & SEO Growth
                </h3>
                <p className="text-sm text-zinc-600 leading-relaxed font-normal">
                  Turn existing traffic into measurable revenue through scientific conversion rate optimization, technical SEO, and frictionless checkout funnels.
                </p>
              </div>

              {/* Deliverable Checklist */}
              <div className="mt-5 pt-4 border-t border-zinc-100 space-y-2.5">
                <div className="flex items-center gap-2.5 text-sm font-medium text-zinc-800">
                  <GreenCheck />
                  <span>Technical & on-page search engine optimization</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-medium text-zinc-800">
                  <GreenCheck />
                  <span>A/B tested checkout and landing page funnels</span>
                </div>
                <div className="flex items-center gap-2.5 text-sm font-medium text-zinc-800">
                  <GreenCheck />
                  <span>Real-time heatmaps & conversion tracking</span>
                </div>
              </div>
            </div>

            {/* Bottom Action Link */}
            <div className="mt-7 pt-4 border-t border-zinc-100 flex items-center justify-between">
              <a
                href="#comparison"
                className="inline-flex items-center gap-1.5 text-sm font-semibold text-zinc-900 group-hover:text-blue-600 transition-colors"
              >
                <span>Explore CRO & SEO</span>
                <ArrowUpRight className="w-4 h-4 text-zinc-400 group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5 transition-all" />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
