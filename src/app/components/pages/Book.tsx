import { ArrowUpRight, ShieldCheck, CheckCircle2 } from "lucide-react";
import { useEffect } from "react";
import { Link } from "react-router";
import { ImageWithFallback } from "../figma/ImageWithFallback";
import jennyImage from "../../../assets/jenny.jpeg";
import courtneyImage from "../../../assets/courtney.jpg";

const providers = [
  {
    name: "Jenny",
    fullName: "Jenny",
    role: "Certified Child Life Specialist",
    credentials: "CCLS · Co-founder",
    image: jennyImage,
    hue: "var(--mauve-soft)",
    description:
      "Certified Child Life Specialist with a master's degree in counseling and 10 years' experience at Rainbow Babies and Children's Hospital in Cleveland, Ohio. Includes 2 years' experience utilizing therapeutic puppetry with hospitalized children. Licensed Professional Counselor who is passionate about finding creative and individualistic ways to help children through their medical experiences. Currently facilitates support groups for children with caregivers facing cancer diagnoses.",
    expertise:
      "Coping plans, procedural preparation, caregiver coaching, and creative therapeutic approaches",
    bookingUrl: "https://achildsperspective-jm.clientsecure.me/",
  },
  {
    name: "Courtney",
    fullName: "Courtney",
    role: "Certified Child Life Specialist, M.Ed.",
    credentials: "CCLS, M.Ed. · Co-founder",
    image: courtneyImage,
    hue: "var(--sage-soft)",
    description:
      "Certified Child Life Specialist with 15+ years of experience at major hospitals in Phoenix, AZ. Provides evidence-based, developmentally appropriate interventions including therapeutic play, procedural preparation, and education to reduce fear, anxiety, and pain. Facilitates support groups for families dealing with cancer diagnoses and brings a compassionate, innovative approach to helping children and families navigate their medical journeys.",
    expertise:
      "Acute and chronic illness, trauma, disability, loss, bereavement, and cancer support",
    bookingUrl: "https://achildsperspective-cb.clientsecure.me",
  },
];

const steps = [
  {
    number: 1,
    title: "Choose your provider",
    description: "Select the specialist whose expertise best fits your needs",
  },
  {
    number: 2,
    title: "View available times",
    description: "Browse appointment slots that work for your family",
  },
  {
    number: 3,
    title: "Submit your request",
    description: "Complete your request securely through SimplePractice",
  },
];

export function Book() {
  useEffect(() => {
    document.title = "Request an Appointment | A Child's Perspective";
    const metaDescription = document.querySelector('meta[name="description"]');
    if (metaDescription) {
      metaDescription.setAttribute(
        "content",
        "Choose a provider and securely request an appointment with A Child's Perspective through SimplePractice.",
      );
    }
  }, []);

  return (
    <div className="overflow-x-clip">
      {/* HERO */}
      <section className="relative">
        <div
          className="blob"
          style={{
            width: 480,
            height: 480,
            top: -100,
            right: -140,
            background: "var(--mauve-soft)",
            opacity: 0.45,
          }}
        />
        <div
          className="blob"
          style={{
            width: 380,
            height: 380,
            top: 180,
            left: -120,
            background: "var(--lavender)",
            opacity: 0.4,
          }}
        />

        <div className="relative max-w-[1100px] mx-auto px-4 sm:px-6 lg:px-12 pt-4 sm:pt-8 lg:pt-12 pb-6 sm:pb-10 lg:pb-14">
          <p className="eyebrow rise rise-1">Secure Online Scheduling</p>
          <h1 className="font-display mt-3 sm:mt-4 md:mt-5 max-w-[24ch] rise rise-2">
            Request an Appointment
          </h1>
          <p className="mt-4 sm:mt-5 md:mt-6 max-w-[62ch] text-fluid-lg text-[#4A3C43] rise rise-3">
            Choose the provider you would like to work with, then continue to
            our secure SimplePractice portal to view availability and submit an
            appointment request.
          </p>

          <div className="mt-5 sm:mt-6 flex items-center gap-2.5 text-[0.88rem] text-[#4A3C43] rise rise-4">
            <ShieldCheck
              className="w-4 h-4 text-[color:var(--plum)]"
              aria-hidden
            />
            <span>Scheduling is securely managed through SimplePractice.</span>
          </div>
        </div>
      </section>

      {/* PROVIDER SELECTION */}
      <section className="py-10 sm:py-12 md:py-14 lg:py-16 bg-[color:var(--ivory-2)]">
        <div className="max-w-[1140px] mx-auto px-4 sm:px-6 lg:px-12">
          {/* Provider Introduction */}
          <div className="text-center mb-8 sm:mb-10 lg:mb-12">
            <p className="eyebrow">Find the right fit</p>
            <h2 className="font-display text-[1.9rem] sm:text-[2.3rem] mt-2 text-[color:var(--plum-ink)]">
              Choose Your Provider
            </h2>
            <p className="mt-3 text-[0.98rem] text-[#4A3C43] max-w-[52ch] mx-auto">
              Select the provider whose experience best aligns with your
              family's needs.
            </p>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 lg:gap-8">
            {providers.map((provider, index) => (
              <ProviderCard key={provider.name} provider={provider} />
            ))}
          </div>

          {/* Decision Support Block */}
          <div className="mt-10 sm:mt-12 text-center max-w-[560px] mx-auto">
            <p className="text-[1rem] text-[color:var(--plum-ink)] font-medium">
              Not sure who to choose?
            </p>
            <p className="mt-2 text-[0.94rem] text-[#4A3C43]">
              <Link
                to="/contact"
                className="text-[color:var(--plum)] hover:text-[color:var(--plum-2)] underline underline-offset-2 font-medium"
              >
                Contact us
              </Link>{" "}
              and we'll help you determine the best fit.
            </p>
          </div>
        </div>
      </section>

      {/* WHAT HAPPENS NEXT */}
      <section className="py-10 sm:py-12 md:py-14 lg:py-16">
        <div className="max-w-[900px] mx-auto px-4 sm:px-6 lg:px-12">
          <div className="text-center mb-8">
            <h2 className="font-display text-[1.75rem] sm:text-[2.2rem]">
              What happens next?
            </h2>
          </div>

          <div className="relative grid grid-cols-1 sm:grid-cols-3 gap-6 sm:gap-5 mb-8">
            {/* Connector Line - Desktop Only */}
            <div
              className="hidden sm:block absolute top-6 left-[16.666%] right-[16.666%] h-[2px] bg-[color:var(--hairline)] -z-10"
              aria-hidden
            />

            {steps.map((step) => (
              <div key={step.number} className="text-center relative">
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-[color:var(--plum)] text-[color:var(--ivory)] font-display text-[1.3rem] font-semibold mb-4">
                  {step.number}
                </div>
                <h3 className="font-display text-[1.15rem] text-[color:var(--plum-ink)] mb-2">
                  {step.title}
                </h3>
                <p className="text-[0.92rem] text-[#4A3C43] leading-relaxed">
                  {step.description}
                </p>
              </div>
            ))}
          </div>

          <div className="warm-card p-5 sm:p-6 bg-[color:var(--lavender-2)] border-[color:var(--hairline)]">
            <div className="flex items-start gap-3">
              <CheckCircle2
                className="w-5 h-5 text-[color:var(--plum)] mt-0.5 shrink-0"
                aria-hidden
              />
              <div>
                <p className="text-[0.95rem] text-[#4A3C43] leading-relaxed">
                  <strong className="text-[color:var(--plum-ink)] font-medium">
                    Important:
                  </strong>{" "}
                  Submitting a request does not confirm an appointment. Your
                  provider will review and confirm your request.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

function ProviderCard({ provider }: { provider: (typeof providers)[0] }) {
  return (
    <article className="warm-card p-6 sm:p-7 lg:p-8 flex flex-col h-full">
      <div className="flex flex-col sm:flex-row gap-5 sm:gap-6 mb-6">
        <div className="shrink-0 mx-auto sm:mx-0">
          <div
            className="w-24 h-24 sm:w-28 sm:h-28 rounded-2xl overflow-hidden"
            style={{
              background: provider.hue,
              boxShadow: "0 4px 16px -4px rgba(74, 30, 58, 0.15)",
            }}
          >
            <ImageWithFallback
              src={provider.image}
              alt={`${provider.fullName}, ${provider.role}`}
              className="w-full h-full object-cover"
              loading="lazy"
              width="112"
              height="112"
            />
          </div>
        </div>

        <div className="flex-1 text-center sm:text-left">
          <h3 className="font-display text-[1.6rem] sm:text-[1.8rem] text-[color:var(--plum-ink)] leading-tight">
            {provider.fullName}
          </h3>
          <p className="mt-1.5 text-[0.88rem] font-medium text-[color:var(--plum-2)] tracking-wide">
            {provider.credentials}
          </p>
        </div>
      </div>

      <div className="space-y-4 flex-1">
        <p className="text-fluid text-[#4A3C43] leading-relaxed">
          {provider.description}
        </p>

        <div className="pt-2">
          <p className="text-[0.88rem] font-semibold text-[color:var(--plum-ink)] mb-1.5">
            Best suited for:
          </p>
          <p className="text-[0.93rem] text-[#4A3C43] leading-relaxed">
            {provider.expertise}
          </p>
        </div>
      </div>

      <div className="mt-6 pt-6 border-t border-[color:var(--hairline)]">
        <a
          href={provider.bookingUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="pill-btn pill-btn--primary w-full justify-center group"
          aria-label={`View ${provider.fullName}'s availability on SimplePractice (opens in new window)`}
        >
          View {provider.fullName}'s Availability
          <ArrowUpRight
            className="w-4 h-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5"
            aria-hidden
          />
        </a>
        <p className="mt-3 text-center text-[0.86rem] text-[#4A3C43]">
          Opens secure scheduling through SimplePractice.
        </p>
      </div>
    </article>
  );
}
