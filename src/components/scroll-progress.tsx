'use client'

import { useEffect, useState } from 'react'

export default function ScrollProgress() {
  const [pct, setPct] = useState(0)

  useEffect(() => {
    const onScroll = () => {
      const scrolled = window.scrollY
      const total = document.documentElement.scrollHeight - window.innerHeight
      setPct(total > 0 ? (scrolled / total) * 100 : 0)
    }
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <div
      className="fixed top-0 left-0 z-[70] h-[2px] pointer-events-none"
      style={{
        width: `${pct}%`,
        background: 'linear-gradient(to right, #8A5E36, #A17248, #C4956A)',
        transition: 'width 80ms linear',
      }}
      aria-hidden
    />
  )
}
