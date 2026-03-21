import { motion } from 'motion/react';
import { Settings, DollarSign, Megaphone, Users, Briefcase } from 'lucide-react';
import { useLanguage } from '../translations';

export const AIOpportunityMap = () => {
  const { t } = useLanguage();
  const areas = [
    { icon: <Settings className="w-6 h-6" />, name: t.map.operations, desc: t.map.operationsDesc, iconBg: 'bg-[#a9d6f3]' },
    { icon: <DollarSign className="w-6 h-6" />, name: t.map.finance, desc: t.map.financeDesc, iconBg: 'bg-[#f7f3e7]' },
    { icon: <Megaphone className="w-6 h-6" />, name: t.map.marketing, desc: t.map.marketingDesc, iconBg: 'bg-[#d7e021]' },
    { icon: <Users className="w-6 h-6" />, name: t.map.service, desc: t.map.serviceDesc, iconBg: 'bg-brand-blue-dark/10' },
    { icon: <Briefcase className="w-6 h-6" />, name: t.map.hr, desc: t.map.hrDesc, iconBg: 'bg-[#f99830]' }
  ];

  return (
    <div className="py-24 relative overflow-hidden">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4 text-black font-serif">{t.map.title}</h2>
          <p className="text-zinc-600 max-w-2xl mx-auto font-sans">{t.map.subtitle}</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 max-w-5xl mx-auto">
          {areas.map((area, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.1 }}
              className="p-6 rounded-2xl border border-zinc-200 bg-white transition-all hover:shadow-md hover:-translate-y-1"
            >
              <div className={`w-12 h-12 rounded-xl flex items-center justify-center mb-4 shadow-sm ${area.iconBg} text-[#303994]`}>
                {area.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2 text-black relative z-10 font-serif">{area.name}</h3>
              <p className="text-sm text-zinc-800 relative z-10 font-sans">{area.desc}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};
