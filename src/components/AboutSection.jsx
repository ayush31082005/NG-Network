import { motion } from 'framer-motion';

const AboutSection = () => {
  return (
    <section id="about" className="py-20 sm:py-24">
      <div className="section-shell">
        <div className="grid items-stretch overflow-hidden rounded-[32px] border border-white/10 bg-white/5 shadow-[0_20px_80px_rgba(0,0,0,0.35)] backdrop-blur-xl lg:grid-cols-2">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative flex items-center px-6 py-10 sm:px-10 sm:py-14 lg:px-16"
          >
            {/* premium glow */}
            <div className="absolute -left-10 top-10 h-40 w-40 rounded-full bg-brand-400/10 blur-3xl" />
            <div className="absolute bottom-0 right-0 h-40 w-40 rounded-full bg-violet-500/10 blur-3xl" />

            <div className="relative max-w-2xl">
              <h2 className="text-3xl font-bold leading-tight text-white sm:text-4xl lg:text-5xl">
                About NG Networks
              </h2>

              <p className="mt-6 text-base leading-8 text-slate-300 sm:text-lg sm:leading-9">
                Empowering the next generation of{' '}
                <span className="font-semibold text-white">IT professionals</span>{' '}
                with cutting-edge training in{' '}
                <span className="font-semibold text-white">
                  Networking, Cyber security, and Cloud Computing.
                </span>{' '}
                Our expert-led, hands-on courses like{' '}
                <span className="font-semibold text-white">
                  CCNA, CCNP, and Ethical Hacking
                </span>{' '}
                are designed to help you gain real-world skills, earn global
                certifications, and{' '}
                <span className="font-semibold text-white">
                  build a successful career in the IT industry.
                </span>
              </p>
            </div>
          </motion.div>

          {/* Right Image */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.8 }}
            className="relative min-h-[320px] sm:min-h-[420px] lg:min-h-[540px]"
          >
            <img
              src="/images/aboute.jpg"
              alt="About NG Networks"
              className="h-full w-full object-cover"
            />

            {/* image overlay for theme match */}
            <div className="absolute inset-0 bg-gradient-to-tr from-slate-950/35 via-transparent to-slate-950/20" />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;