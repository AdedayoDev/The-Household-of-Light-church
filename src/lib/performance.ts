/**
 * Utility to throttle animation frame updates
 * Helps reduce unnecessary re-renders and improve performance
 */
export function throttleAnimationFrame(callback: () => void): () => void {
  let isThrottled = false;

  return function throttled() {
    if (isThrottled) return;

    isThrottled = true;
    requestAnimationFrame(() => {
      callback();
      isThrottled = false;
    });
  };
}

/**
 * Utility to debounce scroll events
 * Prevents excessive event handling during scrolling
 */
export function debounceScroll(callback: () => void, delay = 100): () => void {
  let timeoutId: NodeJS.Timeout | null = null;

  return function debounced() {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }
    timeoutId = setTimeout(() => {
      callback();
      timeoutId = null;
    }, delay);
  };
}

/**
 * Memoize function results to cache expensive computations
 */
export function memoize<T extends (...args: unknown[]) => unknown>(fn: T): T {
  const cache = new Map();

  return ((...args: unknown[]) => {
    const key = JSON.stringify(args);
    if (cache.has(key)) {
      return cache.get(key);
    }
    const result = fn(...args);
    cache.set(key, result);
    return result;
  }) as T;
}

/**
 * Cache API responses with TTL (Time To Live)
 */
export class ResponseCache {
  private cache = new Map<string, { data: unknown; expiry: number }>();
  private ttl: number;

  constructor(ttlMs = 300000) {
    // 5 minutes default
    this.ttl = ttlMs;
  }

  set(key: string, data: unknown): void {
    this.cache.set(key, {
      data,
      expiry: Date.now() + this.ttl,
    });
  }

  get(key: string): unknown | null {
    const item = this.cache.get(key);
    if (!item) return null;

    if (Date.now() > item.expiry) {
      this.cache.delete(key);
      return null;
    }

    return item.data;
  }

  clear(): void {
    this.cache.clear();
  }
}

export default {
  throttleAnimationFrame,
  debounceScroll,
  memoize,
  ResponseCache,
};
