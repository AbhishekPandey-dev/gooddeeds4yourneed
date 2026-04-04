import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/Animations";

export const metadata = {
  title: "Contact Us | Good Deeds 4 Your Needs",
  description: "Reach out to schedule a consultation or inquire about our premium home care services.",
};

export default function ContactPage() {
  return (
    <div className="min-h-screen bg-surface-hover">
      <section className="pt-32 pb-24">
        <div className="container mx-auto px-6 md:px-12 max-w-6xl">
          <FadeIn className="text-center mb-16">
            <h1 className="text-4xl md:text-6xl font-semibold text-brand-navy mb-4 tracking-tight">Let's Start a Conversation.</h1>
            <p className="text-xl text-muted">Submit your details below and a care coordinator will contact you directly.</p>
          </FadeIn>

          <div className="grid lg:grid-cols-12 gap-12 items-start">
            
            {/* Form Side */}
            <div className="lg:col-span-7 bg-white p-8 md:p-12 rounded-[2rem] shadow-ambient border border-border">
              <h2 className="text-2xl font-bold text-brand-navy mb-8">Service Inquiry Form</h2>
              <form className="space-y-6">
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-semibold text-brand-navy">First Name</label>
                     <input type="text" className="w-full bg-surface-hover border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal/50" placeholder="Jane" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-semibold text-brand-navy">Last Name</label>
                     <input type="text" className="w-full bg-surface-hover border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal/50" placeholder="Doe" />
                   </div>
                </div>
                <div className="grid md:grid-cols-2 gap-6">
                   <div className="space-y-2">
                     <label className="text-sm font-semibold text-brand-navy">Phone Number</label>
                     <input type="tel" className="w-full bg-surface-hover border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal/50" placeholder="(555) 000-0000" />
                   </div>
                   <div className="space-y-2">
                     <label className="text-sm font-semibold text-brand-navy">Email Address</label>
                     <input type="email" className="w-full bg-surface-hover border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal/50" placeholder="jane@example.com" />
                   </div>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-navy">Service Needed</label>
                  <select className="w-full bg-surface-hover border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal/50 text-brand-navy">
                    <option>Select an option...</option>
                    <option>Companion & Sitter Care</option>
                    <option>Respite Care</option>
                    <option>Non-Emergency Medical Transport</option>
                    <option>General Errand Assistance</option>
                    <option>I'm not sure yet</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-semibold text-brand-navy">Message / Additional Details</label>
                  <textarea rows={4} className="w-full bg-surface-hover border border-border rounded-xl px-4 py-3 focus:outline-none focus:ring-2 focus:ring-brand-teal/50" placeholder="Tell us briefly about your situation..."></textarea>
                </div>
                <button type="button" className="w-full py-4 rounded-xl bg-brand-navy text-white hover:bg-brand-teal transition-colors font-bold text-lg shadow-md mt-4">
                  Submit Inquiry
                </button>
              </form>
            </div>

            {/* Info Side */}
            <div className="lg:col-span-5 space-y-8">
               <div className="bg-brand-navy text-white p-8 md:p-10 rounded-[2rem] shadow-ambient relative overflow-hidden">
                 <div className="absolute top-0 right-0 w-32 h-32 bg-white/5 rounded-bl-[100px]" />
                 <h3 className="text-2xl font-bold mb-8">Direct Contact</h3>
                 <ul className="space-y-6">
                   <li className="flex items-center">
                     <div className="w-12 h-12 rounded-full bg-brand-teal/20 flex items-center justify-center mr-4 shrink-0">
                       <Phone className="w-5 h-5 text-brand-teal" />
                     </div>
                     <div>
                       <span className="block text-sm text-gray-300 font-medium">Phone Support</span>
                       <span className="text-lg font-semibold">(555) 123-4567</span>
                     </div>
                   </li>
                   <li className="flex items-center">
                     <div className="w-12 h-12 rounded-full bg-brand-teal/20 flex items-center justify-center mr-4 shrink-0">
                       <Mail className="w-5 h-5 text-brand-teal" />
                     </div>
                     <div>
                       <span className="block text-sm text-gray-300 font-medium">Email Address</span>
                       <span className="text-lg font-semibold">care@gooddeeds4yourneeds.com</span>
                     </div>
                   </li>
                   <li className="flex items-center">
                     <div className="w-12 h-12 rounded-full bg-brand-teal/20 flex items-center justify-center mr-4 shrink-0">
                       <Clock className="w-5 h-5 text-brand-teal" />
                     </div>
                     <div>
                       <span className="block text-sm text-gray-300 font-medium">Business Hours</span>
                       <span className="text-lg font-semibold">24/7 Support Available</span>
                     </div>
                   </li>
                 </ul>
               </div>

               <div className="bg-white p-8 md:p-10 rounded-[2rem] border border-border shadow-sm flex items-start">
                  <MapPin className="w-8 h-8 text-brand-accent mr-4 shrink-0" />
                  <div>
                    <h4 className="text-lg font-bold text-brand-navy mb-2">Service Area</h4>
                    <p className="text-muted leading-relaxed">
                      We primarily operate across the greater metropolitan area and specific surrounding counties. Contact us to verify coverage for your specific ZIP code.
                    </p>
                  </div>
               </div>
            </div>

          </div>
        </div>
      </section>
    </div>
  );
}
