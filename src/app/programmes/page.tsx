import PageHero from "@/app/(components)/PageHero";
import ProgrammeList from "@/app/(sections)/programmes/ProgrammeList";
import { generatePageMetadata } from "@/lib/seo";
import type { Metadata } from "next";

export const metadata: Metadata = generatePageMetadata({
  title: "Programmes",
  description: "Explore our comprehensive programmes designed to build strong foundations for founders at every stage. From the Foundations Programme to Groundworks Clinics and Founder Readiness Reviews.",
  path: "/programmes",
  image: "/images/founder-groundworks/programmes/programmes-01.jpg",
  imageAlt: "Founders participating in a structured workshop session at Founder Groundworks",
});

// Enable static generation for better performance
export const dynamic = "force-static";

export default function ProgrammesPage() {
  return (
    <div className="pt-20">
      <PageHero 
        title="Programmes designed for first-time founders." 
        subtitle="Three stages. One goal: helping you operate as a serious founder, from the very beginning."
        withImage={true}
        imageSrc="/images/founder-groundworks/programmes/programmes-01.jpg"
        imageAlt="Founders participating in a structured workshop session"
      />
      <ProgrammeList />
    </div>
  );
}

