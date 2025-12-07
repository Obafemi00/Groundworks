"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import HeadingBlock from "@/components/typography/HeadingBlock";
import StaggerChildren from "@/components/animations/StaggerChildren";
import PlaceholderImage from "@/components/media/PlaceholderImage";

export default function WhoWePartnerWith() {
  const partnerTypes = [
    "Economic development bodies",
    "Innovation and enterprise hubs",
    "Universities and business schools",
    "Professional associations",
    "Corporate teams supporting entrepreneurship and intrapreneurship",
  ];

  return (
    <Section>
      <Container>
        <HeadingBlock
          title="We work with organisations who care about real capability."
          align="center"
          maxWidth="lg"
        />
        <StaggerChildren staggerDelay={0.12}>
          <div className="mt-fg-md space-y-fg-xs">
            <p className="font-inter text-base md:text-[18px] text-fg-grey leading-relaxed">
              We partner with institutions that recognise the value of strong founder foundations, including:
            </p>
            <ul className="space-y-fg-xs">
              {partnerTypes.map((partner, index) => (
                <li key={index} className="flex items-start">
                  <span className="text-fg-gold mr-3 mt-1">●</span>
                  <span className="font-inter text-base md:text-[18px] text-fg-grey leading-relaxed">
                    {partner}
                  </span>
                </li>
              ))}
            </ul>
          </div>
        </StaggerChildren>
        <div className="mt-fg-lg">
          <PlaceholderImage className="h-64 md:h-96 lg:h-[400px]" />
        </div>
      </Container>
    </Section>
  );
}

