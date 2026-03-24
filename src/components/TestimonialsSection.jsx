import { motion } from 'framer-motion';
import { Quote } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { testimonials } from '../data/siteData';

const TestimonialsSection = () => {
  return (
    <section id="testimonials" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Testimonials"
          title="What people feel after experiencing NG Network"
          description="Social proof ko premium cards me dikhaya gaya hai jisse visitors ko trust aur authenticity dono feel ho."
          align="center"
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {testimonials.map((item, index) => (
            <motion.div
              key={item.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.55, delay: index * 0.08 }}
              className="glass-card rounded-[28px] p-6"
            >
              <div className="flex items-center justify-between">
                <div>
                  <p className="text-lg font-semibold text-white">{item.name}</p>
                  <p className="text-sm text-brand-200">{item.role}</p>
                </div>
                <Quote className="text-brand-300" size={22} />
              </div>
              <p className="mt-5 text-sm leading-7 text-slate-300">“{item.quote}”</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
