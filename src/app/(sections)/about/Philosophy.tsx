"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import HeadingBlock from "@/components/typography/HeadingBlock";
import StaggerChildren from "@/components/animations/StaggerChildren";
import SectionImage from "@/components/media/SectionImage";

export default function Philosophy() {
  const principles = [
    "Teach first-time founders how to think in structured ways",
    "Give them practical, realistic tools instead of abstract theory",
    "Build their confidence through clarity, not hype",
    "Prepare them for conversations with serious stakeholders",
  ];

  return (
    <Section className="mb-[40px] md:mb-[45px] lg:!mb-[50px]">
      <Container>
        <HeadingBlock
          title="Foundations before scale."
          align="center"
          maxWidth="lg"
          titleClassName="md:!mt-[70px] lg:!mt-[70px]"
          titleStyle={{ marginTop: "48px" }}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-fg-md">
          {/* Image - Left on desktop, first on mobile */}
          <div className="order-1 lg:order-1">
            <SectionImage
              src="/images/founder-groundworks/misc/misc-01.jpg"
              alt="Founders building foundations through structured learning"
              className="h-64 md:h-96 lg:h-[500px]"
              noMargin={true}
            />
          </div>
          {/* Text - Right on desktop, second on mobile */}
          <div className="order-2 lg:order-2">
            <StaggerChildren staggerDelay={0.12}>
              <div className="space-y-fg-xs">
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  We believe that the most important stage of a founder's journey is the beginning. The way you think, speak and operate in the early days shapes everything that follows.
                </p>
                <p className="font-inter text-base md:text-[18px] leading-relaxed font-semibold" style={{ color: "#0E1F36" }}>
                  Our approach is simple:
                </p>
                <div className="space-y-4">
                  {principles.map((principle, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <span className="text-fg-gold flex-shrink-0 font-inter text-lg leading-[1.6]">➤</span>
                      <p className="font-inter text-base md:text-[18px] leading-relaxed flex-1" style={{ color: "#0E1F36" }}>
                        {principle}
                      </p>
                    </div>
                  ))}
                </div>
                <p className="font-inter text-base md:text-[18px] leading-relaxed mt-fg-sm font-semibold" style={{ color: "#0E1F36" }}>
                  We are not a "motivation engine". We are a formation institute.
                </p>
              </div>
            </StaggerChildren>
          </div>
        </div>
      </Container>
    </Section>
  );
}

