import React from 'react';
import { motion } from 'motion/react';
import { ChevronRight, ChevronLeft, Send, CheckCircle2, Check, Rocket, ArrowRight } from 'lucide-react';

const tiers = [
  {
    name: "Landing Page",
    price: "$2,499",
    description: "High-conversion single page for startups and product launches.",
    features: ["Custom 3D Elements", "SEO Optimization", "Mobile-First Design", "48h Support Response"],
    highlight: false
  },
  {
    name: "Custom Website Development",
    price: "$5,999",
    description: "Tailored multi-page ecosystems with advanced functionality.",
    features: ["CMS Integration", "Custom Animations", "Performance Optimization", "Priority Support"],
    highlight: true
  },
  {
    name: "SEO Implementation",
    price: "$1,999",
    description: "Dominating search results with 2026-standard optimization.",
    features: ["Keyword Strategy", "Technical SEO Audit", "Content Mapping", "Monthly Analytics"],
    highlight: false
  },
  {
    name: "UI/UX Design Package",
    price: "$3,499",
    description: "Premium design systems that prioritize user experience.",
    features: ["User Research", "Interactive Prototypes", "Design System", "Accessibility Audit"],
    highlight: false
  }
];

export const IntakeForm = () => {
  return (
    <section id="pricing" className="py-24 px-6 bg-black/20">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Start Your <span className="text-gold italic">Evolution</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">Select your investment tier below. If your project is not here, book a call immediately.</p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
          {tiers.map((tier) => (
            <motion.div
              key={tier.name}
              whileHover={{ y: -10 }}
              className={`glass p-8 rounded-[40px] flex flex-col ${tier.highlight ? 'border-gold/50 shadow-gold/10 shadow-2xl' : ''}`}
            >
              {tier.highlight && (
                <div className="bg-gold text-black text-[10px] font-bold px-3 py-1 rounded-full self-start mb-4 tracking-widest">
                  MOST POPULAR
                </div>
              )}
              <h3 className="text-xl font-bold mb-2">{tier.name}</h3>
              <div className="text-3xl font-bold text-gold mb-4">{tier.price}<span className="text-sm text-white/40 font-normal">/start</span></div>
              <p className="text-white/60 text-xs mb-8 flex-1">{tier.description}</p>
              
              <ul className="space-y-4 mb-8">
                {tier.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3 text-xs text-white/80">
                    <Check size={14} className="text-gold" />
                    {feature}
                  </li>
                ))}
              </ul>

              <a 
                href="https://cal.com/prince-lonyem-fbzfgo"
                target="_blank"
                rel="noopener noreferrer"
                className={`w-full py-4 rounded-2xl font-bold text-center transition-all flex items-center justify-center gap-2 text-sm ${
                  tier.highlight 
                    ? 'bg-gold text-black hover:scale-[1.02]' 
                    : 'bg-white/5 text-white hover:bg-white/10'
                }`}
              >
                BOOK A CALL NOW <Rocket size={18} />
              </a>
            </motion.div>
          ))}
        </div>

        <div className="glass p-12 rounded-[40px] border-dashed border-white/20 text-center">
          <h3 className="text-2xl font-bold mb-4 text-gold">Custom Requirements?</h3>
          <p className="text-white/60 mb-8 max-w-xl mx-auto">
            If your project doesn't fit into these tiers, we need to talk. 
            We specialize in bespoke digital engineering for unique business models.
          </p>
          <a 
            href="https://cal.com/prince-lonyem-fbzfgo"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 px-10 py-5 bg-gold text-black font-bold rounded-2xl hover:scale-105 transition-transform"
          >
            BOOK A CALL IMMEDIATELY <ArrowRight size={20} />
          </a>
        </div>
      </div>
    </section>
  );
};
