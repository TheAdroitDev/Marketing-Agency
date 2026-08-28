import { Schibsted_Grotesk, Instrument_Serif } from "next/font/google";
import "./globals.css";

const schibsted = Schibsted_Grotesk({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const instrumentSerif = Instrument_Serif({
  subsets: ["latin"],
  weight: ["400"],
  style: ["normal", "italic"],
  variable: "--font-serif",
  display: "swap",
});

export const metadata = {
  title: "akprints | Websites, Performance Ads & Digital Growth",
  description: "We build modern websites and run profitable ad campaigns on Google, YouTube & Meta.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="scroll-smooth">
      <body className={`${schibsted.variable} ${instrumentSerif.variable} font-sans antialiased bg-[#fafaf9] text-[#18181b]`}>
        {children}
      </body>
    </html>
  );
}
