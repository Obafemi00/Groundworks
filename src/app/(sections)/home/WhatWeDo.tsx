"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import HeadingBlock from "@/components/typography/HeadingBlock";
import StaggerChildren from "@/components/animations/StaggerChildren";
import SectionImage from "@/components/media/SectionImage";

export default function WhatWeDo() {
  return (
    <Section padding="xl">
      <Container>
        <HeadingBlock
          title="An institute for the serious first-time founder."
          subtitle="What is Founder Groundworks?"
          align="center"
          maxWidth="lg"
          subtitleClassName="md:!mt-[70px] lg:!mt-[70px]"
          subtitleStyle={{ marginTop: "48px" }}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-fg-md">
          {/* Image - Left on desktop, first on mobile */}
          <div className="order-1 lg:order-1 mb-fg-md lg:mb-fg-lg">
            <SectionImage
              src="/images/founder-groundworks/about/about-02.jpg"
              alt="Diverse first-time founders participating in structured learning and training at Founder Groundworks"
              className="h-64 md:h-96 lg:h-[500px] w-full"
              noMargin={true}
            />
          </div>
          {/* Text - Right on desktop, second on mobile */}
          <div className="order-2 lg:order-2">
            <StaggerChildren staggerDelay={0.15}>
              <div className="space-y-fg-xs">
                <p className="font-inter text-base md:text-[18px] text-fg-grey leading-relaxed">
                  Founder Groundworks exists for a specific kind of person: someone with ideas, ambition and potential, but no real exposure to the startup world.
                </p>
                <p className="font-inter text-base md:text-[18px] text-fg-grey leading-relaxed">
                  We provide structured training in the fundamentals every founder is expected to understand: how to define a real problem, design a solution, build a lean first version, track meaningful numbers, and communicate like a leader.
                </p>
                <p className="font-inter text-base md:text-[18px] text-fg-grey leading-relaxed font-semibold">
                  No hacks. No hype. Just disciplined founder education.
                </p>
              </div>
            </StaggerChildren>
          </div>
        </div>
      </Container>
    </Section>
  );
}

