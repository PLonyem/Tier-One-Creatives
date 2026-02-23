import React from 'react';
import { Navbar } from './components/Navbar';
import { Hero } from './components/Hero';
import { About } from './components/About';
import { Testimonials } from './components/Testimonials';
import { WhyBookACall } from './components/WhyBookACall';
import { IntakeForm } from './components/IntakeForm';
import { MagneticCursor } from './components/MagneticCursor';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="relative overflow-x-hidden">
      <MagneticCursor />
      <Navbar />
      
      <main>
        <Hero />
        
        {/* Stats Section */}
        <section className="py-12 border-y border-white/5 bg-white/[0.02]">
          <div className="max-w-7xl mx-auto px-6 flex flex-wrap justify-between gap-12">
            {[
              { label: 'Projects Delivered', value: '25+' },
              { label: 'Years Experience', value: '2+' },
              { label: 'Client Satisfaction', value: '98%' },
              { label: 'Industries Served', value: '10+' },
            ].map((stat) => (
              <div key={stat.label} className="flex flex-col">
                <span className="text-4xl font-bold text-white mb-1">{stat.value}</span>
                <span className="text-xs uppercase tracking-widest text-white/40">{stat.label}</span>
              </div>
            ))}
          </div>
        </section>

        <About />
        <WhyBookACall />
        <Testimonials />
        <IntakeForm />
      </main>

      <footer className="py-12 px-6 border-t border-white/5">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="text-2xl font-bold tracking-tighter text-gold">TIER ONE</div>
          
          <div className="flex gap-8 text-sm text-white/40">
            <a href="#" className="hover:text-gold transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-gold transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-gold transition-colors">SOC2 Compliance</a>
          </div>

          <div className="text-xs text-white/20 uppercase tracking-[0.3em]">
            © 2026 TIER ONE CREATIVES. ALL RIGHTS RESERVED.
          </div>
        </div>
      </footer>

      {/* Cyber Blue Glow Effect */}
      <div className="fixed top-0 left-0 w-full h-full pointer-events-none z-[-1]">
        <div className="absolute top-[-10%] left-[-10%] w-[40%] h-[40%] bg-cyber-blue/5 blur-[150px] rounded-full" />
        <div className="absolute bottom-[-10%] right-[-10%] w-[40%] h-[40%] bg-gold/5 blur-[150px] rounded-full" />
      </div>
    </div>
  );
}
