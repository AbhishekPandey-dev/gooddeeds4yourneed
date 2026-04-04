import Link from "next/link";
import { Car, Clock, ShieldCheck, MapPin, ArrowRight, CheckCircle2 } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/Animations";

export const metadata = {
  title: "Non-Emergency Medical Transportation | Good Deeds 4 Your Needs",
  description: "Safe, punctual, and highly-vetted non-emergency medical transportation services.",
};

export default function TransportationPage() {
  return (
    <div className="flex flex-col min-h-screen">
      {/* Hero */}
      <section className="pt-32 pb-24 bg-surface relative overflow-hidden">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid lg:grid-cols-2 gap-16 items-center">
             <FadeIn>
                <div className="inline-flex items-center space-x-2 px-4 py-2 rounded-full bg-brand-navy/5 text-brand-navy text-sm font-semibold tracking-wide uppercase mb-8">
                  <Car size={16} />
                  <span>Dedicated Fleet</span>
                </div>
                <h1 className="text-4xl md:text-6xl font-semibold text-brand-navy tracking-tight leading-[1.1] mb-6">
                  Arrive Safely. <br/> <span className="text-brand-teal">Never Miss a Moment.</span>
                </h1>
                <p className="text-lg text-muted mb-10 max-w-lg leading-relaxed">
                  Our Non-Emergency Medical Transportation (NEMT) service bridges the gap for vulnerable individuals needing secure, highly reliable transport to appointments, procedures, and essential life events.
                </p>
                <Link
                  href="/contact"
                  className="inline-flex px-8 py-4 rounded-full bg-brand-navy text-white hover:bg-brand-teal transition-all shadow-ambient font-medium items-center group"
                >
                  Request a Ride <ArrowRight className="ml-2 w-4 h-4 group-hover:translate-x-1 transition-transform" />
                </Link>
             </FadeIn>
             <FadeIn direction="left">
               <div className="w-full h-[500px] rounded-3xl bg-gray-200 overflow-hidden relative shadow-ambient border-4 border-white">
                  <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1549317661-bd32c8ce0be2?q=80&w=2000&auto=format&fit=crop')] bg-cover bg-center grayscale-[30%]" />
               </div>
             </FadeIn>
          </div>
        </div>
      </section>

      {/* Trust & Safety Bento */}
      <section className="py-24 bg-brand-navy text-white">
        <div className="container mx-auto px-6 md:px-12">
           <FadeIn className="text-center mb-16">
             <h2 className="text-3xl md:text-4xl font-semibold mb-4">The Gold Standard in Fleet Safety</h2>
             <p className="text-brand-teal">Why families trust our drivers unconditionally.</p>
           </FadeIn>
           
           <StaggerChildren className="grid md:grid-cols-4 gap-6">
              {[
                { icon: ShieldCheck, title: "100% Driving History Clearance" },
                { icon: Clock, title: "Wait-and-Return Guarantee" },
                { icon: MapPin, title: "Door-to-Door (Inside Help)" },
                { icon: Car, title: "Clean, Sanitized Fleet" }
              ].map((item, i) => (
                <StaggerItem key={i} className="bg-white/5 border border-white/10 p-8 rounded-3xl text-center flex flex-col items-center">
                   <div className="w-16 h-16 rounded-full bg-brand-teal/20 flex items-center justify-center mb-6">
                     <item.icon className="w-8 h-8 text-brand-teal" />
                   </div>
                   <h3 className="text-lg font-semibold">{item.title}</h3>
                </StaggerItem>
              ))}
           </StaggerChildren>
        </div>
      </section>

      {/* Transportation Types */}
      <section className="py-24 bg-surface">
        <div className="container mx-auto px-6 md:px-12">
          <div className="max-w-4xl mx-auto space-y-12">
            <FadeIn>
              <h2 className="text-3xl font-semibold text-brand-navy mb-8 text-center">Journeys We Support</h2>
            </FadeIn>
            <div className="grid sm:grid-cols-2 gap-6">
              {[
                "Routine Doctor’s Appointments",
                "Dialysis Treatments Focus",
                "Post-Operative Discharges",
                "Physical Therapy Sessions",
                "Prescription or Pharmacy Runs",
                "Family Gatherings & Life Events"
              ].map((type, idx) => (
                <FadeIn key={idx} delay={idx * 0.1}>
                  <div className="p-6 bg-white border border-border shadow-sm rounded-2xl flex items-center space-x-4">
                     <CheckCircle2 className="text-brand-teal shrink-0" />
                     <span className="font-semibold text-brand-navy text-lg">{type}</span>
                  </div>
                </FadeIn>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
