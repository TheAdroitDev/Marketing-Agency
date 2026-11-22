import Link from 'next/link'
import { notFound } from 'next/navigation'
import JsonLd from '@/components/site/json-ld'
import { PageShell, PageHero, Section, LinkCard, Prose } from '@/components/site/ui'
import { posts, getPost, postPath } from '@/lib/posts'
import { getService, servicePath } from '@/lib/services'
import { articleSchema, breadcrumbSchema } from '@/lib/schema'
import { pageMetadata } from '@/lib/seo'

export const dynamicParams = false

export function generateStaticParams() {
    return posts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({ params }) {
    const { slug } = await params
    const post = getPost(slug)
    if (!post) return {}
    return {
        ...pageMetadata({ title: post.title, description: post.description, path: postPath(post.slug), type: 'article' }),
    }
}

// Renders [text](/path) inline links inside a plain string.
function Inline({ text }) {
    const parts = text.split(/(\[[^\]]+\]\([^)]+\))/g)
    return parts.map((part, i) => {
        const match = part.match(/^\[([^\]]+)\]\(([^)]+)\)$/)
        if (!match) return part
        return (
            <Link key={i} href={match[2]}>
                {match[1]}
            </Link>
        )
    })
}

const formatDate = (iso) => new Date(`${iso}T00:00:00Z`).toLocaleDateString('en-IN', { day: 'numeric', month: 'long', year: 'numeric', timeZone: 'UTC' })

export default async function BlogPostPage({ params }) {
    const { slug } = await params
    const post = getPost(slug)
    if (!post) notFound()

    const path = postPath(post.slug)
    const crumbs = [
        { name: 'Home', path: '/' },
        { name: 'Blog', path: '/blog' },
        { name: post.title, path },
    ]
    const related = post.related.map(getService).filter(Boolean)

    return (
        <PageShell>
            <JsonLd data={[breadcrumbSchema(crumbs), articleSchema(post, path)]} />

            <PageHero breadcrumbs={crumbs.slice(0, 2).concat({ name: 'Article', path })} eyebrow={post.readingTime} title={post.title}>
                <p className="text-[14px] text-zinc-500">
                    By AK Prints · <time dateTime={post.date}>{formatDate(post.date)}</time>
                </p>
            </PageHero>

            <Section>
                <article>
                    <Prose>
                        {post.blocks.map((block, i) => {
                            if (block.h2) return <h2 key={i}>{block.h2}</h2>
                            if (block.ul)
                                return (
                                    <ul key={i}>
                                        {block.ul.map((item) => (
                                            <li key={item}>
                                                <Inline text={item} />
                                            </li>
                                        ))}
                                    </ul>
                                )
                            return (
                                <p key={i} className={i === 0 ? 'text-[19px] leading-[1.7] text-zinc-900' : undefined}>
                                    <Inline text={block.p} />
                                </p>
                            )
                        })}
                    </Prose>
                </article>
            </Section>

            <Section title="Related services">
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-3.5 sm:gap-4">
                    {related.map((s) => (
                        <LinkCard key={s.slug} href={servicePath(s.slug)} title={s.name} desc={s.navDesc} />
                    ))}
                </div>
            </Section>
        </PageShell>
    )
}
