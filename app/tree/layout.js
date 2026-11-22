// Internal component demo page: keep it out of search results.
export const metadata = {
    title: 'File tree demo',
    robots: { index: false, follow: false },
}

export default function TreeLayout({ children }) {
    return children
}
