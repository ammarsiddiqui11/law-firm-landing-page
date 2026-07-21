import { useEffect, useState } from 'react'
import { NAV_LINKS } from '../content.js'

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  // Lock body scroll while the mobile menu is open
  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  return (
    <header
      className={`fixed top-0 inset-x-0 z-50 transition-colors duration-300 ${
        scrolled || open ? 'bg-ink shadow-[0_1px_0_rgba(255,255,255,0.08)]' : 'bg-transparent'
      }`}
    >
      <div className="max-w-7xl mx-auto px-5 sm:px-6 lg:px-10 flex items-center justify-between h-16 sm:h-20">
        <a href="#top" className="font-display text-lg sm:text-xl tracking-wide text-paper" onClick={() => setOpen(false)}>
          Whitfield <span className="text-brass">&amp;</span> Cole
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8 xl:gap-10 text-sm tracking-wide uppercase">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="nav-link">
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="inline-flex items-center border border-brass px-5 py-2 text-brass hover:bg-brass hover:text-ink transition-colors duration-200"
          >
            Contact Us
          </a>
        </nav>

        {/* Mobile toggle */}
        <button
          className="lg:hidden text-paper w-10 h-10 flex items-center justify-center shrink-0"
          aria-label="Toggle menu"
          aria-expanded={open}
          onClick={() => setOpen((v) => !v)}
        >
          {open ? (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="1.5">
              <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5M3.75 17.25h16.5" />
            </svg>
          )}
        </button>
      </div>

      {/* Mobile menu panel */}
      <div
        className={`lg:hidden overflow-hidden transition-[max-height] duration-300 ease-in-out bg-ink ${
          open ? 'max-h-96' : 'max-h-0'
        }`}
      >
        <nav className="px-5 sm:px-6 pb-6 pt-2 flex flex-col gap-4 text-sm uppercase tracking-wide">
          {NAV_LINKS.map((link) => (
            <a key={link.href} href={link.href} className="text-paper py-1" onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#contact" className="text-brass py-1" onClick={() => setOpen(false)}>
            Contact Us
          </a>
        </nav>
      </div>
    </header>
  )
}
