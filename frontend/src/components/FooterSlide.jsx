import React from 'react';
import { Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';
import SlideSection from './SlideSection';
import Container from './Container';

const FooterSlide = () => {
  return (
    <SlideSection id="footer" className="justify-center pt-20 pb-8 md:pt-28 md:pb-12 relative overflow-hidden bg-[#050508] border-t border-white/5">
      {/* Subtle Glow */}
      <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="h-full flex flex-col justify-between max-w-6xl relative z-10">
        
        <div className="flex-1 flex flex-col justify-center mb-16 md:mb-20">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Logo & About */}
            <div className="md:col-span-5 space-y-8">
              <div className="text-4xl font-light tracking-widest text-zinc-100">
                SIRI<span className="text-amber-500/80 font-medium">UMA</span>
              </div>
              <p className="text-zinc-400 font-light leading-relaxed max-w-sm text-sm md:text-base">
                Elevating South Indian bridal elegance with editorial precision and uncompromised luxury. Your vision, flawlessly executed.
              </p>
              
              {/* Social Icons */}
              <div className="flex gap-5 pt-2">
                <a href="#" className="w-12 h-12 rounded-full border border-white/5 bg-[#111116] flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:bg-[#1a110a] hover:border-amber-500/30 transition-all duration-500 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50" aria-label="Instagram">
                  <Instagram size={20} strokeWidth={1.5} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/5 bg-[#111116] flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:bg-[#1a110a] hover:border-amber-500/30 transition-all duration-500 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50" aria-label="Facebook">
                  <Facebook size={20} strokeWidth={1.5} />
                </a>
                <a href="#" className="w-12 h-12 rounded-full border border-white/5 bg-[#111116] flex items-center justify-center text-zinc-400 hover:text-amber-400 hover:bg-[#1a110a] hover:border-amber-500/30 transition-all duration-500 hover:scale-110 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-500/50" aria-label="YouTube">
                  <Youtube size={20} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h4 className="text-zinc-100 font-medium mb-8 tracking-wide">Explore</h4>
              <ul className="space-y-5 text-zinc-400 font-light text-sm md:text-base">
                <li><a href="#about" className="hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:text-amber-400 inline-block hover:translate-x-1 transform duration-300">About the Artist</a></li>
                <li><a href="#services" className="hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:text-amber-400 inline-block hover:translate-x-1 transform duration-300">Luxury Services</a></li>
                <li><a href="#portfolio" className="hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:text-amber-400 inline-block hover:translate-x-1 transform duration-300">Bridal Portfolio</a></li>
                <li><a href="#packages" className="hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:text-amber-400 inline-block hover:translate-x-1 transform duration-300">Packages & Pricing</a></li>
              </ul>
            </div>

            {/* Strong CTA */}
            <div className="md:col-span-4">
              <h4 className="text-zinc-100 font-medium mb-6 tracking-wide">Ready for your big day?</h4>
              <p className="text-zinc-400 font-light text-sm leading-relaxed mb-8">
                Dates fill up months in advance. Let's create a breathtaking bridal look that you will cherish forever.
              </p>
              <div className="flex flex-col gap-4">
                <a href="#appointment" className="inline-flex items-center justify-center w-full bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-[#0A0A0E] px-6 py-3.5 rounded-xl font-medium text-sm shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)] hover:-translate-y-1 transition-all duration-300">
                  Book Your Consultation
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 w-full bg-[#111116] border border-white/5 text-zinc-100 px-6 py-3.5 rounded-xl font-medium text-sm hover:border-amber-500/30 hover:text-amber-400 hover:bg-[#1a110a] transition-all duration-300">
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-light tracking-wide">
          <div>&copy; {new Date().getFullYear()} Siri Luxury MUA. All rights reserved.</div>
          <div className="flex gap-8">
            <a href="#" className="hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:text-amber-400">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors focus-visible:outline-none focus-visible:text-amber-400">Terms of Service</a>
          </div>
        </div>
      </Container>
    </SlideSection>
  );
};

export default FooterSlide;
