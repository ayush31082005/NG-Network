import { motion } from 'framer-motion';
import { admissionHighlights, admissionSteps } from '../data/siteData';
import SectionTitle from './SectionTitle';

const AdmissionSection = () => {
  return (
    <section id="admission" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Admission Section"
          title="Admissions made simple, premium and confidence-building"
          description="Admin section ki jagah yahan complete admission-focused experience diya gaya hai jisme program highlights, process flow aur application CTA clear tariqe se dikhte hain."
          align="center"
        />

        <div className="mt-12 grid gap-6 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-5 sm:grid-cols-2">
            {admissionHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 22 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="glass-card rounded-[28px] p-6"
              >
                <div className="text-3xl">{item.icon}</div>
                <h3 className="mt-4 text-xl font-semibold text-white">{item.title}</h3>
                <p className="mt-3 text-sm leading-7 text-slate-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 28 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-[32px] p-6 sm:p-8"
          >
            <p className="text-sm uppercase tracking-[0.28em] text-brand-200">How Admission Works</p>
            <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">Structured journey from interest to enrollment</h3>

            <div className="mt-8 space-y-4">
              {admissionSteps.map((step, index) => (
                <div key={step} className="flex gap-4 rounded-2xl border border-white/10 bg-white/5 p-4">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-slate-950">
                    {index + 1}
                  </div>
                  <p className="pt-1 text-sm leading-7 text-slate-200">{step}</p>
                </div>
              ))}
            </div>

            <div className="mt-8 flex flex-col gap-4 sm:flex-row">
              <a
                href="#"
                className="inline-flex items-center justify-center rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:translate-y-[-2px]"
              >
                Apply for Admission
              </a>
              <a
                href="#youtube"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Explore Programs
              </a>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AdmissionSection;
