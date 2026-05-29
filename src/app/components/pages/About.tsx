import { Link } from "react-router";
import { ArrowUpRight, GraduationCap, MapPin, Sparkles } from "lucide-react";

const BOOKING_URL = "https://achildsperspective-jm.clientsecure.me/";

const values = [
  {
    title: "Developmentally tuned",
    body: "Every plan is shaped by the child in front of us, not a script. Words, pace, and play change with age and temperament.",
  },
  {
    title: "Family-centered",
    body: "Children rarely cope alone. We hold space for caregivers and siblings as part of the work, not an afterthought.",
  },
  {
    title: "Honest & gentle",
    body: "We don’t over-promise or sanitize. We name what’s hard, and then we walk through it together.",
  },
  {
    title: "Boutique, not bureaucratic",
    body: "Small caseloads, unhurried sessions, real continuity. The opposite of a 15-minute clinic visit.",
  },
];

const founders = [
  {
    initials: "J",
    name: "Jenny",
    role: "Certified Child Life Specialist · Co-founder",
    hue: "var(--mauve-soft)",
    credentials: [
      "Certified Child Life Specialist (CCLS)",
      "Years of community clinic experience in Lafayette, CO",
      "Specializes in coping plans, procedural prep, and caregiver coaching",
    ],
    bio: [
      "Jenny grew up in Colorado in a big family, and discovered the field of child life as a teenager, at the same time her mother was navigating a long-term diagnosis. That early experience of being a kid trying to make sense of a grown-up medical world shapes everything about how she shows up today.",
      "She is patient, grounded, and unusually good at translating clinical language into something a child can actually hold. Parents often describe sessions with her as ‘the first time someone slowed down long enough to really explain.’",
    ],
  },
  {
    initials: "C",
    name: "Courtney",
    role: "Certified Child Life Specialist, M.S. · Co-founder",
    hue: "var(--sage-soft)",
    credentials: [
      "Certified Child Life Specialist (CCLS)",
      "M.S. in Human Relations · B.S. in Child Development & Family Studies · B.A. in Psychology",
      "10+ years bedside experience at a major pediatric hospital",
      "Group facilitator for children, teens, and caregivers living with chronic diagnoses",
    ],
    bio: [
      "Courtney spent more than a decade inside one of the country’s busiest pediatric hospitals before joining A Child’s Perspective. She has sat with families through diagnosis days, long admissions, end-of-life care, and the quiet seasons in between.",
      "She also teaches and mentors the next generation of child life specialists, and brings that same curiosity to her work with families, listening for what isn’t being said, and meeting each family with warmth and clarity.",
    ],
  },
];

export function About() {
  return (
    <div className="overflow-x-clip">
      {/* HERO */}
      <section className="relative">
        <div className="blob" style={{ width: 480, height: 480, top: -120, left: -120, background: "var(--mauve-soft)" }} />
        <div className="blob" style={{ width: 420, height: 420, top: 80, right: -160, background: "var(--sage-soft)", opacity: 0.5 }} />
        <div className="relative max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12 pt-16 lg:pt-24 pb-12 lg:pb-20">
          <p className="eyebrow rise rise-1">About the practice</p>
          <h1 className="font-display mt-5 max-w-[22ch] rise rise-2">
            Two specialists. <span className="italic-serif text-[color:var(--plum)]">One quiet idea:</span> medical care should feel human.
          </h1>
          <p className="mt-7 max-w-[60ch] text-[1.1rem] text-[color:var(--ink-soft)] rise rise-3">
            A Child&apos;s Perspective was started by two Certified Child Life Specialists who kept noticing the same gap, families doing brave, complicated medical things without anyone helping them prepare emotionally. So we built the practice we wished existed.
          </p>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="py-12 lg:py-20">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12 space-y-24">
          {founders.map((f, i) => (
            <article
              key={f.name}
              className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center"
            >
              <div className={`lg:col-span-5 ${i % 2 === 1 ? "lg:order-2" : ""}`}>
                <FounderPortrait initials={f.initials} hue={f.hue} name={f.name} />
              </div>
              <div className={`lg:col-span-7 ${i % 2 === 1 ? "lg:order-1" : ""}`}>
                <p className="eyebrow">{i === 0 ? "Co-founder · 01" : "Co-founder · 02"}</p>
                <h2 className="font-display mt-3 text-[2.4rem] sm:text-[3rem]">
                  {f.name}
                </h2>
                <p className="mt-1 text-[color:var(--plum-2)] italic-serif text-[1.1rem]">
                  {f.role}
                </p>

                <div className="mt-7 space-y-4 text-[color:var(--ink-soft)] text-[1.02rem] leading-relaxed">
                  {f.bio.map((p, idx) => (
                    <p key={idx}>{p}</p>
                  ))}
                </div>

                <div className="mt-8 warm-card p-6">
                  <p className="eyebrow flex items-center gap-2">
                    <GraduationCap className="w-3.5 h-3.5" aria-hidden /> Credentials &amp; experience
                  </p>
                  <ul className="mt-4 space-y-2.5">
                    {f.credentials.map((c) => (
                      <li key={c} className="flex items-start gap-3 text-[0.97rem]">
                        <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[color:var(--mauve)] flex-shrink-0" />
                        <span>{c}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      {/* VALUES */}
      <section className="py-24">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">
            <div className="lg:col-span-4">
              <p className="eyebrow">What guides us</p>
              <h2 className="font-display mt-3">
                Small <span className="italic-serif">principles,</span>
                <br /> held tightly.
              </h2>
              <p className="mt-5 text-[color:var(--ink-soft)] max-w-[34ch]">
                These aren&apos;t marketing words. They&apos;re what we come back to when the work is hard.
              </p>
            </div>
            <div className="lg:col-span-8 grid grid-cols-1 sm:grid-cols-2 gap-5">
              {values.map((v, i) => (
                <div
                  key={v.title}
                  className="warm-card p-7"
                  style={{ marginTop: i % 2 === 1 ? "1.5rem" : 0 }}
                >
                  <div className="flex items-center gap-3 mb-3">
                    <span className="inline-flex w-9 h-9 rounded-full bg-[color:var(--lavender)] items-center justify-center">
                      <Sparkles className="w-4 h-4 text-[color:var(--plum)]" aria-hidden />
                    </span>
                    <h3 className="font-display text-[1.35rem]">{v.title}</h3>
                  </div>
                  <p className="text-[color:var(--ink-soft)] text-[0.98rem] leading-relaxed">
                    {v.body}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* SERVING / CTA */}
      <section className="px-5 sm:px-8 lg:px-12 pb-10">
        <div className="relative max-w-[1240px] mx-auto rounded-[2rem] overflow-hidden border border-[color:var(--hairline)] bg-[color:var(--ivory-2)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-10 sm:p-14 lg:p-16 items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" aria-hidden /> Serving Colorado families
              </p>
              <h2 className="font-display mt-3">
                Telehealth statewide.
                <br />
                <span className="italic-serif text-[color:var(--plum)]">In-person by arrangement.</span>
              </h2>
              <p className="mt-5 max-w-[55ch] text-[color:var(--ink-soft)]">
                We see families across Colorado through secure telehealth and partner with local providers for select in-person work.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-3 lg:items-end">
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
                See services &amp; fees
              </Link>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function FounderPortrait({ initials, hue, name }: { initials: string; hue: string; name: string }) {
  return (
    <div className="relative aspect-[4/5] max-w-[460px] mx-auto">
      <div
        className="absolute inset-0 rounded-[2rem] overflow-hidden border border-[color:var(--hairline)] shadow-[var(--shadow-warm-lg)]"
        style={{ background: hue }}
      >
        <svg viewBox="0 0 400 500" className="absolute inset-0 w-full h-full" aria-hidden>
          <defs>
            <radialGradient id={`a-${initials}`} cx="50%" cy="28%" r="70%">
              <stop offset="0%" stopColor="#FBF6EE" stopOpacity="0.85" />
              <stop offset="100%" stopColor="#FBF6EE" stopOpacity="0" />
            </radialGradient>
          </defs>
          <rect width="400" height="500" fill={`url(#a-${initials})`} />
          <circle cx="200" cy="200" r="80" fill="#FBF6EE" opacity="0.6" />
          <path d="M40 460 C 110 360, 290 360, 360 460 Z" fill="#FBF6EE" opacity="0.55" />
        </svg>
        <div className="absolute inset-0 flex items-center justify-center">
          <span
            className="font-display italic text-[color:var(--plum)] text-[8rem] leading-none"
            style={{ fontVariationSettings: '"opsz" 144, "SOFT" 100, "WONK" 1' }}
          >
            {initials}
          </span>
        </div>
      </div>
      <div className="absolute left-5 -bottom-4 paper rounded-xl px-4 py-3 border border-[color:var(--hairline)] shadow-[var(--shadow-warm)]">
        <p className="eyebrow text-[0.65rem]">Portrait placeholder</p>
        <p className="font-display text-[1rem] leading-tight mt-0.5">{name}</p>
      </div>
    </div>
  );
}
