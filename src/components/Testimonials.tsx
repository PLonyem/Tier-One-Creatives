import React from 'react';
import { motion } from 'motion/react';
import { Quote } from 'lucide-react';

const testimonials = [
  {
    name: "Founder, GrowthGears",
    company: "GrowthGears.tech",
    content: "Tier One Creatives transformed our digital presence. Their 2026-standard design helped us turn cold prospects into eager buyers, perfectly aligning with our mission to engineer precision-targeted growth systems.",
    image: "https://picsum.photos/seed/gg/100/100"
  },
  {
    name: "Sarah Chen",
    company: "Lumina SaaS",
    content: "Prince's approach to UI/UX is unmatched. Our conversion rate jumped by 40% within the first month of the redesign. He truly understands the 1% design philosophy.",
    image: "https://picsum.photos/seed/sarah/100/100"
  },
  {
    name: "Marcus Thorne",
    company: "Vanguard Fintech",
    content: "The technical depth Prince brings to the table is rare. He didn't just build a website; he built a high-performance engine that drives our business visibility globally.",
    image: "https://picsum.photos/seed/marcus/100/100"
  },
  {
    name: "Elena Rodriguez",
    company: "Solaris Real Estate",
    content: "Working with Prince was the best investment we made in 2025. The speed, the aesthetics, and the SEO results exceeded all our expectations. Highly recommended!",
    image: "https://picsum.photos/seed/elena/100/100"
  }
];

export const Testimonials = () => {
  return (
    <section id="testimonials" className="py-24 px-6 bg-white/[0.01]">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">Client <span className="text-gold italic">Success Stories</span></h2>
          <p className="text-white/50 max-w-2xl mx-auto">Hear from the brands that have evolved with Tier One Creatives.</p>
        </div>

        <div className="grid md:grid-cols-2 gap-8">
          {testimonials.map((t, idx) => (
            <motion.div
              key={idx}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: idx * 0.1 }}
              className="glass p-8 rounded-[32px] relative"
            >
              <Quote className="absolute top-6 right-8 text-gold/20 w-12 h-12" />
              <p className="text-white/80 text-lg mb-8 relative z-10 leading-relaxed">
                "{t.content}"
              </p>
              <div className="flex items-center gap-4">
                <img src={t.image} alt={t.name} className="w-12 h-12 rounded-full object-cover grayscale" referrerPolicy="no-referrer" />
                <div>
                  <div className="font-bold text-white">{t.name}</div>
                  <div className="text-xs text-gold uppercase tracking-widest">{t.company}</div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
