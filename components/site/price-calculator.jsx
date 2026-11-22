'use client'

import { useEffect, useRef, useState } from 'react'
import { animate, motion, useReducedMotion } from 'framer-motion'
import { Check } from 'lucide-react'
import { IconBrandWhatsapp } from '@tabler/icons-react'
import { websitePlans, ecommercePlans, quoteOnly } from '@/lib/pricing'
import { formatINR, waLink } from '@/lib/site'

const groups = [
    { id: 'website', label: 'Business website', plans: websitePlans },
    { id: 'ecommerce', label: 'Online store', plans: ecommercePlans },
]

function AnimatedPrice({ value }) {
    const ref = useRef(null)
    const previous = useRef(value)
    const reduced = useReducedMotion()

    useEffect(() => {
        const node = ref.current
        if (!node) return
        if (reduced) {
            node.textContent = formatINR(value)
            previous.current = value
            return
        }
        const controls = animate(previous.current, value, {
            duration: 0.5,
            ease: [0.22, 1, 0.36, 1],
            onUpdate: (v) => {
                node.textContent = formatINR(Math.round(v / 500) * 500)
            },
            onComplete: () => {
                node.textContent = formatINR(value)
            },
        })
        previous.current = value
        return () => controls.stop()
    }, [value, reduced])

    return (
        <span ref={ref} className="tabular-nums">
            {formatINR(value)}
        </span>
    )
}

export default function PriceCalculator() {
    const [groupId, setGroupId] = useState('website')
    const [planIds, setPlanIds] = useState({ website: 'standard', ecommerce: 'store' })

    const group = groups.find((g) => g.id === groupId)
    const plan = group.plans.find((p) => p.id === planIds[groupId])

    const message = `Hi AK Prints! I used the price calculator and I'm interested in the ${plan.name} plan (${plan.priceIsMax ? 'up to' : 'from'} ${formatINR(plan.price)}). Can we discuss my project?`

    return (
        <div className="p-[3px] rounded-[27px] sm:rounded-[31px] border border-zinc-200/50 bg-zinc-100/40 shadow-2xs">
            <div className="grid grid-cols-1 lg:grid-cols-12 bg-white rounded-[24px] sm:rounded-[28px] border border-zinc-200/80 overflow-hidden">
                {/* Left: choices */}
                <div className="lg:col-span-7 p-5 sm:p-8">
                    <div role="tablist" aria-label="Project type" className="inline-flex p-1 rounded-xl bg-[#ededef]">
                        {groups.map((g) => {
                            const active = g.id === groupId
                            return (
                                <button
                                    key={g.id}
                                    type="button"
                                    role="tab"
                                    aria-selected={active}
                                    onClick={() => setGroupId(g.id)}
                                    className="relative px-4 py-2 rounded-[9px] text-[14px] font-medium cursor-pointer transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40"
                                >
                                    {active && (
                                        <motion.span
                                            layoutId="calc-tab"
                                            transition={{ type: 'spring', stiffness: 420, damping: 34 }}
                                            className="absolute inset-0 rounded-[9px] bg-white shadow-[0_1px_3px_rgba(0,0,0,0.08)]"
                                        />
                                    )}
                                    <span className={`relative z-10 ${active ? 'text-zinc-950' : 'text-zinc-600'}`}>{g.label}</span>
                                </button>
                            )
                        })}
                    </div>

                    <div role="radiogroup" aria-label={`${group.label} plans`} className="mt-5 space-y-2.5">
                        {group.plans.map((p) => {
                            const selected = p.id === plan.id
                            return (
                                <button
                                    key={p.id}
                                    type="button"
                                    role="radio"
                                    aria-checked={selected}
                                    onClick={() => setPlanIds((ids) => ({ ...ids, [groupId]: p.id }))}
                                    className={`w-full text-left flex items-start gap-3.5 p-4 rounded-2xl border cursor-pointer transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40 ${
                                        selected
                                            ? 'border-blue-600/70 bg-blue-50/50 shadow-[0_0_0_3px_rgba(37,99,235,0.08)]'
                                            : 'border-zinc-200/90 bg-white hover:border-zinc-300 hover:bg-zinc-50/60'
                                    }`}
                                >
                                    <span
                                        aria-hidden="true"
                                        className={`mt-0.5 flex h-5 w-5 shrink-0 items-center justify-center rounded-full border transition-colors ${
                                            selected ? 'border-blue-600 bg-blue-600 text-white' : 'border-zinc-300 bg-white text-transparent'
                                        }`}
                                    >
                                        <Check className="w-3 h-3" strokeWidth={3} />
                                    </span>
                                    <span className="flex-1 min-w-0">
                                        <span className="flex flex-wrap items-baseline justify-between gap-x-4 gap-y-0.5">
                                            <span className="text-[16px] font-semibold tracking-tight text-zinc-900">{p.name}</span>
                                            <span className="text-[15px] font-semibold tabular-nums text-zinc-900">
                                                <span className="font-normal text-zinc-500 text-[13px] mr-1">{p.priceIsMax ? 'up to' : 'from'}</span>
                                                {formatINR(p.price)}
                                            </span>
                                        </span>
                                        <span className="mt-1 block text-[14px] leading-relaxed text-zinc-600">{p.summary}</span>
                                    </span>
                                </button>
                            )
                        })}
                    </div>
                </div>

                {/* Right: estimate */}
                <div className="lg:col-span-5 p-5 sm:p-8 bg-[#fafaf9] border-t lg:border-t-0 lg:border-l border-zinc-200/80 flex flex-col">
                    <span className="text-[13px] font-medium text-zinc-500">Your estimate</span>
                    <div className="mt-1 flex items-baseline gap-2" aria-live="polite">
                        <span className="text-[13px] text-zinc-500">{plan.priceIsMax ? 'up to' : 'from'}</span>
                        <span className="text-4xl sm:text-5xl font-semibold tracking-tight text-zinc-950">
                            <AnimatedPrice value={plan.price} />
                        </span>
                    </div>
                    <span className="mt-1 text-[13px] text-zinc-500">One-time project price in INR. Final quote after a short call.</span>

                    <ul className="mt-6 space-y-2.5">
                        {plan.features.map((feature) => (
                            <li key={feature} className="flex items-start gap-2.5 text-[15px] leading-snug text-zinc-800">
                                <Check className="w-4 h-4 mt-0.5 shrink-0 text-blue-600" strokeWidth={2.5} aria-hidden="true" />
                                <span>{feature}</span>
                            </li>
                        ))}
                    </ul>

                    <div className="mt-auto pt-7">
                        <a
                            href={waLink(message)}
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex w-full items-center justify-center gap-2 rounded-lg bg-linear-to-b from-emerald-500 to-emerald-700 px-5 py-3 text-[15px] font-medium text-white ring-1 ring-inset ring-white/20 shadow-[0_6px_20px_rgba(16,185,129,0.25)] transition-transform duration-150 hover:-translate-y-px active:scale-[0.98]"
                        >
                            <IconBrandWhatsapp className="w-4 h-4 stroke-[2.2]" aria-hidden="true" />
                            <span>Send this estimate on WhatsApp</span>
                        </a>
                        <p className="mt-4 text-[13px] leading-relaxed text-zinc-500">
                            Quoted per brief: {quoteOnly.join('; ')}.
                        </p>
                    </div>
                </div>
            </div>
        </div>
    )
}
