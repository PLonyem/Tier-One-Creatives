import React from 'react';
import { motion } from 'motion/react';
import { Calendar, MessageSquare, Target, Zap, CheckCircle2 } from 'lucide-react';

const reasons = [
  {
    title: "Strategic Alignment",
    description: "We'll ensure your digital goals perfectly match your business objectives for 2026.",
    icon: Target
  },
  {
    title: "Technical Feasibility",
    description: "Discuss the best tech stack (React 19, AI integration) for your specific needs.",
    icon: Zap
  },
  {
    title: "Custom Roadmap",
    description: "Get a clear, step-by-step plan for your project's evolution and launch.",
    icon: Calendar
  }
];

const agenda = [
  "Your current business challenges & visibility goals",
  "Target audience analysis and user journey mapping",
  "Design aesthetic and brand positioning",
  "Timeline, budget, and project milestones",
  "Post-launch growth and maintenance strategy"
];

export const WhyBookACall = () => {
  return (
    <section id="why-call" className="py-24 px-6">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <div>
            <h2 className="text-4xl md:text-5xl font-bold mb-8">Why Book a <span className="text-gold italic">Strategy Call?</span></h2>
            <p className="text-white/60 text-lg mb-12 leading-relaxed">
              A strategy call is the first step towards a digital ecosystem that works for you. 
              It's not a sales pitch—it's a deep dive into your brand's future.
            </p>

            <div className="space-y-8">
              {reasons.map((reason, idx) => (
                <motion.div 
                  key={idx}
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="flex gap-6"
                >
                  <div className="w-12 h-12 rounded-2xl glass flex items-center justify-center text-gold shrink-0">
                    <reason.icon size={24} />
                  </div>
                  <div>
                    <h3 className="font-bold text-xl mb-2">{reason.title}</h3>
                    <p className="text-white/50 text-sm leading-relaxed">{reason.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>

          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            className="glass p-8 md:p-12 rounded-[40px] border-gold/20 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 w-32 h-32 bg-gold/5 blur-[60px] rounded-full" />
            <h3 className="text-2xl font-bold mb-8 flex items-center gap-3">
              <MessageSquare className="text-gold" />
              What we will discuss:
            </h3>
            
            <ul className="space-y-6">
              {agenda.map((item, idx) => (
                <li key={idx} className="flex items-start gap-4 text-white/80">
                  <CheckCircle2 className="text-gold shrink-0 mt-1" size={18} />
                  <span className="text-sm md:text-base leading-relaxed">{item}</span>
                </li>
              ))}
            </ul>

            <div className="mt-12 p-6 bg-gold/10 rounded-2xl border border-gold/20">
              <p className="text-xs text-gold font-bold uppercase tracking-widest mb-4">Ready to start?</p>
              <a 
                href="https://cal.com/prince-lonyem-fbzfgo"
                target="_blank"
                rel="noopener noreferrer"
                className="w-full py-4 bg-gold text-black font-bold rounded-xl flex items-center justify-center gap-2 hover:scale-[1.02] transition-transform"
              >
                SECURE YOUR SLOT <Calendar size={18} />
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};
