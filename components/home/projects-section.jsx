import Image from 'next/image'
import { ArrowUpRight } from 'lucide-react'

const deliveredProjects = [
    {
        id: 1,
        title: 'Vastu Mentor',
        category: 'Consultation & Store',
        image: '/works/vm.png',
        alt: 'Vastu Mentor consultation booking website and online store built by AK Prints',
        description: 'Online consultation booking & spiritual product store with automated courier tracking.',
        link: 'https://vastumentor.com',
        buttonText: 'Visit Live Website',
        colSpan: 'col-span-12 lg:col-span-7',
        bgClass: 'bg-white',
    },
    {
        id: 2,
        title: 'MuskySnax',
        category: 'D2C Food Brand',
        image: '/works/ms.png',
        alt: 'MuskySnax D2C makhana e-commerce store built by AK Prints',
        description: 'Direct-to-consumer healthy makhana store with 1-click mobile checkout & WhatsApp alerts.',
        link: 'https://muskysnax.in',
        buttonText: 'Visit Live Website',
        colSpan: 'col-span-12 lg:col-span-5',
        bgClass: 'bg-[#fed802]',
    },
    {
        id: 3,
        title: 'Jai Builders',
        category: 'Luxury Architecture & Living',
        image: '/works/jbs.png',
        alt: 'Jai Builders luxury architecture and construction website designed by AK Prints',
        description: 'Two generations of master craftsmanship showcasing custom luxury villas, architectural marvels & turnkey residential projects.',
        link: '#contact',
        buttonText: 'View Case Study',
        colSpan: 'col-span-12',
        bgClass: 'bg-zinc-950',
    },
]

export default function ProjectsSection() {
    return (
        <section id="projects" className="relative py-20 sm:py-28 px-4 sm:px-6 lg:px-8 bg-[#fafaf9] border-t border-zinc-200/80 overflow-hidden">
            {/* Giant Faint "Projects" Watermark */}
            <div aria-hidden="true" className="absolute top-2 sm:top-6 inset-x-0 flex justify-center pointer-events-none select-none overflow-hidden z-0">
                <span className="text-[clamp(5rem,16vw,14rem)] font-extrabold tracking-tight text-zinc-950/[0.035] leading-none select-none">
                    Projects
                </span>
            </div>

            <div className="max-w-6xl mx-auto relative z-10">
                <div className="text-center max-w-2xl mx-auto mb-10 sm:mb-14">
                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-semibold tracking-tight text-zinc-900 leading-tight">
                        Projects we have delivered<span className="text-zinc-900">.</span>
                    </h2>
                    <p className="mt-3 text-base sm:text-[17px] text-zinc-600 leading-relaxed font-normal">
                        Real client websites and stores designed and coded by our team.
                    </p>
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-5 sm:gap-6 items-stretch">
                    {deliveredProjects.map((project) => {
                        const isWide = project.colSpan === 'col-span-12'
                        const isSmall = project.id === 2
                        const external = project.link.startsWith('http')

                        return (
                            <div
                                key={project.id}
                                className={`${project.colSpan} bg-[#ededeb] border border-zinc-200/90 rounded-[28px] sm:rounded-[34px] p-5 sm:p-7 flex flex-col justify-between gap-5 sm:gap-6 group hover:border-zinc-300 transition-all duration-300 shadow-2xs hover:shadow-xs`}
                            >
                                <div className={`flex ${isWide ? 'flex-col sm:flex-row sm:items-center justify-between' : 'flex-col sm:flex-row sm:items-start justify-between'} gap-4`}>
                                    <div className="space-y-1.5">
                                        <div className="flex items-center gap-2.5 flex-wrap">
                                            <span className="inline-flex items-center px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white/95 text-zinc-700 border border-zinc-200/80 shadow-2xs">
                                                {project.category}
                                            </span>
                                        </div>
                                        <h3 className="text-xl sm:text-2xl font-bold tracking-tight text-zinc-900">{project.title}</h3>
                                        <p className={`text-xs sm:text-sm text-zinc-600 leading-relaxed font-normal ${isWide ? 'max-w-2xl' : 'max-w-md'}`}>
                                            {project.description}
                                        </p>
                                    </div>

                                    <div className="shrink-0 self-start sm:self-auto">
                                        <a
                                            href={project.link}
                                            target={external ? '_blank' : undefined}
                                            rel={external ? 'noopener noreferrer' : undefined}
                                            className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white hover:bg-zinc-900 text-zinc-800 hover:text-white text-xs font-semibold border border-zinc-200/80 shadow-2xs hover:shadow-xs transition-all duration-200 group/btn cursor-pointer"
                                        >
                                            <span>{project.buttonText}</span>
                                            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-400 group-hover/btn:text-white group-hover/btn:translate-x-0.5 group-hover/btn:-translate-y-0.5 transition-transform" />
                                        </a>
                                    </div>
                                </div>

                                <a
                                    href={project.link}
                                    target={external ? '_blank' : undefined}
                                    rel={external ? 'noopener noreferrer' : undefined}
                                    aria-label={`Open ${project.title}`}
                                    className={`relative block w-full rounded-2xl sm:rounded-[22px] overflow-hidden ${project.bgClass} border border-zinc-200/80 shadow-xs hover:shadow-md transition-all duration-300 group/img cursor-pointer ${
                                        isWide
                                            ? 'aspect-[16/8] sm:aspect-[21/9]'
                                            : isSmall
                                                ? 'flex-1 min-h-[240px] sm:min-h-[280px] aspect-[16/10] sm:aspect-auto'
                                                : 'aspect-[16/10] sm:aspect-[16/9.5]'
                                    }`}
                                >
                                    <Image
                                        src={project.image}
                                        alt={project.alt}
                                        fill
                                        sizes={
                                            isWide
                                                ? '(max-width: 1280px) 100vw, 1152px'
                                                : isSmall
                                                    ? '(max-width: 1024px) 100vw, 500px'
                                                    : '(max-width: 1024px) 100vw, 700px'
                                        }
                                        className="object-cover object-top group-hover/img:scale-[1.018] transition-transform duration-500 ease-out"
                                    />

                                    <div className="absolute inset-0 bg-black/0 group-hover/img:bg-black/5 transition-colors duration-300 flex items-center justify-center pointer-events-none">
                                        <div className="opacity-0 group-hover/img:opacity-100 scale-95 group-hover/img:scale-100 transition-all duration-200 bg-white/95 backdrop-blur-md text-zinc-900 text-xs font-semibold px-4 py-2 rounded-full shadow-lg border border-zinc-200/80 flex items-center gap-1.5">
                                            <span>Open {project.title}</span>
                                            <ArrowUpRight className="w-3.5 h-3.5 text-zinc-500" />
                                        </div>
                                    </div>
                                </a>
                            </div>
                        )
                    })}
                </div>
            </div>
        </section>
    )
}
