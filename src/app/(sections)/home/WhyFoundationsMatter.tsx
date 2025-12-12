"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import HeadingBlock from "@/components/typography/HeadingBlock";
import StaggerChildren from "@/components/animations/StaggerChildren";
import SectionImage from "@/components/media/SectionImage";

export default function WhyFoundationsMatter() {
  return (
    <Section background="sand" padding="xl">
      <Container>
        <HeadingBlock
          title="Because serious opportunities require serious preparation."
          subtitle="Why foundations first?"
          align="center"
          maxWidth="lg"
          subtitleClassName="md:!mt-[70px] lg:!mt-[70px]"
          subtitleStyle={{ marginTop: "48px" }}
          titleClassName="!mb-[10px]"
          titleStyle={{ marginBottom: "10px" }}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-fg-md">
          {/* Image - Left on desktop, first on mobile */}
          <div className="order-1 lg:order-1">
            <SectionImage
              src="/images/founder-groundworks/programmes/programmes-02.jpg"
              alt="Serious first-time founders focused on building strong business foundations through disciplined learning"
              className="h-64 md:h-96 lg:h-[500px] w-full"
              noMargin={true}
            />
          </div>
          {/* Text - Right on desktop, second on mobile */}
          <div className="order-2 lg:order-2">
            <StaggerChildren staggerDelay={0.15}>
              <div className="space-y-fg-xs">
                <p className="font-inter text-base md:text-[18px] text-fg-grey leading-relaxed">
                  The world does not need more unstructured projects. It needs founders who understand what they are building, why it matters, and how to communicate it.
                </p>
                <p className="font-inter text-base md:text-[18px] text-fg-grey leading-relaxed">
                  Whether your goal is to build locally or think globally, your first responsibility is to become a disciplined founder. That is what Founder Groundworks focuses on, nothing less, nothing more.
                </p>
              </div>
            </StaggerChildren>
          </div>
        </div>
      </Container>
    </Section>
  );
}

