import { motion } from 'framer-motion';
import { nitinPoints } from '../data/siteData';
import SectionTitle from './SectionTitle';

const NitinSection = () => {
  return (
    <section id="nitin" className="py-20 sm:py-24">
      <div className="section-shell grid gap-8 lg:grid-cols-[0.85fr_1.15fr] lg:items-center">
        <motion.div
          initial={{ opacity: 0, x: -28 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="glass-card rounded-[32px] p-6 sm:p-8"
        >
          <div className="mx-auto flex h-[280px] w-full max-w-sm animate-float items-center justify-center rounded-[28px] border border-white/10 bg-gradient-to-br from-brand-400/15 via-violet-500/10 to-transparent text-center">
            <div>
              <div className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-white text-2xl font-black text-slate-950 shadow-soft">
                NG
              </div>
              <p className="mt-5 text-xl font-semibold text-white">Nitin Goswami</p>
              <p className="mt-1 text-sm text-slate-300">Founder / Mentor / Community Builder</p>
            </div>
          </div>
        </motion.div>

        <div>
          <SectionTitle
            eyebrow="About Nitin Goswami"
            title="A section dedicated to personal credibility, purpose and leadership identity"
            description="Yeh section Nitin Goswami ko website par ek central guiding force ke roop me present karta hai. Tone inspirational hai, lekin design professional aur premium rakha gaya hai."
          />

          <div className="mt-8 grid gap-4 sm:grid-cols-2">
            {nitinPoints.map((point, index) => (
              <motion.div
                key={point}
                initial={{ opacity: 0, y: 24 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.55, delay: index * 0.08 }}
                className="glass-card rounded-[26px] p-5"
              >
                <p className="text-sm leading-7 text-slate-200">{point}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default NitinSection;
