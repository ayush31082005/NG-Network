import { motion } from 'framer-motion';

const NitinSection = () => {
  return (
    <section id="nitin" className="py-4 sm:py-6">
      <div className="section-shell">
        <div className="grid items-center gap-2 lg:grid-cols-2">

          {/* LEFT IMAGE */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative overflow-hidden rounded-[28px]"
          >
            <img
              src="/images/nitin.jpg"
              alt="Nitin Goswami"
              className="h-[380px] w-full object-cover sm:h-[480px]"
            />

            {/* Overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />

            {/* Text on Image */}
            <div className="absolute bottom-0 left-0 p-3">
              <h3 className="text-xl font-semibold text-white sm:text-2xl">
                Nitin Goswami
              </h3>
              <p className="text-sm text-slate-300">
                Founder & CEO, NG Networks
              </p>
            </div>
          </motion.div>

          {/* RIGHT CONTENT */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="glass-card rounded-[28px] p-3 text-center sm:p-4"
          >
            <h2 className="text-2xl font-bold text-white sm:text-3xl">
              Founder’s Story – NG Networks
            </h2>

            <p className="mt-1.5 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              <span className="font-semibold text-white">Nitin Goswami</span>, Founder of NG Networks,
              began his journey with a vision to bridge the gap between education and real-world job skills.
              Coming from a humble background, he understood the challenges students face in finding clear
              career direction and practical learning opportunities.
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              This vision led him to build NG Networks a platform focused on industry-relevant training,
              mentorship, and placement-ready skills. Under his leadership, thousands of learners have
              developed expertise in networking, cybersecurity, cloud computing, and IT domains.
            </p>

            <p className="mt-2 text-sm leading-7 text-slate-300 sm:text-base sm:leading-8">
              Nitin strongly believes in discipline, consistency, and quality learning. His mission is to
              empower students with the right guidance and opportunities to build successful careers and
              contribute to a skilled and future-ready workforce.
            </p>
          </motion.div>


        </div>
      </div>
    </section>
  );
};

export default NitinSection;