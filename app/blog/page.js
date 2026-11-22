import JsonLd from '@/components/site/json-ld'
import { PageShell, PageHero, Section, LinkCard } from '@/components/site/ui'
import { posts, postPath } from '@/lib/posts'
import { breadcrumbSchema, itemListSchema } from '@/lib/schema'
import { pageMetadata } from '@/lib/seo'

const crumbs = [
    { name: 'Home', path: '/' },
    { name: 'Blog', path: '/blog' },
]

export const metadata = pageMetadata({
    title: 'Blog: Website, Marketing & Printing Guides',
    description:
        'Practical guides from AK Prints on website costs in India, Google and Meta ads, SEO and AI search, and choosing print finishes. Written for business owners.',
    path: '/blog',
})

export default function BlogPage() {
    return (
        <PageShell>
            <JsonLd
                data={[
                    breadcrumbSchema(crumbs),
                    itemListSchema(
                        'AK Prints blog',
                        posts.map((p) => ({ name: p.title, path: postPath(p.slug) }))
                    ),
                ]}
            />
            <PageHero
                breadcrumbs={crumbs}
                eyebrow="Blog"
                title="Straight answers on websites, marketing and print"
                lead="Short, practical guides for business owners. No jargon, real prices where we have them."
            />
            <Section>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-3.5 sm:gap-4">
                    {posts.map((post) => (
                        <LinkCard key={post.slug} href={postPath(post.slug)} title={post.title} desc={post.description} meta={post.readingTime} />
                    ))}
                </div>
            </Section>
        </PageShell>
    )
}
