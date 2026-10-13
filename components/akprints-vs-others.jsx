'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'
import { AceternityCallButton } from '@/components/ui/matrix-call-button'

const comparisonData = [
  {
    category: 'Approach',
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.75 2.5L6.67 7.5L10 18.33L13.33 7.5L11.25 2.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M14.17 2.5C14.43 2.5 14.68 2.56 14.91 2.68C15.15 2.79 15.35 2.96 15.5 3.17L18 6.5C18.22 6.79 18.33 7.13 18.33 7.49C18.34 7.85 18.22 8.2 18.01 8.49L11.35 17.64C11.2 17.85 11 18.03 10.76 18.15C10.53 18.27 10.27 18.33 10 18.33C9.74 18.33 9.48 18.27 9.24 18.15C9.01 18.03 8.8 17.85 8.65 17.64L1.99 8.49C1.78 8.2 1.67 7.85 1.67 7.49C1.67 7.13 1.79 6.79 2 6.5L4.5 3.17C4.66 2.96 4.86 2.79 5.09 2.68C5.32 2.56 5.58 2.5 5.83 2.5H14.17Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M1.67 7.5H18.33" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    akprints: 'Design and engineering in sync',
    others: 'Disconnected teams',
  },
  {
    category: 'Process',
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <rect x="5" y="5" width="10" height="10" rx="2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M7.5 2.5V5M12.5 2.5V5M7.5 15V17.5M12.5 15V17.5M2.5 7.5H5M2.5 12.5H5M15 7.5H17.5M15 12.5H17.5" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" />
      </svg>
    ),
    akprints: 'Streamlined, transparent, and async',
    others: 'Endless calls, vague timelines',
  },
  {
    category: 'Design Philosophy',
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <circle cx="5" cy="5" r="2.2" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="15" cy="5" r="2.2" stroke="currentColor" strokeWidth="1.3" />
        <circle cx="10" cy="15" r="2.2" stroke="currentColor" strokeWidth="1.3" />
        <path d="M7.2 5H12.8M5 7.2V10C5 12.76 7.24 15 10 15M15 7.2V10C15 12.76 12.76 15 10 15" stroke="currentColor" strokeWidth="1.3" />
      </svg>
    ),
    akprints: 'Modern, minimal, and purposeful.',
    others: 'Trend-based and cluttered',
  },
  {
    category: 'Development Stack',
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 6.25L10 2.08L2.5 6.25M17.5 6.25L10 10.42M17.5 6.25V13.75L10 17.92M10 10.42L2.5 6.25M10 10.42V17.92M2.5 6.25V13.75L10 17.92" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    akprints: 'Built with modern frameworks',
    others: 'Outdated stacks',
  },
  {
    category: 'Communication',
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M17.5 9.17C17.5 13.08 14.14 16.25 10 16.25C8.69 16.25 7.46 15.93 6.39 15.37L2.5 16.67L3.92 13.12C2.96 11.96 2.5 10.61 2.5 9.17C2.5 5.25 5.86 2.08 10 2.08C14.14 2.08 17.5 5.25 17.5 9.17Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
        <circle cx="7" cy="9.17" r="0.7" fill="currentColor" />
        <circle cx="10" cy="9.17" r="0.7" fill="currentColor" />
        <circle cx="13" cy="9.17" r="0.7" fill="currentColor" />
      </svg>
    ),
    akprints: 'Clear updates',
    others: 'Multiple middlemen',
  },
  {
    category: 'Deliverables',
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M18.33 1.67L9.17 10.83M18.33 1.67L12.5 18.33L9.17 10.83M18.33 1.67L1.67 7.5L9.17 10.83" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    akprints: 'Production-ready design systems',
    others: 'Static mockups',
  },
  {
    category: 'Support',
    icon: (
      <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path d="M8.75 9.17L11.25 11.67M6.25 6.67L7.5 7.92M12.5 12.92L13.75 14.17M1.67 9.17L6.67 4.17C7.47 3.37 8.78 3.37 9.58 4.17L15.83 10.42C16.63 11.22 16.63 12.53 15.83 13.33L10.83 18.33C10.03 19.13 8.72 19.13 7.92 18.33L1.67 12.08C0.87 11.28 0.87 9.97 1.67 9.17Z" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
      </svg>
    ),
    akprints: 'Long-term partnership mindset',
    others: 'One-and-done projects',
  },
]

function GreenCheck() {
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
  const [openAccordion, setOpenAccordion] = useState('Approach')

  return (
    <section id="comparison" className="w-full bg-[#fafaf9]">
      <div className="max-w-6xl mx-auto w-full px-4 sm:px-6 lg:px-8 py-16 sm:py-24">
        {/* Section Heading */}
        <h2 className="text-left text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 mb-8 sm:mb-10">
          Ak Prints VS Traditional Service Providers
        </h2>

        {/* ── DESKTOP COMPARISON CARD (Exact Ditto Layout) ── */}
        <div className="hidden lg:block w-full bg-white rounded-3xl border border-zinc-200/80 shadow-[0_4px_30px_rgba(0,0,0,0.02)] p-6 md:p-8">
          <div className="flex w-full items-stretch gap-6">
            {/* ── LEFT COLUMN: Soft Grey Category Pill ── */}
            <div className="w-[28%] bg-[#f4f4f5] rounded-3xl px-6 py-4 flex flex-col justify-between shrink-0 shadow-inner">
              {/* Header Spacer to perfectly align with right table headers */}
              <div className="h-14 flex items-center" />

              {/* 7 Categories */}
              {comparisonData.map((item, idx) => (
                <div key={idx} className="h-16 flex items-center gap-3.5 text-zinc-800">
                  <span className="text-zinc-900 shrink-0">{item.icon}</span>
                  <span className="text-[15px] xl:text-[16px] font-medium tracking-tight text-zinc-900">
                    {item.category}
                  </span>
                </div>
              ))}

              {/* Always Free Item */}
              <div className="h-16 flex items-center gap-3.5 text-zinc-800">
                <span className="text-zinc-900 shrink-0">
                  <svg width="18" height="18" viewBox="0 0 20 20" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M11.53 13.8C11.7 13.89 11.9 13.91 12.09 13.86C12.27 13.82 12.44 13.71 12.56 13.56L12.85 13.17C13.01 12.96 13.21 12.8 13.44 12.68C13.68 12.56 13.93 12.5 14.19 12.5H16.67C17.11 12.5 17.53 12.68 17.84 12.99C18.15 13.3 18.33 13.72 18.33 14.17V16.67C18.33 17.11 18.15 17.53 17.84 17.84C17.53 18.15 17.11 18.33 16.67 18.33C12.91 18.33 9.3 16.84 6.64 14.18C3.98 11.52 2.5 7.91 2.5 4.17C2.5 3.72 2.68 3.3 2.99 2.99C3.3 2.68 3.72 2.5 4.17 2.5H6.67C7.11 2.5 7.53 2.68 7.84 2.99C8.15 3.3 8.33 3.72 8.33 4.17V6.67C8.33 6.93 8.27 7.18 8.15 7.42C8.03 7.65 7.87 7.85 7.66 8.01L7.27 8.3C7.12 8.42 7.01 8.59 6.97 8.77C6.92 8.96 6.94 9.16 7.03 9.34C8.17 11.65 10.04 13.52 12.35 14.66" stroke="currentColor" strokeWidth="1.3" strokeLinecap="round" strokeLinejoin="round" />
                  </svg>
                </span>
                <span className="text-[15px] xl:text-[16px] font-medium tracking-tight text-zinc-900">
                  Always Free
                </span>
              </div>
            </div>

            {/* ── RIGHT COLUMNS: Ak Prints vs Traditional with Exact Dividing Lines ── */}
            <div className="w-[72%] flex flex-col justify-between">
              {/* Header Row */}
              <div className="h-14 grid grid-cols-2 gap-6 items-center border-b border-zinc-100 px-4">
                <div className="flex items-center gap-2.5">
                  <Image
                    src="/ak-logo-2.png"
                    alt="Ak Prints"
                    width={28}
                    height={28}
                    className="h-6 w-auto object-contain"
                  />
                  
                </div>
                <div className="flex items-center">
                  <span className="text-[15px] font-medium text-zinc-400 tracking-tight">
                    Traditional Service Providers
                  </span>
                </div>
              </div>

              {/* 7 Comparison Rows */}
              {comparisonData.map((item, idx) => (
                <div
                  key={idx}
                  className="h-16 grid grid-cols-2 gap-6 items-center border-b border-zinc-100 px-4"
                >
                  {/* Ak Prints Side (Green Check) */}
                  <div className="flex items-center gap-3">
                    <GreenCheck />
                    <span className="text-[15px] font-medium text-zinc-900 tracking-tight leading-snug">
                      {item.akprints}
                    </span>
                  </div>

                  {/* Traditional Side (Amber Warning) */}
                  <div className="flex items-center gap-3">
                    <AmberWarning />
                    <span className="text-[15px] font-medium text-zinc-800 tracking-tight leading-snug">
                      {item.others}
                    </span>
                  </div>
                </div>
              ))}

              {/* Bottom Buttons Row */}
              <div className="h-16 grid grid-cols-2 gap-6 items-center px-4 pt-1">
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

        {/* ── MOBILE ACCORDION VIEW (`lg:hidden`) ── */}
        <div className="block lg:hidden space-y-4">
          <div className="pb-2">
            <AceternityCallButton text="Book a Free Call" href="#contact" />
          </div>

          <div className="space-y-3">
            {comparisonData.map((item, idx) => {
              const isOpen = openAccordion === item.category
              return (
                <div
                  key={idx}
                  className="bg-white rounded-2xl border border-zinc-200/80 p-4 shadow-xs"
                >
                  <button
                    type="button"
                    onClick={() => setOpenAccordion(isOpen ? null : item.category)}
                    className="w-full flex items-center justify-between gap-3 text-left font-medium"
                  >
                    <div className="flex items-center gap-3">
                      <span className="text-zinc-900">{item.icon}</span>
                      <span className="text-base font-semibold text-zinc-900">
                        {item.category}
                      </span>
                    </div>
                    <ChevronDown
                      className={`w-5 h-5 text-zinc-400 transition-transform duration-200 ${
                        isOpen ? 'rotate-180 text-zinc-900' : ''
                      }`}
                    />
                  </button>

                  {isOpen && (
                    <div className="mt-4 pt-3 border-t border-zinc-100 space-y-3">
                      <div className="flex items-center gap-2.5">
                        <GreenCheck />
                        <div>
                          <span className="text-xs font-bold text-emerald-700 block uppercase tracking-wider">
                            Ak Prints
                          </span>
                          <span className="text-sm font-medium text-zinc-900">
                            {item.akprints}
                          </span>
                        </div>
                      </div>

                      <div className="flex items-center gap-2.5">
                        <AmberWarning />
                        <div>
                          <span className="text-xs font-bold text-amber-700 block uppercase tracking-wider">
                            Traditional
                          </span>
                          <span className="text-sm font-medium text-zinc-700">
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
    </section>
  )
}
