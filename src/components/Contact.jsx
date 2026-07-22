import { useState } from 'react'
import { PRACTICE_AREA_OPTIONS } from '../content.js'

const initialForm = { name: '', phone: '', email: '', practiceArea: '', caseDetail: '', company: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [status, setStatus] = useState({ state: 'idle', message: '' }) // idle | sending | success | error

  const handleChange = (e) => {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  const handleSubmit = async (e) => {
    e.preventDefault()

    // Honeypot — bots fill every field, real users never see this one
    if (form.company) return

    if (!form.name || !form.phone || !form.email || !form.caseDetail) {
      setStatus({ state: 'error', message: 'Please fill in all required fields.' })
      return
    }

    setStatus({ state: 'sending', message: '' })

    try {
      const res = await fetch('/.netlify/functions/contact', {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          name: form.name,
          phone: form.phone,
          email: form.email,
          practiceArea: form.practiceArea,
          caseDetail: form.caseDetail,
        }),
      })
      if (!res.ok) throw new Error('Request failed')

      setStatus({
        state: 'success',
        message: "Thank you — your message has been sent. We'll be in touch within one business day.",
      })
      setForm(initialForm)
    } catch (err) {
      setStatus({
        state: 'error',
        message: 'Something went wrong sending your message. Please call us directly or try again shortly.',
      })
    }
  }

  return (
    <section id="contact" className="py-16 sm:py-24 md:py-32 bg-paper border-t border-hairline">
      <div className="max-w-6xl mx-auto px-5 sm:px-6 lg:px-10 grid lg:grid-cols-5 gap-10 lg:gap-14">
        {/* form */}
        <div className="lg:col-span-3">
          <p className="eyebrow">No. 07 &mdash; Contact Us</p>
          <h2 className="font-display text-2xl sm:text-3xl md:text-4xl mt-3 mb-4 leading-snug">Tell us what happened.</h2>
          <p className="text-slate mb-8 max-w-lg text-sm sm:text-base">
            Fields marked required. We keep every submission confidential and reply within one business day.
          </p>

          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="field-label">Full Name *</label>
                <input required type="text" id="name" name="name" value={form.name} onChange={handleChange} className="field-input" placeholder="Jane Doe" />
              </div>
              <div>
                <label htmlFor="phone" className="field-label">Phone Number *</label>
                <input required type="tel" id="phone" name="phone" value={form.phone} onChange={handleChange} className="field-input" placeholder="(555) 123-4567" />
              </div>
            </div>
            <div>
              <label htmlFor="email" className="field-label">Email Address *</label>
              <input required type="email" id="email" name="email" value={form.email} onChange={handleChange} className="field-input" placeholder="jane@email.com" />
            </div>
            <div>
              <label htmlFor="practiceArea" className="field-label">Practice Area</label>
              <select id="practiceArea" name="practiceArea" value={form.practiceArea} onChange={handleChange} className="field-input">
                <option value="">Select an option</option>
                {PRACTICE_AREA_OPTIONS.map((opt) => (
                  <option key={opt} value={opt}>{opt}</option>
                ))}
              </select>
            </div>
            <div>
              <label htmlFor="caseDetail" className="field-label">Case Details *</label>
              <textarea required id="caseDetail" name="caseDetail" rows={5} value={form.caseDetail} onChange={handleChange} className="field-input" placeholder="Briefly describe your situation..." />
            </div>
            {/* honeypot */}
            <input type="text" name="company" value={form.company} onChange={handleChange} className="hidden" tabIndex="-1" autoComplete="off" />

            <button
              type="submit"
              disabled={status.state === 'sending'}
              className="w-full sm:w-auto bg-ink text-paper px-10 py-3.5 text-sm uppercase tracking-wide hover:bg-ink-700 transition-colors disabled:opacity-60"
            >
              {status.state === 'sending' ? 'Sending…' : 'Send Message'}
            </button>
            <p
              className={`text-sm mt-3 ${status.state === 'success' ? 'text-green-700' : status.state === 'error' ? 'text-red-600' : ''}`}
              role="status"
              aria-live="polite"
            >
              {status.message}
            </p>
            <p className="text-xs text-slate/70 pt-2">This form does not create an attorney-client relationship until confirmed in writing.</p>
          </form>
        </div>

        {/* info + map */}
        <div className="lg:col-span-2">
          <div className="border border-hairline p-6 sm:p-8 mb-6">
            <h3 className="font-display text-xl mb-4">Bhati &amp; Co</h3>
            <p className="text-slate text-sm leading-relaxed mb-1">Office no. 321, 3rd Floor, Dheeraj Heritage, commercial building</p>
            <p className="text-slate text-sm leading-relaxed mb-4">Sane Guruji Rd, off Swami Vivekanand Road, Milan Subway, Santacruz (West), Mumbai, Maharashtra 400054</p>
            <p className="text-slate text-sm leading-relaxed mb-1">Phone: +91 22 4000 1234</p>
            <p className="text-slate text-sm leading-relaxed mb-4">Email: intake@bhatiandco.example</p>
            <div className="flex gap-4 pt-2">
              <a href="#" aria-label="Facebook" className="social-icon">FB</a>
              <a href="#" aria-label="LinkedIn" className="social-icon">IN</a>
              <a href="#" aria-label="Twitter / X" className="social-icon">X</a>
            </div>
          </div>
          <div className="border border-hairline overflow-hidden h-56 sm:h-64 md:h-72">
            <iframe
              title="Office location map"
              className="w-full h-full grayscale-[40%]"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              src="https://www.google.com/maps?q=Dheeraj+Heritage,+Sane+Guruji+Rd,+Santacruz+West,+Mumbai,+Maharashtra+400054&output=embed"
            />
          </div>
        </div>
      </div>
    </section>
  )
}
