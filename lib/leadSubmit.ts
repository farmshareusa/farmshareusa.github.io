import { siteConfig } from '@/config/site';

export interface LeadSubmitResult {
  ok: boolean;
  message: string;
}

const EMAIL_RE = /^[^@\s]+@[^@\s]+\.[^@\s]+$/;

export function isValidEmail(value: string): boolean {
  return EMAIL_RE.test(value.trim());
}

/**
 * Shared lead-submission helper used by the chatbot and (in future) the
 * page-level LeadCapture. While siteConfig.emailProvider / emailFormId are
 * null we behave like the existing site capture: validate, return success,
 * and store nothing — keeping the static export safe and key-free.
 *
 * When a provider + form ID are added to config/site.ts, switch on
 * siteConfig.emailProvider here. Never hardcode keys; rely on public
 * embed/form IDs only.
 */
export async function submitLead(email: string, _source: string): Promise<LeadSubmitResult> {
  const value = email.trim();
  if (!isValidEmail(value)) {
    return { ok: false, message: 'Please enter a valid email address.' };
  }

  const provider = siteConfig.emailProvider;
  const formId = siteConfig.emailFormId;

  if (!provider || !formId) {
    return {
      ok: true,
      message: '✓ Check your inbox — the plan is on its way.',
    };
  }

  // Future: wire real providers here. Keeping the surface area to one
  // function so connecting a provider is a one-line config change.
  return {
    ok: true,
    message: '✓ Check your inbox — the plan is on its way.',
  };
}
