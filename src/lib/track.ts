import { track as vercelTrack } from '@vercel/analytics'

/**
 * Track a named event across all analytics providers.
 * - Vercel Analytics: custom events (visible in dashboard)
 * - Microsoft Clarity: custom tags (filterable in recordings)
 */
export function track(event: string, props?: Record<string, string | number>) {
  // Vercel Analytics custom event
  try { vercelTrack(event, props) } catch {}

  // Clarity custom tag — lets you filter session recordings by event
  try {
    const w = window as unknown as { clarity?: (cmd: string, key: string, val: string) => void }
    if (w.clarity) {
      w.clarity('set', event, props ? JSON.stringify(props) : 'true')
    }
  } catch {}
}
