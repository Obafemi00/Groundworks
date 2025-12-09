"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import HeadingBlock from "@/components/typography/HeadingBlock";
import StaggerChildren from "@/components/animations/StaggerChildren";
import SectionImage from "@/components/media/SectionImage";

export default function WhyFG() {
  const benefits = [
    "A clear, structured methodology",
    "A focus on clarity over hype",
    "A language and tone suitable for institutional collaboration",
    "An understanding of both local and global founder pathways",
  ];

  return (
    <Section>
      <Container>
        <HeadingBlock
          title="A serious partner for serious ambitions."
          align="center"
          maxWidth="lg"
        />
        <StaggerChildren staggerDelay={0.12}>
          <div className="mt-fg-md space-y-fg-xs">
            <p className="font-inter text-base md:text-[18px] text-fg-grey leading-relaxed">
              Our work is intentionally focused on the earliest stage of the founder journey, where the right education can have the highest long-term impact.
            </p>
            <p className="font-inter text-base md:text-[18px] text-fg-grey leading-relaxed font-semibold">
              We bring:
            </p>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="text-fg-gold flex-shrink-0 font-inter text-lg leading-[1.6]">➤</span>
                  <p className="font-inter text-base md:text-[18px] text-fg-grey leading-relaxed flex-1">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </StaggerChildren>
        <div className="mt-fg-lg">
          <SectionImage
            src="/images/founder-groundworks/partnerships/partnerships-02.jpg"
            alt="Serious partnership collaboration for founder development"
            className="h-64 md:h-96 lg:h-[400px]"
          />
        </div>
      </Container>
    </Section>
  );
}

