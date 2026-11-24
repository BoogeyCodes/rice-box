import SectionHead from './SectionHead.jsx'
import Reveal from './Reveal.jsx'
import Tilt from './Tilt.jsx'
import { branches, brand } from '../data/menu.js'

export default function Branches() {
  return (
    <section id="branches" className="py-14">
      <div className="mx-auto max-w-6xl px-[max(18px,env(safe-area-inset-left))]">
        <Reveal>
          <SectionHead kicker="Find Us" title="Visit" highlight="Us" sub="Dine in or order from our Park View City kitchen — open daily till 3 AM." />
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {branches.map((b, i) => (
            <Reveal key={b.id} delay={(i % 3) * 80}>
              <Tilt max={9} scale={1.02} className="relative h-full rounded-2xl">
                <article className="flex h-full flex-col gap-2 rounded-2xl border border-rb-red/20 bg-[linear-gradient(170deg,#17171c,#0b0b0d)] p-5 transition duration-300 hover:border-rb-gold/50">
                  <div className="flex items-center gap-2" style={{ transform: 'translateZ(18px)' }}>
                    <Pin />
                    <h3 className="font-display text-lg uppercase text-rb-cream">{b.name}</h3>
                  </div>
                  <p className="flex-1 text-sm leading-snug text-rb-muted">{b.address}</p>
                  <div className="mt-1 flex flex-wrap gap-2">
                    <a href={`tel:${brand.phoneRaw}`} className="inline-flex items-center gap-1.5 rounded-full border border-rb-gold/40 px-3 py-1.5 text-sm font-semibold text-rb-gold transition hover:bg-rb-gold hover:text-rb-bg">📞 {b.phone}</a>
                    <a href={`https://wa.me/${b.whatsapp}`} target="_blank" rel="noreferrer" className="inline-flex items-center gap-1.5 rounded-full bg-[#25D366] px-3 py-1.5 text-sm font-semibold text-white transition hover:brightness-105"><WhatsApp /> WhatsApp</a>
                  </div>
                </article>
              </Tilt>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

const Pin = () => (<svg width="20" height="20" viewBox="0 0 24 24" fill="#ff2a2a"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>)
const WhatsApp = () => (<svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.8.8-2.7-.2-.3A8 8 0 1 1 12 20z" /></svg>)
