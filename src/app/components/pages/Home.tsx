import { Link } from "react-router";
import { Button } from "../ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "../ui/card";
import { Heart, Users, Clock, Shield, Calendar, Phone, CheckCircle } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function Home() {
  const services = [
    {
      icon: Heart,
      title: "Comprehensive Care",
      description: "From routine check-ups to specialized treatments, we provide complete pediatric care.",
      color: "#CE5374",
    },
    {
      icon: Users,
      title: "Expert Team",
      description: "Our experienced pediatricians are dedicated to your child's health and wellbeing.",
      color: "#5D17EA",
    },
    {
      icon: Clock,
      title: "Flexible Hours",
      description: "Extended hours and weekend appointments to fit your family's schedule.",
      color: "#5F1F30",
    },
    {
      icon: Shield,
      title: "Safe Environment",
      description: "Modern, child-friendly facilities designed with safety and comfort in mind.",
      color: "#CE5374",
    },
  ];

  const stats = [
    { number: "15+", label: "Years Experience" },
    { number: "5000+", label: "Happy Families" },
    { number: "10+", label: "Specialist Doctors" },
    { number: "24/7", label: "Emergency Support" },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#DDF0FF] via-white to-[#DDF0FF] overflow-hidden">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 lg:py-28">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl sm:text-5xl lg:text-6xl mb-6 text-[#111813]">
                Guiding Children Through Medical Experiences
              </h1>
              <p className="text-lg sm:text-xl text-gray-700 mb-8">
                Providing compassionate, comprehensive pediatric care in a warm, welcoming environment. 
                Your child's health and happiness are our top priorities.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
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
                <Button size="lg" variant="outline" asChild className="text-lg">
                  <Link to="/services">Learn More</Link>
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

      {/* Stats Section */}
      <section className="bg-[#5D17EA] text-white py-16">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="text-4xl sm:text-5xl mb-2">{stat.number}</div>
                <div className="text-sm sm:text-base opacity-90">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl sm:text-4xl mb-4 text-[#111813]">Why Choose Us</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We're committed to providing exceptional pediatric care that puts your child first.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {services.map((service, index) => {
              const Icon = service.icon;
              return (
                <Card key={index} className="border-2 hover:border-[#5D17EA] transition-all hover:shadow-lg">
                  <CardHeader>
                    <div
                      className="w-12 h-12 rounded-full flex items-center justify-center mb-4"
                      style={{ backgroundColor: `${service.color}20` }}
                    >
                      <Icon className="w-6 h-6" style={{ color: service.color }} />
                    </div>
                    <CardTitle>{service.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <CardDescription>{service.description}</CardDescription>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Services Overview */}
      <section className="py-20 bg-[#DDF0FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div className="order-2 lg:order-1">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1763294905876-2c1a41ddfd64?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwc3RldGhvc2NvcGUlMjBwZWRpYXRyaWMlMjBjYXJlfGVufDF8fHx8MTc3NDgxOTQ5NHww&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Medical care"
                className="rounded-3xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
            <div className="order-1 lg:order-2">
              <h2 className="text-3xl sm:text-4xl mb-6 text-[#111813]">Our Services</h2>
              <p className="text-lg text-gray-700 mb-6">
                We offer a comprehensive range of pediatric services to meet all your child's healthcare needs.
              </p>
              <ul className="space-y-4">
                {[
                  "Well-child visits and developmental screenings",
                  "Immunizations and vaccinations",
                  "Treatment of acute and chronic illnesses",
                  "Behavioral and developmental assessments",
                  "Nutritional counseling and guidance",
                  "Sports physicals and school health forms",
                ].map((item, index) => (
                  <li key={index} className="flex items-start gap-3">
                    <CheckCircle className="w-6 h-6 text-[#5D17EA] flex-shrink-0 mt-0.5" />
                    <span className="text-gray-700">{item}</span>
                  </li>
                ))}
              </ul>
              <Button asChild className="mt-8" size="lg">
                <Link to="/services">View All Services</Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#5F1F30] to-[#CE5374] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl mb-6">Ready to Get Started?</h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Schedule your child's appointment today and experience compassionate, expert care.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Button size="lg" variant="secondary" asChild className="text-lg">
              <a
                href="https://achildsperspective-jm.clientsecure.me/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-2"
              >
                <Calendar className="w-5 h-5" />
                Book Online
              </a>
            </Button>
            <Button size="lg" variant="outline" asChild className="text-lg bg-white text-[#5F1F30] hover:bg-white/90">
              <a href="tel:876-555-0123" className="flex items-center justify-center gap-2">
                <Phone className="w-5 h-5" />
                Call Us
              </a>
            </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
