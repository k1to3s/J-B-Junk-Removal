import type { Metadata } from "next";
import { Plus_Jakarta_Sans } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import MobileStickyCta from "@/components/MobileStickyCta";
import CookieBanner from "@/components/CookieBanner";
import { COMPANY_INFO } from "@/lib/constants";

const plusJakartaSans = Plus_Jakarta_Sans({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-sans",
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://jandbjunkremoval.com"),
  title: {
    default: "J&B Junk Removal | Temecula, CA",
    template: "%s | J&B Junk Removal",
  },
  description:
    "Fast, upfront junk removal in Temecula, Murrieta, and Southwest Riverside County.",
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    name: COMPANY_INFO.name,
    legalName: COMPANY_INFO.legalName,
    description: COMPANY_INFO.subheadline,
    url: "https://jandbjunkremoval.com",
    telephone: "+1-951-555-5865",
    address: {
      "@type": "PostalAddress",
      addressLocality: "Temecula",
      addressRegion: "CA",
      postalCode: "92591",
      addressCountry: "US",
    },
  };

  return (
    <html lang="en" className={plusJakartaSans.variable}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col bg-white text-slate-900 antialiased selection:bg-sky-200 selection:text-sky-950">
        <a
          href="#main-content"
          className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:px-4 focus:py-2 focus:bg-sky-600 focus:text-white focus:rounded-lg"
        >
          Skip to main content
        </a>

        <Header />
        <main id="main-content" className="flex-1 focus:outline-none" tabIndex={-1}>
          {children}
        </main>
        <Footer />
        <MobileStickyCta />
        <CookieBanner />
      </body>
    </html>
  );
}
