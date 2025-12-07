import { ReactNode } from "react";
import { cn } from "@/lib/utils";

type ContainerProps = {
  children: ReactNode;
  className?: string;
  maxWidth?: "default" | "wide" | "narrow";
};

export default function Container({ 
  children, 
  className,
  maxWidth = "default" 
}: ContainerProps) {
  const maxWidthClasses = {
    default: "max-w-[1200px]",
    wide: "max-w-7xl",
    narrow: "max-w-4xl",
  };

  return (
    <div className={cn(maxWidthClasses[maxWidth], "mx-auto px-4", className)}>
      {children}
    </div>
  );
}

