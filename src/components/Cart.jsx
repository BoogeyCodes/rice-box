import { useEffect, useState } from 'react'
import { useCart } from '../context/CartContext.jsx'
import { fmtPrice } from '../data/menu.js'
import CheckoutModal from './CheckoutModal.jsx'

export default function Cart() {
  const { items, count, total, inc, dec, remove, clear } = useCart()
  const [open, setOpen] = useState(false)
  const [orderNote, setOrderNote] = useState('')
  const [checkoutOpen, setCheckoutOpen] = useState(false)

  // Lock background scroll while the drawer is open
  useEffect(() => {
    if (!open) return
    const prev = document.body.style.overflow
    document.body.style.overflow = 'hidden'
    return () => {
      document.body.style.overflow = prev
    }
  }, [open])

  return (
    <>
      <button
        type="button"
        onClick={() => setOpen(true)}
        aria-label="Open cart"
        className="fixed right-5 z-40 flex items-center gap-2 rounded-full bg-gradient-to-br from-rb-red to-rb-red-deep px-5 py-3.5 font-display uppercase tracking-wide text-white shadow-xl shadow-rb-red/50 transition hover:-translate-y-0.5"
        style={{ bottom: 'calc(1.25rem + env(safe-area-inset-bottom,0px))' }}
      >
        <CartIcon />
        <span className="hidden sm:inline">Cart</span>
        {count > 0 && (
          <span className="grid h-6 min-w-6 place-items-center rounded-full bg-rb-gold px-1.5 text-sm font-bold text-rb-bg">{count}</span>
        )}
      </button>

      {open && <div className="fixed inset-0 z-50 bg-black/60 backdrop-blur-sm" onClick={() => setOpen(false)} />}

      <aside
        className={`fixed right-0 top-0 z-50 flex h-full w-full max-w-md flex-col border-l border-rb-red/20 bg-rb-bg2 shadow-2xl transition-transform duration-300 ${open ? 'translate-x-0' : 'translate-x-full'}`}
        aria-hidden={!open}
      >
        <header className="flex items-center justify-between bg-gradient-to-r from-rb-panel to-rb-bg px-5 py-4">
          <div className="flex items-center gap-2 font-display text-lg uppercase">
            <CartIcon /> Your Order
            {count > 0 && <span className="ml-1 rounded-full bg-rb-gold px-2 py-0.5 text-sm text-rb-bg">{count}</span>}
          </div>
          <button type="button" onClick={() => setOpen(false)} aria-label="Close cart" className="grid h-9 w-9 place-items-center rounded-lg text-rb-cream/70 transition hover:bg-white/10"><X /></button>
        </header>

        <div className="flex-1 overflow-y-auto px-5 py-4">
          {items.length === 0 ? (
            <div className="flex h-full flex-col items-center justify-center text-center text-rb-muted">
              <div className="mb-3 text-5xl">🛒</div>
              <p className="font-display text-lg uppercase text-rb-cream">Your cart is empty</p>
              <p className="mt-1 text-sm">Add items from the menu to start your order.</p>
            </div>
          ) : (
            <ul className="flex flex-col gap-3">
              {items.map((i) => (
                <li key={i.id} className="rounded-xl border border-white/5 bg-rb-panel p-3.5">
                  <div className="flex items-start justify-between gap-2">
                    <div className="min-w-0 flex-1">
                      <div className="font-semibold text-rb-cream">{i.name}</div>
                      <div className="text-xs text-rb-muted">{fmtPrice(i.price)} each</div>
                    </div>
                    <button type="button" onClick={() => remove(i.id)} aria-label={`Remove ${i.name}`} className="grid h-7 w-7 flex-none place-items-center rounded-md text-rb-muted transition hover:bg-rb-red/15 hover:text-rb-red"><Trash /></button>
                  </div>
                  {(i.addons?.length > 0 || i.note) && (
                    <div className="mt-2 flex flex-col gap-1.5 rounded-lg bg-rb-bg px-3 py-2 text-xs">
                      {i.addons?.length > 0 && (
                        <div className="flex flex-wrap gap-1.5">
                          {i.addons.map((a) => (
                            <span key={a.name} className="rounded-full bg-rb-gold/20 px-2 py-0.5 font-semibold text-rb-gold">+ {a.name}</span>
                          ))}
                        </div>
                      )}
                      {i.note && (
                        <div className="flex items-start gap-1.5 text-rb-muted"><span>📝</span><span className="italic">{i.note}</span></div>
                      )}
                    </div>
                  )}
                  <div className="mt-2.5 flex items-center justify-between">
                    <div className="flex items-center gap-1.5">
                      <QtyBtn onClick={() => dec(i.id)} label="−" />
                      <span className="w-6 text-center font-display">{i.qty}</span>
                      <QtyBtn onClick={() => inc(i.id)} label="+" />
                    </div>
                    <div className="font-display text-rb-gold">{fmtPrice(i.qty * i.price)}</div>
                  </div>
                </li>
              ))}
            </ul>
          )}
        </div>

        {items.length > 0 && (
          <footer className="border-t border-white/10 bg-rb-bg px-5 py-4">
            <label htmlFor="rb-order-note" className="mb-1 block text-xs font-semibold text-rb-muted">Note for the whole order (optional)</label>
            <input
              id="rb-order-note"
              type="text"
              value={orderNote}
              onChange={(e) => setOrderNote(e.target.value)}
              maxLength={160}
              placeholder="e.g. Call on arrival, ring the bell…"
              className="mb-3 w-full rounded-xl border border-white/10 bg-rb-panel px-3.5 py-2.5 text-sm text-rb-cream outline-none transition placeholder:text-rb-muted/70 focus:border-rb-gold"
            />
            <div className="mb-3 flex items-center justify-between">
              <span className="font-display text-base uppercase">Total</span>
              <span className="font-display text-2xl text-rb-gold">{fmtPrice(total)}</span>
            </div>
            <button type="button" onClick={() => setCheckoutOpen(true)} className="flex w-full items-center justify-center gap-2.5 rounded-full bg-[#25D366] px-6 py-3.5 font-display uppercase tracking-wide text-white shadow-lg transition hover:brightness-105">
              <WhatsApp /> Order on WhatsApp
            </button>
            <button type="button" onClick={clear} className="mt-2 w-full rounded-full py-2 text-sm font-semibold text-rb-muted transition hover:text-rb-red">Clear cart</button>
            <p className="mt-2 text-center text-xs text-rb-muted">You'll confirm your name &amp; address next.</p>
          </footer>
        )}
      </aside>

      <CheckoutModal open={checkoutOpen} onClose={() => setCheckoutOpen(false)} items={items} total={total} orderNote={orderNote} />
    </>
  )
}

function QtyBtn({ onClick, label }) {
  return (
    <button type="button" onClick={onClick} className="grid h-7 w-7 place-items-center rounded-md border border-white/10 bg-rb-bg font-bold text-rb-gold transition hover:bg-rb-gold hover:text-rb-bg">{label}</button>
  )
}
const CartIcon = () => (
  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="9" cy="21" r="1" /><circle cx="19" cy="21" r="1" /><path d="M2.5 3h2l2.6 13.4a1.5 1.5 0 0 0 1.5 1.1h7.7a1.5 1.5 0 0 0 1.5-1.1L21 7H6" /></svg>
)
const X = () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>)
const Trash = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round"><path d="M4 7h16M9 7V5h6v2M7 7l1 13h8l1-13" /></svg>)
const WhatsApp = () => (<svg width="19" height="19" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.8.8-2.7-.2-.3A8 8 0 1 1 12 20zm4.4-6c-.2-.1-1.4-.7-1.6-.8s-.4-.1-.5.1-.6.8-.8 1-.3.2-.5.1a6.5 6.5 0 0 1-3.2-2.8c-.2-.4.2-.4.6-1.2a.4.4 0 0 0 0-.4l-.8-1.8c-.2-.5-.4-.4-.5-.4h-.5a.9.9 0 0 0-.7.3A2.8 2.8 0 0 0 6.5 9a4.9 4.9 0 0 0 1 2.6 11.2 11.2 0 0 0 4.3 3.8c1.6.6 1.9.5 2.3.5a2.5 2.5 0 0 0 1.6-1.1 2 2 0 0 0 .1-1.1c0-.1-.2-.2-.4-.3z" /></svg>)
