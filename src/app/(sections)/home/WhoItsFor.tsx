"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import HeadingBlock from "@/components/typography/HeadingBlock";
import StaggerChildren from "@/components/animations/StaggerChildren";
import SectionImage from "@/components/media/SectionImage";

export default function WhoItsFor() {
  const participants = [
    "Professionals transitioning into entrepreneurship",
    "Builders and creatives with strong skills but no business structure",
    "International talent preparing to start or grow a business in the UK",
    'Individuals who have tried to "start something" before, but without a clear framework',
  ];

  return (
    <Section>
      <Container>
        <HeadingBlock
          title='Not "serial founders." First-time founders.'
          subtitle="Who we serve"
          align="center"
          maxWidth="lg"
        />
        <StaggerChildren staggerDelay={0.12}>
          <div className="mt-fg-md space-y-fg-xs">
            <p className="font-inter text-base md:text-[18px] text-fg-grey leading-relaxed">
              Founder Groundworks is built for people at the very beginning of the journey, often with no previous startup experience at all.
            </p>
            <p className="font-inter text-base md:text-[18px] text-fg-grey leading-relaxed font-semibold">
              Our participants include:
            </p>
            <div className="space-y-4">
              {participants.map((participant, index) => (
                <div key={index} className="flex items-start gap-4">
                  <span className="text-fg-gold flex-shrink-0 font-inter text-lg leading-[1.6]">➤</span>
                  <p className="font-inter text-base md:text-[18px] text-fg-grey leading-relaxed flex-1">
                    {participant}
                  </p>
                </div>
              ))}
            </div>
            <p className="font-inter text-base md:text-[18px] text-fg-grey leading-relaxed mt-fg-sm font-semibold">
              If you are serious about becoming a founder – not just &quot;starting a side project&quot; – this is where you begin.
            </p>
          </div>
        </StaggerChildren>
        <div className="mt-fg-lg">
          <SectionImage
            src="/images/founder-groundworks/about/about-01.jpg"
            alt="First-time founders from diverse backgrounds learning together"
            className="h-64 md:h-96 lg:h-[400px]"
          />
        </div>
      </Container>
    </Section>
  );
}

