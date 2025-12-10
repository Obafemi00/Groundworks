import PageHero from "@/app/(components)/PageHero";
import WhoWePartnerWith from "@/app/(sections)/partnerships/WhoWePartnerWith";
import PartnershipBenefits from "@/app/(sections)/partnerships/PartnershipBenefits";
import WhyFG from "@/app/(sections)/partnerships/WhyFG";
import PartnershipCTA from "@/app/(sections)/partnerships/PartnershipCTA";
import { generatePageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Partnerships",
  description: "Collaborate with Founder Groundworks to support founders and build stronger companies. We partner with economic development bodies, innovation hubs, universities, and professional associations.",
  path: "/partnerships",
  image: "/images/founder-groundworks/partnerships/partnerships-01.jpg",
  imageAlt: "Professional collaboration and partnership meeting at Founder Groundworks",
});

export default function PartnershipsPage() {
  return (
    <div className="pt-20">
      <PageHero 
        title="Partnering to develop serious founders." 
        subtitle="Founder Groundworks collaborates with organisations that care about cultivating disciplined, capable founders – not just creating noise."
        withImage={true}
        imageSrc="/images/founder-groundworks/partnerships/partnerships-01.jpg"
        imageAlt="Professional collaboration and partnership meeting"
      />
      <WhoWePartnerWith />
      <PartnershipBenefits />
      <WhyFG />
      <PartnershipCTA />
    </div>
  );
}

