import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { 
  Stethoscope, 
  Syringe, 
  Activity, 
  Brain, 
  Apple, 
  Heart,
  Baby,
  Smile,
  Calendar
} from "lucide-react";

export function Services() {
  const services = [
    {
      icon: Stethoscope,
      title: "Well-Child Visits",
      description: "Comprehensive check-ups to monitor your child's growth, development, and overall health at every stage.",
      features: [
        "Physical examinations",
        "Growth tracking",
        "Developmental milestones assessment",
        "Parent education and guidance",
      ],
      color: "#5D17EA",
    },
    {
      icon: Syringe,
      title: "Immunizations",
      description: "Complete vaccination services following recommended schedules to protect your child from preventable diseases.",
      features: [
        "Age-appropriate vaccines",
        "Travel immunizations",
        "Vaccine education",
        "Immunization records",
      ],
      color: "#CE5374",
    },
    {
      icon: Activity,
      title: "Sick Visits",
      description: "Prompt diagnosis and treatment for acute illnesses and injuries with same-day appointments available.",
      features: [
        "Common childhood illnesses",
        "Infections and injuries",
        "Chronic condition management",
        "Follow-up care",
      ],
      color: "#5F1F30",
    },
    {
      icon: Brain,
      title: "Behavioral Health",
      description: "Assessment and support for developmental, behavioral, and mental health concerns.",
      features: [
        "ADHD evaluations",
        "Anxiety and depression screening",
        "Behavioral counseling",
        "Developmental assessments",
      ],
      color: "#5D17EA",
    },
    {
      icon: Apple,
      title: "Nutrition Counseling",
      description: "Expert guidance on nutrition, feeding issues, and healthy eating habits for growing children.",
      features: [
        "Weight management",
        "Feeding difficulties",
        "Food allergies",
        "Healthy eating plans",
      ],
      color: "#CE5374",
    },
    {
      icon: Heart,
      title: "Chronic Care",
      description: "Ongoing management and support for children with chronic health conditions.",
      features: [
        "Asthma management",
        "Diabetes care",
        "Allergy treatment",
        "Coordinated care plans",
      ],
      color: "#5F1F30",
    },
    {
      icon: Baby,
      title: "Newborn Care",
      description: "Specialized care for newborns including first exams, feeding support, and newborn screenings.",
      features: [
        "First well-baby visit",
        "Breastfeeding support",
        "Newborn screenings",
        "Jaundice monitoring",
      ],
      color: "#5D17EA",
    },
    {
      icon: Smile,
      title: "Preventive Care",
      description: "Proactive health maintenance including screenings, health education, and preventive counseling.",
      features: [
        "Vision and hearing screenings",
        "Lead testing",
        "Health education",
        "Safety counseling",
      ],
      color: "#CE5374",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#5D17EA] to-[#CE5374] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl mb-6">Our Services</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90">
            Comprehensive pediatric care designed to support your child's health and development 
            from infancy through adolescence.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-2 hover:border-[#5D17EA] transition-all hover:shadow-xl">
                  <CardHeader>
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${service.color}15` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: service.color }} />
                    </div>
                    <CardTitle className="text-xl">{service.title}</CardTitle>
                    <CardDescription className="text-base">{service.description}</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-2">
                      {service.features.map((feature, featureIndex) => (
                        <li key={featureIndex} className="flex items-start gap-2 text-sm text-gray-700">
                          <span className="text-[#5D17EA] mt-1">•</span>
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Additional Services */}
      <section className="py-20 bg-[#DDF0FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4 text-[#111813]">Additional Services</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We also offer specialized services to meet your family's unique needs.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <Card>
              <CardHeader>
                <CardTitle>Telemedicine</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Virtual consultations for non-emergency concerns, follow-up appointments, 
                  and medical advice from the comfort of your home.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>After-Hours Care</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Extended hours and on-call support for urgent medical concerns outside 
                  regular office hours.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle>School & Sports Physicals</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Complete physical examinations required for school enrollment, 
                  sports participation, and camp attendance.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl mb-6 text-[#111813]">Need to Schedule an Appointment?</h2>
          <p className="text-lg text-gray-600 mb-8">
            Our team is ready to provide the care your child deserves. Book your appointment today.
          </p>
          <Button size="lg" asChild className="text-lg">
            <a
              href="https://achildsperspective-jm.clientsecure.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Book Appointment
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
