import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';
import { heroStats } from '../data/siteData';

const HeroSection = () => {
  return (
    <section id="home" className="relative overflow-hidden pt-15 sm:pt-20">
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover opacity-25"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero.mp4" type="video/mp4" />
        </video>
        <div className="absolute inset-0 bg-slate-950/75" />
        <div className="absolute inset-0 bg-[size:32px_32px] bg-grid opacity-20" />
      </div>

      <div className="section-shell relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="grid items-center gap-14 lg:grid-cols-[1.2fr_0.8fr]">
          <div>
            <motion.span
              initial={{ opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="inline-flex rounded-full border border-brand-300/25 bg-brand-400/10 px-4 py-1 text-xs font-semibold uppercase tracking-[0.28em] text-brand-200"
            >
              Empowering learners • Building futures
            </motion.span>

            <motion.h1
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.1 }}
              className="mt-6 max-w-4xl text-4xl font-black leading-tight text-white sm:text-5xl lg:text-7xl"
            >
              Premium digital presence for <span className="text-gradient">NG Network</span>
            </motion.h1>

            <motion.p
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.18 }}
              className="mt-6 max-w-2xl text-base leading-8 text-slate-300 sm:text-lg"
            >
              A modern, responsive and highly engaging website concept that highlights impact, admissions,
              mentorship, testimonials and YouTube presence in one premium experience.
            </motion.p>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.26 }}
              className="mt-8 flex flex-col gap-4 sm:flex-row"
            >
              <a
                href="#admission"
                className="inline-flex items-center justify-center gap-2 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-slate-950 transition hover:translate-y-[-2px]"
              >
                Start Admission <ArrowRight size={18} />
              </a>
              <a
                href="#youtube"
                className="inline-flex items-center justify-center gap-2 rounded-full border border-white/15 bg-white/5 px-6 py-3.5 text-sm font-semibold text-white transition hover:bg-white/10"
              >
                Watch Videos <PlayCircle size={18} />
              </a>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, y: 22 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.65, delay: 0.34 }}
              className="mt-10 grid max-w-2xl grid-cols-1 gap-4 sm:grid-cols-3"
            >
              {heroStats.map((item) => (
                <div key={item.label} className="glass-card rounded-3xl p-5">
                  <p className="text-2xl font-bold text-white sm:text-3xl">{item.value}</p>
                  <p className="mt-2 text-sm text-slate-400">{item.label}</p>
                </div>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.94 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="absolute -left-6 top-12 h-32 w-32 rounded-full bg-brand-400/30 blur-3xl" />
            <div className="absolute -right-6 bottom-6 h-32 w-32 rounded-full bg-violet-500/30 blur-3xl" />
            <div className="glass-card relative overflow-hidden rounded-[32px] p-5 sm:p-6">
              <div className="rounded-[28px] border border-white/10 bg-gradient-to-br from-slate-900 to-slate-800 p-6">
                <div className="flex items-center gap-3">
                  <div className="h-3 w-3 rounded-full bg-emerald-400" />
                  <div className="h-3 w-3 rounded-full bg-amber-400" />
                  <div className="h-3 w-3 rounded-full bg-rose-400" />
                </div>
                <div className="mt-8 space-y-4">
                  <div className="rounded-3xl border border-brand-300/20 bg-brand-400/10 p-5">
                    <p className="text-xs uppercase tracking-[0.3em] text-brand-200">Live Experience</p>
                    <p className="mt-3 text-2xl font-bold text-white">Video-led storytelling</p>
                    <p className="mt-2 text-sm leading-7 text-slate-300">
                      Hero background video, layered gradients and cinematic motion for a premium first impression.
                    </p>
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-slate-400">Designed for</p>
                      <p className="mt-1 font-semibold text-white">Mobile + Desktop</p>
                    </div>
                    <div className="rounded-3xl border border-white/10 bg-white/5 p-4">
                      <p className="text-sm text-slate-400">Look & Feel</p>
                      <p className="mt-1 font-semibold text-white">Premium + Modern</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
