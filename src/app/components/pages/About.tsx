import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Award, Users, Heart, Star } from "lucide-react";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description:
        "We treat every child and family with kindness, empathy, and respect, ensuring they feel safe and supported.",
    },
    {
      icon: Award,
      title: "Expertise",
      description:
        "Licensed Child Life Specialists with years of experience in helping children navigate medical experiences.",
    },
    {
      icon: Users,
      title: "Family-Centered",
      description:
        "We partner with families, supporting both children and caregivers through challenging medical journeys.",
    },
    {
      icon: Star,
      title: "Individualized Approach",
      description:
        "Age-appropriate and developmentally-tailored support for each unique child and situation.",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#CE5374] to-[#5F1F30] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">ABOUT</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90">
            Meet Jenny and Courtney, Licensed Child Life Specialists dedicated
            to helping children and families through medical experiences.
          </p>
        </div>
      </section>

      {/* Meet Jenny and Courtney */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#111813]">
            Meet Jenny and Courtney
          </h2>
          <div className="max-w-4xl mx-auto space-y-6 text-lg text-gray-700 leading-relaxed">
            <p>
              Jenny and Courtney are both Licensed Child Life Specialists. They
              help children and adults cope with life, death and commonly in
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
              possibly with handholding close. She wishes to do this with all
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

      {/* Values Section */}
      <section className="py-20 bg-[#DDF0FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4 text-[#111813]">
              Our Values
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide our work with children and families.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {values.map((value, index) => {
              const Icon = value.icon;
              return (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="w-16 h-16 rounded-full bg-[#5D17EA]/10 flex items-center justify-center mx-auto mb-4">
                      <Icon className="w-8 h-8 text-[#5D17EA]" />
                    </div>
                    <CardTitle>{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-gray-700">{value.description}</p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#5D17EA] to-[#CE5374] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl mb-6">Ready to Connect?</h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Reach out to learn more about how we can support your family.
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
                Request Appointment
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
