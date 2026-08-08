// Invite-link helpers for the /invite/<code> landing page.
//
// This page's only job is to carry an invite code across the install boundary
// and send a non-user to the right store. An *installed* app opens
// https://www.letsrallyapp.com/invite/<code> directly via Universal/App Links
// (LET-65) and never sees this page.
//
// Contract with the app (must match `src/lib/inviteAttribution.ts` in the Expo
// repo). `parseInviteCode` there accepts:
//   * a bare code,
//   * `rally_invite=<code>`  (Android install referrer),
//   * `rally-invite:<code>`  (iOS clipboard sentinel).
// Codes are 8-char Crockford base32 (no I/L/O/U), minted by `create_invite_code`.
// Keep these formats in sync if either side changes.

// Android package name (stable — the Play Store install referrer carries the code).
export const ANDROID_PACKAGE = 'com.letsrallyapp.mobile';

// iOS App Store numeric id (the 123456789 in apps.apple.com/app/id123456789) —
// Rally's App Store Connect "Apple ID". Overridable via VITE_IOS_APP_STORE_ID
// (inlined at build time) if it ever changes.
const DEFAULT_IOS_APP_STORE_ID = '6787239077';

const environment =
  typeof import.meta !== 'undefined' ? import.meta.env ?? {} : {};

const rawAppStoreId = environment.VITE_IOS_APP_STORE_ID;

export const IOS_APP_STORE_ID =
  typeof rawAppStoreId === 'string' && /^\d+$/.test(rawAppStoreId.trim())
    ? rawAppStoreId.trim()
    : DEFAULT_IOS_APP_STORE_ID;

export type Platform = 'ios' | 'android' | 'other';

// Crockford base32: digits 0-9 and A-Z excluding I, L, O and U. 8 chars.
const INVITE_CODE_RE = /^[0-9ABCDEFGHJKMNPQRSTVWXYZ]{8}$/;

/**
 * Normalize the value from the URL path into a bare invite code.
 *
 * The path segment is expected to be a bare code, but we defensively strip the
 * `rally_invite=` / `rally-invite:` carrier prefixes too, mirroring the app's
 * `parseInviteCode`, and upper-case the result (Crockford base32 is case-
 * insensitive but minted upper-case). Returns null when it isn't a valid code.
 */
export function normalizeInviteCode(raw: string | undefined | null): string | null {
  if (!raw) return null;

  let value: string;
  try {
    value = decodeURIComponent(raw);
  } catch {
    value = raw;
  }

  value = value.trim();

  const eq = value.indexOf('rally_invite=');
  if (eq !== -1) value = value.slice(eq + 'rally_invite='.length);
  const colon = value.indexOf('rally-invite:');
  if (colon !== -1) value = value.slice(colon + 'rally-invite:'.length);

  value = value.trim().toUpperCase();

  return INVITE_CODE_RE.test(value) ? value : null;
}

/** Pull the code segment out of an `/invite/<code>` pathname. */
export function inviteCodeFromPath(pathname: string): string | null {
  const match = pathname.match(/^\/invite\/([^/?#]+)/i);
  return normalizeInviteCode(match?.[1]);
}

export function detectPlatform(userAgent: string, maxTouchPoints = 0): Platform {
  const ua = userAgent || '';
  if (/android/i.test(ua)) return 'android';
  if (/iphone|ipad|ipod/i.test(ua)) return 'ios';
  // iPadOS 13+ reports a desktop Safari UA; disambiguate via touch points.
  if (/Macintosh/.test(ua) && maxTouchPoints > 1) return 'ios';
  return 'other';
}

/**
 * Play Store URL whose install referrer carries the code. The referrer value is
 * the url-encoded `rally_invite=<code>` — URLSearchParams encodes the `=` to
 * `%3D`, matching the format the app reads from the Android install referrer.
 */
export function playStoreUrl(code: string): string {
  const params = new URLSearchParams({
    id: ANDROID_PACKAGE,
    referrer: `rally_invite=${code}`,
  });
  return `https://play.google.com/store/apps/details?${params.toString()}`;
}

/** App Store URL, or null when the App Store id hasn't been configured yet. */
export function appStoreUrl(): string | null {
  return IOS_APP_STORE_ID ? `https://apps.apple.com/app/id${IOS_APP_STORE_ID}` : null;
}

/** The iOS clipboard sentinel the app looks for on first launch. */
export function clipboardSentinel(code: string): string {
  return `rally-invite:${code}`;
}

/**
 * Best-effort copy of the iOS clipboard sentinel. This is a bonus carrier —
 * manual entry in the app is the guaranteed floor (LET-67) — so failures are
 * swallowed. Resolves to whether the write appeared to succeed.
 */
export async function writeClipboardSentinel(code: string): Promise<boolean> {
  try {
    if (typeof navigator !== 'undefined' && navigator.clipboard?.writeText) {
      await navigator.clipboard.writeText(clipboardSentinel(code));
      return true;
    }
  } catch {
    // best-effort only
  }
  return false;
}
