import { Link } from "react-router";
import {
  ArrowUpRight,
  Heart,
  Users,
  Sparkles,
  HandHeart,
  GraduationCap,
  Stethoscope,
  Video,
  MapPin,
  ShieldCheck,
} from "lucide-react";

const BOOKING_URL = "https://achildsperspective-jm.clientsecure.me/";

const trust = [
  { icon: GraduationCap, label: "Licensed Child Life Specialists" },
  { icon: Video, label: "Telehealth Available" },
  { icon: MapPin, label: "Serving Colorado Families" },
];

const whoWeHelp = [
  {
    title: "Children",
    note: "Ages 3–12",
    body: "Helping young children make sense of doctor visits, procedures, hospital stays, and diagnoses through play, story, and developmentally-tuned language.",
    accent: "var(--lavender)",
  },
  {
    title: "Teens",
    note: "Ages 13–18",
    body: "Honest, autonomy-respecting support for teens facing their own diagnosis, a parent’s illness, or the emotional weight of complex medical care.",
    accent: "var(--mauve-soft)",
  },
  {
    title: "Siblings",
    note: "The quiet ones",
    body: "Brothers and sisters often carry a lot when a sibling is sick. We make space for their questions, feelings, and identity outside of caregiving.",
    accent: "var(--sage-soft)",
  },
  {
    title: "Caregivers",
    note: "Parents & guardians",
    body: "Coaching and emotional support so the adults holding everything together don’t have to do it alone, or guess at the right words.",
    accent: "var(--ivory-3)",
  },
];

const servicesPreview = [
  {
    icon: Stethoscope,
    title: "Medical preparation & coping",
    body: "Procedure prep, coping plans, medical play, and pain/anxiety strategies, built around each child.",
  },
  {
    icon: HandHeart,
    title: "Grief & anticipatory grief",
    body: "Walking alongside families through loss, life-limiting diagnoses, and the unspoken weight of waiting.",
  },
  {
    icon: Users,
    title: "Family & sibling support",
    body: "Sessions for caregivers and siblings, including school re-entry and post-hospital reintegration.",
  },
];

export function Home() {
  return (
    <div className="overflow-x-clip">
      {/* HERO */}
      <section className="relative">
        <div
          className="blob"
          style={{
            width: 520,
            height: 520,
            top: -120,
            right: -120,
            background: "var(--mauve-soft)",
          }}
        />
        <div
          className="blob"
          style={{
            width: 420,
            height: 420,
            top: 220,
            left: -160,
            background: "var(--sage-soft)",
            opacity: 0.6,
          }}
        />

        <div className="relative max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 lg:pt-24 pb-20 lg:pb-28">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow rise rise-1">
                A boutique child life practice
              </p>
              <h1
                className="font-display mt-5 text-[color:var(--plum-ink)] rise rise-2"
                style={{
                  fontWeight: 750,
                  letterSpacing: "-0.04em",
                  fontVariationSettings: '"opsz" 144, "SOFT" 25, "WONK" 0',
                }}
              >
                Support for the{" "}
                <span
                  className="italic-serif text-[color:var(--plum)]"
                  style={{ fontWeight: 700 }}
                >
                  emotional&nbsp;side
                </span>
                <br className="hidden sm:block" /> of medical care.
              </h1>
              <p className="mt-7 max-w-[58ch] text-[1.12rem] text-[color:var(--ink-soft)] rise rise-3">
                Child life support for children, teens, siblings, and caregivers
                navigating diagnoses, procedures, hospital stays, and the long
                stretches in between. Honest, developmentally-tuned care,
                designed around the way real families actually feel.
              </p>

              <div className="mt-9 flex flex-wrap items-center gap-3 rise rise-4">
                <a
                  href={BOOKING_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="pill-btn pill-btn--primary"
                >
                  Request an appointment
                  <ArrowUpRight className="w-4 h-4" />
                </a>
                <Link to="/services" className="pill-btn pill-btn--ghost">
                  Explore services
                </Link>
              </div>

              <div className="mt-12 grid grid-cols-1 sm:grid-cols-3 gap-3 rise rise-5">
                {trust.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-3 px-4 py-3 rounded-full bg-white/70 backdrop-blur-sm border border-[color:var(--hairline)]"
                  >
                    <span className="inline-flex w-8 h-8 items-center justify-center rounded-full bg-[color:var(--lavender-2)] text-[color:var(--plum)]">
                      <Icon className="w-4 h-4" aria-hidden />
                    </span>
                    <span className="text-[0.86rem] text-[color:var(--ink-soft)]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Editorial visual card */}
            <div className="lg:col-span-5 relative rise rise-3">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="relative py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
            <div>
              <p className="eyebrow">Who we help</p>
              <h2 className="font-display mt-3 max-w-[18ch]">
                Care that meets each{" "}
                <span className="italic-serif">person</span> in the room.
              </h2>
            </div>
            <p className="max-w-[42ch] text-[color:var(--ink-soft)]">
              A medical experience doesn't happen to one person, it ripples
              through a whole family. Our sessions are shaped around the person
              in front of us.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
            {whoWeHelp.map((item, i) => (
              <article
                key={item.title}
                className="group relative warm-card p-7 flex flex-col gap-4 transition-transform duration-300 hover:-translate-y-1"
                style={{ marginTop: i % 2 === 1 ? "1.5rem" : 0 }}
              >
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: item.accent }}
                >
                  <Heart
                    className="w-6 h-6 text-[color:var(--plum)]"
                    aria-hidden
                  />
                </div>
                <div>
                  <h3 className="font-display text-[1.5rem]">{item.title}</h3>
                  <p className="eyebrow mt-1">{item.note}</p>
                </div>
                <p className="text-[0.97rem] text-[color:var(--ink-soft)] leading-relaxed">
                  {item.body}
                </p>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/* SERVICES PREVIEW */}
      <section className="relative">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="relative rounded-[2rem] overflow-hidden border border-[color:var(--hairline)]">
            <div
              className="absolute inset-0 -z-10"
              style={{
                background:
                  "linear-gradient(160deg, var(--ivory-2), var(--lavender-2))",
              }}
            />
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-8 sm:p-12 lg:p-16">
              <div className="lg:col-span-4">
                <p className="eyebrow">What we do</p>
                <h2 className="font-display mt-3">
                  Services, shaped around your family.
                </h2>
                <p className="mt-5 text-[color:var(--ink-soft)] max-w-[40ch]">
                  Individual sessions, paired caregiver sessions, sibling
                  support, and procedural preparation, in person or via secure
                  telehealth.
                </p>
                <Link to="/services" className="pill-btn pill-btn--ghost mt-7">
                  See all services &amp; fees
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
              </div>
              <div className="lg:col-span-8 grid grid-cols-1 md:grid-cols-3 gap-4">
                {servicesPreview.map(({ icon: Icon, title, body }) => (
                  <div
                    key={title}
                    className="paper rounded-2xl p-6 border border-[color:var(--hairline)] flex flex-col gap-3 hover:shadow-[var(--shadow-warm)] transition-shadow"
                  >
                    <Icon
                      className="w-6 h-6 text-[color:var(--plum)]"
                      aria-hidden
                    />
                    <h3 className="font-display text-[1.25rem] leading-snug">
                      {title}
                    </h3>
                    <p className="text-[0.92rem] text-[color:var(--ink-soft)] leading-relaxed">
                      {body}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* MEET JENNY & COURTNEY (preview) */}
      <section className="py-24 lg:py-32">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            <div className="lg:col-span-5 order-2 lg:order-1">
              <p className="eyebrow">Meet the practice</p>
              <h2 className="font-display mt-3">
                Jenny &amp; Courtney.{" "}
                <span className="italic-serif text-[color:var(--plum)]">
                  Two Certified Child Life Specialists.
                </span>
              </h2>
              <p className="mt-5 text-[color:var(--ink-soft)] max-w-[50ch]">
                With combined decades of bedside experience in pediatric
                hospitals and community clinics, Jenny and Courtney built A
                Child&apos;s Perspective to give families the kind of unhurried,
                human support that medical systems don&apos;t always have time
                for.
              </p>
              <div className="mt-7 flex flex-wrap gap-3">
                <Link to="/about" className="pill-btn pill-btn--primary">
                  Read their story
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="pill-btn pill-btn--ghost">
                  How we work
                </Link>
              </div>
            </div>
            <div className="lg:col-span-7 order-1 lg:order-2">
              <div className="grid grid-cols-2 gap-5">
                <PortraitCard
                  name="Jenny"
                  role="CCLS · Co-founder"
                  initials="J"
                  hue="var(--mauve-soft)"
                  tilt="-3deg"
                />
                <PortraitCard
                  name="Courtney"
                  role="CCLS, M.S. · Co-founder"
                  initials="C"
                  hue="var(--sage-soft)"
                  tilt="3deg"
                  offset
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* WARM APPOINTMENT CTA */}
      <section className="px-5 sm:px-8 lg:px-12 pb-10">
        <div className="relative max-w-[1240px] mx-auto rounded-[2rem] overflow-hidden border border-[color:var(--hairline)] bg-[color:var(--plum)] text-[color:var(--ivory)]">
          <div
            className="blob"
            style={{
              width: 460,
              height: 460,
              top: -120,
              left: -120,
              background: "var(--mauve)",
            }}
          />
          <div
            className="blob"
            style={{
              width: 380,
              height: 380,
              bottom: -160,
              right: -100,
              background: "var(--clay)",
              opacity: 0.45,
            }}
          />

          <div className="relative grid grid-cols-1 lg:grid-cols-12 gap-10 p-10 sm:p-14 lg:p-20">
            <div className="lg:col-span-8">
              <p className="eyebrow text-[color:var(--mauve-soft)]">
                When you&apos;re ready
              </p>
              <h2 className="font-display mt-4 text-[color:var(--ivory)]">
                Bring us the hard parts.
                <br />
                <span className="italic-serif text-[color:var(--mauve-soft)]">
                  We&apos;ll meet you there.
                </span>
              </h2>
              <p className="mt-5 max-w-[55ch] text-[color:var(--ivory)]/85 text-[1.05rem]">
                Whether you&apos;re preparing for a procedure next week or
                trying to help your child process something that happened years
                ago, we&apos;d be honored to help.
              </p>
            </div>
            <div className="lg:col-span-4 flex flex-col items-start lg:items-end justify-center gap-3">
              <a
                href={BOOKING_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="pill-btn pill-btn--ivory"
              >
                Request an appointment
                <ArrowUpRight className="w-4 h-4" />
              </a>
              <span className="text-[color:var(--ivory)]/65 text-[0.85rem] inline-flex items-center gap-2">
                <ShieldCheck className="w-4 h-4" />
                Confidential · secure portal
              </span>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

/* ---------- helpers ---------- */

function HeroVisual() {
  return (
    <div className="relative aspect-[4/5] max-w-[460px] mx-auto">
      {/* large rounded plum card */}
      <div className="absolute inset-0 rounded-[2.5rem] bg-[color:var(--plum)] shadow-[var(--shadow-warm-lg)] overflow-hidden">
        <svg
          viewBox="0 0 400 500"
          className="absolute inset-0 w-full h-full"
          aria-hidden
        >
          <defs>
            <radialGradient id="glow" cx="30%" cy="20%" r="80%">
              <stop offset="0%" stopColor="#B98099" stopOpacity="0.55" />
              <stop offset="60%" stopColor="#4A1E3A" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="ribbon" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#D9B7C4" />
              <stop offset="100%" stopColor="#A9B89A" />
            </linearGradient>
          </defs>
          <rect width="400" height="500" fill="url(#glow)" />
          <path
            d="M -30 360 C 90 300, 180 420, 300 340 S 460 340, 460 240"
            stroke="url(#ribbon)"
            strokeWidth="40"
            strokeLinecap="round"
            fill="none"
            opacity="0.85"
          />
          <circle cx="320" cy="120" r="46" fill="#FBF6EE" opacity="0.95" />
          <circle
            cx="320"
            cy="120"
            r="46"
            fill="none"
            stroke="#FBF6EE"
            strokeOpacity="0.4"
            strokeWidth="14"
          />
        </svg>

        {/* editorial quote */}
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <p
            className="font-display italic text-[color:var(--ivory)] text-[1.6rem] sm:text-[1.85rem] leading-[1.15]"
            style={{
              fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
            }}
          >
            “The smallest hands deserve the most thoughtful preparation.”
          </p>
          <p className="mt-4 eyebrow text-[color:var(--mauve-soft)]">
            our practice philosophy
          </p>
        </div>
      </div>

      {/* floating ivory card */}
      <div className="absolute -bottom-8 -left-6 sm:-left-10 w-[62%] paper rounded-2xl p-5 border border-[color:var(--hairline)] shadow-[var(--shadow-warm)] rotate-[-3deg]">
        <div className="flex items-center gap-3">
          <span className="w-10 h-10 rounded-full bg-[color:var(--sage-soft)] flex items-center justify-center">
            <Sparkles
              className="w-4 h-4 text-[color:var(--plum)]"
              aria-hidden
            />
          </span>
          <div>
            <p className="font-display text-[1.05rem] leading-tight">
              Free intro call
            </p>
            <p className="text-[0.78rem] text-[color:var(--ink-soft)]">
              15 min · no pressure
            </p>
          </div>
        </div>
      </div>

      {/* small mauve chip */}
      <div className="absolute -top-4 -right-2 px-4 py-2 rounded-full bg-[color:var(--mauve-soft)] text-[color:var(--plum-ink)] text-[0.78rem] font-medium shadow-[var(--shadow-warm-sm)] rotate-[6deg]">
        Telehealth · Colorado
      </div>
    </div>
  );
}

function PortraitCard({
  name,
  role,
  initials,
  hue,
  tilt,
  offset,
}: {
  name: string;
  role: string;
  initials: string;
  hue: string;
  tilt: string;
  offset?: boolean;
}) {
  return (
    <div
      className={`relative aspect-[3/4] rounded-[1.75rem] overflow-hidden border border-[color:var(--hairline)] shadow-[var(--shadow-warm)] ${
        offset ? "translate-y-8" : ""
      }`}
      style={{
        background: hue,
        transform: `rotate(${tilt}) ${offset ? "translateY(2rem)" : ""}`,
      }}
    >
      <svg
        viewBox="0 0 300 400"
        className="absolute inset-0 w-full h-full"
        aria-hidden
      >
        <defs>
          <radialGradient id={`p-${initials}`} cx="50%" cy="30%" r="70%">
            <stop offset="0%" stopColor="#FBF6EE" stopOpacity="0.75" />
            <stop offset="100%" stopColor="#FBF6EE" stopOpacity="0" />
          </radialGradient>
        </defs>
        <rect width="300" height="400" fill={`url(#p-${initials})`} />
        <circle cx="150" cy="160" r="60" fill="#FBF6EE" opacity="0.55" />
        <path
          d="M50 360 C 100 280, 200 280, 250 360 Z"
          fill="#FBF6EE"
          opacity="0.5"
        />
      </svg>
      <div className="absolute inset-0 flex flex-col items-center justify-center text-center px-6">
        <span
          className="font-display text-[6rem] leading-none italic text-[color:var(--plum)]"
          style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}
        >
          {initials}
        </span>
      </div>
      <div className="absolute left-4 right-4 bottom-4 paper rounded-xl px-4 py-3 border border-[color:var(--hairline)]">
        <p className="font-display text-[1.1rem] leading-none">{name}</p>
        <p className="eyebrow text-[0.65rem] mt-1.5">{role}</p>
      </div>
    </div>
  );
}
