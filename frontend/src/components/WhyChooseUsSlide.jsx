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
      transition: { staggerChildren: 0.08 }
    }
  };

  const cardVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <SlideSection id="why-us" className="justify-center py-12 sm:py-16 md:py-20 relative bg-[#0A0A0E]">
      {/* Background Glow (desktop optimized) */}
      <div className="hidden md:block absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[70%] h-[70%] bg-[#5C4033]/10 rounded-full blur-[160px] pointer-events-none" />

      <Container className="relative z-10 h-full flex flex-col justify-center w-full">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.7, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 sm:mb-16 shrink-0"
        >
          <SectionHeading className="text-3xl sm:text-4xl md:text-5xl lg:text-5xl mb-3 tracking-tight">
            The <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Siri Standard</span>
          </SectionHeading>
          <p className="text-zinc-400 text-xs sm:text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed px-2">
            Uncompromising quality and dedication to the craft. We go above and beyond to ensure your special day is truly flawless.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-30px" }}
          className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 items-stretch max-w-6xl mx-auto w-full"
        >
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div 
                key={i} 
                variants={cardVariants} 
                className="h-full"
              >
                <div className="h-full group relative rounded-2xl bg-gradient-to-b from-[#17171C] to-[#0A0A0E] border border-white/5 hover:border-amber-500/30 transition-colors duration-300">
                  <div className="h-full flex flex-col items-center text-center p-4 sm:p-6 relative z-10">
                    <div className="w-10 h-10 sm:w-12 sm:h-12 mb-3 sm:mb-4 rounded-full bg-[#111116] border border-white/10 flex items-center justify-center text-zinc-400 group-hover:text-amber-400 group-hover:border-amber-500/40 transition-all duration-300">
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    
                    <h4 className="text-zinc-200 font-light tracking-wide text-sm sm:text-base mb-1.5 group-hover:text-amber-300 transition-colors">
                      {reason.title}
                    </h4>
                    <p className="text-zinc-400 text-xs font-light leading-relaxed">
                      {reason.desc}
                    </p>
                  </div>
                </div>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </SlideSection>
  );
};

export default WhyChooseUsSlide;
