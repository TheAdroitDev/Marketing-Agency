import Image from 'next/image'
import Link from 'next/link'
import Navbar from '@/components/site/navbar'
import Footer from '@/components/site/footer'
import JsonLd from '@/components/site/json-ld'
import PriceCalculator from '@/components/site/price-calculator'
import AuroraBackgroundDemo from '@/components/aurora-background-demo'
import SocialProof01 from '@/components/social-proof-01'
import EverythingYourBusinessNeeds from '@/components/everything-your-business-needs'
import AkprintsVsOthers from '@/components/akprints-vs-others'
import ServiceDirectory from '@/components/home/service-directory'
import ProjectsSection from '@/components/home/projects-section'
import CtaSection from '@/components/cta-section'
import { Faq } from '@/components/ui/faq'
import { homeFaqs } from '@/lib/home-faqs'
import { faqSchema, offerCatalogSchema } from '@/lib/schema'
import { pageMetadata } from '@/lib/seo'

export const metadata = pageMetadata({
    title: 'Digital Marketing & Printing Agency in Ludhiana | AK Prints',
    absoluteTitle: true,
    description:
        'AK Prints is a marketing agency in Ludhiana for websites, e-commerce, Google, YouTube and Meta ads, SEO, logo design and printing. Websites from ₹20,000. Open every day, 10 AM to 7 PM.',
    path: '/',
    keywords: [
        'marketing agency in Ludhiana',
        'digital marketing agency Ludhiana',
        'website design Ludhiana',
        'printing services Ludhiana',
        'Google Ads agency Punjab',
        'best digital marketing agency in India',
    ],
})

export default function Home() {
    return (
        <div className="min-h-screen antialiased overflow-x-hidden bg-[#fafaf9] text-[#18181b]">
            <JsonLd data={[faqSchema(homeFaqs), offerCatalogSchema()]} />

            <Navbar />

            <main>
                {/* ── HERO ── */}
                <AuroraBackgroundDemo />

                {/* ── SOCIAL PROOF ── */}
                <SocialProof01 />

                {/* ── SERVICES BENTO ── */}
                <EverythingYourBusinessNeeds />

                {/* ── SERVICE DIRECTORY (internal links to every service page) ── */}
                <ServiceDirectory />

                {/* ── COMPARISON ── */}
                <AkprintsVsOthers />

                {/* ── PROJECTS ── */}
                <ProjectsSection />

                {/* ── PRICE CALCULATOR ── */}
                <section id="pricing" className="py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#fafaf9] border-t border-zinc-200/80">
                    <div className="max-w-6xl mx-auto">
                        <div className="flex flex-col lg:flex-row lg:items-end lg:justify-between gap-5 pb-5 mb-8 sm:mb-10 border-b border-zinc-200/80">
                            <h2 className="max-w-xl text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 leading-[1.15]">
                                Website price calculator
                            </h2>
                            <p className="max-w-md text-[17px] sm:text-lg text-zinc-600 leading-relaxed font-normal">
                                Real starting prices, no hidden rate card. Pick what you need and send the estimate to us on WhatsApp.{' '}
                                <Link href="/pricing" className="font-medium text-zinc-900 underline underline-offset-4 decoration-zinc-300 hover:decoration-zinc-900">
                                    See full pricing
                                </Link>
                            </p>
                        </div>
                        <PriceCalculator />
                    </div>
                </section>

                {/* ── FAQ ── */}
                <section id="faq" className="py-24 sm:py-32 px-4 sm:px-6 lg:px-8 bg-[#fafaf9] border-y border-zinc-200/80 flex flex-col items-center justify-center">
                    <div className="w-full max-w-4xl mx-auto flex flex-col items-center">
                        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
                            <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 text-center">
                                Frequently Asked Questions
                            </h2>
                            <p className="text-base sm:text-lg text-zinc-600 mt-3.5 max-w-xl mx-auto text-center leading-relaxed font-normal">
                                Clear answers to how we build websites, run ad campaigns, and deliver work.
                            </p>
                        </div>

                        <div className="w-full flex justify-center">
                            <Faq
                                items={homeFaqs}
                                accent="#2563eb"
                                avatar={<Image src="/ak-logo-2.png" alt="" width={40} height={40} className="w-full h-full object-contain" />}
                                className="w-full max-w-4xl mx-auto"
                            />
                        </div>
                    </div>
                </section>

                {/* ── CONTACT CTA ── */}
                <CtaSection />
            </main>

            <Footer />
        </div>
    )
}
