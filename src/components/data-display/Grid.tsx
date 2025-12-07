import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type GridProps = {
  children: ReactNode;
  cols?: 1 | 2 | 3 | 4;
  className?: string;
  gap?: "sm" | "md" | "lg";
};

export default function Grid({ 
  children, 
  cols = 3,
  className,
  gap = "md"
}: GridProps) {
  const colClasses = {
    1: "grid-cols-1",
    2: "grid-cols-1 md:grid-cols-2",
    3: "grid-cols-1 md:grid-cols-2 lg:grid-cols-3",
    4: "grid-cols-1 md:grid-cols-2 lg:grid-cols-4",
  };

  const gapClasses = {
    sm: "gap-4",
    md: "gap-6",
    lg: "gap-8",
  };

  return (
    <div className={cn("grid", colClasses[cols], gapClasses[gap], className)}>
      {children}
    </div>
  );
}

