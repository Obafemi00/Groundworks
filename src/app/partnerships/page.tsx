import PageHero from "@/app/(components)/PageHero";
import WhoWePartnerWith from "@/app/(sections)/partnerships/WhoWePartnerWith";
import PartnershipBenefits from "@/app/(sections)/partnerships/PartnershipBenefits";
import WhyFG from "@/app/(sections)/partnerships/WhyFG";
import PartnershipCTA from "@/app/(sections)/partnerships/PartnershipCTA";
import { generatePageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Partnerships",
  description: "Collaborate with us to support founders and build stronger companies.",
  path: "/partnerships",
});

export default function PartnershipsPage() {
  return (
    <div className="pt-20">
      <PageHero 
        title="Partnering to develop serious founders." 
        subtitle="Founder Groundworks collaborates with organisations that care about cultivating disciplined, capable founders – not just creating noise."
      />
      <WhoWePartnerWith />
      <PartnershipBenefits />
      <WhyFG />
      <PartnershipCTA />
    </div>
  );
}

