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
    <Section background="sand" className="mb-[40px] md:mb-[45px] lg:!mb-[50px]">
      <Container>
        <HeadingBlock
          title="Structured founder development, aligned to your objectives."
          align="center"
          maxWidth="lg"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-fg-md">
          {/* Cards - Left on desktop, first on mobile */}
          <div className="order-1 lg:order-1">
            <StaggerChildren staggerDelay={0.12}>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-1 gap-4">
                {offerings.map((offering, index) => (
                  <div key={index} className="bg-white rounded-md p-6 md:p-8">
                    <div className="font-cormorant text-3xl md:text-4xl font-semibold text-fg-gold/30 mb-fg-sm">
                      {offering.number}
                    </div>
                    <h3 className="font-cormorant text-2xl font-semibold mb-fg-sm" style={{ color: "#0E1F36" }}>
                      {offering.title}
                    </h3>
                    <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                      {offering.description}
                    </p>
                  </div>
                ))}
              </div>
            </StaggerChildren>
          </div>
          {/* Image - Right on desktop, second on mobile */}
          <div className="order-2 lg:order-2">
            <SectionImage
              src="/images/founder-groundworks/partnerships/partnerships-02.jpg"
              alt="Structured founder development through partnerships"
              className="h-64 md:h-96 lg:h-[500px]"
              noMargin={true}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

