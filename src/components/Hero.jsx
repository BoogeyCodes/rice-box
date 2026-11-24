import Tilt from './Tilt.jsx'

const BASE = import.meta.env.BASE_URL

export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden">
      <div className="mx-auto grid max-w-6xl grid-cols-1 items-center gap-10 px-[max(18px,env(safe-area-inset-left))] py-12 lg:grid-cols-[1.02fr_0.98fr] lg:py-16">
        {/* Copy */}
        <div className="relative z-10 animate-fade-up">
          <span className="inline-flex items-center gap-2.5 text-xs font-extrabold uppercase tracking-[0.28em] text-rb-gold">
            <span className="h-2.5 w-2.5 animate-glow rounded-full bg-rb-red shadow-[0_0_12px_#ff6a1a]" />
            Chinese · Thai · Park View City
          </span>
          <h1 className="mt-5 font-display text-[clamp(3.4rem,13vw,7rem)] uppercase leading-[0.9]">
            <span className="block text-rb-cream drop-shadow-[0_0_14px_rgba(244,242,236,.25)]">Rice</span>
            <span className="block animate-neon bg-gradient-to-br from-rb-red to-rb-red-deep bg-clip-text text-transparent">Box</span>
          </h1>
          <div className="mt-4 h-1 w-40 rounded-full bg-gradient-to-r from-rb-red via-rb-gold to-transparent shadow-[0_0_14px_rgba(255,106,26,.7)]" />
          <p className="mt-4 font-script text-xl text-rb-gold-light sm:text-2xl">Explosive flavour in every bite</p>
          <p className="mt-4 max-w-[44ch] text-lg text-rb-muted">
            Wok-tossed Chinese &amp; fiery Thai — special chicken gravies, sizzling noodles, steamed
            momos and Afghani rice. Home delivery &amp; takeaway in Park View City, Lahore.
          </p>
          <div className="mb-7 mt-7 flex flex-wrap gap-3">
            <a href="#menu" className="rb-btn"><span className="rb-sheen" />Explore Menu →</a>
            <a href="#bestsellers" className="rb-btn-ghost">⭐ Best Sellers</a>
          </div>
          <div className="flex flex-wrap gap-2">
            {['Rice', 'Noodles', 'Momos', 'Thai', 'Seafood', 'Soups'].map((t) => (
              <span key={t} className="rounded-full border border-rb-gold/30 px-3 py-1 text-xs font-bold uppercase tracking-wide text-rb-gold">{t}</span>
            ))}
          </div>
        </div>

        {/* Neon-framed steaming bowl */}
        <div className="relative grid min-h-[360px] place-items-center" style={{ perspective: '1100px' }}>
          <div className="absolute aspect-square w-[80%] animate-glow rounded-full bg-[radial-gradient(circle,rgba(255,106,26,.45),transparent_64%)] blur-[48px]" />
          <div className="absolute aspect-square w-[90%] animate-glow rounded-full bg-[radial-gradient(circle,rgba(22,214,164,.22),transparent_66%)] blur-[52px]" />
          <Tilt max={14} scale={1.03} className="relative z-[1] w-[min(420px,88%)]">
            <div className="animate-floaty overflow-hidden rounded-[28px] border-2 border-rb-red/70 shadow-[0_0_0_1px_rgba(22,214,164,.4),0_0_40px_-4px_rgba(255,106,26,.6),0_50px_90px_-24px_#000]">
              <span className="rb-sheen z-[2]" />
              <img src={BASE + 'images/food/hero.jpg'} alt="Rice Box noodles" className="aspect-square w-full object-cover" />
            </div>
            <div
              className="absolute -right-3 top-4 z-[6] grid h-24 w-24 -rotate-6 place-items-center rounded-2xl border-2 border-rb-gold bg-rb-bg text-center leading-tight text-rb-gold shadow-[0_0_24px_-2px_rgba(22,214,164,.8)]"
              style={{ transform: 'translateZ(80px) rotate(-8deg)' }}
            >
              <span>
                <span className="block text-2xl">🕑</span>
                <small className="block font-display text-xs">Till 3 AM</small>
              </span>
            </div>
          </Tilt>
        </div>
      </div>
    </section>
  )
}
