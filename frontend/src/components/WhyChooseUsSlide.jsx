import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Gem, Home, Sparkles, Clock, Paintbrush, Heart } from 'lucide-react';
import SlideSection from './SlideSection';
import Container from './Container';
import SectionHeading from './SectionHeading';

const reasons = [
  { title: 'Premium Products', desc: 'Only the highest quality international brands.', icon: Gem },
  { title: 'Certified Artist', desc: 'Internationally trained and certified.', icon: Award },
  { title: 'Hygienic Tools', desc: 'Strict sanitization protocols for every client.', icon: ShieldCheck },
  { title: 'Home Service', desc: 'Luxury salon experience brought to your venue.', icon: Home },
  { title: 'Custom Look', desc: 'Tailored perfectly to your facial structure.', icon: Paintbrush },
  { title: 'On-Time Service', desc: 'Punctuality is our guarantee on your big day.', icon: Clock },
  { title: 'Long-Lasting', desc: 'Flawless finish that outlasts the celebration.', icon: Sparkles },
  { title: 'Client First', desc: 'Dedicated to making you feel comfortable.', icon: Heart },
];

const WhyChooseUsSlide = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <SlideSection id="why-us" className="justify-center py-20 relative bg-[#0A0A0E]">
      {/* Soft Ambient Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#5C4033]/10 rounded-full blur-[160px] pointer-events-none" />

      <Container className="relative z-10 h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-16 md:mb-20 shrink-0"
        >
          <SectionHeading className="text-3xl md:text-5xl lg:text-5xl mb-4 tracking-tight">
            The <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Siri Standard</span>
          </SectionHeading>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Uncompromising quality and dedication to the craft. We go above and beyond to ensure your special day is truly flawless.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 items-stretch max-w-6xl mx-auto w-full"
        >
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div 
                key={i} 
                variants={cardVariants} 
                className="h-full"
              >
                <motion.div 
                  whileHover={{ y: -8 }}
                  transition={{ duration: 0.4, ease: "easeOut" }}
                  className="h-full group relative rounded-2xl bg-gradient-to-b from-[#17171C] to-[#0A0A0E] border border-white/5 hover:border-amber-500/30 transition-colors duration-500"
                >
                  {/* Subtle Hover Glow inside card */}
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-amber-500/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                  
                  <div className="h-full flex flex-col items-center text-center p-5 md:p-6 relative z-10">
                    {/* Icon Container */}
                    <div className="w-12 h-12 mb-4 rounded-full bg-[#111116] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-amber-400 group-hover:scale-110 group-hover:border-amber-500/40 group-hover:shadow-[0_0_20px_rgba(245,158,11,0.2)] group-hover:bg-[#1a110a] transition-all duration-500">
                      <Icon size={20} strokeWidth={1.5} />
                    </div>
                    
                    {/* Typography */}
                    <h4 className="text-zinc-200 font-light tracking-wide text-sm md:text-base mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-amber-200 group-hover:to-amber-500 transition-all duration-500">
                      {reason.title}
                    </h4>
                    <p className="text-zinc-500 text-[11px] md:text-xs font-light leading-relaxed group-hover:text-zinc-300 transition-colors duration-500">
                      {reason.desc}
                    </p>
                  </div>
                </motion.div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </SlideSection>
  );
};

export default WhyChooseUsSlide;
