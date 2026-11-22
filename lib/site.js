// ─────────────────────────────────────────────────────────────
// Single source of truth for business facts.
// Everything SEO-related (metadata, schema, sitemap, llms.txt,
// footer, contact page) reads from here. Edit once, updates everywhere.
// ─────────────────────────────────────────────────────────────

// Keeps digits only. A bare 10-digit Indian mobile number gets the 91 country code,
// so wa.me links, tel: links and schema always use the full international number.
const digits = (v) => {
    const d = (v || '').replace(/[^0-9]/g, '').replace(/^0+/, '')
    return d.length === 10 ? `91${d}` : d
}

// Set NEXT_PUBLIC_SITE_URL in .env when the domain changes.
const siteUrl = (process.env.NEXT_PUBLIC_SITE_URL || 'https://akprints.online').replace(/\/+$/, '')

const waNumber = digits(process.env.NEXT_PUBLIC_WA_NUMBER || process.env.WA_NUMBER)
// Optional separate landline/mobile for calls; falls back to the WhatsApp number.
const phoneNumber = digits(process.env.NEXT_PUBLIC_PHONE_NUMBER) || waNumber

export const site = {
    name: 'AK Prints',
    legalName: 'AK Prints',
    url: siteUrl,
    tagline: 'Websites, ads, design and print for growing brands',
    description:
        'AK Prints is a digital marketing, web design and printing agency in Ludhiana, Punjab. We build websites and online stores, run Google, YouTube and Meta ad campaigns, do SEO, design logos and brand identities, and print visiting cards, banners, packaging and signboards.',
    email: 'akprintsdev@gmail.com',
    waNumber,
    phoneNumber,
    // E.164 for schema and tel: links. Empty until a number is set in .env.
    phoneE164: phoneNumber ? `+${phoneNumber}` : '',
    address: {
        street: '#93-94, New BRS Nagar, Street No. 4, Near Crown Inn',
        locality: 'Ludhiana',
        region: 'Punjab',
        regionCode: 'PB',
        postalCode: '141012',
        country: 'India',
        countryCode: 'IN',
    },
    // Paste exact coordinates from Google Maps (right-click the pin) to enable geo schema.
    geo: { latitude: '', longitude: '' },
    // Paste your Google Business Profile share link once the listing is verified.
    googleBusinessUrl: '',
    hours: {
        days: ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'],
        opens: '10:00',
        closes: '19:00',
        label: 'Open every day, 10:00 AM to 7:00 PM',
    },
    // Only real profile URLs. Anything left empty is hidden and kept out of schema.
    socials: {
        instagram: '',
        linkedin: 'https://www.linkedin.com/in/shivam-verma-079780312/',
        x: 'https://twitter.com/theadroitdev',
        youtube: '',
        facebook: '',
    },
    calLink: 'shivam-verma-i3fold/30min',
    areasServed: ['Ludhiana', 'Chandigarh', 'Mohali', 'Jalandhar', 'Amritsar', 'Patiala', 'Punjab', 'India'],
    // Search Console / Bing verification tokens (optional).
    verification: {
        google: process.env.NEXT_PUBLIC_GSC_VERIFICATION || '',
        bing: process.env.NEXT_PUBLIC_BING_VERIFICATION || '',
    },
}

export const fullAddress = `${site.address.street}, ${site.address.locality}, ${site.address.region} ${site.address.postalCode}, ${site.address.country}`

export const absoluteUrl = (path = '/') => `${site.url}${path.startsWith('/') ? path : `/${path}`}`

export const waLink = (message = "Hi AK Prints! I'd like to discuss a project with your team.") => {
    const base = site.waNumber ? `https://wa.me/${site.waNumber}` : 'https://wa.me/'
    return `${base}?text=${encodeURIComponent(message)}`
}

export const telLink = site.phoneE164 ? `tel:${site.phoneE164}` : ''

export const mapsEmbedUrl = `https://www.google.com/maps?q=${encodeURIComponent(`AK Prints, ${fullAddress}`)}&output=embed`
export const mapsDirectionsUrl =
    site.googleBusinessUrl || `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent(fullAddress)}`

export const sameAs = [...Object.values(site.socials), site.googleBusinessUrl].filter(Boolean)

export const formatINR = (n) => `₹${Number(n).toLocaleString('en-IN')}`
