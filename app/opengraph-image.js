import { ImageResponse } from 'next/og'
import { site } from '@/lib/site'

export const alt = 'AK Prints: digital marketing, web design and printing agency in Ludhiana'
export const size = { width: 1200, height: 630 }
export const contentType = 'image/png'

const pills = ['Websites', 'Google & Meta Ads', 'SEO', 'Branding', 'Printing']

export default function OpengraphImage() {
    return new ImageResponse(
        (
            <div
                style={{
                    width: '100%',
                    height: '100%',
                    display: 'flex',
                    flexDirection: 'column',
                    justifyContent: 'space-between',
                    padding: 72,
                    backgroundColor: '#fafaf9',
                    backgroundImage: 'radial-gradient(900px 500px at 85% 0%, rgba(37,99,235,0.16), rgba(250,250,249,0))',
                    color: '#18181b',
                }}
            >
                <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between' }}>
                    <div style={{ display: 'flex', alignItems: 'center', fontSize: 34, fontWeight: 700, letterSpacing: -1 }}>
                        <div style={{ width: 18, height: 18, borderRadius: 6, backgroundColor: '#2563eb', marginRight: 14 }} />
                        {site.name}
                    </div>
                    <div style={{ display: 'flex', fontSize: 24, color: '#52525b' }}>Ludhiana, Punjab</div>
                </div>

                <div style={{ display: 'flex', flexDirection: 'column' }}>
                    <div style={{ display: 'flex', fontSize: 84, fontWeight: 700, letterSpacing: -3.5, lineHeight: 1 }}>Your Ideas. Our Craft.</div>
                    <div style={{ display: 'flex', fontSize: 84, fontWeight: 700, letterSpacing: -3.5, lineHeight: 1.1, color: '#2563eb' }}>Real Results.</div>
                    <div style={{ display: 'flex', marginTop: 28, fontSize: 30, color: '#3f3f46' }}>
                        Digital marketing, web design and printing agency
                    </div>
                </div>

                <div style={{ display: 'flex' }}>
                    {pills.map((pill) => (
                        <div
                            key={pill}
                            style={{
                                display: 'flex',
                                marginRight: 12,
                                padding: '10px 20px',
                                borderRadius: 14,
                                backgroundColor: '#ffffff',
                                border: '1px solid #e4e4e7',
                                fontSize: 24,
                                color: '#27272a',
                            }}
                        >
                            {pill}
                        </div>
                    ))}
                </div>
            </div>
        ),
        size
    )
}
