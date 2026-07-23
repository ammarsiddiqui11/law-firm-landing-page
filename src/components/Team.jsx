import { TEAM } from '../content.js'
import team01 from '../assets/img/team-01.svg'
import team02 from '../assets/img/team-02.svg'
import team03 from '../assets/img/team-03.svg'
import team04 from '../assets/img/team-04.svg'

const IMG_MAP = { 'team-01.svg': team01, 'team-02.svg': team02, 'team-03.svg': team03, 'team-04.svg': team04 }

export default function Team() {
  return (
    <section id="team" className="py-16 sm:py-24 md:py-32 bg-paper border-t border-hairline">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
        <p className="eyebrow"> &mdash; Who We Are</p>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mt-3 mb-10 sm:mb-14 leading-snug max-w-xl">
          The attorneys handling your matter.
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-10">
          {TEAM.map((member) => (
            <div key={member.name} className="text-left">
              <img src={IMG_MAP[member.img]} alt={`Portrait of ${member.name}`} className="w-full aspect-square object-cover mb-4 sm:mb-5" />
              <h3 className="font-display text-base sm:text-lg">{member.name}</h3>
              <p className="text-brass-dark text-[11px] sm:text-xs uppercase tracking-wide mt-1 mb-2">{member.role}</p>
              <p className="text-slate text-xs sm:text-sm leading-relaxed">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
