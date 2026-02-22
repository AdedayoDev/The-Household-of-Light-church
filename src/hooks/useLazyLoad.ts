import { useEffect, useRef, type RefObject } from "react";

/**
 * Hook for implementing lazy loading with intersection observer
 * Triggers a callback when element enters viewport
 */
export function useLazyLoad<T extends HTMLElement>(
  callback?: () => void,
  options?: IntersectionObserverInit
) {
  const ref = useRef<T>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        callback?.();
        // Unobserve after first intersection to avoid multiple triggers
        observer.unobserve(entry.target);
      }
    }, {
      threshold: 0.1,
      rootMargin: "50px",
      ...options,
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => {
      observer.disconnect();
    };
  }, [callback, options]);

  return ref as RefObject<T>;
}

export default useLazyLoad;
