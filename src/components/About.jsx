import aboutOffice from '../assets/img/about-office.svg'

export default function About() {
  return (
    <section id="about" className="py-16 sm:py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 grid md:grid-cols-2 gap-10 md:gap-14 items-center">
        <div className="order-2 md:order-1">
          <p className="eyebrow">No. 01 &mdash; About the Firm</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mt-3 mb-5 sm:mb-6 leading-snug">
            Judgment earned through decades of practice.
          </h2>
          <p className="text-slate leading-relaxed mb-4 text-sm sm:text-base">
            Bhati &amp; Co was founded on a simple premise: clients deserve a lawyer who treats their matter
            with the same rigor as if it were the firm&rsquo;s only case. That principle still shapes how we staff,
            prepare, and argue every file today.
          </p>
          <p className="text-slate leading-relaxed mb-8 text-sm sm:text-base">
            We are a mid-sized private practice, small enough that clients work directly with senior counsel, and
            resourced enough to take on complex disputes and transactions.
          </p>
          <dl className="grid grid-cols-3 gap-4 sm:gap-6 border-t border-hairline pt-6 sm:pt-8">
            <div>
              <dt className="font-display text-2xl sm:text-3xl text-brass-dark">27+</dt>
              <dd className="text-[11px] sm:text-xs uppercase tracking-wide text-slate mt-1">Years in Practice</dd>
            </div>
            <div>
              <dt className="font-display text-2xl sm:text-3xl text-brass-dark">1,200+</dt>
              <dd className="text-[11px] sm:text-xs uppercase tracking-wide text-slate mt-1">Matters Resolved</dd>
            </div>
            <div>
              <dt className="font-display text-2xl sm:text-3xl text-brass-dark">6</dt>
              <dd className="text-[11px] sm:text-xs uppercase tracking-wide text-slate mt-1">Practice Areas</dd>
            </div>
          </dl>
        </div>
        <div className="order-1 md:order-2">
          <img src={aboutOffice} alt="Whitfield & Cole office" className="w-full h-auto shadow-sm" />
        </div>
      </div>
    </section>
  )
}
