import { motion } from 'motion/react';
import { AlertCircle } from 'lucide-react';
import { useLanguage } from '../translations';

export const TargetAudience = () => {
  const { t } = useLanguage();
  const challenges = [
    t.target.c1,
    t.target.c2,
    t.target.c3,
    t.target.c4
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t.target.title_part1}
            <span className="text-brand-orange">{t.target.title_part2}</span>
          </h2>
          <p className="text-zinc-600 max-w-2xl mx-auto text-lg font-sans">
            {t.target.subtitle}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          {challenges.map((challenge, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-brand-orange bg-brand-orange flex items-start gap-4 shadow-sm"
            >
              <AlertCircle className="w-6 h-6 text-brand-blue-dark shrink-0 mt-0.5" />
              <p className="text-brand-blue-dark font-medium font-sans">{challenge}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TargetAudience;
