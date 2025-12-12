import Section from "@/components/layout/Section";
import Container from "@/components/layout/Container";
import Button from "@/components/buttons/Button";

export default function PartnershipCTA() {
  return (
    <Section className="mb-0">
      <Container>
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="font-cormorant text-4xl md:text-5xl font-semibold mb-6" style={{ color: "#0E1F36" }}>
            Explore a partnership.
          </h2>
          <p className="font-inter text-base md:text-[18px] mb-8 leading-relaxed" style={{ color: "#0E1F36" }}>
            If you are responsible for developing founders, supporting entrepreneurship, or building an ecosystem, we invite you to discuss a structured collaboration with us.
          </p>
          <Button variant="primary" size="lg" href="/contact">
            Submit a partnership enquiry
          </Button>
        </div>
      </Container>
    </Section>
  );
}

