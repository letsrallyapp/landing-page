const environment =
  typeof import.meta !== 'undefined' ? import.meta.env ?? {} : {};

// The full Loops "Form Endpoint" URL, e.g.
// https://app.loops.so/api/newsletter-form/<formId>
// It is safe to ship in the browser — it only accepts contact sign-ups.
const endpoint = environment.VITE_LOOPS_FORM_ENDPOINT;

export const isLoopsConfigured =
  typeof endpoint === 'string' && endpoint.startsWith('https://');

export type JoinWaitlistResult = {
  ok: boolean;
  rateLimited?: boolean;
};

export async function joinWaitlist(email: string): Promise<JoinWaitlistResult> {
  if (!isLoopsConfigured) {
    return { ok: false };
  }

  // Loops form endpoints expect form-encoded data, not JSON.
  const body = new URLSearchParams({ email });

  try {
    const response = await fetch(endpoint as string, {
      method: 'POST',
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
      body: body.toString()
    });

    // Submissions are rate limited per IP; surface that distinctly.
    if (response.status === 429) {
      return { ok: false, rateLimited: true };
    }

    if (!response.ok) {
      return { ok: false };
    }

    // Loops responds with { success: boolean, message?: string }. Re-submitting
    // an existing contact still returns success, so duplicates are handled for us.
    const data = (await response.json().catch(() => null)) as {
      success?: boolean;
    } | null;

    if (data && data.success === false) {
      return { ok: false };
    }

    return { ok: true };
  } catch {
    return { ok: false };
  }
}
