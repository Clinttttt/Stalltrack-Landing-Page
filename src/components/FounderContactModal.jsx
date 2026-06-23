import { useEffect } from 'react'

export default function FounderContactModal({ onClose }) {
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
        aria-labelledby="founder-contact-title"
        className="w-full max-w-2xl overflow-hidden rounded-3xl bg-white shadow-2xl"
        onMouseDown={(event) => event.stopPropagation()}
      >
        <div className="flex items-start justify-between gap-5 border-b border-line px-6 py-5 sm:px-8">
          <div>
            <span className="eyebrow text-green">Founder contact</span>
            <h2 id="founder-contact-title" className="mt-2 font-display text-3xl font-bold text-navy">Send a message to Clint.</h2>
            <p className="mt-1 text-sm text-muted">Your message will be sent directly to clint@stalltrack.site.</p>
          </div>
          <button
            type="button"
            onClick={onClose}
            aria-label="Close founder contact form"
            className="grid h-10 w-10 shrink-0 place-items-center rounded-xl border border-line text-navy transition hover:bg-mist"
          >
            <svg viewBox="0 0 24 24" className="h-5 w-5" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
              <path d="m6 6 12 12M18 6 6 18" />
            </svg>
          </button>
        </div>

        <form action="https://formsubmit.co/clint@stalltrack.site" method="POST" className="p-6 sm:p-8">
          <input type="hidden" name="_subject" value="New message for StallTrack founder" />
          <input type="hidden" name="_template" value="table" />
          <input type="hidden" name="_next" value={confirmationUrl} />
          <input type="text" name="_honey" className="hidden" tabIndex="-1" autoComplete="off" />

          <div className="grid gap-5 sm:grid-cols-2">
            <label className="block text-sm font-semibold text-navy">
              Full name *
              <input required name="name" autoComplete="name" placeholder="Your name" className="mt-2 w-full rounded-xl border border-line bg-white px-3.5 py-3 font-normal text-navy outline-none transition placeholder:text-muted/70 focus:border-gold focus:ring-2 focus:ring-gold/20" />
            </label>
            <label className="block text-sm font-semibold text-navy">
              Work email *
              <input required type="email" name="email" autoComplete="email" placeholder="you@organization.gov.ph" className="mt-2 w-full rounded-xl border border-line bg-white px-3.5 py-3 font-normal text-navy outline-none transition placeholder:text-muted/70 focus:border-gold focus:ring-2 focus:ring-gold/20" />
            </label>
          </div>
          <label className="mt-5 block text-sm font-semibold text-navy">
            Organization or LGU
            <input name="organization" autoComplete="organization" placeholder="Optional" className="mt-2 w-full rounded-xl border border-line bg-white px-3.5 py-3 font-normal text-navy outline-none transition placeholder:text-muted/70 focus:border-gold focus:ring-2 focus:ring-gold/20" />
          </label>
          <label className="mt-5 block text-sm font-semibold text-navy">
            Your message *
            <textarea required name="message" rows="5" placeholder="How can we help?" className="mt-2 w-full resize-y rounded-xl border border-line bg-white px-3.5 py-3 font-normal text-navy outline-none transition placeholder:text-muted/70 focus:border-gold focus:ring-2 focus:ring-gold/20" />
          </label>
          <div className="mt-6 flex flex-col gap-4 border-t border-line pt-5 sm:flex-row sm:items-center sm:justify-between">
            <p className="max-w-sm text-xs leading-relaxed text-muted">
              By sending a message, you agree that StallTrack may use these details to respond, as described in our{' '}
              <a href="/privacy" className="font-semibold text-green hover:underline">Privacy Policy</a>.
            </p>
            <button type="submit" className="btn-navy shrink-0">Send message</button>
          </div>
        </form>
      </div>
    </div>
  )
}
