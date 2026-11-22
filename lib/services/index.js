import { webServices } from './web'
import { marketingServices } from './marketing'
import { designServices } from './design'
import { printServices } from './print'

export const categories = [
    {
        id: 'web',
        label: 'Web',
        title: 'Websites, stores and web apps',
        desc: 'Hand-coded websites, online stores and custom portals that load fast and convert.',
    },
    {
        id: 'marketing',
        label: 'Marketing',
        title: 'Ads and search',
        desc: 'Google, YouTube and Meta campaigns plus SEO for Google and AI answers.',
    },
    {
        id: 'design',
        label: 'Design',
        title: 'Brand and interface design',
        desc: 'Logos, brand identities, ad creatives and clean product interfaces.',
    },
    {
        id: 'print',
        label: 'Print',
        title: 'Printing and signage',
        desc: 'Visiting cards, stationery, banners, packaging and illuminated signboards.',
    },
]

export const services = [...webServices, ...marketingServices, ...designServices, ...printServices]

export const getService = (slug) => services.find((s) => s.slug === slug)

export const servicesByCategory = (id) => services.filter((s) => s.category === id)

export const servicePath = (slug) => `/services/${slug}`
