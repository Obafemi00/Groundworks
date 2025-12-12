"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import HeadingBlock from "@/components/typography/HeadingBlock";
import StaggerChildren from "@/components/animations/StaggerChildren";
import SectionImage from "@/components/media/SectionImage";

export default function WhyWeExist() {
  return (
    <Section background="sand" className="mb-[40px] md:mb-[45px] lg:!mb-[50px]">
      <Container>
        <HeadingBlock
          title='Most "new founders" are never given real foundations.'
          align="center"
          maxWidth="lg"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-fg-md">
          {/* Text - Left on desktop, first on mobile */}
          <div className="order-1 lg:order-1">
            <StaggerChildren staggerDelay={0.15}>
              <div className="space-y-fg-xs">
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  Around the world, people are told to "start something" – but very few are taught what it actually means to be a founder.
                </p>
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  They are encouraged to chase ideas, raise capital and "launch", without first understanding how to frame a problem, build a solution, test assumptions or track meaningful results.
                </p>
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  Founder Groundworks exists to correct that. We focus on the early, unglamorous work: thinking clearly, structuring properly and learning to communicate with discipline.
                </p>
              </div>
            </StaggerChildren>
          </div>
          {/* Image - Right on desktop, second on mobile */}
          <div className="order-2 lg:order-2">
            <SectionImage
              src="/images/founder-groundworks/about/about-03.jpg"
              alt="Founders learning the fundamentals of building a business"
              className="h-64 md:h-96 lg:h-[500px]"
              noMargin={true}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

