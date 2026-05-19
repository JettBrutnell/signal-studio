'use client'

import Script from 'next/script'
import { Analytics } from '@vercel/analytics/react'
import { SpeedInsights } from '@vercel/speed-insights/next'

/* ── Microsoft Clarity ─────────────────────────────────────────────
   Free: unlimited heatmaps, session recordings, scroll depth,
   rage clicks, dead clicks, AI summaries.

   1. Sign up at https://clarity.microsoft.com
   2. Create a project for clearmotive.co
   3. Copy your project ID (e.g. "abc123xyz")
   4. Add to .env.local:  NEXT_PUBLIC_CLARITY_ID=abc123xyz
   ─────────────────────────────────────────────────────────────── */
function ClarityScript() {
  const id = process.env.NEXT_PUBLIC_CLARITY_ID
  if (!id) return null

  return (
    <Script
      id="microsoft-clarity"
      strategy="afterInteractive"
    >
      {`(function(c,l,a,r,i,t,y){
        c[a]=c[a]||function(){(c[a].q=c[a].q||[]).push(arguments)};
        t=l.createElement(r);t.async=1;t.src="https://www.clarity.ms/tag/"+i;
        y=l.getElementsByTagName(r)[0];y.parentNode.insertBefore(t,y);
      })(window,document,"clarity","script","${id}");`}
    </Script>
  )
}

/* ── Combined analytics provider ──────────────────────────────── */
export default function AnalyticsProvider() {
  return (
    <>
      <ClarityScript />
      <Analytics />
      <SpeedInsights />
    </>
  )
}
