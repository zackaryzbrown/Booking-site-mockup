import { Card, CardContent, CardHeader, CardTitle } from "../ui/card";
import { Button } from "../ui/button";
import { Input } from "../ui/input";
import { Textarea } from "../ui/textarea";
import { Label } from "../ui/label";
import { Phone, Mail, MapPin, Clock, Calendar } from "lucide-react";
import { useState } from "react";

export function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Mock form submission
    alert("Thank you for your message! We'll get back to you soon.");
    setFormData({ name: "", email: "", phone: "", message: "" });
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const contactInfo = [
    {
      icon: Phone,
      title: "Phone",
      details: ["Contact for phone number", "Call us for inquiries"],
      link: "tel:303-555-0123",
      color: "#5D17EA",
    },
    {
      icon: Mail,
      title: "Email",
      details: ["info@achildsperspective.com", "We'll respond within 24 hours"],
      link: "mailto:info@achildsperspective.com",
      color: "#CE5374",
    },
    {
      icon: MapPin,
      title: "Location",
      details: [
        "Boulder Healing Hub",
        "1603 28th St, #1100, Boulder, CO 80302-2455",
      ],
      link: "https://maps.google.com/?q=1603+28th+St+1100+Boulder+CO+80302",
      color: "#5F1F30",
    },
    {
      icon: Clock,
      title: "Hours",
      details: ["By Appointment Only", "Contact us to schedule"],
      link: null,
      color: "#5D17EA",
    },
  ];

  return (
    <div>
      {/* Hero Section */}
      <section className="bg-gradient-to-br from-[#5D17EA] to-[#5F1F30] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl sm:text-5xl mb-6">CONTACT</h1>
          <p className="text-lg sm:text-xl max-w-3xl mx-auto opacity-90">
            Get in touch with us to learn more about our services or to schedule
            an appointment.
          </p>
        </div>
      </section>

      {/* Contact Info Cards */}
      <section className="py-20 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
            {contactInfo.map((info, index) => {
              const Icon = info.icon;
              return (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div
                      className="w-16 h-16 rounded-full flex items-center justify-center mx-auto mb-4"
                      style={{ backgroundColor: `${info.color}15` }}
                    >
                      <Icon className="w-8 h-8" style={{ color: info.color }} />
                    </div>
                    <CardTitle>{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    {info.link ? (
                      <a
                        href={info.link}
                        className="block space-y-1 hover:text-[#5D17EA] transition-colors"
                        target={
                          info.title === "Location" ? "_blank" : undefined
                        }
                        rel={
                          info.title === "Location"
                            ? "noopener noreferrer"
                            : undefined
                        }
                      >
                        <p className="text-gray-700 font-medium">
                          {info.details[0]}
                        </p>
                        <p className="text-sm text-gray-600">
                          {info.details[1]}
                        </p>
                      </a>
                    ) : (
                      <div className="space-y-1">
                        <p className="text-gray-700">{info.details[0]}</p>
                        <p className="text-sm text-gray-500">
                          {info.details[1]}
                        </p>
                      </div>
                    )}
                  </CardContent>
                </Card>
              );
            })}
          </div>

          {/* Contact Form and Book Appointment */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardHeader>
                <CardTitle className="text-2xl">Send Us a Message</CardTitle>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      placeholder="Your name"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      placeholder="your.email@example.com"
                      required
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="phone">Phone</Label>
                    <Input
                      id="phone"
                      name="phone"
                      type="tel"
                      value={formData.phone}
                      onChange={handleChange}
                      placeholder="(876) 555-0123"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="message">Message</Label>
                    <Textarea
                      id="message"
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="How can we help you?"
                      rows={5}
                      required
                    />
                  </div>
                  <Button type="submit" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Book Appointment Card */}
            <div className="space-y-6">
              <Card className="bg-gradient-to-br from-[#CE5374] to-[#5F1F30] text-white border-0">
                <CardHeader>
                  <CardTitle className="text-2xl">
                    Book an Appointment
                  </CardTitle>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-lg opacity-90">
                    Ready to schedule a visit? Use our secure online booking
                    system to find a time that works for your family.
                  </p>
                  <ul className="space-y-2">
                    <li className="flex items-start gap-2">
                      <span className="text-white mt-1">✓</span>
                      <span>View available appointments in real-time</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white mt-1">✓</span>
                      <span>Choose your preferred doctor</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white mt-1">✓</span>
                      <span>Receive appointment reminders</span>
                    </li>
                    <li className="flex items-start gap-2">
                      <span className="text-white mt-1">✓</span>
                      <span>Complete forms online before your visit</span>
                    </li>
                  </ul>
                  <Button
                    size="lg"
                    variant="secondary"
                    asChild
                    className="w-full text-lg"
                  >
                    <a
                      href="https://achildsperspective-jm.clientsecure.me/"
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center justify-center gap-2"
                    >
                      <Calendar className="w-5 h-5" />
                      Book Online Now
                    </a>
                  </Button>
                </CardContent>
              </Card>

              <Card className="bg-[#DDF0FF] border-[#5D17EA]">
                <CardHeader>
                  <CardTitle className="text-xl">New Patient?</CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-gray-700 mb-4">
                    Welcome! We're excited to meet you and your family. Before
                    your first visit, please download and complete our new
                    patient forms.
                  </p>
                  <Button variant="outline" className="w-full">
                    Download Forms
                  </Button>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-20 bg-[#DDF0FF]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-8">
            <h2 className="text-3xl sm:text-4xl mb-4 text-[#111813]">
              Find Us
            </h2>
            <p className="text-lg text-gray-600">
              Visit us at our convenient Kingston location.
            </p>
          </div>
          <div className="bg-gray-200 rounded-3xl h-96 flex items-center justify-center">
            <p className="text-gray-600">
              Map placeholder - Google Maps integration would go here
            </p>
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <section className="py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className="text-3xl sm:text-4xl mb-8 text-[#111813] text-center">
            Frequently Asked Questions
          </h2>
          <div className="space-y-6">
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  What should I bring to my first appointment?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  Please bring your insurance card, a photo ID, completed new
                  patient forms, your child's immunization records, and a list
                  of any current medications.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  Do you accept walk-ins?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  While we prefer scheduled appointments to ensure the best
                  care, we do accept walk-ins for urgent matters based on
                  availability. Please call ahead if possible.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader>
                <CardTitle className="text-lg">
                  What insurance plans do you accept?
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-gray-700">
                  We accept most major insurance plans. Please contact our
                  office to verify if we accept your specific plan.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>
    </div>
  );
}
