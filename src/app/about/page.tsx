import PageHero from "@/app/(components)/PageHero";
import MissionVision from "@/app/(sections)/about/MissionVision";
import WhyWeExist from "@/app/(sections)/about/WhyWeExist";
import Philosophy from "@/app/(sections)/about/Philosophy";
import FGFramework from "@/app/(sections)/about/FGFramework";
import Values from "@/app/(sections)/about/Values";
import { generatePageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "About",
  description: "Learn about Founder Groundworks, our mission, vision, and the values that guide everything we do. An institute dedicated to building foundational capability in first-time founders through structured education and disciplined guidance.",
  path: "/about",
  image: "/images/founder-groundworks/about/about-01.jpg",
  imageAlt: "Diverse founders collaborating in a professional setting at Founder Groundworks",
});

// Enable static generation for better performance
export const dynamic = "force-static";

export default function AboutPage() {
  return (
    <div className="pt-20">
      <PageHero 
        title="An institute for first-time founders." 
        subtitle="Founder Groundworks exists to give serious, early-stage founders the structure, language and discipline they were never formally taught."
        withImage={true}
        imageSrc="/images/founder-groundworks/about/about-01.jpg"
        imageAlt="Diverse founders collaborating in a professional setting"
      />
      <MissionVision />
      <WhyWeExist />
      <Philosophy />
      <FGFramework />
      <Values />
    </div>
  );
}

