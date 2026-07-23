const VALUE_PROPS = [
  {
    title: 'Direct Access to Senior Counsel',
    desc: 'No hand-offs to unnamed associates — you work with the partner handling your case.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M16.5 10.5V6.75a4.5 4.5 0 10-9 0v3.75M4.5 10.5h15l-1 9a1.5 1.5 0 01-1.5 1.5H7a1.5 1.5 0 01-1.5-1.5l-1-9z" />
    ),
  },
  {
    title: 'Confidential by Default',
    desc: 'Every consultation and case file is handled under strict confidentiality, no exceptions.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12.75l2.25 2.25L15 9m-3-7l7.5 3v6c0 5.25-3.75 9-7.5 10.5C8.25 20 4.5 16.25 4.5 11V5L12 2z" />
    ),
  },
  {
    title: 'Clear, Upfront Fees',
    desc: 'Fee structures are agreed before work begins — no surprise billing at the end of a matter.',
    icon: (
      <path strokeLinecap="round" strokeLinejoin="round" d="M12 6v12m4.5-9.75H10.5a2.25 2.25 0 000 4.5h3a2.25 2.25 0 010 4.5H7.5" />
    ),
  },
  {
    title: 'Responsive Communication',
    desc: 'Every inquiry gets a reply within one business day, and case updates as they happen.',
    icon: (
      <>
        <circle cx="12" cy="12" r="9" strokeLinecap="round" />
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 7.5V12l3 1.75" />
      </>
    ),
  },
]

export default function WhyChooseUs() {
  return (
    <section id="why-us" className="border-b border-hairline bg-paper py-14 sm:py-16 md:py-20">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
        <p className="text-center text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-slate mb-10 sm:mb-12">
          Why Clients Choose Us
        </p>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8 sm:gap-10">
          {VALUE_PROPS.map((item) => (
            <div key={item.title} className="text-center sm:text-left">
              <div className="w-11 h-11 sm:w-12 sm:h-12 rounded-full border border-brass flex items-center justify-center mx-auto sm:mx-0 mb-4">
                <svg className="w-5 h-5 sm:w-6 sm:h-6 text-brass-dark" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.4">
                  {item.icon}
                </svg>
              </div>
              <h3 className="font-display text-base sm:text-lg text-ink mb-1.5">{item.title}</h3>
              <p className="text-slate text-xs sm:text-sm leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}