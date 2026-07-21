import heroBg from '../assets/img/hero-bg.svg'

export default function Hero() {
  return (
    <section
      id="top"
      className="relative min-h-[560px] h-[100svh] flex items-center justify-center text-center overflow-hidden"
    >
      <img src={heroBg} alt="" className="absolute inset-0 w-full h-full object-cover" />
      <div className="absolute inset-0 bg-ink/75" />
      <div className="relative z-10 px-5 sm:px-6 max-w-3xl pt-16">
        <p className="uppercase tracking-[0.3em] sm:tracking-[0.35em] text-brass text-xs sm:text-sm mb-5 sm:mb-6 fade-up">
          Attorneys at Law &middot; Since 1998
        </p>
        <h1
          className="font-display text-3xl sm:text-5xl md:text-6xl leading-tight text-paper fade-up"
          style={{ animationDelay: '.1s' }}
        >
          Steady Counsel for Life&rsquo;s Most Consequential Moments
        </h1>
        <p
          className="mt-5 sm:mt-6 text-paper/80 text-sm sm:text-base md:text-lg max-w-xl mx-auto fade-up"
          style={{ animationDelay: '.2s' }}
        >
          Whitfield &amp; Cole represents individuals, families, and businesses with clear guidance and disciplined
          advocacy &mdash; from first consultation to final resolution.
        </p>
        <div
          className="mt-8 sm:mt-10 flex flex-col sm:flex-row gap-3 sm:gap-4 justify-center fade-up"
          style={{ animationDelay: '.3s' }}
        >
          <a
            href="#contact"
            className="bg-brass text-ink px-8 py-3 text-sm uppercase tracking-wide hover:bg-brass-light transition-colors"
          >
            Request a Consultation
          </a>
          <a
            href="#practice-areas"
            className="border border-paper/40 text-paper px-8 py-3 text-sm uppercase tracking-wide hover:border-paper transition-colors"
          >
            Our Practice Areas
          </a>
        </div>
      </div>
      <a
        href="#trust"
        className="hidden sm:block absolute bottom-8 left-1/2 -translate-x-1/2 text-paper/60 z-10"
        aria-hidden="true"
      >
        <svg className="h-6 w-6 animate-bounce-slow" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.2">
          <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 8.25l-7.5 7.5-7.5-7.5" />
        </svg>
      </a>
    </section>
  )
}
