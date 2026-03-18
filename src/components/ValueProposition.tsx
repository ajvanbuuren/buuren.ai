import { motion } from 'motion/react';
import { Lightbulb, Target, ShieldCheck } from 'lucide-react';
import { useLanguage } from '../translations';

export const ValueProposition = () => {
  const { t } = useLanguage();
  const values = [
    {
      icon: <Lightbulb className="w-6 h-6" />,
      title: t.value.t1,
      description: t.value.d1
    },
    {
      icon: <Target className="w-6 h-6" />,
      title: t.value.t2,
      description: t.value.d2
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: t.value.t3,
      description: t.value.d3
    }
  ];

  return (
    <section id="waarde" className="py-24 relative overflow-hidden bg-zinc-50/50 border-y border-dashed border-zinc-200/50">
      <div className="absolute inset-0 bg-grid-pattern opacity-10 pointer-events-none" />
      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t.value.title_part1}
            <span className="text-brand-lime">{t.value.title_part2}</span>
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto font-sans">
            {t.value.subtitle}
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {values.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-8 rounded-2xl border border-zinc-200 bg-white hover:shadow-xl hover:shadow-zinc-200/50 transition-all duration-300"
            >
              <div className="w-12 h-12 rounded-xl bg-brand-lime flex items-center justify-center mb-6 text-brand-blue-dark">
                {item.icon}
              </div>
              <h3 className="text-xl font-semibold mb-3">{item.title}</h3>
              <p className="text-zinc-600 leading-relaxed font-sans">
                {item.description}
              </p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ValueProposition;
