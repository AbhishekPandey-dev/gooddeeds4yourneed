import Link from "next/link";
import Image from "next/image";
import { Mail, Phone, MapPin, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-brand-navy text-white pt-20 pb-8 mt-auto">
      <div className="container mx-auto px-6 md:px-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          {/* Brand Info */}
          <div className="space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <Image 
                src="/logo.svg" 
                alt="Logo" 
                width={48} 
                height={48} 
                className="h-10 md:h-12 w-auto object-contain" 
              />
              <span className="text-xl md:text-2xl font-bold tracking-tight text-white group-hover:text-brand-teal transition-colors">
                Good Deeds 4 Your Needs
              </span>
            </Link>
            <p className="text-gray-300 text-sm leading-relaxed max-w-sm">
              Compassionate home care, sitter care, and reliable non-emergency
              medical transportation. We treat every client like our own family.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              Quick Links
              <span className="ml-3 w-12 h-[1px] bg-brand-teal/30 block"></span>
            </h4>
            <ul className="space-y-4">
              {["About Us", "Our Services", "Transportation", "FAQ", "Contact"].map((item) => (
                <li key={item}>
                  <Link
                    href={`/${item.toLowerCase().replace(" ", "-").replace("our-", "")}`}
                    className="text-gray-300 hover:text-brand-teal transition-colors text-sm flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal/0 group-hover:bg-brand-teal mr-2 transition-all"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              Core Services
              <span className="ml-3 w-12 h-[1px] bg-brand-teal/30 block"></span>
            </h4>
            <ul className="space-y-4">
              {[
                "Companion Care",
                "Sitter Services",
                "Respite Care",
                "Medical Transportation",
                "Errand Assistance",
              ].map((item) => (
                <li key={item}>
                  <Link
                    href="/services"
                    className="text-gray-300 hover:text-brand-teal transition-colors text-sm flex items-center group"
                  >
                    <span className="w-1.5 h-1.5 rounded-full bg-brand-teal/0 group-hover:bg-brand-teal mr-2 transition-all"></span>
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div>
            <h4 className="text-lg font-semibold mb-6 flex items-center">
              Reach Out
              <span className="ml-3 w-12 h-[1px] bg-brand-teal/30 block"></span>
            </h4>
            <ul className="space-y-5">
              <li className="flex items-start text-sm text-gray-300 group">
                <Phone className="w-5 h-5 text-brand-teal mr-3 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="block font-medium text-white mb-1">Call Us</span>
                  <a href="tel:+15551234567" className="hover:text-brand-teal transition-colors">
                    (555) 123-4567
                  </a>
                </div>
              </li>
              <li className="flex items-start text-sm text-gray-300 group">
                <Mail className="w-5 h-5 text-brand-teal mr-3 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="block font-medium text-white mb-1">Email Us</span>
                  <a href="mailto:care@gooddeeds4yourneeds.com" className="hover:text-brand-teal transition-colors">
                    care@gooddeeds4yourneeds.com
                  </a>
                </div>
              </li>
              <li className="flex items-start text-sm text-gray-300 group">
                <MapPin className="w-5 h-5 text-brand-teal mr-3 shrink-0 mt-0.5 group-hover:scale-110 transition-transform" />
                <div>
                  <span className="block font-medium text-white mb-1">Office</span>
                  <span>123 Caregiving Way<br/>Local City, ST 12345</span>
                </div>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/10 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-xs text-gray-400">
            &copy; {new Date().getFullYear()} Good Deeds 4 Your Needs. All rights reserved.
          </p>
          <div className="flex items-center text-xs text-gray-400">
            Made with <Heart className="w-3 h-3 text-brand-teal mx-1" fill="currentColor" /> for families.
          </div>
        </div>
      </div>
    </footer>
  );
}
