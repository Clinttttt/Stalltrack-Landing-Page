function Section({ title, children }) {
  return (
    <div className="mt-8">
      <h2 className="font-display text-xl font-bold text-navy">{title}</h2>
      <div className="mt-2 space-y-3 leading-relaxed text-navy/75">{children}</div>
    </div>
  )
}

export default function Privacy() {
  return (
    <div className="bg-mist py-10 sm:py-12">
      <div className="container-px max-w-3xl">
        <span className="eyebrow text-green">Legal</span>
        <h1 className="mt-2.5 font-display text-4xl font-bold leading-tight text-navy">Privacy Policy</h1>
        <p className="mt-2 text-sm text-muted">Last updated: June 2026</p>

        <div className="mt-6 rounded-2xl border border-line bg-white p-8 shadow-soft">
          <p className="leading-relaxed text-navy/75">
            This Privacy Policy explains how StallTrack ("we", "our", "the platform") handles
            information in connection with our public website and product. StallTrack is a GovTech
            SaaS platform for local government unit (LGU) economic enterprise operations, public
            market operations, and facility management. This website is a public company page; it
            does not expose any real operational or administrative data.
          </p>

          <Section title="1. Information We Collect">
            <p>
              <strong>Public website.</strong> If you contact us by email or submit an inquiry,
              we receive the information you choose to send (such as your name, work email,
              organization, role, phone number, and message).
            </p>
            <p>
              <strong>Product (admin system).</strong> When deployed for an office or facility, the
              platform processes operational records (such as stall, tenant, contract, and payment
              records) on behalf of the organization that operates it. That data is private and is
              never published on this website.
            </p>
          </Section>

          <Section title="2. How We Use Information">
            <p>
              We use contact information solely to respond to inquiries about StallTrack.
              Operational data within a deployment is used only to provide the platform's
              functionality (records, collections, reporting, and audit trails) to the operating
              organization.
            </p>
          </Section>

          <Section title="3. Sample Data on This Website">
            <p>
              All dashboards, figures, names, and records shown on this marketing website are
              fictional samples for illustration only. They do not represent any real person,
              transaction, organization, or government record.
            </p>
          </Section>

          <Section title="4. Data Security">
            <p>
              The product applies role-based access control, authentication for the administrative
              dashboard, and audit logging of financial transactions. Operational data is handled
              privately and is not accessible through this public website.
            </p>
          </Section>

          <Section title="5. Data Sharing">
            <p>
              We do not sell personal information. Operational data belongs to the operating
              organization and is not shared except as needed to provide the service or as required
              by applicable law.
            </p>
          </Section>

          <Section title="6. Contact">
            <p>
              For privacy questions, contact{' '}
              <a href="mailto:clint@stalltrack.site" className="font-semibold text-green hover:underline">
                clint@stalltrack.site
              </a>.
            </p>
          </Section>

          <p className="mt-8 text-sm text-muted">
            This document is provided for an early-stage product and may be updated as StallTrack evolves.
          </p>
        </div>
      </div>
    </div>
  )
}
