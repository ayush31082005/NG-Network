import { motion } from 'framer-motion';

const SectionTitle = ({ eyebrow, title, description, align = 'left' }) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.25 }}
      transition={{ duration: 0.6 }}
      className={align === 'center' ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'}
    >
      <span className="inline-flex rounded-full border border-brand-400/20 bg-brand-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.3em] text-brand-200">
        {eyebrow}
      </span>
      <h2 className="mt-4 text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
        {title}
      </h2>
      <p className="mt-4 text-base leading-7 text-slate-300 sm:text-lg">{description}</p>
    </motion.div>
  );
};

export default SectionTitle;
