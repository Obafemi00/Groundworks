"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import HeadingBlock from "@/components/typography/HeadingBlock";
import Subsection from "@/components/layout/Subsection";
import SlideIn from "@/components/animations/SlideIn";
import SectionImage from "@/components/media/SectionImage";

export default function MissionVision() {
  return (
    <Section>
      <Container>
        <HeadingBlock
          subtitle="Our mandate"
          align="center"
          maxWidth="lg"
          animate={false}
        />
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 mt-fg-lg">
          <SlideIn direction="right" delay={0.2}>
            <div>
              <Subsection
                title="Mission"
                maxWidth="full"
                animate={false}
              >
                <p className="font-inter text-base md:text-[18px] text-fg-grey leading-relaxed">
                  Our mission is to build the foundational capability of first-time founders through structured education, practical frameworks and disciplined guidance.
                </p>
              </Subsection>
            </div>
          </SlideIn>
          <SlideIn direction="left" delay={0.3}>
            <div>
              <Subsection
                title="Vision"
                maxWidth="full"
                animate={false}
              >
                <p className="font-inter text-base md:text-[18px] text-fg-grey leading-relaxed">
                  Our vision is to become the world's most trusted institution for developing new founders with clarity, competence and global readiness.
                </p>
              </Subsection>
            </div>
          </SlideIn>
        </div>
        <div className="mt-fg-lg">
          <SectionImage
            src="/images/founder-groundworks/misc/misc-02.jpg"
            alt="Founder Groundworks mission and vision in action"
            className="h-64 md:h-96 lg:h-[400px]"
          />
        </div>
      </Container>
    </Section>
  );
}

