import Image from "next/image";
import Link from "next/link";
import { CheckCircle2, Heart, Shield, Users } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/Animations";

export const metadata = {
  title: "About Us | Good Deeds 4 Your Needs",
  description: "Learn about our mission, values, and philosophy of care.",
};

export default function AboutPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* 1. Page Header */}
      <section className="pt-24 pb-16 md:pt-32 md:pb-24 bg-brand-navy text-white relative overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-brand-teal/10 rounded-bl-[120px] -z-10" />
        <div className="container mx-auto px-6 md:px-12 text-center max-w-4xl">
          <FadeIn>
            <h1 className="text-4xl md:text-6xl font-semibold mb-6 tracking-tight">
              Driven by Compassion. <br/> <span className="text-brand-teal text-opacity-90">Defined by Trust.</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-300 leading-relaxed max-w-2xl mx-auto">
              We are more than an agency. We are an extension of your family, dedicated to bringing safety, dignity, and joy into the homes of those we serve.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* 2. Editorial Story Section */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
            <FadeIn direction="right">
              <div className="relative h-[600px] w-full rounded-2xl overflow-hidden glass-panel p-2 shadow-ambient">
                 <div className="w-full h-full rounded-xl bg-gray-200 overflow-hidden relative">
                   <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1544027993-37dbfe435520?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center" />
                 </div>
              </div>
            </FadeIn>
            <FadeIn delay={0.2}>
              <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-teal/10 text-brand-teal text-sm font-semibold tracking-wide uppercase mb-6">
                Our Story
              </div>
              <h2 className="text-3xl md:text-4xl font-semibold text-brand-navy mb-6 tracking-tight">
                A Foundation Built on Empathy.
              </h2>
              <div className="space-y-6 text-muted text-lg leading-relaxed">
                <p>
                  Good Deeds 4 Your Needs was founded on a simple but profound belief: every individual deserves to age or recover with absolute dignity within the comfort of their own home.
                </p>
                <p>
                  Recognizing a gap in the industry—where services felt transactional rather than personal—we set out to build an organization where caregivers aren't just employees, but rigorously chosen companions. 
                </p>
                <p>
                  Today, we provide holistic support ranging from critical non-emergency medical transportation to continuous sitter care, lifting the heavy burden off family caregivers.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* 3. Core Values Grid */}
      <section className="py-24 bg-surface-hover">
        <div className="container mx-auto px-6 md:px-12">
          <FadeIn className="text-center max-w-3xl mx-auto mb-16">
            <h2 className="text-3xl md:text-4xl font-semibold text-brand-navy mb-6 tracking-tight">
              The Philosophy of Care
            </h2>
            <p className="text-lg text-muted">
              These are the immutable principles that dictate how we hire, how we manage, and how we care.
            </p>
          </FadeIn>

          <StaggerChildren className="grid md:grid-cols-3 gap-8">
            {[
              { icon: Shield, title: "Uncompromising Safety", desc: "From multi-tier background checks to continuous training, safety is the prerequisite for everything we do." },
              { icon: Heart, title: "Radical Empathy", desc: "We train our team to lead with the heart. Compassion cannot be faked, and our hiring process filters for genuine warmth." },
              { icon: Users, title: "Family Alignment", desc: "We do not replace family; we support them. We believe in transparent, constant communication with relatives." },
            ].map((val, idx) => (
              <StaggerItem key={idx} className="bg-white p-10 rounded-3xl shadow-sm border border-border flex flex-col items-start card-lift group">
                <div className="w-14 h-14 bg-brand-navy/5 text-brand-navy rounded-2xl flex items-center justify-center mb-6 group-hover:scale-110 transition-transform">
                  <val.icon size={26} />
                </div>
                <h3 className="text-2xl font-bold text-brand-navy mb-4">{val.title}</h3>
                <p className="text-muted leading-relaxed">{val.desc}</p>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

      {/* 4. Trust Standards Bento Layout */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-12 gap-6">
            <div className="lg:col-span-5 bg-brand-navy text-white p-10 rounded-3xl flex flex-col justify-center relative overflow-hidden">
              <div className="absolute -bottom-20 -right-20 w-64 h-64 bg-white/5 rounded-full blur-3xl opacity-50" />
              <FadeIn>
                <h2 className="text-3xl font-semibold mb-6">Our Vetting Standards</h2>
                <p className="text-gray-300 mb-8 leading-relaxed">
                  We accept fewer than 5% of applicants. Our rigorous process ensures absolute peace of mind for your family.
                </p>
                <Link href="/contact" className="inline-flex items-center text-brand-teal font-semibold hover:text-white transition-colors">
                  Speak with a Coordinator <CheckCircle2 size={16} className="ml-2" />
                </Link>
              </FadeIn>
            </div>
            
            <div className="lg:col-span-7 grid sm:grid-cols-2 gap-6">
              {[
                "National Background Checks",
                "Extensive Reference Verifications",
                "Advanced CPR & First Aid Certification",
                "Continuous Quarterly Training"
              ].map((item, i) => (
                <div key={i} className="bg-surface-hover p-8 rounded-3xl border border-border flex flex-col justify-center group hover:border-brand-teal/30 transition-colors">
                  <CheckCircle2 className="text-brand-teal mb-4 w-8 h-8" />
                  <h4 className="text-lg font-bold text-brand-navy">{item}</h4>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
