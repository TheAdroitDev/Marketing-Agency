import { Inter, Instrument_Serif } from "next/font/google";
import "./globals.css";
import JsonLd from "@/components/site/json-ld";
import { site } from "@/lib/site";
import { organizationSchema, websiteSchema } from "@/lib/schema";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: "Digital Marketing & Printing Agency in Ludhiana | AK Prints",
    template: `%s | ${site.name}`,
  },
  description: site.description,
  applicationName: site.name,
  authors: [{ name: site.name, url: site.url }],
  creator: site.name,
  publisher: site.name,
  category: "Marketing agency",
  formatDetection: { telephone: true, address: true, email: true },
  openGraph: {
    type: "website",
    siteName: site.name,
    locale: "en_IN",
    url: site.url,
    title: "Digital Marketing & Printing Agency in Ludhiana | AK Prints",
    description: site.description,
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Marketing & Printing Agency in Ludhiana | AK Prints",
    description: site.description,
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
      "max-video-preview": -1,
    },
  },
  verification: {
    google: site.verification.google || undefined,
    other: site.verification.bing ? { "msvalidate.01": site.verification.bing } : undefined,
  },
  other: {
    "geo.region": `${site.address.countryCode}-${site.address.regionCode}`,
    "geo.placename": site.address.locality,
  },
};

export const viewport = {
  themeColor: "#fafaf9",
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({ children }) {
  return (
    <html lang="en-IN" className="scroll-smooth" data-scroll-behavior="smooth">
      <body className={`${inter.variable} ${instrumentSerif.variable} font-sans antialiased bg-[#fafaf9] text-[#18181b]`}>
        <JsonLd data={[organizationSchema(), websiteSchema()]} />
        {children}
      </body>
    </html>
  );
}
