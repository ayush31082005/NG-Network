import { motion } from 'framer-motion';
import { PlayCircle } from 'lucide-react';
import SectionTitle from './SectionTitle';
import { youtubeVideos } from '../data/siteData';

const repeated = [...youtubeVideos, ...youtubeVideos];

const YoutubeSection = () => {
  return (
    <section id="youtube" className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="YouTube Presence"
          title="Videos showcased in a smooth scrolling premium format"
          description="YouTube section me video cards automatically left-to-right flow me move karte hain. IDs ko edit karke tum real channel videos yahan laga sakte ho."
        />

        <motion.div
          initial={{ opacity: 0, y: 26 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.7 }}
          className="mt-10 overflow-hidden rounded-[32px] border border-white/10 bg-white/5 p-4 sm:p-5"
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
                  <div className="absolute inset-0 bg-slate-950/30" />
                  <div className="absolute inset-0 flex items-center justify-center">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-white/90 text-slate-950 shadow-soft">
                      <PlayCircle size={26} />
                    </div>
                  </div>
                </div>
                <div className="p-5">
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
