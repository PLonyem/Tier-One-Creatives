import React from 'react';
import { motion } from 'motion/react';
import { Home, User, Calculator, MessageSquare, Globe } from 'lucide-react';
import { cn } from '@/src/utils';

const navItems = [
  { icon: Home, label: 'Home', href: '#' },
  { icon: User, label: 'About', href: '#about' },
  { icon: MessageSquare, label: 'Why Call', href: '#why-call' },
  { icon: Calculator, label: 'Pricing', href: '#pricing' },
  { icon: Globe, label: 'Contact', href: 'https://cal.com/prince-lonyem-fbzfgo' },
];

export const Navbar = () => {
  return (
    <>
      {/* Desktop Navbar */}
      <nav className="fixed top-6 left-1/2 -translate-x-1/2 z-50 hidden md:block">
        <div className="glass px-8 py-4 rounded-full flex items-center gap-8">
          <div className="text-gold font-bold text-xl tracking-tighter">TIER ONE</div>
          <div className="flex items-center gap-6">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
                className="text-white/70 hover:text-gold transition-colors text-sm font-medium"
              >
                {item.label}
              </a>
            ))}
          </div>
          <a 
            href="https://cal.com/prince-lonyem-fbzfgo"
            target="_blank"
            rel="noopener noreferrer"
            className="glass-gold px-6 py-2 rounded-full text-xs font-bold text-gold hover:bg-gold hover:text-black transition-all flex items-center gap-2"
          >
            <MessageSquare size={14} />
            BOOK A CALL
          </a>
        </div>
      </nav>

      {/* Mobile Bottom Nav */}
      <nav className="fixed bottom-6 left-6 right-6 z-50 md:hidden">
        <div className="glass px-6 py-4 rounded-3xl flex justify-between items-center">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              target={item.href.startsWith('http') ? '_blank' : undefined}
              rel={item.href.startsWith('http') ? 'noopener noreferrer' : undefined}
              className="flex flex-col items-center gap-1 text-white/50 hover:text-gold transition-colors"
            >
              <item.icon size={20} />
              <span className="text-[10px] font-medium">{item.label}</span>
            </a>
          ))}
          <a 
            href="https://cal.com/prince-lonyem-fbzfgo"
            target="_blank"
            rel="noopener noreferrer"
            className="w-10 h-10 rounded-full glass-gold flex items-center justify-center text-gold"
          >
            <MessageSquare size={20} />
          </a>
        </div>
      </nav>
    </>
  );
};
