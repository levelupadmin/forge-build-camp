/**
 * X (Twitter) Pixel conversion tracking utilities.
 *
 * The base pixel script is loaded site-wide from index.html. This module just exposes
 * typed helpers for firing conversion events from the React app.
 */

type TwqCommand = "init" | "config" | "event" | "track";

declare global {
  interface Window {
    twq?: ((command: TwqCommand | string, ...args: unknown[]) => void) & {
      exe?: (...args: unknown[]) => void;
      queue?: unknown[];
      version?: string;
    };
  }
}

/** X Ads Pixel ID — Level Up Learning ad account 18ce55h6o0p, @LevelUp_edu. */
export const TWITTER_PIXEL_ID = "o8b6y";

/** Conversion event IDs from X Ads Manager → Events Manager. */
export const TWITTER_EVENT_IDS = {
  /** Fires after a Tally form submission lands on /ai/thank-you. Lead-type event, primary X bidding goal. */
  formSubmitted: "tw-o8b6y-rcfb3",
  /** Fires after Razorpay payment success lands on /ai/payment-confirmed. Purchase-type, high-value signal. */
  applicationFeePaid: "tw-o8b6y-rcfbl",
} as const;

interface FireTwitterEventOptions {
  /** Numeric value attached to the event (₹). */
  value?: number;
  /** ISO currency code. Defaults to INR. */
  currency?: string;
  /** Optional unique conversion id for server-side deduplication via CAPI. */
  conversionId?: string;
  /** SHA-256 hashed email — improves match rate when sent. Lowercase before hashing. */
  emailAddress?: string;
  /** SHA-256 hashed phone (E.164 format with +) — improves match rate when sent. */
  phoneNumber?: string;
}

/**
 * Fires an X (Twitter) conversion event.
 * No-op during SSR/prerender and when twq hasn't loaded yet — but in practice twq
 * has its own internal queue (initialised in index.html), so calls before script
 * load still execute. Safe to call from a useEffect on every render.
 */
export function fireTwitterEvent(
  eventId: string,
  {
    value,
    currency = "INR",
    conversionId,
    emailAddress,
    phoneNumber,
  }: FireTwitterEventOptions = {},
) {
  if (typeof window === "undefined") return;
  if (typeof window.twq !== "function") return;

  const payload: Record<string, unknown> = {};
  if (typeof value === "number") {
    payload.value = value;
    payload.currency = currency || "INR";
  }
  if (conversionId) payload.conversion_id = conversionId;
  if (emailAddress) payload.email_address = emailAddress;
  if (phoneNumber) payload.phone_number = phoneNumber;

  window.twq("event", eventId, payload);
}
