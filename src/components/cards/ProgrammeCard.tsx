import { Programme } from "@/data/programmes";
import Button from "@/components/buttons/Button";
import { cn } from "@/lib/utils";

type ProgrammeCardProps = {
  programme: Programme;
  className?: string;
};

export default function ProgrammeCard({ programme, className }: ProgrammeCardProps) {
  return (
    <div className={cn("bg-white rounded-md p-6 md:p-8 border-b-2 border-fg-gold/20", className)}>
      <p className="font-inter text-sm md:text-base uppercase tracking-wider text-fg-gold mb-2">
        {programme.sectionLabel}
      </p>
      <h3 className="font-cormorant text-3xl font-semibold text-fg-navy mb-4">
        {programme.title}
      </h3>
      <p className="font-inter text-fg-grey mb-6 text-base md:text-[18px] leading-relaxed">
        {programme.summary}
      </p>

      <div className="mb-6 space-y-6">
        <div>
          <h4 className="font-cormorant text-xl font-semibold text-fg-navy mb-4">Who it's for:</h4>
          <p className="font-inter text-fg-grey text-sm md:text-base leading-relaxed">
            {programme.whoItsFor}
          </p>
        </div>

        <div>
          <h4 className="font-cormorant text-xl font-semibold text-fg-navy mb-4">Format:</h4>
          <ul className="space-y-2 font-inter text-fg-grey text-sm md:text-base">
            {programme.format.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-fg-gold mr-2">●</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-cormorant text-xl font-semibold text-fg-navy mb-4">What you'll cover:</h4>
          <ul className="space-y-2 font-inter text-fg-grey text-sm md:text-base">
            {programme.whatYoullCover.map((item, index) => (
              <li key={index} className="flex items-start">
                <span className="text-fg-gold mr-2">●</span>
                {item}
              </li>
            ))}
          </ul>
        </div>

        <div>
          <h4 className="font-cormorant text-xl font-semibold text-fg-navy mb-4">Outcome:</h4>
          <p className="font-inter text-fg-grey text-sm md:text-base leading-relaxed">
            {programme.outcome}
          </p>
        </div>
      </div>

      <Button variant="primary" href={`/programmes#${programme.id}`}>
        {programme.cta}
      </Button>
    </div>
  );
}

