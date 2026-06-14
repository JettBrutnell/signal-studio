'use client'

import { useEffect, useRef } from 'react'
import gsap from 'gsap'

export default function CursorFollower() {
  const dotRef  = useRef<HTMLDivElement>(null)
  const ringRef = useRef<HTMLDivElement>(null)

  useEffect(() => {
    const dot  = dotRef.current
    const ring = ringRef.current
    if (!dot || !ring) return

    // Touch devices and reduced-motion: skip entirely
    if (window.matchMedia('(pointer: coarse)').matches) return
    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return

    // Centre both elements on the cursor via xPercent/yPercent
    gsap.set([dot, ring], { xPercent: -50, yPercent: -50, opacity: 0 })

    let visible = false

    const onMove = (e: MouseEvent) => {
      if (!visible) {
        gsap.to([dot, ring], { opacity: 1, duration: 0.3 })
        visible = true
      }
      // Dot: tight follow
      gsap.to(dot, { x: e.clientX, y: e.clientY, duration: 0.12, ease: 'power3.out' })
      // Ring: lazy follow
      gsap.to(ring, { x: e.clientX, y: e.clientY, duration: 0.55, ease: 'power2.out' })
    }

    const onEnterInteractive = () => {
      gsap.to(dot,  { scale: 0.3, duration: 0.2, ease: 'power2.out' })
      gsap.to(ring, { scale: 2.2, opacity: 0.5, duration: 0.3, ease: 'power2.out' })
    }
    const onLeaveInteractive = () => {
      gsap.to(dot,  { scale: 1, duration: 0.2, ease: 'power2.out' })
      gsap.to(ring, { scale: 1, opacity: 1, duration: 0.3, ease: 'power2.out' })
    }
    const onLeaveWindow = () => {
      gsap.to([dot, ring], { opacity: 0, duration: 0.3 })
      visible = false
    }

    document.addEventListener('mousemove', onMove, { passive: true })
    document.addEventListener('mouseleave', onLeaveWindow)

    const addListeners = () => {
      document.querySelectorAll('a, button, [role="button"], label').forEach(el => {
        el.addEventListener('mouseenter', onEnterInteractive)
        el.addEventListener('mouseleave', onLeaveInteractive)
      })
    }
    addListeners()

    return () => {
      document.removeEventListener('mousemove', onMove)
      document.removeEventListener('mouseleave', onLeaveWindow)
      document.querySelectorAll('a, button, [role="button"], label').forEach(el => {
        el.removeEventListener('mouseenter', onEnterInteractive)
        el.removeEventListener('mouseleave', onLeaveInteractive)
      })
    }
  }, [])

  return (
    <>
      {/* Inner copper dot */}
      <div
        ref={dotRef}
        className="fixed top-0 left-0 z-[9998] pointer-events-none rounded-full"
        style={{
          width: 8,
          height: 8,
          background: '#A17248',
          willChange: 'transform',
        }}
        aria-hidden
      />
      {/* Outer ring */}
      <div
        ref={ringRef}
        className="fixed top-0 left-0 z-[9997] pointer-events-none rounded-full"
        style={{
          width: 32,
          height: 32,
          border: '1.5px solid rgba(161,114,72,0.5)',
          willChange: 'transform',
        }}
        aria-hidden
      />
    </>
  )
}
