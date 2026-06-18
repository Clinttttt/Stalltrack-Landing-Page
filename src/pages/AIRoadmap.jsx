import Reveal from '../components/Reveal.jsx'

function Icon({ path, className = 'h-6 w-6' }) {
  return (
    <svg viewBox="0 0 24 24" className={className} fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
      {path}
    </svg>
  )
}

function Heading({ eyebrow, title, sub, light, center }) {
  return (
    <Reveal className={`max-w-2xl ${center ? 'mx-auto text-center' : ''}`}>
      <span className={`eyebrow ${light ? '' : 'text-green'}`}>{eyebrow}</span>
      <h2 className={`mt-2.5 font-display text-3xl font-bold leading-[1.1] sm:text-4xl ${light ? 'text-white' : 'text-navy'}`}>{title}</h2>
      {sub && <p className={`mt-4 text-lg ${light ? 'text-white/65' : 'text-muted'}`}>{sub}</p>}
    </Reveal>
  )
}

function Hero() {
  return (
    <section className="relative overflow-hidden bg-navy text-white">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.06]"
        style={{ backgroundImage: 'radial-gradient(circle at 1px 1px, #fff 1px, transparent 0)', backgroundSize: '24px 24px' }}
      />
      <div className="container-px relative grid items-center gap-10 py-16 sm:py-20 lg:grid-cols-[1.05fr,0.95fr] lg:py-24">
        <Reveal>
          <span className="eyebrow">Planned AI Roadmap</span>
          <h1 className="mt-4 font-display text-[2.5rem] font-bold leading-[1.06] sm:text-5xl lg:text-[3.25rem]">
            Agentic AI for public revenue operations.
          </h1>
          <p className="mt-6 max-w-xl text-base leading-relaxed text-white/65 sm:text-lg">
            StallTrack's planned intelligence layer will help LGU teams detect collection risks, prepare
            reports, guide collectors, and review audit signals while keeping staff in control of every
            financial action.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="#agents" className="btn-gold">Explore AI Agents</a>
            <a href="/#contact" className="btn-ghost">Discuss Pilot</a>
          </div>
        </Reveal>

        <Reveal delay={120}>
          <div className="rounded-3xl border border-white/10 bg-white/[0.06] p-6 shadow-2xl backdrop-blur sm:p-7">
            <div className="flex items-center justify-between">
              <div>
                <div className="text-xs font-semibold uppercase tracking-wider text-white/45">AI Operations Brief</div>
                <div className="mt-1 font-display text-3xl font-bold text-white">Next best actions</div>
              </div>
              <span className="rounded-full bg-gold/15 px-2.5 py-1 text-[10px] font-bold uppercase tracking-wide text-gold-light">Roadmap</span>
            </div>
            <div className="mt-6 space-y-3">
              {[
                ['3 vendors need follow-up', 'Prioritize arrears over 60 days before month-end close.'],
                ['2 contracts expiring soon', 'Prepare renewal list for stalls with active collection history.'],
                ['1 OR sequence gap', 'Review missing receipt number before finalizing report.'],
              ].map(([title, desc]) => (
                <div key={title} className="rounded-2xl border border-white/10 bg-navy/35 p-4">
                  <div className="font-semibold text-gold-light">{title}</div>
                  <div className="mt-1 text-sm leading-relaxed text-white/55">{desc}</div>
                </div>
              ))}
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

function Principles() {
  const items = [
    { t: 'Human-approved actions', d: 'AI can recommend and prepare work, but staff approve payment, OR, contract, and enforcement decisions.' },
    { t: 'Source-grounded suggestions', d: 'Recommendations are tied to StallTrack records such as payments, contracts, facility rules, and audit logs.' },
    { t: 'Audit-aware automation', d: 'Agent activity is designed to be logged, explainable, and reviewable by office leadership.' },
  ]
  return (
    <section className="border-b border-line bg-white py-8 sm:py-10">
      <div className="container-px grid gap-5 lg:grid-cols-3">
        {items.map((it, i) => (
          <Reveal key={it.t} delay={i * 80}>
            <div className="h-full rounded-2xl border border-line bg-mist p-6">
              <h2 className="font-display text-xl font-bold text-navy">{it.t}</h2>
              <p className="mt-2 text-sm leading-relaxed text-muted">{it.d}</p>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  )
}

function Agents() {
  const agents = [
    {
      t: 'Collection Risk Agent',
      d: 'Surfaces stalls, vendors, facilities, or periods likely to become delinquent based on payment history, billing rhythm, and missed collection patterns.',
      p: <><path d="M3 3v18h18" /><path d="M7 15l4-4 3 3 5-7" /></>,
    },
    {
      t: 'Report Drafting Agent',
      d: 'Prepares monthly collection summaries, delinquency narratives, and treasurer-ready report drafts from approved transaction records.',
      p: <><path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8z" /><path d="M14 2v6h6" /><path d="M8 13h8M8 17h6" /></>,
    },
    {
      t: 'Collector Route Assistant',
      d: 'Suggests practical field collection priorities, follow-up lists, and facility-specific reminders for mobile collectors during daily rounds.',
      p: <><path d="M9 18l-6 3V6l6-3 6 3 6-3v15l-6 3-6-3z" /><path d="M9 3v15M15 6v15" /></>,
    },
    {
      t: 'Audit Review Agent',
      d: 'Flags unusual edits, duplicate-looking entries, OR sequence gaps, and before/after changes that may need supervisor review.',
      p: <><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /><path d="M12 8v5" /><path d="M12 17h.01" /></>,
    },
    {
      t: 'Contract Watch Agent',
      d: 'Monitors expiring leases, unsigned occupancy issues, no-contract spaces, and renewal tasks across commercial centers and market stalls.',
      p: <><path d="M8 2h8l4 4v16H4V2h4z" /><path d="M16 2v4h4" /><path d="M8 12h8M8 16h5" /></>,
    },
    {
      t: 'Policy Q&A Agent',
      d: 'Answers staff questions using approved office rules, facility fee schedules, and internal documentation without exposing public data.',
      p: <><circle cx="12" cy="12" r="10" /><path d="M9.1 9a3 3 0 1 1 4.9 2.3c-.9.5-1.5 1.2-1.5 2.2" /><path d="M12 17h.01" /></>,
    },
  ]

  return (
    <section id="agents" className="scroll-mt-20 bg-mist py-8 sm:py-10">
      <div className="container-px">
        <Heading
          eyebrow="Agentic AI concepts"
          title="Purpose-built agents for EEMO workflows."
          sub="These are planned AI capabilities, designed around the same operational scope as StallTrack: collections, contracts, reports, delinquency monitoring, and audit trails."
        />
        <div className="mt-12 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {agents.map((agent, i) => (
            <Reveal key={agent.t} delay={(i % 3) * 90}>
              <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-soft transition duration-300 hover:-translate-y-1 hover:border-gold/40 hover:shadow-card">
                <span className="grid h-11 w-11 place-items-center rounded-xl bg-navy text-gold">
                  <Icon path={agent.p} className="h-5 w-5" />
                </span>
                <h3 className="mt-4 font-display text-lg font-bold text-navy">{agent.t}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{agent.d}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Workflow() {
  const steps = [
    ['1', 'Observe', 'Agents read approved StallTrack records, facility configuration, audit logs, and billing schedules.'],
    ['2', 'Reason', 'The system identifies patterns such as missed collection days, arrears, expiring contracts, and report gaps.'],
    ['3', 'Recommend', 'Staff receive ranked actions with plain-language explanations and links back to source records.'],
    ['4', 'Approve', 'Authorized users decide what to submit, follow up, export, or mark for review.'],
  ]
  return (
    <section className="py-8 sm:py-10">
      <div className="container-px">
        <Heading center eyebrow="AI workflow" title="Assistive, not autonomous finance." sub="StallTrack's AI direction focuses on reducing administrative load while preserving accountability for government revenue work." />
        <div className="mt-12 grid gap-5 md:grid-cols-4">
          {steps.map(([n, title, desc], i) => (
            <Reveal key={title} delay={i * 80}>
              <div className="h-full rounded-2xl border border-line bg-white p-6 shadow-soft">
                <div className="grid h-10 w-10 place-items-center rounded-full bg-green-bg font-bold text-green">{n}</div>
                <h3 className="mt-4 font-display text-lg font-bold text-navy">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-muted">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function Roadmap() {
  const phases = [
    ['Phase 1', 'AI-assisted reporting', 'Generate draft summaries, delinquency lists, and variance notes from existing dashboard records.'],
    ['Phase 2', 'Predictive collection insights', 'Prioritize follow-ups, detect missed collection patterns, and identify facilities needing intervention.'],
    ['Phase 3', 'Agentic office workflows', 'Coordinate report preparation, audit review queues, contract reminders, and collector task lists.'],
  ]
  return (
    <section className="bg-navy py-8 text-white sm:py-10">
      <div className="container-px">
        <Heading light eyebrow="Implementation path" title="A practical roadmap for AI adoption." sub="The roadmap starts with low-risk administrative assistance, then expands toward agentic coordination as the data foundation matures." />
        <div className="mt-12 grid gap-5 lg:grid-cols-3">
          {phases.map(([phase, title, desc], i) => (
            <Reveal key={phase} delay={i * 90}>
              <div className="h-full rounded-2xl border border-white/10 bg-white/[0.04] p-6">
                <div className="text-xs font-bold uppercase tracking-wider text-gold-light">{phase}</div>
                <h3 className="mt-3 font-display text-xl font-bold">{title}</h3>
                <p className="mt-2 text-sm leading-relaxed text-white/58">{desc}</p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

function CTA() {
  return (
    <section className="py-10 sm:py-14">
      <div className="container-px">
        <Reveal>
          <div className="rounded-3xl border border-line bg-mist p-8 text-center sm:p-12">
            <span className="eyebrow text-green">Pilot-ready direction</span>
            <h2 className="mx-auto mt-3 max-w-2xl font-display text-3xl font-bold leading-tight text-navy sm:text-4xl">
              Built for real LGU constraints, not generic AI demos.
            </h2>
            <p className="mx-auto mt-4 max-w-2xl text-muted">
              StallTrack's AI roadmap is anchored in revenue collection, public-market operations,
              official receipt workflows, contract monitoring, and auditable government reporting.
            </p>
            <div className="mt-7 flex flex-wrap justify-center gap-3">
              <a href="/#preview" className="btn-navy">View Product</a>
              <a href="/#contact" className="inline-flex items-center justify-center rounded-xl border border-line bg-white px-5 py-3 text-sm font-bold text-navy transition hover:border-gold/50">Contact Founder</a>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  )
}

export default function AIRoadmap() {
  return (
    <>
      <Hero />
      <Principles />
      <Agents />
      <Workflow />
      <Roadmap />
      <CTA />
    </>
  )
}
