"use client";

import Link from "next/link";
import { ArrowRight, HeartHandshake, Car, Activity, Home } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/Animations";

const services = [
  {
    id: "companion-care",
    icon: HeartHandshake,
    title: "Companion & Sitter Care",
    shortDesc: "Engaging social interaction, emotional support, and attentive supervision to prevent isolation.",
    benefits: ["Meal Preparation", "Light Housekeeping", "Social Engagement", "Medication Reminders"],
    color: "brand-teal"
  },
  {
    id: "respite-care",
    icon: Home,
    title: "Respite Services",
    shortDesc: "Temporary, high-quality care relief designed specifically for family caregivers who need personal time.",
    benefits: ["Flexible Scheduling", "Emergency Cover", "Peace of Mind", "Seamless Continuity"],
    color: "brand-navy"
  },
  {
    id: "transportation",
    icon: Car,
    title: "Non-Emergency Medical Transport",
    shortDesc: "Safe, scheduled, and heavily vetted transportation. Perfect for dialysis, appointments, and errands.",
    benefits: ["Wheelchair Accessible (if requested)", "Door-to-Door Service", "Punctual & Reliable", "Safety Vetted Drivers"],
    color: "brand-accent",
    href: "/transportation" // Dedicated page
  },
  {
    id: "errand-assistance",
    icon: Activity,
    title: "Errand Assistance",
    shortDesc: "Help with grocery shopping, prescription pickups, and general daily operational tasks outside the home.",
    benefits: ["Grocery Shopping", "Pharmacy Runs", "Post Office / Bank", "Organized Delivery"],
    color: "gray-500"
  }
];

export default function ServicesPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-surface text-center">
        <div className="container mx-auto px-6 md:px-12 max-w-3xl">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight text-brand-navy">
              Comprehensive Care. <br/> <span className="text-brand-teal">Tailored for You.</span>
            </h1>
            <p className="text-lg md:text-xl text-muted leading-relaxed">
              Explore our range of premium services, designed to provide dignity, safety, and comfort for individuals while giving complete peace of mind to their families.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* Services Grid */}
      <section className="py-16 md:py-24 bg-surface-hover border-t border-border">
        <div className="container mx-auto px-6 md:px-12">
          <StaggerChildren className="space-y-12">
            {services.map((service, idx) => (
              <StaggerItem key={service.id}>
                <div className="bg-white rounded-[2rem] border border-border shadow-sm p-8 md:p-12 flex flex-col lg:flex-row gap-12 items-center group card-lift hover:border-brand-teal/20 transition-all">
                  
                  {/* Icon Block */}
                  <div className={`w-24 h-24 lg:w-32 lg:h-32 rounded-3xl bg-surface-hover flex items-center justify-center shrink-0`}>
                    <service.icon className={`w-12 h-12 lg:w-16 lg:h-16 text-${service.color}`} />
                  </div>
                  
                  {/* Content Block */}
                  <div className="flex-grow text-center lg:text-left">
                    <h2 className="text-2xl md:text-3xl font-bold text-brand-navy mb-4 group-hover:text-brand-teal transition-colors">
                      {service.title}
                    </h2>
                    <p className="text-muted text-lg mb-6 max-w-2xl">
                      {service.shortDesc}
                    </p>
                    
                    {/* Benefits List */}
                    <div className="flex flex-wrap justify-center lg:justify-start gap-3 mb-8">
                      {service.benefits.map((benefit, i) => (
                        <span key={i} className="px-4 py-1.5 rounded-full bg-brand-navy/5 text-brand-navy text-sm font-medium">
                          {benefit}
                        </span>
                      ))}
                    </div>
                  </div>
                  
                  {/* CTA Block */}
                  <div className="shrink-0">
                    <Link
                      href={service.href || `/services/${service.id}`}
                      className="inline-flex items-center justify-center space-x-2 px-8 py-4 rounded-full bg-brand-navy text-white hover:bg-brand-teal transition-all font-medium md:w-auto w-full group/btn"
                    >
                      <span>View Details</span>
                      <ArrowRight size={18} className="group-hover/btn:translate-x-1 transition-transform" />
                    </Link>
                  </div>

                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>
      
      {/* CTA Layer */}
      <section className="py-20 bg-brand-navy text-center">
          <FadeIn>
             <h2 className="text-3xl text-white font-semibold mb-6">Unsure which service fits your needs?</h2>
             <Link href="/contact" className="px-8 py-3 bg-white text-brand-navy rounded-full font-medium hover:bg-surface-hover transition-colors inline-block">
                Speak with a Care Expert
             </Link>
          </FadeIn>
      </section>
    </div>
  );
}
