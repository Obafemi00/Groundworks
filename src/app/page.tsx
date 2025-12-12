import dynamicImport from "next/dynamic";
import { generatePageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

// Critical above-the-fold components - load immediately
import Hero from "@/app/(sections)/home/Hero";
import WhatWeDo from "@/app/(sections)/home/WhatWeDo";

// Lazy load below-the-fold sections for better performance
const GroundworksMethod = dynamicImport(() => import("@/app/(sections)/home/GroundworksMethod"), { ssr: true });
const WhoItsFor = dynamicImport(() => import("@/app/(sections)/home/WhoItsFor"), { ssr: true });
const WhatYoullLearn = dynamicImport(() => import("@/app/(sections)/home/WhatYoullLearn"), { ssr: true });
const HowItWorks = dynamicImport(() => import("@/app/(sections)/home/HowItWorks"), { ssr: true });
const WhyFoundationsMatter = dynamicImport(() => import("@/app/(sections)/home/WhyFoundationsMatter"), { ssr: true });
const CTASection = dynamicImport(() => import("@/app/(sections)/home/CTASection"), { ssr: true });

export const metadata: Metadata = generatePageMetadata({
  title: "Home",
  description: "Founder Groundworks is an institute for first-time founders, teaching the core fundamentals every serious founder needs to understand. Structured programmes, practical frameworks, and disciplined guidance for building strong foundations.",
  path: "/",
  image: "/images/founder-groundworks/hero/hero-01.jpg",
  imageAlt: "Founders collaborating in a workshop setting at Founder Groundworks",
});

// Enable static generation for better performance
export const dynamic = "force-static";

export default function Home() {
  return (
    <div className="pt-0">
      <Hero />
      <WhatWeDo />
      <GroundworksMethod />
      <WhoItsFor />
      <WhatYoullLearn />
      <HowItWorks />
      <WhyFoundationsMatter />
      <CTASection />
    </div>
  );
}
