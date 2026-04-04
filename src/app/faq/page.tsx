"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, MessageCircleQuestion } from "lucide-react";
import { FadeIn } from "@/components/Animations";

const faqs = [
  {
    category: "General",
    questions: [
      { q: "What areas do you serve?", a: "We proudly serve the wider metropolitan area and surrounding neighborhoods. Contact us with your zip code to confirm exact availability." },
      { q: "Are your caregivers insured and bonded?", a: "Absolutely. 100% of our care professionals are fully licensed, insured, bonded, and have passed multi-stage background checks." }
    ]
  },
  {
    category: "Care Services",
    questions: [
      { q: "Do you provide medical care (e.g. injections)?", a: "No. Good Deeds 4 Your Needs focuses strictly on non-medical companion care, sitter services, and respite. We do not administer medication, but we do provide medication reminders." },
      { q: "Can we interview the caregiver beforehand?", a: "Yes. We believe in the perfect match. You are highly encouraged to meet with your selected caregiver before services officially begin." }
    ]
  },
  {
    category: "Transportation",
    questions: [
      { q: "Do drivers assist clients into the building?", a: "Yes. Our signature 'Door-Through-Door' service means our drivers will safely guide your loved one from the inside of their home directly into the destination building." },
      { q: "Is your fleet wheelchair accessible?", a: "Yes, we have specialized vehicles available. Please notify us during the booking process so we can reserve the appropriate vehicle for you." }
    ]
  }
];

export default function FAQPage() {
  const [activeCategory, setActiveCategory] = useState(faqs[0].category);
  const [openItems, setOpenItems] = useState<Record<string, boolean>>({});

  const toggleItem = (q: string) => {
    setOpenItems(prev => ({ ...prev, [q]: !prev[q] }));
  };

  const currentFaqs = faqs.find(c => c.category === activeCategory)?.questions || [];

  return (
    <div className="flex flex-col min-h-screen bg-surface">
      {/* Header */}
      <section className="pt-32 pb-16 bg-surface-hover border-b border-border text-center">
        <div className="container mx-auto px-6">
          <FadeIn>
            <div className="w-16 h-16 bg-brand-teal/10 text-brand-teal rounded-full flex items-center justify-center mx-auto mb-6">
              <MessageCircleQuestion size={32} />
            </div>
            <h1 className="text-4xl md:text-5xl font-semibold mb-4 text-brand-navy tracking-tight">Frequently Asked Questions</h1>
            <p className="text-lg text-muted max-w-2xl mx-auto">
              Clear, transparent answers to help your family make the most informed decisions about care and transportation.
            </p>
          </FadeIn>
        </div>
      </section>

      {/* FAQ Core */}
      <section className="py-20">
        <div className="container mx-auto px-6 md:px-12 max-w-5xl flex flex-col md:flex-row gap-12">
          
          {/* Categories Sidebar */}
          <div className="w-full md:w-64 shrink-0">
            <div className="sticky top-32 space-y-2">
              <h3 className="text-sm font-bold uppercase tracking-widest text-muted mb-4 pl-4">Categories</h3>
              {faqs.map(category => (
                <button
                  key={category.category}
                  onClick={() => setActiveCategory(category.category)}
                  className={`block w-full text-left px-6 py-4 rounded-xl font-medium transition-all ${
                    activeCategory === category.category 
                      ? "bg-brand-navy text-white shadow-ambient" 
                      : "text-brand-navy hover:bg-surface-hover"
                  }`}
                >
                  {category.category}
                </button>
              ))}
            </div>
          </div>

          {/* FAQ Accordion */}
          <div className="flex-grow space-y-4">
             <AnimatePresence mode="wait">
                <motion.div
                  key={activeCategory}
                  initial={{ opacity: 0, x: 20 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -20 }}
                  transition={{ duration: 0.3 }}
                  className="space-y-4"
                >
                  {currentFaqs.map((faq, i) => (
                    <div key={i} className="bg-white border border-border rounded-2xl overflow-hidden shadow-sm transition-all hover:border-brand-teal/30">
                      <button 
                        onClick={() => toggleItem(faq.q)}
                        className="w-full flex justify-between items-center p-6 text-left"
                      >
                        <span className="text-lg font-semibold text-brand-navy pr-4">{faq.q}</span>
                        <ChevronDown 
                          className={`w-6 h-6 text-brand-teal transform transition-transform duration-300 ${openItems[faq.q] ? 'rotate-180' : ''}`}
                        />
                      </button>
                      <AnimatePresence>
                        {openItems[faq.q] && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            transition={{ duration: 0.3 }}
                          >
                            <div className="px-6 pb-6 text-muted leading-relaxed">
                              {faq.a}
                            </div>
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ))}
                </motion.div>
             </AnimatePresence>
          </div>
        </div>
      </section>
    </div>
  );
}
