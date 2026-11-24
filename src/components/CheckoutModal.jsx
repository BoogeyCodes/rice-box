import { useEffect, useState } from 'react'
import Tilt from './Tilt.jsx'
import { branches, fmtPrice } from '../data/menu.js'

export default function CheckoutModal({ open, onClose, items, total, orderNote }) {
  const [form, setForm] = useState({ name: '', address: '', block: '', street: '' })
  const [err, setErr] = useState('')

  useEffect(() => {
    const onKey = (e) => e.key === 'Escape' && onClose()
    window.addEventListener('keydown', onKey)
    return () => window.removeEventListener('keydown', onKey)
  }, [onClose])

  if (!open) return null
  const set = (k) => (e) => setForm((f) => ({ ...f, [k]: e.target.value }))

  const placeOrder = (branch) => {
    if (!form.name.trim() || !form.address.trim()) {
      setErr('Please enter your name and address first.')
      return
    }
    const addressParts = [form.address.trim()]
    if (form.block.trim()) addressParts.push(`Block ${form.block.trim()}`)
    if (form.street.trim()) addressParts.push(`Street ${form.street.trim()}`)

    const lines = items.map((i) => {
      let b = `- ${i.qty} x ${i.name} - ${fmtPrice(i.qty * i.price)}`
      if (i.addons?.length) b += `\n   Add-ons: ${i.addons.map((a) => a.name).join(', ')}`
      if (i.note) b += `\n   Note: ${i.note}`
      return b
    })

    let msg =
      `New Order - Rice Box\n` +
      `Branch: ${branch.name}\n\n` +
      `Name: ${form.name.trim()}\n` +
      `Address: ${addressParts.join(', ')}\n\n` +
      `Order:\n` +
      lines.join('\n') +
      `\n\nTotal: ${fmtPrice(total)}`
    if (orderNote?.trim()) msg += `\n\nOrder note: ${orderNote.trim()}`

    window.open(`https://wa.me/${branch.whatsapp}?text=${encodeURIComponent(msg)}`, '_blank')
    onClose()
  }

  return (
    <div className="fixed inset-0 z-[70] flex items-end justify-center bg-black/75 backdrop-blur-sm sm:items-center" onClick={onClose}>
      <div
        className="flex max-h-[94vh] w-full max-w-xl flex-col overflow-hidden rounded-t-3xl border border-rb-red/25 bg-rb-bg2 shadow-2xl sm:rounded-3xl"
        onClick={(e) => e.stopPropagation()}
        role="dialog"
        aria-modal="true"
        style={{ perspective: '1200px' }}
      >
        <div className="flex items-center justify-between bg-gradient-to-r from-rb-panel to-rb-bg px-5 py-4">
          <div>
            <div className="font-display text-xl uppercase">Almost there! 🔥</div>
            <div className="text-sm text-rb-muted">Your details &amp; branch — {fmtPrice(total)}</div>
          </div>
          <button type="button" onClick={onClose} aria-label="Close" className="grid h-9 w-9 place-items-center rounded-lg text-rb-cream/70 transition hover:bg-white/10"><X /></button>
        </div>

        <div className="flex-1 overflow-y-auto px-5 py-5">
          <h4 className="mb-3 font-display text-base uppercase text-rb-gold">Your details</h4>
          <div className="grid grid-cols-1 gap-3 sm:grid-cols-2">
            <Field label="Name *" value={form.name} onChange={set('name')} placeholder="e.g. Ali Khan" full />
            <Field label="Address *" value={form.address} onChange={set('address')} placeholder="House / street address" full />
            <Field label="Block" value={form.block} onChange={set('block')} placeholder="e.g. B" />
            <Field label="Street" value={form.street} onChange={set('street')} placeholder="e.g. 12" />
          </div>
          {err && <div className="mt-3 rounded-lg border border-rb-red/40 bg-rb-red/10 px-3 py-2 text-sm text-rb-red">{err}</div>}

          <h4 className="mb-1 mt-6 font-display text-lg uppercase text-rb-gold">Place your order</h4>
          <p className="mb-3 text-xs text-rb-muted">Tap below — your order opens in WhatsApp, ready to send.</p>
          <div className="grid grid-cols-1 gap-3">
            {branches.map((b) => (
              <Tilt key={b.id} max={12} scale={1.03} className="relative cursor-pointer overflow-hidden rounded-2xl">
                <button
                  type="button"
                  onClick={() => placeOrder(b)}
                  className="flex h-full w-full flex-col items-start gap-1 rounded-2xl border border-rb-red/25 bg-gradient-to-br from-rb-panel to-rb-bg p-4 text-left transition hover:border-rb-gold"
                >
                  <span className="flex items-center gap-2" style={{ transform: 'translateZ(20px)' }}>
                    <Pin />
                    <span className="font-display text-base uppercase leading-none text-rb-cream">{b.name}</span>
                  </span>
                  <span className="text-xs leading-snug text-rb-muted">{b.address}</span>
                  <span className="mt-1 inline-flex items-center gap-1.5 rounded-full bg-[#25D366]/15 px-2.5 py-1 text-xs font-semibold text-[#25D366]"><WhatsApp /> Order here</span>
                </button>
              </Tilt>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

function Field({ label, value, onChange, placeholder, full }) {
  return (
    <label className={`flex flex-col gap-1 ${full ? 'sm:col-span-2' : ''}`}>
      <span className="text-xs font-semibold uppercase tracking-wide text-rb-muted">{label}</span>
      <input type="text" value={value} onChange={onChange} placeholder={placeholder} className="rounded-xl border border-white/10 bg-rb-panel px-3.5 py-2.5 text-rb-cream outline-none transition placeholder:text-rb-muted/60 focus:border-rb-gold" />
    </label>
  )
}

const X = () => (<svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.2" strokeLinecap="round"><path d="M6 6l12 12M18 6L6 18" /></svg>)
const Pin = () => (<svg width="16" height="16" viewBox="0 0 24 24" fill="#ff2a2a"><path d="M12 2a7 7 0 0 0-7 7c0 5 7 13 7 13s7-8 7-13a7 7 0 0 0-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>)
const WhatsApp = () => (<svg width="13" height="13" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2a10 10 0 0 0-8.5 15.3L2 22l4.8-1.4A10 10 0 1 0 12 2zm0 18a8 8 0 0 1-4.1-1.1l-.3-.2-2.8.8.8-2.7-.2-.3A8 8 0 1 1 12 20z" /></svg>)
