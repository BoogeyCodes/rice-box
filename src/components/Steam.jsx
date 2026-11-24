import { useEffect, useRef } from 'react'

/**
 * Rising kitchen steam: soft translucent wisps curl upward and dissipate,
 * over the dark neon Rice Box theme. Fixed behind all content (z -1).
 * Honors prefers-reduced-motion (renders a single calm frame).
 */
export default function Steam() {
  const ref = useRef(null)

  useEffect(() => {
    const canvas = ref.current
    if (!canvas) return
    const ctx = canvas.getContext('2d')
    const reduced = window.matchMedia?.('(prefers-reduced-motion: reduce)').matches
    const DPR = Math.min(window.devicePixelRatio || 1, 2)

    let w = 0
    let h = 0
    let wisps = []
    let raf = 0
    let t = 0

    const makeWisp = (atBottom) => {
      const r = (90 + Math.random() * 180) * DPR
      return {
        x: Math.random() * w,
        y: atBottom ? h + r * 0.4 : Math.random() * h,
        r,
        vy: (0.18 + Math.random() * 0.4) * DPR,
        sway: Math.random() * Math.PI * 2,
        swayAmp: (10 + Math.random() * 30) * DPR,
        life: 0,
        max: 420 + Math.random() * 420,
        tint: Math.random() < 0.25 ? [120, 230, 200] : [230, 228, 220], // mostly white, hint of jade
      }
    }
    const build = () => {
      const n = Math.min(24, Math.floor((w * h) / (95000 * DPR * DPR)))
      wisps = Array.from({ length: n }, () => makeWisp(false))
    }
    const resize = () => {
      w = canvas.width = Math.floor(window.innerWidth * DPR)
      h = canvas.height = Math.floor(window.innerHeight * DPR)
      canvas.style.width = window.innerWidth + 'px'
      canvas.style.height = window.innerHeight + 'px'
      build()
    }

    const frame = () => {
      ctx.clearRect(0, 0, w, h)
      for (let i = 0; i < wisps.length; i++) {
        const s = wisps[i]
        const prog = s.life / s.max
        const alpha = Math.sin(Math.min(1, prog) * Math.PI) * 0.1
        const x = s.x + Math.sin(s.sway + t * 0.6) * s.swayAmp
        const g = ctx.createRadialGradient(x, s.y, 0, x, s.y, s.r)
        const [r1, g1, b1] = s.tint
        g.addColorStop(0, `rgba(${r1},${g1},${b1},${alpha})`)
        g.addColorStop(1, 'rgba(0,0,0,0)')
        ctx.fillStyle = g
        ctx.beginPath()
        ctx.arc(x, s.y, s.r, 0, Math.PI * 2)
        ctx.fill()
        if (!reduced) {
          s.y -= s.vy
          s.r += 0.14 * DPR
          s.life++
          if (s.life > s.max || s.y < -s.r) wisps[i] = makeWisp(true)
        }
      }
      t += 0.016
      if (!reduced) raf = requestAnimationFrame(frame)
    }

    resize()
    frame()
    window.addEventListener('resize', resize)
    return () => {
      cancelAnimationFrame(raf)
      window.removeEventListener('resize', resize)
    }
  }, [])

  return <canvas ref={ref} aria-hidden="true" className="pointer-events-none fixed inset-0" style={{ zIndex: -1 }} />
}
