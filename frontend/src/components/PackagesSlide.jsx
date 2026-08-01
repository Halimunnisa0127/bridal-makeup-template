import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SlideSection from './SlideSection';
import Container from './Container';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import GlareHover from './GlareHover';

const packages = [
  {
    name: 'Silver',
    subtitle: 'Essential Elegance',
    price: '₹25,000',
    features: ['HD Makeup', 'Basic Hairstyling', 'Saree Draping', 'Premium Lashes', 'In-studio Service'],
    highlight: false,
    badge: 'Elegant Choice'
  },
  {
    name: 'Gold',
    subtitle: 'The Signature Experience',
    price: '₹35,000',
    features: ['Airbrush Makeup', 'Advanced Hairstyling', 'Multiple Draping Styles', 'Mink Lashes', 'Pre-wedding Consultation', 'Venue Service'],
    highlight: true,
    badge: 'Most Popular'
  },
  {
    name: 'Platinum',
    subtitle: 'Uncompromised Luxury',
    price: '₹50,000',
    features: ['Airbrush Makeup', 'Editorial Hairstyling', 'Jewelry Styling', 'Mink Lashes', 'Pre-wedding Consultation', 'Venue Service', 'Touch-up Kit', 'Trial Session'],
    highlight: false,
    badge: 'Ultimate Luxury'
  }
];

const PackagesSlide = () => {
  return (
    <SlideSection id="packages" className="justify-center py-16 md:py-20 relative bg-[#0A0A0E]">
      {/* Subtle Background Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60%] h-[60%] bg-[#5C4033]/10 rounded-full blur-[150px] pointer-events-none" />

      <Container className="relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-10 shrink-0"
        >
          <SectionHeading className="text-3xl md:text-5xl lg:text-5xl mb-2 tracking-tight">
            Investment in <span className="font-medium text-transparent bg-clip-text bg-gradient-to-r from-amber-200 via-amber-400 to-amber-600">Elegance</span>
          </SectionHeading>
          <p className="text-zinc-400 text-sm md:text-base max-w-2xl mx-auto font-light leading-relaxed">
            Transparent pricing tailored to your unique requirements. Experience the pinnacle of bridal artistry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto w-full items-stretch">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              whileHover={{ y: -6 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.5, 
                delay: i * 0.1, 
                ease: [0.16, 1, 0.3, 1],
              }}
              className="h-full relative group z-10"
            >
              <div 
                className={`h-full backdrop-blur-md rounded-2xl relative transition-all duration-500 overflow-hidden border ${
                  pkg.highlight 
                    ? 'border-amber-500/40 bg-gradient-to-b from-[#1a110a] to-[#0A0A0E] shadow-[0_0_40px_rgba(245,158,11,0.15)] group-hover:shadow-[0_0_60px_rgba(245,158,11,0.25)] group-hover:border-amber-400/70' 
                    : pkg.name === 'Silver'
                      ? 'border-[#A8A8B3]/30 bg-gradient-to-b from-[#17171C] to-[#0A0A0E] shadow-[0_0_30px_rgba(168,168,179,0.05)] hover:border-[#A8A8B3]/60 group-hover:shadow-[0_0_40px_rgba(168,168,179,0.15)]'
                      : 'border-[#E5E7EB]/30 bg-gradient-to-b from-[#1A1D24] to-[#0A0A0E] hover:border-[#F3F4F6]/70 shadow-[0_0_30px_rgba(229,231,235,0.05)] group-hover:shadow-[0_0_40px_rgba(245,245,245,0.15)]'
                }`}
              >
                <GlareHover
                  className="h-full"
                  glareColor={pkg.highlight ? "#f59e0b" : pkg.name === 'Silver' ? "#a8a8b3" : "#ffffff"}
                  glareOpacity={pkg.highlight ? 0.25 : 0.15}
                  transitionDuration={800}
                >
                  {/* Tier Badge (Absolute, Full Width) */}
                  <div className="absolute top-0 left-0 right-0 z-30">
                    <div className={`w-full text-center py-2 text-[#0A0A0E] text-[10px] md:text-xs font-bold uppercase tracking-[0.25em] shadow-lg ${
                      pkg.name === 'Gold'
                        ? 'bg-gradient-to-r from-amber-600 via-amber-400 to-amber-600'
                        : pkg.name === 'Silver'
                          ? 'bg-gradient-to-r from-[#9CA3AF] via-[#E5E7EB] to-[#9CA3AF]'
                          : 'bg-gradient-to-r from-[#D1D5DB] via-[#FFFFFF] to-[#D1D5DB]'
                    }`}>
                      {pkg.badge}
                    </div>
                  </div>
                  
                  {/* Inner Padding Container */}
                  <div className="flex flex-col h-full p-5 md:p-6 pt-10 md:pt-12 relative z-30">
                    {/* Package Header */}
                    <div className={`text-center mb-5 border-b pb-5 ${pkg.highlight ? 'border-white/10' : pkg.name === 'Silver' ? 'border-[#A8A8B3]/20' : 'border-[#D1D5DB]/30'}`}>
                      <h3 className={`text-xl lg:text-2xl font-light tracking-tight mb-1 ${
                        pkg.highlight 
                          ? 'text-transparent bg-clip-text bg-gradient-to-br from-amber-200 to-amber-600' 
                          : pkg.name === 'Silver' 
                            ? 'text-transparent bg-clip-text bg-gradient-to-br from-[#E5E7EB] via-[#A8A8B3] to-[#71717A]' 
                            : 'text-transparent bg-clip-text bg-gradient-to-br from-[#F3F4F6] via-[#D1D5DB] to-[#9CA3AF]'
                      }`}>
                        {pkg.name}
                      </h3>
                      <p className={`text-[10px] md:text-xs tracking-wide font-light mb-3 uppercase ${
                        pkg.highlight 
                          ? 'text-zinc-400' 
                          : pkg.name === 'Silver' 
                            ? 'text-[#A8A8B3]/80' 
                            : 'text-[#D1D5DB]/80'
                      }`}>{pkg.subtitle}</p>
                      <div className="text-2xl lg:text-3xl font-light tracking-tight">
                        <span className={
                          pkg.highlight 
                            ? 'text-white' 
                            : pkg.name === 'Silver' 
                              ? 'text-[#E5E7EB]' 
                              : 'text-[#F3F4F6]'
                        }>{pkg.price}</span>
                      </div>
                    </div>

                    {/* Features List */}
                    <div className="flex-1 space-y-2 mb-6">
                      {pkg.features.map((feature, j) => (
                        <div key={j} className="flex items-start gap-3">
                          <div className={`w-3.5 h-3.5 mt-0.5 rounded-full flex items-center justify-center shrink-0 ${
                            pkg.highlight 
                              ? 'bg-amber-500/20 text-amber-400 shadow-[0_0_10px_rgba(245,158,11,0.3)]' 
                              : pkg.name === 'Silver'
                                ? 'bg-[#A8A8B3]/20 text-[#E5E7EB] shadow-[0_0_10px_rgba(168,168,179,0.2)]'
                                : 'bg-[#E5E7EB]/20 text-[#F3F4F6] shadow-[0_0_10px_rgba(229,231,235,0.2)]'
                          }`}>
                            <Check size={8} strokeWidth={3} />
                          </div>
                          <span className={`text-xs tracking-wide font-light leading-snug ${
                            pkg.highlight 
                              ? 'text-zinc-200' 
                              : pkg.name === 'Silver' 
                                ? 'text-[#D1D5DB]' 
                                : 'text-[#E5E7EB]'
                          }`}>{feature}</span>
                        </div>
                      ))}
                    </div>

                    {/* Button */}
                    <div className="mt-auto pointer-events-auto">
                      <button className={`w-full py-2.5 font-medium text-xs md:text-sm rounded-full transition-all duration-300 ${
                        pkg.name === 'Gold'
                          ? 'bg-gradient-to-r from-amber-500 via-amber-400 to-amber-600 text-[#0A0A0E] shadow-[0_0_15px_rgba(245,158,11,0.2)] hover:shadow-[0_0_25px_rgba(245,158,11,0.4)]'
                          : pkg.name === 'Silver'
                            ? 'bg-gradient-to-r from-[#9CA3AF] via-[#E5E7EB] to-[#9CA3AF] text-[#0A0A0E] shadow-[0_0_15px_rgba(156,163,175,0.2)] hover:shadow-[0_0_25px_rgba(156,163,175,0.4)]'
                            : 'bg-gradient-to-r from-[#D1D5DB] via-[#FFFFFF] to-[#D1D5DB] text-[#0A0A0E] shadow-[0_0_15px_rgba(209,213,219,0.2)] hover:shadow-[0_0_25px_rgba(209,213,219,0.4)]'
                      }`}>
                        Select {pkg.name}
                      </button>
                    </div>
                  </div>
                </GlareHover>
              </div>
            </motion.div>
          ))}
        </div>
      </Container>
    </SlideSection>
  );
};

export default PackagesSlide;
