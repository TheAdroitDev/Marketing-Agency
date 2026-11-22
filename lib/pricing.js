// Published base prices (INR). Used by the calculator, pricing page,
// service pages, Offer schema and llms.txt. Only real, owner-confirmed numbers.

export const websitePlans = [
    {
        id: 'basic',
        group: 'website',
        name: 'Basic Website',
        price: 20000,
        summary: 'The most affordable way to get online. Clean, fast pages hand-coded in HTML, CSS and JavaScript.',
        features: [
            'Hand-coded HTML, CSS and JavaScript',
            'Mobile-friendly layout',
            'WhatsApp and call buttons',
        ],
    },
    {
        id: 'standard',
        group: 'website',
        name: 'Standard Website',
        price: 30000,
        summary: 'Frontend website with enhanced SEO, a 100/100 Lighthouse SEO report and a higher level of design polish.',
        features: [
            'Everything in Basic',
            'Enhanced on-page SEO and schema markup',
            '100/100 Lighthouse SEO report, guaranteed',
            'Enhanced design taste and animation',
            'Frontend only (no custom backend)',
        ],
        featured: true,
    },
]

export const ecommercePlans = [
    {
        id: 'store',
        group: 'ecommerce',
        name: 'Online Store',
        price: 70000,
        summary: 'A complete storefront with product pages, cart and online payments.',
        features: ['Custom storefront design', 'Product, cart and checkout pages', 'Online payment gateway setup', 'Mobile-first checkout'],
    },
    {
        id: 'store-admin',
        group: 'ecommerce',
        name: 'Store + Admin Panel',
        price: 110000,
        summary: 'Everything in Online Store plus your own admin panel to manage products, orders and customers.',
        features: ['Everything in Online Store', 'Admin panel for products and orders', 'Customer and inventory management', 'Order status tracking'],
        featured: true,
    },
    {
        id: 'store-automation',
        group: 'ecommerce',
        name: 'Store + Admin + Automation',
        price: 130000,
        summary: 'Adds email marketing and WhatsApp order notifications on top of the store and admin panel.',
        features: ['Everything in Store + Admin Panel', 'Email marketing setup', 'WhatsApp order notifications', 'Automated customer updates'],
    },
    {
        id: 'store-custom',
        group: 'ecommerce',
        name: 'Fully Custom Store',
        price: 150000,
        priceIsMax: true,
        summary: 'For stores that need custom features or integrations beyond the standard build. This is the top of our range.',
        features: ['Everything in Store + Admin + Automation', 'Custom features and integrations', 'Scoped together on a call'],
    },
]

export const allPlans = [...websitePlans, ...ecommercePlans]

// Services priced per brief rather than a fixed rate card.
export const quoteOnly = [
    'Google, YouTube and Meta ad campaigns',
    'SEO and local SEO',
    'Logo design and brand identity',
    'Visiting cards, banners, packaging and signboards',
]

export const priceRange = { low: websitePlans[0].price, high: ecommercePlans[ecommercePlans.length - 1].price }
