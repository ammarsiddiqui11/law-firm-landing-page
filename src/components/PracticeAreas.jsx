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
        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {PRACTICE_AREAS.map((area) => (
            <div
              key={area.title}
              className="group relative bg-ink px-6 sm:px-8 py-8 sm:py-9 border border-paper/15 overflow-hidden h-full flex flex-col"
            >
              {/* Sliding color overlay */}
              <div
                className="absolute inset-0 bg-brass translate-y-full transition-transform duration-500 ease-out group-hover:translate-y-0"
                aria-hidden="true"
              />

              {/* Content sits above the overlay */}
              <div className="relative z-10 flex flex-col flex-1">
                <Icon
                  name={area.icon}
                  className="h-7 w-7 sm:h-8 sm:w-8 text-brass group-hover:text-ink mb-4 sm:mb-5 transition-colors duration-500"
                />
                <h3 className="font-display text-lg sm:text-xl mb-2 text-paper group-hover:text-ink transition-colors duration-500">
                  {area.title}
                </h3>
                <p className="text-paper/70 group-hover:text-ink/80 text-sm leading-relaxed transition-colors duration-500">
                  {area.desc}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}