import { PROCESS_STEPS } from '../content.js'

export default function Process() {
  return (
    <section id="process" className="py-16 sm:py-24 md:py-32">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
        <p className="eyebrow"> &mdash; How It Works</p>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mt-3 mb-10 sm:mb-16 leading-snug max-w-xl">
          A straightforward path from first call to resolution.
        </h2>
        <div className="grid sm:grid-cols-2 md:grid-cols-4 gap-8 sm:gap-10 relative">
          <div className="hidden md:block absolute top-6 left-0 right-0 h-px bg-hairline" />
          {PROCESS_STEPS.map((step, i) => (
            <div key={step.title} className="relative text-left">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full bg-paper border border-brass text-brass-dark font-display text-base sm:text-lg flex items-center justify-center relative z-10">
                {i + 1}
              </div>
              <h3 className="font-display text-base sm:text-lg mt-5 sm:mt-6 mb-2">{step.title}</h3>
              <p className="text-slate text-sm leading-relaxed">{step.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
