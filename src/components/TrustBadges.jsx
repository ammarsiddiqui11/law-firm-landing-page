import badge01 from '../assets/img/badge-01.svg'
import badge02 from '../assets/img/badge-02.svg'
import badge03 from '../assets/img/badge-03.svg'
import badge04 from '../assets/img/badge-04.svg'

const BADGES = [
  { img: badge01, alt: 'State Bar Association member', label: 'State Bar Association\nMember Since 1998' },
  { img: badge02, alt: 'Board Certified badge', label: 'Board Certified\nSpecialists' },
  { img: badge03, alt: 'Client rating badge', label: 'AV Preeminent\nClient Rating' },
  { img: badge04, alt: 'Super Lawyers recognition', label: '27 Years Combined\nTrial Experience' },
]

export default function TrustBadges() {
  return (
    <section id="trust" className="border-b border-hairline bg-paper py-8 sm:py-10">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10">
        <p className="text-center text-xs uppercase tracking-[0.25em] sm:tracking-[0.3em] text-slate mb-6 sm:mb-8">
          Recognized &amp; Credentialed
        </p>
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 items-center">
          {BADGES.map((b) => (
            <div key={b.alt} className="flex flex-col items-center gap-2">
              <img src={b.img} alt={b.alt} className="h-10 sm:h-12 opacity-80" />
              <span className="text-[11px] sm:text-xs text-slate text-center whitespace-pre-line">{b.label}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
