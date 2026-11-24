export default function SectionHead({ kicker, title, highlight, sub }) {
  return (
    <div className="mb-10 text-center">
      <div className="mb-2 flex items-center justify-center gap-3 text-xs font-extrabold uppercase tracking-[0.28em] text-rb-gold">
        <span className="h-px w-8 bg-rb-gold/50" />
        {kicker}
        <span className="h-px w-8 bg-rb-gold/50" />
      </div>
      <h2 className="font-display text-[clamp(2.2rem,6vw,3.4rem)] uppercase leading-none">
        {title}{' '}
        {highlight && (
          <span className="bg-gradient-to-br from-rb-red to-rb-red-deep bg-clip-text text-transparent drop-shadow-[0_0_14px_rgba(255,106,26,.4)]">
            {highlight}
          </span>
        )}
      </h2>
      {sub && <p className="mx-auto mt-3 max-w-[56ch] text-rb-muted">{sub}</p>}
    </div>
  )
}
