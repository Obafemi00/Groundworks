import { Value } from "@/data/values";
import { cn } from "@/lib/utils";

type ValueCardProps = {
  value: Value;
  className?: string;
};

export default function ValueCard({ value, className }: ValueCardProps) {
  return (
    <div className={cn("bg-fg-sand rounded-md p-6 md:p-8 border-b border-fg-gold/10", className)}>
      <h3 className="font-cormorant text-2xl font-semibold text-fg-navy mb-4">
        {value.title}
      </h3>
      <p className="font-inter text-fg-grey text-base md:text-[18px] leading-relaxed">
        {value.description}
      </p>
    </div>
  );
}

