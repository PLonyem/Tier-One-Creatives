import React, { useRef, useState } from 'react';
import { motion, useScroll, useTransform, useSpring } from 'motion/react';
import { ArrowRight, Play, Globe, ShieldCheck, Zap } from 'lucide-react';

export const Hero = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 });

  const handleMouseMove = (e: React.MouseEvent) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    const x = (e.clientX - rect.left) / rect.width - 0.5;
    const y = (e.clientY - rect.top) / rect.height - 0.5;
    setMousePos({ x, y });
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      className="relative min-h-screen flex flex-col items-center justify-center pt-32 pb-24 px-6 overflow-hidden"
    >
      {/* Background Glows */}
      <div className="absolute top-1/4 left-1/4 w-[500px] h-[500px] bg-gold/5 blur-[120px] rounded-full pointer-events-none" />
      <div className="absolute bottom-1/4 right-1/4 w-[500px] h-[500px] bg-cyber-blue/5 blur-[120px] rounded-full pointer-events-none" />

      <motion.div 
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="relative z-10 text-center"
      >
        <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full glass mb-8">
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-gold opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-gold"></span>
          </span>
          <span className="text-[10px] font-bold tracking-[0.2em] text-white/70 uppercase">Available for Q3 2026</span>
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold tracking-tighter mb-8 leading-[0.85]">
          <span className="text-shimmer">Design for the 1%,</span><br />
          <span className="text-white">Result for the Global</span>
        </h1>

        <p className="text-white/50 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed">
          The ultra-premium digital agency for brands that refuse to settle. 
          We build high-conversion ecosystems with 2026-standard technology.
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-6">
          <a href="#pricing" className="group relative px-10 py-5 bg-gold text-black font-bold rounded-2xl overflow-hidden transition-all hover:scale-105">
            <div className="absolute inset-0 bg-white/20 translate-x-[-100%] group-hover:translate-x-[100%] transition-transform duration-500" />
            <span className="relative flex items-center gap-2">
              START YOUR PROJECT <ArrowRight size={20} />
            </span>
          </a>
          <a 
            href="https://cal.com/prince-lonyem-fbzfgo"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-3 text-white/80 hover:text-white transition-colors group"
          >
            <div className="w-14 h-14 rounded-full glass flex items-center justify-center group-hover:bg-white/10 transition-all">
              <Play size={20} fill="currentColor" />
            </div>
            <span className="font-bold text-sm tracking-widest">BOOK A CALL</span>
          </a>
        </div>
      </motion.div>

      {/* 3D Floating MacBook Mockup (CSS Simulation) */}
      <motion.div
        style={{
          rotateX: mousePos.y * 20,
          rotateY: mousePos.x * 20,
          perspective: 1000,
        }}
        className="mt-24 relative w-full max-w-5xl aspect-video glass rounded-[32px] overflow-hidden shadow-2xl shadow-black/50 border-white/20"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-white/10 to-transparent pointer-events-none" />
        <img 
          src="https://picsum.photos/seed/agency-hero/1920/1080" 
          alt="Agency Dashboard"
          className="w-full h-full object-cover opacity-80"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 flex items-center justify-center">
           <div className="glass p-8 rounded-3xl text-center">
              <div className="text-gold font-bold text-4xl mb-2">100/100</div>
              <div className="text-xs tracking-widest text-white/50 uppercase">Lighthouse Performance</div>
           </div>
        </div>
      </motion.div>

      {/* Trust Badges */}
      <div className="mt-24 grid grid-cols-2 md:grid-cols-4 gap-12 opacity-30 grayscale hover:grayscale-0 transition-all duration-700">
        <div className="flex items-center gap-2 font-bold text-xl"><Globe size={24} /> DUBAI</div>
        <div className="flex items-center gap-2 font-bold text-xl"><Zap size={24} /> SINGAPORE</div>
        <div className="flex items-center gap-2 font-bold text-xl"><ShieldCheck size={24} /> USA</div>
        <div className="flex items-center gap-2 font-bold text-xl tracking-tighter">LONDON</div>
      </div>
    </section>
  );
};
