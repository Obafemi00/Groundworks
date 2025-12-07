"use client";

import { useInView } from "framer-motion";
import { useRef } from "react";

export function useScrollAnimation(options?: {
  once?: boolean;
  margin?: string;
  amount?: number;
}) {
  const ref = useRef(null);
  const isInView = useInView(ref, {
    once: options?.once ?? true,
    margin: options?.margin ?? "-100px",
    amount: options?.amount,
  });

  return { ref, isInView };
}

