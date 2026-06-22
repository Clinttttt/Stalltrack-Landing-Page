import { useEffect, useRef, useState } from 'react'

const facilityTypes = [
  { value: 'Public market', description: 'Stalls, rentals, and collections' },
  { value: 'Transport terminal', description: 'Trip fees and dispatch operations' },
  { value: 'Commercial facility', description: 'Leases, tenants, and billing' },
  { value: 'Multiple facilities', description: 'Centralized multi-site operations' },
  { value: 'Other', description: 'Tell us about your facility' },
]

function FacilityTypeSelect() {
  const [isOpen, setIsOpen] = useState(false)
  const [selected, setSelected] = useState('')
  const pickerRef = useRef(null)

  useEffect(() => {
    const closeOnOutsideClick = (event) => {
      if (!pickerRef.current?.contains(event.target)) setIsOpen(false)
    }

    document.addEventListener('mousedown', closeOnOutsideClick)
    return () => document.removeEventListener('mousedown', closeOnOutsideClick)
  }, [])

  return (
    <div ref={pickerRef} className="relative text-sm font-semibold text-navy">
      <span id="facility-type-label">Facility type</span>
      <input type="hidden" name="facility_type" value={selected} />
      <button
        type="button"
        aria-labelledby="facility-type-label"
        aria-haspopup="listbox"
        aria-expanded={isOpen}
        onClick={() => setIsOpen((open) => !open)}
        className={`mt-2 flex w-full items-center justify-between rounded-xl border bg-white px-3.5 py-3 text-left font-normal outline-none transition focus:ring-2 focus:ring-gold/20 ${
          isOpen ? 'border-gold ring-2 ring-gold/20' : 'border-line hover:border-gold/60'
        }`}
      >
        <span className={selected ? 'text-navy' : 'text-muted'}>{selected || 'Select a facility type'}</span>
        <svg viewBox="0 0 24 24" className={`h-5 w-5 shrink-0 transition ${isOpen ? 'rotate-180' : ''}`} fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
          <path d="m6 9 6 6 6-6" />
        </svg>
      </button>

      {isOpen && (
        <div role="listbox" aria-labelledby="facility-type-label" className="relative z-10 mt-2 w-full overflow-hidden rounded-xl border border-line bg-white pb-4 pt-1.5 shadow-card">
          {facilityTypes.map((facility) => (
            <button
              key={facility.value}
              type="button"
              role="option"
              aria-selected={selected === facility.value}
              onClick={() => {
                setSelected(facility.value)
                setIsOpen(false)
              }}
              className={`w-full px-3.5 py-2 text-left transition hover:bg-mist ${selected === facility.value ? 'bg-green-bg' : ''}`}
            >
              <span className="block text-sm font-semibold text-navy">{facility.value}</span>
              <span className="mt-0.5 block text-xs font-normal text-muted">{facility.description}</span>
            </button>
          ))}
        </div>
      )}
    </div>
  )
}

export default function DemoRequestModal({ onClose }) {
  const confirmationUrl = `${window.location.origin}/thanks`

  useEffect(() => {
    const previousOverflow = document.body.style.overflow
    const onKeyDown = (event) => {
      if (event.key === 'Escape') onClose()
    }

    document.body.style.overflow = 'hidden'
    window.addEventListener('keydown', onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', onKeyDown)
    }
  }, [onClose])

  return (
    <div
      className="fixed inset-0 z-[60] flex items-center justify-center overflow-hidden bg-navy/75 p-4 backdrop-blur-sm sm:p-8"
      role="presentation"
      onMouseDown={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="product-inquiry-title"
        className="relative flex max-h-[calc(100dvh-2rem)] w-full max-w-3xl flex-col overflow-hidden rounded-3xl bg-white shadow-2xl sm:max-h-[calc(100vh-4rem)]"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex shrink-0 items-start justify-between gap-5 border-b border-line px-6 py-5 sm:px-8">
          <div>
            <span className="eyebrow text-green">Let's get started</span>
            <h2 id="product-inquiry-title" className="mt-2 font-display text-3xl font-bold text-navy">Tell us about your operations.</h2>
            <p className="mt-1 text-sm text-muted">Share a little about your office or facility and see how StallTrack can support your team.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close inquiry form"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line text-navy transition hover:bg-mist"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <form action="https://formsubmit.co/clint@stalltrack.site" method="POST" className="min-h-0 overflow-y-auto p-6 sm:p-8">
          <input type="hidden" name="_subject" value="New StallTrack product inquiry" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={confirmationUrl} />
          <input type="text" name="_honey" className="hidden" tabIndex="-1" autoComplete="off" />

          <p className="text-sm text-muted">Fields marked with * are required.</p>
          <div className="mt-5 grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-navy">
              Full name *
              <input required name="name" autoComplete="name" placeholder="Your name" className="mt-2 w-full rounded-xl border border-line bg-white px-3.5 py-3 font-normal text-navy outline-none transition placeholder:text-muted/70 focus:border-gold focus:ring-2 focus:ring-gold/20" />
            </label>
            <label className="block text-sm font-semibold text-navy">
              Work email *
              <input required type="email" name="email" autoComplete="email" placeholder="you@organization.gov.ph" className="mt-2 w-full rounded-xl border border-line bg-white px-3.5 py-3 font-normal text-navy outline-none transition placeholder:text-muted/70 focus:border-gold focus:ring-2 focus:ring-gold/20" />
            </label>
            <label className="block text-sm font-semibold text-navy">
              Organization or LGU *
              <input required name="organization" autoComplete="organization" placeholder="e.g. City Government of ..." className="mt-2 w-full rounded-xl border border-line bg-white px-3.5 py-3 font-normal text-navy outline-none transition placeholder:text-muted/70 focus:border-gold focus:ring-2 focus:ring-gold/20" />
            </label>
            <label className="block text-sm font-semibold text-navy">
              Your role *
              <input required name="role" autoComplete="organization-title" placeholder="e.g. Economic Enterprise Head" className="mt-2 w-full rounded-xl border border-line bg-white px-3.5 py-3 font-normal text-navy outline-none transition placeholder:text-muted/70 focus:border-gold focus:ring-2 focus:ring-gold/20" />
            </label>
            <FacilityTypeSelect />
            <label className="block text-sm font-semibold text-navy">
              Phone number
              <input type="tel" name="phone" autoComplete="tel" placeholder="Optional" className="mt-2 w-full rounded-xl border border-line bg-white px-3.5 py-3 font-normal text-navy outline-none transition placeholder:text-muted/70 focus:border-gold focus:ring-2 focus:ring-gold/20" />
            </label>
          </div>
          <label className="mt-5 block text-sm font-semibold text-navy">
            What would you like to improve?
            <textarea name="message" rows="4" placeholder="Tell us about your current process, reporting needs, or demo questions." className="mt-2 w-full resize-y rounded-xl border border-line bg-white px-3.5 py-3 font-normal text-navy outline-none transition placeholder:text-muted/70 focus:border-gold focus:ring-2 focus:ring-gold/20" />
          </label>
          <div className="mt-6 flex flex-col gap-4 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-sm text-xs leading-relaxed text-muted">
              By submitting, you agree that StallTrack may use these details to respond to your request, as described in our{' '}
              <a href="/privacy" className="font-semibold text-green hover:underline">Privacy Policy</a>.
            </p>
            <button type="submit" className="btn-navy shrink-0">Send inquiry</button>
          </div>
        </form>
      </div>
    </div>
  )
}
