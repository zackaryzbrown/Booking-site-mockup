import { Link } from "react-router";
import {
  ArrowUpRight,
  Stethoscope,
  HandHeart,
  Users,
  Palette,
  BookOpenText,
  Sparkles,
  ShieldCheck,
} from "lucide-react";

const BOOKING_URL = "https://achildsperspective-jm.clientsecure.me/";

const groups = [
  {
    icon: Stethoscope,
    label: "Medical",
    title: "Preparation & coping for medical experiences",
    body: "Helping children and teens understand what’s about to happen, and giving them real tools to get through it.",
    items: [
      "Procedure preparation (labs, imaging, infusions, surgery)",
      "Coping plans for needles, scans, and hospital stays",
      "Acute and chronic illness support",
      "School re-entry after diagnosis or hospitalization",
    ],
    accent: "var(--lavender)",
  },
  {
    icon: HandHeart,
    label: "Emotional",
    title: "Grief, anticipatory grief & trauma",
    body: "Walking alongside families through loss, life-limiting diagnoses, and the heaviness that doesn’t fit into a clinic visit.",
    items: [
      "Grief and anticipatory grief",
      "Medical trauma and post-procedure processing",
      "Diagnosis adjustment for children and teens",
      "Coping with a loved one’s illness",
    ],
    accent: "var(--mauve-soft)",
  },
  {
    icon: Users,
    label: "Family",
    title: "Sibling & caregiver support",
    body: "A medical experience is rarely felt by one person. We make space for the whole family system.",
    items: [
      "Sibling support sessions",
      "Parent / caregiver coaching",
      "Paired caregiver sessions",
      "Caregiver-only emotional support",
    ],
    accent: "var(--sage-soft)",
  },
  {
    icon: Palette,
    label: "Approaches",
    title: "How we work in the room",
    body: "Modalities chosen to fit the child, the moment, and the family, not a fixed script.",
    items: [
      "Medical play & therapeutic puppetry",
      "Therapeutic art & sand-based activities",
      "Psychoeducation & normalization",
      "Cognitive and compassion-focused strategies",
    ],
    accent: "var(--ivory-3)",
  },
];

const fees = [
  { service: "30 min Individual Session, Child Assessment", price: "$85" },
  { service: "1 hour Single Session, Child or Caregiver", price: "$145" },
  { service: "1 hour Single Session, Paired Caregiver", price: "$145" },
  { service: "1 hour Group Session, Paired Caregivers", price: "$185" },
];

export function Services() {
  return (
    <div className="overflow-x-clip">
      {/* HERO */}
      <section className="relative">
        <div className="blob" style={{ width: 460, height: 460, top: -120, right: -120, background: "var(--sage-soft)" }} />
        <div className="blob" style={{ width: 380, height: 380, top: 140, left: -140, background: "var(--mauve-soft)", opacity: 0.55 }} />
        <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12 pt-4 sm:pt-8 lg:pt-12 pb-6 sm:pb-10 lg:pb-14">
          <p className="eyebrow rise rise-1">What we offer</p>
          <h1 className="font-display mt-3 sm:mt-4 md:mt-5 max-w-[20ch] rise rise-2">
            Support areas, <span className="italic-serif text-[color:var(--plum)]">grouped&nbsp;clearly</span> so you can find what fits.
          </h1>
          <p className="mt-4 sm:mt-5 md:mt-6 max-w-[60ch] text-fluid-lg text-[color:var(--ink-soft)] rise rise-3">
            Every family arrives somewhere different. Below is how our work tends to fall, but every plan is built around the specific child, teen, sibling, or caregiver in front of us.
          </p>
        </div>
      </section>

      {/* INITIAL CONSULTATION, featured */}
      <section className="px-5 sm:px-8 lg:px-12">
        <div className="relative max-w-[1240px] mx-auto rounded-[2rem] overflow-hidden border border-[color:var(--hairline)] bg-[color:var(--plum)] text-[color:var(--ivory)]">
          <div className="blob" style={{ width: 420, height: 420, top: -160, left: -80, background: "var(--mauve)" }} />
          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 p-10 sm:p-14 lg:p-16 items-center">
            <div className="lg:col-span-8">
              <p className="eyebrow text-[color:var(--mauve-soft)]">Start here</p>
              <h2 className="font-display mt-3 text-[color:var(--ivory)]">
                A free <span className="italic-serif text-[color:var(--mauve-soft)]">15-minute</span> intro call.
              </h2>
              <p className="mt-5 max-w-[55ch] text-[color:var(--ivory)]/85 text-[1.05rem]">
                Before booking a session, we&apos;ll have a short, no-pressure conversation so we can understand what your family needs and recommend the right starting point. You don&apos;t have to know yet, we&apos;ll help you figure it out.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end gap-3">
              <div className="inline-flex items-baseline gap-2 px-5 py-3 rounded-full bg-[color:var(--ivory)]/12 border border-[color:var(--ivory)]/25">
                <span className="font-display text-[2rem] leading-none text-[color:var(--ivory)]">$0</span>
                <span className="text-[color:var(--ivory)]/70 text-[0.85rem]">complimentary</span>
              </div>
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn pill-btn--ivory"
              >
                Schedule the intro call
                <ArrowUpRight className="w-4 h-4" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* GROUPED SERVICES */}
      <section className="py-24 lg:py-28">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            {groups.map(({ icon: Icon, label, title, body, items, accent }) => (
              <article key={title} className="warm-card p-8 sm:p-10 flex flex-col gap-5">
                <div className="flex items-center gap-3">
                  <span
                    className="inline-flex w-11 h-11 rounded-2xl items-center justify-center"
                    style={{ background: accent }}
                  >
                    <Icon className="w-5 h-5 text-[color:var(--plum)]" aria-hidden />
                  </span>
                  <span className="eyebrow">{label}</span>
                </div>
                <h3 className="font-display text-[1.7rem] leading-[1.15]">{title}</h3>
                <p className="text-[color:var(--ink-soft)] text-[0.98rem] leading-relaxed">
                  {body}
                </p>
                <ul className="mt-1 space-y-2.5">
                  {items.map((it) => (
                    <li key={it} className="flex items-start gap-3 text-[0.96rem]">
                      <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[color:var(--mauve)] flex-shrink-0" />
                      <span>{it}</span>
                    </li>
                  ))}
                </ul>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* FEES, premium white card */}
      <section className="px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1100px] mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow">Investment</p>
            <h2 className="font-display mt-3">
              Clear, <span className="italic-serif text-[color:var(--plum)]">honest fees.</span>
            </h2>
            <p className="mt-4 text-[color:var(--ink-soft)] max-w-[55ch] mx-auto">
              No insurance billing currently, payment is collected at time of service through our secure client portal.
            </p>
          </div>

          <div className="relative">
            <div
              aria-hidden
              className="absolute -inset-4 rounded-[2rem] bg-gradient-to-br from-[color:var(--mauve-soft)]/40 to-[color:var(--sage-soft)]/40 blur-xl -z-10"
            />
            <div className="warm-card p-2 sm:p-3">
              <div className="rounded-[calc(var(--radius-lg)-4px)] bg-white border border-[color:var(--hairline)] overflow-hidden">
                {/* free intro highlight row */}
                <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3 p-6 sm:p-8 bg-gradient-to-r from-[color:var(--ivory-2)] to-[color:var(--lavender-2)] border-b border-[color:var(--hairline)]">
                  <div className="flex items-center gap-4">
                    <span className="inline-flex w-11 h-11 rounded-full bg-[color:var(--plum)] text-[color:var(--ivory)] items-center justify-center">
                      <Sparkles className="w-5 h-5" aria-hidden />
                    </span>
                    <div>
                      <p className="font-display text-[1.25rem] leading-tight">Initial phone consultation</p>
                      <p className="text-[0.88rem] text-[color:var(--ink-soft)] mt-1">15 min · no commitment</p>
                    </div>
                  </div>
                  <span className="font-display text-[2rem] text-[color:var(--plum)]">Free</span>
                </div>

                <ul className="divide-y divide-[color:var(--hairline)]">
                  {fees.map((f) => (
                    <li
                      key={f.service}
                      className="flex flex-col sm:flex-row sm:items-center justify-between gap-2 p-6 sm:px-8 sm:py-6"
                    >
                      <span className="text-[1rem] text-[color:var(--ink)]">{f.service}</span>
                      <span className="font-display text-[1.5rem] text-[color:var(--plum-ink)]">{f.price}</span>
                    </li>
                  ))}
                </ul>

                <div className="p-6 sm:p-8 bg-[color:var(--ivory)] border-t border-[color:var(--hairline)] flex flex-col sm:flex-row gap-3 sm:items-center sm:justify-between">
                  <p className="text-[0.9rem] text-[color:var(--ink-soft)] inline-flex items-center gap-2">
                    <ShieldCheck className="w-4 h-4 text-[color:var(--plum)]" aria-hidden />
                    Payments processed securely through our client portal.
                  </p>
                  <a
                    href={BOOKING_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="pill-btn pill-btn--primary"
                  >
                    Request an appointment
                    <ArrowUpRight className="w-4 h-4" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* HOW IT WORKS */}
      <section className="py-28">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {[
              {
                step: "01",
                title: "Free intro call",
                body: "A short conversation so we understand the situation and you understand how we work.",
              },
              {
                step: "02",
                title: "A plan, together",
                body: "We propose the right starting point, individual, paired caregiver, or sibling-inclusive.",
              },
              {
                step: "03",
                title: "Ongoing support",
                body: "Sessions are scheduled at your pace, with continuity across procedures, hospital stays, and life at home.",
              },
            ].map((s) => (
              <div key={s.step} className="warm-card p-7">
                <p className="font-display italic text-[2.4rem] leading-none text-[color:var(--mauve)]" style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}>
                  {s.step}
                </p>
                <h3 className="font-display mt-4 text-[1.35rem]">{s.title}</h3>
                <p className="mt-3 text-[color:var(--ink-soft)] text-[0.97rem] leading-relaxed">
                  {s.body}
                </p>
              </div>
            ))}
          </div>
          <div className="mt-10 text-center">
            <Link to="/contact" className="pill-btn pill-btn--ghost">
              <BookOpenText className="w-4 h-4" />
              Questions first? Visit our contact page
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}
