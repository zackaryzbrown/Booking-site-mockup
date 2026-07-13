import { onCLS, onFCP, onINP, onLCP, onTTFB, type Metric } from "web-vitals";

/**
 * Web Vitals tracking utility
 *
 * Tracks Core Web Vitals (CWV) and other important metrics:
 * - CLS: Cumulative Layout Shift (visual stability)
 * - FCP: First Contentful Paint (perceived load speed)
 * - INP: Interaction to Next Paint (responsiveness)
 * - LCP: Largest Contentful Paint (main content load)
 * - TTFB: Time to First Byte (server response time)
 *
 * Thresholds:
 * - Good: green (meets user expectations)
 * - Needs Improvement: yellow (acceptable but could be better)
 * - Poor: red (user experience is degraded)
 */

// Define thresholds for each metric
const THRESHOLDS = {
  CLS: { good: 0.1, poor: 0.25 },
  FCP: { good: 1800, poor: 3000 },
  INP: { good: 200, poor: 500 },
  LCP: { good: 2500, poor: 4000 },
  TTFB: { good: 800, poor: 1800 },
};

type Rating = "good" | "needs-improvement" | "poor";

function getRating(name: string, value: number): Rating {
  const threshold = THRESHOLDS[name as keyof typeof THRESHOLDS];
  if (!threshold) return "good";

  if (value <= threshold.good) return "good";
  if (value <= threshold.poor) return "needs-improvement";
  return "poor";
}

function logMetric({ name, value, rating, delta, id }: Metric) {
  const metricRating = getRating(name, value);

  // Log to console in development
  if (process.env.NODE_ENV === "development") {
    const emoji =
      metricRating === "good"
        ? "✅"
        : metricRating === "needs-improvement"
          ? "⚠️"
          : "❌";
    console.log(
      `${emoji} ${name}:`,
      `${Math.round(value)}${name === "CLS" ? "" : "ms"}`,
      `(${metricRating})`,
      { delta, id, rating },
    );
  }

  // In production, send to analytics service
  // Example implementations:

  // Google Analytics 4
  if (typeof window !== "undefined" && (window as any).gtag) {
    (window as any).gtag("event", name, {
      value: Math.round(value),
      metric_id: id,
      metric_value: value,
      metric_delta: delta,
      metric_rating: metricRating,
    });
  }

  // Custom analytics endpoint
  if (process.env.NODE_ENV === "production") {
    // Uncomment and configure your analytics endpoint
    /*
    fetch('/api/analytics/web-vitals', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        name,
        value,
        rating: metricRating,
        delta,
        id,
        url: window.location.href,
        userAgent: navigator.userAgent,
      }),
    }).catch(console.error);
    */
  }
}

/**
 * Initialize Web Vitals tracking
 * Call this once when your app starts (typically in main.tsx)
 */
export function initWebVitals() {
  // Track all Core Web Vitals
  onCLS(logMetric);
  onFCP(logMetric);
  onINP(logMetric); // Replacement for deprecated FID
  onLCP(logMetric);
  onTTFB(logMetric);

  // Log that tracking is active
  if (process.env.NODE_ENV === "development") {
    console.log("📊 Web Vitals tracking initialized");
  }
}

/**
 * Hook to access Web Vitals in React components
 * Useful for displaying metrics in a performance dashboard
 */
export function useWebVitals(callback: (metric: Metric) => void) {
  if (typeof window === "undefined") return;

  onCLS(callback);
  onFCP(callback);
  onINP(callback);
  onLCP(callback);
  onTTFB(callback);
}
