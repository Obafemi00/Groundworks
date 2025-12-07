"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import ProgrammeCard from "@/components/cards/ProgrammeCard";
import Button from "@/components/buttons/Button";
import { programmes } from "@/data/programmes";
import HeadingBlock from "@/components/typography/HeadingBlock";
import StaggerChildren from "@/components/animations/StaggerChildren";
import PlaceholderImage from "@/components/media/PlaceholderImage";

export default function ProgrammeList() {
  return (
    <>
      <Section>
        <Container>
          <div className="max-w-4xl mx-auto mb-fg-md">
            <p className="font-inter text-base md:text-[18px] text-fg-grey leading-relaxed">
              Founder Groundworks is built around a simple path. You start with foundations, develop through practice, and finish with a clear understanding of where you stand as a founder, and what comes next.
            </p>
          </div>
          <StaggerChildren staggerDelay={0.12}>
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-10 lg:gap-12">
              {programmes.map((programme) => (
                <ProgrammeCard key={programme.id} programme={programme} />
              ))}
            </div>
          </StaggerChildren>
          <div className="mt-fg-lg">
            <PlaceholderImage className="h-64 md:h-96 lg:h-[400px]" />
          </div>
        </Container>
      </Section>
      <Section background="navy">
        <Container>
          <div className="text-center max-w-3xl mx-auto">
            <HeadingBlock
              title="Start with foundations."
              description="If you are serious about developing as a founder, the first step is to build your foundations properly."
              align="center"
              maxWidth="md"
              level={2}
              textColor="text-white"
              descriptionColor="text-fg-sand"
            />
            <div className="flex flex-col sm:flex-row gap-4 justify-center mt-fg-md">
              <Button variant="primary" size="lg" href="/programmes">
                Apply to the Foundations Programme
              </Button>
            </div>
          </div>
        </Container>
      </Section>
    </>
  );
}

