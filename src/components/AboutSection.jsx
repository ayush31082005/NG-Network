import { motion } from 'framer-motion';
import { CheckCircle2 } from 'lucide-react';
import SectionTitle from './SectionTitle';

const bullets = [
  'Youth-centric learning and opportunity ecosystem',
  'Strong focus on mentorship, motivation and action',
  'Clean digital presence that builds credibility and trust',
  'Community-first storytelling with modern visual design',
];

const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="section-shell grid gap-10 lg:grid-cols-[0.95fr_1.05fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="glass-card relative overflow-hidden rounded-[32px] p-6 sm:p-8"
        >
          <div className="absolute right-0 top-0 h-40 w-40 rounded-full bg-brand-400/20 blur-3xl" />
          <div className="relative rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-900 via-slate-900 to-slate-800 p-6 sm:p-8">
            <p className="text-sm uppercase tracking-[0.28em] text-brand-200">NG Network Vision</p>
            <h3 className="mt-4 text-2xl font-bold text-white sm:text-3xl">
              Learning, guidance and opportunity under one powerful identity
            </h3>
            <p className="mt-5 text-base leading-8 text-slate-300">
              NG Network ko is website concept me ek premium, trustworthy aur growth-oriented platform ke roop me present kiya gaya hai.
              Yahan focus sirf information dena nahi, balki visitor ko inspire, guide aur convert karna hai.
            </p>
          </div>
        </motion.div>

        <div>
          <SectionTitle
            eyebrow="About NG Network"
            title="A brand story designed to feel aspirational, credible and community-first"
            description="Ye section NG Network ke mission, digital identity aur student-focused approach ko highlight karta hai. Tone premium rakha gaya hai taaki website professional aur trustworthy lage."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {bullets.map((item, index) => (
              <motion.div
                key={item}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="glass-card rounded-[26px] p-5"
              >
                <CheckCircle2 className="text-brand-300" size={22} />
                <p className="mt-4 text-sm leading-7 text-slate-200">{item}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
