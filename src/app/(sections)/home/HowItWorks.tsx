"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import HeadingBlock from "@/components/typography/HeadingBlock";
import Timeline from "@/components/data-display/Timeline";
import SectionImage from "@/components/media/SectionImage";

export default function HowItWorks() {
  const steps = [
    {
      title: "Step 1 – Foundations Programme",
      description: "A structured, cohort-based programme for first-time founders. Weekly sessions, practical assignments and guided frameworks to build your understanding.",
      number: 1,
    },
    {
      title: "Step 2 – Groundworks Clinics",
      description: "Small-group clinics focused on real questions: refining your idea, tightening your pitch, and clarifying your direction.",
      number: 2,
    },
    {
      title: "Step 3 – Founder Readiness Review",
      description: "At the end, you receive a structured review of where you stand as a founder – your strengths, your gaps, and your next steps.",
      number: 3,
    },
  ];

  return (
    <Section padding="xl">
      <Container>
        <HeadingBlock
          title="A clear, structured path – from first step to readiness."
          subtitle="How it works"
          align="center"
          maxWidth="lg"
          subtitleClassName="md:!mt-[70px] lg:!mt-[70px]"
          subtitleStyle={{ marginTop: "48px" }}
        />
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-start mt-fg-md">
          {/* Timeline - Left on desktop, first on mobile */}
          <div className="order-1 lg:order-1">
            <div className="max-w-full">
              <Timeline items={steps} />
            </div>
          </div>
          {/* Image - Right on desktop, second on mobile */}
          <div className="order-2 lg:order-2">
            <SectionImage
              src="/images/founder-groundworks/programmes/programmes-03.jpg"
              alt="First-time founders progressing through structured workshops, clinics, and readiness reviews"
              className="h-64 md:h-96 lg:h-[500px] w-full"
              noMargin={true}
            />
          </div>
        </div>
      </Container>
    </Section>
  );
}

