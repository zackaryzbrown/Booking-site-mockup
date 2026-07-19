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
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { usePageMeta } from "../../utils/usePageMeta";
import jennyImage from "../../../assets/jenny.jpeg";
import courtneyImage from "../../../assets/courtney.jpg";
import logoImage from "../../../assets/Logo.png";

const trust = [
  { icon: GraduationCap, label: "Certified Child Life Specialists" },
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
  usePageMeta({
    title: "A Child's Perspective — Child Life Support for Colorado Families",
    description:
      "Boutique child life support for children, teens, siblings, and caregivers navigating medical experiences. Telehealth available, serving Colorado families.",
    path: "/",
  });

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

        <div className="relative max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-12 pt-4 sm:pt-8 lg:pt-12 pb-8 sm:pb-12 lg:pb-16">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center lg:items-end">
            <div className="lg:col-span-7">
              <p className="eyebrow rise rise-1">
                A boutique child life practice
              </p>
              <h1
                className="font-display mt-3 sm:mt-4 md:mt-5 text-[color:var(--plum-ink)] rise rise-2"
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
              <p className="mt-4 sm:mt-5 md:mt-6 max-w-[58ch] text-fluid-lg text-[color:var(--ink-soft)] rise rise-3">
                Child life support for children, teens, siblings, and caregivers
                navigating diagnoses, procedures, hospital stays, and the long
                stretches in between. Honest, developmentally-tuned care,
                designed around the way real families actually feel.
              </p>

              <div className="mt-5 sm:mt-6 md:mt-7 flex flex-wrap items-center gap-2.5 sm:gap-3 rise rise-4">
                <Link to="/book" className="pill-btn pill-btn--primary">
                  Request an appointment
                  <ArrowUpRight className="w-4 h-4" />
                </Link>
                <Link to="/services" className="pill-btn pill-btn--ghost">
                  Explore services
                </Link>
              </div>

              <div className="mt-6 sm:mt-8 md:mt-10 grid grid-cols-1 sm:grid-cols-3 gap-2.5 sm:gap-3 rise rise-5">
                {trust.map(({ icon: Icon, label }) => (
                  <div
                    key={label}
                    className="flex items-center gap-2.5 sm:gap-3 px-3 sm:px-4 py-2.5 sm:py-3 rounded-full bg-white/70 backdrop-blur-sm border border-[color:var(--hairline)]"
                  >
                    <span className="inline-flex w-7 h-7 sm:w-8 sm:h-8 items-center justify-center rounded-full bg-[color:var(--lavender-2)] text-[color:var(--plum)] shrink-0">
                      <Icon className="w-3.5 h-3.5 sm:w-4 sm:h-4" aria-hidden />
                    </span>
                    <span className="text-[0.8rem] sm:text-[0.86rem] text-[color:var(--ink-soft)]">
                      {label}
                    </span>
                  </div>
                ))}
              </div>
            </div>

            {/* Editorial visual card */}
            <div className="lg:col-span-5 relative rise rise-3 hidden lg:block">
              <HeroVisual />
            </div>
          </div>
        </div>
      </section>

      {/* WHAT IS CHILD LIFE */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-24 bg-[color:var(--ivory-2)]">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-6 sm:mb-8 md:mb-9">
            <p className="eyebrow">What is Child Life?</p>
            <h2 className="font-display mt-3 max-w-[28ch] mx-auto">
              A field dedicated to the{" "}
              <span className="italic-serif text-[color:var(--plum)]">
                emotional side
              </span>{" "}
              of medical care.
            </h2>
          </div>

          <div className="warm-card p-5 sm:p-7 lg:p-10">
            <p className="text-fluid text-[color:var(--ink-soft)] leading-relaxed mb-5">
              Child Life Specialists are certified medical professionals who
              help children and families navigate the stress and uncertainty of
              illness, hospitalization, and medical procedures. Through
              therapeutic play, developmentally-appropriate preparation, and
              emotional support, we help normalize difficult experiences and
              build effective coping strategies.
            </p>
            <p className="text-fluid text-[color:var(--ink-soft)] leading-relaxed">
              At A Child's Perspective, we bring this expertise into a boutique
              setting—offering unhurried, personalized sessions that make space
              for questions, feelings, and the kind of careful attention
              families deserve.
            </p>
          </div>
        </div>
      </section>

      {/* WHO WE HELP */}
      <section className="relative py-12 sm:py-16 md:py-20 lg:py-28">
        <div className="max-w-[1240px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-4 sm:gap-5 md:gap-6 mb-8 sm:mb-10 md:mb-12">
            <div>
              <p className="eyebrow">Who we help</p>
              <h2 className="font-display mt-3 max-w-[18ch]">
                Care that meets each{" "}
                <span className="italic-serif">person</span> in the room.
              </h2>
            </div>
            <p className="max-w-[42ch] text-fluid text-[color:var(--ink-soft)]">
              A medical experience doesn't happen to one person, it ripples
              through a whole family. Our sessions are shaped around the person
              in front of us.
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-5">
            {whoWeHelp.map((item, i) => (
              <article
                key={item.title}
                className={`group relative warm-card p-5 sm:p-6 lg:p-7 flex flex-col gap-3 sm:gap-4 transition-transform duration-300 hover:-translate-y-1 ${i % 2 === 1 ? "sm:mt-6" : ""}`}
              >
                <div
                  className="w-12 h-12 sm:w-14 sm:h-14 rounded-2xl flex items-center justify-center"
                  style={{ background: item.accent }}
                >
                  <Heart
                    className="w-5 h-5 sm:w-6 sm:h-6 text-[color:var(--plum)]"
                    aria-hidden
                  />
                </div>
                <div>
                  <h3 className="font-display text-[1.35rem] sm:text-[1.5rem]">
                    {item.title}
                  </h3>
                  <p className="eyebrow mt-1">{item.note}</p>
                </div>
                <p className="text-fluid-sm text-[color:var(--ink-soft)] leading-relaxed">
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
              <div className="grid grid-cols-2 gap-4 sm:gap-5 max-w-[520px] mx-auto lg:max-w-none">
                <PortraitCard
                  name="Jenny"
                  role="CCLS · Co-founder"
                  image={jennyImage}
                  hue="var(--mauve-soft)"
                  tilt="-2.5deg"
                />
                <PortraitCard
                  name="Courtney"
                  role="CCLS, M.Ed. · Co-founder"
                  image={courtneyImage}
                  hue="var(--sage-soft)"
                  tilt="2.5deg"
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
              <Link to="/book" className="pill-btn pill-btn--ivory">
                Request an appointment
                <ArrowUpRight className="w-4 h-4" />
              </Link>
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
        {/* Decorative background layers */}
        <svg
          viewBox="0 0 400 500"
          className="absolute inset-0 w-full h-full"
          preserveAspectRatio="xMidYMid slice"
          aria-hidden
        >
          <defs>
            <radialGradient id="hero-glow" cx="30%" cy="20%" r="80%">
              <stop offset="0%" stopColor="#B98099" stopOpacity="0.55" />
              <stop offset="60%" stopColor="#4A1E3A" stopOpacity="0" />
            </radialGradient>
            <linearGradient id="hero-ribbon" x1="0" y1="0" x2="1" y2="1">
              <stop offset="0%" stopColor="#D9B7C4" />
              <stop offset="100%" stopColor="#A9B89A" />
            </linearGradient>
          </defs>
          <rect width="400" height="500" fill="url(#hero-glow)" />

          {/* Gentle guide-path — echoes a kite string, not the kite itself */}
          <path
            d="M 320 150 Q 260 260, 200 300 T 60 430"
            stroke="#FBF6EE"
            strokeOpacity="0.35"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeDasharray="2 6"
            fill="none"
          />
          <path
            d="M -30 380 C 90 320, 180 430, 300 360 S 460 360, 460 260"
            stroke="url(#hero-ribbon)"
            strokeWidth="34"
            strokeLinecap="round"
            fill="none"
            opacity="0.75"
          />

          {/* Soft ivory disc behind the kite, gives it a paper glow */}
          <circle cx="270" cy="150" r="86" fill="#FBF6EE" opacity="0.18" />
          <circle
            cx="270"
            cy="150"
            r="86"
            fill="none"
            stroke="#FBF6EE"
            strokeOpacity="0.28"
            strokeWidth="1"
          />
        </svg>

        {/* Approved kite logo — intact focal element */}
        <img
          src={logoImage}
          alt=""
          role="presentation"
          width={172}
          height={172}
          className="absolute pointer-events-none select-none"
          style={{
            top: "10%",
            right: "12%",
            width: "38%",
            height: "auto",
            aspectRatio: "1 / 1",
            filter: "drop-shadow(0 8px 24px rgba(0,0,0,0.18))",
          }}
        />

        {/* editorial quote */}
        <div className="absolute inset-0 flex flex-col justify-end p-8">
          <p
            className="font-display italic text-[color:var(--ivory)] text-[1.6rem] sm:text-[1.85rem] leading-[1.15]"
            style={{
              fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1',
            }}
          >
            &ldquo;The smallest hands deserve the most thoughtful
            preparation.&rdquo;
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
  image,
  hue,
  tilt,
  offset,
}: {
  name: string;
  role: string;
  image: string;
  hue: string;
  tilt: string;
  offset?: boolean;
}) {
  return (
    <div
      className="relative aspect-[3/4] rounded-[1.75rem] overflow-hidden border border-[color:var(--hairline)] shadow-[var(--shadow-warm)] bg-[color:var(--ivory-2)]"
      style={{
        background: hue,
        transform: `rotate(${tilt}) ${offset ? "translateY(2rem)" : ""}`,
      }}
    >
      <ImageWithFallback
        src={image}
        alt={`${name}, Certified Child Life Specialist`}
        className="absolute inset-0 w-full h-full object-cover"
        style={{ objectPosition: "center 25%" }}
        loading="lazy"
        width="600"
        height="800"
      />

      {/* Soft gradient scrim so the caption stays legible */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(to top, rgba(42,19,32,0.55) 0%, rgba(42,19,32,0.15) 35%, rgba(42,19,32,0) 60%)",
        }}
      />

      <div className="absolute left-3 right-3 sm:left-4 sm:right-4 bottom-3 sm:bottom-4 paper rounded-xl px-3 sm:px-4 py-2.5 sm:py-3 border border-[color:var(--hairline)]">
        <p className="font-display text-[1.05rem] sm:text-[1.1rem] leading-none">
          {name}
        </p>
        <p className="eyebrow text-[0.6rem] sm:text-[0.65rem] mt-1.5">{role}</p>
      </div>
    </div>
  );
}
