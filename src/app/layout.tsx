import "../styles/globals.css";
import type { Metadata } from "next";
import Header from "@/app/(components)/Header";
import Footer from "@/app/(components)/Footer";
import { generatePageMetadata } from "@/lib/seo";
import { SITE_CONFIG } from "@/lib/constants";

const baseMetadata = generatePageMetadata({
  title: "Home",
  description: "Building Founders from the Ground Up. Institutional support for founders who want to build responsibly and sustainably.",
});

export const metadata: Metadata = {
  ...baseMetadata,
  metadataBase: new URL(SITE_CONFIG.url),
  title: {
    default: `${SITE_CONFIG.name} | ${SITE_CONFIG.tagline}`,
    template: `%s | ${SITE_CONFIG.name}`,
  },
  description: SITE_CONFIG.description,
  keywords: [
    "founder education",
    "first-time founders",
    "startup training",
    "founder development",
    "entrepreneurship education",
    "founder foundations",
    "startup fundamentals",
    "founder programmes",
    "business foundations",
    "founder training",
  ],
  authors: [{ name: SITE_CONFIG.name }],
  creator: SITE_CONFIG.name,
  publisher: SITE_CONFIG.name,
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  icons: {
    icon: "/logo/Founder Groundworks Logo_BlueBG.png",
    shortcut: "/logo/Founder Groundworks Logo_BlueBG.png",
    apple: "/logo/Founder Groundworks Logo_BlueBG.png",
  },
  manifest: "/site.webmanifest",
};

export const viewport = {
  themeColor: "#0E1F36",
  colorScheme: "light",
  width: "device-width",
  initialScale: 1,
};

// Structured Data (JSON-LD)
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: SITE_CONFIG.name,
  description: SITE_CONFIG.description,
  url: SITE_CONFIG.url,
  logo: `${SITE_CONFIG.url}/logo/Founder Groundworks Transparent White.png`,
  contactPoint: {
    "@type": "ContactPoint",
    email: SITE_CONFIG.email,
    contactType: "General Inquiries",
    areaServed: "Worldwide",
    availableLanguage: "English",
  },
  sameAs: [],
  address: {
    "@type": "PostalAddress",
    addressCountry: "GB",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: SITE_CONFIG.name,
  url: SITE_CONFIG.url,
  description: SITE_CONFIG.description,
  publisher: {
    "@type": "Organization",
    name: SITE_CONFIG.name,
  },
};

const contactPointSchema = {
  "@context": "https://schema.org",
  "@type": "ContactPage",
  name: "Contact Founder Groundworks",
  url: `${SITE_CONFIG.url}/contact`,
  description: "Get in touch with Founder Groundworks to learn more about our programmes and how we can help you build strong foundations.",
  mainEntity: {
    "@type": "ContactPoint",
    email: SITE_CONFIG.email,
    contactType: "Customer Service",
    areaServed: "Worldwide",
    availableLanguage: "English",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Preload critical fonts */}
        <link
          rel="preload"
          href="/fonts/cormorant-garamond.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        <link
          rel="preload"
          href="/fonts/inter-variable.woff2"
          as="font"
          type="font/woff2"
          crossOrigin="anonymous"
        />
        {/* Preload hero image */}
        <link
          rel="preload"
          href="/images/founder-groundworks/hero/hero-01.jpg"
          as="image"
        />
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(contactPointSchema) }}
        />
      </head>
      <body 
        className="min-h-screen bg-fg-white text-fg-navy antialiased"
        suppressHydrationWarning
      >
        <Header />
        <main>{children}</main>
        <Footer />
      </body>
    </html>
  );
}

