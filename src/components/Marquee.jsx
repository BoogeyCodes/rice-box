const text = (
  <span className="inline-flex items-center gap-6 whitespace-nowrap px-6 font-display text-base uppercase">
    🥢 Explosive Flavour <b className="text-rb-gold">•</b> Chinese &amp; Thai{' '}
    <b className="text-rb-gold">•</b> Momos · Noodles · Afghani Rice <b className="text-rb-gold">•</b> Open 2 PM – 3 AM{' '}
    <b className="text-rb-gold">•</b> Home Delivery &amp; Takeaway <b className="text-rb-gold">•</b>
  </span>
)

export default function Marquee() {
  return (
    <div className="overflow-hidden border-y border-rb-red/20 bg-gradient-to-r from-rb-red/10 to-rb-gold/5">
      <div className="flex w-max animate-marquee py-2.5">
        {text}
        {text}
      </div>
    </div>
  )
}
