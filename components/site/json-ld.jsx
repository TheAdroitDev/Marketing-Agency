// Renders one or more JSON-LD blocks. Server component.
export default function JsonLd({ data }) {
    const blocks = Array.isArray(data) ? data : [data]
    return (
        <>
            {blocks.filter(Boolean).map((block, i) => (
                <script
                    key={i}
                    type="application/ld+json"
                    dangerouslySetInnerHTML={{ __html: JSON.stringify(block).replace(/</g, '\\u003c') }}
                />
            ))}
        </>
    )
}
