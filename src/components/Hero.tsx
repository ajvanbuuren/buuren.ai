import { motion, useScroll, useTransform } from 'motion/react';
import { useRef } from 'react';
import { ArrowRight } from 'lucide-react';
import { useLanguage } from '../translations';

export const Hero = () => {
  const { t } = useLanguage();
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"]
  });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "50%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative min-h-screen flex items-center justify-center pt-20 overflow-hidden bg-zinc-50">
      <motion.div 
        style={{ y, opacity }}
        className="relative z-10 max-w-4xl mx-auto px-6 text-center"
      >
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.1, ease: [0.16, 1, 0.3, 1] }}
          className="text-5xl md:text-7xl font-bold tracking-tighter leading-[1.1] mb-6"
        >
          {t.hero.title1}<br className="hidden md:block" />
          {t.hero.title2}<span className="text-transparent bg-clip-text bg-gradient-to-r from-brand-blue-dark to-brand-blue-light">{t.hero.title3}</span>
        </motion.h1>

        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
          className="text-lg md:text-xl text-zinc-600 max-w-2xl mx-auto mb-10 leading-relaxed font-sans"
        >
          {t.hero.desc}
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.3, ease: [0.16, 1, 0.3, 1] }}
          className="flex flex-col sm:flex-row items-center justify-center gap-4"
        >
          <a href="https://calendly.com/buurenai/ai-verkenning" target="_blank" rel="noopener noreferrer" className="w-full sm:w-auto bg-brand-blue-dark text-white px-8 py-4 rounded-lg font-medium hover:bg-brand-blue-dark/90 transition-all flex items-center justify-center gap-2 group shadow-xl shadow-brand-blue-dark/10 border-beam font-sans">
            {t.hero.cta}
            <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </motion.div>
      </motion.div>
    </section>
  );
};

export default Hero;
