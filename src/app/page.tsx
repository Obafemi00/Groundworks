import Hero from "@/app/(sections)/home/Hero";
import WhatWeDo from "@/app/(sections)/home/WhatWeDo";
import GroundworksMethod from "@/app/(sections)/home/GroundworksMethod";
import WhoItsFor from "@/app/(sections)/home/WhoItsFor";
import WhatYoullLearn from "@/app/(sections)/home/WhatYoullLearn";
import HowItWorks from "@/app/(sections)/home/HowItWorks";
import WhyFoundationsMatter from "@/app/(sections)/home/WhyFoundationsMatter";
import CTASection from "@/app/(sections)/home/CTASection";
import { generatePageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Home",
  description: "Founder Groundworks is an institute for first-time founders, teaching the core fundamentals every serious founder needs to understand. Structured programmes, practical frameworks, and disciplined guidance for building strong foundations.",
  path: "/",
  image: "/images/founder-groundworks/hero/hero-01.jpg",
  imageAlt: "Founders collaborating in a workshop setting at Founder Groundworks",
});

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
