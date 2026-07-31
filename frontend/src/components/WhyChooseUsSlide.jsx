import React from 'react';
import { motion } from 'framer-motion';
import { ShieldCheck, Award, Gem, Home, Sparkles, Clock, Paintbrush, Heart } from 'lucide-react';
import SlideSection from './SlideSection';
import Container from './Container';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';

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
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] } }
  };

  return (
    <SlideSection id="why-us" className="justify-center py-14 relative overflow-hidden">
      <Container className="h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 md:mb-16 shrink-0"
        >
          <SectionHeading className="text-4xl md:text-5xl mb-4">The Siri Standard</SectionHeading>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light">
            Uncompromising quality and dedication to the craft.
          </p>
        </motion.div>

        <motion.div 
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          className="grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6 items-center max-w-5xl mx-auto"
        >
          {reasons.map((reason, i) => {
            const Icon = reason.icon;
            return (
              <motion.div key={i} variants={cardVariants} className="h-full">
                <GlassCard className="h-full flex flex-col items-center text-center p-6 md:p-8 !border-amber-300/20 !bg-gradient-to-br !from-amber-400/5 !to-transparent hover:!border-amber-300/40 hover:!shadow-[0_0_30px_rgba(251,191,36,0.15)] group">
                  <div className="w-12 h-12 mb-5 rounded-full bg-amber-400/10 border border-amber-300/20 flex items-center justify-center text-amber-300 group-hover:scale-110 group-hover:bg-amber-400/20 transition-all duration-300">
                    <Icon size={22} strokeWidth={1.5} />
                  </div>
                  <h4 className="text-amber-50 font-medium text-base md:text-lg mb-2 group-hover:text-amber-200 transition-colors">{reason.title}</h4>
                  <p className="text-amber-200/60 text-xs md:text-sm font-light leading-relaxed">{reason.desc}</p>
                </GlassCard>
              </motion.div>
            );
          })}
        </motion.div>
      </Container>
    </SlideSection>
  );
};

export default WhyChooseUsSlide;
