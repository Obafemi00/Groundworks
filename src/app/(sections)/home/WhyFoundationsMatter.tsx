"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import HeadingBlock from "@/components/typography/HeadingBlock";
import StaggerChildren from "@/components/animations/StaggerChildren";
import SectionImage from "@/components/media/SectionImage";

export default function WhyFoundationsMatter() {
  return (
    <Section background="sand">
      <Container>
        <HeadingBlock
          title="Because serious opportunities require serious preparation."
          subtitle="Why foundations first?"
          align="center"
          maxWidth="lg"
        />
        <StaggerChildren staggerDelay={0.15}>
          <div className="mt-fg-md space-y-fg-xs">
            <p className="font-inter text-base md:text-[18px] text-fg-grey leading-relaxed">
              The world does not need more unstructured projects. It needs founders who understand what they are building, why it matters, and how to communicate it.
            </p>
            <p className="font-inter text-base md:text-[18px] text-fg-grey leading-relaxed">
              Whether your goal is to build locally or think globally, your first responsibility is to become a disciplined founder. That is what Founder Groundworks focuses on, nothing less, nothing more.
            </p>
          </div>
        </StaggerChildren>
        <div className="mt-fg-lg">
          <SectionImage
            src="/images/founder-groundworks/programmes/programmes-02.jpg"
            alt="Focused founders working on building their foundations"
            className="h-64 md:h-96 lg:h-[400px]"
          />
        </div>
      </Container>
    </Section>
  );
}

