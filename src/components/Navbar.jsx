import { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'

const Logo = () => (
  <Link to="/" className="flex items-center gap-2.5">
    <img src="/logo.png" alt="StallTrack" className="h-10 w-10 rounded-xl object-cover" />
    <span className="font-display text-xl font-bold text-navy">
      Stall<span className="text-gold">Track</span>
    </span>
  </Link>
)

const links = [
  { href: '/#features', label: 'Features' },
  { href: '/#facilities', label: 'Facilities' },
  { href: '/ai-roadmap', label: 'AI Roadmap' },
  { href: '/#usecases', label: 'Use Cases' },
  { href: '/#preview', label: 'Product' },
  { href: '/#security', label: 'Security' },
  { href: '/#contact', label: 'Contact' },
]

export default function Navbar() {
  const [open, setOpen] = useState(false)
  const [scrolled, setScrolled] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  return (
    <header
      className={`sticky top-0 z-40 transition-all duration-300 ${
        scrolled ? 'border-b border-line bg-white/90 shadow-soft backdrop-blur' : 'border-b border-transparent bg-white/70 backdrop-blur'
      }`}
    >
      <nav className="container-px flex h-16 items-center justify-between">
        <Logo />

        <div className="hidden items-center gap-7 md:flex">
          {links.map((l) => (
            <a key={l.href} href={l.href} className="text-sm font-medium text-navy/70 transition hover:text-navy">
              {l.label}
            </a>
          ))}
          <a href="/#contact" className="btn-navy py-2.5">Request Demo</a>
        </div>

        <button
          className="grid h-10 w-10 place-items-center rounded-lg border border-line md:hidden"
          onClick={() => setOpen((v) => !v)}
          aria-label="Toggle menu"
        >
          <svg viewBox="0 0 24 24" className="h-5 w-5 stroke-navy" fill="none" strokeWidth="2" strokeLinecap="round">
            {open ? <path d="M18 6 6 18M6 6l12 12" /> : <path d="M4 7h16M4 12h16M4 17h16" />}
          </svg>
        </button>
      </nav>

      {open && (
        <div className="border-t border-line bg-white md:hidden">
          <div className="container-px flex flex-col py-3">
            {links.map((l) => (
              <a key={l.href} href={l.href} onClick={() => setOpen(false)} className="py-2.5 text-sm font-medium text-navy/80">
                {l.label}
              </a>
            ))}
            <a href="/#contact" onClick={() => setOpen(false)} className="btn-navy mt-2">Request Demo</a>
          </div>
        </div>
      )}
    </header>
  )
}
