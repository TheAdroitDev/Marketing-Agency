'use client'

import { useEffect, useRef } from 'react'
import dynamic from 'next/dynamic'
import MagneticButtonDemo from '@/components/magnetic-button-demo'
import { site } from '@/lib/site'

const Globe3D = dynamic(() => import('@/components/ui/3d-globe').then(m => m.Globe3D), {
    ssr: false,
    loading: () => null,
})

const markers = [
    { lat: 28.6139, lng: 77.209, src: 'https://assets.aceternity.com/avatars/6.webp', label: 'New Delhi' },
    { lat: 19.076, lng: 72.8777, src: 'https://assets.aceternity.com/avatars/4.webp', label: 'Mumbai' },
    { lat: 12.9716, lng: 77.5946, src: 'https://assets.aceternity.com/avatars/5.webp', label: 'Bengaluru' },
    { lat: 17.385, lng: 78.4867, src: 'https://assets.aceternity.com/avatars/8.webp', label: 'Hyderabad' },
    { lat: 22.5726, lng: 88.3639, src: 'https://assets.aceternity.com/avatars/9.webp', label: 'Kolkata' },
    { lat: 23.0225, lng: 72.5714, src: 'https://assets.aceternity.com/avatars/11.webp', label: 'Ahmedabad' },
    { lat: 40.7128, lng: -74.006, src: 'https://assets.aceternity.com/avatars/1.webp', label: 'New York' },
    { lat: 51.5074, lng: -0.1278, src: 'https://assets.aceternity.com/avatars/2.webp', label: 'London' },
    { lat: 35.6762, lng: 139.6503, src: 'https://assets.aceternity.com/avatars/3.webp', label: 'Tokyo' },
    { lat: -33.8688, lng: 151.2093, src: 'https://assets.aceternity.com/avatars/7.webp', label: 'Sydney' },
    { lat: 48.8566, lng: 2.3522, src: 'https://assets.aceternity.com/avatars/1.webp', label: 'Paris' },
    { lat: 25.2048, lng: 55.2708, src: 'https://assets.aceternity.com/avatars/10.webp', label: 'Dubai' },
    { lat: 1.3521, lng: 103.8198, src: 'https://assets.aceternity.com/avatars/12.webp', label: 'Singapore' },
    { lat: 37.5665, lng: 126.978, src: 'https://assets.aceternity.com/avatars/13.webp', label: 'Seoul' },
]

// Cal.com embed loader. Runs once, and only when the CTA is about to be seen,
// so the third-party script never competes with the first paint.
let calLoaded = false
function loadCal() {
    if (calLoaded || typeof window === 'undefined') return
    calLoaded = true
    ;(function (C, A, L) {
        let p = function (a, ar) { a.q.push(ar) }
        let d = C.document
        C.Cal = C.Cal || function () {
            let cal = C.Cal
            let ar = arguments
            if (!cal.loaded) {
                cal.ns = {}
                cal.q = cal.q || []
                d.head.appendChild(d.createElement('script')).src = A
                cal.loaded = true
            }
            if (ar[0] === L) {
                let api = function () { p(api, arguments) }
                let namespace = ar[1]
                api.q = api.q || []
                typeof namespace === 'string' ? (cal.ns[namespace] = api) && p(api, ar) : p(cal, ar)
                return
            }
            p(cal, ar)
        }
    })(window, 'https://app.cal.com/embed/embed.js', 'init')

    window.Cal('init', { origin: 'https://cal.com' })
    window.Cal('ui', { styles: { branding: { brandColor: '#2563eb' } }, hideEventTypeDetails: false, layout: 'month_view' })
}

export default function CtaSection() {
    const sectionRef = useRef(null)

    useEffect(() => {
        const node = sectionRef.current
        if (!node) return
        if (!('IntersectionObserver' in window)) {
            loadCal()
            return
        }
        const observer = new IntersectionObserver(
            (entries) => {
                if (entries.some((e) => e.isIntersecting)) {
                    loadCal()
                    observer.disconnect()
                }
            },
            { rootMargin: '600px 0px' }
        )
        observer.observe(node)
        return () => observer.disconnect()
    }, [])

    return (
        <section id="contact" ref={sectionRef} className="py-12 sm:py-16 bg-white">
            <div className="relative mx-auto max-w-6xl overflow-hidden rounded-[28px] sm:rounded-[36px] bg-[#fafaf9] min-h-[400px] sm:min-h-[440px]">
                {/* Left content */}
                <div className="relative z-20 p-6 sm:p-10 lg:p-14 max-w-lg space-y-5 sm:space-y-6">
                    <h2 className="text-2xl sm:text-4xl lg:text-5xl font-extrabold tracking-tight text-zinc-950 leading-[1.12]">
                        Make Your Website a Sales Machine
                    </h2>

                    <p className="text-sm sm:text-base text-zinc-600 leading-relaxed max-w-sm">
                        Book a free 30-minute call. Tell us what you need and we&apos;ll figure out the best way to make it happen.
                    </p>

                    <div className="pt-1">
                        <div
                            role="button"
                            tabIndex={0}
                            data-cal-link={site.calLink}
                            onPointerEnter={loadCal}
                            onFocus={loadCal}
                            onKeyDown={(e) => {
                                if (e.key === 'Enter' || e.key === ' ') {
                                    e.preventDefault()
                                    e.currentTarget.click()
                                }
                            }}
                            className="inline-block cursor-pointer rounded-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-blue-600/40"
                            aria-label="Book a free 30-minute call with AK Prints"
                        >
                            <MagneticButtonDemo text="Book a Free Call" variant="blue" />
                        </div>
                    </div>
                </div>

                {/* Globe — bottom-right corner, half visible, markers clickable and hoverable */}
                <div aria-hidden="true" className="absolute -right-72 -bottom-96 z-10 w-[640px] h-[640px] md:-bottom-80 md:w-[720px] md:h-[720px]">
                    <Globe3D
                        className="h-full w-full"
                        markers={markers}
                        config={{
                            bumpScale: 5,
                            autoRotateSpeed: 1.1,
                            showAtmosphere: false,
                            enableZoom: false,
                            enablePan: false,
                        }}
                    />
                </div>
            </div>
        </section>
    )
}
