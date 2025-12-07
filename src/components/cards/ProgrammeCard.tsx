"use client";

import { Programme } from "@/data/programmes";
import Button from "@/components/buttons/Button";
import { cn } from "@/lib/utils";
import FadeUp from "@/components/animations/FadeUp";

type ProgrammeCardProps = {
  programme: Programme;
  className?: string;
};

export default function ProgrammeCard({ programme, className }: ProgrammeCardProps) {
  return (
    <FadeUp delay={0.1} duration={0.6}>
      <div className={cn(
        "bg-white rounded-lg p-8 md:p-10",
        "border border-fg-sand/40 shadow-sm",
        "hover:shadow-lg hover:border-fg-gold/30",
        "transition-all duration-300",
        "relative overflow-hidden",
        className
      )}>
        {/* Subtle accent line at top */}
        <div className="absolute top-0 left-0 right-0 h-[2px] bg-gradient-to-r from-transparent via-fg-gold/40 to-transparent"></div>
        
        {/* Programme Label */}
        <div className="mb-4">
          <p className="font-inter text-xs uppercase tracking-[0.15em] text-fg-gold font-medium">
            {programme.sectionLabel}
          </p>
        </div>

        {/* Title */}
        <h3 className="font-cormorant text-3xl md:text-4xl font-semibold text-fg-navy mb-5 leading-tight">
          {programme.title}
        </h3>

        {/* Summary */}
        <p className="font-inter text-fg-grey mb-8 text-base md:text-[17px] leading-relaxed">
          {programme.summary}
        </p>

        {/* Divider */}
        <div className="h-px bg-fg-sand/30 mb-8"></div>

        {/* Content Sections */}
        <div className="mb-8 space-y-8">
          {/* Who it's for */}
          <div>
            <h4 className="font-inter text-xs uppercase tracking-wider text-fg-grey mb-3 font-semibold">
              Who it's for
            </h4>
            <p className="font-inter text-fg-grey text-[15px] md:text-base leading-relaxed">
              {programme.whoItsFor}
            </p>
          </div>

          {/* Format */}
          <div>
            <h4 className="font-inter text-xs uppercase tracking-wider text-fg-grey mb-4 font-semibold">
              Format
            </h4>
            <div className="space-y-3">
              {programme.format.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1 h-1 rounded-full bg-fg-gold flex-shrink-0"></div>
                  <p className="font-inter text-fg-grey text-[15px] md:text-base leading-relaxed flex-1">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* What you'll cover */}
          <div>
            <h4 className="font-inter text-xs uppercase tracking-wider text-fg-grey mb-4 font-semibold">
              What you'll cover
            </h4>
            <div className="space-y-3">
              {programme.whatYoullCover.map((item, index) => (
                <div key={index} className="flex items-start gap-3">
                  <div className="mt-1.5 w-1 h-1 rounded-full bg-fg-gold flex-shrink-0"></div>
                  <p className="font-inter text-fg-grey text-[15px] md:text-base leading-relaxed flex-1">
                    {item}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Outcome */}
          <div>
            <h4 className="font-inter text-xs uppercase tracking-wider text-fg-grey mb-3 font-semibold">
              Outcome
            </h4>
            <p className="font-inter text-fg-grey text-[15px] md:text-base leading-relaxed">
              {programme.outcome}
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px bg-fg-sand/30 mb-6"></div>

        {/* CTA Button */}
        <Button variant="primary" href={`/programmes#${programme.id}`}>
          {programme.cta}
        </Button>
      </div>
    </FadeUp>
  );
}

