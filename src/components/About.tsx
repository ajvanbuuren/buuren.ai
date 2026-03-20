import { motion } from 'motion/react';
import { useLanguage } from '../translations';

export const About = () => {
  const { t } = useLanguage();
  return (
  <section id="over-ons" className="py-24 relative overflow-hidden">
    <div className="max-w-7xl mx-auto px-6">
      <div className="grid md:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-6">
            {t.about.title}
          </h2>
          <div className="space-y-4 text-lg text-zinc-600 font-sans">
            <p>
              {t.about.p1}
            </p>
            <p>
              {t.about.p2}
            </p>
            <p>
              {t.about.p3}
            </p>
          </div>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="relative aspect-square md:aspect-[4/3] rounded-3xl overflow-hidden shadow-2xl"
        >
          <img 
            src="/rotterdam-skyline.jpg" 
            alt="Rotterdam Skyline" 
            className="w-full h-full object-cover"
            loading="lazy"
          />
          <div className="absolute inset-0 bg-brand-blue-dark/10 mix-blend-multiply pointer-events-none" />
        </motion.div>
      </div>
    </div>
  </section>
  );
};

export default About;
