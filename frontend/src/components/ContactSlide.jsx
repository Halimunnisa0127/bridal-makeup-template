import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Clock, MessageCircle } from 'lucide-react';
import SlideSection from './SlideSection';
import Container from './Container';
import SectionHeading from './SectionHeading';

const ContactSlide = () => {
  return (
    <SlideSection id="contact" className="justify-center py-20 relative bg-[#0A0A0E] overflow-hidden">
      {/* Soft Ambient Glow */}
      <div className="absolute bottom-0 right-0 w-[50%] h-[50%] bg-[#5C4033]/10 rounded-full blur-[150px] pointer-events-none" />

      <Container className="h-full flex items-center justify-center relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full h-full lg:h-[80vh] max-w-6xl mx-auto items-center">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center space-y-14"
          >
            <div>
              <SectionHeading className="text-3xl md:text-5xl lg:text-5xl mb-4 tracking-tight">
                Let's <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Connect</span>
              </SectionHeading>
              <p className="text-zinc-400 text-sm md:text-base font-light max-w-md leading-relaxed">
                We're located in the heart of Hyderabad. Drop by the studio for a coffee and a personalized consultation.
              </p>
            </div>

            <div className="space-y-8">
              {/* Highlighted WhatsApp & Phone */}
              <div className="flex items-start gap-5 group cursor-pointer p-4 -ml-4 rounded-2xl bg-gradient-to-r from-amber-500/5 to-transparent border border-amber-500/10 hover:border-amber-500/30 hover:bg-amber-500/10 transition-all duration-300">
                <div className="w-12 h-12 rounded-full border border-amber-500/30 bg-amber-500/10 flex items-center justify-center text-amber-400 group-hover:scale-110 group-hover:bg-amber-400 group-hover:text-[#0A0A0E] group-hover:shadow-[0_0_20px_rgba(245,158,11,0.3)] transition-all duration-500 shrink-0">
                  <Phone size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-zinc-100 font-medium mb-1 tracking-wide flex items-center gap-2">
                    WhatsApp & Calls 
                    <span className="flex h-2 w-2 relative">
                      <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-amber-400 opacity-75"></span>
                      <span className="relative inline-flex rounded-full h-2 w-2 bg-amber-500"></span>
                    </span>
                  </div>
                  <div className="text-amber-400/90 font-light">+91 98765 43210</div>
                </div>
              </div>

              {/* Email */}
              <div className="flex items-start gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/5 bg-[#17171C] flex items-center justify-center text-zinc-400 group-hover:text-amber-400 group-hover:border-amber-500/30 group-hover:bg-[#1a110a] transition-all duration-500 shrink-0">
                  <Mail size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-zinc-100 font-medium mb-1 tracking-wide group-hover:text-amber-200 transition-colors">Email</div>
                  <div className="text-zinc-500 font-light group-hover:text-zinc-300 transition-colors">bookings@sriluxuryuma.com</div>
                </div>
              </div>

              {/* Instagram */}
              <div className="flex items-start gap-5 group cursor-pointer">
                <div className="w-12 h-12 rounded-full border border-white/5 bg-[#17171C] flex items-center justify-center text-zinc-400 group-hover:text-amber-400 group-hover:border-amber-500/30 group-hover:bg-[#1a110a] transition-all duration-500 shrink-0">
                  <Instagram size={20} strokeWidth={1.5} />
                </div>
                <div>
                  <div className="text-zinc-100 font-medium mb-1 tracking-wide group-hover:text-amber-200 transition-colors">Instagram</div>
                  <div className="text-zinc-500 font-light group-hover:text-zinc-300 transition-colors">@sriluxuryuma</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-zinc-100 font-medium mb-5 flex items-center gap-2.5 tracking-wide">
                <div className="w-8 h-8 rounded-full bg-[#17171C] border border-white/5 flex items-center justify-center">
                  <Clock size={14} className="text-amber-400" />
                </div>
                Business Hours
              </h4>
              <div className="space-y-3 text-sm text-zinc-400 font-light ml-11">
                <div className="flex justify-between max-w-[280px] border-b border-white/5 pb-2">
                  <span>Monday - Friday</span>
                  <span className="text-zinc-300">10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between max-w-[280px] border-b border-white/5 pb-2">
                  <span>Saturday - Sunday</span>
                  <span className="text-amber-400/80">By Appointment</span>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Right: Map Embed */}
          <motion.div 
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="w-full h-[50vh] lg:h-[90%] relative rounded-[2rem] overflow-hidden group border border-white/5 shadow-2xl"
          >
            {/* Dark overlay to match the theme over the map */}
            <div className="absolute inset-0 bg-[#0A0A0E]/30 pointer-events-none mix-blend-multiply z-10 transition-opacity duration-700 group-hover:opacity-0" />
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12182.30520634488!2d78.3847844!3d17.4399295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11bbe7beed79093!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              className="w-full h-full border-0 grayscale opacity-70 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
              title="Studio Location"
            />

            {/* Map Card */}
            <div className="absolute bottom-6 left-6 right-6 p-5 z-20 pointer-events-none flex items-center gap-4 bg-[#0A0A0E]/80 backdrop-blur-2xl border border-white/10 rounded-2xl shadow-xl transition-transform duration-500 group-hover:-translate-y-2">
              <div className="w-12 h-12 rounded-full bg-amber-500/10 border border-amber-500/20 flex items-center justify-center shrink-0">
                <MapPin className="text-amber-400 group-hover:scale-110 transition-transform duration-300" size={20} strokeWidth={1.5} />
              </div>
              <div className="text-sm text-zinc-400">
                <strong className="text-zinc-100 block font-medium tracking-wide mb-0.5">Studio Flagship</strong>
                <span className="font-light">Road No. 36, Jubilee Hills, Hyderabad</span>
              </div>
            </div>
          </motion.div>

        </div>
      </Container>
    </SlideSection>
  );
};

export default ContactSlide;
