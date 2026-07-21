import { useState } from 'react'
import { FAQS } from '../content.js'

function FaqItem({ q, a, isOpen, onToggle }) {
  return (
    <div className="border-b border-hairline first:border-t">
      <button
        className="w-full flex items-center justify-between py-5 sm:py-6 text-left font-display text-base sm:text-[1.05rem] text-ink"
        onClick={onToggle}
        aria-expanded={isOpen}
      >
        <span className="pr-4">{q}</span>
        <span
          className={`flex-shrink-0 text-xl sm:text-2xl text-brass leading-none transition-transform duration-200 ${
            isOpen ? 'rotate-45' : ''
          }`}
        >
          +
        </span>
      </button>
      <div
        className="overflow-hidden transition-[max-height] duration-300 ease-in-out"
        style={{ maxHeight: isOpen ? '220px' : '0px' }}
      >
        <p className="text-slate text-sm leading-relaxed pb-5 sm:pb-6">{a}</p>
      </div>
    </div>
  )
}

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null)

  return (
    <section id="faq" className="py-16 sm:py-24 md:py-32">
      <div className="max-w-3xl mx-auto px-5 sm:px-6 lg:px-10">
        <p className="eyebrow">No. 06 &mdash; Frequently Asked</p>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mt-3 mb-10 sm:mb-14 leading-snug">
          Questions we hear before the first meeting.
        </h2>
        <div>
          {FAQS.map((item, i) => (
            <FaqItem
              key={item.q}
              q={item.q}
              a={item.a}
              isOpen={openIndex === i}
              onToggle={() => setOpenIndex(openIndex === i ? null : i)}
            />
          ))}
        </div>
      </div>
    </section>
  )
}
