import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SectionTitle from './SectionTitle';
import { impactItems, impactStats } from '../data/siteData';

const ImpactCard = ({ item }) => (
  <div className="glass-card w-[240px] shrink-0 rounded-[28px] p-4 sm:w-[280px]">
    <div className="flex items-start justify-between gap-4">
      <div>
        <h3 className="text-base font-semibold text-white">{item.title}</h3>
        <p className="mt-2 text-xs leading-6 text-slate-300">{item.desc}</p>
      </div>

      <span className="rounded-full border border-brand-300/20 bg-brand-400/10 px-2 py-0.5 text-[10px] font-medium text-brand-200">
        {item.metric}
      </span>
    </div>
  </div>
);

const repeated = [...impactItems, ...impactItems];

const ImpactSection = () => {
  const trackRef = useRef(null);
  const sectionRef = useRef(null);
  const statsRef = useRef([]);
  const valueRefs = useRef([]);

  useEffect(() => {
    const ctx = gsap.context(() => {
      gsap.from(sectionRef.current, {
        opacity: 0,
        y: 40,
        duration: 1,
        ease: 'power3.out',
      });

      gsap.from(statsRef.current, {
        opacity: 0,
        y: 30,
        duration: 0.8,
        stagger: 0.15,
        ease: 'power3.out',
        delay: 0.2,
      });

      impactStats.forEach((item, index) => {
        if (typeof item.endValue !== 'number') return;

        const valueObj = { value: 0 };
        const el = valueRefs.current[index];
        if (!el) return;

        gsap.to(valueObj, {
          value: item.endValue,
          duration: 2,
          delay: 0.4 + index * 0.2,
          ease: 'power2.out',
          onUpdate: () => {
            const isDecimal = item.endValue % 1 !== 0;
            const currentValue = isDecimal
              ? valueObj.value.toFixed(1)
              : Math.floor(valueObj.value);

            el.textContent = `${currentValue}${item.suffix || ''}`;
          },
        });
      });

      const track = trackRef.current;
      if (!track) return;

      const totalWidth = track.scrollWidth / 2;

      const tween = gsap.to(track, {
        x: -totalWidth,
        duration: 28,
        ease: 'none',
        repeat: -1,
      });

      const parent = track.parentElement;
      if (parent) {
        const handleEnter = () => tween.pause();
        const handleLeave = () => tween.resume();

        parent.addEventListener('mouseenter', handleEnter);
        parent.addEventListener('mouseleave', handleLeave);

        return () => {
          parent.removeEventListener('mouseenter', handleEnter);
          parent.removeEventListener('mouseleave', handleLeave);
        };
      }
    }, sectionRef);

    return () => ctx.revert();
  }, []);

  return (
    <section id="impact" ref={sectionRef} className="py-8 sm:py-10">
      <div className="section-shell">
        <SectionTitle
          eyebrow="OUR IMPACT"
          title="Impact stories that keep moving like the community itself"
          description="Explore how NG Networks is creating real change through mentorship, guidance and skill development."
          align="center"
        />

        <div className="mt-4 flex gap-4 overflow-x-auto pb-4 scroll-smooth snap-x snap-mandatory lg:grid lg:grid-cols-5 lg:overflow-visible lg:pb-0 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden">
          {impactStats.map((item, index) => (
            <div
              key={item.title}
              ref={(el) => (statsRef.current[index] = el)}
              className="relative min-w-[240px] snap-center overflow-hidden rounded-[20px] border border-white/10 bg-white/5 p-4 text-center lg:min-w-0"
            >
              <p className="text-[10px] font-bold uppercase tracking-[0.2em] text-slate-400 sm:text-xs">
                {item.title}
              </p>

              <p
                ref={(el) => (valueRefs.current[index] = el)}
                className="mt-3 text-2xl font-bold text-white sm:text-3xl"
              >
                {typeof item.endValue === 'number'
                  ? `0${item.suffix || ''}`
                  : item.value}
              </p>

              <p className="mt-1.5 text-[11px] font-medium leading-relaxed text-slate-500 sm:text-xs text-balance">
                {item.label}
              </p>

              <div className="absolute -right-4 -top-4 h-12 w-12 rounded-full bg-brand-400/5 blur-xl" />
            </div>
          ))}
        </div>



        <div className="mt-6 overflow-hidden">
          <div className="flex justify-center">
            <div ref={trackRef} className="flex gap-4 sm:gap-5">
              {repeated.map((item, index) => (
                <ImpactCard item={item} key={`${item.title}-${index}`} />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ImpactSection;