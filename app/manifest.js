import { site } from '@/lib/site'

export default function manifest() {
    return {
        name: `${site.name} | Digital Marketing & Printing Agency in Ludhiana`,
        short_name: site.name,
        description: site.description,
        start_url: '/',
        display: 'standalone',
        background_color: '#fafaf9',
        theme_color: '#fafaf9',
        lang: 'en-IN',
        icons: [{ src: '/favicon.ico', sizes: 'any', type: 'image/x-icon' }],
    }
}
