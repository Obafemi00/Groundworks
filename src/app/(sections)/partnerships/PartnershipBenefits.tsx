"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import HeadingBlock from "@/components/typography/HeadingBlock";
import StaggerChildren from "@/components/animations/StaggerChildren";
import SectionImage from "@/components/media/SectionImage";

export default function PartnershipBenefits() {
  const offerings = [
    {
      number: "1",
      title: "Tailored Founder Foundations Training",
      description: "We can deliver our Foundations curriculum to your community or cohort, adapted to your context and strategic goals.",
    },
    {
      number: "2",
      title: "Diagnostic & Readiness Frameworks",
      description: "We provide structured tools for assessing where founders are in their development – focusing on clarity, structure and communication.",
    },
    {
      number: "3",
      title: "Long-term Capability Building",
      description: "Our goal is not one-off events, but lasting improvement in how founders think and operate within your ecosystem.",
    },
  ];

  return (
    <Section background="sand">
      <Container>
        <HeadingBlock
          title="Structured founder development, aligned to your objectives."
          align="center"
          maxWidth="lg"
        />
        <StaggerChildren staggerDelay={0.12}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-fg-md">
            {offerings.map((offering, index) => (
              <div key={index} className="bg-white rounded-md p-6 md:p-8">
                <div className="font-cormorant text-3xl md:text-4xl font-semibold text-fg-gold/30 mb-fg-sm">
                  {offering.number}
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-fg-navy mb-fg-sm">
                  {offering.title}
                </h3>
                <p className="font-inter text-base md:text-[18px] text-fg-grey leading-relaxed">
                  {offering.description}
                </p>
              </div>
            ))}
          </div>
        </StaggerChildren>
        <div className="mt-fg-lg">
          <SectionImage
            src="/images/founder-groundworks/partnerships/partnerships-02.jpg"
            alt="Structured founder development through partnerships"
            className="h-64 md:h-96 lg:h-[400px]"
          />
        </div>
      </Container>
    </Section>
  );
}

