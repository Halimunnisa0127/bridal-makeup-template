import React from 'react';
import { Instagram, Facebook, Youtube, MessageCircle } from 'lucide-react';
import SlideSection from './SlideSection';
import Container from './Container';

const FooterSlide = () => {
  return (
    <SlideSection id="footer" className="justify-center pt-12 sm:pt-16 md:pt-24 pb-[calc(2rem+env(safe-area-inset-bottom,0px))] relative overflow-hidden bg-[#050508] border-t border-white/5">
      {/* Background Glow */}
      <div className="hidden md:block absolute top-0 left-1/2 -translate-x-1/2 w-[60%] h-[30%] bg-amber-500/5 rounded-full blur-[120px] pointer-events-none" />

      <Container className="h-full flex flex-col justify-between max-w-6xl relative z-10 w-full">
        
        <div className="flex-1 flex flex-col justify-center mb-10 sm:mb-16">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-8 sm:gap-12 lg:gap-24">
            
            {/* Logo & About */}
            <div className="md:col-span-5 space-y-6">
              <div className="text-3xl sm:text-4xl font-light tracking-widest text-zinc-100">
                SRI<span className="text-amber-500/80 font-medium">UMA</span>
              </div>
              <p className="text-zinc-400 font-light leading-relaxed max-w-sm text-xs sm:text-sm md:text-base">
                Elevating South Indian bridal elegance with editorial precision and uncompromised luxury. Your vision, flawlessly executed.
              </p>
              
              {/* Social Icons (44px touch targets) */}
              <div className="flex gap-4 pt-1">
                <a href="#" className="w-11 h-11 rounded-full border border-white/5 bg-[#111116] flex items-center justify-center text-zinc-400 hover:text-amber-400 active:scale-95 transition-all" aria-label="Instagram">
                  <Instagram size={18} strokeWidth={1.5} />
                </a>
                <a href="#" className="w-11 h-11 rounded-full border border-white/5 bg-[#111116] flex items-center justify-center text-zinc-400 hover:text-amber-400 active:scale-95 transition-all" aria-label="Facebook">
                  <Facebook size={18} strokeWidth={1.5} />
                </a>
                <a href="#" className="w-11 h-11 rounded-full border border-white/5 bg-[#111116] flex items-center justify-center text-zinc-400 hover:text-amber-400 active:scale-95 transition-all" aria-label="YouTube">
                  <Youtube size={18} strokeWidth={1.5} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h4 className="text-zinc-100 font-medium mb-4 sm:mb-6 text-base tracking-wide">Explore</h4>
              <ul className="space-y-3 sm:space-y-4 text-zinc-400 font-light text-xs sm:text-sm md:text-base">
                <li><a href="#about" className="hover:text-amber-400 py-1 inline-block transition-colors">About the Artist</a></li>
                <li><a href="#services" className="hover:text-amber-400 py-1 inline-block transition-colors">Luxury Services</a></li>
                <li><a href="#portfolio" className="hover:text-amber-400 py-1 inline-block transition-colors">Bridal Portfolio</a></li>
                <li><a href="#packages" className="hover:text-amber-400 py-1 inline-block transition-colors">Packages & Pricing</a></li>
              </ul>
            </div>

            {/* CTA */}
            <div className="md:col-span-4">
              <h4 className="text-zinc-100 font-medium mb-4 sm:mb-6 text-base tracking-wide">Ready for your big day?</h4>
              <p className="text-zinc-400 font-light text-xs sm:text-sm leading-relaxed mb-6">
                Dates fill up months in advance. Let's create a breathtaking bridal look that you will cherish forever.
              </p>
              <div className="flex flex-col gap-3">
                <a href="#appointment" className="inline-flex items-center justify-center w-full min-h-[44px] bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-[#0A0A0E] px-6 py-3 rounded-xl font-medium text-xs sm:text-sm shadow-[0_0_15px_rgba(245,158,11,0.2)] active:scale-[0.98] transition-all">
                  Book Your Consultation
                </a>
                <a href="https://wa.me/919876543210" target="_blank" rel="noreferrer" className="inline-flex items-center justify-center gap-2 w-full min-h-[44px] bg-[#111116] border border-white/5 text-zinc-100 px-6 py-3 rounded-xl font-medium text-xs sm:text-sm hover:text-amber-400 active:scale-[0.98] transition-all">
                  <MessageCircle size={16} />
                  Chat on WhatsApp
                </a>
              </div>
            </div>
            
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="pt-6 border-t border-white/5 flex flex-col sm:flex-row justify-between items-center gap-3 text-[11px] sm:text-xs text-zinc-500 font-light tracking-wide">
          <div>&copy; {new Date().getFullYear()} Siri Luxury MUA. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-amber-400 transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-amber-400 transition-colors">Terms of Service</a>
          </div>
        </div>
      </Container>
    </SlideSection>
  );
};

export default FooterSlide;
