import { motion } from 'motion/react';
import { FileText, Bot, Zap, BarChart, Mail } from 'lucide-react';
import { useLanguage } from '../translations';

export const ConcreteExamples = () => {
  const { t } = useLanguage();
  const examples = [
    { icon: <FileText className="w-5 h-5" />, text: t.examples.e1 },
    { icon: <Bot className="w-5 h-5" />, text: t.examples.e2 },
    { icon: <Zap className="w-5 h-5" />, text: t.examples.e3 },
    { icon: <BarChart className="w-5 h-5" />, text: t.examples.e4 },
    { icon: <Mail className="w-5 h-5" />, text: t.examples.e5 }
  ];

  return (
    <section id="voorbeelden" className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="mb-16 md:w-2/3"
        >
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
            {t.examples.title_part1}
            <span className="text-brand-blue-light">{t.examples.title_part2}</span>
          </h2>
          <p className="text-zinc-600 text-lg font-sans">
            {t.examples.subtitle}
          </p>
        </motion.div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
          {examples.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              className="p-6 rounded-2xl border border-zinc-200 bg-white flex items-start gap-4 shadow-sm hover:shadow-md transition-all"
            >
              <div className="w-10 h-10 rounded-xl bg-brand-blue-light flex items-center justify-center shrink-0 text-brand-blue-dark">
                {item.icon}
              </div>
              <p className="text-brand-blue-dark font-medium pt-2 font-sans">{item.text}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ConcreteExamples;
