import { motion } from 'framer-motion';
import { admissionHighlights, admissionSteps } from '../data/siteData';
import SectionTitle from './SectionTitle';

const GOOGLE_FORM_LINK = 'PASTE_YOUR_GOOGLE_FORM_LINK_HERE';

const AdmissionSection = () => {
  return (
    <section id="admission" className="py-14 sm:py-16">
      <div className="section-shell">
        <SectionTitle
          eyebrow="Admissions"
          title="A simple, premium and confidence-driven admission experience"
          align="center"
        />

        <div className="mt-8 grid gap-5 lg:grid-cols-[1.1fr_0.9fr]">
          <div className="grid gap-4 sm:grid-cols-2">
            {admissionHighlights.map((item, index) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.07 }}
                className="glass-card rounded-[24px] p-5"
              >
                <div className="text-2xl">{item.icon}</div>
                <h3 className="mt-3 text-lg font-semibold text-white">{item.title}</h3>
                <p className="mt-2 text-sm leading-6 text-slate-300">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0, x: 25 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="glass-card rounded-[28px] p-5 sm:p-6"
          >
            <p className="text-xs uppercase tracking-[0.25em] text-brand-200">
              Admission Process
            </p>

            <h3 className="mt-3 text-xl font-bold text-white sm:text-2xl">
              Your journey from interest to enrollment
            </h3>

            <div className="mt-6 space-y-3">
              {admissionSteps.map((step, index) => (
                <div
                  key={step}
                  className="flex gap-3 rounded-xl border border-white/10 bg-white/5 p-3"
                >
                  <div className="flex h-8 w-8 items-center justify-center rounded-full bg-white text-xs font-bold text-slate-900">
                    {index + 1}
                  </div>
                  <p className="text-sm leading-6 text-slate-200">{step}</p>
                </div>
              ))}
            </div>

            <div className="mt-6 flex flex-col gap-3 sm:flex-row">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLScgffvRxgk2PM1H0L-xUENxnFN19mn6mpkmVfDKK2sfInGi1w/viewform?pli=1"
                target="_blank"
                rel="noreferrer"
                className="inline-flex items-center justify-center rounded-full bg-white px-5 py-2.5 text-sm font-semibold text-slate-900 transition hover:translate-y-[-2px]"
              >
                Apply Now
              </a>
              <a
                href="#youtube"
                className="inline-flex items-center justify-center rounded-full border border-white/15 bg-white/5 px-5 py-2.5 text-sm font-semibold text-white transition hover:bg-white/10"
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