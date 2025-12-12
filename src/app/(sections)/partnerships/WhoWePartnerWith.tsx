"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import HeadingBlock from "@/components/typography/HeadingBlock";
import StaggerChildren from "@/components/animations/StaggerChildren";
import SectionImage from "@/components/media/SectionImage";

export default function WhoWePartnerWith() {
  const partnerTypes = [
    "Economic development bodies",
    "Innovation and enterprise hubs",
    "Universities and business schools",
    "Professional associations",
    "Corporate teams supporting entrepreneurship and intrapreneurship",
  ];

  return (
    <Section className="mb-[40px] md:mb-[45px] lg:!mb-[50px]">
      <Container>
        <HeadingBlock
          title="We work with organisations who care about real capability."
          align="center"
          maxWidth="lg"
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center mt-fg-md">
          {/* Text - Left on desktop, first on mobile */}
          <div className="order-1 lg:order-1">
            <StaggerChildren staggerDelay={0.12}>
              <div className="space-y-fg-xs">
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  We partner with institutions that recognise the value of strong founder foundations, including:
                </p>
                <div className="space-y-4">
                  {partnerTypes.map((partner, index) => (
                    <div key={index} className="flex items-start gap-4">
                      <span className="text-fg-gold flex-shrink-0 font-inter text-lg leading-[1.6]">➤</span>
                      <p className="font-inter text-base md:text-[18px] leading-relaxed flex-1" style={{ color: "#0E1F36" }}>
                        {partner}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </StaggerChildren>
          </div>
          {/* Image - Right on desktop, second on mobile */}
          <div className="order-2 lg:order-2">
            <SectionImage
              src="/images/founder-groundworks/partnerships/partnerships-01.jpg"
              alt="Organisations partnering to develop capable founders"
              className="h-64 md:h-96 lg:h-[500px]"
              noMargin={true}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

