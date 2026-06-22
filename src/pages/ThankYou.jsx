import { Link } from 'react-router-dom'

export default function ThankYou() {
  return (
    <div className="bg-mist py-16 sm:py-24">
      <div className="container-px max-w-2xl text-center">
        <div className="rounded-3xl border border-line bg-white p-10 shadow-card sm:p-14">
          <span className="eyebrow text-green">Request received</span>
          <h1 className="mt-3 font-display text-4xl font-bold text-navy sm:text-5xl">Thank you for reaching out.</h1>
          <p className="mx-auto mt-5 max-w-xl leading-relaxed text-navy/70">
            Your demo request has been sent to the StallTrack team. We will review your details and follow up using the email address you provided.
          </p>
          <Link to="/" className="btn-navy mt-8">Return to StallTrack</Link>
        </div>
      </div>
    </div>
  )
}
