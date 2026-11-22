import { site } from '@/lib/site'

// AI crawlers are explicitly allowed so assistants can read and cite the site (GEO).
const aiCrawlers = [
    'GPTBot',
    'OAI-SearchBot',
    'ChatGPT-User',
    'ClaudeBot',
    'Claude-SearchBot',
    'Claude-User',
    'PerplexityBot',
    'Perplexity-User',
    'Google-Extended',
    'Applebot-Extended',
    'Amazonbot',
    'meta-externalagent',
    'CCBot',
]

const disallow = ['/tree', '/api/']

export default function robots() {
    return {
        rules: [
            { userAgent: '*', allow: '/', disallow },
            { userAgent: aiCrawlers, allow: '/', disallow },
        ],
        sitemap: `${site.url}/sitemap.xml`,
        host: site.url,
    }
}
