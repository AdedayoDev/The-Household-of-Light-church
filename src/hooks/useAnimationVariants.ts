import { useMemo } from "react";
import { type Variants } from "framer-motion";

/**
 * Hook to memoize animation variants to prevent unnecessary re-creation
 * This helps optimize performance by keeping animation configurations stable
 */
export function useAnimationVariants() {
  const containerVariants = useMemo<Variants>(
    () => ({
      hidden: { opacity: 0 },
      visible: {
        opacity: 1,
        transition: { staggerChildren: 0.12, delayChildren: 0.1 },
      },
    }),
    []
  );

  const itemVariants = useMemo<Variants>(
    () => ({
      hidden: { opacity: 0, y: 30 },
      visible: {
        opacity: 1,
        y: 0,
        transition: { duration: 0.5 },
      },
    }),
    []
  );

  const fadeInVariants = useMemo<Variants>(
    () => ({
      hidden: { opacity: 0 },
      visible: { opacity: 1 },
    }),
    []
  );

  const slideInVariants = useMemo<Variants>(
    () => ({
      hidden: { opacity: 0, x: -20 },
      visible: { opacity: 1, x: 0 },
    }),
    []
  );

  return {
    containerVariants,
    itemVariants,
    fadeInVariants,
    slideInVariants,
  };
}

export default useAnimationVariants;
