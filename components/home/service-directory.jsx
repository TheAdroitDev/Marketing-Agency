import Link from 'next/link'
import { ArrowUpRight } from 'lucide-react'
import { categories, servicesByCategory, servicePath } from '@/lib/services'

// A plain, crawlable index of every service page. Sits under the bento grid
// so each service gets a direct internal link from the homepage.
export default function ServiceDirectory() {
    return (
        <section aria-labelledby="service-directory-title" className="w-full bg-[#fafaf9] px-4 sm:px-6 lg:px-8 py-14 sm:py-20 border-b border-zinc-200/80">
            <div className="max-w-6xl mx-auto">
                <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-3 pb-5 mb-8 border-b border-zinc-200/80">
                    <h2 id="service-directory-title" className="text-2xl sm:text-3xl font-semibold tracking-tight text-zinc-900">
                        Every service, one team
                    </h2>
                    <Link href="/services" className="inline-flex items-center gap-1 text-[15px] font-medium text-zinc-900 hover:text-blue-700 transition-colors">
                        View all services
                        <ArrowUpRight className="w-4 h-4" aria-hidden="true" />
                    </Link>
                </div>

                <div className="grid grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-10">
                    {categories.map((category) => (
                        <div key={category.id}>
                            <h3 className="text-[12px] font-semibold uppercase tracking-wider text-zinc-400">{category.label}</h3>
                            <ul className="mt-3.5 space-y-0.5">
                                {servicesByCategory(category.id).map((service) => (
                                    <li key={service.slug}>
                                        <Link
                                            href={servicePath(service.slug)}
                                            className="group flex items-center justify-between gap-2 py-2 border-b border-zinc-200/70 text-[15px] font-medium text-zinc-800 hover:text-zinc-950 transition-colors"
                                        >
                                            <span>{service.name}</span>
                                            <ArrowUpRight
                                                className="w-3.5 h-3.5 text-zinc-300 transition-all group-hover:text-blue-600 group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
                                                aria-hidden="true"
                                            />
                                        </Link>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    )
}
