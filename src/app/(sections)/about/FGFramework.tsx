"use client";

import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import HeadingBlock from "@/components/typography/HeadingBlock";
import StaggerChildren from "@/components/animations/StaggerChildren";

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
    <Section className="mb-[40px] md:mb-[45px] lg:!mb-[50px]">
      <Container>
        <HeadingBlock
          title="From raw potential to structured founder."
          subtitle="The Founder Groundworks Framework"
          align="center"
          maxWidth="lg"
          titleClassName="md:!mt-[20px] lg:!mt-[20px]"
          titleStyle={{ marginTop: "20px" }}
          subtitleClassName="md:!mt-[100px] lg:!mt-[100px] !mb-0"
          subtitleStyle={{ marginTop: "48px", marginBottom: "0" }}
        />
        <StaggerChildren staggerDelay={0.12}>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-2 md:mt-4">
            {pillars.map((pillar, index) => (
              <div key={index} className="bg-fg-sand rounded-md p-6 md:p-8">
                <div className="font-cormorant text-3xl md:text-4xl font-semibold text-fg-gold/30 mb-fg-sm">
                  {index + 1}
                </div>
                <h3 className="font-cormorant text-2xl font-semibold mb-fg-sm" style={{ color: "#0E1F36" }}>
                  {pillar.title}
                </h3>
                <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
                  {pillar.description}
                </p>
              </div>
            ))}
          </div>
        </StaggerChildren>
      </Container>
    </Section>
  );
}

