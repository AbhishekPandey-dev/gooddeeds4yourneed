"use client";

import { useParams } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { ArrowLeft, CheckCircle2, Phone, Heart, Brain, Shield, Utensils, Droplets, Pill, Car, ArrowRight } from "lucide-react";
import { FadeIn, StaggerChildren, StaggerItem } from "@/components/Animations";

// Enhanced Mock Data
const serviceData: Record<string, any> = {
  "companion-care": {
    badge: "Signature Service",
    title: "Companion & Sitter Care",
    tagline: "Empathetic engagement when you need it most.",
    overview: "At Good Deeds 4 Your Needs, we believe that aging or recovery shouldn't mean isolation. Our Companion & Sitter care is rooted in the philosophy of intentional presence. We don't just 'watch over'—we engage, we listen, and we honor the rich tapestry of every individual's life history.",
    heroImage: "https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?q=80&w=2000&auto=format&fit=crop",
    benefits: [
      {
        icon: Heart,
        title: "Emotional Support",
        desc: "Deeply empathetic companionship to alleviate feelings of loneliness and promote mental well-being through conversation."
      },
      {
        icon: Brain,
        title: "Cognitive Engagement",
        desc: "Active stimulation through puzzles, reading, games, and creative pursuits tailored to individual interests."
      },
      {
        icon: Shield,
        title: "Safe Environment",
        desc: "Constant vigilance and fall prevention without compromising the feeling of home and personal independence."
      }
    ],
    includedCards: [
      {
        colSpan: 2, rowSpan: 2, icon: Utensils,
        title: "Meal Preparation", bg: "bg-white",
        desc: "Nutritious, chef-curated or family-favorite meals prepared with dietary needs in mind, ensuring daily vitality."
      },
      {
        colSpan: 1, rowSpan: 1, icon: Droplets,
        title: "Light Housekeeping", bg: "bg-brand-teal/10", border: "border-brand-teal/20",
        desc: "Maintaining a tidy and stress-free living space."
      },
      {
        colSpan: 1, rowSpan: 1, icon: Pill,
        title: "Medication Reminders", bg: "bg-surface-hover",
        desc: "Timely prompts for health adherence and safety."
      },
      {
        colSpan: 2, rowSpan: 1, icon: Car,
        title: "Transportation", bg: "bg-brand-navy", text: "text-white", iconColor: "text-white/20",
        desc: "Chauffeur-standard transport to appointments, social gatherings, or simply a change of scenery."
      }
    ],
    whoItsFor: [
      {
        title: "Independent Seniors",
        desc: "For those who cherish their autonomy but require an extra set of hands or a trusted friend for social outings and daily rhythm management.",
        list: ["Social engagement maintenance", "Errand assistance"]
      },
      {
        title: "Recovering Patients",
        desc: "For individuals returning from a hospital stay who need temporary, high-attention observation and morale-boosting companionship during rehabilitation.",
        list: ["Rehab appointment support", "Meticulous progress logging"]
      }
    ]
  },
  "respite-care": {
    badge: "Essential Relief",
    title: "Respite Services",
    tagline: "Temporary relief for family caregivers.",
    overview: "Caring for a loved one is demanding and can lead to burnout. Our Respite Services offer family caregivers the essential opportunity to step away, rest, and recharge, returning with renewed energy. We seamlessly continue your routines with compassion and professionalism.",
    heroImage: "https://images.unsplash.com/photo-1544027993-37dbfe43562a?q=80&w=2000&auto=format&fit=crop",
    benefits: [
      {
        icon: Heart,
        title: "Peace of Mind",
        desc: "Relax knowing your loved one is in the hands of thoroughly vetted, highly trained professionals."
      },
      {
        icon: Brain,
        title: "Burnout Prevention",
        desc: "Protect your own physical and mental health by taking necessary, scheduled breaks from caregiving duties."
      },
      {
        icon: Shield,
        title: "Seamless Transition",
        desc: "We adapt immediately to your established routines, ensuring zero disruption to the client's daily life."
      }
    ],
    includedCards: [
      {
        colSpan: 2, rowSpan: 2, icon: Utensils,
        title: "Routine Continuation", bg: "bg-white",
        desc: "We strictly follow your personalized care plan, from meal times to medication schedules and bedtime routines."
      },
      {
        colSpan: 1, rowSpan: 1, icon: Droplets,
        title: "Personal Care", bg: "bg-brand-teal/10", border: "border-brand-teal/20",
        desc: "Dressing, grooming, and hygiene assistance."
      },
      {
        colSpan: 1, rowSpan: 1, icon: Shield,
        title: "Emergency Cover", bg: "bg-surface-hover",
        desc: "Available for sudden, unexpected absences."
      },
      {
        colSpan: 2, rowSpan: 1, icon: Heart,
        title: "Joyful Engagement", bg: "bg-brand-navy", text: "text-white", iconColor: "text-white/20",
        desc: "We don't just sit; we actively engage the client with their favorite activities to make the time enjoyable."
      }
    ],
    whoItsFor: [
      {
        title: "Family Caregivers",
        desc: "Spouses or adult children who act as the primary caregiver and are experiencing fatigue or need to handle personal matters.",
        list: ["Vacation or weekend coverage", "Self-care and health breaks"]
      },
      {
        title: "High-Stress Environments",
        desc: "Families managing complex care situations like advanced dementia, where rotating caregivers helps maintain patience and quality of care.",
        list: ["Dementia care relief", "Post-op family support"]
      }
    ]
  },
  "errand-assistance": {
    badge: "Daily Support",
    title: "Errand Assistance",
    tagline: "Seamless support for daily tasks, outside the home.",
    overview: "Running household errands, managing logistics, and keeping the pantry stocked can become insurmountable challenges. Our professionals handle the external demands of life efficiently, allowing your loved one to relax safely and comfortably inside their home.",
    heroImage: "https://images.unsplash.com/photo-1588661601072-a7d1887e50eb?q=80&w=2000&auto=format&fit=crop",
    benefits: [
      {
        icon: Car,
        title: "Logistical Efficiency",
        desc: "Rapid, organized handling of shopping lists, returns, and drop-offs to keep the household running smoothly."
      },
      {
        icon: Shield,
        title: "In-Home Safety",
        desc: "Removes the risk of slips, falls, or exhaustion for seniors who attempt to run strenuous errands themselves."
      },
      {
        icon: Pill,
        title: "Health Regimen Support",
        desc: "Ensuring prescriptions are picked up on time and fresh, healthy groceries are always available."
      }
    ],
    includedCards: [
      {
        colSpan: 2, rowSpan: 2, icon: Utensils,
        title: "Grocery & Provisions", bg: "bg-white",
        desc: "Careful selection of fresh produce, pantry staples, and specialized dietary items based on your exact list and preferences."
      },
      {
        colSpan: 1, rowSpan: 1, icon: Pill,
        title: "Pharmacy Runs", bg: "bg-brand-teal/10", border: "border-brand-teal/20",
        desc: "Timely prescription pick-ups and refills."
      },
      {
        colSpan: 1, rowSpan: 1, icon: Droplets,
        title: "Post Office", bg: "bg-surface-hover",
        desc: "Mailing packages, buying stamps, sorting mail."
      },
      {
        colSpan: 2, rowSpan: 1, icon: Car,
        title: "General Errands", bg: "bg-brand-navy", text: "text-white", iconColor: "text-white/20",
        desc: "Dry cleaning drop-offs, retrieving library books, returning items, and personal shopping tasks."
      }
    ],
    whoItsFor: [
      {
        title: "Mobility Challenged",
        desc: "Individuals who use assistive devices, cannot drive, or find walking long distances in stores to be painful or dangerous.",
        list: ["Seniors without transportation", "Wheelchair or walker users"]
      },
      {
        title: "Post-Op Patients",
        desc: "Those recovering from recent surgeries who are strictly homebound and cannot lift bags or drive vehicles.",
        list: ["Joint replacement recovery", "General surgery recovery"]
      }
    ]
  }
};

export default function ServiceDetailPage() {
  const params = useParams();
  const slug = params.slug as string;
  const data = serviceData[slug] || serviceData["companion-care"];

  return (
    <div className="flex flex-col min-h-screen bg-bg">
      {/* Stitch MCP Inspired Service Hero Editorial Layout */}
      <section className="relative px-6 py-24 md:py-32 max-w-7xl mx-auto pt-40 md:pt-48 pb-16 grid md:grid-cols-12 gap-12 items-center">
        <div className="md:col-span-6 z-10">
          <FadeIn>
            <Link href="/services" className="inline-flex items-center text-muted hover:text-brand-navy mb-8 transition-colors text-sm font-medium">
              <ArrowLeft size={16} className="mr-2" /> Back to Services
            </Link>
            <span className="text-brand-gold font-bold tracking-[0.2em] uppercase text-xs mb-4 block">
              {data.badge}
            </span>
            <h1 className="text-5xl md:text-7xl font-extrabold text-brand-navy leading-[1.1] mb-8 tracking-tighter">
              {data.title.split(' ').map((word: string, i: number, arr: string[]) => (
                <span key={i}>
                  {i === arr.length - 1 ? <span className="text-brand-teal italic font-light">{word} </span> : word + ' '}
                </span>
              ))}
            </h1>
            <p className="text-muted text-lg md:text-xl leading-relaxed mb-10 max-w-lg">
              {data.tagline} {data.overview.split('.')[0]}.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/contact" className="bg-brand-navy text-white px-8 py-4 rounded-full font-bold text-base shadow-ambient hover:bg-brand-teal transition-colors flex items-center">
                Book a Consultation <ArrowRight size={18} className="ml-2" />
              </Link>
            </div>
          </FadeIn>
        </div>
        
        <div className="md:col-span-6 relative">
          <FadeIn direction="right">
            {/* Ambient Background Glow */}
            <div className="absolute -top-12 -left-12 w-64 h-64 bg-brand-teal/20 rounded-full blur-3xl -z-10"></div>
            
            {/* Image Editorial Wrap */}
            <div className="relative rounded-2xl overflow-hidden aspect-[4/5] shadow-2xl">
              <Image 
                src={data.heroImage} 
                alt={data.title}
                fill
                priority
                className="object-cover"
              />
            </div>
            
            {/* Glass Badge */}
            <div className="absolute -bottom-8 -right-8 glass-panel p-6 rounded-xl shadow-lg hidden md:block">
              <div className="flex items-center gap-4">
                <div className="w-12 h-12 bg-brand-teal rounded-full flex items-center justify-center">
                  <CheckCircle2 className="text-white" size={24} />
                </div>
                <div>
                  <p className="text-sm font-bold text-brand-navy">Vetted Excellence</p>
                  <p className="text-xs text-muted">Top 3% of applicants accepted</p>
                </div>
              </div>
            </div>
          </FadeIn>
        </div>
      </section>

      {/* Overview Centered */}
      <section className="bg-surface-hover py-24">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <FadeIn>
            <h3 className="text-3xl font-bold text-brand-navy mb-8 tracking-tight">The Heart of Connection</h3>
            <p className="text-xl md:text-2xl text-muted font-light leading-relaxed mb-8">
              {data.overview}
            </p>
            <div className="w-24 h-1 bg-brand-gold mx-auto rounded-full"></div>
          </FadeIn>
        </div>
      </section>

      {/* Benefits List */}
      <section className="py-24 max-w-7xl mx-auto px-6">
        <StaggerChildren className="grid md:grid-cols-3 gap-12">
          {data.benefits.map((benefit: any, idx: number) => {
            const Icon = benefit.icon;
            return (
              <StaggerItem key={idx} className="group">
                <div className="mb-6 w-14 h-14 rounded-full border border-border flex items-center justify-center group-hover:bg-brand-teal/5 transition-colors">
                  <Icon className="text-brand-teal w-7 h-7" />
                </div>
                <h4 className="text-xl font-bold text-brand-navy mb-4">{benefit.title}</h4>
                <p className="text-muted leading-relaxed">{benefit.desc}</p>
              </StaggerItem>
            );
          })}
        </StaggerChildren>
      </section>

      {/* What's Included (Stitch Bento Grid) */}
      <section className="bg-white py-24">
        <div className="max-w-7xl mx-auto px-6">
          <FadeIn>
            <h3 className="text-4xl font-extrabold text-brand-navy mb-12 tracking-tight">Included Care Services</h3>
          </FadeIn>
          <div className="grid grid-cols-1 md:grid-cols-4 md:grid-rows-2 gap-6 h-auto md:h-[600px]">
            {data.includedCards.map((card: any, idx: number) => {
              const Icon = card.icon;
              return (
                <FadeIn 
                  key={idx}
                  className={`
                    ${card.colSpan === 2 ? 'md:col-span-2' : ''} 
                    ${card.rowSpan === 2 ? 'md:row-span-2' : ''} 
                    ${card.bg} ${card.text || 'text-brand-navy'} 
                    ${card.border ? `border ${card.border}` : card.text ? '' : 'border border-border/50 shadow-sm'}
                    rounded-2xl p-8 lg:p-10 flex flex-col justify-between relative overflow-hidden group
                  `}
                >
                  {/* Background Icon Watermark for large cards */}
                  {card.rowSpan === 2 && (
                    <div className="absolute top-0 right-0 p-8 opacity-5 group-hover:opacity-10 transition-opacity">
                      <Icon className="w-32 h-32" />
                    </div>
                  )}

                  {/* Icon or Top Content */}
                  {card.rowSpan === 1 && card.colSpan === 1 && (
                    <Icon className="w-8 h-8 text-brand-teal mb-4" />
                  )}
                  {card.rowSpan === 1 && card.colSpan === 2 && (
                    <div className="z-10">
                      <h5 className="text-xl font-bold mb-2">{card.title}</h5>
                      <p className={`text-sm ${card.text ? 'text-white/80' : 'text-muted'} max-w-sm`}>{card.desc}</p>
                    </div>
                  )}

                  {card.rowSpan === 2 && (
                    <div className="flex flex-col h-full justify-end z-10">
                      <h5 className="text-2xl font-bold mb-4">{card.title}</h5>
                      <p className="text-muted leading-relaxed">{card.desc}</p>
                    </div>
                  )}
                  
                  {card.rowSpan === 1 && card.colSpan === 1 && (
                    <div className="mt-auto">
                      <h5 className="font-bold mb-2">{card.title}</h5>
                      <p className="text-sm text-muted">{card.desc}</p>
                    </div>
                  )}

                  {/* Absolute Icon for wide cards */}
                  {card.rowSpan === 1 && card.colSpan === 2 && (
                    <Icon className={`w-20 h-20 ${card.iconColor || 'text-brand-teal/20'} absolute -right-4 -bottom-4`} />
                  )}
                </FadeIn>
              );
            })}
          </div>
        </div>
      </section>

      {/* Who It's For */}
      <section className="py-24 max-w-7xl mx-auto px-6 grid md:grid-cols-2 gap-12">
        {data.whoItsFor.map((item: any, idx: number) => (
          <FadeIn key={idx} delay={idx * 0.1}>
            <div className="bg-white p-12 rounded-3xl border border-border shadow-sm h-full">
              <h4 className="text-2xl font-bold text-brand-navy mb-6">{item.title}</h4>
              <p className="text-muted mb-8 leading-relaxed">
                {item.desc}
              </p>
              <ul className="space-y-4">
                {item.list.map((listItem: string, lIdx: number) => (
                  <li key={lIdx} className="flex items-center gap-3 text-brand-teal font-medium">
                    <CheckCircle2 size={18} />
                    {listItem}
                  </li>
                ))}
              </ul>
            </div>
          </FadeIn>
        ))}
      </section>
      
      {/* Process Steps */}
      <section className="py-24 bg-brand-navy text-white overflow-hidden relative mt-12 rounded-t-[3rem]">
        <div className="absolute top-0 right-0 w-1/3 h-full bg-gradient-to-l from-brand-teal/20 to-transparent"></div>
        <div className="max-w-7xl mx-auto px-6 relative">
          <FadeIn>
            <h3 className="text-4xl font-extrabold mb-16 tracking-tight">The Journey to Better Care</h3>
          </FadeIn>
          <StaggerChildren className="grid md:grid-cols-4 gap-8">
            {[
              { step: "01", title: "Initial Matching", desc: "We pair you based on personality, hobbies, and clinical needs to ensure a genuine bond from day one." },
              { step: "02", title: "In-Home Welcome", desc: "A concierge-led introduction where expectations are set and the first connection is celebrated." },
              { step: "03", title: "Care Integration", desc: "Developing a routine that respects the client's preferences while fulfilling all care requirements." },
              { step: "04", title: "Daily Journaling", desc: "Comprehensive digital logs shared with family members to keep everyone connected and informed." }
            ].map((step, idx) => (
              <StaggerItem key={idx} className="relative pt-6">
                <div className="text-8xl font-black text-white/5 absolute top-0 -left-4 -z-1">{step.step}</div>
                <h5 className="text-xl font-bold mb-4 relative z-10 text-white">{step.title}</h5>
                <p className="text-white/70 text-sm leading-relaxed">{step.desc}</p>
              </StaggerItem>
            ))}
          </StaggerChildren>
        </div>
      </section>

    </div>
  );
}
