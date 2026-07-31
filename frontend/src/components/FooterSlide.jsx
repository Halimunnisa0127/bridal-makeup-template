import React from 'react';
import { Instagram, Facebook, Youtube, Mail, ArrowRight } from 'lucide-react';
import SlideSection from './SlideSection';
import Container from './Container';

const FooterSlide = () => {
  return (
    <SlideSection id="footer" className="justify-center py-24 relative overflow-hidden bg-slate-950">
      <Container className="h-full flex flex-col justify-between max-w-6xl">
        
        <div className="flex-1 flex flex-col justify-center">
          <div className="grid grid-cols-1 md:grid-cols-12 gap-12 lg:gap-24">
            
            {/* Logo & About */}
            <div className="md:col-span-5 space-y-6">
              <div className="text-3xl font-medium tracking-tighter text-white">
                SIRI<span className="text-zinc-500">MUA</span>
              </div>
              <p className="text-zinc-400 font-light leading-relaxed max-w-sm">
                Elevating South Indian bridal elegance with editorial precision and uncompromised luxury.
              </p>
              <div className="flex gap-4">
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300" aria-label="Instagram">
                  <Instagram size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300" aria-label="Facebook">
                  <Facebook size={18} />
                </a>
                <a href="#" className="w-10 h-10 rounded-full border border-white/10 flex items-center justify-center text-zinc-400 hover:text-white hover:border-white/20 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300" aria-label="YouTube">
                  <Youtube size={18} />
                </a>
              </div>
            </div>

            {/* Quick Links */}
            <div className="md:col-span-3">
              <h4 className="text-white font-medium mb-6">Explore</h4>
              <ul className="space-y-4 text-zinc-400 font-light">
                <li><a href="#about" className="hover:text-amber-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 rounded">About the Artist</a></li>
                <li><a href="#services" className="hover:text-amber-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 rounded">Luxury Services</a></li>
                <li><a href="#portfolio" className="hover:text-amber-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 rounded">Bridal Portfolio</a></li>
                <li><a href="#packages" className="hover:text-amber-200 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 rounded">Packages & Pricing</a></li>
              </ul>
            </div>

            {/* Newsletter */}
            <div className="md:col-span-4">
              <h4 className="text-white font-medium mb-6">Stay Inspired</h4>
              <p className="text-zinc-400 font-light text-sm mb-4">Subscribe to our newsletter for bridal tips and exclusive offers.</p>
              <form className="relative flex items-center" onSubmit={e => e.preventDefault()}>
                <input 
                  type="email" 
                  placeholder="Enter your email" 
                  className="w-full bg-white/5 border border-white/10 rounded-full pl-6 pr-14 py-3 text-sm text-white focus:outline-none focus:border-amber-300/50 transition-colors"
                  aria-label="Email for newsletter"
                />
                <button type="submit" className="absolute right-2 w-10 h-10 rounded-full bg-white/10 flex items-center justify-center text-white hover:bg-amber-400/20 hover:text-amber-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300" aria-label="Submit newsletter">
                  <ArrowRight size={18} />
                </button>
              </form>
            </div>
            
          </div>
        </div>

        {/* Copyright & Legal */}
        <div className="pt-8 mt-8 border-t border-white/10 flex flex-col md:flex-row justify-between items-center gap-4 text-xs text-zinc-500 font-light">
          <div>&copy; {new Date().getFullYear()} Siri Luxury MUA. All rights reserved.</div>
          <div className="flex gap-6">
            <a href="#" className="hover:text-zinc-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 rounded">Privacy Policy</a>
            <a href="#" className="hover:text-zinc-300 transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-amber-300 rounded">Terms of Service</a>
          </div>
        </div>
      </Container>
    </SlideSection>
  );
};

export default FooterSlide;
