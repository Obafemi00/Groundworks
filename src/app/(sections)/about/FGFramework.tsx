"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import HeadingBlock from "@/components/typography/HeadingBlock";
import StaggerChildren from "@/components/animations/StaggerChildren";
import SectionImage from "@/components/media/SectionImage";

export default function FGFramework() {
  const pillars = [
    {
      title: "Clarity of Thought",
      description: "We train founders to separate the problem from the solution, and the solution from the means of delivery – so they can describe their work in terms that make sense to partners, customers and institutions.",
    },
    {
      title: "Structural Discipline",
      description: "We introduce simple but serious tools: basic models, early validation, and clear KPIs. No complex spreadsheets – just the essentials every founder must understand.",
    },
    {
      title: "Communication & Presence",
      description: "We help founders build a way of speaking and presenting that reflects their seriousness. From pitch structure to answering hard questions, we focus on how they show up in the room.",
    },
  ];

  return (
    <Section background="navy">
      <Container>
        <HeadingBlock
          title="From raw potential to structured founder."
          subtitle="The Founder Groundworks Framework"
          align="center"
          maxWidth="lg"
          textColor="text-white"
        />
        <StaggerChildren staggerDelay={0.12}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-fg-md">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-white/10 backdrop-blur-sm rounded-md p-6 md:p-8">
                <div className="font-cormorant text-3xl md:text-4xl font-semibold text-fg-gold/30 mb-fg-sm">
                  {index + 1}
                </div>
                <h3 className="font-cormorant text-2xl font-semibold text-white mb-fg-sm">
                  {pillar.title}
                </h3>
                <p className="font-inter text-base md:text-[18px] text-fg-sand leading-relaxed">
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </StaggerChildren>
        <div className="mt-fg-lg">
          <SectionImage
            src="/images/founder-groundworks/programmes/programmes-02.jpg"
            alt="The Founder Groundworks framework in practice"
            className="h-64 md:h-96 lg:h-[400px]"
          />
        </div>
      </Container>
    </Section>
  );
}

