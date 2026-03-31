import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Award, Users, Heart, Star, Calendar } from "lucide-react";
import { ImageWithFallback } from "../figma/ImageWithFallback";

export function About() {
  const values = [
    {
      icon: Heart,
      title: "Compassionate Care",
      description: "We treat every child with kindness, empathy, and respect, ensuring they feel safe and comfortable.",
    },
    {
      icon: Award,
      title: "Excellence",
      description: "Our team maintains the highest standards of medical care through continuous education and training.",
    },
    {
      icon: Users,
      title: "Family-Centered",
      description: "We partner with families to make informed decisions about their children's health and wellbeing.",
    },
    {
      icon: Star,
      title: "Trust",
      description: "Building lasting relationships based on trust, transparency, and open communication.",
    },
  ];

  const team = [
    {
      name: "Dr. Sarah Johnson",
      role: "Pediatrician & Founder",
      specialty: "General Pediatrics",
      image: "https://images.unsplash.com/photo-1615462696310-09736533dbb8?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxoYXBweSUyMGNoaWxkJTIwcGF0aWVudCUyMGRvY3RvcnxlbnwxfHx8fDE3NzQ4MTk0OTR8MA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Dr. Michael Chen",
      role: "Pediatrician",
      specialty: "Developmental Pediatrics",
      image: "https://images.unsplash.com/photo-1758206523745-1f334f702660?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtZWRpY2FsJTIwdGVhbSUyMHBlZGlhdHJpY3N8ZW58MXx8fHwxNzc0ODE5NDk1fDA&ixlib=rb-4.1.0&q=80&w=1080",
    },
    {
      name: "Dr. Emily Williams",
      role: "Pediatrician",
      specialty: "Adolescent Medicine",
      image: "https://images.unsplash.com/photo-1763294905837-7cc04ece85ca?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxjaGlsZCUyMHBsYXlpbmclMjB0aGVyYXB5fGVufDF8fHx8MTc3NDgxOTQ5NXww&ixlib=rb-4.1.0&q=80&w=1080",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#CE5374] to-[#5F1F30] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl mb-6">About Us</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90">
            Dedicated to providing exceptional pediatric care with compassion, expertise, and a 
            child-centered approach.
          </p>
        </div>
      </section>

      {/* Mission Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl sm:text-4xl mb-6 text-[#111813]">Our Mission</h2>
              <p className="text-lg text-gray-700 mb-6">
                At A Child's Perspective, we believe every child deserves access to high-quality, 
                compassionate healthcare. Our mission is to guide children and their families through 
                medical experiences with care, expertise, and understanding.
              </p>
              <p className="text-lg text-gray-700 mb-6">
                We strive to create a welcoming environment where children feel safe and parents feel 
                supported. Through comprehensive care, preventive medicine, and patient education, we 
                help families make informed decisions about their children's health.
              </p>
              <p className="text-lg text-gray-700">
                Our commitment extends beyond treating illness—we focus on nurturing healthy development, 
                building strong relationships, and empowering families to raise happy, healthy children.
              </p>
            </div>
            <div>
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1758691463080-30a990ef61bb?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxwZWRpYXRyaWMlMjBkb2N0b3IlMjBjaGlsZCUyMGNoZWNrdXB8ZW58MXx8fHwxNzc0ODE5NDkzfDA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="Pediatric care team"
                className="rounded-3xl shadow-xl w-full h-[500px] object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-[#DDF0FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4 text-[#111813]">Our Values</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              The principles that guide everything we do.
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

      {/* Team Section */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl sm:text-4xl mb-4 text-[#111813]">Meet Our Team</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              Our experienced pediatricians are committed to your child's health and wellbeing.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <Card key={index} className="overflow-hidden hover:shadow-xl transition-shadow">
                <ImageWithFallback
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <CardHeader>
                  <CardTitle>{member.name}</CardTitle>
                  <p className="text-[#5D17EA]">{member.role}</p>
                  <p className="text-sm text-gray-600">{member.specialty}</p>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* History Section */}
      <section className="py-20 bg-[#DDF0FF]">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl mb-8 text-[#111813] text-center">Our Story</h2>
          <div className="space-y-6 text-lg text-gray-700">
            <p>
              A Child's Perspective was founded in 2009 with a simple yet powerful vision: to provide 
              pediatric care that truly sees the world from a child's perspective. Dr. Sarah Johnson, 
              inspired by her own experiences as both a mother and a pediatrician, wanted to create a 
              practice that combined medical excellence with genuine compassion.
            </p>
            <p>
              Over the years, we've grown from a small practice to a comprehensive pediatric center, 
              serving thousands of families in our community. Despite our growth, we've maintained our 
              commitment to personalized care, ensuring every child receives the attention and support 
              they deserve.
            </p>
            <p>
              Today, A Child's Perspective continues to evolve, incorporating the latest medical advances 
              while staying true to our core values of compassion, excellence, and family-centered care. 
              We're honored to be trusted partners in your child's health journey.
            </p>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-br from-[#5D17EA] to-[#CE5374] text-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl sm:text-4xl mb-6">Join Our Family</h2>
          <p className="text-lg sm:text-xl mb-8 opacity-90">
            Experience the difference that compassionate, expert care can make.
          </p>
          <Button size="lg" variant="secondary" asChild className="text-lg">
            <a
              href="https://achildsperspective-jm.clientsecure.me/"
              target="_blank"
              rel="noopener noreferrer"
              className="flex items-center justify-center gap-2"
            >
              <Calendar className="w-5 h-5" />
              Schedule Your First Visit
            </a>
          </Button>
        </div>
      </section>
    </div>
  );
}
