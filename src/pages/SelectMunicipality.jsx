import { useEffect, useRef, useState } from 'react'

const CANTILAN_PORTAL_URL = 'https://www.stalltrack.site/select-municipality'

const municipalities = [
  {
    name: 'Carrascal',
    status: 'Upcoming',
    image: '/carcanmadcarlan/backgrounds/carrascal-reference.png',
  },
  {
    name: 'Cantilan',
    status: 'Active',
    image: '/carcanmadcarlan/backgrounds/cantilan-reference.png',
    active: true,
    href: "https://eemo.stalltrack.site/login",
  },
  {
    name: 'Madrid',
    status: 'Upcoming',
    image: '/carcanmadcarlan/backgrounds/madrid-reference.png',
  },
  {
    name: 'Carmen',
    status: 'Upcoming',
    image: '/carcanmadcarlan/backgrounds/carmen-reference.png',
  },
  {
    name: 'Lanuza',
    status: 'Upcoming',
    image: '/carcanmadcarlan/backgrounds/lanuza-reference.png',
  },
]

function Icon({ path, className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.9" strokeLinecap="round" strokeLinejoin="round">
      {path}
    </svg>
  )
}

function Header({ activeSection }) {
  const [sidebarOpen, setSidebarOpen] = useState(false)
  const links = [
    ['#overview', 'Overview'],
    ['#municipalities', 'Municipalities'],
    ['#architecture', 'Architecture'],
    ['#about', 'About'],
  ]

  useEffect(() => {
    if (!sidebarOpen) return

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = 'hidden'

    const handleKeyDown = (event) => {
      if (event.key === 'Escape') {
        setSidebarOpen(false)
      }
    }

    window.addEventListener('keydown', handleKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener('keydown', handleKeyDown)
    }
  }, [sidebarOpen])

  return (
    <header className="sticky top-0 z-40 h-[4.25rem] border-b border-gold/60 bg-white/95 backdrop-blur">
      <nav className="mx-auto flex h-full w-full max-w-[118rem] items-center justify-between px-4 sm:px-7 lg:px-10">
        <a href="/select-municipality" className="flex min-w-0 items-center">
          <img
            src="/carcanmadcarlan/logo/stalltrack-logo-lockup-transparent.png"
            alt="StallTrack — LGU Revenue and Collection Management System"
            className="h-10 w-auto max-w-[13rem] object-contain sm:h-11 sm:max-w-[18rem] lg:max-w-[22rem]"
          />
        </a>

        <div className="hidden items-center gap-7 lg:flex">
          {links.map(([href, label]) => {
            const section = href.slice(1)
            const isActive = activeSection === section

            return (
              <a
                key={label}
                href={href}
                className={`relative py-2 text-sm font-semibold transition hover:text-navy ${
                  isActive
                    ? 'text-navy after:absolute after:bottom-0 after:left-0 after:h-0.5 after:w-full after:bg-gold'
                    : 'text-navy/75'
                }`}
              >
                {label}
              </a>
            )
          })}
          <a href="#contact" className="btn-navy border border-gold/60 px-5 py-2.5">
            <Icon
              path={<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>}
              className="h-5 w-5 text-gold"
            />
            Contact
          </a>
        </div>

        <button
          type="button"
          onClick={() => setSidebarOpen(true)}
          className="grid h-11 w-11 place-items-center rounded-xl border border-gold/50 bg-navy text-white shadow-soft transition hover:bg-navy-600 lg:hidden"
          aria-label="Open navigation menu"
          aria-expanded={sidebarOpen}
        >
          <Icon
            path={<><path d="M4 7h16" /><path d="M4 12h16" /><path d="M4 17h16" /></>}
            className="h-5 w-5"
          />
        </button>
      </nav>

      {sidebarOpen && (
        <div className="fixed inset-0 z-50 lg:hidden" role="presentation">
          <button
            type="button"
            className="absolute inset-0 bg-navy/55 backdrop-blur-sm motion-safe:animate-[sidebarOverlayIn_180ms_ease-out]"
            onClick={() => setSidebarOpen(false)}
            aria-label="Close navigation menu"
          />
          <aside className="absolute right-0 top-0 flex h-[100dvh] w-[min(20rem,86vw)] flex-col border-l border-gold/30 bg-white shadow-2xl motion-safe:animate-[sidebarPanelIn_240ms_cubic-bezier(0.22,1,0.36,1)]">
            <div className="flex items-center justify-between border-b border-line px-5 py-4">
              <img
                src="/carcanmadcarlan/logo/stalltrack-logo-lockup-transparent.png"
                alt="StallTrack"
                className="h-10 w-auto max-w-[12rem] object-contain"
              />
              <button
                type="button"
                onClick={() => setSidebarOpen(false)}
                className="grid h-10 w-10 place-items-center rounded-xl border border-line bg-mist text-navy transition hover:border-gold/50 hover:bg-white"
                aria-label="Close navigation menu"
              >
                <Icon
                  path={<><path d="M18 6 6 18" /><path d="M6 6l12 12" /></>}
                  className="h-5 w-5"
                />
              </button>
            </div>

            <nav className="flex flex-1 flex-col gap-2 px-5 py-5" aria-label="Mobile navigation">
              {links.map(([href, label]) => {
                const section = href.slice(1)
                const isActive = activeSection === section

                return (
                  <a
                    key={label}
                    href={href}
                    onClick={() => setSidebarOpen(false)}
                    className={`rounded-2xl px-4 py-3 text-sm font-semibold transition ${
                      isActive
                        ? 'bg-navy text-white shadow-soft'
                        : 'border border-line bg-white text-navy/78 hover:border-gold/45 hover:text-navy'
                    }`}
                  >
                    {label}
                  </a>
                )
              })}
              <a
                href="#contact"
                onClick={() => setSidebarOpen(false)}
                className="mt-2 inline-flex items-center justify-center gap-2 rounded-2xl bg-gold px-4 py-3 text-sm font-bold text-navy shadow-soft transition hover:bg-gold-light"
              >
                <Icon
                  path={<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>}
                  className="h-5 w-5"
                />
                Contact
              </a>
            </nav>

            <div className="border-t border-line px-5 py-4 text-xs leading-relaxed text-muted">
              StallTrack · LGU Revenue and Collection Management System
            </div>
          </aside>
        </div>
      )}
    </header>
  )
}

function MunicipalityCard({ municipality }) {
  const card = (
    <div
      className={`group relative flex h-[15rem] overflow-hidden rounded-2xl border bg-navy shadow-card transition duration-300 hover:-translate-y-1 hover:shadow-xl sm:h-[17rem] lg:h-[clamp(20rem,48vh,25rem)] xl:h-[clamp(21rem,50vh,27rem)] ${
        municipality.active ? 'border-gold ring-2 ring-gold/45' : 'border-white/80'
      }`}
    >
      <img
        src={municipality.image}
        alt={`${municipality.name} municipality preview`}
        loading={municipality.active ? 'eager' : 'lazy'}
        className="absolute inset-0 h-full w-full object-cover transition duration-500 group-hover:scale-105"
      />
      <div className="absolute inset-0 bg-gradient-to-t from-[#061b2f] via-[#061b2f]/55 to-transparent" />
      <div className="relative mt-auto flex w-full items-end justify-between gap-3 p-4 xl:p-5">
        <div>
          <h2 className="font-display text-3xl font-bold leading-none text-white drop-shadow-sm xl:text-[2.35rem]">
            {municipality.name}
          </h2>
          <span
            className={`mt-3 inline-flex items-center gap-2 rounded-full border px-3.5 py-1.5 text-sm font-semibold ${
              municipality.active
                ? 'border-gold bg-gold/10 text-gold-light'
                : 'border-white/75 bg-navy/15 text-white'
            }`}
          >
            {municipality.active && (
              <svg viewBox="0 0 24 24" className="h-4 w-4 fill-gold text-gold" aria-hidden="true">
                <path d="m12 2.5 2.8 5.7 6.3.9-4.55 4.43 1.07 6.27L12 16.84 6.38 19.8l1.07-6.27L2.9 9.1l6.3-.9L12 2.5Z" />
              </svg>
            )}
            {municipality.status}
          </span>
        </div>

        <span
          className={`grid h-11 w-11 flex-shrink-0 place-items-center rounded-full border text-white transition group-hover:translate-x-1 ${
            municipality.active ? 'border-gold bg-navy text-gold' : 'border-white bg-white/5'
          }`}
          aria-hidden="true"
        >
          <Icon path={<path d="m9 18 6-6-6-6" />} className="h-6 w-6" />
        </span>
      </div>
    </div>
  )

  if (municipality.href) {
    return (
      <a href={municipality.href} className="block" aria-label={`Open ${municipality.name} portal`}>
        {card}
      </a>
    )
  }

  return <div aria-label={`${municipality.name} is upcoming`}>{card}</div>
}

function SectionHeading({ eyebrow, title, children, center = false, mobileCenter = false, light = false }) {
  return (
    <div className={`max-w-3xl ${center ? 'mx-auto text-center' : mobileCenter ? 'mx-auto text-center lg:mx-0 lg:text-left' : ''}`}>
      <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold">{eyebrow}</span>
      <h2 className={`mt-3 font-display text-3xl font-bold leading-tight sm:text-4xl lg:text-5xl ${light ? 'text-white' : 'text-navy'}`}>
        {title}
      </h2>
      {children && <p className={`mt-4 text-base leading-relaxed sm:text-lg ${light ? 'text-white/65' : 'text-muted'}`}>{children}</p>}
    </div>
  )
}

function RevealBlock({ children, className = '', delay = 0, as: Tag = 'div' }) {
  const ref = useRef(null)
  const [visible, setVisible] = useState(false)

  useEffect(() => {
    const element = ref.current
    if (!element) return

    if (!('IntersectionObserver' in window)) {
      setVisible(true)
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry.isIntersecting) return
        setVisible(true)
        observer.disconnect()
      },
      { rootMargin: '0px 0px -10% 0px', threshold: 0.12 }
    )

    observer.observe(element)
    return () => observer.disconnect()
  }, [])

  return (
    <Tag
      ref={ref}
      className={`${className} transition-all duration-700 ease-out ${visible ? 'translate-y-0 opacity-100' : 'translate-y-5 opacity-0'}`}
      style={{ transitionDelay: visible ? `${delay}ms` : '0ms' }}
    >
      {children}
    </Tag>
  )
}

function OverviewSection() {
  const items = [
    ['Improved public service', 'Provides a clearer digital access point for LGU-managed market and facility collection services.'],
    ['More organized records', 'Supports consistent viewing of municipal collection information, facility coverage, and operational status.'],
    ['Better office decision-making', 'Helps revenue offices review collection performance and identify areas that may need attention.'],
  ]

  return (
    <section id="overview" className="scroll-mt-24 border-t border-line/80 bg-gradient-to-b from-[#eef3f8] to-white py-9 sm:py-10">
      <div className="container-px grid items-center gap-8 lg:grid-cols-[0.95fr,1.05fr]">
        <RevealBlock>
          <SectionHeading eyebrow="Overview" title="Modernizing LGU revenue collection across CARCANMADCARLAN.">
            StallTrack presents a formal digital approach for managing local revenue collection activities
            across public markets and LGU-managed facilities. Cantilan serves as the primary implementation,
            while the wider CARCANMADCARLAN view demonstrates how the same service model can support
            neighboring municipalities in the future.
          </SectionHeading>
        </RevealBlock>

        <div className="grid w-full gap-4">
          {items.map(([title, body], index) => (
            <RevealBlock key={title} delay={index * 90} className="group rounded-2xl border border-line bg-white p-5 shadow-soft transition duration-300 hover:-translate-y-0.5 hover:border-gold/45 hover:shadow-card">
              <div className="flex items-start gap-4">
                <span className="grid h-10 w-10 flex-shrink-0 place-items-center rounded-xl bg-navy text-gold transition group-hover:bg-navy-600">
                  <span className="font-display text-lg font-bold">{index + 1}</span>
                </span>
                <div>
                  <h3 className="font-display text-xl font-bold text-navy">{title}</h3>
                  <p className="mt-1 text-sm leading-relaxed text-muted">{body}</p>
                </div>
              </div>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  )
}

function ArchitectureSection() {
  const cards = [
    {
      title: 'Consistent service experience',
      body: 'Gives participating municipalities a familiar and orderly way to present collection access, facility information, and official notices.',
    },
    {
      title: 'Support for local differences',
      body: 'Recognizes that each LGU may have different facilities, collection schedules, rate structures, and office procedures.',
    },
    {
      title: 'Facility-aware operations',
      body: 'Designed around real LGU enterprise activities such as markets, commercial spaces, terminals, slaughterhouses, and other local facilities.',
    },
    {
      title: 'Responsible expansion',
      body: 'Keeps Cantilan as the active implementation while presenting other municipalities as future-ready areas for review and extension.',
    },
  ]

  return (
    <section id="architecture" className="scroll-mt-24 bg-navy py-9 text-white sm:py-11">
      <div className="container-px">
        <RevealBlock>
          <SectionHeading eyebrow="Implementation approach" title="Prepared for wider municipal use while preserving local requirements." center light>
            The project is presented as a practical capstone implementation for LGU revenue operations:
            formal enough for municipal review, flexible enough to reflect different facilities and
            collection practices across the CARCANMADCARLAN cluster.
          </SectionHeading>
        </RevealBlock>

        <div className="mt-9 grid gap-5 md:grid-cols-2 lg:grid-cols-4">
          {cards.map((card, index) => (
            <RevealBlock key={card.title} delay={index * 80} className="group rounded-2xl border border-white/10 bg-white/[0.05] p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-gold/35 hover:bg-white/[0.075]">
              <div className="grid h-11 w-11 place-items-center rounded-xl bg-gold/15 text-gold transition group-hover:bg-gold/20">
                <Icon
                  path={<><path d="M4 21V9" /><path d="M20 21V9" /><path d="M12 3 3 8h18Z" /><path d="M9 21v-7h6v7" /></>}
                  className="h-5 w-5"
                />
              </div>
              <h3 className="mt-5 font-display text-xl font-bold">{card.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-white/62">{card.body}</p>
            </RevealBlock>
          ))}
        </div>
      </div>
    </section>
  )
}

function AboutSection() {
  const facts = [
    ['Primary focus', 'Cantilan EEMO revenue collection operations'],
    ['Cluster view', 'CARCANMADCARLAN municipalities for future municipal readiness'],
    ['Project purpose', 'Organized collection records, reports, and monitoring'],
  ]

  return (
    <section id="about" className="scroll-mt-24 bg-white py-9 sm:py-10">
      <div className="container-px grid items-center gap-8 lg:grid-cols-[1.05fr,0.95fr]">
        <RevealBlock>
          <SectionHeading eyebrow="Capstone context" title="A focused system proposal for local revenue collection management.">
            This page supports the capstone presentation of StallTrack as a digital solution for LGU-managed
            revenue collection. It highlights the system’s intended public-office value: organized records,
            clearer monitoring, improved reporting, and a more consistent experience for municipal stakeholders.
          </SectionHeading>
        </RevealBlock>

        <RevealBlock delay={120} className="overflow-hidden rounded-3xl border border-line bg-mist shadow-card transition duration-300 hover:-translate-y-0.5 hover:shadow-xl">
          <div className="h-1.5 bg-gradient-to-r from-gold via-gold-light to-gold" />
          <div className="p-7">
            <div className="flex items-center gap-4 border-b border-line pb-5">
              <img
                src="/carcanmadcarlan/logo/stalltrack-seal-logo.png"
                alt="StallTrack seal"
                className="h-16 w-16 rounded-full"
              />
              <div>
                <h3 className="font-display text-2xl font-bold text-navy">StallTrack</h3>
                <p className="text-sm uppercase tracking-[0.18em] text-gold">Service · Integrity · Trust</p>
              </div>
            </div>
            <div className="mt-5 grid gap-3 text-sm text-muted">
              {facts.map(([label, value]) => (
                <div key={label} className="rounded-2xl border border-line bg-white px-4 py-3">
                  <span className="block text-[11px] font-bold uppercase tracking-[0.16em] text-gold">{label}</span>
                  <span className="mt-1 block font-medium text-navy/78">{value}</span>
                </div>
              ))}
            </div>
          </div>
        </RevealBlock>
      </div>
    </section>
  )
}

function ContactSection() {
  return (
    <section id="contact" className="scroll-mt-24 bg-[#eef3f8] py-8 sm:py-10">
      <div className="container-px">
        <RevealBlock className="rounded-3xl bg-gradient-to-br from-navy to-navy-600 p-8 text-white shadow-card sm:p-10 lg:p-12">
          <div className="grid items-center gap-8 lg:grid-cols-[1.25fr,0.75fr]">
            <div>
              <span className="text-[11px] font-bold uppercase tracking-[0.22em] text-gold">Project inquiry</span>
              <h2 className="mt-3 font-display text-3xl font-bold sm:text-4xl">For review, demonstration, or capstone discussion.</h2>
              <p className="mt-3 max-w-2xl text-base leading-relaxed text-white/68">
                For academic evaluation, system demonstration, or LGU-related coordination, contact the
                project representative directly.
              </p>
            </div>
            <div className="flex flex-col gap-3 sm:flex-row lg:flex-col">
              <a href="mailto:clint@stalltrack.site?subject=StallTrack%20Capstone%20Project%20Inquiry" className="btn-gold">
                <Icon
                  path={<><rect x="3" y="5" width="18" height="14" rx="2" /><path d="m3 7 9 6 9-6" /></>}
                  className="h-5 w-5"
                />
                Email Project Representative
              </a>
              <a href="#top" className="btn-ghost">Back to top</a>
            </div>
          </div>
        </RevealBlock>
      </div>
    </section>
  )
}

export default function SelectMunicipality() {
  const [activeSection, setActiveSection] = useState('municipalities')

  useEffect(() => {
    const sectionIds = ['municipalities', 'overview', 'architecture', 'about', 'contact']
    let frame = 0

    const updateActiveSection = () => {
      window.cancelAnimationFrame(frame)
      frame = window.requestAnimationFrame(() => {
        if (window.scrollY < window.innerHeight * 0.55) {
          setActiveSection('municipalities')
          return
        }

        const marker = window.scrollY + window.innerHeight * 0.36
        const current = sectionIds.reduce((active, id) => {
          const element = document.getElementById(id)
          if (!element) return active
          return element.offsetTop <= marker ? id : active
        }, 'municipalities')

        setActiveSection(current)
      })
    }

    updateActiveSection()
    window.addEventListener('scroll', updateActiveSection, { passive: true })
    window.addEventListener('resize', updateActiveSection)

    return () => {
      window.cancelAnimationFrame(frame)
      window.removeEventListener('scroll', updateActiveSection)
      window.removeEventListener('resize', updateActiveSection)
    }
  }, [])

  return (
    <div id="top" className="min-h-[100dvh] bg-[#eef3f8] text-navy">
      <Header activeSection={activeSection} />

      <main className="relative overflow-visible lg:h-[calc(100dvh-4.25rem)] lg:overflow-hidden">
        <div
          className="pointer-events-none absolute inset-0 bg-cover bg-center bg-no-repeat opacity-100"
          style={{
            backgroundImage: 'url("/carcanmadcarlan/page/municipality-page-background.png")',
          }}
        />
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-b from-white/15 via-white/5 to-[#eef3f8]/20" />
        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,transparent_48%,rgba(11,34,57,0.05)_100%)]" />
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.08]"
          style={{
            backgroundImage: 'radial-gradient(circle at 1px 1px, rgba(11,34,57,0.12) 1px, transparent 0)',
            backgroundSize: '18px 18px',
          }}
        />
        <div className="pointer-events-none absolute inset-x-0 top-0 h-24 bg-gradient-to-b from-white/65 to-transparent" />

        <section className="relative mx-auto flex min-h-[calc(100dvh-4.25rem)] w-full max-w-[118rem] flex-col px-4 py-4 sm:px-7 lg:h-full lg:px-10 lg:py-5">
          <div className="mx-auto max-w-5xl shrink-0 text-center">
            <div className="mx-auto grid h-12 w-12 place-items-center sm:h-14 sm:w-14">
              <img
                src="/carcanmadcarlan/icons/municipal-building-gold-trimmed.png"
                alt=""
                aria-hidden="true"
                className="h-full w-full object-contain drop-shadow-[0_10px_18px_rgba(200,168,75,0.18)]"
              />
            </div>
            <h1 className="mt-2 font-display text-4xl font-bold leading-none tracking-tight text-navy sm:text-5xl lg:text-[3.4rem]">
              Select Municipality
            </h1>
            <div className="mt-2 flex flex-col items-center justify-center gap-1 text-sm font-semibold text-navy sm:flex-row sm:gap-2 sm:text-base lg:text-lg">
              <span>CARCANMADCARLAN Cluster</span>
              <span className="hidden text-gold sm:block">•</span>
              <span>LGU Revenue and Collection Management System</span>
            </div>
            <p className="mx-auto mt-2 max-w-3xl text-sm leading-relaxed text-muted sm:text-base">
              Choose the municipality you want to access to continue to the official StallTrack portal.
            </p>
          </div>

          <div id="municipalities" className="mt-4 grid flex-1 content-end gap-4 pb-5 sm:grid-cols-2 lg:grid-cols-5 lg:pb-6">
            {municipalities.map((municipality) => (
              <MunicipalityCard key={municipality.name} municipality={municipality} />
            ))}
          </div>
        </section>
      </main>

      <OverviewSection />
      <ArchitectureSection />
      <AboutSection />
      <ContactSection />
    </div>
  )
}
