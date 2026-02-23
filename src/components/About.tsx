import React from 'react';
import { motion } from 'motion/react';
import { MapPin, Calendar, Award, Eye } from 'lucide-react';

export const About = () => {
  return (
    <section id="about" className="py-24 px-6 bg-white/[0.02]">
      <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="aspect-square rounded-[40px] overflow-hidden glass border-gold/20">
            <img 
              src="https://picsum.photos/seed/prince/800/800" 
              alt="Prince Lonyem" 
              className="w-full h-full object-cover grayscale hover:grayscale-0 transition-all duration-700"
              referrerPolicy="no-referrer"
            />
          </div>
          <div className="absolute -bottom-6 -right-6 glass-gold p-6 rounded-3xl">
            <div className="flex items-center gap-3 mb-2">
              <MapPin size={18} className="text-gold" />
              <span className="font-bold">Cameroon</span>
            </div>
            <div className="text-xs text-white/60 uppercase tracking-widest">Global Reach</div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <h2 className="text-4xl md:text-5xl font-bold mb-6">The Architect: <span className="text-gold italic">Prince Lonyem</span></h2>
          <p className="text-white/70 text-lg mb-8 leading-relaxed">
            Since 2024, I've been on a mission to bridge the gap between high-end design and business visibility. 
            Based in Cameroon but serving a global clientele, I specialize in building digital ecosystems that don't just look premium—they perform.
          </p>
          
          <div className="grid grid-cols-2 gap-8 mb-12">
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gold">
                <Calendar size={20} />
                <span className="font-bold">2+ Years</span>
              </div>
              <p className="text-xs text-white/40 uppercase tracking-widest">Industry Experience</p>
            </div>
            <div className="space-y-2">
              <div className="flex items-center gap-2 text-gold">
                <Eye size={20} />
                <span className="font-bold">Visibility First</span>
              </div>
              <p className="text-xs text-white/40 uppercase tracking-widest">Core Philosophy</p>
            </div>
          </div>

          <div className="glass p-6 rounded-3xl border-white/5">
            <p className="text-sm italic text-white/60 mb-4">
              "My goal is to help businesses gain the visibility they deserve through cutting-edge web technology and intentional design."
            </p>
            <div className="flex items-center gap-4">
              <div className="w-10 h-10 rounded-full bg-gold/20 flex items-center justify-center text-gold">
                <Award size={20} />
              </div>
              <div>
                <div className="font-bold text-sm">Prince Lonyem</div>
                <div className="text-[10px] text-white/40 uppercase tracking-widest">Lead Developer & Strategist</div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
