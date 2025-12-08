import Hero from "@/app/(sections)/home/Hero";
import WhatWeDo from "@/app/(sections)/home/WhatWeDo";
import GroundworksMethod from "@/app/(sections)/home/GroundworksMethod";
import WhoItsFor from "@/app/(sections)/home/WhoItsFor";
import WhatYoullLearn from "@/app/(sections)/home/WhatYoullLearn";
import HowItWorks from "@/app/(sections)/home/HowItWorks";
import WhyFoundationsMatter from "@/app/(sections)/home/WhyFoundationsMatter";
import CTASection from "@/app/(sections)/home/CTASection";

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
