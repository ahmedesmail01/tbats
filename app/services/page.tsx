"use client";

import Image from "next/image";
import React, { useMemo, useState } from "react";

type ServiceKey = "cctv" | "marketing" | "facility" | "insurance";

const WHATSAPP_PHONE = "+201222923147"; // user provided

function waLink(payload: Record<string, string>) {
  // Works globally via wa.me
  const text =
    `New Inquiry (Website)\n` +
    Object.entries(payload)
      .map(([k, v]) => `${k}: ${v}`.trim())
      .join("\n");

  const encoded = encodeURIComponent(text);
  const phone = WHATSAPP_PHONE.replace(/\D/g, ""); // 201222923147
  return `https://wa.me/${phone}?text=${encoded}`;
}

export default function Page() {
  const [service, setService] = useState<ServiceKey>("cctv");
  const [form, setForm] = useState({
    name: "",
    email: "",
    company: "",
    phone: "",
    message: "",
  });

  const services = useMemo(
    () => [
      {
        key: "cctv" as const,
        title: "Light Current & CCTV",
        desc: "Design, installation, and maintenance for CCTV, access control, structured cabling, and low-current systems.",
        bullets: [
          "CCTV & NVR setup",
          "Access control",
          "Structured cabling",
          "Preventive maintenance",
        ],
        img: "https://images.unsplash.com/photo-1558002038-1055907df827?auto=format&fit=crop&w=1400&q=80",
      },
      {
        key: "marketing" as const,
        title: "Marketing Agency",
        desc: "Performance-driven marketing: strategy, creatives, content, and campaigns built to convert.",
        bullets: [
          "Brand & strategy",
          "Content & socials",
          "Ads & funnels",
          "Analytics & reporting",
        ],
        img: "https://images.unsplash.com/photo-1556761175-4b46a572b786?auto=format&fit=crop&w=1400&q=80",
      },
      {
        key: "facility" as const,
        title: "Facility Management",
        desc: "Reliable operations for buildings and sites: maintenance, safety, and service excellence.",
        bullets: [
          "Planned maintenance",
          "MEP supervision",
          "On-site support",
          "Quality checklists",
        ],
        img: "https://images.unsplash.com/photo-1675684785101-83ad2a278e22?auto=format&fit=crop&w=1400&q=80",
      },
      {
        key: "insurance" as const,
        title: "Insurance",
        desc: "Coverage that protects people, property, and business continuity—with clear guidance.",
        bullets: [
          "Property coverage",
          "Liability",
          "Business protection",
          "Support & follow-up",
        ],
        img: "https://images.unsplash.com/photo-1732543499124-21de8c284836?auto=format&fit=crop&w=1400&q=80",
      },
    ],
    [],
  );

  const active = services.find((s) => s.key === service)!;

  const onSubmit = (e: React.FormEvent) => {
    e.preventDefault();

    const link = waLink({
      Name: form.name,
      Email: form.email,
      Company: form.company,
      Phone: form.phone,
      Service: active.title,
      Message: form.message,
    });

    window.open(link, "_blank", "noopener,noreferrer");
  };

  return (
    <main className="min-h-screen">
      {/* NAV */}
      <header className="sticky top-0 z-50 backdrop-blur-md bg-black/25 border-b border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-3 flex items-center justify-between">
          <a href="#top" className="flex items-center gap-3">
            {/* <Image
              src="/brand/icon.png"
              alt="TBATS icon"
              width={34}
              height={34}
              className="drop-shadow"
              priority
            /> */}
            <Image
              src="/brand/wordmark.png"
              alt="TBATS"
              width={120}
              height={28}
              className="hidden sm:block opacity-95"
              priority
            />
          </a>

          <nav className="flex items-center gap-5 text-sm text-white/80">
            <a className="hover:text-white" href="#services">
              Services
            </a>
            <a className="hover:text-white" href="#about">
              About
            </a>
            <a className="hover:text-white" href="#contact">
              Contact
            </a>
            <a
              href="#contact"
              className="rounded-full px-4 py-2 text-white bg-[color:var(--pri)] hover:brightness-110 transition shadow-glow"
            >
              Get a Quote
            </a>
          </nav>
        </div>
      </header>

      {/* HERO */}
      <section id="top" className="relative">
        <div className="mx-auto max-w-6xl px-4 pt-14 pb-10 md:pt-20 md:pb-16">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <p className="text-sm text-white/70 tracking-wide">
                Protecting what matters
              </p>

              <h1 className="mt-3 text-4xl md:text-6xl font-semibold leading-tight">
                One organization for{" "}
                <span className="text-white">Security, Growth, Operations</span>{" "}
                & Protection.
              </h1>

              <p className="mt-5 text-base md:text-lg text-white/75 max-w-xl">
                TBATS delivers integrated services: low-current & CCTV
                solutions, marketing execution, facility management, and
                insurance—built for reliability and outcomes.
              </p>

              <div className="mt-7 flex flex-col sm:flex-row gap-3">
                <a
                  href="#services"
                  className="rounded-xl px-5 py-3 bg-white/10 border border-white/15 hover:bg-white/15 transition"
                >
                  Explore Services
                </a>
                <a
                  href="#contact"
                  className="rounded-xl px-5 py-3 bg-[color:var(--pri)] hover:brightness-110 transition shadow-glow"
                >
                  Contact on WhatsApp
                </a>
              </div>

              <div className="mt-8 grid grid-cols-2 gap-3 max-w-md">
                {[
                  { k: "Fast Response", v: "Same-day support" },
                  { k: "Professional Team", v: "Trusted delivery" },
                  { k: "Clear Process", v: "From scope to handover" },
                  { k: "Quality First", v: "Documented checks" },
                ].map((i) => (
                  <div
                    key={i.k}
                    className="rounded-2xl bg-white/5 border border-white/10 p-4"
                  >
                    <div className="text-sm font-medium">{i.k}</div>
                    <div className="text-xs text-white/70 mt-1">{i.v}</div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="absolute -inset-6 rounded-[28px] bg-[color:var(--pri)]/10 blur-2xl" />
              <div className="relative rounded-[28px] overflow-hidden border border-white/10 bg-white/5 shadow-glow">
                <div className="relative h-[340px] md:h-[440px]">
                  <Image
                    src={active.img}
                    alt={active.title}
                    fill
                    className="object-cover"
                    priority
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent" />
                </div>

                <div className="p-6">
                  <div className="text-xs text-white/65">Featured Service</div>
                  <div className="mt-1 text-xl font-semibold">
                    {active.title}
                  </div>
                  <p className="mt-2 text-sm text-white/75">{active.desc}</p>

                  <div className="mt-5 flex flex-wrap gap-2">
                    {services.map((s) => (
                      <button
                        key={s.key}
                        onClick={() => setService(s.key)}
                        className={[
                          "text-xs px-3 py-2 rounded-full border transition",
                          s.key === service
                            ? "bg-white/15 border-white/20 text-white"
                            : "bg-white/5 border-white/10 text-white/70 hover:text-white hover:bg-white/10",
                        ].join(" ")}
                      >
                        {s.title}
                      </button>
                    ))}
                  </div>
                </div>
              </div>

              <div className="mt-4 text-xs text-white/55">
                Tip: switch the featured service using the pills above.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SERVICES */}
      <section id="services" className="mx-auto max-w-6xl px-4 py-12 md:py-16">
        <div className="flex items-end justify-between gap-6 flex-wrap">
          <div>
            <h2 className="text-2xl md:text-3xl font-semibold">Our Services</h2>
            <p className="mt-2 text-white/70 max-w-2xl">
              Choose exactly what you need—or combine services for a full
              solution.
            </p>
          </div>
          <a
            href="#contact"
            className="rounded-xl px-4 py-2 bg-white/10 border border-white/15 hover:bg-white/15 transition"
          >
            Request a quote
          </a>
        </div>

        <div className="mt-8 grid md:grid-cols-2 gap-6">
          {services.map((s) => (
            <div
              key={s.key}
              className="group rounded-[26px] overflow-hidden border border-white/10 bg-white/5 hover:bg-white/7 transition shadow-glow"
            >
              <div className="relative h-56">
                <Image
                  src={s.img}
                  alt={s.title}
                  fill
                  className="object-cover group-hover:scale-[1.03] transition duration-500"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/75 via-black/25 to-transparent" />
                <div className="absolute bottom-4 left-4 right-4">
                  <div className="text-lg font-semibold">{s.title}</div>
                  <div className="text-sm text-white/75 mt-1">{s.desc}</div>
                </div>
              </div>

              <div className="p-6">
                <ul className="grid sm:grid-cols-2 gap-2 text-sm text-white/80">
                  {s.bullets.map((b) => (
                    <li key={b} className="flex gap-2">
                      <span className="mt-[6px] h-2 w-2 rounded-full bg-[color:var(--pri2)]/90" />
                      <span>{b}</span>
                    </li>
                  ))}
                </ul>

                <div className="mt-6 flex items-center justify-between">
                  <button
                    onClick={() => setService(s.key)}
                    className="text-sm text-white/85 hover:text-white underline underline-offset-4"
                  >
                    {/* Set as featured */}
                  </button>
                  <a
                    href="#contact"
                    className="rounded-xl px-4 py-2 bg-[color:var(--pri)] hover:brightness-110 transition"
                  >
                    Contact
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ABOUT */}
      <section id="about" className="mx-auto max-w-6xl px-4 pb-12 md:pb-16">
        <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 md:p-10 shadow-glow">
          <div className="grid md:grid-cols-3 gap-8">
            <div className="md:col-span-1">
              <div className="flex items-center gap-3">
                <Image
                  src="/brand/icon.png"
                  alt="TBATS"
                  width={44}
                  height={44}
                />
                <div>
                  <div className="text-lg font-semibold">TBATS</div>
                  <div className="text-sm text-white/70">
                    Protecting what matters
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-2">
              <p className="text-white/80 leading-relaxed">
                We bring together four essential capabilities under one roof:
                security systems, marketing execution, facility operations, and
                insurance solutions. That means faster coordination, clearer
                accountability, and consistent service quality.
              </p>

              <div className="mt-6 grid sm:grid-cols-3 gap-4">
                {[
                  { t: "Reliable Delivery", d: "Clear scope, clear handover." },
                  { t: "Business Focused", d: "We optimize for outcomes." },
                  { t: "Long-term Support", d: "Maintenance & follow-up." },
                ].map((x) => (
                  <div
                    key={x.t}
                    className="rounded-2xl border border-white/10 bg-white/5 p-4"
                  >
                    <div className="font-medium">{x.t}</div>
                    <div className="mt-1 text-sm text-white/70">{x.d}</div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="mx-auto max-w-6xl px-4 pb-20">
        <div className="grid lg:grid-cols-2 gap-8 items-start">
          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 shadow-glow">
            <h3 className="text-2xl font-semibold">Contact Us</h3>
            <p className="mt-2 text-white/70">
              Fill the form and it will open WhatsApp with your message ready to
              send.
            </p>

            <form onSubmit={onSubmit} className="mt-6 space-y-4">
              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label="Full name"
                  value={form.name}
                  onChange={(v) => setForm((p) => ({ ...p, name: v }))}
                  required
                />
                <Field
                  label="Email"
                  type="email"
                  value={form.email}
                  onChange={(v) => setForm((p) => ({ ...p, email: v }))}
                  required
                />
              </div>

              <div className="grid sm:grid-cols-2 gap-4">
                <Field
                  label="Company (optional)"
                  value={form.company}
                  onChange={(v) => setForm((p) => ({ ...p, company: v }))}
                />
                <Field
                  label="Phone (optional)"
                  value={form.phone}
                  onChange={(v) => setForm((p) => ({ ...p, phone: v }))}
                />
              </div>

              <div>
                <label className="text-sm text-white/75">Service</label>
                <select
                  value={service}
                  onChange={(e) => setService(e.target.value as ServiceKey)}
                  className="mt-2 w-full rounded-xl bg-black/30 border border-white/15 px-4 py-3 text-white outline-none focus:border-white/25"
                >
                  {services.map((s) => (
                    <option key={s.key} value={s.key}>
                      {s.title}
                    </option>
                  ))}
                </select>
              </div>

              <div>
                <label className="text-sm text-white/75">Message</label>
                <textarea
                  value={form.message}
                  onChange={(e) =>
                    setForm((p) => ({ ...p, message: e.target.value }))
                  }
                  required
                  rows={5}
                  className="mt-2 w-full rounded-xl bg-black/30 border border-white/15 px-4 py-3 text-white outline-none focus:border-white/25"
                  placeholder="Tell us what you need, location, timeline, etc."
                />
              </div>

              <button
                type="submit"
                className="w-full rounded-xl px-5 py-3 bg-[color:var(--pri)] hover:brightness-110 transition shadow-glow font-medium"
              >
                Send on WhatsApp
              </button>

              {/* <div className="text-xs text-white/55">
                WhatsApp target: {WHATSAPP_PHONE}
              </div> */}
            </form>
          </div>

          <div className="rounded-[30px] border border-white/10 bg-white/5 p-8 shadow-glow">
            <h3 className="text-xl font-semibold">Quick Info</h3>
            <div className="mt-4 space-y-3 text-white/80">
              <InfoRow
                k="Services"
                v="CCTV • Marketing • Facility • Insurance"
              />
              <InfoRow k="Response" v="Fast, structured follow-up" />
              <InfoRow k="Coverage" v="Individuals & companies" />
            </div>

            <div className="mt-8 rounded-2xl border border-white/10 bg-black/30 p-5">
              <div className="text-sm text-white/70">Direct WhatsApp</div>
              <a
                className="mt-2 inline-block text-white underline underline-offset-4"
                href={waLink({
                  Name: "",
                  Email: "",
                  Company: "",
                  Phone: "",
                  Service: "General inquiry",
                  Message:
                    "Hello TBATS, I’d like to know more about your services.",
                })}
                target="_blank"
                rel="noreferrer"
              >
                Open chat
              </a>
            </div>

            <div className="mt-8 text-xs text-white/55">
              Branding colors inspired by your provided draft
              {/* :contentReference[oaicite:7]{(index = 7)} */}
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <footer className="border-t border-white/10 bg-black/20">
        <div className="mx-auto max-w-6xl px-4 py-8 flex flex-col sm:flex-row gap-4 items-center justify-between">
          <div className="flex items-center gap-3">
            <Image src="/brand/icon.png" alt="TBATS" width={28} height={28} />
            <span className="text-sm text-white/70">
              &copy; {new Date().getFullYear()} TBATS
            </span>
          </div>
          <div className="text-sm text-white/60">Protecting what matters.</div>
        </div>
      </footer>
    </main>
  );
}

function Field(props: {
  label: string;
  value: string;
  onChange: (v: string) => void;
  type?: string;
  required?: boolean;
}) {
  return (
    <div>
      <label className="text-sm text-white/75">{props.label}</label>
      <input
        type={props.type ?? "text"}
        value={props.value}
        required={props.required}
        onChange={(e) => props.onChange(e.target.value)}
        className="mt-2 w-full rounded-xl bg-black/30 border border-white/15 px-4 py-3 text-white outline-none focus:border-white/25"
      />
    </div>
  );
}

function InfoRow({ k, v }: { k: string; v: string }) {
  return (
    <div className="flex items-start justify-between gap-4 border-b border-white/10 pb-3">
      <div className="text-sm text-white/65">{k}</div>
      <div className="text-sm text-white/85 text-right">{v}</div>
    </div>
  );
}
