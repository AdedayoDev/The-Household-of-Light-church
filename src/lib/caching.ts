/**
 * Service Worker registration and caching strategies for offline support
 * and improved performance
 */

/**
 * Register service worker for production
 */
export function registerServiceWorker(): void {
  if ("serviceWorker" in navigator && import.meta.env.PROD) {
    window.addEventListener("load", () => {
      navigator.serviceWorker.register("/sw.js").then((registration) => {
        console.log("Service Worker registered:", registration);
      });
    });
  }
}

/**
 * Cache strategies configuration
 */
export const cacheStrategies = {
  // Cache first, fallback to network
  CACHE_FIRST: "cache-first" as const,
  // Network first, fallback to cache
  NETWORK_FIRST: "network-first" as const,
  // Stale while revalidate
  STALE_WHILE_REVALIDATE: "stale-while-revalidate" as const,
};

/**
 * Configure caching for specific asset types
 */
export const assetCacheConfig = {
  images: {
    strategy: cacheStrategies.CACHE_FIRST,
    maxAge: 7 * 24 * 60 * 60 * 1000, // 7 days
  },
  api: {
    strategy: cacheStrategies.NETWORK_FIRST,
    maxAge: 5 * 60 * 1000, // 5 minutes
  },
  styles: {
    strategy: cacheStrategies.CACHE_FIRST,
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  },
  scripts: {
    strategy: cacheStrategies.CACHE_FIRST,
    maxAge: 30 * 24 * 60 * 60 * 1000, // 30 days
  },
};

export default {
  registerServiceWorker,
  cacheStrategies,
  assetCacheConfig,
};
