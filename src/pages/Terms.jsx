function Section({ title, children }) {
  return (
    <div className="mt-8">
      <h2 className="font-display text-xl font-bold text-navy">{title}</h2>
      <div className="mt-2 space-y-3 leading-relaxed text-navy/75">{children}</div>
    </div>
  )
}

export default function Terms() {
  return (
    <div className="bg-mist py-16">
      <div className="container-px max-w-3xl">
        <span className="eyebrow text-green">Legal</span>
        <h1 className="mt-3 font-display text-4xl font-bold text-navy">Terms of Service</h1>
        <p className="mt-2 text-sm text-muted">Last updated: June 2026</p>

        <div className="mt-8 rounded-2xl border border-line bg-white p-8 shadow-soft">
          <p className="leading-relaxed text-navy/75">
            These Terms of Service govern your use of the StallTrack public website and product.
            By accessing the website or using the product, you agree to these terms.
          </p>

          <Section title="1. About StallTrack">
            <p>
              StallTrack is an independent GovTech SaaS product designed for LGU economic enterprise
              operations, public market operations, and facility management workflows. StallTrack is
              a privately developed product and is not an official government system or
              government-owned platform. Any reference to LGU or office workflows describes intended
              use cases, not an official affiliation.
            </p>
          </Section>

          <Section title="2. Use of the Website">
            <p>
              The website is provided for informational purposes about the product. Content,
              including any sample dashboards or figures, is fictional and provided "as is" without
              warranties of any kind.
            </p>
          </Section>

          <Section title="3. Product Access">
            <p>
              The StallTrack administrative system is access-controlled and intended for authorized
              users of an operating organization. Access is governed by separate arrangements with
              that organization and by role-based permissions within the platform.
            </p>
          </Section>

          <Section title="4. Acceptable Use">
            <p>
              You agree not to misuse the website or product, including attempting unauthorized
              access, disrupting the service, or using it for unlawful purposes.
            </p>
          </Section>

          <Section title="5. Intellectual Property">
            <p>
              The StallTrack name, branding, website, and software are the property of the founder.
              Operational data entered into a deployment remains the property of the operating
              organization.
            </p>
          </Section>

          <Section title="6. Limitation of Liability">
            <p>
              StallTrack is an early-stage product. To the maximum extent permitted by law, we are
              not liable for indirect or consequential damages arising from use of the website or
              product.
            </p>
          </Section>

          <Section title="7. Changes">
            <p>
              We may update these terms as the product evolves. Continued use after changes
              constitutes acceptance of the updated terms.
            </p>
          </Section>

          <Section title="8. Contact">
            <p>
              Questions about these terms? Contact{' '}
              <a href="mailto:founder@stalltrack.site" className="font-semibold text-green hover:underline">
                founder@stalltrack.site
              </a>.
            </p>
          </Section>
        </div>
      </div>
    </div>
  )
}
