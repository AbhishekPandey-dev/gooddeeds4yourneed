import Link from "next/link";
import Image from "next/image";
import { ArrowRight, ShieldCheck, HeartPulse, Clock, Sparkles, CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/Animations";

export default function Home() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. ANIMATED HERO REVEAL with Asymmetry */}
      <section className="relative overflow-hidden pt-12 pb-24 lg:pt-24 lg:pb-32 bg-surface">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-navy/5 rounded-bl-[120px] -z-10" />
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="up">
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-semibold tracking-wide uppercase mb-8">
                <Sparkles size={16} />
                <span>Premium Home Care & Transport</span>
              </div>
              <h1 className="text-5xl lg:text-7xl font-semibold tracking-tight text-brand-navy leading-[1.05] mb-6">
                Compassionate Care, <br />
                <span className="text-brand-teal">When You Need It Most.</span>
              </h1>
              <p className="text-lg text-muted mb-10 max-w-xl leading-relaxed">
                Elevating home care through empathy, professionalism, and unyielding reliability. From daily sitting to dependable medical transportation, we treat your family like our own.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="/contact"
                  className="px-8 py-4 rounded-full bg-brand-navy text-white hover:bg-brand-teal transition-all shadow-ambient font-medium flex items-center justify-center group"
                >
                  <span>Request an Assessment</span>
                  <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
                <Link
                  href="/services"
                  className="px-8 py-4 rounded-full bg-white border border-border text-brand-navy hover:bg-surface-hover transition-colors font-medium flex items-center justify-center"
                >
                  Explore Services
                </Link>
              </div>
            </FadeIn>
            <FadeIn direction="left" delay={0.2}>
              <div className="relative h-[500px] lg:h-[600px] w-full rounded-3xl overflow-hidden glass-panel p-2 shadow-ambient">
                <div className="absolute inset-0 bg-brand-navy/10 z-10 rounded-2xl" />
                <div className="w-full h-full rounded-2xl bg-gray-200 overflow-hidden relative">
                   <div className="absolute inset-0 bg-gradient-to-tr from-brand-navy/40 to-transparent z-10" />
                   {/* Placeholder for real image */}
                   <div className="w-full h-full bg-[url('https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
                </div>
                
                {/* Floating Trust Card */}
                <div className="absolute bottom-8 left-8 z-20 bg-white/90 backdrop-blur-md p-6 rounded-2xl shadow-xl max-w-xs transform group-hover:-translate-y-2 transition-transform">
                  <div className="flex items-center space-x-4 mb-3">
                    <div className="w-12 h-12 rounded-full bg-brand-teal/20 flex items-center justify-center">
                      <ShieldCheck className="w-6 h-6 text-brand-teal" />
                    </div>
                    <div>
                      <h4 className="font-bold text-brand-navy">Fully Vetted</h4>
                      <p className="text-xs text-muted">Licensed & Insured</p>
                    </div>
                  </div>
                  <p className="text-sm text-muted font-medium">100% background-checked care professionals.</p>
                </div>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 2. TRUST REASSURANCE STRIP */}
      <section className="bg-brand-navy py-12">
        <div className="container mx-auto px-6 md:px-12">
          <StaggerChildren className="grid grid-cols-2 md:grid-cols-4 gap-8 divide-x divide-white/10 text-center">
            {[
              { label: "Families Served", value: "500+" },
              { label: "Care Professionals", value: "50+" },
              { label: "Satisfaction Rate", value: "99%" },
              { label: "Available Support", value: "24/7" }
            ].map((stat, i) => (
              <StaggerItem key={i}>
                <div className="flex flex-col items-center justify-center">
                  <span className="text-4xl md:text-5xl font-bold text-brand-teal mb-2">{stat.value}</span>
                  <span className="text-sm font-medium text-white/80 uppercase tracking-widest">{stat.label}</span>
                </div>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* 3. SERVICE HIGHLIGHTS (BENTO GRID) */}
      <section className="py-24 bg-surface-hover">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-5xl font-semibold text-brand-navy mb-6 tracking-tight">
              Holistic Support for <br/> Every Phase of Life.
            </h2>
            <p className="text-lg text-muted">
              We design specialized care plans and safe transit options tailored exactly to the needs of your loved ones, giving you complete peace of mind.
            </p>
          </FadeIn>

          <StaggerChildren className="grid md:grid-cols-3 gap-6">
            {/* Service 1 */}
            <StaggerItem className="card-lift bg-white rounded-3xl p-8 md:p-10 border border-border shadow-sm flex flex-col items-start relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-teal/5 rounded-bl-[100px] -z-10 group-hover:scale-125 transition-transform duration-500" />
              <div className="w-14 h-14 rounded-2xl bg-brand-navy/5 flex items-center justify-center mb-8 text-brand-navy">
                <HeartPulse size={28} />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Companion Care</h3>
              <p className="text-muted leading-relaxed mb-8 flex-grow">
                Compassionate professionals providing engaging social interaction, emotional support, and attentive supervision to prevent isolation.
              </p>
              <Link href="/services/companion-care" className="inline-flex items-center text-brand-teal font-semibold group-hover:underline">
                Explore Details <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </StaggerItem>

            {/* Service 2 */}
            <StaggerItem className="card-lift bg-brand-navy text-white rounded-3xl p-8 md:p-10 shadow-ambient flex flex-col items-start relative overflow-hidden group">
              <div className="absolute -bottom-10 -right-10 w-48 h-48 bg-white/5 rounded-full -z-10 group-hover:scale-110 transition-transform duration-500" />
              <div className="w-14 h-14 rounded-2xl bg-white/10 flex items-center justify-center mb-8 text-white">
                <Clock size={28} />
              </div>
              <h3 className="text-2xl font-bold mb-4">NEMT Transport</h3>
              <p className="text-gray-300 leading-relaxed mb-8 flex-grow">
                Safe, scheduled, and heavily vetted non-emergency medical transportation. Perfect for dialysis, appointments, and essential errands.
              </p>
              <Link href="/transportation" className="inline-flex items-center text-brand-teal font-semibold group-hover:underline">
                Book a Ride <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </StaggerItem>

            {/* Service 3 */}
            <StaggerItem className="card-lift bg-white rounded-3xl p-8 md:p-10 border border-border shadow-sm flex flex-col items-start relative overflow-hidden group">
              <div className="absolute top-0 right-0 w-32 h-32 bg-brand-accent/5 rounded-bl-[100px] -z-10 group-hover:scale-125 transition-transform duration-500" />
              <div className="w-14 h-14 rounded-2xl bg-brand-accent/10 flex items-center justify-center mb-8 text-brand-accent">
                <ShieldCheck size={28} />
              </div>
              <h3 className="text-2xl font-bold text-brand-navy mb-4">Respite Services</h3>
              <p className="text-muted leading-relaxed mb-8 flex-grow">
                Temporary, high-quality care relief designed specifically for family caregivers who need personal time to rest and recharge.
              </p>
              <Link href="/services/respite-care" className="inline-flex items-center text-brand-teal font-semibold group-hover:underline">
                Explore Details <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
              </Link>
            </StaggerItem>
          </StaggerChildren>
        </div>
      </section>

      {/* 4. PROCESS TIMELINE */}
      <section className="py-24 bg-surface border-y border-border">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn>
              <h2 className="text-3xl md:text-5xl font-semibold text-brand-navy mb-6 tracking-tight">
                Simple, Transparent, <br/> and Dignified.
              </h2>
              <p className="text-lg text-muted mb-10">
                We believe beginning care should relieve stress, not add to it. Our onboarding process is designed to be frictionless for families.
              </p>
              <div className="space-y-8">
                {[
                  { title: "Initial Consultation", desc: "A free, no-obligation meeting to discuss specific needs and constraints." },
                  { title: "Custom Care Plan", desc: "We design a personalized protocol tailored to your family's daily rhythms." },
                  { title: "Caregiver Matching", desc: "Pairing based on personality, medical requirements, and specific expertise." },
                  { title: "Ongoing Refinement", desc: "Continuous monitoring and adjustment of care as needs evolve over time." }
                ].map((step, idx) => (
                  <div key={idx} className="flex group">
                    <div className="flex flex-col items-center mr-6">
                      <div className="w-10 h-10 rounded-full bg-brand-teal/10 flex items-center justify-center text-brand-teal font-bold group-hover:bg-brand-teal group-hover:text-white transition-colors duration-300">
                        {idx + 1}
                      </div>
                      {idx !== 3 && <div className="w-0.5 h-full bg-border mt-2" />}
                    </div>
                    <div className="pb-8">
                      <h4 className="text-xl font-bold text-brand-navy mb-2">{step.title}</h4>
                      <p className="text-muted">{step.desc}</p>
                    </div>
                  </div>
                ))}
              </div>
            </FadeIn>
            <FadeIn direction="right" delay={0.2} className="hidden lg:block relative">
              <div className="w-full h-[700px] rounded-[40px] bg-gray-200 overflow-hidden relative shadow-ambient">
                 <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1584515933487-779824d29309?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale-[20%] hover:grayscale-0 transition-all duration-700" />
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 5. STRONG FINAL CTA */}
      <section className="py-24 bg-brand-teal relative overflow-hidden">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1604881988758-f76ad2f7aac1?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center mix-blend-overlay opacity-10" />
        <div className="container mx-auto px-6 md:px-12 relative z-10 text-center">
          <FadeIn>
            <h2 className="text-4xl md:text-6xl font-semibold text-white mb-6 tracking-tight">
              Ready for Peace of Mind?
            </h2>
            <p className="text-xl text-white/90 mb-10 max-w-2xl mx-auto font-medium">
              Connect with our care coordinators today. Find out how we can support your family's unique journey.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link
                href="/contact"
                className="px-8 py-4 rounded-full bg-white text-brand-navy hover:bg-surface-hover transition-colors font-bold text-lg flex items-center justify-center shadow-ambient"
              >
                Schedule Free Consultation
              </Link>
            </div>
          </FadeIn>
        </div>
      </section>
    </div>
  );
}
