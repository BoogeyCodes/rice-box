import { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import { addonOptions, fmtPrice } from '../data/menu.js'

export default function ItemModal({ base, onClose }) {
  const { add } = useCart()
  const [qty, setQty] = useState(1)
  const [addons, setAddons] = useState([])
  const [note, setNote] = useState('')

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  const chosen = addonOptions.filter((a) => addons.includes(a.id))
  const unit = base.price + chosen.reduce((n, a) => n + a.price, 0)
  const lineTotal = unit * qty
  const toggle = (id) =>
    setAddons((p) => (p.includes(id) ? p.filter((x) => x !== id) : [...p, id]))

  const confirm = () => {
    const trimmed = note.trim()
    add({
      id: `${base.id}|${[...addons].sort().join(',')}|${trimmed}`,
      name: base.name,
      price: unit,
      addons: chosen.map((a) => ({ name: a.name, price: a.price })),
      note: trimmed,
      qty,
    })
    onClose()
  }

  return (
    <div
      className="fixed inset-0 z-[60] flex items-end justify-center bg-black/70 backdrop-blur-sm sm:items-center"
      onClick={onClose}
    >
      <div
        className="flex max-h-[92vh] w-full max-w-lg flex-col overflow-hidden rounded-t-3xl border border-rb-red/25 bg-rb-bg2 shadow-2xl sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
      >
        <div className="flex items-start justify-between gap-3 bg-gradient-to-r from-rb-panel to-rb-bg px-5 py-4">
          <div>
            <div className="font-display text-xl uppercase">{base.name}</div>
            <div className="text-sm text-rb-gold">{fmtPrice(base.price)}</div>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" className="grid h-9 w-9 flex-none place-items-center rounded-lg text-rb-cream/70 transition hover:bg-white/10">
            <X />
          </button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          <h4 className="mb-1 font-display text-base uppercase text-rb-gold">
            Add extras <span className="ml-1 text-xs normal-case text-rb-muted">optional</span>
          </h4>
          <p className="mb-3 text-xs text-rb-muted">Tick anything you'd like to add on.</p>
          <div className="grid grid-cols-1 gap-2 sm:grid-cols-2">
            {addonOptions.map((a) => {
              const on = addons.includes(a.id)
              return (
                <button
                  key={a.id}
                  type="button"
                  onClick={() => toggle(a.id)}
                  className={`flex items-center justify-between gap-2 rounded-xl border px-3 py-2.5 text-left transition ${
                    on ? 'border-rb-gold bg-rb-gold/15' : 'border-white/10 bg-rb-panel hover:border-rb-gold/50'
                  }`}
                >
                  <span className="flex items-center gap-2">
                    <span className={`grid h-5 w-5 flex-none place-items-center rounded-md border ${on ? 'border-rb-gold bg-rb-gold text-rb-bg' : 'border-white/25'}`}>
                      {on && <Check />}
                    </span>
                    <span className="text-sm font-semibold text-rb-cream">{a.name}</span>
                  </span>
                  <span className="whitespace-nowrap text-sm font-bold text-rb-gold">+{a.price}</span>
                </button>
              )
            })}
          </div>

          <h4 className="mb-1 mt-5 font-display text-base uppercase text-rb-gold">
            Special instructions <span className="ml-1 text-xs normal-case text-rb-muted">optional</span>
          </h4>
          <textarea
            id="rb-item-note"
            value={note}
            onChange={(e) => setNote(e.target.value)}
            maxLength={200}
            rows={3}
            placeholder="e.g. Extra spicy, thin crust, no olives…"
            className="w-full resize-none rounded-xl border border-white/10 bg-rb-panel px-3.5 py-2.5 text-rb-cream outline-none transition placeholder:text-rb-muted/70 focus:border-rb-gold"
          />
          <div className="mt-1 text-right text-xs text-rb-muted">{note.length}/200</div>
        </div>

        <div className="border-t border-white/10 bg-rb-bg px-5 py-4">
          <div className="flex items-center gap-3">
            <div className="flex items-center gap-2 rounded-full border border-white/10 bg-rb-panel px-2 py-1.5">
              <button type="button" onClick={() => setQty((q) => Math.max(1, q - 1))} aria-label="Decrease" className="grid h-8 w-8 place-items-center rounded-full bg-rb-bg2 font-bold text-rb-gold transition hover:bg-rb-gold hover:text-rb-bg">−</button>
              <span className="w-7 text-center font-display text-lg">{qty}</span>
              <button type="button" onClick={() => setQty((q) => q + 1)} aria-label="Increase" className="grid h-8 w-8 place-items-center rounded-full bg-rb-bg2 font-bold text-rb-gold transition hover:bg-rb-gold hover:text-rb-bg">+</button>
            </div>
            <button
              type="button"
              onClick={confirm}
              className="flex flex-1 items-center justify-center gap-2 rounded-full bg-gradient-to-br from-rb-red to-rb-red-deep px-5 py-3 font-display uppercase tracking-wide text-white shadow-lg shadow-rb-red/40 transition hover:brightness-110"
            >
              Add · {fmtPrice(lineTotal)}
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

const X = () => (
  <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>
)
const Check = () => (
  <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="3.5" strokeLinecap="round" strokeLinejoin="round"><path d="M5 12l5 5L20 6" /></svg>
)
