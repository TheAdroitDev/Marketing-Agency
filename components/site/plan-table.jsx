import { Check } from 'lucide-react'
import { formatINR } from '@/lib/site'
import { Card } from './ui'

// Server-rendered price cards, so every price is in the HTML for crawlers.
export default function PlanTable({ plans }) {
    return (
        <ul className={`grid grid-cols-1 sm:grid-cols-2 ${plans.length > 2 ? 'lg:grid-cols-4' : ''} gap-3.5 sm:gap-4`}>
            {plans.map((plan) => (
                <li key={plan.id}>
                    <Card className="h-full" innerClassName="flex flex-col">
                        <h3 className="text-[17px] font-semibold tracking-tight text-zinc-900">{plan.name}</h3>
                        <p className="mt-4 flex flex-col">
                            <span className="text-[13px] leading-none text-zinc-500">{plan.priceIsMax ? 'up to' : 'from'}</span>
                            <span className="mt-1.5 text-[28px] leading-none font-semibold tracking-tight tabular-nums whitespace-nowrap text-zinc-950">
                                {formatINR(plan.price)}
                            </span>
                        </p>
                        <p className="mt-3 text-[15px] leading-relaxed text-zinc-600">{plan.summary}</p>
                        <ul className="mt-5 pt-5 border-t border-zinc-100 space-y-2.5">
                            {plan.features.map((feature) => (
                                <li key={feature} className="flex items-start gap-2.5 text-[14px] leading-snug text-zinc-800">
                                    <Check className="w-4 h-4 mt-0.5 shrink-0 text-blue-600" strokeWidth={2.5} aria-hidden="true" />
                                    <span>{feature}</span>
                                </li>
                            ))}
                        </ul>
                    </Card>
                </li>
            ))}
        </ul>
    )
}
