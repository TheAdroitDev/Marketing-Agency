'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { AceternityCallButton } from '@/components/ui/matrix-call-button'

const comparisonData = [
  {
    category: 'Online Stores & Websites',
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M3.33 4.17H16.67L15 12.5H5L3.33 4.17Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M7.5 7.5V5C7.5 3.62 8.62 2.5 10 2.5C11.38 2.5 12.5 3.62 12.5 5V7.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
        <circle cx="6.67" cy="15.83" r="1.25" fill="currentColor" />
        <circle cx="13.33" cy="15.83" r="1.25" fill="currentColor" />
      </svg>
    ),
    akprints: 'Custom Next.js & Shopify stores',
    others: 'Basic templates & slow plugins',
    othersStatus: 'check',
  },
  {
    category: 'Targeted Ad Campaigns',
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="10" cy="10" r="7.5" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="10" cy="10" r="4.17" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="10" cy="10" r="1.25" fill="currentColor" />
      </svg>
    ),
    akprints: 'High-ROAS Meta & Google ad campaigns',
    others: 'Boosted posts with zero tracking',
    othersStatus: 'warning',
  },
  {
    category: 'Brand Identity & UI/UX',
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2.5L15.83 8.33L11.67 12.5L5.83 6.67L10 2.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M8.33 9.17L3.33 16.67L10.83 11.67" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        <circle cx="5.83" cy="14.17" r="1" fill="currentColor" />
      </svg>
    ),
    akprints: 'Complete brand guidelines & UI/UX',
    others: 'Static logos & basic color palettes',
    othersStatus: 'check',
  },
  {
    category: 'Packaging & Mailer Boxes',
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2.5L16.67 6.25V13.75L10 17.5L3.33 13.75V6.25L10 2.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M3.33 6.25L10 10L16.67 6.25M10 10V17.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    akprints: 'Custom luxury boxes & product labels',
    others: 'Generic stock cartons with high MOQs',
    othersStatus: 'warning',
  },
  {
    category: 'Visiting Cards & Print Media',
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="2.5" y="4.17" width="15" height="10.83" rx="1.67" stroke="currentColor" strokeWidth="1.3" />
        <path d="M2.5 8.33H17.5M6.67 11.67H10" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    akprints: 'Velvet touch, gold foil & Spot UV',
    others: 'Standard paper & basic offset print',
    othersStatus: 'check',
  },
  {
    category: 'Storefront 3D LED Signs',
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M2.5 5.83L3.75 3.33H16.25L17.5 5.83V7.5C17.5 8.42 16.75 9.17 15.83 9.17C14.92 9.17 14.17 8.42 14.17 7.5V5.83H11.67V7.5C11.67 8.42 10.92 9.17 10 9.17C9.08 9.17 8.33 8.42 8.33 7.5V5.83H5.83V7.5C5.83 8.42 5.08 9.17 4.17 9.17C3.25 9.17 2.5 8.42 2.5 7.5V5.83Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M4.17 9.17V16.67H15.83V9.17" stroke="currentColor" strokeWidth="1.3" />
        <path d="M8.33 16.67V12.5H11.67V16.67" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
      </svg>
    ),
    akprints: 'Laser-cut 3D glowing acrylic signs',
    others: 'Basic vinyl flex banners that fade',
    othersStatus: 'warning',
  },
  {
    category: 'Dedicated In-House Team',
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 2.5L16.67 5.42V10C16.67 14.17 13.83 17.08 10 18.33C6.17 17.08 3.33 14.17 3.33 10V5.42L10 2.5Z" stroke="currentColor" strokeWidth="1.3" strokeLinejoin="round" />
        <path d="M7.5 10L9.17 11.67L12.5 8.33" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    akprints: 'In-house digital & print specialists',
    others: 'Freelancers & disconnected middlemen',
    othersStatus: 'warning',
  },
]

function GreenCheck() {
  return (
    <div
      className="relative shrink-0 flex items-center justify-center w-5 h-5 my-1 rounded-full bg-[#12A113]"
      style={{
        boxShadow: `
          inset 0 1px 1.5px rgba(255, 255, 255, 0.4),
          inset 0 -1px 1px rgba(0, 0, 0, 0.12),
          0 0 0 1.5px #ffffff,
          0 0 0 2.5px rgba(18, 161, 19, 0.35),
          0 0 0 4px rgba(255, 255, 255, 0.85),
          0 0 0 5px rgba(18, 161, 19, 0.18),
          0 0 0 6.5px rgba(255, 255, 255, 0.5),
          0 0 0 7.5px rgba(18, 161, 19, 0.07)
        `,
      }}
    >
      <svg width="11" height="11" viewBox="0 0 12 12" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M10 3.5L4.8 8.8L2 6" stroke="white" strokeWidth="1.75" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    </div>
  )
}

function SimpleCheck() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <rect width="20" height="20" rx="10" fill="#12A113" />
      <path d="M14 7L8.5 12.5L6 10" stroke="white" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  )
}

function AmberWarning() {
  return (
    <svg width="20" height="20" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg" className="shrink-0">
      <rect width="20" height="20" rx="10" fill="#F59E0B" />
      <path d="M10 5.8V11.2" stroke="white" strokeWidth="1.6" strokeLinecap="round" />
      <circle cx="10" cy="14.2" r="1" fill="white" />
    </svg>
  )
}

export default function AkprintsVsOthers() {
  const [openAccordion, setOpenAccordion] = useState('Online Stores & Websites')

  return (
    <section id="comparison" className="w-full bg-[#fafaf9] border-y border-zinc-200/80">
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-14 sm:py-20 md:py-24">
        {/* Section Heading */}
        <h2 className="text-left text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-8 sm:mb-10">
          AK Prints VS Traditional Service Providers
        </h2>

        {/* ── DESKTOP COMPARISON CARD (Spacious & Breathable Double Border Card) ── */}
        <div className="hidden lg:block p-[3px] rounded-[26px] border border-zinc-200/50 bg-zinc-100/40 shadow-2xs">
          <div className="w-full bg-white rounded-[23px] border border-zinc-200/80 shadow-xs p-6 md:p-8 xl:p-9">
            <div className="flex w-full items-stretch gap-6 xl:gap-8">
              {/* ── LEFT COLUMN: Soft Grey Category Pill ── */}
              <div className="w-[26%] xl:w-[25%] bg-[#f4f4f5] rounded-2xl px-5 xl:px-6 py-4 flex flex-col justify-between shrink-0 shadow-inner">
                {/* Header: Features Title (Aligned with Right Column Headers) */}
                <div className="h-[60px] flex items-center border-b border-zinc-200/60">
                  <span className="text-[15px] xl:text-[16px] font-bold text-zinc-900 tracking-tight">
                    Features
                  </span>
                </div>

                {/* 7 Categories */}
                {comparisonData.map((item, idx) => (
                  <div key={idx} className="h-[72px] flex items-center gap-3.5 text-zinc-800">
                    <span className="text-zinc-700 shrink-0">{item.icon}</span>
                    <span className="text-[14px] xl:text-[15px] font-medium tracking-tight text-zinc-900">
                      {item.category}
                    </span>
                  </div>
                ))}

                {/* Always Free Item */}
                <div className="h-[72px] flex items-center gap-3.5 text-zinc-800">
                  <span className="text-zinc-700 shrink-0">
                    <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <path d="M11.53 13.8C11.7 13.89 11.9 13.91 12.09 13.86C12.27 13.82 12.44 13.71 12.56 13.56L12.85 13.17C13.01 12.96 13.21 12.8 13.44 12.68C13.68 12.56 13.93 12.5 14.19 12.5H16.67C17.11 12.5 17.53 12.68 17.84 12.99C18.15 13.3 18.33 13.72 18.33 14.17V16.67C18.33 17.11 18.15 17.53 17.84 17.84C17.53 18.15 17.11 18.33 16.67 18.33C12.91 18.33 9.3 16.84 6.64 14.18C3.98 11.52 2.5 7.91 2.5 4.17C2.5 3.72 2.68 3.3 2.99 2.99C3.3 2.68 3.72 2.5 4.17 2.5H6.67C7.11 2.5 7.53 2.68 7.84 2.99C8.15 3.3 8.33 3.72 8.33 4.17V6.67C8.33 6.93 8.27 7.18 8.15 7.42C8.03 7.65 7.87 7.85 7.66 8.01L7.27 8.3C7.12 8.42 7.01 8.59 6.97 8.77C6.92 8.96 6.94 9.16 7.03 9.34C8.17 11.65 10.04 13.52 12.35 14.66" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </span>
                  <span className="text-[14px] xl:text-[15px] font-medium tracking-tight text-zinc-900">
                    Always Free
                  </span>
                </div>
              </div>

              {/* ── RIGHT COLUMNS: Ak Prints vs Traditional with Exact Dividing Lines ── */}
              <div className="w-[74%] xl:w-[75%] flex flex-col justify-between">
                {/* Header Row */}
                <div className="h-[60px] grid grid-cols-2 gap-6 xl:gap-8 items-center border-b border-zinc-100/90 px-4">
                  <div className="flex items-center">
                    <Image
                      src="/ak-logo-2.png"
                      alt="Ak Prints"
                      width={140}
                      height={46}
                      priority
                      quality={100}
                      className="h-7 sm:h-8 w-auto object-contain"
                    />
                  </div>
                  <div className="flex items-center">
                    <span className="text-[14px] xl:text-[15px] font-semibold text-zinc-400 tracking-tight">
                      Traditional Service Providers
                    </span>
                  </div>
                </div>

                {/* 7 Comparison Rows */}
                {comparisonData.map((item, idx) => (
                  <div
                    key={idx}
                    className="h-[72px] grid grid-cols-2 gap-6 xl:gap-8 items-center border-b border-zinc-100/90 px-4"
                  >
                    {/* Ak Prints Side (Green Check) */}
                    <div className="flex items-center gap-3.5 xl:gap-4">
                      <GreenCheck />
                      <span className="text-[14px] xl:text-[15px] font-medium text-zinc-900 leading-normal">
                        {item.akprints}
                      </span>
                    </div>

                    {/* Traditional Side (Tick or Amber Warning) */}
                    <div className="flex items-center gap-3.5 xl:gap-4">
                      {item.othersStatus === 'check' ? <SimpleCheck /> : <AmberWarning />}
                      <span className="text-[14px] xl:text-[15px] font-medium text-zinc-600 leading-normal">
                        {item.others}
                      </span>
                    </div>
                  </div>
                ))}

                {/* Bottom Buttons Row */}
                <div className="h-[72px] grid grid-cols-2 gap-6 xl:gap-8 items-center px-4 pt-1">
                  {/* Book a Free Call CTA */}
                  <div>
                    <AceternityCallButton text="Book a Free Call" href="#contact" />
                  </div>

                  {/* Book a Paid Call Disabled CTA */}
                  <div>
                    <AceternityCallButton text="Book a Paid Call" variant="disabled" />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* ── MOBILE ACCORDION VIEW (`lg:hidden`) ── */}
        <div className="block lg:hidden p-[3px] rounded-[20px] border border-zinc-200/50 bg-zinc-100/40">
          <div className="bg-white rounded-[18px] p-4.5 sm:p-5 border border-zinc-200/75 space-y-3.5">
            <div className="pb-1">
              <AceternityCallButton text="Book a Free Call" href="#contact" />
            </div>

            <div className="space-y-3">
              {comparisonData.map((item, idx) => {
                const isOpen = openAccordion === item.category
                return (
                  <div
                    key={idx}
                    className="bg-zinc-50/70 rounded-xl border border-zinc-200/70 p-4 shadow-2xs"
                  >
                    <button
                      type="button"
                      onClick={() => setOpenAccordion(isOpen ? null : item.category)}
                      className="w-full flex items-center justify-between gap-3 text-left font-medium"
                    >
                      <div className="flex items-center gap-3">
                        <span className="text-zinc-800 shrink-0">{item.icon}</span>
                        <span className="text-[15px] font-semibold text-zinc-900">
                          {item.category}
                        </span>
                      </div>
                      <ChevronDown
                        className={`w-4 h-4 text-zinc-400 transition-transform duration-200 ${
                          isOpen ? 'rotate-180 text-zinc-900' : ''
                        }`}
                      />
                    </button>

                    {isOpen && (
                      <div className="mt-3.5 pt-3 border-t border-zinc-200/60 space-y-3">
                        <div className="flex items-center gap-3">
                          <GreenCheck />
                          <div>
                            <span className="text-[11px] font-bold text-emerald-700 block uppercase tracking-wider">
                              Ak Prints
                            </span>
                            <span className="text-sm font-medium text-zinc-900 leading-relaxed">
                              {item.akprints}
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          {item.othersStatus === 'check' ? <SimpleCheck /> : <AmberWarning />}
                          <div>
                            <span
                              className={`text-[11px] font-bold block uppercase tracking-wider ${
                                item.othersStatus === 'check' ? 'text-emerald-700' : 'text-amber-700'
                              }`}
                            >
                              Traditional
                            </span>
                            <span className="text-sm font-medium text-zinc-600 leading-relaxed">
                              {item.others}
                            </span>
                          </div>
                        </div>
                      </div>
                    )}
                  </div>
                )
              })}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
