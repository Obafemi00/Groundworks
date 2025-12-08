"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Button from "@/components/buttons/Button";
import HeadingBlock from "@/components/typography/HeadingBlock";
import StaggerChildren from "@/components/animations/StaggerChildren";

export default function CTASection() {
  return (
    <Section background="navy">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <HeadingBlock
            title="Start your founder groundwork."
            description="If you are ready to move from ideas to structured action, the next step is simple: apply to the Foundations Programme."
            align="center"
            maxWidth="md"
            level={2}
            textColor="text-white"
            descriptionColor="text-fg-sand"
          />
          <StaggerChildren staggerDelay={0.1}>
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-fg-md">
              <Button variant="primary" size="lg" href="/contact">
                Apply to the Foundations Programme
              </Button>
              <Button variant="secondary" size="lg" href="/programmes" className="bg-white/10 border-white/30 text-white hover:bg-white/20">
                View programme details
              </Button>
            </div>
          </StaggerChildren>
        </div>
      </Container>
    </Section>
  );
}

