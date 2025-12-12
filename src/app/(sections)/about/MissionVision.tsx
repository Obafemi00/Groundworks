"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import HeadingBlock from "@/components/typography/HeadingBlock";
import Subsection from "@/components/layout/Subsection";
import SlideIn from "@/components/animations/SlideIn";
import SectionImage from "@/components/media/SectionImage";

export default function MissionVision() {
  return (
    <Section className="mb-[40px] md:mb-[45px] lg:!mb-[50px]">
      <Container>
        <HeadingBlock
          subtitle="Our mandate"
          align="center"
          maxWidth="lg"
          animate={false}
          subtitleClassName="md:!mt-[70px] lg:!mt-[70px]"
          subtitleStyle={{ marginTop: "48px" }}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-fg-lg">
          {/* Text - Left on desktop, first on mobile */}
          <div className="order-1 lg:order-1">
            <div className="space-y-8 lg:space-y-12">
              <SlideIn direction="right" delay={0.2}>
                <div>
                  <Subsection
                    title="Mission"
                    maxWidth="full"
                    animate={false}
                  >
                    <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
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
                    <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                      Our vision is to become the world's most trusted institution for developing new founders with clarity, competence and global readiness.
                    </p>
                  </Subsection>
                </div>
              </SlideIn>
            </div>
          </div>
          {/* Image - Right on desktop, second on mobile */}
          <div className="order-2 lg:order-2">
            <SectionImage
              src="/images/founder-groundworks/misc/misc-02.jpg"
              alt="Founder Groundworks mission and vision in action"
              className="h-64 md:h-96 lg:h-[500px]"
              noMargin={true}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

