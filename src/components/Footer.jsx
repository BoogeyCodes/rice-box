import Logo from './Logo.jsx'
import { brand } from '../data/menu.js'

export default function Footer() {
  return (
    <footer id="contact" className="border-t border-rb-red/20 bg-[#070708]">
      <div className="mx-auto grid max-w-6xl grid-cols-1 gap-7 px-[max(18px,env(safe-area-inset-left))] pb-8 pt-12 md:grid-cols-[1.3fr_1fr_1fr]">
        <div>
          <div className="flex items-center gap-2.5">
            <Logo size={38} />
            <div className="font-display text-2xl uppercase leading-none">
              <span className="text-rb-cream">Rice</span>
              <span className="bg-gradient-to-br from-rb-red to-rb-red-deep bg-clip-text text-transparent">Box</span>
            </div>
          </div>
          <div className="mt-2 font-script text-lg text-rb-gold-light">{brand.tagline}</div>
          <p className="mt-2 max-w-[36ch] text-sm text-rb-muted">Wok-tossed Chinese &amp; fiery Thai — rice, noodles, gravies, momos &amp; more. {brand.delivery} in Park View City, Lahore.</p>
        </div>

        <div>
          <h4 className="mb-3.5 font-display text-xl uppercase">Order &amp; Contact</h4>
          <Ci icon="📞" k="Call" v={<a href={`tel:${brand.phoneRaw}`} className="hover:text-rb-gold">{brand.phone}</a>} />
          <Ci icon="📞" k="Also" v={<a href={`tel:${brand.phone2Raw}`} className="hover:text-rb-gold">{brand.phone2}</a>} />
          <Ci icon="💬" k="WhatsApp" v={<a href={`https://wa.me/${brand.whatsapp}`} target="_blank" rel="noreferrer" className="hover:text-rb-gold">{brand.whatsappDisplay}</a>} />
        </div>

        <div>
          <h4 className="mb-3.5 font-display text-xl uppercase">Visit</h4>
          <Ci icon="📍" k="Location" v="Shop 16, Rose Market, Park View City, Lahore" />
          <Ci icon="🕑" k="Open Daily" v={brand.timing} />
        </div>
      </div>
      <div className="border-t border-rb-red/20">
        <div className="mx-auto max-w-6xl px-[max(18px,env(safe-area-inset-left))] py-4 text-center text-sm text-rb-muted/70">© {new Date().getFullYear()} Rice Box · {brand.tagline}</div>
      </div>
    </footer>
  )
}

function Ci({ icon, k, v }) {
  return (
    <div className="mb-3.5 flex items-start gap-3">
      <span className="grid h-9 w-9 flex-none place-items-center rounded-xl border border-rb-red/20 text-rb-gold">{icon}</span>
      <span>
        <span className="text-xs uppercase tracking-wide text-rb-muted">{k}</span>
        <br />
        <span className="font-semibold text-rb-cream">{v}</span>
      </span>
    </div>
  )
}
