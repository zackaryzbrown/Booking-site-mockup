import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "../ui/card";
import { Button } from "../ui/button";

export function Services() {
  const services = [
    "Child or Adolescent",
    "Sibling Support",
    "Parental Support",
    "Medical Procedure Education & Prep",
    "Coping Skills",
    "Acute and Chronic Illness",
    "Trauma",
    "Behavioral Issues",
    "Grief",
    "Anticipatory Grief",
    "Supervision Anxiety",
    "Peer Relationships",
    "School Re-Entry",
  ];

  const approaches = [
    "Age Appropriate Intervention",
    "Developmentally Appropriate Intervention",
    "Medical Play",
    "Normalization",
    "Psychoeducation",
    "Procedural Preparation",
    "Therapeutic Art Activities",
    "Sandtwork",
    "Behavior Modification",
    "Compassion Focused",
    "Cognitive Behavioral",
    "Therapeutic Puppetry",
  ];

  const fees = [
    { service: "Initial Phone Consultation", price: "$0" },
    {
      service: "30 minute Individual Session - Child Assessment",
      price: "$85",
    },
    { service: "1 hour Single Session - Child or Caregiver", price: "$145" },
    { service: "1 hour Single Session - Paired Caregiver", price: "$145" },
    { service: "1 hour Group Session - Paired Caregiver", price: "$185" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#5D17EA] to-[#CE5374] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl font-bold mb-6">SERVICES</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90">
            Comprehensive child life specialist services designed to support
            children, teens, and families through medical experiences.
          </p>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {services.map((service, index) => (
              <div
                key={index}
                className="bg-[#5D17EA] text-white px-6 py-4 rounded-lg text-center font-medium hover:bg-[#5D17EA]/90 transition-colors"
              >
                {service}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Approaches Section */}
      <section className="py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center text-[#111813]">
            APPROACHES
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
            {approaches.map((approach, index) => (
              <div
                key={index}
                className="bg-white border-2 border-gray-200 px-6 py-4 rounded-lg text-center hover:border-[#5D17EA] transition-colors"
              >
                {approach}
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Fees Section */}
      <section className="py-20 bg-[#5D17EA] text-white">
        <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl font-bold mb-12 text-center">
            FEES
          </h2>
          <Card className="bg-white/10 border-white/20 backdrop-blur">
            <CardContent className="p-0">
              <div className="divide-y divide-white/20">
                {fees.map((fee, index) => (
                  <div
                    key={index}
                    className="flex justify-between items-center px-6 sm:px-8 py-6 hover:bg-white/5 transition-colors"
                  >
                    <span className="text-lg font-medium">{fee.service}</span>
                    <span className="text-2xl font-bold">{fee.price}</span>
                  </div>
                ))}
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl font-bold mb-6 text-[#111813]">
            Ready to Schedule?
          </h2>
          <p className="text-lg text-gray-700 mb-8">
            Contact us today to learn more about our services or to schedule an
            appointment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button
              size="lg"
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
            <Button size="lg" variant="outline" asChild className="text-lg">
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
