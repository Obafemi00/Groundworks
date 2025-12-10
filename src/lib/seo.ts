import { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

export function generatePageMetadata({
  title,
  description,
  path = "",
  image,
  imageAlt,
}: {
  title: string;
  description: string;
  path?: string;
  image?: string;
  imageAlt?: string;
}): Metadata {
  const fullTitle = `${title} | ${SITE_CONFIG.name}`;
  const canonicalUrl = `${SITE_CONFIG.url}${path}`;
  const ogImage = image || `${SITE_CONFIG.url}/images/founder-groundworks/hero/hero-01.jpg`;
  const ogImageAlt = imageAlt || `${SITE_CONFIG.name} - ${title}`;

  return {
    title: fullTitle,
    description,
    alternates: {
      canonical: canonicalUrl,
    },
    openGraph: {
      title: fullTitle,
      description,
      url: canonicalUrl,
      siteName: SITE_CONFIG.name,
      type: "website",
      images: [
        {
          url: ogImage,
          width: 1200,
          height: 630,
          alt: ogImageAlt,
        },
      ],
      locale: "en_GB",
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description,
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  };
}

