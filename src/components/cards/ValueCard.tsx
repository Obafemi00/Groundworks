import { memo } from "react";
import { Value } from "@/data/values";
import { cn } from "@/lib/utils";

type ValueCardProps = {
  value: Value;
  className?: string;
};

const ValueCard = memo(function ValueCard({ value, className }: ValueCardProps) {
  return (
    <div className={cn("bg-fg-sand rounded-md p-6 md:p-8 border-b border-fg-gold/10", className)}>
      <h3 className="font-cormorant text-2xl font-semibold mb-4" style={{ color: "#0E1F36" }}>
        {value.title}
      </h3>
      <p className="font-inter text-base md:text-[18px] leading-relaxed" style={{ color: "#0E1F36" }}>
        {value.description}
      </p>
    </div>
  );
});

export default ValueCard;

