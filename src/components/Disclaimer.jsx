import { useEffect, useState } from 'react'

const STORAGE_KEY = 'bhatico-disclaimer-acknowledged'

const DISCLAIMER_POINTS = [
  'The user is voluntarily using our website to gain information about us for their information and use. They also acknowledge that there has been no attempt by us to advertise or solicit work.',
  'Any information obtained or downloaded from our website does not lead to the creation of an attorney-client relationship between the Firm and the user.',
  'The content on this website is for informational purposes only and cannot be construed to be a form of legal opinion or legal advice.',
  'Bhati & Co. will not be held liable for any consequences from actions taken based on the materials or information provided on this website.',
]

export default function Disclaimer() {
  const [open, setOpen] = useState(false)

  useEffect(() => {
    // sessionStorage: reappears each new browser session, but won't
    // interrupt the visitor again while they browse the site or
    // return within the same session. Swap to localStorage below if
    // you'd rather it only ever show once per device.
    const alreadyAcknowledged = sessionStorage.getItem(STORAGE_KEY)
    if (!alreadyAcknowledged) setOpen(true)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => { document.body.style.overflow = '' }
  }, [open])

  const handleProceed = () => {
    sessionStorage.setItem(STORAGE_KEY, 'true')
    setOpen(false)
  }

  if (!open) return null

  return (
    <div
      className="fixed inset-0 z-[100] flex items-center justify-center px-4 sm:px-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="disclaimer-heading"
    >
      {/* backdrop */}
      <div className="absolute inset-0 bg-ink-900/80 backdrop-blur-sm" />

      {/* modal */}
      <div className="relative bg-paper w-full max-w-2xl max-h-[85vh] sm:max-h-[80vh] flex flex-col shadow-xl">
        <div className="px-6 sm:px-10 pt-8 sm:pt-10 pb-4 sm:pb-6 text-center border-b border-hairline shrink-0">
          <h2
            id="disclaimer-heading"
            className="font-display text-2xl sm:text-3xl md:text-4xl tracking-wide text-ink"
          >
            Disclaimer
          </h2>
          <p className="text-slate text-sm sm:text-base leading-relaxed mt-4">
            The Bar Council of India prohibits advocates from engaging in any form of advertisement or
            solicitation. By accessing the Bhati &amp; Co. website (our website), the user acknowledges that:
          </p>
        </div>

        <div className="overflow-y-auto px-6 sm:px-10 py-5 sm:py-6 grow">
          <ul className="space-y-4 sm:space-y-5">
            {DISCLAIMER_POINTS.map((point, i) => (
              <li key={i} className="flex gap-3 text-slate text-sm sm:text-[0.95rem] leading-relaxed">
                <span className="text-brass mt-1.5 shrink-0">&#8226;</span>
                <span>{point}</span>
              </li>
            ))}
          </ul>
        </div>

        <div className="px-6 sm:px-10 py-5 sm:py-6 border-t border-hairline flex justify-center shrink-0">
          <button
            onClick={handleProceed}
            className="bg-brass text-ink px-8 sm:px-10 py-3 text-sm uppercase tracking-wide hover:bg-brass-light transition-colors"
          >
            Proceed to Website
          </button>
        </div>
      </div>
    </div>
  )
}