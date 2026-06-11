/* StallTrack — public landing page (marketing only, fictional sample data). */
import Reveal from '../components/Reveal.jsx'

function Icon({ path, className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {path}
    </svg>
  )
}

const Dot = () => <span className="h-1.5 w-1.5 rounded-full bg-gold" />

/* ───────────────────────── Hero ───────────────────────── */
function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '24px 24px' }}
      />
      <div className="pointer-events-none absolute -right-32 -top-24 h-96 w-96 rounded-full bg-gold/10 blur-3xl" />
      <div className="pointer-events-none absolute -bottom-32 -left-24 h-80 w-80 rounded-full bg-gold/5 blur-3xl" />

      <div className="container-px relative grid items-center gap-y-12 gap-x-10 py-16 sm:py-20 lg:grid-cols-2 lg:gap-x-14 lg:py-24">
        <Reveal>
          <span className="eyebrow">GovTech · LGU Economic Enterprise Operations</span>
          <h1 className="mt-5 font-display text-[2.6rem] font-bold leading-[1.06] sm:text-5xl lg:text-[3.4rem]">
            Run public market &amp; facility collections on one clean platform.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
            StallTrack is a GovTech SaaS platform for Economic Enterprise Management Offices and
            LGU-managed facilities — digitizing stall records, rental collections, payment tracking,
            audit logs, and operational reports.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#features" className="btn-gold">View Features</a>
            <a href="#contact" className="btn-ghost">Contact Founder</a>
            <a href="#preview" className="btn-ghost">Request Demo</a>
          </div>
          <div className="mt-9 flex flex-wrap items-center gap-x-7 gap-y-3 text-sm text-white/55">
            <span className="flex items-center gap-2"><Dot /> Public markets</span>
            <span className="flex items-center gap-2"><Dot /> LGU-managed facilities</span>
            <span className="flex items-center gap-2"><Dot /> Rental &amp; fee collections</span>
          </div>
        </Reveal>

        <Reveal delay={120} className="lg:pl-4">
          <HeroCard />
        </Reveal>
      </div>
    </section>
  )
}

function HeroCard() {
  return (
    <div className="rounded-2xl border border-white/10 bg-white/[0.06] p-5 shadow-2xl backdrop-blur sm:p-6">
      <div className="flex items-center justify-between">
        <div className="text-xs font-semibold uppercase tracking-wider text-white/45">Collections · This Month</div>
        <span className="rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-gold-light">Sample</span>
      </div>
      <div className="mt-3 font-display text-4xl font-bold text-white">₱248,650.00</div>
      <div className="mt-1 text-sm text-white/50">Across 6 managed facilities</div>

      <div className="mt-6 flex items-end gap-2" aria-hidden="true">
        {[40, 62, 51, 78, 66, 90, 72].map((h, i) => (
          <div key={i} className="flex-1 rounded-t bg-gradient-to-t from-gold/40 to-gold" style={{ height: `${h}px` }} />
        ))}
      </div>
      <div className="mt-2 flex justify-between text-[10px] text-white/35">
        {['Jan', 'Feb', 'Mar', 'Apr', 'May', 'Jun', 'Jul'].map((m) => <span key={m}>{m}</span>)}
      </div>

      <div className="mt-6 grid grid-cols-3 gap-3 border-t border-white/10 pt-5">
        {[
          ['Active stalls', '312'],
          ['Collection rate', '92%'],
          ['Delinquent', '14'],
        ].map(([k, v]) => (
          <div key={k}>
            <div className="font-display text-xl font-bold text-gold-light">{v}</div>
            <div className="text-[11px] text-white/45">{k}</div>
          </div>
        ))}
      </div>
    </div>
  )
}

/* ───────────────────────── Trust strip ───────────────────────── */
function TrustStrip() {
  const items = [
    ['8', 'Facility types supported'],
    ['3', 'Role-based access levels'],
    ['100%', 'Audited financial actions'],
    ['Web + Mobile', 'Admin & field collection'],
  ]
  return (
    <section className="border-y border-line bg-white">
      <div className="container-px grid grid-cols-2 gap-y-8 py-10 lg:grid-cols-4">
        {items.map(([v, k]) => (
          <div key={k} className="text-center">
            <div className="font-display text-2xl font-bold text-navy sm:text-3xl">{v}</div>
            <div className="mt-1 text-xs text-muted sm:text-sm">{k}</div>
          </div>
        ))}
      </div>
    </section>
  )
}

/* Reusable section heading */
function Heading({ eyebrow, title, sub, light, center }) {
  return (
    <Reveal className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <span className={`eyebrow ${light ? '' : 'text-green'}`}>{eyebrow}</span>
      <h2 className={`mt-3 font-display text-3xl font-bold sm:text-4xl ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {sub && <p className={`mt-4 text-lg ${light ? 'text-white/65' : 'text-muted'}`}>{sub}</p>}
    </Reveal>
  )
}

/* ───────────────────────── Problem ───────────────────────── */
function Problem() {
  const items = [
    { t: 'Paper-based collections', d: 'Daily and monthly fees logged on paper are slow to total and easy to misplace.' },
    { t: 'Scattered records', d: 'Stall, tenant, and contract details live across notebooks, spreadsheets, and folders.' },
    { t: 'Hard audit trails', d: 'Tracing who collected what, when, and under which OR number is tedious and error-prone.' },
    { t: 'Manual reporting', d: 'Monthly and yearly reports are re-compiled by hand, delaying decisions and reconciliation.' },
  ]
  return (
    <section className="bg-mist py-20 sm:py-24">
      <div className="container-px">
        <Heading eyebrow="The problem" title="Manual operations slow down revenue collection." sub="Many Economic Enterprise Management Offices and public market / facility operations still depend on manual records, paper-based collections, scattered reports, and difficult audit trails." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-4">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 80}>
              <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-soft">
                <h3 className="font-display text-lg font-bold text-navy">{it.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── Solution ───────────────────────── */
function Solution() {
  const points = [
    'One source of truth for stalls, tenants, and contracts',
    'Faster, traceable rental and fee collections',
    'Reports and dashboards generated automatically',
    'A complete audit trail on every transaction',
  ]
  return (
    <section className="py-20 sm:py-24">
      <div className="container-px grid items-center gap-12 lg:grid-cols-2">
        <div>
          <Heading eyebrow="The solution" title="Everything in one digital platform." sub="StallTrack centralizes stall records, rental collections, payment tracking, reports, audit logs, and dashboards — so offices spend less time on paperwork and more on service." />
          <Reveal delay={80}>
            <ul className="mt-7 space-y-3.5">
              {points.map((p) => (
                <li key={p} className="flex items-start gap-3">
                  <span className="mt-0.5 grid h-6 w-6 flex-shrink-0 place-items-center rounded-full bg-green-bg text-green">
                    <Icon path={<path d="M20 6 9 17l-5-5" />} className="h-3.5 w-3.5" />
                  </span>
                  <span className="text-navy/80">{p}</span>
                </li>
              ))}
            </ul>
          </Reveal>
        </div>
        <Reveal delay={120}>
          <div className="rounded-3xl border border-line bg-gradient-to-br from-mist to-white p-6 shadow-card sm:p-8">
            <div className="grid grid-cols-2 gap-4">
              {[
                ['Records', 'Stalls · tenants · contracts'],
                ['Collections', 'Daily · monthly · per-head'],
                ['Reports', 'Monthly · yearly · exportable'],
                ['Audit', 'Actor · timestamp · before/after'],
              ].map(([k, v]) => (
                <div key={k} className="rounded-2xl border border-line bg-white p-5">
                  <div className="font-display text-lg font-bold text-navy">{k}</div>
                  <div className="mt-1 text-xs text-muted">{v}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────────────────────── Features ───────────────────────── */
function Features() {
  const features = [
    { t: 'Stall & tenant records', d: 'Maintain stalls, occupants, contracts, and terms with expiry tracking.', p: <><rect x="3" y="3" width="7" height="7" rx="1" /><rect x="14" y="3" width="7" height="7" rx="1" /><rect x="3" y="14" width="7" height="7" rx="1" /><rect x="14" y="14" width="7" height="7" rx="1" /></> },
    { t: 'Rental & collection tracking', d: 'Record daily, monthly, and per-head fees with clear paid / partial / unpaid status.', p: <><line x1="12" y1="1" x2="12" y2="23" /><path d="M17 5H9.5a3.5 3.5 0 0 0 0 7h5a3.5 3.5 0 0 1 0 7H6" /></> },
    { t: 'Payment history', d: 'A rolling per-stall ledger with OR numbers and collector attribution.', p: <><path d="M3 3v18h18" /><path d="M7 14l4-4 3 3 5-6" /></> },
    { t: 'Monthly & yearly reports', d: 'Collection totals, outstanding balances, and collection-rate reporting per facility.', p: <><rect x="3" y="3" width="18" height="18" rx="2" /><path d="M8 13v4M12 9v8M16 6v11" /></> },
    { t: 'Audit logs', d: 'Every financial transaction logged with actor, timestamp, and before/after values.', p: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="m9 12 2 2 4-4" /></> },
    { t: 'Role-based admin access', d: 'Separate Head, Admin, and Collector roles with facility-scoped permissions.', p: <><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2" /><circle cx="12" cy="7" r="4" /></> },
    { t: 'Facility dashboards', d: 'At-a-glance KPIs and trends for each managed facility.', p: <><rect x="3" y="3" width="18" height="18" rx="2" /><line x1="3" y1="9" x2="21" y2="9" /><line x1="9" y1="21" x2="9" y2="9" /></> },
    { t: 'Exportable reports', d: 'Generate printable, shareable reports for review and reconciliation.', p: <><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" /><polyline points="7 10 12 15 17 10" /><line x1="12" y1="15" x2="12" y2="3" /></> },
    { t: 'Mobile collector support', d: 'Optional field collection for collectors — record on-site and sync.', p: <><rect x="5" y="2" width="14" height="20" rx="2" /><line x1="12" y1="18" x2="12" y2="18" /></> },
  ]
  return (
    <section id="features" className="scroll-mt-20 bg-mist py-20 sm:py-24">
      <div className="container-px">
        <Heading eyebrow="Features" title="Built around real office workflows." sub="Designed around the day-to-day work of economic enterprise and public market offices." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {features.map((f, i) => (
            <Reveal key={f.t} delay={(i % 3) * 90}>
              <div className="group h-full rounded-2xl border border-line bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-card">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-gold transition group-hover:scale-105 group-hover:bg-navy-600">
                  <Icon path={f.p} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-navy">{f.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{f.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── Use Cases ───────────────────────── */
function UseCases() {
  const cases = [
    'Public market stall management',
    'LGU-managed facility operations',
    'Economic Enterprise Management Office workflows',
    'Rental collection monitoring',
    'Administrative reporting',
    'Internal audit and transparency',
    'Payment and delinquency tracking',
  ]
  return (
    <section id="usecases" className="scroll-mt-20 py-20 sm:py-24">
      <div className="container-px">
        <Heading eyebrow="Use cases" title="Who StallTrack helps." sub="Built for public market offices, LGU-managed facilities, and teams handling rental collections and operational reporting." />
        <Reveal className="mt-10 flex flex-wrap gap-3">
          {cases.map((c) => (
            <span key={c} className="rounded-full border border-line bg-white px-5 py-3 text-sm font-medium text-navy/80 shadow-soft transition hover:border-gold/50 hover:text-navy">
              {c}
            </span>
          ))}
        </Reveal>
      </div>
    </section>
  )
}

/* ───────────────────────── Product Showcase (real UI) ───────────────────────── */
function ShotFrame({ src, alt, title, sub, delay = 0 }) {
  const webp = src.replace(/\.png$/i, '.webp')
  return (
    <Reveal as="figure" delay={delay}>
      <div className="overflow-hidden rounded-3xl border border-line bg-white p-2.5 shadow-card transition duration-300 hover:shadow-xl sm:p-4">
        <picture>
          <source srcSet={webp} type="image/webp" />
          <img src={src} alt={alt} loading="lazy" className="block h-auto w-full rounded-2xl" />
        </picture>
      </div>
      <figcaption className="mt-3 text-center text-sm font-semibold text-navy">
        {title} <span className="font-normal text-muted">— {sub}</span>
      </figcaption>
    </Reveal>
  )
}

function Preview() {
  return (
    <section id="preview" className="scroll-mt-20 bg-mist py-20 sm:py-24">
      <div className="container-px">
        <Heading center eyebrow="Product showcase" title="A closer look at StallTrack." sub="The web admin area, collector app, and payor portal — all using fictional sample data for illustration." />

        <div className="mx-auto mt-12 max-w-5xl">
          <ShotFrame src="/showcase/admin.png" alt="StallTrack Web Admin Area — dashboard, facilities, reports" title="Web Admin Area" sub="facility oversight, monitoring, reporting & audit" />
        </div>

        <div className="mx-auto mt-12 grid max-w-4xl gap-8 sm:grid-cols-2">
          <ShotFrame src="/showcase/collector.png" alt="StallTrack Collector Area — mobile field collection screens" title="Collector App" sub="field collection & official receipts" delay={80} />
          <ShotFrame src="/showcase/payor.png" alt="StallTrack Payor Portal — balances, payments, receipts" title="Payor Portal" sub="balances, GCash payments & receipts" delay={160} />
        </div>

        <p className="mt-8 text-center text-xs text-muted/80">Sample interface · no real, private, or government data is shown.</p>
      </div>
    </section>
  )
}

/* ───────────────────────── Security ───────────────────────── */
function Security() {
  const items = [
    { t: 'Role-based access', d: 'Head, Admin, and Collector roles with least-privilege, facility-scoped permissions.' },
    { t: 'Admin-only dashboard', d: 'The operational system stays private behind authentication — not publicly exposed.' },
    { t: 'Audit trail support', d: 'Financial transactions are recorded with actor, timestamp, and before/after values.' },
    { t: 'Secure records management', d: 'Operational data is handled privately and never surfaced on this public site.' },
  ]
  return (
    <section id="security" className="scroll-mt-20 bg-navy py-20 text-white sm:py-24">
      <div className="container-px">
        <Heading light eyebrow="Security & privacy" title="Private by design." sub="StallTrack treats operational data as private. This website is a public company page — the admin system itself is access-controlled and does not need to be public." />
        <div className="mt-12 grid gap-5 sm:grid-cols-2">
          {items.map((it, i) => (
            <Reveal key={it.t} delay={i * 80}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6 transition hover:bg-white/[0.07]">
                <span className="grid h-10 w-10 place-items-center rounded-lg bg-gold/15 text-gold">
                  <Icon path={<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" />} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold">{it.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/55">{it.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

/* ───────────────────────── Founder ───────────────────────── */
function Founder() {
  return (
    <section id="founder" className="scroll-mt-20 py-12 sm:py-16">
      <div className="container-px">
        <Reveal>
          <div className="rounded-3xl border border-line bg-mist p-8 sm:p-12">
            <div className="flex flex-col items-center gap-8 text-center sm:flex-row sm:items-start sm:text-left lg:gap-10">
              <div className="h-28 w-28 flex-shrink-0 overflow-hidden rounded-2xl">
                <img
                  src="/founder.png"
                  alt="Clint Villanueva"
                  className="h-full w-full object-cover"
                />
              </div>
              <div>
                <span className="eyebrow text-green">Founder</span>
                <h2 className="mt-2 font-display text-3xl font-bold text-navy">Clint Villanueva</h2>
                <p className="mt-1 text-sm font-semibold text-muted">.NET Software Developer</p>
                <p className="mt-4 max-w-2xl leading-relaxed text-navy/75">
                  Clint Villanueva is a software developer building StallTrack to help modernize LGU
                  economic enterprise, public market, and facility operations through clean, practical,
                  and secure digital tools.
                </p>
                <div className="mt-5 flex flex-wrap justify-center gap-2 text-xs sm:justify-start">
                  {['Early-stage / MVP', 'Bootstrapped', 'Solo founder', 'GovTech · SaaS'].map((t) => (
                    <span key={t} className="rounded-full border border-line bg-white px-3 py-1.5 font-medium text-navy/70">{t}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

/* ───────────────────────── Contact / CTA ───────────────────────── */
function Contact() {
  return (
    <section id="contact" className="scroll-mt-20 pb-24">
      <div className="container-px">
        <Reveal>
          <div className="overflow-hidden rounded-3xl bg-gradient-to-br from-navy to-navy-600 p-10 text-white sm:p-14">
            <div className="grid items-center gap-8 lg:grid-cols-[1.4fr,1fr]">
              <div>
                <h2 className="font-display text-3xl font-bold sm:text-4xl">Let's talk about your operations.</h2>
                <p className="mt-4 max-w-xl text-lg text-white/70">
                  Interested in StallTrack for your office or facility? Reach out for a walkthrough or demo.
                </p>
                <div className="mt-7 flex flex-wrap gap-3">
                  <a href="mailto:founder@stalltrack.site" className="btn-gold">Email the Founder</a>
                  <a href="mailto:founder@stalltrack.site?subject=StallTrack%20Demo%20Request" className="btn-ghost">Request a Demo</a>
                </div>
              </div>
              <div className="rounded-2xl border border-white/10 bg-white/[0.05] p-6">
                <Row k="Business email" v="founder@stalltrack.site" />
                <Row k="Website" v="stalltrack.site" />
                <Row k="Product" v="StallTrack (GovTech SaaS)" />
                <Row k="Stage" v="Early-stage / MVP" last />
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Row({ k, v, last }) {
  return (
    <div className={`flex flex-col gap-0.5 py-3 sm:flex-row sm:items-center sm:justify-between sm:gap-4 ${last ? '' : 'border-b border-white/10'}`}>
      <span className="text-xs text-white/45 sm:text-sm">{k}</span>
      <span className="break-all text-sm font-semibold text-white sm:break-normal sm:text-right">{v}</span>
    </div>
  )
}

export default function Home() {
  return (
    <>
      <Hero />
      <TrustStrip />
      <Problem />
      <Solution />
      <Features />
      <UseCases />
      <Preview />
      <Security />
      <Founder />
      <Contact />
    </>
  )
}
