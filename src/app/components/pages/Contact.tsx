import { useState } from "react";
import {
  ArrowUpRight,
  Mail,
  Video,
  Calendar,
  ShieldCheck,
  ChevronDown,
} from "lucide-react";

const BOOKING_URL = "https://achildsperspective-jm.clientsecure.me/";

const faqs = [
  {
    q: "What exactly is a Certified Child Life Specialist?",
    a: "Certified Child Life Specialists (CCLS) are trained professionals who help children and families cope with the emotional, developmental, and psychosocial impact of medical experiences. We are not doctors or therapists, we use play, preparation, and developmentally-tuned conversation to help kids feel safe, informed, and in control of what’s happening to their bodies.",
  },
  {
    q: "My child isn't currently sick, can we still work with you?",
    a: "Yes. Many of the families we see are preparing for an upcoming procedure, processing a past medical experience, supporting a sibling, or helping a child understand a parent or grandparent’s diagnosis. You don’t need to be in crisis to benefit from this work.",
  },
  {
    q: "Do you replace our medical team or our therapist?",
    a: "No. Child life support complements your existing care team. We focus specifically on the emotional and developmental side of medical experiences, preparing for procedures, building coping plans, supporting siblings, and helping families talk about hard things together.",
  },
  {
    q: "How does a telehealth session work for a young child?",
    a: "We use secure video and shape the session around your child’s age, shorter, more play-based for younger kids; more conversational for teens. A caregiver is typically present for younger children. We send any materials you’ll need in advance.",
  },
  {
    q: "What should we expect from a first session?",
    a: "Sessions start with gentle relationship-building. We listen, we play, we ask questions, and we leave you with concrete language and strategies you can use at home, in the clinic, or at the hospital. No surprise homework.",
  },
];

export function Contact() {
  const [openIdx, setOpenIdx] = useState<number | null>(0);
  const [submitted, setSubmitted] = useState(false);
  const [form, setForm] = useState({
    name: "",
    email: "",
    relation: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <div className="overflow-x-clip">
      {/* HERO */}
      <section className="relative">
        <div
          className="blob"
          style={{
            width: 480,
            height: 480,
            top: -120,
            right: -140,
            background: "var(--mauve-soft)",
          }}
        />
        <div
          className="blob"
          style={{
            width: 380,
            height: 380,
            top: 200,
            left: -120,
            background: "var(--sage-soft)",
            opacity: 0.55,
          }}
        />

        <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-12 pt-4 sm:pt-8 lg:pt-12 pb-6 sm:pb-10 lg:pb-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-start lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow rise rise-1">Get in touch</p>
              <h1 className="font-display mt-3 sm:mt-4 md:mt-5 max-w-[20ch] rise rise-2">
                Reach out{" "}
                <span className="italic-serif text-[color:var(--plum)]">
                  whenever you&apos;re ready
                </span>
                , even just to ask.
              </h1>
              <p className="mt-4 sm:mt-5 md:mt-6 max-w-[58ch] text-fluid-lg text-[color:var(--ink-soft)] rise rise-3">
                You don&apos;t need to have it figured out before contacting us.
                Tell us what&apos;s going on in your family, and we&apos;ll
                point you toward the right starting place.
              </p>
            </div>
            <div className="lg:col-span-5 rise rise-4">
              <ContactQuickCard />
            </div>
          </div>
        </div>
      </section>

      {/* BOOKING CTA + NEW FAMILY INFO */}
      <section className="px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1240px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
          {/* Primary booking card */}
          <div className="lg:col-span-7 relative rounded-[2rem] overflow-hidden border border-[color:var(--hairline)] bg-[color:var(--plum)] text-[color:var(--ivory)]">
            <div
              className="blob"
              style={{
                width: 420,
                height: 420,
                top: -160,
                right: -80,
                background: "var(--mauve)",
              }}
            />
            <div className="relative p-10 sm:p-12">
              <p className="eyebrow text-[color:var(--mauve-soft)]">Booking</p>
              <h2 className="font-display mt-3 text-[color:var(--ivory)]">
                Schedule through our{" "}
                <span className="italic-serif text-[color:var(--mauve-soft)]">
                  secure portal.
                </span>
              </h2>
              <p className="mt-5 max-w-[50ch] text-[color:var(--ivory)]/85">
                Appointments are managed through our HIPAA-compliant client
                portal. You&apos;ll see live availability, intake forms, and
                session reminders in one place.
              </p>
              <ul className="mt-6 space-y-2.5 text-[color:var(--ivory)]/90">
                {[
                  "Live availability for new and returning families",
                  "Secure intake & consent forms",
                  "Automatic session reminders",
                  "Telehealth links delivered before each session",
                ].map((b) => (
                  <li key={b} className="flex items-start gap-3 text-[0.95rem]">
                    <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[color:var(--mauve-soft)] flex-shrink-0" />
                    <span>{b}</span>
                  </li>
                ))}
              </ul>
              <div className="mt-8 flex flex-wrap gap-3 items-center">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-btn pill-btn--ivory"
                >
                  <Calendar className="w-4 h-4" />
                  Request an appointment
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <span className="inline-flex items-center gap-2 text-[color:var(--ivory)]/65 text-[0.85rem]">
                  <ShieldCheck className="w-4 h-4" />
                  Confidential &amp; HIPAA-secure
                </span>
              </div>
            </div>
          </div>

          {/* New family info */}
          <div className="lg:col-span-5 warm-card p-10 flex flex-col">
            <p className="eyebrow">New family information</p>
            <h2 className="font-display mt-3 text-[2rem]">
              What to expect{" "}
              <span className="italic-serif text-[color:var(--plum)]">
                before
              </span>{" "}
              your first session.
            </h2>
            <ul className="mt-6 space-y-5 text-[color:var(--ink-soft)] text-[0.97rem] leading-relaxed">
              <li>
                <span className="block font-display text-[1.1rem] text-[color:var(--plum-ink)] mb-1">
                  1 · A short intake
                </span>
                After requesting an appointment, you&apos;ll receive a brief
                intake form so we can understand your child&apos;s age,
                situation, and what&apos;s prompting the visit.
              </li>
              <li>
                <span className="block font-display text-[1.1rem] text-[color:var(--plum-ink)] mb-1">
                  2 · A free intro call
                </span>
                A 15-minute conversation, no obligation, so we can recommend the
                right format and frequency.
              </li>
              <li>
                <span className="block font-display text-[1.1rem] text-[color:var(--plum-ink)] mb-1">
                  3 · Your first session
                </span>
                Telehealth or in-person. Caregivers are welcome, and for younger
                children, expected, in the early sessions.
              </li>
            </ul>
          </div>
        </div>
      </section>

      {/* MESSAGE FORM */}
      <section className="py-24 lg:py-28 px-5 sm:px-8 lg:px-12">
        <div className="max-w-[1100px] mx-auto grid grid-cols-1 lg:grid-cols-12 gap-12">
          <div className="lg:col-span-5">
            <p className="eyebrow">Send a note</p>
            <h2 className="font-display mt-3">
              Or just say{" "}
              <span className="italic-serif text-[color:var(--plum)]">
                hello.
              </span>
            </h2>
            <p className="mt-5 text-[color:var(--ink-soft)] max-w-[40ch]">
              Email works too, we read every message ourselves and reply within
              two business days.
            </p>
            <a
              href="mailto:help@achildsperspective.com"
              className="mt-6 inline-flex items-center gap-2 font-display italic text-[1.25rem] text-[color:var(--plum)] hover:underline"
            >
              <Mail className="w-4 h-4" />
              help@achildsperspective.com
            </a>
          </div>

          <div className="lg:col-span-7">
            {submitted ? (
              <div className="warm-card p-10 text-center">
                <h3 className="font-display text-[1.6rem]">
                  Thank you, your message is on its way.
                </h3>
                <p className="mt-3 text-[color:var(--ink-soft)]">
                  We&apos;ll be in touch within two business days. If your
                  family needs urgent medical attention, please call 911 or
                  contact your medical provider.
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                className="warm-card p-8 sm:p-10 space-y-5"
              >
                <Field label="Your name" id="name">
                  <input
                    id="name"
                    type="text"
                    required
                    autoComplete="name"
                    value={form.name}
                    onChange={(e) => setForm({ ...form, name: e.target.value })}
                    className="contact-input"
                    aria-required="true"
                  />
                </Field>
                <Field label="Email" id="email">
                  <input
                    id="email"
                    type="email"
                    required
                    autoComplete="email"
                    value={form.email}
                    onChange={(e) =>
                      setForm({ ...form, email: e.target.value })
                    }
                    className="contact-input"
                    aria-required="true"
                  />
                </Field>
                <Field
                  label="Relationship to the child"
                  id="relation"
                  hint="Optional, e.g. parent, grandparent, teen self"
                >
                  <input
                    id="relation"
                    type="text"
                    value={form.relation}
                    onChange={(e) =>
                      setForm({ ...form, relation: e.target.value })
                    }
                    className="contact-input"
                  />
                </Field>
                <Field label="What's on your mind?" id="message">
                  <textarea
                    id="message"
                    required
                    rows={5}
                    value={form.message}
                    onChange={(e) =>
                      setForm({ ...form, message: e.target.value })
                    }
                    className="contact-input resize-none"
                  />
                </Field>
                <button
                  type="submit"
                  className="pill-btn pill-btn--primary w-full sm:w-auto"
                >
                  Send message
                  <ArrowUpRight className="w-4 h-4" />
                </button>
                <p className="text-[0.78rem] text-[color:var(--ink-soft)]/80">
                  Please don&apos;t share sensitive medical details here. Once
                  we&apos;re working together, we&apos;ll move to our secure
                  portal.
                </p>
              </form>
            )}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="px-5 sm:px-8 lg:px-12 pb-24">
        <div className="max-w-[920px] mx-auto">
          <div className="text-center mb-12">
            <p className="eyebrow">Common questions</p>
            <h2 className="font-display mt-3">
              Questions families{" "}
              <span className="italic-serif text-[color:var(--plum)]">
                actually ask.
              </span>
            </h2>
          </div>
          <div className="warm-card divide-y divide-[color:var(--hairline)] overflow-hidden">
            {faqs.map((f, idx) => {
              const open = openIdx === idx;
              return (
                <div key={f.q}>
                  <button
                    onClick={() => setOpenIdx(open ? null : idx)}
                    className="w-full flex items-center justify-between gap-6 text-left px-6 sm:px-8 py-6 hover:bg-[color:var(--ivory)]/60 transition-colors"
                    aria-expanded={open}
                  >
                    <span className="font-display text-[1.15rem] sm:text-[1.25rem] text-[color:var(--plum-ink)] leading-snug">
                      {f.q}
                    </span>
                    <ChevronDown
                      className={`w-5 h-5 text-[color:var(--plum)] flex-shrink-0 transition-transform ${
                        open ? "rotate-180" : ""
                      }`}
                      aria-hidden
                    />
                  </button>
                  <div
                    className={`grid transition-[grid-template-rows] duration-300 ${
                      open ? "grid-rows-[1fr]" : "grid-rows-[0fr]"
                    }`}
                  >
                    <div className="overflow-hidden">
                      <p className="px-6 sm:px-8 pb-6 -mt-1 text-[color:var(--ink-soft)] leading-relaxed">
                        {f.a}
                      </p>
                    </div>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>

      <style>{`
        .contact-input {
          width: 100%;
          background: var(--input-background);
          border: 1px solid var(--hairline);
          border-radius: 14px;
          padding: 0.85rem 1rem;
          color: var(--ink);
          font-family: var(--font-body);
          font-size: 1rem;
          transition: border-color 200ms, box-shadow 200ms;
        }
        .contact-input:focus {
          outline: none;
          border-color: var(--plum);
          box-shadow: 0 0 0 4px rgba(74,30,58,0.12);
        }
      `}</style>
    </div>
  );
}

function Field({
  label,
  id,
  hint,
  children,
}: {
  label: string;
  id: string;
  hint?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="flex flex-col gap-2">
      <label
        htmlFor={id}
        className="text-[0.85rem] font-medium text-[color:var(--plum-ink)]"
      >
        {label}
        {hint && (
          <span className="ml-2 text-[color:var(--ink-soft)]/70 font-normal">
            {hint}
          </span>
        )}
      </label>
      {children}
    </div>
  );
}

function ContactQuickCard() {
  return (
    <div className="warm-card p-7">
      <p className="eyebrow">At a glance</p>
      <ul className="mt-5 space-y-5">
        <li className="flex items-start gap-3">
          <span className="inline-flex w-9 h-9 rounded-full bg-[color:var(--lavender)] items-center justify-center flex-shrink-0">
            <Video className="w-4 h-4 text-[color:var(--plum)]" aria-hidden />
          </span>
          <div>
            <p className="font-display text-[1.05rem] leading-tight">
              Telehealth across Colorado
            </p>
            <p className="text-[0.88rem] text-[color:var(--ink-soft)] mt-1">
              Secure video sessions, statewide.
            </p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="inline-flex w-9 h-9 rounded-full bg-[color:var(--sage-soft)] items-center justify-center flex-shrink-0">
            <Mail className="w-4 h-4 text-[color:var(--plum)]" aria-hidden />
          </span>
          <div>
            <p className="font-display text-[1.05rem] leading-tight">
              <a
                href="mailto:help@achildsperspective.com"
                className="hover:underline"
              >
                help@achildsperspective.com
              </a>
            </p>
            <p className="text-[0.88rem] text-[color:var(--ink-soft)] mt-1">
              Replies within two business days.
            </p>
          </div>
        </li>
        <li className="flex items-start gap-3">
          <span className="inline-flex w-9 h-9 rounded-full bg-[color:var(--mauve-soft)] items-center justify-center flex-shrink-0">
            <ShieldCheck
              className="w-4 h-4 text-[color:var(--plum)]"
              aria-hidden
            />
          </span>
          <div>
            <p className="font-display text-[1.05rem] leading-tight">
              By appointment only
            </p>
            <p className="text-[0.88rem] text-[color:var(--ink-soft)] mt-1">
              Booked through our secure client portal.
            </p>
          </div>
        </li>
      </ul>
    </div>
  );
}
