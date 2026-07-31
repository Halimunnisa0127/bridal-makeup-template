import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Plus, Minus } from 'lucide-react';
import SlideSection from './SlideSection';
import Container from './Container';
import SectionHeading from './SectionHeading';

const faqs = [
  {
    id: 1,
    q: 'How far in advance should I book my bridal makeup?',
    a: 'We recommend booking 6 to 9 months in advance, especially for dates during peak wedding seasons (November to February & April to June). Our calendar fills up quickly.'
  },
  {
    id: 2,
    q: 'Do you offer a trial before the wedding day?',
    a: 'Yes! A trial is highly recommended and included in our Platinum package. It allows us to finalize your look, test how the products wear on your skin, and ensure you are 100% confident.'
  },
  {
    id: 3,
    q: 'What is HD vs. Airbrush makeup?',
    a: 'HD makeup is applied manually using brushes/blenders and is formulated to look flawless on high-definition cameras. Airbrush makeup is sprayed on as a fine mist, providing a weightless, highly water-resistant, and incredibly long-lasting finish.'
  },
  {
    id: 4,
    q: 'Can you accommodate my bridal party (bridesmaids/family)?',
    a: 'Absolutely. Depending on the party size, I will bring my trained assistant team to ensure everyone gets ready on time without compromising on quality.'
  },
  {
    id: 5,
    q: 'Do you travel to the venue for makeup?',
    a: 'Yes, we provide on-location services for brides. Travel within the city limits is included in select packages, while out-of-station travel and accommodation are billed separately.'
  }
];

const FaqSlide = () => {
  const [openId, setOpenId] = useState(null);

  return (
    <SlideSection id="faq" className="justify-center py-24 relative overflow-hidden">
      <Container className="h-full flex flex-col justify-center max-w-4xl">
        <motion.div
          initial={{ opacity: 0, y: 24 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="text-center mb-12 md:mb-16"
        >
          <SectionHeading className="text-4xl md:text-5xl mb-4">Curiosity Addressed</SectionHeading>
          <p className="text-zinc-400 text-lg font-light">
            Everything you need to know about our luxury bridal experience.
          </p>
        </motion.div>

        <div className="space-y-4">
          {faqs.map((faq, i) => {
            const isOpen = openId === faq.id;
            return (
              <motion.div 
                key={faq.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.6, delay: i * 0.1, ease: [0.16, 1, 0.3, 1] }}
                className="border-b border-white/10"
              >
                <button
                  onClick={() => setOpenId(isOpen ? null : faq.id)}
                  className="w-full py-6 flex items-center justify-between text-left group focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-zinc-400 rounded-sm"
                >
                  <span className={`text-lg md:text-xl font-medium tracking-tight transition-colors duration-300 ${isOpen ? 'text-white' : 'text-zinc-400 group-hover:text-zinc-300'}`}>
                    {faq.q}
                  </span>
                  <div className={`ml-4 shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-180 text-white' : 'text-zinc-500 group-hover:text-zinc-400'}`}>
                    {isOpen ? <Minus size={20} /> : <Plus size={20} />}
                  </div>
                </button>
                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
                      className="overflow-hidden"
                    >
                      <p className="pb-6 text-zinc-400 font-light leading-relaxed">
                        {faq.a}
                      </p>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            );
          })}
        </div>
      </Container>
    </SlideSection>
  );
};

export default FaqSlide;
