import { NAV_LINKS } from '../content.js'

export default function Footer() {
  return (
    <footer className="bg-ink text-paper/70 py-10 sm:py-12">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 flex flex-col md:flex-row justify-between items-center gap-6 text-center md:text-left">
        <a href="#top" className="font-display text-lg text-paper">
          Bhati <span className="text-brass">&amp;</span> Co
        </a>
        <nav className="flex flex-wrap justify-center gap-x-6 sm:gap-x-8 gap-y-2 text-xs uppercase tracking-wide">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="hover:text-paper transition-colors">
              {link.label}
            </a>
          ))}
          <a href="#contact" className="hover:text-paper transition-colors">Contact</a>
        </nav>
        <p className="text-xs">
          &copy; {new Date().getFullYear()} Bhati &amp; Co. Powered by{' '}
          <a
            href="https://leapupdigital.in"
            target="_blank"
            rel="noopener noreferrer"
            className="text-brass hover:text-paper transition-colors"
          >
            LeapUpDigital.in
          </a>
        </p>
      </div>
    </footer>
  )
}
