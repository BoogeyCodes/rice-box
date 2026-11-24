import { useState } from 'react'
import SectionHead from './SectionHead.jsx'
import Reveal from './Reveal.jsx'
import Tilt from './Tilt.jsx'
import { bestSellers, fmtPrice } from '../data/menu.js'
import { useCart } from '../context/CartContext.jsx'

const BASE = import.meta.env.BASE_URL

export default function BestSellers() {
  return (
    <section id="bestsellers" className="py-14">
      <div className="mx-auto max-w-6xl px-[max(18px,env(safe-area-inset-left))]">
        <Reveal>
          <SectionHead kicker="Most Loved" title="Best" highlight="Sellers" sub="The dishes our Park View City regulars order again and again." />
        </Reveal>
        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {bestSellers.map((b, i) => (
            <Reveal key={b.id} delay={(i % 3) * 80}>
              <ItemCard item={b} />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function ItemCard({ item: b }) {
  const { add } = useCart()
  const [added, setAdded] = useState(false)
  const addToCart = () => {
    add({ id: b.id, name: b.name, price: b.price })
    setAdded(true)
    window.setTimeout(() => setAdded(false), 1300)
  }
  return (
    <Tilt max={12} scale={1.03} className="relative h-full rounded-[22px]">
      <article className="group relative flex min-h-[300px] w-full overflow-hidden rounded-[22px] border border-rb-red/20 shadow-2xl shadow-black/60 transition duration-300 hover:border-rb-gold/60 hover:shadow-[0_26px_64px_-20px_rgba(255,90,31,.5)]">
        <img src={BASE + b.img} alt={b.name} className="absolute inset-0 z-0 h-full w-full object-cover transition-transform duration-500 group-hover:scale-110" />
        <div className="relative z-10 flex w-full flex-col justify-end gap-2 bg-gradient-to-b from-rb-bg/5 via-rb-bg/40 to-rb-bg/95 p-5">
          <span className="mb-auto self-start rounded-full bg-rb-red px-3 py-1 text-[0.62rem] font-extrabold uppercase tracking-wide text-white">{b.tag}</span>
          <h3 className="font-display text-2xl uppercase leading-none text-rb-cream">{b.name}</h3>
          <div className="mt-1 flex items-end justify-between">
            <div className="rounded-xl bg-gradient-to-br from-rb-gold-light to-rb-gold px-3 py-1 font-display text-[1.7rem] leading-none text-rb-bg shadow-lg shadow-rb-gold/30"><small className="mr-1 text-xs">RS.</small>{b.price}</div>
            <button
              type="button"
              onClick={addToCart}
              className={`relative z-20 rounded-full px-5 py-2.5 font-display text-base uppercase tracking-wide shadow-lg transition active:scale-95 ${
                added ? 'bg-[#25D366] text-white shadow-[#25D366]/40' : 'bg-gradient-to-br from-rb-red to-rb-red-deep text-white shadow-rb-red/40 hover:brightness-110'
              }`}
            >
              {added ? '✓ Added' : '+ Add'}
            </button>
          </div>
        </div>
      </article>
    </Tilt>
  )
}
