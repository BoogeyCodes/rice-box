export default function Logo({ size = 34, className = '' }) {
  return (
    <svg width={size} height={size} viewBox="0 0 48 48" className={className} aria-hidden="true">
      {/* chopsticks */}
      <g stroke="#16d6a4" strokeWidth="2" strokeLinecap="round">
        <path d="M30 6 L24 22" />
        <path d="M34 7 L27 22" />
      </g>
      {/* takeout box */}
      <path d="M11 20 h26 l-3 18 a2 2 0 0 1 -2 1.6 H16 a2 2 0 0 1 -2 -1.6 z" fill="#ff6a1a" />
      <path d="M9 18 h30 l-1.5 4 H10.5 z" fill="#e8450f" />
      <path d="M16 26 h16 M15 31 h18" stroke="#0a0a0b" strokeWidth="1.6" strokeLinecap="round" opacity="0.35" />
    </svg>
  )
}
