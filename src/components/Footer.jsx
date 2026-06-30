import { Link } from 'react-router-dom'

export default function Footer() {
  const year = new Date().getFullYear()
  return (
    <footer className="border-t border-line bg-navy text-white">
      <div className="container-px grid gap-10 py-12 sm:grid-cols-2 lg:grid-cols-4">
        <div className="lg:col-span-2">
          <div className="flex items-center gap-2.5">
            <img src="/carcanmadcarlan/logo/stalltrack-seal-logo.png" alt="StallTrack seal" className="h-10 w-10 rounded-full object-contain" />
            <span className="font-display text-xl font-bold">Stall<span className="text-gold">Track</span></span>
          </div>
          <p className="mt-4 max-w-sm text-sm leading-relaxed text-white/55">
            A GovTech SaaS platform for LGU economic enterprise operations — helping public market
            offices and LGU-managed facilities digitize records, collections, reporting, and audit trails.
          </p>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-white/40">Product</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li><a href="/#features" className="hover:text-gold">Features</a></li>
            <li><Link to="/ai-roadmap" className="hover:text-gold">AI Roadmap</Link></li>
            <li><a href="/#usecases" className="hover:text-gold">Use Cases</a></li>
            <li><a href="/#preview" className="hover:text-gold">Product Preview</a></li>
            <li><a href="/#security" className="hover:text-gold">Security</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-xs font-bold uppercase tracking-wider text-white/40">Company</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-white/70">
            <li><a href="/#founder" className="hover:text-gold">Founder</a></li>
            <li><a href="/#contact" className="hover:text-gold">Contact</a></li>
            <li><Link to="/privacy" className="hover:text-gold">Privacy Policy</Link></li>
            <li><Link to="/terms" className="hover:text-gold">Terms of Service</Link></li>
          </ul>
        </div>
      </div>

      <div className="border-t border-white/10">
        <div className="container-px flex flex-col items-center justify-between gap-2 py-5 text-xs text-white/45 sm:flex-row">
          <p>© {year} StallTrack. All rights reserved.</p>
          <p className="flex flex-wrap items-center justify-center gap-x-3 gap-y-1">
            <a href="mailto:founder@stalltrack.site" className="hover:text-gold">founder@stalltrack.site</a>
            <span className="hidden text-white/20 sm:inline">·</span>
            <span>stalltrack.site</span>
          </p>
        </div>
      </div>
    </footer>
  )
}
