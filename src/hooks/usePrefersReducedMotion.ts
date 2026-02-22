import { useEffect, useState } from "react";

/**
 * Hook to detect if user prefers reduced motion
 * Respects accessibility preferences and reduces animation load
 */
export function usePrefersReducedMotion(): boolean {
  const [prefersReducedMotion, setPrefersReducedMotion] = useState(() => {
    // Initialize from media query on first render
    return window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  });

  useEffect(() => {
    // Check for prefers-reduced-motion media query
    const mediaQuery = window.matchMedia("(prefers-reduced-motion: reduce)");

    // Listen for changes in the media query
    const handleChange = (e: MediaQueryListEvent) => {
      setPrefersReducedMotion(e.matches);
    };

    mediaQuery.addEventListener("change", handleChange);

    return () => {
      mediaQuery.removeEventListener("change", handleChange);
    };
  }, []);

  return prefersReducedMotion;
}

/**
 * Utility function to get optimized animation config based on user preferences
 */
export function getOptimizedAnimationConfig(prefersReducedMotion: boolean) {
  if (prefersReducedMotion) {
    return {
      duration: 0.1,
      repeatDelay: 0,
      staggerChildren: 0,
      delayChildren: 0,
    };
  }

  return {
    duration: 0.5,
    repeatDelay: 0,
    staggerChildren: 0.12,
    delayChildren: 0.1,
  };
}

export default usePrefersReducedMotion;
