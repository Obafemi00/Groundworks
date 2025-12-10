"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import HeadingBlock from "@/components/typography/HeadingBlock";
import StaggerChildren from "@/components/animations/StaggerChildren";
import SectionImage from "@/components/media/SectionImage";

export default function WhatWeDo() {
  return (
    <Section>
      <Container>
        <HeadingBlock
          title="An institute for the serious first-time founder."
          subtitle="What is Founder Groundworks?"
          align="center"
          maxWidth="lg"
        />
        <StaggerChildren staggerDelay={0.15}>
          <div className="mt-fg-md space-y-fg-xs">
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
        <div className="mt-fg-lg">
          <SectionImage
            src="/images/founder-groundworks/about/about-02.jpg"
            alt="Diverse first-time founders participating in structured learning and training at Founder Groundworks"
            className="h-64 md:h-96 lg:h-[400px]"
          />
        </div>
      </Container>
    </Section>
  );
}

