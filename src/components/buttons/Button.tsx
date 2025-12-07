"use client";

import Link from "next/link";
import { ReactNode } from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

type ButtonProps = {
  children: ReactNode;
  variant?: "primary" | "secondary" | "accent" | "outline";
  size?: "sm" | "md" | "lg";
  href?: string;
  onClick?: () => void;
  type?: "button" | "submit" | "reset";
  className?: string;
  disabled?: boolean;
};

export default function Button({
  children,
  variant = "primary",
  size = "md",
  href,
  onClick,
  type = "button",
  className,
  disabled = false,
}: ButtonProps) {
  const baseClasses = "font-inter font-semibold transition-all duration-300 inline-flex items-center justify-center relative overflow-hidden group";
  
  const variantClasses = {
    primary: "bg-fg-navy text-white hover:bg-[#0b182b] rounded-[4px]",
    secondary: "bg-white border border-fg-navy text-fg-navy hover:bg-fg-sand rounded-[4px]",
    accent: "bg-fg-gold text-fg-navy hover:bg-fg-gold/90 rounded-[4px]",
    outline: "border border-fg-navy text-fg-navy hover:bg-fg-sand rounded-[4px]",
  };

  const sizeClasses = {
    sm: "px-5 py-2.5 text-sm",
    md: "px-7 py-3.5 text-base",
    lg: "px-7 py-3.5 text-base",
  };

  const classes = cn(
    baseClasses,
    variantClasses[variant],
    sizeClasses[size],
    disabled && "opacity-50 cursor-not-allowed",
    className
  );

  const buttonContent = (
    <>
      <span className="relative z-10" style={{ color: variant === "primary" ? "#FFFFFF" : variant === "accent" ? "#0E1F36" : variant === "secondary" ? "#0E1F36" : "#0E1F36" }}>
        {children}
      </span>
      <motion.span
        className="relative z-10 ml-2"
        initial={{ x: 0 }}
        whileHover={{ x: 6 }}
        transition={{ type: "spring", stiffness: 400, damping: 17 }}
        style={{ color: variant === "primary" ? "#FFFFFF" : variant === "accent" ? "#0E1F36" : variant === "secondary" ? "#0E1F36" : "#0E1F36" }}
      >
        →
      </motion.span>
      {variant === "primary" && (
        <>
          <motion.div
            className="absolute inset-0 bg-fg-gold"
            initial={{ x: "-100%" }}
            whileHover={{ x: 0 }}
            transition={{ duration: 0.3 }}
          />
          <motion.span
            className="absolute inset-0 flex items-center justify-center"
            style={{ color: "#0E1F36" }}
            initial={{ opacity: 0 }}
            whileHover={{ opacity: 1 }}
            transition={{ duration: 0.2 }}
          >
            {children} →
          </motion.span>
        </>
      )}
      {variant === "accent" && (
        <motion.div
          className="absolute inset-0 bg-fg-navy opacity-0 group-hover:opacity-10"
          initial={{ scale: 0 }}
          whileHover={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        />
      )}
    </>
  );

  if (href) {
    const linkStyles = variant === "primary" 
      ? { backgroundColor: "#0E1F36", color: "#FFFFFF" }
      : variant === "accent"
      ? { backgroundColor: "#C4A463", color: "#0E1F36" }
      : variant === "secondary"
      ? { backgroundColor: "#FFFFFF", color: "#0E1F36", borderColor: "#0E1F36" }
      : { backgroundColor: "transparent", color: "#0E1F36", borderColor: "#0E1F36" };

    return (
      <motion.div
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.98 }}
      >
        <Link href={href} className={classes} style={linkStyles}>
          {buttonContent}
        </Link>
      </motion.div>
    );
  }

  return (
    <motion.button
      type={type}
      onClick={onClick}
      disabled={disabled}
      className={classes}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.98 }}
    >
      {buttonContent}
    </motion.button>
  );
}

