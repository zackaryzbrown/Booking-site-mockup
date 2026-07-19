import { Link } from "react-router";
import { ArrowUpRight, GraduationCap, MapPin, Sparkles } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import { usePageMeta } from "../../utils/usePageMeta";
import jennyImage from "../../../assets/jenny.jpeg";
import courtneyImage from "../../../assets/courtney.jpg";

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
    name: "Jenny",
    role: "Certified Child Life Specialist · Co-founder",
    hue: "var(--mauve-soft)",
    image: jennyImage,
    credentials: [
      "Certified Child Life Specialist (CCLS)",
      "Master's degree in Counseling · Bachelor's degree in Psychology",
      "10 years experience at Rainbow Babies and Children's Hospital, Cleveland, Ohio",
      "Licensed Professional Counselor (Ohio)",
      "2 years experience in therapeutic puppetry with hospitalized children",
      "Support group facilitator for children with caregivers facing cancer diagnoses",
    ],
    bio: [
      "Jenny has a master's degree in counseling and a bachelor's degree in psychology. She is currently facilitating support groups for children with a caregiver with a cancer diagnosis as well as working per diem at CHC. She has 10 years' experience working as a Child Life Specialist at Rainbow Babies and Children's Hospital in Cleveland, Ohio, including 2 years' experience utilizing therapeutic puppetry with hospitalized children.",
      "She worked in an inpatient mental health institution as a therapist for a year while receiving her license as a professional counselor in Ohio. She is passionate about finding creative and individualistic ways to help children through their medical experiences.",
    ],
  },
  {
    name: "Courtney",
    role: "Certified Child Life Specialist, M.Ed. · Co-founder",
    hue: "var(--sage-soft)",
    image: courtneyImage,
    credentials: [
      "Certified Child Life Specialist (CCLS)",
      "M.Ed. in Human Relations · B.S. in Child Development & Family Studies · B.A. in Psychology",
      "15+ years experience at major hospitals in Phoenix, AZ",
      "Support group facilitator for children, teens, and parents/caregivers facing cancer diagnoses",
      "2+ years of teaching at the collegiate level",
    ],
    bio: [
      "Courtney is a Certified Child Life Specialist who helps children and families cope with the stress and uncertainty of acute and chronic illness, injury, trauma, disability, loss, and bereavement. She provides evidence-based, developmentally and psychologically appropriate interventions including therapeutic play, preparation for procedures, and education to reduce fear, anxiety, and pain.",
      "She holds an M.Ed. in Human Relations, a B.S. in Child Development and Family Studies, and a B.A. in Psychology. She has 15+ years experience working as a Child Life Specialist at major hospitals in the Phoenix, AZ area, which involved closely partnering with community organizations to enhance the supportive environment for her patients. Courtney also facilitates support groups for children, teens, and parents/caregivers for families dealing with a cancer diagnosis, and enjoys teaching and mentoring child life students through practicum, internship, and new-grad experiences.",
      "Since moving to Colorado in 2022, she has enjoyed working in the non-profit sector and is excited to now serve the Boulder community and surrounding areas with her compassionate and innovative approach to helping children and families navigate their medical journeys. A Child's Perspective was co-founded by Courtney Brown and Jenny Master to serve families in a community-based setting because ongoing support outside of the acute setting is always beneficial and needed for continued and successful coping with medical journeys.",
    ],
  },
];

export function About() {
  usePageMeta({
    title: "About Jenny & Courtney",
    description:
      "Meet the Certified Child Life Specialists behind A Child's Perspective — a boutique practice built to give families unhurried, human support through medical experiences.",
    path: "/about",
  });

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
            left: -120,
            background: "var(--mauve-soft)",
          }}
        />
        <div
          className="blob"
          style={{
            width: 420,
            height: 420,
            top: 80,
            right: -160,
            background: "var(--sage-soft)",
            opacity: 0.5,
          }}
        />
        <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12 pt-4 sm:pt-8 lg:pt-12 pb-6 sm:pb-10 lg:pb-14">
          <p className="eyebrow rise rise-1">About the practice</p>
          <h1 className="font-display mt-3 sm:mt-4 md:mt-5 max-w-[22ch] rise rise-2">
            Two specialists.{" "}
            <span className="italic-serif text-[color:var(--plum)]">
              One quiet idea:
            </span>{" "}
            medical care should feel human.
          </h1>
          <p className="mt-4 sm:mt-5 md:mt-6 max-w-[60ch] text-fluid-lg text-[color:var(--ink-soft)] rise rise-3">
            A Child&apos;s Perspective was started by two Certified Child Life
            Specialists who kept noticing the same gap, families doing brave,
            complicated medical things without anyone helping them prepare
            emotionally. So we built the practice we wished existed.
          </p>
        </div>
      </section>

      {/* WHAT IS CHILD LIFE - Professional Description */}
      <section className="py-10 sm:py-14 md:py-18 lg:py-24 bg-white">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-6 sm:mb-8 md:mb-10">
            <p className="eyebrow flex items-center justify-center gap-2">
              <GraduationCap className="w-3.5 h-3.5" aria-hidden />
              What is Child Life?
            </p>
            <h2 className="font-display mt-3 max-w-[24ch] mx-auto">
              Certified professionals, dedicated to your family's emotional
              wellbeing.
            </h2>
          </div>

          <div className="space-y-5 text-[color:var(--ink-soft)] leading-relaxed">
            <p>
              Child Life Specialists are certified through the Child Life
              Certification Council under the Association of Child Life
              Professionals. They are highly trained and pivotal medical
              professionals who help children and families navigate and cope
              with the stress and uncertainty of hospitalization, illness,
              trauma and/or bereavement. They are skilled at providing emotional
              support, education, and therapeutic play/activities to help
              normalize the environment, minimize anxiety, and promote effective
              coping strategies for patients and caregivers.
            </p>

            <div className="warm-card p-7 lg:p-8 border-l-4 border-[color:var(--plum)]">
              <p className="font-semibold text-[color:var(--plum-ink)] mb-3">
                Child Life Specialists have expertise in:
              </p>
              <ul className="space-y-2.5 text-[0.95rem]">
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[color:var(--plum)] flex-shrink-0" />
                  <span>
                    Providing developmentally and psychologically appropriate
                    medical play and preparation for procedures
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[color:var(--plum)] flex-shrink-0" />
                  <span>
                    Coping skills and therapeutic hands-on explorative learning
                    to increase understanding and reduce anxiety
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[color:var(--plum)] flex-shrink-0" />
                  <span>
                    Advocacy amongst the medical team for patient and family
                    centered care
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[color:var(--plum)] flex-shrink-0" />
                  <span>
                    Parent, child and/or sibling support, education, and coping
                    through a loved one's medical journey
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[color:var(--plum)] flex-shrink-0" />
                  <span>
                    Developmental support including school re-entry after
                    extended medical absences
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="mt-1.5 w-1.5 h-1.5 rounded-full bg-[color:var(--plum)] flex-shrink-0" />
                  <span>Legacy building and grief/bereavement support</span>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="py-12 lg:py-20">
        <div className="max-w-[1240px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-[680px] mx-auto mb-12 lg:mb-16">
            <p className="eyebrow">
              <Sparkles className="w-3.5 h-3.5 inline mr-2" aria-hidden />
              How we work
            </p>
            <h2 className="font-display mt-3">
              Built around real families, not protocols.
            </h2>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-5">
            {values.map((value, idx) => (
              <div
                key={idx}
                className="warm-card p-6 lg:p-7 border-2 border-[color:var(--lavender)]"
              >
                <div className="flex items-center gap-2.5 mb-3">
                  <span className="inline-flex w-8 h-8 rounded-full bg-[color:var(--lavender)] items-center justify-center flex-shrink-0">
                    <Sparkles
                      className="w-3.5 h-3.5 text-[color:var(--plum)]"
                      aria-hidden
                    />
                  </span>
                  <h3 className="font-display text-[1.15rem] leading-tight">
                    {value.title}
                  </h3>
                </div>
                <p className="text-[color:var(--ink-soft)] text-[0.9rem] leading-relaxed">
                  {value.body}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FOUNDERS */}
      <section className="py-12 lg:py-20 bg-[color:var(--ivory-2)]">
        <div className="max-w-[1100px] mx-auto px-5 sm:px-8 lg:px-12">
          <div className="text-center max-w-[680px] mx-auto mb-12 lg:mb-14">
            <p className="eyebrow">Meet the team</p>
            <h2 className="font-display mt-3">
              Two specialists who believe medical care should feel human.
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {founders.map((founder, idx) => (
              <FounderProfileCard key={idx} founder={founder} />
            ))}
          </div>
        </div>
      </section>

      {/* SERVING / CTA */}
      <section className="px-5 sm:px-8 lg:px-12 pb-10">
        <div className="relative max-w-[1240px] mx-auto rounded-[2rem] overflow-hidden border border-[color:var(--hairline)] bg-[color:var(--ivory-2)]">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 p-10 sm:p-14 lg:p-16 items-center">
            <div className="lg:col-span-7">
              <p className="eyebrow flex items-center gap-2">
                <MapPin className="w-3.5 h-3.5" aria-hidden /> Serving Colorado
                families
              </p>
              <h2 className="font-display mt-3">
                Telehealth statewide.
                <br />
                <span className="italic-serif text-[color:var(--plum)]">
                  In-person by arrangement.
                </span>
              </h2>
              <p className="mt-5 max-w-[55ch] text-[color:var(--ink-soft)]">
                We see families across Colorado through secure telehealth and
                partner with local providers for select in-person work.
              </p>
            </div>
            <div className="lg:col-span-5 flex flex-col gap-3 lg:items-end">
              <Link to="/book" className="pill-btn pill-btn--primary">
                Request an appointment
                <ArrowUpRight className="w-4 h-4" />
              </Link>
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

// Founder Profile Card Component
function FounderProfileCard({ founder }: { founder: (typeof founders)[0] }) {
  return (
    <div className="warm-card overflow-hidden">
      {/* Portrait */}
      <div className="relative aspect-[4/3] overflow-hidden">
        <div
          className="absolute inset-0"
          style={{ background: founder.hue, opacity: 0.2 }}
        />
        <ImageWithFallback
          src={founder.image}
          alt={`${founder.name}, Certified Child Life Specialist`}
          className="w-full h-full object-cover object-center"
          style={{ objectPosition: "center 30%" }}
          loading="lazy"
          width="800"
          height="600"
        />
      </div>

      {/* Info */}
      <div className="p-7 lg:p-8">
        {/* Name & Role */}
        <h3 className="font-display text-[1.75rem] lg:text-[2rem] leading-tight">
          {founder.name}
        </h3>
        <p className="mt-1.5 text-[color:var(--plum-2)] italic-serif text-[0.98rem]">
          {founder.role}
        </p>

        {/* Bio */}
        <div className="mt-5 space-y-3 text-[color:var(--ink-soft)] text-[0.92rem] leading-relaxed">
          {founder.bio.map((paragraph, idx) => (
            <p key={idx}>{paragraph}</p>
          ))}
        </div>

        {/* Credentials */}
        <div className="mt-6 pt-6 border-t border-[color:var(--hairline)]">
          <p className="eyebrow flex items-center gap-2 mb-3.5">
            <GraduationCap className="w-3.5 h-3.5" aria-hidden />
            Credentials &amp; experience
          </p>
          <ul className="space-y-2.5">
            {founder.credentials.map((credential, idx) => (
              <li key={idx} className="flex items-start gap-2.5 text-[0.87rem]">
                <span
                  className="mt-1.5 w-1.5 h-1.5 rounded-full flex-shrink-0"
                  style={{ background: founder.hue }}
                />
                <span className="text-[color:var(--ink-soft)]">
                  {credential}
                </span>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
}
