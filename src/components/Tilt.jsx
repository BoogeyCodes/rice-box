import { useRef } from 'react'

/** Cursor-reactive 3D perspective tilt with optional glare. Children can use
 *  translateZ(...) for parallax depth (transform-style: preserve-3d is set).
 *  Honors prefers-reduced-motion and stays calm on touch. */
export default function Tilt({
  children,
  className = '',
  max = 10,
  scale = 1.0,
  perspective = 1000,
  glare = false,
  style = {},
}) {
  const ref = useRef(null)
  const reduced =
    typeof window !== 'undefined' &&
    window.matchMedia?.('(prefers-reduced-motion: reduce)').matches

  const onMove = (e) => {
    if (reduced) return
    const el = ref.current
    if (!el) return
    const r = el.getBoundingClientRect()
    const px = (e.clientX - r.left) / r.width
    const py = (e.clientY - r.top) / r.height
    const rx = (0.5 - py) * max * 2
    const ry = (px - 0.5) * max * 2
    el.style.transform = `perspective(${perspective}px) rotateX(${rx.toFixed(2)}deg) rotateY(${ry.toFixed(2)}deg) scale(${scale})`
    if (glare) {
      const g = el.querySelector('[data-glare]')
      if (g)
        g.style.background = `radial-gradient(circle at ${(px * 100).toFixed(0)}% ${(py * 100).toFixed(0)}%, rgba(255,255,255,.2), transparent 55%)`
    }
  }
  const reset = () => {
    const el = ref.current
    if (!el) return
    el.style.transform = `perspective(${perspective}px) rotateX(0deg) rotateY(0deg) scale(1)`
    if (glare) {
      const g = el.querySelector('[data-glare]')
      if (g) g.style.background = 'transparent'
    }
  }

  return (
    <div
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={reset}
      className={className}
      style={{
        transformStyle: 'preserve-3d',
        transition: 'transform 0.2s cubic-bezier(.2,.6,.3,1)',
        willChange: 'transform',
        ...style,
      }}
    >
      {children}
      {glare && (
        <span
          data-glare
          aria-hidden="true"
          className="pointer-events-none absolute inset-0 z-[1] rounded-[inherit]"
          style={{ transition: 'background .25s ease' }}
        />
      )}
    </div>
  )
}
