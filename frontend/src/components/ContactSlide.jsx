import React from 'react';
import { motion } from 'framer-motion';
import { Phone, Mail, MapPin, Instagram, Clock } from 'lucide-react';
import SlideSection from './SlideSection';
import Container from './Container';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';

const ContactSlide = () => {
  return (
    <SlideSection id="contact" className="justify-center py-24 relative overflow-hidden">
      <Container className="h-full flex items-center justify-center">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 w-full h-full lg:h-[80vh]">
          
          {/* Left: Contact Info */}
          <motion.div 
            initial={{ opacity: 0, x: -24 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="flex flex-col justify-center space-y-12"
          >
            <div>
              <SectionHeading className="text-4xl md:text-5xl mb-4">Get in Touch</SectionHeading>
              <p className="text-zinc-400 text-lg font-light max-w-md">
                We're located in the heart of Hyderabad. Drop by the studio for a coffee and a consultation.
              </p>
            </div>

            <div className="space-y-6">
              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/30 transition-colors shrink-0">
                  <Phone size={18} />
                </div>
                <div>
                  <div className="text-white font-medium mb-1">WhatsApp & Calls</div>
                  <div className="text-zinc-400 font-light">+91 98765 43210</div>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/30 transition-colors shrink-0">
                  <Mail size={18} />
                </div>
                <div>
                  <div className="text-white font-medium mb-1">Email</div>
                  <div className="text-zinc-400 font-light">bookings@siriluxurymua.com</div>
                </div>
              </div>

              <div className="flex items-start gap-4 group cursor-pointer">
                <div className="w-10 h-10 rounded-full border border-white/10 bg-white/5 flex items-center justify-center text-zinc-400 group-hover:text-white group-hover:border-white/30 transition-colors shrink-0">
                  <Instagram size={18} />
                </div>
                <div>
                  <div className="text-white font-medium mb-1">Instagram</div>
                  <div className="text-zinc-400 font-light">@siriluxurymua</div>
                </div>
              </div>
            </div>

            <div>
              <h4 className="text-white font-medium mb-4 flex items-center gap-2">
                <Clock size={16} className="text-zinc-400" />
                Business Hours
              </h4>
              <div className="space-y-2 text-sm text-zinc-400 font-light">
                <div className="flex justify-between max-w-xs border-b border-white/10 pb-2">
                  <span>Monday - Friday</span>
                  <span>10:00 AM - 7:00 PM</span>
                </div>
                <div className="flex justify-between max-w-xs border-b border-white/10 pb-2">
                  <span>Saturday - Sunday</span>
                  <span>By Appointment Only</span>
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
            className="w-full h-[40vh] lg:h-full relative rounded-3xl overflow-hidden group"
          >
            {/* Dark overlay to match the theme over the map */}
            <div className="absolute inset-0 bg-slate-950/20 pointer-events-none mix-blend-multiply z-10 transition-opacity duration-500 group-hover:opacity-0" />
            
            <iframe 
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12182.30520634488!2d78.3847844!3d17.4399295!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bcb9158f201b205%3A0x11bbe7beed79093!2sJubilee%20Hills%2C%20Hyderabad%2C%20Telangana!5e0!3m2!1sen!2sin!4v1700000000000!5m2!1sen!2sin" 
              className="w-full h-full border-0 grayscale opacity-80 transition-all duration-700 group-hover:grayscale-0 group-hover:opacity-100" 
              allowFullScreen="" 
              loading="lazy" 
              referrerPolicy="no-referrer-when-downgrade"
            />

            <GlassCard className="absolute bottom-6 left-6 right-6 p-4 z-20 pointer-events-none flex items-center gap-3 bg-slate-950/70 backdrop-blur-xl">
              <MapPin className="text-zinc-300 shrink-0 group-hover:text-white transition-colors" size={24} />
              <div className="text-sm text-zinc-400">
                <strong className="text-white block font-medium">Studio Flagship</strong>
                Road No. 36, Jubilee Hills, Hyderabad
              </div>
            </GlassCard>
          </motion.div>

        </div>
      </Container>
    </SlideSection>
  );
};

export default ContactSlide;
