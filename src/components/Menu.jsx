import { useState } from 'react'
import SectionHead from './SectionHead.jsx'
import Reveal from './Reveal.jsx'
import { categories } from '../data/menu.js'
import { useItemModal } from '../context/ModalContext.jsx'

const BASE = import.meta.env.BASE_URL

export default function Menu() {
  const [open, setOpen] = useState(() => new Set([categories[0].id]))
  const toggle = (id) =>
    setOpen((prev) => {
      const next = new Set(prev)
      next.has(id) ? next.delete(id) : next.add(id)
      return next
    })

  return (
    <section id="menu" className="py-14">
      <div className="mx-auto max-w-4xl px-[max(18px,env(safe-area-inset-left))]">
        <Reveal>
          <SectionHead kicker="Dig In" title="The" highlight="Menu" sub="Wok-tossed Chinese & fiery Thai — tap a section to open it. Half or Full, your call." />
        </Reveal>
        <div className="flex flex-col gap-3">
          {categories.map((c, i) => (
            <Reveal key={c.id} delay={(i % 4) * 50}>
              <Panel cat={c} isOpen={open.has(c.id)} onToggle={() => toggle(c.id)} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Panel({ cat, isOpen, onToggle }) {
  const { open: openItem } = useItemModal()
  const add = (item, variant) => {
    const label = variant ? `${item.name} (${variant.label})` : item.name
    openItem({ id: `${cat.id}-${label}`, name: label, price: variant ? variant.price : item.price })
  }

  return (
    <div id={cat.id} className={`scroll-mt-24 overflow-hidden rounded-2xl border bg-rb-panel transition-colors ${isOpen ? 'border-rb-red/60' : 'border-rb-red/15'}`}>
      <button
        type="button"
        onClick={onToggle}
        aria-expanded={isOpen}
        className="flex w-full items-center gap-4 p-3 text-left sm:p-4"
      >
        <span className="relative h-14 w-14 flex-none overflow-hidden rounded-xl">
          <img src={BASE + cat.banner} alt="" className="h-full w-full object-cover" />
          <span className={`absolute inset-0 ${isOpen ? 'bg-rb-red/10' : 'bg-rb-bg/40'}`} />
        </span>
        <span className="min-w-0 flex-1">
          <span className="flex items-center gap-2">
            <span className="text-lg">{cat.emoji}</span>
            <span className="font-display text-xl uppercase leading-none text-rb-cream sm:text-2xl">{cat.name}</span>
          </span>
          {cat.note && <span className="mt-1 block truncate text-xs text-rb-muted">{cat.note}</span>}
        </span>
        <span className="rounded-full border border-rb-gold/30 px-2.5 py-1 text-xs font-bold text-rb-gold">{cat.items.length}</span>
        <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.4" strokeLinecap="round" className={`flex-none text-rb-red transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}>
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <ul className="animate-fade-up border-t border-rb-red/15 px-3 pb-3 sm:px-5">
          {cat.items.map((it) => {
            const variants = Array.isArray(it.variants)
            return (
              <li key={it.name} className="flex items-center gap-3 border-b border-dashed border-rb-red/12 py-3 last:border-b-0">
                <span className="min-w-0 flex-1 font-semibold text-rb-cream">{it.name}</span>
                {variants ? (
                  <div className="flex flex-none gap-2">
                    {it.variants.map((v) => (
                      <button
                        key={v.label}
                        type="button"
                        onClick={() => add(it, v)}
                        className="group flex items-center gap-1.5 rounded-lg border border-rb-red/25 bg-rb-bg px-2.5 py-1.5 text-sm transition hover:border-rb-gold hover:bg-rb-gold/10 active:scale-95"
                      >
                        <span className="text-[0.6rem] font-bold uppercase text-rb-muted group-hover:text-rb-gold">{v.label}</span>
                        <span className="font-semibold text-rb-gold">{v.price}</span>
                        <Plus />
                      </button>
                    ))}
                  </div>
                ) : (
                  <>
                    <span className="flex-none font-display text-lg tracking-wide text-rb-gold">{it.price}</span>
                    <button
                      type="button"
                      onClick={() => add(it)}
                      aria-label={`Add ${it.name}`}
                      className="grid h-8 w-8 flex-none place-items-center rounded-full bg-gradient-to-br from-rb-red to-rb-red-deep text-white shadow-md shadow-rb-red/30 transition hover:brightness-110 active:scale-90"
                    >
                      <Plus />
                    </button>
                  </>
                )}
              </li>
            )
          })}
        </ul>
      )}
    </div>
  )
}

const Plus = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3" strokeLinecap="round"><path d="M12 5v14M5 12h14" /></svg>
)
