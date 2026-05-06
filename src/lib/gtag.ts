/**
 * Google Ads + GA4 conversion / event tracking utilities.
 *
 * The gtag.js script is loaded site-wide from index.html. This module exposes
 * typed helpers for firing conversion events and funnel events from the React app.
 */

declare global {
  interface Window {
    gtag?: (...args: unknown[]) => void;
    dataLayer?: unknown[];
    fbq?: (...args: unknown[]) => void;
  }
}

/** Google Ads tag ID — same tag is used across leveluplearning sites and Forge AI. */
export const GOOGLE_ADS_ID = "AW-336295558";

/** Conversion labels (the bit after the slash in `send_to`). */
export const CONVERSION_LABELS = {
  /** Fires after a Tally form submission lands on /ai/thank-you. Primary bidding goal. */
  applicationSubmitted: "0RY0CNu1rKgcEIbtraAB",
  /** Fires after Razorpay payment success lands on /ai/payment-confirmed. Secondary, not used for bidding. */
  applicationFeePaid: "CMvtCN61rKgcEIbtraAB",
} as const;

interface FireConversionOptions {
  /** Numeric value attached to the conversion (₹). */
  value?: number;
  /** ISO currency code. Defaults to INR. */
  currency?: string;
  /** Optional unique transaction id for deduplication. */
  transactionId?: string;
}

/**
 * Fires a Google Ads conversion event.
 * No-op on the server (during SSR/prerender) and when gtag isn't loaded yet —
 * safe to call from a useEffect on every render.
 */
export function fireGoogleAdsConversion(
  label: string,
  { value, currency = "INR", transactionId }: FireConversionOptions = {},
) {
  if (typeof window === "undefined") return;
  if (typeof window.gtag !== "function") {
    window.dataLayer = window.dataLayer || [];
    window.dataLayer.push([
      "event",
      "conversion",
      buildPayload(label, { value, currency, transactionId }),
    ]);
    return;
  }
  window.gtag("event", "conversion", buildPayload(label, { value, currency, transactionId }));
}

function buildPayload(
  label: string,
  { value, currency, transactionId }: FireConversionOptions,
) {
  const payload: Record<string, unknown> = {
    send_to: `${GOOGLE_ADS_ID}/${label}`,
  };
  if (typeof value === "number") {
    payload.value = value;
    payload.currency = currency || "INR";
  }
  if (transactionId) {
    payload.transaction_id = transactionId;
  }
  return payload;
}

/**
 * Fires a GA4-style "lead_form_open" event whenever a user clicks any CTA that
 * opens the Tally application form. Lets us reconstruct the funnel:
 *
 *   pageview -> lead_form_open -> lead_form_submit (on /thank-you) -> payment (on /payment-confirmed)
 *
 * `source` should be a stable identifier for which CTA fired
 * (e.g. "hero-primary", "nav-mobile", "final-cta", "value-math").
 */
export function fireLeadFormOpen(source: string) {
  if (typeof window === "undefined") return;
  // GA4 event via dataLayer (also picked up by GTM if anyone wires it later)
  window.dataLayer = window.dataLayer || [];
  window.dataLayer.push({
    event: "lead_form_open",
    cta_source: source,
    page_path: typeof location !== "undefined" ? location.pathname : undefined,
  });
  // Also send through gtag if it's loaded
  if (typeof window.gtag === "function") {
    window.gtag("event", "lead_form_open", {
      cta_source: source,
      send_to: GOOGLE_ADS_ID,
    });
  }
  // Meta Pixel parity: fire ViewContent on intent-to-apply if pixel is loaded
  if (typeof window.fbq === "function") {
    try {
      window.fbq("track", "ViewContent", {
        content_name: "Forge AI Residency Application",
        content_category: source,
      });
    } catch {
      // ignore
    }
  }
}
