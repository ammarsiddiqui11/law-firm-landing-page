import { PRACTICE_AREAS } from '../content.js'
import Icon from './Icon.jsx'

export default function PracticeAreas() {
  return (
    <section id="practice-areas" className="py-16 sm:py-24 md:py-32 bg-ink text-paper">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
        <p className="eyebrow text-brass">No. 02 &mdash; What We Do</p>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mt-3 mb-10 sm:mb-14 leading-snug max-w-xl">
          Practice areas built around how clients actually run into trouble.
        </h2>
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-px bg-paper/10">
          {PRACTICE_AREAS.map((area) => (
            <div key={area.title} className="bg-ink px-6 sm:px-8 py-8 sm:py-9 border border-paper/8">
              <Icon name={area.icon} className="h-7 w-7 sm:h-8 sm:w-8 text-brass mb-4 sm:mb-5" />
              <h3 className="font-display text-lg sm:text-xl mb-2">{area.title}</h3>
              <p className="text-paper/70 text-sm leading-relaxed">{area.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
