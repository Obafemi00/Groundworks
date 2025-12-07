import { Metadata } from "next";
import { SITE_CONFIG } from "./constants";

export function generatePageMetadata({
  title,
  description,
  path = "",
}: {
  title: string;
  description: string;
  path?: string;
}): Metadata {
  return {
    title: `${title} | ${SITE_CONFIG.name}`,
    description,
    openGraph: {
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
      url: `${SITE_CONFIG.url}${path}`,
      siteName: SITE_CONFIG.name,
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `${title} | ${SITE_CONFIG.name}`,
      description,
    },
  };
}

