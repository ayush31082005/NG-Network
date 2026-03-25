import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';
import { ArrowRight, PlayCircle } from 'lucide-react';

const heroSlides = [
  'BUILD YOUR CAREER IN NETWORKING EXCELLENCE',
  'KICKSTART YOUR CYBERSECURITY CAREER & LAND PACKAGES UP TO 36 LPA',
  'SHAPING THE NEXT GENERATION OF NETWORK PROFESSIONALS',
];

const HeroSection = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentSlide((prev) => (prev + 1) % heroSlides.length);
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  return (
    <section id="home" className="relative overflow-hidden pt-[56px]">

      {/* 🔥 BACKGROUND VIDEO */}
      <div className="absolute inset-0">
        <video
          className="h-full w-full object-cover"
          autoPlay
          muted
          loop
          playsInline
        >
          <source src="/videos/hero1.mp4" type="video/mp4" />
        </video>

        {/* overlays */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/80 via-slate-950/60 to-black/40" />
        <div className="absolute inset-0 bg-[size:32px_32px] bg-grid opacity-10" />
      </div>

      {/* 🔥 CONTENT */}
      <div className="section-shell relative z-10 py-16 sm:py-20 lg:py-24">
        <div className="flex min-h-[75vh] items-center justify-center text-center">
          <div className="mx-auto max-w-5xl">

            {/* TITLE */}
            <motion.h1
              key={currentSlide}
              initial={{ opacity: 0, y: 30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.7 }}
              className="text-3xl font-extrabold uppercase leading-[1.1] tracking-wide text-white sm:text-4xl lg:text-6xl"
            >
              {heroSlides[currentSlide]}
            </motion.h1>

            {/* LINE */}
            <motion.div
              initial={{ opacity: 0, scaleX: 0.6 }}
              animate={{ opacity: 1, scaleX: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="mx-auto mt-6 h-2 w-56 rounded-full bg-gradient-to-r from-yellow-300 via-amber-400 to-transparent shadow-[0_0_30px_rgba(251,191,36,0.7)] sm:w-72"
            />

            {/* BUTTONS */}
            <motion.div
              initial={{ opacity: 0, y: 25 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="mt-10 flex flex-col items-center gap-4 sm:flex-row sm:justify-center"
            >
              {/* 🔥 FIXED BUTTON */}
              <a
                href="#admission"
                className="inline-flex min-w-[200px] items-center justify-center gap-2 rounded-full border-2 border-white bg-black/30 px-8 py-4 text-base font-semibold text-white transition hover:bg-white hover:text-slate-950"
              >
                Enroll Now <ArrowRight size={18} />
              </a>

              <a
                href="#youtube"
                className="inline-flex min-w-[200px] items-center justify-center gap-2 rounded-full border border-white/20 bg-white/10 px-8 py-4 text-base font-semibold text-white transition hover:bg-white/20"
              >
                Watch Videos <PlayCircle size={18} />
              </a>
            </motion.div>

          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;