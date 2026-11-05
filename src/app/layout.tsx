import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";
import { company } from "@/content/site";

const siteUrl = process.env.NEXT_PUBLIC_SITE_URL ?? "https://www.edelweissfin.com";

export const metadata: Metadata = {
  metadataBase: new URL(siteUrl),
  title: { default: "Edelweiss Financial Services | Ideas create, values protect", template: "%s | Edelweiss Financial Services" },
  description: company.description,
  openGraph: {
    type: "website",
    siteName: "Edelweiss Financial Services",
    locale: "en_IN",
    images: [{ url: "https://cdn1.edelweissfin.com/wp-content/uploads/2020/02/credit-1-1.jpg" }],
  },
  twitter: { card: "summary_large_image", site: "@EdelweissFin" },
  alternates: { canonical: "/" },
};

export const viewport: Viewport = { themeColor: "#0A2240", width: "device-width", initialScale: 1 };

const orgJsonLd = {
  "@context": "https://schema.org",
  "@type": "Corporation",
  name: company.name,
  url: siteUrl,
  logo: company.logo,
  description: company.description,
  tickerSymbol: "NSE: EDELWEISS",
  sameAs: company.social.map((s) => s.href),
  address: { "@type": "PostalAddress", streetAddress: "Edelweiss House, Off C.S.T. Road, Kalina", addressLocality: "Mumbai", postalCode: "400098", addressCountry: "IN" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-IN">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="" />
        <link
          rel="stylesheet"
          href="https://fonts.googleapis.com/css2?family=Albert+Sans:wght@400;500;600;700&family=Newsreader:opsz,wght@6..72,300;6..72,400;6..72,500&display=swap"
        />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(orgJsonLd) }} />
      </head>
      <body>
        <Header />
        <main id="main">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
