import { motion } from 'framer-motion';
import SectionTitle from './SectionTitle';
import { impactItems } from '../data/siteData';

const ImpactCard = ({ item }) => (
  <div className="glass-card w-[280px] shrink-0 rounded-[28px] p-5 sm:w-[320px]">
    <div className="flex items-start justify-between gap-4">
      <div>
        <h3 className="text-lg font-semibold text-white">{item.title}</h3>
        <p className="mt-3 text-sm leading-7 text-slate-300">{item.desc}</p>
      </div>
      <span className="rounded-full border border-brand-300/20 bg-brand-400/10 px-3 py-1 text-xs font-medium text-brand-200">
        {item.metric}
      </span>
    </div>
  </div>
);

const repeated = [...impactItems, ...impactItems];

const ImpactSection = () => {
  return (
    <section id="impact" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="AE Impact"
          title="Impact stories that keep moving like the community itself"
          description="Is section me NG Network ke outcomes, initiatives aur reach ko smooth left-to-right motion me highlight kiya gaya hai taki website zyada dynamic aur engaging lage."
        />

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-10 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 sm:p-5"
        >
          <div className="marquee-track flex gap-4 animate-marquee sm:gap-5">
            {repeated.map((item, index) => (
              <ImpactCard item={item} key={`${item.title}-${index}`} />
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default ImpactSection;
