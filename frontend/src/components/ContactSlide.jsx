import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Clock } from 'lucide-react';
import SlideSection from './SlideSection';
import Container from './Container';
import SectionHeading from './SectionHeading';

const ContactSlide = () => {
  return (
    <SlideSection id="contact" className="justify-center py-12 sm:py-16 md:py-20 relative bg-[#0A0A0E] overflow-hidden">
      {/* Background Glow */}
      <div className="hidden md:block absolute bottom-0 right-0 w-[50%] h-[50%] bg-[#5C4033]/10 rounded-full blur-[150px] pointer-events-none" />

      <Container className="h-full flex flex-col justify-center relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 lg:gap-24 w-full max-w-6xl mx-auto items-center">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center space-y-8 sm:space-y-12"
          >
            <div>
              <SectionHeading className="text-3xl sm:text-4xl lg:text-5xl mb-2 sm:mb-3 tracking-tight">
                Let's <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Connect</span>
              </SectionHeading>
              <p className="text-zinc-400 text-xs sm:text-sm md:text-base font-light max-w-md leading-relaxed">
                We're located in the heart of Hyderabad. Drop by the studio for a coffee and a personalized consultation.
              </p>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {/* Highlighted WhatsApp & Phone */}
              <a 
                href="https://wa.me/919876543210" 
                target="_blank" 
                rel="noopener noreferrer" 
                className="flex items-center gap-3 p-3.5 rounded-2xl bg-gradient-to-r from-amber-500/10 to-transparent border border-amber-500/20 active:scale-[0.98] transition-all"
              >
                <div className="w-10 h-10 rounded-full border border-amber-500/30 bg-amber-500/20 flex items-center justify-center text-amber-400 shrink-0">
                  <Phone size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-zinc-100 text-sm font-medium tracking-wide flex items-center gap-2">
                    WhatsApp & Calls 
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                  </div>
                  <div className="text-amber-400 font-light text-xs sm:text-sm">+91 98765 43210</div>
                </div>
              </a>

              {/* Email */}
              <div className="flex items-center gap-4 p-2 sm:p-0">
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/5 bg-[#17171C] flex items-center justify-center text-zinc-400 shrink-0">
                  <Mail size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-zinc-100 font-medium text-sm tracking-wide">Email</div>
                  <div className="text-zinc-400 font-light text-xs sm:text-sm">bookings@sriluxuryuma.com</div>
                </div>
              </div>

              {/* Instagram */}
              <a 
                href="https://instagram.com" 
                target="_blank" 
                rel="noopener noreferrer"
                className="flex items-center gap-4 p-2 sm:p-0"
              >
                <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-full border border-white/5 bg-[#17171C] flex items-center justify-center text-zinc-400 shrink-0">
                  <Instagram size={18} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-zinc-100 font-medium text-sm tracking-wide">Instagram</div>
                  <div className="text-zinc-400 font-light text-xs sm:text-sm">@sriluxuryuma</div>
                </div>
              </a>
            </div>

            <div>
              <h4 className="text-zinc-100 font-medium text-sm mb-3 flex items-center gap-2 tracking-wide">
                <Clock size={16} className="text-amber-400" />
                Business Hours
              </h4>
              <div className="space-y-2 text-xs sm:text-sm text-zinc-400 font-light">
                <div className="flex justify-between max-w-[260px] border-b border-white/5 pb-1.5">
                  <span>Monday - Friday</span>
                  <span className="text-zinc-300">10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between max-w-[260px] border-b border-white/5 pb-1.5">
                  <span>Saturday - Sunday</span>
                  <span className="text-amber-400">By Appointment</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Map Embed */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.7, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-[280px] sm:h-[380px] lg:min-h-[480px] relative rounded-2xl sm:rounded-[2rem] overflow-hidden group border border-white/5 shadow-2xl"
          >
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12182.30520634488!2d78.3847844!3d17.4399295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11bbe7beed79093!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              className="w-full h-full border-0 grayscale opacity-80" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Location"
            />

            {/* Map Card Badge */}
            <div className="absolute bottom-4 left-4 right-4 sm:bottom-6 sm:left-6 sm:right-6 p-4 z-20 pointer-events-none flex items-center gap-3 bg-[#0A0A0E]/85 backdrop-blur-md border border-white/10 rounded-xl shadow-xl">
              <div className="w-10 h-10 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <MapPin className="text-amber-400" size={18} strokeWidth={1.5} />
              </div>
              <div className="text-xs sm:text-sm text-zinc-400">
                <strong className="text-zinc-100 block font-medium tracking-wide mb-0.5">Studio Flagship</strong>
                <span className="font-light text-[11px] sm:text-xs">Road No. 36, Jubilee Hills, Hyderabad</span>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </SlideSection>
  );
};

export default ContactSlide;
