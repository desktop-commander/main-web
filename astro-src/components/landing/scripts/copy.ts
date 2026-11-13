/**
 * Copy button of the install command (LandingSetup.astro, local clients).
 * Sends mcp_client_setup_command_copied, as the page did before.
 */
import { trackEvent } from '@/lib/analytics/tracking';
import type { AllEvents } from '@/lib/analytics/events';

export function initCopy() {
  document.querySelectorAll<HTMLButtonElement>('[data-lp-copy]').forEach((button) => {
    const idle = button.getAttribute('aria-label') || 'Copy';
    let timer = 0;
    button.addEventListener('click', async () => {
      trackEvent('mcp_client_setup_command_copied' as AllEvents, {
        client: button.dataset.client,
        step: 2,
      });
      try {
        await navigator.clipboard.writeText(button.dataset.lpCopy || '');
      } catch {
        return; // clipboard unavailable: the command stays selectable
      }
      button.classList.add('is-copied');
      button.setAttribute('aria-label', 'Copied');
      window.clearTimeout(timer);
      timer = window.setTimeout(() => {
        button.classList.remove('is-copied');
        button.setAttribute('aria-label', idle);
      }, 2000);
    });
  });
}
