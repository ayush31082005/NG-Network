import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { youtubeVideos } from '../data/siteData';

const repeated = [...youtubeVideos, ...youtubeVideos];

const YoutubeSection = () => {
  return (
    <section id="youtube" className="py-4 sm:py-6">
      <div className="section-shell">
        <SectionTitle
          eyebrow="YouTube Channel"
          title="Watch the latest sessions, success stories and career guidance videos"
          description="Explore featured videos from the NG Networks YouTube channel in a smooth scrolling layout."
          align="center"
        />

        <div className="mt-1 flex justify-center">
          <a
            href="https://www.youtube.com/@ngnetworkss"
            target="_blank"
            rel="noreferrer"
            className="inline-flex items-center justify-center rounded-full border border-red-500/30 bg-red-500/10 px-6 py-3 text-sm font-semibold text-white transition hover:bg-red-500/20"
          >
            Visit YouTube Channel
          </a>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-3 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 sm:p-5"
        >
          <div className="marquee-track flex gap-5 animate-marqueeReverse">
            {repeated.map((video, index) => (
              <a
                key={`${video.id}-${index}`}
                href={`https://www.youtube.com/watch?v=${video.id}`}
                target="_blank"
                rel="noreferrer"
                className="glass-card group block w-[310px] shrink-0 overflow-hidden rounded-[28px]"
              >
                <div className="relative">
                  <img
                    src={`https://img.youtube.com/vi/${video.id}/hqdefault.jpg`}
                    alt={video.title}
                    className="h-48 w-full object-cover transition duration-500 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-slate-950/35" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-slate-950 shadow-soft">
                      <PlayCircle size={26} />
                    </div>
                  </div>
                </div>

                <div className="p-3">
                  <h3 className="text-lg font-semibold text-white">{video.title}</h3>
                  <p className="mt-2 text-sm leading-7 text-slate-300">{video.desc}</p>
                </div>
              </a>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default YoutubeSection;