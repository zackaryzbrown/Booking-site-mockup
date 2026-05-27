import { Link } from "react-router";
import {
  Phone,
  Mail,
  MapPin,
  Facebook,
  Instagram,
  Twitter,
} from "lucide-react";
import logo from "../../assets/674b34251838c945db6ae67257852cc2d831f5e7.png";

export function Footer() {
  return (
    <footer className="bg-[#111813] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo and Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="inline-block bg-white px-4 py-2 rounded-lg mb-4">
              <img src={logo} alt="A Child's Perspective" className="h-12" />
            </div>
            <p className="text-gray-300 mb-4">
              Licensed Child Life Specialists guiding children, teens, and
              families through medical experiences with compassion and
              expertise.
            </p>
            <div className="flex space-x-4">
              <a
                href="#"
                className="text-gray-300 hover:text-[#CE5374] transition-colors"
              >
                <Facebook className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#CE5374] transition-colors"
              >
                <Instagram className="w-5 h-5" />
              </a>
              <a
                href="#"
                className="text-gray-300 hover:text-[#CE5374] transition-colors"
              >
                <Twitter className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="mb-4 text-[#CE5374]">Quick Links</h3>
            <ul className="space-y-2">
              <li>
                <Link
                  to="/"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Home
                </Link>
              </li>
              <li>
                <Link
                  to="/services"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  to="/about"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  to="/contact"
                  className="text-gray-300 hover:text-white transition-colors"
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="mb-4 text-[#CE5374]">Contact Us</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-2 text-gray-300">
                <Mail className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a
                  href="mailto:info@achildsperspective.com"
                  className="hover:text-white transition-colors"
                >
                  info@achildsperspective.com
                </a>
              </li>
              <li className="flex items-start gap-2 text-gray-300">
                <MapPin className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <a
                  href="https://maps.google.com/?q=1603+28th+St+1100+Boulder+CO+80302"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="hover:text-white transition-colors"
                >
                  <div>Boulder Healing Hub</div>
                  <div>1603 28th St, #1100</div>
                  <div>Boulder, CO 80302-2455</div>
                </a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-700 mt-8 pt-8 text-center text-gray-400">
          <p>
            &copy; {new Date().getFullYear()} A Child's Perspective. All rights
            reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
