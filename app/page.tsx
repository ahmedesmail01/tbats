export default function Home() {
  const whatsappNumber = "201222923147"; // e.g. 201234567890 (no + or spaces)
  const whatsappLink = `https://wa.me/${whatsappNumber}`;

  return (
    <div className="min-h-screen bg-linear-to-b from-slate-950 via-slate-900 to-slate-950 text-slate-50">
      <header className="sticky top-0 z-30 border-b border-white/5 bg-slate-950/80 backdrop-blur">
        <div className="mx-auto flex max-w-6xl items-center justify-between px-4 py-4 sm:px-6 lg:px-8">
          <div className="flex items-center gap-3">
            <div className="flex h-9 w-9 items-center justify-center rounded-lg bg-emerald-500/10 ring-1 ring-emerald-400/40">
              <span className="text-lg font-semibold text-emerald-300">T</span>
            </div>
            <div>
              <p className="text-sm font-semibold tracking-wide text-slate-50">
                TBATS
              </p>
              <p className="text-xs text-slate-400">
                Light Current & CCTV Solutions
              </p>
            </div>
          </div>

          <nav className="hidden items-center gap-6 text-sm text-slate-200 sm:flex">
            <a href="#services" className="transition hover:text-emerald-300">
              Services
            </a>
            <a href="#about" className="transition hover:text-emerald-300">
              About
            </a>
            <a href="#contact" className="transition hover:text-emerald-300">
              Contact
            </a>
          </nav>

          <a
            href="#contact"
            className="hidden rounded-full bg-emerald-500 px-4 py-2 text-xs font-semibold uppercase tracking-wide text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400 sm:inline-flex"
          >
            Request a quote
          </a>
        </div>
      </header>

      <main className="mx-auto flex max-w-6xl flex-col gap-20 px-4 pb-16 pt-10 sm:px-6 lg:px-8 lg:gap-28 lg:pt-16">
        {/* Hero */}
        <section className="grid items-center gap-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
          <div className="space-y-6">
            <p className="text-xs font-semibold uppercase tracking-[0.2em] text-emerald-300/80">
              Smart security. Reliable infrastructure.
            </p>
            <h1 className="text-balance text-4xl font-semibold tracking-tight sm:text-5xl lg:text-6xl">
              Integrated Light Current & CCTV systems for modern businesses.
            </h1>
            <p className="max-w-xl text-sm leading-relaxed text-slate-300 sm:text-base">
              TBATS designs, installs, and maintains low-current and CCTV
              solutions that keep your buildings secure, connected, and
              compliant. From structured cabling to advanced video surveillance,
              we deliver end-to-end systems you can rely on.
            </p>

            <div className="flex flex-col gap-3 text-sm sm:flex-row sm:items-center">
              <a
                href="#contact"
                className="inline-flex items-center justify-center rounded-full bg-emerald-500 px-6 py-2.5 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/30 transition hover:bg-emerald-400"
              >
                Talk to an expert
              </a>
              <p className="text-xs text-slate-400 sm:text-sm">
                Fast response. Site survey and tailored design on request.
              </p>
            </div>

            <dl className="mt-4 grid grid-cols-2 gap-4 text-xs text-slate-300 sm:text-sm md:grid-cols-3">
              <div>
                <dt className="text-slate-400">Experience</dt>
                <dd className="font-semibold text-slate-50">
                  Specialized in low-current
                </dd>
              </div>
              <div>
                <dt className="text-slate-400">Projects</dt>
                <dd className="font-semibold text-slate-50">
                  Commercial, industrial, retail
                </dd>
              </div>
              <div>
                <dt className="text-slate-400">Support</dt>
                <dd className="font-semibold text-slate-50">
                  End-to-end maintenance
                </dd>
              </div>
            </dl>
          </div>

          <div className="relative">
            <div className="pointer-events-none absolute -inset-10 -z-10 rounded-3xl bg-emerald-500/10 blur-3xl" />
            <div className="overflow-hidden rounded-3xl border border-white/10 bg-slate-900/60 shadow-2xl shadow-black/50">
              <div className="flex items-center justify-between border-b border-white/5 bg-slate-900/80 px-4 py-3">
                <p className="text-xs font-medium text-slate-200">
                  Live system overview
                </p>
                <span className="flex h-2 w-2 rounded-full bg-emerald-400" />
              </div>
              <div className="grid gap-4 p-4 sm:grid-cols-2">
                <div className="space-y-2 rounded-2xl border border-white/5 bg-slate-900/80 p-3">
                  <p className="text-xs font-semibold text-slate-200">
                    CCTV Coverage
                  </p>
                  <p className="text-xs text-slate-400">
                    High-definition IP cameras, smart recording, and remote
                    monitoring tailored to your site.
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs">
                    <span className="inline-flex h-2 w-2 rounded-full bg-emerald-400" />
                    <span className="text-emerald-300">System online</span>
                  </div>
                </div>
                <div className="space-y-2 rounded-2xl border border-white/5 bg-slate-900/80 p-3">
                  <p className="text-xs font-semibold text-slate-200">
                    Light Current
                  </p>
                  <p className="text-xs text-slate-400">
                    Structured cabling, access control, fire alarm interfaces,
                    and more.
                  </p>
                  <div className="mt-2 flex items-center gap-2 text-xs">
                    <span className="inline-flex h-2 w-2 rounded-full bg-amber-400" />
                    <span className="text-amber-200">Proactive monitoring</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Services */}
        <section id="services" className="space-y-8">
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div>
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                What TBATS delivers
              </h2>
              <p className="max-w-2xl text-sm text-slate-300 sm:text-base">
                Complete light current and CCTV solutions, designed end-to-end
                around your building, operations, and security requirements.
              </p>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                CCTV Systems
              </p>
              <p className="text-sm font-semibold text-slate-50 sm:text-base">
                IP & analog cameras, NVRs, and video analytics.
              </p>
              <p className="text-xs text-slate-300 sm:text-sm">
                Design and deployment of HD/4K surveillance, remote viewing,
                storage planning, and secure network integration.
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Light Current
              </p>
              <p className="text-sm font-semibold text-slate-50 sm:text-base">
                Structured cabling & low-voltage infrastructure.
              </p>
              <p className="text-xs text-slate-300 sm:text-sm">
                Network cabling, data & voice, intercom, and integration with
                BMS and security systems to keep everything connected.
              </p>
            </div>

            <div className="flex flex-col gap-3 rounded-2xl border border-white/10 bg-slate-900/70 p-5">
              <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
                Support & Maintenance
              </p>
              <p className="text-sm font-semibold text-slate-50 sm:text-base">
                Ongoing health checks and rapid response.
              </p>
              <p className="text-xs text-slate-300 sm:text-sm">
                Preventive maintenance, upgrades, and troubleshooting to keep
                your systems stable and available.
              </p>
            </div>
          </div>
        </section>

        {/* About */}
        <section
          id="about"
          className="grid gap-8 border-t border-white/5 pt-10 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]"
        >
          <div className="space-y-4">
            <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
              About TBATS
            </h2>
            <p className="max-w-xl text-sm text-slate-300 sm:text-base">
              TBATS is focused on delivering reliable, scalable light current
              and CCTV solutions. We partner with contractors, facility
              managers, and business owners to design systems that are stable
              today and ready for tomorrow&apos;s requirements.
            </p>
            <p className="max-w-xl text-sm text-slate-300 sm:text-base">
              Our team manages the full lifecycle: site survey, system design,
              installation, configuration, and ongoing support. The result is a
              clean, documented, and maintainable setup that your team can
              trust.
            </p>

            <ul className="mt-4 grid gap-3 text-xs text-slate-200 sm:text-sm md:grid-cols-2">
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Standards-based installation and commissioning.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Vendor-agnostic designs that fit your budget.</span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>
                  Clear documentation and labelling for every project.
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="mt-1 h-1.5 w-1.5 rounded-full bg-emerald-400" />
                <span>Long-term partnership with flexible SLAs.</span>
              </li>
            </ul>
          </div>

          <div className="flex flex-col gap-4 rounded-3xl border border-white/10 bg-slate-900/70 p-5 sm:p-6">
            <p className="text-xs font-semibold uppercase tracking-[0.18em] text-emerald-300">
              Typical use cases
            </p>
            <div className="space-y-3 text-xs text-slate-200 sm:text-sm">
              <p>• Office buildings and business parks</p>
              <p>• Retail stores, showrooms, and warehouses</p>
              <p>• Industrial facilities and production sites</p>
              <p>• Residential compounds and gated communities</p>
            </div>
          </div>
        </section>

        {/* Contact */}
        <section
          id="contact"
          className="space-y-8 rounded-3xl border border-emerald-500/40 bg-linear-to-br from-emerald-500/10 via-slate-950 to-slate-950 p-6 shadow-[0_0_60px_-30px_rgba(16,185,129,0.8)] sm:p-8"
        >
          <div className="flex flex-col gap-3 sm:flex-row sm:items-end sm:justify-between">
            <div className="space-y-2">
              <h2 className="text-xl font-semibold tracking-tight sm:text-2xl">
                Let&apos;s plan your system
              </h2>
              <p className="max-w-xl text-sm text-slate-200 sm:text-base">
                Share your project details and preferred time to talk.
                We&apos;ll review your requirements, suggest an architecture,
                and outline the next steps.
              </p>
            </div>
          </div>

          <div className="grid gap-8 lg:grid-cols-[minmax(0,1.1fr)_minmax(0,0.9fr)]">
            <div className="space-y-4 text-xs text-slate-200 sm:text-sm">
              <div className="grid gap-4 sm:grid-cols-2">
                <div className="space-y-1">
                  <p className="text-xs font-medium text-slate-400">Email</p>
                  <p className="font-semibold text-slate-50">info@tbats.org</p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-slate-400">Phone</p>
                  <p className="font-semibold text-slate-50">
                    +20 (012) 2292 3147
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-slate-400">
                    Working hours
                  </p>
                  <p className="font-semibold text-slate-50">
                    Sunday – Thursday, 9:00 – 17:00
                  </p>
                </div>
                <div className="space-y-1">
                  <p className="text-xs font-medium text-slate-400">Location</p>
                  <p className="font-semibold text-slate-50">
                    Cairo, Egypt (serving nationwide)
                  </p>
                </div>
              </div>
              <p className="mt-2 text-xs text-slate-400">
                For RFQs, please include drawings, BOQs, or any existing
                specifications if available.
              </p>
            </div>

            <div className="space-y-4">
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 rounded-2xl bg-emerald-500 px-5 py-3 text-sm font-semibold text-slate-950 shadow-lg shadow-emerald-500/40 transition hover:bg-emerald-400"
              >
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-emerald-950/40">
                  <span className="text-lg">✆</span>
                </span>
                <span>WhatsApp us about your CCTV / light current project</span>
              </a>
              <p className="text-xs text-emerald-200">
                Update the phone number in code to your real WhatsApp business
                line.
              </p>
              <p className="text-xs text-slate-400">
                By clicking the button, WhatsApp will open with a new chat to
                your number, so clients can quickly send project details,
                photos, and location.
              </p>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/5 bg-slate-950/90">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-xs text-slate-500 sm:flex-row sm:items-center sm:justify-between sm:px-6 lg:px-8">
          <p>© {new Date().getFullYear()} TBATS. All rights reserved.</p>
          <p>Light Current & CCTV Solutions</p>
        </div>
      </footer>
    </div>
  );
}
