"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import HeadingBlock from "@/components/typography/HeadingBlock";
import StaggerChildren from "@/components/animations/StaggerChildren";
import PlaceholderImage from "@/components/media/PlaceholderImage";

export default function WhyWeExist() {
  return (
    <Section background="sand">
      <Container>
        <HeadingBlock
          title='Most "new founders" are never given real foundations.'
          align="center"
          maxWidth="lg"
        />
        <StaggerChildren staggerDelay={0.15}>
          <div className="mt-fg-md space-y-fg-xs">
            <p className="font-inter text-base md:text-[18px] text-fg-grey leading-relaxed">
              Around the world, people are told to "start something" – but very few are taught what it actually means to be a founder.
            </p>
            <p className="font-inter text-base md:text-[18px] text-fg-grey leading-relaxed">
              They are encouraged to chase ideas, raise capital and "launch", without first understanding how to frame a problem, build a solution, test assumptions or track meaningful results.
            </p>
            <p className="font-inter text-base md:text-[18px] text-fg-grey leading-relaxed">
              Founder Groundworks exists to correct that. We focus on the early, unglamorous work: thinking clearly, structuring properly and learning to communicate with discipline.
            </p>
          </div>
        </StaggerChildren>
        <div className="mt-fg-lg">
          <PlaceholderImage className="h-64 md:h-96 lg:h-[400px]" />
        </div>
      </Container>
    </Section>
  );
}

