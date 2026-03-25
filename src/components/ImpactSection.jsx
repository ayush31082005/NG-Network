import { useEffect, useRef } from 'react';
import gsap from 'gsap';
import SectionTitle from './SectionTitle';
import { impactItems, impactStats } from '../data/siteData';

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
    <section id="impact" ref={sectionRef} className="py-20 sm:py-24">
      <div className="section-shell">
        <SectionTitle
          eyebrow="OUR IMPACT"
          title="Impact stories that keep moving like the community itself"
          description="Explore how NG Networks is creating real change through mentorship, guidance and skill development."
          align="center"
        />

        {/* Impact Stats */}
        <div className="mt-10 grid gap-4 sm:grid-cols-3">
          {impactStats.map((item, index) => (
            <div
              key={item.label}
              ref={(el) => (statsRef.current[index] = el)}
              className="glass-card rounded-[28px] p-6 text-center"
            >
              <p className="text-2xl font-medium uppercase tracking-wide text-slate-200 sm:text-3xl">
                {item.title}
              </p>

              <p
                ref={(el) => (valueRefs.current[index] = el)}
                className="mt-4 text-3xl font-bold text-white sm:text-4xl"
              >
                0{item.suffix || ''}
              </p>

              <p className="mt-2 text-sm leading-6 text-slate-300">
                {item.label}
              </p>
            </div>
          ))}
        </div>

        {/* GSAP Slider */}
        <div className="mt-12 overflow-hidden">
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