import { motion } from 'motion/react';
import { Clock, CheckCircle2, Lightbulb, ChevronRight } from 'lucide-react';
import { useLanguage } from '../translations';

export const CTA = () => {
  const { t } = useLanguage();
  return (
  <section id="contact" className="py-32 relative overflow-hidden">
    <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
    <div className="absolute inset-0 bg-gradient-to-t from-white to-transparent pointer-events-none" />
    
    <div className="max-w-3xl mx-auto px-6 relative z-10">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6 }}
        className="glass-panel rounded-3xl p-10 md:p-16 border border-zinc-200/50 relative overflow-hidden"
      >
        <div className="absolute inset-0 bg-mesh opacity-20" />
        <div className="relative z-10">
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-5xl font-bold tracking-tight mb-6">
              {t.cta.title}
            </h2>
            <p className="text-lg text-zinc-600 font-sans">
              {t.cta.subtitle}
            </p>
          </div>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-6 mb-10 text-sm font-medium text-zinc-600 font-sans">
            <div className="flex items-center gap-2">
              <Clock className="w-5 h-5 text-brand-blue-dark" />
              {t.cta.f1}
            </div>
            <div className="flex items-center gap-2">
              <CheckCircle2 className="w-5 h-5 text-brand-lime" />
              {t.cta.f2}
            </div>
            <div className="flex items-center gap-2">
              <Lightbulb className="w-5 h-5 text-brand-orange" />
              {t.cta.f3}
            </div>
          </div>

          <a href="https://calendly.com/buurenai/ai-verkenning" target="_blank" rel="noopener noreferrer" onClick={() => { if (typeof gtag === 'function') gtag('event', 'calendly_click', { event_category: 'conversion', event_label: 'bottom_cta' }); }} className="w-full sm:w-auto bg-brand-blue-dark text-white px-8 py-4 rounded-xl font-medium hover:bg-brand-blue-dark/90 transition-all flex items-center justify-center gap-2 mx-auto group border-beam shadow-[0_0_30px_rgba(48,58,149,0.2)] font-sans">
            {t.cta.btn}
            <ChevronRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
          </a>
        </div>
      </motion.div>
    </div>
  </section>
  );
};

export default CTA;
