import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import SlideSection from './SlideSection';
import Container from './Container';
import SectionHeading from './SectionHeading';
import GlassCard from './GlassCard';
import { PrimaryButton, SecondaryButton } from './ButtonVariants';

const packages = [
  {
    name: 'Silver',
    subtitle: 'Essential Elegance',
    price: '₹25,000',
    features: ['HD Makeup', 'Basic Hairstyling', 'Saree Draping', 'Premium Lashes', 'In-studio Service'],
    highlight: false,
  },
  {
    name: 'Gold',
    subtitle: 'The Signature Experience',
    price: '₹35,000',
    features: ['Airbrush Makeup', 'Advanced Hairstyling', 'Multiple Draping Styles', 'Mink Lashes', 'Pre-wedding Consultation', 'Venue Service'],
    highlight: true,
  },
  {
    name: 'Platinum',
    subtitle: 'Uncompromised Luxury',
    price: '₹50,000',
    features: ['Airbrush Makeup', 'Editorial Hairstyling', 'Jewelry Styling', 'Mink Lashes', 'Pre-wedding Consultation', 'Venue Service', 'Touch-up Kit', 'Trial Session'],
    highlight: false,
  }
];

const PackagesSlide = () => {
  return (
    <SlideSection id="packages" className="justify-center py-10 relative overflow-hidden">
      <Container className="h-full flex flex-col justify-center">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 md:mb-16 shrink-0"
        >
          <SectionHeading className="text-4xl md:text-5xl mb-2">Investment in Elegance</SectionHeading>
          <p className="text-zinc-400 text-lg max-w-2xl mx-auto font-light">
            Transparent pricing tailored to your unique requirements.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 max-w-6xl mx-auto w-full items-center">
          {packages.map((pkg, i) => (
            <motion.div
              key={pkg.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.6, delay: i * 0.15, ease: [0.16, 1, 0.3, 1] }}
              className={`h-full ${pkg.highlight ? 'md:-my-4' : ''}`}
            >
              <GlassCard 
                className={`h-full flex flex-col relative ${pkg.highlight ? 'border-amber-300/30 bg-slate-900/50 shadow-[0_0_40px_rgba(251,191,36,0.05)]' : ''}`}
              >
                {pkg.highlight && (
                  <div className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 bg-gradient-to-r from-amber-200 to-amber-500 rounded-full text-[10px] font-bold text-slate-950 uppercase tracking-widest shadow-lg whitespace-nowrap">
                    Most Popular
                  </div>
                )}
                
                <div className="text-center mb-3 pt-2">
                  <h3 className="text-4xl text-white font-medium tracking-tight mb-1">{pkg.name}</h3>
                  <p className="text-zinc-400 text-xs mb-3">{pkg.subtitle}</p>
                  <div className="text-2xl text-white font-medium">{pkg.price}</div>
                </div>

                <div className="flex-1 space-y-2.5 mb-3">
                  {pkg.features.map((feature, j) => (
                    <div key={j} className="flex items-center gap-3">
                      <div className={`w-4 h-4 rounded-full flex items-center justify-center shrink-0 ${pkg.highlight ? 'bg-amber-400/10 text-amber-300' : 'bg-white/5 text-zinc-300'}`}>
                        <Check size={10} strokeWidth={3} />
                      </div>
                      <span className="text-zinc-300 text-xs">{feature}</span>
                    </div>
                  ))}
                </div>

                {pkg.highlight ? (
                  <PrimaryButton className="w-full py-2.5 text-sm">Select {pkg.name}</PrimaryButton>
                ) : (
                  <SecondaryButton className="w-full py-2.5 text-sm">Select {pkg.name}</SecondaryButton>
                )}
              </GlassCard>
            </motion.div>
          ))}
        </div>
      </Container>
    </SlideSection>
  );
};

export default PackagesSlide;
