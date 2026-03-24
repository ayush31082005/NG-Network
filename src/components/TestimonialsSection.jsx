import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Quote, Star } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { testimonials } from '../data/siteData';

const TestimonialsSection = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    if (testimonials.length <= 2) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 2) % testimonials.length);
    }, 3500);

    return () => clearInterval(interval);
  }, []);

  const visibleTestimonials = [
    testimonials[currentIndex],
    testimonials[(currentIndex + 1) % testimonials.length],
  ];

  return (
    <section id="testimonials" className="py-16 sm:py-20">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Testimonials"
          title="What our learners say about NG Networks"
          description="Real experiences from students and professionals who benefited from NG Networks training and mentorship."
          align="center"
        />

        <div className="mt-10">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ opacity: 0, x: 40 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -40 }}
              transition={{ duration: 0.6 }}
              className="grid gap-6 md:grid-cols-2"
            >
              {visibleTestimonials.map((item, index) => (
                <div
                  key={`${item.name}-${index}`}
                  className="glass-card rounded-[28px] p-6 sm:p-7"
                >
                  <div className="flex items-start justify-between gap-4">
                    <div>
                      <p className="text-xl font-semibold text-white">{item.name}</p>
                      <p className="mt-1 text-sm text-brand-200">{item.role}</p>
                    </div>
                    <Quote className="shrink-0 text-brand-300" size={28} />
                  </div>

                  <div className="mt-5 flex gap-1">
                    {[...Array(5)].map((_, starIndex) => (
                      <Star
                        key={starIndex}
                        size={16}
                        className="fill-yellow-400 text-yellow-400"
                      />
                    ))}
                  </div>

                  <p className="mt-5 text-sm leading-7 text-slate-300 sm:text-base">
                    “{item.quote}”
                  </p>
                </div>
              ))}
            </motion.div>
          </AnimatePresence>

          <div className="mt-6 flex justify-center gap-2">
            {Array.from({ length: Math.ceil(testimonials.length / 2) }).map((_, index) => {
              const dotIndex = index * 2;
              const isActive = currentIndex === dotIndex;

              return (
                <button
                  key={index}
                  onClick={() => setCurrentIndex(dotIndex)}
                  className={`h-2.5 rounded-full transition-all ${isActive ? 'w-8 bg-brand-300' : 'w-2.5 bg-white/25'
                    }`}
                  aria-label={`Go to testimonial group ${index + 1}`}
                />
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;