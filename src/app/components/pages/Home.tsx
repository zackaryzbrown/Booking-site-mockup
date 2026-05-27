import { Link } from "react-router";
import { Button } from "../ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import {
  Video,
  CreditCard,
  UserPlus,
  Calendar,
  CheckCircle,
} from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Home() {
  const features = [
    {
      icon: Video,
      title: "Office Telehealth Appointments",
      description:
        "Connect with us from anywhere through secure video consultations.",
      color: "#5D17EA",
    },
    {
      icon: CreditCard,
      title: "Accepts Online Payments",
      description:
        "Convenient and secure online payment options for your ease.",
      color: "#5D17EA",
    },
    {
      icon: UserPlus,
      title: "Affordable New Clients",
      description:
        "We welcome new families with affordable rates and flexible options.",
      color: "#5D17EA",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section
        className="relative overflow-hidden"
        style={{
          background:
            'linear-gradient(135deg, rgba(93, 23, 234, 0.7) 0%, rgba(93, 23, 234, 0.85) 100%), url("https://images.unsplash.com/photo-1519452635265-7b1fbfd1e4e0?w=1920") center/cover',
        }}
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6 text-white">
                Guiding Children Through Medical Experiences
              </h1>
              <p className="text-lg sm:text-xl text-white/95 mb-8">
                We work with children, teens and parents/caregivers to help ease
                the anxiety of stress that often comes along with
                medical-related experiences, whether it's their own or a loved
                one's, through an individualized, developmentally and
                age-appropriate approach.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button
                  size="lg"
                  variant="secondary"
                  asChild
                  className="text-lg bg-teal-600 hover:bg-teal-700 text-white"
                >
                  <a
                    href="https://achildsperspective-jm.clientsecure.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2"
                  >
                    Client Portal
                  </a>
                </Button>
                <Button
                  size="lg"
                  asChild
                  className="text-lg bg-[#5D17EA] hover:bg-[#5D17EA]/90"
                >
                  <a
                    href="https://achildsperspective-jm.clientsecure.me/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Request appointment
                  </a>
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="absolute inset-0 bg-gradient-to-tr from-[#5D17EA]/20 to-[#CE5374]/20 rounded-3xl transform rotate-3"></div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691463080-30a990ef61bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpYXRyaWMlMjBkb2N0b3IlMjBjaGlsZCUyMGNoZWNrdXB8ZW58MXx8fHwxNzc0ODE5NDkzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Pediatric care"
                className="relative rounded-3xl shadow-2xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="bg-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {features.map((feature, index) => {
              const Icon = feature.icon;
              return (
                <Card
                  key={index}
                  className="text-center border-2 hover:border-[#5D17EA] transition-all hover:shadow-lg"
                >
                  <CardHeader>
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: `${feature.color}15` }}
                    >
                      <Icon
                        className="w-8 h-8"
                        style={{ color: feature.color }}
                      />
                    </div>
                    <CardTitle className="text-xl">{feature.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription className="text-base">
                      {feature.description}
                    </CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-[#111813]">
              ABOUT
            </h2>
            <h3 className="text-2xl sm:text-3xl mb-8 text-gray-700">
              Meet Jenny and Courtney
            </h3>
          </div>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Jenny and Courtney are both Licensed Child Life Specialists. They
              feel children and adults cope with life, death and commonly in
              acute and chronic illness, trauma, learning disability and the
              grief and loss that comes with it. For many years Jenny has been
              developing her skills while working as a Child Life Specialist for
              the Sunrise Community Health Center in Lafayette, Colorado.
            </p>
            <p>
              Growing up in Colorado with her family of 6, she learned many life
              skills including patience, empathy, compassion and unconditional
              love. Her passion for working with children began early on when
              her mother was diagnosed with Multiple Sclerosis (MS) when she was
              a teenager. Courtney has 10 years experience working as a Child
              Life Specialist at Children's Hospital Colorado. She brings an
              empathetic and therapeutic presence, eliciting therapeutic coping,
              possibly with handholding, close. She wishes to do this with all
              diagnosed mental health and are a therapist for a new while
              receiving her license as well. Some feel that is unethical and
              choose alternative children health solutions to help children
              through their medical experiences.
            </p>
            <p>
              Courtney holds an M.S in Human Relations, a B.S in Child
              Development and Family Studies, and is a B.A in Psychology. She
              also facilitates support groups for children, teens and
              parents/caregivers in Colorado focusing with a chronic diagnosis.
              She has 10+ years of experience working as a Child Life Specialist
              at Children's Hospital Colorado. She is now the experience working
              as a Child Life Specialist which both pioneering with community
              organizations to enhance the supportive environment for her
              patients. Courtney also enjoys teaching and mentoring graduate
              students as well as supervising interns and child life students at
              the collegiate level. Since moving to Colorado in 2022, she has
              enjoyed picnics in her backyard center and is excited to now serve
              the broader community who are invested in the emotional, social,
              and physical wellbeing of children and families navigating complex
              medical journeys.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#5D17EA] to-[#5F1F30] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl mb-6">Ready to Get Started?</h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Contact us today to learn more about how we can support your family
            through medical experiences.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
              variant="secondary"
              asChild
              className="text-lg bg-teal-600 hover:bg-teal-700"
            >
              <a
                href="https://achildsperspective-jm.clientsecure.me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Client Portal
              </a>
            </Button>
            <Button
              size="lg"
              variant="outline"
              asChild
              className="text-lg bg-white text-[#5D17EA] hover:bg-white/90"
            >
              <a
                href="https://achildsperspective-jm.clientsecure.me/"
                target="_blank"
                rel="noopener noreferrer"
              >
                Request appointment
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
